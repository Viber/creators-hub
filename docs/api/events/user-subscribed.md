---
sidebar_label: User Subscribed
sidebar_position: 2
---

# User Subscribed

## Description

The user subscribed event is triggered when a user subscribes to your bot. This can occur<br/>
in the following ways:

1. When the user first opens a conversation with the bot.
2. When the user taps on the vertical elapsis button (**&#8942;**) in the top right, followed by "Chat Info".
3. When the user taps on "Receive messages" within the "Chat Info" section.

:::note
Upon receipt of a subscribed event, any context or tracking_data related to the conversation will be deleted. This means that if a user had a previous conversation with your bot and then unsubscribed and subscribed again, a new conversation will start without any information from the previous one.
:::

## Event Payload

The event payload is a JSON object with the following properties:

```json title="Example"
{
  "event": "subscribed",
  "timestamp": 1457764197627,
  "chat_hostname": "SN-149_",
  "user": {
    "id": "jc9HsWTZ2Yf2NkRZ8KcNug==",
    "name": "John McClane",
    "avatar": "http://avatar.example.com",
    "country": "UK",
    "language": "en",
    "api_version": 1
  },
  "message_token": 4912661846655238145
}
```

| Property | Description | Notes |
| --- | --- | --- |
| event | The event name. | Always `subscribed` |
| timestamp | The time the event was triggered. | Unix timestamp in milliseconds |
| chat_hostname | The name of the server that host the bot | For internal use only |
| user | The subscriber object. | See [Subscriber Object](../data-models/subscriber) |
| message_token | Unique ID of the message |
