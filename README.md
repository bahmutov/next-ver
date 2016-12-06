# next-ver

> Tells you the next semantic version for your local package

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Install and use

Imagine a local package with current version 2.3.0 and a single semantic
commit `fix(something): fix the login`. This tools computes the next
version that should be used.

```sh
npm install -g next-ver
next-ver
next version should be 2.3.1
```

Then you can publish, for example using
[npm version](https://docs.npmjs.com/cli/version) command or one of the
good helper CLI tools, like [publish-please](https://github.com/inikulin/publish-please)
or [np](https://github.com/sindresorhus/np)

```sh
npm version 2.3.1
```

## Semantic version rules

A semantic version has form "major.minor.patch"

A typical semantic commit has message of the form "type(scope): message".
Commits that do not follow this format are ignored when computing next version.

If there is a commit `fix(something): ...` then new version should increment
the "patch" number. A commit `feat(something): ...` will increment the
"minor" number. Finally, a commit with text "BREAKING" anywhere in the message
or the message body text will increment the "major" number.

When there are multiple numbers, the will be only the highest single digit
increment. For example, these 4 commits will increment the "minor" number
only.

```
fix(this): ...
fix(that): ...
feat(log): ...
feat(server): ...
```

## Related

I recommend enforcing commit message format using
[pre-git](https://github.com/bahmutov/pre-git) with its default
[simple-commit-message](https://github.com/bahmutov/simple-commit-message#readme)
format validator. They work great with
[semantic-release](https://github.com/semantic-release/semantic-release) tool.

## Testing and development

Uses separate repo [next-ver-test](https://github.com/bahmutov/next-ver-test)
for testing this tool via [dont-break](https://github.com/bahmutov/dont-break)

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2016


* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)


License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/next-ver/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/next-ver.svg?downloads=true
[npm-url]: https://npmjs.org/package/next-ver
[ci-image]: https://travis-ci.org/bahmutov/next-ver.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/next-ver
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
