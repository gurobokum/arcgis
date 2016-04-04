//>>built
define("esri/opsdashboard/core/messageHandler",["dojo/_base/declare","dojo/_base/lang","dojo/json","../../Evented","dojo/Deferred"],function(g,d,e,h,f){var k=0;return new (g([h],{isNative:!1,_targetUrl:"",_loadingDeferred:null,_redirectIdentityManager:!1,constructor:function(){this._promises={};var a=document.referrer;a&&(a=a.split(/[\/?#]/),this._targetUrl=a[0]+"//"+a[2]);this._loadingDeferred=new f;window.engine?(this.isNative=!0,window.engine._trigger=d.hitch(this,this._engineCallbacks),window.engine.BindingsReady(),
window.document.addEventListener("contextmenu",function(b){var a=new MouseEvent("click",{view:b.view,altKey:b.altKey,ctrlKey:b.ctrlKey,shiftKey:b.shiftKey,metaKey:b.metaKey,which:b.which,button:b.button,buttons:b.buttons,detail:b.detail,currentTarget:b.currentTarget,relatedTarget:b.relatedTarget,target:b.target,timeStamp:b.timeStamp,clientX:b.clientX,clientY:b.clientY,screenX:b.screenX,screenY:b.screenY});b.target.dispatchEvent(a)})):(window.addEventListener("message",d.hitch(this,function(a){a.origin===
this._targetUrl&&this._messageReceived(a.data)}),!1),this._loadingDeferred.resolve());window.setInterval(d.hitch(this,this.checkPromises),3E4)},_engineCallbacks:function(a,b){switch(a.toLowerCase()){case "_onready":this._loadingDeferred.resolve();break;case "receivemessages":this._messageReceived(b)}},checkPromises:function(){var a=Date.now()-3E4,b=[],c;for(c in this._promises)this._promises[c].timestamp>a||(b.push(c),this._promises[c].promise.isFulfilled()||this._promises[c].promise.reject(Error("messageTimeout")));
b.forEach(function(a){delete this._promises[a]},this)},_messageReceived:function(a){a=e.parse(a);if(a.args)for(var b in a.args){var c=a.args[b];"string"==typeof c&&0===c.indexOf("{")&&(a.args[b]=e.parse(c))}if((b=void 0!==a.clientMessageId?this._promises[a.clientMessageId]:null)||!a.clientMessageId){if(b)return(delete this._promises[a.clientMessageId],b.promise.isFulfilled())?void 0:a.args?a.args.error?b.promise.reject({error:a.args.error}):a.args.cancelled?b.promise.reject({cancel:a.args.cancelled}):
b.promise.resolve(a.args):b.promise.resolve();a.functionName&&this.emit("message-received",a)}},__sendMessage:function(a){window.name&&(a.addinId=window.name);window.engine?window.engine.SendMessage.call(this,"sendMessage",null,e.stringify(a),window.location.hostname):window.parent.postMessage(e.stringify(a),this._targetUrl)},_sendMessageWithReply:function(a){return this._loadingDeferred.then(d.hitch(this,function(){var b=new f;return a.clientMessageId=k++,this._promises[a.clientMessageId]={promise:b,
timestamp:Date.now()},this.__sendMessage(a),b.promise}))},_sendMessage:function(a){this._loadingDeferred.then(d.hitch(this,function(){this.__sendMessage(a)}))}}))});