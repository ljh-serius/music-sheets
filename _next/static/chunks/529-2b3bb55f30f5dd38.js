"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{9893:function(e,t,a){var r=a(4836);t.Z=void 0;var o=r(a(7955)),n=a(5893);t.Z=(0,o.default)((0,n.jsx)("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3z"}),"MusicNote")},6374:function(e,t,a){a.d(t,{Z:function(){return q}});var r=a(3366),o=a(7462),n=a(7294),l=a(512),i=a(8510),c=a(2794),s=a(8027),d=a(5463),u=a(5098),p=a(9628),h=a(9707),m=a(7172),b=a(5408),v=a(8700),g=a(5893);let f=["component","direction","spacing","divider","children","className","useFlexGap"],Z=(0,m.Z)(),k=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function w(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:Z})}let y=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],x=({ownerState:e,theme:t})=>{let a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,b.k9)({theme:t},(0,b.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let r=(0,v.hB)(t),o=Object.keys(t.breakpoints.values).reduce((t,a)=>(("object"==typeof e.spacing&&null!=e.spacing[a]||"object"==typeof e.direction&&null!=e.direction[a])&&(t[a]=!0),t),{}),n=(0,b.P$)({values:e.direction,base:o}),l=(0,b.P$)({values:e.spacing,base:o});"object"==typeof n&&Object.keys(n).forEach((e,t,a)=>{if(!n[e]){let r=t>0?n[a[t-1]]:"column";n[e]=r}}),a=(0,s.Z)(a,(0,b.k9)({theme:t},l,(t,a)=>e.useFlexGap?{gap:(0,v.NA)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${y(a?n[a]:e.direction)}`]:(0,v.NA)(r,t)}}))}return(0,b.dt)(t.breakpoints,a)};var S=a(9262),P=a(9145);let R=function(e={}){let{createStyledComponent:t=k,useThemeProps:a=w,componentName:c="MuiStack"}=e,s=()=>(0,i.Z)({root:["root"]},e=>(0,d.ZP)(c,e),{}),u=t(x);return n.forwardRef(function(e,t){let i=a(e),c=(0,h.Z)(i),{component:d="div",direction:p="column",spacing:m=0,divider:b,children:v,className:Z,useFlexGap:k=!1}=c,w=(0,r.Z)(c,f),y=s();return(0,g.jsx)(u,(0,o.Z)({as:d,ownerState:{direction:p,spacing:m,useFlexGap:k},ref:t,className:(0,l.Z)(y.root,Z)},w,{children:b?function(e,t){let a=n.Children.toArray(e).filter(Boolean);return a.reduce((e,r,o)=>(e.push(r),o<a.length-1&&e.push(n.cloneElement(t,{key:`separator-${o}`})),e),[])}(v,b):v}))})}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,P.Z)({props:e,name:"MuiStack"})});var C=a(4246),j=a(5228);function M(e){return(0,d.ZP)("MuiFormControlLabel",e)}let B=(0,a(1977).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var N=a(5029);let F=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],z=e=>{let{classes:t,disabled:a,labelPlacement:r,error:o,required:n}=e,l={root:["root",a&&"disabled","labelPlacement".concat((0,j.Z)(r)),o&&"error",n&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",o&&"error"]};return(0,i.Z)(l,M,t)},L=(0,S.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[{["& .".concat(B.label)]:t.label},t.root,t["labelPlacement".concat((0,j.Z)(a.labelPlacement))]]}})(e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(B.disabled)]:{cursor:"default"}},"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(B.label)]:{["&.".concat(B.disabled)]:{color:(t.vars||t).palette.text.disabled}}})}),I=(0,S.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(e=>{let{theme:t}=e;return{["&.".concat(B.error)]:{color:(t.vars||t).palette.error.main}}});var q=n.forwardRef(function(e,t){var a,i;let s=(0,P.Z)({props:e,name:"MuiFormControlLabel"}),{className:d,componentsProps:u={},control:p,disabled:h,disableTypography:m,label:b,labelPlacement:v="end",required:f,slotProps:Z={}}=s,k=(0,r.Z)(s,F),w=(0,c.Z)(),y=null!=(a=null!=h?h:p.props.disabled)?a:null==w?void 0:w.disabled,x=null!=f?f:p.props.required,S={disabled:y,required:x};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===p.props[e]&&void 0!==s[e]&&(S[e]=s[e])});let j=(0,N.Z)({props:s,muiFormControl:w,states:["error"]}),M=(0,o.Z)({},s,{disabled:y,labelPlacement:v,required:x,error:j.error}),B=z(M),q=null!=(i=Z.typography)?i:u.typography,E=b;return null==E||E.type===C.Z||m||(E=(0,g.jsx)(C.Z,(0,o.Z)({component:"span"},q,{className:(0,l.Z)(B.label,null==q?void 0:q.className),children:E}))),(0,g.jsxs)(L,(0,o.Z)({className:(0,l.Z)(B.root,d),ownerState:M,ref:t},k,{children:[n.cloneElement(p,S),x?(0,g.jsxs)(R,{display:"block",children:[E,(0,g.jsxs)(I,{ownerState:M,"aria-hidden":!0,className:B.asterisk,children:[" ","*"]})]}):E]}))})},1661:function(e,t,a){a.d(t,{Z:function(){return L}});var r=a(3366),o=a(7462),n=a(7294),l=a(512),i=a(8510),c=a(2101),s=a(5228),d=a(9262),u=a(3188),p=a(2621),h=a(2794),m=a(231),b=a(1977),v=a(5463);function g(e){return(0,v.ZP)("PrivateSwitchBase",e)}(0,b.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var f=a(5893);let Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=e=>{let{classes:t,checked:a,disabled:r,edge:o}=e,n={root:["root",a&&"checked",r&&"disabled",o&&"edge".concat((0,s.Z)(o))],input:["input"]};return(0,i.Z)(n,g,t)},w=(0,d.ZP)(m.Z)(e=>{let{ownerState:t}=e;return(0,o.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),y=(0,d.ZP)("input",{shouldForwardProp:u.Z})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=n.forwardRef(function(e,t){let{autoFocus:a,checked:n,checkedIcon:i,className:c,defaultChecked:s,disabled:d,disableFocusRipple:u=!1,edge:m=!1,icon:b,id:v,inputProps:g,inputRef:x,name:S,onBlur:P,onChange:R,onFocus:C,readOnly:j,required:M=!1,tabIndex:B,type:N,value:F}=e,z=(0,r.Z)(e,Z),[L,I]=(0,p.Z)({controlled:n,default:!!s,name:"SwitchBase",state:"checked"}),q=(0,h.Z)(),E=d;q&&void 0===E&&(E=q.disabled);let O="checkbox"===N||"radio"===N,T=(0,o.Z)({},e,{checked:L,disabled:E,disableFocusRipple:u,edge:m}),D=k(T);return(0,f.jsxs)(w,(0,o.Z)({component:"span",className:(0,l.Z)(D.root,c),centerRipple:!0,focusRipple:!u,disabled:E,tabIndex:null,role:void 0,onFocus:e=>{C&&C(e),q&&q.onFocus&&q.onFocus(e)},onBlur:e=>{P&&P(e),q&&q.onBlur&&q.onBlur(e)},ownerState:T,ref:t},z,{children:[(0,f.jsx)(y,(0,o.Z)({autoFocus:a,checked:n,defaultChecked:s,className:D.input,disabled:E,id:O?v:void 0,name:S,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;I(t),R&&R(e,t)},readOnly:j,ref:x,required:M,ownerState:T,tabIndex:B,type:N},"checkbox"===N&&void 0===F?{}:{value:F},g)),L?i:b]}))});var S=a(9145);function P(e){return(0,v.ZP)("MuiSwitch",e)}let R=(0,b.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),C=["className","color","edge","size","sx"],j=S.Z,M=e=>{let{classes:t,edge:a,size:r,color:n,checked:l,disabled:c}=e,d={root:["root",a&&"edge".concat((0,s.Z)(a)),"size".concat((0,s.Z)(r))],switchBase:["switchBase","color".concat((0,s.Z)(n)),l&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,i.Z)(d,P,t);return(0,o.Z)({},t,u)},B=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.edge&&t["edge".concat((0,s.Z)(a.edge))],t["size".concat((0,s.Z)(a.size))]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,["& .".concat(R.thumb)]:{width:16,height:16},["& .".concat(R.switchBase)]:{padding:4,["&.".concat(R.checked)]:{transform:"translateX(16px)"}}}}]}),N=(0,d.ZP)(x,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.switchBase,{["& .".concat(R.input)]:t.input},"default"!==a.color&&t["color".concat((0,s.Z)(a.color))]]}})(e=>{let{theme:t}=e;return{position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:"".concat("light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]),transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),["&.".concat(R.checked)]:{transform:"translateX(20px)"},["&.".concat(R.disabled)]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:"".concat("light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600])},["&.".concat(R.checked," + .").concat(R.track)]:{opacity:.5},["&.".concat(R.disabled," + .").concat(R.track)]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:"".concat("light"===t.palette.mode?.12:.2)},["& .".concat(R.input)]:{left:"-100%",width:"300%"}}},e=>{let{theme:t}=e;return{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(e=>{let[,t]=e;return t.main&&t.light}).map(e=>{let[a]=e;return{props:{color:a},style:{["&.".concat(R.checked)]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(R.disabled)]:{color:t.vars?t.vars.palette.Switch["".concat(a,"DisabledColor")]:"".concat("light"===t.palette.mode?(0,c.$n)(t.palette[a].main,.62):(0,c._j)(t.palette[a].main,.55))}},["&.".concat(R.checked," + .").concat(R.track)]:{backgroundColor:(t.vars||t).palette[a].main}}}})]}}),F=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(e=>{let{theme:t}=e;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}}),z=(0,d.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(e=>{let{theme:t}=e;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}});var L=n.forwardRef(function(e,t){let a=j({props:e,name:"MuiSwitch"}),{className:n,color:i="primary",edge:c=!1,size:s="medium",sx:d}=a,u=(0,r.Z)(a,C),p=(0,o.Z)({},a,{color:i,edge:c,size:s}),h=M(p),m=(0,f.jsx)(z,{className:h.thumb,ownerState:p});return(0,f.jsxs)(B,{className:(0,l.Z)(h.root,n),sx:d,ownerState:p,children:[(0,f.jsx)(N,(0,o.Z)({type:"checkbox",icon:m,checkedIcon:m,ref:t,ownerState:p},u,{classes:(0,o.Z)({},h,{root:h.switchBase})})),(0,f.jsx)(F,{className:h.track,ownerState:p})]})})}}]);