---
sidebar_label: Payment Status
sidebar_position: 4
---

# Payment Status Data Model

The payment status data model represents the status of a payment.

## Payment Status Object

The payment status object is a JSON object that contains the following fields:

```json title=Payment Status
{
  "type": "payment",
  "code": 0,
  "supported_psps":["IPay.ua", "LiqPay", "Portmone"],
  "tracking_data": "tracking data"
}
```

| Field | Type | Description |
| ----- | ---- | ----------- |
| type | string | The status type. Always `payment`. |
| code | integer | The status code. |
| supported_psps | array | The list of supported PSPs. |
| tracking_data | string | **Optional** Allow the bot to track messages and user’s replies. The tracking_data value sent with the message will be returned with the user's reply. Max 4000 characters |