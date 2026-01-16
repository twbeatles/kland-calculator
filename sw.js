// Service Worker for 부동산 마스터 Pro v4.1.0
// Enhanced Offline Mode with improved caching strategies

// Cache version: Use BUILD_TIMESTAMP for automatic cache busting
// This will be replaced by build tools or manually updated on deployment
const BUILD_VERSION = '4.1.1';
const BUILD_TIMESTAMP = '20260109210000'; // Updated timestamp

const CACHE_NAME = `kland-calculator-v${BUILD_VERSION}-${BUILD_TIMESTAMP}`;
const STATIC_CACHE = `kland-static-v${BUILD_VERSION}-${BUILD_TIMESTAMP}`;
const DYNAMIC_CACHE = `kland-dynamic-v${BUILD_VERSION}-${BUILD_TIMESTAMP}`;

// Debug mode flag - set to true for development logging
const DEBUG_MODE = false;
const debugLog = (...args) => DEBUG_MODE && console.log(...args);

// Static assets to cache immediately (only files that exist after build)
const STATIC_ASSETS = [
    './',
    './index.html',
    './manifest.json'
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

    // IMPORTANT: Skip cross-origin requests (CDNs) to avoid CORS issues and 503 errors
    // Browsers will handle these naturally (with standard browser caching)
    if (!url.origin.startsWith(self.location.origin)) return;

    // Strategy based on request type
    if (isStaticAsset(request)) {
        // Cache First for static assets
        event.respondWith(cacheFirst(request));
    } else {
        // Network First for dynamic content
        event.respondWith(networkFirst(request));
    }
});

// Check if request is for static asset (Strictly Local Only)
function isStaticAsset(request) {
    const url = new URL(request.url);

    // Must be same origin
    if (url.origin !== self.location.origin) return false;

    // Check extensions
    return (
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('.css') ||
        url.pathname.endsWith('.woff') ||
        url.pathname.endsWith('.woff2') ||
        url.pathname.endsWith('.ttf') ||
        url.pathname.endsWith('.png') ||
        url.pathname.endsWith('.jpg') ||
        url.pathname.endsWith('.svg') ||
        url.pathname.endsWith('.ico') ||
        url.pathname.endsWith('.json')
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
            // icon: './icon-192.png',
            // badge: './icon-192.png'
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
