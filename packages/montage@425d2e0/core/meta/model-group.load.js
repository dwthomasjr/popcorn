montageDefine("425d2e0","core/meta/model-group",{dependencies:["../core","./model","./object-property","../deprecate"],factory:function(e,t,o){var r=e("../core").Montage,d=e("./model"),l=e("./object-property").ObjectProperty,i=e("../deprecate");t.ModelGroup=r.specialize({constructor:{value:function(){this._models=[],this._modelTable={}}},_models:{value:null},_modelTable:{value:null},models:{get:function(){return this._models}},addModel:{value:function(e){var t;null!==e&&(this._modelTable[e.name]&&this.removeModel(this._modelTable[e.name]),t=this._models.indexOf(e),t>=0&&this._models.splice(t,1),this._models.push(e),this._modelTable[e.name]=e)}},removeModel:{value:function(e){var t;null!==e&&(t=this._models.indexOf(e),t>=0&&this._models.splice(t,1),this._modelTable[e.name]&&delete this._modelTable[e.name])}},modelForName:{value:function(e){return this._modelTable[e]}},objectDescriptorForPrototype:{value:function(e,t){var o,r,d=null;for(r=0;"undefined"!=typeof(o=this.models[r])&&!d;r++)d=o.objectDescriptorForName(e);return d}},_defaultObjectDescriptorObjectProperty:{serializable:!0,value:null},defaultObjectDescriptorObjectProperty:{get:function(){return this._defaultObjectDescriptorObjectProperty||(this._defaultObjectDescriptorObjectProperty=(new l).init()),this._defaultObjectDescriptorObjectProperty}},_defaultModel:{serializable:!0,value:null},defaultModel:{get:function(){if(!this._defaultModel){var t=global.mr||e;this._defaultModel=(new d.Model).initWithNameAndRequire("default",t),this._defaultModel.isDefault=!0,this.addModel(this._defaultModel)}return this._defaultModel}},binders:{get:i.deprecateMethod(void 0,function(){return this.models},"binders","models")},addBinder:{value:i.deprecateMethod(void 0,function(e){this.addModel(e)},"addBinder","addModel")},removeBinder:{value:i.deprecateMethod(void 0,function(e){return this.removeModel(e)},"removeBinder","removeModel")},binderForName:{value:i.deprecateMethod(void 0,function(e){return this.modelForName(e)},"binderForName","modelForName")},blueprintForPrototype:{value:i.deprecateMethod(void 0,function(e,t){return this.objectDescriptorForPrototype(e)},"blueprintForPrototype","objectDescriptorForPrototype")},defaultBlueprintObjectProperty:{get:i.deprecateMethod(void 0,function(){return this.defaultObjectDescriptorObjectProperty},"defaultBlueprintObjectProperty","defaultObjectDescriptorObjectProperty")},defaultBinder:{get:i.deprecateMethod(void 0,function(){return this.defaultModel},"defaultBinder","defaultModel")}})}});