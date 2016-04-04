//>>built
define("dojox/gantt/GanttChart","./GanttProjectItem ./GanttResourceItem ./GanttProjectControl ./GanttTaskControl ./GanttTaskItem ./TabMenu dijit/Tooltip dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/date/locale dojo/request dojo/request/util dojo/on dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/dom-geometry dojo/keys dojo/has dojo/_base/window dojo/json dojo/domReady!".split(" "),function(x,D,w,y,z,E,L,F,k,l,q,A,G,n,H,r,h,f,p,B,t,I,J,C){return F("dojox.gantt.GanttChart",
[],{constructor:function(b,a){this.resourceChartHeight=void 0!==b.resourceChartHeight?b.resourceChartHeight:!1;this.withResource=void 0!==b.withResource?b.withResource:!0;this.correctError=void 0!==b.autoCorrectError?b.autoCorrectError:!1;this.isShowConMenu=this.isContentEditable=!b.readOnly;this.withTaskId=void 0!==b.withTaskId?b.withTaskId:!b.readOnly;this.animation=void 0!==b.animation?b.animation:!0;this.saveProgramPath=b.saveProgramPath||"saveGanttData.php";this.dataFilePath=b.dataFilePath||
"gantt_default.json";this.contentHeight=b.height||400;this.contentWidth=b.width||600;this.content=H.byId(a);this.scrollBarWidth=18;this.panelTimeHeight=102;this.maxWidthTaskNames=this.maxWidthPanelNames=150;this.minWorkLength=8;this.heightTaskItem=12;this.heightTaskItemExtra=11;this.pixelsPerDay=24;this.hsPerDay=8;this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay;this.pixelsPerHour=this.pixelsPerDay/24;this.totalDays=this.countDays=0;this.startDate=null;this.contentDataHeight=this.initialPos=
0;this.panelTimeExpandDelta=20;this.tabMenu=this.contentData=this.panelTime=this.panelNames=this.divTimeInfo=null;this.project=[];this.arrProjects=[];this.xmlLoader=null;this.isResizing=this.isMoving=!1;this.animationNodes=[];this.scale=1;this.tempDayInPixels=0;this.resource=null;this.months=q.getNames("months","wide");this._events=[]},getProject:function(b){return k.filter(this.arrProjects,function(a){return a.project.id==b},this)[0]},checkPosPreviousTask:function(b,a){var c=this.getWidthOnDuration(b.duration),
d=this.getPosOnDate(b.startTime),e=this.getPosOnDate(a.startTime);return c+d<=e},correctPosPreviousTask:function(b,a,c){var d=new Date(b.startTime);d.setHours(d.getHours()+b.duration/this.hsPerDay*24);0<d.getHours()&&(d.setHours(0),d.setDate(d.getDate()+1));c?c.setStartTime(d,!0):a.startTime=d;a.parentTask&&!this.checkPosParentTask(a.parentTask,a)&&(b=new Date(a.parentTask.startTime),b.setHours(b.getHours()+a.parentTask.duration/this.hsPerDay*24),a.duration=parseInt(parseInt((b-a.startTime)/36E5)*
this.hsPerDay/24))},correctPosParentTask:function(b,a){a.previousTask?this.correctPosPreviousTask(a.previousTask,a):(b.startTime>a.startTime&&(a.startTime=new Date(b.startTime)),this.checkPosParentTask(b,a)||(a.duration=b.duration))},checkPosParentTaskInTree:function(b){for(var a=!1,c=0;c<b.cldTasks.length;c++){var d=b.cldTasks[c];if(!this.checkPosParentTask(b,d))if(this.correctError)this.correctPosParentTask(b,d);else return!0;if(b.startTime>d.startTime)if(this.correctError)this.correctPosParentTask(b,
d);else return!0;0<d.cldTasks.length&&(a=this.checkPosParentTaskInTree(d))}return a},setPreviousTask:function(b){for(var a=!1,c=0;c<b.parentTasks.length;c++){a=b.parentTasks[c];if(a.previousTaskId){a.previousTask=b.getTaskById(a.previousTaskId);if(!a.previousTask&&!this.correctError)return!0;a.previousTask.cldPreTasks.push(a)}if(a.previousTask&&!this.checkPosPreviousTask(a.previousTask,a))if(this.correctError)this.correctPosPreviousTask(a.previousTask,a);else return!0;a=this.setPreviousTaskInTree(a)}return a},
setPreviousTaskInTree:function(b){for(var a=!1,c=0;c<b.cldTasks.length;c++){var d=b.cldTasks[c];if(d.previousTaskId){d.previousTask=b.project.getTaskById(d.previousTaskId);if(!d.previousTask&&!this.correctError)return!0;if(!this.checkPosPreviousTask(d.previousTask,d))if(this.correctError)this.correctPosPreviousTask(d.previousTask,d);else return!0;d.previousTask.cldPreTasks.push(d)}0<d.cldTasks.length&&(a=this.setPreviousTaskInTree(d))}return a},checkPosParentTask:function(b,a){var c=this.getWidthOnDuration(b.duration),
d=this.getPosOnDate(b.startTime),e=this.getPosOnDate(a.startTime),g=this.getWidthOnDuration(a.duration);return c+d>=e+g},addProject:function(b){this.project.push(b)},deleteProject:function(b){var a=this.getProject(b);if(a){if(0<a.arrTasks.length)for(;0<a.arrTasks.length;)a.deleteChildTask(a.arrTasks[0]);var c=this.heightTaskItemExtra+this.heightTaskItem;a.nextProject&&a.shiftNextProject(a,-c);this.project=k.filter(this.project,function(b){return b.id!=a.project.id},this);a.previousProject&&a.nextProject&&
(c=a.previousProject,c.nextProject=a.nextProject);a.previousProject&&!a.nextProject&&(c=a.previousProject,c.nextProject=null);!a.previousProject&&a.nextProject&&(a.nextProject.previousProject=null);for(c=0;c<this.arrProjects.length;c++)this.arrProjects[c].project.id==b&&this.arrProjects.splice(c,1);a.projectItem[0].parentNode.removeChild(a.projectItem[0]);a.descrProject.parentNode.removeChild(a.descrProject);a.projectNameItem.parentNode.removeChild(a.projectNameItem);this.contentDataHeight-=this.heightTaskItemExtra+
this.heightTaskItem;0==this.project.length&&(b=new Date(this.startDate),b=new Date(b.setDate(b.getDate()+1)),b=new x({id:1,name:"New Project",startDate:b}),this.project.push(b),a=new w(this,b),a.create(),this.arrProjects.push(a),this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem);this.checkPosition()}},insertProject:function(b,a,c){if(this.startDate>=c||this.getProject(b))return!1;this.checkHeighPanelTasks();b=new x({id:b,name:a,startDate:c});this.project.push(b);b=new w(this,b);
for(a=0;a<this.arrProjects.length;a++){var d=this.arrProjects[a-1],e=this.arrProjects[a+1];if(c<this.arrProjects[a].project.startDate)return this.arrProjects.splice(a,0,b),0<a&&(b.previousProject=d,d.nextProject=b),a+1<=this.arrProjects.length&&(b.nextProject=e,e.previousProject=b,b.shiftNextProject(b,this.heightTaskItem+this.heightTaskItemExtra)),b.create(),b.hideDescrProject(),this.checkPosition(),b}0<this.arrProjects.length&&(this.arrProjects[this.arrProjects.length-1].nextProject=b,b.previousProject=
this.arrProjects[this.arrProjects.length-1]);this.arrProjects.push(b);b.create();b.hideDescrProject();this.checkPosition();return b},openTree:function(b){var a=this.getLastCloseParent(b);this.openNode(a);b.taskItem.id!=a.taskItem.id&&this.openTree(b)},openNode:function(b){b.isExpanded||(r.remove(b.cTaskNameItem[2],"ganttImageTreeExpand"),r.add(b.cTaskNameItem[2],"ganttImageTreeCollapse"),b.isExpanded=!0,b.shiftCurrentTasks(b,b.hideTasksHeight),b.showChildTasks(b,b.isExpanded),b.hideTasksHeight=0)},
getLastCloseParent:function(b){return b.parentTask?b.parentTask.isExpanded&&"none"!=b.parentTask.cTaskNameItem[2].style.display?b:this.getLastCloseParent(b.parentTask):b},getProjectItemById:function(b){return k.filter(this.project,function(a){return a.id==b},this)[0]},clearAll:function(){this.contentDataHeight=0;this.startDate=null;this.clearData();this.clearItems();this.clearEvents()},clearEvents:function(){k.forEach(this._events,function(b){b.remove()});this._events=[]},clearData:function(){this.project=
[];this.arrProjects=[]},clearItems:function(){this.contentData.removeChild(this.contentData.firstChild);this.contentData.appendChild(this.createPanelTasks());this.panelNames.removeChild(this.panelNames.firstChild);this.panelNames.appendChild(this.createPanelNamesTasks());this.panelTime.removeChild(this.panelTime.firstChild)},buildUIContent:function(){this.project.sort(this.sortProjStartDate);this.startDate=this.getStartDate();this.panelTime.appendChild(this.createPanelTime());for(var b=0;b<this.project.length;b++){for(var a=
this.project[b],c=0;c<a.parentTasks.length;c++){var d=a.parentTasks[c];if(d.startTime)this.setStartTimeChild(d);else return;if(this.setPreviousTask(a))return}for(c=0;c<a.parentTasks.length;c++)if(d=a.parentTasks[c],d.startTime<a.startDate||this.checkPosParentTaskInTree(d))return;this.sortTasksByStartTime(a)}for(b=0;b<this.project.length;b++)a=this.project[b],a=new w(this,a),0<this.arrProjects.length&&(c=this.arrProjects[this.arrProjects.length-1],a.previousProject=c,c.nextProject=a),a.create(),this.checkHeighPanelTasks(),
this.arrProjects.push(a),this.createTasks(a);this.resource&&this.resource.reConstruct();this.postLoadData();this.postBindEvents()},loadJSONData:function(b){var a=this;a.dataFilePath=b||a.dataFilePath;A.get(a.dataFilePath,{sync:!0}).then(function(b){a.loadJSONString(b.text);a.buildUIContent();console.log("Successfully! Loaded data from: "+a.dataFilePath)},function(){console.log("Failed! Load error: "+a.dataFilePath)})},loadJSONString:function(b){b&&(this.clearAll(),b=C.parse(b).items,k.forEach(b,function(a){var b=
a.startdate.split("-"),d=new x({id:a.id,name:a.name,startDate:new Date(b[0],parseInt(b[1])-1,b[2])});k.forEach(a.tasks,function(a){var b=a.id,c=a.name,f=a.starttime.split("-"),h=a.duration,k=a.percentage,K=a.previousTaskId,l=a.taskOwner,b=new z({id:b,name:c,startTime:new Date(f[0],parseInt(f[1])-1,f[2]),duration:h,percentage:k,previousTaskId:K,taskOwner:l});a=a.children;0!=a.length&&this.buildChildTasksData(b,a);d.addTask(b)},this);this.addProject(d)},this))},buildChildTasksData:function(b,a){a&&
k.forEach(a,function(a){var d=a.id,e=a.name,g=a.starttime.split("-"),m=a.duration,f=a.percentage,h=a.previousTaskId,k=a.taskOwner,d=new z({id:d,name:e,startTime:new Date(g[0],parseInt(g[1])-1,g[2]),duration:m,percentage:f,previousTaskId:h,taskOwner:k});d.parentTask=b;b.addChildTask(d);a=a.children;0!=a.length&&this.buildChildTasksData(d,a)},this)},getJSONData:function(){var b={identifier:"id",items:[]};k.forEach(this.project,function(a){var c={id:a.id,name:a.name,startdate:a.startDate.getFullYear()+
"-"+(a.startDate.getMonth()+1)+"-"+a.startDate.getDate(),tasks:[]};b.items.push(c);k.forEach(a.parentTasks,function(a){a={id:a.id,name:a.name,starttime:a.startTime.getFullYear()+"-"+(a.startTime.getMonth()+1)+"-"+a.startTime.getDate(),duration:a.duration,percentage:a.percentage,previousTaskId:a.previousTaskId||"",taskOwner:a.taskOwner||"",children:this.getChildTasksData(a.cldTasks)};c.tasks.push(a)},this)},this);return b},getChildTasksData:function(b){var a=[];b&&0<b.length&&k.forEach(b,function(b){b=
{id:b.id,name:b.name,starttime:b.startTime.getFullYear()+"-"+(b.startTime.getMonth()+1)+"-"+b.startTime.getDate(),duration:b.duration,percentage:b.percentage,previousTaskId:b.previousTaskId||"",taskOwner:b.taskOwner||"",children:this.getChildTasksData(b.cldTasks)};a.push(b)},this);return a},saveJSONData:function(b){var a=this;a.dataFilePath=b&&0<l.trim(b).length?b:this.dataFilePath;try{A.post(a.saveProgramPath,{query:{filename:a.dataFilePath,data:C.stringify(a.getJSONData())}}).response.then(function(b){G.checkStatus(b.options.status)||
405==b.options.status?console.log("Successfully! Saved data to "+a.dataFilePath):console.log("Failed! Saved error")})}catch(c){console.log("exception: "+c.message)}},sortTaskStartTime:function(b,a){return b.startTime<a.startTime?-1:b.startTime>a.startTime?1:0},sortProjStartDate:function(b,a){return b.startDate<a.startDate?-1:b.startDate>a.startDate?1:0},setStartTimeChild:function(b){k.forEach(b.cldTasks,function(a){a.startTime||(a.startTime=b.startTime);0!=a.cldTasks.length&&this.setStartTimeChild(a)},
this)},createPanelTasks:function(){var b=h.create("div",{className:"ganttTaskPanel"});f.set(b,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"});return b},refreshParams:function(b){this.pixelsPerDay=b;this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay;this.pixelsPerHour=this.pixelsPerDay/24},createPanelNamesTasksHeader:function(){var b=h.create("div",{className:"ganttPanelHeader"}),a=h.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttToolbar"},
b),c=a.insertRow(a.rows.length),d=a.insertRow(a.rows.length),e=a.insertRow(a.rows.length);a.insertRow(a.rows.length);var a=h.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomIn"},c),g=l.hitch(this,function(){5<2*this.scale||(this.scale*=2,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomInClickEvent&&this.zoomInClickEvent.remove();this.zoomInClickEvent=n(a,"click",l.hitch(this,g));this.zoomInKeyEvent&&this.zoomInKeyEvent.remove();this.zoomInKeyEvent=n(a,"keydown",
l.hitch(this,function(a){a.keyCode==t.ENTER&&g()}));p.set(a,"tabIndex",0);var c=h.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomOut"},c),f=l.hitch(this,function(){.2>.5*this.scale||(this.scale*=.5,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomOutClickEvent&&this.zoomOutClickEvent.remove();this.zoomOutClickEvent=n(c,"click",l.hitch(this,f));this.zoomOutKeyEvent&&this.zoomOutKeyEvent.remove();this.zoomOutKeyEvent=n(c,"keydown",l.hitch(this,function(a){a.keyCode==
t.ENTER&&f()}));p.set(c,"tabIndex",0);var u=h.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarMicro"},d);this.microClickEvent&&this.microClickEvent.remove();this.microClickEvent=n(u,"click",l.hitch(this,this.refresh,this.animation?15:1,0,2));this.microKeyEvent&&this.microKeyEvent.remove();this.microKeyEvent=n(u,"keydown",l.hitch(this,function(a){a.keyCode==t.ENTER&&(u.blur(),this.refresh(this.animation?15:1,0,2))}));p.set(u,"tabIndex",0);var v=h.create("td",{align:"center",vAlign:"middle",
className:"ganttToolbarTele"},d);this.teleClickEvent&&this.teleClickEvent.remove();this.teleClickEvent=n(v,"click",l.hitch(this,this.refresh,this.animation?15:1,0,.5));this.teleKeyEvent&&this.teleKeyEvent.remove();this.teleKeyEvent=n(v,"keydown",l.hitch(this,function(a){a.keyCode==t.ENTER&&(v.blur(),this.refresh(this.animation?15:1,0,.5))}));p.set(v,"tabIndex",0);d=h.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarSave"},e);this.saveClickEvent&&this.saveClickEvent.remove();this.saveClickEvent=
n(d,"click",l.hitch(this,this.saveJSONData,""));this.saveKeyEvent&&this.saveKeyEvent.remove();this.saveKeyEvent=n(d,"keydown",l.hitch(this,function(a){a.keyCode==t.ENTER&&this.saveJSONData("")}));p.set(d,"tabIndex",0);e=h.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarLoad"},e);this.loadClickEvent&&this.loadClickEvent.remove();this.loadClickEvent=n(e,"click",l.hitch(this,this.loadJSONData,""));this.loadKeyEvent&&this.loadKeyEvent.remove();this.loadKeyEvent=n(e,"keydown",l.hitch(this,
function(a){a.keyCode==t.ENTER&&this.loadJSONData("")}));p.set(e,"tabIndex",0);var q="Enlarge timeline;Shrink timeline;Zoom in time zone(microscope view);Zoom out time zone(telescope view);Save gantt data to json file;Load gantt data from json file".split(";");k.forEach([a,c,u,v,d,e],function(a,b){var c=q[b],d=function(){r.add(a,"ganttToolbarActionHover");dijit.showTooltip(c,a,["above","below"])};a.onmouseover=d;a.onfocus=d;d=function(){r.remove(a,"ganttToolbarActionHover");a&&dijit.hideTooltip(a)};
a.onmouseout=d;a.onblur=d},this);return b},createPanelNamesTasks:function(){var b=h.create("div",{innerHTML:"\x26nbsp;",className:"ganttPanelNames"});f.set(b,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px",width:this.maxWidthPanelNames+"px"});return b},createPanelTime:function(){var b=h.create("div",{className:"ganttPanelTime"}),a=h.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttTblTime"},b);this.totalDays=this.countDays;
var c=a.insertRow(a.rows.length),d,e,g=0;e=d=(new Date(this.startDate)).getFullYear();for(var m=0;m<this.countDays;m++,g++)e=new Date(this.startDate),e.setDate(e.getDate()+m),e=e.getFullYear(),e!=d&&(this.addYearInPanelTime(c,g,d),g=0,d=e);this.addYearInPanelTime(c,g,e);f.set(c,"display","none");d=a.insertRow(a.rows.length);var k,c=0;e=1970;k=g=(new Date(this.startDate)).getMonth();for(m=0;m<this.countDays;m++,c++)e=new Date(this.startDate),e.setDate(e.getDate()+m),k=e.getMonth(),e=e.getFullYear(),
k!=g&&(this.addMonthInPanelTime(d,c,g,11!==g?e:e-1),c=0,g=k);this.addMonthInPanelTime(d,c,k,e);d=a.insertRow(a.rows.length);c=0;e=g=q._getWeekOfYear(new Date(this.startDate));for(m=0;m<this.countDays;m++,c++)e=new Date(this.startDate),e.setDate(e.getDate()+m),e=q._getWeekOfYear(e),e!=g&&(this.addWeekInPanelTime(d,c,g),c=0,g=e);this.addWeekInPanelTime(d,c,e);e=a.insertRow(a.rows.length);for(m=0;m<this.countDays;m++)this.addDayInPanelTime(e);a=a.insertRow(a.rows.length);for(m=0;m<this.countDays;m++)this.addHourInPanelTime(a);
f.set(a,"display","none");return b},adjustPanelTime:function(){var b=k.map(this.arrProjects,function(a){return parseInt(a.projectItem[0].style.left)+parseInt(a.projectItem[0].firstChild.style.width)+a.descrProject.offsetWidth+this.panelTimeExpandDelta},this).sort(function(a,b){return b-a})[0];if(this.maxTaskEndPos!=b){for(var a=this.panelTime.firstChild.firstChild.rows,c=0;4>=c;c++)this.removeCell(a[c]);var d=Math.round((b+this.panelTimeExpandDelta)/this.pixelsPerDay);this.totalDays=d;var e,g,f=0;
g=e=(new Date(this.startDate)).getFullYear();for(c=0;c<d;c++,f++)g=new Date(this.startDate),g.setDate(g.getDate()+c),g=g.getFullYear(),g!=e&&(this.addYearInPanelTime(a[0],f,e),f=0,e=g);this.addYearInPanelTime(a[0],f,g);var h;e=0;g=1970;h=f=(new Date(this.startDate)).getMonth();for(c=0;c<d;c++,e++)g=new Date(this.startDate),g.setDate(g.getDate()+c),h=g.getMonth(),g=g.getFullYear(),h!=f&&(this.addMonthInPanelTime(a[1],e,f,11!==f?g:g-1),e=0,f=h);this.addMonthInPanelTime(a[1],e,h,g);e=0;g=f=q._getWeekOfYear(new Date(this.startDate));
for(c=0;c<d;c++,e++)g=new Date(this.startDate),g.setDate(g.getDate()+c),g=q._getWeekOfYear(g),g!=f&&(this.addWeekInPanelTime(a[2],e,f),e=0,f=g);this.addWeekInPanelTime(a[2],e,g);for(c=0;c<d;c++)this.addDayInPanelTime(a[3]);for(c=0;c<d;c++)this.addHourInPanelTime(a[4]);this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*a[3].cells.length+"px";this.contentData.firstChild.style.width=this.pixelsPerDay*a[3].cells.length+"px";this.maxTaskEndPos=b}},addYearInPanelTime:function(b,a,c){c="Year   "+
c;b=h.create("td",{colSpan:a,align:"center",vAlign:"middle",className:"ganttYearNumber",innerHTML:20<this.pixelsPerDay*a?c:"",innerHTMLData:c},b);f.set(b,"width",this.pixelsPerDay*a+"px")},addMonthInPanelTime:function(b,a,c,d){c=this.months[c]+(d?" of "+d:"");b=h.create("td",{colSpan:a,align:"center",vAlign:"middle",className:"ganttMonthNumber",innerHTML:30<this.pixelsPerDay*a?c:"",innerHTMLData:c},b);f.set(b,"width",this.pixelsPerDay*a+"px")},addWeekInPanelTime:function(b,a,c){c="Week   "+c;b=h.create("td",
{colSpan:a,align:"center",vAlign:"middle",className:"ganttWeekNumber",innerHTML:20<this.pixelsPerDay*a?c:"",innerHTMLData:c},b);f.set(b,"width",this.pixelsPerDay*a+"px")},addDayInPanelTime:function(b){var a=new Date(this.startDate);a.setDate(a.getDate()+parseInt(b.cells.length));var c=h.create("td",{align:"center",vAlign:"middle",className:"ganttDayNumber",innerHTML:20<this.pixelsPerDay?a.getDate():"",innerHTMLData:String(a.getDate()),data:b.cells.length},b);f.set(c,"width",this.pixelsPerDay+"px");
5<=a.getDay()&&r.add(c,"ganttDayNumberWeekend");this._events.push(n(c,"mouseover",l.hitch(this,function(a){a=a.target||a.srcElement;var b=new Date(this.startDate.getTime());b.setDate(b.getDate()+parseInt(p.get(a,"data")));dijit.showTooltip(b.getFullYear()+"."+(b.getMonth()+1)+"."+b.getDate(),c,["above","below"])})));this._events.push(n(c,"mouseout",l.hitch(this,function(a){(a=a.target||a.srcElement)&&dijit.hideTooltip(a)})))},addHourInPanelTime:function(b){b=h.create("td",{align:"center",vAlign:"middle",
className:"ganttHourNumber",data:b.cells.length},b);f.set(b,"width",this.pixelsPerDay+"px");b=h.create("table",{cellPadding:"0",cellSpacing:"0"},b);b=b.insertRow(b.rows.length);for(var a=0;a<this.hsPerDay;a++){var c=h.create("td",{className:"ganttHourClass"},b);f.set(c,"width",this.pixelsPerDay/this.hsPerDay+"px");p.set(c,"innerHTMLData",String(9+a));5<this.pixelsPerDay/this.hsPerDay&&p.set(c,"innerHTML",String(9+a));r.add(c,3>=a?"ganttHourNumberAM":"ganttHourNumberPM")}},incHeightPanelTasks:function(b){var a=
this.contentData.firstChild;a.style.height=parseInt(a.style.height)+b+"px"},incHeightPanelNames:function(b){var a=this.panelNames.firstChild;a.style.height=parseInt(a.style.height)+b+"px"},checkPosition:function(){k.forEach(this.arrProjects,function(b){k.forEach(b.arrTasks,function(a){a.checkPosition()},this)},this)},checkHeighPanelTasks:function(){this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem;parseInt(this.contentData.firstChild.style.height)<=this.contentDataHeight&&(this.incHeightPanelTasks(this.heightTaskItem+
this.heightTaskItemExtra),this.incHeightPanelNames(this.heightTaskItem+this.heightTaskItemExtra))},sortTasksByStartTime:function(b){b.parentTasks.sort(this.sortTaskStartTime);for(var a=0;a<b.parentTasks.length;a++)b.parentTasks[a]=this.sortChildTasks(b.parentTasks[a])},sortChildTasks:function(b){b.cldTasks.sort(this.sortTaskStartTime);for(var a=0;a<b.cldTasks.length;a++)0<b.cldTasks[a].cldTasks.length&&this.sortChildTasks(b.cldTasks[a]);return b},refresh:function(b,a,c){if(!(0>=this.arrProjects.length||
0>=this.arrProjects[0].arrTasks.length))if(!b||a>b)this.refreshController(),this.resource&&this.resource.refresh(),this.tempDayInPixels=0,this.panelNameHeadersCover&&f.set(this.panelNameHeadersCover,"display","none");else{0==this.tempDayInPixels&&(this.tempDayInPixels=this.pixelsPerDay);this.panelNameHeadersCover&&f.set(this.panelNameHeadersCover,"display","");var d=this.tempDayInPixels+this.tempDayInPixels*(c-1)*Math.pow(a/b,2);this.refreshParams(d);k.forEach(this.arrProjects,function(a){k.forEach(a.arrTasks,
function(a){a.refresh()},this);a.refresh()},this);setTimeout(l.hitch(this,function(){this.refresh(b,++a,c)}),15)}},switchTeleMicroView:function(b){for(var a=this.panelTime.firstChild.firstChild,c=0;5>c;c++)40<b?f.set(a.rows[c],"display",0==c||1==c?"none":""):20>b?f.set(a.rows[c],"display",2==c||4==c?"none":""):f.set(a.rows[c],"display",0==c||4==c?"none":"")},refreshController:function(){this.contentData.firstChild.style.width=Math.max(1200,this.pixelsPerDay*this.totalDays)+"px";this.panelTime.firstChild.style.width=
this.pixelsPerDay*this.totalDays+"px";this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px";this.switchTeleMicroView(this.pixelsPerDay);k.forEach(this.panelTime.firstChild.firstChild.rows,function(b){k.forEach(b.childNodes,function(a){var b=parseInt(p.get(a,"colSpan")||1),d=l.trim(p.get(a,"innerHTMLData")||"");0<d.length?p.set(a,"innerHTML",20>this.pixelsPerDay*b?"":d):k.forEach(a.firstChild.rows[0].childNodes,function(a){var b=l.trim(p.get(a,"innerHTMLData")||"");
p.set(a,"innerHTML",10<this.pixelsPerDay/this.hsPerDay?b:"")},this);1==b&&(f.set(a,"width",this.pixelsPerDay*b+"px"),0>=d.length&&k.forEach(a.firstChild.rows[0].childNodes,function(a){f.set(a,"width",this.pixelsPerDay*b/this.hsPerDay+"px")},this))},this)},this)},init:function(){this.startDate=this.getStartDate();f.set(this.content,{width:this.contentWidth+"px",height:this.contentHeight+"px"});this.tableControl=h.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttTabelControl"});var b=
this.tableControl.insertRow(this.tableControl.rows.length);this.content.appendChild(this.tableControl);this.countDays=this.getCountDays();this.panelTime=h.create("div",{className:"ganttPanelTimeContainer"});f.set(this.panelTime,"height",this.panelTimeHeight+"px");this.panelTime.appendChild(this.createPanelTime());this.contentData=h.create("div",{className:"ganttContentDataContainer"});f.set(this.contentData,"height",this.contentHeight-this.panelTimeHeight+"px");this.contentData.appendChild(this.createPanelTasks());
var a=h.create("td",{vAlign:"top"});this.panelNameHeaders=h.create("div",{className:"ganttPanelNameHeaders"},a);f.set(this.panelNameHeaders,{height:this.panelTimeHeight+"px",width:this.maxWidthPanelNames+"px"});this.panelNameHeaders.appendChild(this.createPanelNamesTasksHeader());this.panelNames=h.create("div",{className:"ganttPanelNamesContainer"},a);this.panelNames.appendChild(this.createPanelNamesTasks());b.appendChild(a);var a=h.create("td",{vAlign:"top"}),c=h.create("div",{className:"ganttDivCell"});
c.appendChild(this.panelTime);c.appendChild(this.contentData);a.appendChild(c);b.appendChild(a);f.set(this.panelNames,"height",this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px");f.set(this.panelNames,"width",this.maxWidthPanelNames+"px");f.set(this.contentData,"width",this.contentWidth-this.maxWidthPanelNames+"px");f.set(this.contentData.firstChild,"width",this.pixelsPerDay*this.countDays+"px");f.set(this.panelTime,"width",this.contentWidth-this.maxWidthPanelNames-this.scrollBarWidth+
"px");f.set(this.panelTime.firstChild,"width",this.pixelsPerDay*this.countDays+"px");this.isShowConMenu&&(this.tabMenu=new E(this));var d=this;this.contentData.onscroll=function(){d.panelTime.scrollLeft=this.scrollLeft;d.panelNames&&(d.panelNames.scrollTop=this.scrollTop,d.isShowConMenu&&d.tabMenu.hide());d.resource&&(d.resource.contentData.scrollLeft=this.scrollLeft)};this.project.sort(this.sortProjStartDate);for(b=0;b<this.project.length;b++){a=this.project[b];for(c=0;c<a.parentTasks.length;c++){var e=
a.parentTasks[c];e.startTime||(e.startTime=a.startDate);this.setStartTimeChild(e);if(this.setPreviousTask(a))return}for(c=0;c<a.parentTasks.length;c++){e=a.parentTasks[c];if(e.startTime<a.startDate)if(this.correctError)e.startTime=a.startDate;else return;if(this.checkPosParentTaskInTree(e))return}this.sortTasksByStartTime(a)}for(b=0;b<this.project.length;b++)a=this.project[b],a=new w(this,a),0<this.arrProjects.length&&(c=this.arrProjects[this.arrProjects.length-1],a.previousProject=c,c.nextProject=
a),a.create(),this.checkHeighPanelTasks(),this.arrProjects.push(a),this.createTasks(a);this.withResource&&(this.resource=new D(this),this.resource.create());this.postLoadData();this.postBindEvents();return this},postLoadData:function(){k.forEach(this.arrProjects,function(a){k.forEach(a.arrTasks,function(a){a.postLoadData()},this);a.postLoadData()},this);var b=B.getMarginBox(this.panelNameHeaders);this.panelNameHeadersCover||(this.panelNameHeadersCover=h.create("div",{className:"ganttHeaderCover"},
this.panelNameHeaders.parentNode),f.set(this.panelNameHeadersCover,{left:b.l+"px",top:b.t+"px",height:b.h+"px",width:b.w+"px",display:"none"}))},postBindEvents:function(){var b=B.position(this.tableControl,!0);I("dom-addeventlistener")&&this._events.push(n(this.tableControl,"mousemove",l.hitch(this,function(a){var c=a.srcElement||a.target;if(c==this.panelNames.firstChild||c==this.contentData.firstChild)c=this.heightTaskItem+this.heightTaskItemExtra,a=parseInt(a.layerY/c)*c+this.panelTimeHeight-this.contentData.scrollTop,
a!=this.oldHLTop&&a<b.h-50&&(this.highLightDiv?f.set(this.highLightDiv,"top",b.y+a+"px"):(this.highLightDiv=h.create("div",{className:"ganttRowHighlight"},J.body()),f.set(this.highLightDiv,{top:b.y+a+"px",left:b.x+"px",width:b.w-20+"px",height:c+"px"}))),this.oldHLTop=a})))},getStartDate:function(){k.forEach(this.project,function(b){this.startDate?b.startDate<this.startDate&&(this.startDate=new Date(b.startDate)):this.startDate=new Date(b.startDate)},this);this.initialPos=24*this.pixelsPerHour;return this.startDate?
new Date(this.startDate.setHours(this.startDate.getHours()-24)):new Date},getCountDays:function(){return parseInt((this.contentWidth-this.maxWidthPanelNames)/(24*this.pixelsPerHour))},createTasks:function(b){k.forEach(b.project.parentTasks,function(a,c){0<c&&(b.project.parentTasks[c-1].nextParentTask=a,a.previousParentTask=b.project.parentTasks[c-1]);var d=new y(a,b,this);b.arrTasks.push(d);d.create();this.checkHeighPanelTasks();0<a.cldTasks.length&&this.createChildItemControls(a.cldTasks,b)},this)},
createChildItemControls:function(b,a){b&&k.forEach(b,function(c,d){0<d&&(c.previousChildTask=b[d-1],b[d-1].nextChildTask=c);(new y(c,a,this)).create();this.checkHeighPanelTasks();0<c.cldTasks.length&&this.createChildItemControls(c.cldTasks,a)},this)},getPosOnDate:function(b){return(b-this.startDate)/36E5*this.pixelsPerHour},getWidthOnDuration:function(b){return Math.round(this.pixelsPerWorkHour*b)},getLastChildTask:function(b){return 0<b.childTask.length?this.getLastChildTask(b.childTask[b.childTask.length-
1]):b},removeCell:function(b){for(;b.cells[0];)b.deleteCell(b.cells[0])}})});