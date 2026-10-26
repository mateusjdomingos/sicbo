var Ig=Object.defineProperty;var Eg=(n,e)=>{for(var t in e)Ig(n,t,{get:e[t],enumerable:!0})};var ah={};Eg(ah,{addDoc:()=>$m,collection:()=>Nm,createUserWithEmailAndPassword:()=>Lc,deleteDoc:()=>Gm,doc:()=>nh,getDoc:()=>jm,init:()=>DI,onAuthStateChanged:()=>Fc,onSnapshot:()=>Hm,setDoc:()=>qm,signInAnonymously:()=>Vc,signInWithEmailAndPassword:()=>Mc,signOut:()=>Uc,updateDoc:()=>zm,writeBatch:()=>Km});var qh=()=>{};var $h=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Tg=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,g=s>>2,w=(s&3)<<4|u>>4,T=(u&15)<<2|d>>6,N=d&63;l||(N=64,a||(T=64)),r.push(t[g],t[w],t[T],t[N])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($h(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let w=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||w==null)throw new Ba;let T=s<<2|u>>4;if(r.push(T),d!==64){let N=u<<4&240|d>>2;if(r.push(N),w!==64){let M=d<<6&192|w;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ba=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},bg=function(n){let e=$h(n);return Hh.encodeByteArray(e,!0)},Ai=function(n){return bg(n).replace(/\./g,"")},xs=function(n){try{return Hh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Wh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Ag=()=>Wh().__FIREBASE_DEFAULTS__,Sg=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&xs(n[1]);return e&&JSON.parse(e)},Vs=()=>{try{return qh()||Ag()||Sg()||Rg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qa=n=>{var e,t;return(t=(e=Vs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kh=n=>{let e=qa(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},za=()=>{var n;return(n=Vs())===null||n===void 0?void 0:n.config},Ga=n=>{var e;return(e=Vs())===null||e===void 0?void 0:e[`_${n}`]};var Os=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function on(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ls(n){return(await fetch(n,{credentials:"include"})).ok}function Qh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ai(JSON.stringify(t)),Ai(JSON.stringify(a)),""].join(".")}var bi={};function Pg(){let n={prod:[],emulator:[]};for(let e of Object.keys(bi))bi[e]?n.emulator.push(e):n.prod.push(e);return n}function Cg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var zh=!1;function Ms(n,e){if(typeof window>"u"||typeof document>"u"||!on(window.location.host)||bi[n]===e||bi[n]||zh)return;bi[n]=e;function t(T){return`__firebase__banner__${T}`}let r="__firebase__banner",s=Pg().prod.length>0;function a(){let T=document.getElementById(r);T&&T.remove()}function u(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function l(T,N){T.setAttribute("width","24"),T.setAttribute("id",N),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){let T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{zh=!0,a()},T}function g(T,N){T.setAttribute("id",N),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function w(){let T=Cg(r),N=t("text"),M=document.getElementById(N)||document.createElement("span"),q=t("learnmore"),F=document.getElementById(q)||document.createElement("a"),ne=t("preprendIcon"),Y=document.getElementById(ne)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){let K=T.element;u(K),g(F,q);let ce=d();l(Y,ne),K.append(Y,M,F,ce),document.body.appendChild(K)}s?(M.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function kg(){var n;let e=(n=Vs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Yh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ed(){let n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function td(){return!kg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $a(){try{return typeof indexedDB=="object"}catch{return!1}}function nd(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Dg="FirebaseError",nt=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Dg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}},Ft=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Ng(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new nt(i,u,r)}};function Ng(n,e){return n.replace(Og,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Og=/\{\$([^}]+)}/g;function rd(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(Gh(s)&&Gh(a)){if(!wt(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Gh(n){return n!==null&&typeof n=="object"}function wr(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ir(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Er(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function id(n,e){let t=new ja(n,e);return t.subscribe.bind(t)}var ja=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ua),i.error===void 0&&(i.error=Ua),i.complete===void 0&&(i.complete=Ua);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function xg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ua(){}var jI=4*60*60*1e3;function we(n){return n&&n._delegate?n._delegate:n}var at=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Fn="[DEFAULT]";var Ha=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Os;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Vg(n){return n===Fn?void 0:n}function Lg(n){return n.instantiationMode==="EAGER"}var Fs=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Ha(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Mg=[],se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));var Fg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ug=se.INFO,Bg={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},jg=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Bg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},an=class{constructor(e){this.name=e,this._logLevel=Ug,this._logHandler=jg,this._userLogHandler=null,Mg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}};var qg=(n,e)=>e.some(t=>n instanceof t),sd,od;function zg(){return sd||(sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gg(){return od||(od=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ad=new WeakMap,Ka=new WeakMap,cd=new WeakMap,Wa=new WeakMap,Ja=new WeakMap;function $g(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(It(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ad.set(t,n)}).catch(()=>{}),Ja.set(e,n),e}function Hg(n){if(Ka.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ka.set(n,e)}var Qa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ka.get(n);if(e==="objectStoreNames")return n.objectStoreNames||cd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return It(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ud(n){Qa=n(Qa)}function Wg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Us(this),e,...t);return cd.set(r,e.sort?e.sort():[e]),It(r)}:Gg().includes(n)?function(...e){return n.apply(Us(this),e),It(ad.get(this))}:function(...e){return It(n.apply(Us(this),e))}}function Kg(n){return typeof n=="function"?Wg(n):(n instanceof IDBTransaction&&Hg(n),qg(n,zg())?new Proxy(n,Qa):n)}function It(n){if(n instanceof IDBRequest)return $g(n);if(Wa.has(n))return Wa.get(n);let e=Kg(n);return e!==n&&(Wa.set(n,e),Ja.set(e,n)),e}var Us=n=>Ja.get(n);function hd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),u=It(a);return r&&a.addEventListener("upgradeneeded",l=>{r(It(a.result),l.oldVersion,l.newVersion,It(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var Qg=["get","getKey","getAll","getAllKeys","count"],Jg=["put","add","delete","clear"],Ya=new Map;function ld(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Jg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qg.includes(t)))return;let s=async function(a,...u){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return Ya.set(e,s),s}ud(n=>({...n,get:(e,t,r)=>ld(e,t)||n.get(e,t,r),has:(e,t)=>!!ld(e,t)||n.has(e,t)}));var Za=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yg(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Yg(n){let e=n.getComponent();return e?.type==="VERSION"}var ec="@firebase/app",dd="0.13.2";var Ut=new an("@firebase/app"),Xg="@firebase/app-compat",Zg="@firebase/analytics-compat",e_="@firebase/analytics",t_="@firebase/app-check-compat",n_="@firebase/app-check",r_="@firebase/auth",i_="@firebase/auth-compat",s_="@firebase/database",o_="@firebase/data-connect",a_="@firebase/database-compat",c_="@firebase/functions",u_="@firebase/functions-compat",l_="@firebase/installations",h_="@firebase/installations-compat",d_="@firebase/messaging",f_="@firebase/messaging-compat",p_="@firebase/performance",m_="@firebase/performance-compat",g_="@firebase/remote-config",__="@firebase/remote-config-compat",y_="@firebase/storage",v_="@firebase/storage-compat",w_="@firebase/firestore",I_="@firebase/ai",E_="@firebase/firestore-compat",T_="firebase",b_="11.10.0";var tc="[DEFAULT]",A_={[ec]:"fire-core",[Xg]:"fire-core-compat",[e_]:"fire-analytics",[Zg]:"fire-analytics-compat",[n_]:"fire-app-check",[t_]:"fire-app-check-compat",[r_]:"fire-auth",[i_]:"fire-auth-compat",[s_]:"fire-rtdb",[o_]:"fire-data-connect",[a_]:"fire-rtdb-compat",[c_]:"fire-fn",[u_]:"fire-fn-compat",[l_]:"fire-iid",[h_]:"fire-iid-compat",[d_]:"fire-fcm",[f_]:"fire-fcm-compat",[p_]:"fire-perf",[m_]:"fire-perf-compat",[g_]:"fire-rc",[__]:"fire-rc-compat",[y_]:"fire-gcs",[v_]:"fire-gcs-compat",[w_]:"fire-fst",[E_]:"fire-fst-compat",[I_]:"fire-vertex","fire-js":"fire-js",[T_]:"fire-js-all"};var Bs=new Map,S_=new Map,nc=new Map;function fd(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function un(n){let e=n.name;if(nc.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;nc.set(e,n);for(let t of Bs.values())fd(t,n);for(let t of S_.values())fd(t,n);return!0}function Ri(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}var R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new Ft("app","Firebase",R_);var rc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}};var ln=b_;function oc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:tc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(t||(t=za()),!t)throw cn.create("no-options");let s=Bs.get(i);if(s){if(wt(t,s.options)&&wt(r,s.config))return s;throw cn.create("duplicate-app",{appName:i})}let a=new Fs(i);for(let l of nc.values())a.addComponent(l);let u=new rc(t,r,a);return Bs.set(i,u),u}function js(n=tc){let e=Bs.get(n);if(!e&&n===tc&&za())return oc();if(!e)throw cn.create("no-app",{appName:n});return e}function pt(n,e,t){var r;let i=(r=A_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(u.join(" "));return}un(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var P_="firebase-heartbeat-database",C_=1,Si="firebase-heartbeat-store",Xa=null;function _d(){return Xa||(Xa=hd(P_,C_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Si)}catch(t){console.warn(t)}}}}).catch(n=>{throw cn.create("idb-open",{originalErrorMessage:n.message})})),Xa}async function k_(n){try{let t=(await _d()).transaction(Si),r=await t.objectStore(Si).get(yd(n));return await t.done,r}catch(e){if(e instanceof nt)Ut.warn(e.message);else{let t=cn.create("idb-get",{originalErrorMessage:e?.message});Ut.warn(t.message)}}}async function pd(n,e){try{let r=(await _d()).transaction(Si,"readwrite");await r.objectStore(Si).put(e,yd(n)),await r.done}catch(t){if(t instanceof nt)Ut.warn(t.message);else{let r=cn.create("idb-set",{originalErrorMessage:t?.message});Ut.warn(r.message)}}}function yd(n){return`${n.name}!${n.options.appId}`}var D_=1024,N_=30,ic=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new sc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=md();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>N_){let a=x_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=md(),{heartbeatsToSend:r,unsentEntries:i}=O_(this._heartbeatsCache.heartbeats),s=Ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ut.warn(t),""}}};function md(){return new Date().toISOString().substring(0,10)}function O_(n,e=D_){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),gd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),gd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var sc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $a()?nd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await k_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return pd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return pd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function gd(n){return Ai(JSON.stringify({version:2,heartbeats:n})).length}function x_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function V_(n){un(new at("platform-logger",e=>new Za(e),"PRIVATE")),un(new at("heartbeat",e=>new ic(e),"PRIVATE")),pt(ec,dd,n),pt(ec,dd,"esm2017"),pt("fire-js","")}V_("");var L_="firebase",M_="11.10.0";pt(L_,M_,"app");function qs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Md(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Fd=Md,Ud=new Ft("auth","Firebase",Md());var Qs=new an("@firebase/auth");function F_(n,...e){Qs.logLevel<=se.WARN&&Qs.warn(`Auth (${ln}): ${n}`,...e)}function Gs(n,...e){Qs.logLevel<=se.ERROR&&Qs.error(`Auth (${ln}): ${n}`,...e)}function mt(n,...e){throw Dc(n,...e)}function Tt(n,...e){return Dc(n,...e)}function Bd(n,e,t){let r=Object.assign(Object.assign({},Fd()),{[e]:t});return new Ft("auth","Firebase",r).create(e,{appName:n.name})}function bt(n){return Bd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ud.create(n,...e)}function W(n,e,...t){if(!n)throw Dc(e,...t)}function Et(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Gs(e),new Error(e)}function jt(n,e){n||Et(e)}function dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function U_(){return vd()==="http:"||vd()==="https:"}function vd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function B_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U_()||Xh()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Un=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=Jh()||Zh()}get(){return B_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Nc(n,e){jt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Js=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var z_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],G_=new Un(3e4,6e4);function Ne(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ge(n,e,t,r,i={}){return jd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let u=wr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return Yh()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&on(n.emulatorConfig.host)&&(d.credentials="include"),Js.fetch()(await qd(n,n.config.apiHost,t,u),d)})}async function jd(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},q_),e);try{let i=new fc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw Ci(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ci(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ci(n,"user-disabled",a);let g=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Bd(n,g,d);mt(n,g)}}catch(i){if(i instanceof nt)throw i;mt(n,"network-request-failed",{message:String(i)})}}async function pn(n,e,t,r,i={}){let s=await Ge(n,e,t,r,i);return"mfaPendingCredential"in s&&mt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function qd(n,e,t,r){let i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Nc(n.config,i):`${n.config.apiScheme}://${i}`;return z_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function $_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var fc=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),G_.get())})}};function Ci(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=Tt(n,e,r);return i.customData._tokenResponse=t,i}function wd(n){return n!==void 0&&n.enterprise!==void 0}var Ys=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function zd(n,e){return Ge(n,"GET","/v2/recaptchaConfig",Ne(n,e))}async function H_(n,e){return Ge(n,"POST","/v1/accounts:delete",e)}async function Xs(n,e){return Ge(n,"POST","/v1/accounts:lookup",e)}function ki(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gd(n,e=!1){let t=we(n),r=await t.getIdToken(e),i=Oc(r);W(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ki(ac(i.auth_time)),issuedAtTime:ki(ac(i.iat)),expirationTime:ki(ac(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ac(n){return Number(n)*1e3}function Oc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{let i=xs(t);return i?JSON.parse(i):(Gs("Failed to decode base64 JWT payload"),null)}catch(i){return Gs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Id(n){let e=Oc(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Oi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof nt&&W_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function W_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var pc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var xi=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Zs(n){var e;let t=n.auth,r=await n.getIdToken(),i=await Oi(n,Xs(t,{idToken:r}));W(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hd(s.providerUserInfo):[],u=K_(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,g=l?d:!1,w={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new xi(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,w)}async function $d(n){let e=we(n);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hd(n){return n.map(e=>{var{providerId:t}=e,r=qs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Q_(n,e){let t=await jd(n,{},async()=>{let r=wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await qd(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:u,body:r};return n.emulatorConfig&&on(n.emulatorConfig.host)&&(l.credentials="include"),Js.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function J_(n,e){return Ge(n,"POST","/v2/accounts:revokeToken",Ne(n,e))}var Di=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");let t=Id(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Q_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Et("not implemented")}};function hn(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var dn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gd(this,e)}reload(){return $d(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(bt(this.auth));let e=await this.getIdToken();return await Oi(this,H_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,g;let w=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,N=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,M=(a=t.photoURL)!==null&&a!==void 0?a:void 0,q=(u=t.tenantId)!==null&&u!==void 0?u:void 0,F=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,ne=(d=t.createdAt)!==null&&d!==void 0?d:void 0,Y=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:K,emailVerified:ce,isAnonymous:Ee,providerData:oe,stsTokenManager:A}=t;W(K&&A,e,"internal-error");let y=Di.fromJSON(this.name,A);W(typeof K=="string",e,"internal-error"),hn(w,e.name),hn(T,e.name),W(typeof ce=="boolean",e,"internal-error"),W(typeof Ee=="boolean",e,"internal-error"),hn(N,e.name),hn(M,e.name),hn(q,e.name),hn(F,e.name),hn(ne,e.name),hn(Y,e.name);let v=new n({uid:K,auth:e,email:T,emailVerified:ce,displayName:w,isAnonymous:Ee,photoURL:M,phoneNumber:N,tenantId:q,stsTokenManager:y,createdAt:ne,lastLoginAt:Y});return oe&&Array.isArray(oe)&&(v.providerData=oe.map(b=>Object.assign({},b))),F&&(v._redirectEventId=F),v}static async _fromIdTokenResponse(e,t,r=!1){let i=new Di;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Zs(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];W(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Hd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new Di;u.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var Ed=new Map;function Bt(n){jt(n instanceof Function,"Expected a class definition");let e=Ed.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ed.set(n,e),e)}var eo=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};eo.type="NONE";var mc=eo;function $s(n,e,t){return`firebase:${n}:${e}:${t}`}var to=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=$s(this.userKey,i.apiKey,s),this.fullPersistenceKey=$s("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Xs(this.auth,{idToken:e}).catch(()=>{});return t?dn._fromGetAccountInfoResponse(this.auth,t,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Bt(mc),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||Bt(mc),a=$s(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let g=await d._get(a);if(g){let w;if(typeof g=="string"){let T=await Xs(e,{idToken:g}).catch(()=>{});if(!T)break;w=await dn._fromGetAccountInfoResponse(e,T,g)}else w=dn._fromJSON(e,g);d!==s&&(u=w),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function Td(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xd(e))return"Blackberry";if(Zd(e))return"Webos";if(Kd(e))return"Safari";if((e.includes("chrome/")||Qd(e))&&!e.includes("edge/"))return"Chrome";if(Yd(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Wd(n=xe()){return/firefox\//i.test(n)}function Kd(n=xe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qd(n=xe()){return/crios\//i.test(n)}function Jd(n=xe()){return/iemobile/i.test(n)}function Yd(n=xe()){return/android/i.test(n)}function Xd(n=xe()){return/blackberry/i.test(n)}function Zd(n=xe()){return/webos/i.test(n)}function xc(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Y_(n=xe()){var e;return xc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X_(){return ed()&&document.documentMode===10}function ef(n=xe()){return xc(n)||Yd(n)||Zd(n)||Xd(n)||/windows phone/i.test(n)||Jd(n)}function tf(n,e=[]){let t;switch(n){case"Browser":t=Td(xe());break;case"Worker":t=`${Td(xe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ln}/${r}`}var gc=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,u)=>{try{let l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Z_(n,e={}){return Ge(n,"GET","/v2/passwordPolicy",Ne(n,e))}var ey=6,_c=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ey,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var yc=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new no(this),this.idTokenSubscription=new no(this),this.beforeStateQueue=new gc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Xs(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qe(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(bt(this));let t=e?we(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Z_(this),t=new _c(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ft("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await J_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Bt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[Bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&F_(`Error while retrieving App Check token: ${t.error}`),t?.token}};function St(n){return we(n)}var no=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=id(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Io={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ty(n){Io=n}function nf(n){return Io.loadJS(n)}function ny(){return Io.recaptchaEnterpriseScript}function ry(){return Io.gapiScript}function rf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var vc=class{constructor(){this.enterprise=new wc}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},wc=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var iy="recaptcha-enterprise",Ni="NO_RECAPTCHA",ro=class{constructor(e){this.type=iy,this.auth=St(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{zd(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new Ys(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){let l=window.grecaptcha;wd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ni)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vc().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&wd(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ny();l.length!==0&&(l+=u),nf(l).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function Pi(n,e,t,r=!1,i=!1){let s=new ro(n),a;if(i)a=Ni;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){let l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){let l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Tr(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let u=await Pi(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await Pi(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(u)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let u=await Pi(n,e,t);return r(n,u).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let g=await Pi(n,e,t,!1,!0);return r(n,g)}return Promise.reject(l)})}else{let u=await Pi(n,e,t,!1,!0);return r(n,u)}else return Promise.reject(i+" provider is not supported.")}async function sy(n){let e=St(n),t=await zd(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ys(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new ro(e).verify()}function sf(n,e){let t=Ri(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(wt(s,e??{}))return i;mt(i,"already-initialized")}return t.initialize({options:e})}function oy(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Bt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function of(n,e,t){let r=St(n);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=af(e),{host:a,port:u}=ay(e),l=u===null?"":`:${u}`,d={url:`${s}//${a}${l}/`},g=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(wt(d,r.config.emulator)&&wt(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,on(a)?(Ls(`${s}//${a}${l}`),Ms("Auth",!0)):i||cy()}function af(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ay(n){let e=af(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:bd(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:bd(a)}}}function bd(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function cy(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Bn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}};async function uy(n,e){return Ge(n,"POST","/v1/accounts:signUp",e)}async function ly(n,e){return pn(n,"POST","/v1/accounts:signInWithPassword",Ne(n,e))}async function hy(n,e){return pn(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}async function dy(n,e){return pn(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}var Vi=class n extends Bn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tr(e,t,"signInWithPassword",ly,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hy(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tr(e,r,"signUpPassword",uy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dy(e,{idToken:t,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function br(n,e){return pn(n,"POST","/v1/accounts:signInWithIdp",Ne(n,e))}var fy="http://localhost",jn=class n extends Bn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=qs(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return br(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,br(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,br(e,t)}buildRequest(){let e={requestUri:fy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wr(t)}return e}};async function Ad(n,e){return Ge(n,"POST","/v1/accounts:sendVerificationCode",Ne(n,e))}async function py(n,e){return pn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e))}async function my(n,e){let t=await pn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e));if(t.temporaryProof)throw Ci(n,"account-exists-with-different-credential",t);return t}var gy={USER_NOT_FOUND:"user-not-found"};async function _y(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,t),gy)}var Li=class n extends Bn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return py(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return my(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _y(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function yy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vy(n){let e=Ir(Er(n)).link,t=e?Ir(Er(e)).deep_link_id:null,r=Ir(Er(n)).deep_link_id;return(r?Ir(Er(r)).link:null)||r||t||e||n}var io=class n{constructor(e){var t,r,i,s,a,u;let l=Ir(Er(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,g=(r=l.oobCode)!==null&&r!==void 0?r:null,w=yy((i=l.mode)!==null&&i!==void 0?i:null);W(d&&g&&w,"argument-error"),this.apiKey=d,this.operation=w,this.code=g,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=vy(e);try{return new n(t)}catch{return null}}};var qn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=io.parseLink(t);return W(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}};qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var so=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var zn=class extends so{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Mi=class n extends zn{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mi.PROVIDER_ID="facebook.com";var Fi=class n extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Fi.GOOGLE_SIGN_IN_METHOD="google.com";Fi.PROVIDER_ID="google.com";var Ui=class n extends zn{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Ui.GITHUB_SIGN_IN_METHOD="github.com";Ui.PROVIDER_ID="github.com";var Bi=class n extends zn{constructor(){super("twitter.com")}static credential(e,t){return jn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};Bi.TWITTER_SIGN_IN_METHOD="twitter.com";Bi.PROVIDER_ID="twitter.com";async function cf(n,e){return pn(n,"POST","/v1/accounts:signUp",Ne(n,e))}var fn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await dn._fromIdTokenResponse(e,r,i),a=Sd(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Sd(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Sd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function Vc(n){var e;if(Qe(n.app))return Promise.reject(bt(n));let t=St(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new fn({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await cf(t,{returnSecureToken:!0}),i=await fn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var Ic=class n extends nt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function uf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ic._fromErrorAndOperation(n,s,e,r):s})}async function wy(n,e,t=!1){let r=await Oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fn._forOperation(n,"link",r)}async function Iy(n,e,t=!1){let{auth:r}=n;if(Qe(r.app))return Promise.reject(bt(r));let i="reauthenticate";try{let s=await Oi(n,uf(r,i,e,n),t);W(s.idToken,r,"internal-error");let a=Oc(s.idToken);W(a,r,"internal-error");let{sub:u}=a;return W(n.uid===u,r,"user-mismatch"),fn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}async function lf(n,e,t=!1){if(Qe(n.app))return Promise.reject(bt(n));let r="signIn",i=await uf(n,r,e),s=await fn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function hf(n,e){return lf(St(n),e)}async function df(n){let e=St(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Lc(n,e,t){if(Qe(n.app))return Promise.reject(bt(n));let r=St(n),a=await Tr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cf,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&df(n),l}),u=await fn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function Mc(n,e,t){return Qe(n.app)?Promise.reject(bt(n)):hf(we(n),qn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&df(n),r})}function ff(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function pf(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function Fc(n,e,t,r){return we(n).onAuthStateChanged(e,t,r)}function Uc(n){return we(n).signOut()}function Rd(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function Ey(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}function Ty(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function by(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}var oo="__sak";var ao=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Ay=1e3,Sy=10,co=class extends ao{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ef(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);X_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sy):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};co.type="LOCAL";var mf=co;var Ry=1e3;function cc(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function uc(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var Ec=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=uc(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return cc(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=uc(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=uc(e);if(window.cookieStore){let u=d=>{let g=d.changed.find(T=>T.name===r);g&&t(g.value),d.deleted.find(T=>T.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",u);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",u)}let i=cc(r),s=setInterval(()=>{let u=cc(r);u!==i&&(t(u),i=u)},Ry),a=()=>clearInterval(s);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};Ec.type="COOKIE";var uo=class extends ao{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};uo.type="SESSION";var Bc=uo;function Py(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var lo=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,s)),l=await Py(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};lo.receivers=[];function jc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Tc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{let d=jc("",20);i.port1.start();let g=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(w){let T=w;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(T.data.response);break;default:clearTimeout(g),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function At(){return window}function Cy(n){At().location.href=n}function gf(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function ky(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ny(){return gf()?self:null}var _f="firebaseLocalStorageDb",Oy=1,ho="firebaseLocalStorage",yf="fbase_key",Gn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Eo(n,e){return n.transaction([ho],e?"readwrite":"readonly").objectStore(ho)}function xy(){let n=indexedDB.deleteDatabase(_f);return new Gn(n).toPromise()}function bc(){let n=indexedDB.open(_f,Oy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(ho,{keyPath:yf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(ho)?e(r):(r.close(),await xy(),e(await bc()))})})}async function Pd(n,e,t){let r=Eo(n,!0).put({[yf]:e,value:t});return new Gn(r).toPromise()}async function Vy(n,e){let t=Eo(n,!1).get(e),r=await new Gn(t).toPromise();return r===void 0?null:r.value}function Cd(n,e){let t=Eo(n,!0).delete(e);return new Gn(t).toPromise()}var Ly=800,My=3,fo=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>My)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(Ny()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ky(),!this.activeServiceWorker)return;this.sender=new Tc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await bc();return await Pd(e,oo,"1"),await Cd(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Vy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Eo(i,!1).getAll();return new Gn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};fo.type="LOCAL";var vf=fo;function kd(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:start",Ne(n,e))}function Fy(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}function Uy(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}var mE=rf("rcb"),gE=new Un(3e4,6e4);var Hs="recaptcha";async function By(n,e,t){var r;if(!n._getRecaptchaConfig())try{await sy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){W(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Tr(n,a,"mfaSmsEnrollment",async(g,w)=>{if(w.phoneEnrollmentInfo.captchaResponse===Ni){W(t?.type===Hs,g,"argument-error");let T=await lc(g,w,t);return Rd(g,T)}return Rd(g,w)},"PHONE_PROVIDER").catch(g=>Promise.reject(g))).phoneSessionInfo.sessionInfo}else{W(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;W(a,n,"missing-multi-factor-info");let u={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Tr(n,u,"mfaSmsSignIn",async(w,T)=>{if(T.phoneSignInInfo.captchaResponse===Ni){W(t?.type===Hs,w,"argument-error");let N=await lc(w,T,t);return kd(w,N)}return kd(w,T)},"PHONE_PROVIDER").catch(w=>Promise.reject(w))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Tr(n,s,"sendVerificationCode",async(d,g)=>{if(g.captchaResponse===Ni){W(t?.type===Hs,d,"argument-error");let w=await lc(d,g,t);return Ad(d,w)}return Ad(d,g)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function lc(n,e,t){W(t.type===Hs,n,"argument-error");let r=await t.verify();W(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,u=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:u,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,u=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:u}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var ji=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=St(e)}verifyPhoneNumber(e,t){return By(this.auth,e,we(t))}static credential(e,t){return Li._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Li._fromTokenResponse(t,r):null}};ji.PROVIDER_ID="phone";ji.PHONE_SIGN_IN_METHOD="phone";function jy(n,e){return e?Bt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var qi=class extends Bn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,t){return br(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function qy(n){return lf(n.auth,new qi(n),n.bypassAuthState)}function zy(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),Iy(t,new qi(n),n.bypassAuthState)}async function Gy(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),wy(t,new qi(n),n.bypassAuthState)}var po=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qy;case"linkViaPopup":case"linkViaRedirect":return Gy;case"reauthViaPopup":case"reauthViaRedirect":return zy;default:mt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var $y=new Un(2e3,1e4);var Ac=class n extends po{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");let e=jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$y.get())};e()}};Ac.currentPopupAction=null;var Hy="pendingRedirect",Ws=new Map,Sc=class extends po{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ws.get(this.auth._key());if(!e){try{let r=await Wy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ws.set(this.auth._key(),e)}return this.bypassAuthState||Ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Wy(n,e){let t=Jy(e),r=Qy(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function Ky(n,e){Ws.set(n._key(),e)}function Qy(n){return Bt(n._redirectPersistence)}function Jy(n){return $s(Hy,n.config.apiKey,n.name)}async function Yy(n,e,t=!1){if(Qe(n.app))return Promise.reject(bt(n));let r=St(n),i=jy(r,e),a=await new Sc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var Xy=10*60*1e3,Rc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!wf(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Tt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dd(e))}saveEventToCache(e){this.cachedEventUids.add(Dd(e)),this.lastProcessedEventTime=Date.now()}};function Dd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Zy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wf(n);default:return!1}}async function ev(n,e={}){return Ge(n,"GET","/v1/projects",e)}var tv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nv=/^https?/;async function rv(n){if(n.config.emulator)return;let{authorizedDomains:e}=await ev(n);for(let t of e)try{if(iv(t))return}catch{}mt(n,"unauthorized-domain")}function iv(n){let e=dc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!nv.test(t))return!1;if(tv.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var sv=new Un(3e4,6e4);function Nd(){let n=At().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ov(n){return new Promise((e,t)=>{var r,i,s;function a(){Nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nd(),t(Tt(n,"network-request-failed"))},timeout:sv.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)a();else{let u=rf("iframefcb");return At()[u]=()=>{gapi.load?a():t(Tt(n,"network-request-failed"))},nf(`${ry()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Ks=null,e})}var Ks=null;function av(n){return Ks=Ks||ov(n),Ks}var cv=new Un(5e3,15e3),uv="__/auth/iframe",lv="emulator/auth/iframe",hv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fv(n){let e=n.config;W(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?Nc(e,lv):`https://${n.config.authDomain}/${uv}`,r={apiKey:e.apiKey,appName:n.name,v:ln},i=dv.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${wr(r).slice(1)}`}async function pv(n){let e=await av(n),t=At().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:fv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=Tt(n,"network-request-failed"),u=At().setTimeout(()=>{s(a)},cv.get());function l(){At().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var mv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gv=500,_v=600,yv="_blank",vv="http://localhost",mo=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function wv(n,e,t,r=gv,i=_v){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",l=Object.assign(Object.assign({},mv),{width:r.toString(),height:i.toString(),top:s,left:a}),d=xe().toLowerCase();t&&(u=Qd(d)?yv:t),Wd(d)&&(e=e||vv,l.scrollbars="yes");let g=Object.entries(l).reduce((T,[N,M])=>`${T}${N}=${M},`,"");if(Y_(d)&&u!=="_self")return Iv(e||"",u),new mo(null);let w=window.open(e||"",u,g);W(w,n,"popup-blocked");try{w.focus()}catch{}return new mo(w)}function Iv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var Ev="__/auth/handler",Tv="emulator/auth/handler",bv=encodeURIComponent("fac");async function Od(n,e,t,r,i,s){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ln,eventId:i};if(e instanceof so){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",rd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[g,w]of Object.entries(s||{}))a[g]=w}if(e instanceof zn){let g=e.getScopes().filter(w=>w!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let g of Object.keys(u))u[g]===void 0&&delete u[g];let l=await n._getAppCheckToken(),d=l?`#${bv}=${encodeURIComponent(l)}`:"";return`${Av(n)}?${wr(u).slice(1)}${d}`}function Av({config:n}){return n.emulator?Nc(n,Tv):`https://${n.authDomain}/${Ev}`}var hc="webStorageSupport",Pc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bc,this._completeRedirectFn=Yy,this._overrideRedirectResult=Ky}async _openPopup(e,t,r,i){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await Od(e,t,r,dc(),i);return wv(e,a,jc())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await Od(e,t,r,dc(),i);return Cy(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await pv(e),r=new Rc(e);return t.register("authEvent",i=>(W(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hc,{type:hc},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[hc];a!==void 0&&t(!!a),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ef()||Kd()||xc()}},If=Pc,go=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Et("unexpected MultiFactorSessionType")}}},Cc=class n extends go{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Ey(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Fy(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},_o=class{constructor(){}static assertion(e){return Cc._fromCredential(e)}};_o.FACTOR_ID="phone";var yo=class{static assertionForEnrollment(e,t){return vo._fromSecret(e,t)}static assertionForSignIn(e,t){return vo._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;W(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await Ty(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return wo._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};yo.FACTOR_ID="totp";var vo=class n extends go{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return W(typeof this.secret<"u",e,"argument-error"),by(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){W(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Uy(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},wo=class n{constructor(e,t,r,i,s,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(zs(e)||zs(t))&&(i=!0),i&&(zs(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),zs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function zs(n){return typeof n>"u"||n?.length===0}var xd="@firebase/auth",Vd="1.10.8";var kc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Sv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rv(n){un(new at("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tf(n)},d=new yc(r,i,s,l);return oy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),un(new at("auth-internal",e=>{let t=St(e.getProvider("auth").getImmediate());return(r=>new kc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(xd,Vd,Sv(n)),pt(xd,Vd,"esm2017")}var Pv=5*60,Cv=Ga("authIdTokenMaxAge")||Pv,Ld=null,kv=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Cv)return;let i=t?.token;Ld!==i&&(Ld=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qc(n=js()){let e=Ri(n,"auth");if(e.isInitialized())return e.getImmediate();let t=sf(n,{popupRedirectResolver:If,persistence:[vf,mf,Bc]}),r=Ga("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=kv(s.toString());pf(t,a,()=>a(t.currentUser)),ff(t,u=>a(u))}}let i=qa("auth");return i&&of(t,`http://${i}`),t}function Dv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ty({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=Tt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Dv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rv("Browser");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Tf={};var qt,zc;(function(){var n;function e(A,y){function v(){}v.prototype=y.prototype,A.D=y.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(b,S,P){for(var I=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)I[Ze-2]=arguments[Ze];return y.prototype[S].apply(b,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,y,v){v||(v=0);var b=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)b[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;16>S;++S)b[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=A.g[0],v=A.g[1],S=A.g[2];var P=A.g[3],I=y+(P^v&(S^P))+b[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=P+(S^y&(v^S))+b[1]+3905402710&4294967295,P=y+(I<<12&4294967295|I>>>20),I=S+(v^P&(y^v))+b[2]+606105819&4294967295,S=P+(I<<17&4294967295|I>>>15),I=v+(y^S&(P^y))+b[3]+3250441966&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(P^v&(S^P))+b[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(S^y&(v^S))+b[5]+1200080426&4294967295,P=y+(I<<12&4294967295|I>>>20),I=S+(v^P&(y^v))+b[6]+2821735955&4294967295,S=P+(I<<17&4294967295|I>>>15),I=v+(y^S&(P^y))+b[7]+4249261313&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(P^v&(S^P))+b[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(S^y&(v^S))+b[9]+2336552879&4294967295,P=y+(I<<12&4294967295|I>>>20),I=S+(v^P&(y^v))+b[10]+4294925233&4294967295,S=P+(I<<17&4294967295|I>>>15),I=v+(y^S&(P^y))+b[11]+2304563134&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(P^v&(S^P))+b[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=P+(S^y&(v^S))+b[13]+4254626195&4294967295,P=y+(I<<12&4294967295|I>>>20),I=S+(v^P&(y^v))+b[14]+2792965006&4294967295,S=P+(I<<17&4294967295|I>>>15),I=v+(y^S&(P^y))+b[15]+1236535329&4294967295,v=S+(I<<22&4294967295|I>>>10),I=y+(S^P&(v^S))+b[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^S&(y^v))+b[6]+3225465664&4294967295,P=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(P^y))+b[11]+643717713&4294967295,S=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(S^P))+b[0]+3921069994&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(S^P&(v^S))+b[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^S&(y^v))+b[10]+38016083&4294967295,P=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(P^y))+b[15]+3634488961&4294967295,S=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(S^P))+b[4]+3889429448&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(S^P&(v^S))+b[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^S&(y^v))+b[14]+3275163606&4294967295,P=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(P^y))+b[3]+4107603335&4294967295,S=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(S^P))+b[8]+1163531501&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(S^P&(v^S))+b[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=P+(v^S&(y^v))+b[2]+4243563512&4294967295,P=y+(I<<9&4294967295|I>>>23),I=S+(y^v&(P^y))+b[7]+1735328473&4294967295,S=P+(I<<14&4294967295|I>>>18),I=v+(P^y&(S^P))+b[12]+2368359562&4294967295,v=S+(I<<20&4294967295|I>>>12),I=y+(v^S^P)+b[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^S)+b[8]+2272392833&4294967295,P=y+(I<<11&4294967295|I>>>21),I=S+(P^y^v)+b[11]+1839030562&4294967295,S=P+(I<<16&4294967295|I>>>16),I=v+(S^P^y)+b[14]+4259657740&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(v^S^P)+b[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^S)+b[4]+1272893353&4294967295,P=y+(I<<11&4294967295|I>>>21),I=S+(P^y^v)+b[7]+4139469664&4294967295,S=P+(I<<16&4294967295|I>>>16),I=v+(S^P^y)+b[10]+3200236656&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(v^S^P)+b[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^S)+b[0]+3936430074&4294967295,P=y+(I<<11&4294967295|I>>>21),I=S+(P^y^v)+b[3]+3572445317&4294967295,S=P+(I<<16&4294967295|I>>>16),I=v+(S^P^y)+b[6]+76029189&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(v^S^P)+b[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=P+(y^v^S)+b[12]+3873151461&4294967295,P=y+(I<<11&4294967295|I>>>21),I=S+(P^y^v)+b[15]+530742520&4294967295,S=P+(I<<16&4294967295|I>>>16),I=v+(S^P^y)+b[2]+3299628645&4294967295,v=S+(I<<23&4294967295|I>>>9),I=y+(S^(v|~P))+b[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~S))+b[7]+1126891415&4294967295,P=y+(I<<10&4294967295|I>>>22),I=S+(y^(P|~v))+b[14]+2878612391&4294967295,S=P+(I<<15&4294967295|I>>>17),I=v+(P^(S|~y))+b[5]+4237533241&4294967295,v=S+(I<<21&4294967295|I>>>11),I=y+(S^(v|~P))+b[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~S))+b[3]+2399980690&4294967295,P=y+(I<<10&4294967295|I>>>22),I=S+(y^(P|~v))+b[10]+4293915773&4294967295,S=P+(I<<15&4294967295|I>>>17),I=v+(P^(S|~y))+b[1]+2240044497&4294967295,v=S+(I<<21&4294967295|I>>>11),I=y+(S^(v|~P))+b[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~S))+b[15]+4264355552&4294967295,P=y+(I<<10&4294967295|I>>>22),I=S+(y^(P|~v))+b[6]+2734768916&4294967295,S=P+(I<<15&4294967295|I>>>17),I=v+(P^(S|~y))+b[13]+1309151649&4294967295,v=S+(I<<21&4294967295|I>>>11),I=y+(S^(v|~P))+b[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=P+(v^(y|~S))+b[11]+3174756917&4294967295,P=y+(I<<10&4294967295|I>>>22),I=S+(y^(P|~v))+b[2]+718787259&4294967295,S=P+(I<<15&4294967295|I>>>17),I=v+(P^(S|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var v=y-this.blockSize,b=this.B,S=this.h,P=0;P<y;){if(S==0)for(;P<=v;)i(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<y;)if(b[S++]=A.charCodeAt(P++),S==this.blockSize){i(this,b),S=0;break}}else for(;P<y;)if(b[S++]=A[P++],S==this.blockSize){i(this,b),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var v=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=v&255,v/=256;for(this.u(A),A=Array(16),y=v=0;4>y;++y)for(var b=0;32>b;b+=8)A[v++]=this.g[y]>>>b&255;return A};function s(A,y){var v=u;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=y(A)}function a(A,y){this.h=y;for(var v=[],b=!0,S=A.length-1;0<=S;S--){var P=A[S]|0;b&&P==y||(v[S]=P,b=!1)}this.g=v}var u={};function l(A){return-128<=A&&128>A?s(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function d(A){if(isNaN(A)||!isFinite(A))return w;if(0>A)return F(d(-A));for(var y=[],v=1,b=0;A>=v;b++)y[b]=A/v|0,v*=4294967296;return new a(y,0)}function g(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return F(g(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(y,8)),b=w,S=0;S<A.length;S+=8){var P=Math.min(8,A.length-S),I=parseInt(A.substring(S,S+P),y);8>P?(P=d(Math.pow(y,P)),b=b.j(P).add(d(I))):(b=b.j(v),b=b.add(d(I)))}return b}var w=l(0),T=l(1),N=l(16777216);n=a.prototype,n.m=function(){if(q(this))return-F(this).m();for(var A=0,y=1,v=0;v<this.g.length;v++){var b=this.i(v);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(M(this))return"0";if(q(this))return"-"+F(this).toString(A);for(var y=d(Math.pow(A,6)),v=this,b="";;){var S=ce(v,y).g;v=ne(v,S.j(y));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=S,M(v))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function M(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function q(A){return A.h==-1}n.l=function(A){return A=ne(this,A),q(A)?-1:M(A)?0:1};function F(A){for(var y=A.g.length,v=[],b=0;b<y;b++)v[b]=~A.g[b];return new a(v,~A.h).add(T)}n.abs=function(){return q(this)?F(this):this},n.add=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0,S=0;S<=y;S++){var P=b+(this.i(S)&65535)+(A.i(S)&65535),I=(P>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);b=I>>>16,P&=65535,I&=65535,v[S]=I<<16|P}return new a(v,v[v.length-1]&-2147483648?-1:0)};function ne(A,y){return A.add(F(y))}n.j=function(A){if(M(this)||M(A))return w;if(q(this))return q(A)?F(this).j(F(A)):F(F(this).j(A));if(q(A))return F(this.j(F(A)));if(0>this.l(N)&&0>A.l(N))return d(this.m()*A.m());for(var y=this.g.length+A.g.length,v=[],b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<A.g.length;S++){var P=this.i(b)>>>16,I=this.i(b)&65535,Ze=A.i(S)>>>16,bn=A.i(S)&65535;v[2*b+2*S]+=I*bn,Y(v,2*b+2*S),v[2*b+2*S+1]+=P*bn,Y(v,2*b+2*S+1),v[2*b+2*S+1]+=I*Ze,Y(v,2*b+2*S+1),v[2*b+2*S+2]+=P*Ze,Y(v,2*b+2*S+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new a(v,0)};function Y(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function K(A,y){this.g=A,this.h=y}function ce(A,y){if(M(y))throw Error("division by zero");if(M(A))return new K(w,w);if(q(A))return y=ce(F(A),y),new K(F(y.g),F(y.h));if(q(y))return y=ce(A,F(y)),new K(F(y.g),y.h);if(30<A.g.length){if(q(A)||q(y))throw Error("slowDivide_ only works with positive integers.");for(var v=T,b=y;0>=b.l(A);)v=Ee(v),b=Ee(b);var S=oe(v,1),P=oe(b,1);for(b=oe(b,2),v=oe(v,2);!M(b);){var I=P.add(b);0>=I.l(A)&&(S=S.add(v),P=I),b=oe(b,1),v=oe(v,1)}return y=ne(A,S.j(y)),new K(S,y)}for(S=w;0<=A.l(y);){for(v=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=d(v),I=P.j(y);q(I)||0<I.l(A);)v-=b,P=d(v),I=P.j(y);M(P)&&(P=T),S=S.add(P),A=ne(A,I)}return new K(S,A)}n.A=function(A){return ce(this,A).h},n.and=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)&A.i(b);return new a(v,this.h&A.h)},n.or=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)|A.i(b);return new a(v,this.h|A.h)},n.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)^A.i(b);return new a(v,this.h^A.h)};function Ee(A){for(var y=A.g.length+1,v=[],b=0;b<y;b++)v[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(v,A.h)}function oe(A,y){var v=y>>5;y%=32;for(var b=A.g.length-v,S=[],P=0;P<b;P++)S[P]=0<y?A.i(P+v)>>>y|A.i(P+v+1)<<32-y:A.i(P+v);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zc=Tf.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,qt=Tf.Integer=a}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zt={};var Gc,Nv,Ar,$c,zi,bo,Hc,Wc,Kc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break e;h=h[R]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,R={next:function(){if(!p&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function g(o,c,h){return o.call.apply(o.bind,arguments)}function w(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function T(o,c,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:w,T.apply(null,arguments)}function N(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function M(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,R,C){for(var j=Array(arguments.length-2),me=2;me<arguments.length;me++)j[me-2]=arguments[me];return c.prototype[R].apply(p,j)}}function q(o){let c=o.length;if(0<c){let h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function F(o,c){for(let h=1;h<arguments.length;h++){let p=arguments[h];if(l(p)){let R=o.length||0,C=p.length||0;o.length=R+C;for(let j=0;j<C;j++)o[R+j]=p[j]}else o.push(p)}}class ne{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Y(o){return/^[\s\xa0]*$/.test(o)}function K(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function ce(o){return ce[" "](o),o}ce[" "]=function(){};var Ee=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function oe(o,c,h){for(let p in o)c.call(h,o[p],p,o)}function A(o,c){for(let h in o)c.call(void 0,o[h],h,o)}function y(o){let c={};for(let h in o)c[h]=o[h];return c}let v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,c){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let C=0;C<v.length;C++)h=v[C],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function S(o){var c=1;o=o.split(":");let h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function P(o){u.setTimeout(()=>{throw o},0)}function I(){var o=sr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,h){let p=bn.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var bn=new ne(()=>new We,o=>o.reset());class We{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let An,Sn=!1,sr=new Ze,or=()=>{let o=u.Promise.resolve(void 0);An=()=>{o.then(fs)}};var fs=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(h){P(h)}var c=bn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Sn=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Pa=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function ue(o,c){if(Ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Ee){e:{try{ce(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Rn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ue.aa.h.call(this)}}M(ue,Ae);var Rn={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),ps=0;function ms(o,c,h,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=R,this.key=++ps,this.da=this.fa=!1}function ar(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function cr(o){this.src=o,this.g={},this.h=0}cr.prototype.add=function(o,c,h,p,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var j=ur(o,c,p,R);return-1<j?(c=o[j],h||(c.fa=!1)):(c=new ms(c,this.src,C,!!p,R),c.fa=h,o.push(c)),c};function ti(o,c){var h=c.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,c,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(ar(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ur(o,c,h,p){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==p)return R}return-1}var lr="closure_lm_"+(1e6*Math.random()|0),hr={};function ni(o,c,h,p,R){if(p&&p.once)return ii(o,c,h,p,R);if(Array.isArray(c)){for(var C=0;C<c.length;C++)ni(o,c[C],h,p,R);return null}return h=ai(h),o&&o[Pn]?o.K(c,h,d(p)?!!p.capture:!!p,R):ri(o,c,h,!1,p,R)}function ri(o,c,h,p,R,C){if(!c)throw Error("Invalid event type");var j=d(R)?!!R.capture:!!R,me=Xe(o);if(me||(o[lr]=me=new cr(o)),h=me.add(c,h,p,j,C),h.proxy)return h;if(p=gs(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Pa||(R=j),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(je(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function gs(){function o(h){return c.call(o.src,o.listener,h)}let c=et;return o}function ii(o,c,h,p,R){if(Array.isArray(c)){for(var C=0;C<c.length;C++)ii(o,c[C],h,p,R);return null}return h=ai(h),o&&o[Pn]?o.L(c,h,d(p)?!!p.capture:!!p,R):ri(o,c,h,!0,p,R)}function si(o,c,h,p,R){if(Array.isArray(c))for(var C=0;C<c.length;C++)si(o,c[C],h,p,R);else p=d(p)?!!p.capture:!!p,h=ai(h),o&&o[Pn]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=ur(C,h,p,R),-1<h&&(ar(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=Xe(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ur(c,h,p,R)),(h=-1<o?c[o]:null)&&oi(h))}function oi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Pn])ti(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(je(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Xe(c))?(ti(h,o),h.h==0&&(h.src=null,c[lr]=null)):ar(o)}}}function je(o){return o in hr?hr[o]:hr[o]="on"+o}function et(o,c){if(o.da)o=!0;else{c=new ue(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&oi(o),o=h.call(p,c)}return o}function Xe(o){return o=o[lr],o instanceof cr?o:null}var Jt="__closure_events_fn_"+(1e9*Math.random()>>>0);function ai(o){return typeof o=="function"?o:(o[Jt]||(o[Jt]=function(c){return o.handleEvent(c)}),o[Jt])}function ke(){yt.call(this),this.i=new cr(this),this.M=this,this.F=null}M(ke,yt),ke.prototype[Pn]=!0,ke.prototype.removeEventListener=function(o,c,h,p){si(this,o,c,h,p)};function Fe(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Ae(c,o);else if(c instanceof Ae)c.target=c.target||o;else{var R=c;c=new Ae(p,o),b(c,R)}if(R=!0,h)for(var C=h.length-1;0<=C;C--){var j=c.g=h[C];R=Yt(j,p,!0,c)&&R}if(j=c.g=o,R=Yt(j,p,!0,c)&&R,R=Yt(j,p,!1,c)&&R,h)for(C=0;C<h.length;C++)j=c.g=h[C],R=Yt(j,p,!1,c)&&R}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)ar(h[p]);delete o.g[c],o.h--}}this.F=null},ke.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},ke.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function Yt(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,C=0;C<c.length;++C){var j=c[C];if(j&&!j.da&&j.capture==h){var me=j.listener,Be=j.ha||j.src;j.fa&&ti(o.i,j),R=me.call(Be,p)!==!1&&R}}return R&&!p.defaultPrevented}function dr(o,c,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function ci(o){o.g=dr(()=>{o.g=null,o.i&&(o.i=!1,ci(o))},o.l);let c=o.h;o.h=null,o.m.apply(null,c)}class ui extends yt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ci(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(o){yt.call(this),this.h=o,this.g={}}M(lt,yt);var Cn=[];function fr(o){oe(o.g,function(c,h){this.g.hasOwnProperty(h)&&oi(c)},o),o.g={}}lt.prototype.N=function(){lt.aa.N.call(this),fr(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pr=u.JSON.stringify,_s=u.JSON.parse,Ca=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function li(){}li.prototype.h=null;function ys(o){return o.h||(o.h=o.i())}function Xt(){}var kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zt(){Ae.call(this,"d")}M(Zt,Ae);function hi(){Ae.call(this,"c")}M(hi,Ae);var xt={},vs=null;function Dn(){return vs=vs||new ke}xt.La="serverreachability";function ws(o){Ae.call(this,xt.La,o)}M(ws,Ae);function Nn(o){let c=Dn();Fe(c,new ws(c))}xt.STAT_EVENT="statevent";function di(o,c){Ae.call(this,xt.STAT_EVENT,o),this.stat=c}M(di,Ae);function De(o){let c=Dn();Fe(c,new di(c,o))}xt.Ma="timingevent";function Is(o,c){Ae.call(this,xt.Ma,o),this.size=c}M(Is,Ae);function On(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function ka(o,c,h,p,R,C){o.info(function(){if(o.g)if(C)for(var j="",me=C.split("&"),Be=0;Be<me.length;Be++){var de=me[Be].split("=");if(1<de.length){var qe=de[0];de=de[1];var ze=qe.split("_");j=2<=ze.length&&ze[1]=="type"?j+(qe+"="+de+"&"):j+(qe+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+h+`
`+j})}function Da(o,c,h,p,R,C,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+h+`
`+C+" "+j})}function Vt(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Oa(o,h)+(p?" "+p:"")})}function Na(o,c){o.info(function(){return"TIMEOUT: "+c})}xn.prototype.info=function(){};function Oa(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return pr(h)}catch{return c}}var mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Es={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fi;function en(){}M(en,li),en.prototype.g=function(){return new XMLHttpRequest},en.prototype.i=function(){return{}},fi=new en;function vt(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new le}function le(){this.i=null,this.g="",this.h=!1}var f={},m={};function _(o,c,h){o.L=1,o.v=As(Lt(c)),o.m=h,o.P=!0,E(o,null)}function E(o,c){o.F=Date.now(),V(o),o.A=Lt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),wh(h.i,"t",p),o.C=0,h=o.j.J,o.h=new le,o.g=Fh(o.j,h?c:null,!o.m),0<o.O&&(o.M=new ui(T(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Cn[0]=R.toString()),R=Cn);for(var C=0;C<R.length;C++){var j=ni(h,R[C],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Nn(),ka(o.i,o.u,o.A,o.l,o.R,o.m)}vt.prototype.ca=function(o){o=o.target;let c=this.M;c&&Mt(o)==3?c.j():this.Y(o)},vt.prototype.Y=function(o){try{if(o==this.g)e:{let ze=Mt(this.g);var c=this.g.Ba();let vr=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||Rh(this.g)))){this.J||ze!=4||c==7||(c==8||0>=vr?Nn(3):Nn(2)),$(this);var h=this.g.Z();this.X=h;t:if(k(this)){var p=Rh(this.g);o="";var R=p.length,C=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),X(this);var j="";break t}this.h.i=new u.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(C&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,Da(this.i,this.u,this.A,this.l,this.R,ze,h),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Be=this.g;if((me=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(me)){var de=me;break t}}de=null}if(h=de)Vt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ht(this,h);else{this.o=!1,this.s=3,De(12),ve(this),X(this);break e}}if(this.P){h=!0;let ft;for(;!this.J&&this.C<j.length;)if(ft=O(this,j),ft==m){ze==4&&(this.s=4,De(14),h=!1),Vt(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==f){this.s=4,De(15),Vt(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else Vt(this.i,this.l,ft,null),ht(this,ft);if(k(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||j.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)Vt(this.i,this.l,j,"[Invalid Chunked Response]"),ve(this),X(this);else if(0<j.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ma(qe),qe.M=!0,De(11))}}else Vt(this.i,this.l,j,null),ht(this,j);ze==4&&ve(this),this.o&&!this.J&&(ze==4?xh(this.j,this):(this.o=!1,V(this)))}else vg(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),ve(this),X(this)}}}catch{}finally{}};function k(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function O(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?m:(h=Number(c.substring(h,p)),isNaN(h)?f:(p+=1,p+h>c.length?m:(c=c.slice(p,p+h),o.C=p+h,c)))}vt.prototype.cancel=function(){this.J=!0,ve(this)};function V(o){o.S=Date.now()+o.I,B(o,o.I)}function B(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=On(T(o.ba,o),c)}function $(o){o.B&&(u.clearTimeout(o.B),o.B=null)}vt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Na(this.i,this.A),this.L!=2&&(Nn(),De(17)),ve(this),this.s=2,X(this)):B(this,this.S-o)};function X(o){o.j.G==0||o.J||xh(o.j,o)}function ve(o){$(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,fr(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ht(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||fe(h.h,o))){if(!o.K&&fe(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ks(h),Ps(h);else break e;La(h),De(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=On(T(h.Za,h),6e3));if(1>=U(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Mn(h,11)}else if((o.K||h.g==o)&&ks(h),!Y(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let de=R[c];if(h.T=de[0],de=de[1],h.G==2)if(de[0]=="c"){h.K=de[1],h.ia=de[2];let qe=de[3];qe!=null&&(h.la=qe,h.j.info("VER="+h.la));let ze=de[4];ze!=null&&(h.Aa=ze,h.j.info("SVER="+h.Aa));let vr=de[5];vr!=null&&typeof vr=="number"&&0<vr&&(p=1.5*vr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;let ft=o.g;if(ft){let Ns=ft.g?ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var C=p.h;C.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(_e(C,C.h),C.h=null))}if(p.D){let Fa=ft.g?ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Fa&&(p.ya=Fa,ge(p.I,p.D,Fa))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var j=o;if(p.qa=Mh(p,p.J?p.ia:null,p.W),j.K){Ue(p.h,j);var me=j,Be=p.L;Be&&(me.I=Be),me.B&&($(me),V(me)),p.g=j}else Nh(p);0<h.i.length&&Cs(h)}else de[0]!="stop"&&de[0]!="close"||Mn(h,7);else h.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Mn(h,7):Va(h):de[0]!="noop"&&h.l&&h.l.ta(de),h.v=0)}}Nn(4)}catch{}}var gr=class{constructor(o,c){this.g=o,this.map=c}};function dt(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vn(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function U(o){return o.h?1:o.g?o.g.size:0}function fe(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function _e(o,c){o.g?o.g.add(c):o.h=c}function Ue(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}dt.prototype.cancel=function(){if(this.i=pi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function pi(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(let h of o.g.values())c=c.concat(h.D);return c}return q(o.i)}function Ke(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function tn(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(let p in o)c[h++]=p;return c}}}function nn(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=tn(o),p=Ke(o),R=p.length,C=0;C<R;C++)c.call(void 0,p[C],h&&h[C],o)}var mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function og(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),R=null;if(0<=p){var C=o[h].substring(0,p);R=o[h].substring(p+1)}else C=o[h];c(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ln(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ln){this.h=o.h,Ts(this,o.j),this.o=o.o,this.g=o.g,bs(this,o.s),this.l=o.l;var c=o.i,h=new yi;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),gh(this,h),this.m=o.m}else o&&(c=String(o).match(mi))?(this.h=!1,Ts(this,c[1]||"",!0),this.o=gi(c[2]||""),this.g=gi(c[3]||"",!0),bs(this,c[4]),this.l=gi(c[5]||"",!0),gh(this,c[6]||"",!0),this.m=gi(c[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}Ln.prototype.toString=function(){var o=[],c=this.j;c&&o.push(_i(c,_h,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(_i(c,_h,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(_i(h,h.charAt(0)=="/"?ug:cg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",_i(h,hg)),o.join("")};function Lt(o){return new Ln(o)}function Ts(o,c,h){o.j=h?gi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function bs(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function gh(o,c,h){c instanceof yi?(o.i=c,dg(o.i,o.h)):(h||(c=_i(c,lg)),o.i=new yi(c,o.h))}function ge(o,c,h){o.i.set(c,h)}function As(o){return ge(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _i(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,ag),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ag(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var _h=/[#\/\?@]/g,cg=/[#\?:]/g,ug=/[#\?]/g,lg=/[#\?@]/g,hg=/#/g;function yi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function rn(o){o.g||(o.g=new Map,o.h=0,o.i&&og(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=yi.prototype,n.add=function(o,c){rn(this),this.i=null,o=_r(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function yh(o,c){rn(o),c=_r(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function vh(o,c){return rn(o),c=_r(o,c),o.g.has(c)}n.forEach=function(o,c){rn(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(c,R,p,this)},this)},this)},n.na=function(){rn(this);let o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){let R=o[p];for(let C=0;C<R.length;C++)h.push(c[p])}return h},n.V=function(o){rn(this);let c=[];if(typeof o=="string")vh(this,o)&&(c=c.concat(this.g.get(_r(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return rn(this),this.i=null,o=_r(this,o),vh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function wh(o,c,h){yh(o,c),0<h.length&&(o.i=null,o.g.set(_r(o,c),q(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];let C=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var R=C;j[p]!==""&&(R+="="+encodeURIComponent(String(j[p]))),o.push(R)}}return this.i=o.join("&")};function _r(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function dg(o,c){c&&!o.j&&(rn(o),o.i=null,o.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(yh(this,p),wh(this,R,h))},o)),o.j=c}function fg(o,c){let h=new xn;if(u.Image){let p=new Image;p.onload=N(sn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=N(sn,h,"TestLoadImage: error",!1,c,p),p.onabort=N(sn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=N(sn,h,"TestLoadImage: timeout",!1,c,p),u.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function pg(o,c){let h=new xn,p=new AbortController,R=setTimeout(()=>{p.abort(),sn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?sn(h,"TestPingServer: ok",!0,c):sn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),sn(h,"TestPingServer: error",!1,c)})}function sn(o,c,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function mg(){this.g=new Ca}function gg(o,c,h){let p=h||"";try{nn(o,function(R,C){let j=R;d(R)&&(j=pr(R)),c.push(p+C+"="+encodeURIComponent(j))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function vi(o){this.l=o.Ub||null,this.j=o.eb||!1}M(vi,li),vi.prototype.g=function(){return new Ss(this.l,this.j)},vi.prototype.i=function(o){return function(){return o}}({});function Ss(o,c){ke.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Ss,ke),n=Ss.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Ii(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ii(this)),this.g&&(this.readyState=3,Ii(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ih(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ih(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?wi(this):Ii(this),this.readyState==3&&Ih(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,wi(this))},n.Qa=function(o){this.g&&(this.response=o,wi(this))},n.ga=function(){this.g&&wi(this)};function wi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ii(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Ii(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Eh(o){let c="";return oe(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function xa(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Eh(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ge(o,c,h))}function Te(o){ke.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(Te,ke);var _g=/^https?$/i,yg=["POST","PUT"];n=Te.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fi.g(),this.v=this.o?ys(this.o):ys(fi),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){Th(this,C);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(let C of p.keys())h.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),R=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(yg,c,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[C,j]of h)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sh(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Th(this,C)}};function Th(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,bh(o),Rs(o)}function bh(o){o.A||(o.A=!0,Fe(o,"complete"),Fe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Fe(this,"complete"),Fe(this,"abort"),Rs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rs(this,!0)),Te.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ah(this):this.bb())},n.bb=function(){Ah(this)};function Ah(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Mt(o)!=4||o.Z()!=2)){if(o.u&&Mt(o)==4)dr(o.Ea,0,o);else if(Fe(o,"readystatechange"),Mt(o)==4){o.h=!1;try{let j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=j===0){var R=String(o.D).match(mi)[1]||null;!R&&u.self&&u.self.location&&(R=u.self.location.protocol.slice(0,-1)),p=!_g.test(R?R.toLowerCase():"")}h=p}if(h)Fe(o,"complete"),Fe(o,"success");else{o.m=6;try{var C=2<Mt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",bh(o)}}finally{Rs(o)}}}}function Rs(o,c){if(o.g){Sh(o);let h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Fe(o,"ready");try{h.onreadystatechange=p}catch{}}}function Sh(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),_s(c)}};function Rh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vg(o){let c={};o=(o.g&&2<=Mt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Y(o[p]))continue;var h=S(o[p]);let R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let C=c[R]||[];c[R]=C,C.push(h)}A(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ph(o){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,o),this.cb=Ei("retryDelaySeedMs",1e4,o),this.Wa=Ei("forwardChannelMaxRetries",2,o),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new dt(o&&o.concurrentRequestLimit),this.Da=new mg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ph.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){De(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Mh(this,null,this.W),Cs(this)};function Va(o){if(Ch(o),o.G==3){var c=o.U++,h=Lt(o.I);if(ge(h,"SID",o.K),ge(h,"RID",c),ge(h,"TYPE","terminate"),Ti(o,h),c=new vt(o,o.j,c),c.L=2,c.v=As(Lt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Fh(c.j,null),c.g.ea(c.v)),c.F=Date.now(),V(c)}Lh(o)}function Ps(o){o.g&&(Ma(o),o.g.cancel(),o.g=null)}function Ch(o){Ps(o),o.u&&(u.clearTimeout(o.u),o.u=null),ks(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Cs(o){if(!Vn(o.h)&&!o.s){o.s=!0;var c=o.Ga;An||or(),Sn||(An(),Sn=!0),sr.add(c,o),o.B=0}}function wg(o,c){return U(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=On(T(o.Ga,o,c),Vh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let R=new vt(this,this.j,o),C=this.o;if(this.S&&(C?(C=y(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Dh(this,R,c),h=Lt(this.I),ge(h,"RID",o),ge(h,"CVER",22),this.D&&ge(h,"X-HTTP-Session-Id",this.D),Ti(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(Eh(C)))+"&"+c:this.m&&xa(h,this.m,C)),_e(this.h,R),this.Ua&&ge(h,"TYPE","init"),this.P?(ge(h,"$req",c),ge(h,"SID","null"),R.T=!0,_(R,h,null)):_(R,h,c),this.G=2}}else this.G==3&&(o?kh(this,o):this.i.length==0||Vn(this.h)||kh(this))};function kh(o,c){var h;c?h=c.l:h=o.U++;let p=Lt(o.I);ge(p,"SID",o.K),ge(p,"RID",h),ge(p,"AID",o.T),Ti(o,p),o.m&&o.o&&xa(p,o.m,o.o),h=new vt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Dh(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),_e(o.h,h),_(h,p,c)}function Ti(o,c){o.H&&oe(o.H,function(h,p){ge(c,p,h)}),o.l&&nn({},function(h,p){ge(c,p,h)})}function Dh(o,c,h){h=Math.min(o.i.length,h);var p=o.l?T(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){let j=["count="+h];C==-1?0<h?(C=R[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let me=!0;for(let Be=0;Be<h;Be++){let de=R[Be].g,qe=R[Be].map;if(de-=C,0>de)C=Math.max(0,R[Be].g-100),me=!1;else try{gg(qe,j,"req"+de+"_")}catch{p&&p(qe)}}if(me){p=j.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function Nh(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;An||or(),Sn||(An(),Sn=!0),sr.add(c,o),o.v=0}}function La(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=On(T(o.Fa,o),Vh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Oh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=On(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Ps(this),Oh(this))};function Ma(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Oh(o){o.g=new vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Lt(o.qa);ge(c,"RID","rpc"),ge(c,"SID",o.K),ge(c,"AID",o.T),ge(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ge(c,"TO",o.ja),ge(c,"TYPE","xmlhttp"),Ti(o,c),o.m&&o.o&&xa(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=As(Lt(c)),h.m=null,h.P=!0,E(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Ps(this),La(this),De(19))};function ks(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function xh(o,c){var h=null;if(o.g==c){ks(o),Ma(o),o.g=null;var p=2}else if(fe(o.h,c))h=c.D,Ue(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=Dn(),Fe(p,new Is(p,h)),Cs(o)}else Nh(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&wg(o,c)||p==2&&La(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),R){case 1:Mn(o,5);break;case 4:Mn(o,10);break;case 3:Mn(o,6);break;default:Mn(o,2)}}}function Vh(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Mn(o,c){if(o.j.info("Error code "+c),c==2){var h=T(o.fb,o),p=o.Xa;let R=!p;p=new Ln(p||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ts(p,"https"),As(p),R?fg(p.toString(),h):pg(p.toString(),h)}else De(2);o.G=0,o.l&&o.l.sa(c),Lh(o),Ch(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Lh(o){if(o.G=0,o.ka=[],o.l){let c=pi(o.h);(c.length!=0||o.i.length!=0)&&(F(o.ka,c),F(o.ka,o.i),o.h.i.length=0,q(o.i),o.i.length=0),o.l.ra()}}function Mh(o,c,h){var p=h instanceof Ln?Lt(h):new Ln(h);if(p.g!="")c&&(p.g=c+"."+p.g),bs(p,p.s);else{var R=u.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var C=new Ln(null);p&&Ts(C,p),c&&(C.g=c),R&&bs(C,R),h&&(C.l=h),p=C}return h=o.D,c=o.ya,h&&c&&ge(p,h,c),ge(p,"VER",o.la),Ti(o,p),p}function Fh(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Te(new vi({eb:h})):new Te(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uh(){}n=Uh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ds(){}Ds.prototype.g=function(o,c){return new tt(o,c)};function tt(o,c){ke.call(this),this.g=new Ph(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!Y(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Y(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new yr(this)}M(tt,ke),tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){Va(this.g)},tt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=pr(o),o=h);c.i.push(new gr(c.Ya++,o)),c.G==3&&Cs(c)},tt.prototype.N=function(){this.g.l=null,delete this.j,Va(this.g),delete this.g,tt.aa.N.call(this)};function Bh(o){Zt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(let h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}M(Bh,Zt);function jh(){hi.call(this),this.status=1}M(jh,hi);function yr(o){this.g=o}M(yr,Uh),yr.prototype.ua=function(){Fe(this.g,"a")},yr.prototype.ta=function(o){Fe(this.g,new Bh(o))},yr.prototype.sa=function(o){Fe(this.g,new jh)},yr.prototype.ra=function(){Fe(this.g,"b")},Ds.prototype.createWebChannel=Ds.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,Kc=zt.createWebChannelTransport=function(){return new Ds},Wc=zt.getStatEventTarget=function(){return Dn()},Hc=zt.Event=xt,bo=zt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,zi=zt.ErrorCode=mr,Es.COMPLETE="complete",$c=zt.EventType=Es,Xt.EventType=kn,kn.OPEN="a",kn.CLOSE="b",kn.ERROR="c",kn.MESSAGE="d",ke.prototype.listen=ke.prototype.K,Ar=zt.WebChannel=Xt,Nv=zt.FetchXmlHttpFactory=vi,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,Gc=zt.XhrIo=Te}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});var bf="@firebase/firestore",Af="4.8.0";var Ve=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");var Jr="11.10.0";var Qn=new an("@firebase/firestore");function Sr(){return Qn.logLevel}function z(n,...e){if(Qn.logLevel<=se.DEBUG){let t=e.map(Ll);Qn.debug(`Firestore (${Jr}): ${n}`,...t)}}function Gt(n,...e){if(Qn.logLevel<=se.ERROR){let t=e.map(Ll);Qn.error(`Firestore (${Jr}): ${n}`,...t)}}function vn(n,...e){if(Qn.logLevel<=se.WARN){let t=e.map(Ll);Qn.warn(`Firestore (${Jr}): ${n}`,...t)}}function Ll(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function J(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,pp(n,r,t)}function pp(n,e,t){let r=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Gt(r),new Error(r)}function pe(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||pp(e,i,r)}function ee(n,e){return n}var x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},G=class extends nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Rt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Do=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},eu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}},tu=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},nu=class{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){pe(this.o===void 0,42304);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?u(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new Do(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}},ru=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},iu=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ru(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}},No=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},su=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){pe(this.o===void 0,3512);let r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new No(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new No(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Ov(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function mp(){return new TextEncoder}var Qi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=Ov(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function ie(n,e){return n<e?-1:n>e?1:0}function ou(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return ie(r,i);{let s=mp(),a=xv(s.encode(Sf(n,t)),s.encode(Sf(e,t)));return a!==0?a:ie(r,i)}}t+=r>65535?2:1}return ie(n.length,e.length)}function Sf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function xv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ie(n[t],e[t]);return ie(n.length,e.length)}function xr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var Rf="__name__",Oo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&J(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ie(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):ou(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qt.fromString(e.substring(4,e.length-2))}},Ie=class n extends Oo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new G(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},Vv=/^[_a-zA-Z][_a-zA-Z0-9]*$/,it=class n extends Oo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return Vv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rf}static keyField(){return new n([Rf])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new G(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new G(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new G(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var Q=class n{constructor(e){this.path=e}static fromPath(e){return new n(Ie.fromString(e))}static fromName(e){return new n(Ie.fromString(e).popFirst(5))}static empty(){return new n(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new Ie(e.slice()))}};function gp(n,e,t){if(!t)throw new G(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Lv(n,e,t,r){if(e===!0&&r===!0)throw new G(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Pf(n){if(!Q.isDocumentKey(n))throw new G(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Cf(n){if(Q.isDocumentKey(n))throw new G(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _p(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ml(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function st(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Ml(n);throw new G(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Pe(n,e){let t={typeString:n};return e&&(t.value=e),t}function os(n,e){if(!_p(n))throw new G(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new G(x.INVALID_ARGUMENT,t);return!0}var kf=-62135596800,Df=1e6,Ce=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Df);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<kf)throw new G(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Df}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(os(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-kf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Pe("string",Ce._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};var te=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Ce(0,0))}static max(){return new n(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ji=-1,au=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};au.UNKNOWN_ID=-1;function Mv(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new Jn(i,Q.empty(),e)}function Fv(n){return new Jn(n.readTime,n.key,Ji)}var Jn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(te.min(),Q.empty(),Ji)}static max(){return new n(te.max(),Q.empty(),Ji)}};function Uv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}var Bv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",cu=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Yr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==Bv)throw n;z("LocalStore","Unexpectedly lost primary lease")}var L=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),u=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(g=>{a[d]=g,++u,u===s&&r(a)},g=>i(g))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function jv(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xr(n){return n.name==="IndexedDbTransactionError"}var Vr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};Vr.ue=-1;var Fl=-1;function da(n){return n==null}function Yi(n){return n===0&&1/n==-1/0}function qv(n){return typeof n=="number"&&Number.isInteger(n)&&!Yi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var yp="";function zv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Nf(e)),e=Gv(n.get(t),e);return Nf(e)}function Gv(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case yp:t+="";break;default:t+=s}}return t}function Nf(n){return n+yp+""}var $v="remoteDocuments",vp="owner";var wp="mutationQueues";var Ip="mutations";var Ep="documentMutations",Hv="remoteDocumentsV14";var Tp="remoteDocumentGlobal";var bp="targets";var Ap="targetDocuments";var Sp="targetGlobal",Rp="collectionParents";var Pp="clientMetadata";var Cp="bundles";var kp="namedQueries";var Wv="indexConfiguration";var Kv="indexState";var Qv="indexEntries";var Dp="documentOverlays";var Jv="globals";var Yv=[wp,Ip,Ep,$v,bp,vp,Sp,Ap,Pp,Tp,Rp,Cp,kp],LT=[...Yv,Dp],Xv=[wp,Ip,Ep,Hv,bp,vp,Sp,Ap,Pp,Tp,Rp,Cp,kp,Dp],Zv=Xv,ew=[...Zv,Wv,Kv,Qv];var MT=[...ew,Jv];function Of(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Np(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var be=class n{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kr(this.root,e,this.comparator,!0)}},kr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Pt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}};Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Le=class n{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xo(this.data.getIterator())}getIteratorFrom(e){return new xo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},xo=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var ut=class n{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new n([])}unionWith(e){let t=new Le(it.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Vo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var He=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Vo("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};He.EMPTY_BYTE_STRING=new He("");var tw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(n){if(pe(!!n,39018),typeof n=="string"){let e=0,t=tw.exec(n);if(pe(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?He.fromBase64String(n):He.fromUint8Array(n)}var Op="server_timestamp",xp="__type__",Vp="__previous_value__",Lp="__local_write_time__";function Ul(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[xp])===null||t===void 0?void 0:t.stringValue)===Op}function fa(n){let e=n.mapValue.fields[Vp];return Ul(e)?fa(e):e}function Xi(n){let e=$t(n.mapValue.fields[Lp].timestampValue);return new Ce(e.seconds,e.nanos)}var uu=class{constructor(e,t,r,i,s,a,u,l,d,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=g}},Lo="(default)",Mo=class n{constructor(e,t){this.projectId=e,this.database=t||Lo}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===Lo}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Bl="__type__",Mp="__max__",Ao={mapValue:{fields:{__type__:{stringValue:Mp}}}},jl="__vector__",Lr="value";function wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ul(n)?4:Up(n)?9007199254740991:Fp(n)?10:11:J(28295,{value:n})}function Dt(n,e){if(n===e)return!0;let t=wn(n);if(t!==wn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xi(n).isEqual(Xi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=$t(i.timestampValue),u=$t(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ht(i.bytesValue).isEqual(Ht(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=ye(i.doubleValue),u=ye(s.doubleValue);return a===u?Yi(a)===Yi(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return xr(n.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Of(a)!==Of(u))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Dt(a[l],u[l])))return!1;return!0}(n,e);default:return J(52216,{left:n})}}function Zi(n,e){return(n.values||[]).find(t=>Dt(t,e))!==void 0}function Mr(n,e){if(n===e)return 0;let t=wn(n),r=wn(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(s,a){let u=ye(s.integerValue||s.doubleValue),l=ye(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return xf(n.timestampValue,e.timestampValue);case 4:return xf(Xi(n),Xi(e));case 5:return ou(n.stringValue,e.stringValue);case 6:return function(s,a){let u=Ht(s),l=Ht(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){let g=ie(u[d],l[d]);if(g!==0)return g}return ie(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let u=ie(ye(s.latitude),ye(a.latitude));return u!==0?u:ie(ye(s.longitude),ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Vf(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,g;let w=s.fields||{},T=a.fields||{},N=(u=w[Lr])===null||u===void 0?void 0:u.arrayValue,M=(l=T[Lr])===null||l===void 0?void 0:l.arrayValue,q=ie(((d=N?.values)===null||d===void 0?void 0:d.length)||0,((g=M?.values)===null||g===void 0?void 0:g.length)||0);return q!==0?q:Vf(N,M)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ao.mapValue&&a===Ao.mapValue)return 0;if(s===Ao.mapValue)return 1;if(a===Ao.mapValue)return-1;let u=s.fields||{},l=Object.keys(u),d=a.fields||{},g=Object.keys(d);l.sort(),g.sort();for(let w=0;w<l.length&&w<g.length;++w){let T=ou(l[w],g[w]);if(T!==0)return T;let N=Mr(u[l[w]],d[g[w]]);if(N!==0)return N}return ie(l.length,g.length)}(n.mapValue,e.mapValue);default:throw J(23264,{le:t})}}function xf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);let t=$t(n),r=$t(e),i=ie(t.seconds,r.seconds);return i!==0?i:ie(t.nanos,r.nanos)}function Vf(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Mr(t[i],r[i]);if(s)return s}return ie(t.length,r.length)}function Fr(n){return lu(n)}function lu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=$t(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ht(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=lu(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${lu(t.fields[a])}`;return i+"}"}(n.mapValue):J(61005,{value:n})}function Po(n){switch(wn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=fa(n);return e?16+Po(e):16;case 5:return 2*n.stringValue.length;case 6:return Ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Po(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Tn(r.fields,(s,a)=>{i+=s.length+Po(a)}),i}(n.mapValue);default:throw J(13486,{value:n})}}function hu(n){return!!n&&"integerValue"in n}function ql(n){return!!n&&"arrayValue"in n}function Lf(n){return!!n&&"nullValue"in n}function Mf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Co(n){return!!n&&"mapValue"in n}function Fp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Bl])===null||t===void 0?void 0:t.stringValue)===jl}function $i(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=$i(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$i(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Up(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Mp}var UT={mapValue:{fields:{[Bl]:{stringValue:jl},[Lr]:{arrayValue:{}}}}};var rt=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Co(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$i(t)}setAll(e){let t=it.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=$i(a):i.push(u.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());Co(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Co(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Tn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n($i(this.value))}};function Bp(n){let e=[];return Tn(n.fields,(t,r)=>{let i=new it([t]);if(Co(r)){let s=Bp(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new ut(e)}var gt=class n{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,te.min(),te.min(),te.min(),rt.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,te.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,te.min(),te.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,te.min(),te.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Ur=class{constructor(e,t){this.position=e,this.inclusive=t}};function Ff(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=Mr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dt(n.position[t],e.position[t]))return!1;return!0}var Br=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function nw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Fo=class{},Oe=class n extends Fo{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new fu(e,t,r):t==="array-contains"?new gu(e,r):t==="in"?new _u(e,r):t==="not-in"?new yu(e,r):t==="array-contains-any"?new vu(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new pu(e,r):new mu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Mr(t,this.value)):t!==null&&wn(this.value)===wn(t)&&this.matchesComparison(Mr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Nt=class n extends Fo{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return jp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function jp(n){return n.op==="and"}function qp(n){return rw(n)&&jp(n)}function rw(n){for(let e of n.filters)if(e instanceof Nt)return!1;return!0}function du(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Fr(n.value);if(qp(n))return n.filters.map(e=>du(e)).join(",");{let e=n.filters.map(t=>du(t)).join(",");return`${n.op}(${e})`}}function zp(n,e){return n instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)}(n,e):n instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&zp(a,i.filters[u]),!0):!1}(n,e):void J(19439)}function Gp(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Fr(t.value)}`}(n):n instanceof Nt?function(t){return t.op.toString()+" {"+t.getFilters().map(Gp).join(" ,")+"}"}(n):"Filter"}var fu=class extends Oe{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){let t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}},pu=class extends Oe{constructor(e,t){super(e,"in",t),this.keys=$p("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},mu=class extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=$p("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function $p(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Q.fromName(r.referenceValue))}var gu=class extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ql(t)&&Zi(t.arrayValue,this.value)}},_u=class extends Oe{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Zi(this.value.arrayValue,t)}},yu=class extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zi(this.value.arrayValue,t)}},vu=class extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ql(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zi(this.value.arrayValue,r))}};var wu=class{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}};function Bf(n,e=null,t=[],r=[],i=null,s=null,a=null){return new wu(n,e,t,r,i,s,a)}function zl(n){let e=ee(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>du(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),da(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Fr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Fr(r)).join(",")),e.Pe=t}return e.Pe}function Gl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uf(n.startAt,e.startAt)&&Uf(n.endAt,e.endAt)}function Iu(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var jr=class{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function iw(n,e,t,r,i,s,a,u){return new jr(n,e,t,r,i,s,a,u)}function pa(n){return new jr(n)}function jf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sw(n){return n.collectionGroup!==null}function Hi(n){let e=ee(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Le(it.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Br(s,r))}),t.has(it.keyField().canonicalString())||e.Te.push(new Br(it.keyField(),r))}return e.Te}function Ct(n){let e=ee(n);return e.Ie||(e.Ie=ow(e,Hi(n))),e.Ie}function ow(n,e){if(n.limitType==="F")return Bf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Br(i.field,s)});let t=n.endAt?new Ur(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ur(n.startAt.position,n.startAt.inclusive):null;return Bf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Eu(n,e,t){return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ma(n,e){return Gl(Ct(n),Ct(e))&&n.limitType===e.limitType}function Hp(n){return`${zl(Ct(n))}|lt:${n.limitType}`}function Rr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Gp(i)).join(", ")}]`),da(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Fr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Fr(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function ga(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Hi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){let d=Ff(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Hi(r),i)||r.endAt&&!function(a,u,l){let d=Ff(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Hi(r),i))}(n,e)}function aw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wp(n){return(e,t)=>{let r=!1;for(let i of Hi(n)){let s=cw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cw(n,e,t){let r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(s,a,u){let l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?Mr(l,d):J(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:n.dir})}}var Wt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Tn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Np(this.inner)}size(){return this.innerSize}};var uw=new be(Q.comparator);function Kt(){return uw}var Kp=new be(Q.comparator);function Gi(...n){let e=Kp;for(let t of n)e=e.insert(t.key,t);return e}function Qp(n){let e=Kp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function $n(){return Wi()}function Jp(){return Wi()}function Wi(){return new Wt(n=>n.toString(),(n,e)=>n.isEqual(e))}var lw=new be(Q.comparator),hw=new Le(Q.comparator);function ae(...n){let e=hw;for(let t of n)e=e.add(t);return e}var dw=new Le(ie);function fw(){return dw}function $l(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yi(e)?"-0":e}}function Yp(n){return{integerValue:""+n}}function pw(n,e){return qv(e)?Yp(e):$l(n,e)}var qr=class{constructor(){this._=void 0}};function mw(n,e,t){return n instanceof zr?function(i,s){let a={fields:{[xp]:{stringValue:Op},[Lp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ul(s)&&(s=fa(s)),s&&(a.fields[Vp]=s),{mapValue:a}}(t,e):n instanceof Yn?Zp(n,e):n instanceof Xn?em(n,e):function(i,s){let a=Xp(i,s),u=qf(a)+qf(i.Ee);return hu(a)&&hu(i.Ee)?Yp(u):$l(i.serializer,u)}(n,e)}function gw(n,e,t){return n instanceof Yn?Zp(n,e):n instanceof Xn?em(n,e):t}function Xp(n,e){return n instanceof Gr?function(r){return hu(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var zr=class extends qr{},Yn=class extends qr{constructor(e){super(),this.elements=e}};function Zp(n,e){let t=tm(e);for(let r of n.elements)t.some(i=>Dt(i,r))||t.push(r);return{arrayValue:{values:t}}}var Xn=class extends qr{constructor(e){super(),this.elements=e}};function em(n,e){let t=tm(e);for(let r of n.elements)t=t.filter(i=>!Dt(i,r));return{arrayValue:{values:t}}}var Gr=class extends qr{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function qf(n){return ye(n.integerValue||n.doubleValue)}function tm(n){return ql(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function _w(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Yn&&i instanceof Yn||r instanceof Xn&&i instanceof Xn?xr(r.elements,i.elements,Dt):r instanceof Gr&&i instanceof Gr?Dt(r.Ee,i.Ee):r instanceof zr&&i instanceof zr}(n.transform,e.transform)}var Tu=class{constructor(e,t){this.version=e,this.transformResults=t}},ot=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function ko(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var $r=class{};function nm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hr(n.key,ot.none()):new Zn(n.key,n.data,ot.none());{let t=n.data,r=rt.empty(),i=new Le(it.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ot(n.key,r,new ut(i.toArray()),ot.none())}}function yw(n,e,t){n instanceof Zn?function(i,s,a){let u=i.value.clone(),l=Gf(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Ot?function(i,s,a){if(!ko(i.precondition,s))return void s.convertToUnknownDocument(a.version);let u=Gf(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(rm(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ki(n,e,t,r){return n instanceof Zn?function(s,a,u,l){if(!ko(s.precondition,a))return u;let d=s.value.clone(),g=$f(s.fieldTransforms,l,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ot?function(s,a,u,l){if(!ko(s.precondition,a))return u;let d=$f(s.fieldTransforms,l,a),g=a.data;return g.setAll(rm(s)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(w=>w.field))}(n,e,t,r):function(s,a,u){return ko(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function vw(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Xp(r.transform,i||null);s!=null&&(t===null&&(t=rt.empty()),t.set(r.field,s))}return t||null}function zf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xr(r,i,(s,a)=>_w(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Zn=class extends $r{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Ot=class extends $r{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function rm(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Gf(n,e,t){let r=new Map;pe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,gw(a,u,t[i]))}return r}function $f(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,mw(s,a,e))}return r}var Hr=class extends $r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},bu=class extends $r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Au=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&yw(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ki(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ki(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Jp();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;let l=nm(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&xr(this.mutations,e.mutations,(t,r)=>zf(t,r))&&xr(this.baseMutations,e.baseMutations,(t,r)=>zf(t,r))}},Su=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){pe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return lw}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var Ru=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Pu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Se,he;function ww(n){switch(n){case x.OK:return J(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return J(15467,{code:n})}}function im(n){if(n===void 0)return Gt("GRPC error has no .code"),x.UNKNOWN;switch(n){case Se.OK:return x.OK;case Se.CANCELLED:return x.CANCELLED;case Se.UNKNOWN:return x.UNKNOWN;case Se.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Se.INTERNAL:return x.INTERNAL;case Se.UNAVAILABLE:return x.UNAVAILABLE;case Se.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Se.NOT_FOUND:return x.NOT_FOUND;case Se.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Se.ABORTED:return x.ABORTED;case Se.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Se.DATA_LOSS:return x.DATA_LOSS;default:return J(39323,{code:n})}}(he=Se||(Se={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";var Hf=null;var Iw=new qt([4294967295,4294967295],0);function Wf(n){let e=mp().encode(n),t=new zc;return t.update(e),new Uint8Array(t.digest())}function Kf(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qt([t,r],0),new qt([i,s],0)]}var Cu=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hn(`Invalid padding: ${t}`);if(r<0)throw new Hn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=qt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(qt.fromNumber(r)));return i.compare(Iw)===1&&(i=new qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=Wf(e),[r,i]=Kf(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;let t=Wf(e),[r,i]=Kf(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);this.we(a)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Hn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Uo=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,es.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(te.min(),i,new be(ie),Kt(),ae())}},es=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,ae(),ae(),ae())}};var Dr=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},Bo=class{constructor(e,t){this.targetId=e,this.De=t}},jo=class{constructor(e,t,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},qo=class{constructor(){this.ve=0,this.Ce=Qf(),this.Fe=He.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ae(),t=ae(),r=ae();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new es(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Qf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},ku=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=Kt(),this.je=So(),this.Je=So(),this.He=new be(ie)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(Iu(s))if(r===0){let a=new Q(s.path);this.Xe(t,a,gt.newNoDocument(a,te.min()))}else pe(r===1,20013,{expectedCount:r});else{let a=this.ot(t);if(a!==r){let u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}Hf?.ct(function(g,w,T,N,M){var q,F,ne,Y,K,ce;let Ee={localCacheCount:g,existenceFilterCount:w.count,databaseId:T.database,projectId:T.projectId},oe=w.unchangedNames;return oe&&(Ee.bloomFilter={applied:M===0,hashCount:(q=oe?.hashCount)!==null&&q!==void 0?q:0,bitmapLength:(Y=(ne=(F=oe?.bits)===null||F===void 0?void 0:F.bitmap)===null||ne===void 0?void 0:ne.length)!==null&&Y!==void 0?Y:0,padding:(ce=(K=oe?.bits)===null||K===void 0?void 0:K.padding)!==null&&ce!==void 0?ce:0,mightContain:A=>{var y;return(y=N?.mightContain(A))!==null&&y!==void 0&&y}}),Ee}(a,e.De,this.We.lt(),u,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,u;try{a=Ht(r).toUint8Array()}catch(l){if(l instanceof Vo)return vn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Cu(a,i,s)}catch(l){return vn(l instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,a)=>{let u=this.st(a);if(u){if(s.current&&Iu(u.target)){let l=new Q(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,gt.newNoDocument(l,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}});let r=ae();this.Je.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{let d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));let i=new Uo(e,t,this.He,this.ze,r);return this.ze=Kt(),this.je=So(),this.Je=So(),this.He=new be(ie),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new qo,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Le(ie),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Le(ie),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new qo),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function So(){return new be(Q.comparator)}function Qf(){return new be(Q.comparator)}var Ew={asc:"ASCENDING",desc:"DESCENDING"},Tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bw={and:"AND",or:"OR"},Du=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Nu(n,e){return n.useProto3Json||da(e)?e:{value:e}}function zo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Aw(n,e){return zo(n,e.toTimestamp())}function kt(n){return pe(!!n,49232),te.fromTimestamp(function(t){let r=$t(t);return new Ce(r.seconds,r.nanos)}(n))}function Hl(n,e){return Ou(n,e).canonicalString()}function Ou(n,e){let t=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function om(n){let e=Ie.fromString(n);return pe(hm(e),10190,{key:e.toString()}),e}function xu(n,e){return Hl(n.databaseId,e.path)}function Qc(n,e){let t=om(e);if(t.get(1)!==n.databaseId.projectId)throw new G(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(cm(t))}function am(n,e){return Hl(n.databaseId,e)}function Sw(n){let e=om(n);return e.length===4?Ie.emptyPath():cm(e)}function Vu(n){return new Ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cm(n){return pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jf(n,e,t){return{name:xu(n,e),fields:t.value.mapValue.fields}}function Rw(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,g){return d.useProto3Json?(pe(g===void 0||typeof g=="string",58123),He.fromBase64String(g||"")):(pe(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),He.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let g=d.code===void 0?x.UNKNOWN:im(d.code);return new G(g,d.message||"")}(a);t=new jo(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Qc(n,r.document.name),s=kt(r.document.updateTime),a=r.document.createTime?kt(r.document.createTime):te.min(),u=new rt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(i,s,a,u),d=r.targetIds||[],g=r.removedTargetIds||[];t=new Dr(d,g,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Qc(n,r.document),s=r.readTime?kt(r.readTime):te.min(),a=gt.newNoDocument(i,s),u=r.removedTargetIds||[];t=new Dr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Qc(n,r.document),s=r.removedTargetIds||[];t=new Dr([],s,i,null)}else{if(!("filter"in e))return J(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new Pu(i,s),u=r.targetId;t=new Bo(u,a)}}return t}function Pw(n,e){let t;if(e instanceof Zn)t={update:Jf(n,e.key,e.value)};else if(e instanceof Hr)t={delete:xu(n,e.key)};else if(e instanceof Ot)t={update:Jf(n,e.key,e.data),updateMask:Mw(e.fieldMask)};else{if(!(e instanceof bu))return J(16599,{Rt:e.type});t={verify:xu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let u=a.transform;if(u instanceof zr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Yn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Xn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Gr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw J(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Aw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(n,e.precondition)),t}function Cw(n,e){return n&&n.length>0?(pe(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?kt(i.updateTime):kt(s);return a.isEqual(te.min())&&(a=kt(s)),new Tu(a,i.transformResults||[])}(t,e))):[]}function kw(n,e){return{documents:[am(n,e.path)]}}function Dw(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=am(n,i);let s=function(d){if(d.length!==0)return lm(Nt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(g=>function(T){return{field:Pr(T.field),direction:xw(T.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=Nu(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function Nw(n){let e=Sw(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){pe(r===1,65062);let g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let s=[];t.where&&(s=function(w){let T=um(w);return T instanceof Nt&&qp(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(w){return w.map(T=>function(M){return new Br(Cr(M.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(T))}(t.orderBy));let u=null;t.limit&&(u=function(w){let T;return T=typeof w=="object"?w.value:w,da(T)?null:T}(t.limit));let l=null;t.startAt&&(l=function(w){let T=!!w.before,N=w.values||[];return new Ur(N,T)}(t.startAt));let d=null;return t.endAt&&(d=function(w){let T=!w.before,N=w.values||[];return new Ur(N,T)}(t.endAt)),iw(e,i,a,s,u,"F",l,d)}function Ow(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function um(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=Cr(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=Cr(t.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=Cr(t.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=Cr(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(Cr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nt.create(t.compositeFilter.filters.map(r=>um(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(t.compositeFilter.op))}(n):J(30097,{filter:n})}function xw(n){return Ew[n]}function Vw(n){return Tw[n]}function Lw(n){return bw[n]}function Pr(n){return{fieldPath:n.canonicalString()}}function Cr(n){return it.fromServerFormat(n.fieldPath)}function lm(n){return n instanceof Oe?function(t){if(t.op==="=="){if(Mf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NAN"}};if(Lf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NAN"}};if(Lf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(t.field),op:Vw(t.op),value:t.value}}}(n):n instanceof Nt?function(t){let r=t.getFilters().map(i=>lm(i));return r.length===1?r[0]:{compositeFilter:{op:Lw(t.op),filters:r}}}(n):J(54877,{filter:n})}function Mw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var ts=class n{constructor(e,t,r,i,s=te.min(),a=te.min(),u=He.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Lu=class{constructor(e){this.gt=e}};function Fw(n){let e=Nw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Eu(e,e.limit,"L"):e}var Go=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ye(e.integerValue));else if("doubleValue"in e){let r=ye(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Yi(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=$t(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Ht(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?Up(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Fp(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):J(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let a=Lr,u=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(ye(u)),this.xt(a,t),this.Dt(s[a],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),Q.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};Go.Ut=new Go;var Mu=class{constructor(){this.Dn=new Fu}addToCollectionParentIndex(e,t){return this.Dn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Jn.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}},Fu=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Le(Ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(Ie.comparator)).toArray()}};var BT=new Uint8Array(0);var Yf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dm=41943040,ct=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(dm,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);var ns=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var Xf="LruGarbageCollector",Uw=1048576;function Zf([n,e],[t,r]){let i=ie(n,t);return i===0?ie(e,r):i}var Uu=class{constructor(e){this.Tr=e,this.buffer=new Le(Zf),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Zf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Bu=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){z(Xf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xr(t)?z(Xf,"Ignoring IndexedDB error during garbage collection: ",t):await Yr(t)}await this.Rr(3e5)})}},ju=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Vr.ue);let r=new Uu(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Yf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yf):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,u,l,d,g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,a=Date.now(),this.nthSequenceNumber(e,i))).next(w=>(r=w,u=Date.now(),this.removeTargets(e,r,t))).next(w=>(s=w,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(w=>(d=Date.now(),Sr()<=se.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${w} documents in `+(d-l)+`ms
Total Duration: ${d-g}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:w})))}};function Bw(n,e){return new ju(n,e)}var qu=class{constructor(){this.changes=new Wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var zu=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Gu=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ki(r.mutation,i,ut.empty(),Ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ae()){let i=$n();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Gi();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=$n();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ae()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=Kt(),a=Wi(),u=function(){return Wi()}();return t.forEach((l,d)=>{let g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof Ot)?s=s.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Ki(g.mutation,d,g.mutation.getFieldMask(),Ce.now())):a.set(d.key,ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,g)=>a.set(d,g)),t.forEach((d,g)=>{var w;return u.set(d,new zu(g,(w=a.get(d))!==null&&w!==void 0?w:null))}),u))}recalculateAndSaveOverlays(e,t){let r=Wi(),i=new be((a,u)=>a-u),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let g=r.get(l)||ut.empty();g=u.applyToLocalView(d,g),r.set(l,g);let w=(i.get(u.batchId)||ae()).add(l);i=i.insert(u.batchId,w)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let l=u.getNext(),d=l.key,g=l.value,w=Jp();g.forEach(T=>{if(!s.has(T)){let N=nm(t.get(T),r.get(T));N!==null&&w.set(T,N),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,w))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):L.resolve($n()),u=Ji,l=s;return a.next(d=>L.forEach(d,(g,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),s.get(g)?L.resolve():this.remoteDocumentCache.getEntry(e,g).next(T=>{l=l.insert(g,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,ae())).next(g=>({batchId:u,changes:Qp(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let i=Gi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=Gi();return this.indexManager.getCollectionParents(e,s).next(u=>L.forEach(u,l=>{let d=function(w,T){return new jr(T,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(g=>{g.forEach((w,T)=>{a=a.insert(w,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let g=d.getKey();a.get(g)===null&&(a=a.insert(g,gt.newInvalidDocument(g)))});let u=Gi();return a.forEach((l,d)=>{let g=s.get(l);g!==void 0&&Ki(g.mutation,d,ut.empty(),Ce.now()),ga(t,d)&&(u=u.insert(l,d))}),u})}};var $u=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return L.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:kt(i.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:Fw(i.bundledQuery),readTime:kt(i.readTime)}}(t)),L.resolve()}};var Hu=class{constructor(){this.overlays=new be(Q.comparator),this.kr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){let r=$n();return L.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),L.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){let i=$n(),s=t.length+1,a=new Q(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new be((d,g)=>d-g),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=s.get(d.largestBatchId);g===null&&(g=$n(),s=s.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}let u=$n(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,g)=>u.set(d,g)),!(u.size()>=i)););return L.resolve(u)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ru(t,r));let s=this.kr.get(t);s===void 0&&(s=ae(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var Wu=class{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}};var rs=class{constructor(){this.qr=new Le(Re.Qr),this.$r=new Le(Re.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new Re(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Re(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new Q(new Ie([])),r=new Re(t,e),i=new Re(t,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new Q(new Ie([])),r=new Re(t,e),i=new Re(t,e+1),s=ae();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new Re(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},Re=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Q.comparator(e.key,t.key)||ie(e.Hr,t.Hr)}static Ur(e,t){return ie(e.Hr,t.Hr)||Q.comparator(e.key,t.key)}};var Ku=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Le(Re.Qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Au(s,t,r,i);this.mutationQueue.push(a);for(let u of i)this.Yr=this.Yr.add(new Re(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Fl:this.er-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new Re(t,0),i=new Re(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{let u=this.Zr(a.Hr);s.push(u)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(ie);return t.forEach(i=>{let s=new Re(i,0),a=new Re(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],u=>{r=r.add(u.Hr)})}),L.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;Q.isDocumentKey(s)||(s=s.child(""));let a=new Re(new Q(s),0),u=new Le(ie);return this.Yr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Hr)),!0)},a),L.resolve(this.ei(u))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){pe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return L.forEach(t.mutations,i=>{let s=new Re(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new Re(t,0),i=this.Yr.firstAfterOrEqual(r);return L.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Qu=class{constructor(e){this.ni=e,this.docs=function(){return new be(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(t))}getEntries(e,t){let r=Kt();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Kt(),a=t.path,u=new Q(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){let{key:d,value:{document:g}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Uv(Fv(g),r)<=0||(i.has(g.key)||ga(t,g))&&(s=s.insert(g.key,g.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,t,r,i){J(9500)}ri(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ju(this)}getSize(e){return L.resolve(this.size)}},Ju=class extends qu{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Yu=class{constructor(e){this.persistence=e,this.ii=new Wt(t=>zl(t),Gl),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.si=0,this.oi=new rs,this.targetCount=0,this._i=ns.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),L.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.hr(t),L.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),L.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.oi.containsKey(t))}};var $o=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new Vr(0),this.ci=!1,this.ci=!0,this.li=new Wu,this.referenceDelegate=e(this),this.hi=new Yu(this),this.indexManager=new Mu,this.remoteDocumentCache=function(i){return new Qu(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Lu(t),this.Ti=new $u(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Hu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Ku(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);let i=new Xu(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return L.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},Xu=class extends cu{constructor(e){super(),this.currentSequenceNumber=e}},Zu=class n{constructor(e){this.persistence=e,this.Ai=new rs,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw J(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.mi,r=>{let i=Q.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,te.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return L.or([()=>L.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},Ho=class n{constructor(e,t){this.persistence=e,this.gi=new Wt(r=>zv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Bw(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return L.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?L.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,s.removeEntry(a,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),L.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Po(e.data.value)),t}Sr(e,t,r){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var el=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=ae(),i=ae();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var tl=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var nl=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return td()?8:jv(xe())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new tl;return this.ws(e,t,a).next(u=>{if(s.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(Sr()<=se.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Rr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Sr()<=se.DEBUG&&z("QueryEngine","Query:",Rr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Sr()<=se.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Rr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):L.resolve())}ps(e,t){if(jf(t))return L.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Eu(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=ae(...s);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,Eu(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,i){return jf(t)||i.isEqual(te.min())?L.resolve(null):this.gs.getDocuments(e,r).next(s=>{let a=this.bs(t,s);return this.Ds(t,a,r,i)?L.resolve(null):(Sr()<=se.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rr(t)),this.vs(e,a,t,Mv(i,Ji)).next(u=>u))})}bs(e,t){let r=new Le(Wp(e));return t.forEach((i,s)=>{ga(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return Sr()<=se.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Rr(t)),this.gs.getDocumentsMatchingQuery(e,t,Jn.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Wl="LocalStore",jw=3e8,rl=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new be(ie),this.Ms=new Wt(s=>zl(s),Gl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gu(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function qw(n,e,t,r){return new rl(n,e,t,r)}async function fm(n,e){let t=ee(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],u=[],l=ae();for(let d of i){a.push(d.batchId);for(let g of d.mutations)l=l.add(g.key)}for(let d of s){u.push(d.batchId);for(let g of d.mutations)l=l.add(g.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function zw(n,e){let t=ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,g){let w=d.batch,T=w.keys(),N=L.resolve();return T.forEach(M=>{N=N.next(()=>g.getEntry(l,M)).next(q=>{let F=d.docVersions.get(M);pe(F!==null,48541),q.version.compareTo(F)<0&&(w.applyToRemoteDocument(q,d),q.isValidDocument()&&(q.setReadTime(d.commitVersion),g.addEntry(q)))})}),N.next(()=>u.mutationQueue.removeMutationBatch(l,w))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=ae();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function pm(n){let e=ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Gw(n,e){let t=ee(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let u=[];e.targetChanges.forEach((g,w)=>{let T=i.get(w);if(!T)return;u.push(t.hi.removeMatchingKeys(s,g.removedDocuments,w).next(()=>t.hi.addMatchingKeys(s,g.addedDocuments,w)));let N=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(w)!==null?N=N.withResumeToken(He.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):g.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(g.resumeToken,r)),i=i.insert(w,N),function(q,F,ne){return q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=jw?!0:ne.addedDocuments.size+ne.modifiedDocuments.size+ne.removedDocuments.size>0}(T,N,g)&&u.push(t.hi.updateTargetData(s,N))});let l=Kt(),d=ae();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,g))}),u.push($w(s,a,e.documentUpdates).next(g=>{l=g.Ls,d=g.ks})),!r.isEqual(te.min())){let g=t.hi.getLastRemoteSnapshotVersion(s).next(w=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(g)}return L.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=i,s))}function $w(n,e,t){let r=ae(),i=ae();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Kt();return t.forEach((u,l)=>{let d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):z(Wl,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:i}})}function Hw(n,e){let t=ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Fl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ww(n,e){let t=ee(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):t.hi.allocateTargetId(r).next(a=>(i=new ts(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function il(n,e,t){let r=ee(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Xr(a))throw a;z(Wl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function ep(n,e,t){let r=ee(n),i=te.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,g){let w=ee(l),T=w.Ms.get(g);return T!==void 0?L.resolve(w.Fs.get(T)):w.hi.getTargetData(d,g)}(r,a,Ct(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:te.min(),t?s:ae())).next(u=>(Kw(r,aw(e),u),{documents:u,qs:s})))}function Kw(n,e,t){let r=n.xs.get(e)||te.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var Wo=class{constructor(){this.activeTargetIds=fw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var sl=class{constructor(){this.Fo=new Wo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Wo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var ol=class{xo(e){}shutdown(){}};var tp="ConnectivityMonitor",Ko=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){z(tp,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){z(tp,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Ro=null;function al(){return Ro===null?Ro=function(){return 268435456+Math.round(2147483648*Math.random())}():Ro++,"0x"+Ro.toString(16)}var Jc="RestConnection",Qw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},cl=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Lo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let a=al(),u=this.Go(e,t.toUriEncodedString());z(Jc,`Sending RPC '${e}' ${a}:`,u,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);let{host:d}=new URL(u),g=on(d);return this.jo(e,u,l,r,g).then(w=>(z(Jc,`Received RPC '${e}' ${a}: `,w),w),w=>{throw vn(Jc,`RPC '${e}' ${a} failed with error: `,w,"url: ",u,"request:",r),w})}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=Qw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var ul=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var $e="WebChannelConnection",ll=class extends cl{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let a=al();return new Promise((u,l)=>{let d=new Gc;d.setWithCredentials(!0),d.listenOnce($c.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case zi.NO_ERROR:let w=d.getResponseJson();z($e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(w)),u(w);break;case zi.TIMEOUT:z($e,`RPC '${e}' ${a} timed out`),l(new G(x.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:let T=d.getStatus();if(z($e,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let N=d.getResponseJson();Array.isArray(N)&&(N=N[0]);let M=N?.error;if(M&&M.status&&M.message){let q=function(ne){let Y=ne.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(Y)>=0?Y:x.UNKNOWN}(M.status);l(new G(q,M.message))}else l(new G(x.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new G(x.UNAVAILABLE,"Connection failed."));break;default:J(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{z($e,`RPC '${e}' ${a} completed.`)}});let g=JSON.stringify(i);z($e,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",g,r,15)})}P_(e,t,r){let i=al(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Kc(),u=Wc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let g=s.join("");z($e,`Creating RPC '${e}' stream ${i}: ${g}`,l);let w=a.createWebChannel(g,l);this.T_(w);let T=!1,N=!1,M=new ul({Ho:F=>{N?z($e,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(T||(z($e,`Opening RPC '${e}' stream ${i} transport.`),w.open(),T=!0),z($e,`RPC '${e}' stream ${i} sending:`,F),w.send(F))},Yo:()=>w.close()}),q=(F,ne,Y)=>{F.listen(ne,K=>{try{Y(K)}catch(ce){setTimeout(()=>{throw ce},0)}})};return q(w,Ar.EventType.OPEN,()=>{N||(z($e,`RPC '${e}' stream ${i} transport opened.`),M.s_())}),q(w,Ar.EventType.CLOSE,()=>{N||(N=!0,z($e,`RPC '${e}' stream ${i} transport closed`),M.__(),this.I_(w))}),q(w,Ar.EventType.ERROR,F=>{N||(N=!0,vn($e,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),M.__(new G(x.UNAVAILABLE,"The operation could not be completed")))}),q(w,Ar.EventType.MESSAGE,F=>{var ne;if(!N){let Y=F.data[0];pe(!!Y,16349);let K=Y,ce=K?.error||((ne=K[0])===null||ne===void 0?void 0:ne.error);if(ce){z($e,`RPC '${e}' stream ${i} received error:`,ce);let Ee=ce.status,oe=function(v){let b=Se[v];if(b!==void 0)return im(b)}(Ee),A=ce.message;oe===void 0&&(oe=x.INTERNAL,A="Unknown error status: "+Ee+" with message "+ce.message),N=!0,M.__(new G(oe,A)),w.close()}else z($e,`RPC '${e}' stream ${i} received:`,Y),M.a_(Y)}}),q(u,Hc.STAT_EVENT,F=>{F.stat===bo.PROXY?z($e,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===bo.NOPROXY&&z($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{M.o_()},0),M}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function Yc(){return typeof document<"u"?document:null}function _a(n){return new Du(n,!0)}var Qo=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var np="PersistentStream",Jo=class{constructor(e,t,r,i,s,a,u,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qo(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Gt(t.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new G(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(np,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(z(np,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},hl=class extends Jo{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=Rw(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?te.min():a.readTime?kt(a.readTime):te.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=Vu(this.serializer),t.addTarget=function(s,a){let u,l=a.target;if(u=Iu(l)?{documents:kw(s,l)}:{query:Dw(s,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=sm(s,a.resumeToken);let d=Nu(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(te.min())>0){u.readTime=zo(s,a.snapshotVersion.toTimestamp());let d=Nu(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=Ow(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=Vu(this.serializer),t.removeTarget=e,this.k_(t)}},dl=class extends Jo{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=Cw(e.writeResults,e.commitTime),r=kt(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=Vu(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Pw(this.serializer,r))};this.k_(t)}};var fl=class{},pl=class extends fl{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new G(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,Ou(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(x.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,Ou(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(x.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},ml=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Gt(t),this._a=!1):z("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var er="RemoteStore",gl=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{nr(this)&&(z(er,"Restarting streams for network reachability change."),await async function(l){let d=ee(l);d.Ia.add(4),await as(d),d.Aa.set("Unknown"),d.Ia.delete(4),await ya(d)}(this))})}),this.Aa=new ml(r,i)}};async function ya(n){if(nr(n))for(let e of n.da)await e(!0)}async function as(n){for(let e of n.da)await e(!1)}function mm(n,e){let t=ee(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Yl(t)?Jl(t):Zr(t).x_()&&Ql(t,e))}function Kl(n,e){let t=ee(n),r=Zr(t);t.Ta.delete(e),r.x_()&&gm(t,e),t.Ta.size===0&&(r.x_()?r.B_():nr(t)&&t.Aa.set("Unknown"))}function Ql(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Zr(n).H_(e)}function gm(n,e){n.Ra.$e(e),Zr(n).Y_(e)}function Jl(n){n.Ra=new ku({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Zr(n).start(),n.Aa.aa()}function Yl(n){return nr(n)&&!Zr(n).M_()&&n.Ta.size>0}function nr(n){return ee(n).Ia.size===0}function _m(n){n.Ra=void 0}async function Jw(n){n.Aa.set("Online")}async function Yw(n){n.Ta.forEach((e,t)=>{Ql(n,e)})}async function Xw(n,e){_m(n),Yl(n)?(n.Aa.la(e),Jl(n)):n.Aa.set("Unknown")}async function Zw(n,e,t){if(n.Aa.set("Online"),e instanceof jo&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))}(n,e)}catch(r){z(er,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yo(n,r)}else if(e instanceof Dr?n.Ra.Ye(e):e instanceof Bo?n.Ra.it(e):n.Ra.et(e),!t.isEqual(te.min()))try{let r=await pm(n.localStore);t.compareTo(r)>=0&&await function(s,a){let u=s.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let g=s.Ta.get(d);g&&s.Ta.set(d,g.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{let g=s.Ta.get(l);if(!g)return;s.Ta.set(l,g.withResumeToken(He.EMPTY_BYTE_STRING,g.snapshotVersion)),gm(s,l);let w=new ts(g.target,l,d,g.sequenceNumber);Ql(s,w)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){z(er,"Failed to raise snapshot:",r),await Yo(n,r)}}async function Yo(n,e,t){if(!Xr(e))throw e;n.Ia.add(1),await as(n),n.Aa.set("Offline"),t||(t=()=>pm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z(er,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ya(n)})}function ym(n,e){return e().catch(t=>Yo(n,t,e))}async function va(n){let e=ee(n),t=In(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fl;for(;eI(e);)try{let i=await Hw(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,tI(e,i)}catch(i){await Yo(e,i)}vm(e)&&wm(e)}function eI(n){return nr(n)&&n.Pa.length<10}function tI(n,e){n.Pa.push(e);let t=In(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function vm(n){return nr(n)&&!In(n).M_()&&n.Pa.length>0}function wm(n){In(n).start()}async function nI(n){In(n).na()}async function rI(n){let e=In(n);for(let t of n.Pa)e.X_(t.mutations)}async function iI(n,e,t){let r=n.Pa.shift(),i=Su.from(r,e,t);await ym(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await va(n)}async function sI(n,e){e&&In(n).Z_&&await async function(r,i){if(function(a){return ww(a)&&a!==x.ABORTED}(i.code)){let s=r.Pa.shift();In(r).N_(),await ym(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await va(r)}}(n,e),vm(n)&&wm(n)}async function rp(n,e){let t=ee(n);t.asyncQueue.verifyOperationInProgress(),z(er,"RemoteStore received new credentials");let r=nr(t);t.Ia.add(3),await as(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ya(t)}async function oI(n,e){let t=ee(n);e?(t.Ia.delete(2),await ya(t)):e||(t.Ia.add(2),await as(t),t.Aa.set("Unknown"))}function Zr(n){return n.Va||(n.Va=function(t,r,i){let s=ee(t);return s.ia(),new hl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:Jw.bind(null,n),e_:Yw.bind(null,n),n_:Xw.bind(null,n),J_:Zw.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Yl(n)?Jl(n):n.Aa.set("Unknown")):(await n.Va.stop(),_m(n))})),n.Va}function In(n){return n.ma||(n.ma=function(t,r,i){let s=ee(t);return s.ia(),new dl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:nI.bind(null,n),n_:sI.bind(null,n),ea:rI.bind(null,n),ta:iI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await va(n)):(await n.ma.stop(),n.Pa.length>0&&(z(er,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var _l=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,u=new n(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Xl(n,e){if(Gt("AsyncQueue",`${e}: ${n}`),Xr(n))return new G(x.UNAVAILABLE,`${e}: ${n}`);throw n}var Xo=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Gi(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Zo=class{constructor(){this.fa=new be(Q.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):J(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},Wr=class n{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,Xo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var yl=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},vl=class{constructor(){this.queries=ip(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=ee(t),s=i.queries;i.queries=ip(),s.forEach((a,u)=>{for(let l of u.wa)l.onError(r)})})(this,new G(x.ABORTED,"Firestore shutting down"))}};function ip(){return new Wt(n=>Hp(n),ma)}async function Im(n,e){let t=ee(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new yl,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Xl(a,`Initialization of query '${Rr(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Zl(t)}async function Em(n,e){let t=ee(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aI(n,e){let t=ee(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let u of a.wa)u.Ca(i)&&(r=!0);a.ya=i}}r&&Zl(t)}function cI(n,e,t){let r=ee(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function Zl(n){n.Da.forEach(e=>{e.next()})}var wl,sp;(sp=wl||(wl={})).Fa="default",sp.Cache="cache";var ea=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Wr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==wl.Cache}};var ta=class{constructor(e){this.key=e}},na=class{constructor(e){this.key=e}},Il=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ae(),this.mutatedKeys=ae(),this.Xa=Wp(e),this.eu=new Xo(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new Zo,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((g,w)=>{let T=i.get(g),N=ga(this.query,w)?w:null,M=!!T&&this.mutatedKeys.has(T.key),q=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations),F=!1;T&&N?T.data.isEqual(N.data)?M!==q&&(r.track({type:3,doc:N}),F=!0):this.iu(T,N)||(r.track({type:2,doc:N}),F=!0,(l&&this.Xa(N,l)>0||d&&this.Xa(N,d)<0)&&(u=!0)):!T&&N?(r.track({type:0,doc:N}),F=!0):T&&!N&&(r.track({type:1,doc:T}),F=!0,(l||d)&&(u=!0)),F&&(N?(a=a.add(N),s=q?s.add(g):s.delete(g)):(a=a.delete(g),s=s.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),s=s.delete(g.key),r.track({type:1,doc:g})}return{eu:a,ru:r,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let a=e.ru.pa();a.sort((g,w)=>function(N,M){let q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{At:F})}};return q(N)-q(M)}(g.type,w.type)||this.Xa(g.doc,w.doc)),this.su(r),i=i!=null&&i;let u=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new Wr(this.query,e.eu,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Zo,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=ae(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new na(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new ta(r))}),t}uu(e){this.Ha=e.qs,this.Za=ae();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Wr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},eh="SyncEngine",El=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Tl=class{constructor(e){this.key=e,this.lu=!1}},bl=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Wt(u=>Hp(u),ma),this.Tu=new Map,this.Iu=new Set,this.du=new be(Q.comparator),this.Eu=new Map,this.Au=new rs,this.Ru={},this.Vu=new Map,this.mu=ns.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function uI(n,e,t=!0){let r=Pm(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await Tm(r,e,t,!0),i}async function lI(n,e){let t=Pm(n);await Tm(t,e,!0,!1)}async function Tm(n,e,t,r){let i=await Ww(n.localStore,Ct(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),u;return r&&(u=await hI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&mm(n.remoteStore,i),u}async function hI(n,e,t,r,i){n.gu=(w,T,N)=>async function(q,F,ne,Y){let K=F.view.nu(ne);K.Ds&&(K=await ep(q.localStore,F.query,!1).then(({documents:A})=>F.view.nu(A,K)));let ce=Y&&Y.targetChanges.get(F.targetId),Ee=Y&&Y.targetMismatches.get(F.targetId)!=null,oe=F.view.applyChanges(K,q.isPrimaryClient,ce,Ee);return ap(q,F.targetId,oe._u),oe.snapshot}(n,w,T,N);let s=await ep(n.localStore,e,!0),a=new Il(e,s.qs),u=a.nu(s.documents),l=es.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);ap(n,t,d._u);let g=new El(e,t,a);return n.Pu.set(e,g),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function dI(n,e,t){let r=ee(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(a=>!ma(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await il(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Kl(r.remoteStore,i.targetId),Al(r,i.targetId)}).catch(Yr)):(Al(r,i.targetId),await il(r.localStore,i.targetId,!0))}async function fI(n,e){let t=ee(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Kl(t.remoteStore,r.targetId))}async function pI(n,e,t){let r=II(n);try{let i=await function(a,u){let l=ee(a),d=Ce.now(),g=u.reduce((N,M)=>N.add(M.key),ae()),w,T;return l.persistence.runTransaction("Locally write mutations","readwrite",N=>{let M=Kt(),q=ae();return l.Os.getEntries(N,g).next(F=>{M=F,M.forEach((ne,Y)=>{Y.isValidDocument()||(q=q.add(ne))})}).next(()=>l.localDocuments.getOverlayedDocuments(N,M)).next(F=>{w=F;let ne=[];for(let Y of u){let K=vw(Y,w.get(Y.key).overlayedDocument);K!=null&&ne.push(new Ot(Y.key,K,Bp(K.value.mapValue),ot.exists(!0)))}return l.mutationQueue.addMutationBatch(N,d,ne,u)}).next(F=>{T=F;let ne=F.applyToLocalDocumentSet(w,q);return l.documentOverlayCache.saveOverlays(N,F.batchId,ne)})}).then(()=>({batchId:T.batchId,changes:Qp(w)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new be(ie)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,i.batchId,t),await cs(r,i.changes),await va(r.remoteStore)}catch(i){let s=Xl(i,"Failed to persist write");t.reject(s)}}async function bm(n,e){let t=ee(n);try{let r=await Gw(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Eu.get(s);a&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?pe(a.lu,14607):i.removedDocuments.size>0&&(pe(a.lu,42227),a.lu=!1))}),await cs(t,r,e)}catch(r){await Yr(r)}}function op(n,e,t){let r=ee(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,a)=>{let u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let l=ee(a);l.onlineState=u;let d=!1;l.queries.forEach((g,w)=>{for(let T of w.wa)T.va(u)&&(d=!0)}),d&&Zl(l)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mI(n,e,t){let r=ee(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let a=new be(Q.comparator);a=a.insert(s,gt.newNoDocument(s,te.min()));let u=ae().add(s),l=new Uo(te.min(),new Map,new be(ie),a,u);await bm(r,l),r.du=r.du.remove(s),r.Eu.delete(e),th(r)}else await il(r.localStore,e,!1).then(()=>Al(r,e,t)).catch(Yr)}async function gI(n,e){let t=ee(n),r=e.batch.batchId;try{let i=await zw(t.localStore,e);Sm(t,r,null),Am(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await cs(t,i)}catch(i){await Yr(i)}}async function _I(n,e,t){let r=ee(n);try{let i=await function(a,u){let l=ee(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return l.mutationQueue.lookupMutationBatch(d,u).next(w=>(pe(w!==null,37113),g=w.keys(),l.mutationQueue.removeMutationBatch(d,w))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,g,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>l.localDocuments.getDocuments(d,g))})}(r.localStore,e);Sm(r,e,t),Am(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await cs(r,i)}catch(i){await Yr(i)}}function Am(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Sm(n,e,t){let r=ee(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Al(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Rm(n,r)})}function Rm(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(Kl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),th(n))}function ap(n,e,t){for(let r of t)r instanceof ta?(n.Au.addReference(r.key,e),yI(n,r)):r instanceof na?(z(eh,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Rm(n,r.key)):J(19791,{yu:r})}function yI(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(z(eh,"New document in limbo: "+t),n.Iu.add(r),th(n))}function th(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new Q(Ie.fromString(e)),r=n.mu.next();n.Eu.set(r,new Tl(t)),n.du=n.du.insert(t,r),mm(n.remoteStore,new ts(Ct(pa(t.path)),r,"TargetPurposeLimboResolution",Vr.ue))}}async function cs(n,e,t){let r=ee(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var g;if((d||t)&&r.isPrimaryClient){let w=d?!d.fromCache:(g=t?.targetChanges.get(l.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(l.targetId,w?"current":"not-current")}if(d){i.push(d);let w=el.Es(l.targetId,d);s.push(w)}}))}),await Promise.all(a),r.hu.J_(i),await async function(l,d){let g=ee(l);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>L.forEach(d,T=>L.forEach(T.Is,N=>g.persistence.referenceDelegate.addReference(w,T.targetId,N)).next(()=>L.forEach(T.ds,N=>g.persistence.referenceDelegate.removeReference(w,T.targetId,N)))))}catch(w){if(!Xr(w))throw w;z(Wl,"Failed to update sequence numbers: "+w)}for(let w of d){let T=w.targetId;if(!w.fromCache){let N=g.Fs.get(T),M=N.snapshotVersion,q=N.withLastLimboFreeSnapshotVersion(M);g.Fs=g.Fs.insert(T,q)}}}(r.localStore,s))}async function vI(n,e){let t=ee(n);if(!t.currentUser.isEqual(e)){z(eh,"User change. New user:",e.toKey());let r=await fm(t.localStore,e);t.currentUser=e,function(s,a){s.Vu.forEach(u=>{u.forEach(l=>{l.reject(new G(x.CANCELLED,a))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cs(t,r.Bs)}}function wI(n,e){let t=ee(n),r=t.Eu.get(e);if(r&&r.lu)return ae().add(r.key);{let i=ae(),s=t.Tu.get(e);if(!s)return i;for(let a of s){let u=t.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}function Pm(n){let e=ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mI.bind(null,e),e.hu.J_=aI.bind(null,e.eventManager),e.hu.pu=cI.bind(null,e.eventManager),e}function II(n){let e=ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_I.bind(null,e),e}var Kr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return qw(this.persistence,new nl,e.initialUser,this.serializer)}Du(e){return new $o(Zu.Vi,this.serializer)}bu(e){return new sl}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Kr.provider={build:()=>new Kr};var Sl=class extends Kr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){pe(this.persistence.referenceDelegate instanceof Ho,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new Bu(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new $o(r=>Ho.Vi(r,t),this.serializer)}};var is=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>op(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vI.bind(null,this.syncEngine),await oI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vl}()}createDatastore(e){let t=_a(e.databaseInfo.databaseId),r=function(s){return new ll(s)}(e.databaseInfo);return function(s,a,u,l){return new pl(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new gl(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>op(this.syncEngine,t,0),function(){return Ko.C()?new Ko:new ol}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,g){let w=new bl(i,s,a,u,l,d);return g&&(w.fu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=ee(i);z(er,"RemoteStore shutting down."),s.Ia.add(5),await as(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};is.provider={build:()=>new is};var ra=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Gt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var En="FirestoreClient",Rl=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=Qi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{z(En,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z(En,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Xl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Xc(n,e){n.asyncQueue.verifyOperationInProgress(),z(En,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{vn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{z("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{vn("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function cp(n,e){n.asyncQueue.verifyOperationInProgress();let t=await EI(n);z(En,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>rp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>rp(e.remoteStore,i)),n._onlineComponents=e}async function EI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(En,"Using user provided OfflineComponentProvider");try{await Xc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;vn("Error using user provided cache. Falling back to memory cache: "+t),await Xc(n,new Kr)}}else z(En,"Using default OfflineComponentProvider"),await Xc(n,new Sl(void 0));return n._offlineComponents}async function Cm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(En,"Using user provided OnlineComponentProvider"),await cp(n,n._uninitializedComponentsProvider._online)):(z(En,"Using default OnlineComponentProvider"),await cp(n,new is))),n._onlineComponents}function TI(n){return Cm(n).then(e=>e.syncEngine)}async function Pl(n){let e=await Cm(n),t=e.eventManager;return t.onListen=uI.bind(null,e.syncEngine),t.onUnlisten=dI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fI.bind(null,e.syncEngine),t}function bI(n,e,t={}){let r=new Rt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){let g=new ra({next:T=>{g.Ou(),a.enqueueAndForget(()=>Em(s,w));let N=T.docs.has(u);!N&&T.fromCache?d.reject(new G(x.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&T.fromCache&&l&&l.source==="server"?d.reject(new G(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),w=new ea(pa(u.path),g,{includeMetadataChanges:!0,ka:!0});return Im(s,w)}(await Pl(n),n.asyncQueue,e,t,r)),r.promise}function km(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var up=new Map;var Dm="firestore.googleapis.com",lp=!0,ia=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dm,this.ssl=lp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:lp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Uw)throw new G(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=km((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Qr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ia({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ia(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eu;switch(r.type){case"firstParty":return new iu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=up.get(t);r&&(z("ComponentProvider","Removing Datastore"),up.delete(t),r.terminate())}(this),Promise.resolve()}};function AI(n,e,t,r={}){var i;n=st(n,Qr);let s=on(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(Ls(`https://${l}`),Ms("Firestore",!0)),a.host!==Dm&&a.host!==l&&vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let d=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!wt(d,u)&&(n._setSettings(d),r.mockUserToken)){let g,w;if(typeof r.mockUserToken=="string")g=r.mockUserToken,w=Ve.MOCK_USER;else{g=Qh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new G(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Ve(T)}n._authCredentials=new tu(new Do(g,w))}}var sa=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Me=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(os(t,n._jsonSchema))return new n(e,r||null,new Q(Ie.fromString(t.referencePath)))}};Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Pe("string",Me._jsonSchemaVersion),referencePath:Pe("string")};var mn=class n extends sa{constructor(e,t,r){super(e,t,pa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new Q(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Nm(n,e,...t){if(n=we(n),gp("collection","path",e),n instanceof Qr){let r=Ie.fromString(e,...t);return Cf(r),new mn(n,null,r)}{if(!(n instanceof Me||n instanceof mn))throw new G(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Ie.fromString(e,...t));return Cf(r),new mn(n.firestore,null,r)}}function nh(n,e,...t){if(n=we(n),arguments.length===1&&(e=Qi.newId()),gp("doc","path",e),n instanceof Qr){let r=Ie.fromString(e,...t);return Pf(r),new Me(n,null,new Q(r))}{if(!(n instanceof Me||n instanceof mn))throw new G(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Ie.fromString(e,...t));return Pf(r),new Me(n.firestore,n instanceof mn?n.converter:null,new Q(r))}}var hp="AsyncQueue",oa=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qo(this,"async_queue_retry"),this.oc=()=>{let r=Yc();r&&z(hp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=Yc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=Yc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new Rt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Xr(e))throw e;z(hp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Gt("INTERNAL UNHANDLED ERROR: ",dp(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=_l.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&J(47125,{hc:dp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function dp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function fp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var _t=class extends Qr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new oa,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new oa(e),this._firestoreClient=void 0,await e}}};function Om(n,e){let t=typeof n=="object"?n:js(),r=typeof n=="string"?n:e||Lo,i=Ri(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=Kh("firestore");s&&AI(i,...s)}return i}function wa(n){if(n._terminated)throw new G(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SI(n),n._firestoreClient}function SI(n){var e,t,r;let i=n._freezeSettings(),s=function(u,l,d,g){return new uu(u,l,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,km(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Rl(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){let l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}var gn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(He.fromBase64String(e))}catch(t){throw new G(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(os(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};gn._jsonSchemaVersion="firestore/bytes/1.0",gn._jsonSchema={type:Pe("string",gn._jsonSchemaVersion),bytes:Pe("string")};var tr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var ss=class{constructor(e){this._methodName=e}};var _n=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(os(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:Pe("string",_n._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};var yn=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(os(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new G(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:Pe("string",yn._jsonSchemaVersion),vectorValues:Pe("object")};var RI=/^__.*__$/,Cl=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zn(e,this.data,t,this.fieldTransforms)}},aa=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function xm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{Ec:n})}}var kl=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ua(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(xm(this.Ec)&&RI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},Dl=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||_a(e)}Dc(e,t,r,i=!1){return new kl({Ec:e,methodName:t,bc:r,path:it.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Ia(n){let e=n._freezeSettings(),t=_a(n._databaseId);return new Dl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rh(n,e,t,r,i,s={}){let a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);ih("Data must be an object, but it was:",a,r);let u=Mm(r,a),l,d;if(s.merge)l=new ut(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let g=[];for(let w of s.mergeFields){let T=Nl(e,w,t);if(!a.contains(T))throw new G(x.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Um(g,T)||g.push(T)}l=new ut(g),d=a.fieldTransforms.filter(w=>l.covers(w.field))}else l=null,d=a.fieldTransforms;return new Cl(new rt(u),l,d)}var ca=class n extends ss{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Vm(n,e,t,r){let i=n.Dc(1,e,t);ih("Data must be an object, but it was:",i,r);let s=[],a=rt.empty();Tn(r,(l,d)=>{let g=sh(e,l,t);d=we(d);let w=i.gc(g);if(d instanceof ca)s.push(g);else{let T=Ea(d,w);T!=null&&(s.push(g),a.set(g,T))}});let u=new ut(s);return new aa(a,u,i.fieldTransforms)}function Lm(n,e,t,r,i,s){let a=n.Dc(1,e,t),u=[Nl(e,r,t)],l=[i];if(s.length%2!=0)throw new G(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<s.length;T+=2)u.push(Nl(e,s[T])),l.push(s[T+1]);let d=[],g=rt.empty();for(let T=u.length-1;T>=0;--T)if(!Um(d,u[T])){let N=u[T],M=l[T];M=we(M);let q=a.gc(N);if(M instanceof ca)d.push(N);else{let F=Ea(M,q);F!=null&&(d.push(N),g.set(N,F))}}let w=new ut(d);return new aa(g,w,a.fieldTransforms)}function Ea(n,e){if(Fm(n=we(n)))return ih("Unsupported field value:",e,n),Mm(n,e);if(n instanceof ss)return function(r,i){if(!xm(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let u of r){let l=Ea(u,i.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=Ce.fromDate(r);return{timestampValue:zo(i.serializer,s)}}if(r instanceof Ce){let s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zo(i.serializer,s)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gn)return{bytesValue:sm(i.serializer,r._byteString)};if(r instanceof Me){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yn)return function(a,u){return{mapValue:{fields:{[Bl]:{stringValue:jl},[Lr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return $l(u.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Ml(r)}`)}(n,e)}function Mm(n,e){let t={};return Np(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tn(n,(r,i)=>{let s=Ea(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof _n||n instanceof gn||n instanceof Me||n instanceof ss||n instanceof yn)}function ih(n,e,t){if(!Fm(t)||!_p(t)){let r=Ml(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Nl(n,e,t){if((e=we(e))instanceof tr)return e._internalPath;if(typeof e=="string")return sh(n,e);throw ua("Field path arguments must be of type string or ",n,!1,void 0,t)}var PI=new RegExp("[~\\*/\\[\\]]");function sh(n,e,t){if(e.search(PI)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new tr(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ua(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new G(x.INVALID_ARGUMENT,u+n+l)}function Um(n,e){return n.some(t=>t.isEqual(e))}var la=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new Ol(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Bm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Ol=class extends la{data(){return super.data()}};function Bm(n,e){return typeof e=="string"?sh(n,e):e instanceof tr?e._internalPath:e._delegate._internalPath}function CI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var xl=class{convertValue(e,t="none"){switch(wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Tn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Lr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ye(a.doubleValue));return new yn(s)}convertGeoPoint(e){return new _n(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=fa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Xi(e));default:return null}}convertTimestamp(e){let t=$t(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=Ie.fromString(e);pe(hm(r),9688,{name:e});let i=new Mo(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(t)||Gt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function oh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Wn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Kn=class n extends la{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(Bm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};Kn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kn._jsonSchema={type:Pe("string",Kn._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};var Nr=class extends Kn{data(e={}){return super.data(e)}},Or=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Wn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Nr(this._firestore,this._userDataWriter,r.key,r,new Wn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let l=new Nr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Wn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{let l=new Nr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Wn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,g=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),g=a.indexOf(u.doc.key)),{type:kI(u.type),doc:l,oldIndex:d,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function kI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}function jm(n){n=st(n,Me);let e=st(n.firestore,_t);return bI(wa(e),n._key).then(t=>Wm(e,n,t))}Or._jsonSchemaVersion="firestore/querySnapshot/1.0",Or._jsonSchema={type:Pe("string",Or._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};var ha=class extends xl{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}};function qm(n,e,t){n=st(n,Me);let r=st(n.firestore,_t),i=oh(n.converter,e,t);return us(r,[rh(Ia(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ot.none())])}function zm(n,e,t,...r){n=st(n,Me);let i=st(n.firestore,_t),s=Ia(i),a;return a=typeof(e=we(e))=="string"||e instanceof tr?Lm(s,"updateDoc",n._key,e,t,r):Vm(s,"updateDoc",n._key,e),us(i,[a.toMutation(n._key,ot.exists(!0))])}function Gm(n){return us(st(n.firestore,_t),[new Hr(n._key,ot.none())])}function $m(n,e){let t=st(n.firestore,_t),r=nh(n),i=oh(n.converter,e);return us(t,[rh(Ia(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ot.exists(!1))]).then(()=>r)}function Hm(n,...e){var t,r,i;n=we(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||fp(e[a])||(s=e[a++]);let u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(fp(e[a])){let w=e[a];e[a]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[a+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),e[a+2]=(i=w.complete)===null||i===void 0?void 0:i.bind(w)}let l,d,g;if(n instanceof Me)d=st(n.firestore,_t),g=pa(n._key.path),l={next:w=>{e[a]&&e[a](Wm(d,n,w))},error:e[a+1],complete:e[a+2]};else{let w=st(n,sa);d=st(w.firestore,_t),g=w._query;let T=new ha(d);l={next:N=>{e[a]&&e[a](new Or(d,T,w,N))},error:e[a+1],complete:e[a+2]},CI(n._query)}return function(T,N,M,q){let F=new ra(q),ne=new ea(N,F,M);return T.asyncQueue.enqueueAndForget(async()=>Im(await Pl(T),ne)),()=>{F.Ou(),T.asyncQueue.enqueueAndForget(async()=>Em(await Pl(T),ne))}}(wa(d),g,u,l)}function us(n,e){return function(r,i){let s=new Rt;return r.asyncQueue.enqueueAndForget(async()=>pI(await TI(r),i,s)),s.promise}(wa(n),e)}function Wm(n,e,t){let r=t.docs.get(e._key),i=new ha(n);return new Kn(n,i,e._key,r,new Wn(t.hasPendingWrites,t.fromCache),e.converter)}var Vl=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ia(e)}set(e,t,r){this._verifyNotCommitted();let i=Zc(e,this._firestore),s=oh(i.converter,t,r),a=rh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,ot.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let s=Zc(e,this._firestore),a;return a=typeof(t=we(t))=="string"||t instanceof tr?Lm(this._dataReader,"WriteBatch.update",s._key,t,r,i):Vm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,ot.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Zc(e,this._firestore);return this._mutations=this._mutations.concat(new Hr(t._key,ot.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Zc(n,e){if((n=we(n)).firestore!==e)throw new G(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Km(n){return wa(n=st(n,_t)),new Vl(n,e=>us(n,e))}(function(e,t=!0){(function(i){Jr=i})(ln),un(new at("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),u=new _t(new nu(r.getProvider("auth-internal")),new su(a,r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(d.options.projectId,g)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),pt(bf,Af,e),pt(bf,Af,"esm2017")})();function DI(n){let e=oc(n);return{auth:qc(e),db:Om(e)}}var Ye={pair:"2111",two:"221",trio:"311",full:"32",quad:"41",penta:"5",diff:"11111"},tg=[{k:"sum_low",t:"Extremo baixo",s:"Soma 5\u201310",p:"28:1",f:n=>n.sum<=10?28:null},{k:"sum_small",t:"Pequeno",s:"Soma 5\u201317",p:"1:1",f:n=>!n.penta&&n.sum<=17?1:null},{k:"sum_even",t:"Par",s:"Soma par",p:"1:1",f:n=>!n.penta&&n.sum%2===0?1:null},{k:"sum_mid",t:"Central",s:"Soma 17 ou 18",p:"7:2",f:n=>n.sum===17||n.sum===18?3.5:null,hot:!0},{k:"sum_odd",t:"\xCDmpar",s:"Soma \xEDmpar",p:"1:1",f:n=>!n.penta&&n.sum%2===1?1:null},{k:"sum_big",t:"Grande",s:"Soma 18\u201330",p:"1:1",f:n=>!n.penta&&n.sum>=18?1:null},{k:"sum_high",t:"Extremo alto",s:"Soma 26\u201330",p:"28:1",f:n=>n.sum>=26?28:null}],ng=[{k:"c_pair",t:"Par",s:"S\xF3 um par",p:"11:10",f:n=>n.pat===Ye.pair?1.1:null},{k:"c_two",t:"Dois pares",s:"2 + 2",p:"3:1",f:n=>n.pat===Ye.two?3:null},{k:"c_trio",t:"Trio",s:"3 iguais",p:"5:1",f:n=>n.pat===Ye.trio?5:null},{k:"c_full",t:"Full house",s:"Trio + par",p:"24:1",f:n=>n.pat===Ye.full?24:null},{k:"c_quad",t:"Quadra",s:"4 iguais",p:"48:1",f:n=>n.pat===Ye.quad?48:null},{k:"c_penta",t:"Penta",s:"5 iguais",p:"1200:1",f:n=>n.pat===Ye.penta?1200:null,hot:!0},{k:"c_diff",t:"Todos diferentes",s:"Nenhum repetido",p:"9:1",f:n=>n.pat===Ye.diff?9:null},{k:"s3",t:"Sequ\xEAncia de 3",s:"3 seguidos",p:"6:5",f:n=>n.run(3)?1.2:null},{k:"s4",t:"Sequ\xEAncia de 4",s:"4 seguidos",p:"5:1",f:n=>n.run(4)?5:null},{k:"s5",t:"Sequ\xEAncia de 5",s:"1 a 5 ou 2 a 6",p:"30:1",f:n=>n.run(5)?30:null}],NI=[null,0,1,4,20,100],ir=[];for(let n=1;n<=6;n++)ir.push({k:"n"+n+"_1",n,single:!0,t:"N\xFAmero "+n,s:"Casa do dado",p:"1 dado devolve",f:e=>NI[e.c[n]]}),ir.push({k:"n"+n+"_2",n,t:"Pelo menos 2",p:"4:1",f:e=>e.c[n]>=2?4:null}),ir.push({k:"n"+n+"_3",n,t:"Pelo menos 3",p:"25:1",f:e=>e.c[n]>=3?25:null}),ir.push({k:"n"+n+"_4",n,t:"Pelo menos 4",p:"280:1",f:e=>e.c[n]>=4?280:null}),ir.push({k:"n"+n+"_5",n,t:"Penta de "+n,p:"7500:1",f:e=>e.c[n]===5?7500:null,hot:!0});var rg=[...tg,...ng,...ir],Je=Object.fromEntries(rg.map(n=>[n.k,n])),rr=n=>n.n&&!n.single?n.t+" de "+n.n:n.t;function ds(n){let e=[0,0,0,0,0,0,0];n.forEach(s=>e[s]++);let t=e.slice(1).filter(Boolean).sort((s,a)=>a-s).join(""),r=n.reduce((s,a)=>s+a,0);return{c:e,pat:t,sum:r,run:s=>{for(let a=1;a<=7-s;a++){let u=!0;for(let l=0;l<s;l++)if(!e[a+l]){u=!1;break}if(u)return!0}return!1},penta:t===Ye.penta}}var OI=(n,e)=>e==null?0:n+Math.floor(n*e+1e-9);function ch(n){let e={[Ye.pair]:"Par",[Ye.two]:"Dois pares",[Ye.trio]:"Trio",[Ye.full]:"Full house",[Ye.quad]:"Quadra",[Ye.penta]:"Penta",[Ye.diff]:"Todos diferentes"},t=["Soma "+n.sum,e[n.pat]];return n.run(5)?t.push("Sequ\xEAncia de 5"):n.run(4)?t.push("Sequ\xEAncia de 4"):n.run(3)&&t.push("Sequ\xEAncia de 3"),t.join(" \xB7 ")}var Sa=[];for(let n=1;n<=6;n++)for(let e=1;e<=6;e++)for(let t=1;t<=6;t++)for(let r=1;r<=6;r++)for(let i=1;i<=6;i++)Sa.push(ds([n,e,t,r,i]));function ig(n,e){let t=1;for(let r of n){let i=Je[r].f(e);if(i==null)return 0;t*=i+1}return t}var uh=new Map;function fh(n){let e=n.slice().sort().join("|");if(uh.has(e))return uh.get(e);let t=0,r=0,i=0;for(let a of Sa){let u=ig(n,a);u>0&&(t++,r+=u,u>i&&(i=u))}let s={p:t/Sa.length,ev:r/Sa.length,max:i};return uh.set(e,s),s}function lh(n){if(!Array.isArray(n)||n.length<2||n.length>6)return"A m\xFAltipla precisa de 2 a 6 sele\xE7\xF5es";if(new Set(n).size!==n.length||n.some(t=>!Je[t]))return"Sele\xE7\xF5es inv\xE1lidas";let e=fh(n);return e.p===0?"Estas sele\xE7\xF5es n\xE3o podem ganhar ao mesmo tempo":e.ev>=1?"Combina\xE7\xE3o n\xE3o permitida: as sele\xE7\xF5es dependem umas das outras e a m\xFAltipla pagaria acima do justo":null}var ei=["#E8C46A","#7FC8F8","#F4A99B","#B5E48C","#D7A6F5","#F9B46B","#8EE3D3","#FFFFFF","#F5E663","#A0B4FF"],hh=[{v:1,bg:"#FFFFFF",fg:"#1B1B1B"},{v:5,bg:"#C62828",fg:"#FFFFFF"},{v:10,bg:"#1A2F6B",fg:"#FFFFFF"},{v:25,bg:"#2E8B57",fg:"#FFFFFF"},{v:100,bg:"#111111",fg:"#FFFFFF"},{v:500,bg:"#6A3BA8",fg:"#FFFFFF"},{v:1e3,bg:"#F2C200",fg:"#1B1B1B"}],ph={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},D=n=>document.getElementById(n),Z=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),H=n=>Number(n).toLocaleString("pt-PT"),Qm=n=>n.toLocaleString("pt-PT",{maximumFractionDigits:2}),Jm=n=>JSON.parse(JSON.stringify(n));function ls(n,e){let t='<span class="die '+(e||"")+(n?"":" empty")+'" aria-hidden="true">';for(let r=0;r<9;r++)t+='<i class="'+(n&&ph[n].includes(r)?"on":"")+'"></i>';return t+"</span>"}var Ym=null;function re(n){let e=D("toast");e.textContent=n,e.hidden=!1,clearTimeout(Ym),Ym=setTimeout(()=>e.hidden=!0,2600)}var Xm={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}}};function hs(){let n=new Uint8Array(1);for(;;)if(crypto.getRandomValues(n),n[0]<252)return n[0]%6+1}var xI=()=>[hs(),hs(),hs(),hs(),hs()],Zm="@jogadores.sicbo",VI=/^[A-Za-z0-9_.-]{3,20}$/,Ta={rounds:0,staked:0,returned:0,best:0},eg=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,LI=n=>new Promise(e=>setTimeout(e,n));function MI(n){let e=n&&n.code||"";return e.includes("email-already-in-use")?"Esse utilizador j\xE1 existe. Escolha outro nome ou entre com a palavra-passe.":e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Utilizador ou palavra-passe errados.":e.includes("weak-password")?"A palavra-passe precisa de pelo menos 6 caracteres.":e.includes("too-many-requests")?"Demasiadas tentativas. Espere um pouco e tente de novo.":e.includes("operation-not-allowed")?"O in\xEDcio de sess\xE3o com palavra-passe n\xE3o est\xE1 ativo no Firebase (passo 1 do guia de atualiza\xE7\xE3o).":e.includes("network")?"Sem liga\xE7\xE3o. Tente outra vez.":"N\xE3o foi poss\xEDvel entrar ("+(e||"erro")+")."}var ba={v:5e3,bg:"#7B4A26",fg:"#F3E3C8"},mh=[{id:"t_montecarlo",kind:"theme",name:"Monte Carlo",desc:"Azul-noite e dourado, como o casino do M\xF3naco.",price:1500,sw:["#13294B","#D9B65D","#F2E8D0"]},{id:"t_roleta",kind:"theme",name:"Roleta Vermelha",desc:"Vermelho-vinho com detalhes a ouro.",price:2e3,sw:["#5C1A1F","#E8C46A","#F6E7D2"]},{id:"t_vegas",kind:"theme",name:"Vegas Neon",desc:"Roxo de madrugada e n\xE9on rosa da Strip.",price:2500,sw:["#2A0E3F","#FF4FD8","#F9E7FF"]},{id:"t_ebano",kind:"theme",name:"Mesa de \xC9bano",desc:"Preto e prata da sala VIP.",price:3e3,sw:["#1B1B1D","#C9CED6","#E6E6E6"]},{id:"t_ouro",kind:"theme",name:"Ouro Real",desc:"Castanho e ouro para os grandes apostadores.",price:5e3,sw:["#3B2A14","#FFD54A","#F5E6C4"]},{id:"r_bronze",kind:"rank",name:"Bronze",price:500,hex:"#CD7F32",grad:"linear-gradient(135deg,#7A4A1D,#E3A15E 45%,#8C5626)"},{id:"r_prata",kind:"rank",name:"Prata",price:2500,hex:"#C0C0C0",prev:"r_bronze",grad:"linear-gradient(135deg,#7D8288,#F1F3F5 45%,#9AA0A6)"},{id:"r_ouro",kind:"rank",name:"Ouro",price:5e3,hex:"#FFD700",prev:"r_prata",grad:"linear-gradient(135deg,#A67C00,#FFE680 45%,#C99A06)"},{id:"r_platina",kind:"rank",name:"Platina",price:1e4,hex:"#E5E4E2",prev:"r_ouro",grad:"linear-gradient(135deg,#9FA8AE,#FFFFFF 45%,#C9D1D6)"},{id:"r_diamante",kind:"rank",name:"Diamante",price:25e3,hex:"#B9F2FF",prev:"r_platina",grad:"linear-gradient(135deg,#5FC9E6,#E9FCFF 45%,#7FD9F0)"},{id:"r_rubi",kind:"rank",name:"Rubi",price:1e5,hex:"#E0115F",prev:"r_diamante",grad:"linear-gradient(135deg,#7A0630,#FF5C93 45%,#A50B44)"},{id:"r_esmeralda",kind:"rank",name:"Esmeralda",price:25e4,hex:"#50C878",prev:"r_rubi",grad:"linear-gradient(135deg,#1E6B3D,#9CF0BA 45%,#2E8F55)"},{id:"f_5k",kind:"chip",name:"Ficha de 5 000",desc:"Ficha castanha para apostas grandes. Aparece na sua barra de fichas e na sua torre.",price:5e3}],Qt=Object.fromEntries(mh.map(n=>[n.id,n])),Ra=mh.filter(n=>n.kind==="rank"),dh=n=>Ra.find(e=>e.hex===n)||null,Aa=String((window.SICBO_CONFIG||{}).nome||"SIC BO \xB7 5 DADOS").slice(0,40);function sg(n){document.title=Aa;let e=(window.SICBO_CONFIG||{}).firebase,t=D("app");if(!e||!e.apiKey||String(e.apiKey).includes("COLE")){t.innerHTML='<section class="card narrow"><h2>Falta configurar</h2><p>Abra o ficheiro <b>config.js</b> e cole a configura\xE7\xE3o do seu projeto Firebase, como explicado no guia.</p></section>';return}let{auth:r,db:i}=n.init(e),s={user:null,uid:null,game:void 0,players:{},bets:[],users:{},rewards:{},redemptions:[],role:Xm.get("sicbo5-role")||"player",authReady:!1},a={ptab:"apostar",chip:25,mode:"bet",legs:[],stake:0,dice:[],tab:"mesa",busy:!1,authTab:"login"},u={game:n.doc(i,"games","main"),players:n.collection(i,"players"),bets:n.collection(i,"bets"),users:n.collection(i,"users"),rewards:n.collection(i,"rewards"),redemptions:n.collection(i,"redemptions")},l=f=>(f&&f.code==="permission-denied"?"A\xE7\xE3o recusada pelo servidor":"Sem liga\xE7\xE3o. Tente outra vez.")+(f&&f.code?" ["+f.code+"]":""),d=f=>{console.error(f),re(l(f))},g=[],w=()=>{g.forEach(f=>{try{f()}catch{}}),g=[]};function T(){g.push(n.onSnapshot(u.game,f=>{s.game=f.exists()?f.data():null,Fe(),ue()},d)),g.push(n.onSnapshot(u.players,f=>{let m={};f.docs.forEach(_=>m[_.id]={id:_.id,..._.data()}),s.players=m,ue()},d)),g.push(n.onSnapshot(u.bets,f=>{s.bets=f.docs.map(m=>({id:m.id,...m.data()})).sort((m,_)=>m.ts-_.ts),ue()},d)),g.push(n.onSnapshot(u.rewards,f=>{let m={};f.docs.forEach(_=>m[_.id]={id:_.id,..._.data()}),s.rewards=m,ue()},d)),g.push(n.onSnapshot(u.redemptions,f=>{s.redemptions=f.docs.map(m=>({id:m.id,...m.data()})).sort((m,_)=>_.ts-m.ts),ue()},d)),g.push(n.onSnapshot(u.users,f=>{let m={};f.docs.forEach(_=>m[_.id]={id:_.id,..._.data()}),s.users=m,s.usersLoaded=!0,ne(),ue()},d))}n.onAuthStateChanged(r,f=>{let m=(f?f.uid:null)===s.uid&&s.authReady;if(s.authReady=!0,!m){if(w(),Ae="",s.user=f||null,s.uid=f?f.uid:null,s.game=void 0,s.players={},s.bets=[],s.users={},s.rewards={},s.redemptions=[],s.usersLoaded=!1,je.init=!1,!f){a.authTab="login",ue();return}T(),ue()}});let N=()=>s.role==="bank"&&q()?"bank":"player",M=(f,m)=>{f._last!==m&&(f._last=m,f.innerHTML=m)},q=()=>!!(s.user&&!s.user.isAnonymous&&s.users[s.uid]&&s.users[s.uid].role==="admin"),F=!1;async function ne(){let f=s.user;if(!f||f.isAnonymous||!s.usersLoaded||s.users[f.uid]||F)return;F=!0;let m=Y&&Y.toLowerCase()+Zm===(f.email||"").toLowerCase()?Y:(f.email||"").split("@")[0];try{await n.setDoc(n.doc(i,"users",f.uid),{name:m,color:ei[Math.floor(Math.random()*ei.length)],created:Date.now(),stats:{...Ta}})}catch(_){d(_)}F=!1}let Y=null,K=()=>s.players[s.uid]||null,ce=()=>s.users[s.uid]||null,Ee=f=>s.bets.filter(m=>m.uid===f&&s.game&&m.round===s.game.round),oe=f=>Ee(f).reduce((m,_)=>m+_.a,0),A=f=>!!(s.users[f]&&typeof s.users[f].balance=="number"),y=f=>A(f)?s.users[f].balance:s.players[f]&&typeof s.players[f].chips=="number"?s.players[f].chips:0,v=f=>y(f)-oe(f),b=()=>s.game&&s.game.maxBet>0?s.game.maxBet:0,S=(f,m)=>Ee(f).filter(_=>_.kind==="s"&&_.k===m).reduce((_,E)=>_+E.a,0),P=f=>{let m=b();if(!m)return!1;let _={};for(let E of Ee(f))if(E.kind==="m"){if(E.a>m)return!0}else if(_[E.k]=(_[E.k]||0)+E.a,_[E.k]>m)return!0;return!1},I=()=>b()?"M\xE1ximo por aposta: "+H(b())+" fichas":"Sem m\xE1ximo por aposta",Ze=f=>s.users[f]&&s.users[f].owned||[],bn=f=>!!(s.users[f]&&s.users[f].role==="admin"),We=(f,m)=>bn(m||s.uid)||Ze(m||s.uid).includes(f);function An(){let f=s.user&&!s.user.isAnonymous?s.users[s.uid]:null,m=f&&f.theme&&f.theme!=="classico"&&We(f.theme)?f.theme.slice(2):"";(document.documentElement.dataset.skin||"")!==m&&(m?document.documentElement.dataset.skin=m:delete document.documentElement.dataset.skin)}function Sn(f,m){let _=Math.max(0,Math.floor(f)),E=[];for(let k of(m?hh.concat(ba):hh).slice().reverse()){let O=Math.floor(_/k.v);O>0&&(E.push({c:k,k:O}),_-=O*k.v)}return E.length?'<div class="tower" aria-hidden="true">'+E.map(({c:k,k:O})=>{let V=Math.min(O,14),B="";for(let $=0;$<V;$++)B+='<i style="background:repeating-linear-gradient(90deg,'+k.bg+" 0 6px,"+k.fg+" 6px 8px) center/100% 3px no-repeat,"+k.bg+'"></i>';return'<div class="tstack"><div class="tchips">'+B+'</div><span class="tlab num">'+O+"\xD7"+(k.v>=1e3?k.v/1e3+"k":k.v)+"</span></div>"}).join("")+"</div>":'<div class="tower empty"><span class="note">Sem fichas</span></div>'}function sr(){let f=or();return f.length?'<div class="felt"><span class="bankpill">Banca</span><div class="seats">'+f.map(m=>{let _=oe(m.id),E=y(m.id)-_;return'<div class="seat'+(m.id===s.uid?" you":"")+'"><div class="sname"><span class="dot" style="background:'+m.color+'"></span><b>'+Z(m.name)+"</b>"+(m.id===s.uid?' <span class="note">(voc\xEA)</span>':"")+"</div>"+(dh(m.color)?'<span class="rbadge" style="background:'+dh(m.color).grad+'">'+Z(dh(m.color).name)+"</span>":"")+Sn(E,We("f_5k",m.id))+'<div class="samt num">'+H(E)+" fichas</div>"+(_?'<div class="note num">'+H(_)+" em jogo</div>":'<div class="note">&nbsp;</div>')+"</div>"}).join("")+"</div></div>":'<div class="felt"><span class="bankpill">Banca</span><p class="note">Ainda n\xE3o se sentou ningu\xE9m.</p></div>'}let or=()=>Object.values(s.players).sort((f,m)=>f.joined-m.joined),fs=f=>s.players[f]?s.players[f].color:"#999",yt=f=>s.players[f]?s.players[f].name:"Jogador que saiu",Ae="";function Pa(){return s.authReady?!s.user||s.user.isAnonymous?"login":s.game===void 0||!s.usersLoaded?"connecting":s.role==="bank"&&q()?s.game?"bank":"openTable":s.game?K()?"player":"sit":"noGame":"connecting"}function ue(){let f=Pa();f!==Ae&&(Ae=f,a.legs=[],a.mode="bet",t.innerHTML=cr[f](),ti(f)),si[f]&&si[f](),Pn(),An()}let Rn=()=>'<span class="rolelink" data-rolelink></span>';function Pn(){let f=q()?N()==="bank"?'<button class="link" data-act="role" data-v="player">Jogar como jogador</button>':'<button class="link" data-act="role" data-v="bank">Ir para a banca</button>':"";document.querySelectorAll("[data-rolelink]").forEach(m=>{m.innerHTML!==f&&(m.innerHTML=f)})}let ps=()=>{let f=(_,E)=>'<button class="zone '+(E||"")+(_.hot?" hot":"")+'" data-act="zone" data-k="'+_.k+'" id="z-'+_.k+'" aria-label="'+Z(rr(_))+", paga "+Z(_.p)+'">'+(_.single?ls(_.n):'<span class="z-t">'+Z(_.t)+"</span>")+(_.s?'<span class="z-s">'+Z(_.s)+"</span>":"")+'<span class="z-p">'+Z(_.p)+'</span><span class="stack" id="st-'+_.k+'"></span></button>',m="";for(let _=1;_<=6;_++){let E=ir.filter(k=>k.n===_);m+='<div class="ncol">'+f(E[0],"single")+E.slice(1).map(k=>f(k,"row")).join("")+"</div>"}return'<section class="sec"><div class="sec-h"><h2>Somas dos 5 dados</h2><span class="note">Pequeno, Grande, Par e \xCDmpar perdem se sair penta</span></div><div class="grid g-sum">'+tg.map(_=>f(_)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Combina\xE7\xF5es e sequ\xEAncias</h2><span class="note">Cada combina\xE7\xE3o paga s\xF3 a sua casa \xB7 sequ\xEAncias: pelo menos esses n\xFAmeros seguidos</span></div><div class="grid g-combo">'+ng.map(_=>f(_)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Aposta num n\xFAmero</h2><span class="note">Casa do dado: 1 dado devolve \xB7 2 \u2192 1:1 \xB7 3 \u2192 4:1 \xB7 4 \u2192 20:1 \xB7 5 \u2192 100:1</span></div><div class="grid g-num">'+m+"</div></section>"},ms=f=>"<header><h1>"+Z(Aa)+'</h1><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span>'+(f||"")+"</div></header>",ar=()=>hh.concat(ba).map(f=>'<button class="chip num'+(f.v>=1e3?" big":"")+'" data-act="chip" data-v="'+f.v+'" id="chip-'+f.v+'" style="background:'+f.bg+";color:"+f.fg+'" aria-label="Ficha de '+f.v+'">'+(f.v>=5e3?"5k":f.v)+"</button>").join(""),cr={connecting:()=>'<section class="card narrow"><p>A ligar \xE0 mesa\u2026</p></section>',login:()=>'<section class="card narrow"><h1 class="big">'+Z(Aa)+'</h1><div class="seg" role="tablist"><button role="tab" data-act="authTab" data-v="login" id="at-login">Entrar</button><button role="tab" data-act="authTab" data-v="new" id="at-new">Criar conta</button></div><form id="authForm" class="stack-form"><label for="aUser">Utilizador</label><input class="field" id="aUser" maxlength="20" required autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Ex.: rita"><label for="aPass">Palavra-passe</label><input class="field" id="aPass" type="password" minlength="6" required autocomplete="current-password"><div id="aPass2Wrap" hidden class="stack-form"><label for="aPass2">Repetir palavra-passe</label><input class="field" id="aPass2" type="password" minlength="6" autocomplete="new-password"></div><button class="btn primary" type="submit" id="aSubmit">Entrar</button></form><p class="note" id="authNote" role="alert"></p><p class="note">A conta fica guardada: entra com ela em qualquer telem\xF3vel e mant\xE9m o saldo e as estat\xEDsticas.</p></section>',openTable:()=>'<section class="card narrow"><h1 class="big">Abrir a mesa</h1><form id="openForm" class="stack-form"><label for="init">Fichas iniciais por jogador</label><input class="field num" id="init" type="number" min="0" step="5" value="1000" inputmode="numeric"><button class="btn primary" type="submit">Abrir a mesa</button></form><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+Rn()+"</div></section>",noGame:()=>'<section class="card narrow"><h2>A mesa ainda n\xE3o est\xE1 aberta</h2><p>Quando a banca abrir a mesa, esta p\xE1gina atualiza sozinha.</p><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+Rn()+"</div></section>",sit:()=>'<section class="card narrow"><h1 class="big">'+Z(Aa)+'</h1><p id="sitHello"></p><button class="btn primary" data-act="sit" id="sitBtn">Sentar \xE0 mesa</button><div id="statsSit"></div><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+Rn()+"</div></section>",player:()=>ms('<span class="me" id="meBox"></span>')+'<nav class="tabs" role="tablist"><button role="tab" data-act="ptab" data-v="apostar" id="pt-apostar">Apostar</button><button role="tab" data-act="ptab" data-v="mesa" id="pt-mesa">Mesa</button><button role="tab" data-act="ptab" data-v="loja" id="pt-loja">Loja</button></nav><div id="pp-loja" class="tabp" hidden><section class="shop"><div class="shop-h"><span class="shop-eyebrow">Loja</span><h2 class="shop-title">O Mateus Banca</h2><p class="note">Gaste as fichas da mesa em extras para a sua conta. O que comprar fica para sempre na conta, mesmo depois de uma nova partida.</p><div class="shop-bal" id="shopBal"></div></div><div id="shopBody"></div></section></div><div id="pp-mesa" class="tabp" hidden><section class="sec"><div class="sec-h"><h2>Jogadores sentados</h2><span class="note" id="maxNoteP"></span></div><div id="tableView"></div></section></div><div id="pp-apostar" class="tabp"><div class="banner" id="banner"></div>'+ps()+'<section class="sec" id="myMultiSec" hidden><div class="sec-h"><h2>As minhas m\xFAltiplas</h2><span class="note">S\xF3 pagam se todas as sele\xE7\xF5es ganharem</span></div><div class="mlist" id="mlist"></div></section><section class="sec" id="resultSec" hidden><h2>\xDAltima ronda</h2><div class="read" id="resHead"></div><div class="res" id="res"></div></section><section class="panel"><div class="sec-h"><h2>A minha conta</h2><div class="row-actions"><button class="link" data-act="leave">Sair da mesa</button><button class="link" data-act="logout">Sair da conta</button></div></div><div id="statsBox"></div></section><section class="sec"><div class="sec-h"><h2>Hist\xF3rico</h2>'+Rn()+'</div><ul class="hist" id="hist"></ul></section><div class="bar"><div class="bar-in"><div class="slip" id="slip" hidden></div><div class="tools"><div class="chips" role="group" aria-label="Valor da ficha">'+ar()+'</div></div><div class="tools"><div class="modes"><button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="multi" id="mMulti">M\xFAltipla</button><button class="take" data-act="repeat" id="repeatBtn">Repetir</button></div><div class="tot" id="tot"></div></div></div></div></div>',bank:()=>ms()+'<nav class="tabs" role="tablist"><button role="tab" data-act="tab" data-v="mesa" id="t-mesa">Mesa</button><button role="tab" data-act="tab" data-v="jogadores" id="t-jogadores">Jogadores</button><button role="tab" data-act="tab" data-v="historico" id="t-historico">Hist\xF3rico</button><button role="tab" data-act="tab" data-v="loja" id="t-loja">Loja</button></nav><div id="p-mesa" class="tabp"><section class="panel"><div class="sec-h"><h2>Apostas</h2><span class="note" id="betSummary"></span></div><div class="row-actions"><button class="btn" data-act="toggleOpen" id="openBtn"></button><div class="seg" role="group" aria-label="Dados"><button data-act="diceMode" data-v="fisico" id="dm-fisico">Dados f\xEDsicos</button><button data-act="diceMode" data-v="virtual" id="dm-virtual">Dados virtuais</button></div></div><div class="row-actions"><label class="note" for="maxBet">M\xE1ximo por aposta</label><input class="field num" id="maxBet" type="number" min="0" step="5" inputmode="numeric" placeholder="Sem limite" style="width:130px"><button class="btn sm" data-act="saveMax">Guardar</button><span class="note" id="maxNote"></span></div><div class="who" id="who"></div></section>'+ps()+'<section class="sec" id="allMultiSec" hidden><div class="sec-h"><h2>M\xFAltiplas em jogo</h2></div><div class="mlist" id="mlist"></div></section><section class="panel" id="dados"><div class="sec-h"><h2>Resultado dos dados</h2><span class="note" id="diceHint"></span></div><div id="physical" class="stack-form"><div class="slots" id="slots"></div><div class="pad" id="pad">'+[1,2,3,4,5,6].map(f=>'<button data-act="face" data-v="'+f+'" aria-label="Face '+f+'">'+ls(f)+"</button>").join("")+'</div><div class="read" id="readout" aria-live="polite"></div><div class="row-actions"><button class="btn primary" data-act="settle" id="settle">Liquidar ronda</button><button class="btn" data-act="clearDice">Limpar dados</button></div></div><div id="virtual" class="stack-form" hidden><button class="btn primary roll" data-act="roll" id="rollBtn">Lan\xE7ar dados</button><p class="note">O site lan\xE7a os 5 dados ao acaso, mostra a anima\xE7\xE3o a todos e liquida a ronda.</p></div></section><section class="sec" id="resultSec" hidden><div class="sec-h"><h2>\xDAltima ronda</h2><button class="btn sm warn" data-act="undo" id="undoBtn">Corrigir: anular esta ronda</button></div><div class="read" id="resHead"></div><div class="res" id="res"></div></section></div><div id="p-jogadores" class="tabp" hidden><section class="panel"><h2>Convidar jogadores</h2><p class="note">Envie este link. Cada pessoa cria uma conta (utilizador e palavra-passe) e senta-se \xE0 mesa. S\xF3 contas com papel de admin veem a banca.</p><div class="row-actions"><input class="field" id="shareUrl" readonly aria-label="Link da mesa"><button class="btn sm" data-act="copy">Copiar link</button></div></section><section class="sec"><h2>Mesa</h2><div id="tableView"></div></section><section class="sec"><h2>Saldos das contas</h2><p class="note">O saldo \xE9 da conta: quem sai da mesa e volta a sentar-se entra com tudo o que tem.</p><div id="plist"></div></section><section class="sec"><h2>Contas registadas</h2><div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Utilizador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Maior pr\xE9mio</th><th scope="col">Admin</th></tr></thead><tbody id="ulist"></tbody></table></div></section><section class="panel"><h2>Defini\xE7\xF5es</h2><div class="row-actions"><label class="note" for="initChips">Fichas iniciais de quem se senta</label><input class="field num" id="initChips" type="number" min="0" step="5" inputmode="numeric" style="width:120px"><button class="btn sm" data-act="saveInit">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="reset" id="resetBtn">Nova partida (esvazia a mesa; os saldos ficam)</button><button class="btn sm warn" data-act="resetBal" id="resetBalBtn">Repor o saldo de todas as contas</button>'+Rn()+'</div></section></div><div id="p-historico" class="tabp" hidden><section class="sec"><h2>Hist\xF3rico</h2><ul class="hist" id="hist"></ul></section></div><div id="p-loja" class="tabp" hidden><section class="shop"><div class="shop-h"><span class="shop-eyebrow">Loja</span><h2 class="shop-title">O Mateus Banca</h2><p class="note">O que os jogadores podem comprar com as fichas da mesa.</p><div class="shop-bal" id="shopBal"></div></div><section class="panel" id="rwAdmin"><h2>Pr\xE9mios reais: pedidos por entregar</h2><div id="rwPending"></div></section><section class="panel"><h2 id="rwFormTitle">Novo pr\xE9mio</h2><form id="rwForm" class="rwform"><label for="rwSection">Sec\xE7\xE3o</label><select class="field" id="rwSection"><option value="iscte">ISCTE (bar e refeit\xF3rio)</option><option value="especial">Especial</option></select><label for="rwTitle">T\xEDtulo</label><input class="field" id="rwTitle" maxlength="40" required placeholder="Ex.: Refei\xE7\xE3o no refeit\xF3rio"><label for="rwDesc">Descri\xE7\xE3o</label><textarea class="field" id="rwDesc" maxlength="160" rows="2" placeholder="Ex.: Prato do dia com sopa e bebida"></textarea><div class="rwrow"><div class="stack-form"><label for="rwPrice">Pre\xE7o em fichas</label><input class="field num" id="rwPrice" type="number" min="1" step="1" inputmode="numeric" required></div><div class="stack-form"><label for="rwStock">Quantidade dispon\xEDvel</label><input class="field num" id="rwStock" type="number" min="0" step="1" inputmode="numeric" placeholder="Vazio = sem limite"></div></div><label class="check"><input type="checkbox" id="rwActive" checked> Vis\xEDvel na loja</label><div class="row-actions"><button class="btn primary" type="submit" id="rwSave">Criar pr\xE9mio</button><button class="btn" type="button" data-act="rwCancelEdit" id="rwCancelEdit" hidden>Cancelar edi\xE7\xE3o</button></div></form></section><section class="panel"><h2>Pr\xE9mios na loja</h2><div id="rwList"></div></section><section class="panel"><h2>Trocas j\xE1 tratadas</h2><div id="rwDone"></div></section><div id="shopBody"></div></section></div>'};function ti(f){f==="login"&&D("authForm").addEventListener("submit",async m=>{m.preventDefault();let _=D("aUser").value.trim(),E=D("aPass").value,k=D("authNote");if(k.textContent="",!VI.test(_)){k.textContent="O utilizador deve ter 3 a 20 caracteres: letras, n\xFAmeros, ponto, h\xEDfen ou _ (sem espa\xE7os nem acentos).";return}let O=_.toLowerCase()+Zm;D("aSubmit").disabled=!0;try{if(a.authTab==="new"){if(E!==D("aPass2").value){k.textContent="As palavras-passe n\xE3o s\xE3o iguais.",D("aSubmit").disabled=!1;return}Y=_,await n.createUserWithEmailAndPassword(r,O,E)}else await n.signInWithEmailAndPassword(r,O,E)}catch(V){k.textContent=MI(V),console.error(V)}D("aSubmit")&&(D("aSubmit").disabled=!1)}),f==="openTable"&&D("openForm").addEventListener("submit",async m=>{m.preventDefault();try{await n.setDoc(u.game,ur(Math.max(0,Math.floor(+D("init").value||0)),"fisico"))}catch(_){d(_)}}),f==="bank"&&(D("rwForm").addEventListener("submit",hi),D("shareUrl").value=location.href.split("#")[0],D("initChips").value=s.game?s.game.initial:1e3)}let ur=(f,m,_)=>({round:1,open:!0,initial:f,maxBet:_||0,diceMode:m||"fisico",roll:null,lastResult:null,history:[],lastBets:[],undo:null,created:Date.now()});function lr(f,m){let _=m&&a.dice.length===5?ds(a.dice):null;rg.forEach(E=>{let k=D("z-"+E.k);if(!k)return;let O={};if(f.filter(V=>V.kind==="s"&&V.k===E.k).forEach(V=>O[V.uid]=(O[V.uid]||0)+V.a),D("st-"+E.k).innerHTML=Object.entries(O).map(([V,B])=>'<span class="pill num"><span class="dot" style="background:'+fs(V)+'"></span>'+H(B)+"</span>").join(""),k.classList.remove("win","push","dim","sel"),a.mode==="multi"&&a.legs.includes(E.k)&&k.classList.add("sel"),_){let V=E.f(_);k.classList.add(V==null?"dim":V===0?"push":"win")}})}function hr(f){let m=s.game&&s.game.lastResult;if(D("resultSec").hidden=!m,!m)return;D("resHead").innerHTML="Ronda "+m.round+" \xB7 "+m.dice.map(E=>ls(E,"sm")).join(" ")+" \xB7 "+Z(m.desc)+(m.virtual?' \xB7 <span class="note">dados virtuais</span>':"");let _=f?m.per.filter(E=>E.uid===f):m.per;D("res").innerHTML=_.length?_.map(E=>{let k=E.ret-E.st;return'<div class="rcard"><div class="rhead"><span class="dot" style="background:'+E.color+'"></span>'+Z(E.name)+'<span class="net num '+(k>=0?"pos":"neg")+'">'+(k>0?"+":"")+H(k)+'</span></div><ul class="rlines">'+E.lines.map(O=>"<li><span>"+Z(O.n)+" \xB7 "+H(O.a)+'</span><span class="num '+(O.v?"":O.pay>0?"pos":"neg")+'">'+(O.v?"anulada: "+Z(O.v):O.pay>0?"recebe "+H(O.pay):"perde")+"</span></li>").join("")+"</ul></div>"}).join(""):'<p class="note">'+(f?"N\xE3o apostou nesta ronda.":"Ningu\xE9m apostou nesta ronda.")+"</p>"}function ni(){let f=s.game&&s.game.history||[];D("hist").innerHTML=f.length?f.map(m=>'<li><span class="hr">Ronda '+m.round+'</span><span class="hd">'+m.dice.map(_=>ls(_,"sm")).join("")+'</span><span class="note">Soma '+m.sum+'</span><span class="hn">'+m.per.map(_=>'<span class="num '+(_.net>=0?"pos":"neg")+'">'+Z(_.name)+" "+(_.net>0?"+":"")+H(_.net)+"</span>").join("")+"</span></li>").join(""):'<li class="note">As rondas liquidadas aparecem aqui.</li>'}function ri(f){f=f||Ta;let m=f.returned-f.staked;return'<dl class="stats"><div><dt>Rondas jogadas</dt><dd class="num">'+H(f.rounds)+'</dd></div><div><dt>Total apostado</dt><dd class="num">'+H(f.staked)+'</dd></div><div><dt>Resultado acumulado</dt><dd class="num '+(m>=0?"pos":"neg")+'">'+(m>0?"+":"")+H(m)+'</dd></div><div><dt>Maior pr\xE9mio</dt><dd class="num gold">'+H(f.best)+"</dd></div></dl>"}function gs(f,m,_){return f.map(E=>{let k=fh(E.legs);return'<div class="mcard"><div class="mh">'+(m?'<span class="dot" style="background:'+fs(E.uid)+'"></span>'+Z(yt(E.uid)):"M\xFAltipla")+'<span class="num">'+H(E.a)+' fichas</span></div><div class="ml">'+E.legs.map(O=>Je[O]?Z(rr(Je[O]))+" ("+Z(Je[O].p)+")":"?").join(" + ")+'</div><div class="mf"><span>Recebe at\xE9 <b class="num gold">'+H(Math.floor(E.a*k.max+1e-9))+"</b></span>"+(_?'<button class="btn sm warn" data-act="cancelMulti" data-id="'+E.id+'">Cancelar</button>':"")+"</div></div>"}).join("")}function ii(){D("roundNo").textContent=s.game?s.game.round:"\u2013";let f=s.game&&s.game.open;D("state").className="state "+(f?"on":"off"),D("state").textContent=f?"Apostas abertas":"Apostas fechadas"}let si={login(){D("at-login").setAttribute("aria-selected",String(a.authTab==="login")),D("at-new").setAttribute("aria-selected",String(a.authTab==="new")),D("aPass2Wrap").hidden=a.authTab!=="new",D("aPass2").required=a.authTab==="new",D("aPass").autocomplete=a.authTab==="new"?"new-password":"current-password",D("aSubmit").textContent=a.authTab==="new"?"Criar conta":"Entrar"},sit(){let f=ce();D("sitHello").innerHTML="Ol\xE1, <b>"+Z(f?f.name:"\u2026")+'</b>. Senta-se com <b class="gold">'+H(A(s.uid)?y(s.uid):s.game.initial)+"</b> fichas"+(A(s.uid)?", o saldo da sua conta.":" (fichas de boas-vindas)."),D("sitBtn").disabled=!f,D("statsSit").innerHTML=f?ri(f.stats):""},player(){let f=K();if(!f)return;ii();let m=s.game.open,_=Ee(s.uid);D("meBox").innerHTML='<span class="dot" style="background:'+f.color+'"></span>'+Z(f.name)+' \xB7 <b class="num">'+H(v(s.uid))+"</b>",D("banner").className="banner "+(m?"on":"off"),D("banner").textContent=(m?"Fa\xE7a as suas apostas. A banca fecha as apostas antes de lan\xE7ar os dados.":"Apostas fechadas. A banca est\xE1 a lan\xE7ar os dados.")+" "+I()+".",["apostar","mesa","loja"].forEach(V=>{D("pp-"+V).hidden=a.ptab!==V,D("pt-"+V).setAttribute("aria-selected",String(a.ptab===V))}),D("maxNoteP").textContent=I(),M(D("tableView"),sr()),D("chip-5000")&&(D("chip-5000").hidden=!We("f_5k")),a.chip===5e3&&!We("f_5k")&&(a.chip=25),Dn(),document.querySelectorAll(".zone").forEach(V=>V.disabled=!m),lr(_,!1),document.querySelectorAll(".chip").forEach(V=>V.setAttribute("aria-pressed",String(+V.dataset.v===a.chip))),D("mTake").setAttribute("aria-pressed",String(a.mode==="take")),D("mMulti").setAttribute("aria-pressed",String(a.mode==="multi"));let E=(s.game.lastBets||[]).filter(V=>V.uid===s.uid);D("repeatBtn").disabled=!m||!E.length||_.length>0,D("tot").innerHTML='Em jogo <b class="num">'+H(oe(s.uid))+'</b> \xB7 Dispon\xEDvel <b class="num">'+H(v(s.uid))+"</b>";let k=_.filter(V=>V.kind==="m");D("myMultiSec").hidden=!k.length,D("mlist").innerHTML=gs(k,!1,m);let O=ce();D("statsBox").innerHTML='<p class="note">Utilizador: <b>'+Z(O?O.name:f.name)+"</b></p>"+ri(O&&O.stats),oi(),hr(s.uid),ni()},bank(){ii(),["mesa","jogadores","historico","loja"].forEach(B=>{D("p-"+B).hidden=a.tab!==B,D("t-"+B).setAttribute("aria-selected",String(a.tab===B))});let f=s.game,m=f&&f.open,_=f&&f.diceMode==="virtual",E=s.bets.filter(B=>f&&B.round===f.round);D("openBtn").textContent=m?"Fechar apostas":"Reabrir apostas",D("openBtn").className="btn "+(m&&!_?"primary":""),D("dm-fisico").setAttribute("aria-pressed",String(!_)),D("dm-virtual").setAttribute("aria-pressed",String(!!_));let k=E.reduce((B,$)=>B+$.a,0);D("betSummary").textContent=E.length?H(k)+" fichas em "+E.length+" aposta(s)":"Sem apostas nesta ronda",document.activeElement!==D("maxBet")&&(D("maxBet").value=b()||""),D("maxNote").textContent=b()?"Atual: "+H(b()):"Atual: sem limite",M(D("tableView"),sr()),D("who").innerHTML=or().map(B=>{let $=oe(B.id),X=$>y(B.id),ve=P(B.id);return'<span class="wchip'+(X||ve?" over":"")+'"><span class="dot" style="background:'+B.color+'"></span>'+Z(B.name)+' <b class="num">'+H($)+"</b>"+(X?" \xB7 excede saldo":"")+(ve?" \xB7 acima do m\xE1ximo":"")+"</span>"}).join("")||'<span class="note">Ainda n\xE3o se sentou ningu\xE9m. Partilhe o link no separador Jogadores.</span>',document.querySelectorAll(".zone").forEach(B=>B.disabled=!0),lr(E,!_);let O=E.filter(B=>B.kind==="m");if(D("allMultiSec").hidden=!O.length,D("mlist").innerHTML=gs(O,!0,!1),D("physical").hidden=!!_,D("virtual").hidden=!_,D("diceHint").textContent=_?"Modo virtual":"Toque nas faces \xB7 toque num dado para o apagar",_)D("rollBtn").disabled=a.busy,D("rollBtn").textContent=a.busy?"A lan\xE7ar\u2026":m?"Fechar apostas e lan\xE7ar dados":"Lan\xE7ar dados";else{let B="";for(let X=0;X<5;X++){let ve=a.dice[X];B+='<button class="slot" data-act="slot" data-i="'+X+'" aria-label="'+(ve?"Dado "+(X+1)+": "+ve:"Dado "+(X+1)+" vazio")+'">'+ls(ve||0)+"</button>"}D("slots").innerHTML=B;let $=a.dice.length===5?ds(a.dice):null;D("readout").innerHTML=$?"<b>"+Z(ch($))+"</b>"+(m?" \xB7 feche as apostas antes de liquidar":""):a.dice.length?"Faltam "+(5-a.dice.length)+" dados":"Introduza os 5 dados lan\xE7ados",D("settle").disabled=!$||m||a.busy}if(hr(null),D("undoBtn").hidden=!(f&&f.undo),!(document.activeElement&&document.activeElement.closest&&document.activeElement.closest("#plist"))){let B=Object.values(s.users).sort(($,X)=>(s.players[X.id]?1:0)-(s.players[$.id]?1:0)||($.name||"").localeCompare(X.name||""));M(D("plist"),B.map($=>{let X=!!s.players[$.id];return'<div class="prow"><div class="nm"><span class="dot" style="background:'+(X?s.players[$.id].color:$.color||"#999")+'"></span><b>'+Z($.name)+"</b>"+(X?"":' <span class="note">(fora da mesa)</span>')+'</div><div class="bal num">'+H(y($.id))+(oe($.id)?'<div class="note">'+H(oe($.id))+" em jogo</div>":"")+'</div><div class="adj"><input class="field num" id="amt-'+$.id+'" type="number" min="1" inputmode="numeric" placeholder="Qtd." aria-label="Quantidade para '+Z($.name)+'"><button class="btn sm" data-act="give" data-id="'+$.id+'">Dar</button><button class="btn sm" data-act="takeChips" data-id="'+$.id+'">Tirar</button>'+(X?'<button class="btn sm warn" data-act="remove" data-id="'+$.id+'">Tirar da mesa</button>':"")+"</div></div>"}).join("")||'<p class="note">Ainda ningu\xE9m criou conta.</p>')}let V=Object.values(s.users).sort((B,$)=>(B.name||"").localeCompare($.name||""));M(D("ulist"),V.length?V.map(B=>{let $=B.stats||Ta,X=$.returned-$.staked;return'<tr><td><span class="dot" style="background:'+(B.color||"#999")+'"></span> '+Z(B.name)+(s.players[B.id]?"":' <span class="note">(fora da mesa)</span>')+'</td><td class="num">'+H($.rounds)+'</td><td class="num">'+H($.staked)+'</td><td class="num '+(X>=0?"pos":"neg")+'">'+(X>0?"+":"")+H(X)+'</td><td class="num">'+H($.best)+"</td><td>"+(B.id===s.uid?'<span class="note">Admin (voc\xEA)</span>':'<button class="btn sm'+(B.role==="admin"?" warn":"")+'" data-act="toggleAdmin" data-id="'+B.id+'">'+(B.role==="admin"?"Tirar admin":"Tornar admin")+"</button>")+"</td></tr>"}).join(""):'<tr><td colspan="6" class="note">Ainda ningu\xE9m criou conta.</td></tr>'),ni(),Dn(),vt()}};function oi(){let f=D("slip");if(f.hidden=a.mode!=="multi",f.hidden||document.activeElement&&document.activeElement.id==="stake")return;let m=a.legs.length,_='<div class="slip-h"><span><strong>M\xFAltipla</strong> \xB7 '+(m?m+" sele\xE7"+(m>1?"\xF5es":"\xE3o"):"toque nas casas para escolher")+"</span>",E=m?fh(a.legs):null;E&&(_+="<span>Paga at\xE9 <b>\xD7"+Qm(E.max)+"</b> \xB7 ganha em "+Qm(E.p*100)+"% das jogadas</span>"),_+="</div>",m&&(_+='<div class="legs">'+a.legs.map(k=>'<button class="leg" data-act="leg" data-k="'+k+'" aria-label="Tirar '+Z(rr(Je[k]))+'">'+Z(rr(Je[k]))+' <span class="num">'+Z(Je[k].p)+'</span><span class="x" aria-hidden="true">\xD7</span></button>').join("")+"</div>"),_+='<div class="slip-a"><label class="note" for="stake">Aposta</label><input class="field num" id="stake" type="number" min="1" inputmode="numeric" value="'+(a.stake||"")+'" placeholder="Fichas"><span class="note">'+(m>1&&a.stake?'Recebe at\xE9 <b class="num gold">'+H(Math.floor(a.stake*E.max+1e-9))+"</b>":"Toque nas fichas para somar")+'</span><button class="btn sm primary" data-act="placeMulti" '+(m>1&&a.stake>0&&s.game.open?"":"disabled")+'>Fazer m\xFAltipla</button><button class="btn sm" data-act="clearSlip">Limpar</button></div>',f.innerHTML=_}let je={init:!1,round:0,roll:null},et=null,Xe=document.createElement("div");Xe.className="reveal",Xe.hidden=!0,Xe.setAttribute("role","dialog"),Xe.setAttribute("aria-modal","true"),Xe.setAttribute("aria-label","Resultado dos dados"),Xe.innerHTML='<div class="rv-box"><div class="rv-dice" id="rvDice"></div><div class="rv-desc" id="rvDesc" aria-live="polite"></div><div class="rv-label" id="rvLabel"></div><div class="rv-amt num" id="rvAmt"></div><div class="rv-sub" id="rvSub"></div><button class="btn" data-act="closeReveal" id="rvClose">Continuar</button></div>',document.body.appendChild(Xe);let Jt=null;function ai(f){let m='<span class="bdie" aria-hidden="true">';for(let _=0;_<9;_++)m+='<i class="'+(f&&ph[f].includes(_)?"on":"")+'"></i>';return m+"</span>"}function ke(f,m){f.querySelectorAll("i").forEach((_,E)=>_.classList.toggle("on",ph[m].includes(E)))}function Fe(){let f=s.game;if(!f)return;if(!je.init){je.init=!0,je.round=f.lastResult?f.lastResult.round:0,je.roll=f.roll?f.roll.id:null;return}f.roll&&f.roll.id!==je.roll&&(je.roll=f.roll.id,Yt(f.roll.dice,f.roll.round,2400));let m=f.lastResult;if(m&&m.round>je.round){if(je.round=m.round,(!et||et.round!==m.round)&&Yt(m.dice,m.round,1100),!et)return;et.result=m,ci()}else m&&m.round<je.round?je.round=m.round:m||(je.round=0)}function Yt(f,m,_){if(N()!=="bank"&&!K())return;clearTimeout(Jt),et={round:m,result:null,shown:!1},eg()&&(_=0),D("rvDice").innerHTML=f.map(()=>ai(1)).join(""),D("rvDesc").textContent=_?"A lan\xE7ar os dados\u2026":"",D("rvLabel").textContent="",D("rvAmt").textContent="",D("rvSub").textContent="",D("rvAmt").className="rv-amt num",D("rvClose").hidden=!0,Xe.hidden=!1;let k=[...D("rvDice").children];k.forEach((V,B)=>{V.style.animationDelay=B*70+"ms",V.classList.add("tumble")}),et.tumble=(async()=>{let V=performance.now(),B=60;for(;performance.now()-V<_;)k.forEach($=>ke($,1+Math.floor(Math.random()*6))),await LI(B),B=Math.min(180,B*1.06);k.forEach(($,X)=>{$.classList.remove("tumble"),ke($,f[X]),$.classList.add("land")}),D("rvDesc").textContent=ch(ds(f))})();let O=et;et.tumble.then(()=>{O.tumbled=!0,ci()})}function dr(f,m,_,E){return E=E||"",eg()||_<=0?(f.textContent=E+H(m),Promise.resolve()):new Promise(k=>{let O=performance.now(),V=B=>{let $=Math.min(1,(B-O)/_),X=1-Math.pow(1-$,3);f.textContent=E+H(Math.round(m*X)),$<1?requestAnimationFrame(V):k()};requestAnimationFrame(V)})}async function ci(){let f=et;if(!f||!f.tumbled||!f.result||f.shown)return;f.shown=!0;let m=f.result,_=D("rvLabel"),E=D("rvAmt"),k=D("rvSub"),O=3500;if(N()==="bank"){let V=m.per.reduce((X,ve)=>X+ve.st,0),B=m.per.reduce((X,ve)=>X+ve.ret,0),$=V-B;_.textContent=$>=0?"A banca ganha":"A banca paga",E.className="rv-amt num "+($>0?"pos":$<0?"neg":""),await dr(E,Math.abs($),1200,$>0?"+":$<0?"\u2212":""),k.textContent=m.per.length?m.per.map(X=>X.name+" "+(X.ret-X.st>0?"+":"")+H(X.ret-X.st)).join(" \xB7 "):"Ningu\xE9m apostou nesta ronda."}else{let V=m.per.find(B=>B.uid===s.uid);if(!V)_.textContent="N\xE3o apostou nesta ronda",O=2500;else{let B=V.ret-V.st;B>0?(_.textContent="Ganhou",E.className="rv-amt num pos win",await dr(E,B,Math.min(2600,900+V.ret/V.st*120),"+"),E.classList.add("pop"),k.textContent="Apostou "+H(V.st)+" \xB7 recebeu "+H(V.ret),O=6e3):B===0?(_.textContent="Ficou igual",E.className="rv-amt num",E.textContent="0",k.textContent="Recebeu de volta o que apostou ("+H(V.st)+")."):(_.textContent="Perdeu",E.className="rv-amt num neg",await dr(E,-B,900,"\u2212"),k.textContent=V.ret>0?"Ganhou "+H(V.ret)+" em pr\xE9mios, mas tinha apostado "+H(V.st)+".":"Boa sorte na pr\xF3xima ronda.",O=4500)}}D("rvClose").hidden=!1,clearTimeout(Jt),Jt=setTimeout(ui,O)}function ui(){clearTimeout(Jt),Xe.hidden=!0,et=null}let lt={iscte:{name:"ISCTE",sub:"Bar e refeit\xF3rio da faculdade",emb:"ISCTE"},especial:{name:"Especial",sub:"Ofertas que v\xE3o mudando",emb:"\u2605"}},Cn=f=>"#"+String(f).slice(-6).toUpperCase(),fr=f=>new Date(f).toLocaleString("pt-PT",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}),pr=f=>f.stock<0?"Sem limite":f.stock===0?"Esgotado":f.stock===1?"Resta 1":"Restam "+H(f.stock),_s={pendente:"Por entregar",entregue:"Entregue",cancelado:"Cancelado"};function Ca(f,m){return Object.values(s.rewards).filter(_=>_.section===f&&(m||_.active)).sort((_,E)=>_.price-E.price||(_.title||"").localeCompare(E.title||""))}function li(){let f=q(),m=K(),_=m?v(s.uid):0,E=s.game&&s.game.open,k=V=>{let B;return f?B='<span class="note">'+(V.active?"Vis\xEDvel":"Escondido")+" \xB7 gerido pela banca</span>":V.stock===0?B='<span class="owned neg">Esgotado</span>':m?B='<button class="btn sm primary" data-act="redeem" data-id="'+V.id+'" data-label="Trocar \xB7 '+H(V.price)+'"'+(E&&_>=V.price?"":" disabled")+">Trocar \xB7 "+H(V.price)+"</button>"+(E&&_<V.price?'<span class="note">Faltam '+H(V.price-_)+"</span>":""):B='<span class="note">Sente-se \xE0 mesa para trocar</span>','<div class="sitem reward'+(V.stock===0?" locked":"")+'"><div class="remb '+V.section+'" aria-hidden="true">'+Z(lt[V.section].emb)+'</div><div class="sinfo"><b>'+Z(V.title)+"</b>"+(V.desc?'<span class="note">'+Z(V.desc)+"</span>":"")+'<span class="stock num">'+pr(V)+'</span></div><div class="sbuy">'+B+"</div></div>"},O="";if(["iscte","especial"].forEach(V=>{let B=Ca(V,f);O+='<h3 class="shop-sec">'+lt[V].name+' <span class="shop-sub">'+lt[V].sub+"</span></h3>"+(B.length?'<div class="sgrid">'+B.map(k).join("")+"</div>":'<p class="note">'+(f?"Ainda n\xE3o h\xE1 pr\xE9mios nesta sec\xE7\xE3o. Crie um no formul\xE1rio acima.":"Ainda n\xE3o h\xE1 pr\xE9mios nesta sec\xE7\xE3o. Volte mais tarde.")+"</p>")}),!f){let V=s.redemptions.filter(B=>B.uid===s.uid).slice(0,20);O+='<h3 class="shop-sec">As minhas trocas</h3>'+(V.length?'<ul class="rdlist">'+V.map(B=>'<li><span class="rcode num">'+Cn(B.id)+'</span><span class="rtitle">'+Z(B.title)+'</span><span class="note num">'+H(B.price)+" fichas \xB7 "+fr(B.ts)+'</span><span class="rstat '+B.status+'">'+_s[B.status]+"</span></li>").join("")+'</ul><p class="note">Mostre o c\xF3digo ao Mateus para receber o pr\xE9mio.</p>':'<p class="note">Ainda n\xE3o trocou fichas por pr\xE9mios.</p>')}return O}async function ys(f){let m=s.rewards[f],_=K(),E=ce();if(!m||!_||!E||q())return;if(!m.active||m.stock===0){re("Este pr\xE9mio j\xE1 n\xE3o est\xE1 dispon\xEDvel.");return}if(!s.game.open){re("As trocas voltam quando a banca reabrir as apostas.");return}if(v(s.uid)<m.price){re("Faltam "+H(m.price-v(s.uid))+" fichas.");return}let k="x"+Date.now().toString(36)+Math.random().toString(36).slice(2,8),O=n.writeBatch(i);O.set(n.doc(i,"redemptions",k),{uid:s.uid,name:E.name,rewardId:f,title:m.title,section:m.section,price:m.price,ts:Date.now(),status:"pendente"}),O.update(n.doc(i,"users",s.uid),{balance:y(s.uid)-m.price,lastRedemption:k}),m.stock>0&&O.update(n.doc(i,"rewards",f),{stock:m.stock-1,lastRedemption:k});try{await O.commit(),re("Pedido feito: "+m.title+" ("+Cn(k)+"). Mostre o c\xF3digo ao Mateus.")}catch(V){d(V)}}let Xt=null;function kn(){if(!D("rwPending"))return;let f=s.redemptions.filter(E=>E.status==="pendente");M(D("rwPending"),f.length?'<ul class="rdlist">'+f.map(E=>'<li><span class="rcode num">'+Cn(E.id)+'</span><span class="rtitle"><b>'+Z(E.name)+"</b> \xB7 "+Z(E.title)+'</span><span class="note num">'+H(E.price)+" fichas \xB7 "+fr(E.ts)+'</span><span class="ractions"><button class="btn sm primary" data-act="rdDeliver" data-id="'+E.id+'">Entregue</button><button class="btn sm warn" data-act="rdCancel" data-id="'+E.id+'">Cancelar e devolver</button></span></li>').join("")+"</ul>":'<p class="note">N\xE3o h\xE1 pedidos por entregar.</p>');let m=Object.values(s.rewards).sort((E,k)=>(E.section+E.price).localeCompare(k.section+k.price)||E.price-k.price);M(D("rwList"),m.length?'<ul class="rdlist">'+m.map(E=>'<li><span class="rcode">'+Z(lt[E.section]?lt[E.section].name:E.section)+'</span><span class="rtitle"><b>'+Z(E.title)+"</b>"+(E.active?"":' <span class="note">(escondido)</span>')+'</span><span class="note num">'+H(E.price)+" fichas \xB7 "+pr(E)+'</span><span class="ractions"><button class="btn sm" data-act="rwEdit" data-id="'+E.id+'">Editar</button><button class="btn sm" data-act="rwToggle" data-id="'+E.id+'">'+(E.active?"Esconder":"Mostrar")+'</button><button class="btn sm warn" data-act="rwDelete" data-id="'+E.id+'">Apagar</button></span></li>').join("")+"</ul>":'<p class="note">Ainda n\xE3o criou pr\xE9mios.</p>');let _=s.redemptions.filter(E=>E.status!=="pendente").slice(0,20);M(D("rwDone"),_.length?'<ul class="rdlist">'+_.map(E=>'<li><span class="rcode num">'+Cn(E.id)+'</span><span class="rtitle"><b>'+Z(E.name)+"</b> \xB7 "+Z(E.title)+'</span><span class="note num">'+H(E.price)+" fichas \xB7 "+fr(E.ts)+'</span><span class="rstat '+E.status+'">'+_s[E.status]+"</span></li>").join("")+"</ul>":'<p class="note">Ainda n\xE3o h\xE1 trocas tratadas.</p>')}function Zt(f){Xt=f?f.id:null,D("rwFormTitle").textContent=f?"Editar pr\xE9mio":"Novo pr\xE9mio",D("rwSave").textContent=f?"Guardar altera\xE7\xF5es":"Criar pr\xE9mio",D("rwCancelEdit").hidden=!f,D("rwSection").value=f?f.section:"iscte",D("rwTitle").value=f?f.title:"",D("rwDesc").value=f&&f.desc||"",D("rwPrice").value=f?f.price:"",D("rwStock").value=f&&f.stock>=0?f.stock:"",D("rwActive").checked=f?!!f.active:!0}async function hi(f){f.preventDefault();let m=D("rwTitle").value.trim(),_=Math.floor(+D("rwPrice").value);if(!m||!(_>0)){re("Escreva o t\xEDtulo e um pre\xE7o maior que 0.");return}let E=D("rwStock").value.trim(),k=E===""?-1:Math.max(0,Math.floor(+E)),O={section:D("rwSection").value,title:m,desc:D("rwDesc").value.trim(),price:_,stock:k,active:D("rwActive").checked,updated:Date.now()},V=Xt||"w"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);try{Xt?await n.updateDoc(n.doc(i,"rewards",V),O):await n.setDoc(n.doc(i,"rewards",V),{...O,created:Date.now()}),re(Xt?"Pr\xE9mio atualizado":"Pr\xE9mio criado"),Zt(null)}catch(B){d(B)}}async function xt(f){try{await n.updateDoc(n.doc(i,"redemptions",f),{status:"entregue",doneAt:Date.now()}),re("Marcado como entregue")}catch(m){d(m)}}async function vs(f){let m=s.redemptions.find(O=>O.id===f);if(!m)return;let _=n.writeBatch(i);_.update(n.doc(i,"redemptions",f),{status:"cancelado",doneAt:Date.now()}),s.users[m.uid]&&_.update(n.doc(i,"users",m.uid),{balance:y(m.uid)+m.price});let k=s.rewards[m.rewardId];k&&k.stock>=0&&_.update(n.doc(i,"rewards",k.id),{stock:k.stock+1});try{await _.commit(),re("Cancelado: devolvidas "+H(m.price)+" fichas a "+m.name)}catch(O){d(O)}}function Dn(){D("shopBody")&&(D("shopBal").innerHTML=q()?"<b>Conta admin:</b> tem todos os itens desbloqueados.":K()?'Dispon\xEDvel: <b class="num">'+H(v(s.uid))+"</b> fichas"+(s.game.open?"":' \xB7 <span class="neg">compras em pausa enquanto a banca lan\xE7a os dados</span>'):"Sente-se \xE0 mesa para poder comprar com as suas fichas.",M(D("shopBody"),ws()),q()&&kn())}function ws(){let f=ce()||{},m=v(s.uid),_=s.game&&s.game.open,E=f.theme&&We(f.theme)?f.theme:"classico",k=(U,fe,_e)=>{if(We(U.id))return _e?fe?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="'+U.id+'">Usar</button>':'<span class="owned">J\xE1 \xE9 seu</span>';let Ue=_&&m>=U.price;return'<button class="btn sm primary" data-act="buy" data-id="'+U.id+'" data-label="Comprar \xB7 '+H(U.price)+'"'+(Ue?"":" disabled")+">Comprar \xB7 "+H(U.price)+"</button>"+(_&&m<U.price?'<span class="note">Faltam '+H(U.price-m)+"</span>":"")},O=U=>'<div class="swatch" aria-hidden="true" style="background:'+U[0]+";border-color:"+U[1]+'"><span style="background:'+U[1]+'"></span><span style="background:'+U[2]+'"></span><span class="mini-chip" style="background:'+U[1]+'"></span></div>',V=U=>'<div class="sitem'+(E===U.id?" on":"")+'">'+O(U.sw)+'<div class="sinfo"><b>'+Z(U.name)+'</b><span class="note">'+Z(U.desc)+'</span></div><div class="sbuy">'+k(U,E===U.id,!0)+"</div></div>",B='<div class="sitem'+(E==="classico"?" on":"")+'">'+O(["#145236","#E8C46A","#F4ECD2"])+'<div class="sinfo"><b>Cl\xE1ssico</b><span class="note">O feltro verde original. Gr\xE1tis.</span></div><div class="sbuy">'+(E==="classico"?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="classico">Usar</button>')+"</div></div>",$=f.color,X=(U,fe)=>{let _e=!We(U.id)&&U.prev&&!We(U.prev);return'<div class="sitem rank'+($===U.hex?" on":"")+(_e?" locked":"")+'"><div class="medal" aria-hidden="true" style="background:'+U.grad+'"><span>'+(fe+1)+'</span></div><div class="sinfo"><b>'+Z(U.name)+'</b><span class="note">'+(_e?"Precisa de "+Z(Qt[U.prev].name)+" primeiro.":"Ranking "+(fe+1)+" de "+Ra.length+". A sua cor e ins\xEDgnia na mesa.")+'</span></div><div class="sbuy">'+(_e?'<span class="note">Bloqueado \xB7 '+H(U.price)+"</span>":k(U,$===U.hex,!0))+"</div></div>"},ht=!Ra.map(U=>U.hex).includes($),gr='<div class="sitem'+(ht?" on":"")+'"><div class="cdot" aria-hidden="true" style="background:'+(ht&&$?$:ei[0])+'"></div><div class="sinfo"><b>Cor da casa</b><span class="note">Uma das cores normais da mesa. Gr\xE1tis.</span></div><div class="sbuy">'+(ht?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="normal">Usar</button>')+"</div></div>",dt=Qt.f_5k,Vn='<div class="sitem'+(We("f_5k")?" on":"")+'"><div class="bigchip" aria-hidden="true" style="background:'+ba.bg+";color:"+ba.fg+'">5k</div><div class="sinfo"><b>'+Z(dt.name)+'</b><span class="note">'+Z(dt.desc)+'</span></div><div class="sbuy">'+k(dt,!1,!1)+"</div></div>";return li()+'<h3 class="shop-sec">Temas da mesa</h3><div class="sgrid">'+B+mh.filter(U=>U.kind==="theme").map(V).join("")+'</div><h3 class="shop-sec">Rankings de jogador</h3><p class="note">Cada ranking d\xE1-lhe uma cor e uma ins\xEDgnia na mesa. Sobe-se por ordem: Bronze, Prata, Ouro, Platina, Diamante, Rubi e Esmeralda.</p><div class="sgrid">'+gr+Ra.map(X).join("")+'</div><h3 class="shop-sec">Fichas</h3><div class="sgrid">'+Vn+'</div><p class="note soon">Brevemente: mais novidades no balc\xE3o d\u2019O Mateus Banca.</p>'}async function Nn(f){let m=Qt[f],_=K(),E=ce();if(!m||!_||!E||We(f))return;if(!s.game.open){re("As compras voltam quando a banca reabrir as apostas.");return}if(m.prev&&!We(m.prev)){re("Precisa de "+Qt[m.prev].name+" primeiro.");return}if(v(s.uid)<m.price){re("Faltam "+H(m.price-v(s.uid))+" fichas.");return}let k=n.writeBatch(i);k.update(n.doc(i,"users",s.uid),{owned:Ze(s.uid).concat(f),balance:y(s.uid)-m.price});try{await k.commit(),re("Comprou "+m.name+"!"),m.kind!=="chip"&&(s.users[s.uid]={...s.users[s.uid],owned:Ze(s.uid).concat(f)},di(f))}catch(O){d(O)}}async function di(f){if(!ce())return;if(f==="classico"||Qt[f]&&Qt[f].kind==="theme"){if(f!=="classico"&&!We(f))return;try{await n.updateDoc(n.doc(i,"users",s.uid),{theme:f})}catch(k){d(k)}return}let _;if(f==="normal"){let k=Object.values(s.players).filter(O=>O.id!==s.uid).map(O=>O.color);_=ei.find(O=>!k.includes(O))||ei[0]}else Qt[f]&&Qt[f].kind==="rank"&&We(f)&&(_=Qt[f].hex);if(!_)return;let E=n.writeBatch(i);E.update(n.doc(i,"users",s.uid),{color:_}),K()&&E.update(n.doc(i,"players",s.uid),{color:_});try{await E.commit()}catch(k){d(k)}}async function De(f){try{return await n.addDoc(u.bets,{uid:s.uid,round:s.game.round,ts:Date.now(),...f}),!0}catch(m){return d(m),!1}}async function Is(f){if(N()!=="player"||!K()||!s.game.open)return;if(a.mode==="multi"){let E=a.legs.indexOf(f);if(E>=0){a.legs.splice(E,1),ue();return}if(a.legs.length>=6){re("M\xE1ximo de 6 sele\xE7\xF5es por m\xFAltipla");return}let k=a.legs.concat(f);if(k.length>1){let O=lh(k);if(O){re(rr(Je[f])+": "+O.charAt(0).toLowerCase()+O.slice(1));return}}a.legs=k,ue();return}if(a.mode==="take"){let E=Ee(s.uid).filter(k=>k.kind==="s"&&k.k===f);if(!E.length){re("N\xE3o tem fichas nesta casa");return}try{await n.deleteDoc(n.doc(i,"bets",E[E.length-1].id))}catch(k){d(k)}return}if(v(s.uid)<a.chip){re("N\xE3o tem fichas suficientes (dispon\xEDvel: "+H(v(s.uid))+")");return}let m=b(),_=S(s.uid,f);if(m&&_+a.chip>m){re("M\xE1ximo por aposta: "+H(m)+". Nesta casa j\xE1 tem "+H(_)+".");return}await De({kind:"s",k:f,a:a.chip})}async function On(){let f=Math.floor(a.stake||0),m=lh(a.legs);if(m){re(m);return}if(f>0){if(v(s.uid)<f){re("S\xF3 tem "+H(v(s.uid))+" fichas dispon\xEDveis");return}if(b()&&f>b()){re("M\xE1ximo por aposta: "+H(b())+" fichas");return}await De({kind:"m",legs:a.legs.slice(),a:f})&&(a.legs=[],a.stake=0,re("M\xFAltipla de "+H(f)+" fichas registada"),ue())}}async function xn(){let f=(s.game.lastBets||[]).filter(O=>O.uid===s.uid),m=v(s.uid),_=0,E=b(),k={};for(let O of f){if(O.a>m){_++;continue}if(E&&(O.kind==="m"?O.a>E:(k[O.k]||0)+O.a>E)){_++;continue}O.kind!=="m"&&(k[O.k]=(k[O.k]||0)+O.a),m-=O.a,await De(O.kind==="m"?{kind:"m",legs:O.legs,a:O.a}:{kind:"s",k:O.k,a:O.a})}_&&re(_+" aposta(s) ficaram de fora (fichas insuficientes ou acima do m\xE1ximo)")}async function ka(){let f=ce();if(!f||!s.game)return;let m=Object.values(s.players).map(k=>k.color),_=m.includes(f.color)&&ei.find(k=>!m.includes(k))||f.color,E=n.writeBatch(i);E.set(n.doc(i,"players",s.uid),{name:f.name,color:_,joined:Date.now()}),A(s.uid)||E.update(n.doc(i,"users",s.uid),{balance:s.game.initial});try{await E.commit()}catch(k){d(k)}}async function Da(){if(K()){if(Ee(s.uid).length){re("Retire as suas apostas desta ronda antes de sair da mesa.");return}try{await n.deleteDoc(n.doc(i,"players",s.uid)),re("Saiu da mesa. O seu saldo fica guardado na conta.")}catch(f){d(f)}}}async function Vt(f,m){let _=s.game;if(!f||f.length!==5||_.open)return!1;let E=ds(f),k=s.bets.filter(U=>U.round===_.round),O={},V={},B={};or().forEach(U=>{B[U.id]=y(U.id),V[U.id]=y(U.id)});let $={...V},X=[],ve=b(),ht={};k.forEach(U=>{let fe=s.players[U.uid];if(!fe)return;let _e=O[fe.id]||(O[fe.id]={uid:fe.id,name:fe.name,color:fe.color,st:0,ret:0,best:0,lines:[]}),Ue=U.kind==="m",pi=Ue?"M\xFAltipla: "+(U.legs||[]).map(mi=>Je[mi]?rr(Je[mi]):"?").join(" + "):Je[U.k]?rr(Je[U.k]):"?",Ke=Math.floor(U.a),tn=null;if(Ke>0?(Ue?lh(U.legs):!Je[U.k])?tn="aposta inv\xE1lida":ve&&(Ue?Ke>ve:(ht[fe.id+"|"+U.k]||0)+Ke>ve)?tn="acima do m\xE1ximo":Ke>$[fe.id]&&(tn="sem saldo"):tn="valor inv\xE1lido",tn){_e.lines.push({n:pi,a:U.a,pay:0,v:tn});return}$[fe.id]-=Ke,Ue||(ht[fe.id+"|"+U.k]=(ht[fe.id+"|"+U.k]||0)+Ke);let nn=Ue?Math.floor(Ke*ig(U.legs,E)+1e-9):OI(Ke,Je[U.k].f(E));_e.st+=Ke,_e.ret+=nn,V[fe.id]+=nn-Ke,nn>_e.best&&(_e.best=nn),_e.lines.push({n:pi,a:Ke,pay:nn}),X.push(Ue?{uid:U.uid,kind:"m",legs:U.legs,a:Ke}:{uid:U.uid,kind:"s",k:U.k,a:Ke})});let gr=Object.values(O).map(({best:U,...fe})=>fe),dt=n.writeBatch(i),Vn={};Object.keys(V).forEach(U=>{if(!s.users[U])return;let fe={};(V[U]!==B[U]||!A(U))&&(fe.balance=V[U]);let _e=O[U];if(_e&&_e.st>0){let Ue={...Ta,...s.users[U].stats||{}};Vn[U]=Ue,fe.stats={rounds:Ue.rounds+1,staked:Ue.staked+_e.st,returned:Ue.returned+_e.ret,best:Math.max(Ue.best,_e.best)}}Object.keys(fe).length&&dt.update(n.doc(i,"users",U),fe)}),s.bets.forEach(U=>dt.delete(n.doc(i,"bets",U.id))),dt.update(u.game,Jm({round:_.round+1,open:!0,lastResult:{round:_.round,dice:f.slice(),desc:ch(E),per:gr,virtual:!!m},history:[{round:_.round,dice:f.slice(),sum:E.sum,per:gr.map(U=>({name:U.name,net:U.ret-U.st}))}].concat(_.history||[]).slice(0,30),lastBets:X,undo:{round:_.round,dice:f.slice(),virtual:!!m,chips:B,stats:Vn,bets:s.bets.map(U=>{let{id:fe,..._e}=U;return{id:fe,d:_e}}),lastResult:_.lastResult||null,lastBets:_.lastBets||[]}}));try{return await dt.commit(),!0}catch(U){return d(U),!1}}async function Na(){a.busy||(a.busy=!0,ue(),await Vt(a.dice,!1)&&(a.dice=[]),a.busy=!1,ue())}async function Oa(){if(!(a.busy||!s.game)){a.busy=!0,ue();try{let f=s.game,m=xI(),_=Date.now().toString(36)+Math.random().toString(36).slice(2,6);je.roll=_,await n.updateDoc(u.game,{open:!1,roll:{id:_,round:f.round,dice:m}}),Yt(m,f.round,2400),await et.tumble,await Vt(m,!0)}catch(f){d(f)}a.busy=!1,ue()}}async function mr(){let f=s.game.undo;if(!f)return;let m=n.writeBatch(i);Object.keys(s.users).forEach(_=>{let E={};_ in f.chips&&(E.balance=f.chips[_]),f.stats&&f.stats[_]&&(E.stats=f.stats[_]),Object.keys(E).length&&m.update(n.doc(i,"users",_),E)}),s.bets.forEach(_=>m.delete(n.doc(i,"bets",_.id))),f.bets.forEach(_=>m.set(n.doc(i,"bets",_.id),_.d)),m.update(u.game,Jm({round:f.round,open:!1,roll:null,lastResult:f.lastResult,lastBets:f.lastBets,history:(s.game.history||[]).slice(1),undo:null}));try{await m.commit(),f.virtual||(a.dice=f.dice),re(f.virtual?"Ronda anulada. As apostas voltaram; pode lan\xE7ar de novo.":"Ronda anulada. Corrija os dados e liquide de novo."),ue()}catch(_){d(_)}}async function Es(){let f=n.writeBatch(i);Object.keys(s.players).forEach(m=>f.delete(n.doc(i,"players",m))),s.bets.forEach(m=>f.delete(n.doc(i,"bets",m.id))),f.set(u.game,ur(s.game?s.game.initial:1e3,s.game?s.game.diceMode:"fisico",s.game?s.game.maxBet:0));try{await f.commit(),a.dice=[],re("Partida nova. Os jogadores voltam a sentar-se com o saldo das suas contas.")}catch(m){d(m)}}async function fi(){if(s.bets.length){re("Liquide ou limpe as apostas da ronda antes de repor os saldos.");return}let f=n.writeBatch(i),m=s.game?s.game.initial:1e3;Object.keys(s.users).forEach(_=>f.update(n.doc(i,"users",_),{balance:m}));try{await f.commit(),re("Todas as contas ficaram com "+H(m)+" fichas.")}catch(_){d(_)}}let en=!1;async function vt(){if(en||!q()||!s.usersLoaded)return;let f=Object.values(s.players).filter(_=>typeof _.chips=="number"&&s.users[_.id]&&!A(_.id));if(!f.length)return;en=!0;let m=n.writeBatch(i);f.forEach(_=>m.update(n.doc(i,"users",_.id),{balance:_.chips}));try{await m.commit(),re("Saldos de "+f.length+" jogador(es) passaram para as contas.")}catch(_){d(_)}en=!1}let le=null;document.addEventListener("click",async f=>{let m=f.target.closest("[data-act]");if(!m)return;let _=m.dataset.act;if(_==="role")s.role=m.dataset.v,Xm.set("sicbo5-role",s.role),Ae="",ue(),window.scrollTo(0,0);else if(_==="toggleAdmin"){let E=s.users[m.dataset.id];if(!E||E.id===s.uid)return;if(le!==m){le&&(le.textContent=le.dataset.label),le=m,m.dataset.label=m.textContent,m.textContent="Confirmar",setTimeout(()=>{le===m&&(m.textContent=m.dataset.label,le=null)},4e3);return}le=null,D("ulist")._last=null;let k=E.role!=="admin";try{await n.updateDoc(n.doc(i,"users",E.id),{role:k?"admin":"player"}),re(E.name+(k?" passou a ter acesso \xE0 banca":" deixou de ter acesso \xE0 banca"))}catch(O){d(O)}}else if(_==="authTab")a.authTab=m.dataset.v,D("authNote").textContent="",ue();else if(_==="logout")try{await n.signOut(r)}catch(E){d(E)}else if(_==="sit")ka();else if(_==="zone")Is(m.dataset.k);else if(_==="chip")a.chip=+m.dataset.v,a.mode==="multi"&&(a.stake=(a.stake||0)+a.chip),ue();else if(_==="mode")a.mode=a.mode===m.dataset.v?"bet":m.dataset.v,ue();else if(_==="leg")a.legs=a.legs.filter(E=>E!==m.dataset.k),ue();else if(_==="clearSlip")a.legs=[],a.stake=0,ue();else if(_==="placeMulti")On();else if(_==="repeat")xn();else if(_==="cancelMulti")try{await n.deleteDoc(n.doc(i,"bets",m.dataset.id)),re("M\xFAltipla cancelada")}catch(E){d(E)}else if(_==="tab")a.tab=m.dataset.v,ue();else if(_==="ptab")a.ptab=m.dataset.v,a.mode="bet",a.legs=[],ue(),window.scrollTo(0,0);else if(_==="buy"){if(le!==m){le&&(le.textContent=le.dataset.label),le=m,m.textContent="Confirmar compra",setTimeout(()=>{le===m&&(m.textContent=m.dataset.label,le=null)},4e3);return}le=null,D("shopBody")._last=null,Nn(m.dataset.id)}else if(_==="equip")di(m.dataset.id);else if(_==="redeem"||_==="rdCancel"||_==="rwDelete"){if(le!==m){le&&(le.textContent=le.dataset.label),le=m,m.dataset.label=m.dataset.label||m.textContent,m.textContent=_==="redeem"?"Confirmar troca":"Confirmar",setTimeout(()=>{le===m&&(m.textContent=m.dataset.label,le=null)},4e3);return}if(le=null,m.textContent=m.dataset.label,["shopBody","rwPending","rwList"].forEach(E=>{D(E)&&(D(E)._last=null)}),_==="redeem")ys(m.dataset.id);else if(_==="rdCancel")vs(m.dataset.id);else try{await n.deleteDoc(n.doc(i,"rewards",m.dataset.id)),re("Pr\xE9mio apagado"),Xt===m.dataset.id&&Zt(null)}catch(E){d(E)}}else if(_==="rdDeliver")xt(m.dataset.id);else if(_==="rwEdit")Zt(s.rewards[m.dataset.id]),D("rwForm").scrollIntoView({behavior:"smooth",block:"start"});else if(_==="rwCancelEdit")Zt(null);else if(_==="rwToggle"){let E=s.rewards[m.dataset.id];if(E)try{await n.updateDoc(n.doc(i,"rewards",E.id),{active:!E.active})}catch(k){d(k)}}else if(_==="saveMax"){let E=Math.max(0,Math.floor(+D("maxBet").value||0));try{await n.updateDoc(u.game,{maxBet:E}),D("maxBet").blur(),re(E?"M\xE1ximo por aposta: "+H(E)+" fichas":"Sem m\xE1ximo por aposta")}catch(k){d(k)}}else if(_==="toggleOpen")try{await n.updateDoc(u.game,{open:!s.game.open})}catch(E){d(E)}else if(_==="diceMode"){if(s.game.diceMode!==m.dataset.v)try{await n.updateDoc(u.game,{diceMode:m.dataset.v})}catch(E){d(E)}}else if(_==="roll")Oa();else if(_==="face")a.dice.length<5&&(a.dice.push(+m.dataset.v),ue());else if(_==="slot"){let E=+m.dataset.i;a.dice[E]&&(a.dice.splice(E,1),ue())}else if(_==="clearDice")a.dice=[],ue();else if(_==="settle")Na();else if(_==="undo")mr();else if(_==="closeReveal")ui();else if(_==="copy"){let E=D("shareUrl");try{await navigator.clipboard.writeText(E.value),re("Link copiado")}catch{E.select(),re("Selecionei o link: copie-o")}}else if(_==="saveInit"){let E=Math.max(0,Math.floor(+D("initChips").value||0));try{await n.updateDoc(u.game,{initial:E}),re("Quem se sentar a seguir come\xE7a com "+H(E)+" fichas")}catch(k){d(k)}}else if(_==="give"||_==="takeChips"){let E=s.users[m.dataset.id];if(!E)return;let k=D("amt-"+E.id),O=Math.floor(+k.value);if(!(O>0)){re("Escreva a quantidade de fichas"),k.focus();return}if(_==="takeChips"&&O>y(E.id)){re(E.name+" s\xF3 tem "+H(y(E.id))+" fichas");return}try{await n.updateDoc(n.doc(i,"users",E.id),{balance:y(E.id)+(_==="give"?O:-O)}),k.value="",k.blur(),re((_==="give"?"Dadas ":"Tiradas ")+H(O)+" fichas a "+E.name)}catch(V){d(V)}}else if(_==="leave")Da();else if(_==="remove"||_==="reset"||_==="resetBal"){if(le!==m){le&&(le.textContent=le.dataset.label),le=m,m.dataset.label=m.textContent,m.textContent="Confirmar",setTimeout(()=>{le===m&&(m.textContent=m.dataset.label,le=null)},4e3);return}if(le=null,m.textContent=m.dataset.label,D("plist")&&(D("plist")._last=null),_==="reset")Es();else if(_==="resetBal")fi();else{let E=m.dataset.id,k=n.writeBatch(i);k.delete(n.doc(i,"players",E)),s.bets.filter(O=>O.uid===E).forEach(O=>k.delete(n.doc(i,"bets",O.id)));try{await k.commit(),re("Saiu da mesa. O saldo fica na conta.")}catch(O){d(O)}}}}),document.addEventListener("keydown",f=>{f.key==="Escape"&&!Xe.hidden&&ui()}),document.addEventListener("input",f=>{f.target.id==="stake"&&(a.stake=Math.max(0,Math.floor(+f.target.value||0)))}),document.addEventListener("change",f=>{f.target.id==="stake"&&(f.target.blur(),ue())}),ue()}sg(ah);
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
