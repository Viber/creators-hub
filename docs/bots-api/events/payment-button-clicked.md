---
sidebar_label: Payment Button Clicked
sidebar_position: 9
pagination_next: null
---

# Payment Button Clicked

## Description

The Payment Button Clicked event is triggered when a user taps on the payment<br/>
provider's "Pay" button in the checkout page. This event provides information to the bot<br/>
about the user's intention to make a payment.

## Event Payload

The event payload is a JSON object with the following properties:

```json title="Example"
{
  "event": "client_status",
  "timestamp": 1457764197627,
  "message_token": 4912661846655238145,
  "chat_hostname": "sn-chat-04",
  "user": {
    "id": "jc9HsWTZ2Yf2NkRZ8KcNug==",
    "name": "John McClane",
    "avatar": "http://avatar_url",
    "country": "UA",
    "language": "ua",
    "api_version": 1
  },
  "status": {
    "type": "payment",
    "code": 0,
    "supported_psps": ["IPay.ua", "LiqPay", "Portmone"],
    "tracking_data": "tracking data"
  }
}
```

| Property | Description | Notes |
| --- | --- | --- |
| event | The event name. | Always `client_status` |
| timestamp | The time the event was triggered. | Unix timestamp in milliseconds |
| message_token | Unique ID of the message. |
| chat_hostname | The hostname of the bot server. |
| user | The subscriber object. | See [Subscriber Object](../data-models/subscriber) |
| status | The payment status object. | See [Payment Status Object](../data-models/payment-status) |