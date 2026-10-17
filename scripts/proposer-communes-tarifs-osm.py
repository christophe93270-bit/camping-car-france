#!/usr/bin/env python3
"""Audit en lecture seule des communes et tarifs OSM; aucune publication automatique."""
import csv
import json
import re
import time
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

app = Path("app.js").read_text(encoding="utf-8")
files = list(dict.fromkeys(re.findall(r'fetch\(["\'](aires(?:-[a-z-]+)?\.json)(?:\?[^"\']*)?["\']', app)))
rows = []
candidates = {}
for filename in files:
    if not Path(filename).is_file():
        continue
    for index, item in enumerate(json.loads(Path(filename).read_text(encoding="utf-8"))):
        sid = str(item.get("sourceId") or "")
        match = re.fullmatch(r"(node|way|relation)/(\d+)", sid)
        if not match:
            continue
        city = str(item.get("city") or "").strip().lower()
        price = str(item.get("price") or "").strip().lower()
        if city not in ("", "commune à confirmer", "commune a confirmer", "à confirmer", "inconnue") and price and "confirm" not in price:
            continue
        candidates.setdefault(match.group(1), []).append((match.group(2), filename, index, item))

for kind, entries in candidates.items():
    ids = sorted(set(entry[0] for entry in entries))
    found = {}
    for offset in range(0, len(ids), 150):
        batch = ids[offset:offset+150]
        url = f"https://api.openstreetmap.org/api/0.6/{kind}s?{kind}s=" + ",".join(batch)
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "CampingCarFrance-communes-tarifs-audit/1.0"})
            with urllib.request.urlopen(request, timeout=45) as response:
                root = ET.fromstring(response.read())
            for element in root.findall(kind):
                found[element.attrib["id"]] = {tag.attrib["k"]: tag.attrib.get("v", "") for tag in element.findall("tag")}
        except Exception as exc:
            print("LOT_EN_ERREUR", kind, offset // 150 + 1, str(exc))
        time.sleep(1)
    for sid, filename, index, item in entries:
        tags = found.get(sid)
        if tags is None:
            continue
        city = str(item.get("city") or "").strip().lower()
        price = str(item.get("price") or "").strip().lower()
        city_missing = city in ("", "commune à confirmer", "commune a confirmer", "à confirmer", "inconnue")
        price_missing = not price or "confirm" in price
        proposed_city = (tags.get("addr:city") or "").strip() if city_missing else ""
        # addr:city est une déclaration OSM, pas une preuve de rattachement administratif.
        # fee=yes/no indique uniquement si l'accès est payant, jamais un montant.
        fee = (tags.get("fee") or "").strip() if price_missing else ""
        charge = (tags.get("charge") or "").strip() if price_missing else ""
        if not proposed_city and not fee and not charge:
            continue
        # Classement indicatif uniquement : aucun tarif ni commune n'est publié.
        fee_norm = fee.casefold()
        if proposed_city and (fee or charge):
            decision = "COMMUNE_ET_TARIF_A_VERIFIER"
        elif proposed_city:
            decision = "COMMUNE_A_VERIFIER"
        elif charge:
            decision = "MONTANT_BRUT_A_INTERPRETER"
        elif fee_norm in ("yes", "no"):
            decision = "PAIEMENT_SANS_MONTANT"
        else:
            decision = "INDICATION_OSM_A_VERIFIER"
        # Le champ charge peut mélanger stationnement, eau, électricité et durée.
        # Ne proposer un montant exploitable qu'après validation humaine.
        charge_normalise = charge.strip().replace(",", ".")
        montant_simple = bool(re.fullmatch(r"\s*\d+(?:\.\d{1,2})?\s*(?:€|EUR|euros?)(?:\s*/\s*(?:nuit|jour|24\s*h|night|day))?\s*", charge_normalise, flags=re.I))
        nature_montant = "MONTANT_SIMPLE_A_CONFIRMER" if montant_simple else ("MONTANT_COMPLEXE_A_INTERPRETER" if charge else "")
        rows.append({
            "fichier": filename, "index": index, "nom": item.get("name", ""),
            "source_osm": f"https://www.openstreetmap.org/{kind}/{sid}",
            "commune_actuelle": item.get("city", ""),
            "commune_proposee_addr_city": proposed_city,
            "tarif_actuel": item.get("price", ""),
            "indication_fee_osm": fee,
            "montant_charge_osm_brut": charge,
            "nature_montant": nature_montant,
            "decision": decision,
        })
out = Path("rapports-enrichissement")
out.mkdir(exist_ok=True)
fields = ["fichier","index","nom","source_osm","commune_actuelle","commune_proposee_addr_city","tarif_actuel","indication_fee_osm","montant_charge_osm_brut","nature_montant","decision"]
with (out / "propositions-communes-tarifs-osm.csv").open("w", encoding="utf-8-sig", newline="") as stream:
    writer = csv.DictWriter(stream, fieldnames=fields)
    writer.writeheader()
    writer.writerows(rows)
bilan_montants = {nature: sum(row["nature_montant"] == nature for row in rows) for nature in ("MONTANT_SIMPLE_A_CONFIRMER", "MONTANT_COMPLEXE_A_INTERPRETER")}
bilan_decisions = {decision: sum(row["decision"] == decision for row in rows) for decision in sorted({row["decision"] for row in rows})}
print("BILAN_COMMUNES_TARIFS", json.dumps({"fiches_candidates": sum(map(len,candidates.values())), "propositions_a_verifier": len(rows), "categories": bilan_decisions, "montants": bilan_montants, "publication_automatique": False}, ensure_ascii=False))
