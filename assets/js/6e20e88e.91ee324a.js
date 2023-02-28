"use strict";(self.webpackChunkcreators_hub=self.webpackChunkcreators_hub||[]).push([[942],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var s=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=s.createContext({}),b=function(e){var r=s.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=b(e.components);return s.createElement(u.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=b(t),d=n,f=l["".concat(u,".").concat(d)]||l[d]||p[d]||i;return t?s.createElement(f,o(o({ref:r},c),{},{components:t})):s.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[l]="string"==typeof e?e:n,o[1]=a;for(var b=2;b<i;b++)o[b]=t[b];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9420:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>b});var s=t(7462),n=(t(7294),t(3905));const i={sidebar_label:"Introduction",sidebar_position:1},o="Viber Bot Subscribers API",a={unversionedId:"bots-api/resources/subscribers/intro",id:"bots-api/resources/subscribers/intro",title:"Viber Bot Subscribers API",description:"Welcome to the subscribers section of the Viber Bot API documentation! As a bot",source:"@site/docs/bots-api/resources/subscribers/intro.md",sourceDirName:"bots-api/resources/subscribers",slug:"/bots-api/resources/subscribers/intro",permalink:"/hub/docs/bots-api/resources/subscribers/intro",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/subscribers/intro.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1},sidebar:"botsAPISidebar",previous:{title:"Keyboards",permalink:"/hub/docs/bots-api/resources/messaging/keyboards"},next:{title:"Subscriber Details",permalink:"/hub/docs/bots-api/resources/subscribers/get-subscriber-details"}},u={},b=[{value:"Retrieving Subscribers&#39; Details",id:"retrieving-subscribers-details",level:2},{value:"Checking Subscribers&#39; Online Status",id:"checking-subscribers-online-status",level:2}],c={toc:b},l="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(l,(0,s.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"viber-bot-subscribers-api"},"Viber Bot Subscribers API"),(0,n.kt)("p",null,"Welcome to the subscribers section of the Viber Bot API documentation! As a bot",(0,n.kt)("br",null),"\ndeveloper, it is essential to understand your user base and be able to interact with them",(0,n.kt)("br",null),"\neffectively. The Viber Bot API provides several features that allow you to access your",(0,n.kt)("br",null),"\nsubscribers' information and online status."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"retrieving-subscribers-details"},"Retrieving Subscribers' Details"),(0,n.kt)("p",null,"One of the critical features of the Viber Bot API is the ability to retrieve subscribers'",(0,n.kt)("br",null),"\ndetails. This feature enables you to get information about your subscribers, such as their",(0,n.kt)("br",null),"\nname, phone number, and profile picture. You can use this information to personalize your",(0,n.kt)("br",null),"\nbot's messages, customize user experiences, or better understand your user base.",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/hub/docs/bots-api/resources/subscribers/get-subscriber-details"},"Learn more")),(0,n.kt)("h2",{id:"checking-subscribers-online-status"},"Checking Subscribers' Online Status"),(0,n.kt)("p",null,"Another important feature of the Viber Bot API is the ability to check subscribers' online",(0,n.kt)("br",null),"\nstatus. With this feature, you can see if a subscriber is currently online or offline. This",(0,n.kt)("br",null),"\ninformation is useful for sending messages or notifications at the appropriate time,",(0,n.kt)("br",null),"\nensuring that your messages reach subscribers when they are most likely to engage with",(0,n.kt)("br",null),"\nyour bot.",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/hub/docs/bots-api/resources/subscribers/get-subscribers-status"},"Learn more")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"In summary, the subscribers section of the Viber Bot API documentation provides you with",(0,n.kt)("br",null),"\nthe tools you need to access your subscribers' information and online status. These",(0,n.kt)("br",null),"\nfeatures enable you to personalize your bot's messages, customize user experiences, and",(0,n.kt)("br",null),"\nengage with your users more effectively. Whether you are a novice or experienced bot",(0,n.kt)("br",null),"\ndeveloper, the Viber Bot API offers a straightforward and efficient way to manage your",(0,n.kt)("br",null),"\nsubscriber base."))}p.isMDXComponent=!0}}]);