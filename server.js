'use strict';

var db = require('./config/mongoose');

var app = require('./config/express')();

require('./config/passport')();

var http = require('http');
http.createServer(app).listen(app.get('port'));

exports = module.exports = app;