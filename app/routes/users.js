'use strict';

var controllers = require('../controllers');

module.exports = function (app) {
	var usersCtrl = controllers.users;

	app.route('/api/users').get(usersCtrl.list);
	app.route('/api/users/:id').get(usersCtrl.get);
	app.route('/api/users').post(usersCtrl.store);
	app.route('/api/users/:id').put(usersCtrl.update);
	app.route('/api/users/:id').delete(usersCtrl.destroy);

	app.route('/auth/local').post(usersCtrl.signin);	
};