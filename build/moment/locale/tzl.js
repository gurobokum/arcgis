//>>built
(function(d,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/tzl",["moment"],a):a(d.moment)})(this,function(d){function a(b,a,c,d){b={s:["viensas secunds","'iensas secunds"],m:["'n m\u00edut","'iens m\u00edut"],mm:[b+" m\u00eduts",""+b+" m\u00eduts"],h:["'n \u00feora","'iensa \u00feora"],hh:[b+" \u00feoras",""+b+" \u00feoras"],d:["'n ziua","'iensa ziua"],dd:[b+" ziuas",""+b+" ziuas"],
M:["'n mes","'iens mes"],MM:[b+" mesen",""+b+" mesen"],y:["'n ar","'iens ar"],yy:[b+" ars",""+b+" ars"]};return d?b[c][0]:a?b[c][0]:b[c][1]}return d.defineLocale("tzl",{months:"Januar Fevraglh Mar\u00e7 Avr\u00efu Mai G\u00fcn Julia Guscht Setemvar Listop\u00e4ts Noemvar Zecemvar".split(" "),monthsShort:"Jan Fev Mar Avr Mai G\u00fcn Jul Gus Set Lis Noe Zec".split(" "),weekdays:"S\u00faladi L\u00fane\u00e7i Maitzi M\u00e1rcuri Xh\u00faadi Vi\u00e9ner\u00e7i S\u00e1turi".split(" "),weekdaysShort:"S\u00fal L\u00fan Mai M\u00e1r Xh\u00fa Vi\u00e9 S\u00e1t".split(" "),
weekdaysMin:"S\u00fa L\u00fa Ma M\u00e1 Xh Vi S\u00e1".split(" "),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(b){return"d'o"===b.toLowerCase()},meridiem:function(b,a,c){return 11<b?c?"d'o":"D'O":c?"d'a":"D'A"},calendar:{sameDay:"[oxhi \u00e0] LT",nextDay:"[dem\u00e0 \u00e0] LT",nextWeek:"dddd [\u00e0] LT",lastDay:"[ieiri \u00e0] LT",lastWeek:"[s\u00fcr el] dddd [lasteu \u00e0] LT",
sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});