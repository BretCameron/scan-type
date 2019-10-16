const TC = require('../index');
const assert = require('assert');

const types = {
  "Arguments": {
    "function": TC.isArguments,
    "instance": (function args() { return arguments })(),
  },
  "Array": {
    "function": TC.isArray,
    "instance": new Array(),
  },
  "ArrayBuffer": {
    "function": TC.isArrayBuffer,
    "instance": new ArrayBuffer(),
  },
  "AsyncFunction": {
    "function": TC.isAsyncFunction,
    "instance": async function () { },
  },
  "BigInt": {
    "function": TC.isBigInt,
    "instance": BigInt(9007199254740991),
  },
  "BigInt64Array": {
    "function": TC.isBigInt64Array,
    "instance": new BigInt64Array(),
  },
  "BigUint64Array": {
    "function": TC.isBigUint64Array,
    "instance": new BigUint64Array(),
  },
  "Boolean": {
    "function": TC.isBoolean,
    "instance": new Boolean(),
  },
  "Class": {
    "function": TC.isClass,
    "instance": class X { },
  },
  "DataView": {
    "function": TC.isDataView,
    "instance": new DataView(new ArrayBuffer()),
  },
  "Date": {
    "function": TC.isDate,
    "instance": new Date(),
  },
  "Error": {
    "function": TC.isError,
    "instance": new Error(),
  },
  "Float": {
    "function": TC.isFloat,
    "instance": 1.1,
  },
  "Float32Array": {
    "function": TC.isFloat32Array,
    "instance": new Float32Array(),
  },
  "Float64Array": {
    "function": TC.isFloat64Array,
    "instance": new Float64Array(),
  },
  "Function": {
    "function": TC.isFunction,
    "instance": function () { },
  },
  "Generator": {
    "function": TC.isGenerator,
    "instance": (function* () { })(),
  },
  "GeneratorFunction": {
    "function": TC.isGeneratorFunction,
    "instance": function* () { },
  },
  "Infinite": {
    "function": TC.isInfinite,
    "instance": Infinity,
  },
  "Int8Array": {
    "function": TC.isInt8Array,
    "instance": new Int8Array(),
  },
  "Int16Array": {
    "function": TC.isInt16Array,
    "instance": new Int16Array(),
  },
  "Int32Array": {
    "function": TC.isInt32Array,
    "instance": new Int32Array(),
  },
  "Integer": {
    "function": TC.isInteger,
    "instance": 1,
  },
  "Intl": {
    "function": TC.isIntl,
    "instance": Intl,
  },
  "JSON": {
    "function": TC.isJSON,
    "instance": JSON.stringify({}),
  },
  "Map": {
    "function": TC.isMap,
    "instance": new Map(),
  },
  "Math": {
    "function": TC.isMath,
    "instance": Math,
  },
  "NaN": {
    "function": TC.isNaN,
    "instance": NaN,
  },
  "Null": {
    "function": TC.isNull,
    "instance": null,
  },
  "Number": {
    "function": TC.isNumber,
    "instance": new Number(),
  },
  "Object": {
    "function": TC.isObject,
    "instance": {},
  },
  "Primitive": {
    "function": TC.isPrimitive,
    "instance": "abc",
  },
  "Promise": {
    "function": TC.isPromise,
    "instance": new Promise(resolve => resolve()),
  },
  "Proxy": {
    "function": TC.isProxy,
    "instance": Proxy,
  },
  "Reflect": {
    "function": TC.isReflect,
    "instance": Reflect,
  },
  "RegExp": {
    "function": TC.isRegExp,
    "instance": new RegExp(),
  },
  "SafeFloat": {
    "function": TC.isSafeFloat,
    "instance": 1.1,
  },
  "SafeInteger": {
    "function": TC.isSafeInteger,
    "instance": 1,
  },
  "Set": {
    "function": TC.isSet,
    "instance": new Set(),
  },
  "SharedArrayBuffer": {
    "function": TC.isSharedArrayBuffer,
    "instance": new SharedArrayBuffer(),
  },
  "String": {
    "function": TC.isString,
    "instance": new String(),
  },
  "Symbol": {
    "function": TC.isSymbol,
    "instance": Symbol(),
  },
  "TypedArray": {
    "function": TC.isTypedArray,
    "instance": new Uint8Array(),
  },
  "Uint8Array": {
    "function": TC.isUint8Array,
    "instance": new Uint8Array(),
  },
  "Uint8ClampedArray": {
    "function": TC.isUint8ClampedArray,
    "instance": new Uint8ClampedArray(),
  },
  "Uint16Array": {
    "function": TC.isUint16Array,
    "instance": new Uint16Array(),
  },
  "Uint32Array": {
    "function": TC.isUint32Array,
    "instance": new Uint32Array(),
  },
  "Undefined": {
    "function": TC.isUndefined,
    "instance": undefined,
  },
  "WeakMap": {
    "function": TC.isWeakMap,
    "instance": new WeakMap(),
  },
  "WeakSet": {
    "function": TC.isWeakSet,
    "instance": new WeakSet(),
  },
  "WebAssembly": {
    "function": TC.isWebAssembly,
    "instance": WebAssembly,
  }
}

Object.keys(types).forEach(type => {
  describe('is' + type, function () {
    it('should return true when ' + type + ' is present', function () {
      assert.equal(types[type].function(types[type].instance), true);
    });
    it('should return false when ' + type + ' is not present', function () {
      switch (type) {
        case 'Object':
        case 'Function':
          assert.equal(types[type].function(''), false)
          break;
        default:
          assert.equal(types[type].function(Object), false)
          break;
      };
    });
  });
});