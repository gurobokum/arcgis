//>>built
define("esri/renderers/Renderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojox/gfx/_base ../kernel ../Color ../arcade/arcade".split(" "),function(v,k,g,B,x,I,r,u){var z=Math.PI;v=v(null,{declaredClass:"esri.renderer.Renderer",constructor:function(a){if(this._cache={},a&&!a.declaredClass){if(this.rotationInfo=a.rotationInfo,!this.rotationInfo){var b=a.rotationType,c=a.rotationExpression;(b||c)&&(this.rotationInfo={type:b,expression:c})}this.setRotationInfo(this.rotationInfo);
this.setSizeInfo(this._readSizeInfo(a.sizeInfo));this.setColorInfo(this._readColorInfo(a.colorInfo));this.setOpacityInfo(this._readOpacityInfo(a.transparencyInfo));this.setVisualVariables(this._readVariables(a.visualVariables));this.setAuthoringInfo(a.authoringInfo)}this.getSymbol=k.hitch(this,this.getSymbol)},getSymbol:function(){},_readSizeInfo:function(a){if(a){var b=a.minSize,c=a.maxSize;b&&"number"==typeof b&&(a.minSize=x.pt2px(b));c&&"number"==typeof c&&(a.maxSize=x.pt2px(c))}return a},_readColorInfo:function(a){return a&&
(g.forEach(a.colors,function(b,c){k.isArray(b)&&(a.colors[c]=r.toDojoColor(b))}),g.forEach(a.stops,function(b,c){b.color&&k.isArray(b.color)&&(a.stops[c].color=r.toDojoColor(b.color))})),a},_readOpacityInfo:function(a){var b;return a&&(b=k.mixin({},a),b.transparencyValues&&(b.opacityValues=g.map(b.transparencyValues,function(a){return 1-a/100}),delete b.transparencyValues),b.stops&&(b.stops=g.map(b.stops,function(a){return a=k.mixin({},a),a.opacity=1-a.transparency/100,delete a.transparency,a}))),
b},_readVariables:function(a){return a&&(a=g.map(a,function(a){return"sizeInfo"===a.type?a=this._readSizeInfo(a):"colorInfo"===a.type?a=this._readColorInfo(a):"transparencyInfo"===a.type&&(a=this._readOpacityInfo(a),a.type="opacityInfo"),a},this)),a},setAuthoringInfo:function(a){this.authoringInfo=a},setRotationInfo:function(a){if(a=this.rotationInfo="string"==typeof a?{field:a}:a){if(a.expression&&!k.isFunction(a.expression)&&!a.field){var b=a.expression.match(this.rotationRE);b&&b[1]&&(a.field=
b[1])}a.rotationType=a.type}return this},rotationRE:/^\[([^\]]+)\]$/i,getRotationAngle:function(a,b){var c=this._getVarInfo(b&&b.rotationInfo,"rotationInfo").variable,d="arithmetic"===this._getRotationType(c),c=c.field,f=a.attributes,h=0;return c&&(k.isFunction(c)?h=c.apply(this,arguments):f&&(h=f[c]||0),h=(h+(d?-90:0))*(d?-1:1)),h},_getRotationType:function(a){return a&&("rotationInfo"===a.type?a.rotationType:a.type)},setVisualVariables:function(a){var b=this._cache;g.forEach(this.visualVariables,
function(a,d){b.hasOwnProperty(d)&&(b[d]=null)},this);this.visualVariables=a;return g.some(a,function(a){return!!a.target})&&a.sort(function(a,b){return a.target===b.target?0:a.target?1:-1}),g.forEach(a,function(a,d){"colorInfo"===a.type?b[d]=this._processColorInfo(a):"opacityInfo"===a.type?b[d]=this._processOpacityInfo(a):"sizeInfo"===a.type&&(b[d]=this._processSizeInfo(a))},this),this},getVisualVariableValues:function(a){var b,c=this.visualVariables;return c&&(b=g.map(c,function(b){var c;switch(b.type){case "sizeInfo":c=
this.getSize(a,{sizeInfo:b});break;case "colorInfo":c=this.getColor(a,{colorInfo:b});break;case "opacityInfo":c=this.getOpacity(a,{opacityInfo:b});break;case "rotationInfo":c=this.getRotationAngle(a,{rotationInfo:b})}return{variable:b,value:c}},this)),b},hasVisualVariables:function(a,b){return a?!!this.getVisualVariablesForType(a,b):!!(this.getVisualVariablesForType("sizeInfo",b)||this.getVisualVariablesForType("colorInfo",b)||this.getVisualVariablesForType("opacityInfo",b)||this.getVisualVariablesForType("rotationInfo",
b))},getVisualVariablesForType:function(a,b){var c,d=this.visualVariables;return!b&&this[a]?("rotationInfo"===a&&(this[a].rotationType=this[a].type),c=[this[a]]):d&&(c=g.filter(d,function(c){return c.type===a&&("string"==typeof b?c.target===b:!1===b?!c.target:!0)}),c&&0===c.length&&(c=void 0)),c},setSizeInfo:function(a){return this.sizeInfo=this.proportionalSymbolInfo=a,this._cache.sizeInfo=this._processSizeInfo(a),this},_processSizeInfo:function(a){return a&&{root:this._createCache(a),minSize:this._createCache(a.minSize),
maxSize:this._createCache(a.maxSize)}},_getVarInfo:function(a,b){var c;return a&&a.type===b?(c=g.indexOf(this.visualVariables,a),a=this.visualVariables[c]):(c=b,a=this[b]),{variable:a,cacheKey:c}},setProportionalSymbolInfo:function(a){return this.setSizeInfo(a),this},getSize:function(a,b){var c=this._getVarInfo(b&&b.sizeInfo,"sizeInfo"),d=c.variable,c=this._cache[c.cacheKey],f=null;if(d)var h=d.minSize,f=d.maxSize,h="object"==typeof h&&h?this._getSize(a,h,c&&c.minSize,b):h,f="object"==typeof f&&f?
this._getSize(a,f,c&&c.maxSize,b):f,f=this._getSize(a,d,c&&c.root,b,[h,f]);return f},_getSize:function(a,b,c,d,f){var h=a.attributes,l=b.field,g=b.expression,p=b.stops,e=0,r=c&&c.exprTree,v=c&&c.ipData,C="number"==typeof a,m=C?a:null;if(l||g||r){var t,x=d&&d.scale,n=f?f[0]:b.minSize,q=f?f[1]:b.maxSize,w=b.minDataValue,u=b.maxDataValue,F=b.valueUnit||"unknown",D=b.valueRepresentation,B=b.scaleBy,G=b.normalizationField,A=h?parseFloat(h[G]):void 0,y=d&&d.shape;if(g?m="view.scale"===g.toLowerCase()?x:
null:"number"!=typeof m&&(r?m=this._executeExpr(r,this._createExprContext(a)):k.isFunction(l)?m=l.apply(this,arguments):h&&(m=h[l])),null==m||G&&!C&&(isNaN(A)||0===A))return null;if(isNaN(A)||C||(m/=A),p){var E,H;t=this._lookupData(m,v);q=t[0];n=t[1];q===n?e=p[q].size:(E=p[q].size,H=p[n].size,e=E+(H-E)*t[2])}else null!=n&&null!=q&&null!=w&&null!=u?w>=m?e=n:m>=u?e=q:(t=(m-w)/(u-w),"area"===B&&y)?(p=(e="circle"===y)?z*Math.pow(n/2,2):n*n,q=e?z*Math.pow(q/2,2):q*q,p+=t*(q-p),e=e?2*Math.sqrt(p/z):Math.sqrt(p)):
e=n+t*(q-n):"unknown"===F?null!=n&&null!=w&&(n&&w?(t=m/w,e="circle"===y?2*Math.sqrt(t*Math.pow(n/2,2)):"square"===y||"diamond"===y||"image"===y?Math.sqrt(t*Math.pow(n,2)):t*n):e=m+(n||w),e=n>e?n:e,null!=q&&e>q&&(e=q)):(p=(d&&d.resolution?d.resolution:1)*this._meterIn[F],"area"===D?(e=Math.sqrt(m/z)/p,e*=2):(e=m/p,("radius"===D||"distance"===D)&&(e*=2)),null!=n&&n>e&&(e=n),null!=q&&e>q&&(e=q))}else e=p&&p[0]&&p[0].size,null==e&&(e=b.minSize);return isNaN(e)?0:e},getSizeRangeAtScale:function(a,b){var c,
d=this._getVarInfo(a,"sizeInfo"),f=this._cache[d.cacheKey],h={scale:b};if(a=d.variable,a&&b){var l=a.minSize,d=a.maxSize,l="object"==typeof l&&l?this._getSize({},l,f&&f.minSize,h):l,f="object"==typeof d&&d?this._getSize({},d,f&&f.maxSize,h):d;null==l&&null==f||(c={minSize:l,maxSize:f})}return c},setColorInfo:function(a){return this.colorInfo=a,this._cache.colorInfo=this._processColorInfo(a),this},_createCache:function(a){return{ipData:this._interpolateData(a),exprTree:this._parseExpr(a&&a.valueExpression,
{vars:{feature:"any"}})}},_processColorInfo:function(a){return a&&(g.forEach(a.colors,function(b,c){k.isArray(b)&&(a.colors[c]=new r(b))}),g.forEach(a.stops,function(b,c){b.color&&k.isArray(b.color)&&(a.stops[c].color=new r(b.color))})),this._createCache(a)},getColor:function(a,b){var c=this._getVarInfo(b&&b.colorInfo,"colorInfo");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey])},setOpacityInfo:function(a){return this.opacityInfo=a,this._cache.opacityInfo=this._processOpacityInfo(a),
this},_processOpacityInfo:function(a){return this._createCache(a)},getOpacity:function(a,b){var c=this._getVarInfo(b&&b.opacityInfo,"opacityInfo");return this._getColorComponent(a,c.variable,this._cache[c.cacheKey],!0)},_getColorComponent:function(a,b,c,d,f){var h,l=a.attributes,g=b&&b.field,p="number"==typeof a,e=p?a:null,r=c&&c.exprTree,u=c&&c.ipData;if(g||r){var v=b.normalizationField,m=l?parseFloat(l[v]):void 0;"number"!=typeof e&&(r?e=this._executeExpr(r,this._createExprContext(a)):k.isFunction(g)?
e=g.apply(this,arguments):l&&(e=l[g]));null==e||v&&!p&&(isNaN(m)||0===m)||(isNaN(m)||p||(e/=m),h=d?this._getOpacity(e,b,u):this._getColor(e,b,u))}else b&&(l=b.stops,d?(h=l&&l[0]&&l[0].opacity,null==h&&(h=b.opacityValues&&b.opacityValues[0])):h=l&&l[0]&&l[0].color||b.colors&&b.colors[0]);return f&&(f.data=e,f.value=h),f||h},_interpolateData:function(a){var b;if(a)if(a.colors||a.opacityValues){var c=(a.colors||a.opacityValues).length,d=a.minDataValue,f=(a.maxDataValue-d)/(c-1);b=[];for(a=0;c>a;a++)b[a]=
d+a*f}else a.stops&&(b=g.map(a.stops,function(a){return a.value}));return b},_getOpacity:function(a,b,c){var d;a=this._lookupData(a,c);if(b=b||this.opacityInfo,a){var f,h;c=a[0];var g=a[1];c===g?d=this._getOpacValue(b,c):(f=this._getOpacValue(b,c),h=this._getOpacValue(b,g),d=f+(h-f)*a[2])}return d},_getOpacValue:function(a,b){return a.opacityValues?a.opacityValues[b]:a.stops[b].opacity},_getColor:function(a,b,c){var d;a=this._lookupData(a,c);if(b=b||this.colorInfo,a)d=a[0],c=a[1],d=d===c?this._getColorObj(b,
d):r.blendColors(this._getColorObj(b,d),this._getColorObj(b,c),a[2]);return d},_getColorObj:function(a,b){return a.colors?a.colors[b]:a.stops[b].color},_lookupData:function(a,b){var c;if(b){var d=0,f=b.length-1;g.some(b,function(b,c){return b>a?(f=c,!0):(d=c,!1)});c=[d,f,(a-b[d])/(b[f]-b[d])]}return c},_createExprContext:function(a){return{vars:{$feature:u.constructFeature(a)}}},_parseExpr:function(a,b){return a?u.parseScript(a,b):null},_executeExpr:function(a,b){return u.executeScript(a,b,-1)},_meterIn:{inches:39.3701,
feet:3.28084,yards:1.09361,miles:6.21371E-4,"nautical-miles":5.39957E-4,millimeters:1E3,centimeters:100,decimeters:10,meters:1,kilometers:.001,"decimal-degrees":180/20015077},_writeSizeInfo:function(a){if(a){a=k.mixin({},a);var b=a.minSize,c=a.maxSize;b&&(a.minSize="number"==typeof b?x.px2pt(b):k.clone(b));c&&(a.maxSize="number"==typeof c?x.px2pt(c):k.clone(c));(b=a.legendOptions)&&(a.legendOptions=k.mixin({},b),b=b.customValues,b&&(a.legendOptions.customValues=b.slice(0)))}return a},_writeColorInfo:function(a){return a&&
(a=k.mixin({},a),a.colors&&(a.colors=g.map(a.colors,function(a){return r.toJsonColor(a)})),a.stops&&(a.stops=g.map(a.stops,function(a){return a=k.mixin({},a),a.color&&(a.color=r.toJsonColor(a.color)),a}))),a},_writeOpacityInfo:function(a){var b;return a&&(b=k.mixin({},a),b.opacityValues&&(b.transparencyValues=g.map(b.opacityValues,function(a){return 100*(1-a)}),delete b.opacityValues),b.stops&&(b.stops=g.map(b.stops,function(a){return a=k.mixin({},a),a.transparency=100*(1-a.opacity),delete a.opacity,
a})),b.legendOptions&&(b.legendOptions=k.mixin({},b.legendOptions))),b},toJson:function(){var a=this.visualVariables,b=k.clone(this.authoringInfo),c=this.getVisualVariablesForType("rotationInfo",!1),d=(c=c&&c[0])&&c.field,d=c&&(c.expression||d&&(k.isFunction(d)?d:"["+d+"]"));return a&&(a=g.map(a,function(a){return"sizeInfo"===a.type?a=this._writeSizeInfo(a):"colorInfo"===a.type?a=this._writeColorInfo(a):"opacityInfo"===a.type?(a=this._writeOpacityInfo(a),a.type="transparencyInfo"):"rotationInfo"===
a.type&&(a=k.mixin({},a)),a},this)),b&&g.forEach(b.visualVariables,function(a){"opacityInfo"===a.type&&(a.type="transparencyInfo")}),{rotationType:d&&(this._getRotationType(c)||"geographic"),rotationExpression:d,colorInfo:this._writeColorInfo(this.colorInfo),transparencyInfo:this._writeOpacityInfo(this.opacityInfo),sizeInfo:this._writeSizeInfo(this.sizeInfo),visualVariables:a,authoringInfo:b}}});return B("extend-esri")&&k.setObject("renderer.Renderer",v,I),v});