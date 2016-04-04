//>>built
define("esri/opsdashboard/MapWidgetProxy","dojo/_base/declare dojo/_base/lang ../SpatialReference ../geometry/jsonUtils ./core/messageHandler ./core/MessageReceiver ./GraphicsLayerProxy".split(" "),function(e,d,f,c,b,g,h){return e([g],{_listeningToMap:!1,id:null,name:null,spatialReference:null,_setConfig:function(a){this.inherited(arguments);this.spatialReference=new f(a.spatialReference)},_messageReceived:function(a){if(void 0!==a.args&&void 0!==a.args.mapWidgetId&&this.id===a.args.mapWidgetId)switch(a.functionName.toLowerCase()){case "extentchanged":return this._mapExtentChanged(a.args)}},
_mapExtentChanged:function(a){a=c.fromJson(a.extent);this.mapExtentChanged(a);this.emit("map-extent-change",{extent:a})},subscribeToMapEvents:function(){this._listeningToMap||(this._listeningToMap=!0,b._sendMessage({functionName:"subscribeToMapEvents",args:{mapWidgetId:this.id}}))},unsubscribeFromMapEvents:function(){this._listeningToMap&&(this._listeningToMap=!1,b._sendMessage({functionName:"unSubscribeFromMapEvents",args:{mapWidgetId:this.id}}))},mapExtentChanged:function(){},getMapExtent:function(){return b._sendMessageWithReply({functionName:"getExtent",
args:{mapWidgetId:this.id}}).then(d.hitch(this,function(a){return c.fromJson(a.extent)}))},setExtent:function(a){a&&a.type&&"extent"===a.type&&b._sendMessage({functionName:"setExtent",args:{mapWidgetId:this.id,extent:a.toJson()}})},panTo:function(a){a&&a.type&&"point"===a.type&&b._sendMessage({functionName:"panTo",args:{mapWidgetId:this.id,mapPoint:a.toJson()}})},createGraphicsLayerProxy:function(a){var c={functionName:"createGraphicsLayer",args:{mapWidgetId:this.id,visible:a&&a.visible?a.visible:
!0,opacity:a&&a.opacity?a.opacity:1,minScale:a&&a.minScale?a.minScale:0,maxScale:a&&a.maxScale?a.maxScale:0,renderer:a&&a.renderer?a.renderer.toJson():void 0}};return b._sendMessageWithReply(c).then(d.hitch(this,function(b){return new h(this,b.graphicsLayerId,a)}))},destroyGraphicsLayerProxy:function(a){a&&b._sendMessage({functionName:"removeGraphicsLayer",args:{mapWidgetId:this.id,graphicsLayerId:a._id}})}})});