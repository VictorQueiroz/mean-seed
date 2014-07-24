'use strict';

var db = require('../config/mongoose'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var userSchema = new Schema ({
	username: { type: String },
	name: { type: String, default: '', lowercase: true, trim: true },
	email: { type: String, default: '', lowercase: true },
	password: { type: String }
});

var User = mongoose.model('User', userSchema);

module.exports = User;