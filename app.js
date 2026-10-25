var Ig=Object.defineProperty;var Eg=(n,e)=>{for(var t in e)Ig(n,t,{get:e[t],enumerable:!0})};var Kl={};Eg(Kl,{addDoc:()=>jm,collection:()=>Pm,createUserWithEmailAndPassword:()=>Tc,deleteDoc:()=>Bm,doc:()=>zl,getDoc:()=>Mm,init:()=>DI,onAuthStateChanged:()=>Ac,onSnapshot:()=>qm,setDoc:()=>Fm,signInAnonymously:()=>Ec,signInWithEmailAndPassword:()=>bc,signOut:()=>Sc,updateDoc:()=>Um,writeBatch:()=>Gm});var Fh=()=>{};var jh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Tg=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,y=(s&3)<<4|u>>4,E=(u&15)<<2|d>>6,k=d&63;l||(k=64,a||(E=64)),r.push(t[p],t[y],t[E],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||y==null)throw new Ra;let E=s<<2|u>>4;if(r.push(E),d!==64){let k=u<<4&240|d>>2;if(r.push(k),y!==64){let L=d<<6&192|y;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Ra=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},bg=function(n){let e=jh(n);return qh.encodeByteArray(e,!0)},di=function(n){return bg(n).replace(/\./g,"")},_s=function(n){try{return qh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Ag=()=>zh().__FIREBASE_DEFAULTS__,Sg=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&_s(n[1]);return e&&JSON.parse(e)},ys=()=>{try{return Fh()||Ag()||Sg()||Rg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ca=n=>{var e,t;return(t=(e=ys())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Gh=n=>{let e=Ca(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ka=()=>{var n;return(n=ys())===null||n===void 0?void 0:n.config},Da=n=>{var e;return(e=ys())===null||e===void 0?void 0:e[`_${n}`]};var gs=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Yt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vs(n){return(await fetch(n,{credentials:"include"})).ok}function $h(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[di(JSON.stringify(t)),di(JSON.stringify(a)),""].join(".")}var hi={};function Pg(){let n={prod:[],emulator:[]};for(let e of Object.keys(hi))hi[e]?n.emulator.push(e):n.prod.push(e);return n}function Cg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var Uh=!1;function ws(n,e){if(typeof window>"u"||typeof document>"u"||!Yt(window.location.host)||hi[n]===e||hi[n]||Uh)return;hi[n]=e;function t(E){return`__firebase__banner__${E}`}let r="__firebase__banner",s=Pg().prod.length>0;function a(){let E=document.getElementById(r);E&&E.remove()}function u(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function l(E,k){E.setAttribute("width","24"),E.setAttribute("id",k),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){let E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Uh=!0,a()},E}function p(E,k){E.setAttribute("id",k),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function y(){let E=Cg(r),k=t("text"),L=document.getElementById(k)||document.createElement("span"),j=t("learnmore"),F=document.getElementById(j)||document.createElement("a"),te=t("preprendIcon"),J=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){let Y=E.element;u(Y),p(F,j);let ae=d();l(J,te),Y.append(J,L,F,ae),document.body.appendChild(Y)}s?(L.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function kg(){var n;let e=(n=ys())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jh(){let n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Yh(){return!kg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Na(){try{return typeof indexedDB=="object"}catch{return!1}}function Xh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Dg="FirebaseError",et=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Dg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vt.prototype.create)}},Vt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Ng(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new et(i,u,r)}};function Ng(n,e){return n.replace(Og,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Og=/\{\$([^}]+)}/g;function Zh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _t(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(Bh(s)&&Bh(a)){if(!_t(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Bh(n){return n!==null&&typeof n=="object"}function cr(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ur(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function lr(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ed(n,e){let t=new Pa(n,e);return t.subscribe.bind(t)}var Pa=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Sa),i.error===void 0&&(i.error=Sa),i.complete===void 0&&(i.complete=Sa);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function xg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sa(){}var jI=4*60*60*1e3;function we(n){return n&&n._delegate?n._delegate:n}var st=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Sn="[DEFAULT]";var Oa=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new gs;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Vg(n){return n===Sn?void 0:n}function Lg(n){return n.instantiationMode==="EAGER"}var Is=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Oa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Mg=[],re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));var Fg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Ug=re.INFO,Bg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},jg=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Bg[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Xt=class{constructor(e){this.name=e,this._logLevel=Ug,this._logHandler=jg,this._userLogHandler=null,Mg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}};var qg=(n,e)=>e.some(t=>n instanceof t),td,nd;function zg(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gg(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var rd=new WeakMap,Va=new WeakMap,id=new WeakMap,xa=new WeakMap,Ma=new WeakMap;function $g(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(yt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&rd.set(t,n)}).catch(()=>{}),Ma.set(e,n),e}function Hg(n){if(Va.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Va.set(n,e)}var La={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Va.get(n);if(e==="objectStoreNames")return n.objectStoreNames||id.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sd(n){La=n(La)}function Wg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(Es(this),e,...t);return id.set(r,e.sort?e.sort():[e]),yt(r)}:Gg().includes(n)?function(...e){return n.apply(Es(this),e),yt(rd.get(this))}:function(...e){return yt(n.apply(Es(this),e))}}function Kg(n){return typeof n=="function"?Wg(n):(n instanceof IDBTransaction&&Hg(n),qg(n,zg())?new Proxy(n,La):n)}function yt(n){if(n instanceof IDBRequest)return $g(n);if(xa.has(n))return xa.get(n);let e=Kg(n);return e!==n&&(xa.set(n,e),Ma.set(e,n)),e}var Es=n=>Ma.get(n);function ad(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),u=yt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(yt(a.result),l.oldVersion,l.newVersion,yt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var Qg=["get","getKey","getAll","getAllKeys","count"],Jg=["put","add","delete","clear"],Fa=new Map;function od(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=Jg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qg.includes(t)))return;let s=async function(a,...u){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return Fa.set(e,s),s}sd(n=>({...n,get:(e,t,r)=>od(e,t)||n.get(e,t,r),has:(e,t)=>!!od(e,t)||n.has(e,t)}));var Ba=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yg(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Yg(n){let e=n.getComponent();return e?.type==="VERSION"}var ja="@firebase/app",cd="0.13.2";var Lt=new Xt("@firebase/app"),Xg="@firebase/app-compat",Zg="@firebase/analytics-compat",e_="@firebase/analytics",t_="@firebase/app-check-compat",n_="@firebase/app-check",r_="@firebase/auth",i_="@firebase/auth-compat",s_="@firebase/database",o_="@firebase/data-connect",a_="@firebase/database-compat",c_="@firebase/functions",u_="@firebase/functions-compat",l_="@firebase/installations",h_="@firebase/installations-compat",d_="@firebase/messaging",f_="@firebase/messaging-compat",p_="@firebase/performance",m_="@firebase/performance-compat",g_="@firebase/remote-config",__="@firebase/remote-config-compat",y_="@firebase/storage",v_="@firebase/storage-compat",w_="@firebase/firestore",I_="@firebase/ai",E_="@firebase/firestore-compat",T_="firebase",b_="11.10.0";var qa="[DEFAULT]",A_={[ja]:"fire-core",[Xg]:"fire-core-compat",[e_]:"fire-analytics",[Zg]:"fire-analytics-compat",[n_]:"fire-app-check",[t_]:"fire-app-check-compat",[r_]:"fire-auth",[i_]:"fire-auth-compat",[s_]:"fire-rtdb",[o_]:"fire-data-connect",[a_]:"fire-rtdb-compat",[c_]:"fire-fn",[u_]:"fire-fn-compat",[l_]:"fire-iid",[h_]:"fire-iid-compat",[d_]:"fire-fcm",[f_]:"fire-fcm-compat",[p_]:"fire-perf",[m_]:"fire-perf-compat",[g_]:"fire-rc",[__]:"fire-rc-compat",[y_]:"fire-gcs",[v_]:"fire-gcs-compat",[w_]:"fire-fst",[E_]:"fire-fst-compat",[I_]:"fire-vertex","fire-js":"fire-js",[T_]:"fire-js-all"};var Ts=new Map,S_=new Map,za=new Map;function ud(n,e){try{n.container.addComponent(e)}catch(t){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){let e=n.name;if(za.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,n);for(let t of Ts.values())ud(t,n);for(let t of S_.values())ud(t,n);return!0}function pi(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ke(n){return n==null?!1:n.settings!==void 0}var R_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Vt("app","Firebase",R_);var Ga=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}};var tn=b_;function Wa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:qa,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(t||(t=ka()),!t)throw Zt.create("no-options");let s=Ts.get(i);if(s){if(_t(t,s.options)&&_t(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}let a=new Is(i);for(let l of za.values())a.addComponent(l);let u=new Ga(t,r,a);return Ts.set(i,u),u}function bs(n=qa){let e=Ts.get(n);if(!e&&n===qa&&ka())return Wa();if(!e)throw Zt.create("no-app",{appName:n});return e}function lt(n,e,t){var r;let i=(r=A_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(u.join(" "));return}en(new st(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var P_="firebase-heartbeat-database",C_=1,fi="firebase-heartbeat-store",Ua=null;function fd(){return Ua||(Ua=ad(P_,C_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Ua}async function k_(n){try{let t=(await fd()).transaction(fi),r=await t.objectStore(fi).get(pd(n));return await t.done,r}catch(e){if(e instanceof et)Lt.warn(e.message);else{let t=Zt.create("idb-get",{originalErrorMessage:e?.message});Lt.warn(t.message)}}}async function ld(n,e){try{let r=(await fd()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,pd(n)),await r.done}catch(t){if(t instanceof et)Lt.warn(t.message);else{let r=Zt.create("idb-set",{originalErrorMessage:t?.message});Lt.warn(r.message)}}}function pd(n){return`${n.name}!${n.options.appId}`}var D_=1024,N_=30,$a=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Ha(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>N_){let a=x_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=hd(),{heartbeatsToSend:r,unsentEntries:i}=O_(this._heartbeatsCache.heartbeats),s=di(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Lt.warn(t),""}}};function hd(){return new Date().toISOString().substring(0,10)}function O_(n,e=D_){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),dd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),dd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Ha=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Na()?Xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await k_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return ld(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return ld(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function dd(n){return di(JSON.stringify({version:2,heartbeats:n})).length}function x_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function V_(n){en(new st("platform-logger",e=>new Ba(e),"PRIVATE")),en(new st("heartbeat",e=>new $a(e),"PRIVATE")),lt(ja,cd,n),lt(ja,cd,"esm2017"),lt("fire-js","")}V_("");var L_="firebase",M_="11.10.0";lt(L_,M_,"app");function As(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Od(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var xd=Od,Vd=new Vt("auth","Firebase",Od());var Ns=new Xt("@firebase/auth");function F_(n,...e){Ns.logLevel<=re.WARN&&Ns.warn(`Auth (${tn}): ${n}`,...e)}function Rs(n,...e){Ns.logLevel<=re.ERROR&&Ns.error(`Auth (${tn}): ${n}`,...e)}function ht(n,...e){throw yc(n,...e)}function wt(n,...e){return yc(n,...e)}function Ld(n,e,t){let r=Object.assign(Object.assign({},xd()),{[e]:t});return new Vt("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return Ld(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vd.create(n,...e)}function $(n,e,...t){if(!n)throw yc(e,...t)}function vt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Rs(e),new Error(e)}function Ft(n,e){n||vt(e)}function Za(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function U_(){return md()==="http:"||md()==="https:"}function md(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function B_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U_()||Kh()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Rn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Hh()||Qh()}get(){return B_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function vc(n,e){Ft(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Os=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var z_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],G_=new Rn(3e4,6e4);function De(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ge(n,e,t,r,i={}){return Md(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let u=cr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return Wh()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(d.credentials="include"),Os.fetch()(await Fd(n,n.config.apiHost,t,u),d)})}async function Md(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},q_),e);try{let i=new ec(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw gi(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gi(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw gi(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw gi(n,"user-disabled",a);let p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ld(n,p,d);ht(n,p)}}catch(i){if(i instanceof et)throw i;ht(n,"network-request-failed",{message:String(i)})}}async function on(n,e,t,r,i={}){let s=await Ge(n,e,t,r,i);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Fd(n,e,t,r){let i=`${e}${t}?${r}`,s=n,a=s.config.emulator?vc(n.config,i):`${n.config.apiScheme}://${i}`;return z_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function $_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var ec=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),G_.get())})}};function gi(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=wt(n,e,r);return i.customData._tokenResponse=t,i}function gd(n){return n!==void 0&&n.enterprise!==void 0}var xs=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Ud(n,e){return Ge(n,"GET","/v2/recaptchaConfig",De(n,e))}async function H_(n,e){return Ge(n,"POST","/v1/accounts:delete",e)}async function Vs(n,e){return Ge(n,"POST","/v1/accounts:lookup",e)}function _i(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bd(n,e=!1){let t=we(n),r=await t.getIdToken(e),i=wc(r);$(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:_i(Ka(i.auth_time)),issuedAtTime:_i(Ka(i.iat)),expirationTime:_i(Ka(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ka(n){return Number(n)*1e3}function wc(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{let i=_s(t);return i?JSON.parse(i):(Rs("Failed to decode base64 JWT payload"),null)}catch(i){return Rs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function _d(n){let e=wc(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function wi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof et&&W_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function W_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var tc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Ii=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Ls(n){var e;let t=n.auth,r=await n.getIdToken(),i=await wi(n,Vs(t,{idToken:r}));$(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qd(s.providerUserInfo):[],u=K_(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,p=l?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Ii(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function jd(n){let e=we(n);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qd(n){return n.map(e=>{var{providerId:t}=e,r=As(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Q_(n,e){let t=await Md(n,{},async()=>{let r=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Fd(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(l.credentials="include"),Os.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function J_(n,e){return Ge(n,"POST","/v2/accounts:revokeToken",De(n,e))}var yi=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_d(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");let t=_d(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await Q_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return vt("not implemented")}};function nn(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var rn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=As(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ii(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await wi(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Bd(this,e)}reload(){return jd(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ls(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(It(this.auth));let e=await this.getIdToken();return await wi(this,H_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,p;let y=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,k=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,L=(a=t.photoURL)!==null&&a!==void 0?a:void 0,j=(u=t.tenantId)!==null&&u!==void 0?u:void 0,F=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,te=(d=t.createdAt)!==null&&d!==void 0?d:void 0,J=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:Y,emailVerified:ae,isAnonymous:be,providerData:ie,stsTokenManager:T}=t;$(Y&&T,e,"internal-error");let g=yi.fromJSON(this.name,T);$(typeof Y=="string",e,"internal-error"),nn(y,e.name),nn(E,e.name),$(typeof ae=="boolean",e,"internal-error"),$(typeof be=="boolean",e,"internal-error"),nn(k,e.name),nn(L,e.name),nn(j,e.name),nn(F,e.name),nn(te,e.name),nn(J,e.name);let w=new n({uid:Y,auth:e,email:E,emailVerified:ae,displayName:y,isAnonymous:be,photoURL:L,phoneNumber:k,tenantId:j,stsTokenManager:g,createdAt:te,lastLoginAt:J});return ie&&Array.isArray(ie)&&(w.providerData=ie.map(b=>Object.assign({},b))),F&&(w._redirectEventId=F),w}static async _fromIdTokenResponse(e,t,r=!1){let i=new yi;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ls(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];$(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?qd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new yi;u.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ii(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var yd=new Map;function Mt(n){Ft(n instanceof Function,"Expected a class definition");let e=yd.get(n);return e?(Ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yd.set(n,e),e)}var Ms=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ms.type="NONE";var nc=Ms;function Ps(n,e,t){return`firebase:${n}:${e}:${t}`}var Fs=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Ps(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ps("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Vs(this.auth,{idToken:e}).catch(()=>{});return t?rn._fromGetAccountInfoResponse(this.auth,t,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Mt(nc),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||Mt(nc),a=Ps(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let p=await d._get(a);if(p){let y;if(typeof p=="string"){let E=await Vs(e,{idToken:p}).catch(()=>{});if(!E)break;y=await rn._fromGetAccountInfoResponse(e,E,p)}else y=rn._fromJSON(e,p);d!==s&&(u=y),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function vd(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kd(e))return"Blackberry";if(Qd(e))return"Webos";if(Gd(e))return"Safari";if((e.includes("chrome/")||$d(e))&&!e.includes("edge/"))return"Chrome";if(Wd(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function zd(n=Oe()){return/firefox\//i.test(n)}function Gd(n=Oe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $d(n=Oe()){return/crios\//i.test(n)}function Hd(n=Oe()){return/iemobile/i.test(n)}function Wd(n=Oe()){return/android/i.test(n)}function Kd(n=Oe()){return/blackberry/i.test(n)}function Qd(n=Oe()){return/webos/i.test(n)}function Ic(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Y_(n=Oe()){var e;return Ic(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X_(){return Jh()&&document.documentMode===10}function Jd(n=Oe()){return Ic(n)||Wd(n)||Qd(n)||Kd(n)||/windows phone/i.test(n)||Hd(n)}function Yd(n,e=[]){let t;switch(n){case"Browser":t=vd(Oe());break;case"Worker":t=`${vd(Oe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tn}/${r}`}var rc=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,u)=>{try{let l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function Z_(n,e={}){return Ge(n,"GET","/v2/passwordPolicy",De(n,e))}var ey=6,ic=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ey,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var sc=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Us(this),this.idTokenSubscription=new Us(this),this.beforeStateQueue=new rc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Vs(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ke(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ls(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(It(this));let t=e?we(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Z_(this),t=new ic(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await J_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Mt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&F_(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Tt(n){return we(n)}var Us=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=ed(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ty(n){ro=n}function Xd(n){return ro.loadJS(n)}function ny(){return ro.recaptchaEnterpriseScript}function ry(){return ro.gapiScript}function Zd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var oc=class{constructor(){this.enterprise=new ac}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},ac=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var iy="recaptcha-enterprise",vi="NO_RECAPTCHA",Bs=class{constructor(e){this.type=iy,this.auth=Tt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{Ud(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new xs(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){let l=window.grecaptcha;gd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(vi)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oc().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&gd(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ny();l.length!==0&&(l+=u),Xd(l).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function mi(n,e,t,r=!1,i=!1){let s=new Bs(n),a;if(i)a=vi;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){let l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){let l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function hr(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let u=await mi(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await mi(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(u)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let u=await mi(n,e,t);return r(n,u).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let p=await mi(n,e,t,!1,!0);return r(n,p)}return Promise.reject(l)})}else{let u=await mi(n,e,t,!1,!0);return r(n,u)}else return Promise.reject(i+" provider is not supported.")}async function sy(n){let e=Tt(n),t=await Ud(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new xs(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Bs(e).verify()}function ef(n,e){let t=pi(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(_t(s,e??{}))return i;ht(i,"already-initialized")}return t.initialize({options:e})}function oy(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Mt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function tf(n,e,t){let r=Tt(n);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=nf(e),{host:a,port:u}=ay(e),l=u===null?"":`:${u}`,d={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(_t(d,r.config.emulator)&&_t(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Yt(a)?(vs(`${s}//${a}${l}`),ws("Auth",!0)):i||cy()}function nf(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ay(n){let e=nf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:wd(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:wd(a)}}}function wd(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function cy(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var Pn=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}};async function uy(n,e){return Ge(n,"POST","/v1/accounts:signUp",e)}async function ly(n,e){return on(n,"POST","/v1/accounts:signInWithPassword",De(n,e))}async function hy(n,e){return on(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}async function dy(n,e){return on(n,"POST","/v1/accounts:signInWithEmailLink",De(n,e))}var Ei=class n extends Pn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hr(e,t,"signInWithPassword",ly,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hy(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hr(e,r,"signUpPassword",uy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dy(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function dr(n,e){return on(n,"POST","/v1/accounts:signInWithIdp",De(n,e))}var fy="http://localhost",Cn=class n extends Pn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=As(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return dr(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,dr(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,dr(e,t)}buildRequest(){let e={requestUri:fy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=cr(t)}return e}};async function Id(n,e){return Ge(n,"POST","/v1/accounts:sendVerificationCode",De(n,e))}async function py(n,e){return on(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,e))}async function my(n,e){let t=await on(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,e));if(t.temporaryProof)throw gi(n,"account-exists-with-different-credential",t);return t}var gy={USER_NOT_FOUND:"user-not-found"};async function _y(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return on(n,"POST","/v1/accounts:signInWithPhoneNumber",De(n,t),gy)}var Ti=class n extends Pn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return py(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return my(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _y(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function yy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vy(n){let e=ur(lr(n)).link,t=e?ur(lr(e)).deep_link_id:null,r=ur(lr(n)).deep_link_id;return(r?ur(lr(r)).link:null)||r||t||e||n}var js=class n{constructor(e){var t,r,i,s,a,u;let l=ur(lr(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,y=yy((i=l.mode)!==null&&i!==void 0?i:null);$(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=vy(e);try{return new n(t)}catch{return null}}};var kn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=js.parseLink(t);return $(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}};kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var qs=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Dn=class extends qs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var bi=class n extends Dn{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";bi.PROVIDER_ID="facebook.com";var Ai=class n extends Dn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";var Si=class n extends Dn{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";var Ri=class n extends Dn{constructor(){super("twitter.com")}static credential(e,t){return Cn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};Ri.TWITTER_SIGN_IN_METHOD="twitter.com";Ri.PROVIDER_ID="twitter.com";async function rf(n,e){return on(n,"POST","/v1/accounts:signUp",De(n,e))}var sn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await rn._fromIdTokenResponse(e,r,i),a=Ed(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=Ed(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function Ed(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function Ec(n){var e;if(Ke(n.app))return Promise.reject(It(n));let t=Tt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new sn({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await rf(t,{returnSecureToken:!0}),i=await sn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var cc=class n extends et{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function sf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(n,s,e,r):s})}async function wy(n,e,t=!1){let r=await wi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sn._forOperation(n,"link",r)}async function Iy(n,e,t=!1){let{auth:r}=n;if(Ke(r.app))return Promise.reject(It(r));let i="reauthenticate";try{let s=await wi(n,sf(r,i,e,n),t);$(s.idToken,r,"internal-error");let a=wc(s.idToken);$(a,r,"internal-error");let{sub:u}=a;return $(n.uid===u,r,"user-mismatch"),sn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}async function of(n,e,t=!1){if(Ke(n.app))return Promise.reject(It(n));let r="signIn",i=await sf(n,r,e),s=await sn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function af(n,e){return of(Tt(n),e)}async function cf(n){let e=Tt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Tc(n,e,t){if(Ke(n.app))return Promise.reject(It(n));let r=Tt(n),a=await hr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rf,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cf(n),l}),u=await sn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function bc(n,e,t){return Ke(n.app)?Promise.reject(It(n)):af(we(n),kn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cf(n),r})}function uf(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function lf(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function Ac(n,e,t,r){return we(n).onAuthStateChanged(e,t,r)}function Sc(n){return we(n).signOut()}function Td(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",De(n,e))}function Ey(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",De(n,e))}function Ty(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:start",De(n,e))}function by(n,e){return Ge(n,"POST","/v2/accounts/mfaEnrollment:finalize",De(n,e))}var zs="__sak";var Gs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zs,"1"),this.storage.removeItem(zs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Ay=1e3,Sy=10,$s=class extends Gs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);X_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Sy):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ay)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};$s.type="LOCAL";var hf=$s;var Ry=1e3;function Qa(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function Ja(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var uc=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Ja(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return Qa(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=Ja(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=Ja(e);if(window.cookieStore){let u=d=>{let p=d.changed.find(E=>E.name===r);p&&t(p.value),d.deleted.find(E=>E.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",u);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",u)}let i=Qa(r),s=setInterval(()=>{let u=Qa(r);u!==i&&(t(u),i=u)},Ry),a=()=>clearInterval(s);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};uc.type="COOKIE";var Hs=class extends Gs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Hs.type="SESSION";var Rc=Hs;function Py(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Ws=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,s)),l=await Py(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Ws.receivers=[];function Pc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var lc=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{let d=Pc("",20);i.port1.start();let p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){let E=y;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(E.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Et(){return window}function Cy(n){Et().location.href=n}function df(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function ky(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ny(){return df()?self:null}var ff="firebaseLocalStorageDb",Oy=1,Ks="firebaseLocalStorage",pf="fbase_key",Nn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function io(n,e){return n.transaction([Ks],e?"readwrite":"readonly").objectStore(Ks)}function xy(){let n=indexedDB.deleteDatabase(ff);return new Nn(n).toPromise()}function hc(){let n=indexedDB.open(ff,Oy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Ks,{keyPath:pf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Ks)?e(r):(r.close(),await xy(),e(await hc()))})})}async function bd(n,e,t){let r=io(n,!0).put({[pf]:e,value:t});return new Nn(r).toPromise()}async function Vy(n,e){let t=io(n,!1).get(e),r=await new Nn(t).toPromise();return r===void 0?null:r.value}function Ad(n,e){let t=io(n,!0).delete(e);return new Nn(t).toPromise()}var Ly=800,My=3,Qs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>My)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return df()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(Ny()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ky(),!this.activeServiceWorker)return;this.sender=new lc(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await hc();return await bd(e,zs,"1"),await Ad(e,zs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>bd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Vy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ad(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=io(i,!1).getAll();return new Nn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Qs.type="LOCAL";var mf=Qs;function Sd(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:start",De(n,e))}function Fy(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",De(n,e))}function Uy(n,e){return Ge(n,"POST","/v2/accounts/mfaSignIn:finalize",De(n,e))}var mE=Zd("rcb"),gE=new Rn(3e4,6e4);var Cs="recaptcha";async function By(n,e,t){var r;if(!n._getRecaptchaConfig())try{await sy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){$(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await hr(n,a,"mfaSmsEnrollment",async(p,y)=>{if(y.phoneEnrollmentInfo.captchaResponse===vi){$(t?.type===Cs,p,"argument-error");let E=await Ya(p,y,t);return Td(p,E)}return Td(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneSessionInfo.sessionInfo}else{$(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;$(a,n,"missing-multi-factor-info");let u={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await hr(n,u,"mfaSmsSignIn",async(y,E)=>{if(E.phoneSignInInfo.captchaResponse===vi){$(t?.type===Cs,y,"argument-error");let k=await Ya(y,E,t);return Sd(y,k)}return Sd(y,E)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await hr(n,s,"sendVerificationCode",async(d,p)=>{if(p.captchaResponse===vi){$(t?.type===Cs,d,"argument-error");let y=await Ya(d,p,t);return Id(d,y)}return Id(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function Ya(n,e,t){$(t.type===Cs,n,"argument-error");let r=await t.verify();$(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,u=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:u,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,u=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:u}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var Pi=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Tt(e)}verifyPhoneNumber(e,t){return By(this.auth,e,we(t))}static credential(e,t){return Ti._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?Ti._fromTokenResponse(t,r):null}};Pi.PROVIDER_ID="phone";Pi.PHONE_SIGN_IN_METHOD="phone";function jy(n,e){return e?Mt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var Ci=class extends Pn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dr(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function qy(n){return of(n.auth,new Ci(n),n.bypassAuthState)}function zy(n){let{auth:e,user:t}=n;return $(t,e,"internal-error"),Iy(t,new Ci(n),n.bypassAuthState)}async function Gy(n){let{auth:e,user:t}=n;return $(t,e,"internal-error"),wy(t,new Ci(n),n.bypassAuthState)}var Js=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qy;case"linkViaPopup":case"linkViaRedirect":return Gy;case"reauthViaPopup":case"reauthViaRedirect":return zy;default:ht(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var $y=new Rn(2e3,1e4);var dc=class n extends Js{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");let e=Pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$y.get())};e()}};dc.currentPopupAction=null;var Hy="pendingRedirect",ks=new Map,fc=class extends Js{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ks.get(this.auth._key());if(!e){try{let r=await Wy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ks.set(this.auth._key(),e)}return this.bypassAuthState||ks.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Wy(n,e){let t=Jy(e),r=Qy(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function Ky(n,e){ks.set(n._key(),e)}function Qy(n){return Mt(n._redirectPersistence)}function Jy(n){return Ps(Hy,n.config.apiKey,n.name)}async function Yy(n,e,t=!1){if(Ke(n.app))return Promise.reject(It(n));let r=Tt(n),i=jy(r,e),a=await new fc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var Xy=10*60*1e3,pc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gf(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rd(e))}saveEventToCache(e){this.cachedEventUids.add(Rd(e)),this.lastProcessedEventTime=Date.now()}};function Rd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Zy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gf(n);default:return!1}}async function ev(n,e={}){return Ge(n,"GET","/v1/projects",e)}var tv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nv=/^https?/;async function rv(n){if(n.config.emulator)return;let{authorizedDomains:e}=await ev(n);for(let t of e)try{if(iv(t))return}catch{}ht(n,"unauthorized-domain")}function iv(n){let e=Za(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!nv.test(t))return!1;if(tv.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var sv=new Rn(3e4,6e4);function Pd(){let n=Et().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ov(n){return new Promise((e,t)=>{var r,i,s;function a(){Pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pd(),t(wt(n,"network-request-failed"))},timeout:sv.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)a();else{let u=Zd("iframefcb");return Et()[u]=()=>{gapi.load?a():t(wt(n,"network-request-failed"))},Xd(`${ry()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Ds=null,e})}var Ds=null;function av(n){return Ds=Ds||ov(n),Ds}var cv=new Rn(5e3,15e3),uv="__/auth/iframe",lv="emulator/auth/iframe",hv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fv(n){let e=n.config;$(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?vc(e,lv):`https://${n.config.authDomain}/${uv}`,r={apiKey:e.apiKey,appName:n.name,v:tn},i=dv.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${cr(r).slice(1)}`}async function pv(n){let e=await av(n),t=Et().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:fv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=wt(n,"network-request-failed"),u=Et().setTimeout(()=>{s(a)},cv.get());function l(){Et().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var mv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gv=500,_v=600,yv="_blank",vv="http://localhost",Ys=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function wv(n,e,t,r=gv,i=_v){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",l=Object.assign(Object.assign({},mv),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Oe().toLowerCase();t&&(u=$d(d)?yv:t),zd(d)&&(e=e||vv,l.scrollbars="yes");let p=Object.entries(l).reduce((E,[k,L])=>`${E}${k}=${L},`,"");if(Y_(d)&&u!=="_self")return Iv(e||"",u),new Ys(null);let y=window.open(e||"",u,p);$(y,n,"popup-blocked");try{y.focus()}catch{}return new Ys(y)}function Iv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var Ev="__/auth/handler",Tv="emulator/auth/handler",bv=encodeURIComponent("fac");async function Cd(n,e,t,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:tn,eventId:i};if(e instanceof qs){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Zh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,y]of Object.entries(s||{}))a[p]=y}if(e instanceof Dn){let p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let l=await n._getAppCheckToken(),d=l?`#${bv}=${encodeURIComponent(l)}`:"";return`${Av(n)}?${cr(u).slice(1)}${d}`}function Av({config:n}){return n.emulator?vc(n,Tv):`https://${n.authDomain}/${Ev}`}var Xa="webStorageSupport",mc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rc,this._completeRedirectFn=Yy,this._overrideRedirectResult=Ky}async _openPopup(e,t,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await Cd(e,t,r,Za(),i);return wv(e,a,Pc())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await Cd(e,t,r,Za(),i);return Cy(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await pv(e),r=new pc(e);return t.register("authEvent",i=>($(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xa,{type:Xa},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[Xa];a!==void 0&&t(!!a),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jd()||Gd()||Ic()}},_f=mc,Xs=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return vt("unexpected MultiFactorSessionType")}}},gc=class n extends Xs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return Ey(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Fy(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Zs=class{constructor(){}static assertion(e){return gc._fromCredential(e)}};Zs.FACTOR_ID="phone";var eo=class{static assertionForEnrollment(e,t){return to._fromSecret(e,t)}static assertionForSignIn(e,t){return to._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;$(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await Ty(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return no._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};eo.FACTOR_ID="totp";var to=class n extends Xs{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return $(typeof this.secret<"u",e,"argument-error"),by(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){$(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Uy(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},no=class n{constructor(e,t,r,i,s,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(Ss(e)||Ss(t))&&(i=!0),i&&(Ss(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ss(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ss(n){return typeof n>"u"||n?.length===0}var kd="@firebase/auth",Dd="1.10.8";var _c=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Sv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rv(n){en(new st("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yd(n)},d=new sc(r,i,s,l);return oy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),en(new st("auth-internal",e=>{let t=Tt(e.getProvider("auth").getImmediate());return(r=>new _c(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(kd,Dd,Sv(n)),lt(kd,Dd,"esm2017")}var Pv=5*60,Cv=Da("authIdTokenMaxAge")||Pv,Nd=null,kv=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Cv)return;let i=t?.token;Nd!==i&&(Nd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cc(n=bs()){let e=pi(n,"auth");if(e.isInitialized())return e.getImmediate();let t=ef(n,{popupRedirectResolver:_f,persistence:[mf,hf,Rc]}),r=Da("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=kv(s.toString());lf(t,a,()=>a(t.currentUser)),uf(t,u=>a(u))}}let i=Ca("auth");return i&&tf(t,`http://${i}`),t}function Dv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ty({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=wt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Dv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rv("Browser");var yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vf={};var Ut,kc;(function(){var n;function e(T,g){function w(){}w.prototype=g.prototype,T.D=g.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(b,A,P){for(var v=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)v[ve-2]=arguments[ve];return g.prototype[A].apply(b,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,w){w||(w=0);var b=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)b[A]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(A=0;16>A;++A)b[A]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=T.g[0],w=T.g[1],A=T.g[2];var P=T.g[3],v=g+(P^w&(A^P))+b[0]+3614090360&4294967295;g=w+(v<<7&4294967295|v>>>25),v=P+(A^g&(w^A))+b[1]+3905402710&4294967295,P=g+(v<<12&4294967295|v>>>20),v=A+(w^P&(g^w))+b[2]+606105819&4294967295,A=P+(v<<17&4294967295|v>>>15),v=w+(g^A&(P^g))+b[3]+3250441966&4294967295,w=A+(v<<22&4294967295|v>>>10),v=g+(P^w&(A^P))+b[4]+4118548399&4294967295,g=w+(v<<7&4294967295|v>>>25),v=P+(A^g&(w^A))+b[5]+1200080426&4294967295,P=g+(v<<12&4294967295|v>>>20),v=A+(w^P&(g^w))+b[6]+2821735955&4294967295,A=P+(v<<17&4294967295|v>>>15),v=w+(g^A&(P^g))+b[7]+4249261313&4294967295,w=A+(v<<22&4294967295|v>>>10),v=g+(P^w&(A^P))+b[8]+1770035416&4294967295,g=w+(v<<7&4294967295|v>>>25),v=P+(A^g&(w^A))+b[9]+2336552879&4294967295,P=g+(v<<12&4294967295|v>>>20),v=A+(w^P&(g^w))+b[10]+4294925233&4294967295,A=P+(v<<17&4294967295|v>>>15),v=w+(g^A&(P^g))+b[11]+2304563134&4294967295,w=A+(v<<22&4294967295|v>>>10),v=g+(P^w&(A^P))+b[12]+1804603682&4294967295,g=w+(v<<7&4294967295|v>>>25),v=P+(A^g&(w^A))+b[13]+4254626195&4294967295,P=g+(v<<12&4294967295|v>>>20),v=A+(w^P&(g^w))+b[14]+2792965006&4294967295,A=P+(v<<17&4294967295|v>>>15),v=w+(g^A&(P^g))+b[15]+1236535329&4294967295,w=A+(v<<22&4294967295|v>>>10),v=g+(A^P&(w^A))+b[1]+4129170786&4294967295,g=w+(v<<5&4294967295|v>>>27),v=P+(w^A&(g^w))+b[6]+3225465664&4294967295,P=g+(v<<9&4294967295|v>>>23),v=A+(g^w&(P^g))+b[11]+643717713&4294967295,A=P+(v<<14&4294967295|v>>>18),v=w+(P^g&(A^P))+b[0]+3921069994&4294967295,w=A+(v<<20&4294967295|v>>>12),v=g+(A^P&(w^A))+b[5]+3593408605&4294967295,g=w+(v<<5&4294967295|v>>>27),v=P+(w^A&(g^w))+b[10]+38016083&4294967295,P=g+(v<<9&4294967295|v>>>23),v=A+(g^w&(P^g))+b[15]+3634488961&4294967295,A=P+(v<<14&4294967295|v>>>18),v=w+(P^g&(A^P))+b[4]+3889429448&4294967295,w=A+(v<<20&4294967295|v>>>12),v=g+(A^P&(w^A))+b[9]+568446438&4294967295,g=w+(v<<5&4294967295|v>>>27),v=P+(w^A&(g^w))+b[14]+3275163606&4294967295,P=g+(v<<9&4294967295|v>>>23),v=A+(g^w&(P^g))+b[3]+4107603335&4294967295,A=P+(v<<14&4294967295|v>>>18),v=w+(P^g&(A^P))+b[8]+1163531501&4294967295,w=A+(v<<20&4294967295|v>>>12),v=g+(A^P&(w^A))+b[13]+2850285829&4294967295,g=w+(v<<5&4294967295|v>>>27),v=P+(w^A&(g^w))+b[2]+4243563512&4294967295,P=g+(v<<9&4294967295|v>>>23),v=A+(g^w&(P^g))+b[7]+1735328473&4294967295,A=P+(v<<14&4294967295|v>>>18),v=w+(P^g&(A^P))+b[12]+2368359562&4294967295,w=A+(v<<20&4294967295|v>>>12),v=g+(w^A^P)+b[5]+4294588738&4294967295,g=w+(v<<4&4294967295|v>>>28),v=P+(g^w^A)+b[8]+2272392833&4294967295,P=g+(v<<11&4294967295|v>>>21),v=A+(P^g^w)+b[11]+1839030562&4294967295,A=P+(v<<16&4294967295|v>>>16),v=w+(A^P^g)+b[14]+4259657740&4294967295,w=A+(v<<23&4294967295|v>>>9),v=g+(w^A^P)+b[1]+2763975236&4294967295,g=w+(v<<4&4294967295|v>>>28),v=P+(g^w^A)+b[4]+1272893353&4294967295,P=g+(v<<11&4294967295|v>>>21),v=A+(P^g^w)+b[7]+4139469664&4294967295,A=P+(v<<16&4294967295|v>>>16),v=w+(A^P^g)+b[10]+3200236656&4294967295,w=A+(v<<23&4294967295|v>>>9),v=g+(w^A^P)+b[13]+681279174&4294967295,g=w+(v<<4&4294967295|v>>>28),v=P+(g^w^A)+b[0]+3936430074&4294967295,P=g+(v<<11&4294967295|v>>>21),v=A+(P^g^w)+b[3]+3572445317&4294967295,A=P+(v<<16&4294967295|v>>>16),v=w+(A^P^g)+b[6]+76029189&4294967295,w=A+(v<<23&4294967295|v>>>9),v=g+(w^A^P)+b[9]+3654602809&4294967295,g=w+(v<<4&4294967295|v>>>28),v=P+(g^w^A)+b[12]+3873151461&4294967295,P=g+(v<<11&4294967295|v>>>21),v=A+(P^g^w)+b[15]+530742520&4294967295,A=P+(v<<16&4294967295|v>>>16),v=w+(A^P^g)+b[2]+3299628645&4294967295,w=A+(v<<23&4294967295|v>>>9),v=g+(A^(w|~P))+b[0]+4096336452&4294967295,g=w+(v<<6&4294967295|v>>>26),v=P+(w^(g|~A))+b[7]+1126891415&4294967295,P=g+(v<<10&4294967295|v>>>22),v=A+(g^(P|~w))+b[14]+2878612391&4294967295,A=P+(v<<15&4294967295|v>>>17),v=w+(P^(A|~g))+b[5]+4237533241&4294967295,w=A+(v<<21&4294967295|v>>>11),v=g+(A^(w|~P))+b[12]+1700485571&4294967295,g=w+(v<<6&4294967295|v>>>26),v=P+(w^(g|~A))+b[3]+2399980690&4294967295,P=g+(v<<10&4294967295|v>>>22),v=A+(g^(P|~w))+b[10]+4293915773&4294967295,A=P+(v<<15&4294967295|v>>>17),v=w+(P^(A|~g))+b[1]+2240044497&4294967295,w=A+(v<<21&4294967295|v>>>11),v=g+(A^(w|~P))+b[8]+1873313359&4294967295,g=w+(v<<6&4294967295|v>>>26),v=P+(w^(g|~A))+b[15]+4264355552&4294967295,P=g+(v<<10&4294967295|v>>>22),v=A+(g^(P|~w))+b[6]+2734768916&4294967295,A=P+(v<<15&4294967295|v>>>17),v=w+(P^(A|~g))+b[13]+1309151649&4294967295,w=A+(v<<21&4294967295|v>>>11),v=g+(A^(w|~P))+b[4]+4149444226&4294967295,g=w+(v<<6&4294967295|v>>>26),v=P+(w^(g|~A))+b[11]+3174756917&4294967295,P=g+(v<<10&4294967295|v>>>22),v=A+(g^(P|~w))+b[2]+718787259&4294967295,A=P+(v<<15&4294967295|v>>>17),v=w+(P^(A|~g))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+P&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var w=g-this.blockSize,b=this.B,A=this.h,P=0;P<g;){if(A==0)for(;P<=w;)i(this,T,P),P+=this.blockSize;if(typeof T=="string"){for(;P<g;)if(b[A++]=T.charCodeAt(P++),A==this.blockSize){i(this,b),A=0;break}}else for(;P<g;)if(b[A++]=T[P++],A==this.blockSize){i(this,b),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var w=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=w&255,w/=256;for(this.u(T),T=Array(16),g=w=0;4>g;++g)for(var b=0;32>b;b+=8)T[w++]=this.g[g]>>>b&255;return T};function s(T,g){var w=u;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=g(T)}function a(T,g){this.h=g;for(var w=[],b=!0,A=T.length-1;0<=A;A--){var P=T[A]|0;b&&P==g||(w[A]=P,b=!1)}this.g=w}var u={};function l(T){return-128<=T&&128>T?s(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return F(d(-T));for(var g=[],w=1,b=0;T>=w;b++)g[b]=T/w|0,w*=4294967296;return new a(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return F(p(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(g,8)),b=y,A=0;A<T.length;A+=8){var P=Math.min(8,T.length-A),v=parseInt(T.substring(A,A+P),g);8>P?(P=d(Math.pow(g,P)),b=b.j(P).add(d(v))):(b=b.j(w),b=b.add(d(v)))}return b}var y=l(0),E=l(1),k=l(16777216);n=a.prototype,n.m=function(){if(j(this))return-F(this).m();for(var T=0,g=1,w=0;w<this.g.length;w++){var b=this.i(w);T+=(0<=b?b:4294967296+b)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(L(this))return"0";if(j(this))return"-"+F(this).toString(T);for(var g=d(Math.pow(T,6)),w=this,b="";;){var A=ae(w,g).g;w=te(w,A.j(g));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=A,L(w))return P+b;for(;6>P.length;)P="0"+P;b=P+b}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function L(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function j(T){return T.h==-1}n.l=function(T){return T=te(this,T),j(T)?-1:L(T)?0:1};function F(T){for(var g=T.g.length,w=[],b=0;b<g;b++)w[b]=~T.g[b];return new a(w,~T.h).add(E)}n.abs=function(){return j(this)?F(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0,A=0;A<=g;A++){var P=b+(this.i(A)&65535)+(T.i(A)&65535),v=(P>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);b=v>>>16,P&=65535,v&=65535,w[A]=v<<16|P}return new a(w,w[w.length-1]&-2147483648?-1:0)};function te(T,g){return T.add(F(g))}n.j=function(T){if(L(this)||L(T))return y;if(j(this))return j(T)?F(this).j(F(T)):F(F(this).j(T));if(j(T))return F(this.j(F(T)));if(0>this.l(k)&&0>T.l(k))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,w=[],b=0;b<2*g;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(var A=0;A<T.g.length;A++){var P=this.i(b)>>>16,v=this.i(b)&65535,ve=T.i(A)>>>16,gn=T.i(A)&65535;w[2*b+2*A]+=v*gn,J(w,2*b+2*A),w[2*b+2*A+1]+=P*gn,J(w,2*b+2*A+1),w[2*b+2*A+1]+=v*ve,J(w,2*b+2*A+1),w[2*b+2*A+2]+=P*ve,J(w,2*b+2*A+2)}for(b=0;b<g;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=g;b<2*g;b++)w[b]=0;return new a(w,0)};function J(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function Y(T,g){this.g=T,this.h=g}function ae(T,g){if(L(g))throw Error("division by zero");if(L(T))return new Y(y,y);if(j(T))return g=ae(F(T),g),new Y(F(g.g),F(g.h));if(j(g))return g=ae(T,F(g)),new Y(F(g.g),g.h);if(30<T.g.length){if(j(T)||j(g))throw Error("slowDivide_ only works with positive integers.");for(var w=E,b=g;0>=b.l(T);)w=be(w),b=be(b);var A=ie(w,1),P=ie(b,1);for(b=ie(b,2),w=ie(w,2);!L(b);){var v=P.add(b);0>=v.l(T)&&(A=A.add(w),P=v),b=ie(b,1),w=ie(w,1)}return g=te(T,A.j(g)),new Y(A,g)}for(A=y;0<=T.l(g);){for(w=Math.max(1,Math.floor(T.m()/g.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),P=d(w),v=P.j(g);j(v)||0<v.l(T);)w-=b,P=d(w),v=P.j(g);L(P)&&(P=E),A=A.add(P),T=te(T,v)}return new Y(A,T)}n.A=function(T){return ae(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0;b<g;b++)w[b]=this.i(b)&T.i(b);return new a(w,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0;b<g;b++)w[b]=this.i(b)|T.i(b);return new a(w,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),w=[],b=0;b<g;b++)w[b]=this.i(b)^T.i(b);return new a(w,this.h^T.h)};function be(T){for(var g=T.g.length+1,w=[],b=0;b<g;b++)w[b]=T.i(b)<<1|T.i(b-1)>>>31;return new a(w,T.h)}function ie(T,g){var w=g>>5;g%=32;for(var b=T.g.length-w,A=[],P=0;P<b;P++)A[P]=0<g?T.i(P+w)>>>g|T.i(P+w+1)<<32-g:T.i(P+w);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kc=vf.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ut=vf.Integer=a}).apply(typeof yf<"u"?yf:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bt={};var Dc,Nv,fr,Nc,ki,oo,Oc,xc,Vc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var S=o[f];if(!(S in h))break e;h=h[S]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,S={next:function(){if(!f&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,f),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function E(o,c,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,E.apply(null,arguments)}function k(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function L(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,S,C){for(var U=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)U[pe-2]=arguments[pe];return c.prototype[S].apply(f,U)}}function j(o){let c=o.length;if(0<c){let h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function F(o,c){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(l(f)){let S=o.length||0,C=f.length||0;o.length=S+C;for(let U=0;U<C;U++)o[S+U]=f[U]}else o.push(f)}}class te{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function J(o){return/^[\s\xa0]*$/.test(o)}function Y(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function ae(o){return ae[" "](o),o}ae[" "]=function(){};var be=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ie(o,c,h){for(let f in o)c.call(h,o[f],f,o)}function T(o,c){for(let h in o)c.call(void 0,o[h],h,o)}function g(o){let c={};for(let h in o)c[h]=o[h];return c}let w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,c){let h,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(h in f)o[h]=f[h];for(let C=0;C<w.length;C++)h=w[C],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function A(o){var c=1;o=o.split(":");let h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function P(o){u.setTimeout(()=>{throw o},0)}function v(){var o=Wn;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ve{constructor(){this.h=this.g=null}add(c,h){let f=gn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var gn=new te(()=>new ha,o=>o.reset());class ha{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,pt=!1,Wn=new ve,es=()=>{let o=u.Promise.resolve(void 0);Wt=()=>{o.then(Kn)}};var Kn=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){P(h)}var c=gn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}pt=!1};function mt(){this.s=this.s,this.C=this.C}mt.prototype.s=!1,mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function X(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}X.prototype.h=function(){this.defaultPrevented=!0};var _n=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function yn(o,c){if(X.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(be){e:{try{ae(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ts[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&yn.aa.h.call(this)}}L(yn,X);var ts={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Kt="closure_listenable_"+(1e6*Math.random()|0),da=0;function fa(o,c,h,f,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=S,this.key=++da,this.da=this.fa=!1}function Qn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vn(o){this.src=o,this.g={},this.h=0}vn.prototype.add=function(o,c,h,f,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var U=Yn(o,c,f,S);return-1<U?(c=o[U],h||(c.fa=!1)):(c=new fa(c,this.src,C,!!f,S),c.fa=h,o.push(c)),c};function Jn(o,c){var h=c.type;if(h in o.g){var f=o.g[h],S=Array.prototype.indexOf.call(f,c,void 0),C;(C=0<=S)&&Array.prototype.splice.call(f,S,1),C&&(Qn(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Yn(o,c,h,f){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==f)return S}return-1}var Xn="closure_lm_"+(1e6*Math.random()|0),Zn={};function zr(o,c,h,f,S){if(f&&f.once)return rs(o,c,h,f,S);if(Array.isArray(c)){for(var C=0;C<c.length;C++)zr(o,c[C],h,f,S);return null}return h=Hr(h),o&&o[Kt]?o.K(c,h,d(f)?!!f.capture:!!f,S):Gr(o,c,h,!1,f,S)}function Gr(o,c,h,f,S,C){if(!c)throw Error("Invalid event type");var U=d(S)?!!S.capture:!!S,pe=$r(o);if(pe||(o[Xn]=pe=new vn(o)),h=pe.add(c,h,f,U,C),h.proxy)return h;if(f=ns(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)_n||(S=U),S===void 0&&(S=!1),o.addEventListener(c.toString(),f,S);else if(o.attachEvent)o.attachEvent(Xe(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ns(){function o(h){return c.call(o.src,o.listener,h)}let c=er;return o}function rs(o,c,h,f,S){if(Array.isArray(c)){for(var C=0;C<c.length;C++)rs(o,c[C],h,f,S);return null}return h=Hr(h),o&&o[Kt]?o.L(c,h,d(f)?!!f.capture:!!f,S):Gr(o,c,h,!0,f,S)}function Be(o,c,h,f,S){if(Array.isArray(c))for(var C=0;C<c.length;C++)Be(o,c[C],h,f,S);else f=d(f)?!!f.capture:!!f,h=Hr(h),o&&o[Kt]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=Yn(C,h,f,S),-1<h&&(Qn(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=$r(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Yn(c,h,f,S)),(h=-1<o?c[o]:null)&&We(h))}function We(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Kt])Jn(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Xe(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=$r(c))?(Jn(h,o),h.h==0&&(h.src=null,c[Xn]=null)):Qn(o)}}}function Xe(o){return o in Zn?Zn[o]:Zn[o]="on"+o}function er(o,c){if(o.da)o=!0;else{c=new yn(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&We(o),o=h.call(f,c)}return o}function $r(o){return o=o[Xn],o instanceof vn?o:null}var tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(o){return typeof o=="function"?o:(o[tr]||(o[tr]=function(c){return o.handleEvent(c)}),o[tr])}function Ae(){mt.call(this),this.i=new vn(this),this.M=this,this.F=null}L(Ae,mt),Ae.prototype[Kt]=!0,Ae.prototype.removeEventListener=function(o,c,h,f){Be(this,o,c,h,f)};function ke(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new X(c,o);else if(c instanceof X)c.target=c.target||o;else{var S=c;c=new X(f,o),b(c,S)}if(S=!0,h)for(var C=h.length-1;0<=C;C--){var U=c.g=h[C];S=wn(U,f,!0,c)&&S}if(U=c.g=o,S=wn(U,f,!0,c)&&S,S=wn(U,f,!1,c)&&S,h)for(C=0;C<h.length;C++)U=c.g=h[C],S=wn(U,f,!1,c)&&S}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Qn(h[f]);delete o.g[c],o.h--}}this.F=null},Ae.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ae.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function wn(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,C=0;C<c.length;++C){var U=c[C];if(U&&!U.da&&U.capture==h){var pe=U.listener,Ue=U.ha||U.src;U.fa&&Jn(o.i,U),S=pe.call(Ue,f)!==!1&&S}}return S&&!f.defaultPrevented}function nr(o,c,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Wr(o){o.g=nr(()=>{o.g=null,o.i&&(o.i=!1,Wr(o))},o.l);let c=o.h;o.h=null,o.m.apply(null,c)}class pa extends mt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Wr(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(o){mt.call(this),this.h=o,this.g={}}L(In,mt);var Kr=[];function rr(o){ie(o.g,function(c,h){this.g.hasOwnProperty(h)&&We(c)},o),o.g={}}In.prototype.N=function(){In.aa.N.call(this),rr(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=u.JSON.stringify,ma=u.JSON.parse,ga=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Jr(){}Jr.prototype.h=null;function Yr(o){return o.h||(o.h=o.i())}function is(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){X.call(this,"d")}L(Xr,X);function Zr(){X.call(this,"c")}L(Zr,X);var le={},m=null;function _(){return m=m||new Ae}le.La="serverreachability";function I(o){X.call(this,le.La,o)}L(I,X);function R(o){let c=_();ke(c,new I(c))}le.STAT_EVENT="statevent";function x(o,c){X.call(this,le.STAT_EVENT,o),this.stat=c}L(x,X);function D(o){let c=_();ke(c,new x(c,o))}le.Ma="timingevent";function q(o,c){X.call(this,le.Ma,o),this.size=c}L(q,X);function B(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function K(){this.g=!0}K.prototype.xa=function(){this.g=!1};function ce(o,c,h,f,S,C){o.info(function(){if(o.g)if(C)for(var U="",pe=C.split("&"),Ue=0;Ue<pe.length;Ue++){var he=pe[Ue].split("=");if(1<he.length){var qe=he[0];he=he[1];var ze=qe.split("_");U=2<=ze.length&&ze[1]=="type"?U+(qe+"="+he+"&"):U+(qe+"=redacted&")}}else U=null;else U=C;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+c+`
`+h+`
`+U})}function Me(o,c,h,f,S,C,U){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+c+`
`+h+`
`+C+" "+U})}function Ye(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+ct(o,h)+(f?" "+f:"")})}function ir(o,c){o.info(function(){return"TIMEOUT: "+c})}K.prototype.info=function(){};function ct(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var S=f[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var U=1;U<S.length;U++)S[U]=""}}}}return Qr(h)}catch{return c}}var Dt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},M={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fe;function ge(){}L(ge,Jr),ge.prototype.g=function(){return new XMLHttpRequest},ge.prototype.i=function(){return{}},fe=new ge;function Fe(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ei}function ei(){this.i=null,this.g="",this.h=!1}var je={},gt={};function Nt(o,c,h){o.L=1,o.v=cs(Ot(c)),o.m=h,o.P=!0,ti(o,null)}function ti(o,c){o.F=Date.now(),ss(o),o.A=Ot(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),gh(h.i,"t",f),o.C=0,h=o.j.J,o.h=new ei,o.g=xh(o.j,h?c:null,!o.m),0<o.O&&(o.M=new pa(E(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Kr[0]=S.toString()),S=Kr);for(var C=0;C<S.length;C++){var U=zr(h,S[C],f||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),R(),ce(o.i,o.u,o.A,o.l,o.R,o.m)}Fe.prototype.ca=function(o){o=o.target;let c=this.M;c&&xt(o)==3?c.j():this.Y(o)},Fe.prototype.Y=function(o){try{if(o==this.g)e:{let ze=xt(this.g);var c=this.g.Ba();let ar=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||Th(this.g)))){this.J||ze!=4||c==7||(c==8||0>=ar?R(3):R(2)),_a(this);var h=this.g.Z();this.X=h;t:if(rh(this)){var f=Th(this.g);o="";var S=f.length,C=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),ni(this);var U="";break t}this.h.i=new u.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(C&&c==S-1)});f.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,Me(this.i,this.u,this.A,this.l,this.R,ze,h),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ue=this.g;if((pe=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(pe)){var he=pe;break t}}he=null}if(h=he)Ye(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,h);else{this.o=!1,this.s=3,D(12),Tn(this),ni(this);break e}}if(this.P){h=!0;let ut;for(;!this.J&&this.C<U.length;)if(ut=ng(this,U),ut==gt){ze==4&&(this.s=4,D(14),h=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==je){this.s=4,D(15),Ye(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else Ye(this.i,this.l,ut,null),ya(this,ut);if(rh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||U.length!=0||this.h.h||(this.s=1,D(16),h=!1),this.o=this.o&&h,!h)Ye(this.i,this.l,U,"[Invalid Chunked Response]"),Tn(this),ni(this);else if(0<U.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ba(qe),qe.M=!0,D(11))}}else Ye(this.i,this.l,U,null),ya(this,U);ze==4&&Tn(this),this.o&&!this.J&&(ze==4?kh(this.j,this):(this.o=!1,ss(this)))}else vg(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,D(12)):(this.s=0,D(13)),Tn(this),ni(this)}}}catch{}finally{}};function rh(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ng(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?gt:(h=Number(c.substring(h,f)),isNaN(h)?je:(f+=1,f+h>c.length?gt:(c=c.slice(f,f+h),o.C=f+h,c)))}Fe.prototype.cancel=function(){this.J=!0,Tn(this)};function ss(o){o.S=Date.now()+o.I,ih(o,o.I)}function ih(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=B(E(o.ba,o),c)}function _a(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Fe.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(ir(this.i,this.A),this.L!=2&&(R(),D(17)),Tn(this),this.s=2,ni(this)):ih(this,this.S-o)};function ni(o){o.j.G==0||o.J||kh(o.j,o)}function Tn(o){_a(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,rr(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ya(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||va(h.h,o))){if(!o.K&&va(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)fs(h),hs(h);else break e;Ta(h),D(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=B(E(h.Za,h),6e3));if(1>=ah(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else An(h,11)}else if((o.K||h.g==o)&&fs(h),!J(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let he=S[c];if(h.T=he[0],he=he[1],h.G==2)if(he[0]=="c"){h.K=he[1],h.ia=he[2];let qe=he[3];qe!=null&&(h.la=qe,h.j.info("VER="+h.la));let ze=he[4];ze!=null&&(h.Aa=ze,h.j.info("SVER="+h.Aa));let ar=he[5];ar!=null&&typeof ar=="number"&&0<ar&&(f=1.5*ar,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let ut=o.g;if(ut){let ms=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var C=f.h;C.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(wa(C,C.h),C.h=null))}if(f.D){let Aa=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Aa&&(f.ya=Aa,_e(f.I,f.D,Aa))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var U=o;if(f.qa=Oh(f,f.J?f.ia:null,f.W),U.K){ch(f.h,U);var pe=U,Ue=f.L;Ue&&(pe.I=Ue),pe.B&&(_a(pe),ss(pe)),f.g=U}else Ph(f);0<h.i.length&&ds(h)}else he[0]!="stop"&&he[0]!="close"||An(h,7);else h.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?An(h,7):Ea(h):he[0]!="noop"&&h.l&&h.l.ta(he),h.v=0)}}R(4)}catch{}}var rg=class{constructor(o,c){this.g=o,this.map=c}};function sh(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ah(o){return o.h?1:o.g?o.g.size:0}function va(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function wa(o,c){o.g?o.g.add(c):o.h=c}function ch(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}sh.prototype.cancel=function(){if(this.i=uh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function uh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(let h of o.g.values())c=c.concat(h.D);return c}return j(o.i)}function ig(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function sg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(let f in o)c[h++]=f;return c}}}function lh(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=sg(o),f=ig(o),S=f.length,C=0;C<S;C++)c.call(void 0,f[C],h&&h[C],o)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function og(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),S=null;if(0<=f){var C=o[h].substring(0,f);S=o[h].substring(f+1)}else C=o[h];c(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function bn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof bn){this.h=o.h,os(this,o.j),this.o=o.o,this.g=o.g,as(this,o.s),this.l=o.l;var c=o.i,h=new si;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),dh(this,h),this.m=o.m}else o&&(c=String(o).match(hh))?(this.h=!1,os(this,c[1]||"",!0),this.o=ri(c[2]||""),this.g=ri(c[3]||"",!0),as(this,c[4]),this.l=ri(c[5]||"",!0),dh(this,c[6]||"",!0),this.m=ri(c[7]||"")):(this.h=!1,this.i=new si(null,this.h))}bn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(ii(c,fh,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(ii(c,fh,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ii(h,h.charAt(0)=="/"?ug:cg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ii(h,hg)),o.join("")};function Ot(o){return new bn(o)}function os(o,c,h){o.j=h?ri(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function as(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function dh(o,c,h){c instanceof si?(o.i=c,dg(o.i,o.h)):(h||(c=ii(c,lg)),o.i=new si(c,o.h))}function _e(o,c,h){o.i.set(c,h)}function cs(o){return _e(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ri(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ii(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,ag),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ag(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fh=/[#\/\?@]/g,cg=/[#\?:]/g,ug=/[#\?]/g,lg=/[#\?@]/g,hg=/#/g;function si(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Qt(o){o.g||(o.g=new Map,o.h=0,o.i&&og(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=si.prototype,n.add=function(o,c){Qt(this),this.i=null,o=sr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ph(o,c){Qt(o),c=sr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function mh(o,c){return Qt(o),c=sr(o,c),o.g.has(c)}n.forEach=function(o,c){Qt(this),this.g.forEach(function(h,f){h.forEach(function(S){o.call(c,S,f,this)},this)},this)},n.na=function(){Qt(this);let o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){let S=o[f];for(let C=0;C<S.length;C++)h.push(c[f])}return h},n.V=function(o){Qt(this);let c=[];if(typeof o=="string")mh(this,o)&&(c=c.concat(this.g.get(sr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Qt(this),this.i=null,o=sr(this,o),mh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function gh(o,c,h){ph(o,c),0<h.length&&(o.i=null,o.g.set(sr(o,c),j(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];let C=encodeURIComponent(String(f)),U=this.V(f);for(f=0;f<U.length;f++){var S=C;U[f]!==""&&(S+="="+encodeURIComponent(String(U[f]))),o.push(S)}}return this.i=o.join("&")};function sr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function dg(o,c){c&&!o.j&&(Qt(o),o.i=null,o.g.forEach(function(h,f){var S=f.toLowerCase();f!=S&&(ph(this,f),gh(this,S,h))},o)),o.j=c}function fg(o,c){let h=new K;if(u.Image){let f=new Image;f.onload=k(Jt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=k(Jt,h,"TestLoadImage: error",!1,c,f),f.onabort=k(Jt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=k(Jt,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function pg(o,c){let h=new K,f=new AbortController,S=setTimeout(()=>{f.abort(),Jt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(C=>{clearTimeout(S),C.ok?Jt(h,"TestPingServer: ok",!0,c):Jt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),Jt(h,"TestPingServer: error",!1,c)})}function Jt(o,c,h,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(h)}catch{}}function mg(){this.g=new ga}function gg(o,c,h){let f=h||"";try{lh(o,function(S,C){let U=S;d(S)&&(U=Qr(S)),c.push(f+C+"="+encodeURIComponent(U))})}catch(S){throw c.push(f+"type="+encodeURIComponent("_badmap")),S}}function oi(o){this.l=o.Ub||null,this.j=o.eb||!1}L(oi,Jr),oi.prototype.g=function(){return new us(this.l,this.j)},oi.prototype.i=function(o){return function(){return o}}({});function us(o,c){Ae.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(us,Ae),n=us.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ci(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_h(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function _h(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?ai(this):ci(this),this.readyState==3&&_h(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ai(this))},n.Qa=function(o){this.g&&(this.response=o,ai(this))},n.ga=function(){this.g&&ai(this)};function ai(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ci(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function ci(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function yh(o){let c="";return ie(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ia(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=yh(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):_e(o,c,h))}function Ee(o){Ae.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Ee,Ae);var _g=/^https?$/i,yg=["POST","PUT"];n=Ee.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fe.g(),this.v=this.o?Yr(this.o):Yr(fe),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){vh(this,C);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)h.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let C of f.keys())h.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),S=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(yg,c,void 0))||f||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[C,U]of h)this.g.setRequestHeader(C,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Eh(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){vh(this,C)}};function vh(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,wh(o),ls(o)}function wh(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ke(this,"complete"),ke(this,"abort"),ls(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),Ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ih(this):this.bb())},n.bb=function(){Ih(this)};function Ih(o){if(o.h&&typeof a<"u"&&(!o.v[1]||xt(o)!=4||o.Z()!=2)){if(o.u&&xt(o)==4)nr(o.Ea,0,o);else if(ke(o,"readystatechange"),xt(o)==4){o.h=!1;try{let U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=U===0){var S=String(o.D).match(hh)[1]||null;!S&&u.self&&u.self.location&&(S=u.self.location.protocol.slice(0,-1)),f=!_g.test(S?S.toLowerCase():"")}h=f}if(h)ke(o,"complete"),ke(o,"success");else{o.m=6;try{var C=2<xt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",wh(o)}}finally{ls(o)}}}}function ls(o,c){if(o.g){Eh(o);let h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||ke(o,"ready");try{h.onreadystatechange=f}catch{}}}function Eh(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function xt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),ma(c)}};function Th(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vg(o){let c={};o=(o.g&&2<=xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(J(o[f]))continue;var h=A(o[f]);let S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let C=c[S]||[];c[S]=C,C.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ui(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function bh(o){this.Aa=0,this.i=[],this.j=new K,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ui("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ui("baseRetryDelayMs",5e3,o),this.cb=ui("retryDelaySeedMs",1e4,o),this.Wa=ui("forwardChannelMaxRetries",2,o),this.wa=ui("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new sh(o&&o.concurrentRequestLimit),this.Da=new mg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=bh.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){D(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Oh(this,null,this.W),ds(this)};function Ea(o){if(Ah(o),o.G==3){var c=o.U++,h=Ot(o.I);if(_e(h,"SID",o.K),_e(h,"RID",c),_e(h,"TYPE","terminate"),li(o,h),c=new Fe(o,o.j,c),c.L=2,c.v=cs(Ot(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=xh(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ss(c)}Nh(o)}function hs(o){o.g&&(ba(o),o.g.cancel(),o.g=null)}function Ah(o){hs(o),o.u&&(u.clearTimeout(o.u),o.u=null),fs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ds(o){if(!oh(o.h)&&!o.s){o.s=!0;var c=o.Ga;Wt||es(),pt||(Wt(),pt=!0),Wn.add(c,o),o.B=0}}function wg(o,c){return ah(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=B(E(o.Ga,o,c),Dh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let S=new Fe(this,this.j,o),C=this.o;if(this.S&&(C?(C=g(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Rh(this,S,c),h=Ot(this.I),_e(h,"RID",o),_e(h,"CVER",22),this.D&&_e(h,"X-HTTP-Session-Id",this.D),li(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(yh(C)))+"&"+c:this.m&&Ia(h,this.m,C)),wa(this.h,S),this.Ua&&_e(h,"TYPE","init"),this.P?(_e(h,"$req",c),_e(h,"SID","null"),S.T=!0,Nt(S,h,null)):Nt(S,h,c),this.G=2}}else this.G==3&&(o?Sh(this,o):this.i.length==0||oh(this.h)||Sh(this))};function Sh(o,c){var h;c?h=c.l:h=o.U++;let f=Ot(o.I);_e(f,"SID",o.K),_e(f,"RID",h),_e(f,"AID",o.T),li(o,f),o.m&&o.o&&Ia(f,o.m,o.o),h=new Fe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Rh(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),wa(o.h,h),Nt(h,f,c)}function li(o,c){o.H&&ie(o.H,function(h,f){_e(c,f,h)}),o.l&&lh({},function(h,f){_e(c,f,h)})}function Rh(o,c,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){let U=["count="+h];C==-1?0<h?(C=S[0].g,U.push("ofs="+C)):C=0:U.push("ofs="+C);let pe=!0;for(let Ue=0;Ue<h;Ue++){let he=S[Ue].g,qe=S[Ue].map;if(he-=C,0>he)C=Math.max(0,S[Ue].g-100),pe=!1;else try{gg(qe,U,"req"+he+"_")}catch{f&&f(qe)}}if(pe){f=U.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Ph(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Wt||es(),pt||(Wt(),pt=!0),Wn.add(c,o),o.v=0}}function Ta(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=B(E(o.Fa,o),Dh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ch(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=B(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,D(10),hs(this),Ch(this))};function ba(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Ch(o){o.g=new Fe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ot(o.qa);_e(c,"RID","rpc"),_e(c,"SID",o.K),_e(c,"AID",o.T),_e(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&_e(c,"TO",o.ja),_e(c,"TYPE","xmlhttp"),li(o,c),o.m&&o.o&&Ia(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=cs(Ot(c)),h.m=null,h.P=!0,ti(h,o)}n.Za=function(){this.C!=null&&(this.C=null,hs(this),Ta(this),D(19))};function fs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function kh(o,c){var h=null;if(o.g==c){fs(o),ba(o),o.g=null;var f=2}else if(va(o.h,c))h=c.D,ch(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;f=_(),ke(f,new q(f,h)),ds(o)}else Ph(o);else if(S=c.s,S==3||S==0&&0<c.X||!(f==1&&wg(o,c)||f==2&&Ta(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:An(o,5);break;case 4:An(o,10);break;case 3:An(o,6);break;default:An(o,2)}}}function Dh(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function An(o,c){if(o.j.info("Error code "+c),c==2){var h=E(o.fb,o),f=o.Xa;let S=!f;f=new bn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||os(f,"https"),cs(f),S?fg(f.toString(),h):pg(f.toString(),h)}else D(2);o.G=0,o.l&&o.l.sa(c),Nh(o),Ah(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),D(2)):(this.j.info("Failed to ping google.com"),D(1))};function Nh(o){if(o.G=0,o.ka=[],o.l){let c=uh(o.h);(c.length!=0||o.i.length!=0)&&(F(o.ka,c),F(o.ka,o.i),o.h.i.length=0,j(o.i),o.i.length=0),o.l.ra()}}function Oh(o,c,h){var f=h instanceof bn?Ot(h):new bn(h);if(f.g!="")c&&(f.g=c+"."+f.g),as(f,f.s);else{var S=u.location;f=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var C=new bn(null);f&&os(C,f),c&&(C.g=c),S&&as(C,S),h&&(C.l=h),f=C}return h=o.D,c=o.ya,h&&c&&_e(f,h,c),_e(f,"VER",o.la),li(o,f),f}function xh(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Ee(new oi({eb:h})):new Ee(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vh(){}n=Vh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ps(){}ps.prototype.g=function(o,c){return new Ze(o,c)};function Ze(o,c){Ae.call(this),this.g=new bh(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!J(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!J(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new or(this)}L(Ze,Ae),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){Ea(this.g)},Ze.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Qr(o),o=h);c.i.push(new rg(c.Ya++,o)),c.G==3&&ds(c)},Ze.prototype.N=function(){this.g.l=null,delete this.j,Ea(this.g),delete this.g,Ze.aa.N.call(this)};function Lh(o){Xr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(let h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}L(Lh,Xr);function Mh(){Zr.call(this),this.status=1}L(Mh,Zr);function or(o){this.g=o}L(or,Vh),or.prototype.ua=function(){ke(this.g,"a")},or.prototype.ta=function(o){ke(this.g,new Lh(o))},or.prototype.sa=function(o){ke(this.g,new Mh)},or.prototype.ra=function(){ke(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,Vc=Bt.createWebChannelTransport=function(){return new ps},xc=Bt.getStatEventTarget=function(){return _()},Oc=Bt.Event=le,oo=Bt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Dt.NO_ERROR=0,Dt.TIMEOUT=8,Dt.HTTP_ERROR=6,ki=Bt.ErrorCode=Dt,M.COMPLETE="complete",Nc=Bt.EventType=M,is.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,fr=Bt.WebChannel=is,Nv=Bt.FetchXmlHttpFactory=oi,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,Dc=Bt.XhrIo=Ee}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});var wf="@firebase/firestore",If="4.8.0";var xe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");var Fr="11.10.0";var Mn=new Xt("@firebase/firestore");function pr(){return Mn.logLevel}function z(n,...e){if(Mn.logLevel<=re.DEBUG){let t=e.map(Tl);Mn.debug(`Firestore (${Fr}): ${n}`,...t)}}function jt(n,...e){if(Mn.logLevel<=re.ERROR){let t=e.map(Tl);Mn.error(`Firestore (${Fr}): ${n}`,...t)}}function hn(n,...e){if(Mn.logLevel<=re.WARN){let t=e.map(Tl);Mn.warn(`Firestore (${Fr}): ${n}`,...t)}}function Tl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function Q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,lp(n,r,t)}function lp(n,e,t){let r=`FIRESTORE (${Fr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw jt(r),new Error(r)}function de(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||lp(e,i,r)}function Z(n,e){return n}var N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},G=class extends et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var bt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var po=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},jc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xe.UNAUTHENTICATED))}shutdown(){}},qc=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},zc=class{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?u(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new po(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new xe(e)}},Gc=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},$c=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Gc(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},mo=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Hc=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);let r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new mo(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mo(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Ov(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function hp(){return new TextEncoder}var Li=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=Ov(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function ne(n,e){return n<e?-1:n>e?1:0}function Wc(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return ne(r,i);{let s=hp(),a=xv(s.encode(Ef(n,t)),s.encode(Ef(e,t)));return a!==0?a:ne(r,i)}}t+=r>65535?2:1}return ne(n.length,e.length)}function Ef(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function xv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ne(n[t],e[t]);return ne(n.length,e.length)}function Er(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var Tf="__name__",go=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ne(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):Wc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ut.fromString(e.substring(4,e.length-2))}},Ie=class n extends go{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new G(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},Vv=/^[_a-zA-Z][_a-zA-Z0-9]*$/,nt=class n extends go{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return Vv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tf}static keyField(){return new n([Tf])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new G(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new G(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new G(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var W=class n{constructor(e){this.path=e}static fromPath(e){return new n(Ie.fromString(e))}static fromName(e){return new n(Ie.fromString(e).popFirst(5))}static empty(){return new n(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new Ie(e.slice()))}};function dp(n,e,t){if(!t)throw new G(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Lv(n,e,t,r){if(e===!0&&r===!0)throw new G(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function bf(n){if(!W.isDocumentKey(n))throw new G(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Af(n){if(W.isDocumentKey(n))throw new G(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=bl(n);throw new G(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Pe(n,e){let t={typeString:n};return e&&(t.value=e),t}function Wi(n,e){if(!fp(n))throw new G(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new G(N.INVALID_ARGUMENT,t);return!0}var Sf=-62135596800,Rf=1e6,Ce=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Rf);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sf)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rf}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wi(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-Sf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Pe("string",Ce._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};var ee=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Ce(0,0))}static max(){return new n(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Mi=-1,Kc=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};Kc.UNKNOWN_ID=-1;function Mv(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new Fn(i,W.empty(),e)}function Fv(n){return new Fn(n.readTime,n.key,Mi)}var Fn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(ee.min(),W.empty(),Mi)}static max(){return new n(ee.max(),W.empty(),Mi)}};function Uv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}var Bv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Qc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Ur(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Bv)throw n;z("LocalStore","Unexpectedly lost primary lease")}var V=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),u=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(p=>{a[d]=p,++u,u===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function jv(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Br(n){return n.name==="IndexedDbTransactionError"}var Tr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};Tr.ue=-1;var Al=-1;function Qo(n){return n==null}function Fi(n){return n===0&&1/n==-1/0}function qv(n){return typeof n=="number"&&Number.isInteger(n)&&!Fi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var pp="";function zv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Pf(e)),e=Gv(n.get(t),e);return Pf(e)}function Gv(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case pp:t+="";break;default:t+=s}}return t}function Pf(n){return n+pp+""}var $v="remoteDocuments",mp="owner";var gp="mutationQueues";var _p="mutations";var yp="documentMutations",Hv="remoteDocumentsV14";var vp="remoteDocumentGlobal";var wp="targets";var Ip="targetDocuments";var Ep="targetGlobal",Tp="collectionParents";var bp="clientMetadata";var Ap="bundles";var Sp="namedQueries";var Wv="indexConfiguration";var Kv="indexState";var Qv="indexEntries";var Rp="documentOverlays";var Jv="globals";var Yv=[gp,_p,yp,$v,wp,mp,Ep,Ip,bp,vp,Tp,Ap,Sp],LT=[...Yv,Rp],Xv=[gp,_p,yp,Hv,wp,mp,Ep,Ip,bp,vp,Tp,Ap,Sp,Rp],Zv=Xv,ew=[...Zv,Wv,Kv,Qv];var MT=[...ew,Jv];function Cf(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Pp(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var Te=class n{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yr(this.root,e,this.comparator,!0)}},yr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},At=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}};At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ve=class n{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(e){return new _o(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},_o=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var at=class n{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new n([])}unionWith(e){let t=new Ve(nt.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var yo=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var He=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new yo("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};He.EMPTY_BYTE_STRING=new He("");var tw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(de(!!n,39018),typeof n=="string"){let e=0,t=tw.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zt(n){return typeof n=="string"?He.fromBase64String(n):He.fromUint8Array(n)}var Cp="server_timestamp",kp="__type__",Dp="__previous_value__",Np="__local_write_time__";function Sl(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[kp])===null||t===void 0?void 0:t.stringValue)===Cp}function Jo(n){let e=n.mapValue.fields[Dp];return Sl(e)?Jo(e):e}function Ui(n){let e=qt(n.mapValue.fields[Np].timestampValue);return new Ce(e.seconds,e.nanos)}var Jc=class{constructor(e,t,r,i,s,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}},vo="(default)",wo=class n{constructor(e,t){this.projectId=e,this.database=t||vo}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===vo}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var Rl="__type__",Op="__max__",ao={mapValue:{fields:{__type__:{stringValue:Op}}}},Pl="__vector__",br="value";function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sl(n)?4:Vp(n)?9007199254740991:xp(n)?10:11:Q(28295,{value:n})}function Pt(n,e){if(n===e)return!0;let t=dn(n);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ui(n).isEqual(Ui(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=qt(i.timestampValue),u=qt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return zt(i.bytesValue).isEqual(zt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=ye(i.doubleValue),u=ye(s.doubleValue);return a===u?Fi(a)===Fi(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Er(n.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Cf(a)!==Cf(u))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Pt(a[l],u[l])))return!1;return!0}(n,e);default:return Q(52216,{left:n})}}function Bi(n,e){return(n.values||[]).find(t=>Pt(t,e))!==void 0}function Ar(n,e){if(n===e)return 0;let t=dn(n),r=dn(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(s,a){let u=ye(s.integerValue||s.doubleValue),l=ye(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return kf(n.timestampValue,e.timestampValue);case 4:return kf(Ui(n),Ui(e));case 5:return Wc(n.stringValue,e.stringValue);case 6:return function(s,a){let u=zt(s),l=zt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){let p=ne(u[d],l[d]);if(p!==0)return p}return ne(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let u=ne(ye(s.latitude),ye(a.latitude));return u!==0?u:ne(ye(s.longitude),ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Df(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,p;let y=s.fields||{},E=a.fields||{},k=(u=y[br])===null||u===void 0?void 0:u.arrayValue,L=(l=E[br])===null||l===void 0?void 0:l.arrayValue,j=ne(((d=k?.values)===null||d===void 0?void 0:d.length)||0,((p=L?.values)===null||p===void 0?void 0:p.length)||0);return j!==0?j:Df(k,L)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===ao.mapValue&&a===ao.mapValue)return 0;if(s===ao.mapValue)return 1;if(a===ao.mapValue)return-1;let u=s.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){let E=Wc(l[y],p[y]);if(E!==0)return E;let k=Ar(u[l[y]],d[p[y]]);if(k!==0)return k}return ne(l.length,p.length)}(n.mapValue,e.mapValue);default:throw Q(23264,{le:t})}}function kf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);let t=qt(n),r=qt(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function Df(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=Ar(t[i],r[i]);if(s)return s}return ne(t.length,r.length)}function Sr(n){return Yc(n)}function Yc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return zt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=Yc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${Yc(t.fields[a])}`;return i+"}"}(n.mapValue):Q(61005,{value:n})}function lo(n){switch(dn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=Jo(n);return e?16+lo(e):16;case 5:return 2*n.stringValue.length;case 6:return zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+lo(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return mn(r.fields,(s,a)=>{i+=s.length+lo(a)}),i}(n.mapValue);default:throw Q(13486,{value:n})}}function Xc(n){return!!n&&"integerValue"in n}function Cl(n){return!!n&&"arrayValue"in n}function Nf(n){return!!n&&"nullValue"in n}function Of(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ho(n){return!!n&&"mapValue"in n}function xp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rl])===null||t===void 0?void 0:t.stringValue)===Pl}function Ni(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return mn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ni(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ni(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Op}var UT={mapValue:{fields:{[Rl]:{stringValue:Pl},[br]:{arrayValue:{}}}}};var tt=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ho(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(t)}setAll(e){let t=nt.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Ni(a):i.push(u.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());ho(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ho(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){mn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(Ni(this.value))}};function Lp(n){let e=[];return mn(n.fields,(t,r)=>{let i=new nt([t]);if(ho(r)){let s=Lp(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new at(e)}var dt=class n{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,ee.min(),ee.min(),ee.min(),tt.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,ee.min(),ee.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,ee.min(),ee.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Rr=class{constructor(e,t){this.position=e,this.inclusive=t}};function xf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),t.key):r=Ar(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pt(n.position[t],e.position[t]))return!1;return!0}var Pr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function nw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var Io=class{},Ne=class n extends Io{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new eu(e,t,r):t==="array-contains"?new ru(e,r):t==="in"?new iu(e,r):t==="not-in"?new su(e,r):t==="array-contains-any"?new ou(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new tu(e,r):new nu(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ar(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(Ar(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Ct=class n extends Io{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return Mp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function Mp(n){return n.op==="and"}function Fp(n){return rw(n)&&Mp(n)}function rw(n){for(let e of n.filters)if(e instanceof Ct)return!1;return!0}function Zc(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+Sr(n.value);if(Fp(n))return n.filters.map(e=>Zc(e)).join(",");{let e=n.filters.map(t=>Zc(t)).join(",");return`${n.op}(${e})`}}function Up(n,e){return n instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(n,e):n instanceof Ct?function(r,i){return i instanceof Ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&Up(a,i.filters[u]),!0):!1}(n,e):void Q(19439)}function Bp(n){return n instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Sr(t.value)}`}(n):n instanceof Ct?function(t){return t.op.toString()+" {"+t.getFilters().map(Bp).join(" ,")+"}"}(n):"Filter"}var eu=class extends Ne{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){let t=W.comparator(e.key,this.key);return this.matchesComparison(t)}},tu=class extends Ne{constructor(e,t){super(e,"in",t),this.keys=jp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},nu=class extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=jp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function jp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}var ru=class extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Cl(t)&&Bi(t.arrayValue,this.value)}},iu=class extends Ne{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Bi(this.value.arrayValue,t)}},su=class extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bi(this.value.arrayValue,t)}},ou=class extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Cl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Bi(this.value.arrayValue,r))}};var au=class{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}};function Lf(n,e=null,t=[],r=[],i=null,s=null,a=null){return new au(n,e,t,r,i,s,a)}function kl(n){let e=Z(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Sr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Sr(r)).join(",")),e.Pe=t}return e.Pe}function Dl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Up(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vf(n.startAt,e.startAt)&&Vf(n.endAt,e.endAt)}function cu(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Cr=class{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function iw(n,e,t,r,i,s,a,u){return new Cr(n,e,t,r,i,s,a,u)}function Yo(n){return new Cr(n)}function Mf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sw(n){return n.collectionGroup!==null}function Oi(n){let e=Z(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ve(nt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Pr(s,r))}),t.has(nt.keyField().canonicalString())||e.Te.push(new Pr(nt.keyField(),r))}return e.Te}function St(n){let e=Z(n);return e.Ie||(e.Ie=ow(e,Oi(n))),e.Ie}function ow(n,e){if(n.limitType==="F")return Lf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Pr(i.field,s)});let t=n.endAt?new Rr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Rr(n.startAt.position,n.startAt.inclusive):null;return Lf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uu(n,e,t){return new Cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Xo(n,e){return Dl(St(n),St(e))&&n.limitType===e.limitType}function qp(n){return`${kl(St(n))}|lt:${n.limitType}`}function mr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Bp(i)).join(", ")}]`),Qo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Sr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Sr(i)).join(",")),`Target(${r})`}(St(n))}; limitType=${n.limitType})`}function Zo(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of Oi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){let d=xf(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Oi(r),i)||r.endAt&&!function(a,u,l){let d=xf(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Oi(r),i))}(n,e)}function aw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zp(n){return(e,t)=>{let r=!1;for(let i of Oi(n)){let s=cw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cw(n,e,t){let r=n.field.isKeyField()?W.comparator(e.key,t.key):function(s,a,u){let l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?Ar(l,d):Q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:n.dir})}}var Gt=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return Pp(this.inner)}size(){return this.innerSize}};var uw=new Te(W.comparator);function $t(){return uw}var Gp=new Te(W.comparator);function Di(...n){let e=Gp;for(let t of n)e=e.insert(t.key,t);return e}function $p(n){let e=Gp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function On(){return xi()}function Hp(){return xi()}function xi(){return new Gt(n=>n.toString(),(n,e)=>n.isEqual(e))}var lw=new Te(W.comparator),hw=new Ve(W.comparator);function se(...n){let e=hw;for(let t of n)e=e.add(t);return e}var dw=new Ve(ne);function fw(){return dw}function Nl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fi(e)?"-0":e}}function Wp(n){return{integerValue:""+n}}function pw(n,e){return qv(e)?Wp(e):Nl(n,e)}var kr=class{constructor(){this._=void 0}};function mw(n,e,t){return n instanceof Dr?function(i,s){let a={fields:{[kp]:{stringValue:Cp},[Np]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sl(s)&&(s=Jo(s)),s&&(a.fields[Dp]=s),{mapValue:a}}(t,e):n instanceof Un?Qp(n,e):n instanceof Bn?Jp(n,e):function(i,s){let a=Kp(i,s),u=Ff(a)+Ff(i.Ee);return Xc(a)&&Xc(i.Ee)?Wp(u):Nl(i.serializer,u)}(n,e)}function gw(n,e,t){return n instanceof Un?Qp(n,e):n instanceof Bn?Jp(n,e):t}function Kp(n,e){return n instanceof Nr?function(r){return Xc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Dr=class extends kr{},Un=class extends kr{constructor(e){super(),this.elements=e}};function Qp(n,e){let t=Yp(e);for(let r of n.elements)t.some(i=>Pt(i,r))||t.push(r);return{arrayValue:{values:t}}}var Bn=class extends kr{constructor(e){super(),this.elements=e}};function Jp(n,e){let t=Yp(e);for(let r of n.elements)t=t.filter(i=>!Pt(i,r));return{arrayValue:{values:t}}}var Nr=class extends kr{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function Ff(n){return ye(n.integerValue||n.doubleValue)}function Yp(n){return Cl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function _w(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Un&&i instanceof Un||r instanceof Bn&&i instanceof Bn?Er(r.elements,i.elements,Pt):r instanceof Nr&&i instanceof Nr?Pt(r.Ee,i.Ee):r instanceof Dr&&i instanceof Dr}(n.transform,e.transform)}var lu=class{constructor(e,t){this.version=e,this.transformResults=t}},it=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function fo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Or=class{};function Xp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xr(n.key,it.none()):new jn(n.key,n.data,it.none());{let t=n.data,r=tt.empty(),i=new Ve(nt.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new kt(n.key,r,new at(i.toArray()),it.none())}}function yw(n,e,t){n instanceof jn?function(i,s,a){let u=i.value.clone(),l=Bf(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof kt?function(i,s,a){if(!fo(i.precondition,s))return void s.convertToUnknownDocument(a.version);let u=Bf(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Zp(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vi(n,e,t,r){return n instanceof jn?function(s,a,u,l){if(!fo(s.precondition,a))return u;let d=s.value.clone(),p=jf(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof kt?function(s,a,u,l){if(!fo(s.precondition,a))return u;let d=jf(s.fieldTransforms,l,a),p=a.data;return p.setAll(Zp(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,u){return fo(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function vw(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Kp(r.transform,i||null);s!=null&&(t===null&&(t=tt.empty()),t.set(r.field,s))}return t||null}function Uf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Er(r,i,(s,a)=>_w(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var jn=class extends Or{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},kt=class extends Or{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function Zp(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Bf(n,e,t){let r=new Map;de(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,gw(a,u,t[i]))}return r}function jf(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,mw(s,a,e))}return r}var xr=class extends Or{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},hu=class extends Or{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var du=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&yw(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vi(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=Vi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Hp();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;let l=Xp(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,(t,r)=>Uf(t,r))&&Er(this.baseMutations,e.baseMutations,(t,r)=>Uf(t,r))}},fu=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){de(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return lw}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var pu=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var mu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Se,ue;function ww(n){switch(n){case N.OK:return Q(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return Q(15467,{code:n})}}function em(n){if(n===void 0)return jt("GRPC error has no .code"),N.UNKNOWN;switch(n){case Se.OK:return N.OK;case Se.CANCELLED:return N.CANCELLED;case Se.UNKNOWN:return N.UNKNOWN;case Se.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Se.INTERNAL:return N.INTERNAL;case Se.UNAVAILABLE:return N.UNAVAILABLE;case Se.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Se.NOT_FOUND:return N.NOT_FOUND;case Se.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Se.ABORTED:return N.ABORTED;case Se.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Se.DATA_LOSS:return N.DATA_LOSS;default:return Q(39323,{code:n})}}(ue=Se||(Se={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";var qf=null;var Iw=new Ut([4294967295,4294967295],0);function zf(n){let e=hp().encode(n),t=new kc;return t.update(e),new Uint8Array(t.digest())}function Gf(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ut([t,r],0),new Ut([i,s],0)]}var gu=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new xn(`Invalid padding: ${t}`);if(r<0)throw new xn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new xn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ut.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Ut.fromNumber(r)));return i.compare(Iw)===1&&(i=new Ut([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=zf(e),[r,i]=Gf(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;let t=zf(e),[r,i]=Gf(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);this.we(a)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},xn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Eo=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(ee.min(),i,new Te(ne),$t(),se())}},ji=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,se(),se(),se())}};var vr=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},To=class{constructor(e,t){this.targetId=e,this.De=t}},bo=class{constructor(e,t,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},Ao=class{constructor(){this.ve=0,this.Ce=$f(),this.Fe=He.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=se(),t=se(),r=se();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new ji(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=$f()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},_u=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=$t(),this.je=co(),this.Je=co(),this.He=new Te(ne)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(cu(s))if(r===0){let a=new W(s.path);this.Xe(t,a,dt.newNoDocument(a,ee.min()))}else de(r===1,20013,{expectedCount:r});else{let a=this.ot(t);if(a!==r){let u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}qf?.ct(function(p,y,E,k,L){var j,F,te,J,Y,ae;let be={localCacheCount:p,existenceFilterCount:y.count,databaseId:E.database,projectId:E.projectId},ie=y.unchangedNames;return ie&&(be.bloomFilter={applied:L===0,hashCount:(j=ie?.hashCount)!==null&&j!==void 0?j:0,bitmapLength:(J=(te=(F=ie?.bits)===null||F===void 0?void 0:F.bitmap)===null||te===void 0?void 0:te.length)!==null&&J!==void 0?J:0,padding:(ae=(Y=ie?.bits)===null||Y===void 0?void 0:Y.padding)!==null&&ae!==void 0?ae:0,mightContain:T=>{var g;return(g=k?.mightContain(T))!==null&&g!==void 0&&g}}),be}(a,e.De,this.We.lt(),u,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,u;try{a=zt(r).toUint8Array()}catch(l){if(l instanceof yo)return hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new gu(a,i,s)}catch(l){return hn(l instanceof xn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,a)=>{let u=this.st(a);if(u){if(s.current&&cu(u.target)){let l=new W(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,dt.newNoDocument(l,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}});let r=se();this.Je.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{let d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));let i=new Eo(e,t,this.He,this.ze,r);return this.ze=$t(),this.je=co(),this.Je=co(),this.He=new Te(ne),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ao,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ve(ne),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ve(ne),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ao),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function co(){return new Te(W.comparator)}function $f(){return new Te(W.comparator)}var Ew={asc:"ASCENDING",desc:"DESCENDING"},Tw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bw={and:"AND",or:"OR"},yu=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function vu(n,e){return n.useProto3Json||Qo(e)?e:{value:e}}function So(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Aw(n,e){return So(n,e.toTimestamp())}function Rt(n){return de(!!n,49232),ee.fromTimestamp(function(t){let r=qt(t);return new Ce(r.seconds,r.nanos)}(n))}function Ol(n,e){return wu(n,e).canonicalString()}function wu(n,e){let t=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function nm(n){let e=Ie.fromString(n);return de(am(e),10190,{key:e.toString()}),e}function Iu(n,e){return Ol(n.databaseId,e.path)}function Lc(n,e){let t=nm(e);if(t.get(1)!==n.databaseId.projectId)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(im(t))}function rm(n,e){return Ol(n.databaseId,e)}function Sw(n){let e=nm(n);return e.length===4?Ie.emptyPath():im(e)}function Eu(n){return new Ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function im(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Hf(n,e,t){return{name:Iu(n,e),fields:t.value.mapValue.fields}}function Rw(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(de(p===void 0||typeof p=="string",58123),He.fromBase64String(p||"")):(de(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),He.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let p=d.code===void 0?N.UNKNOWN:em(d.code);return new G(p,d.message||"")}(a);t=new bo(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Lc(n,r.document.name),s=Rt(r.document.updateTime),a=r.document.createTime?Rt(r.document.createTime):ee.min(),u=new tt({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(i,s,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new vr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Lc(n,r.document),s=r.readTime?Rt(r.readTime):ee.min(),a=dt.newNoDocument(i,s),u=r.removedTargetIds||[];t=new vr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Lc(n,r.document),s=r.removedTargetIds||[];t=new vr([],s,i,null)}else{if(!("filter"in e))return Q(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new mu(i,s),u=r.targetId;t=new To(u,a)}}return t}function Pw(n,e){let t;if(e instanceof jn)t={update:Hf(n,e.key,e.value)};else if(e instanceof xr)t={delete:Iu(n,e.key)};else if(e instanceof kt)t={update:Hf(n,e.key,e.data),updateMask:Mw(e.fieldMask)};else{if(!(e instanceof hu))return Q(16599,{Rt:e.type});t={verify:Iu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let u=a.transform;if(u instanceof Dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Un)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Nr)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw Q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Aw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(n,e.precondition)),t}function Cw(n,e){return n&&n.length>0?(de(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?Rt(i.updateTime):Rt(s);return a.isEqual(ee.min())&&(a=Rt(s)),new lu(a,i.transformResults||[])}(t,e))):[]}function kw(n,e){return{documents:[rm(n,e.path)]}}function Dw(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rm(n,i);let s=function(d){if(d.length!==0)return om(Ct.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:gr(E.field),direction:xw(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=vu(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function Nw(n){let e=Sw(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){de(r===1,65062);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(y){let E=sm(y);return E instanceof Ct&&Fp(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(E=>function(L){return new Pr(_r(L.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(E))}(t.orderBy));let u=null;t.limit&&(u=function(y){let E;return E=typeof y=="object"?y.value:y,Qo(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(y){let E=!!y.before,k=y.values||[];return new Rr(k,E)}(t.startAt));let d=null;return t.endAt&&(d=function(y){let E=!y.before,k=y.values||[];return new Rr(k,E)}(t.endAt)),iw(e,i,a,s,u,"F",l,d)}function Ow(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=_r(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=_r(t.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=_r(t.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=_r(t.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ne.create(_r(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ct.create(t.compositeFilter.filters.map(r=>sm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(t.compositeFilter.op))}(n):Q(30097,{filter:n})}function xw(n){return Ew[n]}function Vw(n){return Tw[n]}function Lw(n){return bw[n]}function gr(n){return{fieldPath:n.canonicalString()}}function _r(n){return nt.fromServerFormat(n.fieldPath)}function om(n){return n instanceof Ne?function(t){if(t.op==="=="){if(Of(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NAN"}};if(Nf(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Of(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NOT_NAN"}};if(Nf(t.value))return{unaryFilter:{field:gr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gr(t.field),op:Vw(t.op),value:t.value}}}(n):n instanceof Ct?function(t){let r=t.getFilters().map(i=>om(i));return r.length===1?r[0]:{compositeFilter:{op:Lw(t.op),filters:r}}}(n):Q(54877,{filter:n})}function Mw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function am(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var qi=class n{constructor(e,t,r,i,s=ee.min(),a=ee.min(),u=He.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Tu=class{constructor(e){this.gt=e}};function Fw(n){let e=Nw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uu(e,e.limit,"L"):e}var Ro=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ye(e.integerValue));else if("doubleValue"in e){let r=ye(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Fi(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=qt(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(zt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?Vp(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):xp(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):Q(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let a=br,u=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(ye(u)),this.xt(a,t),this.Dt(s[a],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),W.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};Ro.Ut=new Ro;var bu=class{constructor(){this.Dn=new Au}addToCollectionParentIndex(e,t){return this.Dn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Fn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Fn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}},Au=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ve(Ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(Ie.comparator)).toArray()}};var BT=new Uint8Array(0);var Wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cm=41943040,ot=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(cm,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);var zi=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var Kf="LruGarbageCollector",Uw=1048576;function Qf([n,e],[t,r]){let i=ne(n,t);return i===0?ne(e,r):i}var Su=class{constructor(e){this.Tr=e,this.buffer=new Ve(Qf),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Qf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},Ru=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){z(Kf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Br(t)?z(Kf,"Ignoring IndexedDB error during garbage collection: ",t):await Ur(t)}await this.Rr(3e5)})}},Pu=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Tr.ue);let r=new Su(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Wf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wf):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,u,l,d,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,u=Date.now(),this.removeTargets(e,r,t))).next(y=>(s=y,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),pr()<=re.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:y})))}};function Bw(n,e){return new Pu(n,e)}var Cu=class{constructor(){this.changes=new Gt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var ku=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var Du=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Vi(r.mutation,i,at.empty(),Ce.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){let i=On();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Di();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=On();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=$t(),a=xi(),u=function(){return xi()}();return t.forEach((l,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof kt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Vi(p.mutation,d,p.mutation.getFieldMask(),Ce.now())):a.set(d.key,at.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return u.set(d,new ku(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(e,t){let r=xi(),i=new Te((a,u)=>a-u),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let p=r.get(l)||at.empty();p=u.applyToLocalView(d,p),r.set(l,p);let y=(i.get(u.batchId)||se()).add(l);i=i.insert(u.batchId,y)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let l=u.getNext(),d=l.key,p=l.value,y=Hp();p.forEach(E=>{if(!s.has(E)){let k=Xp(t.get(E),r.get(E));k!==null&&y.set(E,k),s=s.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(On()),u=Mi,l=s;return a.next(d=>V.forEach(d,(p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{l=l.insert(p,E)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,se())).next(p=>({batchId:u,changes:$p(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let i=Di();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=Di();return this.indexManager.getCollectionParents(e,s).next(u=>V.forEach(u,l=>{let d=function(y,E){return new Cr(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,E)=>{a=a.insert(y,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,dt.newInvalidDocument(p)))});let u=Di();return a.forEach((l,d)=>{let p=s.get(l);p!==void 0&&Vi(p.mutation,d,at.empty(),Ce.now()),Zo(t,d)&&(u=u.insert(l,d))}),u})}};var Nu=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return V.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Rt(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:Fw(i.bundledQuery),readTime:Rt(i.readTime)}}(t)),V.resolve()}};var Ou=class{constructor(){this.overlays=new Te(W.comparator),this.kr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){let r=On();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){let i=On(),s=t.length+1,a=new W(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Te((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=On(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let u=On(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return V.resolve(u)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pu(t,r));let s=this.kr.get(t);s===void 0&&(s=se(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var xu=class{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}};var Gi=class{constructor(){this.qr=new Ve(Re.Qr),this.$r=new Ve(Re.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new Re(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Re(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new W(new Ie([])),r=new Re(t,e),i=new Re(t,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new W(new Ie([])),r=new Re(t,e),i=new Re(t,e+1),s=se();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new Re(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},Re=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return W.comparator(e.key,t.key)||ne(e.Hr,t.Hr)}static Ur(e,t){return ne(e.Hr,t.Hr)||W.comparator(e.key,t.key)}};var Vu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ve(Re.Qr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new du(s,t,r,i);this.mutationQueue.push(a);for(let u of i)this.Yr=this.Yr.add(new Re(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Al:this.er-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new Re(t,0),i=new Re(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{let u=this.Zr(a.Hr);s.push(u)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(ne);return t.forEach(i=>{let s=new Re(i,0),a=new Re(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],u=>{r=r.add(u.Hr)})}),V.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;W.isDocumentKey(s)||(s=s.child(""));let a=new Re(new W(s),0),u=new Ve(ne);return this.Yr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Hr)),!0)},a),V.resolve(this.ei(u))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){de(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return V.forEach(t.mutations,i=>{let s=new Re(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new Re(t,0),i=this.Yr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Lu=class{constructor(e){this.ni=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$t(),a=t.path,u=new W(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){let{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Uv(Fv(p),r)<=0||(i.has(p.key)||Zo(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Q(9500)}ri(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Mu(this)}getSize(e){return V.resolve(this.size)}},Mu=class extends Cu{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Fu=class{constructor(e){this.persistence=e,this.ii=new Gt(t=>kl(t),Dl),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.si=0,this.oi=new Gi,this.targetCount=0,this._i=zi.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),V.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new zi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.hr(t),V.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),V.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.oi.containsKey(t))}};var Po=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new Tr(0),this.ci=!1,this.ci=!0,this.li=new xu,this.referenceDelegate=e(this),this.hi=new Fu(this),this.indexManager=new bu,this.remoteDocumentCache=function(i){return new Lu(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Tu(t),this.Ti=new Nu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ou,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Vu(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);let i=new Uu(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return V.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},Uu=class extends Qc{constructor(e){super(),this.currentSequenceNumber=e}},Bu=class n{constructor(e){this.persistence=e,this.Ai=new Gi,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,r=>{let i=W.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return V.or([()=>V.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},Co=class n{constructor(e,t){this.persistence=e,this.gi=new Gt(r=>zv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Bw(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return V.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,s.removeEntry(a,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),V.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lo(e.data.value)),t}Sr(e,t,r){return V.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var ju=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=se(),i=se();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var qu=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var zu=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Yh()?8:jv(Oe())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new qu;return this.ws(e,t,a).next(u=>{if(s.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(pr()<=re.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",mr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(pr()<=re.DEBUG&&z("QueryEngine","Query:",mr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(pr()<=re.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",mr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,St(t))):V.resolve())}ps(e,t){if(Mf(t))return V.resolve(null);let r=St(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=uu(t,null,"F"),r=St(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=se(...s);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,uu(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,i){return Mf(t)||i.isEqual(ee.min())?V.resolve(null):this.gs.getDocuments(e,r).next(s=>{let a=this.bs(t,s);return this.Ds(t,a,r,i)?V.resolve(null):(pr()<=re.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mr(t)),this.vs(e,a,t,Mv(i,Mi)).next(u=>u))})}bs(e,t){let r=new Ve(zp(e));return t.forEach((i,s)=>{Zo(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return pr()<=re.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",mr(t)),this.gs.getDocumentsMatchingQuery(e,t,Fn.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var xl="LocalStore",jw=3e8,Gu=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new Te(ne),this.Ms=new Gt(s=>kl(s),Dl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Du(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function qw(n,e,t,r){return new Gu(n,e,t,r)}async function um(n,e){let t=Z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],u=[],l=se();for(let d of i){a.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}for(let d of s){u.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function zw(n,e){let t=Z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){let y=d.batch,E=y.keys(),k=V.resolve();return E.forEach(L=>{k=k.next(()=>p.getEntry(l,L)).next(j=>{let F=d.docVersions.get(L);de(F!==null,48541),j.version.compareTo(F)<0&&(y.applyToRemoteDocument(j,d),j.isValidDocument()&&(j.setReadTime(d.commitVersion),p.addEntry(j)))})}),k.next(()=>u.mutationQueue.removeMutationBatch(l,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=se();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function lm(n){let e=Z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Gw(n,e){let t=Z(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let u=[];e.targetChanges.forEach((p,y)=>{let E=i.get(y);if(!E)return;u.push(t.hi.removeMatchingKeys(s,p.removedDocuments,y).next(()=>t.hi.addMatchingKeys(s,p.addedDocuments,y)));let k=E.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(He.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),i=i.insert(y,k),function(j,F,te){return j.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=jw?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(E,k,p)&&u.push(t.hi.updateTargetData(s,k))});let l=$t(),d=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),u.push($w(s,a,e.documentUpdates).next(p=>{l=p.Ls,d=p.ks})),!r.isEqual(ee.min())){let p=t.hi.getLastRemoteSnapshotVersion(s).next(y=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(p)}return V.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=i,s))}function $w(n,e,t){let r=se(),i=se();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=$t();return t.forEach((u,l)=>{let d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):z(xl,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:i}})}function Hw(n,e){let t=Z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Al),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ww(n,e){let t=Z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.hi.allocateTargetId(r).next(a=>(i=new qi(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function $u(n,e,t){let r=Z(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Br(a))throw a;z(xl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Jf(n,e,t){let r=Z(n),i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){let y=Z(l),E=y.Ms.get(p);return E!==void 0?V.resolve(y.Fs.get(E)):y.hi.getTargetData(d,p)}(r,a,St(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:ee.min(),t?s:se())).next(u=>(Kw(r,aw(e),u),{documents:u,qs:s})))}function Kw(n,e,t){let r=n.xs.get(e)||ee.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var ko=class{constructor(){this.activeTargetIds=fw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Hu=class{constructor(){this.Fo=new ko,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ko,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Wu=class{xo(e){}shutdown(){}};var Yf="ConnectivityMonitor",Do=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){z(Yf,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){z(Yf,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var uo=null;function Ku(){return uo===null?uo=function(){return 268435456+Math.round(2147483648*Math.random())}():uo++,"0x"+uo.toString(16)}var Mc="RestConnection",Qw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Qu=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===vo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let a=Ku(),u=this.Go(e,t.toUriEncodedString());z(Mc,`Sending RPC '${e}' ${a}:`,u,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);let{host:d}=new URL(u),p=Yt(d);return this.jo(e,u,l,r,p).then(y=>(z(Mc,`Received RPC '${e}' ${a}: `,y),y),y=>{throw hn(Mc,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",r),y})}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=Qw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var Ju=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var $e="WebChannelConnection",Yu=class extends Qu{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let a=Ku();return new Promise((u,l)=>{let d=new Dc;d.setWithCredentials(!0),d.listenOnce(Nc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ki.NO_ERROR:let y=d.getResponseJson();z($e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case ki.TIMEOUT:z($e,`RPC '${e}' ${a} timed out`),l(new G(N.DEADLINE_EXCEEDED,"Request time out"));break;case ki.HTTP_ERROR:let E=d.getStatus();if(z($e,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);let L=k?.error;if(L&&L.status&&L.message){let j=function(te){let J=te.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(J)>=0?J:N.UNKNOWN}(L.status);l(new G(j,L.message))}else l(new G(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new G(N.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{z($e,`RPC '${e}' ${a} completed.`)}});let p=JSON.stringify(i);z($e,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)})}P_(e,t,r){let i=Ku(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vc(),u=xc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let p=s.join("");z($e,`Creating RPC '${e}' stream ${i}: ${p}`,l);let y=a.createWebChannel(p,l);this.T_(y);let E=!1,k=!1,L=new Ju({Ho:F=>{k?z($e,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(E||(z($e,`Opening RPC '${e}' stream ${i} transport.`),y.open(),E=!0),z($e,`RPC '${e}' stream ${i} sending:`,F),y.send(F))},Yo:()=>y.close()}),j=(F,te,J)=>{F.listen(te,Y=>{try{J(Y)}catch(ae){setTimeout(()=>{throw ae},0)}})};return j(y,fr.EventType.OPEN,()=>{k||(z($e,`RPC '${e}' stream ${i} transport opened.`),L.s_())}),j(y,fr.EventType.CLOSE,()=>{k||(k=!0,z($e,`RPC '${e}' stream ${i} transport closed`),L.__(),this.I_(y))}),j(y,fr.EventType.ERROR,F=>{k||(k=!0,hn($e,`RPC '${e}' stream ${i} transport errored. Name:`,F.name,"Message:",F.message),L.__(new G(N.UNAVAILABLE,"The operation could not be completed")))}),j(y,fr.EventType.MESSAGE,F=>{var te;if(!k){let J=F.data[0];de(!!J,16349);let Y=J,ae=Y?.error||((te=Y[0])===null||te===void 0?void 0:te.error);if(ae){z($e,`RPC '${e}' stream ${i} received error:`,ae);let be=ae.status,ie=function(w){let b=Se[w];if(b!==void 0)return em(b)}(be),T=ae.message;ie===void 0&&(ie=N.INTERNAL,T="Unknown error status: "+be+" with message "+ae.message),k=!0,L.__(new G(ie,T)),y.close()}else z($e,`RPC '${e}' stream ${i} received:`,J),L.a_(J)}}),j(u,Oc.STAT_EVENT,F=>{F.stat===oo.PROXY?z($e,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===oo.NOPROXY&&z($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{L.o_()},0),L}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function Fc(){return typeof document<"u"?document:null}function ea(n){return new yu(n,!0)}var No=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var Xf="PersistentStream",Oo=class{constructor(e,t,r,i,s,a,u,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new No(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(jt(t.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new G(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(Xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(z(Xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Xu=class extends Oo{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=Rw(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?Rt(a.readTime):ee.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=Eu(this.serializer),t.addTarget=function(s,a){let u,l=a.target;if(u=cu(l)?{documents:kw(s,l)}:{query:Dw(s,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=tm(s,a.resumeToken);let d=vu(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(ee.min())>0){u.readTime=So(s,a.snapshotVersion.toTimestamp());let d=vu(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=Ow(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=Eu(this.serializer),t.removeTarget=e,this.k_(t)}},Zu=class extends Oo{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=Cw(e.writeResults,e.commitTime),r=Rt(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=Eu(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Pw(this.serializer,r))};this.k_(t)}};var el=class{},tl=class extends el{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,wu(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(N.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,wu(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(N.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},nl=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jt(t),this._a=!1):z("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var qn="RemoteStore",rl=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Gn(this)&&(z(qn,"Restarting streams for network reachability change."),await async function(l){let d=Z(l);d.Ia.add(4),await Ki(d),d.Aa.set("Unknown"),d.Ia.delete(4),await ta(d)}(this))})}),this.Aa=new nl(r,i)}};async function ta(n){if(Gn(n))for(let e of n.da)await e(!0)}async function Ki(n){for(let e of n.da)await e(!1)}function hm(n,e){let t=Z(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Fl(t)?Ml(t):jr(t).x_()&&Ll(t,e))}function Vl(n,e){let t=Z(n),r=jr(t);t.Ta.delete(e),r.x_()&&dm(t,e),t.Ta.size===0&&(r.x_()?r.B_():Gn(t)&&t.Aa.set("Unknown"))}function Ll(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jr(n).H_(e)}function dm(n,e){n.Ra.$e(e),jr(n).Y_(e)}function Ml(n){n.Ra=new _u({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),jr(n).start(),n.Aa.aa()}function Fl(n){return Gn(n)&&!jr(n).M_()&&n.Ta.size>0}function Gn(n){return Z(n).Ia.size===0}function fm(n){n.Ra=void 0}async function Jw(n){n.Aa.set("Online")}async function Yw(n){n.Ta.forEach((e,t)=>{Ll(n,e)})}async function Xw(n,e){fm(n),Fl(n)?(n.Aa.la(e),Ml(n)):n.Aa.set("Unknown")}async function Zw(n,e,t){if(n.Aa.set("Online"),e instanceof bo&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))}(n,e)}catch(r){z(qn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xo(n,r)}else if(e instanceof vr?n.Ra.Ye(e):e instanceof To?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ee.min()))try{let r=await lm(n.localStore);t.compareTo(r)>=0&&await function(s,a){let u=s.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let p=s.Ta.get(d);p&&s.Ta.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{let p=s.Ta.get(l);if(!p)return;s.Ta.set(l,p.withResumeToken(He.EMPTY_BYTE_STRING,p.snapshotVersion)),dm(s,l);let y=new qi(p.target,l,d,p.sequenceNumber);Ll(s,y)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){z(qn,"Failed to raise snapshot:",r),await xo(n,r)}}async function xo(n,e,t){if(!Br(e))throw e;n.Ia.add(1),await Ki(n),n.Aa.set("Offline"),t||(t=()=>lm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z(qn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ta(n)})}function pm(n,e){return e().catch(t=>xo(n,t,e))}async function na(n){let e=Z(n),t=fn(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Al;for(;eI(e);)try{let i=await Hw(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,tI(e,i)}catch(i){await xo(e,i)}mm(e)&&gm(e)}function eI(n){return Gn(n)&&n.Pa.length<10}function tI(n,e){n.Pa.push(e);let t=fn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function mm(n){return Gn(n)&&!fn(n).M_()&&n.Pa.length>0}function gm(n){fn(n).start()}async function nI(n){fn(n).na()}async function rI(n){let e=fn(n);for(let t of n.Pa)e.X_(t.mutations)}async function iI(n,e,t){let r=n.Pa.shift(),i=fu.from(r,e,t);await pm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await na(n)}async function sI(n,e){e&&fn(n).Z_&&await async function(r,i){if(function(a){return ww(a)&&a!==N.ABORTED}(i.code)){let s=r.Pa.shift();fn(r).N_(),await pm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await na(r)}}(n,e),mm(n)&&gm(n)}async function Zf(n,e){let t=Z(n);t.asyncQueue.verifyOperationInProgress(),z(qn,"RemoteStore received new credentials");let r=Gn(t);t.Ia.add(3),await Ki(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ta(t)}async function oI(n,e){let t=Z(n);e?(t.Ia.delete(2),await ta(t)):e||(t.Ia.add(2),await Ki(t),t.Aa.set("Unknown"))}function jr(n){return n.Va||(n.Va=function(t,r,i){let s=Z(t);return s.ia(),new Xu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:Jw.bind(null,n),e_:Yw.bind(null,n),n_:Xw.bind(null,n),J_:Zw.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Fl(n)?Ml(n):n.Aa.set("Unknown")):(await n.Va.stop(),fm(n))})),n.Va}function fn(n){return n.ma||(n.ma=function(t,r,i){let s=Z(t);return s.ia(),new Zu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:nI.bind(null,n),n_:sI.bind(null,n),ea:rI.bind(null,n),ta:iI.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await na(n)):(await n.ma.stop(),n.Pa.length>0&&(z(qn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var il=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,u=new n(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Ul(n,e){if(jt("AsyncQueue",`${e}: ${n}`),Br(n))return new G(N.UNAVAILABLE,`${e}: ${n}`);throw n}var Vo=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=Di(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Lo=class{constructor(){this.fa=new Te(W.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Q(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},Vr=class n{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,Vo.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var sl=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},ol=class{constructor(){this.queries=ep(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=Z(t),s=i.queries;i.queries=ep(),s.forEach((a,u)=>{for(let l of u.wa)l.onError(r)})})(this,new G(N.ABORTED,"Firestore shutting down"))}};function ep(){return new Gt(n=>qp(n),Xo)}async function _m(n,e){let t=Z(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new sl,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Ul(a,`Initialization of query '${mr(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Bl(t)}async function ym(n,e){let t=Z(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aI(n,e){let t=Z(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let u of a.wa)u.Ca(i)&&(r=!0);a.ya=i}}r&&Bl(t)}function cI(n,e,t){let r=Z(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function Bl(n){n.Da.forEach(e=>{e.next()})}var al,tp;(tp=al||(al={})).Fa="default",tp.Cache="cache";var Mo=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==al.Cache}};var Fo=class{constructor(e){this.key=e}},Uo=class{constructor(e){this.key=e}},cl=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=se(),this.mutatedKeys=se(),this.Xa=zp(e),this.eu=new Vo(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new Lo,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{let E=i.get(p),k=Zo(this.query,y)?y:null,L=!!E&&this.mutatedKeys.has(E.key),j=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),F=!1;E&&k?E.data.isEqual(k.data)?L!==j&&(r.track({type:3,doc:k}),F=!0):this.iu(E,k)||(r.track({type:2,doc:k}),F=!0,(l&&this.Xa(k,l)>0||d&&this.Xa(k,d)<0)&&(u=!0)):!E&&k?(r.track({type:0,doc:k}),F=!0):E&&!k&&(r.track({type:1,doc:E}),F=!0,(l||d)&&(u=!0)),F&&(k?(a=a.add(k),s=j?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let a=e.ru.pa();a.sort((p,y)=>function(k,L){let j=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{At:F})}};return j(k)-j(L)}(p.type,y.type)||this.Xa(p.doc,y.doc)),this.su(r),i=i!=null&&i;let u=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new Vr(this.query,e.eu,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Lo,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=se(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Uo(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Fo(r))}),t}uu(e){this.Ha=e.qs,this.Za=se();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Vr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},jl="SyncEngine",ul=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},ll=class{constructor(e){this.key=e,this.lu=!1}},hl=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Gt(u=>qp(u),Xo),this.Tu=new Map,this.Iu=new Set,this.du=new Te(W.comparator),this.Eu=new Map,this.Au=new Gi,this.Ru={},this.Vu=new Map,this.mu=zi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function uI(n,e,t=!0){let r=bm(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await vm(r,e,t,!0),i}async function lI(n,e){let t=bm(n);await vm(t,e,!0,!1)}async function vm(n,e,t,r){let i=await Ww(n.localStore,St(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),u;return r&&(u=await hI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&hm(n.remoteStore,i),u}async function hI(n,e,t,r,i){n.gu=(y,E,k)=>async function(j,F,te,J){let Y=F.view.nu(te);Y.Ds&&(Y=await Jf(j.localStore,F.query,!1).then(({documents:T})=>F.view.nu(T,Y)));let ae=J&&J.targetChanges.get(F.targetId),be=J&&J.targetMismatches.get(F.targetId)!=null,ie=F.view.applyChanges(Y,j.isPrimaryClient,ae,be);return rp(j,F.targetId,ie._u),ie.snapshot}(n,y,E,k);let s=await Jf(n.localStore,e,!0),a=new cl(e,s.qs),u=a.nu(s.documents),l=ji.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);rp(n,t,d._u);let p=new ul(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function dI(n,e,t){let r=Z(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(a=>!Xo(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $u(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Vl(r.remoteStore,i.targetId),dl(r,i.targetId)}).catch(Ur)):(dl(r,i.targetId),await $u(r.localStore,i.targetId,!0))}async function fI(n,e){let t=Z(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Vl(t.remoteStore,r.targetId))}async function pI(n,e,t){let r=II(n);try{let i=await function(a,u){let l=Z(a),d=Ce.now(),p=u.reduce((k,L)=>k.add(L.key),se()),y,E;return l.persistence.runTransaction("Locally write mutations","readwrite",k=>{let L=$t(),j=se();return l.Os.getEntries(k,p).next(F=>{L=F,L.forEach((te,J)=>{J.isValidDocument()||(j=j.add(te))})}).next(()=>l.localDocuments.getOverlayedDocuments(k,L)).next(F=>{y=F;let te=[];for(let J of u){let Y=vw(J,y.get(J.key).overlayedDocument);Y!=null&&te.push(new kt(J.key,Y,Lp(Y.value.mapValue),it.exists(!0)))}return l.mutationQueue.addMutationBatch(k,d,te,u)}).next(F=>{E=F;let te=F.applyToLocalDocumentSet(y,j);return l.documentOverlayCache.saveOverlays(k,F.batchId,te)})}).then(()=>({batchId:E.batchId,changes:$p(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new Te(ne)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,i.batchId,t),await Qi(r,i.changes),await na(r.remoteStore)}catch(i){let s=Ul(i,"Failed to persist write");t.reject(s)}}async function wm(n,e){let t=Z(n);try{let r=await Gw(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Eu.get(s);a&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?de(a.lu,14607):i.removedDocuments.size>0&&(de(a.lu,42227),a.lu=!1))}),await Qi(t,r,e)}catch(r){await Ur(r)}}function np(n,e,t){let r=Z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,a)=>{let u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let l=Z(a);l.onlineState=u;let d=!1;l.queries.forEach((p,y)=>{for(let E of y.wa)E.va(u)&&(d=!0)}),d&&Bl(l)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mI(n,e,t){let r=Z(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let a=new Te(W.comparator);a=a.insert(s,dt.newNoDocument(s,ee.min()));let u=se().add(s),l=new Eo(ee.min(),new Map,new Te(ne),a,u);await wm(r,l),r.du=r.du.remove(s),r.Eu.delete(e),ql(r)}else await $u(r.localStore,e,!1).then(()=>dl(r,e,t)).catch(Ur)}async function gI(n,e){let t=Z(n),r=e.batch.batchId;try{let i=await zw(t.localStore,e);Em(t,r,null),Im(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Qi(t,i)}catch(i){await Ur(i)}}async function _I(n,e,t){let r=Z(n);try{let i=await function(a,u){let l=Z(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(y=>(de(y!==null,37113),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Em(r,e,t),Im(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Qi(r,i)}catch(i){await Ur(i)}}function Im(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Em(n,e,t){let r=Z(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function dl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Tm(n,r)})}function Tm(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(Vl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),ql(n))}function rp(n,e,t){for(let r of t)r instanceof Fo?(n.Au.addReference(r.key,e),yI(n,r)):r instanceof Uo?(z(jl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Tm(n,r.key)):Q(19791,{yu:r})}function yI(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(z(jl,"New document in limbo: "+t),n.Iu.add(r),ql(n))}function ql(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new W(Ie.fromString(e)),r=n.mu.next();n.Eu.set(r,new ll(t)),n.du=n.du.insert(t,r),hm(n.remoteStore,new qi(St(Yo(t.path)),r,"TargetPurposeLimboResolution",Tr.ue))}}async function Qi(n,e,t){let r=Z(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let y=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){i.push(d);let y=ju.Es(l.targetId,d);s.push(y)}}))}),await Promise.all(a),r.hu.J_(i),await async function(l,d){let p=Z(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>V.forEach(d,E=>V.forEach(E.Is,k=>p.persistence.referenceDelegate.addReference(y,E.targetId,k)).next(()=>V.forEach(E.ds,k=>p.persistence.referenceDelegate.removeReference(y,E.targetId,k)))))}catch(y){if(!Br(y))throw y;z(xl,"Failed to update sequence numbers: "+y)}for(let y of d){let E=y.targetId;if(!y.fromCache){let k=p.Fs.get(E),L=k.snapshotVersion,j=k.withLastLimboFreeSnapshotVersion(L);p.Fs=p.Fs.insert(E,j)}}}(r.localStore,s))}async function vI(n,e){let t=Z(n);if(!t.currentUser.isEqual(e)){z(jl,"User change. New user:",e.toKey());let r=await um(t.localStore,e);t.currentUser=e,function(s,a){s.Vu.forEach(u=>{u.forEach(l=>{l.reject(new G(N.CANCELLED,a))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qi(t,r.Bs)}}function wI(n,e){let t=Z(n),r=t.Eu.get(e);if(r&&r.lu)return se().add(r.key);{let i=se(),s=t.Tu.get(e);if(!s)return i;for(let a of s){let u=t.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}function bm(n){let e=Z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mI.bind(null,e),e.hu.J_=aI.bind(null,e.eventManager),e.hu.pu=cI.bind(null,e.eventManager),e}function II(n){let e=Z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_I.bind(null,e),e}var Lr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ea(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return qw(this.persistence,new zu,e.initialUser,this.serializer)}Du(e){return new Po(Bu.Vi,this.serializer)}bu(e){return new Hu}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Lr.provider={build:()=>new Lr};var fl=class extends Lr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){de(this.persistence.referenceDelegate instanceof Co,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new Ru(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new Po(r=>Co.Vi(r,t),this.serializer)}};var $i=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>np(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vI.bind(null,this.syncEngine),await oI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ol}()}createDatastore(e){let t=ea(e.databaseInfo.databaseId),r=function(s){return new Yu(s)}(e.databaseInfo);return function(s,a,u,l){return new tl(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new rl(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>np(this.syncEngine,t,0),function(){return Do.C()?new Do:new Wu}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,p){let y=new hl(i,s,a,u,l,d);return p&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=Z(i);z(qn,"RemoteStore shutting down."),s.Ia.add(5),await Ki(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};$i.provider={build:()=>new $i};var Bo=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):jt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var pn="FirestoreClient",pl=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=xe.UNAUTHENTICATED,this.clientId=Li.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{z(pn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z(pn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Ul(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Uc(n,e){n.asyncQueue.verifyOperationInProgress(),z(pn,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await um(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{hn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{z("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{hn("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function ip(n,e){n.asyncQueue.verifyOperationInProgress();let t=await EI(n);z(pn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Zf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Zf(e.remoteStore,i)),n._onlineComponents=e}async function EI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(pn,"Using user provided OfflineComponentProvider");try{await Uc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await Uc(n,new Lr)}}else z(pn,"Using default OfflineComponentProvider"),await Uc(n,new fl(void 0));return n._offlineComponents}async function Am(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(pn,"Using user provided OnlineComponentProvider"),await ip(n,n._uninitializedComponentsProvider._online)):(z(pn,"Using default OnlineComponentProvider"),await ip(n,new $i))),n._onlineComponents}function TI(n){return Am(n).then(e=>e.syncEngine)}async function ml(n){let e=await Am(n),t=e.eventManager;return t.onListen=uI.bind(null,e.syncEngine),t.onUnlisten=dI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fI.bind(null,e.syncEngine),t}function bI(n,e,t={}){let r=new bt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){let p=new Bo({next:E=>{p.Ou(),a.enqueueAndForget(()=>ym(s,y));let k=E.docs.has(u);!k&&E.fromCache?d.reject(new G(N.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&l&&l.source==="server"?d.reject(new G(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),y=new Mo(Yo(u.path),p,{includeMetadataChanges:!0,ka:!0});return _m(s,y)}(await ml(n),n.asyncQueue,e,t,r)),r.promise}function Sm(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var sp=new Map;var Rm="firestore.googleapis.com",op=!0,jo=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rm,this.ssl=op}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:op;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Uw)throw new G(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Mr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jc;switch(r.type){case"firstParty":return new $c(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=sp.get(t);r&&(z("ComponentProvider","Removing Datastore"),sp.delete(t),r.terminate())}(this),Promise.resolve()}};function AI(n,e,t,r={}){var i;n=rt(n,Mr);let s=Yt(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(vs(`https://${l}`),ws("Firestore",!0)),a.host!==Rm&&a.host!==l&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let d=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!_t(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=xe.MOCK_USER;else{p=$h(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new G(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new xe(E)}n._authCredentials=new qc(new po(p,y))}}var qo=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Le=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Wi(t,n._jsonSchema))return new n(e,r||null,new W(Ie.fromString(t.referencePath)))}};Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Pe("string",Le._jsonSchemaVersion),referencePath:Pe("string")};var an=class n extends qo{constructor(e,t,r){super(e,t,Yo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new W(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function Pm(n,e,...t){if(n=we(n),dp("collection","path",e),n instanceof Mr){let r=Ie.fromString(e,...t);return Af(r),new an(n,null,r)}{if(!(n instanceof Le||n instanceof an))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Ie.fromString(e,...t));return Af(r),new an(n.firestore,null,r)}}function zl(n,e,...t){if(n=we(n),arguments.length===1&&(e=Li.newId()),dp("doc","path",e),n instanceof Mr){let r=Ie.fromString(e,...t);return bf(r),new Le(n,null,new W(r))}{if(!(n instanceof Le||n instanceof an))throw new G(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(Ie.fromString(e,...t));return bf(r),new Le(n.firestore,n instanceof an?n.converter:null,new W(r))}}var ap="AsyncQueue",zo=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new No(this,"async_queue_retry"),this.oc=()=>{let r=Fc();r&&z(ap,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=Fc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=Fc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new bt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Br(e))throw e;z(ap,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,jt("INTERNAL UNHANDLED ERROR: ",cp(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=il.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&Q(47125,{hc:cp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function cp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function up(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var ft=class extends Mr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new zo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new zo(e),this._firestoreClient=void 0,await e}}};function Cm(n,e){let t=typeof n=="object"?n:bs(),r=typeof n=="string"?n:e||vo,i=pi(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=Gh("firestore");s&&AI(i,...s)}return i}function ra(n){if(n._terminated)throw new G(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SI(n),n._firestoreClient}function SI(n){var e,t,r;let i=n._freezeSettings(),s=function(u,l,d,p){return new Jc(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Sm(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new pl(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){let l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}var cn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(He.fromBase64String(e))}catch(t){throw new G(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wi(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:Pe("string",cn._jsonSchemaVersion),bytes:Pe("string")};var zn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Hi=class{constructor(e){this._methodName=e}};var un=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(Wi(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Pe("string",un._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};var ln=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wi(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new G(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:Pe("string",ln._jsonSchemaVersion),vectorValues:Pe("object")};var RI=/^__.*__$/,gl=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new jn(e,this.data,t,this.fieldTransforms)}},Go=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function km(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ec:n})}}var _l=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ho(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(km(this.Ec)&&RI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},yl=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ea(e)}Dc(e,t,r,i=!1){return new _l({Ec:e,methodName:t,bc:r,path:nt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function ia(n){let e=n._freezeSettings(),t=ea(n._databaseId);return new yl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gl(n,e,t,r,i,s={}){let a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);$l("Data must be an object, but it was:",a,r);let u=Om(r,a),l,d;if(s.merge)l=new at(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let y of s.mergeFields){let E=vl(e,y,t);if(!a.contains(E))throw new G(N.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Vm(p,E)||p.push(E)}l=new at(p),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new gl(new tt(u),l,d)}var $o=class n extends Hi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function Dm(n,e,t,r){let i=n.Dc(1,e,t);$l("Data must be an object, but it was:",i,r);let s=[],a=tt.empty();mn(r,(l,d)=>{let p=Hl(e,l,t);d=we(d);let y=i.gc(p);if(d instanceof $o)s.push(p);else{let E=sa(d,y);E!=null&&(s.push(p),a.set(p,E))}});let u=new at(s);return new Go(a,u,i.fieldTransforms)}function Nm(n,e,t,r,i,s){let a=n.Dc(1,e,t),u=[vl(e,r,t)],l=[i];if(s.length%2!=0)throw new G(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<s.length;E+=2)u.push(vl(e,s[E])),l.push(s[E+1]);let d=[],p=tt.empty();for(let E=u.length-1;E>=0;--E)if(!Vm(d,u[E])){let k=u[E],L=l[E];L=we(L);let j=a.gc(k);if(L instanceof $o)d.push(k);else{let F=sa(L,j);F!=null&&(d.push(k),p.set(k,F))}}let y=new at(d);return new Go(p,y,a.fieldTransforms)}function sa(n,e){if(xm(n=we(n)))return $l("Unsupported field value:",e,n),Om(n,e);if(n instanceof Hi)return function(r,i){if(!km(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let u of r){let l=sa(u,i.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=Ce.fromDate(r);return{timestampValue:So(i.serializer,s)}}if(r instanceof Ce){let s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:So(i.serializer,s)}}if(r instanceof un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:tm(i.serializer,r._byteString)};if(r instanceof Le){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ol(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ln)return function(a,u){return{mapValue:{fields:{[Rl]:{stringValue:Pl},[br]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Nl(u.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${bl(r)}`)}(n,e)}function Om(n,e){let t={};return Pp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,(r,i)=>{let s=sa(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function xm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof un||n instanceof cn||n instanceof Le||n instanceof Hi||n instanceof ln)}function $l(n,e,t){if(!xm(t)||!fp(t)){let r=bl(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function vl(n,e,t){if((e=we(e))instanceof zn)return e._internalPath;if(typeof e=="string")return Hl(n,e);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,t)}var PI=new RegExp("[~\\*/\\[\\]]");function Hl(n,e,t){if(e.search(PI)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zn(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ho(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new G(N.INVALID_ARGUMENT,u+n+l)}function Vm(n,e){return n.some(t=>t.isEqual(e))}var Wo=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new wl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Lm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},wl=class extends Wo{data(){return super.data()}};function Lm(n,e){return typeof e=="string"?Hl(n,e):e instanceof zn?e._internalPath:e._delegate._internalPath}function CI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var Il=class{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return mn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[br].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ye(a.doubleValue));return new ln(s)}convertGeoPoint(e){return new un(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=Jo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ui(e));default:return null}}convertTimestamp(e){let t=qt(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=Ie.fromString(e);de(am(r),9688,{name:e});let i=new wo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(t)||jt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function Wl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Vn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Ln=class n extends Wo{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(Lm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};Ln._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ln._jsonSchema={type:Pe("string",Ln._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};var wr=class extends Ln{data(e={}){return super.data(e)}},Ir=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Vn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new wr(this._firestore,this._userDataWriter,r.key,r,new Vn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let l=new wr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Vn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{let l=new wr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Vn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:kI(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Li.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function kI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}function Mm(n){n=rt(n,Le);let e=rt(n.firestore,ft);return bI(ra(e),n._key).then(t=>zm(e,n,t))}Ir._jsonSchemaVersion="firestore/querySnapshot/1.0",Ir._jsonSchema={type:Pe("string",Ir._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};var Ko=class extends Il{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}};function Fm(n,e,t){n=rt(n,Le);let r=rt(n.firestore,ft),i=Wl(n.converter,e,t);return Ji(r,[Gl(ia(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,it.none())])}function Um(n,e,t,...r){n=rt(n,Le);let i=rt(n.firestore,ft),s=ia(i),a;return a=typeof(e=we(e))=="string"||e instanceof zn?Nm(s,"updateDoc",n._key,e,t,r):Dm(s,"updateDoc",n._key,e),Ji(i,[a.toMutation(n._key,it.exists(!0))])}function Bm(n){return Ji(rt(n.firestore,ft),[new xr(n._key,it.none())])}function jm(n,e){let t=rt(n.firestore,ft),r=zl(n),i=Wl(n.converter,e);return Ji(t,[Gl(ia(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,it.exists(!1))]).then(()=>r)}function qm(n,...e){var t,r,i;n=we(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||up(e[a])||(s=e[a++]);let u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(up(e[a])){let y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let l,d,p;if(n instanceof Le)d=rt(n.firestore,ft),p=Yo(n._key.path),l={next:y=>{e[a]&&e[a](zm(d,n,y))},error:e[a+1],complete:e[a+2]};else{let y=rt(n,qo);d=rt(y.firestore,ft),p=y._query;let E=new Ko(d);l={next:k=>{e[a]&&e[a](new Ir(d,E,y,k))},error:e[a+1],complete:e[a+2]},CI(n._query)}return function(E,k,L,j){let F=new Bo(j),te=new Mo(k,F,L);return E.asyncQueue.enqueueAndForget(async()=>_m(await ml(E),te)),()=>{F.Ou(),E.asyncQueue.enqueueAndForget(async()=>ym(await ml(E),te))}}(ra(d),p,u,l)}function Ji(n,e){return function(r,i){let s=new bt;return r.asyncQueue.enqueueAndForget(async()=>pI(await TI(r),i,s)),s.promise}(ra(n),e)}function zm(n,e,t){let r=t.docs.get(e._key),i=new Ko(n);return new Ln(n,i,e._key,r,new Vn(t.hasPendingWrites,t.fromCache),e.converter)}var El=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ia(e)}set(e,t,r){this._verifyNotCommitted();let i=Bc(e,this._firestore),s=Wl(i.converter,t,r),a=Gl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,it.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let s=Bc(e,this._firestore),a;return a=typeof(t=we(t))=="string"||t instanceof zn?Nm(this._dataReader,"WriteBatch.update",s._key,t,r,i):Dm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,it.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Bc(e,this._firestore);return this._mutations=this._mutations.concat(new xr(t._key,it.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Bc(n,e){if((n=we(n)).firestore!==e)throw new G(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Gm(n){return ra(n=rt(n,ft)),new El(n,e=>Ji(n,e))}(function(e,t=!0){(function(i){Fr=i})(tn),en(new st("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),u=new ft(new zc(r.getProvider("auth-internal")),new Hc(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),lt(wf,If,e),lt(wf,If,"esm2017")})();function DI(n){let e=Wa(n);return{auth:Cc(e),db:Cm(e)}}var Je={pair:"2111",two:"221",trio:"311",full:"32",quad:"41",penta:"5",diff:"11111"},Ym=[{k:"sum_low",t:"Extremo baixo",s:"Soma 5\u201310",p:"28:1",f:n=>n.sum<=10?28:null},{k:"sum_small",t:"Pequeno",s:"Soma 5\u201317",p:"1:1",f:n=>!n.penta&&n.sum<=17?1:null},{k:"sum_even",t:"Par",s:"Soma par",p:"1:1",f:n=>!n.penta&&n.sum%2===0?1:null},{k:"sum_mid",t:"Central",s:"Soma 17 ou 18",p:"7:2",f:n=>n.sum===17||n.sum===18?3.5:null,hot:!0},{k:"sum_odd",t:"\xCDmpar",s:"Soma \xEDmpar",p:"1:1",f:n=>!n.penta&&n.sum%2===1?1:null},{k:"sum_big",t:"Grande",s:"Soma 18\u201330",p:"1:1",f:n=>!n.penta&&n.sum>=18?1:null},{k:"sum_high",t:"Extremo alto",s:"Soma 26\u201330",p:"28:1",f:n=>n.sum>=26?28:null}],Xm=[{k:"c_pair",t:"Par",s:"S\xF3 um par",p:"11:10",f:n=>n.pat===Je.pair?1.1:null},{k:"c_two",t:"Dois pares",s:"2 + 2",p:"3:1",f:n=>n.pat===Je.two?3:null},{k:"c_trio",t:"Trio",s:"3 iguais",p:"5:1",f:n=>n.pat===Je.trio?5:null},{k:"c_full",t:"Full house",s:"Trio + par",p:"24:1",f:n=>n.pat===Je.full?24:null},{k:"c_quad",t:"Quadra",s:"4 iguais",p:"48:1",f:n=>n.pat===Je.quad?48:null},{k:"c_penta",t:"Penta",s:"5 iguais",p:"1200:1",f:n=>n.pat===Je.penta?1200:null,hot:!0},{k:"c_diff",t:"Todos diferentes",s:"Nenhum repetido",p:"9:1",f:n=>n.pat===Je.diff?9:null},{k:"s3",t:"Sequ\xEAncia de 3",s:"3 seguidos",p:"6:5",f:n=>n.run(3)?1.2:null},{k:"s4",t:"Sequ\xEAncia de 4",s:"4 seguidos",p:"5:1",f:n=>n.run(4)?5:null},{k:"s5",t:"Sequ\xEAncia de 5",s:"1 a 5 ou 2 a 6",p:"30:1",f:n=>n.run(5)?30:null}],NI=[null,0,1,4,20,100],Hn=[];for(let n=1;n<=6;n++)Hn.push({k:"n"+n+"_1",n,single:!0,t:"N\xFAmero "+n,s:"Casa do dado",p:"1 dado devolve",f:e=>NI[e.c[n]]}),Hn.push({k:"n"+n+"_2",n,t:"Pelo menos 2",p:"4:1",f:e=>e.c[n]>=2?4:null}),Hn.push({k:"n"+n+"_3",n,t:"Pelo menos 3",p:"25:1",f:e=>e.c[n]>=3?25:null}),Hn.push({k:"n"+n+"_4",n,t:"Pelo menos 4",p:"280:1",f:e=>e.c[n]>=4?280:null}),Hn.push({k:"n"+n+"_5",n,t:"Penta de "+n,p:"7500:1",f:e=>e.c[n]===5?7500:null,hot:!0});var Zm=[...Ym,...Xm,...Hn],Qe=Object.fromEntries(Zm.map(n=>[n.k,n])),$n=n=>n.n&&!n.single?n.t+" de "+n.n:n.t;function Zi(n){let e=[0,0,0,0,0,0,0];n.forEach(s=>e[s]++);let t=e.slice(1).filter(Boolean).sort((s,a)=>a-s).join(""),r=n.reduce((s,a)=>s+a,0);return{c:e,pat:t,sum:r,run:s=>{for(let a=1;a<=7-s;a++){let u=!0;for(let l=0;l<s;l++)if(!e[a+l]){u=!1;break}if(u)return!0}return!1},penta:t===Je.penta}}var OI=(n,e)=>e==null?0:n+Math.floor(n*e+1e-9);function Ql(n){let e={[Je.pair]:"Par",[Je.two]:"Dois pares",[Je.trio]:"Trio",[Je.full]:"Full house",[Je.quad]:"Quadra",[Je.penta]:"Penta",[Je.diff]:"Todos diferentes"},t=["Soma "+n.sum,e[n.pat]];return n.run(5)?t.push("Sequ\xEAncia de 5"):n.run(4)?t.push("Sequ\xEAncia de 4"):n.run(3)&&t.push("Sequ\xEAncia de 3"),t.join(" \xB7 ")}var ua=[];for(let n=1;n<=6;n++)for(let e=1;e<=6;e++)for(let t=1;t<=6;t++)for(let r=1;r<=6;r++)for(let i=1;i<=6;i++)ua.push(Zi([n,e,t,r,i]));function eg(n,e){let t=1;for(let r of n){let i=Qe[r].f(e);if(i==null)return 0;t*=i+1}return t}var Jl=new Map;function eh(n){let e=n.slice().sort().join("|");if(Jl.has(e))return Jl.get(e);let t=0,r=0,i=0;for(let a of ua){let u=eg(n,a);u>0&&(t++,r+=u,u>i&&(i=u))}let s={p:t/ua.length,ev:r/ua.length,max:i};return Jl.set(e,s),s}function Yl(n){if(!Array.isArray(n)||n.length<2||n.length>6)return"A m\xFAltipla precisa de 2 a 6 sele\xE7\xF5es";if(new Set(n).size!==n.length||n.some(t=>!Qe[t]))return"Sele\xE7\xF5es inv\xE1lidas";let e=eh(n);return e.p===0?"Estas sele\xE7\xF5es n\xE3o podem ganhar ao mesmo tempo":e.ev>=1?"Combina\xE7\xE3o n\xE3o permitida: as sele\xE7\xF5es dependem umas das outras e a m\xFAltipla pagaria acima do justo":null}var qr=["#E8C46A","#7FC8F8","#F4A99B","#B5E48C","#D7A6F5","#F9B46B","#8EE3D3","#FFFFFF","#F5E663","#A0B4FF"],Xl=[{v:1,bg:"#FFFFFF",fg:"#1B1B1B"},{v:5,bg:"#C62828",fg:"#FFFFFF"},{v:10,bg:"#1A2F6B",fg:"#FFFFFF"},{v:25,bg:"#2E8B57",fg:"#FFFFFF"},{v:100,bg:"#111111",fg:"#FFFFFF"},{v:500,bg:"#6A3BA8",fg:"#FFFFFF"},{v:1e3,bg:"#F2C200",fg:"#1B1B1B"}],th={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},O=n=>document.getElementById(n),oe=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),H=n=>Number(n).toLocaleString("pt-PT"),$m=n=>n.toLocaleString("pt-PT",{maximumFractionDigits:2}),Hm=n=>JSON.parse(JSON.stringify(n));function Yi(n,e){let t='<span class="die '+(e||"")+(n?"":" empty")+'" aria-hidden="true">';for(let r=0;r<9;r++)t+='<i class="'+(n&&th[n].includes(r)?"on":"")+'"></i>';return t+"</span>"}var Wm=null;function me(n){let e=O("toast");e.textContent=n,e.hidden=!1,clearTimeout(Wm),Wm=setTimeout(()=>e.hidden=!0,2600)}var Km={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}}};function Xi(){let n=new Uint8Array(1);for(;;)if(crypto.getRandomValues(n),n[0]<252)return n[0]%6+1}var xI=()=>[Xi(),Xi(),Xi(),Xi(),Xi()],Qm="@jogadores.sicbo",VI=/^[A-Za-z0-9_.-]{3,20}$/,oa={rounds:0,staked:0,returned:0,best:0},Jm=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,LI=n=>new Promise(e=>setTimeout(e,n));function MI(n){let e=n&&n.code||"";return e.includes("email-already-in-use")?"Esse utilizador j\xE1 existe. Escolha outro nome ou entre com a palavra-passe.":e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Utilizador ou palavra-passe errados.":e.includes("weak-password")?"A palavra-passe precisa de pelo menos 6 caracteres.":e.includes("too-many-requests")?"Demasiadas tentativas. Espere um pouco e tente de novo.":e.includes("operation-not-allowed")?"O in\xEDcio de sess\xE3o com palavra-passe n\xE3o est\xE1 ativo no Firebase (passo 1 do guia de atualiza\xE7\xE3o).":e.includes("network")?"Sem liga\xE7\xE3o. Tente outra vez.":"N\xE3o foi poss\xEDvel entrar ("+(e||"erro")+")."}var aa={v:5e3,bg:"#7B4A26",fg:"#F3E3C8"},nh=[{id:"t_montecarlo",kind:"theme",name:"Monte Carlo",desc:"Azul-noite e dourado, como o casino do M\xF3naco.",price:1500,sw:["#13294B","#D9B65D","#F2E8D0"]},{id:"t_roleta",kind:"theme",name:"Roleta Vermelha",desc:"Vermelho-vinho com detalhes a ouro.",price:2e3,sw:["#5C1A1F","#E8C46A","#F6E7D2"]},{id:"t_vegas",kind:"theme",name:"Vegas Neon",desc:"Roxo de madrugada e n\xE9on rosa da Strip.",price:2500,sw:["#2A0E3F","#FF4FD8","#F9E7FF"]},{id:"t_ebano",kind:"theme",name:"Mesa de \xC9bano",desc:"Preto e prata da sala VIP.",price:3e3,sw:["#1B1B1D","#C9CED6","#E6E6E6"]},{id:"t_ouro",kind:"theme",name:"Ouro Real",desc:"Castanho e ouro para os grandes apostadores.",price:5e3,sw:["#3B2A14","#FFD54A","#F5E6C4"]},{id:"r_bronze",kind:"rank",name:"Bronze",price:500,hex:"#CD7F32",grad:"linear-gradient(135deg,#7A4A1D,#E3A15E 45%,#8C5626)"},{id:"r_prata",kind:"rank",name:"Prata",price:2500,hex:"#C0C0C0",prev:"r_bronze",grad:"linear-gradient(135deg,#7D8288,#F1F3F5 45%,#9AA0A6)"},{id:"r_ouro",kind:"rank",name:"Ouro",price:5e3,hex:"#FFD700",prev:"r_prata",grad:"linear-gradient(135deg,#A67C00,#FFE680 45%,#C99A06)"},{id:"r_platina",kind:"rank",name:"Platina",price:1e4,hex:"#E5E4E2",prev:"r_ouro",grad:"linear-gradient(135deg,#9FA8AE,#FFFFFF 45%,#C9D1D6)"},{id:"r_diamante",kind:"rank",name:"Diamante",price:25e3,hex:"#B9F2FF",prev:"r_platina",grad:"linear-gradient(135deg,#5FC9E6,#E9FCFF 45%,#7FD9F0)"},{id:"r_rubi",kind:"rank",name:"Rubi",price:1e5,hex:"#E0115F",prev:"r_diamante",grad:"linear-gradient(135deg,#7A0630,#FF5C93 45%,#A50B44)"},{id:"r_esmeralda",kind:"rank",name:"Esmeralda",price:25e4,hex:"#50C878",prev:"r_rubi",grad:"linear-gradient(135deg,#1E6B3D,#9CF0BA 45%,#2E8F55)"},{id:"f_5k",kind:"chip",name:"Ficha de 5 000",desc:"Ficha castanha para apostas grandes. Aparece na sua barra de fichas e na sua torre.",price:5e3}],Ht=Object.fromEntries(nh.map(n=>[n.id,n])),la=nh.filter(n=>n.kind==="rank"),Zl=n=>la.find(e=>e.hex===n)||null,ca=String((window.SICBO_CONFIG||{}).nome||"SIC BO \xB7 5 DADOS").slice(0,40);function tg(n){document.title=ca;let e=(window.SICBO_CONFIG||{}).firebase,t=O("app");if(!e||!e.apiKey||String(e.apiKey).includes("COLE")){t.innerHTML='<section class="card narrow"><h2>Falta configurar</h2><p>Abra o ficheiro <b>config.js</b> e cole a configura\xE7\xE3o do seu projeto Firebase, como explicado no guia.</p></section>';return}let{auth:r,db:i}=n.init(e),s={user:null,uid:null,game:void 0,players:{},bets:[],users:{},role:Km.get("sicbo5-role")||"player",authReady:!1},a={ptab:"apostar",chip:25,mode:"bet",legs:[],stake:0,dice:[],tab:"mesa",busy:!1,authTab:"login"},u={game:n.doc(i,"games","main"),players:n.collection(i,"players"),bets:n.collection(i,"bets"),users:n.collection(i,"users")},l=m=>(m&&m.code==="permission-denied"?"A\xE7\xE3o recusada pelo servidor":"Sem liga\xE7\xE3o. Tente outra vez.")+(m&&m.code?" ["+m.code+"]":""),d=m=>{console.error(m),me(l(m))},p=[],y=()=>{p.forEach(m=>{try{m()}catch{}}),p=[]};function E(){p.push(n.onSnapshot(u.game,m=>{s.game=m.exists()?m.data():null,Hr(),X()},d)),p.push(n.onSnapshot(u.players,m=>{let _={};m.docs.forEach(I=>_[I.id]={id:I.id,...I.data()}),s.players=_,X()},d)),p.push(n.onSnapshot(u.bets,m=>{s.bets=m.docs.map(_=>({id:_.id,..._.data()})).sort((_,I)=>_.ts-I.ts),X()},d)),p.push(n.onSnapshot(u.users,m=>{let _={};m.docs.forEach(I=>_[I.id]={id:I.id,...I.data()}),s.users=_,s.usersLoaded=!0,te(),X()},d))}n.onAuthStateChanged(r,m=>{let _=(m?m.uid:null)===s.uid&&s.authReady;if(s.authReady=!0,!_){if(y(),Kn="",s.user=m||null,s.uid=m?m.uid:null,s.game=void 0,s.players={},s.bets=[],s.users={},s.usersLoaded=!1,Be.init=!1,!m){a.authTab="login",X();return}E(),X()}});let k=()=>s.role==="bank"&&j()?"bank":"player",L=(m,_)=>{m._last!==_&&(m._last=_,m.innerHTML=_)},j=()=>!!(s.user&&!s.user.isAnonymous&&s.users[s.uid]&&s.users[s.uid].role==="admin"),F=!1;async function te(){let m=s.user;if(!m||m.isAnonymous||!s.usersLoaded||s.users[m.uid]||F)return;F=!0;let _=J&&J.toLowerCase()+Qm===(m.email||"").toLowerCase()?J:(m.email||"").split("@")[0];try{await n.setDoc(n.doc(i,"users",m.uid),{name:_,color:qr[Math.floor(Math.random()*qr.length)],created:Date.now(),stats:{...oa}})}catch(I){d(I)}F=!1}let J=null,Y=()=>s.players[s.uid]||null,ae=()=>s.users[s.uid]||null,be=m=>s.bets.filter(_=>_.uid===m&&s.game&&_.round===s.game.round),ie=m=>be(m).reduce((_,I)=>_+I.a,0),T=m=>{let _=s.players[m];return _?_.chips-ie(m):0},g=()=>s.game&&s.game.maxBet>0?s.game.maxBet:0,w=(m,_)=>be(m).filter(I=>I.kind==="s"&&I.k===_).reduce((I,R)=>I+R.a,0),b=m=>{let _=g();if(!_)return!1;let I={};for(let R of be(m))if(R.kind==="m"){if(R.a>_)return!0}else if(I[R.k]=(I[R.k]||0)+R.a,I[R.k]>_)return!0;return!1},A=()=>g()?"M\xE1ximo por aposta: "+H(g())+" fichas":"Sem m\xE1ximo por aposta",P=m=>s.users[m]&&s.users[m].owned||[],v=m=>!!(s.users[m]&&s.users[m].role==="admin"),ve=(m,_)=>v(_||s.uid)||P(_||s.uid).includes(m);function gn(){let m=s.user&&!s.user.isAnonymous?s.users[s.uid]:null,_=m&&m.theme&&m.theme!=="classico"&&ve(m.theme)?m.theme.slice(2):"";(document.documentElement.dataset.skin||"")!==_&&(_?document.documentElement.dataset.skin=_:delete document.documentElement.dataset.skin)}function ha(m,_){let I=Math.max(0,Math.floor(m)),R=[];for(let x of(_?Xl.concat(aa):Xl).slice().reverse()){let D=Math.floor(I/x.v);D>0&&(R.push({c:x,k:D}),I-=D*x.v)}return R.length?'<div class="tower" aria-hidden="true">'+R.map(({c:x,k:D})=>{let q=Math.min(D,14),B="";for(let K=0;K<q;K++)B+='<i style="background:repeating-linear-gradient(90deg,'+x.bg+" 0 6px,"+x.fg+" 6px 8px) center/100% 3px no-repeat,"+x.bg+'"></i>';return'<div class="tstack"><div class="tchips">'+B+'</div><span class="tlab num">'+D+"\xD7"+(x.v>=1e3?x.v/1e3+"k":x.v)+"</span></div>"}).join("")+"</div>":'<div class="tower empty"><span class="note">Sem fichas</span></div>'}function Wt(){let m=pt();return m.length?'<div class="felt"><span class="bankpill">Banca</span><div class="seats">'+m.map(_=>{let I=ie(_.id),R=_.chips-I;return'<div class="seat'+(_.id===s.uid?" you":"")+'"><div class="sname"><span class="dot" style="background:'+_.color+'"></span><b>'+oe(_.name)+"</b>"+(_.id===s.uid?' <span class="note">(voc\xEA)</span>':"")+"</div>"+(Zl(_.color)?'<span class="rbadge" style="background:'+Zl(_.color).grad+'">'+oe(Zl(_.color).name)+"</span>":"")+ha(R,ve("f_5k",_.id))+'<div class="samt num">'+H(R)+" fichas</div>"+(I?'<div class="note num">'+H(I)+" em jogo</div>":'<div class="note">&nbsp;</div>')+"</div>"}).join("")+"</div></div>":'<div class="felt"><span class="bankpill">Banca</span><p class="note">Ainda n\xE3o se sentou ningu\xE9m.</p></div>'}let pt=()=>Object.values(s.players).sort((m,_)=>m.joined-_.joined),Wn=m=>s.players[m]?s.players[m].color:"#999",es=m=>s.players[m]?s.players[m].name:"Jogador que saiu",Kn="";function mt(){return s.authReady?!s.user||s.user.isAnonymous?"login":s.game===void 0||!s.usersLoaded?"connecting":s.role==="bank"&&j()?s.game?"bank":"openTable":s.game?Y()?"player":"sit":"noGame":"connecting"}function X(){let m=mt();m!==Kn&&(Kn=m,a.legs=[],a.mode="bet",t.innerHTML=fa[m](),Qn(m)),ns[m]&&ns[m](),yn(),gn()}let _n=()=>'<span class="rolelink" data-rolelink></span>';function yn(){let m=j()?k()==="bank"?'<button class="link" data-act="role" data-v="player">Jogar como jogador</button>':'<button class="link" data-act="role" data-v="bank">Ir para a banca</button>':"";document.querySelectorAll("[data-rolelink]").forEach(_=>{_.innerHTML!==m&&(_.innerHTML=m)})}let ts=()=>{let m=(I,R)=>'<button class="zone '+(R||"")+(I.hot?" hot":"")+'" data-act="zone" data-k="'+I.k+'" id="z-'+I.k+'" aria-label="'+oe($n(I))+", paga "+oe(I.p)+'">'+(I.single?Yi(I.n):'<span class="z-t">'+oe(I.t)+"</span>")+(I.s?'<span class="z-s">'+oe(I.s)+"</span>":"")+'<span class="z-p">'+oe(I.p)+'</span><span class="stack" id="st-'+I.k+'"></span></button>',_="";for(let I=1;I<=6;I++){let R=Hn.filter(x=>x.n===I);_+='<div class="ncol">'+m(R[0],"single")+R.slice(1).map(x=>m(x,"row")).join("")+"</div>"}return'<section class="sec"><div class="sec-h"><h2>Somas dos 5 dados</h2><span class="note">Pequeno, Grande, Par e \xCDmpar perdem se sair penta</span></div><div class="grid g-sum">'+Ym.map(I=>m(I)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Combina\xE7\xF5es e sequ\xEAncias</h2><span class="note">Cada combina\xE7\xE3o paga s\xF3 a sua casa \xB7 sequ\xEAncias: pelo menos esses n\xFAmeros seguidos</span></div><div class="grid g-combo">'+Xm.map(I=>m(I)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Aposta num n\xFAmero</h2><span class="note">Casa do dado: 1 dado devolve \xB7 2 \u2192 1:1 \xB7 3 \u2192 4:1 \xB7 4 \u2192 20:1 \xB7 5 \u2192 100:1</span></div><div class="grid g-num">'+_+"</div></section>"},Kt=m=>"<header><h1>"+oe(ca)+'</h1><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span>'+(m||"")+"</div></header>",da=()=>Xl.concat(aa).map(m=>'<button class="chip num'+(m.v>=1e3?" big":"")+'" data-act="chip" data-v="'+m.v+'" id="chip-'+m.v+'" style="background:'+m.bg+";color:"+m.fg+'" aria-label="Ficha de '+m.v+'">'+(m.v>=5e3?"5k":m.v)+"</button>").join(""),fa={connecting:()=>'<section class="card narrow"><p>A ligar \xE0 mesa\u2026</p></section>',login:()=>'<section class="card narrow"><h1 class="big">'+oe(ca)+'</h1><div class="seg" role="tablist"><button role="tab" data-act="authTab" data-v="login" id="at-login">Entrar</button><button role="tab" data-act="authTab" data-v="new" id="at-new">Criar conta</button></div><form id="authForm" class="stack-form"><label for="aUser">Utilizador</label><input class="field" id="aUser" maxlength="20" required autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Ex.: rita"><label for="aPass">Palavra-passe</label><input class="field" id="aPass" type="password" minlength="6" required autocomplete="current-password"><div id="aPass2Wrap" hidden class="stack-form"><label for="aPass2">Repetir palavra-passe</label><input class="field" id="aPass2" type="password" minlength="6" autocomplete="new-password"></div><button class="btn primary" type="submit" id="aSubmit">Entrar</button></form><p class="note" id="authNote" role="alert"></p><p class="note">A conta fica guardada: entra com ela em qualquer telem\xF3vel e mant\xE9m o saldo e as estat\xEDsticas.</p></section>',openTable:()=>'<section class="card narrow"><h1 class="big">Abrir a mesa</h1><form id="openForm" class="stack-form"><label for="init">Fichas iniciais por jogador</label><input class="field num" id="init" type="number" min="0" step="5" value="1000" inputmode="numeric"><button class="btn primary" type="submit">Abrir a mesa</button></form><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+_n()+"</div></section>",noGame:()=>'<section class="card narrow"><h2>A mesa ainda n\xE3o est\xE1 aberta</h2><p>Quando a banca abrir a mesa, esta p\xE1gina atualiza sozinha.</p><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+_n()+"</div></section>",sit:()=>'<section class="card narrow"><h1 class="big">'+oe(ca)+'</h1><p id="sitHello"></p><button class="btn primary" data-act="sit" id="sitBtn">Sentar \xE0 mesa</button><div id="statsSit"></div><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+_n()+"</div></section>",player:()=>Kt('<span class="me" id="meBox"></span>')+'<nav class="tabs" role="tablist"><button role="tab" data-act="ptab" data-v="apostar" id="pt-apostar">Apostar</button><button role="tab" data-act="ptab" data-v="mesa" id="pt-mesa">Mesa</button><button role="tab" data-act="ptab" data-v="loja" id="pt-loja">Loja</button></nav><div id="pp-loja" class="tabp" hidden><section class="shop"><div class="shop-h"><span class="shop-eyebrow">Loja</span><h2 class="shop-title">O Mateus Banca</h2><p class="note">Gaste as fichas da mesa em extras para a sua conta. O que comprar fica para sempre na conta, mesmo depois de uma nova partida.</p><div class="shop-bal" id="shopBal"></div></div><div id="shopBody"></div></section></div><div id="pp-mesa" class="tabp" hidden><section class="sec"><div class="sec-h"><h2>Jogadores sentados</h2><span class="note" id="maxNoteP"></span></div><div id="tableView"></div></section></div><div id="pp-apostar" class="tabp"><div class="banner" id="banner"></div>'+ts()+'<section class="sec" id="myMultiSec" hidden><div class="sec-h"><h2>As minhas m\xFAltiplas</h2><span class="note">S\xF3 pagam se todas as sele\xE7\xF5es ganharem</span></div><div class="mlist" id="mlist"></div></section><section class="sec" id="resultSec" hidden><h2>\xDAltima ronda</h2><div class="read" id="resHead"></div><div class="res" id="res"></div></section><section class="panel"><div class="sec-h"><h2>A minha conta</h2><button class="link" data-act="logout">Sair da conta</button></div><div id="statsBox"></div></section><section class="sec"><div class="sec-h"><h2>Hist\xF3rico</h2>'+_n()+'</div><ul class="hist" id="hist"></ul></section><div class="bar"><div class="bar-in"><div class="slip" id="slip" hidden></div><div class="tools"><div class="chips" role="group" aria-label="Valor da ficha">'+da()+'</div></div><div class="tools"><div class="modes"><button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="multi" id="mMulti">M\xFAltipla</button><button class="take" data-act="repeat" id="repeatBtn">Repetir</button></div><div class="tot" id="tot"></div></div></div></div></div>',bank:()=>Kt()+'<nav class="tabs" role="tablist"><button role="tab" data-act="tab" data-v="mesa" id="t-mesa">Mesa</button><button role="tab" data-act="tab" data-v="jogadores" id="t-jogadores">Jogadores</button><button role="tab" data-act="tab" data-v="historico" id="t-historico">Hist\xF3rico</button><button role="tab" data-act="tab" data-v="loja" id="t-loja">Loja</button></nav><div id="p-mesa" class="tabp"><section class="panel"><div class="sec-h"><h2>Apostas</h2><span class="note" id="betSummary"></span></div><div class="row-actions"><button class="btn" data-act="toggleOpen" id="openBtn"></button><div class="seg" role="group" aria-label="Dados"><button data-act="diceMode" data-v="fisico" id="dm-fisico">Dados f\xEDsicos</button><button data-act="diceMode" data-v="virtual" id="dm-virtual">Dados virtuais</button></div></div><div class="row-actions"><label class="note" for="maxBet">M\xE1ximo por aposta</label><input class="field num" id="maxBet" type="number" min="0" step="5" inputmode="numeric" placeholder="Sem limite" style="width:130px"><button class="btn sm" data-act="saveMax">Guardar</button><span class="note" id="maxNote"></span></div><div class="who" id="who"></div></section>'+ts()+'<section class="sec" id="allMultiSec" hidden><div class="sec-h"><h2>M\xFAltiplas em jogo</h2></div><div class="mlist" id="mlist"></div></section><section class="panel" id="dados"><div class="sec-h"><h2>Resultado dos dados</h2><span class="note" id="diceHint"></span></div><div id="physical" class="stack-form"><div class="slots" id="slots"></div><div class="pad" id="pad">'+[1,2,3,4,5,6].map(m=>'<button data-act="face" data-v="'+m+'" aria-label="Face '+m+'">'+Yi(m)+"</button>").join("")+'</div><div class="read" id="readout" aria-live="polite"></div><div class="row-actions"><button class="btn primary" data-act="settle" id="settle">Liquidar ronda</button><button class="btn" data-act="clearDice">Limpar dados</button></div></div><div id="virtual" class="stack-form" hidden><button class="btn primary roll" data-act="roll" id="rollBtn">Lan\xE7ar dados</button><p class="note">O site lan\xE7a os 5 dados ao acaso, mostra a anima\xE7\xE3o a todos e liquida a ronda.</p></div></section><section class="sec" id="resultSec" hidden><div class="sec-h"><h2>\xDAltima ronda</h2><button class="btn sm warn" data-act="undo" id="undoBtn">Corrigir: anular esta ronda</button></div><div class="read" id="resHead"></div><div class="res" id="res"></div></section></div><div id="p-jogadores" class="tabp" hidden><section class="panel"><h2>Convidar jogadores</h2><p class="note">Envie este link. Cada pessoa cria uma conta (utilizador e palavra-passe) e senta-se \xE0 mesa. S\xF3 contas com papel de admin veem a banca.</p><div class="row-actions"><input class="field" id="shareUrl" readonly aria-label="Link da mesa"><button class="btn sm" data-act="copy">Copiar link</button></div></section><section class="sec"><h2>Mesa</h2><div id="tableView"></div></section><section class="sec"><h2>Saldos na mesa</h2><div id="plist"></div></section><section class="sec"><h2>Contas registadas</h2><div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Utilizador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Maior pr\xE9mio</th><th scope="col">Admin</th></tr></thead><tbody id="ulist"></tbody></table></div></section><section class="panel"><h2>Defini\xE7\xF5es</h2><div class="row-actions"><label class="note" for="initChips">Fichas iniciais de quem se senta</label><input class="field num" id="initChips" type="number" min="0" step="5" inputmode="numeric" style="width:120px"><button class="btn sm" data-act="saveInit">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="reset" id="resetBtn">Nova partida (rep\xF5e saldos; as contas ficam)</button>'+_n()+'</div></section></div><div id="p-historico" class="tabp" hidden><section class="sec"><h2>Hist\xF3rico</h2><ul class="hist" id="hist"></ul></section></div><div id="p-loja" class="tabp" hidden><section class="shop"><div class="shop-h"><span class="shop-eyebrow">Loja</span><h2 class="shop-title">O Mateus Banca</h2><p class="note">O que os jogadores podem comprar com as fichas da mesa.</p><div class="shop-bal" id="shopBal"></div></div><div id="shopBody"></div></section></div>'};function Qn(m){m==="login"&&O("authForm").addEventListener("submit",async _=>{_.preventDefault();let I=O("aUser").value.trim(),R=O("aPass").value,x=O("authNote");if(x.textContent="",!VI.test(I)){x.textContent="O utilizador deve ter 3 a 20 caracteres: letras, n\xFAmeros, ponto, h\xEDfen ou _ (sem espa\xE7os nem acentos).";return}let D=I.toLowerCase()+Qm;O("aSubmit").disabled=!0;try{if(a.authTab==="new"){if(R!==O("aPass2").value){x.textContent="As palavras-passe n\xE3o s\xE3o iguais.",O("aSubmit").disabled=!1;return}J=I,await n.createUserWithEmailAndPassword(r,D,R)}else await n.signInWithEmailAndPassword(r,D,R)}catch(q){x.textContent=MI(q),console.error(q)}O("aSubmit")&&(O("aSubmit").disabled=!1)}),m==="openTable"&&O("openForm").addEventListener("submit",async _=>{_.preventDefault();try{await n.setDoc(u.game,vn(Math.max(0,Math.floor(+O("init").value||0)),"fisico"))}catch(I){d(I)}}),m==="bank"&&(O("shareUrl").value=location.href.split("#")[0],O("initChips").value=s.game?s.game.initial:1e3)}let vn=(m,_,I)=>({round:1,open:!0,initial:m,maxBet:I||0,diceMode:_||"fisico",roll:null,lastResult:null,history:[],lastBets:[],undo:null,created:Date.now()});function Jn(m,_){let I=_&&a.dice.length===5?Zi(a.dice):null;Zm.forEach(R=>{let x=O("z-"+R.k);if(!x)return;let D={};if(m.filter(q=>q.kind==="s"&&q.k===R.k).forEach(q=>D[q.uid]=(D[q.uid]||0)+q.a),O("st-"+R.k).innerHTML=Object.entries(D).map(([q,B])=>'<span class="pill num"><span class="dot" style="background:'+Wn(q)+'"></span>'+H(B)+"</span>").join(""),x.classList.remove("win","push","dim","sel"),a.mode==="multi"&&a.legs.includes(R.k)&&x.classList.add("sel"),I){let q=R.f(I);x.classList.add(q==null?"dim":q===0?"push":"win")}})}function Yn(m){let _=s.game&&s.game.lastResult;if(O("resultSec").hidden=!_,!_)return;O("resHead").innerHTML="Ronda "+_.round+" \xB7 "+_.dice.map(R=>Yi(R,"sm")).join(" ")+" \xB7 "+oe(_.desc)+(_.virtual?' \xB7 <span class="note">dados virtuais</span>':"");let I=m?_.per.filter(R=>R.uid===m):_.per;O("res").innerHTML=I.length?I.map(R=>{let x=R.ret-R.st;return'<div class="rcard"><div class="rhead"><span class="dot" style="background:'+R.color+'"></span>'+oe(R.name)+'<span class="net num '+(x>=0?"pos":"neg")+'">'+(x>0?"+":"")+H(x)+'</span></div><ul class="rlines">'+R.lines.map(D=>"<li><span>"+oe(D.n)+" \xB7 "+H(D.a)+'</span><span class="num '+(D.v?"":D.pay>0?"pos":"neg")+'">'+(D.v?"anulada: "+oe(D.v):D.pay>0?"recebe "+H(D.pay):"perde")+"</span></li>").join("")+"</ul></div>"}).join(""):'<p class="note">'+(m?"N\xE3o apostou nesta ronda.":"Ningu\xE9m apostou nesta ronda.")+"</p>"}function Xn(){let m=s.game&&s.game.history||[];O("hist").innerHTML=m.length?m.map(_=>'<li><span class="hr">Ronda '+_.round+'</span><span class="hd">'+_.dice.map(I=>Yi(I,"sm")).join("")+'</span><span class="note">Soma '+_.sum+'</span><span class="hn">'+_.per.map(I=>'<span class="num '+(I.net>=0?"pos":"neg")+'">'+oe(I.name)+" "+(I.net>0?"+":"")+H(I.net)+"</span>").join("")+"</span></li>").join(""):'<li class="note">As rondas liquidadas aparecem aqui.</li>'}function Zn(m){m=m||oa;let _=m.returned-m.staked;return'<dl class="stats"><div><dt>Rondas jogadas</dt><dd class="num">'+H(m.rounds)+'</dd></div><div><dt>Total apostado</dt><dd class="num">'+H(m.staked)+'</dd></div><div><dt>Resultado acumulado</dt><dd class="num '+(_>=0?"pos":"neg")+'">'+(_>0?"+":"")+H(_)+'</dd></div><div><dt>Maior pr\xE9mio</dt><dd class="num gold">'+H(m.best)+"</dd></div></dl>"}function zr(m,_,I){return m.map(R=>{let x=eh(R.legs);return'<div class="mcard"><div class="mh">'+(_?'<span class="dot" style="background:'+Wn(R.uid)+'"></span>'+oe(es(R.uid)):"M\xFAltipla")+'<span class="num">'+H(R.a)+' fichas</span></div><div class="ml">'+R.legs.map(D=>Qe[D]?oe($n(Qe[D]))+" ("+oe(Qe[D].p)+")":"?").join(" + ")+'</div><div class="mf"><span>Recebe at\xE9 <b class="num gold">'+H(Math.floor(R.a*x.max+1e-9))+"</b></span>"+(I?'<button class="btn sm warn" data-act="cancelMulti" data-id="'+R.id+'">Cancelar</button>':"")+"</div></div>"}).join("")}function Gr(){O("roundNo").textContent=s.game?s.game.round:"\u2013";let m=s.game&&s.game.open;O("state").className="state "+(m?"on":"off"),O("state").textContent=m?"Apostas abertas":"Apostas fechadas"}let ns={login(){O("at-login").setAttribute("aria-selected",String(a.authTab==="login")),O("at-new").setAttribute("aria-selected",String(a.authTab==="new")),O("aPass2Wrap").hidden=a.authTab!=="new",O("aPass2").required=a.authTab==="new",O("aPass").autocomplete=a.authTab==="new"?"new-password":"current-password",O("aSubmit").textContent=a.authTab==="new"?"Criar conta":"Entrar"},sit(){let m=ae();O("sitHello").innerHTML="Ol\xE1, <b>"+oe(m?m.name:"\u2026")+'</b>. Senta-se com <b class="gold">'+H(s.game.initial)+"</b> fichas.",O("sitBtn").disabled=!m,O("statsSit").innerHTML=m?Zn(m.stats):""},player(){let m=Y();if(!m)return;Gr();let _=s.game.open,I=be(s.uid);O("meBox").innerHTML='<span class="dot" style="background:'+m.color+'"></span>'+oe(m.name)+' \xB7 <b class="num">'+H(T(s.uid))+"</b>",O("banner").className="banner "+(_?"on":"off"),O("banner").textContent=(_?"Fa\xE7a as suas apostas. A banca fecha as apostas antes de lan\xE7ar os dados.":"Apostas fechadas. A banca est\xE1 a lan\xE7ar os dados.")+" "+A()+".",["apostar","mesa","loja"].forEach(q=>{O("pp-"+q).hidden=a.ptab!==q,O("pt-"+q).setAttribute("aria-selected",String(a.ptab===q))}),O("maxNoteP").textContent=A(),L(O("tableView"),Wt()),O("chip-5000")&&(O("chip-5000").hidden=!ve("f_5k")),a.chip===5e3&&!ve("f_5k")&&(a.chip=25),Wr(),document.querySelectorAll(".zone").forEach(q=>q.disabled=!_),Jn(I,!1),document.querySelectorAll(".chip").forEach(q=>q.setAttribute("aria-pressed",String(+q.dataset.v===a.chip))),O("mTake").setAttribute("aria-pressed",String(a.mode==="take")),O("mMulti").setAttribute("aria-pressed",String(a.mode==="multi"));let R=(s.game.lastBets||[]).filter(q=>q.uid===s.uid);O("repeatBtn").disabled=!_||!R.length||I.length>0,O("tot").innerHTML='Em jogo <b class="num">'+H(ie(s.uid))+'</b> \xB7 Dispon\xEDvel <b class="num">'+H(T(s.uid))+"</b>";let x=I.filter(q=>q.kind==="m");O("myMultiSec").hidden=!x.length,O("mlist").innerHTML=zr(x,!1,_);let D=ae();O("statsBox").innerHTML='<p class="note">Utilizador: <b>'+oe(D?D.name:m.name)+"</b></p>"+Zn(D&&D.stats),rs(),Yn(s.uid),Xn()},bank(){Gr(),["mesa","jogadores","historico","loja"].forEach(B=>{O("p-"+B).hidden=a.tab!==B,O("t-"+B).setAttribute("aria-selected",String(a.tab===B))});let m=s.game,_=m&&m.open,I=m&&m.diceMode==="virtual",R=s.bets.filter(B=>m&&B.round===m.round);O("openBtn").textContent=_?"Fechar apostas":"Reabrir apostas",O("openBtn").className="btn "+(_&&!I?"primary":""),O("dm-fisico").setAttribute("aria-pressed",String(!I)),O("dm-virtual").setAttribute("aria-pressed",String(!!I));let x=R.reduce((B,K)=>B+K.a,0);O("betSummary").textContent=R.length?H(x)+" fichas em "+R.length+" aposta(s)":"Sem apostas nesta ronda",document.activeElement!==O("maxBet")&&(O("maxBet").value=g()||""),O("maxNote").textContent=g()?"Atual: "+H(g()):"Atual: sem limite",L(O("tableView"),Wt()),O("who").innerHTML=pt().map(B=>{let K=ie(B.id),ce=K>B.chips,Me=b(B.id);return'<span class="wchip'+(ce||Me?" over":"")+'"><span class="dot" style="background:'+B.color+'"></span>'+oe(B.name)+' <b class="num">'+H(K)+"</b>"+(ce?" \xB7 excede saldo":"")+(Me?" \xB7 acima do m\xE1ximo":"")+"</span>"}).join("")||'<span class="note">Ainda n\xE3o se sentou ningu\xE9m. Partilhe o link no separador Jogadores.</span>',document.querySelectorAll(".zone").forEach(B=>B.disabled=!0),Jn(R,!I);let D=R.filter(B=>B.kind==="m");if(O("allMultiSec").hidden=!D.length,O("mlist").innerHTML=zr(D,!0,!1),O("physical").hidden=!!I,O("virtual").hidden=!I,O("diceHint").textContent=I?"Modo virtual":"Toque nas faces \xB7 toque num dado para o apagar",I)O("rollBtn").disabled=a.busy,O("rollBtn").textContent=a.busy?"A lan\xE7ar\u2026":_?"Fechar apostas e lan\xE7ar dados":"Lan\xE7ar dados";else{let B="";for(let ce=0;ce<5;ce++){let Me=a.dice[ce];B+='<button class="slot" data-act="slot" data-i="'+ce+'" aria-label="'+(Me?"Dado "+(ce+1)+": "+Me:"Dado "+(ce+1)+" vazio")+'">'+Yi(Me||0)+"</button>"}O("slots").innerHTML=B;let K=a.dice.length===5?Zi(a.dice):null;O("readout").innerHTML=K?"<b>"+oe(Ql(K))+"</b>"+(_?" \xB7 feche as apostas antes de liquidar":""):a.dice.length?"Faltam "+(5-a.dice.length)+" dados":"Introduza os 5 dados lan\xE7ados",O("settle").disabled=!K||_||a.busy}Yn(null),O("undoBtn").hidden=!(m&&m.undo),document.activeElement&&document.activeElement.closest&&document.activeElement.closest("#plist")||L(O("plist"),pt().map(B=>'<div class="prow"><div class="nm"><span class="dot" style="background:'+B.color+'"></span><b>'+oe(B.name)+'</b></div><div class="bal num">'+H(B.chips)+(ie(B.id)?'<div class="note">'+H(ie(B.id))+" em jogo</div>":"")+'</div><div class="adj"><input class="field num" id="amt-'+B.id+'" type="number" min="1" inputmode="numeric" placeholder="Qtd." aria-label="Quantidade para '+oe(B.name)+'"><button class="btn sm" data-act="give" data-id="'+B.id+'">Dar</button><button class="btn sm" data-act="takeChips" data-id="'+B.id+'">Tirar</button><button class="btn sm warn" data-act="remove" data-id="'+B.id+'">Remover</button></div></div>').join("")||'<p class="note">Ainda n\xE3o h\xE1 jogadores sentados.</p>');let q=Object.values(s.users).sort((B,K)=>(B.name||"").localeCompare(K.name||""));L(O("ulist"),q.length?q.map(B=>{let K=B.stats||oa,ce=K.returned-K.staked;return'<tr><td><span class="dot" style="background:'+(B.color||"#999")+'"></span> '+oe(B.name)+(s.players[B.id]?"":' <span class="note">(fora da mesa)</span>')+'</td><td class="num">'+H(K.rounds)+'</td><td class="num">'+H(K.staked)+'</td><td class="num '+(ce>=0?"pos":"neg")+'">'+(ce>0?"+":"")+H(ce)+'</td><td class="num">'+H(K.best)+"</td><td>"+(B.id===s.uid?'<span class="note">Admin (voc\xEA)</span>':'<button class="btn sm'+(B.role==="admin"?" warn":"")+'" data-act="toggleAdmin" data-id="'+B.id+'">'+(B.role==="admin"?"Tirar admin":"Tornar admin")+"</button>")+"</td></tr>"}).join(""):'<tr><td colspan="6" class="note">Ainda ningu\xE9m criou conta.</td></tr>'),Xn(),Wr()}};function rs(){let m=O("slip");if(m.hidden=a.mode!=="multi",m.hidden||document.activeElement&&document.activeElement.id==="stake")return;let _=a.legs.length,I='<div class="slip-h"><span><strong>M\xFAltipla</strong> \xB7 '+(_?_+" sele\xE7"+(_>1?"\xF5es":"\xE3o"):"toque nas casas para escolher")+"</span>",R=_?eh(a.legs):null;R&&(I+="<span>Paga at\xE9 <b>\xD7"+$m(R.max)+"</b> \xB7 ganha em "+$m(R.p*100)+"% das jogadas</span>"),I+="</div>",_&&(I+='<div class="legs">'+a.legs.map(x=>'<button class="leg" data-act="leg" data-k="'+x+'" aria-label="Tirar '+oe($n(Qe[x]))+'">'+oe($n(Qe[x]))+' <span class="num">'+oe(Qe[x].p)+'</span><span class="x" aria-hidden="true">\xD7</span></button>').join("")+"</div>"),I+='<div class="slip-a"><label class="note" for="stake">Aposta</label><input class="field num" id="stake" type="number" min="1" inputmode="numeric" value="'+(a.stake||"")+'" placeholder="Fichas"><span class="note">'+(_>1&&a.stake?'Recebe at\xE9 <b class="num gold">'+H(Math.floor(a.stake*R.max+1e-9))+"</b>":"Toque nas fichas para somar")+'</span><button class="btn sm primary" data-act="placeMulti" '+(_>1&&a.stake>0&&s.game.open?"":"disabled")+'>Fazer m\xFAltipla</button><button class="btn sm" data-act="clearSlip">Limpar</button></div>',m.innerHTML=I}let Be={init:!1,round:0,roll:null},We=null,Xe=document.createElement("div");Xe.className="reveal",Xe.hidden=!0,Xe.setAttribute("role","dialog"),Xe.setAttribute("aria-modal","true"),Xe.setAttribute("aria-label","Resultado dos dados"),Xe.innerHTML='<div class="rv-box"><div class="rv-dice" id="rvDice"></div><div class="rv-desc" id="rvDesc" aria-live="polite"></div><div class="rv-label" id="rvLabel"></div><div class="rv-amt num" id="rvAmt"></div><div class="rv-sub" id="rvSub"></div><button class="btn" data-act="closeReveal" id="rvClose">Continuar</button></div>',document.body.appendChild(Xe);let er=null;function $r(m){let _='<span class="bdie" aria-hidden="true">';for(let I=0;I<9;I++)_+='<i class="'+(m&&th[m].includes(I)?"on":"")+'"></i>';return _+"</span>"}function tr(m,_){m.querySelectorAll("i").forEach((I,R)=>I.classList.toggle("on",th[_].includes(R)))}function Hr(){let m=s.game;if(!m)return;if(!Be.init){Be.init=!0,Be.round=m.lastResult?m.lastResult.round:0,Be.roll=m.roll?m.roll.id:null;return}m.roll&&m.roll.id!==Be.roll&&(Be.roll=m.roll.id,Ae(m.roll.dice,m.roll.round,2400));let _=m.lastResult;if(_&&_.round>Be.round){if(Be.round=_.round,(!We||We.round!==_.round)&&Ae(_.dice,_.round,1100),!We)return;We.result=_,wn()}else _&&_.round<Be.round?Be.round=_.round:_||(Be.round=0)}function Ae(m,_,I){if(k()!=="bank"&&!Y())return;clearTimeout(er),We={round:_,result:null,shown:!1},Jm()&&(I=0),O("rvDice").innerHTML=m.map(()=>$r(1)).join(""),O("rvDesc").textContent=I?"A lan\xE7ar os dados\u2026":"",O("rvLabel").textContent="",O("rvAmt").textContent="",O("rvSub").textContent="",O("rvAmt").className="rv-amt num",O("rvClose").hidden=!0,Xe.hidden=!1;let x=[...O("rvDice").children];x.forEach((q,B)=>{q.style.animationDelay=B*70+"ms",q.classList.add("tumble")}),We.tumble=(async()=>{let q=performance.now(),B=60;for(;performance.now()-q<I;)x.forEach(K=>tr(K,1+Math.floor(Math.random()*6))),await LI(B),B=Math.min(180,B*1.06);x.forEach((K,ce)=>{K.classList.remove("tumble"),tr(K,m[ce]),K.classList.add("land")}),O("rvDesc").textContent=Ql(Zi(m))})();let D=We;We.tumble.then(()=>{D.tumbled=!0,wn()})}function ke(m,_,I,R){return R=R||"",Jm()||I<=0?(m.textContent=R+H(_),Promise.resolve()):new Promise(x=>{let D=performance.now(),q=B=>{let K=Math.min(1,(B-D)/I),ce=1-Math.pow(1-K,3);m.textContent=R+H(Math.round(_*ce)),K<1?requestAnimationFrame(q):x()};requestAnimationFrame(q)})}async function wn(){let m=We;if(!m||!m.tumbled||!m.result||m.shown)return;m.shown=!0;let _=m.result,I=O("rvLabel"),R=O("rvAmt"),x=O("rvSub"),D=3500;if(k()==="bank"){let q=_.per.reduce((ce,Me)=>ce+Me.st,0),B=_.per.reduce((ce,Me)=>ce+Me.ret,0),K=q-B;I.textContent=K>=0?"A banca ganha":"A banca paga",R.className="rv-amt num "+(K>0?"pos":K<0?"neg":""),await ke(R,Math.abs(K),1200,K>0?"+":K<0?"\u2212":""),x.textContent=_.per.length?_.per.map(ce=>ce.name+" "+(ce.ret-ce.st>0?"+":"")+H(ce.ret-ce.st)).join(" \xB7 "):"Ningu\xE9m apostou nesta ronda."}else{let q=_.per.find(B=>B.uid===s.uid);if(!q)I.textContent="N\xE3o apostou nesta ronda",D=2500;else{let B=q.ret-q.st;B>0?(I.textContent="Ganhou",R.className="rv-amt num pos win",await ke(R,B,Math.min(2600,900+q.ret/q.st*120),"+"),R.classList.add("pop"),x.textContent="Apostou "+H(q.st)+" \xB7 recebeu "+H(q.ret),D=6e3):B===0?(I.textContent="Ficou igual",R.className="rv-amt num",R.textContent="0",x.textContent="Recebeu de volta o que apostou ("+H(q.st)+")."):(I.textContent="Perdeu",R.className="rv-amt num neg",await ke(R,-B,900,"\u2212"),x.textContent=q.ret>0?"Ganhou "+H(q.ret)+" em pr\xE9mios, mas tinha apostado "+H(q.st)+".":"Boa sorte na pr\xF3xima ronda.",D=4500)}}O("rvClose").hidden=!1,clearTimeout(er),er=setTimeout(nr,D)}function nr(){clearTimeout(er),Xe.hidden=!0,We=null}function Wr(){O("shopBody")&&(O("shopBal").innerHTML=j()?"<b>Conta admin:</b> tem todos os itens desbloqueados.":Y()?'Dispon\xEDvel: <b class="num">'+H(T(s.uid))+"</b> fichas"+(s.game.open?"":' \xB7 <span class="neg">compras em pausa enquanto a banca lan\xE7a os dados</span>'):"Sente-se \xE0 mesa para poder comprar com as suas fichas.",L(O("shopBody"),pa()))}function pa(){let m=ae()||{},_=T(s.uid),I=s.game&&s.game.open,R=m.theme&&ve(m.theme)?m.theme:"classico",x=(M,fe,ge)=>{if(ve(M.id))return ge?fe?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="'+M.id+'">Usar</button>':'<span class="owned">J\xE1 \xE9 seu</span>';let Fe=I&&_>=M.price;return'<button class="btn sm primary" data-act="buy" data-id="'+M.id+'" data-label="Comprar \xB7 '+H(M.price)+'"'+(Fe?"":" disabled")+">Comprar \xB7 "+H(M.price)+"</button>"+(I&&_<M.price?'<span class="note">Faltam '+H(M.price-_)+"</span>":"")},D=M=>'<div class="swatch" aria-hidden="true" style="background:'+M[0]+";border-color:"+M[1]+'"><span style="background:'+M[1]+'"></span><span style="background:'+M[2]+'"></span><span class="mini-chip" style="background:'+M[1]+'"></span></div>',q=M=>'<div class="sitem'+(R===M.id?" on":"")+'">'+D(M.sw)+'<div class="sinfo"><b>'+oe(M.name)+'</b><span class="note">'+oe(M.desc)+'</span></div><div class="sbuy">'+x(M,R===M.id,!0)+"</div></div>",B='<div class="sitem'+(R==="classico"?" on":"")+'">'+D(["#145236","#E8C46A","#F4ECD2"])+'<div class="sinfo"><b>Cl\xE1ssico</b><span class="note">O feltro verde original. Gr\xE1tis.</span></div><div class="sbuy">'+(R==="classico"?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="classico">Usar</button>')+"</div></div>",K=m.color,ce=(M,fe)=>{let ge=!ve(M.id)&&M.prev&&!ve(M.prev);return'<div class="sitem rank'+(K===M.hex?" on":"")+(ge?" locked":"")+'"><div class="medal" aria-hidden="true" style="background:'+M.grad+'"><span>'+(fe+1)+'</span></div><div class="sinfo"><b>'+oe(M.name)+'</b><span class="note">'+(ge?"Precisa de "+oe(Ht[M.prev].name)+" primeiro.":"Ranking "+(fe+1)+" de "+la.length+". A sua cor e ins\xEDgnia na mesa.")+'</span></div><div class="sbuy">'+(ge?'<span class="note">Bloqueado \xB7 '+H(M.price)+"</span>":x(M,K===M.hex,!0))+"</div></div>"},Ye=!la.map(M=>M.hex).includes(K),ir='<div class="sitem'+(Ye?" on":"")+'"><div class="cdot" aria-hidden="true" style="background:'+(Ye&&K?K:qr[0])+'"></div><div class="sinfo"><b>Cor da casa</b><span class="note">Uma das cores normais da mesa. Gr\xE1tis.</span></div><div class="sbuy">'+(Ye?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="normal">Usar</button>')+"</div></div>",ct=Ht.f_5k,Dt='<div class="sitem'+(ve("f_5k")?" on":"")+'"><div class="bigchip" aria-hidden="true" style="background:'+aa.bg+";color:"+aa.fg+'">5k</div><div class="sinfo"><b>'+oe(ct.name)+'</b><span class="note">'+oe(ct.desc)+'</span></div><div class="sbuy">'+x(ct,!1,!1)+"</div></div>";return'<h3 class="shop-sec">Temas da mesa</h3><div class="sgrid">'+B+nh.filter(M=>M.kind==="theme").map(q).join("")+'</div><h3 class="shop-sec">Rankings de jogador</h3><p class="note">Cada ranking d\xE1-lhe uma cor e uma ins\xEDgnia na mesa. Sobe-se por ordem: Bronze, Prata, Ouro, Platina, Diamante, Rubi e Esmeralda.</p><div class="sgrid">'+ir+la.map(ce).join("")+'</div><h3 class="shop-sec">Fichas</h3><div class="sgrid">'+Dt+'</div><p class="note soon">Brevemente: mais novidades no balc\xE3o d\u2019O Mateus Banca.</p>'}async function In(m){let _=Ht[m],I=Y(),R=ae();if(!_||!I||!R||ve(m))return;if(!s.game.open){me("As compras voltam quando a banca reabrir as apostas.");return}if(_.prev&&!ve(_.prev)){me("Precisa de "+Ht[_.prev].name+" primeiro.");return}if(T(s.uid)<_.price){me("Faltam "+H(_.price-T(s.uid))+" fichas.");return}let x=n.writeBatch(i);x.update(n.doc(i,"players",s.uid),{chips:I.chips-_.price}),x.update(n.doc(i,"users",s.uid),{owned:P(s.uid).concat(m)});try{await x.commit(),me("Comprou "+_.name+"!"),_.kind!=="chip"&&(s.users[s.uid]={...s.users[s.uid],owned:P(s.uid).concat(m)},Kr(m))}catch(D){d(D)}}async function Kr(m){if(!ae())return;if(m==="classico"||Ht[m]&&Ht[m].kind==="theme"){if(m!=="classico"&&!ve(m))return;try{await n.updateDoc(n.doc(i,"users",s.uid),{theme:m})}catch(x){d(x)}return}let I;if(m==="normal"){let x=Object.values(s.players).filter(D=>D.id!==s.uid).map(D=>D.color);I=qr.find(D=>!x.includes(D))||qr[0]}else Ht[m]&&Ht[m].kind==="rank"&&ve(m)&&(I=Ht[m].hex);if(!I)return;let R=n.writeBatch(i);R.update(n.doc(i,"users",s.uid),{color:I}),Y()&&R.update(n.doc(i,"players",s.uid),{color:I});try{await R.commit()}catch(x){d(x)}}async function rr(m){try{return await n.addDoc(u.bets,{uid:s.uid,round:s.game.round,ts:Date.now(),...m}),!0}catch(_){return d(_),!1}}async function Qr(m){if(k()!=="player"||!Y()||!s.game.open)return;if(a.mode==="multi"){let R=a.legs.indexOf(m);if(R>=0){a.legs.splice(R,1),X();return}if(a.legs.length>=6){me("M\xE1ximo de 6 sele\xE7\xF5es por m\xFAltipla");return}let x=a.legs.concat(m);if(x.length>1){let D=Yl(x);if(D){me($n(Qe[m])+": "+D.charAt(0).toLowerCase()+D.slice(1));return}}a.legs=x,X();return}if(a.mode==="take"){let R=be(s.uid).filter(x=>x.kind==="s"&&x.k===m);if(!R.length){me("N\xE3o tem fichas nesta casa");return}try{await n.deleteDoc(n.doc(i,"bets",R[R.length-1].id))}catch(x){d(x)}return}if(T(s.uid)<a.chip){me("N\xE3o tem fichas suficientes (dispon\xEDvel: "+H(T(s.uid))+")");return}let _=g(),I=w(s.uid,m);if(_&&I+a.chip>_){me("M\xE1ximo por aposta: "+H(_)+". Nesta casa j\xE1 tem "+H(I)+".");return}await rr({kind:"s",k:m,a:a.chip})}async function ma(){let m=Math.floor(a.stake||0),_=Yl(a.legs);if(_){me(_);return}if(m>0){if(T(s.uid)<m){me("S\xF3 tem "+H(T(s.uid))+" fichas dispon\xEDveis");return}if(g()&&m>g()){me("M\xE1ximo por aposta: "+H(g())+" fichas");return}await rr({kind:"m",legs:a.legs.slice(),a:m})&&(a.legs=[],a.stake=0,me("M\xFAltipla de "+H(m)+" fichas registada"),X())}}async function ga(){let m=(s.game.lastBets||[]).filter(D=>D.uid===s.uid),_=T(s.uid),I=0,R=g(),x={};for(let D of m){if(D.a>_){I++;continue}if(R&&(D.kind==="m"?D.a>R:(x[D.k]||0)+D.a>R)){I++;continue}D.kind!=="m"&&(x[D.k]=(x[D.k]||0)+D.a),_-=D.a,await rr(D.kind==="m"?{kind:"m",legs:D.legs,a:D.a}:{kind:"s",k:D.k,a:D.a})}I&&me(I+" aposta(s) ficaram de fora (fichas insuficientes ou acima do m\xE1ximo)")}async function Jr(){let m=ae();if(!m||!s.game)return;let _=Object.values(s.players).map(R=>R.color),I=_.includes(m.color)&&qr.find(R=>!_.includes(R))||m.color;try{await n.setDoc(n.doc(i,"players",s.uid),{name:m.name,chips:s.game.initial,color:I,joined:Date.now()})}catch(R){d(R)}}async function Yr(m,_){let I=s.game;if(!m||m.length!==5||I.open)return!1;let R=Zi(m),x=s.bets.filter(M=>M.round===I.round),D={},q={},B={};pt().forEach(M=>{B[M.id]=M.chips,q[M.id]=M.chips});let K={...q},ce=[],Me=g(),Ye={};x.forEach(M=>{let fe=s.players[M.uid];if(!fe)return;let ge=D[fe.id]||(D[fe.id]={uid:fe.id,name:fe.name,color:fe.color,st:0,ret:0,best:0,lines:[]}),Fe=M.kind==="m",ei=Fe?"M\xFAltipla: "+(M.legs||[]).map(ti=>Qe[ti]?$n(Qe[ti]):"?").join(" + "):Qe[M.k]?$n(Qe[M.k]):"?",je=Math.floor(M.a),gt=null;if(je>0?(Fe?Yl(M.legs):!Qe[M.k])?gt="aposta inv\xE1lida":Me&&(Fe?je>Me:(Ye[fe.id+"|"+M.k]||0)+je>Me)?gt="acima do m\xE1ximo":je>K[fe.id]&&(gt="sem saldo"):gt="valor inv\xE1lido",gt){ge.lines.push({n:ei,a:M.a,pay:0,v:gt});return}K[fe.id]-=je,Fe||(Ye[fe.id+"|"+M.k]=(Ye[fe.id+"|"+M.k]||0)+je);let Nt=Fe?Math.floor(je*eg(M.legs,R)+1e-9):OI(je,Qe[M.k].f(R));ge.st+=je,ge.ret+=Nt,q[fe.id]+=Nt-je,Nt>ge.best&&(ge.best=Nt),ge.lines.push({n:ei,a:je,pay:Nt}),ce.push(Fe?{uid:M.uid,kind:"m",legs:M.legs,a:je}:{uid:M.uid,kind:"s",k:M.k,a:je})});let ir=Object.values(D).map(({best:M,...fe})=>fe),ct=n.writeBatch(i);Object.keys(q).forEach(M=>{q[M]!==B[M]&&ct.update(n.doc(i,"players",M),{chips:q[M]})});let Dt={};Object.values(D).forEach(M=>{let fe=s.users[M.uid];if(!fe||M.st===0)return;let ge={...oa,...fe.stats||{}};Dt[M.uid]=ge,ct.update(n.doc(i,"users",M.uid),{stats:{rounds:ge.rounds+1,staked:ge.staked+M.st,returned:ge.returned+M.ret,best:Math.max(ge.best,M.best)}})}),s.bets.forEach(M=>ct.delete(n.doc(i,"bets",M.id))),ct.update(u.game,Hm({round:I.round+1,open:!0,lastResult:{round:I.round,dice:m.slice(),desc:Ql(R),per:ir,virtual:!!_},history:[{round:I.round,dice:m.slice(),sum:R.sum,per:ir.map(M=>({name:M.name,net:M.ret-M.st}))}].concat(I.history||[]).slice(0,30),lastBets:ce,undo:{round:I.round,dice:m.slice(),virtual:!!_,chips:B,stats:Dt,bets:s.bets.map(M=>{let{id:fe,...ge}=M;return{id:fe,d:ge}}),lastResult:I.lastResult||null,lastBets:I.lastBets||[]}}));try{return await ct.commit(),!0}catch(M){return d(M),!1}}async function is(){a.busy||(a.busy=!0,X(),await Yr(a.dice,!1)&&(a.dice=[]),a.busy=!1,X())}async function En(){if(!(a.busy||!s.game)){a.busy=!0,X();try{let m=s.game,_=xI(),I=Date.now().toString(36)+Math.random().toString(36).slice(2,6);Be.roll=I,await n.updateDoc(u.game,{open:!1,roll:{id:I,round:m.round,dice:_}}),Ae(_,m.round,2400),await We.tumble,await Yr(_,!0)}catch(m){d(m)}a.busy=!1,X()}}async function Xr(){let m=s.game.undo;if(!m)return;let _=n.writeBatch(i);Object.entries(m.chips).forEach(([I,R])=>{s.players[I]&&_.update(n.doc(i,"players",I),{chips:R})}),Object.entries(m.stats||{}).forEach(([I,R])=>{s.users[I]&&_.update(n.doc(i,"users",I),{stats:R})}),s.bets.forEach(I=>_.delete(n.doc(i,"bets",I.id))),m.bets.forEach(I=>_.set(n.doc(i,"bets",I.id),I.d)),_.update(u.game,Hm({round:m.round,open:!1,roll:null,lastResult:m.lastResult,lastBets:m.lastBets,history:(s.game.history||[]).slice(1),undo:null}));try{await _.commit(),m.virtual||(a.dice=m.dice),me(m.virtual?"Ronda anulada. As apostas voltaram; pode lan\xE7ar de novo.":"Ronda anulada. Corrija os dados e liquide de novo."),X()}catch(I){d(I)}}async function Zr(){let m=n.writeBatch(i);Object.keys(s.players).forEach(_=>m.delete(n.doc(i,"players",_))),s.bets.forEach(_=>m.delete(n.doc(i,"bets",_.id))),m.set(u.game,vn(s.game?s.game.initial:1e3,s.game?s.game.diceMode:"fisico",s.game?s.game.maxBet:0));try{await m.commit(),a.dice=[],me("Partida nova. Os jogadores voltam a sentar-se com as suas contas.")}catch(_){d(_)}}let le=null;document.addEventListener("click",async m=>{let _=m.target.closest("[data-act]");if(!_)return;let I=_.dataset.act;if(I==="role")s.role=_.dataset.v,Km.set("sicbo5-role",s.role),Kn="",X(),window.scrollTo(0,0);else if(I==="toggleAdmin"){let R=s.users[_.dataset.id];if(!R||R.id===s.uid)return;if(le!==_){le&&(le.textContent=le.dataset.label),le=_,_.dataset.label=_.textContent,_.textContent="Confirmar",setTimeout(()=>{le===_&&(_.textContent=_.dataset.label,le=null)},4e3);return}le=null,O("ulist")._last=null;let x=R.role!=="admin";try{await n.updateDoc(n.doc(i,"users",R.id),{role:x?"admin":"player"}),me(R.name+(x?" passou a ter acesso \xE0 banca":" deixou de ter acesso \xE0 banca"))}catch(D){d(D)}}else if(I==="authTab")a.authTab=_.dataset.v,O("authNote").textContent="",X();else if(I==="logout")try{await n.signOut(r)}catch(R){d(R)}else if(I==="sit")Jr();else if(I==="zone")Qr(_.dataset.k);else if(I==="chip")a.chip=+_.dataset.v,a.mode==="multi"&&(a.stake=(a.stake||0)+a.chip),X();else if(I==="mode")a.mode=a.mode===_.dataset.v?"bet":_.dataset.v,X();else if(I==="leg")a.legs=a.legs.filter(R=>R!==_.dataset.k),X();else if(I==="clearSlip")a.legs=[],a.stake=0,X();else if(I==="placeMulti")ma();else if(I==="repeat")ga();else if(I==="cancelMulti")try{await n.deleteDoc(n.doc(i,"bets",_.dataset.id)),me("M\xFAltipla cancelada")}catch(R){d(R)}else if(I==="tab")a.tab=_.dataset.v,X();else if(I==="ptab")a.ptab=_.dataset.v,a.mode="bet",a.legs=[],X(),window.scrollTo(0,0);else if(I==="buy"){if(le!==_){le&&(le.textContent=le.dataset.label),le=_,_.textContent="Confirmar compra",setTimeout(()=>{le===_&&(_.textContent=_.dataset.label,le=null)},4e3);return}le=null,O("shopBody")._last=null,In(_.dataset.id)}else if(I==="equip")Kr(_.dataset.id);else if(I==="saveMax"){let R=Math.max(0,Math.floor(+O("maxBet").value||0));try{await n.updateDoc(u.game,{maxBet:R}),O("maxBet").blur(),me(R?"M\xE1ximo por aposta: "+H(R)+" fichas":"Sem m\xE1ximo por aposta")}catch(x){d(x)}}else if(I==="toggleOpen")try{await n.updateDoc(u.game,{open:!s.game.open})}catch(R){d(R)}else if(I==="diceMode"){if(s.game.diceMode!==_.dataset.v)try{await n.updateDoc(u.game,{diceMode:_.dataset.v})}catch(R){d(R)}}else if(I==="roll")En();else if(I==="face")a.dice.length<5&&(a.dice.push(+_.dataset.v),X());else if(I==="slot"){let R=+_.dataset.i;a.dice[R]&&(a.dice.splice(R,1),X())}else if(I==="clearDice")a.dice=[],X();else if(I==="settle")is();else if(I==="undo")Xr();else if(I==="closeReveal")nr();else if(I==="copy"){let R=O("shareUrl");try{await navigator.clipboard.writeText(R.value),me("Link copiado")}catch{R.select(),me("Selecionei o link: copie-o")}}else if(I==="saveInit"){let R=Math.max(0,Math.floor(+O("initChips").value||0));try{await n.updateDoc(u.game,{initial:R}),me("Quem se sentar a seguir come\xE7a com "+H(R)+" fichas")}catch(x){d(x)}}else if(I==="give"||I==="takeChips"){let R=s.players[_.dataset.id],x=O("amt-"+R.id),D=Math.floor(+x.value);if(!(D>0)){me("Escreva a quantidade de fichas"),x.focus();return}if(I==="takeChips"&&D>R.chips){me(R.name+" s\xF3 tem "+H(R.chips)+" fichas");return}try{await n.updateDoc(n.doc(i,"players",R.id),{chips:R.chips+(I==="give"?D:-D)}),x.value="",x.blur(),me((I==="give"?"Dadas ":"Tiradas ")+H(D)+" fichas a "+R.name)}catch(q){d(q)}}else if(I==="remove"||I==="reset"){if(le!==_){le&&(le.textContent=le.dataset.label),le=_,_.dataset.label=_.textContent,_.textContent="Confirmar",setTimeout(()=>{le===_&&(_.textContent=_.dataset.label,le=null)},4e3);return}if(le=null,_.textContent=_.dataset.label,O("plist")&&(O("plist")._last=null),I==="reset")Zr();else{let R=_.dataset.id,x=n.writeBatch(i);x.delete(n.doc(i,"players",R)),s.bets.filter(D=>D.uid===R).forEach(D=>x.delete(n.doc(i,"bets",D.id)));try{await x.commit(),me("Jogador removido da mesa")}catch(D){d(D)}}}}),document.addEventListener("keydown",m=>{m.key==="Escape"&&!Xe.hidden&&nr()}),document.addEventListener("input",m=>{m.target.id==="stake"&&(a.stake=Math.max(0,Math.floor(+m.target.value||0)))}),document.addEventListener("change",m=>{m.target.id==="stake"&&(m.target.blur(),X())}),X()}tg(Kl);
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
