# type-check-suite

A simple, comprehensive and lightweight type-checking library for JavaScript.

Most type-checking libraries are compatible with 10 or 20 types. This library offers 50+, but the minified library is still just 3KB in size.

It's easy to check for anything from a `Number`, `String` or `Array` to a `Promise`, `WeakMap` or `Generator` – and much more!

## Install

Using npm:

```shell
npm i type-check-suite
```

Using yarn:

```shell
yarn add type-check-suite
```

## Import

```javascript
const { isAsyncFunction, isFunction, isPromise } = require('type-check-suite');
```

## Documentation

To view our docs, [click here](https://bretcameron.github.io/type-check-suite/global).

## Quick Example

```javascript
const { isAsyncFunction, isFunction } = require('type-check-suite');

function run(fn) {
  if (isFunction(fn) || isAsyncFunction(fn)) {
    fn();
  } else {
    return new TypeError('run expects a function or an async function.');
  }
}
```
