/*! For license information please see app.6cddd21356725f03e155.js.LICENSE.txt */
!function(e){function t(t){for(var n,r,a=t[0],c=t[1],i=0,u=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);u.length;)u.shift()()}var n={},r={2:0},o={2:0};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{1:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+e+".6cddd21356725f03e155.css",c=a.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=(f=i[u]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===o||l===c))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){var f;if((l=(f=s[u]).getAttribute("data-href"))===o||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=c,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=function(e){return a.p+"js/"+e+"."+{0:"8b4767ae0bdfabe2c71b",1:"df7bcdb2511e2cd26385",3:"ad396577b4952fdebd5d",4:"c5e83493ddba438b45ff",5:"32e90bfd175dae68dc3c",6:"1998e25b0be92a5598b6",7:"fdd0eaa268998f9fe7d5",8:"a62ec3edb0c5e33cb837",9:"90e21dfba429fba66dba",10:"16d4ec47380231b423c8",11:"5f2b7b653444931db84f",12:"f1745f25b908fdecff6f",13:"ddea1807fae0184d515a",14:"6fdcfcbeb77df936e790"}[e]+".js"}(e);var l=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://marcomadera.github.io/",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a(a.s=30)}([function(e,t,n){e.exports=n(3)(0)},function(e,t,n){e.exports=n(3)(22)},function(e,t,n){e.exports=n(3)(7)},function(e,t){e.exports=modules},function(e,t,n){var r=n(17),o=n(18),a=n(15),c=n(19);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||c()}},function(e,t,n){var r,o;void 0===(o="function"==typeof(r=function(){var e,t,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(e,t,n){return e<t?t:e>n?n:e}function a(e){return 100*(-1+e)}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=o(e,r.minimum,1),n.status=1===e?null:e;var u=n.render(!t),l=u.querySelector(r.barSelector),s=r.speed,f=r.easing;return u.offsetWidth,c((function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),i(l,function(e,t,n){var o;return(o="translate3d"===r.positionUsing?{transform:"translate3d("+a(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+a(e)+"%,0)"}:{"margin-left":a(e)+"%"}).transition="all "+t+"ms "+n,o}(e,s,f)),1===e?(i(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){i(u,{transition:"all "+s+"ms linear",opacity:0}),setTimeout((function(){n.remove(),t()}),s)}),s)):setTimeout(t,s)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout((function(){n.status&&(n.trickle(),e())}),r.trickleSpeed)};return r.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*o(Math.random()*t,.1,.95)),t=o(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always((function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var o,c=t.querySelector(r.barSelector),u=e?"-100":a(n.status||0),s=document.querySelector(r.parent);return i(c,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(o=t.querySelector(r.spinnerSelector))&&d(o),s!=document.body&&l(s,"nprogress-custom-parent"),s.appendChild(t),t},n.remove=function(){s(document.documentElement,"nprogress-busy"),s(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&d(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var c=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()})),t[n]||(t[n]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+a)in n)return r;return t}(n))}function r(e,t,r){t=n(t),e.style[t]=r}return function(e,t){var n,o,a=arguments;if(2==a.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,a[1],a[2])}}();function u(e,t){return("string"==typeof e?e:f(e)).indexOf(" "+t+" ")>=0}function l(e,t){var n=f(e),r=n+t;u(n,t)||(e.className=r.substring(1))}function s(e,t){var n,r=f(e);u(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function f(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function d(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?r.call(t,n,t,e):r)||(e.exports=o)},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(localStorage.getItem("dark-mode")||window.matchMedia("(prefers-color-scheme: dark)").matches);t.a=o},function(e,t,n){e.exports=n(3)(18)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(13),n.e(5)]).then(n.bind(null,35))})),a=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,31))})),c=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,32))})),i=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,36))})),u=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,33))})),l=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(8)]).then(n.bind(null,37))})),s=[{path:"/about",component:u},{path:"/portfolio",component:o},{path:"/portfolio/sreExcel",component:a},{path:"/portfolio/chiSqrt",component:c},{path:"/portfolio/challenges",component:i},{path:"/blog",component:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,34))}))},{path:"/blog/1",component:l}]},function(e,t,n){"use strict";var r=n(0),o=n.n(r);n(20);t.a=function(){return o.a.createElement(r.Fragment,null,o.a.createElement("main",{className:"NotFound__container"},o.a.createElement("div",{className:"phrase__container"},o.a.createElement("h1",{className:"error"},"404: Not Found"),o.a.createElement("p",{className:"phrase"},"La página que estás buscando no existe!"))))}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(25);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(26),o=n(27);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t,n){var r=n(16);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),c=n.n(a),i=n(4),u=n.n(i),l=n(1),s=n(9),f=n(7);var d=Object(l.withRouter)((function(e){var t=e.history;return Object(r.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),m=n(10),p=n(5),b=n.n(p),h=(n(21),n(22),function(){return Object(r.useEffect)((function(){return b.a.start(),function(){b.a.done()}})),null}),y=(n(23),n(2)),g=n.n(y),v=function(e){var t=e.darkMode,n=e.setDarkMode,a=Object(r.useRef)(null),c=function(){a.current.classList.toggle("show")},i=function(){return"true"===localStorage.getItem("dark-mode")||!0===t?(localStorage.setItem("dark-mode","false"),1===document.body.attributes.length?document.body.removeAttribute("class"):document.body.classList.remove("dark-mode"),n(!1)):(document.body.classList.add("dark-mode"),localStorage.setItem("dark-mode","true"),n(!0))},s=Object(l.useLocation)(),f=Object(r.useState)(""),d=u()(f,2),m=d[0],p=d[1];Object(r.useEffect)((function(){p(s.pathname.split("/")[1])}),[s.pathname]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"Navbar",id:"myNavbar",onTouchMove:function(e){e.targetTouches[0].pageX>Math.floor(window.screen.width/3)?a.current.classList.add("show"):(a.current.classList.remove("show"),a.current.style.transition="400ms")}},o.a.createElement("a",{href:"#main",className:"skip-link"},"Saltar al contenido"),void("false"===localStorage.getItem("dark-mode")?document.body.classList.remove("dark-mode"):("true"===localStorage.getItem("dark-mode")||t)&&document.body.classList.add("dark-mode")),o.a.createElement("nav",{className:"Navbar__navLink",id:"sidebar",ref:a},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/",style:{textDecoration:""===m&&"underline"}},"Inicio")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/blog",style:{textDecoration:"blog"===m&&"underline"}},"Blog")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/portfolio",style:{textDecoration:"portfolio"===m&&"underline"}},"Portafolio")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/about",style:{textDecoration:"about"===m&&"underline"}},"Sobre mí")))),o.a.createElement("header",{className:"Navbar__mobileHeader"},o.a.createElement("div",{className:"toggleBtn",onClick:c,onKeyDown:function(e){return 13===e.keyCode&&c()},role:"button",tabIndex:"-1"},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null)),function(){switch(m){case"blog":return o.a.createElement("h3",null,"Blog");case"portfolio":return o.a.createElement("h3",null,"Portafolio");case"about":return o.a.createElement("h3",null,"Sobre mí");default:return o.a.createElement("h3",null,"Inicio")}}(),o.a.createElement("button",{className:"Navbar__navLink__switch",onClick:function(){return i()},"aria-label":"Cambiar tema"}),o.a.createElement("input",{tabIndex:"-1",type:"checkbox",id:"switch",name:"switch",defaultChecked:"false"!==localStorage.getItem("dark-mode")&&("true"===localStorage.getItem("dark-mode")||t),onChange:function(){i()}}))))};v.propTypes={darkMode:g.a.oneOfType([g.a.string,g.a.bool]),setDarkMode:g.a.func};var E=v,k=(n(24),function(){return o.a.createElement("footer",{className:"Footer"},o.a.createElement("span",null,"Marco Madera | 2020"))}),S=function(e){var t=e.darkMode,n=e.setDarkMode,a=e.children;return o.a.createElement(r.Fragment,null,o.a.createElement(E,{darkMode:t,setDarkMode:n}),a,o.a.createElement(k,null))};S.propTypes={darkMode:g.a.oneOfType([g.a.string,g.a.bool]),setDarkMode:g.a.func,children:g.a.node.isRequired};var w=S,O=n(11),x=n.n(O),j=n(12),P=n.n(j),M=n(13),N=n.n(M),_=n(14),T=n.n(_),C=n(6),I=n.n(C),L=(n(28),function(){return o.a.createElement("main",{className:"ErrorPage container",id:"main"},o.a.createElement("h3",null,"Ha ocurrido un error"),o.a.createElement("a",{href:window.location.href},"Intenta de nuevo refrescando la página"))});function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=I()(e);if(t){var o=I()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T()(this,n)}}var D=function(e){N()(n,e);var t=R(n);function n(e){var r;return x()(this,n),(r=t.call(this,e)).state={hasError:!1},r}return P()(n,[{key:"render",value:function(){return this.state.hasError?o.a.createElement(L,null):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(r.Component);D.propTypes={children:g.a.node.isRequired};var z=D,A=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,687))})),q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,34))})),B=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(6)]).then(n.bind(null,689))})),U=function(){var e=s.a.map((function(e,t){var n=e.path,r=e.component;return o.a.createElement(l.Route,{exact:!0,path:n,component:r,key:t})})),t=Object(r.useState)(localStorage.getItem("dark-mode")||window.matchMedia("(prefers-color-scheme: dark)").matches),n=u()(t,2),a=n[0],c=n[1];return o.a.createElement(l.BrowserRouter,null,o.a.createElement(f.a.Provider,{value:a},o.a.createElement(w,{darkMode:a,setDarkMode:c},o.a.createElement(d,null),o.a.createElement(z,null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(h,null)},o.a.createElement(l.Switch,null,e,o.a.createElement(l.Route,{exact:!0,path:"/",component:A}),o.a.createElement(l.Route,{exact:!0,path:"/blog/tag/",component:q}),o.a.createElement(l.Route,{exact:!0,path:"/blog/tag/:tag",component:q}),o.a.createElement(l.Route,{exact:!0,path:"/blog/:blogId",component:B}),o.a.createElement(l.Route,{component:m.a})))))))};n(29);c.a.render(o.a.createElement(U,null),document.getElementById("root"))}]);