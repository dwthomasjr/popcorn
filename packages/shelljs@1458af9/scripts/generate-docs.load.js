montageDefine("1458af9","scripts/generate-docs",{dependencies:["../global"],factory:function(e,n,c){e("../global"),echo("Appending docs to README.md"),cd(__dirname+"/..");var r=grep("//@","shell.js");r=r.replace(/\/\/\@include (.+)/g,function(e,n){var c=n.match(".js$")?n:n+".js";return grep("//@",c)}),r=r.replace(/\/\/\@ ?/g,""),sed("-i",/## Command reference(.|\n)*/,"## Command reference\n\n"+r,"README.md"),echo("All done.")}});