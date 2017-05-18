var Seneca = require('seneca');
var Mesh = require('seneca-mesh');

Seneca({tag: 'base'})
  .test('print')
  .use('consul-registry', {
    host: '127.0.0.1'
  })
  .use(Mesh, {
    isbase: true,
    port: 39002,
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  })
  .ready(function () {
    console.log('base', this.id);
  });
