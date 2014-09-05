var releaseRegex = /distrib_release=(.*)/
var codenameRegex = /distrib_codename=(.*)/

module.exports = function ubuntuCustomLogic(os,file,cb) {
  console.log(file)
  var codename = file.match(codenameRegex)
  console.log(JSON.stringify(codename))
  if(codename && codename.length === 2) os.codename = codename[1]
  var release = file.match(releaseRegex)
  console.log(JSON.stringify(release))
  if(release && release.length === 2) os.release = release[1]
  cb(null,os)
}
