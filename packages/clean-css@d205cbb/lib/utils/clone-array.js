function cloneArray(r){for(var e=r.slice(0),n=0,o=e.length;n<o;n++)Array.isArray(e[n])&&(e[n]=cloneArray(e[n]));return e}module.exports=cloneArray;