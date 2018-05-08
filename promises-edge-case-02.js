// --- But sometimes, you need some previous data...

/**
 * Problem
 */
function problem(teamLogin, teamPassword, personId) {

  // --- Promise 1
  return teamLoginHelper.getTeamId(teamLogin, teamPassword)
    .then(teamId => {
      // --- Promise 2
      return teamLoginHelper.registerPersonWithinTeam(personId, teamId)
    })
    .then(() => {
      return teamId // Doesn't work, teamId is only defined in previous 'then' block...
    })
}

/**
 * Solution 1
 * With nested promises...
 */
function withNestedPromise(teamLogin, teamPassword, personId) {

  // --- Promise 1
  return teamLoginHelper.getTeamId(teamLogin, teamPassword)
    .then(teamId => {
      // --- Promise 2
      return teamLoginHelper.registerPersonWithinTeam(personId, teamId)
        .then(() => {
          return teamId
        })
    })
}

/**
 * Solution 2
 * With global context
 */
function withGlobalContext(teamLogin, teamPassword, personId) {

  let teamId = ''

  // --- Promise 1
  return teamLoginHelper.getTeamId(teamLogin, teamPassword)
    .then(teamIdResult => {
      teamId = teamIdResult
      // --- Promise 2
      return teamLoginHelper.registerPersonWithinTeam(personId, teamId)
    })
    .then(() => {
      return teamId
    })
    .catch(err => {
      console.error(err)
      throw err
    })
}

/**
 * Solution 3
 * Transfer what you need to your next 'then' block
 */
function resolveObject(teamLogin, teamPassword, personId) {

  // --- Promise 1
  return teamLoginHelper.getTeamId(teamLogin, teamPassword)
    .then(teamIdResult => {
      // --- Promise 2
      return Promise.all([
        teamLoginHelper.registerPersonWithinTeam(personId, teamIdResult),
        teamIdResult,
      ])
    })
    .then(([registerPersonResult, teamId]) => {
      return teamId
    })
    .catch(err => {
      console.error(err)
      throw err
    })
}

const teamLoginHelper = {

  getTeamId(teamLogin, teamPassword) {
    return new Promise((resolve, reject) => {
      resolve('123')
    })
  },

  registerPersonWithinTeam(personId, teamId) {
    return new Promise((resolve, reject) => {
      resolve('Done')
    })
  }

}

withNestedPromise()
  .then(result => {
    console.log('1. All good', result)
  })

withGlobalContext()
  .then(result => {
    console.log('2. All good', result)
  })

resolveObject()
  .then(result => {
    console.log('3. All good', result)
  })
