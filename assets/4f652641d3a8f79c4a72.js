"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[63002],{763002:(a,e,t)=>{t.r(e);t.d(e,{default:()=>M});function i(a){return a.replace(/sekuntia?/,"sekunnin")}function n(a){return a.replace(/minuuttia?/,"minuutin")}function u(a){return a.replace(/tuntia?/,"tunnin")}function o(a){return a.replace(/(viikko|viikkoa)/,"viikon")}function r(a){return a.replace(/(kuukausi|kuukautta)/,"kuukauden")}function l(a){return a.replace(/(vuosi|vuotta)/,"vuoden")}var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:i},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:i},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(a){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:n},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:n},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:u},xHours:{
one:"tunti",other:"{{count}} tuntia",futureTense:u},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function(a){return a.replace(/päivää?/,"päivän")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:o},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:o},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:l},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:l},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:l},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:l}};const k=function(a,e,t){var i=s[a],n=1===e?i.one:i.other.replace("{{count}}",String(e));return null!=t&&t.addSuffix?t.comparison&&t.comparison>0?i.futureTense(n)+" kuluttua":n+" sitten":n};var m=t(849526);const d={date:(0,m.Z)({formats:{full:"eeee d. MMMM y",
long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,m.Z)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,m.Z)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var h={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};const p=function(a,e,t,i){return h[a]};var v=t(688486),f={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},c={narrow:f.narrow,abbreviated:f.abbreviated,
wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},y={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},w={narrow:y.narrow,short:y.short,abbreviated:y.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]};const b={ordinalNumber:function(a,e){return Number(a)+"."},era:(0,v.Z)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,v.Z)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,
v.Z)({values:f,defaultWidth:"wide",formattingValues:c,defaultFormattingWidth:"wide"}),day:(0,v.Z)({values:y,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"}),dayPeriod:(0,v.Z)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},defaultWidth:"wide"})};var g=t(276723);const M={code:"fi",formatDistance:k,formatLong:d,formatRelative:p,localize:b,match:{ordinalNumber:(0,t(360974).Z)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,g.Z)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},
defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:(0,g.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,g.Z)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:(0,g.Z)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,g.Z)({matchPatterns:{narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}}}}]);
//# sourceMappingURL=4f652641d3a8f79c4a72.js.map