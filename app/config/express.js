'use strict';

var express 			= require('express'),
  bodyParser 			= require('body-parser'),
  cors            = require('cors'),
  methodOverride 	= require('method-override'),
  errorhandler 		= require('errorhandler'),
  morgan 					= require('morgan'),
  http 						= require('http'),
  path 						= require('path'),
  favicon					= require('favicon');

module.exports = function () {
  var app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../../public')));

  /**
   * Transfer the 'bower_components' folder contents to '/js/vendor' of the 'public' folder.
   */
  app.use('/js/vendor', express.static(path.join(__dirname, '../../bower_components')));
  console.log(path.join(__dirname, '../../bower_components'));

  var env = process.env.NODE_ENV || 'development';

  // Development only
  if (env === 'development') {
    app.use(errorhandler());
  }

  // Production only
  if (env === 'production') {
  }

  /**
   * Routes
   */
  require('../routes')(app);

  app.route('*').get(function(req, res) {
    res.render('index');
  });

  return app; 
};
