"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8638],{16092:function(e,t,n){n.d(t,{Z:function(){return b}});n(26699),n(32023),n(47941);var a=n(67294),r=n(90304),i=n(21579),o=n(29439),c=(n(74916),n(15306),n(74148)),l=function(e){return e.includes("x8=[simorgh]")?e.replace("x8=[simorgh]","x8=[simorgh-nojs]"):"".concat(e,"&x8=[simorgh-nojs]")},u=function(e){var t=e.pageviewParams,n=(0,a.useState)("https://a1.api.bbc.co.uk/hit.xiti?"+t),r=(0,o.Z)(n,1)[0];return(0,a.useEffect)((function(){(0,c.Z)(r)}),[r]),function(e){return a.createElement("noscript",null,a.createElement("img",{height:"1px",width:"1px",alt:"",style:{position:"absolute"},src:l(e)}))}(r)},s=function(e){return{transport:{beacon:!1,xhrpost:!1,image:!0},requests:{base:e.baseUrl,pageview:"${base}"+e.pageviewParams},triggers:{trackPageview:{on:"visible",request:"pageview"}}}},p=function(e){var t=e.pageviewParams;return a.createElement("amp-analytics",null,function(e){return a.createElement("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}(s({baseUrl:"https://a1.api.bbc.co.uk/hit.xiti?",pageviewParams:t})))},m=n(63568),f=n(35573),d=n(35940),g=n(7787),h=n(28797),v=n(58253),b=(n(51670),function(e){var t=e.data,n=(0,a.useContext)(r.f),o=(0,a.useContext)(i.o),c=n.pageType,l=n.isAmp,s={article:m.s7,frontPage:v.Ls,media:f.n,mostRead:g.c2,mostWatched:h.ky,IDX:v.Ls,FIX:v.Ls,MAP:function(){return(0,d.C)(t,n,o,"article-media-asset")},PGL:function(){return(0,d.C)(t,n,o,"article-photo-gallery")},STY:function(){return(0,d.C)(t,n,o,"article")},CSP:function(){return(0,d.C)(t,n,o,"article-correspondent")}};if(!Object.keys(s).includes(c))return null;var b=s[c](t,n,o);return l?a.createElement(p,{pageviewParams:b}):a.createElement(u,{pageviewParams:b})})},14395:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(67294),r=n(21579),i=n(94398),o=n(90304),c=(n(51670),n(64016),function(e){var t=e.chartbeatConfig;return a.createElement("amp-analytics",{type:"chartbeat"},function(e){return a.createElement("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}({vars:t}))}),l=n(4942),u=n(93433),s=(n(92222),n(47042),n(69600),n(47941),n(82526),n(57327),n(38880),n(54747),n(49337),n(31955)),p=n(87430),m=n.n(p),f=n(54782),d=n.n(f),g=n(86949),h=n(27580),v=n(81857),b=n(9490),y=n(61890);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e,t,n){return["".concat(e," - ").concat(t)].concat((0,u.Z)(n?["".concat(e," - ").concat(t," - ").concat(n)]:[]))},P=function(e,t){return["".concat(e," - ").concat(t)]},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(e){case y.xr:case y.VS:case"index":return t?y.VS:"Index";case y.vM:return t?"ART":"New Article";case y.CH:return"article-media-asset";case y.rh:return"Radio";case y.T7:return"Most Read";case y.Ei:return"Most Watched";case y.n$:return y.n$;case y.x0:return y.x0;case y.PU:return y.PU;default:return null}},x=m()(["contentType"]),T=function(e){var t=e.isAmp,n=e.platform,a=e.pageType,r=e.data,i=e.brandName,o=e.env,c=e.service,l=e.origin,p=e.previousPath,f=e.chartbeatDomain,E=e.mostReadTitle,T=e.mostWatchedTitle,k=p||t?(0,b.an)(n,l,p):null,L=function(e){var t=e.pageType,n=e.pageData,a=e.brandName,r=e.title;switch(t){case y.xr:case y.VS:case"index":return(0,v.pz)(n,a);case y.vM:return(0,h.GM)(n);case y.CH:return m()(["promo","headlines","headline"],n);case y.rh:return m()(["pageTitle"],n);case y.T7:case y.Ei:return"".concat(r," - ").concat(a);case y.n$:case y.x0:return m()(["promo","headlines","headline"],n);case y.PU:return(0,v.pz)(n,a);default:return null}}({pageType:a,pageData:r,brandName:i,title:a===y.Ei?T:E}),A="live"!==o?"test.bbc.co.uk":f,D=function(e){var t,n=e.service,a=e.pageType,r=e.producer,i=e.chapter,o=e.sectionName,c=e.categoryName,l=e.mediaPageType,s=r&&n!==r,p=(t=n).charAt(0).toUpperCase()+t.slice(1),m=j(a,!0),f=function(e){return"".concat(e,"-category")};switch(a){case y.CH:return[p,P(p,o),P(p,a),P(P(p,o),a),P(p,f(c))].join(", ");case y.rh:return[p].concat((0,u.Z)(a?P(p,{"On Demand Radio":"Radio","Live Radio":"Radio","On Demand TV":"TV",Podcast:"Podcasts"}[l]):[]),(0,u.Z)(s?w(p,r,m):[]),(0,u.Z)(i?w(p,i,m):[])).join(", ");case y.n$:return[p,P(p,o),P(p,a),P(P(p,o),a),P(p,f(c))].join(", ");default:return[p].concat((0,u.Z)(a?P(p,m):[]),(0,u.Z)(s?w(p,r,m):[]),(0,u.Z)(i?w(p,i,m):[])).join(", ")}}({service:c,pageType:a,sectionName:m()(["relatedContent","section","name"],r),categoryName:m()(["metadata","passport","category","categoryName"],r),mediaPageType:d()("",["metadata","type"],r)}),C=(0,g.Z)()?s.Z.get("ckns_sylphid"):null,Z=j(a),N=a===y.rh?x(r):Z,S=(0,g.Z)()&&window.location.pathname;return O(O(O({domain:A,sections:D,uid:50924,title:L,virtualReferrer:k},t&&{contentType:N}),!t&&{type:N,useCanonical:true,path:S}),C&&{idSync:{bbc_hid:C}})},k=n(63548),L=function(e){var t=e.data,n=(0,a.useContext)(r.o),l=n.service,u=n.brandName,s=n.chartbeatDomain,p=n.mostRead.header,m=n.mostWatched.header,f=(0,a.useContext)(i.S).sendCanonicalChartbeatBeacon,d=(0,k.Z)("chartbeatAnalytics").enabled,g=(0,a.useContext)(o.f),h=g.env,v=g.isAmp,b=g.platform,y=g.pageType,E=g.previousPath,O=g.origin,w=v&&d,P=!v&&d,j=T({isAmp:v,platform:b,pageType:y,data:t,brandName:u,chartbeatDomain:s,env:h,service:l,origin:O,previousPath:E,mostReadTitle:p,mostWatchedTitle:m});return(0,a.useEffect)((function(){P&&f(j)}),[t,P]),w&&a.createElement(c,{chartbeatConfig:j})}},62099:function(e,t,n){n.d(t,{Z:function(){return g}});n(47941),n(57327),n(38880),n(54747),n(49337);var a=n(93433),r=n(4942),i=(n(82526),n(41817),n(92222),n(67294)),o=n(64593),c=n(21579),l=n(90304),u=(n(26699),n(74916),n(15306),n(23157),function(e){var t=["core:Person","core:Event","core:Organization","core:Place"];if(0===e.length)return"Thing";var n,a=0;return e.forEach((function(e){t.includes(e)&&(a+=1,n=e.replace("core:",""))})),1===a?n:"Thing"}),s=function(e){if(e&&e.length>0){var t=[];return e.forEach((function(e){var n,a,r={"@type":u(e.thingType),name:e.thingLabel};e["skos:altLabel"]&&(r.alternateName=e["skos:altLabel"]),e.thingSameAs&&e.thingSameAs.length>0&&(r.sameAs=(n=e.thingSameAs,(a=n.filter((function(e){return e.startsWith("http://dbpedia.org/")}))).length?a:void 0)),t.push(r)})),t}},p=n(42702);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t,n=e.showAuthor,r=e.type,u=e.seoTitle,m=e.headline,d=e.description,g=e.datePublished,h=e.dateModified,v=e.aboutTags,b=e.entities,y=e.imageLocator,E=(0,i.useContext)(c.o),O=E.brandName,w=E.publishingPrinciples,P=E.defaultImage,j=E.noBylinesPolicy,x=E.isTrustProjectParticipant,T=E.service,k=E.languageName,L=E.lang,A=(0,i.useContext)(l.f).canonicalNonUkLink,D="ImageObject",C=x?"NewsMediaOrganization":"Organization",Z=x?O:"BBC",N="RadioChannel"!==r,S=y?(0,p.Z)(y,T):null,_={"@type":D,width:1024,height:576,url:P},I={"@type":D,width:1024,height:576,url:S||P},M=S||P,R=f(f({"@type":C,name:Z},x&&{publishingPrinciples:w}),{},{logo:_}),H={"@type":"WebPage","@id":A,name:u},U={"@type":"Language",name:k,alternateName:L},z=f(f(f({"@type":r,url:A},N&&{publisher:R,thumbnailUrl:M}),{},{image:I,mainEntityOfPage:H,headline:m,description:d,datePublished:g,dateModified:h,inLanguage:U},v&&{about:s(v)}),n&&{author:f({"@type":C,name:Z,logo:{"@type":"ImageObject",width:1024,height:576,url:P}},x&&{noBylinesPolicy:j})});return i.createElement(o.q,null,i.createElement("script",{type:"application/ld+json"},(t={"@context":"http://schema.org","@graph":[f({},z)].concat((0,a.Z)(b))})&&JSON.stringify(t).replace(/</g,"\\u003c")))};d.defaultProps={showAuthor:!1,headline:void 0,description:void 0,datePublished:void 0,dateModified:void 0,aboutTags:void 0,entities:[],imageLocator:void 0};var g=d},6944:function(e,t,n){n.d(t,{Z:function(){return h}});n(47941),n(57327),n(38880),n(54747),n(49337);var a=n(4942),r=(n(21249),n(82526),n(41817),n(26699),n(92222),n(67294)),i=n(64593),o=n(21579),c=n(90304),l=(n(69600),function(e,t){return"https://static.files.bbci.co.uk/ws/simorgh-assets/public/".concat(e,"/images/icons/icon-").concat(t,".png")}),u=function(e,t){return t?Object.keys(t).map((function(n){return function(e,t,n){return t.map((function(t){var a=l(e,t),i="".concat(e,"-").concat(t);return"icon"===n?r.createElement("link",{key:i,rel:"icon",type:"image/png",href:a,sizes:t}):r.createElement("link",{key:i,rel:"apple-touch-icon",sizes:t,href:a})}))}(e,t[n],n)})):null},s=function(e){return r.createElement("link",{rel:"alternate",href:e.href,hrefLang:e.hrefLang,key:e.hrefLang})};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=["news","sport"],f={"apple-touch-icon":["72x72","96x96","128x128","144x144","152x152","180x180","192x192","384x384","512x512"],icon:["72x72","96x96","192x192"]},d=function(e){return e.map((function(e){var t=e.thingLabel;return r.createElement("meta",{name:"article:tag",content:t,key:t})}))},g=function(e){var t=e.title,n=e.socialHeadline,g=e.lang,h=e.description,v=e.openGraphType,b=e.aboutTags,y=e.mentionsTags,E=e.image,O=e.imageAltText,w=e.imageWidth,P=e.imageHeight,j=e.children,x=e.hasAppleItunesAppBanner,T=(0,r.useContext)(c.f),k=T.isAmp,L=T.canonicalLink,A=T.ampLink,D=T.canonicalUkLink,C=T.ampUkLink,Z=T.canonicalNonUkLink,N=T.ampNonUkLink,S=(0,r.useContext)(o.o),_=S.service,I=S.brandName,M=S.defaultImage,R=S.defaultImageAltText,H=S.dir,U=S.locale,z=S.isoLang,B=S.themeColor,W=S.twitterCreator,V=S.twitterSite,q=S.iTunesAppId,F=function(e){return["https://static.files.bbci.co.uk","/ws/simorgh-assets/public/",e,"/images/icons/icon-192x192.png"].join("")}(_),J=m.includes(_),$=[{href:k?N:Z,hrefLang:"x-default"},{href:k?N:Z,hrefLang:"en"},{href:k?C:D,hrefLang:"en-gb"}],G=[{href:L,hrefLang:z}],K=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({dir:H,lang:g},k&&{amp:""}),X="".concat(t," - ").concat(I),Y="".concat(n||t," - ").concat(I),Q=E||M,ee=O||R;return r.createElement(i.q,{htmlAttributes:K},r.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"robots",content:"noodp,noydir"}),r.createElement("meta",{name:"theme-color",content:B}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, minimum-scale=1"}),r.createElement("title",null,X),r.createElement("link",{rel:"canonical",href:Z}),J&&$.map(s),z&&!J&&G.map(s),function(e,t){return t?null:r.createElement("link",{rel:"amphtml",href:e})}(A,k),function(e){var t=e.iTunesAppId,n=e.canonicalLink;if([t,n,!e.isAmp,e.hasAppleItunesAppBanner].every(Boolean)){var a="app-id=".concat(t,", app-argument=").concat(n,"?utm_medium=banner&utm_content=apple-itunes-app");return r.createElement("meta",{name:"apple-itunes-app",content:a})}return null}({iTunesAppId:q,canonicalLink:L,isAmp:k,hasAppleItunesAppBanner:x}),r.createElement("meta",{name:"apple-mobile-web-app-title",content:I}),r.createElement("meta",{name:"application-name",content:I}),r.createElement("meta",{name:"description",content:h}),r.createElement("meta",{property:"fb:admins",content:0x5af40814266e}),r.createElement("meta",{property:"fb:app_id",content:0x5b769a1b620a2}),r.createElement("meta",{property:"fb:pages",content:"285361880228,192168680794107,9432520138,347501767628,264572343581678,303522857815,166580710064489,592266607456680,260669183761,160817274042538,236659822607,237647452933504,10150118096995434,113097918700687,143048895744759,81395234664,207150596007088,167959249906191,64040652712,190992343324,103678496456574,367167334474,160894643929209,186742265162,1526071940947174,230299653821,124158667615790,126548377386804,298318986864908,1068750829805728,228458913833525,163571453661989,660673490805047,948946275170651,485274381864409,1633841096923106,654070648098812"}),r.createElement("meta",{name:"mobile-web-app-capable",content:"yes"}),r.createElement("meta",{name:"msapplication-TileColor",content:B}),r.createElement("meta",{name:"msapplication-TileImage",content:l(_,"144x144")}),r.createElement("meta",{property:"og:description",content:h}),r.createElement("meta",{property:"og:image",content:Q}),r.createElement("meta",{property:"og:image:alt",content:ee}),w&&r.createElement("meta",{property:"og:image:width",content:w}),P&&r.createElement("meta",{property:"og:image:height",content:P}),r.createElement("meta",{property:"og:locale",content:U}),r.createElement("meta",{property:"og:site_name",content:I}),r.createElement("meta",{property:"og:title",content:Y}),r.createElement("meta",{property:"og:type",content:v}),r.createElement("meta",{property:"og:url",content:Z}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:W}),r.createElement("meta",{name:"twitter:description",content:h}),r.createElement("meta",{name:"twitter:image:alt",content:ee}),r.createElement("meta",{name:"twitter:image:src",content:Q}),r.createElement("meta",{name:"twitter:site",content:V}),r.createElement("meta",{name:"twitter:title",content:Y}),Boolean(b&&b.length)&&d(b),Boolean(y&&y.length)&&d(y),r.createElement("link",{rel:"apple-touch-icon",href:F}),u(_,f),r.createElement("link",{rel:"apple-touch-startup-image",href:l(_,"512x512")}),r.createElement("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"}),j)};g.defaultProps={socialHeadline:null,aboutTags:[],mentionsTags:[],image:null,imageAltText:null,imageWidth:null,imageHeight:null,children:null,hasAppleItunesAppBanner:!1};var h=g},74148:function(e,t,n){var a=n(15861),r=n(87757),i=n.n(r),o=(n(41539),n(88674),n(86949)),c=n(1466),l=n.n(c),u=(n(94301),l()("/index.js")),s=function(){var e=(0,a.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,o.Z)()){e.next=9;break}return e.prev=1,e.next=4,fetch(t,{credentials:"include"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),u.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();t.Z=s},42702:function(e,t,n){n(92222);t.Z=function(e,t){return"".concat("https://ichef.bbci.co.uk","/news/1024/branded_").concat(t,"/").concat(e)}},95357:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(4603),r=n.n(a),i=n(65727),o=n(72342),c=n(87462),l=n(45987),u=n(67294),s=n(67219),p=["error","status"],m=function(e){var t=function(t){var n=t.error,a=t.status,r=(0,l.Z)(t,p);return n?u.createElement(s.Z,{errorCode:a||500}):u.createElement(e,(0,c.Z)({},r,{status:a}))};return t.defaultProps={error:null},t},f=n(85017),d=(n(51670),n(21579)),g=(n(74916),n(23123),n(54782)),h=n.n(g),v=function(e){var t=h()(null,["metadata","passport","home"],e);return e&&t?t.split("/").pop().toLowerCase():null},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=!e;if(a)return!0;var r=function(t){return(t||"").toLowerCase()===e.toLowerCase()};if(r(t))return!0;var i=n||[];return i.some(r)},y=function(e,t){var n,a=e.pageData,r=e.status,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=r,c=a&&200===r;if(c){var l=v(a);o=(n=b(l,t,i))?r:404}return{hasData200StatusAndCorrectService:c&&n,status:o,pageData:a}},E=["pageData","status"],O=function(e){var t=function(t){var n=t.pageData,a=t.status,r=(0,l.Z)(t,E),i=r.service,o=((0,u.useContext)(d.o)||{}).passportHomes,p=y({pageData:n,status:a},i,o),m=p.hasData200StatusAndCorrectService,f=p.status;return m?u.createElement(e,(0,c.Z)({pageData:n},r)):u.createElement(s.Z,{errorCode:f})};return t.defaultProps={pageData:null,service:"default"},t},w=n(5977),P=n(4942),j=(n(26699),n(32023),n(47941),n(82526),n(57327),n(38880),n(54747),n(49337),n(51068)),x=n(49024),T=n(42268);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,P.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.path,n=e.params,a=e.service,r=e.variant;if(!t)return null;var i=(0,T.Aq)(a),o=(0,x.bB)({service:a,variant:(0,x.JQ)(r)}),c=(0,j.MY)(t),l=i&&i!==o&&x.oW.includes(i),u=l?i:o;return l||!r&&"default"!==o?c(L(L({},n),{},{variant:"/".concat(u)}),{encode:function(e){return e}}):null},D=function(e){var t=function(t){var n=t.service,a=t.variant,r=h()({},["match"],t),i=r.path,o=r.params,c=A({path:i,params:o,service:n,variant:a});return c?u.createElement(w.l_,{to:c}):u.createElement(e,t)};return t.defaultProps={variant:null},t},C=n(87430),Z=function(e,t){var n=e.location,a=n.hash,r=n.pathname,i=t.location,o=i.hash;return r===i.pathname&&a!==o},N=n.n(C)()(["location","hash"]),S=r()((function(e){return(0,u.memo)(e,Z)}),(function(e){return function(t){return function(e){(0,u.useEffect)((function(){if(e){var t=document.querySelector(e);null==t||t.scrollIntoView(),null==t||t.focus()}}),[e])}(N(t)),u.createElement(e,t)}})),_={addVariantHandling:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=e.addVariantHandling;return r()(O,m,f.Z,o.Z,i.Z,(function(e){return t?D(e):e}),S)}},18623:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(67294),r=n(88937),i=n(67438),o=n(32188),c=n(11807),l=n(24021),u="\n  padding-bottom: ".concat(i.E8,";\n  &:last-child {\n    padding-bottom: ").concat(i.Ru,";\n  }\n"),s=(0,r.Z)("time",{target:"e4zesg50"})((function(e){var t=e.script,n=e.typographyFunc;return t&&n&&n(t)})," color:",(function(e){return e.darkMode?c.o4:c.KD}),";display:block;",(function(e){var t=e.service;return(0,l.sA)(t)})," ",(function(e){return e.padding&&u}),";"),p=function(e){var t=e.children,n=e.datetime,r=e.typographyFunc,i=e.script,o=e.padding,c=e.service,l=e.darkMode,u=e.className;return a.createElement(s,{dateTime:n,typographyFunc:r,script:i,padding:o,service:c,darkMode:l,className:u},t)};p.defaultProps={typographyFunc:o.HA,padding:!0,darkMode:!1,className:null};var m=p,f=n(40890),d=function(e){var t,n=e.timestamp,r=e.dateTimeFormat,i=e.format,o=e.isRelative,c=e.padding,l=e.prefix,u=e.suffix,s=e.timezone,p=e.script,d=e.locale,g=e.service,h=e.altCalendar,v=e.className;if(!(0,f._J)(new Date(n)))return null;var b=(0,f.w5)({timestamp:n,format:i,timezone:s,locale:d,isRelative:o});h&&!o&&(t="".concat(h.formatDate((0,f.dj)({locale:d,timestamp:n}))," -"));var y=[l,t,b,u].filter((function(e){return e})).join(" ");return a.createElement(m,{datetime:(0,f.w5)({format:r,locale:"en-gb",timestamp:n,timezone:s}),padding:c,script:p,service:g,className:v},y)};d.defaultProps={isRelative:!1,format:null,timezone:"Europe/London",padding:!0,prefix:null,suffix:null,locale:"en-gb",altCalendar:null,className:null};var g=d},40890:function(e,t,n){n.d(t,{LU:function(){return i},_J:function(){return o},dj:function(){return c},w5:function(){return l}});var a=n(80008),r=n.n(a);r().relativeTimeRounding(Math.floor),r().relativeTimeThreshold("s",0),r().relativeTimeThreshold("m",60),r().relativeTimeThreshold("h",24),r().relativeTimeThreshold("d",30),r().relativeTimeThreshold("M",12);var i=function(e){var t=e.duration,n=e.format,a=e.locale,i=void 0===a?"en-gb":a,o=t.includes("H")?"h:mm:ss":"mm:ss",c=r().duration(t).asMilliseconds();return r().utc(c).locale(i).format(n||o)},o=function(e){return!isNaN(e)&&null!==e&&!isNaN(new Date(e))},c=function(e){var t=e.locale,n=e.timestamp;return r()(n).locale(t)},l=function(e){var t=e.format,n=e.isRelative,a=e.locale,i=e.timestamp,o=e.timezone;if(i){var c=r()(i).locale(a).tz(o);if(n)return c.fromNow();return t?c.format(t):c.format("LL, LT z")}}}}]);
//# sourceMappingURL=shared-FWdLnUxZzQhfvg8ZRBTcRcHoWFM=.d92ada03.js.map