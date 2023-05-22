---
sidebar_label: Common Errors
sidebar_position: 8
pagination_next: null
pagination_prev: null
toc_max_heading_level: 2
---

# Common Errors

This documentation provides an overview of the common error codes that may be<br/>
returned by the API. Each error code is accompanied by a name and description to help<br/>
understand the nature of the error, as well as an explanation of what caused the error and<br/>
how to resolve it. This information is intended to help clients quickly diagnose and resolve<br/>
any issues that may arise when making requests to the API. If you encounter an error code<br/>
that is not listed here, or if you need further assistance, please don't hesitate to contact<br/>
the support team for help.

## Invalid URL

**code: 1**<br/>
The webhook URL provided is invalid.<br/>

### Explanation

This error occurs when the client provides an invalid URL as the webhook endpoint.<br/>
The URL must be a valid, reachable URL that the server can send HTTP requests to. The client<br/>
should check the URL and ensure that it is correct. If the problem persists, the client<br/>
should contact the support team for assistance.

## Invalid Auth Token

**code: 2**<br/>
The authentication token provided is not valid.

### Explanation

This error occurs when the client provides an invalid authentication token. The<br/>
authentication token is used to authenticate the client and authorize access to the API.<br/>
The client should check their authentication token and ensure that it is correct. If the<br/>
problem persists, the client should contact the support team for assistance.

## Bad Data

**code: 3**<br/>
There is an error in the request scheme or data, such as a missing comma, bracket, or<br/>
other structural element.

### Explanation

This error occurs when the client sends a request with a malformed data structure. The<br/>
request must be properly formatted and include all required elements. The client should<br/>
check the format of the request data and ensure that all required elements are present. If<br/>
the problem persists, the client should contact the support team for assistance.

## Missing Data

**code: 4**<br/>
Some mandatory fields are missing in the request body.

### Explanation

This error occurs when the client sends a request that is missing required data fields. The<br/>
request must include all required fields in order for the server to process the request<br/>
properly. The client should check the request data and ensure that all required fields are<br/>
included. If the problem persists, the client should contact the support team for<br/>
assistance.

## Reciever Not Registered

**code: 5**<br/>
The reciver is not a Viber user

### Explanation

This error occurs when the client sends a message to a phone number that belongs to<br/>
someone who is not a Viber user. The receiver must be a registered Viber user in order to<br/>
receive messages. The client should check the receiver's Viber registration status and<br/>
ensure that they are a registered Viber user. If the problem persists, the client should<br/>
contact the support team for assistance.

## Reciever Not Subscribed

**code: 6**<br/>
The receiver is not subscribed to the bot.

### Explanation

This error occurs when the client attempts to send a message to a Viber user who is not<br/>
subscribed to the bot. The receiver must be subscribed to the bot in order to receive<br/>
messages from it. The client should check the receiver's subscription status and ensure<br/>
that they are subscribed to the bot. If the problem persists, the client should contact<br/>
the support team for assistance.

## Public Accout Blocked

**code: 7**<br/>
The bot account has been blocked.

### Explanation

This error occurs when the bot's public account has been blocked. A blocked public<br/>
account cannot send messages or perform other actions on the Viber platform. The client<br/>
should contact the Viber support team to inquire about the status of the bot account and<br/>
resolve any issues that may have led to the block. If the problem persists, the client should<br/>
contact the support team for assistance.

## Public Accout Not Found

**code: 8** <br/>
The bot account associated with the provided token was not found.

### Explanation

This error occurs when the client attempts to access a bot account that is not found on<br/>
the Viber platform. The bot account must exist and be properly configured in order for the<br/>
client to access it. The client should check the provided token and ensure that it is<br/>
correct. If the problem persists, the client should contact the support team for assistance.

## Public Account Suspended

**code: 9**<br/>
The bot account has been suspended.

### Explanation

This error occurs when the bot's public account has been suspended by Viber. A<br/>
suspended public account cannot send messages or perform other actions on the Viber<br/>
platform. The client should contact the Viber support team to inquire about the status of<br/>
the bot account and resolve any issues that may have led to the suspension. If the<br/>
problem persists, the client should contact the support team for assistance.

