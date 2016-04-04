//>>built
require({cache:{"url:esri/dijit/analysis/templates/CreditEstimator.html":'\x3cdiv class\x3d"esriAnalysis esriSimpleForm"\x3e\n  \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_table"  style\x3d"border-collapse:collapse;border-spacing:5px;"\x3e\n     \x3c!--\x3ctr\x3e\n      \x3ctd\x3e\n        \x3clabel class\x3d"esriFloatLeading"\x3e${i18n.analysisLayersLabel}\x3c/label\x3e\n      \x3c/td\x3e\n      \x3ctd\x3e\n      \x3c/td\x3e\n    \x3c/tr\x3e--\x3e\n     \x3ctr\x3e\n      \x3ctd\x3e\n        \x3clabel class\x3d"esriFloatLeading"\x3e${i18n.totalRecordsLabel}\x3c/label\x3e\n      \x3c/td\x3e\n      \x3ctd data-dojo-attach-point\x3d"_totalRecordsNode"\x3e\n      \x3c/td\x3e\n    \x3c/tr\x3e\n     \x3c!--\x3ctr\x3e\n      \x3ctd\x3e\n        \x3clabel class\x3d"esriFloatLeading"\x3e${i18n.creditsAvailLabel}\x3c/label\x3e\n      \x3c/td\x3e\n      \x3ctd\x3e\n      \x3c/td\x3e\n    \x3c/tr\x3e--\x3e\n     \x3ctr\x3e\n      \x3ctd\x3e\n        \x3clabel class\x3d"esriFloatLeading" data-dojo-attach-point\x3d"_costLabelNode"\x3e${i18n.creditsReqLabel}\x3c/label\x3e\n      \x3c/td\x3e\n      \x3ctd data-dojo-attach-point\x3d"_creditsReqNode"\x3e\n      \x3c/td\x3e\n    \x3c/tr\x3e\n  \x3c/table\x3e\n  \x3cdiv data-dojo-attach-point\x3d"_messageDiv"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("esri/dijit/analysis/CreditEstimator","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/event dojo/_base/kernel dojo/has dojo/dom-construct dojo/dom-class dojo/dom-attr dojo/dom-style dojo/string dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_OnDijitClickMixin dijit/_FocusMixin ../../kernel ../../lang dojo/i18n!../../nls/jsapi dojo/text!./templates/CreditEstimator.html".split(" "),function(e,m,b,x,y,g,n,z,A,c,h,p,k,q,r,t,u,v,l,f,w){e=m([q,r,t,u],{declaredClass:"esri.dijit.analysis.CreditEstimator",
i18n:null,templateString:w,postMixInProperties:function(){this.inherited(arguments);this.i18n={};b.mixin(this.i18n,f.common);b.mixin(this.i18n,f.analysisMsgCodes);b.mixin(this.i18n,f.creditEstimator)},postCreate:function(){this.inherited(arguments)},_setContentAttr:function(a){var b,d="";a.code&&!a.messageCode&&(a.messageCode=a.code);a.messageCode?(d=l.isDefined(this.i18n[a.messageCode])?this.i18n[a.messageCode]:a.message,d=l.isDefined(a.params)?p.substitute(d,a.params):d,c.set(this._messageDiv,"display",
"block"),c.set(this._messageDiv,"innerHTML",d),h.set(this._table,"display","none")):(h.set(this._table,"display","table"),c.set(this._messageDiv,"display","none"),c.set(this._messageDiv,"innerHTML",""),b=a.cost||a.maximumCost,a.maximumCost&&c.set(this._costLabelNode,"innerHTML",this.i18n.maxCreditsLabel),c.set(this._totalRecordsNode,"innerHTML",k.format(a.totalRecords,{locale:g.locale})),c.set(this._creditsReqNode,"innerHTML",k.format(b,{locale:g.locale})))}});return n("extend-esri")&&b.setObject("dijit.analysis.CreditEstimator",
e,v),e});