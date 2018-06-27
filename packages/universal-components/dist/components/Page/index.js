'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeElements = require('react-native-elements');

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Carousel = require('../Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line
var Page = function Page(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [_styles2.default.container, style] },
    _react2.default.createElement(_Header2.default, { title: title, subtitle: subtitle }),
    _react2.default.createElement(_Carousel2.default, null)
  );
};

exports.default = Page;
//# sourceMappingURL=index.js.map