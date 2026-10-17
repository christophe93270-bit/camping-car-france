#!/usr/bin/env python3
"""Inventaire national des fiches à enrichir, sans inventer de prestations."""
import csv, json, re
from pathlib import Path

app=Path("app.js").read_text(encoding="utf-8")
paths=list(dict.fromkeys(re.findall(r'fetch\(["\'](aires(?:-[a-z-]+)?\.json)(?:\?[^"\']*)?["\']',app)))
rows=[]
for path in paths:
    file=Path(path)
    if not file.is_file():
        continue
    data=json.loads(file.read_text(encoding="utf-8"))
    if not isinstance(data,list):
        continue
    for index,item in enumerate(data):
        if not isinstance(item,dict):
            continue
        price=str(item.get("price") or "")
        services=item.get("services") or []
        city=str(item.get("city") or "")
        missing_city=city.strip().lower() in {"commune à confirmer","commune a confirmer","à confirmer","a confirmer","inconnue","unknown",""}
        missing_price=not price or "confirm" in price.lower()
        if not services or missing_city or missing_price:
            rows.append({
                "fichier":path,"index":index,"departement":item.get("department",""),
                "nom":item.get("name",""),"commune":city,
                "latitude":item.get("latitude",""),"longitude":item.get("longitude",""),
                "source":item.get("source",""),
                "services_a_verifier":"oui" if not services else "non",
                "commune_a_verifier":"oui" if missing_city else "non",
                "tarif_a_verifier":"oui" if missing_price else "non",
            })
out=Path("rapports-enrichissement")
out.mkdir(exist_ok=True)
with (out/"fiches-a-verifier.csv").open("w",encoding="utf-8-sig",newline="") as handle:
    writer=csv.DictWriter(handle,fieldnames=list(rows[0]) if rows else ["fichier","index","departement","nom","commune","latitude","longitude","source","services_a_verifier","commune_a_verifier","tarif_a_verifier"])
    writer.writeheader()
    writer.writerows(rows)
summary={"fichiers_examines":len(paths),"fiches_a_verifier":len(rows),"services_a_verifier":sum(x["services_a_verifier"]=="oui" for x in rows),"communes_a_verifier":sum(x["commune_a_verifier"]=="oui" for x in rows),"tarifs_a_verifier":sum(x["tarif_a_verifier"]=="oui" for x in rows)}
(out/"bilan.json").write_text(json.dumps(summary,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
print("BILAN_ENRICHISSEMENT_NATIONAL",json.dumps(summary,ensure_ascii=False))
