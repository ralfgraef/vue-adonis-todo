'use strict'

class UserController {
  register({ request }) {
    const { email, password } = request.all()

    console.log(email, password)

    return { message: 'Hello World' }
  }
}

module.exports = UserController
