/*!
 * angular-briefcache v1.0.2
 * https://github.com/Banno/angular-briefcache
 * (c) 2015 Jack Henry & Associates Inc
 * License: Apache-2.0
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular', 'angular-cache'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'), require('angular-cache'));
  } else {
    root.banno = root.banno || {}; root.banno.briefCache = factory(root.angular, root.angularCache);
  }
}(this, function(angular, angularCache) {
angular.module('banno.briefCache', ['angular-cache']).factory('briefCache', ['CacheFactory', function(CacheFactory) {
	'use strict';
	/* jshint newcap:false */
	return CacheFactory.get('briefCache') || CacheFactory('briefCache', {
		maxAge: 10 * 1000, // expire after 10 secs
		cacheFlushInterval: 60 * 60 * 1000, // clear itself every hour
		deleteOnExpire: 'passive' // delete as they are requested
	});
}]);

return "banno.briefCache";
}));
