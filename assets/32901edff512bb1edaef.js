"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[21859],{520322:(e,t,n)=>{n.d(t,{Av:()=>d,wE:()=>A,hp:()=>p});var r=n(281110),a=n(744564),o=n(799663),l=n(571690),u=n(652591),i=n(561210),s=n(2590);function c(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))));r.forEach((function(t){c(e,t,n[t])}))}return e}function d(e,t){(0,o.Z)(e,t);u.default.track(s.rMx.AGE_GATE_ACTION,{source:t,action:i.Al.AGE_GATE_SUBMITTED});return(0,l.withCaptchaInterceptor)((function(t){return r.Z.patch({url:s.ANM.ME,oldFormErrors:!0,body:f({date_of_birth:e.format("YYYY-MM-DD")},t)})})).then((function(e){var n=e.body;a.Z.dispatch({
type:"CURRENT_USER_UPDATE",user:n});u.default.track(s.rMx.AGE_GATE_ACTION,{source:t,action:i.Al.AGE_GATE_SUCCESS})}))}function A(e){a.Z.dispatch({type:"AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"});u.default.track(s.rMx.AGE_GATE_ACTION,{source:e,action:i.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION})}function p(e){a.Z.dispatch({type:"AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"});u.default.track(s.rMx.AGE_GATE_ACTION,{source:e,action:i.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER})}},852465:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(785893),a=n(667294),o=n(294184),l=n.n(o),u=n(730381),i=n.n(u),s=n(945460),c=n(737797),f=n(473708),d=n(645522),A=n.n(d);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){o.push(r.value)
;if(t&&o.length===t)break}}catch(e){u=!0;a=e}finally{try{l||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=i()().localeData().months(),E=Array.from(Array(31).keys()).map((function(e){return{value:e+1,label:"".concat(e+1)}})),m=Array.from(Array(12).keys()).map((function(e){return{value:e+1,label:y[e]}}));var v=/[a-zA-Z0-9]/;function _(e){var t=e.options,n=e.selectOption,o=e.children,l=h(a.useState(""),2),u=l[0],i=l[1];a.useEffect((function(){if(""!==u){var e=setTimeout((function(){
return i("")}),1e3);return function(){return clearTimeout(e)}}}),[u,i]);var s=a.useCallback((function(e){if(v.test(e.key)){var r="".concat(u).concat(e.key.toLowerCase()),a=t.find((function(e){return e.label.toLowerCase().startsWith(r)}));null!=a&&n(a.value);i(r)}}),[n,i,u,t]);return(0,r.jsx)("div",{onKeyDown:s,children:o})}function b(){var e=i()().localeData().longDateFormat("L"),t=e.indexOf("D"),n=e.indexOf("M"),r=e.indexOf("Y");if(-1===t||-1===n||-1===r){t=0;n=1;r=2}return[{index:t,type:"day"},{index:n,type:"month"},{index:r,type:"year"}].sort((function(e,t){return e.index<t.index?-1:1}))}const T=a.forwardRef((function(e,t){var n=function(e){switch(U[e].type){case"day":P.push({key:"day",input:(0,r.jsx)(_,{options:E,selectOption:M,children:(0,r.jsx)(c.Z,{ref:k,className:A().inputDay,"aria-label":f.Z.Messages.AGE_GATE_DOB_DAY,menuPlacement:c.Z.MenuPlacements.TOP,placeholder:(0,r.jsx)("span",{"aria-hidden":!0,children:f.Z.Messages.AGE_GATE_DOB_DAY}),options:E,value:G,
onChange:function(t){var n=t.value;M(n);j(e+1)},maxMenuHeight:215})})});break;case"month":P.push({key:"month",input:(0,r.jsx)(_,{options:m,selectOption:x,children:(0,r.jsx)(c.Z,{ref:Z,className:A().inputMonth,"aria-label":f.Z.Messages.AGE_GATE_DOB_MONTH,menuPlacement:c.Z.MenuPlacements.TOP,placeholder:(0,r.jsx)("span",{"aria-hidden":!0,children:f.Z.Messages.AGE_GATE_DOB_MONTH}),options:m,value:g,onChange:function(t){var n=t.value;x(n);j(e+1)},maxMenuHeight:215})})});break;case"year":P.push({key:"year",input:(0,r.jsx)(_,{options:w,selectOption:D,children:(0,r.jsx)(c.Z,{ref:I,className:A().inputYear,"aria-label":f.Z.Messages.AGE_GATE_DOB_YEAR,menuPlacement:c.Z.MenuPlacements.TOP,placeholder:(0,r.jsx)("span",{"aria-hidden":!0,children:f.Z.Messages.AGE_GATE_DOB_YEAR}),options:w,value:O,onChange:function(t){var n=t.value;D(n);j(e+1)},maxMenuHeight:215})})})}},o=e.value,u=e.wrapperClassName,d=e.onChange,p=e.onPopulated,y=e.error,v=e.autoFocus,T=function(e){var t=null,n=null,r=null
;if(null!=e){t=e.date();n=e.month()+1;r=e.year()}var o=h(a.useState(t),2),l=o[0],u=o[1],i=h(a.useState(n),2),s=i[0],c=i[1],f=h(a.useState(r),2);return{day:l,setDay:u,month:s,setMonth:c,year:f[0],setYear:f[1]}}(o),G=T.day,M=T.setDay,g=T.month,x=T.setMonth,O=T.year,D=T.setYear,N=a.useMemo((function(){return null!=G&&null!=g&&null!=O?i()("".concat(G,"/").concat(g,"/").concat(O),"DD/MM/YYYY"):null}),[G,g,O]);a.useEffect((function(){d((null==N?void 0:N.isValid())?N:null)}),[N,d]);var S=y;null==N||N.isValid()||(S=f.Z.Messages.AGE_GATE_INVALID_BIRTHDAY);var w=function(){var e=(new Date).getFullYear(),t=a.useRef(Array.from(Array(150).keys()).map((function(t){return{value:e-t-3,label:"".concat(e-t-3)}})));a.useEffect((function(){t.current=Array.from(Array(150).keys()).map((function(t){return{value:e-t-3,label:"".concat(e-t-3)}}))}),[e]);return t.current}(),R=h(a.useState(v?0:-1),2),C=R[0],j=R[1],k=a.useRef(null),Z=a.useRef(null),I=a.useRef(null),U=a.useMemo(b,[]),Y=a.useCallback((function(){
var e;switch(null===(e=U[C])||void 0===e?void 0:e.type){case"day":var t;null===(t=k.current)||void 0===t||t.focus();break;case"month":var n;null===(n=Z.current)||void 0===n||n.focus();break;case"year":var r;null===(r=I.current)||void 0===r||r.focus()}}),[C,k,Z,I,U]);a.useEffect((function(){setTimeout(Y,500)}),[]);a.useEffect((function(){C>=U.length?null==p||p():Y()}),[C,Y]);for(var P=[],L=0;L<3;L++)n(L);return(0,r.jsxs)("fieldset",{className:l()(A().container,u),children:[(0,r.jsx)(s.FormTitle,{tag:"legend",children:f.Z.Messages.AGE_GATE_DATE_OF_BIRTH}),(0,r.jsx)("div",{className:A().inputs,children:P.map((function(e,t){var n=e.key,a=e.input;return(0,r.jsx)("div",{tabIndex:t+1,className:A()[n],children:a},n)}))}),(0,r.jsx)(s.Text,{className:A().errors,variant:"text-sm/normal",children:S})]})}))},321859:(e,t,n)=>{n.r(t);n.d(t,{default:()=>M})
;var r=n(785893),a=n(667294),o=n(999357),l=n(202351),u=n(945460),i=n(415879),s=n(473903),c=n(652591),f=n(348592),d=n(520322),A=n(852465),p=n(561210),h=n(2590),y=n(571680),E=n(473708),m=n(243077),v=n.n(m);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t,n,r,a,o,l){try{var u=e[o](l),i=u.value}catch(e){n(e);return}u.done?t(i):Promise.resolve(i).then(r,a)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,u=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0){o.push(r.value);if(t&&o.length===t)break}}catch(e){u=!0;a=e}finally{try{l||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name)
;if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;(r=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:l.label++;return{value:o[1],done:!1};case 5:l.label++;r=o[1];o=[0];continue;case 7:o=l.ops.pop();l.trys.pop();continue;default:if(!(a=l.trys,
a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1];a=o;break}if(a&&l.label<a[2]){l.label=a[2];l.ops.push(o);break}a[2]&&l.ops.pop();l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e];r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function M(e){var t=e.transitionState,n=e.onClose,m=T(a.useState(null),2),_=m[0],M=m[1],g=T(a.useState(null),2),x=g[0],O=g[1],D=T(a.useState(!1),2),N=D[0],S=D[1],w=a.createRef(),R=(0,l.e7)([s.default],(function(){return s.default.getCurrentUser()})),C=a.createRef();a.useEffect((function(){i.Z.flowStep(y.MK.ANY,y.FF.AGE_GATE);c.default.track(h.rMx.OPEN_MODAL,{type:"Claim Age Gate"})}),[]);a.useEffect((function(){null!=(null==R?void 0:R.nsfwAllowed)&&n()}),[R,n]);var j,k,Z=(k=(j=function(e){var t,r;return G(this,(function(a){switch(a.label){case 0:e.preventDefault();if(null==_)return[2];S(!0);a.label=1
;case 1:a.trys.push([1,3,,4]);return[4,d.Av(_,h.jXE.CLAIM_ACCOUNT_MODAL)];case 2:a.sent();return[3,4];case 3:if(null!=(t=a.sent()).body&&null!=t.body.date_of_birth){i.Z.flowStep(y.MK.ANY,y.FF.AGE_GATE_UNDERAGE);d.wE(p.L0.CLAIM_ACCOUNT);d.hp(p.L0.CLAIM_ACCOUNT);n()}else null!=(null==t||null===(r=t.body)||void 0===r?void 0:r.username)?O(E.Z.Messages.USER_SETTINGS_UPDATE_FAILURE):O(null==t?void 0:t.body.message);return[3,4];case 4:S(!1);return[2]}}))},function(){var e=this,t=arguments;return new Promise((function(n,r){var a=j.apply(e,t);function o(e){b(a,n,r,o,l,"next",e)}function l(e){b(a,n,r,o,l,"throw",e)}o(void 0)}))}),function(e){return k.apply(this,arguments)}),I=a.useCallback((function(){var e;null===(e=C.current)||void 0===e||e.focus()}),[C]);return(0,r.jsx)(u.ModalRoot,{transitionState:t,size:u.ModalSize.DYNAMIC,"aria-label":E.Z.Messages.AGE_GATE_HEADER,className:v().modal,impressionName:o.zs.USER_AGE_GATE,impressionProperties:{existing_user:!1},children:(0,
r.jsxs)(u.ModalContent,{className:v().content,children:[(0,r.jsx)("div",{className:v().image}),(0,r.jsxs)("form",{onSubmit:Z,children:[(0,r.jsx)(u.Heading,{className:v().title,variant:"heading-xl/semibold",children:E.Z.Messages.AGE_GATE_HEADER}),(0,r.jsx)(u.Text,{color:"header-secondary",className:v().description,variant:"text-md/normal",children:E.Z.Messages.AGE_GATE_BODY.format({helpURL:f.Z.getArticleURL(h.BhN.AGE_GATE)})}),(0,r.jsx)(A.Z,{required:!0,autoFocus:!0,wrapperClassName:v().formItem,label:E.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,name:"birthday",onChange:function(e){return M(e)},onPopulated:I,error:x,value:_,ref:w}),(0,r.jsx)(u.Button,{buttonRef:C,type:"submit",size:u.Button.Sizes.LARGE,submitting:N,disabled:null==_,fullWidth:!0,children:E.Z.Messages.DONE})]})]})})}},799663:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(730381),a=n.n(r),o=n(652591),l=n(2590);function u(e,t){o.default.track(l.rMx.AGE_GATE_SUBMITTED,{dob:a()().diff(e,"years")<18?e.format("YYYY-MM-DD"):null,dob_day:e.date(),
dob_month:e.month()+1,dob_year:e.year(),source:{section:t}})}}}]);
//# sourceMappingURL=32901edff512bb1edaef.js.map