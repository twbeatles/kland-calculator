// Service Worker for 부동산 마스터 Pro v4.0.0
// Enhanced Offline Mode with improved caching strategies

const CACHE_NAME = 'kland-calculator-v4.0.0';
const STATIC_CACHE = 'kland-static-v4.0.0';
const DYNAMIC_CACHE = 'kland-dynamic-v4.0.0';

// Debug mode flag - set to true for development logging
const DEBUG_MODE = false;
const debugLog = (...args) => DEBUG_MODE && console.log(...args);

// Static assets to cache immediately
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './manifest.json',
    'https://unpkg.com/react@18/umd/react.production.min.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css',
    'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js',
    'https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js'
];

// Install event - precache static assets
self.addEventListener('install', (event) => {
    debugLog('[SW v4] Installing...');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                debugLog('[SW v4] Precaching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
            .catch((err) => {
                console.warn('[SW v4] Precache failed:', err);
                self.skipWaiting();
            })
    );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
    debugLog('[SW v4] Activating...');
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
                        .map((name) => {
                            debugLog('[SW v4] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch strategy: Network First with Cache Fallback
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip chrome-extension and other non-http requests
    if (!request.url.startsWith('http')) return;

    // Strategy based on request type
    if (isStaticAsset(request)) {
        // Cache First for static assets
        event.respondWith(cacheFirst(request));
    } else {
        // Network First for dynamic content
        event.respondWith(networkFirst(request));
    }
});

// Check if request is for static asset
function isStaticAsset(request) {
    const url = request.url;
    return (
        url.includes('.js') ||
        url.includes('.css') ||
        url.includes('.woff') ||
        url.includes('.woff2') ||
        url.includes('.ttf') ||
        url.includes('.png') ||
        url.includes('.jpg') ||
        url.includes('.svg') ||
        url.includes('.ico')
    );
}

// Cache First Strategy
async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) {
        return cached;
    }
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(STATIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        console.warn('[SW v4] Cache first failed:', error);
        return new Response('Offline', { status: 503 });
    }
}

// Network First Strategy
async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        const cached = await caches.match(request);
        if (cached) {
            return cached;
        }
        // Return offline fallback for HTML requests
        if (request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
        }
        return new Response('Offline', { status: 503 });
    }
}

// Background Sync for offline data
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-portfolio') {
        debugLog('[SW v4] Syncing portfolio data...');
        event.waitUntil(syncPortfolioData());
    }
});

async function syncPortfolioData() {
    // Placeholder for future sync implementation
    debugLog('[SW v4] Portfolio sync completed');
}

// Push notification support (placeholder)
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: './icon-192.png',
            badge: './icon-192.png'
        });
    }
});

// Message handler for cache management
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
    if (event.data === 'clearCache') {
        caches.keys().then((names) => {
            names.forEach((name) => caches.delete(name));
        });
    }
});
