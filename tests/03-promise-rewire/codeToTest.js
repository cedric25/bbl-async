const { queryDb } = require('./databaseService')

function codeWithPromise() {

  return queryDb()
    .then(function(data) {
      return data
    })
    .catch(err => {
      throw err
    })

}

module.exports = {
  codeWithPromise,
}
