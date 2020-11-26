"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

var SexRadio = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(SexRadio, _React$Component);

  function SexRadio() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SexRadio.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: _index["default"]['sexRadio']
    }, /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      id: "male",
      name: "gender",
      value: "male"
    }), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "male"
    }, "Male"), /*#__PURE__*/_react["default"].createElement("input", {
      type: "radio",
      id: "female",
      name: "gender",
      value: "female"
    }), /*#__PURE__*/_react["default"].createElement("label", {
      htmlFor: "female"
    }, "Female"));
  };

  return SexRadio;
}(_react["default"].Component);

var _default = SexRadio;
exports["default"] = _default;
//# sourceMappingURL=index.js.map