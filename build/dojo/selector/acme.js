//>>built
define("dojo/selector/acme",["../dom","../sniff","../_base/array","../_base/lang","../_base/window"],function(M,m,N,ba,z){var O=ba.trim,J=N.forEach,P="BackCompat"==z.doc.compatMode,u=!1,A=function(){return!0},K=function(b){b=0<="\x3e~+".indexOf(b.slice(-1))?b+" * ":b+" ";for(var a=function(a,c){return O(b.slice(a,c))},c=[],d=-1,f=-1,e=-1,h=-1,r=-1,q=-1,B=-1,F,C="",l="",m,k=0,t=b.length,g=null,n=null,p=function(){0<=q&&(g.id=a(q,k).replace(/\\/g,""),q=-1);if(0<=B){var b=B==k?null:a(B,k);g[0>"\x3e~+".indexOf(b)?
"tag":"oper"]=b;B=-1}0<=r&&(g.classes.push(a(r+1,k).replace(/\\/g,"")),r=-1)};C=l,l=b.charAt(k),k<t;k++)"\\"!=C&&(g||(m=k,g={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){return u?this.otag:this.tag}},B=k),F?l==F&&(F=null):"'"==l||'"'==l?F=l:0<=d?"]"==l?(n.attr?n.matchFor=a(e||d+1,k):n.attr=a(d+1,k),!(d=n.matchFor)||'"'!=d.charAt(0)&&"'"!=d.charAt(0)||(n.matchFor=d.slice(1,-1)),n.matchFor&&(n.matchFor=n.matchFor.replace(/\\/g,"")),g.attrs.push(n),n=null,d=
e=-1):"\x3d"==l&&(e=0<="|~^$*".indexOf(C)?C:"",n.type=e+l,n.attr=a(d+1,k-e.length),e=k+1):0<=f?")"==l&&(0<=h&&(n.value=a(f+1,k)),h=f=-1):"#"==l?(p(),q=k+1):"."==l?(p(),r=k):":"==l?(p(),h=k):"["==l?(p(),d=k,n={}):"("==l?(0<=h&&(n={name:a(h+1,k),value:null},g.pseudos.push(n)),f=k):" "==l&&C!=l&&(p(),0<=h&&g.pseudos.push({name:a(h+1,k)}),g.loops=g.pseudos.length||g.attrs.length||g.classes.length,g.oquery=g.query=a(m,k),g.otag=g.tag=g.oper?null:g.tag||"*",g.tag&&(g.tag=g.tag.toUpperCase()),c.length&&
c[c.length-1].oper&&(g.infixOper=c.pop(),g.query=g.infixOper.query+" "+g.query),c.push(g),g=null));return c},v=function(b,a){return b?a?function(){return b.apply(window,arguments)&&a.apply(window,arguments)}:b:a},w=function(b,a){var c=a||[];b&&c.push(b);return c},G=function(b){return 1==b.nodeType},x=function(b,a){return b?"class"==a?b.className||"":"for"==a?b.htmlFor||"":"style"==a?b.style.cssText||"":(u?b.getAttribute(a):b.getAttribute(a,2))||"":""},Q={"*\x3d":function(b,a){return function(c){return 0<=
x(c,b).indexOf(a)}},"^\x3d":function(b,a){return function(c){return 0==x(c,b).indexOf(a)}},"$\x3d":function(b,a){return function(c){c=" "+x(c,b);var d=c.lastIndexOf(a);return-1<d&&d==c.length-a.length}},"~\x3d":function(b,a){var c=" "+a+" ";return function(a){return 0<=(" "+x(a,b)+" ").indexOf(c)}},"|\x3d":function(b,a){var c=a+"-";return function(d){d=x(d,b);return d==a||0==d.indexOf(c)}},"\x3d":function(b,a){return function(c){return x(c,b)==a}}},H="undefined"==typeof z.doc.firstChild.nextElementSibling,
D=H?"nextSibling":"nextElementSibling",ca=H?"previousSibling":"previousElementSibling",E=H?G:A,R=function(b){for(;b=b[ca];)if(E(b))return!1;return!0},S=function(b){for(;b=b[D];)if(E(b))return!1;return!0},I=function(b){var a=b.parentNode,a=7!=a.nodeType?a:a.nextSibling,c=0,d=a.children||a.childNodes,f=b._i||b.getAttribute("_i")||-1,e=a._l||("undefined"!==typeof a.getAttribute?a.getAttribute("_l"):-1);if(!d)return-1;d=d.length;if(e==d&&0<=f&&0<=e)return f;m("ie")&&"undefined"!==typeof a.setAttribute?
a.setAttribute("_l",d):a._l=d;f=-1;for(a=a.firstElementChild||a.firstChild;a;a=a[D])E(a)&&(m("ie")?a.setAttribute("_i",++c):a._i=++c,b===a&&(f=c));return f},da=function(b){return!(I(b)%2)},ea=function(b){return I(b)%2},T={checked:function(b,a){return function(a){return!("checked"in a?!a.checked:!a.selected)}},disabled:function(b,a){return function(a){return a.disabled}},enabled:function(b,a){return function(a){return!a.disabled}},"first-child":function(){return R},"last-child":function(){return S},
"only-child":function(b,a){return function(a){return R(a)&&S(a)}},empty:function(b,a){return function(a){var b=a.childNodes;for(a=a.childNodes.length-1;0<=a;a--){var f=b[a].nodeType;if(1===f||3==f)return!1}return!0}},contains:function(b,a){var c=a.charAt(0);if('"'==c||"'"==c)a=a.slice(1,-1);return function(b){return 0<=b.innerHTML.indexOf(a)}},not:function(b,a){var c=K(a)[0],d={el:1};"*"!=c.tag&&(d.tag=1);c.classes.length||(d.classes=1);var f=t(c,d);return function(a){return!f(a)}},"nth-child":function(b,
a){var c=parseInt;if("odd"==a)return ea;if("even"==a)return da;if(-1!=a.indexOf("n")){var d=a.split("n",2),f=d[0]?"-"==d[0]?-1:c(d[0]):1,e=d[1]?c(d[1]):0,h=0,r=-1;0<f?0>e?e=e%f&&f+e%f:0<e&&(e>=f&&(h=e-e%f),e%=f):0>f&&(f*=-1,0<e&&(r=e,e%=f));if(0<f)return function(a){a=I(a);return a>=h&&(0>r||a<=r)&&a%f==e};a=e}var q=c(a);return function(a){return I(a)==q}}},fa=9>m("ie")||9==m("ie")&&m("quirks")?function(b){var a=b.toLowerCase();"class"==a&&(b="className");return function(c){return u?c.getAttribute(b):
c[b]||c[a]}}:function(b){return function(a){return a&&a.getAttribute&&a.hasAttribute(b)}},t=function(b,a){if(!b)return A;a=a||{};var c=null;"el"in a||(c=v(c,G));"tag"in a||"*"!=b.tag&&(c=v(c,function(a){return a&&(u?a.tagName:a.tagName.toUpperCase())==b.getTag()}));"classes"in a||J(b.classes,function(a,b,e){var h=new RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=v(c,function(a){return h.test(a.className)});c.count=b});"pseudos"in a||J(b.pseudos,function(a){var b=a.name;T[b]&&(c=v(c,T[b](b,a.value)))});"attrs"in
a||J(b.attrs,function(a){var b,e=a.attr;a.type&&Q[a.type]?b=Q[a.type](e,a.matchFor):e.length&&(b=fa(e));b&&(c=v(c,b))});"id"in a||b.id&&(c=v(c,function(a){return!!a&&a.id==b.id}));c||"default"in a||(c=A);return c},ga=function(b){return function(a,c,d){for(;a=a[D];)if(!H||G(a)){d&&!y(a,d)||!b(a)||c.push(a);break}return c}},ha=function(b){return function(a,c,d){for(a=a[D];a;){if(E(a)){if(d&&!y(a,d))break;b(a)&&c.push(a)}a=a[D]}return c}},ia=function(b){b=b||A;return function(a,c,d){for(var f=0,e=a.children||
a.childNodes;a=e[f++];)E(a)&&(!d||y(a,d))&&b(a,f)&&c.push(a);return c}},U={},V=function(b){var a=U[b.query];if(a)return a;var c=b.infixOper,c=c?c.oper:"",d=t(b,{el:1}),f="*"==b.tag,e=z.doc.getElementsByClassName;if(c)e={el:1},f&&(e.tag=1),d=t(b,e),"+"==c?a=ga(d):"~"==c?a=ha(d):"\x3e"==c&&(a=ia(d));else if(b.id)d=!b.loops&&f?A:t(b,{el:1,id:1}),a=function(a,c){var f=M.byId(b.id,a.ownerDocument||a);if(f&&d(f)){if(9==a.nodeType)return w(f,c);for(var e=f.parentNode;e&&e!=a;)e=e.parentNode;if(e)return w(f,
c)}};else if(e&&/\{\s*\[native code\]\s*\}/.test(String(e))&&b.classes.length&&!P)var d=t(b,{el:1,classes:1,id:1}),h=b.classes.join(" "),a=function(a,b,c){b=w(0,b);for(var f,e=0,l=a.getElementsByClassName(h);f=l[e++];)d(f,a)&&y(f,c)&&b.push(f);return b};else f||b.loops?(d=t(b,{el:1,tag:1,id:1}),a=function(a,c,f){c=w(0,c);for(var e,h=0,l=(e=b.getTag())?a.getElementsByTagName(e):[];e=l[h++];)d(e,a)&&y(e,f)&&c.push(e);return c}):a=function(a,c,d){c=w(0,c);for(var f=0,e=b.getTag(),e=e?a.getElementsByTagName(e):
[];a=e[f++];)y(a,d)&&c.push(a);return c};return U[b.query]=a},W={},X={},Y=function(b){var a=K(O(b));if(1==a.length){var c=V(a[0]);return function(a){if(a=c(a,[]))a.nozip=!0;return a}}return function(b){b=w(b);for(var c,e,h=a.length,r,q,m=0;m<h;m++){q=[];c=a[m];e=b.length-1;0<e&&(r={},q.nozip=!0);e=V(c);for(var p=0;c=b[p];p++)e(c,q,r);if(!q.length)break;b=q}return q}},ja=m("ie")?"commentStrip":"nozip",Z=!!z.doc.querySelectorAll,ka=/\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g,la=function(b,a,c,d){return c?
(a?a+" ":"")+c+(d?" "+d:""):b},ma=/([^[]*)([^\]]*])?/g,na=function(b,a,c){return a.replace(ka,la)+(c||"")},aa=function(b,a){b=b.replace(ma,na);if(Z){var c=X[b];if(c&&!a)return c}if(c=W[b])return c;var c=b.charAt(0),d=-1==b.indexOf(" ");0<=b.indexOf("#")&&d&&(a=!0);if(!Z||a||-1!="\x3e~+".indexOf(c)||m("ie")&&-1!=b.indexOf(":")||P&&0<=b.indexOf(".")||-1!=b.indexOf(":contains")||-1!=b.indexOf(":checked")||-1!=b.indexOf("|\x3d")){var f=b.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);return W[b]=
2>f.length?Y(b):function(a){for(var b=0,c=[],d;d=f[b++];)c=c.concat(Y(d)(a));return c}}var e=0<="\x3e~+".indexOf(b.charAt(b.length-1))?b+" *":b;return X[b]=function(a){try{if(9!=a.nodeType&&!d)throw"";var c=a.querySelectorAll(e);c[ja]=!0;return c}catch(f){return aa(b,!0)(a)}}},p=0,oa=m("ie")?function(b){return u?b.getAttribute("_uid")||b.setAttribute("_uid",++p)||p:b.uniqueID}:function(b){return b._uid||(b._uid=++p)},y=function(b,a){if(!a)return 1;var c=oa(b);return a[c]?0:a[c]=1},pa=function(b){if(b&&
b.nozip)return b;if(!b||!b.length)return[];if(2>b.length)return[b[0]];var a=[];p++;var c,d;if(m("ie")&&u){var f=p+"";for(c=0;c<b.length;c++)(d=b[c])&&d.getAttribute("_zipIdx")!=f&&(a.push(d),d.setAttribute("_zipIdx",f))}else if(m("ie")&&b.commentStrip)try{for(c=0;c<b.length;c++)(d=b[c])&&G(d)&&a.push(d)}catch(e){}else for(c=0;c<b.length;c++)(d=b[c])&&d._zipIdx!=p&&(a.push(d),d._zipIdx=p);return a},L=function(b,a){a=a||z.doc;u="div"===(a.ownerDocument||a).createElement("div").tagName;var c=aa(b)(a);
return c&&c.nozip?c:pa(c)};L.filter=function(b,a,c){for(var d=[],f=K(a),f=1!=f.length||/[^\w#\.]/.test(a)?function(b){return-1!=N.indexOf(L(a,M.byId(c)),b)}:t(f[0]),e=0,h;h=b[e];e++)f(h)&&d.push(h);return d};return L});