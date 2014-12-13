'use strict';

var to5 = require('gulp-6to5');
var rjs = require('gulp-requirejs');
var gulp = require('gulp');
var jade = require('gulp-jade');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var traceur = require('gulp-traceur');
var ngAnnotate = require('gulp-ng-annotate');
var ngTemplates = require('gulp-ng-templates');

var paths = {
	scripts: 'src/javascripts/app/**/*.js',
	templates: 'src/javascripts/app/**/*.jade'
};

gulp.task('jshint', function () {
	gulp.src(paths.scripts)
		.pipe(jshint({ lookup: true }))
		.pipe(jshint.reporter());
});

gulp.task('templates', function () {
	gulp.src(paths.templates)
		.pipe(jade())
		.pipe(ngTemplates({
			module: 'myapp',
			standalone: false,
			filename: 'templates.js'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('scripts', ['jshint'], function () {
	rjs({
		baseUrl: 'src/javascripts/app',
		out: 'app.js',
		name: 'app',
		mainConfigFile: 'src/javascripts/config.js'
	})
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('serve', function () {
	require(require('path').join(__dirname));
});

gulp.task('watch', function () {
	Object.keys(paths).forEach(function (key) {
		gulp.watch(paths[key], [key]);
	});
});

gulp.task('default', ['scripts', 'watch', 'serve'])