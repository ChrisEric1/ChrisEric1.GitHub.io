"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[27684],{727684:(t,e,n)=>{n.r(e);n.d(e,{default:()=>bt});var r=n(785893),o=n(667294),a=n(294184),i=n.n(a),u=n(202351),c=n(945460),l=n(846334),s=n(650332),f=n(728197),d=n(621647),p=n(296916),y=n(773011),h=n(744564),v=n(57141),m=n(61209),b=n(567403),g=n(997582),_=n(491260),E=n(840922),O=n(473903),I=n(796909),S=n(2590);function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function N(t){N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return N(t)}function C(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){
var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function w(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t,e){P=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return P(t,e)}function L(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n)
;if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var R=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}var x,D=[f.h8.TEXT_CHANNEL,f.h8.GROUP_DM,f.h8.USER],k=null,U=null,Z=[],V=[];function B(t){Z=L(Z).concat([t]);V=V.map((function(t){return C(function(t){for(var e=1;e<arguments.length;e++){
var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))));r.forEach((function(e){j(t,e,n[e])}))}return t}({},t),{sent:Z.includes(t.data.record.id)})}));F.emitChange()}function G(t,e){V=(""===e.trim()?function(){var t=[];I.Z.getPrivateChannelIds().forEach((function(e){var n=m.Z.getChannel(e);if(null!=n)if(n.type===S.d4z.DM){var r=n.getRecipientId(),o=null!=r?O.default.getUser(r):null;null!=o&&t.push({type:f.h8.USER,record:o,score:0})}else n.isMultiUserDM()&&t.push({type:f.h8.GROUP_DM,record:n,score:0})}));return t}():t).map((function(t){switch(t.type){case f.h8.USER:var e=t.record;return{type:f.h8.USER,sent:Z.includes(e.id),status:_.Z.getStatus(e.id),data:t};case f.h8.TEXT_CHANNEL:var n=t.record,r=m.Z.getChannel(n.parent_id),o=b.Z.getGuild(n.guild_id);return{type:f.h8.TEXT_CHANNEL,sent:Z.includes(n.id),
categoryName:null!=r?(0,y.F6)(r,O.default,E.Z):"",guildName:null!=o?o.toString():"",data:t};case f.h8.GROUP_DM:var a=t.record;return{type:f.h8.GROUP_DM,sent:Z.includes(a.id),data:t};default:throw new Error("Unknown Result Type: ".concat(t.type))}}));F.emitChange()}function z(){k=null;if(null!=x){x.destroy();x=null}null!=U&&U()}function H(){var t=null!=k&&null!=k.application_id?g.Z.getApplicationActivity(k.application_id):null;if(null!=k&&(null==t||null==t.party||null==t.party.id))return z()}var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&P(t,e)}(n,t);var e=M(n);function n(){T(this,n);return e.apply(this,arguments)}var r=n.prototype;r.initialize=function(){this.waitFor(g.Z)};r.getActivity=function(){return k};r.getQuery=function(){var t;return null!==(t=null==x?void 0:x.query)&&void 0!==t?t:""}
;r.getResults=function(){return V};r.__getLocalVars=function(){return{RESULT_TYPES:D,activity:k,resolve:U,autocompleter:x,sentInvites:Z,results:V,instance:F}};return n}(u.ZP.Store);Y.displayName="ActivityInviteModalStore";var F=new Y(h.Z,{ACTIVITY_INVITE_MODAL_OPEN:function(t){k=t.activity;U=t.resolve;Z=[];null==x&&(x=new f.ZP((function(t,e){return G(t,e)}),D,100));x.search("")},ACTIVITY_INVITE_MODAL_QUERY:function(t){var e=t.query;null!=x&&x.search(e)},ACTIVITY_INVITE_MODAL_SEND:function(t){if(null!=k){var e=t.channelId,n=t.userId;null!=e?v.Z.sendActivityInvite({channelId:e,type:S.mFx.JOIN,activity:k,location:"Channel Text Area - Invite to Join Modal"}).then((function(){return B(e)})):null!=n&&v.Z.sendActivityInviteUser({userId:n,type:S.mFx.JOIN,activity:k,location:"Channel Text Area - Invite to Join Modal"}).then((function(){return B(n)}))}},ACTIVITY_INVITE_MODAL_CLOSE:z,OVERLAY_SET_INPUT_LOCKED:function(t){if(t.locked&&null!=k){z();return!0}return!1},LOCAL_ACTIVITY_UPDATE:H,
RPC_APP_DISCONNECTED:H});const q=F;var W=n(436622),X=n(823975),J=n(132457),Q=n(930948),K=n(473708),$=n(562776),tt=n.n($),et=n(518280),nt=n.n(et);function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function at(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}function it(t){it=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)};return it(t)}function ut(t,e){return!e||"object"!==ft(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ct(t,e){ct=Object.setPrototypeOf||function(t,e){t.__proto__=e;return t};return ct(t,e)}function lt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){
var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0){a.push(r.value);if(e&&a.length===e)break}}catch(t){u=!0;o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(t,e)||dt(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function st(t){return function(t){if(Array.isArray(t))return rt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||dt(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ft=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function dt(t,e){if(t){
if("string"==typeof t)return rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);return"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rt(t,e):void 0}}function pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(t){return!1}}();return function(){var n,r=it(t);if(e){var o=it(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ut(this,n)}}var yt=function(t){var e=t.channel,n=t.categoryName,o=t.guildName,a=W.Z;(0,p.Z)(e)?a=X.Z:e.isNSFW()&&(a=J.Z);return(0,r.jsxs)("div",{className:tt().result,children:[(0,r.jsx)(a,{className:tt().resultIcon,background:tt().resultIconBackground,width:16,height:16}),(0,r.jsxs)("div",{className:tt().resultText,
children:[(0,r.jsx)("span",{children:e.name}),(0,r.jsx)("span",{className:tt().resultCategoryName,children:n})]}),(0,r.jsx)("div",{className:tt().resultGuildName,children:o})]})},ht=function(t){var e=t.channel,n=(0,y.ZP)(e);return(0,r.jsxs)("div",{className:tt().result,children:[(0,r.jsx)(c.Avatar,{src:(0,d.x)(e),"aria-label":null!=n?n:"",className:tt().resultAvatar,size:c.AvatarSizes.SIZE_32}),(0,r.jsx)("div",{className:tt().resultText,children:n})]})},vt=function(t){var e,n=t.user,o=t.comparator,a=t.status;if(null!=o&&o===n.tag){var i=o.split("#");i.pop();e=i.join("#")}else e=null!=o&&""!==o?o:n.username;return(0,r.jsxs)("div",{className:tt().result,children:[(0,r.jsx)(c.Avatar,{src:n.getAvatarURL(void 0,32),"aria-label":n.username,className:tt().resultAvatar,size:c.AvatarSizes.SIZE_32,status:a}),(0,r.jsxs)("div",{className:tt().resultText,children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{className:tt().resultUsername,children:n.tag})]})]})},mt=function(t){!function(t,e){
if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}});e&&ct(t,e)}(n,t);var e=pt(n);function n(){ot(this,n);var t;(t=e.apply(this,arguments)).handleClick=function(){var e=t.props;(0,e.onInvite)(e.row)};t.handleMouseEnter=function(){var e=t.props;(0,e.onMouseEnter)(e.row)};return t}n.prototype.render=function(){var t,e,n=this.props,o=n.result,a=n.selected,u=n.sending;switch(o.type){case f.h8.GROUP_DM:t=(0,r.jsx)(ht,{channel:o.data.record});break;case f.h8.TEXT_CHANNEL:var l=o.categoryName,s=o.guildName;t=(0,r.jsx)(yt,{channel:o.data.record,categoryName:l,guildName:s});break;case f.h8.USER:var d=o.data,p=d.comparator,y=d.record,h=o.status;t=(0,r.jsx)(vt,{comparator:p,user:y,status:h})}e=o.sent?(0,r.jsx)(c.Button,{className:tt().inviteButton,look:c.Button.Looks.LINK,size:c.Button.Sizes.SMALL,disabled:!0,color:c.Button.Colors.WHITE,
children:K.Z.Messages.ACTIVITY_INVITE_MODAL_SENT}):(0,r.jsx)(c.Button,{color:c.Button.Colors.GREEN,look:a?c.Button.Looks.FILLED:c.Button.Looks.OUTLINED,className:tt().inviteButton,size:c.Button.Sizes.SMALL,submitting:u,onClick:this.handleClick,children:K.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE});return(0,r.jsxs)("div",{className:i()(tt().resultWrapper,at({},tt().resultWrapperSelected,a)),onMouseEnter:this.handleMouseEnter,children:[t,e]})};return n}(o.Component);function bt(t){var e=t.transitionState,n=t.onClose,a=(0,u.cj)([q],(function(){return{results:q.getResults(),query:q.getQuery(),activity:q.getActivity()}}),[]),i=a.results,d=a.query,p=a.activity,y=lt(o.useState(d),2),h=y[0],v=y[1],m=lt(o.useState(0),2),b=m[0],g=m[1],_=lt(o.useState([]),2),E=_[0],O=_[1],I=lt(o.useState(!1),2),A=I[0],T=I[1],j=o.useRef(null),N=o.useCallback((function(){var t;null===(t=j.current)||void 0===t||t.scrollPageUp({animate:!0})}),[j]),C=o.useCallback((function(){var t
;null===(t=j.current)||void 0===t||t.scrollPageDown({animate:!0})}),[j]);o.useEffect((function(){Q.S.subscribe(S.CkL.SCROLL_PAGE_UP,N);return function(){Q.S.unsubscribe(S.CkL.SCROLL_PAGE_UP,N)}}),[N]);o.useEffect((function(){Q.S.subscribe(S.CkL.SCROLL_PAGE_DOWN,C);return function(){Q.S.unsubscribe(S.CkL.SCROLL_PAGE_DOWN,C)}}),[C]);o.useEffect((function(){null==p&&n()}),[n,p]);o.useEffect((function(){var t;null===(t=j.current)||void 0===t||t.scrollToTop();g(0)}),[j,i]);var w=o.useCallback((function(t){var e=i[t],n=e.data,r=e.data.record.id;if(null!=r&&!E.includes(r)){O(st(E).concat([r]));switch(n.type){case f.h8.GROUP_DM:case f.h8.TEXT_CHANNEL:(0,l.GG)(n.record.id);break;case f.h8.USER:(0,l.R2)(n.record.id)}}}),[i,E]),P=o.useCallback((function(t){g(t)}),[g]),L=function(){R("")},R=function(t){v(t);(0,l.rh)(t)};return null==p?null:(0,r.jsxs)(c.ModalRoot,{transitionState:e,size:c.ModalSize.SMALL,"aria-label":K.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({name:p.name}),children:[(0,
r.jsxs)(c.ModalHeader,{separator:A,children:[(0,r.jsx)(c.ModalCloseButton,{className:tt().closeButton,onClick:n}),(0,r.jsxs)("div",{className:tt().header,children:[(0,r.jsx)(c.FormTitle,{tag:"h2",className:nt().marginBottom8,children:K.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({name:p.name})}),(0,r.jsx)(s.ZP,{size:s.ZP.Sizes.MEDIUM,query:h,selectedSection:0,selectedRow:b,sections:[i.length],className:nt().marginTop4,onSelect:function(t,e){null==e?L():w(e)},onSelectionChange:function(t,e){var n;g(e);null===(n=j.current)||void 0===n||n.scrollIntoViewRect({start:44*e,end:44*e+44})},onQueryChange:R,placeholder:K.Z.Messages.ACTIVITY_INVITE_MODAL_SEARCH_PLACEHOLDER,autoFocus:!0,onClear:L})]})]}),(0,r.jsx)(c.ModalListContent,{scrollerRef:j,className:0===i.length?tt().noResults:tt().results,paddingBottom:8,sections:[i.length],sectionHeight:0,renderSection:S.VqG,rowHeight:function(t,e){return t>0?0:null!=i[e]?44:0},renderRow:function(t){var e=t.section,n=t.row;if(e>0)return null;var o=i[n]
;return null==o?null:(0,r.jsx)(mt,{row:n,result:o,sending:null!=o.data.record.id&&E.includes(o.data.record.id),selected:n===b,onMouseEnter:P,onInvite:w},o.data.record.id)},onScroll:function(t){var e=t.currentTarget.scrollTop>0;A!==e&&T(e)}})]})}}}]);
//# sourceMappingURL=df43330bbb9534046416.js.map