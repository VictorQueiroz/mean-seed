'use strict';

var db = require('./app/config/mongoose');

var app = require('./app/config/express')();

require('./app/config/passport')();

var server = require('http').Server(app);

var io = require('socket.io')(server);
var fs = require('fs');

server.listen(app.get('port'));

io.on('connection', function (socket) {
	// Events here!
});

exports = module.exports = app;