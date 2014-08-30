'use strict';

var fs = require('fs');

fs
	.readdirSync(__dirname)
	.filter(function (file) {
		return (file != 'index.js');
	})
	.forEach(function(file) {
		var modelName = file.replace(/.js/, '').toString();

	  exports[modelName.charAt(0).toUpperCase() + modelName.slice(1)] = require('./' + file);
	});