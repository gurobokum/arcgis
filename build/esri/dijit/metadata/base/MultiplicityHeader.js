//>>built
require({cache:{"url:esri/dijit/metadata/base/templates/MultiplicityHeader.html":'\x3cdiv class\x3d"gxeMultiplicityHeader"\x3e\n  \x3cdiv class\x3d"gxeHeader" data-dojo-attach-point\x3d"headerNode"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/MultiplicityTools" data-dojo-attach-point\x3d"tools"\x3e\x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/MultiplicityTabs" data-dojo-attach-point\x3d"tabs"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"gxeContainer" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("esri/dijit/metadata/base/MultiplicityHeader","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ./etc/elementRepeater ./Templated ./LabelMixin dojo/text!./templates/MultiplicityHeader.html ./MultiplicityTools ./MultiplicityTabs ../../../kernel".split(" "),function(f,h,g,b,e,k,l,m,n,p,q,t,u,r){f=f([n,p],{_currentIndex:-1,_isGxeMultiplicityHeader:!0,_tablessElement:null,templateString:q,label:null,target:null,minOccurs:1,maxOccurs:1,
preferOpen:!1,showHeader:!0,useTabs:!0,postCreate:function(){this.inherited(arguments)},adoptElement:function(a,c){if(!this.useTabs)return void this._adoptElementTabless(a);a.showHeader=!1;a.trackMultiplicity=!1;a._adoptedForMultiplicity=!0;e.place(a.domNode,this.containerNode,"last");a._started||a.startup();this.tabs.ensureTabButton();var d=this.tabs.addTabButton();c?this.tabs.activateTab(d):a.domNode.style.display="none"},_adoptElementTabless:function(a){var c=this._tablessElement.getParent(),d=
c.containerNode,b="last";g.forEach(c.getChildren(),function(a){this._isMatchingElement(a)&&(d=a.domNode,b="after")},this);e.place(a.domNode,d,b);a._started||a.startup();a=this.getElements();this.tools.updateUI(a);this.tools.updateSiblings(a)},ensureActiveTab:function(a){if(this.useTabs){var c,d=this.getElements();g.some(d,function(d,b){if(d===a){try{c=this.tabs.getTabButton(b),this.tabs.activateTab(c)}catch(e){console.error(e)}return!0}},this)}},getCurrentIndex:function(a){if(this.useTabs)return this._currentIndex;
var c=-1,d=this._tablessElement;return g.some(a,function(a,b){return a===d?(c=b,!0):void 0}),c},getElements:function(){if(this.useTabs)return this.getChildren();var a=this._tablessElement.getParent(),c=[];return g.forEach(a.getChildren(),function(a){this._isMatchingElement(a)&&c.push(a)},this),c},getMultiplicityInfo:function(a){a||(a=this.getElements());var c=this.getCurrentIndex(a),b=a.length,e=b-1,f=this.isElementRepeatable();a={canAdd:!1,canRemove:!1,canMoveUp:!1,canMoveDown:!1,currentIndex:c,
elements:a,numElements:b,isRepeatable:f};return f&&("unbounded"===this.maxOccurs||this.maxOccurs>b)&&(a.canAdd=!0),-1!==c&&(0<c&&(a.canMoveUp=!0),e>c&&(a.canMoveDown=!0),1<b&&b>this.minOccurs&&(a.canRemove=!0)),a},initialize:function(a){var c=this.containerNode,d=0===a.minOccurs;this.useTabs?(e.place(this.domNode,a.domNode,"before"),e.place(a.domNode,this.containerNode,"first"),b.add(this.domNode,"tabbed gxeIndent"),d||b.add(this.domNode,"open")):(c=a.containerNode,this._tablessElement=a,e.place(this.domNode,
a.containerNode,"before"),e.destroy(this.containerNode),b.add(this.domNode,"tabless"),b.add(a.domNode,"tabless gxeIndent"),b.remove(this.tools.moveElementUpNode,"gxeIconMoveLeft"),b.add(this.tools.moveElementUpNode,"gxeIconMoveUp"),b.remove(this.tools.moveElementDownNode,"gxeIconMoveRight"),b.add(this.tools.moveElementDownNode,"gxeIconMoveDown"),this.containerNode=null);this.tools.initialize(this);this.useTabs?this.tabs.initialize(this):(this.tabs.destroyRecursive(!1),this.tabs=null);var f=a.preferOpen,
g=this.labelNode;!a.noToggle&&d?this.initializeLabel(this.label,d,f,g,c):(this.labelNode.innerHTML=this.label,d?b.add(this.labelNode,"gxeOptionalLabel"):b.add(this.labelNode,"gxeMandatoryLabel"),b.add(this.domNode,"open"),k.set(this.labelNode,"display","inline-block"))},_isMatchingElement:function(a){return a&&a._isGxeElement?this.target===a.target:!1},isElementRepeatable:function(){return"unbounded"===this.maxOccurs||1<this.maxOccurs?!0:!1},repeatElement:function(a,b){return m.repeatElement(this,
a,b)},whenOptionalContentToggled:function(a){this.useTabs||(this._tablessElement._isOptionallyOff=a);a?(b.remove(this.domNode,"open"),b.add(this.domNode,"closed"),this.tools&&(this.tools.domNode.style.visibility="hidden"),this.tabs&&(this.tabs.domNode.style.visibility="hidden")):(b.remove(this.domNode,"closed"),b.add(this.domNode,"open"),this.tools&&(this.tools.domNode.style.visibility="visible"),this.tabs&&(this.tabs.domNode.style.visibility="visible"))}});return l("extend-esri")&&h.setObject("dijit.metadata.base.MultiplicityHeader",
f,r),f});