"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[55887],{567678:(n,e,a)=>{a.d(e,{Z:()=>o});var c=a(785893),t=(a(667294),a(19585));function r(n,e,a){e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a;return n}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},c=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(a).filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))));c.forEach((function(e){r(n,e,a[e])}))}return n}function o(n,e){return function(a){var r=(0,t.Z)(e).AnalyticsLocationProvider;return(0,c.jsx)(r,{children:(0,c.jsx)(n,s({},a))})}}},455887:(n,e,a)=>{a.r(e);a.d(e,{default:()=>M});var c=a(785893),t=(a(667294),a(945460)),r=a(971402),s=a(735885),o=a(567678),l=a(153686),i=a(112897),u=a(784426),d=a(787301),_=a(473708);const M=(0,o.Z)((function(n){var e=n.channel,a=n.onSelect,o=(0,
d.Z)(e),l=(0,i.Z)({id:e.id,label:_.Z.Messages.COPY_ID_CHANNEL});return(0,c.jsxs)(t.Menu,{navId:"channel-context",onClose:r.Zy,"aria-label":_.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,onSelect:a,children:[(0,c.jsxs)(t.MenuGroup,{children:[o,e.isCategory()?null:(0,c.jsx)(t.MenuItem,{id:"jump-to-channel",label:_.Z.Messages.JUMP_TO_CHANNEL,action:function(){(0,u.XU)(e.guild_id,e.id);(0,s.xf)()}})]}),(0,c.jsx)(t.MenuGroup,{children:l})]})}),[l.Z.CONTEXT_MENU,l.Z.CHANNEL_AUDIT_LOG_MENU])},787301:(n,e,a)=>{a.d(e,{Z:()=>u});var c=a(785893),t=(a(667294),a(202351)),r=a(945460),s=a(87127),o=a(682776),l=a(2590),i=a(473708);function u(n){var e=(0,t.cj)([o.Z],(function(){return{canManageChannels:o.Z.can(l.Plq.MANAGE_CHANNELS,n),canManageRoles:o.Z.can(l.Plq.MANAGE_ROLES,n),canManageWebhooks:o.Z.can(l.Plq.MANAGE_WEBHOOKS,n),canAccessChannel:o.Z.can(n.accessPermissions,n)}}),[n]),a=e.canManageChannels,u=e.canManageRoles,d=e.canManageWebhooks,_=e.canAccessChannel;return __OVERLAY__?null:_&&(a||u||d)?(0,
c.jsx)(r.MenuItem,{id:"edit-channel",label:n.type===l.d4z.GUILD_CATEGORY?i.Z.Messages.EDIT_CATEGORY:i.Z.Messages.EDIT_CHANNEL,action:function(){return s.ZP.open(n.id)}}):null}}}]);
//# sourceMappingURL=730662bc193ae74262d5.js.map