import{_ as n}from"./crud.df9398da.js";import{_ as s,M as c,A as l,t as r,x as d,y as u,z as o,N as t}from"./entry.22f4b26d.js";const _={},i=d("th",null,"Nome",-1);function p(V,f){const m=n;return r(),c(m,{model:"page",tableRowActions:{test:{title:"Edit",icon:"mdi-home"}}},{"table-header":l(e=>[i]),"table-row":l(e=>[d("td",null,u(e.item.name),1)]),form:l(e=>[o(t,{label:"Title",modelValue:e.model.data.name,"onUpdate:modelValue":a=>e.model.data.name=a},null,8,["modelValue","onUpdate:modelValue"]),o(t,{label:"Slug",modelValue:e.model.data.slug,"onUpdate:modelValue":a=>e.model.data.slug=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1})}const x=s(_,[["render",p]]);export{x as default};