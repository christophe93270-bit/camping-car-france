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
      const response24=await fetch("aires-dordogne.json?v=20261012-1", {cache:"no-store"});
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
    const aires=existingAires.concat(Array.isArray(importedAires)?importedAires:[],Array.isArray(vendeeAires)?vendeeAires:[],Array.isArray(charenteMaritimeAires)?charenteMaritimeAires:[],Array.isArray(girondeAires)?girondeAires:[],Array.isArray(landesAires)?landesAires:[],Array.isArray(pyreneesAires)?pyreneesAires:[],Array.isArray(lotGaronneAires)?lotGaronneAires:[],Array.isArray(dordogneAires)?dordogneAires:[],Array.isArray(correzeAires)?correzeAires:[],Array.isArray(hauteVienneAires)?hauteVienneAires:[],Array.isArray(creuseAires)?creuseAires:[],Array.isArray(charenteAires)?charenteAires:[],Array.isArray(deuxSevresAires)?deuxSevresAires:[],Array.isArray(vienneAires)?vienneAires:[],Array.isArray(gersAires)?gersAires:[],Array.isArray(tarnGaronneAires)?tarnGaronneAires:[],Array.isArray(lotAires)?lotAires:[],Array.isArray(aveyronAires)?aveyronAires:[],Array.isArray(tarnAires)?tarnAires:[],Array.isArray(hauteGaronneAires)?hauteGaronneAires:[],Array.isArray(ariegeAires)?ariegeAires:[]);
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
