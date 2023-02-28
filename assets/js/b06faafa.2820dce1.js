"use strict";(self.webpackChunkcreators_hub=self.webpackChunkcreators_hub||[]).push([[8642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,k=d["".concat(i,".").concat(b)]||d[b]||h[b]||a;return n?o.createElement(k,l(l({ref:t},p),{},{components:n})):o.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},4283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Web Hooks",sidebar_position:3,pagination_next:null,pagination_prev:null},l="Web Hooks",s={unversionedId:"bots-api/getting-started/web-hooks",id:"bots-api/getting-started/web-hooks",title:"Web Hooks",description:'[//]: comment "an intro to web hooks"',source:"@site/docs/bots-api/getting-started/web-hooks.md",sourceDirName:"bots-api/getting-started",slug:"/bots-api/getting-started/web-hooks",permalink:"/hub/docs/bots-api/getting-started/web-hooks",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/getting-started/web-hooks.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Web Hooks",sidebar_position:3,pagination_next:null,pagination_prev:null},sidebar:"botsAPISidebar"},i={},u=[{value:"Setting Up the Webhook",id:"setting-up-the-webhook",level:2},{value:"User Names and Photos",id:"user-names-and-photos",level:3},{value:"Set Webhook Request",id:"set-webhook-request",level:3},{value:"Set Webhook Response",id:"set-webhook-response",level:3},{value:"Event Filtering",id:"event-filtering",level:3},{value:"Removing the Webhook",id:"removing-the-webhook",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-hooks"},"Web Hooks"),(0,r.kt)("p",null,"The Viber Bot API allows you to set a webhook to receive callbacks and user messages",(0,r.kt)("br",null),"\nfrom Viber. This guide will cover the steps to set up the webhook for your Viber bot."),(0,r.kt)("h2",{id:"setting-up-the-webhook"},"Setting Up the Webhook"),(0,r.kt)("p",null,"To set up the webhook, you will need to call the set_webhook API with a valid and",(0,r.kt)("br",null),"\ncertified URL. This URL will be used to receive callbacks and user messages from Viber."),(0,r.kt)("p",null,"For security reasons, only URLs with a valid and official SSL certificate from a trusted CA",(0,r.kt)("br",null),"\nwill be allowed. The certificate CA should be included in the Sun Java trusted root",(0,r.kt)("br",null),"\ncertificates list."),(0,r.kt)("p",null,"Once the set_webhook request is sent, Viber will send a callback to the webhook to",(0,r.kt)("br",null),"\ncheck its availability. The check will succeed if the Viber server receives an HTTP status",(0,r.kt)("br",null),'\ncode of 200 in response to the callback. If the response doesn\'t include "status":0, you',(0,r.kt)("br",null),"\nshould verify that all requests to your webhook URL receive an HTTP status code of 200."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note: After you set your webhook, 1-on-1 conversation with your bot will become",(0,r.kt)("br",null),"\navailable. If you want to disable this feature, you can remove your webhook as described",(0,r.kt)("br",null),"\nbelow.")),(0,r.kt)("h3",{id:"user-names-and-photos"},"User Names and Photos"),(0,r.kt)("p",null,"Viber's API allows you to receive user names and photos, but in accordance with privacy",(0,r.kt)("br",null),"\nlaws, you have the option to opt out of receiving this information. To receive user names",(0,r.kt)("br",null),"\nand photos, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"send_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"send_photo")," flags with",(0,r.kt)("br",null),"\nthe set_webhook request."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'This feature will only work if the user has allowed "Content Personalization" under',(0,r.kt)("br",null),"\nPrivacy settings. If the user has disallowed content personalization, you will receive",(0,r.kt)("br",null),"\nplaceholder values.")),(0,r.kt)("h3",{id:"set-webhook-request"},"Set Webhook Request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"https://chatapi.viber.com/pa/set_webhook"),". ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Method:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),". ",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Payload"',title:'"Payload"'},'{\n  "url": "https://my.host.com",\n  "event_types": [\n    "delivered",\n    "seen",\n    "failed",\n    "subscribed",\n    "unsubscribed",\n    "conversation_started"\n  ],\n  "send_name": true,\n  "send_photo": true\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL to which the events will be sent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event_types"),(0,r.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of events to be sent to the webhook.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send_name"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Whether to send the user name in the webhook. Default ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"send_photo"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Whether to send the user photo in the webhook. Default ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"To set the webhook, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Request Example"',title:'"Request','Example"':!0},'curl -X POST https://chatapi.viber.com/pa/set_webhook \\\n  -H \'Content-Type: application/json\' \\\n  -H \'X-Viber-Auth-Token: <YOUR_AUTH_TOKEN>\'\n  -d \'{\n    "url": "https://your-webhook-url.com",\n    "event_types": [\n      "delivered",\n      "seen",\n      "failed",\n      "subscribed",\n      "unsubscribed",\n      "conversation_started"\n    ],\n    "send_name": true,\n    "send_photo": true\n  }\'\n')),(0,r.kt)("h3",{id:"set-webhook-response"},"Set Webhook Response"),(0,r.kt)("p",null,"The response to the set_webhook request will be a JSON object with the following:",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response Example"',title:'"Response','Example"':!0},'{\n  "status": 0,\n  "status_message": "ok",\n  "event_types": [\n    "delivered",\n    "seen",\n    "failed",\n    "subscribed",\n    "unsubscribed",\n    "conversation_started"\n  ]\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The status code of the response. 0 for success, or a code for an error (refer to the ",(0,r.kt)("a",{parentName:"td",href:"../errors"},"common errors")," section for more information).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status_message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'The status message of the response. "OK" for success, or the error name for an error (refer to the ',(0,r.kt)("a",{parentName:"td",href:"../errors"},"common errors")," section for more information).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"event_types"),(0,r.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of events that will be sent to the webhook.")))),(0,r.kt)("h3",{id:"event-filtering"},"Event Filtering"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"set_webhook")," API allows you to filter the events that trigger a callback to your",(0,r.kt)("be",null),"\nwebhook. You can do this by passing the event_types parameter in the API request."),(0,r.kt)("p",null,"There are certain events that are mandatory and cannot be filtered out. These events are:",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribed"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribed"),". These events will always trigger a",(0,r.kt)("br",null),"\ncallback to your webhook."),(0,r.kt)("p",null,"In addition to the mandatory events, you can choose to receive callbacks for the following",(0,r.kt)("br",null),"\nevents: ",(0,r.kt)("inlineCode",{parentName:"p"},"delivered"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"seen"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"conversation_started"),". To receive",(0,r.kt)("br",null),"\ncallbacks for these events, you need to include them in the event_types parameter",(0,r.kt)("br",null),"\nwhen setting the webhook."),(0,r.kt)("p",null,"If you do not include the event_types parameter in your set_webhook request, it",(0,r.kt)("br",null),"\nmeans that you will receive callbacks for all events, including both the mandatory events",(0,r.kt)("br",null),"\nand the optional events."),(0,r.kt)("p",null,"If you include the event_types parameter in your set_webhook request with an empty",(0,r.kt)("br",null),'\nlist ("event_types": []), it means that you will only receive callbacks for the',(0,r.kt)("br",null),"\nmandatory events."),(0,r.kt)("p",null,"For more information on the different events and their descriptions, please refer to the",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"/hub/docs/bots-api/events/intro"},"events section")," of the API documentation."),(0,r.kt)("h2",{id:"removing-the-webhook"},"Removing the Webhook"),(0,r.kt)("p",null,"To remove the webhook for your bot, use the set_webhook API and send an empty URL",(0,r.kt)("br",null),"\nin the request. This will effectively remove the webhook and disable the 1-on-1",(0,r.kt)("br",null),"\nconversation feature for your bot."),(0,r.kt)("p",null,"To remove the webhook, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Request Example"',title:'"Request','Example"':!0},"curl -X POST \\\n  https://chatapi.viber.com/pa/set_webhook \\\n  -H 'Content-Type: application/json' \\\n  -H 'X-Viber-Auth-Token: <YOUR_AUTH_TOKEN>' \\\n  -d '{\n    \"url\": \"\"\n}'\n")))}h.isMDXComponent=!0}}]);