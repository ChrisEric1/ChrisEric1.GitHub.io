(()=>{var t,e,r,n,o,i={535666:t=>{!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s=e.regeneratorRuntime;if(s)t.exports=s;else{(s=e.regeneratorRuntime=t.exports).wrap=g;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",y={},O={};O[a]=function(){return this};var v=Object.getPrototypeOf,d=v&&v(v(j([])));d&&d!==n&&o.call(d,a)&&(O=d);var b=P.prototype=_.prototype=Object.create(O);w.prototype=b.constructor=P;P.constructor=w;P[u]=w.displayName="GeneratorFunction";s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))};s.mark=function(t){if(Object.setPrototypeOf)Object.setPrototypeOf(t,P);else{t.__proto__=P;u in t||(t[u]="GeneratorFunction")}t.prototype=Object.create(b);return t};s.awrap=function(t){return{__await:t}};E(T.prototype)
;T.prototype[c]=function(){return this};s.AsyncIterator=T;s.async=function(t,e,r,n){var o=new T(g(t,e,r,n));return s.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))};E(b);b[u]="Generator";b[a]=function(){return this};b.toString=function(){return"[object Generator]"};s.keys=function(t){var e=[];for(var r in t)e.push(r);e.reverse();return function r(){for(;e.length;){var n=e.pop();if(n in t){r.value=n;r.done=!1;return r}}r.done=!0;return r}};s.values=j;R.prototype={constructor:R,reset:function(t){this.prev=0;this.next=0;this.sent=this._sent=r;this.done=!1;this.delegate=null;this.method="next";this.arg=r;this.tryEntries.forEach(x);if(!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){c.type="throw";c.arg=t;e.next=n;if(o){
e.method="next";e.arg=r}return!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};a.type=t;a.arg=e;if(i){this.method="next";this.next=i.finallyLoc;return y}return this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg
;if("break"===t.type||"continue"===t.type)this.next=t.arg;else if("return"===t.type){this.rval=this.arg=t.arg;this.method="return";this.next="end"}else"normal"===t.type&&e&&(this.next=e);return y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t){this.complete(r.completion,r.afterLoc);x(r);return y}}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){this.delegate={iterator:j(t),resultName:e,nextLoc:n};"next"===this.method&&(this.arg=r);return y}}}function g(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new R(n||[]);i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return L()}r.method=o;r.arg=i;for(;;){
var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f){n=p;throw r.arg}r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=m(t,e,r);if("normal"===u.type){n=r.done?p:l;if(u.arg===y)continue;return{value:u.arg,done:r.done}}if("throw"===u.type){n=p;r.method="throw";r.arg=u.arg}}}}(t,r,a);return i}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function w(){}function P(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function T(t){function e(r,n,i,a){var c=m(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t;i(u)}),(function(t){
return e("throw",t,i,a)}))}a(c.arg)}var r;this._invoke=function(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}}function N(t,e){var n=t.iterator[e.method];if(n===r){e.delegate=null;if("throw"===e.method){if(t.iterator.return){e.method="return";e.arg=r;N(t,e);if("throw"===e.method)return y}e.method="throw";e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=m(n,t.iterator,e.arg);if("throw"===o.type){e.method="throw";e.arg=o.arg;e.delegate=null;return y}var i=o.arg;if(!i){e.method="throw";e.arg=new TypeError("iterator result is not an object");e.delegate=null;return y}if(!i.done)return i;e[t.resultName]=i.value;e.next=t.nextLoc;if("return"!==e.method){e.method="next";e.arg=r}e.delegate=null;return y}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]);if(2 in t){e.finallyLoc=t[2];e.afterLoc=t[3]}this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal";delete e.arg;t.completion=e}
function R(t){this.tryEntries=[{tryLoc:"root"}];t.forEach(I,this);this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n)){e.value=t[n];e.done=!1;return e}e.value=r;e.done=!0;return e};return i.next=i}}return{next:L}}function L(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())}},a={};function c(t){var e=a[t];if(void 0!==e)return e.exports;var r=a[t]={id:t,loaded:!1,exports:{}};i[t](r,r.exports,c);r.loaded=!0;return r.exports}c.m=i;t="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r=t=>{if(t){t.forEach((t=>t.r--));t.forEach((t=>t.r--?t.r++:t()))}},n=t=>!--t.r&&t(),o=(t,e)=>t?t.push(e):n(e),c.a=(i,a,c)=>{var u,s,f,l=c&&[],h=i.exports,p=!0,y=!1,O=(e,r,n)=>{if(!y){y=!0;r.r+=e.length;e.map(((e,o)=>e[t](r,n)))
;y=!1}},v=new Promise(((t,e)=>{f=e;s=()=>(t(h),r(l),l=0)}));v[e]=h;v[t]=(t,e)=>{if(p)return n(t);u&&O(u,t,e);o(l,t);v.catch(e)};i.exports=v;a((i=>{if(!i)return s();u=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[t])return i;if(i.then){var a=[];i.then((t=>{c[e]=t;r(a);a=0}));var c={};c[t]=(t,e)=>(o(a,t),i.catch(e));return c}}var u={};u[t]=t=>n(t);u[e]=i;return u})))(i);var a,c,f=new Promise(((t,r)=>{(a=()=>t(c=u.map((t=>t[e])))).r=0;O(u,a,r)}));return a.r?f:c})).then(s,f);p=!1};c.d=(t,e)=>{for(var r in e)c.o(e,r)&&!c.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})};(()=>{c.f={};c.e=t=>Promise.all(Object.keys(c.f).reduce(((e,r)=>{c.f[r](t,e);return e}),[]))})();c.u=t=>"2d637bf9ccbaea792a4c.js";c.hmd=t=>{(t=Object.create(t)).children||(t.children=[]);Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}});return t}
;c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);c.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});Object.defineProperty(t,"__esModule",{value:!0})};c.v=(t,e,r,n)=>{var o=fetch(c.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((e=>Object.assign(t,e.instance.exports))):o.then((t=>t.arrayBuffer())).then((t=>WebAssembly.instantiate(t,n))).then((e=>Object.assign(t,e.instance.exports)))};c.p="/assets/";(()=>{var t={92827:1};c.f.i=(e,r)=>{t[e]||importScripts(c.p+c.u(e))};var e=this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[],r=e.push.bind(e);e.push=e=>{var[n,o,i]=e;for(var a in o)c.o(o,a)&&(c.m[a]=o[a]);i&&i(c);for(;n.length;)t[n.pop()]=1;r(e)}})();(()=>{"use strict";async function t(t,e,r,n,o){return(await c.e(5522).then(c.bind(c,305522))).crop_gif(t,e,r,n,o)}var e,r;c(535666);function n(t,e,r){e in t?Object.defineProperty(t,e,{
value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r;return t}function o(t,e){e=null!=e?e:{};Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})));r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}));return t}!function(t){t[t.BACKGROUND=0]="BACKGROUND"}(e||(e={}));!function(t){t[t.OPTION_1=0]="OPTION_1";t[t.OPTION_2=1]="OPTION_2";t[t.OPTION_3=2]="OPTION_3";t[t.OPTION_4=3]="OPTION_4";t[t.OPTION_7=7]="OPTION_7";t[t.OPTION_8=8]="OPTION_8";t[t.OPTION_9=9]="OPTION_9";t[t.OPTION_10=10]="OPTION_10"}(r||(r={}));var i;r.OPTION_7,r.OPTION_8,r.OPTION_9,r.OPTION_10,[r.OPTION_7,r.OPTION_8,r.OPTION_9,r.OPTION_10,r.OPTION_1,r.OPTION_2,r.OPTION_3,r.OPTION_4].reduce((function(t,e,r){
return o(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))));o.forEach((function(e){n(t,e,r[e])}))}return t}({},t),n({},e,r))}),{});!function(t){t[t.AVATAR=0]="AVATAR";t[t.BANNER=1]="BANNER";t[t.GUILD_BANNER=2]="GUILD_BANNER";t[t.VIDEO_BACKGROUND=3]="VIDEO_BACKGROUND";t[t.SCHEDULED_EVENT_IMAGE=4]="SCHEDULED_EVENT_IMAGE";t[t.HOME_HEADER=5]="HOME_HEADER";t[t.AVATAR_DECORATION=6]="AVATAR_DECORATION"}(i||(i={}));var a;!function(t){t[t.CROP_GIF_START=0]="CROP_GIF_START";t[t.CROP_GIF_COMPLETE=1]="CROP_GIF_COMPLETE";t[t.CROP_GIF_ERROR=2]="CROP_GIF_ERROR"}(a||(a={}));function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){r(t);return}c.done?e(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){
var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))}}var f=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;(n=0,o)&&(i=[2&i[0],o.value]);switch(i[0]){case 0:case 1:o=i;break;case 4:a.label++;return{value:i[1],done:!1};case 5:a.label++;n=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(o=a.trys,o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1];o=i;break}if(o&&a.label<o[2]){a.label=o[2]
;a.ops.push(i);break}o[2]&&a.ops.pop();a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t];n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function l(){return(l=s((function(e,r,n,o,i){var c;return f(this,(function(u){switch(u.label){case 0:u.trys.push([0,2,,3]);return[4,t(e,r,n,o,i)];case 1:c=u.sent();self.postMessage({type:a.CROP_GIF_COMPLETE,result:c});return[3,3];case 2:u.sent();self.postMessage({type:a.CROP_GIF_ERROR});return[3,3];case 3:return[2]}}))}))).apply(this,arguments)}self.addEventListener("message",(function(t){var e=t.data;if(e.type===a.CROP_GIF_START){!function(t,e,r,n,o){l.apply(this,arguments)}(e.gif,e.x,e.y,e.width,e.height)}}))})()})();
//# sourceMappingURL=e6c003e42a6299b50b94.js.map