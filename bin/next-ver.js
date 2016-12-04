#!/usr/bin/env node

const {computeNextVersion, decideStartVersion} = require('..')
const ggit = require('ggit')

ggit.fetchTags()
  .then(decideStartVersion)
  .then(computeNextVersion)
  .done()
