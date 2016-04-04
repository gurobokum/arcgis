//>>built
define("esri/dijit/ObliqueViewer","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../tasks/QueryTask ../tasks/query ./_EventedWidget dijit/_Widget ./_ObliqueRotationWidget dojo/_base/array ../ImageSpatialReference ../tasks/ImageServiceProjectTask ../tasks/ProjectParameters ../layers/MosaicRule ../geometry/Extent ../geometry/Polygon ../lang ../config ./RasterList dojo/store/Observable dojo/store/Memory dojo/Deferred".split(" "),function(p,q,z,A,B,v,C,D,E,m,F,G,H,k,n,r,t,e,I,w,x,y){p=p([C,D],
{declaredClass:"esri.dijit.ObliqueViewer",azimuthField:"SensorAzimuth",elevationThreshold:70,elevationField:"SensorElevation",snap:!0,_refreshOK:!0,isNadir:!1,showThumbnail:!0,noQueryOnExtentChange:!1,azimuthTolerance:10,rasterListRefresh:!0,extents:[],maxExtentIdx:5,currentExtentIdx:null,setNextExtent:function(){if(!(this.currentExtentIdx>=this.maxExtentIdx||this.currentExtentIdx>=this.extents.length-1)){var a=this;this.currentExtentIdx++;var b,c=new k;c.method=k.METHOD_LOCKRASTER;c.lockRasterIds=
[this.extents[this.currentExtentIdx].spatialReference.icsid];a.imageServiceLayer.setMosaicRule(c,!0);a._refreshOK=!1;a.map.spatialReference=this.extents[this.currentExtentIdx].spatialReference;b=e.defaults.map.zoomDuration;e.defaults.map.zoomDuration=0;a.map.setExtent(this.extents[this.currentExtentIdx]).then(function(){a._refreshOK=!0;e.defaults.map.zoomDuration=b})}},setPreviousExtent:function(){if(!(0>=this.currentExtentIdx)){var a=this;this.currentExtentIdx--;var b,c=new k;c.method=k.METHOD_LOCKRASTER;
c.lockRasterIds=[this.extents[this.currentExtentIdx].spatialReference.icsid];a.imageServiceLayer.setMosaicRule(c,!0);a._refreshOK=!1;a.map.spatialReference=this.extents[this.currentExtentIdx].spatialReference;b=e.defaults.map.zoomDuration;e.defaults.map.zoomDuration=0;a.map.setExtent(this.extents[this.currentExtentIdx]).then(function(){a._refreshOK=!0;e.defaults.map.zoomDuration=b})}},isPreviousAvailable:function(){},isNextAvailable:function(){},_isICS:function(a){return!(!a.ics&&!a.icsid)},resizeRotationGauge:function(a){this._rotationWidget.resize(a)},
_initializeTasks:function(){this.obliqueRecordsQueryTask=new B(this.imageServiceUrl);this.projectTask=new G},_verifyRasterInfoFields:function(){return this.rasterInfoFields&&this.rasterInfoFields.length},_setupRasterList:function(){var a=this,b=[{name:this.imageServiceLayer.objectIdField,alias:"Object ID",display:!0},{name:this.azimuthField,alias:"Azimuth",display:!0},{name:this.elevationField,alias:this.elevationField,display:!0}];this.rasterInfoFields=this._verifyRasterInfoFields()?this.rasterInfoFields:
b;this.rasterList=new I({data:new w(new x),showThumbnail:this.showThumbnail,imageServiceUrl:this.imageServiceLayer.url,fields:this.rasterInfoFields},this.rasterListDiv);this.rasterList.on("raster-select",function(c){a.selectedRasterId=c[a.imageServiceLayer.objectIdField];a.emit("raster-select",{selectedRasterId:a.selectedRasterId});a.setImage(a.selectedRasterId,a.map.extent);m.forEach(a.filteredRecords,function(c){delete c.attributes.selected;c.attributes[a.imageServiceLayer.objectIdField]===a.selectedRasterId&&
(c.attributes.selected=!0)});a._rotationWidget&&a._rotationWidget.setAzimuth(c[a.azimuthField])});this.rasterList.startup()},_setupRotationWidget:function(){var a=this;this._rotationWidget=new E({snap:this.snap,azimuthAngle:this.azimuthAngle},this.rotationDiv);this._rotationWidget.startup();this.own(this._rotationWidget.on("azimuth-change",function(b){b=b.azimuth;a.currentExtentIdx=0;a.extents=[];a.emit("azimuth-change",{azimuth:b});b?(a.azimuthAngle=b,a._checkExtentOrientation(),a._filterByAzimuth(),
a._rotationWidget.refresh({features:a.records}),a._refreshListDijit(a.filteredRecords),a._refreshImage(a.map.extent),a._oldAzimuth=b,a.isNadir=!1):a._switchToNadir()}))},_checkExtentOrientation:function(){var a=(this._oldAzimuth||0,this._oldAzimuth-this.azimuthAngle),a=Math.abs(a/90%2);this._azimuthExtentChanged=.25>a||1.75<a?!1:!0},_refreshListDijit:function(a){a=this._prepareListData(a);this.rasterList&&this.rasterListRefresh&&this.rasterList.setData(a);this.emit("records-refresh",{records:this.records,
filteredRecords:this.filteredRecords})},_prepareListData:function(a){var b,c=[],d=this.imageServiceLayer.objectIdField;return m.forEach(a,function(a){b=a.attributes;b.thumbnailUrl=this.imageServiceUrl+"/"+b[d]+"/thumbnail";c.push(b)},this),new w(new x({data:c,idProperty:this.imageServiceLayer.objectIdField}))},_switchToNadir:function(){var a=!!this.map.extent.spatialReference.icsid,b=this.defaultNadirMosaicRule||this.imageServiceLayer.mosaicRule||new k;if(this.azimuthAngle=null,this._oldAzimuth=null,
this._azimuthExtentChanged=!1,b.method=b.method||k.METHOD_NONE,b.where=this.elevationField+"\x3e"+this.elevationThreshold,this.defaultNadirMosaicRule=b,this.imageServiceLayer.setMosaicRule(b,a),a){var c,d=this;this.projectGeometry(this.map.extent,this.nadirSpatialReference).then(function(a){d._verifyExtent(a[0])&&(d._refreshOK=!1,d.map.spatialReference=a[0].spatialReference,c=e.defaults.map.zoomDuration,e.defaults.map.zoomDuration=0,d.map.setExtent((new n(a[0])).setSpatialReference(a[0].spatialReference)).then(function(){d._refreshOK=
!0;d.isNadir=!0;e.defaults.map.zoomDuration=c;d.selectedRasterId=null;d.selectedRaster=null;d.filteredRecords=null}))})}},projectGeometry:function(a,b){var c=new H;return b=b||this.map.spatialReference,c.geometries=[a],c.outSR=b,this.projectTask.execute(c)},_verifyExtent:function(a){return!(isNaN(a.xmin)||isNaN(a.xmax)||isNaN(a.ymin)||isNaN(a.ymax))},_verifyPoint:function(a){return!isNaN(a.x)&&!isNaN(a.y)},_refreshRecords:function(a){function b(b){c._verifyExtent(b[0])?(c.nadirExtent=b[0],c.emit("extent-change",
{extent:c.nadirExtent}),c.search(c._trimExtent(c.nadirExtent,l)).then(function(b){return b&&b.features&&b.features.length?(c.records=b.features,c._rotationWidget&&c._rotationWidget.refresh({features:c.records}),void(c.isNadir?c._refreshListDijit(c.records):(c._filterByAzimuth(),c._refreshListDijit(c.filteredRecords),a&&c.filteredRecords&&c.filteredRecords.length&&c._refreshImage(c.map.extent)))):console.log("Oblique viewer: no records returned")})):(console.error("Oblique viewer: Project Operation returned invalid extent"),
c.search(c._trimExtent(c.map.extent,l)).then(function(b){return b&&b.features&&b.features.length?(c.records=b.features,c._rotationWidget&&c._rotationWidget.refresh({features:c.records}),void(c.isNadir?c._refreshListDijit(c.records):(c._filterByAzimuth(),c._refreshListDijit(c.filteredRecords),a&&c.filteredRecords&&c.filteredRecords.length&&c._refreshImage((new r(c.filteredRecords[0].geometry)).getExtent())))):console.log("Oblique viewer: no records returned")}))}var c=this,d=this.map.extent,l=.15;
d&&(d.spatialReference.icsid||d.spatialReference.ics)?d:null;this.nadirSpatialReference.equals(this.map.extent.spatialReference)?b([this.map.extent]):this.projectGeometry(this.map.extent,this.nadirSpatialReference).then(b)},postCreate:function(){this.inherited(arguments);this.map&&this.imageServiceLayer||console.error("ObliqueViewer: Map or Image service layer not provided.");this.imageServiceUrl=this.imageServiceLayer.url;this.nadirSpatialReference=this.map.extent.spatialReference;this._initializeTasks();
(this.isNadir=!t.isDefined(this.azimuthAngle))&&this._switchToNadir();this.rotationDiv&&this._setupRotationWidget();this.rasterListDiv&&(this.imageServiceLayer.loaded?this._setupRasterList():this.imageServiceLayer.on("load",q.hitch(this,this._setupRasterList)));this.sorter||(this.sorter=this._sortSpatially);this.own(this.map.on("extent-change",q.hitch(this,function(){this._refreshOK&&!this.noQueryOnExtentChange&&(this._isICS(this.map.extent.spatialReference)||(this._nadirExtent=this.map.extent,this._switchToNadir(),
this.emit("extent-change",{extent:this._nadirExtent})),this._refreshRecords(!0),this._azimuthExtentChanged=!1)})));t.isDefined(this.azimuthAngle)&&!this.noQueryOnExtentChange&&this._refreshRecords()},_refreshImage:function(a){return this.filteredRecords&&this.filteredRecords.length&&this.selectedRasterId!==this.filteredRecords[0].attributes[this.imageServiceLayer.objectIdField]?void this._setSelectedRaster(a):void this._refreshSavedExtents()},_refreshSavedExtents:function(){this._isICS(this.map.extent.spatialReference)&&
(this.extents&&this.extents.length?(this.extents.length>this.maxExtentIdx&&(this.extents.shift(),this.currentExtentIdx--),this.currentExtentIdx<this.extents.length-1?this.currentExtentIdx=this.extents.length-1:this.currentExtentIdx++):(this.currentExtentIdx=0,this.extents=[]),this.extents.push(this.map.extent))},_createExtent:function(a,b,c){var d=c.getWidth()/2*1.00001;c=c.getHeight()/2;return new n(a.x-d,a.y-c,a.x+d,a.y+c,b)},setImage:function(a,b){function c(b){if(u){if(!f._verifyPoint(b[0]))return console.log("Project operation returned invalid result.");
h=f._createExtent(b[0],f.imageSpatialReference,u)}else{if(!u&&!f._verifyExtent(b[0]))return console.log("Project operation returned invalid extent.");h=b[0]}d=new k;d.method=k.METHOD_LOCKRASTER;d.lockRasterIds=[a];f.imageServiceLayer.setMosaicRule(d,!0);f._refreshOK=!1;f.map.spatialReference=h.spatialReference;l=e.defaults.map.zoomDuration;g=e.defaults.map.panDuration=0;e.defaults.map.zoomDuration=0;e.defaults.map.panDuration=0;f.map.setExtent((new n(h)).setSpatialReference(h.spatialReference)).then(function(){f._refreshOK=
!0;e.defaults.map.zoomDuration=l;e.defaults.map.panDuration=g;f._refreshSavedExtents()})}if(!a)return console.error("Object ID of raster to be displayed not provided");var d,l,g,h,f=this,u=b&&(b.spatialReference.icsid||b.spatialReference.ics)?b:null;this.imageSpatialReference=new F({icsid:a,url:this.imageServiceUrl});b&&b.spatialReference&&!b.spatialReference.ics&&!b.spatialReference.icsid?(f.nadirExtent=b,f.emit("extent-change",{extent:f.nadirExtent}),f.projectGeometry(f.nadirExtent,f.imageSpatialReference).then(c)):
this.projectGeometry(this._adjustExtentAspectRatio(b),this.nadirSpatialReference).then(function(a){f.nadirExtent=(new n(a[0])).setSpatialReference(f.nadirSpatialReference);f.emit("extent-change",{extent:f.nadirExtent});f.projectGeometry(b.getCenter(),f.imageSpatialReference).then(c)})},locate:function(a){if(!a)return console.error("Geometry not specified.");var b=this,c=a.type&&"extent"===a.type?a:a.getExtent();this.search(a).then(function(a){b.setData(a.features,c)})},search:function(a){if(!a)return console.error("Oblique viewer: no geometry provided for search.");
var b,c=new y,d=this;return b=new v,b.geometry=a,b.outFields=this._getQueryFields()||[this.imageServiceLayer.objectIdField,this.azimuthField],b.returnGeometry=!0,b.where=this.elevationField+"\x3c"+this.elevationThreshold,b.outSpatialReference=a.spatialReference,b.spatialRel="esriSpatialRelContains",this.obliqueRecordsQueryTask.execute(b).then(function(b){c.resolve({features:d.sorter(d._processRecords(b.features),a)})}),c.promise},_sortSpatially:function(a,b){if(a&&a.length&&this.map.loaded){var c,
d,l,g,h,f=0,e=0,k=a[0];c=0;h=this.nadirExtent||this.map.extent;b&&"extent"===b.type&&b.spatialReference.equals(a[0].geometry.spatialReference)&&(h=b);h=h.getCenter();this.selectedRaster&&this._extentContained(this.selectedRaster,this.nadirExtent)&&(m.some(a,function(b,c){return b.attributes[this.imageServiceLayer.objectIdField]===this.selectedRasterId?(l=a[c],a[c]=k,a[0]=l,!0):void 0},this),c=1);for(f=c;f<a.length;f++){c=Math.sqrt((a[f].center.x-h.x)*(a[f].center.x-h.x)+(a[f].center.y-h.y)*(a[f].center.y-
h.y));g=f;for(e=f+1;e<a.length;e++)d=Math.sqrt((a[e].center.x-h.x)*(a[e].center.x-h.x)+(a[e].center.y-h.y)*(a[e].center.y-h.y)),c>d&&(k=a[e],c=d,g=e);f!==g&&(l=a[f],a[f]=k,a[g]=l)}}return a},_filterByAzimuth:function(){this.filteredRecords=[];m.forEach(this.records,function(a){Math.min(Math.abs(a.attributes[this.azimuthField]-this.azimuthAngle),Math.abs(a.attributes[this.azimuthField]-this.azimuthAngle-360))<=this.azimuthTolerance&&this.filteredRecords.push(a)},this);this.filteredRecords&&this.filteredRecords.length&&
(this.filteredRecords[0].attributes.selected=!0)},_processRecords:function(a){var b;return m.forEach(a,function(a){b=(new r(a.geometry)).setSpatialReference(this.nadirSpatialReference).getCentroid();a.center=b},this),a},_computeAzimuthFilter:function(){var a=(this.azimuthAngle+350)%360,b=(this.azimuthAngle+10)%360;return b>a?this.azimuthField+" BETWEEN "+a+" AND "+b:"("+this.azimuthField+" BETWEEN 0 AND "+b+" OR "+this.azimuthField+" BETWEEN "+a+" AND 360)"},_getIds:function(a){var b=[],c=this;return m.forEach(a,
function(a){b.push(a.attributes[c.imageServiceLayer.objectIdField])}),b},_adjustExtentAspectRatio:function(a){var b;if(!this._azimuthExtentChanged){var c=(this.map.extent,.45*a.getHeight()),d=.45*a.getWidth();return b=a.getCenter(),new n(b.x-d,b.y-c,b.x+d,b.y+c,a.spatialReference)}var e,g;return b=a.getCenter(),e=a.getWidth(),d=a.getHeight(),d>e?(g=e/d,g=.8<g?.5:.36):(g=d/e,g=.7<g?.5:.65),c=Math.min(d,e)*g,new n(b.x-c,b.y-c,b.x+c,b.y+c,a.spatialReference)},_setRasterListRefreshAttr:function(a){(this._set("rasterListRefresh",
a),a)&&this._refreshListDijit(this.isNadir?this.records:this.filteredRecords)},_extentContained:function(a,b){if(!a||!b)return!1;var c=(new r(a.geometry)).getExtent();return this._trimExtent(c,.2).contains(b)},setData:function(a,b){return a?(b=b||this.map.extent,this._set("records",a),this._filterByAzimuth(),void(this.filteredRecords&&this.filteredRecords.length?(this._refreshListDijit(this.filteredRecords),this.imageServiceLayer.loaded?this._setSelectedRaster(b):this.imageServiceLayer.on("load",
q.hitch(this,function(){this._setSelectedRaster(b)}))):(this.selectedRaster=null,this.selectedRasterId=null,this.emit("raster-select",{selectedRasterId:null})))):console.error("Oblique viewer: records not provided.")},_setSelectedRaster:function(a){this.selectedRaster=this.filteredRecords[0];this.selectedRasterId=this.selectedRaster.attributes[this.imageServiceLayer.objectIdField];this.setImage(this.selectedRaster.attributes[this.imageServiceLayer.objectIdField],a);this.emit("raster-select",{selectedRasterId:this.selectedRasterId})},
setExtent:function(a){var b=new y,c=this;return this.projectGeometry(a,this.map.spatialReference).then(function(a){c._verifyExtent(a[0])&&c.map.setExtent(a[0]).then(function(){b.resolve()})}),b.promise},zoomToSelectedImage:function(){if(!t.isDefined(this.selectedRasterId))return console.error("Oblique viewer: no selected raster.");if(this.isNadir)return console.log("Viewer in nadir mode, no selected raster.");var a,b=this;this._getImageGeometry(this.selectedRasterId,this.map.spatialReference).then(function(c){c.features&&
c.features.length&&(a=(new r(c.features[0].geometry)).setSpatialReference(b.map.spatialReference),b.map.setExtent(a.getExtent()))})},_getImageGeometry:function(a,b){var c=new v;return c.objectIds=[a],c.returnGeometry=!0,c.outSpatialReference=b,this.obliqueRecordsQueryTask.execute(c)},_getQueryFields:function(){var a=[];return m.forEach(this.rasterInfoFields,function(b){b.name&&a.push(b.name)}),0>m.indexOf(a,this.azimuthField)&&a.push(this.azimuthField),0>m.indexOf(a,this.imageServiceLayer.objectIdField)&&
a.push(this.imageServiceLayer.objectIdField),a},_trimExtent:function(a,b){var c,d,e,g;return b=b||.15,c=a.ymax-a.ymin,e=c*(1-b),d=c*(1-b),g=a.getCenter(),new n({xmin:g.x-d/2,ymin:g.y-e/2,xmax:g.x+d/2,ymax:g.y+e/2,spatialReference:a.spatialReference})}});return z("extend-esri")&&q.setObject("dijit.ObliqueViewer",p,A),p});