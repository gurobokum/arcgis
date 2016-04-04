//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/quality/templates/Report.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\n   \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n    data-dojo-props\x3d"target:\'report\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.section.report}\'"\x3e\n\n    \x3c!-- type --\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n      data-dojo-props\x3d"target:\'type\',minOccurs:1,label:\'${i18nArcGIS.codelist.DQ_ElementType}\'"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputReportType"\n        data-dojo-props\x3d"codelistType:\'DQ_ElementType\'"\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e    \n    \n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\n\n      \x3c!-- measure --\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.report.section.measure}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n          data-dojo-props\x3d"target:\'dimension\',minOccurs:0,label:\'${i18nArcGIS.codelist.DQ_ElementDimension}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n            data-dojo-props\x3d"codelistType:\'DQ_ElementDimension\'"\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n          data-dojo-props\x3d"target:\'measDesc\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.measDesc}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n          data-dojo-props\x3d"target:\'measName\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.report.measName}\'"\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n          data-dojo-props\x3d"target:\'measDateTm\',minOccurs:0,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.report.measDateTm}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'measId\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.measId}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'identCode\',minOccurs:1,label:\'${i18nArcGIS.codeRef.identCode}\'"\x3e\n          \x3c/div\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'identAuth\',minOccurs:0,label:\'${i18nArcGIS.codeRef.identAuth}\'"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e    \n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \n      \x3c!-- evaluation --\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.dqInfo.report.section.evaluation}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n          data-dojo-props\x3d"target:\'evalMethDesc\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.evalMethDesc}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n          data-dojo-props\x3d"target:\'evalMethType\',minOccurs:0,label:\'${i18nArcGIS.codelist.DQ_EvaluationMethodTypeCode}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n            data-dojo-props\x3d"target:\'EvalMethTypeCd\',minOccurs:0,showHeader:false"\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\n              data-dojo-props\x3d"target:\'value\',minOccurs:0,showHeader:false"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\n                data-dojo-props\x3d"codelistType:\'DQ_EvaluationMethodTypeCode\'"\x3e\n              \x3c/div\x3e  \n            \x3c/div\x3e\n          \x3c/div\x3e\n        \x3c/div\x3e              \n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'evalProc\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.evalProc}\'"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e    \n        \x3c/div\x3e\n      \x3c/div\x3e\n\n      \x3c!-- result --\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Section"\n        data-dojo-props\x3d"showHeader:false,isResultSection:true,label:\'${i18nArcGIS.dqInfo.report.section.result}\'"\x3e\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n          data-dojo-props\x3d"target:\'measResult\',minOccurs:0,showHeader:false"\x3e\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\n          \n            \x3c!-- conformance result --\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n              data-dojo-props\x3d"target:\'ConResult\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.ConResult.caption}\'"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n                data-dojo-props\x3d"target:\'conExpl\',minOccurs:1,label:\'${i18nArcGIS.dqInfo.report.ConResult.conExpl}\'"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\n              \x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n                data-dojo-props\x3d"target:\'conPass\',minOccurs:1,label:\'${i18nArcGIS.dqInfo.report.ConResult.conPass.caption}\'"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputConformanceDegree"\x3e\x3c/div\x3e\n              \x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n                data-dojo-props\x3d"target:\'conSpec\',minOccurs:1,label:\'${i18nArcGIS.dqInfo.report.ConResult.conSpec}\'"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/citation/CitationElements"\x3e\x3c/div\x3e    \n              \x3c/div\x3e\n            \x3c/div\x3e\n            \n            \x3c!-- quantitative result --\x3e\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n              data-dojo-props\x3d"target:\'QuanResult\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.QuanResult.caption}\'"\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n                data-dojo-props\x3d"target:\'quanVal\',minOccurs:1,maxOccurs:\'unbounded\',label:\'${i18nArcGIS.dqInfo.report.QuanResult.quanVal}\'"\x3e  \n              \x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\n                data-dojo-props\x3d"target:\'quanValUnit\',minOccurs:1,showHeader:false"\x3e\n                \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n                  data-dojo-props\x3d"target:\'UOM\',minOccurs:1,label:\'${i18nArcGIS.dqInfo.report.QuanResult.quanValUnit}\'"\x3e\n                  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/common/UnitSymbol"\x3e\x3c/div\x3e\n                \x3c/div\x3e\n              \x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n                data-dojo-props\x3d"target:\'quanValType\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.QuanResult.quanValType}\'"\x3e  \n              \x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\n                data-dojo-props\x3d"target:\'errStat\',minOccurs:0,label:\'${i18nArcGIS.dqInfo.report.QuanResult.errStat}\'"\x3e  \n              \x3c/div\x3e\n            \x3c/div\x3e\n          \n          \x3c/div\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n      \n    \x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/quality/Report","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Report.html ../citation/CitationElements ../common/UnitSymbol ../form/InputReportType ../form/InputConformanceDegree".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});return c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.quality.Report",a,d),a});