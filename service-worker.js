const CACHE = 'afghan-recipes-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/assets/css/styles.css',
  '/assets/js/app.js',
  '/assets/js/data.js',
  '/assets/js/i18n.js',
  '/assets/img/icon-192.png',
  '/assets/img/icon-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return; // ignore non-GET
  e.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('/index.html')))
  );
});
