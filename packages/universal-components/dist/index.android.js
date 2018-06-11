'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.Header = undefined;

var _Input = require('./components/Input');

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react2.default.createElement(_Header2.default, { title: title, subtitle: subtitle + ' Native Android', style: style });
};