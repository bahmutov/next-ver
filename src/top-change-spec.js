'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('top change', () => {
  const top = require('./top-change')

  const feat1Commit = {
    firstLine: 'feat(foo): foo commit',
    type: 'feat'
  }

  const feat2Commit = {
    firstLine: 'feat(bar): bar commit',
    type: 'feat'
  }

  const fixCommit = {
    firstLine: 'fix(log): fix logging',
    type: 'fix'
  }

  const regularCommit = {}

  it('feat wins over fix', () => {
    const commits = [feat1Commit, feat2Commit, fixCommit]
    const result = top(commits)
    la(result === 'feat', result)
  })

  it('fix if only fix is available', () => {
    const commits = [fixCommit]
    const result = top(commits)
    la(result === 'fix', result)
  })

  it('undefined without semantic information', () => {
    const commits = [regularCommit]
    const result = top(commits)
    la(is.not.defined(result), result)
  })
})
