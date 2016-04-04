//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/reference/templates/DimensionElements.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3c!-- number of dimensions --\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'numDims\',minOccurs:1,label:\'${i18nArcGIS.spatRepInfo.numDims}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber" data-dojo-props\x3d"integerOnly:true"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n  \n  \x3c!-- dimension --\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'axisDimension\',minOccurs:1,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.spatRepInfo.axisDimension.caption}\'"\x3e\n    \n    \x3c!-- dimension name type --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n      data-dojo-props\x3d"target:\'type\',minOccurs:1,label:\'${i18nArcGIS.codelist.MD_DimensionNameTypeCode}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n        data-dojo-props\x3d"codelistType:\'MD_DimensionNameTypeCode\'"\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- dimension size --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'dimSize\',minOccurs:1,label:\'${i18nArcGIS.spatRepInfo.axisDimension.dimSize}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber" data-dojo-props\x3d"integerOnly:true"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- resolution --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'dimResol\',minOccurs:0,label:\'${i18nArcGIS.spatRepInfo.axisDimension.dimResol.caption}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'value\',minOccurs:1,label:\'${i18nArcGIS.spatRepInfo.axisDimension.dimResol._value}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\n        \x3cdiv style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n          data-dojo-props\x3d"target:\'uom\',minOccurs:1,noIndent:true,label:\'${i18nArcGIS.spatRepInfo.axisDimension.dimResol.uom}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n            data-dojo-props\x3d"codelistType:\'UCUM\'"\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n  \x3c/div\x3e\n  \n  \x3c!-- cell geometry --\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'cellGeo\',minOccurs:1,label:\'${i18nArcGIS.codelist.MD_CellGeometryCode}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'CellGeoCd\',minOccurs:1,showHeader:false"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n        data-dojo-props\x3d"target:\'value\',minOccurs:1,showHeader:false"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n          data-dojo-props\x3d"codelistType:\'MD_CellGeometryCode\'"\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e  \n    \x3c/div\x3e\n  \x3c/div\x3e\n\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/reference/DimensionElements","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/DimensionElements.html".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});return c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.reference.DimensionElements",a,d),a});