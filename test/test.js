var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-underscored');

describe('next/underscored', function () {

  it('nx.underscored font-size -> font_size', function () {
    var str1 = 'font-size';
    assert.equal(nx.underscored(str1), 'font_size');
  });

  it('nx.underscored fontSize -> font_size', function () {
    var str2 = 'fontSize';
    assert.equal(nx.underscored(str2), 'font_size');
  });

  it('nx.underscored FontSize -> font_size', function () {
    var str3 = 'FontSize';
    assert.equal(nx.underscored(str3), 'font_size');
  });

  it('nx.underscored /api/v1/test -> _api_v1_test', function () {
    var str1 = '/api/v1/test';
    assert.equal(nx.underscored(str1), '_api_v1_test');
  });

});
