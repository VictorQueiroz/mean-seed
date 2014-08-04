'use strict';

var db = require('./app/config/mongoose'),
app = require('./app/config/express')(db),
server = require('http').Server(app),
io = require('socket.io')(server),
controllers = require('./app/controllers');

require('./app/config/passport')();

controllers['socket.io'](io);

server.listen(app.get('port'));

/**
 * Routes
 */
require('./app/routes')(app);

exports = module.exports = app;