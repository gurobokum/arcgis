//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/extent/templates/GeographicElement.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\n    data-dojo-props\x3d"target:\'gmd:geographicElement\',minOccurs:1,maxOccurs:1,\n      label:\'${i18nIso.EX_Extent.geographicElement}\'"\x3e\n      \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\n      data-dojo-props\x3d"target:\'gmd:EX_GeographicBoundingBox\',minOccurs:0"\x3e\n      \x3cdiv class\x3d"gxeGeoExtentSection"\x3e  \n      \n        \x3cdiv class\x3d"gxeGeoExtentCoordinates"\x3e  \n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'gmd:westBoundLongitude\',\n              label:\'${i18nIso.EX_GeographicBoundingBox.westBoundLongitude}\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n              data-dojo-props\x3d"target:\'gco:Decimal\',value:-180"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\n                data-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GeoExtentTool"\n                  data-dojo-props\x3d"label:\'${i18nBase.geoExtent.button}\'"\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/div\x3e\n          \x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'gmd:eastBoundLongitude\',\n              label:\'${i18nIso.EX_GeographicBoundingBox.eastBoundLongitude}\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n              data-dojo-props\x3d"target:\'gco:Decimal\',value:180"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\n                data-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\x3c/div\x3e\n            \x3c/div\x3e\n          \x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'gmd:southBoundLatitude\',\n              label:\'${i18nIso.EX_GeographicBoundingBox.southBoundLatitude}\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n              data-dojo-props\x3d"target:\'gco:Decimal\',value:-90"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\n                data-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\n            \x3c/div\x3e\n          \x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'gmd:northBoundLatitude\',\n              label:\'${i18nIso.EX_GeographicBoundingBox.northBoundLatitude}\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n              data-dojo-props\x3d"target:\'gco:Decimal\',value:90"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\n                data-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\n            \x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n        \n        \x3cdiv class\x3d"gxeGeoExtentViewSection gxeViewOnly"\x3e\x3c/div\x3e\n        \x3cdiv class\x3d"gxeGeoExtentBottom"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \n  \x3c/div\x3e      \n      \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/extent/GeographicElement","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputNumber ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement ../../../../form/iso/GeoExtentTool ../../../../form/iso/ObjectReference dojo/text!./templates/GeographicElement.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});return c("extend-esri")&&
b.setObject("dijit.metadata.types.iso.gmd.extent.GeographicElement",a,f),a});