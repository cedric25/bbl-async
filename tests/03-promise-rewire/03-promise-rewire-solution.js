const expect = require('chai').expect
const sinon = require('sinon')
const rewiremock = require('rewiremock/node')
// or:
// const rewiremock = require('rewiremock').default

describe('[Solution] Testing promise code when in other file', () => {
  describe('When mock answers successfully', () => {
    it('should return \'Mocked answer\'', () => {

      const queryDbStub = sinon.stub().resolves('Mocked answer')

      const databaseServiceStub = {
        queryDb: queryDbStub
      }

      const codeToTest = rewiremock.proxy('./codeToTest', () => ({
        './databaseService': databaseServiceStub,
      }))

      return codeToTest.codeWithPromise()
        .then(result => {
          expect(result).to.equal('Mocked answer')

          sinon.assert.calledOnce(queryDbStub)
          // or:
          expect(queryDbStub.calledOnce).to.be.true
        })

    })
  })

  describe('When mock answers with an error', () => {
    it('should throw an error with message \'Oh oh, fail\'', () => {

      const queryDbStub = sinon.stub().rejects(new Error('Oh oh, fail'))
      // const queryDbStub = sinon.stub().resolves('Mocked answer')

      const databaseServiceStub = {
        queryDb: queryDbStub
      }

      const codeToTest = rewiremock.proxy('./codeToTest', () => ({
        './databaseService': databaseServiceStub,
      }))

      return codeToTest.codeWithPromise()
        .then(() => {
          expect(true, 'Was not supposed to succeed...').to.be.false
          throw new Error('Was not supposed to succeed...')
        })
        .catch(err => {
          expect(err.message).to.equal('Oh oh, fail')
          sinon.assert.calledOnce(queryDbStub)
        })

    })
  })
})
