function queryDb() {

  console.log(' >>> In queryDb method!')

  return new Promise((resolve, reject) => {
    // Here just simulating a wait time
    setTimeout(() => {
      resolve('Here is your answer!')
    }, 800)
  })

}

module.exports = {
  queryDb,
}
