'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const debug = require('debug')('next-ver')
const semver = require('semver')

/*
  given current version, like "2.3.1" and a change type
  "break", "feat", "fix" or undefined
  returns the next version.

  2.3.1 + "break" -> 3.0.0
  2.3.1 + "feat" -> 2.4.0
  2.3.1 + "fix" -> 2.3.2

  everything else should not change the version
*/
function increment (version, type) {
  debug('incrementing %s by %s', version, type)

  if (!is.semver(version)) {
    debug('invalid starting version %s', version)
    version = semver.clean(version)
  }

  // cannot use check-more-types.semver because it is too
  // strict and does not allow things like "0.0.0-alpha"
  // la(is.semver(version), 'invalid starting version', version)
  la(is.unemptyString(version), 'missing starting version', version)

  la(isSemanticChange(type), 'invalid change', type)
  const semverIncrement = semverType(type)
  if (!semverIncrement) {
    return
  }
  return semver.inc(version, semverIncrement)
}

function isSemanticChange (type) {
  return is.oneOf(['break', 'feat', 'fix', 'chore', undefined], type)
}

function semverType (type) {
  const types = {
    break: 'major',
    feat: 'minor',
    fix: 'patch'
  }
  return types[type]
}

module.exports = increment
