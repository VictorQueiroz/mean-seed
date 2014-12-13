'use strict';

var gulp = require('gulp');
var rjs = require('gulp-requirejs');

var paths = {
	scripts: 'src/**/*.js'
};

gulp.task('scripts', function () {
	rjs({
		baseUrl: 'src/javascripts/app',
		out: 'app.js',
		name: 'app',
		mainConfigFile: 'src/javascripts/config.js'
	})
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