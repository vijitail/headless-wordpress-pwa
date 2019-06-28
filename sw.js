const cacheVersion = 'v2';
 
self.addEventListener('install', e => {
    console.info('Service Worker installed');
    e.waitUntil(
        caches.open(cacheVersion)
            .then(cache => {
                console.info("Service Worker Caching Files")
                cache.addAll([
                    '/',
                    '/style.css',
                ]);
            })  
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    console.info('Service Worker Activated');
    // Remove unwanted cache
    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(cacheNames.map(cache => {
                    if(cache !== cacheVersion) {
                        console.log('Service Worker Clearing Cache'); 
                        return caches.delete(cache);
                    }
                }));
            })
    );
});

self.addEventListener('fetch', e => {
    console.log('Service Worker Fetching');
    console.log('Request', e.request);
    e.respondWith(
        caches.open(cacheVersion)
            .then(cache => cache.match(e.request)
                .then(res => res || fetch(e.request)
                    .then(res => {
                        cache.put(e.request, res.clone());
                        return res;
                    }).catch(err => {
                        console.log('Fetch failed; returning offline page instead.');
                        return { offline: true };
                    })))
    );
});