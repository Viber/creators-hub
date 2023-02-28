"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[387],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(b,o(o({ref:e},c),{},{components:n})):a.createElement(b,o({ref:e},c))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8829:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Payment Button Clicked",sidebar_position:9,pagination_next:null},o="Payment Button Clicked",i={unversionedId:"bots-api/events/payment-button-clicked",id:"bots-api/events/payment-button-clicked",title:"Payment Button Clicked",description:"Description",source:"@site/docs/bots-api/events/payment-button-clicked.md",sourceDirName:"bots-api/events",slug:"/bots-api/events/payment-button-clicked",permalink:"/creators-hub/docs/bots-api/events/payment-button-clicked",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/events/payment-button-clicked.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:9,frontMatter:{sidebar_label:"Payment Button Clicked",sidebar_position:9,pagination_next:null},sidebar:"botsAPISidebar",previous:{title:"Message Failed",permalink:"/creators-hub/docs/bots-api/events/message-failed"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Event Payload",id:"event-payload",level:2}],c={toc:p},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payment-button-clicked"},"Payment Button Clicked"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The Payment Button Clicked event is triggered when a user taps on the payment",(0,r.kt)("br",null),'\nprovider\'s "Pay" button in the checkout page. This event provides information to the bot',(0,r.kt)("bt",null),"\nabout the user's intention to make a payment."),(0,r.kt)("h2",{id:"event-payload"},"Event Payload"),(0,r.kt)("p",null,"The event payload is a JSON object with the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example"',title:'"Example"'},'{\n  "event": "client_status",\n  "timestamp": 1457764197627,\n  "message_token": 4912661846655238145,\n  "chat_hostname": "sn-chat-04",\n  "user": {\n    "id": "jc9HsWTZ2Yf2NkRZ8KcNug==",\n    "name": "John McClane",\n    "avatar": "http://avatar_url",\n    "country": "UA",\n    "language": "ua",\n    "api_version": 1\n  },\n  "status": {\n    "type": "payment",\n    "code": 0,\n    "supported_psps": ["IPay.ua", "LiqPay", "Portmone"],\n    "tracking_data": "tracking data"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event"),(0,r.kt)("td",{parentName:"tr",align:null},"The event name."),(0,r.kt)("td",{parentName:"tr",align:null},"Always ",(0,r.kt)("inlineCode",{parentName:"td"},"client_status"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"The time the event was triggered."),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_token"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID of the message"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chat_hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostname of the bot server"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"The subscriber object."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"../data-models/subscriber"},"Subscriber Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"The payment status object."),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"../data-models/payment-status"},"Payment Status Object"))))))}d.isMDXComponent=!0}}]);