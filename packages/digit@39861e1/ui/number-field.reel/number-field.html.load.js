montageDefine("39861e1","ui/number-field.reel/number-field.html",{"text":"<!DOCTYPE html><html><head><meta charset=utf-8><style>.digit-NumberField{box-sizing:border-box;position:relative;display:inline-block;width:auto;margin:0 4px;vertical-align:middle;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.digit-NumberField>.digit-NumberField-input{float:left;width:3.75em;border-radius:0;text-align:center}.digit-NumberField>.digit-NumberField-plus,.digit-NumberField>.digit-NumberField-minus{float:left;margin:0;padding:2px;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.digit-NumberField>.digit-NumberField-plus{border-width:1px 1px 1px 0;border-radius:0 2.5em 2.5em 0}.digit-NumberField>.digit-NumberField-minus{border-width:1px 0 1px 1px;border-radius:2.5em 0 0 2.5em}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"numberField\"},\"_numberFieldTextFieldComponent\":{\"@\":\"textField\"},\"_numberFieldMinusComponent\":{\"@\":\"minus\"},\"_numberFieldPlusComponent\":{\"@\":\"plus\"}}},\"textField\":{\"prototype\":\"ui/text-field.reel\",\"properties\":{\"element\":{\"#\":\"textField\"}},\"bindings\":{\"value\":{\"<->\":\"@owner.value\"}}},\"plus\":{\"prototype\":\"ui/button.reel\",\"properties\":{\"element\":{\"#\":\"buttonPlus\"}}},\"minus\":{\"prototype\":\"ui/button.reel\",\"properties\":{\"element\":{\"#\":\"buttonMinus\"}}}}</script></head><body><span data-montage-id=numberField class=digit-NumberField><button data-montage-id=buttonMinus class=digit-NumberField-minus tabindex=-1>−</button> <input data-montage-id=textField class=digit-NumberField-input> <button data-montage-id=buttonPlus class=digit-NumberField-plus tabindex=-1>+</button></span></body></html>"})