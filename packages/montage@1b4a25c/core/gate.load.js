montageDefine("1b4a25c","core/gate",{dependencies:["./core","./logger","collections/map"],factory:function(e,t,n){var i=e("./core").Montage,l=e("./logger").logger("gate"),a=e("collections/map");t.Gate=i.specialize({init:{enumerable:!1,value:function(){return this.reset(),this}},initWithDelegate:{enumerable:!1,value:function(e){return this.reset(),this.delegate=e,this}},initWithDescriptor:{enumerable:!1,value:function(e){var t;this.reset();for(t in e)e.hasOwnProperty(t)&&this.setField(t,e[t].value);return this}},count:{value:0},table:{value:null},getField:{enumerable:!1,value:function(e){var t=this.table;return!t||t[e]}},setField:{enumerable:!1,value:function(e,t){var n,i=this.table||(this.table=new a),u=this.count;n=i[e],"undefined"!=typeof n||t?"undefined"!=typeof n&&n!==t?t?this.count--:this.count++:t&&l.isDebug&&l.debug(this,e+" was not set before."):this.count++,i[e]=!!t,0===this.count&&u>0?this.callDelegateMethod(!0):0===u&&this.count>0&&this.callDelegateMethod(!1)}},removeField:{enumerable:!1,value:function(e){var t=this.table,n=t[e];"undefined"==typeof n||n||this.count--,delete t[e]}},delegate:{enumerable:!1,value:null},callDelegateMethod:{value:function(e){var t;this.delegate&&"function"==typeof(t=this.delegate["gateDidBecome"+(e?"True":"False")])&&t.call(this.delegate,this)},enumerable:!1},value:{enumerable:!1,get:function(){return 0===this.count}},reset:{enumerable:!1,value:function(){this.table={},this.count=0}},toString:{value:function(){var e,t,n=this._fields,i="";for(e=0;t=n[e];e++)i+=t+"["+(this._value&n[t])+"], ";return i}}})}});