'use strict';

var db = require('./app/config/mongoose'),
app = require('./app/config/express')(db),
server = require('http').Server(app),
io = require('socket.io')(server),
controllers = require('./app/controllers'),
db = require('./app/models');

require('./app/config/passport')();

controllers['socket.io'](io);

/**
 * Routes
 */
require('./app/routes')(app, io);

server.listen(app.get('port'));

module.exports = app;