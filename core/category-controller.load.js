montageDefine("2570e4c","core/category-controller",{dependencies:["montage","montage/core/range-controller"],factory:function(e,o,n){var t=e("montage").Montage,l=e("montage/core/range-controller").RangeController;o.CategoryController=t.specialize({constructor:{value:function(e,o){this.title=e,this.key=o;var n=new l;n.avoidsEmptySelection=!0,this.contentController=n}},title:{value:null},key:{value:null},contentController:{value:null}})}});