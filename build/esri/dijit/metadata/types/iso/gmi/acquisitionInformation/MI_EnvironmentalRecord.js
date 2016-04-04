//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmi/acquisitionInformation/templates/MI_EnvironmentalRecord.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject" data-dojo-props\x3d"target:\'gmi:MI_EnvironmentalRecord\',minOccurs:0"\x3e\n\n    \x3c!-- \n      http://www.isotc211.org/2005/gmi/acquisitionInformation.xsd\n      \x3cxs:sequence\x3e\n        \x3cxs:element name\x3d"averageAirTemperature" type\x3d"gco:Real_PropertyType"/\x3e\n        \x3cxs:element name\x3d"maxRelativeHumidity" type\x3d"gco:Real_PropertyType"/\x3e\n        \x3cxs:element name\x3d"maxAltitude" type\x3d"gco:Real_PropertyType"/\x3e\n        \x3cxs:element name\x3d"meterologicalConditions" type\x3d"gco:CharacterString_PropertyType"/\x3e\n      \x3c/xs:sequence\x3e\n     --\x3e\n\n    \x3c!-- averageAirTemperature --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmi:averageAirTemperature\',\n      label:\'${i18nIso.MI_EnvironmentalRecord.averageAirTemperature}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement" data-dojo-props\x3d"target:\'gco:Real\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- maxRelativeHumidity --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmi:maxRelativeHumidity\',\n      label:\'${i18nIso.MI_EnvironmentalRecord.maxRelativeHumidity}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement" data-dojo-props\x3d"target:\'gco:Real\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- maxAltitude --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmi:maxAltitude\',\n      label:\'${i18nIso.MI_EnvironmentalRecord.maxAltitude}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement" data-dojo-props\x3d"target:\'gco:Real\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- meterologicalConditions --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmi:meterologicalConditions\',\n      label:\'${i18nIso.MI_EnvironmentalRecord.meterologicalConditions}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement" data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n            \n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmi/acquisitionInformation/MI_EnvironmentalRecord","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputNumber ../../../../form/InputTextArea ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement dojo/text!./templates/MI_EnvironmentalRecord.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.MI_EnvironmentalRecord",
a,f),a});