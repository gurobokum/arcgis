//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/et",["moment"],a):a(b.moment)})(this,function(b){function a(a,b,c,d){a={s:["m\u00f5ne sekundi","m\u00f5ni sekund","paar sekundit"],m:["\u00fche minuti","\u00fcks minut"],mm:[a+" minuti",a+" minutit"],h:["\u00fche tunni","tund aega","\u00fcks tund"],hh:[a+" tunni",a+" tundi"],d:["\u00fche p\u00e4eva","\u00fcks p\u00e4ev"],
M:["kuu aja","kuu aega","\u00fcks kuu"],MM:[a+" kuu",a+" kuud"],y:["\u00fche aasta","aasta","\u00fcks aasta"],yy:[a+" aasta",a+" aastat"]};return b?a[c][2]?a[c][2]:a[c][1]:d?a[c][0]:a[c][1]}return b.defineLocale("et",{months:"jaanuar veebruar m\u00e4rts aprill mai juuni juuli august september oktoober november detsember".split(" "),monthsShort:"jaan veebr m\u00e4rts apr mai juuni juuli aug sept okt nov dets".split(" "),weekdays:"p\u00fchap\u00e4ev esmasp\u00e4ev teisip\u00e4ev kolmap\u00e4ev neljap\u00e4ev reede laup\u00e4ev".split(" "),
weekdaysShort:"PETKNRL".split(""),weekdaysMin:"PETKNRL".split(""),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[T\u00e4na,] LT",nextDay:"[Homme,] LT",nextWeek:"[J\u00e4rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s p\u00e4rast",past:"%s tagasi",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:"%d p\u00e4eva",M:a,MM:a,y:a,yy:a},ordinalParse:/\d{1,2}\./,ordinal:"%d.",
week:{dow:1,doy:4}})});