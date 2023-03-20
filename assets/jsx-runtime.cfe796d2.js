var i=Object.defineProperty;var l=(t,e)=>i(t,"name",{value:e,configurable:!0});import{r as u}from"./index.f573d712.js";var s={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=u.exports,c=Symbol.for("react.element"),m=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,j=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,_){var r,o={},p=null,f=null;_!==void 0&&(p=""+_),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)y.call(e,r)&&!d.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:p,ref:f,props:o,_owner:j.current}}l(a,"q");n.Fragment=m;n.jsx=a;n.jsxs=a;(function(t){t.exports=n})(s);const O=s.exports.Fragment,v=s.exports.jsx,b=s.exports.jsxs,E=Object.freeze(Object.defineProperty({__proto__:null,Fragment:O,jsx:v,jsxs:b},Symbol.toStringTag,{value:"Module"}));export{O as F,b as a,E as b,v as j};
//# sourceMappingURL=jsx-runtime.cfe796d2.js.map
