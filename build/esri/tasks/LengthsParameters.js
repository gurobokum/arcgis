//>>built
define("esri/tasks/LengthsParameters","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel".split(" "),function(c,e,f,d,g,h){c=c(null,{declaredClass:"esri.tasks.LengthsParameters",polylines:null,lengthUnit:null,geodesic:null,calculationType:null,toJson:function(){var b=f.map(this.polylines,function(a){return a.toJson()}),a={};a.polylines=d.toJson(b);b=this.polylines[0].spatialReference;return a.sr=b.wkid?b.wkid:d.toJson(b.toJson()),this.lengthUnit&&(a.lengthUnit=
this.lengthUnit),this.geodesic&&(a.geodesic=this.geodesic),this.calculationType&&(a.calculationType=this.calculationType),a}});return g("extend-esri")&&e.setObject("tasks.LengthsParameters",c,h),c});