// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"",u=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,u,i,l;if(null==t)return o.call(t);e=t[f],l=f,n=null!=(i=t)&&r.call(i,l);try{t[f]=void 0}catch(n){return o.call(t)}return u=o.call(t),n?t[f]=e:delete t[f],u}:function(t){return o.call(t)},i="function"==typeof Float32Array,l=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,c="function"==typeof Float32Array?Float32Array:void 0,y=new(function(){var t,n,o;if("function"!=typeof a)return!1;try{n=new a([1,3.14,-3.14,5e40]),o=n,t=(i&&o instanceof Float32Array||"[object Float32Array]"===u(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===l}catch(n){t=!1}return t}()?c:function(){throw new Error("not implemented")})(1),p="function"==typeof t?t:function(t){return y[0]=t,y[0]},d=p(57.29577951308232),b=Math.sqrt,s=p(1.5707963267948966);function m(t){var n,o,r,e;return function(t){return t!=t}(t)?NaN:((t=p(t))>0?(o=1,r=t):(o=-1,r=-t),r>1?NaN:r<1e-4?t:(r>.5?(r=function(t){return p(b(p(t)))}(e=p(.5*p(1-r))),n=1):(e=p(r*r),n=0),e=p(p(p(function(t){return 0===t?.16666752099990845:p(.16666752099990845+p(t*p(.07495300471782684+p(t*p(.04547002539038658+p(t*p(.024181311950087547+p(.04216320067644119*t))))))))}(e)*e)*r)+r),0!==n&&(e=p(e+e),e=p(s-e)),o<0&&(e=-e),e))}return function(t){return function(t){return p(p(t)*d)}(m(p(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).asindf=n();
//# sourceMappingURL=index.js.map
