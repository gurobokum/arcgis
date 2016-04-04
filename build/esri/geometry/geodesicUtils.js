//>>built
define("esri/geometry/geodesicUtils","dojo/_base/array dojo/_base/lang dojo/has ../kernel ../SpatialReference ./Point ./Polyline ./Polygon".split(" "),function(u,G,K,L,M,z,D,H){function A(a){var h=Math.PI/180,b=Math.sin(a.y*h),b=.9933056200098026*(b/(1-.006694379990197414*b*b)-6.111035746609262*Math.log((1-.0818191908429643*b)/(1+.0818191908429643*b)));return new z(6378137*a.x*h,3189068.5*b)}function C(a,h,b,e){var d,c,l,f,g=1/298.257223563,w=Math.sin(b);b=Math.cos(b);a=(1-g)*Math.tan(a);var q=1/
Math.sqrt(1+a*a),t=a*q,p=Math.atan2(a,b);a=q*w*q*w;for(var m=1-a,k=2.7233160610754688E11*m/4.040829998466145E13,B=1+k/16384*(4096+k*(-768+k*(320-175*k))),n=k/1024*(256+k*(-128+k*(74-47*k))),k=e/(6356752.31424518*B),r=2*Math.PI;1E-12<Math.abs(k-r);)l=Math.cos(2*p+k),d=Math.sin(k),c=Math.cos(k),f=n*d*(l+n/4*(c*(-1+2*l*l)-n/6*l*(-3+4*d*d)*(-3+4*l*l))),r=k,k=e/(6356752.31424518*B)+f;e=t*d-q*c*b;e=Math.atan2(t*c+q*d*b,(1-g)*Math.sqrt(a+e*e));w=Math.atan2(d*w,q*c-t*d*b);b=g/16*m*(4+g*(4-3*m));d=w-(1-b)*
g*Math.sqrt(a)*(k+b*d*(l+b*c*(-1+2*l*l)));return new z((h+d)/(Math.PI/180),e/(Math.PI/180),new M({wkid:4326}))}function E(a,h,b,e){var d,c,l,f,g,w,q,t,p,m,k=1/298.257223563,B=e-h,n=Math.atan((1-k)*Math.tan(a)),r=Math.atan((1-k)*Math.tan(b)),v=Math.sin(n),n=Math.cos(n),x=Math.sin(r),r=Math.cos(r),y=B,u=1E3;do{if(q=Math.sin(y),t=Math.cos(y),l=Math.sqrt(r*q*r*q+(n*x-v*r*t)*(n*x-v*r*t)),0===l)return 0;g=v*x+n*r*t;w=Math.atan2(l,g);p=n*r*q/l;c=1-p*p;f=g-2*v*x/c;isNaN(f)&&(f=0);m=k/16*c*(4+k*(4-3*c));d=
y;y=B+(1-m)*k*p*(w+m*l*(f+m*g*(-1+2*f*f)))}while(1E-12<Math.abs(y-d)&&0<--u);if(0===u)return v=6371009*Math.acos(Math.sin(a)*Math.sin(b)+Math.cos(a)*Math.cos(b)*Math.cos(e-h)),x=e-h,n=Math.sin(x)*Math.cos(b),a=Math.cos(a)*Math.sin(b)-Math.sin(a)*Math.cos(b)*Math.cos(x),{azimuth:Math.atan2(n,a),geodesicDistance:v};a=2.7233160610754688E11*c/4.040829998466145E13;b=a/1024*(256+a*(-128+a*(74-47*a)));a=6356752.31424518*(1+a/16384*(4096+a*(-768+a*(320-175*a))))*(w-b*l*(f+b/4*(g*(-1+2*f*f)-b/6*f*(-3+4*l*
l)*(-3+4*f*f))));b=Math.atan2(r*Math.sin(y),n*x-v*r*Math.cos(y));v=Math.atan2(n*Math.sin(y),n*x*Math.cos(y)-v*r);return{azimuth:b,geodesicDistance:a,reverseAzimuth:v}}function I(a,h){var b=Math.PI/180;if(637.100877151506>h&&(h=637.100877151506),!(a instanceof D||a instanceof H))throw console.error("_geodesicDensify: the input geometry is neither polyline nor polygon"),Error("_geodesicDensify: the input geometry is neither polyline nor polygon");var e,d=a instanceof D,c=[];return u.forEach(d?a.paths:
a.rings,function(a){c.push(e=[]);e.push([a[0][0],a[0][1]]);var f,g,d,q,t,p;f=a[0][0]*b;g=a[0][1]*b;for(t=0;t<a.length-1;t++)if(d=a[t+1][0]*b,q=a[t+1][1]*b,f!==d||g!==q){var m=E(g,f,q,d),k=m.azimuth,m=m.geodesicDistance,u=m/h;if(1<u){for(p=1;u-1>=p;p++){var n=C(g,f,k,p*h);e.push([n.x,n.y])}p=C(g,f,k,(m+Math.floor(u-1)*h)/2);e.push([p.x,p.y])}g=C(g,f,k,m);e.push([g.x,g.y]);f=g.x*b;g=g.y*b}}),d?new D({paths:c,spatialReference:a.spatialReference}):new H({rings:c,spatialReference:a.spatialReference})}
var F={esriMiles:1,esriKilometers:1.609344,esriFeet:5280,esriMeters:1609.34,esriYards:1760,esriNauticalMiles:.869,esriCentimeters:160934,esriDecimeters:16093.4,esriInches:63360,esriMillimeters:1609340,esriAcres:1,esriAres:40.4685642,esriSquareKilometers:.00404685642,esriSquareMiles:.0015625,esriSquareFeet:43560,esriSquareMeters:4046.85642,esriHectares:.404685642,esriSquareYards:4840,esriSquareInches:6272640,esriSquareMillimeters:4046856420,esriSquareCentimeters:4.04685642E7,esriSquareDecimeters:404685.642},
J={geodesicDensify:I,geodesicLengths:function(a,h){var b=Math.PI/180,e=[];return u.forEach(a,function(a){var c=0;u.forEach(a.paths,function(a){var f,g,d,e,h,p,m=0;for(f=1;f<a.length;f++)g=a[f-1][0]*b,d=a[f][0]*b,e=a[f-1][1]*b,h=a[f][1]*b,(e!==h||g!==d)&&(p=E(e,g,h,d),m+=p.geodesicDistance/1609.344);c+=m});c*=F[h];e.push(c)}),e},geodesicAreas:function(a,h){var b=[];u.forEach(a,function(a){a=I(a,1E4);b.push(a)});var e,d,c=[];return u.forEach(b,function(a){var b=0;u.forEach(a.rings,function(a){e=A(new z(a[0][0],
a[0][1]));d=A(new z(a[a.length-1][0],a[a.length-1][1]));var c,h=d.x*e.y-e.x*d.y;for(c=0;c<a.length-1;c++)e=A(new z(a[c+1][0],a[c+1][1])),d=A(new z(a[c][0],a[c][1])),h+=d.x*e.y-e.x*d.y;b+=h/4046.87});b*=F[h];c.push(b/-2)}),c},_unitsDictionary:F,_toEqualAreaPoint:A,_directGeodeticSolver:C,_inverseGeodeticSolver:E};return K("extend-esri")&&G.mixin(G.getObject("geometry",!0,L),J),J});