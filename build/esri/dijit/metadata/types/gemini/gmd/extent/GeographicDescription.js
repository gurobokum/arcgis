//>>built
require({cache:{"url:esri/dijit/metadata/types/gemini/gmd/extent/templates/GeographicDescription.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\n    data-dojo-props\x3d"target:\'gmd:geographicElement\',minOccurs:0,maxOccurs:\'unbounded\',\n      label:\'${i18nIso.EX_GeographicDescription.caption}\',\n      matchTopNode: [\n        {\n           qPath: \'gmd:EX_GeographicDescription\',\n          qValue: null,\n          qMode: \'must\'\n        }  \n      ]"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\n      data-dojo-props\x3d"target:\'gmd:EX_GeographicDescription\',minOccurs:0"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\n        data-dojo-props\x3d"target:\'gmd:geographicIdentifier\',showHeader:false"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\n          data-dojo-props\x3d"target:\'gmd:MD_Identifier\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'gmd:code\',label:\'${i18nIso.MD_Identifier.code}\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n              data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/gemini/gmd/extent/GeographicDescription","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference dojo/text!./templates/GeographicDescription.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.gmd.extent.GeographicDescription",
a,f),a});