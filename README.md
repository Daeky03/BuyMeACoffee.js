# Buy Me A Coffee NodeJS Client

## Examples

### Set up a client
```javascript
import { BuyMeACoffee } from "buymeacoffee";
const client = new BuyMeACoffee("ACCOUNT-TOKEN");
```

### Subscriptions
```javascript
client.Subscriptions().then(data => {
console.log(data)
})
```

### Supporters
```javascript
client.Supporters().then(data => {
console.log(data)
})
```

### Extras
```javascript
client.Extras().then(data => {
console.log(data)
})
```

### How to get account token
After logging in to https://developers.buymeacoffee.com/login, click on the create new token button and create a token by giving read-only permission. You can use the given token here.

### Sample outputs
You can see sample json outputs at https://developers.buymeacoffee.com/#/




