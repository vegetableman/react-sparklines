(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSparklines"] = factory(require("react"));
	else
		root["ReactSparklines"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(15)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return data.reduce(function (a, b) {
        return a + b;
    }) / data.length;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return Math.min.apply(Math, data);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return Math.max.apply(Math, data);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mean = __webpack_require__(2);

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var dataMean = (0, _mean2.default)(data);
    var sqDiff = data.map(function (n) {
        return Math.pow(n - dataMean, 2);
    });
    var avgSqDiff = (0, _mean2.default)(sqDiff);
    return Math.sqrt(avgSqDiff);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _min = __webpack_require__(5);

var _min2 = _interopRequireDefault(_min);

var _max = __webpack_require__(6);

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var data = _ref.data,
        limit = _ref.limit,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 1 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 1 : _ref$height,
        _ref$margin = _ref.margin,
        margin = _ref$margin === undefined ? 0 : _ref$margin,
        _ref$max = _ref.max,
        max = _ref$max === undefined ? (0, _max2.default)(data) : _ref$max,
        _ref$min = _ref.min,
        min = _ref$min === undefined ? (0, _min2.default)(data) : _ref$min;


    var len = data.length;

    if (limit && limit < len) {
        data = data.slice(len - limit);
    }

    var vfactor = (height - margin * 2) / (max - min || 2);
    var hfactor = (width - margin * 2) / ((limit || len) - (len > 1 ? 1 : 0));

    return data.map(function (d, i) {
        return {
            x: i * hfactor + margin,
            y: (max === min ? 1 : max - d) * vfactor + margin
        };
    });
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(11);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dataToPoints = exports.SparklinesExternalInteractiveLayer = exports.SparklinesInteractiveLayer = exports.SparklinesText = exports.SparklinesNormalBand = exports.SparklinesReferenceLine = exports.SparklinesSpots = exports.SparklinesBars = exports.SparklinesCurve = exports.SparklinesLine = exports.Sparklines = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SparklinesText = __webpack_require__(16);

var _SparklinesText2 = _interopRequireDefault(_SparklinesText);

var _SparklinesLine = __webpack_require__(17);

var _SparklinesLine2 = _interopRequireDefault(_SparklinesLine);

var _SparklinesCurve = __webpack_require__(18);

var _SparklinesCurve2 = _interopRequireDefault(_SparklinesCurve);

var _SparklinesBars = __webpack_require__(19);

var _SparklinesBars2 = _interopRequireDefault(_SparklinesBars);

var _SparklinesSpots = __webpack_require__(20);

var _SparklinesSpots2 = _interopRequireDefault(_SparklinesSpots);

var _SparklinesReferenceLine = __webpack_require__(21);

var _SparklinesReferenceLine2 = _interopRequireDefault(_SparklinesReferenceLine);

var _SparklinesNormalBand = __webpack_require__(26);

var _SparklinesNormalBand2 = _interopRequireDefault(_SparklinesNormalBand);

var _dataToPoints = __webpack_require__(8);

var _dataToPoints2 = _interopRequireDefault(_dataToPoints);

var _SparklinesInteractiveLayer = __webpack_require__(27);

var _SparklinesInteractiveLayer2 = _interopRequireDefault(_SparklinesInteractiveLayer);

var _SparklinesExternalInteractiveLayer = __webpack_require__(28);

var _SparklinesExternalInteractiveLayer2 = _interopRequireDefault(_SparklinesExternalInteractiveLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sparklines = function (_PureComponent) {
    _inherits(Sparklines, _PureComponent);

    function Sparklines(props) {
        _classCallCheck(this, Sparklines);

        return _possibleConstructorReturn(this, (Sparklines.__proto__ || Object.getPrototypeOf(Sparklines)).call(this, props));
    }

    _createClass(Sparklines, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                data = _props.data,
                limit = _props.limit,
                width = _props.width,
                height = _props.height,
                svgWidth = _props.svgWidth,
                svgHeight = _props.svgHeight,
                preserveAspectRatio = _props.preserveAspectRatio,
                margin = _props.margin,
                style = _props.style,
                max = _props.max,
                min = _props.min;
            var points = this.props.points;


            if (!points && data.length === 0) return null;

            if (!points) {
                points = points || (0, _dataToPoints2.default)({ data: data, limit: limit, width: width, height: height, margin: margin, max: max, min: min });
            }

            var svgOpts = { style: style, viewBox: '0 0 ' + width + ' ' + height, preserveAspectRatio: preserveAspectRatio };
            if (svgWidth > 0) svgOpts.width = svgWidth;
            if (svgHeight > 0) svgOpts.height = svgHeight;

            return _react2.default.createElement(
                'svg',
                svgOpts,
                _react2.default.Children.map(this.props.children, function (child) {
                    return _react2.default.cloneElement(child, { data: data, points: points, width: width, height: height, margin: margin });
                })
            );
        }
    }]);

    return Sparklines;
}(_react.PureComponent);

