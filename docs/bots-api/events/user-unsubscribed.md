---
sidebar_label: User Unsubscribed
sidebar_position: 3
---

# User Unsubscribed

## Description
The user unsubscribed event is triggered when a user unsubscribes from your bot. The user will have the option to unsubscribe from the bot at any time.

## Event Payload

The event payload is a JSON object with the following properties:
```json title=Example
{
   "event":"unsubscribed",
   "timestamp":1457764197627,
   "user_id":"jc9HsWTZ2Yf2NkRZ8KcNug==",
   "message_token":4912661846655238145
}
```

| Property | Description | Notes |
| --- | --- | --- |
| event | The event name. | Always `unsubscribed` |
| timestamp | The time the event was triggered. | Unix timestamp in milliseconds |
| user_id | The unique ID of the user. |
| message_token | Unique ID of the message. |