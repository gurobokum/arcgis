//>>built
define("esri/tasks/ServiceAreaTask","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task ./ServiceAreaSolveResult ./NAServiceDescription".split(" "),function(a,d,f,k,l,m,n,p,q){a=a([n,q],{declaredClass:"esri.tasks.ServiceAreaTask",_eventMap:{"solve-complete":["result"]},constructor:function(){this._url.orig=this._url.path;this._url.path+="/solveServiceArea";this._handler=d.hitch(this,this._handler);this.registerConnectEvents()},__msigns:[{n:"solve",c:3,
a:[{i:0,p:["facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(a,d,e,c,b){try{var g=new p(a);this._successHandler([g],"onSolveComplete",e,b)}catch(h){this._errorHandler(h,c,b)}},solve:function(a,f,e,c){var b=c.assembly;a=this._encode(d.mixin({},this._url.query,{f:"json"},a.toJson(b&&b[0])));var g=this._handler,h=this._errorHandler;return l({url:this._url.path,content:a,callbackParamName:"callback",load:function(a,b){g(a,
b,f,e,c.dfd)},error:function(a){h(a,e,c.dfd)}})},onSolveComplete:function(){}});return m._createWrappers(a),f("extend-esri")&&d.setObject("tasks.ServiceAreaTask",a,k),a});