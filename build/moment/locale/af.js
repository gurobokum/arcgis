//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/af",["moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("af",{months:"Januarie Februarie Maart April Mei Junie Julie Augustus September Oktober November Desember".split(" "),monthsShort:"Jan Feb Mar Apr Mei Jun Jul Aug Sep Okt Nov Des".split(" "),weekdays:"Sondag Maandag Dinsdag Woensdag Donderdag Vrydag Saterdag".split(" "),
weekdaysShort:"Son Maa Din Woe Don Vry Sat".split(" "),weekdaysMin:"So Ma Di Wo Do Vr Sa".split(" "),meridiemParse:/vm|nm/i,isPM:function(a){return/^nm$/i.test(a)},meridiem:function(a,b,c){return 12>a?c?"vm":"VM":c?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[M\u00f4re om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},
relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||20<=a?"ste":"de")},week:{dow:1,doy:4}})});