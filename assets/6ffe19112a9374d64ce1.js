"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[67030,47428],{442368:(e,r,t)=>{t.d(r,{kY:()=>s,Aj:()=>f,d$:()=>d,S1:()=>p,hw:()=>h,kU:()=>v});var n=t(744564),o=t(20170),i=t(761953);function u(e,r,t,n,o,i,u){try{var a=e[i](u),l=a.value}catch(e){t(e);return}a.done?r(l):Promise.resolve(l).then(n,o)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function a(e){u(i,n,o,a,l,"next",e)}function l(e){u(i,n,o,a,l,"throw",e)}a(void 0)}))}}var l=function(e,r){var t,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,
o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;n=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=r.call(e,u)}catch(e){i=[6,e];n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function s(e,r,t,n){return c.apply(this,arguments)}function c(){return(c=a((function(e,r,t,i){var u;return l(this,(function(a){switch(a.label){case 0:return null==(u=e.getGuildId())||r!==u?[3,2]:[4,(0,o.u)(e,i,t)];case 1:if(!a.sent())return[2,!1];a.label=2;case 2:n.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_UPDATE_PERMISSION",id:r,allow:t,deny:i});return[2]}}))}))).apply(this,arguments)}
function f(e){n.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SELECT_PERMISSION",id:e})}function d(e){n.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SET_ADVANCED_MODE",advancedMode:e})}function p(){n.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_INIT"})}function h(e,r,t){return v(e,r,[],t)}function v(e,r,t,o){n.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SUBMITTING"});return new Promise((function(n){var o=function(){if(0===r.length&&0===t.length)return n();if(r.length>0){var u=r.pop();if(null==u)return o();i.Z.updatePermissionOverwrite(e,u).then(o,o)}else{var a=t.pop();if(null==a)return o();i.Z.clearPermissionOverwrite(e,a).then(o,o)}};o()})).then((function(){n.Z.dispatch({type:"CHANNEL_SETTINGS_PERMISSIONS_SAVE_SUCCESS",silent:o})}))}},469023:(e,r,t)=>{t.d(r,{Z:()=>Z})
;var n=t(29891),o=t(749131),i=t(665118),u=t(120491),a=t(436622),l=t(823975),s=t(132457),c=t(174144),f=t(489752),d=t(236563),p=t(143901),h=t(296047),v=t(660772),O=t(725060),y=t(777203),E=t(544031),b=t(747890),S=t(730393),g=t(363582),_=t(183790),N=t(796938),m=t(787554),I=t(516909),w=t(707073),P=t(890592),R=t(296916),A=t(2590);function Z(e,r){switch(e.type){case A.d4z.DM:return o.Z;case A.d4z.GROUP_DM:return(0,n.V1)(e.id)?w.Z:g.Z;case A.d4z.GUILD_ANNOUNCEMENT:return e.isNSFW()?b.Z:(0,R.Z)(e)?E.Z:y.Z;case A.d4z.GUILD_TEXT:return e.id===(null==r?void 0:r.rulesChannelId)?u.Z:e.isNSFW()?s.Z:(0,R.Z)(e)?l.Z:a.Z;case A.d4z.GUILD_FORUM:var t=e.isMediaChannel();return e.isNSFW()?t?O.Z:d.Z:(0,R.Z)(e)?t?v.Z:f.Z:t?h.Z:c.Z;case A.d4z.GUILD_MEDIA:return e.isNSFW()?O.Z:(0,R.Z)(e)?v.Z:h.Z;case A.d4z.GUILD_STAGE_VOICE:return I.Z;case A.d4z.GUILD_VOICE:return(0,R.Z)(e)?m.Z:N.Z;case A.d4z.ANNOUNCEMENT_THREAD:case A.d4z.PUBLIC_THREAD:return e.isNSFW()?S.Z:e.isForumPost()?p.Z:P.Z;case A.d4z.PRIVATE_THREAD:
return e.isNSFW()?S.Z:_.Z;case A.d4z.GUILD_DIRECTORY:return i.Z;default:return null}}},1477:(e,r,t)=>{t.d(r,{GJ:()=>E,X0:()=>S,W:()=>g,aq:()=>_,pM:()=>m,ik:()=>w,Wx:()=>P,kA:()=>R,RZ:()=>A,iI:()=>j,cR:()=>D,zB:()=>L,yv:()=>U,_A:()=>G,$e:()=>H,Yh:()=>k,Yk:()=>x,RD:()=>V,nT:()=>W,$7:()=>z,Tj:()=>B});var n=t(940060),o=t(547308),i=t(442368),u=t(73904),a=t(382060),l=t(21372),s=t(473903),c=t(176758),f=t(72580),d=t(563135),p=t(749565),h=t(449518),v=t(2590),O=t(473708);function y(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function E(e){return n.Z.has(e.permissions,v.Plq.ADMINISTRATOR)}function b(e){return n.Z.has(e.permissions,v.Plq.ADMINISTRATOR)?h.aC.ADMINISTRATOR:h.aC.ROLE}function S(e){var r,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=b(e);return{rowType:n,colorString:null!==(r=e.colorString)&&void 0!==r?r:(0,o.Rf)(v.p6O),name:e.name,id:e.id,disabled:E(e)||t,key:"".concat(n,":").concat(e.id),tags:e.tags}}
function g(e,r){var t=E(e)?0:1,n=E(r)?0:1;return t!==n?t-n:r.position-e.position}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;return[{rowType:h.aC.EMPTY_STATE,colorString:(0,o.Rf)(v.p6O),name:e,disabled:!0,id:"EMPTY_STATE"}]}function N(e,r,t,o){var i=s.default.getCurrentUser();if(null==i)return!1;if(null==e)return i.id!==r;var u=e.permissionOverwrites[r];null!=(null==o?void 0:o[r])&&(u=o[r]);return null==u||!n.Z.has(u.allow,t)}function m(e,r){return e===r}function I(e,r){return!m(e.id,r.id)}function w(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0};return null==e.roles?[]:Object.values(e.roles).filter((function(o){return!E(o)&&N(r,o.id,t)&&I(e,o)&&n(o.name)})).sort(g).map((function(e){return S(e)}))}function P(e,r,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0}
;return null==e.roles?[]:Object.values(e.roles).filter((function(n){return!E(n)&&N(r,n.id,t)&&I(e,n)&&o(n.name)})).sort(g).map((function(e){return S(e,n.Z.has(e.permissions,t))}))}function R(e,r,t,n){var o=[];if(null==e.roles)return o;o=function(e,r,t,n){return Object.values(e.roles).filter((function(o){return E(o)||!N(r,o.id,t,n)&&I(e,o)}))}(e,r,t,n).sort(g).map((function(e){return S(e)}));return 0===o.length?_(O.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES):o}function A(e,r,t,o){var i=[];if(null==e.roles)return i;i=function(e,r,t,o){return Object.values(e.roles).filter((function(i){var u;return E(i)||!N(r,i.id,t,o)&&I(e,i)||n.Z.has(n.Z.combine(i.permissions,null===(u=r.permissionOverwrites[i.id])||void 0===u?void 0:u.allow),t)}))}(e,r,t,o).sort(g).map((function(e){return S(e,n.Z.has(e.permissions,t))}));return 0===i.length?_(O.Z.Messages.CHANNEL_PERMISSIONS_NO_ROLES):i}function Z(e,r){var t;return null!==(t=l.ZP.getNick(r.id,e.id))&&void 0!==t?t:p.ZP.getName(e)}function M(e,r){
return r.isOwner(e)}function C(e,r){var t=function(e,r){return r.isOwner(e)?h.aC.OWNER:h.aC.MEMBER}(e,r);return{rowType:t,name:Z(e,r),userTag:p.ZP.getUserTag(e,{decoration:"never"}),id:e.id,avatarURL:e.getAvatarURL(r.id,24),bot:e.bot,verifiedBot:e.isVerifiedBot(),disabled:M(e,r),key:"".concat(t,":").concat(e.id)}}function T(e,r){return e.rowType!==r.rowType?e.rowType-r.rowType:e.name.toLocaleLowerCase().localeCompare(r.name.toLocaleLowerCase())}function j(e,r,t,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){return!0};return e.map(s.default.getUser).filter(f.lm).filter((function(e){return!t.isOwner(e)&&N(r,e.id,n)&&(o(Z(e,t))||o(e.username)||o(e.discriminator))})).map((function(e){return C(e,t)})).sort(T)}function D(e,r,t,n,o){return function(e,r,t,n,o){return e.map(s.default.getUser).filter(f.lm).filter((function(e){return!N(r,e.id,n,o)||M(e,t)}))}(e,r,t,n,o).map((function(e){return C(e,t)})).sort(T)}function L(e,r){switch(e){case h.aC.ROLE:
return O.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;case h.aC.OWNER:return O.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;case h.aC.ADMINISTRATOR:return O.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;case h.aC.MEMBER:return r?O.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER:null;case h.aC.USER:return O.Z.Messages.USER;case h.aC.GUILD:return O.Z.Messages.SERVER;case h.aC.EMPTY_STATE:return null}}function U(e){switch(e){case h.aC.ROLE:return O.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;case h.aC.OWNER:return O.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;case h.aC.ADMINISTRATOR:return O.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;case h.aC.MEMBER:return O.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;case h.aC.EMPTY_STATE:default:return null}}function G(e,r,t){var o=e.permissionOverwrites[e.guild_id];null==o&&(o=d.ZP.makeEveryoneOverwrite(e.guild_id));var i=function(e){
for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){y(e,r,t[r])}))}return e}({},o);i.deny=n.Z.remove(i.deny,r);i.allow=n.Z.remove(i.allow,r);t||(i.deny=n.Z.add(i.deny,r));return i}function H(e,r,t){var n=G(e,r,t);(0,i.kY)(e,n.id,n.allow,n.deny)}function k(e,r){var t=s.default.getCurrentUser();if(null!=t){var o=e.permissionOverwrites[t.id];if(null==o){var a={id:t.id,type:u.BN.MEMBER,allow:n.Z.add(d.ZP.NONE,r),deny:d.ZP.NONE};(0,i.hw)(e.id,[a],!0)}else{var l=o.allow,c=o.deny;l=n.Z.add(l,r);(0,i.kY)(e,o.id,l,c)}}}function x(e,r){if(null==e)return!1;var t=e.permissionOverwrites[e.guild_id];null!=(null==r?void 0:r[e.guild_id])&&(t=r[e.guild_id]);return null!=t&&n.Z.has(t.deny,e.accessPermissions)}function V(e){var r=Object.keys(e.roles)
;return 0!==r.length&&(1!==r.length||r[0]!==e.id)}function W(e,r,t){return e===v.d4z.GUILD_TEXT||e===v.d4z.GUILD_ANNOUNCEMENT?r:!(0,a.bw)(e)&&e!==v.d4z.GUILD_CATEGORY||r&&t}function z(e){switch(e){case v.d4z.GUILD_TEXT:case v.d4z.GUILD_ANNOUNCEMENT:return O.Z.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();case v.d4z.GUILD_VOICE:return O.Z.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();case v.d4z.GUILD_CATEGORY:return O.Z.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();default:return null}}function B(e,r){var t=[];Object.values(e).forEach((function(e){var n=e.row;null!=n.id&&""!==n.id&&(n.rowType===h.aC.ROLE?t.push((0,c.rX)(n.id,r)):n.rowType===h.aC.MEMBER&&t.push((0,c.jZ)(n.id,r)))}));return t}},647428:(e,r,t)=>{t.d(r,{Z:()=>g});var n=t(202351),o=t(744564),i=t(120415),u=t(310126),a=new Set(["nvidia"]);var l=t(236625),s=t.n(l);var c=function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,
configurable:!0,writable:!0}):e[r]=t;return e}({},i.AB.WINDOWS,{nvidia:">=397.93.0"});function f(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return p(e)}function h(e,r){return!r||"object"!==O(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function v(e,r){v=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return v(e,r)}var O=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1
;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,n=p(e);if(r){var o=p(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return h(this,t)}}var E=!1,b=!0;var S=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}});r&&v(e,r)}(t,e);var r=y(t);function t(){f(this,t);return r.apply(this,arguments)}var n=t.prototype;n.initialize=function(){var e=this;i.FB&&!__OVERLAY__&&u.default.getGPUDriverVersions().then((function(r){E=function(e){var r=c[(0,i.Xf)()];if(null==r)return!1;var t,n,o,u=!0,a=!1,l=void 0;try{for(var f,d=Object.keys(e)[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=f.value,h=e[p],v=r[p];if(null!=h&&null!=v&&null==h.error){var O=(n=void 0,
o=void 0,"".concat(null!==(n=(t=h).major)&&void 0!==n?n:0,".").concat(null!==(o=t.minor)&&void 0!==o?o:0,".0"));if(!s().satisfies(O,v))return!0}}}catch(e){a=!0;l=e}finally{try{u||null==d.return||d.return()}finally{if(a)throw l}}return!1}(r);b=function(e){var r=!0,t=!1,n=void 0;try{for(var o,i=Object.keys(e)[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var u=o.value,l=e[u];if(null!=l&&null==l.error&&a.has(u))return!0}}catch(e){t=!0;n=e}finally{try{r||null==i.return||i.return()}finally{if(t)throw n}}return!1}(r);e.emitChange()}))};n.getState=function(){return{GPUDriversOutdated:E,canUseHardwareAcceleration:b}};n.__getLocalVars=function(){return{GPUDriversOutdated:E,canUseHardwareAcceleration:b}};!function(e,r,t){r&&d(e.prototype,r);t&&d(e,t)}(t,[{key:"GPUDriversOutdated",get:function(){return E}},{key:"canUseHardwareAcceleration",get:function(){return b}}]);return t}(n.ZP.Store);S.displayName="StreamingCapabilitiesStore";const g=new S(o.Z,{OVERLAY_INITIALIZE:function(e){
var r=e.streamingCapabilitiesStoreState;E=r.GPUDriversOutdated;b=r.canUseHardwareAcceleration}})},944514:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(226810);function o(e,r){if(__OVERLAY__){var t=r.getGame(),o=(0,n.QF)();return null==t||null==o?null:{id:t.id,pid:o,pidPath:[],nativeProcessObserverId:0,hidden:!1,elevated:!1,name:t.name,lastFocused:0,exePath:"",exeName:"",cmdLine:"",processName:"",distributor:null,windowHandle:null}}return e.getVisibleGame()}},20170:(e,r,t)=>{t.d(r,{C:()=>E,u:()=>_});var n=t(940060),o=t(105783),i=t(703790),u=t(567403),a=t(888236),l=t(404741),s=t(185219),c=t(322008),f=t(2590),d=t(473708);function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function h(e,r,t,n,o,i,u){try{var a=e[i](u),l=a.value}catch(e){t(e);return}a.done?r(l):Promise.resolve(l).then(n,o)}function v(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var i=e.apply(r,t);function u(e){h(i,n,o,u,a,"next",e)}function a(e){
h(i,n,o,u,a,"throw",e)}u(void 0)}))}}function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(n=t.next()).done);u=!0){i.push(n.value);if(r&&i.length===r)break}}catch(e){a=!0;o=e}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e,r){var t,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]
},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:u.label++;return{value:i[1],done:!1};case 5:u.label++;n=i[1];i=[0];continue;case 7:i=u.ops.pop();u.trys.pop();continue;default:if(!(o=u.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1];o=i;break}if(o&&u.label<o[2]){u.label=o[2];u.ops.push(i);break}o[2]&&u.ops.pop();u.trys.pop();continue}i=r.call(e,u)}catch(e){i=[6,e];n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function E(e,r){
return b.apply(this,arguments)}function b(){return(b=v((function(e,r){return y(this,(function(t){switch(t.label){case 0:return null==e?[2,!0]:[4,S(e,r,{removingView:!0,removingChat:!0})];case 1:return[2,t.sent()]}}))}))).apply(this,arguments)}function S(e,r,t){return g.apply(this,arguments)}function g(){return(g=v((function(e,r,t){var n,o,i,d,p,h,v,E,b;return y(this,(function(y){switch(y.label){case 0:return null==(o=u.Z.getGuild(e))?[2,!0]:(i=null!=o&&(null===(n=o.features)||void 0===n?void 0:n.has(f.oNc.GUILD_ONBOARDING)))?i&&l.Z.shouldFetchPrompts(e)?[4,(0,a.eM)(e)]:[3,2]:[2,!0];case 1:y.sent();y.label=2;case 2:d=l.Z.getDefaultChannelIds(e);p=O((0,s.d9)(e,d),2),h=p[0],v=p[1];if(!d.includes(r))return[2,!0];E=t.removingView&&v.length-1<c.md;b=(t.removingChat||t.removingView)&&h.length-1<c.X;return[2,!E&&!b]}}))}))).apply(this,arguments)}function _(e,r,t){return N.apply(this,arguments)}function N(){return(N=v((function(e,r,t){var u,a,l,s;return y(this,(function(c){switch(c.label){
case 0:if(null==(u=e.getGuildId()))return[2,!0];null!=t&&(r=n.Z.filter(r,n.Z.invert(t)));a=e.permissionOverwrites[u];l=null!=a?n.Z.filter(a.deny,n.Z.invert(a.allow)):n.Z.deserialize(0);s={removingView:n.Z.has(r,f.Plq.VIEW_CHANNEL)&&!n.Z.has(l,f.Plq.VIEW_CHANNEL),removingChat:!1};e.isForumLikeChannel()?s.removingChat=n.Z.has(r,f.Plq.SEND_MESSAGES_IN_THREADS)&&!n.Z.has(l,f.Plq.SEND_MESSAGES_IN_THREADS):s.removingChat=n.Z.has(r,f.Plq.SEND_MESSAGES)&&!n.Z.has(l,f.Plq.SEND_MESSAGES);return s.removingChat||s.removingView?[4,S(u,e.id,s)]:[2,!0];case 1:if(!c.sent()){o.Z.show({title:d.Z.Messages.CANNOT_CHANGE_CHANNEL_PERMS,body:d.Z.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({onClick:function(){o.Z.close();i.Z.open(u,f.pNK.ONBOARDING)}})});return[2,!1]}return[2,!0]}}))}))).apply(this,arguments)}},425454:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(785893),o=(t(667294),t(633878));function i(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t
;return e}function u(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){t=i[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){t=i[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function l(e){
var r=e.width,t=void 0===r?24:r,l=e.height,s=void 0===l?24:l,c=e.color,f=void 0===c?"currentColor":c,d=e.foreground,p=a(e,["width","height","color","foreground"]);return(0,n.jsx)("svg",u(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){i(e,r,t[r])}))}return e}({},(0,o.Z)(p)),{width:t,height:s,viewBox:"0 0 24 24",children:(0,n.jsx)("path",{className:d,fill:f,fillRule:"evenodd",clipRule:"evenodd",d:"M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM20 4.5V13.5H4V4.5H20Z"})}))}},707073:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(785893),o=(t(667294),t(633878));function i(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,
configurable:!0,writable:!0}):e[r]=t;return e}function u(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){t=i[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){t=i[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function l(e){
var r=e.width,t=void 0===r?24:r,l=e.height,s=void 0===l?24:l,c=e.color,f=void 0===c?"currentColor":c,d=e.className,p=e.foreground,h=a(e,["width","height","color","className","foreground"]);return(0,n.jsx)("svg",u(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){i(e,r,t[r])}))}return e}({},(0,o.Z)(h)),{className:d,width:t,height:s,viewBox:"0 0 24 24",children:(0,n.jsx)("path",{className:p,fill:f,fillRule:"evenodd",clipRule:"evenodd",
d:"M16.781 2.27293L14.081 5.7126H9.919L7.219 2.27293L8.781 1L12 5.10008L15.219 1L16.781 2.27293ZM4 6.73175H20C21.1 6.73175 22 7.649 22 8.77007V18.9617C22 20.0828 21.1 21 20 21H4C2.9 21 2 20.0828 2 18.9617V8.77007C2 7.649 2.9 6.73175 4 6.73175ZM4 18.9617H16V8.77007H4V18.9617ZM18 16.4138C18 16.9764 18.448 17.4329 19 17.4329C19.552 17.4329 20 16.9764 20 16.4138C20 15.8512 19.552 15.3946 19 15.3946C18.448 15.3946 18 15.8512 18 16.4138ZM18 11.318C18 11.8806 18.448 12.3371 19 12.3371C19.552 12.3371 20 11.8806 20 11.318C20 10.7554 19.552 10.2988 19 10.2988C18.448 10.2988 18 10.7554 18 11.318Z"})}))}},96606:(e,r,t)=>{t.d(r,{u:()=>P,Z:()=>M});var n=t(785893),o=t(667294),i=t(294184),u=t.n(i),a=t(441143),l=t.n(a),s=t(945460),c=t(736626),f=t(197045),d=t(722406),p=t(796938),h=t(442535),v=t(211482),O=t(126784),y=t.n(O);function E(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function b(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,
configurable:!0,writable:!0}):e[r]=t;return e}function S(e){S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return S(e)}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){b(e,r,t[r])}))}return e}function _(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function N(e,r){
return!r||"object"!==I(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function m(e,r){m=Object.setPrototypeOf||function(e,r){e.__proto__=r;return e};return m(e,r)}var I=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function w(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,n=S(e);if(r){var o=S(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return N(this,t)}}var P={SIZE_16:16,SIZE_24:24,SIZE_32:32,SIZE_56:56};function R(e,r){var t=e instanceof d.Z?e:null!=e?e.user:null;return null!=t?t.id:"user-".concat(r)}function A(){
var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P.SIZE_24;switch(e){case P.SIZE_16:return y().size16;case P.SIZE_24:return y().size24;case P.SIZE_32:return y().size32;case P.SIZE_56:return y().size56;default:return y().size24}}var Z=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}});r&&m(e,r)}(t,e);var r=w(t);function t(){E(this,t);var e;(e=r.apply(this,arguments)).state={popoutUserId:null};e._ref=o.createRef();e.defaultRenderUser=function(r,t,o){var i=e.props,u=i.showUserPopout,a=i.guildId,l=i.size;if(null==r){if(e.props.showDefaultAvatarsForNullUsers){var c=(null!=o?o:0)%h.Z.DEFAULT_AVATARS.length,f=h.Z.DEFAULT_AVATARS[c];return(0,n.jsx)("img",{src:f,alt:"",className:y().avatar})}return(0,n.jsx)("div",{className:y().emptyUser})}var d=(0,n.jsx)("img",{src:r.getAvatarURL(a,l),alt:r.username,
className:y().avatar},r.id);return u?(0,n.jsx)(s.Clickable,{className:y().clickableAvatar,onClick:function(){null!=e._ref.current&&null!=r&&e.setState({popoutUserId:r.id})},tabIndex:-1,children:d},r.id):d};return e}var i=t.prototype;i.renderUsers=function(){for(var e=this.props,r=e.users,t=e.max,o=e.renderUser,i=void 0===o?this.defaultRenderUser:o,u=e.size,a=e.extraDetail,l=[],s=r.length===t?r.length:t-1,c=this.renderMoreUsers(s),f=0;f<s&&f<r.length;){var d,p=null==c&&null==a&&f===r.length-1,h=i(r[f],p,f);l.push(p?(0,n.jsx)("div",{className:y().avatarContainer,children:h},R(null!==(d=r[f])&&void 0!==d?d:null,f)):(0,n.jsx)(v.ZP,{className:y().avatarContainerMasked,height:u,width:u,mask:v.ZP.Masks.VOICE_USER_SUMMARY_ITEM,children:h},R(r[f],f)));f++}null!=a?l.push(a):null!=c&&l.push(c);return l};i.renderMoreUsers=function(e){var r=this.props,t=r.max,i=r.count,u=r.hideMoreUsers,a=r.renderMoreUsers,l=r.users,s=Math.min(e,l.length);if(!u)if(null!=i){if(i>=t)return(0,n.jsx)(o.Fragment,{
children:a("".concat(t,"+"),t)},"more-users");if(i>l.length){var c=i-l.length;return(0,n.jsx)(o.Fragment,{children:a("+".concat(c),c)},"more-users")}}else if(s<l.length){var f=Math.min(l.length-s,99);return(0,n.jsx)(o.Fragment,{children:a("+".concat(f),f)},"more-users")}};i.renderIcon=function(){return this.props.renderIcon?(0,n.jsx)(p.Z,{foreground:y().foreground,className:y().icon}):null};i.render=function(){var e=this,r=this.props,t=r.className,o=r.size,i=r.users,a=r.guildId,d=r.showUserPopout,p=this.state.popoutUserId,h=i.find((function(e){return null!=e&&e.id===p}));return(0,n.jsx)(s.Popout,{position:"right",preload:null==h?void 0:function(){return(0,c.Z)(h.id,h.getAvatarURL(a,80),{guildId:a})},shouldShow:!0===d&&null!=p,fixed:!0,renderPopout:function(r){l()(null!=p,"UserSummaryItem.render - renderPopout: popoutUserId cannot be null");return(0,n.jsx)(f.Z,_(g({},e.props,r),{userId:p,guildId:e.props.guildId}))},onRequestClose:function(){return e.setState({popoutUserId:null})},
children:function(r){return(0,n.jsxs)("div",_(g({className:u()(t,y().container,A(o)),ref:e._ref},r),{children:[e.renderIcon(),e.renderUsers()]}))}})};return t}(o.PureComponent);Z.defaultProps={max:10,renderMoreUsers:function(e){return(0,n.jsx)("div",{className:y().moreUsers,children:e})},renderIcon:!1,showDefaultAvatarsForNullUsers:!1,size:P.SIZE_24};const M=Z},15086:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(441143),o=t.n(n),i=t(496486),u=t.n(i),a=t(36256);function l(e,r,t){var n=window.DiscordNative;o()(null!=n,"Can't get desktop sources outside of native app");t=null!=t?t:{width:150,height:150};var i=[];if((r=null!=r?r:[a.vA.WINDOW,a.vA.SCREEN]).includes(a.vA.SCREEN)&&e.supports(a.AN.SCREEN_PREVIEWS)){i.push(e.getScreenPreviews(t.width,t.height));r=r.filter((function(e){return e!==a.vA.SCREEN}))}if(r.includes(a.vA.WINDOW)&&e.supports(a.AN.WINDOW_PREVIEWS)){i.push(e.getWindowPreviews(t.width,t.height));r=r.filter((function(e){return e!==a.vA.WINDOW}))}
0!==r.length&&i.push(n.desktopCapture.getDesktopCaptureSources({types:r,thumbnailSize:t}));return Promise.all(i).then((function(e){return u().flatten(e)}))}}}]);
//# sourceMappingURL=6ffe19112a9374d64ce1.js.map