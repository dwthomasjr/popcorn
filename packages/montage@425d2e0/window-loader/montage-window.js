var Montage=require("../core/core").Montage,MontageWindow=exports.MontageWindow=Montage.specialize({_application:{value:null},application:{get:function(){return this._application},set:function(t){null===this._application&&(this._application=t,this.focused&&this._setFocusedWindow(this))}},_window:{value:null},window:{get:function(){return this._window},set:function(t){if(null===this._window){var i=t.document.body;this._window=t,t.addEventListener("beforeunload",this,!0),t.addEventListener("focus",this,!0),t.addEventListener("mousedown",this,!0),null===i.getAttribute("tabIndex")&&(i.setAttribute("tabIndex",-1),i.focus())}}},document:{get:function(){return this._window.document}},_component:{value:null},component:{get:function(){return this._component},set:function(t){null===this._component&&(this._component=t)}},title:{get:function(){return this.document.title},set:function(t){this.document.title=t}},focused:{value:!1},focus:{value:function(){this._window&&this._window.focus()}},_setFocusedWindow:{value:function(t){var i,e,n,o=this.application;if(o._multipleWindow){i=o.windows;for(n in i)e=i[n],e.window===t?e.focused!==!0&&(e.focused=!0,"z-order"==o.windowsSortOrder?(i.splice(n,1),i.unshift(e)):"reverse-z-order"==o.windowsSortOrder&&(i.splice(n,1),i.push(e))):e.focused=!1}else this.focused=!0}},closed:{get:function(){return!!this._window&&this._window.closed}},close:{value:function(){this._window&&this._window.close()}},resizeTo:{value:function(t,i){this._window&&this._window.resizeTo(t,i)}},moveTo:{value:function(t,i){this._window&&this._window.moveTo(t,i)}},captureFocus:{value:function(t){var i=this.application;if(!this.application)return void(this.focused=!0);if(i.parentApplication)i.mainApplication.window.captureFocus(t);else{var e=(t.target.ownerDocument?t.target.ownerDocument.defaultView:null)||t.target.defaultView||t.target;this._setFocusedWindow(e)}}},captureMousedown:{value:function(t){this.captureFocus(t)}},captureBeforeunload:{value:function(t){var i,e=this.application,n=e.windows,o=e.attachedWindows;e.attachedWindows=[];for(var i in o)o[i].close();e.parentApplication&&(o=e.parentApplication.attachedWindows,i=o.indexOf(this),i!==-1&&o.splice(i,1),i=n.indexOf(this),i!==-1&&n.splice(i,1),this.window.removeEventListener("beforeunload",this,!0),this.close())}}});