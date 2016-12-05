'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('comparing two changes', () => {
  const largerChange = require('./larger-change')

  it('is a function', () => {
    la(is.fn(largerChange))
  })

  it('prefers feat over fix', () => {
    const larger = largerChange('feat', 'fix')
    la(larger === 'feat', larger)
  })

  it('prefers feat over fix, order', () => {
    const larger = largerChange('fix', 'feat')
    la(larger === 'feat', larger)
  })

  it('takes change over undefined', () => {
    const larger = largerChange(null, 'fix')
    la(larger === 'fix', larger)
  })
})
