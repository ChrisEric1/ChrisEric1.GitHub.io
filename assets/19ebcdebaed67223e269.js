"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[6287],{74971:t=>{const n=2147483647,e=36,r=/^xn--/,o=/[^\0-\x7E]/,i=/[\x2E\u3002\uFF0E\uFF61]/g,c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},l=Math.floor,u=String.fromCharCode;function a(t){throw new RangeError(c[t])}function s(t,n){const e=t.split("@");let r="";if(e.length>1){r=e[0]+"@";t=e[1]}const o=function(t,n){const e=[];let r=t.length;for(;r--;)e[r]=n(t[r]);return e}((t=t.replace(i,".")).split("."),n).join(".");return r+o}function f(t){const n=[];let e=0;const r=t.length;for(;e<r;){const o=t.charCodeAt(e++);if(o>=55296&&o<=56319&&e<r){const r=t.charCodeAt(e++);if(56320==(64512&r))n.push(((1023&o)<<10)+(1023&r)+65536);else{n.push(o);e--}}else n.push(o)}return n}const d=function(t,n){return t+22+75*(t<26)-((0!=n)<<5)},h=function(t,n,r){let o=0;t=r?l(t/700):t>>1;t+=l(t/n)
;for(;t>455;o+=e)t=l(t/35);return l(o+36*t/(t+38))},p=function(t){const r=[],o=t.length;let i=0,c=128,u=72,s=t.lastIndexOf("-");s<0&&(s=0);for(let n=0;n<s;++n){t.charCodeAt(n)>=128&&a("not-basic");r.push(t.charCodeAt(n))}for(let d=s>0?s+1:0;d<o;){let s=i;for(let r=1,c=e;;c+=e){d>=o&&a("invalid-input");const s=(f=t.charCodeAt(d++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:e;(s>=e||s>l((n-i)/r))&&a("overflow");i+=s*r;const h=c<=u?1:c>=u+26?26:c-u;if(s<h)break;const p=e-h;r>l(n/p)&&a("overflow");r*=p}const p=r.length+1;u=h(i-s,p,0==s);l(i/p)>n-c&&a("overflow");c+=l(i/p);i%=p;r.splice(i++,0,c)}var f;return String.fromCodePoint(...r)},v=function(t){const r=[];let o=(t=f(t)).length,i=128,c=0,s=72;for(const n of t)n<128&&r.push(u(n));let p=r.length,v=p;p&&r.push("-");for(;v<o;){let o=n;for(const n of t)n>=i&&n<o&&(o=n);const f=v+1;o-i>l((n-c)/f)&&a("overflow");c+=(o-i)*f;i=o;for(const o of t){o<i&&++c>n&&a("overflow");if(o==i){let t=c;for(let n=e;;n+=e){const o=n<=s?1:n>=s+26?26:n-s;if(t<o)break
;const i=t-o,c=e-o;r.push(u(d(o+i%c,0)));t=l(i/c)}r.push(u(d(t,0)));s=h(c,f,v==p);c=0;++v}}++c;++i}return r.join("")},g={version:"2.1.0",ucs2:{decode:f,encode:t=>String.fromCodePoint(...t)},decode:p,encode:v,toASCII:function(t){return s(t,(function(t){return o.test(t)?"xn--"+v(t):t}))},toUnicode:function(t){return s(t,(function(t){return r.test(t)?p(t.slice(4).toLowerCase()):t}))}};t.exports=g},482507:(t,n,e)=>{e.d(n,{J:()=>r});function r(t){var n=document.body;if(null==n)throw new Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");var e=document.createRange(),r=window.getSelection(),o=document.createElement("textarea");o.value=t;o.contentEditable="true";o.style.visibility="none";n.appendChild(o);e.selectNodeContents(o);null==r||r.removeAllRanges();null==r||r.addRange(e);o.focus();o.setSelectionRange(0,t.length);var i=document.execCommand("copy");n.removeChild(o);return i}},222789:(t,n,e)=>{e.d(n,{Rp:()=>u,ge:()=>i,RA:()=>l});function r(t){
var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Array.isArray(t)?t.forEach((function(t){return r(t,n)})):"string"==typeof t.content?n.push(t.content):null!=t.content&&r(t.content,n);return n}function o(t,n){if(Array.isArray(n))for(var e=n.length,r=0;r<e;r++)t.push(n[r]);else t.push(n)}function i(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(t)){for(var e=t.length,r=[],c=0;c<e;c++)o(r,i(t[c],n));return r}null!=t.content&&(t.content=i(t.content,t));return null!=n&&t.type===n.type?t.content:t}var c={};function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:200};if(Array.isArray(t))for(var e=t.length,r=0;r<e;r++){var o=l(t[r],n);if(o===c){t.length=r;break}t[r]=o}else if("text"!==t.type){n.limit-=1;if(n.limit<=0)return c;Array.isArray(t.content)&&(t.content=l(t.content,n))}return t}function u(t){return r(t).join("")}},894012:(t,n,e)=>{e.d(n,{Rp:()=>o.Rp,w4:()=>i,_p:()=>c})
;var r,o=e(222789),i=(r=e(25788).Z).reactParserFor,c=r.astParserFor},25788:(t,n,e)=>{e.d(n,{Z:()=>u});var r=e(120053),o=e.n(r),i=e(222789);function c(t,n,e){n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e;return t}function l(t,n,e,r,o){e||(n+="\n\n");var l;l=t(n,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))));r.forEach((function(n){c(t,n,e[n])}))}return t}({inline:e},r));l=(0,i.ge)(l);l=(0,i.RA)(l);null!=o&&(l=o(l,e));return l}const u={reactParserFor:function(t){var n=o().parserFor(t),e=o().reactFor(o().ruleOutput(t,"react"));return function(){
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(l(n,t,r,o,i),o)}},astParserFor:function(t){var n=o().parserFor(t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return l(n,t,e,r,o)}}}}}]);
//# sourceMappingURL=19ebcdebaed67223e269.js.map