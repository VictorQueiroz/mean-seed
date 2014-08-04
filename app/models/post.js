'use strict';

var db = require('../config/mongoose'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var PostSchema = new Schema ({
	title: {
		type: String,
		required: true
	},

	body: {
		type: String,
		required: true
	},

	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;