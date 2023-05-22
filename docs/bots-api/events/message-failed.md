---
sidebar_label: Message Failed
sidebar_position: 8
---

# Message Failed

## Description

The event will be triggered if a message sent through the Chat API has failed<br/>
any of the client validations. This can happen even after a successful request status<br/>
(status code 0) has been received.

The following flow outlines what happens when a message fails client validation:

1. The message is sent.
2. A response with a status of 0 is received, indicating a successful request.
3. The message reaches the client and fails client validation.
4. The failed callback is sent to the webhook, containing the unique message token<br/>
and a string explaining the failure.

Note that failed messages will not be displayed to the recipient and no [message delivered](./message-delivered)<br/> or [message seen](./message-seen) events will be returned for it.

## Event Payload
The event payload is a JSON object with the following properties:
```json title="Example"
{  
   "event":"failed",
   "timestamp":1457764197627,
   "message_token":4912661846655238145,
   "user_id":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "desc":"message validation failed"
}
```
| Property | Description | Notes |
| --- | --- | --- |
| event | The event name. | Always `failed` |
| timestamp | The time the event was triggered. | Unix timestamp in milliseconds |
| message_token | Unique ID of the message. |
| user_id | The unique ID of the subscriber. |
| desc | A string explaining the failure. |