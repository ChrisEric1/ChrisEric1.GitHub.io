"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[17428],{117428:(t,e,n)=>{n.r(e);n.d(e,{default:()=>L});var r=n(785893),o=n(667294),a=n(202351),l=n(945460),i=n(105783),s=n(567867),u=n(460471),d=n(694755),c=n(61209),f=n(284610),h=n(567403),m=n(352980),A=n(443812),_=n(149258),I=n(15084),g=n(99181),b=n(854602),p=n(219785),y=n(503871),T=n(2590),M=n(520453),v=n(473708),C=n(165376),O=n.n(C);function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(t);!(l=(r=n.next()).done);l=!0){a.push(r.value);if(e&&a.length===e)break}}catch(t){i=!0;o=t}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,e)||E(t,e)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||E(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}function L(t){var e,n=t.threadId,C=t.attachments,D=t.sendMessage,E=t.transitionState,L=t.onClose,Z=(0,A.Dt)(),x=(0,a.e7)([c.Z],(function(){return c.Z.getChannel(n)}),[n]),j=(0,
a.e7)([h.Z],(function(){return h.Z.getGuild(null==x?void 0:x.getGuildId())}),[x]),R=(0,a.e7)([c.Z],(function(){return c.Z.getChannel(null==x?void 0:x.parent_id)}),[x]),P=null===(e=C[0])||void 0===e?void 0:e.item,k=N(o.useState(null),2),w=k[0],B=k[1];o.useEffect((function(){null!=P&&(0,d.Fq)(P.file,(function(t,e){return B(t)}),M.dG)}),[P]);var F=null!=P&&null!=w?{src:w,width:p.TJ,height:p.Lp,spoiler:C[0].spoiler,alt:C[0].description}:null,G=N(o.useState(!1),2),U=G[0],z=G[1],H=o.useCallback((function(){(0,b.xI)({added:!1});D();L()}),[D,L]),J=o.useCallback((function(){if(null!=x&&null!=j){(0,b.xI)({added:!0});!function(t){var e=t.thread,n=t.attachments,r=t.setIsUploading,o=t.guild,a=t.onClose,l=new u.Z(T.ANM.MESSAGE(e.id,e.id),"PATCH");l.on("start",(function(){r(!0)}));l.on("progress",(function(t){var i=(0,_.dg)(o.id);if(t.currentSize>i){l.cancel();r(!1);a();(0,I.G)(e,(0,g.KZ)(n))}}));l.on("error",(function(t,e){r(!1);if(e===T.evJ.EXPLICIT_CONTENT){a();i.Z.show({
title:v.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,body:v.Z.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({name:o.toString()})})}}));l.on("complete",(function(){r(!1);a();s.Z.clearAll(e.id,f.d.ChannelMessage)}));var d=m.Z.getMessages(e.id).get(e.id),c=null!=d?d.attachments:[];l.uploadFiles(n,{attachments:S(c)},{addFilesTo:"attachments"})}({thread:x,attachments:C,setIsUploading:z,guild:j,onClose:L})}}),[x,C,z,j,L]);return null==R?null:(0,r.jsxs)(l.ModalRoot,{transitionState:E,size:l.ModalSize.SMALL,className:O().modalRoot,"aria-labelledby":Z,children:[(0,r.jsxs)(l.ModalContent,{className:O().modal,children:[(0,r.jsx)(l.Heading,{variant:"heading-md/semibold",className:O().header,id:Z,children:v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE}),(0,r.jsx)(l.Text,{variant:"text-md/normal",className:O().body,children:v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION}),(0,r.jsx)("div",{className:O().forumPost,children:(0,r.jsx)(y.oL,{createStore:function(){return(0,y.NU)(R)},
children:(0,r.jsx)(p.ZP,{threadId:n,goToThread:M.dG,overrideMedia:F})})})]}),(0,r.jsxs)(l.ModalFooter,{className:O().modalFooter,children:[(0,r.jsx)(l.Button,{look:l.Button.Looks.BLANK,className:O().cancelButton,disabled:U,onClick:L,children:v.Z.Messages.CANCEL}),(0,r.jsx)(l.Button,{color:l.Button.Colors.PRIMARY,className:O().dontAddButton,disabled:U,onClick:H,children:v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD}),(0,r.jsx)(l.Button,{color:l.Button.Colors.BRAND,className:O().button,submitting:U,onClick:J,autoFocus:!0,children:v.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD})]})]})}}}]);
//# sourceMappingURL=ad56afe6e5ac5d8ac1c2.js.map