//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/constraints/templates/ResourceConstraints.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\n    data-dojo-props\x3d"target:\'gmd:resourceConstraints\',minOccurs:0,maxOccurs:\'unbounded\',\n      label:\'${i18nIso.AbstractMD_Identification.resourceConstraints}\'"\x3e\n      \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/ElementChoice"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nBase.general.none}\'"\x3e\n      \x3c/div\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/MD_Constraints"\n        data-dojo-props\x3d"label:\'${i18nIso.MD_Constraints.caption}\'"\x3e\n      \x3c/div\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/MD_LegalConstraints"\n        data-dojo-props\x3d"label:\'${i18nIso.MD_LegalConstraints.caption}\'"\x3e\n      \x3c/div\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/constraints/MD_SecurityConstraints"\n        data-dojo-props\x3d"label:\'${i18nIso.MD_SecurityConstraints.caption}\'"\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \n  \x3c/div\x3e\n\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/constraints/ResourceConstraints","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/ElementChoice ../../../../form/Section ../../../../form/iso/ObjectReference ./MD_Constraints ./MD_LegalConstraints ./MD_SecurityConstraints dojo/text!./templates/ResourceConstraints.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.constraints.ResourceConstraints",
a,f),a});