function baseSum(a,e){var r=0;return baseEach(a,function(a,u,s){r+=+e(a,u,s)||0}),r}var baseEach=require("./baseEach");module.exports=baseSum;