"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[73284],{854104:(e,t,n)=>{n.r(t);n.d(t,{default:()=>N});var r=n(785893),o=n(667294),s=n(294184),a=n.n(s),l=n(945460),i=n(84441),u=n(579194),c=n(415879),d=n(107364),f=n(652591),m=n(646161),h=n(463473),C=n(2590),p=n(571680),x=n(473708),A=n(323379),M=n.n(A);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t,n,r,o,s,a){try{var l=e[s](a),i=l.value}catch(e){n(e);return}l.done?t(i):Promise.resolve(i).then(r,o)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0){s.push(r.value);if(t&&s.length===t)break}}catch(e){l=!0;o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return s}}(e,t)||function(e,t){if(!e)return
;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(e,t){var n,r,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;(r=0,o)&&(s=[2&s[0],o.value]);switch(s[0]){case 0:case 1:o=s;break;case 4:
a.label++;return{value:s[1],done:!1};case 5:a.label++;r=s[1];s=[0];continue;case 7:s=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1];o=s;break}if(o&&a.label<o[2]){a.label=o[2];a.ops.push(s);break}o[2]&&a.ops.pop();a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e];r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};function g(e){var t=e.email,n=e.setEmail,s=e.claimRequired,f=e.onSuccess,m=e.onClose,A=y(o.useState(),2),v=A[0],g=A[1],I=y(o.useState(""),2),N=I[0],S=I[1],j=y(o.useState(""),2),L=j[0],T=j[1],O=y(o.useState(!1),2),R=O[0],E=O[1];o.useEffect((function(){return c.Z.flowStep(p.MK.ANY,p.mx.CLAIM_ACCOUNT)}),[]);var w,B,k=(B=(w=function(e){var n,r,o;return _(this,(function(s){switch(s.label){case 0:e.preventDefault();E(!0);g("");T("");s.label=1;case 1:s.trys.push([1,3,,4])
;return[4,(0,u.S2)({email:t,password:N})];case 2:s.sent();E(!1);f();return[3,4];case 3:(null==(n=s.sent())||null===(r=n.body)||void 0===r?void 0:r.email)&&g(n.body.email);(null==n||null===(o=n.body)||void 0===o?void 0:o.password)&&T(n.body.password);E(!1);return[3,4];case 4:return[2]}}))},function(){var e=this,t=arguments;return new Promise((function(n,r){var o=w.apply(e,t);function s(e){b(o,n,r,s,a,"next",e)}function a(e){b(o,n,r,s,a,"throw",e)}s(void 0)}))}),function(e){return B.apply(this,arguments)});return(0,r.jsxs)("div",{className:a()(M().modalLight,(0,h.Q)(C.BRd.LIGHT)),children:[(0,r.jsxs)(l.ModalHeader,{className:M().formHeader,direction:d.Z.Direction.VERTICAL,separator:!1,children:[(0,r.jsx)("div",{className:M().formImage}),(0,r.jsx)(l.Heading,{className:M().formTitle,variant:"heading-xl/semibold",children:x.Z.Messages.FINISH_SIGNING_UP}),(0,r.jsx)(l.Text,{className:M().formBody,variant:"text-md/normal",color:"header-secondary",
children:s?x.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY:x.Z.Messages.CLAIM_ACCOUNT_BODY_2}),(0,r.jsx)(l.ModalCloseButton,{className:M().closeButton,onClick:m})]}),(0,r.jsx)(l.ModalContent,{children:(0,r.jsxs)("form",{className:M().formContent,onSubmit:k,children:[(0,r.jsx)(l.FormItem,{title:x.Z.Messages.FORM_LABEL_EMAIL,className:M().formItem,children:(0,r.jsx)(l.TextInput,{value:t,error:v,onChange:function(e){return n(e)},autoFocus:!0})}),(0,r.jsx)(l.FormItem,{title:x.Z.Messages.FORM_LABEL_PASSWORD,className:M().formItem,children:(0,r.jsx)(l.TextInput,{type:"password",value:N,error:L,onChange:function(e){return S(e)}})}),(0,r.jsx)(l.Button,{type:"submit",size:l.Button.Sizes.LARGE,fullWidth:!0,submitting:R,disabled:0===t.length||0===N.length,children:x.Z.Messages.CLAIM_ACCOUNT}),s&&(0,r.jsx)(l.Button,{className:M().logoutButton,color:l.Button.Colors.PRIMARY,look:l.Button.Looks.LINK,size:l.Button.Sizes.NONE,onClick:function(){i.Z.logout();m()},children:x.Z.Messages.LOGOUT})]})})]})}
function I(e){var t=e.email,n=e.claimRequired,s=e.onClose,i=function(){window.open((0,m.t3)(),"_blank");f.default.track(C.rMx.DOWNLOAD_APP,{platform:(0,m.DW)(),ptb:!1,released:!0,has_e_mail:!0,referring_location:"Claim Modal",qr_code:!1})},u=n?x.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO:x.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;o.useEffect((function(){return c.Z.flowStep(p.MK.ANY,p.mx.CLAIM_ACCOUNT_SUCCESS)}),[]);return(0,r.jsxs)("div",{className:a()(M().modalLight,(0,h.Q)(C.BRd.LIGHT)),children:[(0,r.jsxs)(l.ModalContent,{className:M().successContent,children:[!n&&(0,r.jsx)(l.ModalCloseButton,{className:M().closeButton,onClick:s}),(0,r.jsx)("div",{className:M().successImage}),(0,r.jsx)(l.Text,{className:M().successTitle,variant:"text-lg/semibold",children:u.format({email:t})}),(0,r.jsx)(l.Text,{className:M().successPromotion,variant:"text-md/normal",children:x.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04})]}),n?(0,r.jsx)(l.ModalFooter,{direction:d.Z.Direction.VERTICAL,children:(0,
r.jsx)(l.Button,{size:l.Button.Sizes.LARGE,onClick:s,children:x.Z.Messages.OKAY})}):(0,r.jsx)(l.ModalFooter,{direction:d.Z.Direction.VERTICAL,children:(0,r.jsx)(l.Button,{color:l.Button.Colors.BRAND,size:l.Button.Sizes.LARGE,onClick:i,children:x.Z.Messages.CLAIM_ACCOUNT_GET_APP})})]})}function N(e){var t=e.onClose,n=e.transitionState,s=e.claimRequired,a=void 0!==s&&s,i=y(o.useState(""),2),u=i[0],c=i[1],d=y(o.useState(!1),2),f=d[0],m=d[1];return f?(0,r.jsx)(l.ModalRoot,{transitionState:n,children:(0,r.jsx)(I,{email:u,claimRequired:a,onClose:t})}):(0,r.jsx)(l.ModalRoot,{transitionState:n,children:(0,r.jsx)(g,{email:u,setEmail:c,claimRequired:a,onSuccess:function(){return m(!0)},onClose:t})})}}}]);
//# sourceMappingURL=27d8f039da876a588d01.js.map