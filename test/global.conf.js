module.exports = function(config) {
	'use strict';
	config.set({
		basePath: '../',
		files: [
			'bower_components/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'bower_components/angular-cache/dist/angular-cache.js',
			'dist/briefCache.js',
			'test/test-global.js'
		],
		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
		reporters: ['dots']
  });
};
