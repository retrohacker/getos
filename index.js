var fs = require('fs')
var os = require('os')
var distros = require('./os.json')
var cachedDistro = null

module.exports = function getOs(cb) {
  if(os.platform() == "linux") {
    return getLinuxDistro(cb)
  }
  return cb(null, os.platform())
}

function getLinuxDistro(cb) {
  if(cachedDistro) return cb(null,cachedDistro)
  getReleaseFile(Object.keys(distros),function(e,file) {
    var candidates = distros[file]
    fs.readFile(file,'utf-8',function(e,file) {
      file = file.toLowerCase()
      if(candidates.length===1) {
        cachedDistro = candidates[0]
        return cb(null,candidates[0])
      }
      candidates.forEach(function(candidate) {
        check = candidate.split(" ")[0].toLowerCase()
        if(file.indexOf(check)>=0) {
          cachedDistro = candidate
          return cb(null,candidate)
        }
      })
    })
  })()
}

function getReleaseFile(names,cb) {
  var index = 0
  return function checkExists() {
    fs.stat(names[index],function(e,stat) {
      if(e || !stat.isFile()) {
        index++
        if(names.length <= index) return cb(new Error("No file unique file found!"))
        return checkExists()
      }
      cb(null,names[index])
    })
  }
}
