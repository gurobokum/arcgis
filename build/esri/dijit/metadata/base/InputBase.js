//>>built
define("esri/dijit/metadata/base/InputBase","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/has ./etc/docUtil ./Templated ../../../kernel".split(" "),function(b,d,f,g,e,c,h,k,l,m,n){b=b([m],{_isGxeInput:!0,_supportsMultipleValues:!1,parentXNode:null,hint:null,postCreate:function(){this.inherited(arguments)},applyHint:function(){var a=this.hint;this.hintNode&&"undefined"!=typeof a&&null!==a&&this.parentXNode&&this.parentXNode.gxeDocument&&
!this.parentXNode.gxeDocument.isViewOnly&&(a=d.trim(a),0!==a.length&&(this.setNodeText(this.hintNode,a),c.add(this.hintNode,"populated")))},applyViewOnly:function(){if(this.viewOnlyNode&&this.parentXNode&&this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly){var a=this.getDisplayValue();"undefined"!=typeof a&&null!==a&&(a.push&&1===a.length&&(a=a[0]),a.push?(this.viewOnlyNode.innerHTML="",f.forEach(a,function(a){var b=h.create("div",{"class":"gxeParagraph"},this.viewOnlyNode);this.setNodeText(b,
a)},this),c.add(this.viewOnlyNode,"populated")):(this.setNodeText(this.viewOnlyNode,a),c.add(this.viewOnlyNode,"populated")))}},connectXNode:function(a,b){b?this.focusNode&&(this.focusNode.disabled=!0):this.applyHint();this.focusNode&&a&&a.fixed&&(this.focusNode.disabled=!0);a&&a.gxePath&&(this.focusNode?e.set(this.focusNode,"data-gxe-for",a.gxePath):e.set(this.domNode,"data-gxe-for",a.gxePath))},emitInteractionOccurred:function(a){a||(a={inputWidget:this});this.emit("interaction-occurred",a);this.parentXNode&&
null!==this.parentXNode.gxePath&&g.publish("gxe/interaction-occurred",a)},ensureFocus:function(){if(l.ensureVisibility(this),this.focusNode&&this.focusNode.focus)try{this.focusNode.focus()}catch(a){}},getDisplayValue:function(){return this.getInputValue()},getInputValue:function(){return null},getXmlValue:function(){return this.getInputValue()},importValue:function(a,b){this.setInputValue(b)},importValues:function(){},setInputValue:function(){}});return k("extend-esri")&&d.setObject("dijit.metadata.base.InputBase",
b,n),b});