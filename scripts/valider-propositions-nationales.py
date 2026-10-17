#!/usr/bin/env python3
"""Valide les propositions OSM et prépare des fichiers modifiés, sans toucher au dépôt."""
import csv, json, os, re, shutil
from collections import defaultdict
from pathlib import Path
root=Path("rapports-enrichissement")
source=root/"propositions-osm.csv"
out=Path("validation-nationale")
out.mkdir(exist_ok=True)
allowed={"Eau potable","Électricité","Vidange des eaux grises","Vidange des toilettes chimiques","Toilettes","Douches","Wi-Fi"}
positive={"yes","true","1","designated"}
keys={"drinking_water":"Eau potable","electricity":"Électricité","power_supply":"Électricité","grey_water":"Vidange des eaux grises","chemical_toilet":"Vidange des toilettes chimiques","toilets":"Toilettes","shower":"Douches","showers":"Douches","wifi":"Wi-Fi"}
group=defaultdict(list)
rejected=[]
with source.open(encoding="utf-8-sig",newline="") as fh:
    for rec in csv.DictReader(fh):
        try:
            path=Path(rec["fichier"])
            if path.name!=str(path) or not re.fullmatch(r"aires(?:-[a-z-]+)?\.json",path.name):
                raise ValueError("Chemin non autorisé")
            idx=int(rec["index"])
            tags=json.loads(rec["tags_justificatifs"])
            services=sorted({label for key,label in keys.items() if str(tags.get(key,"")).lower() in positive and label in allowed})
            if not services or rec.get("decision")!="A_VERIFIER_MANUELLEMENT":
                raise ValueError("Pas de service admissible")
            group[str(path)].append((idx,rec,services))
        except (ValueError,KeyError,TypeError,json.JSONDecodeError) as exc:
            rejected.append({"nom":rec.get("nom",""),"motif":str(exc)})
applied=[]
for path,proposals in group.items():
    rows=json.loads(Path(path).read_text(encoding="utf-8"))
    changed=False
    for idx,rec,services in proposals:
        try:
            row=rows[idx]
            if row.get("services") or row.get("name")!=rec["nom"] or row.get("source")!=rec["source_osm"]:
                raise ValueError("Fiche modifiée ou source différente")
            row["services"]=services
            row["servicesSource"]=rec["source_osm"]
            row["importReview"]="Services déclarés dans les tags OSM, non vérifiés sur place"
            applied.append({"fichier":path,"index":idx,"nom":row["name"],"services":services})
            changed=True
        except (IndexError,TypeError,KeyError,ValueError) as exc:
            rejected.append({"nom":rec.get("nom",""),"motif":str(exc)})
    if changed:
        dest=out/path
        dest.write_text(json.dumps(rows,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
(out/"propositions-retenues.json").write_text(json.dumps(applied,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
(out/"propositions-rejetees.json").write_text(json.dumps(rejected,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
print("VALIDATION_NATIONALE",json.dumps({"fiches_proposees":len(applied),"rejets":len(rejected),"fichiers_prepares":sum(bool(x) for x in group)},ensure_ascii=False))
print("AUCUNE_PUBLICATION_AUTOMATIQUE")
