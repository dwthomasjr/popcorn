!function(){"use strict";var r=require("./color");exports.logger={log:console.log.bind(console),err:process.stderr.write.bind(process.stderr)},exports.setLogger=function(r){this.logger=r},exports.makeReporter=function(r,e,o){return{logger:r,colorize:e,terse:o,report:function(r,e){return exports.report.call(this,r,e,this.colorize,this.terse)}}},exports.report=function(e,o,n,t){function i(e,o){return n?r[e](o):o}function s(r){return r.line+h}function c(r){return(r.character||r.column)+h}function l(r){return r.evidence||o.lines&&o.lines[r.line]||""}function u(r){return r.reason||r.message}var g,f,p,a,h=Number(o.option&&o.option.fudge)||0,d=this.logger;return a="\n"+i("bold",e),o.ok?t?d.err("."):d.log(a+" is "+i("green","OK")+"."):(p=o.errors,p=p.filter(function(r){return r}),t?p.forEach(function(r){d.log(e+":"+s(r)+":"+c(r)+": "+u(r))}):(d.log(a),p.forEach(function(r,e){for(f="#"+String(e+1);f.length<3;)f=" "+f;g=" // Line "+s(r)+", Pos "+c(r),d.log(f+" "+i("yellow",u(r))),d.log("    "+l(r).trim()+i("grey",g))}))),o.ok}}();