Sparklines.propTypes = {
    data: _propTypes2.default.array,
    limit: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    svgWidth: _propTypes2.default.number,
    svgHeight: _propTypes2.default.number,
    preserveAspectRatio: _propTypes2.default.string,
    margin: _propTypes2.default.number,
    style: _propTypes2.default.object,
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    onMouseMove: _propTypes2.default.func
};
Sparklines.defaultProps = {
    data: [],
    width: 240,
    height: 60,
    //Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle.
    preserveAspectRatio: 'none', //https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
    margin: 2
};
exports.Sparklines = Sparklines;
exports.SparklinesLine = _SparklinesLine2.default;
exports.SparklinesCurve = _SparklinesCurve2.default;
exports.SparklinesBars = _SparklinesBars2.default;
exports.SparklinesSpots = _SparklinesSpots2.default;
exports.SparklinesReferenceLine = _SparklinesReferenceLine2.default;
exports.SparklinesNormalBand = _SparklinesNormalBand2.default;
exports.SparklinesText = _SparklinesText2.default;
exports.SparklinesInteractiveLayer = _SparklinesInteractiveLayer2.default;
exports.SparklinesExternalInteractiveLayer = _SparklinesExternalInteractiveLayer2.default;
exports.dataToPoints = _dataToPoints2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(13);

var ReactPropTypesSecret = __webpack_require__(4);
var checkPropTypes = __webpack_require__(14);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(4);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(4);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesText = function (_React$Component) {
    _inherits(SparklinesText, _React$Component);

    function SparklinesText() {
        _classCallCheck(this, SparklinesText);

        return _possibleConstructorReturn(this, (SparklinesText.__proto__ || Object.getPrototypeOf(SparklinesText)).apply(this, arguments));
    }

    _createClass(SparklinesText, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                point = _props.point,
                text = _props.text,
                fontSize = _props.fontSize,
                fontFamily = _props.fontFamily;
            var x = point.x,
                y = point.y;

            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement(
                    'text',
                    { x: x, y: y, fontFamily: fontFamily || "Verdana", fontSize: fontSize || 10 },
                    text
                )
            );
        }
    }]);

    return SparklinesText;
}(_react2.default.Component);

SparklinesText.propTypes = {
    text: _propTypes2.default.string,
    point: _propTypes2.default.object,
    fontSize: _propTypes2.default.number,
    fontFamily: _propTypes2.default.string
};
SparklinesText.defaultProps = {
    text: '',
    point: { x: 0, y: 0 }
};
exports.default = SparklinesText;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesLine = function (_React$Component) {
  _inherits(SparklinesLine, _React$Component);

  function SparklinesLine() {
    _classCallCheck(this, SparklinesLine);

    return _possibleConstructorReturn(this, (SparklinesLine.__proto__ || Object.getPrototypeOf(SparklinesLine)).apply(this, arguments));
  }

  _createClass(SparklinesLine, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          points = _props.points,
          width = _props.width,
          height = _props.height,
          margin = _props.margin,
          color = _props.color,
          style = _props.style,
          onMouseMove = _props.onMouseMove;


      var linePoints = points.map(function (p) {
        return [p.x, p.y];
      }).reduce(function (a, b) {
        return a.concat(b);
      });

      var closePolyPoints = [points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];

      var fillPoints = linePoints.concat(closePolyPoints);

      var lineStyle = {
        stroke: color || style.stroke || 'slategray',
        strokeWidth: style.strokeWidth || '1',
        strokeLinejoin: style.strokeLinejoin || 'round',
        strokeLinecap: style.strokeLinecap || 'round',
        fill: 'none'
      };
      var fillStyle = {
        stroke: style.stroke || 'none',
        strokeWidth: '0',
        fillOpacity: style.fillOpacity || '.1',
        fill: style.fill || color || 'slategray',
        pointerEvents: 'auto'
      };

      var tooltips = points.map(function (p, i) {
        return _react2.default.createElement('circle', {
          key: i,
          cx: p.x,
          cy: p.y,
          r: 2,
          style: fillStyle,
          onMouseEnter: function onMouseEnter(e) {
            return onMouseMove('enter', data[i], p);
          },
          onClick: function onClick(e) {
            return onMouseMove('click', data[i], p);
          }
        });
      });

      return _react2.default.createElement(
        'g',
        null,
        tooltips,
        _react2.default.createElement('polyline', { points: fillPoints.join(' '), style: fillStyle }),
        _react2.default.createElement('polyline', { points: linePoints.join(' '), style: lineStyle })
      );
    }
  }]);

  return SparklinesLine;
}(_react2.default.Component);

