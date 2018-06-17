'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // eslint-disable-line

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeCalendars = require('../deps/react-native-calendars');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
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
    margin: 8,
    fontSize: 16
  }
});

var Input = function Input(props) {
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, props.style] },
    _react2.default.createElement(_reactNative.TextInput, _extends({}, props, { style: styles.input })),
    _react2.default.createElement(_reactNativeCalendars.Calendar, null)
  );
};

exports.default = Input;
//# sourceMappingURL=Input.js.map