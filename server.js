
/**
 * Module dependencies
 */

var express = require('express'),
  	bodyParser = require('body-parser'),
  	methodOverride = require('method-override'),
  	errorhandler = require('errorhandler'),
  	morgan = require('morgan'),
  	routes = require('./routes'),
  	models = require('./models'),
  	http = require('http'),
  	path = require('path'),
  	favicon = require('favicon');

var app = module.exports = express();

/**
 * Configuration
 */

// All environments
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

/**
 * Transfer the 'bower_components' folder contents to '/js/vendor' of the 'public' folder.
 */
app.use('/js/vendor', express.static(path.join(__dirname, 'bower_components')));

var env = process.env.NODE_ENV || 'development';

// Development only
if (env === 'development') {
  app.use(errorhandler());
}

// Production only
if (env === 'production') {
}

require('./config/passport')();

/**
 * Routes
 */ 
var users = require('./routes/users');

app.get('/api/users', users.list);
app.get('/api/users/:id', users.get);
app.post('/api/users', users.store);
app.put('/api/users/:id', users.update);
app.delete('/api/users/:id', users.destroy);

app.post('/auth/local', require('./controllers/users').signin);

app.get('*', routes.index);

/**
 * Start the server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
