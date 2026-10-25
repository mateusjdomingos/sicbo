var gg=Object.defineProperty;var _g=(n,e)=>{for(var t in e)gg(n,t,{get:e[t],enumerable:!0})};var jl={};_g(jl,{addDoc:()=>Vm,collection:()=>Em,createUserWithEmailAndPassword:()=>gc,deleteDoc:()=>xm,doc:()=>Ll,getDoc:()=>Dm,init:()=>SI,onAuthStateChanged:()=>yc,onSnapshot:()=>Lm,setDoc:()=>Nm,signInAnonymously:()=>mc,signInWithEmailAndPassword:()=>_c,signOut:()=>vc,updateDoc:()=>Om,writeBatch:()=>Fm});var Nh=()=>{};var Vh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},yg=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,_=(s&3)<<4|u>>4,I=(u&15)<<2|d>>6,k=d&63;l||(k=64,a||(I=64)),r.push(t[p],t[_],t[I],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||_==null)throw new wa;let I=s<<2|u>>4;if(r.push(I),d!==64){let k=u<<4&240|d>>2;if(r.push(k),_!==64){let x=d<<6&192|_;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},wa=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},vg=function(n){let e=Vh(n);return Lh.encodeByteArray(e,!0)},ti=function(n){return vg(n).replace(/\./g,"")},hs=function(n){try{return Lh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var wg=()=>Mh().__FIREBASE_DEFAULTS__,Ig=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Eg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&hs(n[1]);return e&&JSON.parse(e)},ds=()=>{try{return Nh()||wg()||Ig()||Eg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ea=n=>{var e,t;return(t=(e=ds())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Fh=n=>{let e=Ea(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ta=()=>{var n;return(n=ds())===null||n===void 0?void 0:n.config},ba=n=>{var e;return(e=ds())===null||e===void 0?void 0:e[`_${n}`]};var ls=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Zt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fs(n){return(await fetch(n,{credentials:"include"})).ok}function Uh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ti(JSON.stringify(t)),ti(JSON.stringify(a)),""].join(".")}var ei={};function Tg(){let n={prod:[],emulator:[]};for(let e of Object.keys(ei))ei[e]?n.emulator.push(e):n.prod.push(e);return n}function bg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var Oh=!1;function ps(n,e){if(typeof window>"u"||typeof document>"u"||!Zt(window.location.host)||ei[n]===e||ei[n]||Oh)return;ei[n]=e;function t(I){return`__firebase__banner__${I}`}let r="__firebase__banner",s=Tg().prod.length>0;function a(){let I=document.getElementById(r);I&&I.remove()}function u(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function l(I,k){I.setAttribute("width","24"),I.setAttribute("id",k),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){let I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Oh=!0,a()},I}function p(I,k){I.setAttribute("id",k),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function _(){let I=bg(r),k=t("text"),x=document.getElementById(k)||document.createElement("span"),B=t("learnmore"),V=document.getElementById(B)||document.createElement("a"),Z=t("preprendIcon"),K=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){let J=I.element;u(J),p(V,B);let ce=d();l(K,Z),J.append(K,x,V,ce),document.body.appendChild(J)}s?(x.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Ag(){var n;let e=(n=ds())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gh(){let n=Ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $h(){return!Ag()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Aa(){try{return typeof indexedDB=="object"}catch{return!1}}function Hh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Sg="FirebaseError",Ze=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Sg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xt.prototype.create)}},xt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Rg(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Ze(i,u,r)}};function Rg(n,e){return n.replace(Pg,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Pg=/\{\$([^}]+)}/g;function Wh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gt(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(xh(s)&&xh(a)){if(!gt(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function xh(n){return n!==null&&typeof n=="object"}function sr(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function or(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ar(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kh(n,e){let t=new Ia(n,e);return t.subscribe.bind(t)}var Ia=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=va),i.error===void 0&&(i.error=va),i.complete===void 0&&(i.complete=va);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Cg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function va(){}var LI=4*60*60*1e3;function ge(n){return n&&n._delegate?n._delegate:n}var st=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Cn="[DEFAULT]";var Sa=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new ls;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function kg(n){return n===Cn?void 0:n}function Dg(n){return n.instantiationMode==="EAGER"}var ms=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Sa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Ng=[],ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));var Og={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},xg=ne.INFO,Vg={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Lg=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Vg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},en=class{constructor(e){this.name=e,this._logLevel=xg,this._logHandler=Lg,this._userLogHandler=null,Ng.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}};var Mg=(n,e)=>e.some(t=>n instanceof t),Qh,Jh;function Fg(){return Qh||(Qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ug(){return Jh||(Jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Yh=new WeakMap,Pa=new WeakMap,Xh=new WeakMap,Ra=new WeakMap,ka=new WeakMap;function Bg(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(_t(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Yh.set(t,n)}).catch(()=>{}),ka.set(e,n),e}function jg(n){if(Pa.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Pa.set(n,e)}var Ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Xh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zh(n){Ca=n(Ca)}function qg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(gs(this),e,...t);return Xh.set(r,e.sort?e.sort():[e]),_t(r)}:Ug().includes(n)?function(...e){return n.apply(gs(this),e),_t(Yh.get(this))}:function(...e){return _t(n.apply(gs(this),e))}}function zg(n){return typeof n=="function"?qg(n):(n instanceof IDBTransaction&&jg(n),Mg(n,Fg())?new Proxy(n,Ca):n)}function _t(n){if(n instanceof IDBRequest)return Bg(n);if(Ra.has(n))return Ra.get(n);let e=zg(n);return e!==n&&(Ra.set(n,e),ka.set(e,n)),e}var gs=n=>ka.get(n);function td(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),u=_t(a);return r&&a.addEventListener("upgradeneeded",l=>{r(_t(a.result),l.oldVersion,l.newVersion,_t(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var Gg=["get","getKey","getAll","getAllKeys","count"],$g=["put","add","delete","clear"],Da=new Map;function ed(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=$g.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gg.includes(t)))return;let s=async function(a,...u){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return Da.set(e,s),s}Zh(n=>({...n,get:(e,t,r)=>ed(e,t)||n.get(e,t,r),has:(e,t)=>!!ed(e,t)||n.has(e,t)}));var Oa=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hg(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Hg(n){let e=n.getComponent();return e?.type==="VERSION"}var xa="@firebase/app",nd="0.13.2";var Vt=new en("@firebase/app"),Wg="@firebase/app-compat",Kg="@firebase/analytics-compat",Qg="@firebase/analytics",Jg="@firebase/app-check-compat",Yg="@firebase/app-check",Xg="@firebase/auth",Zg="@firebase/auth-compat",e_="@firebase/database",t_="@firebase/data-connect",n_="@firebase/database-compat",r_="@firebase/functions",i_="@firebase/functions-compat",s_="@firebase/installations",o_="@firebase/installations-compat",a_="@firebase/messaging",c_="@firebase/messaging-compat",u_="@firebase/performance",l_="@firebase/performance-compat",h_="@firebase/remote-config",d_="@firebase/remote-config-compat",f_="@firebase/storage",p_="@firebase/storage-compat",m_="@firebase/firestore",g_="@firebase/ai",__="@firebase/firestore-compat",y_="firebase",v_="11.10.0";var Va="[DEFAULT]",w_={[xa]:"fire-core",[Wg]:"fire-core-compat",[Qg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Yg]:"fire-app-check",[Jg]:"fire-app-check-compat",[Xg]:"fire-auth",[Zg]:"fire-auth-compat",[e_]:"fire-rtdb",[t_]:"fire-data-connect",[n_]:"fire-rtdb-compat",[r_]:"fire-fn",[i_]:"fire-fn-compat",[s_]:"fire-iid",[o_]:"fire-iid-compat",[a_]:"fire-fcm",[c_]:"fire-fcm-compat",[u_]:"fire-perf",[l_]:"fire-perf-compat",[h_]:"fire-rc",[d_]:"fire-rc-compat",[f_]:"fire-gcs",[p_]:"fire-gcs-compat",[m_]:"fire-fst",[__]:"fire-fst-compat",[g_]:"fire-vertex","fire-js":"fire-js",[y_]:"fire-js-all"};var _s=new Map,I_=new Map,La=new Map;function rd(n,e){try{n.container.addComponent(e)}catch(t){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nn(n){let e=n.name;if(La.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;La.set(e,n);for(let t of _s.values())rd(t,n);for(let t of I_.values())rd(t,n);return!0}function ri(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}var E_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new xt("app","Firebase",E_);var Ma=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}};var rn=v_;function Ba(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:Va,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw tn.create("bad-app-name",{appName:String(i)});if(t||(t=Ta()),!t)throw tn.create("no-options");let s=_s.get(i);if(s){if(gt(t,s.options)&&gt(r,s.config))return s;throw tn.create("duplicate-app",{appName:i})}let a=new ms(i);for(let l of La.values())a.addComponent(l);let u=new Ma(t,r,a);return _s.set(i,u),u}function ys(n=Va){let e=_s.get(n);if(!e&&n===Va&&Ta())return Ba();if(!e)throw tn.create("no-app",{appName:n});return e}function lt(n,e,t){var r;let i=(r=w_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(u.join(" "));return}nn(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var T_="firebase-heartbeat-database",b_=1,ni="firebase-heartbeat-store",Na=null;function ad(){return Na||(Na=td(T_,b_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw tn.create("idb-open",{originalErrorMessage:n.message})})),Na}async function A_(n){try{let t=(await ad()).transaction(ni),r=await t.objectStore(ni).get(cd(n));return await t.done,r}catch(e){if(e instanceof Ze)Vt.warn(e.message);else{let t=tn.create("idb-get",{originalErrorMessage:e?.message});Vt.warn(t.message)}}}async function id(n,e){try{let r=(await ad()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,cd(n)),await r.done}catch(t){if(t instanceof Ze)Vt.warn(t.message);else{let r=tn.create("idb-set",{originalErrorMessage:t?.message});Vt.warn(r.message)}}}function cd(n){return`${n.name}!${n.options.appId}`}var S_=1024,R_=30,Fa=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Ua(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>R_){let a=C_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=sd(),{heartbeatsToSend:r,unsentEntries:i}=P_(this._heartbeatsCache.heartbeats),s=ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Vt.warn(t),""}}};function sd(){return new Date().toISOString().substring(0,10)}function P_(n,e=S_){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),od(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),od(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Ua=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aa()?Hh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await A_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return id(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return id(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function od(n){return ti(JSON.stringify({version:2,heartbeats:n})).length}function C_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function k_(n){nn(new st("platform-logger",e=>new Oa(e),"PRIVATE")),nn(new st("heartbeat",e=>new Fa(e),"PRIVATE")),lt(xa,nd,n),lt(xa,nd,"esm2017"),lt("fire-js","")}k_("");var D_="firebase",N_="11.10.0";lt(D_,N_,"app");function vs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Pd=Rd,Cd=new xt("auth","Firebase",Rd());var Ss=new en("@firebase/auth");function O_(n,...e){Ss.logLevel<=ne.WARN&&Ss.warn(`Auth (${rn}): ${n}`,...e)}function Is(n,...e){Ss.logLevel<=ne.ERROR&&Ss.error(`Auth (${rn}): ${n}`,...e)}function ht(n,...e){throw hc(n,...e)}function vt(n,...e){return hc(n,...e)}function kd(n,e,t){let r=Object.assign(Object.assign({},Pd()),{[e]:t});return new xt("auth","Firebase",r).create(e,{appName:n.name})}function wt(n){return kd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cd.create(n,...e)}function G(n,e,...t){if(!n)throw hc(e,...t)}function yt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Is(e),new Error(e)}function Mt(n,e){n||yt(e)}function Ha(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function x_(){return ud()==="http:"||ud()==="https:"}function ud(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function V_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x_()||qh()||"connection"in navigator)?navigator.onLine:!0}function L_(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var kn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Bh()||zh()}get(){return V_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function dc(n,e){Mt(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Rs=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var M_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var F_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U_=new kn(3e4,6e4);function Ce(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ze(n,e,t,r,i={}){return Dd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let u=sr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return jh()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Zt(n.emulatorConfig.host)&&(d.credentials="include"),Rs.fetch()(await Nd(n,n.config.apiHost,t,u),d)})}async function Dd(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},M_),e);try{let i=new Wa(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw si(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw si(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw si(n,"user-disabled",a);let p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw kd(n,p,d);ht(n,p)}}catch(i){if(i instanceof Ze)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function cn(n,e,t,r,i={}){let s=await ze(n,e,t,r,i);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Nd(n,e,t,r){let i=`${e}${t}?${r}`,s=n,a=s.config.emulator?dc(n.config,i):`${n.config.apiScheme}://${i}`;return F_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function B_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Wa=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),U_.get())})}};function si(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=vt(n,e,r);return i.customData._tokenResponse=t,i}function ld(n){return n!==void 0&&n.enterprise!==void 0}var Ps=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return B_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Od(n,e){return ze(n,"GET","/v2/recaptchaConfig",Ce(n,e))}async function j_(n,e){return ze(n,"POST","/v1/accounts:delete",e)}async function Cs(n,e){return ze(n,"POST","/v1/accounts:lookup",e)}function oi(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xd(n,e=!1){let t=ge(n),r=await t.getIdToken(e),i=fc(r);G(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:oi(ja(i.auth_time)),issuedAtTime:oi(ja(i.iat)),expirationTime:oi(ja(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ja(n){return Number(n)*1e3}function fc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Is("JWT malformed, contained fewer than 3 sections"),null;try{let i=hs(t);return i?JSON.parse(i):(Is("Failed to decode base64 JWT payload"),null)}catch(i){return Is("Caught error parsing JWT payload as JSON",i?.toString()),null}}function hd(n){let e=fc(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ui(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ze&&q_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function q_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Ka=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var li=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ks(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ui(n,Cs(t,{idToken:r}));G(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ld(s.providerUserInfo):[],u=z_(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,p=l?d:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new li(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,_)}async function Vd(n){let e=ge(n);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ld(n){return n.map(e=>{var{providerId:t}=e,r=vs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function G_(n,e){let t=await Dd(n,{},async()=>{let r=sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Nd(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Zt(n.emulatorConfig.host)&&(l.credentials="include"),Rs.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $_(n,e){return ze(n,"POST","/v2/accounts:revokeToken",Ce(n,e))}var ai=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");let t=hd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await G_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return yt("not implemented")}};function sn(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var on=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=vs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ka(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new li(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await ui(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xd(this,e)}reload(){return Vd(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ks(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(wt(this.auth));let e=await this.getIdToken();return await ui(this,j_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,p;let _=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,k=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=t.photoURL)!==null&&a!==void 0?a:void 0,B=(u=t.tenantId)!==null&&u!==void 0?u:void 0,V=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,Z=(d=t.createdAt)!==null&&d!==void 0?d:void 0,K=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:J,emailVerified:ce,isAnonymous:Ie,providerData:re,stsTokenManager:b}=t;G(J&&b,e,"internal-error");let m=ai.fromJSON(this.name,b);G(typeof J=="string",e,"internal-error"),sn(_,e.name),sn(I,e.name),G(typeof ce=="boolean",e,"internal-error"),G(typeof Ie=="boolean",e,"internal-error"),sn(k,e.name),sn(x,e.name),sn(B,e.name),sn(V,e.name),sn(Z,e.name),sn(K,e.name);let v=new n({uid:J,auth:e,email:I,emailVerified:ce,displayName:_,isAnonymous:Ie,photoURL:x,phoneNumber:k,tenantId:B,stsTokenManager:m,createdAt:Z,lastLoginAt:K});return re&&Array.isArray(re)&&(v.providerData=re.map(T=>Object.assign({},T))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,t,r=!1){let i=new ai;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ks(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];G(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Ld(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new ai;u.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new li(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var dd=new Map;function Lt(n){Mt(n instanceof Function,"Expected a class definition");let e=dd.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dd.set(n,e),e)}var Ds=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ds.type="NONE";var Qa=Ds;function Es(n,e,t){return`firebase:${n}:${e}:${t}`}var Ns=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Es(this.userKey,i.apiKey,s),this.fullPersistenceKey=Es("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Cs(this.auth,{idToken:e}).catch(()=>{});return t?on._fromGetAccountInfoResponse(this.auth,t,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Lt(Qa),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||Lt(Qa),a=Es(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let p=await d._get(a);if(p){let _;if(typeof p=="string"){let I=await Cs(e,{idToken:p}).catch(()=>{});if(!I)break;_=await on._fromGetAccountInfoResponse(e,I,p)}else _=on._fromJSON(e,p);d!==s&&(u=_),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function fd(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(zd(e))return"Webos";if(Fd(e))return"Safari";if((e.includes("chrome/")||Ud(e))&&!e.includes("edge/"))return"Chrome";if(jd(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Md(n=Ne()){return/firefox\//i.test(n)}function Fd(n=Ne()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ud(n=Ne()){return/crios\//i.test(n)}function Bd(n=Ne()){return/iemobile/i.test(n)}function jd(n=Ne()){return/android/i.test(n)}function qd(n=Ne()){return/blackberry/i.test(n)}function zd(n=Ne()){return/webos/i.test(n)}function pc(n=Ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function H_(n=Ne()){var e;return pc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W_(){return Gh()&&document.documentMode===10}function Gd(n=Ne()){return pc(n)||jd(n)||zd(n)||qd(n)||/windows phone/i.test(n)||Bd(n)}function $d(n,e=[]){let t;switch(n){case"Browser":t=fd(Ne());break;case"Worker":t=`${fd(Ne())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rn}/${r}`}var Ja=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,u)=>{try{let l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function K_(n,e={}){return ze(n,"GET","/v2/passwordPolicy",Ce(n,e))}var Q_=6,Ya=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Q_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Xa=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Os(this),this.idTokenSubscription=new Os(this),this.beforeStateQueue=new Ja(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Cs(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(We(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(wt(this));let t=e?ge(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await K_(this),t=new Ya(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Lt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&O_(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Et(n){return ge(n)}var Os=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kh(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Ys={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function J_(n){Ys=n}function Hd(n){return Ys.loadJS(n)}function Y_(){return Ys.recaptchaEnterpriseScript}function X_(){return Ys.gapiScript}function Wd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Za=class{constructor(){this.enterprise=new ec}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},ec=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var Z_="recaptcha-enterprise",ci="NO_RECAPTCHA",xs=class{constructor(e){this.type=Z_,this.auth=Et(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{Od(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new Ps(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){let l=window.grecaptcha;ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ci)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Za().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&ld(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Y_();l.length!==0&&(l+=u),Hd(l).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function ii(n,e,t,r=!1,i=!1){let s=new xs(n),a;if(i)a=ci;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){let l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){let l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function cr(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let u=await ii(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await ii(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(u)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let u=await ii(n,e,t);return r(n,u).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let p=await ii(n,e,t,!1,!0);return r(n,p)}return Promise.reject(l)})}else{let u=await ii(n,e,t,!1,!0);return r(n,u)}else return Promise.reject(i+" provider is not supported.")}async function ey(n){let e=Et(n),t=await Od(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ps(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new xs(e).verify()}function Kd(n,e){let t=ri(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(gt(s,e??{}))return i;ht(i,"already-initialized")}return t.initialize({options:e})}function ty(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Lt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Qd(n,e,t){let r=Et(n);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=Jd(e),{host:a,port:u}=ny(e),l=u===null?"":`:${u}`,d={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(gt(d,r.config.emulator)&&gt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Zt(a)?(fs(`${s}//${a}${l}`),ps("Auth",!0)):i||ry()}function Jd(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ny(n){let e=Jd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:pd(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:pd(a)}}}function pd(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function ry(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Dn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}};async function iy(n,e){return ze(n,"POST","/v1/accounts:signUp",e)}async function sy(n,e){return cn(n,"POST","/v1/accounts:signInWithPassword",Ce(n,e))}async function oy(n,e){return cn(n,"POST","/v1/accounts:signInWithEmailLink",Ce(n,e))}async function ay(n,e){return cn(n,"POST","/v1/accounts:signInWithEmailLink",Ce(n,e))}var hi=class n extends Dn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cr(e,t,"signInWithPassword",sy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return oy(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cr(e,r,"signUpPassword",iy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ay(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function ur(n,e){return cn(n,"POST","/v1/accounts:signInWithIdp",Ce(n,e))}var cy="http://localhost",Nn=class n extends Dn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=vs(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return ur(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ur(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ur(e,t)}buildRequest(){let e={requestUri:cy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=sr(t)}return e}};async function md(n,e){return ze(n,"POST","/v1/accounts:sendVerificationCode",Ce(n,e))}async function uy(n,e){return cn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ce(n,e))}async function ly(n,e){let t=await cn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ce(n,e));if(t.temporaryProof)throw si(n,"account-exists-with-different-credential",t);return t}var hy={USER_NOT_FOUND:"user-not-found"};async function dy(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return cn(n,"POST","/v1/accounts:signInWithPhoneNumber",Ce(n,t),hy)}var di=class n extends Dn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return uy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ly(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return dy(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function fy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function py(n){let e=or(ar(n)).link,t=e?or(ar(e)).deep_link_id:null,r=or(ar(n)).deep_link_id;return(r?or(ar(r)).link:null)||r||t||e||n}var Vs=class n{constructor(e){var t,r,i,s,a,u;let l=or(ar(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,_=fy((i=l.mode)!==null&&i!==void 0?i:null);G(d&&p&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=py(e);try{return new n(t)}catch{return null}}};var On=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return hi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Vs.parseLink(t);return G(r,"argument-error"),hi._fromEmailAndCode(e,r.code,r.tenantId)}};On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Ls=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var xn=class extends Ls{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var fi=class n extends xn{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";var pi=class n extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";var mi=class n extends xn{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";var gi=class n extends xn{constructor(){super("twitter.com")}static credential(e,t){return Nn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";async function Yd(n,e){return cn(n,"POST","/v1/accounts:signUp",Ce(n,e))}var an=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await on._fromIdTokenResponse(e,r,i),a=gd(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=gd(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function gd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function mc(n){var e;if(We(n.app))return Promise.reject(wt(n));let t=Et(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new an({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await Yd(t,{returnSecureToken:!0}),i=await an._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var tc=class n extends Ze{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Xd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(n,s,e,r):s})}async function my(n,e,t=!1){let r=await ui(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return an._forOperation(n,"link",r)}async function gy(n,e,t=!1){let{auth:r}=n;if(We(r.app))return Promise.reject(wt(r));let i="reauthenticate";try{let s=await ui(n,Xd(r,i,e,n),t);G(s.idToken,r,"internal-error");let a=fc(s.idToken);G(a,r,"internal-error");let{sub:u}=a;return G(n.uid===u,r,"user-mismatch"),an._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}async function Zd(n,e,t=!1){if(We(n.app))return Promise.reject(wt(n));let r="signIn",i=await Xd(n,r,e),s=await an._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function ef(n,e){return Zd(Et(n),e)}async function tf(n){let e=Et(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gc(n,e,t){if(We(n.app))return Promise.reject(wt(n));let r=Et(n),a=await cr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yd,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tf(n),l}),u=await an._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function _c(n,e,t){return We(n.app)?Promise.reject(wt(n)):ef(ge(n),On.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tf(n),r})}function nf(n,e,t,r){return ge(n).onIdTokenChanged(e,t,r)}function rf(n,e,t){return ge(n).beforeAuthStateChanged(e,t)}function yc(n,e,t,r){return ge(n).onAuthStateChanged(e,t,r)}function vc(n){return ge(n).signOut()}function _d(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:start",Ce(n,e))}function _y(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(n,e))}function yy(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:start",Ce(n,e))}function vy(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(n,e))}var Ms="__sak";var Fs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var wy=1e3,Iy=10,Us=class extends Fs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);W_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Iy):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Us.type="LOCAL";var sf=Us;var Ey=1e3;function qa(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function za(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var nc=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=za(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return qa(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=za(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=za(e);if(window.cookieStore){let u=d=>{let p=d.changed.find(I=>I.name===r);p&&t(p.value),d.deleted.find(I=>I.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",u);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",u)}let i=qa(r),s=setInterval(()=>{let u=qa(r);u!==i&&(t(u),i=u)},Ey),a=()=>clearInterval(s);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};nc.type="COOKIE";var Bs=class extends Fs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Bs.type="SESSION";var wc=Bs;function Ty(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var js=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,s)),l=await Ty(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};js.receivers=[];function Ic(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var rc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{let d=Ic("",20);i.port1.start();let p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){let I=_;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(I.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function It(){return window}function by(n){It().location.href=n}function of(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function Ay(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ry(){return of()?self:null}var af="firebaseLocalStorageDb",Py=1,qs="firebaseLocalStorage",cf="fbase_key",Vn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Xs(n,e){return n.transaction([qs],e?"readwrite":"readonly").objectStore(qs)}function Cy(){let n=indexedDB.deleteDatabase(af);return new Vn(n).toPromise()}function ic(){let n=indexedDB.open(af,Py);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(qs,{keyPath:cf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(qs)?e(r):(r.close(),await Cy(),e(await ic()))})})}async function yd(n,e,t){let r=Xs(n,!0).put({[cf]:e,value:t});return new Vn(r).toPromise()}async function ky(n,e){let t=Xs(n,!1).get(e),r=await new Vn(t).toPromise();return r===void 0?null:r.value}function vd(n,e){let t=Xs(n,!0).delete(e);return new Vn(t).toPromise()}var Dy=800,Ny=3,zs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ic(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>Ny)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(Ry()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ay(),!this.activeServiceWorker)return;this.sender=new rc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await ic();return await yd(e,Ms,"1"),await vd(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>yd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>ky(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Xs(i,!1).getAll();return new Vn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};zs.type="LOCAL";var uf=zs;function wd(n,e){return ze(n,"POST","/v2/accounts/mfaSignIn:start",Ce(n,e))}function Oy(n,e){return ze(n,"POST","/v2/accounts/mfaSignIn:finalize",Ce(n,e))}function xy(n,e){return ze(n,"POST","/v2/accounts/mfaSignIn:finalize",Ce(n,e))}var lE=Wd("rcb"),hE=new kn(3e4,6e4);var Ts="recaptcha";async function Vy(n,e,t){var r;if(!n._getRecaptchaConfig())try{await ey(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){G(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await cr(n,a,"mfaSmsEnrollment",async(p,_)=>{if(_.phoneEnrollmentInfo.captchaResponse===ci){G(t?.type===Ts,p,"argument-error");let I=await Ga(p,_,t);return _d(p,I)}return _d(p,_)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneSessionInfo.sessionInfo}else{G(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;G(a,n,"missing-multi-factor-info");let u={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await cr(n,u,"mfaSmsSignIn",async(_,I)=>{if(I.phoneSignInInfo.captchaResponse===ci){G(t?.type===Ts,_,"argument-error");let k=await Ga(_,I,t);return wd(_,k)}return wd(_,I)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await cr(n,s,"sendVerificationCode",async(d,p)=>{if(p.captchaResponse===ci){G(t?.type===Ts,d,"argument-error");let _=await Ga(d,p,t);return md(d,_)}return md(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function Ga(n,e,t){G(t.type===Ts,n,"argument-error");let r=await t.verify();G(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,u=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:u,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,u=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:u}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var _i=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Et(e)}verifyPhoneNumber(e,t){return Vy(this.auth,e,ge(t))}static credential(e,t){return di._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?di._fromTokenResponse(t,r):null}};_i.PROVIDER_ID="phone";_i.PHONE_SIGN_IN_METHOD="phone";function Ly(n,e){return e?Lt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var yi=class extends Dn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ur(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ur(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ur(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function My(n){return Zd(n.auth,new yi(n),n.bypassAuthState)}function Fy(n){let{auth:e,user:t}=n;return G(t,e,"internal-error"),gy(t,new yi(n),n.bypassAuthState)}async function Uy(n){let{auth:e,user:t}=n;return G(t,e,"internal-error"),my(t,new yi(n),n.bypassAuthState)}var Gs=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return My;case"linkViaPopup":case"linkViaRedirect":return Uy;case"reauthViaPopup":case"reauthViaRedirect":return Fy;default:ht(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var By=new kn(2e3,1e4);var sc=class n extends Gs{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");let e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,By.get())};e()}};sc.currentPopupAction=null;var jy="pendingRedirect",bs=new Map,oc=class extends Gs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=bs.get(this.auth._key());if(!e){try{let r=await qy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}bs.set(this.auth._key(),e)}return this.bypassAuthState||bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function qy(n,e){let t=$y(e),r=Gy(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function zy(n,e){bs.set(n._key(),e)}function Gy(n){return Lt(n._redirectPersistence)}function $y(n){return Es(jy,n.config.apiKey,n.name)}async function Hy(n,e,t=!1){if(We(n.app))return Promise.reject(wt(n));let r=Et(n),i=Ly(r,e),a=await new oc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var Wy=10*60*1e3,ac=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ky(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!lf(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(vt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Id(e))}saveEventToCache(e){this.cachedEventUids.add(Id(e)),this.lastProcessedEventTime=Date.now()}};function Id(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ky(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lf(n);default:return!1}}async function Qy(n,e={}){return ze(n,"GET","/v1/projects",e)}var Jy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yy=/^https?/;async function Xy(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Qy(n);for(let t of e)try{if(Zy(t))return}catch{}ht(n,"unauthorized-domain")}function Zy(n){let e=Ha(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Yy.test(t))return!1;if(Jy.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var ev=new kn(3e4,6e4);function Ed(){let n=It().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tv(n){return new Promise((e,t)=>{var r,i,s;function a(){Ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ed(),t(vt(n,"network-request-failed"))},timeout:ev.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)a();else{let u=Wd("iframefcb");return It()[u]=()=>{gapi.load?a():t(vt(n,"network-request-failed"))},Hd(`${X_()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw As=null,e})}var As=null;function nv(n){return As=As||tv(n),As}var rv=new kn(5e3,15e3),iv="__/auth/iframe",sv="emulator/auth/iframe",ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},av=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cv(n){let e=n.config;G(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?dc(e,sv):`https://${n.config.authDomain}/${iv}`,r={apiKey:e.apiKey,appName:n.name,v:rn},i=av.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${sr(r).slice(1)}`}async function uv(n){let e=await nv(n),t=It().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:cv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ov,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=vt(n,"network-request-failed"),u=It().setTimeout(()=>{s(a)},rv.get());function l(){It().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var lv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hv=500,dv=600,fv="_blank",pv="http://localhost",$s=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function mv(n,e,t,r=hv,i=dv){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",l=Object.assign(Object.assign({},lv),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Ne().toLowerCase();t&&(u=Ud(d)?fv:t),Md(d)&&(e=e||pv,l.scrollbars="yes");let p=Object.entries(l).reduce((I,[k,x])=>`${I}${k}=${x},`,"");if(H_(d)&&u!=="_self")return gv(e||"",u),new $s(null);let _=window.open(e||"",u,p);G(_,n,"popup-blocked");try{_.focus()}catch{}return new $s(_)}function gv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var _v="__/auth/handler",yv="emulator/auth/handler",vv=encodeURIComponent("fac");async function Td(n,e,t,r,i,s){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:rn,eventId:i};if(e instanceof Ls){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Wh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,_]of Object.entries(s||{}))a[p]=_}if(e instanceof xn){let p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let l=await n._getAppCheckToken(),d=l?`#${vv}=${encodeURIComponent(l)}`:"";return`${wv(n)}?${sr(u).slice(1)}${d}`}function wv({config:n}){return n.emulator?dc(n,yv):`https://${n.authDomain}/${_v}`}var $a="webStorageSupport",cc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wc,this._completeRedirectFn=Hy,this._overrideRedirectResult=zy}async _openPopup(e,t,r,i){var s;Mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await Td(e,t,r,Ha(),i);return mv(e,a,Ic())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await Td(e,t,r,Ha(),i);return by(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await uv(e),r=new ac(e);return t.register("authEvent",i=>(G(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send($a,{type:$a},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[$a];a!==void 0&&t(!!a),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Xy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gd()||Fd()||pc()}},hf=cc,Hs=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return yt("unexpected MultiFactorSessionType")}}},uc=class n extends Hs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return _y(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Oy(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Ws=class{constructor(){}static assertion(e){return uc._fromCredential(e)}};Ws.FACTOR_ID="phone";var Ks=class{static assertionForEnrollment(e,t){return Qs._fromSecret(e,t)}static assertionForSignIn(e,t){return Qs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;G(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await yy(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Js._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};Ks.FACTOR_ID="totp";var Qs=class n extends Hs{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return G(typeof this.secret<"u",e,"argument-error"),vy(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){G(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return xy(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Js=class n{constructor(e,t,r,i,s,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(ws(e)||ws(t))&&(i=!0),i&&(ws(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),ws(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function ws(n){return typeof n>"u"||n?.length===0}var bd="@firebase/auth",Ad="1.10.8";var lc=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Iv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ev(n){nn(new st("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$d(n)},d=new Xa(r,i,s,l);return ty(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),nn(new st("auth-internal",e=>{let t=Et(e.getProvider("auth").getImmediate());return(r=>new lc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(bd,Ad,Iv(n)),lt(bd,Ad,"esm2017")}var Tv=5*60,bv=ba("authIdTokenMaxAge")||Tv,Sd=null,Av=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>bv)return;let i=t?.token;Sd!==i&&(Sd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ec(n=ys()){let e=ri(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Kd(n,{popupRedirectResolver:hf,persistence:[uf,sf,wc]}),r=ba("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=Av(s.toString());rf(t,a,()=>a(t.currentUser)),nf(t,u=>a(u))}}let i=Ea("auth");return i&&Qd(t,`http://${i}`),t}function Sv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}J_({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=vt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Sv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ev("Browser");var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ff={};var Ft,Tc;(function(){var n;function e(b,m){function v(){}v.prototype=m.prototype,b.D=m.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(T,A,R){for(var y=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)y[Je-2]=arguments[Je];return m.prototype[A].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,m,v){v||(v=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=b.g[0],v=b.g[1],A=b.g[2];var R=b.g[3],y=m+(R^v&(A^R))+T[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+T[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+T[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+T[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+T[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^R&(v^A))+T[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+T[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+T[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+T[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+T[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^R)+T[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+T[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+T[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+T[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+T[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~R))+T[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+T[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+T[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+T[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+m&4294967295,b.g[1]=b.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+R&4294967295}r.prototype.u=function(b,m){m===void 0&&(m=b.length);for(var v=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=v;)i(this,b,R),R+=this.blockSize;if(typeof b=="string"){for(;R<m;)if(T[A++]=b.charCodeAt(R++),A==this.blockSize){i(this,T),A=0;break}}else for(;R<m;)if(T[A++]=b[R++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var m=1;m<b.length-8;++m)b[m]=0;var v=8*this.o;for(m=b.length-8;m<b.length;++m)b[m]=v&255,v/=256;for(this.u(b),b=Array(16),m=v=0;4>m;++m)for(var T=0;32>T;T+=8)b[v++]=this.g[m]>>>T&255;return b};function s(b,m){var v=u;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=m(b)}function a(b,m){this.h=m;for(var v=[],T=!0,A=b.length-1;0<=A;A--){var R=b[A]|0;T&&R==m||(v[A]=R,T=!1)}this.g=v}var u={};function l(b){return-128<=b&&128>b?s(b,function(m){return new a([m|0],0>m?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return _;if(0>b)return V(d(-b));for(var m=[],v=1,T=0;b>=v;T++)m[T]=b/v|0,v*=4294967296;return new a(m,0)}function p(b,m){if(b.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(b.charAt(0)=="-")return V(p(b.substring(1),m));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),T=_,A=0;A<b.length;A+=8){var R=Math.min(8,b.length-A),y=parseInt(b.substring(A,A+R),m);8>R?(R=d(Math.pow(m,R)),T=T.j(R).add(d(y))):(T=T.j(v),T=T.add(d(y)))}return T}var _=l(0),I=l(1),k=l(16777216);n=a.prototype,n.m=function(){if(B(this))return-V(this).m();for(var b=0,m=1,v=0;v<this.g.length;v++){var T=this.i(v);b+=(0<=T?T:4294967296+T)*m,m*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(B(this))return"-"+V(this).toString(b);for(var m=d(Math.pow(b,6)),v=this,T="";;){var A=ce(v,m).g;v=Z(v,A.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=A,x(v))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var m=0;m<b.g.length;m++)if(b.g[m]!=0)return!1;return!0}function B(b){return b.h==-1}n.l=function(b){return b=Z(this,b),B(b)?-1:x(b)?0:1};function V(b){for(var m=b.g.length,v=[],T=0;T<m;T++)v[T]=~b.g[T];return new a(v,~b.h).add(I)}n.abs=function(){return B(this)?V(this):this},n.add=function(b){for(var m=Math.max(this.g.length,b.g.length),v=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(b.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);T=y>>>16,R&=65535,y&=65535,v[A]=y<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function Z(b,m){return b.add(V(m))}n.j=function(b){if(x(this)||x(b))return _;if(B(this))return B(b)?V(this).j(V(b)):V(V(this).j(b));if(B(b))return V(this.j(V(b)));if(0>this.l(k)&&0>b.l(k))return d(this.m()*b.m());for(var m=this.g.length+b.g.length,v=[],T=0;T<2*m;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<b.g.length;A++){var R=this.i(T)>>>16,y=this.i(T)&65535,Je=b.i(A)>>>16,$t=b.i(A)&65535;v[2*T+2*A]+=y*$t,K(v,2*T+2*A),v[2*T+2*A+1]+=R*$t,K(v,2*T+2*A+1),v[2*T+2*A+1]+=y*Je,K(v,2*T+2*A+1),v[2*T+2*A+2]+=R*Je,K(v,2*T+2*A+2)}for(T=0;T<m;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=m;T<2*m;T++)v[T]=0;return new a(v,0)};function K(b,m){for(;(b[m]&65535)!=b[m];)b[m+1]+=b[m]>>>16,b[m]&=65535,m++}function J(b,m){this.g=b,this.h=m}function ce(b,m){if(x(m))throw Error("division by zero");if(x(b))return new J(_,_);if(B(b))return m=ce(V(b),m),new J(V(m.g),V(m.h));if(B(m))return m=ce(b,V(m)),new J(V(m.g),m.h);if(30<b.g.length){if(B(b)||B(m))throw Error("slowDivide_ only works with positive integers.");for(var v=I,T=m;0>=T.l(b);)v=Ie(v),T=Ie(T);var A=re(v,1),R=re(T,1);for(T=re(T,2),v=re(v,2);!x(T);){var y=R.add(T);0>=y.l(b)&&(A=A.add(v),R=y),T=re(T,1),v=re(v,1)}return m=Z(b,A.j(m)),new J(A,m)}for(A=_;0<=b.l(m);){for(v=Math.max(1,Math.floor(b.m()/m.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(v),y=R.j(m);B(y)||0<y.l(b);)v-=T,R=d(v),y=R.j(m);x(R)&&(R=I),A=A.add(R),b=Z(b,y)}return new J(A,b)}n.A=function(b){return ce(this,b).h},n.and=function(b){for(var m=Math.max(this.g.length,b.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)&b.i(T);return new a(v,this.h&b.h)},n.or=function(b){for(var m=Math.max(this.g.length,b.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)|b.i(T);return new a(v,this.h|b.h)},n.xor=function(b){for(var m=Math.max(this.g.length,b.g.length),v=[],T=0;T<m;T++)v[T]=this.i(T)^b.i(T);return new a(v,this.h^b.h)};function Ie(b){for(var m=b.g.length+1,v=[],T=0;T<m;T++)v[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(v,b.h)}function re(b,m){var v=m>>5;m%=32;for(var T=b.g.length-v,A=[],R=0;R<T;R++)A[R]=0<m?b.i(R+v)>>>m|b.i(R+v+1)<<32-m:b.i(R+v);return new a(A,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tc=ff.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ft=ff.Integer=a}).apply(typeof df<"u"?df:typeof self<"u"?self:typeof window<"u"?window:{});var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ut={};var bc,Rv,lr,Ac,vi,eo,Sc,Rc,Pc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zs=="object"&&Zs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var S=o[f];if(!(S in h))break e;h=h[S]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,S={next:function(){if(!f&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function _(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,f),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,I.apply(null,arguments)}function k(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function x(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,S,C){for(var F=Array(arguments.length-2),de=2;de<arguments.length;de++)F[de-2]=arguments[de];return c.prototype[S].apply(f,F)}}function B(o){let c=o.length;if(0<c){let h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function V(o,c){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(l(f)){let S=o.length||0,C=f.length||0;o.length=S+C;for(let F=0;F<C;F++)o[S+F]=f[F]}else o.push(f)}}class Z{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function K(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function ce(o){return ce[" "](o),o}ce[" "]=function(){};var Ie=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function re(o,c,h){for(let f in o)c.call(h,o[f],f,o)}function b(o,c){for(let h in o)c.call(void 0,o[h],h,o)}function m(o){let c={};for(let h in o)c[h]=o[h];return c}let v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(h in f)o[h]=f[h];for(let C=0;C<v.length;C++)h=v[C],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function A(o){var c=1;o=o.split(":");let h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=ue;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Je{constructor(){this.h=this.g=null}add(c,h){let f=$t.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var $t=new Z(()=>new ra,o=>o.reset());class ra{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,yn=!1,ue=new Je,Ht=()=>{let o=u.Promise.resolve(void 0);pt=()=>{o.then(ia)}};var ia=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var c=$t;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}yn=!1};function ct(){this.s=this.s,this.C=this.C}ct.prototype.s=!1,ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var sa=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function vn(o,c){if(Pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Ie){e:{try{ce(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:oa[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&vn.aa.h.call(this)}}x(vn,Pe);var oa={2:"touch",3:"pen",4:"mouse"};vn.prototype.h=function(){vn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Wt="closure_listenable_"+(1e6*Math.random()|0),zi=0;function Gi(o,c,h,f,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=S,this.key=++zi,this.da=this.fa=!1}function wn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function In(o){this.src=o,this.g={},this.h=0}In.prototype.add=function(o,c,h,f,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var F=Yn(o,c,f,S);return-1<F?(c=o[F],h||(c.fa=!1)):(c=new Gi(c,this.src,C,!!f,S),c.fa=h,o.push(c)),c};function Jn(o,c){var h=c.type;if(h in o.g){var f=o.g[h],S=Array.prototype.indexOf.call(f,c,void 0),C;(C=0<=S)&&Array.prototype.splice.call(f,S,1),C&&(wn(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Yn(o,c,h,f){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==f)return S}return-1}var Xn="closure_lm_"+(1e6*Math.random()|0),Ur={};function Ue(o,c,h,f,S){if(f&&f.once)return En(o,c,h,f,S);if(Array.isArray(c)){for(var C=0;C<c.length;C++)Ue(o,c[C],h,f,S);return null}return h=bn(h),o&&o[Wt]?o.K(c,h,d(f)?!!f.capture:!!f,S):Ye(o,c,h,!1,f,S)}function Ye(o,c,h,f,S,C){if(!c)throw Error("Invalid event type");var F=d(S)?!!S.capture:!!S,de=Tn(o);if(de||(o[Xn]=de=new In(o)),h=de.add(c,h,f,F,C),h.proxy)return h;if(f=it(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)sa||(S=F),S===void 0&&(S=!1),o.addEventListener(c.toString(),f,S);else if(o.attachEvent)o.attachEvent(Hi(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function it(){function o(h){return c.call(o.src,o.listener,h)}let c=Br;return o}function En(o,c,h,f,S){if(Array.isArray(c)){for(var C=0;C<c.length;C++)En(o,c[C],h,f,S);return null}return h=bn(h),o&&o[Wt]?o.L(c,h,d(f)?!!f.capture:!!f,S):Ye(o,c,h,!0,f,S)}function $i(o,c,h,f,S){if(Array.isArray(c))for(var C=0;C<c.length;C++)$i(o,c[C],h,f,S);else f=d(f)?!!f.capture:!!f,h=bn(h),o&&o[Wt]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=Yn(C,h,f,S),-1<h&&(wn(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=Tn(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Yn(c,h,f,S)),(h=-1<o?c[o]:null)&&Zn(h))}function Zn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Wt])Jn(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Hi(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Tn(c))?(Jn(h,o),h.h==0&&(h.src=null,c[Xn]=null)):wn(o)}}}function Hi(o){return o in Ur?Ur[o]:Ur[o]="on"+o}function Br(o,c){if(o.da)o=!0;else{c=new vn(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Zn(o),o=h.call(f,c)}return o}function Tn(o){return o=o[Xn],o instanceof In?o:null}var er="__closure_events_fn_"+(1e9*Math.random()>>>0);function bn(o){return typeof o=="function"?o:(o[er]||(o[er]=function(c){return o.handleEvent(c)}),o[er])}function Te(){ct.call(this),this.i=new In(this),this.M=this,this.F=null}x(Te,ct),Te.prototype[Wt]=!0,Te.prototype.removeEventListener=function(o,c,h,f){$i(this,o,c,h,f)};function Le(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new Pe(c,o);else if(c instanceof Pe)c.target=c.target||o;else{var S=c;c=new Pe(f,o),T(c,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var F=c.g=h[C];S=tr(F,f,!0,c)&&S}if(F=c.g=o,S=tr(F,f,!0,c)&&S,S=tr(F,f,!1,c)&&S,h)for(C=0;C<h.length;C++)F=c.g=h[C],S=tr(F,f,!1,c)&&S}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)wn(h[f]);delete o.g[c],o.h--}}this.F=null},Te.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Te.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function tr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,C=0;C<c.length;++C){var F=c[C];if(F&&!F.da&&F.capture==h){var de=F.listener,Fe=F.ha||F.src;F.fa&&Jn(o.i,F),S=de.call(Fe,f)!==!1&&S}}return S&&!f.defaultPrevented}function Wi(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ki(o){o.g=Wi(()=>{o.g=null,o.i&&(o.i=!1,Ki(o))},o.l);let c=o.h;o.h=null,o.m.apply(null,c)}class Qi extends ct{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ki(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function An(o){ct.call(this),this.h=o,this.g={}}x(An,ct);var Ji=[];function Yi(o){re(o.g,function(c,h){this.g.hasOwnProperty(h)&&Zn(c)},o),o.g={}}An.prototype.N=function(){An.aa.N.call(this),Yi(this)},An.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=u.JSON.stringify,De=u.JSON.parse,g=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function w(){}w.prototype.h=null;function E(o){return o.h||(o.h=o.i())}function P(){}var L={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function M(){Pe.call(this,"d")}x(M,Pe);function j(){Pe.call(this,"c")}x(j,Pe);var U={},te=null;function se(){return te=te||new Te}U.La="serverreachability";function Me(o){Pe.call(this,U.La,o)}x(Me,Pe);function kt(o){let c=se();Le(c,new Me(c))}U.STAT_EVENT="statevent";function qr(o,c){Pe.call(this,U.STAT_EVENT,o),this.stat=c}x(qr,Pe);function Ee(o){let c=se();Le(c,new qr(c,o))}U.Ma="timingevent";function zr(o,c){Pe.call(this,U.Ma,o),this.size=c}x(zr,Pe);function $(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function fe(){this.g=!0}fe.prototype.xa=function(){this.g=!1};function Be(o,c,h,f,S,C){o.info(function(){if(o.g)if(C)for(var F="",de=C.split("&"),Fe=0;Fe<de.length;Fe++){var ae=de[Fe].split("=");if(1<ae.length){var je=ae[0];ae=ae[1];var qe=je.split("_");F=2<=qe.length&&qe[1]=="type"?F+(je+"="+ae+"&"):F+(je+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+c+`
`+h+`
`+F})}function Kt(o,c,h,f,S,C,F){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+c+`
`+h+`
`+C+" "+F})}function Dt(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Qt(o,h)+(f?" "+f:"")})}function He(o,c){o.info(function(){return"TIMEOUT: "+c})}fe.prototype.info=function(){};function Qt(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var S=f[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<S.length;F++)S[F]=""}}}}return jr(h)}catch{return c}}var mt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},aa;function Xi(){}x(Xi,w),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},aa=new Xi;function Jt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new An(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kl}function Kl(){this.i=null,this.g="",this.h=!1}var Ql={},ca={};function ua(o,c,h){o.L=1,o.v=ns(Nt(c)),o.m=h,o.P=!0,Jl(o,null)}function Jl(o,c){o.F=Date.now(),Zi(o),o.A=Nt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),lh(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Kl,o.g=Ph(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Qi(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ji[0]=S.toString()),S=Ji);for(var C=0;C<S.length;C++){var F=Ue(h,S[C],f||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),kt(),Be(o.i,o.u,o.A,o.l,o.R,o.m)}Jt.prototype.ca=function(o){o=o.target;let c=this.M;c&&Ot(o)==3?c.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)e:{let qe=Ot(this.g);var c=this.g.Ba();let ir=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||_h(this.g)))){this.J||qe!=4||c==7||(c==8||0>=ir?kt(3):kt(2)),la(this);var h=this.g.Z();this.X=h;t:if(Yl(this)){var f=_h(this.g);o="";var S=f.length,C=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sn(this),$r(this);var F="";break t}this.h.i=new u.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(C&&c==S-1)});f.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,Kt(this.i,this.u,this.A,this.l,this.R,qe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Fe=this.g;if((de=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(de)){var ae=de;break t}}ae=null}if(h=ae)Dt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,h);else{this.o=!1,this.s=3,Ee(12),Sn(this),$r(this);break e}}if(this.P){h=!0;let ut;for(;!this.J&&this.C<F.length;)if(ut=Ym(this,F),ut==ca){qe==4&&(this.s=4,Ee(14),h=!1),Dt(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Ql){this.s=4,Ee(15),Dt(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else Dt(this.i,this.l,ut,null),ha(this,ut);if(Yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||F.length!=0||this.h.h||(this.s=1,Ee(16),h=!1),this.o=this.o&&h,!h)Dt(this.i,this.l,F,"[Invalid Chunked Response]"),Sn(this),$r(this);else if(0<F.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),_a(je),je.M=!0,Ee(11))}}else Dt(this.i,this.l,F,null),ha(this,F);qe==4&&Sn(this),this.o&&!this.J&&(qe==4?bh(this.j,this):(this.o=!1,Zi(this)))}else pg(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),Sn(this),$r(this)}}}catch{}finally{}};function Yl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ym(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?ca:(h=Number(c.substring(h,f)),isNaN(h)?Ql:(f+=1,f+h>c.length?ca:(c=c.slice(f,f+h),o.C=f+h,c)))}Jt.prototype.cancel=function(){this.J=!0,Sn(this)};function Zi(o){o.S=Date.now()+o.I,Xl(o,o.I)}function Xl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=$(I(o.ba,o),c)}function la(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Jt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(He(this.i,this.A),this.L!=2&&(kt(),Ee(17)),Sn(this),this.s=2,$r(this)):Xl(this,this.S-o)};function $r(o){o.j.G==0||o.J||bh(o.j,o)}function Sn(o){la(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Yi(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ha(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||da(h.h,o))){if(!o.K&&da(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)as(h),ss(h);else break e;ga(h),Ee(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=$(I(h.Za,h),6e3));if(1>=th(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Pn(h,11)}else if((o.K||h.g==o)&&as(h),!K(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let ae=S[c];if(h.T=ae[0],ae=ae[1],h.G==2)if(ae[0]=="c"){h.K=ae[1],h.ia=ae[2];let je=ae[3];je!=null&&(h.la=je,h.j.info("VER="+h.la));let qe=ae[4];qe!=null&&(h.Aa=qe,h.j.info("SVER="+h.Aa));let ir=ae[5];ir!=null&&typeof ir=="number"&&0<ir&&(f=1.5*ir,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let ut=o.g;if(ut){let us=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var C=f.h;C.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(fa(C,C.h),C.h=null))}if(f.D){let ya=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;ya&&(f.ya=ya,pe(f.I,f.D,ya))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var F=o;if(f.qa=Rh(f,f.J?f.ia:null,f.W),F.K){nh(f.h,F);var de=F,Fe=f.L;Fe&&(de.I=Fe),de.B&&(la(de),Zi(de)),f.g=F}else Eh(f);0<h.i.length&&os(h)}else ae[0]!="stop"&&ae[0]!="close"||Pn(h,7);else h.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Pn(h,7):ma(h):ae[0]!="noop"&&h.l&&h.l.ta(ae),h.v=0)}}kt(4)}catch{}}var Xm=class{constructor(o,c){this.g=o,this.map=c}};function Zl(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function th(o){return o.h?1:o.g?o.g.size:0}function da(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function fa(o,c){o.g?o.g.add(c):o.h=c}function nh(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Zl.prototype.cancel=function(){if(this.i=rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function rh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(let h of o.g.values())c=c.concat(h.D);return c}return B(o.i)}function Zm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function eg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(let f in o)c[h++]=f;return c}}}function ih(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=eg(o),f=Zm(o),S=f.length,C=0;C<S;C++)c.call(void 0,f[C],h&&h[C],o)}var sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tg(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),S=null;if(0<=f){var C=o[h].substring(0,f);S=o[h].substring(f+1)}else C=o[h];c(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Rn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Rn){this.h=o.h,es(this,o.j),this.o=o.o,this.g=o.g,ts(this,o.s),this.l=o.l;var c=o.i,h=new Kr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),oh(this,h),this.m=o.m}else o&&(c=String(o).match(sh))?(this.h=!1,es(this,c[1]||"",!0),this.o=Hr(c[2]||""),this.g=Hr(c[3]||"",!0),ts(this,c[4]),this.l=Hr(c[5]||"",!0),oh(this,c[6]||"",!0),this.m=Hr(c[7]||"")):(this.h=!1,this.i=new Kr(null,this.h))}Rn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Wr(c,ah,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Wr(c,ah,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Wr(h,h.charAt(0)=="/"?ig:rg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Wr(h,og)),o.join("")};function Nt(o){return new Rn(o)}function es(o,c,h){o.j=h?Hr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ts(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function oh(o,c,h){c instanceof Kr?(o.i=c,ag(o.i,o.h)):(h||(c=Wr(c,sg)),o.i=new Kr(c,o.h))}function pe(o,c,h){o.i.set(c,h)}function ns(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Hr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,ng),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ng(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ah=/[#\/\?@]/g,rg=/[#\?:]/g,ig=/[#\?]/g,sg=/[#\?@]/g,og=/#/g;function Kr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Yt(o){o.g||(o.g=new Map,o.h=0,o.i&&tg(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Kr.prototype,n.add=function(o,c){Yt(this),this.i=null,o=nr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ch(o,c){Yt(o),c=nr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function uh(o,c){return Yt(o),c=nr(o,c),o.g.has(c)}n.forEach=function(o,c){Yt(this),this.g.forEach(function(h,f){h.forEach(function(S){o.call(c,S,f,this)},this)},this)},n.na=function(){Yt(this);let o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){let S=o[f];for(let C=0;C<S.length;C++)h.push(c[f])}return h},n.V=function(o){Yt(this);let c=[];if(typeof o=="string")uh(this,o)&&(c=c.concat(this.g.get(nr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Yt(this),this.i=null,o=nr(this,o),uh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function lh(o,c,h){ch(o,c),0<h.length&&(o.i=null,o.g.set(nr(o,c),B(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];let C=encodeURIComponent(String(f)),F=this.V(f);for(f=0;f<F.length;f++){var S=C;F[f]!==""&&(S+="="+encodeURIComponent(String(F[f]))),o.push(S)}}return this.i=o.join("&")};function nr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function ag(o,c){c&&!o.j&&(Yt(o),o.i=null,o.g.forEach(function(h,f){var S=f.toLowerCase();f!=S&&(ch(this,f),lh(this,S,h))},o)),o.j=c}function cg(o,c){let h=new fe;if(u.Image){let f=new Image;f.onload=k(Xt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=k(Xt,h,"TestLoadImage: error",!1,c,f),f.onabort=k(Xt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=k(Xt,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function ug(o,c){let h=new fe,f=new AbortController,S=setTimeout(()=>{f.abort(),Xt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(C=>{clearTimeout(S),C.ok?Xt(h,"TestPingServer: ok",!0,c):Xt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),Xt(h,"TestPingServer: error",!1,c)})}function Xt(o,c,h,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(h)}catch{}}function lg(){this.g=new g}function hg(o,c,h){let f=h||"";try{ih(o,function(S,C){let F=S;d(S)&&(F=jr(S)),c.push(f+C+"="+encodeURIComponent(F))})}catch(S){throw c.push(f+"type="+encodeURIComponent("_badmap")),S}}function Qr(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Qr,w),Qr.prototype.g=function(){return new rs(this.l,this.j)},Qr.prototype.i=function(o){return function(){return o}}({});function rs(o,c){Te.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(rs,Te),n=rs.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Yr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Yr(this)),this.g&&(this.readyState=3,Yr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function hh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Jr(this):Yr(this),this.readyState==3&&hh(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Jr(this))},n.Qa=function(o){this.g&&(this.response=o,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Yr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Yr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function dh(o){let c="";return re(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function pa(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=dh(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):pe(o,c,h))}function ve(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ve,Te);var dg=/^https?$/i,fg=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():aa.g(),this.v=this.o?E(this.o):E(aa),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){fh(this,C);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)h.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let C of f.keys())h.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(fg,c,void 0))||f||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[C,F]of h)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gh(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){fh(this,C)}};function fh(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ph(o),is(o)}function ph(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),is(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),is(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?mh(this):this.bb())},n.bb=function(){mh(this)};function mh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ot(o)!=4||o.Z()!=2)){if(o.u&&Ot(o)==4)Wi(o.Ea,0,o);else if(Le(o,"readystatechange"),Ot(o)==4){o.h=!1;try{let F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=F===0){var S=String(o.D).match(sh)[1]||null;!S&&u.self&&u.self.location&&(S=u.self.location.protocol.slice(0,-1)),f=!dg.test(S?S.toLowerCase():"")}h=f}if(h)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var C=2<Ot(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",ph(o)}}finally{is(o)}}}}function is(o,c){if(o.g){gh(o);let h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Le(o,"ready");try{h.onreadystatechange=f}catch{}}}function gh(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ot(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),De(c)}};function _h(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function pg(o){let c={};o=(o.g&&2<=Ot(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(K(o[f]))continue;var h=A(o[f]);let S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let C=c[S]||[];c[S]=C,C.push(h)}b(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function yh(o){this.Aa=0,this.i=[],this.j=new fe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,o),this.cb=Xr("retryDelaySeedMs",1e4,o),this.Wa=Xr("forwardChannelMaxRetries",2,o),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Zl(o&&o.concurrentRequestLimit),this.Da=new lg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=yh.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){Ee(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Rh(this,null,this.W),os(this)};function ma(o){if(vh(o),o.G==3){var c=o.U++,h=Nt(o.I);if(pe(h,"SID",o.K),pe(h,"RID",c),pe(h,"TYPE","terminate"),Zr(o,h),c=new Jt(o,o.j,c),c.L=2,c.v=ns(Nt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Ph(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Zi(c)}Sh(o)}function ss(o){o.g&&(_a(o),o.g.cancel(),o.g=null)}function vh(o){ss(o),o.u&&(u.clearTimeout(o.u),o.u=null),as(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function os(o){if(!eh(o.h)&&!o.s){o.s=!0;var c=o.Ga;pt||Ht(),yn||(pt(),yn=!0),ue.add(c,o),o.B=0}}function mg(o,c){return th(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=$(I(o.Ga,o,c),Ah(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let S=new Jt(this,this.j,o),C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ih(this,S,c),h=Nt(this.I),pe(h,"RID",o),pe(h,"CVER",22),this.D&&pe(h,"X-HTTP-Session-Id",this.D),Zr(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(dh(C)))+"&"+c:this.m&&pa(h,this.m,C)),fa(this.h,S),this.Ua&&pe(h,"TYPE","init"),this.P?(pe(h,"$req",c),pe(h,"SID","null"),S.T=!0,ua(S,h,null)):ua(S,h,c),this.G=2}}else this.G==3&&(o?wh(this,o):this.i.length==0||eh(this.h)||wh(this))};function wh(o,c){var h;c?h=c.l:h=o.U++;let f=Nt(o.I);pe(f,"SID",o.K),pe(f,"RID",h),pe(f,"AID",o.T),Zr(o,f),o.m&&o.o&&pa(f,o.m,o.o),h=new Jt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ih(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),fa(o.h,h),ua(h,f,c)}function Zr(o,c){o.H&&re(o.H,function(h,f){pe(c,f,h)}),o.l&&ih({},function(h,f){pe(c,f,h)})}function Ih(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){let F=["count="+h];C==-1?0<h?(C=S[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let de=!0;for(let Fe=0;Fe<h;Fe++){let ae=S[Fe].g,je=S[Fe].map;if(ae-=C,0>ae)C=Math.max(0,S[Fe].g-100),de=!1;else try{hg(je,F,"req"+ae+"_")}catch{f&&f(je)}}if(de){f=F.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Eh(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;pt||Ht(),yn||(pt(),yn=!0),ue.add(c,o),o.v=0}}function ga(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=$(I(o.Fa,o),Ah(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Th(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=$(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ee(10),ss(this),Th(this))};function _a(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Th(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Nt(o.qa);pe(c,"RID","rpc"),pe(c,"SID",o.K),pe(c,"AID",o.T),pe(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(c,"TO",o.ja),pe(c,"TYPE","xmlhttp"),Zr(o,c),o.m&&o.o&&pa(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ns(Nt(c)),h.m=null,h.P=!0,Jl(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ss(this),ga(this),Ee(19))};function as(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function bh(o,c){var h=null;if(o.g==c){as(o),_a(o),o.g=null;var f=2}else if(da(o.h,c))h=c.D,nh(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;f=se(),Le(f,new zr(f,h)),os(o)}else Eh(o);else if(S=c.s,S==3||S==0&&0<c.X||!(f==1&&mg(o,c)||f==2&&ga(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:Pn(o,5);break;case 4:Pn(o,10);break;case 3:Pn(o,6);break;default:Pn(o,2)}}}function Ah(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Pn(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;let S=!f;f=new Rn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||es(f,"https"),ns(f),S?cg(f.toString(),h):ug(f.toString(),h)}else Ee(2);o.G=0,o.l&&o.l.sa(c),Sh(o),vh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))};function Sh(o){if(o.G=0,o.ka=[],o.l){let c=rh(o.h);(c.length!=0||o.i.length!=0)&&(V(o.ka,c),V(o.ka,o.i),o.h.i.length=0,B(o.i),o.i.length=0),o.l.ra()}}function Rh(o,c,h){var f=h instanceof Rn?Nt(h):new Rn(h);if(f.g!="")c&&(f.g=c+"."+f.g),ts(f,f.s);else{var S=u.location;f=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var C=new Rn(null);f&&es(C,f),c&&(C.g=c),S&&ts(C,S),h&&(C.l=h),f=C}return h=o.D,c=o.ya,h&&c&&pe(f,h,c),pe(f,"VER",o.la),Zr(o,f),f}function Ph(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ve(new Qr({eb:h})):new ve(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ch(){}n=Ch.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function cs(){}cs.prototype.g=function(o,c){return new Xe(o,c)};function Xe(o,c){Te.call(this),this.g=new yh(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!K(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!K(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new rr(this)}x(Xe,Te),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){ma(this.g)},Xe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=jr(o),o=h);c.i.push(new Xm(c.Ya++,o)),c.G==3&&os(c)},Xe.prototype.N=function(){this.g.l=null,delete this.j,ma(this.g),delete this.g,Xe.aa.N.call(this)};function kh(o){M.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(let h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}x(kh,M);function Dh(){j.call(this),this.status=1}x(Dh,j);function rr(o){this.g=o}x(rr,Ch),rr.prototype.ua=function(){Le(this.g,"a")},rr.prototype.ta=function(o){Le(this.g,new kh(o))},rr.prototype.sa=function(o){Le(this.g,new Dh)},rr.prototype.ra=function(){Le(this.g,"b")},cs.prototype.createWebChannel=cs.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,Pc=Ut.createWebChannelTransport=function(){return new cs},Rc=Ut.getStatEventTarget=function(){return se()},Sc=Ut.Event=U,eo=Ut.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mt.NO_ERROR=0,mt.TIMEOUT=8,mt.HTTP_ERROR=6,vi=Ut.ErrorCode=mt,Gr.COMPLETE="complete",Ac=Ut.EventType=Gr,P.EventType=L,L.OPEN="a",L.CLOSE="b",L.ERROR="c",L.MESSAGE="d",Te.prototype.listen=Te.prototype.K,lr=Ut.WebChannel=P,Rv=Ut.FetchXmlHttpFactory=Qr,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,bc=Ut.XhrIo=ve}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});var pf="@firebase/firestore",mf="4.8.0";var Oe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");var Vr="11.10.0";var Bn=new en("@firebase/firestore");function hr(){return Bn.logLevel}function q(n,...e){if(Bn.logLevel<=ne.DEBUG){let t=e.map(gl);Bn.debug(`Firestore (${Vr}): ${n}`,...t)}}function Bt(n,...e){if(Bn.logLevel<=ne.ERROR){let t=e.map(gl);Bn.error(`Firestore (${Vr}): ${n}`,...t)}}function fn(n,...e){if(Bn.logLevel<=ne.WARN){let t=e.map(gl);Bn.warn(`Firestore (${Vr}): ${n}`,...t)}}function gl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ip(n,r,t)}function ip(n,e,t){let r=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Bt(r),new Error(r)}function le(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||ip(e,i,r)}function Y(n,e){return n}var D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},z=class extends Ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Tt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var ao=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},xc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}},Vc=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},Lc=class{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0,42304);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?u(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new ao(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}},Mc=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Fc=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Mc(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},co=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Uc=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){le(this.o===void 0,3512);let r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new co(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new co(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Pv(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function sp(){return new TextEncoder}var Ai=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=Pv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function ee(n,e){return n<e?-1:n>e?1:0}function Bc(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return ee(r,i);{let s=sp(),a=Cv(s.encode(gf(n,t)),s.encode(gf(e,t)));return a!==0?a:ee(r,i)}}t+=r>65535?2:1}return ee(n.length,e.length)}function gf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Cv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ee(n[t],e[t]);return ee(n.length,e.length)}function vr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var _f="__name__",uo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ee(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):Bc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ft.fromString(e.substring(4,e.length-2))}},_e=class n extends uo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},kv=/^[_a-zA-Z][_a-zA-Z0-9]*$/,tt=class n extends uo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return kv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_f}static keyField(){return new n([_f])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var H=class n{constructor(e){this.path=e}static fromPath(e){return new n(_e.fromString(e))}static fromName(e){return new n(_e.fromString(e).popFirst(5))}static empty(){return new n(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new _e(e.slice()))}};function op(n,e,t){if(!t)throw new z(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Dv(n,e,t,r){if(e===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yf(n){if(!H.isDocumentKey(n))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function vf(n){if(H.isDocumentKey(n))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ap(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function _l(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=_l(n);throw new z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Se(n,e){let t={typeString:n};return e&&(t.value=e),t}function Li(n,e){if(!ap(n))throw new z(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new z(D.INVALID_ARGUMENT,t);return!0}var wf=-62135596800,If=1e6,Re=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*If);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wf)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/If}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Li(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-wf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:Se("string",Re._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};var X=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Re(0,0))}static max(){return new n(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Si=-1,jc=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};jc.UNKNOWN_ID=-1;function Nv(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Re(t+1,0):new Re(t,r));return new jn(i,H.empty(),e)}function Ov(n){return new jn(n.readTime,n.key,Si)}var jn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(X.min(),H.empty(),Si)}static max(){return new n(X.max(),H.empty(),Si)}};function xv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}var Vv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",qc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Lr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Vv)throw n;q("LocalStore","Unexpectedly lost primary lease")}var N=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),u=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(p=>{a[d]=p,++u,u===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function Lv(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mr(n){return n.name==="IndexedDbTransactionError"}var wr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};wr.ue=-1;var yl=-1;function zo(n){return n==null}function Ri(n){return n===0&&1/n==-1/0}function Mv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ri(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var cp="";function Fv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ef(e)),e=Uv(n.get(t),e);return Ef(e)}function Uv(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case cp:t+="";break;default:t+=s}}return t}function Ef(n){return n+cp+""}var Bv="remoteDocuments",up="owner";var lp="mutationQueues";var hp="mutations";var dp="documentMutations",jv="remoteDocumentsV14";var fp="remoteDocumentGlobal";var pp="targets";var mp="targetDocuments";var gp="targetGlobal",_p="collectionParents";var yp="clientMetadata";var vp="bundles";var wp="namedQueries";var qv="indexConfiguration";var zv="indexState";var Gv="indexEntries";var Ip="documentOverlays";var $v="globals";var Hv=[lp,hp,dp,Bv,pp,up,gp,mp,yp,fp,_p,vp,wp],DT=[...Hv,Ip],Wv=[lp,hp,dp,jv,pp,up,gp,mp,yp,fp,_p,vp,wp,Ip],Kv=Wv,Qv=[...Kv,qv,zv,Gv];var NT=[...Qv,$v];function Tf(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _n(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ep(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var we=class n{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mr(this.root,e,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mr(this.root,e,this.comparator,!0)}},mr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},bt=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}};bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var xe=class n{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lo(this.data.getIterator())}getIteratorFrom(e){return new lo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},lo=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var at=class n{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new n([])}unionWith(e){let t=new xe(tt.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var ho=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var $e=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ho("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};$e.EMPTY_BYTE_STRING=new $e("");var Jv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(le(!!n,39018),typeof n=="string"){let e=0,t=Jv.exec(n);if(le(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qt(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}var Tp="server_timestamp",bp="__type__",Ap="__previous_value__",Sp="__local_write_time__";function vl(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[bp])===null||t===void 0?void 0:t.stringValue)===Tp}function Go(n){let e=n.mapValue.fields[Ap];return vl(e)?Go(e):e}function Pi(n){let e=jt(n.mapValue.fields[Sp].timestampValue);return new Re(e.seconds,e.nanos)}var zc=class{constructor(e,t,r,i,s,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}},fo="(default)",po=class n{constructor(e,t){this.projectId=e,this.database=t||fo}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===fo}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var wl="__type__",Rp="__max__",to={mapValue:{fields:{__type__:{stringValue:Rp}}}},Il="__vector__",Ir="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vl(n)?4:Cp(n)?9007199254740991:Pp(n)?10:11:W(28295,{value:n})}function Rt(n,e){if(n===e)return!0;let t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pi(n).isEqual(Pi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=jt(i.timestampValue),u=jt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return qt(i.bytesValue).isEqual(qt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return me(i.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(i.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return me(i.integerValue)===me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=me(i.doubleValue),u=me(s.doubleValue);return a===u?Ri(a)===Ri(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return vr(n.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Tf(a)!==Tf(u))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Rt(a[l],u[l])))return!1;return!0}(n,e);default:return W(52216,{left:n})}}function Ci(n,e){return(n.values||[]).find(t=>Rt(t,e))!==void 0}function Er(n,e){if(n===e)return 0;let t=pn(n),r=pn(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(s,a){let u=me(s.integerValue||s.doubleValue),l=me(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return bf(n.timestampValue,e.timestampValue);case 4:return bf(Pi(n),Pi(e));case 5:return Bc(n.stringValue,e.stringValue);case 6:return function(s,a){let u=qt(s),l=qt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){let p=ee(u[d],l[d]);if(p!==0)return p}return ee(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let u=ee(me(s.latitude),me(a.latitude));return u!==0?u:ee(me(s.longitude),me(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Af(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,p;let _=s.fields||{},I=a.fields||{},k=(u=_[Ir])===null||u===void 0?void 0:u.arrayValue,x=(l=I[Ir])===null||l===void 0?void 0:l.arrayValue,B=ee(((d=k?.values)===null||d===void 0?void 0:d.length)||0,((p=x?.values)===null||p===void 0?void 0:p.length)||0);return B!==0?B:Af(k,x)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===to.mapValue&&a===to.mapValue)return 0;if(s===to.mapValue)return 1;if(a===to.mapValue)return-1;let u=s.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let _=0;_<l.length&&_<p.length;++_){let I=Bc(l[_],p[_]);if(I!==0)return I;let k=Er(u[l[_]],d[p[_]]);if(k!==0)return k}return ee(l.length,p.length)}(n.mapValue,e.mapValue);default:throw W(23264,{le:t})}}function bf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);let t=jt(n),r=jt(e),i=ee(t.seconds,r.seconds);return i!==0?i:ee(t.nanos,r.nanos)}function Af(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Er(t[i],r[i]);if(s)return s}return ee(t.length,r.length)}function Tr(n){return Gc(n)}function Gc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=Gc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${Gc(t.fields[a])}`;return i+"}"}(n.mapValue):W(61005,{value:n})}function io(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Go(n);return e?16+io(e):16;case 5:return 2*n.stringValue.length;case 6:return qt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+io(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return _n(r.fields,(s,a)=>{i+=s.length+io(a)}),i}(n.mapValue);default:throw W(13486,{value:n})}}function $c(n){return!!n&&"integerValue"in n}function El(n){return!!n&&"arrayValue"in n}function Sf(n){return!!n&&"nullValue"in n}function Rf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function so(n){return!!n&&"mapValue"in n}function Pp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[wl])===null||t===void 0?void 0:t.stringValue)===Il}function Ii(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return _n(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ii(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ii(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Cp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Rp}var xT={mapValue:{fields:{[wl]:{stringValue:Il},[Ir]:{arrayValue:{}}}}};var et=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!so(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ii(t)}setAll(e){let t=tt.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Ii(a):i.push(u.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());so(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];so(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){_n(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Ii(this.value))}};function kp(n){let e=[];return _n(n.fields,(t,r)=>{let i=new tt([t]);if(so(r)){let s=kp(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new at(e)}var dt=class n{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,X.min(),X.min(),X.min(),et.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,X.min(),X.min(),et.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,X.min(),X.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var br=class{constructor(e,t){this.position=e,this.inclusive=t}};function Pf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),t.key):r=Er(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}var Ar=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function Yv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var mo=class{},ke=class n extends mo{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Wc(e,t,r):t==="array-contains"?new Jc(e,r):t==="in"?new Yc(e,r):t==="not-in"?new Xc(e,r):t==="array-contains-any"?new Zc(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Kc(e,r):new Qc(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Er(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(Er(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Pt=class n extends mo{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return Dp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function Dp(n){return n.op==="and"}function Np(n){return Xv(n)&&Dp(n)}function Xv(n){for(let e of n.filters)if(e instanceof Pt)return!1;return!0}function Hc(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+Tr(n.value);if(Np(n))return n.filters.map(e=>Hc(e)).join(",");{let e=n.filters.map(t=>Hc(t)).join(",");return`${n.op}(${e})`}}function Op(n,e){return n instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&Rt(r.value,i.value)}(n,e):n instanceof Pt?function(r,i){return i instanceof Pt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&Op(a,i.filters[u]),!0):!1}(n,e):void W(19439)}function xp(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${Tr(t.value)}`}(n):n instanceof Pt?function(t){return t.op.toString()+" {"+t.getFilters().map(xp).join(" ,")+"}"}(n):"Filter"}var Wc=class extends ke{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){let t=H.comparator(e.key,this.key);return this.matchesComparison(t)}},Kc=class extends ke{constructor(e,t){super(e,"in",t),this.keys=Vp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Qc=class extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Vp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Vp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}var Jc=class extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return El(t)&&Ci(t.arrayValue,this.value)}},Yc=class extends ke{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Ci(this.value.arrayValue,t)}},Xc=class extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ci(this.value.arrayValue,t)}},Zc=class extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!El(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}};var eu=class{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}};function kf(n,e=null,t=[],r=[],i=null,s=null,a=null){return new eu(n,e,t,r,i,s,a)}function Tl(n){let e=Y(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Hc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Tr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Tr(r)).join(",")),e.Pe=t}return e.Pe}function bl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Op(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cf(n.startAt,e.startAt)&&Cf(n.endAt,e.endAt)}function tu(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Sr=class{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function Zv(n,e,t,r,i,s,a,u){return new Sr(n,e,t,r,i,s,a,u)}function $o(n){return new Sr(n)}function Df(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ew(n){return n.collectionGroup!==null}function Ei(n){let e=Y(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new xe(tt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Ar(s,r))}),t.has(tt.keyField().canonicalString())||e.Te.push(new Ar(tt.keyField(),r))}return e.Te}function At(n){let e=Y(n);return e.Ie||(e.Ie=tw(e,Ei(n))),e.Ie}function tw(n,e){if(n.limitType==="F")return kf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Ar(i.field,s)});let t=n.endAt?new br(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new br(n.startAt.position,n.startAt.inclusive):null;return kf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function nu(n,e,t){return new Sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ho(n,e){return bl(At(n),At(e))&&n.limitType===e.limitType}function Lp(n){return`${Tl(At(n))}|lt:${n.limitType}`}function dr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>xp(i)).join(", ")}]`),zo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Tr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Tr(i)).join(",")),`Target(${r})`}(At(n))}; limitType=${n.limitType})`}function Wo(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Ei(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){let d=Pf(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Ei(r),i)||r.endAt&&!function(a,u,l){let d=Pf(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Ei(r),i))}(n,e)}function nw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Mp(n){return(e,t)=>{let r=!1;for(let i of Ei(n)){let s=rw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rw(n,e,t){let r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,a,u){let l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?Er(l,d):W(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}var zt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Ep(this.inner)}size(){return this.innerSize}};var iw=new we(H.comparator);function Gt(){return iw}var Fp=new we(H.comparator);function wi(...n){let e=Fp;for(let t of n)e=e.insert(t.key,t);return e}function Up(n){let e=Fp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ln(){return Ti()}function Bp(){return Ti()}function Ti(){return new zt(n=>n.toString(),(n,e)=>n.isEqual(e))}var sw=new we(H.comparator),ow=new xe(H.comparator);function ie(...n){let e=ow;for(let t of n)e=e.add(t);return e}var aw=new xe(ee);function cw(){return aw}function Al(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ri(e)?"-0":e}}function jp(n){return{integerValue:""+n}}function uw(n,e){return Mv(e)?jp(e):Al(n,e)}var Rr=class{constructor(){this._=void 0}};function lw(n,e,t){return n instanceof Pr?function(i,s){let a={fields:{[bp]:{stringValue:Tp},[Sp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&vl(s)&&(s=Go(s)),s&&(a.fields[Ap]=s),{mapValue:a}}(t,e):n instanceof qn?zp(n,e):n instanceof zn?Gp(n,e):function(i,s){let a=qp(i,s),u=Nf(a)+Nf(i.Ee);return $c(a)&&$c(i.Ee)?jp(u):Al(i.serializer,u)}(n,e)}function hw(n,e,t){return n instanceof qn?zp(n,e):n instanceof zn?Gp(n,e):t}function qp(n,e){return n instanceof Cr?function(r){return $c(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Pr=class extends Rr{},qn=class extends Rr{constructor(e){super(),this.elements=e}};function zp(n,e){let t=$p(e);for(let r of n.elements)t.some(i=>Rt(i,r))||t.push(r);return{arrayValue:{values:t}}}var zn=class extends Rr{constructor(e){super(),this.elements=e}};function Gp(n,e){let t=$p(e);for(let r of n.elements)t=t.filter(i=>!Rt(i,r));return{arrayValue:{values:t}}}var Cr=class extends Rr{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function Nf(n){return me(n.integerValue||n.doubleValue)}function $p(n){return El(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function dw(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof qn&&i instanceof qn||r instanceof zn&&i instanceof zn?vr(r.elements,i.elements,Rt):r instanceof Cr&&i instanceof Cr?Rt(r.Ee,i.Ee):r instanceof Pr&&i instanceof Pr}(n.transform,e.transform)}var ru=class{constructor(e,t){this.version=e,this.transformResults=t}},rt=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function oo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var kr=class{};function Hp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Dr(n.key,rt.none()):new Gn(n.key,n.data,rt.none());{let t=n.data,r=et.empty(),i=new xe(tt.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Ct(n.key,r,new at(i.toArray()),rt.none())}}function fw(n,e,t){n instanceof Gn?function(i,s,a){let u=i.value.clone(),l=xf(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Ct?function(i,s,a){if(!oo(i.precondition,s))return void s.convertToUnknownDocument(a.version);let u=xf(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Wp(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function bi(n,e,t,r){return n instanceof Gn?function(s,a,u,l){if(!oo(s.precondition,a))return u;let d=s.value.clone(),p=Vf(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ct?function(s,a,u,l){if(!oo(s.precondition,a))return u;let d=Vf(s.fieldTransforms,l,a),p=a.data;return p.setAll(Wp(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(s,a,u){return oo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function pw(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=qp(r.transform,i||null);s!=null&&(t===null&&(t=et.empty()),t.set(r.field,s))}return t||null}function Of(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vr(r,i,(s,a)=>dw(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Gn=class extends kr{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Ct=class extends kr{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Wp(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function xf(n,e,t){let r=new Map;le(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,hw(a,u,t[i]))}return r}function Vf(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,lw(s,a,e))}return r}var Dr=class extends kr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},iu=class extends kr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var su=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&fw(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=bi(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=bi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Bp();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;let l=Hp(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ie())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,(t,r)=>Of(t,r))&&vr(this.baseMutations,e.baseMutations,(t,r)=>Of(t,r))}},ou=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){le(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return sw}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var au=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var cu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var be,oe;function mw(n){switch(n){case D.OK:return W(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Kp(n){if(n===void 0)return Bt("GRPC error has no .code"),D.UNKNOWN;switch(n){case be.OK:return D.OK;case be.CANCELLED:return D.CANCELLED;case be.UNKNOWN:return D.UNKNOWN;case be.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case be.INTERNAL:return D.INTERNAL;case be.UNAVAILABLE:return D.UNAVAILABLE;case be.UNAUTHENTICATED:return D.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case be.NOT_FOUND:return D.NOT_FOUND;case be.ALREADY_EXISTS:return D.ALREADY_EXISTS;case be.PERMISSION_DENIED:return D.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case be.ABORTED:return D.ABORTED;case be.OUT_OF_RANGE:return D.OUT_OF_RANGE;case be.UNIMPLEMENTED:return D.UNIMPLEMENTED;case be.DATA_LOSS:return D.DATA_LOSS;default:return W(39323,{code:n})}}(oe=be||(be={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";var Lf=null;var gw=new Ft([4294967295,4294967295],0);function Mf(n){let e=sp().encode(n),t=new Tc;return t.update(e),new Uint8Array(t.digest())}function Ff(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ft([t,r],0),new Ft([i,s],0)]}var uu=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Mn(`Invalid padding: ${t}`);if(r<0)throw new Mn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ft.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Ft.fromNumber(r)));return i.compare(gw)===1&&(i=new Ft([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=Mf(e),[r,i]=Ff(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;let t=Mf(e),[r,i]=Ff(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);this.we(a)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Mn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var go=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(X.min(),i,new we(ee),Gt(),ie())}},ki=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,ie(),ie(),ie())}};var gr=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},_o=class{constructor(e,t){this.targetId=e,this.De=t}},yo=class{constructor(e,t,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},vo=class{constructor(){this.ve=0,this.Ce=Uf(),this.Fe=$e.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ie(),t=ie(),r=ie();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new ki(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Uf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},lu=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=Gt(),this.je=no(),this.Je=no(),this.He=new we(ee)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(tu(s))if(r===0){let a=new H(s.path);this.Xe(t,a,dt.newNoDocument(a,X.min()))}else le(r===1,20013,{expectedCount:r});else{let a=this.ot(t);if(a!==r){let u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}Lf?.ct(function(p,_,I,k,x){var B,V,Z,K,J,ce;let Ie={localCacheCount:p,existenceFilterCount:_.count,databaseId:I.database,projectId:I.projectId},re=_.unchangedNames;return re&&(Ie.bloomFilter={applied:x===0,hashCount:(B=re?.hashCount)!==null&&B!==void 0?B:0,bitmapLength:(K=(Z=(V=re?.bits)===null||V===void 0?void 0:V.bitmap)===null||Z===void 0?void 0:Z.length)!==null&&K!==void 0?K:0,padding:(ce=(J=re?.bits)===null||J===void 0?void 0:J.padding)!==null&&ce!==void 0?ce:0,mightContain:b=>{var m;return(m=k?.mightContain(b))!==null&&m!==void 0&&m}}),Ie}(a,e.De,this.We.lt(),u,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,u;try{a=qt(r).toUint8Array()}catch(l){if(l instanceof ho)return fn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new uu(a,i,s)}catch(l){return fn(l instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,a)=>{let u=this.st(a);if(u){if(s.current&&tu(u.target)){let l=new H(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,dt.newNoDocument(l,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}});let r=ie();this.Je.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{let d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));let i=new go(e,t,this.He,this.ze,r);return this.ze=Gt(),this.je=no(),this.Je=no(),this.He=new we(ee),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new vo,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new xe(ee),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new xe(ee),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new vo),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function no(){return new we(H.comparator)}function Uf(){return new we(H.comparator)}var _w={asc:"ASCENDING",desc:"DESCENDING"},yw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vw={and:"AND",or:"OR"},hu=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function du(n,e){return n.useProto3Json||zo(e)?e:{value:e}}function wo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ww(n,e){return wo(n,e.toTimestamp())}function St(n){return le(!!n,49232),X.fromTimestamp(function(t){let r=jt(t);return new Re(r.seconds,r.nanos)}(n))}function Sl(n,e){return fu(n,e).canonicalString()}function fu(n,e){let t=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Jp(n){let e=_e.fromString(n);return le(tm(e),10190,{key:e.toString()}),e}function pu(n,e){return Sl(n.databaseId,e.path)}function Cc(n,e){let t=Jp(e);if(t.get(1)!==n.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Xp(t))}function Yp(n,e){return Sl(n.databaseId,e)}function Iw(n){let e=Jp(n);return e.length===4?_e.emptyPath():Xp(e)}function mu(n){return new _e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xp(n){return le(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Bf(n,e,t){return{name:pu(n,e),fields:t.value.mapValue.fields}}function Ew(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(le(p===void 0||typeof p=="string",58123),$e.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),$e.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let p=d.code===void 0?D.UNKNOWN:Kp(d.code);return new z(p,d.message||"")}(a);t=new yo(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Cc(n,r.document.name),s=St(r.document.updateTime),a=r.document.createTime?St(r.document.createTime):X.min(),u=new et({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(i,s,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new gr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Cc(n,r.document),s=r.readTime?St(r.readTime):X.min(),a=dt.newNoDocument(i,s),u=r.removedTargetIds||[];t=new gr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Cc(n,r.document),s=r.removedTargetIds||[];t=new gr([],s,i,null)}else{if(!("filter"in e))return W(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new cu(i,s),u=r.targetId;t=new _o(u,a)}}return t}function Tw(n,e){let t;if(e instanceof Gn)t={update:Bf(n,e.key,e.value)};else if(e instanceof Dr)t={delete:pu(n,e.key)};else if(e instanceof Ct)t={update:Bf(n,e.key,e.data),updateMask:Nw(e.fieldMask)};else{if(!(e instanceof iu))return W(16599,{Rt:e.type});t={verify:pu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let u=a.transform;if(u instanceof Pr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof zn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Cr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw W(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ww(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(n,e.precondition)),t}function bw(n,e){return n&&n.length>0?(le(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?St(i.updateTime):St(s);return a.isEqual(X.min())&&(a=St(s)),new ru(a,i.transformResults||[])}(t,e))):[]}function Aw(n,e){return{documents:[Yp(n,e.path)]}}function Sw(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Yp(n,i);let s=function(d){if(d.length!==0)return em(Pt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(p=>function(I){return{field:fr(I.field),direction:Cw(I.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=du(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function Rw(n){let e=Iw(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){le(r===1,65062);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(_){let I=Zp(_);return I instanceof Pt&&Np(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(I=>function(x){return new Ar(pr(x.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(I))}(t.orderBy));let u=null;t.limit&&(u=function(_){let I;return I=typeof _=="object"?_.value:_,zo(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(_){let I=!!_.before,k=_.values||[];return new br(k,I)}(t.startAt));let d=null;return t.endAt&&(d=function(_){let I=!_.before,k=_.values||[];return new br(k,I)}(t.endAt)),Zv(e,i,a,s,u,"F",l,d)}function Pw(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=pr(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=pr(t.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=pr(t.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=pr(t.unaryFilter.field);return ke.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(t){return ke.create(pr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Pt.create(t.compositeFilter.filters.map(r=>Zp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(n):W(30097,{filter:n})}function Cw(n){return _w[n]}function kw(n){return yw[n]}function Dw(n){return vw[n]}function fr(n){return{fieldPath:n.canonicalString()}}function pr(n){return tt.fromServerFormat(n.fieldPath)}function em(n){return n instanceof ke?function(t){if(t.op==="=="){if(Rf(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NAN"}};if(Sf(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Rf(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NAN"}};if(Sf(t.value))return{unaryFilter:{field:fr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fr(t.field),op:kw(t.op),value:t.value}}}(n):n instanceof Pt?function(t){let r=t.getFilters().map(i=>em(i));return r.length===1?r[0]:{compositeFilter:{op:Dw(t.op),filters:r}}}(n):W(54877,{filter:n})}function Nw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Di=class n{constructor(e,t,r,i,s=X.min(),a=X.min(),u=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var gu=class{constructor(e){this.gt=e}};function Ow(n){let e=Rw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?nu(e,e.limit,"L"):e}var Io=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(me(e.integerValue));else if("doubleValue"in e){let r=me(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Ri(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=jt(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(qt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?Cp(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Pp(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):W(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let a=Ir,u=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(me(u)),this.xt(a,t),this.Dt(s[a],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),H.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};Io.Ut=new Io;var _u=class{constructor(){this.Dn=new yu}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(jn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}},yu=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new xe(_e.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xe(_e.comparator)).toArray()}};var VT=new Uint8Array(0);var jf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nm=41943040,ot=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(nm,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);var Ni=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var qf="LruGarbageCollector",xw=1048576;function zf([n,e],[t,r]){let i=ee(n,t);return i===0?ee(e,r):i}var vu=class{constructor(e){this.Tr=e,this.buffer=new xe(zf),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();zf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},wu=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){q(qf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mr(t)?q(qf,"Ignoring IndexedDB error during garbage collection: ",t):await Lr(t)}await this.Rr(3e5)})}},Iu=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(wr.ue);let r=new vu(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(jf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jf):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,u,l,d,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i))).next(_=>(r=_,u=Date.now(),this.removeTargets(e,r,t))).next(_=>(s=_,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),hr()<=ne.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${_} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:_})))}};function Vw(n,e){return new Iu(n,e)}var Eu=class{constructor(){this.changes=new zt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Tu=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var bu=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&bi(r.mutation,i,at.empty(),Re.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ie()){let i=Ln();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=wi();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=Ln();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ie()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=Gt(),a=Ti(),u=function(){return Ti()}();return t.forEach((l,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ct)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),bi(p.mutation,d,p.mutation.getFieldMask(),Re.now())):a.set(d.key,at.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var _;return u.set(d,new Tu(p,(_=a.get(d))!==null&&_!==void 0?_:null))}),u))}recalculateAndSaveOverlays(e,t){let r=Ti(),i=new we((a,u)=>a-u),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let p=r.get(l)||at.empty();p=u.applyToLocalView(d,p),r.set(l,p);let _=(i.get(u.batchId)||ie()).add(l);i=i.insert(u.batchId,_)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let l=u.getNext(),d=l.key,p=l.value,_=Bp();p.forEach(I=>{if(!s.has(I)){let k=Hp(t.get(I),r.get(I));k!==null&&_.set(I,k),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ew(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(Ln()),u=Si,l=s;return a.next(d=>N.forEach(d,(p,_)=>(u<_.largestBatchId&&(u=_.largestBatchId),s.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{l=l.insert(p,I)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,ie())).next(p=>({batchId:u,changes:Up(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=wi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=wi();return this.indexManager.getCollectionParents(e,s).next(u=>N.forEach(u,l=>{let d=function(_,I){return new Sr(I,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((_,I)=>{a=a.insert(_,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,dt.newInvalidDocument(p)))});let u=wi();return a.forEach((l,d)=>{let p=s.get(l);p!==void 0&&bi(p.mutation,d,at.empty(),Re.now()),Wo(t,d)&&(u=u.insert(l,d))}),u})}};var Au=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:St(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:Ow(i.bundledQuery),readTime:St(i.readTime)}}(t)),N.resolve()}};var Su=class{constructor(){this.overlays=new we(H.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){let r=Ln();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){let i=Ln(),s=t.length+1,a=new H(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new we((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Ln(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let u=Ln(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return N.resolve(u)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new au(t,r));let s=this.kr.get(t);s===void 0&&(s=ie(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var Ru=class{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}};var Oi=class{constructor(){this.qr=new xe(Ae.Qr),this.$r=new xe(Ae.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new Ae(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ae(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new H(new _e([])),r=new Ae(t,e),i=new Ae(t,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new H(new _e([])),r=new Ae(t,e),i=new Ae(t,e+1),s=ie();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new Ae(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},Ae=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return H.comparator(e.key,t.key)||ee(e.Hr,t.Hr)}static Ur(e,t){return ee(e.Hr,t.Hr)||H.comparator(e.key,t.key)}};var Pu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new xe(Ae.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new su(s,t,r,i);this.mutationQueue.push(a);for(let u of i)this.Yr=this.Yr.add(new Ae(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?yl:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new Ae(t,0),i=new Ae(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{let u=this.Zr(a.Hr);s.push(u)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(ee);return t.forEach(i=>{let s=new Ae(i,0),a=new Ae(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],u=>{r=r.add(u.Hr)})}),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;H.isDocumentKey(s)||(s=s.child(""));let a=new Ae(new H(s),0),u=new xe(ee);return this.Yr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Hr)),!0)},a),N.resolve(this.ei(u))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){le(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(t.mutations,i=>{let s=new Ae(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new Ae(t,0),i=this.Yr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Cu=class{constructor(e){this.ni=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=Gt();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Gt(),a=t.path,u=new H(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){let{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||xv(Ov(p),r)<=0||(i.has(p.key)||Wo(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W(9500)}ri(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ku(this)}getSize(e){return N.resolve(this.size)}},ku=class extends Eu{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Du=class{constructor(e){this.persistence=e,this.ii=new zt(t=>Tl(t),bl),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.si=0,this.oi=new Oi,this.targetCount=0,this._i=Ni.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new Ni(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}};var Eo=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new wr(0),this.ci=!1,this.ci=!0,this.li=new Ru,this.referenceDelegate=e(this),this.hi=new Du(this),this.indexManager=new _u,this.remoteDocumentCache=function(i){return new Cu(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new gu(t),this.Ti=new Au(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Su,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Pu(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);let i=new Nu(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return N.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},Nu=class extends qc{constructor(e){super(),this.currentSequenceNumber=e}},Ou=class n{constructor(e){this.persistence=e,this.Ai=new Oi,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw W(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,r=>{let i=H.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,X.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},To=class n{constructor(e,t){this.persistence=e,this.gi=new zt(r=>Fv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Vw(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return N.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,s.removeEntry(a,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=io(e.data.value)),t}Sr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var xu=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=ie(),i=ie();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var Vu=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Lu=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return $h()?8:Lv(Ne())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new Vu;return this.ws(e,t,a).next(u=>{if(s.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(hr()<=ne.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",dr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(hr()<=ne.DEBUG&&q("QueryEngine","Query:",dr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(hr()<=ne.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",dr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,At(t))):N.resolve())}ps(e,t){if(Df(t))return N.resolve(null);let r=At(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=nu(t,null,"F"),r=At(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=ie(...s);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,nu(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,i){return Df(t)||i.isEqual(X.min())?N.resolve(null):this.gs.getDocuments(e,r).next(s=>{let a=this.bs(t,s);return this.Ds(t,a,r,i)?N.resolve(null):(hr()<=ne.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),dr(t)),this.vs(e,a,t,Nv(i,Si)).next(u=>u))})}bs(e,t){let r=new xe(Mp(e));return t.forEach((i,s)=>{Wo(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return hr()<=ne.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",dr(t)),this.gs.getDocumentsMatchingQuery(e,t,jn.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Rl="LocalStore",Lw=3e8,Mu=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new we(ee),this.Ms=new zt(s=>Tl(s),bl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bu(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function Mw(n,e,t,r){return new Mu(n,e,t,r)}async function rm(n,e){let t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],u=[],l=ie();for(let d of i){a.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}for(let d of s){u.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Fw(n,e){let t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){let _=d.batch,I=_.keys(),k=N.resolve();return I.forEach(x=>{k=k.next(()=>p.getEntry(l,x)).next(B=>{let V=d.docVersions.get(x);le(V!==null,48541),B.version.compareTo(V)<0&&(_.applyToRemoteDocument(B,d),B.isValidDocument()&&(B.setReadTime(d.commitVersion),p.addEntry(B)))})}),k.next(()=>u.mutationQueue.removeMutationBatch(l,_))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=ie();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function im(n){let e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Uw(n,e){let t=Y(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let u=[];e.targetChanges.forEach((p,_)=>{let I=i.get(_);if(!I)return;u.push(t.hi.removeMatchingKeys(s,p.removedDocuments,_).next(()=>t.hi.addMatchingKeys(s,p.addedDocuments,_)));let k=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?k=k.withResumeToken($e.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),i=i.insert(_,k),function(B,V,Z){return B.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Lw?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(I,k,p)&&u.push(t.hi.updateTargetData(s,k))});let l=Gt(),d=ie();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),u.push(Bw(s,a,e.documentUpdates).next(p=>{l=p.Ls,d=p.ks})),!r.isEqual(X.min())){let p=t.hi.getLastRemoteSnapshotVersion(s).next(_=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(p)}return N.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=i,s))}function Bw(n,e,t){let r=ie(),i=ie();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Gt();return t.forEach((u,l)=>{let d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):q(Rl,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:i}})}function jw(n,e){let t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=yl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qw(n,e){let t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.hi.allocateTargetId(r).next(a=>(i=new Di(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Fu(n,e,t){let r=Y(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Mr(a))throw a;q(Rl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Gf(n,e,t){let r=Y(n),i=X.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){let _=Y(l),I=_.Ms.get(p);return I!==void 0?N.resolve(_.Fs.get(I)):_.hi.getTargetData(d,p)}(r,a,At(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:X.min(),t?s:ie())).next(u=>(zw(r,nw(e),u),{documents:u,qs:s})))}function zw(n,e,t){let r=n.xs.get(e)||X.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var bo=class{constructor(){this.activeTargetIds=cw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Uu=class{constructor(){this.Fo=new bo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new bo,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Bu=class{xo(e){}shutdown(){}};var $f="ConnectivityMonitor",Ao=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){q($f,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){q($f,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var ro=null;function ju(){return ro===null?ro=function(){return 268435456+Math.round(2147483648*Math.random())}():ro++,"0x"+ro.toString(16)}var kc="RestConnection",Gw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},qu=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===fo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let a=ju(),u=this.Go(e,t.toUriEncodedString());q(kc,`Sending RPC '${e}' ${a}:`,u,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);let{host:d}=new URL(u),p=Zt(d);return this.jo(e,u,l,r,p).then(_=>(q(kc,`Received RPC '${e}' ${a}: `,_),_),_=>{throw fn(kc,`RPC '${e}' ${a} failed with error: `,_,"url: ",u,"request:",r),_})}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=Gw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var zu=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var Ge="WebChannelConnection",Gu=class extends qu{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let a=ju();return new Promise((u,l)=>{let d=new bc;d.setWithCredentials(!0),d.listenOnce(Ac.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case vi.NO_ERROR:let _=d.getResponseJson();q(Ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),u(_);break;case vi.TIMEOUT:q(Ge,`RPC '${e}' ${a} timed out`),l(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case vi.HTTP_ERROR:let I=d.getStatus();if(q(Ge,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);let x=k?.error;if(x&&x.status&&x.message){let B=function(Z){let K=Z.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(K)>=0?K:D.UNKNOWN}(x.status);l(new z(B,x.message))}else l(new z(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new z(D.UNAVAILABLE,"Connection failed."));break;default:W(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{q(Ge,`RPC '${e}' ${a} completed.`)}});let p=JSON.stringify(i);q(Ge,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)})}P_(e,t,r){let i=ju(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pc(),u=Rc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let p=s.join("");q(Ge,`Creating RPC '${e}' stream ${i}: ${p}`,l);let _=a.createWebChannel(p,l);this.T_(_);let I=!1,k=!1,x=new zu({Ho:V=>{k?q(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(I||(q(Ge,`Opening RPC '${e}' stream ${i} transport.`),_.open(),I=!0),q(Ge,`RPC '${e}' stream ${i} sending:`,V),_.send(V))},Yo:()=>_.close()}),B=(V,Z,K)=>{V.listen(Z,J=>{try{K(J)}catch(ce){setTimeout(()=>{throw ce},0)}})};return B(_,lr.EventType.OPEN,()=>{k||(q(Ge,`RPC '${e}' stream ${i} transport opened.`),x.s_())}),B(_,lr.EventType.CLOSE,()=>{k||(k=!0,q(Ge,`RPC '${e}' stream ${i} transport closed`),x.__(),this.I_(_))}),B(_,lr.EventType.ERROR,V=>{k||(k=!0,fn(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),x.__(new z(D.UNAVAILABLE,"The operation could not be completed")))}),B(_,lr.EventType.MESSAGE,V=>{var Z;if(!k){let K=V.data[0];le(!!K,16349);let J=K,ce=J?.error||((Z=J[0])===null||Z===void 0?void 0:Z.error);if(ce){q(Ge,`RPC '${e}' stream ${i} received error:`,ce);let Ie=ce.status,re=function(v){let T=be[v];if(T!==void 0)return Kp(T)}(Ie),b=ce.message;re===void 0&&(re=D.INTERNAL,b="Unknown error status: "+Ie+" with message "+ce.message),k=!0,x.__(new z(re,b)),_.close()}else q(Ge,`RPC '${e}' stream ${i} received:`,K),x.a_(K)}}),B(u,Sc.STAT_EVENT,V=>{V.stat===eo.PROXY?q(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===eo.NOPROXY&&q(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.o_()},0),x}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function Dc(){return typeof document<"u"?document:null}function Ko(n){return new hu(n,!0)}var So=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var Hf="PersistentStream",Ro=class{constructor(e,t,r,i,s,a,u,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new So(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Bt(t.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return q(Hf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(q(Hf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},$u=class extends Ro{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=Ew(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?St(a.readTime):X.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=mu(this.serializer),t.addTarget=function(s,a){let u,l=a.target;if(u=tu(l)?{documents:Aw(s,l)}:{query:Sw(s,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Qp(s,a.resumeToken);let d=du(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(X.min())>0){u.readTime=wo(s,a.snapshotVersion.toTimestamp());let d=du(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=Pw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=mu(this.serializer),t.removeTarget=e,this.k_(t)}},Hu=class extends Ro{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=bw(e.writeResults,e.commitTime),r=St(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=mu(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Tw(this.serializer,r))};this.k_(t)}};var Wu=class{},Ku=class extends Wu{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,fu(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(D.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,fu(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(D.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},Qu=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Bt(t),this._a=!1):q("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var $n="RemoteStore",Ju=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Wn(this)&&(q($n,"Restarting streams for network reachability change."),await async function(l){let d=Y(l);d.Ia.add(4),await Mi(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Qo(d)}(this))})}),this.Aa=new Qu(r,i)}};async function Qo(n){if(Wn(n))for(let e of n.da)await e(!0)}async function Mi(n){for(let e of n.da)await e(!1)}function sm(n,e){let t=Y(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Dl(t)?kl(t):Fr(t).x_()&&Cl(t,e))}function Pl(n,e){let t=Y(n),r=Fr(t);t.Ta.delete(e),r.x_()&&om(t,e),t.Ta.size===0&&(r.x_()?r.B_():Wn(t)&&t.Aa.set("Unknown"))}function Cl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fr(n).H_(e)}function om(n,e){n.Ra.$e(e),Fr(n).Y_(e)}function kl(n){n.Ra=new lu({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.Aa.aa()}function Dl(n){return Wn(n)&&!Fr(n).M_()&&n.Ta.size>0}function Wn(n){return Y(n).Ia.size===0}function am(n){n.Ra=void 0}async function $w(n){n.Aa.set("Online")}async function Hw(n){n.Ta.forEach((e,t)=>{Cl(n,e)})}async function Ww(n,e){am(n),Dl(n)?(n.Aa.la(e),kl(n)):n.Aa.set("Unknown")}async function Kw(n,e,t){if(n.Aa.set("Online"),e instanceof yo&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))}(n,e)}catch(r){q($n,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Po(n,r)}else if(e instanceof gr?n.Ra.Ye(e):e instanceof _o?n.Ra.it(e):n.Ra.et(e),!t.isEqual(X.min()))try{let r=await im(n.localStore);t.compareTo(r)>=0&&await function(s,a){let u=s.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let p=s.Ta.get(d);p&&s.Ta.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{let p=s.Ta.get(l);if(!p)return;s.Ta.set(l,p.withResumeToken($e.EMPTY_BYTE_STRING,p.snapshotVersion)),om(s,l);let _=new Di(p.target,l,d,p.sequenceNumber);Cl(s,_)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){q($n,"Failed to raise snapshot:",r),await Po(n,r)}}async function Po(n,e,t){if(!Mr(e))throw e;n.Ia.add(1),await Mi(n),n.Aa.set("Offline"),t||(t=()=>im(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q($n,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Qo(n)})}function cm(n,e){return e().catch(t=>Po(n,t,e))}async function Jo(n){let e=Y(n),t=mn(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:yl;for(;Qw(e);)try{let i=await jw(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,Jw(e,i)}catch(i){await Po(e,i)}um(e)&&lm(e)}function Qw(n){return Wn(n)&&n.Pa.length<10}function Jw(n,e){n.Pa.push(e);let t=mn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function um(n){return Wn(n)&&!mn(n).M_()&&n.Pa.length>0}function lm(n){mn(n).start()}async function Yw(n){mn(n).na()}async function Xw(n){let e=mn(n);for(let t of n.Pa)e.X_(t.mutations)}async function Zw(n,e,t){let r=n.Pa.shift(),i=ou.from(r,e,t);await cm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Jo(n)}async function eI(n,e){e&&mn(n).Z_&&await async function(r,i){if(function(a){return mw(a)&&a!==D.ABORTED}(i.code)){let s=r.Pa.shift();mn(r).N_(),await cm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Jo(r)}}(n,e),um(n)&&lm(n)}async function Wf(n,e){let t=Y(n);t.asyncQueue.verifyOperationInProgress(),q($n,"RemoteStore received new credentials");let r=Wn(t);t.Ia.add(3),await Mi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Qo(t)}async function tI(n,e){let t=Y(n);e?(t.Ia.delete(2),await Qo(t)):e||(t.Ia.add(2),await Mi(t),t.Aa.set("Unknown"))}function Fr(n){return n.Va||(n.Va=function(t,r,i){let s=Y(t);return s.ia(),new $u(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:$w.bind(null,n),e_:Hw.bind(null,n),n_:Ww.bind(null,n),J_:Kw.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Dl(n)?kl(n):n.Aa.set("Unknown")):(await n.Va.stop(),am(n))})),n.Va}function mn(n){return n.ma||(n.ma=function(t,r,i){let s=Y(t);return s.ia(),new Hu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Yw.bind(null,n),n_:eI.bind(null,n),ea:Xw.bind(null,n),ta:Zw.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Jo(n)):(await n.ma.stop(),n.Pa.length>0&&(q($n,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var Yu=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,u=new n(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Nl(n,e){if(Bt("AsyncQueue",`${e}: ${n}`),Mr(n))return new z(D.UNAVAILABLE,`${e}: ${n}`);throw n}var Co=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=wi(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var ko=class{constructor(){this.fa=new we(H.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):W(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},Nr=class n{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,Co.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Xu=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},Zu=class{constructor(){this.queries=Kf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=Y(t),s=i.queries;i.queries=Kf(),s.forEach((a,u)=>{for(let l of u.wa)l.onError(r)})})(this,new z(D.ABORTED,"Firestore shutting down"))}};function Kf(){return new zt(n=>Lp(n),Ho)}async function hm(n,e){let t=Y(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new Xu,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Nl(a,`Initialization of query '${dr(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Ol(t)}async function dm(n,e){let t=Y(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function nI(n,e){let t=Y(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let u of a.wa)u.Ca(i)&&(r=!0);a.ya=i}}r&&Ol(t)}function rI(n,e,t){let r=Y(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function Ol(n){n.Da.forEach(e=>{e.next()})}var el,Qf;(Qf=el||(el={})).Fa="default",Qf.Cache="cache";var Do=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Nr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==el.Cache}};var No=class{constructor(e){this.key=e}},Oo=class{constructor(e){this.key=e}},tl=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ie(),this.mutatedKeys=ie(),this.Xa=Mp(e),this.eu=new Co(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new ko,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,_)=>{let I=i.get(p),k=Wo(this.query,_)?_:null,x=!!I&&this.mutatedKeys.has(I.key),B=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),V=!1;I&&k?I.data.isEqual(k.data)?x!==B&&(r.track({type:3,doc:k}),V=!0):this.iu(I,k)||(r.track({type:2,doc:k}),V=!0,(l&&this.Xa(k,l)>0||d&&this.Xa(k,d)<0)&&(u=!0)):!I&&k?(r.track({type:0,doc:k}),V=!0):I&&!k&&(r.track({type:1,doc:I}),V=!0,(l||d)&&(u=!0)),V&&(k?(a=a.add(k),s=B?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let a=e.ru.pa();a.sort((p,_)=>function(k,x){let B=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{At:V})}};return B(k)-B(x)}(p.type,_.type)||this.Xa(p.doc,_.doc)),this.su(r),i=i!=null&&i;let u=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new Nr(this.query,e.eu,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ko,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=ie(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Oo(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new No(r))}),t}uu(e){this.Ha=e.qs,this.Za=ie();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Nr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},xl="SyncEngine",nl=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},rl=class{constructor(e){this.key=e,this.lu=!1}},il=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new zt(u=>Lp(u),Ho),this.Tu=new Map,this.Iu=new Set,this.du=new we(H.comparator),this.Eu=new Map,this.Au=new Oi,this.Ru={},this.Vu=new Map,this.mu=Ni.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function iI(n,e,t=!0){let r=ym(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await fm(r,e,t,!0),i}async function sI(n,e){let t=ym(n);await fm(t,e,!0,!1)}async function fm(n,e,t,r){let i=await qw(n.localStore,At(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),u;return r&&(u=await oI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&sm(n.remoteStore,i),u}async function oI(n,e,t,r,i){n.gu=(_,I,k)=>async function(B,V,Z,K){let J=V.view.nu(Z);J.Ds&&(J=await Gf(B.localStore,V.query,!1).then(({documents:b})=>V.view.nu(b,J)));let ce=K&&K.targetChanges.get(V.targetId),Ie=K&&K.targetMismatches.get(V.targetId)!=null,re=V.view.applyChanges(J,B.isPrimaryClient,ce,Ie);return Yf(B,V.targetId,re._u),re.snapshot}(n,_,I,k);let s=await Gf(n.localStore,e,!0),a=new tl(e,s.qs),u=a.nu(s.documents),l=ki.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);Yf(n,t,d._u);let p=new nl(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function aI(n,e,t){let r=Y(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(a=>!Ho(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Pl(r.remoteStore,i.targetId),sl(r,i.targetId)}).catch(Lr)):(sl(r,i.targetId),await Fu(r.localStore,i.targetId,!0))}async function cI(n,e){let t=Y(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Pl(t.remoteStore,r.targetId))}async function uI(n,e,t){let r=gI(n);try{let i=await function(a,u){let l=Y(a),d=Re.now(),p=u.reduce((k,x)=>k.add(x.key),ie()),_,I;return l.persistence.runTransaction("Locally write mutations","readwrite",k=>{let x=Gt(),B=ie();return l.Os.getEntries(k,p).next(V=>{x=V,x.forEach((Z,K)=>{K.isValidDocument()||(B=B.add(Z))})}).next(()=>l.localDocuments.getOverlayedDocuments(k,x)).next(V=>{_=V;let Z=[];for(let K of u){let J=pw(K,_.get(K.key).overlayedDocument);J!=null&&Z.push(new Ct(K.key,J,kp(J.value.mapValue),rt.exists(!0)))}return l.mutationQueue.addMutationBatch(k,d,Z,u)}).next(V=>{I=V;let Z=V.applyToLocalDocumentSet(_,B);return l.documentOverlayCache.saveOverlays(k,V.batchId,Z)})}).then(()=>({batchId:I.batchId,changes:Up(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new we(ee)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,i.batchId,t),await Fi(r,i.changes),await Jo(r.remoteStore)}catch(i){let s=Nl(i,"Failed to persist write");t.reject(s)}}async function pm(n,e){let t=Y(n);try{let r=await Uw(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Eu.get(s);a&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?le(a.lu,14607):i.removedDocuments.size>0&&(le(a.lu,42227),a.lu=!1))}),await Fi(t,r,e)}catch(r){await Lr(r)}}function Jf(n,e,t){let r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,a)=>{let u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let l=Y(a);l.onlineState=u;let d=!1;l.queries.forEach((p,_)=>{for(let I of _.wa)I.va(u)&&(d=!0)}),d&&Ol(l)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lI(n,e,t){let r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let a=new we(H.comparator);a=a.insert(s,dt.newNoDocument(s,X.min()));let u=ie().add(s),l=new go(X.min(),new Map,new we(ee),a,u);await pm(r,l),r.du=r.du.remove(s),r.Eu.delete(e),Vl(r)}else await Fu(r.localStore,e,!1).then(()=>sl(r,e,t)).catch(Lr)}async function hI(n,e){let t=Y(n),r=e.batch.batchId;try{let i=await Fw(t.localStore,e);gm(t,r,null),mm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(t,i)}catch(i){await Lr(i)}}async function dI(n,e,t){let r=Y(n);try{let i=await function(a,u){let l=Y(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(_=>(le(_!==null,37113),p=_.keys(),l.mutationQueue.removeMutationBatch(d,_))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);gm(r,e,t),mm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Fi(r,i)}catch(i){await Lr(i)}}function mm(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function gm(n,e,t){let r=Y(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function sl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||_m(n,r)})}function _m(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(Pl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Vl(n))}function Yf(n,e,t){for(let r of t)r instanceof No?(n.Au.addReference(r.key,e),fI(n,r)):r instanceof Oo?(q(xl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||_m(n,r.key)):W(19791,{yu:r})}function fI(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(q(xl,"New document in limbo: "+t),n.Iu.add(r),Vl(n))}function Vl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new H(_e.fromString(e)),r=n.mu.next();n.Eu.set(r,new rl(t)),n.du=n.du.insert(t,r),sm(n.remoteStore,new Di(At($o(t.path)),r,"TargetPurposeLimboResolution",wr.ue))}}async function Fi(n,e,t){let r=Y(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let _=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,_?"current":"not-current")}if(d){i.push(d);let _=xu.Es(l.targetId,d);s.push(_)}}))}),await Promise.all(a),r.hu.J_(i),await async function(l,d){let p=Y(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>N.forEach(d,I=>N.forEach(I.Is,k=>p.persistence.referenceDelegate.addReference(_,I.targetId,k)).next(()=>N.forEach(I.ds,k=>p.persistence.referenceDelegate.removeReference(_,I.targetId,k)))))}catch(_){if(!Mr(_))throw _;q(Rl,"Failed to update sequence numbers: "+_)}for(let _ of d){let I=_.targetId;if(!_.fromCache){let k=p.Fs.get(I),x=k.snapshotVersion,B=k.withLastLimboFreeSnapshotVersion(x);p.Fs=p.Fs.insert(I,B)}}}(r.localStore,s))}async function pI(n,e){let t=Y(n);if(!t.currentUser.isEqual(e)){q(xl,"User change. New user:",e.toKey());let r=await rm(t.localStore,e);t.currentUser=e,function(s,a){s.Vu.forEach(u=>{u.forEach(l=>{l.reject(new z(D.CANCELLED,a))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fi(t,r.Bs)}}function mI(n,e){let t=Y(n),r=t.Eu.get(e);if(r&&r.lu)return ie().add(r.key);{let i=ie(),s=t.Tu.get(e);if(!s)return i;for(let a of s){let u=t.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}function ym(n){let e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lI.bind(null,e),e.hu.J_=nI.bind(null,e.eventManager),e.hu.pu=rI.bind(null,e.eventManager),e}function gI(n){let e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dI.bind(null,e),e}var Or=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ko(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Mw(this.persistence,new Lu,e.initialUser,this.serializer)}Du(e){return new Eo(Ou.Vi,this.serializer)}bu(e){return new Uu}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Or.provider={build:()=>new Or};var ol=class extends Or{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){le(this.persistence.referenceDelegate instanceof To,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new wu(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new Eo(r=>To.Vi(r,t),this.serializer)}};var xi=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pI.bind(null,this.syncEngine),await tI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zu}()}createDatastore(e){let t=Ko(e.databaseInfo.databaseId),r=function(s){return new Gu(s)}(e.databaseInfo);return function(s,a,u,l){return new Ku(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new Ju(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Jf(this.syncEngine,t,0),function(){return Ao.C()?new Ao:new Bu}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,p){let _=new il(i,s,a,u,l,d);return p&&(_.fu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=Y(i);q($n,"RemoteStore shutting down."),s.Ia.add(5),await Mi(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};xi.provider={build:()=>new xi};var xo=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Bt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var gn="FirestoreClient",al=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=Ai.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{q(gn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(gn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Nl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Nc(n,e){n.asyncQueue.verifyOperationInProgress(),q(gn,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{fn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{q("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{fn("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function Xf(n,e){n.asyncQueue.verifyOperationInProgress();let t=await _I(n);q(gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Wf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Wf(e.remoteStore,i)),n._onlineComponents=e}async function _I(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(gn,"Using user provided OfflineComponentProvider");try{await Nc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await Nc(n,new Or)}}else q(gn,"Using default OfflineComponentProvider"),await Nc(n,new ol(void 0));return n._offlineComponents}async function vm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(gn,"Using user provided OnlineComponentProvider"),await Xf(n,n._uninitializedComponentsProvider._online)):(q(gn,"Using default OnlineComponentProvider"),await Xf(n,new xi))),n._onlineComponents}function yI(n){return vm(n).then(e=>e.syncEngine)}async function cl(n){let e=await vm(n),t=e.eventManager;return t.onListen=iI.bind(null,e.syncEngine),t.onUnlisten=aI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cI.bind(null,e.syncEngine),t}function vI(n,e,t={}){let r=new Tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){let p=new xo({next:I=>{p.Ou(),a.enqueueAndForget(()=>dm(s,_));let k=I.docs.has(u);!k&&I.fromCache?d.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&I.fromCache&&l&&l.source==="server"?d.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),_=new Do($o(u.path),p,{includeMetadataChanges:!0,ka:!0});return hm(s,_)}(await cl(n),n.asyncQueue,e,t,r)),r.promise}function wm(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Zf=new Map;var Im="firestore.googleapis.com",ep=!0,Vo=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Im,this.ssl=ep}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ep;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xw)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},xr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xc;switch(r.type){case"firstParty":return new Fc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Zf.get(t);r&&(q("ComponentProvider","Removing Datastore"),Zf.delete(t),r.terminate())}(this),Promise.resolve()}};function wI(n,e,t,r={}){var i;n=nt(n,xr);let s=Zt(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(fs(`https://${l}`),ps("Firestore",!0)),a.host!==Im&&a.host!==l&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let d=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!gt(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,_;if(typeof r.mockUserToken=="string")p=r.mockUserToken,_=Oe.MOCK_USER;else{p=Uh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Oe(I)}n._authCredentials=new Vc(new ao(p,_))}}var Lo=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Ve=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Li(t,n._jsonSchema))return new n(e,r||null,new H(_e.fromString(t.referencePath)))}};Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:Se("string",Ve._jsonSchemaVersion),referencePath:Se("string")};var un=class n extends Lo{constructor(e,t,r){super(e,t,$o(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new H(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Em(n,e,...t){if(n=ge(n),op("collection","path",e),n instanceof xr){let r=_e.fromString(e,...t);return vf(r),new un(n,null,r)}{if(!(n instanceof Ve||n instanceof un))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(_e.fromString(e,...t));return vf(r),new un(n.firestore,null,r)}}function Ll(n,e,...t){if(n=ge(n),arguments.length===1&&(e=Ai.newId()),op("doc","path",e),n instanceof xr){let r=_e.fromString(e,...t);return yf(r),new Ve(n,null,new H(r))}{if(!(n instanceof Ve||n instanceof un))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(_e.fromString(e,...t));return yf(r),new Ve(n.firestore,n instanceof un?n.converter:null,new H(r))}}var tp="AsyncQueue",Mo=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new So(this,"async_queue_retry"),this.oc=()=>{let r=Dc();r&&q(tp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=Dc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=Dc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new Tt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Mr(e))throw e;q(tp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Bt("INTERNAL UNHANDLED ERROR: ",np(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=Yu.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&W(47125,{hc:np(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function np(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function rp(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var ft=class extends xr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Mo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Mo(e),this._firestoreClient=void 0,await e}}};function Tm(n,e){let t=typeof n=="object"?n:ys(),r=typeof n=="string"?n:e||fo,i=ri(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=Fh("firestore");s&&wI(i,...s)}return i}function Yo(n){if(n._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||II(n),n._firestoreClient}function II(n){var e,t,r;let i=n._freezeSettings(),s=function(u,l,d,p){return new zc(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,wm(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new al(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){let l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}var ln=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n($e.fromBase64String(e))}catch(t){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Li(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};ln._jsonSchemaVersion="firestore/bytes/1.0",ln._jsonSchema={type:Se("string",ln._jsonSchemaVersion),bytes:Se("string")};var Hn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Vi=class{constructor(e){this._methodName=e}};var hn=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(Li(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Se("string",hn._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};var dn=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Li(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new z(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};dn._jsonSchemaVersion="firestore/vectorValue/1.0",dn._jsonSchema={type:Se("string",dn._jsonSchemaVersion),vectorValues:Se("object")};var EI=/^__.*__$/,ul=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gn(e,this.data,t,this.fieldTransforms)}},Fo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ct(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function bm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ec:n})}}var ll=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Bo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(bm(this.Ec)&&EI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},hl=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ko(e)}Dc(e,t,r,i=!1){return new ll({Ec:e,methodName:t,bc:r,path:tt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Xo(n){let e=n._freezeSettings(),t=Ko(n._databaseId);return new hl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ml(n,e,t,r,i,s={}){let a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);Fl("Data must be an object, but it was:",a,r);let u=Rm(r,a),l,d;if(s.merge)l=new at(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let _ of s.mergeFields){let I=dl(e,_,t);if(!a.contains(I))throw new z(D.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Cm(p,I)||p.push(I)}l=new at(p),d=a.fieldTransforms.filter(_=>l.covers(_.field))}else l=null,d=a.fieldTransforms;return new ul(new et(u),l,d)}var Uo=class n extends Vi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Am(n,e,t,r){let i=n.Dc(1,e,t);Fl("Data must be an object, but it was:",i,r);let s=[],a=et.empty();_n(r,(l,d)=>{let p=Ul(e,l,t);d=ge(d);let _=i.gc(p);if(d instanceof Uo)s.push(p);else{let I=Zo(d,_);I!=null&&(s.push(p),a.set(p,I))}});let u=new at(s);return new Fo(a,u,i.fieldTransforms)}function Sm(n,e,t,r,i,s){let a=n.Dc(1,e,t),u=[dl(e,r,t)],l=[i];if(s.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<s.length;I+=2)u.push(dl(e,s[I])),l.push(s[I+1]);let d=[],p=et.empty();for(let I=u.length-1;I>=0;--I)if(!Cm(d,u[I])){let k=u[I],x=l[I];x=ge(x);let B=a.gc(k);if(x instanceof Uo)d.push(k);else{let V=Zo(x,B);V!=null&&(d.push(k),p.set(k,V))}}let _=new at(d);return new Fo(p,_,a.fieldTransforms)}function Zo(n,e){if(Pm(n=ge(n)))return Fl("Unsupported field value:",e,n),Rm(n,e);if(n instanceof Vi)return function(r,i){if(!bm(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let u of r){let l=Zo(u,i.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=Re.fromDate(r);return{timestampValue:wo(i.serializer,s)}}if(r instanceof Re){let s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(i.serializer,s)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ln)return{bytesValue:Qp(i.serializer,r._byteString)};if(r instanceof Ve){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dn)return function(a,u){return{mapValue:{fields:{[wl]:{stringValue:Il},[Ir]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Al(u.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${_l(r)}`)}(n,e)}function Rm(n,e){let t={};return Ep(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(n,(r,i)=>{let s=Zo(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Pm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Re||n instanceof hn||n instanceof ln||n instanceof Ve||n instanceof Vi||n instanceof dn)}function Fl(n,e,t){if(!Pm(t)||!ap(t)){let r=_l(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function dl(n,e,t){if((e=ge(e))instanceof Hn)return e._internalPath;if(typeof e=="string")return Ul(n,e);throw Bo("Field path arguments must be of type string or ",n,!1,void 0,t)}var TI=new RegExp("[~\\*/\\[\\]]");function Ul(n,e,t){if(e.search(TI)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hn(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bo(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new z(D.INVALID_ARGUMENT,u+n+l)}function Cm(n,e){return n.some(t=>t.isEqual(e))}var jo=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new fl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(km("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},fl=class extends jo{data(){return super.data()}};function km(n,e){return typeof e=="string"?Ul(n,e):e instanceof Hn?e._internalPath:e._delegate._internalPath}function bI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var pl=class{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return _n(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Ir].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>me(a.doubleValue));return new dn(s)}convertGeoPoint(e){return new hn(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Go(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){let t=jt(e);return new Re(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=_e.fromString(e);le(tm(r),9688,{name:e});let i=new po(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||Bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function Bl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Fn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Un=class n extends jo{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new _r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(km("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};Un._jsonSchemaVersion="firestore/documentSnapshot/1.0",Un._jsonSchema={type:Se("string",Un._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};var _r=class extends Un{data(e={}){return super.data(e)}},yr=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Fn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _r(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let l=new _r(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Fn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{let l=new _r(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Fn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:AI(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ai.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function AI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}function Dm(n){n=nt(n,Ve);let e=nt(n.firestore,ft);return vI(Yo(e),n._key).then(t=>Mm(e,n,t))}yr._jsonSchemaVersion="firestore/querySnapshot/1.0",yr._jsonSchema={type:Se("string",yr._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};var qo=class extends pl{constructor(e){super(),this.firestore=e}convertBytes(e){return new ln(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}};function Nm(n,e,t){n=nt(n,Ve);let r=nt(n.firestore,ft),i=Bl(n.converter,e,t);return Ui(r,[Ml(Xo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,rt.none())])}function Om(n,e,t,...r){n=nt(n,Ve);let i=nt(n.firestore,ft),s=Xo(i),a;return a=typeof(e=ge(e))=="string"||e instanceof Hn?Sm(s,"updateDoc",n._key,e,t,r):Am(s,"updateDoc",n._key,e),Ui(i,[a.toMutation(n._key,rt.exists(!0))])}function xm(n){return Ui(nt(n.firestore,ft),[new Dr(n._key,rt.none())])}function Vm(n,e){let t=nt(n.firestore,ft),r=Ll(n),i=Bl(n.converter,e);return Ui(t,[Ml(Xo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,rt.exists(!1))]).then(()=>r)}function Lm(n,...e){var t,r,i;n=ge(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||rp(e[a])||(s=e[a++]);let u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(rp(e[a])){let _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(r=_.error)===null||r===void 0?void 0:r.bind(_),e[a+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let l,d,p;if(n instanceof Ve)d=nt(n.firestore,ft),p=$o(n._key.path),l={next:_=>{e[a]&&e[a](Mm(d,n,_))},error:e[a+1],complete:e[a+2]};else{let _=nt(n,Lo);d=nt(_.firestore,ft),p=_._query;let I=new qo(d);l={next:k=>{e[a]&&e[a](new yr(d,I,_,k))},error:e[a+1],complete:e[a+2]},bI(n._query)}return function(I,k,x,B){let V=new xo(B),Z=new Do(k,V,x);return I.asyncQueue.enqueueAndForget(async()=>hm(await cl(I),Z)),()=>{V.Ou(),I.asyncQueue.enqueueAndForget(async()=>dm(await cl(I),Z))}}(Yo(d),p,u,l)}function Ui(n,e){return function(r,i){let s=new Tt;return r.asyncQueue.enqueueAndForget(async()=>uI(await yI(r),i,s)),s.promise}(Yo(n),e)}function Mm(n,e,t){let r=t.docs.get(e._key),i=new qo(n);return new Un(n,i,e._key,r,new Fn(t.hasPendingWrites,t.fromCache),e.converter)}var ml=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Xo(e)}set(e,t,r){this._verifyNotCommitted();let i=Oc(e,this._firestore),s=Bl(i.converter,t,r),a=Ml(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,rt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let s=Oc(e,this._firestore),a;return a=typeof(t=ge(t))=="string"||t instanceof Hn?Sm(this._dataReader,"WriteBatch.update",s._key,t,r,i):Am(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,rt.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Oc(e,this._firestore);return this._mutations=this._mutations.concat(new Dr(t._key,rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Oc(n,e){if((n=ge(n)).firestore!==e)throw new z(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Fm(n){return Yo(n=nt(n,ft)),new ml(n,e=>Ui(n,e))}(function(e,t=!0){(function(i){Vr=i})(rn),nn(new st("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),u=new ft(new Lc(r.getProvider("auth-internal")),new Uc(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new po(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),lt(pf,mf,e),lt(pf,mf,"esm2017")})();function SI(n){let e=Ba(n);return{auth:Ec(e),db:Tm(e)}}var Qe={pair:"2111",two:"221",trio:"311",full:"32",quad:"41",penta:"5",diff:"11111"},Hm=[{k:"sum_low",t:"Extremo baixo",s:"Soma 5\u201310",p:"28:1",f:n=>n.sum<=10?28:null},{k:"sum_small",t:"Pequeno",s:"Soma 5\u201317",p:"1:1",f:n=>!n.penta&&n.sum<=17?1:null},{k:"sum_even",t:"Par",s:"Soma par",p:"1:1",f:n=>!n.penta&&n.sum%2===0?1:null},{k:"sum_mid",t:"Central",s:"Soma 17 ou 18",p:"7:2",f:n=>n.sum===17||n.sum===18?3.5:null,hot:!0},{k:"sum_odd",t:"\xCDmpar",s:"Soma \xEDmpar",p:"1:1",f:n=>!n.penta&&n.sum%2===1?1:null},{k:"sum_big",t:"Grande",s:"Soma 18\u201330",p:"1:1",f:n=>!n.penta&&n.sum>=18?1:null},{k:"sum_high",t:"Extremo alto",s:"Soma 26\u201330",p:"28:1",f:n=>n.sum>=26?28:null}],Wm=[{k:"c_pair",t:"Par",s:"S\xF3 um par",p:"11:10",f:n=>n.pat===Qe.pair?1.1:null},{k:"c_two",t:"Dois pares",s:"2 + 2",p:"3:1",f:n=>n.pat===Qe.two?3:null},{k:"c_trio",t:"Trio",s:"3 iguais",p:"5:1",f:n=>n.pat===Qe.trio?5:null},{k:"c_full",t:"Full house",s:"Trio + par",p:"24:1",f:n=>n.pat===Qe.full?24:null},{k:"c_quad",t:"Quadra",s:"4 iguais",p:"48:1",f:n=>n.pat===Qe.quad?48:null},{k:"c_penta",t:"Penta",s:"5 iguais",p:"1200:1",f:n=>n.pat===Qe.penta?1200:null,hot:!0},{k:"c_diff",t:"Todos diferentes",s:"Nenhum repetido",p:"9:1",f:n=>n.pat===Qe.diff?9:null},{k:"s3",t:"Sequ\xEAncia de 3",s:"3 seguidos",p:"6:5",f:n=>n.run(3)?1.2:null},{k:"s4",t:"Sequ\xEAncia de 4",s:"4 seguidos",p:"5:1",f:n=>n.run(4)?5:null},{k:"s5",t:"Sequ\xEAncia de 5",s:"1 a 5 ou 2 a 6",p:"30:1",f:n=>n.run(5)?30:null}],RI=[null,0,1,4,20,100],Qn=[];for(let n=1;n<=6;n++)Qn.push({k:"n"+n+"_1",n,single:!0,t:"N\xFAmero "+n,s:"Casa do dado",p:"1 dado devolve",f:e=>RI[e.c[n]]}),Qn.push({k:"n"+n+"_2",n,t:"Pelo menos 2",p:"4:1",f:e=>e.c[n]>=2?4:null}),Qn.push({k:"n"+n+"_3",n,t:"Pelo menos 3",p:"25:1",f:e=>e.c[n]>=3?25:null}),Qn.push({k:"n"+n+"_4",n,t:"Pelo menos 4",p:"280:1",f:e=>e.c[n]>=4?280:null}),Qn.push({k:"n"+n+"_5",n,t:"Penta de "+n,p:"7500:1",f:e=>e.c[n]===5?7500:null,hot:!0});var Km=[...Hm,...Wm,...Qn],Ke=Object.fromEntries(Km.map(n=>[n.k,n])),Kn=n=>n.n&&!n.single?n.t+" de "+n.n:n.t;function qi(n){let e=[0,0,0,0,0,0,0];n.forEach(s=>e[s]++);let t=e.slice(1).filter(Boolean).sort((s,a)=>a-s).join(""),r=n.reduce((s,a)=>s+a,0);return{c:e,pat:t,sum:r,run:s=>{for(let a=1;a<=7-s;a++){let u=!0;for(let l=0;l<s;l++)if(!e[a+l]){u=!1;break}if(u)return!0}return!1},penta:t===Qe.penta}}var PI=(n,e)=>e==null?0:n+Math.floor(n*e+1e-9);function ql(n){let e={[Qe.pair]:"Par",[Qe.two]:"Dois pares",[Qe.trio]:"Trio",[Qe.full]:"Full house",[Qe.quad]:"Quadra",[Qe.penta]:"Penta",[Qe.diff]:"Todos diferentes"},t=["Soma "+n.sum,e[n.pat]];return n.run(5)?t.push("Sequ\xEAncia de 5"):n.run(4)?t.push("Sequ\xEAncia de 4"):n.run(3)&&t.push("Sequ\xEAncia de 3"),t.join(" \xB7 ")}var na=[];for(let n=1;n<=6;n++)for(let e=1;e<=6;e++)for(let t=1;t<=6;t++)for(let r=1;r<=6;r++)for(let i=1;i<=6;i++)na.push(qi([n,e,t,r,i]));function Qm(n,e){let t=1;for(let r of n){let i=Ke[r].f(e);if(i==null)return 0;t*=i+1}return t}var zl=new Map;function Hl(n){let e=n.slice().sort().join("|");if(zl.has(e))return zl.get(e);let t=0,r=0,i=0;for(let a of na){let u=Qm(n,a);u>0&&(t++,r+=u,u>i&&(i=u))}let s={p:t/na.length,ev:r/na.length,max:i};return zl.set(e,s),s}function Gl(n){if(!Array.isArray(n)||n.length<2||n.length>6)return"A m\xFAltipla precisa de 2 a 6 sele\xE7\xF5es";if(new Set(n).size!==n.length||n.some(t=>!Ke[t]))return"Sele\xE7\xF5es inv\xE1lidas";let e=Hl(n);return e.p===0?"Estas sele\xE7\xF5es n\xE3o podem ganhar ao mesmo tempo":e.ev>=1?"Combina\xE7\xE3o n\xE3o permitida: as sele\xE7\xF5es dependem umas das outras e a m\xFAltipla pagaria acima do justo":null}var $l=["#E8C46A","#7FC8F8","#F4A99B","#B5E48C","#D7A6F5","#F9B46B","#8EE3D3","#FFFFFF","#F5E663","#A0B4FF"],Um=[{v:1,bg:"#FFFFFF",fg:"#1B1B1B"},{v:5,bg:"#C62828",fg:"#FFFFFF"},{v:10,bg:"#1A2F6B",fg:"#FFFFFF"},{v:25,bg:"#2E8B57",fg:"#FFFFFF"},{v:100,bg:"#111111",fg:"#FFFFFF"},{v:500,bg:"#6A3BA8",fg:"#FFFFFF"},{v:1e3,bg:"#F2C200",fg:"#1B1B1B"}],Wl={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},O=n=>document.getElementById(n),he=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Q=n=>Number(n).toLocaleString("pt-PT"),Bm=n=>n.toLocaleString("pt-PT",{maximumFractionDigits:2}),jm=n=>JSON.parse(JSON.stringify(n));function Bi(n,e){let t='<span class="die '+(e||"")+(n?"":" empty")+'" aria-hidden="true">';for(let r=0;r<9;r++)t+='<i class="'+(n&&Wl[n].includes(r)?"on":"")+'"></i>';return t+"</span>"}var qm=null;function ye(n){let e=O("toast");e.textContent=n,e.hidden=!1,clearTimeout(qm),qm=setTimeout(()=>e.hidden=!0,2600)}var zm={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}}};function ji(){let n=new Uint8Array(1);for(;;)if(crypto.getRandomValues(n),n[0]<252)return n[0]%6+1}var CI=()=>[ji(),ji(),ji(),ji(),ji()],Gm="@jogadores.sicbo",kI=/^[A-Za-z0-9_.-]{3,20}$/,ea={rounds:0,staked:0,returned:0,best:0},$m=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,DI=n=>new Promise(e=>setTimeout(e,n));function NI(n){let e=n&&n.code||"";return e.includes("email-already-in-use")?"Esse utilizador j\xE1 existe. Escolha outro nome ou entre com a palavra-passe.":e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Utilizador ou palavra-passe errados.":e.includes("weak-password")?"A palavra-passe precisa de pelo menos 6 caracteres.":e.includes("too-many-requests")?"Demasiadas tentativas. Espere um pouco e tente de novo.":e.includes("operation-not-allowed")?"O in\xEDcio de sess\xE3o com palavra-passe n\xE3o est\xE1 ativo no Firebase (passo 1 do guia de atualiza\xE7\xE3o).":e.includes("network")?"Sem liga\xE7\xE3o. Tente outra vez.":"N\xE3o foi poss\xEDvel entrar ("+(e||"erro")+")."}var ta=String((window.SICBO_CONFIG||{}).nome||"SIC BO \xB7 5 DADOS").slice(0,40);function Jm(n){document.title=ta;let e=(window.SICBO_CONFIG||{}).firebase,t=O("app");if(!e||!e.apiKey||String(e.apiKey).includes("COLE")){t.innerHTML='<section class="card narrow"><h2>Falta configurar</h2><p>Abra o ficheiro <b>config.js</b> e cole a configura\xE7\xE3o do seu projeto Firebase, como explicado no guia.</p></section>';return}let{auth:r,db:i}=n.init(e),s={user:null,uid:null,game:void 0,players:{},bets:[],users:{},role:zm.get("sicbo5-role")||"player",authReady:!1},a={ptab:"apostar",chip:25,mode:"bet",legs:[],stake:0,dice:[],tab:"mesa",busy:!1,authTab:"login"},u={game:n.doc(i,"games","main"),players:n.collection(i,"players"),bets:n.collection(i,"bets"),users:n.collection(i,"users")},l=g=>(g&&g.code==="permission-denied"?"A\xE7\xE3o recusada pelo servidor":"Sem liga\xE7\xE3o. Tente outra vez.")+(g&&g.code?" ["+g.code+"]":""),d=g=>{console.error(g),ye(l(g))},p=[],_=()=>{p.forEach(g=>{try{g()}catch{}}),p=[]};function I(){p.push(n.onSnapshot(u.game,g=>{s.game=g.exists()?g.data():null,Hi(),ue()},d)),p.push(n.onSnapshot(u.players,g=>{let w={};g.docs.forEach(E=>w[E.id]={id:E.id,...E.data()}),s.players=w,ue()},d)),p.push(n.onSnapshot(u.bets,g=>{s.bets=g.docs.map(w=>({id:w.id,...w.data()})).sort((w,E)=>w.ts-E.ts),ue()},d)),p.push(n.onSnapshot(u.users,g=>{let w={};g.docs.forEach(E=>w[E.id]={id:E.id,...E.data()}),s.users=w,s.usersLoaded=!0,Z(),ue()},d))}n.onAuthStateChanged(r,g=>{let w=(g?g.uid:null)===s.uid&&s.authReady;if(s.authReady=!0,!w){if(_(),pt="",s.user=g||null,s.uid=g?g.uid:null,s.game=void 0,s.players={},s.bets=[],s.users={},s.usersLoaded=!1,Ue.init=!1,!g){a.authTab="login",ue();return}I(),ue()}});let k=()=>s.role==="bank"&&B()?"bank":"player",x=(g,w)=>{g._last!==w&&(g._last=w,g.innerHTML=w)},B=()=>!!(s.user&&!s.user.isAnonymous&&s.users[s.uid]&&s.users[s.uid].role==="admin"),V=!1;async function Z(){let g=s.user;if(!g||g.isAnonymous||!s.usersLoaded||s.users[g.uid]||V)return;V=!0;let w=K&&K.toLowerCase()+Gm===(g.email||"").toLowerCase()?K:(g.email||"").split("@")[0];try{await n.setDoc(n.doc(i,"users",g.uid),{name:w,color:$l[Math.floor(Math.random()*$l.length)],created:Date.now(),stats:{...ea}})}catch(E){d(E)}V=!1}let K=null,J=()=>s.players[s.uid]||null,ce=()=>s.users[s.uid]||null,Ie=g=>s.bets.filter(w=>w.uid===g&&s.game&&w.round===s.game.round),re=g=>Ie(g).reduce((w,E)=>w+E.a,0),b=g=>{let w=s.players[g];return w?w.chips-re(g):0},m=()=>s.game&&s.game.maxBet>0?s.game.maxBet:0,v=(g,w)=>Ie(g).filter(E=>E.kind==="s"&&E.k===w).reduce((E,P)=>E+P.a,0),T=g=>{let w=m();if(!w)return!1;let E={};for(let P of Ie(g))if(P.kind==="m"){if(P.a>w)return!0}else if(E[P.k]=(E[P.k]||0)+P.a,E[P.k]>w)return!0;return!1},A=()=>m()?"M\xE1ximo por aposta: "+Q(m())+" fichas":"Sem m\xE1ximo por aposta";function R(g){let w=Math.max(0,Math.floor(g)),E=[];for(let P of Um.slice().reverse()){let L=Math.floor(w/P.v);L>0&&(E.push({c:P,k:L}),w-=L*P.v)}return E.length?'<div class="tower" aria-hidden="true">'+E.map(({c:P,k:L})=>{let M=Math.min(L,14),j="";for(let U=0;U<M;U++)j+='<i style="background:repeating-linear-gradient(90deg,'+P.bg+" 0 6px,"+P.fg+" 6px 8px) center/100% 3px no-repeat,"+P.bg+'"></i>';return'<div class="tstack"><div class="tchips">'+j+'</div><span class="tlab num">'+L+"\xD7"+(P.v>=1e3?"1k":P.v)+"</span></div>"}).join("")+"</div>":'<div class="tower empty"><span class="note">Sem fichas</span></div>'}function y(){let g=Je();return g.length?'<div class="felt"><span class="bankpill">Banca</span><div class="seats">'+g.map(w=>{let E=re(w.id),P=w.chips-E;return'<div class="seat'+(w.id===s.uid?" you":"")+'"><div class="sname"><span class="dot" style="background:'+w.color+'"></span><b>'+he(w.name)+"</b>"+(w.id===s.uid?' <span class="note">(voc\xEA)</span>':"")+"</div>"+R(P)+'<div class="samt num">'+Q(P)+" fichas</div>"+(E?'<div class="note num">'+Q(E)+" em jogo</div>":'<div class="note">&nbsp;</div>')+"</div>"}).join("")+"</div></div>":'<div class="felt"><span class="bankpill">Banca</span><p class="note">Ainda n\xE3o se sentou ningu\xE9m.</p></div>'}let Je=()=>Object.values(s.players).sort((g,w)=>g.joined-w.joined),$t=g=>s.players[g]?s.players[g].color:"#999",ra=g=>s.players[g]?s.players[g].name:"Jogador que saiu",pt="";function yn(){return s.authReady?!s.user||s.user.isAnonymous?"login":s.game===void 0||!s.usersLoaded?"connecting":s.role==="bank"&&B()?s.game?"bank":"openTable":s.game?J()?"player":"sit":"noGame":"connecting"}function ue(){let g=yn();g!==pt&&(pt=g,a.legs=[],a.mode="bet",t.innerHTML=vn[g](),oa(g)),Xn[g]&&Xn[g](),ia()}let Ht=()=>'<span class="rolelink" data-rolelink></span>';function ia(){let g=B()?k()==="bank"?'<button class="link" data-act="role" data-v="player">Jogar como jogador</button>':'<button class="link" data-act="role" data-v="bank">Ir para a banca</button>':"";document.querySelectorAll("[data-rolelink]").forEach(w=>{w.innerHTML!==g&&(w.innerHTML=g)})}let ct=()=>{let g=(E,P)=>'<button class="zone '+(P||"")+(E.hot?" hot":"")+'" data-act="zone" data-k="'+E.k+'" id="z-'+E.k+'" aria-label="'+he(Kn(E))+", paga "+he(E.p)+'">'+(E.single?Bi(E.n):'<span class="z-t">'+he(E.t)+"</span>")+(E.s?'<span class="z-s">'+he(E.s)+"</span>":"")+'<span class="z-p">'+he(E.p)+'</span><span class="stack" id="st-'+E.k+'"></span></button>',w="";for(let E=1;E<=6;E++){let P=Qn.filter(L=>L.n===E);w+='<div class="ncol">'+g(P[0],"single")+P.slice(1).map(L=>g(L,"row")).join("")+"</div>"}return'<section class="sec"><div class="sec-h"><h2>Somas dos 5 dados</h2><span class="note">Pequeno, Grande, Par e \xCDmpar perdem se sair penta</span></div><div class="grid g-sum">'+Hm.map(E=>g(E)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Combina\xE7\xF5es e sequ\xEAncias</h2><span class="note">Cada combina\xE7\xE3o paga s\xF3 a sua casa \xB7 sequ\xEAncias: pelo menos esses n\xFAmeros seguidos</span></div><div class="grid g-combo">'+Wm.map(E=>g(E)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Aposta num n\xFAmero</h2><span class="note">Casa do dado: 1 dado devolve \xB7 2 \u2192 1:1 \xB7 3 \u2192 4:1 \xB7 4 \u2192 20:1 \xB7 5 \u2192 100:1</span></div><div class="grid g-num">'+w+"</div></section>"},Pe=g=>"<header><h1>"+he(ta)+'</h1><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span>'+(g||"")+"</div></header>",sa=()=>Um.map(g=>'<button class="chip num'+(g.v>=1e3?" big":"")+'" data-act="chip" data-v="'+g.v+'" style="background:'+g.bg+";color:"+g.fg+'" aria-label="Ficha de '+g.v+'">'+g.v+"</button>").join(""),vn={connecting:()=>'<section class="card narrow"><p>A ligar \xE0 mesa\u2026</p></section>',login:()=>'<section class="card narrow"><h1 class="big">'+he(ta)+'</h1><div class="seg" role="tablist"><button role="tab" data-act="authTab" data-v="login" id="at-login">Entrar</button><button role="tab" data-act="authTab" data-v="new" id="at-new">Criar conta</button></div><form id="authForm" class="stack-form"><label for="aUser">Utilizador</label><input class="field" id="aUser" maxlength="20" required autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Ex.: rita"><label for="aPass">Palavra-passe</label><input class="field" id="aPass" type="password" minlength="6" required autocomplete="current-password"><div id="aPass2Wrap" hidden class="stack-form"><label for="aPass2">Repetir palavra-passe</label><input class="field" id="aPass2" type="password" minlength="6" autocomplete="new-password"></div><button class="btn primary" type="submit" id="aSubmit">Entrar</button></form><p class="note" id="authNote" role="alert"></p><p class="note">A conta fica guardada: entra com ela em qualquer telem\xF3vel e mant\xE9m o saldo e as estat\xEDsticas.</p></section>',openTable:()=>'<section class="card narrow"><h1 class="big">Abrir a mesa</h1><form id="openForm" class="stack-form"><label for="init">Fichas iniciais por jogador</label><input class="field num" id="init" type="number" min="0" step="5" value="1000" inputmode="numeric"><button class="btn primary" type="submit">Abrir a mesa</button></form><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+Ht()+"</div></section>",noGame:()=>'<section class="card narrow"><h2>A mesa ainda n\xE3o est\xE1 aberta</h2><p>Quando a banca abrir a mesa, esta p\xE1gina atualiza sozinha.</p><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+Ht()+"</div></section>",sit:()=>'<section class="card narrow"><h1 class="big">'+he(ta)+'</h1><p id="sitHello"></p><button class="btn primary" data-act="sit" id="sitBtn">Sentar \xE0 mesa</button><div id="statsSit"></div><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+Ht()+"</div></section>",player:()=>Pe('<span class="me" id="meBox"></span>')+'<nav class="tabs" role="tablist"><button role="tab" data-act="ptab" data-v="apostar" id="pt-apostar">Apostar</button><button role="tab" data-act="ptab" data-v="mesa" id="pt-mesa">Mesa</button></nav><div id="pp-mesa" class="tabp" hidden><section class="sec"><div class="sec-h"><h2>Jogadores sentados</h2><span class="note" id="maxNoteP"></span></div><div id="tableView"></div></section></div><div id="pp-apostar" class="tabp"><div class="banner" id="banner"></div>'+ct()+'<section class="sec" id="myMultiSec" hidden><div class="sec-h"><h2>As minhas m\xFAltiplas</h2><span class="note">S\xF3 pagam se todas as sele\xE7\xF5es ganharem</span></div><div class="mlist" id="mlist"></div></section><section class="sec" id="resultSec" hidden><h2>\xDAltima ronda</h2><div class="read" id="resHead"></div><div class="res" id="res"></div></section><section class="panel"><div class="sec-h"><h2>A minha conta</h2><button class="link" data-act="logout">Sair da conta</button></div><div id="statsBox"></div></section><section class="sec"><div class="sec-h"><h2>Hist\xF3rico</h2>'+Ht()+'</div><ul class="hist" id="hist"></ul></section><div class="bar"><div class="bar-in"><div class="slip" id="slip" hidden></div><div class="tools"><div class="chips" role="group" aria-label="Valor da ficha">'+sa()+'</div></div><div class="tools"><div class="modes"><button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="multi" id="mMulti">M\xFAltipla</button><button class="take" data-act="repeat" id="repeatBtn">Repetir</button></div><div class="tot" id="tot"></div></div></div></div></div>',bank:()=>Pe()+'<nav class="tabs" role="tablist"><button role="tab" data-act="tab" data-v="mesa" id="t-mesa">Mesa</button><button role="tab" data-act="tab" data-v="jogadores" id="t-jogadores">Jogadores</button><button role="tab" data-act="tab" data-v="historico" id="t-historico">Hist\xF3rico</button></nav><div id="p-mesa" class="tabp"><section class="panel"><div class="sec-h"><h2>Apostas</h2><span class="note" id="betSummary"></span></div><div class="row-actions"><button class="btn" data-act="toggleOpen" id="openBtn"></button><div class="seg" role="group" aria-label="Dados"><button data-act="diceMode" data-v="fisico" id="dm-fisico">Dados f\xEDsicos</button><button data-act="diceMode" data-v="virtual" id="dm-virtual">Dados virtuais</button></div></div><div class="row-actions"><label class="note" for="maxBet">M\xE1ximo por aposta</label><input class="field num" id="maxBet" type="number" min="0" step="5" inputmode="numeric" placeholder="Sem limite" style="width:130px"><button class="btn sm" data-act="saveMax">Guardar</button><span class="note" id="maxNote"></span></div><div class="who" id="who"></div></section>'+ct()+'<section class="sec" id="allMultiSec" hidden><div class="sec-h"><h2>M\xFAltiplas em jogo</h2></div><div class="mlist" id="mlist"></div></section><section class="panel" id="dados"><div class="sec-h"><h2>Resultado dos dados</h2><span class="note" id="diceHint"></span></div><div id="physical" class="stack-form"><div class="slots" id="slots"></div><div class="pad" id="pad">'+[1,2,3,4,5,6].map(g=>'<button data-act="face" data-v="'+g+'" aria-label="Face '+g+'">'+Bi(g)+"</button>").join("")+'</div><div class="read" id="readout" aria-live="polite"></div><div class="row-actions"><button class="btn primary" data-act="settle" id="settle">Liquidar ronda</button><button class="btn" data-act="clearDice">Limpar dados</button></div></div><div id="virtual" class="stack-form" hidden><button class="btn primary roll" data-act="roll" id="rollBtn">Lan\xE7ar dados</button><p class="note">O site lan\xE7a os 5 dados ao acaso, mostra a anima\xE7\xE3o a todos e liquida a ronda.</p></div></section><section class="sec" id="resultSec" hidden><div class="sec-h"><h2>\xDAltima ronda</h2><button class="btn sm warn" data-act="undo" id="undoBtn">Corrigir: anular esta ronda</button></div><div class="read" id="resHead"></div><div class="res" id="res"></div></section></div><div id="p-jogadores" class="tabp" hidden><section class="panel"><h2>Convidar jogadores</h2><p class="note">Envie este link. Cada pessoa cria uma conta (utilizador e palavra-passe) e senta-se \xE0 mesa. S\xF3 contas com papel de admin veem a banca.</p><div class="row-actions"><input class="field" id="shareUrl" readonly aria-label="Link da mesa"><button class="btn sm" data-act="copy">Copiar link</button></div></section><section class="sec"><h2>Mesa</h2><div id="tableView"></div></section><section class="sec"><h2>Saldos na mesa</h2><div id="plist"></div></section><section class="sec"><h2>Contas registadas</h2><div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Utilizador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Maior pr\xE9mio</th><th scope="col">Admin</th></tr></thead><tbody id="ulist"></tbody></table></div></section><section class="panel"><h2>Defini\xE7\xF5es</h2><div class="row-actions"><label class="note" for="initChips">Fichas iniciais de quem se senta</label><input class="field num" id="initChips" type="number" min="0" step="5" inputmode="numeric" style="width:120px"><button class="btn sm" data-act="saveInit">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="reset" id="resetBtn">Nova partida (rep\xF5e saldos; as contas ficam)</button>'+Ht()+'</div></section></div><div id="p-historico" class="tabp" hidden><section class="sec"><h2>Hist\xF3rico</h2><ul class="hist" id="hist"></ul></section></div>'};function oa(g){g==="login"&&O("authForm").addEventListener("submit",async w=>{w.preventDefault();let E=O("aUser").value.trim(),P=O("aPass").value,L=O("authNote");if(L.textContent="",!kI.test(E)){L.textContent="O utilizador deve ter 3 a 20 caracteres: letras, n\xFAmeros, ponto, h\xEDfen ou _ (sem espa\xE7os nem acentos).";return}let M=E.toLowerCase()+Gm;O("aSubmit").disabled=!0;try{if(a.authTab==="new"){if(P!==O("aPass2").value){L.textContent="As palavras-passe n\xE3o s\xE3o iguais.",O("aSubmit").disabled=!1;return}K=E,await n.createUserWithEmailAndPassword(r,M,P)}else await n.signInWithEmailAndPassword(r,M,P)}catch(j){L.textContent=NI(j),console.error(j)}O("aSubmit")&&(O("aSubmit").disabled=!1)}),g==="openTable"&&O("openForm").addEventListener("submit",async w=>{w.preventDefault();try{await n.setDoc(u.game,Wt(Math.max(0,Math.floor(+O("init").value||0)),"fisico"))}catch(E){d(E)}}),g==="bank"&&(O("shareUrl").value=location.href.split("#")[0],O("initChips").value=s.game?s.game.initial:1e3)}let Wt=(g,w,E)=>({round:1,open:!0,initial:g,maxBet:E||0,diceMode:w||"fisico",roll:null,lastResult:null,history:[],lastBets:[],undo:null,created:Date.now()});function zi(g,w){let E=w&&a.dice.length===5?qi(a.dice):null;Km.forEach(P=>{let L=O("z-"+P.k);if(!L)return;let M={};if(g.filter(j=>j.kind==="s"&&j.k===P.k).forEach(j=>M[j.uid]=(M[j.uid]||0)+j.a),O("st-"+P.k).innerHTML=Object.entries(M).map(([j,U])=>'<span class="pill num"><span class="dot" style="background:'+$t(j)+'"></span>'+Q(U)+"</span>").join(""),L.classList.remove("win","push","dim","sel"),a.mode==="multi"&&a.legs.includes(P.k)&&L.classList.add("sel"),E){let j=P.f(E);L.classList.add(j==null?"dim":j===0?"push":"win")}})}function Gi(g){let w=s.game&&s.game.lastResult;if(O("resultSec").hidden=!w,!w)return;O("resHead").innerHTML="Ronda "+w.round+" \xB7 "+w.dice.map(P=>Bi(P,"sm")).join(" ")+" \xB7 "+he(w.desc)+(w.virtual?' \xB7 <span class="note">dados virtuais</span>':"");let E=g?w.per.filter(P=>P.uid===g):w.per;O("res").innerHTML=E.length?E.map(P=>{let L=P.ret-P.st;return'<div class="rcard"><div class="rhead"><span class="dot" style="background:'+P.color+'"></span>'+he(P.name)+'<span class="net num '+(L>=0?"pos":"neg")+'">'+(L>0?"+":"")+Q(L)+'</span></div><ul class="rlines">'+P.lines.map(M=>"<li><span>"+he(M.n)+" \xB7 "+Q(M.a)+'</span><span class="num '+(M.v?"":M.pay>0?"pos":"neg")+'">'+(M.v?"anulada: "+he(M.v):M.pay>0?"recebe "+Q(M.pay):"perde")+"</span></li>").join("")+"</ul></div>"}).join(""):'<p class="note">'+(g?"N\xE3o apostou nesta ronda.":"Ningu\xE9m apostou nesta ronda.")+"</p>"}function wn(){let g=s.game&&s.game.history||[];O("hist").innerHTML=g.length?g.map(w=>'<li><span class="hr">Ronda '+w.round+'</span><span class="hd">'+w.dice.map(E=>Bi(E,"sm")).join("")+'</span><span class="note">Soma '+w.sum+'</span><span class="hn">'+w.per.map(E=>'<span class="num '+(E.net>=0?"pos":"neg")+'">'+he(E.name)+" "+(E.net>0?"+":"")+Q(E.net)+"</span>").join("")+"</span></li>").join(""):'<li class="note">As rondas liquidadas aparecem aqui.</li>'}function In(g){g=g||ea;let w=g.returned-g.staked;return'<dl class="stats"><div><dt>Rondas jogadas</dt><dd class="num">'+Q(g.rounds)+'</dd></div><div><dt>Total apostado</dt><dd class="num">'+Q(g.staked)+'</dd></div><div><dt>Resultado acumulado</dt><dd class="num '+(w>=0?"pos":"neg")+'">'+(w>0?"+":"")+Q(w)+'</dd></div><div><dt>Maior pr\xE9mio</dt><dd class="num gold">'+Q(g.best)+"</dd></div></dl>"}function Jn(g,w,E){return g.map(P=>{let L=Hl(P.legs);return'<div class="mcard"><div class="mh">'+(w?'<span class="dot" style="background:'+$t(P.uid)+'"></span>'+he(ra(P.uid)):"M\xFAltipla")+'<span class="num">'+Q(P.a)+' fichas</span></div><div class="ml">'+P.legs.map(M=>Ke[M]?he(Kn(Ke[M]))+" ("+he(Ke[M].p)+")":"?").join(" + ")+'</div><div class="mf"><span>Recebe at\xE9 <b class="num gold">'+Q(Math.floor(P.a*L.max+1e-9))+"</b></span>"+(E?'<button class="btn sm warn" data-act="cancelMulti" data-id="'+P.id+'">Cancelar</button>':"")+"</div></div>"}).join("")}function Yn(){O("roundNo").textContent=s.game?s.game.round:"\u2013";let g=s.game&&s.game.open;O("state").className="state "+(g?"on":"off"),O("state").textContent=g?"Apostas abertas":"Apostas fechadas"}let Xn={login(){O("at-login").setAttribute("aria-selected",String(a.authTab==="login")),O("at-new").setAttribute("aria-selected",String(a.authTab==="new")),O("aPass2Wrap").hidden=a.authTab!=="new",O("aPass2").required=a.authTab==="new",O("aPass").autocomplete=a.authTab==="new"?"new-password":"current-password",O("aSubmit").textContent=a.authTab==="new"?"Criar conta":"Entrar"},sit(){let g=ce();O("sitHello").innerHTML="Ol\xE1, <b>"+he(g?g.name:"\u2026")+'</b>. Senta-se com <b class="gold">'+Q(s.game.initial)+"</b> fichas.",O("sitBtn").disabled=!g,O("statsSit").innerHTML=g?In(g.stats):""},player(){let g=J();if(!g)return;Yn();let w=s.game.open,E=Ie(s.uid);O("meBox").innerHTML='<span class="dot" style="background:'+g.color+'"></span>'+he(g.name)+' \xB7 <b class="num">'+Q(b(s.uid))+"</b>",O("banner").className="banner "+(w?"on":"off"),O("banner").textContent=(w?"Fa\xE7a as suas apostas. A banca fecha as apostas antes de lan\xE7ar os dados.":"Apostas fechadas. A banca est\xE1 a lan\xE7ar os dados.")+" "+A()+".",["apostar","mesa"].forEach(j=>{O("pp-"+j).hidden=a.ptab!==j,O("pt-"+j).setAttribute("aria-selected",String(a.ptab===j))}),O("maxNoteP").textContent=A(),x(O("tableView"),y()),document.querySelectorAll(".zone").forEach(j=>j.disabled=!w),zi(E,!1),document.querySelectorAll(".chip").forEach(j=>j.setAttribute("aria-pressed",String(+j.dataset.v===a.chip))),O("mTake").setAttribute("aria-pressed",String(a.mode==="take")),O("mMulti").setAttribute("aria-pressed",String(a.mode==="multi"));let P=(s.game.lastBets||[]).filter(j=>j.uid===s.uid);O("repeatBtn").disabled=!w||!P.length||E.length>0,O("tot").innerHTML='Em jogo <b class="num">'+Q(re(s.uid))+'</b> \xB7 Dispon\xEDvel <b class="num">'+Q(b(s.uid))+"</b>";let L=E.filter(j=>j.kind==="m");O("myMultiSec").hidden=!L.length,O("mlist").innerHTML=Jn(L,!1,w);let M=ce();O("statsBox").innerHTML='<p class="note">Utilizador: <b>'+he(M?M.name:g.name)+"</b></p>"+In(M&&M.stats),Ur(),Gi(s.uid),wn()},bank(){Yn(),["mesa","jogadores","historico"].forEach(U=>{O("p-"+U).hidden=a.tab!==U,O("t-"+U).setAttribute("aria-selected",String(a.tab===U))});let g=s.game,w=g&&g.open,E=g&&g.diceMode==="virtual",P=s.bets.filter(U=>g&&U.round===g.round);O("openBtn").textContent=w?"Fechar apostas":"Reabrir apostas",O("openBtn").className="btn "+(w&&!E?"primary":""),O("dm-fisico").setAttribute("aria-pressed",String(!E)),O("dm-virtual").setAttribute("aria-pressed",String(!!E));let L=P.reduce((U,te)=>U+te.a,0);O("betSummary").textContent=P.length?Q(L)+" fichas em "+P.length+" aposta(s)":"Sem apostas nesta ronda",document.activeElement!==O("maxBet")&&(O("maxBet").value=m()||""),O("maxNote").textContent=m()?"Atual: "+Q(m()):"Atual: sem limite",x(O("tableView"),y()),O("who").innerHTML=Je().map(U=>{let te=re(U.id),se=te>U.chips,Me=T(U.id);return'<span class="wchip'+(se||Me?" over":"")+'"><span class="dot" style="background:'+U.color+'"></span>'+he(U.name)+' <b class="num">'+Q(te)+"</b>"+(se?" \xB7 excede saldo":"")+(Me?" \xB7 acima do m\xE1ximo":"")+"</span>"}).join("")||'<span class="note">Ainda n\xE3o se sentou ningu\xE9m. Partilhe o link no separador Jogadores.</span>',document.querySelectorAll(".zone").forEach(U=>U.disabled=!0),zi(P,!E);let M=P.filter(U=>U.kind==="m");if(O("allMultiSec").hidden=!M.length,O("mlist").innerHTML=Jn(M,!0,!1),O("physical").hidden=!!E,O("virtual").hidden=!E,O("diceHint").textContent=E?"Modo virtual":"Toque nas faces \xB7 toque num dado para o apagar",E)O("rollBtn").disabled=a.busy,O("rollBtn").textContent=a.busy?"A lan\xE7ar\u2026":w?"Fechar apostas e lan\xE7ar dados":"Lan\xE7ar dados";else{let U="";for(let se=0;se<5;se++){let Me=a.dice[se];U+='<button class="slot" data-act="slot" data-i="'+se+'" aria-label="'+(Me?"Dado "+(se+1)+": "+Me:"Dado "+(se+1)+" vazio")+'">'+Bi(Me||0)+"</button>"}O("slots").innerHTML=U;let te=a.dice.length===5?qi(a.dice):null;O("readout").innerHTML=te?"<b>"+he(ql(te))+"</b>"+(w?" \xB7 feche as apostas antes de liquidar":""):a.dice.length?"Faltam "+(5-a.dice.length)+" dados":"Introduza os 5 dados lan\xE7ados",O("settle").disabled=!te||w||a.busy}Gi(null),O("undoBtn").hidden=!(g&&g.undo),document.activeElement&&document.activeElement.closest&&document.activeElement.closest("#plist")||x(O("plist"),Je().map(U=>'<div class="prow"><div class="nm"><span class="dot" style="background:'+U.color+'"></span><b>'+he(U.name)+'</b></div><div class="bal num">'+Q(U.chips)+(re(U.id)?'<div class="note">'+Q(re(U.id))+" em jogo</div>":"")+'</div><div class="adj"><input class="field num" id="amt-'+U.id+'" type="number" min="1" inputmode="numeric" placeholder="Qtd." aria-label="Quantidade para '+he(U.name)+'"><button class="btn sm" data-act="give" data-id="'+U.id+'">Dar</button><button class="btn sm" data-act="takeChips" data-id="'+U.id+'">Tirar</button><button class="btn sm warn" data-act="remove" data-id="'+U.id+'">Remover</button></div></div>').join("")||'<p class="note">Ainda n\xE3o h\xE1 jogadores sentados.</p>');let j=Object.values(s.users).sort((U,te)=>(U.name||"").localeCompare(te.name||""));x(O("ulist"),j.length?j.map(U=>{let te=U.stats||ea,se=te.returned-te.staked;return'<tr><td><span class="dot" style="background:'+(U.color||"#999")+'"></span> '+he(U.name)+(s.players[U.id]?"":' <span class="note">(fora da mesa)</span>')+'</td><td class="num">'+Q(te.rounds)+'</td><td class="num">'+Q(te.staked)+'</td><td class="num '+(se>=0?"pos":"neg")+'">'+(se>0?"+":"")+Q(se)+'</td><td class="num">'+Q(te.best)+"</td><td>"+(U.id===s.uid?'<span class="note">Admin (voc\xEA)</span>':'<button class="btn sm'+(U.role==="admin"?" warn":"")+'" data-act="toggleAdmin" data-id="'+U.id+'">'+(U.role==="admin"?"Tirar admin":"Tornar admin")+"</button>")+"</td></tr>"}).join(""):'<tr><td colspan="6" class="note">Ainda ningu\xE9m criou conta.</td></tr>'),wn()}};function Ur(){let g=O("slip");if(g.hidden=a.mode!=="multi",g.hidden||document.activeElement&&document.activeElement.id==="stake")return;let w=a.legs.length,E='<div class="slip-h"><span><strong>M\xFAltipla</strong> \xB7 '+(w?w+" sele\xE7"+(w>1?"\xF5es":"\xE3o"):"toque nas casas para escolher")+"</span>",P=w?Hl(a.legs):null;P&&(E+="<span>Paga at\xE9 <b>\xD7"+Bm(P.max)+"</b> \xB7 ganha em "+Bm(P.p*100)+"% das jogadas</span>"),E+="</div>",w&&(E+='<div class="legs">'+a.legs.map(L=>'<button class="leg" data-act="leg" data-k="'+L+'" aria-label="Tirar '+he(Kn(Ke[L]))+'">'+he(Kn(Ke[L]))+' <span class="num">'+he(Ke[L].p)+'</span><span class="x" aria-hidden="true">\xD7</span></button>').join("")+"</div>"),E+='<div class="slip-a"><label class="note" for="stake">Aposta</label><input class="field num" id="stake" type="number" min="1" inputmode="numeric" value="'+(a.stake||"")+'" placeholder="Fichas"><span class="note">'+(w>1&&a.stake?'Recebe at\xE9 <b class="num gold">'+Q(Math.floor(a.stake*P.max+1e-9))+"</b>":"Toque nas fichas para somar")+'</span><button class="btn sm primary" data-act="placeMulti" '+(w>1&&a.stake>0&&s.game.open?"":"disabled")+'>Fazer m\xFAltipla</button><button class="btn sm" data-act="clearSlip">Limpar</button></div>',g.innerHTML=E}let Ue={init:!1,round:0,roll:null},Ye=null,it=document.createElement("div");it.className="reveal",it.hidden=!0,it.setAttribute("role","dialog"),it.setAttribute("aria-modal","true"),it.setAttribute("aria-label","Resultado dos dados"),it.innerHTML='<div class="rv-box"><div class="rv-dice" id="rvDice"></div><div class="rv-desc" id="rvDesc" aria-live="polite"></div><div class="rv-label" id="rvLabel"></div><div class="rv-amt num" id="rvAmt"></div><div class="rv-sub" id="rvSub"></div><button class="btn" data-act="closeReveal" id="rvClose">Continuar</button></div>',document.body.appendChild(it);let En=null;function $i(g){let w='<span class="bdie" aria-hidden="true">';for(let E=0;E<9;E++)w+='<i class="'+(g&&Wl[g].includes(E)?"on":"")+'"></i>';return w+"</span>"}function Zn(g,w){g.querySelectorAll("i").forEach((E,P)=>E.classList.toggle("on",Wl[w].includes(P)))}function Hi(){let g=s.game;if(!g)return;if(!Ue.init){Ue.init=!0,Ue.round=g.lastResult?g.lastResult.round:0,Ue.roll=g.roll?g.roll.id:null;return}g.roll&&g.roll.id!==Ue.roll&&(Ue.roll=g.roll.id,Br(g.roll.dice,g.roll.round,2400));let w=g.lastResult;if(w&&w.round>Ue.round){if(Ue.round=w.round,(!Ye||Ye.round!==w.round)&&Br(w.dice,w.round,1100),!Ye)return;Ye.result=w,er()}else w&&w.round<Ue.round?Ue.round=w.round:w||(Ue.round=0)}function Br(g,w,E){if(k()!=="bank"&&!J())return;clearTimeout(En),Ye={round:w,result:null,shown:!1},$m()&&(E=0),O("rvDice").innerHTML=g.map(()=>$i(1)).join(""),O("rvDesc").textContent=E?"A lan\xE7ar os dados\u2026":"",O("rvLabel").textContent="",O("rvAmt").textContent="",O("rvSub").textContent="",O("rvAmt").className="rv-amt num",O("rvClose").hidden=!0,it.hidden=!1;let L=[...O("rvDice").children];L.forEach((j,U)=>{j.style.animationDelay=U*70+"ms",j.classList.add("tumble")}),Ye.tumble=(async()=>{let j=performance.now(),U=60;for(;performance.now()-j<E;)L.forEach(te=>Zn(te,1+Math.floor(Math.random()*6))),await DI(U),U=Math.min(180,U*1.06);L.forEach((te,se)=>{te.classList.remove("tumble"),Zn(te,g[se]),te.classList.add("land")}),O("rvDesc").textContent=ql(qi(g))})();let M=Ye;Ye.tumble.then(()=>{M.tumbled=!0,er()})}function Tn(g,w,E,P){return P=P||"",$m()||E<=0?(g.textContent=P+Q(w),Promise.resolve()):new Promise(L=>{let M=performance.now(),j=U=>{let te=Math.min(1,(U-M)/E),se=1-Math.pow(1-te,3);g.textContent=P+Q(Math.round(w*se)),te<1?requestAnimationFrame(j):L()};requestAnimationFrame(j)})}async function er(){let g=Ye;if(!g||!g.tumbled||!g.result||g.shown)return;g.shown=!0;let w=g.result,E=O("rvLabel"),P=O("rvAmt"),L=O("rvSub"),M=3500;if(k()==="bank"){let j=w.per.reduce((se,Me)=>se+Me.st,0),U=w.per.reduce((se,Me)=>se+Me.ret,0),te=j-U;E.textContent=te>=0?"A banca ganha":"A banca paga",P.className="rv-amt num "+(te>0?"pos":te<0?"neg":""),await Tn(P,Math.abs(te),1200,te>0?"+":te<0?"\u2212":""),L.textContent=w.per.length?w.per.map(se=>se.name+" "+(se.ret-se.st>0?"+":"")+Q(se.ret-se.st)).join(" \xB7 "):"Ningu\xE9m apostou nesta ronda."}else{let j=w.per.find(U=>U.uid===s.uid);if(!j)E.textContent="N\xE3o apostou nesta ronda",M=2500;else{let U=j.ret-j.st;U>0?(E.textContent="Ganhou",P.className="rv-amt num pos win",await Tn(P,U,Math.min(2600,900+j.ret/j.st*120),"+"),P.classList.add("pop"),L.textContent="Apostou "+Q(j.st)+" \xB7 recebeu "+Q(j.ret),M=6e3):U===0?(E.textContent="Ficou igual",P.className="rv-amt num",P.textContent="0",L.textContent="Recebeu de volta o que apostou ("+Q(j.st)+")."):(E.textContent="Perdeu",P.className="rv-amt num neg",await Tn(P,-U,900,"\u2212"),L.textContent=j.ret>0?"Ganhou "+Q(j.ret)+" em pr\xE9mios, mas tinha apostado "+Q(j.st)+".":"Boa sorte na pr\xF3xima ronda.",M=4500)}}O("rvClose").hidden=!1,clearTimeout(En),En=setTimeout(bn,M)}function bn(){clearTimeout(En),it.hidden=!0,Ye=null}async function Te(g){try{return await n.addDoc(u.bets,{uid:s.uid,round:s.game.round,ts:Date.now(),...g}),!0}catch(w){return d(w),!1}}async function Le(g){if(k()!=="player"||!J()||!s.game.open)return;if(a.mode==="multi"){let P=a.legs.indexOf(g);if(P>=0){a.legs.splice(P,1),ue();return}if(a.legs.length>=6){ye("M\xE1ximo de 6 sele\xE7\xF5es por m\xFAltipla");return}let L=a.legs.concat(g);if(L.length>1){let M=Gl(L);if(M){ye(Kn(Ke[g])+": "+M.charAt(0).toLowerCase()+M.slice(1));return}}a.legs=L,ue();return}if(a.mode==="take"){let P=Ie(s.uid).filter(L=>L.kind==="s"&&L.k===g);if(!P.length){ye("N\xE3o tem fichas nesta casa");return}try{await n.deleteDoc(n.doc(i,"bets",P[P.length-1].id))}catch(L){d(L)}return}if(b(s.uid)<a.chip){ye("N\xE3o tem fichas suficientes (dispon\xEDvel: "+Q(b(s.uid))+")");return}let w=m(),E=v(s.uid,g);if(w&&E+a.chip>w){ye("M\xE1ximo por aposta: "+Q(w)+". Nesta casa j\xE1 tem "+Q(E)+".");return}await Te({kind:"s",k:g,a:a.chip})}async function tr(){let g=Math.floor(a.stake||0),w=Gl(a.legs);if(w){ye(w);return}if(g>0){if(b(s.uid)<g){ye("S\xF3 tem "+Q(b(s.uid))+" fichas dispon\xEDveis");return}if(m()&&g>m()){ye("M\xE1ximo por aposta: "+Q(m())+" fichas");return}await Te({kind:"m",legs:a.legs.slice(),a:g})&&(a.legs=[],a.stake=0,ye("M\xFAltipla de "+Q(g)+" fichas registada"),ue())}}async function Wi(){let g=(s.game.lastBets||[]).filter(M=>M.uid===s.uid),w=b(s.uid),E=0,P=m(),L={};for(let M of g){if(M.a>w){E++;continue}if(P&&(M.kind==="m"?M.a>P:(L[M.k]||0)+M.a>P)){E++;continue}M.kind!=="m"&&(L[M.k]=(L[M.k]||0)+M.a),w-=M.a,await Te(M.kind==="m"?{kind:"m",legs:M.legs,a:M.a}:{kind:"s",k:M.k,a:M.a})}E&&ye(E+" aposta(s) ficaram de fora (fichas insuficientes ou acima do m\xE1ximo)")}async function Ki(){let g=ce();if(!g||!s.game)return;let w=Object.values(s.players).map(P=>P.color),E=w.includes(g.color)&&$l.find(P=>!w.includes(P))||g.color;try{await n.setDoc(n.doc(i,"players",s.uid),{name:g.name,chips:s.game.initial,color:E,joined:Date.now()})}catch(P){d(P)}}async function Qi(g,w){let E=s.game;if(!g||g.length!==5||E.open)return!1;let P=qi(g),L=s.bets.filter($=>$.round===E.round),M={},j={},U={};Je().forEach($=>{U[$.id]=$.chips,j[$.id]=$.chips});let te={...j},se=[],Me=m(),kt={};L.forEach($=>{let fe=s.players[$.uid];if(!fe)return;let Be=M[fe.id]||(M[fe.id]={uid:fe.id,name:fe.name,color:fe.color,st:0,ret:0,best:0,lines:[]}),Kt=$.kind==="m",Dt=Kt?"M\xFAltipla: "+($.legs||[]).map(Gr=>Ke[Gr]?Kn(Ke[Gr]):"?").join(" + "):Ke[$.k]?Kn(Ke[$.k]):"?",He=Math.floor($.a),Qt=null;if(He>0?(Kt?Gl($.legs):!Ke[$.k])?Qt="aposta inv\xE1lida":Me&&(Kt?He>Me:(kt[fe.id+"|"+$.k]||0)+He>Me)?Qt="acima do m\xE1ximo":He>te[fe.id]&&(Qt="sem saldo"):Qt="valor inv\xE1lido",Qt){Be.lines.push({n:Dt,a:$.a,pay:0,v:Qt});return}te[fe.id]-=He,Kt||(kt[fe.id+"|"+$.k]=(kt[fe.id+"|"+$.k]||0)+He);let mt=Kt?Math.floor(He*Qm($.legs,P)+1e-9):PI(He,Ke[$.k].f(P));Be.st+=He,Be.ret+=mt,j[fe.id]+=mt-He,mt>Be.best&&(Be.best=mt),Be.lines.push({n:Dt,a:He,pay:mt}),se.push(Kt?{uid:$.uid,kind:"m",legs:$.legs,a:He}:{uid:$.uid,kind:"s",k:$.k,a:He})});let qr=Object.values(M).map(({best:$,...fe})=>fe),Ee=n.writeBatch(i);Object.keys(j).forEach($=>{j[$]!==U[$]&&Ee.update(n.doc(i,"players",$),{chips:j[$]})});let zr={};Object.values(M).forEach($=>{let fe=s.users[$.uid];if(!fe||$.st===0)return;let Be={...ea,...fe.stats||{}};zr[$.uid]=Be,Ee.update(n.doc(i,"users",$.uid),{stats:{rounds:Be.rounds+1,staked:Be.staked+$.st,returned:Be.returned+$.ret,best:Math.max(Be.best,$.best)}})}),s.bets.forEach($=>Ee.delete(n.doc(i,"bets",$.id))),Ee.update(u.game,jm({round:E.round+1,open:!0,lastResult:{round:E.round,dice:g.slice(),desc:ql(P),per:qr,virtual:!!w},history:[{round:E.round,dice:g.slice(),sum:P.sum,per:qr.map($=>({name:$.name,net:$.ret-$.st}))}].concat(E.history||[]).slice(0,30),lastBets:se,undo:{round:E.round,dice:g.slice(),virtual:!!w,chips:U,stats:zr,bets:s.bets.map($=>{let{id:fe,...Be}=$;return{id:fe,d:Be}}),lastResult:E.lastResult||null,lastBets:E.lastBets||[]}}));try{return await Ee.commit(),!0}catch($){return d($),!1}}async function An(){a.busy||(a.busy=!0,ue(),await Qi(a.dice,!1)&&(a.dice=[]),a.busy=!1,ue())}async function Ji(){if(!(a.busy||!s.game)){a.busy=!0,ue();try{let g=s.game,w=CI(),E=Date.now().toString(36)+Math.random().toString(36).slice(2,6);Ue.roll=E,await n.updateDoc(u.game,{open:!1,roll:{id:E,round:g.round,dice:w}}),Br(w,g.round,2400),await Ye.tumble,await Qi(w,!0)}catch(g){d(g)}a.busy=!1,ue()}}async function Yi(){let g=s.game.undo;if(!g)return;let w=n.writeBatch(i);Object.entries(g.chips).forEach(([E,P])=>{s.players[E]&&w.update(n.doc(i,"players",E),{chips:P})}),Object.entries(g.stats||{}).forEach(([E,P])=>{s.users[E]&&w.update(n.doc(i,"users",E),{stats:P})}),s.bets.forEach(E=>w.delete(n.doc(i,"bets",E.id))),g.bets.forEach(E=>w.set(n.doc(i,"bets",E.id),E.d)),w.update(u.game,jm({round:g.round,open:!1,roll:null,lastResult:g.lastResult,lastBets:g.lastBets,history:(s.game.history||[]).slice(1),undo:null}));try{await w.commit(),g.virtual||(a.dice=g.dice),ye(g.virtual?"Ronda anulada. As apostas voltaram; pode lan\xE7ar de novo.":"Ronda anulada. Corrija os dados e liquide de novo."),ue()}catch(E){d(E)}}async function jr(){let g=n.writeBatch(i);Object.keys(s.players).forEach(w=>g.delete(n.doc(i,"players",w))),s.bets.forEach(w=>g.delete(n.doc(i,"bets",w.id))),g.set(u.game,Wt(s.game?s.game.initial:1e3,s.game?s.game.diceMode:"fisico",s.game?s.game.maxBet:0));try{await g.commit(),a.dice=[],ye("Partida nova. Os jogadores voltam a sentar-se com as suas contas.")}catch(w){d(w)}}let De=null;document.addEventListener("click",async g=>{let w=g.target.closest("[data-act]");if(!w)return;let E=w.dataset.act;if(E==="role")s.role=w.dataset.v,zm.set("sicbo5-role",s.role),pt="",ue(),window.scrollTo(0,0);else if(E==="toggleAdmin"){let P=s.users[w.dataset.id];if(!P||P.id===s.uid)return;if(De!==w){De&&(De.textContent=De.dataset.label),De=w,w.dataset.label=w.textContent,w.textContent="Confirmar",setTimeout(()=>{De===w&&(w.textContent=w.dataset.label,De=null)},4e3);return}De=null,O("ulist")._last=null;let L=P.role!=="admin";try{await n.updateDoc(n.doc(i,"users",P.id),{role:L?"admin":"player"}),ye(P.name+(L?" passou a ter acesso \xE0 banca":" deixou de ter acesso \xE0 banca"))}catch(M){d(M)}}else if(E==="authTab")a.authTab=w.dataset.v,O("authNote").textContent="",ue();else if(E==="logout")try{await n.signOut(r)}catch(P){d(P)}else if(E==="sit")Ki();else if(E==="zone")Le(w.dataset.k);else if(E==="chip")a.chip=+w.dataset.v,a.mode==="multi"&&(a.stake=(a.stake||0)+a.chip),ue();else if(E==="mode")a.mode=a.mode===w.dataset.v?"bet":w.dataset.v,ue();else if(E==="leg")a.legs=a.legs.filter(P=>P!==w.dataset.k),ue();else if(E==="clearSlip")a.legs=[],a.stake=0,ue();else if(E==="placeMulti")tr();else if(E==="repeat")Wi();else if(E==="cancelMulti")try{await n.deleteDoc(n.doc(i,"bets",w.dataset.id)),ye("M\xFAltipla cancelada")}catch(P){d(P)}else if(E==="tab")a.tab=w.dataset.v,ue();else if(E==="ptab")a.ptab=w.dataset.v,a.mode="bet",a.legs=[],ue(),window.scrollTo(0,0);else if(E==="saveMax"){let P=Math.max(0,Math.floor(+O("maxBet").value||0));try{await n.updateDoc(u.game,{maxBet:P}),O("maxBet").blur(),ye(P?"M\xE1ximo por aposta: "+Q(P)+" fichas":"Sem m\xE1ximo por aposta")}catch(L){d(L)}}else if(E==="toggleOpen")try{await n.updateDoc(u.game,{open:!s.game.open})}catch(P){d(P)}else if(E==="diceMode"){if(s.game.diceMode!==w.dataset.v)try{await n.updateDoc(u.game,{diceMode:w.dataset.v})}catch(P){d(P)}}else if(E==="roll")Ji();else if(E==="face")a.dice.length<5&&(a.dice.push(+w.dataset.v),ue());else if(E==="slot"){let P=+w.dataset.i;a.dice[P]&&(a.dice.splice(P,1),ue())}else if(E==="clearDice")a.dice=[],ue();else if(E==="settle")An();else if(E==="undo")Yi();else if(E==="closeReveal")bn();else if(E==="copy"){let P=O("shareUrl");try{await navigator.clipboard.writeText(P.value),ye("Link copiado")}catch{P.select(),ye("Selecionei o link: copie-o")}}else if(E==="saveInit"){let P=Math.max(0,Math.floor(+O("initChips").value||0));try{await n.updateDoc(u.game,{initial:P}),ye("Quem se sentar a seguir come\xE7a com "+Q(P)+" fichas")}catch(L){d(L)}}else if(E==="give"||E==="takeChips"){let P=s.players[w.dataset.id],L=O("amt-"+P.id),M=Math.floor(+L.value);if(!(M>0)){ye("Escreva a quantidade de fichas"),L.focus();return}if(E==="takeChips"&&M>P.chips){ye(P.name+" s\xF3 tem "+Q(P.chips)+" fichas");return}try{await n.updateDoc(n.doc(i,"players",P.id),{chips:P.chips+(E==="give"?M:-M)}),L.value="",L.blur(),ye((E==="give"?"Dadas ":"Tiradas ")+Q(M)+" fichas a "+P.name)}catch(j){d(j)}}else if(E==="remove"||E==="reset"){if(De!==w){De&&(De.textContent=De.dataset.label),De=w,w.dataset.label=w.textContent,w.textContent="Confirmar",setTimeout(()=>{De===w&&(w.textContent=w.dataset.label,De=null)},4e3);return}if(De=null,w.textContent=w.dataset.label,O("plist")&&(O("plist")._last=null),E==="reset")jr();else{let P=w.dataset.id,L=n.writeBatch(i);L.delete(n.doc(i,"players",P)),s.bets.filter(M=>M.uid===P).forEach(M=>L.delete(n.doc(i,"bets",M.id)));try{await L.commit(),ye("Jogador removido da mesa")}catch(M){d(M)}}}}),document.addEventListener("keydown",g=>{g.key==="Escape"&&!it.hidden&&bn()}),document.addEventListener("input",g=>{g.target.id==="stake"&&(a.stake=Math.max(0,Math.floor(+g.target.value||0)))}),document.addEventListener("change",g=>{g.target.id==="stake"&&(g.target.blur(),ue())}),ue()}Jm(jl);
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
