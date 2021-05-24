(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Site_Home_tsx"],{

/***/ "./resources/js/Site/Home.tsx":
/*!************************************!*\
  !*** ./resources/js/Site/Home.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Home =
/** @class */
function (_super) {
  __extends(Home, _super);

  function Home(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  Home.prototype.render = function () {
    return react_1["default"].createElement(react_1["default"].Fragment, null, "Hi");
  };

  return Home;
}(react_1["default"].Component);

exports.default = Home;

/***/ })

}]);