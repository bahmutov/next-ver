const ggit = require('ggit')
const join = require('path').join
const debug = require('debug')('next-ver')
const la = require('lazy-ass')
const is = require('check-more-types')
const R = require('ramda')
const pickVersion = require('./pick-version')

function printTags (list) {
  debug('fetched all tags')
  debug(list)
}

function decideStartVersion () {
  const cwd = process.cwd()
  const pkg = require(join(cwd, 'package.json'))
  debug('package has version %s', pkg.version)
  la(is.unemptyString(pkg.version),
    'missing version in package file', pkg)

  const vTagsOnly = false
  return ggit.tags(vTagsOnly)
    .then(R.tap(printTags))
    .then(R.last)
    .then(R.prop('tag'))
    .then(pickVersion.bind(null, pkg.version))
    // if something goes wrong, use version from the package
    .catch(R.always(pkg.version))
}

module.exports = decideStartVersion
