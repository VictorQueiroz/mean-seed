'use strict';

var passport = require('passport'),
		BasicStrategy = require('passport-http').BasicStrategy,
		User = require('../../models').User;

module.exports = function (req, res, next) {	
  passport.use(new BasicStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        // if (!user.validPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
};