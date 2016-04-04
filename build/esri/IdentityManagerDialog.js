//>>built
define("esri/IdentityManagerDialog","dojo/_base/kernel dojo/_base/declare dojo/_base/config dojo/_base/Deferred dojo/_base/lang dojo/has dojo/dom-attr dojo/keys dijit/registry dijit/Dialog ./kernel ./lang ./domUtils ./Credential ./IdentityManagerBase dojo/i18n!./nls/jsapi dojo/query dijit/form/Button dijit/form/ValidationTextBox".split(" "),function(e,k,t,u,v,w,l,x,g,q,m,r,n,y,z,A){k=k([z],{declaredClass:"esri.IdentityManager",_eventMap:{"dialog-cancel":["info"]},constructor:function(d){v.mixin(this,
d);this.registerConnectEvents()},_dialogContent:"\x3cdiv class\x3d'dijitDialogPaneContentArea'\x3e\x3cdiv style\x3d'padding-bottom: 5px; word-wrap: break-word;'\x3e${info}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriErrorMsg' style\x3d'display: none; color: white; background-color: #D46464; text-align: center; padding-top: 3px; padding-bottom: 3px;'\x3e${invalidUser}\x3c/div\x3e\x3cdiv style\x3d'margin: 0px; padding: 0px; height: 10px;'\x3e\x3c/div\x3e\x3ctable style\x3d'width: 100%;'\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel\x3e${lblUser}\x3c/label\x3e\x3cbr/\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' data-dojo-props\x3d'type:\"text\", \"class\":\"esriIdUser\", required:true, trim:true, style:\"width: 100%;\", autocapitalize:\"none\", autocorrect:\"off\", spellcheck:false' /\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x3clabel\x3e${lblPwd}\x3c/label\x3e\x3cbr/\x3e\x3cinput data-dojo-type\x3d'dijit.form.ValidationTextBox' data-dojo-props\x3d'type:\"password\", \"class\":\"esriIdPwd\", required:true, style:\"width: 100%;\"' /\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv class\x3d'dijitDialogPaneActionBar'\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdSubmit\"'\x3e${lblOk}\x3c/button\x3e\x3cbutton data-dojo-type\x3d'dijit.form.Button' data-dojo-props\x3d'type:\"button\", \"class\":\"esriIdCancel\"'\x3e${lblCancel}\x3c/button\x3e\x3c/div\x3e",
onDialogCreate:function(){},onDialogCancel:function(){},signIn:function(d,b,a){this._nls||(this._nls=A.identity);this._loginDialog||(this._loginDialog=this.dialog=this._createLoginDialog(),this.onDialogCreate());var f=this._loginDialog,p=a&&a.error,e=a&&a.token,c=new u(function(){f.onCancel()});return f.open?(d=Error("BUSY"),d.code="IdentityManager.1",d.log=t.isDebug,c.errback(d),c):(n.hide(f.errMsg_),p&&403==p.code&&e&&(l.set(f.errMsg_,"innerHTML",this._nls.forbidden),n.show(f.errMsg_)),f.dfd_=c,
f.serverInfo_=b,f.resUrl_=d,f.admin_=a&&a.isAdmin,l.set(f.resLink_,{title:d,innerHTML:"("+(this.getResourceName(d)||this._nls.lblItem)+")"}),l.set(f.serverLink_,{title:b.server,innerHTML:(-1!==b.server.toLowerCase().indexOf("arcgis.com")?"ArcGIS Online":b.server)+" "}),f.txtPwd_.set("value",""),f.show(),c)},_createLoginDialog:function(){var d=this._nls,b=r.substitute(d,this._dialogContent),b=r.substitute({resource:"\x3cspan class\x3d'resLink' style\x3d'word-wrap: break-word;'\x3e\x3c/span\x3e",server:"\x3cspan class\x3d'serverLink' style\x3d'word-wrap: break-word;'\x3e\x3c/span\x3e"},
b),a=new q({title:d.title,content:b,"class":"esriSignInDialog",style:"width: 18em;",esriIdMgr_:this,keypressed_:function(a){a.charOrCode===x.ENTER&&this.execute_()},execute_:function(){var a=this.txtUser_.get("value"),b=this.txtPwd_.get("value"),e=this.dfd_,c=this;if(a&&b){this.btnSubmit_.set("label",d.lblSigning);var k=m.id.findCredential(c.resUrl_,a),g=function(b){c.btnSubmit_.set("label",d.lblOk);c.btnSubmit_.set("disabled",!1);n.hide(c.errMsg_);c.hide();q._DialogLevelManager.hide(c);var p=c.serverInfo_;
c.dfd_=c.serverInfo_=c.generateDfd_=c.resUrl_=null;var g,l,m,h=k;b&&(g=b.token,l=r.isDefined(b.expires)?Number(b.expires):null,m=!!b.ssl,h?(h.userId=a,h.token=g,h.expires=l,h.validity=b.validity,h.ssl=m,h.creationTime=(new Date).getTime()):h=new y({userId:a,server:p.server,token:g,expires:l,ssl:m,isAdmin:c.admin_,validity:b.validity}));e.callback(h)};if(k&&!k._enqueued)return void g();c.btnSubmit_.set("disabled",!0);c.generateDfd_=m.id.generateToken(this.serverInfo_,{username:a,password:b},{isAdmin:this.admin_}).addCallback(g).addErrback(function(a){c.btnSubmit_.set("disabled",
!1);c.generateDfd_=null;c.btnSubmit_.set("label",d.lblOk);l.set(c.errMsg_,"innerHTML",a&&a.code?d.invalidUser:d.noAuthService);n.show(c.errMsg_)})}},cancel_:function(){a.generateDfd_&&a.generateDfd_.cancel();var b=a.dfd_,d=a.resUrl_,e=a.serverInfo_;a.btnSubmit_.set("disabled",!1);a.dfd_=a.serverInfo_=a.generateDfd_=a.resUrl_=null;n.hide(a.errMsg_);q._DialogLevelManager.hide(a);a.esriIdMgr_.onDialogCancel({resourceUrl:d,serverInfo:e});d=Error("ABORTED");d.code="IdentityManager.2";d.log=t.isDebug;b.errback(d)}}),
b=a.domNode;return a.txtUser_=g.byNode(e.query(".esriIdUser",b)[0]),a.txtPwd_=g.byNode(e.query(".esriIdPwd",b)[0]),a.btnSubmit_=g.byNode(e.query(".esriIdSubmit",b)[0]),a.btnCancel_=g.byNode(e.query(".esriIdCancel",b)[0]),a.resLink_=e.query(".resLink",b)[0],a.serverLink_=e.query(".serverLink",b)[0],a.errMsg_=e.query(".esriErrorMsg",b)[0],a.connect(a.txtUser_,"onKeyPress",a.keypressed_),a.connect(a.txtPwd_,"onKeyPress",a.keypressed_),a.connect(a.btnSubmit_,"onClick",a.execute_),a.connect(a.btnCancel_,
"onClick",a.onCancel),a.connect(a,"onCancel",a.cancel_),a}});return w("extend-esri")&&(m.IdentityManagerDialog=m.IdentityManager=k),k});