const Seneca = require('seneca');

Seneca({tag: 'usd'})
  .test('print')
  .use('consul-registry', {
    host: '127.0.0.1'
  })
  .use('./logic/usd')
  .use('mesh', {
    pin: 'role:currency,format:usd',
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
    console.log('usd', seneca.id);
  });
