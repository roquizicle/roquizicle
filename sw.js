const CACHE_NAME = ‘roquiz-v6’;
const ASSETS = [
‘/’,
‘/index.html’,
‘/css/themes.css’,
‘/css/app.css’,
‘/css/animations.css’,
‘/js/storage.js’,
‘/js/themes.js’,
‘/js/audio.js’,
‘/js/graded-questions.js’,
‘/js/graded-questions-expansion.js’,
‘/js/questions.js’,
‘/js/fallback-questions.js’,
‘/js/sol-questions.js’,
‘/js/sol-standards.js’,
‘/js/game.js’,
‘/js/ui.js’,
‘/js/app.js’,
];

self.addEventListener(‘install’, e => {
e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
self.skipWaiting();
});

self.addEventListener(‘activate’, e => {
e.waitUntil(
caches.keys().then(keys =>
Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
)
);
self.clients.claim();
});

self.addEventListener(‘fetch’, e => {
// Network first for API calls, cache first for assets
if (e.request.url.includes(‘opentdb.com’) ||
e.request.url.includes(‘trivia-api.com’) ||
e.request.url.includes(‘pokeapi’)) {
e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
} else {
e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
}
});
