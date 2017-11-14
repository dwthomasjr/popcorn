"use strict";function Url(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function hasOwnProperty(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function decodeQuerystring(t,e,s,r){e=e||"&",s=s||"=";var h={};if("string"!=typeof t||0===t.length)return h;var o=/\+/g;t=t.split(e);var a=1e3;r&&"number"==typeof r.maxKeys&&(a=r.maxKeys);var n=t.length;a>0&&n>a&&(n=a);for(var i=0;i<n;++i){var l,c,u,p,f=t[i].replace(o,"%20"),m=f.indexOf(s);m>=0?(l=f.substr(0,m),c=f.substr(m+1)):(l=f,c=""),u=decodeURIComponent(l),p=decodeURIComponent(c),hasOwnProperty(h,u)?Array.isArray(h[u])?h[u].push(p):h[u]=[h[u],p]:h[u]=p}return h}function stringifyPrimitive(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}}function encodeQuerystring(t,e,s,r){return e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map(function(r){var h=encodeURIComponent(stringifyPrimitive(r))+s;return Array.isArray(t[r])?t[r].map(function(t){return h+encodeURIComponent(stringifyPrimitive(t))}).join(e):h+encodeURIComponent(stringifyPrimitive(t[r]))}).join(e):r?encodeURIComponent(stringifyPrimitive(r))+s+encodeURIComponent(stringifyPrimitive(t)):""}function isNull(t){return null===t}function isNullOrUndefined(t){return null===t||void 0===t}function isString(t){return"string"==typeof t}function isObject(t){return"object"==typeof t}function urlParse(t,e,s){if(t&&isObject(t)&&t instanceof Url)return t;var r=new Url;return r.parse(t,e,s),r}function urlFormat(t){return isString(t)&&(t=urlParse(t)),t instanceof Url?t.format():Url.prototype.format.call(t)}function urlResolve(t,e){return urlParse(t,!1,!0).resolve(e)}function urlResolveObject(t,e){return t?urlParse(t,!1,!0).resolveObject(e):e}var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,delims=["<",">",'"',"`"," ","\r","\n","\t"],unwise=["{","}","|","\\","^","`"].concat(delims),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnameMaxLen=255,hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:!0,"javascript:":!0},hostlessProtocol={javascript:!0,"javascript:":!0},slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};Url.prototype.parse=function(t,e,s){if(!isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t.indexOf("?"),h=r!==-1&&r<t.indexOf("#")?"?":"#",o=t.split(h),a=/\\/g;o[0]=o[0].replace(a,"/"),t=o.join(h);var n=t;if(n=n.trim(),!s&&1===t.split("#").length){var i=simplePathPattern.exec(n);if(i)return this.path=n,this.href=n,this.pathname=i[1],i[2]?(this.search=i[2],e?this.query=decodeDuerystring(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var l=protocolPattern.exec(n);if(l){l=l[0];var c=l.toLowerCase();this.protocol=c,n=n.substr(l.length)}if(s||l||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var u="//"===n.substr(0,2);!u||l&&hostlessProtocol[l]||(n=n.substr(2),this.slashes=!0)}if(!hostlessProtocol[l]&&(u||l&&!slashedProtocol[l])){for(var p=-1,f=0;f<hostEndingChars.length;f++){var m=n.indexOf(hostEndingChars[f]);m!==-1&&(p===-1||m<p)&&(p=m)}var v,y;y=p===-1?n.lastIndexOf("@"):n.lastIndexOf("@",p),y!==-1&&(v=n.slice(0,y),n=n.slice(y+1),this.auth=decodeURIComponent(v)),p=-1;for(var f=0;f<nonHostChars.length;f++){var m=n.indexOf(nonHostChars[f]);m!==-1&&(p===-1||m<p)&&(p=m)}p===-1&&(p=n.length),this.host=n.slice(0,p),n=n.slice(p),this.parseHost(),this.hostname=this.hostname||"";var d="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!d)for(var g=this.hostname.split(/\./),f=0,P=g.length;f<P;f++){var b=g[f];if(b&&!b.match(hostnamePartPattern)){for(var O="",j=0,U=b.length;j<U;j++)O+=b.charCodeAt(j)>127?"x":b[j];if(!O.match(hostnamePartPattern)){var x=g.slice(0,f),q=g.slice(f+1),C=b.match(hostnamePartStart);C&&(x.push(C[1]),q.unshift(C[2])),q.length&&(n="/"+q.join(".")+n),this.hostname=x.join(".");break}}}this.hostname.length>hostnameMaxLen?this.hostname="":this.hostname=this.hostname.toLowerCase();var A=this.port?":"+this.port:"",w=this.hostname||"";this.host=w+A,this.href+=this.host,d&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!unsafeProtocol[c])for(var f=0,P=autoEscape.length;f<P;f++){var I=autoEscape[f];if(n.indexOf(I)!==-1){var R=encodeURIComponent(I);R===I&&(R=escape(I)),n=n.split(I).join(R)}}var E=n.indexOf("#");E!==-1&&(this.hash=n.substr(E),n=n.slice(0,E));var N=n.indexOf("?");if(N!==-1?(this.search=n.substr(N),this.query=n.substr(N+1),e&&(this.query=decodeQuerystring(this.query)),n=n.slice(0,N)):e&&(this.search="",this.query={}),n&&(this.pathname=n),slashedProtocol[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var A=this.pathname||"",k=this.search||"";this.path=A+k}return this.href=this.format(),this},Url.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",s=this.pathname||"",r=this.hash||"",h=!1,o="";this.host?h=t+this.host:this.hostname&&(h=t+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(h+=":"+this.port)),this.query&&isObject(this.query)&&Object.keys(this.query).length&&(o=encodeQuerystring(this.query));var a=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||slashedProtocol[e])&&h!==!1?(h="//"+(h||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):h||(h=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),s=s.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),a=a.replace("#","%23"),e+h+s+a+r},Url.prototype.resolve=function(t){return this.resolveObject(urlParse(t,!1,!0)).format()},Url.prototype.resolveObject=function(t){if(isString(t)){var e=new Url;e.parse(t,!1,!0),t=e}for(var s=new Url,r=Object.keys(this),h=0;h<r.length;h++){var o=r[h];s[o]=this[o]}if(s.hash=t.hash,""===t.href)return s.href=s.format(),s;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),n=0;n<a.length;n++){var i=a[n];"protocol"!==i&&(s[i]=t[i])}return slashedProtocol[s.protocol]&&s.hostname&&!s.pathname&&(s.path=s.pathname="/"),s.href=s.format(),s}if(t.protocol&&t.protocol!==s.protocol){if(!slashedProtocol[t.protocol]){for(var l=Object.keys(t),c=0;c<l.length;c++){var u=l[c];s[u]=t[u]}return s.href=s.format(),s}if(s.protocol=t.protocol,t.host||hostlessProtocol[t.protocol])s.pathname=t.pathname;else{for(var p=(t.pathname||"").split("/");p.length&&!(t.host=p.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),s.pathname=p.join("/")}if(s.search=t.search,s.query=t.query,s.host=t.host||"",s.auth=t.auth,s.hostname=t.hostname||t.host,s.port=t.port,s.pathname||s.search){var f=s.pathname||"",m=s.search||"";s.path=f+m}return s.slashes=s.slashes||t.slashes,s.href=s.format(),s}var v=s.pathname&&"/"===s.pathname.charAt(0),y=t.host||t.pathname&&"/"===t.pathname.charAt(0),d=y||v||s.host&&t.pathname,g=d,P=s.pathname&&s.pathname.split("/")||[],p=t.pathname&&t.pathname.split("/")||[],b=s.protocol&&!slashedProtocol[s.protocol];if(b&&(s.hostname="",s.port=null,s.host&&(""===P[0]?P[0]=s.host:P.unshift(s.host)),s.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===p[0]?p[0]=t.host:p.unshift(t.host)),t.host=null),d=d&&(""===p[0]||""===P[0])),y)s.host=t.host||""===t.host?t.host:s.host,s.hostname=t.hostname||""===t.hostname?t.hostname:s.hostname,s.search=t.search,s.query=t.query,P=p;else if(p.length)P||(P=[]),P.pop(),P=P.concat(p),s.search=t.search,s.query=t.query;else if(!isNullOrUndefined(t.search)){if(b){s.hostname=s.host=P.shift();var O=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@");O&&(s.auth=O.shift(),s.host=s.hostname=O.shift())}return s.search=t.search,s.query=t.query,isNull(s.pathname)&&isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.href=s.format(),s}if(!P.length)return s.pathname=null,s.search?s.path="/"+s.search:s.path=null,s.href=s.format(),s;for(var j=P.slice(-1)[0],U=(s.host||t.host||P.length>1)&&("."===j||".."===j)||""===j,x=0,q=P.length;q>=0;q--)j=P[q],"."===j?P.splice(q,1):".."===j?(P.splice(q,1),x++):x&&(P.splice(q,1),x--);if(!d&&!g)for(;x--;x)P.unshift("..");!d||""===P[0]||P[0]&&"/"===P[0].charAt(0)||P.unshift(""),U&&"/"!==P.join("/").substr(-1)&&P.push("");var C=""===P[0]||P[0]&&"/"===P[0].charAt(0);if(b){s.hostname=s.host=C?"":P.length?P.shift():"";var O=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@");O&&(s.auth=O.shift(),s.host=s.hostname=O.shift())}return d=d||s.host&&P.length,d&&!C&&P.unshift(""),P.length?s.pathname=P.join("/"):(s.pathname=null,s.path=null),isNull(s.pathname)&&isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.auth=t.auth||s.auth,s.slashes=s.slashes||t.slashes,s.href=s.format(),s},Url.prototype.parseHost=function(){var t=this.host,e=portPattern.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)},module.exports.resolve=function(t,e){return urlParse(t,!1,!0).resolve(e)};