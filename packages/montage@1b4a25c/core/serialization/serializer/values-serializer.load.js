montageDefine("1b4a25c","core/serialization/serializer/values-serializer",{dependencies:["../../core"],factory:function(e,t,i){var r=e("../../core").Montage,a={thisIsAReferenceCreatedByMontageSerializer:!0,reference:null},l=r.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},initWithMalkerAndVisitorAndObject:{value:function(e,t,i){return this._malker=e,this._visitor=t,this._object=i,this}},addObject:{value:function(e){if("object"==typeof e)return this._malker.visit(e),e}},addObjectReference:{value:function(e){var t=this._visitor.builder,i=this._visitor.labeler,r=i.getObjectLabel(e),l=Object.create(a);return l.reference=t.createReference(r),l}},set:{value:function(e,t,i){this._visitor.setProperty(this._malker,e,t,i)}},setAll:{value:function(){this._visitor.setSerializableObjectValues(this._malker,this._object)}}});t.ValuesSerializer=l}});