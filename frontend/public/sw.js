let cacheData = "AppV1"

// cache files and routes
this.addEventListener("install", (event) => {

    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js',
                '/static/js/bundle.js',
                '/static/js/main.28c18e82.js',
                '/static/css/main.76d6f193.css',
                'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap',
                "/manifest.json",
                "/static/media/GraphikRegular.329746577f94a4f1785e.otf",
                "/static/media/GraphikMedium.f58d53eb72d7239d4ca8.otf",
                "/static/media/GraphikSemibold.7ef1e78abcb43e957eec.otf",
                "/static/media/GraphikLight.532fcbe7294b886ec93d.otf",
                "index.html",
                "/",
                "/list",
                "/add",
                "/overview",
                "/profile",
            ])
        })
    )
})

// serve files on request when offline
this.addEventListener("fetch", (event) => {
    
    if (!navigator.onLine) {
        console.log("in offline");
        // event.waitUntil(
        //     this.registration.showNotification("Hi", {
        //         body: "this is a notification"
        //     })
        // )
        
        event.respondWith(
            caches.match(event.request).then(res => {
                if (res) return res
                console.log("request not matching the cache, now fetching from server......");
                let requestUrl = event.request.clone()
                fetch(requestUrl)
            })
        )
    }
})