// Run it with:
// node promises-nesting-and-context/promises-edge-case-01.js

// --- Nested promises is *usually* a bad smell
// Most of the time you can simply chain them

// Why it's bad?
// --> Because we can end up with the same "callback" hell we're trying to avoid
// --> Because an exception in your nested promise won't be caught by the outer 'catch' block (if no return)
//     You have to add another 'catch' block, and it's easy to forget...

function badPromiseChain() {

  // --- Promise 1
  return someAsyncCode()
    .then(answerOne => {
      console.log('answerOne', answerOne)
      // --- Promise 2
      // someOtherAsyncCode()
      return someOtherAsyncCode()
        .then(answerTwo => {
          console.log('answerTwo', answerTwo)
          return 'Done'
        })
        .catch(err => {
          console.error('Inner catch block!')
          throw err
        })
    })
    .catch(err => {
      console.error('Outer catch block!')
      throw err
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
      throw err
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
    // setTimeout(() => {
    //   reject('Oh oh, fail :(')
    // }, 1000)
  })
}

badPromiseChain()
  .then(result => {
    console.log('result', result)
  })
  .catch(err => {
    console.log('Something went wrong...')
  })

// goodPromiseChain()
//   .then(result => {
//     console.log('result', result)
//   })
//   .catch(err => {
//     console.log('Something went wrong...')
//   })
