'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeSideswipe = require('react-native-sideswipe');

var _reactNativeSideswipe2 = _interopRequireDefault(_reactNativeSideswipe);

var _reactNativeElements = require('react-native-elements');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width;

var data = [1, 2, 3, 4, 5];

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: _styles2.default.container },
        _react2.default.createElement(
          _reactNative.Text,
          null,
          'Center Aligned'
        ),
        _react2.default.createElement(_reactNativeSideswipe2.default, {
          data: data,
          style: { width: width, maxHeight: 225 },
          itemWidth: width,
          threshold: 120,
          contentOffset: 0,
          renderItem: function renderItem(_ref) {
            var item = _ref.item;
            return _react2.default.createElement(
              _reactNative.View,
              { style: { width: width, paddingHorizontal: 10 } },
              _react2.default.createElement(
                _reactNativeElements.Card,
                {
                  title: 'Local Modules',
                  containerStyle: { maxWidth: width, height: 225 }
                },
                _react2.default.createElement(_reactNativeElements.Badge, { value: item }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { marginTop: 10 } },
                  'Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10. I don\'t know what you could say about a day in which you have seen four beautiful sunsets.'
                )
              )
            );
          }
        })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=index.js.map