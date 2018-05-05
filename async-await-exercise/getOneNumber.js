/**
 * Return an integer between 1 and 10
 */
function getOneNumber() {

  const randomNumber = Math.floor(Math.random() * 10) + 1

  return new Promise((resolve, reject) => {
    // Here just simulating a wait time
    setTimeout(() => {
      if (randomNumber === 7) {
      // if (randomNumber % 2 === 0) {
        reject(new Error('Random number was 7, bad number, sorry try again...'))
      } else {
        resolve(randomNumber)
      }
    }, 800)
  })

}

module.exports = {
  getOneNumber,
}
