montageDefine("a6a7572","data/service/blueprint-data-mapping",{dependencies:["data/service/data-mapping","moment-timezone"],factory:function(a,e,t){var n=a("data/service/data-mapping").DataMapping,i=a("moment-timezone");e.BlueprintDataMapping=n.specialize({_blueprint:{value:void 0},mapRawDataToObject:{value:function(a,e,t){var n,r,p,o,u,m=this._blueprint.propertyDescriptors,c=a.attributes||a;for(n=0,r=m.length;n<r;n++)p=m[n],o=p.synonym||p.name,c&&o in c&&(u=c[o],e[p.name]="date"===p.valueType?new i(Number(u)):"duration"===p.valueType?i.duration(Number(u)):u)}},mapObjectToRawData:{value:function(a,e){var t,n,i,r,p=this._blueprint.propertyDescriptors,o=e.attributes;for(t=0,n=p.length;t<n;t++)i=p[t],r=i.synonym||i.name,o&&i.name in o&&(o[r]=a[i.name])}},mapFromRawData:{value:function(a,e,t){this.mapRawDataToObject(e,a,t)}},mapToRawData:{value:function(a,e){this.mapObjectToRawData(a,e)}}},{withBlueprint:{value:function(a){var e=new this;return e._blueprint=a,e}}})}});