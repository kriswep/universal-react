'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeElements = require('react-native-elements');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [_styles2.default.container, style] },
    _react2.default.createElement(_Header2.default, { title: title, subtitle: subtitle }),
    _react2.default.createElement(
      _reactNativeElements.Card,
      { title: 'HELLO WORLD', image: require('../../img/mountain.jpg') },
      _react2.default.createElement(
        _reactNative.Text,
        { style: { marginBottom: 10 } },
        'universal compononents for React'
      ),
      _react2.default.createElement(_reactNativeElements.Button, {
        icon: { name: 'code' },
        backgroundColor: '#03A9F4',
        buttonStyle: {
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        },
        title: 'VIEW NOW'
      })
    )
  );
}; // eslint-disable-line
exports.default = Page;
//# sourceMappingURL=index.js.map