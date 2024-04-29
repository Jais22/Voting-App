const jwt = require('jsonwebtoken')
const httpMocks = require('node-mocks-http')

const authorization = require('../../index')

describe('Middleware Credentials', () => {
  it('', async () => {
    //jwt.verify = jest.fn(() => next())

    var req = httpMocks.createRequest({
      method: 'GET',
      url: '/vampeta',
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjA5NTg0NzAsImV4cCI6MTU2MDk2MjA3MH0.hGt6QTYOQI3GcfDdyLUUVM3-TAGxvBkaWj76zhEgExU'
      }
    })

    var res = httpMocks.createResponse()

    var next = () => {}

    authorization('d13932ff7b254abff4020793ab1dcd4a')(req, res, next)
  })
})
