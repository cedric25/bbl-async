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
    }, 1000)
  })

}

describe('[Solution] Testing promise code', () => {
  describe('When calling my asynchronous function', () => {
    it('should answer with \'Here is your answer!\'', function(done) {

      codeWithPromise()
        .then(result => {
          // console.assert(result === 'Here is your answer!')
          expect(result).to.equal('Here is your answer!')
          done()
        })
        .catch(err => {
          done(err)
        })

    })
  })
})
