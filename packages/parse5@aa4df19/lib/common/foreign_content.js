"use strict";var Tokenizer=require("../tokenization/tokenizer"),HTML=require("./html"),$=HTML.TAG_NAMES,NS=HTML.NAMESPACES,ATTRS=HTML.ATTRS,MIME_TYPES={TEXT_HTML:"text/html",APPLICATION_XML:"application/xhtml+xml"},DEFINITION_URL_ATTR="definitionurl",ADJUSTED_DEFINITION_URL_ATTR="definitionURL",SVG_ATTRS_ADJUSTMENT_MAP={attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",externalresourcesrequired:"externalResourcesRequired",filterres:"filterRes",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},XML_ATTRS_ADJUSTMENT_MAP={"xlink:actuate":{prefix:"xlink",name:"actuate",namespace:NS.XLINK},"xlink:arcrole":{prefix:"xlink",name:"arcrole",namespace:NS.XLINK},"xlink:href":{prefix:"xlink",name:"href",namespace:NS.XLINK},"xlink:role":{prefix:"xlink",name:"role",namespace:NS.XLINK},"xlink:show":{prefix:"xlink",name:"show",namespace:NS.XLINK},"xlink:title":{prefix:"xlink",name:"title",namespace:NS.XLINK},"xlink:type":{prefix:"xlink",name:"type",namespace:NS.XLINK},"xml:base":{prefix:"xml",name:"base",namespace:NS.XML},"xml:lang":{prefix:"xml",name:"lang",namespace:NS.XML},"xml:space":{prefix:"xml",name:"space",namespace:NS.XML},xmlns:{prefix:"",name:"xmlns",namespace:NS.XMLNS},"xmlns:xlink":{prefix:"xmlns",name:"xlink",namespace:NS.XMLNS}},SVG_TAG_NAMES_ADJUSTMENT_MAP={altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},EXITS_FOREIGN_CONTENT={};EXITS_FOREIGN_CONTENT[$.B]=!0,EXITS_FOREIGN_CONTENT[$.BIG]=!0,EXITS_FOREIGN_CONTENT[$.BLOCKQUOTE]=!0,EXITS_FOREIGN_CONTENT[$.BODY]=!0,EXITS_FOREIGN_CONTENT[$.BR]=!0,EXITS_FOREIGN_CONTENT[$.CENTER]=!0,EXITS_FOREIGN_CONTENT[$.CODE]=!0,EXITS_FOREIGN_CONTENT[$.DD]=!0,EXITS_FOREIGN_CONTENT[$.DIV]=!0,EXITS_FOREIGN_CONTENT[$.DL]=!0,EXITS_FOREIGN_CONTENT[$.DT]=!0,EXITS_FOREIGN_CONTENT[$.EM]=!0,EXITS_FOREIGN_CONTENT[$.EMBED]=!0,EXITS_FOREIGN_CONTENT[$.H1]=!0,EXITS_FOREIGN_CONTENT[$.H2]=!0,EXITS_FOREIGN_CONTENT[$.H3]=!0,EXITS_FOREIGN_CONTENT[$.H4]=!0,EXITS_FOREIGN_CONTENT[$.H5]=!0,EXITS_FOREIGN_CONTENT[$.H6]=!0,EXITS_FOREIGN_CONTENT[$.HEAD]=!0,EXITS_FOREIGN_CONTENT[$.HR]=!0,EXITS_FOREIGN_CONTENT[$.I]=!0,EXITS_FOREIGN_CONTENT[$.IMG]=!0,EXITS_FOREIGN_CONTENT[$.LI]=!0,EXITS_FOREIGN_CONTENT[$.LISTING]=!0,EXITS_FOREIGN_CONTENT[$.MENU]=!0,EXITS_FOREIGN_CONTENT[$.META]=!0,EXITS_FOREIGN_CONTENT[$.NOBR]=!0,EXITS_FOREIGN_CONTENT[$.OL]=!0,EXITS_FOREIGN_CONTENT[$.P]=!0,EXITS_FOREIGN_CONTENT[$.PRE]=!0,EXITS_FOREIGN_CONTENT[$.RUBY]=!0,EXITS_FOREIGN_CONTENT[$.S]=!0,EXITS_FOREIGN_CONTENT[$.SMALL]=!0,EXITS_FOREIGN_CONTENT[$.SPAN]=!0,EXITS_FOREIGN_CONTENT[$.STRONG]=!0,EXITS_FOREIGN_CONTENT[$.STRIKE]=!0,EXITS_FOREIGN_CONTENT[$.SUB]=!0,EXITS_FOREIGN_CONTENT[$.SUP]=!0,EXITS_FOREIGN_CONTENT[$.TABLE]=!0,EXITS_FOREIGN_CONTENT[$.TT]=!0,EXITS_FOREIGN_CONTENT[$.U]=!0,EXITS_FOREIGN_CONTENT[$.UL]=!0,EXITS_FOREIGN_CONTENT[$.VAR]=!0,exports.causesExit=function(e){var t=e.tagName;return t===$.FONT&&(null!==Tokenizer.getTokenAttr(e,ATTRS.COLOR)||null!==Tokenizer.getTokenAttr(e,ATTRS.SIZE)||null!==Tokenizer.getTokenAttr(e,ATTRS.FACE))||EXITS_FOREIGN_CONTENT[t]},exports.adjustTokenMathMLAttrs=function(e){for(var t=0;t<e.attrs.length;t++)if(e.attrs[t].name===DEFINITION_URL_ATTR){e.attrs[t].name=ADJUSTED_DEFINITION_URL_ATTR;break}},exports.adjustTokenSVGAttrs=function(e){for(var t=0;t<e.attrs.length;t++){var n=SVG_ATTRS_ADJUSTMENT_MAP[e.attrs[t].name];n&&(e.attrs[t].name=n)}},exports.adjustTokenXMLAttrs=function(e){for(var t=0;t<e.attrs.length;t++){var n=XML_ATTRS_ADJUSTMENT_MAP[e.attrs[t].name];n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)}},exports.adjustTokenSVGTagName=function(e){var t=SVG_TAG_NAMES_ADJUSTMENT_MAP[e.tagName];t&&(e.tagName=t)},exports.isMathMLTextIntegrationPoint=function(e,t){return t===NS.MATHML&&(e===$.MI||e===$.MO||e===$.MN||e===$.MS||e===$.MTEXT)},exports.isHtmlIntegrationPoint=function(e,t,n){if(t===NS.MATHML&&e===$.ANNOTATION_XML)for(var a=0;a<n.length;a++)if(n[a].name===ATTRS.ENCODING){var T=n[a].value.toLowerCase();return T===MIME_TYPES.TEXT_HTML||T===MIME_TYPES.APPLICATION_XML}return t===NS.SVG&&(e===$.FOREIGN_OBJECT||e===$.DESC||e===$.TITLE)};