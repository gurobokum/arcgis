//>>built
define("esri/dijit/PopupMobile","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/_base/window dojo/_base/kernel dojo/has dojo/query dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style ../InfoWindowBase ../PopupBase ./InfoView ./NavigationBar ../kernel ../domUtils dojo/i18n!../nls/jsapi dojo/NodeList-dom".split(" "),function(m,u,q,c,r,t,h,v,F,w,x,e,p,y,n,z,A,B,C,D,g,E){m=u([z,A],{declaredClass:"esri.dijit.PopupMobile",offsetX:3,
offsetY:3,zoomFactor:4,marginLeft:10,marginTop:10,highlight:!0,popupNavigationBar:null,popupInfoView:null,location:null,xIcon:m.toUrl("./images/whitex.png"),dArrowIcon:m.toUrl("./images/whitedown.png"),lArrowIcon:m.toUrl("./images/whitel.png"),rArrowIcon:m.toUrl("./images/whiter.png"),constructor:function(a,b){this.initialize();q.mixin(this,a);this.domNode=w.byId(b);this._nls=q.mixin({},E.widgets.popup);var f=this.domNode;e.add(f,"esriPopupMobile");x.set(f,"innerHTML","\x3cdiv class\x3d'sizer'\x3e\x3cdiv class\x3d'titlePane'\x3e\x3cdiv class\x3d'spinner hidden'\x3e\x3c/div\x3e\x3cdiv class\x3d'title'\x3e\x3c/div\x3e\x3cdiv style\x3d'text-align:center'\x3e\x3cdiv class\x3d'titleButton prev hidden'\x3e\x3c/div\x3e\x3cdiv class\x3d'footer' style\x3d'display:inline-block;width:60px;height:15px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton next hidden'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton close'\x3e\x3c/div\x3e\x3cdiv class\x3d'titleButton arrow hidden'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'pointer top hidden'\x3e\x3c/div\x3e\x3cdiv class\x3d'pointer bottom hidden'\x3e\x3c/div\x3e");
var d=h.query(".titlePane",f)[0];this._arrowButton=h.query(".arrow",d)[0];this._pointerTop=h.query(".top",f)[0];this._pointerBottom=h.query(".bottom",f)[0];this._title=h.query(".title",d)[0];this._footer=h.query(".footer",d)[0];this._prev=h.query(".prev",d)[0];this._next=h.query(".next",d)[0];this._spinner=h.query(".spinner",d)[0];this._eventConnections=[c.connect(h.query(".close",d)[0],"onclick",this,this.hide),c.connect(this._arrowButton,"onclick",this,this._toggleView),c.connect(this._prev,"onclick",
this,function(){this.selectPrevious();this._updateUI()}),c.connect(this._next,"onclick",this,function(){this.selectNext();this._updateUI()})];this._initPopupNavigationBar();this._initPopupInfoView();g.hide(f);this.isShowing=!1},setMap:function(a){this.inherited(arguments);p.place(this.domNode,a.root);this.highlight&&this.enableHighlight(a)},unsetMap:function(){this.disableHighlight(this.map);this.inherited(arguments)},setTitle:function(a,b){this.destroyDijits(this._title);this.place(a,this._title);
this.destroyDijits(this._footer);this.place(b,this._footer);this.isShowing&&(this.startupDijits(this._title),this.startupDijits(this._footer))},setContent:function(a){this.destroyDijits(this._contentPane);this.place(a,this._contentPane);this.startupDijits(this._contentPane)},show:function(a){if(!a)return g.show(this.domNode),void(this.isShowing=!0);var b,f=this.map;a.spatialReference?(this.location=a,b=f.toScreen(a)):(this.location=f.toMap(a),b=a);this._maximized?this.restore():this._setPosition(b);
this.isShowing||(g.show(this.domNode),this.isShowing=!0,this.onShow())},hide:function(){this.isShowing&&(g.hide(this.domNode),this.isShowing=!1,this.onHide())},onShow:function(){this._followMap();this.startupDijits(this._title);this.showHighlight()},onHide:function(){this._unfollowMap();this.hideHighlight()},destroy:function(){this.map&&this.unsetMap();this.cleanup();this.isShowing&&this.hide();this.destroyDijits(this._title);this.destroyDijits(this._footer);r.forEach(this._eventConnections,c.disconnect);
p.destroy(this.domNode)},selectNext:function(){this.select(this.selectedIndex+1)},selectPrevious:function(){this.select(this.selectedIndex-1)},setFeatures:function(){this.inherited(arguments);this._updateUI()},onSetFeatures:function(){},onClearFeatures:function(){this.setTitle("\x26nbsp;","\x26nbsp;");e.add(this._arrowButton,"hidden");this._updateUI();this.hideHighlight()},onSelectionChange:function(){var a=this.selectedIndex;this._updateUI();0<=a&&(this.setContent(this.features[a].getContent()),
this.updateHighlight(this.map,this.features[a]),this.isShowing&&this.showHighlight())},onDfdComplete:function(){this._updateUI()},_followMap:function(){this._unfollowMap();var a=this.map;this._handles=[c.connect(a,"onPanStart",this,this._onPanStart),c.connect(a,"onPan",this,this._onPan),c.connect(a,"onZoomStart",this,this._onZoomStart),c.connect(a,"onExtentChange",this,this._onExtentChange)]},_unfollowMap:function(){var a=this._handles;a&&(r.forEach(a,c.disconnect),this._handles=null)},_onPanStart:function(){var a=
this.domNode.style;this._panOrigin={left:a.left,top:a.top,right:a.right,bottom:a.bottom}},_onPan:function(a,b){var f=this._panOrigin,d=b.x,e=b.y,c=f.left,k=f.top,l=f.right,f=f.bottom;c&&(c=parseFloat(c)+d+"px");k&&(k=parseFloat(k)+e+"px");l&&(l=parseFloat(l)-d+"px");f&&(f=parseFloat(f)-e+"px");n.set(this.domNode,{left:c,top:k,right:l,bottom:f})},_onZoomStart:function(){g.hide(this.domNode)},_onExtentChange:function(a,b,f){f&&(g.show(this.domNode),this.show(this._targetLocation||this.location),this._targetLocation=
null)},_setPosition:function(a){var b=a.x;a=a.y;var f=y.getContentBox(this.map.container),d=f.w,f=f.h,c=0,g=a+10,k=118,l=d-18;18<b&&l>b?(c=b-130,0>c?c=0:c>d-260&&(c=d-260)):18>=b?c=b-18:b>=l&&(c=d-260+(b-l));118<b&&d-130>b?k=118:118>=b?18<b?k=b-12:18>=b&&(k=6):b>=d-130&&(l>b?k=118+b-(d-130):b>=l&&(k=118+l-(d-130)));f/2>=a?(n.set(this.domNode,{left:c+"px",top:g+"px",bottom:null}),n.set(this._pointerTop,{left:k+"px"}),e.add(this._pointerBottom,"hidden"),e.remove(this._pointerTop,"hidden")):(n.set(this.domNode,
{left:c+"px",top:g-64+"px",bottom:null}),n.set(this._pointerBottom,{left:k+"px"}),e.add(this._pointerTop,"hidden"),e.remove(this._pointerBottom,"hidden"))},_showPointer:function(a){r.forEach(["topLeft","topRight","bottomRight","bottomLeft"],function(b){b===a?h.query(".pointer."+b,this.domNode).removeClass("hidden"):h.query(".pointer."+b,this.domNode).addClass("hidden")},this)},_toggleView:function(){this.popupNavigationBar||this._initPopupNavigationBar();this.popupInfoView||this._initPopupInfoView();
this.hide();g.show(this.popupNavigationBar.container);g.show(this.popupInfoView.container);0<=this.selectedIndex&&this.setContent(this.features[this.selectedIndex].getContent())},_handleNavigationBar:function(a){switch(this.popupInfoView.animateTo(0),a.name){case "CloseButton":g.hide(this.popupNavigationBar.container);g.hide(this.popupInfoView.container);this.hide();break;case "ToggleButton":g.hide(this.popupNavigationBar.container);g.hide(this.popupInfoView.container);this.show(this.location);break;
case "PreviousButton":this.selectPrevious();this._updateUI();break;case "NextButton":this.selectNext(),this._updateUI()}},_initPopupNavigationBar:function(){var a={};a.items=[{name:"CloseButton",type:"img",src:this.xIcon,srcAlt:this.xIcon,position:"left"},{name:"Title",type:"span",text:"",position:"center"},{name:"ToggleButton",type:"img",src:this.dArrowIcon,srcAlt:this.dArrowIcon,position:"right",toggleGroup:"toggle"},{name:"PreviousButton",type:"img",src:this.lArrowIcon,srcAlt:this.lArrowIcon,position:"right2",
toggleGroup:"previous"},{name:"NextButton",type:"img",src:this.rArrowIcon,srcAlt:this.rArrowIcon,position:"right1",toggleGroup:"next"}];this.popupNavigationBar=new C(a,p.create("div",{},t.body()));c.connect(this.popupNavigationBar,"onCreate",this,function(a){this._prevFeatureButton=a[3]._node;this._nextFeatureButton=a[4]._node});c.connect(this.popupNavigationBar,"onSelect",this,this._handleNavigationBar);c.connect(this.popupNavigationBar,"onUnSelect",this,this._handleNavigationBar);this.popupNavigationBar.startup();
g.hide(this.popupNavigationBar.container)},_initPopupInfoView:function(){this.popupInfoView=new B({items:[{name:"Navigator",type:"div",text:""},{name:"content",type:"div",text:""},{name:"attachment",type:"div",text:""}]},p.create("div",{},t.body()));e.add(this.popupInfoView.container,"esriMobilePopupInfoView");this.popupInfoView.enableTouchScroll();c.connect(this.popupInfoView,"onCreate",this,function(a){this._contentPane=a[1]._node;0<=this.selectedIndex&&this.setContent(this.features[this.selectedIndex].getContent())});
c.connect(this.popupInfoView,"onSwipeLeft",this,function(){});c.connect(this.popupInfoView,"onSwipeRight",this,function(){});this.popupInfoView.startup()},_updateUI:function(){var a="\x26nbsp;",b="\x26nbsp;",c=this.selectedIndex,d=this.features,g=this.deferreds,h=this._prevFeatureButton.parentNode,k=this._nextFeatureButton.parentNode,l=this._spinner,m=this._nls;d&&1<=d.length?(a=d[c].getTitle(),b=c+1+" of "+d.length,e.remove(this._arrowButton,"hidden"),0===c?(e.add(h,"hidden"),e.add(this._prev,"hidden")):
(e.remove(h,"hidden"),e.remove(this._prev,"hidden")),c===d.length-1?(e.add(k,"hidden"),e.add(this._next,"hidden")):(e.remove(k,"hidden"),e.remove(this._next,"hidden"))):(e.add(this._arrowButton,"hidden"),e.add(h,"hidden"),e.add(k,"hidden"),e.add(this._prev,"hidden"),e.add(this._next,"hidden"));this.setTitle(a,b);this.popupNavigationBar.getItems()[1]._node.innerHTML=b;g&&g.length?(e.remove(l,"hidden"),this.setTitle(m.NLS_searching+"...","\x26nbsp;")):(e.add(l,"hidden"),d&&d.length||this.setTitle("No Information",
"\x26nbsp;"))}});return v("extend-esri")&&q.setObject("dijit.PopupMobile",m,D),m});