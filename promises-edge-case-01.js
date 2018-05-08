// --- Nested promises is *usually* a bad smell
// Most of the time you can simply chain them

// Why it's bad?
// --> Because we can end up with the same "callback" hell we're trying to avoid
// --> Because you have to add 'catch' block each time, and it's easy to forget...

function badPromiseChain() {

  // --- Promise 1
  return someAsyncCode()
    .then(answerOne => {
      console.log('answerOne', answerOne)
      // --- Promise 2
      return someOtherAsyncCode()
        .then(answerTwo => {
          console.log('answerTwo', answerTwo)
          return 'Done'
        })
    })
}

function goodPromiseChain() {

  // --- Promise 1
  return someAsyncCode()
    .then(answerOne => {
      console.log('answerOne', answerOne)
      // --- Promise 2
      return someOtherAsyncCode()
    })
    .then(answerTwo => {
      console.log('answerTwo', answerTwo)
      return 'Done'
    })
    .catch(err => {
      console.log('A catch here will catch everything')
      console.log('(reject from both someAsyncCode() and someOtherAsyncCode())')
      console.error(err)
    })
}


function someAsyncCode() {
  return new Promise((resolve, reject) => {
    resolve('123')
  })
}

function someOtherAsyncCode() {
  return new Promise((resolve, reject) => {
    resolve('456')
  })
}

// badPromiseChain()
//   .then(result => {
//     console.log('result', result)
//   })

goodPromiseChain()
  .then(result => {
    console.log('result', result)
  })
