import{H as U,aw as J,o as z,ak as L,r as S,aR as W,aS as Q,aT as X,aj as E,aU as Y,aV as Z,c as q,aW as ee}from"./entry.2e838e42.js";function j(e){return Q()?(X(e),!0):!1}function A(e){return typeof e=="function"?e():U(e)}const R=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const te=Object.prototype.toString,ne=e=>te.call(e)==="[object Object]",H=()=>{};function re(e,t){function n(...i){return new Promise((o,r)=>{Promise.resolve(e(()=>t.apply(this,i),{fn:t,thisArg:this,args:i})).then(o).catch(r)})}return n}const k=e=>e();function oe(e=k){const t=S(!0);function n(){t.value=!1}function i(){t.value=!0}const o=(...r)=>{t.value&&e(...r)};return{isActive:W(t),pause:n,resume:i,eventFilter:o}}function ie(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const i=t;t=void 0,i&&await i},n}function ae(...e){if(e.length!==1)return Y(...e);const t=e[0];return typeof t=="function"?W(Z(()=>({get:t,set:H}))):S(t)}function ue(e,t,n={}){const{eventFilter:i=k,...o}=n;return E(e,re(i,t),o)}function se(e,t,n={}){const{eventFilter:i,...o}=n,{eventFilter:r,pause:c,resume:l,isActive:s}=oe(i);return{stop:ue(e,t,{...o,eventFilter:r}),pause:c,resume:l,isActive:s}}function le(e,t=!0){J()?z(e):t?e():L(e)}function ce(e,t,n={}){const{immediate:i=!0}=n,o=S(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function l(){o.value=!1,c()}function s(...u){c(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,e(...u)},A(t))}return i&&(o.value=!0,R&&s()),j(l),{isPending:W(o),start:s,stop:l}}function G(e){var t;const n=A(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=R?window:void 0,fe=R?window.document:void 0,$=R?window.navigator:void 0;function N(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=M):[t,n,i,o]=e,!t)return H;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],c=()=>{r.forEach(d=>d()),r.length=0},l=(d,f,b,y)=>(d.addEventListener(f,b,y),()=>d.removeEventListener(f,b,y)),s=E(()=>[G(t),A(o)],([d,f])=>{if(c(),!d)return;const b=ne(f)?{...f}:f;r.push(...n.flatMap(y=>i.map(O=>l(d,y,O,b))))},{immediate:!0,flush:"post"}),u=()=>{s(),c()};return j(u),u}function de(){const e=S(!1);return J()&&z(()=>{e.value=!0}),e}function x(e){const t=de();return q(()=>(t.value,!!e()))}function P(e,t={}){const{controls:n=!1,navigator:i=$}=t,o=x(()=>i&&"permissions"in i);let r;const c=typeof e=="string"?{name:e}:e,l=S(),s=()=>{r&&(l.value=r.state)},u=ie(async()=>{if(o.value){if(!r)try{r=await i.permissions.query(c),N(r,"change",s),s()}catch{l.value="prompt"}return r}});return u(),n?{state:l,isSupported:o,query:u}:l}function Se(e={}){const{navigator:t=$,read:n=!1,source:i,copiedDuring:o=1500,legacy:r=!1}=e,c=x(()=>t&&"clipboard"in t),l=P("clipboard-read"),s=P("clipboard-write"),u=q(()=>c.value||r),d=S(""),f=S(!1),b=ce(()=>f.value=!1,o);function y(){c.value&&l.value!=="denied"?t.clipboard.readText().then(p=>{d.value=p}):d.value=w()}u.value&&n&&N(["copy","cut"],y);async function O(p=A(i)){u.value&&p!=null&&(c.value&&s.value!=="denied"?await t.clipboard.writeText(p):g(p),d.value=p,f.value=!0,b.start())}function g(p){const m=document.createElement("textarea");m.value=p??"",m.style.position="absolute",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),m.remove()}function w(){var p,m,_;return(_=(m=(p=document==null?void 0:document.getSelection)==null?void 0:p.call(document))==null?void 0:m.toString())!=null?_:""}return{isSupported:u,text:d,copied:f,copy:O}}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__",pe=me();function me(){return F in C||(C[F]=C[F]||{}),C[F]}function ve(e,t){return pe[e]||t}function ye(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ge={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},V="vueuse-storage";function he(e,t,n,i={}){var o;const{flush:r="pre",deep:c=!0,listenToStorageChanges:l=!0,writeDefaults:s=!0,mergeDefaults:u=!1,shallow:d,window:f=M,eventFilter:b,onError:y=a=>{console.error(a)},initOnMounted:O}=i,g=(d?ee:S)(typeof t=="function"?t():t);if(!n)try{n=ve("getDefaultStorage",()=>{var a;return(a=M)==null?void 0:a.localStorage})()}catch(a){y(a)}if(!n)return g;const w=A(t),p=ye(w),m=(o=i.serializer)!=null?o:ge[p],{pause:_,resume:D}=se(g,()=>B(g.value),{flush:r,deep:c,eventFilter:b});return f&&l&&le(()=>{N(f,"storage",T),N(f,V,K),O&&T()}),O||T(),g;function B(a){try{if(a==null)n.removeItem(e);else{const v=m.write(a),h=n.getItem(e);h!==v&&(n.setItem(e,v),f&&f.dispatchEvent(new CustomEvent(V,{detail:{key:e,oldValue:h,newValue:v,storageArea:n}})))}}catch(v){y(v)}}function I(a){const v=a?a.newValue:n.getItem(e);if(v==null)return s&&w!==null&&n.setItem(e,m.write(w)),w;if(!a&&u){const h=m.read(v);return typeof u=="function"?u(h,w):p==="object"&&!Array.isArray(h)?{...w,...h}:h}else return typeof v!="string"?v:m.read(v)}function K(a){T(a.detail)}function T(a){if(!(a&&a.storageArea!==n)){if(a&&a.key==null){g.value=w;return}if(!(a&&a.key!==e)){_();try{(a==null?void 0:a.newValue)!==m.write(g.value)&&(g.value=I(a))}catch(v){y(v)}finally{a?L(D):D()}}}}}function we(e,t,n={}){const{window:i=M,...o}=n;let r;const c=x(()=>i&&"MutationObserver"in i),l=()=>{r&&(r.disconnect(),r=void 0)},s=E(()=>G(e),f=>{l(),c.value&&i&&f&&(r=new MutationObserver(t),r.observe(f,o))},{immediate:!0}),u=()=>r==null?void 0:r.takeRecords(),d=()=>{l(),s()};return j(d),{isSupported:c,stop:d,takeRecords:u}}function Oe(e=null,t={}){var n,i;const{document:o=fe}=t,r=ae((n=e??(o==null?void 0:o.title))!=null?n:null),c=e&&typeof e=="function";function l(s){if(!("titleTemplate"in t))return s;const u=t.titleTemplate||"%s";return typeof u=="function"?u(s):A(u).replace(/%s/g,s)}return E(r,(s,u)=>{s!==u&&o&&(o.title=l(typeof s=="string"?s:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&o&&!c&&we((i=o.head)==null?void 0:i.querySelector("title"),()=>{o&&o.title!==r.value&&(r.value=l(o.title))},{childList:!0}),r}export{Oe as a,he as b,Se as u};