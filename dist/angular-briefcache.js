/*!
 * angular-briefcache v1.3.1
 * https://github.com/Banno/angular-briefcache
 * (c) 2015 Jack Henry & Associates Inc
 * License: Apache-2.0
 */
;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular', 'angular-cache'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('angular'), require('angular-cache'));
  } else {
    root.banno = root.banno || {}; root.banno.briefCache = factory(root.angular, root.angularCache);
  }
}(this, function(angular, angularCache) {
angular.module('banno.briefCache', ['angular-cache']).provider('briefCache', function() {
	'use strict';

	var initialSettings = {
		enabled: true,
		cacheFlushInterval: 60 * 60 * 1000, // clear itself every hour
		deleteOnExpire: 'passive', // delete as they are requested
		maxAge: 10 * 1000 // expire after 10 secs
	};

	return {
		$get: ['CacheFactory', function(CacheFactory) {
			/* jshint newcap:false */
			var cache = CacheFactory.get('briefCache') || CacheFactory('briefCache', {
				disabled: !initialSettings.enabled,
				maxAge: initialSettings.maxAge,
				cacheFlushInterval: initialSettings.cacheFlushInterval,
				deleteOnExpire: initialSettings.deleteOnExpire
			});
			return cache;
		}],
		disable: function() {
			initialSettings.enabled = false;
		},
		enable: function() {
			initialSettings.enabled = true;
		},
		setCacheFlushInterval: function(val) {
			initialSettings.cacheFlushInterval = val;
		},
		setDeleteOnExpire: function(val) {
			initialSettings.deleteOnExpire = val;
		},
		setMaxAge: function(val) {
			initialSettings.maxAge = val;
		}
	};

});

return "banno.briefCache";
}));
