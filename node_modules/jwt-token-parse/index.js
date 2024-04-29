const jwt = require('jsonwebtoken')

const messageError = (statusCode, res) => message =>
  res.status(statusCode).send({ error: message })

const authorization = secretOrPublicKey => (req, res, next) => {
  const statusCode = messageError(401, res)

  const { authorization } = req.headers

  if (!authorization) return statusCode('No token provided')

  const parts = authorization.split(' ')

  if (!parts.length === 2) return statusCode('Token error')

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) return statusCode('Token malformatted')

  jwt.verify(token, secretOrPublicKey, (err, decoded) => {
    if (err) return statusCode(`Token invalid: ${err.message}`)
    return next()
  })
}

module.exports = authorization
