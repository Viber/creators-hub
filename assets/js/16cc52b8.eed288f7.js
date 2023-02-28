"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[1080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_label:"Message Seen",sidebar_position:7},l="Message Seen",i={unversionedId:"bots-api/events/message-seen",id:"bots-api/events/message-seen",title:"Message Seen",description:"Description",source:"@site/docs/bots-api/events/message-seen.md",sourceDirName:"bots-api/events",slug:"/bots-api/events/message-seen",permalink:"/hub/docs/bots-api/events/message-seen",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/events/message-seen.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"Message Seen",sidebar_position:7},sidebar:"botsAPISidebar",previous:{title:"Message Delivered",permalink:"/hub/docs/bots-api/events/message-delivered"},next:{title:"Message Failed",permalink:"/hub/docs/bots-api/events/message-failed"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Event Payload",id:"event-payload",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"message-seen"},"Message Seen"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Viber offers message status updates for each message sent, allowing your bot to be",(0,a.kt)("br",null),"\nnotified when a message has been seen by the user. The seen event will be sent only once",(0,a.kt)("br",null),"\nwhen the user reads their unread messages, regardless of the number of messages sent",(0,a.kt)("br",null),"\nto them or the number of devices they are using."),(0,a.kt)("h2",{id:"event-payload"},"Event Payload"),(0,a.kt)("p",null,"The event payload is a JSON object with the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Example",title:"Example"},'{\n  "event": "seen",\n  "timestamp": 1457764197627,\n  "message_token": 4912661846655238145,\n  "user_id": "jc9HsWTZ2Yf2NkRZ8KcNug=="\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},"The event name."),(0,a.kt)("td",{parentName:"tr",align:null},"Always ",(0,a.kt)("inlineCode",{parentName:"td"},"seen"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"The time the event was triggered."),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp in milliseconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message_token"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique ID of the message."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user_id"),(0,a.kt)("td",{parentName:"tr",align:null},"The unique ID of the subscriber"),(0,a.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);