function baseWrapperValue(r,a){var p=r;p instanceof LazyWrapper&&(p=p.value());for(var e=-1,o=a.length;++e<o;){var u=[p],t=a[e];push.apply(u,t.args),p=t.func.apply(t.thisArg,u)}return p}var LazyWrapper=require("./LazyWrapper"),arrayProto=Array.prototype,push=arrayProto.push;module.exports=baseWrapperValue;