const CACHE_NAME = ‘roquiz-v9’;
const ASSETS = [
‘/roquizicle/’,
‘/roquizicle/index.html’,
‘/roquizicle/manifest.json’,
‘/roquizicle/merge-expansions.js’,
‘/roquizicle/questions.js’,
‘/roquizicle/sw.js’,
‘/roquizicle/css/themes.css’,
‘/roquizicle/css/app.css’,
‘/roquizicle/css/animations.css’,
‘/roquizicle/js/storage.js’,
‘/roquizicle/js/themes.js’,
‘/roquizicle/js/audio.js’,
‘/roquizicle/js/graded-questions.js’,
‘/roquizicle/js/graded-questions-expansion.js’,
‘/roquizicle/js/dinosaurs-expansion.js’,
‘/roquizicle/js/inventions-expansion.js’,
‘/roquizicle/js/remaining-expansion.js’,
‘/roquizicle/js/sol-expansion.js’,
‘/roquizicle/js/fallback-questions.js’,
‘/roquizicle/js/sol-questions.js’,
‘/roquizicle/js/sol-standards.js’,
‘/roquizicle/js/game.js’,
‘/roquizicle/js/ui.js’,
‘/roquizicle/js/app.js’,
];

self.addEventListener(‘install’, e => {
e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).catch(() => {}));
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
if (e.request.url.includes(‘opentdb.com’) ||
e.request.url.includes(‘trivia-api.com’) ||
e.request.url.includes(‘anthropic.com’) ||
e.request.url.includes(‘pokeapi’)) {
e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
} else {
e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
}
});
