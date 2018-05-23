// Run it with:
// time node async-await/goodCode.js

async function asyncAwaitColors() {

  console.log('Calling asynchronous code...')

  try {
    const colors = await Promise.all([
      getHexCodeForColor('blue'),
      getHexCodeForColor('red'),
    ])
    console.log('colorOne:', colors[0])
    console.log('colorTwo:', colors[1])
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
