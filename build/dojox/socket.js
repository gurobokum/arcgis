//>>built
define("dojox/socket","dojo/_base/array dojo/_base/lang dojo/_base/xhr dojo/aspect dojo/on dojo/Evented dojo/_base/url".split(" "),function(l,m,u,q,r,v,w){var t=window.WebSocket,b=function(a){"string"==typeof a&&(a={url:a});return t?b.WebSocket(a,!0):b.LongPoll(a)};b.WebSocket=function(a,h){var e=new t(new w((document.baseURI||window.location.href).replace(/^http/i,"ws"),a.url));e.on=function(a,f){e.addEventListener(a,f,!0)};var k;q.after(e,"onopen",function(a){k=!0},!0);q.after(e,"onclose",function(c){k||
h&&b.replace(e,b.LongPoll(a),!0)},!0);return e};b.replace=function(a,h,e){a.send=m.hitch(h,"send");a.close=m.hitch(h,"close");var b=function(c){(h.addEventListener||h.on).call(h,c,function(c){r.emit(a,c.type,c)},!0)};e&&b("open");l.forEach(["message","close","error"],b)};b.LongPoll=function(a){var b=!1,e=!0,k,c=[],f,n,d={send:function(x){var p=m.delegate(a);p.rawBody=x;clearTimeout(k);var g=e?(e=!1,d.firstRequest(p)):d.transport(p);c.push(g);g.then(function(b){d.readyState=1;c.splice(l.indexOf(c,
g),1);c.length||(k=setTimeout(n,a.interval));b&&f("message",{data:b},g)},function(a){c.splice(l.indexOf(c,g),1);b||(f("error",{error:a},g),c.length||(d.readyState=3,f("close",{wasClean:!1},g)))});return g},close:function(){d.readyState=2;b=!0;var a;for(a=0;a<c.length;a++)c[a].cancel();d.readyState=3;f("close",{wasClean:!0})},transport:a.transport||u.post,args:a,url:a.url,readyState:0,CONNECTING:0,OPEN:1,CLOSING:2,CLOSED:3,on:v.prototype.on,firstRequest:function(a){var b=a.headers||(a.headers={});
b.Pragma="start-long-poll";try{return this.transport(a)}finally{delete b.Pragma}}};f=function(a,b,c){d["on"+a]&&(b.ioArgs=c&&c.ioArgs,b.type=a,r.emit(d,a,b))};n=function(){0==d.readyState&&f("open",{});c.length||d.send()};d.connect=d.on;setTimeout(n);return d};return b});