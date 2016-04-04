//>>built
define("dojo/io/script","../_base/connect ../_base/kernel ../_base/lang ../sniff ../_base/window ../_base/xhr ../dom ../dom-construct ../request/script ../aspect".split(" "),function(m,f,k,n,p,h,q,r,g,l){f.deprecated("dojo/io/script","Use dojo/request/script.","2.0");var e={get:function(a){var c,d=this._makeScriptDeferred(a,function(a){c&&c.cancel()}),b=d.ioArgs;h._ioAddQueryToUrl(b);h._ioNotifyStart(d);c=g.get(b.url,{timeout:a.timeout,jsonp:b.jsonp,checkString:a.checkString,ioArgs:b,frameDoc:a.frameDoc,
canAttach:function(a){b.requestId=a.id;b.scriptId=a.scriptId;b.canDelete=a.canDelete;return e._canAttach(b)}},!0);l.around(c,"isValid",function(a){return function(b){e._validCheck(d);return a.call(this,b)}});c.then(function(){d.resolve(d)}).otherwise(function(a){d.ioArgs.error=a;d.reject(a)});return d},attach:g._attach,remove:g._remove,_makeScriptDeferred:function(a,c){var d=h._ioSetArgs(a,c||this._deferredCancel,this._deferredOk,this._deferredError),b=d.ioArgs;b.id=f._scopeName+"IoScript"+(a.callbackSuffix||
this._counter++);b.canDelete=!1;b.jsonp=a.callbackParamName||a.jsonp;b.jsonp&&(b.query=b.query||"",0<b.query.length&&(b.query+="\x26"),b.query+=b.jsonp+"\x3d"+(a.frameDoc?"parent.":"")+f._scopeName+".io.script.jsonp_"+b.id+"._jsonpCallback",b.frameDoc=a.frameDoc,b.canDelete=!0,d._jsonpCallback=this._jsonpCallback,this["jsonp_"+b.id]=d);d.addBoth(function(a){b.canDelete&&(a instanceof Error?e["jsonp_"+b.id]._jsonpCallback=function(){delete e["jsonp_"+b.id];if(b.requestId)f.global[g._callbacksProperty][b.requestId]()}:
e._addDeadScript(b))});return d},_deferredCancel:function(a){a.canceled=!0},_deferredOk:function(a){a=a.ioArgs;return a.json||a.scriptLoaded||a},_deferredError:function(a,c){console.log("dojo.io.script error",a);return a},_deadScripts:[],_counter:1,_addDeadScript:function(a){e._deadScripts.push({id:a.id,frameDoc:a.frameDoc});a.frameDoc=null},_validCheck:function(a){if((a=e._deadScripts)&&0<a.length){for(var c=0;c<a.length;c++)e.remove(a[c].id,a[c].frameDoc),delete e["jsonp_"+a[c].id],a[c].frameDoc=
null;e._deadScripts=[]}return!0},_ioCheck:function(a){a=a.ioArgs;return a.json||a.scriptLoaded&&!a.args.checkString?!0:(a=a.args.checkString)&&eval("typeof("+a+") !\x3d 'undefined'")},_resHandle:function(a){e._ioCheck(a)?a.callback(a):a.errback(Error("inconceivable dojo.io.script._resHandle error"))},_canAttach:function(){return!0},_jsonpCallback:function(a){this.ioArgs.json=a;if(this.ioArgs.requestId)f.global[g._callbacksProperty][this.ioArgs.requestId](a)}};k.setObject("dojo.io.script",e);return e});