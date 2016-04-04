//>>built
require({cache:{"url:dojox/form/resources/UploaderFileList.html":'\x3cdiv class\x3d"dojoxUploaderFileList"\x3e\n\t\x3cdiv data-dojo-attach-point\x3d"progressNode" class\x3d"dojoxUploaderFileListProgress"\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"percentBarNode" class\x3d"dojoxUploaderFileListProgressBar"\x3e\x3c/div\x3e\n\t\t\x3cdiv data-dojo-attach-point\x3d"percentTextNode" class\x3d"dojoxUploaderFileListPercentText"\x3e0%\x3c/div\x3e\n\t\x3c/div\x3e\n\t\x3ctable class\x3d"dojoxUploaderFileListTable"\x3e\n\t\t\x3cthead\x3e\n\t\t\t\x3ctr class\x3d"dojoxUploaderFileListHeader"\x3e\n\t\t\t\t\x3cth class\x3d"dojoxUploaderIndex"\x3e${headerIndex}\x3c/th\x3e\n\t\t\t\t\x3cth class\x3d"dojoxUploaderIcon"\x3e${headerType}\x3c/th\x3e\n\t\t\t\t\x3cth class\x3d"dojoxUploaderFileName"\x3e${headerFilename}\x3c/th\x3e\n\t\t\t\t\x3cth class\x3d"dojoxUploaderFileSize" data-dojo-attach-point\x3d"sizeHeader"\x3e${headerFilesize}\x3c/th\x3e\n\t\t\t\x3c/tr\x3e\n\t\t\x3c/thead\x3e\n\t\t\x3ctbody class\x3d"dojoxUploaderFileListContent" data-dojo-attach-point\x3d"listNode"\x3e\x3c/tbody\x3e\n\t\x3c/table\x3e\n\x3cdiv\x3e'}});
define("dojox/form/uploader/FileList","dojo/_base/fx dojo/dom-style dojo/dom-class dojo/_base/declare dojo/_base/lang dojo/_base/array dijit/_base/manager dojox/form/uploader/_Base dojo/text!../resources/UploaderFileList.html".split(" "),function(k,d,f,l,h,m,n,p,q){return l("dojox.form.uploader.FileList",p,{uploaderId:"",uploader:null,headerIndex:"#",headerType:"Type",headerFilename:"File Name",headerFilesize:"Size",_upCheckCnt:0,rowAmt:0,templateString:q,postCreate:function(){this.setUploader();
this.hideProgress()},reset:function(){for(var a=0;a<this.rowAmt;a++)this.listNode.deleteRow(0);this.rowAmt=0},setUploader:function(){if(!this.uploaderId&&!this.uploader)console.warn("uploaderId not passed to UploaderFileList");else if(this.uploaderId&&!this.uploader)this.uploader=n.byId(this.uploaderId);else if(4<this._upCheckCnt){console.warn("uploader not found for ID ",this.uploaderId);return}this.uploader?(this.connect(this.uploader,"onChange","_onUploaderChange"),this.connect(this.uploader,"reset",
"reset"),this.connect(this.uploader,"onBegin",function(){this.showProgress(!0)}),this.connect(this.uploader,"onProgress","_progress"),this.connect(this.uploader,"onComplete",function(){setTimeout(h.hitch(this,function(){this.hideProgress(!0)}),1250)}),(this._fileSizeAvail={html5:1,flash:1}[this.uploader.uploadType])||(this.sizeHeader.style.display="none")):(this._upCheckCnt++,setTimeout(h.hitch(this,"setUploader"),250))},hideProgress:function(a){this._hideShowProgress(a?{ani:!0,endDisp:"none",beg:15,
end:0}:{endDisp:"none",ani:!1})},showProgress:function(a){this._hideShowProgress(a?{ani:!0,endDisp:"block",beg:0,end:15}:{endDisp:"block",ani:!1})},_progress:function(a){this.percentTextNode.innerHTML=a.percent;d.set(this.percentBarNode,"width",a.percent)},_hideShowProgress:function(a){var e=this.progressNode,c=function(){d.set(e,"display",a.endDisp)};a.ani?(d.set(e,"display","block"),k.animateProperty({node:e,properties:{height:{start:a.beg,end:a.end,units:"px"}},onEnd:c}).play()):c()},_onUploaderChange:function(a){this.reset();
m.forEach(a,function(a,c){this._addRow(c+1,this.getFileType(a.name),a.name,a.size)},this)},_addRow:function(a,e,c,d){var b,g=this.listNode.insertRow(-1);b=g.insertCell(-1);f.add(b,"dojoxUploaderIndex");b.innerHTML=a;b=g.insertCell(-1);f.add(b,"dojoxUploaderIcon");b.innerHTML=e;b=g.insertCell(-1);f.add(b,"dojoxUploaderFileName");b.innerHTML=c;this._fileSizeAvail&&(b=g.insertCell(-1),f.add(b,"dojoxUploaderSize"),b.innerHTML=this.convertBytes(d).value);this.rowAmt++}})});