//! All codes are not working. Maybe it's about hosting beacuse works on application with docker run

const CACHE_NAME = "static_cache";
const STATIC_ASSETS = [
    '/sidebar.scss',
];

async function preCache() {
    const cache = await caches.open(CACHE_NAME);
    return cache.addAll(STATIC_ASSETS);
}

self.addEventListener('install', event => {
    console.log("[CACHE] installed");
    event.waitUntil(preCache());
});

async function cleanupCache() {
    const keys = await caches.keys();
    const keysToDelete = keys.map(key => {
        if(key !== CACHE_NAME) {
            return caches.delete(key);
        }
    });

    return Promise.all(keysToDelete);
}

self.addEventListener('activate', event => {
    console.log("[CACHE] activated");
    event.awaitUntil(cleanupCache());
});

async function fetchAssets(event) {
    try {
        const response = await fetch(event.request);
        return response;
    } catch (error) {
        const cache = await caches.open(CACHE_NAME);
        return cache.match(event.request);
    }
}

self.addEventListener('fetch', event => {
    console.log("[CACHE] fetched");
    event.respondWith(fetchAssets(event));
});