//>>built
define("dojox/layout/GridContainer","dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/sniff dojo/dom-class dojo/dom-style dojo/dom-geometry dojo/dom-construct dojo/_base/lang dojo/_base/window dojo/ready dojox/layout/GridContainerLite".split(" "),function(x,t,p,h,q,m,r,k,n,u,l,v,w){return t("dojox.layout.GridContainer",w,{hasResizableColumns:!0,liveResizeColumns:!1,minColWidth:20,minChildWidth:150,mode:"right",isRightFixed:!1,isLeftFixed:!1,startup:function(){this.inherited(arguments);
if(this.hasResizableColumns){for(var b=0;b<this._grid.length-1;b++)this._createGrip(b);this.getParent()||v(u.hitch(this,"_placeGrips"))}},resizeChildAfterDrop:function(b,a,c){this.inherited(arguments)&&this._placeGrips()},onShow:function(){this.inherited(arguments);this._placeGrips()},resize:function(){this.inherited(arguments);this._isShown()&&this.hasResizableColumns&&this._placeGrips()},_createGrip:function(b){b=this._grid[b];var a=n.create("div",{"class":"gridContainerGrip"},this.domNode);b.grip=
a;b.gripHandler=[this.connect(a,"onmouseover",function(a){for(var b=!1,e=0;e<this._grid.length-1;e++)if(m.contains(this._grid[e].grip,"gridContainerGripShow")){b=!0;break}b||m.replace(a.target,"gridContainerGripShow","gridContainerGrip")})[0],this.connect(a,"onmouseout",function(a){this._isResized||m.replace(a.target,"gridContainerGrip","gridContainerGripShow")})[0],this.connect(a,"onmousedown","_resizeColumnOn")[0],this.connect(a,"ondblclick","_onGripDbClick")[0]]},_placeGrips:function(){var b,a,
c=0,d;p.forEach(this._grid,function(e){e.grip&&(d=e.grip,b||(b=d.offsetWidth/2),c+=k.getMarginBox(e.node).w,r.set(d,"left",c-b+"px"),a||(a=k.getContentBox(this.gridNode).h),0<a&&r.set(d,"height",a+"px"))},this)},_onGripDbClick:function(){this._updateColumnsWidth(this._dragManager);this.resize()},_resizeColumnOn:function(b){this._activeGrip=b.target;this._initX=b.pageX;b.preventDefault();l.body().style.cursor="ew-resize";this._isResized=!0;b=[];var a,c;for(c=0;c<this._grid.length;c++)b[c]=k.getContentBox(this._grid[c].node).w;
this._oldTabSize=b;for(c=0;c<this._grid.length;c++)a=this._grid[c],this._activeGrip==a.grip&&(this._currentColumn=a.node,this._currentColumnWidth=b[c],this._nextColumn=this._grid[c+1].node,this._nextColumnWidth=b[c+1]),a.node.style.width=b[c]+"px";a=function(a,b){var c=0,g=0;p.forEach(a,function(a){1==a.nodeType&&(a=r.getComputedStyle(a),g=(q("ie")?b:parseInt(a.minWidth))+parseInt(a.marginLeft)+parseInt(a.marginRight),c<g&&(c=g))});return c};b=a(this._currentColumn.childNodes,this.minChildWidth);
a=a(this._nextColumn.childNodes,this.minChildWidth);c=Math.round(k.getMarginBox(this.gridContainerTable).w*this.minColWidth/100);this._currentMinCol=b;this._nextMinCol=a;c>this._currentMinCol&&(this._currentMinCol=c);c>this._nextMinCol&&(this._nextMinCol=c);this._connectResizeColumnMove=h.connect(l.doc,"onmousemove",this,"_resizeColumnMove");this._connectOnGripMouseUp=h.connect(l.doc,"onmouseup",this,"_onGripMouseUp")},_onGripMouseUp:function(){l.body().style.cursor="default";h.disconnect(this._connectResizeColumnMove);
h.disconnect(this._connectOnGripMouseUp);this._connectOnGripMouseUp=this._connectResizeColumnMove=null;this._activeGrip&&m.replace(this._activeGrip,"gridContainerGrip","gridContainerGripShow");this._isResized=!1},_resizeColumnMove:function(b){b.preventDefault();this._connectResizeColumnOff||(h.disconnect(this._connectOnGripMouseUp),this._connectOnGripMouseUp=null,this._connectResizeColumnOff=h.connect(l.doc,"onmouseup",this,"_resizeColumnOff"));var a=b.pageX-this._initX;0==a||this._currentColumnWidth+
a<this._currentMinCol||this._nextColumnWidth-a<this._nextMinCol||(this._currentColumnWidth+=a,this._nextColumnWidth-=a,this._initX=b.pageX,this._activeGrip.style.left=parseInt(this._activeGrip.style.left)+a+"px",this.liveResizeColumns&&(this._currentColumn.style.width=this._currentColumnWidth+"px",this._nextColumn.style.width=this._nextColumnWidth+"px",this.resize()))},_resizeColumnOff:function(b){l.body().style.cursor="default";h.disconnect(this._connectResizeColumnMove);h.disconnect(this._connectResizeColumnOff);
this._connectResizeColumnOff=this._connectResizeColumnMove=null;this.liveResizeColumns||(this._currentColumn.style.width=this._currentColumnWidth+"px",this._nextColumn.style.width=this._nextColumnWidth+"px");b=[];var a=[],c=this.gridContainerTable.clientWidth,d,e=!1,f;for(f=0;f<this._grid.length;f++)d=this._grid[f].node,q("ie")?(b[f]=k.getMarginBox(d).w,a[f]=k.getContentBox(d).w):(b[f]=k.getContentBox(d).w,a=b);for(f=0;f<a.length;f++)if(a[f]!=this._oldTabSize[f]){e=!0;break}if(e){a=q("ie")?100:1E4;
for(f=0;f<this._grid.length;f++)this._grid[f].node.style.width=Math.round(100*a*b[f]/c)/a+"%";this.resize()}this._activeGrip&&m.replace(this._activeGrip,"gridContainerGrip","gridContainerGripShow");this._isResized=!1},setColumns:function(b){var a,c;if(0<b){a=this._grid.length;b=a-b;if(0<b){var d=[],e,f,g;if("right"==this.mode)for(f=this.isLeftFixed&&0<a?1:0,a=c=this.isRightFixed?a-2:a-1;a>=f;a--){g=0;e=this._grid[a].node;for(c=0;c<e.childNodes.length;c++)if(1==e.childNodes[c].nodeType&&""!=e.childNodes[c].id){g++;
break}0==g&&(d[d.length]=a);if(d.length>=b){this._deleteColumn(d);break}}else for(c=this.isLeftFixed&&0<a?1:0,f=this.isRightFixed?a-1:a,a=c;a<f;a++){g=0;e=this._grid[a].node;for(c=0;c<e.childNodes.length;c++)if(1==e.childNodes[c].nodeType&&""!=e.childNodes[c].id){g++;break}0==g&&(d[d.length]=a);if(d.length>=b){this._deleteColumn(d);break}}d.length<b&&h.publish("/dojox/layout/gridContainer/noEmptyColumn",[this])}else 0>b&&this._addColumn(Math.abs(b));this.hasResizableColumns&&this._placeGrips()}},
_addColumn:function(b){var a=this._grid,c,d,e="right"==this.mode,f=this.acceptTypes.join(","),g=this._dragManager;this.hasResizableColumns&&(!this.isRightFixed&&e||this.isLeftFixed&&!e&&1==this.nbZones)&&this._createGrip(a.length-1);for(var h=0;h<b;h++)c=n.create("td",{"class":"gridContainerZone dojoxDndArea",accept:f,id:this.id+"_dz"+this.nbZones}),d=a.length,e?this.isRightFixed?(--d,a.splice(d,0,{node:a[d].node.parentNode.insertBefore(c,a[d].node)})):a.push({node:this.gridNode.appendChild(c)}):
this.isLeftFixed?(d=1==d?0:1,this._grid.splice(1,0,{node:this._grid[d].node.parentNode.appendChild(c,this._grid[d].node)}),d=1):(d-=this.nbZones,this._grid.splice(d,0,{node:a[d].node.parentNode.insertBefore(c,a[d].node)})),this.hasResizableColumns&&(!e&&1!=this.nbZones||!e&&1==this.nbZones&&!this.isLeftFixed||e&&h<b-1||e&&h==b-1&&this.isRightFixed)&&this._createGrip(d),g.registerByNode(a[d].node),this.nbZones++;this._updateColumnsWidth(g)},_deleteColumn:function(b){for(var a,c,d=0,e=b.length,f=this._dragManager,
g=0;g<e;g++)c="right"==this.mode?b[g]:b[g]-d,a=this._grid[c],this.hasResizableColumns&&a.grip&&(p.forEach(a.gripHandler,function(a){h.disconnect(a)}),n.destroy(this.domNode.removeChild(a.grip)),a.grip=null),f.unregister(a.node),n.destroy(this.gridNode.removeChild(a.node)),this._grid.splice(c,1),this.nbZones--,d++;b=this._grid[this.nbZones-1];b.grip&&(p.forEach(b.gripHandler,h.disconnect),n.destroy(this.domNode.removeChild(b.grip)),b.grip=null);this._updateColumnsWidth(f)},_updateColumnsWidth:function(b){this.inherited(arguments);
b._dropMode.updateAreas(b._areaList)},destroy:function(){h.unsubscribe(this._dropHandler);this.inherited(arguments)}})});