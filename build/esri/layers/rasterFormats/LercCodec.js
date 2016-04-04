//>>built
define("esri/layers/rasterFormats/LercCodec",[],function(){var K={defaultNoDataValue:-3.4027999387901484E38,decode:function(f,q){var A;q=q||{};var a;a=q.inputOffset||0;var k=q.encodedMaskData||null===q.encodedMaskData,b={},h=new Uint8Array(f,a,10);if(b.fileIdentifierString=String.fromCharCode.apply(null,h),"CntZImage"!=b.fileIdentifierString.trim())throw"Unexpected file identifier string: "+b.fileIdentifierString;a+=10;var c=new DataView(f,a,24);if(b.fileVersion=c.getInt32(0,!0),b.imageType=c.getInt32(4,
!0),b.height=c.getUint32(8,!0),b.width=c.getUint32(12,!0),b.maxZError=c.getFloat64(16,!0),a+=24,!k)if(c=new DataView(f,a,16),b.mask={},b.mask.numBlocksY=c.getUint32(0,!0),b.mask.numBlocksX=c.getUint32(4,!0),b.mask.numBytes=c.getUint32(8,!0),b.mask.maxValue=c.getFloat32(12,!0),a+=16,0<b.mask.numBytes){var k=new Uint8Array(Math.ceil(b.width*b.height/8)),c=new DataView(f,a,b.mask.numBytes),h=c.getInt16(0,!0),l=2,y=0;do{if(0<h)for(;h--;)k[y++]=c.getUint8(l++);else for(var z=c.getUint8(l++),h=-h;h--;)k[y++]=
z;h=c.getInt16(l,!0);l+=2}while(l<b.mask.numBytes);if(-32768!==h||y<k.length)throw"Unexpected end of mask RLE encoding";b.mask.bitset=k;a+=b.mask.numBytes}else 0==(b.mask.numBytes|b.mask.numBlocksY|b.mask.maxValue)&&(k=new Uint8Array(Math.ceil(b.width*b.height/8)),b.mask.bitset=k);c=new DataView(f,a,16);b.pixels={};b.pixels.numBlocksY=c.getUint32(0,!0);b.pixels.numBlocksX=c.getUint32(4,!0);b.pixels.numBytes=c.getUint32(8,!0);b.pixels.maxValue=c.getFloat32(12,!0);a+=16;k=b.pixels.numBlocksX;h=b.pixels.numBlocksY;
k+=0<b.width%k?1:0;h+=0<b.height%h?1:0;b.pixels.blocks=Array(k*h);l=1E9;for(z=y=0;h>z;z++)for(var B=0;k>B;B++){var d=0,c=new DataView(f,a,Math.min(10,f.byteLength-a)),g={};b.pixels.blocks[y++]=g;var e=c.getUint8(0);if(d++,g.encoding=63&e,3<g.encoding)throw"Invalid block encoding ("+g.encoding+")";if(2!==g.encoding){if(0!==e&&2!==e){if(e>>=6,g.offsetType=e,2===e)g.offset=c.getInt8(1),d++;else if(1===e)g.offset=c.getInt16(1,!0),d+=2;else{if(0!==e)throw"Invalid block offset type";g.offset=c.getFloat32(1,
!0);d+=4}if(l=Math.min(g.offset,l),1===g.encoding)if(e=c.getUint8(d),d++,g.bitsPerPixel=63&e,e>>=6,g.numValidPixelsType=e,2===e)g.numValidPixels=c.getUint8(d),d++;else if(1===e)g.numValidPixels=c.getUint16(d,!0),d+=2;else{if(0!==e)throw"Invalid valid pixel count type";g.numValidPixels=c.getUint32(d,!0);d+=4}}if(a+=d,3!=g.encoding)if(0===g.encoding){c=(b.pixels.numBytes-1)/4;if(c!==Math.floor(c))throw"uncompressed block has invalid length";d=new ArrayBuffer(4*c);e=new Uint8Array(d);e.set(new Uint8Array(f,
a,4*c));d=new Float32Array(d);for(e=0;e<d.length;e++)l=Math.min(l,d[e]);g.rawData=d;a+=4*c}else 1===g.encoding&&(c=Math.ceil(g.numValidPixels*g.bitsPerPixel/8),d=Math.ceil(c/4),d=new ArrayBuffer(4*d),e=new Uint8Array(d),e.set(new Uint8Array(f,a,c)),g.stuffedData=new Uint32Array(d),a+=c)}else a++,l=Math.min(l,0)}a=(b.pixels.minValue=l,b.eofOffset=a,b);var b=null!=q.noDataValue?q.noDataValue:K.defaultNoDataValue,h=q.encodedMaskData,d=q.returnMask,l=0,y=a.pixels.numBlocksX,z=a.pixels.numBlocksY,B=Math.floor(a.width/
y),g=Math.floor(a.height/z),c=2*a.maxZError,h=h||(a.mask?a.mask.bitset:null),t,k=new (q.pixelType||Float32Array)(a.width*a.height);d&&h&&(t=new Uint8Array(a.width*a.height));for(var u,v,d=new Float32Array(B*g),e=0;z>=e;e++){var G=e!==z?g:a.height%z;if(0!==G)for(var H=0;y>=H;H++){var E=H!==y?B:a.width%y;if(0!==E){var m,p,n=e*a.width*g+H*B,I=a.width-E,r=a.pixels.blocks[l];if(2>r.encoding){if(0===r.encoding)m=r.rawData;else{m=r.stuffedData;p=r.bitsPerPixel;u=r.numValidPixels;v=r.offset;var L=c,O=d,M=
a.pixels.maxValue,C=void 0,D=void 0,F=void 0,J=(1<<p)-1,N=0,w=0,P=Math.ceil((M-v)/L),C=4*m.length-Math.ceil(p*u/8);m[m.length-1]<<=8*C;for(C=0;u>C;C++)(0===w&&(F=m[N++],w=32),w>=p)?(D=F>>>w-p&J,w-=p):(w=p-w,D=(F&J)<<w&J,F=m[N++],w=32-w,D+=F>>>w),O[C]=P>D?v+D*L:M;m=d}p=0}else A=2===r.encoding?0:r.offset;var x;if(h)for(v=0;G>v;v++){7&n&&(x=h[n>>3],x<<=7&n);for(u=0;E>u;u++)7&n||(x=h[n>>3]),128&x?(t&&(t[n]=1),k[n++]=2>r.encoding?m[p++]:A):(t&&(t[n]=0),k[n++]=b),x<<=1;n+=I}else if(2>r.encoding)for(v=0;G>
v;v++){for(u=0;E>u;u++)k[n++]=m[p++];n+=I}else for(v=0;G>v;v++){for(u=0;E>u;u++)k[n++]=A;n+=I}if(1===r.encoding&&p!==r.numValidPixels)throw"Block and Mask do not match";l++}}}A=t;t={width:a.width,height:a.height,pixelData:k,minValue:a.pixels.minValue,maxValue:a.pixels.maxValue,noDataValue:b};A&&(t.maskData=A);q.returnEncodedMask&&a.mask&&(t.encodedMaskData=a.mask.bitset?a.mask.bitset:null);if(q.returnFileInfo&&(t.fileInfo=Q(a),q.computeUsedBitDepths)){A=t.fileInfo;x=a.pixels.numBlocksX*a.pixels.numBlocksY;
m={};for(p=0;x>p;p++)b=a.pixels.blocks[p],0===b.encoding?m.float32=!0:1===b.encoding?m[b.bitsPerPixel]=!0:m[0]=!0;x=Object.keys(m);A.bitDepths=x}return t}},Q=function(f){return{fileIdentifierString:f.fileIdentifierString,fileVersion:f.fileVersion,imageType:f.imageType,height:f.height,width:f.width,maxZError:f.maxZError,eofOffset:f.eofOffset,mask:f.mask?{numBlocksX:f.mask.numBlocksX,numBlocksY:f.mask.numBlocksY,numBytes:f.mask.numBytes,maxValue:f.mask.maxValue}:null,pixels:{numBlocksX:f.pixels.numBlocksX,
numBlocksY:f.pixels.numBlocksY,numBytes:f.pixels.numBytes,maxValue:f.pixels.maxValue,minValue:f.pixels.minValue,noDataValue:this.noDataValue}}};return K});