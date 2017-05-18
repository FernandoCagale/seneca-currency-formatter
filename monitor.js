const Seneca = require('seneca');
const Mesh = require('seneca-mesh');

Seneca({log: 'silent'})
  .use('consul-registry', {
    host: '127.0.0.1'
  })
  .use(Mesh, {
    monitor: true,
    discover: {
      registry: {
        active: true
      },
      multicast: {
        active: false
      }
    }
  });
