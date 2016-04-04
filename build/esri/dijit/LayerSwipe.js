//>>built
require({cache:{"url:esri/dijit/templates/LayerSwipe.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv title\x3d"${_i18n.widgets.layerSwipe.title}" data-dojo-attach-point\x3d"_moveableNode"\x3e\n        \x3cdiv class\x3d"${_css.handleContainer}"\x3e\n            \x3cdiv class\x3d"${_css.handle}"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/LayerSwipe","dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/_TemplatedMixin dojo/on dojo/text!./templates/LayerSwipe.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dnd/move dojo/dnd/Mover dojo/sniff dojo/dom-geometry ../geometry/Point dojo/Deferred dojo/promise/all".split(" "),function(n,q,e,u,v,w,x,k,y,z,p,m,A,B,r,l,C,t,D){var E=q([B],{onFirstMove:function(a){var b,c;c=this.node.style;var d=this.host;switch(c.position){case "relative":case "absolute":b=
Math.round(parseFloat(c.left))||0;c=Math.round(parseFloat(c.top))||0;break;default:c.position="absolute",c=l.getMarginBox(this.node),b=c.l,c=c.t}this.marginBox.l=b-this.marginBox.l;this.marginBox.t=c-this.marginBox.t;d&&d.onFirstMove&&d.onFirstMove(this,a);this.events.shift().remove()}});n=q("esri.dijit.LayerSwipe",[w,x,n],{templateString:y,options:{theme:"LayerSwipe",layers:[],enabled:!0,type:"vertical",invertPlacement:!1,clip:9},constructor:function(a,b){var c=e.mixin({},this.options,a);this.domNode=
b;this._i18n=z;this.set("map",c.map);this.set("layers",c.layers);this.set("top",c.top);this.set("left",c.left);this.set("theme",c.theme);this.set("enabled",c.enabled);this.set("type",c.type);this.set("clip",c.clip);this.set("invertPlacement",c.invertPlacement);this.watch("theme",this._updateThemeWatch);this.watch("enabled",this._enabled);this.watch("type",this._type);this.watch("invertPlacement",this._invertPlacement);this._css={handleContainer:"handleContainer",handle:"handle"};this._listeners=[]},
startup:function(){this.inherited(arguments);this.map||(this.destroy(),console.log("LayerSwipe::map required"));this.set("layers",this.layers);this.layers.length||(this.destroy(),console.log("LayerSwipe::layer required"));this._allLoaded().then(e.hitch(this,function(){this._init()}),function(a){console.log("LayerSwipe::"+a.message)})},destroy:function(){this._removeEvents();this._unclipLayers();this.inherited(arguments)},swipe:function(){this._swipe()},enable:function(){this.set("enabled",!0)},disable:function(){this.set("enabled",
!1)},_allLoaded:function(){for(var a=[],b=0;b<this.layers.length;b++){"string"==typeof this.layers[b]&&(this.layers[b]=this.map.getLayer(this.layers[b]),this.layers[b]||console.log("LayerSwipe::Could not get layer by ID"));var c=new t;this.layers[b].loaded?c.resolve("layer loaded"):this._layerLoadedPromise(b,c);a.push(c.promise)}var d=new t;return this.map.loaded?d.resolve("map loaded"):k.once(this.map,"load",e.hitch(this,function(){d.resolve("map loaded")})),a.push(d.promise),D(a)},_layerLoadedPromise:function(a,
b){k.once(this.layers[a],"load",function(){b.resolve("layer loaded")})},_mb:function(){var a=l.getMarginBox(this.map.root);return{t:0,l:0,w:a.l+a.w,h:a.h+a.t}},_setInitialPosition:function(){var a,b,c,d,g,f,h;(a=0,b=0,d=l.getMarginBox(this._moveableNode),c=this.get("type"),g=this.get("top"),f=this.get("left"),h=this.get("invertPlacement"),"scope"===c)?(b="undefined"!=typeof g?g:this.map.height/2-d.h/2,a="undefined"!=typeof f?f:this.map.width/2-d.w/2):"horizontal"===c?(b=this.map.height/4-d.h/2,b=
"undefined"!=typeof g?g:h?this.map.height-b:b):(a=this.map.width/4-d.w/2,a="undefined"!=typeof f?f:h?this.map.width-a:a);m.set(this._moveableNode,{top:b+"px",left:a+"px"})},_setSwipeType:function(){var a=this.get("moveable"),b=this.get("type");b&&(a&&a.destroy(),p.add(this._moveableNode,b),a=new A.parentConstrainedMoveable(this._moveableNode,{area:"content",within:!0,handle:this._moveableNode,constraints:e.hitch(this,this._mb),mover:E}),this.set("moveable",a),this._setInitialPosition())},_init:function(){this._setSwipeType();
this._setupEvents();this._enabled();this.set("loaded",!0);this.emit("load",{});this.swipe()},_removeEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a]&&this._listeners[a].remove();this._listeners=[]},_repositionMover:function(){var a=l.getMarginBox(this._moveableNode);a&&(a.t>this.map.height||0>a.t||a.l>this.map.width||0>a.l)&&this._setInitialPosition()},_setupEvents:function(){this._removeEvents();this._mapResize=k.pausable(this.map,
"resize",e.hitch(this,function(){this._repositionMover()}));this._listeners.push(this._mapResize);this._swipeMove=k.pausable(this.moveable,"Move",e.hitch(this,function(){this.swipe()}));this._listeners.push(this._swipeMove);this._swipePanEnd=k.pausable(this.map,"pan-end",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePanEnd);this._mapUpdateStart=k.pausable(this.map,"update-start",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateStart);this._mapUpdateEnd=
k.pausable(this.map,"update-end",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateEnd);this._swipePan=k.pausable(this.map,"pan",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePan);this._toolClick=k.pausable(this._moveableNode,"click",e.hitch(this,function(a){if("scope"===this.get("type")){a=this._clickPosition(a);try{this.map.onClick(a,"other")}catch(b){console.log("LayerSwipe::scope click error")}this._clickCoords=null}}));this._listeners.push(this._toolClick);
this._toolDblClick=k.pausable(this._moveableNode,"dblclick",e.hitch(this,function(a){if("scope"===this.get("type")){a=this._clickPosition(a);try{this.map.navigationManager.mouseEvents.onDblClick(a,"other")}catch(b){console.log("LayerSwipe::scope dblclick error")}this._clickCoords=null}}));this._listeners.push(this._toolDblClick);this._evtCoords=k.pausable(this.moveable,"MouseDown",e.hitch(this,function(a){"scope"===this.get("type")&&(this._clickCoords={x:a.x,y:a.y})}));this._listeners.push(this._evtCoords)},
_clickPosition:function(a){if(this._clickCoords&&this._clickCoords.x===a.x&&this._clickCoords.y===a.y){var b=l.position(this.map.root,!0),c=a.pageX-b.x,b=a.pageY-b.y;a.x=c;a.y=b;a.screenPoint={x:c,y:b};a.mapPoint=this.map.toMap(new C(c,b,this.map.spatialReference))}return a},_positionValues:function(a){var b,c,d,g,f,h,e;a={layerNode:a._div,layerGraphics:a.graphics,swipeType:this.get("type"),l:0,r:0,t:0,b:0};return g=this.get("clip"),e=this.get("invertPlacement"),c=l.getMarginBox(this._moveableNode),
("vertical"===a.swipeType||"horizontal"===a.swipeType)&&(a.layerNode&&(b=l.getMarginBox(a.layerNode),f=Math.abs(b.t),h=Math.abs(b.l)),d=l.getMarginBox(this.map.root)),"vertical"===a.swipeType?(e?b&&0<b.l?(a.l=c.l-h,a.r=this.map.width-h):b&&0>b.l?(a.l=c.l+h,a.r=this.map.width+h):(a.l=c.l,a.r=this.map.width):b&&0<b.l?(a.l=0-h,a.r=c.l-h):b&&0>b.l?(a.l=0+h,a.r=c.l+h):(a.l=0,a.r=c.l),b&&0<b.t?(a.t=0-f,a.b=d.h-f):b&&0>b.t?(a.t=0+f,a.b=d.h+f):(a.t=0,a.b=d.h)):"horizontal"===a.swipeType?(e?b&&0<b.t?(a.t=
c.t-f,a.b=this.map.height-f):b&&0>b.t?(a.t=c.t+f,a.b=this.map.height+f):(a.t=c.t,a.b=this.map.height):b&&0<b.t?(a.t=0-f,a.b=c.t-f):b&&0>b.t?(a.t=0+f,a.b=c.t+f):(a.t=0,a.b=c.t),b&&0<b.l?(a.l=0-h,a.r=d.w-h):b&&0>b.l?(a.l=0+h,a.r=d.w+h):(a.l=0,a.r=d.w)):"scope"===a.swipeType&&(a.layerGraphics?(a.l=c.l,a.r=c.w,a.t=c.t,a.b=c.h,"undefined"!=typeof g&&(a.l+=g,a.r+=-(2*g),a.t+=g,a.b+=-(2*g))):(a.l=c.l,a.r=a.l+c.w,a.t=c.t,a.b=a.t+c.h,"undefined"!=typeof g&&(a.l+=g,a.r+=-g,a.t+=g,a.b+=-g))),a},_clipLayer:function(a){if(a.layerNode)if(a.layerGraphics){var b=
a.layerNode.getTransform();b&&(b.hasOwnProperty("dx")&&(a.l+=-b.dx),b.hasOwnProperty("dy")&&(a.t+=-b.dy));a.layerNode.setClip({x:a.l,y:a.t,width:a.r,height:a.b})}else{var c=a.layerNode.style;a&&c&&a.hasOwnProperty("r")&&a.hasOwnProperty("l")&&a.hasOwnProperty("t")&&a.hasOwnProperty("b")&&("css-transforms"===this.map.navigationMode?c&&(c=this._getTransformValue(c))&&(b=this._parseTransformValue(c),a.l-=b.x,a.r-=b.x,a.t-=b.y,a.b-=b.y):c&&"scope"===a.swipeType&&(b=this._parseScopeStyle(c),a.l-=b.x,a.r-=
b.x,a.t-=b.y,a.b-=b.y),b=r("ie"),m.set(a.layerNode,"clip",b&&8>b?"rect("+a.t+"px "+a.r+"px "+a.b+"px "+a.l+"px)":"rect("+a.t+"px, "+a.r+"px, "+a.b+"px, "+a.l+"px)"))}else console.log("LayerSwipe::Invalid layer type")},_swipe:function(){if(this.get("loaded")&&this.get("enabled")){var a={layers:[]};if(this.layers&&this.layers.length)for(var b=0;b<this.layers.length;b++){var c=this._positionValues(this.layers[b]);this._clipLayer(c);a.layers.push({layer:this.layers[b],left:c.l,right:c.r,top:c.t,bottom:c.b})}this.emit("swipe",
a)}},_getTransformValue:function(a){var b,c;if(a){c=["transform","-webkit-transform","-ms-transform","-moz-transform","-o-transform"];for(var d=0;d<c.length&&!(b=a[c[d]]);d++){try{b=a.getPropertyValue(c[d])}catch(e){}if(b)break}}return b},_parseTransformValue:function(a){var b={x:0,y:0};-1!==a.toLowerCase().indexOf("translate3d")?a=a.replace("translate3d(","").replace(")","").replace(/px/gi,"").replace(/\s/i,"").split(","):-1!==a.toLowerCase().indexOf("translate")&&(a=a.replace("translate(","").replace(")",
"").replace(/px/gi,"").replace(/\s/i,"").split(","));try{b.x=parseFloat(a[0]),b.y=parseFloat(a[1])}catch(c){console.log("LayerSwipe::Error parsing transform number")}return b},_parseScopeStyle:function(a){var b={x:0,y:0};try{b.x=parseFloat(a.left.replace(/px/gi,"").replace(/\s/i,"")),b.y=parseFloat(a.top.replace(/px/gi,"").replace(/\s/i,""))}catch(c){console.log("LayerSwipe::Error parsing div style float")}return b},_updateThemeWatch:function(a,b,c){p.remove(this.domNode,b);p.add(this.domNode,c)},
_type:function(a,b){b&&p.remove(this._moveableNode,b);this._setSwipeType();this._setupEvents();this.swipe()},_pauseEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].pause()},_resumeEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].resume()},_unclipLayers:function(){if(this.get("loaded")&&this.layers&&this.layers.length)for(var a=0;a<this.layers.length;a++){var b=
this.layers[a]._div,c=this.layers[a].graphics;b&&(c?b.setClip(null):(c=r("ie"),m.set(b,"clip",c&&8>c?"rect(auto auto auto auto)":"auto")))}},_invertPlacement:function(){this.swipe()},_enabled:function(){this.get("enabled")?(m.set(this.domNode,"display","block"),this._resumeEvents(),this.swipe()):(this._pauseEvents(),m.set(this.domNode,"display","none"),this._unclipLayers())}});return u("extend-esri")&&e.setObject("dijit.LayerSwipe",n,v),n});