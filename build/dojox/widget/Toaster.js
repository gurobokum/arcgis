//>>built
define("dojox/widget/Toaster","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/fx dojo/dom-style dojo/dom-class dojo/dom-geometry dijit/registry dijit/_WidgetBase dijit/_TemplatedMixin dijit/BackgroundIframe dojo/fx dojo/has dojo/_base/window dojo/window".split(" "),function(q,f,k,r,h,l,m,t,u,v,w,x,y,z,n){f.getObject("dojox.widget",!0);var p=function(a){return a.substring(0,1).toUpperCase()+a.substring(1)};return q("dojox.widget.Toaster",[u,v],{templateString:'\x3cdiv class\x3d"dijitToasterClip" dojoAttachPoint\x3d"clipNode"\x3e\x3cdiv class\x3d"dijitToasterContainer" dojoAttachPoint\x3d"containerNode" dojoAttachEvent\x3d"onclick:onSelect"\x3e\x3cdiv class\x3d"dijitToasterContent" dojoAttachPoint\x3d"contentNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
messageTopic:"",messageTypes:{MESSAGE:"message",WARNING:"warning",ERROR:"error",FATAL:"fatal"},defaultType:"message",positionDirection:"br-up",positionDirectionTypes:"br-up br-left bl-up bl-right tr-down tr-left tl-down tl-right".split(" "),duration:2E3,slideDuration:500,separator:"\x3chr\x3e\x3c/hr\x3e",postCreate:function(){this.inherited(arguments);this.hide();z.body().appendChild(this.domNode);this.messageTopic&&k.subscribe(this.messageTopic,this,"_handleMessage")},_handleMessage:function(a){f.isString(a)?
this.setContent(a):this.setContent(a.message,a.type,a.duration)},setContent:function(a,d,b){b=b||this.duration;if(this.slideAnim&&("playing"!=this.slideAnim.status()&&this.slideAnim.stop(),"playing"==this.slideAnim.status()||this.fadeAnim&&"playing"==this.fadeAnim.status())){setTimeout(f.hitch(this,function(){this.setContent(a,d,b)}),50);return}for(var c in this.messageTypes)l.remove(this.containerNode,"dijitToaster"+p(this.messageTypes[c]));h.set(this.containerNode,"opacity",1);this._setContent(a);
l.add(this.containerNode,"dijitToaster"+p(d||this.defaultType));this.show();c=m.getMarginBox(this.containerNode);this._cancelHideTimer();if(this.isVisible)this._placeClip(),this._stickyMessage||this._setHideTimer(b);else{var e=this.containerNode.style,g=this.positionDirection;if(0<=g.indexOf("-up"))e.left="0px",e.top=c.h+10+"px";else if(0<=g.indexOf("-left"))e.left=c.w+10+"px",e.top="0px";else if(0<=g.indexOf("-right"))e.left=0-c.w-10+"px",e.top="0px";else if(0<=g.indexOf("-down"))e.left="0px",e.top=
0-c.h-10+"px";else throw Error(this.id+".positionDirection is invalid: "+g);this.slideAnim=x.slideTo({node:this.containerNode,top:0,left:0,duration:this.slideDuration});this.connect(this.slideAnim,"onEnd",function(a,c){this.fadeAnim=r.fadeOut({node:this.containerNode,duration:1E3});this.connect(this.fadeAnim,"onEnd",function(a){this.isVisible=!1;this.hide()});this._setHideTimer(b);this.connect(this,"onSelect",function(a){this._cancelHideTimer();this._stickyMessage=!1;this.fadeAnim.play()});this.isVisible=
!0});this.slideAnim.play()}},_setContent:function(a){f.isFunction(a)?a(this):(a&&this.isVisible&&(a=this.contentNode.innerHTML+this.separator+a),this.contentNode.innerHTML=a)},_cancelHideTimer:function(){this._hideTimer&&(clearTimeout(this._hideTimer),this._hideTimer=null)},_setHideTimer:function(a){this._cancelHideTimer();0<a?(this._cancelHideTimer(),this._hideTimer=setTimeout(f.hitch(this,function(a){this.bgIframe&&this.bgIframe.iframe&&(this.bgIframe.iframe.style.display="none");this._hideTimer=
null;this._stickyMessage=!1;this.fadeAnim.play()}),a)):this._stickyMessage=!0},_placeClip:function(){var a=n.getBox(),d=m.getMarginBox(this.containerNode),b=this.clipNode.style;b.height=d.h+"px";b.width=d.w+"px";var c=this.positionDirection;c.match(/^t/)?b.top=a.t+"px":c.match(/^b/)&&(b.top=a.h-d.h-2+a.t+"px");c.match(/^[tb]r-/)?b.left=a.w-d.w-1-a.l+"px":c.match(/^[tb]l-/)?b.left="0px":c.match(/^[tb]c-/)&&(b.left=Math.round((a.w-d.w-1-a.l)/2)+"px");b.clip="rect(0px, "+d.w+"px, "+d.h+"px, 0px)";y("ie")&&
(this.bgIframe||(this.clipNode.id||(this.clipNode.id=t.getUniqueId("dojox_widget_Toaster_clipNode")),this.bgIframe=new w(this.clipNode)),a=this.bgIframe.iframe)&&(a.style.display="block")},onSelect:function(a){},show:function(){h.set(this.domNode,"display","block");this._placeClip();this._scrollConnected||(this._scrollConnected=k.connect(n,"onscroll",this,this._placeClip))},hide:function(){h.set(this.domNode,"display","none");this._scrollConnected&&(k.disconnect(this._scrollConnected),this._scrollConnected=
!1);h.set(this.containerNode,"opacity",1)}})});