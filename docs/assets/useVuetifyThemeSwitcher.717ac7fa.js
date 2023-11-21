import{H as K,az as D,o as N,ab as R,r as E,aE as x,aw as F,aF as $,aG as q,aH as B,aI as Q,aJ as U,c as X,aK as Y,E as Z}from"./entry.7414a6eb.js";function J(e){return $()?(q(e),!0):!1}function _(e){return typeof e=="function"?e():K(e)}const V=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ee=Object.prototype.toString,te=e=>ee.call(e)==="[object Object]",z=()=>{};function ne(e,t){function n(...o){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(r).catch(i)})}return n}const H=e=>e();function re(e=H){const t=E(!0);function n(){t.value=!1}function o(){t.value=!0}const r=(...i)=>{t.value&&e(...i)};return{isActive:x(t),pause:n,resume:o,eventFilter:r}}function oe(...e){if(e.length!==1)return B(...e);const t=e[0];return typeof t=="function"?x(Q(()=>({get:t,set:z}))):E(t)}function ie(e,t,n={}){const{eventFilter:o=H,...r}=n;return F(e,ne(o,t),r)}function ue(e,t,n={}){const{eventFilter:o,...r}=n,{eventFilter:i,pause:c,resume:p,isActive:s}=re(o);return{stop:ie(e,t,{...r,eventFilter:i}),pause:c,resume:p,isActive:s}}function se(e,t=!0){D()?N(e):t?e():R(e)}function L(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=V?window:void 0,ae=V?window.document:void 0;function W(...e){let t,n,o,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,r]=e,t=M):[t,n,o,r]=e,!t)return z;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const i=[],c=()=>{i.forEach(d=>d()),i.length=0},p=(d,l,w,m)=>(d.addEventListener(l,w,m),()=>d.removeEventListener(l,w,m)),s=F(()=>[L(t),_(r)],([d,l])=>{if(c(),!d)return;const w=te(l)?{...l}:l;i.push(...n.flatMap(m=>o.map(b=>p(d,m,b,w))))},{immediate:!0,flush:"post"}),a=()=>{s(),c()};return J(a),a}function le(){const e=E(!1);return D()&&N(()=>{e.value=!0}),e}function ce(e){const t=le();return X(()=>(t.value,!!e()))}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A="__vueuse_ssr_handlers__",fe=de();function de(){return A in O||(O[A]=O[A]||{}),O[A]}function pe(e,t){return fe[e]||t}function me(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const he={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},C="vueuse-storage";function ye(e,t,n,o={}){var r;const{flush:i="pre",deep:c=!0,listenToStorageChanges:p=!0,writeDefaults:s=!0,mergeDefaults:a=!1,shallow:d,window:l=M,eventFilter:w,onError:m=u=>{console.error(u)},initOnMounted:b}=o,h=(d?U:E)(typeof t=="function"?t():t);if(!n)try{n=pe("getDefaultStorage",()=>{var u;return(u=M)==null?void 0:u.localStorage})()}catch(u){m(u)}if(!n)return h;const y=_(t),T=me(y),g=(r=o.serializer)!=null?r:he[T],{pause:G,resume:j}=ue(h,()=>P(h.value),{flush:i,deep:c,eventFilter:w});return l&&p&&se(()=>{W(l,"storage",S),W(l,C,I),b&&S()}),b||S(),h;function P(u){try{if(u==null)n.removeItem(e);else{const f=g.write(u),v=n.getItem(e);v!==f&&(n.setItem(e,f),l&&l.dispatchEvent(new CustomEvent(C,{detail:{key:e,oldValue:v,newValue:f,storageArea:n}})))}}catch(f){m(f)}}function k(u){const f=u?u.newValue:n.getItem(e);if(f==null)return s&&y!==null&&n.setItem(e,g.write(y)),y;if(!u&&a){const v=g.read(f);return typeof a=="function"?a(v,y):T==="object"&&!Array.isArray(v)?{...y,...v}:v}else return typeof f!="string"?f:g.read(f)}function I(u){S(u.detail)}function S(u){if(!(u&&u.storageArea!==n)){if(u&&u.key==null){h.value=y;return}if(!(u&&u.key!==e)){G();try{(u==null?void 0:u.newValue)!==g.write(h.value)&&(h.value=k(u))}catch(f){m(f)}finally{u?R(j):j()}}}}}function ve(e,t,n={}){const{window:o=M,...r}=n;let i;const c=ce(()=>o&&"MutationObserver"in o),p=()=>{i&&(i.disconnect(),i=void 0)},s=F(()=>L(e),l=>{p(),c.value&&o&&l&&(i=new MutationObserver(t),i.observe(l,r))},{immediate:!0}),a=()=>i==null?void 0:i.takeRecords(),d=()=>{p(),s()};return J(d),{isSupported:c,stop:d,takeRecords:a}}function ge(e=null,t={}){var n,o;const{document:r=ae}=t,i=oe((n=e??(r==null?void 0:r.title))!=null?n:null),c=e&&typeof e=="function";function p(s){if(!("titleTemplate"in t))return s;const a=t.titleTemplate||"%s";return typeof a=="function"?a(s):_(a).replace(/%s/g,s)}return F(i,(s,a)=>{s!==a&&r&&(r.title=p(typeof s=="string"?s:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&r&&!c&&ve((o=r.head)==null?void 0:o.querySelector("title"),()=>{r&&r.title!==i.value&&(i.value=p(r.title))},{childList:!0}),i}const be=(e={})=>{const t=Y();e={themes:[],...e},e.themes.length==0&&(e.themes=Object.keys(t.computedThemes.value)),e.themes=e.themes.filter(r=>typeof t.computedThemes.value[r]=="object");const n=ye("vuetify-theme-switcher-current",e.themes[0]||""),o=Z({current:n.value,themes:e.themes,switch(r=null){if(r===null){const i=Math.max(0,o.themes.indexOf(o.current)),c=i+1>o.themes.length-1?0:i+1;r=o.themes[c],n.value=r}o.current=r,t.global.name.value=r}});return t.global.name.value=o.current,o};export{ge as a,be as u};