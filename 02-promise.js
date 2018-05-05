
function promiseVersion() {

  console.log('(promise) Calling asynchronous code...')

  myAsynchronousCode()
    .then(function(data) {
      console.log('data:', data)
    })
    .catch(err => {
      console.error(err)
    })

}

function myAsynchronousCode() {

  // HTTP request to a server...
  // Query a database...

  return new Promise((resolve, reject) => {
    // Here just simulating a wait time
    setTimeout(() => {
      resolve('Here is your answer!')
    }, 800)
  })

}

function myAsynchronousCodeError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Oh oh, something went wrong :(')
    }, 800)
  })
}

promiseVersion()
