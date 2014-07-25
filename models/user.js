'use strict';

var db = require('../config/mongoose'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var userSchema = new Schema ({
	username: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true
	}
});

var User = mongoose.model('User', userSchema);

module.exports = User;