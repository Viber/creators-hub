---
sidebar_label: Retrieve Your Application Info
sidebar_position: 2
slug: /api/resources/app/get-info
---

# Retrieve Your Application Info
**`GET` https://<area/>chatapi.viber.com/pa/get_account_info**

### Introduction
This endpoint allows you to retrieve your application info.


### Request
#### Headers
---
**Content-Type:** application/json<br/>
**Authorization:** X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN

```bash title="Example"
curl -X GET https://chatapi.viber.com/pa/get_account_info -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN"
```

### Response
#### Attributes
---
| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| status | integer | The status of the request. | 0 for success. In case of error, an error code will be returned. See [common errors](../../errors) for more information |
| status_message | string | The status message of the request. | ok for sucess. In case of error, one of the following errors will be returned:  `invalidUrl`, `invalidAuthToken`, `badData`, `missingData` and `failure`. See [common errors](../../errors) for more information |
| id | string | The unique id of the bot. | |
| name | string | The name of the bot. | Max 75 characters |
| uri | string | The uri of the bot. | |
| icon | string | The icon of the bot. | jpeg, max size of 521KB. Recommended dimensions 720x720 |
| background | string | The background of the bot. | jpeg, max size of 512KB. Max dimensions 1920x1920 |
| category | string | The category of the bot. | |
| subcategory | string | The subcategory of the bot. | |
| location | object | The location of the bot. | Allow the users to find the bot close to their location|
| Country | string | The country of the bot owner. | 2 letters country code - [ISO Aplha-2](https://www.iban.com/country-codes) |
| webhook | string | The webhook of the bot. | |
| event_types | array | The evets that the bot is registred to. | |
| subscribers_count | integer | The number of subscribers of the bot. | |
| members | array of objects | The list of people who have access for managing the bot. each member object has an `id`, `name`, `avatar` and `role` | deprecated |
#### Headers
---
**Content-Type:** application/json
#### Body
---
```json
{
   "status":0,
   "status_message":"ok",
   "id":"pa:75346594275468546724",
   "name":"account name",
   "uri":"accountUri",
   "icon":"http://example.com",
   "background":"http://example.com",
   "category":"category",
   "subcategory":"sub category",
   "location":{
      "lon":0.1,
      "lat":0.2
   },
   "country":"UK",
   "webhook":"https://my.site.com",
   "event_types":[
      "delivered",
      "seen"
   ],
   "subscribers_count":35,
   "members":[
      {
         "id":"01234567890A=",
         "name":"my name",
         "avatar":"http://example.com",
         "role":"admin"
      }
   ]
}
```