"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[7441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,b=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Conversation Started",sidebar_position:4},i="Conversation Started",s={unversionedId:"bots-api/events/conversation-started",id:"bots-api/events/conversation-started",title:"Conversation Started",description:"Description",source:"@site/docs/bots-api/events/conversation-started.md",sourceDirName:"bots-api/events",slug:"/bots-api/events/conversation-started",permalink:"/hub/docs/bots-api/events/conversation-started",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/events/conversation-started.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Conversation Started",sidebar_position:4},sidebar:"botsAPISidebar",previous:{title:"User Unsubscribed",permalink:"/hub/docs/bots-api/events/user-unsubscribed"},next:{title:"User Message Received",permalink:"/hub/docs/bots-api/events/user-message-received"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Event Payload",id:"event-payload",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conversation-started"},"Conversation Started"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The conversation started event is triggered when a user starts a conversation with your bot. This can occur in the following ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'By clicking the "Message" button on the account\'s information screen.'),(0,a.kt)("li",{parentName:"ol"},"By using a deep link.")),(0,a.kt)("p",null,"This event is ",(0,a.kt)("strong",{parentName:"p"},"not")," considered a ",(0,a.kt)("a",{parentName:"p",href:"./user-subscribed"},"subscribe event")," and does not allow your bot to send",(0,a.kt)("br",null)," messages to the user unless a welcome message is sent. However, once a conversation",(0,a.kt)("br",null),"\nstarted event is received, your bot can respond with a JSON containing the same",(0,a.kt)("br",null),"\nparameters as a send message request. The receiver parameter is ",(0,a.kt)("strong",{parentName:"p"},"not")," required in this",(0,a.kt)("br",null),"\ncase."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"By default, the conversation started event will not contain the context parameter. To",(0,a.kt)("br",null),"\nadd this parameter and determine its value, you can use a deep link in the following",(0,a.kt)("br",null),"\nformat: ",(0,a.kt)("inlineCode",{parentName:"p"},"viber://pa?chatURI=<YOUR_BOT_URI>&context=<YOUR_CONTEXT>"),".")),(0,a.kt)("h2",{id:"event-payload"},"Event Payload"),(0,a.kt)("p",null,"The event payload is a JSON object with the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Example",title:"Example"},'{\n  "event": "conversation_started",\n  "timestamp": 1457764197627,\n  "type": "open",\n  "context": "context information",\n  "user": {\n    "id": "01234567890A=",\n    "name": "John McClane",\n    "avatar": "http://avatar.example.com",\n    "country": "UK",\n    "language": "en",\n    "api_version": 1\n  },\n  "message_token": 4912661846655238145,\n  "subscribed": false\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"event"),(0,a.kt)("td",{parentName:"tr",align:null},"The event name."),(0,a.kt)("td",{parentName:"tr",align:null},"Always ",(0,a.kt)("inlineCode",{parentName:"td"},"conversation_started"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"The time the event was triggered."),(0,a.kt)("td",{parentName:"tr",align:null},"Unix timestamp in milliseconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"The type of the conversation."),(0,a.kt)("td",{parentName:"tr",align:null},"Always ",(0,a.kt)("inlineCode",{parentName:"td"},"open")," - The user initiated a conversation with the bot for the first time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},"The context of the conversation."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user"),(0,a.kt)("td",{parentName:"tr",align:null},"The subscriber object."),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"../data-models/subscriber"},"Subscriber Object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"message_token"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique ID of the message."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subscribed"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether the user is subscribed to the bot."),(0,a.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);