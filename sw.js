const CACHE_NAME = ‘roquiz-v8’;
const ASSETS = [
‘/roquizicle/’,
‘/roquizicle/index.html’,
‘/roquizicle/themes.css’,
‘/roquizicle/app.css’,
‘/roquizicle/animations.css’,
‘/roquizicle/storage.js’,
‘/roquizicle/themes.js’,
‘/roquizicle/audio.js’,
‘/roquizicle/graded-questions.js’,
‘/roquizicle/dinosaurs-expansion.js’,
‘/roquizicle/inventions-expansion.js’,
‘/roquizicle/remaining-expansion.js’,
‘/roquizicle/merge-expansions.js’,
‘/roquizicle/questions.js’,
‘/roquizicle/fallback-questions.js’,
‘/roquizicle/sol-questions.js’,
‘/roquizicle/sol-standards.js’,
‘/roquizicle/game.js’,
‘/roquizicle/ui.js’,
‘/roquizicle/app.js’,
‘/roquizicle/manifest.json’,
‘/roquizicle/icon192.png’,
‘/roquizicle/icon512.png’,
];

self.addEventListener(‘install’, e => {
e.waitUntil(
caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).catch(() => {})
);
self.skipWaiting();
});

self.addEventListener(‘activate’, e => {
// Delete ALL caches, not just old ones
e.waitUntil(
caches.keys().then(keys =>
Promise.all(keys.map(k => caches.delete(k)))
)
);
self.clients.claim();
});

self.addEventListener(‘fetch’, e => {
// Network-first: always try fresh files, fall back to cache
e.respondWith(
fetch(e.request).catch(() => caches.match(e.request))
);
});
