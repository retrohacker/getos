const fs = require('fs');
const platform = require('os').platform();
const symlinks = require('./symlinks.json');

// Copy the files on Windows since it has bad symlink support
const COPY_FILES = (platform === "win32");

Object.keys(symlinks).forEach(function(key) {
  if (COPY_FILES) {
    fs.readFile(__dirname + '/' + symlinks[key], function (err, data) {
      // Log the error and move on...
      if (err) {
        console.error(err);
        return;
      }

      fs.writeFile(__dirname + '/' + key, data, function(err) {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
    return;
  }
  fs.symlink(__dirname + '/' + symlinks[key], __dirname + '/' + key, function(err) {
    if (err) {
      console.error(err);
      return;
    }
  });
});
