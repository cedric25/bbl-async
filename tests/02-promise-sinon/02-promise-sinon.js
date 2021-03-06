// Run with:
// npx mocha tests/02-promise-sinon/02-promise-sinon.js

const expect = require('chai').expect
const sinon = require('sinon')
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
    it(`should answer with 'Mocked answer'`, function() {

      // TODO CODE HERE
      console.assert(true === false)

    })
  })
})
