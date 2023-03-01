"use strict";(self.webpackChunkcreators_hub=self.webpackChunkcreators_hub||[]).push([[2789],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>y});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,y=d["".concat(i,".").concat(c)]||d[c]||m[c]||s;return a?n.createElement(y,o(o({ref:e},u),{},{components:a})):n.createElement(y,o({ref:e},u))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[d]="string"==typeof t?t:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2402:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_label:"Payment Status",sidebar_position:4},o="Payment Status Data Model",l={unversionedId:"bots-api/data-models/payment-status",id:"bots-api/data-models/payment-status",title:"Payment Status Data Model",description:"The payment status data model represents the status of a payment.",source:"@site/docs/bots-api/data-models/payment-status.md",sourceDirName:"bots-api/data-models",slug:"/bots-api/data-models/payment-status",permalink:"/docs/bots-api/data-models/payment-status",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/data-models/payment-status.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Payment Status",sidebar_position:4},sidebar:"botsAPISidebar",previous:{title:"Subscriber",permalink:"/docs/bots-api/data-models/subscriber"},next:{title:"Introduction",permalink:"/docs/bots-api/events/intro"}},i={},p=[{value:"Payment Status Object",id:"payment-status-object",level:2}],u={toc:p},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payment-status-data-model"},"Payment Status Data Model"),(0,r.kt)("p",null,"The payment status data model represents the status of a payment."),(0,r.kt)("h2",{id:"payment-status-object"},"Payment Status Object"),(0,r.kt)("p",null,"The payment status object is a JSON object that contains the following fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=Payment Status",title:"Payment",Status:!0},'{\n  "type": "payment",\n  "code": 0,\n  "supported_psps":["IPay.ua", "LiqPay", "Portmone"],\n  "tracking_data": "tracking data"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The status type. Always ",(0,r.kt)("inlineCode",{parentName:"td"},"payment"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The status code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supported_psps"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of supported PSPs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tracking_data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional")," Allow the bot to track messages and user\u2019s replies. The tracking_data value sent with the message will be returned with the user's reply. Max 4000 characters")))))}m.isMDXComponent=!0}}]);