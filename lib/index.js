const flow = require('./core/flow');

const convert = (fromCurrency, toCurrency, amnt) => {
    if (typeof amnt == "undefined"){
        amnt = 1
    }
    return flow.currencyConvertor(fromCurrency, toCurrency, amnt);
}

module.exports = {
    convert : convert
}
