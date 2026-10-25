var pg=Object.defineProperty;var mg=(n,e)=>{for(var t in e)pg(n,t,{get:e[t],enumerable:!0})};var Vl={};mg(Vl,{addDoc:()=>km,collection:()=>_m,createUserWithEmailAndPassword:()=>lc,deleteDoc:()=>Cm,doc:()=>kl,getDoc:()=>Sm,init:()=>bI,onAuthStateChanged:()=>dc,onSnapshot:()=>Dm,setDoc:()=>Rm,signInAnonymously:()=>uc,signInWithEmailAndPassword:()=>hc,signOut:()=>fc,updateDoc:()=>Pm,writeBatch:()=>Om});var Rh=()=>{};var kh=function(n){let e=[],t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gg=function(n){let e=[],t=0,r=0;for(;t<n.length;){let i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=n[t++],a=n[t++],u=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{let s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Dh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){let s=n[i],a=i+1<n.length,u=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,p=s>>2,y=(s&3)<<4|u>>4,w=(u&15)<<2|d>>6,k=d&63;l||(k=64,a||(w=64)),r.push(t[p],t[y],t[w],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){let s=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;let d=i<n.length?t[n.charAt(i)]:64;++i;let y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||u==null||d==null||y==null)throw new pa;let w=s<<2|u>>4;if(r.push(w),d!==64){let k=u<<4&240|d>>2;if(r.push(k),y!==64){let O=d<<6&192|y;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},pa=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},_g=function(n){let e=kh(n);return Dh.encodeByteArray(e,!0)},Jr=function(n){return _g(n).replace(/\./g,"")},cs=function(n){try{return Dh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Nh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var yg=()=>Nh().__FIREBASE_DEFAULTS__,vg=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&cs(n[1]);return e&&JSON.parse(e)},us=()=>{try{return Rh()||yg()||vg()||wg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ga=n=>{var e,t;return(t=(e=us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Oh=n=>{let e=ga(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},_a=()=>{var n;return(n=us())===null||n===void 0?void 0:n.config},ya=n=>{var e;return(e=us())===null||e===void 0?void 0:e[`_${n}`]};var as=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}};function Yt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ls(n){return(await fetch(n,{credentials:"include"})).ok}function xh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Jr(JSON.stringify(t)),Jr(JSON.stringify(a)),""].join(".")}var Qr={};function Ig(){let n={prod:[],emulator:[]};for(let e of Object.keys(Qr))Qr[e]?n.emulator.push(e):n.prod.push(e);return n}function Eg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var Ph=!1;function hs(n,e){if(typeof window>"u"||typeof document>"u"||!Yt(window.location.host)||Qr[n]===e||Qr[n]||Ph)return;Qr[n]=e;function t(w){return`__firebase__banner__${w}`}let r="__firebase__banner",s=Ig().prod.length>0;function a(){let w=document.getElementById(r);w&&w.remove()}function u(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){let w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Ph=!0,a()},w}function p(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){let w=Eg(r),k=t("text"),O=document.getElementById(k)||document.createElement("span"),M=t("learnmore"),x=document.getElementById(M)||document.createElement("a"),X=t("preprendIcon"),K=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){let Q=w.element;u(Q),p(x,M);let ae=d();l(K,X),Q.append(K,O,x,ae),document.body.appendChild(Q)}s?(O.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Tg(){var n;let e=(n=us())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uh(){let n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bh(){return!Tg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function va(){try{return typeof indexedDB=="object"}catch{return!1}}function jh(){return new Promise((n,e)=>{try{let t=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var bg="FirebaseError",Ze=class n extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}},kt=class{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Ag(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new Ze(i,u,r)}};function Ag(n,e){return n.replace(Sg,(t,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Sg=/\{\$([^}]+)}/g;function qh(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ft(n,e){if(n===e)return!0;let t=Object.keys(n),r=Object.keys(e);for(let i of t){if(!r.includes(i))return!1;let s=n[i],a=e[i];if(Ch(s)&&Ch(a)){if(!ft(s,a))return!1}else if(s!==a)return!1}for(let i of r)if(!t.includes(i))return!1;return!0}function Ch(n){return n!==null&&typeof n=="object"}function er(n){let e=[];for(let[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tr(n){let e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function nr(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function zh(n,e){let t=new ma(n,e);return t.subscribe.bind(t)}var ma=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Rg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=fa),i.error===void 0&&(i.error=fa),i.complete===void 0&&(i.complete=fa);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Rg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fa(){}var VI=4*60*60*1e3;function pe(n){return n&&n._delegate?n._delegate:n}var it=class{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Tn="[DEFAULT]";var wa=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new as;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cg(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(let[t,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[s,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,t){var r;let i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Pg(n){return n===Tn?void 0:n}function Cg(n){return n.instantiationMode==="EAGER"}var ds=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new wa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var kg=[],ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));var Dg={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ng=ee.INFO,Og={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},xg=(n,e,...t)=>{if(e<n.logLevel)return;let r=new Date().toISOString(),i=Og[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Xt=class{constructor(e){this.name=e,this._logLevel=Ng,this._logHandler=xg,this._userLogHandler=null,kg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}};var Vg=(n,e)=>e.some(t=>n instanceof t),Gh,$h;function Lg(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return $h||($h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Hh=new WeakMap,Ea=new WeakMap,Wh=new WeakMap,Ia=new WeakMap,ba=new WeakMap;function Fg(n){let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(pt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Hh.set(t,n)}).catch(()=>{}),ba.set(e,n),e}function Ug(n){if(Ea.has(n))return;let e=new Promise((t,r)=>{let i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ea.set(n,e)}var Ta={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ea.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kh(n){Ta=n(Ta)}function Bg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let r=n.call(fs(this),e,...t);return Wh.set(r,e.sort?e.sort():[e]),pt(r)}:Mg().includes(n)?function(...e){return n.apply(fs(this),e),pt(Hh.get(this))}:function(...e){return pt(n.apply(fs(this),e))}}function jg(n){return typeof n=="function"?Bg(n):(n instanceof IDBTransaction&&Ug(n),Vg(n,Lg())?new Proxy(n,Ta):n)}function pt(n){if(n instanceof IDBRequest)return Fg(n);if(Ia.has(n))return Ia.get(n);let e=jg(n);return e!==n&&(Ia.set(n,e),ba.set(e,n)),e}var fs=n=>ba.get(n);function Jh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(n,e),u=pt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(pt(a.result),l.oldVersion,l.newVersion,pt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var qg=["get","getKey","getAll","getAllKeys","count"],zg=["put","add","delete","clear"],Aa=new Map;function Qh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Aa.get(e))return Aa.get(e);let t=e.replace(/FromIndex$/,""),r=e!==t,i=zg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qg.includes(t)))return;let s=async function(a,...u){let l=this.transaction(a,i?"readwrite":"readonly"),d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&l.done]))[0]};return Aa.set(e,s),s}Kh(n=>({...n,get:(e,t,r)=>Qh(e,t)||n.get(e,t,r),has:(e,t)=>!!Qh(e,t)||n.has(e,t)}));var Ra=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gg(t)){let r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}};function Gg(n){let e=n.getComponent();return e?.type==="VERSION"}var Pa="@firebase/app",Yh="0.13.2";var Dt=new Xt("@firebase/app"),$g="@firebase/app-compat",Hg="@firebase/analytics-compat",Wg="@firebase/analytics",Kg="@firebase/app-check-compat",Qg="@firebase/app-check",Jg="@firebase/auth",Yg="@firebase/auth-compat",Xg="@firebase/database",Zg="@firebase/data-connect",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",r_="@firebase/installations",i_="@firebase/installations-compat",s_="@firebase/messaging",o_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",u_="@firebase/remote-config",l_="@firebase/remote-config-compat",h_="@firebase/storage",d_="@firebase/storage-compat",f_="@firebase/firestore",p_="@firebase/ai",m_="@firebase/firestore-compat",g_="firebase",__="11.10.0";var Ca="[DEFAULT]",y_={[Pa]:"fire-core",[$g]:"fire-core-compat",[Wg]:"fire-analytics",[Hg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Kg]:"fire-app-check-compat",[Jg]:"fire-auth",[Yg]:"fire-auth-compat",[Xg]:"fire-rtdb",[Zg]:"fire-data-connect",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[r_]:"fire-iid",[i_]:"fire-iid-compat",[s_]:"fire-fcm",[o_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[u_]:"fire-rc",[l_]:"fire-rc-compat",[h_]:"fire-gcs",[d_]:"fire-gcs-compat",[f_]:"fire-fst",[m_]:"fire-fst-compat",[p_]:"fire-vertex","fire-js":"fire-js",[g_]:"fire-js-all"};var ps=new Map,v_=new Map,ka=new Map;function Xh(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){let e=n.name;if(ka.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;ka.set(e,n);for(let t of ps.values())Xh(t,n);for(let t of v_.values())Xh(t,n);return!0}function Xr(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}var w_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new kt("app","Firebase",w_);var Da=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}};var tn=__;function xa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let r=Object.assign({name:Ca,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(t||(t=_a()),!t)throw Zt.create("no-options");let s=ps.get(i);if(s){if(ft(t,s.options)&&ft(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}let a=new ds(i);for(let l of ka.values())a.addComponent(l);let u=new Da(t,r,a);return ps.set(i,u),u}function ms(n=Ca){let e=ps.get(n);if(!e&&n===Ca&&_a())return xa();if(!e)throw Zt.create("no-app",{appName:n});return e}function ut(n,e,t){var r;let i=(r=y_[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(u.join(" "));return}en(new it(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var I_="firebase-heartbeat-database",E_=1,Yr="firebase-heartbeat-store",Sa=null;function nd(){return Sa||(Sa=Jh(I_,E_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Sa}async function T_(n){try{let t=(await nd()).transaction(Yr),r=await t.objectStore(Yr).get(rd(n));return await t.done,r}catch(e){if(e instanceof Ze)Dt.warn(e.message);else{let t=Zt.create("idb-get",{originalErrorMessage:e?.message});Dt.warn(t.message)}}}async function Zh(n,e){try{let r=(await nd()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(e,rd(n)),await r.done}catch(t){if(t instanceof Ze)Dt.warn(t.message);else{let r=Zt.create("idb-set",{originalErrorMessage:t?.message});Dt.warn(r.message)}}}function rd(n){return`${n.name}!${n.options.appId}`}var b_=1024,A_=30,Na=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Oa(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ed();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>A_){let a=R_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=ed(),{heartbeatsToSend:r,unsentEntries:i}=S_(this._heartbeatsCache.heartbeats),s=Jr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Dt.warn(t),""}}};function ed(){return new Date().toISOString().substring(0,10)}function S_(n,e=b_){let t=[],r=n.slice();for(let i of n){let s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),td(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),td(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}var Oa=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return va()?jh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await T_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function td(n){return Jr(JSON.stringify({version:2,heartbeats:n})).length}function R_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function P_(n){en(new it("platform-logger",e=>new Ra(e),"PRIVATE")),en(new it("heartbeat",e=>new Na(e),"PRIVATE")),ut(Pa,Yh,n),ut(Pa,Yh,"esm2017"),ut("fire-js","")}P_("");var C_="firebase",k_="11.10.0";ut(C_,k_,"app");function gs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ed(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Td=Ed,bd=new kt("auth","Firebase",Ed());var Ts=new Xt("@firebase/auth");function D_(n,...e){Ts.logLevel<=ee.WARN&&Ts.warn(`Auth (${tn}): ${n}`,...e)}function ys(n,...e){Ts.logLevel<=ee.ERROR&&Ts.error(`Auth (${tn}): ${n}`,...e)}function lt(n,...e){throw sc(n,...e)}function gt(n,...e){return sc(n,...e)}function Ad(n,e,t){let r=Object.assign(Object.assign({},Td()),{[e]:t});return new kt("auth","Firebase",r).create(e,{appName:n.name})}function _t(n){return Ad(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sc(n,...e){if(typeof n!="string"){let t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return bd.create(n,...e)}function q(n,e,...t){if(!n)throw sc(e,...t)}function mt(n){let e="INTERNAL ASSERTION FAILED: "+n;throw ys(e),new Error(e)}function Ot(n,e){n||mt(e)}function Ba(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function N_(){return id()==="http:"||id()==="https:"}function id(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function O_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(N_()||Mh()||"connection"in navigator)?navigator.onLine:!0}function x_(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var bn=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Vh()||Fh()}get(){return O_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function oc(n,e){Ot(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var bs=class{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var V_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var L_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],M_=new bn(3e4,6e4);function Ce(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ze(n,e,t,r,i={}){return Sd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});let u=er(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);let d=Object.assign({method:e,headers:l},s);return Lh()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(d.credentials="include"),bs.fetch()(await Rd(n,n.config.apiHost,t,u),d)})}async function Sd(n,e,t){n._canInitEmulator=!1;let r=Object.assign(Object.assign({},V_),e);try{let i=new ja(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();let a=await s.json();if("needConfirmation"in a)throw ei(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{let u=s.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ei(n,"user-disabled",a);let p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ad(n,p,d);lt(n,p)}}catch(i){if(i instanceof Ze)throw i;lt(n,"network-request-failed",{message:String(i)})}}async function on(n,e,t,r,i={}){let s=await ze(n,e,t,r,i);return"mfaPendingCredential"in s&&lt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Rd(n,e,t,r){let i=`${e}${t}?${r}`,s=n,a=s.config.emulator?oc(n.config,i):`${n.config.apiScheme}://${i}`;return L_.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function F_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var ja=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),M_.get())})}};function ei(n,e,t){let r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);let i=gt(n,e,r);return i.customData._tokenResponse=t,i}function sd(n){return n!==void 0&&n.enterprise!==void 0}var As=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return F_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Pd(n,e){return ze(n,"GET","/v2/recaptchaConfig",Ce(n,e))}async function U_(n,e){return ze(n,"POST","/v1/accounts:delete",e)}async function Ss(n,e){return ze(n,"POST","/v1/accounts:lookup",e)}function ti(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cd(n,e=!1){let t=pe(n),r=await t.getIdToken(e),i=ac(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ti(Va(i.auth_time)),issuedAtTime:ti(Va(i.iat)),expirationTime:ti(Va(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Va(n){return Number(n)*1e3}function ac(n){let[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{let i=cs(t);return i?JSON.parse(i):(ys("Failed to decode base64 JWT payload"),null)}catch(i){return ys("Caught error parsing JWT payload as JSON",i?.toString()),null}}function od(n){let e=ac(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function ii(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ze&&B_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function B_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var qa=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var si=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Rs(n){var e;let t=n.auth,r=await n.getIdToken(),i=await ii(n,Ss(t,{idToken:r}));q(i?.users.length,t,"internal-error");let s=i.users[0];n._notifyReloadListener(s);let a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dd(s.providerUserInfo):[],u=j_(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!u?.length,p=l?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new si(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function kd(n){let e=pe(n);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dd(n){return n.map(e=>{var{providerId:t}=e,r=gs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function q_(n,e){let t=await Sd(n,{},async()=>{let r=er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Rd(n,i,"/v1/token",`key=${s}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(l.credentials="include"),bs.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function z_(n,e){return ze(n,"POST","/v2/accounts:revokeToken",Ce(n,e))}var ni=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");let t=od(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:i,expiresIn:s}=await q_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){let{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new n;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return mt("not implemented")}};function nn(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var rn=class n{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new si(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await ii(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Cd(this,e)}reload(){return kd(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Rs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(_t(this.auth));let e=await this.getIdToken();return await ii(this,U_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,u,l,d,p;let y=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(i=t.email)!==null&&i!==void 0?i:void 0,k=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,O=(a=t.photoURL)!==null&&a!==void 0?a:void 0,M=(u=t.tenantId)!==null&&u!==void 0?u:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,X=(d=t.createdAt)!==null&&d!==void 0?d:void 0,K=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:Q,emailVerified:ae,isAnonymous:be,providerData:re,stsTokenManager:T}=t;q(Q&&T,e,"internal-error");let g=ni.fromJSON(this.name,T);q(typeof Q=="string",e,"internal-error"),nn(y,e.name),nn(w,e.name),q(typeof ae=="boolean",e,"internal-error"),q(typeof be=="boolean",e,"internal-error"),nn(k,e.name),nn(O,e.name),nn(M,e.name),nn(x,e.name),nn(X,e.name),nn(K,e.name);let v=new n({uid:Q,auth:e,email:w,emailVerified:ae,displayName:y,isAnonymous:be,photoURL:O,phoneNumber:k,tenantId:M,stsTokenManager:g,createdAt:X,lastLoginAt:K});return re&&Array.isArray(re)&&(v.providerData=re.map(E=>Object.assign({},E))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,t,r=!1){let i=new ni;i.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Rs(s),s}static async _fromGetAccountInfoResponse(e,t,r){let i=t.users[0];q(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Dd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,u=new ni;u.updateFromIdToken(r);let l=new n({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new si(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,d),l}};var ad=new Map;function Nt(n){Ot(n instanceof Function,"Expected a class definition");let e=ad.get(n);return e?(Ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ad.set(n,e),e)}var Ps=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Ps.type="NONE";var za=Ps;function vs(n,e,t){return`firebase:${n}:${e}:${t}`}var Cs=class n{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=vs(this.userKey,i.apiKey,s),this.fullPersistenceKey=vs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Ss(this.auth,{idToken:e}).catch(()=>{});return t?rn._fromGetAccountInfoResponse(this.auth,t,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new n(Nt(za),e,r);let i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d),s=i[0]||Nt(za),a=vs(r,e.config.apiKey,e.name),u=null;for(let d of t)try{let p=await d._get(a);if(p){let y;if(typeof p=="string"){let w=await Ss(e,{idToken:p}).catch(()=>{});if(!w)break;y=await rn._fromGetAccountInfoResponse(e,w,p)}else y=rn._fromJSON(e,p);d!==s&&(u=y),s=d;break}}catch{}let l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new n(s,e,r):(s=l[0],u&&await s._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new n(s,e,r))}};function cd(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Md(e))return"Blackberry";if(Fd(e))return"Webos";if(Od(e))return"Safari";if((e.includes("chrome/")||xd(e))&&!e.includes("edge/"))return"Chrome";if(Ld(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Nd(n=Oe()){return/firefox\//i.test(n)}function Od(n=Oe()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xd(n=Oe()){return/crios\//i.test(n)}function Vd(n=Oe()){return/iemobile/i.test(n)}function Ld(n=Oe()){return/android/i.test(n)}function Md(n=Oe()){return/blackberry/i.test(n)}function Fd(n=Oe()){return/webos/i.test(n)}function cc(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function G_(n=Oe()){var e;return cc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $_(){return Uh()&&document.documentMode===10}function Ud(n=Oe()){return cc(n)||Ld(n)||Fd(n)||Md(n)||/windows phone/i.test(n)||Vd(n)}function Bd(n,e=[]){let t;switch(n){case"Browser":t=cd(Oe());break;case"Worker":t=`${cd(Oe())}-${n}`;break;default:t=n}let r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tn}/${r}`}var Ga=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=s=>new Promise((a,u)=>{try{let l=e(s);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(let i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function H_(n,e={}){return ze(n,"GET","/v2/passwordPolicy",Ce(n,e))}var W_=6,$a=class{constructor(e){var t,r,i,s;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:W_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,u;let l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Ha=class{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ks(this),this.idTokenSubscription=new ks(this),this.beforeStateQueue=new Ga(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nt(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Ss(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(We(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(_t(this));let t=e?pe(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await H_(this),t=new $a(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await z_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&Nt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[Nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),a=!1,u=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof t=="function"){let l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{let l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&D_(`Error while retrieving App Check token: ${t.error}`),t?.token}};function vt(n){return pe(n)}var ks=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=zh(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K_(n){Ks=n}function jd(n){return Ks.loadJS(n)}function Q_(){return Ks.recaptchaEnterpriseScript}function J_(){return Ks.gapiScript}function qd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Wa=class{constructor(){this.enterprise=new Ka}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Ka=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var Y_="recaptcha-enterprise",ri="NO_RECAPTCHA",Ds=class{constructor(e){this.type=Y_,this.auth=vt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{Pd(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{let d=new As(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function i(s,a,u){let l=window.grecaptcha;sd(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ri)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wa().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(u=>{if(!t&&sd(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Q_();l.length!==0&&(l+=u),jd(l).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}};async function Zr(n,e,t,r=!1,i=!1){let s=new Ds(n),a;if(i)a=ri;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}let u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){let l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){let l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function rr(n,e,t,r,i){var s,a;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let u=await Zr(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await Zr(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(u)});else if(i==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let u=await Zr(n,e,t);return r(n,u).catch(async l=>{var d;if(((d=n._getRecaptchaConfig())===null||d===void 0?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let p=await Zr(n,e,t,!1,!0);return r(n,p)}return Promise.reject(l)})}else{let u=await Zr(n,e,t,!1,!0);return r(n,u)}else return Promise.reject(i+" provider is not supported.")}async function X_(n){let e=vt(n),t=await Pd(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new As(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Ds(e).verify()}function zd(n,e){let t=Xr(n,"auth");if(t.isInitialized()){let i=t.getImmediate(),s=t.getOptions();if(ft(s,e??{}))return i;lt(i,"already-initialized")}return t.initialize({options:e})}function Z_(n,e){let t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Nt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Gd(n,e,t){let r=vt(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!t?.disableWarnings,s=$d(e),{host:a,port:u}=ey(e),l=u===null?"":`:${u}`,d={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(ft(d,r.config.emulator)&&ft(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Yt(a)?(ls(`${s}//${a}${l}`),hs("Auth",!0)):i||ty()}function $d(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ey(n){let e=$d(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:ud(r.substr(s.length+1))}}else{let[s,a]=r.split(":");return{host:s,port:ud(a)}}}function ud(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function ty(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var An=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}};async function ny(n,e){return ze(n,"POST","/v1/accounts:signUp",e)}async function ry(n,e){return on(n,"POST","/v1/accounts:signInWithPassword",Ce(n,e))}async function iy(n,e){return on(n,"POST","/v1/accounts:signInWithEmailLink",Ce(n,e))}async function sy(n,e){return on(n,"POST","/v1/accounts:signInWithEmailLink",Ce(n,e))}var oi=class n extends An{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new n(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rr(e,t,"signInWithPassword",ry,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return iy(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rr(e,r,"signUpPassword",ny,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return sy(e,{idToken:t,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function ir(n,e){return on(n,"POST","/v1/accounts:signInWithIdp",Ce(n,e))}var oy="http://localhost",Sn=class n extends An{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=gs(t,["providerId","signInMethod"]);if(!r||!i)return null;let a=new n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return ir(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,ir(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,ir(e,t)}buildRequest(){let e={requestUri:oy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=er(t)}return e}};async function ld(n,e){return ze(n,"POST","/v1/accounts:sendVerificationCode",Ce(n,e))}async function ay(n,e){return on(n,"POST","/v1/accounts:signInWithPhoneNumber",Ce(n,e))}async function cy(n,e){let t=await on(n,"POST","/v1/accounts:signInWithPhoneNumber",Ce(n,e));if(t.temporaryProof)throw ei(n,"account-exists-with-different-credential",t);return t}var uy={USER_NOT_FOUND:"user-not-found"};async function ly(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return on(n,"POST","/v1/accounts:signInWithPhoneNumber",Ce(n,t),uy)}var ai=class n extends An{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ay(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return cy(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ly(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function hy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dy(n){let e=tr(nr(n)).link,t=e?tr(nr(e)).deep_link_id:null,r=tr(nr(n)).deep_link_id;return(r?tr(nr(r)).link:null)||r||t||e||n}var Ns=class n{constructor(e){var t,r,i,s,a,u;let l=tr(nr(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,y=hy((i=l.mode)!==null&&i!==void 0?i:null);q(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){let t=dy(e);try{return new n(t)}catch{return null}}};var Rn=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=Ns.parseLink(t);return q(r,"argument-error"),oi._fromEmailAndCode(e,r.code,r.tenantId)}};Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Os=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Pn=class extends Os{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var ci=class n extends Pn{constructor(){super("facebook.com")}static credential(e){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";var ui=class n extends Pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return n.credential(t,r)}catch{return null}}};ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";var li=class n extends Pn{constructor(){super("github.com")}static credential(e){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";var hi=class n extends Pn{constructor(){super("twitter.com")}static credential(e,t){return Sn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n.credential(t,r)}catch{return null}}};hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";async function Hd(n,e){return on(n,"POST","/v1/accounts:signUp",Ce(n,e))}var sn=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){let s=await rn._fromIdTokenResponse(e,r,i),a=hd(r);return new n({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let i=hd(r);return new n({user:e,providerId:i,_tokenResponse:r,operationType:t})}};function hd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function uc(n){var e;if(We(n.app))return Promise.reject(_t(n));let t=vt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new sn({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await Hd(t,{returnSecureToken:!0}),i=await sn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}var Qa=class n extends Ze{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new n(e,t,r,i)}};function Wd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(n,s,e,r):s})}async function fy(n,e,t=!1){let r=await ii(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sn._forOperation(n,"link",r)}async function py(n,e,t=!1){let{auth:r}=n;if(We(r.app))return Promise.reject(_t(r));let i="reauthenticate";try{let s=await ii(n,Wd(r,i,e,n),t);q(s.idToken,r,"internal-error");let a=ac(s.idToken);q(a,r,"internal-error");let{sub:u}=a;return q(n.uid===u,r,"user-mismatch"),sn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&lt(r,"user-mismatch"),s}}async function Kd(n,e,t=!1){if(We(n.app))return Promise.reject(_t(n));let r="signIn",i=await Wd(n,r,e),s=await sn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Qd(n,e){return Kd(vt(n),e)}async function Jd(n){let e=vt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lc(n,e,t){if(We(n.app))return Promise.reject(_t(n));let r=vt(n),a=await rr(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hd,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Jd(n),l}),u=await sn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function hc(n,e,t){return We(n.app)?Promise.reject(_t(n)):Qd(pe(n),Rn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jd(n),r})}function Yd(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function Xd(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function dc(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function fc(n){return pe(n).signOut()}function dd(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:start",Ce(n,e))}function my(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(n,e))}function gy(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:start",Ce(n,e))}function _y(n,e){return ze(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ce(n,e))}var xs="__sak";var Vs=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xs,"1"),this.storage.removeItem(xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var yy=1e3,vy=10,Ls=class extends Vs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ud(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}let r=e.key;t?this.detachListener():this.stopPolling();let i=()=>{let a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);$_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vy):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Ls.type="LOCAL";var Zd=Ls;var wy=1e3;function La(n){var e,t;let r=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${r}=([^;]+)`);return(t=(e=document.cookie.match(i))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function Ma(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var Ja=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Ma(e);if(window.cookieStore){let r=await window.cookieStore.get(t);return r?.value}return La(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=Ma(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let r=Ma(e);if(window.cookieStore){let u=d=>{let p=d.changed.find(w=>w.name===r);p&&t(p.value),d.deleted.find(w=>w.name===r)&&t(null)},l=()=>window.cookieStore.removeEventListener("change",u);return this.listenerUnsubscribes.set(t,l),window.cookieStore.addEventListener("change",u)}let i=La(r),s=setInterval(()=>{let u=La(r);u!==i&&(t(u),i=u)},wy),a=()=>clearInterval(s);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}};Ja.type="COOKIE";var Ms=class extends Vs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Ms.type="SESSION";var pc=Ms;function Iy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Fs=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;let r=new n(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let u=Array.from(a).map(async d=>d(t.origin,s)),l=await Iy(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Fs.receivers=[];function mc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}var Ya=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,l)=>{let d=mc("",20);i.port1.start();let p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){let w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(w.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function yt(){return window}function Ey(n){yt().location.href=n}function ef(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function Ty(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function by(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ay(){return ef()?self:null}var tf="firebaseLocalStorageDb",Sy=1,Us="firebaseLocalStorage",nf="fbase_key",Cn=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Qs(n,e){return n.transaction([Us],e?"readwrite":"readonly").objectStore(Us)}function Ry(){let n=indexedDB.deleteDatabase(tf);return new Cn(n).toPromise()}function Xa(){let n=indexedDB.open(tf,Sy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let r=n.result;try{r.createObjectStore(Us,{keyPath:nf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{let r=n.result;r.objectStoreNames.contains(Us)?e(r):(r.close(),await Ry(),e(await Xa()))})})}async function fd(n,e,t){let r=Qs(n,!0).put({[nf]:e,value:t});return new Cn(r).toPromise()}async function Py(n,e){let t=Qs(n,!1).get(e),r=await new Cn(t).toPromise();return r===void 0?null:r.value}function pd(n,e){let t=Qs(n,!0).delete(e);return new Cn(t).toPromise()}var Cy=800,ky=3,Bs=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xa(),this.db)}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(t++>ky)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fs._getInstance(Ay()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ty(),!this.activeServiceWorker)return;this.sender=new Ya(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||by()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Xa();return await fd(e,xs,"1"),await pd(e,xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(r=>Py(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>pd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Qs(i,!1).getAll();return new Cn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};Bs.type="LOCAL";var rf=Bs;function md(n,e){return ze(n,"POST","/v2/accounts/mfaSignIn:start",Ce(n,e))}function Dy(n,e){return ze(n,"POST","/v2/accounts/mfaSignIn:finalize",Ce(n,e))}function Ny(n,e){return ze(n,"POST","/v2/accounts/mfaSignIn:finalize",Ce(n,e))}var uE=qd("rcb"),lE=new bn(3e4,6e4);var ws="recaptcha";async function Oy(n,e,t){var r;if(!n._getRecaptchaConfig())try{await X_(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){let s=i.session;if("phoneNumber"in i){q(s.type==="enroll",n,"internal-error");let a={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await rr(n,a,"mfaSmsEnrollment",async(p,y)=>{if(y.phoneEnrollmentInfo.captchaResponse===ri){q(t?.type===ws,p,"argument-error");let w=await Fa(p,y,t);return dd(p,w)}return dd(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneSessionInfo.sessionInfo}else{q(s.type==="signin",n,"internal-error");let a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;q(a,n,"missing-multi-factor-info");let u={mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await rr(n,u,"mfaSmsSignIn",async(y,w)=>{if(w.phoneSignInInfo.captchaResponse===ri){q(t?.type===ws,y,"argument-error");let k=await Fa(y,w,t);return md(y,k)}return md(y,w)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await rr(n,s,"sendVerificationCode",async(d,p)=>{if(p.captchaResponse===ri){q(t?.type===ws,d,"argument-error");let y=await Fa(d,p,t);return ld(d,y)}return ld(d,p)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).sessionInfo}}finally{t?._reset()}}async function Fa(n,e,t){q(t.type===ws,n,"argument-error");let r=await t.verify();q(typeof r=="string",n,"argument-error");let i=Object.assign({},e);if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,a=i.phoneEnrollmentInfo.captchaResponse,u=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:a,clientType:u,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,a=i.phoneSignInInfo.clientType,u=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:a,recaptchaVersion:u}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var di=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=vt(e)}verifyPhoneNumber(e,t){return Oy(this.auth,e,pe(t))}static credential(e,t){return ai._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?ai._fromTokenResponse(t,r):null}};di.PROVIDER_ID="phone";di.PHONE_SIGN_IN_METHOD="phone";function xy(n,e){return e?Nt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var fi=class extends An{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function Vy(n){return Kd(n.auth,new fi(n),n.bypassAuthState)}function Ly(n){let{auth:e,user:t}=n;return q(t,e,"internal-error"),py(t,new fi(n),n.bypassAuthState)}async function My(n){let{auth:e,user:t}=n;return q(t,e,"internal-error"),fy(t,new fi(n),n.bypassAuthState)}var js=class{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}let l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vy;case"linkViaPopup":case"linkViaRedirect":return My;case"reauthViaPopup":case"reauthViaRedirect":return Ly;default:lt(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Fy=new bn(2e3,1e4);var Za=class n extends js{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");let e=mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fy.get())};e()}};Za.currentPopupAction=null;var Uy="pendingRedirect",Is=new Map,ec=class extends js{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{let r=await By(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function By(n,e){let t=zy(e),r=qy(n);if(!await r._isAvailable())return!1;let i=await r._get(t)==="true";return await r._remove(t),i}function jy(n,e){Is.set(n._key(),e)}function qy(n){return Nt(n._redirectPersistence)}function zy(n){return vs(Uy,n.config.apiKey,n.name)}async function Gy(n,e,t=!1){if(We(n.app))return Promise.reject(_t(n));let r=vt(n),i=xy(r,e),a=await new ec(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}var $y=10*60*1e3,tc=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!sf(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(gt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$y&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}};function gd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Hy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sf(n);default:return!1}}async function Wy(n,e={}){return ze(n,"GET","/v1/projects",e)}var Ky=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qy=/^https?/;async function Jy(n){if(n.config.emulator)return;let{authorizedDomains:e}=await Wy(n);for(let t of e)try{if(Yy(t))return}catch{}lt(n,"unauthorized-domain")}function Yy(n){let e=Ba(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Qy.test(t))return!1;if(Ky.test(n))return r===n;let i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Xy=new bn(3e4,6e4);function _d(){let n=yt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zy(n){return new Promise((e,t)=>{var r,i,s;function a(){_d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_d(),t(gt(n,"network-request-failed"))},timeout:Xy.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yt().gapi)===null||s===void 0)&&s.load)a();else{let u=qd("iframefcb");return yt()[u]=()=>{gapi.load?a():t(gt(n,"network-request-failed"))},jd(`${J_()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Es=null,e})}var Es=null;function ev(n){return Es=Es||Zy(n),Es}var tv=new bn(5e3,15e3),nv="__/auth/iframe",rv="emulator/auth/iframe",iv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ov(n){let e=n.config;q(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?oc(e,rv):`https://${n.config.authDomain}/${nv}`,r={apiKey:e.apiKey,appName:n.name,v:tn},i=sv.get(n.config.apiHost);i&&(r.eid=i);let s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${er(r).slice(1)}`}async function av(n){let e=await ev(n),t=yt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:ov(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let a=gt(n,"network-request-failed"),u=yt().setTimeout(()=>{s(a)},tv.get());function l(){yt().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(a)})}))}var cv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uv=500,lv=600,hv="_blank",dv="http://localhost",qs=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function fv(n,e,t,r=uv,i=lv){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString(),u="",l=Object.assign(Object.assign({},cv),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Oe().toLowerCase();t&&(u=xd(d)?hv:t),Nd(d)&&(e=e||dv,l.scrollbars="yes");let p=Object.entries(l).reduce((w,[k,O])=>`${w}${k}=${O},`,"");if(G_(d)&&u!=="_self")return pv(e||"",u),new qs(null);let y=window.open(e||"",u,p);q(y,n,"popup-blocked");try{y.focus()}catch{}return new qs(y)}function pv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}var mv="__/auth/handler",gv="emulator/auth/handler",_v=encodeURIComponent("fac");async function yd(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:tn,eventId:i};if(e instanceof Os){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",qh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[p,y]of Object.entries(s||{}))a[p]=y}if(e instanceof Pn){let p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);let u=a;for(let p of Object.keys(u))u[p]===void 0&&delete u[p];let l=await n._getAppCheckToken(),d=l?`#${_v}=${encodeURIComponent(l)}`:"";return`${yv(n)}?${er(u).slice(1)}${d}`}function yv({config:n}){return n.emulator?oc(n,gv):`https://${n.authDomain}/${mv}`}var Ua="webStorageSupport",nc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pc,this._completeRedirectFn=Gy,this._overrideRedirectResult=jy}async _openPopup(e,t,r,i){var s;Ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let a=await yd(e,t,r,Ba(),i);return fv(e,a,mc())}async _openRedirect(e,t,r,i){await this._originValidation(e);let s=await yd(e,t,r,Ba(),i);return Ey(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ot(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await av(e),r=new tc(e);return t.register("authEvent",i=>(q(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ua,{type:Ua},i=>{var s;let a=(s=i?.[0])===null||s===void 0?void 0:s[Ua];a!==void 0&&t(!!a),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ud()||Od()||cc()}},of=nc,zs=class{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return mt("unexpected MultiFactorSessionType")}}},rc=class n extends zs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,r){return my(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Dy(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Gs=class{constructor(){}static assertion(e){return rc._fromCredential(e)}};Gs.FACTOR_ID="phone";var $s=class{static assertionForEnrollment(e,t){return Hs._fromSecret(e,t)}static assertionForSignIn(e,t){return Hs._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let r=e;q(typeof((t=r.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let i=await gy(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return Ws._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};$s.FACTOR_ID="totp";var Hs=class n extends zs{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,r){return q(typeof this.secret<"u",e,"argument-error"),_y(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){q(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return Ny(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Ws=class n{constructor(e,t,r,i,s,a,u){this.sessionInfo=a,this.auth=u,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(_s(e)||_s(t))&&(i=!0),i&&(_s(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),_s(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function _s(n){return typeof n>"u"||n?.length===0}var vd="@firebase/auth",wd="1.10.8";var ic=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function vv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wv(n){en(new it("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bd(n)},d=new Ha(r,i,s,l);return Z_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),en(new it("auth-internal",e=>{let t=vt(e.getProvider("auth").getImmediate());return(r=>new ic(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(vd,wd,vv(n)),ut(vd,wd,"esm2017")}var Iv=5*60,Ev=ya("authIdTokenMaxAge")||Iv,Id=null,Tv=n=>async e=>{let t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ev)return;let i=t?.token;Id!==i&&(Id=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gc(n=ms()){let e=Xr(n,"auth");if(e.isInitialized())return e.getImmediate();let t=zd(n,{popupRedirectResolver:of,persistence:[rf,Zd,pc]}),r=ya("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let a=Tv(s.toString());Xd(t,a,()=>a(t.currentUser)),Yd(t,u=>a(u))}}let i=ga("auth");return i&&Gd(t,`http://${i}`),t}function bv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}K_({loadJS(n){return new Promise((e,t)=>{let r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{let s=gt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",bv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wv("Browser");var af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cf={};var xt,_c;(function(){var n;function e(T,g){function v(){}v.prototype=g.prototype,T.D=g.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,b,R){for(var m=Array(arguments.length-2),He=2;He<arguments.length;He++)m[He-2]=arguments[He];return g.prototype[b].apply(E,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)E[b]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(b=0;16>b;++b)E[b]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=T.g[0],v=T.g[1],b=T.g[2];var R=T.g[3],m=g+(R^v&(b^R))+E[0]+3614090360&4294967295;g=v+(m<<7&4294967295|m>>>25),m=R+(b^g&(v^b))+E[1]+3905402710&4294967295,R=g+(m<<12&4294967295|m>>>20),m=b+(v^R&(g^v))+E[2]+606105819&4294967295,b=R+(m<<17&4294967295|m>>>15),m=v+(g^b&(R^g))+E[3]+3250441966&4294967295,v=b+(m<<22&4294967295|m>>>10),m=g+(R^v&(b^R))+E[4]+4118548399&4294967295,g=v+(m<<7&4294967295|m>>>25),m=R+(b^g&(v^b))+E[5]+1200080426&4294967295,R=g+(m<<12&4294967295|m>>>20),m=b+(v^R&(g^v))+E[6]+2821735955&4294967295,b=R+(m<<17&4294967295|m>>>15),m=v+(g^b&(R^g))+E[7]+4249261313&4294967295,v=b+(m<<22&4294967295|m>>>10),m=g+(R^v&(b^R))+E[8]+1770035416&4294967295,g=v+(m<<7&4294967295|m>>>25),m=R+(b^g&(v^b))+E[9]+2336552879&4294967295,R=g+(m<<12&4294967295|m>>>20),m=b+(v^R&(g^v))+E[10]+4294925233&4294967295,b=R+(m<<17&4294967295|m>>>15),m=v+(g^b&(R^g))+E[11]+2304563134&4294967295,v=b+(m<<22&4294967295|m>>>10),m=g+(R^v&(b^R))+E[12]+1804603682&4294967295,g=v+(m<<7&4294967295|m>>>25),m=R+(b^g&(v^b))+E[13]+4254626195&4294967295,R=g+(m<<12&4294967295|m>>>20),m=b+(v^R&(g^v))+E[14]+2792965006&4294967295,b=R+(m<<17&4294967295|m>>>15),m=v+(g^b&(R^g))+E[15]+1236535329&4294967295,v=b+(m<<22&4294967295|m>>>10),m=g+(b^R&(v^b))+E[1]+4129170786&4294967295,g=v+(m<<5&4294967295|m>>>27),m=R+(v^b&(g^v))+E[6]+3225465664&4294967295,R=g+(m<<9&4294967295|m>>>23),m=b+(g^v&(R^g))+E[11]+643717713&4294967295,b=R+(m<<14&4294967295|m>>>18),m=v+(R^g&(b^R))+E[0]+3921069994&4294967295,v=b+(m<<20&4294967295|m>>>12),m=g+(b^R&(v^b))+E[5]+3593408605&4294967295,g=v+(m<<5&4294967295|m>>>27),m=R+(v^b&(g^v))+E[10]+38016083&4294967295,R=g+(m<<9&4294967295|m>>>23),m=b+(g^v&(R^g))+E[15]+3634488961&4294967295,b=R+(m<<14&4294967295|m>>>18),m=v+(R^g&(b^R))+E[4]+3889429448&4294967295,v=b+(m<<20&4294967295|m>>>12),m=g+(b^R&(v^b))+E[9]+568446438&4294967295,g=v+(m<<5&4294967295|m>>>27),m=R+(v^b&(g^v))+E[14]+3275163606&4294967295,R=g+(m<<9&4294967295|m>>>23),m=b+(g^v&(R^g))+E[3]+4107603335&4294967295,b=R+(m<<14&4294967295|m>>>18),m=v+(R^g&(b^R))+E[8]+1163531501&4294967295,v=b+(m<<20&4294967295|m>>>12),m=g+(b^R&(v^b))+E[13]+2850285829&4294967295,g=v+(m<<5&4294967295|m>>>27),m=R+(v^b&(g^v))+E[2]+4243563512&4294967295,R=g+(m<<9&4294967295|m>>>23),m=b+(g^v&(R^g))+E[7]+1735328473&4294967295,b=R+(m<<14&4294967295|m>>>18),m=v+(R^g&(b^R))+E[12]+2368359562&4294967295,v=b+(m<<20&4294967295|m>>>12),m=g+(v^b^R)+E[5]+4294588738&4294967295,g=v+(m<<4&4294967295|m>>>28),m=R+(g^v^b)+E[8]+2272392833&4294967295,R=g+(m<<11&4294967295|m>>>21),m=b+(R^g^v)+E[11]+1839030562&4294967295,b=R+(m<<16&4294967295|m>>>16),m=v+(b^R^g)+E[14]+4259657740&4294967295,v=b+(m<<23&4294967295|m>>>9),m=g+(v^b^R)+E[1]+2763975236&4294967295,g=v+(m<<4&4294967295|m>>>28),m=R+(g^v^b)+E[4]+1272893353&4294967295,R=g+(m<<11&4294967295|m>>>21),m=b+(R^g^v)+E[7]+4139469664&4294967295,b=R+(m<<16&4294967295|m>>>16),m=v+(b^R^g)+E[10]+3200236656&4294967295,v=b+(m<<23&4294967295|m>>>9),m=g+(v^b^R)+E[13]+681279174&4294967295,g=v+(m<<4&4294967295|m>>>28),m=R+(g^v^b)+E[0]+3936430074&4294967295,R=g+(m<<11&4294967295|m>>>21),m=b+(R^g^v)+E[3]+3572445317&4294967295,b=R+(m<<16&4294967295|m>>>16),m=v+(b^R^g)+E[6]+76029189&4294967295,v=b+(m<<23&4294967295|m>>>9),m=g+(v^b^R)+E[9]+3654602809&4294967295,g=v+(m<<4&4294967295|m>>>28),m=R+(g^v^b)+E[12]+3873151461&4294967295,R=g+(m<<11&4294967295|m>>>21),m=b+(R^g^v)+E[15]+530742520&4294967295,b=R+(m<<16&4294967295|m>>>16),m=v+(b^R^g)+E[2]+3299628645&4294967295,v=b+(m<<23&4294967295|m>>>9),m=g+(b^(v|~R))+E[0]+4096336452&4294967295,g=v+(m<<6&4294967295|m>>>26),m=R+(v^(g|~b))+E[7]+1126891415&4294967295,R=g+(m<<10&4294967295|m>>>22),m=b+(g^(R|~v))+E[14]+2878612391&4294967295,b=R+(m<<15&4294967295|m>>>17),m=v+(R^(b|~g))+E[5]+4237533241&4294967295,v=b+(m<<21&4294967295|m>>>11),m=g+(b^(v|~R))+E[12]+1700485571&4294967295,g=v+(m<<6&4294967295|m>>>26),m=R+(v^(g|~b))+E[3]+2399980690&4294967295,R=g+(m<<10&4294967295|m>>>22),m=b+(g^(R|~v))+E[10]+4293915773&4294967295,b=R+(m<<15&4294967295|m>>>17),m=v+(R^(b|~g))+E[1]+2240044497&4294967295,v=b+(m<<21&4294967295|m>>>11),m=g+(b^(v|~R))+E[8]+1873313359&4294967295,g=v+(m<<6&4294967295|m>>>26),m=R+(v^(g|~b))+E[15]+4264355552&4294967295,R=g+(m<<10&4294967295|m>>>22),m=b+(g^(R|~v))+E[6]+2734768916&4294967295,b=R+(m<<15&4294967295|m>>>17),m=v+(R^(b|~g))+E[13]+1309151649&4294967295,v=b+(m<<21&4294967295|m>>>11),m=g+(b^(v|~R))+E[4]+4149444226&4294967295,g=v+(m<<6&4294967295|m>>>26),m=R+(v^(g|~b))+E[11]+3174756917&4294967295,R=g+(m<<10&4294967295|m>>>22),m=b+(g^(R|~v))+E[2]+718787259&4294967295,b=R+(m<<15&4294967295|m>>>17),m=v+(R^(b|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(b+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var v=g-this.blockSize,E=this.B,b=this.h,R=0;R<g;){if(b==0)for(;R<=v;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<g;)if(E[b++]=T.charCodeAt(R++),b==this.blockSize){i(this,E),b=0;break}}else for(;R<g;)if(E[b++]=T[R++],b==this.blockSize){i(this,E),b=0;break}}this.h=b,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var v=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=v&255,v/=256;for(this.u(T),T=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)T[v++]=this.g[g]>>>E&255;return T};function s(T,g){var v=u;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=g(T)}function a(T,g){this.h=g;for(var v=[],E=!0,b=T.length-1;0<=b;b--){var R=T[b]|0;E&&R==g||(v[b]=R,E=!1)}this.g=v}var u={};function l(T){return-128<=T&&128>T?s(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return x(d(-T));for(var g=[],v=1,E=0;T>=v;E++)g[E]=T/v|0,v*=4294967296;return new a(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return x(p(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),E=y,b=0;b<T.length;b+=8){var R=Math.min(8,T.length-b),m=parseInt(T.substring(b,b+R),g);8>R?(R=d(Math.pow(g,R)),E=E.j(R).add(d(m))):(E=E.j(v),E=E.add(d(m)))}return E}var y=l(0),w=l(1),k=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-x(this).m();for(var T=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(O(this))return"0";if(M(this))return"-"+x(this).toString(T);for(var g=d(Math.pow(T,6)),v=this,E="";;){var b=ae(v,g).g;v=X(v,b.j(g));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=b,O(v))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function O(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function M(T){return T.h==-1}n.l=function(T){return T=X(this,T),M(T)?-1:O(T)?0:1};function x(T){for(var g=T.g.length,v=[],E=0;E<g;E++)v[E]=~T.g[E];return new a(v,~T.h).add(w)}n.abs=function(){return M(this)?x(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0,b=0;b<=g;b++){var R=E+(this.i(b)&65535)+(T.i(b)&65535),m=(R>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);E=m>>>16,R&=65535,m&=65535,v[b]=m<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function X(T,g){return T.add(x(g))}n.j=function(T){if(O(this)||O(T))return y;if(M(this))return M(T)?x(this).j(x(T)):x(x(this).j(T));if(M(T))return x(this.j(x(T)));if(0>this.l(k)&&0>T.l(k))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<T.g.length;b++){var R=this.i(E)>>>16,m=this.i(E)&65535,He=T.i(b)>>>16,gn=T.i(b)&65535;v[2*E+2*b]+=m*gn,K(v,2*E+2*b),v[2*E+2*b+1]+=R*gn,K(v,2*E+2*b+1),v[2*E+2*b+1]+=m*He,K(v,2*E+2*b+1),v[2*E+2*b+2]+=R*He,K(v,2*E+2*b+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function K(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function Q(T,g){this.g=T,this.h=g}function ae(T,g){if(O(g))throw Error("division by zero");if(O(T))return new Q(y,y);if(M(T))return g=ae(x(T),g),new Q(x(g.g),x(g.h));if(M(g))return g=ae(T,x(g)),new Q(x(g.g),g.h);if(30<T.g.length){if(M(T)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var v=w,E=g;0>=E.l(T);)v=be(v),E=be(E);var b=re(v,1),R=re(E,1);for(E=re(E,2),v=re(v,2);!O(E);){var m=R.add(E);0>=m.l(T)&&(b=b.add(v),R=m),E=re(E,1),v=re(v,1)}return g=X(T,b.j(g)),new Q(b,g)}for(b=y;0<=T.l(g);){for(v=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(v),m=R.j(g);M(m)||0<m.l(T);)v-=E,R=d(v),m=R.j(g);O(R)&&(R=w),b=b.add(R),T=X(T,m)}return new Q(b,T)}n.A=function(T){return ae(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&T.i(E);return new a(v,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|T.i(E);return new a(v,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^T.i(E);return new a(v,this.h^T.h)};function be(T){for(var g=T.g.length+1,v=[],E=0;E<g;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(v,T.h)}function re(T,g){var v=g>>5;g%=32;for(var E=T.g.length-v,b=[],R=0;R<E;R++)b[R]=0<g?T.i(R+v)>>>g|T.i(R+v+1)<<32-g:T.i(R+v);return new a(b,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_c=cf.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,xt=cf.Integer=a}).apply(typeof af<"u"?af:typeof self<"u"?self:typeof window<"u"?window:{});var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vt={};var yc,Av,sr,vc,pi,Ys,wc,Ic,Ec;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var S=o[f];if(!(S in h))break e;h=h[S]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,S={next:function(){if(!f&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,f),o.apply(c,S)}}return function(){return o.apply(c,arguments)}}function w(o,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,w.apply(null,arguments)}function k(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function O(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,S,P){for(var L=Array(arguments.length-2),le=2;le<arguments.length;le++)L[le-2]=arguments[le];return c.prototype[S].apply(f,L)}}function M(o){let c=o.length;if(0<c){let h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function x(o,c){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(l(f)){let S=o.length||0,P=f.length||0;o.length=S+P;for(let L=0;L<P;L++)o[S+L]=f[L]}else o.push(f)}}class X{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function K(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function ae(o){return ae[" "](o),o}ae[" "]=function(){};var be=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function re(o,c,h){for(let f in o)c.call(h,o[f],f,o)}function T(o,c){for(let h in o)c.call(void 0,o[h],h,o)}function g(o){let c={};for(let h in o)c[h]=o[h];return c}let v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(h in f)o[h]=f[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function b(o){var c=1;o=o.split(":");let h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function m(){var o=xr;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class He{constructor(){this.h=this.g=null}add(c,h){let f=gn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var gn=new X(()=>new Fi,o=>o.reset());class Fi{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let jt,_n=!1,xr=new He,Ui=()=>{let o=u.Promise.resolve(void 0);jt=()=>{o.then(Bi)}};var Bi=()=>{for(var o;o=m();){try{o.h.call(o.g)}catch(h){R(h)}var c=gn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}_n=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var ji=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function qt(o,c){if(Ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(be){e:{try{ae(c.nodeName);var S=!0;break e}catch{}S=!1}S||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:qi[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qt.aa.h.call(this)}}O(qt,Ae);var qi={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),zi=0;function Zo(o,c,h,f,S){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=S,this.key=++zi,this.da=this.fa=!1}function De(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ue(o){this.src=o,this.g={},this.h=0}Ue.prototype.add=function(o,c,h,f,S){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var L=Gt(o,c,f,S);return-1<L?(c=o[L],h||(c.fa=!1)):(c=new Zo(c,this.src,P,!!f,S),c.fa=h,o.push(c)),c};function Je(o,c){var h=c.type;if(h in o.g){var f=o.g[h],S=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=S)&&Array.prototype.splice.call(f,S,1),P&&(De(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Gt(o,c,h,f){for(var S=0;S<o.length;++S){var P=o[S];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==f)return S}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),Gn={};function Gi(o,c,h,f,S){if(f&&f.once)return Lr(o,c,h,f,S);if(Array.isArray(c)){for(var P=0;P<c.length;P++)Gi(o,c[P],h,f,S);return null}return h=Wn(h),o&&o[zt]?o.K(c,h,d(f)?!!f.capture:!!f,S):$n(o,c,h,!1,f,S)}function $n(o,c,h,f,S,P){if(!c)throw Error("Invalid event type");var L=d(S)?!!S.capture:!!S,le=Mr(o);if(le||(o[Vr]=le=new Ue(o)),h=le.add(c,h,f,L,P),h.proxy)return h;if(f=$i(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)ji||(S=L),S===void 0&&(S=!1),o.addEventListener(c.toString(),f,S);else if(o.attachEvent)o.attachEvent(Hi(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $i(){function o(h){return c.call(o.src,o.listener,h)}let c=ea;return o}function Lr(o,c,h,f,S){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Lr(o,c[P],h,f,S);return null}return h=Wn(h),o&&o[zt]?o.L(c,h,d(f)?!!f.capture:!!f,S):$n(o,c,h,!0,f,S)}function Hn(o,c,h,f,S){if(Array.isArray(c))for(var P=0;P<c.length;P++)Hn(o,c[P],h,f,S);else f=d(f)?!!f.capture:!!f,h=Wn(h),o&&o[zt]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=Gt(P,h,f,S),-1<h&&(De(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Mr(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Gt(c,h,f,S)),(h=-1<o?c[o]:null)&&yn(h))}function yn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[zt])Je(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Hi(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Mr(c))?(Je(h,o),h.h==0&&(h.src=null,c[Vr]=null)):De(o)}}}function Hi(o){return o in Gn?Gn[o]:Gn[o]="on"+o}function ea(o,c){if(o.da)o=!0;else{c=new qt(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&yn(o),o=h.call(f,c)}return o}function Mr(o){return o=o[Vr],o instanceof Ue?o:null}var Fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wn(o){return typeof o=="function"?o:(o[Fr]||(o[Fr]=function(c){return o.handleEvent(c)}),o[Fr])}function Ne(){at.call(this),this.i=new Ue(this),this.M=this,this.F=null}O(Ne,at),Ne.prototype[zt]=!0,Ne.prototype.removeEventListener=function(o,c,h,f){Hn(this,o,c,h,f)};function Me(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new Ae(c,o);else if(c instanceof Ae)c.target=c.target||o;else{var S=c;c=new Ae(f,o),E(c,S)}if(S=!0,h)for(var P=h.length-1;0<=P;P--){var L=c.g=h[P];S=Kn(L,f,!0,c)&&S}if(L=c.g=o,S=Kn(L,f,!0,c)&&S,S=Kn(L,f,!1,c)&&S,h)for(P=0;P<h.length;P++)L=c.g=h[P],S=Kn(L,f,!1,c)&&S}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)De(h[f]);delete o.g[c],o.h--}}this.F=null},Ne.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ne.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Kn(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var S=!0,P=0;P<c.length;++P){var L=c[P];if(L&&!L.da&&L.capture==h){var le=L.listener,Fe=L.ha||L.src;L.fa&&Je(o.i,L),S=le.call(Fe,f)!==!1&&S}}return S&&!f.defaultPrevented}function Wi(o,c,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Se(o){o.g=Wi(()=>{o.g=null,o.i&&(o.i=!1,Se(o))},o.l);let c=o.h;o.h=null,o.m.apply(null,c)}class _ extends at{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Se(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function I(o){at.call(this),this.h=o,this.g={}}O(I,at);var A=[];function C(o){re(o.g,function(c,h){this.g.hasOwnProperty(h)&&yn(c)},o),o.g={}}I.prototype.N=function(){I.aa.N.call(this),C(this)},I.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var j=u.JSON.stringify,z=u.JSON.parse,G=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function F(){}F.prototype.h=null;function ie(o){return o.h||(o.h=o.i())}function ce(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rt(){Ae.call(this,"d")}O(Rt,Ae);function Qn(){Ae.call(this,"c")}O(Qn,Ae);var $={},Re=null;function Pe(){return Re=Re||new Ne}$.La="serverreachability";function vn(o){Ae.call(this,$.La,o)}O(vn,Ae);function $t(o){let c=Pe();Me(c,new vn(c))}$.STAT_EVENT="statevent";function Ye(o,c){Ae.call(this,$.STAT_EVENT,o),this.stat=c}O(Ye,Ae);function ye(o){let c=Pe();Me(c,new Ye(c,o))}$.Ma="timingevent";function Ht(o,c){Ae.call(this,$.Ma,o),this.size=c}O(Ht,Ae);function Wt(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Ur(){this.g=!0}Ur.prototype.xa=function(){this.g=!1};function $m(o,c,h,f,S,P){o.info(function(){if(o.g)if(P)for(var L="",le=P.split("&"),Fe=0;Fe<le.length;Fe++){var oe=le[Fe].split("=");if(1<oe.length){var je=oe[0];oe=oe[1];var qe=je.split("_");L=2<=qe.length&&qe[1]=="type"?L+(je+"="+oe+"&"):L+(je+"=redacted&")}}else L=null;else L=P;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+c+`
`+h+`
`+L})}function Hm(o,c,h,f,S,P,L){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+c+`
`+h+`
`+P+" "+L})}function Jn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Km(o,h)+(f?" "+f:"")})}function Wm(o,c){o.info(function(){return"TIMEOUT: "+c})}Ur.prototype.info=function(){};function Km(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var S=f[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var L=1;L<S.length;L++)S[L]=""}}}}return j(h)}catch{return c}}var Ki={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ta;function Qi(){}O(Qi,F),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},ta=new Qi;function Kt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new I(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zl}function zl(){this.i=null,this.g="",this.h=!1}var Gl={},na={};function ra(o,c,h){o.L=1,o.v=Zi(Pt(c)),o.m=h,o.P=!0,$l(o,null)}function $l(o,c){o.F=Date.now(),Ji(o),o.A=Pt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),sh(h.i,"t",f),o.C=0,h=o.j.J,o.h=new zl,o.g=Th(o.j,h?c:null,!o.m),0<o.O&&(o.M=new _(w(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(A[0]=S.toString()),S=A);for(var P=0;P<S.length;P++){var L=Gi(h,S[P],f||c.handleEvent,!1,c.h||c);if(!L)break;c.g[L.key]=L}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),$t(),$m(o.i,o.u,o.A,o.l,o.R,o.m)}Kt.prototype.ca=function(o){o=o.target;let c=this.M;c&&Ct(o)==3?c.j():this.Y(o)},Kt.prototype.Y=function(o){try{if(o==this.g)e:{let qe=Ct(this.g);var c=this.g.Ba();let Zn=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||dh(this.g)))){this.J||qe!=4||c==7||(c==8||0>=Zn?$t(3):$t(2)),ia(this);var h=this.g.Z();this.X=h;t:if(Hl(this)){var f=dh(this.g);o="";var S=f.length,P=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Br(this);var L="";break t}this.h.i=new u.TextDecoder}for(c=0;c<S;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(P&&c==S-1)});f.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,Hm(this.i,this.u,this.A,this.l,this.R,qe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Fe=this.g;if((le=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(le)){var oe=le;break t}}oe=null}if(h=oe)Jn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sa(this,h);else{this.o=!1,this.s=3,ye(12),wn(this),Br(this);break e}}if(this.P){h=!0;let ct;for(;!this.J&&this.C<L.length;)if(ct=Qm(this,L),ct==na){qe==4&&(this.s=4,ye(14),h=!1),Jn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Gl){this.s=4,ye(15),Jn(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else Jn(this.i,this.l,ct,null),sa(this,ct);if(Hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||L.length!=0||this.h.h||(this.s=1,ye(16),h=!1),this.o=this.o&&h,!h)Jn(this.i,this.l,L,"[Invalid Chunked Response]"),wn(this),Br(this);else if(0<L.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),ha(je),je.M=!0,ye(11))}}else Jn(this.i,this.l,L,null),sa(this,L);qe==4&&wn(this),this.o&&!this.J&&(qe==4?vh(this.j,this):(this.o=!1,Ji(this)))}else dg(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,ye(12)):(this.s=0,ye(13)),wn(this),Br(this)}}}catch{}finally{}};function Hl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Qm(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?na:(h=Number(c.substring(h,f)),isNaN(h)?Gl:(f+=1,f+h>c.length?na:(c=c.slice(f,f+h),o.C=f+h,c)))}Kt.prototype.cancel=function(){this.J=!0,wn(this)};function Ji(o){o.S=Date.now()+o.I,Wl(o,o.I)}function Wl(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wt(w(o.ba,o),c)}function ia(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Kt.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(Wm(this.i,this.A),this.L!=2&&($t(),ye(17)),wn(this),this.s=2,Br(this)):Wl(this,this.S-o)};function Br(o){o.j.G==0||o.J||vh(o.j,o)}function wn(o){ia(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,C(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function sa(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||oa(h.h,o))){if(!o.K&&oa(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)is(h),ns(h);else break e;la(h),ye(18)}}else h.za=S[1],0<h.za-h.T&&37500>S[2]&&h.F&&h.v==0&&!h.C&&(h.C=Wt(w(h.Za,h),6e3));if(1>=Jl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else En(h,11)}else if((o.K||h.g==o)&&is(h),!K(c))for(S=h.Da.g.parse(c),c=0;c<S.length;c++){let oe=S[c];if(h.T=oe[0],oe=oe[1],h.G==2)if(oe[0]=="c"){h.K=oe[1],h.ia=oe[2];let je=oe[3];je!=null&&(h.la=je,h.j.info("VER="+h.la));let qe=oe[4];qe!=null&&(h.Aa=qe,h.j.info("SVER="+h.Aa));let Zn=oe[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(f=1.5*Zn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;let ct=o.g;if(ct){let os=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(os){var P=f.h;P.g||os.indexOf("spdy")==-1&&os.indexOf("quic")==-1&&os.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(aa(P,P.h),P.h=null))}if(f.D){let da=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;da&&(f.ya=da,he(f.I,f.D,da))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var L=o;if(f.qa=Eh(f,f.J?f.ia:null,f.W),L.K){Yl(f.h,L);var le=L,Fe=f.L;Fe&&(le.I=Fe),le.B&&(ia(le),Ji(le)),f.g=L}else _h(f);0<h.i.length&&rs(h)}else oe[0]!="stop"&&oe[0]!="close"||En(h,7);else h.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?En(h,7):ua(h):oe[0]!="noop"&&h.l&&h.l.ta(oe),h.v=0)}}$t(4)}catch{}}var Jm=class{constructor(o,c){this.g=o,this.map=c}};function Kl(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ql(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Jl(o){return o.h?1:o.g?o.g.size:0}function oa(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function aa(o,c){o.g?o.g.add(c):o.h=c}function Yl(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Kl.prototype.cancel=function(){if(this.i=Xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Xl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(let h of o.g.values())c=c.concat(h.D);return c}return M(o.i)}function Ym(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Xm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(let f in o)c[h++]=f;return c}}}function Zl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Xm(o),f=Ym(o),S=f.length,P=0;P<S;P++)c.call(void 0,f[P],h&&h[P],o)}var eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zm(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),S=null;if(0<=f){var P=o[h].substring(0,f);S=o[h].substring(f+1)}else P=o[h];c(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function In(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof In){this.h=o.h,Yi(this,o.j),this.o=o.o,this.g=o.g,Xi(this,o.s),this.l=o.l;var c=o.i,h=new zr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),th(this,h),this.m=o.m}else o&&(c=String(o).match(eh))?(this.h=!1,Yi(this,c[1]||"",!0),this.o=jr(c[2]||""),this.g=jr(c[3]||"",!0),Xi(this,c[4]),this.l=jr(c[5]||"",!0),th(this,c[6]||"",!0),this.m=jr(c[7]||"")):(this.h=!1,this.i=new zr(null,this.h))}In.prototype.toString=function(){var o=[],c=this.j;c&&o.push(qr(c,nh,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(qr(c,nh,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(qr(h,h.charAt(0)=="/"?ng:tg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",qr(h,ig)),o.join("")};function Pt(o){return new In(o)}function Yi(o,c,h){o.j=h?jr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Xi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function th(o,c,h){c instanceof zr?(o.i=c,sg(o.i,o.h)):(h||(c=qr(c,rg)),o.i=new zr(c,o.h))}function he(o,c,h){o.i.set(c,h)}function Zi(o){return he(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function jr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function qr(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,eg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function eg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nh=/[#\/\?@]/g,tg=/[#\?:]/g,ng=/[#\?]/g,rg=/[#\?@]/g,ig=/#/g;function zr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Qt(o){o.g||(o.g=new Map,o.h=0,o.i&&Zm(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=zr.prototype,n.add=function(o,c){Qt(this),this.i=null,o=Yn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function rh(o,c){Qt(o),c=Yn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ih(o,c){return Qt(o),c=Yn(o,c),o.g.has(c)}n.forEach=function(o,c){Qt(this),this.g.forEach(function(h,f){h.forEach(function(S){o.call(c,S,f,this)},this)},this)},n.na=function(){Qt(this);let o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){let S=o[f];for(let P=0;P<S.length;P++)h.push(c[f])}return h},n.V=function(o){Qt(this);let c=[];if(typeof o=="string")ih(this,o)&&(c=c.concat(this.g.get(Yn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Qt(this),this.i=null,o=Yn(this,o),ih(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function sh(o,c,h){rh(o,c),0<h.length&&(o.i=null,o.g.set(Yn(o,c),M(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];let P=encodeURIComponent(String(f)),L=this.V(f);for(f=0;f<L.length;f++){var S=P;L[f]!==""&&(S+="="+encodeURIComponent(String(L[f]))),o.push(S)}}return this.i=o.join("&")};function Yn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function sg(o,c){c&&!o.j&&(Qt(o),o.i=null,o.g.forEach(function(h,f){var S=f.toLowerCase();f!=S&&(rh(this,f),sh(this,S,h))},o)),o.j=c}function og(o,c){let h=new Ur;if(u.Image){let f=new Image;f.onload=k(Jt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=k(Jt,h,"TestLoadImage: error",!1,c,f),f.onabort=k(Jt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=k(Jt,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function ag(o,c){let h=new Ur,f=new AbortController,S=setTimeout(()=>{f.abort(),Jt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(P=>{clearTimeout(S),P.ok?Jt(h,"TestPingServer: ok",!0,c):Jt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),Jt(h,"TestPingServer: error",!1,c)})}function Jt(o,c,h,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(h)}catch{}}function cg(){this.g=new G}function ug(o,c,h){let f=h||"";try{Zl(o,function(S,P){let L=S;d(S)&&(L=j(S)),c.push(f+P+"="+encodeURIComponent(L))})}catch(S){throw c.push(f+"type="+encodeURIComponent("_badmap")),S}}function Gr(o){this.l=o.Ub||null,this.j=o.eb||!1}O(Gr,F),Gr.prototype.g=function(){return new es(this.l,this.j)},Gr.prototype.i=function(o){return function(){return o}}({});function es(o,c){Ne.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(es,Ne),n=es.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hr(this)),this.g&&(this.readyState=3,Hr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function oh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?$r(this):Hr(this),this.readyState==3&&oh(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,$r(this))},n.Qa=function(o){this.g&&(this.response=o,$r(this))},n.ga=function(){this.g&&$r(this)};function $r(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hr(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Hr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ah(o){let c="";return re(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function ca(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ah(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):he(o,c,h))}function ge(o){Ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(ge,Ne);var lg=/^https?$/i,hg=["POST","PUT"];n=ge.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ta.g(),this.v=this.o?ie(this.o):ie(ta),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){ch(this,P);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)h.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),S=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(hg,c,void 0))||f||S||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[P,L]of h)this.g.setRequestHeader(P,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hh(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){ch(this,P)}};function ch(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,uh(o),ts(o)}function uh(o){o.A||(o.A=!0,Me(o,"complete"),Me(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Me(this,"complete"),Me(this,"abort"),ts(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ts(this,!0)),ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lh(this):this.bb())},n.bb=function(){lh(this)};function lh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ct(o)!=4||o.Z()!=2)){if(o.u&&Ct(o)==4)Wi(o.Ea,0,o);else if(Me(o,"readystatechange"),Ct(o)==4){o.h=!1;try{let L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=L===0){var S=String(o.D).match(eh)[1]||null;!S&&u.self&&u.self.location&&(S=u.self.location.protocol.slice(0,-1)),f=!lg.test(S?S.toLowerCase():"")}h=f}if(h)Me(o,"complete"),Me(o,"success");else{o.m=6;try{var P=2<Ct(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",uh(o)}}finally{ts(o)}}}}function ts(o,c){if(o.g){hh(o);let h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Me(o,"ready");try{h.onreadystatechange=f}catch{}}}function hh(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ct(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),z(c)}};function dh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function dg(o){let c={};o=(o.g&&2<=Ct(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(K(o[f]))continue;var h=b(o[f]);let S=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let P=c[S]||[];c[S]=P,P.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function fh(o){this.Aa=0,this.i=[],this.j=new Ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wr("baseRetryDelayMs",5e3,o),this.cb=Wr("retryDelaySeedMs",1e4,o),this.Wa=Wr("forwardChannelMaxRetries",2,o),this.wa=Wr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Kl(o&&o.concurrentRequestLimit),this.Da=new cg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=fh.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){ye(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Eh(this,null,this.W),rs(this)};function ua(o){if(ph(o),o.G==3){var c=o.U++,h=Pt(o.I);if(he(h,"SID",o.K),he(h,"RID",c),he(h,"TYPE","terminate"),Kr(o,h),c=new Kt(o,o.j,c),c.L=2,c.v=Zi(Pt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Th(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ji(c)}Ih(o)}function ns(o){o.g&&(ha(o),o.g.cancel(),o.g=null)}function ph(o){ns(o),o.u&&(u.clearTimeout(o.u),o.u=null),is(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function rs(o){if(!Ql(o.h)&&!o.s){o.s=!0;var c=o.Ga;jt||Ui(),_n||(jt(),_n=!0),xr.add(c,o),o.B=0}}function fg(o,c){return Jl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wt(w(o.Ga,o,c),wh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let S=new Kt(this,this.j,o),P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=gh(this,S,c),h=Pt(this.I),he(h,"RID",o),he(h,"CVER",22),this.D&&he(h,"X-HTTP-Session-Id",this.D),Kr(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(ah(P)))+"&"+c:this.m&&ca(h,this.m,P)),aa(this.h,S),this.Ua&&he(h,"TYPE","init"),this.P?(he(h,"$req",c),he(h,"SID","null"),S.T=!0,ra(S,h,null)):ra(S,h,c),this.G=2}}else this.G==3&&(o?mh(this,o):this.i.length==0||Ql(this.h)||mh(this))};function mh(o,c){var h;c?h=c.l:h=o.U++;let f=Pt(o.I);he(f,"SID",o.K),he(f,"RID",h),he(f,"AID",o.T),Kr(o,f),o.m&&o.o&&ca(f,o.m,o.o),h=new Kt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=gh(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),aa(o.h,h),ra(h,f,c)}function Kr(o,c){o.H&&re(o.H,function(h,f){he(c,f,h)}),o.l&&Zl({},function(h,f){he(c,f,h)})}function gh(o,c,h){h=Math.min(o.i.length,h);var f=o.l?w(o.l.Na,o.l,o):null;e:{var S=o.i;let P=-1;for(;;){let L=["count="+h];P==-1?0<h?(P=S[0].g,L.push("ofs="+P)):P=0:L.push("ofs="+P);let le=!0;for(let Fe=0;Fe<h;Fe++){let oe=S[Fe].g,je=S[Fe].map;if(oe-=P,0>oe)P=Math.max(0,S[Fe].g-100),le=!1;else try{ug(je,L,"req"+oe+"_")}catch{f&&f(je)}}if(le){f=L.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function _h(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;jt||Ui(),_n||(jt(),_n=!0),xr.add(c,o),o.v=0}}function la(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wt(w(o.Fa,o),wh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wt(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ye(10),ns(this),yh(this))};function ha(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function yh(o){o.g=new Kt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Pt(o.qa);he(c,"RID","rpc"),he(c,"SID",o.K),he(c,"AID",o.T),he(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&he(c,"TO",o.ja),he(c,"TYPE","xmlhttp"),Kr(o,c),o.m&&o.o&&ca(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Zi(Pt(c)),h.m=null,h.P=!0,$l(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ns(this),la(this),ye(19))};function is(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function vh(o,c){var h=null;if(o.g==c){is(o),ha(o),o.g=null;var f=2}else if(oa(o.h,c))h=c.D,Yl(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var S=o.B;f=Pe(),Me(f,new Ht(f,h)),rs(o)}else _h(o);else if(S=c.s,S==3||S==0&&0<c.X||!(f==1&&fg(o,c)||f==2&&la(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),S){case 1:En(o,5);break;case 4:En(o,10);break;case 3:En(o,6);break;default:En(o,2)}}}function wh(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function En(o,c){if(o.j.info("Error code "+c),c==2){var h=w(o.fb,o),f=o.Xa;let S=!f;f=new In(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Yi(f,"https"),Zi(f),S?og(f.toString(),h):ag(f.toString(),h)}else ye(2);o.G=0,o.l&&o.l.sa(c),Ih(o),ph(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function Ih(o){if(o.G=0,o.ka=[],o.l){let c=Xl(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ka,c),x(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function Eh(o,c,h){var f=h instanceof In?Pt(h):new In(h);if(f.g!="")c&&(f.g=c+"."+f.g),Xi(f,f.s);else{var S=u.location;f=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;var P=new In(null);f&&Yi(P,f),c&&(P.g=c),S&&Xi(P,S),h&&(P.l=h),f=P}return h=o.D,c=o.ya,h&&c&&he(f,h,c),he(f,"VER",o.la),Kr(o,f),f}function Th(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ge(new Gr({eb:h})):new ge(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bh(){}n=bh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ss(){}ss.prototype.g=function(o,c){return new Xe(o,c)};function Xe(o,c){Ne.call(this),this.g=new fh(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!K(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!K(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Xn(this)}O(Xe,Ne),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){ua(this.g)},Xe.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=j(o),o=h);c.i.push(new Jm(c.Ya++,o)),c.G==3&&rs(c)},Xe.prototype.N=function(){this.g.l=null,delete this.j,ua(this.g),delete this.g,Xe.aa.N.call(this)};function Ah(o){Rt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(let h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}O(Ah,Rt);function Sh(){Qn.call(this),this.status=1}O(Sh,Qn);function Xn(o){this.g=o}O(Xn,bh),Xn.prototype.ua=function(){Me(this.g,"a")},Xn.prototype.ta=function(o){Me(this.g,new Ah(o))},Xn.prototype.sa=function(o){Me(this.g,new Sh)},Xn.prototype.ra=function(){Me(this.g,"b")},ss.prototype.createWebChannel=ss.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,Ec=Vt.createWebChannelTransport=function(){return new ss},Ic=Vt.getStatEventTarget=function(){return Pe()},wc=Vt.Event=$,Ys=Vt.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ki.NO_ERROR=0,Ki.TIMEOUT=8,Ki.HTTP_ERROR=6,pi=Vt.ErrorCode=Ki,ql.COMPLETE="complete",vc=Vt.EventType=ql,ce.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,sr=Vt.WebChannel=ce,Av=Vt.FetchXmlHttpFactory=Gr,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,yc=Vt.XhrIo=ge}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});var uf="@firebase/firestore",lf="4.8.0";var xe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");var kr="11.10.0";var xn=new Xt("@firebase/firestore");function or(){return xn.logLevel}function U(n,...e){if(xn.logLevel<=ee.DEBUG){let t=e.map(ll);xn.debug(`Firestore (${kr}): ${n}`,...t)}}function Lt(n,...e){if(xn.logLevel<=ee.ERROR){let t=e.map(ll);xn.error(`Firestore (${kr}): ${n}`,...t)}}function hn(n,...e){if(xn.logLevel<=ee.WARN){let t=e.map(ll);xn.warn(`Firestore (${kr}): ${n}`,...t)}}function ll(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Zf(n,r,t)}function Zf(n,e,t){let r=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Lt(r),new Error(r)}function ue(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Zf(e,i,r)}function J(n,e){return n}var D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},B=class extends Ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var wt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var io=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Pc=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xe.UNAUTHENTICATED))}shutdown(){}},Cc=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},kc=class{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0,42304);let r=this.i,i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve(),s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,e.enqueueRetryable(()=>i(this.currentUser))};let a=()=>{let l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){let l=this.t.getImmediate({optional:!0});l?u(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new io(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new xe(e)}},Dc=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Nc=class{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Dc(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},so=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Oc=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0,3512);let r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let a=s.token!==this.m;return this.m=s.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.V.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new so(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new so(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Sv(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function ep(){return new TextEncoder}var wi=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let i=Sv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}};function Z(n,e){return n<e?-1:n>e?1:0}function xc(n,e){let t=0;for(;t<n.length&&t<e.length;){let r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Z(r,i);{let s=ep(),a=Rv(s.encode(hf(n,t)),s.encode(hf(e,t)));return a!==0?a:Z(r,i)}}t+=r>65535?2:1}return Z(n.length,e.length)}function hf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Rv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Z(n[t],e[t]);return Z(n.length,e.length)}function pr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}var df="__name__",oo=class n{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let i=0;i<r;i++){let s=n.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Z(e.length,t.length)}static compareSegments(e,t){let r=n.isNumericId(e),i=n.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?n.extractNumericId(e).compare(n.extractNumericId(t)):xc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xt.fromString(e.substring(4,e.length-2))}},me=class n extends oo{construct(e,t,r){return new n(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new n(t)}static emptyPath(){return new n([])}},Pv=/^[_a-zA-Z][_a-zA-Z0-9]*$/,tt=class n extends oo{construct(e,t,r){return new n(e,t,r)}static isValidIdentifier(e){return Pv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===df}static keyField(){return new n([df])}static fromServerFormat(e){let t=[],r="",i=0,s=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},a=!1;for(;i<e.length;){let u=e[i];if(u==="\\"){if(i+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var H=class n{constructor(e){this.path=e}static fromPath(e){return new n(me.fromString(e))}static fromName(e){return new n(me.fromString(e).popFirst(5))}static empty(){return new n(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new me(e.slice()))}};function tp(n,e,t){if(!t)throw new B(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Cv(n,e,t,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ff(n){if(!H.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pf(n){if(H.isDocumentKey(n))throw new B(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function np(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function hl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=hl(n);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ie(n,e){let t={typeString:n};return e&&(t.value=e),t}function Di(n,e){if(!np(n))throw new B(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(let r in e)if(e[r]){let i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}let a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new B(D.INVALID_ARGUMENT,t);return!0}var mf=-62135596800,gf=1e6,Ee=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*gf);return new n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<mf)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gf}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Di(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-mf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:Ie("string",Ee._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};var Y=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Ee(0,0))}static max(){return new n(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ii=-1,Vc=class{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}};Vc.UNKNOWN_ID=-1;function kv(n,e){let t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ee(t+1,0):new Ee(t,r));return new Vn(i,H.empty(),e)}function Dv(n){return new Vn(n.readTime,n.key,Ii)}var Vn=class n{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new n(Y.min(),H.empty(),Ii)}static max(){return new n(Y.max(),H.empty(),Ii)}};function Nv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}var Ov="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Lc=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Dr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Ov)throw n;U("LocalStore","Unexpectedly lost primary lease")}var N=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,r)=>{t(e)})}static reject(e){return new n((t,r)=>{r(e)})}static waitFor(e){return new n((t,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=n.resolve(!1);for(let r of e)t=t.next(i=>i?n.resolve(i):r());return t}static forEach(e,t){let r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new n((r,i)=>{let s=e.length,a=new Array(s),u=0;for(let l=0;l<s;l++){let d=l;t(e[d]).next(p=>{a[d]=p,++u,u===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new n((r,i)=>{let s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}};function xv(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Nr(n){return n.name==="IndexedDbTransactionError"}var mr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};mr.ue=-1;var dl=-1;function Bo(n){return n==null}function Ei(n){return n===0&&1/n==-1/0}function Vv(n){return typeof n=="number"&&Number.isInteger(n)&&!Ei(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var rp="";function Lv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_f(e)),e=Mv(n.get(t),e);return _f(e)}function Mv(n,e){let t=e,r=n.length;for(let i=0;i<r;i++){let s=n.charAt(i);switch(s){case"\0":t+="";break;case rp:t+="";break;default:t+=s}}return t}function _f(n){return n+rp+""}var Fv="remoteDocuments",ip="owner";var sp="mutationQueues";var op="mutations";var ap="documentMutations",Uv="remoteDocumentsV14";var cp="remoteDocumentGlobal";var up="targets";var lp="targetDocuments";var hp="targetGlobal",dp="collectionParents";var fp="clientMetadata";var pp="bundles";var mp="namedQueries";var Bv="indexConfiguration";var jv="indexState";var qv="indexEntries";var gp="documentOverlays";var zv="globals";var Gv=[sp,op,ap,Fv,up,ip,hp,lp,fp,cp,dp,pp,mp],kT=[...Gv,gp],$v=[sp,op,ap,Uv,up,ip,hp,lp,fp,cp,dp,pp,mp,gp],Hv=$v,Wv=[...Hv,Bv,jv,qv];var DT=[...Wv,zv];function yf(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function _p(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var _e=class n{constructor(e,t){this.comparator=e,this.root=t||It.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lr(this.root,e,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lr(this.root,e,this.comparator,!0)}},lr=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},It=class n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??n.RED,this.left=i??n.EMPTY,this.right=s??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new n(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}};It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new It(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ve=class n{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ao(this.data.getIterator())}getIteratorFrom(e){return new ao(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},ao=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var ot=class n{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new n([])}unionWith(e){let t=new Ve(tt.comparator);for(let r of this.fields)t=t.add(r);for(let r of e)t=t.add(r);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pr(this.fields,e.fields,(t,r)=>t.isEqual(r))}};var co=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var $e=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new co("Invalid base64 string: "+s):s}}(e);return new n(t)}static fromUint8Array(e){let t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};$e.EMPTY_BYTE_STRING=new $e("");var Kv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(ue(!!n,39018),typeof n=="string"){let e=0,t=Kv.exec(n);if(ue(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ft(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}var yp="server_timestamp",vp="__type__",wp="__previous_value__",Ip="__local_write_time__";function fl(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[vp])===null||t===void 0?void 0:t.stringValue)===yp}function jo(n){let e=n.mapValue.fields[wp];return fl(e)?jo(e):e}function Ti(n){let e=Mt(n.mapValue.fields[Ip].timestampValue);return new Ee(e.seconds,e.nanos)}var Mc=class{constructor(e,t,r,i,s,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}},uo="(default)",lo=class n{constructor(e,t){this.projectId=e,this.database=t||uo}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===uo}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var pl="__type__",Ep="__max__",Xs={mapValue:{fields:{__type__:{stringValue:Ep}}}},ml="__vector__",gr="value";function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fl(n)?4:bp(n)?9007199254740991:Tp(n)?10:11:W(28295,{value:n})}function bt(n,e){if(n===e)return!0;let t=dn(n);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ti(n).isEqual(Ti(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let a=Mt(i.timestampValue),u=Mt(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ft(i.bytesValue).isEqual(Ft(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return de(i.geoPointValue.latitude)===de(s.geoPointValue.latitude)&&de(i.geoPointValue.longitude)===de(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return de(i.integerValue)===de(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let a=de(i.doubleValue),u=de(s.doubleValue);return a===u?Ei(a)===Ei(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return pr(n.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:case 11:return function(i,s){let a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(yf(a)!==yf(u))return!1;for(let l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!bt(a[l],u[l])))return!1;return!0}(n,e);default:return W(52216,{left:n})}}function bi(n,e){return(n.values||[]).find(t=>bt(t,e))!==void 0}function _r(n,e){if(n===e)return 0;let t=dn(n),r=dn(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return function(s,a){let u=de(s.integerValue||s.doubleValue),l=de(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return vf(n.timestampValue,e.timestampValue);case 4:return vf(Ti(n),Ti(e));case 5:return xc(n.stringValue,e.stringValue);case 6:return function(s,a){let u=Ft(s),l=Ft(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){let u=s.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){let p=Z(u[d],l[d]);if(p!==0)return p}return Z(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){let u=Z(de(s.latitude),de(a.latitude));return u!==0?u:Z(de(s.longitude),de(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wf(n.arrayValue,e.arrayValue);case 10:return function(s,a){var u,l,d,p;let y=s.fields||{},w=a.fields||{},k=(u=y[gr])===null||u===void 0?void 0:u.arrayValue,O=(l=w[gr])===null||l===void 0?void 0:l.arrayValue,M=Z(((d=k?.values)===null||d===void 0?void 0:d.length)||0,((p=O?.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:wf(k,O)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Xs.mapValue&&a===Xs.mapValue)return 0;if(s===Xs.mapValue)return 1;if(a===Xs.mapValue)return-1;let u=s.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){let w=xc(l[y],p[y]);if(w!==0)return w;let k=_r(u[l[y]],d[p[y]]);if(k!==0)return k}return Z(l.length,p.length)}(n.mapValue,e.mapValue);default:throw W(23264,{le:t})}}function vf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);let t=Mt(n),r=Mt(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function wf(n,e){let t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){let s=_r(t[i],r[i]);if(s)return s}return Z(t.length,r.length)}function yr(n){return Fc(n)}function Fc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let r=Mt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ft(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(let s of t.values||[])i?i=!1:r+=",",r+=Fc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){let r=Object.keys(t.fields||{}).sort(),i="{",s=!0;for(let a of r)s?s=!1:i+=",",i+=`${a}:${Fc(t.fields[a])}`;return i+"}"}(n.mapValue):W(61005,{value:n})}function to(n){switch(dn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=jo(n);return e?16+to(e):16;case 5:return 2*n.stringValue.length;case 6:return Ft(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+to(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return mn(r.fields,(s,a)=>{i+=s.length+to(a)}),i}(n.mapValue);default:throw W(13486,{value:n})}}function Uc(n){return!!n&&"integerValue"in n}function gl(n){return!!n&&"arrayValue"in n}function If(n){return!!n&&"nullValue"in n}function Ef(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function no(n){return!!n&&"mapValue"in n}function Tp(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[pl])===null||t===void 0?void 0:t.stringValue)===ml}function gi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return mn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=gi(r)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function bp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ep}var OT={mapValue:{fields:{[pl]:{stringValue:ml},[gr]:{arrayValue:{}}}}};var et=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!no(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(t)}setAll(e){let t=tt.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){let l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=gi(a):i.push(u.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){let t=this.field(e.popLast());no(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];no(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){mn(t,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new n(gi(this.value))}};function Ap(n){let e=[];return mn(n.fields,(t,r)=>{let i=new tt([t]);if(no(r)){let s=Ap(r.mapValue).fields;if(s.length===0)e.push(i);else for(let a of s)e.push(i.child(a))}else e.push(i)}),new ot(e)}var ht=class n{constructor(e,t,r,i,s,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new n(e,0,Y.min(),Y.min(),Y.min(),et.empty(),0)}static newFoundDocument(e,t,r,i){return new n(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new n(e,2,t,Y.min(),Y.min(),et.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,Y.min(),Y.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var vr=class{constructor(e,t){this.position=e,this.inclusive=t}};function Tf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){let s=e[i],a=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),t.key):r=_r(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bt(n.position[t],e.position[t]))return!1;return!0}var wr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function Qv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var ho=class{},ke=class n extends ho{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jc(e,t,r):t==="array-contains"?new Gc(e,r):t==="in"?new $c(e,r):t==="not-in"?new Hc(e,r):t==="array-contains-any"?new Wc(e,r):new n(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new qc(e,r):new zc(e,r)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_r(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(_r(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},At=class n extends ho{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return Sp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function Sp(n){return n.op==="and"}function Rp(n){return Jv(n)&&Sp(n)}function Jv(n){for(let e of n.filters)if(e instanceof At)return!1;return!0}function Bc(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+yr(n.value);if(Rp(n))return n.filters.map(e=>Bc(e)).join(",");{let e=n.filters.map(t=>Bc(t)).join(",");return`${n.op}(${e})`}}function Pp(n,e){return n instanceof ke?function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(n,e):n instanceof At?function(r,i){return i instanceof At&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&Pp(a,i.filters[u]),!0):!1}(n,e):void W(19439)}function Cp(n){return n instanceof ke?function(t){return`${t.field.canonicalString()} ${t.op} ${yr(t.value)}`}(n):n instanceof At?function(t){return t.op.toString()+" {"+t.getFilters().map(Cp).join(" ,")+"}"}(n):"Filter"}var jc=class extends ke{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){let t=H.comparator(e.key,this.key);return this.matchesComparison(t)}},qc=class extends ke{constructor(e,t){super(e,"in",t),this.keys=kp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},zc=class extends ke{constructor(e,t){super(e,"not-in",t),this.keys=kp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function kp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}var Gc=class extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return gl(t)&&bi(t.arrayValue,this.value)}},$c=class extends ke{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&bi(this.value.arrayValue,t)}},Hc=class extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!bi(this.value.arrayValue,t)}},Wc=class extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!gl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}};var Kc=class{constructor(e,t=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.Pe=null}};function Af(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Kc(n,e,t,r,i,s,a)}function _l(n){let e=J(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Bc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yr(r)).join(",")),e.Pe=t}return e.Pe}function yl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Qv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bf(n.startAt,e.startAt)&&bf(n.endAt,e.endAt)}function Qc(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var Ir=class{constructor(e,t=null,r=[],i=[],s=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function Yv(n,e,t,r,i,s,a,u){return new Ir(n,e,t,r,i,s,a,u)}function qo(n){return new Ir(n)}function Sf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xv(n){return n.collectionGroup!==null}function _i(n){let e=J(n);if(e.Te===null){e.Te=[];let t=new Set;for(let s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ve(tt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new wr(s,r))}),t.has(tt.keyField().canonicalString())||e.Te.push(new wr(tt.keyField(),r))}return e.Te}function Et(n){let e=J(n);return e.Ie||(e.Ie=Zv(e,_i(n))),e.Ie}function Zv(n,e){if(n.limitType==="F")return Af(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new wr(i.field,s)});let t=n.endAt?new vr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new vr(n.startAt.position,n.startAt.inclusive):null;return Af(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jc(n,e,t){return new Ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zo(n,e){return yl(Et(n),Et(e))&&n.limitType===e.limitType}function Dp(n){return`${_l(Et(n))}|lt:${n.limitType}`}function ar(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Cp(i)).join(", ")}]`),Bo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>yr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>yr(i)).join(",")),`Target(${r})`}(Et(n))}; limitType=${n.limitType})`}function Go(n,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(let s of _i(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,l){let d=Tf(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,_i(r),i)||r.endAt&&!function(a,u,l){let d=Tf(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,_i(r),i))}(n,e)}function ew(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Np(n){return(e,t)=>{let r=!1;for(let i of _i(n)){let s=tw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function tw(n,e,t){let r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,a,u){let l=a.data.field(s),d=u.data.field(s);return l!==null&&d!==null?_r(l,d):W(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}var Ut=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return _p(this.inner)}size(){return this.innerSize}};var nw=new _e(H.comparator);function Bt(){return nw}var Op=new _e(H.comparator);function mi(...n){let e=Op;for(let t of n)e=e.insert(t.key,t);return e}function xp(n){let e=Op;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function kn(){return yi()}function Vp(){return yi()}function yi(){return new Ut(n=>n.toString(),(n,e)=>n.isEqual(e))}var rw=new _e(H.comparator),iw=new Ve(H.comparator);function ne(...n){let e=iw;for(let t of n)e=e.add(t);return e}var sw=new Ve(Z);function ow(){return sw}function vl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(e)?"-0":e}}function Lp(n){return{integerValue:""+n}}function aw(n,e){return Vv(e)?Lp(e):vl(n,e)}var Er=class{constructor(){this._=void 0}};function cw(n,e,t){return n instanceof Tr?function(i,s){let a={fields:{[vp]:{stringValue:yp},[Ip]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fl(s)&&(s=jo(s)),s&&(a.fields[wp]=s),{mapValue:a}}(t,e):n instanceof Ln?Fp(n,e):n instanceof Mn?Up(n,e):function(i,s){let a=Mp(i,s),u=Rf(a)+Rf(i.Ee);return Uc(a)&&Uc(i.Ee)?Lp(u):vl(i.serializer,u)}(n,e)}function uw(n,e,t){return n instanceof Ln?Fp(n,e):n instanceof Mn?Up(n,e):t}function Mp(n,e){return n instanceof br?function(r){return Uc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var Tr=class extends Er{},Ln=class extends Er{constructor(e){super(),this.elements=e}};function Fp(n,e){let t=Bp(e);for(let r of n.elements)t.some(i=>bt(i,r))||t.push(r);return{arrayValue:{values:t}}}var Mn=class extends Er{constructor(e){super(),this.elements=e}};function Up(n,e){let t=Bp(e);for(let r of n.elements)t=t.filter(i=>!bt(i,r));return{arrayValue:{values:t}}}var br=class extends Er{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function Rf(n){return de(n.integerValue||n.doubleValue)}function Bp(n){return gl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lw(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ln&&i instanceof Ln||r instanceof Mn&&i instanceof Mn?pr(r.elements,i.elements,bt):r instanceof br&&i instanceof br?bt(r.Ee,i.Ee):r instanceof Tr&&i instanceof Tr}(n.transform,e.transform)}var Yc=class{constructor(e,t){this.version=e,this.transformResults=t}},rt=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function ro(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var Ar=class{};function jp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sr(n.key,rt.none()):new Fn(n.key,n.data,rt.none());{let t=n.data,r=et.empty(),i=new Ve(tt.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new St(n.key,r,new ot(i.toArray()),rt.none())}}function hw(n,e,t){n instanceof Fn?function(i,s,a){let u=i.value.clone(),l=Cf(i.fieldTransforms,s,a.transformResults);u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof St?function(i,s,a){if(!ro(i.precondition,s))return void s.convertToUnknownDocument(a.version);let u=Cf(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(qp(i)),l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function vi(n,e,t,r){return n instanceof Fn?function(s,a,u,l){if(!ro(s.precondition,a))return u;let d=s.value.clone(),p=kf(s.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof St?function(s,a,u,l){if(!ro(s.precondition,a))return u;let d=kf(s.fieldTransforms,l,a),p=a.data;return p.setAll(qp(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,u){return ro(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function dw(n,e){let t=null;for(let r of n.fieldTransforms){let i=e.data.field(r.field),s=Mp(r.transform,i||null);s!=null&&(t===null&&(t=et.empty()),t.set(r.field,s))}return t||null}function Pf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pr(r,i,(s,a)=>lw(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Fn=class extends Ar{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},St=class extends Ar{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function qp(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let r=n.data.field(t);e.set(t,r)}}),e}function Cf(n,e,t){let r=new Map;ue(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){let s=n[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,uw(a,u,t[i]))}return r}function kf(n,e,t){let r=new Map;for(let i of n){let s=i.transform,a=t.data.field(i.field);r.set(i.field,cw(s,a,e))}return r}var Sr=class extends Ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Xc=class extends Ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Zc=class{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&hw(s,e,r[i])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=vi(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=vi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=Vp();return this.mutations.forEach(i=>{let s=e.get(i.key),a=s.overlayedDocument,u=this.applyToLocalView(a,s.mutatedFields);u=t.has(i.key)?null:u;let l=jp(a,u);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ne())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,(t,r)=>Pf(t,r))&&pr(this.baseMutations,e.baseMutations,(t,r)=>Pf(t,r))}},eu=class n{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ue(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return rw}(),s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new n(e,t,r,i)}};var tu=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var nu=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var ve,se;function fw(n){switch(n){case D.OK:return W(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function zp(n){if(n===void 0)return Lt("GRPC error has no .code"),D.UNKNOWN;switch(n){case ve.OK:return D.OK;case ve.CANCELLED:return D.CANCELLED;case ve.UNKNOWN:return D.UNKNOWN;case ve.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ve.INTERNAL:return D.INTERNAL;case ve.UNAVAILABLE:return D.UNAVAILABLE;case ve.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ve.NOT_FOUND:return D.NOT_FOUND;case ve.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ve.ABORTED:return D.ABORTED;case ve.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ve.DATA_LOSS:return D.DATA_LOSS;default:return W(39323,{code:n})}}(se=ve||(ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";var Df=null;var pw=new xt([4294967295,4294967295],0);function Nf(n){let e=ep().encode(n),t=new _c;return t.update(e),new Uint8Array(t.digest())}function Of(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xt([t,r],0),new xt([i,s],0)]}var ru=class n{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Dn(`Invalid padding: ${t}`);if(r<0)throw new Dn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Dn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Dn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=xt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(xt.fromNumber(r)));return i.compare(pw)===1&&(i=new xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=Nf(e),[r,i]=Of(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new n(s,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.fe===0)return;let t=Nf(e),[r,i]=Of(t);for(let s=0;s<this.hashCount;s++){let a=this.pe(r,i,s);this.we(a)}}we(e){let t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}},Dn=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var fo=class n{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let i=new Map;return i.set(e,Ai.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n(Y.min(),i,new _e(Z),Bt(),ne())}},Ai=class n{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n(r,t,ne(),ne(),ne())}};var hr=class{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}},po=class{constructor(e,t){this.targetId=e,this.De=t}},mo=class{constructor(e,t,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}},go=class{constructor(){this.ve=0,this.Ce=xf(),this.Fe=$e.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ne(),t=ne(),r=ne();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new Ai(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=xf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},iu=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=Bt(),this.je=Zs(),this.Je=Zs(),this.He=new _e(Z)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){let t=e.targetId,r=e.De.count,i=this.st(t);if(i){let s=i.target;if(Qc(s))if(r===0){let a=new H(s.path);this.Xe(t,a,ht.newNoDocument(a,Y.min()))}else ue(r===1,20013,{expectedCount:r});else{let a=this.ot(t);if(a!==r){let u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);let d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}Df?.ct(function(p,y,w,k,O){var M,x,X,K,Q,ae;let be={localCacheCount:p,existenceFilterCount:y.count,databaseId:w.database,projectId:w.projectId},re=y.unchangedNames;return re&&(be.bloomFilter={applied:O===0,hashCount:(M=re?.hashCount)!==null&&M!==void 0?M:0,bitmapLength:(K=(X=(x=re?.bits)===null||x===void 0?void 0:x.bitmap)===null||X===void 0?void 0:X.length)!==null&&K!==void 0?K:0,padding:(ae=(Q=re?.bits)===null||Q===void 0?void 0:Q.padding)!==null&&ae!==void 0?ae:0,mightContain:T=>{var g;return(g=k?.mightContain(T))!==null&&g!==void 0&&g}}),be}(a,e.De,this.We.lt(),u,l))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t,a,u;try{a=Ft(r).toUint8Array()}catch(l){if(l instanceof co)return hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ru(a,i,s)}catch(l){return hn(l instanceof Dn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),i=0;return r.forEach(s=>{let a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,s,null),i++)}),i}Pt(e){let t=new Map;this.Ge.forEach((s,a)=>{let u=this.st(a);if(u){if(s.current&&Qc(u.target)){let l=new H(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ht.newNoDocument(l,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}});let r=ne();this.Je.forEach((s,a)=>{let u=!0;a.forEachWhile(l=>{let d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));let i=new fo(e,t,this.He,this.ze,r);return this.ze=Bt(),this.je=Zs(),this.Je=Zs(),this.He=new _e(Z),i}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new go,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ve(Z),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ve(Z),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new go),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function Zs(){return new _e(H.comparator)}function xf(){return new _e(H.comparator)}var mw={asc:"ASCENDING",desc:"DESCENDING"},gw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_w={and:"AND",or:"OR"},su=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function ou(n,e){return n.useProto3Json||Bo(e)?e:{value:e}}function _o(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yw(n,e){return _o(n,e.toTimestamp())}function Tt(n){return ue(!!n,49232),Y.fromTimestamp(function(t){let r=Mt(t);return new Ee(r.seconds,r.nanos)}(n))}function wl(n,e){return au(n,e).canonicalString()}function au(n,e){let t=function(i){return new me(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $p(n){let e=me.fromString(n);return ue(Jp(e),10190,{key:e.toString()}),e}function cu(n,e){return wl(n.databaseId,e.path)}function Tc(n,e){let t=$p(e);if(t.get(1)!==n.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Wp(t))}function Hp(n,e){return wl(n.databaseId,e)}function vw(n){let e=$p(n);return e.length===4?me.emptyPath():Wp(e)}function uu(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wp(n){return ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vf(n,e,t){return{name:cu(n,e),fields:t.value.mapValue.fields}}function ww(n,e){let t;if("targetChange"in e){e.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(ue(p===void 0||typeof p=="string",58123),$e.fromBase64String(p||"")):(ue(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),$e.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){let p=d.code===void 0?D.UNKNOWN:zp(d.code);return new B(p,d.message||"")}(a);t=new mo(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=Tc(n,r.document.name),s=Tt(r.document.updateTime),a=r.document.createTime?Tt(r.document.createTime):Y.min(),u=new et({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(i,s,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new hr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=Tc(n,r.document),s=r.readTime?Tt(r.readTime):Y.min(),a=ht.newNoDocument(i,s),u=r.removedTargetIds||[];t=new hr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=Tc(n,r.document),s=r.removedTargetIds||[];t=new hr([],s,i,null)}else{if(!("filter"in e))return W(11601,{At:e});{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,a=new nu(i,s),u=r.targetId;t=new po(u,a)}}return t}function Iw(n,e){let t;if(e instanceof Fn)t={update:Vf(n,e.key,e.value)};else if(e instanceof Sr)t={delete:cu(n,e.key)};else if(e instanceof St)t={update:Vf(n,e.key,e.data),updateMask:kw(e.fieldMask)};else{if(!(e instanceof Xc))return W(16599,{Rt:e.type});t={verify:cu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){let u=a.transform;if(u instanceof Tr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ln)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Mn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof br)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw W(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(n,e.precondition)),t}function Ew(n,e){return n&&n.length>0?(ue(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?Tt(i.updateTime):Tt(s);return a.isEqual(Y.min())&&(a=Tt(s)),new Yc(a,i.transformResults||[])}(t,e))):[]}function Tw(n,e){return{documents:[Hp(n,e.path)]}}function bw(n,e){let t={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hp(n,i);let s=function(d){if(d.length!==0)return Qp(At.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);let a=function(d){if(d.length!==0)return d.map(p=>function(w){return{field:cr(w.field),direction:Rw(w.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let u=ou(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{Vt:t,parent:i}}function Aw(n){let e=vw(n.parent),t=n.structuredQuery,r=t.from?t.from.length:0,i=null;if(r>0){ue(r===1,65062);let p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(y){let w=Kp(y);return w instanceof At&&Rp(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(w=>function(O){return new wr(ur(O.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(w))}(t.orderBy));let u=null;t.limit&&(u=function(y){let w;return w=typeof y=="object"?y.value:y,Bo(w)?null:w}(t.limit));let l=null;t.startAt&&(l=function(y){let w=!!y.before,k=y.values||[];return new vr(k,w)}(t.startAt));let d=null;return t.endAt&&(d=function(y){let w=!y.before,k=y.values||[];return new vr(k,w)}(t.endAt)),Yv(e,i,a,s,u,"F",l,d)}function Sw(n,e){let t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let r=ur(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=ur(t.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=ur(t.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=ur(t.unaryFilter.field);return ke.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(t){return ke.create(ur(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return At.create(t.compositeFilter.filters.map(r=>Kp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(n):W(30097,{filter:n})}function Rw(n){return mw[n]}function Pw(n){return gw[n]}function Cw(n){return _w[n]}function cr(n){return{fieldPath:n.canonicalString()}}function ur(n){return tt.fromServerFormat(n.fieldPath)}function Qp(n){return n instanceof ke?function(t){if(t.op==="=="){if(Ef(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NAN"}};if(If(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ef(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NOT_NAN"}};if(If(t.value))return{unaryFilter:{field:cr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cr(t.field),op:Pw(t.op),value:t.value}}}(n):n instanceof At?function(t){let r=t.getFilters().map(i=>Qp(i));return r.length===1?r[0]:{compositeFilter:{op:Cw(t.op),filters:r}}}(n):W(54877,{filter:n})}function kw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Si=class n{constructor(e,t,r,i,s=Y.min(),a=Y.min(),u=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var lu=class{constructor(e){this.gt=e}};function Dw(n){let e=Aw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jc(e,e.limit,"L"):e}var yo=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(de(e.integerValue));else if("doubleValue"in e){let r=de(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Ei(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=Mt(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Ft(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?bp(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Tp(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):W(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};this.Ct(t,55);for(let i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;let s=e.fields||{};this.Ct(t,53);let a=gr,u=((i=(r=s[a].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(de(u)),this.xt(a,t),this.Dt(s[a],t)}qt(e,t){let r=e.values||[];this.Ct(t,50);for(let i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),H.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};yo.Ut=new yo;var hu=class{constructor(){this.Dn=new du}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Vn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}},du=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ve(me.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(me.comparator)).toArray()}};var xT=new Uint8Array(0);var Lf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yp=41943040,st=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}};st.DEFAULT_COLLECTION_PERCENTILE=10,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,st.DEFAULT=new st(Yp,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),st.DISABLED=new st(-1,0,0);var Ri=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var Mf="LruGarbageCollector",Nw=1048576;function Ff([n,e],[t,r]){let i=Z(n,t);return i===0?Z(e,r):i}var fu=class{constructor(e){this.Tr=e,this.buffer=new Ve(Ff),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let r=this.buffer.last();Ff(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}},pu=class{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){U(Mf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Nr(t)?U(Mf,"Ignoring IndexedDB error during garbage collection: ",t):await Dr(t)}await this.Rr(3e5)})}},mu=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(mr.ue);let r=new fu(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Lf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lf):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,u,l,d,p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,u=Date.now(),this.removeTargets(e,r,t))).next(y=>(s=y,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),or()<=ee.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${s} targets in `+(l-u)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:y})))}};function Ow(n,e){return new mu(n,e)}var gu=class{constructor(){this.changes=new Ut(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var _u=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var yu=class{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&vi(r.mutation,i,ot.empty(),Ee.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ne()){let i=kn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=mi();return s.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let r=kn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ne()))}populateOverlays(e,t,r){let i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let s=Bt(),a=yi(),u=function(){return yi()}();return t.forEach((l,d)=>{let p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof St)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),vi(p.mutation,d,p.mutation.getFieldMask(),Ee.now())):a.set(d.key,ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return u.set(d,new _u(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(e,t){let r=yi(),i=new _e((a,u)=>a-u),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let u of a)u.keys().forEach(l=>{let d=t.get(l);if(d===null)return;let p=r.get(l)||ot.empty();p=u.applyToLocalView(d,p),r.set(l,p);let y=(i.get(u.batchId)||ne()).add(l);i=i.insert(u.batchId,y)})}).next(()=>{let a=[],u=i.getReverseIterator();for(;u.hasNext();){let l=u.getNext(),d=l.key,p=l.value,y=Vp();p.forEach(w=>{if(!s.has(w)){let k=jp(t.get(w),r.get(w));k!==null&&y.set(w,k),s=s.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{let a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(kn()),u=Ii,l=s;return a.next(d=>N.forEach(d,(p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),s.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{l=l.insert(p,w)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,l,d,ne())).next(p=>({batchId:u,changes:xp(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=mi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){let s=t.collectionGroup,a=mi();return this.indexManager.getCollectionParents(e,s).next(u=>N.forEach(u,l=>{let d=function(y,w){return new Ir(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((l,d)=>{let p=d.getKey();a.get(p)===null&&(a=a.insert(p,ht.newInvalidDocument(p)))});let u=mi();return a.forEach((l,d)=>{let p=s.get(l);p!==void 0&&vi(p.mutation,d,ot.empty(),Ee.now()),Go(t,d)&&(u=u.insert(l,d))}),u})}};var vu=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Tt(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:Dw(i.bundledQuery),readTime:Tt(i.readTime)}}(t)),N.resolve()}};var wu=class{constructor(){this.overlays=new _e(H.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){let r=kn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){let i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){let i=kn(),s=t.length+1,a=new H(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new _e((d,p)=>d-p),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=kn(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}let u=kn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return N.resolve(u)}wt(e,t,r){let i=this.overlays.get(r.key);if(i!==null){let a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tu(t,r));let s=this.kr.get(t);s===void 0&&(s=ne(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}};var Iu=class{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}};var Pi=class{constructor(){this.qr=new Ve(we.Qr),this.$r=new Ve(we.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new we(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new we(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){let t=new H(new me([])),r=new we(t,e),i=new we(t,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new H(new me([])),r=new we(t,e),i=new we(t,e+1),s=ne();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){let t=new we(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}},we=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return H.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||H.comparator(e.key,t.key)}};var Eu=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ve(we.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){let s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new Zc(s,t,r,i);this.mutationQueue.push(a);for(let u of i)this.Yr=this.Yr.add(new we(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=t+1,i=this.Xr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?dl:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new we(t,0),i=new we(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{let u=this.Zr(a.Hr);s.push(u)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ve(Z);return t.forEach(i=>{let s=new we(i,0),a=new we(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],u=>{r=r.add(u.Hr)})}),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,i=r.length+1,s=r;H.isDocumentKey(s)||(s=s.child(""));let a=new we(new H(s),0),u=new Ve(Z);return this.Yr.forEachWhile(l=>{let d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(l.Hr)),!0)},a),N.resolve(this.ei(u))}ei(e){let t=[];return e.forEach(r=>{let i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(t.mutations,i=>{let s=new we(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new we(t,0),i=this.Yr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Tu=class{constructor(e){this.ni=e,this.docs=function(){return new _e(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Bt();return t.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Bt(),a=t.path,u=new H(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){let{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Nv(Dv(p),r)<=0||(i.has(p.key)||Go(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W(9500)}ri(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new bu(this)}getSize(e){return N.resolve(this.size)}},bu=class extends gu{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Au=class{constructor(e){this.persistence=e,this.ii=new Ut(t=>_l(t),yl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.si=0,this.oi=new Pi,this.targetCount=0,this._i=Ri.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new Ri(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0,s=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}};var vo=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new mr(0),this.ci=!1,this.ci=!0,this.li=new Iu,this.referenceDelegate=e(this),this.hi=new Au(this),this.indexManager=new hu,this.remoteDocumentCache=function(i){return new Tu(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new lu(t),this.Ti=new vu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Eu(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){U("MemoryPersistence","Starting transaction:",e);let i=new Su(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return N.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}},Su=class extends Lc{constructor(e){super(),this.currentSequenceNumber=e}},Ru=class n{constructor(e){this.persistence=e,this.Ai=new Pi,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw W(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,r=>{let i=H.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},wo=class n{constructor(e,t){this.persistence=e,this.gi=new Ut(r=>Lv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Ow(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return N.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,t).next(u=>{u||(r++,s.removeEntry(a,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=to(e.data.value)),t}Sr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let i=this.gi.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Pu=class n{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=ne(),i=ne();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new n(e,t.fromCache,r,i)}};var Cu=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var ku=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Bh()?8:xv(Oe())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){let s={result:null};return this.ps(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;let a=new Cu;return this.ws(e,t,a).next(u=>{if(s.result=u,this.Rs)return this.Ss(e,t,a,u.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(or()<=ee.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",ar(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(or()<=ee.DEBUG&&U("QueryEngine","Query:",ar(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(or()<=ee.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",ar(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Et(t))):N.resolve())}ps(e,t){if(Sf(t))return N.resolve(null);let r=Et(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Jc(t,null,"F"),r=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let a=ne(...s);return this.gs.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{let d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,Jc(t,null,"F")):this.vs(e,d,t,l)}))})))}ys(e,t,r,i){return Sf(t)||i.isEqual(Y.min())?N.resolve(null):this.gs.getDocuments(e,r).next(s=>{let a=this.bs(t,s);return this.Ds(t,a,r,i)?N.resolve(null):(or()<=ee.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ar(t)),this.vs(e,a,t,kv(i,Ii)).next(u=>u))})}bs(e,t){let r=new Ve(Np(e));return t.forEach((i,s)=>{Go(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;let s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return or()<=ee.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ar(t)),this.gs.getDocumentsMatchingQuery(e,t,Vn.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}};var Il="LocalStore",xw=3e8,Du=class{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new _e(Z),this.Ms=new Ut(s=>_l(s),yl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yu(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function Vw(n,e,t,r){return new Du(n,e,t,r)}async function Xp(n,e){let t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{let a=[],u=[],l=ne();for(let d of i){a.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}for(let d of s){u.push(d.batchId);for(let p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Lw(n,e){let t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){let y=d.batch,w=y.keys(),k=N.resolve();return w.forEach(O=>{k=k.next(()=>p.getEntry(l,O)).next(M=>{let x=d.docVersions.get(O);ue(x!==null,48541),M.version.compareTo(x)<0&&(y.applyToRemoteDocument(M,d),M.isValidDocument()&&(M.setReadTime(d.commitVersion),p.addEntry(M)))})}),k.next(()=>u.mutationQueue.removeMutationBatch(l,y))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=ne();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Zp(n){let e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Mw(n,e){let t=J(n),r=e.snapshotVersion,i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;let u=[];e.targetChanges.forEach((p,y)=>{let w=i.get(y);if(!w)return;u.push(t.hi.removeMatchingKeys(s,p.removedDocuments,y).next(()=>t.hi.addMatchingKeys(s,p.addedDocuments,y)));let k=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken($e.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),i=i.insert(y,k),function(M,x,X){return M.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=xw?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(w,k,p)&&u.push(t.hi.updateTargetData(s,k))});let l=Bt(),d=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),u.push(Fw(s,a,e.documentUpdates).next(p=>{l=p.Ls,d=p.ks})),!r.isEqual(Y.min())){let p=t.hi.getLastRemoteSnapshotVersion(s).next(y=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(p)}return N.waitFor(u).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,d)).next(()=>l)}).then(s=>(t.Fs=i,s))}function Fw(n,e,t){let r=ne(),i=ne();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Bt();return t.forEach((u,l)=>{let d=s.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):U(Il,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Ls:a,ks:i}})}function Uw(n,e){let t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bw(n,e){let t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.hi.allocateTargetId(r).next(a=>(i=new Si(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Nu(n,e,t){let r=J(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Nr(a))throw a;U(Il,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Uf(n,e,t){let r=J(n),i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){let y=J(l),w=y.Ms.get(p);return w!==void 0?N.resolve(y.Fs.get(w)):y.hi.getTargetData(d,p)}(r,a,Et(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:Y.min(),t?s:ne())).next(u=>(jw(r,ew(e),u),{documents:u,qs:s})))}function jw(n,e,t){let r=n.xs.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}var Io=class{constructor(){this.activeTargetIds=ow()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Ou=class{constructor(){this.Fo=new Io,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Io,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var xu=class{xo(e){}shutdown(){}};var Bf="ConnectivityMonitor",Eo=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){U(Bf,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){U(Bf,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var eo=null;function Vu(){return eo===null?eo=function(){return 268435456+Math.round(2147483648*Math.random())}():eo++,"0x"+eo.toString(16)}var bc="RestConnection",qw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},Lu=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===uo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){let a=Vu(),u=this.Go(e,t.toUriEncodedString());U(bc,`Sending RPC '${e}' ${a}:`,u,r);let l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,s);let{host:d}=new URL(u),p=Yt(d);return this.jo(e,u,l,r,p).then(y=>(U(bc,`Received RPC '${e}' ${a}: `,y),y),y=>{throw hn(bc,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",r),y})}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){let r=qw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}};var Mu=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var Ge="WebChannelConnection",Fu=class extends Lu{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){let a=Vu();return new Promise((u,l)=>{let d=new yc;d.setWithCredentials(!0),d.listenOnce(vc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case pi.NO_ERROR:let y=d.getResponseJson();U(Ge,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case pi.TIMEOUT:U(Ge,`RPC '${e}' ${a} timed out`),l(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case pi.HTTP_ERROR:let w=d.getStatus();if(U(Ge,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);let O=k?.error;if(O&&O.status&&O.message){let M=function(X){let K=X.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(K)>=0?K:D.UNKNOWN}(O.status);l(new B(M,O.message))}else l(new B(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new B(D.UNAVAILABLE,"Connection failed."));break;default:W(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{U(Ge,`RPC '${e}' ${a} completed.`)}});let p=JSON.stringify(i);U(Ge,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)})}P_(e,t,r){let i=Vu(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ec(),u=Ic(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let p=s.join("");U(Ge,`Creating RPC '${e}' stream ${i}: ${p}`,l);let y=a.createWebChannel(p,l);this.T_(y);let w=!1,k=!1,O=new Mu({Ho:x=>{k?U(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(w||(U(Ge,`Opening RPC '${e}' stream ${i} transport.`),y.open(),w=!0),U(Ge,`RPC '${e}' stream ${i} sending:`,x),y.send(x))},Yo:()=>y.close()}),M=(x,X,K)=>{x.listen(X,Q=>{try{K(Q)}catch(ae){setTimeout(()=>{throw ae},0)}})};return M(y,sr.EventType.OPEN,()=>{k||(U(Ge,`RPC '${e}' stream ${i} transport opened.`),O.s_())}),M(y,sr.EventType.CLOSE,()=>{k||(k=!0,U(Ge,`RPC '${e}' stream ${i} transport closed`),O.__(),this.I_(y))}),M(y,sr.EventType.ERROR,x=>{k||(k=!0,hn(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),O.__(new B(D.UNAVAILABLE,"The operation could not be completed")))}),M(y,sr.EventType.MESSAGE,x=>{var X;if(!k){let K=x.data[0];ue(!!K,16349);let Q=K,ae=Q?.error||((X=Q[0])===null||X===void 0?void 0:X.error);if(ae){U(Ge,`RPC '${e}' stream ${i} received error:`,ae);let be=ae.status,re=function(v){let E=ve[v];if(E!==void 0)return zp(E)}(be),T=ae.message;re===void 0&&(re=D.INTERNAL,T="Unknown error status: "+be+" with message "+ae.message),k=!0,O.__(new B(re,T)),y.close()}else U(Ge,`RPC '${e}' stream ${i} received:`,K),O.a_(K)}}),M(u,wc.STAT_EVENT,x=>{x.stat===Ys.PROXY?U(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Ys.NOPROXY&&U(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.o_()},0),O}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function Ac(){return typeof document<"u"?document:null}function $o(n){return new su(n,!0)}var To=class{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var jf="PersistentStream",bo=class{constructor(e,t,r,i,s,a,u,l){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new To(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{let i=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return U(jf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(U(jf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Uu=class extends bo{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=ww(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();let a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Tt(a.readTime):Y.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=uu(this.serializer),t.addTarget=function(s,a){let u,l=a.target;if(u=Qc(l)?{documents:Tw(s,l)}:{query:bw(s,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Gp(s,a.resumeToken);let d=ou(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(Y.min())>0){u.readTime=_o(s,a.snapshotVersion.toTimestamp());let d=ou(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);let r=Sw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=uu(this.serializer),t.removeTarget=e,this.k_(t)}},Bu=class extends bo{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=Ew(e.writeResults,e.commitTime),r=Tt(e.commitTime);return this.listener.ta(r,t)}na(){let e={};e.database=uu(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(r=>Iw(this.serializer,r))};this.k_(t)}};var ju=class{},qu=class extends ju{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,au(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(D.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(e,au(t,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(D.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},zu=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Lt(t),this._a=!1):U("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var Un="RemoteStore",Gu=class{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{jn(this)&&(U(Un,"Restarting streams for network reachability change."),await async function(l){let d=J(l);d.Ia.add(4),await Ni(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ho(d)}(this))})}),this.Aa=new zu(r,i)}};async function Ho(n){if(jn(n))for(let e of n.da)await e(!0)}async function Ni(n){for(let e of n.da)await e(!1)}function em(n,e){let t=J(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Al(t)?bl(t):Or(t).x_()&&Tl(t,e))}function El(n,e){let t=J(n),r=Or(t);t.Ta.delete(e),r.x_()&&tm(t,e),t.Ta.size===0&&(r.x_()?r.B_():jn(t)&&t.Aa.set("Unknown"))}function Tl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Or(n).H_(e)}function tm(n,e){n.Ra.$e(e),Or(n).Y_(e)}function bl(n){n.Ra=new iu({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.Aa.aa()}function Al(n){return jn(n)&&!Or(n).M_()&&n.Ta.size>0}function jn(n){return J(n).Ia.size===0}function nm(n){n.Ra=void 0}async function zw(n){n.Aa.set("Online")}async function Gw(n){n.Ta.forEach((e,t)=>{Tl(n,e)})}async function $w(n,e){nm(n),Al(n)?(n.Aa.la(e),bl(n)):n.Aa.set("Unknown")}async function Hw(n,e,t){if(n.Aa.set("Online"),e instanceof mo&&e.state===2&&e.cause)try{await async function(i,s){let a=s.cause;for(let u of s.targetIds)i.Ta.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ta.delete(u),i.Ra.removeTarget(u))}(n,e)}catch(r){U(Un,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(n,r)}else if(e instanceof hr?n.Ra.Ye(e):e instanceof po?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Y.min()))try{let r=await Zp(n.localStore);t.compareTo(r)>=0&&await function(s,a){let u=s.Ra.Pt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){let p=s.Ta.get(d);p&&s.Ta.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{let p=s.Ta.get(l);if(!p)return;s.Ta.set(l,p.withResumeToken($e.EMPTY_BYTE_STRING,p.snapshotVersion)),tm(s,l);let y=new Si(p.target,l,d,p.sequenceNumber);Tl(s,y)}),s.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){U(Un,"Failed to raise snapshot:",r),await Ao(n,r)}}async function Ao(n,e,t){if(!Nr(e))throw e;n.Ia.add(1),await Ni(n),n.Aa.set("Offline"),t||(t=()=>Zp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Un,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ho(n)})}function rm(n,e){return e().catch(t=>Ao(n,t,e))}async function Wo(n){let e=J(n),t=fn(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:dl;for(;Ww(e);)try{let i=await Uw(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,Kw(e,i)}catch(i){await Ao(e,i)}im(e)&&sm(e)}function Ww(n){return jn(n)&&n.Pa.length<10}function Kw(n,e){n.Pa.push(e);let t=fn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function im(n){return jn(n)&&!fn(n).M_()&&n.Pa.length>0}function sm(n){fn(n).start()}async function Qw(n){fn(n).na()}async function Jw(n){let e=fn(n);for(let t of n.Pa)e.X_(t.mutations)}async function Yw(n,e,t){let r=n.Pa.shift(),i=eu.from(r,e,t);await rm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Wo(n)}async function Xw(n,e){e&&fn(n).Z_&&await async function(r,i){if(function(a){return fw(a)&&a!==D.ABORTED}(i.code)){let s=r.Pa.shift();fn(r).N_(),await rm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wo(r)}}(n,e),im(n)&&sm(n)}async function qf(n,e){let t=J(n);t.asyncQueue.verifyOperationInProgress(),U(Un,"RemoteStore received new credentials");let r=jn(t);t.Ia.add(3),await Ni(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ho(t)}async function Zw(n,e){let t=J(n);e?(t.Ia.delete(2),await Ho(t)):e||(t.Ia.add(2),await Ni(t),t.Aa.set("Unknown"))}function Or(n){return n.Va||(n.Va=function(t,r,i){let s=J(t);return s.ia(),new Uu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:zw.bind(null,n),e_:Gw.bind(null,n),n_:$w.bind(null,n),J_:Hw.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Al(n)?bl(n):n.Aa.set("Unknown")):(await n.Va.stop(),nm(n))})),n.Va}function fn(n){return n.ma||(n.ma=function(t,r,i){let s=J(t);return s.ia(),new Bu(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Qw.bind(null,n),n_:Xw.bind(null,n),ea:Jw.bind(null,n),ta:Yw.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Wo(n)):(await n.ma.stop(),n.Pa.length>0&&(U(Un,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var $u=class n{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){let a=Date.now()+r,u=new n(e,t,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Sl(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),Nr(n))return new B(D.UNAVAILABLE,`${e}: ${n}`);throw n}var So=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=mi(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let r=new n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}};var Ro=class{constructor(){this.fa=new _e(H.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):W(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}},Rr=class n{constructor(e,t,r,i,s,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){let a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new n(e,t,So.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}};var Hu=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},Wu=class{constructor(){this.queries=zf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){let i=J(t),s=i.queries;i.queries=zf(),s.forEach((a,u)=>{for(let l of u.wa)l.onError(r)})})(this,new B(D.ABORTED,"Firestore shutting down"))}};function zf(){return new Ut(n=>Dp(n),zo)}async function om(n,e){let t=J(n),r=3,i=e.query,s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new Hu,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){let u=Sl(a,`Initialization of query '${ar(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Rl(t)}async function am(n,e){let t=J(n),r=e.query,i=3,s=t.queries.get(r);if(s){let a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function eI(n,e){let t=J(n),r=!1;for(let i of e){let s=i.query,a=t.queries.get(s);if(a){for(let u of a.wa)u.Ca(i)&&(r=!0);a.ya=i}}r&&Rl(t)}function tI(n,e,t){let r=J(n),i=r.queries.get(e);if(i)for(let s of i.wa)s.onError(t);r.queries.delete(e)}function Rl(n){n.Da.forEach(e=>{e.next()})}var Ku,Gf;(Gf=Ku||(Ku={})).Fa="default",Gf.Cache="cache";var Po=class{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new Rr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ku.Cache}};var Co=class{constructor(e){this.key=e}},ko=class{constructor(e){this.key=e}},Qu=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ne(),this.mutatedKeys=ne(),this.Xa=Np(e),this.eu=new So(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new Ro,i=t?t.eu:this.eu,s=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1,l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{let w=i.get(p),k=Go(this.query,y)?y:null,O=!!w&&this.mutatedKeys.has(w.key),M=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations),x=!1;w&&k?w.data.isEqual(k.data)?O!==M&&(r.track({type:3,doc:k}),x=!0):this.iu(w,k)||(r.track({type:2,doc:k}),x=!0,(l&&this.Xa(k,l)>0||d&&this.Xa(k,d)<0)&&(u=!0)):!w&&k?(r.track({type:0,doc:k}),x=!0):w&&!k&&(r.track({type:1,doc:w}),x=!0,(l||d)&&(u=!0)),x&&(k?(a=a.add(k),s=M?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){let s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let a=e.ru.pa();a.sort((p,y)=>function(k,O){let M=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{At:x})}};return M(k)-M(O)}(p.type,y.type)||this.Xa(p.doc,y.doc)),this.su(r),i=i!=null&&i;let u=t&&!i?this.ou():[],l=this.Za.size===0&&this.current&&!i?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new Rr(this.query,e.eu,s,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ro,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=ne(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new ko(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Co(r))}),t}uu(e){this.Ha=e.qs,this.Za=ne();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Rr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},Pl="SyncEngine",Ju=class{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}},Yu=class{constructor(e){this.key=e,this.lu=!1}},Xu=class{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ut(u=>Dp(u),zo),this.Tu=new Map,this.Iu=new Set,this.du=new _e(H.comparator),this.Eu=new Map,this.Au=new Pi,this.Ru={},this.Vu=new Map,this.mu=Ri.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function nI(n,e,t=!0){let r=fm(n),i,s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await cm(r,e,t,!0),i}async function rI(n,e){let t=fm(n);await cm(t,e,!0,!1)}async function cm(n,e,t,r){let i=await Bw(n.localStore,Et(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t),u;return r&&(u=await iI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&em(n.remoteStore,i),u}async function iI(n,e,t,r,i){n.gu=(y,w,k)=>async function(M,x,X,K){let Q=x.view.nu(X);Q.Ds&&(Q=await Uf(M.localStore,x.query,!1).then(({documents:T})=>x.view.nu(T,Q)));let ae=K&&K.targetChanges.get(x.targetId),be=K&&K.targetMismatches.get(x.targetId)!=null,re=x.view.applyChanges(Q,M.isPrimaryClient,ae,be);return Hf(M,x.targetId,re._u),re.snapshot}(n,y,w,k);let s=await Uf(n.localStore,e,!0),a=new Qu(e,s.qs),u=a.nu(s.documents),l=Ai.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,l);Hf(n,t,d._u);let p=new Ju(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function sI(n,e,t){let r=J(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(a=>!zo(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&El(r.remoteStore,i.targetId),Zu(r,i.targetId)}).catch(Dr)):(Zu(r,i.targetId),await Nu(r.localStore,i.targetId,!0))}async function oI(n,e){let t=J(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),El(t.remoteStore,r.targetId))}async function aI(n,e,t){let r=pI(n);try{let i=await function(a,u){let l=J(a),d=Ee.now(),p=u.reduce((k,O)=>k.add(O.key),ne()),y,w;return l.persistence.runTransaction("Locally write mutations","readwrite",k=>{let O=Bt(),M=ne();return l.Os.getEntries(k,p).next(x=>{O=x,O.forEach((X,K)=>{K.isValidDocument()||(M=M.add(X))})}).next(()=>l.localDocuments.getOverlayedDocuments(k,O)).next(x=>{y=x;let X=[];for(let K of u){let Q=dw(K,y.get(K.key).overlayedDocument);Q!=null&&X.push(new St(K.key,Q,Ap(Q.value.mapValue),rt.exists(!0)))}return l.mutationQueue.addMutationBatch(k,d,X,u)}).next(x=>{w=x;let X=x.applyToLocalDocumentSet(y,M);return l.documentOverlayCache.saveOverlays(k,x.batchId,X)})}).then(()=>({batchId:w.batchId,changes:xp(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new _e(Z)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d}(r,i.batchId,t),await Oi(r,i.changes),await Wo(r.remoteStore)}catch(i){let s=Sl(i,"Failed to persist write");t.reject(s)}}async function um(n,e){let t=J(n);try{let r=await Mw(t.localStore,e);e.targetChanges.forEach((i,s)=>{let a=t.Eu.get(s);a&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?ue(a.lu,14607):i.removedDocuments.size>0&&(ue(a.lu,42227),a.lu=!1))}),await Oi(t,r,e)}catch(r){await Dr(r)}}function $f(n,e,t){let r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){let i=[];r.Pu.forEach((s,a)=>{let u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){let l=J(a);l.onlineState=u;let d=!1;l.queries.forEach((p,y)=>{for(let w of y.wa)w.va(u)&&(d=!0)}),d&&Rl(l)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cI(n,e,t){let r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);let i=r.Eu.get(e),s=i&&i.key;if(s){let a=new _e(H.comparator);a=a.insert(s,ht.newNoDocument(s,Y.min()));let u=ne().add(s),l=new fo(Y.min(),new Map,new _e(Z),a,u);await um(r,l),r.du=r.du.remove(s),r.Eu.delete(e),Cl(r)}else await Nu(r.localStore,e,!1).then(()=>Zu(r,e,t)).catch(Dr)}async function uI(n,e){let t=J(n),r=e.batch.batchId;try{let i=await Lw(t.localStore,e);hm(t,r,null),lm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Oi(t,i)}catch(i){await Dr(i)}}async function lI(n,e,t){let r=J(n);try{let i=await function(a,u){let l=J(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(y=>(ue(y!==null,37113),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);hm(r,e,t),lm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Oi(r,i)}catch(i){await Dr(i)}}function lm(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function hm(n,e,t){let r=J(n),i=r.Ru[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Zu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||dm(n,r)})}function dm(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(El(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Cl(n))}function Hf(n,e,t){for(let r of t)r instanceof Co?(n.Au.addReference(r.key,e),hI(n,r)):r instanceof ko?(U(Pl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||dm(n,r.key)):W(19791,{yu:r})}function hI(n,e){let t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(U(Pl,"New document in limbo: "+t),n.Iu.add(r),Cl(n))}function Cl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new H(me.fromString(e)),r=n.mu.next();n.Eu.set(r,new Yu(t)),n.du=n.du.insert(t,r),em(n.remoteStore,new Si(Et(qo(t.path)),r,"TargetPurposeLimboResolution",mr.ue))}}async function Oi(n,e,t){let r=J(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,l)=>{a.push(r.gu(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){let y=d?!d.fromCache:(p=t?.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){i.push(d);let y=Pu.Es(l.targetId,d);s.push(y)}}))}),await Promise.all(a),r.hu.J_(i),await async function(l,d){let p=J(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>N.forEach(d,w=>N.forEach(w.Is,k=>p.persistence.referenceDelegate.addReference(y,w.targetId,k)).next(()=>N.forEach(w.ds,k=>p.persistence.referenceDelegate.removeReference(y,w.targetId,k)))))}catch(y){if(!Nr(y))throw y;U(Il,"Failed to update sequence numbers: "+y)}for(let y of d){let w=y.targetId;if(!y.fromCache){let k=p.Fs.get(w),O=k.snapshotVersion,M=k.withLastLimboFreeSnapshotVersion(O);p.Fs=p.Fs.insert(w,M)}}}(r.localStore,s))}async function dI(n,e){let t=J(n);if(!t.currentUser.isEqual(e)){U(Pl,"User change. New user:",e.toKey());let r=await Xp(t.localStore,e);t.currentUser=e,function(s,a){s.Vu.forEach(u=>{u.forEach(l=>{l.reject(new B(D.CANCELLED,a))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oi(t,r.Bs)}}function fI(n,e){let t=J(n),r=t.Eu.get(e);if(r&&r.lu)return ne().add(r.key);{let i=ne(),s=t.Tu.get(e);if(!s)return i;for(let a of s){let u=t.Pu.get(a);i=i.unionWith(u.view.tu)}return i}}function fm(n){let e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=um.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cI.bind(null,e),e.hu.J_=eI.bind(null,e.eventManager),e.hu.pu=tI.bind(null,e.eventManager),e}function pI(n){let e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lI.bind(null,e),e}var Pr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$o(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Vw(this.persistence,new ku,e.initialUser,this.serializer)}Du(e){return new vo(Ru.Vi,this.serializer)}bu(e){return new Ou}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};Pr.provider={build:()=>new Pr};var el=class extends Pr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ue(this.persistence.referenceDelegate instanceof wo,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new pu(r,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?st.withCacheSize(this.cacheSizeBytes):st.DEFAULT;return new vo(r=>wo.Vi(r,t),this.serializer)}};var Ci=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dI.bind(null,this.syncEngine),await Zw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Wu}()}createDatastore(e){let t=$o(e.databaseInfo.databaseId),r=function(s){return new Fu(s)}(e.databaseInfo);return function(s,a,u,l){return new qu(s,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,u){return new Gu(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>$f(this.syncEngine,t,0),function(){return Eo.C()?new Eo:new xu}())}createSyncEngine(e,t){return function(i,s,a,u,l,d,p){let y=new Xu(i,s,a,u,l,d);return p&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){let s=J(i);U(Un,"RemoteStore shutting down."),s.Ia.add(5),await Ni(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Ci.provider={build:()=>new Ci};var Do=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var pn="FirestoreClient",tl=class{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=xe.UNAUTHENTICATED,this.clientId=wi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{U(pn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(pn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let r=Sl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function Sc(n,e){n.asyncQueue.verifyOperationInProgress(),U(pn,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xp(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{hn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{U("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{hn("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function Wf(n,e){n.asyncQueue.verifyOperationInProgress();let t=await mI(n);U(pn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>qf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>qf(e.remoteStore,i)),n._onlineComponents=e}async function mI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(pn,"Using user provided OfflineComponentProvider");try{await Sc(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await Sc(n,new Pr)}}else U(pn,"Using default OfflineComponentProvider"),await Sc(n,new el(void 0));return n._offlineComponents}async function pm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(pn,"Using user provided OnlineComponentProvider"),await Wf(n,n._uninitializedComponentsProvider._online)):(U(pn,"Using default OnlineComponentProvider"),await Wf(n,new Ci))),n._onlineComponents}function gI(n){return pm(n).then(e=>e.syncEngine)}async function nl(n){let e=await pm(n),t=e.eventManager;return t.onListen=nI.bind(null,e.syncEngine),t.onUnlisten=sI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=rI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oI.bind(null,e.syncEngine),t}function _I(n,e,t={}){let r=new wt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,u,l,d){let p=new Do({next:w=>{p.Ou(),a.enqueueAndForget(()=>am(s,y));let k=w.docs.has(u);!k&&w.fromCache?d.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&l&&l.source==="server"?d.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new Po(qo(u.path),p,{includeMetadataChanges:!0,ka:!0});return om(s,y)}(await nl(n),n.asyncQueue,e,t,r)),r.promise}function mm(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var Kf=new Map;var gm="firestore.googleapis.com",Qf=!0,No=class{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gm,this.ssl=Qf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Qf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nw)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},Cr=class{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new No({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new No(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pc;switch(r.type){case"firstParty":return new Nc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let r=Kf.get(t);r&&(U("ComponentProvider","Removing Datastore"),Kf.delete(t),r.terminate())}(this),Promise.resolve()}};function yI(n,e,t,r={}){var i;n=nt(n,Cr);let s=Yt(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;s&&(ls(`https://${l}`),hs("Firestore",!0)),a.host!==gm&&a.host!==l&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let d=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!ft(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=xe.MOCK_USER;else{p=xh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);let w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new xe(w)}n._authCredentials=new Cc(new io(p,y))}}var Oo=class n{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Le=class n{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new an(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Di(t,n._jsonSchema))return new n(e,r||null,new H(me.fromString(t.referencePath)))}};Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Ie("string",Le._jsonSchemaVersion),referencePath:Ie("string")};var an=class n extends Oo{constructor(e,t,r){super(e,t,qo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new H(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function _m(n,e,...t){if(n=pe(n),tp("collection","path",e),n instanceof Cr){let r=me.fromString(e,...t);return pf(r),new an(n,null,r)}{if(!(n instanceof Le||n instanceof an))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(me.fromString(e,...t));return pf(r),new an(n.firestore,null,r)}}function kl(n,e,...t){if(n=pe(n),arguments.length===1&&(e=wi.newId()),tp("doc","path",e),n instanceof Cr){let r=me.fromString(e,...t);return ff(r),new Le(n,null,new H(r))}{if(!(n instanceof Le||n instanceof an))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(me.fromString(e,...t));return ff(r),new Le(n.firestore,n instanceof an?n.converter:null,new H(r))}}var Jf="AsyncQueue",xo=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new To(this,"async_queue_retry"),this.oc=()=>{let r=Ac();r&&U(Jf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;let t=Ac();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=Ac();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new wt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Nr(e))throw e;U(Jf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Lt("INTERNAL UNHANDLED ERROR: ",Yf(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let i=$u.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&W(47125,{hc:Yf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function Yf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function Xf(n){return function(t,r){if(typeof t!="object"||t===null)return!1;let i=t;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}var dt=class extends Cr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new xo,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new xo(e),this._firestoreClient=void 0,await e}}};function ym(n,e){let t=typeof n=="object"?n:ms(),r=typeof n=="string"?n:e||uo,i=Xr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=Oh("firestore");s&&yI(i,...s)}return i}function Ko(n){if(n._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vI(n),n._firestoreClient}function vI(n){var e,t,r;let i=n._freezeSettings(),s=function(u,l,d,p){return new Mc(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,mm(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new tl(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(u){let l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(n._componentsProvider))}var cn=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n($e.fromBase64String(e))}catch(t){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Di(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:Ie("string",cn._jsonSchemaVersion),bytes:Ie("string")};var Bn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var ki=class{constructor(e){this._methodName=e}};var un=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(Di(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Ie("string",un._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};var ln=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Di(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new B(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:Ie("string",ln._jsonSchemaVersion),vectorValues:Ie("object")};var wI=/^__.*__$/,rl=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new St(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fn(e,this.data,t,this.fieldTransforms)}},Vo=class{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new St(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function vm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ec:n})}}var il=class n{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;let r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Mo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(vm(this.Ec)&&wI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},sl=class{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$o(e)}Dc(e,t,r,i=!1){return new il({Ec:e,methodName:t,bc:r,path:tt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Qo(n){let e=n._freezeSettings(),t=$o(n._databaseId);return new sl(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Dl(n,e,t,r,i,s={}){let a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);Nl("Data must be an object, but it was:",a,r);let u=Em(r,a),l,d;if(s.merge)l=new ot(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){let p=[];for(let y of s.mergeFields){let w=ol(e,y,t);if(!a.contains(w))throw new B(D.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);bm(p,w)||p.push(w)}l=new ot(p),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new rl(new et(u),l,d)}var Lo=class n extends ki{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};function wm(n,e,t,r){let i=n.Dc(1,e,t);Nl("Data must be an object, but it was:",i,r);let s=[],a=et.empty();mn(r,(l,d)=>{let p=Ol(e,l,t);d=pe(d);let y=i.gc(p);if(d instanceof Lo)s.push(p);else{let w=Jo(d,y);w!=null&&(s.push(p),a.set(p,w))}});let u=new ot(s);return new Vo(a,u,i.fieldTransforms)}function Im(n,e,t,r,i,s){let a=n.Dc(1,e,t),u=[ol(e,r,t)],l=[i];if(s.length%2!=0)throw new B(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<s.length;w+=2)u.push(ol(e,s[w])),l.push(s[w+1]);let d=[],p=et.empty();for(let w=u.length-1;w>=0;--w)if(!bm(d,u[w])){let k=u[w],O=l[w];O=pe(O);let M=a.gc(k);if(O instanceof Lo)d.push(k);else{let x=Jo(O,M);x!=null&&(d.push(k),p.set(k,x))}}let y=new ot(d);return new Vo(p,y,a.fieldTransforms)}function Jo(n,e){if(Tm(n=pe(n)))return Nl("Unsupported field value:",e,n),Em(n,e);if(n instanceof ki)return function(r,i){if(!vm(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){let s=[],a=0;for(let u of r){let l=Jo(u,i.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=Ee.fromDate(r);return{timestampValue:_o(i.serializer,s)}}if(r instanceof Ee){let s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_o(i.serializer,s)}}if(r instanceof un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:Gp(i.serializer,r._byteString)};if(r instanceof Le){let s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ln)return function(a,u){return{mapValue:{fields:{[pl]:{stringValue:ml},[gr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return vl(u.serializer,d)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${hl(r)}`)}(n,e)}function Em(n,e){let t={};return _p(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,(r,i)=>{let s=Jo(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Tm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof un||n instanceof cn||n instanceof Le||n instanceof ki||n instanceof ln)}function Nl(n,e,t){if(!Tm(t)||!np(t)){let r=hl(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ol(n,e,t){if((e=pe(e))instanceof Bn)return e._internalPath;if(typeof e=="string")return Ol(n,e);throw Mo("Field path arguments must be of type string or ",n,!1,void 0,t)}var II=new RegExp("[~\\*/\\[\\]]");function Ol(n,e,t){if(e.search(II)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bn(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mo(n,e,t,r,i){let s=r&&!r.isEmpty(),a=i!==void 0,u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new B(D.INVALID_ARGUMENT,u+n+l)}function bm(n,e){return n.some(t=>t.isEqual(e))}var Fo=class{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new al(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(Am("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},al=class extends Fo{data(){return super.data()}};function Am(n,e){return typeof e=="string"?Ol(n,e):e instanceof Bn?e._internalPath:e._delegate._internalPath}function EI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var cl=class{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ft(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return mn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;let s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[gr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>de(a.doubleValue));return new ln(s)}convertGeoPoint(e){return new un(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=jo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ti(e));default:return null}}convertTimestamp(e){let t=Mt(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=me.fromString(e);ue(Jp(r),9688,{name:e});let i=new lo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||Lt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}};function xl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}var Nn=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},On=class n extends Fo{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(Am("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};On._jsonSchemaVersion="firestore/documentSnapshot/1.0",On._jsonSchema={type:Ie("string",On._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};var dr=class extends On{data(e={}){return super.data(e)}},fr=class n{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new dr(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{let l=new dr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Nn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{let l=new dr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Nn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter),d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:TI(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function TI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}function Sm(n){n=nt(n,Le);let e=nt(n.firestore,dt);return _I(Ko(e),n._key).then(t=>Nm(e,n,t))}fr._jsonSchemaVersion="firestore/querySnapshot/1.0",fr._jsonSchema={type:Ie("string",fr._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};var Uo=class extends cl{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}};function Rm(n,e,t){n=nt(n,Le);let r=nt(n.firestore,dt),i=xl(n.converter,e,t);return xi(r,[Dl(Qo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,rt.none())])}function Pm(n,e,t,...r){n=nt(n,Le);let i=nt(n.firestore,dt),s=Qo(i),a;return a=typeof(e=pe(e))=="string"||e instanceof Bn?Im(s,"updateDoc",n._key,e,t,r):wm(s,"updateDoc",n._key,e),xi(i,[a.toMutation(n._key,rt.exists(!0))])}function Cm(n){return xi(nt(n.firestore,dt),[new Sr(n._key,rt.none())])}function km(n,e){let t=nt(n.firestore,dt),r=kl(n),i=xl(n.converter,e);return xi(t,[Dl(Qo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,rt.exists(!1))]).then(()=>r)}function Dm(n,...e){var t,r,i;n=pe(n);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Xf(e[a])||(s=e[a++]);let u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Xf(e[a])){let y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let l,d,p;if(n instanceof Le)d=nt(n.firestore,dt),p=qo(n._key.path),l={next:y=>{e[a]&&e[a](Nm(d,n,y))},error:e[a+1],complete:e[a+2]};else{let y=nt(n,Oo);d=nt(y.firestore,dt),p=y._query;let w=new Uo(d);l={next:k=>{e[a]&&e[a](new fr(d,w,y,k))},error:e[a+1],complete:e[a+2]},EI(n._query)}return function(w,k,O,M){let x=new Do(M),X=new Po(k,x,O);return w.asyncQueue.enqueueAndForget(async()=>om(await nl(w),X)),()=>{x.Ou(),w.asyncQueue.enqueueAndForget(async()=>am(await nl(w),X))}}(Ko(d),p,u,l)}function xi(n,e){return function(r,i){let s=new wt;return r.asyncQueue.enqueueAndForget(async()=>aI(await gI(r),i,s)),s.promise}(Ko(n),e)}function Nm(n,e,t){let r=t.docs.get(e._key),i=new Uo(n);return new On(n,i,e._key,r,new Nn(t.hasPendingWrites,t.fromCache),e.converter)}var ul=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Qo(e)}set(e,t,r){this._verifyNotCommitted();let i=Rc(e,this._firestore),s=xl(i.converter,t,r),a=Dl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,rt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();let s=Rc(e,this._firestore),a;return a=typeof(t=pe(t))=="string"||t instanceof Bn?Im(this._dataReader,"WriteBatch.update",s._key,t,r,i):wm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,rt.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Rc(e,this._firestore);return this._mutations=this._mutations.concat(new Sr(t._key,rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Rc(n,e){if((n=pe(n)).firestore!==e)throw new B(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Om(n){return Ko(n=nt(n,dt)),new ul(n,e=>xi(n,e))}(function(e,t=!0){(function(i){kr=i})(tn),en(new it("firestore",(r,{instanceIdentifier:i,options:s})=>{let a=r.getProvider("app").getImmediate(),u=new dt(new kc(r.getProvider("auth-internal")),new Oc(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),ut(uf,lf,e),ut(uf,lf,"esm2017")})();function bI(n){let e=xa(n);return{auth:gc(e),db:ym(e)}}var Qe={pair:"2111",two:"221",trio:"311",full:"32",quad:"41",penta:"5",diff:"11111"},Bm=[{k:"sum_low",t:"Extremo baixo",s:"Soma 5\u201310",p:"28:1",f:n=>n.sum<=10?28:null},{k:"sum_small",t:"Pequeno",s:"Soma 5\u201317",p:"1:1",f:n=>!n.penta&&n.sum<=17?1:null},{k:"sum_even",t:"Par",s:"Soma par",p:"1:1",f:n=>!n.penta&&n.sum%2===0?1:null},{k:"sum_mid",t:"Central",s:"Soma 17 ou 18",p:"7:2",f:n=>n.sum===17||n.sum===18?3.5:null,hot:!0},{k:"sum_odd",t:"\xCDmpar",s:"Soma \xEDmpar",p:"1:1",f:n=>!n.penta&&n.sum%2===1?1:null},{k:"sum_big",t:"Grande",s:"Soma 18\u201330",p:"1:1",f:n=>!n.penta&&n.sum>=18?1:null},{k:"sum_high",t:"Extremo alto",s:"Soma 26\u201330",p:"28:1",f:n=>n.sum>=26?28:null}],jm=[{k:"c_pair",t:"Par",s:"S\xF3 um par",p:"11:10",f:n=>n.pat===Qe.pair?1.1:null},{k:"c_two",t:"Dois pares",s:"2 + 2",p:"3:1",f:n=>n.pat===Qe.two?3:null},{k:"c_trio",t:"Trio",s:"3 iguais",p:"5:1",f:n=>n.pat===Qe.trio?5:null},{k:"c_full",t:"Full house",s:"Trio + par",p:"24:1",f:n=>n.pat===Qe.full?24:null},{k:"c_quad",t:"Quadra",s:"4 iguais",p:"48:1",f:n=>n.pat===Qe.quad?48:null},{k:"c_penta",t:"Penta",s:"5 iguais",p:"1200:1",f:n=>n.pat===Qe.penta?1200:null,hot:!0},{k:"c_diff",t:"Todos diferentes",s:"Nenhum repetido",p:"9:1",f:n=>n.pat===Qe.diff?9:null},{k:"s3",t:"Sequ\xEAncia de 3",s:"3 seguidos",p:"6:5",f:n=>n.run(3)?1.2:null},{k:"s4",t:"Sequ\xEAncia de 4",s:"4 seguidos",p:"5:1",f:n=>n.run(4)?5:null},{k:"s5",t:"Sequ\xEAncia de 5",s:"1 a 5 ou 2 a 6",p:"30:1",f:n=>n.run(5)?30:null}],AI=[null,0,1,4,20,100],zn=[];for(let n=1;n<=6;n++)zn.push({k:"n"+n+"_1",n,single:!0,t:"N\xFAmero "+n,s:"Casa do dado",p:"1 dado devolve",f:e=>AI[e.c[n]]}),zn.push({k:"n"+n+"_2",n,t:"Pelo menos 2",p:"4:1",f:e=>e.c[n]>=2?4:null}),zn.push({k:"n"+n+"_3",n,t:"Pelo menos 3",p:"25:1",f:e=>e.c[n]>=3?25:null}),zn.push({k:"n"+n+"_4",n,t:"Pelo menos 4",p:"280:1",f:e=>e.c[n]>=4?280:null}),zn.push({k:"n"+n+"_5",n,t:"Penta de "+n,p:"7500:1",f:e=>e.c[n]===5?7500:null,hot:!0});var qm=[...Bm,...jm,...zn],Ke=Object.fromEntries(qm.map(n=>[n.k,n])),qn=n=>n.n&&!n.single?n.t+" de "+n.n:n.t;function Mi(n){let e=[0,0,0,0,0,0,0];n.forEach(s=>e[s]++);let t=e.slice(1).filter(Boolean).sort((s,a)=>a-s).join(""),r=n.reduce((s,a)=>s+a,0);return{c:e,pat:t,sum:r,run:s=>{for(let a=1;a<=7-s;a++){let u=!0;for(let l=0;l<s;l++)if(!e[a+l]){u=!1;break}if(u)return!0}return!1},penta:t===Qe.penta}}var SI=(n,e)=>e==null?0:n+Math.floor(n*e+1e-9);function Ll(n){let e={[Qe.pair]:"Par",[Qe.two]:"Dois pares",[Qe.trio]:"Trio",[Qe.full]:"Full house",[Qe.quad]:"Quadra",[Qe.penta]:"Penta",[Qe.diff]:"Todos diferentes"},t=["Soma "+n.sum,e[n.pat]];return n.run(5)?t.push("Sequ\xEAncia de 5"):n.run(4)?t.push("Sequ\xEAncia de 4"):n.run(3)&&t.push("Sequ\xEAncia de 3"),t.join(" \xB7 ")}var Xo=[];for(let n=1;n<=6;n++)for(let e=1;e<=6;e++)for(let t=1;t<=6;t++)for(let r=1;r<=6;r++)for(let i=1;i<=6;i++)Xo.push(Mi([n,e,t,r,i]));function zm(n,e){let t=1;for(let r of n){let i=Ke[r].f(e);if(i==null)return 0;t*=i+1}return t}var Ml=new Map;function Bl(n){let e=n.slice().sort().join("|");if(Ml.has(e))return Ml.get(e);let t=0,r=0,i=0;for(let a of Xo){let u=zm(n,a);u>0&&(t++,r+=u,u>i&&(i=u))}let s={p:t/Xo.length,ev:r/Xo.length,max:i};return Ml.set(e,s),s}function Fl(n){if(!Array.isArray(n)||n.length<2||n.length>6)return"A m\xFAltipla precisa de 2 a 6 sele\xE7\xF5es";if(new Set(n).size!==n.length||n.some(t=>!Ke[t]))return"Sele\xE7\xF5es inv\xE1lidas";let e=Bl(n);return e.p===0?"Estas sele\xE7\xF5es n\xE3o podem ganhar ao mesmo tempo":e.ev>=1?"Combina\xE7\xE3o n\xE3o permitida: as sele\xE7\xF5es dependem umas das outras e a m\xFAltipla pagaria acima do justo":null}var Ul=["#E8C46A","#7FC8F8","#F4A99B","#B5E48C","#D7A6F5","#F9B46B","#8EE3D3","#FFFFFF","#F5E663","#A0B4FF"],RI=[{v:1,bg:"#FFFFFF",fg:"#1B1B1B"},{v:5,bg:"#C62828",fg:"#FFFFFF"},{v:10,bg:"#1A2F6B",fg:"#FFFFFF"},{v:25,bg:"#2E8B57",fg:"#FFFFFF"},{v:100,bg:"#111111",fg:"#FFFFFF"},{v:500,bg:"#6A3BA8",fg:"#FFFFFF"},{v:1e3,bg:"#F2C200",fg:"#1B1B1B"}],jl={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},V=n=>document.getElementById(n),fe=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),te=n=>Number(n).toLocaleString("pt-PT"),xm=n=>n.toLocaleString("pt-PT",{maximumFractionDigits:2}),Vm=n=>JSON.parse(JSON.stringify(n));function Vi(n,e){let t='<span class="die '+(e||"")+(n?"":" empty")+'" aria-hidden="true">';for(let r=0;r<9;r++)t+='<i class="'+(n&&jl[n].includes(r)?"on":"")+'"></i>';return t+"</span>"}var Lm=null;function Te(n){let e=V("toast");e.textContent=n,e.hidden=!1,clearTimeout(Lm),Lm=setTimeout(()=>e.hidden=!0,2600)}var Mm={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}}};function Li(){let n=new Uint8Array(1);for(;;)if(crypto.getRandomValues(n),n[0]<252)return n[0]%6+1}var PI=()=>[Li(),Li(),Li(),Li(),Li()],Fm="@jogadores.sicbo",CI=/^[A-Za-z0-9_.-]{3,20}$/,Yo={rounds:0,staked:0,returned:0,best:0},Um=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,kI=n=>new Promise(e=>setTimeout(e,n));function DI(n){let e=n&&n.code||"";return e.includes("email-already-in-use")?"Esse utilizador j\xE1 existe. Escolha outro nome ou entre com a palavra-passe.":e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Utilizador ou palavra-passe errados.":e.includes("weak-password")?"A palavra-passe precisa de pelo menos 6 caracteres.":e.includes("too-many-requests")?"Demasiadas tentativas. Espere um pouco e tente de novo.":e.includes("operation-not-allowed")?"O in\xEDcio de sess\xE3o com palavra-passe n\xE3o est\xE1 ativo no Firebase (passo 1 do guia de atualiza\xE7\xE3o).":e.includes("network")?"Sem liga\xE7\xE3o. Tente outra vez.":"N\xE3o foi poss\xEDvel entrar ("+(e||"erro")+")."}function Gm(n){let e=(window.SICBO_CONFIG||{}).firebase,t=V("app");if(!e||!e.apiKey||String(e.apiKey).includes("COLE")){t.innerHTML='<section class="card narrow"><h2>Falta configurar</h2><p>Abra o ficheiro <b>config.js</b> e cole a configura\xE7\xE3o do seu projeto Firebase, como explicado no guia.</p></section>';return}let{auth:r,db:i}=n.init(e),s={user:null,uid:null,game:void 0,players:{},bets:[],users:{},role:Mm.get("sicbo5-role")||"player",authReady:!1},a={chip:25,mode:"bet",legs:[],stake:0,dice:[],tab:"mesa",busy:!1,authTab:"login"},u={game:n.doc(i,"games","main"),players:n.collection(i,"players"),bets:n.collection(i,"bets"),users:n.collection(i,"users")},l=_=>(_&&_.code==="permission-denied"?"A\xE7\xE3o recusada pelo servidor":"Sem liga\xE7\xE3o. Tente outra vez.")+(_&&_.code?" ["+_.code+"]":""),d=_=>{console.error(_),Te(l(_))},p=[],y=()=>{p.forEach(_=>{try{_()}catch{}}),p=[]};function w(){p.push(n.onSnapshot(u.game,_=>{s.game=_.exists()?_.data():null,Gi(),m()},d)),p.push(n.onSnapshot(u.players,_=>{let I={};_.docs.forEach(A=>I[A.id]={id:A.id,...A.data()}),s.players=I,m()},d)),p.push(n.onSnapshot(u.bets,_=>{s.bets=_.docs.map(I=>({id:I.id,...I.data()})).sort((I,A)=>I.ts-A.ts),m()},d)),p.push(n.onSnapshot(u.users,_=>{let I={};_.docs.forEach(A=>I[A.id]={id:A.id,...A.data()}),s.users=I,s.usersLoaded=!0,X(),m()},d))}n.onAuthStateChanged(r,_=>{let I=(_?_.uid:null)===s.uid&&s.authReady;if(s.authReady=!0,!I){if(y(),b="",s.user=_||null,s.uid=_?_.uid:null,s.game=void 0,s.players={},s.bets=[],s.users={},s.usersLoaded=!1,De.init=!1,!_){a.authTab="login",m();return}w(),m()}});let k=()=>s.role==="bank"&&M()?"bank":"player",O=(_,I)=>{_._last!==I&&(_._last=I,_.innerHTML=I)},M=()=>!!(s.user&&!s.user.isAnonymous&&s.users[s.uid]&&s.users[s.uid].role==="admin"),x=!1;async function X(){let _=s.user;if(!_||_.isAnonymous||!s.usersLoaded||s.users[_.uid]||x)return;x=!0;let I=K&&K.toLowerCase()+Fm===(_.email||"").toLowerCase()?K:(_.email||"").split("@")[0];try{await n.setDoc(n.doc(i,"users",_.uid),{name:I,color:Ul[Math.floor(Math.random()*Ul.length)],created:Date.now(),stats:{...Yo}})}catch(A){d(A)}x=!1}let K=null,Q=()=>s.players[s.uid]||null,ae=()=>s.users[s.uid]||null,be=_=>s.bets.filter(I=>I.uid===_&&s.game&&I.round===s.game.round),re=_=>be(_).reduce((I,A)=>I+A.a,0),T=_=>{let I=s.players[_];return I?I.chips-re(_):0},g=()=>Object.values(s.players).sort((_,I)=>_.joined-I.joined),v=_=>s.players[_]?s.players[_].color:"#999",E=_=>s.players[_]?s.players[_].name:"Jogador que saiu",b="";function R(){return s.authReady?!s.user||s.user.isAnonymous?"login":s.game===void 0||!s.usersLoaded?"connecting":s.role==="bank"&&M()?s.game?"bank":"openTable":s.game?Q()?"player":"sit":"noGame":"connecting"}function m(){let _=R();_!==b&&(b=_,a.legs=[],a.mode="bet",t.innerHTML=xr[_](),Ui(_)),zi[_]&&zi[_](),gn()}let He=()=>'<span class="rolelink" data-rolelink></span>';function gn(){let _=M()?k()==="bank"?'<button class="link" data-act="role" data-v="player">Jogar como jogador</button>':'<button class="link" data-act="role" data-v="bank">Ir para a banca</button>':"";document.querySelectorAll("[data-rolelink]").forEach(I=>{I.innerHTML!==_&&(I.innerHTML=_)})}let Fi=()=>{let _=(A,C)=>'<button class="zone '+(C||"")+(A.hot?" hot":"")+'" data-act="zone" data-k="'+A.k+'" id="z-'+A.k+'" aria-label="'+fe(qn(A))+", paga "+fe(A.p)+'">'+(A.single?Vi(A.n):'<span class="z-t">'+fe(A.t)+"</span>")+(A.s?'<span class="z-s">'+fe(A.s)+"</span>":"")+'<span class="z-p">'+fe(A.p)+'</span><span class="stack" id="st-'+A.k+'"></span></button>',I="";for(let A=1;A<=6;A++){let C=zn.filter(j=>j.n===A);I+='<div class="ncol">'+_(C[0],"single")+C.slice(1).map(j=>_(j,"row")).join("")+"</div>"}return'<section class="sec"><div class="sec-h"><h2>Somas dos 5 dados</h2><span class="note">Pequeno, Grande, Par e \xCDmpar perdem se sair penta</span></div><div class="grid g-sum">'+Bm.map(A=>_(A)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Combina\xE7\xF5es e sequ\xEAncias</h2><span class="note">Cada combina\xE7\xE3o paga s\xF3 a sua casa \xB7 sequ\xEAncias: pelo menos esses n\xFAmeros seguidos</span></div><div class="grid g-combo">'+jm.map(A=>_(A)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Aposta num n\xFAmero</h2><span class="note">Casa do dado: 1 dado devolve \xB7 2 \u2192 1:1 \xB7 3 \u2192 4:1 \xB7 4 \u2192 20:1 \xB7 5 \u2192 100:1</span></div><div class="grid g-num">'+I+"</div></section>"},jt=_=>'<header><h1>SIC BO \xB7 5 DADOS</h1><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span>'+(_||"")+"</div></header>",_n=()=>RI.map(_=>'<button class="chip num'+(_.v>=1e3?" big":"")+'" data-act="chip" data-v="'+_.v+'" style="background:'+_.bg+";color:"+_.fg+'" aria-label="Ficha de '+_.v+'">'+_.v+"</button>").join(""),xr={connecting:()=>'<section class="card narrow"><p>A ligar \xE0 mesa\u2026</p></section>',login:()=>'<section class="card narrow"><h1 class="big">SIC BO \xB7 5 DADOS</h1><div class="seg" role="tablist"><button role="tab" data-act="authTab" data-v="login" id="at-login">Entrar</button><button role="tab" data-act="authTab" data-v="new" id="at-new">Criar conta</button></div><form id="authForm" class="stack-form"><label for="aUser">Utilizador</label><input class="field" id="aUser" maxlength="20" required autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Ex.: rita"><label for="aPass">Palavra-passe</label><input class="field" id="aPass" type="password" minlength="6" required autocomplete="current-password"><div id="aPass2Wrap" hidden class="stack-form"><label for="aPass2">Repetir palavra-passe</label><input class="field" id="aPass2" type="password" minlength="6" autocomplete="new-password"></div><button class="btn primary" type="submit" id="aSubmit">Entrar</button></form><p class="note" id="authNote" role="alert"></p><p class="note">A conta fica guardada: entra com ela em qualquer telem\xF3vel e mant\xE9m o saldo e as estat\xEDsticas.</p></section>',openTable:()=>'<section class="card narrow"><h1 class="big">Abrir a mesa</h1><form id="openForm" class="stack-form"><label for="init">Fichas iniciais por jogador</label><input class="field num" id="init" type="number" min="0" step="5" value="1000" inputmode="numeric"><button class="btn primary" type="submit">Abrir a mesa</button></form><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+He()+"</div></section>",noGame:()=>'<section class="card narrow"><h2>A mesa ainda n\xE3o est\xE1 aberta</h2><p>Quando a banca abrir a mesa, esta p\xE1gina atualiza sozinha.</p><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+He()+"</div></section>",sit:()=>'<section class="card narrow"><h1 class="big">SIC BO \xB7 5 DADOS</h1><p id="sitHello"></p><button class="btn primary" data-act="sit" id="sitBtn">Sentar \xE0 mesa</button><div id="statsSit"></div><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button>'+He()+"</div></section>",player:()=>jt('<span class="me" id="meBox"></span>')+'<div class="banner" id="banner"></div>'+Fi()+'<section class="sec" id="myMultiSec" hidden><div class="sec-h"><h2>As minhas m\xFAltiplas</h2><span class="note">S\xF3 pagam se todas as sele\xE7\xF5es ganharem</span></div><div class="mlist" id="mlist"></div></section><section class="sec" id="resultSec" hidden><h2>\xDAltima ronda</h2><div class="read" id="resHead"></div><div class="res" id="res"></div></section><section class="panel"><div class="sec-h"><h2>A minha conta</h2><button class="link" data-act="logout">Sair da conta</button></div><div id="statsBox"></div></section><section class="sec"><div class="sec-h"><h2>Hist\xF3rico</h2>'+He()+'</div><ul class="hist" id="hist"></ul></section><div class="bar"><div class="bar-in"><div class="slip" id="slip" hidden></div><div class="tools"><div class="chips" role="group" aria-label="Valor da ficha">'+_n()+'</div></div><div class="tools"><div class="modes"><button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="multi" id="mMulti">M\xFAltipla</button><button class="take" data-act="repeat" id="repeatBtn">Repetir</button></div><div class="tot" id="tot"></div></div></div></div>',bank:()=>jt()+'<nav class="tabs" role="tablist"><button role="tab" data-act="tab" data-v="mesa" id="t-mesa">Mesa</button><button role="tab" data-act="tab" data-v="jogadores" id="t-jogadores">Jogadores</button><button role="tab" data-act="tab" data-v="historico" id="t-historico">Hist\xF3rico</button></nav><div id="p-mesa" class="tabp"><section class="panel"><div class="sec-h"><h2>Apostas</h2><span class="note" id="betSummary"></span></div><div class="row-actions"><button class="btn" data-act="toggleOpen" id="openBtn"></button><div class="seg" role="group" aria-label="Dados"><button data-act="diceMode" data-v="fisico" id="dm-fisico">Dados f\xEDsicos</button><button data-act="diceMode" data-v="virtual" id="dm-virtual">Dados virtuais</button></div></div><div class="who" id="who"></div></section>'+Fi()+'<section class="sec" id="allMultiSec" hidden><div class="sec-h"><h2>M\xFAltiplas em jogo</h2></div><div class="mlist" id="mlist"></div></section><section class="panel" id="dados"><div class="sec-h"><h2>Resultado dos dados</h2><span class="note" id="diceHint"></span></div><div id="physical" class="stack-form"><div class="slots" id="slots"></div><div class="pad" id="pad">'+[1,2,3,4,5,6].map(_=>'<button data-act="face" data-v="'+_+'" aria-label="Face '+_+'">'+Vi(_)+"</button>").join("")+'</div><div class="read" id="readout" aria-live="polite"></div><div class="row-actions"><button class="btn primary" data-act="settle" id="settle">Liquidar ronda</button><button class="btn" data-act="clearDice">Limpar dados</button></div></div><div id="virtual" class="stack-form" hidden><button class="btn primary roll" data-act="roll" id="rollBtn">Lan\xE7ar dados</button><p class="note">O site lan\xE7a os 5 dados ao acaso, mostra a anima\xE7\xE3o a todos e liquida a ronda.</p></div></section><section class="sec" id="resultSec" hidden><div class="sec-h"><h2>\xDAltima ronda</h2><button class="btn sm warn" data-act="undo" id="undoBtn">Corrigir: anular esta ronda</button></div><div class="read" id="resHead"></div><div class="res" id="res"></div></section></div><div id="p-jogadores" class="tabp" hidden><section class="panel"><h2>Convidar jogadores</h2><p class="note">Envie este link. Cada pessoa cria uma conta (utilizador e palavra-passe) e senta-se \xE0 mesa. S\xF3 contas com papel de admin veem a banca.</p><div class="row-actions"><input class="field" id="shareUrl" readonly aria-label="Link da mesa"><button class="btn sm" data-act="copy">Copiar link</button></div></section><section class="sec"><h2>Saldos na mesa</h2><div id="plist"></div></section><section class="sec"><h2>Contas registadas</h2><div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Utilizador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Maior pr\xE9mio</th><th scope="col">Admin</th></tr></thead><tbody id="ulist"></tbody></table></div></section><section class="panel"><h2>Defini\xE7\xF5es</h2><div class="row-actions"><label class="note" for="initChips">Fichas iniciais de quem se senta</label><input class="field num" id="initChips" type="number" min="0" step="5" inputmode="numeric" style="width:120px"><button class="btn sm" data-act="saveInit">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="reset" id="resetBtn">Nova partida (rep\xF5e saldos; as contas ficam)</button>'+He()+'</div></section></div><div id="p-historico" class="tabp" hidden><section class="sec"><h2>Hist\xF3rico</h2><ul class="hist" id="hist"></ul></section></div>'};function Ui(_){_==="login"&&V("authForm").addEventListener("submit",async I=>{I.preventDefault();let A=V("aUser").value.trim(),C=V("aPass").value,j=V("authNote");if(j.textContent="",!CI.test(A)){j.textContent="O utilizador deve ter 3 a 20 caracteres: letras, n\xFAmeros, ponto, h\xEDfen ou _ (sem espa\xE7os nem acentos).";return}let z=A.toLowerCase()+Fm;V("aSubmit").disabled=!0;try{if(a.authTab==="new"){if(C!==V("aPass2").value){j.textContent="As palavras-passe n\xE3o s\xE3o iguais.",V("aSubmit").disabled=!1;return}K=A,await n.createUserWithEmailAndPassword(r,z,C)}else await n.signInWithEmailAndPassword(r,z,C)}catch(G){j.textContent=DI(G),console.error(G)}V("aSubmit")&&(V("aSubmit").disabled=!1)}),_==="openTable"&&V("openForm").addEventListener("submit",async I=>{I.preventDefault();try{await n.setDoc(u.game,Bi(Math.max(0,Math.floor(+V("init").value||0)),"fisico"))}catch(A){d(A)}}),_==="bank"&&(V("shareUrl").value=location.href.split("#")[0],V("initChips").value=s.game?s.game.initial:1e3)}let Bi=(_,I)=>({round:1,open:!0,initial:_,diceMode:I||"fisico",roll:null,lastResult:null,history:[],lastBets:[],undo:null,created:Date.now()});function at(_,I){let A=I&&a.dice.length===5?Mi(a.dice):null;qm.forEach(C=>{let j=V("z-"+C.k);if(!j)return;let z={};if(_.filter(G=>G.kind==="s"&&G.k===C.k).forEach(G=>z[G.uid]=(z[G.uid]||0)+G.a),V("st-"+C.k).innerHTML=Object.entries(z).map(([G,F])=>'<span class="pill num"><span class="dot" style="background:'+v(G)+'"></span>'+te(F)+"</span>").join(""),j.classList.remove("win","push","dim","sel"),a.mode==="multi"&&a.legs.includes(C.k)&&j.classList.add("sel"),A){let G=C.f(A);j.classList.add(G==null?"dim":G===0?"push":"win")}})}function Ae(_){let I=s.game&&s.game.lastResult;if(V("resultSec").hidden=!I,!I)return;V("resHead").innerHTML="Ronda "+I.round+" \xB7 "+I.dice.map(C=>Vi(C,"sm")).join(" ")+" \xB7 "+fe(I.desc)+(I.virtual?' \xB7 <span class="note">dados virtuais</span>':"");let A=_?I.per.filter(C=>C.uid===_):I.per;V("res").innerHTML=A.length?A.map(C=>{let j=C.ret-C.st;return'<div class="rcard"><div class="rhead"><span class="dot" style="background:'+C.color+'"></span>'+fe(C.name)+'<span class="net num '+(j>=0?"pos":"neg")+'">'+(j>0?"+":"")+te(j)+'</span></div><ul class="rlines">'+C.lines.map(z=>"<li><span>"+fe(z.n)+" \xB7 "+te(z.a)+'</span><span class="num '+(z.v?"":z.pay>0?"pos":"neg")+'">'+(z.v?"anulada: "+fe(z.v):z.pay>0?"recebe "+te(z.pay):"perde")+"</span></li>").join("")+"</ul></div>"}).join(""):'<p class="note">'+(_?"N\xE3o apostou nesta ronda.":"Ningu\xE9m apostou nesta ronda.")+"</p>"}function ji(){let _=s.game&&s.game.history||[];V("hist").innerHTML=_.length?_.map(I=>'<li><span class="hr">Ronda '+I.round+'</span><span class="hd">'+I.dice.map(A=>Vi(A,"sm")).join("")+'</span><span class="note">Soma '+I.sum+'</span><span class="hn">'+I.per.map(A=>'<span class="num '+(A.net>=0?"pos":"neg")+'">'+fe(A.name)+" "+(A.net>0?"+":"")+te(A.net)+"</span>").join("")+"</span></li>").join(""):'<li class="note">As rondas liquidadas aparecem aqui.</li>'}function qt(_){_=_||Yo;let I=_.returned-_.staked;return'<dl class="stats"><div><dt>Rondas jogadas</dt><dd class="num">'+te(_.rounds)+'</dd></div><div><dt>Total apostado</dt><dd class="num">'+te(_.staked)+'</dd></div><div><dt>Resultado acumulado</dt><dd class="num '+(I>=0?"pos":"neg")+'">'+(I>0?"+":"")+te(I)+'</dd></div><div><dt>Maior pr\xE9mio</dt><dd class="num gold">'+te(_.best)+"</dd></div></dl>"}function qi(_,I,A){return _.map(C=>{let j=Bl(C.legs);return'<div class="mcard"><div class="mh">'+(I?'<span class="dot" style="background:'+v(C.uid)+'"></span>'+fe(E(C.uid)):"M\xFAltipla")+'<span class="num">'+te(C.a)+' fichas</span></div><div class="ml">'+C.legs.map(z=>Ke[z]?fe(qn(Ke[z]))+" ("+fe(Ke[z].p)+")":"?").join(" + ")+'</div><div class="mf"><span>Recebe at\xE9 <b class="num gold">'+te(Math.floor(C.a*j.max+1e-9))+"</b></span>"+(A?'<button class="btn sm warn" data-act="cancelMulti" data-id="'+C.id+'">Cancelar</button>':"")+"</div></div>"}).join("")}function zt(){V("roundNo").textContent=s.game?s.game.round:"\u2013";let _=s.game&&s.game.open;V("state").className="state "+(_?"on":"off"),V("state").textContent=_?"Apostas abertas":"Apostas fechadas"}let zi={login(){V("at-login").setAttribute("aria-selected",String(a.authTab==="login")),V("at-new").setAttribute("aria-selected",String(a.authTab==="new")),V("aPass2Wrap").hidden=a.authTab!=="new",V("aPass2").required=a.authTab==="new",V("aPass").autocomplete=a.authTab==="new"?"new-password":"current-password",V("aSubmit").textContent=a.authTab==="new"?"Criar conta":"Entrar"},sit(){let _=ae();V("sitHello").innerHTML="Ol\xE1, <b>"+fe(_?_.name:"\u2026")+'</b>. Senta-se com <b class="gold">'+te(s.game.initial)+"</b> fichas.",V("sitBtn").disabled=!_,V("statsSit").innerHTML=_?qt(_.stats):""},player(){let _=Q();if(!_)return;zt();let I=s.game.open,A=be(s.uid);V("meBox").innerHTML='<span class="dot" style="background:'+_.color+'"></span>'+fe(_.name)+' \xB7 <b class="num">'+te(T(s.uid))+"</b>",V("banner").className="banner "+(I?"on":"off"),V("banner").textContent=I?"Fa\xE7a as suas apostas. A banca fecha as apostas antes de lan\xE7ar os dados.":"Apostas fechadas. A banca est\xE1 a lan\xE7ar os dados.",document.querySelectorAll(".zone").forEach(G=>G.disabled=!I),at(A,!1),document.querySelectorAll(".chip").forEach(G=>G.setAttribute("aria-pressed",String(+G.dataset.v===a.chip))),V("mTake").setAttribute("aria-pressed",String(a.mode==="take")),V("mMulti").setAttribute("aria-pressed",String(a.mode==="multi"));let C=(s.game.lastBets||[]).filter(G=>G.uid===s.uid);V("repeatBtn").disabled=!I||!C.length||A.length>0,V("tot").innerHTML='Em jogo <b class="num">'+te(re(s.uid))+'</b> \xB7 Dispon\xEDvel <b class="num">'+te(T(s.uid))+"</b>";let j=A.filter(G=>G.kind==="m");V("myMultiSec").hidden=!j.length,V("mlist").innerHTML=qi(j,!1,I);let z=ae();V("statsBox").innerHTML='<p class="note">Utilizador: <b>'+fe(z?z.name:_.name)+"</b></p>"+qt(z&&z.stats),Zo(),Ae(s.uid),ji()},bank(){zt(),["mesa","jogadores","historico"].forEach(F=>{V("p-"+F).hidden=a.tab!==F,V("t-"+F).setAttribute("aria-selected",String(a.tab===F))});let _=s.game,I=_&&_.open,A=_&&_.diceMode==="virtual",C=s.bets.filter(F=>_&&F.round===_.round);V("openBtn").textContent=I?"Fechar apostas":"Reabrir apostas",V("openBtn").className="btn "+(I&&!A?"primary":""),V("dm-fisico").setAttribute("aria-pressed",String(!A)),V("dm-virtual").setAttribute("aria-pressed",String(!!A));let j=C.reduce((F,ie)=>F+ie.a,0);V("betSummary").textContent=C.length?te(j)+" fichas em "+C.length+" aposta(s)":"Sem apostas nesta ronda",V("who").innerHTML=g().map(F=>{let ie=re(F.id),ce=ie>F.chips;return'<span class="wchip'+(ce?" over":"")+'"><span class="dot" style="background:'+F.color+'"></span>'+fe(F.name)+' <b class="num">'+te(ie)+"</b>"+(ce?" \xB7 excede saldo":"")+"</span>"}).join("")||'<span class="note">Ainda n\xE3o se sentou ningu\xE9m. Partilhe o link no separador Jogadores.</span>',document.querySelectorAll(".zone").forEach(F=>F.disabled=!0),at(C,!A);let z=C.filter(F=>F.kind==="m");if(V("allMultiSec").hidden=!z.length,V("mlist").innerHTML=qi(z,!0,!1),V("physical").hidden=!!A,V("virtual").hidden=!A,V("diceHint").textContent=A?"Modo virtual":"Toque nas faces \xB7 toque num dado para o apagar",A)V("rollBtn").disabled=a.busy,V("rollBtn").textContent=a.busy?"A lan\xE7ar\u2026":I?"Fechar apostas e lan\xE7ar dados":"Lan\xE7ar dados";else{let F="";for(let ce=0;ce<5;ce++){let Be=a.dice[ce];F+='<button class="slot" data-act="slot" data-i="'+ce+'" aria-label="'+(Be?"Dado "+(ce+1)+": "+Be:"Dado "+(ce+1)+" vazio")+'">'+Vi(Be||0)+"</button>"}V("slots").innerHTML=F;let ie=a.dice.length===5?Mi(a.dice):null;V("readout").innerHTML=ie?"<b>"+fe(Ll(ie))+"</b>"+(I?" \xB7 feche as apostas antes de liquidar":""):a.dice.length?"Faltam "+(5-a.dice.length)+" dados":"Introduza os 5 dados lan\xE7ados",V("settle").disabled=!ie||I||a.busy}Ae(null),V("undoBtn").hidden=!(_&&_.undo),document.activeElement&&document.activeElement.closest&&document.activeElement.closest("#plist")||O(V("plist"),g().map(F=>'<div class="prow"><div class="nm"><span class="dot" style="background:'+F.color+'"></span><b>'+fe(F.name)+'</b></div><div class="bal num">'+te(F.chips)+(re(F.id)?'<div class="note">'+te(re(F.id))+" em jogo</div>":"")+'</div><div class="adj"><input class="field num" id="amt-'+F.id+'" type="number" min="1" inputmode="numeric" placeholder="Qtd." aria-label="Quantidade para '+fe(F.name)+'"><button class="btn sm" data-act="give" data-id="'+F.id+'">Dar</button><button class="btn sm" data-act="takeChips" data-id="'+F.id+'">Tirar</button><button class="btn sm warn" data-act="remove" data-id="'+F.id+'">Remover</button></div></div>').join("")||'<p class="note">Ainda n\xE3o h\xE1 jogadores sentados.</p>');let G=Object.values(s.users).sort((F,ie)=>(F.name||"").localeCompare(ie.name||""));O(V("ulist"),G.length?G.map(F=>{let ie=F.stats||Yo,ce=ie.returned-ie.staked;return'<tr><td><span class="dot" style="background:'+(F.color||"#999")+'"></span> '+fe(F.name)+(s.players[F.id]?"":' <span class="note">(fora da mesa)</span>')+'</td><td class="num">'+te(ie.rounds)+'</td><td class="num">'+te(ie.staked)+'</td><td class="num '+(ce>=0?"pos":"neg")+'">'+(ce>0?"+":"")+te(ce)+'</td><td class="num">'+te(ie.best)+"</td><td>"+(F.id===s.uid?'<span class="note">Admin (voc\xEA)</span>':'<button class="btn sm'+(F.role==="admin"?" warn":"")+'" data-act="toggleAdmin" data-id="'+F.id+'">'+(F.role==="admin"?"Tirar admin":"Tornar admin")+"</button>")+"</td></tr>"}).join(""):'<tr><td colspan="6" class="note">Ainda ningu\xE9m criou conta.</td></tr>'),ji()}};function Zo(){let _=V("slip");if(_.hidden=a.mode!=="multi",_.hidden||document.activeElement&&document.activeElement.id==="stake")return;let I=a.legs.length,A='<div class="slip-h"><span><strong>M\xFAltipla</strong> \xB7 '+(I?I+" sele\xE7"+(I>1?"\xF5es":"\xE3o"):"toque nas casas para escolher")+"</span>",C=I?Bl(a.legs):null;C&&(A+="<span>Paga at\xE9 <b>\xD7"+xm(C.max)+"</b> \xB7 ganha em "+xm(C.p*100)+"% das jogadas</span>"),A+="</div>",I&&(A+='<div class="legs">'+a.legs.map(j=>'<button class="leg" data-act="leg" data-k="'+j+'" aria-label="Tirar '+fe(qn(Ke[j]))+'">'+fe(qn(Ke[j]))+' <span class="num">'+fe(Ke[j].p)+'</span><span class="x" aria-hidden="true">\xD7</span></button>').join("")+"</div>"),A+='<div class="slip-a"><label class="note" for="stake">Aposta</label><input class="field num" id="stake" type="number" min="1" inputmode="numeric" value="'+(a.stake||"")+'" placeholder="Fichas"><span class="note">'+(I>1&&a.stake?'Recebe at\xE9 <b class="num gold">'+te(Math.floor(a.stake*C.max+1e-9))+"</b>":"Toque nas fichas para somar")+'</span><button class="btn sm primary" data-act="placeMulti" '+(I>1&&a.stake>0&&s.game.open?"":"disabled")+'>Fazer m\xFAltipla</button><button class="btn sm" data-act="clearSlip">Limpar</button></div>',_.innerHTML=A}let De={init:!1,round:0,roll:null},Ue=null,Je=document.createElement("div");Je.className="reveal",Je.hidden=!0,Je.setAttribute("role","dialog"),Je.setAttribute("aria-modal","true"),Je.setAttribute("aria-label","Resultado dos dados"),Je.innerHTML='<div class="rv-box"><div class="rv-dice" id="rvDice"></div><div class="rv-desc" id="rvDesc" aria-live="polite"></div><div class="rv-label" id="rvLabel"></div><div class="rv-amt num" id="rvAmt"></div><div class="rv-sub" id="rvSub"></div><button class="btn" data-act="closeReveal" id="rvClose">Continuar</button></div>',document.body.appendChild(Je);let Gt=null;function Vr(_){let I='<span class="bdie" aria-hidden="true">';for(let A=0;A<9;A++)I+='<i class="'+(_&&jl[_].includes(A)?"on":"")+'"></i>';return I+"</span>"}function Gn(_,I){_.querySelectorAll("i").forEach((A,C)=>A.classList.toggle("on",jl[I].includes(C)))}function Gi(){let _=s.game;if(!_)return;if(!De.init){De.init=!0,De.round=_.lastResult?_.lastResult.round:0,De.roll=_.roll?_.roll.id:null;return}_.roll&&_.roll.id!==De.roll&&(De.roll=_.roll.id,$n(_.roll.dice,_.roll.round,2400));let I=_.lastResult;if(I&&I.round>De.round){if(De.round=I.round,(!Ue||Ue.round!==I.round)&&$n(I.dice,I.round,1100),!Ue)return;Ue.result=I,Lr()}else I&&I.round<De.round?De.round=I.round:I||(De.round=0)}function $n(_,I,A){if(k()!=="bank"&&!Q())return;clearTimeout(Gt),Ue={round:I,result:null,shown:!1},Um()&&(A=0),V("rvDice").innerHTML=_.map(()=>Vr(1)).join(""),V("rvDesc").textContent=A?"A lan\xE7ar os dados\u2026":"",V("rvLabel").textContent="",V("rvAmt").textContent="",V("rvSub").textContent="",V("rvAmt").className="rv-amt num",V("rvClose").hidden=!0,Je.hidden=!1;let j=[...V("rvDice").children];j.forEach((G,F)=>{G.style.animationDelay=F*70+"ms",G.classList.add("tumble")}),Ue.tumble=(async()=>{let G=performance.now(),F=60;for(;performance.now()-G<A;)j.forEach(ie=>Gn(ie,1+Math.floor(Math.random()*6))),await kI(F),F=Math.min(180,F*1.06);j.forEach((ie,ce)=>{ie.classList.remove("tumble"),Gn(ie,_[ce]),ie.classList.add("land")}),V("rvDesc").textContent=Ll(Mi(_))})();let z=Ue;Ue.tumble.then(()=>{z.tumbled=!0,Lr()})}function $i(_,I,A){return Um()||A<=0?(_.textContent=te(I),Promise.resolve()):new Promise(C=>{let j=performance.now(),z=G=>{let F=Math.min(1,(G-j)/A),ie=1-Math.pow(1-F,3);_.textContent=te(Math.round(I*ie)),F<1?requestAnimationFrame(z):C()};requestAnimationFrame(z)})}async function Lr(){let _=Ue;if(!_||!_.tumbled||!_.result||_.shown)return;_.shown=!0;let I=_.result,A=V("rvLabel"),C=V("rvAmt"),j=V("rvSub"),z=3500;if(k()==="bank"){let G=I.per.reduce((ce,Be)=>ce+Be.st,0),F=I.per.reduce((ce,Be)=>ce+Be.ret,0),ie=G-F;A.textContent=ie>=0?"A banca ganha":"A banca paga",C.className="rv-amt num "+(ie>=0?"pos":"neg"),await $i(C,Math.abs(ie),1200),j.textContent=I.per.length?I.per.map(ce=>ce.name+" "+(ce.ret-ce.st>0?"+":"")+te(ce.ret-ce.st)).join(" \xB7 "):"Ningu\xE9m apostou nesta ronda."}else{let G=I.per.find(F=>F.uid===s.uid);if(!G)A.textContent="N\xE3o apostou nesta ronda",z=2500;else if(G.ret>0){A.textContent="Ganhou",C.className="rv-amt num pos win",j.textContent="",await $i(C,G.ret,Math.min(2600,900+G.ret/G.st*120)),C.classList.add("pop");let F=G.ret-G.st;j.textContent="Apostou "+te(G.st)+" \xB7 "+(F>0?"lucro +"+te(F):F===0?"recuperou o que apostou":"no total perdeu "+te(-F)),z=6e3}else A.textContent="N\xE3o foi desta",C.className="rv-amt num neg",C.textContent="\u2212"+te(G.st),j.textContent="Boa sorte na pr\xF3xima ronda."}V("rvClose").hidden=!1,clearTimeout(Gt),Gt=setTimeout(Hn,z)}function Hn(){clearTimeout(Gt),Je.hidden=!0,Ue=null}async function yn(_){try{return await n.addDoc(u.bets,{uid:s.uid,round:s.game.round,ts:Date.now(),..._}),!0}catch(I){return d(I),!1}}async function Hi(_){if(!(k()!=="player"||!Q()||!s.game.open)){if(a.mode==="multi"){let I=a.legs.indexOf(_);if(I>=0){a.legs.splice(I,1),m();return}if(a.legs.length>=6){Te("M\xE1ximo de 6 sele\xE7\xF5es por m\xFAltipla");return}let A=a.legs.concat(_);if(A.length>1){let C=Fl(A);if(C){Te(qn(Ke[_])+": "+C.charAt(0).toLowerCase()+C.slice(1));return}}a.legs=A,m();return}if(a.mode==="take"){let I=be(s.uid).filter(A=>A.kind==="s"&&A.k===_);if(!I.length){Te("N\xE3o tem fichas nesta casa");return}try{await n.deleteDoc(n.doc(i,"bets",I[I.length-1].id))}catch(A){d(A)}return}if(T(s.uid)<a.chip){Te("N\xE3o tem fichas suficientes (dispon\xEDvel: "+te(T(s.uid))+")");return}await yn({kind:"s",k:_,a:a.chip})}}async function ea(){let _=Math.floor(a.stake||0),I=Fl(a.legs);if(I){Te(I);return}if(_>0){if(T(s.uid)<_){Te("S\xF3 tem "+te(T(s.uid))+" fichas dispon\xEDveis");return}await yn({kind:"m",legs:a.legs.slice(),a:_})&&(a.legs=[],a.stake=0,Te("M\xFAltipla de "+te(_)+" fichas registada"),m())}}async function Mr(){let _=(s.game.lastBets||[]).filter(C=>C.uid===s.uid),I=T(s.uid),A=0;for(let C of _){if(C.a>I){A++;continue}I-=C.a,await yn(C.kind==="m"?{kind:"m",legs:C.legs,a:C.a}:{kind:"s",k:C.k,a:C.a})}A&&Te(A+" aposta(s) ficaram de fora por falta de fichas")}async function Fr(){let _=ae();if(!_||!s.game)return;let I=Object.values(s.players).map(C=>C.color),A=I.includes(_.color)&&Ul.find(C=>!I.includes(C))||_.color;try{await n.setDoc(n.doc(i,"players",s.uid),{name:_.name,chips:s.game.initial,color:A,joined:Date.now()})}catch(C){d(C)}}async function Wn(_,I){let A=s.game;if(!_||_.length!==5||A.open)return!1;let C=Mi(_),j=s.bets.filter($=>$.round===A.round),z={},G={},F={};g().forEach($=>{F[$.id]=$.chips,G[$.id]=$.chips});let ie={...G},ce=[];j.forEach($=>{let Re=s.players[$.uid];if(!Re)return;let Pe=z[Re.id]||(z[Re.id]={uid:Re.id,name:Re.name,color:Re.color,st:0,ret:0,best:0,lines:[]}),vn=$.kind==="m",$t=vn?"M\xFAltipla: "+($.legs||[]).map(Wt=>Ke[Wt]?qn(Ke[Wt]):"?").join(" + "):Ke[$.k]?qn(Ke[$.k]):"?",Ye=Math.floor($.a),ye=null;if(Ye>0?(vn?Fl($.legs):!Ke[$.k])?ye="aposta inv\xE1lida":Ye>ie[Re.id]&&(ye="sem saldo"):ye="valor inv\xE1lido",ye){Pe.lines.push({n:$t,a:$.a,pay:0,v:ye});return}ie[Re.id]-=Ye;let Ht=vn?Math.floor(Ye*zm($.legs,C)+1e-9):SI(Ye,Ke[$.k].f(C));Pe.st+=Ye,Pe.ret+=Ht,G[Re.id]+=Ht-Ye,Ht>Pe.best&&(Pe.best=Ht),Pe.lines.push({n:$t,a:Ye,pay:Ht}),ce.push(vn?{uid:$.uid,kind:"m",legs:$.legs,a:Ye}:{uid:$.uid,kind:"s",k:$.k,a:Ye})});let Be=Object.values(z).map(({best:$,...Re})=>Re),Rt=n.writeBatch(i);Object.keys(G).forEach($=>{G[$]!==F[$]&&Rt.update(n.doc(i,"players",$),{chips:G[$]})});let Qn={};Object.values(z).forEach($=>{let Re=s.users[$.uid];if(!Re||$.st===0)return;let Pe={...Yo,...Re.stats||{}};Qn[$.uid]=Pe,Rt.update(n.doc(i,"users",$.uid),{stats:{rounds:Pe.rounds+1,staked:Pe.staked+$.st,returned:Pe.returned+$.ret,best:Math.max(Pe.best,$.best)}})}),s.bets.forEach($=>Rt.delete(n.doc(i,"bets",$.id))),Rt.update(u.game,Vm({round:A.round+1,open:!0,lastResult:{round:A.round,dice:_.slice(),desc:Ll(C),per:Be,virtual:!!I},history:[{round:A.round,dice:_.slice(),sum:C.sum,per:Be.map($=>({name:$.name,net:$.ret-$.st}))}].concat(A.history||[]).slice(0,30),lastBets:ce,undo:{round:A.round,dice:_.slice(),virtual:!!I,chips:F,stats:Qn,bets:s.bets.map($=>{let{id:Re,...Pe}=$;return{id:Re,d:Pe}}),lastResult:A.lastResult||null,lastBets:A.lastBets||[]}}));try{return await Rt.commit(),!0}catch($){return d($),!1}}async function Ne(){a.busy||(a.busy=!0,m(),await Wn(a.dice,!1)&&(a.dice=[]),a.busy=!1,m())}async function Me(){if(!(a.busy||!s.game)){a.busy=!0,m();try{let _=s.game,I=PI(),A=Date.now().toString(36)+Math.random().toString(36).slice(2,6);De.roll=A,await n.updateDoc(u.game,{open:!1,roll:{id:A,round:_.round,dice:I}}),$n(I,_.round,2400),await Ue.tumble,await Wn(I,!0)}catch(_){d(_)}a.busy=!1,m()}}async function Kn(){let _=s.game.undo;if(!_)return;let I=n.writeBatch(i);Object.entries(_.chips).forEach(([A,C])=>{s.players[A]&&I.update(n.doc(i,"players",A),{chips:C})}),Object.entries(_.stats||{}).forEach(([A,C])=>{s.users[A]&&I.update(n.doc(i,"users",A),{stats:C})}),s.bets.forEach(A=>I.delete(n.doc(i,"bets",A.id))),_.bets.forEach(A=>I.set(n.doc(i,"bets",A.id),A.d)),I.update(u.game,Vm({round:_.round,open:!1,roll:null,lastResult:_.lastResult,lastBets:_.lastBets,history:(s.game.history||[]).slice(1),undo:null}));try{await I.commit(),_.virtual||(a.dice=_.dice),Te(_.virtual?"Ronda anulada. As apostas voltaram; pode lan\xE7ar de novo.":"Ronda anulada. Corrija os dados e liquide de novo."),m()}catch(A){d(A)}}async function Wi(){let _=n.writeBatch(i);Object.keys(s.players).forEach(I=>_.delete(n.doc(i,"players",I))),s.bets.forEach(I=>_.delete(n.doc(i,"bets",I.id))),_.set(u.game,Bi(s.game?s.game.initial:1e3,s.game?s.game.diceMode:"fisico"));try{await _.commit(),a.dice=[],Te("Partida nova. Os jogadores voltam a sentar-se com as suas contas.")}catch(I){d(I)}}let Se=null;document.addEventListener("click",async _=>{let I=_.target.closest("[data-act]");if(!I)return;let A=I.dataset.act;if(A==="role")s.role=I.dataset.v,Mm.set("sicbo5-role",s.role),b="",m(),window.scrollTo(0,0);else if(A==="toggleAdmin"){let C=s.users[I.dataset.id];if(!C||C.id===s.uid)return;if(Se!==I){Se&&(Se.textContent=Se.dataset.label),Se=I,I.dataset.label=I.textContent,I.textContent="Confirmar",setTimeout(()=>{Se===I&&(I.textContent=I.dataset.label,Se=null)},4e3);return}Se=null,V("ulist")._last=null;let j=C.role!=="admin";try{await n.updateDoc(n.doc(i,"users",C.id),{role:j?"admin":"player"}),Te(C.name+(j?" passou a ter acesso \xE0 banca":" deixou de ter acesso \xE0 banca"))}catch(z){d(z)}}else if(A==="authTab")a.authTab=I.dataset.v,V("authNote").textContent="",m();else if(A==="logout")try{await n.signOut(r)}catch(C){d(C)}else if(A==="sit")Fr();else if(A==="zone")Hi(I.dataset.k);else if(A==="chip")a.chip=+I.dataset.v,a.mode==="multi"&&(a.stake=(a.stake||0)+a.chip),m();else if(A==="mode")a.mode=a.mode===I.dataset.v?"bet":I.dataset.v,m();else if(A==="leg")a.legs=a.legs.filter(C=>C!==I.dataset.k),m();else if(A==="clearSlip")a.legs=[],a.stake=0,m();else if(A==="placeMulti")ea();else if(A==="repeat")Mr();else if(A==="cancelMulti")try{await n.deleteDoc(n.doc(i,"bets",I.dataset.id)),Te("M\xFAltipla cancelada")}catch(C){d(C)}else if(A==="tab")a.tab=I.dataset.v,m();else if(A==="toggleOpen")try{await n.updateDoc(u.game,{open:!s.game.open})}catch(C){d(C)}else if(A==="diceMode"){if(s.game.diceMode!==I.dataset.v)try{await n.updateDoc(u.game,{diceMode:I.dataset.v})}catch(C){d(C)}}else if(A==="roll")Me();else if(A==="face")a.dice.length<5&&(a.dice.push(+I.dataset.v),m());else if(A==="slot"){let C=+I.dataset.i;a.dice[C]&&(a.dice.splice(C,1),m())}else if(A==="clearDice")a.dice=[],m();else if(A==="settle")Ne();else if(A==="undo")Kn();else if(A==="closeReveal")Hn();else if(A==="copy"){let C=V("shareUrl");try{await navigator.clipboard.writeText(C.value),Te("Link copiado")}catch{C.select(),Te("Selecionei o link: copie-o")}}else if(A==="saveInit"){let C=Math.max(0,Math.floor(+V("initChips").value||0));try{await n.updateDoc(u.game,{initial:C}),Te("Quem se sentar a seguir come\xE7a com "+te(C)+" fichas")}catch(j){d(j)}}else if(A==="give"||A==="takeChips"){let C=s.players[I.dataset.id],j=V("amt-"+C.id),z=Math.floor(+j.value);if(!(z>0)){Te("Escreva a quantidade de fichas"),j.focus();return}if(A==="takeChips"&&z>C.chips){Te(C.name+" s\xF3 tem "+te(C.chips)+" fichas");return}try{await n.updateDoc(n.doc(i,"players",C.id),{chips:C.chips+(A==="give"?z:-z)}),j.value="",j.blur(),Te((A==="give"?"Dadas ":"Tiradas ")+te(z)+" fichas a "+C.name)}catch(G){d(G)}}else if(A==="remove"||A==="reset"){if(Se!==I){Se&&(Se.textContent=Se.dataset.label),Se=I,I.dataset.label=I.textContent,I.textContent="Confirmar",setTimeout(()=>{Se===I&&(I.textContent=I.dataset.label,Se=null)},4e3);return}if(Se=null,I.textContent=I.dataset.label,V("plist")&&(V("plist")._last=null),A==="reset")Wi();else{let C=I.dataset.id,j=n.writeBatch(i);j.delete(n.doc(i,"players",C)),s.bets.filter(z=>z.uid===C).forEach(z=>j.delete(n.doc(i,"bets",z.id)));try{await j.commit(),Te("Jogador removido da mesa")}catch(z){d(z)}}}}),document.addEventListener("keydown",_=>{_.key==="Escape"&&!Je.hidden&&Hn()}),document.addEventListener("input",_=>{_.target.id==="stake"&&(a.stake=Math.max(0,Math.floor(+_.target.value||0)))}),document.addEventListener("change",_=>{_.target.id==="stake"&&(_.target.blur(),m())}),m()}Gm(Vl);
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
