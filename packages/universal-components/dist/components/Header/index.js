'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [_styles2.default.container, style] },
    _react2.default.createElement(
      _reactNative.Text,
      { style: _styles2.default.title },
      title
    ),
    _react2.default.createElement(
      _reactNative.Text,
      { style: _styles2.default.subtitle },
      subtitle
    )
  );
}; // eslint-disable-line

exports.default = Header;
//# sourceMappingURL=index.js.map