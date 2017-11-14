"use strict";module.exports=function(){function e(){}function t(e,t){if("function"!=typeof t)throw new v("expecting a function but got "+_.classString(t));if(e.constructor!==i)throw new v("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n")}function i(e){this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,e!==b&&(t(this,e),this._resolveFromExecutor(e)),this._promiseCreated(),this._fireEvent("promiseCreated",this)}function r(e){this.promise._resolveCallback(e)}function n(e){this.promise._rejectCallback(e,!1)}function o(e){var t=new i(b);t._fulfillmentHandler0=e,t._rejectionHandler0=e,t._promise0=e,t._receiver0=e}var s,l=function(){return new v("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")},a=function(){return new i.PromiseInspection(this._target())},c=function(e){return i.reject(new v(e))},u={},_=require("./util");s=_.isNode?function(){var e=process.domain;return void 0===e&&(e=null),e}:function(){return null},_.notEnumerableProp(i,"_getDomain",s);var h=require("./es5"),f=require("./async"),d=new f;h.defineProperty(i,"_async",{value:d});var p=require("./errors"),v=i.TypeError=p.TypeError;i.RangeError=p.RangeError;var m=i.CancellationError=p.CancellationError;i.TimeoutError=p.TimeoutError,i.OperationalError=p.OperationalError,i.RejectionError=p.OperationalError,i.AggregateError=p.AggregateError;var b=function(){},y={},j={},g=require("./thenables")(i,b),F=require("./promise_array")(i,b,g,c,e),C=require("./context")(i),w=C.create,k=require("./debuggability")(i,C),P=(k.CapturedTrace,require("./finally")(i,g)),q=require("./catch_filter")(j),E=require("./nodeback"),H=_.errorObj,A=_.tryCatch;return i.prototype.toString=function(){return"[object Promise]"},i.prototype.caught=i.prototype["catch"]=function(e){var t=arguments.length;if(t>1){var i,r=new Array(t-1),n=0;for(i=0;i<t-1;++i){var o=arguments[i];if(!_.isObject(o))return c("expecting an object but got A catch statement predicate "+_.classString(o));r[n++]=o}return r.length=n,e=arguments[i],this.then(void 0,q(r,e,this))}return this.then(void 0,e)},i.prototype.reflect=function(){return this._then(a,a,void 0,this,void 0)},i.prototype.then=function(e,t){if(k.warnings()&&arguments.length>0&&"function"!=typeof e&&"function"!=typeof t){var i=".then() only accepts functions but was passed: "+_.classString(e);arguments.length>1&&(i+=", "+_.classString(t)),this._warn(i)}return this._then(e,t,void 0,void 0,void 0)},i.prototype.done=function(e,t){var i=this._then(e,t,void 0,void 0,void 0);i._setIsFinal()},i.prototype.spread=function(e){return"function"!=typeof e?c("expecting a function but got "+_.classString(e)):this.all()._then(e,void 0,void 0,y,void 0)},i.prototype.toJSON=function(){var e={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(e.fulfillmentValue=this.value(),e.isFulfilled=!0):this.isRejected()&&(e.rejectionReason=this.reason(),e.isRejected=!0),e},i.prototype.all=function(){return arguments.length>0&&this._warn(".all() was passed arguments but it does not take any"),new F(this).promise()},i.prototype.error=function(e){return this.caught(_.originatesFromRejection,e)},i.getNewLibraryCopy=module.exports,i.is=function(e){return e instanceof i},i.fromNode=i.fromCallback=function(e){var t=new i(b);t._captureStackTrace();var r=arguments.length>1&&!!Object(arguments[1]).multiArgs,n=A(e)(E(t,r));return n===H&&t._rejectCallback(n.e,!0),t._isFateSealed()||t._setAsyncGuaranteed(),t},i.all=function(e){return new F(e).promise()},i.cast=function(e){var t=g(e);return t instanceof i||(t=new i(b),t._captureStackTrace(),t._setFulfilled(),t._rejectionHandler0=e),t},i.resolve=i.fulfilled=i.cast,i.reject=i.rejected=function(e){var t=new i(b);return t._captureStackTrace(),t._rejectCallback(e,!0),t},i.setScheduler=function(e){if("function"!=typeof e)throw new v("expecting a function but got "+_.classString(e));return d.setScheduler(e)},i.prototype._then=function(e,t,r,n,o){var l=void 0!==o,a=l?o:new i(b),c=this._target(),u=c._bitField;l||(a._propagateFrom(this,3),a._captureStackTrace(),void 0===n&&0!==(2097152&this._bitField)&&(n=0!==(50397184&u)?this._boundValue():c===this?void 0:this._boundTo),this._fireEvent("promiseChained",this,a));var h=s();if(0!==(50397184&u)){var f,p,v=c._settlePromiseCtx;0!==(33554432&u)?(p=c._rejectionHandler0,f=e):0!==(16777216&u)?(p=c._fulfillmentHandler0,f=t,c._unsetRejectionIsUnhandled()):(v=c._settlePromiseLateCancellationObserver,p=new m("late cancellation observer"),c._attachExtraTrace(p),f=t),d.invoke(v,c,{handler:null===h?f:"function"==typeof f&&_.domainBind(h,f),promise:a,receiver:n,value:p})}else c._addCallbacks(e,t,a,n,h);return a},i.prototype._length=function(){return 65535&this._bitField},i.prototype._isFateSealed=function(){return 0!==(117506048&this._bitField)},i.prototype._isFollowing=function(){return 67108864===(67108864&this._bitField)},i.prototype._setLength=function(e){this._bitField=this._bitField&-65536|65535&e},i.prototype._setFulfilled=function(){this._bitField=33554432|this._bitField,this._fireEvent("promiseFulfilled",this)},i.prototype._setRejected=function(){this._bitField=16777216|this._bitField,this._fireEvent("promiseRejected",this)},i.prototype._setFollowing=function(){this._bitField=67108864|this._bitField,this._fireEvent("promiseResolved",this)},i.prototype._setIsFinal=function(){this._bitField=4194304|this._bitField},i.prototype._isFinal=function(){return(4194304&this._bitField)>0},i.prototype._unsetCancelled=function(){this._bitField=this._bitField&-65537},i.prototype._setCancelled=function(){this._bitField=65536|this._bitField,this._fireEvent("promiseCancelled",this)},i.prototype._setWillBeCancelled=function(){this._bitField=8388608|this._bitField},i.prototype._setAsyncGuaranteed=function(){d.hasCustomScheduler()||(this._bitField=134217728|this._bitField)},i.prototype._receiverAt=function(e){var t=0===e?this._receiver0:this[4*e-4+3];if(t!==u)return void 0===t&&this._isBound()?this._boundValue():t},i.prototype._promiseAt=function(e){return this[4*e-4+2]},i.prototype._fulfillmentHandlerAt=function(e){return this[4*e-4+0]},i.prototype._rejectionHandlerAt=function(e){return this[4*e-4+1]},i.prototype._boundValue=function(){},i.prototype._migrateCallback0=function(e){var t=(e._bitField,e._fulfillmentHandler0),i=e._rejectionHandler0,r=e._promise0,n=e._receiverAt(0);void 0===n&&(n=u),this._addCallbacks(t,i,r,n,null)},i.prototype._migrateCallbackAt=function(e,t){var i=e._fulfillmentHandlerAt(t),r=e._rejectionHandlerAt(t),n=e._promiseAt(t),o=e._receiverAt(t);void 0===o&&(o=u),this._addCallbacks(i,r,n,o,null)},i.prototype._addCallbacks=function(e,t,i,r,n){var o=this._length();if(o>=65531&&(o=0,this._setLength(0)),0===o)this._promise0=i,this._receiver0=r,"function"==typeof e&&(this._fulfillmentHandler0=null===n?e:_.domainBind(n,e)),"function"==typeof t&&(this._rejectionHandler0=null===n?t:_.domainBind(n,t));else{var s=4*o-4;this[s+2]=i,this[s+3]=r,"function"==typeof e&&(this[s+0]=null===n?e:_.domainBind(n,e)),"function"==typeof t&&(this[s+1]=null===n?t:_.domainBind(n,t))}return this._setLength(o+1),o},i.prototype._proxy=function(e,t){this._addCallbacks(void 0,void 0,t,e,null)},i.prototype._resolveCallback=function(e,t){if(0===(117506048&this._bitField)){if(e===this)return this._rejectCallback(l(),!1);var r=g(e,this);if(!(r instanceof i))return this._fulfill(e);t&&this._propagateFrom(r,2);var n=r._target();if(n===this)return void this._reject(l());var o=n._bitField;if(0===(50397184&o)){var s=this._length();s>0&&n._migrateCallback0(this);for(var a=1;a<s;++a)n._migrateCallbackAt(this,a);this._setFollowing(),this._setLength(0),this._setFollowee(n)}else if(0!==(33554432&o))this._fulfill(n._value());else if(0!==(16777216&o))this._reject(n._reason());else{var c=new m("late cancellation observer");n._attachExtraTrace(c),this._reject(c)}}},i.prototype._rejectCallback=function(e,t,i){var r=_.ensureErrorObject(e),n=r===e;if(!n&&!i&&k.warnings()){var o="a promise was rejected with a non-error: "+_.classString(e);this._warn(o,!0)}this._attachExtraTrace(r,!!t&&n),this._reject(e)},i.prototype._resolveFromExecutor=function(e){var t=this;this._captureStackTrace(),this._pushContext();var i=!0,r=this._execute(e,function(e){t._resolveCallback(e)},function(e){t._rejectCallback(e,i)});i=!1,this._popContext(),void 0!==r&&t._rejectCallback(r,!0)},i.prototype._settlePromiseFromHandler=function(e,t,i,r){var n=r._bitField;if(0===(65536&n)){r._pushContext();var o;t===y?i&&"number"==typeof i.length?o=A(e).apply(this._boundValue(),i):(o=H,o.e=new v("cannot .spread() a non-array: "+_.classString(i))):o=A(e).call(t,i);var s=r._popContext();n=r._bitField,0===(65536&n)&&(o===j?r._reject(i):o===H?r._rejectCallback(o.e,!1):(k.checkForgottenReturns(o,s,"",r,this),r._resolveCallback(o)))}},i.prototype._target=function(){for(var e=this;e._isFollowing();)e=e._followee();return e},i.prototype._followee=function(){return this._rejectionHandler0},i.prototype._setFollowee=function(e){this._rejectionHandler0=e},i.prototype._settlePromise=function(t,r,n,o){var s=t instanceof i,l=this._bitField,c=0!==(134217728&l);0!==(65536&l)?(s&&t._invokeInternalOnCancel(),n instanceof P&&n.isFinallyHandler()?(n.cancelPromise=t,A(r).call(n,o)===H&&t._reject(H.e)):r===a?t._fulfill(a.call(n)):n instanceof e?n._promiseCancelled(t):s||t instanceof F?t._cancel():n.cancel()):"function"==typeof r?s?(c&&t._setAsyncGuaranteed(),this._settlePromiseFromHandler(r,n,o,t)):r.call(n,o,t):n instanceof e?n._isResolved()||(0!==(33554432&l)?n._promiseFulfilled(o,t):n._promiseRejected(o,t)):s&&(c&&t._setAsyncGuaranteed(),0!==(33554432&l)?t._fulfill(o):t._reject(o))},i.prototype._settlePromiseLateCancellationObserver=function(e){var t=e.handler,r=e.promise,n=e.receiver,o=e.value;"function"==typeof t?r instanceof i?this._settlePromiseFromHandler(t,n,o,r):t.call(n,o,r):r instanceof i&&r._reject(o)},i.prototype._settlePromiseCtx=function(e){this._settlePromise(e.promise,e.handler,e.receiver,e.value)},i.prototype._settlePromise0=function(e,t,i){var r=this._promise0,n=this._receiverAt(0);this._promise0=void 0,this._receiver0=void 0,this._settlePromise(r,e,n,t)},i.prototype._clearCallbackDataAtIndex=function(e){var t=4*e-4;this[t+2]=this[t+3]=this[t+0]=this[t+1]=void 0},i.prototype._fulfill=function(e){var t=this._bitField;if(!((117506048&t)>>>16)){if(e===this){var i=l();return this._attachExtraTrace(i),this._reject(i)}this._setFulfilled(),this._rejectionHandler0=e,(65535&t)>0&&(0!==(134217728&t)?this._settlePromises():d.settlePromises(this))}},i.prototype._reject=function(e){var t=this._bitField;if(!((117506048&t)>>>16))return this._setRejected(),this._fulfillmentHandler0=e,this._isFinal()?d.fatalError(e,_.isNode):void((65535&t)>0?d.settlePromises(this):this._ensurePossibleRejectionHandled())},i.prototype._fulfillPromises=function(e,t){for(var i=1;i<e;i++){var r=this._fulfillmentHandlerAt(i),n=this._promiseAt(i),o=this._receiverAt(i);this._clearCallbackDataAtIndex(i),this._settlePromise(n,r,o,t)}},i.prototype._rejectPromises=function(e,t){for(var i=1;i<e;i++){var r=this._rejectionHandlerAt(i),n=this._promiseAt(i),o=this._receiverAt(i);this._clearCallbackDataAtIndex(i),this._settlePromise(n,r,o,t)}},i.prototype._settlePromises=function(){var e=this._bitField,t=65535&e;if(t>0){if(0!==(16842752&e)){var i=this._fulfillmentHandler0;this._settlePromise0(this._rejectionHandler0,i,e),this._rejectPromises(t,i)}else{var r=this._rejectionHandler0;this._settlePromise0(this._fulfillmentHandler0,r,e),this._fulfillPromises(t,r)}this._setLength(0)}this._clearCancellationData()},i.prototype._settledValue=function(){var e=this._bitField;return 0!==(33554432&e)?this._rejectionHandler0:0!==(16777216&e)?this._fulfillmentHandler0:void 0},i.defer=i.pending=function(){k.deprecated("Promise.defer","new Promise");var e=new i(b);return{promise:e,resolve:r,reject:n}},_.notEnumerableProp(i,"_makeSelfResolutionError",l),require("./method")(i,b,g,c,k),require("./bind")(i,b,g,k),require("./cancel")(i,F,c,k),require("./direct_resolve")(i),require("./synchronous_inspection")(i),require("./join")(i,F,g,b,d,s),i.Promise=i,i.version="3.4.7",require("./map.js")(i,F,c,g,b,k),require("./call_get.js")(i),require("./using.js")(i,c,g,w,b,k),require("./timers.js")(i,b,k),require("./generators.js")(i,c,b,g,e,k),require("./nodeify.js")(i),require("./promisify.js")(i,b),require("./props.js")(i,F,g,c),require("./race.js")(i,b,g,c),require("./reduce.js")(i,F,c,g,b,k),require("./settle.js")(i,F,k),require("./some.js")(i,F,c),require("./filter.js")(i,b),require("./each.js")(i,b),require("./any.js")(i),_.toFastProperties(i),_.toFastProperties(i.prototype),o({a:1}),o({b:2}),o({c:3}),o(1),o(function(){}),o(void 0),o(!1),o(new i(b)),k.setBounds(f.firstLineError,_.lastLineError),i};