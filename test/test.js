var assert = require('assert');
var expect = require('chai').expect;
var fizzbuzz = require('../fizzbuzz')

describe('isFizz function', function() {
    it('returns true given 3', function() {
      expect(isFizz(3)).to.equal(true);
    });
    it ('returns false given 7', function(){
        expect(isFizz(7)).to.equal(false);
    });
  });
  
  describe('isBuzz function', function() {
      it('returns true given 20', function() {
        expect(isBuzz(20)).to.equal(true);
      });
      it ('returns false given 11', function(){
          expect(isBuzz(11)).to.equal(false);
      });
  });

  describe('isFizzBuzz function', function() {
    it('returns true given 15', function() {
      expect(isFizzBuzz(15)).to.equal(true);
    });
    it ('returns false given 99', function(){
        expect(isFizzBuzz(99)).to.equal(false);
    });
  });