'use strict';

var db = require('../config/mongoose'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		_ = require('underscore-node');

var UserSchema = new Schema ({
	username: {
		type: String
	},

	name: {
		type: String
	},

	password: {
		type: String
	},

	email: {
		type: String
	},

	fb_id: {
		type: String
	}
});

// Protect the users password
UserSchema.set('toJSON', {
	transform: function (doc, user, options) {
		return _.omit(user, 'password', 'fb_id');
	}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;