"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[88005],{388005:(e,t,n)=>{n.r(t);n.d(t,{default:()=>K});var r=n(785893),o=n(667294),a=n(441143),s=n.n(a),u=n(202351),l=n(945460),i=n(77413),c=n(213276),f=n(748308),S=n(968449),p=n(997582),d=n(473903),m=n(847197),h=n(127661),T=n(652591),O=n(749565),y=n(730381),j=n.n(y),g=36e5,v=Object.freeze({MINUTES_30:18e5,HOURS_1:1*g,HOURS_4:4*g,TODAY:"TODAY"});function b(e){if(e===v.TODAY){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),t.getDate()+1).getTime()-t.getTime()}s()("number"==typeof e,"Invalid custom status clear timeout");return e}var C=n(2590);function _(e){return null==e?null:null!=e.id?"custom":"unicode"}function A(e,t,n,r){var o=e.trim();if(o.length>0||null!=t){S.Ok.updateSetting({text:o.length>0?o:"",expiresAtMs:null!=n?String(j()().add(b(n),"ms").toDate().getTime()):"0",emojiId:null!=t&&null!=t.id?t.id:"0",emojiName:null!=t?t.name:""});T.default.track(C.rMx.CUSTOM_STATUS_UPDATED,{
location:null!=r?r.location:null,emoji_type:_(t),text_len:o.length,clear_after:null!=n?"".concat(n):null})}else S.Ok.updateSetting(void 0)}var M=n(473708),x=n(464322),U=n.n(x);function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function I(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function D(e){D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return D(e)}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){
I(e,t,n[t])}))}return e}function P(e,t){t=null!=t?t:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})));n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}));return e}function L(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e,t){w=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return w(e,t)}var R=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1
;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}function B(){var e=S.Ok.getSetting();return null!=e&&"0"!==e.expiresAtMs?null:v.TODAY}function H(e){return(0,r.jsxs)("div",{className:U().statusOptionItem,children:[(0,r.jsx)(l.Status,{status:e.value,size:10,className:U().statusIcon}),e.label]})}var F=[{key:1,value:l.StatusTypes.ONLINE,label:(0,O.u5)(l.StatusTypes.ONLINE)},{key:2,value:l.StatusTypes.IDLE,label:(0,O.u5)(l.StatusTypes.IDLE)},{key:3,value:l.StatusTypes.DND,label:(0,O.u5)(l.StatusTypes.DND)},{key:4,value:l.StatusTypes.INVISIBLE,label:(0,O.u5)(l.StatusTypes.INVISIBLE)}];function Y(){var e=S.co.getSetting();return F.some((function(t){return t.value===e}))?e:l.StatusTypes.ONLINE}var z=function(e){!function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&w(e,t)}(n,e);var t=Z(n);function n(){N(this,n);var e;(e=t.apply(this,arguments)).state={emojiInfo:null!=e.props.customStatus?e.props.customStatus.emoji:null,text:null!=e.props.customStatus&&null!=e.props.customStatus.state?e.props.customStatus.state:"",clearAfter:B(),status:Y()};e.handleClearStatus=function(){e.setState({emojiInfo:null,text:""})};e.handleSubmit=function(t){t.preventDefault();e.handleSaveStatus()};e.handleStatusChange=function(t){e.setState({text:t})};e.handleEmojiChange=function(t){if(null!=t){var n=null!=t.id?{id:t.id,name:t.name,animated:t.animated}:{id:null,name:t.optionallyDiverseSequence,animated:!1};e.setState({emojiInfo:n})}};e.handleChangeClearAfter=function(t){e.setState({clearAfter:t})};e.handleChangeStatus=function(t){e.setState({status:t})}
;e.handleSaveStatus=function(){var t=e.props,n=t.sourceAnalyticsContext,r=t.onClose,o=e.state,a=o.emojiInfo,s=o.text,u=o.clearAfter,l=o.status;S.co.updateSetting(l);A(s,a,u,n);r()};e.handleKeyPress=function(t){t.which===C.yXg.ENTER&&e.handleSaveStatus()};e.renderEmojiPicker=function(t){var n=t.closePopout,o=e.props.onClose;return(0,r.jsx)(f.Z,{closePopout:n,onSelectEmoji:function(t,r){e.handleEmojiChange(t);r&&n()},pickerIntention:C.HzX.STATUS,onNavigateAway:o})};return e}var o=n.prototype;o.componentDidMount=function(){var e=this.props.sourceAnalyticsContext;T.default.track(C.rMx.OPEN_MODAL,{source:e.location,type:C.jXE.CUSTOM_STATUS_MODAL,load_id:e.loadId})};o.getEmojiButtonRenderer=function(){var e=this.state.emojiInfo;return null==e?null:function(){return(0,r.jsx)(i.Z,{className:U().emoji,emojiId:e.id,emojiName:e.name,animated:Boolean(e.animated)})}};o.renderCustomStatusInput=function(){var e=this,t=this.props.user,n=this.state,o=n.text,a=n.emojiInfo;return(0,r.jsx)(l.FormSection,{
className:U().formGroup,title:M.Z.Messages.CUSTOM_STATUS_MODAL_BODY.format({username:t.username}),children:(0,r.jsxs)("div",{className:U().inputContainer,children:[(0,r.jsx)("div",{className:U().emojiButtonContainer,children:(0,r.jsx)(l.Popout,{renderPopout:this.renderEmojiPicker,position:"left",animation:l.Popout.Animation.NONE,align:"top",children:function(t,n){var o=n.isShown;return(0,r.jsx)(m.Z,P(k({},t),{active:o,className:U().emojiButton,tabIndex:0,renderButtonContents:e.getEmojiButtonRenderer()}))}})}),(0,r.jsx)(l.TextInput,{maxLength:128,value:o,inputClassName:U().input,placeholder:M.Z.Messages.CUSTOM_STATUS_MODAL_PLACEHOLDER,onChange:this.handleStatusChange,onKeyPress:this.handleKeyPress,autoFocus:!0}),o.length>0||null!=a?(0,r.jsx)(l.Button,{focusProps:{offset:{top:8,bottom:8,left:-2,right:-2}},className:U().clearButton,onClick:this.handleClearStatus,look:l.Button.Looks.BLANK,size:l.Button.Sizes.NONE,children:(0,r.jsx)(h.Z,{className:U().clearIcon})}):null]})})}
;o.renderClearAfter=function(){var e=this.state.clearAfter;return(0,r.jsx)(l.FormSection,{className:U().formGroup,title:M.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,children:(0,r.jsx)(l.SingleSelect,{placeholder:M.Z.Messages.CUSTOM_STATUS_CLEAR_AFTER,maxVisibleItems:5,value:e,options:this.clearAfterOptions,onChange:this.handleChangeClearAfter})})};o.renderStatusInput=function(){var e=this.state.status;return(0,r.jsx)(l.FormSection,{className:U().formGroup,title:M.Z.Messages.CUSTOM_STATUS_STATUS_TITLE,children:(0,r.jsx)(l.SingleSelect,{maxVisibleItems:4,value:e,options:F,onChange:this.handleChangeStatus,renderOptionLabel:H})})};o.render=function(){var e=this.props,t=e.transitionState,n=e.onClose;return(0,r.jsx)(c.Z,P(k({},this.analyticsLocation),{children:(0,r.jsxs)(l.ModalRoot,{transitionState:t,className:U().modalRoot,"aria-label":M.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS,children:[(0,r.jsxs)(l.ModalHeader,{separator:!1,className:U().headerContainer,children:[(0,r.jsx)("div",{
className:U().art}),(0,r.jsx)("div",{className:U().header,children:(0,r.jsx)(l.H,{className:U().headerText,children:M.Z.Messages.CUSTOM_STATUS_SET_CUSTOM_STATUS})}),(0,r.jsx)(l.ModalCloseButton,{onClick:n,className:U().modalCloseButton})]}),(0,r.jsxs)(l.ModalContent,{children:[this.renderCustomStatusInput(),this.renderClearAfter(),(0,r.jsx)(l.FormDivider,{className:U().formDivider}),this.renderStatusInput()]}),(0,r.jsxs)(l.ModalFooter,{children:[(0,r.jsx)(l.Button,{onClick:this.handleSubmit,children:M.Z.Messages.SAVE}),(0,r.jsx)(l.Button,{onClick:n,look:l.Button.Looks.LINK,color:U().cancelButton,children:M.Z.Messages.CANCEL})]})]})}))};!function(e,t,n){t&&E(e.prototype,t);n&&E(e,n)}(n,[{key:"clearAfterOptions",get:function(){return[{key:1,value:v.TODAY,label:M.Z.Messages.CUSTOM_STATUS_TODAY},{key:2,value:v.HOURS_4,label:M.Z.Messages.CUSTOM_STATUS_HOURS.format({hours:4})},{key:3,value:v.HOURS_1,label:M.Z.Messages.CUSTOM_STATUS_HOURS.format({hours:1})},{key:4,value:v.MINUTES_30,
label:M.Z.Messages.CUSTOM_STATUS_MINUTES.format({minutes:30})},{key:5,value:null,label:M.Z.Messages.CUSTOM_STATUS_DONT_CLEAR}]}},{key:"analyticsLocation",get:function(){return{page:C.ZY5.CUSTOM_STATUS_MODAL}}}]);return n}(o.PureComponent);const K=u.ZP.connectStores([p.Z,d.default],(function(){var e=d.default.getCurrentUser();s()(null!=e,"CustomStatusModal: user cannot be null");return{customStatus:p.Z.getCustomStatusActivity(),user:e}}),{forwardRef:!0})(z)}}]);
//# sourceMappingURL=78e3eab5913032052011.js.map