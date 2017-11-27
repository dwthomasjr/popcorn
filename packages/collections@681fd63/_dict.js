"use strict";function Dict(t,e){return this instanceof Dict?(e=e||Function.noop,this.getDefault=e,this.store=Object.create(null),this.length=0,void this.addEach(t)):new Dict(t,e)}var Shim=require("./shim"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map");module.exports=Dict,Dict.Dict=Dict,Object.addEach(Dict.prototype,GenericCollection.prototype),Object.addEach(Dict.prototype,GenericMap.prototype),Dict.from=GenericCollection.from,Dict.prototype.constructClone=function(t){return new this.constructor(t,this.getDefault)},Dict.prototype.assertString=function(t){if("string"!=typeof t)throw new TypeError("key must be a string but Got "+t)},Object.defineProperty(Dict.prototype,"$__proto__",{writable:!0}),Object.defineProperty(Dict.prototype,"_hasProto",{get:function(){return this.hasOwnProperty("$__proto__")&&"undefined"!=typeof this._protoValue}}),Object.defineProperty(Dict.prototype,"_protoValue",{get:function(){return this.$__proto__},set:function(t){this.$__proto__=t}}),Object.defineProperty(Dict.prototype,"size",GenericCollection._sizePropertyDescriptor),Dict.prototype.get=function(t,e){return this.assertString(t),"__proto__"===t?this._hasProto?this._protoValue:arguments.length>1?e:this.getDefault(t):t in this.store?this.store[t]:arguments.length>1?e:this.getDefault(t)},Dict.prototype.set=function(t,e){this.assertString(t);var i="__proto__"===t;return(i?this._hasProto:t in this.store)?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,i?this._protoValue:this.store[t]),i?this._protoValue=e:this.store[t]=e,this.dispatchesMapChanges&&this.dispatchMapChange(t,e),!1):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,void 0),this.length++,i?this._protoValue=e:this.store[t]=e,this.dispatchesMapChanges&&this.dispatchMapChange(t,e),!0)},Dict.prototype.has=function(t){return this.assertString(t),"__proto__"===t?this._hasProto:t in this.store},Dict.prototype["delete"]=function(t){return this.assertString(t),"__proto__"===t?!!this._hasProto&&(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,this._protoValue),this._protoValue=void 0,this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0),!0):t in this.store&&(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,this.store[t]),delete this.store[t],this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0),!0)},Dict.prototype.clear=function(){var t;this._hasProto&&(this.dispatchesMapChanges&&this.dispatchBeforeMapChange("__proto__",this._protoValue),this._protoValue=void 0,this.dispatchesMapChanges&&this.dispatchMapChange("__proto__",void 0));for(t in this.store)this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,this.store[t]),delete this.store[t],this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0);this.length=0},Dict.prototype.reduce=function(t,e,i){this._hasProto&&(e=t.call(i,e,"$__proto__","__proto__",this));var o=this.store;for(var s in this.store)e=t.call(i,e,o[s],s,this);return e},Dict.prototype.reduceRight=function(t,e,i){var o=this,s=this.store;return e=Object.keys(this.store).reduceRight(function(e,r){return t.call(i,e,s[r],r,o)},e),this._hasProto?t.call(i,e,this._protoValue,"__proto__",o):e},Dict.prototype.one=function(){var t;for(t in this.store)return this.store[t];return this._protoValue},Dict.prototype.toJSON=function(){return this.toObject()};