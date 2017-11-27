function applySourceMaps(e,r,o){var a={callback:o,fetch:r.options.fetch,index:0,inline:r.options.inline,inlineRequest:r.options.inlineRequest,inlineTimeout:r.options.inlineTimeout,inputSourceMapTracker:r.inputSourceMapTracker,localOnly:r.localOnly,processedTokens:[],rebaseTo:r.options.rebaseTo,sourceTokens:e,warnings:r.warnings};return r.options.sourceMap&&e.length>0?doApplySourceMaps(a):o(e)}function doApplySourceMaps(e){var r,o,a,n=[],u=findTokenSource(e.sourceTokens[0]);for(a=e.sourceTokens.length;e.index<a;e.index++)if(o=e.sourceTokens[e.index],r=findTokenSource(o),r!=u&&(n=[],u=r),n.push(o),e.processedTokens.push(o),o[0]==Token.COMMENT&&MAP_MARKER_PATTERN.test(o[1]))return fetchAndApplySourceMap(o[1],r,n,e);return e.callback(e.processedTokens)}function findTokenSource(e){var r,o;return e[0]==Token.AT_RULE||e[0]==Token.COMMENT?o=e[2][0]:(r=e[1][0],o=r[2][0]),o[2]}function fetchAndApplySourceMap(e,r,o,a){return extractInputSourceMapFrom(e,a,function(e){return e&&(a.inputSourceMapTracker.track(r,e),applySourceMapRecursively(o,a.inputSourceMapTracker)),a.index++,doApplySourceMaps(a)})}function extractInputSourceMapFrom(e,r,o){var a,n,u,s=MAP_MARKER_PATTERN.exec(e)[1];return isDataUriResource(s)?(n=extractInputSourceMapFromDataUri(s),o(n)):isRemoteResource(s)?loadInputSourceMapFromRemoteUri(s,r,function(e){var r;e?(r=JSON.parse(e),u=rebaseRemoteMap(r,s),o(u)):o(null)}):(a=path.resolve(r.rebaseTo,s),n=loadInputSourceMapFromLocalUri(a,r),n?(u=rebaseLocalMap(n,a,r.rebaseTo),o(u)):o(null))}function extractInputSourceMapFromDataUri(e){var r=matchDataUri(e),o=r[2]?r[2].split(/[=;]/)[2]:"us-ascii",a=r[3]?r[3].split(";")[1]:"utf8",n="utf8"==a?global.unescape(r[4]):r[4],u=new Buffer(n,a);return u.charset=o,JSON.parse(u.toString())}function loadInputSourceMapFromRemoteUri(e,r,o){var a=isAllowedResource(e,!0,r.inline),n=!hasProtocol(e);return r.localOnly?(r.warnings.push('Cannot fetch remote resource from "'+e+'" as no callback given.'),o(null)):n?(r.warnings.push('Cannot fetch "'+e+'" as no protocol given.'),o(null)):a?void r.fetch(e,r.inlineRequest,r.inlineTimeout,function(a,n){return a?(r.warnings.push('Missing source map at "'+e+'" - '+a),o(null)):void o(n)}):(r.warnings.push('Cannot fetch "'+e+'" as resource is not allowed.'),o(null))}function loadInputSourceMapFromLocalUri(e,r){var o,a=isAllowedResource(e,!1,r.inline);return fs.existsSync(e)&&fs.statSync(e).isFile()?a?(o=fs.readFileSync(e,"utf-8"),JSON.parse(o)):(r.warnings.push('Cannot fetch "'+e+'" as resource is not allowed.'),null):(r.warnings.push('Ignoring local source map at "'+e+'" as resource is missing.'),null)}function applySourceMapRecursively(e,r){var o,a,n;for(a=0,n=e.length;a<n;a++)switch(o=e[a],o[0]){case Token.AT_RULE:applySourceMapTo(o,r);break;case Token.AT_RULE_BLOCK:applySourceMapRecursively(o[1],r),applySourceMapRecursively(o[2],r);break;case Token.AT_RULE_BLOCK_SCOPE:applySourceMapTo(o,r);break;case Token.NESTED_BLOCK:applySourceMapRecursively(o[1],r),applySourceMapRecursively(o[2],r);break;case Token.NESTED_BLOCK_SCOPE:applySourceMapTo(o,r);break;case Token.COMMENT:applySourceMapTo(o,r);break;case Token.PROPERTY:applySourceMapRecursively(o,r);break;case Token.PROPERTY_BLOCK:applySourceMapRecursively(o[1],r);break;case Token.PROPERTY_NAME:applySourceMapTo(o,r);break;case Token.PROPERTY_VALUE:applySourceMapTo(o,r);break;case Token.RULE:applySourceMapRecursively(o[1],r),applySourceMapRecursively(o[2],r);break;case Token.RULE_SCOPE:applySourceMapTo(o,r)}return e}function applySourceMapTo(e,r){var o,a,n=e[1],u=e[2],s=[];for(o=0,a=u.length;o<a;o++)s.push(r.originalPositionFor(u[o],n.length));e[2]=s}var fs=require("fs"),path=require("path"),isAllowedResource=require("./is-allowed-resource"),matchDataUri=require("./match-data-uri"),rebaseLocalMap=require("./rebase-local-map"),rebaseRemoteMap=require("./rebase-remote-map"),Token=require("../tokenizer/token"),hasProtocol=require("../utils/has-protocol"),isDataUriResource=require("../utils/is-data-uri-resource"),isRemoteResource=require("../utils/is-remote-resource"),MAP_MARKER_PATTERN=/^\/\*# sourceMappingURL=(\S+) \*\/$/;module.exports=applySourceMaps;