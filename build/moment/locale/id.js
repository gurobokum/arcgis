//>>built
(function(c,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/id",["moment"],a):a(c.moment)})(this,function(c){return c.defineLocale("id",{months:"Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember".split(" "),monthsShort:"Jan Feb Mar Apr Mei Jun Jul Ags Sep Okt Nov Des".split(" "),weekdays:"Minggu Senin Selasa Rabu Kamis Jumat Sabtu".split(" "),
weekdaysShort:"Min Sen Sel Rab Kam Jum Sab".split(" "),weekdaysMin:"Mg Sn Sl Rb Km Jm Sb".split(" "),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(a,b){12===a&&(a=0);if("pagi"===b)return a;if("siang"===b)return 11<=a?a:a+12;if("sore"===b||"malam"===b)return a+12},meridiem:function(a,b,c){return 11>a?"pagi":15>a?"siang":19>a?"sore":"malam"},
calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})});