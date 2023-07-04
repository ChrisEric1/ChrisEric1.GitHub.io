"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[12777,5496],{276327:(e,n,i)=>{i.d(n,{_:()=>l,S:()=>a});var l="Guild Welcome Screen",a="hasClickedWelcomeEmojiPicker"},705496:(e,n,i)=>{i.r(n);i.d(n,{default:()=>T});var l=i(785893),a=i(667294),o=i(202351),s=i(945460),t=i(77413),c=i(239813),r=i(489617),d=i(135855),u=i(784426),m=i(61209),h=i(567403),E=i(682776),j=i(206986),p=i(124251),_=i(443812),N=i(718831),x=i(436622),C=i(211482),f=i(652591),g=i(135750),Z=i(102909),k=i(276327),v=i(2590),S=i(520453),I=i(473708),M=i(499365),L=i.n(M),R=function(e){var n,i=e.channelData,a=e.onClose,h=e.trackOptionClick,j=(0,o.e7)([m.Z],(function(){return m.Z.getChannel(i.channel_id)})),p=(0,o.e7)([E.Z],(function(){return null!=j&&E.Z.can(S.Pl.VIEW_CHANNEL,j)})),_=(0,o.e7)([r.Z],(function(){return null!=i.emoji_id?r.Z.getCustomEmojiById(i.emoji_id):null}),[i.emoji_id]),C=null!=i.emoji_name?d.ZP.getByName(d.ZP.convertSurrogateToName(i.emoji_name,!1)):null,f=null!==(n=(0,
c.KS)(j))&&void 0!==n?n:x.Z;return null!=j&&p?(0,l.jsxs)(s.Clickable,{className:L().optionContainer,onClick:function(){h();a();(0,u.XU)(j.guild_id,j.id)},children:[null!=_||null!=C?(0,l.jsx)(t.Z,{emojiName:null!=i.emoji_id?null==_?void 0:_.name:i.emoji_name,animated:null!=_&&_.animated,emojiId:null==_?void 0:_.id,autoplay:!0,className:L().optionEmoji}):(0,l.jsx)(f,{className:L().channelIcon}),(0,l.jsxs)("div",{className:L().optionTextContainer,children:[(0,l.jsx)(s.Text,{variant:"text-md/normal",className:L().channelDescription,children:i.description}),(0,l.jsxs)(s.Text,{variant:"text-xs/normal",color:"header-secondary",children:[(0,l.jsx)(f,{className:L().channelTitleIcon,height:12,width:12}),(0,l.jsx)("span",{children:j.name})]})]}),(0,l.jsx)(N.Z,{direction:N.Z.Directions.RIGHT,className:L().optionArrow})]}):null};const T=function(e){var n,i=e.onClose,t=e.transitionState,c=e.guildId,r=e.isPreview,d=(0,o.e7)([h.Z],(function(){return h.Z.getGuild(c)})),u=(0,o.cj)([Z.Z],(function(){
return{welcomeScreen:Z.Z.get(c),fetching:Z.Z.isFetching(),hasError:Z.Z.hasError()}})),m=u.welcomeScreen,E=u.fetching,N=u.hasError,x=(0,_.Dt)();a.useEffect((function(){null==m&&(0,g.RM)(c)}),[c,m]);a.useEffect((function(){!1===E&&!0===N&&null==m&&i()}),[E,N,i,m]);a.useEffect((function(){m===Z.a&&!1===E&&i()}),[i,m,E]);a.useEffect((function(){!0!==r&&f.default.track(v.rMx.OPEN_MODAL,{type:k._,guild_id:c})}),[c,r]);var S=a.useCallback((function(e){var n;if(null!=m&&!0!==r){var i=[],l=[],a=!1;null===(n=m.welcome_channels)||void 0===n||n.forEach((function(e){i.push(e.description);l.push(e.channel_id);null!=e.emoji_id&&(a=!0)}));f.default.track(v.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED,{index:e,guild_id:c,options:i,options_channel_ids:l,guild_description:m.description,has_custom_emojis:a})}}),[c,r,m]);return null==d?null:null==m?(0,l.jsx)(s.ModalRoot,{transitionState:t,className:L().main,"aria-label":I.Z.Messages.LOADING,children:(0,l.jsx)(s.Spinner,{type:s.Spinner.Type.SPINNING_CIRCLE})
}):(0,l.jsxs)(s.ModalRoot,{transitionState:t,className:L().main,"aria-labelledby":x,children:[(0,l.jsx)(s.ModalCloseButton,{onClick:i,className:L().close}),(0,l.jsx)(C.ZP,{mask:C.ZP.Masks.SQUIRCLE,width:64,height:64,className:L().guildIcon,children:(0,l.jsx)(p.Z,{size:p.Z.Sizes.LARGER,guild:d,active:!0,animate:!0,tabIndex:-1})}),(0,l.jsx)(s.Heading,{variant:"heading-xl/semibold",className:L().header,id:x,children:I.Z.Messages.WELCOME_SCREEN_TITLE.format({guildName:d.name,guildNameHook:function(e,n){return(0,l.jsxs)("span",{children:[(0,l.jsx)(j.Z,{guild:d,className:L().headerGuildBadge,flowerStarClassName:L().flowerStar,tooltipColor:s.Tooltip.Colors.PRIMARY}),(0,l.jsx)("strong",{className:L().headerGuildName,children:e})]},n)}})}),null!=m.description?(0,l.jsx)(s.Text,{variant:"text-sm/normal",color:"header-secondary",className:L().guildDescription,children:m.description}):null,(0,l.jsx)(s.FormTitle,{className:L().choiceHeader,children:I.Z.Messages.WELCOME_SCREEN_CHOICE_HEADER}),(0,
l.jsx)("div",{className:L().options,children:null===(n=m.welcome_channels)||void 0===n?void 0:n.map((function(e,n){return(0,l.jsx)(R,{channelData:e,trackOptionClick:function(){return S(n)},onClose:i},"".concat(e.channel_id,"-").concat(n))}))}),(0,l.jsx)(s.Button,{look:s.Button.Looks.LINK,color:L().skipColor,className:L().skip,onClick:i,children:I.Z.Messages.WELCOME_SCREEN_SKIP})]})}}}]);
//# sourceMappingURL=1fedf4ca015450e548e6.js.map