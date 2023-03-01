"use strict";(self.webpackChunkcreators_hub=self.webpackChunkcreators_hub||[]).push([[7339],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=m(a),g=r,k=d["".concat(o,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(k,s(s({ref:e},p),{},{components:a})):n.createElement(k,s({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:r,s[1]=i;for(var m=2;m<l;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},3282:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Broadcast Messaging",sidebar_position:4},s="Broadcast Messaging",i={unversionedId:"bots-api/resources/messaging/brodcast-message",id:"bots-api/resources/messaging/brodcast-message",title:"Broadcast Messaging",description:"POST https://chatapi.viber.com/pa/broadcast_message",source:"@site/docs/bots-api/resources/messaging/brodcast-message.md",sourceDirName:"bots-api/resources/messaging",slug:"/bots-api/resources/messaging/brodcast-message",permalink:"/docs/bots-api/resources/messaging/brodcast-message",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/messaging/brodcast-message.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Broadcast Messaging",sidebar_position:4},sidebar:"botsAPISidebar",previous:{title:"Send a Message",permalink:"/docs/bots-api/resources/messaging/send-message"},next:{title:"Keyboards",permalink:"/docs/bots-api/resources/messaging/keyboards"}},o={},m=[{value:"Request",id:"request",level:3},{value:"Headers",id:"headers",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Billing Statuses",id:"billing-statuses",level:4}],p={toc:m},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"broadcast-messaging"},"Broadcast Messaging"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"POST")," https://",(0,r.kt)("area",null),"chatapi.viber.com/pa/broadcast_message")),(0,r.kt)("p",null,"This endpoint allows you to send a broadcast message to all your subscribers.\nYou can use any message type that is supported by the API, including text, picture, video, file, location, contact, sticker, URL and rich media messages.\nTo learn more about the message types, see ",(0,r.kt)("a",{parentName:"p",href:"../../data-models/message"},"Message Data Model"),"."),(0,r.kt)("admonition",{title:"Pay attention",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following limitations apply to broadcast messages:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You can send a brodcast message to a maximum of 300 subscriber per request."),(0,r.kt)("li",{parentName:"ul"},"You are limited to 500 requests per 10 seconds."),(0,r.kt)("li",{parentName:"ul"},"The maximum size of the message is 30kb."))),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"headers"},"Headers"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type:")," application/json",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Authorization:")," X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the message."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," one of the available message types. See full list ",(0,r.kt)("a",{parentName:"td",href:"/docs/bots-api/data-models/message"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender.name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," Max 28 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender.avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The avatar of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tracking_data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the bot to track messages and user\u2019s replies. The tracking_data value sent with the message will be returned with the user's reply."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional")," Max 4000 characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_api_version"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum API version that the message is supported in."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional")," Default value is 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"broadcast_list"),(0,r.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of subscribers ids."),(0,r.kt)("td",{parentName:"tr",align:null},"Max 300 ids")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Additional fileds based on the message type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},'curl -X POST https://chatapi.viber.com/pa/broadcast_message -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN" -d \'{"type":"text","text":"Hello World","sender":{"name":"Viber Bot","avatar":"http://avatar.example.com"},"broadcast_list":["jc9HsWTZ2Yf2NkRZ8KcNug==","fd4HsWT33Yf1BkRZ8KcBsk=="]}\'\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"attributes"},"Attributes"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The status of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"0 for success. In case of failure - appropriate failure status number. See ",(0,r.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status_message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The status message of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"Success: ok. Failure: ",(0,r.kt)("inlineCode",{parentName:"td"},"invalidUrl"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"invalidAuthToken"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"badData"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"missingData")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"failure"),". See ",(0,r.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_token"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique id of the message"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chat_hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of ther server that host your bot"),(0,r.kt)("td",{parentName:"tr",align:null},"for internal use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billing_status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An indication of how this message is categorized for billing purposes, allowing you to know if it was charged or not, or whether it counts toward. Read more about bots billing ",(0,r.kt)("a",{parentName:"td",href:"https://help.viber.com/en/article/chatbot-commercial-model"},"here")),(0,r.kt)("td",{parentName:"tr",align:null},"An integer between 0 and 5. See the table in ",(0,r.kt)("a",{parentName:"td",href:"#billing-statuses"},"billing statuses")," section below for more information")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example"',title:'"Example"'},'{\n  "status": 0,\n  "status_message": "ok",\n  "message_token": 1234567890,\n  "chat_hostname": "chatapi.viber.com",\n  "billing_status": 0\n}\n')),(0,r.kt)("h4",{id:"billing-statuses"},"Billing Statuses"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"free"),(0,r.kt)("td",{parentName:"tr",align:null},"Default for all cases other than the ones listed below: chat extension, reply to open conversation, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"inSessionNonBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"1:1 message/keyboard sent in a session from a non-billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"inSessionForBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"1:1 message/keyboard sent in a session from a billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"outOfSessionFreeMessageNonBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"Free out of session 1:1 message/keyboard sent by a non-billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"outOfSessionFreeMessageForBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"Free out of session 1:1 message/keyboard sent by a billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"outOfSessionBilledMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"Charged out of session 1:1 message/keyboard sent by a billable bot")))))}u.isMDXComponent=!0}}]);