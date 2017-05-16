# seneca-currency-formatter

```sh
$ npm install
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