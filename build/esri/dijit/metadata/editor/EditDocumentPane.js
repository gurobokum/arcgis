//>>built
require({cache:{"url:esri/dijit/metadata/editor/templates/EditDocumentPane.html":'\x3cdiv class\x3d"gxeEditDocumentPane"\x3e\n  \x3cdiv class\x3d"gxeMessage" data-dojo-attach-point\x3d"messageNode" style\x3d"display:none"\x3e\x3c/div\x3e\n  \x3cdiv data-dojo-attach-point\x3d"containerNode,rootContainer"\x3e\x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/EditDocumentPane","dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/has ../base/Templated dojo/text!./templates/EditDocumentPane.html ../../../kernel".split(" "),function(a,c,b,d,e,f,g){a=a([e],{gxeDocument:null,templateString:f,postCreate:function(){this.inherited(arguments)},hideMessage:function(){this.messageNode.innerHTML="";b.set(this.messageNode,"display","none")},showMessage:function(a){this.setNodeText(this.messageNode,a);b.set(this.messageNode,"display",
"")}});return d("extend-esri")&&c.setObject("dijit.metadata.editor.EditDocumentPane",a,g),a});