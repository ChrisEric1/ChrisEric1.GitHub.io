"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[457],{600457:(e,t,r)=>{r.r(t);r.d(t,{default:()=>_});var n=r(785893),s=r(667294),o=r(441143),a=r.n(o),l=r(945460),i=r(963881),c=r(749565),u=r(954160),d=r(719174),m=r(779224),f=r(35854),h=r(500351),C=r(473708),A=r(42274),b=r.n(A);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done);a=!0){o.push(n.value);if(t&&o.length===t)break}}catch(e){l=!0;s=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name)
;if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const _=function(e){var t=e.currentUser,r=e.otherUser,o=e.transitionState,A=e.onClose,E=s.useCallback((function(){A()}),[A]),_=(0,d.Z)(),N=L(s.useState(!1),2),x=N[0],M=N[1],p=s.useCallback((function(){M(!0)}),[]),y=(0,u.G)({onError:p,onSuccess:E}),I=y.acceptLinkRequest,T=y.isAcceptLoading;a()(!_,"FamilyCenterAcceptLinkModal should only be rendered for teens.");return(0,n.jsxs)(l.ModalRoot,{transitionState:o,"aria-label":C.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE,className:b().root,children:[x?(0,n.jsx)(l.FormErrorBlock,{className:b().error,children:C.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_ERROR}):null,(0,n.jsxs)(l.ModalContent,{className:b().modalContent,
children:[(0,n.jsxs)("div",{className:b().header,children:[(0,n.jsx)(m.Z,{currentUser:t,otherUser:r,children:(0,n.jsx)(i.Z,{className:b().linkIcon})}),(0,n.jsx)(l.Heading,{className:b().headerText,variant:"text-lg/bold",children:C.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_MODAL_TITLE}),(0,n.jsx)(h.Z,{user:r,fill:!0})]}),(0,n.jsxs)("div",{className:b().content,children:[(0,n.jsx)(f.Z,{}),(0,n.jsx)(l.Text,{className:b().disclaimer,variant:"text-xs/normal",color:"text-normal",children:C.Z.Messages.FAMILY_CENTER_ACCEPT_LINK_ACTIVITY_DISCLAIMER.format({username:c.ZP.getName(r)})})]})]}),(0,n.jsx)(l.ModalFooter,{children:(0,n.jsx)("form",{onSubmit:function(e){e.preventDefault();I(r)},children:(0,n.jsxs)("div",{className:b().footer,children:[(0,n.jsx)(l.Button,{className:b().button,type:"button",disabled:T,look:l.Button.Looks.LINK,color:l.Button.Colors.PRIMARY,onClick:A,size:l.Button.Sizes.SMALL,children:C.Z.Messages.CANCEL}),(0,n.jsx)(l.Button,{className:b().button,type:"submit",disabled:T,
submitting:T,color:l.ButtonColors.BRAND,size:l.Button.Sizes.SMALL,children:C.Z.Messages.FAMILY_CENTER_ACCEPT_REQUEST})]})})})]})}}}]);
//# sourceMappingURL=16a3f817ef8143f4417a.js.map