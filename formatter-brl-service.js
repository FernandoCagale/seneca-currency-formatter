const Seneca = require('seneca');

Seneca({tag: 'brl'})
  .test('print')
  .use('consul-registry', {
    host: '127.0.0.1'
  })
  .use('./logic/brl')
  .use('mesh', {
    pin: 'role:currency,format:brl',
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })
  .ready(() => {
    const seneca = this;
    console.log('brl', seneca.id);
  });