SparklinesLine.propTypes = {
  color: _propTypes2.default.string,
  style: _propTypes2.default.object
};
SparklinesLine.defaultProps = {
  style: {},
  onMouseMove: function onMouseMove() {}
};
exports.default = SparklinesLine;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesCurve = function (_React$Component) {
    _inherits(SparklinesCurve, _React$Component);

    function SparklinesCurve() {
        _classCallCheck(this, SparklinesCurve);

        return _possibleConstructorReturn(this, (SparklinesCurve.__proto__ || Object.getPrototypeOf(SparklinesCurve)).apply(this, arguments));
    }

    _createClass(SparklinesCurve, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                width = _props.width,
                height = _props.height,
                margin = _props.margin,
                color = _props.color,
                style = _props.style,
                _props$divisor = _props.divisor,
                divisor = _props$divisor === undefined ? 0.25 : _props$divisor;

            var prev = void 0;
            var curve = function curve(p) {
                var res = void 0;
                if (!prev) {
                    res = [p.x, p.y];
                } else {
                    var len = (p.x - prev.x) * divisor;
                    res = ["C",
                    //x1
                    prev.x + len,
                    //y1
                    prev.y,
                    //x2,
                    p.x - len,
                    //y2,
                    p.y,
                    //x,
                    p.x,
                    //y
                    p.y];
                }
                prev = p;
                return res;
            };
            var linePoints = points.map(function (p) {
                return curve(p);
            }).reduce(function (a, b) {
                return a.concat(b);
            });
            var closePolyPoints = ["L" + points[points.length - 1].x, height - margin, margin, height - margin, margin, points[0].y];
            var fillPoints = linePoints.concat(closePolyPoints);

            var lineStyle = {
                stroke: color || style.stroke || 'slategray',
                strokeWidth: style.strokeWidth || '1',
                strokeLinejoin: style.strokeLinejoin || 'round',
                strokeLinecap: style.strokeLinecap || 'round',
                fill: 'none'
            };
            var fillStyle = {
                stroke: style.stroke || 'none',
                strokeWidth: '0',
                fillOpacity: style.fillOpacity || '.1',
                fill: style.fill || color || 'slategray'
            };

            return _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('path', { d: "M" + fillPoints.join(' '), style: fillStyle }),
                _react2.default.createElement('path', { d: "M" + linePoints.join(' '), style: lineStyle })
            );
        }
    }]);

    return SparklinesCurve;
}(_react2.default.Component);

SparklinesCurve.propTypes = {
    color: _propTypes2.default.string,
    style: _propTypes2.default.object
};
SparklinesCurve.defaultProps = {
    style: {}
};
exports.default = SparklinesCurve;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesBars = function (_React$Component) {
  _inherits(SparklinesBars, _React$Component);

  function SparklinesBars() {
    _classCallCheck(this, SparklinesBars);

    return _possibleConstructorReturn(this, (SparklinesBars.__proto__ || Object.getPrototypeOf(SparklinesBars)).apply(this, arguments));
  }

  _createClass(SparklinesBars, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          points = _props.points,
          height = _props.height,
          style = _props.style,
          barWidth = _props.barWidth,
          margin = _props.margin,
          onMouseMove = _props.onMouseMove;

      var strokeWidth = 1 * (style && style.strokeWidth || 0);
      var marginWidth = margin ? 2 * margin : 0;
      var width = barWidth || (points && points.length >= 2 ? Math.max(0, points[1].x - points[0].x - strokeWidth - marginWidth) : 0);

      return _react2.default.createElement(
        'g',
        { transform: 'scale(1,-1)' },
        points.map(function (p, i) {
          return _react2.default.createElement('rect', {
            key: i,
            x: p.x - (width + strokeWidth) / 2,
            y: -height,
            width: width,
            height: Math.max(0, height - p.y),
            style: style,
            onMouseMove: onMouseMove && onMouseMove.bind(_this2, p)
          });
        })
      );
    }
  }]);

  return SparklinesBars;
}(_react2.default.Component);

