'use strict';

var db = require('../config/mongoose'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var UserSchema = new Schema ({
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
	},

	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'Post'
	}]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;