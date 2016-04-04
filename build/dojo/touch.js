//>>built
define("dojo/touch","./_base/kernel ./aspect ./dom ./dom-class ./_base/lang ./on ./has ./mouse ./domReady ./_base/window".split(" "),function(G,w,x,H,I,f,m,t,y,c){function k(b,a,d){return u&&d?function(b,a){return f(b,d,a)}:z?function(d,c){var l=f(d,a,function(l){c.call(this,l);n=(new Date).getTime()}),J=f(d,b,function(l){(!n||(new Date).getTime()>n+1E3)&&c.call(this,l)});return{remove:function(){l.remove();J.remove()}}}:function(a,d){return f(a,b,d)}}function K(b){do if(void 0!==b.dojoClick)return b;
while(b=b.parentNode)}function A(b,a,d){var e=K(b.target);if(g=!b.target.disabled&&e&&e.dojoClick)if(q=(p="useTarget"==g)?e:b.target,p&&b.preventDefault(),B=b.changedTouches?b.changedTouches[0].pageX-c.global.pageXOffset:b.clientX,C=b.changedTouches?b.changedTouches[0].pageY-c.global.pageYOffset:b.clientY,D=("object"==typeof g?g.x:"number"==typeof g?g:0)||4,E=("object"==typeof g?g.y:"number"==typeof g?g:0)||4,!F){b=function(l){c.doc.addEventListener(l,function(a){a._dojo_click||!((new Date).getTime()<=
v+1E3)||"INPUT"==a.target.tagName&&H.contains(a.target,"dijitOffScreen")||(a.stopPropagation(),a.stopImmediatePropagation&&a.stopImmediatePropagation(),"click"!=l||"INPUT"==a.target.tagName&&"radio"!=a.target.type&&"checkbox"!=a.target.type||"TEXTAREA"==a.target.tagName||"AUDIO"==a.target.tagName||"VIDEO"==a.target.tagName||a.preventDefault())},!0)};var h=function(a){g=p?x.isDescendant(c.doc.elementFromPoint(a.changedTouches?a.changedTouches[0].pageX-c.global.pageXOffset:a.clientX,a.changedTouches?
a.changedTouches[0].pageY-c.global.pageYOffset:a.clientY),q):g&&(a.changedTouches?a.changedTouches[0].target:a.target)==q&&Math.abs((a.changedTouches?a.changedTouches[0].pageX-c.global.pageXOffset:a.clientX)-B)<=D&&Math.abs((a.changedTouches?a.changedTouches[0].pageY-c.global.pageYOffset:a.clientY)-C)<=E};F=!0;c.doc.addEventListener(a,function(a){h(a);p&&a.preventDefault()},!0);c.doc.addEventListener(d,function(a){h(a);if(g){v=(new Date).getTime();var b=p?q:a.target;"LABEL"===b.tagName&&(b=x.byId(b.getAttribute("for"))||
b);var d=a.changedTouches?a.changedTouches[0]:a,c=document.createEvent("MouseEvents");c._dojo_click=!0;c.initMouseEvent("click",!0,!0,a.view,a.detail,d.screenX,d.screenY,d.clientX,d.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null);setTimeout(function(){f.emit(b,"click",c);v=(new Date).getTime()},0)}},!0);b("click");b("mousedown");b("mouseup")}}var r=5>m("ios"),u=m("pointer-events")||m("MSPointer"),e=function(){var b={},a;for(a in{down:1,move:1,up:1,cancel:1,over:1,out:1})b[a]=m("MSPointer")?
"MSPointer"+a.charAt(0).toUpperCase()+a.slice(1):"pointer"+a;return b}(),z=m("touch-events"),F,g,p=!1,q,B,C,D,E,v,n,h;u?y(function(){c.doc.addEventListener(e.down,function(b){A(b,e.move,e.up)},!0)}):z&&y(function(){function b(a){var b=I.delegate(a,{bubbles:!0});6<=m("ios")&&(b.touches=a.touches,b.altKey=a.altKey,b.changedTouches=a.changedTouches,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.targetTouches=a.targetTouches);return b}h=c.body();c.doc.addEventListener("touchstart",function(a){n=
(new Date).getTime();var b=h;h=a.target;f.emit(b,"dojotouchout",{relatedTarget:h,bubbles:!0});f.emit(h,"dojotouchover",{relatedTarget:b,bubbles:!0});A(a,"touchmove","touchend")},!0);f(c.doc,"touchmove",function(a){n=(new Date).getTime();var d=c.doc.elementFromPoint(a.pageX-(r?0:c.global.pageXOffset),a.pageY-(r?0:c.global.pageYOffset));d&&(h!==d&&(f.emit(h,"dojotouchout",{relatedTarget:d,bubbles:!0}),f.emit(d,"dojotouchover",{relatedTarget:h,bubbles:!0}),h=d),f.emit(d,"dojotouchmove",b(a))||a.preventDefault())});
f(c.doc,"touchend",function(a){n=(new Date).getTime();var d=c.doc.elementFromPoint(a.pageX-(r?0:c.global.pageXOffset),a.pageY-(r?0:c.global.pageYOffset))||c.body();f.emit(d,"dojotouchend",b(a))})});w={press:k("mousedown","touchstart",e.down),move:k("mousemove","dojotouchmove",e.move),release:k("mouseup","dojotouchend",e.up),cancel:k(t.leave,"touchcancel",u?e.cancel:null),over:k("mouseover","dojotouchover",e.over),out:k("mouseout","dojotouchout",e.out),enter:t._eventHandler(k("mouseover","dojotouchover",
e.over)),leave:t._eventHandler(k("mouseout","dojotouchout",e.out))};return G.touch=w});