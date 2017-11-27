montageDefine("1451e5f","sw",{dependencies:[],factory:function(e,n,t){function r(e,n){console.log("OfflineWorker",e,g?n:void 0)}function c(e){return g&&r("postMessage",e),self.clients.matchAll().then(function(n){return Promise.all(n.map(function(n){return n.postMessage(e)}))})}function i(e){var n={rev:"",cache:[],network:[]},t=null;return e.split("\n").forEach(function(e){if(e)if(E.indexOf(e)!==-1)t=e;else if("CACHE MANIFEST"===t)if(0===e.indexOf("#")){var r=String(e||"").split(" ");r[0]&&r[1]&&e.indexOf(r[0])!==-1&&(n.rev+=n[r[0].replace("#")]=r[1])}else n.cache.push(e);else"CACHE:"===t?n.cache.push(e):"NETWORK:"===t&&n.network.push(e)}),n}function o(){return new Promise(function(e,n){r("Fetch cache manifest..."),c("Updating"),fetch("./manifest.appcache").then(function(t){return 200===t.status?t.text().then(function(n){var t=i(n);r("AppCache.rev: "+t.rev),e(t)},n):void n("NoAppCache")},function(e){r("Fetch cache manifest failed cause: "+e),n(e)})})}function u(){return new Promise(function(e,n){var t=indexedDB.open(y,1);t.onupgradeneeded=function(){var e=t.result,n=e.createObjectStore(w,{keyPath:"key"});n.createIndex("KeyIndex",["key"])},t.onblocked=function(e){e.target.result&&e.target.result.close(),n(e.target.error||"OpenBlocked")},t.onerror=function(e){n(e.target.error||"OpenError")},t.onsuccess=function(){e(t.result)}})}function a(e){return u().then(function(n){var t=n.transaction(w,"readwrite"),r=t.objectStore(w);return new Promise(function(n,t){var c=r.get(e);c.onsuccess=function(e){var t=e.target.result;n("undefined"!=typeof t&&"string"==typeof t.value?t.value:null)},c.onerror=function(e){n(e.target.error)}})["finally"](function(){n.close()})})}function f(e,n){return u().then(function(t){var r=t.transaction(w,"readwrite"),c=r.objectStore(w);return new Promise(function(t,r){var i=c.put({key:e,value:n});i.onerror=function(e){t(e.target.error)},i.onsuccess=function(e){t(e.target.result)}})["finally"](function(){t.close()})})}function s(e){return f(p,e)}function l(){return a(p).then(function(e){return r("App.rev: "+e),e})}function d(e){return caches.keys().then(function(e){return Promise.all(e.map(function(e){return caches["delete"](e)}))})}function h(e,n){return caches.open(e).then(function(t){return t.addAll(n).then(function(){return r('Updated cache version "'+e+'" urls ('+n.length+")",n),e})})}function v(){return m?m:(m=o()).then(function(e){return l().then(function(n){return new Promise(function(t,c){return null===n?(r('Installing "'+e.rev+'"'),h(e.rev,e.cache).then(function(){return r('Installed "'+e.rev+'"'),s(e.rev)})):n===e.rev?(r('Cached "'+e.rev+'"'),c("Cached")):(r('Updating to "'+e.rev+'"'),void d(n).then(function(){return h(e.rev,e.cache).then(function(){return r('Updated from "'+n+'" to "'+e.rev+'"'),s(e.rev)})}).then(t,c))})})})["finally"](function(){m=null})}var p="cacheVersion",g=!1;Promise.prototype["finally"]=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})})};var m,E=["CACHE MANIFEST","CACHE:","NETWORK:"],y="OfflineWorker",w="OfflineObjectStore";r("Started",self),c("Started"),self.addEventListener("install",function(e){r("Install...",e),e.waitUntil(v().then(function(){return self.skipWaiting()}).then(function(e){return c("Installed")},function(){return c("InstallFailed")}))}),self.addEventListener("activate",function(e){r("Activating...",e),e.waitUntil(v().then(function(e){return c("Updated")})["catch"](function(e){return r("No Update cause: "+e),c("NoUpdate")}).then(function(){return clients.claim()}))}),self.addEventListener("message",function(e){r("Checking...",e),e.waitUntil(v().then(function(e){return c("Updated")})["catch"](function(e){return r("No Update cause: "+e),c("NoUpdate")}))}),self.addEventListener("sync",function(e){r("Push event received",e)}),self.addEventListener("push",function(e){r("Push event received",e)}),self.addEventListener("update",function(e){r("Update event received",e)}),self.addEventListener("fetch",function(e){e.request.url.startsWith(self.location.origin)&&e.respondWith(caches.match(e.request).then(function(n){return n?n:fetch(e.request)}))})}});