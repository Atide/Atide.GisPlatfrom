//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/fr-ch",["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("fr-ch",{months:"janvier f\u00e9vrier mars avril mai juin juillet ao\u00fbt septembre octobre novembre d\u00e9cembre".split(" "),monthsShort:"janv. f\u00e9vr. mars avr. mai juin juil. ao\u00fbt sept. oct. nov. d\u00e9c.".split(" "),monthsParseExact:!0,
weekdays:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),weekdaysShort:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),weekdaysMin:"Di Lu Ma Me Je Ve Sa".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui \u00e0] LT",nextDay:"[Demain \u00e0] LT",nextWeek:"dddd [\u00e0] LT",lastDay:"[Hier \u00e0] LT",lastWeek:"dddd [dernier \u00e0] LT",sameElse:"L"},
relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(a){return a+(1===a?"er":"e")},week:{dow:1,doy:4}})});