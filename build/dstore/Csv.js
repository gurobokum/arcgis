//>>built
define("dstore/Csv",["dojo/_base/lang","dojo/_base/declare"],function(r,t){function u(c,h){var k={},b=c.length,a;for(a=0;a<b;a++)k[c[a]]=h[a];return k}var v=/^\s*"([\S\s]*)"\s*$/,w=/""/g,x=/"/g;return t(null,{fieldNames:null,delimiter:",",newline:"\r\n",trim:!1,parse:function(c){var h=[];c=c.split(this.newline);var k=this.fieldNames,b=0,a=[],e="",d="",f,g,l,m,n,p,q;n=0;l=c.length;a:for(;n<l;n++)if(r.trim(c[n])){f=c[n].split(this.delimiter);p=0;for(m=f.length;p<m;p++){g=f[p];q=-1;e+=d+g;for(d="";0<=
(q=g.indexOf('"',q+1));)b++;if(0===b%2){if(0<b)if(b=v.exec(e))a.push(b[1].replace(w,'"'));else{console.warn("Csv: discarding row with invalid value: "+e);a=[];e="";b=0;continue a}else a.push(this.trim||!k?r.trim(e):e);e="";b=0}else d=this.delimiter}0===b?(k?h.push(u(k,a)):k=this.fieldNames=a,a=[]):d=this.newline}return h},toCsv:function(c){return this.stringify(this.data,c)},stringify:function(c,h){h=h||{};var k=h.alwaysQuote,b=this.fieldNames,a=this.delimiter,e=this.newline,d="",f,g,l,m;for(f=-1;f<
c.length;f++)for(-1<f&&(d+=e),g=0;g<b.length;g++)l=0>f?b[g]:c[f][b[g]],m=k||0<=l.indexOf('"')||0<=l.indexOf(a),d+=(0<g?a:"")+(m?'"'+l.replace(x,'""')+'"':l);h.trailingNewline&&(d+=e);return d}})});