if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const c=e=>n(e,r),u={module:{uri:r},exports:a,require:c};i[r]=Promise.all(s.map((e=>u[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.614c2eba.css",revision:null},{url:"_app/immutable/assets/_page.e130d362.css",revision:null},{url:"_app/immutable/assets/0.4065e418.css",revision:null},{url:"_app/immutable/assets/2.427d06fa.css",revision:null},{url:"_app/immutable/chunks/index.37e48e79.js",revision:null},{url:"_app/immutable/chunks/index.f2cb1ae8.js",revision:null},{url:"_app/immutable/chunks/scheduler.95481435.js",revision:null},{url:"_app/immutable/chunks/singletons.7ad99be7.js",revision:null},{url:"_app/immutable/chunks/theme.e9094a15.js",revision:null},{url:"_app/immutable/entry/app.3c109ba7.js",revision:null},{url:"_app/immutable/entry/start.bf487f06.js",revision:null},{url:"_app/immutable/nodes/0.fd8a2c95.js",revision:null},{url:"_app/immutable/nodes/1.905bb59b.js",revision:null},{url:"_app/immutable/nodes/2.40d87bcd.js",revision:null},{url:"apple-touch-icon.png",revision:"f7e8fe32dfc4bf6d941fe3cce6db6237"},{url:"favicon.png",revision:"4feed660ddc64f8e67a132067a8d68aa"},{url:"fire_avatar.png",revision:"ad65e89473dc48e9093ee960b66aece3"},{url:"icons/icon-128.png",revision:"89cab7b2cc66276626db6ec7f3e71f58"},{url:"icons/icon-144.png",revision:"98d3b85f9a78cbd2f2d39259789fbc2b"},{url:"icons/icon-152.png",revision:"6c5e0130e0ebfbc350166ad57bc5f41e"},{url:"icons/icon-192.png",revision:"006cd9c0acf95e7ea102eaa24d450c2f"},{url:"icons/icon-384.png",revision:"72ea9ae156d7e8bda3729bd0e978f1f7"},{url:"icons/icon-512.png",revision:"58d6c8a47bc201ae2f4256766afa13c2"},{url:"icons/icon-72.png",revision:"7d7e5789c1d3ab0fbfff7f6a4ced7839"},{url:"icons/icon-96.png",revision:"8f7c3865234f70e7a7a50b85d44a3d38"},{url:"kofi_banner.png",revision:"f04e16c19f92adfc57830ad9802d6723"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"b1da31351c691e15b04621b23821ab5c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
