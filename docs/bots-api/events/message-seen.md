---
sidebar_label: Message Seen
sidebar_position: 7
---

# Message Seen

## Description

Viber offers message status updates for each message sent, allowing your bot to be<br/>
notified when a message has been seen by the user. The seen event will be sent only once<br/>
when the user reads their unread messages, regardless of the number of messages sent<br/>
to them or the number of devices they are using.

## Event Payload

The event payload is a JSON object with the following properties:

```json title=Example
{
  "event": "seen",
  "timestamp": 1457764197627,
  "message_token": 4912661846655238145,
  "user_id": "jc9HsWTZ2Yf2NkRZ8KcNug=="
}
```

| Property | Description | Notes |
| --- | --- | --- |
| event | The event name | Always `seen` |
| timestamp | The time the event was triggered | Unix timestamp in milliseconds |
| message_token | Unique ID of the message |
| user_id | The unique ID of the subscriber |