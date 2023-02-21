---
sidebar_label: Subscribers Status
sidebar_position: 3
slug: get-subscribers-status
---

# Subscribers Status
**`POST` https://<area/>chatapi.viber.com/pa/get_online**

This endpoint allows you to retrieve the online status of your subscribers.<br/>
You can retrieve the online status of up to 100 subscribers in a single request.

### Request
#### Headers
---
**Content-Type:** application/json<br/>
**Authorization:** X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN

#### Parameters
---
| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| ids | array of strings | The list of subscribers ids. | Max 100 ids |

```bash title="Example"
curl -X POST https://chatapi.viber.com/pa/get_online -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN" -d '{"ids":["jc9HsWTZ2Yf2NkRZ8KcNug==","fd4HsWT33Yf1BkRZ8KcBsk=="]}'
```

### Response
#### Attributes
---
| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| status | integer | The status of the request. | 0 for success. In case of error, an error code will be returned. See [common errors](../../errors) for more information |
| status_message | string | The status message of the request. | ok for sucess. In case of error, one of the following errors will be returned:  `invalidUrl`, `invalidAuthToken`, `badData`, `missingData` and `failure`. See [common errors](../../errors) for more information |
| users | array of objects | The list of subscribers with their online status. | |
| users.id | string | The id of the subscriber. | |
| user.online_status | integer | The online status of the subscriber. | 0 - online, 1 - offline, 2 - undisclosed, the user set Viber to hide the status, 3 - try later, in case of internal error, 4 - unavailable, the user is not a Viber user or is not a subscriber of the bot or is unregistered from the app |
| user.online_status_message | string | The online status message of the subscriber. on of online, offline, undisclosed, tryLater and unavailable | | 

#### Headers
---
**Content-Type:** application/json

#### Body
```json
{
   "status":0,
   "status_message":"ok",
   "users":[
      {
         "id":"jc9HsWTZ2Yf2NkRZ8KcNug==",
         "online_status":0,
         "online_status_message":"online"
      },
      {
         "id":"fd4HsWT33Yf1BkRZ8KcBsk==",
         "online_status":1,
         "online_status_message":"offline"
      }
   ]
}
```