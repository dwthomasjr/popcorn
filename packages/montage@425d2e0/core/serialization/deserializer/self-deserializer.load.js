montageDefine("425d2e0","core/serialization/deserializer/self-deserializer",{dependencies:["../../core"],factory:function(e,t,i){var o=e("../../core").Montage,r=o.specialize({_object:{value:null},_objectDescriptor:{value:null},_context:{value:null},_unitNames:{value:null},_objectUnitNames:{value:null},create:{value:function(){return new this}},initWithObjectAndObjectDescriptorAndContextAndUnitNames:{value:function(e,t,i,o){return this._object=e,this._objectDescriptor=t,this._context=i,this._unitNames=o,this}},getProperty:{value:function(e){if(this._objectDescriptor.properties)return this._objectDescriptor.properties[e]}},getType:{value:function(){return"prototype"in this._objectDescriptor?"prototype":"object"in this._objectDescriptor?"object":void 0}},getTypeValue:{value:function(){return this._objectDescriptor.prototype||this._objectDescriptor.object}},getObjectByLabel:{value:function(e){this._context.getObject(e)}},deserializeProperties:{value:function(e){var t,i=this._object,r=this._objectDescriptor.properties;if(r){e||(e=o.getSerializablePropertyNames(i));for(var s=0,n=e.length;s<n;s++)t=e[s],i[t]=r[t]}}},deserializeUnit:{value:function(e){var t=this._objectUnitNames;t?t.indexOf(e)===-1&&t.push(e):(t=this._objectUnitNames=[e],this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,t))}},deserializeUnits:{value:function(){var e=this._objectUnitNames;if(e)for(var t,i=0;t=e[i];i++)e.indexOf(t)===-1&&e.push(t);else e=this._objectUnitNames=this._unitNames,this._context.setUnitsToDeserialize(this._object,this._objectDescriptor,e)}}});t.SelfDeserializer=r}});