//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/resource/templates/Representation.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3c!-- representation type --\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n    data-dojo-props\x3d"target:\'spatRpType\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.codelist.MD_SpatialRepresentationTypeCode}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'SpatRepTypCd\',minOccurs:0,showHeader:false"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n        data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n          data-dojo-props\x3d"codelistType:\'MD_SpatialRepresentationTypeCode\'"\x3e\n        \x3c/div\x3e        \n      \x3c/div\x3e\n    \x3c/div\x3e    \n  \x3c/div\x3e\n  \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/resource/Representation","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Representation.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});return c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.resource.Representation",a,d),a});