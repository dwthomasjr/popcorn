montageDefine("e7d31aa","lang/isEmpty",{dependencies:["../internal/getLength","./isArguments","./isArray","./isFunction","../internal/isLength","../internal/isObjectLike","./isString","../object/keys"],factory:function(n,e,i){function t(n){if(null==n)return!0;var e=r(n);return c(e)&&(a(n)||o(n)||s(n)||l(n)&&g(n.splice))?!e:!u(n).length}var r=n("../internal/getLength"),s=n("./isArguments"),a=n("./isArray"),g=n("./isFunction"),c=n("../internal/isLength"),l=n("../internal/isObjectLike"),o=n("./isString"),u=n("../object/keys");i.exports=t}});