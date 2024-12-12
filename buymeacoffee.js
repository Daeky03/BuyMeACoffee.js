import fetch from "node-fetch";









const rURL = {
    baseURL: "https://developers.buymeacoffee.com/api/v1"
};






export class BuyMeACoffee {
    constructor(access_token){
        this.access_token = access_token;
    }
    Supporters() {
        return this._sendRequest("/supporters");
    }
    Subscriptions() {
        return this._sendRequest("/subscriptions?status=active");
    }
    Extras() {
        return this._sendRequest("/extras");
    }
    async _sendRequest(path) {
        const response = await fetch(`${rURL.baseURL}${path}`, {
            headers: {
                Authorization: "Bearer " + this.access_token
            }
         
            }
        );
        const json = await response.json();
        
        return json;
    }
}

