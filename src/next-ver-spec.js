'use strict'

const execaWrap = require('execa-wrap')
const snapshot = require('snap-shot-it')
const path = require('path')

/* global describe, it */
describe('next-ver', () => {
  const bin = path.join(__dirname, '..', 'bin', 'next-ver.js')

  const normalize = (s) =>
    s.replace(bin, 'bin-path')

  it('shows version on --version', function () {
    this.timeout(10000)
    return execaWrap('node', [bin, '--version'])
      .then(normalize)
      .then(snapshot)
  })

  it('shows version on -v', function () {
    this.timeout(10000)
    return execaWrap('node', [bin, '-v'])
      .then(normalize)
      .then(snapshot)
  })
})
