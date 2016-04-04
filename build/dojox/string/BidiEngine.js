//>>built
define("dojox/string/BidiEngine",["dojo/_base/lang","dojo/_base/declare"],function(za,Aa){function F(a,b,c,d){void 0==b&&(b=k.defInFormat);void 0==c&&(c=k.defOutFormat);void 0==d&&(d=k.defSwap);if(b==c)return a;var e,f=b.substring(0,1),l=b.substring(1,4),h=c.substring(0,1),g=c.substring(1,4);"C"==l.charAt(0)&&(e=N(a),l="ltr"==e||"rtl"==e?e.toUpperCase():"L"==b.charAt(2)?"LTR":"RTL",b=f+l);if("C"==g.charAt(0)){e=N(a);if("rtl"==e)g="RTL";else if("ltr"==e){a:{c=a;e=null;for(g=c.length-1;0<=g;g--){e=
W(c.charAt(g));if(e==y||e==C){e="rtl";break a}if(e==I){e="ltr";break a}if(e==z)break}e=""}g=e.toUpperCase()}else g="L"==c.charAt(2)?"LTR":"RTL";c=h+g}if(b==c)return a;k.inFormat=b;k.outFormat=c;k.swap=d;if("L"==f&&"VLTR"==c){if("LTR"==l)return k.dir=G,B(a);if("RTL"==l)return k.dir=J,B(a)}if("V"==f&&"V"==h)return O(a);if("L"==f&&"VRTL"==c)return k.dir="LTR"==l?G:J,a=B(a),O(a);if("VLTR"==b&&"LLTR"==c)return k.dir=G,B(a);if("V"==f&&"L"==h&&l!=g)return a=O(a),"RTL"==l?F(a,"LLTR","VLTR",d):F(a,"LRTL",
"VRTL",d);if("VRTL"==b&&"LRTL"==c)return F(a,"LRTL","VRTL",d);if("L"==f&&"L"==h)return b=k.swap,k.swap=b.substr(0,1)+"N","RTL"==l?(k.dir=J,a=B(a),k.swap="N"+b.substr(1,2),k.dir=G,a=B(a)):(k.dir=G,a=B(a),k.swap="N"+b.substr(1,2),a=F(a,"VLTR","LRTL",k.swap)),a}function N(a){for(var b=null,c=b=null,d=0;d<a.length;d++){b=a.charAt(d).charCodeAt(0);c=P[b>>8];b=c<u?c:Q[c-u][b&255];if(b==y||b==C)return"rtl";if(b==I)return"ltr";if(b==z)break}return""}function B(a){a=a.split("");var b=[],c=a.length,d=k.dir?
Ba:Ca,e=null,f=null,e=null,f=0,l=null,l=null,g=-1,h=l=null,m=[],q=[];k.hiLevel=k.dir;k.lastArabic=!1;k.hasUBAT_AL=!1;k.hasUBAT_B=!1;k.hasUBAT_S=!1;for(l=0;l<c;l++)m[l]=W(a[l]);for(h=0;h<c;h++){e=f;q[h]=f=Da(a,m,q,h);f=d[e][f];l=f&240;f&=15;b[h]=e=d[f][Ea];if(0<l){if(16==l)for(l=g;l<h;l++)b[l]=1;g=-1}if(l=d[f][Fa])-1==g&&(g=h);else if(-1<g){for(l=g;l<h;l++)b[l]=e;g=-1}m[h]==z&&(b[h]=0);k.hiLevel|=e}if(k.hasUBAT_S)for(l=0;l<c;l++)if(m[l]==R)for(b[l]=k.dir,d=l-1;0<=d;d--)if(m[d]==S)b[d]=k.dir;else break;
if(0!=k.hiLevel&&k.swap.substr(0,1)!=k.swap.substr(1,2))for(c=0;c<a.length;c++)if(1==b[c]){m=c;b:for(d=a[c],g=void 0,h=0,q=K.length-1;h<=q;)if(g=Math.floor((h+q)/2),d<K[g][0])q=g-1;else if(d>K[g][0])h=g+1;else{d=K[g][1];break b}a[m]=d}X(2,a,b);X(1,a,b);return a.join("")}function W(a){a=a.charCodeAt(0);var b=P[a>>8];return b<u?b:Q[b-u][a&255]}function O(a){a=a.split("");a.reverse();return a.join("")}function Y(a){for(var b=0;b<Z.length;b++)if(a>=Z[b]&&a<=Ga[b])return!0;return!1}function aa(a,b,c,d){for(;b*
c<d&&H(a[b]);)b+=c;return b*c<d&&Y(a[b])?!0:!1}function X(a,b,c){if(!(k.hiLevel<a))if(1!=a||k.dir!=J||k.hasUBAT_B)for(var d=b.length,e=0,f,g,h;e<d;){if(c[e]>=a){for(f=e+1;f<d&&c[f]>=a;)f++;for(g=f-1;e<g;e++,g--)h=b[e],b[e]=b[g],b[g]=h;e=f}e++}else b.reverse()}function Da(a,b,c,d){var e=b[d],f,g;switch(e){case I:case y:k.lastArabic=!1;case x:case D:return e;case v:return k.lastArabic?D:v;case C:return k.lastArabic=!0,k.hasUBAT_AL=!0,y;case S:return x;case ba:if(1>d||d+1>=b.length||(f=c[d-1])!=v&&f!=
D||(g=b[d+1])!=v&&g!=D)return x;k.lastArabic&&(g=D);return g==f?g:x;case ca:return f=0<d?c[d-1]:z,f==v&&d+1<b.length&&b[d+1]==v?v:x;case T:if(0<d&&c[d-1]==v)return v;if(k.lastArabic)return x;f=d+1;for(e=b.length;f<e&&b[f]==T;)f++;return f<e&&b[f]==v?v:x;case U:if("VLTR"==k.inFormat){e=b.length;for(f=d+1;f<e&&b[f]==U;)f++;if(f<e&&(a=a[d],f=b[f],(1425<=a&&2303>=a||64286==a)&&(f==y||f==C)))return y}return 1>d||b[d-1]==z?x:c[d-1];case z:return lastArabic=!1,k.hasUBAT_B=!0,k.dir;case R:return k.hasUBAT_S=
!0,x;case da:case ea:case fa:case ga:case ha:lastArabic=!1;case ia:return x}}function V(a,b){for(var c=0;c<L.length;c++)if(a==L[c])return b[c];return a}function H(a){return"\u064b"<=a&&"\u0655">=a?!0:!1}function ja(a){if("L"==a)return"LTR";if("R"==a)return"RTL";if("C"==a)return"CLR";if("D"==a)return"CRL"}function ka(a,b){for(var c=0;c<E.length;c++)if(a==E[c])return b[c];return a}za.getObject("string",!0,dojox);var Oa=Aa("dojox.string.BidiEngine",null,{bidiTransform:function(a,b,c){if(!a)return"";
if(!b&&!c)return a;var d=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/;if(!d.test(b)||!d.test(c))throw Error("dojox.string.BidiEngine: the bidi layout string is wrong!");if(b==c)return a;var d=ja(b.charAt(1)),e=ja(c.charAt(1)),f="I"==b.charAt(0)?"L":b.charAt(0),g="I"==c.charAt(0)?"L":c.charAt(0),h=f+d,p=g+e,m=b.charAt(2)+c.charAt(2);h&&(k.defInFormat=h);p&&(k.defOutFormat=p);m&&(k.defSwap=m);d=F(a,f+d,g+e,b.charAt(2)+c.charAt(2));a=!1;if("R"==c.charAt(1))a=!0;else if("C"==c.charAt(1)||"D"==c.charAt(1))a=
this.checkContextual(d);if(b.charAt(3)==c.charAt(3))return d;if("S"==c.charAt(3)){c=d;b=!0;if(0==c.length)b=void 0;else{void 0==a&&(a=!0);void 0==b&&(b=!0);c=new String(c);c=c.split("");g=0;d=1;e=c.length;a||(g=c.length-1,d=-1,e=1);h=0;a=[];for(f=0;g*d<e;g+=d)if(Y(c[g])||H(c[g])){if(p="\u0644"==c[g])b:{for(var m=c,q=g+d,n=d,r=e;q*n<r&&H(m[q]);)q+=n;p=" ";if(q*n<r)for(p=m[q],m=0;m<E.length;m++)if(E[m]==p){p=!0;break b}p=!1}if(p){c[g]=0==h?ka(c[g+d],Ha):ka(c[g+d],Ia);g+=d;h=c;p=g;m=d;for(q=e;p*m<q&&
H(h[p]);)p+=m;p*m<q&&(h[p]=" ");b&&(a[f]=g,f++);h=0}else{p=c[g];if(1==h){m=g;if(aa(c,g+d,d,e))b:for(q=c[g],n=0;n<L.length;n++){if(q==L[n]){q=Ja[n];break b}}else q=V(c[g],Ka);c[m]=q}else 1==aa(c,g+d,d,e)?c[g]=V(c[g],La):c[g]=V(c[g],Ma);H(p)||(h=1);b:{for(m=0;m<la.length;m++)if(la[m]==p){p=!0;break b}p=!1}1==p&&(h=0)}}else h=0;d="";for(idx=0;idx<c.length;idx++){if(e=b){b:{for(e=0;e<a.length;e++)if(a[e]==idx)break b;e=-1}e=-1<e}e||(d+=c[idx])}b=d}return b}if("N"==c.charAt(3)){b=a;f=!0;if(0==d.length)b=
void 0;else{void 0==f&&(f=!0);void 0==b&&(b=!0);d=new String(d);c="";e=[];a="";if(f)for(e=0;e<d.length;e++){if(" "==d.charAt(e))if(b){if(0<e&&"\ufef5"<=d.charAt(e-1)&&"\ufefc">=d.charAt(e-1))continue}else if(e+1<d.length&&"\ufef5"<=d.charAt(e+1)&&"\ufefc">=d.charAt(e+1))continue;a+=d.charAt(e)}else a=new String(d);e=a.split("");for(d=0;d<a.length;d++)"\ufe70"<=e[d]&&"\ufeff">e[d]?(f=a.charCodeAt(d),"\ufef5"<=e[d]&&"\ufefc">=e[d]?b?(c+="\u0644",c+=E[parseInt((f-65269)/2)]):(c+=E[parseInt((f-65269)/
2)],c+="\u0644"):c+=Na[f-65136]):c+=e[d];b=c}return b}},checkContextual:function(a){a=N(a);"ltr"!=a&&"rtl"!=a&&(a=document.dir.toLowerCase(),"ltr"!=a&&"rtl"!=a&&(a="ltr"));return a},hasBidiChar:function(a){for(var b=null,c=b=null,d=0;d<a.length;d++){b=a.charAt(d).charCodeAt(0);c=P[b>>8];b=c<u?c:Q[c-u][b&255];if(b==y||b==C)return!0;if(b==z)break}return!1}}),k={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUBAT_AL:!1,
hasBlockSep:!1,hasSegSep:!1},Ea=5,Fa=6,G=0,J=1,K=[["(",")"],[")","("],["\x3c","\x3e"],["\x3e","\x3c"],["[","]"],["]","["],["{","}"],["}","{"],["\u00ab","\u00bb"],["\u00bb","\u00ab"],["\u2039","\u203a"],["\u203a","\u2039"],["\u207d","\u207e"],["\u207e","\u207d"],["\u208d","\u208e"],["\u208e","\u208d"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232a"],["\u232a","\u2329"],["\ufe59","\ufe5a"],["\ufe5a","\ufe59"],["\ufe5b","\ufe5c"],["\ufe5c","\ufe5b"],["\ufe5d","\ufe5e"],["\ufe5e","\ufe5d"],
["\ufe64","\ufe65"],["\ufe65","\ufe64"]],E=["\u0622","\u0623","\u0625","\u0627"],Ha=["\ufef5","\ufef7","\ufef9","\ufefb"],Ia=["\ufef6","\ufef8","\ufefa","\ufefc"],L="\u0627\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a\u0625\u0623\u0622\u0629\u0649\u06cc\u0626\u0624\u064b\u064c\u064d\u064e\u064f\u0650\u0651\u0652\u0621".split(""),Ma="\ufe8d\ufe8f\ufe95\ufe99\ufe9d\ufea1\ufea5\ufea9\ufeab\ufead\ufeaf\ufeb1\ufeb5\ufeb9\ufebd\ufec1\ufec5\ufec9\ufecd\ufed1\ufed5\ufed9\ufedd\ufee1\ufee5\ufee9\ufeed\ufef1\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfc\ufe89\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80".split(""),
Ka="\ufe8e\ufe90\ufe96\ufe9a\ufe9e\ufea2\ufea6\ufeaa\ufeac\ufeae\ufeb0\ufeb2\ufeb6\ufeba\ufebe\ufec2\ufec6\ufeca\ufece\ufed2\ufed6\ufeda\ufede\ufee2\ufee6\ufeea\ufeee\ufef2\ufe88\ufe84\ufe82\ufe94\ufef0\ufbfd\ufe8a\ufe86\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80".split(""),Ja="\ufe8e\ufe92\ufe98\ufe9c\ufea0\ufea4\ufea8\ufeaa\ufeac\ufeae\ufeb0\ufeb4\ufeb8\ufebc\ufec0\ufec4\ufec8\ufecc\ufed0\ufed4\ufed8\ufedc\ufee0\ufee4\ufee8\ufeec\ufeee\ufef4\ufe88\ufe84\ufe82\ufe94\ufef0\ufbff\ufe8c\ufe86\ufe71\ufe72\ufe74\ufe77\ufe79\ufe7b\ufe7d\ufe7f\ufe80".split(""),
La="\ufe8d\ufe91\ufe97\ufe9b\ufe9f\ufea3\ufea7\ufea9\ufeab\ufead\ufeaf\ufeb3\ufeb7\ufebb\ufebf\ufec3\ufec7\ufecb\ufecf\ufed3\ufed7\ufedb\ufedf\ufee3\ufee7\ufeeb\ufeed\ufef3\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfe\ufe8b\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80".split(""),la="\u0621\u0627\u062f\u0630\u0631\u0632\u0648\u0622\u0629\u0626\u0624\u0625\u0675\u0623".split(""),Na="\u064b\u064b\u064c\u061f\u064d\u061f\u064e\u064e\u064f\u064f\u0650\u0650\u0651\u0651\u0652\u0652\u0621\u0622\u0622\u0623\u0623\u0624\u0624\u0625\u0625\u0626\u0626\u0626\u0626\u0627\u0627\u0628\u0628\u0628\u0628\u0629\u0629\u062a\u062a\u062a\u062a\u062b\u062b\u062b\u062b\u062c\u062c\u062c\u062c\u062d\u062d\u062d\u062d\u062e\u062e\u062e\u062e\u062f\u062f\u0630\u0630\u0631\u0631\u0632\u0632\u0633\u0633\u0633\u0633\u0634\u0634\u0634\u0634\u0635\u0635\u0635\u0635\u0636\u0636\u0636\u0636\u0637\u0637\u0637\u0637\u0638\u0638\u0638\u0638\u0639\u0639\u0639\u0639\u063a\u063a\u063a\u063a\u0641\u0641\u0641\u0641\u0642\u0642\u0642\u0642\u0643\u0643\u0643\u0643\u0644\u0644\u0644\u0644\u0645\u0645\u0645\u0645\u0646\u0646\u0646\u0646\u0647\u0647\u0647\u0647\u0648\u0648\u0649\u0649\u064a\u064a\u064a\u064a\ufef5\ufef6\ufef7\ufef8\ufef9\ufefa\ufefb\ufefc\u061f\u061f\u061f".split(""),
Z=["\u0621","\u0641"],Ga=["\u063a","\u064a"],Ca=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],Ba=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],I=0,y=1,v=2,D=3,x=4,z=5,R=6,C=7,S=8,ba=9,ca=10,T=11,U=12,da=13,ea=14,ha=15,fa=16,ga=17,ia=18,u=100,ma=u+0,na=u+1,oa=u+2,pa=u+3,qa=u+4,ra=u+5,sa=u+6,ta=u+7,c=I,e=y,g=v,n=D,a=x,A=z,M=R,b=C,r=S,t=ba,w=ca,h=T,d=U,ua=da,va=ea,wa=ha,xa=fa,ya=ga,f=ia,P=[ma,c,c,c,c,na,oa,pa,e,c,c,c,c,c,c,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,qa,a,a,a,c,a,c,a,c,a,a,a,c,c,a,a,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,c,c,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,ra,b,b,sa,ta];delete ma;delete na;
delete oa;delete pa;delete qa;delete ra;delete sa;delete ta;var Q=[[f,f,f,f,f,f,f,f,f,M,A,M,r,A,f,f,f,f,f,f,f,f,f,f,f,f,f,f,A,A,A,M,r,a,a,h,h,h,a,a,a,a,a,w,t,w,t,t,g,g,g,g,g,g,g,g,g,g,t,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,f,f,f,f,f,f,A,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,t,a,h,h,h,h,a,a,a,a,c,a,a,f,a,a,h,h,g,g,a,c,a,a,a,g,c,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e,d,e,d,d,e,d,d,e,d,a,a,a,a,a,a,a,a,e,e,e,
e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,a,a,a,a,a,e,e,e,e,e,a,a,a,a,a,a,a,a,a,a,a],[n,n,n,n,a,a,a,a,b,h,h,b,t,b,a,a,d,d,d,d,d,d,d,d,d,d,d,b,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,n,n,n,n,n,n,n,n,n,n,h,n,n,b,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,n,a,d,d,d,d,d,d,b,b,d,d,a,d,d,d,d,b,b,g,g,g,g,g,g,g,g,g,g,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,e,e,e,e,e,e,e,
e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,d,d,d,d,d,d,d,d,d,e,e,a,a,a,a,e,a,a,a,a,a],[r,r,r,r,r,r,r,r,r,r,r,f,f,f,c,e,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,r,A,ua,va,wa,xa,ya,t,h,h,h,h,h,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,t,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,r,f,f,f,f,f,a,a,a,a,a,f,f,f,f,f,f,g,c,a,a,g,g,g,g,g,g,w,w,a,a,a,c,g,g,g,g,g,g,g,g,g,g,w,w,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,a,a,a,a,
a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,a,a,a,a,a,e,d,e,e,e,e,e,e,e,e,e,e,w,e,e,e,e,e,e,e,e,e,e,e,e,e,a,e,e,e,e,e,a,e,a,e,e,a,e,e,a,e,e,e,e,e,e,e,e,e,e,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,t,a,t,a,a,t,a,a,a,a,a,a,a,a,a,h,a,a,w,w,a,a,a,a,a,h,h,a,a,a,a,a,b,b,b,b,b,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,a,f],[a,a,a,h,h,h,a,a,a,a,a,w,t,w,t,t,g,g,g,g,g,g,g,g,g,g,t,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,a,a,a,h,h,a,a,a,h,h,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a]];delete c;delete e;delete g;delete n;delete a;delete A;delete M;delete b;delete r;delete t;delete w;delete h;delete d;delete ua;delete va;delete wa;delete xa;delete ya;delete f;return Oa});