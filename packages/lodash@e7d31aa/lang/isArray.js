var isLength=require("../internal/isLength"),isNative=require("./isNative"),isObjectLike=require("../internal/isObjectLike"),arrayTag="[object Array]",objectProto=Object.prototype,objToString=objectProto.toString,nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,isArray=nativeIsArray||function(r){return isObjectLike(r)&&isLength(r.length)&&objToString.call(r)==arrayTag};module.exports=isArray;