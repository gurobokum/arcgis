//>>built
define("dojox/charting/plot2d/Bars","dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/has ./CartesianBase ./_PlotEvents ./common dojox/gfx/fx dojox/lang/utils dojox/lang/functional dojox/lang/functional/reversed".split(" "),function(q,A,B,H,I,J,r,K,t,L,M){var N=M.lambda("item.purgeGroup()");return B("dojox.charting.plot2d.Bars",[I,J],{defaultParams:{gap:0,animate:null,enableCache:!1},optionalParams:{minBarSize:1,maxBarSize:1,stroke:{},outline:{},shadow:{},fill:{},filter:{},styleFunc:null,
font:"",fontColor:""},constructor:function(a,c){this.opt=q.clone(q.mixin(this.opt,this.defaultParams));t.updateWithObject(this.opt,c);t.updateWithPattern(this.opt,c,this.optionalParams);this.animate=this.opt.animate;this.renderingOptions={"shape-rendering":"crispEdges"}},getSeriesStats:function(){var a=r.collectSimpleStats(this.series),c;a.hmin-=.5;a.hmax+=.5;c=a.hmin;a.hmin=a.vmin;a.vmin=c;c=a.hmax;a.hmax=a.vmax;a.vmax=c;return a},createRect:function(a,c,d){var e;this.opt.enableCache&&0<a._rectFreePool.length?
(e=a._rectFreePool.pop(),e.setShape(d),c.add(e)):e=c.createRect(d);this.opt.enableCache&&a._rectUsePool.push(e);return e},createLabel:function(a,c,d,e){this.opt.labels&&"outside"==this.opt.labelStyle?this.renderLabel(a,d.x+d.width+this.opt.labelOffset,d.y+d.height/2,this._getLabel(isNaN(c.y)?c:c.y),e,"start"):this.inherited(arguments)},render:function(a,c){if(this.zoom&&!this.isDataDirty())return this.performZoom(a,c);this.dirty=this.isDirty();this.resetEvents();var d;this.dirty&&(A.forEach(this.series,
N),this._eventSeries={},this.cleanGroup(),d=this.getGroup(),L.forEachRev(this.series,function(a){a.cleanGroup(d)}));var e=this.chart.theme,u=this._hScaler.scaler.getTransformerFromModel(this._hScaler),r=this._vScaler.scaler.getTransformerFromModel(this._vScaler),C=Math.max(0,this._hScaler.bounds.lower),v=u(C),t=this.events(),w=this.getBarProperties(),D=this.series.length;A.forEach(this.series,function(a){a.hidden&&D--});for(var E=D,x=this.series.length-1;0<=x;--x){var b=this.series[x];if(this.dirty||
b.dirty){b.cleanGroup();this.opt.enableCache&&(b._rectFreePool=(b._rectFreePool?b._rectFreePool:[]).concat(b._rectUsePool?b._rectUsePool:[]),b._rectUsePool=[]);var y=e.next("bar",[this.opt,b]);if(b.hidden)b.dyn.fill=y.series.fill,b.dyn.stroke=y.series.stroke;else{E--;var F=Array(b.data.length);d=b.group;for(var p=A.some(b.data,function(a){return"number"==typeof a||a&&!a.hasOwnProperty("x")}),h=p?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0,B=p?Math.min(b.data.length,Math.ceil(this._vScaler.bounds.to)):
b.data.length;h<B;++h){var n=b.data[h];if(null!=n){var l=this.getValue(n,h,x,p),g=u(l.y),z=Math.abs(g-v),f,m;this.opt.styleFunc||"number"!=typeof n?(f="number"!=typeof n?[n]:[],this.opt.styleFunc&&f.push(this.opt.styleFunc(n)),f=e.addMixin(y,"bar",f,!0)):f=e.post(y,"bar");if(0<=z&&1<=w.height){g={x:c.l+(l.y<C?g:v),y:a.height-c.b-r(l.x+1.5)+w.gap+w.thickness*(D-E-1),width:z,height:w.height};f.series.shadow&&(m=q.clone(g),m.x+=f.series.shadow.dx,m.y+=f.series.shadow.dy,m=this.createRect(b,d,m).setFill(f.series.shadow.color).setStroke(f.series.shadow),
this.animate&&this._animateBar(m,c.l+v,-z));var k=this._plotFill(f.series.fill,a,c),k=this._shapeFill(k,g),k=this.createRect(b,d,g).setFill(k).setStroke(f.series.stroke);k.setFilter&&f.series.filter&&k.setFilter(f.series.filter);b.dyn.fill=k.getFill();b.dyn.stroke=k.getStroke();if(t){var G={element:"bar",index:h,run:b,shape:k,shadow:m,cx:l.y,cy:l.x+1.5,x:p?h:b.data[h].x,y:p?b.data[h]:b.data[h].y};this._connectEvents(G);F[h]=G}!isNaN(l.py)&&l.py>C&&(g.x+=u(l.py),g.width-=u(l.py));this.createLabel(d,
n,g,f);this.animate&&this._animateBar(k,c.l+v,-z)}}}this._eventSeries[b.name]=F;b.dirty=!1}}else e.skip(),this._reconnectEvents(b.name)}this.dirty=!1;H("dojo-bidi")&&this._checkOrientation(this.group,a,c);return this},getValue:function(a,c,d,e){e?(d="number"==typeof a?a:a.y,a=c):(d=a.y,a=a.x-1);return{y:d,x:a}},getBarProperties:function(){var a=r.calculateBarSize(this._vScaler.bounds.scale,this.opt);return{gap:a.gap,height:a.size,thickness:0}},_animateBar:function(a,c,d){0==d&&(d=1);K.animateTransform(q.delegate({shape:a,
duration:1200,transform:[{name:"translate",start:[c-c/d,0],end:[0,0]},{name:"scale",start:[1/d,1],end:[1,1]},{name:"original"}]},this.animate)).play()}})});