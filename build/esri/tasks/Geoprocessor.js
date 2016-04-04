//>>built
define("esri/tasks/Geoprocessor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/has dojo/io-query ../kernel ../request ../deferredUtils ../geometry/normalizeUtils ./Task ./FeatureSet ./JobInfo ./GPMessage ./LinearUnit ./DataFile ./RasterData ./Date ./ParameterValue ./GPResultImageLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/MapImage".split(" "),function(m,h,t,q,n,u,v,w,l,r,x,y,z,p,A,B,C,D,E,F,G,H,I){m=m(y,{declaredClass:"esri.tasks.Geoprocessor",
_eventMap:{"execute-complete":["results","messages"],"get-result-data-complete":["result"],"get-result-image-complete":["mapImage"],"get-result-image-layer-complete":["layer"],"job-cancel":["jobInfo"],"job-complete":["jobInfo"],"status-update":["jobInfo"]},constructor:function(){this._jobUpdateHandler=h.hitch(this,this._jobUpdateHandler);this._getJobStatus=h.hitch(this,this._getJobStatus);this._getResultDataHandler=h.hitch(this,this._getResultDataHandler);this._getResultImageHandler=h.hitch(this,
this._getResultImageHandler);this._executeHandler=h.hitch(this,this._executeHandler);this._updateTimers=[];this.registerConnectEvents()},updateDelay:1E3,processSpatialReference:null,outputSpatialReference:null,outSpatialReference:null,setUpdateDelay:function(a){this.updateDelay=a},setProcessSpatialReference:function(a){this.processSpatialReference=a},setOutputSpatialReference:function(a){this._setOutSR(a)},setOutSpatialReference:function(a){this._setOutSR(a)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["*"]}],
e:2,f:1},{n:"submitJob",c:4,a:[{i:0,p:["*"]}],e:3}],_setOutSR:function(a){this.outSpatialReference=this.outputSpatialReference=a},_getOutSR:function(){return this.outSpatialReference||this.outputSpatialReference},_gpEncode:function(a,e,b){for(var f in a){var d=a[f];h.isArray(d)?a[f]=n.toJson(t.map(d,function(a){return this._gpEncode({item:a},!0).item},this)):d instanceof Date&&(a[f]=d.getTime())}return this._encode(a,e,b)},_decode:function(a){var e=a.dataType,b=new F(a);if(-1!==t.indexOf(["GPBoolean",
"GPDouble","GPLong","GPString"],e))return b;if("GPLinearUnit"===e)b.value=new B(b.value);else if("GPFeatureRecordSetLayer"===e||"GPRecordSet"===e)b.value=new z(b.value);else if("GPDataFile"===e)b.value=new C(b.value);else if("GPDate"===e)a=b.value,b.value=h.isString(a)?new E({date:a}):new Date(a);else if("GPRasterData"===e||"GPRasterDataLayer"===e)a=a.value.mapImage,b.value=a?new I(a):new D(b.value);else if(-1!==e.indexOf("GPMultiValue:")){var f=e.split(":")[1];a=b.value;b.value=t.map(a,function(a){return this._decode({paramName:"_name",
dataType:f,value:a}).value},this)}else console.log(this.declaredClass+" : GP Data type not handled. : "+b.dataType),b=null;return b},submitJob:function(a,e,b,f,d){var c=this._getOutSR(),g=d.assembly;a=this._gpEncode(h.mixin({},this._url.query,{f:"json","env:outSR":c?c.wkid||n.toJson(c.toJson()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||n.toJson(this.processSpatialReference.toJson()):null},a),null,g&&g[0]);var k=this._jobUpdateHandler,J=this._errorHandler;
return l({url:this._url.path+"/submitJob",content:a,callbackParamName:"callback",load:function(a,c){k(a,c,!1,e,b,d.dfd)},error:function(a){J(a,f,d.dfd)}})},_jobUpdateHandler:function(a,e,b,f,d,c){var g=a.jobId;e=new p(a);if(this._successHandler([e],"onStatusUpdate",d,b&&c),!b)switch(clearTimeout(this._updateTimers[g]),this._updateTimers[g]=null,c&&c.progress(e),a.jobStatus){case p.STATUS_SUBMITTED:case p.STATUS_EXECUTING:case p.STATUS_WAITING:case p.STATUS_NEW:var k=this._getJobStatus;this._updateTimers[g]=
setTimeout(function(){k(g,b,f,d,c)},this.updateDelay);break;default:this._successHandler([e],"onJobComplete",f,c)}},_getJobStatus:function(a,e,b,f,d){var c=this._jobUpdateHandler;l({url:this._url.path+"/jobs/"+a,content:h.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:function(a,k){c(a,k,e,b,f,d)},error:this._errorHandler})},_getResultDataHandler:function(a,e,b,f,d){try{var c=this._decode(a);this._successHandler([c],"onGetResultDataComplete",b,d)}catch(g){this._errorHandler(g,
f,d)}},getResultData:function(a,e,b,f){var d=this._getResultDataHandler,c=this._errorHandler,g=new q(r._dfdCanceller);return g._pendingDfd=l({url:this._url.path+"/jobs/"+a+"/results/"+e,content:h.mixin({},this._url.query,{f:"json",returnType:"data"}),callbackParamName:"callback",load:function(a,c){d(a,c,b,f,g)},error:function(a){c(a,f,g)}}),g},checkJobStatus:function(a,e,b){var f=this._jobUpdateHandler,d=this._errorHandler,c=new q(r._dfdCanceller);return c._pendingDfd=l({url:this._url.path+"/jobs/"+
a,content:h.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:function(a,b){f(a,b,!0,null,e,c)},error:function(a){d(a,b,c)}}),c},cancelJob:function(a,e,b){var f=this._errorHandler,d=new q(r._dfdCanceller);return d._pendingDfd=l({url:this._url.path+"/jobs/"+a+"/cancel",content:h.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:h.hitch(this,function(a){this._successHandler([a],"onJobCancel",e,d)}),error:function(a){f(a,b,d)}}),d},execute:function(a,e,b,f){var d=
this._getOutSR(),c=f.assembly;a=this._gpEncode(h.mixin({},this._url.query,{f:"json","env:outSR":d?d.wkid||n.toJson(d.toJson()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||n.toJson(this.processSpatialReference.toJson()):null},a),null,c&&c[0]);var g=this._executeHandler,k=this._errorHandler;return l({url:this._url.path+"/execute",content:a,callbackParamName:"callback",load:function(a,c){g(a,c,e,b,f.dfd)},error:function(a){k(a,b,f.dfd)}})},_executeHandler:function(a,
e,b,f,d){try{var c,g,k=a.results,h=a.messages;c=0;for(g=k.length;g>c;c++)k[c]=this._decode(k[c]);c=0;for(g=h.length;g>c;c++)h[c]=new A(h[c]);this._successHandler([k,h],"onExecuteComplete",b,d)}catch(l){this._errorHandler(l,f,d)}},_getResultImageHandler:function(a,e,b,f,d){try{var c=this._decode(a);this._successHandler([c],"onGetResultImageComplete",b,d)}catch(g){this._errorHandler(g,f,d)}},getResultImage:function(a,e,b,f,d){var c=this._getResultImageHandler,g=this._errorHandler;b=this._gpEncode(h.mixin({},
this._url.query,{f:"json"},b.toJson()));var k=new q(r._dfdCanceller);return k._pendingDfd=l({url:this._url.path+"/jobs/"+a+"/results/"+e,content:b,callbackParamName:"callback",load:function(a,b){c(a,b,f,d,k)},error:function(a){g(a,d,k)}}),k},cancelJobStatusUpdates:function(a){clearTimeout(this._updateTimers[a]);this._updateTimers[a]=null},getResultImageLayer:function(a,e,b,f){var d;if(null==e){var c=this._url.path.indexOf("/GPServer/");a=this._url.path.substring(0,c)+"/MapServer/jobs/"+a}else a=this._url.path+
"/jobs/"+a+"/results/"+e;return this._url.query&&(a+="?"+v.objectToQuery(this._url.query)),d=null==e?new H(a,{imageParameters:b}):new G(a,{imageParameters:b},!0),this.onGetResultImageLayerComplete(d),f&&f(d),d},onStatusUpdate:function(){},onJobComplete:function(){},onExecuteComplete:function(){},onGetResultDataComplete:function(){},onGetResultImageComplete:function(){},onGetResultImageLayerComplete:function(){},onJobCancel:function(){}});return x._createWrappers(m),u("extend-esri")&&h.setObject("tasks.Geoprocessor",
m,w),m});