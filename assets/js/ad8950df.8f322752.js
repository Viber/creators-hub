"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[9810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(r),c=n,b=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(b,s(s({ref:t},p),{},{components:r})):a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_label:"Subscriber Details",sidebar_position:2,slug:"get-subscriber-details"},s="Subscriber Details",i={unversionedId:"bots-api/resources/subscribers/subscriber-details",id:"bots-api/resources/subscribers/subscriber-details",title:"Subscriber Details",description:"POST https://chatapi.viber.com/pa/get_user_details",source:"@site/docs/bots-api/resources/subscribers/subscriber-details.md",sourceDirName:"bots-api/resources/subscribers",slug:"/bots-api/resources/subscribers/get-subscriber-details",permalink:"/hub/docs/bots-api/resources/subscribers/get-subscriber-details",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/subscribers/subscriber-details.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Subscriber Details",sidebar_position:2,slug:"get-subscriber-details"},sidebar:"botsAPISidebar",previous:{title:"Introduction",permalink:"/hub/docs/bots-api/resources/subscribers/intro"},next:{title:"Subscribers Status",permalink:"/hub/docs/bots-api/resources/subscribers/get-subscribers-status"}},u={},o=[{value:"Request",id:"request",level:3},{value:"Headers",id:"headers",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Body",id:"body",level:4}],p={toc:o},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"subscriber-details"},"Subscriber Details"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"POST")," https://",(0,n.kt)("area",null),"chatapi.viber.com/pa/get_user_details")),(0,n.kt)("p",null,"This endpoint allows you to retrieve the details of a specific subscriber by supplying a user ID.",(0,n.kt)("br",null),"\nYou can retrieve the user ID from various events related to the user, such as the ",(0,n.kt)("a",{parentName:"p",href:"/hub/docs/bots-api/events/user-subscribed"},"user subscribed")," or the ",(0,n.kt)("a",{parentName:"p",href:"/hub/docs/bots-api/events/user-message-received"},"user message recieved")," API.\nThis request can be used twice every 12 hours for each user."),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("h4",{id:"headers"},"Headers"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Content-Type:")," application/json",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Authorization:")," X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},'curl -X POST https://chatapi.viber.com/pa/get_user_details -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN" -d \'{"id":"jc9HsWTZ2Yf2NkRZ8KcNug=="}\'\n')),(0,n.kt)("h3",{id:"response"},"Response"),(0,n.kt)("h4",{id:"attributes"},"Attributes"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The status of the request."),(0,n.kt)("td",{parentName:"tr",align:null},"0 for success. In case of error, an error code will be returned. See ",(0,n.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"status_message"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The status message of the request."),(0,n.kt)("td",{parentName:"tr",align:null},"ok for sucess. In case of error, one of the following errors will be returned:  ",(0,n.kt)("inlineCode",{parentName:"td"},"invalidUrl"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"invalidAuthToken"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"badData"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"missingData")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"failure"),". See ",(0,n.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"message_token"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The message token of the request."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"The subscriber details."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.id"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.avatar"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The avatar of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.country"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The country of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null},"2 letters country code (",(0,n.kt)("a",{parentName:"td",href:"https://www.iban.com/country-codes"},"ISO ALPHA-2"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.language"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The language of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null},"2 letters language code (",(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO 639-1"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.primary_device_os"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The primary device OS of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.api_version"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The API version of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null},"Currently only 1. Additional versions will be added in the future")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.viber_version"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The Viber version of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.mcc"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The mobile country code of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.mnc"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"The mobile network code of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user.device_type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The device type of the subscriber."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"headers-1"},"Headers"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Content-Type:")," application/json"),(0,n.kt)("h4",{id:"body"},"Body"),(0,n.kt)("hr",null),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example"',title:'"Example"'},'{\n   "status":0,\n   "status_message":"ok",\n   "message_token":4912661846655238145,\n   "user":{\n      "id":"01234567890A=",\n      "name":"John McClane",\n      "avatar":"http://avatar.example.com",\n      "country":"UK",\n      "language":"en",\n      "primary_device_os":"android 7.1",\n      "api_version":1,\n      "viber_version":"6.5.0",\n      "mcc":1,\n      "mnc":1,\n      "device_type":"iPhone9,4"\n   }\n}\n')))}m.isMDXComponent=!0}}]);