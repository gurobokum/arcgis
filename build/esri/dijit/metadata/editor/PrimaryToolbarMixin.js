//>>built
define("esri/dijit/metadata/editor/PrimaryToolbarMixin","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-style dojo/has dojo/i18n!../nls/i18nBase ../base/ValidationTracker ../base/xml/XmlInterrogator ../base/xml/xmlUtil ./util/DownloadXmlDialog ./util/LoadDocumentDialog ./util/MessageDialog ./util/SaveDocumentDialog ./util/TransformDialog ../base/transform/Iso2IsoTransformer ../../../kernel".split(" "),function(m,c,v,p,u,w,d,n,x,q,y,z,k,A,B,C,D){m=m(null,{constructor:function(b){c.mixin(this,
b)},_compareXmls:function(b,a){var e=function(a){if("undefined"==typeof a||null===a)return a;var b,e,c,d=a.indexOf("\x3cModTime\x3e");return-1!==d&&(b=a.indexOf("\x3c/ModTime\x3e"),b>d)?(e=a.substring(0,d),c=a.substring(b+10),e+c):a},c=e(b),e=e(a);return c===e?!0:!1},_confirmAndDelete:function(){if(this.editor.gxeAdaptor.getAllowEditMetadata()&&this.editor.gxeAdaptor.getAllowDeleteMetadata()){var b=this.editor&&this.editor.dialogBroker;(new k({title:d.editor.del.dialogTitle,okLabel:d.editor.del.caption,
onOkClick:c.hitch(this,function(){var a=new k({title:d.editor.del.dialogTitle,showOkCancelBar:!1});a.show(d.editor.del.working).then(c.hitch(this,function(){this.editor.gxeAdaptor.deleteMetadata({}).then(c.hitch(this,function(){this.lastSavedXml=null;setTimeout(c.hitch(this,function(){a.hide();b&&this._close()}),1500)}),c.hitch(this,function(b){a.hide();this._handleError(d.editor.del.errorDeleting,b,!0)}))}))})})).show(d.editor.del.prompt)}},_executeSave:function(b,a,e,f){if(this.editor.gxeAdaptor.getAllowEditMetadata()){var g=
new k({title:d.editor.save.dialogTitle,showOkCancelBar:!1});g.show(d.editor.save.working).then(c.hitch(this,function(){this.editor.gxeAdaptor.saveXml(b,a,f).then(c.hitch(this,function(){this.lastSavedXml=a;setTimeout(c.hitch(this,function(){g.hide();e&&this._close()}),1500)}),c.hitch(this,function(a){g.hide();this._handleError(d.editor.save.errorSaving,a,!0)}))}))}},_download:function(b,a,e){null===a&&(a="metadata");var c,g,h=a+".xml";window.navigator&&window.navigator.msSaveOrOpenBlob?window.navigator.msSaveOrOpenBlob(new Blob([b],
{type:"text/xml"}),h):(g=d.editor.download.dialogTitle,e&&(g=d.editor.saveDraft.dialogTitle),c=new y({dialogTitle:g}),c.show(b,a))},_getTransformationTypes:function(b){var a=[];return(b=this.editor.getEditDocument())&&b.documentType.isIso?(v.forEach(this.editor.gxeContext.filterDocumentTypes(),function(c){c.key!==b.documentType.key&&c.isIso&&b.documentType.isIso&&a.push(c)}),a):a},_handleError:function(b,a,c){if(a)try{console.error(a)}catch(f){}c&&(new k({title:d.editor.errorDialog.dialogTitle,showOk:!1,
cancelLabel:d.general.close})).show(b,"gxeIconError",a)},_initializeView:function(){var b,a,e=this.editor.gxeAdaptor.getAllowEditMetadata(),f=this.editor.gxeContext.allowView,g=this.editor.gxeContext.allowViewXml,h=c.hitch(this,function(a,b){if(u.set(this.commonToolset,"display",""),b&&e){this._setMode("edit");var h=this.editor.gxeContext.filterDocumentTypes()[0];this._fadeOut(d.editor.primaryToolbar.loadingDocument,c.hitch(this,function(){this.editor.loadEditor(h,null,!0,!1).then(c.hitch(this,function(){this._fadeIn()}),
c.hitch(this,function(a){this._fadeIn();this._handleError(d.editor.primaryToolbar.errors.errorLoadingDocument,a,!0)}))}))}else f||g||!e||(a="edit"),this._setMode(a),this._fadeIn()}),r=this.editor.viewDocumentPane,t=null,l=this._parseXml(this.editor.gxeAdaptor.getOriginalXml());return l.documentType?(b=l.documentType,t=l.xmlString,a=l.xmlDocument,e&&!f?(u.set(this.commonToolset,"display",""),this._setMode("edit"),void this._loadEditor()):void this._fadeOut(d.editor.primaryToolbar.initializing,c.hitch(this,
function(){this.editor.loadView(b,a,!0).then(c.hitch(this,function(a){r.xmlString=t;this.editor.xmlPane.setXml(t,a.originalTitle);h("view")}),c.hitch(this,function(a){h("view");this._handleError(d.editor.primaryToolbar.errors.errorGeneratingView,a,!0)}))}))):void(l.xmlDocument?(!f&&e?this.editor.editDocumentPane.showMessage(d.editor.xmlViewOnly):r.showMessage(d.editor.xmlViewOnly),h("viewXml")):(r.showMessage(d.editor.noMetadata),h("view",!0)))},_loadEditor:function(){if(this.editor.gxeAdaptor.getAllowEditMetadata()){var b,
a=this._parseXml(this.editor.gxeAdaptor.getOriginalXml());a.documentType?this._fadeOut(d.editor.primaryToolbar.startingEditor,c.hitch(this,function(){this.editor.loadEditor(a.documentType,a.xmlDocument,!1,!0).then(c.hitch(this,function(){this._fadeIn()}),c.hitch(this,function(a){this._fadeIn();this._handleError(d.editor.primaryToolbar.errors.errorLoadingDocument,a,!0)}))})):(b=d.editor.load.noMetadata,a.xmlDocument&&(b=d.editor.load.unrecognizedMetadata),this._showLoadDialog(b))}},_loadView:function(){var b=
this.editor.getEditDocument();if(!b)return void this._setMode("view");var a=this.editor.viewDocumentPane,e=new n({ignoreErrors:!0}),f=b.generateXml(e);return this._compareXmls(f,a.xmlString)?void this._setMode("view"):(p.add(this.viewButton.domNode,"current"),p.remove(this.viewXmlButton.domNode,"current"),p.remove(this.editButton.domNode,"current"),void this._fadeOut(d.editor.primaryToolbar.generatingView,c.hitch(this,function(){this._setMode("view");var e=b.documentType,h=q.parseFromString(f);this.editor.loadView(e,
h,!1).then(c.hitch(this,function(b){a.xmlString=f;a.hideMessage();this.editor.xmlPane.setXml(f,b.originalTitle);this._fadeIn()}),c.hitch(this,function(b){a.hideMessage();this._fadeIn();this._handleError(d.editor.primaryToolbar.errors.errorGeneratingView,b,!0)}))})))},_parseXml:function(b){var a={documentType:null,xmlString:b,xmlDocument:null};if(!b)return a;var c=null;try{c=q.parseFromString(b)}catch(d){return a}a.xmlDocument=c;b=this.editor.gxeContext.filterDocumentTypes();var g=new x;return a.documentType=
g.interrogate(c,b),a},_save:function(b){if(this.editor.gxeAdaptor.getAllowEditMetadata()){var a,d=this.editor.getEditDocument();if(d){this.editor.validationPane.clearMessages();var f=new n({isSaveAsDraft:!0,validationPane:this.editor.validationPane}),g=d.generateXml(f),h=f.documentTitle;f.hadValidationErrors||null!==h&&0!==h.length&&(b.isSaveAsDraft?this._download(g,h,!0):b.showDialog?(a=new A({editor:this.editor,gxeDocument:d,onSave:c.hitch(this,function(a,b,c){a.hide();this._executeSave(d,g,b,c)})}),
a.show()):this._executeSave(d,g,b.isSaveAndClose,b.bPushToItem))}}},_showLoadDialog:function(b){(new z({editor:this.editor,prompt:b,onSelect:c.hitch(this,function(a,b,f,g){a.hide();this._fadeOut(d.editor.primaryToolbar.loadingDocument,c.hitch(this,function(){this.editor.loadEditor(b,f,g,!1).then(c.hitch(this,function(){this._fadeIn()}),c.hitch(this,function(a){this._fadeIn();this._handleError(d.editor.primaryToolbar.errors.errorLoadingDocument,a,!0)}))}))}),onSelectPullItem:c.hitch(this,function(a){a.hide();
this.editor.gxeAdaptor.pullItem(this.editor.getEditDocument())})})).show()},_showTransformDialog:function(b,a){(new B({editor:this.editor,documentTypes:a,prompt:null,onSelect:c.hitch(this,function(a,f){a.hide();this._fadeOut(d.editor.transform.working,c.hitch(this,function(){var a=new C({gxeDocument:b,toDocumentType:f}),e=new n({ignoreErrors:!0}),a=b.generateXml(e,a),e=null;if(a)try{e=q.parseFromString(a)}catch(k){e=null,console.error(k)}this.editor.loadEditor(f,e,!1,!1).then(c.hitch(this,function(a){a.documentType.afterTransform(a,
b);this._fadeIn()}),c.hitch(this,function(a){this._fadeIn();this._handleError(d.editor.transform.errorTransforming,a,!0)}))}))})})).show()},_validate:function(b){var a=this.editor.getEditDocument();a&&(this.editor.validationPane.clearMessages(),b=new n({isSaveAsDraft:b,validationPane:this.editor.validationPane}),(a.generateXml(b),b.hadValidationErrors)||(new k({title:d.editor.validate.dialogTitle,showCancel:!1})).show(d.editor.validate.docIsValid,null,null))}});return w("extend-esri")&&c.setObject("dijit.metadata.editor.PrimaryToolbarMixin",
m,D),m});