"use strict";(self.webpackChunkcreators_hub=self.webpackChunkcreators_hub||[]).push([[6800],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8327:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Retrieve Your Application Info",sidebar_position:2,slug:"get-info"},o="Retrieve Your Application Info",i={unversionedId:"bots-api/resources/app/get-app-info",id:"bots-api/resources/app/get-app-info",title:"Retrieve Your Application Info",description:"GET https://chatapi.viber.com/pa/get_account_info",source:"@site/docs/bots-api/resources/app/get-app-info.md",sourceDirName:"bots-api/resources/app",slug:"/bots-api/resources/app/get-info",permalink:"/docs/bots-api/resources/app/get-info",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/app/get-app-info.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Retrieve Your Application Info",sidebar_position:2,slug:"get-info"},sidebar:"botsAPISidebar",previous:{title:"Introduction",permalink:"/docs/bots-api/resources/app/intro"},next:{title:"Introduction",permalink:"/docs/bots-api/resources/pay/intro"}},p={},s=[{value:"Introduction",id:"introduction",level:3},{value:"Request",id:"request",level:3},{value:"Headers",id:"headers",level:4},{value:"Response",id:"response",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Headers",id:"headers-1",level:4},{value:"Body",id:"body",level:4}],u={toc:s},d="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"retrieve-your-application-info"},"Retrieve Your Application Info"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"GET")," https://",(0,r.kt)("area",null),"chatapi.viber.com/pa/get_account_info")),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This endpoint allows you to retrieve your application info."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("h4",{id:"headers"},"Headers"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type:")," application/json",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Authorization:")," X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},'curl -X GET https://chatapi.viber.com/pa/get_account_info -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN"\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"attributes"},"Attributes"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The status of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"0 for success. In case of error, an error code will be returned. See ",(0,r.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status_message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The status message of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"ok for sucess. In case of error, one of the following errors will be returned:  ",(0,r.kt)("inlineCode",{parentName:"td"},"invalidUrl"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"invalidAuthToken"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"badData"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"missingData")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"failure"),". See ",(0,r.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The unique id of the bot."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},"Max 75 characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The uri of the bot."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The icon of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},"jpeg, max size of 521KB. Recommended dimensions 720x720")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"background"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The background of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},"jpeg, max size of 512KB. Max dimensions 1920x1920")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"category"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The category of the bot."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subcategory"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The subcategory of the bot."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"location"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The location of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the users to find the bot close to their location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Country"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The country of the bot owner."),(0,r.kt)("td",{parentName:"tr",align:null},"2 letters country code - ",(0,r.kt)("a",{parentName:"td",href:"https://www.iban.com/country-codes"},"ISO Aplha-2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"webhook"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The webhook of the bot."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event_types"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The evets that the bot is registred to."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscribers_count"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of subscribers of the bot."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"members"),(0,r.kt)("td",{parentName:"tr",align:null},"array of objects"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of people who have access for managing the bot. each member object has an ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"avatar")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},"deprecated")))),(0,r.kt)("h4",{id:"headers-1"},"Headers"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type:")," application/json"),(0,r.kt)("h4",{id:"body"},"Body"),(0,r.kt)("hr",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "status":0,\n   "status_message":"ok",\n   "id":"pa:75346594275468546724",\n   "name":"account name",\n   "uri":"accountUri",\n   "icon":"http://example.com",\n   "background":"http://example.com",\n   "category":"category",\n   "subcategory":"sub category",\n   "location":{\n      "lon":0.1,\n      "lat":0.2\n   },\n   "country":"UK",\n   "webhook":"https://my.site.com",\n   "event_types":[\n      "delivered",\n      "seen"\n   ],\n   "subscribers_count":35,\n   "members":[\n      {\n         "id":"01234567890A=",\n         "name":"my name",\n         "avatar":"http://example.com",\n         "role":"admin"\n      }\n   ]\n}\n')))}m.isMDXComponent=!0}}]);