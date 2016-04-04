//>>built
define("esri/geometry/Multipoint","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../SpatialReference ./Geometry ./Point ./Extent ../srUtils".split(" "),function(c,b,r,f,v,t,g,p,u){var e={type:"multipoint",points:null};c=c(t,{declaredClass:"esri.geometry.Multipoint",constructor:function(a){b.mixin(this,e);this.points=[];a&&(a.points?b.mixin(this,a):this.spatialReference=a,this.spatialReference&&(this.spatialReference=u.createSpatialReference(this.spatialReference)));this.verifySR()},addPoint:function(a){return this.clearCache(),
this.points.push(b.isArray(a)?a:[a.x,a.y]),this},removePoint:function(a){return this._validateInputs(a)?(this.clearCache(),new g(this.points.splice(a,1)[0],this.spatialReference)):void 0},getExtent:function(){var a=this.getCacheValue("_extent");if(a)return new p(a);var l=this.points,c=l.length;if(c){var b,h,e,d,k;d=l[0];var m=b=d[0],n=h=d[1],f=Math.min,g=Math.max,q=this.spatialReference;for(k=0;c>k;k++)d=l[k],e=d[0],d=d[1],m=f(m,e),n=f(n,d),b=g(b,e),h=g(h,d);return a={xmin:m,ymin:n,xmax:b,ymax:h,
spatialReference:q?q.toJson():null},this.setCacheValue("_extent",a),new p(a)}},_validateInputs:function(a){return null===a||0>a||a>=this.points.length?!1:!0},getPoint:function(a){if(this._validateInputs(a))return a=this.points[a],new g(a[0],a[1],this.spatialReference)},setPoint:function(a,b){return this._validateInputs(a)?(this.clearCache(),this.points[a]=[b.x,b.y],this):void 0},toJson:function(){var a={points:b.clone(this.points)},c=this.spatialReference;return c&&(a.spatialReference=c.toJson()),
a}});return c.defaultProps=e,r("extend-esri")&&(b.setObject("geometry.Multipoint",c,f),f.geometry.defaultMultipoint=e),c});