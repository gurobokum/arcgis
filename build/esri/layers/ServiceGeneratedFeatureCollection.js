//>>built
define("esri/layers/ServiceGeneratedFeatureCollection","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style dojo/has ../kernel ../SpatialReference ../geometry/Extent ../geometry/webMercatorUtils ../renderers/SimpleRenderer ./layer ./FeatureLayer ../dijit/PopupTemplate".split(" "),function(h,p,d,f,l,q,r,t,u,v,m,k,w,x,y){h=h([w],{declaredClass:"esri.layers._ServiceGeneratedFeatureCollection",constructor:function(a,b){this.pointSymbol=b&&b.pointSymbol;
this.polylineSymbol=b&&b.polylineSymbol;this.polygonSymbol=b&&b.polygonSymbol;this._outSR=b&&(b.outSpatialReference||b.outSR)||new u({wkid:4326});this._options=d.mixin({},b)},parse:function(){console.error("parse function has not been implemented")},getFeatureLayers:function(){var a=[];return this._fLayers&&(a=a.concat(this._fLayers)),a},onRefresh:function(){},onOpacityChange:function(){},refresh:function(){this.loaded&&this._map&&!this._io&&this.visible&&this._createLayer()},_createLayer:function(a){var b=
this;this._fireUpdateStart();a=this.parse(a);a.addCallback(function(a){b._io=null;b._initLayer(a)});a.addErrback(function(a){b._io=null;a=d.mixin(Error(),a);a.message="Unable to load resource: "+b.url+" "+(a.message||"");b._fireUpdateEnd(a);b.onError(a)})},_initLayer:function(a){this.loaded&&this._removeInternalLayers();this.name=a.name;this.description=a.description;this.snippet=a.snippet;this.defaultVisibility=this.visible=void 0!==a.visibility?!!a.visibility:!0;this.featureInfos=a.featureInfos;
this.fullExtent=this.initialExtent=new v(a.lookAtExtent);this.copyright=a.author||a.copyright;var b;a=d.getObject("featureCollection.layers",!1,a);if(a&&0<a.length&&(this._fLayers=[],f.forEach(a,function(a,e){var g,n=d.getObject("featureSet.features",!1,a);n&&0<n.length&&(b=d.mixin({outFields:["*"],infoTemplate:a.popupInfo?new y(a.popupInfo):null,editable:!1},this._options),b.id&&(b.id=b.id+"_"+e),a.layerDefinition.capabilities="Query,Data",g=new x(a,b),g.geometryType&&(this["_"+g.geometryType]=g),
this._fLayers.push(g))},this),0===this._fLayers.length&&delete this._fLayers),this.items=[],this._esriGeometryPoint&&(this.items=this.items.concat(this._esriGeometryPoint.graphics),this.pointSymbol))a=new k(this.pointSymbol),this._esriGeometryPoint.setRenderer(a);this._esriGeometryPolyline&&(this.items=this.items.concat(this._esriGeometryPolyline.graphics),this.polylineSymbol)&&(a=new k(this.polylineSymbol),this._esriGeometryPolyline.setRenderer(a));this._esriGeometryPolygon&&(this.items=this.items.concat(this._esriGeometryPolygon.graphics),
this.polygonSymbol)&&(a=new k(this.polygonSymbol),this._esriGeometryPolygon.setRenderer(a));this._fireUpdateEnd();this.loaded&&(this._addInternalLayers(),this.onRefresh())},_addInternalLayers:function(){var a=this._map;this._fireUpdateStart();var b,c=a.spatialReference,e=this._outSR;if(c.wkid)b=c._isWebMercator()&&e._isWebMercator()||c.wkid===e.wkid;else{if(!c.wkt)return void console.log("_setMap - map has invalid spatial reference");b=c.wkt===e.wkt}if(!b)if(c._isWebMercator()&&4326===e.wkid)this._converter=
m.geographicToWebMercator;else{if(!e._isWebMercator()||4326!==c.wkid)return void console.log("_setMap - unsupported workflow. Spatial reference of the map and layer do not match, and the conversion cannot be done on the client.");this._converter=m.webMercatorToGeographic}(b=this._fLayers)&&0<b.length&&f.forEach(b,function(b){if(this._converter){var c,e,d=b.graphics,f=d?d.length:0;for(c=0;f>c;c++)(e=d[c].geometry)&&d[c].setGeometry(this._converter(e))}a.addLayer(b)},this);this.setVisibility(this.visible);
this._fireUpdateEnd()},_removeInternalLayers:function(){var a=this._map;a&&f.forEach(this.getFeatureLayers(),a.removeLayer,a)},setScaleRange:function(a,b){this.inherited(arguments);f.forEach(this.getFeatureLayers(),function(c){c.setScaleRange(a,b)});this._options.minScale=this.minScale;this._options.maxScale=this.maxScale},setOpacity:function(a){this.opacity!=a&&(f.forEach(this.getFeatureLayers(),function(b){b.setOpacity(a)}),this._options.opacity=a,this.opacity=a,this.onOpacityChange(a))},onVisibilityChange:function(a){this._fireUpdateStart();
f.forEach(this.getFeatureLayers(),function(b){b.setVisibility(a)});this._fireUpdateEnd()},_setMap:function(a,b){this.inherited(arguments);this._map=a;var c=this._div=l.create("div",null,b);return q.set(c,"position","absolute"),this._addInternalLayers(),this.evaluateSuspension(),c},_unsetMap:function(a,b){this._io&&this._io.cancel();p.disconnect(this._extChgHandle);delete this._extChgHandle;this._removeInternalLayers();var c=this._div;c&&(b.removeChild(c),l.destroy(c));this._div=null;this.inherited(arguments)}});
return r("extend-esri")&&d.setObject("layers._ServiceGeneratedFeatureCollection",h,t),h});