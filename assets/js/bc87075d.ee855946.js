"use strict";(self.webpackChunkcreators_hub=self.webpackChunkcreators_hub||[]).push([[3343],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>y});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(a),c=r,y=s["".concat(i,".").concat(c)]||s[c]||d[c]||l;return a?n.createElement(y,o(o({ref:e},m),{},{components:a})):n.createElement(y,o({ref:e},m))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9113:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Setup Payment Account",sidebar_position:2},o="Setup Payment Account",p={unversionedId:"bots-api/resources/pay/setup-payment-account",id:"bots-api/resources/pay/setup-payment-account",title:"Setup Payment Account",description:"To setup a payment account, you will need to contact one of the payment service providers",source:"@site/docs/bots-api/resources/pay/setup-payment-account.md",sourceDirName:"bots-api/resources/pay",slug:"/bots-api/resources/pay/setup-payment-account",permalink:"/hub/docs/bots-api/resources/pay/setup-payment-account",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/pay/setup-payment-account.md",tags:[],version:"current",lastUpdatedBy:"Or Chen",lastUpdatedAt:1676986313,formattedLastUpdatedAt:"Feb 21, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Setup Payment Account",sidebar_position:2},sidebar:"botsAPISidebar",previous:{title:"Introduction",permalink:"/hub/docs/bots-api/resources/pay/intro"},next:{title:"Send Payment Request",permalink:"/hub/docs/bots-api/resources/pay/send-payment-request"}},i={},u=[{value:"Enable Payment",id:"enable-payment",level:2},{value:"Payment Parameters",id:"payment-parameters",level:2},{value:"LiqPay",id:"liqpay",level:3},{value:"Portmone",id:"portmone",level:3},{value:"IPay.ua",id:"ipayua",level:3}],m={toc:u},s="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup-payment-account"},"Setup Payment Account"),(0,r.kt)("p",null,"To setup a payment account, you will need to contact one of the payment service providers",(0,r.kt)("br",null),"\n(PSP) and request to enable payment for your bot.\nYou might also need to contact the merchant you work with to get the credentials for the",(0,r.kt)("br",null),"\npayment service provider."),(0,r.kt)("h2",{id:"enable-payment"},"Enable Payment"),(0,r.kt)("p",null,"You need to contact one of the payment service providers (PSP) and request to enable",(0,r.kt)("br",null),"\npayment for your bot:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.liqpay.ua/en/registration"},"LiqPay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.portmone.com.ua/b2b_dash/signup#viber"},"Portmone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ipay.ua/"},"IPay"))),(0,r.kt)("p",null,"Then the following steps should be performed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The payment service provider (PSP) will perform all necessary checks, sign an",(0,r.kt)("br",null),"\nagreement with the merchant, approve the request, and then submit a request to Viber",(0,r.kt)("br",null),"\nto enable the payments feature for your chatbot.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The PSP's request to Viber must include the chatbot URI, your email (as the chatbot",(0,r.kt)("br",null),"\ndeveloper), and the email of the merchant who owns the chatbot (if different from that",(0,r.kt)("br",null),"\nof the developer).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If Viber approves the request, the payment feature will be enabled on your bot, and",(0,r.kt)("br",null),"\nboth the merchant and the PSP will receive notification of the approval."))),(0,r.kt)("p",null,"Once you get the approval you will need to request test and production parameters from",(0,r.kt)("br",null),"\nthe PSP or the marchant you work with. See the section ",(0,r.kt)("a",{parentName:"p",href:"#payment-credentials"},"payment parameters")," below."),(0,r.kt)("h2",{id:"payment-parameters"},"Payment Parameters"),(0,r.kt)("p",null,"To send payment requests you will need to privde the credentials for the PSP you have",(0,r.kt)("br",null),"\nchosen. Each PSP has its own set of credentials, the following guides will help you to",(0,r.kt)("br",null),"\nunderstand what credentials you need to provide:"),(0,r.kt)("h3",{id:"liqpay"},"LiqPay"),(0,r.kt)("p",null,"The following parameters are required to send payment requests through LiqPay:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"liqpay"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider ID in Google Pay and Apple Pay systems")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getwayMerchantId"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant Public Key in LiqPay PSP system For more info click ",(0,r.kt)("a",{parentName:"td",href:"https://www.liqpay.ua/en/adminbusiness/"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("area",null),"liqpay.ua/api/viber"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider"),(0,r.kt)("td",{parentName:"tr",align:null},"URL for payment requests to the paymen service provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Enqrypted data about a purchase. For more info click ",(0,r.kt)("a",{parentName:"td",href:"https://www.liqpay.ua/documentation/en/data_signature"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signature"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant authentication signature in the payment service provider system. For more info click ",(0,r.kt)("a",{parentName:"td",href:"https://www.liqpay.ua/documentation/en/data_signature"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payeeId"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant Public Key in LiqPay PSP system. For more info click here ",(0,r.kt)("a",{parentName:"td",href:"https://www.liqpay.ua/en/adminbusiness/"},"here"))))),(0,r.kt)("p",null,"Here is an example of a payment request to LiqPay, note the payment parameters",(0,r.kt)("br",null),"\nfields under the ",(0,r.kt)("inlineCode",{parentName:"p"},"payment")," key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="LiqPay payment request example"',title:'"LiqPay',payment:!0,request:!0,'example"':!0},'{\n    "auth_token": "1234567890&",\n    "url": "https://api.webhookinbox.com/i/u9MMDI2ns/in/",\n    "min_api_version": 10,\n    "receiver": "jc9HsWTZ2Yf2NkRZ8KcNug==",\n    "sender":\n    {\n        "name": "mybot",\n        "avatar": ""\n    },\n    "type": "payment",\n    "payment":\n    {\n        "type":"GooglePay",\n        "description":"Test purchase",\n        "total_price":9.99,\n        "currency_code":"UAH",\n        "payment_parameters":\n        [\n            {"key": "gateway", "value": "liqpay"},\n            {"key": "gatewayMerchantId", "value": "abc123"},\n            {"key": "url", "value": "https://www.liqpay.ua/api/viber"},\n            {"key": "data", "value": "qwerty12345"},\n            {"key": "signature", "value": "123abc"  },\n            {"key":"payeeId","value":"abc123"}\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"If you need assistance connecting to LiqPay, please contact LiqPay support through their ",(0,r.kt)("a",{parentName:"p",href:"https://www.liqpay.ua/documentation/en/"},"developers portal"),"."),(0,r.kt)("h3",{id:"portmone"},"Portmone"),(0,r.kt)("p",null,"The following parameters are required to send payment requests through Portmone:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"portmonecom"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider ID in Google Pay and Apple Pay systems")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getwayMerchantId"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant ID in Portmone system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("area",null),"portmone.com.ua/r3/en/api/gateway/"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider"),(0,r.kt)("td",{parentName:"tr",align:null},"URL for payment requests to the paymen service provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"login"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant login in Portmone system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant password or token in Portmone system. Using a generated password token is recommended but not required. The token will conceal your actual password from the request body. You can access the password in the 'Personal Area' of the ",(0,r.kt)("a",{parentName:"td",href:"https://www.portmone.com.ua/b2b_dash/login"},"Portmone website")," or in the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.portmone.com.ua/docs/en/PaymentGatewayEng/#32-json-request"},"Portmone developer documentation"),".")))),(0,r.kt)("p",null,"Here is an example of a payment request to LiqPay, note the payment parameters",(0,r.kt)("br",null),"\nfields under the ",(0,r.kt)("inlineCode",{parentName:"p"},"payment")," key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Portmone payment request example"',title:'"Portmone',payment:!0,request:!0,'example"':!0},'{\n    "auth_token": "1234567",\n    "min_api_version": 10,\n    "receiver": "jc9HsWTZ2Yf2NkRZ8KcNug==",\n    "sender":\n    {\n        "name": "mybot",\n        "avatar": ""\n    },\n    "type": "payment",\n    "payment":\n    {\n        "type":"GooglePay",\n        "description":"test payment",\n        "total_price":1.23,\n        "currency_code":"UAH",\n        "payment_parameters":\n        [\n            {"key":"gateway","value":"portmonecom"},\n            {"key":"gatewayMerchantId","value":"12345"},\n            {"key":"url","value":"https://www.portmone.com.ua/r3/api/gateway"},\n            {"key":"login","value":"login"},\n            {"key":"password","value":"PasswordHashCode"},\n            {"key":"payeeId","value":"12345"}\n        ]\n    }\n}\n')),(0,r.kt)("h3",{id:"ipayua"},"IPay.ua"),(0,r.kt)("p",null,"The following parameters are required to send payment requests through IPay.ua:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"ipay"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider ID in Google Pay and Apple Pay systems")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getwayMerchantId"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant ID in IPay.ua system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"https://",(0,r.kt)("area",null),"api-viber.ipay.ua"),(0,r.kt)("td",{parentName:"tr",align:null},"Payment service provider"),(0,r.kt)("td",{parentName:"tr",align:null},"URL for payment requests to the paymen service provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subMerchantId"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant ID in IPay.ua system. Can be found ",(0,r.kt)("a",{parentName:"td",href:"https://api-viber.ipay.ua/doc#Settings"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authSalt"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant password or token in IPay.ua system. Can be found ",(0,r.kt)("a",{parentName:"td",href:"https://api-viber.ipay.ua/doc#Settings"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authSign"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant password or token in IPay.ua system. Can be found ",(0,r.kt)("a",{parentName:"td",href:"https://api-viber.ipay.ua/doc#Settings"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"any string"),(0,r.kt)("td",{parentName:"tr",align:null},"Marchant"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional. ")," An array of transactions, as a string, not a JSON array. each object is composed of the following fields: desc and amount. For example: ",(0,r.kt)("inlineCode",{parentName:"td"},'[{\\"desc\\":\\"test\\",\\"amount\\":30}]'))))))}d.isMDXComponent=!0}}]);