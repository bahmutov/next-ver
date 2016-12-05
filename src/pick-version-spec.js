'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('pick start version', () => {
  const pick = require('./pick-version')

  it('is a function', () => {
    la(is.fn(pick))
  })

  it('prefers later version over semantic 0.0.0', () => {
    const result = pick('0.0.0-semantic', '1.2.0')
    la(result === '1.2.0', result)
  })

  it('handles missing second argument', () => {
    const result = pick('0.0.0-semantic')
    la(result === '0.0.0-semantic', result)
  })

  it.only('works with "v" tags', () => {
    const result = pick('0.0.0-semantic', 'v2.0.0')
    la(result === '2.0.0', 'should return cleaned version', result)
  })
})
