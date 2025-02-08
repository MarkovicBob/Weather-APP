// filepath: /c:/Users/Bob/Documents/WBS-exercises/ALONE PROJECAT/PROBA WEATHER APP/sa copilota/weather-app/public/service-worker.js
self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
});
