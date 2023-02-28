"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,b=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return n?r.createElement(b,a(a({ref:t},m),{},{components:n})):r.createElement(b,a({ref:t},m))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={sidebar_label:"The Welcome Message",sidebar_position:2},a="The Welcome Message",i={unversionedId:"bots-api/resources/messaging/welcome-message",id:"bots-api/resources/messaging/welcome-message",title:"The Welcome Message",description:"The Viber API only allows for sending messages to users after they have subscribed to the",source:"@site/docs/bots-api/resources/messaging/welcome-message.md",sourceDirName:"bots-api/resources/messaging",slug:"/bots-api/resources/messaging/welcome-message",permalink:"/hub/docs/bots-api/resources/messaging/welcome-message",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/messaging/welcome-message.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"The Welcome Message",sidebar_position:2},sidebar:"botsAPISidebar",previous:{title:"Introduction",permalink:"/hub/docs/bots-api/resources/messaging/intro"},next:{title:"Send a Message",permalink:"/hub/docs/bots-api/resources/messaging/send-message"}},l={},c=[{value:"Flow of the Welcome Message",id:"flow-of-the-welcome-message",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-welcome-message"},"The Welcome Message"),(0,o.kt)("p",null,"The Viber API only allows for sending messages to users after they have subscribed to the",(0,o.kt)("br",null),'\nbot. However, Viber permits the bot to send one "welcome message" to a user as soon as',(0,o.kt)("br",null),"\nthey initiate a conversation, prior to their subscription."),(0,o.kt)("p",null,"This welcome message will be sent in response to a conversation_started event, which",(0,o.kt)("br",null),"\nwill be received from Viber once the user opens a conversation with the bot. For further",(0,o.kt)("br",null),"\ninformation about this event and when it is triggered, refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../events/conversation-started"},"conversation started"),(0,o.kt)("br",null),"\nsection in the API events."),(0,o.kt)("h2",{id:"flow-of-the-welcome-message"},"Flow of the Welcome Message"),(0,o.kt)("p",null,"Sending a welcome message will follow the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A user initiates a one-on-one conversation with the account."),(0,o.kt)("li",{parentName:"ol"},"The Viber server sends a conversation_started callback to the bot's webhook."),(0,o.kt)("li",{parentName:"ol"},"The account receives the conversation_started callback and responds with an HTTP",(0,o.kt)("br",null),"\nresponse, which includes the welcome message in the response body.")),(0,o.kt)("p",null,"The welcome message will be in JSON format according to the structure of the",(0,o.kt)("br",null),"\nsend_message request, but without the receiver parameter. An example of a welcome",(0,o.kt)("br",null),"\nmessage would appear as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "text",\n  "text": "Hello World",\n  "sender": {\n    "name": "Viber Bot",\n    "avatar": "http://avatar.example.com"\n  }\n}\n')),(0,o.kt)("admonition",{title:"Pay attention",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The welcome message should be included in the body of the HTTP",(0,o.kt)("br",null),"\nresponse to the conversation_started callback, and not sent to the send_message",(0,o.kt)("br",null),"\nendpoint.")))}p.isMDXComponent=!0}}]);