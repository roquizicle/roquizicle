const CACHE_NAME = ‘roquiz-v7’;
const ASSETS = [
‘./’,
‘./index.html’,
‘./css/themes.css’,
‘./css/app.css’,
‘./css/animations.css’,
‘./js/storage.js’,
‘./js/themes.js’,
‘./js/audio.js’,
‘./js/graded-questions.js’,
‘./js/graded-questions-expansion.js’,
‘./js/questions.js’,
‘./js/fallback-questions.js’,
‘./js/sol-questions.js’,
‘./js/sol-standards.js’,
‘./js/game.js’,
‘./js/ui.js’,
‘./js/app.js’,
];

self.addEventListener(‘install’, e => {
// Force activate immediately — don’t wait for old SW to finish
self.skipWaiting();
e.waitUntil(
// Delete ALL old caches first, then cache fresh assets
caches.keys().then(keys =>
Promise.all(keys.map(k => caches.delete(k)))
).then(() => caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)))
);
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
// Network first for everything — always try fresh files, fall back to cache
e.respondWith(
fetch(e.request)
.then(response => {
// Cache the fresh response for offline use
if (response.ok) {
const clone = response.clone();
caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
}
return response;
})
.catch(() => caches.match(e.request))
);
});
