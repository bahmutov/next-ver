const debug = require('debug')('next-ver')
const la = require('lazy-ass')
const is = require('check-more-types')
const semver = require('semver')

function pickVersion (packageVersion, tagVersion) {
  debug('picking latest version between %s and tag %s',
    packageVersion, tagVersion)

  la(is.unemptyString(packageVersion),
    'missing package version', packageVersion)
  la(is.maybe.unemptyString(tagVersion), 'missing tag', tagVersion)
  if (!tagVersion) {
    debug('missing tag version, returning package version', packageVersion)
    return packageVersion
  }
  if (!semver.valid(tagVersion)) {
    debug('tag version %s is not semver', tagVersion)
    return packageVersion
  }

  return semver.gt(packageVersion, tagVersion) ? packageVersion : tagVersion
}

module.exports = pickVersion
