//>>built
define("dojox/store/db/SQL","dojo/_base/declare dojo/Deferred dojo/when dojo/store/util/QueryResults dojo/_base/lang dojo/promise/all".split(" "),function(t,u,l,v,q,m){function r(a){return a&&q.mixin(a,JSON.parse(a.__extra))}var w=/(.*)\*$/;return t([],{constructor:function(a){var e=a.dbConfig;this.database=openDatabase(a.dbName||"dojo-db","1.0","dojo-db",4194304);var f=this.indexPrefix=a.indexPrefix||"idx_",d=a.table||a.storeName;this.table=(a.table||a.storeName).replace(/[^\w]/g,"_");a=[];this.indices=
e.stores[d];this.repeatingIndices={};for(var b in this.indices)this.indices[b].multiEntry&&(this.repeatingIndices[b]=!0);if(!e.available){for(d in e.stores){var g=e.stores[d],h=d.replace(/[^\w]/g,"_"),k=g[this.idProperty],c=["__extra",this.idProperty+" "+(k&&k.autoIncrement?"INTEGER PRIMARY KEY AUTOINCREMENT":"PRIMARY KEY")],k=[this.idProperty];for(b in g)b!=this.idProperty&&c.push(b);a.push(this.executeSql("CREATE TABLE IF NOT EXISTS "+h+" ("+c.join(",")+")"));for(b in g)b!=this.idProperty&&(g[b].multiEntry?
(k.push(b),c=h+"_repeating_"+b,a.push(this.executeSql("CREATE TABLE IF NOT EXISTS "+c+" (id,value)")),a.push(this.executeSql("CREATE INDEX IF NOT EXISTS idx_"+c+"_id ON "+c+"(id)")),a.push(this.executeSql("CREATE INDEX IF NOT EXISTS idx_"+c+"_value ON "+c+"(value)"))):(a.push(this.executeSql("ALTER TABLE "+h+" ADD "+b).then(null,function(){})),!1!==g[b].indexed&&a.push(this.executeSql("CREATE INDEX IF NOT EXISTS "+f+h+"_"+b+" ON "+h+"("+b+")"))))}e.available=m(a)}this.available=e.available},idProperty:"id",
selectColumns:["*"],get:function(a){return l(this.executeSql("SELECT "+this.selectColumns.join(",")+" FROM "+this.table+" WHERE "+this.idProperty+"\x3d?",[a]),function(a){return 0<a.rows.length?r(a.rows.item(0)):void 0})},getIdentity:function(a){return a[this.idProperty]},remove:function(a){return this.executeSql("DELETE FROM "+this.table+" WHERE "+this.idProperty+"\x3d?",[a])},identifyGeneratedKey:!0,add:function(a,e){var f=[],d=[],b=[],g={},h=[],k=this,c;for(c in a)a.hasOwnProperty(c)&&(c in this.indices||
c==this.idProperty?this.repeatingIndices[c]?h.push(function(b){return m(a[c].map(function(a){return k.executeSql("INSERT INTO "+k.table+"_repeating_"+c+" (value, id) VALUES (?, ?)",[a,b])}))}):(b.push(c),d.push("?"),f.push(a[c])):g[c]=a[c]);b.push("__extra");d.push("?");f.push(JSON.stringify(g));var n=this.idProperty;this.identifyGeneratedKey&&(f.idColumn=n);d="INSERT INTO "+this.table+" ("+b.join(",")+") VALUES ("+d.join(",")+")";return l(this.executeSql(d,f),function(c){var b=c.insertId;a[n]=b;
return m(h.map(function(a){return a(b)})).then(function(){return b})})},put:function(a,e){e=e||{};var f=e.id||a[this.idProperty],d=e.overwrite;if(void 0===d){var b=this;return this.get(f).then(function(c){return(e.overwrite=!!c)?(e.overwrite=!0,b.put(a,e)):b.add(a,e)})}if(!d)return b.add(a,e);var d="UPDATE "+this.table+" SET ",g=[],h=[],k={},c;for(c in a)if(a.hasOwnProperty(c))if(c in this.indices||c==this.idProperty)if(this.repeatingIndices[c]){this.executeSql("DELETE FROM "+this.table+"_repeating_"+
c+" WHERE id\x3d?",[f]);for(var n=a[c],p=0;p<n.length;p++)this.executeSql("INSERT INTO "+this.table+"_repeating_"+c+" (value, id) VALUES (?, ?)",[n[p],f])}else h.push(c+"\x3d?"),g.push(a[c]);else k[c]=a[c];h.push("__extra\x3d?");g.push(JSON.stringify(k));d+=h.join(",")+" WHERE "+this.idProperty+"\x3d?";g.push(a[this.idProperty]);return l(this.executeSql(d,g),function(a){return f})},query:function(a,e){function f(a){var c=[],b;for(b in a){var e=function(a){var b=a&&a.match&&a.match(w);if(b)return k.push(b[1]+
"%")," LIKE ?";k.push(a);return"\x3d?"},d=a[b];if(d)if(d.contains){var f=g.table+"_repeating_"+b;c.push(d.contains.map(function(a){return g.idProperty+" IN (SELECT id FROM "+f+" WHERE value"+e(a)+")"}).join(" AND "));continue}else if("object"==typeof d&&("from"in d||"to"in d)){var l=d.excludeFrom?"\x3e":"\x3e\x3d",m=d.excludeTo?"\x3c":"\x3c\x3d";"from"in d?(k.push(d.from),"to"in d?(k.push(d.to),c.push("("+h+"."+b+l+"? AND "+h+"."+b+m+"?)")):c.push(h+"."+b+l+"?")):(k.push(d.to),c.push(h+"."+b+m+"?"));
continue}c.push(h+"."+b+e(d))}return c.join(" AND ")}e=e||{};var d="FROM "+this.table,b,g=this,h=this.table,k=[];a.forEach?(b=a.map(f).join(") OR ("))&&(b="("+b+")"):b=f(a);b&&(b=" WHERE "+b);e.sort&&(b+=" ORDER BY "+e.sort.map(function(a){return h+"."+a.attribute+" "+(a.descending?"desc":"asc")}));var c=b;e.count&&(c+=" LIMIT "+e.count);e.start&&(c+=" OFFSET "+e.start);c=q.delegate(this.executeSql("SELECT * "+d+c,k).then(function(a){for(var b=[],c=0;c<a.rows.length;c++)b.push(r(a.rows.item(c)));
return b}));g=this;c.total={then:function(a,c){return g.executeSql("SELECT COUNT(*) "+d+b,k).then(function(a){return a.rows.item(0)["COUNT(*)"]}).then(a,c)}};return new v(c)},executeSql:function(a,e){var f=new u,d,b;this.database.transaction(function(g){g.executeSql(a,e,function(a,b){f.resolve(d=b)},function(a,d){f.reject(b=d)})});if(d)return d;if(b)throw b;return f.promise}})});