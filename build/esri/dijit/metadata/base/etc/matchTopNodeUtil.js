//>>built
define("esri/dijit/metadata/base/etc/matchTopNodeUtil","dojo/_base/lang dojo/_base/array dojo/has ../xml/xmlUtil ../xml/XmlFlattener ../../../../kernel".split(" "),function(k,g,l,f,m,n){f={evaluateDomMatch:function(b,c,a){if(!this.hasMatchConditions(b))return c;var d=new m,e=[],h=b.matchTopNode.length;return g.forEach(c,function(c){var f=0;g.forEach(b.matchTopNode,function(e){var h=d.flattenNode(c,a);this._evaluateDomNode(b,c,h,e)&&f++},this);f===h&&e.push(c)},this),e},evaluateXNodeMatch:function(b,
c){if(!this.hasMatchConditions(b))return!0;var a=0,d=b.matchTopNode.length;return g.forEach(b.matchTopNode,function(b){var d=this._findXNode(c,b.qPath,null);d&&this._evaluateXNode(d,b)&&a++},this),a===d},hasMatchConditions:function(b){return b.matchTopNode&&b.matchTopNode.push&&0<b.matchTopNode.length?!0:!1},_evaluateDomNode:function(b,c,a,d){var e=c=null;b=b.target+"/"+d.qPath;if(b in a)(e=a[b])&&0<e.length&&(c=e[0]);else if("mustNot"!==d.qMode)return!1;a=null===d.qValue||c===d.qValue;return"mustNot"===
d.qMode?!a:a},_evaluateXNode:function(b,c){var a=b.getXmlValue(),a=null===c.qValue||a===c.qValue;return"mustNot"===c.qMode?!a:a},_findXNode:function(b,c,a){var d=null,e=!0;if(b._isGxeElement)if(null===a)a="";else{if(0<a.length&&(a+="/"),a+=b.target,c===a)return b;e=!1;0===c.indexOf(a)&&(e=!0)}else if(b._isGxeAttribute&&(e=!1,null!==a&&(0<a.length&&(a+="/"),a+="@"+b.target,c===a)))return b;return e&&g.some(b.getChildren(),function(b){return d=this._findXNode(b,c,a),d?!0:void 0},this),d}};return l("extend-esri")&&
k.setObject("dijit.metadata.base.etc.matchTopNodeUtil",f,n),f});