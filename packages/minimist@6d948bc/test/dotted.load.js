montageDefine("6d948bc","test/dotted",{dependencies:["../","tape"],factory:function(a,e,t){var d=a("../"),b=a("tape");b("dotted alias",function(a){var e=d(["--a.b","22"],{"default":{"a.b":11},alias:{"a.b":"aa.bb"}});a.equal(e.a.b,22),a.equal(e.aa.bb,22),a.end()}),b("dotted default",function(a){var e=d("",{"default":{"a.b":11},alias:{"a.b":"aa.bb"}});a.equal(e.a.b,11),a.equal(e.aa.bb,11),a.end()}),b("dotted default with no alias",function(a){var e=d("",{"default":{"a.b":11}});a.equal(e.a.b,11),a.end()})}});