if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,d,s)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const r={uri:location.origin+a.slice(1)};return Promise.all(d.map(a=>{switch(a){case"exports":return c;case"module":return r;default:return e(a)}})).then(e=>{const a=s(...e);return c.default||(c.default=a),c})}))}}define("./serviceWorker-9659c3e6.js",["./workbox-af3c3098"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://marcomadera.github.io/assets/25ab2e4ceebc81a420575161de28fa1d.webp",revision:"392315d6083056abe4c25026f5abc79e"},{url:"https://marcomadera.github.io/assets/36b8eca72f25c8d7c4987c844c293387.js",revision:"681e5705354bc5c51d336435ca7318f2"},{url:"https://marcomadera.github.io/assets/85bb9b9cb918b538a83f53d8ab4bd9d0.jpg",revision:"eb4682717df3e4c14e24f1c664b0de01"},{url:"https://marcomadera.github.io/css/1.6cddd21356725f03e155.css",revision:"e556e9388603b598454e64480327ca40"},{url:"https://marcomadera.github.io/css/10.6cddd21356725f03e155.css",revision:"5ec7100a300c9aafc526b5b297712b0d"},{url:"https://marcomadera.github.io/css/11.6cddd21356725f03e155.css",revision:"519b9dca02b6c2a71b427b3fa4fc12b1"},{url:"https://marcomadera.github.io/css/12.6cddd21356725f03e155.css",revision:"34161c1642d08bf05e51673e61a5b9cc"},{url:"https://marcomadera.github.io/css/5.6cddd21356725f03e155.css",revision:"b2ddf9ca50125f22405995f93558fe4b"},{url:"https://marcomadera.github.io/css/6.6cddd21356725f03e155.css",revision:"b20203e960c0a65f7021ffe9aafddcdd"},{url:"https://marcomadera.github.io/css/7.6cddd21356725f03e155.css",revision:"5df840cee33b943df208ce10554c25d3"},{url:"https://marcomadera.github.io/css/8.6cddd21356725f03e155.css",revision:"fb41dc4aba8951b290af45e558fbb5c5"},{url:"https://marcomadera.github.io/css/9.6cddd21356725f03e155.css",revision:"fbfb3c02cb696fd91382df0ffdbd8e58"},{url:"https://marcomadera.github.io/css/app.6cddd21356725f03e155.css",revision:"70a90bfb6c6e507e5d9146510885dc1e"},{url:"https://marcomadera.github.io/images/icon_128x128.7e3db203ed6c29e5288f593599d008af.png",revision:"7e3db203ed6c29e5288f593599d008af"},{url:"https://marcomadera.github.io/images/icon_192x192.2d5f248cc235020d88f7a2790d8cd2bd.png",revision:"2d5f248cc235020d88f7a2790d8cd2bd"},{url:"https://marcomadera.github.io/images/icon_256x256.5571ec7109bc482d1cbfd7c78413568a.png",revision:"5571ec7109bc482d1cbfd7c78413568a"},{url:"https://marcomadera.github.io/images/icon_384x384.e68dfcd5641a2e87f70b92c6047c8ff5.png",revision:"e68dfcd5641a2e87f70b92c6047c8ff5"},{url:"https://marcomadera.github.io/images/icon_512x512.533b88cde8898536cd19f69b18c7c6e7.png",revision:"533b88cde8898536cd19f69b18c7c6e7"},{url:"https://marcomadera.github.io/images/icon_96x96.59b51e5821a5771a937a1ec3a7645a01.png",revision:"59b51e5821a5771a937a1ec3a7645a01"},{url:"https://marcomadera.github.io/index.html",revision:"9d346318c5d30602f94f3c66cf2805a8"},{url:"https://marcomadera.github.io/js/0.8b4767ae0bdfabe2c71b.js",revision:"d8d49f58948cad5b61ce14d553d7f006"},{url:"https://marcomadera.github.io/js/1.df7bcdb2511e2cd26385.js",revision:"0db2e26e35664065e33d6b30dbfbb119"},{url:"https://marcomadera.github.io/js/10.16d4ec47380231b423c8.js",revision:"c41b298c38187bfda97c6a1e558418db"},{url:"https://marcomadera.github.io/js/11.5f2b7b653444931db84f.js",revision:"f0b0818e7fb308c6d7f4f55cf27726f0"},{url:"https://marcomadera.github.io/js/12.f1745f25b908fdecff6f.js",revision:"3100470394a9735346493571f3e7c488"},{url:"https://marcomadera.github.io/js/13.ddea1807fae0184d515a.js",revision:"edb1d08aae5df17d1b408fa511eca30a"},{url:"https://marcomadera.github.io/js/13.ddea1807fae0184d515a.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"https://marcomadera.github.io/js/14.6fdcfcbeb77df936e790.js",revision:"a0b6caf3c82f0dac9fb358bf6c47e747"},{url:"https://marcomadera.github.io/js/3.ad396577b4952fdebd5d.js",revision:"e7af4326809fb63dbb0f211b2d0f048b"},{url:"https://marcomadera.github.io/js/3.ad396577b4952fdebd5d.js.LICENSE.txt",revision:"e4a0d87becbcc6d09668875fe197b50f"},{url:"https://marcomadera.github.io/js/4.c5e83493ddba438b45ff.js",revision:"3634542f3e9615f67a605d86c707b3db"},{url:"https://marcomadera.github.io/js/4.c5e83493ddba438b45ff.js.LICENSE.txt",revision:"3a7a1ad38638f2f20fa42f7dcf239bee"},{url:"https://marcomadera.github.io/js/5.32e90bfd175dae68dc3c.js",revision:"e322ba7a62526df16fccc0d3a62c6140"},{url:"https://marcomadera.github.io/js/6.1998e25b0be92a5598b6.js",revision:"d923dc33edc5f4dbe120d3f3b552e66e"},{url:"https://marcomadera.github.io/js/7.fdd0eaa268998f9fe7d5.js",revision:"8e3a37cac18b0883e43c6e8d2ae1f571"},{url:"https://marcomadera.github.io/js/8.a62ec3edb0c5e33cb837.js",revision:"e631f5b13b4cdf0ce7580c1e23f301ec"},{url:"https://marcomadera.github.io/js/9.90e21dfba429fba66dba.js",revision:"5b5d7a4a4cd9276374a233116c9c1872"},{url:"https://marcomadera.github.io/js/app.6cddd21356725f03e155.js",revision:"c7bd3cc2efe3dcfbe87aca192719ccd4"},{url:"https://marcomadera.github.io/js/app.6cddd21356725f03e155.js.LICENSE.txt",revision:"bcda1cd32249233358d1702647c75e56"},{url:"https://marcomadera.github.io/js/modules.78764a6464c04bd7ccb8.dll.js",revision:"be38d4b5c0216bc5f2b9871fc7b17dba"},{url:"https://marcomadera.github.io/js/modules.78764a6464c04bd7ccb8.dll.js.LICENSE.txt",revision:"c64c486544348f10a6d6c716950bc223"},{url:"https://marcomadera.github.io/manifest.8147eefe6e66928e660c7945c0c2e534.json",revision:"8147eefe6e66928e660c7945c0c2e534"},{url:"https://marcomadera.github.io/robots.txt",revision:"54779dd164361d6fa83da8b4b9381eff"}],{}),e.registerRoute(/images/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/assets/,new e.CacheFirst,"GET"),e.registerRoute(/https:\/\/res.cloudinary.com\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/.*/,new e.NetworkFirst,"GET")}));