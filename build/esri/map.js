//>>built
define("esri/map","require dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/aspect dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dijit/registry ./kernel ./config ./sniff ./lang ./_coremap ./MapNavigationManager dojo/i18n!./nls/jsapi".split(" "),function(x,v,L,A,n,r,B,C,M,D,E,h,F,N,O,P,t,G,f,p,Q,R,S){var y={up:"panUp",right:"panRight",down:"panDown",left:"panLeft"},H={upperRight:"panUpperRight",
lowerRight:"panLowerRight",lowerLeft:"panLowerLeft",upperLeft:"panUpperLeft"},g=A.connect,k=A.disconnect,m=F.create,q=O.set,I=n.hitch,u=N.getMarginBox,J=v.deprecated,z=n.mixin,K=0;v=L(Q,{declaredClass:"esri.Map",constructor:function(a,c){z(this,{_slider:null,_navDiv:null,_mapParams:z({attributionWidth:.45,slider:!0,nav:!1,logo:!0,sliderStyle:"small",sliderPosition:"top-left",sliderOrientation:"vertical",autoResize:!0},c||{})});z(this,{isDoubleClickZoom:!1,isShiftDoubleClickZoom:!1,isClickRecenter:!1,
isScrollWheelZoom:!1,isPan:!1,isRubberBandZoom:!1,isKeyboardNavigation:!1,isPanArrows:!1,isZoomSlider:!1});n.isFunction(t._css)&&(t._css=t._css(this._mapParams.force3DTransforms),this.force3DTransforms=this._mapParams.force3DTransforms);var b=f("esri-transforms")&&f("esri-transitions");if(this.navigationMode=this._mapParams.navigationMode||b&&"css-transforms"||"classic","css-transforms"!==this.navigationMode||b||(this.navigationMode="classic"),this.fadeOnZoom=p.isDefined(this._mapParams.fadeOnZoom)?
this._mapParams.fadeOnZoom:"css-transforms"===this.navigationMode,"css-transforms"!==this.navigationMode&&(this.fadeOnZoom=!1),this.setMapCursor("default"),this.smartNavigation=c&&c.smartNavigation,!(p.isDefined(this.smartNavigation)||!f("mac")||f("esri-touch")||f("esri-pointer")||3.5>=f("ff"))){var d=navigator.userAgent.match(/Mac\s+OS\s+X\s+([\d]+)(\.|\_)([\d]+)\D/i);d&&p.isDefined(d[1])&&p.isDefined(d[3])&&(b=parseInt(d[1],10),d=parseInt(d[3],10),this.smartNavigation=10<b||10===b&&6<=d)}this.showAttribution=
p.isDefined(this._mapParams.showAttribution)?this._mapParams.showAttribution:!0;this._onLoadHandler_connect=g(this,"onLoad",this,"_onLoadInitNavsHandler");var e=m("div",{"class":"esriControlsBR"+(this._mapParams.nav?" withPanArrows":"")},this.root);if(this.showAttribution)if(b=n.getObject("esri.dijit.Attribution",!1))this._initAttribution(b,e);else{var h=K++,l=this;this._rids&&this._rids.push(h);x(["./dijit/Attribution"],function(a){var b=l._rids?r.indexOf(l._rids,h):-1;-1!==b&&(l._rids.splice(b,
1),l._initAttribution(a,e))})}this._mapParams.logo&&(b={},6===f("ie")&&(b.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled\x3d'true', sizingMethod\x3d'crop', src\x3d'"+x.toUrl("./images/map/logo-med.png")+"')"),this._ogol=m("div",{style:b},e),this._setLogoSize(),this._onMapResizeLogo_connect=g(this,"onResize",this,"_setLogoSize"),f("esri-touch")||(this._ogol_connect=g(this._ogol,"onclick",this,"_openLogoLink")));if(this.navigationManager=new R(this),c&&c.basemap&&(this._onLoadFix=
!0,this.setBasemap(c.basemap),this._onLoadFix=!1),this.autoResize=this._mapParams.autoResize,this.autoResize)b=this._getEnclosingResizableWidget(this.container)||window,d=this.resize,this._rszSignal=C.pausable(b,"resize",d),this._oriSignal=C.pausable(window,"orientationchange",d),M.after(b,"resize",d,!0),this._startResizeTimer()},_startResizeTimer:function(){clearTimeout(this._persistentTimer);this._persistentTimer=setTimeout(this._timedResize,2*this.resizeDelay)},_getEnclosingResizableWidget:function(a){var c=
P.getEnclosingWidget(a);return c?c.resize?c:this._getEnclosingResizableWidget(a.parentNode):c},_setLogoSize:function(){this._ogol&&(25E4>this.root.clientWidth*this.root.clientHeight?(h.remove(this._ogol,"logo-med"),h.add(this._ogol,"logo-sm")):(h.remove(this._ogol,"logo-sm"),h.add(this._ogol,"logo-med")))},_initAttribution:function(a,c){var b=m("span",{"class":"esriAttribution"},c,"first");q(b,"maxWidth",Math.floor(this.width*this._mapParams.attributionWidth)+"px");this._connects.push(g(b,"onclick",
function(){h.contains(this,"esriAttributionOpen")?h.remove(this,"esriAttributionOpen"):this.scrollWidth>this.clientWidth&&h.add(this,"esriAttributionOpen")}));this.attribution=new a({map:this},b)},_cleanUp:function(){this.disableMapNavigation();this.navigationManager.destroy();var a=this._slider;a&&a.destroy&&!a._destroyed&&a.destroy();var a=this._navDiv,c=this.attribution;a&&F.destroy(a);c&&c.destroy();this._connects.push(this._slider_connect,this._ogol_connect,this._rszSignal,this._oriSignal);r.forEach(this._connects,
k);clearInterval(this._persistentTimer);this.attribution=this.navigationManager=this._rids=this._connects=this._slider_connect=this._ogol_connect=this._rszSignal=this._oriSignal=this._persistentTimer=null;this.inherited("_cleanUp",arguments)},_isPanningOrZooming:function(){return this.__panning||this.__zooming},_canZoom:function(a){var c=this.getLevel();return!this.__tileInfo||!(c===this.getMinZoom()&&0>a||c===this.getMaxZoom()&&0<a)},_onLoadInitNavsHandler:function(){if(this.enableMapNavigation(),
this._createNav(),"small"!==this._mapParams.sliderStyle&&this._createSlider){if(this._mapParams.slider){var a=-1!==this._getSliderClass(!0).indexOf("Horizontal"),a=[a?"dijit.form.HorizontalSlider":"dijit.form.VerticalSlider",a?"dijit.form.HorizontalRule":"dijit.form.VerticalRule",a?"dijit.form.HorizontalRuleLabels":"dijit.form.VerticalRuleLabels"];if(r.some(a,function(a){return!n.getObject(a,!1)})){var a=r.map(a,function(a){return a.replace(/\./g,"/")}),c=K++,b=this;this._rids&&this._rids.push(c);
x(a,function(){var a=b._rids?r.indexOf(b._rids,c):-1;-1!==a&&(b._rids.splice(a,1),b._createSlider.apply(b,arguments))})}else a=r.map(a,function(a){return n.getObject(a,!1)}),this._createSlider.apply(this,a)}}else this._createSimpleSlider();k(this._onLoadHandler_connect)},_createNav:function(){if(this._mapParams.nav){var a,c,b,d=h.add,e=this.id;this._navDiv=m("div",{id:e+"_navdiv"},this.root);d(this._navDiv,"navDiv");var f,l=this.width/2,k=this.height/2;for(b in y)c=y[b],a=m("div",{id:e+"_pan_"+b},
this._navDiv),d(a,"fixedPan "+c),"up"===b||"down"===b?(f=parseInt(u(a).w,10)/2,q(a,{left:l-f+"px",zIndex:30})):(f=parseInt(u(a).h,10)/2,q(a,{top:k-f+"px",zIndex:30})),this._connects.push(g(a,"onclick",I(this,this[c])));this._onMapResizeNavHandler_connect=g(this,"onResize",this,"_onMapResizeNavHandler");for(b in H)c=H[b],a=m("div",{id:e+"_pan_"+b,style:{zIndex:30}},this._navDiv),d(a,"fixedPan "+c),this._connects.push(g(a,"onclick",I(this,this[c])));this.isPanArrows=!0}},_onMapResizeNavHandler:function(a,
c,b){var d,e;a=this.id;c/=2;var f=b/2,g=D.byId;for(d in y)b=g(a+"_pan_"+d),"up"===d||"down"===d?(e=parseInt(u(b).w,10)/2,q(b,"left",c-e+"px")):(e=parseInt(u(b).h,10)/2,q(b,"top",f-e+"px"))},_createSimpleSlider:function(){if(this._mapParams.slider){var a=this._slider=m("div",{id:this.id+"_zoom_slider","class":this._getSliderClass(),style:{zIndex:30}}),c=f("esri-touch")&&!f("ff")?"touchstart":f("esri-pointer")?navigator.msPointerEnabled?"MSPointerDown":"pointerdown":"onclick",b=m("div",{"class":"esriSimpleSliderIncrementButton"},
a),d=m("div",{"class":"esriSimpleSliderDecrementButton"},a);this._addZoomButtonTooltips(b,d);this._incButton=b;this._decButton=d;this._simpleSliderZoomHandler(null,null,null,this.getLevel());b.innerHTML="\x3cspan\x3e+\x3c/span\x3e";d.innerHTML="\x3cspan\x3e\x26ndash;\x3c/span\x3e";8>f("ie")&&h.add(d,"dj_ie67Fix");this._connects.push(g(b,c,this,this._simpleSliderChangeHandler));this._connects.push(g(d,c,this,this._simpleSliderChangeHandler));"touchstart"==c&&(this._connects.push(g(b,"onclick",this,
this._simpleSliderChangeHandler)),this._connects.push(g(d,"onclick",this,this._simpleSliderChangeHandler)));(-1<this.getMaxZoom()||-1<this.getMinZoom())&&this._connects.push(g(this,"onZoomEnd",this,this._simpleSliderZoomHandler));10>f("ie")&&D.setSelectable(a,!1);this.root.appendChild(a);this.isZoomSlider=!0}},_simpleSliderChangeHandler:function(a){B.stop(a);a=-1!==a.currentTarget.className.indexOf("IncrementButton")?!0:!1;this._extentUtil({numLevels:a?1:-1})},_simpleSliderZoomHandler:function(a,
c,b,d){var e;a=this._incButton;c=this._decButton;-1<d&&d===this.getMaxZoom()?e=a:-1<d&&d===this.getMinZoom()&&(e=c);e?(h.add(e,"esriSimpleSliderDisabledButton"),h.remove(e===a?c:a,"esriSimpleSliderDisabledButton")):(h.remove(a,"esriSimpleSliderDisabledButton"),h.remove(c,"esriSimpleSliderDisabledButton"))},_getSliderClass:function(a){a=a?"Large":"Simple";var c=this._mapParams.sliderOrientation,b=this._mapParams.sliderPosition||"";if(c=c&&"horizontal"===c.toLowerCase()?"esri"+a+"SliderHorizontal":
"esri"+a+"SliderVertical",b)switch(b.toLowerCase()){case "top-left":b="esri"+a+"SliderTL";break;case "top-right":b="esri"+a+"SliderTR";break;case "bottom-left":b="esri"+a+"SliderBL";break;case "bottom-right":b="esri"+a+"SliderBR"}return"esri"+a+"Slider "+c+" "+b},_addZoomButtonTooltips:function(a,c){var b=S.widgets.zoomSlider;E.set(a,"title",b.zoomIn);E.set(c,"title",b.zoomOut)},_createSlider:function(a,c,b){if(this._mapParams.slider){var d,e=m("div",{id:this.id+"_zoom_slider"},this.root);d=G.defaults.map;
var h=this._getSliderClass(!0),l=-1!==h.indexOf("Horizontal"),k=this.getNumLevels();if(0<k){var n,p,w=this._mapParams.sliderLabels,v=!!w,t=!1!==w;if(t){var u=l?"bottomDecoration":"rightDecoration";if(!w)for(w=[],d=0;k>d;d++)w[d]="";r.forEach([{"class":"esriLargeSliderTicks",container:u,count:k,dijitClass:c},{"class":v&&"esriLargeSliderLabels",container:u,count:k,labels:w,dijitClass:b}],function(a){var b=m("div"),d=a.dijitClass;delete a.dijitClass;e.appendChild(b);d===c?n=new d(a,b):p=new d(a,b)})}a=
this._slider=new a({id:e.id,"class":h,minimum:this.getMinZoom(),maximum:this.getMaxZoom(),discreteValues:k,value:this.getLevel(),clickSelect:!0,intermediateChanges:!0,style:"z-index:30;"},e);a.startup();t&&(n.startup(),p.startup());this._slider_connect=g(a,"onChange",this,"_onSliderChangeHandler");this._connects.push(g(this,"onExtentChange",this,"_onExtentChangeSliderHandler"));this._connects.push(g(a._movable,"onFirstMove",this,"_onSliderMoveStartHandler"))}else{a=this._slider=new a({id:e.id,"class":h,
minimum:0,maximum:2,discreteValues:3,value:1,clickSelect:!0,intermediateChanges:d.sliderChangeImmediate,style:"height:50px; z-index:30;"},e);b=a.domNode.firstChild.childNodes;for(d=1;3>=d;d++)q(b[d],"visibility","hidden");a.startup();this._slider_connect=g(a,"onChange",this,"_onDynSliderChangeHandler");this._connects.push(g(this,"onExtentChange",this,"_onExtentChangeDynSliderHandler"))}d=a.incrementButton;b=a.decrementButton;l?this._addZoomButtonTooltips(d,b):this._addZoomButtonTooltips(b,d);d.style.outline=
"none";b.style.outline="none";a.sliderHandle.style.outline="none";a._onKeyPress=function(){};if(l=a._movable){var x=l.onMouseDown;l.onMouseDown=function(a){9>f("ie")&&1!==a.button||x.apply(this,arguments)}}this.isZoomSlider=!0}},_onSliderMoveStartHandler:function(){k(this._slider_connect);k(this._slidermovestop_connect);this._slider_connect=g(this._slider,"onChange",this,"_onSliderChangeDragHandler");this._slidermovestop_connect=g(this._slider._movable,"onMoveStop",this,"_onSliderMoveEndHandler")},
_onSliderChangeDragHandler:function(a){this._extentUtil({targetLevel:a})},_onSliderMoveEndHandler:function(){k(this._slider_connect);k(this._slidermovestop_connect)},_onSliderChangeHandler:function(a){this.setLevel(a)},_updateSliderValue:function(a,c){k(this._slider_connect);var b=this._slider,d=b._onChangeActive;b._onChangeActive=!1;b.set("value",a);b._onChangeActive=d;this._slider_connect=g(b,"onChange",this,c)},_onExtentChangeSliderHandler:function(a,c,b,d){k(this._slidermovestop_connect);this._updateSliderValue(d.level,
"_onSliderChangeHandler")},_onDynSliderChangeHandler:function(a){this._extentUtil({numLevels:0<a?1:-1})},_onExtentChangeDynSliderHandler:function(){this._updateSliderValue(1,"_onDynSliderChangeHandler")},_openLogoLink:function(a){window.open(G.defaults.map.logoLink,"_blank");B.stop(a)},enableMapNavigation:function(){this.navigationManager.enableNavigation()},disableMapNavigation:function(){this.navigationManager.disableNavigation()},enableDoubleClickZoom:function(){this.isDoubleClickZoom||(this.navigationManager.enableDoubleClickZoom(),
this.isDoubleClickZoom=!0)},disableDoubleClickZoom:function(){this.isDoubleClickZoom&&(this.navigationManager.disableDoubleClickZoom(),this.isDoubleClickZoom=!1)},enableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom||(J(this.declaredClass+": Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.",null,"v2.0"),this.navigationManager.enableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=!0)},disableShiftDoubleClickZoom:function(){this.isShiftDoubleClickZoom&&
(J(this.declaredClass+": Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported.",null,"v2.0"),this.navigationManager.disableShiftDoubleClickZoom(),this.isShiftDoubleClickZoom=!1)},enableClickRecenter:function(){this.isClickRecenter||(this.navigationManager.enableClickRecenter(),this.isClickRecenter=!0)},disableClickRecenter:function(){this.isClickRecenter&&(this.navigationManager.disableClickRecenter(),this.isClickRecenter=!1)},enablePan:function(){this.isPan||
(this.navigationManager.enablePan(),this.isPan=!0)},disablePan:function(){this.isPan&&(this.navigationManager.disablePan(),this.isPan=!1)},enableRubberBandZoom:function(){this.isRubberBandZoom||(this.navigationManager.enableRubberBandZoom(),this.isRubberBandZoom=!0)},disableRubberBandZoom:function(){this.isRubberBandZoom&&(this.navigationManager.disableRubberBandZoom(),this.isRubberBandZoom=!1)},enableKeyboardNavigation:function(){this.isKeyboardNavigation||(this.navigationManager.enableKeyboardNavigation(),
this.isKeyboardNavigation=!0)},disableKeyboardNavigation:function(){this.isKeyboardNavigation&&(this.navigationManager.disableKeyboardNavigation(),this.isKeyboardNavigation=!1)},enableScrollWheelZoom:function(){this.isScrollWheelZoom||(this.navigationManager.enableScrollWheelZoom(),this.isScrollWheelZoom=!0)},disableScrollWheelZoom:function(){this.isScrollWheelZoom&&(this.navigationManager.disableScrollWheelZoom(),this.isScrollWheelZoom=!1)},showPanArrows:function(){this._navDiv&&(this._navDiv.style.display=
"block",this.isPanArrows=!0)},hidePanArrows:function(){this._navDiv&&(this._navDiv.style.display="none",this.isPanArrows=!1)},showZoomSlider:function(){this._slider&&(q(this._slider.domNode||this._slider,"visibility","inherit"),this.isZoomSlider=!0)},hideZoomSlider:function(){this._slider&&(q(this._slider.domNode||this._slider,"visibility","hidden"),this.isZoomSlider=!1)}});return f("extend-esri")&&(t.Map=v),v});