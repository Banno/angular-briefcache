/* jshint node:true */
'use strict';

var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var rename  = require('gulp-rename');
var stylish = require('jshint-stylish');

var jsFiles = [
	'gulpfile.js',
	'index.js'
];

gulp.task('lint', function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('build', function() {
	return gulp.src('index.js')
		.pipe(rename('briefCache.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch(jsFiles, ['lint', 'build']);
});

gulp.task('default', ['lint', 'build', 'watch']);
