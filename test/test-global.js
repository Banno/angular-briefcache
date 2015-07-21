'use strict';

describe('Globals (no module)', function() {

	var briefCacheProvider, briefCache;

	beforeEach(module('banno.briefCache'));

	describe('briefCache provider', function() {

		var $injector;

		var createCache = function() {
			briefCache = $injector.invoke(briefCacheProvider.$get);
		};

		beforeEach(function() {
			module(function(_briefCacheProvider_) {
				briefCacheProvider = _briefCacheProvider_;
			});
			inject(function(_$injector_) {
				$injector = _$injector_;
			});
		});

		it('should allow the cache to be disabled', function() {
			briefCacheProvider.disable();
			createCache();
			expect(briefCache.info().disabled).toBe(true);
		});

		it('should allow the cache to be re-enabled', function() {
			briefCacheProvider.disable();
			briefCacheProvider.enable();
			createCache();
			expect(briefCache.info().disabled).toBe(false);
		});

	});

	describe('briefCache factory', function() {

		beforeEach(inject(function(_briefCache_) {
			briefCache = _briefCache_;
		}));

		it('should define a "briefCache" factory', function() {
			expect(briefCache).toBeDefined();
		});

		it('should return a cache object', function() {
			expect(briefCache.get).toEqual(jasmine.any(Function));
			expect(briefCache.put).toEqual(jasmine.any(Function));
		});

		it('should begin enabled', function() {
			expect(briefCache.info().disabled).toBe(false);
		});

		describe('default configuration', function() {

			it('should have a maximum age of 10 seconds', function() {
				expect(briefCache.info().maxAge).toBe(10000); // in milliseconds
			});

			it('should flush the cache every hour', function() {
				expect(briefCache.info().cacheFlushInterval).toBe(3600000); // in milliseconds
			});

			it('should use passive removal', function() {
				expect(briefCache.info().deleteOnExpire).toBe('passive');
			});

		});

		describe('configuration', function() {

			it('should allow the cache to be disabled', function() {
				briefCache.disable();
				expect(briefCache.info().disabled).toBe(true);
			});

			it('should allow the cache to be re-enabled', function() {
				briefCache.disable();
				briefCache.enable();
				expect(briefCache.info().disabled).toBe(false);
			});

		});

	});

});
