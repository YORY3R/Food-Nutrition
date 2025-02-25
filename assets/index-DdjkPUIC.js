import{f as E,g as d,o as f,d as h,r as y,j as D,k as b,l,F as C,q as w,t as a,v as e,x as J,y as j}from"./@vue-CzLjzS63.js";import{c as q}from"./pinia-BNZ8tBRJ.js";import{c as H,a as W}from"./vue-router-A9Fm6buC.js";import{e as z}from"./exceljs-By70KyhX.js";(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const v of s)if(v.type==="childList")for(const N of v.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&o(N)}).observe(document,{childList:!0,subtree:!0});function m(s){const v={};return s.integrity&&(v.integrity=s.integrity),s.referrerPolicy&&(v.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?v.credentials="include":s.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function o(s){if(s.ep)return;s.ep=!0;const v=m(s);fetch(s.href,v)}})();const G=(k,g)=>{const m=k.__vccOpts||k;for(const[o,s]of g)m[o]=s;return m},Q={};function U(k,g){const m=d("RouterView");return f(),E(m)}const X=G(Q,[["render",U]]),Y=["onChange","value"],Z=["value"],x=["onClick"],F=["value","onInput"],I=["value","onInput"],c=h({__name:"NutritionView",setup(k){const g=y([]),m=y([]),o=y([]),s=y(0),v=y(0),N=y(0),K=y(0),L=y(0);D(()=>{A()});const $=(i,t)=>{if(i.target){const r=JSON.parse(i.target.value);o.value[t]?o.value[t]=r:o.value.push(r);const n=m.value.findIndex(u=>u.name===r.name);m.value[n]=r,M()}},V=i=>{i>=0&&i<o.value.length&&(o.value.splice(i,1),M())},B=(i,t)=>{if(i.target){const r=Number(i.target.value);o.value[t].composition=Math.round(r*1e5)/1e5,o.value[t].totalCalories=Math.round(o.value[t].calories*r*1e5)/1e5,M(t,r)}},R=(i,t)=>{if(i.target){const r=Number(i.target.value);o.value[t].totalCalories=Math.round(r*1e5)/1e5,o.value[t].composition=Math.round(r/o.value[t].calories*1e5)/1e5,M(t,o.value[t].composition)}},M=(i,t)=>{i!==void 0&&t!==void 0&&(o.value[i].totalCarbohydrates=Math.round(o.value[i].carbohydrates*t*1e5)/1e5,o.value[i].totalProtein=Math.round(o.value[i].protein*t*1e5)/1e5,o.value[i].totalFat=Math.round(o.value[i].fat*t*1e5)/1e5);const r=o.value.reduce((n,u)=>(n.composition+=u.composition,n.calories+=u.totalCalories,n.carbohydrates+=u.totalCarbohydrates,n.protein+=u.totalProtein,n.fat+=u.totalFat,n),{composition:0,calories:0,carbohydrates:0,protein:0,fat:0});s.value=Math.round(r.composition*1e5)/1e5,v.value=Math.round(r.calories*1e5)/1e5,N.value=Math.round(r.carbohydrates*1e5)/1e5,K.value=Math.round(r.protein*1e5)/1e5,L.value=Math.round(r.fat*1e5)/1e5},A=async()=>{const t=await(await fetch("/Food-Nutrition/data.xlsx")).arrayBuffer(),r=new z.Workbook;await r.xlsx.load(t),r.worksheets[0].eachRow((u,P)=>{if(P===1)for(let p=1;p<=10;p++)g.value.push(String(u.getCell(p).value));if(P>1&&u.cellCount===10){const p=[String(u.getCell(1).value)];for(let T=2;T<=10;T++){let S=Number(u.getCell(T).value);isNaN(S)&&(S=Number(u.getCell(T).result)),S=Math.round(S*1e5)/1e5,p.push(S)}m.value.push({name:String(p[0]),composition:Number(p[1]),calories:Number(p[2]),carbohydrates:Number(p[3]),protein:Number(p[4]),fat:Number(p[5]),totalCalories:Number(p[6]),totalCarbohydrates:Number(p[7]),totalProtein:Number(p[8]),totalFat:Number(p[9])})}})};return(i,t)=>(f(),b(C,null,[l("table",null,[l("thead",null,[l("tr",null,[(f(!0),b(C,null,w(g.value,r=>(f(),b("th",{key:r},e(r),1))),128))])]),l("tbody",null,[(f(!0),b(C,null,w(m.value,r=>(f(),b("tr",{key:r.name},[l("td",null,e(r.name),1),l("td",null,e(r.composition),1),l("td",null,e(r.calories),1),l("td",null,e(r.carbohydrates),1),l("td",null,e(r.protein),1),l("td",null,e(r.fat),1),l("td",null,e(r.totalCalories),1),l("td",null,e(r.totalCarbohydrates),1),l("td",null,e(r.totalProtein),1),l("td",null,e(r.totalFat),1)]))),128))])]),t[31]||(t[31]=l("h2",{style:{margin:"8px 0px 0px"}},"Pilih Makanan",-1)),t[32]||(t[32]=l("div",null,null,-1)),(f(!0),b(C,null,w([{name:""},...o.value],(r,n)=>(f(),b(C,{key:`${r.name}${n}`},[t[20]||(t[20]=l("div",{style:{margin:"8px 0px"}},null,-1)),l("select",{style:{"font-weight":"700"},onChange:u=>$(u,n),value:o.value[n]?JSON.stringify(o.value[n]):""},[(f(!0),b(C,null,w(m.value,(u,P)=>(f(),b("option",{key:`${r.name}${n}${P}`,value:JSON.stringify(u)},e(u.name),9,Z))),128))],40,Y),o.value[n]?(f(),b(C,{key:0},[l("button",{style:{"margin-left":"8px"},onClick:u=>V(n)},"Hapus",8,x),t[14]||(t[14]=l("div",null,null,-1)),l("div",null,[t[0]||(t[0]=a(" Kalori: ")),l("b",null,e(o.value[n].calories),1),t[1]||(t[1]=a(" kalori "))]),l("div",null,[t[2]||(t[2]=a(" Karbohidrat: ")),l("b",null,e(o.value[n].carbohydrates),1),t[3]||(t[3]=a(" gram "))]),l("div",null,[t[4]||(t[4]=a(" Protein: ")),l("b",null,e(o.value[n].protein),1),t[5]||(t[5]=a(" gram "))]),l("div",null,[t[6]||(t[6]=a(" Lemak: ")),l("b",null,e(o.value[n].fat),1),t[7]||(t[7]=a(" gram "))]),t[15]||(t[15]=l("label",null,"Komposisi: ",-1)),l("input",{style:{"font-weight":"700"},type:"number",value:o.value[n].composition,onInput:u=>B(u,n)},null,40,F),t[16]||(t[16]=l("span",null," gram",-1)),t[17]||(t[17]=l("div",null,null,-1)),t[18]||(t[18]=l("label",null,"Total Kalori: ",-1)),l("input",{style:{"font-weight":"700"},type:"number",value:o.value[n].totalCalories,onInput:u=>R(u,n)},null,40,I),t[19]||(t[19]=l("span",null," kalori",-1)),l("div",null,[t[8]||(t[8]=a(" Total Karbohidrat: ")),l("b",null,e(o.value[n].totalCarbohydrates),1),t[9]||(t[9]=a(" gram "))]),l("div",null,[t[10]||(t[10]=a(" Total Protein: ")),l("b",null,e(o.value[n].totalProtein),1),t[11]||(t[11]=a(" gram "))]),l("div",null,[t[12]||(t[12]=a(" Total Lemak: ")),l("b",null,e(o.value[n].totalFat),1),t[13]||(t[13]=a(" gram "))])],64)):J("",!0)],64))),128)),t[33]||(t[33]=l("h2",{style:{margin:"8px 0px 0px"}},"Total",-1)),l("div",null,[t[21]||(t[21]=a(" Total Komposisi: ")),l("b",null,e(s.value),1),t[22]||(t[22]=a(" gram "))]),l("div",null,[t[23]||(t[23]=a(" Total Kalori: ")),l("b",null,e(v.value),1),t[24]||(t[24]=a(" kalori "))]),l("div",null,[t[25]||(t[25]=a(" Total Karbohidrat: ")),l("b",null,e(N.value),1),t[26]||(t[26]=a(" gram "))]),l("div",null,[t[27]||(t[27]=a(" Total Protein: ")),l("b",null,e(K.value),1),t[28]||(t[28]=a(" gram "))]),l("div",null,[t[29]||(t[29]=a(" Total Lemak: ")),l("b",null,e(L.value),1),t[30]||(t[30]=a(" gram "))])],64))}}),_=H({history:W("/Food-Nutrition"),routes:[{path:"/",name:"nutrition",component:c},{path:"/:catchAll(.*)",redirect:"/"}]}),O=j(X);O.use(q());O.use(_);O.mount("#app");
