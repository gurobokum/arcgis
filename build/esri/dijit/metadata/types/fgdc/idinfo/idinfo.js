//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/idinfo/templates/idinfo.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'idinfo\',label:\'${i18nFgdc.idinfo.caption}\'"\x3e\n      \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\n    \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'citation\',showHeader:false,label:\'${i18nFgdc.idinfo.citeinfo}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/citeinfo/citeinfo"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/idinfo/descript"\n        data-dojo-props\x3d"label:\'${i18nFgdc.idinfo.descript.caption}\'"\x3e\x3c/div\x3e\n        \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.idinfo.section.timeAndStatus}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/idinfo/timeperd"\x3e\x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/idinfo/status"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'spdom\',showHeader:false,label:\'${i18nFgdc.idinfo.spdom.caption}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/idinfo/bounding"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/idinfo/keywords"\n        data-dojo-props\x3d"label:\'${i18nFgdc.idinfo.keywords.caption}\'"\x3e\x3c/div\x3e\n        \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.idinfo.section.constraints}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'accconst\',value:\'None\',\n            label:\'${i18nFgdc.idinfo.accconst}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/tools/ClickableValueTool"\n              data-dojo-props\x3d"value:\'None\',label:\'${i18nFgdc.alternates.none}\'"\x3e\x3c/div\x3e  \n          \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'useconst\',value:\'None\',\n            label:\'${i18nFgdc.idinfo.useconst}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/tools/ClickableValueTool"\n              data-dojo-props\x3d"value:\'None\',label:\'${i18nFgdc.alternates.none}\'"\x3e\x3c/div\x3e  \n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n        \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'ptcontac\',showHeader:false,label:\'${i18nFgdc.idinfo.section.contact}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/cntinfo/cntinfo"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nFgdc.idinfo.section.additional}\'"\x3e\n        \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/idinfo/browse"\x3e\x3c/div\x3e\n        \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'datacred\',minOccurs:0,\n            label:\'${i18nFgdc.idinfo.datacred}\'"\x3e\n        \x3c/div\x3e\n        \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/idinfo/secinfo"\x3e\x3c/div\x3e\n        \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'native\',minOccurs:0,\n            label:\'${i18nFgdc.idinfo.sNative}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n        \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'crossref\',minOccurs:0,maxOccurs:\'unbounded\',\n            label:\'${i18nFgdc.idinfo.crossref}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/citeinfo/citeinfo"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n        \n      \x3c/div\x3e\n      \n    \x3c/div\x3e\n      \n  \x3c/div\x3e\n    \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/idinfo/idinfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputTextArea ../../../form/Section ../../../form/Tabs ../../../form/tools/ClickableValueTool ../citeinfo/citeinfo ../cntinfo/cntinfo ../idinfo/bounding ../idinfo/browse ../idinfo/descript ../idinfo/keywords ../idinfo/secinfo ../idinfo/status ../idinfo/timeperd dojo/text!./templates/idinfo.html ../../../../../kernel".split(" "),function(a,
b,c,d,g,h,k,l,m,n,p,q,r,t,u,v,w,x,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.idinfo.idinfo",a,f),a});