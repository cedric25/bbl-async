
function callbackVersion() {

  console.log('(callback) Calling asynchronous code...')

  myAsynchronousCode(function(err, data) {
    if (err) {
      console.error(err)
      return
    }
    console.log('data:', data)
  })

}

function myAsynchronousCode(cb) {

  // HTTP request to a server...
  // Query a database...

  // Here just simulating a wait time
  setTimeout(() => {
    cb(null, 'Here is your answer!')
  }, 800)

}

function myAsynchronousCodeError(cb) {
  setTimeout(() => {
    cb('Oh oh, something went wrong :(')
  }, 800)
}

callbackVersion()
