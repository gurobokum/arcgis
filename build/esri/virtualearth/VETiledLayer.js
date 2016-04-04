//>>built
define("esri/virtualearth/VETiledLayer","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),function(d,c,h,m,n,p,k,q,r,t,l,u,v,w,x){d=d(v,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(a){try{a=c.mixin({bingMapsKey:null,culture:"en-US"},a||{});var b=window.location.protocol;
if("file:"===b&&(b="http:"),this.url=b+"//dev.virtualearth.net/REST/v1",this._url=t.urlToObject(this.url),this.spatialReference=new l({wkid:102100}),this.tileInfo=new u({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,
scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,
resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=this.fullExtent=new w(-2.0037508342787E7,
-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new l({wkid:102100})),c.mixin(this,a),this.hasAttributionData=this.showAttribution,this._initLayer=c.hitch(this,this._initLayer),this._errorHandler=c.hitch(this,this._errorHandler),this._getTileInfo=c.hitch(this,this._getTileInfo),!this.bingMapsKey)throw Error("BingMapsKey must be provided.");this._getTileInfo()}catch(e){throw this.onError(e),e;}},_unsetMap:function(){this.inherited("_unsetMap",arguments)},_getTileInfo:function(){if(this.mapStyle){var a=
this._url.path+"/Imagery/Metadata/"+this.mapStyle;if(this.bingMapsKey){var b=this.resourceInfo;!this.loaded&&b?this._initLayer(b):x({url:a,content:c.mixin({},{key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,error:this._errorHandler})}}},_initLayer:function(a){if(200!==a.statusCode){var b=Error();return b.code=a.statusCode,b.message=a.statusDescription,b.details=a.errorDetails,b.authenticationResultCode=
a.authenticationResultCode,void this.onError(b)}try{this.resourceInfo=h.toJson(a);var b=a.resourceSets[0].resources[0],e=b.imageUrl.replace("{","${");if(this.tileServers=m.map(b.imageUrlSubdomains,function(a){var b=window.location.protocol;return"file:"===b&&(b="http:"),k.substitute(e,{subdomain:a}).replace("http:",b)}),this._tsLength=this.tileServers.length,this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=this.copyright||"\x26copy; 2012 Microsoft Corporation and its data suppliers";
this.loaded=!0;this.onLoad(this);var c=this.loadCallback;c&&(delete this.loadCallback,c(this))}}catch(f){this.onError(f)}},getAttributionData:function(){var a,b=new q,e=h.fromJson(this.resourceInfo);(this.hasAttributionData&&e&&(a=c.getObject("resourceSets.0.resources.0.imageryProviders",!1,e)),a)?b.callback({contributors:a}):(a=Error("Layer does not have attribution data"),a.log=n.isDebug,b.errback(a));return b},getTileUrl:function(a,b,c){return k.substitute(this.tileServers[b%this._tsLength].replace(/\{/g,
"${"),{quadkey:this._getQuadKey(a,b,c),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(a,b,c){var d,f,g="";for(f=a;0<f;f--)a="0",d=1<<f-1,0!=(c&d)&&a++,0!=(b&d)&&(a++,a++),g+=a;return g},setMapStyle:function(a){this.mapStyle=a;this._getTileInfo()},setCulture:function(a){this.culture=a;this._getTileInfo()},setBingMapsKey:function(a){this.bingMapsKey=a},onMapStyleChange:function(){}});return c.mixin(d,{MAP_STYLE_AERIAL:"aerial",MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabels",MAP_STYLE_ROAD:"road"}),
p("extend-esri")&&c.setObject("virtualearth.VETiledLayer",d,r),d});