"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[11913],{111913:(e,r,t)=>{t.r(r);t.d(r,{default:()=>O});var n=t(785893),o=t(667294),i=t(945460),c=t(944010),a=t(473708),u=t(424479),l=t.n(u);function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function f(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e}function b(e,r){r=null!=r?r:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})));t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{}
;var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++){t=i[n];r.indexOf(t)>=0||(o[t]=e[t])}return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++){t=i[n];r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}}return o}function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(n=t.next()).done);c=!0){i.push(n.value);if(r&&i.length===r)break}}catch(e){a=!0;o=e}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)
}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){var r=e.onSubmit,t=e.onClose,u=p(e,["onSubmit","onClose"]),s=y(o.useState(!1),2),O=s[0],m=s[1];return(0,n.jsxs)(i.ConfirmModal,b(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))));n.forEach((function(r){f(e,r,t[r])}))}return e}({header:a.Z.Messages.CALL_USER_PROMPT_HEADER,confirmButtonColor:i.Button.Colors.GREEN,confirmText:a.Z.Messages.CALL_USER_CONFIRM,cancelText:a.Z.Messages.CANCEL,onConfirm:r,onClose:function(){O&&c.ZP.updatedUnsyncedSettings({disableCallUserConfirmationPrompt:!0});return t()}},u),{children:[(0,n.jsx)(i.Text,{variant:"text-md/normal",
children:a.Z.Messages.CALL_USER_PROMPT}),(0,n.jsx)(i.Checkbox,{type:i.Checkbox.Types.INVERTED,value:O,onChange:function(e,r){return m(r)},className:l().checkbox,children:(0,n.jsx)(i.Text,{variant:"text-md/normal",children:a.Z.Messages.DONT_ASK_AGAIN})})]}))}}}]);
//# sourceMappingURL=bf2c194e7d26b8dd237e.js.map