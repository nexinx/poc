"use strict";(self.webpackChunknexinx_webui=self.webpackChunknexinx_webui||[]).push([[442],{818:(e,a,n)=>{n.d(a,{Z:()=>y});var r=n(7313),t=n(1806),o=n(9019),i=n(1113),l=n(501),s=n(8310),c=n(7216),d=n(9840),h=n(4748),m=n(3213),u=n(9536),Z=n(3245),x=n(2040),p=n(8377),b=n(8465),v=n(1970),j=n(6417);const y=e=>{let{onClick:a,handleExport:n,handleImport:y,route:f}=e;const g=(0,r.useRef)(),C=n&&n.length>0;return(0,j.jsx)(t.Z,{sx:{mb:3},children:(0,j.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(o.ZP,{item:!0,xs:12,sm:4,children:(0,j.jsxs)(i.Z,{className:"topTitle",color:"secondary.dark",sx:{textTransform:"capitalize"},children:[f," Managment"]})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,sm:8,children:(0,j.jsx)(l.Z,{elevation:0,sx:{display:"flex",width:"fit-content",marginLeft:"auto"},children:(0,j.jsxs)(s.Z,{style:{display:"flex",flexDirection:"row",padding:0},children:[(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:a,disabled:"epaper"===f,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(x.Z,{})}),(0,j.jsx)(m.Z,{primary:"Add"})]})}),(0,j.jsx)(u.Z,{orientation:"vertical",flexItem:!0}),(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:()=>{g.current&&g.current.link.click()},disabled:"node"!==f||!C,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(p.Z,{})}),(0,j.jsx)(m.Z,{primary:"Download"}),(0,j.jsx)(Z.CSVLink,{data:n,filename:"selected_nodes.csv",ref:g})]})}),(0,j.jsx)(u.Z,{orientation:"vertical",flexItem:!0}),(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:y,disabled:"node"!==f,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(b.Z,{})}),(0,j.jsx)(m.Z,{primary:"Upload"})]})}),(0,j.jsx)(u.Z,{orientation:"vertical",flexItem:!0}),(0,j.jsx)(c.ZP,{disablePadding:!0,children:(0,j.jsxs)(d.Z,{onClick:a,disabled:!0,children:[(0,j.jsx)(h.Z,{sx:{minWidth:0},children:(0,j.jsx)(v.Z,{})}),(0,j.jsx)(m.Z,{primary:"Delete"})]})})]})})})]})})}},4442:(e,a,n)=>{n.r(a),n.d(a,{default:()=>A});var r=n(7313),t=n(2277),o=n(2832),i=n(7131),l=n(1806),s=n(3428),c=n(4641),d=n(3405),h=n(9019),m=n(6783),u=n(1095),Z=n(6373),x=n(9881),p=n(501),b=n(6149),v=n(3604),j=n(6467),y=n(4117),f=n(1629),g=n(6835),C=n(3467),w=n(4076),N=n(7478),k=n(1113),S=n(3653),P=n(155),M=n(4481),T=n(818),B=n(5281),R=n(5662),z=n(6417);const H="http://localhost:8080/api/v1",E=sessionStorage.getItem("jwt"),A=()=>{const[e,a]=(0,r.useState)([]),[n,A]=(0,r.useState)(null),[O,W]=(0,r.useState)(!1),[D,I]=(0,r.useState)(null),[q,F]=(0,r.useState)(!1),L=()=>{F(!q)},[_,V]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(async()=>{try{return(await R.Z.get("".concat(H,"/branchs"),{headers:{Authorization:"Bearer ".concat(E)}})).data.reverse()}catch(e){console.error(e),V(!1)}})().then((e=>{e&&a(e),V(!1)}))}),[]);const U=[{field:"branchName",headerName:"Branch Name",flex:1},{field:"branchCity",headerName:"Branch City",flex:1},{field:"branchEmail",headerName:"Branch Email",flex:1},{field:"branchPhone",headerName:"Branch Telphone",flex:1},{field:"epaperCount",headerName:"All ePaper",flex:1},{field:"stationCount",headerName:"All Station",flex:1},{field:"actions",headerName:"Actions",width:300,renderCell:e=>(0,z.jsxs)(o.Z,{direction:"row",alignItems:"center",spacing:3,children:[(0,z.jsxs)(i.Z,{onClick:()=>ue(e.row),color:"secondary",size:"medium","aria-label":"view",children:[" ",(0,z.jsx)(S.Z,{fontSize:"inherit"})]}),(0,z.jsx)(i.Z,{onClick:()=>re(e.row),color:"secondary",size:"medium","aria-label":"view",children:(0,z.jsx)(P.Z,{fontSize:"inherit"})}),(0,z.jsx)(i.Z,{onClick:()=>G(e.id),color:"secondary",size:"medium","aria-label":"view",children:(0,z.jsx)(M.Z,{fontSize:"inherit"})})]})}],[X,$]=(0,r.useState)(!1),G=e=>{I(e),$(!0)},J=()=>{I(null),$(!1)},[K,Q]=(0,r.useState)({}),Y=e=>{const{name:a,value:n}=e.target;Q({...K,[a]:n}),ae((e=>({...e,[a]:""})))},[ee,ae]=(0,r.useState)({}),ne=()=>{const e={};return K.branchName||(e.branchName="Branch Name is required"),e},re=e=>{A(e||null),Q(e||{}),W(!0)},te=()=>{A(null),Q({}),W(!1)},[oe,ie]=(0,r.useState)(!1),le=(e,a)=>{"clickaway"!==a&&ie(!1)},se=()=>{Q({branchName:"",branchCity:"",branchEmail:"",branchPhone:""}),ae({})},[ce,de]=(0,r.useState)(!1),[he,me]=(0,r.useState)({}),ue=e=>{A(e||null),me(e),de(!0)};return(0,z.jsxs)(l.Z,{children:[(0,z.jsx)(T.Z,{onClick:L,handleExport:"",route:"branch"}),q&&(0,z.jsxs)(s.Z,{sx:{marginBottom:5},children:[(0,z.jsx)(c.Z,{title:"Add Branch"}),(0,z.jsxs)(d.Z,{children:[(0,z.jsx)(h.ZP,{container:!0,spacing:2,children:(0,z.jsxs)(h.ZP,{item:!0,xs:12,sm:4,children:[(0,z.jsx)(m.Z,{name:"branchName",value:K.branchName||"",onChange:Y,required:!0,fullWidth:!0,id:"branchName",label:"Branch Name",error:!!ee.branchName,helperText:ee.branchName,autoFocus:!0}),(0,z.jsx)(m.Z,{fullWidth:!0,name:"branchCity",label:"Branch City",value:K.branchCity||"",onChange:Y,margin:"normal"}),(0,z.jsx)(m.Z,{fullWidth:!0,name:"branchEmail",value:K.branchEmail||"",id:"branchEmail",label:"Branch Email",onChange:Y,margin:"normal"}),(0,z.jsx)(m.Z,{fullWidth:!0,name:"branchPhone",value:K.branchPhone||"",id:"branchPhone",label:"Branch Phone",onChange:Y,margin:"normal"})]})}),(0,z.jsx)(u.Z,{onClick:async()=>{const n=ne();if(0===Object.keys(n).length)try{const n={id:Date.now(),...K},r=(await R.Z.post("".concat(H,"/branchs/"),K,{headers:{Authorization:"Bearer ".concat(E)}})).data.id;n.id=r,a([n,...e]),ie(!0),se()}catch(r){console.log(r)}else ae(n)},variant:"contained",color:"secondary",sx:{mt:3},children:" Add "}),(0,z.jsx)(u.Z,{onClick:se,variant:"contained",color:"secondary",sx:{mt:3,ml:2},children:"Reset"}),(0,z.jsx)(u.Z,{onClick:L,variant:"outlined",color:"secondary",sx:{mt:3,ml:2},children:"Cancle"})]})]}),(0,z.jsx)(Z.Z,{open:oe,autoHideDuration:1e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:le,children:(0,z.jsx)(x.Z,{onClose:le,severity:"success",variant:"filled",sx:{width:"100%"},children:"Branch Save Successfully"})}),(0,z.jsx)(p.Z,{children:(0,z.jsx)(t._$,{rows:e,columns:U,initialState:{pagination:{paginationModel:{pageSize:50}}},pageSizeOptions:[50,75,100],checkboxSelection:!0,disableSelectionOnClick:!0,autoHeight:!0,loading:_,loadingOverlay:(0,z.jsxs)("div",{className:"Data-Loader",children:[(0,z.jsx)(B.Z,{})," "]})})}),(0,z.jsxs)(b.Z,{open:O,onClose:te,children:[(0,z.jsxs)(v.Z,{children:[(0,z.jsx)(P.Z,{})," Edit Branch"]}),(0,z.jsx)(j.Z,{children:(0,z.jsxs)(l.Z,{children:[(0,z.jsx)(m.Z,{name:"branchName",value:K.branchName||"",onChange:Y,required:!0,fullWidth:!0,id:"branchName",label:"Branch Name",error:!!ee.branchName,helperText:ee.branchName,margin:"normal",autoFocus:!0}),(0,z.jsx)(m.Z,{fullWidth:!0,name:"branchCity",label:"Branch City",value:K.branchCity||"",onChange:Y,margin:"normal"}),(0,z.jsx)(m.Z,{fullWidth:!0,name:"branchEmail",value:K.branchEmail||"",id:"branchEmail",label:"Branch Email",onChange:Y,margin:"normal"}),(0,z.jsx)(m.Z,{fullWidth:!0,name:"branchPhone",value:K.branchPhone||"",id:"branchPhone",label:"Branch Phone",onChange:Y,margin:"normal"})]})}),(0,z.jsxs)(y.Z,{children:[(0,z.jsx)(u.Z,{onClick:te,variant:"outlined",children:"Cancel"}),(0,z.jsx)(u.Z,{onClick:async()=>{const r=ne();if(0===Object.keys(r).length)try{const r=e.map((e=>e.id===n.id?{...e,...K}:e));await R.Z.put("".concat(H,"/branchs/").concat(K.id),K,{headers:{Authorization:"Bearer ".concat(E)}}),a(r),ie(!0),te()}catch(t){console.log(t)}else ae(r)},variant:"contained",color:"secondary",children:"Update"})]})]}),(0,z.jsxs)(b.Z,{open:ce,onClose:te,children:[(0,z.jsx)(v.Z,{children:" Branch Details"}),(0,z.jsx)(j.Z,{sx:{minWidth:500},children:(0,z.jsx)(f.Z,{children:(0,z.jsx)(g.Z,{size:"small","aria-label":"a dense table",children:(0,z.jsx)(C.Z,{children:Object.entries(he).map((e=>{let[a,n]=e;return(0,z.jsxs)(w.Z,{children:[(0,z.jsx)(N.Z,{component:"th",scope:"row",children:(0,z.jsxs)("strong",{children:[a,":"]})}),(0,z.jsx)(N.Z,{children:n})]},a)}))})})})}),(0,z.jsx)(y.Z,{children:(0,z.jsx)(u.Z,{onClick:()=>{A(null),me({}),de(!1)},children:"Cancel"})})]}),(0,z.jsxs)(b.Z,{open:X,onClose:J,children:[(0,z.jsx)(v.Z,{children:"Confirm Delete"}),(0,z.jsx)(j.Z,{children:(0,z.jsx)(k.Z,{children:" Are you sure you want to delete this branch ?"})}),(0,z.jsxs)(y.Z,{children:[(0,z.jsx)(u.Z,{onClick:J,color:"primary",children:"Cancel"}),(0,z.jsx)(u.Z,{onClick:async n=>{try{const n=D;if(null!==n){const r=e.filter((e=>e.id!==n));await R.Z.delete("".concat(H,"/branchs/").concat(n),{headers:{Authorization:"Bearer ".concat(E)}}),a(r),J()}}catch(r){console.error("Error deleting row:",r)}},variant:"contained",color:"error",children:"Delete"})]})]})]})}},155:(e,a,n)=>{n.d(a,{Z:()=>o});var r=n(1171),t=n(6417);const o=(0,r.Z)((0,t.jsx)("path",{d:"M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"}),"DriveFileRenameOutline")},3653:(e,a,n)=>{n.d(a,{Z:()=>o});var r=n(1171),t=n(6417);const o=(0,r.Z)((0,t.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}),"VisibilityOutlined")},4641:(e,a,n)=>{n.d(a,{Z:()=>f});var r=n(3366),t=n(7462),o=n(7313),i=n(4146),l=n(1921),s=n(1113),c=n(7342),d=n(7592),h=n(7430),m=n(2298);function u(e){return(0,m.Z)("MuiCardHeader",e)}const Z=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var x=n(6417);const p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],b=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,t.Z)({["& .".concat(Z.title)]:a.title,["& .".concat(Z.subheader)]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),f=o.forwardRef((function(e,a){const n=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:o,avatar:d,className:h,component:m="div",disableTypography:Z=!1,subheader:f,subheaderTypographyProps:g,title:C,titleTypographyProps:w}=n,N=(0,r.Z)(n,p),k=(0,t.Z)({},n,{component:m,disableTypography:Z}),S=(e=>{const{classes:a}=e;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,a)})(k);let P=C;null==P||P.type===s.Z||Z||(P=(0,x.jsx)(s.Z,(0,t.Z)({variant:d?"body2":"h5",className:S.title,component:"span",display:"block"},w,{children:P})));let M=f;return null==M||M.type===s.Z||Z||(M=(0,x.jsx)(s.Z,(0,t.Z)({variant:d?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:M}))),(0,x.jsxs)(b,(0,t.Z)({className:(0,i.Z)(S.root,h),as:m,ref:a,ownerState:k},N,{children:[d&&(0,x.jsx)(v,{className:S.avatar,ownerState:k,children:d}),(0,x.jsxs)(y,{className:S.content,ownerState:k,children:[P,M]}),o&&(0,x.jsx)(j,{className:S.action,ownerState:k,children:o})]}))}))},3467:(e,a,n)=>{n.d(a,{Z:()=>j});var r=n(7462),t=n(3366),o=n(7313),i=n(4146),l=n(1921),s=n(6062),c=n(7342),d=n(7592),h=n(7430),m=n(2298);function u(e){return(0,m.Z)("MuiTableBody",e)}(0,h.Z)("MuiTableBody",["root"]);var Z=n(6417);const x=["className","component"],p=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,a)=>a.root})({display:"table-row-group"}),b={variant:"body"},v="tbody",j=o.forwardRef((function(e,a){const n=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:o,component:d=v}=n,h=(0,t.Z)(n,x),m=(0,r.Z)({},n,{component:d}),j=(e=>{const{classes:a}=e;return(0,l.Z)({root:["root"]},u,a)})(m);return(0,Z.jsx)(s.Z.Provider,{value:b,children:(0,Z.jsx)(p,(0,r.Z)({className:(0,i.Z)(j.root,o),as:d,ref:a,role:d===v?null:"rowgroup",ownerState:m},h))})}))},1629:(e,a,n)=>{n.d(a,{Z:()=>p});var r=n(7462),t=n(3366),o=n(7313),i=n(4146),l=n(1921),s=n(7342),c=n(7592),d=n(7430),h=n(2298);function m(e){return(0,h.Z)("MuiTableContainer",e)}(0,d.Z)("MuiTableContainer",["root"]);var u=n(6417);const Z=["className","component"],x=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,a)=>a.root})({width:"100%",overflowX:"auto"}),p=o.forwardRef((function(e,a){const n=(0,s.Z)({props:e,name:"MuiTableContainer"}),{className:o,component:c="div"}=n,d=(0,t.Z)(n,Z),h=(0,r.Z)({},n,{component:c}),p=(e=>{const{classes:a}=e;return(0,l.Z)({root:["root"]},m,a)})(h);return(0,u.jsx)(x,(0,r.Z)({ref:a,as:c,className:(0,i.Z)(p.root,o),ownerState:h},d))}))},4076:(e,a,n)=>{n.d(a,{Z:()=>y});var r=n(7462),t=n(3366),o=n(7313),i=n(4146),l=n(1921),s=n(7551),c=n(6062),d=n(7342),h=n(7592),m=n(7430),u=n(2298);function Z(e){return(0,u.Z)("MuiTableRow",e)}const x=(0,m.Z)("MuiTableRow",["root","selected","hover","head","footer"]);var p=n(6417);const b=["className","component","hover","selected"],v=(0,h.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,n.head&&a.head,n.footer&&a.footer]}})((e=>{let{theme:a}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(x.hover,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(x.selected)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}}})),j="tr",y=o.forwardRef((function(e,a){const n=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:s,component:h=j,hover:m=!1,selected:u=!1}=n,x=(0,t.Z)(n,b),y=o.useContext(c.Z),f=(0,r.Z)({},n,{component:h,hover:m,selected:u,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),g=(e=>{const{classes:a,selected:n,hover:r,head:t,footer:o}=e,i={root:["root",n&&"selected",r&&"hover",t&&"head",o&&"footer"]};return(0,l.Z)(i,Z,a)})(f);return(0,p.jsx)(v,(0,r.Z)({as:h,ref:a,className:(0,i.Z)(g.root,s),role:h===j?null:"row",ownerState:f},x))}))},6835:(e,a,n)=>{n.d(a,{Z:()=>v});var r=n(3366),t=n(7462),o=n(7313),i=n(4146),l=n(1921),s=n(7416),c=n(7342),d=n(7592),h=n(7430),m=n(2298);function u(e){return(0,m.Z)("MuiTable",e)}(0,h.Z)("MuiTable",["root","stickyHeader"]);var Z=n(6417);const x=["className","component","padding","size","stickyHeader"],p=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,n.stickyHeader&&a.stickyHeader]}})((e=>{let{theme:a,ownerState:n}=e;return(0,t.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,t.Z)({},a.typography.body2,{padding:a.spacing(2),color:(a.vars||a).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},n.stickyHeader&&{borderCollapse:"separate"})})),b="table",v=o.forwardRef((function(e,a){const n=(0,c.Z)({props:e,name:"MuiTable"}),{className:d,component:h=b,padding:m="normal",size:v="medium",stickyHeader:j=!1}=n,y=(0,r.Z)(n,x),f=(0,t.Z)({},n,{component:h,padding:m,size:v,stickyHeader:j}),g=(e=>{const{classes:a,stickyHeader:n}=e,r={root:["root",n&&"stickyHeader"]};return(0,l.Z)(r,u,a)})(f),C=o.useMemo((()=>({padding:m,size:v,stickyHeader:j})),[m,v,j]);return(0,Z.jsx)(s.Z.Provider,{value:C,children:(0,Z.jsx)(p,(0,t.Z)({as:h,role:h===b?null:"table",ref:a,className:(0,i.Z)(g.root,d),ownerState:f},y))})}))}}]);