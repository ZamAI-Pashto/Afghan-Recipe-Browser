import { recipes } from './data.js';
import { messages, getLang, setLang, applyI18n } from './i18n.js';

// State
const state = {
  q: '',
  category: '',
  diet: '',
  time: '',
  favoritesOnly: false,
  lang: getLang(),
  favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]')),
  theme: localStorage.getItem('theme') || 'dark',
};

// DOM refs
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const dietFilter = document.getElementById('dietFilter');
const timeFilter = document.getElementById('timeFilter');
const favoritesOnly = document.getElementById('favoritesOnly');
const results = document.getElementById('results');
const cardTpl = document.getElementById('cardTemplate');
const langSelect = document.getElementById('langSelect');
const themeToggle = document.getElementById('themeToggle');

// Init
init();

function t(key) {
  const dict = messages[state.lang] || messages.en;
  return dict[key] || messages.en[key] || key;
}

function init() {
  // Apply theme
  if (state.theme === 'light') document.documentElement.classList.add('light');

  // Lang
  langSelect.value = state.lang in messages ? state.lang : 'en';
  applyI18n(langSelect.value);

  // Listeners
  const scheduleRender = debounce(render, 100);
  searchInput.addEventListener('input', (e) => { state.q = e.target.value; scheduleRender(); });
  categoryFilter.addEventListener('change', (e) => { state.category = e.target.value; render(); });
  dietFilter.addEventListener('change', (e) => { state.diet = e.target.value; render(); });
  timeFilter.addEventListener('change', (e) => { state.time = e.target.value; render(); });
  favoritesOnly.addEventListener('change', (e) => { state.favoritesOnly = e.target.checked; render(); });

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    state.lang = lang;
    setLang(lang);
    applyI18n(lang);
    render();
  });

  themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', state.theme);
    document.documentElement.classList.toggle('light');
  });

  // First render
  render();

  // PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch(console.error);
    });
  }

  // Accessibility shortcut: "/" focuses search
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });
}

function render() {
  const query = norm(state.q);
  const maxTime = state.time ? parseInt(state.time, 10) : Infinity;
  const out = filter(recipes, (r) => {
    if (state.category && r.category !== state.category) return false;
    if (state.diet && !r.diet.includes(state.diet)) return false;
    if (!(r.timeMinutes <= maxTime)) return false;

    // favorites
    if (state.favoritesOnly && !state.favorites.has(r.id)) return false;

    if (!query) return true;
    const hay = [r.title.en, r.title.ps, r.title.fa, r.description.en, r.description.ps, r.description.fa]
      .concat(r.ingredients.en || [])
      .concat(r.ingredients.ps || [])
      .concat(r.ingredients.fa || [])
      .map(norm)
      .join(' ');
    return hay.includes(query);
  });

  results.innerHTML = '';
  if (!out.length) {
    const empty = document.createElement('div');
    empty.className = 'empty';
    empty.textContent = t('empty');
    results.appendChild(empty);
    return;
  }

  for (const r of out) {
    const card = cardTpl.content.firstElementChild.cloneNode(true);
    const title = sel(card, '.title');
    const desc = sel(card, '.desc');
    const meta = sel(card, '.meta');
    const img = sel(card, '.thumb');
    const fav = sel(card, '.fav');
    const ing = sel(card, '.ingredients');
    const steps = sel(card, '.steps');

    img.loading = 'lazy';
    img.src = r.image;
    img.alt = r.title[state.lang] || r.title.en;
    img.onerror = () => {
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzM4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
    };
    title.textContent = r.title[state.lang] || r.title.en;
    desc.textContent = r.description[state.lang] || r.description.en;

    const catKey = `filters.${r.category}`; // main/side/dessert/drink/bread
    meta.textContent = `${t(catKey)} · ${r.timeMinutes} ${t('meta.minutes')}`;

    // ingredients
    for (const item of r.ingredients[state.lang] || r.ingredients.en) {
      const li = document.createElement('li');
      li.textContent = item;
      ing.appendChild(li);
    }
    // steps
    for (const step of r.steps[state.lang] || r.steps.en) {
      const li = document.createElement('li');
      li.textContent = step;
      steps.appendChild(li);
    }

    // fav state
    updateFavBtn(fav, state.favorites.has(r.id));
    fav.addEventListener('click', () => {
      if (state.favorites.has(r.id)) state.favorites.delete(r.id); else state.favorites.add(r.id);
      localStorage.setItem('favorites', JSON.stringify([...state.favorites]));
      updateFavBtn(fav, state.favorites.has(r.id));
      if (state.favoritesOnly) render();
    });

    results.appendChild(card);
  }
}

function updateFavBtn(btn, active) {
  btn.classList.toggle('active', active);
  btn.textContent = active ? '★' : '☆';
  btn.setAttribute('aria-pressed', String(active));
}

function sel(root, q) { return root.querySelector(q); }
function norm(s) { return (s || '').toString().trim().toLowerCase(); }
function filter(arr, fn) { const out = []; for (const x of arr) if (fn(x)) out.push(x); return out; }
function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }