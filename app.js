const weights = [
  {key:"welcome",name:"Accueil et qualité des aires",weight:25},
  {key:"price",name:"Prix du séjour",weight:20},
  {key:"tourism",name:"Tourisme et paysages",weight:20},
  {key:"parking",name:"Stationnement et réglementation",weight:10},
  {key:"services",name:"Services techniques",weight:10},
  {key:"safety",name:"Sécurité et tranquillité",weight:5},
  {key:"shops",name:"Commerces et vie pratique",weight:5},
  {key:"access",name:"Accessibilité routière",weight:5}
];
let departments = [];
let reviews = safeRead("ccf-reviews", []);
const grid = document.getElementById("department-grid");
const search = document.getElementById("search");
const sort = document.getElementById("sort");
const dialog = document.getElementById("department-dialog");

function safeRead(key, fallback){ try { const v=localStorage.getItem(key); return v?JSON.parse(v):fallback; } catch(e){ return fallback; } }
function safeWrite(key, value){ try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch(e){ return false; } }
function escapeHTML(value){ return String(value ?? "").replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function calcScore(scores){
  if(!scores || weights.some(w=>scores[w.key]===null || scores[w.key]===undefined || scores[w.key]==="" || !Number.isFinite(Number(scores[w.key])) || Number(scores[w.key])<0 || Number(scores[w.key])>100)) return null;
  return Math.round(weights.reduce((sum,w)=>sum+Number(scores[w.key])*w.weight,0))/100;
}
function codeOrder(code){ return /^\d+$/.test(code)?Number(code):code==="2A"?20.1:20.2; }
function render(){
  const q=search.value.trim().toLocaleLowerCase("fr");
  let items=departments.filter(d=>(d.name+" "+d.code).toLocaleLowerCase("fr").includes(q));
  if(sort.value==="code") items.sort((a,b)=>String(a.code).localeCompare(String(b.code),"fr",{numeric:true}));
  else if(sort.value==="score") items.sort((a,b)=>((b.verified?calcScore(b.scores):null)??-1)-((a.verified?calcScore(a.scores):null)??-1) || a.name.localeCompare(b.name,"fr"));
  else items.sort((a,b)=>a.name.localeCompare(b.name,"fr"));
  grid.innerHTML=items.map(d=>{
    const score=d.verified?calcScore(d.scores):null;
    return `<button class="department-card" data-code="${escapeHTML(d.code)}" aria-label="Voir la fiche ${escapeHTML(d.name)}">
      <span class="card-top"><span class="department-code">${escapeHTML(d.code)}</span><span class="card-score">${score===null?"À documenter":`${score}/100`}</span></span>
      <span class="card-name">${escapeHTML(d.name)}</span>
      <span class="card-foot"><span>${d.verified&&score!==null?"Données vérifiées":"Fiche à compléter"}</span><span class="card-arrow">↗</span></span>
    </button>`;
  }).join("");
  document.getElementById("result-count").textContent=`${items.length} département${items.length>1?"s":""}`;
  document.getElementById("empty-state").hidden=items.length!==0;
  grid.querySelectorAll("[data-code]").forEach(el=>el.addEventListener("click",()=>openDepartment(el.dataset.code)));
}
function openDepartment(code){
  const d=departments.find(x=>x.code===code); if(!d)return;
  const score=d.verified?calcScore(d.scores):null;
  const detail=weights.map(w=>{
    const value=d.scores?.[w.key];
    return `<div class="dialog-criterion"><span>${escapeHTML(w.name)} <small>· ${w.weight}%</small></span><strong>${value===undefined||value===null||value===""?"Non renseigné":`${value}/100`}</strong></div>`;
  }).join("");
  const localReviews=reviews.filter(r=>r.code===code);
  document.getElementById("dialog-content").innerHTML=`
    <div class="dialog-kicker">FICHE DÉPARTEMENT · ${escapeHTML(d.code)}</div>
    <h2 class="dialog-title">${escapeHTML(d.name)}</h2>
    <div class="dialog-subtitle">${d.region?escapeHTML(d.region):"France"} · Dernière vérification : ${d.lastChecked?escapeHTML(d.lastChecked):"pas encore renseignée"}</div>
    <div class="dialog-score"><strong>${score===null?"Note non disponible":`${score}/100`}</strong><p>${score===null?"La note sera publiée lorsque les huit critères auront été documentés.":"Note calculée à partir des huit critères."}</p></div>
    <h3>Les critères de notation</h3><div class="dialog-criteria">${detail}</div>
    <div class="dialog-note">${escapeHTML(d.notes||"Les données doivent être vérifiées avant de publier une note. Aucune donnée absente n'est assimilée à zéro.")}</div>
    <div class="dialog-links"><a href="https://www.data.gouv.fr/" target="_blank" rel="noopener">Rechercher des données publiques ↗</a><a href="https://www.openstreetmap.org/" target="_blank" rel="noopener">Voir la carte ↗</a></div>
    <div class="review-list"><h3>Avis de démonstration enregistrés dans ce navigateur</h3>${localReviews.length?localReviews.map(r=>`<div class="review-item"><strong>${"★".repeat(Number(r.rating))}${"☆".repeat(5-Number(r.rating))} · En attente de modération</strong><p>${escapeHTML(r.text)}</p><small>Séjour : ${escapeHTML(r.date)}</small></div>`).join(""):'<p class="dialog-subtitle">Aucun avis local pour cette fiche.</p>'}</div>`;
  dialog.showModal();
}
function populateSelect(){
  const select=document.getElementById("review-department");
  select.innerHTML='<option value="">Choisir un département</option>'+departments.slice().sort((a,b)=>a.name.localeCompare(b.name,"fr")).map(d=>`<option value="${escapeHTML(d.code)}">${escapeHTML(d.name)} (${escapeHTML(d.code)})</option>`).join("");
}
async function init(){
  try{
    const response=await fetch("departements.json");
    if(!response.ok) throw new Error("Fichier de données introuvable");
    departments=await response.json();
  }catch(e){
    grid.innerHTML='<div class="notice">Impossible de charger departements.json. Ouvrez le site via un hébergement web ou suivez les instructions du fichier README.</div>';
    return;
  }
  render(); populateSelect();
}
search.addEventListener("input",render);
sort.addEventListener("change",render);
document.getElementById("dialog-close").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
document.getElementById("review-form").addEventListener("submit",e=>{
  e.preventDefault();
  const review={
    id:`local-${Date.now()}`,
    code:document.getElementById("review-department").value,
    date:document.getElementById("review-date").value,
    rating:Number(document.getElementById("review-rating").value),
    text:document.getElementById("review-text").value.trim(),
    status:"pending",
    createdAt:new Date().toISOString()
  };
  if(review.text.length<20){document.getElementById("review-message").textContent="Merci de saisir au moins 20 caractères.";return;}
  reviews.push(review);
  const saved=safeWrite("ccf-reviews",reviews);
  document.getElementById("review-message").textContent=saved
    ?"Avis enregistré dans ce navigateur, en attente de modération. Il n'est pas transmis au site public."
    :"Impossible d'enregistrer cet avis dans le navigateur. Copiez son contenu avant de fermer la page.";
  if(saved)e.target.reset();
});
document.getElementById("year").textContent=new Date().getFullYear();
init();

async function initAires(){
  const target=document.getElementById("aire-grid");
  if(!target)return;
  try{
    const response=await fetch("aires.json");
    if(!response.ok)throw new Error("Données indisponibles");
    const existingAires=await response.json();
    let importedAires=[];
    try {
      const importedResponse=await fetch("aires-pdl.json");
      if(importedResponse.ok) importedAires=await importedResponse.json();
    } catch (_) { /* Le répertoire initial reste disponible. */ }
    let vendeeAires=[];
    try {
      const vendeeResponse=await fetch("aires-vendee.json");
      if(vendeeResponse.ok) vendeeAires=await vendeeResponse.json();
    } catch (_) { /* Les autres départements restent disponibles. */ }
    let charenteMaritimeAires=[];
    try {
      const response17=await fetch("aires-charente-maritime.json");
      if(response17.ok) charenteMaritimeAires=await response17.json();
    } catch (_) { /* Les autres départements restent disponibles. */ }
    let hautesPyreneesAires=[];
    try {
      const response65=await fetch("aires-hautes-pyrenees.json?v=20261013-1", {cache:"no-store"});
      if(response65.ok) hautesPyreneesAires=await response65.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let ariegeAires=[];
    try {
      const response09=await fetch("aires-ariege.json?v=20261013-1", {cache:"no-store"});
      if(response09.ok) ariegeAires=await response09.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let hauteGaronneAires=[];
    try {
      const response31=await fetch("aires-haute-garonne.json?v=20261013-1", {cache:"no-store"});
      if(response31.ok) hauteGaronneAires=await response31.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let tarnAires=[];
    try {
      const response81=await fetch("aires-tarn.json?v=20261013-1", {cache:"no-store"});
      if(response81.ok) tarnAires=await response81.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let aveyronAires=[];
    try {
      const response12=await fetch("aires-aveyron.json?v=20261013-1", {cache:"no-store"});
      if(response12.ok) aveyronAires=await response12.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let lotAires=[];
    try {
      const response46=await fetch("aires-lot.json?v=20261012-1", {cache:"no-store"});
      if(response46.ok) lotAires=await response46.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let tarnGaronneAires=[];
    try {
      const response82=await fetch("aires-tarn-et-garonne.json?v=20261012-1", {cache:"no-store"});
      if(response82.ok) tarnGaronneAires=await response82.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let gersAires=[];
    try {
      const response32=await fetch("aires-gers.json?v=20261012-1", {cache:"no-store"});
      if(response32.ok) gersAires=await response32.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let moselleAires=[];
    try {
      const response57=await fetch("aires-moselle.json?v=20261014-1", {cache:"no-store"});
      if(response57.ok) moselleAires=await response57.json();
    } catch(error) { console.warn("Chargement Moselle indisponible",error); }
    let meurtheMoselleAires=[];
    try {
      const response54=await fetch("aires-meurthe-et-moselle.json?v=20261014-1", {cache:"no-store"});
      if(response54.ok) meurtheMoselleAires=await response54.json();
    } catch(error) { console.warn("Chargement Meurthe-et-Moselle indisponible",error); }
    let vosgesAires=[];
    try {
      const response88=await fetch("aires-vosges.json?v=20261014-1", {cache:"no-store"});
      if(response88.ok) vosgesAires=await response88.json();
    } catch(error) { console.warn("Chargement Vosges indisponible",error); }
    let belfortAires=[];
    try {
      const response90=await fetch("aires-territoire-de-belfort.json?v=20261014-1", {cache:"no-store"});
      if(response90.ok) belfortAires=await response90.json();
    } catch(error) { console.warn("Chargement Territoire de Belfort indisponible",error); }
    let hauteSaoneAires=[];
    try {
      const response70=await fetch("aires-haute-saone.json?v=20261018-1", {cache:"no-store"});
      if(response70.ok) hauteSaoneAires=await response70.json();
    } catch(error) { console.warn("Chargement Haute-Saône indisponible",error); }
    let juraAires=[];
    try {
      const response39=await fetch("aires-jura.json?v=20261014-1", {cache:"no-store"});
      if(response39.ok) juraAires=await response39.json();
    } catch(error) { console.warn("Chargement Jura indisponible",error); }
    let doubsAires=[];
    try {
      const response25=await fetch("aires-doubs.json?v=20261014-1", {cache:"no-store"});
      if(response25.ok) doubsAires=await response25.json();
    } catch(error) { console.warn("Chargement Doubs indisponible",error); }
    let yonneAires=[];
    try {
      const response89=await fetch("aires-yonne.json?v=20261014-1", {cache:"no-store"});
      if(response89.ok) yonneAires=await response89.json();
    } catch(error) { console.warn("Chargement Yonne indisponible",error); }
    let nievreAires=[];
    try {
      const response58=await fetch("aires-nievre.json?v=20261014-1", {cache:"no-store"});
      if(response58.ok) nievreAires=await response58.json();
    } catch(error) { console.warn("Chargement Nièvre indisponible",error); }
    let coteDOrAires=[];
    try {
      const response21=await fetch("aires-cote-d-or.json?v=20261014-1", {cache:"no-store"});
      if(response21.ok) coteDOrAires=await response21.json();
    } catch(error) { console.warn("Chargement Côte-d’Or indisponible",error); }
    let saoneEtLoireAires=[];
    try {
      const response71=await fetch("aires-saone-et-loire.json?v=20261014-1", {cache:"no-store"});
      if(response71.ok) saoneEtLoireAires=await response71.json();
    } catch(error) { console.warn("Chargement Saône-et-Loire indisponible",error); }
    let ardecheAires=[];
    try {
      const response07=await fetch("aires-ardeche.json?v=20261014-1", {cache:"no-store"});
      if(response07.ok) ardecheAires=await response07.json();
    } catch(error) { console.warn("Chargement Ardèche indisponible",error); }
    let dromeAires=[];
    try {
      const response26=await fetch("aires-drome.json?v=20261014-1", {cache:"no-store"});
      if(response26.ok) dromeAires=await response26.json();
    } catch(error) { console.warn("Chargement Drôme indisponible",error); }
    let hauteSavoieAires=[];
    try {
      const response74=await fetch("aires-haute-savoie.json?v=20261014-1", {cache:"no-store"});
      if(response74.ok) hauteSavoieAires=await response74.json();
    } catch(error) { console.warn("Chargement Haute-Savoie indisponible",error); }
    let savoieAires=[];
    try {
      const response73=await fetch("aires-savoie.json?v=20261014-1", {cache:"no-store"});
      if(response73.ok) savoieAires=await response73.json();
    } catch(error) { console.warn("Chargement Savoie indisponible",error); }
    let isereAires=[];
    try {
      const response38=await fetch("aires-isere.json?v=20261014-1", {cache:"no-store"});
      if(response38.ok) isereAires=await response38.json();
    } catch(error) { console.warn("Chargement Isère indisponible",error); }
    let ainAires=[];
    try {
      const response01=await fetch("aires-ain.json?v=20261014-1", {cache:"no-store"});
      if(response01.ok) ainAires=await response01.json();
    } catch(error) { console.warn("Chargement Ain indisponible",error); }
    let rhoneAires=[];
    try {
      const response69=await fetch("aires-rhone.json?v=20261014-1", {cache:"no-store"});
      if(response69.ok) rhoneAires=await response69.json();
    } catch(error) { console.warn("Chargement Rhône indisponible",error); }
    let loireAires=[];
    try {
      const response42=await fetch("aires-loire.json?v=20261013-1", {cache:"no-store"});
      if(response42.ok) loireAires=await response42.json();
    } catch(error) { console.warn("Chargement Loire indisponible",error); }
    let hauteLoireAires=[];
    try {
      const response43=await fetch("aires-haute-loire.json?v=20261013-1", {cache:"no-store"});
      if(response43.ok) hauteLoireAires=await response43.json();
    } catch(error) { console.warn("Chargement Haute-Loire indisponible",error); }
    let cantalAires=[];
    try {
      const response15=await fetch("aires-cantal.json?v=20261013-1", {cache:"no-store"});
      if(response15.ok) cantalAires=await response15.json();
    } catch(error) { console.warn("Chargement Cantal indisponible",error); }
    let puyDeDomeAires=[];
    try {
      const response63=await fetch("aires-puy-de-dome.json?v=20261013-1", {cache:"no-store"});
      if(response63.ok) puyDeDomeAires=await response63.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let allierAires=[];
    try {
      const response03=await fetch("aires-allier.json?v=20261013-1", {cache:"no-store"});
      if(response03.ok) allierAires=await response03.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let eureEtLoirAires=[];
    try {
      const response28=await fetch("aires-eure-et-loir.json?v=20261013-1", {cache:"no-store"});
      if(response28.ok) eureEtLoirAires=await response28.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let loiretAires=[];
    try {
      const response45=await fetch("aires-loiret.json?v=20261013-1", {cache:"no-store"});
      if(response45.ok) loiretAires=await response45.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let loirEtCherAires=[];
    try {
      const response41=await fetch("aires-loir-et-cher.json?v=20261013-1", {cache:"no-store"});
      if(response41.ok) loirEtCherAires=await response41.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let indreEtLoireAires=[];
    try {
      const response37=await fetch("aires-indre-et-loire.json?v=20261013-1", {cache:"no-store"});
      if(response37.ok) indreEtLoireAires=await response37.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let indreAires=[];
    try {
      const response36=await fetch("aires-indre.json?v=20261013-1", {cache:"no-store"});
      if(response36.ok) indreAires=await response36.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let vienneAires=[];
    try {
      const response86=await fetch("aires-vienne.json?v=20261012-1", {cache:"no-store"});
      if(response86.ok) vienneAires=await response86.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let deuxSevresAires=[];
    try {
      const response79=await fetch("aires-deux-sevres.json?v=20261012-1", {cache:"no-store"});
      if(response79.ok) deuxSevresAires=await response79.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let charenteAires=[];
    try {
      const response16=await fetch("aires-charente.json?v=20261012-1", {cache:"no-store"});
      if(response16.ok) charenteAires=await response16.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let creuseAires=[];
    try {
      const response23=await fetch("aires-creuse.json?v=20261012-1", {cache:"no-store"});
      if(response23.ok) creuseAires=await response23.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let hauteVienneAires=[];
    try {
      const response87=await fetch("aires-haute-vienne.json?v=20261012-1", {cache:"no-store"});
      if(response87.ok) hauteVienneAires=await response87.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let correzeAires=[];
    try {
      const response19=await fetch("aires-correze.json?v=20261012-1", {cache:"no-store"});
      if(response19.ok) correzeAires=await response19.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let dordogneAires=[];
    try {
      const response24=await fetch("aires-dordogne.json?v=20261013-1", {cache:"no-store"});
      if(response24.ok) dordogneAires=await response24.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let lotGaronneAires=[];
    try {
      const response47=await fetch("aires-lot-et-garonne.json?v=20261012-1", {cache:"no-store"});
      if(response47.ok) lotGaronneAires=await response47.json();
    } catch (_) { /* Les autres departements restent disponibles. */ }
    let pyreneesAires=[];
    try {
      const response64=await fetch("aires-pyrenees-atlantiques.json?v=20261012-1", {cache:"no-store"});
      if(response64.ok) pyreneesAires=await response64.json();
    } catch (_) { /* Autres departements inchanges. */ }
    let landesAires=[];
    try {
      const response40=await fetch("aires-landes.json?v=20261012-2", {cache:"no-store"});
      if(response40.ok) landesAires=await response40.json();
    } catch (_) { /* Les autres départements restent disponibles. */ }
    let girondeAires=[];
    try {
      const response33=await fetch("aires-gironde.json");
      if(response33.ok) girondeAires=await response33.json();
    } catch (_) { /* Le site reste accessible si le fichier Gironde est absent. */ }
    let basRhinAires=[];
    try {
      const response67=await fetch("aires-bas-rhin.json?v=20261015-1", {cache:"no-store"});
      if(response67.ok) basRhinAires=await response67.json();
    } catch(error) { console.warn("Chargement Bas-Rhin indisponible",error); }
    let hautRhinAires=[];
    try {
      const response68=await fetch("aires-haut-rhin.json?v=20261018-final", {cache:"no-store"});
      if(response68.ok) hautRhinAires=await response68.json();
    } catch(error) { console.warn("Chargement Haut-Rhin indisponible",error); }
    let hauteMarneAires=[];
    try {
      const response52=await fetch("aires-haute-marne.json?v=20261015-1", {cache:"no-store"});
      if(response52.ok) hauteMarneAires=await response52.json();
    } catch(error) { console.warn("Chargement Haute-Marne indisponible",error); }
    let aubeAires=[];
    try {
      const response10=await fetch("aires-aube.json?v=20261015-1", {cache:"no-store"});
      if(response10.ok) aubeAires=await response10.json();
    } catch(error) { console.warn("Chargement Aube indisponible",error); }
    let marneAires=[];
    try {
      const response51=await fetch("aires-marne.json?v=20261015-1", {cache:"no-store"});
      if(response51.ok) marneAires=await response51.json();
    } catch(error) { console.warn("Chargement Marne indisponible",error); }
    let ardennesAires=[];
    try {
      const response08=await fetch("aires-ardennes.json?v=20261015-1", {cache:"no-store"});
      if(response08.ok) ardennesAires=await response08.json();
    } catch(error) { console.warn("Chargement Ardennes indisponible",error); }
    let meuseAires=[];
    try {
      const response55=await fetch("aires-meuse.json?v=20261015-1", {cache:"no-store"});
      if(response55.ok) meuseAires=await response55.json();
    } catch(error) { console.warn("Chargement Meuse indisponible",error); }
    let aisneAires=[];
    try {
      const response02=await fetch("aires-aisne.json?v=20261015-1", {cache:"no-store"});
      if(response02.ok) aisneAires=await response02.json();
    } catch(error) { console.warn("Chargement Aisne indisponible",error); }
    let oiseAires=[];
    try {
      const response60=await fetch("aires-oise.json?v=20261015-1", {cache:"no-store"});
      if(response60.ok) oiseAires=await response60.json();
    } catch(error) { console.warn("Chargement Oise indisponible",error); }
    let sommeAires=[];
    try {
      const response80=await fetch("aires-somme.json?v=20261015-1", {cache:"no-store"});
      if(response80.ok) sommeAires=await response80.json();
    } catch(error) { console.warn("Chargement Somme indisponible",error); }
    let nordAires=[];
    try {
      const response59=await fetch("aires-nord.json?v=20261015-1", {cache:"no-store"});
      if(response59.ok) nordAires=await response59.json();
    } catch(error) { console.warn("Chargement Nord indisponible",error); }
    let pasDeCalaisAires=[];
    try {
      const response62=await fetch("aires-pas-de-calais.json?v=20261015-1", {cache:"no-store"});
      if(response62.ok) pasDeCalaisAires=await response62.json();
    } catch(error) { console.warn("Chargement Pas-de-Calais indisponible",error); }
    let seineMaritimeAires=[];
    try {
      const response76=await fetch("aires-seine-maritime.json?v=20261015-1", {cache:"no-store"});
      if(response76.ok) seineMaritimeAires=await response76.json();
    } catch(error) { console.warn("Chargement Seine-Maritime indisponible",error); }
    let eureAires=[];
    try {
      const response27=await fetch("aires-eure.json?v=20261015-1", {cache:"no-store"});
      if(response27.ok) eureAires=await response27.json();
    } catch(error) { console.warn("Chargement Eure indisponible",error); }
    let calvadosAires=[];
    try {
      const response14=await fetch("aires-calvados.json?v=20261015-1", {cache:"no-store"});
      if(response14.ok) calvadosAires=await response14.json();
    } catch(error) { console.warn("Chargement Calvados indisponible",error); }
    let mancheAires=[];
    try {
      const response50=await fetch("aires-manche.json?v=20261015-1", {cache:"no-store"});
      if(response50.ok) mancheAires=await response50.json();
    } catch(error) { console.warn("Chargement Manche indisponible",error); }
    let orneAires=[];
    try {
      const response61=await fetch("aires-orne.json?v=20261015-1", {cache:"no-store"});
      if(response61.ok) orneAires=await response61.json();
    } catch(error) { console.warn("Chargement Orne indisponible",error); }
    let cotesDArmorAires=[];
    try {
      const response22=await fetch("aires-cotes-d-armor.json?v=20261015-1", {cache:"no-store"});
      if(response22.ok) cotesDArmorAires=await response22.json();
    } catch(error) { console.warn("Chargement Côtes-d'Armor indisponible",error); }
    let finistereAires=[];
    try {
      const response29=await fetch("aires-finistere.json?v=20261015-1", {cache:"no-store"});
      if(response29.ok) finistereAires=await response29.json();
    } catch(error) { console.warn("Chargement Finistère indisponible",error); }
    let illeEtVilaineAires=[];
    try {
      const response35=await fetch("aires-ille-et-vilaine.json?v=20261015-1", {cache:"no-store"});
      if(response35.ok) illeEtVilaineAires=await response35.json();
    } catch(error) { console.warn("Chargement Ille-et-Vilaine indisponible",error); }
    let morbihanAires=[];
    try {
      const response56=await fetch("aires-morbihan.json?v=20261015-1", {cache:"no-store"});
      if(response56.ok) morbihanAires=await response56.json();
    } catch(error) { console.warn("Chargement Morbihan indisponible",error); }
    let loireAtlantiqueAires=[];
    try {
      const response44=await fetch("aires-loire-atlantique.json?v=20261016-1", {cache:"no-store"});
      if(response44.ok) loireAtlantiqueAires=await response44.json();
    } catch(error) { console.warn("Chargement Loire-Atlantique indisponible",error); }
    let essonneAires=[];
    try {
      const response91=await fetch("aires-essonne.json?v=20261016-1", {cache:"no-store"});
      if(response91.ok) essonneAires=await response91.json();
    } catch(error) { console.warn("Chargement Essonne indisponible",error); }
    let alpesDeHauteProvenceAires=[];
    try {
      const response04=await fetch("aires-alpes-de-haute-provence.json?v=20261016-1", {cache:"no-store"});
      if(response04.ok) alpesDeHauteProvenceAires=await response04.json();
    } catch(error) { console.warn("Chargement Alpes-de-Haute-Provence indisponible",error); }
    let hautesAlpesAires=[];
    try {
      const response05=await fetch("aires-hautes-alpes.json?v=20261016-1", {cache:"no-store"});
      if(response05.ok) hautesAlpesAires=await response05.json();
    } catch(error) { console.warn("Chargement Hautes-Alpes indisponible",error); }
    let alpesMaritimesAires=[];
    try {
      const response06=await fetch("aires-alpes-maritimes.json?v=20261016-1", {cache:"no-store"});
      if(response06.ok) alpesMaritimesAires=await response06.json();
    } catch(error) { console.warn("Chargement Alpes-Maritimes indisponible",error); }
    let bouchesDuRhoneAires=[];
    try {
      const response13=await fetch("aires-bouches-du-rhone.json?v=20261016-1", {cache:"no-store"});
      if(response13.ok) bouchesDuRhoneAires=await response13.json();
    } catch(error) { console.warn("Chargement Bouches-du-Rhône indisponible",error); }
    let varAires=[];
    try {
      const response83=await fetch("aires-var.json?v=20261016-1", {cache:"no-store"});
      if(response83.ok) varAires=await response83.json();
    } catch(error) { console.warn("Chargement Var indisponible",error); }
    let vaucluseAires=[];
    try {
      const response84=await fetch("aires-vaucluse.json?v=20261016-1", {cache:"no-store"});
      if(response84.ok) vaucluseAires=await response84.json();
    } catch(error) { console.warn("Chargement Vaucluse indisponible",error); }
    let pyreneesOrientalesAires=[];
    try {
      const response66=await fetch("aires-pyrenees-orientales.json?v=20261016-1", {cache:"no-store"});
      if(response66.ok) pyreneesOrientalesAires=await response66.json();
    } catch(error) { console.warn("Chargement Pyrénées-Orientales indisponible",error); }
    let heraultAires=[];
    try {
      const response34=await fetch("aires-herault.json?v=20261016-1", {cache:"no-store"});
      if(response34.ok) heraultAires=await response34.json();
    } catch(error) { console.warn("Chargement Hérault indisponible",error); }
    let gardAires=[];
    try {
      const response30=await fetch("aires-gard.json?v=20261016-1", {cache:"no-store"});
      if(response30.ok) gardAires=await response30.json();
    } catch(error) { console.warn("Chargement Gard indisponible",error); }
    let lozereAires=[];
    try {
      const response48=await fetch("aires-lozere.json?v=20261016-1", {cache:"no-store"});
      if(response48.ok) lozereAires=await response48.json();
    } catch(error) { console.warn("Chargement Lozère indisponible",error); }
    let audeAires=[];
    try {
      const response11=await fetch("aires-aude.json?v=20261016-1", {cache:"no-store"});
      if(response11.ok) audeAires=await response11.json();
    } catch(error) { console.warn("Chargement Aude indisponible",error); }
    let cherAires=[];
    try {
      const response18=await fetch("aires-cher.json?v=20261016-1", {cache:"no-store"});
      if(response18.ok) cherAires=await response18.json();
    } catch(error) { console.warn("Chargement Cher indisponible",error); }
    const aires=existingAires.concat(Array.isArray(importedAires)?importedAires:[],Array.isArray(vendeeAires)?vendeeAires:[],Array.isArray(charenteMaritimeAires)?charenteMaritimeAires:[],Array.isArray(girondeAires)?girondeAires:[],Array.isArray(landesAires)?landesAires:[],Array.isArray(pyreneesAires)?pyreneesAires:[],Array.isArray(lotGaronneAires)?lotGaronneAires:[],Array.isArray(dordogneAires)?dordogneAires:[],Array.isArray(correzeAires)?correzeAires:[],Array.isArray(hauteVienneAires)?hauteVienneAires:[],Array.isArray(creuseAires)?creuseAires:[],Array.isArray(charenteAires)?charenteAires:[],Array.isArray(deuxSevresAires)?deuxSevresAires:[],Array.isArray(vienneAires)?vienneAires:[],Array.isArray(indreAires)?indreAires:[],Array.isArray(indreEtLoireAires)?indreEtLoireAires:[],Array.isArray(loirEtCherAires)?loirEtCherAires:[],Array.isArray(loiretAires)?loiretAires:[],Array.isArray(eureEtLoirAires)?eureEtLoirAires:[],Array.isArray(allierAires)?allierAires:[],Array.isArray(puyDeDomeAires)?puyDeDomeAires:[],Array.isArray(cantalAires)?cantalAires:[],Array.isArray(hauteLoireAires)?hauteLoireAires:[],Array.isArray(loireAires)?loireAires:[],Array.isArray(rhoneAires)?rhoneAires:[],Array.isArray(ainAires)?ainAires:[],Array.isArray(isereAires)?isereAires:[],Array.isArray(savoieAires)?savoieAires:[],Array.isArray(hauteSavoieAires)?hauteSavoieAires:[],Array.isArray(dromeAires)?dromeAires:[],Array.isArray(ardecheAires)?ardecheAires:[],Array.isArray(saoneEtLoireAires)?saoneEtLoireAires:[],Array.isArray(coteDOrAires)?coteDOrAires:[],Array.isArray(nievreAires)?nievreAires:[],Array.isArray(yonneAires)?yonneAires:[],Array.isArray(doubsAires)?doubsAires:[],Array.isArray(juraAires)?juraAires:[],Array.isArray(hauteSaoneAires)?hauteSaoneAires:[],Array.isArray(belfortAires)?belfortAires:[],Array.isArray(vosgesAires)?vosgesAires:[],Array.isArray(meurtheMoselleAires)?meurtheMoselleAires:[],Array.isArray(moselleAires)?moselleAires:[],Array.isArray(gersAires)?gersAires:[],Array.isArray(tarnGaronneAires)?tarnGaronneAires:[],Array.isArray(lotAires)?lotAires:[],Array.isArray(aveyronAires)?aveyronAires:[],Array.isArray(tarnAires)?tarnAires:[],Array.isArray(hauteGaronneAires)?hauteGaronneAires:[],Array.isArray(ariegeAires)?ariegeAires:[],Array.isArray(hautesPyreneesAires)?hautesPyreneesAires:[],Array.isArray(basRhinAires)?basRhinAires:[],Array.isArray(hautRhinAires)?hautRhinAires:[],Array.isArray(hauteMarneAires)?hauteMarneAires:[],Array.isArray(aubeAires)?aubeAires:[],Array.isArray(marneAires)?marneAires:[],Array.isArray(ardennesAires)?ardennesAires:[],Array.isArray(meuseAires)?meuseAires:[],Array.isArray(aisneAires)?aisneAires:[],Array.isArray(oiseAires)?oiseAires:[],Array.isArray(sommeAires)?sommeAires:[],Array.isArray(nordAires)?nordAires:[],Array.isArray(pasDeCalaisAires)?pasDeCalaisAires:[],Array.isArray(seineMaritimeAires)?seineMaritimeAires:[],Array.isArray(eureAires)?eureAires:[],Array.isArray(calvadosAires)?calvadosAires:[],Array.isArray(mancheAires)?mancheAires:[],Array.isArray(orneAires)?orneAires:[],Array.isArray(cotesDArmorAires)?cotesDArmorAires:[],Array.isArray(finistereAires)?finistereAires:[],Array.isArray(illeEtVilaineAires)?illeEtVilaineAires:[],Array.isArray(morbihanAires)?morbihanAires:[],Array.isArray(loireAtlantiqueAires)?loireAtlantiqueAires.filter(a=>!([["way/824236451","ACCAMEDREFFEAC"],["way/909580170","ACCAMPDL044V50028L"],["way/909637849","ACCAMEAIREDECAMPINGCARPONTCHATEAU"],["way/411102226","ACCAMPDL044V50420T"],["way/1232804505","ACCAMEAIRECAMPINGCARWELCOMFROSSAY"]].some(pair=>String(a.sourceId||"")===pair[0]&&importedAires.some(b=>String(b.sourceId||"")===pair[1]&&String(b.department)==="44")))&&!importedAires.some(b=>b.department==="44"&&Number.isFinite(Number(a.latitude))&&Number.isFinite(Number(a.longitude))&&Number.isFinite(Number(b.latitude))&&Number.isFinite(Number(b.longitude))&&Math.abs(Number(a.latitude)-Number(b.latitude))<0.0003&&Math.abs(Number(a.longitude)-Number(b.longitude))<0.0003||b.department==="44"&&Math.abs(Number(a.latitude)-Number(b.latitude))<0.001&&Math.abs(Number(a.longitude)-Number(b.longitude))<0.001&&String(a.name||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,"")===String(b.name||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,""))):[],Array.isArray(essonneAires)?essonneAires:[],Array.isArray(alpesDeHauteProvenceAires)?alpesDeHauteProvenceAires:[],Array.isArray(hautesAlpesAires)?hautesAlpesAires:[],Array.isArray(alpesMaritimesAires)?alpesMaritimesAires:[],Array.isArray(bouchesDuRhoneAires)?bouchesDuRhoneAires:[],Array.isArray(varAires)?varAires:[],Array.isArray(vaucluseAires)?vaucluseAires:[],Array.isArray(pyreneesOrientalesAires)?pyreneesOrientalesAires:[],Array.isArray(heraultAires)?heraultAires:[],Array.isArray(gardAires)?gardAires:[],Array.isArray(lozereAires)?lozereAires:[],Array.isArray(audeAires)?audeAires:[],Array.isArray(cherAires)?cherAires:[]);
    // Compteur indicatif du réseau CAMPING-CAR PARK parmi les fiches réellement chargées.
    // Une même aire importée deux fois ne doit pas être comptée deux fois.
    const ccpKeys=new Set();
    for(const aire of aires){
      const label=String(aire.name||"");
      const operator=String(aire.operator||aire.brand||"");
      if(!/camping[\s-]*car[\s-]*park/i.test(label+" "+operator))continue;
      const lat=Number(aire.latitude),lon=Number(aire.longitude);
      const key=Number.isFinite(lat)&&Number.isFinite(lon)&&lat!==0&&lon!==0
        ? String(aire.department||"")+"|"+lat.toFixed(3)+"|"+lon.toFixed(3)
        : String(aire.department||"")+"|"+label.toLowerCase().trim();
      ccpKeys.add(key);
    }
    const ccpCounter=document.getElementById("ccp-count");
    if(ccpCounter)ccpCounter.textContent=ccpKeys.size.toLocaleString("fr-FR");
    const selector=document.getElementById("aire-department");
    const depResponse=await fetch("departements.json");
    if(!depResponse.ok)throw new Error("Liste des départements indisponible");
    const allDepartments=await depResponse.json();
    allDepartments.slice().sort((a,b)=>String(a.code).localeCompare(String(b.code),"fr",{numeric:true})).forEach(d=>{
      const option=document.createElement("option");
      option.value=d.code;
      option.textContent=d.code+" — "+d.name;
      selector.append(option);
    });
    const query=document.getElementById("aire-search");
    const service=document.getElementById("aire-service");
    const kind=document.getElementById("aire-kind");
    const progress=document.getElementById("aire-progress");
    const gpsOnly=document.getElementById("aire-gps-only");
    const reset=document.getElementById("aire-reset");
    const servicePatterns={
      water:/eau potable/i,
      drain:/vidange/i,
      electric:/électricit/i,
      parking:/stationnement/i
    };
    const mapStatus=document.getElementById("aire-map-status");
    const map=typeof L!=="undefined"?L.map("aire-map").setView([48.75,2.9],8):null;
    const markerLayer=map?L.layerGroup().addTo(map):null;
    if(map)L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
      maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
    }).addTo(map);
    else mapStatus.textContent="Carte indisponible. Les fiches restent consultables ci-dessous.";
    const pageSize=24;
    let visibleCount=pageSize;
    const more=document.getElementById("aire-more");
    function display(resetPage=true){
      if(resetPage)visibleCount=pageSize;
      const q=query.value.trim().toLocaleLowerCase("fr");
      const subset=selector.value?aires.filter(a=>a.department===selector.value):aires;
      const gpsCount=subset.filter(a=>Number.isFinite(a.latitude)&&Number.isFinite(a.longitude)).length;
      progress.textContent=subset.length+" lieu"+(subset.length>1?"x":"")+" recensé"+(subset.length>1?"s":"")+" "+(selector.value?"dans ce département":"dans "+new Set(aires.map(a=>a.department)).size+" départements sur 101")+", dont "+gpsCount+" avec coordonnées GPS. Base non exhaustive.";
      const filtered=aires.filter(a=>
        (!selector.value||a.department===selector.value)
        &&[a.name,a.city,a.type,a.department].join(" ").toLocaleLowerCase("fr").includes(q)
        &&(!kind.value||(kind.value==="camping"?/^camping\b/i.test(a.type):!/^camping\b/i.test(a.type)))
        &&(!service.value||(a.services||[]).some(v=>servicePatterns[service.value].test(v)))
        &&(!gpsOnly.checked||(Number.isFinite(a.latitude)&&Number.isFinite(a.longitude)))
      );
      target.innerHTML=filtered.slice(0,visibleCount).map(a=>`<article class="department-card" style="cursor:default;text-align:left">
        <span class="card-top"><span class="department-code">${escapeHTML(a.department)}</span><span class="card-score" style="font-size:.85rem">${escapeHTML(a.type)}</span></span>
        <span class="card-name">${escapeHTML(a.name)}</span>
        <span class="card-foot">${escapeHTML(a.city)}</span>
        <p><strong>Services :</strong> ${escapeHTML((Array.isArray(a.services)?a.services:[]).join(", "))}</p>
        <p><strong>Tarif :</strong> ${escapeHTML(a.price)}</p>
        <p><strong>À vérifier :</strong> ${escapeHTML(a.status)}</p>
        ${a.dataAttribution?`<p><small>Données : ${escapeHTML(a.dataAttribution)} — ${escapeHTML(a.dataLicense||"Licence non indiquée")}</small></p>`:""}
        <a href="${escapeHTML(a.source)}" target="_blank" rel="noopener noreferrer">Consulter la source ↗</a>
      </article>`).join("");
      more.hidden=filtered.length<=visibleCount;
      more.textContent="Voir plus de fiches ("+Math.min(pageSize,Math.max(0,filtered.length-visibleCount))+" suivantes)";
      if(map){
        markerLayer.clearLayers();
        const points=[];
        filtered.forEach(a=>{
          if(!Number.isFinite(a.latitude)||!Number.isFinite(a.longitude))return;
          const marker=L.marker([a.latitude,a.longitude]).addTo(markerLayer);
          const title=document.createElement("strong");title.textContent=a.name;
          const place=document.createElement("p");place.textContent=a.city+" ("+a.department+")";
          const link=document.createElement("a");
          link.href="https://www.openstreetmap.org/?mlat="+encodeURIComponent(a.latitude)+"&mlon="+encodeURIComponent(a.longitude)+"#map=16/"+encodeURIComponent(a.latitude)+"/"+encodeURIComponent(a.longitude);
          link.target="_blank";link.rel="noopener noreferrer";link.textContent="Voir sur OpenStreetMap";
          const popup=document.createElement("div");popup.append(title,place,link);marker.bindPopup(popup);
          points.push([a.latitude,a.longitude]);
        });
        if(points.length===1)map.setView(points[0],12);
        else if(points.length>1)map.fitBounds(points,{padding:[25,25],maxZoom:12});
        else map.setView([48.75,2.9],8);
        mapStatus.textContent=points.length+" lieu"+(points.length>1?"x":"")+" géolocalisé"+(points.length>1?"s":"")+" sur "+filtered.length+" affiché"+(filtered.length>1?"s":"")+". Les positions issues des données ouvertes sont indicatives et restent à vérifier avant déplacement.";
        setTimeout(()=>map.invalidateSize(),0);
      }
      document.getElementById("aire-count").textContent=filtered.length+" lieu"+(filtered.length>1?"x":"");
      const empty=document.getElementById("aire-empty");
      empty.hidden=filtered.length>0;
      empty.textContent=selector.value && !q
        ? "Aucune aire encore recensée pour ce département. Notre base est en cours de construction."
        : "Aucun lieu ne correspond à votre recherche.";
    }
    more.addEventListener("click",()=>{visibleCount+=pageSize;display(false);});
    selector.addEventListener("change",()=>display());
    query.addEventListener("input",()=>display());
    kind.addEventListener("change",()=>display());
    service.addEventListener("change",()=>display());
    gpsOnly.addEventListener("change",()=>display());
    reset.addEventListener("click",()=>{
      selector.value="";query.value="";kind.value="";service.value="";gpsOnly.checked=false;display();
    });
    display();
  }catch(e){console.error("Erreur du répertoire des aires :",e);target.textContent="Le répertoire des aires est temporairement indisponible. Détail : "+(e&&e.message?e.message:"erreur inconnue");}
}
initAires();
