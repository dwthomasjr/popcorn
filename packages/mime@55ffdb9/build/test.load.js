montageDefine("55ffdb9","build/test",{dependencies:["../mime","assert","path"],factory:function(t,e,l){var a=t("../mime"),o=t("assert");t("path");o.equal("text/plain",a.lookup("text.txt")),o.equal("text/plain",a.lookup("TEXT.TXT")),o.equal("text/plain",a.lookup("dir/text.txt")),o.equal("text/plain",a.lookup(".text.txt")),o.equal("text/plain",a.lookup(".txt")),o.equal("text/plain",a.lookup("txt")),o.equal("text/plain",a.lookup("/txt")),o.equal("text/plain",a.lookup("\\txt")),o.equal("application/octet-stream",a.lookup("text.nope")),o.equal("fallback",a.lookup("text.fallback","fallback")),o.equal("txt",a.extension(a.types.text)),o.equal("html",a.extension(a.types.htm)),o.equal("bin",a.extension("application/octet-stream")),o.equal("bin",a.extension("application/octet-stream ")),o.equal("html",a.extension(" text/html; charset=UTF-8")),o.equal("html",a.extension("text/html; charset=UTF-8 ")),o.equal("html",a.extension("text/html; charset=UTF-8")),o.equal("html",a.extension("text/html ; charset=UTF-8")),o.equal("html",a.extension("text/html;charset=UTF-8")),o.equal("html",a.extension("text/Html;charset=UTF-8")),o.equal(void 0,a.extension("unrecognized")),o.equal("application/font-woff",a.lookup("file.woff")),o.equal("application/octet-stream",a.lookup("file.buffer")),o.equal("font/otf",a.lookup("file.otf")),o.equal("UTF-8",a.charsets.lookup("text/plain")),o.equal("UTF-8",a.charsets.lookup(a.types.js)),o.equal("UTF-8",a.charsets.lookup(a.types.json)),o.equal(void 0,a.charsets.lookup(a.types.bin)),o.equal("fallback",a.charsets.lookup("application/octet-stream","fallback")),console.log("\nAll tests passed")}});