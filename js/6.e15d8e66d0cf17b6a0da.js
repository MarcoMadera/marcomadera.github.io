(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(142),c=a(42),i=a(3),l=a.n(i),m=function(e){var t=e.title,a=e.description,i=e.image,l=document.location.href,m=Object(n.useContext)(c.a);return r.a.createElement(o.a,null,t&&r.a.createElement("title",null,t),t&&r.a.createElement("meta",{property:"og:title",content:t}),t&&r.a.createElement("meta",{name:"twitter:title",content:t}),a&&r.a.createElement("meta",{name:"description",content:a}),a&&r.a.createElement("meta",{property:"og:description",content:a}),a&&r.a.createElement("meta",{name:"twitter:description",content:a}),i&&r.a.createElement("meta",{property:"og:image",content:i}),i&&r.a.createElement("meta",{name:"twitter:image",content:i}),r.a.createElement("meta",{property:"og:url",content:l}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@madera_marco"}),r.a.createElement("meta",{name:"twitter:site",content:"@madera_marco"}),!0===m?r.a.createElement("meta",{name:"theme-color",content:"#000000"}):r.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))};m.propTypes={title:l.a.string,description:l.a.string,image:l.a.string},t.a=m},143:function(e,t,a){e.exports=a(11)(12)},187:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(183),c=(a(187),a(47)),i=a(140),l=a(3),m=a.n(l),s=a(145),u=a.n(s),d=a(188),p=a.n(d),f=function(e){var t=e.match,a=e.posts,l=a.find((function(e){return u()(e.title)===t.params.blogId})),m=l.creator,s=l.title,d=l.link,f=l.enclosure,g=l.pubDate,h=l.content,E=l.contentSnippet,w=[{shouldProcessNode:function(e){var t=e.type,a=e.name;return"tag"===t&&"youtube"===a},processNode:function(e){var t=e.attribs;return r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/".concat(t.id),title:t.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{maxWidth:"100%"}})}},{shouldProcessNode:function(e){var t=e.type,a=e.name;return"tag"===t&&"videogif"===a},processNode:function(e,t){var a=e.attribs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("video",{title:a.title,muted:!0,loop:!0,autoPlay:!0,playsInline:!0},r.a.createElement("source",{src:a.src||a.dark||a.light,type:"video/mp4"})),t))}},{shouldProcessNode:function(e){var t=e.type,a=e.name;return"tag"===t&&"pre"===a},processNode:function(e,t){var a=e.attribs;return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("pre",a,t))}},{shouldProcessNode:function(e){var t=e.type,a=e.name;return"tag"===t&&"image"===a},processNode:function(e,t){var a=e.attribs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{title:a.title,src:a.src||a.dark||a.light||a.dark,alt:a.alt}),t)}},{shouldProcessNode:function(e){var t=e.type,a=e.name;return"tag"===t&&"tweet"===a},processNode:function(e,t){var a=e.attribs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("iframe",{width:"560",height:"400",src:"https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=".concat(a.id,"&lang=es"),title:a.title,frameBorder:"0",style:{maxWidth:"100%"}}),t)}},{shouldProcessNode:function(){return!0},processNode:new p.a.ProcessNodeDefinitions(r.a).processDefaultNode}],y=(new(0,p.a.Parser)).parseWithInstructions("<div>".concat(h,"<div>"),(function(){return!0}),w);return r.a.createElement(n.Fragment,null,a.length>0&&!l?r.a.createElement(c.a,null):r.a.createElement("main",{className:"GenericBlog container",id:"main"},r.a.createElement(i.a,{title:s,description:E.slice(0,180),image:f.url}),r.a.createElement("h1",null,s),r.a.createElement("p",{className:"BlogListView__footer__meta"},m," |"," ",new Date(g).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric"})),y,r.a.createElement("hr",null),r.a.createElement("a",{href:d,rel:"noopener noreferrer",target:"_blank"},"Contenido Fuente Original"),r.a.createElement(o.DiscussionEmbed,{shortname:"marcomadera",config:{url:"https://marcomadera.github.io/blog/".concat(u()(s)),identifier:u()(s),title:s,language:"es-MX"}})))};f.propTypes={match:m.a.object,posts:m.a.array},t.default=f}}]);