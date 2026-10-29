var Fg=Object.defineProperty;var Ug=(n,e)=>{for(var t in e)Fg(n,t,{get:e[t],enumerable:!0})};var Oh={};Ug(Oh,{addDoc:()=>fg,collection:()=>eg,createUserWithEmailAndPassword:()=>ou,deleteDoc:()=>dg,doc:()=>Ph,getDoc:()=>ug,increment:()=>gg,init:()=>Kb,onAuthStateChanged:()=>cu,onSnapshot:()=>pg,setDoc:()=>lg,signInAnonymously:()=>iu,signInWithEmailAndPassword:()=>au,signOut:()=>uu,updateDoc:()=>hg,writeBatch:()=>_g});var ud=()=>{};var dd=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Bg=function(n){let e=[],t=0,r=0;for(;t<n.length;){let s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){let i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){let i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){let i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,f=l?n[s+2]:0,_=i>>2,v=(i&3)<<4|c>>4,T=(c&15)<<2|f>>6,O=f&63;l||(O=64,a||(T=64)),r.push(t[_],t[v],t[T],t[O])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){let i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;let f=s<n.length?t[n.charAt(s)]:64;++s;let v=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||f==null||v==null)throw new lc;let T=i<<2|c>>4;if(r.push(T),f!==64){let O=c<<4&240|f>>2;if(r.push(O),v!==64){let F=f<<6&192|v;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},lc=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},jg=function(n){let e=dd(n);return fd.encodeByteArray(e,!0)},Us=function(n){return jg(n).replace(/\./g,"")},Ji=function(n){try{return fd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function pd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var qg=()=>pd().__FIREBASE_DEFAULTS__,zg=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&Ji(n[1]);return e&&JSON.parse(e)},Yi=()=>{try{return ud()||qg()||zg()||Gg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dc=n=>{var e,t;return(t=(e=Yi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},md=n=>{let e=dc(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fc=()=>{var n;return(n=Yi())===null||n===void 0?void 0:n.config},pc=n=>{var e;return(e=Yi())===null||e===void 0?void 0:e[`_${n}`]};var Qi=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Xi(n){return(await fetch(n,{credentials:"include"})).ok}function gd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Us(JSON.stringify(t)),Us(JSON.stringify(a)),""].join(".")}var Fs={};function $g(){let n={prod:[],emulator:[]};for(let e of Object.keys(Fs))Fs[e]?n.emulator.push(e):n.prod.push(e);return n}function Hg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var ld=!1;function Zi(n,e){if(typeof window>"u"||typeof document>"u"||!vn(window.location.host)||Fs[n]===e||Fs[n]||ld)return;Fs[n]=e;function t(T){return`__firebase__banner__${T}`}let r="__firebase__banner",i=$g().prod.length>0;function a(){let T=document.getElementById(r);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function l(T,O){T.setAttribute("width","24"),T.setAttribute("id",O),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function f(){let T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{ld=!0,a()},T}function _(T,O){T.setAttribute("id",O),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function v(){let T=Hg(r),O=t("text"),F=document.getElementById(O)||document.createElement("span"),q=t("learnmore"),M=document.getElementById(q)||document.createElement("a"),ee=t("preprendIcon"),H=document.getElementById(ee)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){let te=T.element;c(te),_(M,q);let de=f();l(H,ee),te.append(H,F,M,de),document.body.appendChild(te)}i?(F.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function Kg(){var n;let e=(n=Yi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vd(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bd(){let n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Id(){return!Kg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mc(){try{return typeof indexedDB=="object"}catch{return!1}}function Ed(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}var Wg="FirebaseError",lt=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}},Zt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Qg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new lt(s,c,r)}};function Qg(n,e){return n.replace(Jg,(t,r)=>{let s=e[r];return s!=null?String(s):`<${r}?>`})}var Jg=/\{\$([^}]+)}/g;function Td(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let s of t){if(!r.includes(s))return!1;let i=n[s],a=e[s];if(hd(i)&&hd(a)){if(!Vt(i,a))return!1}else if(i!==a)return!1}for(let s of r)if(!t.includes(s))return!1;return!0}function hd(n){return n!==null&&typeof n=="object"}function Nr(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Or(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xr(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ad(n,e){let t=new hc(n,e);return t.subscribe.bind(t)}var hc=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=uc),s.error===void 0&&(s.error=uc),s.complete===void 0&&(s.complete=uc);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Yg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function uc(){}var uI=4*60*60*1e3;function ve(n){return n&&n._delegate?n._delegate:n}var gt=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Wn="[DEFAULT]";var gc=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new Qi;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zg(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(t);try{let i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[i,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;let s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);let a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Xg(n){return n===Wn?void 0:n}function Zg(n){return n.instantiationMode==="EAGER"}var eo=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new gc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var e_=[],ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));var t_={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},n_=ae.INFO,r_={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},s_=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),s=r_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},wn=class{constructor(e){this.name=e,this._logLevel=n_,this._logHandler=s_,this._userLogHandler=null,e_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}};var i_=(n,e)=>e.some(t=>n instanceof t),Sd,Rd;function o_(){return Sd||(Sd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a_(){return Rd||(Rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Pd=new WeakMap,yc=new WeakMap,Cd=new WeakMap,_c=new WeakMap,wc=new WeakMap;function c_(n){let e=new Promise((t,r)=>{let s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Lt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Pd.set(t,n)}).catch(()=>{}),wc.set(e,n),e}function u_(n){if(yc.has(n))return;let e=new Promise((t,r)=>{let s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});yc.set(n,e)}var vc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return yc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kd(n){vc=n(vc)}function l_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(to(this),e,...t);return Cd.set(r,e.sort?e.sort():[e]),Lt(r)}:a_().includes(n)?function(...e){return n.apply(to(this),e),Lt(Pd.get(this))}:function(...e){return Lt(n.apply(to(this),e))}}function h_(n){return typeof n=="function"?l_(n):(n instanceof IDBTransaction&&u_(n),i_(n,o_())?new Proxy(n,vc):n)}function Lt(n){if(n instanceof IDBRequest)return c_(n);if(_c.has(n))return _c.get(n);let e=h_(n);return e!==n&&(_c.set(n,e),wc.set(e,n)),e}var to=n=>wc.get(n);function Nd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){let a=indexedDB.open(n,e),c=Lt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Lt(a.result),l.oldVersion,l.newVersion,Lt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}var d_=["get","getKey","getAll","getAllKeys","count"],f_=["put","add","delete","clear"],bc=new Map;function Dd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,s=f_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||d_.includes(t)))return;let i=async function(a,...c){let l=this.transaction(a,s?"readwrite":"readonly"),f=l.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&l.done]))[0]};return bc.set(e,i),i}kd(n=>({...n,get:(e,t,r)=>Dd(e,t)||n.get(e,t,r),has:(e,t)=>!!Dd(e,t)||n.has(e,t)}));var Ec=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(p_(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function p_(n){let e=n.getComponent();return e?.type==="VERSION"}var Tc="@firebase/app",Od="0.13.2";var en=new wn("@firebase/app"),m_="@firebase/app-compat",g_="@firebase/analytics-compat",__="@firebase/analytics",y_="@firebase/app-check-compat",v_="@firebase/app-check",w_="@firebase/auth",b_="@firebase/auth-compat",I_="@firebase/database",E_="@firebase/data-connect",T_="@firebase/database-compat",A_="@firebase/functions",S_="@firebase/functions-compat",R_="@firebase/installations",P_="@firebase/installations-compat",C_="@firebase/messaging",k_="@firebase/messaging-compat",D_="@firebase/performance",N_="@firebase/performance-compat",O_="@firebase/remote-config",x_="@firebase/remote-config-compat",V_="@firebase/storage",L_="@firebase/storage-compat",M_="@firebase/firestore",F_="@firebase/ai",U_="@firebase/firestore-compat",B_="firebase",j_="11.10.0";var Ac="[DEFAULT]",q_={[Tc]:"fire-core",[m_]:"fire-core-compat",[__]:"fire-analytics",[g_]:"fire-analytics-compat",[v_]:"fire-app-check",[y_]:"fire-app-check-compat",[w_]:"fire-auth",[b_]:"fire-auth-compat",[I_]:"fire-rtdb",[E_]:"fire-data-connect",[T_]:"fire-rtdb-compat",[A_]:"fire-fn",[S_]:"fire-fn-compat",[R_]:"fire-iid",[P_]:"fire-iid-compat",[C_]:"fire-fcm",[k_]:"fire-fcm-compat",[D_]:"fire-perf",[N_]:"fire-perf-compat",[O_]:"fire-rc",[x_]:"fire-rc-compat",[V_]:"fire-gcs",[L_]:"fire-gcs-compat",[M_]:"fire-fst",[U_]:"fire-fst-compat",[F_]:"fire-vertex","fire-js":"fire-js",[B_]:"fire-js-all"};var no=new Map,z_=new Map,Sc=new Map;function xd(n,e){try{n.container.addComponent(e)}catch(t){en.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){let e=n.name;if(Sc.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,n);for(let t of no.values())xd(t,n);for(let t of z_.values())xd(t,n);return!0}function js(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n==null?!1:n.settings!==void 0}var G_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Zt("app","Firebase",G_);var Rc=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}};var En=j_;function kc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:Ac,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(t||(t=fc()),!t)throw bn.create("no-options");let i=no.get(s);if(i){if(Vt(t,i.options)&&Vt(r,i.config))return i;throw bn.create("duplicate-app",{appName:s})}let a=new eo(s);for(let l of Sc.values())a.addComponent(l);let c=new Rc(t,r,a);return no.set(s,c),c}function ro(n=Ac){let e=no.get(n);if(!e&&n===Ac&&fc())return kc();if(!e)throw bn.create("no-app",{appName:n});return e}function Rt(n,e,t){var r;let s=(r=q_[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);let i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){let c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(c.join(" "));return}In(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}var $_="firebase-heartbeat-database",H_=1,Bs="firebase-heartbeat-store",Ic=null;function Fd(){return Ic||(Ic=Nd($_,H_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Bs)}catch(t){console.warn(t)}}}}).catch(n=>{throw bn.create("idb-open",{originalErrorMessage:n.message})})),Ic}async function K_(n){try{let t=(await Fd()).transaction(Bs),r=await t.objectStore(Bs).get(Ud(n));return await t.done,r}catch(e){if(e instanceof lt)en.warn(e.message);else{let t=bn.create("idb-get",{originalErrorMessage:e?.message});en.warn(t.message)}}}async function Vd(n,e){try{let r=(await Fd()).transaction(Bs,"readwrite");await r.objectStore(Bs).put(e,Ud(n)),await r.done}catch(t){if(t instanceof lt)en.warn(t.message);else{let r=bn.create("idb-set",{originalErrorMessage:t?.message});en.warn(r.message)}}}function Ud(n){return`${n.name}!${n.options.appId}`}var W_=1024,Q_=30,Pc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Cc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ld();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Q_){let a=Y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Ld(),{heartbeatsToSend:r,unsentEntries:s}=J_(this._heartbeatsCache.heartbeats),i=Us(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return en.warn(t),""}}};function Ld(){return new Date().toISOString().substring(0,10)}function J_(n,e=W_){let t=[],r=n.slice();for(let s of n){let i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Md(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Md(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Cc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mc()?Ed().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await K_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let s=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let s=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}};function Md(n){return Us(JSON.stringify({version:2,heartbeats:n})).length}function Y_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function X_(n){In(new gt("platform-logger",e=>new Ec(e),"PRIVATE")),In(new gt("heartbeat",e=>new Pc(e),"PRIVATE")),Rt(Tc,Od,n),Rt(Tc,Od,"esm2017"),Rt("fire-js","")}X_("");var Z_="firebase",ey="11.10.0";Rt(Z_,ey,"app");function so(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function sf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var of=sf,af=new Zt("auth","Firebase",sf());var ho=new wn("@firebase/auth");function ty(n,...e){ho.logLevel<=ae.WARN&&ho.warn(`Auth (${En}): ${n}`,...e)}function oo(n,...e){ho.logLevel<=ae.ERROR&&ho.error(`Auth (${En}): ${n}`,...e)}function Pt(n,...e){throw tu(n,...e)}function Ft(n,...e){return tu(n,...e)}function cf(n,e,t){let r=Object.assign(Object.assign({},of()),{[e]:t});return new Zt("auth","Firebase",r).create(e,{appName:n.name})}function Ut(n){return cf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tu(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return af.create(n,...e)}function W(n,e,...t){if(!n)throw tu(e,...t)}function Mt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw oo(e),new Error(e)}function nn(n,e){n||Mt(e)}function Lc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ny(){return Bd()==="http:"||Bd()==="https:"}function Bd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function ry(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ny()||vd()||"connection"in navigator)?navigator.onLine:!0}function sy(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Qn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,nn(t>e,"Short delay should be less than long delay!"),this.isMobile=_d()||wd()}get(){return ry()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function nu(n,e){nn(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var fo=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var iy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var oy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ay=new Qn(3e4,6e4);function Oe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Je(n,e,t,r,s={}){return uf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});let c=Nr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let f=Object.assign({method:e,headers:l},i);return yd()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&vn(n.emulatorConfig.host)&&(f.credentials="include"),fo.fetch()(await lf(n,n.config.apiHost,t,c),f)})}async function uf(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},iy),e);try{let s=new Mc(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();let a=await i.json();if("needConfirmation"in a)throw zs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{let c=i.ok?a.errorMessage:a.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zs(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw zs(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw zs(n,"user-disabled",a);let _=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw cf(n,_,f);Pt(n,_)}}catch(s){if(s instanceof lt)throw s;Pt(n,"network-request-failed",{message:String(s)})}}async function Rn(n,e,t,r,s={}){let i=await Je(n,e,t,r,s);return"mfaPendingCredential"in i&&Pt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function lf(n,e,t,r){let s=`${e}${t}?${r}`,i=n,a=i.config.emulator?nu(n.config,s):`${n.config.apiScheme}://${s}`;return oy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function cy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Mc=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),ay.get())})}};function zs(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let s=Ft(n,e,r);return s.customData._tokenResponse=t,s}function jd(n){return n!==void 0&&n.enterprise!==void 0}var po=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function hf(n,e){return Je(n,"GET","/v2/recaptchaConfig",Oe(n,e))}async function uy(n,e){return Je(n,"POST","/v1/accounts:delete",e)}async function mo(n,e){return Je(n,"POST","/v1/accounts:lookup",e)}function Gs(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function df(n,e=!1){let t=ve(n),r=await t.getIdToken(e),s=ru(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");let i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Gs(Dc(s.auth_time)),issuedAtTime:Gs(Dc(s.iat)),expirationTime:Gs(Dc(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Dc(n){return Number(n)*1e3}function ru(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{let s=Ji(t);return s?JSON.parse(s):(oo("Failed to decode base64 JWT payload"),null)}catch(s){return oo("Caught error parsing JWT payload as JSON",s?.toString()),null}}function qd(n){let e=ru(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Ks(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof lt&&ly(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ly({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Fc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Ws=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function go(n){var e;let t=n.auth,r=await n.getIdToken(),s=await Ks(n,mo(t,{idToken:r}));W(s?.users.length,t,"internal-error");let i=s.users[0];n._notifyReloadListener(i);let a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pf(i.providerUserInfo):[],c=hy(n.providerData,a),l=n.isAnonymous,f=!(n.email&&i.passwordHash)&&!c?.length,_=l?f:!1,v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ws(i.createdAt,i.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function ff(n){let e=ve(n);await go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pf(n){return n.map(e=>{var{providerId:t}=e,r=so(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function dy(n,e){let t=await uf(n,{},async()=>{let r=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await lf(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:c,body:r};return n.emulatorConfig&&vn(n.emulatorConfig.host)&&(l.credentials="include"),fo.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fy(n,e){return Je(n,"POST","/v2/accounts:revokeToken",Oe(n,e))}var $s=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");let t=qd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:s,expiresIn:i}=await dy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new n;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Mt("not implemented")}};function Tn(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var An=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=so(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ws(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return df(this,e)}reload(){return ff(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Ut(this.auth));let e=await this.getIdToken();return await Ks(this,uy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,f,_;let v=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,O=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,F=(a=t.photoURL)!==null&&a!==void 0?a:void 0,q=(c=t.tenantId)!==null&&c!==void 0?c:void 0,M=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,ee=(f=t.createdAt)!==null&&f!==void 0?f:void 0,H=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:te,emailVerified:de,isAnonymous:ze,providerData:ce,stsTokenManager:R}=t;W(te&&R,e,"internal-error");let b=$s.fromJSON(this.name,R);W(typeof te=="string",e,"internal-error"),Tn(v,e.name),Tn(T,e.name),W(typeof de=="boolean",e,"internal-error"),W(typeof ze=="boolean",e,"internal-error"),Tn(O,e.name),Tn(F,e.name),Tn(q,e.name),Tn(M,e.name),Tn(ee,e.name),Tn(H,e.name);let E=new n({uid:te,auth:e,email:T,emailVerified:de,displayName:v,isAnonymous:ze,photoURL:F,phoneNumber:O,tenantId:q,stsTokenManager:b,createdAt:ee,lastLoginAt:H});return ce&&Array.isArray(ce)&&(E.providerData=ce.map(A=>Object.assign({},A))),M&&(E._redirectEventId=M),E}static async _fromIdTokenResponse(e,t,r=!1){let s=new $s;s.updateFromServerResponse(t);let i=new n({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await go(i),i}static async _fromGetAccountInfoResponse(e,t,r){let s=t.users[0];W(s.localId!==void 0,"internal-error");let i=s.providerUserInfo!==void 0?pf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new $s;c.updateFromIdToken(r);let l=new n({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ws(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,f),l}};var zd=new Map;function tn(n){nn(n instanceof Function,"Expected a class definition");let e=zd.get(n);return e?(nn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zd.set(n,e),e)}var _o=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};_o.type="NONE";var Uc=_o;function ao(n,e,t){return`firebase:${n}:${e}:${t}`}var yo=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:s,name:i}=this.auth;this.fullUserKey=ao(this.userKey,s.apiKey,i),this.fullPersistenceKey=ao("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await mo(this.auth,{idToken:e}).catch(()=>{});return t?An._fromGetAccountInfoResponse(this.auth,t,e):null}return An._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(tn(Uc),e,r);let s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f),i=s[0]||tn(Uc),a=ao(r,e.config.apiKey,e.name),c=null;for(let f of t)try{let _=await f._get(a);if(_){let v;if(typeof _=="string"){let T=await mo(e,{idToken:_}).catch(()=>{});if(!T)break;v=await An._fromGetAccountInfoResponse(e,T,_)}else v=An._fromJSON(e,_);f!==i&&(c=v),i=f;break}}catch{}let l=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new n(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new n(i,e,r))}};function Gd(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wf(e))return"Blackberry";if(bf(e))return"Webos";if(gf(e))return"Safari";if((e.includes("chrome/")||_f(e))&&!e.includes("edge/"))return"Chrome";if(vf(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function mf(n=Fe()){return/firefox\//i.test(n)}function gf(n=Fe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _f(n=Fe()){return/crios\//i.test(n)}function yf(n=Fe()){return/iemobile/i.test(n)}function vf(n=Fe()){return/android/i.test(n)}function wf(n=Fe()){return/blackberry/i.test(n)}function bf(n=Fe()){return/webos/i.test(n)}function su(n=Fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function py(n=Fe()){var e;return su(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function my(){return bd()&&document.documentMode===10}function If(n=Fe()){return su(n)||vf(n)||bf(n)||wf(n)||/windows phone/i.test(n)||yf(n)}function Ef(n,e=[]){let t;switch(n){case"Browser":t=Gd(Fe());break;case"Worker":t=`${Gd(Fe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${r}`}var Bc=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=i=>new Promise((a,c)=>{try{let l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);let s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function gy(n,e={}){return Je(n,"GET","/v2/passwordPolicy",Oe(n,e))}var _y=6,jc=class{constructor(e){var t,r,s,i;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:_y,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}};var qc=class{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vo(this),this.idTokenSubscription=new vo(this),this.beforeStateQueue=new Bc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await mo(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tt(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await go(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(Ut(this));let t=e?ve(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await gy(this),t=new jc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await fy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&tn(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[tn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};let i=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ef(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ty(`Error while retrieving App Check token: ${t.error}`),t?.token}};function jt(n){return ve(n)}var vo=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ad(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yy(n){Mo=n}function Tf(n){return Mo.loadJS(n)}function vy(){return Mo.recaptchaEnterpriseScript}function wy(){return Mo.gapiScript}function Af(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var zc=class{constructor(){this.enterprise=new Gc}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Gc=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var by="recaptcha-enterprise",Hs="NO_RECAPTCHA",wo=class{constructor(e){this.type=by,this.auth=jt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{hf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let f=new po(l);return i.tenantId==null?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,a(f.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){let l=window.grecaptcha;jd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(f=>{a(f)}).catch(()=>{a(Hs)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zc().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&jd(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=vy();l.length!==0&&(l+=c),Tf(l).then(()=>{s(c,i,a)}).catch(f=>{a(f)})}}).catch(c=>{a(c)})})}};async function qs(n,e,t,r=!1,s=!1){let i=new wo(n),a;if(s)a=Hs;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let l=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:f,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Vr(n,e,t,r,s){var i,a;if(s==="EMAIL_PASSWORD_PROVIDER")if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await qs(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await qs(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(c)});else if(s==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let c=await qs(n,e,t);return r(n,c).catch(async l=>{var f;if(((f=n._getRecaptchaConfig())===null||f===void 0?void 0:f.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let _=await qs(n,e,t,!1,!0);return r(n,_)}return Promise.reject(l)})}else{let c=await qs(n,e,t,!1,!0);return r(n,c)}else return Promise.reject(s+" provider is not supported.")}async function Iy(n){let e=jt(n),t=await hf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new po(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new wo(e).verify()}function Sf(n,e){let t=js(n,"auth");if(t.isInitialized()){let s=t.getImmediate(),i=t.getOptions();if(Vt(i,e??{}))return s;Pt(s,"already-initialized")}return t.initialize({options:e})}function Ey(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(tn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Rf(n,e,t){let r=jt(n);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let s=!!t?.disableWarnings,i=Pf(e),{host:a,port:c}=Ty(e),l=c===null?"":`:${c}`,f={url:`${i}//${a}${l}/`},_=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Vt(f,r.config.emulator)&&Vt(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,vn(a)?(Xi(`${i}//${a}${l}`),Zi("Auth",!0)):s||Ay()}function Pf(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ty(n){let e=Pf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){let i=s[1];return{host:i,port:$d(r.substr(i.length+1))}}else{let[i,a]=r.split(":");return{host:i,port:$d(a)}}}function $d(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Ay(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Jn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,t){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}};async function Sy(n,e){return Je(n,"POST","/v1/accounts:signUp",e)}async function Ry(n,e){return Rn(n,"POST","/v1/accounts:signInWithPassword",Oe(n,e))}async function Py(n,e){return Rn(n,"POST","/v1/accounts:signInWithEmailLink",Oe(n,e))}async function Cy(n,e){return Rn(n,"POST","/v1/accounts:signInWithEmailLink",Oe(n,e))}var Qs=class n extends Jn{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vr(e,t,"signInWithPassword",Ry,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Py(e,{email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vr(e,r,"signUpPassword",Sy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Cy(e,{idToken:t,email:this._email,oobCode:this._password});default:Pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Lr(n,e){return Rn(n,"POST","/v1/accounts:signInWithIdp",Oe(n,e))}var ky="http://localhost",Yn=class n extends Jn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=so(t,["providerId","signInMethod"]);if(!r||!s)return null;let a=new n(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return Lr(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,Lr(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Lr(e,t)}buildRequest(){let e={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nr(t)}return e}};async function Hd(n,e){return Je(n,"POST","/v1/accounts:sendVerificationCode",Oe(n,e))}async function Dy(n,e){return Rn(n,"POST","/v1/accounts:signInWithPhoneNumber",Oe(n,e))}async function Ny(n,e){let t=await Rn(n,"POST","/v1/accounts:signInWithPhoneNumber",Oe(n,e));if(t.temporaryProof)throw zs(n,"account-exists-with-different-credential",t);return t}var Oy={USER_NOT_FOUND:"user-not-found"};async function xy(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Rn(n,"POST","/v1/accounts:signInWithPhoneNumber",Oe(n,t),Oy)}var Js=class n extends Jn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Dy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ny(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return xy(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new n({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}};function Vy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ly(n){let e=Or(xr(n)).link,t=e?Or(xr(e)).deep_link_id:null,r=Or(xr(n)).deep_link_id;return(r?Or(xr(r)).link:null)||r||t||e||n}var bo=class n{constructor(e){var t,r,s,i,a,c;let l=Or(xr(e)),f=(t=l.apiKey)!==null&&t!==void 0?t:null,_=(r=l.oobCode)!==null&&r!==void 0?r:null,v=Vy((s=l.mode)!==null&&s!==void 0?s:null);W(f&&_&&v,"argument-error"),this.apiKey=f,this.operation=v,this.code=_,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Ly(e);try{return new n(t)}catch{return null}}};var Xn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Qs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=bo.parseLink(t);return W(r,"argument-error"),Qs._fromEmailAndCode(e,r.code,r.tenantId)}};Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Io=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Zn=class extends Io{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Ys=class n extends Zn{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Ys.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ys.PROVIDER_ID="facebook.com";var Xs=class n extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Xs.GOOGLE_SIGN_IN_METHOD="google.com";Xs.PROVIDER_ID="google.com";var Zs=class n extends Zn{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Zs.GITHUB_SIGN_IN_METHOD="github.com";Zs.PROVIDER_ID="github.com";var ei=class n extends Zn{constructor(){super("twitter.com")}static credential(e,t){return Yn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};ei.TWITTER_SIGN_IN_METHOD="twitter.com";ei.PROVIDER_ID="twitter.com";async function Cf(n,e){return Rn(n,"POST","/v1/accounts:signUp",Oe(n,e))}var Sn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){let i=await An._fromIdTokenResponse(e,r,s),a=Kd(r);return new n({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let s=Kd(r);return new n({user:e,providerId:s,_tokenResponse:r,operationType:t})}};function Kd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function iu(n){var e;if(tt(n.app))return Promise.reject(Ut(n));let t=jt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Sn({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await Cf(t,{returnSecureToken:!0}),s=await Sn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}var $c=class n extends lt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new n(e,t,r,s)}};function kf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(n,i,e,r):i})}async function My(n,e,t=!1){let r=await Ks(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Sn._forOperation(n,"link",r)}async function Fy(n,e,t=!1){let{auth:r}=n;if(tt(r.app))return Promise.reject(Ut(r));let s="reauthenticate";try{let i=await Ks(n,kf(r,s,e,n),t);W(i.idToken,r,"internal-error");let a=ru(i.idToken);W(a,r,"internal-error");let{sub:c}=a;return W(n.uid===c,r,"user-mismatch"),Sn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Pt(r,"user-mismatch"),i}}async function Df(n,e,t=!1){if(tt(n.app))return Promise.reject(Ut(n));let r="signIn",s=await kf(n,r,e),i=await Sn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Nf(n,e){return Df(jt(n),e)}async function Of(n){let e=jt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ou(n,e,t){if(tt(n.app))return Promise.reject(Ut(n));let r=jt(n),a=await Vr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cf,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Of(n),l}),c=await Sn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function au(n,e,t){return tt(n.app)?Promise.reject(Ut(n)):Nf(ve(n),Xn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Of(n),r})}function xf(n,e,t,r){return ve(n).onIdTokenChanged(e,t,r)}function Vf(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}function cu(n,e,t,r){return ve(n).onAuthStateChanged(e,t,r)}function uu(n){return ve(n).signOut()}function Wd(n,e){return Je(n,"POST","/v2/accounts/mfaEnrollment:start",Oe(n,e))}function Uy(n,e){return Je(n,"POST","/v2/accounts/mfaEnrollment:finalize",Oe(n,e))}function By(n,e){return Je(n,"POST","/v2/accounts/mfaEnrollment:start",Oe(n,e))}function jy(n,e){return Je(n,"POST","/v2/accounts/mfaEnrollment:finalize",Oe(n,e))}var Eo="__sak";var To=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Eo,"1"),this.storage.removeItem(Eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var qy=1e3,zy=10,Ao=class extends To{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=If(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let s=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);my()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zy):s()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ao.type="LOCAL";var Lf=Ao;var Gy=1e3;function Nc(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),s=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(s))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function Oc(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var Hc=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Oc(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return Nc(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=Oc(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=Oc(e);if(window.cookieStore){let c=f=>{let _=f.changed.find(T=>T.name===r);_&&t(_.value),f.deleted.find(T=>T.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",c)}let s=Nc(r),i=setInterval(()=>{let c=Nc(r);c!==s&&(t(c),s=c)},Gy),a=()=>clearInterval(i);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};Hc.type="COOKIE";var So=class extends To{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};So.type="SESSION";var lu=So;function $y(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Ro=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});let c=Array.from(a).map(async f=>f(t.origin,i)),l=await $y(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Ro.receivers=[];function hu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Kc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{let f=hu("",20);s.port1.start();let _=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(v){let T=v;if(T.data.eventId===f)switch(T.data.status){case"ack":clearTimeout(_),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(_),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Bt(){return window}function Hy(n){Bt().location.href=n}function Mf(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function Ky(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Qy(){return Mf()?self:null}var Ff="firebaseLocalStorageDb",Jy=1,Po="firebaseLocalStorage",Uf="fbase_key",er=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Fo(n,e){return n.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function Yy(){let n=indexedDB.deleteDatabase(Ff);return new er(n).toPromise()}function Wc(){let n=indexedDB.open(Ff,Jy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Po,{keyPath:Uf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await Yy(),e(await Wc()))})})}async function Qd(n,e,t){let r=Fo(n,!0).put({[Uf]:e,value:t});return new er(r).toPromise()}async function Xy(n,e){let t=Fo(n,!1).get(e),r=await new er(t).toPromise();return r===void 0?null:r.value}function Jd(n,e){let t=Fo(n,!0).delete(e);return new er(t).toPromise()}var Zy=800,ev=3,Co=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>ev)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(Qy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ky(),!this.activeServiceWorker)return;this.sender=new Kc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Wc();return await Qd(e,Eo,"1"),await Jd(e,Eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Xy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(s=>{let i=Fo(s,!1).getAll();return new er(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(let s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Co.type="LOCAL";var Bf=Co;function Yd(n,e){return Je(n,"POST","/v2/accounts/mfaSignIn:start",Oe(n,e))}function tv(n,e){return Je(n,"POST","/v2/accounts/mfaSignIn:finalize",Oe(n,e))}function nv(n,e){return Je(n,"POST","/v2/accounts/mfaSignIn:finalize",Oe(n,e))}var MI=Af("rcb"),FI=new Qn(3e4,6e4);var co="recaptcha";async function rv(n,e,t){var r;if(!n._getRecaptchaConfig())try{await Iy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let i=s.session;if("phoneNumber"in s){W(i.type==="enroll",n,"internal-error");let a={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Vr(n,a,"mfaSmsEnrollment",async(_,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===Hs){W(t?.type===co,_,"argument-error");let T=await xc(_,v,t);return Wd(_,T)}return Wd(_,v)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{W(i.type==="signin",n,"internal-error");let a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;W(a,n,"missing-multi-factor-info");let c={mfaPendingCredential:i.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Vr(n,c,"mfaSmsSignIn",async(v,T)=>{if(T.phoneSignInInfo.captchaResponse===Hs){W(t?.type===co,v,"argument-error");let O=await xc(v,T,t);return Yd(v,O)}return Yd(v,T)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{let i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Vr(n,i,"sendVerificationCode",async(f,_)=>{if(_.captchaResponse===Hs){W(t?.type===co,f,"argument-error");let v=await xc(f,_,t);return Hd(f,v)}return Hd(f,_)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).sessionInfo}}finally{t?._reset()}}async function xc(n,e,t){W(t.type===co,n,"argument-error");let r=await t.verify();W(typeof r=="string",n,"argument-error");let s=Object.assign({},e);if("phoneEnrollmentInfo"in s){let i=s.phoneEnrollmentInfo.phoneNumber,a=s.phoneEnrollmentInfo.captchaResponse,c=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:a,clientType:c,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){let i=s.phoneSignInInfo.captchaResponse,a=s.phoneSignInInfo.clientType,c=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:a,recaptchaVersion:c}}),s}else return Object.assign(s,{recaptchaToken:r}),s}var ti=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=jt(e)}verifyPhoneNumber(e,t){return rv(this.auth,e,ve(t))}static credential(e,t){return Js._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Js._fromTokenResponse(t,r):null}};ti.PROVIDER_ID="phone";ti.PHONE_SIGN_IN_METHOD="phone";function sv(n,e){return e?tn(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var ni=class extends Jn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function iv(n){return Df(n.auth,new ni(n),n.bypassAuthState)}function ov(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),Fy(t,new ni(n),n.bypassAuthState)}async function av(n){let{auth:e,user:t}=n;return W(t,e,"internal-error"),My(t,new ni(n),n.bypassAuthState)}var ko=class{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iv;case"linkViaPopup":case"linkViaRedirect":return av;case"reauthViaPopup":case"reauthViaRedirect":return ov;default:Pt(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var cv=new Qn(2e3,1e4);var Qc=class n extends ko{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");let e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cv.get())};e()}};Qc.currentPopupAction=null;var uv="pendingRedirect",uo=new Map,Jc=class extends ko{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{let r=await lv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function lv(n,e){let t=fv(e),r=dv(n);if(!await r._isAvailable())return!1;let s=await r._get(t)==="true";return await r._remove(t),s}function hv(n,e){uo.set(n._key(),e)}function dv(n){return tn(n._redirectPersistence)}function fv(n){return ao(uv,n.config.apiKey,n.name)}async function pv(n,e,t=!1){if(tt(n.app))return Promise.reject(Ut(n));let r=jt(n),s=sv(r,e),a=await new Jc(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var mv=10*60*1e3,Yc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jf(e)){let s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ft(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xd(e))}saveEventToCache(e){this.cachedEventUids.add(Xd(e)),this.lastProcessedEventTime=Date.now()}};function Xd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function gv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jf(n);default:return!1}}async function _v(n,e={}){return Je(n,"GET","/v1/projects",e)}var yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vv=/^https?/;async function wv(n){if(n.config.emulator)return;let{authorizedDomains:e}=await _v(n);for(let t of e)try{if(bv(t))return}catch{}Pt(n,"unauthorized-domain")}function bv(n){let e=Lc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!vv.test(t))return!1;if(yv.test(n))return r===n;let s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}var Iv=new Qn(3e4,6e4);function Zd(){let n=Bt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ev(n){return new Promise((e,t)=>{var r,s,i;function a(){Zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zd(),t(Ft(n,"network-request-failed"))},timeout:Iv.get()})}if(!((s=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Bt().gapi)===null||i===void 0)&&i.load)a();else{let c=Af("iframefcb");return Bt()[c]=()=>{gapi.load?a():t(Ft(n,"network-request-failed"))},Tf(`${wy()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw lo=null,e})}var lo=null;function Tv(n){return lo=lo||Ev(n),lo}var Av=new Qn(5e3,15e3),Sv="__/auth/iframe",Rv="emulator/auth/iframe",Pv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kv(n){let e=n.config;W(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?nu(e,Rv):`https://${n.config.authDomain}/${Sv}`,r={apiKey:e.apiKey,appName:n.name,v:En},s=Cv.get(n.config.apiHost);s&&(r.eid=s);let i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Nr(r).slice(1)}`}async function Dv(n){let e=await Tv(n),t=Bt().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:kv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});let a=Ft(n,"network-request-failed"),c=Bt().setTimeout(()=>{i(a)},Av.get());function l(){Bt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}var Nv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ov=500,xv=600,Vv="_blank",Lv="http://localhost",Do=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Mv(n,e,t,r=Ov,s=xv){let i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),c="",l=Object.assign(Object.assign({},Nv),{width:r.toString(),height:s.toString(),top:i,left:a}),f=Fe().toLowerCase();t&&(c=_f(f)?Vv:t),mf(f)&&(e=e||Lv,l.scrollbars="yes");let _=Object.entries(l).reduce((T,[O,F])=>`${T}${O}=${F},`,"");if(py(f)&&c!=="_self")return Fv(e||"",c),new Do(null);let v=window.open(e||"",c,_);W(v,n,"popup-blocked");try{v.focus()}catch{}return new Do(v)}function Fv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var Uv="__/auth/handler",Bv="emulator/auth/handler",jv=encodeURIComponent("fac");async function ef(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:En,eventId:s};if(e instanceof Io){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Td(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[_,v]of Object.entries(i||{}))a[_]=v}if(e instanceof Zn){let _=e.getScopes().filter(v=>v!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let _ of Object.keys(c))c[_]===void 0&&delete c[_];let l=await n._getAppCheckToken(),f=l?`#${jv}=${encodeURIComponent(l)}`:"";return`${qv(n)}?${Nr(c).slice(1)}${f}`}function qv({config:n}){return n.emulator?nu(n,Bv):`https://${n.authDomain}/${Uv}`}var Vc="webStorageSupport",Xc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lu,this._completeRedirectFn=pv,this._overrideRedirectResult=hv}async _openPopup(e,t,r,s){var i;nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");let a=await ef(e,t,r,Lc(),s);return Mv(e,a,hu())}async _openRedirect(e,t,r,s){await this._originValidation(e);let i=await ef(e,t,r,Lc(),s);return Hy(i),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(nn(i,"If manager is not set, promise should be"),i)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await Dv(e),r=new Yc(e);return t.register("authEvent",s=>(W(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vc,{type:Vc},s=>{var i;let a=(i=s?.[0])===null||i===void 0?void 0:i[Vc];a!==void 0&&t(!!a),Pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return If()||gf()||su()}},qf=Xc,No=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Mt("unexpected MultiFactorSessionType")}}},Zc=class n extends No{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Uy(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return tv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Oo=class{constructor(){}static assertion(e){return Zc._fromCredential(e)}};Oo.FACTOR_ID="phone";var xo=class{static assertionForEnrollment(e,t){return Vo._fromSecret(e,t)}static assertionForSignIn(e,t){return Vo._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;W(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let s=await By(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Lo._fromStartTotpMfaEnrollmentResponse(s,r.user.auth)}};xo.FACTOR_ID="totp";var Vo=class n extends No{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return W(typeof this.secret<"u",e,"argument-error"),jy(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){W(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return nv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Lo=class n{constructor(e,t,r,s,i,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let s=!1;return(io(e)||io(t))&&(s=!0),s&&(io(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),io(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function io(n){return typeof n>"u"||n?.length===0}var tf="@firebase/auth",nf="1.10.8";var eu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function zv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gv(n){In(new gt("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ef(n)},f=new qc(r,s,i,l);return Ey(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),In(new gt("auth-internal",e=>{let t=jt(e.getProvider("auth").getImmediate());return(r=>new eu(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(tf,nf,zv(n)),Rt(tf,nf,"esm2017")}var $v=5*60,Hv=pc("authIdTokenMaxAge")||$v,rf=null,Kv=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Hv)return;let s=t?.token;rf!==s&&(rf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function du(n=ro()){let e=js(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Sf(n,{popupRedirectResolver:qf,persistence:[Bf,Lf,lu]}),r=pc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let i=new URL(r,location.origin);if(location.origin===i.origin){let a=Kv(i.toString());Vf(t,a,()=>a(t.currentUser)),xf(t,c=>a(c))}}let s=dc("auth");return s&&Rf(t,`http://${s}`),t}function Wv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yy({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{let i=Ft("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Wv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gv("Browser");var zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Gf={};var rn,fu;(function(){var n;function e(R,b){function E(){}E.prototype=b.prototype,R.D=b.prototype,R.prototype=new E,R.prototype.constructor=R,R.C=function(A,S,k){for(var I=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)I[$e-2]=arguments[$e];return b.prototype[S].apply(A,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,b,E){E||(E=0);var A=Array(16);if(typeof b=="string")for(var S=0;16>S;++S)A[S]=b.charCodeAt(E++)|b.charCodeAt(E++)<<8|b.charCodeAt(E++)<<16|b.charCodeAt(E++)<<24;else for(S=0;16>S;++S)A[S]=b[E++]|b[E++]<<8|b[E++]<<16|b[E++]<<24;b=R.g[0],E=R.g[1],S=R.g[2];var k=R.g[3],I=b+(k^E&(S^k))+A[0]+3614090360&4294967295;b=E+(I<<7&4294967295|I>>>25),I=k+(S^b&(E^S))+A[1]+3905402710&4294967295,k=b+(I<<12&4294967295|I>>>20),I=S+(E^k&(b^E))+A[2]+606105819&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(b^S&(k^b))+A[3]+3250441966&4294967295,E=S+(I<<22&4294967295|I>>>10),I=b+(k^E&(S^k))+A[4]+4118548399&4294967295,b=E+(I<<7&4294967295|I>>>25),I=k+(S^b&(E^S))+A[5]+1200080426&4294967295,k=b+(I<<12&4294967295|I>>>20),I=S+(E^k&(b^E))+A[6]+2821735955&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(b^S&(k^b))+A[7]+4249261313&4294967295,E=S+(I<<22&4294967295|I>>>10),I=b+(k^E&(S^k))+A[8]+1770035416&4294967295,b=E+(I<<7&4294967295|I>>>25),I=k+(S^b&(E^S))+A[9]+2336552879&4294967295,k=b+(I<<12&4294967295|I>>>20),I=S+(E^k&(b^E))+A[10]+4294925233&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(b^S&(k^b))+A[11]+2304563134&4294967295,E=S+(I<<22&4294967295|I>>>10),I=b+(k^E&(S^k))+A[12]+1804603682&4294967295,b=E+(I<<7&4294967295|I>>>25),I=k+(S^b&(E^S))+A[13]+4254626195&4294967295,k=b+(I<<12&4294967295|I>>>20),I=S+(E^k&(b^E))+A[14]+2792965006&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(b^S&(k^b))+A[15]+1236535329&4294967295,E=S+(I<<22&4294967295|I>>>10),I=b+(S^k&(E^S))+A[1]+4129170786&4294967295,b=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(b^E))+A[6]+3225465664&4294967295,k=b+(I<<9&4294967295|I>>>23),I=S+(b^E&(k^b))+A[11]+643717713&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^b&(S^k))+A[0]+3921069994&4294967295,E=S+(I<<20&4294967295|I>>>12),I=b+(S^k&(E^S))+A[5]+3593408605&4294967295,b=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(b^E))+A[10]+38016083&4294967295,k=b+(I<<9&4294967295|I>>>23),I=S+(b^E&(k^b))+A[15]+3634488961&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^b&(S^k))+A[4]+3889429448&4294967295,E=S+(I<<20&4294967295|I>>>12),I=b+(S^k&(E^S))+A[9]+568446438&4294967295,b=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(b^E))+A[14]+3275163606&4294967295,k=b+(I<<9&4294967295|I>>>23),I=S+(b^E&(k^b))+A[3]+4107603335&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^b&(S^k))+A[8]+1163531501&4294967295,E=S+(I<<20&4294967295|I>>>12),I=b+(S^k&(E^S))+A[13]+2850285829&4294967295,b=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(b^E))+A[2]+4243563512&4294967295,k=b+(I<<9&4294967295|I>>>23),I=S+(b^E&(k^b))+A[7]+1735328473&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^b&(S^k))+A[12]+2368359562&4294967295,E=S+(I<<20&4294967295|I>>>12),I=b+(E^S^k)+A[5]+4294588738&4294967295,b=E+(I<<4&4294967295|I>>>28),I=k+(b^E^S)+A[8]+2272392833&4294967295,k=b+(I<<11&4294967295|I>>>21),I=S+(k^b^E)+A[11]+1839030562&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^b)+A[14]+4259657740&4294967295,E=S+(I<<23&4294967295|I>>>9),I=b+(E^S^k)+A[1]+2763975236&4294967295,b=E+(I<<4&4294967295|I>>>28),I=k+(b^E^S)+A[4]+1272893353&4294967295,k=b+(I<<11&4294967295|I>>>21),I=S+(k^b^E)+A[7]+4139469664&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^b)+A[10]+3200236656&4294967295,E=S+(I<<23&4294967295|I>>>9),I=b+(E^S^k)+A[13]+681279174&4294967295,b=E+(I<<4&4294967295|I>>>28),I=k+(b^E^S)+A[0]+3936430074&4294967295,k=b+(I<<11&4294967295|I>>>21),I=S+(k^b^E)+A[3]+3572445317&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^b)+A[6]+76029189&4294967295,E=S+(I<<23&4294967295|I>>>9),I=b+(E^S^k)+A[9]+3654602809&4294967295,b=E+(I<<4&4294967295|I>>>28),I=k+(b^E^S)+A[12]+3873151461&4294967295,k=b+(I<<11&4294967295|I>>>21),I=S+(k^b^E)+A[15]+530742520&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^b)+A[2]+3299628645&4294967295,E=S+(I<<23&4294967295|I>>>9),I=b+(S^(E|~k))+A[0]+4096336452&4294967295,b=E+(I<<6&4294967295|I>>>26),I=k+(E^(b|~S))+A[7]+1126891415&4294967295,k=b+(I<<10&4294967295|I>>>22),I=S+(b^(k|~E))+A[14]+2878612391&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~b))+A[5]+4237533241&4294967295,E=S+(I<<21&4294967295|I>>>11),I=b+(S^(E|~k))+A[12]+1700485571&4294967295,b=E+(I<<6&4294967295|I>>>26),I=k+(E^(b|~S))+A[3]+2399980690&4294967295,k=b+(I<<10&4294967295|I>>>22),I=S+(b^(k|~E))+A[10]+4293915773&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~b))+A[1]+2240044497&4294967295,E=S+(I<<21&4294967295|I>>>11),I=b+(S^(E|~k))+A[8]+1873313359&4294967295,b=E+(I<<6&4294967295|I>>>26),I=k+(E^(b|~S))+A[15]+4264355552&4294967295,k=b+(I<<10&4294967295|I>>>22),I=S+(b^(k|~E))+A[6]+2734768916&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~b))+A[13]+1309151649&4294967295,E=S+(I<<21&4294967295|I>>>11),I=b+(S^(E|~k))+A[4]+4149444226&4294967295,b=E+(I<<6&4294967295|I>>>26),I=k+(E^(b|~S))+A[11]+3174756917&4294967295,k=b+(I<<10&4294967295|I>>>22),I=S+(b^(k|~E))+A[2]+718787259&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~b))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+k&4294967295}r.prototype.u=function(R,b){b===void 0&&(b=R.length);for(var E=b-this.blockSize,A=this.B,S=this.h,k=0;k<b;){if(S==0)for(;k<=E;)s(this,R,k),k+=this.blockSize;if(typeof R=="string"){for(;k<b;)if(A[S++]=R.charCodeAt(k++),S==this.blockSize){s(this,A),S=0;break}}else for(;k<b;)if(A[S++]=R[k++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=b},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;var E=8*this.o;for(b=R.length-8;b<R.length;++b)R[b]=E&255,E/=256;for(this.u(R),R=Array(16),b=E=0;4>b;++b)for(var A=0;32>A;A+=8)R[E++]=this.g[b]>>>A&255;return R};function i(R,b){var E=c;return Object.prototype.hasOwnProperty.call(E,R)?E[R]:E[R]=b(R)}function a(R,b){this.h=b;for(var E=[],A=!0,S=R.length-1;0<=S;S--){var k=R[S]|0;A&&k==b||(E[S]=k,A=!1)}this.g=E}var c={};function l(R){return-128<=R&&128>R?i(R,function(b){return new a([b|0],0>b?-1:0)}):new a([R|0],0>R?-1:0)}function f(R){if(isNaN(R)||!isFinite(R))return v;if(0>R)return M(f(-R));for(var b=[],E=1,A=0;R>=E;A++)b[A]=R/E|0,E*=4294967296;return new a(b,0)}function _(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return M(_(R.substring(1),b));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=f(Math.pow(b,8)),A=v,S=0;S<R.length;S+=8){var k=Math.min(8,R.length-S),I=parseInt(R.substring(S,S+k),b);8>k?(k=f(Math.pow(b,k)),A=A.j(k).add(f(I))):(A=A.j(E),A=A.add(f(I)))}return A}var v=l(0),T=l(1),O=l(16777216);n=a.prototype,n.m=function(){if(q(this))return-M(this).m();for(var R=0,b=1,E=0;E<this.g.length;E++){var A=this.i(E);R+=(0<=A?A:4294967296+A)*b,b*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(F(this))return"0";if(q(this))return"-"+M(this).toString(R);for(var b=f(Math.pow(R,6)),E=this,A="";;){var S=de(E,b).g;E=ee(E,S.j(b));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(R);if(E=S,F(E))return k+A;for(;6>k.length;)k="0"+k;A=k+A}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function F(R){if(R.h!=0)return!1;for(var b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function q(R){return R.h==-1}n.l=function(R){return R=ee(this,R),q(R)?-1:F(R)?0:1};function M(R){for(var b=R.g.length,E=[],A=0;A<b;A++)E[A]=~R.g[A];return new a(E,~R.h).add(T)}n.abs=function(){return q(this)?M(this):this},n.add=function(R){for(var b=Math.max(this.g.length,R.g.length),E=[],A=0,S=0;S<=b;S++){var k=A+(this.i(S)&65535)+(R.i(S)&65535),I=(k>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);A=I>>>16,k&=65535,I&=65535,E[S]=I<<16|k}return new a(E,E[E.length-1]&-2147483648?-1:0)};function ee(R,b){return R.add(M(b))}n.j=function(R){if(F(this)||F(R))return v;if(q(this))return q(R)?M(this).j(M(R)):M(M(this).j(R));if(q(R))return M(this.j(M(R)));if(0>this.l(O)&&0>R.l(O))return f(this.m()*R.m());for(var b=this.g.length+R.g.length,E=[],A=0;A<2*b;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<R.g.length;S++){var k=this.i(A)>>>16,I=this.i(A)&65535,$e=R.i(S)>>>16,Ve=R.i(S)&65535;E[2*A+2*S]+=I*Ve,H(E,2*A+2*S),E[2*A+2*S+1]+=k*Ve,H(E,2*A+2*S+1),E[2*A+2*S+1]+=I*$e,H(E,2*A+2*S+1),E[2*A+2*S+2]+=k*$e,H(E,2*A+2*S+2)}for(A=0;A<b;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=b;A<2*b;A++)E[A]=0;return new a(E,0)};function H(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function te(R,b){this.g=R,this.h=b}function de(R,b){if(F(b))throw Error("division by zero");if(F(R))return new te(v,v);if(q(R))return b=de(M(R),b),new te(M(b.g),M(b.h));if(q(b))return b=de(R,M(b)),new te(M(b.g),b.h);if(30<R.g.length){if(q(R)||q(b))throw Error("slowDivide_ only works with positive integers.");for(var E=T,A=b;0>=A.l(R);)E=ze(E),A=ze(A);var S=ce(E,1),k=ce(A,1);for(A=ce(A,2),E=ce(E,2);!F(A);){var I=k.add(A);0>=I.l(R)&&(S=S.add(E),k=I),A=ce(A,1),E=ce(E,1)}return b=ee(R,S.j(b)),new te(S,b)}for(S=v;0<=R.l(b);){for(E=Math.max(1,Math.floor(R.m()/b.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),k=f(E),I=k.j(b);q(I)||0<I.l(R);)E-=A,k=f(E),I=k.j(b);F(k)&&(k=T),S=S.add(k),R=ee(R,I)}return new te(S,R)}n.A=function(R){return de(this,R).h},n.and=function(R){for(var b=Math.max(this.g.length,R.g.length),E=[],A=0;A<b;A++)E[A]=this.i(A)&R.i(A);return new a(E,this.h&R.h)},n.or=function(R){for(var b=Math.max(this.g.length,R.g.length),E=[],A=0;A<b;A++)E[A]=this.i(A)|R.i(A);return new a(E,this.h|R.h)},n.xor=function(R){for(var b=Math.max(this.g.length,R.g.length),E=[],A=0;A<b;A++)E[A]=this.i(A)^R.i(A);return new a(E,this.h^R.h)};function ze(R){for(var b=R.g.length+1,E=[],A=0;A<b;A++)E[A]=R.i(A)<<1|R.i(A-1)>>>31;return new a(E,R.h)}function ce(R,b){var E=b>>5;b%=32;for(var A=R.g.length-E,S=[],k=0;k<A;k++)S[k]=0<b?R.i(k+E)>>>b|R.i(k+E+1)<<32-b:R.i(k+E);return new a(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fu=Gf.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,rn=Gf.Integer=a}).apply(typeof zf<"u"?zf:typeof self<"u"?self:typeof window<"u"?window:{});var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sn={};var pu,Qv,Mr,mu,ri,Bo,gu,_u,yu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uo=="object"&&Uo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in d))break e;d=d[C]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,C={next:function(){if(!g&&d<o.length){var N=d++;return{value:u(N,o[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function _(o,u,d){return o.call.apply(o.bind,arguments)}function v(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function T(o,u,d){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:v,T.apply(null,arguments)}function O(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function F(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,C,N){for(var B=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)B[ge-2]=arguments[ge];return u.prototype[C].apply(g,B)}}function q(o){let u=o.length;if(0<u){let d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function M(o,u){for(let d=1;d<arguments.length;d++){let g=arguments[d];if(l(g)){let C=o.length||0,N=g.length||0;o.length=C+N;for(let B=0;B<N;B++)o[C+B]=g[B]}else o.push(g)}}class ee{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function H(o){return/^[\s\xa0]*$/.test(o)}function te(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function de(o){return de[" "](o),o}de[" "]=function(){};var ze=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ce(o,u,d){for(let g in o)u.call(d,o[g],g,o)}function R(o,u){for(let d in o)u.call(void 0,o[d],d,o)}function b(o){let u={};for(let d in o)u[d]=o[d];return u}let E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)o[d]=g[d];for(let N=0;N<E.length;N++)d=E[N],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function S(o){var u=1;o=o.split(":");let d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function k(o){c.setTimeout(()=>{throw o},0)}function I(){var o=He;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class $e{constructor(){this.h=this.g=null}add(u,d){let g=Ve.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ve=new ee(()=>new Ze,o=>o.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,vt=!1,He=new $e,Ri=()=>{let o=c.Promise.resolve(void 0);Ee=()=>{o.then(Ka)}};var Ka=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(d){k(d)}var u=Ve;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}vt=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Wa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function ke(o,u){if(Te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ze){e:{try{de(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:gr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ke.aa.h.call(this)}}F(ke,Te);var gr={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),Ae=0;function ot(o,u,d,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=C,this.key=++Ae,this.da=this.fa=!1}function _r(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yr(o){this.src=o,this.g={},this.h=0}yr.prototype.add=function(o,u,d,g,C){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var B=vr(o,u,g,C);return-1<B?(u=o[B],d||(u.fa=!1)):(u=new ot(u,this.src,N,!!g,C),u.fa=d,o.push(u)),u};function gs(o,u){var d=u.type;if(d in o.g){var g=o.g[d],C=Array.prototype.indexOf.call(g,u,void 0),N;(N=0<=C)&&Array.prototype.splice.call(g,C,1),N&&(_r(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function vr(o,u,d,g){for(var C=0;C<o.length;++C){var N=o[C];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==g)return C}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),Qt={};function Pi(o,u,d,g,C){if(g&&g.once)return ki(o,u,d,g,C);if(Array.isArray(u)){for(var N=0;N<u.length;N++)Pi(o,u[N],d,g,C);return null}return d=Is(d),o&&o[dn]?o.K(u,d,f(g)?!!g.capture:!!g,C):ne(o,u,d,!1,g,C)}function ne(o,u,d,g,C,N){if(!u)throw Error("Invalid event type");var B=f(C)?!!C.capture:!!C,ge=wr(o);if(ge||(o[_s]=ge=new yr(o)),d=ge.add(u,d,g,B,N),d.proxy)return d;if(g=Ci(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Wa||(C=B),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(ws(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ci(){function o(d){return u.call(o.src,o.listener,d)}let u=Qa;return o}function ki(o,u,d,g,C){if(Array.isArray(u)){for(var N=0;N<u.length;N++)ki(o,u[N],d,g,C);return null}return d=Is(d),o&&o[dn]?o.L(u,d,f(g)?!!g.capture:!!g,C):ne(o,u,d,!0,g,C)}function ys(o,u,d,g,C){if(Array.isArray(u))for(var N=0;N<u.length;N++)ys(o,u[N],d,g,C);else g=f(g)?!!g.capture:!!g,d=Is(d),o&&o[dn]?(o=o.i,u=String(u).toString(),u in o.g&&(N=o.g[u],d=vr(N,d,g,C),-1<d&&(_r(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete o.g[u],o.h--)))):o&&(o=wr(o))&&(u=o.g[u.toString()],o=-1,u&&(o=vr(u,d,g,C)),(d=-1<o?u[o]:null)&&vs(d))}function vs(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[dn])gs(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(ws(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=wr(u))?(gs(d,o),d.h==0&&(d.src=null,u[_s]=null)):_r(o)}}}function ws(o){return o in Qt?Qt[o]:Qt[o]="on"+o}function Qa(o,u){if(o.da)o=!0;else{u=new ke(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&vs(o),o=d.call(g,u)}return o}function wr(o){return o=o[_s],o instanceof yr?o:null}var bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(o){return typeof o=="function"?o:(o[bs]||(o[bs]=function(u){return o.handleEvent(u)}),o[bs])}function De(){wt.call(this),this.i=new yr(this),this.M=this,this.F=null}F(De,wt),De.prototype[dn]=!0,De.prototype.removeEventListener=function(o,u,d,g){ys(this,o,u,d,g)};function Le(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Te(u,o);else if(u instanceof Te)u.target=u.target||o;else{var C=u;u=new Te(g,o),A(u,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var B=u.g=d[N];C=Mn(B,g,!0,u)&&C}if(B=u.g=o,C=Mn(B,g,!0,u)&&C,C=Mn(B,g,!1,u)&&C,d)for(N=0;N<d.length;N++)B=u.g=d[N],C=Mn(B,g,!1,u)&&C}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)_r(d[g]);delete o.g[u],o.h--}}this.F=null},De.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},De.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function Mn(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,N=0;N<u.length;++N){var B=u[N];if(B&&!B.da&&B.capture==d){var ge=B.listener,Ge=B.ha||B.src;B.fa&&gs(o.i,B),C=ge.call(Ge,g)!==!1&&C}}return C&&!g.defaultPrevented}function Es(o,u,d){if(typeof o=="function")d&&(o=T(o,d));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ts(o){o.g=Es(()=>{o.g=null,o.i&&(o.i=!1,Ts(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class Di extends wt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ts(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(o){wt.call(this),this.h=o,this.g={}}F(fn,wt);var As=[];function Ni(o){ce(o.g,function(u,d){this.g.hasOwnProperty(d)&&vs(u)},o),o.g={}}fn.prototype.N=function(){fn.aa.N.call(this),Ni(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ss=c.JSON.stringify,pn=c.JSON.parse,mt=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function rt(){}rt.prototype.h=null;function Fn(o){return o.h||(o.h=o.i())}function br(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){Te.call(this,"d")}F(Bn,Te);function jn(){Te.call(this,"c")}F(jn,Te);var Dt={},Ir=null;function Nt(){return Ir=Ir||new De}Dt.La="serverreachability";function qn(o){Te.call(this,Dt.La,o)}F(qn,Te);function Jt(o){let u=Nt();Le(u,new qn(u))}Dt.STAT_EVENT="statevent";function Rs(o,u){Te.call(this,Dt.STAT_EVENT,o),this.stat=u}F(Rs,Te);function Me(o){let u=Nt();Le(u,new Rs(u,o))}Dt.Ma="timingevent";function Oi(o,u){Te.call(this,Dt.Ma,o),this.size=u}F(Oi,Te);function zn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function $n(o,u,d,g,C,N){o.info(function(){if(o.g)if(N)for(var B="",ge=N.split("&"),Ge=0;Ge<ge.length;Ge++){var he=ge[Ge].split("=");if(1<he.length){var We=he[0];he=he[1];var Qe=We.split("_");B=2<=Qe.length&&Qe[1]=="type"?B+(We+"="+he+"&"):B+(We+"=redacted&")}}else B=null;else B=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+d+`
`+B})}function Ja(o,u,d,g,C,N,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+d+`
`+N+" "+B})}function bt(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xa(o,d)+(g?" "+g:"")})}function Ya(o,u){o.info(function(){return"TIMEOUT: "+u})}Gn.prototype.info=function(){};function Xa(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var B=1;B<C.length;B++)C[B]=""}}}}return Ss(d)}catch{return u}}var Er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ps={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cs;function Tr(){}F(Tr,rt),Tr.prototype.g=function(){return new XMLHttpRequest},Tr.prototype.i=function(){return{}},Cs=new Tr;function It(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xi}function xi(){this.i=null,this.g="",this.h=!1}var Vi={},Hn={};function mn(o,u,d){o.L=1,o.v=y(et(u)),o.m=d,o.P=!0,ks(o,null)}function ks(o,u){o.F=Date.now(),Ar(o),o.A=et(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Et(d.i,"t",g),o.C=0,d=o.j.J,o.h=new xi,o.g=id(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Di(T(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(As[0]=C.toString()),C=As);for(var N=0;N<C.length;N++){var B=Pi(d,C[N],g||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?b(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Jt(),$n(o.i,o.u,o.A,o.l,o.R,o.m)}It.prototype.ca=function(o){o=o.target;let u=this.M;u&&Xt(o)==3?u.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)e:{let Qe=Xt(this.g);var u=this.g.Ba();let Dr=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||Wh(this.g)))){this.J||Qe!=4||u==7||(u==8||0>=Dr?Jt(3):Jt(2)),Ns(this);var d=this.g.Z();this.X=d;t:if(Li(this)){var g=Wh(this.g);o="";var C=g.length,N=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),gn(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(N&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,Ja(this.i,this.u,this.A,this.l,this.R,Qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Ge=this.g;if((ge=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(ge)){var he=ge;break t}}he=null}if(d=he)bt(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sr(this,d);else{this.o=!1,this.s=3,Me(12),Yt(this),gn(this);break e}}if(this.P){d=!0;let St;for(;!this.J&&this.C<B.length;)if(St=Za(this,B),St==Hn){Qe==4&&(this.s=4,Me(14),d=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Vi){this.s=4,Me(15),bt(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else bt(this.i,this.l,St,null),Sr(this,St);if(Li(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||B.length!=0||this.h.h||(this.s=1,Me(16),d=!1),this.o=this.o&&d,!d)bt(this.i,this.l,B,"[Invalid Chunked Response]"),Yt(this),gn(this);else if(0<B.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),ac(We),We.M=!0,Me(11))}}else bt(this.i,this.l,B,null),Sr(this,B);Qe==4&&Yt(this),this.o&&!this.J&&(Qe==4?td(this.j,this):(this.o=!1,Ar(this)))}else Lg(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,Me(12)):(this.s=0,Me(13)),Yt(this),gn(this)}}}catch{}finally{}};function Li(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Za(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?Hn:(d=Number(u.substring(d,g)),isNaN(d)?Vi:(g+=1,g+d>u.length?Hn:(u=u.slice(g,g+d),o.C=g+d,u)))}It.prototype.cancel=function(){this.J=!0,Yt(this)};function Ar(o){o.S=Date.now()+o.I,Ds(o,o.I)}function Ds(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=zn(T(o.ba,o),u)}function Ns(o){o.B&&(c.clearTimeout(o.B),o.B=null)}It.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Ya(this.i,this.A),this.L!=2&&(Jt(),Me(17)),Yt(this),this.s=2,gn(this)):Ds(this,this.S-o)};function gn(o){o.j.G==0||o.J||td(o.j,o)}function Yt(o){Ns(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ni(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Sr(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Os(d.h,o))){if(!o.K&&Os(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Hi(d),Gi(d);else break e;oc(d),Me(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=zn(T(d.Za,d),6e3));if(1>=Ui(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Kn(d,11)}else if((o.K||d.g==o)&&Hi(d),!H(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let he=C[u];if(d.T=he[0],he=he[1],d.G==2)if(he[0]=="c"){d.K=he[1],d.ia=he[2];let We=he[3];We!=null&&(d.la=We,d.j.info("VER="+d.la));let Qe=he[4];Qe!=null&&(d.Aa=Qe,d.j.info("SVER="+d.Aa));let Dr=he[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(g=1.5*Dr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;let St=o.g;if(St){let Wi=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wi){var N=g.h;N.g||Wi.indexOf("spdy")==-1&&Wi.indexOf("quic")==-1&&Wi.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Rr(N,N.h),N.h=null))}if(g.D){let cc=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(g.ya=cc,m(g.I,g.D,cc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=o;if(g.qa=sd(g,g.J?g.ia:null,g.W),B.K){Bi(g.h,B);var ge=B,Ge=g.L;Ge&&(ge.I=Ge),ge.B&&(Ns(ge),Ar(ge)),g.g=B}else Zh(g);0<d.i.length&&$i(d)}else he[0]!="stop"&&he[0]!="close"||Kn(d,7);else d.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?Kn(d,7):ic(d):he[0]!="noop"&&d.l&&d.l.ta(he),d.v=0)}}Jt(4)}catch{}}var ec=class{constructor(o,u){this.g=o,this.map=u}};function Mi(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ui(o){return o.h?1:o.g?o.g.size:0}function Os(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Rr(o,u){o.g?o.g.add(u):o.h=u}function Bi(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Mi.prototype.cancel=function(){if(this.i=Pr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Pr(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let d of o.g.values())u=u.concat(d.D);return u}return q(o.i)}function tc(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function nc(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(let g in o)u[d++]=g;return u}}}function Cr(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=nc(o),g=tc(o),C=g.length,N=0;N<C;N++)u.call(void 0,g[N],d&&d[N],o)}var xs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rc(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),C=null;if(0<=g){var N=o[d].substring(0,g);C=o[d].substring(g+1)}else N=o[d];u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Ke(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ke){this.h=o.h,Ot(this,o.j),this.o=o.o,this.g=o.g,h(this,o.s),this.l=o.l;var u=o.i,d=new at;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),p(this,d),this.m=o.m}else o&&(u=String(o).match(xs))?(this.h=!1,Ot(this,u[1]||"",!0),this.o=w(u[2]||""),this.g=w(u[3]||"",!0),h(this,u[4]),this.l=w(u[5]||"",!0),p(this,u[6]||"",!0),this.m=w(u[7]||"")):(this.h=!1,this.i=new at(null,this.h))}Ke.prototype.toString=function(){var o=[],u=this.j;u&&o.push(P(u,U,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(P(u,U,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(P(d,d.charAt(0)=="/"?$:j,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",P(d,st)),o.join("")};function et(o){return new Ke(o)}function Ot(o,u,d){o.j=d?w(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function h(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function p(o,u,d){u instanceof at?(o.i=u,ji(o.i,o.h)):(d||(u=P(u,fe)),o.i=new at(u,o.h))}function m(o,u,d){o.i.set(u,d)}function y(o){return m(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function w(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function P(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,x),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function x(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var U=/[#\/\?@]/g,j=/[#\?:]/g,$=/[#\?]/g,fe=/[#\?@]/g,st=/#/g;function at(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function ct(o){o.g||(o.g=new Map,o.h=0,o.i&&rc(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=at.prototype,n.add=function(o,u){ct(this),this.i=null,o=Tt(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function re(o,u){ct(o),u=Tt(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function xt(o,u){return ct(o),u=Tt(o,u),o.g.has(u)}n.forEach=function(o,u){ct(this),this.g.forEach(function(d,g){d.forEach(function(C){o.call(u,C,g,this)},this)},this)},n.na=function(){ct(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){let C=o[g];for(let N=0;N<C.length;N++)d.push(u[g])}return d},n.V=function(o){ct(this);let u=[];if(typeof o=="string")xt(this,o)&&(u=u.concat(this.g.get(Tt(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return ct(this),this.i=null,o=Tt(this,o),xt(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Et(o,u,d){re(o,u),0<d.length&&(o.i=null,o.g.set(Tt(o,u),q(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];let N=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var C=N;B[g]!==""&&(C+="="+encodeURIComponent(String(B[g]))),o.push(C)}}return this.i=o.join("&")};function Tt(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function ji(o,u){u&&!o.j&&(ct(o),o.i=null,o.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(re(this,g),Et(this,C,d))},o)),o.j=u}function Y(o,u){let d=new Gn;if(c.Image){let g=new Image;g.onload=O(_e,d,"TestLoadImage: loaded",!0,u,g),g.onerror=O(_e,d,"TestLoadImage: error",!1,u,g),g.onabort=O(_e,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=O(_e,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function pe(o,u){let d=new Gn,g=new AbortController,C=setTimeout(()=>{g.abort(),_e(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?_e(d,"TestPingServer: ok",!0,u):_e(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),_e(d,"TestPingServer: error",!1,u)})}function _e(o,u,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function it(){this.g=new mt}function qi(o,u,d){let g=d||"";try{Cr(o,function(C,N){let B=C;f(C)&&(B=Ss(C)),u.push(g+N+"="+encodeURIComponent(B))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Ne(o){this.l=o.Ub||null,this.j=o.eb||!1}F(Ne,rt),Ne.prototype.g=function(){return new At(this.l,this.j)},Ne.prototype.i=function(o){return function(){return o}}({});function At(o,u){De.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(At,De),n=At.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Vs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_n(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function _n(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?yn(this):Vs(this),this.readyState==3&&_n(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,yn(this))},n.Qa=function(o){this.g&&(this.response=o,yn(this))},n.ga=function(){this.g&&yn(this)};function yn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vs(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(At.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function zh(o){let u="";return ce(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function sc(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=zh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):m(o,u,d))}function be(o){De.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(be,De);var xg=/^https?$/i,Vg=["POST","PUT"];n=be.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cs.g(),this.v=this.o?Fn(this.o):Fn(Cs),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(N){Gh(this,N);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(let N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Vg,u,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[N,B]of d)this.g.setRequestHeader(N,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kh(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){Gh(this,N)}};function Gh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,$h(o),zi(o)}function $h(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),zi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),be.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hh(this):this.bb())},n.bb=function(){Hh(this)};function Hh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xt(o)!=4||o.Z()!=2)){if(o.u&&Xt(o)==4)Es(o.Ea,0,o);else if(Le(o,"readystatechange"),Xt(o)==4){o.h=!1;try{let B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=B===0){var C=String(o.D).match(xs)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!xg.test(C?C.toLowerCase():"")}d=g}if(d)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var N=2<Xt(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",$h(o)}}finally{zi(o)}}}}function zi(o,u){if(o.g){Kh(o);let d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Le(o,"ready");try{d.onreadystatechange=g}catch{}}}function Kh(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Xt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),pn(u)}};function Wh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lg(o){let u={};o=(o.g&&2<=Xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(H(o[g]))continue;var d=S(o[g]);let C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();let N=u[C]||[];u[C]=N,N.push(d)}R(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Qh(o){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,o),this.cb=Ls("retryDelaySeedMs",1e4,o),this.Wa=Ls("forwardChannelMaxRetries",2,o),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(o&&o.concurrentRequestLimit),this.Da=new it,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qh.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,g){Me(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=sd(this,null,this.W),$i(this)};function ic(o){if(Jh(o),o.G==3){var u=o.U++,d=et(o.I);if(m(d,"SID",o.K),m(d,"RID",u),m(d,"TYPE","terminate"),Ms(o,d),u=new It(o,o.j,u),u.L=2,u.v=y(et(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=id(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ar(u)}rd(o)}function Gi(o){o.g&&(ac(o),o.g.cancel(),o.g=null)}function Jh(o){Gi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Hi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function $i(o){if(!Fi(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ee||Ri(),vt||(Ee(),vt=!0),He.add(u,o),o.B=0}}function Mg(o,u){return Ui(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=zn(T(o.Ga,o,u),nd(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let C=new It(this,this.j,o),N=this.o;if(this.S&&(N?(N=b(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Xh(this,C,u),d=et(this.I),m(d,"RID",o),m(d,"CVER",22),this.D&&m(d,"X-HTTP-Session-Id",this.D),Ms(this,d),N&&(this.O?u="headers="+encodeURIComponent(String(zh(N)))+"&"+u:this.m&&sc(d,this.m,N)),Rr(this.h,C),this.Ua&&m(d,"TYPE","init"),this.P?(m(d,"$req",u),m(d,"SID","null"),C.T=!0,mn(C,d,null)):mn(C,d,u),this.G=2}}else this.G==3&&(o?Yh(this,o):this.i.length==0||Fi(this.h)||Yh(this))};function Yh(o,u){var d;u?d=u.l:d=o.U++;let g=et(o.I);m(g,"SID",o.K),m(g,"RID",d),m(g,"AID",o.T),Ms(o,g),o.m&&o.o&&sc(g,o.m,o.o),d=new It(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Xh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Rr(o.h,d),mn(d,g,u)}function Ms(o,u){o.H&&ce(o.H,function(d,g){m(u,g,d)}),o.l&&Cr({},function(d,g){m(u,g,d)})}function Xh(o,u,d){d=Math.min(o.i.length,d);var g=o.l?T(o.l.Na,o.l,o):null;e:{var C=o.i;let N=-1;for(;;){let B=["count="+d];N==-1?0<d?(N=C[0].g,B.push("ofs="+N)):N=0:B.push("ofs="+N);let ge=!0;for(let Ge=0;Ge<d;Ge++){let he=C[Ge].g,We=C[Ge].map;if(he-=N,0>he)N=Math.max(0,C[Ge].g-100),ge=!1;else try{qi(We,B,"req"+he+"_")}catch{g&&g(We)}}if(ge){g=B.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function Zh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ee||Ri(),vt||(Ee(),vt=!0),He.add(u,o),o.v=0}}function oc(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=zn(T(o.Fa,o),nd(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ed(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=zn(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Me(10),Gi(this),ed(this))};function ac(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ed(o){o.g=new It(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=et(o.qa);m(u,"RID","rpc"),m(u,"SID",o.K),m(u,"AID",o.T),m(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&m(u,"TO",o.ja),m(u,"TYPE","xmlhttp"),Ms(o,u),o.m&&o.o&&sc(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=y(et(u)),d.m=null,d.P=!0,ks(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Gi(this),oc(this),Me(19))};function Hi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function td(o,u){var d=null;if(o.g==u){Hi(o),ac(o),o.g=null;var g=2}else if(Os(o.h,u))d=u.D,Bi(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Nt(),Le(g,new Oi(g,d)),$i(o)}else Zh(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Mg(o,u)||g==2&&oc(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:Kn(o,5);break;case 4:Kn(o,10);break;case 3:Kn(o,6);break;default:Kn(o,2)}}}function nd(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Kn(o,u){if(o.j.info("Error code "+u),u==2){var d=T(o.fb,o),g=o.Xa;let C=!g;g=new Ke(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ot(g,"https"),y(g),C?Y(g.toString(),d):pe(g.toString(),d)}else Me(2);o.G=0,o.l&&o.l.sa(u),rd(o),Jh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function rd(o){if(o.G=0,o.ka=[],o.l){let u=Pr(o.h);(u.length!=0||o.i.length!=0)&&(M(o.ka,u),M(o.ka,o.i),o.h.i.length=0,q(o.i),o.i.length=0),o.l.ra()}}function sd(o,u,d){var g=d instanceof Ke?et(d):new Ke(d);if(g.g!="")u&&(g.g=u+"."+g.g),h(g,g.s);else{var C=c.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var N=new Ke(null);g&&Ot(N,g),u&&(N.g=u),C&&h(N,C),d&&(N.l=d),g=N}return d=o.D,u=o.ya,d&&u&&m(g,d,u),m(g,"VER",o.la),Ms(o,g),g}function id(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new be(new Ne({eb:d})):new be(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function od(){}n=od.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ki(){}Ki.prototype.g=function(o,u){return new ut(o,u)};function ut(o,u){De.call(this),this.g=new Qh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!H(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!H(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}F(ut,De),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){ic(this.g)},ut.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ss(o),o=d);u.i.push(new ec(u.Ya++,o)),u.G==3&&$i(u)},ut.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,ut.aa.N.call(this)};function ad(o){Bn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(let d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}F(ad,Bn);function cd(){jn.call(this),this.status=1}F(cd,jn);function kr(o){this.g=o}F(kr,od),kr.prototype.ua=function(){Le(this.g,"a")},kr.prototype.ta=function(o){Le(this.g,new ad(o))},kr.prototype.sa=function(o){Le(this.g,new cd)},kr.prototype.ra=function(){Le(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,yu=sn.createWebChannelTransport=function(){return new Ki},_u=sn.getStatEventTarget=function(){return Nt()},gu=sn.Event=Dt,Bo=sn.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,ri=sn.ErrorCode=Er,Ps.COMPLETE="complete",mu=sn.EventType=Ps,br.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",De.prototype.listen=De.prototype.K,Mr=sn.WebChannel=br,Qv=sn.FetchXmlHttpFactory=Ne,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,pu=sn.XhrIo=be}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});var $f="@firebase/firestore",Hf="4.8.0";var Ue=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");var cs="11.10.0";var ir=new wn("@firebase/firestore");function Fr(){return ir.logLevel}function G(n,...e){if(ir.logLevel<=ae.DEBUG){let t=e.map(ch);ir.debug(`Firestore (${cs}): ${n}`,...t)}}function on(n,...e){if(ir.logLevel<=ae.ERROR){let t=e.map(ch);ir.error(`Firestore (${cs}): ${n}`,...t)}}function Nn(n,...e){if(ir.logLevel<=ae.WARN){let t=e.map(ch);ir.warn(`Firestore (${cs}): ${n}`,...t)}}function ch(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function Z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Vp(n,r,t)}function Vp(n,e,t){let r=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw on(r),new Error(r)}function me(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Vp(e,s,r)}function se(n,e){return n}var V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},K=class extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var qt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var Ko=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Tu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ue.UNAUTHENTICATED))}shutdown(){}},Au=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Su=class{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let r=this.i,s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),i=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qt,e.enqueueRetryable(()=>s(this.currentUser))};let a=()=>{let l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?c(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new Ko(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new Ue(e)}},Ru=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Pu=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ru(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Wo=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Cu=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);let r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);let a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};let s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){let i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wo(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wo(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Jv(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function Lp(){return new TextEncoder}var ui=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let s=Jv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}};function oe(n,e){return n<e?-1:n>e?1:0}function ku(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return oe(r,s);{let i=Lp(),a=Yv(i.encode(Kf(n,t)),i.encode(Kf(e,t)));return a!==0?a:oe(r,s)}}t+=r>65535?2:1}return oe(n.length,e.length)}function Kf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Yv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return oe(n[t],e[t]);return oe(n.length,e.length)}function Hr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}var Wf="__name__",Qo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&Z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let s=0;s<r;s++){let i=n.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return oe(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),s=n.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?n.extractNumericId(e).compare(n.extractNumericId(t)):ku(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rn.fromString(e.substring(4,e.length-2))}},we=class n extends Qo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new K(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new n(t)}static emptyPath(){return new n([])}},Xv=/^[_a-zA-Z][_a-zA-Z0-9]*$/,dt=class n extends Qo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return Xv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wf}static keyField(){return new n([Wf])}static fromServerFormat(e){let t=[],r="",s=0,i=()=>{if(r.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;s<e.length;){let c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new K(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var X=class n{constructor(e){this.path=e}static fromPath(e){return new n(we.fromString(e))}static fromName(e){return new n(we.fromString(e).popFirst(5))}static empty(){return new n(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return we.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new we(e.slice()))}};function Mp(n,e,t){if(!t)throw new K(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Zv(n,e,t,r){if(e===!0&&r===!0)throw new K(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qf(n){if(!X.isDocumentKey(n))throw new K(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Jf(n){if(X.isDocumentKey(n))throw new K(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function uh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Z(12329,{type:typeof n})}function ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=uh(n);throw new K(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Pe(n,e){let t={typeString:n};return e&&(t.value=e),t}function vi(n,e){if(!Fp(n))throw new K(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(V.INVALID_ARGUMENT,t);return!0}var Yf=-62135596800,Xf=1e6,Ce=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Xf);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yf)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xf}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vi(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-Yf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Pe("string",Ce._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};var ie=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Ce(0,0))}static max(){return new n(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var li=-1,Du=class{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}};Du.UNKNOWN_ID=-1;function ew(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new or(s,X.empty(),e)}function tw(n){return new or(n.readTime,n.key,li)}var or=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(ie.min(),X.empty(),li)}static max(){return new n(ie.max(),X.empty(),li)}};function nw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}var rw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Nu=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function us(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==rw)throw n;G("LocalStore","Unexpectedly lost primary lease")}var L=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(s=>s?n.resolve(s):r());return t}static forEach(e,t){let r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new n((r,s)=>{let i=e.length,a=new Array(i),c=0;for(let l=0;l<i;l++){let f=l;t(e[f]).next(_=>{a[f]=_,++c,c===i&&r(a)},_=>s(_))}})}static doWhile(e,t){return new n((r,s)=>{let i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}};function sw(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}var Kr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};Kr.ue=-1;var lh=-1;function Pa(n){return n==null}function hi(n){return n===0&&1/n==-1/0}function iw(n){return typeof n=="number"&&Number.isInteger(n)&&!hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var Up="";function ow(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zf(e)),e=aw(n.get(t),e);return Zf(e)}function aw(n,e){let t=e,r=n.length;for(let s=0;s<r;s++){let i=n.charAt(s);switch(i){case"\0":t+="";break;case Up:t+="";break;default:t+=i}}return t}function Zf(n){return n+Up+""}var cw="remoteDocuments",Bp="owner";var jp="mutationQueues";var qp="mutations";var zp="documentMutations",uw="remoteDocumentsV14";var Gp="remoteDocumentGlobal";var $p="targets";var Hp="targetDocuments";var Kp="targetGlobal",Wp="collectionParents";var Qp="clientMetadata";var Jp="bundles";var Yp="namedQueries";var lw="indexConfiguration";var hw="indexState";var dw="indexEntries";var Xp="documentOverlays";var fw="globals";var pw=[jp,qp,zp,cw,$p,Bp,Kp,Hp,Qp,Gp,Wp,Jp,Yp],sT=[...pw,Xp],mw=[jp,qp,zp,uw,$p,Bp,Kp,Hp,Qp,Gp,Wp,Jp,Yp,Xp],gw=mw,_w=[...gw,lw,hw,dw];var iT=[..._w,fw];function ep(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ln(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zp(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var Ie=class n{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qr(this.root,e,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qr(this.root,e,this.comparator,!0)}},qr=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},zt=class n{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??n.RED,this.left=s??n.EMPTY,this.right=i??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new n(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this,i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return n.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}};zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Be=class n{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jo(this.data.getIterator())}getIteratorFrom(e){return new Jo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},Jo=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var yt=class n{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new n([])}unionWith(e){let t=new Be(dt.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var Yo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Xe=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yo("Invalid base64 string: "+i):i}}(e);return new n(t)}static fromUint8Array(e){let t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Xe.EMPTY_BYTE_STRING=new Xe("");var yw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function an(n){if(me(!!n,39018),typeof n=="string"){let e=0,t=yw.exec(n);if(me(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function cn(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}var em="server_timestamp",tm="__type__",nm="__previous_value__",rm="__local_write_time__";function hh(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[tm])===null||t===void 0?void 0:t.stringValue)===em}function Ca(n){let e=n.mapValue.fields[nm];return hh(e)?Ca(e):e}function di(n){let e=an(n.mapValue.fields[rm].timestampValue);return new Ce(e.seconds,e.nanos)}var Ou=class{constructor(e,t,r,s,i,a,c,l,f,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f,this.isUsingEmulator=_}},Xo="(default)",Zo=class n{constructor(e,t){this.projectId=e,this.database=t||Xo}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===Xo}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var dh="__type__",sm="__max__",jo={mapValue:{fields:{__type__:{stringValue:sm}}}},fh="__vector__",Wr="value";function On(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hh(n)?4:om(n)?9007199254740991:im(n)?10:11:Z(28295,{value:n})}function Ht(n,e){if(n===e)return!0;let t=On(n);if(t!==On(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return di(n).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;let a=an(s.timestampValue),c=an(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return cn(s.bytesValue).isEqual(cn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){let a=ye(s.doubleValue),c=ye(i.doubleValue);return a===c?hi(a)===hi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Hr(n.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:case 11:return function(s,i){let a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ep(a)!==ep(c))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Ht(a[l],c[l])))return!1;return!0}(n,e);default:return Z(52216,{left:n})}}function fi(n,e){return(n.values||[]).find(t=>Ht(t,e))!==void 0}function Qr(n,e){if(n===e)return 0;let t=On(n),r=On(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(i,a){let c=ye(i.integerValue||i.doubleValue),l=ye(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return tp(n.timestampValue,e.timestampValue);case 4:return tp(di(n),di(e));case 5:return ku(n.stringValue,e.stringValue);case 6:return function(i,a){let c=cn(i),l=cn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){let c=i.split("/"),l=a.split("/");for(let f=0;f<c.length&&f<l.length;f++){let _=oe(c[f],l[f]);if(_!==0)return _}return oe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){let c=oe(ye(i.latitude),ye(a.latitude));return c!==0?c:oe(ye(i.longitude),ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return np(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,f,_;let v=i.fields||{},T=a.fields||{},O=(c=v[Wr])===null||c===void 0?void 0:c.arrayValue,F=(l=T[Wr])===null||l===void 0?void 0:l.arrayValue,q=oe(((f=O?.values)===null||f===void 0?void 0:f.length)||0,((_=F?.values)===null||_===void 0?void 0:_.length)||0);return q!==0?q:np(O,F)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===jo.mapValue&&a===jo.mapValue)return 0;if(i===jo.mapValue)return 1;if(a===jo.mapValue)return-1;let c=i.fields||{},l=Object.keys(c),f=a.fields||{},_=Object.keys(f);l.sort(),_.sort();for(let v=0;v<l.length&&v<_.length;++v){let T=ku(l[v],_[v]);if(T!==0)return T;let O=Qr(c[l[v]],f[_[v]]);if(O!==0)return O}return oe(l.length,_.length)}(n.mapValue,e.mapValue);default:throw Z(23264,{le:t})}}function tp(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);let t=an(n),r=an(e),s=oe(t.seconds,r.seconds);return s!==0?s:oe(t.nanos,r.nanos)}function np(n,e){let t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){let i=Qr(t[s],r[s]);if(i)return i}return oe(t.length,r.length)}function Jr(n){return xu(n)}function xu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=an(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return cn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(let i of t.values||[])s?s=!1:r+=",",r+=xu(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),s="{",i=!0;for(let a of r)i?i=!1:s+=",",s+=`${a}:${xu(t.fields[a])}`;return s+"}"}(n.mapValue):Z(61005,{value:n})}function Go(n){switch(On(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Ca(n);return e?16+Go(e):16;case 5:return 2*n.stringValue.length;case 6:return cn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Go(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ln(r.fields,(i,a)=>{s+=i.length+Go(a)}),s}(n.mapValue);default:throw Z(13486,{value:n})}}function Vu(n){return!!n&&"integerValue"in n}function ph(n){return!!n&&"arrayValue"in n}function rp(n){return!!n&&"nullValue"in n}function sp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function $o(n){return!!n&&"mapValue"in n}function im(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[dh])===null||t===void 0?void 0:t.stringValue)===fh}function ii(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Ln(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ii(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ii(n.arrayValue.values[t]);return e}return Object.assign({},n)}function om(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===sm}var aT={mapValue:{fields:{[dh]:{stringValue:fh},[Wr]:{arrayValue:{}}}}};var ht=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!$o(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(t)}setAll(e){let t=dt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ii(a):s.push(c.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){let t=this.field(e.popLast());$o(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];$o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ln(t,(s,i)=>e[s]=i);for(let s of r)delete e[s]}clone(){return new n(ii(this.value))}};function am(n){let e=[];return Ln(n.fields,(t,r)=>{let s=new dt([t]);if($o(r)){let i=am(r.mapValue).fields;if(i.length===0)e.push(s);else for(let a of i)e.push(s.child(a))}else e.push(s)}),new yt(e)}var Ct=class n{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,ie.min(),ie.min(),ie.min(),ht.empty(),0)}static newFoundDocument(e,t,r,s){return new n(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new n(e,2,t,ie.min(),ie.min(),ht.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,ie.min(),ie.min(),ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Yr=class{constructor(e,t){this.position=e,this.inclusive=t}};function ip(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){let i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=Qr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function op(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ht(n.position[t],e.position[t]))return!1;return!0}var Xr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function vw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var ea=class{},xe=class n extends ea{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Mu(e,t,r):t==="array-contains"?new Bu(e,r):t==="in"?new ju(e,r):t==="not-in"?new qu(e,r):t==="array-contains-any"?new zu(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Fu(e,r):new Uu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Qr(t,this.value)):t!==null&&On(this.value)===On(t)&&this.matchesComparison(Qr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Kt=class n extends ea{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return cm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function cm(n){return n.op==="and"}function um(n){return ww(n)&&cm(n)}function ww(n){for(let e of n.filters)if(e instanceof Kt)return!1;return!0}function Lu(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+Jr(n.value);if(um(n))return n.filters.map(e=>Lu(e)).join(",");{let e=n.filters.map(t=>Lu(t)).join(",");return`${n.op}(${e})`}}function lm(n,e){return n instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&Ht(r.value,s.value)}(n,e):n instanceof Kt?function(r,s){return s instanceof Kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&lm(a,s.filters[c]),!0):!1}(n,e):void Z(19439)}function hm(n){return n instanceof xe?function(t){return`${t.field.canonicalString()} ${t.op} ${Jr(t.value)}`}(n):n instanceof Kt?function(t){return t.op.toString()+" {"+t.getFilters().map(hm).join(" ,")+"}"}(n):"Filter"}var Mu=class extends xe{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){let t=X.comparator(e.key,this.key);return this.matchesComparison(t)}},Fu=class extends xe{constructor(e,t){super(e,"in",t),this.keys=dm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Uu=class extends xe{constructor(e,t){super(e,"not-in",t),this.keys=dm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function dm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}var Bu=class extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ph(t)&&fi(t.arrayValue,this.value)}},ju=class extends xe{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&fi(this.value.arrayValue,t)}},qu=class extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!fi(this.value.arrayValue,t)}},zu=class extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ph(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>fi(this.value.arrayValue,r))}};var Gu=class{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}};function ap(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Gu(n,e,t,r,s,i,a)}function mh(n){let e=se(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Lu(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Jr(r)).join(",")),e.Pe=t}return e.Pe}function gh(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!op(n.startAt,e.startAt)&&op(n.endAt,e.endAt)}function $u(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Zr=class{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function bw(n,e,t,r,s,i,a,c){return new Zr(n,e,t,r,s,i,a,c)}function ka(n){return new Zr(n)}function cp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Iw(n){return n.collectionGroup!==null}function oi(n){let e=se(n);if(e.Te===null){e.Te=[];let t=new Set;for(let i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Be(dt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Xr(i,r))}),t.has(dt.keyField().canonicalString())||e.Te.push(new Xr(dt.keyField(),r))}return e.Te}function Gt(n){let e=se(n);return e.Ie||(e.Ie=Ew(e,oi(n))),e.Ie}function Ew(n,e){if(n.limitType==="F")return ap(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{let i=s.dir==="desc"?"asc":"desc";return new Xr(s.field,i)});let t=n.endAt?new Yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Yr(n.startAt.position,n.startAt.inclusive):null;return ap(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Hu(n,e,t){return new Zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Da(n,e){return gh(Gt(n),Gt(e))&&n.limitType===e.limitType}function fm(n){return`${mh(Gt(n))}|lt:${n.limitType}`}function Ur(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>hm(s)).join(", ")}]`),Pa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Jr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Jr(s)).join(",")),`Target(${r})`}(Gt(n))}; limitType=${n.limitType})`}function Na(n,e){return e.isFoundDocument()&&function(r,s){let i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(let i of oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(let i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){let f=ip(a,c,l);return a.inclusive?f<=0:f<0}(r.startAt,oi(r),s)||r.endAt&&!function(a,c,l){let f=ip(a,c,l);return a.inclusive?f>=0:f>0}(r.endAt,oi(r),s))}(n,e)}function Tw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pm(n){return(e,t)=>{let r=!1;for(let s of oi(n)){let i=Aw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Aw(n,e,t){let r=n.field.isKeyField()?X.comparator(e.key,t.key):function(i,a,c){let l=a.data.field(i),f=c.data.field(i);return l!==null&&f!==null?Qr(l,f):Z(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:n.dir})}}var un=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ln(this.inner,(t,r)=>{for(let[s,i]of r)e(s,i)})}isEmpty(){return Zp(this.inner)}size(){return this.innerSize}};var Sw=new Ie(X.comparator);function ln(){return Sw}var mm=new Ie(X.comparator);function si(...n){let e=mm;for(let t of n)e=e.insert(t.key,t);return e}function gm(n){let e=mm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function tr(){return ai()}function _m(){return ai()}function ai(){return new un(n=>n.toString(),(n,e)=>n.isEqual(e))}var Rw=new Ie(X.comparator),Pw=new Be(X.comparator);function ue(...n){let e=Pw;for(let t of n)e=e.add(t);return e}var Cw=new Be(oe);function kw(){return Cw}function _h(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hi(e)?"-0":e}}function ym(n){return{integerValue:""+n}}function vm(n,e){return iw(e)?ym(e):_h(n,e)}var es=class{constructor(){this._=void 0}};function Dw(n,e,t){return n instanceof ts?function(s,i){let a={fields:{[tm]:{stringValue:em},[rm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&hh(i)&&(i=Ca(i)),i&&(a.fields[nm]=i),{mapValue:a}}(t,e):n instanceof ar?bm(n,e):n instanceof cr?Im(n,e):function(s,i){let a=wm(s,i),c=up(a)+up(s.Ee);return Vu(a)&&Vu(s.Ee)?ym(c):_h(s.serializer,c)}(n,e)}function Nw(n,e,t){return n instanceof ar?bm(n,e):n instanceof cr?Im(n,e):t}function wm(n,e){return n instanceof ur?function(r){return Vu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}var ts=class extends es{},ar=class extends es{constructor(e){super(),this.elements=e}};function bm(n,e){let t=Em(e);for(let r of n.elements)t.some(s=>Ht(s,r))||t.push(r);return{arrayValue:{values:t}}}var cr=class extends es{constructor(e){super(),this.elements=e}};function Im(n,e){let t=Em(e);for(let r of n.elements)t=t.filter(s=>!Ht(s,r));return{arrayValue:{values:t}}}var ur=class extends es{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function up(n){return ye(n.integerValue||n.doubleValue)}function Em(n){return ph(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var Ku=class{constructor(e,t){this.field=e,this.transform=t}};function Ow(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ar&&s instanceof ar||r instanceof cr&&s instanceof cr?Hr(r.elements,s.elements,Ht):r instanceof ur&&s instanceof ur?Ht(r.Ee,s.Ee):r instanceof ts&&s instanceof ts}(n.transform,e.transform)}var Wu=class{constructor(e,t){this.version=e,this.transformResults=t}},pt=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Ho(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var ns=class{};function Tm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rs(n.key,pt.none()):new lr(n.key,n.data,pt.none());{let t=n.data,r=ht.empty(),s=new Be(dt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Wt(n.key,r,new yt(s.toArray()),pt.none())}}function xw(n,e,t){n instanceof lr?function(s,i,a){let c=s.value.clone(),l=hp(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Wt?function(s,i,a){if(!Ho(s.precondition,i))return void i.convertToUnknownDocument(a.version);let c=hp(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Am(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ci(n,e,t,r){return n instanceof lr?function(i,a,c,l){if(!Ho(i.precondition,a))return c;let f=i.value.clone(),_=dp(i.fieldTransforms,l,a);return f.setAll(_),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Wt?function(i,a,c,l){if(!Ho(i.precondition,a))return c;let f=dp(i.fieldTransforms,l,a),_=a.data;return _.setAll(Am(i)),_.setAll(f),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(i,a,c){return Ho(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Vw(n,e){let t=null;for(let r of n.fieldTransforms){let s=e.data.field(r.field),i=wm(r.transform,s||null);i!=null&&(t===null&&(t=ht.empty()),t.set(r.field,i))}return t||null}function lp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,a)=>Ow(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var lr=class extends ns{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}},Wt=class extends ns{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function Am(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function hp(n,e,t){let r=new Map;me(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){let i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Nw(a,c,t[s]))}return r}function dp(n,e,t){let r=new Map;for(let s of n){let i=s.transform,a=t.data.field(s.field);r.set(s.field,Dw(i,a,e))}return r}var rs=class extends ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Qu=class extends ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Ju=class{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){let i=this.mutations[s];i.key.isEqual(e.key)&&xw(i,e,r[s])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=ci(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=ci(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=_m();return this.mutations.forEach(s=>{let i=e.get(s.key),a=i.overlayedDocument,c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;let l=Tm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ue())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(t,r)=>lp(t,r))&&Hr(this.baseMutations,e.baseMutations,(t,r)=>lp(t,r))}},Yu=class n{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){me(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return Rw}(),i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new n(e,t,r,s)}};var Xu=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var Zu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Se,le;function Lw(n){switch(n){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:n})}}function Sm(n){if(n===void 0)return on("GRPC error has no .code"),V.UNKNOWN;switch(n){case Se.OK:return V.OK;case Se.CANCELLED:return V.CANCELLED;case Se.UNKNOWN:return V.UNKNOWN;case Se.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Se.INTERNAL:return V.INTERNAL;case Se.UNAVAILABLE:return V.UNAVAILABLE;case Se.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Se.NOT_FOUND:return V.NOT_FOUND;case Se.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Se.ABORTED:return V.ABORTED;case Se.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Se.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:n})}}(le=Se||(Se={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";var fp=null;var Mw=new rn([4294967295,4294967295],0);function pp(n){let e=Lp().encode(n),t=new fu;return t.update(e),new Uint8Array(t.digest())}function mp(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rn([t,r],0),new rn([s,i],0)]}var el=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nr(`Invalid padding: ${t}`);if(r<0)throw new nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new nr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=rn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(rn.fromNumber(r)));return s.compare(Mw)===1&&(s=new rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=pp(e),[r,s]=mp(t);for(let i=0;i<this.hashCount;i++){let a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){let s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new n(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;let t=pp(e),[r,s]=mp(t);for(let i=0;i<this.hashCount;i++){let a=this.pe(r,s,i);this.we(a)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},nr=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var ta=class n{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let s=new Map;return s.set(e,pi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(ie.min(),s,new Ie(oe),ln(),ue())}},pi=class n{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,ue(),ue(),ue())}};var zr=class{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}},na=class{constructor(e,t){this.targetId=e,this.De=t}},ra=class{constructor(e,t,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}},sa=class{constructor(){this.ve=0,this.Ce=gp(),this.Fe=Xe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ue(),t=ue(),r=ue();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new pi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=gp()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},tl=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=ln(),this.je=qo(),this.Je=qo(),this.He=new Ie(oe)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){let t=e.targetId,r=e.De.count,s=this.st(t);if(s){let i=s.target;if($u(i))if(r===0){let a=new X(i.path);this.Xe(t,a,Ct.newNoDocument(a,ie.min()))}else me(r===1,20013,{expectedCount:r});else{let a=this.ot(t);if(a!==r){let c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);let f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,f)}fp?.ct(function(_,v,T,O,F){var q,M,ee,H,te,de;let ze={localCacheCount:_,existenceFilterCount:v.count,databaseId:T.database,projectId:T.projectId},ce=v.unchangedNames;return ce&&(ze.bloomFilter={applied:F===0,hashCount:(q=ce?.hashCount)!==null&&q!==void 0?q:0,bitmapLength:(H=(ee=(M=ce?.bits)===null||M===void 0?void 0:M.bitmap)===null||ee===void 0?void 0:ee.length)!==null&&H!==void 0?H:0,padding:(de=(te=ce?.bits)===null||te===void 0?void 0:te.padding)!==null&&de!==void 0?de:0,mightContain:R=>{var b;return(b=O?.mightContain(R))!==null&&b!==void 0&&b}}),ze}(a,e.De,this.We.lt(),c,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t,a,c;try{a=cn(r).toUint8Array()}catch(l){if(l instanceof Yo)return Nn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new el(a,s,i)}catch(l){return Nn(l instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),s=0;return r.forEach(i=>{let a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)}),s}Pt(e){let t=new Map;this.Ge.forEach((i,a)=>{let c=this.st(a);if(c){if(i.current&&$u(c.target)){let l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,Ct.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let r=ue();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{let f=this.st(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));let s=new ta(e,t,this.He,this.ze,r);return this.ze=ln(),this.je=qo(),this.Je=qo(),this.He=new Ie(oe),s}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new sa,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Be(oe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Be(oe),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new sa),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function qo(){return new Ie(X.comparator)}function gp(){return new Ie(X.comparator)}var Fw={asc:"ASCENDING",desc:"DESCENDING"},Uw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bw={and:"AND",or:"OR"},nl=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function rl(n,e){return n.useProto3Json||Pa(e)?e:{value:e}}function ia(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jw(n,e){return ia(n,e.toTimestamp())}function $t(n){return me(!!n,49232),ie.fromTimestamp(function(t){let r=an(t);return new Ce(r.seconds,r.nanos)}(n))}function yh(n,e){return sl(n,e).canonicalString()}function sl(n,e){let t=function(s){return new we(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Pm(n){let e=we.fromString(n);return me(Om(e),10190,{key:e.toString()}),e}function il(n,e){return yh(n.databaseId,e.path)}function vu(n,e){let t=Pm(e);if(t.get(1)!==n.databaseId.projectId)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(km(t))}function Cm(n,e){return yh(n.databaseId,e)}function qw(n){let e=Pm(n);return e.length===4?we.emptyPath():km(e)}function ol(n){return new we(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function km(n){return me(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function _p(n,e,t){return{name:il(n,e),fields:t.value.mapValue.fields}}function zw(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:Z(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,_){return f.useProto3Json?(me(_===void 0||typeof _=="string",58123),Xe.fromBase64String(_||"")):(me(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),Xe.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){let _=f.code===void 0?V.UNKNOWN:Sm(f.code);return new K(_,f.message||"")}(a);t=new ra(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let s=vu(n,r.document.name),i=$t(r.document.updateTime),a=r.document.createTime?$t(r.document.createTime):ie.min(),c=new ht({mapValue:{fields:r.document.fields}}),l=Ct.newFoundDocument(s,i,a,c),f=r.targetIds||[],_=r.removedTargetIds||[];t=new zr(f,_,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let s=vu(n,r.document),i=r.readTime?$t(r.readTime):ie.min(),a=Ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new zr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let s=vu(n,r.document),i=r.removedTargetIds||[];t=new zr([],i,s,null)}else{if(!("filter"in e))return Z(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:s=0,unchangedNames:i}=r,a=new Zu(s,i),c=r.targetId;t=new na(c,a)}}return t}function Gw(n,e){let t;if(e instanceof lr)t={update:_p(n,e.key,e.value)};else if(e instanceof rs)t={delete:il(n,e.key)};else if(e instanceof Wt)t={update:_p(n,e.key,e.data),updateMask:Zw(e.fieldMask)};else{if(!(e instanceof Qu))return Z(16599,{Rt:e.type});t={verify:il(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){let c=a.transform;if(c instanceof ts)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ar)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw Z(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(n,e.precondition)),t}function $w(n,e){return n&&n.length>0?(me(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?$t(s.updateTime):$t(i);return a.isEqual(ie.min())&&(a=$t(i)),new Wu(a,s.transformResults||[])}(t,e))):[]}function Hw(n,e){return{documents:[Cm(n,e.path)]}}function Kw(n,e){let t={structuredQuery:{}},r=e.path,s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Cm(n,s);let i=function(f){if(f.length!==0)return Nm(Kt.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);let a=function(f){if(f.length!==0)return f.map(_=>function(T){return{field:Br(T.field),direction:Jw(T.dir)}}(_))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=rl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{Vt:t,parent:s}}function Ww(n){let e=qw(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,s=null;if(r>0){me(r===1,65062);let _=t.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let i=[];t.where&&(i=function(v){let T=Dm(v);return T instanceof Kt&&um(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(T=>function(F){return new Xr(jr(F.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(v){let T;return T=typeof v=="object"?v.value:v,Pa(T)?null:T}(t.limit));let l=null;t.startAt&&(l=function(v){let T=!!v.before,O=v.values||[];return new Yr(O,T)}(t.startAt));let f=null;return t.endAt&&(f=function(v){let T=!v.before,O=v.values||[];return new Yr(O,T)}(t.endAt)),bw(e,s,a,i,c,"F",l,f)}function Qw(n,e){let t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Dm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=jr(t.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":let s=jr(t.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=jr(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=jr(t.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(n):n.fieldFilter!==void 0?function(t){return xe.create(jr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Kt.create(t.compositeFilter.filters.map(r=>Dm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(t.compositeFilter.op))}(n):Z(30097,{filter:n})}function Jw(n){return Fw[n]}function Yw(n){return Uw[n]}function Xw(n){return Bw[n]}function Br(n){return{fieldPath:n.canonicalString()}}function jr(n){return dt.fromServerFormat(n.fieldPath)}function Nm(n){return n instanceof xe?function(t){if(t.op==="=="){if(sp(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NAN"}};if(rp(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sp(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NAN"}};if(rp(t.value))return{unaryFilter:{field:Br(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(t.field),op:Yw(t.op),value:t.value}}}(n):n instanceof Kt?function(t){let r=t.getFilters().map(s=>Nm(s));return r.length===1?r[0]:{compositeFilter:{op:Xw(t.op),filters:r}}}(n):Z(54877,{filter:n})}function Zw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Om(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var mi=class n{constructor(e,t,r,s,i=ie.min(),a=ie.min(),c=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var al=class{constructor(e){this.gt=e}};function eb(n){let e=Ww({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hu(e,e.limit,"L"):e}var oa=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ye(e.integerValue));else if("doubleValue"in e){let r=ye(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),hi(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=an(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(cn(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?om(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):im(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):Z(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let s of Object.keys(r))this.xt(s,t),this.Dt(r[s],t)}Lt(e,t){var r,s;let i=e.fields||{};this.Ct(t,53);let a=Wr,c=((s=(r=i[a].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Ct(t,15),t.Ft(ye(c)),this.xt(a,t),this.Dt(i[a],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let s of r)this.Dt(s,t)}Bt(e,t){this.Ct(t,37),X.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};oa.Ut=new oa;var cl=class{constructor(){this.Dn=new ul}addToCollectionParentIndex(e,t){return this.Dn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(or.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(or.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}},ul=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(we.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(we.comparator)).toArray()}};var cT=new Uint8Array(0);var yp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xm=41943040,_t=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(xm,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);var gi=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var vp="LruGarbageCollector",tb=1048576;function wp([n,e],[t,r]){let s=oe(n,t);return s===0?oe(e,r):s}var ll=class{constructor(e){this.Tr=e,this.buffer=new Be(wp),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();wp(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},hl=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){G(vp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?G(vp,"Ignoring IndexedDB error during garbage collection: ",t):await us(t)}await this.Rr(3e5)})}},dl=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Kr.ue);let r=new ll(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(yp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yp):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,f,_=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,a=Date.now(),this.nthSequenceNumber(e,s))).next(v=>(r=v,c=Date.now(),this.removeTargets(e,r,t))).next(v=>(i=v,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(f=Date.now(),Fr()<=ae.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${v} documents in `+(f-l)+`ms
Total Duration: ${f-_}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:v})))}};function nb(n,e){return new dl(n,e)}var fl=class{constructor(){this.changes=new un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var pl=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var ml=class{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ci(r.mutation,s,yt.empty(),Ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ue()){let s=tr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=si();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=tr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ue()))}populateOverlays(e,t,r){let s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=ln(),a=ai(),c=function(){return ai()}();return t.forEach((l,f)=>{let _=r.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Wt)?i=i.insert(f.key,f):_!==void 0?(a.set(f.key,_.mutation.getFieldMask()),ci(_.mutation,f,_.mutation.getFieldMask(),Ce.now())):a.set(f.key,yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((f,_)=>a.set(f,_)),t.forEach((f,_)=>{var v;return c.set(f,new pl(_,(v=a.get(f))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(e,t){let r=ai(),s=new Ie((a,c)=>a-c),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(l=>{let f=t.get(l);if(f===null)return;let _=r.get(l)||yt.empty();_=c.applyToLocalView(f,_),r.set(l,_);let v=(s.get(c.batchId)||ue()).add(l);s=s.insert(c.batchId,v)})}).next(()=>{let a=[],c=s.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),f=l.key,_=l.value,v=_m();_.forEach(T=>{if(!i.has(T)){let O=Tm(t.get(T),r.get(T));O!==null&&v.set(T,O),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,v))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Iw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{let a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(tr()),c=li,l=i;return a.next(f=>L.forEach(f,(_,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),i.get(_)?L.resolve():this.remoteDocumentCache.getEntry(e,_).next(T=>{l=l.insert(_,T)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,l,f,ue())).next(_=>({batchId:c,changes:gm(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){let i=t.collectionGroup,a=si();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{let f=function(v,T){return new Zr(T,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(_=>{_.forEach((v,T)=>{a=a.insert(v,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,f)=>{let _=f.getKey();a.get(_)===null&&(a=a.insert(_,Ct.newInvalidDocument(_)))});let c=si();return a.forEach((l,f)=>{let _=i.get(l);_!==void 0&&ci(_.mutation,f,yt.empty(),Ce.now()),Na(t,f)&&(c=c.insert(l,f))}),c})}};var gl=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return L.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:$t(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:eb(s.bundledQuery),readTime:$t(s.readTime)}}(t)),L.resolve()}};var _l=class{constructor(){this.overlays=new Ie(X.comparator),this.kr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){let r=tr();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,r){let s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){let s=tr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let l=c.getNext().value,f=l.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ie((f,_)=>f-_),a=this.overlays.getIterator();for(;a.hasNext();){let f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let _=i.get(f.largestBatchId);_===null&&(_=tr(),i=i.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}let c=tr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=s)););return L.resolve(c)}wt(e,t,r){let s=this.overlays.get(r.key);if(s!==null){let a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Xu(t,r));let i=this.kr.get(t);i===void 0&&(i=ue(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}};var yl=class{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}};var _i=class{constructor(){this.qr=new Be(Re.Qr),this.$r=new Be(Re.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new Re(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Re(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new X(new we([])),r=new Re(t,e),s=new Re(t,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new X(new we([])),r=new Re(t,e),s=new Re(t,e+1),i=ue();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){let t=new Re(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},Re=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||oe(e.Hr,t.Hr)}static Ur(e,t){return oe(e.Hr,t.Hr)||X.comparator(e.key,t.key)}};var vl=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Be(Re.Qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){let i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Ju(i,t,r,s);this.mutationQueue.push(a);for(let c of s)this.Yr=this.Yr.add(new Re(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?lh:this.er-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{let c=this.Zr(a.Hr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(oe);return t.forEach(s=>{let i=new Re(s,0),a=new Re(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{r=r.add(c.Hr)})}),L.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,s=r.length+1,i=r;X.isDocumentKey(i)||(i=i.child(""));let a=new Re(new X(i),0),c=new Be(oe);return this.Yr.forEachWhile(l=>{let f=l.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(l.Hr)),!0)},a),L.resolve(this.ei(c))}ei(e){let t=[];return e.forEach(r=>{let s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){me(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return L.forEach(t.mutations,s=>{let i=new Re(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new Re(t,0),s=this.Yr.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var wl=class{constructor(e){this.ni=e,this.docs=function(){return new Ie(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(t))}getEntries(e,t){let r=ln();return t.forEach(s=>{let i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=ln(),a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){let{key:f,value:{document:_}}=l.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||nw(tw(_),r)<=0||(s.has(_.key)||Na(t,_))&&(i=i.insert(_.key,_.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,r,s){Z(9500)}ri(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new bl(this)}getSize(e){return L.resolve(this.size)}},bl=class extends fl{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Il=class{constructor(e){this.persistence=e,this.ii=new un(t=>mh(t),gh),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.si=0,this.oi=new _i,this.targetCount=0,this._i=gi.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),L.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new gi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.hr(t),L.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0,i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),L.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.oi.containsKey(t))}};var aa=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new Kr(0),this.ci=!1,this.ci=!0,this.li=new yl,this.referenceDelegate=e(this),this.hi=new Il(this),this.indexManager=new cl,this.remoteDocumentCache=function(s){return new wl(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new al(t),this.Ti=new gl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _l,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new vl(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);let s=new El(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return L.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},El=class extends Nu{constructor(e){super(),this.currentSequenceNumber=e}},Tl=class n{constructor(e){this.persistence=e,this.Ai=new _i,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw Z(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.mi,r=>{let s=X.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,ie.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return L.or([()=>L.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},ca=class n{constructor(e,t){this.persistence=e,this.gi=new un(r=>ow(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=nb(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return L.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?L.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),L.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Go(e.data.value)),t}Sr(e,t,r){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let s=this.gi.get(t);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Al=class n{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ue(),s=ue();for(let i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new n(e,t.fromCache,r,s)}};var Sl=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Rl=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Id()?8:sw(Fe())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){let i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;let a=new Sl;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Fr()<=ae.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Fr()<=ae.DEBUG&&G("QueryEngine","Query:",Ur(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Fr()<=ae.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):L.resolve())}ps(e,t){if(cp(t))return L.resolve(null);let r=Gt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Hu(t,null,"F"),r=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{let a=ue(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{let f=this.bs(t,c);return this.Ds(t,f,a,l.readTime)?this.ps(e,Hu(t,null,"F")):this.vs(e,f,t,l)}))})))}ys(e,t,r,s){return cp(t)||s.isEqual(ie.min())?L.resolve(null):this.gs.getDocuments(e,r).next(i=>{let a=this.bs(t,i);return this.Ds(t,a,r,s)?L.resolve(null):(Fr()<=ae.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ur(t)),this.vs(e,a,t,ew(s,li)).next(c=>c))})}bs(e,t){let r=new Be(pm(e));return t.forEach((s,i)=>{Na(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Fr()<=ae.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Ur(t)),this.gs.getDocumentsMatchingQuery(e,t,or.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}};var vh="LocalStore",rb=3e8,Pl=class{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ie(oe),this.Ms=new un(i=>mh(i),gh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ml(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function sb(n,e,t,r){return new Pl(n,e,t,r)}async function Vm(n,e){let t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{let a=[],c=[],l=ue();for(let f of s){a.push(f.batchId);for(let _ of f.mutations)l=l.add(_.key)}for(let f of i){c.push(f.batchId);for(let _ of f.mutations)l=l.add(_.key)}return t.localDocuments.getDocuments(r,l).next(f=>({Bs:f,removedBatchIds:a,addedBatchIds:c}))})})}function ib(n,e){let t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,l,f,_){let v=f.batch,T=v.keys(),O=L.resolve();return T.forEach(F=>{O=O.next(()=>_.getEntry(l,F)).next(q=>{let M=f.docVersions.get(F);me(M!==null,48541),q.version.compareTo(M)<0&&(v.applyToRemoteDocument(q,f),q.isValidDocument()&&(q.setReadTime(f.commitVersion),_.addEntry(q)))})}),O.next(()=>c.mutationQueue.removeMutationBatch(l,v))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ue();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(l=l.add(c.batch.mutations[f].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Lm(n){let e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function ob(n,e){let t=se(n),r=e.snapshotVersion,s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;let c=[];e.targetChanges.forEach((_,v)=>{let T=s.get(v);if(!T)return;c.push(t.hi.removeMatchingKeys(i,_.removedDocuments,v).next(()=>t.hi.addMatchingKeys(i,_.addedDocuments,v)));let O=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(v)!==null?O=O.withResumeToken(Xe.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):_.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(_.resumeToken,r)),s=s.insert(v,O),function(q,M,ee){return q.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=rb?!0:ee.addedDocuments.size+ee.modifiedDocuments.size+ee.removedDocuments.size>0}(T,O,_)&&c.push(t.hi.updateTargetData(i,O))});let l=ln(),f=ue();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,_))}),c.push(ab(i,a,e.documentUpdates).next(_=>{l=_.Ls,f=_.ks})),!r.isEqual(ie.min())){let _=t.hi.getLastRemoteSnapshotVersion(i).next(v=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(_)}return L.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,f)).next(()=>l)}).then(i=>(t.Fs=s,i))}function ab(n,e,t){let r=ue(),s=ue();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ln();return t.forEach((c,l)=>{let f=i.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):G(vh,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)}),{Ls:a,ks:s}})}function cb(n,e){let t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lh),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ub(n,e){let t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new mi(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{let s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Cl(n,e,t){let r=se(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ls(a))throw a;G(vh,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function bp(n,e,t){let r=se(n),s=ie.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,f,_){let v=se(l),T=v.Ms.get(_);return T!==void 0?L.resolve(v.Fs.get(T)):v.hi.getTargetData(f,_)}(r,a,Gt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:ue())).next(c=>(lb(r,Tw(e),c),{documents:c,qs:i})))}function lb(n,e,t){let r=n.xs.get(e)||ie.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}var ua=class{constructor(){this.activeTargetIds=kw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var kl=class{constructor(){this.Fo=new ua,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ua,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Dl=class{xo(e){}shutdown(){}};var Ip="ConnectivityMonitor",la=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){G(Ip,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){G(Ip,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var zo=null;function Nl(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}var wu="RestConnection",hb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Ol=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Xo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){let a=Nl(),c=this.Go(e,t.toUriEncodedString());G(wu,`Sending RPC '${e}' ${a}:`,c,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);let{host:f}=new URL(c),_=vn(f);return this.jo(e,c,l,r,_).then(v=>(G(wu,`Received RPC '${e}' ${a}: `,v),v),v=>{throw Nn(wu,`RPC '${e}' ${a} failed with error: `,v,"url: ",c,"request:",r),v})}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){let r=hb[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var xl=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var Ye="WebChannelConnection",Vl=class extends Ol{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){let a=Nl();return new Promise((c,l)=>{let f=new pu;f.setWithCredentials(!0),f.listenOnce(mu.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ri.NO_ERROR:let v=f.getResponseJson();G(Ye,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case ri.TIMEOUT:G(Ye,`RPC '${e}' ${a} timed out`),l(new K(V.DEADLINE_EXCEEDED,"Request time out"));break;case ri.HTTP_ERROR:let T=f.getStatus();if(G(Ye,`RPC '${e}' ${a} failed with status:`,T,"response text:",f.getResponseText()),T>0){let O=f.getResponseJson();Array.isArray(O)&&(O=O[0]);let F=O?.error;if(F&&F.status&&F.message){let q=function(ee){let H=ee.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(H)>=0?H:V.UNKNOWN}(F.status);l(new K(q,F.message))}else l(new K(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else l(new K(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{c_:e,streamId:a,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{G(Ye,`RPC '${e}' ${a} completed.`)}});let _=JSON.stringify(s);G(Ye,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",_,r,15)})}P_(e,t,r){let s=Nl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yu(),c=_u(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(l.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let _=i.join("");G(Ye,`Creating RPC '${e}' stream ${s}: ${_}`,l);let v=a.createWebChannel(_,l);this.T_(v);let T=!1,O=!1,F=new xl({Ho:M=>{O?G(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(T||(G(Ye,`Opening RPC '${e}' stream ${s} transport.`),v.open(),T=!0),G(Ye,`RPC '${e}' stream ${s} sending:`,M),v.send(M))},Yo:()=>v.close()}),q=(M,ee,H)=>{M.listen(ee,te=>{try{H(te)}catch(de){setTimeout(()=>{throw de},0)}})};return q(v,Mr.EventType.OPEN,()=>{O||(G(Ye,`RPC '${e}' stream ${s} transport opened.`),F.s_())}),q(v,Mr.EventType.CLOSE,()=>{O||(O=!0,G(Ye,`RPC '${e}' stream ${s} transport closed`),F.__(),this.I_(v))}),q(v,Mr.EventType.ERROR,M=>{O||(O=!0,Nn(Ye,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),F.__(new K(V.UNAVAILABLE,"The operation could not be completed")))}),q(v,Mr.EventType.MESSAGE,M=>{var ee;if(!O){let H=M.data[0];me(!!H,16349);let te=H,de=te?.error||((ee=te[0])===null||ee===void 0?void 0:ee.error);if(de){G(Ye,`RPC '${e}' stream ${s} received error:`,de);let ze=de.status,ce=function(E){let A=Se[E];if(A!==void 0)return Sm(A)}(ze),R=de.message;ce===void 0&&(ce=V.INTERNAL,R="Unknown error status: "+ze+" with message "+de.message),O=!0,F.__(new K(ce,R)),v.close()}else G(Ye,`RPC '${e}' stream ${s} received:`,H),F.a_(H)}}),q(c,gu.STAT_EVENT,M=>{M.stat===Bo.PROXY?G(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Bo.NOPROXY&&G(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{F.o_()},0),F}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function bu(){return typeof document<"u"?document:null}function Oa(n){return new nl(n,!0)}var ha=class{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var Ep="PersistentStream",da=class{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ha(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(on(t.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{let s=new K(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return G(Ep,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(G(Ep,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Ll=class extends da{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=zw(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();let a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?$t(a.readTime):ie.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=ol(this.serializer),t.addTarget=function(i,a){let c,l=a.target;if(c=$u(l)?{documents:Hw(i,l)}:{query:Kw(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Rm(i,a.resumeToken);let f=rl(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=ia(i,a.snapshotVersion.toTimestamp());let f=rl(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);let r=Qw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=ol(this.serializer),t.removeTarget=e,this.k_(t)}},Ml=class extends da{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=$w(e.writeResults,e.commitTime),r=$t(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=ol(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Gw(this.serializer,r))};this.k_(t)}};var Fl=class{},Ul=class extends Fl{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,sl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(V.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,sl(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(V.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},Bl=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(on(t),this._a=!1):G("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var hr="RemoteStore",jl=class{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{fr(this)&&(G(hr,"Restarting streams for network reachability change."),await async function(l){let f=se(l);f.Ia.add(4),await wi(f),f.Aa.set("Unknown"),f.Ia.delete(4),await xa(f)}(this))})}),this.Aa=new Bl(r,s)}};async function xa(n){if(fr(n))for(let e of n.da)await e(!0)}async function wi(n){for(let e of n.da)await e(!1)}function Mm(n,e){let t=se(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Eh(t)?Ih(t):hs(t).x_()&&bh(t,e))}function wh(n,e){let t=se(n),r=hs(t);t.Ta.delete(e),r.x_()&&Fm(t,e),t.Ta.size===0&&(r.x_()?r.B_():fr(t)&&t.Aa.set("Unknown"))}function bh(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hs(n).H_(e)}function Fm(n,e){n.Ra.$e(e),hs(n).Y_(e)}function Ih(n){n.Ra=new tl({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),hs(n).start(),n.Aa.aa()}function Eh(n){return fr(n)&&!hs(n).M_()&&n.Ta.size>0}function fr(n){return se(n).Ia.size===0}function Um(n){n.Ra=void 0}async function db(n){n.Aa.set("Online")}async function fb(n){n.Ta.forEach((e,t)=>{bh(n,e)})}async function pb(n,e){Um(n),Eh(n)?(n.Aa.la(e),Ih(n)):n.Aa.set("Unknown")}async function mb(n,e,t){if(n.Aa.set("Online"),e instanceof ra&&e.state===2&&e.cause)try{await async function(s,i){let a=i.cause;for(let c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))}(n,e)}catch(r){G(hr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fa(n,r)}else if(e instanceof zr?n.Ra.Ye(e):e instanceof na?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ie.min()))try{let r=await Lm(n.localStore);t.compareTo(r)>=0&&await function(i,a){let c=i.Ra.Pt(a);return c.targetChanges.forEach((l,f)=>{if(l.resumeToken.approximateByteSize()>0){let _=i.Ta.get(f);_&&i.Ta.set(f,_.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,f)=>{let _=i.Ta.get(l);if(!_)return;i.Ta.set(l,_.withResumeToken(Xe.EMPTY_BYTE_STRING,_.snapshotVersion)),Fm(i,l);let v=new mi(_.target,l,f,_.sequenceNumber);bh(i,v)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){G(hr,"Failed to raise snapshot:",r),await fa(n,r)}}async function fa(n,e,t){if(!ls(e))throw e;n.Ia.add(1),await wi(n),n.Aa.set("Offline"),t||(t=()=>Lm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G(hr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await xa(n)})}function Bm(n,e){return e().catch(t=>fa(n,t,e))}async function Va(n){let e=se(n),t=xn(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:lh;for(;gb(e);)try{let s=await cb(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,_b(e,s)}catch(s){await fa(e,s)}jm(e)&&qm(e)}function gb(n){return fr(n)&&n.Pa.length<10}function _b(n,e){n.Pa.push(e);let t=xn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function jm(n){return fr(n)&&!xn(n).M_()&&n.Pa.length>0}function qm(n){xn(n).start()}async function yb(n){xn(n).na()}async function vb(n){let e=xn(n);for(let t of n.Pa)e.X_(t.mutations)}async function wb(n,e,t){let r=n.Pa.shift(),s=Yu.from(r,e,t);await Bm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Va(n)}async function bb(n,e){e&&xn(n).Z_&&await async function(r,s){if(function(a){return Lw(a)&&a!==V.ABORTED}(s.code)){let i=r.Pa.shift();xn(r).N_(),await Bm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Va(r)}}(n,e),jm(n)&&qm(n)}async function Tp(n,e){let t=se(n);t.asyncQueue.verifyOperationInProgress(),G(hr,"RemoteStore received new credentials");let r=fr(t);t.Ia.add(3),await wi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await xa(t)}async function Ib(n,e){let t=se(n);e?(t.Ia.delete(2),await xa(t)):e||(t.Ia.add(2),await wi(t),t.Aa.set("Unknown"))}function hs(n){return n.Va||(n.Va=function(t,r,s){let i=se(t);return i.ia(),new Ll(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:db.bind(null,n),e_:fb.bind(null,n),n_:pb.bind(null,n),J_:mb.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Eh(n)?Ih(n):n.Aa.set("Unknown")):(await n.Va.stop(),Um(n))})),n.Va}function xn(n){return n.ma||(n.ma=function(t,r,s){let i=se(t);return i.ia(),new Ml(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:yb.bind(null,n),n_:bb.bind(null,n),ea:vb.bind(null,n),ta:wb.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Va(n)):(await n.ma.stop(),n.Pa.length>0&&(G(hr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var ql=class n{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){let a=Date.now()+r,c=new n(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Th(n,e){if(on("AsyncQueue",`${e}: ${n}`),ls(n))return new K(V.UNAVAILABLE,`${e}: ${n}`);throw n}var pa=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=si(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var ma=class{constructor(){this.fa=new Ie(X.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Z(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},ss=class n{constructor(e,t,r,s,i,a,c,l,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,pa.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Da(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}};var zl=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},Gl=class{constructor(){this.queries=Ap(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let s=se(t),i=s.queries;s.queries=Ap(),i.forEach((a,c)=>{for(let l of c.wa)l.onError(r)})})(this,new K(V.ABORTED,"Firestore shutting down"))}};function Ap(){return new un(n=>fm(n),Da)}async function zm(n,e){let t=se(n),r=3,s=e.query,i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new zl,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){let c=Th(a,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Ah(t)}async function Gm(n,e){let t=se(n),r=e.query,s=3,i=t.queries.get(r);if(i){let a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Eb(n,e){let t=se(n),r=!1;for(let s of e){let i=s.query,a=t.queries.get(i);if(a){for(let c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Ah(t)}function Tb(n,e,t){let r=se(n),s=r.queries.get(e);if(s)for(let i of s.wa)i.onError(t);r.queries.delete(e)}function Ah(n){n.Da.forEach(e=>{e.next()})}var $l,Sp;(Sp=$l||($l={})).Fa="default",Sp.Cache="cache";var ga=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let s of e.docChanges)s.type!==3&&r.push(s);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==$l.Cache}};var _a=class{constructor(e){this.key=e}},ya=class{constructor(e){this.key=e}},Hl=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ue(),this.mutatedKeys=ue(),this.Xa=pm(e),this.eu=new pa(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new ma,s=t?t.eu:this.eu,i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1,l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,v)=>{let T=s.get(_),O=Na(this.query,v)?v:null,F=!!T&&this.mutatedKeys.has(T.key),q=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations),M=!1;T&&O?T.data.isEqual(O.data)?F!==q&&(r.track({type:3,doc:O}),M=!0):this.iu(T,O)||(r.track({type:2,doc:O}),M=!0,(l&&this.Xa(O,l)>0||f&&this.Xa(O,f)<0)&&(c=!0)):!T&&O?(r.track({type:0,doc:O}),M=!0):T&&!O&&(r.track({type:1,doc:T}),M=!0,(l||f)&&(c=!0)),M&&(O?(a=a.add(O),i=q?i.add(_):i.delete(_)):(a=a.delete(_),i=i.delete(_)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let _=this.query.limitType==="F"?a.last():a.first();a=a.delete(_.key),i=i.delete(_.key),r.track({type:1,doc:_})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){let i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let a=e.ru.pa();a.sort((_,v)=>function(O,F){let q=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{At:M})}};return q(O)-q(F)}(_.type,v.type)||this.Xa(_.doc,v.doc)),this.su(r),s=s!=null&&s;let c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,f=l!==this.Ya;return this.Ya=l,a.length!==0||f?{snapshot:new ss(this.query,e.eu,i,a,e.mutatedKeys,l===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ma,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=ue(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new ya(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new _a(r))}),t}uu(e){this.Ha=e.qs,this.Za=ue();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ss.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},Sh="SyncEngine",Kl=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Wl=class{constructor(e){this.key=e,this.lu=!1}},Ql=class{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new un(c=>fm(c),Da),this.Tu=new Map,this.Iu=new Set,this.du=new Ie(X.comparator),this.Eu=new Map,this.Au=new _i,this.Ru={},this.Vu=new Map,this.mu=gi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function Ab(n,e,t=!0){let r=Jm(n),s,i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await $m(r,e,t,!0),s}async function Sb(n,e){let t=Jm(n);await $m(t,e,!0,!1)}async function $m(n,e,t,r){let s=await ub(n.localStore,Gt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t),c;return r&&(c=await Rb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Mm(n.remoteStore,s),c}async function Rb(n,e,t,r,s){n.gu=(v,T,O)=>async function(q,M,ee,H){let te=M.view.nu(ee);te.Ds&&(te=await bp(q.localStore,M.query,!1).then(({documents:R})=>M.view.nu(R,te)));let de=H&&H.targetChanges.get(M.targetId),ze=H&&H.targetMismatches.get(M.targetId)!=null,ce=M.view.applyChanges(te,q.isPrimaryClient,de,ze);return Pp(q,M.targetId,ce._u),ce.snapshot}(n,v,T,O);let i=await bp(n.localStore,e,!0),a=new Hl(e,i.qs),c=a.nu(i.documents),l=pi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,l);Pp(n,t,f._u);let _=new Kl(e,t,a);return n.Pu.set(e,_),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),f.snapshot}async function Pb(n,e,t){let r=se(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!Da(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&wh(r.remoteStore,s.targetId),Jl(r,s.targetId)}).catch(us)):(Jl(r,s.targetId),await Cl(r.localStore,s.targetId,!0))}async function Cb(n,e){let t=se(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wh(t.remoteStore,r.targetId))}async function kb(n,e,t){let r=Mb(n);try{let s=await function(a,c){let l=se(a),f=Ce.now(),_=c.reduce((O,F)=>O.add(F.key),ue()),v,T;return l.persistence.runTransaction("Locally write mutations","readwrite",O=>{let F=ln(),q=ue();return l.Os.getEntries(O,_).next(M=>{F=M,F.forEach((ee,H)=>{H.isValidDocument()||(q=q.add(ee))})}).next(()=>l.localDocuments.getOverlayedDocuments(O,F)).next(M=>{v=M;let ee=[];for(let H of c){let te=Vw(H,v.get(H.key).overlayedDocument);te!=null&&ee.push(new Wt(H.key,te,am(te.value.mapValue),pt.exists(!0)))}return l.mutationQueue.addMutationBatch(O,f,ee,c)}).next(M=>{T=M;let ee=M.applyToLocalDocumentSet(v,q);return l.documentOverlayCache.saveOverlays(O,M.batchId,ee)})}).then(()=>({batchId:T.batchId,changes:gm(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let f=a.Ru[a.currentUser.toKey()];f||(f=new Ie(oe)),f=f.insert(c,l),a.Ru[a.currentUser.toKey()]=f}(r,s.batchId,t),await bi(r,s.changes),await Va(r.remoteStore)}catch(s){let i=Th(s,"Failed to persist write");t.reject(i)}}async function Hm(n,e){let t=se(n);try{let r=await ob(t.localStore,e);e.targetChanges.forEach((s,i)=>{let a=t.Eu.get(i);a&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?me(a.lu,14607):s.removedDocuments.size>0&&(me(a.lu,42227),a.lu=!1))}),await bi(t,r,e)}catch(r){await us(r)}}function Rp(n,e,t){let r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let s=[];r.Pu.forEach((i,a)=>{let c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){let l=se(a);l.onlineState=c;let f=!1;l.queries.forEach((_,v)=>{for(let T of v.wa)T.va(c)&&(f=!0)}),f&&Ah(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Db(n,e,t){let r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);let s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Ie(X.comparator);a=a.insert(i,Ct.newNoDocument(i,ie.min()));let c=ue().add(i),l=new ta(ie.min(),new Map,new Ie(oe),a,c);await Hm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Rh(r)}else await Cl(r.localStore,e,!1).then(()=>Jl(r,e,t)).catch(us)}async function Nb(n,e){let t=se(n),r=e.batch.batchId;try{let s=await ib(t.localStore,e);Wm(t,r,null),Km(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await bi(t,s)}catch(s){await us(s)}}async function Ob(n,e,t){let r=se(n);try{let s=await function(a,c){let l=se(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return l.mutationQueue.lookupMutationBatch(f,c).next(v=>(me(v!==null,37113),_=v.keys(),l.mutationQueue.removeMutationBatch(f,v))).next(()=>l.mutationQueue.performConsistencyCheck(f)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(f,_,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>l.localDocuments.getDocuments(f,_))})}(r.localStore,e);Wm(r,e,t),Km(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await bi(r,s)}catch(s){await us(s)}}function Km(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Wm(n,e,t){let r=se(n),s=r.Ru[r.currentUser.toKey()];if(s){let i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Jl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Qm(n,r)})}function Qm(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(wh(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Rh(n))}function Pp(n,e,t){for(let r of t)r instanceof _a?(n.Au.addReference(r.key,e),xb(n,r)):r instanceof ya?(G(Sh,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Qm(n,r.key)):Z(19791,{yu:r})}function xb(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(G(Sh,"New document in limbo: "+t),n.Iu.add(r),Rh(n))}function Rh(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new X(we.fromString(e)),r=n.mu.next();n.Eu.set(r,new Wl(t)),n.du=n.du.insert(t,r),Mm(n.remoteStore,new mi(Gt(ka(t.path)),r,"TargetPurposeLimboResolution",Kr.ue))}}async function bi(n,e,t){let r=se(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((c,l)=>{a.push(r.gu(l,e,t).then(f=>{var _;if((f||t)&&r.isPrimaryClient){let v=f?!f.fromCache:(_=t?.targetChanges.get(l.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(l.targetId,v?"current":"not-current")}if(f){s.push(f);let v=Al.Es(l.targetId,f);i.push(v)}}))}),await Promise.all(a),r.hu.J_(s),await async function(l,f){let _=se(l);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>L.forEach(f,T=>L.forEach(T.Is,O=>_.persistence.referenceDelegate.addReference(v,T.targetId,O)).next(()=>L.forEach(T.ds,O=>_.persistence.referenceDelegate.removeReference(v,T.targetId,O)))))}catch(v){if(!ls(v))throw v;G(vh,"Failed to update sequence numbers: "+v)}for(let v of f){let T=v.targetId;if(!v.fromCache){let O=_.Fs.get(T),F=O.snapshotVersion,q=O.withLastLimboFreeSnapshotVersion(F);_.Fs=_.Fs.insert(T,q)}}}(r.localStore,i))}async function Vb(n,e){let t=se(n);if(!t.currentUser.isEqual(e)){G(Sh,"User change. New user:",e.toKey());let r=await Vm(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(l=>{l.reject(new K(V.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bi(t,r.Bs)}}function Lb(n,e){let t=se(n),r=t.Eu.get(e);if(r&&r.lu)return ue().add(r.key);{let s=ue(),i=t.Tu.get(e);if(!i)return s;for(let a of i){let c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Jm(n){let e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Db.bind(null,e),e.hu.J_=Eb.bind(null,e.eventManager),e.hu.pu=Tb.bind(null,e.eventManager),e}function Mb(n){let e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}var is=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return sb(this.persistence,new Rl,e.initialUser,this.serializer)}Du(e){return new aa(Tl.Vi,this.serializer)}bu(e){return new kl}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};is.provider={build:()=>new is};var Yl=class extends is{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){me(this.persistence.referenceDelegate instanceof ca,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new hl(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new aa(r=>ca.Vi(r,t),this.serializer)}};var yi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vb.bind(null,this.syncEngine),await Ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gl}()}createDatastore(e){let t=Oa(e.databaseInfo.databaseId),r=function(i){return new Vl(i)}(e.databaseInfo);return function(i,a,c,l){return new Ul(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new jl(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Rp(this.syncEngine,t,0),function(){return la.C()?new la:new Dl}())}createSyncEngine(e,t){return function(s,i,a,c,l,f,_){let v=new Ql(s,i,a,c,l,f);return _&&(v.fu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){let i=se(s);G(hr,"RemoteStore shutting down."),i.Ia.add(5),await wi(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};yi.provider={build:()=>new yi};var va=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var Vn="FirestoreClient",Xl=class{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ue.UNAUTHENTICATED,this.clientId=ui.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{G(Vn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(G(Vn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Th(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Iu(n,e){n.asyncQueue.verifyOperationInProgress(),G(Vn,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Nn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{G("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Nn("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function Cp(n,e){n.asyncQueue.verifyOperationInProgress();let t=await Fb(n);G(Vn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tp(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Tp(e.remoteStore,s)),n._onlineComponents=e}async function Fb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(Vn,"Using user provided OfflineComponentProvider");try{await Iu(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Nn("Error using user provided cache. Falling back to memory cache: "+t),await Iu(n,new is)}}else G(Vn,"Using default OfflineComponentProvider"),await Iu(n,new Yl(void 0));return n._offlineComponents}async function Ym(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(Vn,"Using user provided OnlineComponentProvider"),await Cp(n,n._uninitializedComponentsProvider._online)):(G(Vn,"Using default OnlineComponentProvider"),await Cp(n,new yi))),n._onlineComponents}function Ub(n){return Ym(n).then(e=>e.syncEngine)}async function Zl(n){let e=await Ym(n),t=e.eventManager;return t.onListen=Ab.bind(null,e.syncEngine),t.onUnlisten=Pb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Sb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Cb.bind(null,e.syncEngine),t}function Bb(n,e,t={}){let r=new qt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,f){let _=new va({next:T=>{_.Ou(),a.enqueueAndForget(()=>Gm(i,v));let O=T.docs.has(c);!O&&T.fromCache?f.reject(new K(V.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&T.fromCache&&l&&l.source==="server"?f.reject(new K(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(T)},error:T=>f.reject(T)}),v=new ga(ka(c.path),_,{includeMetadataChanges:!0,ka:!0});return zm(i,v)}(await Zl(n),n.asyncQueue,e,t,r)),r.promise}function Xm(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var kp=new Map;var Zm="firestore.googleapis.com",Dp=!0,wa=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zm,this.ssl=Dp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Dp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tb)throw new K(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},os=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wa(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tu;switch(r.type){case"firstParty":return new Pu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=kp.get(t);r&&(G("ComponentProvider","Removing Datastore"),kp.delete(t),r.terminate())}(this),Promise.resolve()}};function jb(n,e,t,r={}){var s;n=ft(n,os);let i=vn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Xi(`https://${l}`),Zi("Firestore",!0)),a.host!==Zm&&a.host!==l&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let f=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Vt(f,c)&&(n._setSettings(f),r.mockUserToken)){let _,v;if(typeof r.mockUserToken=="string")_=r.mockUserToken,v=Ue.MOCK_USER;else{_=gd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);let T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new K(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Ue(T)}n._authCredentials=new Au(new Ko(_,v))}}var ba=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},je=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vi(t,n._jsonSchema))return new n(e,r||null,new X(we.fromString(t.referencePath)))}};je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:Pe("string",je._jsonSchemaVersion),referencePath:Pe("string")};var Pn=class n extends ba{constructor(e,t,r){super(e,t,ka(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new X(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function eg(n,e,...t){if(n=ve(n),Mp("collection","path",e),n instanceof os){let r=we.fromString(e,...t);return Jf(r),new Pn(n,null,r)}{if(!(n instanceof je||n instanceof Pn))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(we.fromString(e,...t));return Jf(r),new Pn(n.firestore,null,r)}}function Ph(n,e,...t){if(n=ve(n),arguments.length===1&&(e=ui.newId()),Mp("doc","path",e),n instanceof os){let r=we.fromString(e,...t);return Qf(r),new je(n,null,new X(r))}{if(!(n instanceof je||n instanceof Pn))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(we.fromString(e,...t));return Qf(r),new je(n.firestore,n instanceof Pn?n.converter:null,new X(r))}}var Np="AsyncQueue",Ia=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ha(this,"async_queue_retry"),this.oc=()=>{let r=bu();r&&G(Np,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=bu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=bu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new qt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ls(e))throw e;G(Np,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,on("INTERNAL UNHANDLED ERROR: ",Op(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let s=ql.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&Z(47125,{hc:Op(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function Op(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function xp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let s=t;for(let i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}var kt=class extends os{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ia,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Ia(e),this._firestoreClient=void 0,await e}}};function tg(n,e){let t=typeof n=="object"?n:ro(),r=typeof n=="string"?n:e||Xo,s=js(t,"firestore").getImmediate({identifier:r});if(!s._initialized){let i=md("firestore");i&&jb(s,...i)}return s}function La(n){if(n._terminated)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qb(n),n._firestoreClient}function qb(n){var e,t,r;let s=n._freezeSettings(),i=function(c,l,f,_){return new Ou(c,l,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Xm(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Xl(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){let l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(n._componentsProvider))}var Cn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(Xe.fromBase64String(e))}catch(t){throw new K(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vi(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:Pe("string",Cn._jsonSchemaVersion),bytes:Pe("string")};var dr=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var as=class{constructor(e){this._methodName=e}};var kn=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(vi(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:Pe("string",kn._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};var Dn=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vi(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new K(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:Pe("string",Dn._jsonSchemaVersion),vectorValues:Pe("object")};var zb=/^__.*__$/,eh=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}},Ea=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Wt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function ng(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{Ec:n})}}var th=class n{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Aa(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ng(this.Ec)&&zb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},nh=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Oa(e)}Dc(e,t,r,s=!1){return new th({Ec:e,methodName:t,bc:r,path:dt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Ma(n){let e=n._freezeSettings(),t=Oa(n._databaseId);return new nh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ch(n,e,t,r,s,i={}){let a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);kh("Data must be an object, but it was:",a,r);let c=ig(r,a),l,f;if(i.merge)l=new yt(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){let _=[];for(let v of i.mergeFields){let T=sh(e,v,t);if(!a.contains(T))throw new K(V.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);ag(_,T)||_.push(T)}l=new yt(_),f=a.fieldTransforms.filter(v=>l.covers(v.field))}else l=null,f=a.fieldTransforms;return new eh(new ht(c),l,f)}var Ta=class n extends as{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var rh=class n extends as{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){let t=new ur(e.serializer,vm(e.serializer,this.Cc));return new Ku(e.path,t)}isEqual(e){return e instanceof n&&this.Cc===e.Cc}};function rg(n,e,t,r){let s=n.Dc(1,e,t);kh("Data must be an object, but it was:",s,r);let i=[],a=ht.empty();Ln(r,(l,f)=>{let _=Dh(e,l,t);f=ve(f);let v=s.gc(_);if(f instanceof Ta)i.push(_);else{let T=Fa(f,v);T!=null&&(i.push(_),a.set(_,T))}});let c=new yt(i);return new Ea(a,c,s.fieldTransforms)}function sg(n,e,t,r,s,i){let a=n.Dc(1,e,t),c=[sh(e,r,t)],l=[s];if(i.length%2!=0)throw new K(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)c.push(sh(e,i[T])),l.push(i[T+1]);let f=[],_=ht.empty();for(let T=c.length-1;T>=0;--T)if(!ag(f,c[T])){let O=c[T],F=l[T];F=ve(F);let q=a.gc(O);if(F instanceof Ta)f.push(O);else{let M=Fa(F,q);M!=null&&(f.push(O),_.set(O,M))}}let v=new yt(f);return new Ea(_,v,a.fieldTransforms)}function Fa(n,e){if(og(n=ve(n)))return kh("Unsupported field value:",e,n),ig(n,e);if(n instanceof as)return function(r,s){if(!ng(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);let i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){let i=[],a=0;for(let c of r){let l=Fa(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let i=Ce.fromDate(r);return{timestampValue:ia(s.serializer,i)}}if(r instanceof Ce){let i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(s.serializer,i)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cn)return{bytesValue:Rm(s.serializer,r._byteString)};if(r instanceof je){let i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dn)return function(a,c){return{mapValue:{fields:{[dh]:{stringValue:fh},[Wr]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw c.wc("VectorValues must only contain numeric values.");return _h(c.serializer,f)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${uh(r)}`)}(n,e)}function ig(n,e){let t={};return Zp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(n,(r,s)=>{let i=Fa(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function og(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof kn||n instanceof Cn||n instanceof je||n instanceof as||n instanceof Dn)}function kh(n,e,t){if(!og(t)||!Fp(t)){let r=uh(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function sh(n,e,t){if((e=ve(e))instanceof dr)return e._internalPath;if(typeof e=="string")return Dh(n,e);throw Aa("Field path arguments must be of type string or ",n,!1,void 0,t)}var Gb=new RegExp("[~\\*/\\[\\]]");function Dh(n,e,t){if(e.search(Gb)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dr(...e.split("."))._internalPath}catch{throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Aa(n,e,t,r,s){let i=r&&!r.isEmpty(),a=s!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(V.INVALID_ARGUMENT,c+n+l)}function ag(n,e){return n.some(t=>t.isEqual(e))}var Sa=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new ih(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(cg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},ih=class extends Sa{data(){return super.data()}};function cg(n,e){return typeof e=="string"?Dh(n,e):e instanceof dr?e._internalPath:e._delegate._internalPath}function $b(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var oh=class{convertValue(e,t="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(cn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Ln(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;let i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Wr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ye(a.doubleValue));return new Dn(i)}convertGeoPoint(e){return new kn(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Ca(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){let t=an(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=we.fromString(e);me(Om(r),9688,{name:e});let s=new Zo(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}};function Nh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var rr=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},sr=class n extends Sa{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(cg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};sr._jsonSchemaVersion="firestore/documentSnapshot/1.0",sr._jsonSchema={type:Pe("string",sr._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};var Gr=class extends sr{data(e={}){return super.data(e)}},$r=class n{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gr(this._firestore,this._userDataWriter,r.key,r,new rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{let l=new Gr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{let l=new Gr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter),f=-1,_=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),_=a.indexOf(c.doc.key)),{type:Hb(c.type),doc:l,oldIndex:f,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ui.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function Hb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:n})}}function ug(n){n=ft(n,je);let e=ft(n.firestore,kt);return Bb(La(e),n._key).then(t=>mg(e,n,t))}$r._jsonSchemaVersion="firestore/querySnapshot/1.0",$r._jsonSchema={type:Pe("string",$r._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};var Ra=class extends oh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}};function lg(n,e,t){n=ft(n,je);let r=ft(n.firestore,kt),s=Nh(n.converter,e,t);return Ii(r,[Ch(Ma(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,pt.none())])}function hg(n,e,t,...r){n=ft(n,je);let s=ft(n.firestore,kt),i=Ma(s),a;return a=typeof(e=ve(e))=="string"||e instanceof dr?sg(i,"updateDoc",n._key,e,t,r):rg(i,"updateDoc",n._key,e),Ii(s,[a.toMutation(n._key,pt.exists(!0))])}function dg(n){return Ii(ft(n.firestore,kt),[new rs(n._key,pt.none())])}function fg(n,e){let t=ft(n.firestore,kt),r=Ph(n),s=Nh(n.converter,e);return Ii(t,[Ch(Ma(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,pt.exists(!1))]).then(()=>r)}function pg(n,...e){var t,r,s;n=ve(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||xp(e[a])||(i=e[a++]);let c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(xp(e[a])){let v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(s=v.complete)===null||s===void 0?void 0:s.bind(v)}let l,f,_;if(n instanceof je)f=ft(n.firestore,kt),_=ka(n._key.path),l={next:v=>{e[a]&&e[a](mg(f,n,v))},error:e[a+1],complete:e[a+2]};else{let v=ft(n,ba);f=ft(v.firestore,kt),_=v._query;let T=new Ra(f);l={next:O=>{e[a]&&e[a](new $r(f,T,v,O))},error:e[a+1],complete:e[a+2]},$b(n._query)}return function(T,O,F,q){let M=new va(q),ee=new ga(O,M,F);return T.asyncQueue.enqueueAndForget(async()=>zm(await Zl(T),ee)),()=>{M.Ou(),T.asyncQueue.enqueueAndForget(async()=>Gm(await Zl(T),ee))}}(La(f),_,c,l)}function Ii(n,e){return function(r,s){let i=new qt;return r.asyncQueue.enqueueAndForget(async()=>kb(await Ub(r),s,i)),i.promise}(La(n),e)}function mg(n,e,t){let r=t.docs.get(e._key),s=new Ra(n);return new sr(n,s,e._key,r,new rr(t.hasPendingWrites,t.fromCache),e.converter)}var ah=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ma(e)}set(e,t,r){this._verifyNotCommitted();let s=Eu(e,this._firestore),i=Nh(s.converter,t,r),a=Ch(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,pt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();let i=Eu(e,this._firestore),a;return a=typeof(t=ve(t))=="string"||t instanceof dr?sg(this._dataReader,"WriteBatch.update",i._key,t,r,s):rg(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,pt.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Eu(e,this._firestore);return this._mutations=this._mutations.concat(new rs(t._key,pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Eu(n,e){if((n=ve(n)).firestore!==e)throw new K(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function gg(n){return new rh("increment",n)}function _g(n){return La(n=ft(n,kt)),new ah(n,e=>Ii(n,e))}(function(e,t=!0){(function(s){cs=s})(En),In(new gt("firestore",(r,{instanceIdentifier:s,options:i})=>{let a=r.getProvider("app").getImmediate(),c=new kt(new Su(r.getProvider("auth-internal")),new Cu(a,r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new K(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zo(f.options.projectId,_)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Rt($f,Hf,e),Rt($f,Hf,"esm2017")})();function Kb(n){let e=kc(n);return{auth:du(e),db:tg(e)}}var nt={pair:"2111",two:"221",trio:"311",full:"32",quad:"41",penta:"5",diff:"11111"},Ag=[{k:"sum_low",t:"Extremo baixo",s:"Soma 5\u201310",p:"28:1",f:n=>n.sum<=10?28:null},{k:"sum_small",t:"Pequeno",s:"Soma 5\u201317",p:"1:1",f:n=>!n.penta&&n.sum<=17?1:null},{k:"sum_even",t:"Par",s:"Soma par",p:"1:1",f:n=>!n.penta&&n.sum%2===0?1:null},{k:"sum_mid",t:"Central",s:"Soma 17 ou 18",p:"7:2",f:n=>n.sum===17||n.sum===18?3.5:null,hot:!0},{k:"sum_odd",t:"\xCDmpar",s:"Soma \xEDmpar",p:"1:1",f:n=>!n.penta&&n.sum%2===1?1:null},{k:"sum_big",t:"Grande",s:"Soma 18\u201330",p:"1:1",f:n=>!n.penta&&n.sum>=18?1:null},{k:"sum_high",t:"Extremo alto",s:"Soma 26\u201330",p:"28:1",f:n=>n.sum>=26?28:null}],Sg=[{k:"c_pair",t:"Par",s:"S\xF3 um par",p:"11:10",f:n=>n.pat===nt.pair?1.1:null},{k:"c_two",t:"Dois pares",s:"2 + 2",p:"3:1",f:n=>n.pat===nt.two?3:null},{k:"c_trio",t:"Trio",s:"3 iguais",p:"5:1",f:n=>n.pat===nt.trio?5:null},{k:"c_full",t:"Full house",s:"Trio + par",p:"24:1",f:n=>n.pat===nt.full?24:null},{k:"c_quad",t:"Quadra",s:"4 iguais",p:"48:1",f:n=>n.pat===nt.quad?48:null},{k:"c_penta",t:"Penta",s:"5 iguais",p:"1200:1",f:n=>n.pat===nt.penta?1200:null,hot:!0},{k:"c_diff",t:"Todos diferentes",s:"Nenhum repetido",p:"9:1",f:n=>n.pat===nt.diff?9:null},{k:"s3",t:"Sequ\xEAncia de 3",s:"3 seguidos",p:"6:5",f:n=>n.run(3)?1.2:null},{k:"s4",t:"Sequ\xEAncia de 4",s:"4 seguidos",p:"5:1",f:n=>n.run(4)?5:null},{k:"s5",t:"Sequ\xEAncia de 5",s:"1 a 5 ou 2 a 6",p:"30:1",f:n=>n.run(5)?30:null}],Wb=[null,0,1,4,20,100],pr=[];for(let n=1;n<=6;n++)pr.push({k:"n"+n+"_1",n,single:!0,t:"N\xFAmero "+n,s:"Casa do dado",p:"1 dado devolve",f:e=>Wb[e.c[n]]}),pr.push({k:"n"+n+"_2",n,t:"Pelo menos 2",p:"4:1",f:e=>e.c[n]>=2?4:null}),pr.push({k:"n"+n+"_3",n,t:"Pelo menos 3",p:"25:1",f:e=>e.c[n]>=3?25:null}),pr.push({k:"n"+n+"_4",n,t:"Pelo menos 4",p:"280:1",f:e=>e.c[n]>=4?280:null}),pr.push({k:"n"+n+"_5",n,t:"Penta de "+n,p:"7500:1",f:e=>e.c[n]===5?7500:null,hot:!0});var Rg=[...Ag,...Sg,...pr],qe=Object.fromEntries(Rg.map(n=>[n.k,n])),mr=n=>n.n&&!n.single?n.t+" de "+n.n:n.t;function $a(n){let e=[0,0,0,0,0,0,0];n.forEach(i=>e[i]++);let t=e.slice(1).filter(Boolean).sort((i,a)=>a-i).join(""),r=n.reduce((i,a)=>i+a,0);return{c:e,pat:t,sum:r,run:i=>{for(let a=1;a<=7-i;a++){let c=!0;for(let l=0;l<i;l++)if(!e[a+l]){c=!1;break}if(c)return!0}return!1},penta:t===nt.penta}}var Qb=(n,e)=>e==null?0:n+Math.floor(n*e+1e-9);function Pg(n){let e={[nt.pair]:"Par",[nt.two]:"Dois pares",[nt.trio]:"Trio",[nt.full]:"Full house",[nt.quad]:"Quadra",[nt.penta]:"Penta",[nt.diff]:"Todos diferentes"},t=["Soma "+n.sum,e[n.pat]];return n.run(5)?t.push("Sequ\xEAncia de 5"):n.run(4)?t.push("Sequ\xEAncia de 4"):n.run(3)&&t.push("Sequ\xEAncia de 3"),t.join(" \xB7 ")}var za=[];for(let n=1;n<=6;n++)for(let e=1;e<=6;e++)for(let t=1;t<=6;t++)for(let r=1;r<=6;r++)for(let s=1;s<=6;s++)za.push($a([n,e,t,r,s]));function Cg(n,e){let t=1;for(let r of n){let s=qe[r].f(e);if(s==null)return 0;t*=s+1}return t}var xh=new Map;function Bh(n){let e=n.slice().sort().join("|");if(xh.has(e))return xh.get(e);let t=0,r=0,s=0;for(let a of za){let c=Cg(n,a);c>0&&(t++,r+=c,c>s&&(s=c))}let i={p:t/za.length,ev:r/za.length,max:s};return xh.set(e,i),i}function Vh(n){if(!Array.isArray(n)||n.length<2||n.length>6)return"A m\xFAltipla precisa de 2 a 6 sele\xE7\xF5es";if(new Set(n).size!==n.length||n.some(t=>!qe[t]))return"Sele\xE7\xF5es inv\xE1lidas";let e=Bh(n);return e.p===0?"Estas sele\xE7\xF5es n\xE3o podem ganhar ao mesmo tempo":e.ev>=1?"Combina\xE7\xE3o n\xE3o permitida: as sele\xE7\xF5es dependem umas das outras e a m\xFAltipla pagaria acima do justo":null}var ds=["#E8C46A","#7FC8F8","#F4A99B","#B5E48C","#D7A6F5","#F9B46B","#8EE3D3","#FFFFFF","#F5E663","#A0B4FF"],Lh=[{v:1,bg:"#FFFFFF",fg:"#1B1B1B"},{v:5,bg:"#C62828",fg:"#FFFFFF"},{v:10,bg:"#1A2F6B",fg:"#FFFFFF"},{v:25,bg:"#2E8B57",fg:"#FFFFFF"},{v:100,bg:"#111111",fg:"#FFFFFF"},{v:500,bg:"#6A3BA8",fg:"#FFFFFF"},{v:1e3,bg:"#F2C200",fg:"#1B1B1B"}],jh={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},D=n=>document.getElementById(n),Q=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),z=n=>Number(n).toLocaleString("pt-PT"),yg=n=>n.toLocaleString("pt-PT",{maximumFractionDigits:2}),Ua=n=>JSON.parse(JSON.stringify(n));function ps(n,e){let t='<span class="die '+(e||"")+(n?"":" empty")+'" aria-hidden="true">';for(let r=0;r<9;r++)t+='<i class="'+(n&&jh[n].includes(r)?"on":"")+'"></i>';return t+"</span>"}var vg=null;function J(n){let e=D("toast");e.textContent=n,e.hidden=!1,clearTimeout(vg),vg=setTimeout(()=>e.hidden=!0,2600)}var wg={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}}};var Ha=n=>new Promise(e=>setTimeout(e,n)),Mh=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function fs(n){let e=256-256%n,t=new Uint8Array(1);for(;;)if(crypto.getRandomValues(t),t[0]<e)return t[0]%n}function Jb(n){let e='<span class="bdie" aria-hidden="true">';for(let t=0;t<9;t++)e+='<i class="'+(n&&jh[n].includes(t)?"on":"")+'"></i>';return e+"</span>"}function bg(n,e){n.querySelectorAll("i").forEach((t,r)=>t.classList.toggle("on",jh[e].includes(r)))}var Yb="Casa do dado: 1 dado devolve \xB7 2 \u2192 1:1 \xB7 3 \u2192 4:1 \xB7 4 \u2192 20:1 \xB7 5 \u2192 100:1";function Xb(){let n=(t,r)=>'<button class="zone '+(r||"")+(t.hot?" hot":"")+'" data-act="zone" data-k="'+t.k+'" id="z-'+t.k+'" aria-label="'+Q(mr(t))+", paga "+Q(t.p)+'">'+(t.single?ps(t.n):'<span class="z-t">'+Q(t.t)+"</span>")+(t.s?'<span class="z-s">'+Q(t.s)+"</span>":"")+'<span class="z-p">'+Q(t.p)+'</span><span class="stack" id="st-'+t.k+'"></span></button>',e="";for(let t=1;t<=6;t++){let r=pr.filter(s=>s.n===t);e+='<div class="ncol">'+n(r[0],"single")+r.slice(1).map(s=>n(s,"row")).join("")+"</div>"}return'<section class="sec"><div class="sec-h"><h2>Somas dos 5 dados</h2><span class="note">Pequeno, Grande, Par e \xCDmpar perdem se sair penta</span></div><div class="grid g-sum">'+Ag.map(t=>n(t)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Combina\xE7\xF5es e sequ\xEAncias</h2><span class="note">Cada combina\xE7\xE3o paga s\xF3 a sua casa \xB7 sequ\xEAncias: pelo menos esses n\xFAmeros seguidos</span></div><div class="grid g-combo">'+Sg.map(t=>n(t)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Aposta num n\xFAmero</h2><span class="note">'+Yb+'</span></div><div class="grid g-num">'+e+"</div></section>"}var kg=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],Ai=new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]),Dg=n=>n===0?"g":Ai.has(n)?"r":"b",Si={red:{name:"Vermelho",set:n=>Ai.has(n)},black:{name:"Preto",set:n=>n>0&&!Ai.has(n)},even:{name:"Par",set:n=>n>0&&n%2===0},odd:{name:"\xCDmpar",set:n=>n%2===1},low:{name:"1\u201318",set:n=>n>=1&&n<=18},high:{name:"19\u201336",set:n=>n>=19}};function ms(n){let e;if(e=/^n(\d{1,2})$/.exec(n)){let t=+e[1];return t<=36?[t]:null}if(e=/^s(\d{1,2})_(\d{1,2})$/.exec(n)){let t=+e[1],r=+e[2];return t>=r||r>36?null:t===0?r<=3?[0,r]:null:r-t===3?[t,r]:r-t===1&&t%3!==0?[t,r]:null}if(e=/^t(\d{1,2})$/.exec(n)){let t=+e[1];return t>=1&&t<=12?[3*t-2,3*t-1,3*t]:null}if(e=/^q(\d{1,2})$/.exec(n)){let t=+e[1];return t>=1&&t<=32&&t%3!==0?[t,t+1,t+3,t+4]:null}if(e=/^l(\d{1,2})$/.exec(n)){let t=+e[1];if(t<1||t>11)return null;let r=[];for(let s=3*t-2;s<=3*t+3;s++)r.push(s);return r}if(e=/^d([123])$/.exec(n)){let t=+e[1],r=[];for(let s=12*t-11;s<=12*t;s++)r.push(s);return r}if(e=/^c([123])$/.exec(n)){let t=+e[1],r=[];for(let s=t;s<=36;s+=3)r.push(s);return r}if(Si[n]){let t=[];for(let r=0;r<=36;r++)Si[n].set(r)&&t.push(r);return t}return null}var Zb={n:35,s:17,t:11,q:8,l:5,d:2,c:2};function Ig(n){return Si[n]?1:Zb[n[0]]}function Ng(n){let e=ms(n);if(!e)return"?";if(Si[n])return Si[n].name;switch(n[0]){case"n":return"N\xFAmero "+e[0];case"s":return"Cavalo "+e.join("-");case"t":return"Rua "+e[0]+"\u2013"+e[2];case"q":return"Quadrado "+e.join("-");case"l":return"Linha "+e[0]+"\u2013"+e[5];case"d":return n[1]+"\xAA d\xFAzia ("+e[0]+"\u2013"+e[11]+")";case"c":return n[1]+"\xAA coluna"}return n}function eI(n){return n===0?"0 \xB7 Verde":n+" \xB7 "+(Ai.has(n)?"Vermelho":"Preto")+" \xB7 "+(n%2?"\xCDmpar":"Par")+" \xB7 "+(n<=18?"1\u201318":"19\u201336")+" \xB7 "+Math.ceil(n/12)+"\xAA d\xFAzia"}var Eg=(n,e)=>'<span class="rball '+Dg(n)+" "+(e||"")+'">'+n+"</span>",tI=(()=>{let n=["n0"];for(let e=1;e<=36;e++)n.push("n"+e);for(let e=1;e<=12;e++)n.push("t"+e);return n.concat(["c1","c2","c3","d1","d2","d3","low","even","red","black","odd","high"])})();function nI(){let n=(r,s,i,a)=>'<button class="rz '+i+'" data-act="zone" data-k="'+r+'" id="z-'+r+'" aria-label="'+Q(a)+'">'+s+'<span class="stack" id="st-'+r+'"></span></button>',e="";for(let r=1;r<=12;r++){e+=n("t"+r,'<span class="rst">Rua</span><span class="rsub">'+(3*r-2)+"\u2013"+3*r+"</span>","street","Rua "+(3*r-2)+" a "+3*r+", paga 11:1");for(let s=1;s<=3;s++){let i=3*(r-1)+s;e+=n("n"+i,'<span class="rn">'+i+"</span>","num "+Dg(i),"N\xFAmero "+i+", paga 35:1")}}let t=(r,s,i)=>n(r,'<span class="rlab">'+s+'</span><span class="rpay">'+(r[0]==="d"||r[0]==="c"?"2:1":"1:1")+"</span>","out "+(i||""),Ng(r)+", paga "+(r[0]==="d"||r[0]==="c"?"2:1":"1:1"));return'<section class="sec"><div class="sec-h"><h2>Mesa de roleta</h2><span class="note">N\xFAmero 35:1 \xB7 Cavalo 17:1 \xB7 Rua 11:1 \xB7 Quadrado 8:1 \xB7 Linha 5:1 \xB7 D\xFAzias e colunas 2:1 \xB7 Chances simples 1:1 (perdem com o 0)</span></div><div class="rboard">'+n("n0",'<span class="rn">0</span>',"num g zero","Zero, paga 35:1")+'<div class="rgrid">'+e+'</div><div class="rcols"><span></span>'+t("c1","1\xAA col.")+t("c2","2\xAA col.")+t("c3","3\xAA col.")+'</div><div class="rdoz">'+t("d1","1\xAA 12")+t("d2","2\xAA 12")+t("d3","3\xAA 12")+'</div><div class="rout">'+t("low","1\u201318")+t("even","Par")+t("red",'<span class="rdia r"></span>',"redc")+t("black",'<span class="rdia b"></span>',"blackc")+t("odd","\xCDmpar")+t("high","19\u201336")+"</div></div></section>"}var rI=(()=>{let n=9.72972972972973,e=112,t=72,r="",s=(i,a)=>{let c=(a-90)*Math.PI/180;return[(i*Math.cos(c)).toFixed(2),(i*Math.sin(c)).toFixed(2)]};return kg.forEach((i,a)=>{let c=a*n-n/2,l=a*n+n/2,[f,_]=s(e,c),[v,T]=s(e,l),[O,F]=s(t,l),[q,M]=s(t,c),ee=i===0?"#1E8E4E":Ai.has(i)?"#C62828":"#141414";r+='<path d="M'+f+" "+_+"A"+e+" "+e+" 0 0 1 "+v+" "+T+"L"+O+" "+F+"A"+t+" "+t+" 0 0 0 "+q+" "+M+'Z" fill="'+ee+'" stroke="#E8C46A" stroke-width="0.8"/>';let[H,te]=s(96,a*n);r+='<text x="'+H+'" y="'+te+'" fill="#F4ECD2" font-size="10" font-weight="700" text-anchor="middle" dominant-baseline="central" transform="rotate('+(a*n).toFixed(2)+" "+H+" "+te+')">'+i+"</text>"}),'<svg class="wheel-svg" viewBox="-120 -120 240 240" aria-hidden="true"><circle r="118" fill="#5B3A1E"/>'+r+'<circle r="70" fill="#3B2A14" stroke="#E8C46A" stroke-width="2"/><circle r="22" fill="#E8C46A"/><circle r="8" fill="#5B3A1E"/></svg>'})(),Ei={sicbo:{type:"sicbo",label:"Sic Bo \xB7 5 dados",verb:"Lan\xE7ar dados",resNoun:"dados",physical:!0,multi:!0,animMs:2400,roll:()=>[1+fs(6),1+fs(6),1+fs(6),1+fs(6),1+fs(6)],info:n=>$a(n),valid:n=>!!qe[n],mult:(n,e)=>qe[n]?qe[n].f(e):null,name:n=>qe[n]?mr(qe[n]):"?",pay:n=>qe[n]?qe[n].p:"",desc:n=>Pg($a(n)),resSmall:n=>n.map(e=>ps(e,"sm")).join(""),icon:()=>'<span class="ticon dice">'+ps(5,"sm")+ps(3,"sm")+"</span>",boardHTML:Xb,zoneKeys:Rg.map(n=>n.k),revealInit:n=>'<div class="rv-dice">'+n.map(()=>Jb(1)).join("")+"</div>",async revealRun(n,e,t){let r=[...n.querySelectorAll(".bdie")];r.forEach((a,c)=>{a.style.animationDelay=c*70+"ms",a.classList.add("tumble")});let s=performance.now(),i=60;for(;performance.now()-s<t;)r.forEach(a=>bg(a,1+Math.floor(Math.random()*6))),await Ha(i),i=Math.min(180,i*1.06);r.forEach((a,c)=>{a.classList.remove("tumble"),bg(a,e[c]),a.classList.add("land")})}},roleta:{type:"roleta",label:"Roleta europeia",verb:"Rodar a roleta",resNoun:"roleta",physical:!1,multi:!1,animMs:4800,roll:()=>[fs(37)],info:n=>n[0],valid:n=>!!ms(n),mult:(n,e)=>{let t=ms(n);return t&&t.includes(e)?Ig(n):null},name:Ng,pay:n=>ms(n)?Ig(n)+":1":"",desc:n=>eI(n[0]),resSmall:n=>Eg(n[0],"sm"),icon:()=>'<span class="ticon wheel" aria-hidden="true"></span>',boardHTML:nI,zoneKeys:tI,revealInit:()=>'<div class="rv-wheel"><span class="rv-pointer" aria-hidden="true"></span><div class="rv-rot">'+rI+'</div></div><div class="rv-num" aria-hidden="true"></div>',async revealRun(n,e,t){let r=e[0],s=kg.indexOf(r),i=360/37,a=n.querySelector(".rv-rot"),c=-(s*i)-360*(t?6:0);a.style.transition="none",a.style.transform="rotate(0deg)",a.offsetWidth,a.style.transition=t?"transform "+t+"ms cubic-bezier(.12,.62,.16,1)":"none",a.style.transform="rotate("+c+"deg)",await Ha(t);let l=n.querySelector(".rv-num");l.innerHTML=Eg(r,"big"),l.classList.add("show")}}},Tg="@jogadores.sicbo",sI=/^[A-Za-z0-9_.-]{3,20}$/,Ba={rounds:0,staked:0,returned:0,best:0};function iI(n){let e=n&&n.code||"";return e.includes("email-already-in-use")?"Esse utilizador j\xE1 existe. Escolha outro nome ou entre com a palavra-passe.":e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Utilizador ou palavra-passe errados.":e.includes("weak-password")?"A palavra-passe precisa de pelo menos 6 caracteres.":e.includes("too-many-requests")?"Demasiadas tentativas. Espere um pouco e tente de novo.":e.includes("operation-not-allowed")?"O in\xEDcio de sess\xE3o com palavra-passe n\xE3o est\xE1 ativo no Firebase.":e.includes("network")?"Sem liga\xE7\xE3o. Tente outra vez.":"N\xE3o foi poss\xEDvel entrar ("+(e||"erro")+")."}var ja={v:5e3,bg:"#7B4A26",fg:"#F3E3C8"},qh=[{id:"t_montecarlo",kind:"theme",name:"Monte Carlo",desc:"Azul-noite e dourado, como o casino do M\xF3naco.",price:1500,sw:["#13294B","#D9B65D","#F2E8D0"]},{id:"t_roleta",kind:"theme",name:"Roleta Vermelha",desc:"Vermelho-vinho com detalhes a ouro.",price:2e3,sw:["#5C1A1F","#E8C46A","#F6E7D2"]},{id:"t_vegas",kind:"theme",name:"Vegas Neon",desc:"Roxo de madrugada e n\xE9on rosa da Strip.",price:2500,sw:["#2A0E3F","#FF4FD8","#F9E7FF"]},{id:"t_ebano",kind:"theme",name:"Mesa de \xC9bano",desc:"Preto e prata da sala VIP.",price:3e3,sw:["#1B1B1D","#C9CED6","#E6E6E6"]},{id:"t_ouro",kind:"theme",name:"Ouro Real",desc:"Castanho e ouro para os grandes apostadores.",price:5e3,sw:["#3B2A14","#FFD54A","#F5E6C4"]},{id:"r_bronze",kind:"rank",name:"Bronze",price:500,hex:"#CD7F32",grad:"linear-gradient(135deg,#7A4A1D,#E3A15E 45%,#8C5626)"},{id:"r_prata",kind:"rank",name:"Prata",price:2500,hex:"#C0C0C0",prev:"r_bronze",grad:"linear-gradient(135deg,#7D8288,#F1F3F5 45%,#9AA0A6)"},{id:"r_ouro",kind:"rank",name:"Ouro",price:5e3,hex:"#FFD700",prev:"r_prata",grad:"linear-gradient(135deg,#A67C00,#FFE680 45%,#C99A06)"},{id:"r_platina",kind:"rank",name:"Platina",price:1e4,hex:"#E5E4E2",prev:"r_ouro",grad:"linear-gradient(135deg,#9FA8AE,#FFFFFF 45%,#C9D1D6)"},{id:"r_diamante",kind:"rank",name:"Diamante",price:25e3,hex:"#B9F2FF",prev:"r_platina",grad:"linear-gradient(135deg,#5FC9E6,#E9FCFF 45%,#7FD9F0)"},{id:"r_rubi",kind:"rank",name:"Rubi",price:1e5,hex:"#E0115F",prev:"r_diamante",grad:"linear-gradient(135deg,#7A0630,#FF5C93 45%,#A50B44)"},{id:"r_esmeralda",kind:"rank",name:"Esmeralda",price:25e4,hex:"#50C878",prev:"r_rubi",grad:"linear-gradient(135deg,#1E6B3D,#9CF0BA 45%,#2E8F55)"},{id:"f_5k",kind:"chip",name:"Ficha de 5 000",desc:"Ficha castanha para apostas grandes. Aparece na sua barra de fichas e na sua torre.",price:5e3}],hn=Object.fromEntries(qh.map(n=>[n.id,n])),Ga=qh.filter(n=>n.kind==="rank"),Fh=n=>Ga.find(e=>e.hex===n)||null,qa=String((window.SICBO_CONFIG||{}).nome||"SIC BO \xB7 5 DADOS").slice(0,40),Uh=(()=>{try{let n=sessionStorage.getItem("sicbo5-device");return n||(n="d"+Math.random().toString(36).slice(2,10),sessionStorage.setItem("sicbo5-device",n)),n}catch{return"d"+Math.random().toString(36).slice(2,10)}})(),Ti=30;function Og(n){document.title=qa;let e=(window.SICBO_CONFIG||{}).firebase,t=D("app");if(!e||!e.apiKey||String(e.apiKey).includes("COLE")){t.innerHTML='<section class="card narrow"><h2>Falta configurar</h2><p>Abra o ficheiro <b>config.js</b> e cole a configura\xE7\xE3o do seu projeto Firebase, como explicado no guia.</p></section>';return}let{auth:r,db:s}=n.init(e),i=h=>n.increment(h),a={user:null,uid:null,authReady:!1,users:{},usersLoaded:!1,tables:{},tablesLoaded:!1,players:{},bets:[],rewards:{},redemptions:[],config:null,dealer:null,legacy:void 0,role:wg.get("sicbo5-role")||"player"},c={inTable:!0,lobbyTab:"mesas",ptab:"apostar",chip:25,mode:"bet",pick:null,legs:[],stake:0,dice:[],btab:"mesas",bsel:null,dtab:"mesa",busy:{},authTab:"login"},l={tables:n.collection(s,"tables"),players:n.collection(s,"players"),bets:n.collection(s,"bets"),users:n.collection(s,"users"),rewards:n.collection(s,"rewards"),redemptions:n.collection(s,"redemptions"),config:n.doc(s,"config","main"),dealer:n.doc(s,"config","dealer"),legacy:n.doc(s,"games","main")},f=h=>n.doc(s,"tables",h),_=h=>(h&&h.code==="permission-denied"?"A\xE7\xE3o recusada pelo servidor":"Sem liga\xE7\xE3o. Tente outra vez.")+(h&&h.code?" ["+h.code+"]":""),v=h=>{console.error(h),J(_(h))},T=[],O=()=>{T.forEach(h=>{try{h()}catch{}}),T=[]},F=h=>{let p={};return h.docs.forEach(m=>p[m.id]={id:m.id,...m.data()}),p};function q(){T.push(n.onSnapshot(l.tables,h=>{a.tables=F(h),a.tablesLoaded=!0,Un(),ne()},v)),T.push(n.onSnapshot(l.players,h=>{a.players=F(h),ne()},v)),T.push(n.onSnapshot(l.bets,h=>{a.bets=h.docs.map(p=>({id:p.id,...p.data()})).sort((p,m)=>p.ts-m.ts),ne()},v)),T.push(n.onSnapshot(l.rewards,h=>{a.rewards=F(h),ne()},v)),T.push(n.onSnapshot(l.redemptions,h=>{a.redemptions=h.docs.map(p=>({id:p.id,...p.data()})).sort((p,m)=>m.ts-p.ts),ne()},v)),T.push(n.onSnapshot(l.users,h=>{a.users=F(h),a.usersLoaded=!0,ze(),ne()},v)),T.push(n.onSnapshot(l.config,h=>{a.config=h.exists()?h.data():null,ne()},v)),T.push(n.onSnapshot(l.dealer,h=>{a.dealer=h.exists()?h.data():null,ne()},()=>{}))}n.onAuthStateChanged(r,h=>{let p=(h?h.uid:null)===a.uid&&a.authReady;if(a.authReady=!0,!p){O(),Qt="",Object.assign(a,{user:h||null,uid:h?h.uid:null,users:{},usersLoaded:!1,tables:{},tablesLoaded:!1,players:{},bets:[],rewards:{},redemptions:[],config:null,dealer:null,legacy:void 0});for(let m in pn)delete pn[m];if(!h){c.authTab="login",ne();return}q(),ne()}});let M=()=>!!(a.user&&!a.user.isAnonymous&&a.users[a.uid]&&a.users[a.uid].role==="admin"),ee=()=>a.role==="bank"&&M()?"bank":"player",H=(h,p)=>{h&&h._last!==p&&(h._last=p,h.innerHTML=p)},te=null,de=!1;async function ze(){let h=a.user;if(!h||h.isAnonymous||!a.usersLoaded||a.users[h.uid]||de)return;de=!0;let p=te&&te.toLowerCase()+Tg===(h.email||"").toLowerCase()?te:(h.email||"").split("@")[0];try{await n.setDoc(n.doc(s,"users",h.uid),{name:p,color:ds[Math.floor(Math.random()*ds.length)],created:Date.now(),stats:{...Ba}})}catch(m){v(m)}de=!1}let ce=()=>a.users[a.uid]||null,R=h=>{let p=a.players[h];return p&&p.table&&a.tables[p.table]?p:null},b=()=>R(a.uid),E=()=>{let h=b();return h?a.tables[h.table]:null},A=h=>Ei[h&&h.type||"sicbo"]||Ei.sicbo,S=h=>Object.values(a.players).filter(p=>p.table===h).sort((p,m)=>p.joined-m.joined),k=h=>{let p=a.tables[h];return p?a.bets.filter(m=>m.table===h&&m.round===p.round):[]},I=h=>{let p=R(h);return p?k(p.table).filter(m=>m.uid===h):[]},$e=h=>I(h).reduce((p,m)=>p+m.a,0),Ve=h=>!!(a.users[h]&&typeof a.users[h].balance=="number"),Ze=h=>Ve(h)?a.users[h].balance:a.players[h]&&typeof a.players[h].chips=="number"?a.players[h].chips:0,Ee=h=>Ze(h)-$e(h),vt=()=>a.config&&typeof a.config.initial=="number"?a.config.initial:1e3,He=h=>h&&h.maxBet>0?h.maxBet:0,Ri=(h,p)=>I(h).filter(m=>m.kind==="s"&&m.k===p).reduce((m,y)=>m+y.a,0),Ka=(h,p)=>{let m=He(p);if(!m)return!1;let y={};for(let w of k(p.id).filter(P=>P.uid===h))if(w.kind==="m"){if(w.a>m)return!0}else if(y[w.k]=(y[w.k]||0)+w.a,y[w.k]>m)return!0;return!1},wt=h=>He(h)?"M\xE1ximo por aposta: "+z(He(h))+" fichas":"Sem m\xE1ximo por aposta",Te=h=>a.users[h]&&a.users[h].owned||[],Wa=h=>!!(a.users[h]&&a.users[h].role==="admin"),ke=(h,p)=>Wa(p||a.uid)||Te(p||a.uid).includes(h),gr=h=>a.players[h]?a.players[h].color:a.users[h]&&a.users[h].color||"#999",dn=h=>a.players[h]?a.players[h].name:a.users[h]&&a.users[h].name||"Jogador que saiu",Ae=h=>!!(h&&h.auto&&h.auto.on&&(h.type==="roleta"||h.diceMode==="virtual")),ot=h=>Math.max(10,Math.min(600,h&&h.auto&&h.auto.secs||Ti));function _r(h){if(!Ae(h))return"";if(!h.open)return"A jogar\u2026";if(!h.nextAt)return"A come\xE7ar\u2026";let p=Math.max(0,Math.ceil((h.nextAt-Date.now())/1e3));return"Pr\xF3xima jogada em "+Math.floor(p/60)+":"+String(p%60).padStart(2,"0")}function yr(){let h=a.user&&!a.user.isAnonymous?a.users[a.uid]:null,p=h&&h.theme&&h.theme!=="classico"&&ke(h.theme)?h.theme.slice(2):"";(document.documentElement.dataset.skin||"")!==p&&(p?document.documentElement.dataset.skin=p:delete document.documentElement.dataset.skin)}function gs(h,p){let m=Math.max(0,Math.floor(h)),y=[];for(let w of(p?Lh.concat(ja):Lh).slice().reverse()){let P=Math.floor(m/w.v);P>0&&(y.push({c:w,k:P}),m-=P*w.v)}return y.length?'<div class="tower" aria-hidden="true">'+y.map(({c:w,k:P})=>{let x=Math.min(P,14),U="";for(let j=0;j<x;j++)U+='<i style="background:repeating-linear-gradient(90deg,'+w.bg+" 0 6px,"+w.fg+" 6px 8px) center/100% 3px no-repeat,"+w.bg+'"></i>';return'<div class="tstack"><div class="tchips">'+U+'</div><span class="tlab num">'+P+"\xD7"+(w.v>=1e3?w.v/1e3+"k":w.v)+"</span></div>"}).join("")+"</div>":'<div class="tower empty"><span class="note">Sem fichas</span></div>'}function vr(h){let p=S(h);return p.length?'<div class="felt"><span class="bankpill">Banca</span><div class="seats">'+p.map(m=>{let y=$e(m.id),w=Ze(m.id)-y;return'<div class="seat'+(m.id===a.uid?" you":"")+'"><div class="sname"><span class="dot" style="background:'+m.color+'"></span><b>'+Q(m.name)+"</b>"+(m.id===a.uid?' <span class="note">(voc\xEA)</span>':"")+"</div>"+(Fh(m.color)?'<span class="rbadge" style="background:'+Fh(m.color).grad+'">'+Q(Fh(m.color).name)+"</span>":"")+gs(w,ke("f_5k",m.id))+'<div class="samt num">'+z(w)+" fichas</div>"+(y?'<div class="note num">'+z(y)+" em jogo</div>":'<div class="note">&nbsp;</div>')+"</div>"}).join("")+"</div></div>":'<div class="felt"><span class="bankpill">Banca</span><p class="note">Ainda n\xE3o se sentou ningu\xE9m.</p></div>'}function _s(h){let p=h&&h.stats||Ba,m=h&&h.statsBy||{},y=p.returned-p.staked,w='<dl class="stats"><div><dt>Rondas jogadas</dt><dd class="num">'+z(p.rounds)+'</dd></div><div><dt>Total apostado</dt><dd class="num">'+z(p.staked)+'</dd></div><div><dt>Resultado acumulado</dt><dd class="num '+(y>=0?"pos":"neg")+'">'+(y>0?"+":"")+z(y)+'</dd></div><div><dt>Maior pr\xE9mio</dt><dd class="num gold">'+z(p.best)+"</dd></div></dl>",P=Object.keys(Ei).filter(x=>m[x]&&m[x].rounds);return P.length&&(w+='<ul class="bygame">'+P.map(x=>{let U=m[x],j=(U.returned||0)-(U.staked||0);return"<li><b>"+Q(Ei[x].label)+'</b><span class="note num">'+z(U.rounds)+" rondas \xB7 "+z(U.staked||0)+' apostado</span><span class="num '+(j>=0?"pos":"neg")+'">'+(j>0?"+":"")+z(j)+"</span></li>"}).join("")+"</ul>"),w}let Qt="";function Pi(){if(!a.authReady)return"connecting";if(!a.user||a.user.isAnonymous)return"login";if(!a.usersLoaded||!a.tablesLoaded)return"connecting";if(ee()==="bank")return c.bsel&&a.tables[c.bsel]?"bankTable:"+c.bsel:"bank";let h=E();return h&&c.inTable?"table:"+h.id:"lobby"}function ne(){let h=Pi();if(h!==Qt){Qt=h,c.legs=[],c.mode="bet",c.pick=null;let[y,w]=h.split(":");t.innerHTML=bs[y](w),Is(y,w)}let[p,m]=h.split(":");As[p]&&As[p](m),ki(),yr(),ys()}let Ci=()=>'<span class="rolelink" data-rolelink></span>';function ki(){let h=M()?ee()==="bank"?'<button class="link" data-act="role" data-v="player">Jogar como jogador</button>':'<button class="link" data-act="role" data-v="bank">Ir para a banca</button>':"";document.querySelectorAll("[data-rolelink]").forEach(p=>{p.innerHTML!==h&&(p.innerHTML=h)})}function ys(){document.querySelectorAll("[data-cd]").forEach(h=>{let p=a.tables[h.dataset.cd],m=p?_r(p):"";h.textContent!==m&&(h.textContent=m),h.hidden=!m})}setInterval(ys,500);let vs=()=>Lh.concat(ja).map(h=>'<button class="chip num'+(h.v>=1e3?" big":"")+'" data-act="chip" data-v="'+h.v+'" id="chip-'+h.v+'" style="background:'+h.bg+";color:"+h.fg+'" aria-label="Ficha de '+h.v+'">'+(h.v>=5e3?"5k":h.v)+"</button>").join(""),ws=h=>'<section class="shop"><div class="shop-h"><span class="shop-eyebrow">Loja</span><h2 class="shop-title">O Mateus Banca</h2><p class="note">'+h+'</p><div class="shop-bal" id="shopBal"></div></div>',Qa=()=>'<section class="panel" id="rwAdmin"><h2>Pr\xE9mios reais: pedidos por entregar</h2><div id="rwPending"></div></section><section class="panel"><h2 id="rwFormTitle">Novo pr\xE9mio</h2><form id="rwForm" class="rwform"><label for="rwSection">Sec\xE7\xE3o</label><select class="field" id="rwSection"><option value="iscte">ISCTE (bar e refeit\xF3rio)</option><option value="especial">Especial</option></select><label for="rwTitle">T\xEDtulo</label><input class="field" id="rwTitle" maxlength="40" required placeholder="Ex.: Refei\xE7\xE3o no refeit\xF3rio"><label for="rwDesc">Descri\xE7\xE3o</label><textarea class="field" id="rwDesc" maxlength="160" rows="2" placeholder="Ex.: Prato do dia com sopa e bebida"></textarea><div class="rwrow"><div class="stack-form"><label for="rwPrice">Pre\xE7o em fichas</label><input class="field num" id="rwPrice" type="number" min="1" step="1" inputmode="numeric" required></div><div class="stack-form"><label for="rwStock">Quantidade dispon\xEDvel</label><input class="field num" id="rwStock" type="number" min="0" step="1" inputmode="numeric" placeholder="Vazio = sem limite"></div></div><label class="check"><input type="checkbox" id="rwActive" checked> Vis\xEDvel na loja</label><div class="row-actions"><button class="btn primary" type="submit" id="rwSave">Criar pr\xE9mio</button><button class="btn" type="button" data-act="rwCancelEdit" id="rwCancelEdit" hidden>Cancelar edi\xE7\xE3o</button></div></form></section><section class="panel"><h2>Pr\xE9mios na loja</h2><div id="rwList"></div></section><section class="panel"><h2>Trocas j\xE1 tratadas</h2><div id="rwDone"></div></section>',wr=h=>'<section class="sec" id="resultSec" hidden><div class="sec-h"><h2>\xDAltima ronda</h2>'+(h?'<button class="btn sm warn" data-act="undo" id="undoBtn">Corrigir: anular esta ronda</button>':"")+'</div><div class="read" id="resHead"></div><div class="res" id="res"></div></section>',bs={connecting:()=>'<section class="card narrow"><p>A ligar ao sal\xE3o\u2026</p></section>',login:()=>'<section class="card narrow"><h1 class="big">'+Q(qa)+'</h1><div class="seg" role="tablist"><button role="tab" data-act="authTab" data-v="login" id="at-login">Entrar</button><button role="tab" data-act="authTab" data-v="new" id="at-new">Criar conta</button></div><form id="authForm" class="stack-form"><label for="aUser">Utilizador</label><input class="field" id="aUser" maxlength="20" required autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Ex.: rita"><label for="aPass">Palavra-passe</label><input class="field" id="aPass" type="password" minlength="6" required autocomplete="current-password"><div id="aPass2Wrap" hidden class="stack-form"><label for="aPass2">Repetir palavra-passe</label><input class="field" id="aPass2" type="password" minlength="6" autocomplete="new-password"></div><button class="btn primary" type="submit" id="aSubmit">Entrar</button></form><p class="note" id="authNote" role="alert"></p><p class="note">A conta fica guardada: entra com ela em qualquer telem\xF3vel e mant\xE9m o saldo e as estat\xEDsticas.</p></section>',lobby:()=>"<header><h1>"+Q(qa)+'</h1><div class="hright"><span class="me" id="meBox"></span></div></header><nav class="tabs" role="tablist"><button role="tab" data-act="ltab" data-v="mesas" id="lt-mesas">Mesas</button><button role="tab" data-act="ltab" data-v="loja" id="lt-loja">Loja</button><button role="tab" data-act="ltab" data-v="conta" id="lt-conta">Conta</button></nav><div id="lp-mesas" class="tabp"><section class="sec"><div class="sec-h"><h2>Sal\xE3o de jogos</h2><span class="note">S\xF3 pode estar sentado numa mesa de cada vez.</span></div><div class="tgrid" id="tgrid"></div></section></div><div id="lp-loja" class="tabp" hidden>'+ws("Gaste as suas fichas em extras para a conta e pr\xE9mios reais. O que comprar fica para sempre na conta.")+'<div id="shopBody"></div></section></div><div id="lp-conta" class="tabp" hidden><section class="panel"><div class="sec-h"><h2>A minha conta</h2><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+Ci()+'</div></div><div id="statsBox"></div></section></div>',table:h=>{let p=a.tables[h],m=A(p),y=m.multi?'<button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="multi" id="mMulti">M\xFAltipla</button>':'<button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="split" id="mSplit">Cavalo</button><button class="take" data-act="mode" data-v="corner" id="mCorner">Quadrado</button><button class="take" data-act="mode" data-v="line" id="mLine">Linha</button>';return'<header><div class="hleft"><button class="link back" data-act="toLobby">\u2190 Sal\xE3o</button><h1>'+Q(p.name)+'</h1><span class="note">'+Q(m.label)+'</span></div><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span><span class="me" id="meBox"></span></div></header><nav class="tabs" role="tablist"><button role="tab" data-act="ptab" data-v="apostar" id="pt-apostar">Apostar</button><button role="tab" data-act="ptab" data-v="mesa" id="pt-mesa">Mesa</button></nav><div id="pp-mesa" class="tabp" hidden><section class="sec"><div class="sec-h"><h2>Jogadores sentados</h2><span class="note" id="maxNoteP"></span></div><div id="tableView"></div></section></div><div id="pp-apostar" class="tabp"><div class="banner" id="banner"><span id="bannerTxt"></span> <b class="cd" data-cd="'+h+'"></b></div>'+(m.type==="roleta"?'<div class="lastnums" id="lastNums"></div>':"")+m.boardHTML()+'<section class="sec" id="comboSec" hidden><div class="sec-h"><h2>As minhas apostas combinadas</h2></div><ul class="rdlist" id="comboList"></ul></section><section class="sec" id="myMultiSec" hidden><div class="sec-h"><h2>As minhas m\xFAltiplas</h2><span class="note">S\xF3 pagam se todas as sele\xE7\xF5es ganharem</span></div><div class="mlist" id="mlist"></div></section>'+wr(!1)+'<section class="sec"><div class="sec-h"><h2>Hist\xF3rico da mesa</h2><button class="link" data-act="leave">Sair da mesa</button></div><ul class="hist" id="hist"></ul></section><div class="bar"><div class="bar-in"><div class="slip" id="slip" hidden></div><div class="rpick" id="rpick" hidden></div><div class="tools"><div class="chips" role="group" aria-label="Valor da ficha">'+vs()+'</div></div><div class="tools"><div class="modes">'+y+'<button class="take" data-act="repeat" id="repeatBtn">Repetir</button></div><div class="tot" id="tot"></div></div></div></div></div>'},bank:()=>"<header><h1>"+Q(qa)+'</h1><div class="hright"><span class="state on">Banca</span></div></header><nav class="tabs" role="tablist"><button role="tab" data-act="btab" data-v="mesas" id="bt-mesas">Mesas</button><button role="tab" data-act="btab" data-v="jogadores" id="bt-jogadores">Jogadores</button><button role="tab" data-act="btab" data-v="loja" id="bt-loja">Loja</button></nav><div id="bp-mesas" class="tabp"><section class="panel"><div class="sec-h"><h2>Piloto autom\xE1tico</h2><span class="note" id="dealerNote"></span></div><p class="note">As mesas em modo autom\xE1tico jogam sozinhas enquanto este ecr\xE3 da banca estiver aberto num aparelho de admin: abrem as apostas, contam o tempo, lan\xE7am, animam e liquidam.</p></section><section class="sec"><div class="sec-h"><h2>Mesas</h2><span class="note" id="tablesNote"></span></div><div class="tgrid bankgrid" id="tgrid"></div></section><section class="panel"><h2>Nova mesa</h2><form id="newTable" class="rwform"><div class="rwrow"><div class="stack-form"><label for="ntType">Jogo</label><select class="field" id="ntType"><option value="sicbo">Sic Bo \xB7 5 dados</option><option value="roleta">Roleta europeia</option></select></div><div class="stack-form"><label for="ntName">Nome da mesa</label><input class="field" id="ntName" maxlength="24" required placeholder="Ex.: Roleta do bar"></div></div><label class="check"><input type="checkbox" id="ntAuto"> Come\xE7ar em modo autom\xE1tico</label><div class="row-actions"><button class="btn primary" type="submit">Abrir mesa</button></div></form></section></div><div id="bp-jogadores" class="tabp" hidden><section class="panel"><h2>Convidar jogadores</h2><p class="note">Envie este link. Cada pessoa cria uma conta (utilizador e palavra-passe) e escolhe uma mesa no Sal\xE3o. S\xF3 contas com papel de admin veem a banca.</p><div class="row-actions"><input class="field" id="shareUrl" readonly aria-label="Link do sal\xE3o"><button class="btn sm" data-act="copy">Copiar link</button></div></section><section class="sec"><h2>Saldos das contas</h2><p class="note">O saldo \xE9 da conta e serve para todas as mesas.</p><div id="plist"></div></section><section class="sec"><h2>Contas registadas</h2><div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Utilizador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Maior pr\xE9mio</th><th scope="col">Admin</th></tr></thead><tbody id="ulist"></tbody></table></div></section><section class="panel"><h2>Defini\xE7\xF5es</h2><div class="row-actions"><label class="note" for="initChips">Fichas de boas-vindas (primeira vez que algu\xE9m se senta)</label><input class="field num" id="initChips" type="number" min="0" step="5" inputmode="numeric" style="width:120px"><button class="btn sm" data-act="saveInit">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="resetBal" id="resetBalBtn">Repor o saldo de todas as contas</button>'+Ci()+'</div></section></div><div id="bp-loja" class="tabp" hidden>'+ws("O que os jogadores podem comprar com as suas fichas.")+Qa()+'<div id="shopBody"></div></section></div>',bankTable:h=>{let p=a.tables[h],m=A(p);return'<header><div class="hleft"><button class="link back" data-act="bankBack">\u2190 Todas as mesas</button><h1>'+Q(p.name)+'</h1><span class="note">'+Q(m.label)+'</span></div><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span><b class="cd" data-cd="'+h+'"></b></div></header><nav class="tabs" role="tablist"><button role="tab" data-act="dtab" data-v="mesa" id="dt-mesa">Mesa</button><button role="tab" data-act="dtab" data-v="historico" id="dt-historico">Hist\xF3rico</button><button role="tab" data-act="dtab" data-v="definicoes" id="dt-definicoes">Defini\xE7\xF5es</button></nav><div id="dp-mesa" class="tabp"><section class="panel"><div class="sec-h"><h2>Apostas</h2><span class="note" id="betSummary"></span></div><div class="row-actions"><button class="btn" data-act="toggleOpen" id="openBtn"></button><button class="btn" data-act="toggleAuto" id="autoBtn"></button>'+(m.physical?'<div class="seg" role="group" aria-label="Dados"><button data-act="diceMode" data-v="fisico" id="dm-fisico">Dados f\xEDsicos</button><button data-act="diceMode" data-v="virtual" id="dm-virtual">Dados virtuais</button></div>':"")+'</div><div class="who" id="who"></div></section><section class="sec"><h2>Jogadores sentados</h2><div id="tableView"></div></section>'+(m.type==="roleta"?'<div class="lastnums" id="lastNums"></div>':"")+m.boardHTML()+'<section class="sec" id="comboSec" hidden><div class="sec-h"><h2>Apostas combinadas</h2></div><ul class="rdlist" id="comboList"></ul></section><section class="sec" id="allMultiSec" hidden><div class="sec-h"><h2>M\xFAltiplas em jogo</h2></div><div class="mlist" id="mlist"></div></section><section class="panel" id="dados"><div class="sec-h"><h2>'+(m.type==="roleta"?"Roleta":"Resultado dos dados")+'</h2><span class="note" id="diceHint"></span></div>'+(m.physical?'<div id="physical" class="stack-form"><div class="slots" id="slots"></div><div class="pad" id="pad">'+[1,2,3,4,5,6].map(y=>'<button data-act="face" data-v="'+y+'" aria-label="Face '+y+'">'+ps(y)+"</button>").join("")+'</div><div class="read" id="readout" aria-live="polite"></div><div class="row-actions"><button class="btn primary" data-act="settle" id="settle">Liquidar ronda</button><button class="btn" data-act="clearDice">Limpar dados</button></div></div>':"")+'<div id="virtual" class="stack-form"><button class="btn primary roll" data-act="roll" id="rollBtn">'+Q(m.verb)+'</button><p class="note" id="virtNote"></p></div></section>'+wr(!0)+'</div><div id="dp-historico" class="tabp" hidden><section class="sec"><h2>Hist\xF3rico da mesa</h2><ul class="hist" id="hist"></ul></section></div><div id="dp-definicoes" class="tabp" hidden><section class="panel"><h2>Defini\xE7\xF5es da mesa</h2><div class="row-actions"><label class="note" for="tName">Nome</label><input class="field" id="tName" maxlength="24" style="max-width:220px"><button class="btn sm" data-act="saveName">Guardar</button></div><div class="row-actions"><label class="note" for="maxBet">M\xE1ximo por aposta</label><input class="field num" id="maxBet" type="number" min="0" step="5" inputmode="numeric" placeholder="Sem limite" style="width:130px"><button class="btn sm" data-act="saveMax">Guardar</button><span class="note" id="maxNote"></span></div><div class="row-actions"><label class="note" for="autoSecs">Tempo de apostas no modo autom\xE1tico (segundos)</label><input class="field num" id="autoSecs" type="number" min="10" max="600" step="5" inputmode="numeric" style="width:110px"><button class="btn sm" data-act="saveSecs">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="clearTable" id="clearTableBtn">Esvaziar a mesa (tira todos; os saldos ficam)</button><button class="btn sm warn" data-act="deleteTable" id="deleteTableBtn">Fechar esta mesa</button></div><p class="note">S\xF3 \xE9 poss\xEDvel fechar a mesa quando n\xE3o h\xE1 ningu\xE9m sentado.</p></section></div>'}};function Is(h,p){if(h==="login"&&D("authForm").addEventListener("submit",async m=>{m.preventDefault();let y=D("aUser").value.trim(),w=D("aPass").value,P=D("authNote");if(P.textContent="",!sI.test(y)){P.textContent="O utilizador deve ter 3 a 20 caracteres: letras, n\xFAmeros, ponto, h\xEDfen ou _ (sem espa\xE7os nem acentos).";return}let x=y.toLowerCase()+Tg;D("aSubmit").disabled=!0;try{if(c.authTab==="new"){if(w!==D("aPass2").value){P.textContent="As palavras-passe n\xE3o s\xE3o iguais.",D("aSubmit").disabled=!1;return}te=y,await n.createUserWithEmailAndPassword(r,x,w)}else await n.signInWithEmailAndPassword(r,x,w)}catch(U){P.textContent=iI(U),console.error(U)}D("aSubmit")&&(D("aSubmit").disabled=!1)}),h==="bank"&&(D("rwForm").addEventListener("submit",Ya),D("newTable").addEventListener("submit",Ns),D("shareUrl").value=location.href.split("#")[0],D("initChips").value=vt()),h==="bankTable"){let m=a.tables[p];D("tName").value=m.name||"",D("autoSecs").value=ot(m),D("maxBet").value=He(m)||""}}function De(h){D("roundNo").textContent=h.round,D("state").className="state "+(h.open?"on":"off"),D("state").textContent=h.open?"Apostas abertas":"Apostas fechadas"}function Le(h,p,m){let y=A(h),w=m?y.info(m):null,P={};y.type==="roleta"&&p.forEach(x=>{x.kind==="s"&&!y.zoneKeys.includes(x.k)&&(ms(x.k)||[]).forEach(U=>P["n"+U]=!0)}),y.zoneKeys.forEach(x=>{let U=D("z-"+x);if(!U)return;let j={};if(p.filter($=>$.kind==="s"&&$.k===x).forEach($=>j[$.uid]=(j[$.uid]||0)+$.a),H(D("st-"+x),Object.entries(j).map(([$,fe])=>'<span class="pill num"><span class="dot" style="background:'+gr($)+'"></span>'+z(fe)+"</span>").join("")),U.classList.toggle("sel",c.mode==="multi"&&c.legs.includes(x)||c.pick!==null&&x==="n"+c.pick),U.classList.toggle("has",!!P[x]),U.classList.remove("win","push","dim"),w!=null){let $=y.mult(x,w);U.classList.add($==null?"dim":$===0?"push":"win")}})}function Mn(h,p,m){let y=A(h);if(y.type!=="roleta"||!D("comboSec"))return;let w=p.filter(U=>U.kind==="s"&&!y.zoneKeys.includes(U.k)),P={};w.forEach(U=>{let j=U.uid+"|"+U.k;(P[j]=P[j]||{uid:U.uid,k:U.k,a:0}).a+=U.a});let x=Object.values(P);D("comboSec").hidden=!x.length,H(D("comboList"),x.map(U=>'<li><span class="rtitle">'+(m?"":'<span class="dot" style="background:'+gr(U.uid)+'"></span> <b>'+Q(dn(U.uid))+"</b> \xB7 ")+Q(y.name(U.k))+' <span class="note">('+Q(y.pay(U.k))+')</span></span><span class="num">'+z(U.a)+" fichas</span>"+(m&&h.open?'<span class="ractions"><button class="btn sm warn" data-act="unbet" data-k="'+U.k+'">Retirar</button></span>':"")+"</li>").join(""))}function Es(h,p){let m=h.lastResult,y=A(h);if(D("resultSec").hidden=!m,!m)return;let w=m.res||m.dice||[];D("resHead").innerHTML="Ronda "+m.round+" \xB7 "+y.resSmall(w)+" \xB7 "+Q(m.desc)+(m.virtual&&y.physical?' \xB7 <span class="note">dados virtuais</span>':"");let P=p?m.per.filter(x=>x.uid===p):m.per;H(D("res"),P.length?P.map(x=>{let U=x.ret-x.st;return'<div class="rcard"><div class="rhead"><span class="dot" style="background:'+x.color+'"></span>'+Q(x.name)+'<span class="net num '+(U>=0?"pos":"neg")+'">'+(U>0?"+":"")+z(U)+'</span></div><ul class="rlines">'+x.lines.map(j=>"<li><span>"+Q(j.n)+" \xB7 "+z(j.a)+'</span><span class="num '+(j.v?"":j.pay>0?"pos":"neg")+'">'+(j.v?"anulada: "+Q(j.v):j.pay>0?"recebe "+z(j.pay):"perde")+"</span></li>").join("")+"</ul></div>"}).join(""):'<p class="note">'+(p?"N\xE3o apostou nesta ronda.":"Ningu\xE9m apostou nesta ronda.")+"</p>")}function Ts(h){let p=h.history||[],m=A(h);H(D("hist"),p.length?p.map(y=>{let w=y.res||y.dice||[];return'<li><span class="hr">Ronda '+y.round+'</span><span class="hd">'+m.resSmall(w)+'</span><span class="note">'+Q(y.desc||(y.sum?"Soma "+y.sum:""))+'</span><span class="hn">'+y.per.map(P=>'<span class="num '+(P.net>=0?"pos":"neg")+'">'+Q(P.name)+" "+(P.net>0?"+":"")+z(P.net)+"</span>").join("")+"</span></li>"}).join(""):'<li class="note">As rondas liquidadas aparecem aqui.</li>'),D("lastNums")&&H(D("lastNums"),p.length?'<span class="note">\xDAltimos n\xFAmeros</span>'+p.slice(0,15).map(y=>m.resSmall(y.res||[])).join(""):"")}function Di(h,p,m){return h.map(y=>{let w=Bh(y.legs);return'<div class="mcard"><div class="mh">'+(p?'<span class="dot" style="background:'+gr(y.uid)+'"></span>'+Q(dn(y.uid)):"M\xFAltipla")+'<span class="num">'+z(y.a)+' fichas</span></div><div class="ml">'+y.legs.map(P=>qe[P]?Q(mr(qe[P]))+" ("+Q(qe[P].p)+")":"?").join(" + ")+'</div><div class="mf"><span>Recebe at\xE9 <b class="num gold">'+z(Math.floor(y.a*w.max+1e-9))+"</b></span>"+(m?'<button class="btn sm warn" data-act="cancelMulti" data-id="'+y.id+'">Cancelar</button>':"")+"</div></div>"}).join("")}function fn(h,p){let m=A(h),y=S(h.id),w=b()&&b().table===h.id,x=k(h.id).reduce(($,fe)=>$+fe.a,0),U=h.lastResult?m.resSmall(h.lastResult.res||h.lastResult.dice||[]):'<span class="note">Ainda sem jogadas</span>',j;return p?j='<button class="btn sm primary" data-act="openTable" data-id="'+h.id+'">Gerir</button><button class="btn sm'+(Ae(h)?" on":"")+'" data-act="toggleAuto" data-id="'+h.id+'"'+(m.physical&&h.diceMode!=="virtual"?' disabled title="Ponha os dados em modo virtual"':"")+">"+(Ae(h)?"Auto ligado":"Auto desligado")+"</button>":w?j='<button class="btn sm primary" data-act="enterTable">Voltar \xE0 mesa</button>':b()?j='<button class="btn sm" data-act="sit" data-id="'+h.id+'">Mudar para esta mesa</button>':j='<button class="btn sm primary" data-act="sit" data-id="'+h.id+'">Sentar</button>','<div class="tcard'+(w?" mine":"")+'"><div class="tc-top">'+m.icon()+'<div class="tc-name"><b>'+Q(h.name)+'</b><span class="note">'+Q(m.label)+" \xB7 ronda "+h.round+'</span></div></div><div class="tc-state"><span class="state '+(h.open?"on":"off")+'">'+(h.open?"Apostas abertas":"A jogar")+'</span><b class="cd" data-cd="'+h.id+'"></b></div><div class="tc-meta"><span>'+y.length+" sentado"+(y.length===1?"":"s")+(y.length?": "+y.slice(0,4).map($=>'<span class="dot" style="background:'+$.color+'" title="'+Q($.name)+'"></span>').join(""):"")+"</span>"+(p?'<span class="num">'+z(x)+" em jogo</span>":"")+'</div><div class="tc-last"><span class="note">\xDAltimo:</span> '+U+'</div><div class="tc-act">'+j+"</div></div>"}let As={login(){D("at-login").setAttribute("aria-selected",String(c.authTab==="login")),D("at-new").setAttribute("aria-selected",String(c.authTab==="new")),D("aPass2Wrap").hidden=c.authTab!=="new",D("aPass2").required=c.authTab==="new",D("aPass").autocomplete=c.authTab==="new"?"new-password":"current-password",D("aSubmit").textContent=c.authTab==="new"?"Criar conta":"Entrar"},lobby(){let h=ce();D("meBox").innerHTML=h?'<span class="dot" style="background:'+(h.color||"#999")+'"></span>'+Q(h.name)+' \xB7 <b class="num">'+z(Ve(a.uid)?Ze(a.uid):vt())+"</b>":"",["mesas","loja","conta"].forEach(m=>{D("lp-"+m).hidden=c.lobbyTab!==m,D("lt-"+m).setAttribute("aria-selected",String(c.lobbyTab===m))});let p=Object.values(a.tables).sort((m,y)=>(m.created||0)-(y.created||0));H(D("tgrid"),p.length?p.map(m=>fn(m,!1)).join(""):'<p class="note">Ainda n\xE3o h\xE1 mesas abertas. Quando a banca abrir uma, aparece aqui.</p>'),Ps(),D("statsBox").innerHTML='<p class="note">Utilizador: <b>'+Q(h?h.name:"")+'</b> \xB7 Saldo: <b class="num gold">'+z(Ze(a.uid))+"</b></p>"+_s(h)},table(h){let p=a.tables[h],m=b();if(!p||!m)return;let y=A(p);De(p);let w=p.open,P=I(a.uid);D("meBox").innerHTML='<span class="dot" style="background:'+m.color+'"></span>'+Q(m.name)+' \xB7 <b class="num">'+z(Ee(a.uid))+"</b>",D("banner").className="banner "+(w?"on":"off"),D("bannerTxt").textContent=(w?Ae(p)?"Fa\xE7a as suas apostas.":"Fa\xE7a as suas apostas. A banca fecha as apostas antes de jogar.":"Apostas fechadas. A "+(y.type==="roleta"?"roleta est\xE1 a rodar.":"banca est\xE1 a lan\xE7ar os dados."))+" "+wt(p)+".",["apostar","mesa"].forEach($=>{D("pp-"+$).hidden=c.ptab!==$,D("pt-"+$).setAttribute("aria-selected",String(c.ptab===$))}),D("maxNoteP").textContent=wt(p),H(D("tableView"),vr(h)),D("chip-5000")&&(D("chip-5000").hidden=!ke("f_5k")),c.chip===5e3&&!ke("f_5k")&&(c.chip=25),document.querySelectorAll(".zone,.rz").forEach($=>$.disabled=!w),Le(p,P,null),Mn(p,P,!0),document.querySelectorAll(".chip").forEach($=>$.setAttribute("aria-pressed",String(+$.dataset.v===c.chip))),["take","multi","split","corner","line"].forEach($=>{let fe=D("m"+$[0].toUpperCase()+$.slice(1));fe&&fe.setAttribute("aria-pressed",String(c.mode===$))});let x=(p.lastBets||[]).filter($=>$.uid===a.uid);if(D("repeatBtn").disabled=!w||!x.length||P.length>0,D("tot").innerHTML='Em jogo <b class="num">'+z($e(a.uid))+'</b> \xB7 Dispon\xEDvel <b class="num">'+z(Ee(a.uid))+"</b>",y.multi){let $=P.filter(fe=>fe.kind==="m");D("myMultiSec").hidden=!$.length,H(D("mlist"),Di($,!1,w))}else D("myMultiSec").hidden=!0;let U=D("rpick"),j={split:c.pick===null?"Cavalo: toque no primeiro n\xFAmero.":"Cavalo: toque num n\xFAmero ao lado do "+c.pick+".",corner:"Quadrado: toque num n\xFAmero; junta-se com os vizinhos \xE0 direita e em baixo.",line:"Linha: toque numa \u201CRua\u201D; junta essa rua com a de baixo (6 n\xFAmeros)."}[c.mode];U.hidden=!j,U.textContent=j||"",Ss(p),Es(p,a.uid),Ts(p)},bank(){["mesas","jogadores","loja"].forEach(p=>{D("bp-"+p).hidden=c.btab!==p,D("bt-"+p).setAttribute("aria-selected",String(c.btab===p))});let h=Object.values(a.tables).sort((p,m)=>(p.created||0)-(m.created||0));H(D("tgrid"),h.length?h.map(p=>fn(p,!0)).join(""):'<p class="note">Ainda n\xE3o h\xE1 mesas. Crie a primeira em \u201CNova mesa\u201D.</p>'),D("tablesNote").textContent=h.length+" mesa"+(h.length===1?"":"s")+" \xB7 "+Object.values(a.players).filter(p=>a.tables[p.table]).length+" jogadores sentados",D("dealerNote").textContent=Bi(),Ni(),Ps(),rc()},bankTable(h){let p=a.tables[h];if(!p)return;let m=A(p);De(p),["mesa","historico","definicoes"].forEach(j=>{D("dp-"+j).hidden=c.dtab!==j,D("dt-"+j).setAttribute("aria-selected",String(c.dtab===j))});let y=p.open,w=!m.physical||p.diceMode==="virtual",P=k(h);D("openBtn").textContent=y?"Fechar apostas":"Reabrir apostas",D("openBtn").className="btn "+(y&&!w?"primary":""),D("openBtn").disabled=Ae(p),D("autoBtn").textContent=Ae(p)?"Modo autom\xE1tico: ligado ("+ot(p)+" s)":"Modo autom\xE1tico: desligado",D("autoBtn").className="btn "+(Ae(p)?"on":""),D("autoBtn").disabled=!w,m.physical&&(D("dm-fisico").setAttribute("aria-pressed",String(!w)),D("dm-virtual").setAttribute("aria-pressed",String(w)));let x=P.reduce((j,$)=>j+$.a,0);if(D("betSummary").textContent=P.length?z(x)+" fichas em "+P.length+" aposta(s)":"Sem apostas nesta ronda",D("maxNote").textContent=He(p)?"Atual: "+z(He(p)):"Atual: sem limite",H(D("tableView"),vr(h)),D("who").innerHTML=S(h).map(j=>{let $=$e(j.id),fe=$>Ze(j.id),st=Ka(j.id,p);return'<span class="wchip'+(fe||st?" over":"")+'"><span class="dot" style="background:'+j.color+'"></span>'+Q(j.name)+' <b class="num">'+z($)+"</b>"+(fe?" \xB7 excede saldo":"")+(st?" \xB7 acima do m\xE1ximo":"")+"</span>"}).join("")||'<span class="note">Ainda n\xE3o se sentou ningu\xE9m nesta mesa.</span>',document.querySelectorAll(".zone,.rz").forEach(j=>j.disabled=!0),Le(p,P,!w&&c.dice.length===5?c.dice:null),Mn(p,P,!1),m.multi){let j=P.filter($=>$.kind==="m");D("allMultiSec").hidden=!j.length,H(D("mlist"),Di(j,!0,!1))}D("physical")&&(D("physical").hidden=w),D("virtual").hidden=!w,D("diceHint").textContent=w?Ae(p)?"Modo autom\xE1tico":"Modo virtual":"Toque nas faces \xB7 toque num dado para o apagar";let U=!!c.busy[h];if(D("rollBtn").disabled=U||Ae(p),D("rollBtn").textContent=U?m.type==="roleta"?"A rodar\u2026":"A lan\xE7ar\u2026":y?"Fechar apostas e "+m.verb.toLowerCase():m.verb,D("virtNote").textContent=Ae(p)?"O piloto autom\xE1tico joga sozinho a cada "+ot(p)+" segundos. Desligue-o para jogar \xE0 m\xE3o.":"O site gera o resultado ao acaso, mostra a anima\xE7\xE3o a todos e liquida a ronda.",!w){let j="";for(let fe=0;fe<5;fe++){let st=c.dice[fe];j+='<button class="slot" data-act="slot" data-i="'+fe+'" aria-label="'+(st?"Dado "+(fe+1)+": "+st:"Dado "+(fe+1)+" vazio")+'">'+ps(st||0)+"</button>"}D("slots").innerHTML=j;let $=c.dice.length===5?$a(c.dice):null;D("readout").innerHTML=$?"<b>"+Q(Pg($))+"</b>"+(y?" \xB7 feche as apostas antes de liquidar":""):c.dice.length?"Faltam "+(5-c.dice.length)+" dados":"Introduza os 5 dados lan\xE7ados",D("settle").disabled=!$||y||U}Es(p,null),D("undoBtn").hidden=!p.undo||Ae(p),Ts(p)}};function Ni(){if(!(document.activeElement&&document.activeElement.closest&&document.activeElement.closest("#plist"))){let p=Object.values(a.users).sort((m,y)=>(R(y.id)?1:0)-(R(m.id)?1:0)||(m.name||"").localeCompare(y.name||""));H(D("plist"),p.map(m=>{let y=R(m.id);return'<div class="prow"><div class="nm"><span class="dot" style="background:'+gr(m.id)+'"></span><b>'+Q(m.name)+'</b> <span class="note">'+(y?"("+Q(a.tables[y.table].name)+")":"(fora das mesas)")+'</span></div><div class="bal num">'+z(Ze(m.id))+($e(m.id)?'<div class="note">'+z($e(m.id))+" em jogo</div>":"")+'</div><div class="adj"><input class="field num" id="amt-'+m.id+'" type="number" min="1" inputmode="numeric" placeholder="Qtd." aria-label="Quantidade para '+Q(m.name)+'"><button class="btn sm" data-act="give" data-id="'+m.id+'">Dar</button><button class="btn sm" data-act="takeChips" data-id="'+m.id+'">Tirar</button>'+(y?'<button class="btn sm warn" data-act="remove" data-id="'+m.id+'">Tirar da mesa</button>':"")+"</div></div>"}).join("")||'<p class="note">Ainda ningu\xE9m criou conta.</p>')}let h=Object.values(a.users).sort((p,m)=>(p.name||"").localeCompare(m.name||""));H(D("ulist"),h.length?h.map(p=>{let m=p.stats||Ba,y=m.returned-m.staked;return'<tr><td><span class="dot" style="background:'+(p.color||"#999")+'"></span> '+Q(p.name)+'</td><td class="num">'+z(m.rounds)+'</td><td class="num">'+z(m.staked)+'</td><td class="num '+(y>=0?"pos":"neg")+'">'+(y>0?"+":"")+z(y)+'</td><td class="num">'+z(m.best)+"</td><td>"+(p.id===a.uid?'<span class="note">Admin (voc\xEA)</span>':'<button class="btn sm'+(p.role==="admin"?" warn":"")+'" data-act="toggleAdmin" data-id="'+p.id+'">'+(p.role==="admin"?"Tirar admin":"Tornar admin")+"</button>")+"</td></tr>"}).join(""):'<tr><td colspan="6" class="note">Ainda ningu\xE9m criou conta.</td></tr>')}function Ss(h){let p=D("slip");if(p.hidden=c.mode!=="multi",p.hidden||document.activeElement&&document.activeElement.id==="stake")return;let m=c.legs.length,y='<div class="slip-h"><span><strong>M\xFAltipla</strong> \xB7 '+(m?m+" sele\xE7"+(m>1?"\xF5es":"\xE3o"):"toque nas casas para escolher")+"</span>",w=m?Bh(c.legs):null;w&&(y+="<span>Paga at\xE9 <b>\xD7"+yg(w.max)+"</b> \xB7 ganha em "+yg(w.p*100)+"% das jogadas</span>"),y+="</div>",m&&(y+='<div class="legs">'+c.legs.map(P=>'<button class="leg" data-act="leg" data-k="'+P+'" aria-label="Tirar '+Q(mr(qe[P]))+'">'+Q(mr(qe[P]))+' <span class="num">'+Q(qe[P].p)+'</span><span class="x" aria-hidden="true">\xD7</span></button>').join("")+"</div>"),y+='<div class="slip-a"><label class="note" for="stake">Aposta</label><input class="field num" id="stake" type="number" min="1" inputmode="numeric" value="'+(c.stake||"")+'" placeholder="Fichas"><span class="note">'+(m>1&&c.stake?'Recebe at\xE9 <b class="num gold">'+z(Math.floor(c.stake*w.max+1e-9))+"</b>":"Toque nas fichas para somar")+'</span><button class="btn sm primary" data-act="placeMulti" '+(m>1&&c.stake>0&&h.open?"":"disabled")+'>Fazer m\xFAltipla</button><button class="btn sm" data-act="clearSlip">Limpar</button></div>',p.innerHTML=y}let pn={},mt=null,rt=document.createElement("div");rt.className="reveal",rt.hidden=!0,rt.setAttribute("role","dialog"),rt.setAttribute("aria-modal","true"),rt.setAttribute("aria-label","Resultado"),rt.innerHTML='<div class="rv-box"><div class="rv-table note" id="rvTable"></div><div class="rv-stage" id="rvStage"></div><div class="rv-desc" id="rvDesc" aria-live="polite"></div><div class="rv-label" id="rvLabel"></div><div class="rv-amt num" id="rvAmt"></div><div class="rv-sub" id="rvSub"></div><button class="btn" data-act="closeReveal" id="rvClose">Continuar</button></div>',document.body.appendChild(rt);let Fn=null,br=h=>ee()==="bank"?c.bsel===h:!!(b()&&b().table===h);function Un(){Object.values(a.tables).forEach(h=>{let p=pn[h.id];if(!p){pn[h.id]={round:h.lastResult?h.lastResult.round:0,roll:h.roll?h.roll.id:null};return}h.roll&&h.roll.id!==p.roll&&(p.roll=h.roll.id,br(h.id)&&Bn(h,h.roll.res||h.roll.dice,h.roll.round,A(h).animMs));let m=h.lastResult;if(m&&m.round>p.round){if(p.round=m.round,!br(h.id)||((!mt||mt.tid!==h.id||mt.round!==m.round)&&Bn(h,m.res||m.dice,m.round,A(h).type==="roleta"?2600:1100),!mt))return;mt.result=m,Dt()}else m&&m.round<p.round?p.round=m.round:m||(p.round=0)})}function Bn(h,p,m,y){if(!p)return;let w=A(h);clearTimeout(Fn),mt={tid:h.id,round:m,result:null,shown:!1},Mh()&&(y=0),D("rvTable").textContent=h.name+" \xB7 ronda "+m;let P=D("rvStage");P.innerHTML=w.revealInit(p),D("rvDesc").textContent=y?w.type==="roleta"?"A roleta est\xE1 a rodar\u2026":"A lan\xE7ar os dados\u2026":"",D("rvLabel").textContent="",D("rvAmt").textContent="",D("rvSub").textContent="",D("rvAmt").className="rv-amt num",D("rvClose").hidden=!0,rt.hidden=!1;let x=mt;x.tumble=w.revealRun(P,p,y).then(()=>{D("rvDesc").textContent=w.desc(p),x.tumbled=!0,Dt()})}function jn(h,p,m,y){return y=y||"",Mh()||m<=0?(h.textContent=y+z(p),Promise.resolve()):new Promise(w=>{let P=performance.now(),x=U=>{let j=Math.min(1,(U-P)/m),$=1-Math.pow(1-j,3);h.textContent=y+z(Math.round(p*$)),j<1?requestAnimationFrame(x):w()};requestAnimationFrame(x)})}async function Dt(){let h=mt;if(!h||!h.tumbled||!h.result||h.shown)return;h.shown=!0;let p=h.result,m=D("rvLabel"),y=D("rvAmt"),w=D("rvSub"),P=3500;if(ee()==="bank"){let x=p.per.reduce(($,fe)=>$+fe.st,0),U=p.per.reduce(($,fe)=>$+fe.ret,0),j=x-U;m.textContent=j>=0?"A banca ganha":"A banca paga",y.className="rv-amt num "+(j>0?"pos":j<0?"neg":""),await jn(y,Math.abs(j),1200,j>0?"+":j<0?"\u2212":""),w.textContent=p.per.length?p.per.map($=>$.name+" "+($.ret-$.st>0?"+":"")+z($.ret-$.st)).join(" \xB7 "):"Ningu\xE9m apostou nesta ronda.",P=Ae(a.tables[h.tid])?2500:3500}else{let x=p.per.find(U=>U.uid===a.uid);if(!x)m.textContent="N\xE3o apostou nesta ronda",P=2500;else{let U=x.ret-x.st;U>0?(m.textContent="Ganhou",y.className="rv-amt num pos win",await jn(y,U,Math.min(2600,900+x.ret/x.st*120),"+"),y.classList.add("pop"),w.textContent="Apostou "+z(x.st)+" \xB7 recebeu "+z(x.ret),P=5e3):U===0?(m.textContent="Ficou igual",y.className="rv-amt num",y.textContent="0",w.textContent="Recebeu de volta o que apostou ("+z(x.st)+")."):(m.textContent="Perdeu",y.className="rv-amt num neg",await jn(y,-U,900,"\u2212"),w.textContent=x.ret>0?"Ganhou "+z(x.ret)+" em pr\xE9mios, mas tinha apostado "+z(x.st)+".":"Boa sorte na pr\xF3xima ronda.",P=4e3)}}D("rvClose").hidden=!1,clearTimeout(Fn),Fn=setTimeout(Ir,P)}function Ir(){clearTimeout(Fn),rt.hidden=!0,mt=null}let Nt={iscte:{name:"ISCTE",sub:"Bar e refeit\xF3rio da faculdade",emb:"ISCTE"},especial:{name:"Especial",sub:"Ofertas que v\xE3o mudando",emb:"\u2605"}},qn=h=>"#"+String(h).slice(-6).toUpperCase(),Jt=h=>new Date(h).toLocaleString("pt-PT",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}),Rs=h=>h.stock<0?"Sem limite":h.stock===0?"Esgotado":h.stock===1?"Resta 1":"Restam "+z(h.stock),Me={pendente:"Por entregar",entregue:"Entregue",cancelado:"Cancelado"};function Oi(h,p){return Object.values(a.rewards).filter(m=>m.section===h&&(p||m.active)).sort((m,y)=>m.price-y.price||(m.title||"").localeCompare(y.title||""))}function zn(){let h=M(),p=Ee(a.uid),m=w=>{let P;return h?P='<span class="note">'+(w.active?"Vis\xEDvel":"Escondido")+" \xB7 gerido pela banca</span>":w.stock===0?P='<span class="owned neg">Esgotado</span>':P='<button class="btn sm primary" data-act="redeem" data-id="'+w.id+'" data-label="Trocar \xB7 '+z(w.price)+'"'+(p>=w.price?"":" disabled")+">Trocar \xB7 "+z(w.price)+"</button>"+(p<w.price?'<span class="note">Faltam '+z(w.price-p)+"</span>":""),'<div class="sitem reward'+(w.stock===0?" locked":"")+'"><div class="remb '+w.section+'" aria-hidden="true">'+Q(Nt[w.section].emb)+'</div><div class="sinfo"><b>'+Q(w.title)+"</b>"+(w.desc?'<span class="note">'+Q(w.desc)+"</span>":"")+'<span class="stock num">'+Rs(w)+'</span></div><div class="sbuy">'+P+"</div></div>"},y="";if(["iscte","especial"].forEach(w=>{let P=Oi(w,h);y+='<h3 class="shop-sec">'+Nt[w].name+' <span class="shop-sub">'+Nt[w].sub+"</span></h3>"+(P.length?'<div class="sgrid">'+P.map(m).join("")+"</div>":'<p class="note">'+(h?"Ainda n\xE3o h\xE1 pr\xE9mios nesta sec\xE7\xE3o. Crie um no formul\xE1rio acima.":"Ainda n\xE3o h\xE1 pr\xE9mios nesta sec\xE7\xE3o. Volte mais tarde.")+"</p>")}),!h){let w=a.redemptions.filter(P=>P.uid===a.uid).slice(0,20);y+='<h3 class="shop-sec">As minhas trocas</h3>'+(w.length?'<ul class="rdlist">'+w.map(P=>'<li><span class="rcode num">'+qn(P.id)+'</span><span class="rtitle">'+Q(P.title)+'</span><span class="note num">'+z(P.price)+" fichas \xB7 "+Jt(P.ts)+'</span><span class="rstat '+P.status+'">'+Me[P.status]+"</span></li>").join("")+'</ul><p class="note">Mostre o c\xF3digo ao Mateus para receber o pr\xE9mio.</p>':'<p class="note">Ainda n\xE3o trocou fichas por pr\xE9mios.</p>')}return y}async function Gn(h){let p=a.rewards[h],m=ce();if(!p||!m||M())return;if(!Ve(a.uid)){J("Sente-se numa mesa primeiro para receber as fichas de boas-vindas.");return}if(!p.active||p.stock===0){J("Este pr\xE9mio j\xE1 n\xE3o est\xE1 dispon\xEDvel.");return}if(Ee(a.uid)<p.price){J("Faltam "+z(p.price-Ee(a.uid))+" fichas.");return}let y="x"+Date.now().toString(36)+Math.random().toString(36).slice(2,8),w=n.writeBatch(s);w.set(n.doc(s,"redemptions",y),{uid:a.uid,name:m.name,rewardId:h,title:p.title,section:p.section,price:p.price,ts:Date.now(),status:"pendente"}),w.update(n.doc(s,"users",a.uid),{balance:Ze(a.uid)-p.price,lastRedemption:y}),p.stock>0&&w.update(n.doc(s,"rewards",h),{stock:p.stock-1,lastRedemption:y});try{await w.commit(),J("Pedido feito: "+p.title+" ("+qn(y)+"). Mostre o c\xF3digo ao Mateus.")}catch(P){v(P)}}let $n=null;function Ja(){if(!D("rwPending"))return;let h=a.redemptions.filter(y=>y.status==="pendente");H(D("rwPending"),h.length?'<ul class="rdlist">'+h.map(y=>'<li><span class="rcode num">'+qn(y.id)+'</span><span class="rtitle"><b>'+Q(y.name)+"</b> \xB7 "+Q(y.title)+'</span><span class="note num">'+z(y.price)+" fichas \xB7 "+Jt(y.ts)+'</span><span class="ractions"><button class="btn sm primary" data-act="rdDeliver" data-id="'+y.id+'">Entregue</button><button class="btn sm warn" data-act="rdCancel" data-id="'+y.id+'">Cancelar e devolver</button></span></li>').join("")+"</ul>":'<p class="note">N\xE3o h\xE1 pedidos por entregar.</p>');let p=Object.values(a.rewards).sort((y,w)=>(y.section+y.price).localeCompare(w.section+w.price)||y.price-w.price);H(D("rwList"),p.length?'<ul class="rdlist">'+p.map(y=>'<li><span class="rcode">'+Q(Nt[y.section]?Nt[y.section].name:y.section)+'</span><span class="rtitle"><b>'+Q(y.title)+"</b>"+(y.active?"":' <span class="note">(escondido)</span>')+'</span><span class="note num">'+z(y.price)+" fichas \xB7 "+Rs(y)+'</span><span class="ractions"><button class="btn sm" data-act="rwEdit" data-id="'+y.id+'">Editar</button><button class="btn sm" data-act="rwToggle" data-id="'+y.id+'">'+(y.active?"Esconder":"Mostrar")+'</button><button class="btn sm warn" data-act="rwDelete" data-id="'+y.id+'">Apagar</button></span></li>').join("")+"</ul>":'<p class="note">Ainda n\xE3o criou pr\xE9mios.</p>');let m=a.redemptions.filter(y=>y.status!=="pendente").slice(0,20);H(D("rwDone"),m.length?'<ul class="rdlist">'+m.map(y=>'<li><span class="rcode num">'+qn(y.id)+'</span><span class="rtitle"><b>'+Q(y.name)+"</b> \xB7 "+Q(y.title)+'</span><span class="note num">'+z(y.price)+" fichas \xB7 "+Jt(y.ts)+'</span><span class="rstat '+y.status+'">'+Me[y.status]+"</span></li>").join("")+"</ul>":'<p class="note">Ainda n\xE3o h\xE1 trocas tratadas.</p>')}function bt(h){$n=h?h.id:null,D("rwFormTitle").textContent=h?"Editar pr\xE9mio":"Novo pr\xE9mio",D("rwSave").textContent=h?"Guardar altera\xE7\xF5es":"Criar pr\xE9mio",D("rwCancelEdit").hidden=!h,D("rwSection").value=h?h.section:"iscte",D("rwTitle").value=h?h.title:"",D("rwDesc").value=h&&h.desc||"",D("rwPrice").value=h?h.price:"",D("rwStock").value=h&&h.stock>=0?h.stock:"",D("rwActive").checked=h?!!h.active:!0}async function Ya(h){h.preventDefault();let p=D("rwTitle").value.trim(),m=Math.floor(+D("rwPrice").value);if(!p||!(m>0)){J("Escreva o t\xEDtulo e um pre\xE7o maior que 0.");return}let y=D("rwStock").value.trim(),w=y===""?-1:Math.max(0,Math.floor(+y)),P={section:D("rwSection").value,title:p,desc:D("rwDesc").value.trim(),price:m,stock:w,active:D("rwActive").checked,updated:Date.now()},x=$n||"w"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);try{$n?await n.updateDoc(n.doc(s,"rewards",x),P):await n.setDoc(n.doc(s,"rewards",x),{...P,created:Date.now()}),J($n?"Pr\xE9mio atualizado":"Pr\xE9mio criado"),bt(null)}catch(U){v(U)}}async function Xa(h){try{await n.updateDoc(n.doc(s,"redemptions",h),{status:"entregue",doneAt:Date.now()}),J("Marcado como entregue")}catch(p){v(p)}}async function Er(h){let p=a.redemptions.find(w=>w.id===h);if(!p)return;let m=n.writeBatch(s);m.update(n.doc(s,"redemptions",h),{status:"cancelado",doneAt:Date.now()}),a.users[p.uid]&&m.update(n.doc(s,"users",p.uid),{balance:i(p.price)});let y=a.rewards[p.rewardId];y&&y.stock>=0&&m.update(n.doc(s,"rewards",y.id),{stock:i(1)});try{await m.commit(),J("Cancelado: devolvidas "+z(p.price)+" fichas a "+p.name)}catch(w){v(w)}}function Ps(){D("shopBody")&&(D("shopBal").innerHTML=M()?"<b>Conta admin:</b> tem todos os itens desbloqueados.":Ve(a.uid)?'Dispon\xEDvel: <b class="num">'+z(Ee(a.uid))+"</b> fichas":"Sente-se numa mesa para receber as "+z(vt())+" fichas de boas-vindas.",H(D("shopBody"),Cs()),M()&&Ja())}function Cs(){let h=ce()||{},p=Ee(a.uid),m=h.theme&&ke(h.theme)?h.theme:"classico",y=(re,xt,Et)=>{if(ke(re.id))return Et?xt?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="'+re.id+'">Usar</button>':'<span class="owned">J\xE1 \xE9 seu</span>';let Tt=Ve(a.uid)&&p>=re.price;return'<button class="btn sm primary" data-act="buy" data-id="'+re.id+'" data-label="Comprar \xB7 '+z(re.price)+'"'+(Tt?"":" disabled")+">Comprar \xB7 "+z(re.price)+"</button>"+(Ve(a.uid)&&p<re.price?'<span class="note">Faltam '+z(re.price-p)+"</span>":"")},w=re=>'<div class="swatch" aria-hidden="true" style="background:'+re[0]+";border-color:"+re[1]+'"><span style="background:'+re[1]+'"></span><span style="background:'+re[2]+'"></span><span class="mini-chip" style="background:'+re[1]+'"></span></div>',P=re=>'<div class="sitem'+(m===re.id?" on":"")+'">'+w(re.sw)+'<div class="sinfo"><b>'+Q(re.name)+'</b><span class="note">'+Q(re.desc)+'</span></div><div class="sbuy">'+y(re,m===re.id,!0)+"</div></div>",x='<div class="sitem'+(m==="classico"?" on":"")+'">'+w(["#145236","#E8C46A","#F4ECD2"])+'<div class="sinfo"><b>Cl\xE1ssico</b><span class="note">O feltro verde original. Gr\xE1tis.</span></div><div class="sbuy">'+(m==="classico"?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="classico">Usar</button>')+"</div></div>",U=h.color,j=(re,xt)=>{let Et=!ke(re.id)&&re.prev&&!ke(re.prev);return'<div class="sitem rank'+(U===re.hex?" on":"")+(Et?" locked":"")+'"><div class="medal" aria-hidden="true" style="background:'+re.grad+'"><span>'+(xt+1)+'</span></div><div class="sinfo"><b>'+Q(re.name)+'</b><span class="note">'+(Et?"Precisa de "+Q(hn[re.prev].name)+" primeiro.":"Ranking "+(xt+1)+" de "+Ga.length+". A sua cor e ins\xEDgnia na mesa.")+'</span></div><div class="sbuy">'+(Et?'<span class="note">Bloqueado \xB7 '+z(re.price)+"</span>":y(re,U===re.hex,!0))+"</div></div>"},fe=!Ga.map(re=>re.hex).includes(U),st='<div class="sitem'+(fe?" on":"")+'"><div class="cdot" aria-hidden="true" style="background:'+(fe&&U?U:ds[0])+'"></div><div class="sinfo"><b>Cor da casa</b><span class="note">Uma das cores normais da mesa. Gr\xE1tis.</span></div><div class="sbuy">'+(fe?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="normal">Usar</button>')+"</div></div>",at=hn.f_5k,ct='<div class="sitem'+(ke("f_5k")?" on":"")+'"><div class="bigchip" aria-hidden="true" style="background:'+ja.bg+";color:"+ja.fg+'">5k</div><div class="sinfo"><b>'+Q(at.name)+'</b><span class="note">'+Q(at.desc)+'</span></div><div class="sbuy">'+y(at,!1,!1)+"</div></div>";return zn()+'<h3 class="shop-sec">Temas da mesa</h3><div class="sgrid">'+x+qh.filter(re=>re.kind==="theme").map(P).join("")+'</div><h3 class="shop-sec">Rankings de jogador</h3><p class="note">Cada ranking d\xE1-lhe uma cor e uma ins\xEDgnia na mesa. Sobe-se por ordem: Bronze, Prata, Ouro, Platina, Diamante, Rubi e Esmeralda.</p><div class="sgrid">'+st+Ga.map(j).join("")+'</div><h3 class="shop-sec">Fichas</h3><div class="sgrid">'+ct+'</div><p class="note soon">Brevemente: mais novidades no balc\xE3o d\u2019O Mateus Banca.</p>'}async function Tr(h){let p=hn[h],m=ce();if(!(!p||!m||ke(h))){if(!Ve(a.uid)){J("Sente-se numa mesa primeiro para receber as fichas de boas-vindas.");return}if(p.prev&&!ke(p.prev)){J("Precisa de "+hn[p.prev].name+" primeiro.");return}if(Ee(a.uid)<p.price){J("Faltam "+z(p.price-Ee(a.uid))+" fichas.");return}try{await n.updateDoc(n.doc(s,"users",a.uid),{owned:Te(a.uid).concat(h),balance:Ze(a.uid)-p.price}),J("Comprou "+p.name+"!"),p.kind!=="chip"&&(a.users[a.uid]={...a.users[a.uid],owned:Te(a.uid).concat(h)},It(h))}catch(y){v(y)}}}async function It(h){if(!ce())return;if(h==="classico"||hn[h]&&hn[h].kind==="theme"){if(h!=="classico"&&!ke(h))return;try{await n.updateDoc(n.doc(s,"users",a.uid),{theme:h})}catch(w){v(w)}return}let m;if(h==="normal"){let w=Object.values(a.players).filter(P=>P.id!==a.uid).map(P=>P.color);m=ds.find(P=>!w.includes(P))||ds[0]}else hn[h]&&hn[h].kind==="rank"&&ke(h)&&(m=hn[h].hex);if(!m)return;let y=n.writeBatch(s);y.update(n.doc(s,"users",a.uid),{color:m}),a.players[a.uid]&&y.update(n.doc(s,"players",a.uid),{color:m});try{await y.commit()}catch(w){v(w)}}async function xi(h){let p=ce(),m=a.tables[h];if(!p||!m)return;let y=b();if(y&&y.table===h){c.inTable=!0,ne();return}if(y&&I(a.uid).length){J("Retire as suas apostas na mesa atual antes de mudar de mesa.");return}let w=S(h).map(U=>U.color),P=w.includes(p.color)&&ds.find(U=>!w.includes(U))||p.color,x=n.writeBatch(s);a.players[a.uid]?x.update(n.doc(s,"players",a.uid),{table:h,joined:Date.now()}):x.set(n.doc(s,"players",a.uid),{name:p.name,color:P,joined:Date.now(),table:h}),Ve(a.uid)||x.update(n.doc(s,"users",a.uid),{balance:vt()});try{await x.commit(),c.inTable=!0,c.ptab="apostar",window.scrollTo(0,0)}catch(U){v(U)}}async function Vi(){if(b()){if(I(a.uid).length){J("Retire as suas apostas desta ronda antes de sair da mesa.");return}try{await n.deleteDoc(n.doc(s,"players",a.uid)),c.inTable=!1,J("Saiu da mesa. O seu saldo fica na conta.")}catch(h){v(h)}}}async function Hn(h,p){try{return await n.addDoc(l.bets,{uid:a.uid,table:h.id,round:h.round,ts:Date.now(),...p}),!0}catch(m){return v(m),!1}}async function mn(h,p){let m=A(h);if(!m.valid(p))return;if(Ee(a.uid)<c.chip){J("N\xE3o tem fichas suficientes (dispon\xEDvel: "+z(Ee(a.uid))+")");return}let y=He(h),w=Ri(a.uid,p);if(y&&w+c.chip>y){J("M\xE1ximo por aposta: "+z(y)+". Em "+m.name(p)+" j\xE1 tem "+z(w)+".");return}await Hn(h,{kind:"s",k:p,a:c.chip})}async function ks(h){let p=I(a.uid).filter(m=>m.kind==="s"&&m.k===h);if(!p.length){J("N\xE3o tem fichas nesta casa");return}try{await n.deleteDoc(n.doc(s,"bets",p[p.length-1].id))}catch(m){v(m)}}async function Li(h){let p=E();if(ee()!=="player"||!p||!p.open)return;let m=A(p);if(c.mode==="multi"){let y=c.legs.indexOf(h);if(y>=0){c.legs.splice(y,1),ne();return}if(c.legs.length>=6){J("M\xE1ximo de 6 sele\xE7\xF5es por m\xFAltipla");return}let w=c.legs.concat(h);if(w.length>1){let P=Vh(w);if(P){J(mr(qe[h])+": "+P.charAt(0).toLowerCase()+P.slice(1));return}}c.legs=w,ne();return}if(c.mode==="take"){ks(h);return}if(m.type==="roleta"){let y=/^n(\d+)$/.exec(h),w=/^t(\d+)$/.exec(h);if(c.mode==="split"){if(!y){J("No modo Cavalo toque em dois n\xFAmeros vizinhos.");return}let P=+y[1];if(c.pick===null){c.pick=P,ne();return}if(c.pick===P){c.pick=null,ne();return}let x=Math.min(c.pick,P),U=Math.max(c.pick,P),j="s"+x+"_"+U;if(!ms(j)){c.pick=P,ne(),J("Esses n\xFAmeros n\xE3o s\xE3o vizinhos. Escolha um n\xFAmero ao lado do "+P+".");return}c.pick=null,ne(),await mn(p,j);return}if(c.mode==="corner"){if(!y||+y[1]==0){J("No modo Quadrado toque num n\xFAmero de 1 a 36.");return}let P=+y[1],x=(P-1)%3,U=Math.floor((P-1)/3),j=(U===11?10:U)*3+(x===2?1:x)+1;await mn(p,"q"+j);return}if(c.mode==="line"){let P=w?+w[1]:y&&+y[1]>0?Math.ceil(+y[1]/3):0;if(!P){J("No modo Linha toque numa \u201CRua\u201D.");return}P===12&&(P=11),await mn(p,"l"+P);return}}await mn(p,h)}async function Za(){let h=E();if(!h)return;let p=Math.floor(c.stake||0),m=Vh(c.legs);if(m){J(m);return}if(p>0){if(Ee(a.uid)<p){J("S\xF3 tem "+z(Ee(a.uid))+" fichas dispon\xEDveis");return}if(He(h)&&p>He(h)){J("M\xE1ximo por aposta: "+z(He(h))+" fichas");return}await Hn(h,{kind:"m",legs:c.legs.slice(),a:p})&&(c.legs=[],c.stake=0,J("M\xFAltipla de "+z(p)+" fichas registada"),ne())}}async function Ar(){let h=E();if(!h)return;let p=(h.lastBets||[]).filter(x=>x.uid===a.uid),m=Ee(a.uid),y=0,w=He(h),P={};for(let x of p){if(x.a>m){y++;continue}if(w&&(x.kind==="m"?x.a>w:(P[x.k]||0)+x.a>w)){y++;continue}x.kind!=="m"&&(P[x.k]=(P[x.k]||0)+x.a),m-=x.a,await Hn(h,x.kind==="m"?{kind:"m",legs:x.legs,a:x.a}:{kind:"s",k:x.k,a:x.a})}y&&J(y+" aposta(s) ficaram de fora (fichas insuficientes ou acima do m\xE1ximo)")}let Ds=(h,p,m)=>({type:h,name:p,round:1,open:!0,maxBet:0,diceMode:h==="sicbo"?"virtual":null,roll:null,lastResult:null,history:[],lastBets:[],undo:null,auto:{on:!1,secs:Ti},nextAt:0,created:Date.now(),...m||{}});async function Ns(h){h.preventDefault();let p=D("ntType").value,m=D("ntName").value.trim()||Ei[p].label,y=p+"-"+Date.now().toString(36),w=D("ntAuto").checked;try{await n.setDoc(f(y),Ua(Ds(p,m,w?{auto:{on:!0,secs:Ti},nextAt:Date.now()+Ti*1e3}:{}))),a.config||await n.setDoc(l.config,{initial:1e3}),D("ntName").value="",D("ntAuto").checked=!1,J("Mesa \u201C"+m+"\u201D aberta")}catch(P){v(P)}}async function gn(h,p,m){let y=a.tables[h];if(!y||y.open)return!1;let w=A(y),P=w.info(p),x=k(h),U={},j={},$={};S(h).forEach(Y=>{$[Y.id]=Ze(Y.id),j[Y.id]=0});let fe=[],st=He(y),at={};x.forEach(Y=>{let pe=a.players[Y.uid];if(!pe||pe.table!==h||!(Y.uid in $))return;let _e=U[pe.id]||(U[pe.id]={uid:pe.id,name:pe.name,color:pe.color,st:0,ret:0,best:0,lines:[]}),it=Y.kind==="m",qi=it?"M\xFAltipla: "+(Y.legs||[]).map(yn=>qe[yn]?mr(qe[yn]):"?").join(" + "):w.name(Y.k),Ne=Math.floor(Y.a),At=null;if(Ne>0?(it?!w.multi||Vh(Y.legs):!w.valid(Y.k))?At="aposta inv\xE1lida":st&&(it?Ne>st:(at[pe.id+"|"+Y.k]||0)+Ne>st)?At="acima do m\xE1ximo":Ne>$[pe.id]&&(At="sem saldo"):At="valor inv\xE1lido",At){_e.lines.push({n:qi,a:Y.a,pay:0,v:At});return}$[pe.id]-=Ne,it||(at[pe.id+"|"+Y.k]=(at[pe.id+"|"+Y.k]||0)+Ne);let _n=it?Math.floor(Ne*Cg(Y.legs,P)+1e-9):Qb(Ne,w.mult(Y.k,P));_e.st+=Ne,_e.ret+=_n,j[pe.id]+=_n-Ne,_n>_e.best&&(_e.best=_n),_e.lines.push({n:qi,a:Ne,pay:_n}),fe.push(it?{uid:Y.uid,kind:"m",legs:Y.legs,a:Ne}:{uid:Y.uid,kind:"s",k:Y.k,a:Ne})});let ct=Object.values(U).map(({best:Y,...pe})=>pe),re=n.writeBatch(s),xt={},Et={};Object.keys(j).forEach(Y=>{if(!a.users[Y])return;let pe={},_e=U[Y];if(Ve(Y)?j[Y]!==0&&(pe.balance=i(j[Y])):pe.balance=Ze(Y)+j[Y],(j[Y]!==0||!Ve(Y))&&(Et[Y]=j[Y]),_e&&_e.st>0){let it=a.users[Y];xt[Y]={stats:{...Ba,...it.stats||{}},by:it.statsBy&&it.statsBy[y.type]||null},pe["stats.rounds"]=i(1),pe["stats.staked"]=i(_e.st),pe["stats.returned"]=i(_e.ret),_e.best>(it.stats&&it.stats.best||0)&&(pe["stats.best"]=_e.best),pe["statsBy."+y.type+".rounds"]=i(1),pe["statsBy."+y.type+".staked"]=i(_e.st),pe["statsBy."+y.type+".returned"]=i(_e.ret)}Object.keys(pe).length&&re.update(n.doc(s,"users",Y),pe)});let Tt=a.bets.filter(Y=>Y.table===h);Tt.forEach(Y=>re.delete(n.doc(s,"bets",Y.id)));let ji=w.desc(p);re.update(f(h),Ua({round:y.round+1,open:!0,nextAt:Ae(y)?Date.now()+ot(y)*1e3:0,lastResult:{round:y.round,res:p.slice(),desc:ji,per:ct,virtual:!!m},history:[{round:y.round,res:p.slice(),desc:ji,per:ct.map(Y=>({name:Y.name,net:Y.ret-Y.st}))}].concat(y.history||[]).slice(0,30),lastBets:fe,undo:{round:y.round,res:p.slice(),virtual:!!m,delta:Et,stats:xt,bets:Tt.map(Y=>{let{id:pe,..._e}=Y;return{id:pe,d:_e}}),lastResult:y.lastResult||null,lastBets:y.lastBets||[]}}));try{return await re.commit(),!0}catch(Y){return v(Y),!1}}async function Yt(h){c.busy[h]||(c.busy[h]=!0,ne(),await gn(h,c.dice.slice(),!1)&&(c.dice=[]),c.busy[h]=!1,ne())}async function Sr(h){let p=a.tables[h];if(!(!p||c.busy[h])){c.busy[h]=!0,ne();try{let m=A(p);p.open&&(await n.updateDoc(f(h),{open:!1}),await Ha(1200));let y=a.tables[h],w=m.roll(),P=Date.now().toString(36)+Math.random().toString(36).slice(2,6);pn[h]&&(pn[h].roll=P),await n.updateDoc(f(h),{open:!1,roll:{id:P,round:y.round,res:w}}),br(h)?(Bn(y,w,y.round,m.animMs),await mt.tumble):await Ha(Mh()?0:m.animMs),await gn(h,w,!0)}catch(m){v(m)}c.busy[h]=!1,ne()}}async function ec(h){let p=a.tables[h],m=p&&p.undo;if(!m)return;let y=n.writeBatch(s);Object.keys(a.users).forEach(w=>{let P={};m.delta&&w in m.delta&&m.delta[w]!==0&&(P.balance=i(-m.delta[w])),m.stats&&m.stats[w]&&(P.stats=m.stats[w].stats,m.stats[w].by?P["statsBy."+p.type]=m.stats[w].by:P["statsBy."+p.type]={rounds:0,staked:0,returned:0}),Object.keys(P).length&&y.update(n.doc(s,"users",w),P)}),a.bets.filter(w=>w.table===h).forEach(w=>y.delete(n.doc(s,"bets",w.id))),m.bets.forEach(w=>y.set(n.doc(s,"bets",w.id),w.d)),y.update(f(h),Ua({round:m.round,open:!1,roll:null,lastResult:m.lastResult,lastBets:m.lastBets,history:(p.history||[]).slice(1),undo:null}));try{await y.commit(),m.virtual||(c.dice=(m.res||m.dice||[]).slice()),J(m.virtual?"Ronda anulada. As apostas voltaram; pode jogar de novo.":"Ronda anulada. Corrija os dados e liquide de novo."),ne()}catch(w){v(w)}}async function Mi(h){let p=a.tables[h];if(!p)return;if(A(p).physical&&p.diceMode!=="virtual"){J("Ponha a mesa em dados virtuais para usar o modo autom\xE1tico.");return}let m=!Ae(p);try{await n.updateDoc(f(h),{auto:{on:m,secs:ot(p)},nextAt:m?Date.now()+ot(p)*1e3:0,open:m?!0:p.open}),J(p.name+": modo autom\xE1tico "+(m?"ligado":"desligado"))}catch(y){v(y)}}async function Fi(h){let p=a.tables[h];if(!p)return;let m=n.writeBatch(s);S(h).forEach(y=>m.delete(n.doc(s,"players",y.id))),a.bets.filter(y=>y.table===h).forEach(y=>m.delete(n.doc(s,"bets",y.id))),m.update(f(h),{round:1,open:!0,roll:null,lastResult:null,history:[],lastBets:[],undo:null,nextAt:Ae(p)?Date.now()+ot(p)*1e3:0});try{await m.commit(),c.dice=[],J("Mesa esvaziada. Os saldos ficaram nas contas.")}catch(y){v(y)}}async function Ui(h){if(S(h).length){J("Ainda h\xE1 jogadores sentados. Esvazie a mesa primeiro.");return}let p=n.writeBatch(s);a.bets.filter(m=>m.table===h).forEach(m=>p.delete(n.doc(s,"bets",m.id))),p.delete(f(h));try{await p.commit(),c.bsel=null,J("Mesa fechada")}catch(m){v(m)}}async function Os(){if(a.bets.length){J("Liquide ou limpe as apostas em jogo antes de repor os saldos.");return}let h=n.writeBatch(s),p=vt();Object.keys(a.users).forEach(m=>h.update(n.doc(s,"users",m),{balance:p}));try{await h.commit(),J("Todas as contas ficaram com "+z(p)+" fichas.")}catch(m){v(m)}}let Rr=2e4;function Bi(){let h=Object.values(a.tables).filter(Ae);if(!h.length)return"Nenhuma mesa em modo autom\xE1tico.";let p=a.dealer,m=Date.now();return p&&p.device===Uh&&p.until>m?"A conduzir "+h.length+" mesa(s) a partir deste aparelho.":p&&p.until>m?"Conduzido noutro aparelho ("+(p.name||"admin")+").":"A assumir a condu\xE7\xE3o\u2026"}let Pr=!1;async function tc(){let h=a.dealer,p=Date.now(),m=h&&h.device===Uh&&h.until>p;if(Pr)return m;if(m&&h.until-p>Rr/2)return!0;if(!m&&h&&h.until>p)return!1;Pr=!0;try{await n.setDoc(l.dealer,{device:Uh,uid:a.uid,name:(ce()||{}).name||"admin",until:p+Rr})}catch(y){console.error(y)}return Pr=!1,!1}async function nc(){if(!M()||ee()!=="bank"||!a.tablesLoaded)return;let h=Object.values(a.tables).filter(Ae);if(!h.length||!await tc())return;let p=Date.now();for(let m of h)if(!c.busy[m.id]){if(!m.open){if(p>(m.nextAt||0)+45e3)try{await n.updateDoc(f(m.id),{open:!0,nextAt:p+ot(m)*1e3})}catch(y){console.error(y)}continue}if(!m.nextAt){try{await n.updateDoc(f(m.id),{nextAt:p+ot(m)*1e3})}catch(y){console.error(y)}continue}if(!(p<m.nextAt)){if(!S(m.id).length){try{await n.updateDoc(f(m.id),{nextAt:p+ot(m)*1e3})}catch(y){console.error(y)}continue}Sr(m.id)}}}setInterval(()=>{nc()},1e3);let Cr=!1,xs=!1;async function rc(){if(Cr||!M()||!a.usersLoaded||!a.tablesLoaded)return;let h=Object.values(a.players).filter(w=>typeof w.chips=="number"&&a.users[w.id]&&!Ve(w.id));if(!Object.keys(a.tables).length&&!xs){xs=!0;try{let w=await n.getDoc(l.legacy);a.legacy=w.exists()?w.data():null}catch{a.legacy=null}}let p=!Object.keys(a.tables).length&&a.legacy,m=Object.values(a.players).filter(w=>!w.table);if(!h.length&&!p&&!(m.length&&(p||a.tables["sicbo-1"])))return;Cr=!0;let y=n.writeBatch(s);if(h.forEach(w=>y.update(n.doc(s,"users",w.id),{balance:w.chips})),p){let w=a.legacy;y.set(f("sicbo-1"),Ua(Ds("sicbo","Sic Bo",{round:w.round||1,maxBet:w.maxBet||0,diceMode:w.diceMode||"fisico",history:(w.history||[]).map(P=>({round:P.round,res:P.dice||[],desc:P.sum?"Soma "+P.sum:"",per:P.per||[]})),created:w.created||Date.now()}))),a.config||y.set(l.config,{initial:typeof w.initial=="number"?w.initial:1e3}),a.bets.forEach(P=>y.delete(n.doc(s,"bets",P.id)))}(p||a.tables["sicbo-1"])&&m.forEach(w=>y.update(n.doc(s,"players",w.id),{table:"sicbo-1"}));try{await y.commit(),p&&J("A mesa antiga passou para o Sal\xE3o como \u201CSic Bo\u201D.")}catch(w){v(w)}Cr=!1}let Ke=null;function et(h,p){return Ke===h?!1:(Ke&&(Ke.textContent=Ke.dataset.label),Ke=h,h.dataset.label=h.dataset.label||h.textContent,h.textContent=p||"Confirmar",setTimeout(()=>{Ke===h&&(h.textContent=h.dataset.label,Ke=null)},4e3),!0)}function Ot(h){Ke=null,h.textContent=h.dataset.label,["shopBody","rwPending","rwList","plist","ulist"].forEach(p=>{D(p)&&(D(p)._last=null)})}document.addEventListener("click",async h=>{let p=h.target.closest("[data-act]");if(!p)return;let m=p.dataset.act,y=c.bsel;switch(m){case"role":a.role=p.dataset.v,wg.set("sicbo5-role",a.role),c.bsel=null,Qt="",ne(),window.scrollTo(0,0);break;case"authTab":c.authTab=p.dataset.v,D("authNote").textContent="",ne();break;case"logout":try{await n.signOut(r)}catch(w){v(w)}break;case"ltab":c.lobbyTab=p.dataset.v,ne();break;case"ptab":c.ptab=p.dataset.v,c.mode="bet",c.legs=[],c.pick=null,ne(),window.scrollTo(0,0);break;case"btab":c.btab=p.dataset.v,ne();break;case"dtab":c.dtab=p.dataset.v,ne();break;case"toLobby":c.inTable=!1,ne(),window.scrollTo(0,0);break;case"enterTable":c.inTable=!0,ne(),window.scrollTo(0,0);break;case"sit":xi(p.dataset.id);break;case"leave":Vi();break;case"zone":Li(p.dataset.k);break;case"unbet":ks(p.dataset.k);break;case"chip":c.chip=+p.dataset.v,c.mode==="multi"&&(c.stake=(c.stake||0)+c.chip),ne();break;case"mode":c.mode=c.mode===p.dataset.v?"bet":p.dataset.v,c.pick=null,ne();break;case"leg":c.legs=c.legs.filter(w=>w!==p.dataset.k),ne();break;case"clearSlip":c.legs=[],c.stake=0,ne();break;case"placeMulti":Za();break;case"repeat":Ar();break;case"cancelMulti":try{await n.deleteDoc(n.doc(s,"bets",p.dataset.id)),J("M\xFAltipla cancelada")}catch(w){v(w)}break;case"closeReveal":Ir();break;case"openTable":c.bsel=p.dataset.id,c.dtab="mesa",c.dice=[],ne(),window.scrollTo(0,0);break;case"bankBack":c.bsel=null,ne(),window.scrollTo(0,0);break;case"toggleAuto":Mi(p.dataset.id||y);break;case"toggleOpen":try{await n.updateDoc(f(y),{open:!a.tables[y].open})}catch(w){v(w)}break;case"diceMode":{let w=a.tables[y];if(w&&w.diceMode!==p.dataset.v)try{await n.updateDoc(f(y),{diceMode:p.dataset.v,...p.dataset.v==="fisico"?{auto:{on:!1,secs:ot(w)}}:{}})}catch(P){v(P)}break}case"roll":Sr(y);break;case"face":c.dice.length<5&&(c.dice.push(+p.dataset.v),ne());break;case"slot":{let w=+p.dataset.i;c.dice[w]&&(c.dice.splice(w,1),ne());break}case"clearDice":c.dice=[],ne();break;case"settle":Yt(y);break;case"undo":ec(y);break;case"saveName":{let w=D("tName").value.trim();if(!w)return;try{await n.updateDoc(f(y),{name:w.slice(0,24)}),J("Nome guardado"),Qt="",ne()}catch(P){v(P)}break}case"saveMax":{let w=Math.max(0,Math.floor(+D("maxBet").value||0));try{await n.updateDoc(f(y),{maxBet:w}),J(w?"M\xE1ximo por aposta: "+z(w)+" fichas":"Sem m\xE1ximo por aposta")}catch(P){v(P)}break}case"saveSecs":{let w=a.tables[y],P=Math.max(10,Math.min(600,Math.floor(+D("autoSecs").value||Ti)));try{await n.updateDoc(f(y),{auto:{on:Ae(w),secs:P}}),J("Tempo de apostas: "+P+" segundos")}catch(x){v(x)}break}case"clearTable":case"deleteTable":if(et(p))return;Ot(p),m==="clearTable"?Fi(y):Ui(y);break;case"copy":{let w=D("shareUrl");try{await navigator.clipboard.writeText(w.value),J("Link copiado")}catch{w.select(),J("Selecionei o link: copie-o")}break}case"saveInit":{let w=Math.max(0,Math.floor(+D("initChips").value||0));try{await n.setDoc(l.config,{initial:w},{merge:!0}),J("Quem se sentar pela primeira vez recebe "+z(w)+" fichas")}catch(P){v(P)}break}case"give":case"takeChips":{let w=a.users[p.dataset.id];if(!w)return;let P=D("amt-"+w.id),x=Math.floor(+P.value);if(!(x>0)){J("Escreva a quantidade de fichas"),P.focus();return}if(m==="takeChips"&&x>Ze(w.id)){J(w.name+" s\xF3 tem "+z(Ze(w.id))+" fichas");return}try{await n.updateDoc(n.doc(s,"users",w.id),{balance:Ve(w.id)?i(m==="give"?x:-x):Ze(w.id)+(m==="give"?x:-x)}),P.value="",P.blur(),J((m==="give"?"Dadas ":"Tiradas ")+z(x)+" fichas a "+w.name)}catch(U){v(U)}break}case"toggleAdmin":{let w=a.users[p.dataset.id];if(!w||w.id===a.uid||et(p))return;Ot(p);let P=w.role!=="admin";try{await n.updateDoc(n.doc(s,"users",w.id),{role:P?"admin":"player"}),J(w.name+(P?" passou a ter acesso \xE0 banca":" deixou de ter acesso \xE0 banca"))}catch(x){v(x)}break}case"remove":case"resetBal":if(et(p))return;if(Ot(p),m==="resetBal")Os();else{let w=p.dataset.id,P=n.writeBatch(s);P.delete(n.doc(s,"players",w)),a.bets.filter(x=>x.uid===w).forEach(x=>P.delete(n.doc(s,"bets",x.id)));try{await P.commit(),J("Saiu da mesa. O saldo fica na conta.")}catch(x){v(x)}}break;case"buy":if(et(p,"Confirmar compra"))return;Ot(p),Tr(p.dataset.id);break;case"equip":It(p.dataset.id);break;case"redeem":case"rdCancel":case"rwDelete":if(et(p,m==="redeem"?"Confirmar troca":"Confirmar"))return;if(Ot(p),m==="redeem")Gn(p.dataset.id);else if(m==="rdCancel")Er(p.dataset.id);else try{await n.deleteDoc(n.doc(s,"rewards",p.dataset.id)),J("Pr\xE9mio apagado"),$n===p.dataset.id&&bt(null)}catch(w){v(w)}break;case"rdDeliver":Xa(p.dataset.id);break;case"rwEdit":bt(a.rewards[p.dataset.id]),D("rwForm").scrollIntoView({behavior:"smooth",block:"start"});break;case"rwCancelEdit":bt(null);break;case"rwToggle":{let w=a.rewards[p.dataset.id];if(w)try{await n.updateDoc(n.doc(s,"rewards",w.id),{active:!w.active})}catch(P){v(P)}break}}}),document.addEventListener("keydown",h=>{h.key==="Escape"&&!rt.hidden&&Ir()}),document.addEventListener("input",h=>{h.target.id==="stake"&&(c.stake=Math.max(0,Math.floor(+h.target.value||0)))}),document.addEventListener("change",h=>{h.target.id==="stake"&&(h.target.blur(),ne())}),ne()}Og(Oh);
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
