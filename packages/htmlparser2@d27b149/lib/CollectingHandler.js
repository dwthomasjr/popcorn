function CollectingHandler(t){this._cbs=t||{},this.events=[]}module.exports=CollectingHandler;var EVENTS=require("./").EVENTS;Object.keys(EVENTS).forEach(function(t){if(0===EVENTS[t])t="on"+t,CollectingHandler.prototype[t]=function(){this.events.push([t]),this._cbs[t]&&this._cbs[t]()};else if(1===EVENTS[t])t="on"+t,CollectingHandler.prototype[t]=function(e){this.events.push([t,e]),this._cbs[t]&&this._cbs[t](e)};else{if(2!==EVENTS[t])throw Error("wrong number of arguments");t="on"+t,CollectingHandler.prototype[t]=function(e,s){this.events.push([t,e,s]),this._cbs[t]&&this._cbs[t](e,s)}}}),CollectingHandler.prototype.onreset=function(){this.events=[],this._cbs.onreset&&this._cbs.onreset()},CollectingHandler.prototype.restart=function(){this._cbs.onreset&&this._cbs.onreset();for(var t=0,e=this.events.length;t<e;t++)if(this._cbs[this.events[t][0]]){var s=this.events[t].length;1===s?this._cbs[this.events[t][0]]():2===s?this._cbs[this.events[t][0]](this.events[t][1]):this._cbs[this.events[t][0]](this.events[t][1],this.events[t][2])}};