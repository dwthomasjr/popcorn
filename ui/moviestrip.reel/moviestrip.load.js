montageDefine("08021a5","ui/moviestrip.reel/moviestrip",{dependencies:["montage/ui/component"],factory:function(t,e,n){var o=t("montage/ui/component").Component;e.Moviestrip=o.specialize({constructor:{value:function(){this["super"]()}},enterDocument:{value:function(t){t&&this.movieDetails.defineBinding("classList.has('details-fade-out')",{"<-":"$self._detailsHidden",parameters:{self:this}})}},_categoryContentController:{value:null},_movieFlow:{value:null},movieFlow:{get:function(){return this._movieFlow},set:function(t){this._movieFlow=t,this._movieFlow.addEventListener("transitionend",function(){self._flowHiddenCallback(),cancelTimeout(this._flowHiddenCallbackTimeout)},!1)}},categoryContentController:{get:function(){return this._categoryContentController},set:function(t){null!=t&&(this._categoryContentController=t,null==this._categoryContentController?(this._displayedContentController=this._categoryContentController,this._flowHidden=!1):this._startChangeCategoryTransition())}},_displayedContentController:{value:null},_flowHiddenCallback:{value:function(){this.movieFlow&&(this.movieFlow.scroll=0),this._displayedContentController=this.categoryContentController,this._flowHidden=!1,this._detailsHidden=!1}},_flowHiddenCallbackTimeout:{value:null},_startChangeCategoryTransition:{value:function(){var t=this;this._detailsHidden=!0,this._flowHidden=!0,this._categoryContentController.select(this._categoryContentController.content[0]),this._flowHiddenCallbackTimeout=setTimeout(function(){t._flowHiddenCallback()},800)}},movieFlowDidTranslateStart:{value:function(){this._detailsHidden=!0}},movieFlowDidTranslateEnd:{value:function(t){var e=Math.round(t.scroll);this._displayedContentController&&this._displayedContentController.select(this._displayedContentController.content[e]),this._detailsHidden=!1}},_flowHidden:{value:!1},_detailsHidden:{value:!1}})}});