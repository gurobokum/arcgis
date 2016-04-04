//>>built
define("esri/renderers/ScaleDependentRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ./Renderer".split(" "),function(e,n,l,p,q,m,r){e=e(r,{declaredClass:"esri.renderer.ScaleDependentRenderer",constructor:function(a){this.setRendererInfos(a&&a.rendererInfos||[])},setRendererInfos:function(a){return this.rendererInfos=a,this._setRangeType(),this},getSymbol:function(a){var b=this.getRendererInfo(a);return b&&b.renderer&&b.renderer.getSymbol(a)},getRendererInfo:function(a){a=
a.getLayer().getMap();return"zoom"===this.rangeType?this.getRendererInfoByZoom(a.getZoom()):this.getRendererInfoByScale(a.getScale())},getRendererInfoByZoom:function(a){var b,f,c=this.rendererInfos,d=0;do b=c[d],a>=b.minZoom&&a<=b.maxZoom&&(f=b),d++;while(!f&&d<c.length);return f},getRendererInfoByScale:function(a){var b,f,c,d,h,g,e=this.rendererInfos,k=0;do b=e[k],c=b.minScale,d=b.maxScale,h=!c,g=!d,!h&&c>=a&&(h=!0),!g&&a>=d&&(g=!0),h&&g&&(f=b),k++;while(!f&&k<e.length);return f},addRendererInfo:function(a){var b,
f,c=0,d=this.rendererInfos,e=a.hasOwnProperty("minZoom")?"minZoom":"minScale",g=d.length;do f=d[c],(g===c||a[e]<f[e])&&(d.splice(c,0,a),this._setRangeType(),b=!0),c++;while(!b&&g>c);return this},_setRangeType:function(){var a=this.rendererInfos;(a=a&&a[0])&&(this.rangeType=a.hasOwnProperty("minZoom")?"zoom":a.hasOwnProperty("minScale")?"scale":"")},toJson:function(){if("zoom"===this.rangeType)return null;var a=this.rendererInfos||[],b=a[0]&&a[0].minScale,a=l.mixin(this.inherited(arguments),{type:"scaleDependent",
minScale:0<b?b:0,rendererInfos:n.map(a,function(a){return m.fixJson({maxScale:0<a.maxScale?a.maxScale:0,renderer:a.renderer&&a.renderer.toJson()})})});return m.fixJson(a)}});return p("extend-esri")&&l.setObject("renderer.ScaleDependentRenderer",e,q),e});