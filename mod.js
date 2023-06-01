// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var l="function"==typeof Symbol?Symbol.toStringTag:"";var n=r&&"symbol"==typeof Symbol.toStringTag?function(r){var n,a,e,y,c;if(null==r)return t.call(r);a=r[l],c=l,n=null!=(y=r)&&o.call(y,c);try{r[l]=void 0}catch(o){return t.call(r)}return e=t.call(r),n?r[l]=a:delete r[l],e}:function(r){return t.call(r)};var a=Array.isArray?Array.isArray:function(r){return"[object Array]"===n(r)};function e(r){return"object"==typeof r&&null!==r&&!a(r)}export{e as default};
//# sourceMappingURL=mod.js.map
