//>>built
define("esri/dijit/metadata/types/arcgis/form/InputMaxNumber","dojo/_base/declare dojo/_base/lang dojo/query dijit/registry dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../form/InputNumber".split(" "),function(a,c,k,l,e,f,g,h){a=a([h],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(){this.inherited(arguments);try{var a=this.parentXNode.target,b=null;if("maxVal"===a?b="minVal":"rdommax"===a?b="rdommin":"vertMaxVal"===a&&(b="vertMinVal"),null!==b){var d=
g.findInputWidget(this.parentXNode.parentElement.gxePath+"/"+b,this.parentXNode.domNode.parentNode);d&&d.emitInteractionOccurred()}}catch(c){console.error(c)}}});return e("extend-esri")&&c.setObject("dijit.metadata.types.arcgis.form.InputMaxNumber",a,f),a});