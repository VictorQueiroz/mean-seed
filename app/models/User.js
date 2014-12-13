'use strict';

var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var SALT_WORK_FACTOR = 10;

function getFullName () {
	return this.firstName + ' ' + this.lastName;
}

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	password: String,
	phone: Number,
	email: {
		type: String,
		unique: true
	},
	sockets: [{
		id: String,
		createdAt: Date
	}]
});

UserSchema.virtual('fullName').get(getFullName);

UserSchema.virtual('name').get(getFullName);

UserSchema.pre('save', function (next) {
	var user = this;

	if (!this.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if(err) return next(err);

		bcrypt.hash(user.password, salt, function (err, hash) {
			if(err) return next(err);

			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;