//>>built
define("dojox/mvc/_Container",["dojo/_base/declare","dojo/_base/lang","dojo/when","dijit/_WidgetBase","dojo/regexp"],function(e,f,g,h,k){return e("dojox.mvc._Container",h,{stopParser:!0,exprchar:"$",templateString:"",inlineTemplateString:"",_containedWidgets:[],_parser:null,_createBody:function(){if(!this._parser)try{this._parser=require("dojo/parser")}catch(a){try{this._parser=require("dojox/mobile/parser")}catch(b){console.error("Add explicit require(['dojo/parser']) or explicit require(['dojox/mobile/parser']), one of the parsers is required!")}}var c=
this;if(this._parser)return g(this._parser.parse(this.srcNodeRef,{template:!0,inherited:{dir:this.dir,lang:this.lang},propsThis:this,scope:"dojo"}),function(b){c._containedWidgets=b})},_destroyBody:function(){if(this._containedWidgets&&0<this._containedWidgets.length)for(var a=this._containedWidgets.length-1;-1<a;a--){var b=this._containedWidgets[a];b&&!b._destroyed&&b.destroy&&b.destroy()}},_exprRepl:function(a){var b=this,c=function(a,c){if(!a)return"";var d=a.substr(2),d=d.substr(0,d.length-1);
with(b)return eval(d)},c=f.hitch(this,c);return a.replace(new RegExp(k.escapeString(this.exprchar)+"({.*?})","g"),function(a,b,d){return c(a,b).toString()})}})});