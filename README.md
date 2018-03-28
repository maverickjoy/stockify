# Stockify

[![NPM][npm-image]][npm-url] [![MIT][mit-image]][mit-url]

Stockify is a module for obtaining currency exchange rates for physical and digital/crypto currency.

## Installation

```bash
npm install stockify
```

## Usage

```javascript
const rate = require("stockify");

// convert function returns a promise
// Parameters - { from currency(ISO 4217 format), to currency(ISO 4217 format), Amount(Optional Parameter)}

rate.convert("INR", "USD").then( data => {
  console.log(JSON.stringify(data, null, 4));
});

rate.convert("INR", "USD", 5).then( data => {
  console.log(JSON.stringify(data, null, 4));
});

```

## Notes

* It uses `alphavantage`
* For currency code reference : [wiki link](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)

## License

MIT License 2018 © Vikram Singh and [contributors](https://github.com/maverickjoy/stockify/graphs/contributors)

[npm-url]: http://npmjs.org/package/stockify
[npm-image]: https://badge.fury.io/js/stockify.svg

[mit-image]: https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]: https://opensource.org/licenses/MIT
