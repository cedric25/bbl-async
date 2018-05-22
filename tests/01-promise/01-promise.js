// Run with:
// npx mocha tests/01-promise/01-promise.js

const expect = require('chai').expect

function codeWithPromise() {

  return myAsynchronousCode()
    .then(function(data) {
      return data
    })
    .catch(err => {
      console.error(err)
    })

}

function myAsynchronousCode() {

  console.log(' >>> In async method!')

  // HTTP request to a server...
  // Query a database...

  return new Promise((resolve, reject) => {
    // Here just simulating a wait time
    setTimeout(() => {
      resolve('Here is your answer!')
    }, 800)
  })

}

describe('Testing promise code', () => {
  describe('When calling my codeWithPromise() function', () => {
    it('should answer with \'Here is your answer!\'', function() {

      // TODO CODE HERE
      console.assert(true === false)

    })
  })
})
