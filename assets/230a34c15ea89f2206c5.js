"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[10848,85572],{112897:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(785893),o=(t(667294),t(945460)),i=t(968449),u=t(763933),l=t(691797);function s(e){var n=e.id,t=e.label,s=e.onSuccess,c=e.shiftId,a=e.showIconFirst,d=i.Sb.useSetting();if(__OVERLAY__||!d||!l.wS)return null;var f="devmode-copy-id-".concat(n);return(0,r.jsx)(o.MenuItem,{id:f,label:t,action:function(e){var t=null!=c&&e.shiftKey?c:n;(0,l.JG)(t);null==s||s()},icon:u.Z,showIconFirst:a},f)}},499219:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(202351),o=t(61209),i=t(715107);function u(){return(0,r.e7)([i.Z,o.Z],(function(){var e=i.Z.getVoiceChannelId();if(null!=e){var n=o.Z.getChannel(e);if(null==n?void 0:n.isGuildStageVoice())return n}return null}))}},575351:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(785893),o=(t(667294),t(202351)),i=t(945460),u=t(567403),l=t(473903),s=t(407561),c=t(771575),a=t(162723),d=t(933022),f=t(736818),O=t(715107),b=t(525261)
;var Z=t(499219),g=t(473708);function E(e){var n,t=(0,Z.Z)(),E=null==t?void 0:t.id,_=null==t?void 0:t.guild_id,p=(0,o.e7)([u.Z],(function(){return u.Z.getGuild(_)}),[_]),v=(0,o.e7)([s.Z],(function(){return null!=E?s.Z.getVoiceStateForChannel(E,e.id):null}),[E,e.id]),M=(null===(n=l.default.getCurrentUser())||void 0===n?void 0:n.id)===e.id,S=function(){var e=(0,o.e7)([O.Z],(function(){return O.Z.getVoiceChannelId()})),n=(0,o.e7)([f.default],(function(){return f.default.getId()}));return(0,b.ZP)(n,e)===b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK}(),h=(0,o.e7)([d.ZP],(function(){return d.ZP.getPermissionsForUser(e.id,E)}),[E,e.id]),j=(0,a.B)(E);if(null==t||null==p||null==v)return null;if(h.speaker)return null;var C=function(){M?(0,c.RK)(t,!1):(0,c._0)(t,e.id)};return j?(0,r.jsx)(i.MenuItem,{id:"invite-speaker",label:M?g.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER:g.Z.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,action:C}):S&&M?(0,r.jsx)(i.MenuItem,{id:"invite-speaker",
label:g.Z.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,action:C}):null}},810848:(e,n,t)=>{t.r(n);t.d(n,{default:()=>C});var r=t(785893),o=(t(667294),t(945460)),i=t(971402),u=t(343639),l=t(567678),s=t(82055),c=t(153686),a=t(112897),d=t(575351),f=t(662851),O=t(343315),b=t(171384),Z=t(836448),g=t(441738),E=t(578142),_=t(93439),p=t(598955),v=t(536130),M=t(234617),S=t(394212),h=t(2590),j=t(473708);const C=(0,l.Z)((0,u.Z)((function(e){var n=e.user,t=e.showMediaItems,u=void 0!==t&&t,l=e.mediaEngineContext,c=e.onSelect,h=(0,v.Z)(n.id),C=(0,_.Z)(n.id),m=(0,g.Z)(n),y=(0,b.Z)({user:n}),A=(0,O.Z)(n),N=(0,S.Z)(n.id),x=(0,M.Z)(n.id),P=(0,p.Z)(n.id,l),I=(0,E.Z)(n),U=(0,s.Z)(null,n),D=(0,f.Z)(n),T=(0,Z.Z)(n),w=(0,a.Z)({id:n.id,label:j.Z.Messages.COPY_ID_USER}),L=(0,d.Z)(n),V=n.isNonUserBot();return(0,r.jsxs)(o.Menu,{navId:"user-context",onClose:i.Zy,"aria-label":j.Z.Messages.USER_ACTIONS_MENU_LABEL,onSelect:c,children:[!V&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.MenuGroup,{children:L}),(0,
r.jsxs)(o.MenuGroup,{children:[h,C,m,y,A,N]}),u&&(0,r.jsx)(o.MenuGroup,{children:x}),(0,r.jsx)(o.MenuGroup,{children:U}),(0,r.jsxs)(o.MenuGroup,{children:[u&&P,I,D,T]})]}),(0,r.jsx)(o.MenuGroup,{children:w})]})}),{object:h.qAy.CONTEXT_MENU}),[c.Z.CONTEXT_MENU,c.Z.USER_GENERIC_MENU])},93439:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(785893),o=(t(667294),t(945460)),i=t(761953),u=t(735885),l=t(736818),s=t(2590),c=t(473708);function a(e,n){var t=l.default.getId(),a=n===s.IlC.POPOUT;return t===e||a?null:(0,r.jsx)(o.MenuItem,{id:"message-user",label:c.Z.Messages.USER_POPOUT_MESSAGE,action:function(){i.Z.openPrivateChannel(e);(0,u.xf)()}})}},598955:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(785893),o=(t(667294),t(202351)),i=t(945460),u=t(105783),l=t(656645),s=t(656907),c=t(604945),a=t(69085),d=t(464187),f=t(473903),O=t(265367),b=t(652591),Z=t(2590),g=t(36256),E=t(473708),_=t(696249),p=t.n(_);function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.Yn.DEFAULT,t=(0,
o.e7)([f.default],(function(){var n;return(null===(n=f.default.getCurrentUser())||void 0===n?void 0:n.id)===e})),_=(0,o.e7)([s.Z],(function(){return s.Z.isLocalSoundboardMuted(e)})),v=(0,o.cj)([c.Z],(function(){return t?{muted:c.Z.isSelfMute(n),deafened:c.Z.isSelfDeaf(n)}:{muted:c.Z.isLocalMute(e,n),localVideoDisabled:c.Z.isLocalVideoDisabled(e,n),localVideoAutoDisabled:c.Z.isLocalVideoAutoDisabled(e,n)}}),[t]),M=v.muted,S=v.deafened,h=void 0!==S&&S,j=v.localVideoDisabled,C=void 0!==j&&j,m=v.localVideoAutoDisabled,y=void 0!==m&&m,A=c.Z.supports(g.AN.DISABLE_VIDEO)&&!t?(0,r.jsx)(i.MenuCheckboxItem,{id:"disable-video",label:E.Z.Messages.DISABLE_VIDEO,action:function(){y?u.Z.show({title:E.Z.Messages.UNSTABLE_CONNECTION,body:E.Z.Messages.UNSTABLE_CONNECTION_REASON_2,confirmText:E.Z.Messages.TURN_ON_VIDEO_ANYWAY,cancelText:E.Z.Messages.LEAVE_VIDEO_OFF,onConfirm:function(){return l.Z.setDisableLocalVideo(e,!1)}}):l.Z.setDisableLocalVideo(e,!C,n)},checked:C,subtext:y?(0,r.jsxs)("div",{
className:p().videoPaused,children:[(0,r.jsx)(O.Z,{width:12,className:p().warningCircle}),E.Z.Messages.UNSTABLE_CONNECTION]}):null},"disable-video"):null,N=t?null:(0,r.jsx)(i.MenuCheckboxItem,{id:"soundboard-sound-mute",label:E.Z.Messages.MUTE_SOUNDBOARD,action:function(){var t=a.Z.getRTCConnection();b.default.track(Z.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED,{guild_id:d.Z.getGuildId(),target_user_id:e,media_session_id:null==t?void 0:t.getMediaSessionId(),parent_media_session_id:null==t?void 0:t.parentMediaSessionId,mute_soundboard:!_});l.Z.toggleLocalSoundboardMute(e,n)},checked:_},"soundboard-sound-mute");return t?[(0,r.jsx)(i.MenuCheckboxItem,{id:"mute",label:E.Z.Messages.SOUND_MUTE,action:function(){return l.Z.toggleSelfMute({context:n})},checked:M},"self-mute"),(0,r.jsx)(i.MenuCheckboxItem,{id:"deafen",label:E.Z.Messages.DEAFEN,action:function(){return l.Z.toggleSelfDeaf({context:n})},checked:h},"self-deafen"),A]:[(0,r.jsx)(i.MenuCheckboxItem,{id:"mute",
label:E.Z.Messages.SOUND_MUTE,action:function(){return l.Z.toggleLocalMute(e,n)},checked:M},"self-mute"),N,A]}},234617:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(785893),o=(t(667294),t(202351)),i=t(945460),u=t(656645),l=t(604945),s=t(473903),c=t(615457),a=t(120415),d=t(36256),f=t(473708);function O(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){O(e,n,t[n])}))}return e}function Z(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){
return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function g(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.Yn.DEFAULT,O=(0,o.e7)([l.Z],(function(){return l.Z.getLocalVolume(e,t)}),[e,t]),g=e===(null===(n=s.default.getCurrentUser())||void 0===n?void 0:n.id),E=t===d.Yn.STREAM;return g?null:(0,r.jsx)(i.MenuControlItem,{id:"user-volume",label:E?f.Z.Messages.STREAM_VOLUME:f.Z.Messages.USER_VOLUME,control:function(n,o){return(0,r.jsx)(i.MenuSliderControl,Z(b({},n),{ref:o,value:(0,c.P)(O),maxValue:a.FB?200:100,onChange:function(n){return u.Z.setLocalVolume(e,(0,c.A)(n),t)},"aria-label":E?f.Z.Messages.STREAM_VOLUME:f.Z.Messages.USER_VOLUME}))}})}},763933:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(785893),o=(t(667294),t(633878));function i(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t
;return e}function u(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||(o[t]=e[t])}return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function s(e){
var n=e.width,t=void 0===n?24:n,s=e.height,c=void 0===s?24:s,a=e.color,d=void 0===a?"currentColor":a,f=e.foreground,O=l(e,["width","height","color","foreground"]);return(0,r.jsx)("svg",u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){i(e,n,t[n])}))}return e}({},(0,o.Z)(O)),{width:t,height:c,viewBox:"0 0 24 24",children:(0,r.jsx)("path",{className:f,fill:d,fillRule:"evenodd",clipRule:"evenodd",
d:"M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"})}))}}}]);
//# sourceMappingURL=230a34c15ea89f2206c5.js.map