montageDefine("3f77e66","dom",{dependencies:["collections/listen/property-changes"],factory:function(e,t,n){function r(e){c.dispatchOwnPropertyChange(e.target,"checked",e.target.checked)}function a(e){c.dispatchOwnPropertyChange(e.target,"value",e.target.value)}function i(e){c.dispatchOwnPropertyChange(e.target,"innerHTML",e.target.innerHTML),c.dispatchOwnPropertyChange(e.target,"innerText",e.target.innerText),c.dispatchOwnPropertyChange(e.target,"value",e.target.innerText)}function o(e){"checked"===e?this.addEventListener("change",r):"value"===e&&(this.addEventListener("change",a),"text"===this.type||"TEXTAREA"===this.nodeName?this.addEventListener("keyup",a):this.contentEditable&&(this.innerText=this.innerText?this.innerText:this.value,this.addEventListener("keyup",i)))}function s(e){"checked"===e?this.removeEventListener("change",r):"value"===e&&(this.removeEventListener("change",a),"text"===this.type||"TEXTAREA"===this.nodeName?this.removeEventListener("keyup",a):this.contentEditable&&this.removeEventListener("keyup",i))}var c=e("collections/listen/property-changes"),h=Object.getPrototypeOf(document.createElement("input"));h.makePropertyObservable=o,h.makePropertyUnobservable=s;var p=Object.getPrototypeOf(document.createElement("textarea"));p.makePropertyObservable=o,p.makePropertyUnobservable=s;var d=Object.getPrototypeOf(document.createElement("span"));d.makePropertyObservable=o,d.makePropertyUnobservable=s}});