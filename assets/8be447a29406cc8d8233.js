"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[47311,38657],{947311:(e,n,t)=>{t.r(n);t.d(n,{Steps:()=>de,default:()=>pe});var r=t(785893),o=t(667294),i=t(441143),l=t.n(i),s=t(202351),a=t(945460),u=t(653224),c=t(985801),d=t(567403),f=t(775506),p=t(637330),m=t(652591),C=t(930865),h=t(294184),S=t.n(h),y=t(443660),b=t(859917),_=t(124251),v=t(784648),g=t(102981),I=t(331255),E=t.n(I);function M(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function x(e){x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return x(e)}function j(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&U(e,n)}function R(e,n){return!n||"object"!==O(n)&&"function"!=typeof n?function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function U(e,n){U=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return U(e,n)}var O=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=x(e);if(n){var o=x(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return R(this,t)}}var L=function(e){j(t,e);var n=N(t);function t(){M(this,t);return n.apply(this,arguments)}t.prototype.render=function(){var e=this.props.tier;return(0,r.jsxs)("div",{className:E().tierPill,children:[(0,r.jsx)(b.Z,{className:E().tierPillStar,children:(0,r.jsx)(v.Z,{tier:e,
className:E().tierPillGem})}),(0,C.nW)(e)]})};return t}(o.PureComponent),B=function(e){var n=e.subscriptionChange,t=e.guild;if(0===n)return null;var o=Math.max(t.premiumSubscriberCount+n,0),i=(0,C.rF)(o,t.id),l=i-(0,C.rF)(t.premiumSubscriberCount,t.id);return 0===l?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{className:l>0?E().levelUpIcon:E().levelDownIcon}),(0,r.jsx)(L,{tier:i})]})},D=function(e){j(t,e);var n=N(t);function t(){M(this,t);return n.apply(this,arguments)}t.prototype.render=function(){var e=this.props,n=e.guild,t=e.className,o=e.subscriptionChange;return(0,r.jsxs)("div",{className:S()(E().subscription,t),children:[(0,r.jsx)(_.Z,{guild:n,size:_.Z.Sizes.LARGE}),(0,r.jsxs)("div",{className:E().subscriptionInfo,children:[(0,r.jsx)("div",{className:E().guildName,children:n.name}),(0,r.jsxs)("div",{className:E().tierInfo,children:[(0,r.jsx)(L,{tier:n.premiumTier}),(0,r.jsx)(B,{guild:n,subscriptionChange:null!=o?o:0})]})]})]})};return t
}(o.PureComponent),P=t(536392),G=t(107364),T=t(698011),w=t(265367),A=t(473708),Z=t(421254),F=t.n(Z);function k(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function H(e){H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return H(e)}function q(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&z(e,n)}function W(e,n){return!n||"object"!==Y(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function z(e,n){z=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return z(e,n)}var Y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Q(e){var n=function(){
if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=H(e);if(n){var o=H(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return W(this,t)}}var V=function(e){q(t,e);var n=Q(t);function t(){k(this,t);return n.apply(this,arguments)}t.prototype.render=function(){var e=this.props.onClose;return(0,r.jsxs)(a.ModalHeader,{separator:!1,justify:G.Z.Justify.BETWEEN,children:[(0,r.jsx)(a.Heading,{variant:"heading-md/semibold",children:this.props.text}),null!=e?(0,r.jsx)(a.ModalCloseButton,{onClick:e}):null]})};return t}(o.PureComponent);function X(e){var n=e.imageClass,t=e.children,o=e.error,i=e.onDismissError;return(0,r.jsxs)("div",{className:F().content,children:[(0,r.jsx)("div",{className:S()(F().image,n)}),t,(0,r.jsx)(y.Z,{children:null!=o?(0,
r.jsx)(T.Z,{className:F().error,children:(0,r.jsx)(a.FormErrorBlock,{onDismiss:i,children:o.message})}):null})]})}var K=function(e){var n=e.canceledCount,t=(0,s.e7)([P.Z],(function(){return P.Z.getPremiumTypeSubscription()}));return null==t?null:(0,r.jsxs)("div",{className:F().pendingCancellation,children:[(0,r.jsx)(w.Z,{className:F().pendingCancellationIcon}),(0,r.jsx)(a.Text,{variant:"text-md/normal",className:F().pendingCancellationMessage,children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({date:t.currentPeriodEnd,canceledCount:n})})]})};function $(e){var n=e.imageClass,t=e.blurb,o=e.guild,i=e.warning,l=e.error,s=e.onDismissError,u=e.slotCount,c=void 0===u?1:u,d=e.canceledCount,f=void 0===d?0:d;return(0,r.jsxs)(X,{imageClass:n,error:l,onDismissError:s,children:[(0,r.jsx)(a.Text,{variant:"text-md/normal",children:t}),(0,r.jsx)(D,{className:F().guildCard,guild:o,subscriptionChange:c}),(0,r.jsx)(a.Text,{variant:"text-md/normal",children:i}),f>0?(0,r.jsx)(K,{
canceledCount:f}):null]})}var J=function(e){q(t,e);var n=Q(t);function t(){k(this,t);return n.apply(this,arguments)}t.prototype.render=function(){var e=this.props,n=e.confirmation,t=e.confirmationLabel,o=e.isModifyingSubscription,i=e.onConfirm,l=e.onCancel;return(0,r.jsxs)(a.ModalFooter,{children:[(0,r.jsx)(a.Button,{onClick:i,submitting:o,"aria-label":t,children:n}),(0,r.jsx)(a.Button,{look:a.Button.Looks.LINK,color:a.Button.Colors.PRIMARY,onClick:l,disabled:o,children:A.Z.Messages.CANCEL})]})};return t}(o.PureComponent),ee=function(e){q(t,e);var n=Q(t);function t(){k(this,t);return n.apply(this,arguments)}t.prototype.render=function(){var e=this.props,n=e.guild,t=e.header,i=e.blurb,l=e.warning,s=e.confirmation,u=e.confirmationLabel,c=e.imageClass,d=e.error,f=e.isModifyingSubscription,p=e.onConfirm,m=e.onCancel,C=e.onDismissError,h=e.canceledCount;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(V,{text:t}),(0,r.jsx)(a.ModalContent,{children:(0,r.jsx)($,{guild:n,blurb:i,warning:l,
imageClass:c,error:d,onDismissError:C,canceledCount:h})}),(0,r.jsx)(J,{confirmation:s,confirmationLabel:u,isModifyingSubscription:f,onConfirm:p,onCancel:m})]})};return t}(o.PureComponent);ee.Header=V;ee.ApplyBody=$;ee.TransferBody=function(e){var n,t,i=e.imageClass,l=e.blurb,s=e.fromGuilds,u=e.toGuild,c=e.error,d=e.onDismissError,f=e.slotCount,p=void 0===f?1:f,m=e.canceledCount,C=void 0===m?0:m,h=o.useRef(s),S=null===(n=h.current)||void 0===n?void 0:n.length,y=null===(t=h.current)||void 0===t?void 0:t.reduce((function(e,n){e.hasOwnProperty(n.id)||(e[n.id]=[]);e[n.id].push(n);return e}),{});return(0,r.jsxs)(X,{imageClass:i,error:c,onDismissError:d,children:[(0,r.jsx)(a.Text,{variant:"text-md/normal",children:l}),(0,r.jsx)(a.Text,{variant:"text-xs/bold",className:F().transferGuildCardHeader,children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({guildCount:S})}),null!=y?Object.keys(y).map((function(e){return(0,r.jsx)(D,{className:F().transferFromGuildCard,
guild:y[e][0],subscriptionChange:-1*y[e].length},e)})):null,(0,r.jsx)(a.Text,{variant:"text-xs/normal",className:F().transferGuildCardHeader,children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({slotCount:p})}),(0,r.jsx)("div",{className:F().activeTransferGuildCardBorder,children:(0,r.jsx)(D,{className:F().transferToGuildCard,guild:u,subscriptionChange:null!=s?s.length:1})}),C>0?(0,r.jsx)(K,{canceledCount:C}):null]})};ee.Footer=J;const ne=ee;var te=t(138657),re=t(655052),oe=t(2590),ie=t(897732),le=t.n(ie);function se(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ae(e,n,t,r,o,i,l){try{var s=e[i](l),a=s.value}catch(e){t(e);return}s.done?n(a):Promise.resolve(a).then(r,o)}function ue(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function ce(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){
var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(r=t.next()).done);l=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){s=!0;o=e}finally{try{l||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return se(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var de,fe=function(e,n){var t,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},
"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;(r=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:l.label++;return{value:i[1],done:!1};case 5:l.label++;r=i[1];i=[0];continue;case 7:i=l.ops.pop();l.trys.pop();continue;default:if(!(o=l.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1];o=i;break}if(o&&l.label<o[2]){l.label=o[2];l.ops.push(i);break}o[2]&&l.ops.pop();l.trys.pop();continue}i=n.call(e,l)}catch(e){i=[6,e];r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};!function(e){e.UNUSED_QUANTITY_SELECT="UNUSED_QUANTITY_SELECT"
;e.GUILD_SELECT="GUILD_SELECT";e.CONFIRM="CONFIRM";e.SUCCESS="SUCCESS"}(de||(de={}));const pe=function(e){var n,t,i=e.guildBoostSlots,h=e.selectedGuild,S=e.locationSection,y=e.transitionState,b=e.onClose,_=(0,C.vx)(f.Z.boostSlots);l()(null!=i||null!=h,"Must either provide slots or an initial selected guild");l()(!(null==i?void 0:i.some((function(e){return e.isOnCooldown()}))),"If slots are provided, they must not be on cooldown");var v,g=[null==i?de.UNUSED_QUANTITY_SELECT:null,null==h?de.GUILD_SELECT:null,de.CONFIRM,de.SUCCESS].filter((function(e){return null!=e})),I=ce((0,s.Wu)([c.Z],(function(){return[c.Z.isModifyingAppliedBoost,c.Z.applyBoostError]})),2),E=I[0],M=I[1],x=ce(o.useState(""),2),j=x[0],R=x[1],U=ce(o.useState(g[0]),2),O=U[0],N=U[1],L=ce(o.useState(!1),2),B=L[0],D=L[1],P=ce(o.useState(h),2),G=P[0],T=P[1],w=ce(o.useState(null!=i?i:_.slice(0,1)),2),Z=w[0],F=w[1],k=o.useMemo((function(){return null==Z?[]:Z.map((function(e){var n=e.premiumGuildSubscription
;return d.Z.getGuild(null==n?void 0:n.guildId)})).filter((function(e){return null!=e}))}),[Z]),H=o.useMemo((function(){var e;return null!=(null==Z||null===(e=Z[0])||void 0===e?void 0:e.premiumGuildSubscription)}),[Z]),q=function(){b(O===de.SUCCESS);m.default.track(oe.rMx.MODAL_DISMISSED,{type:oe.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,location_section:S})},W=(ue(v={},de.UNUSED_QUANTITY_SELECT,{body:function(){l()(!(null==i&&0===_.length),"Cannot provide no slots if there are no other available slots");return(0,r.jsxs)("div",{className:le().quantitySelectorBody,children:[(0,r.jsx)(a.Heading,{variant:"heading-md/semibold",className:le().quantitySelectorHeader,children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER}),(0,r.jsx)(a.Text,{variant:"text-md/normal",className:le().quantitySelectorDescription,children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION}),(0,r.jsxs)("div",{className:le().quantitySelectorWrapper,children:[(0,r.jsx)(p.Z,{value:Z.length,
onChange:function(e){return F(_.slice(0,e))},minValue:1,maxValue:_.length}),(0,r.jsx)(a.Text,{className:le().quantitySelectorLabel,variant:"text-md/normal",children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER})]})]})},footer:function(){return(0,r.jsxs)(a.ModalFooter,{children:[(0,r.jsx)(a.Button,{onClick:function(){return N(de.CONFIRM)},children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT}),(0,r.jsx)(a.Button,{look:a.Button.Looks.LINK,color:a.Button.Colors.PRIMARY,onClick:q,children:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL})]})}}),ue(v,de.GUILD_SELECT,{header:function(){return(0,r.jsx)(te.GuildSelectModalHeader,{isTransfer:H,query:j,setQuery:R})},bodyClass:le().selectContent,body:function(){return(0,r.jsx)(te.GuildSelectModalBody,{onClose:q,onSelectGuild:function(e){T(e);N(de.CONFIRM)},isTransfer:H,selectedSlotGuilds:k,query:j})}}),ue(v,de.CONFIRM,{body:function(){if(null==G)return null;var e=Z.filter((function(e){return(0,C.tl)(e)
})).length,n=Z.length,t=k.length;return H?(0,r.jsx)(ne.TransferBody,{fromGuilds:k,toGuild:G,blurb:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({slotCount:n,guildCount:t}),imageClass:le().transferConfirmImage,error:B?M:null,onDismissError:function(){return D(!1)},slotCount:n,canceledCount:e}):(0,r.jsx)(ne.ApplyBody,{guild:G,blurb:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,warning:A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({days:oe.o3l,slotCount:n}),imageClass:le().confirmImage,error:B?M:null,onDismissError:function(){return D(!1)},slotCount:n,canceledCount:e})},footer:function(){var e,n,t=Z.length,o=g[0]===de.CONFIRM?q:function(){return N(g[g.indexOf(O)-1])},i=(n=(e=function(){return fe(this,(function(e){switch(e.label){case 0:if(null==G||0===(null==Z?void 0:Z.length))return[2];l()(!Z.some((function(e){return e.isOnCooldown()})),"Cannot use a premium guild subscription slot while on cooldown");e.label=1;case 1:e.trys.push([1,4,,5])
;return[4,Promise.all(Z.map((function(e){var n=e.premiumGuildSubscription;return null!=n?(0,u.dG)(n.guildId,n.id):Promise.resolve()})))];case 2:e.sent();return[4,(0,u.W3)(G.id,Z.map((function(e){return e.id})))];case 3:e.sent();N(de.SUCCESS);return[3,5];case 4:e.sent();D(!0);return[3,5];case 5:return[2]}}))},function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function l(e){ae(i,r,o,l,s,"next",e)}function s(e){ae(i,r,o,l,s,"throw",e)}l(void 0)}))}),function(){return n.apply(this,arguments)});return(0,r.jsx)(ne.Footer,{confirmation:H?A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({slotCount:t}):A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({slotCount:t}),confirmationLabel:H?A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({slotCount:t}):A.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({slotCount:t}),onConfirm:i,onCancel:o,isModifyingSubscription:E})}}),
ue(v,de.SUCCESS,{body:function(){return(0,r.jsx)(re.R7,{guild:G,isTransfer:H,guildBoostQuantity:Z.length,onClose:q})}}),v);o.useEffect((function(){m.default.track(oe.rMx.OPEN_MODAL,{type:oe.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,location_section:S})}),[S]);var z=W[O];return(0,r.jsxs)(a.ModalRoot,{transitionState:y,className:le().modal,size:a.ModalSize.SMALL,children:[null===(n=z.header)||void 0===n?void 0:n.call(z),(0,r.jsx)(a.ModalContent,{className:z.bodyClass,children:(0,r.jsx)(a.Sequencer,{step:O,steps:g,children:z.body()})}),null===(t=z.footer)||void 0===t?void 0:t.call(z),(0,r.jsx)(a.ModalCloseButton,{className:le().modalCloseButton,onClick:q})]})}},138657:(e,n,t)=>{t.r(n);t.d(n,{GuildSelectModalHeader:()=>I,GuildSelectModalBody:()=>E,default:()=>M});var r=t(785893),o=t(667294),i=t(824390),l=t.n(i),s=t(202351),a=t(945460),u=t(735885),c=t(784426),d=t(741338),f=t(567403),p=t(107218),m=t(124251),C=t(190186),h=t(930865),S=t(2590),y=t(473708),b=t(721123),_=t.n(b);function v(e,n){
(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],l=!0,s=!1;try{for(t=t.call(e);!(l=(r=t.next()).done);l=!0){i.push(r.value);if(n&&i.length===n)break}}catch(e){s=!0;o=e}finally{try{l||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){
var n=e.isTransfer,t=void 0!==n&&n,o=e.setQuery,i=e.query;return(0,r.jsxs)(a.ModalHeader,{className:_().selectHeaderContainer,children:[(0,r.jsx)(a.Heading,{className:_().selectHeader,variant:"heading-md/semibold",children:t?y.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER:y.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER}),(0,r.jsx)(C.Z,{size:C.Z.Sizes.MEDIUM,placeholder:y.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,"aria-label":y.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,className:_().selectSearch,query:i,onChange:o,onClear:function(){return o("")}})]})}function E(e){var n=function(){C();(0,u.xf)();(0,c.uL)(S.Z5c.GUILD_DISCOVERY)},t=e.isTransfer,o=void 0!==t&&t,i=e.selectedSlotGuilds,C=e.onClose,b=e.onSelectGuild,v=e.query,g=(0,s.e7)([p.Z],(function(){return p.Z.getFlattenedGuildIds()})),I=(0,s.Wu)([f.Z],(function(){return g.reduce((function(e,n){var t=f.Z.getGuild(n);if(null==t)return e;if(null!=i&&i.some((function(e){
return e.id===n})))return e;(v.length<=0||l()(v.toLowerCase(),null==t?void 0:t.name.toLowerCase()))&&e.push(t);return e}),new Array)})),E=d.Z.useExperiment({},{autoTrackExposure:!0}).enabled;return(0,r.jsxs)(r.Fragment,{children:[0===I.length&&(0,r.jsx)("div",{className:_().emptyStateWrapper,children:(0,r.jsx)(a.Text,{variant:"text-md/normal",children:0===g.length?y.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({publicGuildDirectoryHook:function(e,t){return(0,r.jsx)(a.Clickable,{onClick:n,tag:"a",children:e},t)}}):y.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND})}),I.map((function(e){return(0,r.jsxs)(a.Clickable,{className:_().selectGuild,onClick:function(){b(e)},children:[(0,r.jsx)(m.Z,{className:_().selectGuildIcon,guild:e,size:m.Z.Sizes.SMALL}),(0,r.jsxs)("div",{className:_().selectGuildCopy,children:[(0,r.jsx)(a.Text,{className:_().selectGuildName,variant:"text-md/normal",children:e.name}),E&&(0,r.jsx)(a.Text,{className:_().selectGuildLevel,
color:"text-muted",variant:"text-xs/normal",children:(0,h.nW)(e.premiumTier)})]}),E&&(0,r.jsx)(a.Text,{className:_().selectGuildPseudoCta,color:"always-white",variant:"text-sm/medium",children:o?y.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE:y.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION})]},e.id)}))]})}function M(e){var n=e.onClose,t=e.onSelectGuild,i=e.transitionState,l=g(o.useState(""),2),s=l[0],u=l[1];return(0,r.jsxs)(a.ModalRoot,{transitionState:i,className:_().modal,size:a.ModalSize.SMALL,children:[(0,r.jsx)(I,{query:s,setQuery:u}),(0,r.jsx)(a.ModalContent,{className:_().modalContent,children:(0,r.jsx)(E,{onClose:n,onSelectGuild:t,query:s})}),(0,r.jsx)(a.ModalCloseButton,{className:_().modalCloseButton,onClick:n})]})}},102981:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(785893),o=(t(667294),t(633878));function i(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function l(e,n){n=null!=n?n:{}
;Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||(o[t]=e[t])}return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function a(e){var n=e.width,t=void 0===n?24:n,a=e.height,u=void 0===a?24:a,c=e.color,d=void 0===c?"currentColor":c,f=s(e,["width","height","color"]);return(0,r.jsxs)("svg",l(function(e){
for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){i(e,n,t[n])}))}return e}({},(0,o.Z)(f)),{width:t,height:u,viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",fill:d}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",
d:"M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",fill:d})]}))}}}]);
//# sourceMappingURL=8be447a29406cc8d8233.js.map