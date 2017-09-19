var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-underscored');

describe('next/underscored', function () {

  it('nx.munderscoredix', function () {
    var str1 = 'font-size';
    var str2 = 'fontSize';
    var str3 = 'FontSize';

    assert.equal( nx.underscored(str1), 'font_size');
    assert.equal( nx.underscored(str2), 'font_size');
    assert.equal( nx.underscored(str3), 'font_size');
  });

});
