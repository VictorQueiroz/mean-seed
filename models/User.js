var db = require('./index'),
		mongoose = db.mongoose,
		Schema = mongoose.Schema,
		bcrypt = require('bcrypt');

var users = new Schema ({
	name: { type: String, default: '', lowercase: true, trim: true },
	email: { type: String, default: 'anything@domain.com', lowercase: true },
	password: { type: String }
});

var User = mongoose.model('User', users);

exports.list = function (req, res) {
	User
		.find()
		.exec(function (err, user) {
			if(err)
				console.log(err);
			else
				res.json(user);
		});
};

exports.get = function (req, res) {};

exports.store = function (req, res) {
	var data = req.body;
	var user = new User({
		name: data.name,
		password: data.password
	});

	user.save(function(err, data) {
		if(err)
			res.json(err)
		else 
			res.json(data);
	});
};

exports.update = function (req, res) {};

exports.destroy = function (req, res) {};