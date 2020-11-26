import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import styles from './index.less';

var SexRadio = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SexRadio, _React$Component);

  function SexRadio() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SexRadio.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("div", {
      className: styles['sexRadio']
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      id: "male",
      name: "gender",
      value: "male"
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "male"
    }, "Male"), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      id: "female",
      name: "gender",
      value: "female"
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "female"
    }, "Female"));
  };

  return SexRadio;
}(React.Component);

export default SexRadio;
//# sourceMappingURL=index.js.map