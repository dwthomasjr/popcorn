!function(){"use strict";function t(t,i,e){this.emit("data",JSON.stringify([t.file,t.linted.errors])),this.allOK=this.allOK&&t.linted.ok,e()}var i,e=require("util"),r=require("./stream").Transform;i=function(t){return this instanceof i?(r.call(this,{objectMode:!0}),void(this.allOK=!0)):new i(t)},e.inherits(i,r),i.prototype._transform=t,module.exports=i}();