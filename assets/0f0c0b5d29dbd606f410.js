(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[35650],{96972:(e,n,t)=>{e.exports=t.p+"b36c705f790dad253981f1893085015a.svg"},540579:(e,n,t)=>{e.exports=t.p+"36c9a2fb7d0593a581a92373121c2848.svg"},335650:(e,n,t)=>{"use strict";t.r(n);t.d(n,{default:()=>B});var r=t(785893),i=t(667294),s=t(294184),a=t.n(s),o=t(202351),l=t(945460),c=t(657539),u=t(773011),d=t(239813),h=t(978868),f=t(64234),m=t(382060),g=t(840922),x=t(464187),v=t(473903),S=t(327860),C=t(190186),j=t(748322),I=t(568605),p=t(72580),L=t(473708),N=t(358148),y=t.n(N),Z=t(96972),E=t.n(Z),w=t(540579),A=t.n(w);function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function R(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,s=[],a=!0,o=!1;try{for(t=t.call(e);!(a=(r=t.next()).done);a=!0){s.push(r.value);if(n&&s.length===n)break}}catch(e){
o=!0;i=e}finally{try{a||null==t.return||t.return()}finally{if(o)throw i}}return s}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e){var n=e.channel,t=e.ChannelIcon,i=e.selectedChannelId,s=e.setSelectedChannelId,a=(0,u.ZP)(n);return(0,r.jsxs)(l.Clickable,{className:y().channelRow,onClick:function(){return s(n.id)},children:[null!=i&&i===n.id?(0,r.jsx)(I.Z,{className:y().radioIcon}):(0,r.jsx)(j.Z,{className:y().radioIcon}),(0,r.jsx)(t,{className:y().icon,width:16,height:16}),(0,r.jsx)(l.Text,{variant:"text-md/medium",color:"interactive-active",
children:a})]})}function b(e){var n=e.guildId,t=(0,o.cj)([h.Z],(function(){return h.Z.getGuildWithoutChangingCommunityRows(n)})).guildChannels,s=R(i.useState(null),2),c=s[0],u=s[1],f=i.useMemo((function(){var e=[];t.forEachChannel((function(n){((0,m.r8)(n.type)||(0,m.bw)(n.type))&&e.push(n)}));return e}),[t]);if(0===f.length)return null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:a()(y().divider,y().bottomDivider)}),(0,r.jsx)(l.Text,{variant:"eyebrow",color:"interactive-normal",className:y().contentPadding,children:L.Z.Messages.CLIP_SHARE_SELECT_CHANNEL}),(0,r.jsx)(l.List,{sections:[f.length],sectionHeight:0,renderRow:function(e){var n=e.section,t=e.row;if(n>0)return null;var i=f[t],s=(0,d.KS)(i);return null==s?null:(0,r.jsx)(_,{channel:i,ChannelIcon:s,selectedChannelId:c,setSelectedChannelId:u},i.id)},rowHeight:function(e,n){return e>0?0:null!=f[n]?56:0},renderSection:function(){return null},className:a()(y().channelList,y().contentPadding),fade:!0})]})}
function T(e){var n=e.friends,t=e.searchQuery,s=i.useMemo((function(){return 0===t.length?n:n.filter((function(e){return e.username.toLowerCase().includes(t.toLowerCase())}))}),[n,t]),u=(0,o.e7)([f.Z],(function(){return f.Z.theme}));if(0===s.length)return(0,r.jsxs)(S.ZP,{theme:u,className:y().emptyStateContainer,children:[(0,r.jsx)(S.ZP.Image,{width:415,height:75,lightSrc:A(),darkSrc:E()}),(0,r.jsx)(S.ZP.Text,{note:L.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND})]});return(0,r.jsx)(l.List,{sections:[s.length],sectionHeight:0,renderRow:function(e){var n=e.section,t=e.row;if(n>0)return null;var i=s[t],a=s[t].username;return(0,r.jsxs)("div",{className:y().userRow,children:[(0,r.jsx)(c.Z,{user:i}),(0,r.jsx)(l.Text,{className:y().username,variant:"text-md/normal",children:a}),(0,r.jsx)(l.Button,{className:y().friendShareButton,look:l.ButtonLooks.OUTLINED,size:l.ButtonSizes.SMALL,color:l.ButtonColors.BRAND,children:(0,r.jsx)(l.Text,{variant:"text-sm/medium",children:L.Z.Messages.SHARE})})]
},i.id)},rowHeight:function(e,n){return e>0?0:null!=s[n]?52:0},renderSection:function(){return null},className:a()(y().friendsList,y().contentPadding),fade:!0})}function B(e){var n=e.transitionState,t=e.onClose,s=R(i.useState(""),2),c=s[0],u=s[1],d=(0,o.Wu)([g.Z],(function(){return g.Z.getFriendIDs()})),h=(0,o.Wu)([v.default],(function(){return d.map((function(e){return v.default.getUser(e)})).filter(p.lm)}),[d]),f=(0,o.e7)([x.Z],(function(){return x.Z.getLastSelectedGuildId()}));return(0,r.jsxs)(l.ModalRoot,{size:l.ModalSize.SMALL,transitionState:n,children:[(0,r.jsx)(l.Heading,{className:a()(y().title,y().contentPadding),variant:"heading-lg/semibold",color:"interactive-active",children:L.Z.Messages.CLIP_SHARE_MODAL_TITLE}),(0,r.jsx)(l.Text,{variant:"text-md/normal",color:"text-normal",className:a()(y().subtitle,y().contentPadding),children:L.Z.Messages.CLIP_SHARE_MODAL_SUBTITLE}),(0,r.jsx)(C.Z,{className:y().searchBar,query:c,onChange:u,size:C.Z.Sizes.MEDIUM,onClear:function(){u("")
},placeholder:L.Z.Messages.INVITE_SEARCH_FOR_FRIENDS}),(0,r.jsx)("div",{className:a()(y().divider,y().topDivider)}),(0,r.jsx)(T,{searchQuery:c,friends:h}),null!=f&&(0,r.jsx)(b,{guildId:f}),(0,r.jsxs)(l.ModalFooter,{children:[(0,r.jsx)(l.Button,{color:l.Button.Colors.BRAND,children:L.Z.Messages.CLIPS_EDIT_SHARE_CLIP}),(0,r.jsx)(l.Button,{look:l.ButtonLooks.LINK,onClick:t,color:l.ButtonColors.PRIMARY,children:L.Z.Messages.BACK})]})]})}}}]);
//# sourceMappingURL=0f0c0b5d29dbd606f410.js.map