SparklinesBars.propTypes = {
  points: _propTypes2.default.arrayOf(_propTypes2.default.object),
  height: _propTypes2.default.number,
  style: _propTypes2.default.object,
  barWidth: _propTypes2.default.number,
  margin: _propTypes2.default.number,
  onMouseMove: _propTypes2.default.func
};
SparklinesBars.defaultProps = {
  style: { fill: 'slategray' }
};
exports.default = SparklinesBars;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesSpots = function (_React$Component) {
    _inherits(SparklinesSpots, _React$Component);

    function SparklinesSpots() {
        _classCallCheck(this, SparklinesSpots);

        return _possibleConstructorReturn(this, (SparklinesSpots.__proto__ || Object.getPrototypeOf(SparklinesSpots)).apply(this, arguments));
    }

    _createClass(SparklinesSpots, [{
        key: 'lastDirection',
        value: function lastDirection(points) {

            Math.sign = Math.sign || function (x) {
                return x > 0 ? 1 : -1;
            };

            return points.length < 2 ? 0 : Math.sign(points[points.length - 2].y - points[points.length - 1].y);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                width = _props.width,
                height = _props.height,
                size = _props.size,
                style = _props.style,
                spotColors = _props.spotColors;


            var startSpot = _react2.default.createElement('circle', {
                cx: points[0].x,
                cy: points[0].y,
                r: size,
                style: style });

            var endSpot = _react2.default.createElement('circle', {
                cx: points[points.length - 1].x,
                cy: points[points.length - 1].y,
                r: size,
                style: style || { fill: spotColors[this.lastDirection(points)] } });

            return _react2.default.createElement(
                'g',
                null,
                style && startSpot,
                endSpot
            );
        }
    }]);

    return SparklinesSpots;
}(_react2.default.Component);

SparklinesSpots.propTypes = {
    size: _propTypes2.default.number,
    style: _propTypes2.default.object,
    spotColors: _propTypes2.default.object
};
SparklinesSpots.defaultProps = {
    size: 2,
    spotColors: {
        '-1': 'red',
        '0': 'black',
        '1': 'green'
    }
};
exports.default = SparklinesSpots;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _dataProcessing = __webpack_require__(22);

var dataProcessing = _interopRequireWildcard(_dataProcessing);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesReferenceLine = function (_React$Component) {
    _inherits(SparklinesReferenceLine, _React$Component);

    function SparklinesReferenceLine() {
        _classCallCheck(this, SparklinesReferenceLine);

        return _possibleConstructorReturn(this, (SparklinesReferenceLine.__proto__ || Object.getPrototypeOf(SparklinesReferenceLine)).apply(this, arguments));
    }

    _createClass(SparklinesReferenceLine, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                margin = _props.margin,
                type = _props.type,
                style = _props.style,
                value = _props.value;


            var ypoints = points.map(function (p) {
                return p.y;
            });
            var y = type == 'custom' ? value : dataProcessing[type](ypoints);

            return _react2.default.createElement('line', {
                x1: points[0].x, y1: y + margin,
                x2: points[points.length - 1].x, y2: y + margin,
                style: style });
        }
    }]);

    return SparklinesReferenceLine;
}(_react2.default.Component);

SparklinesReferenceLine.propTypes = {
    type: _propTypes2.default.oneOf(['max', 'min', 'mean', 'avg', 'median', 'custom']),
    value: _propTypes2.default.number,
    style: _propTypes2.default.object
};
SparklinesReferenceLine.defaultProps = {
    type: 'mean',
    style: { stroke: 'red', strokeOpacity: .75, strokeDasharray: '2, 2' }
};
exports.default = SparklinesReferenceLine;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.variance = exports.stdev = exports.median = exports.midRange = exports.avg = exports.mean = exports.max = exports.min = undefined;

var _min2 = __webpack_require__(5);

var _min3 = _interopRequireDefault(_min2);

var _mean2 = __webpack_require__(2);

var _mean3 = _interopRequireDefault(_mean2);

var _midRange2 = __webpack_require__(23);

