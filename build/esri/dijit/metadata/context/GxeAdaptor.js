//>>built
define("esri/dijit/metadata/context/GxeAdaptor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/Deferred dijit/_WidgetBase ../../../kernel".split(" "),function(b,d,h,e,c,f,g){b=b([f],{postCreate:function(){this.inherited(arguments)},afterEditDocumentLoad:function(){},afterViewDocumentLoad:function(){},deleteMetadata:function(){var a=new c;return a.resolve(),a},getAllowEditMetadata:function(){return!1},getAllowDeleteMetadata:function(){return!1},getAllowPullItem:function(){return!1},
getAllowPushToItem:function(){return!1},getOriginalXml:function(){return null},pullItem:function(){var a=new c;return a.resolve(),a},saveXml:function(){var a=new c;return a.resolve(),a}});return e("extend-esri")&&d.setObject("dijit.metadata.context.GxeAdaptor",b,g),b});