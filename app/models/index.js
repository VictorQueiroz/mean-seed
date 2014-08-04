'use strict';

var fs = require('fs');

fs.readdirSync("./app/models").forEach(function(file) {
  if(file != 'index.js')
  	exports[file.replace('.js', '')] = require('./' + file);
});