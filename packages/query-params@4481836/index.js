function encode(e,o){var n,d=[];for(n in e)null!=e[n]&&"object"!=typeof e[n]&&"function"!=typeof e[n]&&d.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return d.join(o||"&")}function decode(e,o){o=o||REXP_SPLIT;for(var n,d,t,c={},r=e.split(o),i=0,p=r.length;i<p;i++)t=r[i].indexOf("="),n=r[i].substring(0,t),d=r[i].substring(t+1),d&&(c[decodeURIComponent(n)]=decodeURIComponent(d));return c}var REXP_SPLIT=/&amp;|&|;/gim;module.exports={encode:encode,decode:decode};