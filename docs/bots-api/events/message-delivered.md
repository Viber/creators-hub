---
sidebar_label: Message Delivered
sidebar_position: 6
---

# Message Delivered

## Description

Viber offers message status updates for each message sent, allowing your bot to be<br/>
notified when a message has been delivered to the user's device. If the user is using Viber<br/>
on multiple devices, each device will return a delivered event, meaning that several<br/>
delivered events can be received for a single message.

The message delivery status is updated in real-time, and if Viber is unable to deliver the<br/>
message to the user's device, it will try to deliver it for up to 14 days. If the message has<br/>
not been delivered within 14 days, it will not be delivered, and no delivered event will be<br/>
received for it.

## Event Payload

The event payload is a JSON object with the following properties:

```json title=Example
{
  "event": "delivered",
  "timestamp": 1457764197627,
  "message_token": 4912661846655238145,
  "user_id": "jc9HsWTZ2Yf2NkRZ8KcNug=="
}
```

| Property | Description | Notes |
| --- | --- | --- |
| event | The event name. | Always `delivered` |
| timestamp | The time the event was triggered. | Unix timestamp in milliseconds |
| message_token | Unique ID of the message. |
| user_id | The unique ID of the subscribed user. |