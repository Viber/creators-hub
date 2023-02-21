---
sidebar_label: The Welcome Message
sidebar_position: 2
---

# The Welcome Message

The Viber API only allows for sending messages to users after they have subscribed to the<br/>
bot. However, Viber permits the bot to send one "welcome message" to a user as soon as<br/>
they initiate a conversation, prior to their subscription.

This welcome message will be sent in response to a conversation_started event, which<br/>
will be received from Viber once the user opens a conversation with the bot. For further<br/>
information about this event and when it is triggered, refer to the [conversation started](../../events/conversation-started)<br/>
section in the API events.

## Flow of the Welcome Message

Sending a welcome message will follow the following steps:

1. A user initiates a one-on-one conversation with the account.
2. The Viber server sends a conversation_started callback to the bot's webhook.
3. The account receives the conversation_started callback and responds with an HTTP<br/>
   response, which includes the welcome message in the response body.

The welcome message will be in JSON format according to the structure of the<br/>
send_message request, but without the receiver parameter. An example of a welcome<br/>
message would appear as follows:

```json
{
  "type": "text",
  "text": "Hello World",
  "sender": {
    "name": "Viber Bot",
    "avatar": "http://avatar.example.com"
  }
}
```

:::note Pay attention

The welcome message should be included in the body of the HTTP<br/>
response to the conversation_started callback, and not sent to the send_message<br/>
endpoint.

:::
