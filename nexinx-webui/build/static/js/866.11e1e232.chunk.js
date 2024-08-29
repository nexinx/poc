/*! For license information please see 866.11e1e232.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunknexinx_webui=self.webpackChunknexinx_webui||[]).push([[866],{3405:(e,t,o)=>{o.d(t,{Z:()=>m});var r=o(7462),l=o(3366),n=o(7313),a=o(4146),i=o(1921),s=o(7592),c=o(7342),d=o(7430),u=o(2298);function f(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var b=o(6417);const p=["className","component"],h=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),m=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:n,component:s="div"}=o,d=(0,l.Z)(o,p),u=(0,r.Z)({},o,{component:s}),m=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},f,t)})(u);return(0,b.jsx)(h,(0,r.Z)({as:s,className:(0,a.Z)(m.root,n),ownerState:u,ref:t},d))}))},3428:(e,t,o)=>{o.d(t,{Z:()=>v});var r=o(7462),l=o(3366),n=o(7313),a=o(4146),i=o(1921),s=o(7592),c=o(7342),d=o(501),u=o(7430),f=o(2298);function b(e){return(0,f.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var p=o(6417);const h=["className","raised"],m=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),v=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCard"}),{className:n,raised:s=!1}=o,d=(0,l.Z)(o,h),u=(0,r.Z)({},o,{raised:s}),f=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},b,t)})(u);return(0,p.jsx)(m,(0,r.Z)({className:(0,a.Z)(f.root,n),elevation:s?8:void 0,ref:t,ownerState:u},d))}))},5280:(e,t,o)=>{o.d(t,{Z:()=>w});var r=o(3366),l=o(7462),n=o(7313),a=o(4146),i=o(1921),s=o(5272),c=o(1615),d=o(7342),u=o(7592),f=o(7430),b=o(2298);function p(e){return(0,b.Z)("MuiTab",e)}const h=(0,f.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var m=o(6417);const v=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],S=(0,u.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,c.Z)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((e=>{let{theme:t,ownerState:o}=e;return(0,l.Z)({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},o.label&&{flexDirection:"top"===o.iconPosition||"bottom"===o.iconPosition?"column":"row"},{lineHeight:1.25},o.icon&&o.label&&{minHeight:72,paddingTop:9,paddingBottom:9,["& > .".concat(h.iconWrapper)]:(0,l.Z)({},"top"===o.iconPosition&&{marginBottom:6},"bottom"===o.iconPosition&&{marginTop:6},"start"===o.iconPosition&&{marginRight:t.spacing(1)},"end"===o.iconPosition&&{marginLeft:t.spacing(1)})},"inherit"===o.textColor&&{color:"inherit",opacity:.6,["&.".concat(h.selected)]:{opacity:1},["&.".concat(h.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"primary"===o.textColor&&{color:(t.vars||t).palette.text.secondary,["&.".concat(h.selected)]:{color:(t.vars||t).palette.primary.main},["&.".concat(h.disabled)]:{color:(t.vars||t).palette.text.disabled}},"secondary"===o.textColor&&{color:(t.vars||t).palette.text.secondary,["&.".concat(h.selected)]:{color:(t.vars||t).palette.secondary.main},["&.".concat(h.disabled)]:{color:(t.vars||t).palette.text.disabled}},o.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},o.wrapped&&{fontSize:t.typography.pxToRem(12)})})),w=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:f=!1,fullWidth:b,icon:h,iconPosition:w="top",indicator:Z,label:x,onChange:y,onClick:g,onFocus:C,selected:B,selectionFollowsFocus:M,textColor:R="inherit",value:P,wrapped:W=!1}=o,E=(0,r.Z)(o,v),I=(0,l.Z)({},o,{disabled:u,disableFocusRipple:f,selected:B,icon:!!h,iconPosition:w,label:!!x,fullWidth:b,textColor:R,wrapped:W}),N=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:l,icon:n,label:a,selected:s,disabled:d}=e,u={root:["root",n&&a&&"labelIcon","textColor".concat((0,c.Z)(o)),r&&"fullWidth",l&&"wrapped",s&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,i.Z)(u,p,t)})(I),T=h&&x&&n.isValidElement(h)?n.cloneElement(h,{className:(0,a.Z)(N.iconWrapper,h.props.className)}):h;return(0,m.jsxs)(S,(0,l.Z)({focusRipple:!f,className:(0,a.Z)(N.root,s),ref:t,role:"tab","aria-selected":B,disabled:u,onClick:e=>{!B&&y&&y(e,P),g&&g(e)},onFocus:e=>{M&&!B&&y&&y(e,P),C&&C(e)},ownerState:I,tabIndex:B?0:-1},E,{children:["top"===w||"start"===w?(0,m.jsxs)(n.Fragment,{children:[T,x]}):(0,m.jsxs)(n.Fragment,{children:[x,T]}),Z]}))}))},2294:(e,t,o)=>{o.d(t,{Z:()=>V});var r=o(3366),l=o(7462),n=o(7313),a=(o(478),o(4146)),i=o(1921),s=o(1465),c=o(7592),d=o(7342),u=o(9860),f=o(8706);let b;function p(){if(b)return b;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),b="reverse",e.scrollLeft>0?b="default":(e.scrollLeft=1,0===e.scrollLeft&&(b="negative")),document.body.removeChild(e),b}function h(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(p()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var v=o(4993),S=o(3533),w=o(6417);const Z=["onChange"],x={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var y=o(5328),g=o(8168),C=o(5272),B=o(7430),M=o(2298);function R(e){return(0,M.Z)("MuiTabScrollButton",e)}const P=(0,B.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),W=["className","slots","slotProps","direction","orientation","disabled"],E=(0,c.ZP)(C.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((e=>{let{ownerState:t}=e;return(0,l.Z)({width:40,flexShrink:0,opacity:.8,["&.".concat(P.disabled)]:{opacity:0}},"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),I=n.forwardRef((function(e,t){var o,n;const c=(0,d.Z)({props:e,name:"MuiTabScrollButton"}),{className:f,slots:b={},slotProps:p={},direction:h}=c,m=(0,r.Z)(c,W),v="rtl"===(0,u.Z)().direction,S=(0,l.Z)({isRtl:v},c),Z=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,i.Z)(l,R,t)})(S),x=null!=(o=b.StartScrollButtonIcon)?o:y.Z,C=null!=(n=b.EndScrollButtonIcon)?n:g.Z,B=(0,s.y)({elementType:x,externalSlotProps:p.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S}),M=(0,s.y)({elementType:C,externalSlotProps:p.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:S});return(0,w.jsx)(E,(0,l.Z)({component:"div",className:(0,a.Z)(Z.root,f),ref:t,role:null,ownerState:S,tabIndex:null},m,{children:"left"===h?(0,w.jsx)(x,(0,l.Z)({},B)):(0,w.jsx)(C,(0,l.Z)({},M))}))}));var N=o(3236);function T(e){return(0,M.Z)("MuiTabs",e)}const k=(0,B.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var L=o(6106);const z=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],F=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,j=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,A=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},H=(0,c.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{["& .".concat(k.scrollButtons)]:t.scrollButtons},{["& .".concat(k.scrollButtons)]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((e=>{let{ownerState:t,theme:o}=e;return(0,l.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{["& .".concat(k.scrollButtons)]:{[o.breakpoints.down("sm")]:{display:"none"}}})})),X=(0,c.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((e=>{let{ownerState:t}=e;return(0,l.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),Y=(0,c.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((e=>{let{ownerState:t}=e;return(0,l.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),D=(0,c.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((e=>{let{ownerState:t,theme:o}=e;return(0,l.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),O=(0,c.ZP)((function(e){const{onChange:t}=e,o=(0,r.Z)(e,Z),a=n.useRef(),i=n.useRef(null),s=()=>{a.current=i.current.offsetHeight-i.current.clientHeight};return(0,v.Z)((()=>{const e=(0,f.Z)((()=>{const e=a.current;s(),e!==a.current&&t(a.current)})),o=(0,S.Z)(i.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(a.current)}),[t]),(0,w.jsx)("div",(0,l.Z)({style:x,ref:i},o))}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),_={};const V=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTabs"}),c=(0,u.Z)(),b="rtl"===c.direction,{"aria-label":v,"aria-labelledby":Z,action:x,centered:y=!1,children:g,className:C,component:B="div",allowScrollButtonsMobile:M=!1,indicatorColor:R="primary",onChange:P,orientation:W="horizontal",ScrollButtonComponent:E=I,scrollButtons:k="auto",selectionFollowsFocus:V,slots:$={},slotProps:q={},TabIndicatorProps:K={},TabScrollButtonProps:G={},textColor:U="primary",value:J,variant:Q="standard",visibleScrollbar:ee=!1}=o,te=(0,r.Z)(o,z),oe="scrollable"===Q,re="vertical"===W,le=re?"scrollTop":"scrollLeft",ne=re?"top":"left",ae=re?"bottom":"right",ie=re?"clientHeight":"clientWidth",se=re?"height":"width",ce=(0,l.Z)({},o,{component:B,allowScrollButtonsMobile:M,indicatorColor:R,orientation:W,vertical:re,scrollButtons:k,textColor:U,variant:Q,visibleScrollbar:ee,fixed:!oe,hideScrollbar:oe&&!ee,scrollableX:oe&&!re,scrollableY:oe&&re,centered:y&&!oe,scrollButtonsHideMobile:!M}),de=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:n,centered:a,scrollButtonsHideMobile:s,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",a&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",s&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,i.Z)(d,T,c)})(ce),ue=(0,s.y)({elementType:$.StartScrollButtonIcon,externalSlotProps:q.startScrollButtonIcon,ownerState:ce}),fe=(0,s.y)({elementType:$.EndScrollButtonIcon,externalSlotProps:q.endScrollButtonIcon,ownerState:ce});const[be,pe]=n.useState(!1),[he,me]=n.useState(_),[ve,Se]=n.useState(!1),[we,Ze]=n.useState(!1),[xe,ye]=n.useState(!1),[ge,Ce]=n.useState({overflow:"hidden",scrollbarWidth:0}),Be=new Map,Me=n.useRef(null),Re=n.useRef(null),Pe=()=>{const e=Me.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:h(e,c.direction),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==J){const e=Re.current.children;if(e.length>0){const t=e[Be.get(J)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},We=(0,N.Z)((()=>{const{tabsMeta:e,tabMeta:t}=Pe();let o,r=0;if(re)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=b?"right":"left",t&&e){const l=b?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(b?-1:1)*(t[o]-e[o]+l)}const l={[o]:r,[se]:t?t[se]:0};if(isNaN(he[o])||isNaN(he[se]))me(l);else{const e=Math.abs(he[o]-l[o]),t=Math.abs(he[se]-l[se]);(e>=1||t>=1)&&me(l)}})),Ee=function(e){let{animation:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t?function(e,t,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:()=>{};const{ease:n=m,duration:a=300}=r;let i=null;const s=t[e];let c=!1;const d=()=>{c=!0},u=r=>{if(c)return void l(new Error("Animation cancelled"));null===i&&(i=r);const d=Math.min(1,(r-i)/a);t[e]=n(d)*(o-s)+s,d>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(u)};s===o?l(new Error("Element already at target position")):requestAnimationFrame(u)}(le,Me.current,e,{duration:c.transitions.duration.standard}):Me.current[le]=e},Ie=e=>{let t=Me.current[le];re?t+=e:(t+=e*(b?-1:1),t*=b&&"reverse"===p()?-1:1),Ee(t)},Ne=()=>{const e=Me.current[ie];let t=0;const o=Array.from(Re.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[ie]>e){0===r&&(t=e);break}t+=l[ie]}return t},Te=()=>{Ie(-1*Ne())},ke=()=>{Ie(Ne())},Le=n.useCallback((e=>{Ce({overflow:null,scrollbarWidth:e})}),[]),ze=(0,N.Z)((e=>{const{tabsMeta:t,tabMeta:o}=Pe();if(o&&t)if(o[ne]<t[ne]){const r=t[le]+(o[ne]-t[ne]);Ee(r,{animation:e})}else if(o[ae]>t[ae]){const r=t[le]+(o[ae]-t[ae]);Ee(r,{animation:e})}})),Fe=(0,N.Z)((()=>{oe&&!1!==k&&ye(!xe)}));n.useEffect((()=>{const e=(0,f.Z)((()=>{Me.current&&We()}));let t;const o=o=>{o.forEach((e=>{e.removedNodes.forEach((e=>{var o;null==(o=t)||o.unobserve(e)})),e.addedNodes.forEach((e=>{var o;null==(o=t)||o.observe(e)}))})),e(),Fe()},r=(0,S.Z)(Me.current);let l;return r.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from(Re.current.children).forEach((e=>{t.observe(e)}))),"undefined"!==typeof MutationObserver&&(l=new MutationObserver(o),l.observe(Re.current,{childList:!0})),()=>{var o,n;e.clear(),r.removeEventListener("resize",e),null==(o=l)||o.disconnect(),null==(n=t)||n.disconnect()}}),[We,Fe]),n.useEffect((()=>{const e=Array.from(Re.current.children),t=e.length;if("undefined"!==typeof IntersectionObserver&&t>0&&oe&&!1!==k){const o=e[0],r=e[t-1],l={root:Me.current,threshold:.99},n=new IntersectionObserver((e=>{Se(!e[0].isIntersecting)}),l);n.observe(o);const a=new IntersectionObserver((e=>{Ze(!e[0].isIntersecting)}),l);return a.observe(r),()=>{n.disconnect(),a.disconnect()}}}),[oe,k,xe,null==g?void 0:g.length]),n.useEffect((()=>{pe(!0)}),[]),n.useEffect((()=>{We()})),n.useEffect((()=>{ze(_!==he)}),[ze,he]),n.useImperativeHandle(x,(()=>({updateIndicator:We,updateScrollButtons:Fe})),[We,Fe]);const je=(0,w.jsx)(D,(0,l.Z)({},K,{className:(0,a.Z)(de.indicator,K.className),ownerState:ce,style:(0,l.Z)({},he,K.style)}));let Ae=0;const He=n.Children.map(g,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Ae:e.props.value;Be.set(t,Ae);const o=t===J;return Ae+=1,n.cloneElement(e,(0,l.Z)({fullWidth:"fullWidth"===Q,indicator:o&&!be&&je,selected:o,selectionFollowsFocus:V,onChange:P,textColor:U,value:t},1!==Ae||!1!==J||e.props.tabIndex?{}:{tabIndex:0}))})),Xe=(()=>{const e={};e.scrollbarSizeListener=oe?(0,w.jsx)(O,{onChange:Le,className:(0,a.Z)(de.scrollableX,de.hideScrollbar)}):null;const t=oe&&("auto"===k&&(ve||we)||!0===k);return e.scrollButtonStart=t?(0,w.jsx)(E,(0,l.Z)({slots:{StartScrollButtonIcon:$.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:ue},orientation:W,direction:b?"right":"left",onClick:Te,disabled:!ve},G,{className:(0,a.Z)(de.scrollButtons,G.className)})):null,e.scrollButtonEnd=t?(0,w.jsx)(E,(0,l.Z)({slots:{EndScrollButtonIcon:$.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:fe},orientation:W,direction:b?"left":"right",onClick:ke,disabled:!we},G,{className:(0,a.Z)(de.scrollButtons,G.className)})):null,e})();return(0,w.jsxs)(H,(0,l.Z)({className:(0,a.Z)(de.root,C),ownerState:ce,ref:t,as:B},te,{children:[Xe.scrollButtonStart,Xe.scrollbarSizeListener,(0,w.jsxs)(X,{className:de.scroller,ownerState:ce,style:{overflow:ge.overflow,[re?"margin".concat(b?"Left":"Right"):"marginBottom"]:ee?void 0:-ge.scrollbarWidth},ref:Me,children:[(0,w.jsx)(Y,{"aria-label":v,"aria-labelledby":Z,"aria-orientation":"vertical"===W?"vertical":null,className:de.flexContainer,ownerState:ce,onKeyDown:e=>{const t=Re.current,o=(0,L.Z)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===W?"ArrowLeft":"ArrowUp",l="horizontal"===W?"ArrowRight":"ArrowDown";switch("horizontal"===W&&b&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),A(t,o,j);break;case l:e.preventDefault(),A(t,o,F);break;case"Home":e.preventDefault(),A(t,null,F);break;case"End":e.preventDefault(),A(t,null,j)}},ref:Re,role:"tablist",children:He}),be&&je]}),Xe.scrollButtonEnd]}))}))},5328:(e,t,o)=>{o.d(t,{Z:()=>n});o(7313);var r=o(1171),l=o(6417);const n=(0,r.Z)((0,l.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},8168:(e,t,o)=>{o.d(t,{Z:()=>n});o(7313);var r=o(1171),l=o(6417);const n=(0,r.Z)((0,l.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},5436:(e,t)=>{var o,r=Symbol.for("react.element"),l=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case i:case a:case f:case b:return e;default:switch(e=e&&e.$$typeof){case d:case c:case u:case h:case p:case s:return e;default:return t}}case l:return t}}}o=Symbol.for("react.module.reference")},478:(e,t,o)=>{o(5436)}}]);