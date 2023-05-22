---
sidebar_label: Subscriber
sidebar_position: 3
---

# Subscriber Data Model

The subscriber data model represent a user who has subscribed to your bot.<br/>
The subscriber data model is used to represent the user's profile information, such as<br/>
their name and avatar.

## Subscriber Object

The subscriber object is a JSON object that contains the following fields:

```json title=Subscriber
{
  "id": "jc9HsWTZ2Yf2NkRZ8KcNug==",
  "name": "John McClane",
  "avatar": "http://avatar.example.com",
  "country": "UK",
  "language": "en",
  "api_version": 1
}
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| id | string | The unique ID of the user. |
| name | string | The user's name. |
| avatar | string | The URL of the user's avatar. |
| country | string | The user's country. |
| language | string | The user's language. |
| api_version | integer | The supported bots API version on the user's device. |


