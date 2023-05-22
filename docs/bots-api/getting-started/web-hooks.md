---
sidebar_label: Web Hooks
sidebar_position: 3
pagination_next: null
pagination_prev: null
---

# Web Hooks

[//]: comment "an intro to web hooks"

The Viber Bot API allows you to set a webhook to receive callbacks and user messages<br/>
from Viber. This guide will cover the steps to set up the webhook for your Viber bot.

## Setting Up the Webhook

[//]: comment "a guide to setting up the webhook"

To set up the webhook, you will need to call the set_webhook API with a valid and<br/>
certified URL. This URL will be used to receive callbacks and user messages from Viber.

For security reasons, only URLs with a valid and official SSL certificate from a trusted CA<br/>
will be allowed. The certificate CA should be included in the Sun Java trusted root<br/>
certificates list.

Once the set_webhook request is sent, Viber will send a callback to the webhook to<br/>
check its availability. The check will succeed if the Viber server receives an HTTP status<br/>
code of 200 in response to the callback. If the response doesn't include `"status":0`, you<br/>
should verify that all requests to your webhook URL receive an HTTP status code of 200.

:::note

Note: After you set your webhook, 1-on-1 conversation with your bot will become<br/>
available. If you want to disable this feature, you can remove your webhook as described<br/>
below.

:::

### User Names and Photos

Viber's API allows you to receive user names and photos, but in accordance with privacy<br/>
laws, you have the option to opt out of receiving this information. To receive user names<br/>
and photos, you can pass the `send_name` and `send_photo` flags with<br/>
the set_webhook request.

:::note

This feature will only work if the user has allowed "Content Personalization" under<br/>
Privacy settings. If the user has disallowed content personalization, you will receive<br/>
placeholder values.

:::

### Set Webhook Request

**Endpoint:** `https://chatapi.viber.com/pa/set_webhook`. <br/>
**Method:** `POST`. <br/>

```json title="Payload"
{
  "url": "https://my.host.com",
  "event_types": [
    "delivered",
    "seen",
    "failed",
    "subscribed",
    "unsubscribed",
    "conversation_started"
  ],
  "send_name": true,
  "send_photo": true
}
```

| Parameter   | Type             | Description                                                                  |
| ----------- | ---------------- | ---------------------------------------------------------------------------- |
| url         | string           | The URL to which the events will be sent                                    |
| event_types | array of strings | The list of events to be sent to the webhook                                |
| send_name   | boolean          | **Optional.** Whether to send the user name in the webhook. Default `false`  |
| send_photo  | boolean          | **Optional.** Whether to send the user photo in the webhook. Default `false` |

To set the webhook, use the following command:

```bash title="Request Example"
curl -X POST https://chatapi.viber.com/pa/set_webhook \
  -H 'Content-Type: application/json' \
  -H 'X-Viber-Auth-Token: <YOUR_AUTH_TOKEN>'
  -d '{
    "url": "https://your-webhook-url.com",
    "event_types": [
      "delivered",
      "seen",
      "failed",
      "subscribed",
      "unsubscribed",
      "conversation_started"
    ],
    "send_name": true,
    "send_photo": true
  }'
```

### Set Webhook Response

The response to the set_webhook request will be a JSON object with the following:<br/>

```json title="Response Example"
{
  "status": 0,
  "status_message": "ok",
  "event_types": [
    "delivered",
    "seen",
    "failed",
    "subscribed",
    "unsubscribed",
    "conversation_started"
  ]
}
```

| Parameter      | Type             | Description                                                                                                                                                  |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| status         | integer          | The status code of the response. 0 for success, or a code for an error (refer to the [common errors](../errors) section for more information).               |
| status_message | string           | The status message of the response. "OK" for success, or the error name for an error (refer to the [common errors](../errors) section for more information). |
| event_types    | array of strings | The list of events that will be sent to the webhook.                                                                                                         |

### Event Filtering

The `set_webhook` API allows you to filter the events that trigger a callback to your<br/>
webhook. You can do this by passing the `event_types` parameter in the API request.

There are certain events that are mandatory and cannot be filtered out. These events are:<br/>
`message`, `subscribed`, and `unsubscribed`. These events will always trigger a<br/>
callback to your webhook.

In addition to the mandatory events, you can choose to receive callbacks for the following<br/>
events: `delivered`, `seen`, `failed`, and `conversation_started`. To receive<br/>
callbacks for these events, you need to include them in the event_types parameter<br/>
when setting the webhook.

If you do not include the event_types parameter in your set_webhook request, it<br/>
means that you will receive callbacks for all events, including both the mandatory events<br/>
and the optional events.

If you include the event_types parameter in your set_webhook request with an empty<br/>
list (`"event_types": []`), it means that you will only receive callbacks for the<br/>
mandatory events.

For more information on the different events and their descriptions, please refer to the<br/>
[events section](../events/intro.md) of the API documentation.

## Removing the Webhook

[//]: comment "a guide to removing the webhook"

To remove the webhook for your bot, use the set_webhook API and send an empty URL<br/>
in the request. This will effectively remove the webhook and disable the 1-on-1<br/>
conversation feature for your bot.

To remove the webhook, use the following command:

```bash title="Request Example"
curl -X POST \
  https://chatapi.viber.com/pa/set_webhook \
  -H 'Content-Type: application/json' \
  -H 'X-Viber-Auth-Token: <YOUR_AUTH_TOKEN>' \
  -d '{
    "url": ""
}'
```