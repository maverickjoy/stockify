const request = require('request');

APIKEY = "abcd" // It is very well requested to use APIKEY from https://www.alphavantage.co/support/

const currencyComparison = (fromCurrency, toCurrency) => {

    return new Promise((resolve, reject) => {
        request({
            "uri": "https://www.alphavantage.co/query",
            "qs": {
                "function"     : "CURRENCY_EXCHANGE_RATE",
                "from_currency": fromCurrency,
                "to_currency"  : toCurrency,
                "apikey"       : APIKEY
            },
            "method": "GET",
            "json": {}
        }, (err, res, body) => {
            if (!err) {
                // console.log("DATA : ", JSON.stringify(body, null, 4));
                resolve(body)
            } else {
                console.error("Unable to send request to server :" + err);
                reject(err);
            }
        });
    });
}



module.exports = {
    currencyComparison : currencyComparison
}
