import{d as r,a4 as m,a5 as f,a6 as c,a7 as P,c as v,H as h,r as L,a8 as l,a9 as b,aa as g,q as R,g as u,N as S,ab as T,ac as _,ad as j,ae as x,af as A}from"./entry.7414a6eb.js";const B=r({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(e,o){const a=await l[e.name]().then(t=>t.default||t);return()=>u(a,e.layoutProps,o.slots)}}),C=r({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,o){const a=R(),t=m(f),s=t===c()?P():t,n=v(()=>h(e.name)??s.meta.layout??"default"),i=L();o.expose({layoutRef:i});const p=a.deferHydration();return()=>{const d=n.value&&n.value in l,y=s.meta.layoutTransition??b;return g(j,d&&y,{default:()=>u(_,{suspensible:!0,onResolve:()=>{T(p)}},{default:()=>u(N,{layoutProps:S(o.attrs,{ref:i}),key:n.value||void 0,name:n.value,shouldProvide:!e.name,hasTransition:!!y},o.slots)})}).default()}}}),N=r({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(e,o){const a=e.name;return e.shouldProvide&&x(A,{isCurrent:t=>a===(t.meta.layout??"default")}),()=>{var t,s;return!a||typeof a=="string"&&!(a in l)?(s=(t=o.slots).default)==null?void 0:s.call(t):u(B,{key:a,layoutProps:e.layoutProps,name:a},o.slots)}}});export{C as _};