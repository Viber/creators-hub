---
sidebar_label: Message
sidebar_position: 2
---

# Message Data Model

The message data model represent a message sent from your bot to a subscribed user.<br/>
The bots API supports the following message types:
* [Text](#text-message)
* [Picture](#picture-message)
* [Video](#video-message)
* [File](#file-message)
* [Contact](#contact-message)
* [Location](#location-message)
* [URL](#url-message)
* [Sticker](#sticker-message)
* [Rich Media](#rich-media-message)

:::caution Message Size Limit

The maximum size of a message is 30KB.

:::

## Text Message

The text message data model represents a message that contains text only.<br/>
The JSON representation of a text message is as follows:

```json title=Text Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"text",
   "text":"Hello world!"
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720 |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional** Max 4000 characters |
| type | string | The message type. | **Required.** Always `text`. |
| text | string | The message text. | **Required.** Max 7000 characters. |

## Picture Message

The picture message data model represents a message that contains a picture.<br/>
The JSON representation of a picture message is as follows:

```json title=Picture Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"picture",
   "text":"My picture",
   "media":"http://media.example.com/picture.jpg",
   "thumbnail":"http://media.example.com/picture_thumbnail.jpg"
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `picture`. |
| text | string | Description of the picture. | **Required.** Max 768 characters. Can be an empty string if irrelevant. |
| media | string | The URL of the picture. Supported file formats include jpeg, png, and non-animated gif. | **Required.** The URL must have a resource with a `.jpeg`, `.png`, or `.gif` file extension as the last path segment. For example, the URL should be in the format of `http://www.example.com/path/image.jpeg.` Please note that animated GIFs can be sent as either URL messages or file messages. Additionally, keep in mind that the maximum image size is 1MB on iOS and 3MB on Android. |
| thumbnail | string | URL of a reduced size image to be used as a thumbnail. Supported file formats include jpeg, png, and non-animated gif. | **Optional.** Recommended dimensions for the thumbnail are 4000x400. maxium image size 100KB. |

## Video Message

The video message data model represents a message that contains a video.<br/>
The JSON representation of a video message is as follows:

```json title=Video Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"video",
   "media":"http://media.example.com/video.mp4",
   "thumbnail":"http://media.example.com/video_thumbnail.jpg",
    "size":3861139,
    "duration": 10
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `video`. |
| media | string | The URL of the video. Supported file formats include mp4 | **Required.** The URL must have a resource with a `.mp4` file extension as the last path segment. For example, the URL should be in the format of `http://www.example.com/path/video.mp4.` |
| thumbnail | string | URL of a reduced size image to be used as a thumbnail. Supported file formats include jpeg only | **Optional.** Recommended dimensions for the thumbnail are 4000x400. maxium image size 100KB. |
| size | integer | The size of the video in bytes | **Required.** Max size 26MB(27262976b)|
| duration | integer | The duration of the video in seconds | **Optional.** Max duration 3 minutes(180s)|

## File Message

The file message data model represents a message that contains a file.<br/>
The JSON representation of a file message is as follows:

```json title=File Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"file",
   "media":"http://media.example.com/file.pdf",
   "size":3861139,
   "file_name":"file.pdf"
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `file`. |
| media | string | The URL of the file. | **Required.** The URL must end with a file extension as the last segment of the path. For instance, the URL should follow this format: `http://www.example.com/path/file.pdf`. Please note that certain file types are not supported. For a comprehensive list of forbidden file formats, please refer to the [forbidden file formats](#forbidden-file-formats) section below  |
| size | integer | The size of the file in bytes | **Required.** Max size 50MB(52428800b)|
| file_name | string | The name of the file | **Required.** Should include the file extension. The maximum length of the file name, including the extension, is 256 characters. Sending a file without an extension or with an incorrect extension could result in the client being unable to open the file. It's essential to ensure that the file name follows the correct naming convention to avoid any issues|

### Forbidden File Formats

The following file formats are not supported:

* Windows: `.bat`, `.bin`, `.cmd`, `.com`, `.cpl`, `.exe`, `.gadget`, `.inf1`, `.ins`, `.inx`, `.isu`, `.job`,
`.jse`, `.lnk`, `.msc`, `.msi`, `.msp`, `.mst`, `.paf`, `.pif`, `.ps1`, `.reg`, `.rgs`, `.sct`, `.shb`, `.shs`,
`.u3p`, `.vb`, `.vbe`, `.vbs`, `.vbscript`, `.ws`, `.wsf`
* Mac OS: `.action`, `.app`, `.bin`, `.command`, `.csh`, `.osx`, `.workflow`
* Linux: `.bin`, `.csh`, `.ksh`, `.out`, `.run`
* Android: `.apk`
* iOS: `.ipa`

## Contact Message

The contact message data model represents a message that contains a contact information.<br/>
The JSON representation of a contact message is as follows:

```json title=Contact Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"contact",
   "contact":{
      "name":"John Doe",
      "phone_number":"+972501234567"
   }
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `contact`. |
| contact.name | string | The name of the contact | **Required.** Max 28 characters. |
| contact.phone_number | string | The phone number of the contact | **Required.** Max 18 characters. The phone number should contain the country code and should only include numbers. For example, a valid American phone number could be formatted as follows: `+15555555555`, where `+1` is the country code for the United States. Including any characters other than numbers in the phone number field can result in errors or failure to send messages. Please ensure that the phone number follows the correct formatting guidelines to avoid any issues. |

## Location Message

The location message data model represents a message that contains the user's location.<br/>
The JSON representation of a location message is as follows:

```json title=Location Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"location",
   "location":{
      "lat":32.0853,
      "lon":34.7818
   }
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `location`. |
| location.lat | float | The latitude of the location. | **Required.** |
| location.lon | float | The longitude of the location. | **Required.** |

## URL Message

The URL message data model represents a message that contains a URL.<br/>
The JSON representation of a contact message is as follows:

```json title=URL Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"url",
   "media":"http://www.example.com"
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `url`. |
| media | string | The URL to open. | **Required.** Max 2000 characters|

## Sticker Message

The sticker message data model represents a message that contains a sticker.<br/>
The JSON representation of a sticker message is as follows:

```json title=Sticker Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"sticker",
   "sticker_id":"40129"
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `sticker`. |
| sticker_id | string | The sticker ID. | **Required.** |

## Rich Media Message

The Rich Media message enables the sending of messages with predefined layouts,<br/>
including height (number of rows), width (number of columns), text, images, and buttons.

As an example, the Carousel Content Message allows a user to scroll through a list of<br/>
items, each composed of an image, description, and call-to-action button.

Each item on the list shown to the user is called a "card," and each card has its own<br/>
grid layout, which can have a maximum of 7 rows and a maximum of 6 columns.<br/>
You can send a minimum of one card and a maximum of six cards.<br/>
Cards are fully customizable, and you can learn more on how to design your cards in the<br/>
[Designing Rich Media Message Card](#desiging-cards) section below.

:::note Pay Attention

The following restrictions apply to the Rich Media message:

   * The Rich Media message is supported only on Viber version 6.7 and above.
   * The Rich Media message cannot be forwarded.

:::

The JSON representation of a Rich Media message is as follows:

```json title=Rich Media Message
{
   "receiver":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "min_api_version":1,
   "sender":{
      "name":"My Awesome Bote",
      "avatar":"http://avatar.example.com"
   },
   "tracking_data":"tracking data",
   "type":"rich_media",
   "rich_media":{
      "Type":"rich_media",
      "ButtonsGroupColumns":6,
      "ButtonsGroupRows":7,
      "BgColor":"#FFFFFF",
      "Buttons":[
         {
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":"https://www.google.com",
            "Image":"http://html-test:8080/myweb/guy/assets/imageRMsmall2.png"
         },
         {
            "Columns":6,
            "Rows":2,
            "Text":"<font color=#323232><b>Headphones with Microphone, On-ear Wired earphones</b></font><font color=#777777><br>Sound Intone </font><font color=#6fc133>$17.99</font>",
            "ActionType":"open-url",
            "ActionBody":"https://www.google.com",
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"left"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":"https://www.google.com",
            "Text":"<font color=#ffffff>Buy</font>",
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":"https://www.google.com",
            "Text":"<font color=#8367db>MORE DETAILS</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle"
         },
         {
            "Columns":6,
            "Rows":3,
            "ActionType":"open-url",
            "ActionBody":"https://www.google.com",
            "Image":"https://s16.postimg.org/wi8jx20wl/image_RMsmall2.png"
         },
         {
            "Columns":6,
            "Rows":2,
            "Text":"<font color=#323232><b>Hanes Men's Humor Graphic T-Shirt</b></font><font color=#777777><br>Hanes</font><font color=#6fc133>$10.99</font>",
            "ActionType":"open-url",
            "ActionBody":"https://www.google.com",
            "TextSize":"medium",
            "TextVAlign":"middle",
            "TextHAlign":"left"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":"https://www.google.com",
            "Text":"<font color=#ffffff>Buy</font>",
            "TextSize":"large",
            "TextVAlign":"middle",
            "TextHAlign":"middle",
            "Image":"https://s14.postimg.org/4mmt4rw1t/Button.png"
         },
         {
            "Columns":6,
            "Rows":1,
            "ActionType":"reply",
            "ActionBody":"https://www.google.com",
            "Text":"<font color=#8367db>MORE DETAILS</font>",
            "TextSize":"small",
            "TextVAlign":"middle",
            "TextHAlign":"middle"
         }
      ]
   }
}
```

| Field | Type | Description | Notes |
| ----- | ---- | ----------- | ----- |
| receiver | string | The unique ID of the subscriber to send the message to. | **Required.** |
| min_api_version | integer | The minimum API version required by clients to receive this message<br/>(default 1). | **Optional.** It is important to note that the client version must support the API version specified. If the version number is set below the required version for certain features, those features may not work as expected. |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The URL of the bot's avatar. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional.** Max 4000 characters. |
| type | string | The message type. | **Required.** Always `rich_media`. |
| rich_media.Type | string | The type of the rich media message. | **Required.** Always `rich_media`. |
| rich_media.ButtonsGroupColumns | integer | The number of columns in the grid of each card. | **Required.** The number of columns must be between 1 and 6. |
| rich_media.ButtonsGroupRows | integer | The number of rows in the grid of each card. | **Required.** The number of rows must be between 1 and 7. |
| rich_media.BgColor | string | The background color of the card. | **Required.** The color must be in hexadecimal format. |
| rich_media.Buttons | array | The list of cards. | **Required.** The list must contain between 1 and 6 cards. A new card starts when the sum of rows reaches the number of rows defined in the `rich_media.ButtonsGroupRows`.|

### Desiging Cards

The following table shows the properties of a card:

| Field | Type | Description | Notes | Default |
| ----- | ---- | ----------- | ----- | ------- |
| Columns | integer | The number of columns the card occupies. | **Optional.** The number of columns must be between 1 and 6. | 6 |
| Rows | integer | The number of rows the card occupies. | **Optional.** The number of rows must be between 1 and 7. | 1 |
BgColor | string | The background color of the card. | **Optional.** The color must be in hexadecimal format. | Default Viber button color |
Silent | boolean | If set to `true`, the user action will not be displayed in the conversation. | **Optional.** Supported only on Viber 6.7 and above | `false` |
BgMediaType | string | The type of the background media. | **Optional.** The value can be `picture` or `gif`. For picture jped and png file formats are supported | `picture` |
BgMedia | string | The URL of the background media. | **Optional.** The media size should not exceed 500KB. |
BgMediaScaleType | string | The scale type of the background media. | **Optional.**You can choose from the following options:  `crop`: scales the contents to fill the view with a fixed aspect ratio, which may result in some portions of the content being clipped. `fill`: scales the contents to fill the view without maintaining a fixed aspect ratio. `fit`: ensures that at least one axis (either X or Y) fits exactly while maintaining the aspect ratio of the content. |
ImageScaleType | string | The scale type of the image. | **Optional.** You can choose from the following options:  `crop`: scales the contents to fill the view with a fixed aspect ratio, which may result in some portions of the content being clipped. `fill`: scales the contents to fill the view without maintaining a fixed aspect ratio. `fit`: ensures that at least one axis (either X or Y) fits exactly while maintaining the aspect ratio of the content. |
BgLoop | boolean | If set to `true`, the background media will loop. | **Optional.** | `true` |
ActionType | string | The type of the action the card will perform when pressed. | **Optional.** The value can be `reply`, `open-url`, `location-picker`, `share-phone`, `buy` or `none`. `reply` - will send a reply to the bot. `open-url` - will open the specified URL and send the URL as reply to the bot. **Note:** `location-picker` and `share-phone` are not supported on desktop, and require adding any text in the ActionBody parameter. | `reply` |
ActionBody | string | The body of the action. | **Required.** Text for ActionType `reply` or `none`. Valid URL for ActionType `open-url`|
Image | string | URL of image to place on top of the card background | **Optional.** This can be a partially transparent image that will allow some of the background to show through. The image will be placed using an aspect-fill logic. Supported format - `png` and `jpeg`. Max size 500Kb | 
Text | string | Text to display on top of the card background | **Optional.** You can use the following HTML tags in your text messages:: `<b/>`, `<i/>`, `<u/>`, `<br/>`, `<s/>`(from API v4). You can also control the font size by using the `<font/>` tag with the `size` attribute like this: `<font size="12"></font>`. Note that the minimum font size is 12 and the maximum size is 32. This feature is available on API v4 and above. Additionally, you can control the font color by using the `<font/>` tag with the `colort` attribute, like this: `<font color="#7F00FF"></font>`. The color must be specified in hexadecimal format. Please note that the maximum length of the text is 250 characters. If the text exceeds this limit, it will be cropped and presented as "...".|
TextVAlign | string | Vertical alignment of the text | **Optional.** The value can be `top`, `middle` or `bottom`. | `middle` |
TextHAlign | string | Horizontal alignment of the text | **Optional.** The value can be `left`, `center` or `right`. | `center` |
TextPaddings | array | Padding of the text | **Optional.** The array must contain 4 integers. The first value is the top padding, the second is the right padding, the third is the bottom padding and the fourth is the left padding. Values can be between 0 and 12. Supported on API v4 and above. | [12, 12, 12, 12]
TextOpacity | integer | Opacity of the text | **Optional.** The value can be between 0 and 100. | 100 |
TextSize | string | Size of the text | **Optional.** The value can be `small`, `regular` or `large`. | `regular` |
OpenURLType | string | The type of the URL to open. | **Optional.** The value can be `internal` (the URL will be opened inside the app) or `external` (the URL will be opened in an external browser).  | `internal` |
OpenURLMediaType | string | Determines the URL media type. | **Optional.** `not-media` - force browser usage. `video` - will be opened via media player. `gif` - client will play the gif in full screen mode. `picture` - client will open the picture in full screen mode | `not-media` |
| TextBgGradientColor | string | The background gradient color of the text. | **Optional.** The color must be in hexadecimal format. Works only if `TextVAlign` is set to `top` or `bottom`|
TextShouldFit | boolean | If set to `true`, the text will be resized to fit the card. | **Optional.** Supported on API v6 and above. Minimum font seize is 12pt| `false` |
InternalBrowser | JSON Object | configuration for open-url action with internal type | **Optional.** Supported on API v3 and above. |
InternalBrowswer.ActionButton| strin | Action button in internal’s browser navigation bar | **Optional.** Supported on API v3 and above. Types can be `forward`, `send`, `open-externally`, `send-to-bot`, `none`. forward - will open the forward via Viber screen and share current URL or predefined URL. send - sends the currently opened URL as an URL message, or predefined URL if property ActionPredefinedURL is not empty. open-externally - opens external browser with the current URL. send-to-bot - (api level 6) sends reply data in msgInfo to bot in order to receive message. none - will not display any button| `forward` |
InternalBrowswer.ActionPredefinedURL| string |Predefined URL for action button | **Optional.** Supported on API v3 and above. |
InternalBrowser.TitleType| string | Type of title for internal browser if has no CustomTitle field | **Optional.** Supported on API v3 and above. Types can be `default`, `domain`. default means the content in the page’s `<OG:title>` element or in `<title>` tag. domain means the top level domain | `default` |
InternalBrowser.CustomTitle| string | Custom title for internal browser | **Optional.** Supported on API v3 and above. Max 15 characters |
InternalBNrowser.Mode| string | Indicates that browser should be opened in a full screen or in partial size (50% of screen height). Full screen mode can be with orientation lock (both orientations supported, only landscape or only portrait) | **Optional.** Supported on API v3 and above. Types can be `fullscreen`, `fullscreen-portrait`, `fullscreen-landscape`, `partial-size`. normal means the browser will be opened in a small window. fullscreen means the browser will be opened in full screen mode | `fullscreen` |
InternalBrowser.FooterType| string | Type of footer for internal browser | **Optional.** Supported on API v3 and above. Types can be `default`, `hidden`. default means the content in the page’s `<OG:description>` element or in `<meta name="description">` tag. hidden means the footer will be hidden | `default` |
InternalBrowser.ActionReplyData| string | Data that will be sent to bot when user clicks on action button | **Optional.** Supported on API v6 and above. Custom reply data for send-to-bot action that will be resent in msgInfo |
Map | JSON Object | Configuration for for open-map action with internal type | **Optional.** Supported on API v6 and above. |
Map.Latitude | float | Latitude of the location | **Optional.** (format: “12.12345”) |
Map.Longitude | float | Longitude of the location | **Optional.** (format: “3.12345”) |
Frame | JSON Object | Draw frame above the background on the card, the size will be equal the size of the card | **Optional.** Supported on API v6 and above. |
Frame.BorderWidth	| integer | Width of the frame border | **Optional.** Supported on API v6 and above., Values between 0 and 10 | 1 |
Frame.BorderColor	| string | Color of the frame border | **Optional.** Supported on API v6 and above. The color must be in hexadecimal format. | #000000 |
Frame.CornerRadius	| integer | Radius of the frame corners | **Optional.** Supported on API v6 and above. Values between 0 and 10 | 0 |
Mediaplayer | JSON Object | Specifies media player options | **Optional.** Supported on API v6 and above. Will be ignored if `OpenURLMediaType` is not `video` or `audio` |
Mediaplayer.Title | string | Title of the media player | **Optional.** Supported on API v6 and above. |
Mediaplayer.Subtitle | string | Subtitle of the media player | **Optional.** Supported on API v6 and above. |
Mediaplayer.ThumbnailURL | string | URL of the thumbnail image | **Optional.** Supported on API v6 and above. |
Mediaplayer.Loop | boolean | If set to `true`, the video will be looped | **Optional.** Supported on API v6 and above. | `false` |