/*!
 * name: @feizheng/next-underscored
 * url: https://github.com/afeiship/next-underscored
 * version: 1.0.0
 * date: 2019-11-23T13:57:57.063Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var UNDERLINE = '_';
  var dasherizeRE1 = /::/g,
    dasherizeRE2 = /([A-Z]+)([A-Z][a-z])/g,
    dasherizeRE3 = /([a-z\d])([A-Z])/g,
    dasherizeRE4 = /-/g,
    dasherizeRE5 = /\//g,
    dasherizeREPLACER = '$1-$2';

  nx.underscored = function(inStr) {
    return inStr
      .replace(dasherizeRE1, '/')
      .replace(dasherizeRE5, UNDERLINE)
      .replace(dasherizeRE2, dasherizeREPLACER)
      .replace(dasherizeRE3, dasherizeREPLACER)
      .replace(dasherizeRE4, UNDERLINE)
      .toLowerCase();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.underscored;
  }
})();

//# sourceMappingURL=next-underscored.js.map
