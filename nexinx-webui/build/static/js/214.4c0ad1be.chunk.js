"use strict";(self.webpackChunknexinx_webui=self.webpackChunknexinx_webui||[]).push([[214],{818:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(7313),o=t(1806),n=t(9019),s=t(1113),i=t(501),l=t(8310),c=t(7216),d=t(9840),h=t(4748),m=t(3213),u=t(9536),Z=t(3245),p=t(2040),x=t(8377),v=t(8465),j=t(1970),y=t(6417);const k=e=>{let{onClick:a,handleExport:t,handleImport:k,route:b}=e;const f=(0,r.useRef)(),g=t&&t.length>0;return(0,y.jsx)(o.Z,{sx:{mb:3},children:(0,y.jsxs)(n.ZP,{container:!0,spacing:2,children:[(0,y.jsx)(n.ZP,{item:!0,xs:12,sm:4,children:(0,y.jsxs)(s.Z,{className:"topTitle",color:"secondary.dark",sx:{textTransform:"capitalize"},children:[b," Managment"]})}),(0,y.jsx)(n.ZP,{item:!0,xs:12,sm:8,children:(0,y.jsx)(i.Z,{elevation:0,sx:{display:"flex",width:"fit-content",marginLeft:"auto"},children:(0,y.jsxs)(l.Z,{style:{display:"flex",flexDirection:"row",padding:0},children:[(0,y.jsx)(c.ZP,{disablePadding:!0,children:(0,y.jsxs)(d.Z,{onClick:a,disabled:"epaper"===b,children:[(0,y.jsx)(h.Z,{sx:{minWidth:0},children:(0,y.jsx)(p.Z,{})}),(0,y.jsx)(m.Z,{primary:"Add"})]})}),(0,y.jsx)(u.Z,{orientation:"vertical",flexItem:!0}),(0,y.jsx)(c.ZP,{disablePadding:!0,children:(0,y.jsxs)(d.Z,{onClick:()=>{f.current&&f.current.link.click()},disabled:"node"!==b||!g,children:[(0,y.jsx)(h.Z,{sx:{minWidth:0},children:(0,y.jsx)(x.Z,{})}),(0,y.jsx)(m.Z,{primary:"Download"}),(0,y.jsx)(Z.CSVLink,{data:t,filename:"selected_nodes.csv",ref:f})]})}),(0,y.jsx)(u.Z,{orientation:"vertical",flexItem:!0}),(0,y.jsx)(c.ZP,{disablePadding:!0,children:(0,y.jsxs)(d.Z,{onClick:k,disabled:"node"!==b,children:[(0,y.jsx)(h.Z,{sx:{minWidth:0},children:(0,y.jsx)(v.Z,{})}),(0,y.jsx)(m.Z,{primary:"Upload"})]})}),(0,y.jsx)(u.Z,{orientation:"vertical",flexItem:!0}),(0,y.jsx)(c.ZP,{disablePadding:!0,children:(0,y.jsxs)(d.Z,{onClick:a,disabled:!0,children:[(0,y.jsx)(h.Z,{sx:{minWidth:0},children:(0,y.jsx)(j.Z,{})}),(0,y.jsx)(m.Z,{primary:"Delete"})]})})]})})})]})})}},5214:(e,a,t)=>{t.r(a),t.d(a,{default:()=>O});var r=t(7313),o=t(2277),n=t(2832),s=t(7131),i=t(1806),l=t(3428),c=t(4641),d=t(3405),h=t(9019),m=t(6783),u=t(1095),Z=t(501),p=t(6373),x=t(9881),v=t(6149),j=t(3604),y=t(6467),k=t(4117),b=t(1629),f=t(6835),g=t(3467),C=t(4076),w=t(7478),S=t(1113),N=t(3653),R=t(155),M=t(4481),T=t(818),P=t(5281),z=t(5662),A=t(6417);const H="http://localhost:8080/api/v1",D=sessionStorage.getItem("jwt"),O=()=>{const[e,a]=(0,r.useState)([]),[t,O]=(0,r.useState)(null),[W,B]=(0,r.useState)(!1),[I,L]=(0,r.useState)(null),[E,q]=(0,r.useState)(!1),F=()=>{q(!E)},[_,V]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(async()=>{try{return(await z.Z.get("".concat(H,"/racks"),{headers:{Authorization:"Bearer ".concat(D)}})).data.reverse()}catch(e){console.error(e),V(!1)}})().then((e=>{e&&a(e),V(!1)}))}),[]);const G=[{field:"rackName",headerName:"Rack Name",flex:1},{field:"rackDetails",headerName:"Rack Details",flex:1},{field:"epaperCount",headerName:"Total Linked Epaper",flex:1},{field:"gatewayCount",headerName:"Total Linked Gateway",flex:1},{field:"actions",headerName:"Actions",width:300,renderCell:e=>(0,A.jsxs)(n.Z,{direction:"row",alignItems:"center",spacing:3,children:[(0,A.jsxs)(s.Z,{onClick:()=>ce(e.row),color:"secondary",size:"medium","aria-label":"view",children:[" ",(0,A.jsx)(N.Z,{fontSize:"inherit"})]}),(0,A.jsx)(s.Z,{onClick:()=>Y(e.row),color:"secondary",size:"medium","aria-label":"view",children:(0,A.jsx)(R.Z,{fontSize:"inherit"})}),(0,A.jsx)(s.Z,{onClick:()=>re(e.id),color:"secondary",size:"medium","aria-label":"view",children:(0,A.jsx)(M.Z,{fontSize:"inherit"})})]})}],[U,X]=(0,r.useState)({}),$=e=>{const{name:a,value:t}=e.target;X({...U,[a]:t}),K((e=>({...e,[a]:""})))},[J,K]=(0,r.useState)({}),Q=()=>{const e={};return U.rackName||(e.rackName="Rack Name is required"),e},Y=e=>{O(e||null),X(e||{}),B(!0)},ee=()=>{O(null),X({}),B(!1)},[ae,te]=(0,r.useState)(!1),re=e=>{L(e),te(!0)},oe=()=>{L(null),te(!1)},[ne,se]=(0,r.useState)(!1),[ie,le]=(0,r.useState)({}),ce=e=>{O(e||null),le(e),se(!0)},[de,he]=(0,r.useState)(!1),me=(e,a)=>{"clickaway"!==a&&he(!1)};return(0,A.jsxs)(i.Z,{children:[(0,A.jsx)(T.Z,{onClick:F,handleExport:"",route:"rack"}),E&&(0,A.jsxs)(l.Z,{sx:{marginBottom:5},children:[(0,A.jsx)(c.Z,{title:"Add Rack"}),(0,A.jsxs)(d.Z,{children:[(0,A.jsx)(h.ZP,{container:!0,spacing:2,children:(0,A.jsxs)(h.ZP,{item:!0,xs:12,sm:4,children:[(0,A.jsx)(m.Z,{name:"rackName",value:U.rackName||"",onChange:$,required:!0,fullWidth:!0,id:"rackName",label:"Rack Name",error:!!J.rackName,helperText:J.rackName,autoFocus:!0}),(0,A.jsx)(m.Z,{fullWidth:!0,name:"rackDetails",label:"Rack Details",value:U.rackDetails||"",onChange:$,autoComplete:"rack-details",margin:"normal"}),(0,A.jsx)(m.Z,{fullWidth:!0,name:"rackArea",value:U.rackArea||"",id:"rackArea",label:"Rack Area",onChange:$,autoComplete:"rack-area",margin:"dense"})]})}),(0,A.jsx)(u.Z,{onClick:async()=>{const t=Q();if(0===Object.keys(t).length)try{const t={id:Date.now(),...U},r=(await z.Z.post("".concat(H,"/racks/"),U,{headers:{Authorization:"Bearer ".concat(D)}})).data.id;t.id=r,a([t,...e]),he(!0),ee()}catch(r){console.log(r)}else K(t)},variant:"contained",color:"secondary",sx:{mt:3},children:" Add"}),(0,A.jsx)(u.Z,{onClick:()=>{X({rackName:"",rackDetails:"",rackArea:""}),K({})},variant:"contained",color:"secondary",sx:{mt:3,ml:2},children:"Reset"}),(0,A.jsx)(u.Z,{onClick:F,variant:"outlined",color:"secondary",sx:{mt:3,ml:2},children:"Cancle"})]})]}),(0,A.jsx)(Z.Z,{children:(0,A.jsx)(o._$,{rows:e,columns:G,initialState:{pagination:{paginationModel:{pageSize:50}}},pageSizeOptions:[50,75,100],checkboxSelection:!0,disableSelectionOnClick:!0,autoHeight:!0,loading:_,loadingOverlay:(0,A.jsxs)("div",{className:"Data-Loader",children:[(0,A.jsx)(P.Z,{})," "]})})}),(0,A.jsx)(p.Z,{open:de,autoHideDuration:1e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},onClose:me,children:(0,A.jsx)(x.Z,{onClose:me,severity:"success",variant:"filled",sx:{width:"100%"},children:"Rack Save Successfully"})}),(0,A.jsxs)(v.Z,{open:W,onClose:ee,children:[(0,A.jsxs)(j.Z,{children:[(0,A.jsx)(R.Z,{})," Edit Rack"]}),(0,A.jsxs)(y.Z,{children:[(0,A.jsx)(m.Z,{name:"rackName",label:"Rack Name",value:U.rackName||"",onChange:$,fullWidth:!0,margin:"normal"}),(0,A.jsx)(m.Z,{name:"rackDetails",label:"Rack Details",value:U.rackDetails||"",onChange:$,fullWidth:!0,margin:"normal"}),(0,A.jsx)(m.Z,{name:"rackArea",label:"Rack Area",value:U.rackArea||"",onChange:$,fullWidth:!0,margin:"normal"})]}),(0,A.jsxs)(k.Z,{children:[(0,A.jsx)(u.Z,{onClick:ee,children:"Cancel"}),(0,A.jsx)(u.Z,{onClick:async()=>{const r=Q();if(0===Object.keys(r).length)try{const r=e.map((e=>e.id===t.id?{...e,...U}:e));await z.Z.put("".concat(H,"/racks/").concat(U.id),U,{headers:{Authorization:"Bearer ".concat(D)}}),a(r),he(!0),ee()}catch(o){console.log(o)}else K(r)},variant:"contained",color:"error",children:"Save"})]})]}),(0,A.jsxs)(v.Z,{open:ne,onClose:ee,children:[(0,A.jsx)(j.Z,{children:" Rack Details"}),(0,A.jsx)(y.Z,{sx:{minWidth:500},children:(0,A.jsx)(b.Z,{children:(0,A.jsx)(f.Z,{size:"small","aria-label":"a dense table",children:(0,A.jsx)(g.Z,{children:Object.entries(ie).map((e=>{let[a,t]=e;return(0,A.jsxs)(C.Z,{children:[(0,A.jsx)(w.Z,{component:"th",scope:"row",children:(0,A.jsxs)("strong",{children:[a,":"]})}),(0,A.jsx)(w.Z,{children:t})]},a)}))})})})}),(0,A.jsx)(k.Z,{children:(0,A.jsx)(u.Z,{onClick:()=>{O(null),le({}),se(!1)},children:"Cancel"})})]}),(0,A.jsxs)(v.Z,{open:ae,onClose:oe,children:[(0,A.jsx)(j.Z,{children:"Confirm Delete"}),(0,A.jsx)(y.Z,{children:(0,A.jsx)(S.Z,{children:" Are you sure you want to delete this rack ?"})}),(0,A.jsxs)(k.Z,{children:[(0,A.jsx)(u.Z,{onClick:oe,color:"primary",children:"Cancel"}),(0,A.jsx)(u.Z,{onClick:async t=>{try{const t=I;if(null!==t){const r=e.filter((e=>e.id!==t));await z.Z.delete("".concat(H,"/racks/").concat(t),{headers:{Authorization:"Bearer ".concat(D)}}),a(r),oe()}}catch(r){console.error("Error deleting row:",r)}},variant:"contained",color:"error",children:"Delete"})]})]})]})}},155:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(1171),o=t(6417);const n=(0,r.Z)((0,o.jsx)("path",{d:"M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"}),"DriveFileRenameOutline")},3653:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(1171),o=t(6417);const n=(0,r.Z)((0,o.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}),"VisibilityOutlined")},4641:(e,a,t)=>{t.d(a,{Z:()=>b});var r=t(3366),o=t(7462),n=t(7313),s=t(4146),i=t(1921),l=t(1113),c=t(7342),d=t(7592),h=t(7430),m=t(2298);function u(e){return(0,m.Z)("MuiCardHeader",e)}const Z=(0,h.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var p=t(6417);const x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,o.Z)({["& .".concat(Z.title)]:a.title,["& .".concat(Z.subheader)]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),k=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),b=n.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:n,avatar:d,className:h,component:m="div",disableTypography:Z=!1,subheader:b,subheaderTypographyProps:f,title:g,titleTypographyProps:C}=t,w=(0,r.Z)(t,x),S=(0,o.Z)({},t,{component:m,disableTypography:Z}),N=(e=>{const{classes:a}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},u,a)})(S);let R=g;null==R||R.type===l.Z||Z||(R=(0,p.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"h5",className:N.title,component:"span",display:"block"},C,{children:R})));let M=b;return null==M||M.type===l.Z||Z||(M=(0,p.jsx)(l.Z,(0,o.Z)({variant:d?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:M}))),(0,p.jsxs)(v,(0,o.Z)({className:(0,s.Z)(N.root,h),as:m,ref:a,ownerState:S},w,{children:[d&&(0,p.jsx)(j,{className:N.avatar,ownerState:S,children:d}),(0,p.jsxs)(k,{className:N.content,ownerState:S,children:[R,M]}),n&&(0,p.jsx)(y,{className:N.action,ownerState:S,children:n})]}))}))},3467:(e,a,t)=>{t.d(a,{Z:()=>y});var r=t(7462),o=t(3366),n=t(7313),s=t(4146),i=t(1921),l=t(6062),c=t(7342),d=t(7592),h=t(7430),m=t(2298);function u(e){return(0,m.Z)("MuiTableBody",e)}(0,h.Z)("MuiTableBody",["root"]);var Z=t(6417);const p=["className","component"],x=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,a)=>a.root})({display:"table-row-group"}),v={variant:"body"},j="tbody",y=n.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:n,component:d=j}=t,h=(0,o.Z)(t,p),m=(0,r.Z)({},t,{component:d}),y=(e=>{const{classes:a}=e;return(0,i.Z)({root:["root"]},u,a)})(m);return(0,Z.jsx)(l.Z.Provider,{value:v,children:(0,Z.jsx)(x,(0,r.Z)({className:(0,s.Z)(y.root,n),as:d,ref:a,role:d===j?null:"rowgroup",ownerState:m},h))})}))},1629:(e,a,t)=>{t.d(a,{Z:()=>x});var r=t(7462),o=t(3366),n=t(7313),s=t(4146),i=t(1921),l=t(7342),c=t(7592),d=t(7430),h=t(2298);function m(e){return(0,h.Z)("MuiTableContainer",e)}(0,d.Z)("MuiTableContainer",["root"]);var u=t(6417);const Z=["className","component"],p=(0,c.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,a)=>a.root})({width:"100%",overflowX:"auto"}),x=n.forwardRef((function(e,a){const t=(0,l.Z)({props:e,name:"MuiTableContainer"}),{className:n,component:c="div"}=t,d=(0,o.Z)(t,Z),h=(0,r.Z)({},t,{component:c}),x=(e=>{const{classes:a}=e;return(0,i.Z)({root:["root"]},m,a)})(h);return(0,u.jsx)(p,(0,r.Z)({ref:a,as:c,className:(0,s.Z)(x.root,n),ownerState:h},d))}))},4076:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(7462),o=t(3366),n=t(7313),s=t(4146),i=t(1921),l=t(7551),c=t(6062),d=t(7342),h=t(7592),m=t(7430),u=t(2298);function Z(e){return(0,u.Z)("MuiTableRow",e)}const p=(0,m.Z)("MuiTableRow",["root","selected","hover","head","footer"]);var x=t(6417);const v=["className","component","hover","selected"],j=(0,h.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.head&&a.head,t.footer&&a.footer]}})((e=>{let{theme:a}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(p.hover,":hover")]:{backgroundColor:(a.vars||a).palette.action.hover},["&.".concat(p.selected)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}}})),y="tr",k=n.forwardRef((function(e,a){const t=(0,d.Z)({props:e,name:"MuiTableRow"}),{className:l,component:h=y,hover:m=!1,selected:u=!1}=t,p=(0,o.Z)(t,v),k=n.useContext(c.Z),b=(0,r.Z)({},t,{component:h,hover:m,selected:u,head:k&&"head"===k.variant,footer:k&&"footer"===k.variant}),f=(e=>{const{classes:a,selected:t,hover:r,head:o,footer:n}=e,s={root:["root",t&&"selected",r&&"hover",o&&"head",n&&"footer"]};return(0,i.Z)(s,Z,a)})(b);return(0,x.jsx)(j,(0,r.Z)({as:h,ref:a,className:(0,s.Z)(f.root,l),role:h===y?null:"row",ownerState:b},p))}))},6835:(e,a,t)=>{t.d(a,{Z:()=>j});var r=t(3366),o=t(7462),n=t(7313),s=t(4146),i=t(1921),l=t(7416),c=t(7342),d=t(7592),h=t(7430),m=t(2298);function u(e){return(0,m.Z)("MuiTable",e)}(0,h.Z)("MuiTable",["root","stickyHeader"]);var Z=t(6417);const p=["className","component","padding","size","stickyHeader"],x=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.stickyHeader&&a.stickyHeader]}})((e=>{let{theme:a,ownerState:t}=e;return(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},a.typography.body2,{padding:a.spacing(2),color:(a.vars||a).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})})),v="table",j=n.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiTable"}),{className:d,component:h=v,padding:m="normal",size:j="medium",stickyHeader:y=!1}=t,k=(0,r.Z)(t,p),b=(0,o.Z)({},t,{component:h,padding:m,size:j,stickyHeader:y}),f=(e=>{const{classes:a,stickyHeader:t}=e,r={root:["root",t&&"stickyHeader"]};return(0,i.Z)(r,u,a)})(b),g=n.useMemo((()=>({padding:m,size:j,stickyHeader:y})),[m,j,y]);return(0,Z.jsx)(l.Z.Provider,{value:g,children:(0,Z.jsx)(x,(0,o.Z)({as:h,role:h===v?null:"table",ref:a,className:(0,s.Z)(f.root,d),ownerState:b},k))})}))}}]);