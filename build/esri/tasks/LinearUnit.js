//>>built
define("esri/tasks/LinearUnit",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],function(b,c,d,e){b=b(null,{declaredClass:"esri.tasks.LinearUnit",constructor:function(a){a&&c.mixin(this,a)},distance:0,units:null,toJson:function(){var a={};return this.distance&&(a.distance=this.distance),this.units&&(a.units=this.units),a}});return d("extend-esri")&&c.setObject("tasks.LinearUnit",b,e),b});