var assert = require('assert');
var expect = require('chai').expect;
var fizzbuzz = require('../fizzbuzz')

describe('isFizz function', function() {
    it('returns true given 3', function() {
      expect(isFizz(3)).to.equal(true);
    });
  });