//>>built
require({cache:{"url:esri/dijit/analysis/templates/CreateWatersheds.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\n         \x3ctable class\x3d"esriFormTable" \x3e \n            \x3ctr\x3e\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"createWatershedIcon"\x3e\x3c/div\x3e\x3c/td\x3e\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.createWatershed}\x3c/td\x3e\n              \x3ctd\x3e\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\n                    \x3c/div\x3e\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\n                    \x3c/div\x3e              \n                \x3c/div\x3e  \n              \x3c/td\x3e\n            \x3c/tr\x3e\n         \x3c/table\x3e\n    \x3c/div\x3e\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\n     \x3ctable class\x3d"esriFormTable"\x3e \n       \x3ctbody\x3e\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription" \x3e\x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\n          \x3c/td\x3e\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\n            \x3ctable style\x3d"width:100%;"\x3e\n              \x3ctr\x3e\n                \x3ctd style\x3d"width:80%"\x3e  \n                \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\n                \x3c/td\x3e\n                \x3ctd style\x3d"width:20%"\x3e\n                \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton"  data-dojo-attach-point\x3d"_analysisPointDrawBtn"  class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon esriPointIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handleInputDrawPointChange"\x3e\x3c/div\x3e\n                \x3c/td\x3e\n              \x3c/tr\x3e\n            \x3c/table\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e          \n        \x3ctr\x3e\n          \x3ctd colspan\x3d"2"\x3e\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n            \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.searchDistanceLabel}\x3c/label\x3e\n          \x3c/td\x3e\n          \x3ctd class\x3d"shortTextInput"\x3e\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"SearchDistance"\x3e\x3c/a\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd\x3e\n            \x3cinput type\x3d"text" class\x3d"esriLeadingMargin1" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,required:false,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_searchDistanceInput" style\x3d"width:90%;"\x3e\n          \x3c/td\x3e\n          \x3ctd colspan\x3d"2" style\x3d"width:60%;"\x3e\n            \x3cselect class\x3d"mediumInput esriMediumlabel esriAnalysisSelect esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:65%;table-layout:fixed;"\x3e\n            \x3c/select\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"2"\x3e\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\n          \x3c/td\x3e\n          \x3ctd class\x3d"shortTextInput"\x3e\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputLayer"\x3e\x3c/a\x3e \n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"3"\x3e\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd colspan\x3d"3"\x3e\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\n             \x3c/div\x3e              \n          \x3c/td\x3e\n        \x3c/tr\x3e\n      \x3c/tbody\x3e\n     \x3c/table\x3e\n   \x3c/div\x3e\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\n     \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\n       \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\n         ${i18n.useMapExtent}\n     \x3c/label\x3e\n    \x3c/div\x3e\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\n        ${i18n.runAnalysis}\n    \x3c/button\x3e\n  \x3c/div\x3e\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\n  \x3c/div\x3e    \n\x3c/div\x3e\n'}});
define("esri/dijit/analysis/CreateWatersheds","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/NumberSpinner dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../PopupTemplate ../../layers/FeatureLayer ../../graphic ./utils ./CreditEstimator ../../symbols/PictureMarkerSymbol dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels dojo/i18n!../../nls/jsapi dojo/text!./templates/CreateWatersheds.html".split(" "),
function(k,p,d,g,h,H,f,q,I,l,m,r,J,K,t,L,u,v,w,x,y,M,N,O,P,Q,R,S,T,U,V,W,z,X,A,B,Y,Z,n,aa,C,D,e,ba,E,ca,da,ea,F,G){k=p([u,v,w,x,y,B,A],{declaredClass:"esri.dijit.analysis.CreateWatersheds",templateString:G,widgetsInTemplate:!0,inputLayer:null,searchDistance:null,searchUnits:"Meters",outputLayerName:null,i18n:null,map:null,toolName:"CreateWatersheds",helpFileName:"CreateWatersheds",resultParameter:["watershedLayer","snapPourPtsLayer"],constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=
a.containerNode)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,h.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,F.createWatershedTool);this.set("drawPointLayerName",this.i18n.pointlayerName)},postCreate:function(){this.inherited(arguments);t.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&
this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),g.forEach(this.inputLayers,function(a,c){return a===this._pointfeatureLayer?(this._analysisSelect.removeOption({value:c+1,label:this._pointfeatureLayer.name}),void this.inputLayers.splice(c,1)):void 0},this));this._handleInputDrawPointChange(!1);this.emit("close",{save:!a})},clear:function(){this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),g.forEach(this.inputLayers,function(a,b){return a===this._pointfeatureLayer?
(this._analysisSelect.removeOption({value:b+1,label:this._pointfeatureLayer.name}),void this.inputLayers.splice(b,1)):void 0},this));this._handleInputDrawPointChange(!1)},_handleShowCreditsClick:function(a){a.preventDefault();a={};this._form.validate()&&(a.inputLayer=f.toJson(e.constructAnalysisInputLyrObj(this.get("inputLayer"))),a.searchDistance=this.get("searchDistance"),a.searchUnits=this.get("searchUnits"),this.returnFeatureCollection||(a.OutputName=f.toJson({serviceProperties:{name:this.get("outputLayerName")}})),
this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=f.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()})))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a,b={},c={};b.inputLayer=f.toJson(e.constructAnalysisInputLyrObj(this.get("inputLayer")));b.searchDistance=this.get("searchDistance");b.searchUnits=this.get("searchUnits");
this.returnFeatureCollection||(b.OutputName=f.toJson({serviceProperties:{name:this.get("outputLayerName")}}));this.showChooseExtent&&!this.get("disableExtent")&&this._useExtentCheck.get("checked")&&(b.context=f.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(a={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.extent=this.map.extent._normalize(!0)),b.context=f.toJson(a));b.returnFeatureCollection=this.returnFeatureCollection;
c.jobParams=b;c.itemParams={description:this.i18n.itemDescription,tags:l.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:b.field?b.field:""}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(c.itemParams.folder=this.get("folderId"));console.log(c);this.execute(c)}},_save:function(){},_buildUI:function(){var a=!0;this._loadConnections();this.signInPromise.then(d.hitch(this,e.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.get("showSelectAnalysisLayer")&&
(!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),e.populateAnalysisLayers(this,"inputLayer","inputLayers",{posIncrement:1}));e.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.inputLayer&&this._updateAnalysisLayerUI(a);m.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,
function(a){this.folderStore=a;e.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));m.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");m.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},
{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]);this.searchUnits&&this._distanceUnitsSelect.set("value",this.searchUnits);this.searchDistance&&this._searchDistanceInput.set("value",this.searchDistance)},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!1));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!0))},_handleAnalysisLayerChange:function(a){"browse"===a?(this._analysisquery||
(this._analysisquery=this._browsedlg.browseItems.get("query")),this._analysisPointDrawBtn.reset(),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"point"'),this._browsedlg.show()):(this.inputLayer=this.inputLayers[a-1],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(a){this.inputLayer&&(r.set(this._interpolateToolDescription,"innerHTML",l.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),a&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,
{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName),this._pointfeatureLayer&&this._pointfeatureLayer.name!==this.inputLayer.name&&this._analysisPointDrawBtn.reset())},_handleBrowseItemsSelect:function(a){a&&a.selection&&e.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:this._browsedlg,widget:this}).always(d.hitch(this,this._updateAnalysisLayerUI,!0))},_handleInputDrawPointChange:function(a){a?(this.emit("drawtool-activate",
{}),this._pointfeatureLayer||this._createPointFeatColl(),this._pointtoolbar.activate(n.POINT)):this._pointtoolbar.deactivate()},_createPointFeatColl:function(){var a=e.createPointFeatureCollection(this.drawPointLayerName);this._pointfeatureLayer=new C(a,{id:this.drawPointLayerName});this.map.addLayer(this._pointfeatureLayer);h.connect(this._pointfeatureLayer,"onClick",d.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},_addPointFeatures:function(a){var b=[],c={},d=(new E({height:24,
width:24,contentType:"image/png",type:"esriPMS",url:"http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png"})).setOffset(0,12);a=new D(a,d);if(this.map.graphics.add(a),c.description="blayer desc",c.title="blayer",a.setAttributes(c),b.push(a),this._pointfeatureLayer.applyEdits(b,null,null),0===this.inputLayers.length||this.inputLayers[this.inputLayers.length-1]!==this._pointfeatureLayer)this.inputLayers.push(this._pointfeatureLayer),b=this.inputLayers.length-1,c=this._analysisSelect.getOptions(),
this._analysisSelect.removeOption(c),c=g.map(c,function(a){return a.selected=!1,a}),this._analysisSelect.addOption({value:b+1,label:this._pointfeatureLayer.name,selected:!0}),this._analysisSelect.addOption(c),this._handleAnalysisLayerChange(b+1)},validateServiceName:function(a){return e.validateServiceName(a,{textInput:this._outputLayerInput})},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayersAttr:function(a){this.inputLayers=
a},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_getOutputLayerNameAttr:function(){return this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value")),this.outputLayerName},_setOutputLayerNameAttr:function(a){this.outputLayerName=a},_setMapAttr:function(a){this.map=a;this._pointtoolbar=new n(this.map);h.connect(this._pointtoolbar,"onDrawEnd",d.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},
_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setDisableExtentAttr:function(a){this._useExtentCheck.set("checked",!a);this._useExtentCheck.set("disabled",a)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_setSearchUnitsAttr:function(a){this.searchUnits=a},_getSearchUnitsAttr:function(){return this._distanceUnitsSelect&&this._distanceUnitsSelect.get("value")&&(this.searchUnits=this._distanceUnitsSelect.get("value")),this.searchUnits},_setSearchDistanceAttr:function(a){this.searchDistance=
a},_getSearchDistanceAttr:function(){return this._searchDistanceInput&&this._searchDistanceInput.get("value")&&(this.searchDistance=this._searchDistanceInput.get("value")),this.searchDistance},_setDrawPointLayerNameAttr:function(a){this.drawPointLayerName=a},_getDrawPointLayerNameAttr:function(){return this._pointfeatureLayer.name},_getDrawLayerAttr:function(){var a=[];return this._featureLayer&&a.push(this._featureLayer),this._pointfeatureLayer&&a.push(this._pointfeatureLayer),a},_connect:function(a,
b,c){this._pbConnects.push(h.connect(a,b,c))}});return q("extend-esri")&&d.setObject("dijit.analysis.CreateWatersheds",k,z),k});