//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/keywords/templates/Keywords.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\n  \n    \x3c!-- topic category --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/TopicCategory"\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.keywords.section.topicCategory}\'"\x3e\n    \x3c/div\x3e\n\n    \x3c!-- Search --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Search"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.searchKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Theme --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Theme"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.themeKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Place --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Place"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.placeKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Temporal --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Temporal"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.tempKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Discipline --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Discipline"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.discKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Stratum --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Stratum"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.stratKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Product --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Product"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.productKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Subtopic --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Subtopic"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.subTopicCatKeys}\'"\x3e\n    \x3c/div\x3e\n    \n    \x3c!-- Other --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Other"\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.otherKeys}\'"\x3e\n    \x3c/div\x3e\n  \n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/keywords/Keywords","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Keywords.html ./TopicCategory ./Search ./Theme ./Place ./Temporal ./Discipline ./Stratum ./Product ./Subtopic ./Other".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});return c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.keywords.Keywords",a,d),a});