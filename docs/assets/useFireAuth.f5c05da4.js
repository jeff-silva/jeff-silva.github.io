import{E as o,m as n}from"./entry.7414a6eb.js";import{i as c}from"./index.esm.db934170.js";import{g as l,o as u,c as h,s as p,a as m}from"./index-61e5ac61.bc68faee.js";const g=n(),d=t=>({code:t.code,message:t.message,fields:[]}),i=t=>t?{uid:t.uid,name:(t.providerData[0]?t.providerData[0].displayName:!1)||t.email,email:t.email,...t}:!1,y=(t={})=>{t={events:[],...t},c(g.public.firebase);const s=l();u(s,e=>{a.user=i(e),a.ready=!0,a.dispatch("authChange")});const a=o({ready:!1,data:{email:"",password:""},user:!1,error:!1,async save(){try{const e=await h(s,a.data.email,a.data.password);a.user=i(e.user),a.data.email="",a.data.password="",a.ready=!0,a.dispatch("saved")}catch(e){a.error=d(e),a.dispatch("saveError"),a.dispatch("error")}},async login(){try{const e=await p(s,a.data.email,a.data.password);a.user=i(e.user),a.data.email="",a.data.password="",a.dispatch("loggedIn")}catch(e){a.error=d(e),a.dispatch("loginError"),a.dispatch("error")}},async logout(){const e=await m(s);return a.user=i(!1),a.dispatch("loggedOut"),a.dispatch("authChange"),e},events:t.events,on(e,r){a.events.push({name:e,callback:r})},dispatch(e){a.events.forEach(r=>{r.name==e&&r.callback()})}});return a};export{y as u};