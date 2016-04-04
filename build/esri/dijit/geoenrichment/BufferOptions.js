//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/BufferOptions.html":'\x3ctable\x3e\n    \x3ctr data-dojo-attach-point\x3d"studyAreaTr"\x3e\n        \x3ctd class\x3d"BufferOptions_StudyAreaLabel"\x3e${nls.studyArea}\x3c/td\x3e\n        \x3ctd\x3e\n            \x3cselect data-dojo-type\x3d"dijit/form/Select"\n                data-dojo-attach-point\x3d"typeSelect"\n                data-dojo-attach-event\x3d"onChange: _typeChange"\n                class\x3d"BufferOptions_TypeSelect"\x3e\n                \x3coption value\x3d"Ring"\x3e${nls.ring}\x3c/option\x3e\n                \x3coption value\x3d"DriveTime"\x3e${nls.driveTime}\x3c/option\x3e\n                \x3coption value\x3d"DriveDistance"\x3e${nls.driveDistance}\x3c/option\x3e\n            \x3c/select\x3e\n        \x3c/td\x3e\n    \x3c/tr\x3e\n    \x3ctr data-dojo-attach-point\x3d"radiusTr"\x3e\n        \x3ctd class\x3d"BufferOptions_RadiusLabel" data-dojo-attach-point\x3d"radiusLabel"\x3e${nls.radius}\x3c/td\x3e\n        \x3ctd class\x3d"BufferOptions_RadiusTd"\x3e\n            \x3cinput data-dojo-type\x3d"esri/dijit/geoenrichment/NumberSpinner"\n                data-dojo-attach-point\x3d"radiusSpinner"\n                data-dojo-props\x3d"intermediateChanges:true"\n                class\x3d"BufferOptions_RadiusSpinner"\n                data-dojo-attach-event\x3d"onChange: _radiusChange" /\x3e\n            \x3cselect data-dojo-type\x3d"dijit/form/Select"\n                data-dojo-attach-point\x3d"unitsSelect"\n                data-dojo-attach-event\x3d"onChange: _unitsChange"\n                class\x3d"BufferOptions_UnitsSelect"\x3e\n            \x3c/select\x3e\n            \x3cspan data-dojo-attach-point\x3d"minutesSpan" style\x3d"display: none;"\x3e${nls.units.esriDriveTimeUnitsMinutes}\x3c/span\x3e\n        \x3c/td\x3e\n    \x3c/tr\x3e\n\x3c/table\x3e\n'}});
define("esri/dijit/geoenrichment/BufferOptions","../../declare dojox/mvc/Templated dojo/text!./templates/BufferOptions.html dojo/i18n!../../nls/jsapi ../../tasks/geoenrichment/RingBuffer ../../tasks/geoenrichment/DriveBuffer ../../tasks/geoenrichment/DriveUnits dijit/form/RadioButton ./NumberSpinner dijit/form/Select".split(" "),function(l,m,n,g,k,h,c){g=g.geoenrichment.dijit.BufferOptions;return l("esri.dijit.geoenrichment.BufferOptions",[m],{templateString:n,nls:g,geomType:"",_distRadius:null,_timeRadius:null,
buildRendering:function(){function a(a){b.push({value:a,label:g.units[a]})}this.inherited(arguments);var b=[];a(c.MILES);a(c.KILOMETERS);a(c.FEET);a(c.METERS);this.unitsSelect.set("options",b);this._updateUI("Ring",1,c.MILES)},_setGeomTypeAttr:function(a){switch(a){case "point":this.radiusTr.style.display=this.studyAreaTr.style.display="";break;case "polyline":this.studyAreaTr.style.display="none";this.radiusTr.style.display="";this.radiusLabel.innerHTML=g.buffer;break;case "polygon":this.radiusTr.style.display=
this.studyAreaTr.style.display="none",this.radiusLabel.innerHTML=g.buffer}this.geomType=a},_getBufferAttr:function(){var a=this._getRadius(),b=this.unitsSelect.get("value");switch(this.typeSelect.get("value")){case "Ring":return new k({radius:a,units:b});case "DriveTime":return new h({radius:a});case "DriveDistance":return new h({radius:a,units:b})}},_setBufferAttr:function(a){if(this._buffer!==a){var b,d=a.radii[0];if(a instanceof k)b="Ring",this._distRadius=d;else{if(!(a instanceof h))throw Error("Unexpected buffer type");
a.units==c.MINUTES?(b="DriveTime",this._timeRadius=d):(b="DriveDistance",this._distRadius=d)}this._updateUI(b,d,a.units)}},_getRadius:function(){switch(this.typeSelect.get("value")){case "Ring":case "DriveDistance":if(this._distRadius)return this._distRadius;break;case "DriveTime":return this._timeRadius||5}switch(this.unitsSelect.get("value")){case c.MILES:return 1;case c.KILOMETERS:return 1;case c.FEET:return 1500;case c.METERS:return 500}},_updateUI:function(a,b,d){a?this.typeSelect.set("value",
a):a=this.typeSelect.get("value");b?this.radiusSpinner.set("value",b):b=this.radiusSpinner.get("value");d?this.unitsSelect.set("value",d):d=this.unitsSelect.get("value");"DriveTime"===a?(this.minutesSpan.style.display="",this.unitsSelect.domNode.style.display="none"):(this.minutesSpan.style.display="none",this.unitsSelect.domNode.style.display="");var e,f;if("DriveTime"===a)e=1,f=300;else switch(a="Ring"===a,d){case c.MILES:e=.25;f=a?1E3:300;break;case c.KILOMETERS:e=.4;f=a?1600:450;break;case c.FEET:e=
1300;f=a?528E4:15E5;break;case c.METERS:e=400,f=a?1609E3:45E4}this.radiusSpinner.set("constraints",{min:e,max:f});e>b?this.radiusSpinner.set("value",e):b>f&&this.radiusSpinner.set("value",f)},_typeChange:function(){this._updateUI(null,this._getRadius(),null)},_unitsChange:function(){this._updateUI(null,null,null);this._onChange()},_radiusChange:function(){if(this.radiusSpinner.isValid()){var a=this.radiusSpinner.get("value");switch(this.typeSelect.get("value")){case "Ring":case "DriveDistance":this._distRadius=
a;break;case "DriveTime":this._timeRadius=a}this._onChange()}else this._onError()},_onChange:function(){this.onChange()},onChange:function(){},_onError:function(){this.onError()},onError:function(){}})});