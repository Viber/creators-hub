---
sidebar_label: Send a Message
sidebar_position: 3
---

# Send a Message

**`POST` https://<area/>chatapi.viber.com/pa/send_message**

This endpoint allows you to send a message to a subscriber of your bot.

:::note Pay attention

The following limitations apply to the `send_message` endpoint:
* You can send up to 100 messages to a user within an hour without receiving a reply. The<br/>
message count towards the limit will reset when the user replies to a message. Once you<br/>
have reached the limit, you will receive the following error response:<br/>
`{"status":12,"status_message":"Too many requests", message_token: "1234567890", chat_hostname: "SN-CHAT-0x_"}`
* Maximum message size is 30KB.

:::

### Request

#### Headers
---
**Content-Type:** application/json<br/>
**Authorization:** X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN

#### Parameters
---
| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| type | string | The type of the message. | **Required.** one of the available message types. See full list [here](../../data-models/message.md). |
| sender.name | string | The name of the bot. | **Required.** Max 28 characters. |
| sender.avatar | string | The avatar of the bot. | **Optional.** the avatar size should not exceed 100KB. The recommended dimensions for the avatar are 720x720. |
| tracking_data | string | Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. | **Optional**. Max 4000 characters. |
| min_api_version | integer | The minimum API version that the message is supported in. | **Optional**. Default value is 1. |
| Additional fileds based on the message type | | | |

```bash title="Example"
curl -X POST https://chatapi.viber.com/pa/broadcast_message -H "X-Viber-Auth-Token: YOUR_AUTHENTICATION_TOKEN" -d '{"type":"text",receiver="jc9HsWTZ2Yf2NkRZ8KcNug==","text":"Hello World","sender":{"name":"Viber Bot","avatar":"http://avatar.example.com"}}'
```

### Response

#### Attributes
---
| Name | Type | Description | Notes |
| --- | --- | --- | --- |
| status | integer | The status of the request. | 0 for success. In case of failure - appropriate failure status number. See [common errors](../../errors) for more information. |
| status_message | string | The status message of the request. | Success: ok. Failure: `invalidUrl`, `invalidAuthToken`, `badData`, `missingData` and `failure`. See [common errors](../../errors) for more information. |
| message_token | integer | Unique ID of the message. | |
| chat_hostname | string | The name of ther server that hosts your bot. | For internal use. |
|billing_status | string | An indication of how this message is categorized for billing purposes, allowing you to know if it was charged or not, or whether it counts toward. Read more about bots billing [here](https://help.viber.com/en/article/chatbot-commercial-model). | An integer between 0 and 5. See the table in [billing statuses](#billing-statuses) section below for more information. |

```json title="Example"
{
  "status": 0,
  "status_message": "ok",
  "message_token": 1234567890,
  "chat_hostname": "chatapi.viber.com",
  "billing_status": 0
}
```

#### Billing Statuses
---
| Value | Name | Description |
| --- | --- | --- |
| 0 | free | Default for all cases other than the ones listed below: chat extension, reply to open conversation, etc. |
| 1 | inSessionNonBillableBot | 1:1 message/keyboard sent in a session from a non-billable bot |
| 2 | inSessionForBillableBot | 1:1 message/keyboard sent in a session from a billable bot |
| 3 | outOfSessionFreeMessageNonBillableBot | Free out of session 1:1 message/keyboard sent by a non-billable bot |
| 4 | outOfSessionFreeMessageForBillableBot | Free out of session 1:1 message/keyboard sent by a billable bot |
| 5 | outOfSessionBilledMessage | Charged out of session 1:1 message/keyboard sent by a billable bot |