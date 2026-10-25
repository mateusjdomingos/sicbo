var vg=Object.defineProperty;var wg=(n,e)=>{for(var t in e)vg(n,t,{get:e[t],enumerable:!0})};var Wl={};wg(Wl,{addDoc:()=>Um,collection:()=>Sm,createUserWithEmailAndPassword:()=>Ec,deleteDoc:()=>Fm,doc:()=>ql,getDoc:()=>Vm,init:()=>CI,onAuthStateChanged:()=>bc,onSnapshot:()=>Bm,setDoc:()=>Lm,signInAnonymously:()=>Ic,signInWithEmailAndPassword:()=>Tc,signOut:()=>Ac,updateDoc:()=>Mm,writeBatch:()=>qm});var Lh=()=>{};var Uh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ig=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Bh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,v=(s&3)<<4|u>>4,E=(u&15)<<2|d>>6,k=d&63;l||(k=64,a||(E=64)),r.push(t[p],t[v],t[E],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Uh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ig(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let v=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||v==null)throw new Sa;let E=s<<2|u>>4;if(r.push(E),d!==64){let k=u<<4&240|d>>2;if(r.push(k),v!==64){let L=d<<6&192|v;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Sa=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Eg=function(n){let e=Uh(n);return Bh.encodeByteArray(e,!0)},ii=function(n){return Eg(n).replace(/\./g,"")},ps=function(n){try{return Bh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Tg=()=>jh().__FIREBASE_DEFAULTS__,bg=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ag=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&ps(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return Lh()||Tg()||bg()||Ag()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pa=n=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qh=n=>{let e=Pa(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ca=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config},ka=n=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${n}`]};var fs=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Yt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gs(n){return(await fetch(n,{credentials:"include"})).ok}function zh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ii(JSON.stringify(t)),ii(JSON.stringify(a)),""].join(".")}var ri={};function Sg(){let n={prod:[],emulator:[]};for(let e of Object.keys(ri))ri[e]?n.emulator.push(e):n.prod.push(e);return n}function Rg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var Mh=!1;function _s(n,e){if(typeof window>"u"||typeof document>"u"||!Yt(window.location.host)||ri[n]===e||ri[n]||Mh)return;ri[n]=e;function t(E){return`__firebase__banner__${E}`}let r="__firebase__banner",s=Sg().prod.length>0;function a(){let E=document.getElementById(r);E&&E.remove()}function u(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function l(E,k){E.setAttribute("width","24"),E.setAttribute("id",k),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){let E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Mh=!0,a()},E}function p(E,k){E.setAttribute("id",k),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function v(){let E=Rg(r),k=t("text"),L=document.getElementById(k)||document.createElement("span"),j=t("learnmore"),M=document.getElementById(j)||document.createElement("a"),ee=t("preprendIcon"),Q=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){let J=E.element;u(J),p(M,j);let ae=d();l(Q,ee),J.append(Q,L,M,ae),document.body.appendChild(J)}s?(L.innerText="Preview backend disconnected.",Q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Pg(){var n;let e=(n=ms())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $h(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kh(){let n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qh(){return!Pg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Da(){try{return typeof indexedDB=="object"}catch{return!1}}function Jh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Cg="FirebaseError",Ze=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Cg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xt.prototype.create)}},xt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?kg(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Ze(i,u,r)}};function kg(n,e){return n.replace(Dg,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Dg=/\{\$([^}]+)}/g;function Yh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(Fh(s)&&Fh(a)){if(!mt(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Fh(n){return n!==null&&typeof n=="object"}function ar(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cr(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ur(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xh(n,e){let t=new Ra(n,e);return t.subscribe.bind(t)}var Ra=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Aa),i.error===void 0&&(i.error=Aa),i.complete===void 0&&(i.complete=Aa);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Ng(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Aa(){}var UI=4*60*60*1e3;function ye(n){return n&&n._delegate?n._delegate:n}var st=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Pn="[DEFAULT]";var Na=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new fs;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xg(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Og(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Og(n){return n===Pn?void 0:n}function xg(n){return n.instantiationMode==="EAGER"}var ys=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Na(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Vg=[],re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));var Lg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Mg=re.INFO,Fg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Ug=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Fg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Xt=class{constructor(e){this.name=e,this._logLevel=Mg,this._logHandler=Ug,this._userLogHandler=null,Vg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}};var Bg=(n,e)=>e.some(t=>n instanceof t),Zh,ed;function jg(){return Zh||(Zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qg(){return ed||(ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var td=new WeakMap,xa=new WeakMap,nd=new WeakMap,Oa=new WeakMap,La=new WeakMap;function zg(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(gt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&td.set(t,n)}).catch(()=>{}),La.set(e,n),e}function Gg(n){if(xa.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});xa.set(n,e)}var Va={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rd(n){Va=n(Va)}function $g(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(vs(this),e,...t);return nd.set(r,e.sort?e.sort():[e]),gt(r)}:qg().includes(n)?function(...e){return n.apply(vs(this),e),gt(td.get(this))}:function(...e){return gt(n.apply(vs(this),e))}}function Hg(n){return typeof n=="function"?$g(n):(n instanceof IDBTransaction&&Gg(n),Bg(n,jg())?new Proxy(n,Va):n)}function gt(n){if(n instanceof IDBRequest)return zg(n);if(Oa.has(n))return Oa.get(n);let e=Hg(n);return e!==n&&(Oa.set(n,e),La.set(e,n)),e}var vs=n=>La.get(n);function sd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),u=gt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(gt(a.result),l.oldVersion,l.newVersion,gt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var Wg=["get","getKey","getAll","getAllKeys","count"],Kg=["put","add","delete","clear"],Ma=new Map;function id(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Kg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wg.includes(t)))return;let s=async function(a,...u){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return Ma.set(e,s),s}rd(n=>({...n,get:(e,t,r)=>id(e,t)||n.get(e,t,r),has:(e,t)=>!!id(e,t)||n.has(e,t)}));var Ua=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qg(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Qg(n){let e=n.getComponent();return e?.type==="VERSION"}var Ba="@firebase/app",od="0.13.2";var Vt=new Xt("@firebase/app"),Jg="@firebase/app-compat",Yg="@firebase/analytics-compat",Xg="@firebase/analytics",Zg="@firebase/app-check-compat",e_="@firebase/app-check",t_="@firebase/auth",n_="@firebase/auth-compat",r_="@firebase/database",i_="@firebase/data-connect",s_="@firebase/database-compat",o_="@firebase/functions",a_="@firebase/functions-compat",c_="@firebase/installations",u_="@firebase/installations-compat",l_="@firebase/messaging",h_="@firebase/messaging-compat",d_="@firebase/performance",f_="@firebase/performance-compat",p_="@firebase/remote-config",m_="@firebase/remote-config-compat",g_="@firebase/storage",__="@firebase/storage-compat",y_="@firebase/firestore",v_="@firebase/ai",w_="@firebase/firestore-compat",I_="firebase",E_="11.10.0";var ja="[DEFAULT]",T_={[Ba]:"fire-core",[Jg]:"fire-core-compat",[Xg]:"fire-analytics",[Yg]:"fire-analytics-compat",[e_]:"fire-app-check",[Zg]:"fire-app-check-compat",[t_]:"fire-auth",[n_]:"fire-auth-compat",[r_]:"fire-rtdb",[i_]:"fire-data-connect",[s_]:"fire-rtdb-compat",[o_]:"fire-fn",[a_]:"fire-fn-compat",[c_]:"fire-iid",[u_]:"fire-iid-compat",[l_]:"fire-fcm",[h_]:"fire-fcm-compat",[d_]:"fire-perf",[f_]:"fire-perf-compat",[p_]:"fire-rc",[m_]:"fire-rc-compat",[g_]:"fire-gcs",[__]:"fire-gcs-compat",[y_]:"fire-fst",[w_]:"fire-fst-compat",[v_]:"fire-vertex","fire-js":"fire-js",[I_]:"fire-js-all"};var ws=new Map,b_=new Map,qa=new Map;function ad(n,e){try{n.container.addComponent(e)}catch(t){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){let e=n.name;if(qa.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,n);for(let t of ws.values())ad(t,n);for(let t of b_.values())ad(t,n);return!0}function oi(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}var A_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new xt("app","Firebase",A_);var za=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}};var tn=E_;function Ha(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:ja,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(t||(t=Ca()),!t)throw Zt.create("no-options");let s=ws.get(i);if(s){if(mt(t,s.options)&&mt(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}let a=new ys(i);for(let l of qa.values())a.addComponent(l);let u=new za(t,r,a);return ws.set(i,u),u}function Is(n=ja){let e=ws.get(n);if(!e&&n===ja&&Ca())return Ha();if(!e)throw Zt.create("no-app",{appName:n});return e}function lt(n,e,t){var r;let i=(r=T_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(u.join(" "));return}en(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var S_="firebase-heartbeat-database",R_=1,si="firebase-heartbeat-store",Fa=null;function hd(){return Fa||(Fa=sd(S_,R_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(si)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Fa}async function P_(n){try{let t=(await hd()).transaction(si),r=await t.objectStore(si).get(dd(n));return await t.done,r}catch(e){if(e instanceof Ze)Vt.warn(e.message);else{let t=Zt.create("idb-get",{originalErrorMessage:e?.message});Vt.warn(t.message)}}}async function cd(n,e){try{let r=(await hd()).transaction(si,"readwrite");await r.objectStore(si).put(e,dd(n)),await r.done}catch(t){if(t instanceof Ze)Vt.warn(t.message);else{let r=Zt.create("idb-set",{originalErrorMessage:t?.message});Vt.warn(r.message)}}}function dd(n){return`${n.name}!${n.options.appId}`}var C_=1024,k_=30,Ga=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new $a(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ud();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>k_){let a=N_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=ud(),{heartbeatsToSend:r,unsentEntries:i}=D_(this._heartbeatsCache.heartbeats),s=ii(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Vt.warn(t),""}}};function ud(){return new Date().toISOString().substring(0,10)}function D_(n,e=C_){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ld(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ld(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var $a=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Da()?Jh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await P_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return cd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return cd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function ld(n){return ii(JSON.stringify({version:2,heartbeats:n})).length}function N_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function O_(n){en(new st("platform-logger",e=>new Ua(e),"PRIVATE")),en(new st("heartbeat",e=>new Ga(e),"PRIVATE")),lt(Ba,od,n),lt(Ba,od,"esm2017"),lt("fire-js","")}O_("");var x_="firebase",V_="11.10.0";lt(x_,V_,"app");function Es(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Dd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Nd=Dd,Od=new xt("auth","Firebase",Dd());var Cs=new Xt("@firebase/auth");function L_(n,...e){Cs.logLevel<=re.WARN&&Cs.warn(`Auth (${tn}): ${n}`,...e)}function bs(n,...e){Cs.logLevel<=re.ERROR&&Cs.error(`Auth (${tn}): ${n}`,...e)}function ht(n,...e){throw _c(n,...e)}function yt(n,...e){return _c(n,...e)}function xd(n,e,t){let r=Object.assign(Object.assign({},Nd()),{[e]:t});return new xt("auth","Firebase",r).create(e,{appName:n.name})}function vt(n){return xd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _c(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Od.create(n,...e)}function $(n,e,...t){if(!n)throw _c(e,...t)}function _t(n){let e="INTERNAL ASSERTION FAILED: "+n;throw bs(e),new Error(e)}function Mt(n,e){n||_t(e)}function Xa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function M_(){return fd()==="http:"||fd()==="https:"}function fd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function F_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M_()||Hh()||"connection"in navigator)?navigator.onLine:!0}function U_(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Cn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Gh()||Wh()}get(){return F_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function yc(n,e){Mt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var ks=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var B_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var j_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],q_=new Cn(3e4,6e4);function Ne(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ge(n,e,t,r,i={}){return Vd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let u=ar(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return $h()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(d.credentials="include"),ks.fetch()(await Ld(n,n.config.apiHost,t,u),d)})}async function Vd(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},B_),e);try{let i=new Za(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw ci(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ci(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ci(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ci(n,"user-disabled",a);let p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xd(n,p,d);ht(n,p)}}catch(i){if(i instanceof Ze)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function on(n,e,t,r,i={}){let s=await Ge(n,e,t,r,i);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ld(n,e,t,r){let i=`${e}${t}?${r}`,s=n,a=s.config.emulator?yc(n.config,i):`${n.config.apiScheme}://${i}`;return j_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function z_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Za=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),q_.get())})}};function ci(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=yt(n,e,r);return i.customData._tokenResponse=t,i}function pd(n){return n!==void 0&&n.enterprise!==void 0}var Ds=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return z_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Md(n,e){return Ge(n,"GET","/v2/recaptchaConfig",Ne(n,e))}async function G_(n,e){return Ge(n,"POST","/v1/accounts:delete",e)}async function Ns(n,e){return Ge(n,"POST","/v1/accounts:lookup",e)}function ui(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fd(n,e=!1){let t=ye(n),r=await t.getIdToken(e),i=vc(r);$(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ui(Wa(i.auth_time)),issuedAtTime:ui(Wa(i.iat)),expirationTime:ui(Wa(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Wa(n){return Number(n)*1e3}function vc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{let i=ps(t);return i?JSON.parse(i):(bs("Failed to decode base64 JWT payload"),null)}catch(i){return bs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function md(n){let e=vc(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function di(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ze&&$_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var ec=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var fi=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Os(n){var e;let t=n.auth,r=await n.getIdToken(),i=await di(n,Ns(t,{idToken:r}));$(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Bd(s.providerUserInfo):[],u=H_(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,p=l?d:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new fi(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,v)}async function Ud(n){let e=ye(n);await Os(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function H_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Bd(n){return n.map(e=>{var{providerId:t}=e,r=Es(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function W_(n,e){let t=await Vd(n,{},async()=>{let r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Ld(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(l.credentials="include"),ks.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function K_(n,e){return Ge(n,"POST","/v2/accounts:revokeToken",Ne(n,e))}var li=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):md(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");let t=md(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await W_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return _t("not implemented")}};function nn(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var rn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Es(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ec(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await di(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Fd(this,e)}reload(){return Ud(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Os(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(vt(this.auth));let e=await this.getIdToken();return await di(this,G_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,p;let v=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,k=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,L=(a=t.photoURL)!==null&&a!==void 0?a:void 0,j=(u=t.tenantId)!==null&&u!==void 0?u:void 0,M=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,ee=(d=t.createdAt)!==null&&d!==void 0?d:void 0,Q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:J,emailVerified:ae,isAnonymous:be,providerData:ie,stsTokenManager:T}=t;$(J&&T,e,"internal-error");let g=li.fromJSON(this.name,T);$(typeof J=="string",e,"internal-error"),nn(v,e.name),nn(E,e.name),$(typeof ae=="boolean",e,"internal-error"),$(typeof be=="boolean",e,"internal-error"),nn(k,e.name),nn(L,e.name),nn(j,e.name),nn(M,e.name),nn(ee,e.name),nn(Q,e.name);let w=new n({uid:J,auth:e,email:E,emailVerified:ae,displayName:v,isAnonymous:be,photoURL:L,phoneNumber:k,tenantId:j,stsTokenManager:g,createdAt:ee,lastLoginAt:Q});return ie&&Array.isArray(ie)&&(w.providerData=ie.map(b=>Object.assign({},b))),M&&(w._redirectEventId=M),w}static async _fromIdTokenResponse(e,t,r=!1){let i=new li;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Os(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];$(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Bd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new li;u.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fi(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var gd=new Map;function Lt(n){Mt(n instanceof Function,"Expected a class definition");let e=gd.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,gd.set(n,e),e)}var xs=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};xs.type="NONE";var tc=xs;function As(n,e,t){return`firebase:${n}:${e}:${t}`}var Vs=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=As(this.userKey,i.apiKey,s),this.fullPersistenceKey=As("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Ns(this.auth,{idToken:e}).catch(()=>{});return t?rn._fromGetAccountInfoResponse(this.auth,t,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Lt(tc),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||Lt(tc),a=As(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let p=await d._get(a);if(p){let v;if(typeof p=="string"){let E=await Ns(e,{idToken:p}).catch(()=>{});if(!E)break;v=await rn._fromGetAccountInfoResponse(e,E,p)}else v=rn._fromJSON(e,p);d!==s&&(u=v),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function _d(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hd(e))return"Blackberry";if(Wd(e))return"Webos";if(qd(e))return"Safari";if((e.includes("chrome/")||zd(e))&&!e.includes("edge/"))return"Chrome";if($d(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function jd(n=Ve()){return/firefox\//i.test(n)}function qd(n=Ve()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zd(n=Ve()){return/crios\//i.test(n)}function Gd(n=Ve()){return/iemobile/i.test(n)}function $d(n=Ve()){return/android/i.test(n)}function Hd(n=Ve()){return/blackberry/i.test(n)}function Wd(n=Ve()){return/webos/i.test(n)}function wc(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Q_(n=Ve()){var e;return wc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J_(){return Kh()&&document.documentMode===10}function Kd(n=Ve()){return wc(n)||$d(n)||Wd(n)||Hd(n)||/windows phone/i.test(n)||Gd(n)}function Qd(n,e=[]){let t;switch(n){case"Browser":t=_d(Ve());break;case"Worker":t=`${_d(Ve())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tn}/${r}`}var nc=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,u)=>{try{let l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Y_(n,e={}){return Ge(n,"GET","/v2/passwordPolicy",Ne(n,e))}var X_=6,rc=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:X_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var ic=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ls(this),this.idTokenSubscription=new Ls(this),this.beforeStateQueue=new nc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Ns(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(We(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Os(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(vt(this));let t=e?ye(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Y_(this),t=new rc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await K_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Lt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&L_(`Error while retrieving App Check token: ${t.error}`),t?.token}};function It(n){return ye(n)}var Ls=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xh(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Z_(n){eo=n}function Jd(n){return eo.loadJS(n)}function ey(){return eo.recaptchaEnterpriseScript}function ty(){return eo.gapiScript}function Yd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var sc=class{constructor(){this.enterprise=new oc}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},oc=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var ny="recaptcha-enterprise",hi="NO_RECAPTCHA",Ms=class{constructor(e){this.type=ny,this.auth=It(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{Md(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new Ds(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){let l=window.grecaptcha;pd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(hi)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sc().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&pd(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ey();l.length!==0&&(l+=u),Jd(l).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function ai(n,e,t,r=!1,i=!1){let s=new Ms(n),a;if(i)a=hi;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){let l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){let l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function lr(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let u=await ai(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await ai(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(u)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let u=await ai(n,e,t);return r(n,u).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let p=await ai(n,e,t,!1,!0);return r(n,p)}return Promise.reject(l)})}else{let u=await ai(n,e,t,!1,!0);return r(n,u)}else return Promise.reject(i+" provider is not supported.")}async function ry(n){let e=It(n),t=await Md(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ds(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Ms(e).verify()}function Xd(n,e){let t=oi(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(mt(s,e??{}))return i;ht(i,"already-initialized")}return t.initialize({options:e})}function iy(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Lt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Zd(n,e,t){let r=It(n);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=ef(e),{host:a,port:u}=sy(e),l=u===null?"":`:${u}`,d={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(mt(d,r.config.emulator)&&mt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Yt(a)?(gs(`${s}//${a}${l}`),_s("Auth",!0)):i||oy()}function ef(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sy(n){let e=ef(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:yd(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:yd(a)}}}function yd(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function oy(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var kn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,t){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}};async function ay(n,e){return Ge(n,"POST","/v1/accounts:signUp",e)}async function cy(n,e){return on(n,"POST","/v1/accounts:signInWithPassword",Ne(n,e))}async function uy(n,e){return on(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}async function ly(n,e){return on(n,"POST","/v1/accounts:signInWithEmailLink",Ne(n,e))}var pi=class n extends kn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lr(e,t,"signInWithPassword",cy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return uy(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lr(e,r,"signUpPassword",ay,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ly(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function hr(n,e){return on(n,"POST","/v1/accounts:signInWithIdp",Ne(n,e))}var hy="http://localhost",Dn=class n extends kn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Es(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,hr(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){let e={requestUri:hy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ar(t)}return e}};async function vd(n,e){return Ge(n,"POST","/v1/accounts:sendVerificationCode",Ne(n,e))}async function dy(n,e){return on(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e))}async function fy(n,e){let t=await on(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,e));if(t.temporaryProof)throw ci(n,"account-exists-with-different-credential",t);return t}var py={USER_NOT_FOUND:"user-not-found"};async function my(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return on(n,"POST","/v1/accounts:signInWithPhoneNumber",Ne(n,t),py)}var mi=class n extends kn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return dy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return fy(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return my(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function gy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _y(n){let e=cr(ur(n)).link,t=e?cr(ur(e)).deep_link_id:null,r=cr(ur(n)).deep_link_id;return(r?cr(ur(r)).link:null)||r||t||e||n}var Fs=class n{constructor(e){var t,r,i,s,a,u;let l=cr(ur(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,v=gy((i=l.mode)!==null&&i!==void 0?i:null);$(d&&p&&v,"argument-error"),this.apiKey=d,this.operation=v,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=_y(e);try{return new n(t)}catch{return null}}};var Nn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return pi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Fs.parseLink(t);return $(r,"argument-error"),pi._fromEmailAndCode(e,r.code,r.tenantId)}};Nn.PROVIDER_ID="password";Nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Us=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var On=class extends Us{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var gi=class n extends On{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";var _i=class n extends On{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};_i.GOOGLE_SIGN_IN_METHOD="google.com";_i.PROVIDER_ID="google.com";var yi=class n extends On{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};yi.GITHUB_SIGN_IN_METHOD="github.com";yi.PROVIDER_ID="github.com";var vi=class n extends On{constructor(){super("twitter.com")}static credential(e,t){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};vi.TWITTER_SIGN_IN_METHOD="twitter.com";vi.PROVIDER_ID="twitter.com";async function tf(n,e){return on(n,"POST","/v1/accounts:signUp",Ne(n,e))}var sn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await rn._fromIdTokenResponse(e,r,i),a=wd(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=wd(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function wd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function Ic(n){var e;if(We(n.app))return Promise.reject(vt(n));let t=It(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new sn({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await tf(t,{returnSecureToken:!0}),i=await sn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var ac=class n extends Ze{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function nf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(n,s,e,r):s})}async function yy(n,e,t=!1){let r=await di(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sn._forOperation(n,"link",r)}async function vy(n,e,t=!1){let{auth:r}=n;if(We(r.app))return Promise.reject(vt(r));let i="reauthenticate";try{let s=await di(n,nf(r,i,e,n),t);$(s.idToken,r,"internal-error");let a=vc(s.idToken);$(a,r,"internal-error");let{sub:u}=a;return $(n.uid===u,r,"user-mismatch"),sn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}async function rf(n,e,t=!1){if(We(n.app))return Promise.reject(vt(n));let r="signIn",i=await nf(n,r,e),s=await sn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function sf(n,e){return rf(It(n),e)}async function of(n){let e=It(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ec(n,e,t){if(We(n.app))return Promise.reject(vt(n));let r=It(n),a=await lr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tf,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&of(n),l}),u=await sn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function Tc(n,e,t){return We(n.app)?Promise.reject(vt(n)):sf(ye(n),Nn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&of(n),r})}function af(n,e,t,r){return ye(n).onIdTokenChanged(e,t,r)}function cf(n,e,t){return ye(n).beforeAuthStateChanged(e,t)}function bc(n,e,t,r){return ye(n).onAuthStateChanged(e,t,r)}function Ac(n){return ye(n).signOut()}function Id(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function wy(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}function Iy(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",Ne(n,e))}function Ey(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(n,e))}var Bs="__sak";var js=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Ty=1e3,by=10,qs=class extends js{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);J_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,by):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ty)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};qs.type="LOCAL";var uf=qs;var Ay=1e3;function Ka(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function Qa(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var cc=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Qa(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return Ka(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=Qa(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=Qa(e);if(window.cookieStore){let u=d=>{let p=d.changed.find(E=>E.name===r);p&&t(p.value),d.deleted.find(E=>E.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",u);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",u)}let i=Ka(r),s=setInterval(()=>{let u=Ka(r);u!==i&&(t(u),i=u)},Ay),a=()=>clearInterval(s);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};cc.type="COOKIE";var zs=class extends js{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};zs.type="SESSION";var Sc=zs;function Sy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Gs=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,s)),l=await Sy(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Gs.receivers=[];function Rc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var uc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{let d=Rc("",20);i.port1.start();let p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){let E=v;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(E.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function wt(){return window}function Ry(n){wt().location.href=n}function lf(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Py(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ky(){return lf()?self:null}var hf="firebaseLocalStorageDb",Dy=1,$s="firebaseLocalStorage",df="fbase_key",xn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function to(n,e){return n.transaction([$s],e?"readwrite":"readonly").objectStore($s)}function Ny(){let n=indexedDB.deleteDatabase(hf);return new xn(n).toPromise()}function lc(){let n=indexedDB.open(hf,Dy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore($s,{keyPath:df})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains($s)?e(r):(r.close(),await Ny(),e(await lc()))})})}async function Ed(n,e,t){let r=to(n,!0).put({[df]:e,value:t});return new xn(r).toPromise()}async function Oy(n,e){let t=to(n,!1).get(e),r=await new xn(t).toPromise();return r===void 0?null:r.value}function Td(n,e){let t=to(n,!0).delete(e);return new xn(t).toPromise()}var xy=800,Vy=3,Hs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lc(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Vy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(ky()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Py(),!this.activeServiceWorker)return;this.sender=new uc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await lc();return await Ed(e,Bs,"1"),await Td(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ed(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Oy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Td(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=to(i,!1).getAll();return new xn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Hs.type="LOCAL";var ff=Hs;function bd(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:start",Ne(n,e))}function Ly(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}function My(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",Ne(n,e))}var fE=Yd("rcb"),pE=new Cn(3e4,6e4);var Ss="recaptcha";async function Fy(n,e,t){var r;if(!n._getRecaptchaConfig())try{await ry(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){$(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await lr(n,a,"mfaSmsEnrollment",async(p,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===hi){$(t?.type===Ss,p,"argument-error");let E=await Ja(p,v,t);return Id(p,E)}return Id(p,v)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneSessionInfo.sessionInfo}else{$(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;$(a,n,"missing-multi-factor-info");let u={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await lr(n,u,"mfaSmsSignIn",async(v,E)=>{if(E.phoneSignInInfo.captchaResponse===hi){$(t?.type===Ss,v,"argument-error");let k=await Ja(v,E,t);return bd(v,k)}return bd(v,E)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await lr(n,s,"sendVerificationCode",async(d,p)=>{if(p.captchaResponse===hi){$(t?.type===Ss,d,"argument-error");let v=await Ja(d,p,t);return vd(d,v)}return vd(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function Ja(n,e,t){$(t.type===Ss,n,"argument-error");let r=await t.verify();$(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,u=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:u,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,u=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:u}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var wi=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=It(e)}verifyPhoneNumber(e,t){return Fy(this.auth,e,ye(t))}static credential(e,t){return mi._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?mi._fromTokenResponse(t,r):null}};wi.PROVIDER_ID="phone";wi.PHONE_SIGN_IN_METHOD="phone";function Uy(n,e){return e?Lt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var Ii=class extends kn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function By(n){return rf(n.auth,new Ii(n),n.bypassAuthState)}function jy(n){let{auth:e,user:t}=n;return $(t,e,"internal-error"),vy(t,new Ii(n),n.bypassAuthState)}async function qy(n){let{auth:e,user:t}=n;return $(t,e,"internal-error"),yy(t,new Ii(n),n.bypassAuthState)}var Ws=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return By;case"linkViaPopup":case"linkViaRedirect":return qy;case"reauthViaPopup":case"reauthViaRedirect":return jy;default:ht(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var zy=new Cn(2e3,1e4);var hc=class n extends Ws{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");let e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zy.get())};e()}};hc.currentPopupAction=null;var Gy="pendingRedirect",Rs=new Map,dc=class extends Ws{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Rs.get(this.auth._key());if(!e){try{let r=await $y(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Rs.set(this.auth._key(),e)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function $y(n,e){let t=Ky(e),r=Wy(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function Hy(n,e){Rs.set(n._key(),e)}function Wy(n){return Lt(n._redirectPersistence)}function Ky(n){return As(Gy,n.config.apiKey,n.name)}async function Qy(n,e,t=!1){if(We(n.app))return Promise.reject(vt(n));let r=It(n),i=Uy(r,e),a=await new dc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var Jy=10*60*1e3,fc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!pf(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(yt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ad(e))}saveEventToCache(e){this.cachedEventUids.add(Ad(e)),this.lastProcessedEventTime=Date.now()}};function Ad(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function pf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Yy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pf(n);default:return!1}}async function Xy(n,e={}){return Ge(n,"GET","/v1/projects",e)}var Zy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ev=/^https?/;async function tv(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Xy(n);for(let t of e)try{if(nv(t))return}catch{}ht(n,"unauthorized-domain")}function nv(n){let e=Xa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ev.test(t))return!1;if(Zy.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var rv=new Cn(3e4,6e4);function Sd(){let n=wt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iv(n){return new Promise((e,t)=>{var r,i,s;function a(){Sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sd(),t(yt(n,"network-request-failed"))},timeout:rv.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)a();else{let u=Yd("iframefcb");return wt()[u]=()=>{gapi.load?a():t(yt(n,"network-request-failed"))},Jd(`${ty()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Ps=null,e})}var Ps=null;function sv(n){return Ps=Ps||iv(n),Ps}var ov=new Cn(5e3,15e3),av="__/auth/iframe",cv="emulator/auth/iframe",uv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hv(n){let e=n.config;$(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?yc(e,cv):`https://${n.config.authDomain}/${av}`,r={apiKey:e.apiKey,appName:n.name,v:tn},i=lv.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ar(r).slice(1)}`}async function dv(n){let e=await sv(n),t=wt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:hv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=yt(n,"network-request-failed"),u=wt().setTimeout(()=>{s(a)},ov.get());function l(){wt().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var fv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pv=500,mv=600,gv="_blank",_v="http://localhost",Ks=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function yv(n,e,t,r=pv,i=mv){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",l=Object.assign(Object.assign({},fv),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ve().toLowerCase();t&&(u=zd(d)?gv:t),jd(d)&&(e=e||_v,l.scrollbars="yes");let p=Object.entries(l).reduce((E,[k,L])=>`${E}${k}=${L},`,"");if(Q_(d)&&u!=="_self")return vv(e||"",u),new Ks(null);let v=window.open(e||"",u,p);$(v,n,"popup-blocked");try{v.focus()}catch{}return new Ks(v)}function vv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var wv="__/auth/handler",Iv="emulator/auth/handler",Ev=encodeURIComponent("fac");async function Rd(n,e,t,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:tn,eventId:i};if(e instanceof Us){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,v]of Object.entries(s||{}))a[p]=v}if(e instanceof On){let p=e.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let l=await n._getAppCheckToken(),d=l?`#${Ev}=${encodeURIComponent(l)}`:"";return`${Tv(n)}?${ar(u).slice(1)}${d}`}function Tv({config:n}){return n.emulator?yc(n,Iv):`https://${n.authDomain}/${wv}`}var Ya="webStorageSupport",pc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sc,this._completeRedirectFn=Qy,this._overrideRedirectResult=Hy}async _openPopup(e,t,r,i){var s;Mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await Rd(e,t,r,Xa(),i);return yv(e,a,Rc())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await Rd(e,t,r,Xa(),i);return Ry(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await dv(e),r=new fc(e);return t.register("authEvent",i=>($(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ya,{type:Ya},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[Ya];a!==void 0&&t(!!a),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kd()||qd()||wc()}},mf=pc,Qs=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return _t("unexpected MultiFactorSessionType")}}},mc=class n extends Qs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return wy(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ly(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Js=class{constructor(){}static assertion(e){return mc._fromCredential(e)}};Js.FACTOR_ID="phone";var Ys=class{static assertionForEnrollment(e,t){return Xs._fromSecret(e,t)}static assertionForSignIn(e,t){return Xs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;$(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await Iy(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Zs._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Ys.FACTOR_ID="totp";var Xs=class n extends Qs{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return $(typeof this.secret<"u",e,"argument-error"),Ey(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){$(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return My(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Zs=class n{constructor(e,t,r,i,s,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Ts(e)||Ts(t))&&(i=!0),i&&(Ts(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ts(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ts(n){return typeof n>"u"||n?.length===0}var Pd="@firebase/auth",Cd="1.10.8";var gc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function bv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Av(n){en(new st("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qd(n)},d=new ic(r,i,s,l);return iy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),en(new st("auth-internal",e=>{let t=It(e.getProvider("auth").getImmediate());return(r=>new gc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Pd,Cd,bv(n)),lt(Pd,Cd,"esm2017")}var Sv=5*60,Rv=ka("authIdTokenMaxAge")||Sv,kd=null,Pv=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Rv)return;let i=t?.token;kd!==i&&(kd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pc(n=Is()){let e=oi(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Xd(n,{popupRedirectResolver:mf,persistence:[ff,uf,Sc]}),r=ka("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=Pv(s.toString());cf(t,a,()=>a(t.currentUser)),af(t,u=>a(u))}}let i=Pa("auth");return i&&Zd(t,`http://${i}`),t}function Cv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Z_({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=yt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Cv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Av("Browser");var gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_f={};var Ft,Cc;(function(){var n;function e(T,g){function w(){}w.prototype=g.prototype,T.D=g.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(b,A,P){for(var y=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)y[ct-2]=arguments[ct];return g.prototype[A].apply(b,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,w){w||(w=0);var b=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)b[A]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(A=0;16>A;++A)b[A]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=T.g[0],w=T.g[1],A=T.g[2];var P=T.g[3],y=g+(P^w&(A^P))+b[0]+3614090360&4294967295;g=w+(y<<7&4294967295|y>>>25),y=P+(A^g&(w^A))+b[1]+3905402710&4294967295,P=g+(y<<12&4294967295|y>>>20),y=A+(w^P&(g^w))+b[2]+606105819&4294967295,A=P+(y<<17&4294967295|y>>>15),y=w+(g^A&(P^g))+b[3]+3250441966&4294967295,w=A+(y<<22&4294967295|y>>>10),y=g+(P^w&(A^P))+b[4]+4118548399&4294967295,g=w+(y<<7&4294967295|y>>>25),y=P+(A^g&(w^A))+b[5]+1200080426&4294967295,P=g+(y<<12&4294967295|y>>>20),y=A+(w^P&(g^w))+b[6]+2821735955&4294967295,A=P+(y<<17&4294967295|y>>>15),y=w+(g^A&(P^g))+b[7]+4249261313&4294967295,w=A+(y<<22&4294967295|y>>>10),y=g+(P^w&(A^P))+b[8]+1770035416&4294967295,g=w+(y<<7&4294967295|y>>>25),y=P+(A^g&(w^A))+b[9]+2336552879&4294967295,P=g+(y<<12&4294967295|y>>>20),y=A+(w^P&(g^w))+b[10]+4294925233&4294967295,A=P+(y<<17&4294967295|y>>>15),y=w+(g^A&(P^g))+b[11]+2304563134&4294967295,w=A+(y<<22&4294967295|y>>>10),y=g+(P^w&(A^P))+b[12]+1804603682&4294967295,g=w+(y<<7&4294967295|y>>>25),y=P+(A^g&(w^A))+b[13]+4254626195&4294967295,P=g+(y<<12&4294967295|y>>>20),y=A+(w^P&(g^w))+b[14]+2792965006&4294967295,A=P+(y<<17&4294967295|y>>>15),y=w+(g^A&(P^g))+b[15]+1236535329&4294967295,w=A+(y<<22&4294967295|y>>>10),y=g+(A^P&(w^A))+b[1]+4129170786&4294967295,g=w+(y<<5&4294967295|y>>>27),y=P+(w^A&(g^w))+b[6]+3225465664&4294967295,P=g+(y<<9&4294967295|y>>>23),y=A+(g^w&(P^g))+b[11]+643717713&4294967295,A=P+(y<<14&4294967295|y>>>18),y=w+(P^g&(A^P))+b[0]+3921069994&4294967295,w=A+(y<<20&4294967295|y>>>12),y=g+(A^P&(w^A))+b[5]+3593408605&4294967295,g=w+(y<<5&4294967295|y>>>27),y=P+(w^A&(g^w))+b[10]+38016083&4294967295,P=g+(y<<9&4294967295|y>>>23),y=A+(g^w&(P^g))+b[15]+3634488961&4294967295,A=P+(y<<14&4294967295|y>>>18),y=w+(P^g&(A^P))+b[4]+3889429448&4294967295,w=A+(y<<20&4294967295|y>>>12),y=g+(A^P&(w^A))+b[9]+568446438&4294967295,g=w+(y<<5&4294967295|y>>>27),y=P+(w^A&(g^w))+b[14]+3275163606&4294967295,P=g+(y<<9&4294967295|y>>>23),y=A+(g^w&(P^g))+b[3]+4107603335&4294967295,A=P+(y<<14&4294967295|y>>>18),y=w+(P^g&(A^P))+b[8]+1163531501&4294967295,w=A+(y<<20&4294967295|y>>>12),y=g+(A^P&(w^A))+b[13]+2850285829&4294967295,g=w+(y<<5&4294967295|y>>>27),y=P+(w^A&(g^w))+b[2]+4243563512&4294967295,P=g+(y<<9&4294967295|y>>>23),y=A+(g^w&(P^g))+b[7]+1735328473&4294967295,A=P+(y<<14&4294967295|y>>>18),y=w+(P^g&(A^P))+b[12]+2368359562&4294967295,w=A+(y<<20&4294967295|y>>>12),y=g+(w^A^P)+b[5]+4294588738&4294967295,g=w+(y<<4&4294967295|y>>>28),y=P+(g^w^A)+b[8]+2272392833&4294967295,P=g+(y<<11&4294967295|y>>>21),y=A+(P^g^w)+b[11]+1839030562&4294967295,A=P+(y<<16&4294967295|y>>>16),y=w+(A^P^g)+b[14]+4259657740&4294967295,w=A+(y<<23&4294967295|y>>>9),y=g+(w^A^P)+b[1]+2763975236&4294967295,g=w+(y<<4&4294967295|y>>>28),y=P+(g^w^A)+b[4]+1272893353&4294967295,P=g+(y<<11&4294967295|y>>>21),y=A+(P^g^w)+b[7]+4139469664&4294967295,A=P+(y<<16&4294967295|y>>>16),y=w+(A^P^g)+b[10]+3200236656&4294967295,w=A+(y<<23&4294967295|y>>>9),y=g+(w^A^P)+b[13]+681279174&4294967295,g=w+(y<<4&4294967295|y>>>28),y=P+(g^w^A)+b[0]+3936430074&4294967295,P=g+(y<<11&4294967295|y>>>21),y=A+(P^g^w)+b[3]+3572445317&4294967295,A=P+(y<<16&4294967295|y>>>16),y=w+(A^P^g)+b[6]+76029189&4294967295,w=A+(y<<23&4294967295|y>>>9),y=g+(w^A^P)+b[9]+3654602809&4294967295,g=w+(y<<4&4294967295|y>>>28),y=P+(g^w^A)+b[12]+3873151461&4294967295,P=g+(y<<11&4294967295|y>>>21),y=A+(P^g^w)+b[15]+530742520&4294967295,A=P+(y<<16&4294967295|y>>>16),y=w+(A^P^g)+b[2]+3299628645&4294967295,w=A+(y<<23&4294967295|y>>>9),y=g+(A^(w|~P))+b[0]+4096336452&4294967295,g=w+(y<<6&4294967295|y>>>26),y=P+(w^(g|~A))+b[7]+1126891415&4294967295,P=g+(y<<10&4294967295|y>>>22),y=A+(g^(P|~w))+b[14]+2878612391&4294967295,A=P+(y<<15&4294967295|y>>>17),y=w+(P^(A|~g))+b[5]+4237533241&4294967295,w=A+(y<<21&4294967295|y>>>11),y=g+(A^(w|~P))+b[12]+1700485571&4294967295,g=w+(y<<6&4294967295|y>>>26),y=P+(w^(g|~A))+b[3]+2399980690&4294967295,P=g+(y<<10&4294967295|y>>>22),y=A+(g^(P|~w))+b[10]+4293915773&4294967295,A=P+(y<<15&4294967295|y>>>17),y=w+(P^(A|~g))+b[1]+2240044497&4294967295,w=A+(y<<21&4294967295|y>>>11),y=g+(A^(w|~P))+b[8]+1873313359&4294967295,g=w+(y<<6&4294967295|y>>>26),y=P+(w^(g|~A))+b[15]+4264355552&4294967295,P=g+(y<<10&4294967295|y>>>22),y=A+(g^(P|~w))+b[6]+2734768916&4294967295,A=P+(y<<15&4294967295|y>>>17),y=w+(P^(A|~g))+b[13]+1309151649&4294967295,w=A+(y<<21&4294967295|y>>>11),y=g+(A^(w|~P))+b[4]+4149444226&4294967295,g=w+(y<<6&4294967295|y>>>26),y=P+(w^(g|~A))+b[11]+3174756917&4294967295,P=g+(y<<10&4294967295|y>>>22),y=A+(g^(P|~w))+b[2]+718787259&4294967295,A=P+(y<<15&4294967295|y>>>17),y=w+(P^(A|~g))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var w=g-this.blockSize,b=this.B,A=this.h,P=0;P<g;){if(A==0)for(;P<=w;)i(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<g;)if(b[A++]=T.charCodeAt(P++),A==this.blockSize){i(this,b),A=0;break}}else for(;P<g;)if(b[A++]=T[P++],A==this.blockSize){i(this,b),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var w=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=w&255,w/=256;for(this.u(T),T=Array(16),g=w=0;4>g;++g)for(var b=0;32>b;b+=8)T[w++]=this.g[g]>>>b&255;return T};function s(T,g){var w=u;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=g(T)}function a(T,g){this.h=g;for(var w=[],b=!0,A=T.length-1;0<=A;A--){var P=T[A]|0;b&&P==g||(w[A]=P,b=!1)}this.g=w}var u={};function l(T){return-128<=T&&128>T?s(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return M(d(-T));for(var g=[],w=1,b=0;T>=w;b++)g[b]=T/w|0,w*=4294967296;return new a(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return M(p(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(g,8)),b=v,A=0;A<T.length;A+=8){var P=Math.min(8,T.length-A),y=parseInt(T.substring(A,A+P),g);8>P?(P=d(Math.pow(g,P)),b=b.j(P).add(d(y))):(b=b.j(w),b=b.add(d(y)))}return b}var v=l(0),E=l(1),k=l(16777216);n=a.prototype,n.m=function(){if(j(this))return-M(this).m();for(var T=0,g=1,w=0;w<this.g.length;w++){var b=this.i(w);T+=(0<=b?b:4294967296+b)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(L(this))return"0";if(j(this))return"-"+M(this).toString(T);for(var g=d(Math.pow(T,6)),w=this,b="";;){var A=ae(w,g).g;w=ee(w,A.j(g));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=A,L(w))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function L(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function j(T){return T.h==-1}n.l=function(T){return T=ee(this,T),j(T)?-1:L(T)?0:1};function M(T){for(var g=T.g.length,w=[],b=0;b<g;b++)w[b]=~T.g[b];return new a(w,~T.h).add(E)}n.abs=function(){return j(this)?M(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0,A=0;A<=g;A++){var P=b+(this.i(A)&65535)+(T.i(A)&65535),y=(P>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);b=y>>>16,P&=65535,y&=65535,w[A]=y<<16|P}return new a(w,w[w.length-1]&-2147483648?-1:0)};function ee(T,g){return T.add(M(g))}n.j=function(T){if(L(this)||L(T))return v;if(j(this))return j(T)?M(this).j(M(T)):M(M(this).j(T));if(j(T))return M(this.j(M(T)));if(0>this.l(k)&&0>T.l(k))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,w=[],b=0;b<2*g;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<T.g.length;A++){var P=this.i(b)>>>16,y=this.i(b)&65535,ct=T.i(A)>>>16,gn=T.i(A)&65535;w[2*b+2*A]+=y*gn,Q(w,2*b+2*A),w[2*b+2*A+1]+=P*gn,Q(w,2*b+2*A+1),w[2*b+2*A+1]+=y*ct,Q(w,2*b+2*A+1),w[2*b+2*A+2]+=P*ct,Q(w,2*b+2*A+2)}for(b=0;b<g;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=g;b<2*g;b++)w[b]=0;return new a(w,0)};function Q(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function J(T,g){this.g=T,this.h=g}function ae(T,g){if(L(g))throw Error("division by zero");if(L(T))return new J(v,v);if(j(T))return g=ae(M(T),g),new J(M(g.g),M(g.h));if(j(g))return g=ae(T,M(g)),new J(M(g.g),g.h);if(30<T.g.length){if(j(T)||j(g))throw Error("slowDivide_ only works with positive integers.");for(var w=E,b=g;0>=b.l(T);)w=be(w),b=be(b);var A=ie(w,1),P=ie(b,1);for(b=ie(b,2),w=ie(w,2);!L(b);){var y=P.add(b);0>=y.l(T)&&(A=A.add(w),P=y),b=ie(b,1),w=ie(w,1)}return g=ee(T,A.j(g)),new J(A,g)}for(A=v;0<=T.l(g);){for(w=Math.max(1,Math.floor(T.m()/g.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=d(w),y=P.j(g);j(y)||0<y.l(T);)w-=b,P=d(w),y=P.j(g);L(P)&&(P=E),A=A.add(P),T=ee(T,y)}return new J(A,T)}n.A=function(T){return ae(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0;b<g;b++)w[b]=this.i(b)&T.i(b);return new a(w,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0;b<g;b++)w[b]=this.i(b)|T.i(b);return new a(w,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0;b<g;b++)w[b]=this.i(b)^T.i(b);return new a(w,this.h^T.h)};function be(T){for(var g=T.g.length+1,w=[],b=0;b<g;b++)w[b]=T.i(b)<<1|T.i(b-1)>>>31;return new a(w,T.h)}function ie(T,g){var w=g>>5;g%=32;for(var b=T.g.length-w,A=[],P=0;P<b;P++)A[P]=0<g?T.i(P+w)>>>g|T.i(P+w+1)<<32-g:T.i(P+w);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Cc=_f.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ft=_f.Integer=a}).apply(typeof gf<"u"?gf:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ut={};var kc,kv,dr,Dc,Ei,ro,Nc,Oc,xc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var S=o[f];if(!(S in h))break e;h=h[S]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,S={next:function(){if(!f&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function v(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,f),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function E(o,c,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,E.apply(null,arguments)}function k(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function L(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,S,C){for(var B=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)B[fe-2]=arguments[fe];return c.prototype[S].apply(f,B)}}function j(o){let c=o.length;if(0<c){let h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function M(o,c){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(l(f)){let S=o.length||0,C=f.length||0;o.length=S+C;for(let B=0;B<C;B++)o[S+B]=f[B]}else o.push(f)}}class ee{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function Q(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function ae(o){return ae[" "](o),o}ae[" "]=function(){};var be=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function ie(o,c,h){for(let f in o)c.call(h,o[f],f,o)}function T(o,c){for(let h in o)c.call(void 0,o[h],h,o)}function g(o){let c={};for(let h in o)c[h]=o[h];return c}let w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,c){let h,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(h in f)o[h]=f[h];for(let C=0;C<w.length;C++)h=w[C],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function A(o){var c=1;o=o.split(":");let h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function P(o){u.setTimeout(()=>{throw o},0)}function y(){var o=qr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ct{constructor(){this.h=this.g=null}add(c,h){let f=gn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var gn=new ee(()=>new Hi,o=>o.reset());class Hi{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,$t=!1,qr=new ct,_n=()=>{let o=u.Promise.resolve(void 0);pt=()=>{o.then(ca)}};var ca=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){P(h)}var c=gn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}$t=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var ua=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function Ht(o,c){if(we.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(be){e:{try{ae(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Wi[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ht.aa.h.call(this)}}L(Ht,we);var Wi={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),la=0;function ha(o,c,h,f,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=S,this.key=++la,this.da=this.fa=!1}function vn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function wn(o){this.src=o,this.g={},this.h=0}wn.prototype.add=function(o,c,h,f,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=Yn(o,c,f,S);return-1<B?(c=o[B],h||(c.fa=!1)):(c=new ha(c,this.src,C,!!f,S),c.fa=h,o.push(c)),c};function Jn(o,c){var h=c.type;if(h in o.g){var f=o.g[h],S=Array.prototype.indexOf.call(f,c,void 0),C;(C=0<=S)&&Array.prototype.splice.call(f,S,1),C&&(vn(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Yn(o,c,h,f){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==f)return S}return-1}var Xn="closure_lm_"+(1e6*Math.random()|0),Zn={};function zr(o,c,h,f,S){if(f&&f.once)return Be(o,c,h,f,S);if(Array.isArray(c)){for(var C=0;C<c.length;C++)zr(o,c[C],h,f,S);return null}return h=En(h),o&&o[yn]?o.K(c,h,d(f)?!!f.capture:!!f,S):Gr(o,c,h,!1,f,S)}function Gr(o,c,h,f,S,C){if(!c)throw Error("Invalid event type");var B=d(S)?!!S.capture:!!S,fe=er(o);if(fe||(o[Xn]=fe=new wn(o)),h=fe.add(c,h,f,B,C),h.proxy)return h;if(f=da(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)ua||(S=B),S===void 0&&(S=!1),o.addEventListener(c.toString(),f,S);else if(o.attachEvent)o.attachEvent(In(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function da(){function o(h){return c.call(o.src,o.listener,h)}let c=fa;return o}function Be(o,c,h,f,S){if(Array.isArray(c)){for(var C=0;C<c.length;C++)Be(o,c[C],h,f,S);return null}return h=En(h),o&&o[yn]?o.L(c,h,d(f)?!!f.capture:!!f,S):Gr(o,c,h,!0,f,S)}function Je(o,c,h,f,S){if(Array.isArray(c))for(var C=0;C<c.length;C++)Je(o,c[C],h,f,S);else f=d(f)?!!f.capture:!!f,h=En(h),o&&o[yn]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=Yn(C,h,f,S),-1<h&&(vn(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=er(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Yn(c,h,f,S)),(h=-1<o?c[o]:null)&&Ye(h))}function Ye(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[yn])Jn(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(In(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=er(c))?(Jn(h,o),h.h==0&&(h.src=null,c[Xn]=null)):vn(o)}}}function In(o){return o in Zn?Zn[o]:Zn[o]="on"+o}function fa(o,c){if(o.da)o=!0;else{c=new Ht(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ye(o),o=h.call(f,c)}return o}function er(o){return o=o[Xn],o instanceof wn?o:null}var $r="__closure_events_fn_"+(1e9*Math.random()>>>0);function En(o){return typeof o=="function"?o:(o[$r]||(o[$r]=function(c){return o.handleEvent(c)}),o[$r])}function Se(){se.call(this),this.i=new wn(this),this.M=this,this.F=null}L(Se,se),Se.prototype[yn]=!0,Se.prototype.removeEventListener=function(o,c,h,f){Je(this,o,c,h,f)};function xe(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new we(c,o);else if(c instanceof we)c.target=c.target||o;else{var S=c;c=new we(f,o),b(c,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var B=c.g=h[C];S=Wt(B,f,!0,c)&&S}if(B=c.g=o,S=Wt(B,f,!0,c)&&S,S=Wt(B,f,!1,c)&&S,h)for(C=0;C<h.length;C++)B=c.g=h[C],S=Wt(B,f,!1,c)&&S}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)vn(h[f]);delete o.g[c],o.h--}}this.F=null},Se.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Se.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Wt(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,C=0;C<c.length;++C){var B=c[C];if(B&&!B.da&&B.capture==h){var fe=B.listener,Ue=B.ha||B.src;B.fa&&Jn(o.i,B),S=fe.call(Ue,f)!==!1&&S}}return S&&!f.defaultPrevented}function Ki(o,c,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Qi(o){o.g=Ki(()=>{o.g=null,o.i&&(o.i=!1,Qi(o))},o.l);let c=o.h;o.h=null,o.m.apply(null,c)}class Ji extends se{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Qi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ct(o){se.call(this),this.h=o,this.g={}}L(Ct,se);var Yi=[];function Xi(o){ie(o.g,function(c,h){this.g.hasOwnProperty(h)&&Ye(c)},o),o.g={}}Ct.prototype.N=function(){Ct.aa.N.call(this),Xi(this)},Ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=u.JSON.stringify,pa=u.JSON.parse,Zi=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Wr(){}Wr.prototype.h=null;function es(o){return o.h||(o.h=o.i())}function ts(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function de(){we.call(this,"d")}L(de,we);function m(){we.call(this,"c")}L(m,we);var _={},I=null;function R(){return I=I||new Se}_.La="serverreachability";function O(o){we.call(this,_.La,o)}L(O,we);function N(o){let c=R();xe(c,new O(c))}_.STAT_EVENT="statevent";function q(o,c){we.call(this,_.STAT_EVENT,o),this.stat=c}L(q,we);function F(o){let c=R();xe(c,new q(c,o))}_.Ma="timingevent";function Y(o,c){we.call(this,_.Ma,o),this.size=c}L(Y,we);function ne(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Ae(){this.g=!0}Ae.prototype.xa=function(){this.g=!1};function kt(o,c,h,f,S,C){o.info(function(){if(o.g)if(C)for(var B="",fe=C.split("&"),Ue=0;Ue<fe.length;Ue++){var le=fe[Ue].split("=");if(1<le.length){var qe=le[0];le=le[1];var ze=qe.split("_");B=2<=ze.length&&ze[1]=="type"?B+(qe+"="+le+"&"):B+(qe+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+c+`
`+h+`
`+B})}function tr(o,c,h,f,S,C,B){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+c+`
`+h+`
`+C+" "+B})}function je(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+U(o,h)+(f?" "+f:"")})}function nr(o,c){o.info(function(){return"TIMEOUT: "+c})}Ae.prototype.info=function(){};function U(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var S=f[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<S.length;B++)S[B]=""}}}}return Hr(h)}catch{return c}}var pe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},De={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},it;function bn(){}L(bn,Wr),bn.prototype.g=function(){return new XMLHttpRequest},bn.prototype.i=function(){return{}},it=new bn;function Ie(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dt}function Dt(){this.i=null,this.g="",this.h=!1}var Kt={},rr={};function ma(o,c,h){o.L=1,o.v=ss(Nt(c)),o.m=h,o.P=!0,eh(o,null)}function eh(o,c){o.F=Date.now(),ns(o),o.A=Nt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),ph(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Dt,o.g=Nh(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Ji(E(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Yi[0]=S.toString()),S=Yi);for(var C=0;C<S.length;C++){var B=zr(h,S[C],f||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),N(),kt(o.i,o.u,o.A,o.l,o.R,o.m)}Ie.prototype.ca=function(o){o=o.target;let c=this.M;c&&Ot(o)==3?c.j():this.Y(o)},Ie.prototype.Y=function(o){try{if(o==this.g)e:{let ze=Ot(this.g);var c=this.g.Ba();let or=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||Ih(this.g)))){this.J||ze!=4||c==7||(c==8||0>=or?N(3):N(2)),ga(this);var h=this.g.Z();this.X=h;t:if(th(this)){var f=Ih(this.g);o="";var S=f.length,C=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),Kr(this);var B="";break t}this.h.i=new u.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(C&&c==S-1)});f.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=h==200,tr(this.i,this.u,this.A,this.l,this.R,ze,h),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,Ue=this.g;if((fe=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(fe)){var le=fe;break t}}le=null}if(h=le)je(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,h);else{this.o=!1,this.s=3,F(12),An(this),Kr(this);break e}}if(this.P){h=!0;let ut;for(;!this.J&&this.C<B.length;)if(ut=eg(this,B),ut==rr){ze==4&&(this.s=4,F(14),h=!1),je(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Kt){this.s=4,F(15),je(this.i,this.l,B,"[Invalid Chunk]"),h=!1;break}else je(this.i,this.l,ut,null),_a(this,ut);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||B.length!=0||this.h.h||(this.s=1,F(16),h=!1),this.o=this.o&&h,!h)je(this.i,this.l,B,"[Invalid Chunked Response]"),An(this),Kr(this);else if(0<B.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ta(qe),qe.M=!0,F(11))}}else je(this.i,this.l,B,null),_a(this,B);ze==4&&An(this),this.o&&!this.J&&(ze==4?Ph(this.j,this):(this.o=!1,ns(this)))}else _g(this.g),h==400&&0<B.indexOf("Unknown SID")?(this.s=3,F(12)):(this.s=0,F(13)),An(this),Kr(this)}}}catch{}finally{}};function th(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function eg(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?rr:(h=Number(c.substring(h,f)),isNaN(h)?Kt:(f+=1,f+h>c.length?rr:(c=c.slice(f,f+h),o.C=f+h,c)))}Ie.prototype.cancel=function(){this.J=!0,An(this)};function ns(o){o.S=Date.now()+o.I,nh(o,o.I)}function nh(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ne(E(o.ba,o),c)}function ga(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Ie.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(nr(this.i,this.A),this.L!=2&&(N(),F(17)),An(this),this.s=2,Kr(this)):nh(this,this.S-o)};function Kr(o){o.j.G==0||o.J||Ph(o.j,o)}function An(o){ga(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Xi(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function _a(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ya(h.h,o))){if(!o.K&&ya(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ls(h),cs(h);else break e;Ea(h),F(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=ne(E(h.Za,h),6e3));if(1>=sh(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Rn(h,11)}else if((o.K||h.g==o)&&ls(h),!Q(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let le=S[c];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];let qe=le[3];qe!=null&&(h.la=qe,h.j.info("VER="+h.la));let ze=le[4];ze!=null&&(h.Aa=ze,h.j.info("SVER="+h.Aa));let or=le[5];or!=null&&typeof or=="number"&&0<or&&(f=1.5*or,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let ut=o.g;if(ut){let ds=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var C=f.h;C.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(va(C,C.h),C.h=null))}if(f.D){let ba=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(f.ya=ba,ge(f.I,f.D,ba))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var B=o;if(f.qa=Dh(f,f.J?f.ia:null,f.W),B.K){oh(f.h,B);var fe=B,Ue=f.L;Ue&&(fe.I=Ue),fe.B&&(ga(fe),ns(fe)),f.g=B}else Sh(f);0<h.i.length&&us(h)}else le[0]!="stop"&&le[0]!="close"||Rn(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Rn(h,7):Ia(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}N(4)}catch{}}var tg=class{constructor(o,c){this.g=o,this.map=c}};function rh(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ih(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function sh(o){return o.h?1:o.g?o.g.size:0}function ya(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function va(o,c){o.g?o.g.add(c):o.h=c}function oh(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}rh.prototype.cancel=function(){if(this.i=ah(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function ah(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(let h of o.g.values())c=c.concat(h.D);return c}return j(o.i)}function ng(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function rg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(let f in o)c[h++]=f;return c}}}function ch(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=rg(o),f=ng(o),S=f.length,C=0;C<S;C++)c.call(void 0,f[C],h&&h[C],o)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ig(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),S=null;if(0<=f){var C=o[h].substring(0,f);S=o[h].substring(f+1)}else C=o[h];c(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Sn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Sn){this.h=o.h,rs(this,o.j),this.o=o.o,this.g=o.g,is(this,o.s),this.l=o.l;var c=o.i,h=new Yr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),lh(this,h),this.m=o.m}else o&&(c=String(o).match(uh))?(this.h=!1,rs(this,c[1]||"",!0),this.o=Qr(c[2]||""),this.g=Qr(c[3]||"",!0),is(this,c[4]),this.l=Qr(c[5]||"",!0),lh(this,c[6]||"",!0),this.m=Qr(c[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}Sn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Jr(c,hh,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Jr(c,hh,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Jr(h,h.charAt(0)=="/"?ag:og,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Jr(h,ug)),o.join("")};function Nt(o){return new Sn(o)}function rs(o,c,h){o.j=h?Qr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function lh(o,c,h){c instanceof Yr?(o.i=c,lg(o.i,o.h)):(h||(c=Jr(c,cg)),o.i=new Yr(c,o.h))}function ge(o,c,h){o.i.set(c,h)}function ss(o){return ge(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Qr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Jr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,sg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function sg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var hh=/[#\/\?@]/g,og=/[#\?:]/g,ag=/[#\?]/g,cg=/[#\?@]/g,ug=/#/g;function Yr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Qt(o){o.g||(o.g=new Map,o.h=0,o.i&&ig(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Yr.prototype,n.add=function(o,c){Qt(this),this.i=null,o=ir(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function dh(o,c){Qt(o),c=ir(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function fh(o,c){return Qt(o),c=ir(o,c),o.g.has(c)}n.forEach=function(o,c){Qt(this),this.g.forEach(function(h,f){h.forEach(function(S){o.call(c,S,f,this)},this)},this)},n.na=function(){Qt(this);let o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){let S=o[f];for(let C=0;C<S.length;C++)h.push(c[f])}return h},n.V=function(o){Qt(this);let c=[];if(typeof o=="string")fh(this,o)&&(c=c.concat(this.g.get(ir(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Qt(this),this.i=null,o=ir(this,o),fh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ph(o,c,h){dh(o,c),0<h.length&&(o.i=null,o.g.set(ir(o,c),j(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];let C=encodeURIComponent(String(f)),B=this.V(f);for(f=0;f<B.length;f++){var S=C;B[f]!==""&&(S+="="+encodeURIComponent(String(B[f]))),o.push(S)}}return this.i=o.join("&")};function ir(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function lg(o,c){c&&!o.j&&(Qt(o),o.i=null,o.g.forEach(function(h,f){var S=f.toLowerCase();f!=S&&(dh(this,f),ph(this,S,h))},o)),o.j=c}function hg(o,c){let h=new Ae;if(u.Image){let f=new Image;f.onload=k(Jt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=k(Jt,h,"TestLoadImage: error",!1,c,f),f.onabort=k(Jt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=k(Jt,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function dg(o,c){let h=new Ae,f=new AbortController,S=setTimeout(()=>{f.abort(),Jt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(C=>{clearTimeout(S),C.ok?Jt(h,"TestPingServer: ok",!0,c):Jt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),Jt(h,"TestPingServer: error",!1,c)})}function Jt(o,c,h,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(h)}catch{}}function fg(){this.g=new Zi}function pg(o,c,h){let f=h||"";try{ch(o,function(S,C){let B=S;d(S)&&(B=Hr(S)),c.push(f+C+"="+encodeURIComponent(B))})}catch(S){throw c.push(f+"type="+encodeURIComponent("_badmap")),S}}function Xr(o){this.l=o.Ub||null,this.j=o.eb||!1}L(Xr,Wr),Xr.prototype.g=function(){return new os(this.l,this.j)},Xr.prototype.i=function(o){return function(){return o}}({});function os(o,c){Se.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(os,Se),n=os.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ei(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function mh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Zr(this):ei(this),this.readyState==3&&mh(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Zr(this))},n.Qa=function(o){this.g&&(this.response=o,Zr(this))},n.ga=function(){this.g&&Zr(this)};function Zr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ei(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function ei(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function gh(o){let c="";return ie(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function wa(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=gh(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ge(o,c,h))}function Ee(o){Se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Ee,Se);var mg=/^https?$/i,gg=["POST","PUT"];n=Ee.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():it.g(),this.v=this.o?es(this.o):es(it),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){_h(this,C);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)h.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let C of f.keys())h.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(gg,c,void 0))||f||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[C,B]of h)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wh(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){_h(this,C)}};function _h(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,yh(o),as(o)}function yh(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xe(this,"complete"),xe(this,"abort"),as(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),as(this,!0)),Ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vh(this):this.bb())},n.bb=function(){vh(this)};function vh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ot(o)!=4||o.Z()!=2)){if(o.u&&Ot(o)==4)Ki(o.Ea,0,o);else if(xe(o,"readystatechange"),Ot(o)==4){o.h=!1;try{let B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=B===0){var S=String(o.D).match(uh)[1]||null;!S&&u.self&&u.self.location&&(S=u.self.location.protocol.slice(0,-1)),f=!mg.test(S?S.toLowerCase():"")}h=f}if(h)xe(o,"complete"),xe(o,"success");else{o.m=6;try{var C=2<Ot(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",yh(o)}}finally{as(o)}}}}function as(o,c){if(o.g){wh(o);let h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||xe(o,"ready");try{h.onreadystatechange=f}catch{}}}function wh(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ot(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),pa(c)}};function Ih(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function _g(o){let c={};o=(o.g&&2<=Ot(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(Q(o[f]))continue;var h=A(o[f]);let S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let C=c[S]||[];c[S]=C,C.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Eh(o){this.Aa=0,this.i=[],this.j=new Ae,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,o),this.cb=ti("retryDelaySeedMs",1e4,o),this.Wa=ti("forwardChannelMaxRetries",2,o),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rh(o&&o.concurrentRequestLimit),this.Da=new fg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Eh.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){F(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Dh(this,null,this.W),us(this)};function Ia(o){if(Th(o),o.G==3){var c=o.U++,h=Nt(o.I);if(ge(h,"SID",o.K),ge(h,"RID",c),ge(h,"TYPE","terminate"),ni(o,h),c=new Ie(o,o.j,c),c.L=2,c.v=ss(Nt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Nh(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ns(c)}kh(o)}function cs(o){o.g&&(Ta(o),o.g.cancel(),o.g=null)}function Th(o){cs(o),o.u&&(u.clearTimeout(o.u),o.u=null),ls(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function us(o){if(!ih(o.h)&&!o.s){o.s=!0;var c=o.Ga;pt||_n(),$t||(pt(),$t=!0),qr.add(c,o),o.B=0}}function yg(o,c){return sh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ne(E(o.Ga,o,c),Ch(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let S=new Ie(this,this.j,o),C=this.o;if(this.S&&(C?(C=g(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ah(this,S,c),h=Nt(this.I),ge(h,"RID",o),ge(h,"CVER",22),this.D&&ge(h,"X-HTTP-Session-Id",this.D),ni(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(gh(C)))+"&"+c:this.m&&wa(h,this.m,C)),va(this.h,S),this.Ua&&ge(h,"TYPE","init"),this.P?(ge(h,"$req",c),ge(h,"SID","null"),S.T=!0,ma(S,h,null)):ma(S,h,c),this.G=2}}else this.G==3&&(o?bh(this,o):this.i.length==0||ih(this.h)||bh(this))};function bh(o,c){var h;c?h=c.l:h=o.U++;let f=Nt(o.I);ge(f,"SID",o.K),ge(f,"RID",h),ge(f,"AID",o.T),ni(o,f),o.m&&o.o&&wa(f,o.m,o.o),h=new Ie(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ah(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),va(o.h,h),ma(h,f,c)}function ni(o,c){o.H&&ie(o.H,function(h,f){ge(c,f,h)}),o.l&&ch({},function(h,f){ge(c,f,h)})}function Ah(o,c,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){let B=["count="+h];C==-1?0<h?(C=S[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let fe=!0;for(let Ue=0;Ue<h;Ue++){let le=S[Ue].g,qe=S[Ue].map;if(le-=C,0>le)C=Math.max(0,S[Ue].g-100),fe=!1;else try{pg(qe,B,"req"+le+"_")}catch{f&&f(qe)}}if(fe){f=B.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Sh(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;pt||_n(),$t||(pt(),$t=!0),qr.add(c,o),o.v=0}}function Ea(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ne(E(o.Fa,o),Ch(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ne(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,F(10),cs(this),Rh(this))};function Ta(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Rh(o){o.g=new Ie(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Nt(o.qa);ge(c,"RID","rpc"),ge(c,"SID",o.K),ge(c,"AID",o.T),ge(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ge(c,"TO",o.ja),ge(c,"TYPE","xmlhttp"),ni(o,c),o.m&&o.o&&wa(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ss(Nt(c)),h.m=null,h.P=!0,eh(h,o)}n.Za=function(){this.C!=null&&(this.C=null,cs(this),Ea(this),F(19))};function ls(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ph(o,c){var h=null;if(o.g==c){ls(o),Ta(o),o.g=null;var f=2}else if(ya(o.h,c))h=c.D,oh(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;f=R(),xe(f,new Y(f,h)),us(o)}else Sh(o);else if(S=c.s,S==3||S==0&&0<c.X||!(f==1&&yg(o,c)||f==2&&Ea(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:Rn(o,5);break;case 4:Rn(o,10);break;case 3:Rn(o,6);break;default:Rn(o,2)}}}function Ch(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Rn(o,c){if(o.j.info("Error code "+c),c==2){var h=E(o.fb,o),f=o.Xa;let S=!f;f=new Sn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||rs(f,"https"),ss(f),S?hg(f.toString(),h):dg(f.toString(),h)}else F(2);o.G=0,o.l&&o.l.sa(c),kh(o),Th(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),F(2)):(this.j.info("Failed to ping google.com"),F(1))};function kh(o){if(o.G=0,o.ka=[],o.l){let c=ah(o.h);(c.length!=0||o.i.length!=0)&&(M(o.ka,c),M(o.ka,o.i),o.h.i.length=0,j(o.i),o.i.length=0),o.l.ra()}}function Dh(o,c,h){var f=h instanceof Sn?Nt(h):new Sn(h);if(f.g!="")c&&(f.g=c+"."+f.g),is(f,f.s);else{var S=u.location;f=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var C=new Sn(null);f&&rs(C,f),c&&(C.g=c),S&&is(C,S),h&&(C.l=h),f=C}return h=o.D,c=o.ya,h&&c&&ge(f,h,c),ge(f,"VER",o.la),ni(o,f),f}function Nh(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Ee(new Xr({eb:h})):new Ee(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oh(){}n=Oh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function hs(){}hs.prototype.g=function(o,c){return new Xe(o,c)};function Xe(o,c){Se.call(this),this.g=new Eh(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!Q(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!Q(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new sr(this)}L(Xe,Se),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){Ia(this.g)},Xe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Hr(o),o=h);c.i.push(new tg(c.Ya++,o)),c.G==3&&us(c)},Xe.prototype.N=function(){this.g.l=null,delete this.j,Ia(this.g),delete this.g,Xe.aa.N.call(this)};function xh(o){de.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(let h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}L(xh,de);function Vh(){m.call(this),this.status=1}L(Vh,m);function sr(o){this.g=o}L(sr,Oh),sr.prototype.ua=function(){xe(this.g,"a")},sr.prototype.ta=function(o){xe(this.g,new xh(o))},sr.prototype.sa=function(o){xe(this.g,new Vh)},sr.prototype.ra=function(){xe(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,xc=Ut.createWebChannelTransport=function(){return new hs},Oc=Ut.getStatEventTarget=function(){return R()},Nc=Ut.Event=_,ro=Ut.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,Ei=Ut.ErrorCode=pe,De.COMPLETE="complete",Dc=Ut.EventType=De,ts.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",Se.prototype.listen=Se.prototype.K,dr=Ut.WebChannel=ts,kv=Ut.FetchXmlHttpFactory=Xr,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,kc=Ut.XhrIo=Ee}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});var yf="@firebase/firestore",vf="4.8.0";var Le=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");var Mr="11.10.0";var Un=new Xt("@firebase/firestore");function fr(){return Un.logLevel}function z(n,...e){if(Un.logLevel<=re.DEBUG){let t=e.map(El);Un.debug(`Firestore (${Mr}): ${n}`,...t)}}function Bt(n,...e){if(Un.logLevel<=re.ERROR){let t=e.map(El);Un.error(`Firestore (${Mr}): ${n}`,...t)}}function hn(n,...e){if(Un.logLevel<=re.WARN){let t=e.map(El);Un.warn(`Firestore (${Mr}): ${n}`,...t)}}function El(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,cp(n,r,t)}function cp(n,e,t){let r=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Bt(r),new Error(r)}function he(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||cp(e,i,r)}function X(n,e){return n}var D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},G=class extends Ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Et=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var lo=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Bc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}},jc=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},qc=class{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0,42304);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Et,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?u(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Et)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new lo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new Le(e)}},zc=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Gc=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new zc(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}},ho=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},$c=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){he(this.o===void 0,3512);let r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ho(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ho(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Dv(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function up(){return new TextEncoder}var Pi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=Dv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function te(n,e){return n<e?-1:n>e?1:0}function Hc(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return te(r,i);{let s=up(),a=Nv(s.encode(wf(n,t)),s.encode(wf(e,t)));return a!==0?a:te(r,i)}}t+=r>65535?2:1}return te(n.length,e.length)}function wf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Nv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return te(n[t],e[t]);return te(n.length,e.length)}function Ir(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var If="__name__",fo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return te(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):Hc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ft.fromString(e.substring(4,e.length-2))}},ve=class n extends fo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new G(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},Ov=/^[_a-zA-Z][_a-zA-Z0-9]*$/,tt=class n extends fo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return Ov.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===If}static keyField(){return new n([If])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new G(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new G(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var H=class n{constructor(e){this.path=e}static fromPath(e){return new n(ve.fromString(e))}static fromName(e){return new n(ve.fromString(e).popFirst(5))}static empty(){return new n(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new ve(e.slice()))}};function lp(n,e,t){if(!t)throw new G(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function xv(n,e,t,r){if(e===!0&&r===!0)throw new G(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ef(n){if(!H.isDocumentKey(n))throw new G(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Tf(n){if(H.isDocumentKey(n))throw new G(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function hp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Tl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=Tl(n);throw new G(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ce(n,e){let t={typeString:n};return e&&(t.value=e),t}function Ui(n,e){if(!hp(n))throw new G(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new G(D.INVALID_ARGUMENT,t);return!0}var bf=-62135596800,Af=1e6,ke=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Af);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bf)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Af}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ui(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-bf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Ce("string",ke._jsonSchemaVersion),seconds:Ce("number"),nanoseconds:Ce("number")};var Z=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new ke(0,0))}static max(){return new n(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ci=-1,Wc=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};Wc.UNKNOWN_ID=-1;function Vv(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new ke(t+1,0):new ke(t,r));return new Bn(i,H.empty(),e)}function Lv(n){return new Bn(n.readTime,n.key,Ci)}var Bn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(Z.min(),H.empty(),Ci)}static max(){return new n(Z.max(),H.empty(),Ci)}};function Mv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}var Fv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Kc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Fr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Fv)throw n;z("LocalStore","Unexpectedly lost primary lease")}var V=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),u=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(p=>{a[d]=p,++u,u===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function Uv(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ur(n){return n.name==="IndexedDbTransactionError"}var Er=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};Er.ue=-1;var bl=-1;function Ho(n){return n==null}function ki(n){return n===0&&1/n==-1/0}function Bv(n){return typeof n=="number"&&Number.isInteger(n)&&!ki(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var dp="";function jv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Sf(e)),e=qv(n.get(t),e);return Sf(e)}function qv(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case dp:t+="";break;default:t+=s}}return t}function Sf(n){return n+dp+""}var zv="remoteDocuments",fp="owner";var pp="mutationQueues";var mp="mutations";var gp="documentMutations",Gv="remoteDocumentsV14";var _p="remoteDocumentGlobal";var yp="targets";var vp="targetDocuments";var wp="targetGlobal",Ip="collectionParents";var Ep="clientMetadata";var Tp="bundles";var bp="namedQueries";var $v="indexConfiguration";var Hv="indexState";var Wv="indexEntries";var Ap="documentOverlays";var Kv="globals";var Qv=[pp,mp,gp,zv,yp,fp,wp,vp,Ep,_p,Ip,Tp,bp],xT=[...Qv,Ap],Jv=[pp,mp,gp,Gv,yp,fp,wp,vp,Ep,_p,Ip,Tp,bp,Ap],Yv=Jv,Xv=[...Yv,$v,Hv,Wv];var VT=[...Xv,Kv];function Rf(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Sp(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var Te=class n{constructor(e,t){this.comparator=e,this.root=t||Tt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _r(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _r(this.root,e,this.comparator,!1)}getReverseIterator(){return new _r(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _r(this.root,e,this.comparator,!0)}},_r=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Tt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}};Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Me=class n{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new po(this.data.getIterator())}getIteratorFrom(e){return new po(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},po=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var at=class n{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new n([])}unionWith(e){let t=new Me(tt.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ir(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var mo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var He=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new mo("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};He.EMPTY_BYTE_STRING=new He("");var Zv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(he(!!n,39018),typeof n=="string"){let e=0,t=Zv.exec(n);if(he(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?He.fromBase64String(n):He.fromUint8Array(n)}var Rp="server_timestamp",Pp="__type__",Cp="__previous_value__",kp="__local_write_time__";function Al(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Pp])===null||t===void 0?void 0:t.stringValue)===Rp}function Wo(n){let e=n.mapValue.fields[Cp];return Al(e)?Wo(e):e}function Di(n){let e=jt(n.mapValue.fields[kp].timestampValue);return new ke(e.seconds,e.nanos)}var Qc=class{constructor(e,t,r,i,s,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}},go="(default)",_o=class n{constructor(e,t){this.projectId=e,this.database=t||go}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===go}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Sl="__type__",Dp="__max__",io={mapValue:{fields:{__type__:{stringValue:Dp}}}},Rl="__vector__",Tr="value";function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Al(n)?4:Op(n)?9007199254740991:Np(n)?10:11:K(28295,{value:n})}function St(n,e){if(n===e)return!0;let t=dn(n);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Di(n).isEqual(Di(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=jt(i.timestampValue),u=jt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return qt(i.bytesValue).isEqual(qt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return _e(i.geoPointValue.latitude)===_e(s.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _e(i.integerValue)===_e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=_e(i.doubleValue),u=_e(s.doubleValue);return a===u?ki(a)===ki(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Ir(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Rf(a)!==Rf(u))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!St(a[l],u[l])))return!1;return!0}(n,e);default:return K(52216,{left:n})}}function Ni(n,e){return(n.values||[]).find(t=>St(t,e))!==void 0}function br(n,e){if(n===e)return 0;let t=dn(n),r=dn(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(s,a){let u=_e(s.integerValue||s.doubleValue),l=_e(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Pf(n.timestampValue,e.timestampValue);case 4:return Pf(Di(n),Di(e));case 5:return Hc(n.stringValue,e.stringValue);case 6:return function(s,a){let u=qt(s),l=qt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){let p=te(u[d],l[d]);if(p!==0)return p}return te(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let u=te(_e(s.latitude),_e(a.latitude));return u!==0?u:te(_e(s.longitude),_e(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Cf(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,p;let v=s.fields||{},E=a.fields||{},k=(u=v[Tr])===null||u===void 0?void 0:u.arrayValue,L=(l=E[Tr])===null||l===void 0?void 0:l.arrayValue,j=te(((d=k?.values)===null||d===void 0?void 0:d.length)||0,((p=L?.values)===null||p===void 0?void 0:p.length)||0);return j!==0?j:Cf(k,L)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===io.mapValue&&a===io.mapValue)return 0;if(s===io.mapValue)return 1;if(a===io.mapValue)return-1;let u=s.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let v=0;v<l.length&&v<p.length;++v){let E=Hc(l[v],p[v]);if(E!==0)return E;let k=br(u[l[v]],d[p[v]]);if(k!==0)return k}return te(l.length,p.length)}(n.mapValue,e.mapValue);default:throw K(23264,{le:t})}}function Pf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);let t=jt(n),r=jt(e),i=te(t.seconds,r.seconds);return i!==0?i:te(t.nanos,r.nanos)}function Cf(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=br(t[i],r[i]);if(s)return s}return te(t.length,r.length)}function Ar(n){return Jc(n)}function Jc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=Jc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${Jc(t.fields[a])}`;return i+"}"}(n.mapValue):K(61005,{value:n})}function ao(n){switch(dn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Wo(n);return e?16+ao(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ao(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return mn(r.fields,(s,a)=>{i+=s.length+ao(a)}),i}(n.mapValue);default:throw K(13486,{value:n})}}function Yc(n){return!!n&&"integerValue"in n}function Pl(n){return!!n&&"arrayValue"in n}function kf(n){return!!n&&"nullValue"in n}function Df(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function co(n){return!!n&&"mapValue"in n}function Np(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Sl])===null||t===void 0?void 0:t.stringValue)===Rl}function bi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return mn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=bi(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=bi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Op(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Dp}var MT={mapValue:{fields:{[Sl]:{stringValue:Rl},[Tr]:{arrayValue:{}}}}};var et=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!co(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(t)}setAll(e){let t=tt.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=bi(a):i.push(u.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());co(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];co(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){mn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(bi(this.value))}};function xp(n){let e=[];return mn(n.fields,(t,r)=>{let i=new tt([t]);if(co(r)){let s=xp(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new at(e)}var dt=class n{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,Z.min(),Z.min(),Z.min(),et.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,Z.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,Z.min(),Z.min(),et.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,Z.min(),Z.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Sr=class{constructor(e,t){this.position=e,this.inclusive=t}};function Nf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),t.key):r=br(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Of(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}var Rr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function ew(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var yo=class{},Oe=class n extends yo{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zc(e,t,r):t==="array-contains"?new nu(e,r):t==="in"?new ru(e,r):t==="not-in"?new iu(e,r):t==="array-contains-any"?new su(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new eu(e,r):new tu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(br(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(br(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Rt=class n extends yo{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return Vp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function Vp(n){return n.op==="and"}function Lp(n){return tw(n)&&Vp(n)}function tw(n){for(let e of n.filters)if(e instanceof Rt)return!1;return!0}function Xc(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Ar(n.value);if(Lp(n))return n.filters.map(e=>Xc(e)).join(",");{let e=n.filters.map(t=>Xc(t)).join(",");return`${n.op}(${e})`}}function Mp(n,e){return n instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&St(r.value,i.value)}(n,e):n instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&Mp(a,i.filters[u]),!0):!1}(n,e):void K(19439)}function Fp(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Ar(t.value)}`}(n):n instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(Fp).join(" ,")+"}"}(n):"Filter"}var Zc=class extends Oe{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){let t=H.comparator(e.key,this.key);return this.matchesComparison(t)}},eu=class extends Oe{constructor(e,t){super(e,"in",t),this.keys=Up("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},tu=class extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=Up("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Up(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}var nu=class extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Pl(t)&&Ni(t.arrayValue,this.value)}},ru=class extends Oe{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Ni(this.value.arrayValue,t)}},iu=class extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ni(this.value.arrayValue,t)}},su=class extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Pl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}};var ou=class{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}};function xf(n,e=null,t=[],r=[],i=null,s=null,a=null){return new ou(n,e,t,r,i,s,a)}function Cl(n){let e=X(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Xc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ho(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ar(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ar(r)).join(",")),e.Pe=t}return e.Pe}function kl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ew(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Of(n.startAt,e.startAt)&&Of(n.endAt,e.endAt)}function au(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Pr=class{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function nw(n,e,t,r,i,s,a,u){return new Pr(n,e,t,r,i,s,a,u)}function Ko(n){return new Pr(n)}function Vf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rw(n){return n.collectionGroup!==null}function Ai(n){let e=X(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Me(tt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Rr(s,r))}),t.has(tt.keyField().canonicalString())||e.Te.push(new Rr(tt.keyField(),r))}return e.Te}function bt(n){let e=X(n);return e.Ie||(e.Ie=iw(e,Ai(n))),e.Ie}function iw(n,e){if(n.limitType==="F")return xf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Rr(i.field,s)});let t=n.endAt?new Sr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Sr(n.startAt.position,n.startAt.inclusive):null;return xf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cu(n,e,t){return new Pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qo(n,e){return kl(bt(n),bt(e))&&n.limitType===e.limitType}function Bp(n){return`${Cl(bt(n))}|lt:${n.limitType}`}function pr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Fp(i)).join(", ")}]`),Ho(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ar(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ar(i)).join(",")),`Target(${r})`}(bt(n))}; limitType=${n.limitType})`}function Jo(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Ai(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){let d=Nf(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Ai(r),i)||r.endAt&&!function(a,u,l){let d=Nf(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Ai(r),i))}(n,e)}function sw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jp(n){return(e,t)=>{let r=!1;for(let i of Ai(n)){let s=ow(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ow(n,e,t){let r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,a,u){let l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?br(l,d):K(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}var zt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Sp(this.inner)}size(){return this.innerSize}};var aw=new Te(H.comparator);function Gt(){return aw}var qp=new Te(H.comparator);function Ti(...n){let e=qp;for(let t of n)e=e.insert(t.key,t);return e}function zp(n){let e=qp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Vn(){return Si()}function Gp(){return Si()}function Si(){return new zt(n=>n.toString(),(n,e)=>n.isEqual(e))}var cw=new Te(H.comparator),uw=new Me(H.comparator);function oe(...n){let e=uw;for(let t of n)e=e.add(t);return e}var lw=new Me(te);function hw(){return lw}function Dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ki(e)?"-0":e}}function $p(n){return{integerValue:""+n}}function dw(n,e){return Bv(e)?$p(e):Dl(n,e)}var Cr=class{constructor(){this._=void 0}};function fw(n,e,t){return n instanceof kr?function(i,s){let a={fields:{[Pp]:{stringValue:Rp},[kp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Al(s)&&(s=Wo(s)),s&&(a.fields[Cp]=s),{mapValue:a}}(t,e):n instanceof jn?Wp(n,e):n instanceof qn?Kp(n,e):function(i,s){let a=Hp(i,s),u=Lf(a)+Lf(i.Ee);return Yc(a)&&Yc(i.Ee)?$p(u):Dl(i.serializer,u)}(n,e)}function pw(n,e,t){return n instanceof jn?Wp(n,e):n instanceof qn?Kp(n,e):t}function Hp(n,e){return n instanceof Dr?function(r){return Yc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var kr=class extends Cr{},jn=class extends Cr{constructor(e){super(),this.elements=e}};function Wp(n,e){let t=Qp(e);for(let r of n.elements)t.some(i=>St(i,r))||t.push(r);return{arrayValue:{values:t}}}var qn=class extends Cr{constructor(e){super(),this.elements=e}};function Kp(n,e){let t=Qp(e);for(let r of n.elements)t=t.filter(i=>!St(i,r));return{arrayValue:{values:t}}}var Dr=class extends Cr{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function Lf(n){return _e(n.integerValue||n.doubleValue)}function Qp(n){return Pl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mw(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof jn&&i instanceof jn||r instanceof qn&&i instanceof qn?Ir(r.elements,i.elements,St):r instanceof Dr&&i instanceof Dr?St(r.Ee,i.Ee):r instanceof kr&&i instanceof kr}(n.transform,e.transform)}var uu=class{constructor(e,t){this.version=e,this.transformResults=t}},rt=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function uo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Nr=class{};function Jp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Or(n.key,rt.none()):new zn(n.key,n.data,rt.none());{let t=n.data,r=et.empty(),i=new Me(tt.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Pt(n.key,r,new at(i.toArray()),rt.none())}}function gw(n,e,t){n instanceof zn?function(i,s,a){let u=i.value.clone(),l=Ff(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Pt?function(i,s,a){if(!uo(i.precondition,s))return void s.convertToUnknownDocument(a.version);let u=Ff(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Yp(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ri(n,e,t,r){return n instanceof zn?function(s,a,u,l){if(!uo(s.precondition,a))return u;let d=s.value.clone(),p=Uf(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pt?function(s,a,u,l){if(!uo(s.precondition,a))return u;let d=Uf(s.fieldTransforms,l,a),p=a.data;return p.setAll(Yp(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(s,a,u){return uo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function _w(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Hp(r.transform,i||null);s!=null&&(t===null&&(t=et.empty()),t.set(r.field,s))}return t||null}function Mf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ir(r,i,(s,a)=>mw(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var zn=class extends Nr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Pt=class extends Nr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Yp(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Ff(n,e,t){let r=new Map;he(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,pw(a,u,t[i]))}return r}function Uf(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,fw(s,a,e))}return r}var Or=class extends Nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},lu=class extends Nr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var hu=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&gw(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ri(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Ri(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Gp();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;let l=Jp(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&Ir(this.mutations,e.mutations,(t,r)=>Mf(t,r))&&Ir(this.baseMutations,e.baseMutations,(t,r)=>Mf(t,r))}},du=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){he(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return cw}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var fu=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var pu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Re,ce;function yw(n){switch(n){case D.OK:return K(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Xp(n){if(n===void 0)return Bt("GRPC error has no .code"),D.UNKNOWN;switch(n){case Re.OK:return D.OK;case Re.CANCELLED:return D.CANCELLED;case Re.UNKNOWN:return D.UNKNOWN;case Re.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Re.INTERNAL:return D.INTERNAL;case Re.UNAVAILABLE:return D.UNAVAILABLE;case Re.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Re.NOT_FOUND:return D.NOT_FOUND;case Re.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Re.ABORTED:return D.ABORTED;case Re.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Re.DATA_LOSS:return D.DATA_LOSS;default:return K(39323,{code:n})}}(ce=Re||(Re={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";var Bf=null;var vw=new Ft([4294967295,4294967295],0);function jf(n){let e=up().encode(n),t=new Cc;return t.update(e),new Uint8Array(t.digest())}function qf(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ft([t,r],0),new Ft([i,s],0)]}var mu=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ln(`Invalid padding: ${t}`);if(r<0)throw new Ln(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ln(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ln(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ft.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Ft.fromNumber(r)));return i.compare(vw)===1&&(i=new Ft([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=jf(e),[r,i]=qf(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;let t=jf(e),[r,i]=qf(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);this.we(a)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Ln=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var vo=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Oi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(Z.min(),i,new Te(te),Gt(),oe())}},Oi=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,oe(),oe(),oe())}};var yr=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},wo=class{constructor(e,t){this.targetId=e,this.De=t}},Io=class{constructor(e,t,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Eo=class{constructor(){this.ve=0,this.Ce=zf(),this.Fe=He.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=oe(),t=oe(),r=oe();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Oi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=zf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},gu=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=Gt(),this.je=so(),this.Je=so(),this.He=new Te(te)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(au(s))if(r===0){let a=new H(s.path);this.Xe(t,a,dt.newNoDocument(a,Z.min()))}else he(r===1,20013,{expectedCount:r});else{let a=this.ot(t);if(a!==r){let u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}Bf?.ct(function(p,v,E,k,L){var j,M,ee,Q,J,ae;let be={localCacheCount:p,existenceFilterCount:v.count,databaseId:E.database,projectId:E.projectId},ie=v.unchangedNames;return ie&&(be.bloomFilter={applied:L===0,hashCount:(j=ie?.hashCount)!==null&&j!==void 0?j:0,bitmapLength:(Q=(ee=(M=ie?.bits)===null||M===void 0?void 0:M.bitmap)===null||ee===void 0?void 0:ee.length)!==null&&Q!==void 0?Q:0,padding:(ae=(J=ie?.bits)===null||J===void 0?void 0:J.padding)!==null&&ae!==void 0?ae:0,mightContain:T=>{var g;return(g=k?.mightContain(T))!==null&&g!==void 0&&g}}),be}(a,e.De,this.We.lt(),u,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,u;try{a=qt(r).toUint8Array()}catch(l){if(l instanceof mo)return hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new mu(a,i,s)}catch(l){return hn(l instanceof Ln?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,a)=>{let u=this.st(a);if(u){if(s.current&&au(u.target)){let l=new H(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,dt.newNoDocument(l,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}});let r=oe();this.Je.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{let d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));let i=new vo(e,t,this.He,this.ze,r);return this.ze=Gt(),this.je=so(),this.Je=so(),this.He=new Te(te),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Eo,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Me(te),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Me(te),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Eo),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function so(){return new Te(H.comparator)}function zf(){return new Te(H.comparator)}var ww={asc:"ASCENDING",desc:"DESCENDING"},Iw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ew={and:"AND",or:"OR"},_u=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function yu(n,e){return n.useProto3Json||Ho(e)?e:{value:e}}function To(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Tw(n,e){return To(n,e.toTimestamp())}function At(n){return he(!!n,49232),Z.fromTimestamp(function(t){let r=jt(t);return new ke(r.seconds,r.nanos)}(n))}function Nl(n,e){return vu(n,e).canonicalString()}function vu(n,e){let t=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function em(n){let e=ve.fromString(n);return he(sm(e),10190,{key:e.toString()}),e}function wu(n,e){return Nl(n.databaseId,e.path)}function Vc(n,e){let t=em(e);if(t.get(1)!==n.databaseId.projectId)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(nm(t))}function tm(n,e){return Nl(n.databaseId,e)}function bw(n){let e=em(n);return e.length===4?ve.emptyPath():nm(e)}function Iu(n){return new ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nm(n){return he(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gf(n,e,t){return{name:wu(n,e),fields:t.value.mapValue.fields}}function Aw(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(he(p===void 0||typeof p=="string",58123),He.fromBase64String(p||"")):(he(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),He.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let p=d.code===void 0?D.UNKNOWN:Xp(d.code);return new G(p,d.message||"")}(a);t=new Io(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Vc(n,r.document.name),s=At(r.document.updateTime),a=r.document.createTime?At(r.document.createTime):Z.min(),u=new et({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(i,s,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new yr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Vc(n,r.document),s=r.readTime?At(r.readTime):Z.min(),a=dt.newNoDocument(i,s),u=r.removedTargetIds||[];t=new yr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Vc(n,r.document),s=r.removedTargetIds||[];t=new yr([],s,i,null)}else{if(!("filter"in e))return K(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new pu(i,s),u=r.targetId;t=new wo(u,a)}}return t}function Sw(n,e){let t;if(e instanceof zn)t={update:Gf(n,e.key,e.value)};else if(e instanceof Or)t={delete:wu(n,e.key)};else if(e instanceof Pt)t={update:Gf(n,e.key,e.data),updateMask:Vw(e.fieldMask)};else{if(!(e instanceof lu))return K(16599,{Rt:e.type});t={verify:wu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let u=a.transform;if(u instanceof kr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof jn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof qn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Dr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw K(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Tw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(n,e.precondition)),t}function Rw(n,e){return n&&n.length>0?(he(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?At(i.updateTime):At(s);return a.isEqual(Z.min())&&(a=At(s)),new uu(a,i.transformResults||[])}(t,e))):[]}function Pw(n,e){return{documents:[tm(n,e.path)]}}function Cw(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tm(n,i);let s=function(d){if(d.length!==0)return im(Rt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:mr(E.field),direction:Nw(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=yu(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function kw(n){let e=bw(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){he(r===1,65062);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(v){let E=rm(v);return E instanceof Rt&&Lp(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(E=>function(L){return new Rr(gr(L.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(E))}(t.orderBy));let u=null;t.limit&&(u=function(v){let E;return E=typeof v=="object"?v.value:v,Ho(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(v){let E=!!v.before,k=v.values||[];return new Sr(k,E)}(t.startAt));let d=null;return t.endAt&&(d=function(v){let E=!v.before,k=v.values||[];return new Sr(k,E)}(t.endAt)),nw(e,i,a,s,u,"F",l,d)}function Dw(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=gr(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=gr(t.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=gr(t.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=gr(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(gr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Rt.create(t.compositeFilter.filters.map(r=>rm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(t.compositeFilter.op))}(n):K(30097,{filter:n})}function Nw(n){return ww[n]}function Ow(n){return Iw[n]}function xw(n){return Ew[n]}function mr(n){return{fieldPath:n.canonicalString()}}function gr(n){return tt.fromServerFormat(n.fieldPath)}function im(n){return n instanceof Oe?function(t){if(t.op==="=="){if(Df(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NAN"}};if(kf(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Df(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NOT_NAN"}};if(kf(t.value))return{unaryFilter:{field:mr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(t.field),op:Ow(t.op),value:t.value}}}(n):n instanceof Rt?function(t){let r=t.getFilters().map(i=>im(i));return r.length===1?r[0]:{compositeFilter:{op:xw(t.op),filters:r}}}(n):K(54877,{filter:n})}function Vw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var xi=class n{constructor(e,t,r,i,s=Z.min(),a=Z.min(),u=He.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Eu=class{constructor(e){this.gt=e}};function Lw(n){let e=kw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cu(e,e.limit,"L"):e}var bo=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(_e(e.integerValue));else if("doubleValue"in e){let r=_e(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),ki(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=jt(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(qt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?Op(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Np(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):K(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let a=Tr,u=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(_e(u)),this.xt(a,t),this.Dt(s[a],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),H.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};bo.Ut=new bo;var Tu=class{constructor(){this.Dn=new bu}addToCollectionParentIndex(e,t){return this.Dn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Bn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}},bu=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Me(ve.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(ve.comparator)).toArray()}};var FT=new Uint8Array(0);var $f={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},om=41943040,ot=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(om,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);var Vi=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var Hf="LruGarbageCollector",Mw=1048576;function Wf([n,e],[t,r]){let i=te(n,t);return i===0?te(e,r):i}var Au=class{constructor(e){this.Tr=e,this.buffer=new Me(Wf),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Wf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Su=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){z(Hf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ur(t)?z(Hf,"Ignoring IndexedDB error during garbage collection: ",t):await Fr(t)}await this.Rr(3e5)})}},Ru=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Er.ue);let r=new Au(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve($f)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$f):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,u,l,d,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,a=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,u=Date.now(),this.removeTargets(e,r,t))).next(v=>(s=v,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(d=Date.now(),fr()<=re.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${v} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:v})))}};function Fw(n,e){return new Ru(n,e)}var Pu=class{constructor(){this.changes=new zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Cu=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var ku=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ri(r.mutation,i,at.empty(),ke.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){let i=Vn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Ti();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Vn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=Gt(),a=Si(),u=function(){return Si()}();return t.forEach((l,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Pt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Ri(p.mutation,d,p.mutation.getFieldMask(),ke.now())):a.set(d.key,at.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var v;return u.set(d,new Cu(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(e,t){let r=Si(),i=new Te((a,u)=>a-u),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let p=r.get(l)||at.empty();p=u.applyToLocalView(d,p),r.set(l,p);let v=(i.get(u.batchId)||oe()).add(l);i=i.insert(u.batchId,v)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let l=u.getNext(),d=l.key,p=l.value,v=Gp();p.forEach(E=>{if(!s.has(E)){let k=Jp(t.get(E),r.get(E));k!==null&&v.set(E,k),s=s.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(Vn()),u=Ci,l=s;return a.next(d=>V.forEach(d,(p,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{l=l.insert(p,E)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,oe())).next(p=>({batchId:u,changes:zp(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=Ti();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=Ti();return this.indexManager.getCollectionParents(e,s).next(u=>V.forEach(u,l=>{let d=function(v,E){return new Pr(E,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((v,E)=>{a=a.insert(v,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,dt.newInvalidDocument(p)))});let u=Ti();return a.forEach((l,d)=>{let p=s.get(l);p!==void 0&&Ri(p.mutation,d,at.empty(),ke.now()),Jo(t,d)&&(u=u.insert(l,d))}),u})}};var Du=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return V.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:At(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:Lw(i.bundledQuery),readTime:At(i.readTime)}}(t)),V.resolve()}};var Nu=class{constructor(){this.overlays=new Te(H.comparator),this.kr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Vn();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){let i=Vn(),s=t.length+1,a=new H(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Te((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Vn(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let u=Vn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return V.resolve(u)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fu(t,r));let s=this.kr.get(t);s===void 0&&(s=oe(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var Ou=class{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}};var Li=class{constructor(){this.qr=new Me(Pe.Qr),this.$r=new Me(Pe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new Pe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Pe(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new H(new ve([])),r=new Pe(t,e),i=new Pe(t,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new H(new ve([])),r=new Pe(t,e),i=new Pe(t,e+1),s=oe();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new Pe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},Pe=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return H.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||H.comparator(e.key,t.key)}};var xu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Me(Pe.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new hu(s,t,r,i);this.mutationQueue.push(a);for(let u of i)this.Yr=this.Yr.add(new Pe(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?bl:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new Pe(t,0),i=new Pe(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{let u=this.Zr(a.Hr);s.push(u)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Me(te);return t.forEach(i=>{let s=new Pe(i,0),a=new Pe(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],u=>{r=r.add(u.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;H.isDocumentKey(s)||(s=s.child(""));let a=new Pe(new H(s),0),u=new Me(te);return this.Yr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Hr)),!0)},a),V.resolve(this.ei(u))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){he(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(t.mutations,i=>{let s=new Pe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new Pe(t,0),i=this.Yr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Vu=class{constructor(e){this.ni=e,this.docs=function(){return new Te(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=Gt();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Gt(),a=t.path,u=new H(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){let{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Mv(Lv(p),r)<=0||(i.has(p.key)||Jo(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K(9500)}ri(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Lu(this)}getSize(e){return V.resolve(this.size)}},Lu=class extends Pu{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Mu=class{constructor(e){this.persistence=e,this.ii=new zt(t=>Cl(t),kl),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.si=0,this.oi=new Li,this.targetCount=0,this._i=Vi.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),V.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new Vi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.hr(t),V.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),V.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.oi.containsKey(t))}};var Ao=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new Er(0),this.ci=!1,this.ci=!0,this.li=new Ou,this.referenceDelegate=e(this),this.hi=new Mu(this),this.indexManager=new Tu,this.remoteDocumentCache=function(i){return new Vu(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Eu(t),this.Ti=new Du(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new xu(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);let i=new Fu(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},Fu=class extends Kc{constructor(e){super(),this.currentSequenceNumber=e}},Uu=class n{constructor(e){this.persistence=e,this.Ai=new Li,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{let i=H.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,Z.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return V.or([()=>V.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},So=class n{constructor(e,t){this.persistence=e,this.gi=new zt(r=>jv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Fw(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return V.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,s.removeEntry(a,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),V.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ao(e.data.value)),t}Sr(e,t,r){return V.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Bu=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=oe(),i=oe();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var ju=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var qu=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Qh()?8:Uv(Ve())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new ju;return this.ws(e,t,a).next(u=>{if(s.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(fr()<=re.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",pr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(fr()<=re.DEBUG&&z("QueryEngine","Query:",pr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(fr()<=re.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",pr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(t))):V.resolve())}ps(e,t){if(Vf(t))return V.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=cu(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=oe(...s);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,cu(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,i){return Vf(t)||i.isEqual(Z.min())?V.resolve(null):this.gs.getDocuments(e,r).next(s=>{let a=this.bs(t,s);return this.Ds(t,a,r,i)?V.resolve(null):(fr()<=re.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pr(t)),this.vs(e,a,t,Vv(i,Ci)).next(u=>u))})}bs(e,t){let r=new Me(jp(e));return t.forEach((i,s)=>{Jo(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return fr()<=re.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",pr(t)),this.gs.getDocumentsMatchingQuery(e,t,Bn.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Ol="LocalStore",Uw=3e8,zu=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new Te(te),this.Ms=new zt(s=>Cl(s),kl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ku(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function Bw(n,e,t,r){return new zu(n,e,t,r)}async function am(n,e){let t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],u=[],l=oe();for(let d of i){a.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}for(let d of s){u.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function jw(n,e){let t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){let v=d.batch,E=v.keys(),k=V.resolve();return E.forEach(L=>{k=k.next(()=>p.getEntry(l,L)).next(j=>{let M=d.docVersions.get(L);he(M!==null,48541),j.version.compareTo(M)<0&&(v.applyToRemoteDocument(j,d),j.isValidDocument()&&(j.setReadTime(d.commitVersion),p.addEntry(j)))})}),k.next(()=>u.mutationQueue.removeMutationBatch(l,v))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=oe();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function cm(n){let e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function qw(n,e){let t=X(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let u=[];e.targetChanges.forEach((p,v)=>{let E=i.get(v);if(!E)return;u.push(t.hi.removeMatchingKeys(s,p.removedDocuments,v).next(()=>t.hi.addMatchingKeys(s,p.addedDocuments,v)));let k=E.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(v)!==null?k=k.withResumeToken(He.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),i=i.insert(v,k),function(j,M,ee){return j.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=Uw?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(E,k,p)&&u.push(t.hi.updateTargetData(s,k))});let l=Gt(),d=oe();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),u.push(zw(s,a,e.documentUpdates).next(p=>{l=p.Ls,d=p.ks})),!r.isEqual(Z.min())){let p=t.hi.getLastRemoteSnapshotVersion(s).next(v=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(p)}return V.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=i,s))}function zw(n,e,t){let r=oe(),i=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Gt();return t.forEach((u,l)=>{let d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):z(Ol,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:i}})}function Gw(n,e){let t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $w(n,e){let t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.hi.allocateTargetId(r).next(a=>(i=new xi(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Gu(n,e,t){let r=X(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ur(a))throw a;z(Ol,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Kf(n,e,t){let r=X(n),i=Z.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){let v=X(l),E=v.Ms.get(p);return E!==void 0?V.resolve(v.Fs.get(E)):v.hi.getTargetData(d,p)}(r,a,bt(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:Z.min(),t?s:oe())).next(u=>(Hw(r,sw(e),u),{documents:u,qs:s})))}function Hw(n,e,t){let r=n.xs.get(e)||Z.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var Ro=class{constructor(){this.activeTargetIds=hw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var $u=class{constructor(){this.Fo=new Ro,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ro,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Hu=class{xo(e){}shutdown(){}};var Qf="ConnectivityMonitor",Po=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){z(Qf,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){z(Qf,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var oo=null;function Wu(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}var Lc="RestConnection",Ww={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Ku=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===go?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let a=Wu(),u=this.Go(e,t.toUriEncodedString());z(Lc,`Sending RPC '${e}' ${a}:`,u,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);let{host:d}=new URL(u),p=Yt(d);return this.jo(e,u,l,r,p).then(v=>(z(Lc,`Received RPC '${e}' ${a}: `,v),v),v=>{throw hn(Lc,`RPC '${e}' ${a} failed with error: `,v,"url: ",u,"request:",r),v})}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=Ww[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var Qu=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var $e="WebChannelConnection",Ju=class extends Ku{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let a=Wu();return new Promise((u,l)=>{let d=new kc;d.setWithCredentials(!0),d.listenOnce(Dc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ei.NO_ERROR:let v=d.getResponseJson();z($e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case Ei.TIMEOUT:z($e,`RPC '${e}' ${a} timed out`),l(new G(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ei.HTTP_ERROR:let E=d.getStatus();if(z($e,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);let L=k?.error;if(L&&L.status&&L.message){let j=function(ee){let Q=ee.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(Q)>=0?Q:D.UNKNOWN}(L.status);l(new G(j,L.message))}else l(new G(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new G(D.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{z($e,`RPC '${e}' ${a} completed.`)}});let p=JSON.stringify(i);z($e,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)})}P_(e,t,r){let i=Wu(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xc(),u=Oc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let p=s.join("");z($e,`Creating RPC '${e}' stream ${i}: ${p}`,l);let v=a.createWebChannel(p,l);this.T_(v);let E=!1,k=!1,L=new Qu({Ho:M=>{k?z($e,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(E||(z($e,`Opening RPC '${e}' stream ${i} transport.`),v.open(),E=!0),z($e,`RPC '${e}' stream ${i} sending:`,M),v.send(M))},Yo:()=>v.close()}),j=(M,ee,Q)=>{M.listen(ee,J=>{try{Q(J)}catch(ae){setTimeout(()=>{throw ae},0)}})};return j(v,dr.EventType.OPEN,()=>{k||(z($e,`RPC '${e}' stream ${i} transport opened.`),L.s_())}),j(v,dr.EventType.CLOSE,()=>{k||(k=!0,z($e,`RPC '${e}' stream ${i} transport closed`),L.__(),this.I_(v))}),j(v,dr.EventType.ERROR,M=>{k||(k=!0,hn($e,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),L.__(new G(D.UNAVAILABLE,"The operation could not be completed")))}),j(v,dr.EventType.MESSAGE,M=>{var ee;if(!k){let Q=M.data[0];he(!!Q,16349);let J=Q,ae=J?.error||((ee=J[0])===null||ee===void 0?void 0:ee.error);if(ae){z($e,`RPC '${e}' stream ${i} received error:`,ae);let be=ae.status,ie=function(w){let b=Re[w];if(b!==void 0)return Xp(b)}(be),T=ae.message;ie===void 0&&(ie=D.INTERNAL,T="Unknown error status: "+be+" with message "+ae.message),k=!0,L.__(new G(ie,T)),v.close()}else z($e,`RPC '${e}' stream ${i} received:`,Q),L.a_(Q)}}),j(u,Nc.STAT_EVENT,M=>{M.stat===ro.PROXY?z($e,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===ro.NOPROXY&&z($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{L.o_()},0),L}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function Mc(){return typeof document<"u"?document:null}function Yo(n){return new _u(n,!0)}var Co=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var Jf="PersistentStream",ko=class{constructor(e,t,r,i,s,a,u,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Co(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Bt(t.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new G(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(Jf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(z(Jf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Yu=class extends ko{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=Aw(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?Z.min():a.readTime?At(a.readTime):Z.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=Iu(this.serializer),t.addTarget=function(s,a){let u,l=a.target;if(u=au(l)?{documents:Pw(s,l)}:{query:Cw(s,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Zp(s,a.resumeToken);let d=yu(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(Z.min())>0){u.readTime=To(s,a.snapshotVersion.toTimestamp());let d=yu(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=Dw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=Iu(this.serializer),t.removeTarget=e,this.k_(t)}},Xu=class extends ko{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=Rw(e.writeResults,e.commitTime),r=At(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=Iu(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Sw(this.serializer,r))};this.k_(t)}};var Zu=class{},el=class extends Zu{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,vu(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(D.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,vu(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(D.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},tl=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Bt(t),this._a=!1):z("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var Gn="RemoteStore",nl=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Hn(this)&&(z(Gn,"Restarting streams for network reachability change."),await async function(l){let d=X(l);d.Ia.add(4),await Bi(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Xo(d)}(this))})}),this.Aa=new tl(r,i)}};async function Xo(n){if(Hn(n))for(let e of n.da)await e(!0)}async function Bi(n){for(let e of n.da)await e(!1)}function um(n,e){let t=X(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ml(t)?Ll(t):Br(t).x_()&&Vl(t,e))}function xl(n,e){let t=X(n),r=Br(t);t.Ta.delete(e),r.x_()&&lm(t,e),t.Ta.size===0&&(r.x_()?r.B_():Hn(t)&&t.Aa.set("Unknown"))}function Vl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Br(n).H_(e)}function lm(n,e){n.Ra.$e(e),Br(n).Y_(e)}function Ll(n){n.Ra=new gu({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Br(n).start(),n.Aa.aa()}function Ml(n){return Hn(n)&&!Br(n).M_()&&n.Ta.size>0}function Hn(n){return X(n).Ia.size===0}function hm(n){n.Ra=void 0}async function Kw(n){n.Aa.set("Online")}async function Qw(n){n.Ta.forEach((e,t)=>{Vl(n,e)})}async function Jw(n,e){hm(n),Ml(n)?(n.Aa.la(e),Ll(n)):n.Aa.set("Unknown")}async function Yw(n,e,t){if(n.Aa.set("Online"),e instanceof Io&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))}(n,e)}catch(r){z(Gn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Do(n,r)}else if(e instanceof yr?n.Ra.Ye(e):e instanceof wo?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Z.min()))try{let r=await cm(n.localStore);t.compareTo(r)>=0&&await function(s,a){let u=s.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let p=s.Ta.get(d);p&&s.Ta.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{let p=s.Ta.get(l);if(!p)return;s.Ta.set(l,p.withResumeToken(He.EMPTY_BYTE_STRING,p.snapshotVersion)),lm(s,l);let v=new xi(p.target,l,d,p.sequenceNumber);Vl(s,v)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){z(Gn,"Failed to raise snapshot:",r),await Do(n,r)}}async function Do(n,e,t){if(!Ur(e))throw e;n.Ia.add(1),await Bi(n),n.Aa.set("Offline"),t||(t=()=>cm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z(Gn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Xo(n)})}function dm(n,e){return e().catch(t=>Do(n,t,e))}async function Zo(n){let e=X(n),t=fn(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:bl;for(;Xw(e);)try{let i=await Gw(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,Zw(e,i)}catch(i){await Do(e,i)}fm(e)&&pm(e)}function Xw(n){return Hn(n)&&n.Pa.length<10}function Zw(n,e){n.Pa.push(e);let t=fn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function fm(n){return Hn(n)&&!fn(n).M_()&&n.Pa.length>0}function pm(n){fn(n).start()}async function eI(n){fn(n).na()}async function tI(n){let e=fn(n);for(let t of n.Pa)e.X_(t.mutations)}async function nI(n,e,t){let r=n.Pa.shift(),i=du.from(r,e,t);await dm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Zo(n)}async function rI(n,e){e&&fn(n).Z_&&await async function(r,i){if(function(a){return yw(a)&&a!==D.ABORTED}(i.code)){let s=r.Pa.shift();fn(r).N_(),await dm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Zo(r)}}(n,e),fm(n)&&pm(n)}async function Yf(n,e){let t=X(n);t.asyncQueue.verifyOperationInProgress(),z(Gn,"RemoteStore received new credentials");let r=Hn(t);t.Ia.add(3),await Bi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xo(t)}async function iI(n,e){let t=X(n);e?(t.Ia.delete(2),await Xo(t)):e||(t.Ia.add(2),await Bi(t),t.Aa.set("Unknown"))}function Br(n){return n.Va||(n.Va=function(t,r,i){let s=X(t);return s.ia(),new Yu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:Kw.bind(null,n),e_:Qw.bind(null,n),n_:Jw.bind(null,n),J_:Yw.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Ml(n)?Ll(n):n.Aa.set("Unknown")):(await n.Va.stop(),hm(n))})),n.Va}function fn(n){return n.ma||(n.ma=function(t,r,i){let s=X(t);return s.ia(),new Xu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:eI.bind(null,n),n_:rI.bind(null,n),ea:tI.bind(null,n),ta:nI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Zo(n)):(await n.ma.stop(),n.Pa.length>0&&(z(Gn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var rl=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,u=new n(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Fl(n,e){if(Bt("AsyncQueue",`${e}: ${n}`),Ur(n))return new G(D.UNAVAILABLE,`${e}: ${n}`);throw n}var No=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=Ti(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Oo=class{constructor(){this.fa=new Te(H.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):K(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},xr=class n{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,No.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var il=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},sl=class{constructor(){this.queries=Xf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=X(t),s=i.queries;i.queries=Xf(),s.forEach((a,u)=>{for(let l of u.wa)l.onError(r)})})(this,new G(D.ABORTED,"Firestore shutting down"))}};function Xf(){return new zt(n=>Bp(n),Qo)}async function mm(n,e){let t=X(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new il,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Fl(a,`Initialization of query '${pr(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Ul(t)}async function gm(n,e){let t=X(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sI(n,e){let t=X(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let u of a.wa)u.Ca(i)&&(r=!0);a.ya=i}}r&&Ul(t)}function oI(n,e,t){let r=X(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function Ul(n){n.Da.forEach(e=>{e.next()})}var ol,Zf;(Zf=ol||(ol={})).Fa="default",Zf.Cache="cache";var xo=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ol.Cache}};var Vo=class{constructor(e){this.key=e}},Lo=class{constructor(e){this.key=e}},al=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=oe(),this.mutatedKeys=oe(),this.Xa=jp(e),this.eu=new No(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new Oo,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,v)=>{let E=i.get(p),k=Jo(this.query,v)?v:null,L=!!E&&this.mutatedKeys.has(E.key),j=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),M=!1;E&&k?E.data.isEqual(k.data)?L!==j&&(r.track({type:3,doc:k}),M=!0):this.iu(E,k)||(r.track({type:2,doc:k}),M=!0,(l&&this.Xa(k,l)>0||d&&this.Xa(k,d)<0)&&(u=!0)):!E&&k?(r.track({type:0,doc:k}),M=!0):E&&!k&&(r.track({type:1,doc:E}),M=!0,(l||d)&&(u=!0)),M&&(k?(a=a.add(k),s=j?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let a=e.ru.pa();a.sort((p,v)=>function(k,L){let j=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:M})}};return j(k)-j(L)}(p.type,v.type)||this.Xa(p.doc,v.doc)),this.su(r),i=i!=null&&i;let u=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new xr(this.query,e.eu,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Oo,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=oe(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Lo(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Vo(r))}),t}uu(e){this.Ha=e.qs,this.Za=oe();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return xr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},Bl="SyncEngine",cl=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},ul=class{constructor(e){this.key=e,this.lu=!1}},ll=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new zt(u=>Bp(u),Qo),this.Tu=new Map,this.Iu=new Set,this.du=new Te(H.comparator),this.Eu=new Map,this.Au=new Li,this.Ru={},this.Vu=new Map,this.mu=Vi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function aI(n,e,t=!0){let r=Em(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await _m(r,e,t,!0),i}async function cI(n,e){let t=Em(n);await _m(t,e,!0,!1)}async function _m(n,e,t,r){let i=await $w(n.localStore,bt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),u;return r&&(u=await uI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&um(n.remoteStore,i),u}async function uI(n,e,t,r,i){n.gu=(v,E,k)=>async function(j,M,ee,Q){let J=M.view.nu(ee);J.Ds&&(J=await Kf(j.localStore,M.query,!1).then(({documents:T})=>M.view.nu(T,J)));let ae=Q&&Q.targetChanges.get(M.targetId),be=Q&&Q.targetMismatches.get(M.targetId)!=null,ie=M.view.applyChanges(J,j.isPrimaryClient,ae,be);return tp(j,M.targetId,ie._u),ie.snapshot}(n,v,E,k);let s=await Kf(n.localStore,e,!0),a=new al(e,s.qs),u=a.nu(s.documents),l=Oi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);tp(n,t,d._u);let p=new cl(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function lI(n,e,t){let r=X(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(a=>!Qo(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&xl(r.remoteStore,i.targetId),hl(r,i.targetId)}).catch(Fr)):(hl(r,i.targetId),await Gu(r.localStore,i.targetId,!0))}async function hI(n,e){let t=X(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xl(t.remoteStore,r.targetId))}async function dI(n,e,t){let r=vI(n);try{let i=await function(a,u){let l=X(a),d=ke.now(),p=u.reduce((k,L)=>k.add(L.key),oe()),v,E;return l.persistence.runTransaction("Locally write mutations","readwrite",k=>{let L=Gt(),j=oe();return l.Os.getEntries(k,p).next(M=>{L=M,L.forEach((ee,Q)=>{Q.isValidDocument()||(j=j.add(ee))})}).next(()=>l.localDocuments.getOverlayedDocuments(k,L)).next(M=>{v=M;let ee=[];for(let Q of u){let J=_w(Q,v.get(Q.key).overlayedDocument);J!=null&&ee.push(new Pt(Q.key,J,xp(J.value.mapValue),rt.exists(!0)))}return l.mutationQueue.addMutationBatch(k,d,ee,u)}).next(M=>{E=M;let ee=M.applyToLocalDocumentSet(v,j);return l.documentOverlayCache.saveOverlays(k,M.batchId,ee)})}).then(()=>({batchId:E.batchId,changes:zp(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new Te(te)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,i.batchId,t),await ji(r,i.changes),await Zo(r.remoteStore)}catch(i){let s=Fl(i,"Failed to persist write");t.reject(s)}}async function ym(n,e){let t=X(n);try{let r=await qw(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Eu.get(s);a&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?he(a.lu,14607):i.removedDocuments.size>0&&(he(a.lu,42227),a.lu=!1))}),await ji(t,r,e)}catch(r){await Fr(r)}}function ep(n,e,t){let r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,a)=>{let u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let l=X(a);l.onlineState=u;let d=!1;l.queries.forEach((p,v)=>{for(let E of v.wa)E.va(u)&&(d=!0)}),d&&Ul(l)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fI(n,e,t){let r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let a=new Te(H.comparator);a=a.insert(s,dt.newNoDocument(s,Z.min()));let u=oe().add(s),l=new vo(Z.min(),new Map,new Te(te),a,u);await ym(r,l),r.du=r.du.remove(s),r.Eu.delete(e),jl(r)}else await Gu(r.localStore,e,!1).then(()=>hl(r,e,t)).catch(Fr)}async function pI(n,e){let t=X(n),r=e.batch.batchId;try{let i=await jw(t.localStore,e);wm(t,r,null),vm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ji(t,i)}catch(i){await Fr(i)}}async function mI(n,e,t){let r=X(n);try{let i=await function(a,u){let l=X(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(v=>(he(v!==null,37113),p=v.keys(),l.mutationQueue.removeMutationBatch(d,v))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);wm(r,e,t),vm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ji(r,i)}catch(i){await Fr(i)}}function vm(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function wm(n,e,t){let r=X(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function hl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Im(n,r)})}function Im(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(xl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),jl(n))}function tp(n,e,t){for(let r of t)r instanceof Vo?(n.Au.addReference(r.key,e),gI(n,r)):r instanceof Lo?(z(Bl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Im(n,r.key)):K(19791,{yu:r})}function gI(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(z(Bl,"New document in limbo: "+t),n.Iu.add(r),jl(n))}function jl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new H(ve.fromString(e)),r=n.mu.next();n.Eu.set(r,new ul(t)),n.du=n.du.insert(t,r),um(n.remoteStore,new xi(bt(Ko(t.path)),r,"TargetPurposeLimboResolution",Er.ue))}}async function ji(n,e,t){let r=X(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let v=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,v?"current":"not-current")}if(d){i.push(d);let v=Bu.Es(l.targetId,d);s.push(v)}}))}),await Promise.all(a),r.hu.J_(i),await async function(l,d){let p=X(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>V.forEach(d,E=>V.forEach(E.Is,k=>p.persistence.referenceDelegate.addReference(v,E.targetId,k)).next(()=>V.forEach(E.ds,k=>p.persistence.referenceDelegate.removeReference(v,E.targetId,k)))))}catch(v){if(!Ur(v))throw v;z(Ol,"Failed to update sequence numbers: "+v)}for(let v of d){let E=v.targetId;if(!v.fromCache){let k=p.Fs.get(E),L=k.snapshotVersion,j=k.withLastLimboFreeSnapshotVersion(L);p.Fs=p.Fs.insert(E,j)}}}(r.localStore,s))}async function _I(n,e){let t=X(n);if(!t.currentUser.isEqual(e)){z(Bl,"User change. New user:",e.toKey());let r=await am(t.localStore,e);t.currentUser=e,function(s,a){s.Vu.forEach(u=>{u.forEach(l=>{l.reject(new G(D.CANCELLED,a))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ji(t,r.Bs)}}function yI(n,e){let t=X(n),r=t.Eu.get(e);if(r&&r.lu)return oe().add(r.key);{let i=oe(),s=t.Tu.get(e);if(!s)return i;for(let a of s){let u=t.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}function Em(n){let e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ym.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fI.bind(null,e),e.hu.J_=sI.bind(null,e.eventManager),e.hu.pu=oI.bind(null,e.eventManager),e}function vI(n){let e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mI.bind(null,e),e}var Vr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Bw(this.persistence,new qu,e.initialUser,this.serializer)}Du(e){return new Ao(Uu.Vi,this.serializer)}bu(e){return new $u}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Vr.provider={build:()=>new Vr};var dl=class extends Vr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){he(this.persistence.referenceDelegate instanceof So,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new Su(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new Ao(r=>So.Vi(r,t),this.serializer)}};var Mi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ep(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_I.bind(null,this.syncEngine),await iI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sl}()}createDatastore(e){let t=Yo(e.databaseInfo.databaseId),r=function(s){return new Ju(s)}(e.databaseInfo);return function(s,a,u,l){return new el(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new nl(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>ep(this.syncEngine,t,0),function(){return Po.C()?new Po:new Hu}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,p){let v=new ll(i,s,a,u,l,d);return p&&(v.fu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=X(i);z(Gn,"RemoteStore shutting down."),s.Ia.add(5),await Bi(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Mi.provider={build:()=>new Mi};var Mo=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Bt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var pn="FirestoreClient",fl=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=Pi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{z(pn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z(pn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Fl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Fc(n,e){n.asyncQueue.verifyOperationInProgress(),z(pn,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await am(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{hn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{z("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{hn("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function np(n,e){n.asyncQueue.verifyOperationInProgress();let t=await wI(n);z(pn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Yf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Yf(e.remoteStore,i)),n._onlineComponents=e}async function wI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(pn,"Using user provided OfflineComponentProvider");try{await Fc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await Fc(n,new Vr)}}else z(pn,"Using default OfflineComponentProvider"),await Fc(n,new dl(void 0));return n._offlineComponents}async function Tm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(pn,"Using user provided OnlineComponentProvider"),await np(n,n._uninitializedComponentsProvider._online)):(z(pn,"Using default OnlineComponentProvider"),await np(n,new Mi))),n._onlineComponents}function II(n){return Tm(n).then(e=>e.syncEngine)}async function pl(n){let e=await Tm(n),t=e.eventManager;return t.onListen=aI.bind(null,e.syncEngine),t.onUnlisten=lI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hI.bind(null,e.syncEngine),t}function EI(n,e,t={}){let r=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){let p=new Mo({next:E=>{p.Ou(),a.enqueueAndForget(()=>gm(s,v));let k=E.docs.has(u);!k&&E.fromCache?d.reject(new G(D.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&l&&l.source==="server"?d.reject(new G(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),v=new xo(Ko(u.path),p,{includeMetadataChanges:!0,ka:!0});return mm(s,v)}(await pl(n),n.asyncQueue,e,t,r)),r.promise}function bm(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var rp=new Map;var Am="firestore.googleapis.com",ip=!0,Fo=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Am,this.ssl=ip}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ip;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=om;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mw)throw new G(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Lr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bc;switch(r.type){case"firstParty":return new Gc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=rp.get(t);r&&(z("ComponentProvider","Removing Datastore"),rp.delete(t),r.terminate())}(this),Promise.resolve()}};function TI(n,e,t,r={}){var i;n=nt(n,Lr);let s=Yt(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(gs(`https://${l}`),_s("Firestore",!0)),a.host!==Am&&a.host!==l&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let d=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!mt(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,v;if(typeof r.mockUserToken=="string")p=r.mockUserToken,v=Le.MOCK_USER;else{p=zh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new G(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Le(E)}n._authCredentials=new jc(new lo(p,v))}}var Uo=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Fe=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ui(t,n._jsonSchema))return new n(e,r||null,new H(ve.fromString(t.referencePath)))}};Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:Ce("string",Fe._jsonSchemaVersion),referencePath:Ce("string")};var an=class n extends Uo{constructor(e,t,r){super(e,t,Ko(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new H(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Sm(n,e,...t){if(n=ye(n),lp("collection","path",e),n instanceof Lr){let r=ve.fromString(e,...t);return Tf(r),new an(n,null,r)}{if(!(n instanceof Fe||n instanceof an))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ve.fromString(e,...t));return Tf(r),new an(n.firestore,null,r)}}function ql(n,e,...t){if(n=ye(n),arguments.length===1&&(e=Pi.newId()),lp("doc","path",e),n instanceof Lr){let r=ve.fromString(e,...t);return Ef(r),new Fe(n,null,new H(r))}{if(!(n instanceof Fe||n instanceof an))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(ve.fromString(e,...t));return Ef(r),new Fe(n.firestore,n instanceof an?n.converter:null,new H(r))}}var sp="AsyncQueue",Bo=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Co(this,"async_queue_retry"),this.oc=()=>{let r=Mc();r&&z(sp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=Mc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=Mc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new Et;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ur(e))throw e;z(sp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Bt("INTERNAL UNHANDLED ERROR: ",op(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=rl.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&K(47125,{hc:op(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function op(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function ap(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var ft=class extends Lr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Bo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Bo(e),this._firestoreClient=void 0,await e}}};function Rm(n,e){let t=typeof n=="object"?n:Is(),r=typeof n=="string"?n:e||go,i=oi(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=qh("firestore");s&&TI(i,...s)}return i}function ea(n){if(n._terminated)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bI(n),n._firestoreClient}function bI(n){var e,t,r;let i=n._freezeSettings(),s=function(u,l,d,p){return new Qc(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,bm(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new fl(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){let l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}var cn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(He.fromBase64String(e))}catch(t){throw new G(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ui(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:Ce("string",cn._jsonSchemaVersion),bytes:Ce("string")};var $n=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Fi=class{constructor(e){this._methodName=e}};var un=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(Ui(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Ce("string",un._jsonSchemaVersion),latitude:Ce("number"),longitude:Ce("number")};var ln=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ui(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new G(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:Ce("string",ln._jsonSchemaVersion),vectorValues:Ce("object")};var AI=/^__.*__$/,ml=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms):new zn(e,this.data,t,this.fieldTransforms)}},jo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Pt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function Pm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:n})}}var gl=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return zo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Pm(this.Ec)&&AI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},_l=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yo(e)}Dc(e,t,r,i=!1){return new gl({Ec:e,methodName:t,bc:r,path:tt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function ta(n){let e=n._freezeSettings(),t=Yo(n._databaseId);return new _l(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zl(n,e,t,r,i,s={}){let a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);Gl("Data must be an object, but it was:",a,r);let u=Dm(r,a),l,d;if(s.merge)l=new at(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let v of s.mergeFields){let E=yl(e,v,t);if(!a.contains(E))throw new G(D.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Om(p,E)||p.push(E)}l=new at(p),d=a.fieldTransforms.filter(v=>l.covers(v.field))}else l=null,d=a.fieldTransforms;return new ml(new et(u),l,d)}var qo=class n extends Fi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Cm(n,e,t,r){let i=n.Dc(1,e,t);Gl("Data must be an object, but it was:",i,r);let s=[],a=et.empty();mn(r,(l,d)=>{let p=$l(e,l,t);d=ye(d);let v=i.gc(p);if(d instanceof qo)s.push(p);else{let E=na(d,v);E!=null&&(s.push(p),a.set(p,E))}});let u=new at(s);return new jo(a,u,i.fieldTransforms)}function km(n,e,t,r,i,s){let a=n.Dc(1,e,t),u=[yl(e,r,t)],l=[i];if(s.length%2!=0)throw new G(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<s.length;E+=2)u.push(yl(e,s[E])),l.push(s[E+1]);let d=[],p=et.empty();for(let E=u.length-1;E>=0;--E)if(!Om(d,u[E])){let k=u[E],L=l[E];L=ye(L);let j=a.gc(k);if(L instanceof qo)d.push(k);else{let M=na(L,j);M!=null&&(d.push(k),p.set(k,M))}}let v=new at(d);return new jo(p,v,a.fieldTransforms)}function na(n,e){if(Nm(n=ye(n)))return Gl("Unsupported field value:",e,n),Dm(n,e);if(n instanceof Fi)return function(r,i){if(!Pm(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let u of r){let l=na(u,i.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=ke.fromDate(r);return{timestampValue:To(i.serializer,s)}}if(r instanceof ke){let s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:To(i.serializer,s)}}if(r instanceof un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:Zp(i.serializer,r._byteString)};if(r instanceof Fe){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ln)return function(a,u){return{mapValue:{fields:{[Sl]:{stringValue:Rl},[Tr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Dl(u.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Tl(r)}`)}(n,e)}function Dm(n,e){let t={};return Sp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,(r,i)=>{let s=na(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Nm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof un||n instanceof cn||n instanceof Fe||n instanceof Fi||n instanceof ln)}function Gl(n,e,t){if(!Nm(t)||!hp(t)){let r=Tl(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function yl(n,e,t){if((e=ye(e))instanceof $n)return e._internalPath;if(typeof e=="string")return $l(n,e);throw zo("Field path arguments must be of type string or ",n,!1,void 0,t)}var SI=new RegExp("[~\\*/\\[\\]]");function $l(n,e,t){if(e.search(SI)>=0)throw zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $n(...e.split("."))._internalPath}catch{throw zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zo(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new G(D.INVALID_ARGUMENT,u+n+l)}function Om(n,e){return n.some(t=>t.isEqual(e))}var Go=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new vl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(xm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},vl=class extends Go{data(){return super.data()}};function xm(n,e){return typeof e=="string"?$l(n,e):e instanceof $n?e._internalPath:e._delegate._internalPath}function RI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var wl=class{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return mn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Tr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>_e(a.doubleValue));return new ln(s)}convertGeoPoint(e){return new un(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Wo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){let t=jt(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ve.fromString(e);he(sm(r),9688,{name:e});let i=new _o(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||Bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function Hl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Mn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Fn=class n extends Go{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(xm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};Fn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fn._jsonSchema={type:Ce("string",Fn._jsonSchemaVersion),bundleSource:Ce("string","DocumentSnapshot"),bundleName:Ce("string"),bundle:Ce("string")};var vr=class extends Fn{data(e={}){return super.data(e)}},wr=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Mn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new vr(this._firestore,this._userDataWriter,r.key,r,new Mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let l=new vr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Mn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{let l=new vr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Mn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:PI(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function PI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}function Vm(n){n=nt(n,Fe);let e=nt(n.firestore,ft);return EI(ea(e),n._key).then(t=>jm(e,n,t))}wr._jsonSchemaVersion="firestore/querySnapshot/1.0",wr._jsonSchema={type:Ce("string",wr._jsonSchemaVersion),bundleSource:Ce("string","QuerySnapshot"),bundleName:Ce("string"),bundle:Ce("string")};var $o=class extends wl{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,t)}};function Lm(n,e,t){n=nt(n,Fe);let r=nt(n.firestore,ft),i=Hl(n.converter,e,t);return qi(r,[zl(ta(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,rt.none())])}function Mm(n,e,t,...r){n=nt(n,Fe);let i=nt(n.firestore,ft),s=ta(i),a;return a=typeof(e=ye(e))=="string"||e instanceof $n?km(s,"updateDoc",n._key,e,t,r):Cm(s,"updateDoc",n._key,e),qi(i,[a.toMutation(n._key,rt.exists(!0))])}function Fm(n){return qi(nt(n.firestore,ft),[new Or(n._key,rt.none())])}function Um(n,e){let t=nt(n.firestore,ft),r=ql(n),i=Hl(n.converter,e);return qi(t,[zl(ta(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,rt.exists(!1))]).then(()=>r)}function Bm(n,...e){var t,r,i;n=ye(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ap(e[a])||(s=e[a++]);let u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(ap(e[a])){let v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let l,d,p;if(n instanceof Fe)d=nt(n.firestore,ft),p=Ko(n._key.path),l={next:v=>{e[a]&&e[a](jm(d,n,v))},error:e[a+1],complete:e[a+2]};else{let v=nt(n,Uo);d=nt(v.firestore,ft),p=v._query;let E=new $o(d);l={next:k=>{e[a]&&e[a](new wr(d,E,v,k))},error:e[a+1],complete:e[a+2]},RI(n._query)}return function(E,k,L,j){let M=new Mo(j),ee=new xo(k,M,L);return E.asyncQueue.enqueueAndForget(async()=>mm(await pl(E),ee)),()=>{M.Ou(),E.asyncQueue.enqueueAndForget(async()=>gm(await pl(E),ee))}}(ea(d),p,u,l)}function qi(n,e){return function(r,i){let s=new Et;return r.asyncQueue.enqueueAndForget(async()=>dI(await II(r),i,s)),s.promise}(ea(n),e)}function jm(n,e,t){let r=t.docs.get(e._key),i=new $o(n);return new Fn(n,i,e._key,r,new Mn(t.hasPendingWrites,t.fromCache),e.converter)}var Il=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ta(e)}set(e,t,r){this._verifyNotCommitted();let i=Uc(e,this._firestore),s=Hl(i.converter,t,r),a=zl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,rt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let s=Uc(e,this._firestore),a;return a=typeof(t=ye(t))=="string"||t instanceof $n?km(this._dataReader,"WriteBatch.update",s._key,t,r,i):Cm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,rt.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Uc(e,this._firestore);return this._mutations=this._mutations.concat(new Or(t._key,rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Uc(n,e){if((n=ye(n)).firestore!==e)throw new G(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function qm(n){return ea(n=nt(n,ft)),new Il(n,e=>qi(n,e))}(function(e,t=!0){(function(i){Mr=i})(tn),en(new st("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),u=new ft(new qc(r.getProvider("auth-internal")),new $c(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),lt(yf,vf,e),lt(yf,vf,"esm2017")})();function CI(n){let e=Ha(n);return{auth:Pc(e),db:Rm(e)}}var Qe={pair:"2111",two:"221",trio:"311",full:"32",quad:"41",penta:"5",diff:"11111"},Qm=[{k:"sum_low",t:"Extremo baixo",s:"Soma 5\u201310",p:"28:1",f:n=>n.sum<=10?28:null},{k:"sum_small",t:"Pequeno",s:"Soma 5\u201317",p:"1:1",f:n=>!n.penta&&n.sum<=17?1:null},{k:"sum_even",t:"Par",s:"Soma par",p:"1:1",f:n=>!n.penta&&n.sum%2===0?1:null},{k:"sum_mid",t:"Central",s:"Soma 17 ou 18",p:"7:2",f:n=>n.sum===17||n.sum===18?3.5:null,hot:!0},{k:"sum_odd",t:"\xCDmpar",s:"Soma \xEDmpar",p:"1:1",f:n=>!n.penta&&n.sum%2===1?1:null},{k:"sum_big",t:"Grande",s:"Soma 18\u201330",p:"1:1",f:n=>!n.penta&&n.sum>=18?1:null},{k:"sum_high",t:"Extremo alto",s:"Soma 26\u201330",p:"28:1",f:n=>n.sum>=26?28:null}],Jm=[{k:"c_pair",t:"Par",s:"S\xF3 um par",p:"11:10",f:n=>n.pat===Qe.pair?1.1:null},{k:"c_two",t:"Dois pares",s:"2 + 2",p:"3:1",f:n=>n.pat===Qe.two?3:null},{k:"c_trio",t:"Trio",s:"3 iguais",p:"5:1",f:n=>n.pat===Qe.trio?5:null},{k:"c_full",t:"Full house",s:"Trio + par",p:"24:1",f:n=>n.pat===Qe.full?24:null},{k:"c_quad",t:"Quadra",s:"4 iguais",p:"48:1",f:n=>n.pat===Qe.quad?48:null},{k:"c_penta",t:"Penta",s:"5 iguais",p:"1200:1",f:n=>n.pat===Qe.penta?1200:null,hot:!0},{k:"c_diff",t:"Todos diferentes",s:"Nenhum repetido",p:"9:1",f:n=>n.pat===Qe.diff?9:null},{k:"s3",t:"Sequ\xEAncia de 3",s:"3 seguidos",p:"6:5",f:n=>n.run(3)?1.2:null},{k:"s4",t:"Sequ\xEAncia de 4",s:"4 seguidos",p:"5:1",f:n=>n.run(4)?5:null},{k:"s5",t:"Sequ\xEAncia de 5",s:"1 a 5 ou 2 a 6",p:"30:1",f:n=>n.run(5)?30:null}],kI=[null,0,1,4,20,100],Qn=[];for(let n=1;n<=6;n++)Qn.push({k:"n"+n+"_1",n,single:!0,t:"N\xFAmero "+n,s:"Casa do dado",p:"1 dado devolve",f:e=>kI[e.c[n]]}),Qn.push({k:"n"+n+"_2",n,t:"Pelo menos 2",p:"4:1",f:e=>e.c[n]>=2?4:null}),Qn.push({k:"n"+n+"_3",n,t:"Pelo menos 3",p:"25:1",f:e=>e.c[n]>=3?25:null}),Qn.push({k:"n"+n+"_4",n,t:"Pelo menos 4",p:"280:1",f:e=>e.c[n]>=4?280:null}),Qn.push({k:"n"+n+"_5",n,t:"Penta de "+n,p:"7500:1",f:e=>e.c[n]===5?7500:null,hot:!0});var Ym=[...Qm,...Jm,...Qn],Ke=Object.fromEntries(Ym.map(n=>[n.k,n])),Wn=n=>n.n&&!n.single?n.t+" de "+n.n:n.t;function $i(n){let e=[0,0,0,0,0,0,0];n.forEach(s=>e[s]++);let t=e.slice(1).filter(Boolean).sort((s,a)=>a-s).join(""),r=n.reduce((s,a)=>s+a,0);return{c:e,pat:t,sum:r,run:s=>{for(let a=1;a<=7-s;a++){let u=!0;for(let l=0;l<s;l++)if(!e[a+l]){u=!1;break}if(u)return!0}return!1},penta:t===Qe.penta}}var DI=(n,e)=>e==null?0:n+Math.floor(n*e+1e-9);function Kl(n){let e={[Qe.pair]:"Par",[Qe.two]:"Dois pares",[Qe.trio]:"Trio",[Qe.full]:"Full house",[Qe.quad]:"Quadra",[Qe.penta]:"Penta",[Qe.diff]:"Todos diferentes"},t=["Soma "+n.sum,e[n.pat]];return n.run(5)?t.push("Sequ\xEAncia de 5"):n.run(4)?t.push("Sequ\xEAncia de 4"):n.run(3)&&t.push("Sequ\xEAncia de 3"),t.join(" \xB7 ")}var oa=[];for(let n=1;n<=6;n++)for(let e=1;e<=6;e++)for(let t=1;t<=6;t++)for(let r=1;r<=6;r++)for(let i=1;i<=6;i++)oa.push($i([n,e,t,r,i]));function Xm(n,e){let t=1;for(let r of n){let i=Ke[r].f(e);if(i==null)return 0;t*=i+1}return t}var Ql=new Map;function Xl(n){let e=n.slice().sort().join("|");if(Ql.has(e))return Ql.get(e);let t=0,r=0,i=0;for(let a of oa){let u=Xm(n,a);u>0&&(t++,r+=u,u>i&&(i=u))}let s={p:t/oa.length,ev:r/oa.length,max:i};return Ql.set(e,s),s}function Jl(n){if(!Array.isArray(n)||n.length<2||n.length>6)return"A m\xFAltipla precisa de 2 a 6 sele\xE7\xF5es";if(new Set(n).size!==n.length||n.some(t=>!Ke[t]))return"Sele\xE7\xF5es inv\xE1lidas";let e=Xl(n);return e.p===0?"Estas sele\xE7\xF5es n\xE3o podem ganhar ao mesmo tempo":e.ev>=1?"Combina\xE7\xE3o n\xE3o permitida: as sele\xE7\xF5es dependem umas das outras e a m\xFAltipla pagaria acima do justo":null}var jr=["#E8C46A","#7FC8F8","#F4A99B","#B5E48C","#D7A6F5","#F9B46B","#8EE3D3","#FFFFFF","#F5E663","#A0B4FF"],Yl=[{v:1,bg:"#FFFFFF",fg:"#1B1B1B"},{v:5,bg:"#C62828",fg:"#FFFFFF"},{v:10,bg:"#1A2F6B",fg:"#FFFFFF"},{v:25,bg:"#2E8B57",fg:"#FFFFFF"},{v:100,bg:"#111111",fg:"#FFFFFF"},{v:500,bg:"#6A3BA8",fg:"#FFFFFF"},{v:1e3,bg:"#F2C200",fg:"#1B1B1B"}],Zl={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},x=n=>document.getElementById(n),ue=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),W=n=>Number(n).toLocaleString("pt-PT"),zm=n=>n.toLocaleString("pt-PT",{maximumFractionDigits:2}),Gm=n=>JSON.parse(JSON.stringify(n));function zi(n,e){let t='<span class="die '+(e||"")+(n?"":" empty")+'" aria-hidden="true">';for(let r=0;r<9;r++)t+='<i class="'+(n&&Zl[n].includes(r)?"on":"")+'"></i>';return t+"</span>"}var $m=null;function me(n){let e=x("toast");e.textContent=n,e.hidden=!1,clearTimeout($m),$m=setTimeout(()=>e.hidden=!0,2600)}var Hm={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}}};function Gi(){let n=new Uint8Array(1);for(;;)if(crypto.getRandomValues(n),n[0]<252)return n[0]%6+1}var NI=()=>[Gi(),Gi(),Gi(),Gi(),Gi()],Wm="@jogadores.sicbo",OI=/^[A-Za-z0-9_.-]{3,20}$/,ra={rounds:0,staked:0,returned:0,best:0},Km=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,xI=n=>new Promise(e=>setTimeout(e,n));function VI(n){let e=n&&n.code||"";return e.includes("email-already-in-use")?"Esse utilizador j\xE1 existe. Escolha outro nome ou entre com a palavra-passe.":e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Utilizador ou palavra-passe errados.":e.includes("weak-password")?"A palavra-passe precisa de pelo menos 6 caracteres.":e.includes("too-many-requests")?"Demasiadas tentativas. Espere um pouco e tente de novo.":e.includes("operation-not-allowed")?"O in\xEDcio de sess\xE3o com palavra-passe n\xE3o est\xE1 ativo no Firebase (passo 1 do guia de atualiza\xE7\xE3o).":e.includes("network")?"Sem liga\xE7\xE3o. Tente outra vez.":"N\xE3o foi poss\xEDvel entrar ("+(e||"erro")+")."}var ia={v:5e3,bg:"#7B4A26",fg:"#F3E3C8"},aa=[{id:"t_montecarlo",kind:"theme",name:"Monte Carlo",desc:"Azul-noite e dourado, como o casino do M\xF3naco.",price:1500,sw:["#13294B","#D9B65D","#F2E8D0"]},{id:"t_roleta",kind:"theme",name:"Roleta Vermelha",desc:"Vermelho-vinho com detalhes a ouro.",price:2e3,sw:["#5C1A1F","#E8C46A","#F6E7D2"]},{id:"t_vegas",kind:"theme",name:"Vegas Neon",desc:"Roxo de madrugada e n\xE9on rosa da Strip.",price:2500,sw:["#2A0E3F","#FF4FD8","#F9E7FF"]},{id:"t_ebano",kind:"theme",name:"Mesa de \xC9bano",desc:"Preto e prata da sala VIP.",price:3e3,sw:["#1B1B1D","#C9CED6","#E6E6E6"]},{id:"t_ouro",kind:"theme",name:"Ouro Real",desc:"Castanho e ouro para os grandes apostadores.",price:5e3,sw:["#3B2A14","#FFD54A","#F5E6C4"]},{id:"c_ouro",kind:"color",name:"Dourado 24k",price:500,hex:"#FFD54A"},{id:"c_rubi",kind:"color",name:"Rubi",price:500,hex:"#E0115F"},{id:"c_esmeralda",kind:"color",name:"Esmeralda",price:500,hex:"#2ECC71"},{id:"c_safira",kind:"color",name:"Safira",price:500,hex:"#4C8DFF"},{id:"c_platina",kind:"color",name:"Platina",price:750,hex:"#E5E4E2"},{id:"c_neon",kind:"color",name:"Rosa n\xE9on",price:750,hex:"#FF4FD8"},{id:"f_5k",kind:"chip",name:"Ficha de 5 000",desc:"Ficha castanha para apostas grandes. Aparece na sua barra de fichas e na sua torre.",price:5e3}],Kn=Object.fromEntries(aa.map(n=>[n.id,n])),sa=String((window.SICBO_CONFIG||{}).nome||"SIC BO \xB7 5 DADOS").slice(0,40);function Zm(n){document.title=sa;let e=(window.SICBO_CONFIG||{}).firebase,t=x("app");if(!e||!e.apiKey||String(e.apiKey).includes("COLE")){t.innerHTML='<section class="card narrow"><h2>Falta configurar</h2><p>Abra o ficheiro <b>config.js</b> e cole a configura\xE7\xE3o do seu projeto Firebase, como explicado no guia.</p></section>';return}let{auth:r,db:i}=n.init(e),s={user:null,uid:null,game:void 0,players:{},bets:[],users:{},role:Hm.get("sicbo5-role")||"player",authReady:!1},a={ptab:"apostar",chip:25,mode:"bet",legs:[],stake:0,dice:[],tab:"mesa",busy:!1,authTab:"login"},u={game:n.doc(i,"games","main"),players:n.collection(i,"players"),bets:n.collection(i,"bets"),users:n.collection(i,"users")},l=m=>(m&&m.code==="permission-denied"?"A\xE7\xE3o recusada pelo servidor":"Sem liga\xE7\xE3o. Tente outra vez.")+(m&&m.code?" ["+m.code+"]":""),d=m=>{console.error(m),me(l(m))},p=[],v=()=>{p.forEach(m=>{try{m()}catch{}}),p=[]};function E(){p.push(n.onSnapshot(u.game,m=>{s.game=m.exists()?m.data():null,$r(),se()},d)),p.push(n.onSnapshot(u.players,m=>{let _={};m.docs.forEach(I=>_[I.id]={id:I.id,...I.data()}),s.players=_,se()},d)),p.push(n.onSnapshot(u.bets,m=>{s.bets=m.docs.map(_=>({id:_.id,..._.data()})).sort((_,I)=>_.ts-I.ts),se()},d)),p.push(n.onSnapshot(u.users,m=>{let _={};m.docs.forEach(I=>_[I.id]={id:I.id,...I.data()}),s.users=_,s.usersLoaded=!0,ee(),se()},d))}n.onAuthStateChanged(r,m=>{let _=(m?m.uid:null)===s.uid&&s.authReady;if(s.authReady=!0,!_){if(v(),_n="",s.user=m||null,s.uid=m?m.uid:null,s.game=void 0,s.players={},s.bets=[],s.users={},s.usersLoaded=!1,Be.init=!1,!m){a.authTab="login",se();return}E(),se()}});let k=()=>s.role==="bank"&&j()?"bank":"player",L=(m,_)=>{m._last!==_&&(m._last=_,m.innerHTML=_)},j=()=>!!(s.user&&!s.user.isAnonymous&&s.users[s.uid]&&s.users[s.uid].role==="admin"),M=!1;async function ee(){let m=s.user;if(!m||m.isAnonymous||!s.usersLoaded||s.users[m.uid]||M)return;M=!0;let _=Q&&Q.toLowerCase()+Wm===(m.email||"").toLowerCase()?Q:(m.email||"").split("@")[0];try{await n.setDoc(n.doc(i,"users",m.uid),{name:_,color:jr[Math.floor(Math.random()*jr.length)],created:Date.now(),stats:{...ra}})}catch(I){d(I)}M=!1}let Q=null,J=()=>s.players[s.uid]||null,ae=()=>s.users[s.uid]||null,be=m=>s.bets.filter(_=>_.uid===m&&s.game&&_.round===s.game.round),ie=m=>be(m).reduce((_,I)=>_+I.a,0),T=m=>{let _=s.players[m];return _?_.chips-ie(m):0},g=()=>s.game&&s.game.maxBet>0?s.game.maxBet:0,w=(m,_)=>be(m).filter(I=>I.kind==="s"&&I.k===_).reduce((I,R)=>I+R.a,0),b=m=>{let _=g();if(!_)return!1;let I={};for(let R of be(m))if(R.kind==="m"){if(R.a>_)return!0}else if(I[R.k]=(I[R.k]||0)+R.a,I[R.k]>_)return!0;return!1},A=()=>g()?"M\xE1ximo por aposta: "+W(g())+" fichas":"Sem m\xE1ximo por aposta",P=m=>s.users[m]&&s.users[m].owned||[],y=(m,_)=>P(_||s.uid).includes(m);function ct(){let m=s.user&&!s.user.isAnonymous?s.users[s.uid]:null,_=m&&m.theme&&m.theme!=="classico"&&(m.owned||[]).includes(m.theme)?m.theme.slice(2):"";(document.documentElement.dataset.skin||"")!==_&&(_?document.documentElement.dataset.skin=_:delete document.documentElement.dataset.skin)}function gn(m,_){let I=Math.max(0,Math.floor(m)),R=[];for(let O of(_?Yl.concat(ia):Yl).slice().reverse()){let N=Math.floor(I/O.v);N>0&&(R.push({c:O,k:N}),I-=N*O.v)}return R.length?'<div class="tower" aria-hidden="true">'+R.map(({c:O,k:N})=>{let q=Math.min(N,14),F="";for(let Y=0;Y<q;Y++)F+='<i style="background:repeating-linear-gradient(90deg,'+O.bg+" 0 6px,"+O.fg+" 6px 8px) center/100% 3px no-repeat,"+O.bg+'"></i>';return'<div class="tstack"><div class="tchips">'+F+'</div><span class="tlab num">'+N+"\xD7"+(O.v>=1e3?O.v/1e3+"k":O.v)+"</span></div>"}).join("")+"</div>":'<div class="tower empty"><span class="note">Sem fichas</span></div>'}function Hi(){let m=pt();return m.length?'<div class="felt"><span class="bankpill">Banca</span><div class="seats">'+m.map(_=>{let I=ie(_.id),R=_.chips-I;return'<div class="seat'+(_.id===s.uid?" you":"")+'"><div class="sname"><span class="dot" style="background:'+_.color+'"></span><b>'+ue(_.name)+"</b>"+(_.id===s.uid?' <span class="note">(voc\xEA)</span>':"")+"</div>"+gn(R,y("f_5k",_.id))+'<div class="samt num">'+W(R)+" fichas</div>"+(I?'<div class="note num">'+W(I)+" em jogo</div>":'<div class="note">&nbsp;</div>')+"</div>"}).join("")+"</div></div>":'<div class="felt"><span class="bankpill">Banca</span><p class="note">Ainda n\xE3o se sentou ningu\xE9m.</p></div>'}let pt=()=>Object.values(s.players).sort((m,_)=>m.joined-_.joined),$t=m=>s.players[m]?s.players[m].color:"#999",qr=m=>s.players[m]?s.players[m].name:"Jogador que saiu",_n="";function ca(){return s.authReady?!s.user||s.user.isAnonymous?"login":s.game===void 0||!s.usersLoaded?"connecting":s.role==="bank"&&j()?s.game?"bank":"openTable":s.game?J()?"player":"sit":"noGame":"connecting"}function se(){let m=ca();m!==_n&&(_n=m,a.legs=[],a.mode="bet",t.innerHTML=la[m](),ha(m)),Gr[m]&&Gr[m](),ua(),ct()}let we=()=>'<span class="rolelink" data-rolelink></span>';function ua(){let m=j()?k()==="bank"?'<button class="link" data-act="role" data-v="player">Jogar como jogador</button>':'<button class="link" data-act="role" data-v="bank">Ir para a banca</button>':"";document.querySelectorAll("[data-rolelink]").forEach(_=>{_.innerHTML!==m&&(_.innerHTML=m)})}let Ht=()=>{let m=(I,R)=>'<button class="zone '+(R||"")+(I.hot?" hot":"")+'" data-act="zone" data-k="'+I.k+'" id="z-'+I.k+'" aria-label="'+ue(Wn(I))+", paga "+ue(I.p)+'">'+(I.single?zi(I.n):'<span class="z-t">'+ue(I.t)+"</span>")+(I.s?'<span class="z-s">'+ue(I.s)+"</span>":"")+'<span class="z-p">'+ue(I.p)+'</span><span class="stack" id="st-'+I.k+'"></span></button>',_="";for(let I=1;I<=6;I++){let R=Qn.filter(O=>O.n===I);_+='<div class="ncol">'+m(R[0],"single")+R.slice(1).map(O=>m(O,"row")).join("")+"</div>"}return'<section class="sec"><div class="sec-h"><h2>Somas dos 5 dados</h2><span class="note">Pequeno, Grande, Par e \xCDmpar perdem se sair penta</span></div><div class="grid g-sum">'+Qm.map(I=>m(I)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Combina\xE7\xF5es e sequ\xEAncias</h2><span class="note">Cada combina\xE7\xE3o paga s\xF3 a sua casa \xB7 sequ\xEAncias: pelo menos esses n\xFAmeros seguidos</span></div><div class="grid g-combo">'+Jm.map(I=>m(I)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Aposta num n\xFAmero</h2><span class="note">Casa do dado: 1 dado devolve \xB7 2 \u2192 1:1 \xB7 3 \u2192 4:1 \xB7 4 \u2192 20:1 \xB7 5 \u2192 100:1</span></div><div class="grid g-num">'+_+"</div></section>"},Wi=m=>"<header><h1>"+ue(sa)+'</h1><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span>'+(m||"")+"</div></header>",yn=()=>Yl.concat(ia).map(m=>'<button class="chip num'+(m.v>=1e3?" big":"")+'" data-act="chip" data-v="'+m.v+'" id="chip-'+m.v+'" style="background:'+m.bg+";color:"+m.fg+'" aria-label="Ficha de '+m.v+'">'+(m.v>=5e3?"5k":m.v)+"</button>").join(""),la={connecting:()=>'<section class="card narrow"><p>A ligar \xE0 mesa\u2026</p></section>',login:()=>'<section class="card narrow"><h1 class="big">'+ue(sa)+'</h1><div class="seg" role="tablist"><button role="tab" data-act="authTab" data-v="login" id="at-login">Entrar</button><button role="tab" data-act="authTab" data-v="new" id="at-new">Criar conta</button></div><form id="authForm" class="stack-form"><label for="aUser">Utilizador</label><input class="field" id="aUser" maxlength="20" required autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Ex.: rita"><label for="aPass">Palavra-passe</label><input class="field" id="aPass" type="password" minlength="6" required autocomplete="current-password"><div id="aPass2Wrap" hidden class="stack-form"><label for="aPass2">Repetir palavra-passe</label><input class="field" id="aPass2" type="password" minlength="6" autocomplete="new-password"></div><button class="btn primary" type="submit" id="aSubmit">Entrar</button></form><p class="note" id="authNote" role="alert"></p><p class="note">A conta fica guardada: entra com ela em qualquer telem\xF3vel e mant\xE9m o saldo e as estat\xEDsticas.</p></section>',openTable:()=>'<section class="card narrow"><h1 class="big">Abrir a mesa</h1><form id="openForm" class="stack-form"><label for="init">Fichas iniciais por jogador</label><input class="field num" id="init" type="number" min="0" step="5" value="1000" inputmode="numeric"><button class="btn primary" type="submit">Abrir a mesa</button></form><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+we()+"</div></section>",noGame:()=>'<section class="card narrow"><h2>A mesa ainda n\xE3o est\xE1 aberta</h2><p>Quando a banca abrir a mesa, esta p\xE1gina atualiza sozinha.</p><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+we()+"</div></section>",sit:()=>'<section class="card narrow"><h1 class="big">'+ue(sa)+'</h1><p id="sitHello"></p><button class="btn primary" data-act="sit" id="sitBtn">Sentar \xE0 mesa</button><div id="statsSit"></div><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+we()+"</div></section>",player:()=>Wi('<span class="me" id="meBox"></span>')+'<nav class="tabs" role="tablist"><button role="tab" data-act="ptab" data-v="apostar" id="pt-apostar">Apostar</button><button role="tab" data-act="ptab" data-v="mesa" id="pt-mesa">Mesa</button><button role="tab" data-act="ptab" data-v="loja" id="pt-loja">Loja</button></nav><div id="pp-loja" class="tabp" hidden><section class="shop"><div class="shop-h"><span class="shop-eyebrow">Loja</span><h2 class="shop-title">O Mateus Banca</h2><p class="note">Gaste as fichas da mesa em extras para a sua conta. O que comprar fica para sempre na conta, mesmo depois de uma nova partida.</p><div class="shop-bal" id="shopBal"></div></div><div id="shopBody"></div></section></div><div id="pp-mesa" class="tabp" hidden><section class="sec"><div class="sec-h"><h2>Jogadores sentados</h2><span class="note" id="maxNoteP"></span></div><div id="tableView"></div></section></div><div id="pp-apostar" class="tabp"><div class="banner" id="banner"></div>'+Ht()+'<section class="sec" id="myMultiSec" hidden><div class="sec-h"><h2>As minhas m\xFAltiplas</h2><span class="note">S\xF3 pagam se todas as sele\xE7\xF5es ganharem</span></div><div class="mlist" id="mlist"></div></section><section class="sec" id="resultSec" hidden><h2>\xDAltima ronda</h2><div class="read" id="resHead"></div><div class="res" id="res"></div></section><section class="panel"><div class="sec-h"><h2>A minha conta</h2><button class="link" data-act="logout">Sair da conta</button></div><div id="statsBox"></div></section><section class="sec"><div class="sec-h"><h2>Hist\xF3rico</h2>'+we()+'</div><ul class="hist" id="hist"></ul></section><div class="bar"><div class="bar-in"><div class="slip" id="slip" hidden></div><div class="tools"><div class="chips" role="group" aria-label="Valor da ficha">'+yn()+'</div></div><div class="tools"><div class="modes"><button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="multi" id="mMulti">M\xFAltipla</button><button class="take" data-act="repeat" id="repeatBtn">Repetir</button></div><div class="tot" id="tot"></div></div></div></div></div>',bank:()=>Wi()+'<nav class="tabs" role="tablist"><button role="tab" data-act="tab" data-v="mesa" id="t-mesa">Mesa</button><button role="tab" data-act="tab" data-v="jogadores" id="t-jogadores">Jogadores</button><button role="tab" data-act="tab" data-v="historico" id="t-historico">Hist\xF3rico</button></nav><div id="p-mesa" class="tabp"><section class="panel"><div class="sec-h"><h2>Apostas</h2><span class="note" id="betSummary"></span></div><div class="row-actions"><button class="btn" data-act="toggleOpen" id="openBtn"></button><div class="seg" role="group" aria-label="Dados"><button data-act="diceMode" data-v="fisico" id="dm-fisico">Dados f\xEDsicos</button><button data-act="diceMode" data-v="virtual" id="dm-virtual">Dados virtuais</button></div></div><div class="row-actions"><label class="note" for="maxBet">M\xE1ximo por aposta</label><input class="field num" id="maxBet" type="number" min="0" step="5" inputmode="numeric" placeholder="Sem limite" style="width:130px"><button class="btn sm" data-act="saveMax">Guardar</button><span class="note" id="maxNote"></span></div><div class="who" id="who"></div></section>'+Ht()+'<section class="sec" id="allMultiSec" hidden><div class="sec-h"><h2>M\xFAltiplas em jogo</h2></div><div class="mlist" id="mlist"></div></section><section class="panel" id="dados"><div class="sec-h"><h2>Resultado dos dados</h2><span class="note" id="diceHint"></span></div><div id="physical" class="stack-form"><div class="slots" id="slots"></div><div class="pad" id="pad">'+[1,2,3,4,5,6].map(m=>'<button data-act="face" data-v="'+m+'" aria-label="Face '+m+'">'+zi(m)+"</button>").join("")+'</div><div class="read" id="readout" aria-live="polite"></div><div class="row-actions"><button class="btn primary" data-act="settle" id="settle">Liquidar ronda</button><button class="btn" data-act="clearDice">Limpar dados</button></div></div><div id="virtual" class="stack-form" hidden><button class="btn primary roll" data-act="roll" id="rollBtn">Lan\xE7ar dados</button><p class="note">O site lan\xE7a os 5 dados ao acaso, mostra a anima\xE7\xE3o a todos e liquida a ronda.</p></div></section><section class="sec" id="resultSec" hidden><div class="sec-h"><h2>\xDAltima ronda</h2><button class="btn sm warn" data-act="undo" id="undoBtn">Corrigir: anular esta ronda</button></div><div class="read" id="resHead"></div><div class="res" id="res"></div></section></div><div id="p-jogadores" class="tabp" hidden><section class="panel"><h2>Convidar jogadores</h2><p class="note">Envie este link. Cada pessoa cria uma conta (utilizador e palavra-passe) e senta-se \xE0 mesa. S\xF3 contas com papel de admin veem a banca.</p><div class="row-actions"><input class="field" id="shareUrl" readonly aria-label="Link da mesa"><button class="btn sm" data-act="copy">Copiar link</button></div></section><section class="sec"><h2>Mesa</h2><div id="tableView"></div></section><section class="sec"><h2>Saldos na mesa</h2><div id="plist"></div></section><section class="sec"><h2>Contas registadas</h2><div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Utilizador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Maior pr\xE9mio</th><th scope="col">Admin</th></tr></thead><tbody id="ulist"></tbody></table></div></section><section class="panel"><h2>Defini\xE7\xF5es</h2><div class="row-actions"><label class="note" for="initChips">Fichas iniciais de quem se senta</label><input class="field num" id="initChips" type="number" min="0" step="5" inputmode="numeric" style="width:120px"><button class="btn sm" data-act="saveInit">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="reset" id="resetBtn">Nova partida (rep\xF5e saldos; as contas ficam)</button>'+we()+'</div></section></div><div id="p-historico" class="tabp" hidden><section class="sec"><h2>Hist\xF3rico</h2><ul class="hist" id="hist"></ul></section></div>'};function ha(m){m==="login"&&x("authForm").addEventListener("submit",async _=>{_.preventDefault();let I=x("aUser").value.trim(),R=x("aPass").value,O=x("authNote");if(O.textContent="",!OI.test(I)){O.textContent="O utilizador deve ter 3 a 20 caracteres: letras, n\xFAmeros, ponto, h\xEDfen ou _ (sem espa\xE7os nem acentos).";return}let N=I.toLowerCase()+Wm;x("aSubmit").disabled=!0;try{if(a.authTab==="new"){if(R!==x("aPass2").value){O.textContent="As palavras-passe n\xE3o s\xE3o iguais.",x("aSubmit").disabled=!1;return}Q=I,await n.createUserWithEmailAndPassword(r,N,R)}else await n.signInWithEmailAndPassword(r,N,R)}catch(q){O.textContent=VI(q),console.error(q)}x("aSubmit")&&(x("aSubmit").disabled=!1)}),m==="openTable"&&x("openForm").addEventListener("submit",async _=>{_.preventDefault();try{await n.setDoc(u.game,vn(Math.max(0,Math.floor(+x("init").value||0)),"fisico"))}catch(I){d(I)}}),m==="bank"&&(x("shareUrl").value=location.href.split("#")[0],x("initChips").value=s.game?s.game.initial:1e3)}let vn=(m,_,I)=>({round:1,open:!0,initial:m,maxBet:I||0,diceMode:_||"fisico",roll:null,lastResult:null,history:[],lastBets:[],undo:null,created:Date.now()});function wn(m,_){let I=_&&a.dice.length===5?$i(a.dice):null;Ym.forEach(R=>{let O=x("z-"+R.k);if(!O)return;let N={};if(m.filter(q=>q.kind==="s"&&q.k===R.k).forEach(q=>N[q.uid]=(N[q.uid]||0)+q.a),x("st-"+R.k).innerHTML=Object.entries(N).map(([q,F])=>'<span class="pill num"><span class="dot" style="background:'+$t(q)+'"></span>'+W(F)+"</span>").join(""),O.classList.remove("win","push","dim","sel"),a.mode==="multi"&&a.legs.includes(R.k)&&O.classList.add("sel"),I){let q=R.f(I);O.classList.add(q==null?"dim":q===0?"push":"win")}})}function Jn(m){let _=s.game&&s.game.lastResult;if(x("resultSec").hidden=!_,!_)return;x("resHead").innerHTML="Ronda "+_.round+" \xB7 "+_.dice.map(R=>zi(R,"sm")).join(" ")+" \xB7 "+ue(_.desc)+(_.virtual?' \xB7 <span class="note">dados virtuais</span>':"");let I=m?_.per.filter(R=>R.uid===m):_.per;x("res").innerHTML=I.length?I.map(R=>{let O=R.ret-R.st;return'<div class="rcard"><div class="rhead"><span class="dot" style="background:'+R.color+'"></span>'+ue(R.name)+'<span class="net num '+(O>=0?"pos":"neg")+'">'+(O>0?"+":"")+W(O)+'</span></div><ul class="rlines">'+R.lines.map(N=>"<li><span>"+ue(N.n)+" \xB7 "+W(N.a)+'</span><span class="num '+(N.v?"":N.pay>0?"pos":"neg")+'">'+(N.v?"anulada: "+ue(N.v):N.pay>0?"recebe "+W(N.pay):"perde")+"</span></li>").join("")+"</ul></div>"}).join(""):'<p class="note">'+(m?"N\xE3o apostou nesta ronda.":"Ningu\xE9m apostou nesta ronda.")+"</p>"}function Yn(){let m=s.game&&s.game.history||[];x("hist").innerHTML=m.length?m.map(_=>'<li><span class="hr">Ronda '+_.round+'</span><span class="hd">'+_.dice.map(I=>zi(I,"sm")).join("")+'</span><span class="note">Soma '+_.sum+'</span><span class="hn">'+_.per.map(I=>'<span class="num '+(I.net>=0?"pos":"neg")+'">'+ue(I.name)+" "+(I.net>0?"+":"")+W(I.net)+"</span>").join("")+"</span></li>").join(""):'<li class="note">As rondas liquidadas aparecem aqui.</li>'}function Xn(m){m=m||ra;let _=m.returned-m.staked;return'<dl class="stats"><div><dt>Rondas jogadas</dt><dd class="num">'+W(m.rounds)+'</dd></div><div><dt>Total apostado</dt><dd class="num">'+W(m.staked)+'</dd></div><div><dt>Resultado acumulado</dt><dd class="num '+(_>=0?"pos":"neg")+'">'+(_>0?"+":"")+W(_)+'</dd></div><div><dt>Maior pr\xE9mio</dt><dd class="num gold">'+W(m.best)+"</dd></div></dl>"}function Zn(m,_,I){return m.map(R=>{let O=Xl(R.legs);return'<div class="mcard"><div class="mh">'+(_?'<span class="dot" style="background:'+$t(R.uid)+'"></span>'+ue(qr(R.uid)):"M\xFAltipla")+'<span class="num">'+W(R.a)+' fichas</span></div><div class="ml">'+R.legs.map(N=>Ke[N]?ue(Wn(Ke[N]))+" ("+ue(Ke[N].p)+")":"?").join(" + ")+'</div><div class="mf"><span>Recebe at\xE9 <b class="num gold">'+W(Math.floor(R.a*O.max+1e-9))+"</b></span>"+(I?'<button class="btn sm warn" data-act="cancelMulti" data-id="'+R.id+'">Cancelar</button>':"")+"</div></div>"}).join("")}function zr(){x("roundNo").textContent=s.game?s.game.round:"\u2013";let m=s.game&&s.game.open;x("state").className="state "+(m?"on":"off"),x("state").textContent=m?"Apostas abertas":"Apostas fechadas"}let Gr={login(){x("at-login").setAttribute("aria-selected",String(a.authTab==="login")),x("at-new").setAttribute("aria-selected",String(a.authTab==="new")),x("aPass2Wrap").hidden=a.authTab!=="new",x("aPass2").required=a.authTab==="new",x("aPass").autocomplete=a.authTab==="new"?"new-password":"current-password",x("aSubmit").textContent=a.authTab==="new"?"Criar conta":"Entrar"},sit(){let m=ae();x("sitHello").innerHTML="Ol\xE1, <b>"+ue(m?m.name:"\u2026")+'</b>. Senta-se com <b class="gold">'+W(s.game.initial)+"</b> fichas.",x("sitBtn").disabled=!m,x("statsSit").innerHTML=m?Xn(m.stats):""},player(){let m=J();if(!m)return;zr();let _=s.game.open,I=be(s.uid);x("meBox").innerHTML='<span class="dot" style="background:'+m.color+'"></span>'+ue(m.name)+' \xB7 <b class="num">'+W(T(s.uid))+"</b>",x("banner").className="banner "+(_?"on":"off"),x("banner").textContent=(_?"Fa\xE7a as suas apostas. A banca fecha as apostas antes de lan\xE7ar os dados.":"Apostas fechadas. A banca est\xE1 a lan\xE7ar os dados.")+" "+A()+".",["apostar","mesa","loja"].forEach(q=>{x("pp-"+q).hidden=a.ptab!==q,x("pt-"+q).setAttribute("aria-selected",String(a.ptab===q))}),x("maxNoteP").textContent=A(),L(x("tableView"),Hi()),x("chip-5000")&&(x("chip-5000").hidden=!y("f_5k")),a.chip===5e3&&!y("f_5k")&&(a.chip=25),x("shopBal").innerHTML='Dispon\xEDvel: <b class="num">'+W(T(s.uid))+"</b> fichas"+(s.game.open?"":' \xB7 <span class="neg">compras em pausa enquanto a banca lan\xE7a os dados</span>'),L(x("shopBody"),Ki()),document.querySelectorAll(".zone").forEach(q=>q.disabled=!_),wn(I,!1),document.querySelectorAll(".chip").forEach(q=>q.setAttribute("aria-pressed",String(+q.dataset.v===a.chip))),x("mTake").setAttribute("aria-pressed",String(a.mode==="take")),x("mMulti").setAttribute("aria-pressed",String(a.mode==="multi"));let R=(s.game.lastBets||[]).filter(q=>q.uid===s.uid);x("repeatBtn").disabled=!_||!R.length||I.length>0,x("tot").innerHTML='Em jogo <b class="num">'+W(ie(s.uid))+'</b> \xB7 Dispon\xEDvel <b class="num">'+W(T(s.uid))+"</b>";let O=I.filter(q=>q.kind==="m");x("myMultiSec").hidden=!O.length,x("mlist").innerHTML=Zn(O,!1,_);let N=ae();x("statsBox").innerHTML='<p class="note">Utilizador: <b>'+ue(N?N.name:m.name)+"</b></p>"+Xn(N&&N.stats),da(),Jn(s.uid),Yn()},bank(){zr(),["mesa","jogadores","historico"].forEach(F=>{x("p-"+F).hidden=a.tab!==F,x("t-"+F).setAttribute("aria-selected",String(a.tab===F))});let m=s.game,_=m&&m.open,I=m&&m.diceMode==="virtual",R=s.bets.filter(F=>m&&F.round===m.round);x("openBtn").textContent=_?"Fechar apostas":"Reabrir apostas",x("openBtn").className="btn "+(_&&!I?"primary":""),x("dm-fisico").setAttribute("aria-pressed",String(!I)),x("dm-virtual").setAttribute("aria-pressed",String(!!I));let O=R.reduce((F,Y)=>F+Y.a,0);x("betSummary").textContent=R.length?W(O)+" fichas em "+R.length+" aposta(s)":"Sem apostas nesta ronda",document.activeElement!==x("maxBet")&&(x("maxBet").value=g()||""),x("maxNote").textContent=g()?"Atual: "+W(g()):"Atual: sem limite",L(x("tableView"),Hi()),x("who").innerHTML=pt().map(F=>{let Y=ie(F.id),ne=Y>F.chips,Ae=b(F.id);return'<span class="wchip'+(ne||Ae?" over":"")+'"><span class="dot" style="background:'+F.color+'"></span>'+ue(F.name)+' <b class="num">'+W(Y)+"</b>"+(ne?" \xB7 excede saldo":"")+(Ae?" \xB7 acima do m\xE1ximo":"")+"</span>"}).join("")||'<span class="note">Ainda n\xE3o se sentou ningu\xE9m. Partilhe o link no separador Jogadores.</span>',document.querySelectorAll(".zone").forEach(F=>F.disabled=!0),wn(R,!I);let N=R.filter(F=>F.kind==="m");if(x("allMultiSec").hidden=!N.length,x("mlist").innerHTML=Zn(N,!0,!1),x("physical").hidden=!!I,x("virtual").hidden=!I,x("diceHint").textContent=I?"Modo virtual":"Toque nas faces \xB7 toque num dado para o apagar",I)x("rollBtn").disabled=a.busy,x("rollBtn").textContent=a.busy?"A lan\xE7ar\u2026":_?"Fechar apostas e lan\xE7ar dados":"Lan\xE7ar dados";else{let F="";for(let ne=0;ne<5;ne++){let Ae=a.dice[ne];F+='<button class="slot" data-act="slot" data-i="'+ne+'" aria-label="'+(Ae?"Dado "+(ne+1)+": "+Ae:"Dado "+(ne+1)+" vazio")+'">'+zi(Ae||0)+"</button>"}x("slots").innerHTML=F;let Y=a.dice.length===5?$i(a.dice):null;x("readout").innerHTML=Y?"<b>"+ue(Kl(Y))+"</b>"+(_?" \xB7 feche as apostas antes de liquidar":""):a.dice.length?"Faltam "+(5-a.dice.length)+" dados":"Introduza os 5 dados lan\xE7ados",x("settle").disabled=!Y||_||a.busy}Jn(null),x("undoBtn").hidden=!(m&&m.undo),document.activeElement&&document.activeElement.closest&&document.activeElement.closest("#plist")||L(x("plist"),pt().map(F=>'<div class="prow"><div class="nm"><span class="dot" style="background:'+F.color+'"></span><b>'+ue(F.name)+'</b></div><div class="bal num">'+W(F.chips)+(ie(F.id)?'<div class="note">'+W(ie(F.id))+" em jogo</div>":"")+'</div><div class="adj"><input class="field num" id="amt-'+F.id+'" type="number" min="1" inputmode="numeric" placeholder="Qtd." aria-label="Quantidade para '+ue(F.name)+'"><button class="btn sm" data-act="give" data-id="'+F.id+'">Dar</button><button class="btn sm" data-act="takeChips" data-id="'+F.id+'">Tirar</button><button class="btn sm warn" data-act="remove" data-id="'+F.id+'">Remover</button></div></div>').join("")||'<p class="note">Ainda n\xE3o h\xE1 jogadores sentados.</p>');let q=Object.values(s.users).sort((F,Y)=>(F.name||"").localeCompare(Y.name||""));L(x("ulist"),q.length?q.map(F=>{let Y=F.stats||ra,ne=Y.returned-Y.staked;return'<tr><td><span class="dot" style="background:'+(F.color||"#999")+'"></span> '+ue(F.name)+(s.players[F.id]?"":' <span class="note">(fora da mesa)</span>')+'</td><td class="num">'+W(Y.rounds)+'</td><td class="num">'+W(Y.staked)+'</td><td class="num '+(ne>=0?"pos":"neg")+'">'+(ne>0?"+":"")+W(ne)+'</td><td class="num">'+W(Y.best)+"</td><td>"+(F.id===s.uid?'<span class="note">Admin (voc\xEA)</span>':'<button class="btn sm'+(F.role==="admin"?" warn":"")+'" data-act="toggleAdmin" data-id="'+F.id+'">'+(F.role==="admin"?"Tirar admin":"Tornar admin")+"</button>")+"</td></tr>"}).join(""):'<tr><td colspan="6" class="note">Ainda ningu\xE9m criou conta.</td></tr>'),Yn()}};function da(){let m=x("slip");if(m.hidden=a.mode!=="multi",m.hidden||document.activeElement&&document.activeElement.id==="stake")return;let _=a.legs.length,I='<div class="slip-h"><span><strong>M\xFAltipla</strong> \xB7 '+(_?_+" sele\xE7"+(_>1?"\xF5es":"\xE3o"):"toque nas casas para escolher")+"</span>",R=_?Xl(a.legs):null;R&&(I+="<span>Paga at\xE9 <b>\xD7"+zm(R.max)+"</b> \xB7 ganha em "+zm(R.p*100)+"% das jogadas</span>"),I+="</div>",_&&(I+='<div class="legs">'+a.legs.map(O=>'<button class="leg" data-act="leg" data-k="'+O+'" aria-label="Tirar '+ue(Wn(Ke[O]))+'">'+ue(Wn(Ke[O]))+' <span class="num">'+ue(Ke[O].p)+'</span><span class="x" aria-hidden="true">\xD7</span></button>').join("")+"</div>"),I+='<div class="slip-a"><label class="note" for="stake">Aposta</label><input class="field num" id="stake" type="number" min="1" inputmode="numeric" value="'+(a.stake||"")+'" placeholder="Fichas"><span class="note">'+(_>1&&a.stake?'Recebe at\xE9 <b class="num gold">'+W(Math.floor(a.stake*R.max+1e-9))+"</b>":"Toque nas fichas para somar")+'</span><button class="btn sm primary" data-act="placeMulti" '+(_>1&&a.stake>0&&s.game.open?"":"disabled")+'>Fazer m\xFAltipla</button><button class="btn sm" data-act="clearSlip">Limpar</button></div>',m.innerHTML=I}let Be={init:!1,round:0,roll:null},Je=null,Ye=document.createElement("div");Ye.className="reveal",Ye.hidden=!0,Ye.setAttribute("role","dialog"),Ye.setAttribute("aria-modal","true"),Ye.setAttribute("aria-label","Resultado dos dados"),Ye.innerHTML='<div class="rv-box"><div class="rv-dice" id="rvDice"></div><div class="rv-desc" id="rvDesc" aria-live="polite"></div><div class="rv-label" id="rvLabel"></div><div class="rv-amt num" id="rvAmt"></div><div class="rv-sub" id="rvSub"></div><button class="btn" data-act="closeReveal" id="rvClose">Continuar</button></div>',document.body.appendChild(Ye);let In=null;function fa(m){let _='<span class="bdie" aria-hidden="true">';for(let I=0;I<9;I++)_+='<i class="'+(m&&Zl[m].includes(I)?"on":"")+'"></i>';return _+"</span>"}function er(m,_){m.querySelectorAll("i").forEach((I,R)=>I.classList.toggle("on",Zl[_].includes(R)))}function $r(){let m=s.game;if(!m)return;if(!Be.init){Be.init=!0,Be.round=m.lastResult?m.lastResult.round:0,Be.roll=m.roll?m.roll.id:null;return}m.roll&&m.roll.id!==Be.roll&&(Be.roll=m.roll.id,En(m.roll.dice,m.roll.round,2400));let _=m.lastResult;if(_&&_.round>Be.round){if(Be.round=_.round,(!Je||Je.round!==_.round)&&En(_.dice,_.round,1100),!Je)return;Je.result=_,xe()}else _&&_.round<Be.round?Be.round=_.round:_||(Be.round=0)}function En(m,_,I){if(k()!=="bank"&&!J())return;clearTimeout(In),Je={round:_,result:null,shown:!1},Km()&&(I=0),x("rvDice").innerHTML=m.map(()=>fa(1)).join(""),x("rvDesc").textContent=I?"A lan\xE7ar os dados\u2026":"",x("rvLabel").textContent="",x("rvAmt").textContent="",x("rvSub").textContent="",x("rvAmt").className="rv-amt num",x("rvClose").hidden=!0,Ye.hidden=!1;let O=[...x("rvDice").children];O.forEach((q,F)=>{q.style.animationDelay=F*70+"ms",q.classList.add("tumble")}),Je.tumble=(async()=>{let q=performance.now(),F=60;for(;performance.now()-q<I;)O.forEach(Y=>er(Y,1+Math.floor(Math.random()*6))),await xI(F),F=Math.min(180,F*1.06);O.forEach((Y,ne)=>{Y.classList.remove("tumble"),er(Y,m[ne]),Y.classList.add("land")}),x("rvDesc").textContent=Kl($i(m))})();let N=Je;Je.tumble.then(()=>{N.tumbled=!0,xe()})}function Se(m,_,I,R){return R=R||"",Km()||I<=0?(m.textContent=R+W(_),Promise.resolve()):new Promise(O=>{let N=performance.now(),q=F=>{let Y=Math.min(1,(F-N)/I),ne=1-Math.pow(1-Y,3);m.textContent=R+W(Math.round(_*ne)),Y<1?requestAnimationFrame(q):O()};requestAnimationFrame(q)})}async function xe(){let m=Je;if(!m||!m.tumbled||!m.result||m.shown)return;m.shown=!0;let _=m.result,I=x("rvLabel"),R=x("rvAmt"),O=x("rvSub"),N=3500;if(k()==="bank"){let q=_.per.reduce((ne,Ae)=>ne+Ae.st,0),F=_.per.reduce((ne,Ae)=>ne+Ae.ret,0),Y=q-F;I.textContent=Y>=0?"A banca ganha":"A banca paga",R.className="rv-amt num "+(Y>0?"pos":Y<0?"neg":""),await Se(R,Math.abs(Y),1200,Y>0?"+":Y<0?"\u2212":""),O.textContent=_.per.length?_.per.map(ne=>ne.name+" "+(ne.ret-ne.st>0?"+":"")+W(ne.ret-ne.st)).join(" \xB7 "):"Ningu\xE9m apostou nesta ronda."}else{let q=_.per.find(F=>F.uid===s.uid);if(!q)I.textContent="N\xE3o apostou nesta ronda",N=2500;else{let F=q.ret-q.st;F>0?(I.textContent="Ganhou",R.className="rv-amt num pos win",await Se(R,F,Math.min(2600,900+q.ret/q.st*120),"+"),R.classList.add("pop"),O.textContent="Apostou "+W(q.st)+" \xB7 recebeu "+W(q.ret),N=6e3):F===0?(I.textContent="Ficou igual",R.className="rv-amt num",R.textContent="0",O.textContent="Recebeu de volta o que apostou ("+W(q.st)+")."):(I.textContent="Perdeu",R.className="rv-amt num neg",await Se(R,-F,900,"\u2212"),O.textContent=q.ret>0?"Ganhou "+W(q.ret)+" em pr\xE9mios, mas tinha apostado "+W(q.st)+".":"Boa sorte na pr\xF3xima ronda.",N=4500)}}x("rvClose").hidden=!1,clearTimeout(In),In=setTimeout(Wt,N)}function Wt(){clearTimeout(In),Ye.hidden=!0,Je=null}function Ki(){let m=ae()||{},_=T(s.uid),I=s.game&&s.game.open,R=m.theme&&y(m.theme)?m.theme:"classico",O=(U,pe,De)=>{if(y(U.id))return De?pe?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="'+U.id+'">Usar</button>':'<span class="owned">J\xE1 \xE9 seu</span>';let it=I&&_>=U.price;return'<button class="btn sm primary" data-act="buy" data-id="'+U.id+'" data-label="Comprar \xB7 '+W(U.price)+'"'+(it?"":" disabled")+">Comprar \xB7 "+W(U.price)+"</button>"+(I&&_<U.price?'<span class="note">Faltam '+W(U.price-_)+"</span>":"")},N=U=>'<div class="swatch" aria-hidden="true" style="background:'+U[0]+";border-color:"+U[1]+'"><span style="background:'+U[1]+'"></span><span style="background:'+U[2]+'"></span><span class="mini-chip" style="background:'+U[1]+'"></span></div>',q=U=>'<div class="sitem'+(R===U.id?" on":"")+'">'+N(U.sw)+'<div class="sinfo"><b>'+ue(U.name)+'</b><span class="note">'+ue(U.desc)+'</span></div><div class="sbuy">'+O(U,R===U.id,!0)+"</div></div>",F='<div class="sitem'+(R==="classico"?" on":"")+'">'+N(["#145236","#E8C46A","#F4ECD2"])+'<div class="sinfo"><b>Cl\xE1ssico</b><span class="note">O feltro verde original. Gr\xE1tis.</span></div><div class="sbuy">'+(R==="classico"?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="classico">Usar</button>')+"</div></div>",Y=m.color,ne=U=>'<div class="sitem'+(Y===U.hex?" on":"")+'"><div class="cdot" aria-hidden="true" style="background:'+U.hex+'"></div><div class="sinfo"><b>'+ue(U.name)+'</b><span class="note">A sua cor na mesa e nas fichas apostadas.</span></div><div class="sbuy">'+O(U,Y===U.hex,!0)+"</div></div>",kt=!aa.filter(U=>U.kind==="color").map(U=>U.hex).includes(Y),tr='<div class="sitem'+(kt?" on":"")+'"><div class="cdot" aria-hidden="true" style="background:'+(kt&&Y?Y:jr[0])+'"></div><div class="sinfo"><b>Cor da casa</b><span class="note">Uma das cores normais da mesa. Gr\xE1tis.</span></div><div class="sbuy">'+(kt?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="normal">Usar</button>')+"</div></div>",je=Kn.f_5k,nr='<div class="sitem'+(y("f_5k")?" on":"")+'"><div class="bigchip" aria-hidden="true" style="background:'+ia.bg+";color:"+ia.fg+'">5k</div><div class="sinfo"><b>'+ue(je.name)+'</b><span class="note">'+ue(je.desc)+'</span></div><div class="sbuy">'+O(je,!1,!1)+"</div></div>";return'<h3 class="shop-sec">Temas da mesa</h3><div class="sgrid">'+F+aa.filter(U=>U.kind==="theme").map(q).join("")+'</div><h3 class="shop-sec">Cores de jogador</h3><div class="sgrid">'+tr+aa.filter(U=>U.kind==="color").map(ne).join("")+'</div><h3 class="shop-sec">Fichas</h3><div class="sgrid">'+nr+'</div><p class="note soon">Brevemente: mais novidades no balc\xE3o d\u2019O Mateus Banca.</p>'}async function Qi(m){let _=Kn[m],I=J(),R=ae();if(!_||!I||!R||y(m))return;if(!s.game.open){me("As compras voltam quando a banca reabrir as apostas.");return}if(T(s.uid)<_.price){me("Faltam "+W(_.price-T(s.uid))+" fichas.");return}let O=n.writeBatch(i);O.update(n.doc(i,"players",s.uid),{chips:I.chips-_.price}),O.update(n.doc(i,"users",s.uid),{owned:P(s.uid).concat(m)});try{await O.commit(),me("Comprou "+_.name+"!"),_.kind!=="chip"&&(s.users[s.uid]={...s.users[s.uid],owned:P(s.uid).concat(m)},Ji(m))}catch(N){d(N)}}async function Ji(m){if(!ae())return;if(m==="classico"||Kn[m]&&Kn[m].kind==="theme"){if(m!=="classico"&&!y(m))return;try{await n.updateDoc(n.doc(i,"users",s.uid),{theme:m})}catch(O){d(O)}return}let I;if(m==="normal"){let O=Object.values(s.players).filter(N=>N.id!==s.uid).map(N=>N.color);I=jr.find(N=>!O.includes(N))||jr[0]}else Kn[m]&&Kn[m].kind==="color"&&y(m)&&(I=Kn[m].hex);if(!I)return;let R=n.writeBatch(i);R.update(n.doc(i,"users",s.uid),{color:I}),J()&&R.update(n.doc(i,"players",s.uid),{color:I});try{await R.commit()}catch(O){d(O)}}async function Ct(m){try{return await n.addDoc(u.bets,{uid:s.uid,round:s.game.round,ts:Date.now(),...m}),!0}catch(_){return d(_),!1}}async function Yi(m){if(k()!=="player"||!J()||!s.game.open)return;if(a.mode==="multi"){let R=a.legs.indexOf(m);if(R>=0){a.legs.splice(R,1),se();return}if(a.legs.length>=6){me("M\xE1ximo de 6 sele\xE7\xF5es por m\xFAltipla");return}let O=a.legs.concat(m);if(O.length>1){let N=Jl(O);if(N){me(Wn(Ke[m])+": "+N.charAt(0).toLowerCase()+N.slice(1));return}}a.legs=O,se();return}if(a.mode==="take"){let R=be(s.uid).filter(O=>O.kind==="s"&&O.k===m);if(!R.length){me("N\xE3o tem fichas nesta casa");return}try{await n.deleteDoc(n.doc(i,"bets",R[R.length-1].id))}catch(O){d(O)}return}if(T(s.uid)<a.chip){me("N\xE3o tem fichas suficientes (dispon\xEDvel: "+W(T(s.uid))+")");return}let _=g(),I=w(s.uid,m);if(_&&I+a.chip>_){me("M\xE1ximo por aposta: "+W(_)+". Nesta casa j\xE1 tem "+W(I)+".");return}await Ct({kind:"s",k:m,a:a.chip})}async function Xi(){let m=Math.floor(a.stake||0),_=Jl(a.legs);if(_){me(_);return}if(m>0){if(T(s.uid)<m){me("S\xF3 tem "+W(T(s.uid))+" fichas dispon\xEDveis");return}if(g()&&m>g()){me("M\xE1ximo por aposta: "+W(g())+" fichas");return}await Ct({kind:"m",legs:a.legs.slice(),a:m})&&(a.legs=[],a.stake=0,me("M\xFAltipla de "+W(m)+" fichas registada"),se())}}async function Hr(){let m=(s.game.lastBets||[]).filter(N=>N.uid===s.uid),_=T(s.uid),I=0,R=g(),O={};for(let N of m){if(N.a>_){I++;continue}if(R&&(N.kind==="m"?N.a>R:(O[N.k]||0)+N.a>R)){I++;continue}N.kind!=="m"&&(O[N.k]=(O[N.k]||0)+N.a),_-=N.a,await Ct(N.kind==="m"?{kind:"m",legs:N.legs,a:N.a}:{kind:"s",k:N.k,a:N.a})}I&&me(I+" aposta(s) ficaram de fora (fichas insuficientes ou acima do m\xE1ximo)")}async function pa(){let m=ae();if(!m||!s.game)return;let _=Object.values(s.players).map(R=>R.color),I=_.includes(m.color)&&jr.find(R=>!_.includes(R))||m.color;try{await n.setDoc(n.doc(i,"players",s.uid),{name:m.name,chips:s.game.initial,color:I,joined:Date.now()})}catch(R){d(R)}}async function Zi(m,_){let I=s.game;if(!m||m.length!==5||I.open)return!1;let R=$i(m),O=s.bets.filter(U=>U.round===I.round),N={},q={},F={};pt().forEach(U=>{F[U.id]=U.chips,q[U.id]=U.chips});let Y={...q},ne=[],Ae=g(),kt={};O.forEach(U=>{let pe=s.players[U.uid];if(!pe)return;let De=N[pe.id]||(N[pe.id]={uid:pe.id,name:pe.name,color:pe.color,st:0,ret:0,best:0,lines:[]}),it=U.kind==="m",bn=it?"M\xFAltipla: "+(U.legs||[]).map(rr=>Ke[rr]?Wn(Ke[rr]):"?").join(" + "):Ke[U.k]?Wn(Ke[U.k]):"?",Ie=Math.floor(U.a),Dt=null;if(Ie>0?(it?Jl(U.legs):!Ke[U.k])?Dt="aposta inv\xE1lida":Ae&&(it?Ie>Ae:(kt[pe.id+"|"+U.k]||0)+Ie>Ae)?Dt="acima do m\xE1ximo":Ie>Y[pe.id]&&(Dt="sem saldo"):Dt="valor inv\xE1lido",Dt){De.lines.push({n:bn,a:U.a,pay:0,v:Dt});return}Y[pe.id]-=Ie,it||(kt[pe.id+"|"+U.k]=(kt[pe.id+"|"+U.k]||0)+Ie);let Kt=it?Math.floor(Ie*Xm(U.legs,R)+1e-9):DI(Ie,Ke[U.k].f(R));De.st+=Ie,De.ret+=Kt,q[pe.id]+=Kt-Ie,Kt>De.best&&(De.best=Kt),De.lines.push({n:bn,a:Ie,pay:Kt}),ne.push(it?{uid:U.uid,kind:"m",legs:U.legs,a:Ie}:{uid:U.uid,kind:"s",k:U.k,a:Ie})});let tr=Object.values(N).map(({best:U,...pe})=>pe),je=n.writeBatch(i);Object.keys(q).forEach(U=>{q[U]!==F[U]&&je.update(n.doc(i,"players",U),{chips:q[U]})});let nr={};Object.values(N).forEach(U=>{let pe=s.users[U.uid];if(!pe||U.st===0)return;let De={...ra,...pe.stats||{}};nr[U.uid]=De,je.update(n.doc(i,"users",U.uid),{stats:{rounds:De.rounds+1,staked:De.staked+U.st,returned:De.returned+U.ret,best:Math.max(De.best,U.best)}})}),s.bets.forEach(U=>je.delete(n.doc(i,"bets",U.id))),je.update(u.game,Gm({round:I.round+1,open:!0,lastResult:{round:I.round,dice:m.slice(),desc:Kl(R),per:tr,virtual:!!_},history:[{round:I.round,dice:m.slice(),sum:R.sum,per:tr.map(U=>({name:U.name,net:U.ret-U.st}))}].concat(I.history||[]).slice(0,30),lastBets:ne,undo:{round:I.round,dice:m.slice(),virtual:!!_,chips:F,stats:nr,bets:s.bets.map(U=>{let{id:pe,...De}=U;return{id:pe,d:De}}),lastResult:I.lastResult||null,lastBets:I.lastBets||[]}}));try{return await je.commit(),!0}catch(U){return d(U),!1}}async function Wr(){a.busy||(a.busy=!0,se(),await Zi(a.dice,!1)&&(a.dice=[]),a.busy=!1,se())}async function es(){if(!(a.busy||!s.game)){a.busy=!0,se();try{let m=s.game,_=NI(),I=Date.now().toString(36)+Math.random().toString(36).slice(2,6);Be.roll=I,await n.updateDoc(u.game,{open:!1,roll:{id:I,round:m.round,dice:_}}),En(_,m.round,2400),await Je.tumble,await Zi(_,!0)}catch(m){d(m)}a.busy=!1,se()}}async function ts(){let m=s.game.undo;if(!m)return;let _=n.writeBatch(i);Object.entries(m.chips).forEach(([I,R])=>{s.players[I]&&_.update(n.doc(i,"players",I),{chips:R})}),Object.entries(m.stats||{}).forEach(([I,R])=>{s.users[I]&&_.update(n.doc(i,"users",I),{stats:R})}),s.bets.forEach(I=>_.delete(n.doc(i,"bets",I.id))),m.bets.forEach(I=>_.set(n.doc(i,"bets",I.id),I.d)),_.update(u.game,Gm({round:m.round,open:!1,roll:null,lastResult:m.lastResult,lastBets:m.lastBets,history:(s.game.history||[]).slice(1),undo:null}));try{await _.commit(),m.virtual||(a.dice=m.dice),me(m.virtual?"Ronda anulada. As apostas voltaram; pode lan\xE7ar de novo.":"Ronda anulada. Corrija os dados e liquide de novo."),se()}catch(I){d(I)}}async function Tn(){let m=n.writeBatch(i);Object.keys(s.players).forEach(_=>m.delete(n.doc(i,"players",_))),s.bets.forEach(_=>m.delete(n.doc(i,"bets",_.id))),m.set(u.game,vn(s.game?s.game.initial:1e3,s.game?s.game.diceMode:"fisico",s.game?s.game.maxBet:0));try{await m.commit(),a.dice=[],me("Partida nova. Os jogadores voltam a sentar-se com as suas contas.")}catch(_){d(_)}}let de=null;document.addEventListener("click",async m=>{let _=m.target.closest("[data-act]");if(!_)return;let I=_.dataset.act;if(I==="role")s.role=_.dataset.v,Hm.set("sicbo5-role",s.role),_n="",se(),window.scrollTo(0,0);else if(I==="toggleAdmin"){let R=s.users[_.dataset.id];if(!R||R.id===s.uid)return;if(de!==_){de&&(de.textContent=de.dataset.label),de=_,_.dataset.label=_.textContent,_.textContent="Confirmar",setTimeout(()=>{de===_&&(_.textContent=_.dataset.label,de=null)},4e3);return}de=null,x("ulist")._last=null;let O=R.role!=="admin";try{await n.updateDoc(n.doc(i,"users",R.id),{role:O?"admin":"player"}),me(R.name+(O?" passou a ter acesso \xE0 banca":" deixou de ter acesso \xE0 banca"))}catch(N){d(N)}}else if(I==="authTab")a.authTab=_.dataset.v,x("authNote").textContent="",se();else if(I==="logout")try{await n.signOut(r)}catch(R){d(R)}else if(I==="sit")pa();else if(I==="zone")Yi(_.dataset.k);else if(I==="chip")a.chip=+_.dataset.v,a.mode==="multi"&&(a.stake=(a.stake||0)+a.chip),se();else if(I==="mode")a.mode=a.mode===_.dataset.v?"bet":_.dataset.v,se();else if(I==="leg")a.legs=a.legs.filter(R=>R!==_.dataset.k),se();else if(I==="clearSlip")a.legs=[],a.stake=0,se();else if(I==="placeMulti")Xi();else if(I==="repeat")Hr();else if(I==="cancelMulti")try{await n.deleteDoc(n.doc(i,"bets",_.dataset.id)),me("M\xFAltipla cancelada")}catch(R){d(R)}else if(I==="tab")a.tab=_.dataset.v,se();else if(I==="ptab")a.ptab=_.dataset.v,a.mode="bet",a.legs=[],se(),window.scrollTo(0,0);else if(I==="buy"){if(de!==_){de&&(de.textContent=de.dataset.label),de=_,_.textContent="Confirmar compra",setTimeout(()=>{de===_&&(_.textContent=_.dataset.label,de=null)},4e3);return}de=null,x("shopBody")._last=null,Qi(_.dataset.id)}else if(I==="equip")Ji(_.dataset.id);else if(I==="saveMax"){let R=Math.max(0,Math.floor(+x("maxBet").value||0));try{await n.updateDoc(u.game,{maxBet:R}),x("maxBet").blur(),me(R?"M\xE1ximo por aposta: "+W(R)+" fichas":"Sem m\xE1ximo por aposta")}catch(O){d(O)}}else if(I==="toggleOpen")try{await n.updateDoc(u.game,{open:!s.game.open})}catch(R){d(R)}else if(I==="diceMode"){if(s.game.diceMode!==_.dataset.v)try{await n.updateDoc(u.game,{diceMode:_.dataset.v})}catch(R){d(R)}}else if(I==="roll")es();else if(I==="face")a.dice.length<5&&(a.dice.push(+_.dataset.v),se());else if(I==="slot"){let R=+_.dataset.i;a.dice[R]&&(a.dice.splice(R,1),se())}else if(I==="clearDice")a.dice=[],se();else if(I==="settle")Wr();else if(I==="undo")ts();else if(I==="closeReveal")Wt();else if(I==="copy"){let R=x("shareUrl");try{await navigator.clipboard.writeText(R.value),me("Link copiado")}catch{R.select(),me("Selecionei o link: copie-o")}}else if(I==="saveInit"){let R=Math.max(0,Math.floor(+x("initChips").value||0));try{await n.updateDoc(u.game,{initial:R}),me("Quem se sentar a seguir come\xE7a com "+W(R)+" fichas")}catch(O){d(O)}}else if(I==="give"||I==="takeChips"){let R=s.players[_.dataset.id],O=x("amt-"+R.id),N=Math.floor(+O.value);if(!(N>0)){me("Escreva a quantidade de fichas"),O.focus();return}if(I==="takeChips"&&N>R.chips){me(R.name+" s\xF3 tem "+W(R.chips)+" fichas");return}try{await n.updateDoc(n.doc(i,"players",R.id),{chips:R.chips+(I==="give"?N:-N)}),O.value="",O.blur(),me((I==="give"?"Dadas ":"Tiradas ")+W(N)+" fichas a "+R.name)}catch(q){d(q)}}else if(I==="remove"||I==="reset"){if(de!==_){de&&(de.textContent=de.dataset.label),de=_,_.dataset.label=_.textContent,_.textContent="Confirmar",setTimeout(()=>{de===_&&(_.textContent=_.dataset.label,de=null)},4e3);return}if(de=null,_.textContent=_.dataset.label,x("plist")&&(x("plist")._last=null),I==="reset")Tn();else{let R=_.dataset.id,O=n.writeBatch(i);O.delete(n.doc(i,"players",R)),s.bets.filter(N=>N.uid===R).forEach(N=>O.delete(n.doc(i,"bets",N.id)));try{await O.commit(),me("Jogador removido da mesa")}catch(N){d(N)}}}}),document.addEventListener("keydown",m=>{m.key==="Escape"&&!Ye.hidden&&Wt()}),document.addEventListener("input",m=>{m.target.id==="stake"&&(a.stake=Math.max(0,Math.floor(+m.target.value||0)))}),document.addEventListener("change",m=>{m.target.id==="stake"&&(m.target.blur(),se())}),se()}Zm(Wl);
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
