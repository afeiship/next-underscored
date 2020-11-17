(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.underscored font-size -> font_size', function () {
      var str1 = 'font-size';
      expect(nx.underscored(str1)).toBe('font_size');
    });

    test('nx.underscored fontSize -> font_size', function () {
      var str2 = 'fontSize';
      expect(nx.underscored(str2)).toBe('font_size');
    });

    test('nx.underscored FontSize -> font_size', function () {
      var str3 = 'FontSize';
      expect(nx.underscored(str3)).toBe('font_size');
    });

    test('nx.underscored /api/v1/test -> _api_v1_test', function () {
      var str1 = '/api/v1/test';
      expect(nx.underscored(str1)).toBe('_api_v1_test');
    });
  });
})();
