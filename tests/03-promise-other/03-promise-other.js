const expect = require('chai').expect
const sinon = require('sinon')
const rewiremock = require('rewiremock/node')

describe('Testing promise code when in other file', () => {
  describe('When mock answers successfully', () => {
    it('should return \'Mocked answer\'', () => {

      /**
       * TODO CODE HERE
       * Find a way to mock databaseService.queryDb() and resolve it with 'Mocked answer'
       * Then call codeToTest.codeWithPromise() and check that queryDb() has been called once
       * And check that you get a result of 'Mocked answer'
       */
      console.assert(true === false)

    })
  })

  describe('When mock answers with an error', () => {
    it('should throw an error with message \'Oh oh, fail\'', () => {

      /**
       * TODO CODE HERE
       * Find a way to mock databaseService.queryDb() and reject with new Error('Oh oh, fail')
       * Then call codeToTest.codeWithPromise() and check that queryDb() has been called once
       * And check that you get an Error with a message of 'Oh oh, fail'
       */
      console.assert(true === false)

    })
  })

})
