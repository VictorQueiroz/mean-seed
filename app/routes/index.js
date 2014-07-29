'use strict';

module.exports = function (app) {
	require('./users')(app);

	app.route('*').get(function(req, res) {
  	res.render('index');
  });
};