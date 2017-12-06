exports['next-ver shows version on --version 1'] = `

  command: node bin-path --version
  code: 0
  failed: false
  killed: false
  signal: null
  timedOut: false

  stdout:
  -------
  next-ver 0.0.0-development
  Tells you the next semantic version for your local package
  -------
  stderr:
  -------
  
  -------
  
`

exports['next-ver shows version on -v 1'] = `

  command: node bin-path -v
  code: 0
  failed: false
  killed: false
  signal: null
  timedOut: false

  stdout:
  -------
  next-ver 0.0.0-development
  Tells you the next semantic version for your local package
  -------
  stderr:
  -------
  
  -------
  
`

exports['next-ver shows only version number on --silent 1'] = `

  command: node bin-path --silent
  code: 0
  failed: false
  killed: false
  signal: null
  timedOut: false

  stdout:
  -------
  1.8.0
  -------
  stderr:
  -------
  
  -------
  
`
