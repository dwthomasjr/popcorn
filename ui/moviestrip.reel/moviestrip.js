var Component=require("montage/ui/component").Component,KeyComposer=require("montage/composer/key-composer").KeyComposer;exports.Moviestrip=Component.specialize({constructor:{value:function(){this["super"]()}},enterDocument:{value:function(e){e&&(this.movieDetails.defineBinding("classList.has('details-fade-out')",{"<-":"$self._detailsHidden",parameters:{self:this}}),this.templateObjects.keyUp.addEventListener("keyPress",this,!1),this.templateObjects.keyDown.addEventListener("keyPress",this,!1),this.templateObjects.keyLeft.addEventListener("keyPress",this,!1),this.templateObjects.keyRight.addEventListener("keyPress",this,!1))}},handleKeyPress:{value:function(e){var t=this.categoryContentController,n=t.content.indexOf(t.selection.one());if(!(Math.abs(this.templateObjects.movieFlow.scroll-n)>1)){if("next"===e.identifier){if(n>=t.content.length)return;t.select(t.content[n+1])}if("previous"===e.identifier){if(n<1)return;t.select(t.content[n-1])}}}},_categoryContentController:{value:null},_movieFlow:{value:null},movieFlow:{get:function(){return this._movieFlow},set:function(e){var t=this;this._movieFlow=e,this._movieFlow.addEventListener("transitionend",function(){t._flowHiddenCallback(),clearTimeout(this._flowHiddenCallbackTimeout)},!1)}},categoryContentController:{get:function(){return this._categoryContentController},set:function(e){null!=e&&(this._categoryContentController=e,null==this._categoryContentController?(this._displayedContentController=this._categoryContentController,this._flowHidden=!1):this._startChangeCategoryTransition())}},_displayedContentController:{value:null},_flowHiddenCallback:{value:function(){this.movieFlow&&(this.movieFlow.scroll=0),this._displayedContentController=this.categoryContentController,this._flowHidden=!1,this._detailsHidden=!1}},_flowHiddenCallbackTimeout:{value:null},_startChangeCategoryTransition:{value:function(){var e=this;this._detailsHidden=!0,this._flowHidden=!0,this._categoryContentController.select(this._categoryContentController.content[0]),this._flowHiddenCallbackTimeout=setTimeout(function(){e._flowHiddenCallback()},800)}},movieFlowDidTranslateStart:{value:function(){this._detailsHidden=!0}},movieFlowDidTranslateEnd:{value:function(e){var t=Math.round(e.scroll);this._displayedContentController&&this._displayedContentController.select(this._displayedContentController.content[t]),this._detailsHidden=!1}},_flowHidden:{value:!1},_detailsHidden:{value:!1}});