'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      style = _ref.style;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, style] },
    _react2.default.createElement(
      _reactNative.Text,
      { style: styles.title },
      title
    ),
    _react2.default.createElement(
      _reactNative.Text,
      { style: styles.subtitle },
      subtitle
    )
  );
};

Header.propTypes = {
  subtitle: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired
};

exports.default = Header;


var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    padding: 16
  },
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
    padding: 16
  },
  image: {
    height: 150,
    width: 150
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 24
  },
  title: {
    color: '#000000',
    fontSize: 54,
    fontWeight: 'bold',
    marginBottom: 16
  }
});
//# sourceMappingURL=Header.js.map