var _midRange3 = _interopRequireDefault(_midRange2);

var _median2 = __webpack_require__(24);

var _median3 = _interopRequireDefault(_median2);

var _stdev2 = __webpack_require__(7);

var _stdev3 = _interopRequireDefault(_stdev2);

var _variance2 = __webpack_require__(25);

var _variance3 = _interopRequireDefault(_variance2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.min = _min3.default;
exports.max = _min3.default;
exports.mean = _mean3.default;
exports.avg = _mean3.default;
exports.midRange = _midRange3.default;
exports.median = _median3.default;
exports.stdev = _stdev3.default;
exports.variance = _variance3.default;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _min = __webpack_require__(5);

var _min2 = _interopRequireDefault(_min);

var _max = __webpack_require__(6);

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    return (0, _max2.default)(data) - (0, _min2.default)(data) / 2;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (data) {
    return data.sort(function (a, b) {
        return a - b;
    })[Math.floor(data.length / 2)];
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mean = __webpack_require__(2);

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (data) {
    var dataMean = (0, _mean2.default)(data);
    var sq = data.map(function (n) {
        return Math.pow(n - dataMean, 2);
    });
    return (0, _mean2.default)(sq);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _mean = __webpack_require__(2);

var _mean2 = _interopRequireDefault(_mean);

var _stdev = __webpack_require__(7);

var _stdev2 = _interopRequireDefault(_stdev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SparklinesNormalBand = function (_React$Component) {
    _inherits(SparklinesNormalBand, _React$Component);

    function SparklinesNormalBand() {
        _classCallCheck(this, SparklinesNormalBand);

        return _possibleConstructorReturn(this, (SparklinesNormalBand.__proto__ || Object.getPrototypeOf(SparklinesNormalBand)).apply(this, arguments));
    }

    _createClass(SparklinesNormalBand, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                points = _props.points,
                margin = _props.margin,
                style = _props.style;


            var ypoints = points.map(function (p) {
                return p.y;
            });
            var dataMean = (0, _mean2.default)(ypoints);
            var dataStdev = (0, _stdev2.default)(ypoints);

            return _react2.default.createElement('rect', { x: points[0].x, y: dataMean - dataStdev + margin,
                width: points[points.length - 1].x - points[0].x, height: _stdev2.default * 2,
                style: style });
        }
    }]);

    return SparklinesNormalBand;
}(_react2.default.Component);

SparklinesNormalBand.propTypes = {
    style: _propTypes2.default.object
};
SparklinesNormalBand.defaultProps = {
    style: { fill: 'red', fillOpacity: .1 }
};
exports.default = SparklinesNormalBand;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spot = function (_PureComponent) {
  _inherits(Spot, _PureComponent);

  function Spot() {
    _classCallCheck(this, Spot);

    return _possibleConstructorReturn(this, (Spot.__proto__ || Object.getPrototypeOf(Spot)).apply(this, arguments));
  }

  _createClass(Spot, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('circle', { cx: this.props.cx, cy: this.props.cy, r: 2 });
    }
  }]);

  return Spot;
}(_react.PureComponent);

var Cursor = function (_PureComponent2) {
  _inherits(Cursor, _PureComponent2);

  function Cursor() {
    _classCallCheck(this, Cursor);

    return _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).apply(this, arguments));
  }

  _createClass(Cursor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('line', { x1: this.props.x1, x2: this.props.x2, y1: 0, y2: this.props.height, style: { strokeWidth: 1, stroke: "red" } });
    }
  }]);

  return Cursor;
}(_react.PureComponent);

var offscreen = -1000;

