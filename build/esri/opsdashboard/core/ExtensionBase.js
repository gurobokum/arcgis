//>>built
define("esri/opsdashboard/core/ExtensionBase","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/_base/Deferred ../../IdentityManager ../../Credential ../../request ./messageHandler ./errorMessages ./MessageReceiver ../MapWidgetProxy ../DataSourceProxy".split(" "),function(l,d,c,m,g,n,p,e,f,q,k,h){function r(a){function b(a){return e._sendMessageWithReply({functionName:"getCredential",args:{url:a}})}a&&(g.useSignInPage=!1,p.setRequestPreCallback(function(a){return a.failOk=!0,a}),g.signIn=function(a){var c=
new m;return b(a).then(d.hitch(this,function(a){a=new n(a.credential);a.refreshToken=function(){return b(this.server).then(d.hitch(this,function(a){this.token=a.credential.token;this.expires=a.credential.expires?Number(a.credential.expires):null;this.creationTime=a.credential.creationTime;this.validity=a.credential.validity;this.onTokenChange()}))};c.callback(a)}),function(a){c.errback(a)}),c},g.setProtocolErrorHandler(function(){return!0}))}return l([q],{drawingType:{POINT:"point",LINE:"line",POLYLINE:"polyline",
FREEHAND_POLYLINE:"freehandpolyline",EXTENT:"extent",CIRCLE:"circle",POLYGON:"polygon",FREEHAND_POLYGON:"freehandpolygon"},_hostInitialized:!1,isNative:null,portalUrl:null,constructor:function(){this._dataSourceProxies={};this._mapWidgetProxies=[];e._sendMessageWithReply({functionName:"initialize"}).then(d.hitch(this,this._initializeResponseReceived)).then(d.hitch(this,this._hostReady)).then(function(){e._sendMessage({functionName:"afterInitialize"})}).otherwise(d.hitch(this,this._hostInitializationError))},
__messageReceived:function(a){switch(a.functionName.toLowerCase()){case "datasourceadded":return this._dataSourceAdded(a.args.dataSource);case "datasourceremoved":return this._dataSourceRemoved(a.args.dataSourceId);case "mapwidgetadded":return this._mapWidgetAdded(a.args.mapWidget);case "mapwidgetremoved":return this._mapWidgetRemoved(a.args.mapWidgetId);default:return this._messageReceived(a)}},_initializeResponseReceived:function(a){return this.isNative=e.isNative,this._hostInitialized=!0,this.portalHelperServices=
a.helperServices,this.portalUrl=a.portalUrl,r(a.usePortalServices),this._setConfig(a.configuration),(new c).resolve()},_isHostInitialized:function(){return this._hostInitialized},_hostReady:function(){this.hostReady();this.emit("host-ready")},hostReady:function(){},_hostInitializationError:function(a){this._hostInitialized=!1;this.hostInitializationError(a);this.emit("initialization-error",{error:a})},hostInitializationError:function(){},getMapWidgetProxies:function(){return this._isHostInitialized()?
this._mapWidgetProxies&&0<this._mapWidgetProxies.length?(new c).resolve(this._mapWidgetProxies):e._sendMessageWithReply({functionName:"getMapWidgets"}).then(d.hitch(this,function(a){return this._mapWidgetProxies=a.mapWidgets.map(function(a){return new k(a)},this),this._mapWidgetProxies})):(new c).reject(Error(f.hostNotReady))},getMapWidgetProxy:function(a){return this._isHostInitialized()?a?this.getMapWidgetProxies().then(function(b){for(var c=0;c<b.length;c++)if(b[c].id===a)return b[c];return null}):
(new c).reject(Error(f.invalidArguments)):(new c).reject(Error(f.hostNotReady))},_mapWidgetRemoved:function(a){for(var b=0;b<this._mapWidgetProxies.length;b++)if(this._mapWidgetProxies[b].id===a){this._mapWidgetProxies.splice(b,1);break}this.mapWidgetRemoved(a);this.emit("map-widget-removed",{mapWidgetId:a})},mapWidgetRemoved:function(){},_mapWidgetAdded:function(a){a=new k(a);this._mapWidgetProxies.push(a);this.mapWidgetAdded(a);this.emit("map-widget-added",{mapWidgetProxy:a})},mapWidgetAdded:function(){},
getDataSourceProxies:function(){return this._isHostInitialized()?e._sendMessageWithReply({functionName:"getDataSources"}).then(d.hitch(this,function(a){return this._dataSourceProxies={},a.dataSources.map(function(a){var c=new h(a);return this._dataSourceProxies[a.id]=c,c},this)})):(new c).reject(Error(f.hostNotReady))},getDataSourceProxy:function(a){if(!this._isHostInitialized())return(new c).reject(Error(f.hostNotReady));if(!a)return(new c).reject(Error(f.invalidArguments));var b=this._dataSourceProxies[a];
return b?(new c).resolve(b):e._sendMessageWithReply({functionName:"getDataSource",args:{dataSourceId:a}}).then(d.hitch(this,function(a){var b=new h(a.dataSource);return this._dataSourceProxies[a.dataSource.id]=b,b}))},_dataSourceRemoved:function(a){for(var b=0;b<this._dataSourceProxies.length;b++)if(this._dataSourceProxies[b].id===a){this._dataSourceProxies.splice(b,1);break}this.dataSourceRemoved(a);this.emit("data-source-removed",{dataSourceId:a})},dataSourceRemoved:function(){},_dataSourceAdded:function(a){var b=
new h(a);this._dataSourceProxies[a.dataSourceId]=b;this.dataSourceAdded(b);this.emit("data-source-added",{dataSourceProxy:b})},dataSourceAdded:function(){}})});