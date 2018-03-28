const currencyConvertorResponse = (fromCurrency, toCurrency, amnt, valObj) => {
    const exchangeValue = amnt * valObj.exchangeRate
    const result = amnt + " " + valObj.fromCurrencyName + "(" + fromCurrency +
    ") = " + exchangeValue + " " + valObj.toCurrencyName + "(" + toCurrency + ")"
    return responseObj = {
        "Exchange Rate" : valObj.exchangeRate,
        "Result" : result,
        "Amount" : exchangeValue
    }
}

module.exports = {
    currencyConvertorResponse : currencyConvertorResponse
}
