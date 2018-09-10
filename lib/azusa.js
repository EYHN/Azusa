(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("THREE"));
	else if(typeof define === 'function' && define.amd)
		define(["THREE"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("THREE")) : factory(root["THREE"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(15)('wks');
var uid = __webpack_require__(7);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(29);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(32);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(2);
var has = __webpack_require__(5);
var SRC = __webpack_require__(7)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(6).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(15)('keys');
var uid = __webpack_require__(7);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(27);
var getKeys = __webpack_require__(21);
var redefine = __webpack_require__(13);
var global = __webpack_require__(1);
var hide = __webpack_require__(2);
var Iterators = __webpack_require__(11);
var wks = __webpack_require__(3);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(28);
var step = __webpack_require__(31);
var Iterators = __webpack_require__(11);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(34)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(3)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(2)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(33);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(35);
var redefine = __webpack_require__(13);
var hide = __webpack_require__(2);
var Iterators = __webpack_require__(11);
var $iterCreate = __webpack_require__(38);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(46);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(6);
var hide = __webpack_require__(2);
var redefine = __webpack_require__(13);
var ctx = __webpack_require__(36);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(37);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(2)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(40);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(45).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(42)(false);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(43);
var toAbsoluteIndex = __webpack_require__(44);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(47);
var IE_PROTO = __webpack_require__(14)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(26);

// CONCATENATED MODULE: ./src/util/randomRange.ts
function randomRange(a,range){return a+(Math.random()-0.5)*range;}
// EXTERNAL MODULE: external "THREE"
var external_THREE_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/Triangle.ts
var Triangle_Triangle=/** @class */function(){function Triangle(size,center,angle,speed,rotateSpeed,material,lineMaterial,lineDistance,cb){var _a,_b;this.rotate=Math.random()*360;this.id=Math.random();this.panelOpacity=0.1;this.rotateSpeed=rotateSpeed;this.angle=angle;this.speed=speed;this.center=center;this.onDelete=cb;this.distance=lineDistance.startShow;this.showDistance=lineDistance;this.panelMaterial=new external_THREE_["MeshBasicMaterial"]().copy(material);this.panelMaterial.transparent=true;this.lineMaterial=new external_THREE_["LineBasicMaterial"]().copy(lineMaterial);this.lineMaterial.transparent=true;var panelGeometry=new external_THREE_["Geometry"]();var lineGeometry=new external_THREE_["Geometry"]();var vertices=[new external_THREE_["Vector3"](randomRange(size,size/2),randomRange(size,size/2),0),new external_THREE_["Vector3"](randomRange(size,size/2)*-1,randomRange(size,size/2),0),new external_THREE_["Vector3"](randomRange(size,size/2)*-1,randomRange(size,size/2)*-1,0)];(_a=panelGeometry.vertices).push.apply(_a,vertices);(_b=lineGeometry.vertices).push.apply(_b,vertices.concat([vertices[0]]));panelGeometry.faces.push(new external_THREE_["Face3"](0,1,2));panelGeometry.computeFaceNormals();panelGeometry.computeVertexNormals();this.line=new external_THREE_["Line"](lineGeometry,this.lineMaterial);this.mesh=new external_THREE_["Mesh"](panelGeometry,this.panelMaterial);this.group=new external_THREE_["Group"]();this.translateOnAxis(this.translate(this.distance),1);this.group.add(this.line);this.group.add(this.mesh);this.rotateZ(this.rotate);this.updatePosition(0);}Triangle.prototype.rotateZ=function(angle){this.mesh.geometry.rotateZ(angle);this.line.geometry.rotateZ(angle);};Triangle.prototype.translate=function(distance){var x=Math.cos(this.angle*Math.PI/180)*distance;var y=Math.sin(this.angle*Math.PI/180)*distance;return new external_THREE_["Vector3"](x,y,0);};Triangle.prototype.translateOnAxis=function(axis,distance){this.group.translateOnAxis(axis,distance);};Triangle.prototype.updatePosition=function(delay){this.translateOnAxis(this.translate(delay*this.speed),1);this.distance+=delay*this.speed;this.rotateZ(this.rotateSpeed*delay);this.panelMaterial.opacity=this.opacity(this.distance,this.showDistance)*this.panelOpacity;this.lineMaterial.opacity=this.opacity(this.distance,this.showDistance);if(this.distance>this.showDistance.endHide){this.delete();}};Triangle.prototype.delete=function(){this.onDelete(this);this.mesh.geometry.dispose();this.line.geometry.dispose();};Triangle.prototype.opacity=function(distance,showDistance){if(this.distance<showDistance.endShow){return(this.distance-showDistance.startShow)/(showDistance.endShow-showDistance.startShow);}else if(this.distance>showDistance.startHide){return(showDistance.endHide-this.distance)/(showDistance.endHide-showDistance.startHide);}else{return 1;}};Triangle.prototype.transition=function(delay){this.updatePosition(delay);};return Triangle;}();
// CONCATENATED MODULE: ./src/util/range.ts
function range_range(start,end,step,fromRight){if(step===void 0){step=1;}if(fromRight===void 0){fromRight=false;}var index=-1,length=Math.max(Math.ceil((end-start)/step),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;};
// CONCATENATED MODULE: ./src/node.ts
var node_node=/** @class */function(){function node(baseRange,angle,center){this.lastStrength=0;this.theStrength=0;this.targetRange=0;this._range=0;this.baseRange=baseRange;this.angle=angle;this.center=center;}Object.defineProperty(node.prototype,"positionA",{get:function(){var range=this._range+this.baseRange;var x=Math.cos(this.angle*Math.PI/180)*range;var y=Math.sin(this.angle*Math.PI/180)*range;return new external_THREE_["Vector2"](this.center.x+x,this.center.y+y);},enumerable:true,configurable:true});Object.defineProperty(node.prototype,"positionB",{get:function(){var range=this._range*-1+this.baseRange;var x=Math.cos(this.angle*Math.PI/180)*range;var y=Math.sin(this.angle*Math.PI/180)*range;return new external_THREE_["Vector2"](this.center.x+x,this.center.y+y);},enumerable:true,configurable:true});Object.defineProperty(node.prototype,"strength",{set:function(newStrength){this.lastStrength=this.theStrength;this.theStrength=newStrength;this.targetRange=Math.max(this.theStrength-this.lastStrength,0);if(this.targetRange>this._range)this._range=this.targetRange;},enumerable:true,configurable:true});node.prototype.transition=function(delay){this._range=Math.max(this._range-delay*this._range*5,0);};return node;}();
// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(25);

// CONCATENATED MODULE: ./src/audio.ts
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var audio_Audio=/** @class */function(_super){__extends(Audio,_super);function Audio(option){if(option===void 0){option={};}var _this=_super.call(this)||this;_this.listener=new external_THREE_["AudioListener"]();_this.sound=new external_THREE_["Audio"](_this.listener);_this.audioLoader=new external_THREE_["AudioLoader"]();_this.analyser=new external_THREE_["AudioAnalyser"](_this.sound,option.fftsize||256);_this.frequencyBinCount=_this.analyser.analyser.frequencyBinCount;return _this;}Audio.prototype.load=function(option){var _this=this;var src=option.src,_a=option.onLoad,onLoad=_a===void 0?function(buffer){return void 0;}:_a,_b=option.onPrgress,onPrgress=_b===void 0?function(xhr){return void 0;}:_b,_c=option.onError,onError=_c===void 0?function(){return void 0;}:_c;this.audioLoader.load(src,function(buffer){_this.sound.setBuffer(buffer);_this.sound.setLoop(true);_this.sound.play();return onLoad(buffer);},onPrgress,onError);};Audio.prototype.setVolume=function(volume){this.sound.setVolume(volume);};Audio.prototype.getFrequencyData=function(){return this.analyser.getFrequencyData();};return Audio;}(events["EventEmitter"]);
// CONCATENATED MODULE: ./src/lib/ExtendThree.ts
var THREE=Object.assign(external_THREE_,{});/* harmony default export */ var ExtendThree = (THREE);
// CONCATENATED MODULE: ./src/lib/LuminosityHighPassShader.js
/**
 * @author bhouston / http://clara.io/
 *
 * Luminosity
 * http://en.wikipedia.org/wiki/Luminosity
 */ExtendThree.LuminosityHighPassShader={shaderID:"luminosityHighPass",uniforms:{"tDiffuse":{type:"t",value:null},"luminosityThreshold":{type:"f",value:1.0},"smoothWidth":{type:"f",value:1.0},"defaultColor":{type:"c",value:new ExtendThree.Color(0x000000)},"defaultOpacity":{type:"f",value:0.0}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","vec3 luma = vec3( 0.299, 0.587, 0.114 );","float v = dot( texel.xyz, luma );","vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","gl_FragColor = mix( outputColor, texel, alpha );","}"].join("\n")};
// CONCATENATED MODULE: ./src/lib/CopyShader.js
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */ExtendThree.CopyShader={uniforms:{"tDiffuse":{value:null},"opacity":{value:1.0}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","gl_FragColor = opacity * texel;","}"].join("\n")};
// CONCATENATED MODULE: ./src/lib/EffectComposer.js
/**
 * @author alteredq / http://alteredqualia.com/
 */ExtendThree.EffectComposer=function(renderer,renderTarget){this.renderer=renderer;if(renderTarget===undefined){var parameters={minFilter:ExtendThree.LinearFilter,magFilter:ExtendThree.LinearFilter,format:ExtendThree.RGBAFormat,stencilBuffer:false};var size=renderer.getSize();renderTarget=new ExtendThree.WebGLRenderTarget(size.width,size.height,parameters);renderTarget.texture.name="EffectComposer.rt1";}this.renderTarget1=renderTarget;this.renderTarget2=renderTarget.clone();this.renderTarget2.texture.name="EffectComposer.rt2";this.writeBuffer=this.renderTarget1;this.readBuffer=this.renderTarget2;this.passes=[];if(ExtendThree.CopyShader===undefined)console.error("THREE.EffectComposer relies on THREE.CopyShader");this.copyPass=new ExtendThree.ShaderPass(ExtendThree.CopyShader);};Object.assign(ExtendThree.EffectComposer.prototype,{swapBuffers:function(){var tmp=this.readBuffer;this.readBuffer=this.writeBuffer;this.writeBuffer=tmp;},addPass:function(pass){this.passes.push(pass);var size=this.renderer.getSize();pass.setSize(size.width,size.height);},insertPass:function(pass,index){this.passes.splice(index,0,pass);},render:function(delta){var maskActive=false;var pass,i,il=this.passes.length;for(i=0;i<il;i++){pass=this.passes[i];if(pass.enabled===false)continue;pass.render(this.renderer,this.writeBuffer,this.readBuffer,delta,maskActive);if(pass.needsSwap){if(maskActive){var context=this.renderer.context;context.stencilFunc(context.NOTEQUAL,1,0xffffffff);this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,delta);context.stencilFunc(context.EQUAL,1,0xffffffff);}this.swapBuffers();}if(ExtendThree.MaskPass!==undefined){if(pass instanceof ExtendThree.MaskPass){maskActive=true;}else if(pass instanceof ExtendThree.ClearMaskPass){maskActive=false;}}}},reset:function(renderTarget){if(renderTarget===undefined){var size=this.renderer.getSize();renderTarget=this.renderTarget1.clone();renderTarget.setSize(size.width,size.height);}this.renderTarget1.dispose();this.renderTarget2.dispose();this.renderTarget1=renderTarget;this.renderTarget2=renderTarget.clone();this.writeBuffer=this.renderTarget1;this.readBuffer=this.renderTarget2;},setSize:function(width,height){this.renderTarget1.setSize(width,height);this.renderTarget2.setSize(width,height);for(var i=0;i<this.passes.length;i++){this.passes[i].setSize(width,height);}}});ExtendThree.Pass=function(){// if set to true, the pass is processed by the composer
this.enabled=true;// if set to true, the pass indicates to swap read and write buffer after rendering
this.needsSwap=true;// if set to true, the pass clears its buffer before rendering
this.clear=false;// if set to true, the result of the pass is rendered to screen
this.renderToScreen=false;};Object.assign(ExtendThree.Pass.prototype,{setSize:function(width,height){},render:function(renderer,writeBuffer,readBuffer,delta,maskActive){console.error("THREE.Pass: .render() must be implemented in derived pass.");}});
// CONCATENATED MODULE: ./src/lib/RenderPass.js
/**
 * @author alteredq / http://alteredqualia.com/
 */ExtendThree.RenderPass=function(scene,camera,overrideMaterial,clearColor,clearAlpha){ExtendThree.Pass.call(this);this.scene=scene;this.camera=camera;this.overrideMaterial=overrideMaterial;this.clearColor=clearColor;this.clearAlpha=clearAlpha!==undefined?clearAlpha:0;this.clear=true;this.clearDepth=false;this.needsSwap=false;};ExtendThree.RenderPass.prototype=Object.assign(Object.create(ExtendThree.Pass.prototype),{constructor:ExtendThree.RenderPass,render:function(renderer,writeBuffer,readBuffer,delta,maskActive){var oldAutoClear=renderer.autoClear;renderer.autoClear=false;this.scene.overrideMaterial=this.overrideMaterial;var oldClearColor,oldClearAlpha;if(this.clearColor){oldClearColor=renderer.getClearColor().getHex();oldClearAlpha=renderer.getClearAlpha();renderer.setClearColor(this.clearColor,this.clearAlpha);}if(this.clearDepth){renderer.clearDepth();}renderer.render(this.scene,this.camera,this.renderToScreen?null:readBuffer,this.clear);if(this.clearColor){renderer.setClearColor(oldClearColor,oldClearAlpha);}this.scene.overrideMaterial=null;renderer.autoClear=oldAutoClear;}});
// CONCATENATED MODULE: ./src/lib/ShaderPass.js
/**
 * @author alteredq / http://alteredqualia.com/
 */ExtendThree.ShaderPass=function(shader,textureID){ExtendThree.Pass.call(this);this.textureID=textureID!==undefined?textureID:"tDiffuse";if(shader instanceof ExtendThree.ShaderMaterial){this.uniforms=shader.uniforms;this.material=shader;}else if(shader){this.uniforms=ExtendThree.UniformsUtils.clone(shader.uniforms);this.material=new ExtendThree.ShaderMaterial({defines:shader.defines||{},uniforms:this.uniforms,vertexShader:shader.vertexShader,fragmentShader:shader.fragmentShader});}this.camera=new ExtendThree.OrthographicCamera(-1,1,1,-1,0,1);this.scene=new ExtendThree.Scene();this.quad=new ExtendThree.Mesh(new ExtendThree.PlaneBufferGeometry(2,2),null);this.quad.frustumCulled=false;// Avoid getting clipped
this.scene.add(this.quad);};ExtendThree.ShaderPass.prototype=Object.assign(Object.create(ExtendThree.Pass.prototype),{constructor:ExtendThree.ShaderPass,render:function(renderer,writeBuffer,readBuffer,delta,maskActive){if(this.uniforms[this.textureID]){this.uniforms[this.textureID].value=readBuffer.texture;}this.quad.material=this.material;if(this.renderToScreen){renderer.render(this.scene,this.camera);}else{renderer.render(this.scene,this.camera,writeBuffer,this.clear);}}});
// CONCATENATED MODULE: ./src/lib/UnrealBloomPass.js
/**
 * @author spidersharma / http://eduperiment.com/
 Inspired from Unreal Engine::
 https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/
 */ExtendThree.UnrealBloomPass=function(resolution,strength,radius,threshold){ExtendThree.Pass.call(this);this.strength=strength!==undefined?strength:1;this.radius=radius;this.threshold=threshold;this.resolution=resolution!==undefined?new ExtendThree.Vector2(resolution.x,resolution.y):new ExtendThree.Vector2(256,256);// render targets
var pars={minFilter:ExtendThree.LinearFilter,magFilter:ExtendThree.LinearFilter,format:ExtendThree.RGBAFormat};this.renderTargetsHorizontal=[];this.renderTargetsVertical=[];this.nMips=5;var resx=Math.round(this.resolution.x/2);var resy=Math.round(this.resolution.y/2);this.renderTargetBright=new ExtendThree.WebGLRenderTarget(resx,resy,pars);this.renderTargetBright.texture.name="UnrealBloomPass.bright";this.renderTargetBright.texture.generateMipmaps=false;for(var i=0;i<this.nMips;i++){var renderTarget=new ExtendThree.WebGLRenderTarget(resx,resy,pars);renderTarget.texture.name="UnrealBloomPass.h"+i;renderTarget.texture.generateMipmaps=false;this.renderTargetsHorizontal.push(renderTarget);var renderTarget=new ExtendThree.WebGLRenderTarget(resx,resy,pars);renderTarget.texture.name="UnrealBloomPass.v"+i;renderTarget.texture.generateMipmaps=false;this.renderTargetsVertical.push(renderTarget);resx=Math.round(resx/2);resy=Math.round(resy/2);}// luminosity high pass material
if(ExtendThree.LuminosityHighPassShader===undefined)console.error("THREE.UnrealBloomPass relies on THREE.LuminosityHighPassShader");var highPassShader=ExtendThree.LuminosityHighPassShader;this.highPassUniforms=ExtendThree.UniformsUtils.clone(highPassShader.uniforms);this.highPassUniforms["luminosityThreshold"].value=threshold;this.highPassUniforms["smoothWidth"].value=0.01;this.materialHighPassFilter=new ExtendThree.ShaderMaterial({uniforms:this.highPassUniforms,vertexShader:highPassShader.vertexShader,fragmentShader:highPassShader.fragmentShader,defines:{}});// Gaussian Blur Materials
this.separableBlurMaterials=[];var kernelSizeArray=[3,5,7,9,11];var resx=Math.round(this.resolution.x/2);var resy=Math.round(this.resolution.y/2);for(var i=0;i<this.nMips;i++){this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i]));this.separableBlurMaterials[i].uniforms["texSize"].value=new ExtendThree.Vector2(resx,resy);resx=Math.round(resx/2);resy=Math.round(resy/2);}// Composite material
this.compositeMaterial=this.getCompositeMaterial(this.nMips);this.compositeMaterial.uniforms["blurTexture1"].value=this.renderTargetsVertical[0].texture;this.compositeMaterial.uniforms["blurTexture2"].value=this.renderTargetsVertical[1].texture;this.compositeMaterial.uniforms["blurTexture3"].value=this.renderTargetsVertical[2].texture;this.compositeMaterial.uniforms["blurTexture4"].value=this.renderTargetsVertical[3].texture;this.compositeMaterial.uniforms["blurTexture5"].value=this.renderTargetsVertical[4].texture;this.compositeMaterial.uniforms["bloomStrength"].value=strength;this.compositeMaterial.uniforms["bloomRadius"].value=0.1;this.compositeMaterial.needsUpdate=true;var bloomFactors=[1.0,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms["bloomFactors"].value=bloomFactors;this.bloomTintColors=[new ExtendThree.Vector3(1,1,1),new ExtendThree.Vector3(1,1,1),new ExtendThree.Vector3(1,1,1),new ExtendThree.Vector3(1,1,1),new ExtendThree.Vector3(1,1,1)];this.compositeMaterial.uniforms["bloomTintColors"].value=this.bloomTintColors;// copy material
if(ExtendThree.CopyShader===undefined)console.error("THREE.BloomPass relies on THREE.CopyShader");var copyShader=ExtendThree.CopyShader;this.copyUniforms=ExtendThree.UniformsUtils.clone(copyShader.uniforms);this.copyUniforms["opacity"].value=1.0;this.materialCopy=new ExtendThree.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:copyShader.vertexShader,fragmentShader:copyShader.fragmentShader,blending:ExtendThree.AdditiveBlending,depthTest:false,depthWrite:false,transparent:true});this.enabled=true;this.needsSwap=false;this.oldClearColor=new ExtendThree.Color();this.oldClearAlpha=1;this.camera=new ExtendThree.OrthographicCamera(-1,1,1,-1,0,1);this.scene=new ExtendThree.Scene();this.quad=new ExtendThree.Mesh(new ExtendThree.PlaneBufferGeometry(2,2),null);this.quad.frustumCulled=false;// Avoid getting clipped
this.scene.add(this.quad);};ExtendThree.UnrealBloomPass.prototype=Object.assign(Object.create(ExtendThree.Pass.prototype),{constructor:ExtendThree.UnrealBloomPass,dispose:function(){for(var i=0;i<this.renderTargetsHorizontal.length();i++){this.renderTargetsHorizontal[i].dispose();}for(var i=0;i<this.renderTargetsVertical.length();i++){this.renderTargetsVertical[i].dispose();}this.renderTargetBright.dispose();},setSize:function(width,height){var resx=Math.round(width/2);var resy=Math.round(height/2);this.renderTargetBright.setSize(resx,resy);for(var i=0;i<this.nMips;i++){this.renderTargetsHorizontal[i].setSize(resx,resy);this.renderTargetsVertical[i].setSize(resx,resy);this.separableBlurMaterials[i].uniforms["texSize"].value=new ExtendThree.Vector2(resx,resy);resx=Math.round(resx/2);resy=Math.round(resy/2);}},render:function(renderer,writeBuffer,readBuffer,delta,maskActive){this.oldClearColor.copy(renderer.getClearColor());this.oldClearAlpha=renderer.getClearAlpha();var oldAutoClear=renderer.autoClear;renderer.autoClear=false;renderer.setClearColor(new ExtendThree.Color(0,0,0),0);if(maskActive)renderer.context.disable(renderer.context.STENCIL_TEST);// 1. Extract Bright Areas
this.highPassUniforms["tDiffuse"].value=readBuffer.texture;this.highPassUniforms["luminosityThreshold"].value=this.threshold;this.quad.material=this.materialHighPassFilter;renderer.render(this.scene,this.camera,this.renderTargetBright,true);// 2. Blur All the mips progressively
var inputRenderTarget=this.renderTargetBright;for(var i=0;i<this.nMips;i++){this.quad.material=this.separableBlurMaterials[i];this.separableBlurMaterials[i].uniforms["colorTexture"].value=inputRenderTarget.texture;this.separableBlurMaterials[i].uniforms["direction"].value=ExtendThree.UnrealBloomPass.BlurDirectionX;renderer.render(this.scene,this.camera,this.renderTargetsHorizontal[i],true);this.separableBlurMaterials[i].uniforms["colorTexture"].value=this.renderTargetsHorizontal[i].texture;this.separableBlurMaterials[i].uniforms["direction"].value=ExtendThree.UnrealBloomPass.BlurDirectionY;renderer.render(this.scene,this.camera,this.renderTargetsVertical[i],true);inputRenderTarget=this.renderTargetsVertical[i];}// Composite All the mips
this.quad.material=this.compositeMaterial;this.compositeMaterial.uniforms["bloomStrength"].value=this.strength;this.compositeMaterial.uniforms["bloomRadius"].value=this.radius;this.compositeMaterial.uniforms["bloomTintColors"].value=this.bloomTintColors;renderer.render(this.scene,this.camera,this.renderTargetsHorizontal[0],true);// Blend it additively over the input texture
this.quad.material=this.materialCopy;this.copyUniforms["tDiffuse"].value=this.renderTargetsHorizontal[0].texture;if(maskActive)renderer.context.enable(renderer.context.STENCIL_TEST);renderer.render(this.scene,this.camera,readBuffer,false);renderer.setClearColor(this.oldClearColor,this.oldClearAlpha);renderer.autoClear=oldAutoClear;},getSeperableBlurMaterial:function(kernelRadius){return new ExtendThree.ShaderMaterial({defines:{"KERNEL_RADIUS":kernelRadius,"SIGMA":kernelRadius},uniforms:{"colorTexture":{value:null},"texSize":{value:new ExtendThree.Vector2(0.5,0.5)},"direction":{value:new ExtendThree.Vector2(0.5,0.5)}},vertexShader:"varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}",fragmentShader:"#include <common>\
				varying vec2 vUv;\n\
				uniform sampler2D colorTexture;\n\
				uniform vec2 texSize;\
				uniform vec2 direction;\
				\
				float gaussianPdf(in float x, in float sigma) {\
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\
				}\
				void main() {\n\
					vec2 invSize = 1.0 / texSize;\
					float fSigma = float(SIGMA);\
					float weightSum = gaussianPdf(0.0, fSigma);\
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {\
						float x = float(i);\
						float w = gaussianPdf(x, fSigma);\
						vec2 uvOffset = direction * invSize * x;\
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\
						diffuseSum += (sample1 + sample2) * w;\
						weightSum += 2.0 * w;\
					}\
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\
				}"});},getCompositeMaterial:function(nMips){return new ExtendThree.ShaderMaterial({defines:{"NUM_MIPS":nMips},uniforms:{"blurTexture1":{value:null},"blurTexture2":{value:null},"blurTexture3":{value:null},"blurTexture4":{value:null},"blurTexture5":{value:null},"dirtTexture":{value:null},"bloomStrength":{value:1.0},"bloomFactors":{value:null},"bloomTintColors":{value:null},"bloomRadius":{value:0.0}},vertexShader:"varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}",fragmentShader:"varying vec2 vUv;\
				uniform sampler2D blurTexture1;\
				uniform sampler2D blurTexture2;\
				uniform sampler2D blurTexture3;\
				uniform sampler2D blurTexture4;\
				uniform sampler2D blurTexture5;\
				uniform sampler2D dirtTexture;\
				uniform float bloomStrength;\
				uniform float bloomRadius;\
				uniform float bloomFactors[NUM_MIPS];\
				uniform vec3 bloomTintColors[NUM_MIPS];\
				\
				float lerpBloomFactor(const in float factor) { \
					float mirrorFactor = 1.2 - factor;\
					return mix(factor, mirrorFactor, bloomRadius);\
				}\
				\
				void main() {\
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \
					 							 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \
												 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \
												 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \
												 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\
				}"});}});ExtendThree.UnrealBloomPass.BlurDirectionX=new ExtendThree.Vector2(1.0,0.0);ExtendThree.UnrealBloomPass.BlurDirectionY=new ExtendThree.Vector2(0.0,1.0);
// CONCATENATED MODULE: ./src/azusa.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Azusa", function() { return azusa_Azusa; });
var azusa_Azusa=/** @class */function(){function Azusa(option){if(option===void 0){option={};}var _this=this;this.scale=1;this.Triangles=[];var _a=option.width,width=_a===void 0?window.innerWidth:_a,_b=option.height,height=_b===void 0?window.innerHeight:_b,_c=option.subdivisionSize,subdivisionSize=_c===void 0?1024:_c,_d=option.cutFront,cutFront=_d===void 0?0:_d,_e=option.cutEnd,cutEnd=_e===void 0?0:_e;this.cutFront=cutFront;this.cutEnd=cutEnd;var renderer=new ExtendThree.WebGLRenderer({canvas:option.view,alpha:true,antialias:true});renderer.setSize(width,height);var camera=new ExtendThree.PerspectiveCamera(45,width/height,1,500);camera.position.set(0,0,100);camera.lookAt(new ExtendThree.Vector3(0,0,0));var scene=new ExtendThree.Scene();this.composer=new ExtendThree.EffectComposer(renderer);this.composer.setSize(width,height);var renderScene=new ExtendThree.RenderPass(scene,camera);this.composer.addPass(renderScene);this.bloomPass=new ExtendThree.UnrealBloomPass(new ExtendThree.Vector2(window.innerWidth,window.innerHeight),1.5,0.2,0);this.composer.addPass(this.bloomPass);var copyShader=new ExtendThree.ShaderPass(ExtendThree.CopyShader);copyShader.renderToScreen=true;this.composer.addPass(copyShader);this.scene=scene;this.camera=camera;this.audio=new audio_Audio({fftsize:subdivisionSize});var frequencyBinCount=this.loadAudio(subdivisionSize).frequencyBinCount;var lineMaterial=new ExtendThree.LineBasicMaterial({color:0x03a9f4});var nodeCount=frequencyBinCount-cutEnd-cutFront;this.nodes=range_range(0,nodeCount).map(function(index){return new node_node(20,(index/nodeCount*360+45)%360,new ExtendThree.Vector2(0,0));});this.lineA=new ExtendThree.Line(new ExtendThree.BufferGeometry().addAttribute('position',this.renderGeometries(this.nodes.map(function(node){return node.positionA;})).setDynamic(true)),lineMaterial);this.lineB=new ExtendThree.Line(new ExtendThree.BufferGeometry().addAttribute('position',this.renderGeometries(this.nodes.map(function(node){return node.positionB;})).setDynamic(true)),lineMaterial);this.lines=range_range(0,nodeCount).map(function(index){return new ExtendThree.Line(new ExtendThree.BufferGeometry().addAttribute('position',_this.renderGeometries([_this.nodes[index].positionA,_this.nodes[index].positionB]).setDynamic(true)),lineMaterial);});this.lineGroup=this.loadLine();this.TriangleGroup=this.loadTriangle();this.scene.add(this.TriangleGroup);this.scene.add(this.lineGroup);this.renderer=renderer;this.clock=new ExtendThree.Clock();this.render();this.resize(width,height);}Azusa.prototype.loadGui=function(){var _this=this;var params={projection:'normal',background:false,exposure:1.0,bloomStrength:1.5,bloomThreshold:0.2,bloomRadius:0};var gui=new window.dat.GUI();gui.add(params,'exposure',0.1,2);gui.add(params,'bloomThreshold',0.0,1.0).onChange(function(value){_this.bloomPass.threshold=Number(value);});gui.add(params,'bloomStrength',0.0,3.0).onChange(function(value){_this.bloomPass.strength=Number(value);});gui.add(params,'bloomRadius',0.0,1.0).onChange(function(value){_this.bloomPass.radius=Number(value);});gui.open();};Azusa.prototype.resize=function(width,height){this.camera.aspect=width/height;if(width<=425){this.camera.fov=70;}else{this.camera.fov=45;}this.camera.updateProjectionMatrix();this.renderer.setSize(width,height);this.composer.setSize(width,height);};Azusa.prototype.loadLine=function(){var lineGroup=new ExtendThree.Group();lineGroup.add(this.lineB);lineGroup.add(this.lineA);this.lines.forEach(function(line){return lineGroup.add(line);});return lineGroup;};Azusa.prototype.loadAudio=function(fftsize){this.camera.add(this.audio.listener);return this.audio;};Azusa.prototype.loadTriangle=function(){var TriangleGroup=new ExtendThree.Group();var material=new ExtendThree.MeshBasicMaterial({color:0x03a9f4});var lineMaterial=new ExtendThree.LineBasicMaterial({color:0x03a9f4});setInterval(this.addTriangle.bind(this,material,lineMaterial),500);return TriangleGroup;};Azusa.prototype.addTriangle=function(material,lineMaterial){var _this=this;if(material===void 0){material=new ExtendThree.MeshBasicMaterial({color:0x03a9f4});}if(lineMaterial===void 0){lineMaterial=new ExtendThree.LineBasicMaterial({color:0x03a9f4});}// const point = this.Triangles.length;
var triangle=this.makeTriangle(material,lineMaterial,function(t){_this.Triangles=_this.Triangles.filter(function(triangle){return triangle!==t;});_this.TriangleGroup.remove(t.group);});this.TriangleGroup.add(triangle.group);this.Triangles.push(triangle);};Azusa.prototype.makeTriangle=function(material,lineMaterial,cb){if(material===void 0){material=new ExtendThree.MeshBasicMaterial({color:0x03a9f4});}if(lineMaterial===void 0){lineMaterial=new ExtendThree.LineBasicMaterial({color:0x03a9f4});}var triangle=new Triangle_Triangle(2,new ExtendThree.Vector3(0,0,0),Math.random()*360,randomRange(5,1),randomRange(0.1,0.02),material,lineMaterial,{startShow:15,endShow:30,startHide:60,endHide:70},cb);return triangle;};Azusa.prototype.renderGeometries=function(vertices){var res=[];vertices=vertices.concat(vertices[0]);vertices.forEach(function(value){res.push(value.x,value.y,0);});return new ExtendThree.BufferAttribute(new Float32Array(res),3);};Azusa.prototype.updateGeometries=function(){var _this=this;if(this.nodes){this.lineGroup.scale.set(this.scale,this.scale,this.scale);var geometryA=this.lineA.geometry;var AttributeA_1=geometryA.getAttribute('position');var geometryB=this.lineB.geometry;var AttributeB_1=geometryB.getAttribute('position');var positions=this.nodes.map(function(value){return[value.positionA,value.positionB];});positions.forEach(function(position,index){AttributeA_1.set([position[0].x,position[0].y],index*3);AttributeB_1.set([position[1].x,position[1].y],index*3);var geometry=_this.lines[index].geometry;var Attribute=geometry.getAttribute('position');Attribute.set([position[0].x,position[0].y,0,position[1].x,position[1].y,0],0);Attribute.needsUpdate=true;});AttributeA_1.set([AttributeA_1.array[0],AttributeA_1.array[1]],positions.length*3);AttributeB_1.set([AttributeB_1.array[0],AttributeB_1.array[1]],positions.length*3);AttributeA_1.needsUpdate=true;AttributeB_1.needsUpdate=true;}};Azusa.prototype.render=function(){this.composer.render();var audioDate=this.audio.getFrequencyData();var Delta=this.clock.getDelta();var cutAudioDate=audioDate.slice(this.cutFront,audioDate.length-this.cutEnd);this.nodes.forEach(function(node,index,array){node.strength=cutAudioDate[index%array.length]*0.1;node.transition(Delta);});this.scale=1+audioDate[Math.ceil(audioDate.length*0.05)]/1000;this.updateGeometries();this.Triangles.forEach(function(triangle){return triangle.transition(Delta);});// geometries.forEach((geometry, index) => {
//   this.lines[index].geometry = geometry
// });
requestAnimationFrame(this.render.bind(this));};return Azusa;}();/* harmony default export */ var azusa = __webpack_exports__["default"] = (azusa_Azusa);

/***/ })
/******/ ]);
});
//# sourceMappingURL=azusa.js.map