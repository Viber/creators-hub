"use strict";(self.webpackChunkcreators_docs=self.webpackChunkcreators_docs||[]).push([[4677],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(n),k=r,g=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1662:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l=n.p+"assets/images/keyboard-example-9704c614cfc733a344d9c7aa164e8bdb.png",i={sidebar_label:"Keyboards",sidebar_position:5},o="Keyboards",d={unversionedId:"bots-api/resources/messaging/keyboards",id:"bots-api/resources/messaging/keyboards",title:"Keyboards",description:"The Chat Bot API enables the sending of a customized keyboard with every message,",source:"@site/docs/bots-api/resources/messaging/keyboards.mdx",sourceDirName:"bots-api/resources/messaging",slug:"/bots-api/resources/messaging/keyboards",permalink:"/creators-hub/docs/bots-api/resources/messaging/keyboards",draft:!1,editUrl:"https://github.com/Viber/creators-hub/edit/main/docs/bots-api/resources/messaging/keyboards.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Keyboards",sidebar_position:5},sidebar:"botsAPISidebar",previous:{title:"Broadcast Messaging",permalink:"/creators-hub/docs/bots-api/resources/messaging/brodcast-message"},next:{title:"Introduction",permalink:"/creators-hub/docs/bots-api/resources/subscribers/intro"}},p={},m=[{value:"Attach a Keyboard to a Message",id:"attach-a-keyboard-to-a-message",level:2},{value:"Configure the Keyboard",id:"configure-the-keyboard",level:2},{value:"Keyboard Buttons",id:"keyboard-buttons",level:2}],s={toc:m},u="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyboards"},"Keyboards"),(0,r.kt)("p",null,"The Chat Bot API enables the sending of a customized keyboard with every message,",(0,r.kt)("br",null),"\nproviding users with a pre-defined set of replies or actions. This keyboard can be",(0,r.kt)("br",null),"\nattached to any message type or sent independently. Once received, the keyboard",(0,r.kt)("br",null),"\nreplaces the device's native keyboard and appears to the user. The keyboard is fully",(0,r.kt)("br",null),"\ncustomizable and can be designed to meet the specific requirements of the bot."),(0,r.kt)("p",null,"It is worth noting that the app always displays the most recently sent keyboard."),(0,r.kt)("h2",{id:"attach-a-keyboard-to-a-message"},"Attach a Keyboard to a Message"),(0,r.kt)("p",null,"Keyboards can be attached to any type of message and can be sent and displayed",(0,r.kt)("br",null),"\ntogether. To attach a keyboard to a message, simply add the keyboard's parameters to",(0,r.kt)("br",null),"\nthe message's JSON. The keyboard JSON object defines various visual and logical",(0,r.kt)("br",null),"\nattributes, including the background color, number of buttons, and more."),(0,r.kt)("p",null,"The following example illustrates a keyboard that is sent with a single message and",(0,r.kt)("br",null),"\nthe code behind it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Keyboard Example"',title:'"Keyboard','Example"':!0},'{\n  "receiver": "K917PBuvPZmhKfb8Vw3b2Q==",\n  "min_api_version": 1,\n  "sender": {\n    "name": "Leggy Cat",\n    "avatar": "https://i.imgur.com/QH13Pzp.png"\n  },\n  "tracking_data": "tracking data",\n  "type": "text",\n  "text": "Hello world!",\n  "keyboard": {\n    "Type": "keyboard",\n    "DefaultHeight": false,\n    "BgColor": "#FFFFFF",\n    "Buttons": [\n      {\n        "Columns": 6,\n        "Rows": 1,\n        "BgColor": "#2db9b9",\n        "BgMediaType": "gif",\n        "BgMedia": "https://res.cloudinary.com/hcabpjybe/image/upload/v1662541096/application-assets/fablfhcfjrlxind5tozc.png",\n        "BgLoop": true,\n        "ActionType": "open-url",\n        "ActionBody": "https://www.viber.com/",\n        "Image": "https://res.cloudinary.com/hcabpjybe/image/upload/v1662014438/application-assets/w21cyafzreqmiwb8abit.jpg",\n        "Text": "<font color=#FFFFFF><b>Click to Subscribe</b></font>",\n        "TextVAlign": "middle",\n        "TextHAlign": "center",\n        "TextOpacity": 60,\n        "TextSize": "regular"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("img",{src:l,width:"40%",height:"auto"}),(0,r.kt)("h2",{id:"configure-the-keyboard"},"Configure the Keyboard"),(0,r.kt)("p",null,"The table below displays the general parameters for configuring your keyboard container,",(0,r.kt)("br",null),"\nits structure, and the accompanying text input field."),(0,r.kt)("admonition",{title:"Important Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Some keyboard parameters are only available for API version 3 and above.",(0,r.kt)("br",null),"\nThis means that only users with Viber version 7.6 or higher will be able to see",(0,r.kt)("br",null),"\nthe keyboard.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Buttons"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array containing all keyboard buttons by order. See ",(0,r.kt)("a",{parentName:"td",href:"#keyboard-buttons"},"keyboard buttons")," section for  more information"),(0,r.kt)("td",{parentName:"tr",align:null},"Required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BgColor"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Background color of the keyboard in Hex format."),(0,r.kt)("td",{parentName:"tr",align:null},"Optional.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DefaultHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'When set to "true", the keyboard will always be displayed with the same height as the native keyboard. When set to "false", shorter keyboards will be displayed with the minimal possible height.'),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. Default value is false. Max height is the native keyboard height")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CustomDefaultHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the percentage of free screen space in the chat that should be occupied by the keyboard. If the final height of the keyboard is determined to be smaller than the height of the system keyboard, it will automatically adjust to that minimum height."),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. API level 3. Range between 40 to 70")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HeightScale"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow the use of custom aspect ratios for Carousel content blocks. This feature scales the height of the default square block (which is defined on the client side) to a specified percentage value. As a result, blocks can now have non-square shapes, making it possible to create Carousel content with a correct custom aspect ratio. This feature applies to all blocks within the Carousel content."),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. API level 3. range between 20 to 100, default value is 100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ButtonsGroupColumns"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the size of the block that is used to group buttons together during the layout process in columns."),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. API level 4. Range between 1 to 6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ButtonsGroupRows"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the size of the block that is used to group buttons together during the layout process in rows."),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. API level 4. Range between 1 to 7 for rich media messgae, otherwise between 1 to 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InputFieldState"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Customize the keyboard input field by choosing one of the following options: regular - display a standard-sized input field, minimized - display a smaller input field by default, or hidden - completely hide the input field."),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. API level 4. default ",(0,r.kt)("inlineCode",{parentName:"td"},"regular"))))),(0,r.kt)("h2",{id:"keyboard-buttons"},"Keyboard Buttons"),(0,r.kt)("p",null,"The table below displays the general parameters for configuring your keyboard buttons:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Columns"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of columns the card occupies."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The number of columns must be between 1 and 6."),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rows"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rows the card occupies."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The number of rows must be between 1 and 7."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BgColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The background color of the card."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The color must be in hexadecimal format."),(0,r.kt)("td",{parentName:"tr",align:null},"Default Viber button color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Silent"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the user action will not be displayed in the conversation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported only on Viber 6.7 and above"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BgMediaType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the background media."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The value can be ",(0,r.kt)("inlineCode",{parentName:"td"},"picture")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"gif"),". For picture jped and png file formats are supported"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"picture"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BgMedia"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of the background media."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The media size should not exceed 500KB."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BgMediaScaleType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The scale type of the background media."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional."),"You can choose from the following options:  ",(0,r.kt)("inlineCode",{parentName:"td"},"crop"),": scales the contents to fill the view with a fixed aspect ratio, which may result in some portions of the content being clipped. ",(0,r.kt)("inlineCode",{parentName:"td"},"fill"),": scales the contents to fill the view without maintaining a fixed aspect ratio. ",(0,r.kt)("inlineCode",{parentName:"td"},"fit"),": ensures that at least one axis (either X or Y) fits exactly while maintaining the aspect ratio of the content."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ImageScaleType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The scale type of the image."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," You can choose from the following options:  ",(0,r.kt)("inlineCode",{parentName:"td"},"crop"),": scales the contents to fill the view with a fixed aspect ratio, which may result in some portions of the content being clipped. ",(0,r.kt)("inlineCode",{parentName:"td"},"fill"),": scales the contents to fill the view without maintaining a fixed aspect ratio. ",(0,r.kt)("inlineCode",{parentName:"td"},"fit"),": ensures that at least one axis (either X or Y) fits exactly while maintaining the aspect ratio of the content."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BgLoop"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the background media will loop."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ActionType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the action the card will perform when pressed."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The value can be ",(0,r.kt)("inlineCode",{parentName:"td"},"reply"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"open-url"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"location-picker"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"share-phone"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"buy")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"none"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"reply")," - will send a reply to the bot. ",(0,r.kt)("inlineCode",{parentName:"td"},"open-url")," - will open the specified URL and send the URL as reply to the bot. ",(0,r.kt)("strong",{parentName:"td"},"Note:")," ",(0,r.kt)("inlineCode",{parentName:"td"},"location-picker")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"share-phone")," are not supported on desktop, and require adding any text in the ActionBody parameter."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reply"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ActionBody"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The body of the action."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required.")," Text for ActionType ",(0,r.kt)("inlineCode",{parentName:"td"},"reply")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"none"),". Valid URL for ActionType ",(0,r.kt)("inlineCode",{parentName:"td"},"open-url")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of image to place on top of the card background"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," This can be a partially transparent image that will allow some of the background to show through. The image will be placed using an aspect-fill logic. Supported format - ",(0,r.kt)("inlineCode",{parentName:"td"},"png")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"jpeg"),". Max size 500Kb"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Text to display on top of the card background"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," You can use the following HTML tags in your text messages:: ",(0,r.kt)("inlineCode",{parentName:"td"},"<b/>"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<i/>"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<u/>"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<br/>"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"<s/>"),"(from API v4). You can also control the font size by using the ",(0,r.kt)("inlineCode",{parentName:"td"},"<font/>")," tag with the ",(0,r.kt)("inlineCode",{parentName:"td"},"size")," attribute like this: ",(0,r.kt)("inlineCode",{parentName:"td"},'<font size="12"></font>'),". Note that the minimum font size is 12 and the maximum size is 32. This feature is available on API v4 and above. Additionally, you can control the font color by using the ",(0,r.kt)("inlineCode",{parentName:"td"},"<font/>")," tag with the ",(0,r.kt)("inlineCode",{parentName:"td"},"colort")," attribute, like this: ",(0,r.kt)("inlineCode",{parentName:"td"},'<font color="#7F00FF"></font>'),'. The color must be specified in hexadecimal format. Please note that the maximum length of the text is 250 characters. If the text exceeds this limit, it will be cropped and presented as "...".'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextVAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Vertical alignment of the text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The value can be ",(0,r.kt)("inlineCode",{parentName:"td"},"top"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"middle")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"bottom"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"middle"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextHAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Horizontal alignment of the text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The value can be ",(0,r.kt)("inlineCode",{parentName:"td"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"center")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"right"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"center"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextPaddings"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Padding of the text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The array must contain 4 integers. The first value is the top padding, the second is the right padding, the third is the bottom padding and the fourth is the left padding. Values can be between 0 and 12. Supported on API v4 and above."),(0,r.kt)("td",{parentName:"tr",align:null},"[12, 12, 12, 12]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextOpacity"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Opacity of the text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The value can be between 0 and 100."),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextSize"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The value can be ",(0,r.kt)("inlineCode",{parentName:"td"},"small"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"regular")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"large"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"regular"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenURLType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the URL to open."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The value can be ",(0,r.kt)("inlineCode",{parentName:"td"},"internal")," (the URL will be opened inside the app) or ",(0,r.kt)("inlineCode",{parentName:"td"},"external")," (the URL will be opened in an external browser)."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"internal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenURLMediaType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the URL media type."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," ",(0,r.kt)("inlineCode",{parentName:"td"},"not-media")," - force browser usage. ",(0,r.kt)("inlineCode",{parentName:"td"},"video")," - will be opened via media player. ",(0,r.kt)("inlineCode",{parentName:"td"},"gif")," - client will play the gif in full screen mode. ",(0,r.kt)("inlineCode",{parentName:"td"},"picture")," - client will open the picture in full screen mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not-media"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextBgGradientColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The background gradient color of the text."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," The color must be in hexadecimal format. Works only if ",(0,r.kt)("inlineCode",{parentName:"td"},"TextVAlign")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"top")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"bottom")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextShouldFit"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the text will be resized to fit the card."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above. Minimum font seize is 12pt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBrowser"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON Object"),(0,r.kt)("td",{parentName:"tr",align:null},"configuration for open-url action with internal type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v3 and above."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBrowswer.ActionButton"),(0,r.kt)("td",{parentName:"tr",align:null},"strin"),(0,r.kt)("td",{parentName:"tr",align:null},"Action button in internal\u2019s browser navigation bar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v3 and above. Types can be ",(0,r.kt)("inlineCode",{parentName:"td"},"forward"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"send"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"open-externally"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"send-to-bot"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"none"),". forward - will open the forward via Viber screen and share current URL or predefined URL. send - sends the currently opened URL as an URL message, or predefined URL if property ActionPredefinedURL is not empty. open-externally - opens external browser with the current URL. send-to-bot - (api level 6) sends reply data in msgInfo to bot in order to receive message. none - will not display any button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forward"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBrowswer.ActionPredefinedURL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Predefined URL for action button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v3 and above."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBrowser.TitleType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of title for internal browser if has no CustomTitle field"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v3 and above. Types can be ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"domain"),". default means the content in the page\u2019s ",(0,r.kt)("inlineCode",{parentName:"td"},"<OG:title>")," element or in ",(0,r.kt)("inlineCode",{parentName:"td"},"<title>")," tag. domain means the top level domain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBrowser.CustomTitle"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom title for internal browser"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v3 and above. Max 15 characters"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBNrowser.Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that browser should be opened in a full screen or in partial size (50% of screen height). Full screen mode can be with orientation lock (both orientations supported, only landscape or only portrait)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v3 and above. Types can be ",(0,r.kt)("inlineCode",{parentName:"td"},"fullscreen"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fullscreen-portrait"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fullscreen-landscape"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"partial-size"),". normal means the browser will be opened in a small window. fullscreen means the browser will be opened in full screen mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fullscreen"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBrowser.FooterType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of footer for internal browser"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v3 and above. Types can be ",(0,r.kt)("inlineCode",{parentName:"td"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"hidden"),". default means the content in the page\u2019s ",(0,r.kt)("inlineCode",{parentName:"td"},"<OG:description>")," element or in ",(0,r.kt)("inlineCode",{parentName:"td"},'<meta name="description">')," tag. hidden means the footer will be hidden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InternalBrowser.ActionReplyData"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Data that will be sent to bot when user clicks on action button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above. Custom reply data for send-to-bot action that will be resent in msgInfo"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Map"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration for for open-map action with internal type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Map.Latitude"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Latitude of the location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," (format: \u201c12.12345\u201d)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Map.Longitude"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Longitude of the location"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," (format: \u201c3.12345\u201d)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frame"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Draw frame above the background on the card, the size will be equal the size of the card"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frame.BorderWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Width of the frame border"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above., Values between 0 and 10"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frame.BorderColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Color of the frame border"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above. The color must be in hexadecimal format."),(0,r.kt)("td",{parentName:"tr",align:null},"#000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frame.CornerRadius"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Radius of the frame corners"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above. Values between 0 and 10"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mediaplayer"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies media player options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above. Will be ignored if ",(0,r.kt)("inlineCode",{parentName:"td"},"OpenURLMediaType")," is not ",(0,r.kt)("inlineCode",{parentName:"td"},"video")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"audio")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mediaplayer.Title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Title of the media player"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mediaplayer.Subtitle"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Subtitle of the media player"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mediaplayer.ThumbnailURL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the thumbnail image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mediaplayer.Loop"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the video will be looped"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Optional.")," Supported on API v6 and above."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}k.isMDXComponent=!0}}]);