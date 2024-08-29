"use strict";(self.webpackChunknexinx_webui=self.webpackChunknexinx_webui||[]).push([[303],{6303:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var n=s(7313),c=s(3428),l=s(3405),a=s(1113),r=s(1806),o=s(9019),i=s(501),d=s(219),h=s(7406),v=s(5489),x=s(3074),Z=s(7437),m=s(5694),j=s(8998),p=s(5662),z=s(6417);const u=()=>{const[e,t]=(0,n.useState)({total_nodes:0,total_epapers:0,total_stations:0,total_templates:0,total_racks:0,total_users:0,total_branches:0});return(0,n.useEffect)((()=>{const e=sessionStorage.getItem("jwt");(async()=>{try{const s=await p.Z.get("".concat("http://localhost:8080/api/v1","/element-sum"),{headers:{Authorization:"Bearer ".concat(e)}});t(s.data)}catch(s){console.error(s)}})()}),[]),(0,z.jsxs)(r.Z,{children:[(0,z.jsx)(a.Z,{className:"topTitle",sx:{marginBottom:6},color:"secondary.dark",gutterBottom:!0,children:"Dashboard"}),(0,z.jsx)(c.Z,{children:(0,z.jsxs)(l.Z,{sx:{pt:4,px:3},children:[(0,z.jsxs)(o.ZP,{container:!0,spacing:4,children:[(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,lg:2,children:(0,z.jsxs)(i.Z,{elevation:3,sx:{margin:0,padding:0},children:[(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(d.Z,{style:{fontSize:90}})}),(0,z.jsxs)(a.Z,{align:"center",children:["Total Product Node: ",e.total_nodes]})]})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,lg:2,children:(0,z.jsxs)(i.Z,{elevation:3,children:[(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(h.Z,{style:{fontSize:90}})}),(0,z.jsxs)(a.Z,{align:"center",children:["Total Epaper: ",e.total_epapers]})]})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,lg:2,children:(0,z.jsxs)(i.Z,{elevation:3,sx:{margin:0,padding:0},children:[(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(v.Z,{style:{fontSize:90}})}),(0,z.jsxs)(a.Z,{align:"center",children:["Total Station: ",e.total_stations]})]})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,lg:2,children:(0,z.jsxs)(i.Z,{elevation:3,sx:{margin:0,padding:0},children:[(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(x.Z,{style:{fontSize:90}})}),(0,z.jsxs)(a.Z,{align:"center",children:["Total Template: ",e.total_templates]})]})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,lg:2,children:(0,z.jsxs)(i.Z,{elevation:3,sx:{margin:0,padding:0},children:[(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(Z.Z,{style:{fontSize:90}})}),(0,z.jsxs)(a.Z,{align:"center",children:["Total Rack: ",e.total_racks]})]})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,lg:2,children:(0,z.jsxs)(i.Z,{elevation:3,sx:{margin:0,padding:0},children:[(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(m.Z,{style:{fontSize:90}})}),(0,z.jsxs)(a.Z,{align:"center",children:["Total User: ",e.total_users]})]})})]}),(0,z.jsx)(o.ZP,{container:!0,spacing:4,sx:{mt:2},children:(0,z.jsx)(o.ZP,{item:!0,xs:12,md:2,lg:2,children:(0,z.jsxs)(i.Z,{elevation:3,sx:{margin:0,padding:0},children:[(0,z.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,z.jsx)(j.Z,{style:{fontSize:90}})}),(0,z.jsxs)(a.Z,{align:"center",children:["Branch: ",e.total_branches]})]})})})]})})]})}},7437:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1171),c=s(6417);const l=(0,n.Z)((0,c.jsx)("path",{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5zM8 18H4v-5h4v5zm6 0h-4v-5h4v5zm6 0h-4v-5h4v5z"}),"CalendarViewMonth")},7406:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1171),c=s(6417);const l=(0,n.Z)((0,c.jsx)("path",{d:"M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CastConnected")},3074:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1171),c=s(6417);const l=(0,n.Z)((0,c.jsx)("path",{d:"M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"}),"LocalFlorist")},5694:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1171),c=s(6417);const l=(0,n.Z)([(0,c.jsx)("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),(0,c.jsx)("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),(0,c.jsx)("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt")},5489:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1171),c=s(6417);const l=(0,n.Z)((0,c.jsx)("path",{d:"m20.2 5.9.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"}),"Router")},8998:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1171),c=s(6417);const l=(0,n.Z)((0,c.jsx)("path",{d:"m21.9 8.89-1.05-4.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 8.89c-.24 1.02-.02 2.06.62 2.88.08.11.19.19.28.29V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6.94c.09-.09.2-.18.28-.28.64-.82.87-1.87.62-2.89zm-2.99-3.9 1.05 4.37c.1.42.01.84-.25 1.17-.14.18-.44.47-.94.47-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01zM13 5h1.96l.54 4.52c.05.39-.07.78-.33 1.07-.22.26-.54.41-.95.41-.67 0-1.22-.59-1.22-1.31V5zM8.49 9.52 9.04 5H11v4.69c0 .72-.55 1.31-1.29 1.31-.34 0-.65-.15-.89-.41-.25-.29-.37-.68-.33-1.07zm-4.45-.16L5.05 5h1.97l-.58 4.86c-.08.65-.6 1.14-1.21 1.14-.49 0-.8-.29-.93-.47-.27-.32-.36-.75-.26-1.17zM5 19v-6.03c.08.01.15.03.23.03.87 0 1.66-.36 2.24-.95.6.6 1.4.95 2.31.95.87 0 1.65-.36 2.23-.93.59.57 1.39.93 2.29.93.84 0 1.64-.35 2.24-.95.58.59 1.37.95 2.24.95.08 0 .15-.02.23-.03V19H5z"}),"Storefront")},219:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(1171),c=s(6417);const l=(0,n.Z)((0,c.jsx)("path",{d:"m18.25 7.6-5.5-3.18c-.46-.27-1.04-.27-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"}),"ViewInAr")},3405:(e,t,s)=>{s.d(t,{Z:()=>j});var n=s(7462),c=s(3366),l=s(7313),a=s(4146),r=s(1921),o=s(7592),i=s(7342),d=s(7430),h=s(2298);function v(e){return(0,h.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var x=s(6417);const Z=["className","component"],m=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),j=l.forwardRef((function(e,t){const s=(0,i.Z)({props:e,name:"MuiCardContent"}),{className:l,component:o="div"}=s,d=(0,c.Z)(s,Z),h=(0,n.Z)({},s,{component:o}),j=(e=>{const{classes:t}=e;return(0,r.Z)({root:["root"]},v,t)})(h);return(0,x.jsx)(m,(0,n.Z)({as:o,className:(0,a.Z)(j.root,l),ownerState:h,ref:t},d))}))},3428:(e,t,s)=>{s.d(t,{Z:()=>p});var n=s(7462),c=s(3366),l=s(7313),a=s(4146),r=s(1921),o=s(7592),i=s(7342),d=s(501),h=s(7430),v=s(2298);function x(e){return(0,v.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var Z=s(6417);const m=["className","raised"],j=(0,o.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),p=l.forwardRef((function(e,t){const s=(0,i.Z)({props:e,name:"MuiCard"}),{className:l,raised:o=!1}=s,d=(0,c.Z)(s,m),h=(0,n.Z)({},s,{raised:o}),v=(e=>{const{classes:t}=e;return(0,r.Z)({root:["root"]},x,t)})(h);return(0,Z.jsx)(j,(0,n.Z)({className:(0,a.Z)(v.root,l),elevation:o?8:void 0,ref:t,ownerState:h},d))}))}}]);