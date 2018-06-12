'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, props.style] },
    _react2.default.createElement(_reactNative.TextInput, _extends({}, props, { style: styles.input }))
  );
};

var styles = _reactNative.StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: 16
  },
  input: {
    backgroundColor: '#eee',
    color: '#000000',
    borderColor: '#eee',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 4,
    padding: 8,
    fontSize: 16
  }
});

exports.default = Input;
//# sourceMappingURL=Input.js.map