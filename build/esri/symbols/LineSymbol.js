//>>built
define("esri/symbols/LineSymbol","dojo/_base/declare dojo/_base/lang dojo/has dojox/gfx/_base ../kernel ./Symbol".split(" "),function(b,c,e,d,f,g){b=b(g,{declaredClass:"esri.symbol.LineSymbol",constructor:function(a){this.width=c.isObject(a)?d.pt2px(this.width):12},setWidth:function(a){return this.width=a,this},toJson:function(){var a=d.px2pt(this.width);return a=isNaN(a)?void 0:a,c.mixin(this.inherited("toJson",arguments),{width:a})}});return e("extend-esri")&&c.setObject("symbol.LineSymbol",b,f),
b});