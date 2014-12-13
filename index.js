'use strict';

var path = require('path');
var http = require('http');
var express = require('express');
		
require(path.join(__dirname, 'app', 'mongoose'));

var app = express();
var api = express.Router();
var session = require('express-session');
var passport = require(path.join(__dirname, 'app', 'passport'));
var bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);

app.set('port', process.env.PORT || 3000);
app.set('views', 'app/views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, defer: true }));
app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: 'sim7turismo-70jk50j893u236gdt7cvhsdnvbti6j439853',
	store: new MongoStore({
		db: require('mongoose').connection.db,
		collection: 'sessions'
	})
}));
app.use(passport.initialize());
app.use(passport.session());

var server = http.Server(app);
var io = require('socket.io')(server);

server.listen(app.get('port'), function () {
	console.log('We\'re making love with Express.js at localhost:3000');
});

app.use('/api', api);

require(path.join(__dirname, 'app', 'routes'))(api);

app.get('*', function (req, res) {
	res.render('index')
});

io.sockets.on('connection', function (socket) {
	socket.emit('connection', socket.id);

	require(path.join(__dirname, 'app', 'io'))(socket, io);
});