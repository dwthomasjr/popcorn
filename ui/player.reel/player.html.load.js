montageDefine("08021a5","ui/player.reel/player.html",{"text":"<!DOCTYPE html><html><head><meta http-equiv=content-type content=\"text/html; charset=utf-8\"><style>.Moviepopup{position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;padding-top:50px;background:#000;-webkit-transform:translate3d(0,-100%,0);-moz-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);-webkit-transition:-webkit-transform .3s cubic-bezier(.53,.09,.94,.53);-moz-transition:-moz-transform .3s cubic-bezier(.53,.09,.94,.53);-ms-transition:-ms-transform .3s cubic-bezier(.53,.09,.94,.53);transition:transform .3s cubic-bezier(.53,.09,.94,.53);pointer-events:none}.Moviepopup.is-shown{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:-webkit-transform .3s cubic-bezier(0,.2,.15,1);-moz-transition:-moz-transform .3s cubic-bezier(0,.2,.15,1);-ms-transition:-ms-transform .3s cubic-bezier(0,.2,.15,1);transition:transform .3s cubic-bezier(0,.2,.15,1);display:block;pointer-events:all}.Moviepopup .button-close,.Moviepopup .button-close:focus{position:absolute;top:6px;right:6px;border-color:hsl(0,0%,0%);color:hsl(0,0%,60%);font-size:15px;font-family:inherit;box-shadow:inset 0 1px 3px hsla(0,0%,0%,.3),0 1px 2px hsla(0,0%,100%,.1);background:hsl(0,0%,12%) -webkit-linear-gradient(top,hsla(0,0%,100%,.1),hsla(0,0%,0%,.1));background:hsl(0,0%,12%) -moz-linear-gradient(top,hsla(0,0%,100%,.1),hsla(0,0%,0%,.1));background:hsl(0,0%,12%) -ms-linear-gradient(top,hsla(0,0%,100%,.1),hsla(0,0%,0%,.1));background:hsl(0,0%,12%) linear-gradient(top,hsla(0,0%,100%,.1),hsla(0,0%,0%,.1))}.Moviepopup .button-close.active{background:hsl(0,0%,10%) -webkit-linear-gradient(top,hsla(0,0%,40%,.1),hsla(0,0%,0%,.1));background:hsl(0,0%,10%) -moz-linear-gradient(top,hsla(0,0%,40%,.1),hsla(0,0%,0%,.1));background:hsl(0,0%,10%) -ms-linear-gradient(top,hsla(0,0%,40%,.1),hsla(0,0%,0%,.1));background:hsl(0,0%,10%) linear-gradient(top,hsla(0,0%,40%,.1),hsla(0,0%,0%,.1))}</style><script src=https://www.youtube.com/player_api></script><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"owner\"},\"player\":{\"#\":\"iframe\"}}},\"closeButton\":{\"prototype\":\"digit/ui/button.reel\",\"properties\":{\"element\":{\"#\":\"closeButton\"}},\"listeners\":[{\"type\":\"action\",\"listener\":{\"@\":\"owner\"}}]},\"overlay\":{\"prototype\":\"montage/ui/overlay.reel\",\"properties\":{\"element\":{\"#\":\"overlay\"},\"delegate\":{\"@\":\"owner\"}}}}</script></head><body><div data-montage-id=owner><div data-montage-id=overlay class=Moviepopup><button data-montage-id=closeButton class=\"button button-close\">✕</button><iframe data-montage-id=iframe class=montage-youtube-player type=text/html width=100% height=100% frameborder=0 allowfullscreen=\"\"></iframe></div></div></body></html>"})