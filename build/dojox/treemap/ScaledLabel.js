//>>built
define("dojox/treemap/ScaledLabel",["dojo/_base/declare","dojo/dom-geometry","dojo/dom-construct","dojo/dom-style"],function(l,b,k,d){return l("dojox.treemap.ScaledLabel",null,{onRendererUpdated:function(a){if("leaf"==a.kind){a=a.renderer;var e=d.get(a,"fontSize");d.set(a.firstChild,"fontSize",e);for(var e=parseInt(e),c=.75*b.getContentBox(a).w/b.getMarginBox(a.firstChild).w,f=b.getContentBox(a).h/b.getMarginBox(a.firstChild).h,g=b.getContentBox(a).w-b.getMarginBox(a.firstChild).w,h=b.getContentBox(a).h-
b.getMarginBox(a.firstChild).h,c=Math.floor(e*Math.min(c,f));0<h&&0<g;)d.set(a.firstChild,"fontSize",c+"px"),g=b.getContentBox(a).w-b.getMarginBox(a.firstChild).w,h=b.getContentBox(a).h-b.getMarginBox(a.firstChild).h,e=c,c+=1;(0>h||0>g)&&d.set(a.firstChild,"fontSize",e+"px")}},createRenderer:function(a,b,c){var f=this.inherited(arguments);if("leaf"==c){var g=k.create("div");d.set(g,{position:"absolute",width:"auto"});k.place(g,f)}return f},styleRenderer:function(a,b,c,f){"leaf"!=f?this.inherited(arguments):
(d.set(a,"background",this.getColorForItem(b).toHex()),a.firstChild.innerHTML=this.getLabelForItem(b))}})});