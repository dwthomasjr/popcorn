montageDefine("8a11f02","lib/exit",{dependencies:[],factory:function(e,t,n){"use strict";n.exports=function(e,t){function n(){i===t.length&&process.exit(e)}t||(t=[process.stdout,process.stderr]);var i=0;t.forEach(function(e){0===e.bufferSize?i++:e.write("","utf-8",function(){i++,n()}),e.write=function(){}}),n(),process.on("exit",function(){process.exit(e)})}}});