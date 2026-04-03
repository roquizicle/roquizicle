const CACHE_NAME = 'roquiz-v8';
const ASSETS = [
  './',
  './index.html',
  './css/themes.css',
  './css/app.css',
  './css/animations.css',
  './js/storage.js',
  './js/themes.js',
  './js/audio.js',
  './js/graded-questions.js',
  './js/graded-questions-expansion.js',
  './js/questions.js',
  './js/fallback-questions.js',
  './js/sol-questions.js',
  './js/sol-standards.js',
  './js/game.js',
  './js/ui.js',
  './js/app.js',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
