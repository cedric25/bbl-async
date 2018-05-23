const expect = require('chai').expect
const sinon = require('sinon')
const databaseService = require('./databaseService')

// Tempting to write:
// const { queryDb } = require('./database-service')
// But sinon can't modify functions, only objects with functions inside for example

function codeWithPromise() {

  return databaseService.queryDb()
    .then(function(data) {
      return data
    })
    .catch(err => {
      console.error(err)
    })

}

describe('[Solution] Testing promise code with mock', () => {
  describe('When calling asynchronous function', () => {
    it('should answer with \'Mocked answer\'', function() {

      const queryDbStub = sinon.stub(databaseService, 'queryDb')
        .resolves('Mocked answer')

      return codeWithPromise()
        .then(result => {
          expect(result).to.equal('Mocked answer')

          sinon.assert.calledOnce(queryDbStub)
          // or:
          expect(queryDbStub.calledOnce).to.be.true
        })

    })
  })
})
