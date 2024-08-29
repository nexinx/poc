"use strict";(self.webpackChunknexinx_webui=self.webpackChunknexinx_webui||[]).push([[185],{818:(e,a,n)=>{n.d(a,{Z:()=>g});var i=n(7313),l=n(1806),r=n(9019),s=n(1113),t=n(501),c=n(8310),d=n(7216),o=n(9840),x=n(4748),h=n(3213),Z=n(9536),j=n(3245),m=n(2040),u=n(8377),p=n(8465),f=n(1970),C=n(6417);const g=e=>{let{onClick:a,handleExport:n,handleImport:g,route:k}=e;const v=(0,i.useRef)(),w=n&&n.length>0;return(0,C.jsx)(l.Z,{sx:{mb:3},children:(0,C.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,C.jsx)(r.ZP,{item:!0,xs:12,sm:4,children:(0,C.jsxs)(s.Z,{className:"topTitle",color:"secondary.dark",sx:{textTransform:"capitalize"},children:[k," Managment"]})}),(0,C.jsx)(r.ZP,{item:!0,xs:12,sm:8,children:(0,C.jsx)(t.Z,{elevation:0,sx:{display:"flex",width:"fit-content",marginLeft:"auto"},children:(0,C.jsxs)(c.Z,{style:{display:"flex",flexDirection:"row",padding:0},children:[(0,C.jsx)(d.ZP,{disablePadding:!0,children:(0,C.jsxs)(o.Z,{onClick:a,disabled:"epaper"===k,children:[(0,C.jsx)(x.Z,{sx:{minWidth:0},children:(0,C.jsx)(m.Z,{})}),(0,C.jsx)(h.Z,{primary:"Add"})]})}),(0,C.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),(0,C.jsx)(d.ZP,{disablePadding:!0,children:(0,C.jsxs)(o.Z,{onClick:()=>{v.current&&v.current.link.click()},disabled:"node"!==k||!w,children:[(0,C.jsx)(x.Z,{sx:{minWidth:0},children:(0,C.jsx)(u.Z,{})}),(0,C.jsx)(h.Z,{primary:"Download"}),(0,C.jsx)(j.CSVLink,{data:n,filename:"selected_nodes.csv",ref:v})]})}),(0,C.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),(0,C.jsx)(d.ZP,{disablePadding:!0,children:(0,C.jsxs)(o.Z,{onClick:g,disabled:"node"!==k,children:[(0,C.jsx)(x.Z,{sx:{minWidth:0},children:(0,C.jsx)(p.Z,{})}),(0,C.jsx)(h.Z,{primary:"Upload"})]})}),(0,C.jsx)(Z.Z,{orientation:"vertical",flexItem:!0}),(0,C.jsx)(d.ZP,{disablePadding:!0,children:(0,C.jsxs)(o.Z,{onClick:a,disabled:!0,children:[(0,C.jsx)(x.Z,{sx:{minWidth:0},children:(0,C.jsx)(f.Z,{})}),(0,C.jsx)(h.Z,{primary:"Delete"})]})})]})})})]})})}},4185:(e,a,n)=>{n.r(a),n.d(a,{default:()=>C});var i=n(7313),l=n(2277),r=n(1095),s=n(1113),t=n(501),c=n(6149),d=n(3604),o=n(6467),x=n(6783),h=n(4117),Z=n(4481),j=n(155),m=n(818),u=n(5662),p=n(6417);const f="http://localhost:8080/api/v1",C=()=>{const[e,a]=(0,i.useState)([]),[n,C]=(0,i.useState)(null),[g,k]=(0,i.useState)(!1),[v,w]=(0,i.useState)({}),[y,b]=(0,i.useState)(!1),[N,D]=(0,i.useState)(null);(0,i.useEffect)((()=>{(async()=>{try{const e=await u.Z.get("".concat(f,"/areas"));a(e.data)}catch(e){console.error(e)}})()}),[]);const A=()=>{C(null),w({}),k(!1)},S=()=>{D(null),b(!1)},P=e=>{w({...v,[e.target.name]:e.target.value})},T=[{field:"areaName",headerName:"Area Name",flex:1},{field:"areaDescription",headerName:"Area Description",flex:1},{field:"areaCode",headerName:"Area Code",flex:1},{field:"linkedRack",headerName:"Linked Rack",flex:1},{field:"epaperCount",headerName:"Total Linked Epapers",flex:1},{field:"gatewayCount",headerName:"Total Linked Gateways",flex:1},{field:"actions",headerName:"Actions",width:200,renderCell:e=>(0,p.jsxs)("div",{children:[(0,p.jsx)(r.Z,{onClick:()=>{return a=e.id,D(a),void b(!0);var a},startIcon:(0,p.jsx)(Z.Z,{}),color:"error",className:"lowercaseText",children:"Delete"}),(0,p.jsx)(r.Z,{onClick:()=>{return a=e.row,C(a||null),w(a||{}),void k(!0);var a},startIcon:(0,p.jsx)(j.Z,{}),color:"error",className:"lowercaseText",children:"Edit"})]})}];return(0,p.jsxs)("div",{children:[(0,p.jsx)(s.Z,{className:"topTitle",color:"secondary.lightDarkText",gutterBottom:!0,children:"Area Managment"}),(0,p.jsx)(m.Z,{}),(0,p.jsx)(t.Z,{children:(0,p.jsx)("div",{style:{height:"auto",width:"100%"},children:(0,p.jsx)(l._$,{rows:e,columns:T,initialState:{pagination:{paginationModel:{pageSize:50}}},pageSizeOptions:[50,75,100],checkboxSelection:!0,disableSelectionOnClick:!0,autoHeight:!0})})}),(0,p.jsxs)(c.Z,{open:g,onClose:A,children:[(0,p.jsx)(d.Z,{children:n?"Edit Area":"Add New Area"}),(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(x.Z,{name:"areaName",label:"Area Name",value:v.areaName||"",onChange:P,fullWidth:!0,margin:"normal"}),(0,p.jsx)(x.Z,{name:"areaDescription",label:"Area Description",value:v.areaDescription||"",onChange:P,fullWidth:!0,margin:"normal"}),(0,p.jsx)(x.Z,{name:"areaCode",label:"Area Code",value:v.areaCode||"",onChange:P,fullWidth:!0,margin:"normal"})]}),(0,p.jsxs)(h.Z,{children:[(0,p.jsx)(r.Z,{onClick:A,children:"Cancel"}),(0,p.jsx)(r.Z,{onClick:async()=>{try{if(null!=n){const i=e.map((e=>e.id===n.id?{...e,...v}:e));await u.Z.put("".concat(f,"/areas/").concat(v.id),v),a(i)}else{const n={id:Date.now(),...v},i=(await u.Z.post("".concat(f,"/areas/"),v)).data.id;n.id=i,a([...e,n])}A()}catch(i){console.log(i)}},variant:"contained",color:"error",children:"Save"})]})]}),(0,p.jsxs)(c.Z,{open:y,onClose:S,children:[(0,p.jsx)(d.Z,{children:"Confirm Delete"}),(0,p.jsx)(o.Z,{children:"Are you sure you want to delete this area?"}),(0,p.jsxs)(h.Z,{children:[(0,p.jsx)(r.Z,{onClick:S,color:"primary",children:"Cancel"}),(0,p.jsx)(r.Z,{onClick:async n=>{try{const n=N;if(null!==n){const i=e.filter((e=>e.id!==n));await u.Z.delete("".concat(f,"/areas/").concat(n)),a(i),S()}}catch(i){console.error("Error deleting row:",i)}},variant:"contained",color:"error",children:"Delete"})]})]})]})}},155:(e,a,n)=>{n.d(a,{Z:()=>r});var i=n(1171),l=n(6417);const r=(0,i.Z)((0,l.jsx)("path",{d:"M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83zM6.21 18H5v-1.21l8.66-8.66 1.21 1.21L6.21 18zM11 20l4-4h6v4H11z"}),"DriveFileRenameOutline")}}]);