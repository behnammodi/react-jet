"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.init = exports.emit = exports.on = exports.connect = exports.initial = void 0;

var _react = _interopRequireDefault(require("react"));

var jetstate = _interopRequireWildcard(require("jetstate"));

var jetemit = _interopRequireWildcard(require("jetemit"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initial = function initial(fields) {
  return fields.forEach(function (field) {
    return jetstate.init({ ...field,
      didUpdate: function didUpdate(value) {
        field.didUpdate && field.didUpdate(value);
        jetemit.emit(field.name, value);
      }
    });
  });
};

exports.initial = initial;

var connect = function connect(Component, fields) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Connect, _React$Component);

    function Connect() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Connect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Connect)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "unsubscribes", []);

      _defineProperty(_assertThisInitialized(_this), "state", fields.reduce(function (a, b) {
        return _defineProperty({ ...a
        }, b, jetstate.state[b]);
      }, {}));

      _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
        return fields.forEach(function (field) {
          return _this.unsubscribes.push(jetemit.on(field, function () {
            return _this.setState(_defineProperty({}, field, jetstate.state[field]));
          }));
        });
      });

      _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
        return _this.unsubscribes.forEach(function (unsubscribe) {
          return unsubscribe();
        });
      });

      _defineProperty(_assertThisInitialized(_this), "render", function () {
        return _react.default.createElement(Component, _extends({}, _this.props, _this.state));
      });

      return _this;
    }

    return Connect;
  }(_react.default.Component), _temp;
};

exports.connect = connect;
var on = jetemit.on;
exports.on = on;
var emit = jetemit.emit;
exports.emit = emit;
var init = jetstate.init;
exports.init = init;
var state = jetstate.state;
exports.state = state;