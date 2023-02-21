---
sidebar_label: Conversation Started
sidebar_position: 4
---

# Conversation Started

## Description

The conversation started event is triggered when a user starts a conversation with your bot. This can occur in the following ways:

1. By clicking the "Message" button on the account's information screen.
2. By using a deep link.

This event is **not** considered a [subscribe event](./user-subscribed) and does not allow your bot to send<br/> messages to the user unless a welcome message is sent. However, once a conversation<br/>
started event is received, your bot can respond with a JSON containing the same<br/>
parameters as a send message request. The receiver parameter is **not** required in this<br/>
case.

:::note

By default, the conversation started event will not contain the context parameter. To<br/>
add this parameter and determine its value, you can use a deep link in the following<br/> 
format: `viber://pa?chatURI=<YOUR_BOT_URI>&context=<YOUR_CONTEXT>`.

:::

## Event Payload

The event payload is a JSON object with the following properties:

```json title=Example
{
  "event": "conversation_started",
  "timestamp": 1457764197627,
  "type": "open",
  "context": "context information",
  "user": {
    "id": "01234567890A=",
    "name": "John McClane",
    "avatar": "http://avatar.example.com",
    "country": "UK",
    "language": "en",
    "api_version": 1
  },
  "message_token": 4912661846655238145,
  "subscribed": false
}
```

| Property  | Description                       | Notes                          |
| --------- | --------------------------------- | ------------------------------ |
| event     | The event name.                   | Always `conversation_started`  |
| timestamp | The time the event was triggered. | Unix timestamp in milliseconds |
| type      | The type of the conversation.     | Always `open` - The user initiated a conversation with the bot for the first time.|
| context   | The context of the conversation.  |
| user      | The subscriber object.            | See [Subscriber Object](../data-models/subscriber) |
| message_token | Unique ID of the message. |
| subscribed | Whether the user is subscribed to the bot. |