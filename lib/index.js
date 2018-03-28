const flow = require('./core/flow');
const assert = require('assert');

const convert = (fromCurrency, toCurrency, amnt) => {
    if (typeof amnt == "undefined"){
        amnt = 1
    }
    assert(typeof amnt === 'number', "Data Type Error : Amount should be a number")
    assert(typeof fromCurrency === 'string', "Data Type Error : From Currency should be a string")
    assert(typeof toCurrency === 'string', "Data Type Error : To Currency should be a string")

    fromCurrency = fromCurrency.toUpperCase()
    toCurrency = toCurrency.toUpperCase()
    return flow.currencyConvertor(fromCurrency, toCurrency, amnt);
}

module.exports = {
    convert : convert
}
