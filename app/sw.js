const STOCKFLOW_CACHE = "stockflow-shell-v6";
const STOCKFLOW_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "/icon-512.png",
  "/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STOCKFLOW_CACHE).then((cache) => cache.addAll(STOCKFLOW_ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== STOCKFLOW_CACHE).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  const shouldRefreshFirst =
    event.request.mode === "navigate" ||
    ["script", "style", "document"].includes(event.request.destination);

  if (shouldRefreshFirst) {
    event.respondWith(fetchAndUpdate(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetchAndUpdate(event.request))
  );
});

function fetchAndUpdate(request) {
  return fetch(request)
    .then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(STOCKFLOW_CACHE).then((cache) => cache.put(request, copy));
      }
      return response;
    })
    .catch(() =>
      caches.match(request).then((cached) => {
        return cached || new Response("Offline", { status: 503, statusText: "Offline" });
      })
    );
}
