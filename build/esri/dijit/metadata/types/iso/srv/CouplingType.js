//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/srv/templates/CouplingType.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\n    data-dojo-props\x3d"target:\'srv:couplingType\',\n      label:\'${i18nIso.SV_ServiceIdentification.couplingType}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\n      data-dojo-props\x3d"target:\'srv:SV_CouplingType\'"\x3e\n  \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\n        data-dojo-props\x3d"value:\'http://schemas.opengis.net/iso19119/couplingType\'"\x3e\x3c/div\x3e\n  \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n              data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n              data-dojo-props\x3d"label:\'${i18nIso.SV_CouplingType.loose}\',value:\'loose\'"\x3e\x3c/div\x3e  \n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n              data-dojo-props\x3d"label:\'${i18nIso.SV_CouplingType.mixed}\',value:\'mixed\'"\x3e\x3c/div\x3e  \n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n              data-dojo-props\x3d"label:\'${i18nIso.SV_CouplingType.tight}\',value:\'tight\',selected:true"\x3e\x3c/div\x3e  \n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n  \n    \x3c/div\x3e      \n  \x3c/div\x3e  \n      \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/srv/CouplingType","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/InputSelectOne ../../../form/Options ../../../form/Option ../../../form/iso/CodeListAttribute ../../../form/iso/CodeListValueAttribute ../../../form/iso/CodeListElement ../../../form/iso/CodeListReference ../../../form/iso/CodeSpaceAttribute dojo/text!./templates/CouplingType.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,e,f){a=a(d,{templateString:e});
return c("extend-esri")&&b.setObject("dijit.metadata.types.iso.srv.CouplingType",a,f),a});