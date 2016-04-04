//>>built
define("esri/layers/unitBezier",[],function(){var a=function(a,c,g,n){function q(a,d){var f,e,b,c,g;d=null==d?1E-6:d;b=a;for(g=0;8>g;g++){if(c=((l*b+k)*b+h)*b-a,Math.abs(c)<d)return b;if(e=(3*l*b+2*k)*b+h,1E-6>Math.abs(e))break;b-=c/e}if(f=0,e=1,b=a,f>b)return f;if(b>e)return e;for(;e>f&&!(c=((l*b+k)*b+h)*b,Math.abs(c-a)<d);)a>c?f=b:e=b,b=.5*(e-f)+f;return b}var h=3*a,k=3*(g-a)-h,l=1-h-k,m=3*c,p=3*(n-c)-m,r=1-m-p;return function(a,d){var c=q(a,d);return((r*c+p)*c+m)*c}},n=/^cubic-bezier\((.*)\)/;
return a.parse=function(d){var c=a[d]||null;!c&&(d=n.exec(d))&&(d=d[1].split(",").map(function(a){return parseFloat(a.trim())}),4!==d.length||d.some(function(a){return isNaN(a)})||(c=a.apply(a,d)));return c},a.ease=a(.25,.1,.25,1),a.linear=a(0,0,1,1),a.easeIn=a["ease-in"]=a(.42,0,1,1),a.easeOut=a["ease-out"]=a(0,0,.58,1),a.easeInOut=a["ease-in-out"]=a(.42,0,.58,1),a});