var SparklinesInteractiveLayer = function (_PureComponent3) {
  _inherits(SparklinesInteractiveLayer, _PureComponent3);

  function SparklinesInteractiveLayer(props) {
    _classCallCheck(this, SparklinesInteractiveLayer);

    var _this3 = _possibleConstructorReturn(this, (SparklinesInteractiveLayer.__proto__ || Object.getPrototypeOf(SparklinesInteractiveLayer)).call(this, props));

    _this3.onMouseMove = function (datapoints, width) {
      var lastItemIndex = datapoints[datapoints.length - 1];
      return function (event) {
        if (_this3.state.isActive) {
          return;
        }

        var mouseX = Math.floor(event.nativeEvent.offsetX / (_this3.rectWidth / width));

        var pointIndex = 0;
        var nextDataPoint = datapoints.find(function (entry) {
          var match = entry.x >= mouseX;
          if (match && !pointIndex) {
            return match;
          }
          pointIndex = pointIndex + 1;
          return match;
        });

        if (!nextDataPoint) {
          nextDataPoint = datapoints[lastItemIndex];
        }

        var previousDataPoint = datapoints[datapoints.indexOf(nextDataPoint) - 1];
        var currentDataPoint = void 0;
        var halfway = void 0;

        if (previousDataPoint) {
          halfway = previousDataPoint.x + (nextDataPoint.x - previousDataPoint.x) / 2;
          currentDataPoint = mouseX >= halfway ? nextDataPoint : previousDataPoint;
        } else {
          currentDataPoint = nextDataPoint;
        }

        if (!currentDataPoint) return;

        var x = currentDataPoint.x;
        var y = currentDataPoint.y;

        _this3.setState({ cx: x, cy: y });
        _this3.props.onMouseMove(currentDataPoint, Math.max(0, pointIndex - 1), event.nativeEvent.offsetX, event.nativeEvent.offsetY);
      };
    };

    _this3.onMouseLeave = function () {
      if (_this3.state.isActive) {
        return;
      }

      _this3.setState({ cx: offscreen, cy: offscreen });
      _this3.props.onMouseLeave();
    };

    _this3.onClick = function () {
      _this3.setState(function (prevState) {
        return { isActive: !prevState.isActive };
      });
    };

    _this3.state = {
      cx: offscreen,
      cy: offscreen,
      isActive: false
    };
    return _this3;
  }

  _createClass(SparklinesInteractiveLayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rectWidth = this.rect.getBoundingClientRect().width;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          height = _props.height,
          width = _props.width,
          points = _props.points,
          style = _props.style;
      var _state = this.state,
          cx = _state.cx,
          cy = _state.cy;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(Spot, { cx: cx, cy: cy }),
        _react2.default.createElement(Cursor, { x1: cx, x2: cx, height: height }),
        _react2.default.createElement('rect', {
          ref: function ref(_ref) {
            _this4.rect = _ref;
          },
          height: height,
          width: width,
          style: _extends({ fill: 'transparent', stroke: 'transparent' }, style),
          onMouseMove: this.onMouseMove(points, width),
          onMouseLeave: this.onMouseLeave,
          onClick: this.onClick
        })
      );
    }
  }]);

  return SparklinesInteractiveLayer;
}(_react.PureComponent);

SparklinesInteractiveLayer.propTypes = {
  points: _propTypes2.default.arrayOf(_propTypes2.default.object),
  height: _propTypes2.default.number,
  width: _propTypes2.default.number,
  onMouseMove: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onClick: _propTypes2.default.func
};
SparklinesInteractiveLayer.defaultProps = {
  onMouseMove: function onMouseMove() {},
  onMouseLeave: function onMouseLeave() {},
  onClick: function onClick() {}
};
exports.default = SparklinesInteractiveLayer;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dataToPoints = __webpack_require__(8);

var _dataToPoints2 = _interopRequireDefault(_dataToPoints);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spot = function (_PureComponent) {
  _inherits(Spot, _PureComponent);

  function Spot() {
    _classCallCheck(this, Spot);

    return _possibleConstructorReturn(this, (Spot.__proto__ || Object.getPrototypeOf(Spot)).apply(this, arguments));
  }

  _createClass(Spot, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('circle', { cx: this.props.cx, cy: this.props.cy, r: 2 });
    }
  }]);

  return Spot;
}(_react.PureComponent);

var Cursor = function (_PureComponent2) {
  _inherits(Cursor, _PureComponent2);

  function Cursor() {
    _classCallCheck(this, Cursor);

    return _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).apply(this, arguments));
  }

  _createClass(Cursor, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('line', { x1: this.props.x1, x2: this.props.x2, y1: 0, y2: this.props.height, style: { strokeWidth: 1, stroke: "red" } });
    }
  }]);

  return Cursor;
}(_react.PureComponent);

var offscreen = -1000;

