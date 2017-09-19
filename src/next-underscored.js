(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');


  var UNDERLINE = '_';
  var dasherizeRE1 = /::/g,
      dasherizeRE2 = /([A-Z]+)([A-Z][a-z])/g,
      dasherizeRE3 = /([a-z\d])([A-Z])/g,
      dasherizeRE4 = /-/g,
      dasherizeREPLACER = '$1-$2';

  nx.underscored = function (inStr) {
    return inStr.replace(dasherizeRE1, '/')
      .replace(dasherizeRE2, dasherizeREPLACER)
      .replace(dasherizeRE3, dasherizeREPLACER)
      .replace(dasherizeRE4, UNDERLINE)
      .toLowerCase();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.underscored;
  }

}());
