//>>built
define("esri/layers/StreamTrackManager","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../graphic ../geometry/Polyline ./TrackManager".split(" "),function(q,t,l,u,v,w,x,y){q=q([y],{declaredClass:"esri.layers._StreamTrackManager",constructor:function(){this.inherited(arguments)},initialize:function(){this.inherited(arguments)},addFeatures:function(a,d){function b(c,g){var b,a,e,k;f[c]||(f[c]=[]);b=f[c];0<n&&(g.length>n&&g.splice(0,g.length-n),e=g.length+b.length,e>n&&(a=b.splice(0,
e-n)));e=g.length;for(k=0;e>k;k+=1)b.push(g[k]);return{deletes:a,adds:g}}var f,c,e,n,p,k,r={},h={};if(d)return this.inherited(arguments),r;f=this.trackMap;c=this.layer;e=c._trackIdField;n=c.maximumTrackPoints||0;l.forEach(a,function(b){var c=b.attributes[e];b.visible&&(h[c]||(h[c]=[]),h[c].push(b))});for(k in h)h.hasOwnProperty(k)&&(p=b(k,h[k]),r[k]=p);return r},removeFeatures:function(a){var d=[],b=this.layer.objectIdField,f=this.layer._trackIdField;a&&(l.forEach(a,function(c){var e,a,p,k;if(a=c.attributes[f],
e=c.attributes[b],p=this.trackMap[a])for(c=0;c<p.length;c+=1)if(k=p[c],k.attributes[b]===e){this.trackMap[a].splice(c,1);-1===l.indexOf(a)&&d.push(a);break}},this),0<a.length&&this.refreshTracks(d))},drawTracks:function(a){function d(a){var e,h,d,g,m,l;h=(g=b[a])&&1<g.length;if(m=n.trackLineMap[a],m&&!h&&(p.remove(m),delete n.trackLineMap[a],m=null),!h)return!1;h=[];for(e=g.length-1;0<=e;--e)(d=g[e].geometry)&&h.push([d.x,d.y]);g={};g[c]=a;1<h.length&&(m?(l=m.geometry,l.removePath(0),l.addPath(h),
m.setGeometry(l)):(m=new w(new x({paths:[h],spatialReference:f}),null,g),p.add(m),n.trackLineMap[a]=m))}var b,f,c,e,n=this,p=this.container;if(p)if(b=this.trackMap,f=this.map.spatialReference,c=this.layer._trackIdField,a)l.forEach(a,function(a){d(a)});else for(e in b)b.hasOwnProperty(e)&&d(e)},refreshTracks:function(a){function d(a){var b,d;a=f[a]||[];b=a.length;for(d=0;b>d;d++)c._repaint(a[d],null,!0)}var b,f=this.trackMap,c=this.layer;c._getRenderer();if(this.drawTracks(a),a)l.forEach(a,function(a){d(a)});
else for(b in f)f.hasOwnProperty(b)&&d(b)},getLatestObservations:function(){var a,d,b=this.trackMap,f=[];for(a in b)b.hasOwnProperty(a)&&(d=b[a],f.push(d[d.length-1]));return f},destroy:function(){this.inherited(arguments);this.trackLineMap=null}});return u("extend-esri")&&t.setObject("layers._StreamTrackManager",q,v),q});