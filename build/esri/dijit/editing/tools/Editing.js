//>>built
define("esri/dijit/editing/tools/Editing","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../../../layers/FeatureTemplate ./Edit ./EditingTools ./DropDownToolBase ../../../kernel ../../../lang".split(" "),function(c,f,e,m,n,p,l,q,r,t){c=c([q],{declaredClass:"esri.dijit.editing.tools.Editing",_enabled:!1,deactivate:function(){this._enabled&&(this._enabled=!1,this.inherited(arguments),this._settings.templatePicker.clearSelection())},onItemClicked:function(){this.inherited(arguments);this._activeTool===
this._tools.AUTOCOMPLETE&&(this._settings.editor._drawingTool=n.TOOL_AUTO_COMPLETE_POLYGON)},_activateTool:function(a,b){var d;this.enable(b);for(d in this._tools)this._tools.hasOwnProperty(d)&&(this.dropDown.removeChild(this._tools[d]),!0===this._tools[d]._enabled&&this.dropDown.addChild(this._tools[d]));this._geometryType===b&&!1!==this._activeTool._enabled||(this._activeTool=this._tools[a.toUpperCase()]);this._geometryType=b;this._activeTool.activate();this._activeTool.setChecked(!0);this._updateUI()},
_initializeTool:function(){this.inherited(arguments);this._initializeTools()},_initializeTools:function(){var a,b=this._settings.layers,d=this._settings.editor,c=!1,g=!1,h=!1,k=this._toolTypes=[];e.forEach(b,function(b){a=b.geometryType;c=c||"esriGeometryPoint"===a;g=g||"esriGeometryPolyline"===a;h=h||"esriGeometryPolygon"===a;k=k.concat(e.map(this._getTemplatesFromLayer(b),f.hitch(this,function(a){return d._toDrawTool(a.drawingTool,b)})))},this);b=this._settings.createOptions;c&&this._toolTypes.push("point");
g&&(this._toolTypes=this._toolTypes.concat(b.polylineDrawTools));h&&(this._toolTypes=this._toolTypes.concat(b.polygonDrawTools));this._toolTypes=this._toUnique(this._toolTypes.concat(k))},_toUnique:function(a){var b={};return e.filter(a,function(a){return b[a]?!1:b[a]=!0})},_getTemplatesFromLayer:function(a){var b=a.templates||[];return e.forEach(a.types,function(a){b=b.concat(a.templates)}),e.filter(b,t.isDefined)},_createTools:function(){e.forEach(this._toolTypes,this._createTool,this);this.inherited(arguments)},
_createTool:function(a){var b=f.mixin(l[a],{settings:this._settings,onClick:f.hitch(this,"onItemClicked",l[a].id)});this._tools[a.toUpperCase()]=new p(b)}});return m("extend-esri")&&f.setObject("dijit.editing.tools.Editing",c,r),c});