module.exports = class MissingParamError extends Error {
    constructor (paramName) {
      super(`Missing param: ${paramName}`)
      this.name = 'MissingParamError'
      this.status = 400
      this.error = `Missing param: ${paramName}`
    }
  }
  