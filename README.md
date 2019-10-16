# scan-type

**A simple, comprehensive and lightweight type-checking library for JavaScript.**

Most type-checking libraries are compatible with 10 or 20 types. This library offers 50+. But, once minified, the library is still only 3KB in size.

Here's a quick example:

```javascript
const {
  isNumber,
  isFloat,
  isString,
  isArray,
  isPromise,
  isWeakMap,
  isGenerator,
  isDataView,
  isAsyncFunction,
  isInfinite
} = require('scan-type');

isNumber(1); // true
isFloat(1.5); // true
isString('abc'); // true
isArray(new Array()); // true
isPromise(new Promise(resolve => resolve())); // true
isWeakMap(new WeakMap()); // true
isGenerator((function*() {})()); // true
isDataView(new DataView(new ArrayBuffer())); // true
isAsyncFunction(async function() {}); // true
isInfinite(-Infinity); // true
```

## Install

Using npm:

```shell
npm i scan-type
```

Using yarn:

```shell
yarn add scan-type
```

## Documentation

To view the docs, [click here](https://bretcameron.github.io/scan-type/global).

In this version of _scan-type_, the available methods are: `isArguments`, `isArray`, `isArrayBuffer`, `isAsyncFunction`, `isBigInt`, `isBigInt64Array`, `isBigUint64Array`, `isBoolean`, `isClass`, `isDataView`, `isDate`, `isError`, `isFloat`, `isFloat32Array`, `isFloat64Array`, `isFunction`, `isGenerator`, `isGeneratorFunction`, `isGlobalThis`, `isInfinite`, `isInt8Array`, `isInt16Array`, `isInt32Array`, `isInteger`, `isIntl`, `isJSON`, `isMap`, `isMath`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPrimitive`, `isPromise`, `isProxy`, `isReflect`, `isRegExp`, `isSafeFloat`, `isSafeInteger`, `isSet`, `isSharedArrayBuffer`, `isString`, `isSymbol`, `isTypedArray`, `isUint8Array`, `isUint8ClampedArray`, `isUint16Array`, `isUint32Array`, `isUndefined`, `isWeakMap`, `isWeakSet` and `isWebAssembly`.
