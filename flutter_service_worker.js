'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "157b5706a511d1d0a05d914609947a5e",
"assets/assets/Apartment.png": "19f3a2cdf68de51efe1f2f44298e3765",
"assets/assets/back_arrow.png": "3019675b8692c8202527efc8be8af22b",
"assets/assets/back_arrow_white.png": "09077b7f7f86517c16b5d52755d448fd",
"assets/assets/bike.png": "58042c5e0ea80c3665ff52c815661deb",
"assets/assets/btn_add.png": "81902554c9eebe4ed18235999012e13d",
"assets/assets/btn_min.png": "c99fe20a3e93e79b4559ec917b7177bf",
"assets/assets/food_wishes.png": "fca280b1a8bc06bc9351ff6ea52cf9c0",
"assets/assets/icon/icon-menu/png/Apartment.png": "7c53a2b2b3a0c023164438965cfbf830",
"assets/assets/icon/icon-menu/png/Indekos.png": "850d42efa74363c921375692a022d60f",
"assets/assets/ic_home.png": "9416aa2df8fed1eb3c105e254bdc9cb5",
"assets/assets/ic_home2.png": "4e684563ec14cea155f92fd74294be05",
"assets/assets/ic_home_normal.png": "8aa601299c31ef65e6714dc0c0ffc1ce",
"assets/assets/ic_home_normal2.png": "c63123a4a26a8dd4ebb9998f7a20ce4b",
"assets/assets/ic_order.png": "f88f51c1fd9332e6348bd8dc3f0adcea",
"assets/assets/ic_order_normal.png": "290c746f46132a2e9faeb123548f47c3",
"assets/assets/ic_profile.png": "753340a83057ffd11e2e873aaf22c337",
"assets/assets/ic_profile1.png": "2ee663d84b32873636052c22d2f271cd",
"assets/assets/ic_profile_normal.png": "5f91ac3e620c4bc2d6916fbd75b2e6df",
"assets/assets/ic_profile_normal1.png": "d9f803e3f1e7a429c5aa6b80a480f196",
"assets/assets/Indekos.png": "a6cda907bc25af412fafc6a9472c5ccb",
"assets/assets/kategori.jpg": "e9d337d645b4b3cee2b17ae8c48e0a84",
"assets/assets/Login.gif": "e15119c2188581d02b2912303042f727",
"assets/assets/logo-transparant.png": "d2af24eb9d123ec5703098aa760fc15a",
"assets/assets/logo.png": "60a4d4eddd80497c19c476f212778d4c",
"assets/assets/love_burger.png": "c779b2e5f242b7a0193a81ab708fa6c5",
"assets/assets/mitp.2004.1265545.pdf": "7c07dd2b735984815ee708525dcbb524",
"assets/assets/new.jpg": "170cc64cbefe5552c31b25f29f8d8692",
"assets/assets/new_transparan.png": "c23c8ca9e4ff485ad46ba32d6b45e1b9",
"assets/assets/Payment.png": "81b4c74bab9cc890d554d019894e2778",
"assets/assets/photo.png": "2f9f6a2ca380a441ec4618e1856be4eb",
"assets/assets/photo_border.png": "f0394a14806195f03800ad9919d5ef1c",
"assets/assets/placeholder.jpg": "42b479eafa1a9335626c99c2b535b0ee",
"assets/assets/placeholder.svg": "879e0fe3b42a64bd8127bda6ce035e9b",
"assets/assets/right_arrow.png": "4b8d1ace53db0b99786929be8b3aa4e2",
"assets/assets/Ruko.png": "d6417b43542fac7f5cb4a2c860d8d7bf",
"assets/assets/Rumah.png": "802b53c8ecbe2ed31156fdbb5eac46ea",
"assets/assets/success_order.png": "a6c4420345b543876b0a1e618ffe6c77",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "7032aa1d4c3fe707cd0bd2f7d7779c9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5163801232e129f6b60db9dc0e57f0c9",
"/": "5163801232e129f6b60db9dc0e57f0c9",
"main.dart.js": "dad8447170527d3f90064ba9ded2271c",
"manifest.json": "16cb317e095c3fa94ca895db85c93904",
"version.json": "c4a1f2e5020b6cded23ea1070b5eed4b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
