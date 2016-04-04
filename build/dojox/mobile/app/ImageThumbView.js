//>>built
define("dojox/mobile/app/ImageThumbView",["dojo","dijit","dojox","dojo/require!dijit/_WidgetBase,dojo/string"],function(c,k,l){c.provide("dojox.mobile.app.ImageThumbView");c.experimental("dojox.mobile.app.ImageThumbView");c.require("dijit._WidgetBase");c.require("dojo.string");c.declare("dojox.mobile.app.ImageThumbView",k._WidgetBase,{items:[],urlParam:"url",labelParam:null,itemTemplate:'\x3cdiv class\x3d"mblThumbInner"\x3e\x3cdiv class\x3d"mblThumbOverlay"\x3e\x3c/div\x3e\x3cdiv class\x3d"mblThumbMask"\x3e\x3cdiv class\x3d"mblThumbSrc" style\x3d"background-image:url(${url})"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
minPadding:4,maxPerRow:3,maxRows:-1,baseClass:"mblImageThumbView",thumbSize:"medium",animationEnabled:!0,selectedIndex:-1,cache:null,cacheMustMatch:!1,clickEvent:"onclick",cacheBust:!1,disableHide:!1,constructor:function(a,b){},postCreate:function(){this.inherited(arguments);var a=this;this.addThumb=c.hitch(this,this.addThumb);this.handleImgLoad=c.hitch(this,this.handleImgLoad);this.hideCached=c.hitch(this,this.hideCached);this._onLoadImages={};this.cache=[];this.visibleImages=[];this._cacheCounter=
0;this.connect(this.domNode,this.clickEvent,function(b){(b=a._getItemNodeFromEvent(b))&&!b._cached&&(a.onSelect(b._item,b._index,a.items),c.query(".selected",this.domNode).removeClass("selected"),c.addClass(b,"selected"))});c.addClass(this.domNode,this.thumbSize);this.resize();this.render()},onSelect:function(a,b,c){},_setAnimationEnabledAttr:function(a){this.animationEnabled=a;c[a?"addClass":"removeClass"](this.domNode,"animated")},_setItemsAttr:function(a){this.items=a||[];a={};var b;for(b=0;b<
this.items.length;b++)a[this.items[b][this.urlParam]]=1;var e=[],d;for(d in this._onLoadImages)!a[d]&&this._onLoadImages[d]._conn&&(c.disconnect(this._onLoadImages[d]._conn),this._onLoadImages[d].src=null,e.push(d));for(b=0;b<e.length;b++)delete this._onLoadImages[d];this.render()},_getItemNode:function(a){for(;a&&!c.hasClass(a,"mblThumb")&&a!=this.domNode;)a=a.parentNode;return a==this.domNode?null:a},_getItemNodeFromEvent:function(a){a.touches&&0<a.touches.length&&(a=a.touches[0]);return this._getItemNode(a.target)},
resize:function(){this._thumbSize=null;this._size=c.contentBox(this.domNode);this.disableHide=!0;this.render();this.disableHide=!1},hideCached:function(){for(var a=0;a<this.cache.length;a++)this.cache[a]&&c.style(this.cache[a],"display","none")},render:function(){for(var a,b,e;this.visibleImages&&0<this.visibleImages.length;)a=this.visibleImages.pop(),this.cache.push(a),this.disableHide||c.addClass(a,"hidden"),a._cached=!0;this.cache&&0<this.cache.length&&setTimeout(this.hideCached,1E3);if(this.items&&
0!=this.items.length){for(a=0;a<this.items.length&&!(e=this.items[a],b=c.isString(e)?e:e[this.urlParam],this.addThumb(e,b,a),0<this.maxRows&&(a+1)/this.maxPerRow>=this.maxRows);a++);if(this._thumbSize){b=0;e=-1;var d=this._thumbSize.w+2*this.padding,g=this._thumbSize.h+2*this.padding,f=this.thumbNodes=c.query(".mblThumb",this.domNode),h=0,f=this.visibleImages;for(a=0;a<f.length;a++)if(!f[a]._cached){0==h%this.maxPerRow&&e++;b=h%this.maxPerRow;this.place(f[a],b*d+this.padding,e*g+this.padding);f[a]._loading||
c.removeClass(f[a],"hidden");if(h==this.selectedIndex)c[h==this.selectedIndex?"addClass":"removeClass"](f[a],"selected");h++}this._numRows=a=Math.ceil(h/this.maxPerRow);this.setContainerHeight(a*(this._thumbSize.h+2*this.padding))}}},setContainerHeight:function(a){c.style(this.domNode,"height",a+"px")},addThumb:function(a,b,e){var d,g=!1;if(0<this.cache.length){for(var f=0;f<this.cache.length;f++)if(this.cache[f]._url==b){d=this.cache.splice(f,1)[0];break}d||this.cacheMustMatch?g=!0:(d=this.cache.pop(),
c.removeClass(d,"selected"))}d||(d=c.create("div",{"class":"mblThumb hidden",innerHTML:c.string.substitute(this.itemTemplate,{url:b},null,this)},this.domNode));this.labelParam&&((f=c.query(".mblThumbLabel",d)[0])||(f=c.create("div",{"class":"mblThumbLabel"},d)),f.innerHTML=a[this.labelParam]||"");c.style(d,"display","");this.disableHide||c.addClass(d,"hidden");!g&&(g=c.create("img",{}),g._thumbDiv=d,g._conn=c.connect(g,"onload",this.handleImgLoad),g._url=b,d._loading=!0,this._onLoadImages[b]=g)&&
(g.src=b);this.visibleImages.push(d);d._index=e;d._item=a;d._url=b;d._cached=!1;this._thumbSize||(this._thumbSize=c.marginBox(d),0==this._thumbSize.h&&(this._thumbSize.h=100,this._thumbSize.w=100),this.labelParam&&(this._thumbSize.h+=8),this.calcPadding())},handleImgLoad:function(a){a=a.target;c.disconnect(a._conn);c.removeClass(a._thumbDiv,"hidden");a._thumbDiv._loading=!1;a._conn=null;var b=a._url;this.cacheBust&&(b+=(-1<b.indexOf("?")?"\x26":"?")+"cacheBust\x3d"+(new Date).getTime()+"_"+this._cacheCounter++);
c.query(".mblThumbSrc",a._thumbDiv).style("backgroundImage","url("+b+")");delete this._onLoadImages[a._url]},calcPadding:function(){var a=this._size.w,b=this._thumbSize.w;this.maxPerRow=Math.floor(a/(b+this.minPadding));this.padding=Math.floor((a-b*this.maxPerRow)/(2*this.maxPerRow))},place:function(a,b,e){c.style(a,{"-webkit-transform":"translate("+b+"px,"+e+"px)"})},destroy:function(){var a,b=0,c;for(c in this._onLoadImages)if(a=this._onLoadImages[c])a.src=null,b++;this.inherited(arguments)}})});