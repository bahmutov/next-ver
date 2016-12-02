#!/usr/bin/env node

const join = require('path').join
const cwd = process.cwd()
const pkg = require(join(cwd, 'package.json'))
const R = require('ramda')

console.log('next-ver after', pkg.version)

const ggit = require('ggit')
ggit.commits.afterLastTag()
  .then(R.map(R.prop('message')))
  .then(console.log)
  .done()
