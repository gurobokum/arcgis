//>>built
define("esri/dijit/metadata/types/arcgis/base/optionsFilterer",["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel"],function(c,e,f,g){var d={filter:function(d,a,c){return e.filter(c,function(b){return b.NAPOnly&&!a.isAgsNAP?!1:!b.NAPFGDCOnly||a.isAgsNAP||a.isAgsFGDC?b.NAPExcluded&&a.isAgsNAP?!1:b.FGDCExcluded&&a.isAgsFGDC?!1:b.INSPIREExcluded&&a.isAgsINSPIRE?!1:!0:!1})}};return f("extend-esri")&&c.setObject("dijit.metadata.types.arcgis.base.optionsFilterer",d,g),d});