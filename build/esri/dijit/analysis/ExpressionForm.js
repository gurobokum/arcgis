//>>built
require({cache:{"url:esri/dijit/analysis/templates/ExpressionForm.html":'\x3cdiv class\x3d"esriAnalysis esriExpressionForm"\x3e\n  \x3cdiv class\x3d"esriFormError esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\x3c/div\x3e\n  \x3c!--\x3cdiv class\x3d"clear" style\x3d"height:1em;"\x3e\x3c/div\x3e--\x3e\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" class\x3d"esriSimpleForm" data-dojo-attach-point\x3d"_expressionForm"\x3e\n    \x3ctable class\x3d"esriFormTable" style\x3d"border: 1px solid #929497;background-color: #F7F8F8 !important;"\x3e \n      \x3ctbody\x3e\n        \x3ctr data-dojo-attach-point\x3d"_firstRow" \x3e\n          \x3ctd style\x3d"width:75%"\x3e\n            \x3cselect class\x3d"" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;table-layout:fixed;" data-dojo-attach-event\x3d"onChange:_handleFirstOperandChange" data-dojo-attach-point\x3d"_firstOperandSelect"\x3e\n            \x3c/select\x3e\n          \x3c/td\x3e\n          \x3ctd style\x3d"width:25%"\x3e\n            \x3cselect class\x3d"" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleOperatorChange" style\x3d"width:100%;table-layout:fixed;" data-dojo-attach-point\x3d"_operatorSelect"\x3e\n              \x3coption value\x3d"where"\x3e${i18n.where}\x3c/option\x3e\n              \x3coption value\x3d"intersects"\x3e${i18n.intersects}\x3c/option\x3e\n              \x3coption value\x3d"notIntersects"\x3e${i18n.notIntersects}\x3c/option\x3e\n              \x3coption value\x3d"withinDistance"\x3e${i18n.withinDistance}\x3c/option\x3e\n              \x3coption value\x3d"notWithinDistance"\x3e${i18n.notWithinDistance}\x3c/option\x3e\n              \x3coption value\x3d"contains"\x3e${i18n.contains}\x3c/option\x3e\n              \x3coption value\x3d"notContains"\x3e${i18n.notContains}\x3c/option\x3e\n              \x3coption value\x3d"within"\x3e${i18n.within}\x3c/option\x3e\n              \x3coption value\x3d"notWithin"\x3e${i18n.notWithin}\x3c/option\x3e\n              \x3c!--\x3coption value\x3d"contains"\x3e${i18n.contains}\x3c/option\x3e\n              \x3coption value\x3d"notContains"\x3e${i18n.notContains}\x3c/option\x3e--\x3e\n              \x3c!--\x3coption value\x3d"within"\x3e${i18n.within}\x3c/option\x3e\n              \x3coption value\x3d"notWithin"\x3e${i18n.notWithin}\x3c/option\x3e--\x3e\n              \x3c!--\x3coption value\x3d"identical"\x3e${i18n.identical}\x3c/option\x3e\n              \x3coption value\x3d"notIdentical"\x3e${i18n.notIdentical}\x3c/option\x3e\n              \x3coption value\x3d"touches"\x3e${i18n.touches}\x3c/option\x3e\n              \x3coption value\x3d"notTouches"\x3e${i18n.notTouches}\x3c/option\x3e--\x3e\n              \x3c!--\x3coption value\x3d"crossesOutline"\x3e${i18n.crossesOutline}\x3c/option\x3e\n              \x3coption value\x3d"notCrossesOutline"\x3e${i18n.notCrossesOutline}\x3c/option\x3e--\x3e\n            \x3c/select\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr data-dojo-attach-point\x3d"_secondRow" style\x3d"display:none;"\x3e\n          \x3ctd data-dojo-attach-point\x3d"_secondOperandTd" colspan\x3d"2"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"_secondExpressionDiv" style\x3d"display:none; padding-bottom:0.25em;"\x3e\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleDistanceInputChange" data-dojo-props\x3d"intermediateChanges:true" data-dojo-attach-point\x3d"_distanceInput" style\x3d"width:20%;"\x3e\x3c/input\x3e\n              \x3cselect data-dojo-type\x3d"dijit/form/Select"  data-dojo-attach-point\x3d"_distanceUnitsSelect"  style\x3d"width:20%;table-layout:fixed;"\x3e\n                \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\n                \x3coption value\x3d"Yards"\x3e${i18n.yards}\x3c/option\x3e\n                \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\n                \x3coption type\x3d"separator"\x3e\x3c/option\x3e\n                \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\n                \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\n                \x3coption value\x3d"NauticalMiles"\x3e${i18n.nautMiles}\x3c/option\x3e\n              \x3c/select\x3e\n              \x3clabel\x3e from \x3c/label\x3e\n            \x3c/div\x3e\n            \x3cselect class\x3d"" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:75%;table-layout:fixed;" data-dojo-attach-point\x3d"_secondOperandSelect" data-dojo-attach-event\x3d"onChange:_handleSecondOperandChange"\x3e\n            \x3c/select\x3e\n            \x3cdiv data-dojo-attach-point\x3d"_attrFilterDiv" style\x3d"display:none;"\x3e\x3c/div\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n      \x3c/tbody\x3e\n    \x3c/table\x3e\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing closeIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\n        \x3cimg src\x3d\'images/close.gif\' border\x3d\'0\'/\x3e \n      \x3c/a\x3e\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\n    \x3c/div\x3e    \n    \x3cdiv style\x3d"clear:both;"\x3e\x3c/div\x3e\n    \x3cdiv  class\x3d"esriFloatTrailing" style\x3d"padding: 10px 5px;"\x3e\n      \x3cdiv data-dojo-type\x3d"dijit/form/Button"  class\x3d"${_addBtnClass}" data-dojo-attach-point\x3d"_addBtn" data-dojo-attach-event\x3d"onClick:_handleAddButtonClick"\x3e\n        ${i18n.add}\n      \x3c/div\x3e\n       \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriLeadingMargin05" data-dojo-attach-point\x3d"_closeBtn" data-dojo-attach-event\x3d"onClick:_handleCloseButtonClick"\x3e\n        ${i18n.close}\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n  \x3c/div\x3e\n\x3c/div\x3e  \n'}});
define("esri/dijit/analysis/ExpressionForm","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/_base/event dojo/Evented dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dijit/Tooltip ../../kernel ../../lang ./utils ../SingleFilter dojo/i18n!../../nls/jsapi dojo/text!./templates/ExpressionForm.html".split(" "),
function(h,q,d,f,l,F,m,r,G,t,b,u,v,H,I,n,w,p,x,y,z,A,B,J,K,L,M,N,O,P,Q,R,S,T,C,g,U,D,k,E){h=q([x,y,z,A,B,w],{declaredClass:"esri.dijit.analysis.ExpressionForm",templateString:E,widgetsInTemplate:!0,firstOperands:null,defaultUnits:"english",showFirstRow:!0,constructor:function(a){a.containerNode&&(this.container=a.containerNode);this._setClasses(a)},_setClasses:function(a){this._addBtnClass=a.primaryActionButttonClass||"esriAnalysisSubmitButton"},destroy:function(){this.inherited(arguments);f.forEach(this._pbConnects,
l.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);this.i18n={};d.mixin(this.i18n,k.common);d.mixin(this.i18n,k.expressionGrid);d.mixin(this.i18n,k.expressionForm)},postCreate:function(){this.inherited(arguments);this.attributeChangeHandler=l.subscribe("filter-expression-change",d.hitch(this,this._handleAttributeFilterChange));this._distanceInput.set("validator",d.hitch(this,this._validateDistance));this.set("action","add");b.set(this._firstRow,"display",
this.showFirstRow?"":"none")},init:function(){if(this._firstOperandSelect&&this.firstOperands&&this.inputOperands){this._firstOperandSelect.getOptions()&&this._firstOperandSelect.removeOption(this._firstOperandSelect.getOptions());var a,c,e=this.inputOperands.length,b=this.firstOperands.length,d=[];for(a=0;e>a;a+=1)for(c=0;b>c;c+=1)g.isDefined(this.inputOperands[a].id)&&g.isDefined(this.firstOperands[c].id)&&this.inputOperands[a].id===this.firstOperands[c].id?d[this.firstOperands[c].id]=a.toString():
g.isDefined(this.inputOperands[a].name)&&g.isDefined(this.firstOperands[c].name)&&this.inputOperands[a].name===this.firstOperands[c].name&&(d[this.firstOperands[c].name]=a.toString());f.forEach(this.firstOperands,function(a){g.isDefined(a)&&this._firstOperandSelect.addOption({value:d[a.id||a.name],label:a.name})},this);this.selectedFirstOperand&&this._firstOperandSelect.set("value",d[this.selectedFirstOperand.id]);this.get("showReadyToUseLayers")&&this.get("showReadyLayersForFirst")&&(this._firstOperandSelect.addOption({type:"separator",
value:""}),this._firstOperandSelect.addOption({value:"browse",label:this.i18n.browseAnalysisTitle}));1!==e||this.get("showReadyToUseLayers")||this._operatorSelect&&this._operatorSelect.getOptions()&&(this._operatorSelect.removeOption(this._operatorSelect.getOptions()),this._operatorSelect.addOption({value:"where",label:this.i18n.where}))}"add"===this.get("action")&&(this._operatorSelect.set("value","where"),this._handleOperatorChange("where"),this._distanceInput.set("value",""),"metric"===this.defaultUnits?
this._distanceUnitsSelect.set("value","Kilometers"):this._distanceUnitsSelect.set("value","Miles"))},startup:function(){},clear:function(){this.init()},_validateDistance:function(a){var c=this._operatorSelect.get("value");return-1===f.indexOf(["withinDistance","notWithinDistance"],c)?!0:a&&0<parseFloat(a,10)&&parseFloat(a,10)<1/0},_handleAttributeFilterChange:function(){var a,c;this._attributeFilter&&(c=this._attributeFilter.toJson(),a=this._attributeFilter.builtSingleFilterString(c),a.whereClause?
this._addBtn.set("disabled",!1):this._addBtn.set("disabled",!0))},_handleSecondOperandChange:function(a){"browse"===a&&(this.owningWidget.showReadyToUseLayersDialog(!1),this.owningWidget.layersSelect=this._secondOperandSelect)},_handleFirstOperandChange:function(a){"browse"===a&&this.get("showReadyLayersForFirst")?(this.owningWidget.showReadyToUseLayersDialog(!0),this.owningWidget.layersSelect=this._firstOperandSelect):this._handleOperatorChange(a)},_handleDistanceInputChange:function(){this._addBtn.set("disabled",
!this._distanceInput.validate())},_handleOperatorChange:function(){var a=this._operatorSelect.get("value");-1===f.indexOf(["where","withinDistance","notWithinDistance"],a)?this._buildSpatialExpression(a):"where"===a?(parseInt(this._firstOperandSelect.get("value"),10),this._buildAttributeExpression(a)):-1!==f.indexOf(["withinDistance","notWithinDistance"],a)&&this._buildDistanceExpression(a)},_isValidSecondOperand:function(a,c,e){var b=!1;return"contains"===a||"notContains"===a?("esriGeometryPoint"!==
c&&"esriGeometryMultipoint"!==c||"esriGeometryPoint"!==e&&"esriGeometryMultipoint"!==e)&&("esriGeometryPolyline"!==c||"esriGeometryPoint"!==e&&"esriGeometryPolyline"!==e&&"esriGeometryMultipoint"!==e)?"esriGeometryPolygon"===c&&(b=!0):b=!0:"within"===a||"notWithin"===a?"esriGeometryPoint"===c||"esriGeometryMultipoint"===c?b=!0:"esriGeometryPolyline"!==c||"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e?"esriGeometryPolygon"===c&&"esriGeometryPolygon"===e&&(b=!0):b=!0:b=!0,b},_isValidFirstOperand:function(a){var c=
!0;return a&&a.fields?a.fields&&1===a.fields.length&&"esriFieldTypeOID"===a.fields[0].type&&(this._showMessages(t.substitute(this.i18n.inValidAttributeFilterMessage,{layername:a.name})),c=!1):c=!1,c},_buildSpatialExpression:function(a){var c,e;c=parseInt(this._firstOperandSelect.get("value"),10);e=this.inputOperands[c].geometryType;this._addBtn.set("disabled",!1);this._distanceInput.set("required",!1);b.set(this._attrFilterDiv,"display","none");b.set(this._secondOperandSelect.domNode,"display","");
this._secondOperandSelect&&(this._secondOperandSelect.getOptions()&&this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),f.forEach(this.inputOperands,function(c,b){b.toString()!==this._firstOperandSelect.get("value")&&this._isValidSecondOperand(a,e,c.geometryType)&&this._secondOperandSelect.addOption({value:b.toString(),label:c.name})},this),this.get("showReadyToUseLayers")&&(this._secondOperandSelect.addOption({type:"separator",value:""}),this._secondOperandSelect.addOption({value:"browse",
label:this.i18n.browseAnalysisTitle})),b.set(this._secondRow,"display",""),b.set(this._secondExpressionDiv,"display","none"),b.set(this._secondOperandTd,"display",""),b.set(this._secondOperandSelect,{display:"",width:"75%"}))},_buildAttributeExpression:function(){var a;this._distanceInput.set("required",!1);b.set(this._secondExpressionDiv,"display","none");this._secondOperandSelect&&this._secondOperandSelect.getOptions()&&this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions());
b.set(this._secondOperandSelect.domNode,"display","none");a=parseInt(this._firstOperandSelect.get("value"),10);a=this.inputOperands[a];this._isValidFirstOperand(a)?(this._addBtn.set("disabled",!0),b.set(this._secondRow,"display",""),b.set(this._attrFilterDiv,"display",""),this._attributeFilter&&this._attributeFilter.init({mapLayer:a,version:a.version,fields:a.fields,allowAllDateTypes:!0,part:"edit"===this.get("action")&&this.expression&&this.expression._attributeExprObj?this.expression._attributeExprObj:
null}),this._attributeFilter||(this._attributeFilter=new D({"class":"filterSegment",mapLayer:a,version:a.version,fields:a.fields,part:"edit"===this.get("action")&&this.expression&&this.expression._attributeExprObj?this.expression._attributeExprObj:null,enableEvents:!0,isEnableInteractiveFilter:!1,allowAllDateTypes:!0},v.create("div",{},this._attrFilterDiv)),this._attributeFilter.fillFieldsList(this._attributeFilter.fieldsStore))):(b.set(this._secondRow,"display","none"),b.set(this._attrFilterDiv,
"display","none"),this._addBtn.set("disabled",!0))},_buildDistanceExpression:function(){this._addBtn.set("disabled",!this._distanceInput.validate());this._distanceInput.set("required",!0);b.set(this._secondRow,"display","");b.set(this._secondOperandTd,"display","");b.set(this._secondOperandSelect.domNode,"display","");b.set(this._secondExpressionDiv,{display:"",width:"75%"});b.set(this._secondOperandSelect,{display:"",width:"75%"});b.set(this._attrFilterDiv,"display","none");this._secondOperandSelect&&
this._secondOperandSelect.getOptions()&&(this._secondOperandSelect.removeOption(this._secondOperandSelect.getOptions()),f.forEach(this.inputOperands,function(a,c){c.toString()!==this._firstOperandSelect.get("value")&&this._secondOperandSelect.addOption({value:c.toString(),label:a.name})},this),this.get("showReadyToUseLayers")&&(this._secondOperandSelect.addOption({type:"separator",value:""}),this._secondOperandSelect.addOption({value:"browse",label:this.i18n.browseAnalysisTitle})))},_handleAddButtonClick:function(a){return n.stop(a),
this._expressionForm&&!this._expressionForm.validate()?void this.emit("cancel-expression",{}):(this.set("expression"),void this.emit("add-expression",{expression:this.get("expression"),text:this.get("text"),displayText:this.get("displayText"),action:this.get("action")}))},_handleCloseButtonClick:function(a){n.stop(a);this.emit("cancel-expression",{})},_setInputOperandsAttr:function(a){this.inputOperands=a},_getInputOperandsAttr:function(){return this.inputOperands},_setFirstOperandsAttr:function(a){this.firstOperands=
a},_getFirstOperandsAttr:function(){return this.firstOperands},_setSelectedFirstOperandAttr:function(a){this.selectedFirstOperand=a},_getExpressionAttr:function(){return this.expression},_setExpressionAttr:function(a){var c,b,d=!1;a?this._operatorSelect&&(this._firstOperandSelect.set("value",a.layer),this._operatorSelect.set("value",a.spatialRel?a.spatialRel:"where"),"where"===this._operatorSelect.get("value")?d=!0:(-1!==f.indexOf(["withinDistance","notWithinDistance"],this._operatorSelect.get("value"))&&
(this._distanceInput.set("value",a.distance),this._distanceUnitsSelect.set("value",a.units)),this._secondOperandSelect.set("value",a.selectingLayer))):(a={},this._operatorSelect&&(a.layer=parseInt(this._firstOperandSelect.get("value"),10),"where"===this._operatorSelect.get("value")?(c=this._attributeFilter.toJson(),b=this._attributeFilter.builtSingleFilterString(c),a._attributeFilter=b,a._attributeExprObj=c,a._attributeText=this._attributeFilter.buildFriendlyTextExpr(c),a.where=b.whereClause):(a.selectingLayer=
parseInt(this._secondOperandSelect.get("value"),10),a.spatialRel=this._operatorSelect.get("value"),-1!==f.indexOf(["withinDistance","notWithinDistance"],this._operatorSelect.get("value"))&&(a.distance=this._distanceInput.get("value"),a.units=this._distanceUnitsSelect.get("value")))));this.expression=a;d&&this._handleOperatorChange("where")},_showMessages:function(a){u.set(this._bodyNode,"innerHTML",a);m.fadeIn({node:this._errorMessagePane,easing:p.quadIn,onEnd:d.hitch(this,function(){b.set(this._errorMessagePane,
{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();m.fadeOut({node:this._errorMessagePane,easing:p.quadOut,onEnd:d.hitch(this,function(){b.set(this._errorMessagePane,{display:"none"})})}).play()},_setActionAttr:function(a){this.action=a},_getActionAttr:function(){return this.action},_setTextAttr:function(a){this.text=a},_getTextAttr:function(){var a="";return this.expression&&(a=this.inputOperands[this.expression.layer].name),this.expression.spatialRel?(a+=" "+this.i18n[this.expression.spatialRel],
this.expression.distance&&(a+=" "+this.expression.distance+" "+this.expression.units+" "+this.i18n.from),a+=" "+this.inputOperands[this.expression.selectingLayer].name):a+=" "+this.i18n.whereLabel+" "+this.expression._attributeText,a},_getDisplayTextAttr:function(){var a,c,b="";return this.expression&&(a=this.inputOperands[this.expression.layer].name,b+=this.shortenString(a)),this.expression.spatialRel?(b+=" \x3clabel style\x3d'font-style: italic;'\x3e"+this.i18n[this.expression.spatialRel],this.expression.distance&&
(b+=" "+this.expression.distance+" "+this.expression.units+" "+this.i18n.from),b+="\x3c/label\x3e",c=this.inputOperands[this.expression.selectingLayer].name,b+=" "+this.shortenString(c)):b+=" \x3clabel style\x3d'font-style: italic;'\x3e"+this.i18n.whereLabel+" "+this.expression._attributeText+"\x3c/label",b+"\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"},shortenString:function(a){return"\x3clabel style\x3d'overflow: hidden;text-overflow: ellipsis'\x3e"+a+"\x3c/label\x3e\x3c/td\x3e"},_setPrimaryActionButttonClassAttr:function(a){this.primaryActionButttonClass=
a},_getPrimaryActionButttonClassAttr:function(){return this.primaryActionButttonClass},_setShowFirstRowAttr:function(a){this.showFirstRow=a},_getShowFirstRowAttr:function(){return this.showFirstRow},_setShowReadyToUseLayersAttr:function(a){this._set("showReadyToUseLayers",a)},_setShowReadyLayersForFirstAttr:function(a){this._set("showReadyLayersForFirst",a)},_setOwningWidgetAttr:function(a){this._set("owningWidget",a)}});return r("extend-esri")&&d.setObject("dijit.analysis.ExpressionForm",h,C),h});