//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/constraints/templates/SecurityConstraints.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'SecConsts\',minOccurs:0,showHeader:false"\x3e\n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'useLimit\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.constraints.useLimit}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n    \x3c/div\x3e  \n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'class\',minOccurs:1,showHeader:false"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'ClasscationCd\',minOccurs:1,showHeader:false"\x3e\n        \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n          data-dojo-props\x3d"target:\'value\',minOccurs:1,label:\'${i18nArcGIS.codelist.MD_ClassificationCode}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n            data-dojo-props\x3d"codelistType:\'MD_ClassificationCode\'"\x3e\n          \x3c/div\x3e          \n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e    \n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'classSys\',minOccurs:0,label:\'${i18nArcGIS.constraints.security.classSys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'userNote\',minOccurs:0,label:\'${i18nArcGIS.constraints.security.userNote}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n      data-dojo-props\x3d"target:\'handDesc\',minOccurs:0,label:\'${i18nArcGIS.constraints.security.handDesc}\'"\x3e\n    \x3c/div\x3e\n    \n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/constraints/SecurityConstraints","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/SecurityConstraints.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});return c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.constraints.SecurityConstraints",a,d),a});