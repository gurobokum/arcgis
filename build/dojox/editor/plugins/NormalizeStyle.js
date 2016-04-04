//>>built
define("dojox/editor/plugins/NormalizeStyle","dojo dijit dojox dijit/_editor/_Plugin dijit/_editor/html dojo/_base/connect dojo/_base/declare".split(" "),function(e,v,z,w,x){var n=e.declare("dojox.editor.plugins.NormalizeStyle",w,{mode:"semantic",condenseSpans:!0,setEditor:function(a){this.editor=a;a.customUndo=!0;"semantic"===this.mode?this.editor.contentDomPostFilters.push(e.hitch(this,this._convertToSemantic)):"css"===this.mode&&this.editor.contentDomPostFilters.push(e.hitch(this,this._convertToCss));
e.isIE?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),this._browserFilter=this._convertToSemantic):e.isWebKit?(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToCss)),this._browserFilter=this._convertToCss):(this.editor.contentDomPreFilters.push(e.hitch(this,this._convertToSemantic)),this._browserFilter=this._convertToSemantic);this.editor._inserthtmlImpl&&(this.editor._oldInsertHtmlImpl=this.editor._inserthtmlImpl);this.editor._inserthtmlImpl=e.hitch(this,
this._inserthtmlImpl)},_convertToSemantic:function(a){if(a){var h=this.editor.document,p=this,l=function(b){if(1==b.nodeType){if("dijitEditorBody"!==b.id){var d=b.style,a=b.tagName?b.tagName.toLowerCase():"",f;if(d&&"table"!=a&&"ul"!=a&&"ol"!=a){var g=d.fontWeight?d.fontWeight.toLowerCase():"",y=d.fontStyle?d.fontStyle.toLowerCase():"",r=d.textDecoration?d.textDecoration.toLowerCase():"",c=d.fontSize?d.fontSize.toLowerCase():"",q=d.backgroundColor?d.backgroundColor.toLowerCase():"",d=d.color?d.color.toLowerCase():
"",m=function(b,c){if(b){for(;c.firstChild;)b.appendChild(c.firstChild);"span"!=a||c.style.cssText?c.appendChild(b):(e.place(b,c,"before"),c.parentNode.removeChild(c),c=b)}return c};switch(g){case "bold":case "bolder":case "700":case "800":case "900":f=h.createElement("b"),b.style.fontWeight=""}b=m(f,b);f=null;"italic"==y&&(f=h.createElement("i"),b.style.fontStyle="");b=m(f,b);f=null;if(r){var t=r.split(" "),u=0;e.forEach(t,function(c){switch(c){case "underline":f=h.createElement("u");break;case "line-through":f=
h.createElement("strike")}u++;u==t.length&&(b.style.textDecoration="");b=m(f,b);f=null})}c&&(0<c.indexOf("pt")?(c=c.substring(0,c.indexOf("pt")),c=parseInt(c),5>c?c="xx-small":10>c?c="x-small":15>c?c="small":20>c?c="medium":25>c?c="large":30>c?c="x-large":30<c&&(c="xx-large")):0<c.indexOf("px")&&(c=c.substring(0,c.indexOf("px")),c=parseInt(c),5>c?c="xx-small":10>c?c="x-small":15>c?c="small":20>c?c="medium":25>c?c="large":30>c?c="x-large":30<c&&(c="xx-large")),(g={"xx-small":1,"x-small":2,small:3,
medium:4,large:5,"x-large":6,"xx-large":7,"-webkit-xxx-large":7}[c])||(g=3),f=h.createElement("font"),f.setAttribute("size",g),b.style.fontSize="");b=m(f,b);f=null;q&&"font"!==a&&p._isInline(a)&&(q=(new e.Color(q)).toHex(),f=h.createElement("font"),f.style.backgroundColor=q,b.style.backgroundColor="");d&&"font"!==a&&(d=(new e.Color(d)).toHex(),f=h.createElement("font"),f.setAttribute("color",d),b.style.color="");b=m(f,b);f=null}}if(b.childNodes){var n=[];e.forEach(b.childNodes,function(b){n.push(b)});
e.forEach(n,l)}}return b};return this._normalizeTags(l(a))}return a},_normalizeTags:function(a){var h=this.editor.document;e.query("em,s,strong",a).forEach(function(a){var l;switch(a.tagName?a.tagName.toLowerCase():""){case "s":l="strike";break;case "em":l="i";break;case "strong":l="b"}if(l){var b=h.createElement(l);for(e.place("\x3c"+l+"\x3e",a,"before");a.firstChild;)b.appendChild(a.firstChild);a.parentNode.removeChild(a)}});return a},_convertToCss:function(a){if(a){var h=this.editor.document,p=
function(a){if(1==a.nodeType){if("dijitEditorBody"!==a.id){var b=a.tagName?a.tagName.toLowerCase():"";if(b){var d;switch(b){case "b":case "strong":d=h.createElement("span");d.style.fontWeight="bold";break;case "i":case "em":d=h.createElement("span");d.style.fontStyle="italic";break;case "u":d=h.createElement("span");d.style.textDecoration="underline";break;case "strike":case "s":d=h.createElement("span");d.style.textDecoration="line-through";break;case "font":b={},e.attr(a,"color")&&(b.color=e.attr(a,
"color")),e.attr(a,"face")&&(b.fontFace=e.attr(a,"face")),a.style&&a.style.backgroundColor&&(b.backgroundColor=a.style.backgroundColor),a.style&&a.style.color&&(b.color=a.style.color),d={1:"xx-small",2:"x-small",3:"small",4:"medium",5:"large",6:"x-large",7:"xx-large"},e.attr(a,"size")&&(b.fontSize=d[e.attr(a,"size")]),d=h.createElement("span"),e.style(d,b)}if(d){for(;a.firstChild;)d.appendChild(a.firstChild);e.place(d,a,"before");a.parentNode.removeChild(a);a=d}}}if(a.childNodes){var k=[];e.forEach(a.childNodes,
function(a){k.push(a)});e.forEach(k,p)}}return a};a=p(a);this.condenseSpans&&this._condenseSpans(a)}return a},_condenseSpans:function(a){var h=function(a){var l=function(a){var b;a&&(b={},a=a.toLowerCase().split(";"),e.forEach(a,function(a){if(a){var d=a.split(":");a=d[0]?e.trim(d[0]):"";d=d[1]?e.trim(d[1]):"";if(a&&d){var f,h="";for(f=0;f<a.length;f++){var g=a.charAt(f);"-"==g?(f++,g=a.charAt(f),h+=g.toUpperCase()):h+=g}b[h]=d}}}));return b};if(a&&1==a.nodeType&&"span"===(a.tagName?a.tagName.toLowerCase():
"")&&a.childNodes&&1===a.childNodes.length)for(var b=a.firstChild;b&&1==b.nodeType&&b.tagName&&"span"==b.tagName.toLowerCase();)if(e.attr(b,"class")||e.attr(b,"id")||!b.style)b=b.nextSibling;else{var d=l(a.style.cssText),k=l(b.style.cssText);if(d&&k){var f={},g;for(g in d)if(d[g]&&k[g]&&d[g]!=k[g]){d[g]!=k[g]?"textDecoration"==g?(f[g]=d[g]+" "+k[g],delete k[g]):f=null:f=null;break}else f[g]=d[g],delete k[g];if(f){for(g in k)f[g]=k[g];for(e.style(a,f);b.firstChild;)a.appendChild(b.firstChild);d=b.nextSibling;
b.parentNode.removeChild(b);b=d}else b=b.nextSibling}else b=b.nextSibling}a.childNodes&&a.childNodes.length&&e.forEach(a.childNodes,h)};h(a)},_isInline:function(a){switch(a){case "a":case "b":case "strong":case "s":case "strike":case "i":case "u":case "em":case "sup":case "sub":case "span":case "font":case "big":case "cite":case "q":case "img":case "small":return!0;default:return!1}},_inserthtmlImpl:function(a){if(a){var e=this.editor.document.createElement("div");e.innerHTML=a;e=this._browserFilter(e);
a=x.getChildrenHtml(e);e.innerHTML="";return this.editor._oldInsertHtmlImpl?this.editor._oldInsertHtmlImpl(a):this.editor.execCommand("inserthtml",a)}return!1}});e.subscribe(v._scopeName+".Editor.getPlugin",null,function(a){a.plugin||"normalizestyle"!==a.args.name.toLowerCase()||(a.plugin=new n({mode:"mode"in a.args?a.args.mode:"semantic",condenseSpans:"condenseSpans"in a.args?a.args.condenseSpans:!0}))});return n});