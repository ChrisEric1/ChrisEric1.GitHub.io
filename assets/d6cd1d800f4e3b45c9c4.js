(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[76192],{55146:(e,n,r)=>{e.exports=r.p+"608f64b01193073a0148ebd815d86784.webm"},485618:(e,n,r)=>{e.exports=r.p+"ac85024be0ac6a35c59ceff448502169.webm"},745920:(e,n,r)=>{e.exports=r.p+"2d889bf9114df188325d15f9e517c325.mov"},161693:(e,n,r)=>{e.exports=r.p+"6d5b64b094944af6d52d895c8c2b8a59.mp4"},28743:(e,n,r)=>{e.exports=r.p+"dff87c953f43b561d71fbcfe8a93a79a.png"},106632:(e,n,r)=>{e.exports=r.p+"3b0d96ed8113994f3d139088726cfecd.webm"},894919:(e,n,r)=>{e.exports=r.p+"d44a33e33f751afe9a0e5e42e2156d8f.mov"},858739:(e,n,r)=>{e.exports=r.p+"90c2f45413660019fa25f4f9f40ecb5d.mp4"},172129:(e,n,r)=>{e.exports=r.p+"61c5375ee8d8dbf35c109b06044394d8.png"},243874:(e,n,r)=>{e.exports=r.p+"1eae6aab9a6b4e7da646db415479560b.webm"},665369:(e,n,r)=>{e.exports=r.p+"214ec30d4b1191df4e04a35063e5d9e6.mov"},537020:(e,n,r)=>{e.exports=r.p+"56dfe2d14c375037f02ae2144856c939.webm"},978476:(e,n,r)=>{
e.exports=r.p+"98808f8535c2ac6947658982e27e6e1e.mov"},88070:(e,n,r)=>{e.exports=r.p+"49b63c2ef79b40545d891bde041934b4.webm"},308739:(e,n,r)=>{"use strict";r.d(n,{R:()=>x,Z:()=>S});var t=r(785893),a=r(667294),s=r(202351),l=r(945460),i=r(873553),o=r(451936),u=r(382060),c=r(848285),d=r(722406),p=r(473903),m=r(641277),f=r(206986),_=r(558820),E=r(211482),h=r(749565),N=r(2590),v=r(75025),g=r(718634),I=r(473708),b=r(153102),T=r.n(b),x=function(){return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)(_.qE,{src:null,size:l.AvatarSizes.DEPRECATED_SIZE_100,className:T().avatar}),(0,t.jsx)(_.DK,{children:I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN}),(0,t.jsx)(_.Dx,{className:T().inviteResolvingGuildName,children:I.Z.Messages.LOADING})]})},O=function(e){var n=e.guild,r=e.user,a=e.application,s=e.compact;return null!=a?(0,t.jsx)(m.Z,{className:T().appIcon,game:a,size:T().appIconSize}):null!=r?(0,t.jsx)(_.qE,{src:null!=r?r.getAvatarURL(void 0,80):null,size:l.AvatarSizes.SIZE_80,
className:s?T().compactAvatar:T().avatar}):null!=n?(0,t.jsx)(E.ZP,{mask:E.ZP.Masks.SQUIRCLE,width:64,height:64,className:T().guildIcon,children:(0,t.jsx)(_.Vj,{guild:n,size:_.Vj.Sizes.LARGER,animate:!0})}):null};const S=function(e){var n,r=e.invite,a=e.disableUser,m=void 0!==a&&a,E=e.error,b=e.flatActivityCount,x=void 0!==b&&b,S=e.isRegister,y=void 0!==S&&S,A=(0,s.cj)([i.Z,p.default],(function(){return{currentUser:p.default.getCurrentUser(),multiAccounts:i.Z.getUsers()}})),j=A.currentUser,R=A.multiAccounts;if(null==r)return null;var M,P,D,C=null!=r.guild?new c.Z(r.guild):null,L=null!=r.channel?(0,u.jD)(r.channel):null,w=null!=r.target_application?new o.Z(r.target_application):null,Z=m||null==r.inviter?null:new d.Z(r.inviter),U=!(null!=r.approximate_member_count&&r.approximate_member_count>100||null!=C&&C.hasFeature(N.oNc.COMMUNITY))&&null!=Z,V=null,k=!1;if(null!=C){V=null==Z?I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN:I.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({
username:Z.username});r.target_type===g.Iq.STREAM&&null!=r.target_user&&(V=I.Z.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({username:r.target_user.username}));r.target_type===g.Iq.EMBEDDED_APPLICATION&&null!=r.target_application&&(V=null!=Z?I.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({username:Z.username}):I.Z.Messages.AUTH_MESSAGE_INVITED_TO_PLAY);U&&null==w&&(M=(0,t.jsx)(_.Vj,{guild:C,size:_.Vj.Sizes.SMALL}));P=C.name;if(null!=w){P=w.name;D=(0,t.jsxs)("div",{children:[(0,t.jsx)(_.DK,{className:T().appIn,children:I.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_IN}),(0,t.jsxs)("div",{className:T().guildContainer,children:[(0,t.jsx)(_.Vj,{guild:C,size:_.Vj.Sizes.SMALL}),(0,t.jsx)(l.Text,{tag:"span",variant:"text-lg/normal",color:"header-primary",className:T().appGuildName,children:C.name})]})]})}}else if(null!=L){if(null==Z)throw new Error("no inviter in group DM invite");var F=Z.username;if(null!=L.name&&""!==L.name){V=I.Z.Messages.AUTH_MESSAGE_INVITED_BY.format({username:F})
;P=L.name;null!=L.icon&&(M=(0,t.jsx)(_.MC,{channel:L,size:l.AvatarSizes.SIZE_32}))}else{V=I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM;P=F}}else if(null!=Z){P=I.Z.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({username:Z.username});k=!0;D=null!=E?null:(0,t.jsx)(_.DK,{className:T().directInviteSubTitle,children:y?I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({username:h.ZP.getUserTag(Z)}):I.Z.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({username:h.ZP.getUserTag(Z)})})}return(0,t.jsxs)("div",{className:T().container,children:[(0,t.jsx)(O,{application:w,guild:C,user:U?Z:null,compact:k}),null!=E?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.DK,{children:I.Z.Messages.INVITE_MODAL_ERROR_TITLE}),(0,t.jsx)(_.Dx,{children:E})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.DK,{children:V}),(0,t.jsxs)(_.Dx,{className:T().title,children:[null!=C?(0,t.jsx)(f.Z,{guild:C,className:T().guildBadge,tooltipPosition:"left"
}):null,M,P]})]}),D,null!=w||k||(null==r||null===(n=r.guild)||void 0===n?void 0:n.id)===v.fQ?null:(0,t.jsx)(_.EJ,{className:T().activityCount,online:r.approximate_presence_count,total:r.approximate_member_count,flat:x}),R.length>1?(0,t.jsx)(_.jQ,{user:j}):null]})}},845882:(e,n,r)=>{"use strict";r.d(n,{Z:()=>g});var t=r(131795),a=r.n(t),s=r(125333),l=r(58964),i=r(97245),o=r(285991),u=r(784426),c=r(736818),d=r(536038),p=r(652591),m=r(877815),f=r(2590);function _(e,n,r,t,a,s,l){try{var i=e[s](l),o=i.value}catch(e){r(e);return}i.done?n(o):Promise.resolve(o).then(t,a)}function E(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function l(e){_(s,t,a,l,i,"next",e)}function i(e){_(s,t,a,l,i,"throw",e)}l(void 0)}))}}var h=function(e,n){var r,t,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s
;function i(s){return function(i){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;(t=0,a)&&(s=[2&s[0],a.value]);switch(s[0]){case 0:case 1:a=s;break;case 4:l.label++;return{value:s[1],done:!1};case 5:l.label++;t=s[1];s=[0];continue;case 7:s=l.ops.pop();l.trys.pop();continue;default:if(!(a=l.trys,a=a.length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){l=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){l.label=s[1];break}if(6===s[0]&&l.label<a[1]){l.label=a[1];a=s;break}if(a&&l.label<a[2]){l.label=a[2];l.ops.push(s);break}a[2]&&l.ops.pop();l.trys.pop();continue}s=n.call(e,l)}catch(e){s=[6,e];t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};function N(e){return v.apply(this,arguments)}function v(){return(v=E((function(e){var n,r,t,i,u;return h(this,(function(d){switch(d.label){case 0:
if("Android"!==(r=null===(n=a().os)||void 0===n?void 0:n.family)&&"iOS"!==r)return[3,5];i=null!==(t=c.default.getFingerprint())&&void 0!==t?t:c.default.getId();u=(0,l.WS)();if(null!=i||!c.default.isAuthenticated())return[3,4];d.label=1;case 1:d.trys.push([1,3,,4]);return[4,(0,o.k)()];case 2:d.sent();i=c.default.getId();return[3,4];case 3:d.sent();return[3,4];case 4:return[2,(0,l.ZP)((0,s.Gk)(),{utmSource:e,fingerprint:i,attemptId:u})];case 5:return[2,"discord://"]}}))}))).apply(this,arguments)}function g(e){return I.apply(this,arguments)}function I(){return(I=E((function(e){var n,r;return h(this,(function(t){switch(t.label){case 0:return[4,N(e)];case 1:n=t.sent();null!=(r=(0,l.zS)(n))&&p.default.track(f.rMx.DEEP_LINK_CLICKED,{fingerprint:(0,i.K)(r.fingerprint),attempt_id:r.attemptId,source:r.utmSource});m.Z.launch(n,(function(e){e||(0,u.dL)(d.Z.fallbackRoute)}));return[2]}}))}))).apply(this,arguments)}},75025:(e,n,r)=>{"use strict";r.d(n,{tF:()=>t,fQ:()=>a});var t;!function(e){
e.STUDENT_PROMPT="STUDENT_PROMPT";e.VERIFY_EMAIL="VERIFY_EMAIL";e.VERIFY_PIN="VERIFY_PIN";e.SELECT_SCHOOL="SELECT_SCHOOL";e.SELECT_SCHOOL_SEARCH="SELECT_SCHOOL_SEARCH";e.SUBMIT_SCHOOL="SUBMIT_SCHOOL";e.EMAIL_CONFIRMATION="EMAIL_CONFIRMATION";e.EMAIL_WAITLIST="EMAIL_WAITLIST"}(t||(t={}));var a="884924873015689226"},426797:(e,n,r)=>{"use strict";r.d(n,{L:()=>N,Z:()=>g});var t=r(999357),a=r(281110),s=r(744564),l=(0,r(260561).B)({kind:"user",id:"2023-02_mfa_remove_phone",label:"Safety Experience MFA Remove Phone",defaultConfig:{enabled:!1},treatments:[{id:1,label:"Enabled",config:{enabled:!0}}]});const i=l;var o=r(736818),u=r(488110),c=r(801809),d=r(58118),p=r(2590),m=r(473708);function f(e,n,r,t,a,s,l){try{var i=e[s](l),o=i.value}catch(e){r(e);return}i.done?n(o):Promise.resolve(o).then(t,a)}function _(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var s=e.apply(n,r);function l(e){f(s,t,a,l,i,"next",e)}function i(e){f(s,t,a,l,i,"throw",e)}l(void 0)}))}}
function E(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function h(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){E(e,n,r[n])}))}return e}var N,v=function(e,n){var r,t,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,t&&(a=2&s[0]?t.return:s[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,s[1])).done)return a;(t=0,a)&&(s=[2&s[0],a.value]);switch(s[0]){case 0:case 1:a=s;break;case 4:l.label++
;return{value:s[1],done:!1};case 5:l.label++;t=s[1];s=[0];continue;case 7:s=l.ops.pop();l.trys.pop();continue;default:if(!(a=l.trys,a=a.length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){l=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){l.label=s[1];break}if(6===s[0]&&l.label<a[1]){l.label=a[1];a=s;break}if(a&&l.label<a[2]){l.label=a[2];l.ops.push(s);break}a[2]&&l.ops.pop();l.trys.pop();continue}s=n.call(e,l)}catch(e){s=[6,e];t=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};!function(e){e.USER_ACTION_REQUIRED="user_action_required";e.USER_SETTINGS_UPDATE="user_settings_update";e.GUILD_PHONE_REQUIRED="guild_phone_required";e.MFA_PHONE_UPDATE="mfa_phone_update";e.CONTACT_SYNC="contact_sync"}(N||(N={}));const g={setCountryCode:function(e){s.Z.dispatch({type:"PHONE_SET_COUNTRY_CODE",countryCode:e})},removePhone:function(e,n){return i.getCurrentConfig({},{autoTrackExposure:!1}).enabled?(0,u.Z)((function(r){return a.Z.delete({url:p.ANM.PHONE,body:h({
password:e,change_phone_reason:n},r),oldFormErrors:!0})}),{modalProps:{title:m.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON,actionText:m.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_BUTTON},checkEnabled:!1}):a.Z.delete({url:p.ANM.PHONE,body:{password:e,change_phone_reason:n},oldFormErrors:!0})},resendCode:function(e){var n={},r=o.default.getFingerprint();null!=r&&""!==r&&(n["X-Fingerprint"]=r);return a.Z.post({url:p.ANM.RESEND_PHONE,headers:n,body:{phone:e}})},beginAddPhone:function(e,n,r){return a.Z.post({url:p.ANM.PHONE,body:{phone:e,captcha_key:r,change_phone_reason:n}})},addPhone:function(e,n,r){return a.Z.post({url:p.ANM.PHONE,body:{phone_token:e,password:n,change_phone_reason:r},oldFormErrors:!0})},addPhoneWithoutPassword:function(e){return a.Z.post({url:p.ANM.PHONE_VERIFY_NO_PASSWORD,body:{code:e}})},beginReverifyPhone:function(e,n,r){return a.Z.post({url:p.ANM.PHONE_REVERIFY,body:{phone:e,captcha_key:r,change_phone_reason:n}})},
reverifyPhone:function(e,n,r){return a.Z.post({url:p.ANM.PHONE_REVERIFY,body:{phone_token:e,password:n,change_phone_reason:r},oldFormErrors:!0})},validatePhoneForSupport:function(e){return a.Z.post({url:p.ANM.VERIFY_PHONE_FOR_TICKET,body:{token:e},oldFormErrors:!0})},verifyPhone:function(e,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _((function(){var l,i,u;return v(this,(function(m){switch(m.label){case 0:l={};null!=(i=o.default.getFingerprint())&&""!==i&&(l["X-Fingerprint"]=i);a&&(l.authorization="");return[4,c.Z.post({url:p.ANM.VERIFY_PHONE,headers:l,body:{phone:e,code:n},oldFormErrors:!0,trackedActionData:{event:t.a9.USER_VERIFY_PHONE}})];case 1:u=m.sent();r&&s.Z.dispatch({type:"MODAL_POP",key:d.M});return[2,u.body]}}))}))()}}},58118:(e,n,r)=>{"use strict";r.d(n,{M:()=>t,z:()=>a});var t="PHONE_VERIFICATION_MODAL_KEY",a=6},558820:(e,n,r)=>{"use strict";r.d(n,{Dx:()=>b,DK:()=>T,Ee:()=>x,zx:()=>O,
qE:()=>S,Vj:()=>y,MC:()=>A,II:()=>j,gO:()=>R,i_:()=>M,Hh:()=>P,EJ:()=>D,jQ:()=>C,v6:()=>L,ZP:()=>w});var t=r(785893),a=(r(667294),r(294184)),s=r.n(a),l=r(945460),i=r(621647),o=r(107364),u=r(124251),c=r(443812),d=r(408481),p=r(646161),m=r(348592),f=r(463473),_=r(2590),E=r(473708),h=r(955025),N=r.n(h);function v(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function g(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++){r=s[t];n.indexOf(r)>=0||(a[r]=e[r])}return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++){r=s[t];n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}}return a}var I=l.Avatar;null==I&&(I=function(){return null});var b=function(e){var n=e.className,r=e.id,a=e.children;return(0,t.jsx)(l.Heading,{variant:"heading-xl/semibold",color:"header-primary",
className:s()(N().title,n),id:r,children:a})},T=function(e){var n=e.className,r=e.children;return(0,t.jsx)(l.Text,{variant:"text-md/normal",color:"header-secondary",className:n,children:r})},x=function(e){var n=e.className,r=e.src;return(0,t.jsx)("img",{alt:"",src:r,className:s()(N().image,n)})},O=function(e){var n,r=e.className,a=g(e,["className"]),i=a.look===l.Button.Looks.LINK;return(0,t.jsx)(l.Button,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){v(e,n,r[n])}))}return e}({size:i?l.Button.Sizes.MIN:l.Button.Sizes.LARGE,fullWidth:!i,className:s()(r,(n={},v(n,N().button,!i),v(n,N().linkButton,i),n))},a))};O.Looks=l.Button.Looks;O.Colors=l.Button.Colors;O.Sizes=l.Button.Sizes;var S=function(e){var n=e.className,r=e.src,a=e.size
;return(0,t.jsx)(I,{src:r,size:a,className:s()(N().inviteLargeIcon,n),"aria-hidden":!0})},y=function(e){var n=e.guild,r=e.size,a=e.animate,s=void 0!==a&&a;return(0,t.jsx)(u.Z,{active:!0,guild:n,size:r,animate:s})};y.Sizes=u.Z.Sizes;var A=function(e){var n=e.className,r=e.channel,a=e.size;return(0,t.jsx)(I,{src:(0,i.x)(r),size:a,className:s()(N().inviteIcon,n),"aria-hidden":!0})};A.Sizes=l.AvatarSizes;var j=function(e){var n=e.label,r=e.error,a=e.placeholder,i=e.value,o=e.className,u=e.inputClassName,d=e.setRef,p=e.type,m=void 0===p?"text":p,f=e.onChange,_=e.autoComplete,E=e.autoFocus,h=e.maxLength,g=e.spellCheck,I=e.name,b=e.description,T=e.required,x=(0,c.Dt)();return(0,t.jsxs)(l.FormItem,{title:n,error:r,className:o,required:T,tag:"label",htmlFor:x,children:[(0,t.jsx)(l.TextInput,{name:I,type:m,value:i,inputRef:d,placeholder:a,inputClassName:s()(u,v({},N().inputError,null!=r)),"aria-label":n,onChange:f,autoComplete:_,autoFocus:E,maxLength:h,spellCheck:g,id:x}),null!=b?(0,
t.jsx)(l.FormText,{type:l.FormText.Types.DESCRIPTION,className:N().description,children:b}):null]})},R=function(e){var n=e.className,r=e.children;return(0,t.jsx)("div",{className:s()(N().block,n),children:r})},M=function(e){var n=e.className,r=e.children,a=e.isProminent;return(0,t.jsx)(l.Text,{variant:a?"text-sm/normal":"text-xs/normal",className:s()(N().subText,n),children:r})},P=function(e){var n=e.className;return(0,t.jsx)(o.Z,{direction:o.Z.Direction.VERTICAL,align:o.Z.Align.CENTER,className:n,children:(0,t.jsx)(d.Z,{className:N().spinnerVideo})})},D=function(e){var n,r=e.online,a=e.total,i=e.className,u=e.flat,c=e.textClassName;if(null==a)return null;null!=r&&r>0&&(n=(0,t.jsxs)("div",{className:s()(N().pill,N().pillOnline,u&&N().pillFlat),children:[(0,t.jsx)("i",{className:N().pillIconOnline}),(0,t.jsx)(l.Text,{tag:"span",className:s()(N().pillMessage,c),variant:"text-sm/normal",children:E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({membersOnline:r})})]}));return(0,
t.jsxs)(o.Z,{justify:o.Z.Justify.CENTER,className:i,children:[n,(0,t.jsxs)("div",{className:s()(N().pill,u&&N().pillFlat),children:[(0,t.jsx)("i",{className:N().pillIconTotal}),(0,t.jsx)(l.Text,{tag:"span",className:s()(N().pillMessage,c),variant:"text-sm/normal",children:E.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({count:a})})]})]})},C=function(e){var n=e.user;return null==n?null:(0,t.jsxs)("div",{className:N().joiningAs,children:[(0,t.jsx)(l.Text,{tag:"span",variant:"text-md/normal",color:"header-secondary",children:E.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS}),(0,t.jsx)(S,{className:N().joiningAsAvatar,src:n.getAvatarURL(void 0,24),size:l.AvatarSizes.SIZE_24,"aria-label":n.username}),(0,t.jsx)(l.Text,{className:N().joiningAsUsername,tag:"span",variant:"text-md/semibold",color:"header-primary",children:n.username})]})},L=function(e){var n=e.className;return(0,t.jsxs)(R,{className:n,children:[(0,t.jsx)(O,{onClick:function(){return window.open((0,p.t3)())},
children:E.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({platform:(0,p.DW)()})}),(0,t.jsx)(M,{className:N().downloadButtonSubtext,children:E.Z.Messages.INCOMPATIBLE_BROWSER.format({supportedBrowserURL:m.Z.getArticleURL(_.BhN.SUPPORTED_BROWSERS)})})]})};const w=function(e){var n=e.className,r=e.contentClassName,a=e.tag,l=void 0===a?"section":a,i=e.onSubmit,o=e.children,u=e.expanded,c=void 0!==u&&u,d=e.theme,p=void 0===d?_.BRd.DARK:d,m=e.style;return(0,t.jsxs)(l,{onSubmit:i,style:m,className:s()(c?N().authBoxExpanded:N().authBox,(0,f.Q)(p),n),children:[(0,t.jsx)("div",{className:N().discordLogo}),(0,t.jsx)("div",{className:s()(N().centeringWrapper,r),children:o})]})}},408481:(e,n,r)=>{"use strict";r.d(n,{Z:()=>q})
;var t=r(785893),a=r(667294),s=r(730381),l=r.n(s),i=r(575945),o=r(945460),u=r(245305),c=r(745920),d=r.n(c),p=r(894919),m=r.n(p),f=r(665369),_=r.n(f),E=r(978476),h=r.n(E),N=r(786170),v=r(2590),g=r(55146),I=r.n(g),b=r(485618),T=r.n(b),x=r(161693),O=r.n(x),S=r(28743),y=r.n(S),A=r(106632),j=r.n(A),R=r(858739),M=r.n(R),P=r(172129),D=r.n(P),C=r(243874),L=r.n(C),w=r(537020),Z=r.n(w),U=r(88070),V=r.n(U);function k(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function F(e){var n,r=e.movDark,a=void 0===r?d():r,s=e.movLight,l=void 0===s?m():s,i=e.mp4Dark,o=void 0===i?O():i,c=e.mp4Light,p=void 0===c?M():c,f=e.pngDark,_=void 0===f?y():f,E=e.pngLight,h=void 0===E?D():E,N=e.webmDark,g=void 0===N?j():N,I=e.webmLight,b=void 0===I?L():I,T=(0,u.vu)(),x=[(0,t.jsx)("source",{src:o,type:"video/mp4"},"mp4"),(0,t.jsx)("img",{alt:"",src:_},"png")],S=[(0,t.jsx)("source",{src:p,type:"video/mp4"},"mp4"),(0,t.jsx)("img",{alt:"",src:h},"png")]
;if(T>52||-1===T){x.unshift((0,t.jsx)("source",{src:g,type:"video/webm"},"webm"));S.unshift((0,t.jsx)("source",{src:b,type:"video/webm"},"webm"))}if((0,u.rO)()){x.unshift((0,t.jsx)("source",{src:a,type:"video/mp4"},"hevc"));S.unshift((0,t.jsx)("source",{src:l,type:"video/mp4"},"hevc"))}return k(n={},v.BRd.DARK,x),k(n,v.BRd.LIGHT,S),n}var B=l()("5/13/2022 10:00 -0800").valueOf(),H=l()("5/16/2022 17:00 -0800").valueOf(),z=F({webmDark:I(),webmLight:T()}),G=l()("10/24/2022 08:00 -0800").valueOf(),Y=l()("11/3/2022 11:00 -0800").valueOf(),K=F({webmDark:Z(),webmLight:V(),movDark:_(),movLight:h()}),W=F({});const q=function(e){var n=e.loop,r=void 0===n||n,s=e.autoPlay,l=void 0===s||s,u=e.setRef,c=e.className,d=e.onReady,p=(0,o.useThemeContext)().theme,m=a.useContext(o.AccessibilityPreferencesContext).reducedMotion,f=Date.now(),_=W;f>=B&&f<=H?_=z:f>=G&&f<=Y&&(_=K);var E,h=null!==(E=_[(0,i.wj)(p)?v.BRd.DARK:v.BRd.LIGHT])&&void 0!==E?E:_[v.BRd.DARK];return(0,t.jsx)(N.Z,{ref:u,onLoadedData:d,
className:c,loop:!m.enabled&&r,autoPlay:!m.enabled&&l,playsInline:!0,"data-testid":"app-spinner",children:h},p)}}}]);
//# sourceMappingURL=d6cd1d800f4e3b45c9c4.js.map