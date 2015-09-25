# getos

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

### Integration tests

> NOTE: Currently the integration tests only run on Node 0.10 due to native modules for execSync

> 2nd NOTE: Due to failing builds on modern versions of Node, we have removed sleep from the list of dev dependencies.
> This change prevents the integration tests from running. if you wish to run the integration tests, first run `npm install sleep`

The integration tests sanity checks the assumptions we make about the format of the OS files and libraries we depend on against real world OS configurations. These tests currently offer only visual confirmation of the output.

The tests are powered by docker, and must be run from the top level directory of the project. You can run them via

```sh
node tests/runTest.js
```

Since these are powered by docker, you must have docker installed to run the tests. You will notice that the first time the tests run, they will probably take somewhere between 30 minutes and 4 hours to complete. They download a bakers dozen of gigs to build the docker images. Pretty network intensive stuff. Also, if you are a neckbeard and have your HDD partitioned to isolate _/var_ and _/tmp_ on small partitions, the tests will probably crash. _/tmp_ will need ~4GB of free space for the tests to run. _/var_ will need ~20GB to store all the images.

You can also run the tests via

```sh
npm run integration
```

But the fantastic spinner packaged with npm mucks up stdout, so output will be garbled.
