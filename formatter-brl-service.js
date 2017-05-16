const Seneca = require('seneca');

Seneca({tag: 'brl'})
  .use('./logic/brl')
  .listen({
    pin: 'role:currency,format:brl',
    port: 9002
  })
  .ready(() => {
    const seneca = this;
    console.log('brl', seneca.id);
  });
