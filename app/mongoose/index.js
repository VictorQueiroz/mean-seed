'use strict';

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/myapp');

var connection = mongoose.connection;

connection.once('open', function () {
	console.log('The magic is hapenning at mongoose.');
});

connection.on('error', console.error.bind(console, 'Connection error:'));