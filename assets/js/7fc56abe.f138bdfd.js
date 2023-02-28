"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[6978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},28:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"User Subscribed",sidebar_position:2},o="User Subscribed",s={unversionedId:"bots-api/events/user-subscribed",id:"bots-api/events/user-subscribed",title:"User Subscribed",description:"Description",source:"@site/docs/bots-api/events/user-subscribed.md",sourceDirName:"bots-api/events",slug:"/bots-api/events/user-subscribed",permalink:"/creators-hub/docs/bots-api/events/user-subscribed",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/events/user-subscribed.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"User Subscribed",sidebar_position:2},sidebar:"botsAPISidebar",previous:{title:"Introduction",permalink:"/creators-hub/docs/bots-api/events/intro"},next:{title:"User Unsubscribed",permalink:"/creators-hub/docs/bots-api/events/user-unsubscribed"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Event Payload",id:"event-payload",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-subscribed"},"User Subscribed"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The user subscribed event is triggered when a user subscribes to your bot. This can occur",(0,a.kt)("br",null),"\nin the following ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When the user first opens a conversation with the bot."),(0,a.kt)("li",{parentName:"ol"},"When the user taps on the vertical elapsis button (",(0,a.kt)("strong",{parentName:"li"},"\u22ee"),') in the top right, followed by "Chat Info".'),(0,a.kt)("li",{parentName:"ol"},'When the user taps on "Receive messages" within the "Chat Info" section.')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Upon receipt of a subscribed event, any context or tracking_data related to the conversation will be deleted. This means that if a user had a previous conversation with your bot and then unsubscribed and subscribed again, a new conversation will start without any information from the previous one.")),(0,a.kt)("h2",{id:"event-payload"},"Event Payload"),(0,a.kt)("p",null,"The event payload is a JSON object with the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example"',title:'"Example"'},'{\n  "event": "subscribed",\n  "timestamp": 1457764197627,\n  "chat_hostname": "SN-149_",\n  "user": {\n    "id": "jc9HsWTZ2Yf2NkRZ8KcNug==",\n    "name": "John McClane",\n    "avatar": "http://avatar.example.com",\n    "country": "UK",\n    "language": "en",\n    "api_version": 1\n  },\n  "message_token": 4912661846655238145\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},"The event name."),(0,a.kt)("td",{parentName:"tr",align:null},"Always ",(0,a.kt)("inlineCode",{parentName:"td"},"subscribed"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"The time the event was triggered."),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp in milliseconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"chat_hostname"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the server that host the bot"),(0,a.kt)("td",{parentName:"tr",align:null},"For internal use only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user"),(0,a.kt)("td",{parentName:"tr",align:null},"The subscriber object."),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"../data-models/subscriber"},"Subscriber Object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message_token"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique ID of the message"),(0,a.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);