// Chrome's currently missing some useful cache methods,
// This polyfill adds them.

importScripts("serviceworker-cache-polyfill.js");

// Here comes the install event!
// This only happens once, when the browser sees this
// Version of the ServiceWorker for the first time.
self.addEventListener("install", event => {
  // We pass a promise to event.waitUntil to signal how
  // Long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open("sw-restaurant1").then(cache =>
      // And add resources to it
      cache.addAll([
        "/",
        "/index.html",
        "/css/dist/styles.css",
        "/css/dist/responsive.css",
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg",
        "/js/dbhelper.js",
        "/js/dexie.js",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/restaurant.html?id=1",
        "/restaurant.html?id=2",
        "/restaurant.html?id=3",
        "/restaurant.html?id=4",
        "/restaurant.html?id=5",
        "/restaurant.html?id=6",
        "/restaurant.html?id=7",
        "/restaurant.html?id=8",
        "/restaurant.html?id=9",
        "/restaurant.html?id=10"
      ])
    )
  );
});

self.addEventListener("activate", event => {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic will handle the case where
  // There are multiple versioned caches.
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// Page

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.
      match(event.request).
      then(response => response || fetch(event.request))
  );
});
