montageDefine("5f1e513","lib/appcache",{dependencies:["./file","url2"],factory:function(e,a,i){function n(e,a){var i=e.packageDescription.appcache;if(i){"boolean"==typeof i&&(i={});var n=Object.keys(a.files).sort(),c=n.map(function(i){var n=a.files[i];return t.relative(e.buildLocation,n.buildLocation)}),p=["CACHE MANIFEST"];e.packageDescription.version&&p.push("#version "+e.packageDescription.version),p.push("#hash "+e.hash),p.push.apply(p,c.filter(function(e){return!e.match(".md$")}));var s=i.fallback||{};Object.keys(s).length&&(p.push(""),p.push("FALLBACK:"),p.push.apply(p,Object.keys(s).map(function(e){return e+" "+s[e]}))),p.push(""),p.push("NETWORK:"),p.push("*");var u=p.map(function(e){return e+"\n"}).join(""),r=new o({fs:a.fs,utf8:u,buildLocation:t.resolve(e.buildLocation,"manifest.appcache")});a.out.log("Appcache manifest: "+r.buildLocation),a.files[r.buildLocation]=r}}var o=e("./file"),t=e("url2");i.exports=n}});