montageDefine("425d2e0","core/serialization/deserializer/unit-deserializer",{dependencies:["../../core"],factory:function(e,t,r){var i=e("../../core").Montage,n=i.specialize({_context:{value:null},create:{value:function(){return new this}},initWithContext:{value:function(e){return this._context=e,this}},_templatePropertyRegExp:{value:/^([^:]+)(:.*)$/},isValidTemplatePropertyReference:{value:function(e){var t=this._templatePropertyRegExp.exec(e);if(t){var r=t[1];return!!this._context.hasObject(r)}return!1}},getObjectByLabel:{value:function(e){if(this._context.hasObject(e))return this._context.getObject(e);if(this.isValidTemplatePropertyReference(e))return null;throw new Error("Object with label '"+e+"' was not found.")}}});t.UnitDeserializer=n}});