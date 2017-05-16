const currencyFormatter = require('currency-formatter');

module.exports = function usd (options) {
  this.add('role:currency,format:usd', formatUsd);

  function formatUsd (msg, done) {
    const value = currencyFormatter.format(msg.value, { code: 'USD' });
    done(null, {
      value: value,
      format: 'usd'
    });
  }
};
