#!/usr/bin/env node

const {computeNextVersion} = require('..')
const ggit = require('ggit')

ggit.fetchTags()
  .then(computeNextVersion)
  .done()
