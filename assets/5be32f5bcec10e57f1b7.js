"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[47956],{58387:(e,r,t)=>{t.d(r,{Z:()=>I});var n=t(785893),s=(t(667294),t(945460));function u(e,r,t,n,s,u,a){try{var i=e[u](a),o=i.value}catch(e){t(e);return}i.done?r(o):Promise.resolve(o).then(n,s)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(n,s){var a=e.apply(r,t);function i(e){u(a,n,s,i,o,"next",e)}function o(e){u(a,n,s,i,o,"throw",e)}i(void 0)}))}}function i(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}var o=function(e,r){var t,n,s,u,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,
n&&(s=2&u[0]?n.return:u[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,u[1])).done)return s;(n=0,s)&&(u=[2&u[0],s.value]);switch(u[0]){case 0:case 1:s=u;break;case 4:a.label++;return{value:u[1],done:!1};case 5:a.label++;n=u[1];u=[0];continue;case 7:u=a.ops.pop();a.trys.pop();continue;default:if(!(s=a.trys,s=s.length>0&&s[s.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!s||u[1]>s[0]&&u[1]<s[3])){a.label=u[1];break}if(6===u[0]&&a.label<s[1]){a.label=s[1];s=u;break}if(s&&a.label<s[2]){a.label=s[2];a.ops.push(u);break}s[2]&&a.ops.pop();a.trys.pop();continue}u=r.call(e,a)}catch(e){u=[6,e];n=0}finally{t=s=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};const I={open:function(){(0,s.openModalLazy)(a((function(){var e,r;return o(this,(function(s){switch(s.label){case 0:return[4,Promise.all([t.e(40532),t.e(36006),t.e(15357),t.e(27499),t.e(3790),t.e(88110),t.e(96043),t.e(27370)]).then(t.bind(t,834883))];case 1:e=s.sent(),r=e.default
;return[2,function(e){return(0,n.jsx)(r,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){i(e,r,t[r])}))}return e}({},e))}]}}))})))}}},786502:(e,r,t)=>{t.d(r,{bm:()=>s,an:()=>m,rh:()=>P,Sz:()=>v,Vg:()=>b,ZP:()=>V});var n,s,u=t(258104),a=t(61209),i=t(21372),o=t(717091),I=t(840922),l=t(473903),_=t(796909),O=t(504275),f=t(2590),c=t(718634),S=t(473708);function E(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable
}))));n.forEach((function(r){E(e,r,t[r])}))}return e}function N(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}n=t(218146);!function(e){e.GROUP_DM="GROUP_DM";e.DM="DM";e.FRIEND="FRIEND";e.CHANNEL="CHANNEL"}(s||(s={}));var d=function(e,r){return null!=e&&i.ZP.isMember(e,r)},y=function(e){var r=e.omitUserIds,t=e.maxRowsWithoutQuery,n=e.omitGuildId,u=e.shownUserIds,i=e.rows,I=e.counts,O=e.includeGroupDms,c=e.limit,S=0,E=!0,T=!1,N=void 0;try{for(var y,m=_.Z.getPrivateChannelIds()[Symbol.iterator]();!(E=(y=m.next()).done);E=!0){var P=y.value;if(null!=t&&t>0&&i.length>=t)break;if(null!=c&&S>=c)break
;var v=a.Z.getChannel(P);if(null!=v&&v.isPrivate())if(O&&v.type===f.d4z.GROUP_DM){i.push({type:s.GROUP_DM,item:v,isSuggested:!1});I.numGroupDms++;S++}else{if(null!=o.ZP.lastMessageId(v.id)){var g=v.getRecipientId();if(null!=g&&!r.has(g)&&!u.has(g)){var h=l.default.getUser(g);if(null==h||h.bot||d(n,h.id))continue;u.add(h.id);i.push({type:s.DM,item:h,isSuggested:!1});I.numDms++;S++}}}}}catch(e){T=!0;N=e}finally{try{E||null==m.return||m.return()}finally{if(T)throw N}}};function m(e){var r=e.query,t=e.inviteTargetType,n=e.omitUserIds,u=e.suggestedUserIds,i=e.suggestedChannelIds,_=e.maxRowsWithoutQuery,f=e.omitGuildId,S=new Set,E=[],m={numFriends:0,numDms:0,numGroupDms:0,numGuildMembers:0,numChannels:0};if(""===r){var P={omitUserIds:n,maxRowsWithoutQuery:_,omitGuildId:f,shownUserIds:S,rows:E,counts:m};if(t===c.Iq.EMBEDDED_APPLICATION){y(N(T({},P),{includeGroupDms:!1,limit:1}));!function(e){var r=e.suggestedChannelIds,t=e.maxRowsWithoutQuery,n=e.rows,u=e.counts;if(null!=r){
var i=!0,o=!1,I=void 0;try{for(var l,_=r[Symbol.iterator]();!(i=(l=_.next()).done);i=!0){var O=l.value;if(null!=t&&t>0&&n.length>=t)break;var f=a.Z.getChannel(O);if(null!=f){n.push({type:s.CHANNEL,item:f,isSuggested:!0});u.numChannels++}}}catch(e){o=!0;I=e}finally{try{i||null==_.return||_.return()}finally{if(o)throw I}}}}(N(T({},P),{suggestedChannelIds:i}))}!function(e){var r=e.omitUserIds,t=e.suggestedUserIds,n=e.maxRowsWithoutQuery,u=e.omitGuildId,a=e.shownUserIds,i=e.rows,o=e.counts;if(null!=t){var I=!0,_=!1,O=void 0;try{for(var f,c=t[Symbol.iterator]();!(I=(f=c.next()).done);I=!0){var S=f.value;if(null!=n&&n>0&&i.length>=n)break;if(!r.has(S)&&!a.has(S)){var E=l.default.getUser(S);if(null!=E&&!d(u,E.id)){a.add(E.id);i.push({type:s.FRIEND,item:E,isSuggested:!0});o.numFriends++}}}}catch(e){_=!0;O=e}finally{try{I||null==c.return||c.return()}finally{if(_)throw O}}}}(N(T({},P),{suggestedUserIds:u}));y(N(T({},P),{includeGroupDms:!0}));!function(e){
var r=e.omitUserIds,t=e.maxRowsWithoutQuery,n=e.omitGuildId,u=e.shownUserIds,a=e.rows,i=e.counts,o=!0,_=!1,O=void 0;try{for(var f,c=I.Z.getFriendIDs()[Symbol.iterator]();!(o=(f=c.next()).done);o=!0){var S=f.value;if(null!=t&&t>0&&a.length>=t)break;if(!r.has(S)&&!u.has(S)){var E=l.default.getUser(S);if(null!=E&&!d(n,E.id)){a.push({type:s.FRIEND,item:E,isSuggested:!1});i.numFriends++}}}}catch(e){_=!0;O=e}finally{try{o||null==c.return||c.return()}finally{if(_)throw O}}}(P)}else{var v={query:r,rows:E,counts:m};t===c.Iq.EMBEDDED_APPLICATION&&function(e){var r=e.query,t=e.rows,n=e.counts;e.inviteTargetType===c.Iq.EMBEDDED_APPLICATION&&O.ZP.queryChannels({query:r,limit:3,guildId:void 0}).forEach((function(e){var r=e.record;t.push({type:s.CHANNEL,item:r,isSuggested:!1});n.numChannels++}))}(N(T({},v),{inviteTargetType:t}));!function(e){var r=e.query,t=e.omitUserIds,n=e.shownUserIds,u=e.rows,i=e.counts;O.ZP.queryDMUsers({query:r,limit:50}).forEach((function(e){var r=e.record;if(!t.has(r.id)){
var I=a.Z.getDMFromUserId(r.id);if(null!=I&&null!=o.ZP.lastMessageId(I)){n.add(r.id);u.push({type:s.DM,item:r,isSuggested:!1});i.numDms++}}}))}(N(T({},v),{omitUserIds:n,shownUserIds:S}));!function(e){var r=e.query,t=e.rows,n=e.counts;O.ZP.queryGroupDMs({query:r,limit:50,fuzzy:!1}).forEach((function(e){var r=e.record;t.push({type:s.GROUP_DM,item:r,isSuggested:!1});n.numGroupDms++}))}(v);!function(e){var r=e.query,t=e.rows,n=e.counts,u=e.omitUserIds,a=e.shownUserIds;O.ZP.queryFriends({query:r,limit:500,_fuzzy:!1}).forEach((function(e){var r=e.record;if(!u.has(r.id)&&!a.has(r.id)){a.add(r.id);t.push({type:s.FRIEND,item:r,isSuggested:!1});n.numFriends++}}))}(N(T({},v),{omitUserIds:n,shownUserIds:S}))}return{rows:E,counts:m}}function P(e,r){var t=!0,n=!1,s=void 0;try{for(var u,i=_.Z.getPrivateChannelIds()[Symbol.iterator]();!(t=(u=i.next()).done);t=!0){var I=u.value,O=a.Z.getChannel(I);if(null!=O&&O.isDM()&&null!=o.ZP.lastMessageId(O.id)){var f=O.getRecipientId();if(null!=f&&!e.has(f)){
var c=l.default.getUser(f);if(null==c||c.bot||d(r,c.id))continue;return c}}}}catch(e){n=!0;s=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw s}}return null}function v(e){var r=e.channel,t=e.inviteTargetType,n=e.applicationId;if(t===c.Iq.EMBEDDED_APPLICATION)if(null!=r){var s=!0,a=!1,i=void 0;try{for(var o,I=u.ZP.getEmbeddedActivitiesForChannel(r.id)[Symbol.iterator]();!(s=(o=I.next()).done);s=!0){var l=o.value;if(l.application_id===n)return new Set(l.connections.keys())}}catch(e){a=!0;i=e}finally{try{s||null==I.return||I.return()}finally{if(a)throw i}}}return new Set}var g,h="minutes",p="hours",U="days",M="never",D=(E(g={},n.INVITE_OPTIONS_30_MINUTES.value,{value:30,type:h}),E(g,n.INVITE_OPTIONS_1_HOUR.value,{value:1,type:p}),E(g,n.INVITE_OPTIONS_6_HOURS.value,{value:6,type:p}),E(g,n.INVITE_OPTIONS_12_HOURS.value,{value:12,type:p}),E(g,n.INVITE_OPTIONS_1_DAY.value,{value:1,type:U}),E(g,n.INVITE_OPTIONS_7_DAYS.value,{value:7,type:U}),E(g,n.INVITE_OPTIONS_30_DAYS.value,{
value:30,type:U}),E(g,n.INVITE_OPTIONS_FOREVER.value,{value:0,type:M}),g);function b(e,r){var t=parseInt(r,10),n=0===t,s=D[e].value;switch(D[e].type){case h:return n?S.Z.Messages.INVITE_EXPIRES_MINUTES:S.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({numUses:t});case p:return n?S.Z.Messages.INVITE_EXPIRES_HOURS.format({numHours:s}):S.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({numHours:s,numUses:t});case U:return n?S.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({numDays:s}):S.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({numDays:s,numUses:t});case M:return n?S.Z.Messages.INVITE_EXPIRES_NEVER:S.Z.Messages.INVITE_EXPIRES_USES.format({numUses:t});default:return""}}const V={getMaxAgeOptions:n.MAX_AGE_OPTIONS,getMaxUsesOptions:n.MAX_USES_OPTIONS,INVITE_OPTIONS_FOREVER:n.INVITE_OPTIONS_FOREVER,INVITE_OPTIONS_1_DAY:n.INVITE_OPTIONS_1_DAY,INVITE_OPTIONS_7_DAYS:n.INVITE_OPTIONS_7_DAYS,INVITE_OPTIONS_30_DAYS:n.INVITE_OPTIONS_30_DAYS,
INVITE_OPTIONS_12_HOURS:n.INVITE_OPTIONS_12_HOURS,INVITE_OPTIONS_6_HOURS:n.INVITE_OPTIONS_6_HOURS,INVITE_OPTIONS_1_HOUR:n.INVITE_OPTIONS_1_HOUR,INVITE_OPTIONS_30_MINUTES:n.INVITE_OPTIONS_30_MINUTES,INVITE_OPTIONS_UNLIMITED:n.INVITE_OPTIONS_UNLIMITED,INVITE_OPTIONS_ONCE:n.INVITE_OPTIONS_ONCE,INVITE_OPTIONS_5_TIMES:n.INVITE_OPTIONS_5_TIMES,INVITE_OPTIONS_10_TIMES:n.INVITE_OPTIONS_10_TIMES,INVITE_OPTIONS_25_TIMES:n.INVITE_OPTIONS_25_TIMES,INVITE_OPTIONS_50_TIMES:n.INVITE_OPTIONS_50_TIMES,INVITE_OPTIONS_100_TIMES:n.INVITE_OPTIONS_100_TIMES}},218146:(e,r,t)=>{t.r(r);t.d(r,{INVITE_OPTIONS_UNLIMITED:()=>u,INVITE_OPTIONS_ONCE:()=>a,INVITE_OPTIONS_5_TIMES:()=>i,INVITE_OPTIONS_10_TIMES:()=>o,INVITE_OPTIONS_25_TIMES:()=>I,INVITE_OPTIONS_50_TIMES:()=>l,INVITE_OPTIONS_100_TIMES:()=>_,MAX_USES_OPTIONS:()=>O,INVITE_OPTIONS_30_MINUTES:()=>f,INVITE_OPTIONS_1_HOUR:()=>c,INVITE_OPTIONS_6_HOURS:()=>S,INVITE_OPTIONS_12_HOURS:()=>E,INVITE_OPTIONS_1_DAY:()=>T,INVITE_OPTIONS_7_DAYS:()=>N,
INVITE_OPTIONS_30_DAYS:()=>d,INVITE_OPTIONS_FOREVER:()=>y,MAX_AGE_OPTIONS:()=>m});var n=t(473708);function s(e,r){return{value:e,get label(){return r()}}}var u=s(0,(function(){return n.Z.Messages.MAX_USES.format({maxUses:0})})),a=s(1,(function(){return n.Z.Messages.MAX_USES.format({maxUses:1})})),i=s(5,(function(){return n.Z.Messages.MAX_USES.format({maxUses:5})})),o=s(10,(function(){return n.Z.Messages.MAX_USES.format({maxUses:10})})),I=s(25,(function(){return n.Z.Messages.MAX_USES.format({maxUses:25})})),l=s(50,(function(){return n.Z.Messages.MAX_USES.format({maxUses:50})})),_=s(100,(function(){return n.Z.Messages.MAX_USES.format({maxUses:100})})),O=[u,a,i,o,I,l,_],f=s(1800,(function(){return n.Z.Messages.DURATION_MINUTES.format({minutes:30})})),c=s(3600,(function(){return n.Z.Messages.DURATION_HOURS.format({hours:1})})),S=s(21600,(function(){return n.Z.Messages.DURATION_HOURS.format({hours:6})})),E=s(43200,(function(){return n.Z.Messages.DURATION_HOURS.format({hours:12})
})),T=s(86400,(function(){return n.Z.Messages.DURATION_DAYS.format({days:1})})),N=s(604800,(function(){return n.Z.Messages.DURATION_DAYS.format({days:7})})),d=s(2592e3,(function(){return n.Z.Messages.DURATION_DAYS.format({days:30})})),y=s(0,(function(){return n.Z.Messages.MAX_AGE_NEVER})),m=[f,c,S,E,T,N,d,y]}}]);
//# sourceMappingURL=5be32f5bcec10e57f1b7.js.map