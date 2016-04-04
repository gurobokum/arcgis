//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/Resolution.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3c!-- resolution --\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n    data-dojo-props\x3d"target:\'dataScale\',minOccurs:0,showHeader:false"\x3e\n    \n    \x3c!-- scale resolution --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'equScale\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.resource.dataScale.equScale}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'rfDenom\',minOccurs:0,showHeader:false"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\n          data-dojo-props\x3d"minValue:0.0,minValueIsExclusive:true,hint:\'${i18nBase.hints.numberGreaterThanZero}\'"\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- distance resolution --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'scaleDist\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.resource.dataScale.scaleDist}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'value\',minOccurs:1,label:\'${i18nArcGIS.resource.dataScale.scaleDist_value}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\n        \x3cdiv style\x3d"margin-top: 8px;"\x3e\x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n          data-dojo-props\x3d"target:\'uom\',minOccurs:1,noIndent:true,label:\'${i18nArcGIS.codelist.UCUM_Length}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n            data-dojo-props\x3d"codelistType:\'UCUM_Length\'"\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n  \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/resource/Resolution","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Resolution.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});return c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.resource.Resolution",a,d),a});