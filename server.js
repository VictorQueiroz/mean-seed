'use strict';

var db = require('./config/mongoose');

var app = require('./config/express')();

require('./config/passport')();

var usersCtrl = require('./controllers').users;

app.route('/api/users').get(usersCtrl.list);
app.route('/api/users/:id').get(usersCtrl.get);
app.route('/api/users').post(usersCtrl.store);
app.route('/api/users/:id').put(usersCtrl.update);
app.route('/api/users/:id').delete(usersCtrl.destroy);

app.route('/auth/local').post(usersCtrl.signin);

app.route('*').get(function(req, res) {
  res.render('index');
});

app.listen(app.get('port'));

exports = module.exports = app;