"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[2263],{343639:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(785893),o=(t(667294),t(213276));function u(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){u(e,n,t[n])}))}return e}function i(e,n){return function(t){return(0,r.jsx)(o.Z,{page:n.page,section:n.section,object:n.object,objectType:n.objectType,children:(0,r.jsx)(e,c({},t))})}}},567678:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(785893),o=(t(667294),t(19585));function u(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function c(e){
for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){u(e,n,t[n])}))}return e}function i(e,n){return function(t){var u=(0,o.Z)(n).AnalyticsLocationProvider;return(0,r.jsx)(u,{children:(0,r.jsx)(e,c({},t))})}}},102263:(e,n,t)=>{t.r(n);t.d(n,{default:()=>P});var r=t(785893),o=t(667294),u=t(202351),c=t(945460),i=t(971402),a=t(343639),l=t(567678),s=t(153686),f=t(682776),b=t(310126),p=t(897699),d=t(2590),O=t(473708);function y(e,n,t,r,o,u,c){try{var i=e[u](c),a=i.value}catch(e){t(e);return}i.done?n(a):Promise.resolve(a).then(r,o)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var u=e.apply(n,t);function c(e){y(u,r,o,c,i,"next",e)}function i(e){y(u,r,o,c,i,"throw",e)}c(void 0)}))}}function h(e,n,t){
n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function v(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var g=function(e,n){var t,r,o,u,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),
0):r.next)&&!(o=o.call(r,u[1])).done)return o;(r=0,o)&&(u=[2&u[0],o.value]);switch(u[0]){case 0:case 1:o=u;break;case 4:c.label++;return{value:u[1],done:!1};case 5:c.label++;r=u[1];u=[0];continue;case 7:u=c.ops.pop();c.trys.pop();continue;default:if(!(o=c.trys,o=o.length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1];o=u;break}if(o&&c.label<o[2]){c.label=o[2];c.ops.push(u);break}o[2]&&c.ops.pop();c.trys.pop();continue}u=n.call(e,c)}catch(e){u=[6,e];r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}};function w(e,n){var i=(0,u.cj)([f.Z],(function(){return f.Z.getGuildPermissionProps(n)}),[n]).canManageGuildExpressions,a=o.useCallback((function(){(0,c.openModalLazy)(j((function(){var o,u;return g(this,(function(c){switch(c.label){case 0:return[4,Promise.all([t.e(40532),t.e(11780),t.e(41394)]).then(t.bind(t,711780))];case 1:o=c.sent(),u=o.default
;return[2,function(t){return(0,r.jsx)(u,v(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){h(e,n,t[n])}))}return e}({},t),{existingSound:e,guildId:n.id}))}]}}))})))}),[n.id,e]);return i?(0,r.jsx)(c.MenuItem,{id:"edit-soundboard-sound",label:O.Z.Messages.SOUNDBOARD_CONTEXT_MENU_EDIT_SOUND,action:a},"edit-soundboard-sound"):null}const P=(0,l.Z)((0,a.Z)((function(e){var n=e.guild,t=e.sound,u=e.onSelect,a=w(t,n),l=function(e){var n=o.useCallback(j((function(){var n,t;return g(this,(function(r){switch(r.label){case 0:n=e.soundId,t=e.overridePath;return[4,b.default.saveFile((0,p.Z)(n),"".concat(null!=t?t:n,".mp3"))];case 1:r.sent();return[2]}}))})),[e]);return(0,r.jsx)(c.MenuItem,{id:"download-soundboard-sound",
label:O.Z.Messages.SOUNDBOARD_CONTEXT_MENU_DOWNLOAD_SOUND,action:n},"download-soundboard-sound")}(t);return(0,r.jsx)(c.Menu,{navId:"sound-button-context",onClose:i.Zy,"aria-label":O.Z.Messages.USER_ACTIONS_MENU_LABEL,onSelect:u,children:(0,r.jsxs)(c.MenuGroup,{children:[null!=a&&a,l]})})}),{object:d.qAy.CONTEXT_MENU}),[s.Z.CONTEXT_MENU,s.Z.SOUNDBOARD_BUTTON])}}]);
//# sourceMappingURL=2d243aca0bcdd8277d00.js.map