montageDefine("0c9b293","example/divide",{dependencies:["optimist"],factory:function(e,n,i){var a=e("optimist").usage("Usage: $0 -x [num] -y [num]").demand(["x","y"]).argv;console.log(a.x/a.y)}});