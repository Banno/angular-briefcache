module.exports = function(config) {
	'use strict';
	config.set({
		basePath: '../',
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'node_modules/angular-cache/dist/angular-cache.js',
			'dist/angular-briefcache.js',
			'test/test-global.js'
		],
		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
		reporters: ['dots']
  });
};
