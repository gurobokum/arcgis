//>>built
define("dojox/treemap/_utils",["dojo/_base/array"],function(n){var p={group:function(c,f,d){var e={children:[]},l=function(b,a){b.__treeValue||(b.__treeValue=0);b.__treeValue+=d(a);return b};n.forEach(c,function(b){var a=e;n.forEach(f,function(c,d){var e=c(b),k=p.find(a.children,function(a){return a.__treeName==e});k||a.children.push(k={__treeName:e,__treeID:e+Math.random(),children:[]});k=l(k,b);d!=f.length-1?a=k:k.children.push(b)});a=l(a,b)});return e},find:function(c,f){for(var d=c.length,e=0;e<
d;++e)if(f.call(null,c[e]))return c[e];return null},solve:function(c,f,d,e,l){var b=p.initElements(c,e);e=b.total;var b=b.elements,a=e;if(0==e){if(0==b.length)return{items:c,rects:[],total:0};n.forEach(b,function(a){a.size=a.sizeTmp=100});e=100*b.length}b.sort(function(a,b){return b.size-a.size});p._compute(f,d,b,e);b.sort(function(a,b){return a.index-b.index});c={};c.elements=b;c.size=a;rects=n.map(b,function(a){return{x:l?f-a.x-a.width:a.x,y:a.y,w:a.width,h:a.height}});c.rectangles=rects;return c},
initElements:function(c,f){var d=0;return{elements:n.map(c,function(c,l){var b=null!=f?f(c):0;if(0>b)throw Error("item size dimension must be positive");d+=b;return{index:l,size:b,sizeTmp:b}}),total:d}},_compute:function(c,f,d,e){var l=c*f/e/100;n.forEach(d,function(a){a.sizeTmp*=l});for(var b=e=0,a=2147483647,g,m=0,h=0,k=c,r=f,q=k>r;b!=d.length;)if(g=p._trySolution(d,e,b,q,k,r),g>a||1>g){k=g=0;for(a=e;a<b;a++)d[a].x=m+g,d[a].y=h+k,q?k+=d[a].height:g+=d[a].width;q?m+=d[e].width:h+=d[e].height;k=c-
m;r=f-h;q=k>r;b=e=b;a=2147483647}else{for(a=e;a<=b;a++)d[a].width=d[a].widthTmp,d[a].height=d[a].heightTmp;a=g;b++}f=c=0;for(a=e;a<b;a++)d[a].x=m+c,d[a].y=h+f,q?f+=d[a].height:c+=d[a].width},_trySolution:function(c,f,d,e,l,b){for(var a=0,g=0,m=g=0,h=f;h<=d;h++)a+=c[h].sizeTmp;e?0==b?g=m=0:(g=a/b*100,m=b):0==l?g=m=0:(m=a/l*100,g=l);for(h=f;h<=d;h++)e?(c[h].widthTmp=g,c[h].heightTmp=0==a?0:m*c[h].sizeTmp/a):(c[h].widthTmp=0==a?0:g*c[h].sizeTmp/a,c[h].heightTmp=m);g=Math.max(c[d].heightTmp/c[d].widthTmp,
c[d].widthTmp/c[d].heightTmp);return void 0==g?1:g}};return p});