## Webhook Not Set

**code: 10**<br/>
No webhook has been set for the bot.

### Explanation

This error occurs when the bot does not have a webhook set. A webhook is a URL that the<br/>
Viber platform uses to send messages and other updates to the bot. The client should set<br/>
a webhook URL for the bot in order to receive updates and messages. If the problem<br/>
persists, the client should contact the support team for assistance.

## Reciever No Sutiable Device

**code: 11**<br/>
The receiver's device or Viber version does not support bots.

### Explanation

This error occurs when the client attempts to send a message to a Viber user who is using<br/>
a device or Viber version that does not support bots. The receiver's device or Viber version<br/>
must be compatible with the Viber bot platform in order to receive messages from the bot.<br/>
The client should check the receiver's device and Viber version and ensure that they are<br/>compatible with the Viber bot platform. If the problem persists, the client should contact<br/>
the support team for assistance.

## Too Many Requests

**code: 12**<br/>
The client has exceeded the rate limit for the bot.

### Explanation

This error occurs when the bot has exceeded the maximum number of messages that can<br/>
be sent in a given time period. The Viber platform has rate limiting in place to prevent bots<br/>
from sending an excessive amount of messages and impacting the performance of the<br/>
platform. The client should reduce the number of messages sent by the bot and ensure<br/>
that they are in compliance with the Viber platform's rate limiting policies. If the problem<br/>
persists, the client should contact the support team for assistance.

## API Version Not Supported

**code: 13**<br/>
The client tried to send a message with a `minApiVersion` that is larger than the<br/>
receiver's supported API version.

### Explanation

This error occurs when the client tries to send a message to a Viber user who is using an<br/>
older version of the Viber API. The client has specified a minimum API version that is<br/>
larger than the receiver's supported API version, which means that the message cannot<br/>
be delivered. To avoid this error, the client should ensure that the `minApiVersion`<br/>
specified in the API request is equal to or lower than the API version supported by the<br/>
receiver. If the problem persists, the client should contact the support team for assistance.

## Incompatible With Version

**code: 14**<br/>
The message contains features that are not supported by the declared `minApiVersion`.

### Explanation

This error occurs when a client sends a message that contains features that are not<br/>
supported by the current Viber API version. If the `minApiVersion` is set too low, the<br/>
message may contain features that are not supported by the Viber API, resulting in this<br/>
error. To resolve this issue, the client should ensure that the `minApiVersion` is set to the<br/>
minimum version required to support the features included in the message. The client<br/>
should also make sure that the Viber API supports the required version of the API.

## Public Account Not Authorized

**code: 15**<br/>
The bot has not been authorized.

### Explanation

This error occurs when the bot has not been authorized by the Viber platform to send<br/>
messages or perform other actions. The client should ensure that the bot's public account<br/>
has been properly registered and authorized by the Viber platform. If the problem<br/>
persists, the client should contact the support team for assistance.

## In Chat Message Not Allowed

**code: 16**<br/>
Inline messages are not allowed.

### Explanation

This error occurs when the client tries to send an inline message, which is not supported<br/>
by the Viber platform. Inline messages are messages that appear in the chat alongside<br/>
regular messages, rather than as separate messages. The Viber platform does not<br/>
support inline messages, and any attempts to send them will result in this error. The client<br/>
should avoid sending inline messages and instead send regular messages. If the problem<br/>
persists, the client should contact the support team for assistance.

## Public Account Is Not Inline

**code: 17**<br/>
The bot is not an inline bot.

### Explanation

This error occurs when the client tries to use the bot as an inline bot, which is not<br/>
supported by the bot's account type. Inline bots are bots that can be summoned in the<br/>
middle of a conversation, whereas regular bots must be manually started by the user. The<br/>
bot associated with the provided token is not set up as an inline bot and cannot be used in<br/>
this manner. The client should ensure that they are using the correct type of bot for their<br/>
needs and that they are using the bot in a manner that is supported by the Viber platform.<br/>
If the problem persists, the client should contact the support team for assistance.

