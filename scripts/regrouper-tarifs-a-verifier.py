#!/usr/bin/env python3
"""Regroupe les propositions OSM en lots de contrôle. Ne modifie aucune aire."""
import csv
import json
import re
from collections import Counter
from pathlib import Path

base = Path("rapports-enrichissement")
source = base / "propositions-communes-tarifs-osm.csv"
if not source.exists():
    raise SystemExit("Rapport OSM introuvable : lancer d'abord proposer-communes-tarifs-osm.py")
with source.open(encoding="utf-8-sig", newline="") as handle:
    proposals = list(csv.DictReader(handle))
lots = []
for row in proposals:
    if row.get("nature_montant") != "MONTANT_SIMPLE_A_CONFIRMER":
        continue
    name = row.get("nom", "")
    norm = name.casefold()
    if re.search(r"camping[ -]?car[ -]?park|campingcarpark", norm):
        operator = "CAMPING_CAR_PARK_A_RAPPROCHER"
    elif re.search(r"camping|ferme|domaine", norm):
        operator = "AUTRE_EXPLOITANT_A_IDENTIFIER"
    else:
        operator = "EXPLOITANT_A_IDENTIFIER"
    filename = row["fichier"]
    records = json.loads(Path(filename).read_text(encoding="utf-8"))
    idx = int(row["index"])
    if idx < 0 or idx >= len(records):
        raise ValueError(f"Index invalide: {filename} {idx}")
    record = records[idx]
    if record.get("name", "") != name:
        raise ValueError(f"Fiche modifiée depuis l'audit: {filename} {idx}")
    lots.append({
        "departement": record.get("department", ""),
        "exploitant_presume": operator,
        "nom": name,
        "commune": record.get("city", ""),
        "fichier": filename,
        "index": idx,
        "source_osm": row["source_osm"],
        "tarif_osm_non_verifie": row["montant_charge_osm_brut"],
        "tarif_officiel": "",
        "periode_validite": "",
        "url_source_officielle": "",
        "etat": "A_VERIFIER_MANUELLEMENT",
    })
lots.sort(key=lambda x: (x["exploitant_presume"], x["departement"], x["nom"].casefold()))
base.mkdir(exist_ok=True)
with (base / "lots-tarifs-a-verifier.csv").open("w", encoding="utf-8-sig", newline="") as handle:
    writer = csv.DictWriter(handle, fieldnames=list(lots[0]) if lots else ["departement","exploitant_presume","nom"])
    writer.writeheader()
    writer.writerows(lots)
counts = Counter((r["departement"], r["exploitant_presume"]) for r in lots)
with (base / "synthese-lots-tarifs.csv").open("w", encoding="utf-8-sig", newline="") as handle:
    writer = csv.writer(handle)
    writer.writerow(["departement","exploitant_presume","nombre_aires"])
    for (dept, operator), count in sorted(counts.items()):
        writer.writerow([dept, operator, count])
print("LOTS_TARIFS", json.dumps({"montants_osm_a_verifier": len(lots), "par_exploitant": dict(Counter(r["exploitant_presume"] for r in lots)), "publication_automatique": False}, ensure_ascii=False))
