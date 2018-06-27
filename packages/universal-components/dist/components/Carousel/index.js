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

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width;

var PIXEL_RATIO = _reactNative.PixelRatio.get();

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
        _react2.default.createElement(_reactNativeSideswipe2.default, {
          data: _data2.default,
          style: { width: width },
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
                  title: item.title,
                  image: 'https://loremflickr.com/' + Math.round(width * PIXEL_RATIO) + '/' + Math.round(width / 2 * PIXEL_RATIO) + '/' + item.image,
                  containerStyle: { maxWidth: width }
                },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { margin: 10 } },
                  item.text
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