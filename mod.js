// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,l="function"==typeof n?n.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,a,y,c;if(null==t)return r.call(t);e=t[l],c=l,n=null!=(y=t)&&o.call(y,c);try{t[l]=void 0}catch(o){return r.call(t)}return a=r.call(t),n?t[l]=e:delete t[l],a}:function(t){return r.call(t)};var a=Array.isArray?Array.isArray:function(t){return"[object Array]"===e(t)};function y(t){return"object"==typeof t&&null!==t&&!a(t)}export{y as default};
//# sourceMappingURL=mod.js.map