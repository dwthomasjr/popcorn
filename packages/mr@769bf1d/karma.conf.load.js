montageDefine("769bf1d","karma.conf",{dependencies:[],factory:function(e,r,a){a.exports=function(e){e.set({basePath:".",frameworks:["jasmine"],files:["test/run-karma.js",{pattern:"package.json",included:!1},{pattern:"*.js",included:!1},{pattern:"test/**/**",included:!1},{pattern:"node_modules/**/*.json",included:!1},{pattern:"node_modules/**/*.css",included:!1},{pattern:"node_modules/**/*.js",included:!1}],exclude:[],preprocessors:{"logic/**/*.js":"coverage"},reporters:["coverage","progress"],coverageReporter:{type:"html",dir:"report/coverage/"},port:9876,colors:!0,logLevel:e.LOG_INFO,autoWatch:!0,browsers:["PhantomJS"],singleRun:!0,concurrency:1/0,plugins:["karma-jasmine","karma-coverage","karma-chrome-launcher","karma-firefox-launcher","karma-phantomjs-launcher"]})}}});