montageDefine("1b4a25c","ui/base/abstract-control",{dependencies:["../component","collections/map"],factory:function(t,e,n){var i=t("../component").Component,o=t("collections/map");e.AbstractControl=i.specialize({dispatchActionEvent:{value:function(){return this.dispatchEvent(this.createActionEvent())}},_detail:{value:null},detail:{get:function(){return null!==this._detail&&void 0!==this._detail||(this._detail=new o),this._detail}},createActionEvent:{value:function(){var t,e=document.createEvent("CustomEvent");return t=this._detail,e.initCustomEvent("action",!0,!0,t),e}},disabled:{get:function(){return!this.enabled},set:function(t){"boolean"==typeof t&&(this.enabled=!t)}}})}});