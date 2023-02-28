"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[7594],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,m=d["".concat(o,".").concat(b)]||d[b]||c[b]||s;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_label:"Subscribers Status",sidebar_position:3,slug:"get-subscribers-status"},l="Subscribers Status",i={unversionedId:"bots-api/resources/subscribers/subscribers-status",id:"bots-api/resources/subscribers/subscribers-status",title:"Subscribers Status",description:"POST https://chatapi.viber.com/pa/get_online",source:"@site/docs/bots-api/resources/subscribers/subscribers-status.md",sourceDirName:"bots-api/resources/subscribers",slug:"/bots-api/resources/subscribers/get-subscribers-status",permalink:"/hub/docs/bots-api/resources/subscribers/get-subscribers-status",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/subscribers/subscribers-status.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Subscribers Status",sidebar_position:3,slug:"get-subscribers-status"},sidebar:"botsAPISidebar",previous:{title:"Subscriber Details",permalink:"/hub/docs/bots-api/resources/subscribers/get-subscriber-details"},next:{title:"Introduction",permalink:"/hub/docs/bots-api/resources/app/intro"}},o={},u=[{value:"Request",id:"request",level:3},{value:"Headers",id:"headers",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Body",id:"body",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subscribers-status"},"Subscribers Status"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"POST")," https://",(0,a.kt)("area",null),"chatapi.viber.com/pa/get_online")),(0,a.kt)("p",null,"This endpoint allows you to retrieve the online status of your subscribers.",(0,a.kt)("br",null),"\nYou can retrieve the online status of up to 100 subscribers in a single request."),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("h4",{id:"headers"},"Headers"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," application/json",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Authorization:")," X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ids"),(0,a.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of subscribers ids."),(0,a.kt)("td",{parentName:"tr",align:null},"Max 100 ids")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},'curl -X POST https://chatapi.viber.com/pa/get_online -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN" -d \'{"ids":["jc9HsWTZ2Yf2NkRZ8KcNug==","fd4HsWT33Yf1BkRZ8KcBsk=="]}\'\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"attributes"},"Attributes"),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The status of the request."),(0,a.kt)("td",{parentName:"tr",align:null},"0 for success. In case of error, an error code will be returned. See ",(0,a.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status_message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The status message of the request."),(0,a.kt)("td",{parentName:"tr",align:null},"ok for sucess. In case of error, one of the following errors will be returned:  ",(0,a.kt)("inlineCode",{parentName:"td"},"invalidUrl"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"invalidAuthToken"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"badData"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"missingData")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"failure"),". See ",(0,a.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"users"),(0,a.kt)("td",{parentName:"tr",align:null},"array of objects"),(0,a.kt)("td",{parentName:"tr",align:null},"The list of subscribers with their online status."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"users.id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The id of the subscriber."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user.online_status"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"The online status of the subscriber."),(0,a.kt)("td",{parentName:"tr",align:null},"0 - online, 1 - offline, 2 - undisclosed, the user set Viber to hide the status, 3 - try later, in case of internal error, 4 - unavailable, the user is not a Viber user or is not a subscriber of the bot or is unregistered from the app")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user.online_status_message"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"The online status message of the subscriber. on of online, offline, undisclosed, tryLater and unavailable"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"headers-1"},"Headers"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," application/json"),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "status":0,\n   "status_message":"ok",\n   "users":[\n      {\n         "id":"jc9HsWTZ2Yf2NkRZ8KcNug==",\n         "online_status":0,\n         "online_status_message":"online"\n      },\n      {\n         "id":"fd4HsWT33Yf1BkRZ8KcBsk==",\n         "online_status":1,\n         "online_status_message":"offline"\n      }\n   ]\n}\n')))}c.isMDXComponent=!0}}]);