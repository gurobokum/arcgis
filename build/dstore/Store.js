//>>built
define("dstore/Store","dojo/_base/lang dojo/_base/array dojo/aspect dojo/has dojo/when dojo/Deferred dojo/_base/declare ./QueryMethod ./Filter dojo/Evented".split(" "),function(g,r,h,n,k,v,l,m,t,p){function q(a){return function(b,c){var d=this;k(b,function(b){b={target:b};var f=c[1]||{};"beforeId"in f&&(b.beforeId=f.beforeId);d.emit(a,b)});return b}}n.add("object-proto",!!{}.__proto__&&!{}.watch);var u=n("object-proto");return l(p,{constructor:function(a){a&&l.safeMixin(this,a);this.Model&&this.Model.createSubclass&&
(this.Model=this.Model.createSubclass([]).extend({_store:this}));this.storage=new p;var b=this;this.autoEmitEvents&&(h.after(this,"add",q("add")),h.after(this,"put",q("update")),h.after(this,"remove",function(a,d){k(a,function(){b.emit("delete",{id:d[0]})});return a}))},autoEmitEvents:!0,idProperty:"id",queryAccessors:!0,getIdentity:function(a){return a.get?a.get(this.idProperty):a[this.idProperty]},_setIdentity:function(a,b){a.set?a.set(this.idProperty,b):a[this.idProperty]=b},forEach:function(a,
b){var c=this;return k(this.fetch(),function(d){for(var e=0,f;void 0!==(f=d[e]);e++)a.call(b,f,e,c);return d})},on:function(a,b){return this.storage.on(a,b)},emit:function(a,b){b=b||{};b.type=a;try{return this.storage.emit(a,b)}finally{return b.cancelable}},parse:null,stringify:null,Model:null,_restore:function(a,b){var c=this.Model;if(c&&a){var d=c.prototype,e=d._restore;e?a=e.call(a,c,b):u&&b?a.__proto__=d:a=g.delegate(d,a)}return a},create:function(a){return new this.Model(a)},_createSubCollection:function(a){var b=
g.delegate(this.constructor.prototype),c;for(c in this)this._includePropertyInSubCollection(c,b)&&(b[c]=this[c]);return l.safeMixin(b,a)},_includePropertyInSubCollection:function(a,b){return!(a in b)||b[a]!==this[a]},queryLog:[],filter:new m({type:"filter",normalizeArguments:function(a){var b=this.Filter;return a instanceof b?[a]:[new b(a)]}}),Filter:t,sort:new m({type:"sort",normalizeArguments:function(a,b){var c;"function"===typeof a?c=[a]:(c=a instanceof Array?a.slice():"object"===typeof a?[].slice.call(arguments):
[{property:a,descending:b}],c=r.map(c,function(a){a=g.mixin({},a);a.descending=!!a.descending;return a}),c=[c]);return c}}),select:new m({type:"select"}),_getQuerierFactory:function(a){return this["_create"+(a[0].toUpperCase()+a.substr(1))+"Querier"]}})});