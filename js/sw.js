self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("calc-store")
      .then((cache) =>
        cache.addAll([
          "/",
          "index.html",
          "./js/index.js",
          "./css/style.css",
          "./assets/icon.ico",
          "./assets/ping pong loader.gif",
          "manifest.json",
        ])
      )
  );
});
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
