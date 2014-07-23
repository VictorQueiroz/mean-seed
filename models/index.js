var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-seed');

var db = mongoose.connection;

// Return error
db.on('error', function (err) {
	console.log('Error during connection: ', err);
});

// Return
db.once('open', function () {
	console.log('Connection to the database successfully!');
});

exports.mongoose = mongoose;