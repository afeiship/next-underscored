# next-underscored
> Converts a camelized or dasherized string into an underscored one.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-underscored
```

## usage
```js
import '@jswork/next-underscored';

nx.underscored('/api/v1/test');  // _api_v1_test
nx.underscored('api/v1/test');   // api_v1_test
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-underscored/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-underscored
[version-url]: https://npmjs.org/package/@jswork/next-underscored

[license-image]: https://img.shields.io/npm/l/@jswork/next-underscored
[license-url]: https://github.com/afeiship/next-underscored/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-underscored
[size-url]: https://github.com/afeiship/next-underscored/blob/master/dist/next-underscored.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-underscored
[download-url]: https://www.npmjs.com/package/@jswork/next-underscored
