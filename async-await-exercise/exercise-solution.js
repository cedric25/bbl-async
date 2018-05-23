const { getOneNumber } = require('./getOneNumber')
const { getSum } = require('./getSum')

// time node async-await-exercise/exercise-solution.js

async function solution() {

  try {
    const numbers = await Promise.all([
      getOneNumber(),
      getOneNumber(),
    ])

    console.log('numberOne:', numbers[0])
    console.log('numberTwo:', numbers[1])

    return await getSum(numbers[0], numbers[1])
  } catch (err) {
    console.error('Problem when running solution() function (Error properly handled!)', err.message || err)
    return -1
  }
}

solution()
  .then(result => {
    console.log('sum:', result)
  })
