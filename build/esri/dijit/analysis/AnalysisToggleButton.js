//>>built
define("esri/dijit/analysis/AnalysisToggleButton","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/has dojo/dom-class dijit/_Widget ../../kernel".split(" "),function(b,e,f,c,g,d,h,k){b=e([h],{groupName:"defaultGroup",declaredClass:"esri.dijit.analysis.AnalysisToggleButton",postMixInProperties:function(){this.inherited(arguments);this.unselectChannel="/ButtonGroupCtr/"+this.groupName;c.subscribe(this.unselectChannel,this,"doUnselect")},postCreate:function(){this.inherited(arguments);
d.add(this.domNode,"esriGroupButton")},doUnselect:function(a){a!==this&&this.get("checked")&&this.set("checked",!1)},_getCheckedAttr:function(){return this.checked},_setCheckedAttr:function(a){this.inherited(arguments);(this.checked=a)&&c.publish(this.unselectChannel,[this]);d.toggle(this.domNode,"esriGroupselected",a)}});return g("extend-esri")&&f.setObject("dijit.analysis.AnalysisToggleButton",b,k),b});