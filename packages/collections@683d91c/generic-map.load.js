montageDefine("683d91c","generic-map",{dependencies:["./shim-object","./iterator"],factory:function(t,e,s){"use strict";function r(){throw new Error("Can't construct. GenericMap is a mixin.")}function i(t,e){this.key=t,this.value=e}var n=t("./shim-object"),h=t("./iterator");s.exports=r,r.prototype.isMap=!0,r.prototype.addEach=function(t){var e;if(t&&n(t)===t)if("function"==typeof t.forEach)t.isMap===!0?t.forEach(function(t,e){this.set(e,t)},this):t.forEach(function(t){this.set(t[0],t[1])},this);else if("number"==typeof t.length)for(e=0;e<t.length;e++)this.add(t[e],e);else n.keys(t).forEach(function(e){this.set(e,t[e])},this);else if(t&&"number"==typeof t.length)for(e=0;e<t.length;e++)this.add(t[e],e);return this},r.prototype.get=function(t,e){var s=this.store.get(new this.Item(t));return s?s.value:arguments.length>1?(console.log("Use of a second argument as default value is deprecated to match standards"),e):this.getDefault(t)},r.prototype.set=function(t,e){var s=new this.Item(t,e),r=this.store.get(s),i=!1;return r?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,r.value),r.value=e,this.dispatchesMapChanges&&this.dispatchMapChange(t,e)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,void 0),this.store.add(s)&&(this.length++,i=!0),this.dispatchesMapChanges&&this.dispatchMapChange(t,e)),this},r.prototype.add=function(t,e){return this.set(e,t)},r.prototype.has=function(t){return this.store.has(new this.Item(t))},r.prototype["delete"]=function(t){var e=new this.Item(t);if(this.store.has(e)){var s=this.store.get(e).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(t,s),this.store["delete"](e),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(t,void 0),!0}return!1},r.prototype.clear=function(){var t,e;if(this.dispatchesMapChanges&&(this.forEach(function(t,e){this.dispatchBeforeMapChange(e,t)},this),t=this.keysArray()),this.store.clear(),this.length=0,this.dispatchesMapChanges)for(var s=0;e=t[s];s++)this.dispatchMapChange(e)},r.prototype.reduce=function(t,e,s){return this.store.reduce(function(e,r){return t.call(s,e,r.value,r.key,this)},e,this)},r.prototype.reduceRight=function(t,e,s){return this.store.reduceRight(function(e,r){return t.call(s,e,r.value,r.key,this)},e,this)},r.prototype.keysArray=function(){return this.map(function(t,e){return e})},r.prototype.keys=function(){return new h(this.keysArray())},r.prototype.valuesArray=function(){return this.map(Function.identity)},r.prototype.values=function(){return new h(this.valuesArray())},r.prototype.entriesArray=function(){return this.map(function(t,e){return[e,t]})},r.prototype.entries=function(){return new h(this.entriesArray())},r.prototype.items=function(){return this.entriesArray()},r.prototype.equals=function(t,e){if(e=e||n.equals,this===t)return!0;if(t&&"function"==typeof t.every)return t.length===this.length&&t.every(function(t,s){return e(this.get(s),t)},this);var s=n.keys(t);return s.length===this.length&&n.keys(t).every(function(s){return e(this.get(s),t[s])},this)},r.prototype.toJSON=function(){return this.entriesArray()},r.prototype.Item=i,i.prototype.equals=function(t){return n.equals(this.key,t.key)&&n.equals(this.value,t.value)},i.prototype.compare=function(t){return n.compare(this.key,t.key)}}});