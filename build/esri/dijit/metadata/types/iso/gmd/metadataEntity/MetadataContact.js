//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataContact.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\n    data-dojo-props\x3d"target:\'gmd:contact\',minOccurs:1,maxOccurs:\'unbounded\',\n      label:\'${i18nIso.MD_Metadata.contact}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\n      data-dojo-props\x3d"target:\'gmd:CI_ResponsibleParty\',minOccurs:0"\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'gmd:organisationName\',\n          label:\'${i18nIso.CI_ResponsibleParty.organisationName}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n          data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:contactInfo\',\n        minOccurs:0,showHeader:false"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Contact\',\n          minOccurs:0,showHeader:false"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:address\',\n            minOccurs:0,showHeader:false"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Address\',\n              minOccurs:0,showHeader:false"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n                data-dojo-props\x3d"target:\'gmd:electronicMailAddress\',minOccurs:0,maxOccurs:\'unbounded\',\n                  label:\'${i18nIso.CI_Address.electronicMailAddress}\'"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n                  data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\n              \x3c/div\x3e\n            \x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\n        data-dojo-props\x3d"target:\'gmd:role\',\n          label:\'${i18nIso.CI_RoleCode.caption}\',minOccurs:1"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/citation/CI_RoleCode"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n      \n    \x3c/div\x3e\n  \x3c/div\x3e\n    \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataContact","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../citation/CI_RoleCode dojo/text!./templates/MetadataContact.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});return c("extend-esri")&&
b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.MetadataContact",a,f),a});