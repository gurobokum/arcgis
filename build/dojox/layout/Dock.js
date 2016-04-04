//>>built
require({cache:{"url:dojox/layout/resources/FloatingPane.html":'\x3cdiv class\x3d"dojoxFloatingPane" id\x3d"${id}"\x3e\n\t\x3cdiv tabindex\x3d"0" role\x3d"button" class\x3d"dojoxFloatingPaneTitle" dojoAttachPoint\x3d"focusNode"\x3e\n\t\t\x3cspan dojoAttachPoint\x3d"closeNode" dojoAttachEvent\x3d"onclick: close" class\x3d"dojoxFloatingCloseIcon"\x3e\x3c/span\x3e\n\t\t\x3cspan dojoAttachPoint\x3d"maxNode" dojoAttachEvent\x3d"onclick: maximize" class\x3d"dojoxFloatingMaximizeIcon"\x3e\x26thinsp;\x3c/span\x3e\n\t\t\x3cspan dojoAttachPoint\x3d"restoreNode" dojoAttachEvent\x3d"onclick: _restore" class\x3d"dojoxFloatingRestoreIcon"\x3e\x26thinsp;\x3c/span\x3e\t\n\t\t\x3cspan dojoAttachPoint\x3d"dockNode" dojoAttachEvent\x3d"onclick: minimize" class\x3d"dojoxFloatingMinimizeIcon"\x3e\x26thinsp;\x3c/span\x3e\n\t\t\x3cspan dojoAttachPoint\x3d"titleNode" class\x3d"dijitInline dijitTitleNode"\x3e\x3c/span\x3e\n\t\x3c/div\x3e\n\t\x3cdiv dojoAttachPoint\x3d"canvas" class\x3d"dojoxFloatingPaneCanvas"\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"containerNode" role\x3d"region" tabindex\x3d"-1" class\x3d"${contentClass}"\x3e\n\t\t\x3c/div\x3e\n\t\t\x3cspan dojoAttachPoint\x3d"resizeHandle" class\x3d"dojoxFloatingResizeHandle"\x3e\x3c/span\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/layout/Dock","dojo/_base/lang dojo/_base/window dojo/_base/declare dojo/_base/fx dojo/on dojo/_base/array dojo/_base/sniff dojo/window dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-construct dijit/_TemplatedMixin dijit/_WidgetBase dijit/BackgroundIframe dojo/dnd/Moveable ./ContentPane ./ResizeHandle dojo/text!./resources/FloatingPane.html dojo/domReady!".split(" "),function(b,d,e,p,c,q,h,k,r,t,u,l,f,g,v,w,x,y,z){d=e("dojox.layout.Dock",[g,f],{templateString:'\x3cdiv class\x3d"dojoxDock"\x3e\x3cul data-dojo-attach-point\x3d"containerNode" class\x3d"dojoxDockList"\x3e\x3c/ul\x3e\x3c/div\x3e',
_docked:[],_inPositioning:!1,autoPosition:!1,addNode:function(a){var m=l.create("li",null,this.containerNode);a=new n({title:a.title,paneRef:a},m);a.startup();return a},startup:function(){if("dojoxGlobalFloatingDock"==this.id||this.isFixedDock)this.own(c(window,"resize",b.hitch(this,"_positionDock")),c(window,"scroll",b.hitch(this,"_positionDock"))),h("ie")&&this.own(c(this.domNode,"resize",b.hitch(this,"_positionDock")));this._positionDock(null);this.inherited(arguments)},_positionDock:function(a){this._inPositioning||
"south"==this.autoPosition&&setTimeout(b.hitch(this,function(){this._inPositiononing=!0;var a=k.getBox(),b=this.domNode.style;b.left=a.l+"px";b.width=a.w-2+"px";b.top=a.h+a.t-this.domNode.offsetHeight+"px";this._inPositioning=!1}),125)}});var n=e("dojox.layout._DockNode",[g,f],{title:"",paneRef:null,templateString:'\x3cli data-dojo-attach-event\x3d"onclick: restore" class\x3d"dojoxDockNode"\x3e\x3cspan data-dojo-attach-point\x3d"restoreNode" class\x3d"dojoxDockRestoreButton" data-dojo-attach-event\x3d"onclick: restore"\x3e\x3c/span\x3e\x3cspan class\x3d"dojoxDockTitleNode" data-dojo-attach-point\x3d"titleNode"\x3e${title}\x3c/span\x3e\x3c/li\x3e',
restore:function(){this.paneRef.show();this.paneRef.bringToTop();this.destroy()}});return d});