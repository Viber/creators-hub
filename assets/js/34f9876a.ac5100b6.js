"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[8781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Introduction",sidebar_position:1,pagination_prev:null},i="Introduction",s={unversionedId:"bots-api/events/intro",id:"bots-api/events/intro",title:"Introduction",description:'[//]: comment "an intro to events module of the bots api"',source:"@site/docs/bots-api/events/intro.md",sourceDirName:"bots-api/events",slug:"/bots-api/events/intro",permalink:"/hub/docs/bots-api/events/intro",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/events/intro.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,pagination_prev:null},sidebar:"botsAPISidebar",next:{title:"User Subscribed",permalink:"/hub/docs/bots-api/events/user-subscribed"}},l={},u=[{value:"The Platform Events",id:"the-platform-events",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The events section of the bots API is your one-stop resource for all the events supported",(0,a.kt)("br",null),"\nby the platform. In this section, you will find detailed information on each event, including",(0,a.kt)("br",null),"\nits data, trigger conditions, and additional information that can help you make the most of",(0,a.kt)("br",null),"\nthese events in your bot implementation."),(0,a.kt)("p",null,"Whether you are looking for information on user messages, conversation updates, or",(0,a.kt)("br",null),"\nother events, the events section provides a comprehensive overview of everything you",(0,a.kt)("br",null),"\nneed to know. Each event page includes a detailed description of the event and its data,",(0,a.kt)("br",null),"\nas well as information on when the event is triggered and any additional details that are",(0,a.kt)("br",null),"\nrelevant."),(0,a.kt)("p",null,"By utilizing the information provided in the events section of the bots API, you can ensure",(0,a.kt)("br",null),"\nthat your bot remains up-to-date with the latest changes in the conversation and provides",(0,a.kt)("br",null),"\nusers with a seamless, real-time experience."),(0,a.kt)("h2",{id:"the-platform-events"},"The Platform Events"),(0,a.kt)("p",null,"The platform sends the following events to the bot:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-subscribed"},"User Subscribed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-unsubscribed"},"User Unsubscribed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./conversation-started"},"Conversation Started")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./user-message-received"},"User Message Received")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./message-delivered"},"Message Delivered")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./message-seen"},"Message Seen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./message-failed"},"Message Failed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./payment-button-clicked"},"Payment Button Clicked"))))}d.isMDXComponent=!0}}]);