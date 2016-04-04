//>>built
require({cache:{"url:esri/dijit/metadata/types/inspire/gmd/identification/templates/GemetConceptKeywords.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\n    data-dojo-props\x3d"target:\'gmd:descriptiveKeywords\',minOccurs:0,\n      label:\'${i18nInspire.keywordSections.gemetConcept}\',\n      matchTopNode: [\n        {\n           qPath:\'gmd:MD_Keywords/gmd:thesaurusName/gmd:CI_Citation/gmd:title/gco:CharacterString\',\n          qValue:\'GEMET - Concepts, version 2.4\',\n          qMode:\'must\'\n        }  \n      ]"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\n      data-dojo-props\x3d"target:\'gmd:MD_Keywords\',minOccurs:0"\x3e\n       \n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n        data-dojo-props\x3d"target:\'gmd:keyword\',minOccurs:1,maxOccurs:\'unbounded\',useTabs:false,\n          label:\'${i18nIso.gemet.concept.gemetConceptKeyword}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\n          data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/gemet/GemetConceptTool"\n              data-dojo-props\x3d"label:\'${i18nIso.gemet.concept.tool}\'"\x3e\x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e  \n      \x3c/div\x3e\n      \n      \x3c!-- \n      \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListReference" data-dojo-props\x3d"target:\'gmd:type\',\n          fixed:true,label:\'Do we need the MD_KeywordTypeCode?\'"\x3e\n        \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListElement" data-dojo-props\x3d"target:\'gmd:MD_KeywordTypeCode\'"\x3e\n          \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListAttribute"\n            data-dojo-props\x3d"value:\'${codeListPrefix}MD_KeywordTypeCode\'"\x3e\n          \x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeListValueAttribute" \n            data-dojo-props\x3d"value:\'theme\'"\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e    \n      \x3c/div\x3e\n       --\x3e\n      \n      \x3c!-- GEMET - Concepts, version 2.4 --\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:thesaurusName\',\n          fixed:true,hide:true"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Citation\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:title\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gco:CharacterString\',\n              value:\'GEMET - Concepts, version 2.4\'"\x3e\n            \x3c/div\x3e\n          \x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:date\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:CI_Date\'"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gmd:date\'"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element" data-dojo-props\x3d"target:\'gco:Date\',\n                  value:\'2010-01-13\'"\x3e\n                \x3c/div\x3e\n              \x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference" data-dojo-props\x3d"target:\'gmd:dateType\'"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement" data-dojo-props\x3d"target:\'gmd:CI_DateTypeCode\'"\x3e\n                  \x3c!-- \x3cdiv data-dojo-type\x3d"gxe/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e  --\x3e\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\n                    data-dojo-props\x3d"value:\'${inspireCodeListPrefix}CI_DateTypeCode\'"\x3e\n                  \x3c/div\x3e\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\n                    data-dojo-props\x3d"value:\'publication\'"\x3e\n                  \x3c/div\x3e\n                \x3c/div\x3e    \n              \x3c/div\x3e            \n            \x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n  \n    \x3c/div\x3e\n  \x3c/div\x3e\n  \n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/inspire/gmd/identification/GemetConceptKeywords","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputText ../../../../form/iso/AbstractObject ../../../../form/iso/CodeListAttribute ../../../../form/iso/CodeListValueAttribute ../../../../form/iso/CodeListElement ../../../../form/iso/CodeListReference ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference ../../../../form/iso/gemet/GemetConceptTool dojo/text!./templates/GemetConceptKeywords.html ../../../../../../kernel".split(" "),
function(a,b,c,d,g,h,k,l,m,n,p,q,r,t,e,f){a=a(d,{templateString:e});return c("extend-esri")&&b.setObject("dijit.metadata.types.inspire.gmd.identification.GemetConceptKeywords",a,f),a});