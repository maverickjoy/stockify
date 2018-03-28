const
  data        = require('./data'),
  create      = require('./create'),
  valueParser = require('../parsers/value-parser');


const currencyConvertor = (fromCurrency, toCurrency, amnt) => {
    return new Promise((resolve, reject) => {
        data.currencyComparison(fromCurrency, toCurrency).then(rawData => {
            var valObj = valueParser(rawData)
            var responseObj = create.currencyConvertorResponse(fromCurrency, toCurrency, amnt, valObj);
            resolve(responseObj);
        }).catch((errMsg) => {
            reject(errMsg);
        });
    });
}


module.exports = {
    currencyConvertor : currencyConvertor
}
