const simpleParser = require('simple-commit-message')
const R = require('ramda')

function parseCommit (commit) {
  const semantic = simpleParser.parse(commit.message)
  const result = R.clone(commit)
  result.semver = semantic
  return result
}

module.exports = parseCommit
