import{d as t,h as e,x as s,o as a,c as l,w as o,a as n,b as r,j as d,k as i,F as u,e as p,f as c,Q as f,u as y,t as m,z as _,_ as k}from"./index-4a71cb36.js";const x=k(t({__name:"lottery",setup(t){const k=[1,2,3,8,-1,4,7,6,5],x=k[4],g=e({lottery:0,step:-1,stopStep:32,speed:2,timer:null,loading:!1}),h=s((()=>g.step%8+1));function v(){if(g.step>=g.stopStep)return clearTimeout(g.timer),g.step=g.lottery,g.speed=2,g.loading=!1,void _({title:`恭喜获得${h.value}号奖品`});g.step>24+g.lottery&&g.speed++,g.step++,g.timer=setTimeout(v,30*g.speed)}return(t,e)=>{const s=p,_=c("layout-demo-uni");return a(),l(_,null,{default:o((()=>[n(s,{class:"mt-4 h-10 text-center"},{default:o((()=>[r("九宫格抽奖")])),_:1}),n(s,{class:"lottery-box"},{default:o((()=>[n(s,{class:"lottery-list"},{default:o((()=>[(a(),d(u,null,i(k,(t=>n(s,{class:f(["lottery-item",{active:t===y(h),btn:t===y(x)}]),key:t,onClick:e=>function(t){t===x&&(g.loading||(g.loading=!0,g.lottery=Math.ceil(8*Math.random()),g.stopStep=g.lottery+32,v()))}(t)},{default:o((()=>[t===y(x)?(a(),l(s,{key:0},{default:o((()=>[r("点击抽奖")])),_:1})):(a(),l(s,{key:1},{default:o((()=>[r(m(t),1)])),_:2},1024))])),_:2},1032,["class","onClick"]))),64))])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-634569aa"]]);export{x as default};
