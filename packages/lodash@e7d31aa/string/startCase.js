var createCompounder=require("../internal/createCompounder"),startCase=createCompounder(function(e,r,t){return e+(t?" ":"")+(r.charAt(0).toUpperCase()+r.slice(1))});module.exports=startCase;