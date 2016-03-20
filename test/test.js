var assert = require('assert');
var util = require('../index').util

var phrases = ['A', 'B', 'C', 'D'];

describe('Util', function() {
  describe('#getItem()', function () {
    it('should return a single string', function () {
      assert.equal('A', util.getItem(phrases, 0));
    });
    it('should not return the ignoreItem argument', function () {
      assert.equal('B', util.getItem(phrases, 0, 'A'));
    });
  });
});
