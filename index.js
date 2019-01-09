"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.init = exports.emit = exports.on = exports.connect = exports.initial = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jetstate = require("jetstate");

var _jetemit = require("jetemit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initial = exports.initial = function initial(fields) {
  return fields.forEach(function (field) {
    return (0, _jetstate.init)(_extends({}, field, {
      didUpdate: function didUpdate(value) {
        field.didUpdate && field.didUpdate(value);
        (0, _jetemit.emit)(field.name, value);
      }
    }));
  });
};

var connect = exports.connect = function connect(Component, fields) {
  return function (_PureComponent) {
    _inherits(Connect, _PureComponent);

    function Connect() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Connect);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Connect.__proto__ || Object.getPrototypeOf(Connect)).call.apply(_ref, [this].concat(args))), _this), _this.unsubscribes = [], _this.state = fields.reduce(function (a, b) {
        return _extends({}, a, _defineProperty({}, b, _jetstate.state[b]));
      }, {}), _this.componentDidMount = function () {
        return fields.forEach(function (field) {
          return _this.unsubscribes.push((0, _jetemit.on)(field, function () {
            return _this.setState(_defineProperty({}, field, _jetstate.state[field]));
          }));
        });
      }, _this.componentWillUnmount = function () {
        return _this.unsubscribes.forEach(function (unsubscribe) {
          return unsubscribe();
        });
      }, _this.render = function () {
        return _react2.default.createElement(Component, _extends({}, _this.props, _this.state));
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Connect;
  }(_react.PureComponent);
};

var on = exports.on = _jetemit.on;

var emit = exports.emit = _jetemit.emit;

var init = exports.init = _jetstate.init;

var state = exports.state = _jetstate.state;