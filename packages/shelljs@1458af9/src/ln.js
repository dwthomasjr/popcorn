function _ln(o,n,s){o=common.parseOptions(o,{s:"symlink",f:"force"}),n&&s||common.error("Missing <source> and/or <dest>"),n=path.resolve(process.cwd(),String(n)),s=path.resolve(process.cwd(),String(s)),fs.existsSync(n)||common.error("Source file does not exist",!0),fs.existsSync(s)&&(o.force||common.error("Destination file exists",!0),fs.unlinkSync(s)),o.symlink?fs.symlinkSync(n,s,"win32"===os.platform()?"junction":null):fs.linkSync(n,s,"win32"===os.platform()?"junction":null)}var fs=require("fs"),path=require("path"),common=require("./common"),os=require("os");module.exports=_ln;