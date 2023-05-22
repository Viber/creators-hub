---
sidebar_label: Subscriber Details
sidebar_position: 2
slug: get-subscriber-details
---

# Subscriber Details
**`POST` https://<area/>chatapi.viber.com/pa/get_user_details**

This endpoint allows you to retrieve the details of a specific subscriber by supplying a user ID.<br/>
You can retrieve the user ID from various events related to the user, such as the [user subscribed](../../events/user-subscribed.md) or the [user message recieved](../../events/user-message-received.md) API.
This request can be used twice every 12 hours for each user.

### Request

#### Headers
---
**Content-Type:** application/json<br/>
**Authorization:** X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN

#### Parameters
---
| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| id | string | The id of the subscriber. | |

```bash title="Example"
curl -X POST https://chatapi.viber.com/pa/get_user_details -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN" -d '{"id":"jc9HsWTZ2Yf2NkRZ8KcNug=="}'
```

### Response

#### Attributes
---
| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| status | integer | The status of the request. | 0 for success. In case of error, an error code will be returned. See [common errors](../../errors) for more information. |
| status_message | string | The status message of the request. | ok for success. In case of error, one of the following errors will be returned:  `invalidUrl`, `invalidAuthToken`, `badData`, `missingData` or `failure`. See [common errors](../../errors) for more information. |
|message_token | integer | The message token of the request. | |
| user | object | The subscriber details. | |
| user.id | string | The id of the subscriber. | |
| user.name | string | The name of the subscriber. | |
| user.avatar | string | The avatar of the subscriber. | |
| user.country | string | The country of the subscriber. | 2 letters country code ([ISO ALPHA-2](https://www.iban.com/country-codes)). |
| user.language | string | The language of the subscriber. | 2 letters language code ([ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)). |
| user.primary_device_os | string | The primary device OS of the subscriber. | |
| user.api_version | integer | The API version of the subscriber. | Currently only 1. Additional versions will be added in the future. |
| user.viber_version | string | The Viber version of the subscriber. | |
| user.mcc | integer | The mobile country code of the subscriber. | |
| user.mnc | integer | The mobile network code of the subscriber. | |
| user.device_type | string | The device type of the subscriber. | |

#### Headers
---
**Content-Type:** application/json

#### Body
---
```json title="Example"
{
   "status":0,
   "status_message":"ok",
   "message_token":4912661846655238145,
   "user":{
      "id":"01234567890A=",
      "name":"John McClane",
      "avatar":"http://avatar.example.com",
      "country":"UK",
      "language":"en",
      "primary_device_os":"android 7.1",
      "api_version":1,
      "viber_version":"6.5.0",
      "mcc":1,
      "mnc":1,
      "device_type":"iPhone9,4"
   }
}
```