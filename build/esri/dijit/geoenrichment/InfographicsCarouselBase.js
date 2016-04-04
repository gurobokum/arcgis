//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/InfographicsCarousel.html":'\x3cdiv style\x3d"display: inline-block;"\x3e\n    \x3ctable class\x3d"Browser_Table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\n        \x3ctr\x3e\n            \x3ctd class\x3d"Browser_BackTd"\x3e\n                \x3cdiv class\x3d"Browser_Back" data-dojo-attach-point\x3d"_browseBackDiv" data-dojo-attach-event\x3d"click: _slideBack"\x3e\x3c/div\x3e\n            \x3c/td\x3e\n            \x3ctd align\x3d"center"\x3e\n                \x3cdiv data-dojo-attach-point\x3d"_container" class\x3d"Browser_HostBorder"\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_titlePane" class\x3d"Browser_TitlePane" style\x3d"visibility: hidden;"\x3e\n                        \x3cselect data-dojo-type\x3d"dijit/form/Select"\n                            data-dojo-attach-point\x3d"_select"\n                            data-dojo-props\x3d"maxHeight: 151"\n                            data-dojo-attach-event\x3d"onChange: _onSelectChange"\x3e\n                        \x3c/select\x3e\n                    \x3c/div\x3e\n                    \x3cdiv class\x3d"Browser_ContentPane"\x3e\n                        \x3cdiv data-dojo-type\x3d"esri/dijit/geoenrichment/Infographic"\n                            data-dojo-attach-point\x3d"_infographic"\n                            data-dojo-props\x3d"autoWidth: false, autoHeight: false, title: \'\'"\n                            data-dojo-attach-event\x3d"onDataRequest: _showProgress, onDataLoad: _onDataLoad, onDataReady: _onDataReady, onDataError: _onDataError"\n                            style\x3d"position: absolute; width: 100%; height: 100%; top: 0; left: 0;"\x3e\n                        \x3c/div\x3e\n                    \x3c/div\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_updateProgress" class\x3d"Browser_UpdateProgress" style\x3d"display: none;"\x3e\x3c/div\x3e\n                \x3c/div\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"Browser_ForwardTd"\x3e\n                \x3cdiv class\x3d"Browser_Forward" data-dojo-attach-point\x3d"_browseForwardDiv" data-dojo-attach-event\x3d"click: _slideForward"\x3e\x3c/div\x3e\n            \x3c/td\x3e\n        \x3c/tr\x3e\n    \x3c/table\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_reloadProgress"\x3e\n        \x3cdiv class\x3d"Browser_ReloadProgressBack"\x3e\x3c/div\x3e\n        \x3cdiv class\x3d"Browser_ReloadProgress"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("esri/dijit/geoenrichment/InfographicsCarouselBase","../../declare dojo/_base/fx dojo/_base/lang dojo/aspect dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/fx dojo/sniff dojo/when dojox/gesture/swipe dojox/mvc/Templated dojo/text!./templates/InfographicsCarousel.html dojo/on ./theme ../_EventedWidget ./Infographic dijit/layout/BorderContainer dijit/layout/ContentPane dijit/form/Select".split(" "),function(m,t,d,u,v,w,g,h,n,q,F,x,y,z,p,A,B){function C(a,b,c){function f(a,
b,d,f,e){var g={};return g[b]={start:d,end:f},e&&(g[b].units=e),t.animateProperty({node:a,properties:g,duration:c})}if(b&&c){var e=a.cloneNode(!0);a.parentNode.insertBefore(e,a);var d;if(!w.isBodyLtr())switch(b){case k:b=l;break;case l:b=k}switch(b){case r:d=n.combine([f(e,"opacity",1,0),f(a,"opacity",0,1)]);break;case k:d=n.combine([f(e,"left",0,-100,"%"),f(a,"left",100,0,"%")]);break;case l:d=n.combine([f(e,"left",0,100,"%"),f(a,"left",-100,0,"%")])}u.after(d,"onEnd",function(){v.destroy(e)});d.play()}}
var r="f",k="sf",l="sb",D=m(x.Swipe,{_process:function(a,b,c){c._locking=c._locking||{};c._locking[this.defaultEvent]||this.isLocked(c.currentTarget)||(c._locking[this.defaultEvent]=!0,this[b](a.data,c))}}),E=m(null,{_swipe:null,_node:null,_rtl:null,_ltr:null,_distance:50,constructor:function(a,b,c,f){this._node=a;this._rtl=b;this._ltr=c;f&&(this._distance=f);this._swipe=new D;p(this._node,this._swipe,function(){});p(this._node,this._swipe.end,d.hitch(this,"_end"))},_end:function(a){a=a.dx;Math.abs(a)<
this._distance||(0>a&&this._rtl?this._rtl():this._ltr&&this._ltr())}});return m("esri.dijit.geoenrichment.InfographicsCarouselBase",[y,B],{templateString:z,studyArea:null,outSR:null,selectedIndex:0,options:null,expanded:!0,returnGeometry:!1,animDuration:200,infographicsFactory:null,_items:null,_loading:null,_infographic:null,_pendingAnimation:null,_pendingReload:!0,_browseDisabled:!1,_eventMap:{resize:["size"],"data-ready":["provider"],"data-error":["error"]},postCreate:function(){this.inherited(arguments);
setTimeout(d.hitch(this,this._onResize),0);q("touch")&&new E(this._container,d.hitch(this,"_slideForward"),d.hitch(this,"_slideBack"));q("esri-touch")&&p(this.domNode,"touchmove",function(a){a.stopPropagation()})},startup:function(){if(!this._started){this.inherited(arguments);this._infographic.autoTitle=!1;this._infographic.setGeoenrichment(this.infographicsFactory.createGeoenrichment());this.set("studyArea",this.studyArea);var a=this.options||this.infographicsFactory.getOptions();this.set("options",
a)}},_setOptionsAttr:function(a){this._set("options",a);this._getReports();A.set(this.domNode,this.options.theme)},_setStudyAreaAttr:function(a){this._set("studyArea",a);this._started&&(this._infographic.set("studyArea",a),this._getReports())},_setSubtitleAttr:function(a){this._infographic.set("subtitle",a)},_setReturnGeometryAttr:function(a){this._set("returnGeometry",a);this._infographic.set("returnGeometry",a)},_setOutSR:function(a){this._set("outSR",a);this._infographic.set("outSR",a)},_setCountryIDAttr:function(a){this._infographic.set("countryID",
a)},_getCountryIDAttr:function(){return this._infographic.get("countryID")},_getReports:function(){if(this.options&&this._started){var a=this._infographic.get("countryID");a&&(this._pendingReload=!0,this._showProgress(),this.options.getItems(a).then(d.hitch(this,this._fillReports),d.hitch(this,this._onDataError)))}},_fillReports:function(a){this._items=[];this._select.removeOption(this._select.getOptions());for(var b=0;b<a.length;b++)if(a[b].isVisible){var c=a[b];this._select.addOption({value:this._items.length.toString(),
label:c.title});this._items.push(c)}this._browseDisabled=1>=this._items.length;h[this._browseDisabled?"add":"remove"](this._browseBackDiv,"Browser_Disabled");h[this._browseDisabled?"add":"remove"](this._browseForwardDiv,"Browser_Disabled");this._infographic.set("cacheLimit",this._items.length);this._titlePane.style.visibility="";this._updateSelection();this._infographic.set("studyAreaOptions",this.options.studyAreaOptions)},_setExpandedAttr:function(a){this._set("expanded",a);a?h.remove(this.domNode,
"Collapsed"):h.add(this.domNode,"Collapsed");this._infographic.set("expanded",a);this._pendingReload=!0},_setSelectedIndexAttr:function(a){this.selectedIndex!=a&&(this._set("selectedIndex",a),this._updateSelection())},_updateSelection:function(){if(this._items){this._pendingAnimation||(this._pendingAnimation=r);this._pendingReload=!0;var a=this._items[this.selectedIndex];this._select.set("value",this.selectedIndex);this._infographic.set("type",a.type);this._infographic.set("variables",a.variables)}},
_onDataReady:function(a){var b=!1,c=a.getData();if(0<c.features.length)for(var d=c.features[0],e=0;e<c.fields.length;e++)if(c.fields[e].fullName&&d.attributes[c.fields[e].name]){b=!0;break}return b&&(C(this._infographic.domNode,this._pendingAnimation,this.animDuration),this._pendingAnimation=null,this.onDataReady(a)),b},onDataReady:function(){},_onDataLoad:function(){this._hideProgress();this.onDataLoad()},onDataLoad:function(){},_onDataError:function(a){this._hideProgress();this.onDataError(a)},
onDataError:function(){},_showProgress:function(){this._pendingReload?(g.set(this._reloadProgress,"display",""),this._pendingReload=!1):g.set(this._updateProgress,"display","")},_hideProgress:function(){g.set(this._reloadProgress,"display","none");g.set(this._updateProgress,"display","none")},_slideBack:function(){if(!this._browseDisabled){this._pendingAnimation=l;this._infographic.set("effect","slideBack");var a=this.get("selectedIndex")-1;0>a&&(a=this._items.length-1);this.set("selectedIndex",a)}},
_slideForward:function(){if(!this._browseDisabled){this._pendingAnimation=k;var a=this.get("selectedIndex")+1;a>=this._items.length&&(a=0);this.set("selectedIndex",a)}},_onSelectChange:function(){this.set("selectedIndex",+this._select.get("value"))},_onResize:function(){this.onResize([this.domNode.scrollWidth,this.domNode.scrollHeight])},onResize:function(){}})});