"use strict";(self.webpackChunknexinx_webui=self.webpackChunknexinx_webui||[]).push([[371],{818:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(7313),o=t(1806),r=t(9019),s=t(1113),i=t(501),l=t(8310),c=t(7216),d=t(9840),h=t(4748),u=t(3213),m=t(9536),Z=t(3245),p=t(2040),x=t(8377),b=t(8465),v=t(1970),j=t(6417);const y=e=>{let{onClick:a,handleExport:t,handleImport:y,route:f}=e;const g=(0,n.useRef)(),C=t&&t.length>0;return(0,j.jsx)(o.Z,{sx:{mb:3},children:(0,j.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(r.ZP,{item:!0,xs:12,sm:4,children:(0,j.jsxs)(s.Z,{className:"topTitle",color:"secondary.dark",sx:{textTransform:"capitalize"},children:[f," Managment"]})}),(0,j.jsx)(r.ZP,{item:!0,xs:12,sm:8,children:(0,j.jsx)(i.Z,{elevation:0,sx:{display:"flex",width:"fit-content",marginLeft:"auto"},children:(0,j.jsxs)(l.Z,{style:{display:"flex",flexDirection:"row",padding:0},children:[(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:a,disabled:"epaper"===f,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(p.Z,{})}),(0,j.jsx)(u.Z,{primary:"Add"})]})}),(0,j.jsx)(m.Z,{orientation:"vertical",flexItem:!0}),(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:()=>{g.current&&g.current.link.click()},disabled:"node"!==f||!C,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(x.Z,{})}),(0,j.jsx)(u.Z,{primary:"Download"}),(0,j.jsx)(Z.CSVLink,{data:t,filename:"selected_nodes.csv",ref:g})]})}),(0,j.jsx)(m.Z,{orientation:"vertical",flexItem:!0}),(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:y,disabled:"node"!==f,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(b.Z,{})}),(0,j.jsx)(u.Z,{primary:"Upload"})]})}),(0,j.jsx)(m.Z,{orientation:"vertical",flexItem:!0}),(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:a,disabled:!0,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(v.Z,{})}),(0,j.jsx)(u.Z,{primary:"Delete"})]})})]})})})]})})}},1371:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var n=t(7313),o=t(2277),r=t(2832),s=t(7131),i=t(1806),l=t(3428),c=t(4641),d=t(3405),h=t(9019),u=t(6783),m=t(8623),Z=t(1095),p=t(6373),x=t(9881),b=t(501),v=t(6149),j=t(3604),y=t(6467),f=t(4117),g=t(1629),C=t(6835),S=t(3467),w=t(4076),k=t(7478),N=t(1113),P=t(3653),I=t(155),M=t(4481),T=t(818),R=t(5281),z=t(5662),H=t(6417);const O="http://localhost:8080/api/v1",A=sessionStorage.getItem("jwt"),B=()=>{const[e,a]=(0,n.useState)([]),[t,B]=(0,n.useState)(null),[D,W]=(0,n.useState)(!1),[F,L]=(0,n.useState)(null),[q,E]=(0,n.useState)(!1),_=()=>{E(!q)},[V,U]=(0,n.useState)(!0);(0,n.useEffect)((()=>{(async()=>{try{return(await z.Z.get("".concat(O,"/stations"),{headers:{Authorization:"Bearer ".concat(A)}})).data.reverse()}catch(e){console.error(e),U(!1)}})().then((e=>{e&&a(e),U(!1)}))}),[]);const X=[{field:"stationId",headerName:"Station ID",flex:1},{field:"stationIp",headerName:"Station IP",flex:1},{field:"stationPort",headerName:"Station Port",flex:1},{field:"isActive",headerName:"Status",flex:1},{field:"branchName",headerName:"Branch",flex:1},{field:"actions",headerName:"Actions",width:300,renderCell:e=>(0,H.jsxs)(r.Z,{direction:"row",alignItems:"center",spacing:3,children:[(0,H.jsxs)(s.Z,{onClick:()=>pe(e.row),color:"secondary",size:"medium","aria-label":"view",children:[" ",(0,H.jsx)(P.Z,{fontSize:"inherit"})]}),(0,H.jsx)(s.Z,{onClick:()=>re(e.row),color:"secondary",size:"medium","aria-label":"view",children:(0,H.jsx)(I.Z,{fontSize:"inherit"})}),(0,H.jsx)(s.Z,{onClick:()=>J(e.id),color:"secondary",size:"medium","aria-label":"view",children:(0,H.jsx)(M.Z,{fontSize:"inherit"})})]})}],[$,G]=(0,n.useState)(!1),J=e=>{L(e),G(!0)},K=()=>{L(null),G(!1)},[Q,Y]=(0,n.useState)({}),ee=e=>{const{name:a,value:t}=e.target;Y({...Q,[a]:t}),ne((e=>({...e,[a]:""})))},ae=(e,a)=>{Y({...Q,branchName:a?a.label:"",branchId:a?a.value:""}),ne((e=>({...e,stationId:"",branchName:"",branchId:""})))},[te,ne]=(0,n.useState)({}),oe=()=>{const e={};return Q.stationId||(e.stationId="Station ID is required"),Q.branchName||(e.branchName="Branch Name is required"),e},re=e=>{B(e||null),Y(e||{}),W(!0)},se=()=>{B(null),Y({}),W(!1),de()},[ie,le]=(0,n.useState)(!1),ce=(e,a)=>{"clickaway"!==a&&le(!1)},de=()=>{Y({stationId:"",stationIp:"",stationPort:"",branchName:"",branchId:""}),ne({})},[he,ue]=(0,n.useState)(!1),[me,Ze]=(0,n.useState)({}),pe=e=>{B(e||null),Ze(e),ue(!0)},[xe,be]=(0,n.useState)([]),ve=async()=>{try{const e=(await z.Z.get("".concat(O,"/branchs/branch-name"),{headers:{Authorization:"Bearer ".concat(A)}})).data,a=Object.keys(e).map((a=>({label:a,value:e[a]})));be(a)}catch(e){console.error("Error fetching branches:",e)}};return(0,H.jsxs)(i.Z,{children:[(0,H.jsx)(T.Z,{onClick:_,handleExport:"",route:"station"}),q&&(0,H.jsxs)(l.Z,{sx:{marginBottom:5},children:[(0,H.jsx)(c.Z,{title:"Add Station"}),(0,H.jsxs)(d.Z,{children:[(0,H.jsx)(h.ZP,{container:!0,spacing:2,children:(0,H.jsxs)(h.ZP,{item:!0,xs:12,sm:4,children:[(0,H.jsx)(u.Z,{name:"stationId",value:Q.stationId||"",onChange:ee,required:!0,fullWidth:!0,id:"stationId",label:"Station ID",error:!!te.stationId,helperText:te.stationId,margin:"normal",autoFocus:!0}),(0,H.jsx)(m.Z,{options:xe,getOptionLabel:e=>e.label,value:xe.find((e=>e.label===Q.branchName))||null,onChange:ae,onFocus:ve,renderInput:e=>(0,H.jsx)(u.Z,{...e,name:"branchName",label:"Branch",margin:"dense",fullWidth:!0,error:!!te.branchName,helperText:te.branchName})}),(0,H.jsx)(u.Z,{fullWidth:!0,name:"stationIp",label:"Station IP",value:Q.stationIp||"",onChange:ee,margin:"normal"}),(0,H.jsx)(u.Z,{fullWidth:!0,name:"stationPort",value:Q.stationPort||"",id:"stationPort",label:"Station Port",onChange:ee,margin:"normal"})]})}),(0,H.jsx)(Z.Z,{onClick:async()=>{const t=oe();if(0===Object.keys(t).length)try{const t={id:Date.now(),...Q},n=(await z.Z.post("".concat(O,"/stations/"),Q,{headers:{Authorization:"Bearer ".concat(A)}})).data.id;t.id=n,a([t,...e]),le(!0),de(),_()}catch(n){console.log(n)}else ne(t)},variant:"contained",color:"secondary",sx:{mt:3},children:" Add "}),(0,H.jsx)(Z.Z,{onClick:de,variant:"contained",color:"secondary",sx:{mt:3,ml:2},children:"Reset"}),(0,H.jsx)(Z.Z,{onClick:_,variant:"outlined",color:"secondary",sx:{mt:3,ml:2},children:"Cancle"})]})]}),(0,H.jsx)(p.Z,{open:ie,autoHideDuration:1e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:ce,children:(0,H.jsx)(x.Z,{onClose:ce,severity:"success",variant:"filled",sx:{width:"100%"},children:"Station Save Successfully"})}),(0,H.jsx)(b.Z,{children:(0,H.jsx)(o._$,{rows:e,columns:X,initialState:{pagination:{paginationModel:{pageSize:50}}},pageSizeOptions:[50,75,100],checkboxSelection:!0,disableSelectionOnClick:!0,autoHeight:!0,loading:V,loadingOverlay:(0,H.jsxs)("div",{className:"Data-Loader",children:[(0,H.jsx)(R.Z,{})," "]})})}),(0,H.jsxs)(v.Z,{open:D,onClose:se,children:[(0,H.jsxs)(j.Z,{children:[(0,H.jsx)(I.Z,{})," Edit Station"]}),(0,H.jsx)(y.Z,{children:(0,H.jsxs)(i.Z,{children:[(0,H.jsx)(u.Z,{name:"stationId",value:Q.stationId||"",onChange:ee,required:!0,fullWidth:!0,id:"stationId",label:"Station ID",error:!!te.stationId,helperText:te.stationId,margin:"normal",autoFocus:!0}),(0,H.jsx)(m.Z,{options:xe,getOptionLabel:e=>e.label,value:xe.find((e=>e.label===Q.branchName))||null,onChange:ae,onFocus:ve,renderInput:e=>(0,H.jsx)(u.Z,{...e,name:"branchName",label:"Branch",margin:"dense",fullWidth:!0,error:!!te.branchName,helperText:te.branchName})}),(0,H.jsx)(u.Z,{fullWidth:!0,name:"stationIp",label:"Station IP",value:Q.stationIp||"",onChange:ee,margin:"normal"}),(0,H.jsx)(u.Z,{fullWidth:!0,name:"stationPort",value:Q.stationPort||"",id:"stationPort",label:"Station Port",onChange:ee,margin:"normal"})]})}),(0,H.jsxs)(f.Z,{children:[(0,H.jsx)(Z.Z,{onClick:se,variant:"outlined",children:"Cancel"}),(0,H.jsx)(Z.Z,{onClick:async()=>{const n=oe();if(0===Object.keys(n).length)try{const n=e.map((e=>e.id===t.id?{...e,...Q}:e));await z.Z.put("".concat(O,"/stations/").concat(Q.id),Q,{headers:{Authorization:"Bearer ".concat(A)}}),a(n),le(!0),de(),se()}catch(o){console.log(o)}else ne(n)},variant:"contained",color:"secondary",children:"Update"})]})]}),(0,H.jsxs)(v.Z,{open:he,onClose:se,children:[(0,H.jsx)(j.Z,{children:" Station Details"}),(0,H.jsx)(y.Z,{sx:{minWidth:500},children:(0,H.jsx)(g.Z,{children:(0,H.jsx)(C.Z,{size:"small","aria-label":"a dense table",children:(0,H.jsx)(S.Z,{children:Object.entries(me).map((e=>{let[a,t]=e;return(0,H.jsxs)(w.Z,{children:[(0,H.jsx)(k.Z,{component:"th",scope:"row",children:(0,H.jsxs)("strong",{children:[a,":"]})}),(0,H.jsx)(k.Z,{children:t})]},a)}))})})})}),(0,H.jsx)(f.Z,{children:(0,H.jsx)(Z.Z,{onClick:()=>{B(null),Ze({}),ue(!1)},children:"Cancel"})})]}),(0,H.jsxs)(v.Z,{open:$,onClose:K,children:[(0,H.jsx)(j.Z,{children:"Confirm Delete"}),(0,H.jsx)(y.Z,{children:(0,H.jsx)(N.Z,{children:" Are you sure you want to delete this station?"})}),(0,H.jsxs)(f.Z,{children:[(0,H.jsx)(Z.Z,{onClick:K,color:"primary",children:"Cancel"}),(0,H.jsx)(Z.Z,{onClick:async t=>{try{const t=F;if(null!==t){const n=e.filter((e=>e.id!==t));await z.Z.delete("".concat(O,"/stations/").concat(t),{headers:{Authorization:"Bearer ".concat(A)}}),a(n),K()}}catch(n){console.error("Error deleting row:",n)}},variant:"contained",color:"error",children:"Delete"})]})]})]})}},155:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(1171),o=t(6417);const r=(0,n.Z)((0,o.jsx)("path",{d:"M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"}),"DriveFileRenameOutline")},3653:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(1171),o=t(6417);const r=(0,n.Z)((0,o.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}),"VisibilityOutlined")},4641:(e,a,t)=>{t.d(a,{Z:()=>f});var n=t(3366),o=t(7462),r=t(7313),s=t(4146),i=t(1921),l=t(1113),c=t(7342),d=t(7592),h=t(7430),u=t(2298);function m(e){return(0,u.Z)("MuiCardHeader",e)}const Z=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var p=t(6417);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,o.Z)({["& .".concat(Z.title)]:a.title,["& .".concat(Z.subheader)]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),f=r.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:d,className:h,component:u="div",disableTypography:Z=!1,subheader:f,subheaderTypographyProps:g,title:C,titleTypographyProps:S}=t,w=(0,n.Z)(t,x),k=(0,o.Z)({},t,{component:u,disableTypography:Z}),N=(e=>{const{classes:a}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,a)})(k);let P=C;null==P||P.type===l.Z||Z||(P=(0,p.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"h5",className:N.title,component:"span",display:"block"},S,{children:P})));let I=f;return null==I||I.type===l.Z||Z||(I=(0,p.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:I}))),(0,p.jsxs)(b,(0,o.Z)({className:(0,s.Z)(N.root,h),as:u,ref:a,ownerState:k},w,{children:[d&&(0,p.jsx)(v,{className:N.avatar,ownerState:k,children:d}),(0,p.jsxs)(y,{className:N.content,ownerState:k,children:[P,I]}),r&&(0,p.jsx)(j,{className:N.action,ownerState:k,children:r})]}))}))},3467:(e,a,t)=>{t.d(a,{Z:()=>j});var n=t(7462),o=t(3366),r=t(7313),s=t(4146),i=t(1921),l=t(6062),c=t(7342),d=t(7592),h=t(7430),u=t(2298);function m(e){return(0,u.Z)("MuiTableBody",e)}(0,h.Z)("MuiTableBody",["root"]);var Z=t(6417);const p=["className","component"],x=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,a)=>a.root})({display:"table-row-group"}),b={variant:"body"},v="tbody",j=r.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:r,component:d=v}=t,h=(0,o.Z)(t,p),u=(0,n.Z)({},t,{component:d}),j=(e=>{const{classes:a}=e;return(0,i.Z)({root:["root"]},m,a)})(u);return(0,Z.jsx)(l.Z.Provider,{value:b,children:(0,Z.jsx)(x,(0,n.Z)({className:(0,s.Z)(j.root,r),as:d,ref:a,role:d===v?null:"rowgroup",ownerState:u},h))})}))},1629:(e,a,t)=>{t.d(a,{Z:()=>x});var n=t(7462),o=t(3366),r=t(7313),s=t(4146),i=t(1921),l=t(7342),c=t(7592),d=t(7430),h=t(2298);function u(e){return(0,h.Z)("MuiTableContainer",e)}(0,d.Z)("MuiTableContainer",["root"]);var m=t(6417);const Z=["className","component"],p=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,a)=>a.root})({width:"100%",overflowX:"auto"}),x=r.forwardRef((function(e,a){const t=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:c="div"}=t,d=(0,o.Z)(t,Z),h=(0,n.Z)({},t,{component:c}),x=(e=>{const{classes:a}=e;return(0,i.Z)({root:["root"]},u,a)})(h);return(0,m.jsx)(p,(0,n.Z)({ref:a,as:c,className:(0,s.Z)(x.root,r),ownerState:h},d))}))},4076:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(7462),o=t(3366),r=t(7313),s=t(4146),i=t(1921),l=t(7551),c=t(6062),d=t(7342),h=t(7592),u=t(7430),m=t(2298);function Z(e){return(0,m.Z)("MuiTableRow",e)}const p=(0,u.Z)("MuiTableRow",["root","selected","hover","head","footer"]);var x=t(6417);const b=["className","component","hover","selected"],v=(0,h.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.head&&a.head,t.footer&&a.footer]}})((e=>{let{theme:a}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(p.hover,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(p.selected)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}}})),j="tr",y=r.forwardRef((function(e,a){const t=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:l,component:h=j,hover:u=!1,selected:m=!1}=t,p=(0,o.Z)(t,b),y=r.useContext(c.Z),f=(0,n.Z)({},t,{component:h,hover:u,selected:m,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),g=(e=>{const{classes:a,selected:t,hover:n,head:o,footer:r}=e,s={root:["root",t&&"selected",n&&"hover",o&&"head",r&&"footer"]};return(0,i.Z)(s,Z,a)})(f);return(0,x.jsx)(v,(0,n.Z)({as:h,ref:a,className:(0,s.Z)(g.root,l),role:h===j?null:"row",ownerState:f},p))}))},6835:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(3366),o=t(7462),r=t(7313),s=t(4146),i=t(1921),l=t(7416),c=t(7342),d=t(7592),h=t(7430),u=t(2298);function m(e){return(0,u.Z)("MuiTable",e)}(0,h.Z)("MuiTable",["root","stickyHeader"]);var Z=t(6417);const p=["className","component","padding","size","stickyHeader"],x=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.stickyHeader&&a.stickyHeader]}})((e=>{let{theme:a,ownerState:t}=e;return(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},a.typography.body2,{padding:a.spacing(2),color:(a.vars||a).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})})),b="table",v=r.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTable"}),{className:d,component:h=b,padding:u="normal",size:v="medium",stickyHeader:j=!1}=t,y=(0,n.Z)(t,p),f=(0,o.Z)({},t,{component:h,padding:u,size:v,stickyHeader:j}),g=(e=>{const{classes:a,stickyHeader:t}=e,n={root:["root",t&&"stickyHeader"]};return(0,i.Z)(n,m,a)})(f),C=r.useMemo((()=>({padding:u,size:v,stickyHeader:j})),[u,v,j]);return(0,Z.jsx)(l.Z.Provider,{value:C,children:(0,Z.jsx)(x,(0,o.Z)({as:h,role:h===b?null:"table",ref:a,className:(0,s.Z)(g.root,d),ownerState:f},y))})}))}}]);