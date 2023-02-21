---
sidebar_label: User Message Received
sidebar_position: 5
---

# User Message Received

## Description

The Chat API allows users to send messages to your bot. All message types, excluding<br/>
files, are supported for sending from user to bot, including text, picture, video, contact,<br/>
URL, and location.

## Event Payload

The event payload is a JSON object with the following properties:

```json title="Example"
{
  "event": "message",
  "timestamp": 1457764197627,
  "sender": {
    "id": "jc9HsWTZ2Yf2NkRZ8KcNug==",
    "name": "John McClane",
    "avatar": "http://avatar.example.com",
    "country": "UK",
    "language": "en",
    "api_version": 1
  },
  "message": {
    "type": "text",
    "text": "a message to the service",
    "media": "http://example.com",
    "location": {
      "lat": 50.76891,
      "lon": 6.11499
    },
    "tracking_data": "tracking data"
  },
  "message_token": 4912661846655238145
}
```

| Property | Description | Notes |
| --- | --- | --- |
| event | The event name. | Always `message` |
| timestamp | The time the event was triggered. | Unix timestamp in milliseconds |
| sender | The subscriber object. | See [Subscriber Object](../data-models/subscriber) |
| message | The message object. | See [Message Object](../data-models/message) |
| message_token | Unique ID of the message |
