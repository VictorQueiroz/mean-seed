'use strict';

var fs = require('fs');

fs.readdirSync("./app/controllers").forEach(function(file) {
  if(file != 'index.js')
  	exports[file.replace('.js', '')] = require('./' + file);
});