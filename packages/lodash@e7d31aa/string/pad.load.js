montageDefine("e7d31aa","string/pad",{dependencies:["../internal/baseToString","../internal/createPadding"],factory:function(e,n,a){function t(e,n,a){e=i(e),n=+n;var t=e.length;if(t>=n||!c(n))return e;var d=(n-t)/2,g=o(d),s=l(d);return a=r("",s,a),a.slice(0,g)+e+a}var i=e("../internal/baseToString"),r=e("../internal/createPadding"),l=Math.ceil,o=Math.floor,c=global.isFinite;a.exports=t}});