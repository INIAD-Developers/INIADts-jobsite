"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[237],{3370:(e,t,s)=>{s.d(t,{T:()=>a});const a=[{userName:"g-ratie1",displayName:"\u30e9\u30c6\u30a3",graduateYear:2026,socialLinks:["https://github.com/g-ratie"]},{userName:"mst-mkt1",displayName:"\ud83e\uddf6",graduateYear:2027,socialLinks:["https://github.com/mst-mkt"]},{userName:"yossuli1",displayName:"yossuli",graduateYear:2027,socialLinks:["https://github.com/yossuli"]},{userName:"g-ratie2",displayName:"\u30e9\u30c6\u30a3",graduateYear:2026,socialLinks:["https://github.com/g-ratie"]},{userName:"mst-mkt2",displayName:"\ud83e\uddf6",graduateYear:2027,socialLinks:["https://github.com/mst-mkt"]},{userName:"yossuli2",displayName:"yossuli",graduateYear:2027,socialLinks:["https://github.com/yossuli"]},{userName:"g-ratie3",displayName:"\u30e9\u30c6\u30a3",graduateYear:2026,socialLinks:["https://github.com/g-ratie"]},{userName:"mst-mkt3",displayName:"\ud83e\uddf6",graduateYear:2027,socialLinks:["https://github.com/mst-mkt"]},{userName:"yossuli3",displayName:"yossuli",graduateYear:2027,socialLinks:["https://github.com/yossuli"]},{userName:"g-ratie4",displayName:"\u30e9\u30c6\u30a3",graduateYear:2026,socialLinks:["https://github.com/g-ratie"]},{userName:"mst-mkt4",displayName:"\ud83e\uddf6",graduateYear:2027,socialLinks:["https://github.com/mst-mkt"]},{userName:"yossuli4",displayName:"yossuli",graduateYear:2027,socialLinks:["https://github.com/yossuli"]},{userName:"g-ratie5",displayName:"\u30e9\u30c6\u30a3",graduateYear:2026,socialLinks:["https://github.com/g-ratie"]},{userName:"mst-mkt5",displayName:"\ud83e\uddf6",graduateYear:2027,socialLinks:["https://github.com/mst-mkt"]},{userName:"yossuli5",displayName:"yossuli",graduateYear:2027,socialLinks:["https://github.com/yossuli"]},{userName:"g-ratie6",displayName:"\u30e9\u30c6\u30a3",graduateYear:2026,socialLinks:["https://github.com/g-ratie"]},{userName:"mst-mkt6",displayName:"\ud83e\uddf6",graduateYear:2027,socialLinks:["https://github.com/mst-mkt"]},{userName:"yossuli6",displayName:"yossuli",graduateYear:2027,socialLinks:["https://github.com/yossuli"]}]},8443:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(9960),i=s(2263),l=s(7961),r=s(7294);const m="container__TeE",c="carousel_DYJj",n="carouselList_x4Iw",o="carouselItem_ezUY",u="carouselImage_vuhB",d="carouselText_iVxw",p="dots_qyEc",g="dot_NA8q",N="dotActive_cxH4",h="buttons_LlDb",y="button_kmes",E="buttonInner_F7Vz",b="left_jVfp",I="right_rdF8",v=e=>{let{carouselData:t}=e;const[s,a]=(0,r.useState)(0),[i,l]=(0,r.useState)(0),v=()=>{const e=document.getElementsByClassName(o)[0],t=document.getElementsByClassName(c)[0];a(e.clientWidth),l(t.clientWidth)},k=e=>{const t=document.getElementsByClassName(g),a=Math.min(window.innerHeight,window.innerWidth)/100;Array.from(t).forEach(((t,l)=>{[e-.4*s<(s+2*a)*l,e+i+.4*s>s*(l+1)+2*a*l].every(Boolean)?t.classList.add(N):t.classList.remove(N)}))},D=(0,r.useCallback)((e=>{const t=document.getElementsByClassName(c)[0];if("left"===e){const e=t.scrollLeft<10;t.scrollLeft+=e?t.scrollWidth:-s}else{const e=t.scrollLeft+i>t.scrollWidth-10;t.scrollLeft+=e?-t.scrollWidth:s}}),[i,s]);return(0,r.useEffect)((()=>(k(0),v(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}))),(0,r.useEffect)((()=>{const e=setInterval((()=>{D("right")}),5e3);return()=>{clearInterval(e)}}),[D]),r.createElement("div",{className:m},r.createElement("div",{className:c,onScroll:e=>{const t=e.target;k(t.scrollLeft)}},r.createElement("ul",{className:n},t.map(((e,t)=>r.createElement("li",{key:t,className:o},r.createElement("div",{className:u},r.createElement("img",{src:e.image,alt:`${e.title}'s image`})),r.createElement("div",{className:d},r.createElement("h3",null,e.title),r.createElement("p",null,e.description))))))),r.createElement("div",{className:p},t.map(((e,t)=>r.createElement("div",{className:g,key:t})))),r.createElement("div",{className:h},r.createElement("button",{className:`${b} ${y}`,onClick:()=>D("left")},r.createElement("div",{className:E})),r.createElement("button",{className:`${I} ${y}`,onClick:()=>D("right")},r.createElement("div",{className:E}))))};var k=s(3370);const D="container_CEfJ",L="member__idq",_=()=>r.createElement("div",{className:D},k.T.map(((e,t)=>r.createElement("div",{key:t,className:L},r.createElement(a.Z,{to:`members/${e.userName}`},r.createElement("img",{src:`https://avatars.githubusercontent.com/${e.userName}`,alt:`${e}'s image`})))))),A=[{title:"Gradius",description:"Gradius\u306f\u6a2a\u30b9\u30af\u30ed\u30fc\u30eb\u306e\u5bfe\u6226\u578b\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b2\u30fc\u30e0\u3067INIAD Fes 2023\u3067\u767a\u8868\u3055\u308c\u307e\u3057\u305f\u3002",image:"https://github.com/INIAD-Developers.png"},{title:"Othello",description:"INIAD.ts\u3067\u306f\u5165\u4f1a\u3057\u3066\u307e\u305a\u6700\u521d\u306b\u30aa\u30bb\u30ed\u5236\u4f5c\u3092\u884c\u3044\u3001Typescript\u3084React\u306e\u57fa\u790e\u3092\u5b66\u3073\u307e\u3059\u3002",image:"https://github.com/INIAD-Developers.png"},{title:"Tetris",description:"Tetris\u306fINIAD.ts\u767a\u7965\u306e\u30d1\u30ba\u30eb\u30b2\u30fc\u30e0\u3067\u4e16\u754c\u4e2d\u3067\u611b\u3055\u308c\u3066\u3044\u307e\u3059\u3002",image:"https://github.com/INIAD-Developers.png"},{title:"minesweeper",description:"Minesweeper",image:"https://github.com/INIAD-Developers.png"},{title:"Gradius",description:"Gradius\u306f\u6a2a\u30b9\u30af\u30ed\u30fc\u30eb\u306e\u5bfe\u6226\u578b\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30b2\u30fc\u30e0\u3067INIAD Fes 2023\u3067\u767a\u8868\u3055\u308c\u307e\u3057\u305f\u3002",image:"https://github.com/INIAD-Developers.png"},{title:"Othello",description:"INIAD.ts\u3067\u306f\u5165\u4f1a\u3057\u3066\u307e\u305a\u6700\u521d\u306b\u30aa\u30bb\u30ed\u5236\u4f5c\u3092\u884c\u3044\u3001Typescript\u3084React\u306e\u57fa\u790e\u3092\u5b66\u3073\u307e\u3059\u3002",image:"https://github.com/INIAD-Developers.png"},{title:"Tetris",description:"Tetris\u306fINIAD.ts\u767a\u7965\u306e\u30d1\u30ba\u30eb\u30b2\u30fc\u30e0\u3067\u4e16\u754c\u4e2d\u3067\u611b\u3055\u308c\u3066\u3044\u307e\u3059\u3002",image:"https://github.com/INIAD-Developers.png"},{title:"minesweeper",description:"Minesweeper",image:"https://github.com/INIAD-Developers.png"}],w="container_bfhl",f="top_wZiK",Y="title_GqtP",T="contentTitle_Kvp0",C="products_dLNt",$="activity_rFo3",G="activityText_ENO2",B="activityImage_VHw3",W="members_Ac2G",x=()=>{const{siteConfig:e}=(0,i.Z)();return r.createElement(l.Z,{title:e.title,description:"INIAD.ts\u30b5\u30a4\u30c8"},r.createElement("div",{className:w},r.createElement("div",{className:f},r.createElement("h1",{className:Y},"INIAD.ts"),r.createElement("p",null,"INIAD(\u6771\u6d0b\u5927\u5b66\u60c5\u5831\u9023\u643a\u5b66\u90e8)\u516c\u8a8d\u30b5\u30fc\u30af\u30eb"),r.createElement(a.Z,{to:"/about"},"\u8a73\u3057\u304f\u898b\u308b")),r.createElement("div",{className:C},r.createElement("h2",{className:T},"2023\u5e74\u306e\u4e3b\u8981\u30d7\u30ed\u30c0\u30af\u30c8"),r.createElement(v,{carouselData:A})),r.createElement("div",{className:$},r.createElement("div",{className:G},r.createElement("h2",{className:T},"\u4e3b\u306a\u6d3b\u52d5"),r.createElement("p",null,"INIAD.ts\u3067\u306f\u3001\u6bce\u9031\u6c34\u66dc\u65e5\u306b\u6d3b\u52d5\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002 \u6d3b\u52d5\u5185\u5bb9\u306f\u3001\u30d7\u30ed\u30c0\u30af\u30c8\u958b\u767a\u3084\u3001\u52c9\u5f37\u4f1a\u3001LT\u4f1a\u306a\u3069\u3067\u3059\u3002 \u307e\u305f\u3001\u6bce\u5e74\u590f\u306b\u306f\u3001\u5408\u5bbf\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002 2021\u5e74\u5ea6\u306f\u3001\u65b0\u578b\u30b3\u30ed\u30ca\u30a6\u30a4\u30eb\u30b9\u306e\u5f71\u97ff\u306b\u3088\u308a\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u306e\u6d3b\u52d5\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002 2022\u5e74\u5ea6\u4ee5\u964d\u306f\u3001\u6771\u6d0b\u5927\u5b66\u306e\u30ad\u30e3\u30f3\u30d1\u30b9\u3067\u306e\u6d3b\u52d5\u3092\u4e88\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002 \u6d3b\u52d5\u306b\u8208\u5473\u304c\u3042\u308b\u65b9\u306f\u3001\u305c\u3072\u3001\u304a\u6c17\u8efd\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002 \u307e\u305f\u3001INIAD.ts\u3067\u306f\u3001\u6bce\u5e74\u65b0\u5165\u751f\u3092\u52df\u96c6\u3057\u3066\u3044\u307e\u3059\u3002 \u65b0\u5165\u751f\u306e\u65b9\u306f\u3001\u305c\u3072\u3001\u304a\u6c17\u8efd\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002 \u304a\u554f\u3044\u5408\u308f\u305b\u306f\u3001Twitter\u306eDM\u3001\u307e\u305f\u306f\u3001\u30e1\u30fc\u30eb\u306b\u3066\u304a\u9858\u3044\u3057\u307e\u3059\u3002",r.createElement("br",null),r.createElement("br",null),"This sentence is written by GitHub Copilot.")),r.createElement("div",{className:B},r.createElement("img",{src:"https://www.toyo.ac.jp/nyushi/img/about/campus/akabanedai/gallery_img_03.jpg",alt:"\u4eee\u306bINIAD\u306e\u5199\u771f\u3092\u7f6e\u3044\u3066\u3044\u307e\u3059"}))),r.createElement("div",{className:W},r.createElement("h2",{className:T},"\u30e1\u30f3\u30d0\u30fc"),r.createElement(_,null),r.createElement("div",null))))}}}]);