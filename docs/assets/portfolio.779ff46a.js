import{r as Ut,o as Qt,t as S,v as D,x,Q as Z,A as Y,a6 as Gt,P as U,O as Q,y as G,H as Jt,R as Et,ab as Kt,N as te,a9 as ee,z as T,ad as se,W as ie,B as St,ac as ne,ag as oe,Z as re,F as ae}from"./entry.2e838e42.js";import{u as le}from"./useHelper.00913e96.js";var he=Object.defineProperty,ce=(s,t,e)=>t in s?he(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,z=(s,t,e)=>(ce(s,typeof t!="symbol"?t+"":t,e),e),de=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)},w=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},y=(s,t,e)=>(de(s,t,"access private method"),e);const K=s=>document.contains(A(s)),Ht=s=>{if(!s)return!1;try{const{constructor:t}=s,{prototype:e}=t,{hasOwnProperty:i}=Object.prototype;return t&&e&&i.call(e,"isPrototypeOf")}catch{return!1}},xt=s=>typeof s=="function",V=s=>!isNaN(Number(s)),J=s=>s==null,A=s=>s instanceof HTMLElement?s:document.querySelector(s),E=s=>{const t="touches"in s?s.touches[0]:s;return{clientX:t.clientX,clientY:t.clientY}},M=s=>({clientX:[...s].map(t=>t.clientX).reduce((t,e)=>t+e)/s.length,clientY:[...s].map(t=>t.clientY).reduce((t,e)=>t+e)/s.length}),X=s=>{const{width:t,height:e,top:i,left:o,bottom:r}=s.getBoundingClientRect();return{width:t,height:e,top:i,left:o,bottom:r}},Yt=s=>s.length>=2?Math.hypot(s[0].clientX-s[1].clientX,s[0].clientY-s[1].clientY):0,C=(s,t)=>{for(const[e,i]of Object.entries(t))typeof i=="string"&&s.style.setProperty(e,i)},R=(s,t)=>{for(const[e,i]of Object.entries(t))s.setAttribute(e,i)},v=(s,t)=>{for(const[e,i]of Object.entries(t))s[e]=i},$=(s,t,e)=>Math.min(Math.max(s,t),e),k=s=>{const t=+(Math.round(+(s+"e+2"))+"e-2");return isNaN(t)?0:t},Xt=s=>{throw new Error(s)},tt=s=>console.warn(s),O=(s="div",t,e,i)=>{const o=document.createElement(s);return t&&o.classList.add(...t.split(" ")),e&&R(o,e),i&&(o.innerHTML=i),o},g="zoomist",me=`${g}-container`,$t=`${g}-wrapper`,et=`${g}-image`,W=`${g}-slider`,ue=`${g}-slider-wrapper`,fe=`${g}-slider-bar`,ge=`${g}-slider-button`,P=`${g}-zoomer`,pe=`${g}-zoomer-button`,ft=`${g}-zoomer-icon`,gt=`${g}-zoomer-in`,pt=`${g}-zoomer-out`,_t=`${g}-zoomer-reset`,_e=`${g}-zoomer-disabled`,ve={tabindex:"0",role:"slider","aria-label":"slider for zoomist","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"0","aria-disabled":"false"},vt={tabindex:"0",role:"button","aria-disabled":"false"},be={...vt,"aria-label":"button for zoom in zoomist"},we={...vt,"aria-label":"button for zoom out zoomist"},ye={...vt,"aria-label":"button for reset zoomist scale"},ze=typeof window<"u"&&typeof window.document<"u",L=!!(ze&&"ontouchstart"in window),Ee=L?"touchstart":"mousedown",I=L?"touchmove":"mousemove",B=L?"touchend":"mouseup",Se="wheel",xe=["left","right","center"],Ye=["top","bottom","center"],Dt="--scale",Lt="--translate-x",Tt="--translate-y",Xe="--value",At={draggable:!0,wheelable:!0,pinchable:!0,bounds:!0,zoomRatio:.1,maxScale:10,minScale:1,initScale:null},$e={el:null,direction:"horizontal"},De={el:`.${W}`},Le={el:null,inEl:null,outEl:null,resetEl:null,disabledClass:_e},Te={el:`.${P}`,inEl:`.${gt}`,outEl:`.${pt}`,resetEl:`.${_t}`},ke={ready:null,reset:null,resize:null,beforeDestroy:null,destroy:null,beforeUpdate:null,update:null,zoom:null,wheel:null,dragStart:null,drag:null,dragEnd:null,pinchStart:null,pinch:null,pinchEnd:null,slideStart:null,slide:null,slideEnd:null},Ce={slider:null,zoomer:null},Oe=`
<svg viewBox="0 0 12 12" class="${ft}">
  <polygon points="12,5.5 6.5,5.5 6.5,0 5.5,0 5.5,5.5 0,5.5 0,6.5 5.5,6.5 5.5,12 6.5,12 6.5,6.5 12,6.5 "/>
</svg>
`,Re=`
<svg viewBox="0 0 12 12" class="${ft}">
  <rect y="5.5" width="12" height="1"/>
</svg>
`,We=`
<svg viewBox="0 0 12 12" class="${ft}">
  <path d="m7.45,1.27l.35-.22c.26-.17.34-.52.17-.78-.17-.27-.52-.34-.78-.17l-1.54.99-.19.13-.11.46,1.12,1.75c.11.17.29.26.48.26.1,0,.21-.03.31-.09.26-.17.34-.52.17-.78l-.29-.46c1.85.5,3.22,2.17,3.22,4.18,0,2.39-1.95,4.34-4.34,4.34S1.66,8.92,1.66,6.52c0-1.15.44-2.23,1.25-3.05.22-.22.22-.58,0-.8-.22-.22-.58-.22-.8,0-1.02,1.03-1.58,2.4-1.58,3.85,0,3.02,2.46,5.48,5.48,5.48s5.48-2.46,5.48-5.48c0-2.51-1.71-4.62-4.02-5.26Z"/>
</svg>
`,Ne={on(s,t){if(!t||!xt(t))return this;const{__events__:e}=this;return s.split(" ").forEach(i=>{const o=i;e[o]||(e[o]=[]),e[o].push(t)}),this},emit(s,...t){const{__events__:e}=this;return e[s]?(e[s].forEach(i=>{xt(i)&&i.apply(this,t)}),this):this},zoom(s,t){const{scale:e}=this.transform,i=this.useFixedRatio(k(e*(s+1)));return e===i?this:(this.zoomTo(i,t),this)},zoomTo(s,t=!0){const{image:e,transform:{scale:i,translateX:o,translateY:r},options:{bounds:a}}=this;if(s=this.useFixedRatio(s),s===i)return this;if(this.transform.scale=s,!t)return this.emit("zoom",this,this.transform.scale),this;t=typeof t=="boolean"?this.getContainerCenterClient():t;const{clientX:n,clientY:l}=t,{top:c,left:u,width:m,height:h}=X(e),{width:d,height:f}=this.getImageDiff(),p=s/i-1,b=(m/2-n+u)*p+o,_=(h/2-l+c)*p+r,N=a?$(b,d,-d):b,j=a?$(_,f,-f):_;return v(this.transform,{translateX:N,translateY:j}),this.emit("zoom",this,this.transform.scale),this},move(s){const{options:{bounds:t},transform:{translateX:e,translateY:i}}=this,{x:o,y:r}=s,{width:a,height:n}=this.getImageDiff();if(V(o)){const l=e+o,c=t?$(l,a,-a):l;this.transform.translateX=c}if(V(r)){const l=i+r,c=t?$(l,n,-n):l;this.transform.translateY=c}return this},moveTo(s){const{options:{bounds:t}}=this,{x:e,y:i}=s,{width:o,height:r}=this.getImageDiff();if(V(e)){const a=Number(e),n=t?$(a,o,-o):a;this.transform.translateX=n}if(xe.some(a=>a===e)){const a={left:-o,right:o,center:0}[e];this.transform.translateX=a}if(V(i)){const a=Number(i),n=t?$(a,r,-r):a;this.transform.translateY=n}if(Ye.some(a=>a===i)){const a={top:-r,bottom:r,center:0}[i];this.transform.translateY=a}return this},slideTo(s){const{options:{minScale:t,maxScale:e}}=this,i=(e-t)*s/100+t;return this.zoomTo(i),this},reset(){const{options:{initScale:s}}=this;return v(this.transform,{scale:s,translateX:0,translateY:0}),this.emit("reset",this),this},destroy(s=!1){const{element:t,image:e,controller:i}=this;return this.mounted&&(this.emit("beforeDestroy",this),i.abort(),this.destroyModules(),s&&e&&(this.reset(),e.removeAttribute("style")),t[g]=null,this.mounted=!1,this.emit("destroy",this)),null},update(s){const{element:t,controller:e}=this;return this.emit("beforeUpdate",this),t[g]=null,this.mounted=!1,e.abort(),this.destroyModules(),s&&(this.options=Object.assign({},At,Ht(s)&&s)),this.init(),this.emit("update",this),this},getImageData(){return{...this.data.imageData}},getContainerData(){return{...this.data.containerData}},getSliderValue(){const{__modules__:{slider:s}}=this;return s&&s.value?s.value:null},getImageDiff(){const{width:s,height:t}=this.getContainerData(),{width:e,height:i}=this.getImageData();return{width:(s-e)/2,height:(t-i)/2}},getContainerCenterClient(){const{element:s}=this,{top:t,left:e,width:i,height:o}=X(s);return{clientX:e+i/2,clientY:t+o/2}},getScaleRatio(){const{transform:{scale:s},options:{minScale:t,maxScale:e}}=this;return(s-t)/(e-t)},useFixedRatio(s){const{options:{minScale:t,maxScale:e}}=this;return $(s,t,e)}},{defineProperty:H}=Object;var st,Pt,it,kt,nt,Ct,ot,Ot,rt,Rt,at,Wt,lt,Nt,ht,jt,ct,Vt,dt,Mt,mt,It,ut,Bt;class Ft{constructor(t,e){w(this,st),w(this,it),w(this,nt),w(this,ot),w(this,rt),w(this,at),w(this,lt),w(this,ht),w(this,ct),w(this,dt),w(this,mt),w(this,ut),z(this,"element"),z(this,"options"),z(this,"wrapper"),z(this,"image"),z(this,"mounted"),z(this,"data"),z(this,"transform"),z(this,"states"),z(this,"controller"),z(this,"__events__"),z(this,"__modules__"),t||Xt("The first argument is required."),K(t)||Xt(`Element ${t} is not exist.`),this.element=A(t),this.options=Object.assign({},At,Ht(e)&&e),this.init()}init(){const{element:t}=this,{options:{bounds:e,minScale:i,maxScale:o,initScale:r}}=this;if(t[g])return;t[g]=this;const a=t.querySelector(`.${$t}`),n=t.querySelector(`.${et}`);if(!a)return tt(`${g} needs a ".${$t}" element.`);if(!n)return tt(`${g} needs a ".${et}" element.`);this.options.minScale=e&&i<1?1:i,this.options.maxScale=Math.max(o,i),this.options.initScale=$(r||i,i,o),this.wrapper=a,this.image=n,y(this,st,Pt).call(this)}destroyModules(){const{slider:t,zoomer:e}=this.__modules__;t&&this.destroySlider(),e&&this.destroyZoomer()}destroySlider(){var t,e;const{__modules__:{slider:i}}=this;if(!i||!i.mounted)return;const{options:{el:o},controller:r}=i;o===`.${W}`?(t=i.sliderEl)==null||t.remove():(e=i.sliderTrack)==null||e.remove(),r==null||r.abort(),i.mounted=!1}destroyZoomer(){const{__modules__:{zoomer:t}}=this;if(!t||!t.mounted)return;const{options:{el:e,inEl:i,outEl:o,resetEl:r},controller:a,zoomerEl:n,zoomerInEl:l,zoomerOutEl:c,zoomerResetEl:u}=t,m=(h,d,f)=>{h===`.${d}`&&(f==null||f.remove())};[{target:e,className:P,el:n},{target:i,className:gt,el:l},{target:o,className:pt,el:c},{target:r,className:_t,el:u}].forEach(h=>m(h.target,h.className,h.el)),a==null||a.abort(),t.mounted=!1}}st=new WeakSet,Pt=function(){const{element:s,image:t,options:e}=this,{draggable:i,pinchable:o}=e,{offsetWidth:r,offsetHeight:a}=s,{offsetWidth:n,offsetHeight:l}=t,{width:c,height:u}=X(t);if(!n||!l)return tt(`The width or height of ${et} should not be 0.`);if(this.transform={scale:0,translateX:0,translateY:0},this.data={imageData:{originWidth:n,originHeight:l,width:c,height:u},containerData:{width:r,height:a}},L&&(i||o)&&(this.data.touchData={hypot:0,startX:0,startY:0,prevX:0,prevY:0,imageTop:0,imageLeft:0,widthDiff:0,heightDiff:0}),!L&&i&&(this.data.dragData={startX:0,startY:0}),this.__events__={...ke},e.on)for(const[m,h]of Object.entries(e.on))this.__events__[m]=[h];if(this.__modules__={...Ce},e.slider){const m=e.slider===!0?De:e.slider;this.__modules__.slider={options:Object.assign({},$e,m)}}if(e.zoomer){const m=e.zoomer===!0?Te:e.zoomer;this.__modules__.zoomer={options:Object.assign({},Le,m)}}this.controller=new AbortController,y(this,it,kt).call(this)},it=new WeakSet,kt=function(){if(this.mounted)return;const{element:s,image:t,options:{minScale:e,maxScale:i,initScale:o},__modules__:{slider:r,zoomer:a}}=this,n=this;C(t,{transform:`
        translate(var(${Lt}, 0px), var(${Tt}, 0px))
        scale(var(${Dt}, 0))`}),H(this.transform,"scale",{get(){return n.transform.__scale__},set(l){const c=n.useFixedRatio(l);if(!(J(c)||n.transform.__scale__===c)){if(n.transform.__scale__=c,C(t,{[Dt]:c.toString()}),v(n.data.imageData,{width:X(t).width,height:X(t).height}),r){const u=Math.round(n.getScaleRatio()*100);r.value=u}if(a&&a.options.disabledClass){const{zoomerInEl:u,zoomerOutEl:m,zoomerResetEl:h,options:{disabledClass:d}}=a;u&&(u.classList[c===i?"add":"remove"](d),R(u,{"aria-disabled":c===i?"true":"false"})),m&&(m.classList[c===e?"add":"remove"](d),R(m,{"aria-disabled":c===e?"true":"false"})),h&&(h.classList[c===o?"add":"remove"](d),R(h,{"aria-disabled":c===o?"true":"false"}))}}}}),H(this.transform,"translateX",{get(){return n.transform.__translateX__},set(l){const c=k(l);J(c)||n.transform.__translateX__===c||(n.transform.__translateX__=c,C(t,{[Lt]:`${c}px`}))}}),H(this.transform,"translateY",{get(){return n.transform.__translateY__},set(l){const c=k(l);J(c)||n.transform.__translateY__===c||(n.transform.__translateY__=c,C(t,{[Tt]:`${c}px`}))}}),y(this,nt,Ct).call(this),y(this,ht,jt).call(this),v(this.transform,{scale:o,translateX:0,translateY:0}),s.classList.add(me),this.mounted=!0,this.emit("ready",this)},nt=new WeakSet,Ct=function(){const{wrapper:s,options:t,controller:{signal:e}}=this,{draggable:i,pinchable:o,wheelable:r}=t;if(this.states={},r){this.states.wheeling=!1;const a=n=>y(this,ot,Ot).call(this,n);s.addEventListener(Se,a,{signal:e})}if(L&&(i||o)){i&&(this.states.dragging=!1),o&&(this.states.pinching=!1);const a=n=>y(this,at,Wt).call(this,n);s.addEventListener("touchstart",a,{signal:e})}if(!L&&i){this.states.dragging=!1;const a=n=>y(this,rt,Rt).call(this,n);s.addEventListener("mousedown",a,{signal:e})}y(this,lt,Nt).call(this)},ot=new WeakSet,Ot=function(s){const{options:t}=this,{zoomRatio:e}=t;if(s.preventDefault(),this.states.wheeling)return;this.states.wheeling=!0,setTimeout(()=>{this.states.wheeling=!1},30);const i=(s.deltaY||s.detail)>0?-1:1;this.zoom(i*e,E(s)),this.emit("wheel",this,this.transform.scale,s)},rt=new WeakSet,Rt=function(s){const{data:t,transform:e}=this,{dragData:i,imageData:o}=t;if(!i||!o)return;const r=l=>{l&&l.button!==0||(v(i,{startX:E(l).clientX,startY:E(l).clientY}),this.states.dragging=!0,this.emit("dragStart",this,{x:e.translateX,y:e.translateY},l),document.addEventListener(I,a),document.addEventListener(B,n))},a=l=>{if(l.touches||!this.states.dragging)return;const c=E(l).clientX,u=E(l).clientY,m=c-i.startX+e.translateX,h=u-i.startY+e.translateY;this.moveTo({x:m,y:h}),v(i,{startX:E(l).clientX,startY:E(l).clientY}),this.emit("drag",this,{x:m,y:h},l)},n=l=>{l.touches||(this.states.dragging=!1,this.emit("dragEnd",this,{x:e.translateX,y:e.translateY},l),document.removeEventListener(I,a),document.removeEventListener(B,n))};r(s)},at=new WeakSet,Wt=function(s){const{data:t,transform:e,options:{maxScale:i,minScale:o,draggable:r,pinchable:a}}=this,{touchData:n,imageData:l}=t;if(!n||!l)return;const c=h=>{const d=h.touches;if(!d)return;const{top:f,left:p}=X(this.image),{width:b,height:_}=this.getImageDiff();v(n,{hypot:Yt(d),startX:M(d).clientX,startY:M(d).clientY,prevX:0,prevY:0,imageTop:f,imageLeft:p,widthDiff:b,heightDiff:_}),r&&(this.states.dragging=!0,this.emit("dragStart",this,{x:e.translateX,y:e.translateY},h)),a&&d.length===2&&(this.states.pinching=!0,this.emit("pinchStart",this,e.scale,h)),document.addEventListener("touchmove",u),document.addEventListener("touchend",m)},u=h=>{const d=h.touches;if(!d)return;const{states:{dragging:f,pinching:p}}=this,{top:b,left:_}=X(this.image),{width:N,height:j}=this.getImageDiff(),F=Yt(d),bt=F?F/n.hypot:1,q=this.useFixedRatio(bt*e.scale),wt=M(d).clientX+n.prevX,yt=M(d).clientY+n.prevY;if(p&&d.length===2&&this.zoomTo(q,!1),f){const zt=q!==i&&q!==o&&a?bt:1,qt=k(wt-n.imageLeft-(N-n.widthDiff)-(n.startX-n.imageLeft)*zt+e.translateX),Zt=k(yt-n.imageTop-(j-n.heightDiff)-(n.startY-n.imageTop)*zt+e.translateY);this.moveTo({x:qt,y:Zt})}v(n,{hypot:F,startX:wt,startY:yt,imageTop:b,imageLeft:_,widthDiff:N,heightDiff:j}),p&&d.length===2&&this.emit("pinch",this,e.scale,h),f&&this.emit("drag",this,{x:e.translateX,y:e.translateY},h)},m=h=>{const d=h.touches;if(!d)return;const{states:{dragging:f,pinching:p}}=this;if(f&&!d.length&&(this.states.dragging=!1,this.emit("dragEnd",this,{x:e.translateX,y:e.translateY},h)),p&&d.length<2&&(this.states.pinching=!1,this.emit("pinchEnd",this,e.scale,h)),f&&d.length===1){const b=E(h).clientX,_=E(h).clientY;v(n,{prevX:n.startX-b,prevY:n.startY-_})}d.length||(document.removeEventListener("touchmove",u),document.removeEventListener("touchend",m))};c(s)},lt=new WeakSet,Nt=function(){const{element:s,image:t,transform:e}=this;new ResizeObserver(()=>{const{offsetWidth:i,offsetHeight:o}=s,{width:r,height:a}=this.getContainerData();if(i===r&&o===a)return;const n=e.translateX,l=e.translateY;if(n){const d=i/r*n;this.transform.translateX=d}if(l){const d=o/a*l;this.transform.translateY=d}const{offsetWidth:c,offsetHeight:u}=t,{width:m,height:h}=X(t);v(this.data.containerData,{width:i,height:o}),v(this.data.imageData,{originWidth:c,originHeight:u,width:m,height:h}),this.emit("resize",this)}).observe(s)},ht=new WeakSet,jt=function(){const{slider:s,zoomer:t}=this.__modules__;s&&y(this,ct,Vt).call(this),t&&y(this,mt,It).call(this)},ct=new WeakSet,Vt=function(){const{element:s,__modules__:{slider:t}}=this;if(!t||t.mounted)return;const{options:{el:e,direction:i}}=t,o=e===`.${W}`;if(!e||!o&&!K(e))return;const r=o?O("div",W):A(e),a=O("div",ue),n=O("span",fe),l=O("span",ge,{...ve,"aria-orientation":i});r.classList.add(`${W}-${i}`),H(t,"value",{get(){return t.__value__},set(c){t.__value__!==c&&(t.__value__=c,C(r,{[Xe]:c.toString()}),R(l,{"aria-valuenow":c.toString()}))}}),v(t,{value:this.getScaleRatio()*100,controller:new AbortController,sliding:!1,sliderEl:r,sliderTrack:a,sliderButton:l}),y(this,dt,Mt).call(this),a.append(n,l),r.append(a),o&&s.append(r),t.mounted=!0},dt=new WeakSet,Mt=function(){const{options:{minScale:s,maxScale:t},__modules__:{slider:e}}=this;if(!e)return;const{options:{direction:i},controller:o,sliderEl:r,sliderTrack:a}=e;if(!r||!a)return;const n=i==="vertical",l=h=>{const d=X(a),f=d[n?"height":"width"],p=d[n?"bottom":"left"],b=E(h)[n?"clientY":"clientX"],_=k($((b-p)*(n?-1:1)/f,0,1));return(t-s)*_+s},c=h=>{if(h instanceof MouseEvent&&h.button!==0)return;e.sliding=!0;const d=l(h);this.zoomTo(d),this.emit("slideStart",this,this.getSliderValue(),h),document.addEventListener(I,u),document.addEventListener(B,m)},u=h=>{if(!e.sliding)return;const d=l(h);this.zoomTo(d),this.emit("slide",this,this.getSliderValue(),h)},m=h=>{this.emit("slideEnd",this,this.getSliderValue(),h),e.sliding=!1,document.removeEventListener(I,u),document.removeEventListener(B,m)};r.addEventListener(Ee,c,{signal:o==null?void 0:o.signal})},mt=new WeakSet,It=function(){const{element:s,__modules__:{zoomer:t}}=this;if(!t||t.mounted)return;const{options:{el:e,inEl:i,outEl:o,resetEl:r}}=t,a=[i,o,r],n=(h,d,f,p,b)=>{const _=h===`.${f}`;return!h||!_&&!K(h)?null:(f=a.includes(h)?`${f} ${pe}`:f,_?O(d,f,p,b):A(h))},l=n(e,"div",P),c=n(i,"button",gt,be,Oe),u=n(o,"button",pt,we,Re),m=n(r,"button",_t,ye,We);v(t,{controller:new AbortController,zoomerEl:l,zoomerInEl:c,zoomerOutEl:u,zoomerResetEl:m}),l&&(c&&l.append(c),u&&l.append(u),m&&l.append(m),e===`.${P}`&&s.append(l)),y(this,ut,Bt).call(this),t.mounted=!0},ut=new WeakSet,Bt=function(){const{options:{zoomRatio:s},__modules__:{zoomer:t}}=this,e=this;if(!t)return;const{controller:i,zoomerInEl:o,zoomerOutEl:r,zoomerResetEl:a}=t;o&&o.addEventListener("click",()=>{e.zoom(s)},{signal:i==null?void 0:i.signal}),r&&r.addEventListener("click",()=>{e.zoom(-s)},{signal:i==null?void 0:i.signal}),a&&a.addEventListener("click",()=>{e.reset()},{signal:i==null?void 0:i.signal})};Object.assign(Ft.prototype,Ne);const je={class:"zoomist-wrapper"},Ve={class:"zoomist-image"},Me=["src"],Ie={__name:"img-zoom",props:{src:{type:[String],default:""}},setup(s){const t=Ut(null),e=s;return Qt(()=>{new Ft(t.value,{minScale:1,maxScale:5,slider:!0,zoomer:!0})}),(i,o)=>(S(),D("div",{class:"zoomist-container",ref_key:"zoomistRef",ref:t},[x("div",je,[x("div",Ve,[x("img",{src:e.src,style:{width:"100%",height:"100%","object-fit":"cover"}},null,8,Me)])])],512))}},Be=x("h2",null,"Portfólio",-1),He=x("div",{class:"border-t my-6"},null,-1),Ae=["href"],Pe=["innerHTML"],Ze={__name:"portfolio",props:{resume:{type:Object,default:()=>({})}},setup(s){const t=le();return(e,i)=>{const o=Ie;return S(),Z(Gt,{class:"page-index-markdown"},{default:Y(()=>[x("div",null,[Be,(S(!0),D(Q,null,U(s.resume.data.projects.filter(r=>r.show),(r,a)=>(S(),D("div",null,[He,x("h3",null,[x("a",{href:r.url||null,target:"_blank",style:{color:"#fff"}},G(r.name),9,Ae)]),x("div",null,G(Jt(t).formatDateBetween(r.date)),1),r.summary?(S(),D("div",{key:0,innerHTML:r.summary,class:"my-2"},null,8,Pe)):Et("",!0),r.images.length>0?(S(),Z(Kt,{key:1,"max-width":"600"},{activator:Y(n=>[x("div",te({class:"d-flex",style:{gap:"10px",cursor:"pointer"}},n.props),[(S(!0),D(Q,null,U(r.images,l=>(S(),D("div",{style:ee(`background:url(${l.url}) center center no-repeat; background-size: cover; width:100px; height:100px; border-radius:8px;`)},null,4))),256))],16)]),default:Y(n=>[T(se,null,{default:Y(()=>[T(ie,null,{default:Y(()=>[St(G(r.name),1)]),_:2},1024),T(ne,{"hide-delimiters":r.images.length<=1,"show-arrows":r.images.length>1,height:null},{default:Y(()=>[(S(!0),D(Q,null,U(r.images,l=>(S(),Z(oe,{style:{position:"relative","z-index":"-1"}},{default:Y(()=>[T(o,{src:l.url,style:{width:"100%",height:"100%"}},null,8,["src"])]),_:2},1024))),256))]),_:2},1032,["hide-delimiters","show-arrows"]),T(re,{class:"justify-end"},{default:Y(()=>[T(ae,{class:"bg-primary",onClick:l=>n.isActive.value=!1},{default:Y(()=>[St("Ok")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)):Et("",!0)]))),256))])]),_:1})}}};export{Ze as default};