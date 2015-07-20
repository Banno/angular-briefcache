angular.module('banno.briefCache', ['angular-cache']).factory('briefCache', ['CacheFactory', function(CacheFactory) {
	'use strict';
	/* jshint newcap:false */
	return CacheFactory.get('briefCache') || CacheFactory('briefCache', {
		maxAge: 10 * 1000, // expire after 10 secs
		cacheFlushInterval: 60 * 60 * 1000, // clear itself every hour
		deleteOnExpire: 'passive' // delete as they are requested
	});
}]);
