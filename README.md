# seneca-currency-formatter

```sh
$ npm install
```

## Consul

```sh
$ docker run -p 8400:8400 -p 8500:8500 -p 8600:53/udp -h node1 progrium/consul -server -bootstrap
```

## base

```sh
$ node base-service.js
```

## monitor

```sh
$ node monitor.js
```

## BRL

```sh
$ node formatter-brl-service.js
```

## USD

```sh
$ node formatter-usd-service.js
```

## API

```sh
$ node api-service.js
```

`http://localhost:8000/api/currency/usd?value=100`

```javascript
{
    "value": "$100.00",
    "format": "usd"
}
```

`http://localhost:8000/api/currency/brl?value=100`

```javascript
{
    "value": "R$ 100,00",
    "format": "brl"
}
```