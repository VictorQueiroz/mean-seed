'use strict';

var db = require('../config/mongoose'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var RoleSchema = new Schema ({
	name: {
		type: String,
		required: true
	},
});

var Role = mongoose.model('Role', RoleSchema);

module.exports = Role;