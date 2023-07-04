/*! For license information please see 15af4bb36edacaa69bce.js.LICENSE.txt */
"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[24014,88110],{444020:e=>{var n="%[a-f0-9]{2}",t=new RegExp("("+n+")|([^%]+?)","gi"),r=new RegExp("("+n+")+","gi");function o(e,n){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;n=n||1;var t=e.slice(0,n),r=e.slice(n);return Array.prototype.concat.call([],o(t),o(r))}function i(e){try{return decodeURIComponent(e)}catch(i){for(var n=e.match(t)||[],r=1;r<n.length;r++)n=(e=o(n,r).join("")).match(t)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{e=e.replace(/\+/g," ");return decodeURIComponent(e)}catch(n){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},t=r.exec(e);t;){try{n[t[0]]=decodeURIComponent(t[0])}catch(e){var o=i(t[0]);o!==t[0]&&(n[t[0]]=o)}t=r.exec(e)}n["%C2"]="�";for(var a=Object.keys(n),c=0;c<a.length;c++){var l=a[c];e=e.replace(new RegExp(l,"g"),n[l])}
return e}(e)}}},727418:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");e[5]="de";if("5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e}));return"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,l=o(e),u=1;u<arguments.length;u++){a=Object(arguments[u]);for(var s in a)t.call(a,s)&&(l[s]=a[s]);if(n){c=n(a);for(var f=0;f<c.length;f++)r.call(a,c[f])&&(l[c[f]]=a[c[f]])}}return l}},517563:(e,n,t)=>{var r=t(970610),o=t(727418),i=t(444020)
;function a(e,n){return n.encode?n.strict?r(e):encodeURIComponent(e):e}function c(e){return Array.isArray(e)?e.sort():"object"==typeof e?c(Object.keys(e)).sort((function(e,n){return Number(e)-Number(n)})).map((function(n){return e[n]})):e}n.extract=function(e){return e.split("?")[1]||""};n.parse=function(e,n){var t=function(e){var n;switch(e.arrayFormat){case"index":return function(e,t,r){n=/\[(\d*)\]$/.exec(e);e=e.replace(/\[\d*\]$/,"");if(n){void 0===r[e]&&(r[e]={});r[e][n[1]]=t}else r[e]=t};case"bracket":return function(e,t,r){n=/(\[\])$/.exec(e);e=e.replace(/\[\]$/,"");n?void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=[t]:r[e]=t};default:return function(e,n,t){void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=n}}}(n=o({arrayFormat:"none"},n)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^(\?|#|&)/,"")))return r;e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),o=n.shift(),a=n.length>0?n.join("="):void 0;a=void 0===a?null:i(a);t(i(o),a,r)}))
;return Object.keys(r).sort().reduce((function(e,n){var t=r[n];Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[n]=c(t):e[n]=t;return e}),Object.create(null))};n.stringify=function(e,n){var t=function(e){switch(e.arrayFormat){case"index":return function(n,t,r){return null===t?[a(n,e),"[",r,"]"].join(""):[a(n,e),"[",a(r,e),"]=",a(t,e)].join("")};case"bracket":return function(n,t){return null===t?a(n,e):[a(n,e),"[]=",a(t,e)].join("")};default:return function(n,t){return null===t?a(n,e):[a(n,e),"=",a(t,e)].join("")}}}(n=o({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,n);if(Array.isArray(o)){var i=[];o.slice().forEach((function(e){void 0!==e&&i.push(t(r,e,i.length))}));return i.join("&")}return a(r,n)+"="+a(o,n)})).filter((function(e){return e.length>0})).join("&"):""}},970610:e=>{e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){
return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},734691:(e,n,t)=>{t.d(n,{Z:()=>O});var r=t(281110),o=t(630631),i=t(744564),a=t(571690),c=t(223219),l=t(652591),u=t(775173),s=t(488110),f=t(120415),p=t(735885),d=t(2590),y=t(473708);function m(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){m(e,n,t[n])}))}return e}function b(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){
return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}const O={open:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{openWithoutBackstack:!1};i.Z.dispatch(h({type:"USER_SETTINGS_MODAL_OPEN",section:e,subsection:n},t));(0,p.jN)(d.S9g.USER_SETTINGS)},init:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2?arguments[2]:void 0;i.Z.dispatch(h({type:"USER_SETTINGS_MODAL_INIT",section:e,subsection:n},t))},close:function(){var e=c.Z.onClose;i.Z.dispatch({type:"USER_SETTINGS_MODAL_CLOSE"});null!=e&&e()},setSection:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
;i.Z.dispatch(h({type:"USER_SETTINGS_MODAL_SET_SECTION",section:e,subsection:n},t))},clearSubsection:function(e){i.Z.dispatch({type:"USER_SETTINGS_MODAL_CLEAR_SUBSECTION",forSection:e})},clearScrollPosition:function(e){i.Z.dispatch({type:"USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",forSection:e})},updateAccount:function(e){i.Z.dispatch({type:"USER_SETTINGS_MODAL_UPDATE_ACCOUNT",settings:e})},submitComplete:function(){i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT_COMPLETE"})},reset:function(){i.Z.dispatch({type:"USER_SETTINGS_MODAL_RESET"})},saveAccountChanges:function(e,n){var t=this;i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT"});var c=e.username,p=e.email,m=e.emailToken,O=e.password,v=e.avatar,E=e.newPassword,S=e.discriminator,_=n.close;return(0,s.Z)((function(e){var n=b(h({username:c,email:p,email_token:m,password:O,avatar:v,new_password:E},e),{discriminator:null!=S&&""!==S?S:void 0}),t=o.Z.get(d.JkL),i=(0,f.xJ)();if(null!=i&&null!=t){n.push_provider=i;n.push_token=t}
var l=o.Z.get(d.scU);if(null!=d.mvA&&null!=l){n.push_voip_provider=d.mvA;n.push_voip_token=l}return(0,a.withCaptchaInterceptor)((function(e){return r.Z.patch({url:d.ANM.ME,oldFormErrors:!0,body:h({},n,e)})}))}),{checkEnabled:!1,modalProps:{title:y.Z.Messages.TWO_FA_CHANGE_ACCOUNT},hooks:{onEarlyClose:function(){return i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT_FAILURE",errors:{}})}}}).then((function(e){var n=e.body,r=n.token;l.default.track(d.rMx.USER_AVATAR_UPDATED,{animated:(0,u.xR)(n.avatar)});delete n.token;i.Z.dispatch({type:"UPDATE_TOKEN",token:r,userId:n.id});i.Z.dispatch({type:"CURRENT_USER_UPDATE",user:n});null!=E&&i.Z.dispatch({type:"USER_PASSWORD_UPDATE",user:n,newPassword:E});null!=O&&null!=E&&i.Z.dispatch({type:"PASSWORD_UPDATED",userId:n.id});_?t.close():t.submitComplete();return e}),(function(e){i.Z.dispatch({type:"USER_SETTINGS_MODAL_SUBMIT_FAILURE",errors:e.body});return e}))}}},919244:(e,n,t)=>{t.d(n,{Z:()=>O})
;var r=t(785893),o=t(667294),i=t(294184),a=t.n(i),c=t(945460),l=t(473708),u=t(775823),s=t.n(u);function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return p(e)}function d(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e,n){y=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return y(e,n)}var m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){
var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return d(this,t)}}var b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&y(e,n)}(t,e);var n=h(t);function t(){f(this,t);var e;(e=n.apply(this,arguments)).state={code:"",errorMessage:"",retrySuccess:!1};e.setRef=function(n){e._input=n};e.getLabelText=function(){var n;return null!==(n=e.props.label)&&void 0!==n?n:e.props.disallowBackupCodes?l.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL:l.Z.Messages.TWO_FA_ENTER_TOKEN_LABEL};e.getSupportedCodeTypes=function(){return e.props.disallowBackupCodes?l.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP:l.Z.Messages.TWO_FA_AUTH_CODE};e.getPlaceholder=function(){return e.props.forceNoPlaceholder?null:null!==(n=e.props.placeholder)&&void 0!==n?n:e.getSupportedCodeTypes()
;var n};e.errorPresent=function(){return null!=e.props.error&&""!==e.props.error||null!=e.state.errorMessage&&""!==e.state.errorMessage};e.handleRetry=function(){var n=e.props.onRetry;null==n||n().then((function(){return e.setState({retrySuccess:!0})}))};e.handleSubmit=function(n){n.preventDefault();var t=e.props,r=t.handleSubmit,o=t.onError;r(e.state.code).catch((function(n){if(null!=n.body){null==o||o(n.body);n.body.message&&e.setState({errorMessage:n.body.message})}}))};e.handleCancel=function(){var n=e.props,t=n.onClose,r=n.handleEarlyClose;t();null==r||r()};e.handleCodeChange=function(n){e.setState({code:n})};return e}t.prototype.render=function(){var e,n=this.props,t=n.title,i=n.actionText,u=n.children,f=n.error,p=n.isLoading,d=n.maxLength,y=n.transitionState,m=n.helpMessage,h=n.retryPrompt,b=n.retrySuccessMessage,O=this.state,v=O.code,E=O.errorMessage,S=O.retrySuccess,_=o.Children.count(u)>0?(0,r.jsx)(c.Card,{type:c.Card.Types.WARNING,className:s().card,children:(0,
r.jsx)(c.Text,{variant:"text-md/normal",children:u})}):null,g=null!=h?(0,r.jsxs)(c.Text,{className:a()(s().submitText,s().spacing),variant:"text-sm/normal",children:[(0,r.jsx)("br",{}),(0,r.jsx)(c.Clickable,{className:a()(s().spacing,s().link),onClick:this.handleRetry,children:(0,r.jsx)(c.Anchor,{children:h})})]}):null,T=S?(0,r.jsx)(c.Card,{type:c.Card.Types.SUCCESS,className:s().card,children:(0,r.jsx)(c.Text,{variant:"text-md/normal",children:b})}):null;return(0,r.jsx)(c.ModalRoot,{transitionState:y,children:(0,r.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,r.jsx)(c.ModalHeader,{separator:!1,children:(0,r.jsx)(c.Heading,{variant:"heading-lg/semibold",children:t})}),(0,r.jsxs)(c.ModalContent,{children:[null!=m?(0,r.jsx)(c.Text,{color:"text-normal",variant:"text-md/normal",className:s().spacing,children:m}):null,_,T,(0,r.jsxs)(c.FormItem,{title:this.getLabelText(),className:s().spacing,children:[(0,r.jsx)(c.TextInput,{inputRef:this.setRef,onChange:this.handleCodeChange,
placeholder:null!==(e=this.getPlaceholder())&&void 0!==e?e:void 0,maxLength:null!=d?d:10,value:v,autoComplete:"one-time-code",autoFocus:!0}),this.errorPresent()?(0,r.jsx)(c.Text,{color:"text-danger",variant:"text-xs/normal",className:s().error,children:null!=f?f:E}):null,g]})]}),(0,r.jsxs)(c.ModalFooter,{children:[(0,r.jsx)(c.Button,{type:"submit",disabled:p||0===v.length,children:null!=i?i:l.Z.Messages.CONFIRM}),(0,r.jsx)(c.Button,{onClick:this.handleCancel,disabled:p,look:c.Button.Looks.LINK,color:c.Button.Colors.PRIMARY,children:l.Z.Messages.CANCEL})]})]})})};return t}(o.PureComponent);b.defaultProps={btnClass:"",isLoading:!1,disallowBackupCodes:!1,error:null,forceNoPlaceholder:!1};const O=b},924326:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(667294);function o(){var e=r.useRef(null);null===e.current&&(e.current=new AbortController);r.useEffect((function(){return function(){var n;null===(n=e.current)||void 0===n||n.abort()}}),[]);return e.current.signal}},248046:(e,n,t)=>{t.d(n,{Z8:()=>T,
nG:()=>P,BH:()=>A,Dd:()=>I,$z:()=>N,bD:()=>w,nT:()=>R,oK:()=>M,BO:()=>L,Ft:()=>U});var r=t(224736),o=t.n(r),i=t(441143),a=t.n(i),c=t(496486),l=t.n(c),u=t(940060),s=t(73904),f=t(734394),p=t(948832),d=t(382060),y=t(682776),m=t(272200),h=t(127624),b=t(2590),O=t(520453);function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function E(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){E(e,n,t[n])}))}return e}function _(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e)
;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){
var n,t=e.rootCommand,r=e.command,o=e.applicationId,i=e.subCommandPath;if(null!=t.permissions&&t.permissions.length>0){n={};t.permissions.forEach((function(e){n[e.id]=e}))}var a,c,l,f=(null!=i?i:[]).map((function(e){return e.name})),p=(null!=i?i:[]).map((function(e){return e.displayName}));return{version:t.version,guildId:t.guild_id,id:[t.id].concat(g(f)).join(h.oQ),name:[t.name].concat(g(f)).join(" "),serverLocalizedName:r.name_localized,applicationId:o,type:null!==(a=t.type)&&void 0!==a?a:s.yU.CHAT,inputType:m.iw.BOT,description:r.description,options:C(r.options),rootCommand:t,subCommandPath:i,defaultMemberPermissions:null==t.default_member_permissions?void 0:u.Z.deserialize(t.default_member_permissions),dmPermission:t.dm_permission,permissions:n,displayName:[null!==(c=t.name_localized)&&void 0!==c?c:t.name].concat(g(p)).join(" "),displayDescription:null!==(l=r.description_localized)&&void 0!==l?l:r.description,nsfw:t.nsfw}}function C(e){return null==e?void 0:e.map((function(e){
var n,t,r,o=_(S({},e),{choices:(r=e.choices,null==r?void 0:r.map((function(e){var n;return _(S({},e),{displayName:null!==(n=e.name_localized)&&void 0!==n?n:e.name})}))),options:C(e.options),serverLocalizedName:e.name_localized,displayName:null!==(n=e.name_localized)&&void 0!==n?n:e.name,displayDescription:null!==(t=e.description_localized)&&void 0!==t?t:e.description});return e.type===s.jw.CHANNEL&&"channel_types"in e?_(S({},o),{channelTypes:e.channel_types}):e.type!==s.jw.NUMBER&&e.type!==s.jw.INTEGER||!("min_value"in e)&&!("max_value"in e)?e.type===s.jw.STRING&&("min_length"in e||"max_length"in e)?_(S({},o),{minLength:e.min_length,maxLength:e.max_length}):o:_(S({},o),{minValue:e.min_value,maxValue:e.max_value})}))}function j(e){var n=e.rootCommand,t=e.command,r=e.applicationId,o=e.subCommandPath;if(t.hasOwnProperty("id")){if(null==t.options||0===t.options.length)return[T({rootCommand:n,command:t,applicationId:r,subCommandPath:o})]
}else if(t.type!==s.jw.SUB_COMMAND&&t.type!==s.jw.SUB_COMMAND_GROUP&&(null==t.options||0===t.options.length))return[T({rootCommand:n,command:t,applicationId:r,subCommandPath:o})];var i=[];if(null==t.options)return i;for(var a=t.options.filter((function(e){return e.type===s.jw.SUB_COMMAND_GROUP})),c=0;c<a.length;c++){var l,u;(l=i).push.apply(l,g(j({rootCommand:n,command:a[c],applicationId:r,subCommandPath:(null!=o?o:[]).concat([{name:a[c].name,type:s.jw.SUB_COMMAND_GROUP,displayName:null!==(u=a[c].name_localized)&&void 0!==u?u:a[c].name}])})))}for(var f=t.options.filter((function(e){return e.type===s.jw.SUB_COMMAND})),p=0;p<f.length;p++){var d;i.push(T({rootCommand:n,command:f[p],applicationId:r,subCommandPath:(null!=o?o:[]).concat([{name:f[p].name,type:s.jw.SUB_COMMAND,displayName:null!==(d=f[p].name_localized)&&void 0!==d?d:f[p].name}])}))}0===a.length&&0===f.length&&i.push(T({rootCommand:n,command:t,applicationId:r,subCommandPath:o}));return i}function P(e){
return l().flatMap(e,(function(e){a()(null!=e.id,"Missing command id");return j({rootCommand:e,command:e,applicationId:e.application_id,subCommandPath:void 0})}))}function A(e){return b.Xyh.test(e.trim())}function I(e,n,t,r){var o=[];l()(e).forEach((function(e){n.test(e.displayName)&&(null==e.predicate||e.predicate(t))&&o.push(e)}));return o.slice(0,r)}function N(e){var n=e.type===s.jw.STRING,t=e.type===s.jw.CHANNEL,r=e.type===s.jw.USER||e.type===s.jw.MENTIONABLE,o=e.type===s.jw.ROLE||e.type===s.jw.MENTIONABLE;return{canMentionEveryone:n||o,canMentionHere:n,canMentionChannels:n||t,canMentionUsers:n||r,canMentionRoles:n||o,canMentionAnyGuildUser:r,canMentionNonMentionableRoles:o}}function w(e){return o()(e).subtract(1).toString()}function R(e,n,t,r){return!!M(y.Z,p.Z,!1,e)&&(e.isPrivate()&&t>0||(null!==(o=null==r?void 0:r[n])&&void 0!==o?o:0)>0);var o}var M=function(e,n,t,r){
return!t&&(r.isMultiUserDM()?n.getIntegrations(r.id).length>0:r.isDM()?!r.isSystemDM()&&(null!=r.rawRecipients.find((function(e){return e.bot}))||n.getIntegrations(r.id).length>0):!r.isArchivedLockedThread()&&(!!(0,d.Em)(r.type)&&e.can(u.Z.combine(O.Pl.USE_APPLICATION_COMMANDS,O.Pl.SEND_MESSAGES),r)))},L=u.Z.deserialize(0);function U(e){var n=e.PermissionStore,t=e.guild,r=e.selfMember,o=e.applicationLevelPermissions,i=e.commandLevelPermissions,a=e.defaultMemberPermissions;if(t.ownerId===r.userId||n.can(O.Pl.ADMINISTRATOR,t))return!0;var c=t.id;if(null!=i){var l=D(r,c,i);if("boolean"==typeof l)return l}var s=D(r,c,o);return!("boolean"==typeof s&&!s)&&(null==a||!u.Z.equals(a,L)&&n.can(a,t))}function D(e,n,t){var r=t[(0,f.rE)(e.userId,m.Kw.USER)];if(null!=r)return r.permission;var o=!1,i=!0,a=!1,c=void 0;try{for(var l,u=e.roles[Symbol.iterator]();!(i=(l=u.next()).done);i=!0){var s=l.value,p=t[(0,f.rE)(s,m.Kw.ROLE)];if(null!=p){o=!0;if(p.permission)return!0}}}catch(e){a=!0;c=e}finally{try{
i||null==u.return||u.return()}finally{if(a)throw c}}if(o)return!1;var d=t[(0,f.rE)(n,m.Kw.ROLE)];return null!=d?d.permission:null}},734394:(e,n,t)=>{t.d(n,{gw:()=>o,rE:()=>i});var r=t(73904);t(272200);function o(e,n){return e===r.yU.CHAT?"/"+n:n}function i(e,n){return"".concat(e,":").concat(n)}},948832:(e,n,t)=>{t.d(n,{M:()=>d,Z:()=>T});var r=t(202351),o=t(744564),i=t(451936),a=t(223397);function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return u(e)}function s(e,n){return!n||"object"!==y(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e,n){f=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e}
;return f(e,n)}function p(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d,y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=u(e);if(n){var o=u(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)}}!function(e){e[e.NOT_FETCHED=0]="NOT_FETCHED";e[e.FETCHING=1]="FETCHING";e[e.FETCHED=2]="FETCHED";e[e.FETCH_FAILED=3]="FETCH_FAILED"}(d||(d={}));var h=new Map,b=new Map,O=[],v=d.NOT_FETCHED,E=[],S=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&f(e,n)}(t,e);var n=m(t);function t(){l(this,t);return n.apply(this,arguments)}var r=t.prototype;r.getIntegrations=function(e){var n;return null!==(n=h.get(e))&&void 0!==n?n:E};r.getAllIntegrations=function(){return h};r.getIntegrationsFetchState=function(e){var n
;return null!==(n=b.get(e))&&void 0!==n?n:d.NOT_FETCHED};r.getApplicationsShelfFetchState=function(){return v};r.getApplicationsShelf=function(){return O};r.__getLocalVars=function(){return{integrationsByChannel:h,integrationsByChannelFetchState:b,applicationsShelf:O,applicationsShelfFetchState:v,EMPTY:E,store:g}};return t}(r.ZP.Store);S.displayName="PrivateChannelIntegrationStore";function _(e){return e.sort((function(e,n){return e.application.name.localeCompare(n.application.name)}))}var g=new S(o.Z,{LOGOUT:function(){h.clear()},CONNECTION_OPEN:function(){h.clear();b.clear()},CHANNEL_SELECT:function(e){var n=e.channelId;if(null==n||b.get(n)!==d.FETCH_FAILED)return!1;b.set(n,d.NOT_FETCHED)},APPLICATIONS_SHELF_FETCH_START:function(){v=d.FETCHING},APPLICATIONS_SHELF_FETCH_SUCCESS:function(e){var n=e.applications;O=n.map(i.Z.createFromServer).sort((function(e,n){return e.name.localeCompare(n.name)}));v=d.FETCHED},APPLICATIONS_SHELF_FETCH_FAIL:function(){v=d.FETCH_FAILED},
FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START:function(e){var n=e.channelId;h.set(n,null);b.set(n,d.FETCHING)},FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS:function(e){var n=e.channelId,t=e.integrations;h.set(n,_(t.map(a.F)));b.set(n,d.FETCHED)},FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL:function(e){var n=e.channelId;b.set(n,d.FETCH_FAILED)},PRIVATE_CHANNEL_INTEGRATION_CREATE:function(e){var n=e.integration,t=h.get(n.channel_id);if(null==t)return!1;h.set(n.channel_id,_(p(t).concat([(0,a.F)(n)])))},PRIVATE_CHANNEL_INTEGRATION_UPDATE:function(e){var n=e.integration,t=h.get(n.channel_id);if(null==t)return!1;var r=(0,a.F)(n),o=t.findIndex((function(e){return e.application.id===r.application.id})),i=p(t);-1===o?i.push(r):i[o]=r;h.set(r.channel_id,_(i))},PRIVATE_CHANNEL_INTEGRATION_DELETE:function(e){var n=e.channelId,t=e.applicationId,r=h.get(n);if(null==r)return!1;h.set(n,r.filter((function(e){return e.application.id!==t})))},CHANNEL_DELETE:function(e){var n=e.channel;return h.delete(n.id)}})
;const T=g},223219:(e,n,t)=>{t.d(n,{Z:()=>F});var r=t(496486),o=t.n(r),i=t(202351),a=t(744564),c=t(473903),l=t(2590);function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1;r.configurable=!0;"value"in r&&(r.writable=!0);Object.defineProperty(e,r.key,r)}}function f(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)};return p(e)}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){f(e,n,t[n])}))}return e}function y(e,n){
return!n||"object"!==h(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){m=Object.setPrototypeOf||function(e,n){e.__proto__=n;return e};return m(e,n)}var h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return!0}catch(e){return!1}}();return function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y(this,t)}}var O=l.QZA.CLOSED,v=null,E=null,S={},_={},g={},T=null,C=null,j=!1,P=!1,A=null,I=null,N=null,w=[],R=null,M=null;function L(e){var n,t,r,o,i,a,u=c.default.getCurrentUser();if(null==u)return U()
;E=null!==(n=e.section)&&void 0!==n?n:E;R=null!==(t=e.section)&&void 0!==t?t:E;null!=e.subsection&&null!=E&&(S[E]=e.subsection);null!=e.scrollPosition&&null!=E&&(_[E]=e.scrollPosition);P=!!e.openWithoutBackstack;O=l.QZA.OPEN;g={};T=f({},l.oAB.ACCOUNT,{userId:u.id,username:u.username,discriminator:u.discriminator,email:u.email,avatar:u.avatar,password:"",newPassword:null,claimed:u.isClaimed()});C=d({},T);I=null!==(r=e.onClose)&&void 0!==r?r:null;N=null!==(o=e.analyticsLocation)&&void 0!==o?o:null;w=null!==(i=e.analyticsLocations)&&void 0!==i?i:[];M=null!==(a=e.impressionSource)&&void 0!==a?a:null}function U(){O=l.QZA.CLOSED;j=!1;T=null;R=null;C=null;v=null;E=null;S={};_={};I=null;N=null;w=[];M=null}function D(){O=l.QZA.OPEN;g={}}var x=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}});n&&m(e,n)}(t,e);var n=b(t)
;function t(){u(this,t);return n.apply(this,arguments)}var r=t.prototype;r.initialize=function(){this.waitFor(c.default)};r.hasChanges=function(){return null!=C&&null!=T&&(!(!this.isOpen()&&A!==l.cII.USER_SETTINGS)&&!o().isEqual(C,T))};r.isOpen=function(){return j};r.getPreviousSection=function(){return v};r.getSection=function(){return E};r.getSubsection=function(){return null!=E?S[E]:null};r.getScrollPosition=function(){return null!=E?_[E]:null};r.shouldOpenWithoutBackstack=function(){return P};r.getProps=function(){return{submitting:O===l.QZA.SUBMITTING,section:E,subsection:null!=E?S[E]:null,scrollPosition:null!=E?_[E]:null,settings:C,errors:g,hasChanges:this.hasChanges(),openWithoutBackstack:P,analyticsLocation:N,analyticsLocations:w,initialSection:R,impressionSource:M}};r.__getLocalVars=function(){return{formState:O,previousSection:v,section:E,subsections:S,scrollPositions:_,errors:g,originalSettings:T,settings:C,open:j,openWithoutBackstack:P,tab:A,onClose:I,analyticsLocation:N,
analyticsLocations:w,initialSection:R,impressionSource:M}};!function(e,n,t){n&&s(e.prototype,n);t&&s(e,t)}(t,[{key:"onClose",get:function(){return I}}]);return t}(i.ZP.Store);x.displayName="UserSettingsModalStore";const F=new x(a.Z,{USER_SETTINGS_MODAL_OPEN:function(e){j=!0;L(e)},USER_SETTINGS_MODAL_INIT:L,USER_SETTINGS_MODAL_CLOSE:U,LOGOUT:U,USER_SETTINGS_MODAL_SUBMIT:function(){O=l.QZA.SUBMITTING},USER_SETTINGS_MODAL_SUBMIT_FAILURE:function(e){if(O!==l.QZA.SUBMITTING)return!1;O=l.QZA.OPEN;E=l.oAB.ACCOUNT;var n;g=null!==(n=e.errors)&&void 0!==n?n:{}},USER_SETTINGS_MODAL_SET_SECTION:function(e){v=E;E=e.section;N=null;var n;w=null!==(n=e.analyticsLocations)&&void 0!==n?n:[];null!=e.subsection&&(S[E]=e.subsection)},USER_SETTINGS_MODAL_CLEAR_SUBSECTION:function(e){var n=e.forSection;null!=n?delete S[n]:null!=E&&delete S[E]},USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION:function(e){var n=e.forSection;null!=n?delete _[n]:null!=E&&delete _[E]},USER_SETTINGS_MODAL_UPDATE_ACCOUNT:function(e){
var n=e.settings;null==C&&(C={});var t=C[l.oAB.ACCOUNT];C[l.oAB.ACCOUNT]=d({},t,n)},USER_SETTINGS_MODAL_SUBMIT_COMPLETE:D,USER_SETTINGS_MODAL_RESET:function(){var e=c.default.getCurrentUser();D();if(null!=e){T=f({},l.oAB.ACCOUNT,{userId:e.id,username:e.username,discriminator:e.discriminator,email:e.email,avatar:e.avatar,password:"",newPassword:null,claimed:e.isClaimed()});C=d({},T)}},DRAWER_SELECT_TAB:function(e){A=e.tab;return null==E&&A===l.cII.USER_SETTINGS&&L({type:"USER_SETTINGS_MODAL_INIT",section:null,subsection:null,scrollPosition:null,openWithoutBackstack:!1})}})},128181:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(785893),o=(t(667294),t(633878));function i(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function a(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){
var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||(o[t]=e[t])}return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function l(e){var n=e.width,t=void 0===n?16:n,l=e.height,u=void 0===l?16:l,s=e.color,f=void 0===s?"currentColor":s,p=c(e,["width","height","color"]);return(0,r.jsx)("svg",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t)
;"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){i(e,n,t[n])}))}return e}({},(0,o.Z)(p)),{width:t,height:u,viewBox:"0 0 16 15.2",children:(0,r.jsx)("path",{d:"M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",fill:f})}))}},488110:(e,n,t)=>{t.d(n,{Z:()=>h,O:()=>y});var r=t(473903),o=t(496486),i=function(e){return"function"==typeof e?e():e};t.n(o)().curry((function(e,n,t){return i(n)?e(t):t({})}));function a(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){a(e,n,t[n])}))}return e}
function l(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}));return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||(o[t]=e[t])}return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){t=i[r];n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}var s,f,p=function(){throw new Error("updateModal has not been implemented.")},d=t(680918);s=d.showModal;p=d.updateModalProps;f=t(264817).Mr;function y(e){
var n=e.promiseFn,t=e.resolve,r=e.reject,o=e.modalProps,i=void 0===o?{}:o,a=e.hooks,u=(void 0===a?{}:a).onEarlyClose,d=function(){null==u||u()},y=function(e){f(O);t(e)},h=function(e){f(O);r(e)},b=function(e){var n=e.res;p(O,v,d,l(c({},i),{error:n.body.message}))};if(null!=s)var O=s(v,d,i);else null==u||u();function v(e){p(O,v,d,l(c({},i),{isLoading:!0}));return m({promiseFn:n,resolve:y,reject:h,code:e,mfaCodeHandler:b,isModalOpen:!0})}}function m(e){var n=e.promiseFn,t=e.resolve,r=e.reject,o=e.code,i=e.mfaCodeHandler,a=void 0===i?y:i,l=e.isModalOpen,s=void 0!==l&&l,f=u(e,["promiseFn","resolve","reject","code","mfaCodeHandler","isModalOpen"]);return n(null!=o?{code:o}:{}).then(t,(function(e){if(function(e,n){return e.body&&60008===e.body.code||n&&429===e.status}(e,s))return a(c({promiseFn:n,resolve:t,reject:r,res:e},f));r(e)}))}function h(e,n){
var t,o,a=null!=n?n:{},l=a.checkEnabled,s=void 0===l?null!==(o=null===(t=r.default.getCurrentUser())||void 0===t?void 0:t.mfaEnabled)&&void 0!==o&&o:l,f=u(a,["checkEnabled"]);return new Promise((function(n,t){(i(s)?y:m)(c({promiseFn:e,resolve:n,reject:t},f))}))}},680918:(e,n,t)=>{t.r(n);t.d(n,{showModal:()=>l,updateModalProps:()=>u});var r=t(785893),o=(t(667294),t(264817)),i=t(919244);function a(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t;return e}var c=function(e,n,t){return function(o){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));r.forEach((function(n){a(e,n,t[n])}))}return e}({handleSubmit:e,handleEarlyClose:n},t,o))}};function l(e,n,t){return(0,o.h7)(c(e,n,t),{onCloseCallback:n
})}function u(e,n,t,r){return(0,o.o)(e,c(n,t,r))}},989824:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(667294),o={};function i(e){var n=(0,r.useRef)(o);n.current===o&&(n.current=e());return n.current}}}]);
//# sourceMappingURL=15af4bb36edacaa69bce.js.map