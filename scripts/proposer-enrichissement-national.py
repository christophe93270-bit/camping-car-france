#!/usr/bin/env python3
"""Propositions nationales basées uniquement sur les tags explicites OpenStreetMap.

Ne modifie jamais les fichiers publiés. Une validation humaine est nécessaire.
"""
import csv
import json
import re
import time
import urllib.request
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

ROOT = Path("rapports-enrichissement")
ROOT.mkdir(exist_ok=True)
app = Path("app.js").read_text(encoding="utf-8")
files = list(dict.fromkeys(re.findall(r'fetch\(["\'](aires(?:-[a-z-]+)?\.json)(?:\?[^"\']*)?["\']', app)))
items = defaultdict(list)
examined = 0
for filename in files:
    path = Path(filename)
    if not path.exists():
        continue
    for index, row in enumerate(json.loads(path.read_text(encoding="utf-8"))):
        if not isinstance(row, dict):
            continue
        examined += 1
        sid = str(row.get("sourceId") or "")
        match = re.fullmatch(r"(node|way|relation)/(\d+)", sid)
        if match and (not row.get("services") or not row.get("price") or "confirm" in str(row.get("price")).lower()):
            items[match.group(1)].append((match.group(2), filename, index, row))

mapping = {
    "drinking_water": "Eau potable",
    "water": "Eau (potabilité à confirmer)",
    "electricity": "Électricité",
    "power_supply": "Électricité",
    "grey_water": "Vidange des eaux grises",
    "chemical_toilet": "Vidange des toilettes chimiques",
    "sanitary_dump_station": "Vidange (type à confirmer)",
    "toilets": "Toilettes",
    "shower": "Douches",
    "showers": "Douches",
    "wifi": "Wi-Fi",
}
def truth(value):
    return str(value).strip().lower() in ("yes", "true", "1", "designated")
proposals = []
errors = []
for kind, entries in items.items():
    ids = list(dict.fromkeys(x[0] for x in entries))
    found = {}
    for start in range(0, len(ids), 150):
        batch = ids[start:start+150]
        url = "https://api.openstreetmap.org/api/0.6/" + kind + "s?" + kind + "s=" + ",".join(batch)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "CampingCarFrance-national-audit/1.0 (public GitHub project)"})
            with urllib.request.urlopen(req, timeout=45) as response:
                root = ET.fromstring(response.read())
            for element in root.findall(kind):
                found[element.attrib["id"]] = {t.attrib["k"]: t.attrib.get("v", "") for t in element.findall("tag")}
        except Exception as exc:
            errors.append({"type": kind, "lot": start//150+1, "erreur": str(exc)})
        time.sleep(1)
    for sid, filename, index, row in entries:
        tags = found.get(sid)
        if tags is None:
            continue
        services = []
        for key, label in mapping.items():
            if truth(tags.get(key, "")) and label not in services:
                services.append(label)
        # Tags négatifs, valeurs absentes ou inconnues ne deviennent jamais des services.
        if not services or row.get("services"):
            continue
        proposals.append({
            "fichier": filename, "index": index, "nom": row.get("name", ""),
            "source_osm": "https://www.openstreetmap.org/" + kind + "/" + sid,
            "services_proposes": " | ".join(services),
            "tags_justificatifs": json.dumps({k:v for k,v in tags.items() if k in mapping}, ensure_ascii=False),
            "decision": "A_VERIFIER_MANUELLEMENT"
        })
fields = ["fichier","index","nom","source_osm","services_proposes","tags_justificatifs","decision"]
with (ROOT/"propositions-osm.csv").open("w", encoding="utf-8-sig", newline="") as handle:
    writer = csv.DictWriter(handle, fieldnames=fields)
    writer.writeheader()
    writer.writerows(proposals)
bilan = {"fiches_examinees": examined, "elements_osm_candidats": sum(len(v) for v in items.values()),
         "propositions_services": len(proposals), "lots_en_erreur": errors,
         "publication_automatique": False}
(ROOT/"bilan-propositions.json").write_text(json.dumps(bilan, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
print("BILAN_PROPOSITIONS_NATIONALES", json.dumps(bilan, ensure_ascii=False))
