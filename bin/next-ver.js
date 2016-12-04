#!/usr/bin/env node

const join = require('path').join
const cwd = process.cwd()
const pkg = require(join(cwd, 'package.json'))
const R = require('ramda')
const simple = require('simple-commit-message')
const la = require('lazy-ass')
const is = require('check-more-types')
const largerChange = require('../src/larger-change')
const {increment} = require('..')
const debug = require('debug')('next-ver')
const ggit = require('ggit')

debug('next-ver starts with version %s', pkg.version)

function addSemverInformation (commits) {
  return commits.map(commit => {
    commit.semver = simple.parse(commit.message)
    return commit
  })
}

function onlySemanticCommits (commits) {
  return commits.filter(R.prop('semver'))
}

function computeTopChange (semanticCommits) {
  return semanticCommits.reduce((change, commit) => {
    return largerChange(change, commit.type)
  }, undefined)
}

function printResult (nextVersion) {
  if (!nextVersion) {
    console.log('no new version judging by commits')
    return
  }
  console.log('next version should be', nextVersion)
}

function printFoundSemanticCommits (commits) {
  debug('semantic commits')
  debug(commits)
  la(is.array(commits), 'expected list of commits', commits)
}

function printChange (feat) {
  debug('semantic change "%s"', feat)
}

ggit.fetchTags()
  .then(computeNextVersion)
  .done()

function computeNextVersion () {
  return ggit.commits.afterLastTag()
    .then(addSemverInformation)
    .then(onlySemanticCommits)
    .then(R.tap(printFoundSemanticCommits))
    .then(R.map(R.prop('semver')))
    .then(computeTopChange)
    .then(R.tap(printChange))
    .then(R.partial(increment, [pkg.version]))
    .then(printResult)
}
