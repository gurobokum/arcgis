//>>built
define("esri/styles/heatmap",["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],function(e,m,q,r,t){function f(c,a){return e.map(c,function(b){b=new t(b);return null!=a&&(b.a=a),b})}var n={v1:"#85c1c8 #90a1be #9c8184 #a761aa #af4980 #b83055 #c0182a #c80000 #d33300 #de6600 #e99900 #f4cc00 #ffff00".split(" "),v2:"#f3e4e5 #e4becb #d498b2 #c57298 #b95685 #ae3972 #a21d5e #96004b #ab006f #c00093 #d500b7 #ea00db #ff00ff".split(" "),v3:"#d4e3f5 #b3c5f7 #93a6fa #7288fc #566ffd #3955fe #1d3bfe #0022ff #334ecc #667a99 #99a766 #ccd333 #ffff00".split(" "),
v4:"#0022c8 #2b1ca7 #551785 #801164 #aa0b43 #d50621 #ff0000 #ff3900 #ff7100 #ffaa00 #ffc655 #ffe3aa #ffffff".split(" ")},h={"default":{name:"default",label:"Default",description:"Default theme for visualizing features using heatmap.",basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm".split(" "),dark:["satellite","hybrid","dark-gray"]},schemes:{light:{primary:"v1",secondary:["v2","v3","v4"]},dark:{primary:"v4",secondary:["v1","v2","v3"]}}}},l={};(function(){var c,a,b,d,
g,e,k,f;for(c in h)for(d in a=h[c],b=a.basemapGroups,g=l[c]={basemaps:[].concat(b.light).concat(b.dark)},b)for(e=b[d],k=0;k<e.length;k++)f=e[k],a.schemes&&(g[f]=a.schemes[d])})();var p={getAvailableThemes:function(c){var a,b,d,g=[];for(a in h)b=h[a],d=l[a],c&&-1===e.indexOf(d.basemaps,c)||g.push({name:b.name,label:b.label,description:b.description,basemaps:d.basemaps.slice(0)});return g},getSchemes:function(c){var a,b,d=c.basemap;c=l[c.theme];return a=c&&c[d],a&&(b={primaryScheme:{colors:f(n[a.primary]),
opacity:.7},secondarySchemes:e.map(a.secondary,function(a){return{colors:f(n[a]),opacity:.7}})}),b},cloneScheme:function(c){var a;return c&&(a=m.mixin({},c),a.colors=f(a.colors)),a}};return q("extend-esri")&&m.setObject("styles.heatmap",p,r),p});