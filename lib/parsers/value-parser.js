module.exports = function(rawData) {
    var errMsg = "Error Message"
    if (rawData.errMsg) {
        console.log("Invalid API call. Please retry or visit the documentation");
    } else {
      return valObj = {
        "exchangeRate": rawData["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
        "toCurrencyName": rawData["Realtime Currency Exchange Rate"]["4. To_Currency Name"],
        "fromCurrencyName": rawData["Realtime Currency Exchange Rate"]["2. From_Currency Name"]
      }
    }
}
