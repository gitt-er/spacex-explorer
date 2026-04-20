const CACHE_NAME = "spacex-cache-v1";

// Cache API responses
self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.url.includes("api.spacexdata.com")) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);

        const fetchPromise = fetch(request)
          .then((res) => {
            cache.put(request, res.clone());
            return res;
          })
          .catch(() => cached);

        return cached || fetchPromise;
      })
    );
  }
});