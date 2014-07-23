
/**
 * Module dependencies
 */

var express 				= require('express'),
  	bodyParser 			= require('body-parser'),
  	methodOverride 	= require('method-override'),
  	errorHandler 		= require('error-handler'),
  	morgan 					= require('morgan'),
  	routes 					= require('./routes'),
  	models 					= require('./models'),
  	http 						= require('http'),
  	path 						= require('path'),
  	favicon					= require('favicon');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// // development only
// if (env === 'development') {
//   app.use(express.errorHandler());
// }

// // production only
// if (env === 'production') {
//   // TODO
// }

/**
 * Routes
 */
var users = require('./routes/users');

app.get('/', routes.index);

app.get('/api/users', users.all);
app.get('/api/users/:id', users.get);
app.post('/api/users', users.store);
app.put('/api/users/:id', users.update);
app.delete('/api/users/:id', users.destroy);

/**
 * Start the server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});