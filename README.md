# getos

[![Build Status](https://travis-ci.org/retrohacker/getos.png?branch=master)](https://travis-ci.org/retrohacker/getos) ![](https://img.shields.io/github/issues/wblankenship/getos.svg) ![](https://img.shields.io/npm/dm/getos.svg) ![](https://img.shields.io/npm/dt/getos.svg) ![](https://img.shields.io/npm/v/getos.svg) ![](https://img.shields.io/npm/l/express.svg)  ![](https://img.shields.io/twitter/url/https/github.com/wblankenship/getos.svg?style=social)

[![NPM](https://nodei.co/npm/getos.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/getos/)[![NPM](https://nodei.co/npm-dl/getos.png?months=9&height=3)](https://nodei.co/npm/getos/)


Get the OS/Distribution name of the environment you are working on

## Problem

`os.platform()` returns `linux`. If you want the distrubtion name, you're out of luck.

## Solution

This. Simply call:

```js
var getos = require('getos')

getos(function(e,os) {
  if(e) return console.log(e)
  console.log("Your OS is:" +JSON.stringify(os))
})
```

The `os` object conforms to:

```js
{
  dist:[DIST NAME],
  codename:[CODENAME],
  release:[VERSION]
}
```

## Disclaimer
Check `os.json` in this repo. Any distribution that *shares* a common resource file with another distrubtion is currently untested. These are the arrays of distrubitons with more than 1 member. If you are using one of these distrubtions, please submit an issue letting me know if it works. If it fails, please post the content of the file.

If you have a distrubtion *not* in `os.json`, please identify your resource file and submit it's name and content along with your distrbution/version in an issue.

Thanks for helping make this tool great.

## Tests

We have two forms of tests, unit tests and integration tests.

### Unit Tests

Unit tests stub out the behaviour of the OS files and libraries we depend on to ensure the behaviour of the application is sound. You can run these simply by running `npm test`
