module.exports = function(rawData) {
    var errMsg = "Error Message"
    if (rawData.errMsg) {
        console.log("Invalid API call. Please retry or visit the documentation");
    } else {
        var exchangeRate = 0
        var toCurrencyName = ''
        var fromCurrencyName = ''

        if (rawData["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
            exchangeRate = parseFloat(rawData["Realtime Currency Exchange Rate"]["5. Exchange Rate"])

        if (rawData["Realtime Currency Exchange Rate"]["4. To_Currency Name"] != null)
            toCurrencyName = rawData["Realtime Currency Exchange Rate"]["4. To_Currency Name"]

        if (rawData["Realtime Currency Exchange Rate"]["2. From_Currency Name"] != null)
            fromCurrencyName = rawData["Realtime Currency Exchange Rate"]["2. From_Currency Name"]

        return valObj = {
            "exchangeRate": exchangeRate,
            "toCurrencyName": toCurrencyName,
            "fromCurrencyName": fromCurrencyName
        }
    }
}
