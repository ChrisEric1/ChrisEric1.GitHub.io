"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[99368],{629438:(e,t,n)=>{n.d(t,{B:()=>s});var a=n(496486),r=n.n(a),s=function(e,t){var n=r().shuffle(e),a=n.findIndex((function(e){return e.value===t}));if(a>-1){var s=n[a];n.splice(a,1);n.push(s)}return n}},517454:(e,t,n)=>{n.d(t,{L:()=>v,Z:()=>R});var a=n(785893),r=n(667294),s=n(294184),l=n.n(s),o=n(496486),i=n.n(o),c=n(945460),u=n(634698),d=n(441093),m=n(107364),f=n(443812),h=n(843133),g=n(348592),x=n(629438),S=n(494579),b=n(473708),C=n(424529),N=n.n(C);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,s=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(a=n.next()).done);l=!0){s.push(a.value);if(t&&s.length===t)break}}catch(e){o=!0;r=e}finally{try{
l||null==n.return||n.return()}finally{if(o)throw r}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=[{className:N().emojiSad,rating:S.aZ.BAD,classNameSelected:N().selected},{className:N().emojiNeutral,rating:S.aZ.NEUTRAL,classNameSelected:N().selected},{className:N().emojiHappy,rating:S.aZ.GOOD,classNameSelected:N().selected}];function v(e){var t=e.className,n=e.selectedRating,r=e.ratingConfigs,s=e.onChangeRating;return(0,a.jsx)(m.Z,{justify:m.Z.Justify.BETWEEN,align:m.Z.Align.CENTER,className:l()(N().ratingsSelector,t),
children:(null!=r?r:j).map((function(e){var t=e.rating,r=e.className,o=e.classNameSelected;return(0,a.jsx)(c.Clickable,{onClick:function(){return s(t)},"aria-label":t,children:(0,a.jsx)("div",{className:l()(r,n===t?o:null)})},t)}))})}function Z(){return(0,a.jsx)(c.Text,{className:N().helpdeskLink,variant:"text-xs/normal",color:"text-muted",children:b.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({helpdeskURL:g.Z.getSubmitRequestURL()})})}function R(e){var t=e.header,n=e.body,s=e.problemTitle,o=e.problems,g=e.transitionState,C=e.ratingConfigs,p=e.feedbackProblems,j=void 0===p?[]:p,R=e.otherKey,y=e.ratingsSelectorClassName,A=e.hideDontShowCheckbox,k=e.startRating,M=void 0===k?null:k,D=e.onSubmit,T=e.onClose,B=(0,u.Z)(o),I=E(r.useState(!1),2),O=I[0],L=I[1],_=E(r.useState(M),2),w=_[0],F=_[1],H=E(r.useState(null),2),U=H[0],K=H[1],G=E(r.useState(i().shuffle(o)),2),z=G[0],P=G[1],q=E(r.useState(""),2),W=q[0],Y=q[1],J=(0,f.Dt)(),V=(0,h.Z)(w),$=(0,h.Z)(O),Q=(0,h.Z)(U),X=(0,h.Z)(D),ee=(0,
h.Z)(W),te=null!=U&&j.includes(U),ne=te||!A;r.useEffect((function(){i().isEqual(B,o)||P((0,x.B)(o,R))}),[o,B,R]);r.useEffect((function(){return function(){X.current({rating:V.current,problem:Q.current,dontShowAgain:$.current,feedback:ee.current})}}),[]);return(0,a.jsxs)(c.ModalRoot,{transitionState:g,className:N().modalRoot,"aria-labelledby":J,children:[(0,a.jsxs)(c.ModalHeader,{separator:!1,className:N().headerContainer,children:[(0,a.jsx)(c.Heading,{id:J,variant:"heading-xl/extrabold",color:"none",children:t}),(0,a.jsx)(c.Text,{variant:"text-md/normal",color:"none",className:N().ratingBody,children:n}),te?null:(0,a.jsx)(v,{className:l()(N().emojis,y),selectedRating:w,onChangeRating:function(e){F(e);e===S.aZ.GOOD&&T()},ratingConfigs:C})]}),(0,a.jsxs)(c.ModalContent,{className:N().content,children:[null==w||w===S.aZ.GOOD||te?null:(0,a.jsx)(c.FormItem,{title:s,className:N().problemInfo,children:(0,a.jsx)(d.Z,{options:z,onClick:function(e){var t=e.value;K(t);j.includes(t)||T()},
hideCaret:function(e){var t=e.value;return!j.includes(t)}})}),te?(0,a.jsxs)(c.FormItem,{title:b.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,className:N().problemInfo,children:[(0,a.jsx)(c.TextArea,{value:W,maxLength:S.iF,onChange:Y}),(0,a.jsx)(Z,{})]}):null]}),ne&&(0,a.jsx)(c.ModalFooter,{className:N().footer,direction:m.Z.Direction.HORIZONTAL,children:te?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Button,{size:c.Button.Sizes.SMALL,look:c.Button.Looks.LINK,color:c.Button.Colors.PRIMARY,onClick:function(){K(null);Y("")},children:b.Z.Messages.BACK}),(0,a.jsx)(c.Button,{size:c.Button.Sizes.SMALL,onClick:T,children:b.Z.Messages.SUBMIT})]}):(0,a.jsx)(c.Checkbox,{type:c.Checkbox.Types.INVERTED,size:18,value:O,onChange:function(){return L(!O)},children:(0,a.jsx)(c.Text,{variant:"text-sm/normal",children:b.Z.Messages.DONT_SHOW_AGAIN})})})]})}},599368:(e,t,n)=>{n.r(t);n.d(t,{default:()=>d});var a=n(785893),r=(n(667294),n(517454)),s=n(630854),l=n(494579),o=n(473708),i=n(872682),c=n.n(i),u=[{
className:c().emojiThumbsUp,rating:l.aZ.GOOD,classNameSelected:c().selected},{className:c().emojiThumbsDown,rating:l.aZ.BAD,classNameSelected:c().selected}];function d(e){var t=e.transitionState,n=e.startRating,l=e.onClose,i=e.onSubmit;return(0,a.jsx)(r.Z,{header:o.Z.Messages.SUMMARIES_FEEDBACK_HEADER,body:o.Z.Messages.SUMMARIES_FEEDBACK_BODY,problemTitle:o.Z.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,onSubmit:i,onClose:l,ratingConfigs:u,transitionState:t,problems:(0,s.iq)(),ratingsSelectorClassName:c().ratingsSelector,feedbackProblems:[s.R7.OTHER],otherKey:s.R7.OTHER,startRating:n,hideDontShowCheckbox:!0})}},441093:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(785893),r=(n(667294),n(294184)),s=n.n(r),l=n(945460),o=n(718831),i=n(613067),c=n.n(i);function u(e){var t=e.options,n=e.onClick,r=e.className,i=e.optionClassName,u=e.hideCaret;return(0,a.jsx)("div",{className:s()(c().root,r),children:t.map((function(e,t){return(0,a.jsxs)(l.Clickable,{onClick:function(){return n(e)},
className:s()(c().option,i),children:[(0,a.jsx)(l.Text,{className:c().text,color:"none",variant:"text-md/normal",children:e.label}),!(null==u?void 0:u(e))&&(0,a.jsx)(o.Z,{className:c().caret,direction:o.Z.Directions.RIGHT})]},t)}))})}}}]);
//# sourceMappingURL=824affc6376d5c9b9290.js.map