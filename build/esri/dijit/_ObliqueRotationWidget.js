//>>built
require({cache:{"url:esri/dijit/templates/_ObliqueRotationWidget.html":'\x3cdiv\x3e\n  \x3cdiv data-dojo-attach-point\x3d"gaugeNode" class\x3d"esriObliqueRotationWidgetGauge"\x3e\n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/_ObliqueRotationWidget","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../lang ./_EventedWidget dijit/_Widget dijit/_TemplatedMixin dojo/text!./templates/_ObliqueRotationWidget.html dojo/_base/html dojo/on dojox/dgauges/CircularGauge ./ObliqueViewer/OVCircularScale dojox/dgauges/CircularRangeIndicator ./ObliqueViewer/OVCircularValueIndicator dojox/dgauges/LinearScaler dojo/dom-geometry dojo/dom-construct dojo/i18n!../nls/jsapi dojo/dom-style dojo/query dojo/dom-attr".split(" "),function(f,
g,h,p,q,e,r,t,u,v,C,w,x,y,k,l,z,A,m,B,n){f=f([r,t,u],{baseClass:"esriObliqueRotationWidget",declaredClass:"esri.dijit._ObliqueRotationWidget",templateString:v,azimuthAngle:0,azimuthField:"SensorAzimuth",isNadir:!1,_rangeIndicatorWidth:8,constructor:function(a){g.mixin(this,a);this._i18n=B;this.isNadir=!e.isDefined(this.azimuthAngle)},postCreate:function(){this.inherited(arguments);this._coords=this.domNode.getBoundingClientRect();this._computeCircleRadius();this._getCenter();this.refresh()},startup:function(){this.inherited(arguments);
this._setupGauge();this._addTooltips()},_getFontWeight:function(a){return 120<=a?"bold":"normal"},_getFontSize:function(a){return 120<=a?10:7},_getLabelGap:function(a){return 120<=a?5:2},resize:function(a){a=a||Math.min(this.domNode.getBoundingClientRect().height,this.domNode.getBoundingClientRect().width);var b=this._getLabelGap(a),c=(this._getFontSize(a),this._getFontWeight(a));this._gauge.resize(a,a);this._gauge.set("font",{family:"Helvetica",style:"normal",size:"10pt",color:"black",weight:c});
this._scale.set("labelGap",b);this._addTooltips()},_setupGauge:function(){var a=this,b=Math.min(this._coords.height,this._coords.width);this._gauge=new x({value:0,font:{family:"Helvetica",style:"normal",size:this._getFontSize(b)+"pt",color:"black",weight:this._getFontWeight(b)},style:"margin: -2px;"},this.gaugeNode);this._addGaugeBackground();this._addGaugeScale();this._addGaugeIndicators();this._gauge.startup();this.own(w(this._gauge.domNode,"mouseup",function(b){a._getCenter();var d=b.pageX-a._centerLocnInPage[0];
b=b.pageY-a._centerLocnInPage[1];10>=Math.abs(d)&&10>=Math.abs(b)?(a._scale.azimuthAngle=null,a._switchToNadir()):(a.azimuthAngle=a._convertAngleToAzimuthNotation(a._calculateAngleFromXY(d,b)),a._switchToOblique())}));this.own(this._gauge.on("endEditing",g.hitch(this,function(b){a.isNadir||(this.snap&&this._snap(),a.azimuthAngle=this._convertAngleToAzimuthNotation(b.indicator.value),a.emit("azimuth-change",{azimuth:a.azimuthAngle}))})));this.on("azimuth-change",function(){a.gaugeNode&&(a.isNadir?
(a.rotateAngle=0,a._scale.azimuthAngle=null,n.set(a.gaugeNode,"transform","none")):(a.rotateAngle=a.rotateAngle||0,a.rotateAngle=Math.abs(a.rotateAngle+a.azimuthAngle)>Math.abs(a.rotateAngle-(360-a.azimuthAngle))?360-a.azimuthAngle:0-a.azimuthAngle,n.set(a.gaugeNode,"transform","rotate("+a.rotateAngle+"deg)"),a._scale.azimuthAngle=a.azimuthAngle));a._azimuthIndicator.azimuthAngle=a.azimuthAngle;a.textNodes=a.gaugeNode.querySelectorAll("text")})},_addGaugeBackground:function(){var a="M "+this._center.join(",")+
"m "+(0-this._radius)+",0 a "+this._radius+","+this._radius+" 0 1,0 "+2*this._radius+",0 a "+this._radius+","+this._radius+" 0 1,0 "+(0-2*this._radius)+",0";this._gauge.addElement("background",function(b){b.createPath({path:a}).setFill("rgba(255,255,255,0.5)").setStroke("rgba(89, 106, 114, 1)")});this._addNadirDataIndicator()},_addNadirDataIndicator:function(){var a="M "+this._center.join(",")+"m -7,0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0";this._gauge.addElement("nadirDataIndicator",function(b){b.createPath({path:a}).setFill("rgba(54, 104, 178, 0.5)").setStroke("rgba(0,0,0, 1)")})},
_addGaugeScale:function(){var a=Math.min(this._coords.width,this._coords.height);this._scale=new y({originX:this._center[0],originY:this._center[1],radius:this._radius,startAngle:0,endAngle:359.999,orientation:"clockwise",scaler:new z({minimum:0,maximum:360,majorTickInterval:90,minorTickInterval:45}),tickShapeFunc:function(a,c,d){return d.isMinor?void 0:a.createLine({x1:0,y1:0,x2:d.isMinor?15:20,y2:0}).setStroke({color:"black",width:1})},labelGap:this._getLabelGap(a),tickLabelFunc:function(a){var c=
["E","S","W","N"];return a.isMinor?" ":0===a.value%90?c[a.value/90]:a.value}});this._gauge.addElement("scale",this._scale)},_addGaugeIndicators:function(){var a=new k({value:359.9999,radius:this._radius-8,startThickness:6,endThickness:6,fill:"rgba(0,0,0,0.9)"});this._scale.addIndicator("indicatorBg",a);this.isNadir?(this._nadirIndicator=this._createNadirIndicator(),this._scale.addIndicator("nadir_indicator",this._nadirIndicator)):(this._azimuthIndicator=this._createObliqueIndicator(),this._scale.addIndicator("azimuth_indicator",
this._azimuthIndicator))},_convertAngleToAzimuthNotation:function(a){return e.isDefined(a)?(a+90)%360:void 0},_convertAngleToGaugeNotation:function(a){return e.isDefined(a)?(a+270)%360:void 0},_computeCircleRadius:function(){var a;return a=Math.min(this._coords.width/2,this._coords.height/2),a=Math.floor(a-2),this._radius=a,a},showAvailableData:function(a){var b=this;if(a=a||this.features){h.forEach(this._availableDataIndicators,function(a){b._scale.removeIndicator(a)});this._availableDataIndicators=
[];this.features=a;for(var c,d=0,d=0;d<a.length;d++)c=new k({start:this._convertAngleToGaugeNotation(a[d].attributes[this.azimuthField]-5),value:this._convertAngleToGaugeNotation(a[d].attributes[this.azimuthField]+5),radius:this._radius,startThickness:7,endThickness:7,fill:"#3668B2",stroke:"#3668B2"}),this._scale.addIndicator("indicator_"+d,c),this._availableDataIndicators.push("indicator_"+d)}},refresh:function(a){g.mixin(this,a);this.showAvailableData()},_getCenter:function(){var a,b=[],c=[];return this._coords=
this.gaugeNode.getBoundingClientRect(),b.push(Math.ceil(this._coords.width/2)),b.push(Math.ceil(this._coords.height/2)),a=A.position(this.gaugeNode),c.push(a.x+b[0]),c.push(a.y+b[1]),this._centerLocnInPage=c,this._center=b,b},_snap:function(){if(this._azimuthIndicator&&this.features&&this.features.length){var a,b,c=this._convertAngleToAzimuthNotation(this._azimuthIndicator.value),d=1E3;h.forEach(this.features,function(e){b=Math.min(Math.abs(e.attributes[this.azimuthField]-c),Math.abs(e.attributes[this.azimuthField]-
c-360));d>=b&&(a=e.attributes[this.azimuthField],d=b)},this);this.azimuthAngle=a;this._azimuthIndicator.set("value",this._convertAngleToGaugeNotation(this.azimuthAngle))}},_switchToNadir:function(){this.isNadir||(this._scale.azimuthAngle=null,this._nadirIndicator=this._createNadirIndicator(),this._scale.removeIndicator("azimuth_indicator"),this._scale.addIndicator("nadir_indicator",this._nadirIndicator),this.isNadir=!0,this.emit("azimuth-change",{azimuth:null}))},_switchToOblique:function(){this.isNadir&&
(this._azimuthIndicator=this._createObliqueIndicator(),this._scale.removeIndicator("nadir_indicator"),this._scale.addIndicator("azimuth_indicator",this._azimuthIndicator),this._snap(),this.isNadir=!1,this.emit("azimuth-change",{azimuth:this.azimuthAngle}))},_createNadirIndicator:function(){return new l({interactionArea:"gauge",title:"Nadir",interactionMode:"none",indicatorShapeFunc:function(a){return a.createPolyline([-7,0,7,0,0,0,0,7,0,-7]).setStroke({color:"#000000",width:1})},value:0})},_createObliqueIndicator:function(){var a=
this;return new l({interactionArea:"gauge",title:"Change Azimuth",indicatorShapeFunc:function(b){return b.createPolyline([0,-1,a._radius-1,-10,a._radius-1,10,0,1,0,-1]).setFill("rgba(50, 100, 200, 0.5)").setStroke("rgba(50, 100, 200, 0.5)")},value:this._convertAngleToGaugeNotation(this.azimuthAngle),azimuthAngle:this._convertAngleToGaugeNotation(this.azimuthAngle)})},_calculateAngleFromXY:function(a,b){var c;return c=Math.atan2(b,a),c/Math.PI*180+(0<c?0:360)},_addTooltips:function(){var a,b=this,
c=this.domNode.getBoundingClientRect(),c=Math.min(c.width/2,c.height/2);h.forEach(this._tooltipNodes,function(a){this.gaugeNode.removeChild(a.node)},this);this._tooltipNodes=[{top:0,left:c-5,direction:"north",angle:0},{top:c-5,left:2*(c-5),direction:"east",angle:90},{top:2*(c-5),left:c,direction:"south",angle:180},{top:c-5,left:0,direction:"west",angle:270},{top:c-5,left:c-5,direction:"nadir",angle:null}];h.forEach(this._tooltipNodes,function(c){a=m.create("div");a.style.top=c.top+"px";a.style.left=
c.left+"px";a.style.position="absolute";a.style.height="10px";a.style.width="10px";a.style.cursor="pointer";a.style.zIndex=999;a.id=this.domNode.id+"_tooltip_"+c.direction;m.place(a,this.gaugeNode);a.title=this._i18n.widgets.obliqueViewer[c.direction+"Tooltip"];a.onclick=function(){e.isDefined(c.angle)&&(b.azimuthAngle=c.angle,b._azimuthIndicator.set("value",b._convertAngleToGaugeNotation(c.angle)),b.snap&&b._snap(),b.emit("azimuth-change",{azimuth:b.azimuthAngle}))};c.node=a},this)},setAzimuth:function(a){e.isDefined(a)&&
(this.azimuthAngle=a,this.isNadir?this._switchToOblique():this._azimuthIndicator.set("value",this._convertAngleToGaugeNotation(this.azimuthAngle)))}});return p("extend-esri")&&g.setObject("dijit._ObliqueRotationWidget",f,q),f});