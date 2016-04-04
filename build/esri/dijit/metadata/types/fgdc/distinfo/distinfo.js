//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/distinfo/templates/distinfo.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'distinfo\',minOccurs:0,maxOccurs:\'unbounded\',\n      label:\'${i18nFgdc.distinfo.caption}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\n    \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,\n          label:\'${i18nFgdc.distinfo.section.distributor}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'distrib\',showHeader:false,\n            label:\'${i18nFgdc.distinfo.distrib}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/cntinfo/cntinfo"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,\n          label:\'${i18nFgdc.distinfo.section.description}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'resdesc\',minOccurs:0,preferOpen:true,\n            label:\'${i18nFgdc.distinfo.resdesc.caption}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.liveData}\',value:\'Live Data and Maps\'"\x3e\x3c/div\x3e  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.downloadableData}\',value:\'Downloadable Data\'"\x3e\x3c/div\x3e  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.offlineData}\',value:\'Offline Data\'"\x3e\x3c/div\x3e  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.staticMapImages}\',value:\'Static Map Images\'"\x3e\x3c/div\x3e                  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.sDocument}\',value:\'Other Documents\'"\x3e\x3c/div\x3e  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.application}\',value:\'Applications\'"\x3e\x3c/div\x3e  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.geographicService}\',value:\'Geographic Services\'"\x3e\x3c/div\x3e  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.clearingHouse}\',value:\'Clearinghouses\'"\x3e\x3c/div\x3e  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.mapFiles}\',value:\'Map Files\'"\x3e\x3c/div\x3e                  \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.distinfo.resdesc.geographicActivies}\',value:\'Geographic Activities\'"\x3e\x3c/div\x3e                                                          \n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\n                data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \n            \x3c/div\x3e            \n          \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'distliab\',\n            label:\'${i18nFgdc.distinfo.distliab}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,\n          label:\'${i18nFgdc.distinfo.section.orderProcess}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'custom\',minOccurs:0,\n            label:\'${i18nFgdc.distinfo.custom}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,\n          label:\'${i18nFgdc.distinfo.section.prerequisites}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'techpreq\',minOccurs:0,\n            label:\'${i18nFgdc.distinfo.techpreq}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,\n          label:\'${i18nFgdc.distinfo.section.availability}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'availabl\',minOccurs:0,\n            label:\'${i18nFgdc.distinfo.availabl}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/timeinfo/timeinfo"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \n    \x3c/div\x3e\n  \x3c/div\x3e\n  \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/distinfo/distinfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputSelectOne ../../../form/InputTextArea ../../../form/Options ../../../form/Option ../../../form/Section ../../../form/Tabs ../cntinfo/cntinfo ../timeinfo/timeinfo dojo/text!./templates/distinfo.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,r,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.distinfo.distinfo",
a,f),a});