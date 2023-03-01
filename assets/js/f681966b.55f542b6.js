"use strict";(self.webpackChunkcreators_hub=self.webpackChunkcreators_hub||[]).push([[6768],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,g=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9309:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Send Payment Request",sidebar_position:3,pagination_next:null},i=void 0,o={unversionedId:"bots-api/resources/pay/send-payment-request",id:"bots-api/resources/pay/send-payment-request",title:"send-payment-request",description:"POST https://chatapi.viber.com/pa/send_message",source:"@site/docs/bots-api/resources/pay/send-payment-request.md",sourceDirName:"bots-api/resources/pay",slug:"/bots-api/resources/pay/send-payment-request",permalink:"/creators-hub/docs/bots-api/resources/pay/send-payment-request",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/pay/send-payment-request.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Send Payment Request",sidebar_position:3,pagination_next:null},sidebar:"botsAPISidebar",previous:{title:"Setup Payment Account",permalink:"/creators-hub/docs/bots-api/resources/pay/setup-payment-account"}},s={},p=[{value:"Payment Request",id:"payment-request",level:3},{value:"Headers",id:"headers",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Billing Statuses",id:"billing-statuses",level:4}],m={toc:p},u="wrapper";function d(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"POST")," https://",(0,r.kt)("area",null),"chatapi.viber.com/pa/send_message")),(0,r.kt)("p",null,"To request a payment from one of your bot subscribers you need to use the send message",(0,r.kt)("br",null),"\nendpoint and specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"payment")," message type.",(0,r.kt)("br",null),"\nWhen sending the payment request the user will be presented with a payment button,",(0,r.kt)("br",null),"\n",(0,r.kt)("em",{parentName:"p"},"continue to checkout")," that will expire after 15 minutes.",(0,r.kt)("br",null),"\nSee the figure below to understand the flow of the payment request."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Payment Request Flow",src:a(8080).Z,width:"1528",height:"1100"})),(0,r.kt)("h3",{id:"payment-request"},"Payment Request"),(0,r.kt)("h4",{id:"headers"},"Headers"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Content-Type:")," application/json",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Authorization:")," X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"receiver"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the subscriber."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender.name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," Max 28 characters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender.avatar"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The avatar of the bot."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_api_version"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum API version of the subscriber."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," Payment request are supported from v10 and above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the message."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," Must be ",(0,r.kt)("inlineCode",{parentName:"td"},"payment"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The payment object."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment.type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the payment."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," . Currently only \u201cGooglePay\u201d for Android devices and \u201cApplePay\u201d for iOS devices are valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment.description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The description of the payment."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment.total_price"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The total price of the payment."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," For example 30.56")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment.currency_code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The currency code of the payment."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," Currency string according to ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/ISO_4217#:~:text=US%22%20(United%20States).-,List%20of%20ISO%204217%20currency%20codes,-%5Bedit%5D"},"ISO 4217")," format (e.g American dollar would be ",(0,r.kt)("inlineCode",{parentName:"td"},"USD"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment.payment_parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The payment parameters object."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," The payment paramters are different for each payment service provider. You can learn more about them and how to get them in the ",(0,r.kt)("a",{parentName:"td",href:"setup-payment-account#payment-parameters"},"Setup Payment Account")," section")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example"',title:'"Example"'},'curl -X POST https://chatapi.viber.com/pa/send_message -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN" -d\n\'{"auth_token":  "445da6az1s345z78-dazcczb2542zv51a-e0vc5fva17480im9", "receiver": "01234567890A==" "min_api_version": 10, "type": "payment", "payment": {"type": "GooglePay", "description":"2 shirts XL",     "total_price": 1.85, "currency_code": "EUR", "payment_parameters":[{"key": "gateway", "value": "liqpay"}, {"key": "gatewayMerchantId", "value": "abc123"}, {"key": "url", "value": "https://www.liqpay.ua/api/viber"}, {"key": "data",  "value": "qwerty12345"}, {"key": "signature", "value": "123abc" }, {"key":"payeeId","value":"abc123"}]}}\'\n')),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("h4",{id:"attributes"},"Attributes"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The status of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"0 for success. In case of failure - appropriate failure status number. See ",(0,r.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status_message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The status message of the request."),(0,r.kt)("td",{parentName:"tr",align:null},"Success: ok. Failure: ",(0,r.kt)("inlineCode",{parentName:"td"},"invalidUrl"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"invalidAuthToken"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"badData"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"missingData")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"failure"),". See ",(0,r.kt)("a",{parentName:"td",href:"../../errors"},"common errors")," for more information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message_token"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique id of the message"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chat_hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of ther server that host your bot"),(0,r.kt)("td",{parentName:"tr",align:null},"for internal use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billing_status"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An indication of how this message is categorized for billing purposes, allowing you to know if it was charged or not, or whether it counts toward. Read more about bots billing ",(0,r.kt)("a",{parentName:"td",href:"https://help.viber.com/en/article/chatbot-commercial-model"},"here")),(0,r.kt)("td",{parentName:"tr",align:null},"An integer between 0 and 5. See the table in ",(0,r.kt)("a",{parentName:"td",href:"#billing-statuses"},"billing statuses")," section below for more information")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example"',title:'"Example"'},'{\n  "status": 0,\n  "status_message": "ok",\n  "message_token": 1234567890,\n  "chat_hostname": "chatapi.viber.com",\n  "billing_status": 0\n}\n')),(0,r.kt)("h4",{id:"billing-statuses"},"Billing Statuses"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"free"),(0,r.kt)("td",{parentName:"tr",align:null},"Default for all cases other than the ones listed below: chat extension, reply to open conversation, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"inSessionNonBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"1:1 message/keyboard sent in a session from a non-billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"inSessionForBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"1:1 message/keyboard sent in a session from a billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"outOfSessionFreeMessageNonBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"Free out of session 1:1 message/keyboard sent by a non-billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"outOfSessionFreeMessageForBillableBot"),(0,r.kt)("td",{parentName:"tr",align:null},"Free out of session 1:1 message/keyboard sent by a billable bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"outOfSessionBilledMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"Charged out of session 1:1 message/keyboard sent by a billable bot")))))}d.isMDXComponent=!0},8080:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/payment-request-flow-e7e01aa9533268da4f4b0fafd334397a.png"}}]);