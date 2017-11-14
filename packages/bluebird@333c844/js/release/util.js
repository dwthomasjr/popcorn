"use strict";function tryCatcher(){try{var r=tryCatchTarget;return tryCatchTarget=null,r.apply(this,arguments)}catch(e){return errorObj.e=e,errorObj}}function tryCatch(r){return tryCatchTarget=r,tryCatcher}function isPrimitive(r){return null==r||r===!0||r===!1||"string"==typeof r||"number"==typeof r}function isObject(r){return"function"==typeof r||"object"==typeof r&&null!==r}function maybeWrapAsError(r){return isPrimitive(r)?new Error(safeToString(r)):r}function withAppended(r,e){var t,n=r.length,o=new Array(n+1);for(t=0;t<n;++t)o[t]=r[t];return o[t]=e,o}function getDataPropertyOrDefault(r,e,t){if(!es5.isES5)return{}.hasOwnProperty.call(r,e)?r[e]:void 0;var n=Object.getOwnPropertyDescriptor(r,e);return null!=n?null==n.get&&null==n.set?n.value:t:void 0}function notEnumerableProp(r,e,t){if(isPrimitive(r))return r;var n={value:t,configurable:!0,enumerable:!1,writable:!0};return es5.defineProperty(r,e,n),r}function thrower(r){throw r}function isClass(r){try{if("function"==typeof r){var e=es5.names(r.prototype),t=es5.isES5&&e.length>1,n=e.length>0&&!(1===e.length&&"constructor"===e[0]),o=thisAssignmentPattern.test(r+"")&&es5.names(r).length>0;if(t||n||o)return!0}return!1}catch(i){return!1}}function toFastProperties(r){function e(){}e.prototype=r;for(var t=8;t--;)new e;return r}function isIdentifier(r){return rident.test(r)}function filledRange(r,e,t){for(var n=new Array(r),o=0;o<r;++o)n[o]=e+o+t;return n}function safeToString(r){try{return r+""}catch(e){return"[no string representation]"}}function isError(r){return null!==r&&"object"==typeof r&&"string"==typeof r.message&&"string"==typeof r.name}function markAsOriginatingFromRejection(r){try{notEnumerableProp(r,"isOperational",!0)}catch(e){}}function originatesFromRejection(r){return null!=r&&(r instanceof Error.__BluebirdErrorTypes__.OperationalError||r.isOperational===!0)}function canAttachTrace(r){return isError(r)&&es5.propertyIsWritable(r,"stack")}function classString(r){return{}.toString.call(r)}function copyDescriptors(r,e,t){for(var n=es5.names(r),o=0;o<n.length;++o){var i=n[o];if(t(i))try{es5.defineProperty(e,i,es5.getDescriptor(r,i))}catch(a){}}}function env(r){return hasEnvVariables?process.env[r]:void 0}function getNativePromise(){if("function"==typeof Promise)try{var r=new Promise(function(){});if("[object Promise]"==={}.toString.call(r))return Promise}catch(e){}}function domainBind(r,e){return r.bind(e)}var es5=require("./es5"),canEvaluate="undefined"==typeof navigator,errorObj={e:{}},tryCatchTarget,globalObject="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0!==this?this:null,inherits=function(r,e){function t(){this.constructor=r,this.constructor$=e;for(var t in e.prototype)n.call(e.prototype,t)&&"$"!==t.charAt(t.length-1)&&(this[t+"$"]=e.prototype[t])}var n={}.hasOwnProperty;return t.prototype=e.prototype,r.prototype=new t,r.prototype},inheritedDataKeys=function(){var r=[Array.prototype,Object.prototype,Function.prototype],e=function(e){for(var t=0;t<r.length;++t)if(r[t]===e)return!0;return!1};if(es5.isES5){var t=Object.getOwnPropertyNames;return function(r){for(var n=[],o=Object.create(null);null!=r&&!e(r);){var i;try{i=t(r)}catch(a){return n}for(var s=0;s<i.length;++s){var c=i[s];if(!o[c]){o[c]=!0;var u=Object.getOwnPropertyDescriptor(r,c);null!=u&&null==u.get&&null==u.set&&n.push(c)}}r=es5.getPrototypeOf(r)}return n}}var n={}.hasOwnProperty;return function(t){if(e(t))return[];var o=[];r:for(var i in t)if(n.call(t,i))o.push(i);else{for(var a=0;a<r.length;++a)if(n.call(r[a],i))continue r;o.push(i)}return o}}(),thisAssignmentPattern=/this\s*\.\s*\S+\s*=/,rident=/^[a-z$_][a-z$_0-9]*$/i,ensureErrorObject=function(){return"stack"in new Error?function(r){return canAttachTrace(r)?r:new Error(safeToString(r))}:function(r){if(canAttachTrace(r))return r;try{throw new Error(safeToString(r))}catch(e){return e}}}(),asArray=function(r){return es5.isArray(r)?r:null};if("undefined"!=typeof Symbol&&Symbol.iterator){var ArrayFrom="function"==typeof Array.from?function(r){return Array.from(r)}:function(r){for(var e,t=[],n=r[Symbol.iterator]();!(e=n.next()).done;)t.push(e.value);return t};asArray=function(r){return es5.isArray(r)?r:null!=r&&"function"==typeof r[Symbol.iterator]?ArrayFrom(r):null}}var isNode="undefined"!=typeof process&&"[object process]"===classString(process).toLowerCase(),hasEnvVariables="undefined"!=typeof process&&"undefined"!=typeof process.env,ret={isClass:isClass,isIdentifier:isIdentifier,inheritedDataKeys:inheritedDataKeys,getDataPropertyOrDefault:getDataPropertyOrDefault,thrower:thrower,isArray:es5.isArray,asArray:asArray,notEnumerableProp:notEnumerableProp,isPrimitive:isPrimitive,isObject:isObject,isError:isError,canEvaluate:canEvaluate,errorObj:errorObj,tryCatch:tryCatch,inherits:inherits,withAppended:withAppended,maybeWrapAsError:maybeWrapAsError,toFastProperties:toFastProperties,filledRange:filledRange,toString:safeToString,canAttachTrace:canAttachTrace,ensureErrorObject:ensureErrorObject,originatesFromRejection:originatesFromRejection,markAsOriginatingFromRejection:markAsOriginatingFromRejection,classString:classString,copyDescriptors:copyDescriptors,hasDevTools:"undefined"!=typeof chrome&&chrome&&"function"==typeof chrome.loadTimes,isNode:isNode,hasEnvVariables:hasEnvVariables,env:env,global:globalObject,getNativePromise:getNativePromise,domainBind:domainBind};ret.isRecentNode=ret.isNode&&function(){var r=process.versions.node.split(".").map(Number);return 0===r[0]&&r[1]>10||r[0]>0}(),ret.isNode&&ret.toFastProperties(process);try{throw new Error}catch(e){ret.lastLineError=e}module.exports=ret;