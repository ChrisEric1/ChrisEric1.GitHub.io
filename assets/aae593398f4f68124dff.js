"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[66240],{166240:(e,n,t)=>{t.r(n);t.d(n,{default:()=>oe});var r=t(785893),i=(t(667294),t(441143)),o=t.n(i),a=t(202351),u=t(418705),s=t(945460),c=t(971402),l=t(153686),f=t(19585),d=t(112897),b=t(351330),p=t(907582),h=t(703790),E=t(944522),g=t(809210),M=t(784426),y=t(736818),O=t(5544),_=t(473903),j=t(434651),m=t(206789),v=t(889231),S=t(813869),L=t(33014),Z=t(473708);var A=t(440997),I=t(336194),x=t(201459),P=t(848422),N=t(873936),w=t(998918),G=t(9430),T=t(531441),R=t(2590),C=t(882090),D=t.n(C);function k(e,n,t,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){t(e);return}u.done?n(s):Promise.resolve(s).then(r,i)}function U(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){k(o,r,i,a,u,"next",e)}function u(e){k(o,r,i,a,u,"throw",e)}a(void 0)}))}}function B(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t
;return e}function V(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var H=function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break
;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function Y(){return[{setting:R.bL.ALL_MESSAGES,label:Z.Z.Messages.FORM_LABEL_ALL_MESSAGES},{setting:R.bL.ONLY_MENTIONS,label:Z.Z.Messages.FORM_LABEL_ONLY_MENTIONS.format()},{setting:R.bL.NO_MESSAGES,label:Z.Z.Messages.FORM_LABEL_NOTHING}]}function F(e){var n,i,o=function(e){var n=function(n){x.Z.updateGuildNotificationSettings(e.id,n)},t=(0,a.cj)([G.Z],(function(){return{suppressEveryone:G.Z.isSuppressEveryoneEnabled(e.id),
suppressRoles:G.Z.isSuppressRolesEnabled(e.id),mobilePush:G.Z.isMobilePushEnabled(e.id),messageNotifications:G.Z.getMessageNotifications(e.id),notifyHighlights:G.Z.getNotifyHighlights(e.id),isGuildUnreadsEnabled:G.Z.isGuildUnreadSettingEnabled(e.id)}}),[e.id]),i=t.suppressEveryone,o=t.suppressRoles,u=t.mobilePush,c=t.messageNotifications,l=t.notifyHighlights,f=t.isGuildUnreadsEnabled,d=l===R.gLR.DISABLED,b=(0,P.Z)(e.id),p=(0,w.RX)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.MenuGroup,{children:Y().map((function(e){var t=e.setting,i=e.label;return(0,r.jsx)(s.MenuRadioItem,{group:"guild-notifications",id:"".concat(t),label:i,action:function(){return n({message_notifications:t})},checked:t===c},t)}))}),(0,r.jsxs)(s.MenuGroup,{children:[p&&(0,r.jsx)(s.MenuCheckboxItem,{id:"enable-unread-settings",label:(0,r.jsxs)(r.Fragment,{children:[Z.Z.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN,(0,r.jsx)(T.IG,{text:Z.Z.Messages.BETA,color:I.Z.unsafe_rawColors.BRAND_500.css,
className:D().betaBadge})]}),action:function(){(0,N.EQ)(e.id,!f)},checked:f}),(0,r.jsx)(s.MenuCheckboxItem,{id:"suppress-everyone",label:Z.Z.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),action:function(){return n({suppress_everyone:!i})},checked:i}),(0,r.jsx)(s.MenuCheckboxItem,{id:"suppress-roles",label:Z.Z.Messages.FORM_LABEL_SUPPRESS_ROLES,action:function(){return n({suppress_roles:!o})},checked:o}),(0,r.jsx)(s.MenuCheckboxItem,{id:"suppress-highlights",label:Z.Z.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,action:function(){n({notify_highlights:d?R.gLR.ENABLED:R.gLR.DISABLED})},checked:d}),b]}),(0,r.jsx)(s.MenuGroup,{children:(0,r.jsx)(s.MenuCheckboxItem,{id:"mobile-push",label:Z.Z.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,action:function(){return n({mobile_push:!u})},checked:u})})]})}(e),u=(0,a.e7)([G.Z],(function(){return G.Z.getMessageNotifications(e.id)}),[e.id]),c=null===(i=null===(n=Y())||void 0===n?void 0:n.find((function(e){return e.setting===u
})))||void 0===i?void 0:i.label;return null!=o?(0,r.jsx)(s.MenuItem,{id:"guild-notifications",label:Z.Z.Messages.NOTIFICATION_SETTINGS,subtext:c,action:function(){return(0,s.openModalLazy)(U((function(){var n,i;return H(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(7528)]).then(t.bind(t,207528))];case 1:n=o.sent(),i=n.default;return[2,function(n){return(0,r.jsx)(i,V(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){B(e,n,t[n])}))}return e}({},n),{guildId:e.id}))}]}}))})))},children:o}):null}var q=t(177179),z=t(682776);var X=t(239265);function K(e){var n=function(n){h.Z.open(e.id,n)},t=(0,a.Wu)([O.ZP],(function(){return O.ZP.getChannels(e.id).SELECTABLE}),[e]),i=function(e){var n=(0,a.cj)([z.Z],(function(){
return{canManageGuild:z.Z.can(R.Plq.MANAGE_GUILD,e),canManageRoles:z.Z.can(R.Plq.MANAGE_ROLES,e),canBanMembers:z.Z.can(R.Plq.BAN_MEMBERS,e),canManageNicknames:z.Z.can(R.Plq.MANAGE_NICKNAMES,e),canCreateEmojisAndStickers:z.Z.can(R.Plq.CREATE_GUILD_EXPRESSIONS,e),canManageEmojisAndStickers:z.Z.can(R.Plq.MANAGE_GUILD_EXPRESSIONS,e),canManageWebhooks:z.Z.can(R.Plq.MANAGE_WEBHOOKS,e),canViewAuditLog:z.Z.can(R.Plq.VIEW_AUDIT_LOG,e)}}),[e]),t=n.canManageGuild,r=n.canManageRoles,i=n.canBanMembers,o=n.canManageNicknames,u=n.canCreateEmojisAndStickers,s=n.canManageEmojisAndStickers,c=n.canManageWebhooks,l=n.canViewAuditLog;return t||r||i||o||u||s||c||l}(e);return __OVERLAY__||!i?null:(0,r.jsx)(s.MenuItem,{id:"guild-settings",label:Z.Z.Messages.SERVER_SETTINGS,action:function(){return n()},children:(0,X.t)(e,t).map((function(t){var i=t.section,o=t.label;if(null==o)return null;switch(i){case R.pNK.DELETE:return null;case R.pNK.COMMUNITY:return(0,r.jsx)(s.MenuItem,{id:i,action:function(){
return n(i)},label:Z.Z.Messages.GUILD_SETTINGS_COMMUNITY},i);case R.pNK.APP_DIRECTORY:return(0,r.jsx)(s.MenuItem,{id:i,action:function(){(0,q.goToAppDirectory)({guildId:e.id,entrypoint:"Guild Settings"})},label:o},i);default:return(0,r.jsx)(s.MenuItem,{id:i,action:function(){return n(i)},label:o},i)}}))})}var W=t(159431),Q=t(753082);function $(e,n,t,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){t(e);return}u.done?n(s):Promise.resolve(s).then(r,i)}function J(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){$(o,r,i,a,u,"next",e)}function u(e){$(o,r,i,a,u,"throw",e)}a(void 0)}))}}function ee(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){ee(e,n,t[n])}))}return e}function te(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var re=function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),
0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function ie(e){var n,i=e.guild,l=e.onSelect,f=e.hideSettings,I=function(){(0,s.openModal)((function(e){return(0,r.jsx)(s.ConfirmModal,te(ne({header:Z.Z.Messages.LEAVE_SERVER_TITLE.format({name:i.name}),confirmText:i.hasFeature(R.oNc.HUB)?Z.Z.Messages.LEAVE_HUB:Z.Z.Messages.LEAVE_SERVER,cancelText:Z.Z.Messages.CANCEL,onConfirm:X},e),{children:(0,
r.jsx)(s.Text,{variant:"text-md/normal",children:i.hasFeature(R.oNc.HUB)?Z.Z.Messages.LEAVE_HUB_BODY.format({name:i.name}):Z.Z.Messages.LEAVE_SERVER_BODY.format({name:i.name})})}))}))},x=i.id,P=O.ZP.getDefaultChannel(x),N=(0,a.e7)([_.default],(function(){var e=_.default.getCurrentUser();o()(null!=e,"GuildContextMenu: user cannot be undefined");return i.isOwner(e)}),[i]),w=(0,Q.Z)({guild:i,source:R.t4x.GUILD_CONTEXT_MENU,channel:P}),G=(0,W.Z)(x),T=(0,A.Z)(i),C=F(i),D=K(i),k=(0,j.Z)(i.id,y.default.getId(),{page:R.ZY5.GUILD_CHANNEL,section:R.jXE.CHAT_USERNAME,object:R.qAy.CONTEXT_MENU_ITEM}),U=(0,m.Z)(i),B=(0,p.Z)(i.id),V=(0,d.Z)({id:i.id,label:Z.Z.Messages.COPY_ID_GUILD}),H=function(e,n){var t=e.id,i=(0,a.e7)([S.Z],(function(){return S.Z.getGuildHasUnreadIgnoreMuted(t)}),[t]);return(0,r.jsx)(s.MenuItem,{id:"mark-guild-read",label:Z.Z.Messages.MARK_AS_READ,icon:void 0,action:function(){return(0,L.Z)([t],n.section)},disabled:!i})}(i,{section:R.jXE.GUILD_LIST}),Y=(0,g.Z)(i.id),q=(0,
v.Z)(i.id),z=i.hasFeature(R.oNc.HUB),X=(n=J((function(){var e;return re(this,(function(n){switch(n.label){case 0:e=E.Z.isLurking(x);return[4,h.Z.leaveGuild(x)];case 1:n.sent();e?(0,M.uL)(R.Z5c.GUILD_DISCOVERY):(0,b.un)(u.z$.GUILD_LEAVE_FEEDBACK)||(0,s.openModalLazy)(J((function(){var e,n;return re(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(6578)]).then(t.bind(t,706578))];case 1:e=o.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,te(ne({},e),{guildId:x,guildName:i.name}))}]}}))})));return[2]}}))})),function(){return n.apply(this,arguments)});return z?(0,r.jsxs)(s.Menu,{navId:"guild-context",onClose:c.Zy,"aria-label":Z.Z.Messages.GUILD_ACTIONS_MENU_LABEL,onSelect:l,children:[(0,r.jsxs)(s.MenuGroup,{children:[w,(0,r.jsx)(s.MenuItem,{id:"privacy",label:Z.Z.Messages.HUB_PRIVACY_SETTINGS,action:function(){return(0,s.openModalLazy)(J((function(){var e,n;return re(this,(function(o){switch(o.label){case 0:
return[4,Promise.all([t.e(40532),t.e(24561)]).then(t.bind(t,124561))];case 1:e=o.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,te(ne({},e),{guild:i}))}]}}))})))}}),k]}),N?null:(0,r.jsx)(s.MenuGroup,{children:(0,r.jsx)(s.MenuItem,{id:"leave-guild",label:Z.Z.Messages.LEAVE_HUB,action:I,color:"danger"})}),(0,r.jsx)(s.MenuGroup,{children:V})]}):(0,r.jsxs)(s.Menu,{navId:"guild-context",onClose:c.Zy,"aria-label":Z.Z.Messages.GUILD_ACTIONS_MENU_LABEL,onSelect:l,children:[(0,r.jsx)(s.MenuGroup,{children:H}),(0,r.jsx)(s.MenuGroup,{children:w}),(0,r.jsxs)(s.MenuGroup,{children:[T,__OVERLAY__?null:C,G,Y]}),(0,r.jsxs)(s.MenuGroup,{children:[f?null:D,__OVERLAY__?null:(0,r.jsx)(s.MenuItem,{id:"privacy",label:Z.Z.Messages.PRIVACY_SETTINGS,action:function(){return(0,s.openModalLazy)(J((function(){var e,n;return re(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(24561)]).then(t.bind(t,124561))];case 1:e=o.sent(),n=e.default;return[2,function(e){return(0,
r.jsx)(n,te(ne({},e),{guild:i}))}]}}))})))}}),k]}),(0,r.jsxs)(s.MenuGroup,{children:[U,B]}),(0,r.jsxs)(s.MenuGroup,{children:[q,!N&&(0,r.jsx)(s.MenuItem,{id:"leave-guild",label:Z.Z.Messages.LEAVE_SERVER,action:I,color:"danger"})]}),(0,r.jsx)(s.MenuGroup,{children:V})]})}function oe(e){var n=(0,f.Z)(l.Z.CONTEXT_MENU).AnalyticsLocationProvider;return(0,r.jsx)(n,{children:(0,r.jsx)(ie,ne({},e))})}},206789:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(785893),i=(t(667294),t(202351)),o=t(945460),a=t(682776),u=t(2590),s=t(485911),c=t(473708);function l(e,n,t,r,i,o,a){try{var u=e[o](a),s=u.value}catch(e){t(e);return}u.done?n(s):Promise.resolve(s).then(r,i)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){l(o,r,i,a,u,"next",e)}function u(e){l(o,r,i,a,u,"throw",e)}a(void 0)}))}}function d(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function b(e){
for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){d(e,n,t[n])}))}return e}function p(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}var h=function(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;(r=0,i)&&(o=[2&o[0],i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:a.label++;return{value:o[1],done:!1};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}i[2]&&a.ops.pop();a.trys.pop();continue}o=n.call(e,a)}catch(e){o=[6,e];r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function E(e){var n=(0,i.e7)([a.Z],(function(){return a.Z.can(u.Plq.MANAGE_CHANNELS,e)}));return __OVERLAY__?null:e.id===s._?(0,r.jsx)(r.Fragment,{
children:(0,r.jsx)(o.MenuItem,{id:"create-category",label:c.Z.Messages.CREATE_CATEGORY,action:function(){return(0,o.openModalLazy)(f((function(){var e,n;return h(this,(function(i){switch(i.label){case 0:return[4,Promise.all([t.e(40532),t.e(84680)]).then(t.bind(t,684680))];case 1:e=i.sent(),n=e.default;return[2,function(e){return(0,r.jsx)(n,b({},e))}]}}))})))}})}):n?[(0,r.jsx)(o.MenuItem,{id:"create-channel",label:c.Z.Messages.CREATE_CHANNEL,action:function(){return(0,o.openModalLazy)(f((function(){var n,i;return h(this,(function(o){switch(o.label){case 0:return[4,Promise.all([t.e(40532),t.e(57645)]).then(t.bind(t,957645))];case 1:n=o.sent(),i=n.default;return[2,function(n){return(0,r.jsx)(i,p(b({},n),{channelType:u.d4z.GUILD_TEXT,guildId:e.id}))}]}}))})))}},"create-channel"),(0,r.jsx)(o.MenuItem,{id:"create-category",label:c.Z.Messages.CREATE_CATEGORY,action:function(){return(0,o.openModalLazy)(f((function(){var n,i;return h(this,(function(o){switch(o.label){case 0:
return[4,Promise.all([t.e(40532),t.e(57645)]).then(t.bind(t,957645))];case 1:n=o.sent(),i=n.default;return[2,function(n){return(0,r.jsx)(i,p(b({},n),{channelType:u.d4z.GUILD_CATEGORY,guildId:e.id}))}]}}))})))}},"create-category")]:null}},159431:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(785893),i=(t(667294),t(202351)),o=t(945460),a=t(77705),u=t(9430),s=t(473708);function c(e){var n=(0,i.e7)([u.Z],(function(){return u.Z.isGuildCollapsed(e)}),[e]);return(0,r.jsx)(o.MenuCheckboxItem,{id:"hide-muted-channels",label:s.Z.Messages.HIDE_MUTED_CHANNELS,action:function(){return a.Z.toggleCollapseGuild(e)},checked:n})}},848422:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(785893),i=(t(667294),t(202351)),o=t(945460),a=t(201459),u=t(9430),s=t(473708);function c(e){var n=(0,i.e7)([u.Z],(function(){return u.Z.isMuteScheduledEventsEnabled(e)}),[e]);return(0,r.jsx)(o.MenuCheckboxItem,{id:"mute-events",label:s.Z.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,action:function(){return t={mute_scheduled_events:!n},
void a.Z.updateGuildNotificationSettings(e,t);var t},checked:n})}}}]);
//# sourceMappingURL=aae593398f4f68124dff.js.map