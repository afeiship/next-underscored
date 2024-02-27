import nx from '@jswork/next';

const UNDERLINE = '_';
const dasherizeRE1 = /::/g,
  dasherizeRE2 = /([A-Z]+)([A-Z][a-z])/g,
  dasherizeRE3 = /([a-z\d])([A-Z])/g,
  dasherizeRE4 = /-/g,
  dasherizeRE5 = /\//g,
  dasherizeREPLACER = '$1-$2';

nx.underscored = function (inStr) {
  return inStr
    .replace(dasherizeRE1, '/')
    .replace(dasherizeRE5, UNDERLINE)
    .replace(dasherizeRE2, dasherizeREPLACER)
    .replace(dasherizeRE3, dasherizeREPLACER)
    .replace(dasherizeRE4, UNDERLINE)
    .toLowerCase();
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.underscored;
}

export default nx.underscored;
