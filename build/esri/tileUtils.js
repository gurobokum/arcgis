//>>built
define("esri/tileUtils",["dojo/_base/array","dojo/has","./kernel","./geometry/Point","./geometry/Extent"],function(v,w,x,y,t){var u={_addFrameInfo:function(a,c){var b,f,d,l=2*c.origin[1],e=c.origin[0],m=a.origin.x,h=a.width;v.forEach(a.lods,function(a){b=Math.round(l/a.resolution);f=Math.ceil(b/h);d=Math.floor((e-m)/(h*a.resolution));a._frameInfo||(a._frameInfo=[f,d,d+f-1,b])})},getContainingTileCoords:function(a,c,b){var f=a.origin;b=b.resolution;return{row:Math.floor((f.y-c.y)/(a.height*b)),col:Math.floor((c.x-
f.x)/(a.width*b))}},getCandidateTileInfo:function(a,c,b){var f,d,l,e,m=a.width,h=a.height,g=b.xmax-b.xmin,n=b.ymax-b.ymin,k=a.__tileInfo===c;d=k?a.getMinZoom():-1;var k=k?a.getMaxZoom():-1,p=-1,q=c.lods,r=Math.abs,k=-1<k?k:q.length-1;for(d=-1<d?d:0;k>=d;d++)if(l=q[d]){if(e=r(g>n?n-h*l.resolution:g-m*l.resolution),!(0>p||p>=e))break;f=l;p=e}g=f.resolution;e=(b.xmin+b.xmax)/2;m=(b.ymin+b.ymax)/2;h=a.width/2*g;g*=a.height/2;e=new t(e-h,m-g,e+h,m+g,b.spatialReference);b=new y(e.xmin,e.ymax,b.spatialReference);
n=f.resolution;h=c.width;m=c.height;c=c.origin;a=a.__visibleDelta;g=Math.floor;p=h*n;q=m*n;n=g((c.y-b.y)/q);k=g((b.x-c.x)/p);r=c.y-n*q;c=g(Math.abs((b.x-(c.x+k*p))*h/p))+a.x;a=g(Math.abs((b.y-r)*m/q))+a.y;return{tile:{point:b,coords:{row:n,col:k},offsets:{x:c,y:a}},lod:f,extent:e}},getTileExtent:function(a,c,b,f){var d=a.origin;c=a.lods[c].resolution;var l=a.width,e=a.height;return new t(f*c*l+d.x,d.y-(b+1)*c*e,(f+1)*c*l+d.x,d.y-b*c*e,a.spatialReference)}};return w("extend-esri")&&(x.TileUtils=u),
u});