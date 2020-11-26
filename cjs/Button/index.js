"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

var Button = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: _index["default"]['button']
    }, "1");
  };

  return Button;
}(_react["default"].Component);

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=index.js.map