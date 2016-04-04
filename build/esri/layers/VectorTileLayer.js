//>>built
define("esri/layers/VectorTileLayer","require dojo/_base/declare dojo/_base/lang dojo/_base/url dojo/dom-construct dojo/dom-style dojo/has dojo/Deferred ../lang ../domUtils ../urlUtils ../kernel ../config ../request ../SpatialReference ../geometry/Extent ./layer ./TileInfo ./unitBezier".split(" "),function(R,B,g,S,F,T,n,t,G,H,k,q,C,D,I,u,l,J,U){var E=B(l,{declaredClass:"esri.layers.VectorTileLayer",_mapsWithAttribution:["World_Basemap"],_eventMap:{"style-change":["style"]},constructor:function(a,
b){this._displayLevels=b?b.displayLevels:null;this._glStyleApplied=!1;this._serviceOverrides={};this._style=null;b&&b.tileServers&&b.tileServers.length&&(this._serviceOverrides.tileServers=b.tileServers.map(function(a){if(f.isMapboxUrl(a))return a;a=k.getAbsoluteUrl(a);var b=f.getTokenFromUrl(a);return b?b.url+"?token\x3d"+b.token:k.urlToObject(a).path},this));var c=a;"string"==typeof a&&(c=f.isMapboxUrl(a)?a:k.getAbsoluteUrl(a),this._serviceOverrides.credential=f.getTokenFromUrl(a));this.setStyle(c);
this.registerConnectEvents()},setStyle:function(a){return a?(this._glStyleApplied=!1,this._serviceOverrides.credential="string"!=typeof a?null:f.getTokenFromUrl(a),this._loadStyle(a)):void 0},getStyle:function(){if(!this._style)return null;var a=JSON.parse(JSON.stringify(this._style.stylesheet)),b=a.sources;return Object.keys(b).forEach(function(a){a=b[a];a.tiles=(a.tiles||[]).map(function(a){return"string"!=typeof a&&(a=a.value),a})}),a},opacity:1,setOpacity:function(a){this.opacity!=a&&this.onOpacityChange(this.opacity=
a)},onOpacityChange:function(){},refresh:function(){},_loadStyle:function(a){return(new t).resolve().then(function(){var a=new t;return null==n("ie")||9<n("ie")?h?h.supported()?a.resolve():a.reject(Error("layer not supported"),!0):R(["./vector-tile"],function(c){h=c;h.supported()?a.resolve():a.reject(Error("layer not supported"),!0)}):a.reject(Error("layer not supported"),!0),a.promise}).then(function(){return h.tokenHandler?v=h.tokenHandler:(v=new V,h.tokenHandler=v),this._serviceOverrides&&this._serviceOverrides.credential&&
v.addToken(this._serviceOverrides.credential),f.loadMetadata(a,this._serviceOverrides)}.bind(this)).then(g.hitch(this,function(b){var c=b.layerDefinition;(this.serviceUrl=b.serviceUrl||null,this.styleUrl=b.styleUrl||null,c)?(this.spatialReference=c.initialExtent&&c.initialExtent.spatialReference&&new I(c.initialExtent.spatialReference),this.initialExtent=c.initialExtent&&new u(c.initialExtent),this.fullExtent=c.fullExtent&&new u(c.fullExtent),this.version=c.currentVersion,this.tileInfo=new J(c.tileInfo),
G.isDefined(c.minScale)&&!this._hasMin&&this.setMinScale(c.minScale),G.isDefined(c.maxScale)&&!this._hasMax&&this.setMaxScale(c.maxScale),c=null,a&&(c=k.urlToObject(b.serviceUrl).path.toLowerCase(),c=this._getDefaultAttribution(this._getMapName(c))),c&&(this.attributionDataUrl=c,this.hasAttributionData=!0)):(this.spatialReference=w,this.initialExtent=K,this.fullExtent=L,this.tileInfo=M,this.version=null);for(var d=this.tileInfo.lods,e=this.scales=[],N=this._displayLevels,f=-1/0,m=1/0,g=0,x=d.length;x>
g;g++)c=d[g],N&&-1===N.indexOf(c.level)||(e[g]=c.scale,f=c.scale>f?c.scale:f,m=c.scale<m?c.scale:m);f===-1/0||this._hasMin||this.setMinScale(f);1/0===m||this._hasMax||this.setMaxScale(m);this._style=b.style;this.gl&&(h.identityManager=q.id,this._applyGLStyle(this._style));this.onStyleChange(this.getStyle())})).then(g.hitch(this,function(){this.loaded||this.loadError||(this.loaded=!0,this.onLoad(this))})).otherwise(g.hitch(this,function(a){throw this._errorHandler(a),a;}))},_setMap:function(a,b){this.inherited(arguments);
this._map=a;var c=this._div=F.create("div",null,b);if(T.set(c,{position:"absolute",width:a.width+"px",height:a.height+"px",overflow:"visible",opacity:this.opacity}),this._onResizeHandle=a.on("resize",g.hitch(this,this._onResizeHandler)),this._onOpacityHandle=this.on("opacity-change",g.hitch(this,this._opacityChangeHandler)),this._onScaleVisHandle=this.on("scale-visibility-change",g.hitch(this,function(){this._applyGLStyle(this._style)})),this._onVisibilityHandle=this.on("visibility-change",g.hitch(this,
function(){this._applyGLStyle(this._style)})),h.identityManager=q.id,this.gl=new h.Renderer({container:c}),this.gl.setSize(a.width,a.height),this._applyGLStyle(this._style),this.evaluateSuspension(),this.suspended&&!a.loaded)var d=a.on("load",g.hitch(this,function(){d.remove();this.evaluateSuspension()}));return c},_unsetMap:function(){this.gl.remove();this.gl=null;this._glStyleApplied=!1;F.destroy(this._div);this._map=this._div=null;this._onResizeHandle=this._onResizeHandle&&this._onResizeHandle.remove()&&
null;this._onOpacityHandle=this._onOpacityHandle&&this._onOpacityHandle.remove()&&null;this._onScaleVisHandle=this._onScaleVisHandle&&this._onScaleVisHandle.remove()&&null;this._onVisibilityHandle=this._onVisibilityHandle&&this._onVisibilityHandle.remove()&&null;this._disableDrawConnectors();this._animation&&(this._animation.stop(),this._animation=null);this.inherited(arguments)},_applyGLStyle:function(a){if(!this._glStyleApplied){var b=this.gl;if(b)return a?void(this.visible&&this._isMapAtVisibleScale()&&
(a.animationLoop=b.animationLoop,b.setStyle(a),a._loaded&&(Object.getOwnPropertyNames(a.sources).forEach(function(a){this.fire("source.add",{source:this.sources[a]})},a),a.fire("load"),a.sprite&&a.sprite.loaded()&&a.fire("change")),this._glStyleApplied=!0)):void b.setStyle(null)}},_enableDrawConnectors:function(){var a=this._map;a&&(this._panHandle=a.on("pan",g.hitch(this,this._onPanExtentChangeHandler)),this._extentChangeHandle=a.on("extent-change",g.hitch(this,this._onPanExtentChangeHandler)),this._onScaleHandle=
a.on("scale",g.hitch(this,this._onScaleHandler)))},_disableDrawConnectors:function(){this._onScaleHandle=this._onScaleHandle&&this._onScaleHandle.remove()&&null;this._panHandle=this._panHandle&&this._panHandle.remove()&&null;this._extentChangeHandle=this._extentChangeHandle&&this._extentChangeHandle.remove()&&null},_getZoom:function(a){var b=this.tileInfo.lods,c=null,d=null,e=0,f=b.length-1;for(e;f>e;e++){if(c=b[e],d=b[e+1],c.scale<=a)return c.level;if(d.scale===a)return d.level;if(c.scale>a&&d.scale<
a)return e=e+1-(a-d.scale)/(c.scale-d.scale),e=Math.ceil(e)-Math.log(Math.abs(Math.ceil(e)-e+1))/Math.LN2,(.995<e-Math.floor(e)||.005>e-Math.floor(e))&&(e=Math.round(e)),b[e].level}return a>b[0].scale?b[0].level:b[b.length-1].level},_isMapAtVisibleScale:function(){var a=this.inherited(arguments);if(a){for(var b=this._map,a=this.scales,c=b.getScale(),d=!1,b=b.width>b.height?b.width:b.height,e=0,f=a.length;f>e;e++)if(Math.abs(a[e]-c)/a[e]<1/b){d=!0;break}a=d}return a},_getMapName:function(a){return(a=
a.match(/^https?\:\/\/(basemaps|basemapsbeta)\.arcgis\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i))&&a[2]},_getDefaultAttribution:function(a){if(a){var b;a=a.toLowerCase();for(var c=0,d=this._mapsWithAttribution.length;d>c;c++)if(b=this._mapsWithAttribution[c],-1<b.toLowerCase().indexOf(a))return"file:"===window.location.protocol?"http:":window.location.protocol+"//static.arcgis.com/attribution/Vector/"+b}},onStyleChange:function(){},_opacityChangeHandler:function(a){this.gl&&
(this._div.style.opacity=a.opacity)},_onResizeHandler:function(a){if(this.gl){var b=a.extent.getCenter();this.gl.setSize(a.width,a.height);this.gl.jumpTo({center:[b.getLongitude(),b.getLatitude()]});this._div.style.width=a.width+"px";this._div.style.height=a.height+"px"}},onSuspend:function(){this.inherited(arguments);H.hide(this._div);this._disableDrawConnectors()},onResume:function(){if(this.inherited(arguments),this.gl&&this._style){H.show(this._div);var a=this._map,b=this._getZoom(a.getScale()),
a=a.extent.getCenter();this._animate(a,b,!0)}this._enableDrawConnectors()},_onPanExtentChangeHandler:function(a){var b=this._getZoom(this._map.getScale());a=a.extent.getCenter();this._animate(a,b,!0)},_onScaleHandler:function(a){var b=this._map,c=b._zoomAnimDiv.anchor,d=b._zoomAnimDiv.extent.getCenter(),b=this._getZoom(b._zoomAnimDiv.newLod.scale,b._zoomAnimDiv.newLod.level);this._animate(d,b,a.immediate,c)},_animate:function(a,b,c,d){this._animation&&(this._animation.stop(),this._animation=null);
this._animation=W(this.gl,a.getLongitude(),a.getLatitude(),b,c,this._map,d)}}),h=null,v=null;l=Object.freeze||function(){};for(var y=[],p=0;20>p;p++){var z=78271.51696402048/Math.pow(2,p);y.push({level:p,scale:Math.floor(3779.527559055118*z),resolution:z})}var M=new J({rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:y});l(M);var w=new I(102100);l(w);var K=new u(-2.003750834E7,-2.003750834E7,2.003750834E7,2.003750834E7,w);
l(K);var L=new u(-2.003750834E7,-2.003750834E7,2.003750834E7,2.003750834E7,w);l(L);var O,A=function(){var a,b=window.performance||{},c=b.now||b.webkitNow||b.msNow||b.oNow||b.mozNow;return void 0!==c?function(){return c.call(b)}:(a=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:(new Date).getTime(),function(){return(new Date).getTime()-a})}();l=n("ff");var y=n("ie"),p=n("webkit"),z=n("opera"),P=(new Date).getTime(),
r=window.requestAnimationFrame;r||(O=p&&"webkit"||l&&"moz"||z&&"o"||y&&"ms",r=window[O+"RequestAnimationFrame"],r||(r=function(a){var b=A(),c=Math.max(0,16-(b-P)),d=window.setTimeout(function(){a(A())},c);return P=b+c,d}));var X=U.ease,W=function(a,b,c,d,e,f,g){if(e=e||0===C.defaults.map.zoomDuration)return a.jumpTo({center:[b,c],zoom:Math.ceil(d)-Math.log(Math.abs(Math.ceil(d)-d+1))/Math.LN2}),null;var m=!0,h=C.defaults.map.zoomDuration,x=a.transform.center.lat,k=a.transform.center.lng,l=a.transform.zoom,
n=A()+16,p=g?[g.x-f.width/2,g.y-f.height/2]:null,q=function(){if(m){var e=(A()+16-n)/h;1<=e&&(e=1,m=!1);var e=X(e),f=l+(d-l)*e;(f=Math.ceil(f)-Math.log(Math.abs(Math.ceil(f)-f+1))/Math.LN2,p)?a.zoomTo(f,{animate:!1,offset:p}):a.jumpTo({center:[k+(b-k)*e,x+(c-x)*e],zoom:f});m&&r(q)}};return q(),{stop:function(){m=!1}}},Q=B(String,{constructor:function(a,b){this.value=a;this.token=b},valueOf:function(){var a=this.value,b=this.token;if(!b){var c=q.id&&q.id.findCredential(a);c&&c.token&&(b=c.token)}return b&&
(a+=(-1===a.indexOf("?")?"?":"\x26")+"token\x3d"+b),a},toString:function(){return this.valueOf()},replace:function(a,b){return String.prototype.replace.call(this.valueOf(),a,b)}}),f={loadMetadata:function(a,b){var c=null,d=null,e=b&&b.credential;return(new t).resolve(a).then(function(){return h.config.ACCESS_TOKEN=E.ACCESS_TOKEN,"string"!=typeof a?a:(f.isMapboxUrl(a)?(d=a,c=h.normalizeStyleURL(a)):d=c=k.normalize(a).replace(/\/*$/,""),f._corsify(c),c=f._appendToken(c,e),D({url:c,content:{f:"json"},
handleAs:"json"}))}).then(function(a){return f._processMetadata(d,a,b)}).then(function(a){return f._loadStyle(a,b)})},isMapboxUrl:function(a){return-1<a.search(/^mapbox:\/\/styles\//)},getTokenFromUrl:function(a){var b;f.isMapboxUrl(a)||(a=k.urlToObject(a),a.query&&a.query.token&&(b={url:a.path,token:a.query.token}));return b},_appendToken:function(a,b){return b&&b.token?a+((-1===a.indexOf("?")?"?":"\x26")+"token\x3d"+b.token):a},_configureStyle:function(a,b){var c=a.layerDefinition,d=a.style,e=a.serviceUrl,
g=a.styleUrl,h=f._getAbsolutePath,m=f._corsify;if(c&&d&&d.sources.esri){var k=c.tilejson||"2.0.0",l=c.tileInfo&&c.tileInfo.format||"pbf",p=c.tileMap?m(h(c.tileMap,e)):null,n=(c.tiles||[]).map(function(a){return new Q(f._getAbsolutePath(a.valueOf(),e),b&&b.credential&&b.credential.token)});d.sources.esri={type:"vector",scheme:"xyz",tilejson:k,format:l,index:p,tiles:n,description:c.description,name:c.name};n.forEach(m);d.glyphs=m(h(d.glyphs,g));d.sprite=m(h(d.sprite,g))}return{style:d,layerDefinition:c,
serviceUrl:e,styleUrl:g}},_loadStyle:function(a,b){var c=new t,d=a.style,e=d.sources;b&&b.tileServers&&Object.getOwnPropertyNames(e).forEach(g.hitch(this,function(c){c=e[c];var d=b.tileServers.map(function(c){return new Q(f._getAbsolutePath(c,a.serviceUrl,b))});c.tiles=d;d.forEach(f._corsify)}));h.identityManager=q.id;var d=new h.Style(d),k=function(){d.off("load",k);d.off("error",l);a.style=d;c.resolve(a)},l=function(a){d.off("load",k);d.off("error",l);c.reject(a)};return d.on("load",k),d.on("error",
l),c.promise},_getAbsolutePath:function(a,b){var c;if(b=b||"",b=k.urlToObject(b).path,/^https?:\/\//i.test(a))c=a;else{if(0===a.indexOf("//"))return location.protocol+a;b=b.replace(/(\/+\w+\.\w+)$/,"");/\/+$/.test(b)||(b+="/");0===a.indexOf("/")?(a=a.substring(1),c=b+a):c=b+a}return k.normalize(c)},_corsify:function(a){a=a.valueOf();var b=C.defaults.io.corsEnabledServers;if(!k.canUseXhr(a)){var c=new S(a),c=(c.host+(c.port?":"+c.port:"")).toLowerCase();-1===b.indexOf(c)&&b.push(c)}return a},_processMetadata:function(a,
b,c){var d,e,h={},k=f._getAbsolutePath,m=f._configureStyle,l=f._corsify,n=c&&c.credential;return delete b._ssl,b.currentVersion?(d=a,e=k(b.defaultStyles,d),D({url:f._appendToken(e,n),content:{f:"json"},handleAs:"json"}).then(g.hitch(this,function(a){return m({style:a,layerDefinition:b,styleUrl:e,serviceUrl:d},c)}))):(h=b,e=a,b.sources.esri&&b.sources.esri.url?(d=l(k(b.sources.esri.url,e)),D({url:f._appendToken(d,n),content:{f:"json"},handleAs:"json"}).then(g.hitch(this,function(a){return m({style:h,
layerDefinition:a,styleUrl:e,serviceUrl:d},c)}))):m({style:h}))}},V=B([],{constructor:function(){this._credentials=[]},addToken:function(a){if(!a||!a.url||!a.token)return!1;var b=this.getServiceRoot(a.url);this._credentials.push({rootUrl:b,token:a.token})},findCredential:function(a){var b=-1,c=this._credentials,d=this.getServiceRoot(a);return c.some(function(a,c){return a.rootUrl===d?(b=c,!0):void 0}),-1<b?c[b]:null},getServiceRoot:function(a){var b=/(.+\/rest\/services\/.*\/?vectortileserver)/i,
c=/(.+\/sharing\/.*)/i;return b.test(a)?a.match(b)[1].toLowerCase():c.test(a)?a.match(c)[1].toLowerCase():null},shareSameService:function(a,b){return a=this.getServiceRoot(a),b=this.getServiceRoot(b),a=a.substr(a.indexOf(":")),b=b.substr(b.indexOf(":")),a===b}});return E.ACCESS_TOKEN=null,E});