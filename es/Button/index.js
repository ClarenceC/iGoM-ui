import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import styles from './index.less';

var Button = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("button", {
      className: styles['button']
    }, "1");
  };

  return Button;
}(React.Component);

export default Button;
//# sourceMappingURL=index.js.map