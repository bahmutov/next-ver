#!/usr/bin/env node

const join = require('path').join
const cwd = process.cwd()
const pkg = require(join(cwd, 'package.json'))

console.log('next-ver after', pkg.version)

const ggit = require('ggit')
ggit.commits.all(cwd)
  .then(console.log)
  .done()
