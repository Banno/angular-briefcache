define(['testModule'], function() {
	'use strict';

	describe('AMD module', function() {

		var briefCache;

		beforeEach(module('banno.briefCache'));

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

	});

});
