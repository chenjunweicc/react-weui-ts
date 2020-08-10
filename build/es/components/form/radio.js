import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from '../../utils/classnames';

var Radio = function Radio(props) {
  var className = props.className,
      others = __rest(props, ["className"]);

  var cls = classNames(_defineProperty({
    'weui-check': true
  }, className, className));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    type: "radio"
  }, others)), /*#__PURE__*/React.createElement("span", {
    className: "weui-icon-checked"
  }));
};

export default Radio;