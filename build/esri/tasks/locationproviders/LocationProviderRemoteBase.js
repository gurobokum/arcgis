//>>built
define("esri/tasks/locationproviders/LocationProviderRemoteBase","../../declare dojo/_base/array dojo/Deferred dojo/promise/all ../../graphic ./LocationProviderBase".split(" "),function(q,r,n,t,x,u){function v(a,e){function f(){if(w>c){var d=b.shift();d&&g(d.args,d.dfd)}}function g(d,b){c++;var g=e.apply(a,d);g.always(function(){c--;f()});g.then(b.resolve,b.reject,b.progress)}var b=[],c=0;return function(){var d=arguments,a=new n;return b.push({args:d,dfd:a}),f(),a.promise}}var w=4;return q("esri.tasks.locationproviders.LocationProviderRemoteBase",
u,{_fields:null,constructor:function(){var a=this._getFieldMapping&&this._getFieldMapping();if(this._fields=[],a)for(var e in a)a.hasOwnProperty(e)&&this._fields.push({inField:a[e],outField:e})},_throttle:function(a){return v(this,a)},_createFeatureLookup:function(a){for(var e={},f=0;f<a.length;f++){var g=a[f],b=this._createKey(g);if(b){var c=e[b];c?c.push(g):e[b]=[g]}}return e},_createKey:function(a,e){for(var f=[],g=e||r.map(this._fields,function(b){return b.inField}),b=0;b<g.length;b++){var c=
a.attributes[g[b]];if(void 0===c||null===c)return;f.push(c)}return f.join("|||")},_locate:function(a,e){var f=new n,g=this,b=[],c=[],d=[],m=this._createFeatureLookup(a),k=function(a){return g._locateBatch(a,e).then(function(a){a&&(b=b.concat(a));f.progress(b)})},k=this._throttle(k),l;for(l in m)if(m.hasOwnProperty(l)){var h=m[l],p=this._createQueryExpression(h[0]);p&&(h={key:l,features:h,expression:p},this._batchWillOverflow(d,h)&&(c.push(k(d)),d=[]),d.push(h))}return d.length&&c.push(k(d)),t(c).then(function(){f.resolve(b)}),
f.promise}})});