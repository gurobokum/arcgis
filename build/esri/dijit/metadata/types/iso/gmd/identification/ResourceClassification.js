//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/identification/templates/ResourceClassification.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'gmd:topicCategory\',minOccurs:1,maxOccurs:\'unbounded\',\n      label:\'${i18nBase.isoTopicCategoryCode.caption}\'"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectMany"\n      data-dojo-props\x3d"subTarget:\'gmd:MD_TopicCategoryCode\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/IsoTopicCategoryOptions"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n      \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/identification/ResourceClassification","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputSelectMany ../../../../form/IsoTopicCategoryOptions dojo/text!./templates/ResourceClassification.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.identification.ResourceClassification",a,
f),a});