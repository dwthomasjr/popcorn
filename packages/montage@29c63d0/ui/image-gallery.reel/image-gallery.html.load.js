montageDefine("29c63d0","ui/image-gallery.reel/image-gallery.html",{"text":"<!DOCTYPE html><html><head><title></title><style>.montage-ImageGallery{position:relative;min-width:1px;min-height:1px}.montage-ImageGallery-flow .montage-Flow-Repetition>div{position:absolute;top:0;left:0;bottom:0;right:0;width:auto;height:auto}</style><script type=text/montage-serialization>{\"owner\":{\"values\":{\"element\":{\"#\":\"owner\"},\"_flow\":{\"@\":\"flow\"},\"_flowScroll\":{\"<-\":\"@flow.scroll\"}}},\"flow\":{\"prototype\":\"ui/flow.reel\",\"values\":{\"element\":{\"#\":\"flow\"},\"isCameraEnabled\":false,\"elasticScrollingSpeed\":0.6,\"stride\":1,\"sceneScaleX\":{\"numerator\":\"1\",\"denominator\":\"300\"},\"sceneScaleY\":{\"numerator\":\"1\",\"denominator\":\"1\"},\"sceneOffsetTop\":0,\"sceneOffsetLeft\":0,\"linearScrollingVector\":[-300,0],\"paths\":[{\"knots\":[{\"knotPosition\":[-300,0,-200],\"nextHandlerPosition\":[-200,0,0],\"previousDensity\":1,\"nextDensity\":1,\"opacity\":-0.2},{\"previousHandlerPosition\":[-100,0,0],\"knotPosition\":[0,0,0],\"nextHandlerPosition\":[100,0,0],\"previousDensity\":1,\"nextDensity\":1,\"opacity\":2.5},{\"previousHandlerPosition\":[200,0,0],\"knotPosition\":[300,0,-200],\"previousDensity\":1,\"nextDensity\":1,\"opacity\":-0.2}],\"headOffset\":1,\"tailOffset\":1,\"units\":{\"opacity\":\"\"}}],\"sceneScaleX.numerator\":{\"<-\":\"viewportWidth\"},\"content\":{\"<-\":\"@owner.images\"}}},\"image\":{\"prototype\":\"ui/image-gallery-item.reel\",\"values\":{\"element\":{\"#\":\"image\"},\"src\":{\"<-\":\"@flow:iteration.object\"}}},\"previous\":{\"prototype\":\"ui/button.reel\",\"values\":{\"element\":{\"#\":\"previous\"},\"enabled\":{\"<-\":\"@owner.currentImageIndex > 0\"}},\"listeners\":[{\"type\":\"action\",\"listener\":{\"@\":\"owner\"}}]},\"next\":{\"prototype\":\"ui/button.reel\",\"values\":{\"element\":{\"#\":\"next\"},\"enabled\":{\"<-\":\"@owner.currentImageIndex < @owner.images.length - 1\"}},\"listeners\":[{\"type\":\"action\",\"listener\":{\"@\":\"owner\"}}]}}</script></head><body><div data-montage-id=owner class=montage-ImageGallery><div data-montage-id=flow class=montage-ImageGallery-flow><div data-montage-id=image></div></div><div data-montage-id=previous class=montage-ImageGallery-previous></div><div data-montage-id=next class=montage-ImageGallery-next></div></div></body></html>"})