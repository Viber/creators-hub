---
sidebar_label: Setup Payment Account
sidebar_position: 2
---

# Setup Payment Account

To setup a payment account, you will need to contact one of the payment service providers<br/>
(PSP) and request to enable payment for your bot.
You might also need to contact the<br/>
merchant you work with to get the credentials for the payment service provider.

## Enable Payment

You need to contact one of the payment service providers (PSP) and request to enable<br/>
payment for your bot:

- [LiqPay](https://www.liqpay.ua/en/registration)
- [Portmone](https://www.portmone.com.ua/b2b_dash/signup#viber)
- [IPay](https://www.ipay.ua/)

Then the following steps should be performed:

- The payment service provider (PSP) will perform all the necessary checks, sign an<br/>
  agreement with the merchant, approve the request, and then submit a request to Viber<br/>
  to enable the payments feature for your chatbot.

- The PSP's request to Viber must include the chatbot URI, your email (as the chatbot<br/>
  developer), and the email of the merchant who owns the chatbot (if different from that<br/>
  of the developer).

- If Viber approves the request, the payment feature will be enabled on your bot, and<br/>
  both the merchant and the PSP will receive notification of the approval.

Once you get the approval, you will need to request test and production parameters from<br/>
the PSP or the merchant you work with. See the section [payment parameters](#payment-credentials) below.

## Payment Parameters

To send payment requests, you will need to provide the credentials for the PSP you have<br/>
chosen. Each PSP has its own set of credentials, the following guides will help you<br/>
understand what credentials you need to provide:

### LiqPay

The following parameters are required to send payment requests through LiqPay:

| Key | Value | Source | Description |
| --- | --- | --- | --- |
| gateway | liqpay | Payment service provider | Payment service provider ID in Google Pay and Apple Pay systems. |
| getwayMerchantId | Merchant ID | Merchant | Merchant Public Key in LiqPay PSP system. For more info click [here](https://www.liqpay.ua/en/adminbusiness/). |
| url | https://<area/>liqpay.ua/api/viber | Payment service provider | URL for payment requests to the payment service provider. |
| data | any string | Merchant | Encrypted data about a purchase. For more info, click [here](https://www.liqpay.ua/documentation/en/data_signature). |
| signature | any string | Merchant | Merchant authentication signature in the payment service provider system. For more info, click [here](https://www.liqpay.ua/documentation/en/data_signature). |
| payeeId | any string | Merchant | Merchant Public Key in LiqPay PSP system. For more info, click [here](https://www.liqpay.ua/en/adminbusiness/). |

Here is an example of a payment request to LiqPay, note the payment parameters<br/>
fields under the `payment` key:
```json title="LiqPay payment request example"
{
	"auth_token": "1234567890&",
	"url": "https://api.webhookinbox.com/i/u9MMDI2ns/in/",
	"min_api_version": 10,
	"receiver": "jc9HsWTZ2Yf2NkRZ8KcNug==",
	"sender":
	{
		"name": "mybot",
		"avatar": ""
	},
	"type": "payment",
	"payment":
	{
		"type":"GooglePay",
		"description":"Test purchase",
		"total_price":9.99,
		"currency_code":"UAH",
		"payment_parameters":
		[
			{"key": "gateway", "value": "liqpay"},
			{"key": "gatewayMerchantId", "value": "abc123"},
			{"key": "url", "value": "https://www.liqpay.ua/api/viber"},
			{"key": "data",	"value": "qwerty12345"},
			{"key": "signature", "value": "123abc"	},
			{"key":"payeeId","value":"abc123"}
		]
	}
}
```

If you need assistance connecting to LiqPay, please contact LiqPay support through their [developers portal](https://www.liqpay.ua/documentation/en/).

### Portmone

The following parameters are required to send payment requests through Portmone:

| Key | Value | Source | Description |
| --- | --- | --- | --- |
| gateway | portmonecom | Payment service provider | Payment service provider ID in Google Pay and Apple Pay systems. |
| getwayMerchantId | Merchant ID | Merchant | Merchant ID in Portmone system. |
| url | https://<area/>portmone.com.ua/r3/en/api/gateway/ | Payment service provider | URL for payment requests to the payment service provider. |
| login | any string| Merchant | Merchant login in Portmone system. |
| password | any string | Merchant | Merchant password or token in the Portmone system. Using a generated password token is recommended (but not required). The token will conceal your actual password from the request body. You can access the password in the 'Personal Area' of the [Portmone website](https://www.portmone.com.ua/b2b_dash/login) or in the [Portmone developer documentation](https://docs.portmone.com.ua/docs/en/PaymentGatewayEng/#32-json-request). |

Here is an example of a payment request to Portmone, note the payment parameters<br/>
fields under the `payment` key:
```json title="Portmone payment request example"
{
	"auth_token": "1234567",
	"min_api_version": 10,
	"receiver": "jc9HsWTZ2Yf2NkRZ8KcNug==",
	"sender":
	{
		"name": "mybot",
		"avatar": ""
	},
	"type": "payment",
	"payment":
	{
		"type":"GooglePay",
		"description":"test payment",
		"total_price":1.23,
		"currency_code":"UAH",
		"payment_parameters":
		[
			{"key":"gateway","value":"portmonecom"},
			{"key":"gatewayMerchantId","value":"12345"},
			{"key":"url","value":"https://www.portmone.com.ua/r3/api/gateway"},
			{"key":"login","value":"login"},
			{"key":"password","value":"PasswordHashCode"},
			{"key":"payeeId","value":"12345"}
		]
	}
}
```

### IPay.ua

The following parameters are required to send payment requests through IPay.ua:

| Key | Value | Source | Description |
| --- | --- | --- | --- |
| gateway | ipay | Payment service provider | Payment service provider ID in Google Pay and Apple Pay systems. |
| getwayMerchantId | Merchant ID | Merchant | Merchant ID in IPay.ua system. |
| url | https://<area/>api-viber.ipay.ua | Payment service provider | URL for payment requests to the payment service provider. |
| subMerchantId | any string | Merchant | Merchant ID in IPay.ua system. Can be found [here](https://api-viber.ipay.ua/doc#Settings). |
| authSalt | any string | Merchant | Merchant password or token in IPay.ua system. Can be found [here](https://api-viber.ipay.ua/doc#Settings). |
| authSign| any string | Merchant | Merchant password or token in IPay.ua system. Can be found [here](https://api-viber.ipay.ua/doc#Settings). |
| transactions	| any string | Merchant | **Optional. ** An array of transactions, as a string, not a JSON array. each object is composed of the following fields: desc and amount. For example: `[{\"desc\":\"test\",\"amount\":30}]` |