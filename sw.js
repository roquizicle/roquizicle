const CACHE_NAME = 'roquiz-v7';
const ASSETS = [
  '/roquizicle/',
  '/roquizicle/index.html',
  '/roquizicle/themes.css',
  '/roquizicle/app.css',
  '/roquizicle/animations.css',
  '/roquizicle/storage.js',
  '/roquizicle/themes.js',
  '/roquizicle/audio.js',
  '/roquizicle/graded-questions.js',
  '/roquizicle/dinosaurs-expansion.js',
  '/roquizicle/inventions-expansion.js',
  '/roquizicle/remaining-expansion.js',
  '/roquizicle/merge-expansions.js',
  '/roquizicle/questions.js',
  '/roquizicle/fallback-questions.js',
  '/roquizicle/sol-questions.js',
  '/roquizicle/sol-standards.js',
  '/roquizicle/game.js',
  '/roquizicle/ui.js',
  '/roquizicle/app.js',
  '/roquizicle/manifest.json',
  '/roquizicle/icon192.png',
  '/roquizicle/icon512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
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
  // Network first for API calls, cache first for assets
  if (e.request.url.includes('opentdb.com') ||
      e.request.url.includes('trivia-api.com') ||
      e.request.url.includes('anthropic.com') ||
      e.request.url.includes('pokeapi')) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
