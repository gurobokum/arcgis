//>>built
define("dojox/mobile/ProgressIndicator","dojo/_base/config dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dijit/_Contained dijit/_WidgetBase ./_css3 dojo/has!dojo-bidi?dojox/mobile/bidi/ProgressIndicator".split(" "),function(r,e,t,g,c,h,k,l,m,n,p,q){var a=e("dojox.mobile.ProgressIndicator",[n,m],{interval:100,size:40,removeOnStop:!0,startSpinning:!1,center:!0,colors:null,baseClass:"mblProgressIndicator",constructor:function(){this.colors=
[];this._bars=[]},buildRendering:function(){this.inherited(arguments);this.center&&g.add(this.domNode,"mblProgressIndicatorCenter");this.containerNode=c.create("div",{className:"mblProgContainer"},this.domNode);this.spinnerNode=c.create("div",null,this.containerNode);for(var b=0;12>b;b++){var a=c.create("div",{className:"mblProg mblProg"+b},this.spinnerNode);this._bars.push(a)}this.scale(this.size);this.startSpinning&&this.start()},scale:function(b){var a=b/40;k.set(this.containerNode,p.add({},{transform:"scale("+
a+")",transformOrigin:"0 0"}));h.setMarginBox(this.domNode,{w:b,h:b});h.setMarginBox(this.containerNode,{w:b/a,h:b/a})},start:function(){if(this.imageNode){var a=this.imageNode,c=Math.round((this.containerNode.offsetWidth-a.offsetWidth)/2),e=Math.round((this.containerNode.offsetHeight-a.offsetHeight)/2);a.style.margin=e+"px "+c+"px"}else{var d=0,f=this;this.timer=setInterval(function(){d--;d=0>d?11:d;for(var a=f.colors,b=0;12>b;b++){var c=(d+b)%12;a[c]?f._bars[b].style.backgroundColor=a[c]:g.replace(f._bars[b],
"mblProg"+c+"Color","mblProg"+(11===c?0:c+1)+"Color")}},this.interval)}},stop:function(){this.timer&&clearInterval(this.timer);this.timer=null;this.removeOnStop&&this.domNode&&this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode)},setImage:function(a){a?(this.imageNode=c.create("img",{src:a},this.containerNode),this.spinnerNode.style.display="none"):(this.imageNode&&(this.containerNode.removeChild(this.imageNode),this.imageNode=null),this.spinnerNode.style.display="")},destroy:function(){this.inherited(arguments);
this===a._instance&&(a._instance=null)}}),a=l("dojo-bidi")?e("dojox.mobile.ProgressIndicator",[a,q]):a;a._instance=null;a.getInstance=function(b){a._instance||(a._instance=new a(b));return a._instance};return a});