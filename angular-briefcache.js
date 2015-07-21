angular.module('banno.briefCache', ['angular-cache']).provider('briefCache', function() {
	'use strict';

	var startEnabled = true;

	return {
		$get: ['CacheFactory', function(CacheFactory) {
			/* jshint newcap:false */
			var cache = CacheFactory.get('briefCache') || CacheFactory('briefCache', {
				disabled: !startEnabled,
				maxAge: 10 * 1000, // expire after 10 secs
				cacheFlushInterval: 60 * 60 * 1000, // clear itself every hour
				deleteOnExpire: 'passive' // delete as they are requested
			});
			return cache;
		}],
		disable: function() {
			startEnabled = false;
		},
		enable: function() {
			startEnabled = true;
		}
	};

});
