GETOS
---

A simple npm utility to supplement `os.platform()`

# Problem
`os.platform()` returns `linux`. If you want the distrubtion name, you are S.O.L.

# Solution
This. Simply call

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
  "dist":[DIST NAME]
  "codename":[CODENAME]
  "release":[VERSION]
}
```

# Disclaimer
Check `os.json` in this repo. Any distribution that *shares* a common resource file with another distrubtion is currently untested. These are the arrays of distrubitons with more than 1 member. If you are using one of these distrubtions, please submit an issue letting me know if it works. If it fails, please post the content of the file.

If you have a distrubtion *not* in `os.json`, please identify your resource file and submit it's name and content along with your distrbution/version in an issue.

Thanks for helping make this tool great.

# TESTS

The tests currently offer only visual confirmation of the output (since we don't really have a specification we conform to).

The tests are powered by docker, and must be run from the top level directory of the project. You can run them via

```
node tests/runTest.js
```

They are powered by docker, so you must have docker installed to run the tests. You will notice that the first time the tests run, they will probably take somewhere between 30 minutes and 4 hours to complete. They download a bakers dozen of gigs to build the docker images. Pretty network intensive stuff. Also, if you are a neckbeard and have your HDD partitioned to isolate _/var_ and _/tmp_ on small partions, the tests will probably crash. _/tmp_ will need ~4GB of free space for the tests to run. _/var_ will need ~20GB to store all the images.

You can also run the tests via

```
npm test
```

But the fantastic spinner packaged with npm mucks up stdout, so output will be garbaled.
