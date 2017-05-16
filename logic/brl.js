const currencyFormatter = require('currency-formatter');

module.exports = function brl (options) {
  this.add('role:currency,format:brl', formatBrl);

  function formatBrl (msg, done) {
    var value = currencyFormatter.format(msg.value, { code: 'BRL' });
    done(null, {
      value: value,
      format: 'brl'
    });
  }
};