## Cannot Send Broadcast

**code: 19**<br/>
The broadcast message failed to be sent.

### Explanation

This error occurs when the bot is unable to send a broadcast message to multiple<br/>
recipients at once. A broadcast message is a message that is sent to multiple recipients<br/>
simultaneously. This type of message is useful for sending important updates or<br/>
announcements to a large group of users. If the bot encounters an error while trying to<br/>
send a broadcast message, it may be due to a number of technical issues such as network<br/>
connectivity or server errors. The client should contact the support team for assistance in<br/>
resolving the issue.

## Brodcast Not Allowed

**code: 20**<br/>
The bot is not authorized to send broadcast messages.

### Explanation

This error occurs when the bot attempts to send a broadcast message, but does not have<br/>
the proper authorization to do so. Broadcast messages are messages that are sent to<br/>
multiple recipients simultaneously. To send a broadcast message, the bot must be<br/>
authorized by the Viber platform to do so. If the bot encounters this error, it means that<br/>
the authorization has not been granted, and the bot will be unable to send broadcast<br/>
messages. The client should contact the support team for assistance in resolving the<br/>
issue. The client should also ensure that the bot has been properly configured to send<br/>
broadcast messages by the Viber platform.

## Unsupported Country

**code: 21**<br/>
The message sent is not supported in the destination country.

### Explanation

This error occurs when a client tries to send a message to a country that is not supported<br/>
by the Viber API. Some countries may have restrictions or regulations that prevent certain<br/>
types of messages from being sent. In such cases, the Viber API will return this error. To<br/>
resolve this issue, the client should ensure that the message is compliant with the<br/>
regulations of the country where it is being sent, and that the Viber API supports sending<br/>
messages to that country.

## Payment Unsupported

**code: 22**<br/>
The bot does not support payment messages.

### Explanation

This error occurs when a client tries to send a payment message through the Viber API<br/>
and the bot associated with the provided token does not support payment messages. In<br/>
order to send payment messages, the bot must have the required infrastructure and<br/>
integration with a payment provider. If the bot does not support payment messages, the<br/>
Viber API will return this error. To resolve this issue, the client should either use a different<br/>
bot that supports payment messages or implement the necessary infrastructure to<br/>
support payment messages.

### Reference

For more information on sending payment messages through the Viber API, please refer to<br/>
the [Payment API](./resources/pay/intro.md) section of the documentation.

## Free Messages Exceeded

**code: 23**<br/>
The non-billable bot has reached the monthly threshold of free out-of-session messages.

### Explanation

This error occurs when a non-billable bot has exceeded the monthly threshold of free<br/>out-of-session messages that it is allowed to send. Viber sets limits on the number of<br/>
messages that non-billable bots can send in order to prevent spam and abuse. If the bot<br/>
has reached this limit, the Viber API will return this error. To resolve this issue, the client<br/>
can either switch to a billable bot or wait until the next billing cycle starts to send more<br/>
messages.

## No Balance

**code: 24**<br/>
The billable bot has reached its monthly threshold of free out-of-session messages and<br/>
there is no balance remaining.

### Explanation

This error occurs when a billable bot has reached its monthly threshold for free<br/>
out-of-session messages, but does not have any remaining balance. As a result, the bot<br/>
is unable to send any additional messages. To resolve this issue, the client should either<br/>
add funds to the bot's account or switch to a non-billable bot that has a monthly<br/>
threshold for free out-of-session messages.

## General Error

**code: other**<br/>
An unknown error has occurred

### Explanation

This error occurs when an unexpected issue arises that is not covered by any of the<br/>
previously listed error codes. This could be due to various reasons such as an issue with<br/>
the Viber API, a problem with the client request, or a technical issue with the bot. In this<br/>
case, it is recommended to check the request details and try again, or to reach out to<br/>
Viber support for further assistance in resolving the issue.