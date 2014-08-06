'use strict';

module.exports = function (app) {
	require("fs").readdirSync("./app/routes").forEach(function(file) {
	  if(file != 'index.js' && file != 'filters.js')
	  	require('./'+file.replace('.js', ''))(app);
	});	

	app.route('*').get(function(req, res) {
  	res.render('index');
  });
};