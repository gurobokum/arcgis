//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/dataQuality/templates/ConformanceDegree.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'gmd:pass\',serializeIfEmpty:true,\n      label:\'${i18nIso.DQ_ConformanceResult.degree.caption}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n      data-dojo-props\x3d"target:\'gco:Boolean\',minOccurs:0,\n        label:\'${i18nIso.DQ_ConformanceResult.degree.validationPerformed}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n              data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n            data-dojo-props\x3d"label:\'${i18nIso.DQ_ConformanceResult.degree.conformant}\',value:\'true\'"\x3e\x3c/div\x3e            \n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n            data-dojo-props\x3d"label:\'${i18nIso.DQ_ConformanceResult.degree.nonConformant}\',value:\'false\'"\x3e\x3c/div\x3e  \n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e  \n  \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/dataQuality/ConformanceDegree","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option dojo/text!./templates/ConformanceDegree.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.dataQuality.ConformanceDegree",a,f),a});