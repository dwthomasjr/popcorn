function sum(e,r,a){a&&isIterateeCall(e,r,a)&&(r=null);var l=null==r;return r=l?r:baseCallback(r,a,3),l?arraySum(isArray(e)?e:toIterable(e)):baseSum(e,r)}var arraySum=require("../internal/arraySum"),baseCallback=require("../internal/baseCallback"),baseSum=require("../internal/baseSum"),isArray=require("../lang/isArray"),isIterateeCall=require("../internal/isIterateeCall"),toIterable=require("../internal/toIterable");module.exports=sum;