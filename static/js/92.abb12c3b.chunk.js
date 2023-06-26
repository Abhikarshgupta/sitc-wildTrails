"use strict";(self.webpackChunksitc_wildtrails=self.webpackChunksitc_wildtrails||[]).push([[92],{1092:function(t,e,n){n.r(e),n.d(e,{default:function(){return R}});var i,r=n(1582),a=n(3366),o=n(7462),l=n(2791),c=n(8182),d=n(4419),s=n(2065),h=n(6934),u=n(1402),f=n(133),v=n(184),g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,h.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,n.absolute&&e.absolute,e[n.variant],n.light&&e.light,"vertical"===n.orientation&&e.vertical,n.flexItem&&e.flexItem,n.children&&e.withChildren,n.children&&"vertical"===n.orientation&&e.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&e.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,n=t.ownerState;return(0,o.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,s.Fq)(e.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.ownerState;return(0,o.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(t){var e=t.theme,n=t.ownerState;return(0,o.Z)({},n.children&&"vertical"!==n.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider)}})}),(function(t){var e=t.theme,n=t.ownerState;return(0,o.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((e.vars||e).palette.divider)}})}),(function(t){var e=t.ownerState;return(0,o.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),m=(0,h.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var n=t.ownerState;return[e.wrapper,"vertical"===n.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,n=t.ownerState;return(0,o.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),w=l.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiDivider"}),i=n.absolute,r=void 0!==i&&i,l=n.children,s=n.className,h=n.component,w=void 0===h?l?"div":"hr":h,x=n.flexItem,b=void 0!==x&&x,Z=n.light,S=void 0!==Z&&Z,j=n.orientation,k=void 0===j?"horizontal":j,y=n.role,A=void 0===y?"hr"!==w?"separator":void 0:y,I=n.textAlign,C=void 0===I?"center":I,R=n.variant,L=void 0===R?"fullWidth":R,W=(0,a.Z)(n,g),P=(0,o.Z)({},n,{absolute:r,component:w,flexItem:b,light:S,orientation:k,role:A,textAlign:C,variant:L}),_=function(t){var e=t.absolute,n=t.children,i=t.classes,r=t.flexItem,a=t.light,o=t.orientation,l=t.textAlign,c={root:["root",e&&"absolute",t.variant,a&&"light","vertical"===o&&"vertical",r&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,d.Z)(c,f.V,i)}(P);return(0,v.jsx)(p,(0,o.Z)({as:w,className:(0,c.Z)(_.root,s),role:A,ref:e,ownerState:P},W,{children:l?(0,v.jsx)(m,{className:_.wrapper,ownerState:P,children:l}):null}))})),x=n(168),b=n(3966),Z=(0,n(7e3).ZP)(b.p)(i||(i=(0,x.Z)(['\n\tbackground: url("https://sitc.travel/assets/img/Kenya-Tourism.jpeg");\n\tbackground-repeat: no-repeat;\n\tbackground-attachment: fixed;\n\tbackground-size: cover;\n\twidth: 100%;\n\theight: 100%;\n']))),S=n(9439),j=n(4280),k=n(4518),y=n(7689),A=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,I=function(){var t=(0,y.s0)(),e=(0,l.useState)(""),n=(0,S.Z)(e,2),i=n[0],a=n[1],o=(0,l.useState)(!1),c=(0,S.Z)(o,2),d=c[0],s=c[1];return(0,v.jsxs)(r.Z,{rowGap:2,children:[(0,v.jsx)(b.p,{flexStart:!0,children:"Email Address"}),(0,v.jsx)(j.Z,{value:i,onChange:function(t){return a(t.target.value)},variant:"outlined",size:"small",label:" ",InputLabelProps:{shrink:!1},style:{height:"3rem"},error:d&&(!i||!A.test(i)),placeholder:"Enter your email address"}),(0,v.jsx)(k.Z,{color:"info",variant:"contained",size:"small",onClick:function(){i&&A.test(i)?(window.localStorage.setItem("email-id",i.trim()),window.localStorage.setItem("user-authenticated",!0),t("/dashboard")):s(!0)},style:{height:"3rem"},children:"Login With Email"})]})},C=function(){var t=(0,y.s0)();(0,l.useEffect)((function(){var e=new URLSearchParams(window.location.hash.substring(1)).get("id_token");e&&e.length&&(window.localStorage.setItem("user-id-token",e),window.localStorage.setItem("user-authenticated",!0),t("/dashboard"))}),[t]);return(0,v.jsx)(k.Z,{variant:"contained",color:"success",style:{height:"3rem"},onClick:function(){var t=function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<16;n++)t+=e.charAt(Math.floor(62*Math.random()));return t}(),e="https://accounts.google.com/o/oauth2/v2/auth?response_type=id_token"+"&client_id=".concat("196812285925-dbq9inmgudqil50jer1ods8aa6cj4abi.apps.googleusercontent.com")+"&redirect_uri=".concat(encodeURIComponent("https://abhikarshgupta.github.io/wildTrails/"))+"&scope=".concat(encodeURIComponent("email profile"))+"&nonce=".concat(t);window.location.href=e},children:"Login With Google"})},R=function(){return(0,v.jsx)(Z,{children:(0,v.jsx)("div",{style:{width:"30rem",height:"25rem",background:"#fff",padding:"2rem"},children:(0,v.jsxs)(r.Z,{rowGap:4,children:[(0,v.jsx)(b.p,{children:"login account"}),(0,v.jsx)(I,{}),(0,v.jsx)(b.p,{children:(0,v.jsx)(w,{children:"OR"})}),(0,v.jsx)(r.Z,{children:(0,v.jsx)(C,{})})]})})})}},3966:function(t,e,n){n.d(e,{p:function(){return p}});var i,r,a,o,l,c,d,s,h,u,f,v=n(168),g=n(7e3),p=g.ZP.div(i||(i=(0,v.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: fit-content;\n\t","\n\t","\n    ","\n    ","\n    ","\n    ","\n\t","\n\t","\n\t","\n\t","\n"])),(function(t){return t.column&&(0,g.iv)(r||(r=(0,v.Z)(["\n\t\t\tflex-direction: column;\n\t\t"])))}),(function(t){return t.flexStart&&(0,g.iv)(a||(a=(0,v.Z)(["\n\t\t\tjustify-content: flex-start;\n\t\t"])))}),(function(t){return t.flexAlignStart&&(0,g.iv)(o||(o=(0,v.Z)(["\n\t\t\talign-items: flex-start;\n\t\t"])))}),(function(t){return t.flexEnd&&(0,g.iv)(l||(l=(0,v.Z)(["\n\t\t\tjustify-content: flex-end;\n\t\t"])))}),(function(t){return t.flexSpaceBetween&&(0,g.iv)(c||(c=(0,v.Z)(["\n\t\t\tjustify-content: space-between;\n\t\t"])))}),(function(t){return t.fullWidth&&(0,g.iv)(d||(d=(0,v.Z)(["\n\t\t\twidth: 100%;\n\t\t"])))}),(function(t){var e=t.gap;return e&&(0,g.iv)(s||(s=(0,v.Z)(["\n\t\t\tgap: ",";\n\t\t"])),e)}),(function(t){return t.wrap&&(0,g.iv)(h||(h=(0,v.Z)(["\n\t\t\tflex-wrap: wrap;\n\t\t"])))}),(function(t){return t.pointer&&(0,g.iv)(u||(u=(0,v.Z)(["\n\t\t\tcursor: pointer;\n\t\t"])))}),(function(t){return t.disabled&&(0,g.iv)(f||(f=(0,v.Z)(["\n\t\t\tcursor: default;\n\t\t\tpointer-events: none;\n\t\t\topacity: 0.3;\n\t\t"])))}))}}]);
//# sourceMappingURL=92.abb12c3b.chunk.js.map