const Seneca = require('seneca');
const Joi = require('joi');

const Hapi = require('hapi');

Seneca({tag: 'api'})
  .client({
    pin: 'role:currency,format:usd',
    port: 9001
  })
  .client({
    pin: 'role:currency,format:brl',
    port: 9002
  })
  .ready(function () {
    const seneca = this;
    const server = new Hapi.Server();

    server.connection({
      host: 'localhost',
      port: 8000
    });

    server.route({
      method: 'GET',
      path: '/api/currency/{format}',
      handler: (req, reply) => {
        seneca.act({
          role: 'currency',
          format: req.params.format,
          value: req.query.value
        }, (err, out) => {
          reply(err || out);
        });
      },
      config: {
        validate: {
          params: {
            format: Joi
              .any()
              .valid('usd', 'brl')
              .required()
          },
          query: {
            value: Joi
              .number()
              .required()
          }
        }
      }
    });

    server.start(() => {
      console.log('api', server.info.host, server.info.port);
    });
  });
