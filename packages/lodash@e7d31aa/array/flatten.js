function flatten(e,t,a){var l=e?e.length:0;return a&&isIterateeCall(e,t,a)&&(t=!1),l?baseFlatten(e,t):[]}var baseFlatten=require("../internal/baseFlatten"),isIterateeCall=require("../internal/isIterateeCall");module.exports=flatten;