montageDefine("a6a7572","core/converter/range-enforcer",{dependencies:["./converter"],factory:function(e,n,r){function a(e){return e<=this.min?this.min:e>=this.max?this.max:e}var t=e("./converter").Converter;n.RangeEnforcer=t.specialize({min:{value:null},max:{value:null},convert:{value:a},revert:{value:a}})}});