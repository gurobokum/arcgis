//>>built
define("esri/dijit/metadata/form/iso/CodeListElement",["dojo/_base/declare","dojo/_base/lang","dojo/has","../Element","../../../../kernel"],function(a,b,c,d,e){a=a([d],{showHeader:!1,postCreate:function(){this.inherited(arguments)},resolveMinOccurs:function(){return this.parentElement?this.parentElement.resolveMinOccurs():this.minOccurs}});return c("extend-esri")&&b.setObject("dijit.metadata.form.iso.CodeListElement",a,e),a});