(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{5144:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/members",function(){return r(2445)}])},2445:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return h}});var n=r(5893),t=r(9008),l=r.n(t),s=r(1664),m=r.n(s),i=r(7294),d=e=>{let{label:a,type:r="text",name:t,onChange:l,placeholder:s}=e;return(0,n.jsx)("div",{children:(0,n.jsxs)("label",{htmlFor:t,children:[a,(0,n.jsx)("input",{type:r,name:t,onChange:l,placeholder:s})]})})},u=r(4764),c=r(6344),b=r.n(c),h=()=>{let[e,a]=(0,i.useState)([]),[r,t]=(0,i.useState)({githubId:"",userName:"",realName:"",displayName:"",graduateYear:0}),s=async()=>{let e=await u.x.members.$get();a(e)},c=e=>{let{name:a,value:r,type:n}=e.target;t(e=>({...e,[a]:"number"===n?Number(r):r}))},h=async()=>{let e=await u.x.members.$post({body:{githubId:r.githubId,userName:r.userName,realName:r.realName,displayName:r.displayName,graduateYear:r.graduateYear,avatarUrl:"https://github.com/".concat(r.userName,".png"),updateAt:Date.now()}});if(null===e){alert("Memberの追加に失敗しました");return}s(),t({githubId:"",userName:"",realName:"",displayName:"",graduateYear:0})};return(0,i.useEffect)(()=>{s();let e=setInterval(s,1e3);return()=>clearInterval(e)},[]),(0,n.jsxs)("div",{className:b().container,children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"Addition・MemberList | INIAD.ts"})}),(0,n.jsxs)("div",{className:b().addTable,children:[(0,n.jsx)("h1",{children:"#Member追加"}),(0,n.jsx)(d,{label:"GitHubID",name:"githubId",placeholder:"ex: 012345678",onChange:c}),(0,n.jsx)(d,{label:"GitHubユーザー名",name:"userName",placeholder:"ex: mst-mkt",onChange:c}),(0,n.jsx)(d,{label:"表示名",name:"displayName",placeholder:"ex: \uD83E\uDDF6",onChange:c}),(0,n.jsx)(d,{label:"本名",name:"realName",placeholder:"ex: 田中 太郎",onChange:c}),(0,n.jsx)(d,{label:"卒業年",type:"number",name:"graduateYear",placeholder:"ex: 2025",onChange:c}),(0,n.jsx)("button",{onClick:h,children:"追加"})]}),(0,n.jsxs)("div",{className:b().memberListContainer,children:[(0,n.jsx)("h1",{children:"#Member一覧"}),(0,n.jsx)("div",{className:b().memberTable,children:e.map(e=>(0,n.jsx)("div",{children:(0,n.jsx)(m(),{href:"/members/".concat(e.githubId),children:e.displayName})},e.githubId))})]})]})}},6344:function(e){e.exports={container:"members_container__cU612",addTable:"members_addTable__ZCHLg",memberListContainer:"members_memberListContainer__wyEdQ",memberTable:"members_memberTable__XTDVt"}},9008:function(e,a,r){e.exports=r(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5144)}),_N_E=e.O()}]);