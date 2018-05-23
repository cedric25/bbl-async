// Run it with:
// time node async-await/badCode.js

async function asyncAwaitColors() {

  console.log('Calling asynchronous code...')

  try {
    const colorOne = await getHexCodeForColor('blue')
    const colorTwo = await getHexCodeForColor('red')
    console.log('colorOne:', colorOne)
    console.log('colorTwo:', colorTwo)
  } catch (err) {
    console.error(err)
  }

}

function getHexCodeForColor(color) {

  const colorCode = color === 'blue' ? '#0000ff' : '#ff0000'

  return new Promise((resolve, reject) => {
    // Here just simulating a wait time
    setTimeout(() => {
      resolve(colorCode)
    }, 800)
  })

}

(async function run() {
  await asyncAwaitColors()
})()
