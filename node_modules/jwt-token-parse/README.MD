# JWT Token Parse

Middleware para validar se um token JWT foi enviado corretamente e se ainda está válido.

```js
// routes.js
const routes = require("express").Router();
const middleware = require("jwt-token-parse");

routes.use(middleware(secretOrPublicKey));
```
