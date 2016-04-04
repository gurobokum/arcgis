//>>built
define("dojox/data/XmlStore","dojo/_base/lang dojo/_base/declare dojo/_base/xhr dojo/data/util/simpleFetch dojo/_base/query dojo/_base/array dojo/_base/kernel dojo/data/util/filter dojox/xml/parser dojox/data/XmlItem".split(" "),function(v,t,l,x,y,w,m,z,u,A){t=t("dojox.data.XmlStore",null,{constructor:function(a){a&&(this.url=a.url,this.rootItem=a.rootItem||a.rootitem||this.rootItem,this.keyAttribute=a.keyAttribute||a.keyattribute||this.keyAttribute,this._attributeMap=a.attributeMap||a.attributemap,
this.label=a.label||this.label,this.sendQuery=a.sendQuery||a.sendquery||this.sendQuery,"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1));this._newItems=[];this._deletedItems=[];this._modifiedItems=[]},url:"",rootItem:"",keyAttribute:"",label:"",sendQuery:!1,attributeMap:null,urlPreventCache:!0,getValue:function(a,b,c){a=a.element;var e,d;if("tagName"===b)return a.nodeName;if("childNodes"===b){for(e=0;e<a.childNodes.length;e++)if(d=a.childNodes[e],1===d.nodeType)return this._getItem(d);
return c}if("text()"===b){for(e=0;e<a.childNodes.length;e++)if(d=a.childNodes[e],3===d.nodeType||4===d.nodeType)return d.nodeValue;return c}b=this._getAttribute(a.nodeName,b);if("@"===b.charAt(0))return b=b.substring(1),(b=a.getAttribute(b))?b:c;for(e=0;e<a.childNodes.length;e++)if(d=a.childNodes[e],1===d.nodeType&&d.nodeName===b)return this._getItem(d);return c},getValues:function(a,b){var c=a.element,e=[],d,f;if("tagName"===b)return[c.nodeName];if("childNodes"===b){for(d=0;d<c.childNodes.length;d++)f=
c.childNodes[d],1===f.nodeType&&e.push(this._getItem(f));return e}if("text()"===b){c=c.childNodes;for(d=0;d<c.length;d++)f=c[d],3!==f.nodeType&&4!==f.nodeType||e.push(f.nodeValue);return e}b=this._getAttribute(c.nodeName,b);if("@"===b.charAt(0))return e=b.substring(1),c=c.getAttribute(e),void 0!==c?[c]:[];for(d=0;d<c.childNodes.length;d++)f=c.childNodes[d],1===f.nodeType&&f.nodeName===b&&e.push(this._getItem(f));return e},getAttributes:function(a){a=a.element;var b=[],c;b.push("tagName");if(0<a.childNodes.length){var e=
{},d=!0,f=!1;for(c=0;c<a.childNodes.length;c++){var h=a.childNodes[c];1===h.nodeType?(d=h.nodeName,e[d]||(b.push(d),e[d]=d),d=!0):3===h.nodeType&&(f=!0)}d&&b.push("childNodes");f&&b.push("text()")}for(c=0;c<a.attributes.length;c++)b.push("@"+a.attributes[c].nodeName);if(this._attributeMap)for(var g in this._attributeMap)c=g.indexOf("."),0<c?g.substring(0,c)===a.nodeName&&b.push(g.substring(c+1)):b.push(g);return b},hasAttribute:function(a,b){return void 0!==this.getValue(a,b)},containsValue:function(a,
b,c){a=this.getValues(a,b);for(b=0;b<a.length;b++)if("string"===typeof c){if(a[b].toString&&a[b].toString()===c)return!0}else if(a[b]===c)return!0;return!1},isItem:function(a){return a&&a.element&&a.store&&a.store===this?!0:!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getFeatures:function(){var a={"dojo.data.api.Read":!0,"dojo.data.api.Write":!0};this.sendQuery&&""===this.keyAttribute||(a["dojo.data.api.Identity"]=!0);return a},getLabel:function(a){if(""!==this.label&&
this.isItem(a)&&(a=this.getValue(a,this.label)))return a.toString()},getLabelAttributes:function(a){return""!==this.label?[this.label]:null},_fetchItems:function(a,b,c){var e=this._getFetchUrl(a);if(e){var d=this.sendQuery?{}:a,f=this,e=l.get({url:e,handleAs:"xml",preventCache:f.urlPreventCache});e.addCallback(function(c){(c=f._getItems(c,d))&&0<c.length?b(c,a):b([],a)});e.addErrback(function(b){c(b,a)})}else c(Error("No URL specified."),a)},_getFetchUrl:function(a){if(!this.sendQuery)return this.url;
var b=a.query;if(!b)return this.url;if(v.isString(b))return this.url+b;a="";for(var c in b){var e=b[c];e&&(a&&(a+="\x26"),a+=c+"\x3d"+e)}if(!a)return this.url;c=this.url;c=0>c.indexOf("?")?c+"?":c+"\x26";return c+a},_getItems:function(a,b){var c=null;b&&(c=b.query);var e=[],d=null,d=""!==this.rootItem?y(this.rootItem,a):a.documentElement.childNodes;b.queryOptions&&b.queryOptions.deep&&(d=this._flattenNodes(d));for(var f=0;f<d.length;f++){var h=d[f];if(1==h.nodeType)if(h=this._getItem(h),c){var g=
b.queryOptions?b.queryOptions.ignoreCase:!1,k,p=!1,m=!0,n={},r;for(r in c)k=c[r],"string"===typeof k?n[r]=z.patternToRegExp(k,g):k&&(n[r]=k);for(var q in c){for(var m=!1,l=this.getValues(h,q),g=0;g<l.length;g++){if(k=l[g]){var t=c[q];"string"===typeof k&&n[q]?p=null!==k.match(n[q])?!0:!1:"object"===typeof k&&(p=k.toString&&n[q]?null!==k.toString().match(n[q])?!0:!1:"*"===t||t===k?!0:!1)}if(p)break}if(!p)break}(m||p)&&e.push(h)}else e.push(h)}w.forEach(e,function(a){a.element.parentNode&&a.element.parentNode.removeChild(a.element)},
this);return e},_flattenNodes:function(a){var b=[];if(a){var c;for(c=0;c<a.length;c++){var e=a[c];b.push(e);e.childNodes&&0<e.childNodes.length&&(b=b.concat(this._flattenNodes(e.childNodes)))}}return b},close:function(a){},newItem:function(a,b){a=a||{};var c=a.tagName;if(!c&&(c=this.rootItem,""===c))return null;var e=this._getDocument(),d=e.createElement(c),f;for(f in a){var h;if("tagName"!==f)if("text()"===f)h=e.createTextNode(a[f]),d.appendChild(h);else if(f=this._getAttribute(c,f),"@"===f.charAt(0))h=
f.substring(1),d.setAttribute(h,a[f]);else{var g=e.createElement(f);h=e.createTextNode(a[f]);g.appendChild(h);d.appendChild(g)}}c=this._getItem(d);this._newItems.push(c);e=null;b&&b.parent&&b.attribute&&(e={item:b.parent,attribute:b.attribute,oldValue:void 0},(d=this.getValues(b.parent,b.attribute))&&0<d.length?(f=d.slice(0,d.length),e.oldValue=1===d.length?d[0]:d.slice(0,d.length),f.push(c),this.setValues(b.parent,b.attribute,f),e.newValue=this.getValues(b.parent,b.attribute)):(this.setValue(b.parent,
b.attribute,c),e.newValue=c));return c},deleteItem:function(a){var b=a.element;if(b.parentNode)return this._backupItem(a),b.parentNode.removeChild(b),!0;this._forgetItem(a);this._deletedItems.push(a);return!0},setValue:function(a,b,c){if("tagName"===b)return!1;this._backupItem(a);a=a.element;var e;if("childNodes"===b)e=c.element,a.appendChild(e);else if("text()"===b){for(;a.firstChild;)a.removeChild(a.firstChild);c=this._getDocument(a).createTextNode(c);a.appendChild(c)}else if(b=this._getAttribute(a.nodeName,
b),"@"===b.charAt(0))e=b.substring(1),a.setAttribute(e,c);else{for(var d=0;d<a.childNodes.length;d++){var f=a.childNodes[d];if(1===f.nodeType&&f.nodeName===b){e=f;break}}d=this._getDocument(a);if(e)for(;e.firstChild;)e.removeChild(e.firstChild);else e=d.createElement(b),a.appendChild(e);c=d.createTextNode(c);e.appendChild(c)}return!0},setValues:function(a,b,c){if("tagName"===b)return!1;this._backupItem(a);a=a.element;var e,d,f;if("childNodes"===b){for(;a.firstChild;)a.removeChild(a.firstChild);for(e=
0;e<c.length;e++)d=c[e].element,a.appendChild(d)}else if("text()"===b){for(;a.firstChild;)a.removeChild(a.firstChild);b="";for(e=0;e<c.length;e++)b+=c[e];f=this._getDocument(a).createTextNode(b);a.appendChild(f)}else if(b=this._getAttribute(a.nodeName,b),"@"===b.charAt(0))b=b.substring(1),a.setAttribute(b,c[0]);else{for(e=a.childNodes.length-1;0<=e;e--)d=a.childNodes[e],1===d.nodeType&&d.nodeName===b&&a.removeChild(d);var h=this._getDocument(a);for(e=0;e<c.length;e++)d=h.createElement(b),f=h.createTextNode(c[e]),
d.appendChild(f),a.appendChild(d)}return!0},unsetAttribute:function(a,b){if("tagName"===b)return!1;this._backupItem(a);var c=a.element;if("childNodes"===b||"text()"===b)for(;c.firstChild;)c.removeChild(c.firstChild);else if(b=this._getAttribute(c.nodeName,b),"@"===b.charAt(0)){var e=b.substring(1);c.removeAttribute(e)}else for(e=c.childNodes.length-1;0<=e;e--){var d=c.childNodes[e];1===d.nodeType&&d.nodeName===b&&c.removeChild(d)}return!0},save:function(a){a||(a={});var b;for(b=0;b<this._modifiedItems.length;b++)this._saveItem(this._modifiedItems[b],
a,"PUT");for(b=0;b<this._newItems.length;b++)this._newItems[b].element.parentNode?(this._newItems.splice(b,1),b--):this._saveItem(this._newItems[b],a,"POST");for(b=0;b<this._deletedItems.length;b++)this._saveItem(this._deletedItems[b],a,"DELETE")},revert:function(){this._newItems=[];this._restoreItems(this._deletedItems);this._deletedItems=[];this._restoreItems(this._modifiedItems);this._modifiedItems=[];return!0},isDirty:function(a){return a?(a=this._getRootElement(a.element),0<=this._getItemIndex(this._newItems,
a)||0<=this._getItemIndex(this._deletedItems,a)||0<=this._getItemIndex(this._modifiedItems,a)):0<this._newItems.length||0<this._deletedItems.length||0<this._modifiedItems.length},_saveItem:function(a,b,c){var e,d;if(e="PUT"===c?this._getPutUrl(a):"DELETE"===c?this._getDeleteUrl(a):this._getPostUrl(a)){e={url:e,method:c||"POST",contentType:"text/xml",handleAs:"xml"};"PUT"===c?(e.putData=this._getPutContent(a),c=l.put(e)):"DELETE"===c?c=l.del(e):(e.postData=this._getPostContent(a),c=l.post(e));d=b.scope||
m.global;var f=this;c.addCallback(function(c){f._forgetItem(a);b.onComplete&&b.onComplete.call(d)});c.addErrback(function(a){b.onError&&b.onError.call(d,a)})}else b.onError&&(d=b.scope||m.global,b.onError.call(d,Error("No URL for saving content: "+this._getPostContent(a))))},_getPostUrl:function(a){return this.url},_getPutUrl:function(a){return this.url},_getDeleteUrl:function(a){var b=this.url;if(a&&""!==this.keyAttribute&&(a=this.getValue(a,this.keyAttribute)))var c="@"===this.keyAttribute.charAt(0)?
this.keyAttribute.substring(1):this.keyAttribute,b=b+(0>b.indexOf("?")?"?":"\x26"),b=b+(c+"\x3d"+a);return b},_getPostContent:function(a){return"\x3c?xml version\x3d'1.0'?\x3e"+u.innerXML(a.element)},_getPutContent:function(a){return"\x3c?xml version\x3d'1.0'?\x3e"+u.innerXML(a.element)},_getAttribute:function(a,b){if(this._attributeMap){var c=this._attributeMap[a+"."+b];c?b=c:(c=this._attributeMap[b])&&(b=c)}return b},_getItem:function(a){try{var b=null;""===this.keyAttribute&&(b=this._getXPath(a));
return new A(a,this,b)}catch(c){console.log(c)}return null},_getItemIndex:function(a,b){for(var c=0;c<a.length;c++)if(a[c].element===b)return c;return-1},_backupItem:function(a){var b=this._getRootElement(a.element);0<=this._getItemIndex(this._newItems,b)||0<=this._getItemIndex(this._modifiedItems,b)||(b!=a.element&&(a=this._getItem(b)),a._backup=b.cloneNode(!0),this._modifiedItems.push(a))},_restoreItems:function(a){w.forEach(a,function(a){a._backup&&(a.element=a._backup,a._backup=null)},this)},
_forgetItem:function(a){a=a.element;var b=this._getItemIndex(this._newItems,a);0<=b&&this._newItems.splice(b,1);b=this._getItemIndex(this._deletedItems,a);0<=b&&this._deletedItems.splice(b,1);b=this._getItemIndex(this._modifiedItems,a);0<=b&&this._modifiedItems.splice(b,1)},_getDocument:function(a){return a?a.ownerDocument:this._document?null:u.parse()},_getRootElement:function(a){for(;a.parentNode;)a=a.parentNode;return a},_getXPath:function(a){var b=null;if(!this.sendQuery)for(var c=a,b="";c&&c!=
a.ownerDocument;){for(var e=0,d=c,f=c.nodeName;d;)(d=d.previousSibling)&&d.nodeName===f&&e++;e="/"+f+"["+e+"]";b=b?e+b:e;c=c.parentNode}return b},getIdentity:function(a){if(this.isItem(a)){var b=null;this.sendQuery&&""!==this.keyAttribute?b=this.getValue(a,this.keyAttribute).toString():this.serverQuery||(b=""!==this.keyAttribute?this.getValue(a,this.keyAttribute).toString():a.q);return b}throw Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item");},getIdentityAttributes:function(a){if(this.isItem(a))return""!==
this.keyAttribute?[this.keyAttribute]:null;throw Error("dojox.data.XmlStore: Object supplied to getIdentity is not an item");},fetchItemByIdentity:function(a){var b=null,c=null,e=this,d=null,d=d=null;e.sendQuery?""!==e.keyAttribute?(b={query:{}},b.query[e.keyAttribute]=a.identity,d=this._getFetchUrl(b),b=function(b){var c=null;b&&(b=e._getItems(b,{}),1===b.length?c=b[0]:a.onError&&(b=a.scope||m.global,a.onError.call(b,Error("More than one item was returned from the server for the denoted identity"))));
a.onItem&&(b=a.scope||m.global,a.onItem.call(b,c))},d={url:d,handleAs:"xml",preventCache:e.urlPreventCache},d=l.get(d),d.addCallback(b),a.onError&&d.addErrback(function(b){a.onError.call(a.scope||m.global,b)})):a.onError&&a.onError.call(a.scope||m.global,Error("XmlStore is not told that the server to provides identity support.  No keyAttribute specified.")):(b=function(b){if(b)if(""!==e.keyAttribute){var d={query:{}};d.query[e.keyAttribute]=a.identity;d.queryOptions={deep:!0};d=e._getItems(b,d);c=
a.scope||m.global;1===d.length?a.onItem&&a.onItem.call(c,d[0]):0===d.length?a.onItem&&a.onItem.call(c,null):a.onError&&a.onError.call(c,Error("Items array size for identity lookup greater than 1, invalid keyAttribute."))}else{var d=a.identity.split("/"),g=b;for(b=0;b<d.length;b++)if(d[b]&&""!==d[b]){var k=d[b],k=k.substring(0,k.length-1),p=k.split("["),k=p[0],p=parseInt(p[1],10),l=0;if(g)if(g=g.childNodes){var n,r=null;for(n=0;n<g.length;n++){var q=g[n];if(q.nodeName===k)if(l<p)l++;else{r=q;break}}g=
r?r:null}else g=null;else break}d=null;g&&(d=e._getItem(g),d.element.parentNode&&d.element.parentNode.removeChild(d.element));a.onItem&&(c=a.scope||m.global,a.onItem.call(c,d))}},d=this._getFetchUrl(null),d={url:d,handleAs:"xml",preventCache:e.urlPreventCache},d=l.get(d),d.addCallback(b),a.onError&&d.addErrback(function(b){a.onError.call(a.scope||m.global,b)}))}});v.extend(t,x);return t});