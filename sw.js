self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("calc-store")
      .then((cache) =>
        cache.addAll([
          "/",
          "./js/index.js",
          "index.html",
          "./css/style.css",
          "./assets/favicon.png",
          "manifest.json",
          "sw.js",
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
