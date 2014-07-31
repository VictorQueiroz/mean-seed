'use strict';

var express = require('express'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  cors = require('cors'),
  methodOverride	= require('method-override'),
  errorhandler = require('errorhandler'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path'),
  passport = require('passport');

module.exports = function () {
  var app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(cors());

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());

  // Passport required options
  app.use(session({
    maxAge: new Date(Date.now() + 3600000),
    secret: 'something here',
    saveUninitialized: true,
    resave: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(path.join(__dirname, '../../public')));

  /**
   * Transfer the 'bower_components' folder contents to '/js/vendor' of the 'public' folder.
   */
  app.use('/js/vendor', express.static(path.join(__dirname, '../../bower_components')));

  // Development only
  if (app.get('env') === 'development') {
    app.use(errorhandler());
  }

  // Production only
  if (app.get('env') === 'production') {
  }

  return app; 
};

