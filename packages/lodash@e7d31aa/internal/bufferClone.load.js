montageDefine("e7d31aa","internal/bufferClone",{dependencies:["../utility/constant","../lang/isNative"],factory:function(n,e,t){function a(n){return o.call(n,0)}var r=n("../utility/constant"),l=n("../lang/isNative"),i=l(i=global.ArrayBuffer)&&i,o=l(o=i&&new i(0).slice)&&o,c=Math.floor,f=l(f=global.Uint8Array)&&f,u=function(){try{var n=l(n=global.Float64Array)&&n,e=new n(new i(10),0,1)&&n}catch(t){}return e}(),s=u?u.BYTES_PER_ELEMENT:0;o||(a=i&&f?function(n){var e=n.byteLength,t=u?c(e/s):0,a=t*s,r=new i(e);if(t){var l=new u(r,0,t);l.set(new u(n,0,t))}return e!=a&&(l=new f(r,a),l.set(new f(n,a))),r}:r(null)),t.exports=a}});