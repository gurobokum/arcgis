//>>built
define("esri/dijit/metadata/types/arcgis/form/InputConformanceDegree","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/has ../../../../../kernel ./InputSelectBoolean ../../../form/Option dojo/i18n!../../../nls/i18nArcGIS".split(" "),function(a,e,f,g,h,k,c,d){a=a([k],{allInline:!1,serializeIfFalse:!0,falseLabel:d.dqInfo.report.ConResult.conPass._0,trueLabel:d.dqInfo.report.ConResult.conPass._1,falseValue:"0",trueValue:"1",postCreate:function(){this.inherited(arguments)},fetchOptionWidgets:function(){var a=
new f,b=[];return b.push(new c({label:"",value:""})),b.push(new c({label:this.trueLabel,value:this.trueValue})),b.push(new c({label:this.falseLabel,value:this.falseValue})),a.resolve(b),a}});return g("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.form.InputConformanceDegree",a,h),a});