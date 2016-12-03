/*
  given two semantic version changes, like "fix" and "feat",
  returns the larger one. For example:
    "fix", "feat" -> "feat"
    "feat", "chore" -> "feat"
    "chore", undefined -> "chore"
    undefined, undefined -> undefined
*/
function largerChange (a, b) {
  if (!a) {
    return b
  }
  if (!b) {
    return a
  }
  if (a === 'chore') {
    return b
  }
  if (b === 'chore') {
    return a
  }
  if (a === 'feat') {
    return 'feat'
  }
  if (b === 'feat') {
    return 'feat'
  }
  return a
}

module.exports = largerChange
