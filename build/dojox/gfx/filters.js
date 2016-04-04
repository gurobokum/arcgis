//>>built
define("dojox/gfx/filters",["dojo/_base/lang","dojo/_base/array"],function(d,e){var a={},g={x:"0%",y:"0%",width:"100%",height:"100%"},c={};a.createFilter=function(a,b){var c=d.mixin({},g,a);c.primitives||(c.primitives=[]);b&&Array.prototype.push.apply(c.primitives,b);return c};var h=function(a,b,c){b instanceof Array&&(c=b,b=null);b=d.mixin({},b);b.children=c;b.tag=a;return b};e.forEach("feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feFlood feGaussianBlur feImage feMorphology feOffset feSpecularLighting feTile feTurbulence feDistantLight fePointLight feSpotLight feMergeNode feFuncA feFuncR feFuncG feFuncB".split(" "),
function(b){a[b]=function(a,c){return h(b,a,c)}});a.feMerge=function(b,c){if("string"===typeof b){for(var d=[],e=0;e<arguments.length;++e)d.push(a.feMergeNode({"in":arguments[e]}));return h("feMerge",{},d)}return h("feMerge",b,c)};var b=a.createFilter;c.convolutions=[b({_gfxName:"boxBlur3"},[a.feConvolveMatrix({"in":"SourceGraphic",order:3,divisor:9,kernelMatrix:"1,1,1,1,1,1,1,1,1"})]),b({_gfxName:"boxBlur5"},[a.feConvolveMatrix({"in":"SourceGraphic",order:5,divisor:25,kernelMatrix:"1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1"})]),
b({_gfxName:"verticalEdges",filterUnits:"objectBoundingBox"},[a.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:1,kernelMatrix:"-1 0 1 -1 0 1 -1 0 1"}),a.feComponentTransfer({"in":"kernel"},[a.feFuncA({type:"table",tableValues:"1,1"})])]),b({_gfxName:"horizontalEdges",filterUnits:"objectBoundingBox"},[a.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:1,kernelMatrix:"1 1 1 0 0 0 -1 -1 -1"}),a.feComponentTransfer({"in":"kernel"},[a.feFuncA({type:"table",
tableValues:"1,1"})])]),b({_gfxName:"allEdges3",filterUnits:"objectBoundingBox"},[a.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:1,kernelMatrix:"-1 -1 -1 -1 8 -1 -1 -1 -1"}),a.feComponentTransfer({"in":"kernel"},[a.feFuncA({type:"table",tableValues:"1,1"})])]),b({_gfxName:"edgeEnhance",filterUnits:"objectBoundingBox"},[a.feConvolveMatrix({"in":"SourceGraphic",result:"kernel",order:3,divisor:-1,kernelMatrix:"0 1 0 1 -5 1 0 1 0"}),a.feComponentTransfer({"in":"kernel"},[a.feFuncA({type:"table",
tableValues:"1,1"})])])];e.forEach(c.convolutions,function(a){d.mixin(a,g)});c.shadows=[b({_gfxName:"fastSmallDropShadow"},[a.feColorMatrix({"in":"SourceAlpha",type:"matrix",result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,0.7,0"}),a.feOffset({dx:3,dy:3,result:"offsetBlur"}),a.feMerge("offsetBlur","SourceGraphic")]),b({_gfxName:"fastDropShadow"},[a.feColorMatrix({"in":"SourceAlpha",type:"matrix",result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,0.7,0"}),
a.feOffset({dx:5,dy:5,result:"offsetBlur"}),a.feMerge("offsetBlur","SourceGraphic")]),b({_gfxName:"fastDropShadowLight"},[a.feColorMatrix({"in":"SourceAlpha",type:"matrix",result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,0.4,0"}),a.feOffset({dx:5,dy:5,result:"offsetBlur"}),a.feMerge("offsetBlur","SourceGraphic")]),b({_gfxName:"dropShadow"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:4}),a.feOffset({dx:5,dy:5,result:"offsetBlur"}),a.feMerge("offsetBlur",
"SourceGraphic")]),b({_gfxName:"dropShadowLight"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:4,result:"blur"}),a.feComponentTransfer({"in":"blur",result:"lessblur"},[a.feFuncA({type:"linear",slope:.5})]),a.feOffset({"in":"lessblur",dx:5,dy:5,result:"offsetBlur"}),a.feMerge("offsetBlur","SourceGraphic")]),b({_gfxName:"smallDropShadow"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:3}),a.feOffset({dx:2,dy:2,result:"offsetBlur"}),a.feMerge("offsetBlur","SourceGraphic")]),b({_gfxName:"smallDropShadowLight"},
[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:3,result:"blur"}),a.feComponentTransfer({"in":"blur",result:"lessblur"},[a.feFuncA({type:"linear",slope:.5})]),a.feOffset({"in":"lessblur",dx:2,dy:2,result:"offsetBlur"}),a.feMerge("offsetBlur","SourceGraphic")])];var m={x:"-10%",y:"-10%",width:"125%",height:"125%"};e.forEach(c.shadows,function(a){d.mixin(a,m)});c.blurs=[b({_gfxName:"blur1",x:"-5%",y:"-5%",width:"110%",height:"110%"},[a.feGaussianBlur({"in":"SourceGraphic",stdDeviation:1})]),b({_gfxName:"blur2",
x:"-15%",y:"-15%",width:"130%",height:"130%"},[a.feGaussianBlur({"in":"SourceGraphic",stdDeviation:2})]),b({_gfxName:"blur4",x:"-15%",y:"-15%",width:"130%",height:"130%"},[a.feGaussianBlur({"in":"SourceGraphic",stdDeviation:4})]),b({_gfxName:"blur8",x:"-20%",y:"-20%",width:"140%",height:"140%"},[a.feGaussianBlur({"in":"SourceGraphic",stdDeviation:8})]),b({_gfxName:"glow",x:"-10%",y:"-10%",width:"120%",height:"120%"},[a.feGaussianBlur({"in":"SourceGraphic",stdDeviation:2}),a.feComponentTransfer([a.feFuncA({type:"linear",
slope:10})])])];c.colors=[b({_gfxName:"negate"},[a.feComponentTransfer([a.feFuncR({type:"table",tableValues:"1,0"}),a.feFuncG({type:"table",tableValues:"1,0"}),a.feFuncB({type:"table",tableValues:"1,0"})])]),b({_gfxName:"sepia"},[a.feColorMatrix({result:"grey",values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,1,0"}),a.feComponentTransfer({"in":"grey"},[a.feFuncR({type:"linear",slope:.5,intercept:.5}),a.feFuncB({type:"table",tableValues:"0,0"})])]),b({_gfxName:"grayscale"},
[a.feColorMatrix({values:"0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0.2125,0.7154,0.0721,0,0,0,0,0,1,0"})]),b({_gfxName:"showRed"},[a.feComponentTransfer([a.feFuncG({type:"table",tableValues:"0,0"}),a.feFuncB({type:"table",tableValues:"0,0"})])]),b({_gfxName:"showGreen"},[a.feComponentTransfer([a.feFuncR({type:"table",tableValues:"0,0"}),a.feFuncB({type:"table",tableValues:"0,0"})])]),b({_gfxName:"showBlue"},[a.feComponentTransfer([a.feFuncR({type:"table",tableValues:"0,0"}),a.feFuncG({type:"table",
tableValues:"0,0"})])]),b({_gfxName:"hueRotate60"},[a.feColorMatrix({type:"hueRotate",values:60})]),b({_gfxName:"hueRotate120"},[a.feColorMatrix({type:"hueRotate",values:120})]),b({_gfxName:"hueRotate180"},[a.feColorMatrix({type:"hueRotate",values:180})]),b({_gfxName:"hueRotate270"},[a.feColorMatrix({type:"hueRotate",values:270})])];e.forEach(c.colors,function(a){d.mixin(a,g)});c.miscs=[b({_gfxName:"thinEmbossDropShadow",x:"-5%",y:"-5%",width:"120%",height:"120%"},[a.feGaussianBlur({"in":"SourceAlpha",
stdDeviation:1,result:"blur"}),a.feOffset({"in":"blur",dx:6,dy:6,result:"offsetBlur"}),a.feSpecularLighting({"in":"blur",surfaceScale:8,specularConstant:1,specularExponent:12,result:"specOut"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",result:"litPaint",k1:0,k2:1,k3:1,k4:0}),a.feMerge("offsetBlur","litPaint")]),b({_gfxName:"embossDropShadow",
x:"-5%",y:"-5%",width:"120%",height:"120%"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"4",result:"blur"}),a.feOffset({"in":"blur",dx:4,dy:4,result:"offsetBlur"}),a.feSpecularLighting({"in":"blur",surfaceScale:5,specularConstant:.75,specularExponent:20,"lighting-color":"#bbbbbb",result:"specOut"},[a.fePointLight({x:-5E3,y:-1E4,z:2E4})]),a.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,
k2:1,k3:1,k4:0,result:"litPaint"}),a.feMerge("offsetBlur","litPaint")]),b({_gfxName:"largeEmbossDropShadow",x:"-20%",y:"-20%",width:"140%",height:"140%"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:5,result:"blur"}),a.feOffset({"in":"blur",dx:6,dy:6,result:"offsetBlur"}),a.feSpecularLighting({"in":"blur",surfaceScale:8,specularConstant:1,specularExponent:12,result:"spec"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"spec",in2:"SourceGraphic",operator:"in",result:"specOut"}),
a.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",result:"litPaint",k1:0,k2:1,k3:1,k4:0}),a.feMerge("offsetBlur","litPaint")]),b({_gfxName:"thinEmbossDropShadowLight",x:"-5%",y:"-5%",width:"120%",height:"120%"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:1,result:"blur"}),a.feComponentTransfer({"in":"blur",result:"lessblur"},[a.feFuncA({type:"linear",slope:"0.5"})]),a.feOffset({"in":"lessblur",dx:"6",dy:"6",result:"offsetBlur"}),a.feSpecularLighting({"in":"lessblur",surfaceScale:8,
specularConstant:1,specularExponent:"12",result:"specOut"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",result:"litPaint",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0}),a.feMerge("offsetBlur","litPaint")]),b({_gfxName:"embossDropShadowLight",x:"-5%",y:"-5%",width:"120%",height:"120%"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"3",result:"blur"}),a.feComponentTransfer({"in":"blur",
result:"lessblur"},[a.feFuncA({type:"linear",slope:"0.5"})]),a.feOffset({"in":"lessblur",dx:"6",dy:"6",result:"offsetBlur"}),a.feSpecularLighting({"in":"lessblur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",result:"litPaint",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"}),a.feMerge("offsetBlur",
"litPaint")]),b({_gfxName:"largeEmbossDropShadowLight",x:"-20%",y:"-20%",width:"140%",height:"140%"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"5",result:"blur"}),a.feComponentTransfer({"in":"blur",result:"lessblur"},[a.feFuncA({type:"linear",slope:"0.5"})]),a.feOffset({"in":"lessblur",dx:"6",dy:"6",result:"offsetBlur"}),a.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"spec"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"spec",
in2:"SourceGraphic",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0",result:"litPaint"}),a.feMerge("offsetBlur","litPaint")]),b({_gfxName:"fuzzy",x:"-10%",y:"-10%",width:"120%",height:"120%"},[a.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"1",result:"turb2"}),a.feDisplacementMap({"in":"SourceGraphic",in2:"turb2",result:"turb2",scale:"20",xChannelSelector:"R",yChannelSelector:"G"})]),b({_gfxName:"veryFuzzy",
x:"-20%",y:"-20%",width:"140%",height:"140%"},[a.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"1",result:"turb2"}),a.feDisplacementMap({"in":"SourceGraphic",in2:"turb2",result:"turb2",scale:"35",xChannelSelector:"R",yChannelSelector:"G"})]),b({_gfxName:"melting",x:"-10%",y:"-10%",width:"120%",height:"120%"},[a.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"2",result:"turb"}),a.feDisplacementMap({result:"bended","in":"SourceGraphic",in2:"turb",scale:"25",xChannelSelector:"R",
yChannelSelector:"G"}),a.feGaussianBlur({"in":"bended",stdDeviation:"1",result:"bb"}),a.feComponentTransfer({"in":"bb",result:"BendedSource"},[a.feFuncA({type:"linear",slope:10,intercept:"-1"})]),a.feComponentTransfer({"in":"BendedSource",result:"BendedAlpha"},[a.feFuncR({type:"linear",slope:"0",intercept:"0"}),a.feFuncG({type:"linear",slope:"0",intercept:"0"}),a.feFuncB({type:"linear",slope:"0",intercept:"0"}),a.feFuncA({type:"linear",slope:"1",intercept:"0"})]),a.feGaussianBlur({"in":"BendedAlpha",
stdDeviation:"1",result:"blur"}),a.feSpecularLighting({"in":"blur","lighting-color":"rgb(80%, 80%, 80%)",surfaceScale:"5",specularConstant:"1",specularExponent:"10",result:"specularOut"},[a.fePointLight({x:"-5000",y:"-10000",z:"20000"})]),a.feComposite({"in":"specularOut",in2:"BendedAlpha",operator:"in",result:"specularOut"}),a.feComposite({"in":"BendedSource",in2:"specularOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0",result:"litPaint"})]),b({_gfxName:"impressionist",x:"0%",y:"0%",width:"100%",
height:"100%"},[a.feMorphology({"in":"SourceGraphic",operator:"dilate",radius:"2"})]),b({_gfxName:"holes",x:"0%",y:"0%",width:"100%",height:"100%"},[a.feTurbulence({type:"fractalNoise",baseFrequency:"0.1",numOctaves:"1",result:"texture"}),a.feComponentTransfer({"in":"texture",result:"holes"},[a.feFuncA({type:"discrete",tableValues:"0,1"})]),a.feComposite({"in":"SourceGraphic",in2:"holes",operator:"out"})]),b({_gfxName:"holesComplement",x:"0%",y:"0%",width:"100%",height:"100%"},[a.feTurbulence({type:"fractalNoise",
baseFrequency:"0.1",numOctaves:"1",result:"texture"}),a.feComponentTransfer({"in":"texture",result:"holes"},[a.feFuncA({type:"discrete",tableValues:"1,0"})]),a.feComposite({"in":"SourceGraphic",in2:"holes",operator:"out"})])];c.reliefs=[b({_gfxName:"bumpIn",x:"0%",y:"0%",width:"100%",height:"100%"},[a.feColorMatrix({"in":"SourceGraphic",type:"luminanceToAlpha",result:"lumalpha"}),a.feComponentTransfer({"in":"lumalpha",result:"invertedalpha"},[a.feFuncA({type:"table",tableValues:"1,0"})]),a.feDiffuseLighting({"in":"invertedalpha",
"lighting-color":"rgb(60%, 60%, 60%)",result:"diffuse",surfaceScale:"5"},[a.feDistantLight({azimuth:"135",elevation:"60"})]),a.feSpecularLighting({"in":"invertedalpha",result:"specular",surfaceScale:"5",specularExponent:"6"},[a.feDistantLight({azimuth:"135",elevation:"30"})]),a.feComposite({"in":"diffuse",in2:"specular",operator:"arithmetic",k2:"1.0",k3:"1.0"})]),b({_gfxName:"bumpOut",x:"0%",y:"0%",width:"100%",height:"100%"},[a.feColorMatrix({"in":"SourceGraphic",type:"luminanceToAlpha",result:"lumalpha"}),
a.feDiffuseLighting({"in":"lumalpha","lighting-color":"rgb(60%, 60%, 60%)",result:"diffuse",surfaceScale:"5"},[a.feDistantLight({azimuth:"135",elevation:"60"})]),a.feSpecularLighting({"in":"lumalpha",result:"specular",surfaceScale:"5",specularExponent:"6"},[a.feDistantLight({azimuth:"135",elevation:"30"})]),a.feComposite({"in":"diffuse",in2:"specular",operator:"arithmetic",k2:"1.0",k3:"1.0"})]),b({_gfxName:"thinEmboss",x:"-5%",y:"-5%",width:"110%",height:"110%"},[a.feGaussianBlur({"in":"SourceAlpha",
stdDeviation:"1",result:"blur"}),a.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"})]),b({_gfxName:"emboss",x:"-5%",y:"-5%",width:"110%",height:"110%"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"3",
result:"blur"}),a.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"})]),b({_gfxName:"largeEmboss",x:"-5%",y:"-5%",width:"110%",height:"110%"},[a.feGaussianBlur({"in":"SourceAlpha",stdDeviation:"5",result:"blur"}),
a.feSpecularLighting({"in":"blur",surfaceScale:"8",specularConstant:"1",specularExponent:"12",result:"specOut"},[a.fePointLight({x:"-5000",y:"-10000",z:"12000"})]),a.feComposite({"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"}),a.feComposite({"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"})])];c.textures=[b({_gfxName:"paper",x:"0%",y:"0%",width:"100%",height:"100%"},[a.feTurbulence({type:"turbulence",baseFrequency:"0.01",numOctaves:"5",result:"texture"}),
a.feDiffuseLighting({"in":"texture",result:"diffuse",surfaceScale:"-10"},[a.feDistantLight({azimuth:"135",elevation:"60"})]),a.feComposite({"in":"diffuse",in2:"SourceGraphic",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"})]),b({_gfxName:"swirl",x:"0%",y:"0%",width:"100%",height:"100%"},[a.feTurbulence({type:"turbulence",baseFrequency:"0.05",numOctaves:"1",result:"texture"}),a.feDiffuseLighting({"in":"texture",result:"diffuse",surfaceScale:"-10"},[a.feDistantLight({azimuth:"135",elevation:"60"})]),
a.feComposite({"in":"diffuse",in2:"SourceGraphic",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"})]),b({_gfxName:"swirl2",x:"0%",y:"0%",width:"100%",height:"100%"},[a.feTurbulence({type:"turbulence",baseFrequency:"0.15",numOctaves:"1",result:"texture"}),a.feDiffuseLighting({"in":"texture",result:"diffuse",surfaceScale:"-10"},[a.feDistantLight({azimuth:"135",elevation:"60"})]),a.feComposite({"in":"diffuse",in2:"SourceGraphic",operator:"arithmetic",k1:"1",k2:"0",k3:"0",k4:"0"})]),b({_gfxName:"gold",
x:"-5%",y:"-5%",width:"115%",height:"110%"},[a.feTurbulence({baseFrequency:"0.2",numOctaves:"1",type:"turbulence",result:"turb"}),a.feComposite({"in":"SourceGraphic",in2:"turb",operator:"arithmetic",k2:"0.6",k3:"0.4",result:"turb"}),a.feComposite({"in":"turb",in2:"SourceGraphic",operator:"in",result:"bump"}),a.feDiffuseLighting({"in":"turb",surfaceScale:"6.0","lighting-color":"rgb(60%, 50%, 0%)",diffuseConstant:"1.0",result:"diffuse"},[a.feDistantLight({azimuth:"135",elevation:"60"})]),a.feSpecularLighting({"in":"bump",
surfaceScale:"6.0",specularConstant:"1.0",specularExponent:"10.0",result:"specularOut"},[a.feDistantLight({azimuth:"135",elevation:"60"})]),a.feComposite({"in":"specularOut",in2:"SourceGraphic",operator:"in",result:"specularOut"}),a.feComposite({"in":"bump",in2:"diffuse",operator:"arithmetic",k1:"0.7",k2:"0.3",result:"litPaint"}),a.feComposite({"in":"litPaint",in2:"specularOut",operator:"arithmetic",k2:"1.0",k3:"0.7",result:"litPaint"})])];for(var f in c)if(c.hasOwnProperty(f)){a[f]={};for(var l=
c[f],k=0;k<l.length;++k)(function(){var b=l[k];a[f][b._gfxName]=function(a){return d.delegate(b,a)}})()}return a});