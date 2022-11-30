//asignar un nombre y versi´´on al cache

const CACHE_NAME='v1_cache_102';
//archivos a guardar a cache
let urlsToCache=[
   '/',
   '/1.PNG',
   '/2.PNG',
   '/3.PNG',
   '/4.PNG',
   '/5.PNG',
   '/1.PNG',
   '/128.PNG',
   '/256.PNG',
   '/512.PNG',
   '/Hamburger_svg.png',,
   '/logo.PNG',
   '/rana_con_lanza.png',
   '/tepicGames.PNG',
   '/videojuego.png',
   '/manifest.json',
   'serviceworker.js',
   'src/styles.css'
];

//install
self.addEventListener('install', e=>{
    e.waitUntil(    //espera a que se abra el cache
        caches.open(CACHE_NAME)                        //abrimos  el cache, regresa una promesa
        .then(cache=>{
            cache.addAll(urlsToCache)          //regresamos los elementos del arreglo
            .then(()=>{
                 self.skipWaiting();  //espera a que see llene el cache
            })
        })  
        .catch(err=>{
            console.log("no se he registrado el cache", err)
        })
    )
})




//activate

self.addEventListener('activate', e=>{
    const cacheWhiteList=[CACHE_NAME]       //guardar todos los elementos que vienen en el cache original
    e.waitUntil(
        caches.keys() //el Keys recorre el array
        .then(cacheNames=>{
            return Promise.all(
            //map() nos permite recorrer el array
            cacheNames.map(cacheName=>{
                //indesOf es para buscar un elemento del cache
                //lo siguiente es buscar un elemento y si no se encuentra borrarlo de la cache o si es redundante
                if(cacheWhiteList.indexOf(cacheName)===-1){
                    //borrar elementos que no se necesitan
                    return caches.delete(cacheName);
                }
            })
        )
        })
        .then(()=>{
            self.clients.claim();
        })
    )
})


//fetch

self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)  //Busca la info en el cache
        .then(res=>{
            if(res){
                        //se se encuentra en el cache devuelve del cache
                        return res;
            }
            return fetch(e.request);
        })
    )
})

