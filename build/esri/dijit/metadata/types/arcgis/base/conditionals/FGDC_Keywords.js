//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/FGDC_Keywords","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(d,g,f,e,h,k,l,m,n){d=d(m,{key:"FGDC_Keywords",postCreate:function(){this.inherited(arguments);var b=this;this.own(e.subscribe("gxe/interaction-occurred",function(a){try{if(b.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode){var c=
a.inputWidget.parentXNode.gxePath;"/metadata/dataIdInfo/tpCat"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/searchKeys/keyword"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/themeKeys/keyword"===c&&b.emitInteractionOccurred()}}catch(d){console.error(d)}}));this.own(e.subscribe("gxe/optional-content-toggled",function(a){try{b.parentXNode&&a&&a.src&&a.src.target&&"themeKeys"===a.src.target&&b.emitInteractionOccurred()}catch(c){console.error(c)}}));this.own(e.subscribe("gxe/after-xnode-destroyed",
function(a){try{b.parentXNode&&a&&a.xnode&&"themeKeys"===a.xnode.target&&b.emitInteractionOccurred()}catch(c){console.error(c)}}))},ensureFocus:function(){n.ensureVisibility(this.parentXNode);f.some(this.parentXNode.getChildren(),function(b){return b._isGxeTabs?(f.some(b.getChildren(),function(a){return a.isKeywordsSection?(b.ensureActiveTab(a),!0):void 0}),!0):void 0})},validateConditionals:function(b){var a=this.newStatus({message:l.conditionals[this.key]}),c=!1,d=this.parentXNode.domNode;return this.isXNodeOff(this.parentXNode)||
(c=!1),c||this.forActiveXNodes("/metadata/dataIdInfo/tpCat,/metadata/dataIdInfo/searchKeys/keyword,/metadata/dataIdInfo/themeKeys/keyword",d,function(a){return this.isXNodeInputEmpty(a)?void 0:(c=!0,!0)},this),a.isValid=c,this.track(a,b),a}});return h("extend-esri")&&g.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_Keywords",d,k),d});