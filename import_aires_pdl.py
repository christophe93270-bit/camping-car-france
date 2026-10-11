#!/usr/bin/env python3
"""Prépare un import des aires Pays de la Loire sans modifier la base publique.
Source : Région Pays de la Loire / e-SPRIT, licence ODbL.
"""
import json, re, unicodedata, urllib.request, urllib.error
from pathlib import Path

DATASET="234400034_070-001_offre-touristique-aires-de-camping-car-rpdl"
API=f"https://data.paysdelaloire.fr/api/explore/v2.1/catalog/datasets/{DATASET}/records"
SOURCE=f"https://data.paysdelaloire.fr/explore/dataset/{DATASET}/"
DEPS={"44","49","53","72","85"}
ROOT=Path(__file__).resolve().parent
def clean(x):
    if isinstance(x,dict): return str(x.get("fr") or x.get("value") or "").strip()
    return str(x or "").strip()
def pick(d,*keys):
    for key in keys:
        if key in d and clean(d[key]): return clean(d[key])
    return ""
def slug(x):
    s=unicodedata.normalize("NFKD",x).encode("ascii","ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+","-",s).strip("-")
def coordinates(d):
    for key in ("geo_point_2d","geo_point","geolocalisation","coordonnees","coordinates","localisation"):
        value=d.get(key)
        if isinstance(value,(list,tuple)) and len(value)==2:\n            try: return float(value[0]),float(value[1])\n            except (ValueError,TypeError): pass\n        if isinstance(value,dict):
            lat=value.get("lat",value.get("latitude"))
            lon=value.get("lon",value.get("lng",value.get("longitude")))
            if lat is not None and lon is not None:
                try: return float(lat),float(lon)
                except (ValueError,TypeError): pass
    return None
def main():
    rows=[]
    offset=0
    while True:
        url=f"{API}?limit=100&offset={offset}"
        req=urllib.request.Request(url,headers={"User-Agent":"CampingCarFrance/1.0 (open data research)"})
        try:\n            with urllib.request.urlopen(req,timeout=30) as resp: payload=json.load(resp)\n        except urllib.error.HTTPError as exc:\n            raise SystemExit(f"Erreur API {exc.code} : {url}") from exc
        batch=payload.get("results",[])
        rows+=batch
        offset+=len(batch)
        if not batch or offset>=payload.get("total_count",0): break
    print(f"Source: {len(rows)} enregistrements")
    if rows:\n        print("Champs disponibles:",", ".join(sorted(rows[0])))\n        (ROOT/"aires-import-champs.json").write_text(json.dumps({"keys":sorted(rows[0]),"sample":rows[0]},ensure_ascii=False,indent=2)+"\\n",encoding="utf-8")
    existing=json.loads((ROOT/"aires.json").read_text(encoding="utf-8"))
    seen={(x["department"],slug(x["name"]),slug(x["city"])) for x in existing}
    proposed=[]; rejected=[]
    for row in rows:
        name=pick(row,"nom_offre","nom","nom_du_site","nom_du_poi","nom_du_prestataire","titre","libelle","name","nom_de_l_offre","nom_commercial")
        city=pick(row,"commune","nom_commune","ville","localite","city","commune_de_l_offre")
        postal=pick(row,"code_postal","codepostal","cp","postal_code")
        dep=pick(row,"code_departement","departement","departement_code")[:2] or postal[:2]
        gps=coordinates(row)
        if not name or not city or dep not in DEPS or not gps:
            rejected.append({"raison":"Nom, commune, département ou GPS manquant/non reconnu","champs":row})
            continue
        lat,lon=gps
        if not (46<=lat<=49 and -3<=lon<=1):
            rejected.append({"raison":"GPS hors région","champs":row})
            continue
        key=(dep,slug(name),slug(city))
        if key in seen: continue
        seen.add(key)
        proposed.append({"department":dep,"name":name,"city":city,"type":"Aire de camping-car (donnée ouverte)",
          "services":["Services non renseignés"],"price":"Non confirmé",
          "status":"Donnée ouverte : services, accès et tarifs à confirmer",
          "source":SOURCE,"latitude":lat,"longitude":lon,
          "gpsSource":SOURCE,"dataLicense":"ODbL","dataAttribution":"Région Pays de la Loire / e-SPRIT",
          "importReview":"À contrôler avant publication"})
    output={"source":SOURCE,"licence":"ODbL","attribution":"Région Pays de la Loire / e-SPRIT",
      "recordsDownloaded":len(rows),"proposedCount":len(proposed),"rejectedCount":len(rejected),
      "proposed":proposed}
    (ROOT/"aires-import-propositions.json").write_text(json.dumps(output,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(f"Propositions: {len(proposed)}; à examiner: {len(rejected)}")\n    if rows and not proposed:\n        print("ATTENTION : aucun candidat. Vérifier aires-import-champs.json et adapter les noms de champs.")
    print("Fichier créé: aires-import-propositions.json (NON publié dans aires.json)")
if __name__=="__main__":main()
