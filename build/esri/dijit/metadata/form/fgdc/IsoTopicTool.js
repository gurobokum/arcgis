//>>built
define("esri/dijit/metadata/form/fgdc/IsoTopicTool","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/query dojo/has dijit/registry ../tools/ClickableTool ./IsoTopicDialog ../../../../kernel".split(" "),function(b,g,t,l,m,n,p,q,r){b=b([p],{thesaurus:"http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",postCreate:function(){this.inherited(arguments)},whenToolClicked:function(b,c){if(c&&c.parentXNode){var h,d,f,e=null,a=null,k=c.parentXNode.getParentElement();
k&&(d=l("[data-gxe-path\x3d'/metadata/idinfo/keywords/theme/themekey']",k.domNode),d&&1===d.length&&(f=n.byNode(d[0]),f&&(e=f.inputWidget,a=e.getInputValue(),null===a||a.push||(a=[a]))));e&&(h=new q({values:a,onChange:g.hitch(this,function(a){c.setInputValue(this.thesaurus);e.importValues(null,a)})}),h.show())}}});return m("extend-esri")&&g.setObject("dijit.metadata.form.fgdc.IsoTopicTool",b,r),b});