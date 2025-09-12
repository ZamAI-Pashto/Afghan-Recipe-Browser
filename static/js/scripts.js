const el = (s)=>document.querySelector(s);
const content = el('#content');
async function load(){
  try{
    const res = await fetch('./recipes.json');
    const data = await res.json();
    window.__RECIPES__ = data;
    renderRandom();
  }catch(e){
    window.__RECIPES__ = [{name:'Kabuli Pulao',img:'',ingredients:['Rice','Lamb','Carrots','Raisins'],instructions:'Steam rice with lamb and top with caramelized carrots and raisins.'}];
    renderRandom();
  }
}
function renderRandom(){
  const list = window.__RECIPES__||[];
  if(!list.length){content.innerHTML='<p class="muted">No recipes.</p>';return}
  const r = list[Math.floor(Math.random()*list.length)];
  content.innerHTML = `
    <h2 class="recipe-title">${r.name}</h2>
    ${r.img?`<img class="recipe-img" src="${r.img}" alt="${r.name}">`:''}
    <h3>Ingredients</h3>
    <ul>${(r.ingredients||[]).map(i=>`<li>${i}</li>`).join('')}</ul>
    <h3>Instructions</h3>
    <p>${r.instructions||''}</p>
  `;
}
window.addEventListener('DOMContentLoaded',()=>{
  el('#btn-random').addEventListener('click',renderRandom);
  load();
});
