!function(){"use strict";function t(t,r,e){this.reporter.report(t.file,t.linted),this.allOK=this.allOK&&t.linted.ok,e()}var r,e=require("util"),i=require("./stream").Transform,o=require("./reporter");r=function(t){var e=this;return this instanceof r?(t=t||{},t.objectMode=!0,i.call(this,t),this.reporter=o.makeReporter({log:function(t){e.emit("data",t)},err:function(t){e.emit("data",t)}},t.color,t.terse),void(this.allOK=!0)):new r(t)},e.inherits(r,i),r.prototype._transform=t,module.exports=r}();