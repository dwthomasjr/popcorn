function nopt(e,r,a,t){a=a||process.argv,e=e||{},r=r||{},"number"!=typeof t&&(t=2),debug(e,r,a,t),a=a.slice(t);var n={},i=[],l=a,o=a.slice(0);return parse(a,n,i,e,r),clean(n,e,exports.typeDefs),n.argv={remain:i,cooked:l,original:o},Object.defineProperty(n.argv,"toString",{value:function(){return this.original.map(JSON.stringify).join(" ")},enumerable:!1}),n}function clean(e,r,a){a=a||exports.typeDefs;var t={},n=[!1,!0,null,String,Array];Object.keys(e).forEach(function(i){if("argv"!==i){var l=e[i],o=Array.isArray(l),u=r[i];o||(l=[l]),u||(u=n),u===Array&&(u=n.concat(Array)),Array.isArray(u)||(u=[u]),debug("val=%j",l),debug("types=",u),l=l.map(function(n){if("string"==typeof n&&(debug("string %j",n),n=n.trim(),"null"===n&&~u.indexOf(null)||"true"===n&&(~u.indexOf(!0)||~u.indexOf(Boolean))||"false"===n&&(~u.indexOf(!1)||~u.indexOf(Boolean))?(n=JSON.parse(n),debug("jsonable %j",n)):~u.indexOf(Number)&&!isNaN(n)?(debug("convert to number",n),n=+n):~u.indexOf(Date)&&!isNaN(Date.parse(n))&&(debug("convert to date",n),n=new Date(n))),!r.hasOwnProperty(i))return n;n!==!1||!~u.indexOf(null)||~u.indexOf(!1)||~u.indexOf(Boolean)||(n=null);var l={};return l[i]=n,debug("prevalidated val",l,n,r[i]),validate(l,i,n,r[i],a)?(debug("validated val",l,n,r[i]),l[i]):(exports.invalidHandler?exports.invalidHandler(i,n,r[i],e):exports.invalidHandler!==!1&&debug("invalid: "+i+"="+n,r[i]),t)}).filter(function(e){return e!==t}),l.length?o?(debug(o,e[i],l),e[i]=l):e[i]=l[0]:delete e[i],debug("k=%s val=%j",i,l,e[i])}})}function validateString(e,r,a){e[r]=String(a)}function validatePath(e,r,a){if(a===!0)return!1;if(null===a)return!0;a=String(a);var t="win32"===process.platform?/^~(\/|\\)/:/^~\//;return a.match(t)&&process.env.HOME&&(a=path.resolve(process.env.HOME,a.substr(2))),e[r]=path.resolve(String(a)),!0}function validateNumber(e,r,a){return debug("validate Number %j %j %j",r,a,isNaN(a)),!isNaN(a)&&void(e[r]=+a)}function validateDate(e,r,a){debug("validate Date %j %j %j",r,a,Date.parse(a));var t=Date.parse(a);return!isNaN(t)&&void(e[r]=new Date(a))}function validateBoolean(e,r,a){a=a instanceof Boolean?a.valueOf():"string"==typeof a?isNaN(a)?"null"!==a&&"false"!==a:!!+a:!!a,e[r]=a}function validateUrl(e,r,a){return a=url.parse(String(a)),!!a.host&&void(e[r]=a.href)}function validateStream(e,r,a){return a instanceof Stream&&void(e[r]=a)}function validate(e,r,a,t,n){if(Array.isArray(t)){for(var i=0,l=t.length;i<l;i++)if(t[i]!==Array&&validate(e,r,a,t[i],n))return!0;return delete e[r],!1}if(t===Array)return!0;if(t!==t)return debug("Poison NaN",r,a,t),delete e[r],!1;if(a===t)return debug("Explicitly allowed %j",a),e[r]=a,!0;for(var o=!1,u=Object.keys(n),i=0,l=u.length;i<l;i++){debug("test type %j %j %j",r,a,u[i]);var s=n[u[i]];if(s&&(t&&t.name&&s.type&&s.type.name?t.name===s.type.name:t===s.type)){var d={};if(o=!1!==s.validate(d,r,a),a=d[r],o){e[r]=a;break}}}return debug("OK? %j (%j %j %j)",o,r,a,u[i]),o||delete e[r],o}function parse(e,r,a,t,n){debug("parse",e,r,a);for(var i=abbrev(Object.keys(t)),l=abbrev(Object.keys(n)),o=0;o<e.length;o++){var u=e[o];if(debug("arg",u),u.match(/^-{2,}$/)){a.push.apply(a,e.slice(o+1)),e[o]="--";break}var s=!1;if("-"===u.charAt(0)&&u.length>1){if(u.indexOf("=")!==-1){s=!0;var d=u.split("=");u=d.shift(),d=d.join("="),e.splice.apply(e,[o,1].concat([u,d]))}var f=resolveShort(u,n,l,i);if(debug("arg=%j shRes=%j",u,f),f&&(debug(u,f),e.splice.apply(e,[o,1].concat(f)),u!==f[0])){o--;continue}u=u.replace(/^-+/,"");for(var v=null;0===u.toLowerCase().indexOf("no-");)v=!v,u=u.substr(3);i[u]&&(u=i[u]);var p=t[u]===Array||Array.isArray(t[u])&&t[u].indexOf(Array)!==-1;!t.hasOwnProperty(u)&&r.hasOwnProperty(u)&&(Array.isArray(r[u])||(r[u]=[r[u]]),p=!0);var c,y=e[o+1],g="boolean"==typeof v||t[u]===Boolean||Array.isArray(t[u])&&t[u].indexOf(Boolean)!==-1||"undefined"==typeof t[u]&&!s||"false"===y&&(null===t[u]||Array.isArray(t[u])&&~t[u].indexOf(null));if(g){c=!v,"true"!==y&&"false"!==y||(c=JSON.parse(y),y=null,v&&(c=!c),o++),Array.isArray(t[u])&&y&&(~t[u].indexOf(y)?(c=y,o++):"null"===y&&~t[u].indexOf(null)?(c=null,o++):y.match(/^-{2,}[^-]/)||isNaN(y)||!~t[u].indexOf(Number)?!y.match(/^-[^-]/)&&~t[u].indexOf(String)&&(c=y,o++):(c=+y,o++)),p?(r[u]=r[u]||[]).push(c):r[u]=c;continue}t[u]===String&&void 0===y&&(y=""),y&&y.match(/^-{2,}$/)&&(y=void 0,o--),c=void 0===y||y,p?(r[u]=r[u]||[]).push(c):r[u]=c,o++}else a.push(u)}}function resolveShort(e,r,a,t){if(e=e.replace(/^-+/,""),t[e]===e)return null;if(r[e])return r[e]&&!Array.isArray(r[e])&&(r[e]=r[e].split(/\s+/)),r[e];var n=r.___singles;n||(n=Object.keys(r).filter(function(e){return 1===e.length}).reduce(function(e,r){return e[r]=!0,e},{}),r.___singles=n,debug("shorthand singles",n));var i=e.split("").filter(function(e){return n[e]});return i.join("")===e?i.map(function(e){return r[e]}).reduce(function(e,r){return e.concat(r)},[]):t[e]&&!r[e]?null:(a[e]&&(e=a[e]),r[e]&&!Array.isArray(r[e])&&(r[e]=r[e].split(/\s+/)),r[e])}var debug=process.env.DEBUG_NOPT||process.env.NOPT_DEBUG?function(){console.error.apply(console,arguments)}:function(){},url=require("url"),path=require("path"),Stream=require("stream").Stream,abbrev=require("abbrev");module.exports=exports=nopt,exports.clean=clean,exports.typeDefs={String:{type:String,validate:validateString},Boolean:{type:Boolean,validate:validateBoolean},url:{type:url,validate:validateUrl},Number:{type:Number,validate:validateNumber},path:{type:path,validate:validatePath},Stream:{type:Stream,validate:validateStream},Date:{type:Date,validate:validateDate}};