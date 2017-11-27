"use strict";var utils=require("./utils"),formats=require("./formats"),arrayPrefixGenerators={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},toISO=Date.prototype.toISOString,defaults={delimiter:"&",encode:!0,encoder:utils.encode,encodeValuesOnly:!1,serializeDate:function(e){return toISO.call(e)},skipNulls:!1,strictNullHandling:!1},stringify=function e(r,t,n,o,i,a,l,f,s,u,d,c){var y=r;if("function"==typeof l)y=l(t,y);else if(y instanceof Date)y=u(y);else if(null===y){if(o)return a&&!c?a(t,defaults.encoder):t;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||utils.isBuffer(y)){if(a){var p=c?t:a(t,defaults.encoder);return[d(p)+"="+d(a(y,defaults.encoder))]}return[d(t)+"="+d(String(y))]}var m=[];if("undefined"==typeof y)return m;var v;if(Array.isArray(l))v=l;else{var g=Object.keys(y);v=f?g.sort(f):g}for(var b=0;b<v.length;++b){var O=v[b];i&&null===y[O]||(m=Array.isArray(y)?m.concat(e(y[O],n(t,O),n,o,i,a,l,f,s,u,d,c)):m.concat(e(y[O],t+(s?"."+O:"["+O+"]"),n,o,i,a,l,f,s,u,d,c)))}return m};module.exports=function(e,r){var t=e,n=r?utils.assign({},r):{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var o="undefined"==typeof n.delimiter?defaults.delimiter:n.delimiter,i="boolean"==typeof n.strictNullHandling?n.strictNullHandling:defaults.strictNullHandling,a="boolean"==typeof n.skipNulls?n.skipNulls:defaults.skipNulls,l="boolean"==typeof n.encode?n.encode:defaults.encode,f="function"==typeof n.encoder?n.encoder:defaults.encoder,s="function"==typeof n.sort?n.sort:null,u="undefined"!=typeof n.allowDots&&n.allowDots,d="function"==typeof n.serializeDate?n.serializeDate:defaults.serializeDate,c="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:defaults.encodeValuesOnly;if("undefined"==typeof n.format)n.format=formats["default"];else if(!Object.prototype.hasOwnProperty.call(formats.formatters,n.format))throw new TypeError("Unknown format option provided.");var y,p,m=formats.formatters[n.format];"function"==typeof n.filter?(p=n.filter,t=p("",t)):Array.isArray(n.filter)&&(p=n.filter,y=p);var v=[];if("object"!=typeof t||null===t)return"";var g;g=n.arrayFormat in arrayPrefixGenerators?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var b=arrayPrefixGenerators[g];y||(y=Object.keys(t)),s&&y.sort(s);for(var O=0;O<y.length;++O){var k=y[O];a&&null===t[k]||(v=v.concat(stringify(t[k],k,b,i,a,l?f:null,p,s,u,d,m,c)))}var w=v.join(o),D=n.addQueryPrefix===!0?"?":"";return w.length>0?D+w:""};