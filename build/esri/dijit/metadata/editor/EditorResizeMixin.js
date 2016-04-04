//>>built
define("esri/dijit/metadata/editor/EditorResizeMixin","dojo/_base/declare dojo/_base/lang dojo/dom-geometry dojo/dom-style dojo/has dojo/window ../../../kernel".split(" "),function(c,e,f,d,m,h,n){c=c(null,{constructor:function(a){e.mixin(this,a)},_getMaxCanvasHeight:function(a){var b,c,d,e,k,g=0,l=this.validationPane.domNode;return this.dialogBroker?(b=f.getMarginBox(this.domNode),c=f.getMarginBox(this.primaryToolbar.domNode),g=b.h-c.h,"none"!==l.style.display&&(d=f.getMarginBox(l),g-=d.h)):(e=h.getBox(this.ownerDocument),
k=f.getMarginBox(a),g=e.h-k.t-10),g},resizeDocument:function(a){a=a.domNode;var b=this._getMaxCanvasHeight(a);10<b&&d.set(a,"maxHeight",b-10+"px")},resizeXmlPane:function(){var a=this.xmlPane.textAreaNode,b=this._getMaxCanvasHeight(a);this.dialogBroker||(b-=10);10<b&&d.set(a,"height",b-10+"px")},resize:function(){if(this.dialogBroker){var a=h.getBox(this.ownerDocument);a.w*=.9;a.h*=.9;var b=f.getMarginBox(this.domNode),b=a.h-b.t-b.l-30;d.set(this.domNode,"width",a.w-100+"px");d.set(this.domNode,"height",
b+"px")}this.resizeDocument(this.editDocumentPane);this.resizeDocument(this.viewDocumentPane);this.resizeXmlPane()}});return m("extend-esri")&&e.setObject("dijit.metadata.editor.EditorResizeMixin",c,n),c});