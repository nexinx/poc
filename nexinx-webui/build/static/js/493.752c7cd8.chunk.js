"use strict";(self.webpackChunknexinx_webui=self.webpackChunknexinx_webui||[]).push([[493],{818:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7313),s=a(1806),i=a(9019),l=a(1113),r=a(501),o=a(8310),c=a(7216),d=a(9840),m=a(4748),x=a(3213),h=a(9536),p=a(3245),j=a(2040),u=a(8377),Z=a(8465),g=a(1970),f=a(6417);const y=e=>{let{onClick:t,handleExport:a,handleImport:y,route:S}=e;const v=(0,n.useRef)(),b=a&&a.length>0;return(0,f.jsx)(s.Z,{sx:{mb:3},children:(0,f.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,f.jsx)(i.ZP,{item:!0,xs:12,sm:4,children:(0,f.jsxs)(l.Z,{className:"topTitle",color:"secondary.dark",sx:{textTransform:"capitalize"},children:[S," Managment"]})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,sm:8,children:(0,f.jsx)(r.Z,{elevation:0,sx:{display:"flex",width:"fit-content",marginLeft:"auto"},children:(0,f.jsxs)(o.Z,{style:{display:"flex",flexDirection:"row",padding:0},children:[(0,f.jsx)(c.ZP,{disablePadding:!0,children:(0,f.jsxs)(d.Z,{onClick:t,disabled:"epaper"===S,children:[(0,f.jsx)(m.Z,{sx:{minWidth:0},children:(0,f.jsx)(j.Z,{})}),(0,f.jsx)(x.Z,{primary:"Add"})]})}),(0,f.jsx)(h.Z,{orientation:"vertical",flexItem:!0}),(0,f.jsx)(c.ZP,{disablePadding:!0,children:(0,f.jsxs)(d.Z,{onClick:()=>{v.current&&v.current.link.click()},disabled:"node"!==S||!b,children:[(0,f.jsx)(m.Z,{sx:{minWidth:0},children:(0,f.jsx)(u.Z,{})}),(0,f.jsx)(x.Z,{primary:"Download"}),(0,f.jsx)(p.CSVLink,{data:a,filename:"selected_nodes.csv",ref:v})]})}),(0,f.jsx)(h.Z,{orientation:"vertical",flexItem:!0}),(0,f.jsx)(c.ZP,{disablePadding:!0,children:(0,f.jsxs)(d.Z,{onClick:y,disabled:"node"!==S,children:[(0,f.jsx)(m.Z,{sx:{minWidth:0},children:(0,f.jsx)(Z.Z,{})}),(0,f.jsx)(x.Z,{primary:"Upload"})]})}),(0,f.jsx)(h.Z,{orientation:"vertical",flexItem:!0}),(0,f.jsx)(c.ZP,{disablePadding:!0,children:(0,f.jsxs)(d.Z,{onClick:t,disabled:!0,children:[(0,f.jsx)(m.Z,{sx:{minWidth:0},children:(0,f.jsx)(g.Z,{})}),(0,f.jsx)(x.Z,{primary:"Delete"})]})})]})})})]})})}},493:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(7313),s=a(2277),i=a(2832),l=a(7131),r=a(1806),o=a(3428),c=a(3405),d=a(501),m=a(6149),x=a(3604),h=a(6467),p=a(4117),j=a(1095),u=a(1171),Z=a(6417);const g=(0,u.Z)((0,Z.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");var f=a(4481),y=a(5281),S=a(818),v=a(3917),b=a(1113),w=a(9881),P=a(7462),z=a(3366),N=a(4146),k=a(1921),C=a(7592),T=a(7342),A=a(7430),B=a(2298);function I(e){return(0,B.Z)("MuiAlertTitle",e)}(0,A.Z)("MuiAlertTitle",["root"]);const D=["className"],W=(0,C.ZP)(b.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,t)=>t.root})((e=>{let{theme:t}=e;return{fontWeight:t.typography.fontWeightMedium,marginTop:-2}})),O=n.forwardRef((function(e,t){const a=(0,T.Z)({props:e,name:"MuiAlertTitle"}),{className:n}=a,s=(0,z.Z)(a,D),i=a,l=(e=>{const{classes:t}=e;return(0,k.Z)({root:["root"]},I,t)})(i);return(0,Z.jsx)(W,(0,P.Z)({gutterBottom:!0,component:"div",ownerState:i,ref:t,className:(0,N.Z)(l.root,n)},s))}));var L=a(9019),M=a(6783),E=a(5662);const R="http://localhost:8080/api/v1",F=sessionStorage.getItem("jwt"),H=()=>{const[e,t]=(0,n.useState)(!1),[a,s]=(0,n.useState)([]),[i,l]=(0,n.useState)([]),[r,o]=(0,n.useState)([]),[c,m]=(0,n.useState)(!1),[x,h]=(0,n.useState)({templateName:""}),[p,u]=(0,n.useState)(""),[g,f]=(0,n.useState)(!0),[S,P]=(0,n.useState)({templateName:!1}),z=(0,n.useCallback)((async e=>{if(1!==e.length)return void console.log("Please upload one file at a time.");const a=e[0];t(!0);await(async()=>{try{if(!a)return void console.error("No file selected");const e=new FormData;e.append("file",a);const t=await E.Z.post("".concat(R,"/templates/renderer"),e,{headers:{Authorization:"Bearer ".concat(F),"Content-Type":"multipart/form-data"}});if(t.headers["content-type"]&&t.headers["content-type"].includes("application/json")){const e=Object.keys(t.data).filter((e=>"Base64Image"!==e&&"Template"!==e&&"WidthHeight"!==e));s(e),o(t.data.WidthHeight);const a={};if(e.forEach((e=>{a[e]=""})),h((e=>({...e,templateAttribute:JSON.stringify(a),templateRaw:t.data.Template,templateSize:t.data.WidthHeight}))),t.data.Base64Image){const e=t.data.Base64Image;u("data:image/png;base64,".concat(e))}}else s([]),console.log("Invalid template: Fix the template and try again")}catch(e){console.error("Error uploading file:",e)}})()}),[]),{acceptedFiles:N,getRootProps:k,getInputProps:C}=(0,v.uI)({onDrop:z,multiple:!1,accept:{"text/xml":[".xsl"]}}),T=N.map((e=>(0,Z.jsxs)("li",{children:[(0,Z.jsx)("div",{children:(0,Z.jsxs)(b.Z,{sx:{fontSize:18},color:"text.secondary",children:[" ",(0,Z.jsx)("strong",{children:"Filename:"})," ",e.name]})}),(0,Z.jsx)("div",{children:(0,Z.jsxs)(b.Z,{sx:{fontSize:18},color:"text.secondary",children:[(0,Z.jsx)("strong",{children:"Filesize:"})," ",Math.round(e.size/1024)," KB"]})})]},e.path)));return(0,Z.jsxs)("div",{className:"container",children:[!e&&c&&(0,Z.jsx)(d.Z,{children:(0,Z.jsxs)(w.Z,{severity:"success",children:[(0,Z.jsx)(O,{children:"Success"}),"Your template has been saved successfully."]})}),!e&&!c&&(0,Z.jsxs)("div",{...k({className:"dropzone"}),children:[(0,Z.jsx)("input",{...C()}),(0,Z.jsx)("div",{style:{minHeight:"140px",border:"2px dashed  #525252",alignItems:"center",justifyContent:"center",display:"flex",marginTop:20,paddingBottom:0},children:(0,Z.jsx)(b.Z,{sx:{fontSize:20},color:"text.secondary",children:"Drag 'n' drop some files here, or click to select files"})})]}),e&&(0,Z.jsxs)(L.ZP,{container:!0,spacing:4,sx:{marginBottom:"20px"},children:[(0,Z.jsx)(L.ZP,{item:!0,xs:12,sm:3,children:(0,Z.jsx)(M.Z,{name:"templateName",label:"Template Name",onChange:e=>{h({...x,[e.target.name]:e.target.value.trim()})},value:x.templateName||"",error:S.templateName,helperText:S.templateName?"This field is required":"",fullWidth:!0})}),(0,Z.jsx)(L.ZP,{item:!0,xs:12,sm:3,children:(0,Z.jsx)(M.Z,{name:"templateSize",label:"Template Size",disabled:!0,value:r,fullWidth:!0})}),(0,Z.jsx)(L.ZP,{item:!0,xs:12,sm:12,children:(0,Z.jsxs)(L.ZP,{container:!0,spacing:2,rowSpacing:2,children:[(0,Z.jsxs)(L.ZP,{item:!0,xs:12,sm:2,children:[(0,Z.jsxs)(b.Z,{sx:{fontSize:18,marginTop:2},color:"text.secondary",children:[" ",(0,Z.jsx)("strong",{children:"Template Fields:"})]}),a.map(((e,t)=>(0,Z.jsxs)("li",{children:[" ",(0,Z.jsxs)(b.Z,{sx:{fontSize:16,marginTop:1},color:"text.secondary",children:["(",t+1,") ",e]})," "]},t)))]}),(0,Z.jsxs)(L.ZP,{item:!0,xs:"auto",md:"auto",lg:"auto",children:[(0,Z.jsxs)(b.Z,{sx:{fontSize:18,marginBottom:1},color:"text.secondary",children:[" ",(0,Z.jsx)("strong",{children:"Template Preview:"})]}),(0,Z.jsxs)(d.Z,{style:{textAlign:"left",position:"relative"},elevation:3,children:[g&&(0,Z.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:(0,Z.jsx)(y.Z,{})}),(0,Z.jsx)("img",{src:p,alt:"template",onLoad:()=>f(!1),style:{display:g?"none":"inline",width:"100%",height:"100%"}})]}),(0,Z.jsx)("ul",{style:{textAlign:"left"},children:T})]})]})}),(0,Z.jsx)(L.ZP,{container:!0,spacing:2,rowSpacing:2,sx:{marginTop:"20px"},children:(0,Z.jsxs)(L.ZP,{item:!0,xs:12,md:12,lg:12,children:[(0,Z.jsx)(j.Z,{onClick:async e=>{try{e.preventDefault();const a={};if(x.templateName.trim()||(a.templateName=!0),Object.keys(a).length>0)return void P(a);h({templateName:"",templateSize:""}),P({});const n={id:Date.now(),...x},s=(await E.Z.post("".concat(R,"/templates/"),x,{headers:{Authorization:"Bearer ".concat(F)}})).data.id;n.id=s,l([...i,n]),t(!1),m(!0),setTimeout((()=>{m(!1)}),4e3)}catch(a){console.log(a)}},variant:"contained",color:"secondary",sx:{ml:4},children:"Save"}),(0,Z.jsx)(j.Z,{onClick:()=>{h({templateName:""}),P({templateName:!1})},variant:"contained",color:"secondary",sx:{ml:2},children:"Reset"}),(0,Z.jsx)(j.Z,{onClick:()=>{h({templateName:""}),t(!1)},variant:"outlined",color:"secondary",sx:{ml:2},children:"Cancel"})]})})]})]})};var J=a(4641),_=a(9536);const V="http://localhost:8080/api/v1",q=sessionStorage.getItem("jwt"),K=e=>{let{templateData:t,cancelLabel:a}=e;const[s,i]=(0,n.useState)(""),[l,m]=(0,n.useState)(!0),[x,h]=(0,n.useState)({}),[p,u]=(0,n.useState)("");(0,n.useEffect)((()=>{(async e=>{u(t.templateAttribute);const a={templateId:e,templateAttribute:""};try{const e=(await E.Z.post("".concat(V,"/templates/buildTemplate"),a,{headers:{Authorization:"Bearer ".concat(q)}})).data;i("data:image/png;base64,".concat(e))}catch(n){console.error("Error fetching Templates:",n)}})(t.id)}),[t.id]);const g=e=>{const{name:a,value:n}=e.target,s=JSON.parse(p);h((e=>{const i={...e,[a]:n},l={};for(const t in s)i.hasOwnProperty(t)?l[t]=i[t]:l[t]=s[t]||"";return f(t.id,JSON.stringify(l)),i}))},f=async(e,t)=>{try{const a={templateId:e,templateAttribute:t},n=(await E.Z.post("".concat(V,"/nodes/build-node-template"),a,{headers:{Authorization:"Bearer ".concat(q)}})).data;i("data:image/png;base64,".concat(n))}catch(a){console.error("Error fetching Templates:",a)}},S=p?JSON.parse(p):{};return(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)(o.Z,{children:[(0,Z.jsx)(J.Z,{title:"Rendered Template"}),(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(L.ZP,{container:!0,spacing:2,rowSpacing:2,children:(0,Z.jsx)(r.Z,{children:(0,Z.jsxs)(r.Z,{sx:{mb:2,px:1,pb:5},children:[(0,Z.jsx)(b.Z,{sx:{py:1,ml:1.5,mt:3,fontSize:18},color:"secondary",gutterBottom:!0,children:"Template Preview:"}),(0,Z.jsxs)(L.ZP,{container:!0,spacing:2,rowSpacing:2,children:[(0,Z.jsx)(L.ZP,{item:!0,xs:"auto",md:"auto",lg:"auto",children:(0,Z.jsxs)(d.Z,{style:{textAlign:"center",marginLeft:10},elevation:3,children:[l&&(0,Z.jsx)("div",{children:(0,Z.jsx)(y.Z,{})}),(0,Z.jsx)("img",{src:s,alt:"template",onLoad:()=>m(!1),style:{display:l?"none":"inline"}})]})}),(0,Z.jsx)(L.ZP,{item:!0,xs:12,md:12,lg:12}),(0,Z.jsxs)(L.ZP,{item:!0,xs:12,md:12,lg:12,children:[(0,Z.jsx)(b.Z,{sx:{pt:2,pl:1,fontSize:18},color:"secondary",gutterBottom:!0,children:"Fields:"}),(0,Z.jsx)(r.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"30ch"}},noValidate:!0,children:Object.entries(S).map(((e,t)=>{var a;let[n,s]=e;return(0,Z.jsx)(M.Z,{variant:"outlined",fullWidth:!0,label:n,name:n,value:null!==(a=x[n])&&void 0!==a?a:s,onChange:g,margin:"normal"},t)}))})]})]})]})})})}),(0,Z.jsx)(_.Z,{}),(0,Z.jsx)(r.Z,{sx:{my:1},children:(0,Z.jsx)(L.ZP,{container:!0,spacing:2,rowSpacing:2,children:(0,Z.jsx)(L.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,Z.jsx)(j.Z,{onClick:a,variant:"outlined",color:"secondary",sx:{ml:2},children:"Cancle"})})})})]})})},U="http://localhost:8080/api/v1",Y=sessionStorage.getItem("jwt"),$=()=>{const[e,t]=(0,n.useState)([]),[a,u]=(0,n.useState)(!1),[v,b]=(0,n.useState)(null),[w,P]=(0,n.useState)(!1),[z,N]=(0,n.useState)(""),[k,C]=(0,n.useState)(!1),[T,A]=(0,n.useState)(!0);(0,n.useEffect)((()=>{(async()=>{try{return(await E.Z.get("".concat(U,"/templates"),{headers:{Authorization:"Bearer ".concat(Y)}})).data.reverse()}catch(e){console.error(e),A(!1)}})().then((e=>{e&&t(e),A(!1)}))}),[]);const B=()=>{P(!w)},I=()=>{b(null),u(!1)},D=[{field:"templateName",headerName:"Template Name",flex:1},{field:"templateSize",headerName:"Template Size",flex:1},{field:"templateAttribute",headerName:"Template Attribute",flex:1},{field:"linkedProduct",headerName:"Linked Product",flex:1},{field:"actions",headerName:"Actions",width:200,renderCell:e=>(0,Z.jsxs)(i.Z,{direction:"row",alignItems:"center",spacing:3,children:[(0,Z.jsx)(l.Z,{onClick:()=>(e=>{N(e),C(!k)})(e.row),size:"medium","aria-label":"view",color:"secondary",children:(0,Z.jsx)(g,{fontSize:"inherit"})}),(0,Z.jsx)(l.Z,{onClick:()=>{return t=e.id,b(t),void u(!0);var t},size:"medium",color:"secondary",children:(0,Z.jsx)(f.Z,{fontSize:"inherit"})})]})}];return(0,Z.jsxs)(r.Z,{children:[(0,Z.jsx)(S.Z,{onClick:B,handleExport:"",route:"template"}),k&&(0,Z.jsx)(K,{templateData:z,cancelLabel:()=>{C(!k)}}),w&&(0,Z.jsx)(o.Z,{sx:{marginBottom:5},children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(H,{handleCancle:B})})}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(r.Z,{children:(0,Z.jsx)(s._$,{rows:e,columns:D,initialState:{pagination:{paginationModel:{pageSize:50}}},pageSizeOptions:[50,75,100],checkboxSelection:!0,disableSelectionOnClick:!0,autoHeight:!0,loading:T,loadingOverlay:(0,Z.jsxs)("div",{className:"Data-Loader",children:[(0,Z.jsx)(y.Z,{})," "]})})})})}),(0,Z.jsxs)(m.Z,{open:a,onClose:I,children:[(0,Z.jsx)(x.Z,{children:"Confirm Delete"}),(0,Z.jsx)(h.Z,{children:"Are you sure you want to delete this Template?"}),(0,Z.jsxs)(p.Z,{children:[(0,Z.jsx)(j.Z,{onClick:I,color:"primary",children:"Cancel"}),(0,Z.jsx)(j.Z,{onClick:async a=>{try{const a=v;if(null!==a){const n=e.filter((e=>e.id!==a));await E.Z.delete("".concat(U,"/templates/").concat(a),{headers:{Authorization:"Bearer ".concat(Y)}}),t(n),I()}}catch(n){console.error("Error deleting row:",n)}},variant:"contained",color:"error",children:"Delete"})]})]})]})}}}]);