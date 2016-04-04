//>>built
define("dojox/drawing/ui/Button","dojo ../util/oo ../stencil/Rect ../stencil/Ellipse ../stencil/Text ../manager/_registry".split(" "),function(e,f,g,h,k,l){f=f.declare(function(a){a.subShape=!0;e.mixin(this,a);this.width=a.data.width||2*a.data.rx;this.height=a.data.height||2*a.data.ry;this.y=a.data.y||a.data.cy-a.data.ry;this.id=this.id||this.util.uid(this.type);this.util.attr(this.container,"id",this.id);this.callback&&(this.hitched=e.hitch(this.scope||window,this.callback,this));a.drawingType="ui";
this.shape=a.data.width&&a.data.height?new g(a):new h(a);var d=function(a,b,d){e.forEach(["norm","over","down","selected"],function(e){a[e].fill[b]=d})};d(this.style.button,"y2",this.height+this.y);d(this.style.button,"y1",this.y);if(a.icon&&!a.icon.text){var d=this.drawing.getConstructor(a.icon.type),b=this.makeOptions(a.icon);b.data=e.mixin(b.data,this.style.button.icon.norm);if(b.data&&0===b.data.borderWidth)b.data.fill=this.style.button.icon.norm.fill=b.data.color;else if("line"==a.icon.type||
"path"==a.icon.type&&!a.icon.closePath)this.style.button.icon.selected.color=this.style.button.icon.selected.fill;this.icon=new d(b)}else if(a.text||a.icon&&a.icon.text)b=this.makeOptions(a.text||a.icon.text),b.data.color=this.style.button.icon.norm.color,this.style.button.icon.selected.color=this.style.button.icon.selected.fill,this.icon=new k(b),this.icon.attr({height:this.icon._lineHeight,y:(this.height-this.icon._lineHeight)/2+this.y});(a=this.drawing.getConstructor(this.toolType))&&this.drawing.addUI("tooltip",
{data:{text:a.setup.tooltip},button:this});this.onOut()},{callback:null,scope:null,hitched:null,toolType:"",onClick:function(a){},makeOptions:function(a,d){d=d||1;a=e.clone(a);var b={util:this.util,mouse:this.mouse,container:this.container,subShape:!0};if("string"==typeof a)b.data={x:this.data.x-5,y:this.data.y+2,width:this.data.width,height:this.data.height,text:a,makeFit:!0};else if(a.points){e.forEach(a.points,function(a){a.x=a.x*this.data.width*.01*d+this.data.x;a.y=a.y*this.data.height*.01*d+
this.data.y},this);b.data={};for(var c in a)"points"!=c&&(b.data[c]=a[c]);b.points=a.points}else{for(c in a)/x|width/.test(c)?a[c]=a[c]*this.data.width*.01*d:/y|height/.test(c)&&(a[c]=a[c]*this.data.height*.01*d),/x/.test(c)&&!/r/.test(c)?a[c]+=this.data.x:/y/.test(c)&&!/r/.test(c)&&(a[c]+=this.data.y);delete a.type;b.data=a}b.drawingType="ui";return b},enabled:!0,selected:!1,type:"drawing.library.UI.Button",select:function(){this.selected=!0;this.icon&&this.icon.attr(this.style.button.icon.selected);
this._change(this.style.button.selected);this.shape.shadow&&this.shape.shadow.hide()},deselect:function(){this.selected=!1;this.icon&&this.icon.attr(this.style.button.icon.norm);this.shape.shadow&&this.shape.shadow.show();this._change(this.style.button.norm)},disable:function(){this.enabled&&(this.enabled=!1,this._change(this.style.button.disabled),this.icon.attr({color:this.style.button.norm.color}))},enable:function(){this.enabled||(this.enabled=!0,this._change(this.style.button.norm),this.icon.attr({color:this.style.button.icon.norm.color}))},
_change:function(a){this.shape.attr(a);this.shape.shadow&&this.shape.shadow.container.moveToBack();this.icon&&this.icon.shape.moveToFront()},onOver:function(){!this.selected&&this.enabled&&this._change(this.style.button.over)},onOut:function(){this.selected||this._change(this.style.button.norm)},onDown:function(){!this.selected&&this.enabled&&this._change(this.style.button.selected)},onUp:function(){this.enabled&&(this._change(this.style.button.over),this.hitched&&this.hitched(),this.onClick(this))},
attr:function(a){this.icon&&this.icon.attr(a)}});e.setObject("dojox.drawing.ui.Button",f);l.register({name:"dojox.drawing.ui.Button"},"stencil");return f});