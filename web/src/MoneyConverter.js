
const request = require('request');

class MoneyConverter {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    getLatestData(callback) {
        const options = {
            method: 'GET',
            url: 'http://currencies.apps.grandtrunk.net/getlatest/'+this.from+"/"+this.to,
            headers: ""
        }
        request(options, function (error, response, body) {
            if (error) {
                if(options.url.endsWith("USD")) return 0,82;
                else if(options.url.endsWith("EUR")) return 1,23;
                else return 0;
            }
            callback(body);
        });
    }
}