//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/identification/templates/DataIdentification.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\n    data-dojo-props\x3d"target:\'gmd:identificationInfo\',\n      label:\'${i18nIso.MD_Metadata.identificationInfo}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\n      data-dojo-props\x3d"target:\'gmd:MD_DataIdentification\',minOccurs:0"\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\n          \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/ResourceCitation"\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.citation}\'"\x3e\x3c/div\x3e\n          \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/ResourceDescription"\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.description}\'"\x3e\x3c/div\x3e\n          \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/ResourceContact"\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.contact}\'"\x3e\x3c/div\x3e\n          \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/ResourceThumbnail"\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.thumbnail}\'"\x3e\x3c/div\x3e\n          \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/ResourceKeywords"\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.keywords}\'"\x3e\x3c/div\x3e\n          \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/ResourceConstraints"\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.constraints}\'"\x3e\x3c/div\x3e\n          \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/DataResourceTab"\n          data-dojo-props\x3d"label:\'${i18nIso.identificationSection.resource}\'"\x3e\x3c/div\x3e\n                          \n      \x3c/div\x3e\n      \n    \x3c/div\x3e\n  \x3c/div\x3e\n  \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/identification/DataIdentification","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Tabs ../../../../form/iso/AbstractObject ../../../../form/iso/ObjectReference ../citation/ResourceCitation ../citation/ResourceContact ../constraints/ResourceConstraints ./ResourceDescription ./ResourceThumbnail ./ResourceKeywords ./DataResourceTab dojo/text!./templates/DataIdentification.html ../../../../../../kernel".split(" "),function(a,
b,c,d,g,h,k,l,m,n,p,q,r,t,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.identification.DataIdentification",a,f),a});