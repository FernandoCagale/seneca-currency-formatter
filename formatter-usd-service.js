const Seneca = require('seneca');

Seneca({tag: 'usd'})
  .use('./logic/usd')
  .listen({
    pin: 'role:currency,format:usd',
    port: 9001
  })
  .ready(() => {
    const seneca = this;
    console.log('usd', seneca.id);
  });
