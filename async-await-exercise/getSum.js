function getSum(numberOne, numberTwo) {

  return new Promise((resolve, reject) => {

    // Here just simulating a wait time
    // setTimeout(() => {
    //   resolve(numberOne + numberTwo)
    // }, 800)

    // Reject after a delay
    setTimeout(() => {
      reject(new Error('Add 2 numbers is too hard for me :('))
    }, 800)
  })

}

module.exports = {
  getSum,
}
