//>>built
define("dojo/_base/xhr","./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "),function(b,k,G,q,z,n,A,B,v,p,C,H,w,r,x,D){b._xhrObj=x._create;var t=b.config;b.objectToQuery=q.objectToQuery;b.queryToObject=q.queryToObject;b.fieldToObject=n.fieldToObject;b.formToObject=n.toObject;b.formToQuery=n.toQuery;b.formToJson=n.toJson;b._blockAsync=!1;k.add("native-xhr2-blob",function(){if(k("native-xhr2")){var a=
new XMLHttpRequest;a.open("GET","/",!0);a.responseType="blob";var b=a.responseType;a.abort();return"blob"===b}});var h=b._contentHandlers=b.contentHandlers={text:function(a){return a.responseText},json:function(a){return v.fromJson(a.responseText||null)},"json-comment-filtered":function(a){B.useCommentedJson||console.warn("Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}\x26\x26\nUse djConfig.useCommentedJson\x3dtrue to turn off this message.");
a=a.responseText;var b=a.indexOf("/*"),f=a.lastIndexOf("*/");if(-1==b||-1==f)throw Error("JSON was not comment filtered");return v.fromJson(a.substring(b+2,f))},javascript:function(a){return b.eval(a.responseText)},xml:function(a){var b=a.responseXML;b&&k("dom-qsa2.1")&&!b.querySelectorAll&&k("dom-parser")&&(b=(new DOMParser).parseFromString(a.responseText,"application/xml"));if(k("ie")&&(!b||!b.documentElement)){var f=function(a){return"MSXML"+a+".DOMDocument"},f=["Microsoft.XMLDOM",f(6),f(4),f(3),
f(2)];C.some(f,function(f){try{var d=new ActiveXObject(f);d.async=!1;d.loadXML(a.responseText);b=d}catch(g){return!1}return!0})}return b},"json-comment-optional":function(a){return a.responseText&&/^[^{\[]*\/\*/.test(a.responseText)?h["json-comment-filtered"](a):h.json(a)}};k("native-xhr2")&&(h.arraybuffer=h.blob=h.document=function(a,b){return"blob"!==b.args.handleAs||k("native-xhr2-blob")?a.response:new Blob([a.response],{type:a.getResponseHeader("Content-Type")})});b._ioSetArgs=function(a,c,f,
k){var d={args:a,url:a.url},g=null;if(a.form){var g=z.byId(a.form),e=g.getAttributeNode("action");d.url=d.url||(e?e.value:null);g=n.toObject(g)}e=[{}];g&&e.push(g);a.content&&e.push(a.content);a.preventCache&&e.push({"dojo.preventCache":(new Date).valueOf()});d.query=q.objectToQuery(p.mixin.apply(null,e));d.handleAs=a.handleAs||"text";var l=new A(function(a){a.canceled=!0;c&&c(a);var b=a.ioArgs.error;b||(b=Error("request cancelled"),b.dojoType="cancel",a.ioArgs.error=b);return b});l.addCallback(f);
var u=a.load;u&&p.isFunction(u)&&l.addCallback(function(b){return u.call(a,b,d)});var h=a.error;h&&p.isFunction(h)&&l.addErrback(function(b){return h.call(a,b,d)});var m=a.handle;m&&p.isFunction(m)&&l.addBoth(function(b){return m.call(a,b,d)});l.addErrback(function(a){return k(a,l)});t.ioPublish&&b.publish&&!1!==d.args.ioPublish&&(l.addCallbacks(function(a){b.publish("/dojo/io/load",[l,a]);return a},function(a){b.publish("/dojo/io/error",[l,a]);return a}),l.addBoth(function(a){b.publish("/dojo/io/done",
[l,a]);return a}));l.ioArgs=d;return l};var E=function(a){a=h[a.ioArgs.handleAs](a.ioArgs.xhr,a.ioArgs);return void 0===a?null:a},F=function(a,b){b.ioArgs.args.failOk||console.error(a);return a},y=function(a){0>=m&&(m=0,t.ioPublish&&b.publish&&(!a||a&&!1!==a.ioArgs.args.ioPublish)&&b.publish("/dojo/io/stop"))},m=0;w.after(r,"_onAction",function(){--m});w.after(r,"_onInFlight",y);b._ioCancelAll=r.cancelAll;b._ioNotifyStart=function(a){t.ioPublish&&b.publish&&!1!==a.ioArgs.args.ioPublish&&(m||b.publish("/dojo/io/start"),
m+=1,b.publish("/dojo/io/send",[a]))};b._ioWatch=function(a,b,f,k){a.ioArgs.options=a.ioArgs.args;p.mixin(a,{response:a.ioArgs,isValid:function(d){return b(a)},isReady:function(b){return f(a)},handleResponse:function(b){return k(a)}});r(a);y(a)};b._ioAddQueryToUrl=function(a){a.query.length&&(a.url+=(-1==a.url.indexOf("?")?"?":"\x26")+a.query,a.query=null)};b.xhr=function(a,c,f){var h,d=b._ioSetArgs(c,function(a){h&&h.cancel()},E,F),g=d.ioArgs;"postData"in c?g.query=c.postData:"putData"in c?g.query=
c.putData:"rawBody"in c?g.query=c.rawBody:(2<arguments.length&&!f||-1==="POST|PUT".indexOf(a.toUpperCase()))&&b._ioAddQueryToUrl(g);var e;k("native-xhr2")&&(e={arraybuffer:1,blob:1,document:1});e=k("native-xhr2")&&e[c.handleAs]?c.handleAs:"text";"blob"!==e||k("native-xhr2-blob")||(e="arraybuffer");e={method:a,handleAs:e,responseType:c.responseType,timeout:c.timeout,withCredentials:c.withCredentials,ioArgs:g};"undefined"!==typeof c.headers&&(e.headers=c.headers);"undefined"!==typeof c.contentType&&
(e.headers||(e.headers={}),e.headers["Content-Type"]=c.contentType);"undefined"!==typeof g.query&&(e.data=g.query);"undefined"!==typeof c.sync&&(e.sync=c.sync);b._ioNotifyStart(d);try{h=x(g.url,e,!0)}catch(l){return d.cancel(),d}d.ioArgs.xhr=h.response.xhr;h.then(function(){d.resolve(d)}).otherwise(function(a){g.error=a;a.response&&(a.status=a.response.status,a.responseText=a.response.text,a.xhr=a.response.xhr);d.reject(a)});return d};b.xhrGet=function(a){return b.xhr("GET",a)};b.rawXhrPost=b.xhrPost=
function(a){return b.xhr("POST",a,!0)};b.rawXhrPut=b.xhrPut=function(a){return b.xhr("PUT",a,!0)};b.xhrDelete=function(a){return b.xhr("DELETE",a)};b._isDocumentOk=function(a){return D.checkStatus(a.status)};b._getText=function(a){var c;b.xhrGet({url:a,sync:!0,load:function(a){c=a}});return c};p.mixin(b.xhr,{_xhrObj:b._xhrObj,fieldToObject:n.fieldToObject,formToObject:n.toObject,objectToQuery:q.objectToQuery,formToQuery:n.toQuery,formToJson:n.toJson,queryToObject:q.queryToObject,contentHandlers:h,
_ioSetArgs:b._ioSetArgs,_ioCancelAll:b._ioCancelAll,_ioNotifyStart:b._ioNotifyStart,_ioWatch:b._ioWatch,_ioAddQueryToUrl:b._ioAddQueryToUrl,_isDocumentOk:b._isDocumentOk,_getText:b._getText,get:b.xhrGet,post:b.xhrPost,put:b.xhrPut,del:b.xhrDelete});return b.xhr});