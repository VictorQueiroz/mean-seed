'use strict';

var db = require('./app/config/mongoose');

var app = require('./app/config/express')();

var server = require('http').Server(app);

var io = require('socket.io')(server);

require('./app/config/passport')();

require('./app/controllers/socket.io')(io);

server.listen(app.get('port'));

/**
 * Routes
 */
require('./app/routes')(app);

exports = module.exports = app;