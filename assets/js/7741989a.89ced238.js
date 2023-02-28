"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[5820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,v=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Message Delivered",sidebar_position:6},l="Message Delivered",s={unversionedId:"bots-api/events/message-delivered",id:"bots-api/events/message-delivered",title:"Message Delivered",description:"Description",source:"@site/docs/bots-api/events/message-delivered.md",sourceDirName:"bots-api/events",slug:"/bots-api/events/message-delivered",permalink:"/hub/docs/bots-api/events/message-delivered",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/events/message-delivered.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Message Delivered",sidebar_position:6},sidebar:"botsAPISidebar",previous:{title:"User Message Received",permalink:"/hub/docs/bots-api/events/user-message-received"},next:{title:"Message Seen",permalink:"/hub/docs/bots-api/events/message-seen"}},o={},d=[{value:"Description",id:"description",level:2},{value:"Event Payload",id:"event-payload",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"message-delivered"},"Message Delivered"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Viber offers message status updates for each message sent, allowing your bot to be",(0,a.kt)("br",null),"\nnotified when a message has been delivered to the user's device. If the user is using Viber",(0,a.kt)("br",null),"\non multiple devices, each device will return a delivered event, meaning that several",(0,a.kt)("br",null),"\ndelivered events can be received for a single message."),(0,a.kt)("p",null,"The message delivery status is updated in real-time, and if Viber is unable to deliver the",(0,a.kt)("br",null),"\nmessage to the user's device, it will try to deliver it for up to 14 days. If the message has",(0,a.kt)("br",null),"\nnot been delivered within 14 days, it will not be delivered, and no delivered event will be",(0,a.kt)("br",null),"\nreceived for it."),(0,a.kt)("h2",{id:"event-payload"},"Event Payload"),(0,a.kt)("p",null,"The event payload is a JSON object with the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Example",title:"Example"},'{\n  "event": "delivered",\n  "timestamp": 1457764197627,\n  "message_token": 4912661846655238145,\n  "user_id": "jc9HsWTZ2Yf2NkRZ8KcNug=="\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},"The event name."),(0,a.kt)("td",{parentName:"tr",align:null},"Always ",(0,a.kt)("inlineCode",{parentName:"td"},"delivered"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"The time the event was triggered."),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp in milliseconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message_token"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique ID of the message."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user_id"),(0,a.kt)("td",{parentName:"tr",align:null},"The unique ID of the subscribed user."),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);