//>>built
require({cache:{"url:dojox/layout/resources/ExpandoPane.html":'\x3cdiv class\x3d"dojoxExpandoPane"\x3e\n\t\x3cdiv dojoAttachPoint\x3d"titleWrapper" class\x3d"dojoxExpandoTitle"\x3e\n\t\t\x3cdiv class\x3d"dojoxExpandoIcon" dojoAttachPoint\x3d"iconNode" dojoAttachEvent\x3d"ondijitclick:toggle"\x3e\x3cspan class\x3d"a11yNode"\x3eX\x3c/span\x3e\x3c/div\x3e\n\t\t\x3cspan class\x3d"dojoxExpandoTitleNode" dojoAttachPoint\x3d"titleNode"\x3e${title}\x3c/span\x3e\n\t\x3c/div\x3e\n\t\x3cdiv class\x3d"dojoxExpandoWrapper" dojoAttachPoint\x3d"cwrapper" dojoAttachEvent\x3d"ondblclick:_trap"\x3e\n\t\t\x3cdiv class\x3d"dojoxExpandoContent" dojoAttachPoint\x3d"containerNode"\x3e\x3c/div\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/layout/ExpandoPane","dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/event dojo/_base/fx dojo/dom-style dojo/dom-class dojo/dom-geometry dojo/text!./resources/ExpandoPane.html dijit/layout/ContentPane dijit/_TemplatedMixin dijit/_Contained dijit/_Container".split(" "),function(n,c,p,m,k,q,l,e,f,d,r,g,t,u,v){n.experimental("dojox.layout.ExpandoPane");return p("dojox.layout.ExpandoPane",[g,t,u,v],{attributeMap:c.delegate(g.prototype.attributeMap,
{title:{node:"titleNode",type:"innerHTML"}}),templateString:r,easeOut:"dojo._DefaultEasing",easeIn:"dojo._DefaultEasing",duration:420,startExpanded:!0,previewOpacity:.75,previewOnDblClick:!1,tabIndex:"0",_setTabIndexAttr:"iconNode",baseClass:"dijitExpandoPane",postCreate:function(){this.inherited(arguments);this._animConnects=[];this._isHorizontal=!0;c.isString(this.easeOut)&&(this.easeOut=c.getObject(this.easeOut));c.isString(this.easeIn)&&(this.easeIn=c.getObject(this.easeIn));var a="",b=!this.isLeftToRight();
if(this.region){switch(this.region){case "trailing":case "right":a=b?"Left":"Right";this._needsPosition="left";break;case "leading":case "left":a=b?"Right":"Left";break;case "top":a="Top";break;case "bottom":this._needsPosition="top",a="Bottom"}f.add(this.domNode,"dojoxExpando"+a);f.add(this.iconNode,"dojoxExpandoIcon"+a);this._isHorizontal=/top|bottom/.test(this.region)}e.set(this.domNode,{overflow:"hidden",padding:0});this.connect(this.domNode,"ondblclick",this.previewOnDblClick?"preview":"toggle");
this.iconNode.setAttribute("aria-controls",this.id);this.previewOnDblClick&&this.connect(this.getParent(),"_layoutChildren",c.hitch(this,function(){this._isonlypreview=!1}))},_startupSizes:function(){this._container=this.getParent();this._closedSize=this._titleHeight=d.getMarginBox(this.titleWrapper).h;if(this.splitter){var a=this.id;m.forEach(dijit.registry.toArray(),function(b){b&&b.child&&b.child.id==a&&this.connect(b,"_stopDrag","_afterResize")},this)}this._currentSize=d.getContentBox(this.domNode);
this._showSize=this._currentSize[this._isHorizontal?"h":"w"];this._setupAnims();this.startExpanded?this._showing=!0:(this._showing=!1,this._hideWrapper(),this._hideAnim.gotoPercent(99,!0));this.domNode.setAttribute("aria-expanded",this._showing);this._hasSizes=!0},_afterResize:function(a){a=this._currentSize;this._currentSize=d.getMarginBox(this.domNode);var b=this._currentSize[this._isHorizontal?"h":"w"];b>this._titleHeight?(this._showing||(this._showing=!this._showing,this._showEnd()),this._showSize=
b,this._setupAnims()):(this._showSize=a[this._isHorizontal?"h":"w"],this._showing=!1,this._hideWrapper(),this._hideAnim.gotoPercent(89,!0))},_setupAnims:function(){m.forEach(this._animConnects,k.disconnect);var a={node:this.domNode,duration:this.duration},b={},d=this._showSize,e=this._closedSize,f={},g=this._isHorizontal?"height":"width",h=this._needsPosition;b[g]={end:d};f[g]={end:e};h&&(b[h]={end:function(a){return parseInt(a.style[h],10)-d+e}},f[h]={end:function(a){return parseInt(a.style[h],10)+
d-e}});this._showAnim=l.animateProperty(c.mixin(a,{easing:this.easeIn,properties:b}));this._hideAnim=l.animateProperty(c.mixin(a,{easing:this.easeOut,properties:f}));this._animConnects=[k.connect(this._showAnim,"onEnd",this,"_showEnd"),k.connect(this._hideAnim,"onEnd",this,"_hideEnd")]},preview:function(){this._showing||(this._isonlypreview=!this._isonlypreview);this.toggle()},toggle:function(){this._showing?(this._hideWrapper(),this._showAnim&&this._showAnim.stop(),this._hideAnim.play()):(this._hideAnim&&
this._hideAnim.stop(),this._showAnim.play());this._showing=!this._showing;this.domNode.setAttribute("aria-expanded",this._showing)},_hideWrapper:function(){f.add(this.domNode,"dojoxExpandoClosed");e.set(this.cwrapper,{visibility:"hidden",opacity:"0",overflow:"hidden"})},_showEnd:function(){e.set(this.cwrapper,{opacity:0,visibility:"visible"});l.anim(this.cwrapper,{opacity:this._isonlypreview?this.previewOpacity:1},227);f.remove(this.domNode,"dojoxExpandoClosed");this._isonlypreview?(this._previewShowing=
!0,this.resize()):setTimeout(c.hitch(this._container,"layout"),15)},_hideEnd:function(){this._isonlypreview?this._previewShowing=!1:setTimeout(c.hitch(this._container,"layout"),25);this._isonlypreview=!1},resize:function(a){this._hasSizes||this._startupSizes(a);var b=d.getMarginBox(this.domNode);this._contentBox={w:a&&"w"in a?a.w:b.w,h:(a&&"h"in a?a.h:b.h)-this._titleHeight};e.set(this.containerNode,"height",this._contentBox.h+"px");a&&d.setMarginBox(this.domNode,a);this._layoutChildren();this._setupAnims()},
_trap:function(a){q.stop(a)}})});