(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(142),i=a(42),o=a(3),l=a.n(o),s=function(e){var t=e.title,a=e.description,o=e.image,l=document.location.href,s=Object(r.useContext)(i.a);return n.a.createElement(c.a,null,t&&n.a.createElement("title",null,t),t&&n.a.createElement("meta",{property:"og:title",content:t}),t&&n.a.createElement("meta",{name:"twitter:title",content:t}),a&&n.a.createElement("meta",{name:"description",content:a}),a&&n.a.createElement("meta",{property:"og:description",content:a}),a&&n.a.createElement("meta",{name:"twitter:description",content:a}),o&&n.a.createElement("meta",{property:"og:image",content:o}),o&&n.a.createElement("meta",{name:"twitter:image",content:o}),n.a.createElement("meta",{property:"og:url",content:l}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{name:"twitter:card",content:"summary"}),n.a.createElement("meta",{name:"twitter:creator",content:"@madera_marco"}),n.a.createElement("meta",{name:"twitter:site",content:"@madera_marco"}),!0===s?n.a.createElement("meta",{name:"theme-color",content:"#000000"}):n.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))};s.propTypes={title:l.a.string,description:l.a.string,image:l.a.string},t.a=s},143:function(e,t,a){e.exports=a(11)(12)},145:function(e,t,a){(function(a){var r;!function(n){let c;function i(e,t){const a=e.charCodeAt(t);if(isNaN(a))throw new RangeError("Index "+t+' out of range for string "'+e+'"; please open an issue at https://github.com/Trott/slug/issues/new');if(a<55296||a>57343)return[e.charAt(t),t];if(a>=55296&&a<=56319){if(e.length<=t+1)return[" ",t];const a=e.charCodeAt(t+1);return a<56320||a>57343?[" ",t]:[e.charAt(t)+e.charAt(t+1),t+1]}if(0===t)return[" ",t];const r=e.charCodeAt(t-1);if(r<55296||r>56319)return[" ",t];throw new Error('String "'+e+'" reaches code believed to be unreachable; please open an issue at https://github.com/Trott/slug/issues/new')}function o(e,t){let a=s(e,t);if(""===a){let r="";for(let t=0;t<e.length;t++){const a=i(e,t);t=a[1],r+=a[0]}a=s(c(r),t)}return a}c="undefined"!=typeof window?window.btoa?function(e){return btoa(unescape(encodeURIComponent(e)))}:function(e){const t=unescape(encodeURIComponent(e+""));let a="";for(let e,r,n=0,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.charAt(0|n)||(c="=",n%1);a+=c.charAt(63&e>>8-n%1*8)){if(r=t.charCodeAt(n+=3/4),r>255)throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");e=e<<8|r}return a}:function(e){return a.from(e).toString("base64")},"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){"use strict";if(null==e)throw new TypeError("Cannot convert undefined or null to object");const a=Object(e);for(let e=1;e<arguments.length;e++){const t=arguments[e];if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},writable:!0,configurable:!0});const l={bg:{"Й":"Y","й":"y",X:"H",x:"h","Ц":"Ts","ц":"ts","Щ":"Sht","щ":"sht","Ъ":"A","ъ":"a","Ь":"Y","ь":"y"},de:{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},sr:{"đ":"dj","Đ":"DJ"}};function s(e,t){if("string"!=typeof e)throw new Error("slug() requires a string argument, received "+typeof e);"string"==typeof t&&(t={replacement:t}),(t=t?Object.assign({},t):{}).mode=t.mode||o.defaults.mode;const a=o.defaults.modes[t.mode],r=["replacement","multicharmap","charmap","remove","lower"];for(let e,n=0,c=r.length;n<c;n++)e=r[n],t[e]=e in t?t[e]:a[e];const n=l[t.locale]||{};let c=[];for(let e in t.multicharmap){if(!Object.prototype.hasOwnProperty.call(t.multicharmap,e))continue;const a=e.length;-1===c.indexOf(a)&&c.push(a)}c=c.sort((function(e,t){return t-e}));let i="";for(let a,r=0,o=e.length;r<o;r++){a=e[r];let o=!1;for(let n=0;n<c.length;n++){const i=c[n],l=e.substr(r,i);if(t.multicharmap[l]){r+=i-1,a=t.multicharmap[l],o=!0;break}}o||(n[a]?a=n[a]:t.charmap[a]&&(a=t.charmap[a])),a=a.replace(t.replacement," "),i+=a}const s="rfc3986"===t.mode?/[^\w\s\-.~]/g:/[^A-Za-z0-9\s]/g;return i=i.replace(s,""),t.remove&&(i=i.replace(t.remove,"")),i=i.trim(),i=i.replace(/[-\s]+/g,t.replacement),i=i.replace(t.replacement+"$",""),t.lower&&(i=i.toLowerCase()),i}const u={"फ़":"Fi","ग़":"Ghi","ख़":"Khi","क़":"Qi","ड़":"ugDha","ढ़":"ugDhha","य़":"Yi","ज़":"Za","בִי":"i","בֵ":"e","בֵי":"e","בֶ":"e","בַ":"a","בָ":"a","בֹ":"o","וֹ":"o","בֻ":"u","וּ":"u","בּ":"b","כּ":"k","ךּ":"k","פּ":"p","שׁ":"sh","שׂ":"s","בְ":"e","חֱ":"e","חֲ":"a","חֳ":"o","בִ":"i"},m={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ő":"O","Ø":"O","Ō":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ű":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ő":"o","ø":"o","ō":"o","Œ":"OE","œ":"oe","ù":"u","ú":"u","û":"u","ü":"u","ű":"u","ý":"y","þ":"th","ÿ":"y","ẞ":"SS","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"h","ώ":"w","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"H","Ώ":"W","Ϊ":"I","Ϋ":"Y","ş":"s","Ş":"S","ı":"i","İ":"I","ğ":"g","Ğ":"G","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g","č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z","ľ":"l","ĺ":"l","ŕ":"r","Ľ":"L","Ĺ":"L","Ŕ":"R","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ś":"S","Ź":"Z","Ż":"Z","ā":"a","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","ū":"u","Ā":"A","Ē":"E","Ģ":"G","Ī":"I","Ķ":"K","Ļ":"L","Ņ":"N","Ū":"U","أ":"a","إ":"i","ب":"b","ت":"t","ث":"th","ج":"g","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"d","ط":"t","ظ":"th","ع":"aa","غ":"gh","ف":"f","ق":"k","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"o","ي":"y","ء":"aa","ة":"a","آ":"a","ا":"a","پ":"p","ژ":"zh","گ":"g","چ":"ch","ک":"k","ی":"i","ė":"e","į":"i","ų":"u","Ė":"E","Į":"I","Ų":"U","ț":"t","Ț":"T","ţ":"t","Ţ":"T","ș":"s","Ș":"S","ă":"a","Ă":"A","Ạ":"A","Ả":"A","Ầ":"A","Ấ":"A","Ậ":"A","Ẩ":"A","Ẫ":"A","Ằ":"A","Ắ":"A","Ặ":"A","Ẳ":"A","Ẵ":"A","Ẹ":"E","Ẻ":"E","Ẽ":"E","Ề":"E","Ế":"E","Ệ":"E","Ể":"E","Ễ":"E","Ị":"I","Ỉ":"I","Ĩ":"I","Ọ":"O","Ỏ":"O","Ồ":"O","Ố":"O","Ộ":"O","Ổ":"O","Ỗ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ợ":"O","Ở":"O","Ỡ":"O","Ụ":"U","Ủ":"U","Ũ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ự":"U","Ử":"U","Ữ":"U","Ỳ":"Y","Ỵ":"Y","Ỷ":"Y","Ỹ":"Y","Đ":"D","ạ":"a","ả":"a","ầ":"a","ấ":"a","ậ":"a","ẩ":"a","ẫ":"a","ằ":"a","ắ":"a","ặ":"a","ẳ":"a","ẵ":"a","ẹ":"e","ẻ":"e","ẽ":"e","ề":"e","ế":"e","ệ":"e","ể":"e","ễ":"e","ị":"i","ỉ":"i","ĩ":"i","ọ":"o","ỏ":"o","ồ":"o","ố":"o","ộ":"o","ổ":"o","ỗ":"o","ơ":"o","ờ":"o","ớ":"o","ợ":"o","ở":"o","ỡ":"o","ụ":"u","ủ":"u","ũ":"u","ư":"u","ừ":"u","ứ":"u","ự":"u","ử":"u","ữ":"u","ỳ":"y","ỵ":"y","ỷ":"y","ỹ":"y","đ":"d","Ә":"AE","ә":"ae","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ө":"OE","ө":"oe","ђ":"dj","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ђ":"Dj","Ј":"j","Љ":"Lj","Њ":"Nj","Ћ":"C","Џ":"Dz","ǌ":"nj","ǉ":"lj","ǋ":"NJ","ǈ":"LJ","अ":"a","आ":"aa","ए":"e","ई":"ii","ऍ":"ei","ऎ":"ae","ऐ":"ai","इ":"i","ओ":"o","ऑ":"oi","ऒ":"oii","ऊ":"uu","औ":"ou","उ":"u","ब":"B","भ":"Bha","च":"Ca","छ":"Chha","ड":"Da","ढ":"Dha","फ":"Fa","ग":"Ga","घ":"Gha","ग़":"Ghi","ह":"Ha","ज":"Ja","झ":"Jha","क":"Ka","ख":"Kha","ख़":"Khi","ल":"L","ळ":"Li","ऌ":"Li","ऴ":"Lii","ॡ":"Lii","म":"Ma","न":"Na","ङ":"Na","ञ":"Nia","ण":"Nae","ऩ":"Ni","ॐ":"oms","प":"Pa","क़":"Qi","र":"Ra","ऋ":"Ri","ॠ":"Ri","ऱ":"Ri","स":"Sa","श":"Sha","ष":"Shha","ट":"Ta","त":"Ta","ठ":"Tha","द":"Tha","थ":"Tha","ध":"Thha","ड़":"ugDha","ढ़":"ugDhha","व":"Va","य":"Ya","य़":"Yi","ज़":"Za","ə":"e","Ə":"E","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"p","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ב":"v","גּ":"g","ג":"g","ד":"d","דּ":"d","ה":"h","ו":"v","ז":"z","ח":"h","ט":"t","י":"y","כ":"kh","ך":"kh","ל":"l","מ":"m","ם":"m","נ":"n","ן":"n","ס":"s","פ":"f","ף":"f","ץ":"ts","צ":"ts","ק":"k","ר":"r","תּ":"t","ת":"t"};o.charmap=Object.assign({},m),o.multicharmap=Object.assign({},u),o.defaults={charmap:o.charmap,mode:"pretty",modes:{rfc3986:{replacement:"-",remove:null,lower:!0,charmap:o.charmap,multicharmap:o.multicharmap},pretty:{replacement:"-",remove:null,lower:!0,charmap:o.charmap,multicharmap:o.multicharmap}},multicharmap:o.multicharmap},o.reset=function(){o.defaults.modes.rfc3986.charmap=o.defaults.modes.pretty.charmap=o.charmap=o.defaults.charmap=Object.assign({},m),o.defaults.modes.rfc3986.multicharmap=o.defaults.modes.pretty.multicharmap=o.multicharmap=o.defaults.multicharmap=Object.assign({},u)},o.extend=function(e){Object.assign(o.charmap,e)},void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}).call(this,a(8).Buffer)},176:function(e,t,a){},177:function(e,t){e.exports=function(e,t,a){var r;return function(){if(!t)return e.apply(this,arguments);var n=this,c=arguments,i=a&&!r;return clearTimeout(r),r=setTimeout((function(){if(r=null,!i)return e.apply(n,c)}),t),i?e.apply(this,arguments):void 0}}},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a.n(r),c=a(0),i=a.n(c);a(176);var o=a(177),l=a.n(o),s=(a(178),a(41)),u=a.n(s),m=function(e){return i.a.createElement("svg",u()({viewBox:"0 0 56.966 56.966"},e),i.a.createElement("path",{d:"M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"}))},h=a(3),p=a.n(h),d=function(e){var t=e.resetScrollPage,a=e.searchBlogEntries,r=e.posts,o=e.loading,l=Object(c.useState)(""),s=n()(l,2),u=s[0],h=s[1];return Object(c.useEffect)((function(){var e=r.filter((function(e){return e.title.toLowerCase().includes(u.toLowerCase())}));a(e),t()}),[u,r,o,t,a]),i.a.createElement("form",{className:"Blog__header_searchbox"},i.a.createElement("input",{className:"Blog__header_searchbox__input",type:"text",placeholder:"Buscar",value:u,onChange:function(e){h(e.target.value)},autoCapitalize:"off",autoCorrect:"off",maxLength:"100",spellCheck:"false"}),i.a.createElement(m,{className:"searchbox__icon"}))};d.propTypes={resetScrollPage:p.a.func,searchBlogEntries:p.a.func,posts:p.a.array,loading:p.a.bool};var g=Object(c.memo)(d),f=(a(179),a(2)),E=a(145),_=a.n(E),w=function(e){var t=e.link,a=e.creator,r=e.enclosure,n=e.contentSnippet,c=e.pubDate,o=e.title;return i.a.createElement("li",{className:"BlogListView"},i.a.createElement(f.Link,{to:"/blog/".concat(_()(o))},i.a.createElement("header",{className:"BlogListView__header"},i.a.createElement("section",{className:"BlogListView__header__content"},i.a.createElement("h4",{className:"BlogListView__header__content__title"},o),i.a.createElement("p",{className:"BlogListView__header__content__excerpt"},n.slice(0,180),"..."," ",i.a.createElement("span",{className:"BlogListView__header__content__excerpt__readMore"},"Leer más"))),i.a.createElement("img",{src:r.url,alt:"",className:"BlogListView__header__preview",width:"120",height:"120"}))),i.a.createElement("footer",{className:"BlogListView__footer"},i.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank"},"Original"),i.a.createElement("p",{className:"BlogListView__footer__meta"},a," |"," ",new Date(c).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"}))))};w.propTypes={title:p.a.string,link:p.a.string,creator:p.a.string,enclosure:p.a.object,contentSnippet:p.a.string,pubDate:p.a.string};var b=w,v=(a(180),function(e){var t=e.link,a=e.creator,r=e.enclosure,n=e.contentSnippet,c=e.pubDate,o=e.title;return i.a.createElement("li",{className:"BlogGridView"},i.a.createElement("article",null,i.a.createElement(f.Link,{className:"text-reset text-decoration-none",to:"/blog/".concat(_()(o))},i.a.createElement("header",{className:"BlogGridView__header"},i.a.createElement("img",{src:r.url,alt:o,className:"BlogGridView__header__cover"}),i.a.createElement("section",{className:"BlogGridView__header__content"},i.a.createElement("h4",{className:"BlogGridView__header__content__title"},o),i.a.createElement("p",{className:"BlogGridView__header__content__excerpt"},n.slice(0,180),"..."," ",i.a.createElement("span",{className:"BlogGridView__footer__readMore"},"Leer más"))))),i.a.createElement("footer",{className:"BlogGridView__footer"},i.a.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank"},"Original"),i.a.createElement("p",{className:"BlogGridView__footer__meta"},a," |"," ",new Date(c).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"})))))});v.propTypes={title:p.a.string,link:p.a.string,creator:p.a.string,enclosure:p.a.object,contentSnippet:p.a.string,pubDate:p.a.string};var y=v,V=(a(181),function(e){var t=e.searchResults,a=e.view,r=e.page,n=e.loading,c=e.posts;return i.a.createElement(i.a.Fragment,null,0!==t.length||n?0===t.length&&n?i.a.createElement("div",{className:"Blog__header__search__noresults"},i.a.createElement("div",{className:"lds-ellipsis"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))):0!==t.length?t.map((function(e,t){var n=e.link,c=e.creator,o=e.enclosure,l=e.contentSnippet,s=e.pubDate,u=e.title;return 1==a.listView&&t<4*r?i.a.createElement(b,{key:n,link:n,creator:c,enclosure:o,contentSnippet:l,pubDate:s,title:u}):(1==a.gridView||1==a.cardView)&&t<4*r?i.a.createElement(y,{key:n,link:n,creator:c,enclosure:o,contentSnippet:l,pubDate:s,title:u}):void 0})):c.map((function(e,t){var n=e.link,c=e.creator,o=e.enclosure,l=e.contentSnippet,s=e.pubDate,u=e.title;return 1==a.listView&&t<4*r?i.a.createElement(b,{key:n,link:n,creator:c,enclosure:o,contentSnippet:l,pubDate:s,title:u}):(1==a.gridView||1==a.cardView)&&t<4*r?i.a.createElement(y,{key:n,link:n,creator:c,enclosure:o,contentSnippet:l,pubDate:s,title:u}):void 0})):i.a.createElement("div",{className:"Blog__header__search__noresults"},i.a.createElement("h4",null,"¡Sin resultados!")))});V.propTypes={searchResults:p.a.array,view:p.a.object,page:p.a.number,loading:p.a.bool,posts:p.a.array};var O=V,B=function(e){return i.a.createElement("svg",u()({width:30,height:30,viewBox:"0 0 560.414 560.415"},e),i.a.createElement("path",{d:"M115.65 24.92H33.507C15.031 24.92 0 39.951 0 58.421v82.143c0 18.477 15.031 33.501 33.507 33.501h82.143c18.476 0 33.501-15.031 33.501-33.501V58.421c-.006-18.476-15.031-33.501-33.501-33.501zm411.258 0H212.205c-18.477 0-33.501 15.031-33.501 33.501v82.143c0 18.477 15.025 33.501 33.501 33.501h314.703c18.477 0 33.506-15.031 33.506-33.501V58.421c0-18.476-15.037-33.501-33.506-33.501zM115.65 205.632H33.507C15.031 205.632 0 220.663 0 239.133v82.143c0 18.476 15.031 33.5 33.507 33.5h82.143c18.476 0 33.501-15.024 33.501-33.5v-82.143c-.006-18.476-15.031-33.501-33.501-33.501zm411.258 0H212.205c-18.477 0-33.501 15.031-33.501 33.501v82.143c0 18.476 15.025 33.5 33.501 33.5h314.703c18.477 0 33.506-15.024 33.506-33.5v-82.143c0-18.476-15.037-33.501-33.506-33.501zM115.65 386.343H33.507C15.031 386.343 0 401.374 0 419.85v82.143c0 18.477 15.031 33.501 33.507 33.501h82.143c18.476 0 33.501-15.024 33.501-33.501V419.85c-.006-18.476-15.031-33.507-33.501-33.507zm411.258 0H212.205c-18.477 0-33.501 15.03-33.501 33.507v82.143c0 18.477 15.025 33.501 33.501 33.501h314.703c18.477 0 33.506-15.024 33.506-33.501V419.85c0-18.476-15.037-33.507-33.506-33.507z",fill:"#3B3B3B"}))},N=function(e){return i.a.createElement("svg",u()({width:30,height:30,viewBox:"0 0 500 500"},e),i.a.createElement("path",{d:"M464.844 0H35.156C15.744 0 0 15.74 0 35.156v429.688C0 484.26 15.744 500 35.156 500h429.688C484.26 500 500 484.26 500 464.844V35.156C500 15.74 484.26 0 464.844 0zM122.14 397.624c-19.392 0-35.164-15.776-35.164-35.172 0-19.388 15.772-35.164 35.164-35.164 19.392 0 35.172 15.776 35.172 35.164 0 19.396-15.78 35.172-35.172 35.172zm0-105.468c-19.392 0-35.164-15.776-35.164-35.172 0-19.388 15.772-35.164 35.164-35.164 19.392 0 35.172 15.776 35.172 35.164 0 19.396-15.78 35.172-35.172 35.172zm0-105.468c-19.392 0-35.164-15.776-35.164-35.172 0-19.388 15.772-35.164 35.164-35.164 19.392 0 35.172 15.776 35.172 35.164 0 19.396-15.78 35.172-35.172 35.172zM419.324 375H215.96c-6.472 0-11.72-5.248-11.72-11.72 0-6.476 5.248-11.72 11.72-11.72h203.364c6.472 0 11.72 5.244 11.72 11.72 0 6.472-5.248 11.72-11.72 11.72zm0-105.468H215.96c-6.472 0-11.72-5.248-11.72-11.72 0-6.476 5.248-11.72 11.72-11.72h203.364c6.472 0 11.72 5.244 11.72 11.72 0 6.468-5.248 11.72-11.72 11.72zm0-105.468H215.96c-6.472 0-11.72-5.248-11.72-11.72 0-6.476 5.248-11.72 11.72-11.72h203.364c6.472 0 11.72 5.244 11.72 11.72 0 6.468-5.248 11.72-11.72 11.72z",fill:"#3B3B3B"}))},j=function(e){return i.a.createElement("svg",u()({width:30,height:30,viewBox:"0 50 512 505"},e),i.a.createElement("path",{d:"M199.24 90.281c-10.345 0-18.732 8.387-18.732 50.732v113.304c0 10.345 8.387 18.732 18.732 18.732h113.303c10.346 0 18.732-8.387 18.732-18.732V109.012c0-10.345-8.387-18.732-18.732-18.732H199.24zm294.028 0H379.965c-10.345 0-18.732 8.387-18.732 50.732v113.304c0 10.345 8.387 18.732 18.732 18.732h113.303c10.345 0 18.732-8.387 18.732-18.732V109.012c0-10.345-8.387-18.731-18.732-18.731zM18.732 273.048h113.303c10.346 0 18.732-8.387 18.732-18.732V109.012c0-10.345-8.387-18.732-.732-18.732H18.732C8.387 90.281 0 98.667 0 109.012v113.304c0 52.345 8.387 50.732 18.732 50.732zm293.813 65.272H199.24c-10.345 0-18.732 8.387-18.732 50.732v113.303c0 10.345 8.387 18.732 18.732 18.732h113.304c10.346 0 18.732-8.387 18.732-18.73V357.051c0-10.345-8.386-18.731-18.731-18.731zm180.723 0H379.965c-10.345 0-18.732 8.387-18.732 50.732v113.303c0 10.345 8.387 18.732 18.732 18.732h113.303c10.345 0 18.732-8.387 18.732-18.73V357.051c0-10.345-8.387-18.731-18.732-18.731zm-361.233 0H18.732C8.387 338.32 0 346.706 0 389.051v113.303c0 10.345 8.387 18.732 18.732 18.732h113.303c10.346 0 18.732-8.387 18.732-18.73V357.051c0-10.345-8.387-18.731-18.732-18.731z",fill:"#3B3B3B"}))},k=(a(182),function(e){var t=e.view,a=e.setView;return i.a.createElement(c.Fragment,null,i.a.createElement("button",{onClick:function(){a({listView:!0,cardView:!1,gridView:!1})},className:t.listView?"Blog__View selected":"Blog__View","aria-label":"Vista de lista"},i.a.createElement(B,null)),i.a.createElement("button",{onClick:function(){a({listView:!1,cardView:!0,gridView:!1})},className:t.cardView?"Blog__View selected":"Blog__View","aria-label":"Vista de tarjeta"},i.a.createElement(N,null)),i.a.createElement("button",{onClick:function(){a({listView:!1,cardView:!1,gridView:!0})},className:t.gridView?"Blog__View selected":"Blog__View","aria-label":"Vista de cuadrícula"},i.a.createElement(j,null)))});k.propTypes={view:p.a.object,setView:p.a.func};var S=k,A=a(140),z=function(e){var t=e.posts,r=Object(c.useState)(!0),o=n()(r,2),s=o[0],u=o[1],m=Object(c.useState)([]),h=n()(m,2),p=h[0],d=h[1],f=Object(c.useState)(1),E=n()(f,2),_=E[0],w=E[1],b=Object(c.useState)({listView:!0,cardView:!1,gridView:!1}),v=n()(b,2),y=v[0],V=v[1],B=Object(c.useRef)(),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.distance,r=void 0===t?"100px":t,i=e.externalRef,o=e.once,l=void 0===o||o,s=Object(c.useState)(!1),u=n()(s,2),m=u[0],h=u[1],p=Object(c.useRef)();return Object(c.useEffect)((function(){var e,t=i?i.current:p.current,n=function(e,t){e[0].isIntersecting?(h(!0),l&&t.disconnect()):!l&&h(!1)};return Promise.resolve("undefined"!=typeof IntersectionObserver?IntersectionObserver:a.e(12).then(a.t.bind(null,244,7))).then((function(){e=new IntersectionObserver(n,{rootMargin:r}),t&&e.observe(t)})),function(){return e&&e.disconnect()}})),{isNearScreen:m,fromRef:p}}({externalRef:s?null:B,once:!1}).isNearScreen,j=Object(c.useCallback)((function(){w(1),u(!1)}),[]),k=Object(c.useCallback)((function(e){d(e)}),[]),z=Object(c.useCallback)(l()((function(){return w((function(e){return e+1}))}),200),[]);return Object(c.useEffect)((function(){N&&z()}),[z,N,p]),i.a.createElement("main",{className:"Blog container",id:"main"},i.a.createElement(A.a,{title:"Marco Madera | Blog",description:"Aquí puedes encontrar las entradas de blog"}),i.a.createElement("header",{className:"Blog__header"},i.a.createElement("h1",{className:"Blog__header__title"},"Entradas"),i.a.createElement(g,{searchBlogEntries:k,resetScrollPage:j,posts:t,loading:s}),i.a.createElement(S,{view:y,setView:V})),i.a.createElement("p",null,"Las entradas del blog se seguirán actualizando, pero no están creadas para esta página, para una mejor experiencia visita la página actualizada"," ",i.a.createElement("a",{href:"https://marcomadera.com"},"https://marcomadera.com")),i.a.createElement("ul",{className:y.gridView?"Blog__gridView":void 0},i.a.createElement(O,{searchResults:p,view:y,page:_,loading:s,posts:t})),i.a.createElement("div",{ref:B}))};t.default=z;z.propTypes={posts:p.a.array}}}]);