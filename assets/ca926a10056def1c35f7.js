"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[70700],{570700:(t,r,e)=>{e.r(r);e.d(r,{default:()=>m});var n=e(785893),o=e(667294),a=e(945460),l=e(443812),s=e(457696);function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a=[],l=!0,s=!1;try{for(e=e.call(t);!(l=(n=e.next()).done);l=!0){a.push(n.value);if(r&&a.length===r)break}}catch(t){s=!0;o=t}finally{try{l||null==e.return||e.return()}finally{if(s)throw o}}return a}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,r)
}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=e(473708),d=e(284359),h=e.n(d);function m(t){var r=t.url,e=t.trustUrl,i=t.isProtocol,d=t.onConfirm,m=t.onClose,f=t.transitionState,_=(0,l.Dt)(),x=function(t){var r=t.url,e=t.trustUrl,n=t.onConfirm,a=t.onClose,l=u(o.useState(!1),2),i=l[0],c=l[1],d=o.useMemo((function(){return{protocol:(0,s.E)(r),hostname:(0,s.F)(r)}}),[r]),h=d.protocol,m=d.hostname,f="".concat(h,"//").concat(m),_=r.replace(f,""),x=o.useCallback((function(){i&&e(r);null==a||a();n()}),[r,i,e,n,a]);return{protocol:h,hostname:m,theRestOfTheUrl:_,shouldTrustUrl:i,setShouldTrustUrl:c,handleConfirm:x}}({url:r,trustUrl:e,onConfirm:d,onClose:m}),T=x.protocol,p=x.hostname,C=x.theRestOfTheUrl,M=x.shouldTrustUrl,E=x.setShouldTrustUrl,A=x.handleConfirm;return(0,n.jsxs)(a.ModalRoot,{size:a.ModalSize.DYNAMIC,transitionState:f,"aria-labelledby":_,
children:[(0,n.jsxs)(a.ModalContent,{children:[(0,n.jsx)(a.Heading,{id:_,variant:"heading-xl/bold",className:h().title,children:c.Z.Messages.MASKED_LINK_ALERT_V2_HEADER}),(0,n.jsx)(a.Text,{className:h().warningText,variant:"text-md/normal",children:i?c.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}):c.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE}),(0,n.jsxs)(a.Scroller,{className:h().linkCalloutContainer,children:[(0,n.jsxs)(a.Text,{tag:"span",variant:i?"text-md/semibold":"text-md/normal",color:i?"text-normal":"text-muted",children:[T,"//"]}),(0,n.jsx)(a.Text,{tag:"span",variant:i?"text-md/normal":"text-md/semibold",color:i?"text-muted":"text-normal",children:p}),(0,n.jsx)(a.Text,{tag:"span",variant:"text-md/normal",color:"text-muted",children:C})]}),(0,n.jsx)(a.Checkbox,{className:h().checkbox,type:a.Checkbox.Types.INVERTED,value:M,onChange:function(t,r){return E(r)},children:(0,n.jsx)(a.Text,{variant:"text-sm/normal",
children:i?c.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({protocol:T.replace(":","")}):c.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({domain:p})})})]}),(0,n.jsxs)(a.ModalFooter,{children:[(0,n.jsx)(a.Button,{type:"button",size:a.Button.Sizes.MEDIUM,color:a.Button.Colors.BRAND,onClick:A,children:i?c.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL:c.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE}),(0,n.jsx)(a.Button,{type:"button",size:a.Button.Sizes.MEDIUM,color:a.Button.Colors.PRIMARY,onClick:m,look:a.ButtonLooks.LINK,children:c.Z.Messages.GO_BACK})]})]})}},443812:(t,r,e)=>{e.d(r,{hQ:()=>l,Dt:()=>s,FG:()=>i});var n=e(873955),o=e.n(n),a=e(989824),l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uid_";return o()(t)},s=function(){return(0,a.Z)((function(){return l()}))},i=function(t){return(0,t.children)(s())}},989824:(t,r,e)=>{e.d(r,{Z:()=>a});var n=e(667294),o={};function a(t){var r=(0,n.useRef)(o);r.current===o&&(r.current=t())
;return r.current}}}]);
//# sourceMappingURL=ca926a10056def1c35f7.js.map