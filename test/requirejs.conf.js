/* jshint browser:true */
requirejs.config({
	// Karma serves files from '/base'.
	baseUrl: '/base',

	deps: ['/base/test/test-amd.js'],

	shim: {
		angular: {
			exports: 'angular'
		},
		'angular-mocks': {
			deps: ['angular']
		}
	},

	paths: {
		'angular': 'node_modules/angular/angular',
		'angular-cache': 'node_modules/angular-cache/dist/angular-cache',
		'angular-mocks': 'node_modules/angular-mocks/angular-mocks',
		'banno/briefCache': 'dist/angular-briefcache'
	},

	// Start the test run once RequireJS is done.
	callback: window.__karma__.start
});

define('testModule', ['banno/briefCache', 'angular-mocks'], function(){});
