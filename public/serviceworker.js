const CACHE_NAME="version-1";
const urlsToCache=['index.html'];


const self=this;
//install sw
self.addEventListener('install', (event)=>{
event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=>{
        console.log('open cache');
        return cache.addAll(urlsToCache);
    })
)
});

//listen for requests
self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
        .then(async ()=>{
            try {
                return await fetch(event.request);
            } catch {
                return await caches.match('offline.html');
            }
        })
    )
});

//activate sw
self.addEventListener('activate', (event)=>{
    const cacheWhitelist=[];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames)=>Promise.all(
            cacheNames.map((cacheName)=>{
                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        ))
    )
});