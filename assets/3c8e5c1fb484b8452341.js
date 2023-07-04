"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[71042],{871042:(e,n,t)=>{t.r(n);t.d(n,{default:()=>X});var r=t(785893),a=t(667294),o=t(496486),i=t(202351),u=t(970168),l=t(945460),s=t(327499),c=t(118442),d=t(968449),f=t(917019),g=t(567403),m=t(968696),S=t(441143),v=t.n(S),h=t(842227),T=t(650332),C=t(736818),p=t(61209),y=t(27851),b=t(21372),I=t(840922),A=t(107218),E=t(473903),x=200,_=200,M=t(449518);function D(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function O(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function U(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){var n;e.rowType===M.aC.USER?n={type:T.Fj.USER,label:e.name,avatar:e.avatarURL}:e.rowType===M.aC.GUILD&&(n={type:T.Fj.GUILD,label:e.name,guild:e.guild});v()(null!=n,"RowData must be a guild or a user");return{display:n,row:e}}function N(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0},t=(0,i.Wu)([g.Z,y.Z],(function(){var t=[];e.forEach((function(e){var r,a=g.Z.getGuild(e),o=null!==(r=y.Z.getMemberCount(e))&&void 0!==r?r:x;null!=a&&o<x&&(null==n?void 0:n(a.name))&&t.push(a)}));return t}),[e,n]);return t}function G(e){
var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0},t=N(e,n),r=a.useMemo((function(){return t.map((function(e){return{rowType:M.aC.GUILD,name:e.name,id:e.id,disabled:!1,guild:e,key:"".concat(M.aC.GUILD,":").concat(e.id)}}))}),[t]);return r}function j(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e.filter((function(e){return null!=e&&(null==n?void 0:n(e.username))})).map((function(e){return{rowType:M.aC.USER,name:e.username,id:e.id,disabled:t&&I.Z.isFriend(e.id),avatarURL:e.getAvatarURL(null,24),key:"".concat(M.aC.USER,":").concat(e.id),userTag:e.discriminator}}))}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!0},n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=(0,i.Wu)([I.Z],(function(){return I.Z.getFriendIDs()})),a=new Set(r),o=N(n);o.forEach((function(e){
b.ZP.getMemberIds(e.id).forEach((function(e){a.has(e)||a.add(e)}))}));var u=(0,i.Wu)([E.default],(function(){return U(a).map((function(e){return E.default.getUser(e)}))}),[r]),l=u.filter((function(e){return null!=e})).sort((function(e,n){var t=p.Z.getChannel(p.Z.getDMFromUserId(null==e?void 0:e.id)),r=p.Z.getChannel(p.Z.getDMFromUserId(null==n?void 0:n.id));return h.default.compare(null==t?void 0:t.lastMessageId,null==r?void 0:r.lastMessageId)>0?-1:1}));return j(l,e,t)}var Z=t(294184),L=t.n(Z),k=t(377463),B=t(58838),F=t(473708),P=t(704567),H=t.n(P);function q(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function Q(e){var n=e.selectedTags,t=e.title,a=e.hintText,o=e.placeholderText,i=e.expanded,u=e.setExpanded,s=e.users,d=e.guilds,f=e.query,g=e.maxCount,m=e.onQueryChange,S=e.onClickRow,v=e.onRemoveTag;return(0,r.jsx)(l.Collapsible,{className:H().collapsible,isExpanded:i,collapsibleContent:(0,r.jsx)("div",{
className:L()(H().collapsibleContent,q({},H().visible,i)),children:(0,r.jsx)(c.Z,{listClassName:H().list,pendingAdditions:n,query:f,onQueryChange:m,onClickRow:S,onRemovePendingAddition:v,users:s,guilds:d,renderEmptyText:function(e){return F.Z.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_RESULT.format({query:e})},hintText:a,placeholderText:o,disabledText:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION,maxCount:g})}),children:function(e){var n=e.onClick;return(0,r.jsxs)(l.Clickable,{className:H().content,onClick:function(e){u(!i);n(e)},children:[(0,r.jsx)(l.Heading,{variant:"text-sm/normal",children:t}),i?(0,r.jsx)(B.Z,{}):(0,r.jsx)(k.Z,{})]})}})}var W=t(314433),V=t.n(W);function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function J(e){for(var n=1;n<arguments.length;n++){
var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){z(e,n,t[n])}))}return e}function K(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(r=t.next()).done);i=!0){o.push(r.value);if(n&&o.length===n)break}}catch(e){u=!0;a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e){var n=e.headerText,t=void 0===n?F.Z.Messages.BROADCASTING_SETTINGS:n,S=e.buttonCTA,v=void 0===S?F.Z.Messages.SAVE:S,h=e.bodyText,T=e.transitionState,p=e.onClose,I=e.onSave,D=function(e){$(e)},U=function(e,n){var t=(0,c.G)(n);H((function(r){var a=J({},r);a[e]=J({},a[e]);t in a[e]?delete a[e][t]:a[e][t]=R(n);return a}))},Z=function(e,n){H((function(t){var r=J({},t);r[e]=J({},r[e]);delete r[e][n];return r}))},L=function(){var e=new Set,n=new Set;Object.values(P[M.aC.USER]).forEach((function(e){var t=e.row;return n.add(t.id)}));Object.values(P[M.aC.GUILD]).forEach((function(n){var t=n.row;return e.add(t.id)}));var t=function(e){var n,t=C.default.getId(),r=e;r.length>_&&(r=r.slice(0,_));return r.filter((function(e){return b.ZP.isMember(e,t)&&(null!==(n=y.Z.getMemberCount(e))&&void 0!==n?n:x)<x}))}(Array.from(e))
;return[t,function(e){var n=e;n.length>10&&(n=n.slice(0,10));return n}(Array.from(n))]},k=function(){var e,n=d.MI.useSetting(),t=d.GA.useSetting(),r={},a={};G(n).forEach((function(e){var n=(0,c.G)(e);r[n]=R(e)}));t.length>0&&j(t.map((function(e){return E.default.getUser(e)})).filter((function(e){return null!=e}))).map((function(e){var n=(0,c.G)(e);a[n]=R(e)}));return O(e={},M.aC.GUILD,r),O(e,M.aC.USER,a),e}(),B=K(a.useState(k),2),P=B[0],H=B[1],q=K(a.useState(""),2),W=q[0],$=q[1],z=Boolean(d.Uc.useSetting()),X=K(a.useState(z),2),Y=X[0],ee=X[1],ne=K(a.useState(!1),2),te=ne[0],re=ne[1],ae=K(a.useState(!1),2),oe=ae[0],ie=ae[1],ue=a.useMemo((function(){return z!==Y||!(0,o.isEqual)(k,P)}),[z,Y,k,P]),le=!ue&&null==I,se=a.useMemo((function(){return"@"===W.trim().charAt(0)}),[W]),ce=N((0,i.e7)([g.Z],(function(){return g.Z.getGuildIds()}))),de=a.useMemo((function(){return ce.map((function(e){return e.id}))}),[ce]),fe=K(function(e){
var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0},t=arguments.length>2?arguments[2]:void 0,r=(0,i.e7)([A.Z],(function(){return A.Z.getFlattenedGuildIds()})),a=G(r,n);return[w(n,r,t),e?[]:a]}(se,(function(e){var n=function(e,n){return n?e.slice(1):e}(W.trim(),se);return new RegExp("".concat(m.Z.escape(n)),"i").test(e)}),Y),2),ge=fe[0],me=fe[1];a.useEffect((function(){s.Z.requestMembersById(de,[])}),[de]);return(0,r.jsxs)(l.ModalRoot,{transitionState:T,children:[(0,r.jsx)(l.Heading,{variant:"heading-xl/semibold",className:V().header,children:t}),(0,r.jsx)(l.ModalCloseButton,{onClick:p,className:V().close}),(0,r.jsxs)(l.ModalContent,{className:V().content,paddingFix:!1,children:[null!=h&&(0,r.jsx)(l.Text,{variant:"text-sm/normal",color:"header-secondary",className:V().description,children:h}),(0,r.jsx)(l.FormTitle,{tag:l.FormTitleTags.H5,children:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE}),(0,r.jsxs)("div",{className:V().switch,children:[(0,
r.jsx)(l.Text,{variant:"text-sm/normal",children:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_FRIENDS}),(0,r.jsx)(l.Switch,{checked:Y,onChange:function(e){ee(e)}})]}),(0,r.jsx)(Q,{selectedTags:P[M.aC.USER],query:W,onQueryChange:D,onClickRow:function(e){return U(M.aC.USER,e)},onRemoveTag:function(e){return Z(M.aC.USER,e)},title:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS,hintText:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT.format({count:10}),placeholderText:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS,users:ge,expanded:te,setExpanded:function(e){D("");re(e);ie(!1)},maxCount:10}),(0,r.jsx)(Q,{selectedTags:P[M.aC.GUILD],query:W,onQueryChange:D,onClickRow:function(e){return U(M.aC.GUILD,e)},onRemoveTag:function(e){return Z(M.aC.GUILD,e)},title:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS,hintText:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT.format({count:_}),
placeholderText:F.Z.Messages.BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS,guilds:me,expanded:oe,setExpanded:function(e){D("");ie(e);re(!1)},maxCount:_})]}),(0,r.jsx)(l.ModalFooter,{children:(0,r.jsx)(l.Button,{disabled:le,onClick:function(){if(!le)if(ue){var e=K(L(),2),n=e[0],t=e[1];f.hW.updateAsync("broadcast",(function(e){e.allowedGuildIds=n;e.allowedUserIds=t;e.allowFriends=u.D5.create({value:Y});null==I||I();p()}),f.fy.INFREQUENT_USER_ACTION)}else{null==I||I();p()}},children:v})})]})}}}]);
//# sourceMappingURL=3c8e5c1fb484b8452341.js.map