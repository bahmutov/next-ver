#!/usr/bin/env node

const decideStartVersion = require('latest-version-or-tag')
const {computeNextVersion} = require('..')
const la = require('lazy-ass')
const is = require('check-more-types')
const debug = require('debug')('next-ver')
const npmUtils = require('npm-utils')

function setVersion (newVersion) {
  const args = require('minimist')(process.argv.slice(2))
  if (!args.go) {
    debug('skipping "npm version" command, because no --go option set')
    return
  }
  if (!newVersion) {
    debug('skipping "npm version" command, no new version')
    return
  }
  debug(`running "npm version %s" command`, newVersion)
  la(is.semver(newVersion), 'invalid new version', newVersion)

  return npmUtils.incrementVersion({
    increment: newVersion
  })
}

decideStartVersion()
  .then(computeNextVersion)
  .then(setVersion)
  .done()
