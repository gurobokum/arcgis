//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/constraints/templates/LegalConstraints.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'LegConsts\',minOccurs:0,showHeader:false"\x3e\n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'useLimit\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.constraints.useLimit}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n    \x3c/div\x3e  \n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'accessConsts\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.constraints.legal.accessConsts}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'RestrictCd\',minOccurs:0,showHeader:false"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n          data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n            data-dojo-props\x3d"codelistType:\'MD_RestrictionCode\'"\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e  \n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'useConsts\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.constraints.legal.useConsts}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'RestrictCd\',minOccurs:0,showHeader:false"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n          data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n            data-dojo-props\x3d"codelistType:\'MD_RestrictionCode\'"\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e  \n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'othConsts\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.constraints.legal.othConsts}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n    \x3c/div\x3e  \n    \n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/constraints/LegalConstraints","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/LegalConstraints.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});return c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.constraints.LegalConstraints",a,d),a});