"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[24561],{124561:(e,t,i)=>{i.r(t);i.d(t,{default:()=>g});var n=i(785893),r=i(667294),a=i(945460),s=i(243399),l=i(652119),d=i(968449),S=i(348592),u=i(987594),o=i(2590),c=i(473708),T=i(771466),_=i.n(T);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function E(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return I(e,t)}(e)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e){var t,i=e.isGuildRestricted,r=e.handleRestrictedGuildChange,d=e.isGuildActivityRestricted,u=e.handleActivityRestrictedGuildChange,T=e.isGuildActivityJoiningRestricted,I=e.handleActivityJoiningRestrictedGuildChange,E=e.isGuildMessageRequestRestricted,A=e.handleMessageRequestRestrictedGuildChange,g=e.guild,N=e.transitionState,G=e.onClose,h=(0,l.Z)(),R="".concat(c.Z.Messages.PRIVACY_SETTINGS,"—").concat(null!=g?g.toString():"??"),C=g.hasFeature(o.oNc.HUB),m=(0,s.E)(null!==(t=null==g?void 0:g.id)&&void 0!==t?t:"");return(0,n.jsxs)(a.ModalRoot,{transitionState:N,size:a.ModalSize.SMALL,"aria-label":R,children:[(0,n.jsx)(a.ModalHeader,{children:(0,n.jsx)(a.Heading,{variant:"heading-lg/semibold",children:R})}),(0,n.jsxs)(a.ModalContent,{className:_().content,children:[(0,n.jsx)(a.FormItem,{children:(0,n.jsx)(a.FormSwitch,{
value:!i,note:C?c.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC_HUB:c.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES_DESC,onChange:r,hideBorder:!0,children:c.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES})}),(0,n.jsx)(a.FormDivider,{className:_().divider}),!h&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.FormItem,{children:(0,n.jsx)(a.FormSwitch,{value:!E,note:C?c.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC_HUB.format({helpdeskArticle:S.Z.getArticleURL(o.BhN.MESSAGE_REQUESTS)}):c.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS_DESC.format({helpdeskArticle:S.Z.getArticleURL(o.BhN.MESSAGE_REQUESTS)}),onChange:A,disabled:i,hideBorder:!0,children:c.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS})}),(0,n.jsx)(a.FormDivider,{className:_().divider})]}),(0,n.jsx)(a.FormItem,{children:(0,n.jsx)(a.FormSwitch,{value:!d,onChange:u,hideBorder:!0,note:c.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS_DESC.format({helpdeskArticle:S.Z.getArticleURL(o.BhN.ACTIVITY_STATUS_SETTINGS)}),
children:c.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS})}),(0,n.jsx)(a.FormDivider,{className:_().divider}),(0,n.jsx)(a.FormItem,{children:(0,n.jsx)(a.FormSwitch,{value:!T,onChange:I,hideBorder:!0,note:c.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING_DESC.format({helpdeskArticle:S.Z.getArticleURL(o.BhN.ACTIVITY_STATUS_SETTINGS)}),children:c.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING})}),m?(0,n.jsxs)(a.FormItem,{className:_().disclaimer,children:[(0,n.jsx)(a.FormDivider,{className:_().divider}),(0,n.jsx)(a.Text,{color:"header-secondary",variant:"text-sm/normal",children:c.Z.Messages.PRIVACY_SETTINGS_COMMUNITY_GUILDS_DISCLAIMER.format({policyLink:"https://discord.com/safety/360043709612-our-policies"})})]}):null]}),(0,n.jsx)(a.ModalFooter,{children:(0,n.jsx)(a.Button,{onClick:function(){return G()},children:c.Z.Messages.DONE})})]})}function g(e){
var t=e.guild,i=e.transitionState,a=e.onClose,s=t.id,l=d.h2.useSetting().includes(s),S=d.zA.useSetting().includes(s),o=d.SE.useSetting().includes(s),c=d.iH.useSetting().includes(s),T=r.useCallback((function(e){var t=new Set((0,u.YK)());e?t.delete(s):t.add(s);d.h2.updateSetting(Array.from(t))}),[s]),_=r.useCallback((function(e){var t=new Set((0,u._o)());e?t.delete(s):t.add(s);d.SE.updateSetting(E(t))}),[s]),I=r.useCallback((function(e){var t=new Set((0,u.rr)());e?t.delete(s):t.add(s);d.iH.updateSetting(E(t))}),[s]),g=r.useCallback((function(e){var t=new Set((0,u.gl)());e?t.delete(s):t.add(s);d.zA.updateSetting(Array.from(t))}),[s]);return(0,n.jsx)(A,{isGuildRestricted:l,handleRestrictedGuildChange:T,isGuildActivityRestricted:o,handleActivityRestrictedGuildChange:_,isGuildActivityJoiningRestricted:c,handleActivityJoiningRestrictedGuildChange:I,isGuildMessageRequestRestricted:S,handleMessageRequestRestrictedGuildChange:g,guild:t,transitionState:i,onClose:a})}},987594:(e,t,i)=>{i.d(t,{
YK:()=>c,gl:()=>T,_o:()=>_,rr:()=>I,bL:()=>E,$6:()=>A,g0:()=>S,ac:()=>g,xH:()=>N});var n=i(968449),r=i(837067),a=i(567403),s=(i(652591),i(2590)),l=i(473708);function d(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}var S,u,o=864e5*s.eBq;function c(){var e=n.h2.getSetting();0===r.Z.totalUnavailableGuilds&&(e=e.filter((function(e){return null!=a.Z.getGuild(e)})));return e}function T(){var e=n.zA.getSetting();0===r.Z.totalUnavailableGuilds&&(e=e.filter((function(e){return null!=a.Z.getGuild(e)})));return e}function _(){var e=n.SE.getSetting();0===r.Z.totalUnavailableGuilds&&(e=e.filter((function(e){return null!=a.Z.getGuild(e)})));return e}function I(){var e=n.iH.getSetting();0===r.Z.totalUnavailableGuilds&&(e=e.filter((function(e){return null!=a.Z.getGuild(e)})));return e}function E(e){return(e&s.HGf)===s.HGf?{all:!0,mutualFriends:!0,mutualGuilds:!0}:{all:!1,mutualFriends:(e&s.SOq.MUTUAL_FRIENDS)===s.SOq.MUTUAL_FRIENDS,
mutualGuilds:(e&s.SOq.MUTUAL_GUILDS)===s.SOq.MUTUAL_GUILDS}}function A(e,t){return!t.verified||null!=e&&o>Date.now()-new Date(e.created_at).getTime()}!function(e){e[e.UNDECIDED=0]="UNDECIDED";e[e.OPTIN=1]="OPTIN";e[e.OPTOUT=2]="OPTOUT"}(S||(S={}));var g=(d(u={},S.UNDECIDED,void 0),d(u,S.OPTIN,!0),d(u,S.OPTOUT,!1),u);function N(){return[{name:l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,desc:l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,value:S.OPTIN},{name:l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,desc:l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,value:S.OPTOUT},{name:l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,desc:l.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,value:S.UNDECIDED}]}}}]);
//# sourceMappingURL=31d3733f129693c34569.js.map