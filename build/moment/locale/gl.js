//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/gl",["moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("gl",{months:"Xaneiro Febreiro Marzo Abril Maio Xu\u00f1o Xullo Agosto Setembro Outubro Novembro Decembro".split(" "),monthsShort:"Xan. Feb. Mar. Abr. Mai. Xu\u00f1. Xul. Ago. Set. Out. Nov. Dec.".split(" "),weekdays:"Domingo Luns Martes M\u00e9rcores Xoves Venres S\u00e1bado".split(" "),
weekdaysShort:"Dom. Lun. Mar. M\u00e9r. Xov. Ven. S\u00e1b.".split(" "),weekdaysMin:"Do Lu Ma M\u00e9 Xo Ve S\u00e1".split(" "),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"\u00e1s":"\u00e1")+"] LT"},nextDay:function(){return"[ma\u00f1\u00e1 "+(1!==this.hours()?"\u00e1s":"\u00e1")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"\u00e1s":"a")+
"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"\u00e1":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"\u00e1s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(a){return"uns segundos"===a?"nuns segundos":"en "+a},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d\u00eda",dd:"%d d\u00edas",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}\u00ba/,ordinal:"%d\u00ba",week:{dow:1,doy:7}})});