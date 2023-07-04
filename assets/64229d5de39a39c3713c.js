"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[1025],{101025:(e,t,r)=>{r.r(t);r.d(t,{useGuildFeedHideItem:()=>M,useGuildFeedRemoveItem:()=>_,targetToContext:()=>v,default:()=>w});var n=r(785893),o=(r(667294),r(809784)),c=r(318715),i=r(945460),u=r(971402),s=r(112897),l=r(274903),a=r(979498),f=r(893516),p=r(480657),d=r(736818),O=r(682776),b=r(310246),g=r(809518),E=r(504698),y=r(2590),h=r(473708);function j(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function m(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))
;return e}function M(e,t){return(0,n.jsx)(i.MenuItem,{id:"hide-feed-message",label:h.Z.Messages.GUILD_FEED_HIDE_MESSAGE_ITEM,action:function(r){r.stopPropagation();return(0,E.NO)(e,t)},icon:b.Z,iconProps:{foregroundColor:"currentColor"}})}function P(e,t){t?(0,i.openModal)((function(t){return(0,n.jsx)(i.ConfirmModal,m(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){j(e,t,r[t])}))}return e}({header:h.Z.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_HEADER,confirmText:h.Z.Messages.GUILD_FEED_REMOVE_CONFIRM,cancelText:h.Z.Messages.CANCEL,onConfirm:function(){return(0,E.AT)(e)}},t),{children:(0,n.jsx)(i.Text,{variant:"text-md/normal",children:h.Z.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM_CONFIRM_TEXT})}))})):(0,E.AT)(e)}function _(e,t,r){var o=(0,
c.ZP)([d.default],(function(){return d.default.getId()})),u=(0,c.ZP)([O.Z],(function(){return O.Z.can(y.Plq.MANAGE_MESSAGES,r)}),[r]);if(!(t.author.id===o||u))return null;return(0,n.jsx)(i.MenuItem,{id:"remove-feed-message",label:h.Z.Messages.GUILD_FEED_REMOVE_MESSAGE_ITEM,action:function(t){t.stopPropagation();var r=!0;t.shiftKey&&(r=!1);return P(e,r)},icon:g.Z,iconProps:{foregroundColor:"currentColor"}})}function v(e){for(var t,r,n,c=e;(0,o.k)(c,Node);){(0,o.k)(c,HTMLImageElement)&&null!=c.src&&(r=c.src);if((0,o.k)(c,HTMLAnchorElement)&&null!=c.href){t=c.href;n=c.textContent}c=c.parentNode}return{href:t,src:r,textContent:n}}function w(e){var t=e.channel,r=e.message,o=e.messageItem,c=e.target,d=e.onSelect,O=v(c),b=O.href,g=O.src,E=O.textContent,y=(0,a.Z)(r,t),j=(0,p.Z)(null!=b?b:g,E),m=(0,f.Z)(g),P=(0,s.Z)({id:r.id,label:h.Z.Messages.COPY_ID_MESSAGE,shiftId:"".concat(r.channel_id,"-").concat(r.id)}),w=M(o,t.guild_id),S=_(o,o.message,t),C=(0,l.Z)(r,t,{hoist:!1});return(0,
n.jsxs)(i.Menu,{navId:"message",onClose:u.Zy,"aria-label":h.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,onSelect:d,children:[(0,n.jsxs)(i.MenuGroup,{children:[w,S,C]}),(0,n.jsxs)(i.MenuGroup,{children:[y,m,j,P]})]})}},809518:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(785893),o=(r(667294),r(633878));function c(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}function i(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++){
r=c[n];t.indexOf(r)>=0||(o[r]=e[r])}return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++){r=c[n];t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}return o}function s(e){var t=e.width,r=void 0===t?24:t,s=e.height,l=void 0===s?24:s,a=e.color,f=void 0===a?"currentColor":a,p=e.foreground,d=u(e,["width","height","color","foreground"]);return(0,n.jsxs)("svg",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));n.forEach((function(t){c(e,t,r[t])}))}return e}({},(0,o.Z)(d)),{width:r,height:l,viewBox:"0 0 24 24",fill:"none",children:[(0,n.jsx)("rect",{className:p,x:"2.10049",y:"20.4853",width:"26",height:"2",transform:"rotate(-45 2.10049 20.4853)",fill:f}),(0,n.jsx)("path",{
fillRule:"evenodd",clipRule:"evenodd",d:"M14.169 5.60117L12.5325 4.12835C12.3424 3.95722 12.0537 3.95722 11.8635 4.12835L3.16652 11.9557C2.82591 12.2622 3.04276 12.8273 3.50101 12.8273H5.19803V14.5721L14.169 5.60117ZM5.19803 17.4005L15.6576 6.94095L17.1384 8.27369L10.5848 14.8273H10.198V15.2141L5.25403 20.1581C5.21775 20.0546 5.19803 19.9432 5.19803 19.8273V17.4005ZM7.41324 20.8273H9.19803C9.75031 20.8273 10.198 20.3796 10.198 19.8273V18.0425L7.41324 20.8273ZM13.4132 14.8273H14.198V19.8273C14.198 20.3796 14.6457 20.8273 15.198 20.8273H18.198C18.7503 20.8273 19.198 20.3796 19.198 19.8273V12.8273H20.895C21.3533 12.8273 21.5701 12.2622 21.2295 11.9557L18.6271 9.61347L13.4132 14.8273Z",fill:f})]}))}}}]);
//# sourceMappingURL=64229d5de39a39c3713c.js.map