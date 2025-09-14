const CACHE = 'afghan-recipes-v3';
const ASSETS = [
  'index.html',
  'manifest.webmanifest',
  'assets/css/styles.css',
  'assets/js/app.js',
  'assets/js/data.js',
  'assets/js/i18n.js',
  // Icons intentionally omitted to avoid install failure when missing
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (c) => {
      // Add assets individually to avoid failing the whole install on one missing file
      await Promise.all(
        ASSETS.map((url) =>
          fetch(url, { cache: 'no-cache' })
            .then((res) => {
              if (res.ok) return c.put(url, res.clone());
            })
            .catch(() => {})
        )
      );
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // App shell-style caching with network fallback and then cache
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => {
          // For navigations, fallback to app shell
          if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
            return caches.match('index.html');
          }
        });
    })
  );
});
