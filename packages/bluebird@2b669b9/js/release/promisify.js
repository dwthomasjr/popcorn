"use strict";module.exports=function(r,e){function t(r){return!k.test(r)}function n(r){try{return r.__isPromisified__===!0}catch(e){return!1}}function a(r,e,t){var a=p.getDataPropertyOrDefault(r,e+t,y);return!!a&&n(a)}function i(r,e,t){for(var n=0;n<r.length;n+=2){var a=r[n];if(t.test(a))for(var i=a.replace(t,""),o=0;o<r.length;o+=2)if(r[o]===i)throw new d("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s",e))}}function o(r,e,t,o){for(var c=p.inheritedDataKeys(r),s=[],u=0;u<c.length;++u){var f=c[u],l=r[f],m=o===w||w(f,l,r);"function"!=typeof l||n(l)||a(r,f,e)||!o(f,l,r,m)||s.push(f,l)}return i(s,e,t),s}function c(t,n,a,i,o,c){function s(){var a=n;n===l&&(a=this);var i=new r(e);i._captureStackTrace();var o="string"==typeof f&&this!==u?this[f]:t,s=m(i,c);try{o.apply(a,h(arguments,s))}catch(p){i._rejectCallback(g(p),!0,!0)}return i._isFateSealed()||i._setAsyncGuaranteed(),i}var u=function(){return this}(),f=t;return"string"==typeof f&&(t=i),p.notEnumerableProp(s,"__isPromisified__",!0),s}function s(r,e,t,n,a){for(var i=new RegExp(P(e)+"$"),c=o(r,e,i,t),s=0,u=c.length;s<u;s+=2){var f=c[s],m=c[s+1],h=f+e;if(n===x)r[h]=x(f,l,f,m,e,a);else{var g=n(m,function(){return x(f,l,f,m,e,a)});p.notEnumerableProp(g,"__isPromisified__",!0),r[h]=g}}return p.toFastProperties(r),r}function u(r,e,t){return x(r,e,void 0,r,null,t)}var f,l={},p=require("./util"),m=require("./nodeback"),h=p.withAppended,g=p.maybeWrapAsError,v=p.canEvaluate,d=require("./errors").TypeError,b="Async",y={__isPromisified__:!0},_=["arity","length","name","arguments","caller","callee","prototype","__isPromisified__"],k=new RegExp("^(?:"+_.join("|")+")$"),w=function(r){return p.isIdentifier(r)&&"_"!==r.charAt(0)&&"constructor"!==r},P=function(r){return r.replace(/([$])/,"\\$")},A=function(r){for(var e=[r],t=Math.max(0,r-1-3),n=r-1;n>=t;--n)e.push(n);for(var n=r+1;n<=3;++n)e.push(n);return e},C=function(r){return p.filledRange(r,"_arg","")},E=function(r){return p.filledRange(Math.max(r,3),"_arg","")},F=function(r){return"number"==typeof r.length?Math.max(Math.min(r.length,1024),0):0};f=function(t,n,a,i,o,c){function s(r){var e,t=C(r).join(", "),a=r>0?", ":"";return e=d?"ret = callback.call(this, {{args}}, nodeback); break;\n":void 0===n?"ret = callback({{args}}, nodeback); break;\n":"ret = callback.call(receiver, {{args}}, nodeback); break;\n",e.replace("{{args}}",t).replace(", ",a)}function u(){for(var r="",e=0;e<v.length;++e)r+="case "+v[e]+":"+s(v[e]);return r+="                                                             \n        default:                                                             \n            var args = new Array(len + 1);                                   \n            var i = 0;                                                       \n            for (var i = 0; i < len; ++i) {                                  \n               args[i] = arguments[i];                                       \n            }                                                                \n            args[i] = nodeback;                                              \n            [CodeForCall]                                                    \n            break;                                                           \n        ".replace("[CodeForCall]",d?"ret = callback.apply(this, args);\n":"ret = callback.apply(receiver, args);\n")}var f=Math.max(0,F(i)-1),v=A(f),d="string"==typeof t||n===l,b="string"==typeof t?"this != null ? this['"+t+"'] : fn":"fn",y="'use strict';                                                \n        var ret = function (Parameters) {                                    \n            'use strict';                                                    \n            var len = arguments.length;                                      \n            var promise = new Promise(INTERNAL);                             \n            promise._captureStackTrace();                                    \n            var nodeback = nodebackForPromise(promise, "+c+");   \n            var ret;                                                         \n            var callback = tryCatch([GetFunctionCode]);                      \n            switch(len) {                                                    \n                [CodeForSwitchCase]                                          \n            }                                                                \n            if (ret === errorObj) {                                          \n                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n            }                                                                \n            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n            return promise;                                                  \n        };                                                                   \n        notEnumerableProp(ret, '__isPromisified__', true);                   \n        return ret;                                                          \n    ".replace("[CodeForSwitchCase]",u()).replace("[GetFunctionCode]",b);return y=y.replace("Parameters",E(f)),new Function("Promise","fn","receiver","withAppended","maybeWrapAsError","nodebackForPromise","tryCatch","errorObj","notEnumerableProp","INTERNAL",y)(r,i,n,h,g,m,p.tryCatch,p.errorObj,p.notEnumerableProp,e)};var x=v?f:c;r.promisify=function(r,e){if("function"!=typeof r)throw new d("expecting a function but got "+p.classString(r));if(n(r))return r;e=Object(e);var a=void 0===e.context?l:e.context,i=!!e.multiArgs,o=u(r,a,i);return p.copyDescriptors(r,o,t),o},r.promisifyAll=function(r,e){if("function"!=typeof r&&"object"!=typeof r)throw new d("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");e=Object(e);var t=!!e.multiArgs,n=e.suffix;"string"!=typeof n&&(n=b);var a=e.filter;"function"!=typeof a&&(a=w);var i=e.promisifier;if("function"!=typeof i&&(i=x),!p.isIdentifier(n))throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");for(var o=p.inheritedDataKeys(r),c=0;c<o.length;++c){var u=r[o[c]];"constructor"!==o[c]&&p.isClass(u)&&(s(u.prototype,n,a,i,t),s(u,n,a,i,t))}return s(r,n,a,i,t)}};