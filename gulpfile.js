'use strict';

var del         = require('del');
var gulp        = require('gulp');
var header      = require('gulp-header');
var jshint      = require('gulp-jshint');
var Karma       = require('karma').Server;
var pkg         = require('./package.json');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence').use(gulp);
var stylish     = require('jshint-stylish');
var uglify      = require('gulp-uglify');
var umd         = require('gulp-umd');

var jsFiles = [
	'gulpfile.js',
	'angular-briefcache.js',
	'test/*.js'
];

gulp.task('lint', function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('clean', function() {
	return del('./dist');
});

gulp.task('build', ['clean'], function() {
	var banner = ['/*!',
		' * <%= pkg.name %> v<%= pkg.version %>',
		' * <%= pkg.homepage %>',
		' * (c) 2015 Jack Henry & Associates Inc',
		' * License: <%= pkg.license %>',
		' */',
		''].join('\n');

	return gulp.src('angular-briefcache.js')
		.pipe(umd({
			dependencies: function() {
				return [{
					name: 'angular',
					amd: 'angular',
					cjs: 'angular',
					global: 'angular',
					param: 'angular',
				}, {
					name: 'angularCache',
					amd: 'angular-cache',
					cjs: 'angular-cache',
					global: 'angularCache',
					param: 'angularCache'
				}];
			},
			exports: function() { return '"banno.briefCache"'; },
			namespace: function() { return 'banno = root.banno || {}; root.banno.briefCache'; }
		}))
		.pipe(header(banner, { pkg : pkg } ))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify({ preserveComments: 'some' }))
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest('./dist'));
});

gulp.task('test:globals', function(done) {
	new Karma({
		configFile: __dirname + '/test/global.conf.js',
		singleRun: true
	}, function() { done(); }).start();
});

gulp.task('test:amd', function(done) {
	new Karma({
		configFile: __dirname + '/test/amd.conf.js',
		singleRun: true
	}, function() { done(); }).start();
});

gulp.task('test', function(done) {
	return runSequence('test:globals', 'test:amd', done);
});

gulp.task('all', function(done) {
	return runSequence(['lint', 'build'], 'test', done);
});

gulp.task('watch', function() {
	gulp.watch(jsFiles.concat('.jshintrc'), ['all']);
});

gulp.task('default', ['all', 'watch']);
