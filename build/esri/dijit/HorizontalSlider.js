//>>built
define("esri/dijit/HorizontalSlider","dijit/form/HorizontalRuleLabels dijit/form/HorizontalSlider dojo/_base/declare dojo/_base/lang dojo/has esri/kernel".split(" "),function(b,a,c,d,e,f){a=c("esri.dijit.HorizontalSlider",a,{baseClass:"esriHorizontalSlider",showButtons:!1,labels:null,constructor:function(a){a=a||{};a.labels&&(this.labels=a.labels)},buildRendering:function(){(this.inherited(arguments),this.labels)&&(new b({labels:this.labels})).placeAt(this.bottomDecoration)}});return e("extend-esri")&&
d.setObject("dijit.HorizontalSlider",a,f),a});