var fs = require('fs')
var os = require('os')
var distros = require('./distros.json')

module.exports = function getOs(cb) {
  if(os.platform() == "linux") {
    return getLinuxDistro(cb)
  }
  return cb(null, os.platform())
}

function getLinuxDistro(cb) {
  getReleaseFile(Object.keys(distros),function(e,file) {
    var candidates = distros[file]
    fs.readFile(file,'utf-8',function(e,file) {
      file = file.toLowerCase()
      if(candidates.length===1) return cb(null,candidates[0])
      candidates.forEach(function(candidate) {
        candidate = candidate.split(" ")[0].toLowerCase()
        if(file.indexOf(candidate)>=0) return cb(null,candidate)
      })
    })
  })()
}

function getReleaseFile(names,cb) {
  var index = 0
  return function checkExists() {
    fs.stat(names[index],function(e,stat) {
      if(e || !stat.isFile()) {
        console.log(names[index]+" not found!")
        index++
        return checkExists()
      }
      if(names.length <= index) return cb(new Error("No file unique file found!"))
      cb(null,names[index])
    })
  }
}
