function addNwmatcher(t){return t._nwmatcher||(t._nwmatcher=nwmatcher({document:t}),t._nwmatcher.configure({UNIQUE_ID:!1})),t._nwmatcher}var nwmatcher=require("nwmatcher/src/nwmatcher-noqsa");exports.applyQuerySelectorPrototype=function(t){t.Document.prototype.querySelector=function(t){return addNwmatcher(this).first(t,this)},t.Document.prototype.querySelectorAll=function(e){return new t.NodeList(addNwmatcher(this).select(e,this))},t.Element.prototype.querySelector=function(t){return addNwmatcher(this.ownerDocument).first(t,this)},t.Element.prototype.querySelectorAll=function(e){return new t.NodeList(addNwmatcher(this.ownerDocument).select(e,this))},t.Element.prototype.matchesSelector=function(t){return addNwmatcher(this.ownerDocument).match(this,t)}};