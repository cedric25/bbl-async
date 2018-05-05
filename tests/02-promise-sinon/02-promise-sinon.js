// const expect = require('chai').expect
// const sinon = require('sinon')
const databaseService = require('./databaseService')

function codeWithPromise() {

  return databaseService.queryDb()
    .then(function(data) {
      return data
    })
    .catch(err => {
      console.error(err)
    })

}

describe('Testing promise code with mock', () => {
  describe('When calling codeWithPromise() function', () => {
    it('should answer with \'Mocked answer\'', function() {

      // CODE HERE
      console.assert(true === false)

    })
  })
})
