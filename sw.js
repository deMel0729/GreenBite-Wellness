// GreenBite Service Worker
const CACHE_NAME = 'greenbite-cache-v1';
const urlsToCache = [
  '/',
  './home.html',
  './about.html',
  './recipe.html',
  './calculator.html',
  './mindfulness.html',
  './workout.html',
  './home.css',
  './about.css',
  './mindfulness.css',
  './home.js',
  './about.js',
  './mindfulness.js',
  './img/background.png',
  './img/background3.png',
  './img/home1.png',
  './favicon/android-chrome-192x192.png',
  './favicon/favicon-16x16.png',
  'https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('Cache failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          console.log('Serving from cache:', event.request.url);
          return response;
        }
        
        console.log('Fetching from network:', event.request.url);
        return fetch(event.request).then(function(response) {
          // Don't cache non-successful responses
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response for caching
          var responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(function() {
        // Return offline page for navigation requests
        if (event.request.destination === 'document') {
          return caches.match('/home.html');
        }
      })
  );
});

// Background sync for newsletter subscriptions
self.addEventListener('sync', function(event) {
  if (event.tag === 'newsletter-sync') {
    event.waitUntil(syncNewsletterData());
  }
});

function syncNewsletterData() {
  // Sync newsletter data when back online
  return new Promise((resolve) => {
    console.log('Syncing newsletter data...');
    // You can implement actual sync logic here
    setTimeout(() => {
      console.log('Newsletter data synced');
      resolve();
    }, 1000);
  });
}

// Push notification handler
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'New wellness tip available!',
    icon: '/favicon/android-chrome-192x192.png',
    badge: '/favicon/favicon-16x16.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('GreenBite Wellness', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  console.log('Notification click received.');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/home.html')
  );
});