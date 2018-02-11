importScripts('./sw-toolbox.js');

//import toolbox from 'sw-toolbox';

const spCaches = {
  'static':'static-v5',
  'dynamic':'dynamic-v5'
  
};

self.addEventListener('install', function(event){
  
  self.skipWaiting();
  /***
  event.waitUntil(
    caches.open(version)
    .then(function(cache){
      return cache.addAll(['/content/offline.html'])
    })
  );
  */
});

self.addEventListener('activate', function(event){
  
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(key){
        //return key!== version;
        return !Object.values(spCaches).includes(key);
      }).map(function(key){
        return caches.delete(key);
      }))
    })  
  )
});

/*
toolbox.router.get('/*', toolbox.cacheFirst, {
  cache:{
    name: spCaches.static,
    maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
  }
})
**/
toolbox.router.get('/*', toolbox.networkFirst, {
  cache:{
    name: spCaches.dynamic,
    maxAgeSeconds: 60 * 60 * 24 // 1 year
  }
})

/**
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(res){
      console.log('--------------------------- caches match status - 1 ---------------------------');
      if(res)
        return res;
      
      if(!navigator.onLine){
        console.log('--------------------------- caches match status - 3 ---------------------------');
        return new Response('<h1>I am offline</h1>');        
      }else{
        console.log(event.request.url);
        return fetchAndUpdate(event.request);
      }
      
    })
  );
  
  
});

function fetchAndUpdate(request){
  return fetch(request).then(function(res){
    if(res){
      return caches.open(version).then(function(cache){
        console.log('--------------------------- pushed into cache ---------------------------');
        if(request.method === 'GET'){
          return cache.put(request, res.clone()).then(function(){
            return res;
          })
        }else{
          return res;
        }
        
      })
    }
  })
}
*/