var SparklinesExternalInteractiveLayer = function (_PureComponent3) {
  _inherits(SparklinesExternalInteractiveLayer, _PureComponent3);

  function SparklinesExternalInteractiveLayer(props) {
    _classCallCheck(this, SparklinesExternalInteractiveLayer);

    var _this3 = _possibleConstructorReturn(this, (SparklinesExternalInteractiveLayer.__proto__ || Object.getPrototypeOf(SparklinesExternalInteractiveLayer)).call(this, props));

    _this3.onMouseMove = function (datapoints, width) {
      var lastItemIndex = datapoints[datapoints.length - 1];
      return function (event) {
        if (_this3.state.isActive) {
          return;
        }

        var mouseX = Math.floor(event.nativeEvent.offsetX / (_this3.rectWidth / width));

        var pointIndex = 0;
        var nextDataPoint = datapoints.find(function (entry) {
          var match = entry.x >= mouseX;
          if (match && !pointIndex) {
            return match;
          }
          pointIndex = pointIndex + 1;
          return match;
        });

        if (!nextDataPoint) {
          nextDataPoint = datapoints[lastItemIndex];
        }

        var previousDataPoint = datapoints[datapoints.indexOf(nextDataPoint) - 1];
        var currentDataPoint = void 0;
        var halfway = void 0;

        if (previousDataPoint) {
          halfway = previousDataPoint.x + (nextDataPoint.x - previousDataPoint.x) / 2;
          currentDataPoint = mouseX >= halfway ? nextDataPoint : previousDataPoint;
        } else {
          currentDataPoint = nextDataPoint;
        }

        if (!currentDataPoint) return;

        var x = currentDataPoint.x;
        var y = currentDataPoint.y;

        _this3.setState({ cx: x, cy: y });
        _this3.props.onMouseMove(currentDataPoint, Math.max(0, pointIndex - 1), event.nativeEvent.offsetX, event.nativeEvent.offsetY);
      };
    };

    _this3.onMouseLeave = function () {
      if (_this3.state.isActive) {
        return;
      }

      _this3.setState({ cx: offscreen, cy: offscreen });
      _this3.props.onMouseLeave();
    };

    _this3.onClick = function () {
      _this3.setState(function (prevState) {
        return { isActive: !prevState.isActive };
      });
    };

    _this3.state = {
      cx: offscreen,
      cy: offscreen,
      isActive: false
    };
    return _this3;
  }

  _createClass(SparklinesExternalInteractiveLayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rectWidth = this.rect.getBoundingClientRect().width;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          height = _props.height,
          limit = _props.limit,
          width = _props.width,
          data = _props.data,
          style = _props.style,
          margin = _props.margin,
          max = _props.max,
          min = _props.min,
          preserveAspectRatio = _props.preserveAspectRatio,
          svgWidth = _props.svgWidth,
          svgHeight = _props.svgHeight;
      var points = this.props.points;

      if (!points && data.length === 0) return null;

      if (!points) {
        points = points || (0, _dataToPoints2.default)({ data: data, limit: limit, width: width, height: height, margin: margin, max: max, min: min });
      }

      var _state = this.state,
          cx = _state.cx,
          cy = _state.cy;

      var svgOpts = { style: style, viewBox: '0 0 ' + width + ' ' + svgHeight, preserveAspectRatio: preserveAspectRatio };
      if (svgWidth > 0) svgOpts.width = svgWidth;

      return _react2.default.createElement(
        'svg',
        svgOpts,
        _react2.default.createElement(Spot, { cx: cx, cy: cy }),
        _react2.default.createElement(Cursor, { x1: cx, x2: cx, height: svgHeight }),
        _react2.default.createElement('rect', {
          ref: function ref(_ref) {
            _this4.rect = _ref;
          },
          height: svgHeight,
          width: width,
          style: _extends({ fill: 'transparent', stroke: 'transparent' }, style),
          onMouseMove: this.onMouseMove(points, width),
          onMouseLeave: this.onMouseLeave,
          onClick: this.onClick
        })
      );
    }
  }]);

  return SparklinesExternalInteractiveLayer;
}(_react.PureComponent);

SparklinesExternalInteractiveLayer.propTypes = {
  points: _propTypes2.default.arrayOf(_propTypes2.default.object),
  height: _propTypes2.default.number,
  width: _propTypes2.default.number,
  onMouseMove: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onClick: _propTypes2.default.func
};
SparklinesExternalInteractiveLayer.defaultProps = {
  onMouseMove: function onMouseMove() {},
  onMouseLeave: function onMouseLeave() {},
  onClick: function onClick() {},
  data: [],
  width: 240,
  height: 60,
  preserveAspectRatio: 'none', //https://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
  margin: 2
};
exports.default = SparklinesExternalInteractiveLayer;

/***/ })
/******/ ]);
});