"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[13621],{713621:(e,t,r)=>{r.r(t);r.d(t,{default:()=>m});var n=r(785893),o=(r(667294),r(202351)),u=r(945460),i=r(21372),l=r(567403),a=r(473903),c=r(443812),s=r(153771),f=r(276985),p=r(201615),b=r(784426),y=r(2590);var d=r(989280),h=r(473708);function O(e,t,r,n,o,u,i){try{var l=e[u](i),a=l.value}catch(e){r(e);return}l.done?t(a):Promise.resolve(a).then(n,o)}function v(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){v(e,t,r[t])}))}return e}function w(e,t){t=null!=t?t:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++){r=u[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++){r=u[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}var P=function(e,t){var r,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:l(0),throw:l(1),return:l(2)},
"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function l(u){return function(l){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;(n=0,o)&&(u=[2&u[0],o.value]);switch(u[0]){case 0:case 1:o=u;break;case 4:i.label++;return{value:u[1],done:!1};case 5:i.label++;n=u[1];u=[0];continue;case 7:u=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1];o=u;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(u);break}o[2]&&i.ops.pop();i.trys.pop();continue}u=t.call(e,i)}catch(e){u=[6,e];n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}};const m=function(e){
var t,r,v=e.guildId,m=e.transitionState,k=j(e,["guildId","transitionState"]),E=(0,c.Dt)(),S=(0,o.e7)([p.Z],(function(){return p.Z.getRequest(v)}),[v]),Z=(0,o.e7)([l.Z],(function(){return l.Z.getGuild(v)}),[v]),I=(0,o.e7)([a.default],(function(){var e;return null===(e=a.default.getCurrentUser())||void 0===e?void 0:e.id})),R=(0,o.e7)([i.ZP],(function(){return null!=I?i.ZP.getMember(v,I):null}),[I,v]),x=(r=(t=function(){return P(this,(function(e){switch(e.label){case 0:if(!(null==Z?void 0:Z.hasFeature(y.oNc.PREVIEW_ENABLED)))return[3,5];e.label=1;case 1:e.trys.push([1,3,,4]);return[4,s.Z.removeGuildJoinRequest(v)];case 2:e.sent();return[3,4];case 3:throw e.sent();case 4:k.onClose();(0,f.hk)(v);return[3,6];case 5:s.Z.resetGuildJoinRequest(v);e.label=6;case 6:return[2]}}))},function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function i(e){O(u,n,o,i,l,"next",e)}function l(e){O(u,n,o,i,l,"throw",e)}i(void 0)}))}),function(){return r.apply(this,arguments)})
;return(0,n.jsx)(u.ModalRoot,{size:u.ModalSize.DYNAMIC,transitionState:m,"aria-labelledby":E,children:(0,n.jsx)(d.Z,w(g({},k),{headerId:E,reapplyText:h.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,onReapply:x,confirmText:h.Z.Messages.OKAY,onConfirm:function(){k.onClose();null==R&&((e=(0,b.s1)()).length>0?e.goBack():(0,b.uL)(y.Z5c.ME));var e},rejectionReason:null==S?void 0:S.rejectionReason,guild:Z}))})}}}]);
//# sourceMappingURL=90d4020f706ac46f91c2.js.map