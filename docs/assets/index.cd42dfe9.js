import{ag as lt,c as ue,t as y,v as _,O as P,P as L,ah as Re,I as ct,J as de,K as fe,ai as ut,E as se,r as dt,Q as N,A as w,aj as ft,z as b,ak as V,al as D,R,L as Oe,x as h,M as pt,H as oe,F as U,N as ht,a0 as mt,W as K,B as H,am as yt,y as S,an as gt,ao as bt,ap as wt,aq as _t,ar as Et,as as xt,at as St,a2 as Rt,a3 as Ae,X as Te}from"./entry.7414a6eb.js";import{u as Ot}from"./vue.f36acd1f.580c084e.js";import{u as At}from"./useVuetifyThemeSwitcher.717ac7fa.js";function Ne(e,t){const{title:n,titleTemplate:r,...s}=e;return Ot({title:n,titleTemplate:r,_flatMeta:s},{...t,transform(o){const i=lt({...o._flatMeta});return delete o._flatMeta,{...o,meta:i}}})}const Tt={__name:"mansory",props:{cols:{type:Number,default:3},gap:{type:String,default:"15px"},items:{type:Array,default:()=>[]}},setup(e){const t=e,n=ue(()=>{const s=Math.min(4,Math.max(1,t.cols)),o=Math.ceil(t.items.length/t.cols),i=Array.from({length:t.cols},(c,f)=>t.items.slice(f*o,f*o+o));return{cols:s,items:i}}),r=(s={})=>({...s});return(s,o)=>(y(),_("div",{style:Re(`display:flex; gap: ${t.gap}; width:100%;`)},[(y(!0),_(P,null,L(n.value.items,(i,c)=>(y(),_("div",{style:Re(`
          display: flex;
          flex-direction: column;
          min-width: ${100/n.value.cols}% !important;
          max-width: ${100/n.value.cols}% !important;
          overflow: hidden;
          gap: ${t.gap};
        `)},[(y(!0),_(P,null,L(i,(f,u)=>(y(),_("div",null,[ct(s.$slots,"item",de(fe(r({item:f,column:c,index:u}))))]))),256))],4))),256))],4))}};function Me(e,t){return function(){return e.apply(t,arguments)}}const{toString:Nt}=Object.prototype,{getPrototypeOf:be}=Object,Y=(e=>t=>{const n=Nt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),j=e=>(e=e.toLowerCase(),t=>Y(t)===e),ee=e=>t=>typeof t===e,{isArray:M}=Array,q=ee("undefined");function Ct(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ve=j("ArrayBuffer");function Pt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ve(e.buffer),t}const kt=ee("string"),T=ee("function"),He=ee("number"),te=e=>e!==null&&typeof e=="object",jt=e=>e===!0||e===!1,G=e=>{if(Y(e)!=="object")return!1;const t=be(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},vt=j("Date"),Lt=j("File"),Bt=j("Blob"),Ft=j("FileList"),Dt=e=>te(e)&&T(e.pipe),Ut=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=Y(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},It=j("URLSearchParams"),Mt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),M(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ze(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const qe=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),$e=e=>!q(e)&&e!==qe;function pe(){const{caseless:e}=$e(this)&&this||{},t={},n=(r,s)=>{const o=e&&ze(t,s)||s;G(t[o])&&G(r)?t[o]=pe(t[o],r):G(r)?t[o]=pe({},r):M(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&$(arguments[r],n);return t}const Vt=(e,t,n,{allOwnKeys:r}={})=>($(t,(s,o)=>{n&&T(s)?e[o]=Me(s,n):e[o]=s},{allOwnKeys:r}),e),Ht=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),zt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&be(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$t=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Jt=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!He(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Wt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&be(Uint8Array)),Kt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Gt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Xt=j("HTMLFormElement"),Qt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ce=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Zt=j("RegExp"),Je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Yt=e=>{Je(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},en=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return M(e)?r(e):r(String(e).split(t)),n},tn=()=>{},nn=(e,t)=>(e=+e,Number.isFinite(e)?e:t),ie="abcdefghijklmnopqrstuvwxyz",Pe="0123456789",We={DIGIT:Pe,ALPHA:ie,ALPHA_DIGIT:ie+ie.toUpperCase()+Pe},rn=(e=16,t=We.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function sn(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const on=e=>{const t=new Array(10),n=(r,s)=>{if(te(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=M(r)?[]:{};return $(r,(i,c)=>{const f=n(i,s+1);!q(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},an=j("AsyncFunction"),ln=e=>e&&(te(e)||T(e))&&T(e.then)&&T(e.catch),a={isArray:M,isArrayBuffer:Ve,isBuffer:Ct,isFormData:Ut,isArrayBufferView:Pt,isString:kt,isNumber:He,isBoolean:jt,isObject:te,isPlainObject:G,isUndefined:q,isDate:vt,isFile:Lt,isBlob:Bt,isRegExp:Zt,isFunction:T,isStream:Dt,isURLSearchParams:It,isTypedArray:Wt,isFileList:Ft,forEach:$,merge:pe,extend:Vt,trim:Mt,stripBOM:Ht,inherits:zt,toFlatObject:qt,kindOf:Y,kindOfTest:j,endsWith:$t,toArray:Jt,forEachEntry:Kt,matchAll:Gt,isHTMLForm:Xt,hasOwnProperty:Ce,hasOwnProp:Ce,reduceDescriptors:Je,freezeMethods:Yt,toObjectSet:en,toCamelCase:Qt,noop:tn,toFiniteNumber:nn,findKey:ze,global:qe,isContextDefined:$e,ALPHABET:We,generateString:rn,isSpecCompliantForm:sn,toJSONObject:on,isAsyncFn:an,isThenable:ln};function g(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(g,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ke=g.prototype,Ge={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ge[e]={value:e}});Object.defineProperties(g,Ge);Object.defineProperty(Ke,"isAxiosError",{value:!0});g.from=(e,t,n,r,s,o)=>{const i=Object.create(Ke);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),g.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const cn=null;function he(e){return a.isPlainObject(e)||a.isArray(e)}function Xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ke(e,t,n){return e?e.concat(t).map(function(s,o){return s=Xe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function un(e){return a.isArray(e)&&!e.some(he)}const dn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ne(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,O){return!a.isUndefined(O[m])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new g("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function l(d,m,O){let v=d;if(d&&!O&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&un(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(v=a.toArray(d)))return m=Xe(m),v.forEach(function(W,at){!(a.isUndefined(W)||W===null)&&t.append(i===!0?ke([m],at,o):i===null?m:m+"[]",u(W))}),!1}return he(d)?!0:(t.append(ke(O,m,o),u(d)),!1)}const p=[],x=Object.assign(dn,{defaultVisitor:l,convertValue:u,isVisitable:he});function A(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(v,C){(!(a.isUndefined(v)||v===null)&&s.call(t,v,a.isString(C)?C.trim():C,m,x))===!0&&A(v,m?m.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return A(e),t}function je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function we(e,t){this._pairs=[],e&&ne(e,this,t)}const Qe=we.prototype;Qe.append=function(t,n){this._pairs.push([t,n])};Qe.toString=function(t){const n=t?function(r){return t.call(this,r,je)}:je;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function fn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ze(e,t,n){if(!t)return e;const r=n&&n.encode||fn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new we(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class pn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ve=pn,Ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hn=typeof URLSearchParams<"u"?URLSearchParams:we,mn=typeof FormData<"u"?FormData:null,yn=typeof Blob<"u"?Blob:null,gn={isBrowser:!0,classes:{URLSearchParams:hn,FormData:mn,Blob:yn},protocols:["http","https","file","blob","url","data"]},et=typeof window<"u"&&typeof document<"u",bn=(e=>et&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),wn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),_n=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:et,hasStandardBrowserEnv:bn,hasStandardBrowserWebWorkerEnv:wn},Symbol.toStringTag,{value:"Module"})),k={..._n,...gn};function En(e,t){return ne(e,new k.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return k.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function xn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Sn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function tt(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Sn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(xn(r),s,n,0)}),n}return null}function Rn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const _e={transitional:Ye,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(tt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return En(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return ne(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Rn(t)):t}],transformResponse:[function(t){const n=this.transitional||_e.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?g.from(c,g.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:k.classes.FormData,Blob:k.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{_e.headers[e]={}});const Ee=_e,On=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),An=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&On[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Le=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function X(e){return e===!1||e==null?e:a.isArray(e)?e.map(X):String(e)}function Tn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Nn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ae(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class re{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,u){const l=z(f);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||u===!0||u===void 0&&s[p]!==!1)&&(s[p||f]=X(c))}const i=(c,f)=>a.forEach(c,(u,l)=>o(u,l,f));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Nn(t)?i(An(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Tn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ae(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=z(i),i){const c=a.findKey(r,i);c&&(!n||ae(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ae(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=X(s),delete n[o];return}const c=t?Cn(o):String(o).trim();c!==o&&delete n[o],n[c]=X(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Le]=this[Le]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=z(i);r[c]||(Pn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(re.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(re);const B=re;function le(e,t){const n=this||Ee,r=t||n,s=B.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function nt(e){return!!(e&&e.__CANCEL__)}function J(e,t,n){g.call(this,e??"canceled",g.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(J,g,{__CANCEL__:!0});function kn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new g("Request failed with status code "+n.status,[g.ERR_BAD_REQUEST,g.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const jn=k.hasStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,c){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(o)&&f.push("path="+o),a.isString(i)&&f.push("domain="+i),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function vn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ln(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function rt(e,t){return e&&!vn(t)?Ln(e,t):t}const Bn=k.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Fn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Dn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),l=r[o];i||(i=u),n[s]=f,r[s]=u;let p=o,x=0;for(;p!==s;)x+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const A=l&&u-l;return A?Math.round(x*1e3/A):void 0}}function Be(e,t){let n=0;const r=Dn(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,f=r(c),u=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:f||void 0,estimated:f&&i&&u?(i-o)/f:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Un=typeof XMLHttpRequest<"u",In=Un&&function(e){return new Promise(function(n,r){let s=e.data;const o=B.from(e.headers).normalize(),i=e.responseType;let c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let u;if(a.isFormData(s)){if(k.hasStandardBrowserEnv||k.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((u=o.getContentType())!==!1){const[d,...m]=u?u.split(";").map(O=>O.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...m].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+m))}const p=rt(e.baseURL,e.url);l.open(e.method.toUpperCase(),Ze(p,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function x(){if(!l)return;const d=B.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),O={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:d,config:e,request:l};kn(function(C){n(C),f()},function(C){r(C),f()},O),l=null}if("onloadend"in l?l.onloadend=x:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(x)},l.onabort=function(){l&&(r(new g("Request aborted",g.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new g("Network Error",g.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const O=e.transitional||Ye;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new g(m,O.clarifyTimeoutError?g.ETIMEDOUT:g.ECONNABORTED,e,l)),l=null},k.hasStandardBrowserEnv){const d=Bn(p)&&e.xsrfCookieName&&jn.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&a.forEach(o.toJSON(),function(m,O){l.setRequestHeader(O,m)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=d=>{l&&(r(!d||d.type?new J(null,e,l):d),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const A=Fn(p);if(A&&k.protocols.indexOf(A)===-1){r(new g("Unsupported protocol "+A+":",g.ERR_BAD_REQUEST,e));return}l.send(s||null)})},me={http:cn,xhr:In};a.forEach(me,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fe=e=>`- ${e}`,Mn=e=>a.isFunction(e)||e===null||e===!1,st={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Mn(n)&&(r=me[(i=String(n)).toLowerCase()],r===void 0))throw new g(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Fe).join(`
`):" "+Fe(o[0]):"as no adapter specified";throw new g("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:me};function ce(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new J(null,e)}function De(e){return ce(e),e.headers=B.from(e.headers),e.data=le.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),st.getAdapter(e.adapter||Ee.adapter)(e).then(function(r){return ce(e),r.data=le.call(e,e.transformResponse,r),r.headers=B.from(r.headers),r},function(r){return nt(r)||(ce(e),r&&r.response&&(r.response.data=le.call(e,e.transformResponse,r.response),r.response.headers=B.from(r.response.headers))),Promise.reject(r)})}const Ue=e=>e instanceof B?e.toJSON():e;function I(e,t){t=t||{};const n={};function r(u,l,p){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:p},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,p){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,p)}else return r(u,l,p)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,p){if(p in t)return r(u,l);if(p in e)return r(void 0,u)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(Ue(u),Ue(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=f[l]||s,x=p(e[l],t[l],l);a.isUndefined(x)&&p!==c||(n[l]=x)}),n}const ot="1.6.1",xe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ie={};xe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ot+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new g(s(i," has been removed"+(n?" in "+n:"")),g.ERR_DEPRECATED);return n&&!Ie[i]&&(Ie[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Vn(e,t,n){if(typeof e!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new g("option "+o+" must be "+f,g.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new g("Unknown option "+o,g.ERR_BAD_OPTION)}}const ye={assertOptions:Vn,validators:xe},F=ye.validators;class Z{constructor(t){this.defaults=t,this.interceptors={request:new ve,response:new ve}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=I(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ye.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ye.assertOptions(s,{encode:F.function,serialize:F.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=B.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let l,p=0,x;if(!f){const d=[De.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,u),x=d.length,l=Promise.resolve(n);p<x;)l=l.then(d[p++],d[p++]);return l}x=c.length;let A=n;for(p=0;p<x;){const d=c[p++],m=c[p++];try{A=d(A)}catch(O){m.call(this,O);break}}try{l=De.call(this,A)}catch(d){return Promise.reject(d)}for(p=0,x=u.length;p<x;)l=l.then(u[p++],u[p++]);return l}getUri(t){t=I(this.defaults,t);const n=rt(t.baseURL,t.url);return Ze(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){Z.prototype[t]=function(n,r){return this.request(I(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(I(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}Z.prototype[t]=n(),Z.prototype[t+"Form"]=n(!0)});const Q=Z;class Se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new J(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Se(function(s){t=s}),cancel:t}}}const Hn=Se;function zn(e){return function(n){return e.apply(null,n)}}function qn(e){return a.isObject(e)&&e.isAxiosError===!0}const ge={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ge).forEach(([e,t])=>{ge[t]=e});const $n=ge;function it(e){const t=new Q(e),n=Me(Q.prototype.request,t);return a.extend(n,Q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return it(I(e,s))},n}const E=it(Ee);E.Axios=Q;E.CanceledError=J;E.CancelToken=Hn;E.isCancel=nt;E.VERSION=ot;E.toFormData=ne;E.AxiosError=g;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=zn;E.isAxiosError=qn;E.mergeConfig=I;E.AxiosHeaders=B;E.formToJSON=e=>tt(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=st.getAdapter;E.HttpStatusCode=$n;E.default=E;const Jn=E;const Wn={style:{position:"fixed",top:"15px",right:"15px"},"aria-label":"Navegação"},Kn={class:"d-flex align-center pe-4",style:{gap:"15px"}},Gn={key:2,class:"d-flex flex-column py-5",style:{width:"100vw !important",gap:"20px"}},Xn=h("br",null,null,-1),Qn={class:"d-flex flex-wrap align-center",style:{gap:"10px"}},Zn=["href","aria-label"],Yn=["src"],er={class:"d-flex flex-wrap align-center",style:{gap:"10px"}},tr=["href","aria-label"],nr=["src"],rr=h("br",null,null,-1),sr=["innerHTML"],or=h("h1",null,"Skills",-1),ir=h("br",null,null,-1),ar={class:"d-flex flex-column",style:{gap:"20px"}},lr={key:0,class:"d-flex align-center"},cr={style:{"min-width":"150px","max-width":"150px"}},ur={class:"flex-grow-1"},dr={class:"d-block text-right",style:{"min-width":"50px","max-width":"50px"}},fr=h("h1",null,"Experiências",-1),pr=h("br",null,null,-1),hr={class:"d-flex flex-column",style:{gap:"35px"}},mr={class:"ps-5",style:{"border-left":"solid 5px #444"}},yr={class:"mb-2"},gr={key:0,class:"d-flex align-center"},br={class:"d-flex align-center"},wr=h("div",{class:"px-2"},"~",-1),_r={key:1,class:"d-flex align-center"},Er=["innerHTML"],xr=h("h1",null,"Projetos",-1),Sr=h("br",null,null,-1),Rr={class:"h-100 px-md-10"},Or={class:"h-100 px-md-10 d-flex align-center"},Ar=["src"],Tr={class:"d-md-none text-white",style:{position:"fixed",left:"0",bottom:"0",width:"100%",background:"#000000bb"}},Nr={class:"d-flex align-center"},Cr=h("div",{class:"px-2"},"~",-1),Pr=["innerHTML"],kr={class:"flex-grow-1 font-weight-bold"},jr={class:"d-flex align-center"},vr=["innerHTML"],Lr=["innerHTML"],Br=["src"],Ir={__name:"index",setup(e){const t=ut(),n=At(),r=se({ready:!1,data:!1,async load(){try{let{data:i}=await Jn.get("https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/linkedin-resume.json");i.projects=i.projects.sort((c,f)=>c.dateInterval.start<c.dateInterval.final?-1:c.dateInterval.start>c.dateInterval.final?1:0),r.data=i,Ne({title:i.profile.headline,ogTitle:i.profile.headline,description:i.profile.headline,ogDescription:i.profile.headline,ogImage:"",twitterCard:"summary_large_image"})}catch{}r.ready=!0},projectsImages:ue(()=>{let i=[];return r.data.projects.map(c=>{c.meta.images.map(f=>{i.push({image:f,project:c})})}),i})});dt(null);const s=se({show:!1,icon:"solar:hamburger-menu-outline",items:[{text:"Info",href:"#info"},{text:"Skills",href:"#skills"},{text:"Experiências",href:"#experiencias"},{text:"Projetos",href:"#projetos"},{icon:ue(()=>n.current=="light"?"material-symbols:dark-mode":"material-symbols:light-mode"),onClick:i=>{n.switch()}}],defaults:{VBtn:{flat:!0}}}),o=se({dialog:!1,open(i){o.dialog=i.url},close(){o.dialog=!1}});return Ne({title:"Loading",ogTitle:"Loading",description:"Loading",ogDescription:"Loading",ogImage:"",twitterCard:"summary_large_image"}),r.load(),(i,c)=>{const f=Tt;return y(),N(ft,null,{default:w(()=>[b(_t,null,{default:w(()=>[r.ready?R("",!0):(y(),N(V,{key:0,class:"d-flex align-center justify-center"},{default:w(()=>[b(D,{icon:"svg-spinners:180-ring-with-bg",size:"100",color:"primary"})]),_:1})),b(Oe,{defaults:s.defaults},{default:w(()=>[h("div",Wn,[b(pt,{location:"start"},{activator:w(u=>[oe(t).mobile.value?R("",!0):(y(),N(U,ht({key:0,icon:s.icon},u.props),null,16,["icon"]))]),default:w(()=>[b(Oe,{defaults:s.defaults},{default:w(()=>[h("div",Kn,[(y(!0),_(P,null,L(s.items,u=>(y(),N(U,de(fe(u)),null,16))),256))])]),_:1},8,["defaults"])]),_:1}),oe(t).mobile.value?(y(),N(U,{key:0,icon:s.icon,onClick:c[0]||(c[0]=u=>s.show=!0),"aria-label":"Navegação"},null,8,["icon"])):R("",!0)])]),_:1},8,["defaults"]),oe(t).mobile.value?(y(),N(mt,{key:1,modelValue:s.show,"onUpdate:modelValue":c[1]||(c[1]=u=>s.show=u),location:"end",width:"300",style:{position:"fixed",top:"0"}},{default:w(()=>[b(K,null,{default:w(()=>[H("Seções")]),_:1}),b(yt,{"aria-label":"Seções"},{default:w(()=>[(y(!0),_(P,null,L(s.items,u=>(y(),N(Et,de(fe(u)),{default:w(()=>[u.icon?(y(),N(D,{key:0,icon:u.icon},null,8,["icon"])):R("",!0)]),_:2},1040))),256))]),_:1})]),_:1},8,["modelValue"])):R("",!0),r.ready?(y(),_("div",Gn,[b(V,{id:"info"},{default:w(()=>[h("h1",null,S(r.data.profile.firstName)+" "+S(r.data.profile.lastName),1),h("h2",null,S(r.data.profile.headline),1),Xn,h("div",Qn,[(y(!0),_(P,null,L(r.data.links,u=>(y(),_("a",{href:u.url,target:"_blank","aria-label":u.name},[h("img",{src:u.icon,alt:"",height:"28",loading:"lazy"},null,8,Yn)],8,Zn))),256))]),h("div",er,[(y(!0),_(P,null,L(r.data.contacts,u=>(y(),_("a",{href:u.url,target:"_blank","aria-label":u.name},[h("img",{src:u.icon,alt:"",height:"28",loading:"lazy"},null,8,nr)],8,tr))),256))]),rr,r.data.profile.summary?(y(),_("div",{key:0,innerHTML:r.data.profile.summary.replace(/\n/g,"<br />"),style:{"white-space":"pre-line"}},null,8,sr)):R("",!0)]),_:1}),b(V,{id:"skills"},{default:w(()=>[or,ir,h("div",ar,[(y(!0),_(P,null,L(r.data.skills,u=>(y(),_(P,null,[u.meta?(y(),_("div",lr,[h("div",cr,S(u.name),1),h("div",ur,[b(xt,{"model-value":100*u.meta.rating/5,height:"5","aria-label":u.name},null,8,["model-value","aria-label"])]),h("small",dr,S(u.meta.rating)+" / 5",1)])):R("",!0)],64))),256))])]),_:1}),b(V,{id:"experiencias"},{default:w(()=>[fr,pr,h("div",hr,[(y(!0),_(P,null,L(r.data.positions,u=>(y(),_("div",mr,[h("h2",yr,S(u.title),1),u.companyName?(y(),_("h3",gr,[b(D,{icon:"material-symbols:alternate-email",size:"16",class:"me-1"}),h("span",null,S(u.companyName),1)])):R("",!0),h("div",br,[b(D,{icon:"material-symbols:calendar-month",size:"16",class:"me-1"}),h("div",null,S(u.dateInterval.start.formatted||"Atualmente"),1),wr,h("div",null,S(u.dateInterval.final.formatted||"Atualmente"),1)]),u.location.fullName?(y(),_("div",_r,[b(D,{icon:"ic:round-place",size:"16",class:"me-1"}),h("span",null,S(u.location.fullName),1)])):R("",!0),u.description?(y(),_("div",{key:2,innerHTML:u.description.replace(/\n/g,"<br />"),class:"mt-3"},null,8,Er)):R("",!0)]))),256))])]),_:1}),b(V,{id:"projetos"},{default:w(()=>[xr,Sr,b(gt,{modelValue:o.dialog,"onUpdate:modelValue":c[5]||(c[5]=u=>o.dialog=u),width:"1000"},{default:w(()=>[b(bt,{modelValue:o.dialog,"onUpdate:modelValue":c[4]||(c[4]=u=>o.dialog=u),height:"auto","hide-delimiters":!0},{default:w(u=>[(y(!0),_(P,null,L(r.projectsImages,l=>(y(),N(St,{value:l.image.url},{default:w(()=>[h("div",Rr,[h("div",Or,[b(Rt,{"no-gutters":"",class:"bg-white rounded-lg elevation-10",style:{position:"relative","max-height":"100%",overflow:"hidden"}},{default:w(()=>[b(Ae,{cols:"12",md:"7",style:{"max-height":"80vh",overflow:"auto",position:"relative"}},{default:w(()=>[b(U,{flat:"",icon:"mdi-close",size:"30",onClick:c[2]||(c[2]=p=>o.close()),class:"d-md-none",style:{position:"fixed",top:"10px",right:"20px"}}),h("img",{src:l.image.url,alt:"",style:{width:"100%"}},null,8,Ar),h("div",Tr,[b(K,{class:"font-weight-bold"},{default:w(()=>[H(S(l.project.title),1)]),_:2},1024),b(Te,{class:"d-flex flex-column",style:{gap:"15px"}},{default:w(()=>[h("div",Nr,[b(D,{icon:"material-symbols:calendar-month",size:"16",class:"me-1"}),h("div",null,S(l.project.dateInterval.start.formatted||"Atualmente"),1),Cr,h("div",null,S(l.project.dateInterval.final.formatted||"Atualmente"),1)]),l.project.description?(y(),_("div",{key:0,innerHTML:l.project.description.replace(/\n/g,"<br />")},null,8,Pr)):R("",!0),l.project.url?(y(),N(U,{key:1,color:"white",href:l.project.url,target:"_blank"},{default:w(()=>[H(" Visualizar ")]),_:2},1032,["href"])):R("",!0)]),_:2},1024)])]),_:2},1024),b(Ae,{cols:"12",md:"5",class:"d-none d-md-block bg-grey-lighten-3",style:{"max-height":"80vh",overflow:"auto"}},{default:w(()=>[b(K,{class:"d-flex align-center"},{default:w(()=>[h("div",kr,S(l.project.title),1),b(U,{flat:"",icon:"mdi-close",size:"30",onClick:c[3]||(c[3]=p=>o.close())})]),_:2},1024),b(Te,{class:"d-flex flex-column",style:{gap:"15px"}},{default:w(()=>[h("div",jr,[b(D,{icon:"material-symbols:calendar-month",size:"16",class:"me-1"}),h("div",null,S(l.project.dateInterval.final.formatted||"Atualmente"),1)]),l.image.description?(y(),_("h4",{key:0,innerHTML:l.image.description.replace(/\n/g,"<br />")},null,8,vr)):R("",!0),l.project.description?(y(),_("div",{key:1,innerHTML:l.project.description.replace(/\n/g,"<br />")},null,8,Lr)):R("",!0),l.project.url?(y(),N(U,{key:2,color:"primary",theme:"light",variant:"outlined",href:l.project.url,target:"_blank"},{default:w(()=>[H(" Visualizar ")]),_:2},1032,["href"])):R("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)])])]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),b(f,{cols:3,items:r.projectsImages},{item:w(u=>[b(wt,{onClick:l=>o.open(u.item.image)},{default:w(()=>[b(K,null,{default:w(()=>[H(S(u.item.project.title),1)]),_:2},1024),h("img",{src:u.item.image.url,alt:"",style:{width:"100%"}},null,8,Br)]),_:2},1032,["onClick"])]),_:1},8,["items"])]),_:1}),h("pre",null,S(i.btnRefs),1)])):R("",!0)]),_:1})]),_:1})}}};export{Ir as default};