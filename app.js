var Fg=Object.defineProperty;var Ug=(n,e)=>{for(var t in e)Fg(n,t,{get:e[t],enumerable:!0})};var jd={};Ug(jd,{addDoc:()=>_g,collection:()=>rg,createUserWithEmailAndPassword:()=>pu,deleteDoc:()=>gg,doc:()=>Ld,getDoc:()=>fg,increment:()=>wg,init:()=>Kb,onAuthStateChanged:()=>gu,onSnapshot:()=>yg,setDoc:()=>pg,signInAnonymously:()=>fu,signInWithEmailAndPassword:()=>mu,signOut:()=>_u,updateDoc:()=>mg,writeBatch:()=>bg});var fh=()=>{};var gh=function(n){let e=[],t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Bg=function(n){let e=[],t=0,s=0;for(;t<n.length;){let r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){let i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){let i=n[t++],a=n[t++],c=n[t++],d=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{let i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},_h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){let i=n[r],a=r+1<n.length,c=a?n[r+1]:0,d=r+2<n.length,p=d?n[r+2]:0,y=i>>2,v=(i&3)<<4|c>>4,A=(c&15)<<2|p>>6,x=p&63;d||(x=64,a||(A=64)),s.push(t[y],t[v],t[A],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){let i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;let p=r<n.length?t[n.charAt(r)]:64;++r;let v=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||p==null||v==null)throw new yc;let A=i<<2|c>>4;if(s.push(A),p!==64){let x=c<<4&240|p>>2;if(s.push(x),v!==64){let B=p<<6&192|v;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},yc=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},jg=function(n){let e=gh(n);return _h.encodeByteArray(e,!0)},Xr=function(n){return jg(n).replace(/\./g,"")},uo=function(n){try{return _h.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function yh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var qg=()=>yh().__FIREBASE_DEFAULTS__,zg=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&uo(n[1]);return e&&JSON.parse(e)},lo=()=>{try{return fh()||qg()||zg()||Gg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wc=n=>{var e,t;return(t=(e=lo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vh=n=>{let e=wc(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},bc=()=>{var n;return(n=lo())===null||n===void 0?void 0:n.config},Ic=n=>{var e;return(e=lo())===null||e===void 0?void 0:e[`_${n}`]};var co=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}};function kn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ho(n){return(await fetch(n,{credentials:"include"})).ok}function wh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xr(JSON.stringify(t)),Xr(JSON.stringify(a)),""].join(".")}var Yr={};function $g(){let n={prod:[],emulator:[]};for(let e of Object.keys(Yr))Yr[e]?n.emulator.push(e):n.prod.push(e);return n}function Hg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var ph=!1;function fo(n,e){if(typeof window>"u"||typeof document>"u"||!kn(window.location.host)||Yr[n]===e||Yr[n]||ph)return;Yr[n]=e;function t(A){return`__firebase__banner__${A}`}let s="__firebase__banner",i=$g().prod.length>0;function a(){let A=document.getElementById(s);A&&A.remove()}function c(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function d(A,x){A.setAttribute("width","24"),A.setAttribute("id",x),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function p(){let A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{ph=!0,a()},A}function y(A,x){A.setAttribute("id",x),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function v(){let A=Hg(s),x=t("text"),B=document.getElementById(x)||document.createElement("span"),$=t("learnmore"),F=document.getElementById($)||document.createElement("a"),te=t("preprendIcon"),K=document.getElementById(te)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){let ne=A.element;c(ne),y(F,$);let _e=p();d(K,te),ne.append(K,B,F,_e),document.body.appendChild(ne)}i?(B.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,B.innerText="Preview backend running in this workspace."),B.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Kg(){var n;let e=(n=lo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ih(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Eh(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Th(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ah(){let n=Ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sh(){return!Kg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ec(){try{return typeof indexedDB=="object"}catch{return!1}}function Rh(){return new Promise((n,e)=>{try{let t=!0,s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}var Wg="FirebaseError",yt=class n extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Wg,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}},cn=class{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){let s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Qg(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new yt(r,c,s)}};function Qg(n,e){return n.replace(Jg,(t,s)=>{let r=e[s];return r!=null?String(r):`<${s}?>`})}var Jg=/\{\$([^}]+)}/g;function Ph(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gt(n,e){if(n===e)return!0;let t=Object.keys(n),s=Object.keys(e);for(let r of t){if(!s.includes(r))return!1;let i=n[r],a=e[r];if(mh(i)&&mh(a)){if(!Gt(i,a))return!1}else if(i!==a)return!1}for(let r of s)if(!t.includes(r))return!1;return!0}function mh(n){return n!==null&&typeof n=="object"}function Ks(n){let e=[];for(let[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ws(n){let e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){let[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qs(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kh(n,e){let t=new vc(n,e);return t.subscribe.bind(t)}var vc=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Yg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=_c),r.error===void 0&&(r.error=_c),r.complete===void 0&&(r.complete=_c);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Yg(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _c(){}var uI=4*60*60*1e3;function Te(n){return n&&n._delegate?n._delegate:n}var Rt=class{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var cs="[DEFAULT]";var Tc=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let s=new co;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let s=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zg(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(let[t,s]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);try{let i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(let[i,a]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){var s;let r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);let a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let s=this.onInitCallbacks.get(t);if(s)for(let r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Xg(n){return n===cs?void 0:n}function Zg(n){return n.instantiationMode==="EAGER"}var po=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Tc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var e_=[],ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));var t_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},n_=ue.INFO,s_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},r_=(n,e,...t)=>{if(e<n.logLevel)return;let s=new Date().toISOString(),r=s_[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Cn=class{constructor(e){this.name=e,this._logLevel=n_,this._logHandler=r_,this._userLogHandler=null,e_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}};var i_=(n,e)=>e.some(t=>n instanceof t),Ch,Dh;function o_(){return Ch||(Ch=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a_(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Nh=new WeakMap,Sc=new WeakMap,Oh=new WeakMap,Ac=new WeakMap,Pc=new WeakMap;function c_(n){let e=new Promise((t,s)=>{let r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t($t(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Nh.set(t,n)}).catch(()=>{}),Pc.set(e,n),e}function u_(n){if(Sc.has(n))return;let e=new Promise((t,s)=>{let r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Sc.set(n,e)}var Rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Oh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function xh(n){Rc=n(Rc)}function l_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let s=n.call(mo(this),e,...t);return Oh.set(s,e.sort?e.sort():[e]),$t(s)}:a_().includes(n)?function(...e){return n.apply(mo(this),e),$t(Nh.get(this))}:function(...e){return $t(n.apply(mo(this),e))}}function d_(n){return typeof n=="function"?l_(n):(n instanceof IDBTransaction&&u_(n),i_(n,o_())?new Proxy(n,Rc):n)}function $t(n){if(n instanceof IDBRequest)return c_(n);if(Ac.has(n))return Ac.get(n);let e=d_(n);return e!==n&&(Ac.set(n,e),Pc.set(e,n)),e}var mo=n=>Pc.get(n);function Lh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){let a=indexedDB.open(n,e),c=$t(a);return s&&a.addEventListener("upgradeneeded",d=>{s($t(a.result),d.oldVersion,d.newVersion,$t(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{i&&d.addEventListener("close",()=>i()),r&&d.addEventListener("versionchange",p=>r(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}var h_=["get","getKey","getAll","getAllKeys","count"],f_=["put","add","delete","clear"],kc=new Map;function Vh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);let t=e.replace(/FromIndex$/,""),s=e!==t,r=f_.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||h_.includes(t)))return;let i=async function(a,...c){let d=this.transaction(a,r?"readwrite":"readonly"),p=d.store;return s&&(p=p.index(c.shift())),(await Promise.all([p[t](...c),r&&d.done]))[0]};return kc.set(e,i),i}xh(n=>({...n,get:(e,t,s)=>Vh(e,t)||n.get(e,t,s),has:(e,t)=>!!Vh(e,t)||n.has(e,t)}));var Dc=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(p_(t)){let s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}};function p_(n){let e=n.getComponent();return e?.type==="VERSION"}var Nc="@firebase/app",Mh="0.13.2";var un=new Cn("@firebase/app"),m_="@firebase/app-compat",g_="@firebase/analytics-compat",__="@firebase/analytics",y_="@firebase/app-check-compat",v_="@firebase/app-check",w_="@firebase/auth",b_="@firebase/auth-compat",I_="@firebase/database",E_="@firebase/data-connect",T_="@firebase/database-compat",A_="@firebase/functions",S_="@firebase/functions-compat",R_="@firebase/installations",P_="@firebase/installations-compat",k_="@firebase/messaging",C_="@firebase/messaging-compat",D_="@firebase/performance",N_="@firebase/performance-compat",O_="@firebase/remote-config",x_="@firebase/remote-config-compat",V_="@firebase/storage",L_="@firebase/storage-compat",M_="@firebase/firestore",F_="@firebase/ai",U_="@firebase/firestore-compat",B_="firebase",j_="11.10.0";var Oc="[DEFAULT]",q_={[Nc]:"fire-core",[m_]:"fire-core-compat",[__]:"fire-analytics",[g_]:"fire-analytics-compat",[v_]:"fire-app-check",[y_]:"fire-app-check-compat",[w_]:"fire-auth",[b_]:"fire-auth-compat",[I_]:"fire-rtdb",[E_]:"fire-data-connect",[T_]:"fire-rtdb-compat",[A_]:"fire-fn",[S_]:"fire-fn-compat",[R_]:"fire-iid",[P_]:"fire-iid-compat",[k_]:"fire-fcm",[C_]:"fire-fcm-compat",[D_]:"fire-perf",[N_]:"fire-perf-compat",[O_]:"fire-rc",[x_]:"fire-rc-compat",[V_]:"fire-gcs",[L_]:"fire-gcs-compat",[M_]:"fire-fst",[U_]:"fire-fst-compat",[F_]:"fire-vertex","fire-js":"fire-js",[B_]:"fire-js-all"};var go=new Map,z_=new Map,xc=new Map;function Fh(n,e){try{n.container.addComponent(e)}catch(t){un.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Nn(n){let e=n.name;if(xc.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,n);for(let t of go.values())Fh(t,n);for(let t of z_.values())Fh(t,n);return!0}function ei(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dt(n){return n==null?!1:n.settings!==void 0}var G_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new cn("app","Firebase",G_);var Vc=class{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}};var On=j_;function Fc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let s=Object.assign({name:Oc,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Dn.create("bad-app-name",{appName:String(r)});if(t||(t=bc()),!t)throw Dn.create("no-options");let i=go.get(r);if(i){if(Gt(t,i.options)&&Gt(s,i.config))return i;throw Dn.create("duplicate-app",{appName:r})}let a=new po(r);for(let d of xc.values())a.addComponent(d);let c=new Vc(t,s,a);return go.set(r,c),c}function _o(n=Oc){let e=go.get(n);if(!e&&n===Oc&&bc())return Fc();if(!e)throw Dn.create("no-app",{appName:n});return e}function Lt(n,e,t){var s;let r=(s=q_[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);let i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){let c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(c.join(" "));return}Nn(new Rt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var $_="firebase-heartbeat-database",H_=1,Zr="firebase-heartbeat-store",Cc=null;function qh(){return Cc||(Cc=Lh($_,H_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Dn.create("idb-open",{originalErrorMessage:n.message})})),Cc}async function K_(n){try{let t=(await qh()).transaction(Zr),s=await t.objectStore(Zr).get(zh(n));return await t.done,s}catch(e){if(e instanceof yt)un.warn(e.message);else{let t=Dn.create("idb-get",{originalErrorMessage:e?.message});un.warn(t.message)}}}async function Uh(n,e){try{let s=(await qh()).transaction(Zr,"readwrite");await s.objectStore(Zr).put(e,zh(n)),await s.done}catch(t){if(t instanceof yt)un.warn(t.message);else{let s=Dn.create("idb-set",{originalErrorMessage:t?.message});un.warn(s.message)}}}function zh(n){return`${n.name}!${n.options.appId}`}var W_=1024,Q_=30,Lc=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new Mc(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Q_){let a=Y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){un.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Bh(),{heartbeatsToSend:s,unsentEntries:r}=J_(this._heartbeatsCache.heartbeats),i=Xr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return un.warn(t),""}}};function Bh(){return new Date().toISOString().substring(0,10)}function J_(n,e=W_){let t=[],s=n.slice();for(let r of n){let i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),jh(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),jh(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}var Mc=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ec()?Rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await K_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function jh(n){return Xr(JSON.stringify({version:2,heartbeats:n})).length}function Y_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}function X_(n){Nn(new Rt("platform-logger",e=>new Dc(e),"PRIVATE")),Nn(new Rt("heartbeat",e=>new Lc(e),"PRIVATE")),Lt(Nc,Mh,n),Lt(Nc,Mh,"esm2017"),Lt("fire-js","")}X_("");var Z_="firebase",ey="11.10.0";Lt(Z_,ey,"app");function yo(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function uf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var lf=uf,df=new cn("auth","Firebase",uf());var Ao=new Cn("@firebase/auth");function ty(n,...e){Ao.logLevel<=ue.WARN&&Ao.warn(`Auth (${On}): ${n}`,...e)}function wo(n,...e){Ao.logLevel<=ue.ERROR&&Ao.error(`Auth (${On}): ${n}`,...e)}function Mt(n,...e){throw uu(n,...e)}function Kt(n,...e){return uu(n,...e)}function hf(n,e,t){let s=Object.assign(Object.assign({},lf()),{[e]:t});return new cn("auth","Firebase",s).create(e,{appName:n.name})}function Wt(n){return hf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uu(n,...e){if(typeof n!="string"){let t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return df.create(n,...e)}function Y(n,e,...t){if(!n)throw uu(e,...t)}function Ht(n){let e="INTERNAL ASSERTION FAILED: "+n;throw wo(e),new Error(e)}function dn(n,e){n||Ht(e)}function Gc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ny(){return Gh()==="http:"||Gh()==="https:"}function Gh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function sy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ny()||Eh()||"connection"in navigator)?navigator.onLine:!0}function ry(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var us=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,dn(t>e,"Short delay should be less than long delay!"),this.isMobile=bh()||Th()}get(){return sy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function lu(n,e){dn(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var So=class{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var iy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var oy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ay=new us(3e4,6e4);function je(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function at(n,e,t,s,r={}){return ff(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});let c=Ks(Object.assign({key:n.config.apiKey},a)).slice(1),d=await n._getAdditionalHeaders();d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode);let p=Object.assign({method:e,headers:d},i);return Ih()||(p.referrerPolicy="no-referrer"),n.emulatorConfig&&kn(n.emulatorConfig.host)&&(p.credentials="include"),So.fetch()(await pf(n,n.config.apiHost,t,c),p)})}async function ff(n,e,t){n._canInitEmulator=!1;let s=Object.assign(Object.assign({},iy),e);try{let r=new $c(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();let a=await i.json();if("needConfirmation"in a)throw ni(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{let c=i.ok?a.errorMessage:a.error.message,[d,p]=c.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw ni(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw ni(n,"user-disabled",a);let y=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw hf(n,y,p);Mt(n,y)}}catch(r){if(r instanceof yt)throw r;Mt(n,"network-request-failed",{message:String(r)})}}async function Mn(n,e,t,s,r={}){let i=await at(n,e,t,s,r);return"mfaPendingCredential"in i&&Mt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function pf(n,e,t,s){let r=`${e}${t}?${s}`,i=n,a=i.config.emulator?lu(n.config,r):`${n.config.apiScheme}://${r}`;return oy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function cy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var $c=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Kt(this.auth,"network-request-failed")),ay.get())})}};function ni(n,e,t){let s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);let r=Kt(n,e,s);return r.customData._tokenResponse=t,r}function $h(n){return n!==void 0&&n.enterprise!==void 0}var Ro=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function mf(n,e){return at(n,"GET","/v2/recaptchaConfig",je(n,e))}async function uy(n,e){return at(n,"POST","/v1/accounts:delete",e)}async function Po(n,e){return at(n,"POST","/v1/accounts:lookup",e)}function si(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gf(n,e=!1){let t=Te(n),s=await t.getIdToken(e),r=du(s);Y(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");let i=typeof r.firebase=="object"?r.firebase:void 0,a=i?.sign_in_provider;return{claims:r,token:s,authTime:si(Uc(r.auth_time)),issuedAtTime:si(Uc(r.iat)),expirationTime:si(Uc(r.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Uc(n){return Number(n)*1e3}function du(n){let[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{let r=uo(t);return r?JSON.parse(r):(wo("Failed to decode base64 JWT payload"),null)}catch(r){return wo("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Hh(n){let e=du(n);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function oi(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof yt&&ly(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function ly({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Hc=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;let r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var ai=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function ko(n){var e;let t=n.auth,s=await n.getIdToken(),r=await oi(n,Po(t,{idToken:s}));Y(r?.users.length,t,"internal-error");let i=r.users[0];n._notifyReloadListener(i);let a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yf(i.providerUserInfo):[],c=dy(n.providerData,a),d=n.isAnonymous,p=!(n.email&&i.passwordHash)&&!c?.length,y=d?p:!1,v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ai(i.createdAt,i.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function _f(n){let e=Te(n);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dy(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function yf(n){return n.map(e=>{var{providerId:t}=e,s=yo(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}async function hy(n,e){let t=await ff(n,{},async()=>{let s=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await pf(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";let d={method:"POST",headers:c,body:s};return n.emulatorConfig&&kn(n.emulatorConfig.host)&&(d.credentials="include"),So.fetch()(a,d)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function fy(n,e){return at(n,"POST","/v2/accounts:revokeToken",je(n,e))}var ri=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Y(e.length!==0,"internal-error");let t=Hh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:s,refreshToken:r,expiresIn:i}=await hy(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){let{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new n;return s&&(Y(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(Y(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(Y(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return Ht("not implemented")}};function xn(n,e){Y(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var Vn=class n{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=yo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ai(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await oi(this,this.stsTokenManager.getToken(this.auth,e));return Y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gf(this,e)}reload(){return _f(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ko(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Wt(this.auth));let e=await this.getIdToken();return await oi(this,uy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,c,d,p,y;let v=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(r=t.email)!==null&&r!==void 0?r:void 0,x=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,B=(a=t.photoURL)!==null&&a!==void 0?a:void 0,$=(c=t.tenantId)!==null&&c!==void 0?c:void 0,F=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,te=(p=t.createdAt)!==null&&p!==void 0?p:void 0,K=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ne,emailVerified:_e,isAnonymous:Xe,providerData:le,stsTokenManager:P}=t;Y(ne&&P,e,"internal-error");let b=ri.fromJSON(this.name,P);Y(typeof ne=="string",e,"internal-error"),xn(v,e.name),xn(A,e.name),Y(typeof _e=="boolean",e,"internal-error"),Y(typeof Xe=="boolean",e,"internal-error"),xn(x,e.name),xn(B,e.name),xn($,e.name),xn(F,e.name),xn(te,e.name),xn(K,e.name);let T=new n({uid:ne,auth:e,email:A,emailVerified:_e,displayName:v,isAnonymous:Xe,photoURL:B,phoneNumber:x,tenantId:$,stsTokenManager:b,createdAt:te,lastLoginAt:K});return le&&Array.isArray(le)&&(T.providerData=le.map(S=>Object.assign({},S))),F&&(T._redirectEventId=F),T}static async _fromIdTokenResponse(e,t,s=!1){let r=new ri;r.updateFromServerResponse(t);let i=new n({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ko(i),i}static async _fromGetAccountInfoResponse(e,t,s){let r=t.users[0];Y(r.localId!==void 0,"internal-error");let i=r.providerUserInfo!==void 0?yf(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!i?.length,c=new ri;c.updateFromIdToken(s);let d=new n({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new ai(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(d,p),d}};var Kh=new Map;function ln(n){dn(n instanceof Function,"Expected a class definition");let e=Kh.get(n);return e?(dn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kh.set(n,e),e)}var Co=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Co.type="NONE";var Kc=Co;function bo(n,e,t){return`firebase:${n}:${e}:${t}`}var Do=class n{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;let{config:r,name:i}=this.auth;this.fullUserKey=bo(this.userKey,r.apiKey,i),this.fullPersistenceKey=bo("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Po(this.auth,{idToken:e}).catch(()=>{});return t?Vn._fromGetAccountInfoResponse(this.auth,t,e):null}return Vn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new n(ln(Kc),e,s);let r=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p),i=r[0]||ln(Kc),a=bo(s,e.config.apiKey,e.name),c=null;for(let p of t)try{let y=await p._get(a);if(y){let v;if(typeof y=="string"){let A=await Po(e,{idToken:y}).catch(()=>{});if(!A)break;v=await Vn._fromGetAccountInfoResponse(e,A,y)}else v=Vn._fromJSON(e,y);p!==i&&(c=v),i=p;break}}catch{}let d=r.filter(p=>p._shouldAllowMigration);return!i._shouldAllowMigration||!d.length?new n(i,e,s):(i=d[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async p=>{if(p!==i)try{await p._remove(a)}catch{}})),new n(i,e,s))}};function Wh(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(If(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tf(e))return"Blackberry";if(Af(e))return"Webos";if(wf(e))return"Safari";if((e.includes("chrome/")||bf(e))&&!e.includes("edge/"))return"Chrome";if(Ef(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function vf(n=Ke()){return/firefox\//i.test(n)}function wf(n=Ke()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bf(n=Ke()){return/crios\//i.test(n)}function If(n=Ke()){return/iemobile/i.test(n)}function Ef(n=Ke()){return/android/i.test(n)}function Tf(n=Ke()){return/blackberry/i.test(n)}function Af(n=Ke()){return/webos/i.test(n)}function hu(n=Ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function py(n=Ke()){var e;return hu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function my(){return Ah()&&document.documentMode===10}function Sf(n=Ke()){return hu(n)||Ef(n)||Af(n)||Tf(n)||/windows phone/i.test(n)||If(n)}function Rf(n,e=[]){let t;switch(n){case"Browser":t=Wh(Ke());break;case"Worker":t=`${Wh(Ke())}-${n}`;break;default:t=n}let s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${On}/${s}`}var Wc=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let s=i=>new Promise((a,c)=>{try{let d=e(i);a(d)}catch(d){c(d)}});s.onAbort=t,this.queue.push(s);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(let r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}};async function gy(n,e={}){return at(n,"GET","/v2/passwordPolicy",je(n,e))}var _y=6,Qc=class{constructor(e){var t,s,r,i;let a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:_y,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,c;let d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(t=d.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),d.isValid&&(d.isValid=(s=d.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),d.isValid&&(d.isValid=(r=d.containsLowercaseLetter)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsUppercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(a=d.containsNumericCharacter)!==null&&a!==void 0?a:!0),d.isValid&&(d.isValid=(c=d.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),d}validatePasswordLengthOptions(e,t){let s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}};var Jc=class{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new Wc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=df,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Po(this,{idToken:e}),s=await Vn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dt(this.app)){let a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}let s=await this.assertedPersistence.getCurrentUser(),r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r?._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===c)&&d?.user&&(r=d.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ry()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(Wt(this));let t=e?Te(e):null;return t&&Y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await gy(this),t=new Qc(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await fy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ln(e)||this._popupRedirectResolver;Y(t,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};let i=typeof t=="function"?t:t.next.bind(t),a=!1,c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){let d=e.addObserver(t,s,r);return()=>{a=!0,d()}}else{let d=e.addObserver(t);return()=>{a=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&ty(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Jt(n){return Te(n)}var No=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=kh(t=>this.observer=t)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yy(n){Jo=n}function Pf(n){return Jo.loadJS(n)}function vy(){return Jo.recaptchaEnterpriseScript}function wy(){return Jo.gapiScript}function kf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var Yc=class{constructor(){this.enterprise=new Xc}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},Xc=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var by="recaptcha-enterprise",ii="NO_RECAPTCHA",Oo=class{constructor(e){this.type=by,this.auth=Jt(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{mf(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{let p=new Ro(d);return i.tenantId==null?i._agentRecaptchaConfig=p:i._tenantRecaptchaConfigs[i.tenantId]=p,a(p.siteKey)}}).catch(d=>{c(d)})})}function r(i,a,c){let d=window.grecaptcha;$h(d)?d.enterprise.ready(()=>{d.enterprise.execute(i,{action:e}).then(p=>{a(p)}).catch(()=>{a(ii)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Yc().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&$h(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let d=vy();d.length!==0&&(d+=c),Pf(d).then(()=>{r(c,i,a)}).catch(p=>{a(p)})}}).catch(c=>{a(c)})})}};async function ti(n,e,t,s=!1,r=!1){let i=new Oo(n),a;if(r)a=ii;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}let c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){let d=c.phoneEnrollmentInfo.phoneNumber,p=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:p,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){let d=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Js(n,e,t,s,r){var i,a;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let c=await ti(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let d=await ti(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(c)});else if(r==="PHONE_PROVIDER")if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("PHONE_PROVIDER")){let c=await ti(n,e,t);return s(n,c).catch(async d=>{var p;if(((p=n._getRecaptchaConfig())===null||p===void 0?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(d.code==="auth/missing-recaptcha-token"||d.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let y=await ti(n,e,t,!1,!0);return s(n,y)}return Promise.reject(d)})}else{let c=await ti(n,e,t,!1,!0);return s(n,c)}else return Promise.reject(r+" provider is not supported.")}async function Iy(n){let e=Jt(n),t=await mf(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new Ro(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new Oo(e).verify()}function Cf(n,e){let t=ei(n,"auth");if(t.isInitialized()){let r=t.getImmediate(),i=t.getOptions();if(Gt(i,e??{}))return r;Mt(r,"already-initialized")}return t.initialize({options:e})}function Ey(n,e){let t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ln);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function Df(n,e,t){let s=Jt(n);Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");let r=!!t?.disableWarnings,i=Nf(e),{host:a,port:c}=Ty(e),d=c===null?"":`:${c}`,p={url:`${i}//${a}${d}/`},y=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){Y(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Y(Gt(p,s.config.emulator)&&Gt(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,kn(a)?(ho(`${i}//${a}${d}`),fo("Auth",!0)):r||Ay()}function Nf(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ty(n){let e=Nf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){let i=r[1];return{host:i,port:Qh(s.substr(i.length+1))}}else{let[i,a]=s.split(":");return{host:i,port:Qh(a)}}}function Qh(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function Ay(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var ls=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,t){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}};async function Sy(n,e){return at(n,"POST","/v1/accounts:signUp",e)}async function Ry(n,e){return Mn(n,"POST","/v1/accounts:signInWithPassword",je(n,e))}async function Py(n,e){return Mn(n,"POST","/v1/accounts:signInWithEmailLink",je(n,e))}async function ky(n,e){return Mn(n,"POST","/v1/accounts:signInWithEmailLink",je(n,e))}var ci=class n extends ls{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new n(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Js(e,t,"signInWithPassword",Ry,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Py(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Js(e,s,"signUpPassword",Sy,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ky(e,{idToken:t,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Ys(n,e){return Mn(n,"POST","/v1/accounts:signInWithIdp",je(n,e))}var Cy="http://localhost",ds=class n extends ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=yo(t,["providerId","signInMethod"]);if(!s||!r)return null;let a=new n(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){let t=this.buildRequest();return Ys(e,t)}_linkToIdToken(e,t){let s=this.buildRequest();return s.idToken=t,Ys(e,s)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,Ys(e,t)}buildRequest(){let e={requestUri:Cy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ks(t)}return e}};async function Jh(n,e){return at(n,"POST","/v1/accounts:sendVerificationCode",je(n,e))}async function Dy(n,e){return Mn(n,"POST","/v1/accounts:signInWithPhoneNumber",je(n,e))}async function Ny(n,e){let t=await Mn(n,"POST","/v1/accounts:signInWithPhoneNumber",je(n,e));if(t.temporaryProof)throw ni(n,"account-exists-with-different-credential",t);return t}var Oy={USER_NOT_FOUND:"user-not-found"};async function xy(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Mn(n,"POST","/v1/accounts:signInWithPhoneNumber",je(n,t),Oy)}var ui=class n extends ls{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Dy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ny(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return xy(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i}=e;return!s&&!t&&!r&&!i?null:new n({verificationId:t,verificationCode:s,phoneNumber:r,temporaryProof:i})}};function Vy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ly(n){let e=Ws(Qs(n)).link,t=e?Ws(Qs(e)).deep_link_id:null,s=Ws(Qs(n)).deep_link_id;return(s?Ws(Qs(s)).link:null)||s||t||e||n}var xo=class n{constructor(e){var t,s,r,i,a,c;let d=Ws(Qs(e)),p=(t=d.apiKey)!==null&&t!==void 0?t:null,y=(s=d.oobCode)!==null&&s!==void 0?s:null,v=Vy((r=d.mode)!==null&&r!==void 0?r:null);Y(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(i=d.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=d.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=d.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){let t=Ly(e);try{return new n(t)}catch{return null}}};var hs=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return ci._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let s=xo.parseLink(t);return Y(s,"argument-error"),ci._fromEmailAndCode(e,s.code,s.tenantId)}};hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Vo=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var fs=class extends Vo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var li=class n extends fs{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";var di=class n extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return n.credential(t,s)}catch{return null}}};di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";var hi=class n extends fs{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";var fi=class n extends fs{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return n.credential(t,s)}catch{return null}}};fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";async function Of(n,e){return Mn(n,"POST","/v1/accounts:signUp",je(n,e))}var Ln=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){let i=await Vn._fromIdTokenResponse(e,s,r),a=Yh(s);return new n({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);let r=Yh(s);return new n({user:e,providerId:r,_tokenResponse:s,operationType:t})}};function Yh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function fu(n){var e;if(dt(n.app))return Promise.reject(Wt(n));let t=Jt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ln({user:t.currentUser,providerId:null,operationType:"signIn"});let s=await Of(t,{returnSecureToken:!0}),r=await Ln._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(r.user),r}var Zc=class n extends yt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new n(e,t,s,r)}};function xf(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zc._fromErrorAndOperation(n,i,e,s):i})}async function My(n,e,t=!1){let s=await oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",s)}async function Fy(n,e,t=!1){let{auth:s}=n;if(dt(s.app))return Promise.reject(Wt(s));let r="reauthenticate";try{let i=await oi(n,xf(s,r,e,n),t);Y(i.idToken,s,"internal-error");let a=du(i.idToken);Y(a,s,"internal-error");let{sub:c}=a;return Y(n.uid===c,s,"user-mismatch"),Ln._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Mt(s,"user-mismatch"),i}}async function Vf(n,e,t=!1){if(dt(n.app))return Promise.reject(Wt(n));let s="signIn",r=await xf(n,s,e),i=await Ln._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function Lf(n,e){return Vf(Jt(n),e)}async function Mf(n){let e=Jt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pu(n,e,t){if(dt(n.app))return Promise.reject(Wt(n));let s=Jt(n),a=await Js(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Of,"EMAIL_PASSWORD_PROVIDER").catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&Mf(n),d}),c=await Ln._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function mu(n,e,t){return dt(n.app)?Promise.reject(Wt(n)):Lf(Te(n),hs.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Mf(n),s})}function Ff(n,e,t,s){return Te(n).onIdTokenChanged(e,t,s)}function Uf(n,e,t){return Te(n).beforeAuthStateChanged(e,t)}function gu(n,e,t,s){return Te(n).onAuthStateChanged(e,t,s)}function _u(n){return Te(n).signOut()}function Xh(n,e){return at(n,"POST","/v2/accounts/mfaEnrollment:start",je(n,e))}function Uy(n,e){return at(n,"POST","/v2/accounts/mfaEnrollment:finalize",je(n,e))}function By(n,e){return at(n,"POST","/v2/accounts/mfaEnrollment:start",je(n,e))}function jy(n,e){return at(n,"POST","/v2/accounts/mfaEnrollment:finalize",je(n,e))}var Lo="__sak";var Mo=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var qy=1e3,zy=10,Fo=class extends Mo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,d)=>{this.notifyListeners(a,d)});return}let s=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);my()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,zy):r()}notifyListeners(e,t){this.localCache[e]=t;let s=this.listeners[e];if(s)for(let r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};Fo.type="LOCAL";var Bf=Fo;var Gy=1e3;function Bc(n){var e,t;let s=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),r=RegExp(`${s}=([^;]+)`);return(t=(e=document.cookie.match(r))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function jc(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var eu=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=jc(e);if(window.cookieStore){let s=await window.cookieStore.get(t);return s?.value}return Bc(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let s=jc(e);document.cookie=`${s}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let s=jc(e);if(window.cookieStore){let c=p=>{let y=p.changed.find(A=>A.name===s);y&&t(y.value),p.deleted.find(A=>A.name===s)&&t(null)},d=()=>window.cookieStore.removeEventListener("change",c);return this.listenerUnsubscribes.set(t,d),window.cookieStore.addEventListener("change",c)}let r=Bc(s),i=setInterval(()=>{let c=Bc(s);c!==r&&(t(c),r=c)},Gy),a=()=>clearInterval(i);this.listenerUnsubscribes.set(t,a)}_removeListener(e,t){let s=this.listenerUnsubscribes.get(t);s&&(s(),this.listenerUnsubscribes.delete(t))}};eu.type="COOKIE";var Uo=class extends Mo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};Uo.type="SESSION";var yu=Uo;function $y(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var Bo=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;let s=new n(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});let c=Array.from(a).map(async p=>p(t.origin,i)),d=await $y(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};Bo.receivers=[];function vu(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}var tu=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){let r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,d)=>{let p=vu("",20);r.port1.start();let y=setTimeout(()=>{d(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(v){let A=v;if(A.data.eventId===p)switch(A.data.status){case"ack":clearTimeout(y),i=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(A.data.response);break;default:clearTimeout(y),clearTimeout(i),d(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}};function Qt(){return window}function Hy(n){Qt().location.href=n}function jf(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function Ky(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wy(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Qy(){return jf()?self:null}var qf="firebaseLocalStorageDb",Jy=1,jo="firebaseLocalStorage",zf="fbase_key",ps=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function Yo(n,e){return n.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function Yy(){let n=indexedDB.deleteDatabase(qf);return new ps(n).toPromise()}function nu(){let n=indexedDB.open(qf,Jy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let s=n.result;try{s.createObjectStore(jo,{keyPath:zf})}catch(r){t(r)}}),n.addEventListener("success",async()=>{let s=n.result;s.objectStoreNames.contains(jo)?e(s):(s.close(),await Yy(),e(await nu()))})})}async function Zh(n,e,t){let s=Yo(n,!0).put({[zf]:e,value:t});return new ps(s).toPromise()}async function Xy(n,e){let t=Yo(n,!1).get(e),s=await new ps(t).toPromise();return s===void 0?null:s.value}function ef(n,e){let t=Yo(n,!0).delete(e);return new ps(t).toPromise()}var Zy=800,ev=3,qo=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let t=0;for(;;)try{let s=await this._openDb();return await e(s)}catch(s){if(t++>ev)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(Qy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ky(),!this.activeServiceWorker)return;this.sender=new tu(this.activeServiceWorker);let s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await nu();return await Zh(e,Lo,"1"),await ef(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zh(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(s=>Xy(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ef(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(r=>{let i=Yo(r,!1).getAll();return new ps(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],s=new Set;if(e.length!==0)for(let{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;let s=this.listeners[e];if(s)for(let r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};qo.type="LOCAL";var Gf=qo;function tf(n,e){return at(n,"POST","/v2/accounts/mfaSignIn:start",je(n,e))}function tv(n,e){return at(n,"POST","/v2/accounts/mfaSignIn:finalize",je(n,e))}function nv(n,e){return at(n,"POST","/v2/accounts/mfaSignIn:finalize",je(n,e))}var MI=kf("rcb"),FI=new us(3e4,6e4);var Io="recaptcha";async function sv(n,e,t){var s;if(!n._getRecaptchaConfig())try{await Iy(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){let i=r.session;if("phoneNumber"in r){Y(i.type==="enroll",n,"internal-error");let a={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Js(n,a,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===ii){Y(t?.type===Io,y,"argument-error");let A=await qc(y,v,t);return Xh(y,A)}return Xh(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{Y(i.type==="signin",n,"internal-error");let a=((s=r.multiFactorHint)===null||s===void 0?void 0:s.uid)||r.multiFactorUid;Y(a,n,"missing-multi-factor-info");let c={mfaPendingCredential:i.credential,mfaEnrollmentId:a,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Js(n,c,"mfaSmsSignIn",async(v,A)=>{if(A.phoneSignInInfo.captchaResponse===ii){Y(t?.type===Io,v,"argument-error");let x=await qc(v,A,t);return tf(v,x)}return tf(v,A)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{let i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Js(n,i,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===ii){Y(t?.type===Io,p,"argument-error");let v=await qc(p,y,t);return Jh(p,v)}return Jh(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{t?._reset()}}async function qc(n,e,t){Y(t.type===Io,n,"argument-error");let s=await t.verify();Y(typeof s=="string",n,"argument-error");let r=Object.assign({},e);if("phoneEnrollmentInfo"in r){let i=r.phoneEnrollmentInfo.phoneNumber,a=r.phoneEnrollmentInfo.captchaResponse,c=r.phoneEnrollmentInfo.clientType,d=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:s,captchaResponse:a,clientType:c,recaptchaVersion:d}}),r}else if("phoneSignInInfo"in r){let i=r.phoneSignInInfo.captchaResponse,a=r.phoneSignInInfo.clientType,c=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:i,clientType:a,recaptchaVersion:c}}),r}else return Object.assign(r,{recaptchaToken:s}),r}var pi=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Jt(e)}verifyPhoneNumber(e,t){return sv(this.auth,e,Te(t))}static credential(e,t){return ui._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:s}=e;return t&&s?ui._fromTokenResponse(t,s):null}};pi.PROVIDER_ID="phone";pi.PHONE_SIGN_IN_METHOD="phone";function rv(n,e){return e?ln(e):(Y(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var mi=class extends ls{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ys(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function iv(n){return Vf(n.auth,new mi(n),n.bypassAuthState)}function ov(n){let{auth:e,user:t}=n;return Y(t,e,"internal-error"),Fy(t,new mi(n),n.bypassAuthState)}async function av(n){let{auth:e,user:t}=n;return Y(t,e,"internal-error"),My(t,new mi(n),n.bypassAuthState)}var zo=class{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}let d={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(d))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iv;case"linkViaPopup":case"linkViaRedirect":return av;case"reauthViaPopup":case"reauthViaRedirect":return ov;default:Mt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var cv=new us(2e3,1e4);var su=class n extends zo{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");let e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cv.get())};e()}};su.currentPopupAction=null;var uv="pendingRedirect",Eo=new Map,ru=class extends zo{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{let s=await lv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function lv(n,e){let t=fv(e),s=hv(n);if(!await s._isAvailable())return!1;let r=await s._get(t)==="true";return await s._remove(t),r}function dv(n,e){Eo.set(n._key(),e)}function hv(n){return ln(n._redirectPersistence)}function fv(n){return bo(uv,n.config.apiKey,n.name)}async function pv(n,e,t=!1){if(dt(n.app))return Promise.reject(Wt(n));let s=Jt(n),r=rv(s,e),a=await new ru(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}var mv=10*60*1e3,iu=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!$f(e)){let r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Kt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mv&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(e))}saveEventToCache(e){this.cachedEventUids.add(nf(e)),this.lastProcessedEventTime=Date.now()}};function nf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $f({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function gv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $f(n);default:return!1}}async function _v(n,e={}){return at(n,"GET","/v1/projects",e)}var yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vv=/^https?/;async function wv(n){if(n.config.emulator)return;let{authorizedDomains:e}=await _v(n);for(let t of e)try{if(bv(t))return}catch{}Mt(n,"unauthorized-domain")}function bv(n){let e=Gc(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){let a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!vv.test(t))return!1;if(yv.test(n))return s===n;let r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}var Iv=new us(3e4,6e4);function sf(){let n=Qt().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ev(n){return new Promise((e,t)=>{var s,r,i;function a(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),t(Kt(n,"network-request-failed"))},timeout:Iv.get()})}if(!((r=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)a();else{let c=kf("iframefcb");return Qt()[c]=()=>{gapi.load?a():t(Kt(n,"network-request-failed"))},Pf(`${wy()}?onload=${c}`).catch(d=>t(d))}}).catch(e=>{throw To=null,e})}var To=null;function Tv(n){return To=To||Ev(n),To}var Av=new us(5e3,15e3),Sv="__/auth/iframe",Rv="emulator/auth/iframe",Pv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cv(n){let e=n.config;Y(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?lu(e,Rv):`https://${n.config.authDomain}/${Sv}`,s={apiKey:e.apiKey,appName:n.name,v:On},r=kv.get(n.config.apiHost);r&&(s.eid=r);let i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ks(s).slice(1)}`}async function Dv(n){let e=await Tv(n),t=Qt().gapi;return Y(t,n,"internal-error"),e.open({where:document.body,url:Cv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pv,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});let a=Kt(n,"network-request-failed"),c=Qt().setTimeout(()=>{i(a)},Av.get());function d(){Qt().clearTimeout(c),r(s)}s.ping(d).then(d,()=>{i(a)})}))}var Nv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ov=500,xv=600,Vv="_blank",Lv="http://localhost",Go=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Mv(n,e,t,s=Ov,r=xv){let i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString(),c="",d=Object.assign(Object.assign({},Nv),{width:s.toString(),height:r.toString(),top:i,left:a}),p=Ke().toLowerCase();t&&(c=bf(p)?Vv:t),vf(p)&&(e=e||Lv,d.scrollbars="yes");let y=Object.entries(d).reduce((A,[x,B])=>`${A}${x}=${B},`,"");if(py(p)&&c!=="_self")return Fv(e||"",c),new Go(null);let v=window.open(e||"",c,y);Y(v,n,"popup-blocked");try{v.focus()}catch{}return new Go(v)}function Fv(n,e){let t=document.createElement("a");t.href=n,t.target=e;let s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}var Uv="__/auth/handler",Bv="emulator/auth/handler",jv=encodeURIComponent("fac");async function rf(n,e,t,s,r,i){Y(n.config.authDomain,n,"auth-domain-config-required"),Y(n.config.apiKey,n,"invalid-api-key");let a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:On,eventId:r};if(e instanceof Vo){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ph(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(let[y,v]of Object.entries(i||{}))a[y]=v}if(e instanceof fs){let y=e.getScopes().filter(v=>v!=="");y.length>0&&(a.scopes=y.join(","))}n.tenantId&&(a.tid=n.tenantId);let c=a;for(let y of Object.keys(c))c[y]===void 0&&delete c[y];let d=await n._getAppCheckToken(),p=d?`#${jv}=${encodeURIComponent(d)}`:"";return`${qv(n)}?${Ks(c).slice(1)}${p}`}function qv({config:n}){return n.emulator?lu(n,Bv):`https://${n.authDomain}/${Uv}`}var zc="webStorageSupport",ou=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yu,this._completeRedirectFn=pv,this._overrideRedirectResult=dv}async _openPopup(e,t,s,r){var i;dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");let a=await rf(e,t,s,Gc(),r);return Mv(e,a,vu())}async _openRedirect(e,t,s,r){await this._originValidation(e);let i=await rf(e,t,s,Gc(),r);return Hy(i),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(dn(i,"If manager is not set, promise should be"),i)}let s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){let t=await Dv(e),s=new iu(e);return t.register("authEvent",r=>(Y(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zc,{type:zc},r=>{var i;let a=(i=r?.[0])===null||i===void 0?void 0:i[zc];a!==void 0&&t(!!a),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sf()||wf()||hu()}},Hf=ou,$o=class{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ht("unexpected MultiFactorSessionType")}}},au=class n extends $o{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,s){return Uy(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return tv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},Ho=class{constructor(){}static assertion(e){return au._fromCredential(e)}};Ho.FACTOR_ID="phone";var Ko=class{static assertionForEnrollment(e,t){return Wo._fromSecret(e,t)}static assertionForSignIn(e,t){return Wo._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let s=e;Y(typeof((t=s.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let r=await By(s.user.auth,{idToken:s.credential,totpEnrollmentInfo:{}});return Qo._fromStartTotpMfaEnrollmentResponse(r,s.user.auth)}};Ko.FACTOR_ID="totp";var Wo=class n extends $o{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,s){return Y(typeof this.secret<"u",e,"argument-error"),jy(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){Y(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let s={verificationCode:this.otp};return nv(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}},Qo=class n{constructor(e,t,s,r,i,a,c){this.sessionInfo=a,this.auth=c,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let r=!1;return(vo(e)||vo(t))&&(r=!0),r&&(vo(e)&&(e=((s=this.auth.currentUser)===null||s===void 0?void 0:s.email)||"unknownuser"),vo(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function vo(n){return typeof n>"u"||n?.length===0}var of="@firebase/auth",af="1.10.8";var cu=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function zv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gv(n){Nn(new Rt("auth",(e,{options:t})=>{let s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;Y(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});let d={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rf(n)},p=new Jc(s,r,i,d);return Ey(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Nn(new Rt("auth-internal",e=>{let t=Jt(e.getProvider("auth").getImmediate());return(s=>new cu(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(of,af,zv(n)),Lt(of,af,"esm2017")}var $v=5*60,Hv=Ic("authIdTokenMaxAge")||$v,cf=null,Kv=n=>async e=>{let t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Hv)return;let r=t?.token;cf!==r&&(cf=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function wu(n=_o()){let e=ei(n,"auth");if(e.isInitialized())return e.getImmediate();let t=Cf(n,{popupRedirectResolver:Hf,persistence:[Gf,Bf,yu]}),s=Ic("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){let i=new URL(s,location.origin);if(location.origin===i.origin){let a=Kv(i.toString());Uf(t,a,()=>a(t.currentUser)),Ff(t,c=>a(c))}}let r=wc("auth");return r&&Df(t,`http://${r}`),t}function Wv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yy({loadJS(n){return new Promise((e,t)=>{let s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{let i=Kt("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Wv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gv("Browser");var Kf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wf={};var hn,bu;(function(){var n;function e(P,b){function T(){}T.prototype=b.prototype,P.D=b.prototype,P.prototype=new T,P.prototype.constructor=P,P.C=function(S,R,C){for(var E=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)E[nt-2]=arguments[nt];return b.prototype[R].apply(S,E)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(P,b,T){T||(T=0);var S=Array(16);if(typeof b=="string")for(var R=0;16>R;++R)S[R]=b.charCodeAt(T++)|b.charCodeAt(T++)<<8|b.charCodeAt(T++)<<16|b.charCodeAt(T++)<<24;else for(R=0;16>R;++R)S[R]=b[T++]|b[T++]<<8|b[T++]<<16|b[T++]<<24;b=P.g[0],T=P.g[1],R=P.g[2];var C=P.g[3],E=b+(C^T&(R^C))+S[0]+3614090360&4294967295;b=T+(E<<7&4294967295|E>>>25),E=C+(R^b&(T^R))+S[1]+3905402710&4294967295,C=b+(E<<12&4294967295|E>>>20),E=R+(T^C&(b^T))+S[2]+606105819&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(b^R&(C^b))+S[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=b+(C^T&(R^C))+S[4]+4118548399&4294967295,b=T+(E<<7&4294967295|E>>>25),E=C+(R^b&(T^R))+S[5]+1200080426&4294967295,C=b+(E<<12&4294967295|E>>>20),E=R+(T^C&(b^T))+S[6]+2821735955&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(b^R&(C^b))+S[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=b+(C^T&(R^C))+S[8]+1770035416&4294967295,b=T+(E<<7&4294967295|E>>>25),E=C+(R^b&(T^R))+S[9]+2336552879&4294967295,C=b+(E<<12&4294967295|E>>>20),E=R+(T^C&(b^T))+S[10]+4294925233&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(b^R&(C^b))+S[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=b+(C^T&(R^C))+S[12]+1804603682&4294967295,b=T+(E<<7&4294967295|E>>>25),E=C+(R^b&(T^R))+S[13]+4254626195&4294967295,C=b+(E<<12&4294967295|E>>>20),E=R+(T^C&(b^T))+S[14]+2792965006&4294967295,R=C+(E<<17&4294967295|E>>>15),E=T+(b^R&(C^b))+S[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=b+(R^C&(T^R))+S[1]+4129170786&4294967295,b=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(b^T))+S[6]+3225465664&4294967295,C=b+(E<<9&4294967295|E>>>23),E=R+(b^T&(C^b))+S[11]+643717713&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^b&(R^C))+S[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=b+(R^C&(T^R))+S[5]+3593408605&4294967295,b=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(b^T))+S[10]+38016083&4294967295,C=b+(E<<9&4294967295|E>>>23),E=R+(b^T&(C^b))+S[15]+3634488961&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^b&(R^C))+S[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=b+(R^C&(T^R))+S[9]+568446438&4294967295,b=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(b^T))+S[14]+3275163606&4294967295,C=b+(E<<9&4294967295|E>>>23),E=R+(b^T&(C^b))+S[3]+4107603335&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^b&(R^C))+S[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=b+(R^C&(T^R))+S[13]+2850285829&4294967295,b=T+(E<<5&4294967295|E>>>27),E=C+(T^R&(b^T))+S[2]+4243563512&4294967295,C=b+(E<<9&4294967295|E>>>23),E=R+(b^T&(C^b))+S[7]+1735328473&4294967295,R=C+(E<<14&4294967295|E>>>18),E=T+(C^b&(R^C))+S[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=b+(T^R^C)+S[5]+4294588738&4294967295,b=T+(E<<4&4294967295|E>>>28),E=C+(b^T^R)+S[8]+2272392833&4294967295,C=b+(E<<11&4294967295|E>>>21),E=R+(C^b^T)+S[11]+1839030562&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^b)+S[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=b+(T^R^C)+S[1]+2763975236&4294967295,b=T+(E<<4&4294967295|E>>>28),E=C+(b^T^R)+S[4]+1272893353&4294967295,C=b+(E<<11&4294967295|E>>>21),E=R+(C^b^T)+S[7]+4139469664&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^b)+S[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=b+(T^R^C)+S[13]+681279174&4294967295,b=T+(E<<4&4294967295|E>>>28),E=C+(b^T^R)+S[0]+3936430074&4294967295,C=b+(E<<11&4294967295|E>>>21),E=R+(C^b^T)+S[3]+3572445317&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^b)+S[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=b+(T^R^C)+S[9]+3654602809&4294967295,b=T+(E<<4&4294967295|E>>>28),E=C+(b^T^R)+S[12]+3873151461&4294967295,C=b+(E<<11&4294967295|E>>>21),E=R+(C^b^T)+S[15]+530742520&4294967295,R=C+(E<<16&4294967295|E>>>16),E=T+(R^C^b)+S[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=b+(R^(T|~C))+S[0]+4096336452&4294967295,b=T+(E<<6&4294967295|E>>>26),E=C+(T^(b|~R))+S[7]+1126891415&4294967295,C=b+(E<<10&4294967295|E>>>22),E=R+(b^(C|~T))+S[14]+2878612391&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~b))+S[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=b+(R^(T|~C))+S[12]+1700485571&4294967295,b=T+(E<<6&4294967295|E>>>26),E=C+(T^(b|~R))+S[3]+2399980690&4294967295,C=b+(E<<10&4294967295|E>>>22),E=R+(b^(C|~T))+S[10]+4293915773&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~b))+S[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=b+(R^(T|~C))+S[8]+1873313359&4294967295,b=T+(E<<6&4294967295|E>>>26),E=C+(T^(b|~R))+S[15]+4264355552&4294967295,C=b+(E<<10&4294967295|E>>>22),E=R+(b^(C|~T))+S[6]+2734768916&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~b))+S[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=b+(R^(T|~C))+S[4]+4149444226&4294967295,b=T+(E<<6&4294967295|E>>>26),E=C+(T^(b|~R))+S[11]+3174756917&4294967295,C=b+(E<<10&4294967295|E>>>22),E=R+(b^(C|~T))+S[2]+718787259&4294967295,R=C+(E<<15&4294967295|E>>>17),E=T+(C^(R|~b))+S[9]+3951481745&4294967295,P.g[0]=P.g[0]+b&4294967295,P.g[1]=P.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,P.g[2]=P.g[2]+R&4294967295,P.g[3]=P.g[3]+C&4294967295}s.prototype.u=function(P,b){b===void 0&&(b=P.length);for(var T=b-this.blockSize,S=this.B,R=this.h,C=0;C<b;){if(R==0)for(;C<=T;)r(this,P,C),C+=this.blockSize;if(typeof P=="string"){for(;C<b;)if(S[R++]=P.charCodeAt(C++),R==this.blockSize){r(this,S),R=0;break}}else for(;C<b;)if(S[R++]=P[C++],R==this.blockSize){r(this,S),R=0;break}}this.h=R,this.o+=b},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var b=1;b<P.length-8;++b)P[b]=0;var T=8*this.o;for(b=P.length-8;b<P.length;++b)P[b]=T&255,T/=256;for(this.u(P),P=Array(16),b=T=0;4>b;++b)for(var S=0;32>S;S+=8)P[T++]=this.g[b]>>>S&255;return P};function i(P,b){var T=c;return Object.prototype.hasOwnProperty.call(T,P)?T[P]:T[P]=b(P)}function a(P,b){this.h=b;for(var T=[],S=!0,R=P.length-1;0<=R;R--){var C=P[R]|0;S&&C==b||(T[R]=C,S=!1)}this.g=T}var c={};function d(P){return-128<=P&&128>P?i(P,function(b){return new a([b|0],0>b?-1:0)}):new a([P|0],0>P?-1:0)}function p(P){if(isNaN(P)||!isFinite(P))return v;if(0>P)return F(p(-P));for(var b=[],T=1,S=0;P>=T;S++)b[S]=P/T|0,T*=4294967296;return new a(b,0)}function y(P,b){if(P.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P.charAt(0)=="-")return F(y(P.substring(1),b));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=p(Math.pow(b,8)),S=v,R=0;R<P.length;R+=8){var C=Math.min(8,P.length-R),E=parseInt(P.substring(R,R+C),b);8>C?(C=p(Math.pow(b,C)),S=S.j(C).add(p(E))):(S=S.j(T),S=S.add(p(E)))}return S}var v=d(0),A=d(1),x=d(16777216);n=a.prototype,n.m=function(){if($(this))return-F(this).m();for(var P=0,b=1,T=0;T<this.g.length;T++){var S=this.i(T);P+=(0<=S?S:4294967296+S)*b,b*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(B(this))return"0";if($(this))return"-"+F(this).toString(P);for(var b=p(Math.pow(P,6)),T=this,S="";;){var R=_e(T,b).g;T=te(T,R.j(b));var C=((0<T.g.length?T.g[0]:T.h)>>>0).toString(P);if(T=R,B(T))return C+S;for(;6>C.length;)C="0"+C;S=C+S}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function B(P){if(P.h!=0)return!1;for(var b=0;b<P.g.length;b++)if(P.g[b]!=0)return!1;return!0}function $(P){return P.h==-1}n.l=function(P){return P=te(this,P),$(P)?-1:B(P)?0:1};function F(P){for(var b=P.g.length,T=[],S=0;S<b;S++)T[S]=~P.g[S];return new a(T,~P.h).add(A)}n.abs=function(){return $(this)?F(this):this},n.add=function(P){for(var b=Math.max(this.g.length,P.g.length),T=[],S=0,R=0;R<=b;R++){var C=S+(this.i(R)&65535)+(P.i(R)&65535),E=(C>>>16)+(this.i(R)>>>16)+(P.i(R)>>>16);S=E>>>16,C&=65535,E&=65535,T[R]=E<<16|C}return new a(T,T[T.length-1]&-2147483648?-1:0)};function te(P,b){return P.add(F(b))}n.j=function(P){if(B(this)||B(P))return v;if($(this))return $(P)?F(this).j(F(P)):F(F(this).j(P));if($(P))return F(this.j(F(P)));if(0>this.l(x)&&0>P.l(x))return p(this.m()*P.m());for(var b=this.g.length+P.g.length,T=[],S=0;S<2*b;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<P.g.length;R++){var C=this.i(S)>>>16,E=this.i(S)&65535,nt=P.i(R)>>>16,ze=P.i(R)&65535;T[2*S+2*R]+=E*ze,K(T,2*S+2*R),T[2*S+2*R+1]+=C*ze,K(T,2*S+2*R+1),T[2*S+2*R+1]+=E*nt,K(T,2*S+2*R+1),T[2*S+2*R+2]+=C*nt,K(T,2*S+2*R+2)}for(S=0;S<b;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=b;S<2*b;S++)T[S]=0;return new a(T,0)};function K(P,b){for(;(P[b]&65535)!=P[b];)P[b+1]+=P[b]>>>16,P[b]&=65535,b++}function ne(P,b){this.g=P,this.h=b}function _e(P,b){if(B(b))throw Error("division by zero");if(B(P))return new ne(v,v);if($(P))return b=_e(F(P),b),new ne(F(b.g),F(b.h));if($(b))return b=_e(P,F(b)),new ne(F(b.g),b.h);if(30<P.g.length){if($(P)||$(b))throw Error("slowDivide_ only works with positive integers.");for(var T=A,S=b;0>=S.l(P);)T=Xe(T),S=Xe(S);var R=le(T,1),C=le(S,1);for(S=le(S,2),T=le(T,2);!B(S);){var E=C.add(S);0>=E.l(P)&&(R=R.add(T),C=E),S=le(S,1),T=le(T,1)}return b=te(P,R.j(b)),new ne(R,b)}for(R=v;0<=P.l(b);){for(T=Math.max(1,Math.floor(P.m()/b.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),C=p(T),E=C.j(b);$(E)||0<E.l(P);)T-=S,C=p(T),E=C.j(b);B(C)&&(C=A),R=R.add(C),P=te(P,E)}return new ne(R,P)}n.A=function(P){return _e(this,P).h},n.and=function(P){for(var b=Math.max(this.g.length,P.g.length),T=[],S=0;S<b;S++)T[S]=this.i(S)&P.i(S);return new a(T,this.h&P.h)},n.or=function(P){for(var b=Math.max(this.g.length,P.g.length),T=[],S=0;S<b;S++)T[S]=this.i(S)|P.i(S);return new a(T,this.h|P.h)},n.xor=function(P){for(var b=Math.max(this.g.length,P.g.length),T=[],S=0;S<b;S++)T[S]=this.i(S)^P.i(S);return new a(T,this.h^P.h)};function Xe(P){for(var b=P.g.length+1,T=[],S=0;S<b;S++)T[S]=P.i(S)<<1|P.i(S-1)>>>31;return new a(T,P.h)}function le(P,b){var T=b>>5;b%=32;for(var S=P.g.length-T,R=[],C=0;C<S;C++)R[C]=0<b?P.i(C+T)>>>b|P.i(C+T+1)<<32-b:P.i(C+T);return new a(R,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,bu=Wf.Md5=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=p,a.fromString=y,hn=Wf.Integer=a}).apply(typeof Kf<"u"?Kf:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fn={};var Iu,Qv,Xs,Eu,gi,Zo,Tu,Au,Su;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(o,u){if(u)e:{var h=s;o=o.split(".");for(var g=0;g<o.length-1;g++){var k=o[g];if(!(k in h))break e;h=h[k]}o=o[o.length-1],g=h[o],u=u(g),u!=g&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,g=!1,k={next:function(){if(!g&&h<o.length){var O=h++;return{value:u(O,o[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});var a=a||{},c=this||self;function d(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function p(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function y(o,u,h){return o.call.apply(o.bind,arguments)}function v(o,u,h){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),o.apply(u,k)}}return function(){return o.apply(u,arguments)}}function A(o,u,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,A.apply(null,arguments)}function x(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function B(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(g,k,O){for(var z=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)z[Ie-2]=arguments[Ie];return u.prototype[k].apply(g,z)}}function $(o){let u=o.length;if(0<u){let h=Array(u);for(let g=0;g<u;g++)h[g]=o[g];return h}return[]}function F(o,u){for(let h=1;h<arguments.length;h++){let g=arguments[h];if(d(g)){let k=o.length||0,O=g.length||0;o.length=k+O;for(let z=0;z<O;z++)o[k+z]=g[z]}else o.push(g)}}class te{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(o){return/^[\s\xa0]*$/.test(o)}function ne(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function _e(o){return _e[" "](o),o}_e[" "]=function(){};var Xe=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function le(o,u,h){for(let g in o)u.call(h,o[g],g,o)}function P(o,u){for(let h in o)u.call(void 0,o[h],h,o)}function b(o){let u={};for(let h in o)u[h]=o[h];return u}let T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(o,u){let h,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(h in g)o[h]=g[h];for(let O=0;O<T.length;O++)h=T[O],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function R(o){var u=1;o=o.split(":");let h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function C(o){c.setTimeout(()=>{throw o},0)}function E(){var o=st;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class nt{constructor(){this.h=this.g=null}add(u,h){let g=ze.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var ze=new te(()=>new lt,o=>o.reset());class lt{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Ct=!1,st=new nt,qi=()=>{let o=c.Promise.resolve(void 0);Ce=()=>{o.then(rc)}};var rc=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){C(h)}var u=ze;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Ct=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var ic=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{let h=()=>{};c.addEventListener("test",h,u),c.removeEventListener("test",h,u)}catch{}return o}();function Me(o,u){if(De.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Xe){e:{try{_e(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Kn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Me.aa.h.call(this)}}B(Me,De);var Kn={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function pt(o,u,h,g,k){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=k,this.key=++Ne,this.da=this.fa=!1}function Ns(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Os(o){this.src=o,this.g={},this.h=0}Os.prototype.add=function(o,u,h,g,k){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var z=xs(o,u,g,k);return-1<z?(u=o[z],h||(u.fa=!1)):(u=new pt(u,this.src,O,!!g,k),u.fa=h,o.push(u)),u};function Cr(o,u){var h=u.type;if(h in o.g){var g=o.g[h],k=Array.prototype.indexOf.call(g,u,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(Ns(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function xs(o,u,h,g){for(var k=0;k<o.length;++k){var O=o[k];if(!O.da&&O.listener==u&&O.capture==!!h&&O.ha==g)return k}return-1}var Dr="closure_lm_"+(1e6*Math.random()|0),rn={};function zi(o,u,h,g,k){if(g&&g.once)return $i(o,u,h,g,k);if(Array.isArray(u)){for(var O=0;O<u.length;O++)zi(o,u[O],h,g,k);return null}return h=Lr(h),o&&o[wn]?o.K(u,h,p(g)?!!g.capture:!!g,k):se(o,u,h,!1,g,k)}function se(o,u,h,g,k,O){if(!u)throw Error("Invalid event type");var z=p(k)?!!k.capture:!!k,Ie=Vs(o);if(Ie||(o[Dr]=Ie=new Os(o)),h=Ie.add(u,h,g,z,O),h.proxy)return h;if(g=Gi(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)ic||(k=z),k===void 0&&(k=!1),o.addEventListener(u.toString(),g,k);else if(o.attachEvent)o.attachEvent(xr(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Gi(){function o(h){return u.call(o.src,o.listener,h)}let u=oc;return o}function $i(o,u,h,g,k){if(Array.isArray(u)){for(var O=0;O<u.length;O++)$i(o,u[O],h,g,k);return null}return h=Lr(h),o&&o[wn]?o.L(u,h,p(g)?!!g.capture:!!g,k):se(o,u,h,!0,g,k)}function Nr(o,u,h,g,k){if(Array.isArray(u))for(var O=0;O<u.length;O++)Nr(o,u[O],h,g,k);else g=p(g)?!!g.capture:!!g,h=Lr(h),o&&o[wn]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],h=xs(O,h,g,k),-1<h&&(Ns(O[h]),Array.prototype.splice.call(O,h,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=Vs(o))&&(u=o.g[u.toString()],o=-1,u&&(o=xs(u,h,g,k)),(h=-1<o?u[o]:null)&&Or(h))}function Or(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[wn])Cr(u.i,o);else{var h=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(h,g,o.capture):u.detachEvent?u.detachEvent(xr(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=Vs(u))?(Cr(h,o),h.h==0&&(h.src=null,u[Dr]=null)):Ns(o)}}}function xr(o){return o in rn?rn[o]:rn[o]="on"+o}function oc(o,u){if(o.da)o=!0;else{u=new Me(u,this);var h=o.listener,g=o.ha||o.src;o.fa&&Or(o),o=h.call(g,u)}return o}function Vs(o){return o=o[Dr],o instanceof Os?o:null}var Vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lr(o){return typeof o=="function"?o:(o[Vr]||(o[Vr]=function(u){return o.handleEvent(u)}),o[Vr])}function Fe(){Dt.call(this),this.i=new Os(this),this.M=this,this.F=null}B(Fe,Dt),Fe.prototype[wn]=!0,Fe.prototype.removeEventListener=function(o,u,h,g){Nr(this,o,u,h,g)};function Ge(o,u){var h,g=o.F;if(g)for(h=[];g;g=g.F)h.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new De(u,o);else if(u instanceof De)u.target=u.target||o;else{var k=u;u=new De(g,o),S(u,k)}if(k=!0,h)for(var O=h.length-1;0<=O;O--){var z=u.g=h[O];k=Wn(z,g,!0,u)&&k}if(z=u.g=o,k=Wn(z,g,!0,u)&&k,k=Wn(z,g,!1,u)&&k,h)for(O=0;O<h.length;O++)z=u.g=h[O],k=Wn(z,g,!1,u)&&k}Fe.prototype.N=function(){if(Fe.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],g=0;g<h.length;g++)Ns(h[g]);delete o.g[u],o.h--}}this.F=null},Fe.prototype.K=function(o,u,h,g){return this.i.add(String(o),u,!1,h,g)},Fe.prototype.L=function(o,u,h,g){return this.i.add(String(o),u,!0,h,g)};function Wn(o,u,h,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,O=0;O<u.length;++O){var z=u[O];if(z&&!z.da&&z.capture==h){var Ie=z.listener,tt=z.ha||z.src;z.fa&&Cr(o.i,z),k=Ie.call(tt,g)!==!1&&k}}return k&&!g.defaultPrevented}function Mr(o,u,h){if(typeof o=="function")h&&(o=A(o,h));else if(o&&typeof o.handleEvent=="function")o=A(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Fr(o){o.g=Mr(()=>{o.g=null,o.i&&(o.i=!1,Fr(o))},o.l);let u=o.h;o.h=null,o.m.apply(null,u)}class Hi extends Dt{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Fr(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(o){Dt.call(this),this.h=o,this.g={}}B(bn,Dt);var Ur=[];function Ki(o){le(o.g,function(u,h){this.g.hasOwnProperty(h)&&Or(u)},o),o.g={}}bn.prototype.N=function(){bn.aa.N.call(this),Ki(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Br=c.JSON.stringify,In=c.JSON.parse,Et=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ft(){}ft.prototype.h=null;function Qn(o){return o.h||(o.h=o.i())}function Ls(){}var Jn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yn(){De.call(this,"d")}B(Yn,De);function Xn(){De.call(this,"c")}B(Xn,De);var Bt={},Ms=null;function jt(){return Ms=Ms||new Fe}Bt.La="serverreachability";function Zn(o){De.call(this,Bt.La,o)}B(Zn,De);function on(o){let u=jt();Ge(u,new Zn(u))}Bt.STAT_EVENT="statevent";function jr(o,u){De.call(this,Bt.STAT_EVENT,o),this.stat=u}B(jr,De);function $e(o){let u=jt();Ge(u,new jr(u,o))}Bt.Ma="timingevent";function Wi(o,u){De.call(this,Bt.Ma,o),this.size=u}B(Wi,De);function es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function ns(o,u,h,g,k,O){o.info(function(){if(o.g)if(O)for(var z="",Ie=O.split("&"),tt=0;tt<Ie.length;tt++){var ge=Ie[tt].split("=");if(1<ge.length){var it=ge[0];ge=ge[1];var ot=it.split("_");z=2<=ot.length&&ot[1]=="type"?z+(it+"="+ge+"&"):z+(it+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+u+`
`+h+`
`+z})}function ac(o,u,h,g,k,O,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+u+`
`+h+`
`+O+" "+z})}function Nt(o,u,h,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+uc(o,h)+(g?" "+g:"")})}function cc(o,u){o.info(function(){return"TIMEOUT: "+u})}ts.prototype.info=function(){};function uc(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var g=h[o];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<k.length;z++)k[z]=""}}}}return Br(h)}catch{return u}}var Fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zr;function Us(){}B(Us,ft),Us.prototype.g=function(){return new XMLHttpRequest},Us.prototype.i=function(){return{}},zr=new Us;function Ot(o,u,h,g){this.j=o,this.i=u,this.l=h,this.R=g||1,this.U=new bn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qi}function Qi(){this.i=null,this.g="",this.h=!1}var Ji={},ss={};function En(o,u,h){o.L=1,o.v=An(Tt(u)),o.m=h,o.P=!0,Gr(o,null)}function Gr(o,u){o.F=Date.now(),Bs(o),o.A=Tt(o.v);var h=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),U(h.i,"t",g),o.C=0,h=o.j.J,o.h=new Qi,o.g=uh(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Hi(A(o.Y,o,o.g),o.O)),u=o.U,h=o.g,g=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ur[0]=k.toString()),k=Ur);for(var O=0;O<k.length;O++){var z=zi(h,k[O],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?b(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),on(),ns(o.i,o.u,o.A,o.l,o.R,o.m)}Ot.prototype.ca=function(o){o=o.target;let u=this.M;u&&St(o)==3?u.j():this.Y(o)},Ot.prototype.Y=function(o){try{if(o==this.g)e:{let ot=St(this.g);var u=this.g.Ba();let Hs=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Xd(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Hs?on(3):on(2)),js(this);var h=this.g.Z();this.X=h;t:if(Yi(this)){var g=Xd(this.g);o="";var k=g.length,O=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),rs(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(O&&u==k-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=h==200,ac(this.i,this.u,this.A,this.l,this.R,ot,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,tt=this.g;if((Ie=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Ie)){var ge=Ie;break t}}ge=null}if(h=ge)Nt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ze(this,h);else{this.o=!1,this.s=3,$e(12),Se(this),rs(this);break e}}if(this.P){h=!0;let Vt;for(;!this.J&&this.C<z.length;)if(Vt=lc(this,z),Vt==ss){ot==4&&(this.s=4,$e(14),h=!1),Nt(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Ji){this.s=4,$e(15),Nt(this.i,this.l,z,"[Invalid Chunk]"),h=!1;break}else Nt(this.i,this.l,Vt,null),Ze(this,Vt);if(Yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||z.length!=0||this.h.h||(this.s=1,$e(16),h=!1),this.o=this.o&&h,!h)Nt(this.i,this.l,z,"[Invalid Chunked Response]"),Se(this),rs(this);else if(0<z.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),mc(it),it.M=!0,$e(11))}}else Nt(this.i,this.l,z,null),Ze(this,z);ot==4&&Se(this),this.o&&!this.J&&(ot==4?ih(this.j,this):(this.o=!1,Bs(this)))}else Lg(this.g),h==400&&0<z.indexOf("Unknown SID")?(this.s=3,$e(12)):(this.s=0,$e(13)),Se(this),rs(this)}}}catch{}finally{}};function Yi(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function lc(o,u){var h=o.C,g=u.indexOf(`
`,h);return g==-1?ss:(h=Number(u.substring(h,g)),isNaN(h)?Ji:(g+=1,g+h>u.length?ss:(u=u.slice(g,g+h),o.C=g+h,u)))}Ot.prototype.cancel=function(){this.J=!0,Se(this)};function Bs(o){o.S=Date.now()+o.I,$r(o,o.I)}function $r(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=es(A(o.ba,o),u)}function js(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Ot.prototype.ba=function(){this.B=null;let o=Date.now();0<=o-this.S?(cc(this.i,this.A),this.L!=2&&(on(),$e(17)),Se(this),this.s=2,rs(this)):$r(this,this.S-o)};function rs(o){o.j.G==0||o.J||ih(o.j,o)}function Se(o){js(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ki(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ze(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||zs(h.h,o))){if(!o.K&&zs(h.h,o)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)io(h),so(h);else break e;pc(h),$e(18)}}else h.za=k[1],0<h.za-h.T&&37500>k[2]&&h.F&&h.v==0&&!h.C&&(h.C=es(A(h.Za,h),6e3));if(1>=Hr(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else as(h,11)}else if((o.K||h.g==o)&&io(h),!K(u))for(k=h.Da.g.parse(u),u=0;u<k.length;u++){let ge=k[u];if(h.T=ge[0],ge=ge[1],h.G==2)if(ge[0]=="c"){h.K=ge[1],h.ia=ge[2];let it=ge[3];it!=null&&(h.la=it,h.j.info("VER="+h.la));let ot=ge[4];ot!=null&&(h.Aa=ot,h.j.info("SVER="+h.Aa));let Hs=ge[5];Hs!=null&&typeof Hs=="number"&&0<Hs&&(g=1.5*Hs,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;let Vt=o.g;if(Vt){let ao=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ao){var O=g.h;O.g||ao.indexOf("spdy")==-1&&ao.indexOf("quic")==-1&&ao.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Kr(O,O.h),O.h=null))}if(g.D){let gc=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(g.ya=gc,be(g.I,g.D,gc))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var z=o;if(g.qa=ch(g,g.J?g.ia:null,g.W),z.K){Wr(g.h,z);var Ie=z,tt=g.L;tt&&(Ie.I=tt),Ie.B&&(js(Ie),Bs(Ie)),g.g=z}else sh(g);0<h.i.length&&ro(h)}else ge[0]!="stop"&&ge[0]!="close"||as(h,7);else h.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?as(h,7):fc(h):ge[0]!="noop"&&h.l&&h.l.ta(ge),h.v=0)}}on(4)}catch{}}var mt=class{constructor(o,u){this.g=o,this.map=u}};function xt(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qs(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Hr(o){return o.h?1:o.g?o.g.size:0}function zs(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Kr(o,u){o.g?o.g.add(u):o.h=u}function Wr(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}xt.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let o of this.g.values())o.cancel();this.g.clear()}};function Xi(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(let h of o.g.values())u=u.concat(h.D);return u}return $(o.i)}function Zi(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var u=[],h=o.length,g=0;g<h;g++)u.push(o[g]);return u}u=[],h=0;for(g in o)u[h++]=o[g];return u}function dc(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(let g in o)u[h++]=g;return u}}}function eo(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=dc(o),g=Zi(o),k=g.length,O=0;O<k;O++)u.call(void 0,g[O],h&&h[O],o)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hc(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var g=o[h].indexOf("="),k=null;if(0<=g){var O=o[h].substring(0,g);k=o[h].substring(g+1)}else O=o[h];u(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function an(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof an){this.h=o.h,Gs(this,o.j),this.o=o.o,this.g=o.g,Tn(this,o.s),this.l=o.l;var u=o.i,h=new _;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),no(this,h),this.m=o.m}else o&&(u=String(o).match(to))?(this.h=!1,Gs(this,u[1]||"",!0),this.o=Sn(u[2]||""),this.g=Sn(u[3]||"",!0),Tn(this,u[4]),this.l=Sn(u[5]||"",!0),no(this,u[6]||"",!0),this.m=Sn(u[7]||"")):(this.h=!1,this.i=new _(null,this.h))}an.prototype.toString=function(){var o=[],u=this.j;u&&o.push(is(u,Rn,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(is(u,Rn,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(is(h,h.charAt(0)=="/"?l:os,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",is(h,m)),o.join("")};function Tt(o){return new an(o)}function Gs(o,u,h){o.j=h?Sn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Tn(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function no(o,u,h){u instanceof _?(o.i=u,G(o.i,o.h)):(h||(u=is(u,f)),o.i=new _(u,o.h))}function be(o,u,h){o.i.set(u,h)}function An(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Sn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function is(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,qt),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function qt(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rn=/[#\/\?@]/g,os=/[#\?:]/g,l=/[#\?]/g,f=/[#\?@]/g,m=/#/g;function _(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function w(o){o.g||(o.g=new Map,o.h=0,o.i&&hc(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=_.prototype,n.add=function(o,u){w(this),this.i=null,o=L(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function I(o,u){w(o),u=L(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function N(o,u){return w(o),u=L(o,u),o.g.has(u)}n.forEach=function(o,u){w(this),this.g.forEach(function(h,g){h.forEach(function(k){o.call(u,k,g,this)},this)},this)},n.na=function(){w(this);let o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){let k=o[g];for(let O=0;O<k.length;O++)h.push(u[g])}return h},n.V=function(o){w(this);let u=[];if(typeof o=="string")N(this,o)&&(u=u.concat(this.g.get(L(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return w(this),this.i=null,o=L(this,o),N(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function U(o,u,h){I(o,u),0<h.length&&(o.i=null,o.g.set(L(o,u),$(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];let O=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var k=O;z[g]!==""&&(k+="="+encodeURIComponent(String(z[g]))),o.push(k)}}return this.i=o.join("&")};function L(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function G(o,u){u&&!o.j&&(w(o),o.i=null,o.g.forEach(function(h,g){var k=g.toLowerCase();g!=k&&(I(this,g),U(this,k,h))},o)),o.j=u}function pe(o,u){let h=new ts;if(c.Image){let g=new Image;g.onload=x(Ue,h,"TestLoadImage: loaded",!0,u,g),g.onerror=x(Ue,h,"TestLoadImage: error",!1,u,g),g.onabort=x(Ue,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=x(Ue,h,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Re(o,u){let h=new ts,g=new AbortController,k=setTimeout(()=>{g.abort(),Ue(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?Ue(h,"TestPingServer: ok",!0,u):Ue(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Ue(h,"TestPingServer: error",!1,u)})}function Ue(o,u,h,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(h)}catch{}}function At(){this.g=new Et}function re(o,u,h){let g=h||"";try{eo(o,function(k,O){let z=k;p(k)&&(z=Br(k)),u.push(g+O+"="+encodeURIComponent(z))})}catch(k){throw u.push(g+"type="+encodeURIComponent("_badmap")),k}}function He(o){this.l=o.Ub||null,this.j=o.eb||!1}B(He,ft),He.prototype.g=function(){return new rt(this.l,this.j)},He.prototype.i=function(o){return function(){return o}}({});function rt(o,u){Fe.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(rt,Fe),n=rt.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ie(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Q(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ie(this)),this.g&&(this.readyState=3,ie(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zt(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function zt(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Q(this):ie(this),this.readyState==3&&zt(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Q(this))},n.Qa=function(o){this.g&&(this.response=o,Q(this))},n.ga=function(){this.g&&Q(this)};function Q(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ie(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function ie(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ye(o){let u="";return le(o,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function Pe(o,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=ye(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):be(o,u,h))}function q(o){Fe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(q,Fe);var de=/^https?$/i,ve=["POST","PUT"];n=q.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zr.g(),this.v=this.o?Qn(this.o):Qn(zr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){Be(this,O);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)h.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(let O of g.keys())h.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),k=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ve,u,void 0))||g||k||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[O,z]of h)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pn(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){Be(this,O)}};function Be(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,gt(o),et(o)}function gt(o){o.A||(o.A=!0,Ge(o,"complete"),Ge(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ge(this,"complete"),Ge(this,"abort"),et(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),et(this,!0)),q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?me(this):this.bb())},n.bb=function(){me(this)};function me(o){if(o.h&&typeof a<"u"&&(!o.v[1]||St(o)!=4||o.Z()!=2)){if(o.u&&St(o)==4)Mr(o.Ea,0,o);else if(Ge(o,"readystatechange"),St(o)==4){o.h=!1;try{let z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=z===0){var k=String(o.D).match(to)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),g=!de.test(k?k.toLowerCase():"")}h=g}if(h)Ge(o,"complete"),Ge(o,"success");else{o.m=6;try{var O=2<St(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",gt(o)}}finally{et(o)}}}}function et(o,u){if(o.g){Pn(o);let h=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ge(o,"ready");try{h.onreadystatechange=g}catch{}}}function Pn(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function St(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),In(u)}};function Xd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lg(o){let u={};o=(o.g&&2<=St(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(K(o[g]))continue;var h=R(o[g]);let k=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();let O=u[k]||[];u[k]=O,O.push(h)}P(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Zd(o){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qr("baseRetryDelayMs",5e3,o),this.cb=Qr("retryDelaySeedMs",1e4,o),this.Wa=Qr("forwardChannelMaxRetries",2,o),this.wa=Qr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new xt(o&&o.concurrentRequestLimit),this.Da=new At,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zd.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,g){$e(0),this.W=o,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=ch(this,null,this.W),ro(this)};function fc(o){if(eh(o),o.G==3){var u=o.U++,h=Tt(o.I);if(be(h,"SID",o.K),be(h,"RID",u),be(h,"TYPE","terminate"),Jr(o,h),u=new Ot(o,o.j,u),u.L=2,u.v=An(Tt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=u.v,h=!0),h||(u.g=uh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Bs(u)}ah(o)}function so(o){o.g&&(mc(o),o.g.cancel(),o.g=null)}function eh(o){so(o),o.u&&(c.clearTimeout(o.u),o.u=null),io(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ro(o){if(!qs(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ce||qi(),Ct||(Ce(),Ct=!0),st.add(u,o),o.B=0}}function Mg(o,u){return Hr(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=es(A(o.Ga,o,u),oh(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;let k=new Ot(this,this.j,o),O=this.o;if(this.S&&(O?(O=b(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=nh(this,k,u),h=Tt(this.I),be(h,"RID",o),be(h,"CVER",22),this.D&&be(h,"X-HTTP-Session-Id",this.D),Jr(this,h),O&&(this.O?u="headers="+encodeURIComponent(String(ye(O)))+"&"+u:this.m&&Pe(h,this.m,O)),Kr(this.h,k),this.Ua&&be(h,"TYPE","init"),this.P?(be(h,"$req",u),be(h,"SID","null"),k.T=!0,En(k,h,null)):En(k,h,u),this.G=2}}else this.G==3&&(o?th(this,o):this.i.length==0||qs(this.h)||th(this))};function th(o,u){var h;u?h=u.l:h=o.U++;let g=Tt(o.I);be(g,"SID",o.K),be(g,"RID",h),be(g,"AID",o.T),Jr(o,g),o.m&&o.o&&Pe(g,o.m,o.o),h=new Ot(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=nh(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Kr(o.h,h),En(h,g,u)}function Jr(o,u){o.H&&le(o.H,function(h,g){be(u,g,h)}),o.l&&eo({},function(h,g){be(u,g,h)})}function nh(o,u,h){h=Math.min(o.i.length,h);var g=o.l?A(o.l.Na,o.l,o):null;e:{var k=o.i;let O=-1;for(;;){let z=["count="+h];O==-1?0<h?(O=k[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let Ie=!0;for(let tt=0;tt<h;tt++){let ge=k[tt].g,it=k[tt].map;if(ge-=O,0>ge)O=Math.max(0,k[tt].g-100),Ie=!1;else try{re(it,z,"req"+ge+"_")}catch{g&&g(it)}}if(Ie){g=z.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,g}function sh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ce||qi(),Ct||(Ce(),Ct=!0),st.add(u,o),o.v=0}}function pc(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=es(A(o.Fa,o),oh(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=es(A(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$e(10),so(this),rh(this))};function mc(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new Ot(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Tt(o.qa);be(u,"RID","rpc"),be(u,"SID",o.K),be(u,"AID",o.T),be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(u,"TO",o.ja),be(u,"TYPE","xmlhttp"),Jr(o,u),o.m&&o.o&&Pe(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=An(Tt(u)),h.m=null,h.P=!0,Gr(h,o)}n.Za=function(){this.C!=null&&(this.C=null,so(this),pc(this),$e(19))};function io(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ih(o,u){var h=null;if(o.g==u){io(o),mc(o),o.g=null;var g=2}else if(zs(o.h,u))h=u.D,Wr(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var k=o.B;g=jt(),Ge(g,new Wi(g,h)),ro(o)}else sh(o);else if(k=u.s,k==3||k==0&&0<u.X||!(g==1&&Mg(o,u)||g==2&&pc(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),k){case 1:as(o,5);break;case 4:as(o,10);break;case 3:as(o,6);break;default:as(o,2)}}}function oh(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function as(o,u){if(o.j.info("Error code "+u),u==2){var h=A(o.fb,o),g=o.Xa;let k=!g;g=new an(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Gs(g,"https"),An(g),k?pe(g.toString(),h):Re(g.toString(),h)}else $e(2);o.G=0,o.l&&o.l.sa(u),ah(o),eh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function ah(o){if(o.G=0,o.ka=[],o.l){let u=Xi(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,$(o.i),o.i.length=0),o.l.ra()}}function ch(o,u,h){var g=h instanceof an?Tt(h):new an(h);if(g.g!="")u&&(g.g=u+"."+g.g),Tn(g,g.s);else{var k=c.location;g=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var O=new an(null);g&&Gs(O,g),u&&(O.g=u),k&&Tn(O,k),h&&(O.l=h),g=O}return h=o.D,u=o.ya,h&&u&&be(g,h,u),be(g,"VER",o.la),Jr(o,g),g}function uh(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new q(new He({eb:h})):new q(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lh(){}n=lh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oo(){}oo.prototype.g=function(o,u){return new _t(o,u)};function _t(o,u){Fe.call(this),this.g=new Zd(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!K(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new $s(this)}B(_t,Fe),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){fc(this.g)},_t.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Br(o),o=h);u.i.push(new mt(u.Ya++,o)),u.G==3&&ro(u)},_t.prototype.N=function(){this.g.l=null,delete this.j,fc(this.g),delete this.g,_t.aa.N.call(this)};function dh(o){Yn.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(let h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}B(dh,Yn);function hh(){Xn.call(this),this.status=1}B(hh,Xn);function $s(o){this.g=o}B($s,lh),$s.prototype.ua=function(){Ge(this.g,"a")},$s.prototype.ta=function(o){Ge(this.g,new dh(o))},$s.prototype.sa=function(o){Ge(this.g,new hh)},$s.prototype.ra=function(){Ge(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,Su=fn.createWebChannelTransport=function(){return new oo},Au=fn.getStatEventTarget=function(){return jt()},Tu=fn.Event=Bt,Zo=fn.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fs.NO_ERROR=0,Fs.TIMEOUT=8,Fs.HTTP_ERROR=6,gi=fn.ErrorCode=Fs,qr.COMPLETE="complete",Eu=fn.EventType=qr,Ls.EventType=Jn,Jn.OPEN="a",Jn.CLOSE="b",Jn.ERROR="c",Jn.MESSAGE="d",Fe.prototype.listen=Fe.prototype.K,Xs=fn.WebChannel=Ls,Qv=fn.FetchXmlHttpFactory=He,q.prototype.listenOnce=q.prototype.L,q.prototype.getLastError=q.prototype.Ka,q.prototype.getLastErrorCode=q.prototype.Ba,q.prototype.getStatus=q.prototype.Z,q.prototype.getResponseJson=q.prototype.Oa,q.prototype.getResponseText=q.prototype.oa,q.prototype.send=q.prototype.ea,q.prototype.setWithCredentials=q.prototype.Ha,Iu=fn.XhrIo=q}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});var Qf="@firebase/firestore",Jf="4.8.0";var We=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");var Er="11.10.0";var vs=new Cn("@firebase/firestore");function Zs(){return vs.logLevel}function H(n,...e){if(vs.logLevel<=ue.DEBUG){let t=e.map(gd);vs.debug(`Firestore (${Er}): ${n}`,...t)}}function pn(n,...e){if(vs.logLevel<=ue.ERROR){let t=e.map(gd);vs.error(`Firestore (${Er}): ${n}`,...t)}}function qn(n,...e){if(vs.logLevel<=ue.WARN){let t=e.map(gd);vs.warn(`Firestore (${Er}): ${n}`,...t)}}function gd(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}function ee(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Up(n,s,t)}function Up(n,e,t){let s=`FIRESTORE (${Er}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw pn(s),new Error(s)}function we(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Up(e,r,s)}function oe(n,e){return n}var V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},J=class extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Yt=class{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};var oa=class{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},Nu=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(We.UNAUTHENTICATED))}shutdown(){}},Ou=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}},xu=class{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0,42304);let s=this.i,r=d=>this.i!==s?(s=this.i,t(d)):Promise.resolve(),i=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yt,e.enqueueRetryable(()=>r(this.currentUser))};let a=()=>{let d=i;e.enqueueRetryable(async()=>{await d.promise,await r(this.currentUser)})},c=d=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){let d=this.t.getImmediate({optional:!0});d?c(d):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yt)}},0),a()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(we(typeof s.accessToken=="string",31837,{l:s}),new oa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new We(e)}},Vu=class{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},Lu=class{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Vu(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}},aa=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Mu=class{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){we(this.o===void 0,3512);let s=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);let a=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};let r=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){let i=this.V.getImmediate({optional:!0});i?r(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new aa(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new aa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function Jv(n){let e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}function Bp(){return new TextEncoder}var Ii=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516),s="";for(;s.length<20;){let r=Jv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}};function ce(n,e){return n<e?-1:n>e?1:0}function Fu(n,e){let t=0;for(;t<n.length&&t<e.length;){let s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return ce(s,r);{let i=Bp(),a=Yv(i.encode(Yf(n,t)),i.encode(Yf(e,t)));return a!==0?a:ce(s,r)}}t+=s>65535?2:1}return ce(n.length,e.length)}function Yf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Yv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ce(n[t],e[t]);return ce(n.length,e.length)}function ar(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}var Xf="__name__",ca=class n{constructor(e,t,s){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ee(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return n.comparator(this,e)===0}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof n?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let s=Math.min(e.length,t.length);for(let r=0;r<s;r++){let i=n.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){let s=n.isNumericId(e),r=n.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?n.extractNumericId(e).compare(n.extractNumericId(t)):Fu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hn.fromString(e.substring(4,e.length-2))}},Ae=class n extends ca{construct(e,t,s){return new n(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let s of e){if(s.indexOf("//")>=0)throw new J(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new n(t)}static emptyPath(){return new n([])}},Xv=/^[_a-zA-Z][_a-zA-Z0-9]*$/,wt=class n extends ca{construct(e,t,s){return new n(e,t,s)}static isValidIdentifier(e){return Xv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xf}static keyField(){return new n([Xf])}static fromServerFormat(e){let t=[],s="",r=0,i=()=>{if(s.length===0)throw new J(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""},a=!1;for(;r<e.length;){let c=e[r];if(c==="\\"){if(r+1===e.length)throw new J(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let d=e[r+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new J(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=d,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new J(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new n(t)}static emptyPath(){return new n([])}};var Z=class n{constructor(e){this.path=e}static fromPath(e){return new n(Ae.fromString(e))}static fromName(e){return new n(Ae.fromString(e).popFirst(5))}static empty(){return new n(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new n(new Ae(e.slice()))}};function jp(n,e,t){if(!t)throw new J(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Zv(n,e,t,s){if(e===!0&&s===!0)throw new J(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zf(n){if(!Z.isDocumentKey(n))throw new J(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ep(n){if(Z.isDocumentKey(n))throw new J(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function _d(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function bt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let t=_d(n);throw new J(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ve(n,e){let t={typeString:n};return e&&(t.value=e),t}function Ni(n,e){if(!qp(n))throw new J(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(let s in e)if(e[s]){let r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}let a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new J(V.INVALID_ARGUMENT,t);return!0}var tp=-62135596800,np=1e6,Le=class n{static now(){return n.fromMillis(Date.now())}static fromDate(e){return n.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*np);return new n(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tp)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/np}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ni(e,n._jsonSchema))return new n(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds-tp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Le._jsonSchemaVersion="firestore/timestamp/1.0",Le._jsonSchema={type:Ve("string",Le._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};var ae=class n{static fromTimestamp(e){return new n(e)}static min(){return new n(new Le(0,0))}static max(){return new n(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Ei=-1,Uu=class{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}};Uu.UNKNOWN_ID=-1;function ew(n,e){let t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=ae.fromTimestamp(s===1e9?new Le(t+1,0):new Le(t,s));return new ws(r,Z.empty(),e)}function tw(n){return new ws(n.readTime,n.key,Ei)}var ws=class n{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new n(ae.min(),Z.empty(),Ei)}static max(){return new n(ae.max(),Z.empty(),Ei)}};function nw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}var sw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Bu=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function Tr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==sw)throw n;H("LocalStore","Unexpectedly lost primary lease")}var M=class n{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new n((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof n?t:n.resolve(t)}catch(t){return n.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):n.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):n.reject(t)}static resolve(e){return new n((t,s)=>{t(e)})}static reject(e){return new n((t,s)=>{s(e)})}static waitFor(e){return new n((t,s)=>{let r=0,i=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++i,a&&i===r&&t()},d=>s(d))}),a=!0,i===r&&t()})}static or(e){let t=n.resolve(!1);for(let s of e)t=t.next(r=>r?n.resolve(r):s());return t}static forEach(e,t){let s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new n((s,r)=>{let i=e.length,a=new Array(i),c=0;for(let d=0;d<i;d++){let p=d;t(e[p]).next(y=>{a[p]=y,++c,c===i&&s(a)},y=>r(y))}})}static doWhile(e,t){return new n((s,r)=>{let i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}};function rw(n){let e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ar(n){return n.name==="IndexedDbTransactionError"}var cr=class{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}};cr.ue=-1;var yd=-1;function ja(n){return n==null}function Ti(n){return n===0&&1/n==-1/0}function iw(n){return typeof n=="number"&&Number.isInteger(n)&&!Ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var zp="";function ow(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sp(e)),e=aw(n.get(t),e);return sp(e)}function aw(n,e){let t=e,s=n.length;for(let r=0;r<s;r++){let i=n.charAt(r);switch(i){case"\0":t+="";break;case zp:t+="";break;default:t+=i}}return t}function sp(n){return n+zp+""}var cw="remoteDocuments",Gp="owner";var $p="mutationQueues";var Hp="mutations";var Kp="documentMutations",uw="remoteDocumentsV14";var Wp="remoteDocumentGlobal";var Qp="targets";var Jp="targetDocuments";var Yp="targetGlobal",Xp="collectionParents";var Zp="clientMetadata";var em="bundles";var tm="namedQueries";var lw="indexConfiguration";var dw="indexState";var hw="indexEntries";var nm="documentOverlays";var fw="globals";var pw=[$p,Hp,Kp,cw,Qp,Gp,Yp,Jp,Zp,Wp,Xp,em,tm],rT=[...pw,nm],mw=[$p,Hp,Kp,uw,Qp,Gp,Yp,Jp,Zp,Wp,Xp,em,tm,nm],gw=mw,_w=[...gw,lw,dw,hw];var iT=[..._w,fw];function rp(n){let e=0;for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hn(n,e){for(let t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sm(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}var ke=class n{constructor(e,t){this.comparator=e,this.root=t||Xt.EMPTY}insert(e,t){return new n(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(e){return new n(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){let r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){let e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sr(this.root,e,this.comparator,!0)}},sr=class{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Xt=class n{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??n.RED,this.left=r??n.EMPTY,this.right=i??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new n(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this,i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return n.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}};Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Qe=class n{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){let s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){let r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ua(this.data.getIterator())}getIteratorFrom(e){return new ua(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new n(this.comparator);return t.data=e,t}},ua=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var kt=class n{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new n([])}unionWith(e){let t=new Qe(wt.comparator);for(let s of this.fields)t=t.add(s);for(let s of e)t=t.add(s);return new n(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ar(this.fields,e.fields,(t,s)=>t.isEqual(s))}};var la=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var ut=class n{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new la("Invalid base64 string: "+i):i}}(e);return new n(t)}static fromUint8Array(e){let t=function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i}(e);return new n(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){let s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ut.EMPTY_BYTE_STRING=new ut("");var yw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(n){if(we(!!n,39018),typeof n=="string"){let e=0,t=yw.exec(n);if(we(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}let s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}var rm="server_timestamp",im="__type__",om="__previous_value__",am="__local_write_time__";function vd(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[im])===null||t===void 0?void 0:t.stringValue)===rm}function qa(n){let e=n.mapValue.fields[om];return vd(e)?qa(e):e}function Ai(n){let e=mn(n.mapValue.fields[am].timestampValue);return new Le(e.seconds,e.nanos)}var ju=class{constructor(e,t,s,r,i,a,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=p,this.isUsingEmulator=y}},da="(default)",ha=class n{constructor(e,t){this.projectId=e,this.database=t||da}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===da}isEqual(e){return e instanceof n&&e.projectId===this.projectId&&e.database===this.database}};var wd="__type__",cm="__max__",ea={mapValue:{fields:{__type__:{stringValue:cm}}}},bd="__vector__",ur="value";function zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vd(n)?4:lm(n)?9007199254740991:um(n)?10:11:ee(28295,{value:n})}function tn(n,e){if(n===e)return!0;let t=zn(n);if(t!==zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ai(n).isEqual(Ai(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;let a=mn(r.timestampValue),c=mn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return gn(r.bytesValue).isEqual(gn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Ee(r.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(r.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ee(r.integerValue)===Ee(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){let a=Ee(r.doubleValue),c=Ee(i.doubleValue);return a===c?Ti(a)===Ti(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ar(n.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(r,i){let a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(rp(a)!==rp(c))return!1;for(let d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!tn(a[d],c[d])))return!1;return!0}(n,e);default:return ee(52216,{left:n})}}function Si(n,e){return(n.values||[]).find(t=>tn(t,e))!==void 0}function lr(n,e){if(n===e)return 0;let t=zn(n),s=zn(e);if(t!==s)return ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){let c=Ee(i.integerValue||i.doubleValue),d=Ee(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,e);case 3:return ip(n.timestampValue,e.timestampValue);case 4:return ip(Ai(n),Ai(e));case 5:return Fu(n.stringValue,e.stringValue);case 6:return function(i,a){let c=gn(i),d=gn(a);return c.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){let c=i.split("/"),d=a.split("/");for(let p=0;p<c.length&&p<d.length;p++){let y=ce(c[p],d[p]);if(y!==0)return y}return ce(c.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){let c=ce(Ee(i.latitude),Ee(a.latitude));return c!==0?c:ce(Ee(i.longitude),Ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return op(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,d,p,y;let v=i.fields||{},A=a.fields||{},x=(c=v[ur])===null||c===void 0?void 0:c.arrayValue,B=(d=A[ur])===null||d===void 0?void 0:d.arrayValue,$=ce(((p=x?.values)===null||p===void 0?void 0:p.length)||0,((y=B?.values)===null||y===void 0?void 0:y.length)||0);return $!==0?$:op(x,B)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ea.mapValue&&a===ea.mapValue)return 0;if(i===ea.mapValue)return 1;if(a===ea.mapValue)return-1;let c=i.fields||{},d=Object.keys(c),p=a.fields||{},y=Object.keys(p);d.sort(),y.sort();for(let v=0;v<d.length&&v<y.length;++v){let A=Fu(d[v],y[v]);if(A!==0)return A;let x=lr(c[d[v]],p[y[v]]);if(x!==0)return x}return ce(d.length,y.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{le:t})}}function ip(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);let t=mn(n),s=mn(e),r=ce(t.seconds,s.seconds);return r!==0?r:ce(t.nanos,s.nanos)}function op(n,e){let t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){let i=lr(t[r],s[r]);if(i)return i}return ce(t.length,s.length)}function dr(n){return qu(n)}function qu(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){let s=mn(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return gn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(let i of t.values||[])r?r=!1:s+=",",s+=qu(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){let s=Object.keys(t.fields||{}).sort(),r="{",i=!0;for(let a of s)i?i=!1:r+=",",r+=`${a}:${qu(t.fields[a])}`;return r+"}"}(n.mapValue):ee(61005,{value:n})}function sa(n){switch(zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let e=qa(n);return e?16+sa(e):16;case 5:return 2*n.stringValue.length;case 6:return gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+sa(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Hn(s.fields,(i,a)=>{r+=i.length+sa(a)}),r}(n.mapValue);default:throw ee(13486,{value:n})}}function zu(n){return!!n&&"integerValue"in n}function Id(n){return!!n&&"arrayValue"in n}function ap(n){return!!n&&"nullValue"in n}function cp(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ra(n){return!!n&&"mapValue"in n}function um(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[wd])===null||t===void 0?void 0:t.stringValue)===bd}function yi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let e={mapValue:{fields:{}}};return Hn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=yi(s)),e}if(n.arrayValue){let e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function lm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===cm}var aT={mapValue:{fields:{[wd]:{stringValue:bd},[ur]:{arrayValue:{}}}}};var vt=class n{constructor(e){this.value=e}static empty(){return new n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ra(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(t)}setAll(e){let t=wt.emptyPath(),s={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){let d=this.getFieldsMap(t);this.applyChanges(d,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=yi(a):r.push(c.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){let t=this.field(e.popLast());ra(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ra(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Hn(t,(r,i)=>e[r]=i);for(let r of s)delete e[r]}clone(){return new n(yi(this.value))}};function dm(n){let e=[];return Hn(n.fields,(t,s)=>{let r=new wt([t]);if(ra(s)){let i=dm(s.mapValue).fields;if(i.length===0)e.push(r);else for(let a of i)e.push(r.child(a))}else e.push(r)}),new kt(e)}var Ft=class n{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new n(e,0,ae.min(),ae.min(),ae.min(),vt.empty(),0)}static newFoundDocument(e,t,s,r){return new n(e,1,t,ae.min(),s,r,0)}static newNoDocument(e,t){return new n(e,2,t,ae.min(),ae.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new n(e,3,t,ae.min(),ae.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof n&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var hr=class{constructor(e,t){this.position=e,this.inclusive=t}};function up(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){let i=e[r],a=n.position[r];if(i.field.isKeyField()?s=Z.comparator(Z.fromName(a.referenceValue),t.key):s=lr(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function lp(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tn(n.position[t],e.position[t]))return!1;return!0}var fr=class{constructor(e,t="asc"){this.field=e,this.dir=t}};function vw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}var fa=class{},qe=class n extends fa{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $u(e,t,s):t==="array-contains"?new Wu(e,s):t==="in"?new Qu(e,s):t==="not-in"?new Ju(e,s):t==="array-contains-any"?new Yu(e,s):new n(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Hu(e,s):new Ku(e,s)}matches(e){let t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(lr(t,this.value)):t!==null&&zn(this.value)===zn(t)&&this.matchesComparison(lr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},nn=class n extends fa{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new n(e,t)}matches(e){return hm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function hm(n){return n.op==="and"}function fm(n){return ww(n)&&hm(n)}function ww(n){for(let e of n.filters)if(e instanceof nn)return!1;return!0}function Gu(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+dr(n.value);if(fm(n))return n.filters.map(e=>Gu(e)).join(",");{let e=n.filters.map(t=>Gu(t)).join(",");return`${n.op}(${e})`}}function pm(n,e){return n instanceof qe?function(s,r){return r instanceof qe&&s.op===r.op&&s.field.isEqual(r.field)&&tn(s.value,r.value)}(n,e):n instanceof nn?function(s,r){return r instanceof nn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,a,c)=>i&&pm(a,r.filters[c]),!0):!1}(n,e):void ee(19439)}function mm(n){return n instanceof qe?function(t){return`${t.field.canonicalString()} ${t.op} ${dr(t.value)}`}(n):n instanceof nn?function(t){return t.op.toString()+" {"+t.getFilters().map(mm).join(" ,")+"}"}(n):"Filter"}var $u=class extends qe{constructor(e,t,s){super(e,t,s),this.key=Z.fromName(s.referenceValue)}matches(e){let t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}},Hu=class extends qe{constructor(e,t){super(e,"in",t),this.keys=gm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}},Ku=class extends qe{constructor(e,t){super(e,"not-in",t),this.keys=gm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function gm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Z.fromName(s.referenceValue))}var Wu=class extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Id(t)&&Si(t.arrayValue,this.value)}},Qu=class extends qe{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return t!==null&&Si(this.value.arrayValue,t)}},Ju=class extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Si(this.value.arrayValue,t)}},Yu=class extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Id(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Si(this.value.arrayValue,s))}};var Xu=class{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}};function dp(n,e=null,t=[],s=[],r=null,i=null,a=null){return new Xu(n,e,t,s,r,i,a)}function Ed(n){let e=oe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Gu(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ja(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>dr(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>dr(s)).join(",")),e.Pe=t}return e.Pe}function Td(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lp(n.startAt,e.startAt)&&lp(n.endAt,e.endAt)}function Zu(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var pr=class{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=d,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function bw(n,e,t,s,r,i,a,c){return new pr(n,e,t,s,r,i,a,c)}function za(n){return new pr(n)}function hp(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Iw(n){return n.collectionGroup!==null}function vi(n){let e=oe(n);if(e.Te===null){e.Te=[];let t=new Set;for(let i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());let s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Qe(wt.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new fr(i,s))}),t.has(wt.keyField().canonicalString())||e.Te.push(new fr(wt.keyField(),s))}return e.Te}function Zt(n){let e=oe(n);return e.Ie||(e.Ie=Ew(e,vi(n))),e.Ie}function Ew(n,e){if(n.limitType==="F")return dp(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{let i=r.dir==="desc"?"asc":"desc";return new fr(r.field,i)});let t=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return dp(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function el(n,e,t){return new pr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ga(n,e){return Td(Zt(n),Zt(e))&&n.limitType===e.limitType}function _m(n){return`${Ed(Zt(n))}|lt:${n.limitType}`}function er(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>mm(r)).join(", ")}]`),ja(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>dr(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>dr(r)).join(",")),`Target(${s})`}(Zt(n))}; limitType=${n.limitType})`}function $a(n,e){return e.isFoundDocument()&&function(s,r){let i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Z.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(let i of vi(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(let i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(a,c,d){let p=up(a,c,d);return a.inclusive?p<=0:p<0}(s.startAt,vi(s),r)||s.endAt&&!function(a,c,d){let p=up(a,c,d);return a.inclusive?p>=0:p>0}(s.endAt,vi(s),r))}(n,e)}function Tw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ym(n){return(e,t)=>{let s=!1;for(let r of vi(n)){let i=Aw(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Aw(n,e,t){let s=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,c){let d=a.data.field(i),p=c.data.field(i);return d!==null&&p!==null?lr(d,p):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ee(19790,{direction:n.dir})}}var _n=class{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(let[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){let s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,(t,s)=>{for(let[r,i]of s)e(r,i)})}isEmpty(){return sm(this.inner)}size(){return this.innerSize}};var Sw=new ke(Z.comparator);function yn(){return Sw}var vm=new ke(Z.comparator);function _i(...n){let e=vm;for(let t of n)e=e.insert(t.key,t);return e}function wm(n){let e=vm;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ms(){return wi()}function bm(){return wi()}function wi(){return new _n(n=>n.toString(),(n,e)=>n.isEqual(e))}var Rw=new ke(Z.comparator),Pw=new Qe(Z.comparator);function he(...n){let e=Pw;for(let t of n)e=e.add(t);return e}var kw=new Qe(ce);function Cw(){return kw}function Ad(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function Im(n){return{integerValue:""+n}}function Em(n,e){return iw(e)?Im(e):Ad(n,e)}var mr=class{constructor(){this._=void 0}};function Dw(n,e,t){return n instanceof gr?function(r,i){let a={fields:{[im]:{stringValue:rm},[am]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&vd(i)&&(i=qa(i)),i&&(a.fields[om]=i),{mapValue:a}}(t,e):n instanceof bs?Am(n,e):n instanceof Is?Sm(n,e):function(r,i){let a=Tm(r,i),c=fp(a)+fp(r.Ee);return zu(a)&&zu(r.Ee)?Im(c):Ad(r.serializer,c)}(n,e)}function Nw(n,e,t){return n instanceof bs?Am(n,e):n instanceof Is?Sm(n,e):t}function Tm(n,e){return n instanceof Es?function(s){return zu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}var gr=class extends mr{},bs=class extends mr{constructor(e){super(),this.elements=e}};function Am(n,e){let t=Rm(e);for(let s of n.elements)t.some(r=>tn(r,s))||t.push(s);return{arrayValue:{values:t}}}var Is=class extends mr{constructor(e){super(),this.elements=e}};function Sm(n,e){let t=Rm(e);for(let s of n.elements)t=t.filter(r=>!tn(r,s));return{arrayValue:{values:t}}}var Es=class extends mr{constructor(e,t){super(),this.serializer=e,this.Ee=t}};function fp(n){return Ee(n.integerValue||n.doubleValue)}function Rm(n){return Id(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var tl=class{constructor(e,t){this.field=e,this.transform=t}};function Ow(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof bs&&r instanceof bs||s instanceof Is&&r instanceof Is?ar(s.elements,r.elements,tn):s instanceof Es&&r instanceof Es?tn(s.Ee,r.Ee):s instanceof gr&&r instanceof gr}(n.transform,e.transform)}var nl=class{constructor(e,t){this.version=e,this.transformResults=t}},It=class n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n}static exists(e){return new n(void 0,e)}static updateTime(e){return new n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function ia(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}var _r=class{};function Pm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yr(n.key,It.none()):new Ts(n.key,n.data,It.none());{let t=n.data,s=vt.empty(),r=new Qe(wt.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new sn(n.key,s,new kt(r.toArray()),It.none())}}function xw(n,e,t){n instanceof Ts?function(r,i,a){let c=r.value.clone(),d=mp(r.fieldTransforms,i,a.transformResults);c.setAll(d),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof sn?function(r,i,a){if(!ia(r.precondition,i))return void i.convertToUnknownDocument(a.version);let c=mp(r.fieldTransforms,i,a.transformResults),d=i.data;d.setAll(km(r)),d.setAll(c),i.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function bi(n,e,t,s){return n instanceof Ts?function(i,a,c,d){if(!ia(i.precondition,a))return c;let p=i.value.clone(),y=gp(i.fieldTransforms,d,a);return p.setAll(y),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),null}(n,e,t,s):n instanceof sn?function(i,a,c,d){if(!ia(i.precondition,a))return c;let p=gp(i.fieldTransforms,d,a),y=a.data;return y.setAll(km(i)),y.setAll(p),a.convertToFoundDocument(a.version,y).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(v=>v.field))}(n,e,t,s):function(i,a,c){return ia(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Vw(n,e){let t=null;for(let s of n.fieldTransforms){let r=e.data.field(s.field),i=Tm(s.transform,r||null);i!=null&&(t===null&&(t=vt.empty()),t.set(s.field,i))}return t||null}function pp(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&ar(s,r,(i,a)=>Ow(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}var Ts=class extends _r{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}},sn=class extends _r{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}};function km(n){let e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){let s=n.data.field(t);e.set(t,s)}}),e}function mp(n,e,t){let s=new Map;we(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let r=0;r<t.length;r++){let i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,Nw(a,c,t[r]))}return s}function gp(n,e,t){let s=new Map;for(let r of n){let i=r.transform,a=t.data.field(r.field);s.set(r.field,Dw(i,a,e))}return s}var yr=class extends _r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},sl=class extends _r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var rl=class{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){let s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){let i=this.mutations[r];i.key.isEqual(e.key)&&xw(i,e,s[r])}}applyToLocalView(e,t){for(let s of this.baseMutations)s.key.isEqual(e.key)&&(t=bi(s,e,t,this.localWriteTime));for(let s of this.mutations)s.key.isEqual(e.key)&&(t=bi(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let s=bm();return this.mutations.forEach(r=>{let i=e.get(r.key),a=i.overlayedDocument,c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;let d=Pm(a,c);d!==null&&s.set(r.key,d),a.isValidDocument()||a.convertToNoDocument(ae.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&ar(this.mutations,e.mutations,(t,s)=>pp(t,s))&&ar(this.baseMutations,e.baseMutations,(t,s)=>pp(t,s))}},il=class n{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){we(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=function(){return Rw}(),i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new n(e,t,s,r)}};var ol=class{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var al=class{constructor(e,t){this.count=e,this.unchangedNames=t}};var Oe,fe;function Lw(n){switch(n){case V.OK:return ee(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Cm(n){if(n===void 0)return pn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Oe.OK:return V.OK;case Oe.CANCELLED:return V.CANCELLED;case Oe.UNKNOWN:return V.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return V.INTERNAL;case Oe.UNAVAILABLE:return V.UNAVAILABLE;case Oe.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Oe.NOT_FOUND:return V.NOT_FOUND;case Oe.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Oe.ABORTED:return V.ABORTED;case Oe.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Oe.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:n})}}(fe=Oe||(Oe={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";var _p=null;var Mw=new hn([4294967295,4294967295],0);function yp(n){let e=Bp().encode(n),t=new bu;return t.update(e),new Uint8Array(t.digest())}function vp(n){let e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hn([t,s],0),new hn([r,i],0)]}var cl=class n{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new gs(`Invalid padding: ${t}`);if(s<0)throw new gs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new gs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=hn.fromNumber(this.fe)}pe(e,t,s){let r=e.add(t.multiply(hn.fromNumber(s)));return r.compare(Mw)===1&&(r=new hn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;let t=yp(e),[s,r]=vp(t);for(let i=0;i<this.hashCount;i++){let a=this.pe(s,r,i);if(!this.ye(a))return!1}return!0}static create(e,t,s){let r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new n(i,r,t);return s.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;let t=yp(e),[s,r]=vp(t);for(let i=0;i<this.hashCount;i++){let a=this.pe(s,r,i);this.we(a)}}we(e){let t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}},gs=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var pa=class n{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){let r=new Map;return r.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new n(ae.min(),r,new ke(ce),yn(),he())}},Ri=class n{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new n(s,t,he(),he(),he())}};var rr=class{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=r}},ma=class{constructor(e,t){this.targetId=e,this.De=t}},ga=class{constructor(e,t,s=ut.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}},_a=class{constructor(){this.ve=0,this.Ce=wp(),this.Fe=ut.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=he(),t=he(),s=he();return this.Ce.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ee(38017,{changeType:i})}}),new Ri(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=wp()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},ul=class{constructor(e){this.We=e,this.Ge=new Map,this.ze=yn(),this.je=ta(),this.Je=ta(),this.He=new ke(ce)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,r)=>{this.nt(r)&&t(r)})}it(e){let t=e.targetId,s=e.De.count,r=this.st(t);if(r){let i=r.target;if(Zu(i))if(s===0){let a=new Z(i.path);this.Xe(t,a,Ft.newNoDocument(a,ae.min()))}else we(s===1,20013,{expectedCount:s});else{let a=this.ot(t);if(a!==s){let c=this._t(e),d=c?this.ut(c,e,a):1;if(d!==0){this.rt(t);let p=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,p)}_p?.ct(function(y,v,A,x,B){var $,F,te,K,ne,_e;let Xe={localCacheCount:y,existenceFilterCount:v.count,databaseId:A.database,projectId:A.projectId},le=v.unchangedNames;return le&&(Xe.bloomFilter={applied:B===0,hashCount:($=le?.hashCount)!==null&&$!==void 0?$:0,bitmapLength:(K=(te=(F=le?.bits)===null||F===void 0?void 0:F.bitmap)===null||te===void 0?void 0:te.length)!==null&&K!==void 0?K:0,padding:(_e=(ne=le?.bits)===null||ne===void 0?void 0:ne.padding)!==null&&_e!==void 0?_e:0,mightContain:P=>{var b;return(b=x?.mightContain(P))!==null&&b!==void 0&&b}}),Xe}(a,e.De,this.We.lt(),c,d))}}}}_t(e){let t=e.De.unchangedNames;if(!t||!t.bits)return null;let{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t,a,c;try{a=gn(s).toUint8Array()}catch(d){if(d instanceof la)return qn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new cl(a,r,i)}catch(d){return qn(d instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.fe===0?null:c}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){let s=this.We.getRemoteKeysForTarget(t),r=0;return s.forEach(i=>{let a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),r++)}),r}Pt(e){let t=new Map;this.Ge.forEach((i,a)=>{let c=this.st(a);if(c){if(i.current&&Zu(c.target)){let d=new Z(c.target.path);this.Tt(d).has(a)||this.It(a,d)||this.Xe(a,d,Ft.newNoDocument(d,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let s=he();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(d=>{let p=this.st(d);return!p||p.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));let r=new pa(e,t,this.He,this.ze,s);return this.ze=yn(),this.je=ta(),this.Je=ta(),this.He=new ke(ce),r}Ze(e,t){if(!this.nt(e))return;let s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;let r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new _a,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Qe(ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Qe(ce),this.je=this.je.insert(e,t)),t}nt(e){let t=this.st(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new _a),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}};function ta(){return new ke(Z.comparator)}function wp(){return new ke(Z.comparator)}var Fw={asc:"ASCENDING",desc:"DESCENDING"},Uw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bw={and:"AND",or:"OR"},ll=class{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function dl(n,e){return n.useProto3Json||ja(e)?e:{value:e}}function ya(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jw(n,e){return ya(n,e.toTimestamp())}function en(n){return we(!!n,49232),ae.fromTimestamp(function(t){let s=mn(t);return new Le(s.seconds,s.nanos)}(n))}function Sd(n,e){return hl(n,e).canonicalString()}function hl(n,e){let t=function(r){return new Ae(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nm(n){let e=Ae.fromString(n);return we(Mm(e),10190,{key:e.toString()}),e}function fl(n,e){return Sd(n.databaseId,e.path)}function Ru(n,e){let t=Nm(e);if(t.get(1)!==n.databaseId.projectId)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(xm(t))}function Om(n,e){return Sd(n.databaseId,e)}function qw(n){let e=Nm(n);return e.length===4?Ae.emptyPath():xm(e)}function pl(n){return new Ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xm(n){return we(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bp(n,e,t){return{name:fl(n,e),fields:t.value.mapValue.fields}}function zw(n,e){let t;if("targetChange"in e){e.targetChange;let s=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:ee(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(p,y){return p.useProto3Json?(we(y===void 0||typeof y=="string",58123),ut.fromBase64String(y||"")):(we(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),ut.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(p){let y=p.code===void 0?V.UNKNOWN:Cm(p.code);return new J(y,p.message||"")}(a);t=new ga(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;let s=e.documentChange;s.document,s.document.name,s.document.updateTime;let r=Ru(n,s.document.name),i=en(s.document.updateTime),a=s.document.createTime?en(s.document.createTime):ae.min(),c=new vt({mapValue:{fields:s.document.fields}}),d=Ft.newFoundDocument(r,i,a,c),p=s.targetIds||[],y=s.removedTargetIds||[];t=new rr(p,y,d.key,d)}else if("documentDelete"in e){e.documentDelete;let s=e.documentDelete;s.document;let r=Ru(n,s.document),i=s.readTime?en(s.readTime):ae.min(),a=Ft.newNoDocument(r,i),c=s.removedTargetIds||[];t=new rr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;let s=e.documentRemove;s.document;let r=Ru(n,s.document),i=s.removedTargetIds||[];t=new rr([],i,r,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;let s=e.filter;s.targetId;let{count:r=0,unchangedNames:i}=s,a=new al(r,i),c=s.targetId;t=new ma(c,a)}}return t}function Gw(n,e){let t;if(e instanceof Ts)t={update:bp(n,e.key,e.value)};else if(e instanceof yr)t={delete:fl(n,e.key)};else if(e instanceof sn)t={update:bp(n,e.key,e.data),updateMask:Zw(e.fieldMask)};else{if(!(e instanceof sl))return ee(16599,{Rt:e.type});t={verify:fl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,a){let c=a.transform;if(c instanceof gr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof bs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Is)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Es)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ee(20930,{transform:a.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:jw(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(n,e.precondition)),t}function $w(n,e){return n&&n.length>0?(we(e!==void 0,14353),n.map(t=>function(r,i){let a=r.updateTime?en(r.updateTime):en(i);return a.isEqual(ae.min())&&(a=en(i)),new nl(a,r.transformResults||[])}(t,e))):[]}function Hw(n,e){return{documents:[Om(n,e.path)]}}function Kw(n,e){let t={structuredQuery:{}},s=e.path,r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Om(n,r);let i=function(p){if(p.length!==0)return Lm(nn.create(p,"and"))}(e.filters);i&&(t.structuredQuery.where=i);let a=function(p){if(p.length!==0)return p.map(y=>function(A){return{field:tr(A.field),direction:Jw(A.dir)}}(y))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);let c=dl(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{Vt:t,parent:r}}function Ww(n){let e=qw(n.parent),t=n.structuredQuery,s=t.from?t.from.length:0,r=null;if(s>0){we(s===1,65062);let y=t.from[0];y.allDescendants?r=y.collectionId:e=e.child(y.collectionId)}let i=[];t.where&&(i=function(v){let A=Vm(v);return A instanceof nn&&fm(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(A=>function(B){return new fr(nr(B.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(v){let A;return A=typeof v=="object"?v.value:v,ja(A)?null:A}(t.limit));let d=null;t.startAt&&(d=function(v){let A=!!v.before,x=v.values||[];return new hr(x,A)}(t.startAt));let p=null;return t.endAt&&(p=function(v){let A=!v.before,x=v.values||[];return new hr(x,A)}(t.endAt)),bw(e,r,a,i,c,"F",d,p)}function Qw(n,e){let t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":let s=nr(t.unaryFilter.field);return qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":let r=nr(t.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=nr(t.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=nr(t.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return qe.create(nr(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nn.create(t.compositeFilter.filters.map(s=>Vm(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function Jw(n){return Fw[n]}function Yw(n){return Uw[n]}function Xw(n){return Bw[n]}function tr(n){return{fieldPath:n.canonicalString()}}function nr(n){return wt.fromServerFormat(n.fieldPath)}function Lm(n){return n instanceof qe?function(t){if(t.op==="=="){if(cp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NAN"}};if(ap(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cp(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NAN"}};if(ap(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(t.field),op:Yw(t.op),value:t.value}}}(n):n instanceof nn?function(t){let s=t.getFilters().map(r=>Lm(r));return s.length===1?s[0]:{compositeFilter:{op:Xw(t.op),filters:s}}}(n):ee(54877,{filter:n})}function Zw(n){let e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Mm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var Pi=class n{constructor(e,t,s,r,i=ae.min(),a=ae.min(),c=ut.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var ml=class{constructor(e){this.gt=e}};function eb(n){let e=Ww({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?el(e,e.limit,"L"):e}var va=class{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(Ee(e.integerValue));else if("doubleValue"in e){let s=Ee(e.doubleValue);isNaN(s)?this.Ct(t,13):(this.Ct(t,15),Ti(s)?t.Ft(0):t.Ft(s))}else if("timestampValue"in e){let s=e.timestampValue;this.Ct(t,20),typeof s=="string"&&(s=mn(s)),t.Mt(`${s.seconds||""}`),t.Ft(s.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(gn(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let s=e.geoPointValue;this.Ct(t,45),t.Ft(s.latitude||0),t.Ft(s.longitude||0)}else"mapValue"in e?lm(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):um(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):ee(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let s=e.fields||{};this.Ct(t,55);for(let r of Object.keys(s))this.xt(r,t),this.Dt(s[r],t)}Lt(e,t){var s,r;let i=e.fields||{};this.Ct(t,53);let a=ur,c=((r=(s=i[a].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.length)||0;this.Ct(t,15),t.Ft(Ee(c)),this.xt(a,t),this.Dt(i[a],t)}qt(e,t){let s=e.values||[];this.Ct(t,50);for(let r of s)this.Dt(r,t)}Bt(e,t){this.Ct(t,37),Z.fromName(e).path.forEach(s=>{this.Ct(t,60),this.$t(s,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}};va.Ut=new va;var gl=class{constructor(){this.Dn=new _l}addToCollectionParentIndex(e,t){return this.Dn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(ws.min())}updateCollectionGroup(e,t,s){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}},_l=class{constructor(){this.index={}}add(e){let t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Qe(Ae.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){let t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Qe(Ae.comparator)).toArray()}};var cT=new Uint8Array(0);var Ip={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fm=41943040,Pt=class n{static withCacheSize(e){return new n(e,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}};Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(Fm,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);var ki=class n{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var Ep="LruGarbageCollector",tb=1048576;function Tp([n,e],[t,s]){let r=ce(n,t);return r===0?ce(e,s):r}var yl=class{constructor(e){this.Tr=e,this.buffer=new Qe(Tp),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let s=this.buffer.last();Tp(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}},vl=class{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){H(Ep,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ar(t)?H(Ep,"Ignoring IndexedDB error during garbage collection: ",t):await Tr(t)}await this.Rr(3e5)})}},wl=class{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return M.resolve(cr.ue);let s=new yl(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.gr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Ip)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ip):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,r,i,a,c,d,p,y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),r=this.params.maximumSequenceNumbersToCollect):r=v,a=Date.now(),this.nthSequenceNumber(e,r))).next(v=>(s=v,c=Date.now(),this.removeTargets(e,s,t))).next(v=>(i=v,d=Date.now(),this.removeOrphanedDocuments(e,s))).next(v=>(p=Date.now(),Zs()<=ue.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-y}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(d-c)+`ms
	Removed ${v} documents in `+(p-d)+`ms
Total Duration: ${p-y}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:v})))}};function nb(n,e){return new wl(n,e)}var bl=class{constructor(){this.changes=new _n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let s=this.changes.get(t);return s!==void 0?M.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Il=class{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};var El=class{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&bi(s.mutation,r,kt.empty(),Le.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,he()).next(()=>s))}getLocalViewOfDocuments(e,t,s=he()){let r=ms();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let a=_i();return i.forEach((c,d)=>{a=a.insert(c,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){let s=ms();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,he()))}populateOverlays(e,t,s){let r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,s,r){let i=yn(),a=wi(),c=function(){return wi()}();return t.forEach((d,p)=>{let y=s.get(p.key);r.has(p.key)&&(y===void 0||y.mutation instanceof sn)?i=i.insert(p.key,p):y!==void 0?(a.set(p.key,y.mutation.getFieldMask()),bi(y.mutation,p,y.mutation.getFieldMask(),Le.now())):a.set(p.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(d=>(d.forEach((p,y)=>a.set(p,y)),t.forEach((p,y)=>{var v;return c.set(p,new Il(y,(v=a.get(p))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(e,t){let s=wi(),r=new ke((a,c)=>a-c),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(let c of a)c.keys().forEach(d=>{let p=t.get(d);if(p===null)return;let y=s.get(d)||kt.empty();y=c.applyToLocalView(p,y),s.set(d,y);let v=(r.get(c.batchId)||he()).add(d);r=r.insert(c.batchId,v)})}).next(()=>{let a=[],c=r.getReverseIterator();for(;c.hasNext();){let d=c.getNext(),p=d.key,y=d.value,v=bm();y.forEach(A=>{if(!i.has(A)){let x=Pm(t.get(A),s.get(A));x!==null&&v.set(A,x),i=i.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,p,v))}return M.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Iw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{let a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):M.resolve(ms()),c=Ei,d=i;return a.next(p=>M.forEach(p,(y,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),i.get(y)?M.resolve():this.remoteDocumentCache.getEntry(e,y).next(A=>{d=d.insert(y,A)}))).next(()=>this.populateOverlays(e,p,i)).next(()=>this.computeViews(e,d,p,he())).next(y=>({batchId:c,changes:wm(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(s=>{let r=_i();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){let i=t.collectionGroup,a=_i();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,d=>{let p=function(v,A){return new pr(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,p,s,r).next(y=>{y.forEach((v,A)=>{a=a.insert(v,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(a=>{i.forEach((d,p)=>{let y=p.getKey();a.get(y)===null&&(a=a.insert(y,Ft.newInvalidDocument(y)))});let c=_i();return a.forEach((d,p)=>{let y=i.get(d);y!==void 0&&bi(y.mutation,p,kt.empty(),Le.now()),$a(t,p)&&(c=c.insert(d,p))}),c})}};var Tl=class{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return M.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(r){return{id:r.id,version:r.version,createTime:en(r.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(r){return{name:r.name,query:eb(r.bundledQuery),readTime:en(r.readTime)}}(t)),M.resolve()}};var Al=class{constructor(){this.overlays=new ke(Z.comparator),this.kr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){let s=ms();return M.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.wt(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,s){let r=this.kr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(s)),M.resolve()}getOverlaysForCollection(e,t,s){let r=ms(),i=t.length+1,a=new Z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){let d=c.getNext().value,p=d.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===i&&d.largestBatchId>s&&r.set(d.getKey(),d)}return M.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ke((p,y)=>p-y),a=this.overlays.getIterator();for(;a.hasNext();){let p=a.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>s){let y=i.get(p.largestBatchId);y===null&&(y=ms(),i=i.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}let c=ms(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,y)=>c.set(p,y)),!(c.size()>=r)););return M.resolve(c)}wt(e,t,s){let r=this.overlays.get(s.key);if(r!==null){let a=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new ol(t,s));let i=this.kr.get(t);i===void 0&&(i=he(),this.kr.set(t,i)),this.kr.set(t,i.add(s.key))}};var Sl=class{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}};var Ci=class{constructor(){this.qr=new Qe(xe.Qr),this.$r=new Qe(xe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let s=new xe(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new xe(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){let t=new Z(new Ae([])),s=new xe(t,e),r=new xe(t,e+1),i=[];return this.$r.forEachInRange([s,r],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new Z(new Ae([])),s=new xe(t,e),r=new xe(t,e+1),i=he();return this.$r.forEachInRange([s,r],a=>{i=i.add(a.key)}),i}containsKey(e){let t=new xe(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}},xe=class{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Z.comparator(e.key,t.key)||ce(e.Hr,t.Hr)}static Ur(e,t){return ce(e.Hr,t.Hr)||Z.comparator(e.key,t.key)}};var Rl=class{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Qe(xe.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){let i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new rl(i,t,s,r);this.mutationQueue.push(a);for(let c of r)this.Yr=this.Yr.add(new xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let s=t+1,r=this.Xr(s),i=r<0?0:r;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?yd:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let s=new xe(t,0),r=new xe(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],a=>{let c=this.Zr(a.Hr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Qe(ce);return t.forEach(r=>{let i=new xe(r,0),a=new xe(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{s=s.add(c.Hr)})}),M.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){let s=t.path,r=s.length+1,i=s;Z.isDocumentKey(i)||(i=i.child(""));let a=new xe(new Z(i),0),c=new Qe(ce);return this.Yr.forEachWhile(d=>{let p=d.key.path;return!!s.isPrefixOf(p)&&(p.length===r&&(c=c.add(d.Hr)),!0)},a),M.resolve(this.ei(c))}ei(e){let t=[];return e.forEach(s=>{let r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){we(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return M.forEach(t.mutations,r=>{let i=new xe(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){let s=new xe(t,0),r=this.Yr.firstAfterOrEqual(s);return M.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};var Pl=class{constructor(e){this.ni=e,this.docs=function(){return new ke(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let s=this.docs.get(t);return M.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=yn();return t.forEach(r=>{let i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ft.newInvalidDocument(r))}),M.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=yn(),a=t.path,c=new Z(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){let{key:p,value:{document:y}}=d.getNext();if(!a.isPrefixOf(p.path))break;p.path.length>a.length+1||nw(tw(y),s)<=0||(r.has(y.key)||$a(t,y))&&(i=i.insert(y.key,y.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,s,r){ee(9500)}ri(e,t){return M.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new kl(this)}getSize(e){return M.resolve(this.size)}},kl=class extends bl{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)}),M.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}};var Cl=class{constructor(e){this.persistence=e,this.ii=new _n(t=>Ed(t),Td),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.si=0,this.oi=new Ci,this.targetCount=0,this._i=ki.ar()}forEachTarget(e,t){return this.ii.forEach((s,r)=>t(r)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),M.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new ki(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.hr(t),M.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,s){let r=0,i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),M.waitFor(i).next(()=>r)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){let s=this.ii.get(t)||null;return M.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),M.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(a=>{i.push(r.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),M.resolve()}getMatchingKeysForTargetId(e,t){let s=this.oi.Jr(t);return M.resolve(s)}containsKey(e,t){return M.resolve(this.oi.containsKey(t))}};var wa=class{constructor(e,t){this.ai={},this.overlays={},this.ui=new cr(0),this.ci=!1,this.ci=!0,this.li=new Sl,this.referenceDelegate=e(this),this.hi=new Cl(this),this.indexManager=new gl,this.remoteDocumentCache=function(r){return new Pl(r)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new ml(t),this.Ti=new Tl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Al,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new Rl(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){H("MemoryPersistence","Starting transaction:",e);let r=new Dl(this.ui.next());return this.referenceDelegate.Ii(),s(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return M.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}},Dl=class extends Bu{constructor(e){super(),this.currentSequenceNumber=e}},Nl=class n{constructor(e){this.persistence=e,this.Ai=new Ci,this.Ri=null}static Vi(e){return new n(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),M.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(r=>this.mi.add(r.toString()));let s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.mi.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,s=>{let r=Z.fromPath(s);return this.fi(e,r).next(i=>{i||t.removeEntry(r,ae.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return M.or([()=>M.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}},ba=class n{constructor(e,t){this.persistence=e,this.gi=new _n(s=>ow(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=nb(this,t)}static Vi(e,t){return new n(e,t)}Ii(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return M.forEach(this.gi,(s,r)=>this.Sr(e,s,r).next(i=>i?M.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(s++,i.removeEntry(a,ae.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){let s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),M.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),M.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sa(e.data.value)),t}Sr(e,t,s){return M.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let r=this.gi.get(t);return M.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};var Ol=class n{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=r}static Es(e,t){let s=he(),r=he();for(let i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new n(e,t.fromCache,s,r)}};var xl=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var Vl=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Sh()?8:rw(Ke())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,r){let i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,r,s).next(a=>{i.result=a})}).next(()=>{if(i.result)return;let a=new xl;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,s,r){return s.documentReadCount<this.Vs?(Zs()<=ue.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",er(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Zs()<=ue.DEBUG&&H("QueryEngine","Query:",er(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(Zs()<=ue.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",er(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(t))):M.resolve())}ps(e,t){if(hp(t))return M.resolve(null);let s=Zt(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=el(t,null,"F"),s=Zt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{let a=he(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(d=>{let p=this.bs(t,c);return this.Ds(t,p,a,d.readTime)?this.ps(e,el(t,null,"F")):this.vs(e,p,t,d)}))})))}ys(e,t,s,r){return hp(t)||r.isEqual(ae.min())?M.resolve(null):this.gs.getDocuments(e,s).next(i=>{let a=this.bs(t,i);return this.Ds(t,a,s,r)?M.resolve(null):(Zs()<=ue.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),er(t)),this.vs(e,a,t,ew(r,Ei)).next(c=>c))})}bs(e,t){let s=new Qe(ym(e));return t.forEach((r,i)=>{$a(e,i)&&(s=s.add(i))}),s}Ds(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;let i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,s){return Zs()<=ue.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",er(t)),this.gs.getDocumentsMatchingQuery(e,t,ws.min(),s)}vs(e,t,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}};var Rd="LocalStore",sb=3e8,Ll=class{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new ke(ce),this.Ms=new _n(i=>Ed(i),Td),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new El(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}};function rb(n,e,t,s){return new Ll(n,e,t,s)}async function Um(n,e){let t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{let a=[],c=[],d=he();for(let p of r){a.push(p.batchId);for(let y of p.mutations)d=d.add(y.key)}for(let p of i){c.push(p.batchId);for(let y of p.mutations)d=d.add(y.key)}return t.localDocuments.getDocuments(s,d).next(p=>({Bs:p,removedBatchIds:a,addedBatchIds:c}))})})}function ib(n,e){let t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{let r=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,d,p,y){let v=p.batch,A=v.keys(),x=M.resolve();return A.forEach(B=>{x=x.next(()=>y.getEntry(d,B)).next($=>{let F=p.docVersions.get(B);we(F!==null,48541),$.version.compareTo(F)<0&&(v.applyToRemoteDocument($,p),$.isValidDocument()&&($.setReadTime(p.commitVersion),y.addEntry($)))})}),x.next(()=>c.mutationQueue.removeMutationBatch(d,v))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let d=he();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(d=d.add(c.batch.mutations[p].key));return d}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Bm(n){let e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function ob(n,e){let t=oe(n),s=e.snapshotVersion,r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let a=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;let c=[];e.targetChanges.forEach((y,v)=>{let A=r.get(v);if(!A)return;c.push(t.hi.removeMatchingKeys(i,y.removedDocuments,v).next(()=>t.hi.addMatchingKeys(i,y.addedDocuments,v)));let x=A.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(v)!==null?x=x.withResumeToken(ut.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):y.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(y.resumeToken,s)),r=r.insert(v,x),function($,F,te){return $.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=sb?!0:te.addedDocuments.size+te.modifiedDocuments.size+te.removedDocuments.size>0}(A,x,y)&&c.push(t.hi.updateTargetData(i,x))});let d=yn(),p=he();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,y))}),c.push(ab(i,a,e.documentUpdates).next(y=>{d=y.Ls,p=y.ks})),!s.isEqual(ae.min())){let y=t.hi.getLastRemoteSnapshotVersion(i).next(v=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(y)}return M.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,d,p)).next(()=>d)}).then(i=>(t.Fs=r,i))}function ab(n,e,t){let s=he(),r=he();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let a=yn();return t.forEach((c,d)=>{let p=i.get(c);d.isFoundDocument()!==p.isFoundDocument()&&(r=r.add(c)),d.isNoDocument()&&d.version.isEqual(ae.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!p.isValidDocument()||d.version.compareTo(p.version)>0||d.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):H(Rd,"Ignoring outdated watch update for ",c,". Current version:",p.version," Watch version:",d.version)}),{Ls:a,ks:r}})}function cb(n,e){let t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=yd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ub(n,e){let t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.hi.getTargetData(s,e).next(i=>i?(r=i,M.resolve(r)):t.hi.allocateTargetId(s).next(a=>(r=new Pi(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,r).next(()=>r))))}).then(s=>{let r=t.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Ml(n,e,t){let s=oe(n),r=s.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,a=>s.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!Ar(a))throw a;H(Rd,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function Ap(n,e,t){let s=oe(n),r=ae.min(),i=he();return s.persistence.runTransaction("Execute query","readwrite",a=>function(d,p,y){let v=oe(d),A=v.Ms.get(y);return A!==void 0?M.resolve(v.Fs.get(A)):v.hi.getTargetData(p,y)}(s,a,Zt(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(a,c.targetId).next(d=>{i=d})}).next(()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:ae.min(),t?i:he())).next(c=>(lb(s,Tw(e),c),{documents:c,qs:i})))}function lb(n,e,t){let s=n.xs.get(e)||ae.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.xs.set(e,s)}var Ia=class{constructor(){this.activeTargetIds=Cw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var Fl=class{constructor(){this.Fo=new Ia,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ia,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var Ul=class{xo(e){}shutdown(){}};var Sp="ConnectivityMonitor",Ea=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){H(Sp,"Network connectivity changed: AVAILABLE");for(let e of this.ko)e(0)}Lo(){H(Sp,"Network connectivity changed: UNAVAILABLE");for(let e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var na=null;function Bl(){return na===null?na=function(){return 268435456+Math.round(2147483648*Math.random())}():na++,"0x"+na.toString(16)}var Pu="RestConnection",db={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},jl=class{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===da?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){let a=Bl(),c=this.Go(e,t.toUriEncodedString());H(Pu,`Sending RPC '${e}' ${a}:`,c,s);let d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(d,r,i);let{host:p}=new URL(c),y=kn(p);return this.jo(e,c,d,s,y).then(v=>(H(Pu,`Received RPC '${e}' ${a}: `,v),v),v=>{throw qn(Pu,`RPC '${e}' ${a} failed with error: `,v,"url: ",c,"request:",s),v})}Jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Er}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Go(e,t){let s=db[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}};var ql=class{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}};var ct="WebChannelConnection",zl=class extends jl{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,r,i){let a=Bl();return new Promise((c,d)=>{let p=new Iu;p.setWithCredentials(!0),p.listenOnce(Eu.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case gi.NO_ERROR:let v=p.getResponseJson();H(ct,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case gi.TIMEOUT:H(ct,`RPC '${e}' ${a} timed out`),d(new J(V.DEADLINE_EXCEEDED,"Request time out"));break;case gi.HTTP_ERROR:let A=p.getStatus();if(H(ct,`RPC '${e}' ${a} failed with status:`,A,"response text:",p.getResponseText()),A>0){let x=p.getResponseJson();Array.isArray(x)&&(x=x[0]);let B=x?.error;if(B&&B.status&&B.message){let $=function(te){let K=te.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(K)>=0?K:V.UNKNOWN}(B.status);d(new J($,B.message))}else d(new J(V.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new J(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:p.getLastErrorCode(),h_:p.getLastError()})}}finally{H(ct,`RPC '${e}' ${a} completed.`)}});let y=JSON.stringify(r);H(ct,`RPC '${e}' ${a} sending request:`,r),p.send(t,"POST",y,s,15)})}P_(e,t,s){let r=Bl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Su(),c=Au(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.zo(d.initMessageHeaders,t,s),d.encodeInitMessageHeaders=!0;let y=i.join("");H(ct,`Creating RPC '${e}' stream ${r}: ${y}`,d);let v=a.createWebChannel(y,d);this.T_(v);let A=!1,x=!1,B=new ql({Ho:F=>{x?H(ct,`Not sending because RPC '${e}' stream ${r} is closed:`,F):(A||(H(ct,`Opening RPC '${e}' stream ${r} transport.`),v.open(),A=!0),H(ct,`RPC '${e}' stream ${r} sending:`,F),v.send(F))},Yo:()=>v.close()}),$=(F,te,K)=>{F.listen(te,ne=>{try{K(ne)}catch(_e){setTimeout(()=>{throw _e},0)}})};return $(v,Xs.EventType.OPEN,()=>{x||(H(ct,`RPC '${e}' stream ${r} transport opened.`),B.s_())}),$(v,Xs.EventType.CLOSE,()=>{x||(x=!0,H(ct,`RPC '${e}' stream ${r} transport closed`),B.__(),this.I_(v))}),$(v,Xs.EventType.ERROR,F=>{x||(x=!0,qn(ct,`RPC '${e}' stream ${r} transport errored. Name:`,F.name,"Message:",F.message),B.__(new J(V.UNAVAILABLE,"The operation could not be completed")))}),$(v,Xs.EventType.MESSAGE,F=>{var te;if(!x){let K=F.data[0];we(!!K,16349);let ne=K,_e=ne?.error||((te=ne[0])===null||te===void 0?void 0:te.error);if(_e){H(ct,`RPC '${e}' stream ${r} received error:`,_e);let Xe=_e.status,le=function(T){let S=Oe[T];if(S!==void 0)return Cm(S)}(Xe),P=_e.message;le===void 0&&(le=V.INTERNAL,P="Unknown error status: "+Xe+" with message "+_e.message),x=!0,B.__(new J(le,P)),v.close()}else H(ct,`RPC '${e}' stream ${r} received:`,K),B.a_(K)}}),$(c,Tu.STAT_EVENT,F=>{F.stat===Zo.PROXY?H(ct,`RPC '${e}' stream ${r} detected buffering proxy`):F.stat===Zo.NOPROXY&&H(ct,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{B.o_()},0),B}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}};function ku(){return typeof document<"u"?document:null}function Ha(n){return new ll(n,!0)}var Ta=class{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-s);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var Rp="PersistentStream",Aa=class{constructor(e,t,s,r,i,a,c,d){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ta(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(pn(t.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.b_===t&&this.W_(s,r)},s=>{e(()=>{let r=new J(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)})})}W_(e,t){let s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(r=>{s(()=>this.G_(r))}),this.stream.onMessage(r=>{s(()=>++this.C_==1?this.j_(r):this.onNext(r))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return H(Rp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(H(Rp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},Gl=class extends Aa{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=zw(this.serializer,e),s=function(i){if(!("targetChange"in i))return ae.min();let a=i.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?en(a.readTime):ae.min()}(e);return this.listener.J_(t,s)}H_(e){let t={};t.database=pl(this.serializer),t.addTarget=function(i,a){let c,d=a.target;if(c=Zu(d)?{documents:Hw(i,d)}:{query:Kw(i,d).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Dm(i,a.resumeToken);let p=dl(i,a.expectedCount);p!==null&&(c.expectedCount=p)}else if(a.snapshotVersion.compareTo(ae.min())>0){c.readTime=ya(i,a.snapshotVersion.toTimestamp());let p=dl(i,a.expectedCount);p!==null&&(c.expectedCount=p)}return c}(this.serializer,e);let s=Qw(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){let t={};t.database=pl(this.serializer),t.removeTarget=e,this.k_(t)}},$l=class extends Aa{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let t=$w(e.writeResults,e.commitTime),s=en(e.commitTime);return this.listener.ta(s,t)}na(){let e={};e.database=pl(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(s=>Gw(this.serializer,s))};this.k_(t)}};var Hl=class{},Kl=class extends Hl{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,hl(t,s),r,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(V.UNKNOWN,i.toString())})}Jo(e,t,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,hl(t,s),r,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(V.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},Wl=class{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(pn(t),this._a=!1):H("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var As="RemoteStore",Ql=class{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{s.enqueueAndForget(async()=>{Rs(this)&&(H(As,"Restarting streams for network reachability change."),await async function(d){let p=oe(d);p.Ia.add(4),await Oi(p),p.Aa.set("Unknown"),p.Ia.delete(4),await Ka(p)}(this))})}),this.Aa=new Wl(s,r)}};async function Ka(n){if(Rs(n))for(let e of n.da)await e(!0)}async function Oi(n){for(let e of n.da)await e(!1)}function jm(n,e){let t=oe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Dd(t)?Cd(t):Sr(t).x_()&&kd(t,e))}function Pd(n,e){let t=oe(n),s=Sr(t);t.Ta.delete(e),s.x_()&&qm(t,e),t.Ta.size===0&&(s.x_()?s.B_():Rs(t)&&t.Aa.set("Unknown"))}function kd(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){let t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sr(n).H_(e)}function qm(n,e){n.Ra.$e(e),Sr(n).Y_(e)}function Cd(n){n.Ra=new ul({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Sr(n).start(),n.Aa.aa()}function Dd(n){return Rs(n)&&!Sr(n).M_()&&n.Ta.size>0}function Rs(n){return oe(n).Ia.size===0}function zm(n){n.Ra=void 0}async function hb(n){n.Aa.set("Online")}async function fb(n){n.Ta.forEach((e,t)=>{kd(n,e)})}async function pb(n,e){zm(n),Dd(n)?(n.Aa.la(e),Cd(n)):n.Aa.set("Unknown")}async function mb(n,e,t){if(n.Aa.set("Online"),e instanceof ga&&e.state===2&&e.cause)try{await async function(r,i){let a=i.cause;for(let c of i.targetIds)r.Ta.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ta.delete(c),r.Ra.removeTarget(c))}(n,e)}catch(s){H(As,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Sa(n,s)}else if(e instanceof rr?n.Ra.Ye(e):e instanceof ma?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ae.min()))try{let s=await Bm(n.localStore);t.compareTo(s)>=0&&await function(i,a){let c=i.Ra.Pt(a);return c.targetChanges.forEach((d,p)=>{if(d.resumeToken.approximateByteSize()>0){let y=i.Ta.get(p);y&&i.Ta.set(p,y.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,p)=>{let y=i.Ta.get(d);if(!y)return;i.Ta.set(d,y.withResumeToken(ut.EMPTY_BYTE_STRING,y.snapshotVersion)),qm(i,d);let v=new Pi(y.target,d,p,y.sequenceNumber);kd(i,v)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){H(As,"Failed to raise snapshot:",s),await Sa(n,s)}}async function Sa(n,e,t){if(!Ar(e))throw e;n.Ia.add(1),await Oi(n),n.Aa.set("Offline"),t||(t=()=>Bm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(As,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ka(n)})}function Gm(n,e){return e().catch(t=>Sa(n,t,e))}async function Wa(n){let e=oe(n),t=Gn(e),s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:yd;for(;gb(e);)try{let r=await cb(e.localStore,s);if(r===null){e.Pa.length===0&&t.B_();break}s=r.batchId,_b(e,r)}catch(r){await Sa(e,r)}$m(e)&&Hm(e)}function gb(n){return Rs(n)&&n.Pa.length<10}function _b(n,e){n.Pa.push(e);let t=Gn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function $m(n){return Rs(n)&&!Gn(n).M_()&&n.Pa.length>0}function Hm(n){Gn(n).start()}async function yb(n){Gn(n).na()}async function vb(n){let e=Gn(n);for(let t of n.Pa)e.X_(t.mutations)}async function wb(n,e,t){let s=n.Pa.shift(),r=il.from(s,e,t);await Gm(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Wa(n)}async function bb(n,e){e&&Gn(n).Z_&&await async function(s,r){if(function(a){return Lw(a)&&a!==V.ABORTED}(r.code)){let i=s.Pa.shift();Gn(s).N_(),await Gm(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Wa(s)}}(n,e),$m(n)&&Hm(n)}async function Pp(n,e){let t=oe(n);t.asyncQueue.verifyOperationInProgress(),H(As,"RemoteStore received new credentials");let s=Rs(t);t.Ia.add(3),await Oi(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ka(t)}async function Ib(n,e){let t=oe(n);e?(t.Ia.delete(2),await Ka(t)):e||(t.Ia.add(2),await Oi(t),t.Aa.set("Unknown"))}function Sr(n){return n.Va||(n.Va=function(t,s,r){let i=oe(t);return i.ia(),new Gl(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:hb.bind(null,n),e_:fb.bind(null,n),n_:pb.bind(null,n),J_:mb.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Dd(n)?Cd(n):n.Aa.set("Unknown")):(await n.Va.stop(),zm(n))})),n.Va}function Gn(n){return n.ma||(n.ma=function(t,s,r){let i=oe(t);return i.ia(),new $l(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:yb.bind(null,n),n_:bb.bind(null,n),ea:vb.bind(null,n),ta:wb.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Wa(n)):(await n.ma.stop(),n.Pa.length>0&&(H(As,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var Jl=class n{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){let a=Date.now()+s,c=new n(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Nd(n,e){if(pn("AsyncQueue",`${e}: ${n}`),Ar(n))return new J(V.UNAVAILABLE,`${e}: ${n}`);throw n}var Ra=class n{static emptySet(e){return new n(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Z.comparator(t.key,s.key):(t,s)=>Z.comparator(t.key,s.key),this.keyedMap=_i(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof n)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){let r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){let s=new n;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}};var Pa=class{constructor(){this.fa=new ke(Z.comparator)}track(e){let t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ee(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}},vr=class n{constructor(e,t,s,r,i,a,c,d,p){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=p}static fromInitialDocuments(e,t,s,r,i){let a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new n(e,t,Ra.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}};var Yl=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}},Xl=class{constructor(){this.queries=kp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){let r=oe(t),i=r.queries;r.queries=kp(),i.forEach((a,c)=>{for(let d of c.wa)d.onError(s)})})(this,new J(V.ABORTED,"Firestore shutting down"))}};function kp(){return new _n(n=>_m(n),Ga)}async function Km(n,e){let t=oe(n),s=3,r=e.query,i=t.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new Yl,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await t.onListen(r,!0);break;case 1:i.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){let c=Nd(a,`Initialization of query '${er(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Od(t)}async function Wm(n,e){let t=oe(n),s=e.query,r=3,i=t.queries.get(s);if(i){let a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Eb(n,e){let t=oe(n),s=!1;for(let r of e){let i=r.query,a=t.queries.get(i);if(a){for(let c of a.wa)c.Ca(r)&&(s=!0);a.ya=r}}s&&Od(t)}function Tb(n,e,t){let s=oe(n),r=s.queries.get(e);if(r)for(let i of r.wa)i.onError(t);s.queries.delete(e)}function Od(n){n.Da.forEach(e=>{e.next()})}var Zl,Cp;(Cp=Zl||(Zl={})).Fa="default",Cp.Cache="cache";var ka=class{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){let s=[];for(let r of e.docChanges)r.type!==3&&s.push(r);e=new vr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;let s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Zl.Cache}};var Ca=class{constructor(e){this.key=e}},Da=class{constructor(e){this.key=e}},ed=class{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=he(),this.mutatedKeys=he(),this.Xa=ym(e),this.eu=new Ra(this.Xa)}get tu(){return this.Ha}nu(e,t){let s=t?t.ru:new Pa,r=t?t.eu:this.eu,i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1,d=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,p=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((y,v)=>{let A=r.get(y),x=$a(this.query,v)?v:null,B=!!A&&this.mutatedKeys.has(A.key),$=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations),F=!1;A&&x?A.data.isEqual(x.data)?B!==$&&(s.track({type:3,doc:x}),F=!0):this.iu(A,x)||(s.track({type:2,doc:x}),F=!0,(d&&this.Xa(x,d)>0||p&&this.Xa(x,p)<0)&&(c=!0)):!A&&x?(s.track({type:0,doc:x}),F=!0):A&&!x&&(s.track({type:1,doc:A}),F=!0,(d||p)&&(c=!0)),F&&(x?(a=a.add(x),i=$?i.add(y):i.delete(y)):(a=a.delete(y),i=i.delete(y)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let y=this.query.limitType==="F"?a.last():a.first();a=a.delete(y.key),i=i.delete(y.key),s.track({type:1,doc:y})}return{eu:a,ru:s,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){let i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let a=e.ru.pa();a.sort((y,v)=>function(x,B){let $=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:F})}};return $(x)-$(B)}(y.type,v.type)||this.Xa(y.doc,v.doc)),this.su(s),r=r!=null&&r;let c=t&&!r?this.ou():[],d=this.Za.size===0&&this.current&&!r?1:0,p=d!==this.Ya;return this.Ya=d,a.length!==0||p?{snapshot:new vr(this.query,e.eu,i,a,e.mutatedKeys,d===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Pa,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=he(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});let t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Da(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Ca(s))}),t}uu(e){this.Ha=e.qs,this.Za=he();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return vr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},xd="SyncEngine",td=class{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}},nd=class{constructor(e){this.key=e,this.lu=!1}},sd=class{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new _n(c=>_m(c),Ga),this.Tu=new Map,this.Iu=new Set,this.du=new ke(Z.comparator),this.Eu=new Map,this.Au=new Ci,this.Ru={},this.Vu=new Map,this.mu=ki.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function Ab(n,e,t=!0){let s=eg(n),r,i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await Qm(s,e,t,!0),r}async function Sb(n,e){let t=eg(n);await Qm(t,e,!0,!1)}async function Qm(n,e,t,s){let r=await ub(n.localStore,Zt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t),c;return s&&(c=await Rb(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&jm(n.remoteStore,r),c}async function Rb(n,e,t,s,r){n.gu=(v,A,x)=>async function($,F,te,K){let ne=F.view.nu(te);ne.Ds&&(ne=await Ap($.localStore,F.query,!1).then(({documents:P})=>F.view.nu(P,ne)));let _e=K&&K.targetChanges.get(F.targetId),Xe=K&&K.targetMismatches.get(F.targetId)!=null,le=F.view.applyChanges(ne,$.isPrimaryClient,_e,Xe);return Np($,F.targetId,le._u),le.snapshot}(n,v,A,x);let i=await Ap(n.localStore,e,!0),a=new ed(e,i.qs),c=a.nu(i.documents),d=Ri.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),p=a.applyChanges(c,n.isPrimaryClient,d);Np(n,t,p._u);let y=new td(e,t,a);return n.Pu.set(e,y),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),p.snapshot}async function Pb(n,e,t){let s=oe(n),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter(a=>!Ga(a,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Ml(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Pd(s.remoteStore,r.targetId),rd(s,r.targetId)}).catch(Tr)):(rd(s,r.targetId),await Ml(s.localStore,r.targetId,!0))}async function kb(n,e){let t=oe(n),s=t.Pu.get(e),r=t.Tu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Pd(t.remoteStore,s.targetId))}async function Cb(n,e,t){let s=Mb(n);try{let r=await function(a,c){let d=oe(a),p=Le.now(),y=c.reduce((x,B)=>x.add(B.key),he()),v,A;return d.persistence.runTransaction("Locally write mutations","readwrite",x=>{let B=yn(),$=he();return d.Os.getEntries(x,y).next(F=>{B=F,B.forEach((te,K)=>{K.isValidDocument()||($=$.add(te))})}).next(()=>d.localDocuments.getOverlayedDocuments(x,B)).next(F=>{v=F;let te=[];for(let K of c){let ne=Vw(K,v.get(K.key).overlayedDocument);ne!=null&&te.push(new sn(K.key,ne,dm(ne.value.mapValue),It.exists(!0)))}return d.mutationQueue.addMutationBatch(x,p,te,c)}).next(F=>{A=F;let te=F.applyToLocalDocumentSet(v,$);return d.documentOverlayCache.saveOverlays(x,F.batchId,te)})}).then(()=>({batchId:A.batchId,changes:wm(v)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(a,c,d){let p=a.Ru[a.currentUser.toKey()];p||(p=new ke(ce)),p=p.insert(c,d),a.Ru[a.currentUser.toKey()]=p}(s,r.batchId,t),await xi(s,r.changes),await Wa(s.remoteStore)}catch(r){let i=Nd(r,"Failed to persist write");t.reject(i)}}async function Jm(n,e){let t=oe(n);try{let s=await ob(t.localStore,e);e.targetChanges.forEach((r,i)=>{let a=t.Eu.get(i);a&&(we(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.lu=!0:r.modifiedDocuments.size>0?we(a.lu,14607):r.removedDocuments.size>0&&(we(a.lu,42227),a.lu=!1))}),await xi(t,s,e)}catch(s){await Tr(s)}}function Dp(n,e,t){let s=oe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){let r=[];s.Pu.forEach((i,a)=>{let c=a.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){let d=oe(a);d.onlineState=c;let p=!1;d.queries.forEach((y,v)=>{for(let A of v.wa)A.va(c)&&(p=!0)}),p&&Od(d)}(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Db(n,e,t){let s=oe(n);s.sharedClientState.updateQueryState(e,"rejected",t);let r=s.Eu.get(e),i=r&&r.key;if(i){let a=new ke(Z.comparator);a=a.insert(i,Ft.newNoDocument(i,ae.min()));let c=he().add(i),d=new pa(ae.min(),new Map,new ke(ce),a,c);await Jm(s,d),s.du=s.du.remove(i),s.Eu.delete(e),Vd(s)}else await Ml(s.localStore,e,!1).then(()=>rd(s,e,t)).catch(Tr)}async function Nb(n,e){let t=oe(n),s=e.batch.batchId;try{let r=await ib(t.localStore,e);Xm(t,s,null),Ym(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await xi(t,r)}catch(r){await Tr(r)}}async function Ob(n,e,t){let s=oe(n);try{let r=await function(a,c){let d=oe(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return d.mutationQueue.lookupMutationBatch(p,c).next(v=>(we(v!==null,37113),y=v.keys(),d.mutationQueue.removeMutationBatch(p,v))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,y,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>d.localDocuments.getDocuments(p,y))})}(s.localStore,e);Xm(s,e,t),Ym(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await xi(s,r)}catch(r){await Tr(r)}}function Ym(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Xm(n,e,t){let s=oe(n),r=s.Ru[s.currentUser.toKey()];if(r){let i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function rd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(let s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(s=>{n.Au.containsKey(s)||Zm(n,s)})}function Zm(n,e){n.Iu.delete(e.path.canonicalString());let t=n.du.get(e);t!==null&&(Pd(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Vd(n))}function Np(n,e,t){for(let s of t)s instanceof Ca?(n.Au.addReference(s.key,e),xb(n,s)):s instanceof Da?(H(xd,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||Zm(n,s.key)):ee(19791,{yu:s})}function xb(n,e){let t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(H(xd,"New document in limbo: "+t),n.Iu.add(s),Vd(n))}function Vd(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let e=n.Iu.values().next().value;n.Iu.delete(e);let t=new Z(Ae.fromString(e)),s=n.mu.next();n.Eu.set(s,new nd(t)),n.du=n.du.insert(t,s),jm(n.remoteStore,new Pi(Zt(za(t.path)),s,"TargetPurposeLimboResolution",cr.ue))}}async function xi(n,e,t){let s=oe(n),r=[],i=[],a=[];s.Pu.isEmpty()||(s.Pu.forEach((c,d)=>{a.push(s.gu(d,e,t).then(p=>{var y;if((p||t)&&s.isPrimaryClient){let v=p?!p.fromCache:(y=t?.targetChanges.get(d.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(d.targetId,v?"current":"not-current")}if(p){r.push(p);let v=Ol.Es(d.targetId,p);i.push(v)}}))}),await Promise.all(a),s.hu.J_(r),await async function(d,p){let y=oe(d);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>M.forEach(p,A=>M.forEach(A.Is,x=>y.persistence.referenceDelegate.addReference(v,A.targetId,x)).next(()=>M.forEach(A.ds,x=>y.persistence.referenceDelegate.removeReference(v,A.targetId,x)))))}catch(v){if(!Ar(v))throw v;H(Rd,"Failed to update sequence numbers: "+v)}for(let v of p){let A=v.targetId;if(!v.fromCache){let x=y.Fs.get(A),B=x.snapshotVersion,$=x.withLastLimboFreeSnapshotVersion(B);y.Fs=y.Fs.insert(A,$)}}}(s.localStore,i))}async function Vb(n,e){let t=oe(n);if(!t.currentUser.isEqual(e)){H(xd,"User change. New user:",e.toKey());let s=await Um(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(d=>{d.reject(new J(V.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await xi(t,s.Bs)}}function Lb(n,e){let t=oe(n),s=t.Eu.get(e);if(s&&s.lu)return he().add(s.key);{let r=he(),i=t.Tu.get(e);if(!i)return r;for(let a of i){let c=t.Pu.get(a);r=r.unionWith(c.view.tu)}return r}}function eg(n){let e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Db.bind(null,e),e.hu.J_=Eb.bind(null,e.eventManager),e.hu.pu=Tb.bind(null,e.eventManager),e}function Mb(n){let e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}var wr=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ha(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return rb(this.persistence,new Vl,e.initialUser,this.serializer)}Du(e){return new wa(Nl.Vi,this.serializer)}bu(e){return new Fl}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};wr.provider={build:()=>new wr};var id=class extends wr{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){we(this.persistence.referenceDelegate instanceof ba,46915);let s=this.persistence.referenceDelegate.garbageCollector;return new vl(s,e.asyncQueue,t)}Du(e){let t=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new wa(s=>ba.Vi(s,t),this.serializer)}};var Di=class{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Dp(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vb.bind(null,this.syncEngine),await Ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xl}()}createDatastore(e){let t=Ha(e.databaseInfo.databaseId),s=function(i){return new zl(i)}(e.databaseInfo);return function(i,a,c,d){return new Kl(i,a,c,d)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,a,c){return new Ql(s,r,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Dp(this.syncEngine,t,0),function(){return Ea.C()?new Ea:new Ul}())}createSyncEngine(e,t){return function(r,i,a,c,d,p,y){let v=new sd(r,i,a,c,d,p);return y&&(v.fu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){let i=oe(r);H(As,"RemoteStore shutting down."),i.Ia.add(5),await Oi(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}};Di.provider={build:()=>new Di};var Na=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}};var $n="FirestoreClient",od=class{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=Ii.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async a=>{H($n,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(s,a=>(H($n,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let s=Nd(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}};async function Cu(n,e){n.asyncQueue.verifyOperationInProgress(),H($n,"Initializing OfflineComponentProvider");let t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Um(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>{qn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{H("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(r=>{qn("Terminating Firestore due to IndexedDb database deletion failed",r)})}),n._offlineComponents=e}async function Op(n,e){n.asyncQueue.verifyOperationInProgress();let t=await Fb(n);H($n,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Pp(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Pp(e.remoteStore,r)),n._onlineComponents=e}async function Fb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H($n,"Using user provided OfflineComponentProvider");try{await Cu(n,n._uninitializedComponentsProvider._offline)}catch(e){let t=e;if(!function(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;qn("Error using user provided cache. Falling back to memory cache: "+t),await Cu(n,new wr)}}else H($n,"Using default OfflineComponentProvider"),await Cu(n,new id(void 0));return n._offlineComponents}async function tg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H($n,"Using user provided OnlineComponentProvider"),await Op(n,n._uninitializedComponentsProvider._online)):(H($n,"Using default OnlineComponentProvider"),await Op(n,new Di))),n._onlineComponents}function Ub(n){return tg(n).then(e=>e.syncEngine)}async function ad(n){let e=await tg(n),t=e.eventManager;return t.onListen=Ab.bind(null,e.syncEngine),t.onUnlisten=Pb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Sb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kb.bind(null,e.syncEngine),t}function Bb(n,e,t={}){let s=new Yt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,d,p){let y=new Na({next:A=>{y.Ou(),a.enqueueAndForget(()=>Wm(i,v));let x=A.docs.has(c);!x&&A.fromCache?p.reject(new J(V.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&A.fromCache&&d&&d.source==="server"?p.reject(new J(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(A)},error:A=>p.reject(A)}),v=new ka(za(c.path),y,{includeMetadataChanges:!0,ka:!0});return Km(i,v)}(await ad(n),n.asyncQueue,e,t,s)),s.promise}function ng(n){let e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}var xp=new Map;var sg="firestore.googleapis.com",Vp=!0,Oa=class{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new J(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sg,this.ssl=Vp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Vp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tb)throw new J(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ng((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},br=class{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oa(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Nu;switch(s.type){case"firstParty":return new Lu(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new J(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let s=xp.get(t);s&&(H("ComponentProvider","Removing Datastore"),xp.delete(t),s.terminate())}(this),Promise.resolve()}};function jb(n,e,t,s={}){var r;n=bt(n,br);let i=kn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;i&&(ho(`https://${d}`),fo("Firestore",!0)),a.host!==sg&&a.host!==d&&qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let p=Object.assign(Object.assign({},a),{host:d,ssl:i,emulatorOptions:s});if(!Gt(p,c)&&(n._setSettings(p),s.mockUserToken)){let y,v;if(typeof s.mockUserToken=="string")y=s.mockUserToken,v=We.MOCK_USER;else{y=wh(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);let A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new J(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new We(A)}n._authCredentials=new Ou(new oa(y,v))}}var xa=class n{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new n(this.firestore,e,this._query)}},Je=class n{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n(this.firestore,e,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ni(t,n._jsonSchema))return new n(e,s||null,new Z(Ae.fromString(t.referencePath)))}};Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Ve("string",Je._jsonSchemaVersion),referencePath:Ve("string")};var Fn=class n extends xa{constructor(e,t,s){super(e,t,za(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Z(e))}withConverter(e){return new n(this.firestore,e,this._path)}};function rg(n,e,...t){if(n=Te(n),jp("collection","path",e),n instanceof br){let s=Ae.fromString(e,...t);return ep(s),new Fn(n,null,s)}{if(!(n instanceof Je||n instanceof Fn))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=n._path.child(Ae.fromString(e,...t));return ep(s),new Fn(n.firestore,null,s)}}function Ld(n,e,...t){if(n=Te(n),arguments.length===1&&(e=Ii.newId()),jp("doc","path",e),n instanceof br){let s=Ae.fromString(e,...t);return Zf(s),new Je(n,null,new Z(s))}{if(!(n instanceof Je||n instanceof Fn))throw new J(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=n._path.child(Ae.fromString(e,...t));return Zf(s),new Je(n.firestore,n instanceof Fn?n.converter:null,new Z(s))}}var Lp="AsyncQueue",Va=class{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ta(this,"async_queue_retry"),this.oc=()=>{let s=ku();s&&H(Lp,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;let t=ku();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=ku();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new Yt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ar(e))throw e;H(Lp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,pn("INTERNAL UNHANDLED ERROR: ",Mp(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let r=Jl.createAndSchedule(this,e,t,s,i=>this.lc(i));return this.ec.push(r),r}ac(){this.tc&&ee(47125,{hc:Mp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(let t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}};function Mp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}function Fp(n){return function(t,s){if(typeof t!="object"||t===null)return!1;let r=t;for(let i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}var Ut=class extends br{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Va,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new Va(e),this._firestoreClient=void 0,await e}}};function ig(n,e){let t=typeof n=="object"?n:_o(),s=typeof n=="string"?n:e||da,r=ei(t,"firestore").getImmediate({identifier:s});if(!r._initialized){let i=vh("firestore");i&&jb(r,...i)}return r}function Qa(n){if(n._terminated)throw new J(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qb(n),n._firestoreClient}function qb(n){var e,t,s;let r=n._freezeSettings(),i=function(c,d,p,y){return new ju(c,d,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,ng(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new od(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){let d=c?._online.build();return{_offline:c?._offline.build(d),_online:d}}(n._componentsProvider))}var Un=class n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n(ut.fromBase64String(e))}catch(t){throw new J(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ni(e,n._jsonSchema))return n.fromBase64String(e.bytes)}};Un._jsonSchemaVersion="firestore/bytes/1.0",Un._jsonSchema={type:Ve("string",Un._jsonSchemaVersion),bytes:Ve("string")};var Ss=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Ir=class{constructor(e){this._methodName=e}};var Bn=class n{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(e){if(Ni(e,n._jsonSchema))return new n(e.latitude,e.longitude)}};Bn._jsonSchemaVersion="firestore/geoPoint/1.0",Bn._jsonSchema={type:Ve("string",Bn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};var jn=class n{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ni(e,n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new n(e.vectorValues);throw new J(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};jn._jsonSchemaVersion="firestore/vectorValue/1.0",jn._jsonSchema={type:Ve("string",jn._jsonSchemaVersion),vectorValues:Ve("object")};var zb=/^__.*__$/,cd=class{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ts(e,this.data,t,this.fieldTransforms)}},La=class{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new sn(e,this.data,this.fieldMask,t,this.fieldTransforms)}};function og(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:n})}}var ud=class n{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new n(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var t;let s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Fa(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(og(this.Ec)&&zb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}},ld=class{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ha(e)}Dc(e,t,s,r=!1){return new ud({Ec:e,methodName:t,bc:s,path:wt.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Ja(n){let e=n._freezeSettings(),t=Ha(n._databaseId);return new ld(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Md(n,e,t,s,r,i={}){let a=n.Dc(i.merge||i.mergeFields?2:0,e,t,r);Fd("Data must be an object, but it was:",a,s);let c=ug(s,a),d,p;if(i.merge)d=new kt(a.fieldMask),p=a.fieldTransforms;else if(i.mergeFields){let y=[];for(let v of i.mergeFields){let A=hd(e,v,t);if(!a.contains(A))throw new J(V.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);dg(y,A)||y.push(A)}d=new kt(y),p=a.fieldTransforms.filter(v=>d.covers(v.field))}else d=null,p=a.fieldTransforms;return new cd(new vt(c),d,p)}var Ma=class n extends Ir{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof n}};var dd=class n extends Ir{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){let t=new Es(e.serializer,Em(e.serializer,this.Cc));return new tl(e.path,t)}isEqual(e){return e instanceof n&&this.Cc===e.Cc}};function ag(n,e,t,s){let r=n.Dc(1,e,t);Fd("Data must be an object, but it was:",r,s);let i=[],a=vt.empty();Hn(s,(d,p)=>{let y=Ud(e,d,t);p=Te(p);let v=r.gc(y);if(p instanceof Ma)i.push(y);else{let A=Ya(p,v);A!=null&&(i.push(y),a.set(y,A))}});let c=new kt(i);return new La(a,c,r.fieldTransforms)}function cg(n,e,t,s,r,i){let a=n.Dc(1,e,t),c=[hd(e,s,t)],d=[r];if(i.length%2!=0)throw new J(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<i.length;A+=2)c.push(hd(e,i[A])),d.push(i[A+1]);let p=[],y=vt.empty();for(let A=c.length-1;A>=0;--A)if(!dg(p,c[A])){let x=c[A],B=d[A];B=Te(B);let $=a.gc(x);if(B instanceof Ma)p.push(x);else{let F=Ya(B,$);F!=null&&(p.push(x),y.set(x,F))}}let v=new kt(p);return new La(y,v,a.fieldTransforms)}function Ya(n,e){if(lg(n=Te(n)))return Fd("Unsupported field value:",e,n),ug(n,e);if(n instanceof Ir)return function(s,r){if(!og(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);let i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,r){let i=[],a=0;for(let c of s){let d=Ya(c,r.yc(a));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),a++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=Te(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Em(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){let i=Le.fromDate(s);return{timestampValue:ya(r.serializer,i)}}if(s instanceof Le){let i=new Le(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ya(r.serializer,i)}}if(s instanceof Bn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Un)return{bytesValue:Dm(r.serializer,s._byteString)};if(s instanceof Je){let i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof jn)return function(a,c){return{mapValue:{fields:{[wd]:{stringValue:bd},[ur]:{arrayValue:{values:a.toArray().map(p=>{if(typeof p!="number")throw c.wc("VectorValues must only contain numeric values.");return Ad(c.serializer,p)})}}}}}}(s,r);throw r.wc(`Unsupported field value: ${_d(s)}`)}(n,e)}function ug(n,e){let t={};return sm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(n,(s,r)=>{let i=Ya(r,e.Vc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function lg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Le||n instanceof Bn||n instanceof Un||n instanceof Je||n instanceof Ir||n instanceof jn)}function Fd(n,e,t){if(!lg(t)||!qp(t)){let s=_d(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function hd(n,e,t){if((e=Te(e))instanceof Ss)return e._internalPath;if(typeof e=="string")return Ud(n,e);throw Fa("Field path arguments must be of type string or ",n,!1,void 0,t)}var Gb=new RegExp("[~\\*/\\[\\]]");function Ud(n,e,t){if(e.search(Gb)>=0)throw Fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ss(...e.split("."))._internalPath}catch{throw Fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fa(n,e,t,s,r){let i=s&&!s.isEmpty(),a=r!==void 0,c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(i||a)&&(d+=" (found",i&&(d+=` in field ${s}`),a&&(d+=` in document ${r}`),d+=")"),new J(V.INVALID_ARGUMENT,c+n+d)}function dg(n,e){return n.some(t=>t.isEqual(e))}var Ua=class{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new fd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(hg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},fd=class extends Ua{data(){return super.data()}};function hg(n,e){return typeof e=="string"?Ud(n,e):e instanceof Ss?e._internalPath:e._delegate._internalPath}function $b(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var pd=class{convertValue(e,t="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let s={};return Hn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;let i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[ur].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(a=>Ee(a.doubleValue));return new jn(i)}convertGeoPoint(e){return new Bn(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":let s=qa(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ai(e));default:return null}}convertTimestamp(e){let t=mn(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){let s=Ae.fromString(e);we(Mm(s),9688,{name:e});let r=new ha(s.get(1),s.get(3)),i=new Z(s.popFirst(5));return r.isEqual(t)||pn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}};function Bd(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}var _s=class{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},ys=class n extends Ua{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let s=this._document.data.field(hg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}};ys._jsonSchemaVersion="firestore/documentSnapshot/1.0",ys._jsonSchema={type:Ve("string",ys._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};var ir=class extends ys{data(e={}){return super.data(e)}},or=class n{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new _s(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new ir(this._firestore,this._userDataWriter,s.key,s,new _s(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{let d=new ir(r._firestore,r._userDataWriter,c.doc.key,c.doc,new _s(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{let d=new ir(r._firestore,r._userDataWriter,c.doc.key,c.doc,new _s(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter),p=-1,y=-1;return c.type!==0&&(p=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),y=a.indexOf(c.doc.key)),{type:Hb(c.type),doc:d,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ii.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}};function Hb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}function fg(n){n=bt(n,Je);let e=bt(n.firestore,Ut);return Bb(Qa(e),n._key).then(t=>vg(e,n,t))}or._jsonSchemaVersion="firestore/querySnapshot/1.0",or._jsonSchema={type:Ve("string",or._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};var Ba=class extends pd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Je(this.firestore,null,t)}};function pg(n,e,t){n=bt(n,Je);let s=bt(n.firestore,Ut),r=Bd(n.converter,e,t);return Vi(s,[Md(Ja(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,It.none())])}function mg(n,e,t,...s){n=bt(n,Je);let r=bt(n.firestore,Ut),i=Ja(r),a;return a=typeof(e=Te(e))=="string"||e instanceof Ss?cg(i,"updateDoc",n._key,e,t,s):ag(i,"updateDoc",n._key,e),Vi(r,[a.toMutation(n._key,It.exists(!0))])}function gg(n){return Vi(bt(n.firestore,Ut),[new yr(n._key,It.none())])}function _g(n,e){let t=bt(n.firestore,Ut),s=Ld(n),r=Bd(n.converter,e);return Vi(t,[Md(Ja(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,It.exists(!1))]).then(()=>s)}function yg(n,...e){var t,s,r;n=Te(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Fp(e[a])||(i=e[a++]);let c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fp(e[a])){let v=e[a];e[a]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[a+1]=(s=v.error)===null||s===void 0?void 0:s.bind(v),e[a+2]=(r=v.complete)===null||r===void 0?void 0:r.bind(v)}let d,p,y;if(n instanceof Je)p=bt(n.firestore,Ut),y=za(n._key.path),d={next:v=>{e[a]&&e[a](vg(p,n,v))},error:e[a+1],complete:e[a+2]};else{let v=bt(n,xa);p=bt(v.firestore,Ut),y=v._query;let A=new Ba(p);d={next:x=>{e[a]&&e[a](new or(p,A,v,x))},error:e[a+1],complete:e[a+2]},$b(n._query)}return function(A,x,B,$){let F=new Na($),te=new ka(x,F,B);return A.asyncQueue.enqueueAndForget(async()=>Km(await ad(A),te)),()=>{F.Ou(),A.asyncQueue.enqueueAndForget(async()=>Wm(await ad(A),te))}}(Qa(p),y,c,d)}function Vi(n,e){return function(s,r){let i=new Yt;return s.asyncQueue.enqueueAndForget(async()=>Cb(await Ub(s),r,i)),i.promise}(Qa(n),e)}function vg(n,e,t){let s=t.docs.get(e._key),r=new Ba(n);return new ys(n,r,e._key,s,new _s(t.hasPendingWrites,t.fromCache),e.converter)}var md=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ja(e)}set(e,t,s){this._verifyNotCommitted();let r=Du(e,this._firestore),i=Bd(r.converter,t,s),a=Md(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(a.toMutation(r._key,It.none())),this}update(e,t,s,...r){this._verifyNotCommitted();let i=Du(e,this._firestore),a;return a=typeof(t=Te(t))=="string"||t instanceof Ss?cg(this._dataReader,"WriteBatch.update",i._key,t,s,r):ag(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,It.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Du(e,this._firestore);return this._mutations=this._mutations.concat(new yr(t._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Du(n,e){if((n=Te(n)).firestore!==e)throw new J(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function wg(n){return new dd("increment",n)}function bg(n){return Qa(n=bt(n,Ut)),new md(n,e=>Vi(n,e))}(function(e,t=!0){(function(r){Er=r})(On),Nn(new Rt("firestore",(s,{instanceIdentifier:r,options:i})=>{let a=s.getProvider("app").getImmediate(),c=new Ut(new xu(s.getProvider("auth-internal")),new Mu(a,s.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new J(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(p.options.projectId,y)}(a,r),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Lt(Qf,Jf,e),Lt(Qf,Jf,"esm2017")})();function Kb(n){let e=Fc(n);return{auth:wu(e),db:ig(e)}}var ht={pair:"2111",two:"221",trio:"311",full:"32",quad:"41",penta:"5",diff:"11111"},Pg=[{k:"sum_low",t:"Extremo baixo",s:"Soma 5\u201310",p:"28:1",f:n=>n.sum<=10?28:null},{k:"sum_small",t:"Pequeno",s:"Soma 5\u201317",p:"1:1",f:n=>!n.penta&&n.sum<=17?1:null},{k:"sum_even",t:"Par",s:"Soma par",p:"1:1",f:n=>!n.penta&&n.sum%2===0?1:null},{k:"sum_mid",t:"Central",s:"Soma 17 ou 18",p:"7:2",f:n=>n.sum===17||n.sum===18?3.5:null,hot:!0},{k:"sum_odd",t:"\xCDmpar",s:"Soma \xEDmpar",p:"1:1",f:n=>!n.penta&&n.sum%2===1?1:null},{k:"sum_big",t:"Grande",s:"Soma 18\u201330",p:"1:1",f:n=>!n.penta&&n.sum>=18?1:null},{k:"sum_high",t:"Extremo alto",s:"Soma 26\u201330",p:"28:1",f:n=>n.sum>=26?28:null}],kg=[{k:"c_pair",t:"Par",s:"S\xF3 um par",p:"11:10",f:n=>n.pat===ht.pair?1.1:null},{k:"c_two",t:"Dois pares",s:"2 + 2",p:"3:1",f:n=>n.pat===ht.two?3:null},{k:"c_trio",t:"Trio",s:"3 iguais",p:"5:1",f:n=>n.pat===ht.trio?5:null},{k:"c_full",t:"Full house",s:"Trio + par",p:"24:1",f:n=>n.pat===ht.full?24:null},{k:"c_quad",t:"Quadra",s:"4 iguais",p:"48:1",f:n=>n.pat===ht.quad?48:null},{k:"c_penta",t:"Penta",s:"5 iguais",p:"1200:1",f:n=>n.pat===ht.penta?1200:null,hot:!0},{k:"c_diff",t:"Todos diferentes",s:"Nenhum repetido",p:"9:1",f:n=>n.pat===ht.diff?9:null},{k:"s3",t:"Sequ\xEAncia de 3",s:"3 seguidos",p:"6:5",f:n=>n.run(3)?1.2:null},{k:"s4",t:"Sequ\xEAncia de 4",s:"4 seguidos",p:"5:1",f:n=>n.run(4)?5:null},{k:"s5",t:"Sequ\xEAncia de 5",s:"1 a 5 ou 2 a 6",p:"30:1",f:n=>n.run(5)?30:null}],Wb=[null,0,1,4,20,100],ks=[];for(let n=1;n<=6;n++)ks.push({k:"n"+n+"_1",n,single:!0,t:"N\xFAmero "+n,s:"Casa do dado",p:"1 dado devolve",f:e=>Wb[e.c[n]]}),ks.push({k:"n"+n+"_2",n,t:"Pelo menos 2",p:"4:1",f:e=>e.c[n]>=2?4:null}),ks.push({k:"n"+n+"_3",n,t:"Pelo menos 3",p:"25:1",f:e=>e.c[n]>=3?25:null}),ks.push({k:"n"+n+"_4",n,t:"Pelo menos 4",p:"280:1",f:e=>e.c[n]>=4?280:null}),ks.push({k:"n"+n+"_5",n,t:"Penta de "+n,p:"7500:1",f:e=>e.c[n]===5?7500:null,hot:!0});var Cg=[...Pg,...kg,...ks],Ye=Object.fromEntries(Cg.map(n=>[n.k,n])),Cs=n=>n.n&&!n.single?n.t+" de "+n.n:n.t;function Ui(n){let e=[0,0,0,0,0,0,0];n.forEach(i=>e[i]++);let t=e.slice(1).filter(Boolean).sort((i,a)=>a-i).join(""),s=n.reduce((i,a)=>i+a,0);return{c:e,pat:t,sum:s,run:i=>{for(let a=1;a<=7-i;a++){let c=!0;for(let d=0;d<i;d++)if(!e[a+d]){c=!1;break}if(c)return!0}return!1},penta:t===ht.penta}}var Qb=(n,e)=>e==null?0:n+Math.floor(n*e+1e-9);function Dg(n){let e={[ht.pair]:"Par",[ht.two]:"Dois pares",[ht.trio]:"Trio",[ht.full]:"Full house",[ht.quad]:"Quadra",[ht.penta]:"Penta",[ht.diff]:"Todos diferentes"},t=["Soma "+n.sum,e[n.pat]];return n.run(5)?t.push("Sequ\xEAncia de 5"):n.run(4)?t.push("Sequ\xEAncia de 4"):n.run(3)&&t.push("Sequ\xEAncia de 3"),t.join(" \xB7 ")}var ec=[];for(let n=1;n<=6;n++)for(let e=1;e<=6;e++)for(let t=1;t<=6;t++)for(let s=1;s<=6;s++)for(let r=1;r<=6;r++)ec.push(Ui([n,e,t,s,r]));function Ng(n,e){let t=1;for(let s of n){let r=Ye[s].f(e);if(r==null)return 0;t*=r+1}return t}var qd=new Map;function Wd(n){let e=n.slice().sort().join("|");if(qd.has(e))return qd.get(e);let t=0,s=0,r=0;for(let a of ec){let c=Ng(n,a);c>0&&(t++,s+=c,c>r&&(r=c))}let i={p:t/ec.length,ev:s/ec.length,max:r};return qd.set(e,i),i}function zd(n){if(!Array.isArray(n)||n.length<2||n.length>6)return"A m\xFAltipla precisa de 2 a 6 sele\xE7\xF5es";if(new Set(n).size!==n.length||n.some(t=>!Ye[t]))return"Sele\xE7\xF5es inv\xE1lidas";let e=Wd(n);return e.p===0?"Estas sele\xE7\xF5es n\xE3o podem ganhar ao mesmo tempo":e.ev>=1?"Combina\xE7\xE3o n\xE3o permitida: as sele\xE7\xF5es dependem umas das outras e a m\xFAltipla pagaria acima do justo":null}var Rr=["#E8C46A","#7FC8F8","#F4A99B","#B5E48C","#D7A6F5","#F9B46B","#8EE3D3","#FFFFFF","#F5E663","#A0B4FF"],Gd=[{v:1,bg:"#FFFFFF",fg:"#1B1B1B"},{v:5,bg:"#C62828",fg:"#FFFFFF"},{v:10,bg:"#1A2F6B",fg:"#FFFFFF"},{v:25,bg:"#2E8B57",fg:"#FFFFFF"},{v:100,bg:"#111111",fg:"#FFFFFF"},{v:500,bg:"#6A3BA8",fg:"#FFFFFF"},{v:1e3,bg:"#F2C200",fg:"#1B1B1B"}],Qd={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},D=n=>document.getElementById(n),W=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),j=n=>Number(n).toLocaleString("pt-PT"),Ig=n=>n.toLocaleString("pt-PT",{maximumFractionDigits:2}),Li=n=>JSON.parse(JSON.stringify(n));function Ds(n,e){let t='<span class="die '+(e||"")+(n?"":" empty")+'" aria-hidden="true">';for(let s=0;s<9;s++)t+='<i class="'+(n&&Qd[n].includes(s)?"on":"")+'"></i>';return t+"</span>"}var Eg=null;function X(n){let e=D("toast");e.textContent=n,e.hidden=!1,clearTimeout(Eg),Eg=setTimeout(()=>e.hidden=!0,2600)}var Tg={get(n){try{return localStorage.getItem(n)}catch{return null}},set(n,e){try{localStorage.setItem(n,e)}catch{}}};var nc=n=>new Promise(e=>setTimeout(e,n)),$d=()=>window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Pr(n){let e=256-256%n,t=new Uint8Array(1);for(;;)if(crypto.getRandomValues(t),t[0]<e)return t[0]%n}function Jb(n){let e='<span class="bdie" aria-hidden="true">';for(let t=0;t<9;t++)e+='<i class="'+(n&&Qd[n].includes(t)?"on":"")+'"></i>';return e+"</span>"}function Ag(n,e){n.querySelectorAll("i").forEach((t,s)=>t.classList.toggle("on",Qd[e].includes(s)))}var Yb="Casa do dado: 1 dado devolve \xB7 2 \u2192 1:1 \xB7 3 \u2192 4:1 \xB7 4 \u2192 20:1 \xB7 5 \u2192 100:1";function Xb(){let n=(t,s)=>'<button class="zone '+(s||"")+(t.hot?" hot":"")+'" data-act="zone" data-k="'+t.k+'" id="z-'+t.k+'" aria-label="'+W(Cs(t))+", paga "+W(t.p)+'">'+(t.single?Ds(t.n):'<span class="z-t">'+W(t.t)+"</span>")+(t.s?'<span class="z-s">'+W(t.s)+"</span>":"")+'<span class="z-p">'+W(t.p)+'</span><span class="stack" id="st-'+t.k+'"></span></button>',e="";for(let t=1;t<=6;t++){let s=ks.filter(r=>r.n===t);e+='<div class="ncol">'+n(s[0],"single")+s.slice(1).map(r=>n(r,"row")).join("")+"</div>"}return'<section class="sec"><div class="sec-h"><h2>Somas dos 5 dados</h2><span class="note">Pequeno, Grande, Par e \xCDmpar perdem se sair penta</span></div><div class="grid g-sum">'+Pg.map(t=>n(t)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Combina\xE7\xF5es e sequ\xEAncias</h2><span class="note">Cada combina\xE7\xE3o paga s\xF3 a sua casa \xB7 sequ\xEAncias: pelo menos esses n\xFAmeros seguidos</span></div><div class="grid g-combo">'+kg.map(t=>n(t)).join("")+'</div></section><section class="sec"><div class="sec-h"><h2>Aposta num n\xFAmero</h2><span class="note">'+Yb+'</span></div><div class="grid g-num">'+e+"</div></section>"}var Og=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],Bi=new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]),Jd=n=>n===0?"g":Bi.has(n)?"r":"b",ji={red:{name:"Vermelho",set:n=>Bi.has(n)},black:{name:"Preto",set:n=>n>0&&!Bi.has(n)},even:{name:"Par",set:n=>n>0&&n%2===0},odd:{name:"\xCDmpar",set:n=>n%2===1},low:{name:"1\u201318",set:n=>n>=1&&n<=18},high:{name:"19\u201336",set:n=>n>=19}};function kr(n){let e;if(e=/^n(\d{1,2})$/.exec(n)){let t=+e[1];return t<=36?[t]:null}if(e=/^s(\d{1,2})_(\d{1,2})$/.exec(n)){let t=+e[1],s=+e[2];return t>=s||s>36?null:t===0?s<=3?[0,s]:null:s-t===3?[t,s]:s-t===1&&t%3!==0?[t,s]:null}if(e=/^t(\d{1,2})$/.exec(n)){let t=+e[1];return t>=1&&t<=12?[3*t-2,3*t-1,3*t]:null}if(e=/^q(\d{1,2})$/.exec(n)){let t=+e[1];return t>=1&&t<=32&&t%3!==0?[t,t+1,t+3,t+4]:null}if(e=/^l(\d{1,2})$/.exec(n)){let t=+e[1];if(t<1||t>11)return null;let s=[];for(let r=3*t-2;r<=3*t+3;r++)s.push(r);return s}if(e=/^d([123])$/.exec(n)){let t=+e[1],s=[];for(let r=12*t-11;r<=12*t;r++)s.push(r);return s}if(e=/^c([123])$/.exec(n)){let t=+e[1],s=[];for(let r=t;r<=36;r+=3)s.push(r);return s}if(ji[n]){let t=[];for(let s=0;s<=36;s++)ji[n].set(s)&&t.push(s);return t}return null}var Zb={n:35,s:17,t:11,q:8,l:5,d:2,c:2};function Sg(n){return ji[n]?1:Zb[n[0]]}function xg(n){let e=kr(n);if(!e)return"?";if(ji[n])return ji[n].name;switch(n[0]){case"n":return"N\xFAmero "+e[0];case"s":return"Cavalo "+e.join("-");case"t":return"Rua "+e[0]+"\u2013"+e[2];case"q":return"Quadrado "+e.join("-");case"l":return"Linha "+e[0]+"\u2013"+e[5];case"d":return n[1]+"\xAA d\xFAzia ("+e[0]+"\u2013"+e[11]+")";case"c":return n[1]+"\xAA coluna"}return n}function eI(n){return n===0?"0 \xB7 Verde":n+" \xB7 "+(Bi.has(n)?"Vermelho":"Preto")+" \xB7 "+(n%2?"\xCDmpar":"Par")+" \xB7 "+(n<=18?"1\u201318":"19\u201336")+" \xB7 "+Math.ceil(n/12)+"\xAA d\xFAzia"}var sc=(n,e)=>'<span class="rball '+Jd(n)+" "+(e||"")+'">'+n+"</span>",tI=(()=>{let n=["n0"];for(let e=1;e<=36;e++)n.push("n"+e);for(let e=1;e<=12;e++)n.push("t"+e);return n.concat(["c1","c2","c3","d1","d2","d3","low","even","red","black","odd","high"])})();function nI(){let n=(s,r,i,a)=>'<button class="rz '+i+'" data-act="zone" data-k="'+s+'" id="z-'+s+'" aria-label="'+W(a)+'">'+r+'<span class="stack" id="st-'+s+'"></span></button>',e="";for(let s=1;s<=12;s++){e+=n("t"+s,'<span class="rst">Rua</span><span class="rsub">'+(3*s-2)+"\u2013"+3*s+"</span>","street","Rua "+(3*s-2)+" a "+3*s+", paga 11:1");for(let r=1;r<=3;r++){let i=3*(s-1)+r;e+=n("n"+i,'<span class="rn">'+i+"</span>","num "+Jd(i),"N\xFAmero "+i+", paga 35:1")}}let t=(s,r,i)=>n(s,'<span class="rlab">'+r+'</span><span class="rpay">'+(s[0]==="d"||s[0]==="c"?"2:1":"1:1")+"</span>","out "+(i||""),xg(s)+", paga "+(s[0]==="d"||s[0]==="c"?"2:1":"1:1"));return'<section class="sec"><div class="sec-h"><h2>Mesa de roleta</h2><span class="note">N\xFAmero 35:1 \xB7 Cavalo 17:1 \xB7 Rua 11:1 \xB7 Quadrado 8:1 \xB7 Linha 5:1 \xB7 D\xFAzias e colunas 2:1 \xB7 Chances simples 1:1 (perdem com o 0)</span></div><div class="rboard">'+n("n0",'<span class="rn">0</span>',"num g zero","Zero, paga 35:1")+'<div class="rgrid">'+e+'</div><div class="rcols"><span></span>'+t("c1","1\xAA col.")+t("c2","2\xAA col.")+t("c3","3\xAA col.")+'</div><div class="rdoz">'+t("d1","1\xAA 12")+t("d2","2\xAA 12")+t("d3","3\xAA 12")+'</div><div class="rout">'+t("low","1\u201318")+t("even","Par")+t("red",'<span class="rdia r"></span>',"redc")+t("black",'<span class="rdia b"></span>',"blackc")+t("odd","\xCDmpar")+t("high","19\u201336")+"</div></div></section>"}var sI=(()=>{let n=9.72972972972973,e=112,t=72,s="",r=(i,a)=>{let c=(a-90)*Math.PI/180;return[(i*Math.cos(c)).toFixed(2),(i*Math.sin(c)).toFixed(2)]};return Og.forEach((i,a)=>{let c=a*n-n/2,d=a*n+n/2,[p,y]=r(e,c),[v,A]=r(e,d),[x,B]=r(t,d),[$,F]=r(t,c),te=i===0?"#1E8E4E":Bi.has(i)?"#C62828":"#141414";s+='<path d="M'+p+" "+y+"A"+e+" "+e+" 0 0 1 "+v+" "+A+"L"+x+" "+B+"A"+t+" "+t+" 0 0 0 "+$+" "+F+'Z" fill="'+te+'" stroke="#E8C46A" stroke-width="0.8"/>';let[K,ne]=r(96,a*n);s+='<text x="'+K+'" y="'+ne+'" fill="#F4ECD2" font-size="10" font-weight="700" text-anchor="middle" dominant-baseline="central" transform="rotate('+(a*n).toFixed(2)+" "+K+" "+ne+')">'+i+"</text>"}),'<svg class="wheel-svg" viewBox="-120 -120 240 240" aria-hidden="true"><circle r="118" fill="#5B3A1E"/>'+s+'<circle r="70" fill="#3B2A14" stroke="#E8C46A" stroke-width="2"/><circle r="22" fill="#E8C46A"/><circle r="8" fill="#5B3A1E"/></svg>'})(),Ps={sicbo:{type:"sicbo",label:"Sic Bo \xB7 5 dados",verb:"Lan\xE7ar dados",resNoun:"dados",physical:!0,multi:!0,animMs:2400,roll:()=>[1+Pr(6),1+Pr(6),1+Pr(6),1+Pr(6),1+Pr(6)],info:n=>Ui(n),valid:n=>!!Ye[n],mult:(n,e)=>Ye[n]?Ye[n].f(e):null,name:n=>Ye[n]?Cs(Ye[n]):"?",pay:n=>Ye[n]?Ye[n].p:"",desc:n=>Dg(Ui(n)),resSmall:n=>n.map(e=>Ds(e,"sm")).join(""),icon:()=>'<span class="ticon dice">'+Ds(5,"sm")+Ds(3,"sm")+"</span>",boardHTML:Xb,zoneKeys:Cg.map(n=>n.k),revealInit:n=>'<div class="rv-dice">'+n.map(()=>Jb(1)).join("")+"</div>",async revealRun(n,e,t){let s=[...n.querySelectorAll(".bdie")];s.forEach((a,c)=>{a.style.animationDelay=c*70+"ms",a.classList.add("tumble")});let r=performance.now(),i=60;for(;performance.now()-r<t;)s.forEach(a=>Ag(a,1+Math.floor(Math.random()*6))),await nc(i),i=Math.min(180,i*1.06);s.forEach((a,c)=>{a.classList.remove("tumble"),Ag(a,e[c]),a.classList.add("land")})}},roleta:{type:"roleta",label:"Roleta europeia",verb:"Rodar a roleta",resNoun:"roleta",physical:!1,multi:!1,animMs:4800,roll:()=>[Pr(37)],info:n=>n[0],valid:n=>!!kr(n),mult:(n,e)=>{let t=kr(n);return t&&t.includes(e)?Sg(n):null},name:xg,pay:n=>kr(n)?Sg(n)+":1":"",desc:n=>eI(n[0]),resSmall:n=>sc(n[0],"sm"),icon:()=>'<span class="ticon wheel" aria-hidden="true"></span>',boardHTML:nI,zoneKeys:tI,revealInit:()=>'<div class="rv-wheel"><span class="rv-pointer" aria-hidden="true"></span><div class="rv-rot">'+sI+'</div></div><div class="rv-num" aria-hidden="true"></div>',async revealRun(n,e,t){let s=e[0],r=Og.indexOf(s),i=360/37,a=n.querySelector(".rv-rot"),c=-(r*i)-360*(t?6:0);a.style.transition="none",a.style.transform="rotate(0deg)",a.offsetWidth,a.style.transition=t?"transform "+t+"ms cubic-bezier(.12,.62,.16,1)":"none",a.style.transform="rotate("+c+"deg)",await nc(t);let d=n.querySelector(".rv-num");d.innerHTML=sc(s,"big"),d.classList.add("show")}}},Rg="@jogadores.sicbo",rI=/^[A-Za-z0-9_.-]{3,20}$/,Mi={rounds:0,staked:0,returned:0,best:0};function iI(n){let e=n&&n.code||"";return e.includes("email-already-in-use")?"Esse utilizador j\xE1 existe. Escolha outro nome ou entre com a palavra-passe.":e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Utilizador ou palavra-passe errados.":e.includes("weak-password")?"A palavra-passe precisa de pelo menos 6 caracteres.":e.includes("too-many-requests")?"Demasiadas tentativas. Espere um pouco e tente de novo.":e.includes("operation-not-allowed")?"O in\xEDcio de sess\xE3o com palavra-passe n\xE3o est\xE1 ativo no Firebase.":e.includes("network")?"Sem liga\xE7\xE3o. Tente outra vez.":"N\xE3o foi poss\xEDvel entrar ("+(e||"erro")+")."}var Xa={v:5e3,bg:"#7B4A26",fg:"#F3E3C8"},Yd=[{id:"t_montecarlo",kind:"theme",name:"Monte Carlo",desc:"Azul-noite e dourado, como o casino do M\xF3naco.",price:1500,sw:["#13294B","#D9B65D","#F2E8D0"]},{id:"t_roleta",kind:"theme",name:"Roleta Vermelha",desc:"Vermelho-vinho com detalhes a ouro.",price:2e3,sw:["#5C1A1F","#E8C46A","#F6E7D2"]},{id:"t_vegas",kind:"theme",name:"Vegas Neon",desc:"Roxo de madrugada e n\xE9on rosa da Strip.",price:2500,sw:["#2A0E3F","#FF4FD8","#F9E7FF"]},{id:"t_ebano",kind:"theme",name:"Mesa de \xC9bano",desc:"Preto e prata da sala VIP.",price:3e3,sw:["#1B1B1D","#C9CED6","#E6E6E6"]},{id:"t_ouro",kind:"theme",name:"Ouro Real",desc:"Castanho e ouro para os grandes apostadores.",price:5e3,sw:["#3B2A14","#FFD54A","#F5E6C4"]},{id:"r_bronze",kind:"rank",name:"Bronze",price:500,hex:"#CD7F32",grad:"linear-gradient(135deg,#7A4A1D,#E3A15E 45%,#8C5626)"},{id:"r_prata",kind:"rank",name:"Prata",price:2500,hex:"#C0C0C0",prev:"r_bronze",grad:"linear-gradient(135deg,#7D8288,#F1F3F5 45%,#9AA0A6)"},{id:"r_ouro",kind:"rank",name:"Ouro",price:5e3,hex:"#FFD700",prev:"r_prata",grad:"linear-gradient(135deg,#A67C00,#FFE680 45%,#C99A06)"},{id:"r_platina",kind:"rank",name:"Platina",price:1e4,hex:"#E5E4E2",prev:"r_ouro",grad:"linear-gradient(135deg,#9FA8AE,#FFFFFF 45%,#C9D1D6)"},{id:"r_diamante",kind:"rank",name:"Diamante",price:25e3,hex:"#B9F2FF",prev:"r_platina",grad:"linear-gradient(135deg,#5FC9E6,#E9FCFF 45%,#7FD9F0)"},{id:"r_rubi",kind:"rank",name:"Rubi",price:1e5,hex:"#E0115F",prev:"r_diamante",grad:"linear-gradient(135deg,#7A0630,#FF5C93 45%,#A50B44)"},{id:"r_esmeralda",kind:"rank",name:"Esmeralda",price:25e4,hex:"#50C878",prev:"r_rubi",grad:"linear-gradient(135deg,#1E6B3D,#9CF0BA 45%,#2E8F55)"},{id:"f_5k",kind:"chip",name:"Ficha de 5 000",desc:"Ficha castanha para apostas grandes. Aparece na sua barra de fichas e na sua torre.",price:5e3}],vn=Object.fromEntries(Yd.map(n=>[n.id,n])),tc=Yd.filter(n=>n.kind==="rank"),Hd=n=>tc.find(e=>e.hex===n)||null,Za=String((window.SICBO_CONFIG||{}).nome||"SIC BO \xB7 5 DADOS").slice(0,40),Kd=(()=>{try{let n=sessionStorage.getItem("sicbo5-device");return n||(n="d"+Math.random().toString(36).slice(2,10),sessionStorage.setItem("sicbo5-device",n)),n}catch{return"d"+Math.random().toString(36).slice(2,10)}})(),Fi=30;function Vg(n){document.title=Za;let e=(window.SICBO_CONFIG||{}).firebase,t=D("app");if(!e||!e.apiKey||String(e.apiKey).includes("COLE")){t.innerHTML='<section class="card narrow"><h2>Falta configurar</h2><p>Abra o ficheiro <b>config.js</b> e cole a configura\xE7\xE3o do seu projeto Firebase, como explicado no guia.</p></section>';return}let{auth:s,db:r}=n.init(e),i=l=>n.increment(l),a={user:null,uid:null,authReady:!1,users:{},usersLoaded:!1,tables:{},tablesLoaded:!1,players:{},bets:[],rewards:{},redemptions:[],config:null,dealer:null,legacy:void 0,role:Tg.get("sicbo5-role")||"player"},c={inTable:!0,lobbyTab:"mesas",ptab:"apostar",chip:25,mode:"bet",pick:null,legs:[],stake:0,dice:[],btab:"mesas",bsel:null,dtab:"mesa",busy:{},authTab:"login"},d={tables:n.collection(r,"tables"),players:n.collection(r,"players"),bets:n.collection(r,"bets"),users:n.collection(r,"users"),rewards:n.collection(r,"rewards"),redemptions:n.collection(r,"redemptions"),config:n.doc(r,"config","main"),dealer:n.doc(r,"config","dealer"),legacy:n.doc(r,"games","main")},p=l=>n.doc(r,"tables",l),y=l=>(l&&l.code==="permission-denied"?"A\xE7\xE3o recusada pelo servidor":"Sem liga\xE7\xE3o. Tente outra vez.")+(l&&l.code?" ["+l.code+"]":""),v=l=>{console.error(l),X(y(l))},A=[],x=()=>{A.forEach(l=>{try{l()}catch{}}),A=[]},B=l=>{let f={};return l.docs.forEach(m=>f[m.id]={id:m.id,...m.data()}),f};function $(){A.push(n.onSnapshot(d.tables,l=>{a.tables=B(l),a.tablesLoaded=!0,Jn(),se()},v)),A.push(n.onSnapshot(d.players,l=>{a.players=B(l),se()},v)),A.push(n.onSnapshot(d.bets,l=>{a.bets=l.docs.map(f=>({id:f.id,...f.data()})).sort((f,m)=>f.ts-m.ts),se()},v)),A.push(n.onSnapshot(d.rewards,l=>{a.rewards=B(l),se()},v)),A.push(n.onSnapshot(d.redemptions,l=>{a.redemptions=l.docs.map(f=>({id:f.id,...f.data()})).sort((f,m)=>m.ts-f.ts),se()},v)),A.push(n.onSnapshot(d.users,l=>{a.users=B(l),a.usersLoaded=!0,Xe(),se()},v)),A.push(n.onSnapshot(d.config,l=>{a.config=l.exists()?l.data():null,se()},v)),A.push(n.onSnapshot(d.dealer,l=>{a.dealer=l.exists()?l.data():null,se()},()=>{}))}n.onAuthStateChanged(s,l=>{let f=(l?l.uid:null)===a.uid&&a.authReady;if(a.authReady=!0,!f){x(),rn="",Object.assign(a,{user:l||null,uid:l?l.uid:null,users:{},usersLoaded:!1,tables:{},tablesLoaded:!1,players:{},bets:[],rewards:{},redemptions:[],config:null,dealer:null,legacy:void 0});for(let m in In)delete In[m];if(!l){c.authTab="login",se();return}$(),se()}});let F=()=>!!(a.user&&!a.user.isAnonymous&&a.users[a.uid]&&a.users[a.uid].role==="admin"),te=()=>a.role==="bank"&&F()?"bank":"player",K=(l,f)=>{l&&l._last!==f&&(l._last=f,l.innerHTML=f)},ne=null,_e=!1;async function Xe(){let l=a.user;if(!l||l.isAnonymous||!a.usersLoaded||a.users[l.uid]||_e)return;_e=!0;let f=ne&&ne.toLowerCase()+Rg===(l.email||"").toLowerCase()?ne:(l.email||"").split("@")[0];try{await n.setDoc(n.doc(r,"users",l.uid),{name:f,color:Rr[Math.floor(Math.random()*Rr.length)],created:Date.now(),stats:{...Mi}})}catch(m){v(m)}_e=!1}let le=()=>a.users[a.uid]||null,P=l=>{let f=a.players[l];return f&&f.table&&a.tables[f.table]?f:null},b=()=>P(a.uid),T=()=>{let l=b();return l?a.tables[l.table]:null},S=l=>Ps[l&&l.type||"sicbo"]||Ps.sicbo,R=l=>Object.values(a.players).filter(f=>f.table===l).sort((f,m)=>f.joined-m.joined),C=l=>{let f=a.tables[l];return f?a.bets.filter(m=>m.table===l&&m.round===f.round):[]},E=l=>{let f=P(l);return f?C(f.table).filter(m=>m.uid===l):[]},nt=l=>E(l).reduce((f,m)=>f+m.a,0),ze=l=>!!(a.users[l]&&typeof a.users[l].balance=="number"),lt=l=>ze(l)?a.users[l].balance:a.players[l]&&typeof a.players[l].chips=="number"?a.players[l].chips:0,Ce=l=>lt(l)-nt(l),Ct=()=>a.config&&typeof a.config.initial=="number"?a.config.initial:1e3,st=l=>l&&l.maxBet>0?l.maxBet:0,qi=(l,f)=>E(l).filter(m=>m.kind==="s"&&m.k===f).reduce((m,_)=>m+_.a,0),rc=(l,f)=>{let m=st(f);if(!m)return!1;let _={};for(let w of C(f.id).filter(I=>I.uid===l))if(w.kind==="m"){if(w.a>m)return!0}else if(_[w.k]=(_[w.k]||0)+w.a,_[w.k]>m)return!0;return!1},Dt=l=>st(l)?"M\xE1ximo por aposta: "+j(st(l))+" fichas":"Sem m\xE1ximo por aposta",De=l=>a.users[l]&&a.users[l].owned||[],ic=l=>!!(a.users[l]&&a.users[l].role==="admin"),Me=(l,f)=>ic(f||a.uid)||De(f||a.uid).includes(l),Kn=l=>a.players[l]?a.players[l].color:a.users[l]&&a.users[l].color||"#999",wn=l=>a.players[l]?a.players[l].name:a.users[l]&&a.users[l].name||"Jogador que saiu",Ne=l=>!!(l&&l.auto&&l.auto.on&&(l.type==="roleta"||l.diceMode==="virtual")),pt=l=>Math.max(10,Math.min(600,l&&l.auto&&l.auto.secs||Fi));function Ns(l){if(!Ne(l))return"";if(!l.open)return"A jogar\u2026";if(!l.nextAt)return"A come\xE7ar\u2026";let f=Math.max(0,Math.ceil((l.nextAt-Date.now())/1e3));return"Pr\xF3xima jogada em "+Math.floor(f/60)+":"+String(f%60).padStart(2,"0")}function Os(){let l=a.user&&!a.user.isAnonymous?a.users[a.uid]:null,f=l&&l.theme&&l.theme!=="classico"&&Me(l.theme)?l.theme.slice(2):"";(document.documentElement.dataset.skin||"")!==f&&(f?document.documentElement.dataset.skin=f:delete document.documentElement.dataset.skin)}function Cr(l,f){let m=Math.max(0,Math.floor(l)),_=[];for(let w of(f?Gd.concat(Xa):Gd).slice().reverse()){let I=Math.floor(m/w.v);I>0&&(_.push({c:w,k:I}),m-=I*w.v)}return _.length?'<div class="tower" aria-hidden="true">'+_.map(({c:w,k:I})=>{let N=Math.min(I,14),U="";for(let L=0;L<N;L++)U+='<i style="background:repeating-linear-gradient(90deg,'+w.bg+" 0 6px,"+w.fg+" 6px 8px) center/100% 3px no-repeat,"+w.bg+'"></i>';return'<div class="tstack"><div class="tchips">'+U+'</div><span class="tlab num">'+I+"\xD7"+(w.v>=1e3?w.v/1e3+"k":w.v)+"</span></div>"}).join("")+"</div>":'<div class="tower empty"><span class="note">Sem fichas</span></div>'}function xs(l){let f=R(l);return f.length?'<div class="felt"><span class="bankpill">Banca</span><div class="seats">'+f.map(m=>{let _=nt(m.id),w=lt(m.id)-_;return'<div class="seat'+(m.id===a.uid?" you":"")+'"><div class="sname"><span class="dot" style="background:'+m.color+'"></span><b>'+W(m.name)+"</b>"+(m.id===a.uid?' <span class="note">(voc\xEA)</span>':"")+"</div>"+(Hd(m.color)?'<span class="rbadge" style="background:'+Hd(m.color).grad+'">'+W(Hd(m.color).name)+"</span>":"")+Cr(w,Me("f_5k",m.id))+'<div class="samt num">'+j(w)+" fichas</div>"+(_?'<div class="note num">'+j(_)+" em jogo</div>":'<div class="note">&nbsp;</div>')+"</div>"}).join("")+"</div></div>":'<div class="felt"><span class="bankpill">Banca</span><p class="note">Ainda n\xE3o se sentou ningu\xE9m.</p></div>'}function Dr(l){let f=l&&l.stats||Mi,m=l&&l.statsBy||{},_=f.returned-f.staked,w='<dl class="stats"><div><dt>Rondas jogadas</dt><dd class="num">'+j(f.rounds)+'</dd></div><div><dt>Total apostado</dt><dd class="num">'+j(f.staked)+'</dd></div><div><dt>Resultado acumulado</dt><dd class="num '+(_>=0?"pos":"neg")+'">'+(_>0?"+":"")+j(_)+'</dd></div><div><dt>Maior pr\xE9mio</dt><dd class="num gold">'+j(f.best)+"</dd></div></dl>",I=Object.keys(Ps).filter(N=>m[N]&&m[N].rounds);return I.length&&(w+='<ul class="bygame">'+I.map(N=>{let U=m[N],L=(U.returned||0)-(U.staked||0);return"<li><b>"+W(Ps[N].label)+'</b><span class="note num">'+j(U.rounds)+" rondas \xB7 "+j(U.staked||0)+' apostado</span><span class="num '+(L>=0?"pos":"neg")+'">'+(L>0?"+":"")+j(L)+"</span></li>"}).join("")+"</ul>"),w}let rn="";function zi(){if(!a.authReady)return"connecting";if(!a.user||a.user.isAnonymous)return"login";if(!a.usersLoaded||!a.tablesLoaded)return"connecting";if(te()==="bank")return c.bsel&&a.tables[c.bsel]?"bankTable:"+c.bsel:"bank";let l=T();return l&&c.inTable?"table:"+l.id:"lobby"}function se(){let l=zi();if(l!==rn){rn=l,c.legs=[],c.mode="bet",c.pick=null;let[_,w]=l.split(":");t.innerHTML=Vr[_](w),Lr(_,w)}let[f,m]=l.split(":");Ur[f]&&Ur[f](m),$i(),Os(),Nr()}let Gi=()=>'<span class="rolelink" data-rolelink></span>';function $i(){let l=F()?te()==="bank"?'<button class="link" data-act="role" data-v="player">Jogar como jogador</button>':'<button class="link" data-act="role" data-v="bank">Ir para a banca</button>':"";document.querySelectorAll("[data-rolelink]").forEach(f=>{f.innerHTML!==l&&(f.innerHTML=l)})}function Nr(){document.querySelectorAll("[data-cd]").forEach(l=>{let f=a.tables[l.dataset.cd],m=f?Ns(f):"";l.textContent!==m&&(l.textContent=m),l.hidden=!m})}setInterval(Nr,500);let Or=()=>Gd.concat(Xa).map(l=>'<button class="chip num'+(l.v>=1e3?" big":"")+'" data-act="chip" data-v="'+l.v+'" id="chip-'+l.v+'" style="background:'+l.bg+";color:"+l.fg+'" aria-label="Ficha de '+l.v+'">'+(l.v>=5e3?"5k":l.v)+"</button>").join(""),xr=l=>'<section class="shop"><div class="shop-h"><span class="shop-eyebrow">Loja</span><h2 class="shop-title">O Mateus Banca</h2><p class="note">'+l+'</p><div class="shop-bal" id="shopBal"></div></div>',oc=()=>'<section class="panel" id="rwAdmin"><h2>Pr\xE9mios reais: pedidos por entregar</h2><div id="rwPending"></div></section><section class="panel"><h2 id="rwFormTitle">Novo pr\xE9mio</h2><form id="rwForm" class="rwform"><label for="rwSection">Sec\xE7\xE3o</label><select class="field" id="rwSection"><option value="iscte">ISCTE (bar e refeit\xF3rio)</option><option value="especial">Especial</option></select><label for="rwTitle">T\xEDtulo</label><input class="field" id="rwTitle" maxlength="40" required placeholder="Ex.: Refei\xE7\xE3o no refeit\xF3rio"><label for="rwDesc">Descri\xE7\xE3o</label><textarea class="field" id="rwDesc" maxlength="160" rows="2" placeholder="Ex.: Prato do dia com sopa e bebida"></textarea><div class="rwrow"><div class="stack-form"><label for="rwPrice">Pre\xE7o em fichas</label><input class="field num" id="rwPrice" type="number" min="1" step="1" inputmode="numeric" required></div><div class="stack-form"><label for="rwStock">Quantidade dispon\xEDvel</label><input class="field num" id="rwStock" type="number" min="0" step="1" inputmode="numeric" placeholder="Vazio = sem limite"></div></div><label class="check"><input type="checkbox" id="rwActive" checked> Vis\xEDvel na loja</label><div class="row-actions"><button class="btn primary" type="submit" id="rwSave">Criar pr\xE9mio</button><button class="btn" type="button" data-act="rwCancelEdit" id="rwCancelEdit" hidden>Cancelar edi\xE7\xE3o</button></div></form></section><section class="panel"><h2>Pr\xE9mios na loja</h2><div id="rwList"></div></section><section class="panel"><h2>Trocas j\xE1 tratadas</h2><div id="rwDone"></div></section>',Vs=l=>'<section class="sec" id="resultSec" hidden><div class="sec-h"><h2>\xDAltima ronda</h2>'+(l?'<button class="btn sm warn" data-act="undo" id="undoBtn">Corrigir: anular esta ronda</button>':"")+'</div><div class="read" id="resHead"></div><div class="res" id="res"></div></section>',Vr={connecting:()=>'<section class="card narrow"><p>A ligar ao sal\xE3o\u2026</p></section>',login:()=>'<section class="card narrow"><h1 class="big">'+W(Za)+'</h1><div class="seg" role="tablist"><button role="tab" data-act="authTab" data-v="login" id="at-login">Entrar</button><button role="tab" data-act="authTab" data-v="new" id="at-new">Criar conta</button></div><form id="authForm" class="stack-form"><label for="aUser">Utilizador</label><input class="field" id="aUser" maxlength="20" required autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Ex.: rita"><label for="aPass">Palavra-passe</label><input class="field" id="aPass" type="password" minlength="6" required autocomplete="current-password"><div id="aPass2Wrap" hidden class="stack-form"><label for="aPass2">Repetir palavra-passe</label><input class="field" id="aPass2" type="password" minlength="6" autocomplete="new-password"></div><button class="btn primary" type="submit" id="aSubmit">Entrar</button></form><p class="note" id="authNote" role="alert"></p><p class="note">A conta fica guardada: entra com ela em qualquer telem\xF3vel e mant\xE9m o saldo e as estat\xEDsticas.</p></section>',lobby:()=>"<header><h1>"+W(Za)+'</h1><div class="hright"><span class="me" id="meBox"></span>'+Gi()+'</div></header><nav class="tabs" role="tablist"><button role="tab" data-act="ltab" data-v="mesas" id="lt-mesas">Mesas</button><button role="tab" data-act="ltab" data-v="loja" id="lt-loja">Loja</button><button role="tab" data-act="ltab" data-v="conta" id="lt-conta">Conta</button><button role="tab" data-act="ltab" data-v="estat" id="lt-estat">Estat\xEDsticas</button></nav><div id="lp-estat" class="tabp" hidden><div id="statsAll"></div></div><div id="lp-mesas" class="tabp"><section class="sec"><div class="sec-h"><h2>Sal\xE3o de jogos</h2><span class="note">S\xF3 pode estar sentado numa mesa de cada vez.</span></div><div class="tgrid" id="tgrid"></div></section></div><div id="lp-loja" class="tabp" hidden>'+xr("Gaste as suas fichas em extras para a conta e pr\xE9mios reais. O que comprar fica para sempre na conta.")+'<div id="shopBody"></div></section></div><div id="lp-conta" class="tabp" hidden><section class="panel"><div class="sec-h"><h2>A minha conta</h2><div class="row-actions"><button class="link" data-act="logout">Sair da conta</button></div></div><div id="statsBox"></div></section></div>',table:l=>{let f=a.tables[l],m=S(f),_=m.multi?'<button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="multi" id="mMulti">M\xFAltipla</button>':'<button class="take" data-act="mode" data-v="take" id="mTake">Retirar</button><button class="take" data-act="mode" data-v="split" id="mSplit">Cavalo</button><button class="take" data-act="mode" data-v="corner" id="mCorner">Quadrado</button><button class="take" data-act="mode" data-v="line" id="mLine">Linha</button>';return'<header><div class="hleft"><button class="link back" data-act="toLobby">\u2190 Sal\xE3o</button><h1>'+W(f.name)+'</h1><span class="note">'+W(m.label)+'</span></div><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span><span class="me" id="meBox"></span></div></header><nav class="tabs" role="tablist"><button role="tab" data-act="ptab" data-v="apostar" id="pt-apostar">Apostar</button><button role="tab" data-act="ptab" data-v="mesa" id="pt-mesa">Mesa</button></nav><div id="pp-mesa" class="tabp" hidden><section class="sec"><div class="sec-h"><h2>Jogadores sentados</h2><span class="note" id="maxNoteP"></span></div><div id="tableView"></div></section></div><div id="pp-apostar" class="tabp"><div class="banner" id="banner"><span id="bannerTxt"></span> <b class="cd" data-cd="'+l+'"></b></div>'+(m.type==="roleta"?'<div class="lastnums" id="lastNums"></div>':"")+m.boardHTML()+'<section class="sec" id="comboSec" hidden><div class="sec-h"><h2>As minhas apostas combinadas</h2></div><ul class="rdlist" id="comboList"></ul></section><section class="sec" id="myMultiSec" hidden><div class="sec-h"><h2>As minhas m\xFAltiplas</h2><span class="note">S\xF3 pagam se todas as sele\xE7\xF5es ganharem</span></div><div class="mlist" id="mlist"></div></section>'+Vs(!1)+'<section class="sec"><div class="sec-h"><h2>Hist\xF3rico da mesa</h2><button class="link" data-act="leave">Sair da mesa</button></div><ul class="hist" id="hist"></ul></section><div class="bar"><div class="bar-in"><div class="slip" id="slip" hidden></div><div class="rpick" id="rpick" hidden></div><div class="tools"><div class="chips" role="group" aria-label="Valor da ficha">'+Or()+'</div></div><div class="tools"><div class="modes">'+_+'<button class="take" data-act="repeat" id="repeatBtn">Repetir</button></div><div class="tot" id="tot"></div></div></div></div></div>'},bank:()=>"<header><h1>"+W(Za)+'</h1><div class="hright"><span class="state on">Banca</span></div></header><nav class="tabs" role="tablist"><button role="tab" data-act="btab" data-v="mesas" id="bt-mesas">Mesas</button><button role="tab" data-act="btab" data-v="jogadores" id="bt-jogadores">Jogadores</button><button role="tab" data-act="btab" data-v="loja" id="bt-loja">Loja</button><button role="tab" data-act="btab" data-v="estat" id="bt-estat">Estat\xEDsticas</button></nav><div id="bp-estat" class="tabp" hidden><div id="statsAll"></div></div><div id="bp-mesas" class="tabp"><section class="panel"><div class="sec-h"><h2>Piloto autom\xE1tico</h2><span class="note" id="dealerNote"></span></div><p class="note">As mesas em modo autom\xE1tico jogam sozinhas enquanto este ecr\xE3 da banca estiver aberto num aparelho de admin: abrem as apostas, contam o tempo, lan\xE7am, animam e liquidam.</p></section><section class="sec"><div class="sec-h"><h2>Mesas</h2><span class="note" id="tablesNote"></span></div><div class="tgrid bankgrid" id="tgrid"></div></section><section class="panel"><h2>Nova mesa</h2><form id="newTable" class="rwform"><div class="rwrow"><div class="stack-form"><label for="ntType">Jogo</label><select class="field" id="ntType"><option value="sicbo">Sic Bo \xB7 5 dados</option><option value="roleta">Roleta europeia</option></select></div><div class="stack-form"><label for="ntName">Nome da mesa</label><input class="field" id="ntName" maxlength="24" required placeholder="Ex.: Roleta do bar"></div></div><label class="check"><input type="checkbox" id="ntAuto"> Come\xE7ar em modo autom\xE1tico</label><div class="row-actions"><button class="btn primary" type="submit">Abrir mesa</button></div></form></section></div><div id="bp-jogadores" class="tabp" hidden><section class="panel"><h2>Convidar jogadores</h2><p class="note">Envie este link. Cada pessoa cria uma conta (utilizador e palavra-passe) e escolhe uma mesa no Sal\xE3o. S\xF3 contas com papel de admin veem a banca.</p><div class="row-actions"><input class="field" id="shareUrl" readonly aria-label="Link do sal\xE3o"><button class="btn sm" data-act="copy">Copiar link</button></div></section><section class="sec"><h2>Saldos das contas</h2><p class="note">O saldo \xE9 da conta e serve para todas as mesas.</p><div id="plist"></div></section><section class="sec"><h2>Contas registadas</h2><div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Utilizador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Maior pr\xE9mio</th><th scope="col">Admin</th></tr></thead><tbody id="ulist"></tbody></table></div></section><section class="panel"><h2>Defini\xE7\xF5es</h2><div class="row-actions"><label class="note" for="initChips">Fichas de boas-vindas (primeira vez que algu\xE9m se senta)</label><input class="field num" id="initChips" type="number" min="0" step="5" inputmode="numeric" style="width:120px"><button class="btn sm" data-act="saveInit">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="resetBal" id="resetBalBtn">Repor o saldo de todas as contas</button>'+Gi()+'</div></section></div><div id="bp-loja" class="tabp" hidden>'+xr("O que os jogadores podem comprar com as suas fichas.")+oc()+'<div id="shopBody"></div></section></div>',bankTable:l=>{let f=a.tables[l],m=S(f);return'<header><div class="hleft"><button class="link back" data-act="bankBack">\u2190 Todas as mesas</button><h1>'+W(f.name)+'</h1><span class="note">'+W(m.label)+'</span></div><div class="hright"><span class="round">Ronda <b id="roundNo" class="num">\u2013</b></span><span class="state" id="state"></span><b class="cd" data-cd="'+l+'"></b></div></header><nav class="tabs" role="tablist"><button role="tab" data-act="dtab" data-v="mesa" id="dt-mesa">Mesa</button><button role="tab" data-act="dtab" data-v="historico" id="dt-historico">Hist\xF3rico</button><button role="tab" data-act="dtab" data-v="definicoes" id="dt-definicoes">Defini\xE7\xF5es</button></nav><div id="dp-mesa" class="tabp"><section class="panel"><div class="sec-h"><h2>Apostas</h2><span class="note" id="betSummary"></span></div><div class="row-actions"><button class="btn" data-act="toggleOpen" id="openBtn"></button><button class="btn" data-act="toggleAuto" id="autoBtn"></button>'+(m.physical?'<div class="seg" role="group" aria-label="Dados"><button data-act="diceMode" data-v="fisico" id="dm-fisico">Dados f\xEDsicos</button><button data-act="diceMode" data-v="virtual" id="dm-virtual">Dados virtuais</button></div>':"")+'</div><div class="who" id="who"></div></section><section class="sec"><h2>Jogadores sentados</h2><div id="tableView"></div></section>'+(m.type==="roleta"?'<div class="lastnums" id="lastNums"></div>':"")+m.boardHTML()+'<section class="sec" id="comboSec" hidden><div class="sec-h"><h2>Apostas combinadas</h2></div><ul class="rdlist" id="comboList"></ul></section><section class="sec" id="allMultiSec" hidden><div class="sec-h"><h2>M\xFAltiplas em jogo</h2></div><div class="mlist" id="mlist"></div></section><section class="panel" id="dados"><div class="sec-h"><h2>'+(m.type==="roleta"?"Roleta":"Resultado dos dados")+'</h2><span class="note" id="diceHint"></span></div>'+(m.physical?'<div id="physical" class="stack-form"><div class="slots" id="slots"></div><div class="pad" id="pad">'+[1,2,3,4,5,6].map(_=>'<button data-act="face" data-v="'+_+'" aria-label="Face '+_+'">'+Ds(_)+"</button>").join("")+'</div><div class="read" id="readout" aria-live="polite"></div><div class="row-actions"><button class="btn primary" data-act="settle" id="settle">Liquidar ronda</button><button class="btn" data-act="clearDice">Limpar dados</button></div></div>':"")+'<div id="virtual" class="stack-form"><button class="btn primary roll" data-act="roll" id="rollBtn">'+W(m.verb)+'</button><p class="note" id="virtNote"></p></div></section>'+Vs(!0)+'</div><div id="dp-historico" class="tabp" hidden><section class="sec"><h2>Hist\xF3rico da mesa</h2><ul class="hist" id="hist"></ul></section></div><div id="dp-definicoes" class="tabp" hidden><section class="panel"><h2>Defini\xE7\xF5es da mesa</h2><div class="row-actions"><label class="note" for="tName">Nome</label><input class="field" id="tName" maxlength="24" style="max-width:220px"><button class="btn sm" data-act="saveName">Guardar</button></div><div class="row-actions"><label class="note" for="maxBet">M\xE1ximo por aposta</label><input class="field num" id="maxBet" type="number" min="0" step="5" inputmode="numeric" placeholder="Sem limite" style="width:130px"><button class="btn sm" data-act="saveMax">Guardar</button><span class="note" id="maxNote"></span></div><div class="row-actions"><label class="note" for="autoSecs">Tempo de apostas no modo autom\xE1tico (segundos)</label><input class="field num" id="autoSecs" type="number" min="10" max="600" step="5" inputmode="numeric" style="width:110px"><button class="btn sm" data-act="saveSecs">Guardar</button></div><div class="row-actions"><button class="btn sm warn" data-act="clearTable" id="clearTableBtn">Esvaziar a mesa (tira todos; os saldos ficam)</button><button class="btn sm warn" data-act="deleteTable" id="deleteTableBtn">Fechar esta mesa</button></div><p class="note">S\xF3 \xE9 poss\xEDvel fechar a mesa quando n\xE3o h\xE1 ningu\xE9m sentado.</p></section></div>'}};function Lr(l,f){if(l==="login"&&D("authForm").addEventListener("submit",async m=>{m.preventDefault();let _=D("aUser").value.trim(),w=D("aPass").value,I=D("authNote");if(I.textContent="",!rI.test(_)){I.textContent="O utilizador deve ter 3 a 20 caracteres: letras, n\xFAmeros, ponto, h\xEDfen ou _ (sem espa\xE7os nem acentos).";return}let N=_.toLowerCase()+Rg;D("aSubmit").disabled=!0;try{if(c.authTab==="new"){if(w!==D("aPass2").value){I.textContent="As palavras-passe n\xE3o s\xE3o iguais.",D("aSubmit").disabled=!1;return}ne=_,await n.createUserWithEmailAndPassword(s,N,w)}else await n.signInWithEmailAndPassword(s,N,w)}catch(U){I.textContent=iI(U),console.error(U)}D("aSubmit")&&(D("aSubmit").disabled=!1)}),l==="bank"&&(D("rwForm").addEventListener("submit",cc),D("newTable").addEventListener("submit",Kr),D("shareUrl").value=location.href.split("#")[0],D("initChips").value=Ct()),l==="bankTable"){let m=a.tables[f];D("tName").value=m.name||"",D("autoSecs").value=pt(m),D("maxBet").value=st(m)||""}}function Fe(l){D("roundNo").textContent=l.round,D("state").className="state "+(l.open?"on":"off"),D("state").textContent=l.open?"Apostas abertas":"Apostas fechadas"}function Ge(l,f,m){let _=S(l),w=m?_.info(m):null,I={};_.type==="roleta"&&f.forEach(N=>{N.kind==="s"&&!_.zoneKeys.includes(N.k)&&(kr(N.k)||[]).forEach(U=>I["n"+U]=!0)}),_.zoneKeys.forEach(N=>{let U=D("z-"+N);if(!U)return;let L={};if(f.filter(G=>G.kind==="s"&&G.k===N).forEach(G=>L[G.uid]=(L[G.uid]||0)+G.a),K(D("st-"+N),Object.entries(L).map(([G,pe])=>'<span class="pill num"><span class="dot" style="background:'+Kn(G)+'"></span>'+j(pe)+"</span>").join("")),U.classList.toggle("sel",c.mode==="multi"&&c.legs.includes(N)||c.pick!==null&&N==="n"+c.pick),U.classList.toggle("has",!!I[N]),U.classList.remove("win","push","dim"),w!=null){let G=_.mult(N,w);U.classList.add(G==null?"dim":G===0?"push":"win")}})}function Wn(l,f,m){let _=S(l);if(_.type!=="roleta"||!D("comboSec"))return;let w=f.filter(U=>U.kind==="s"&&!_.zoneKeys.includes(U.k)),I={};w.forEach(U=>{let L=U.uid+"|"+U.k;(I[L]=I[L]||{uid:U.uid,k:U.k,a:0}).a+=U.a});let N=Object.values(I);D("comboSec").hidden=!N.length,K(D("comboList"),N.map(U=>'<li><span class="rtitle">'+(m?"":'<span class="dot" style="background:'+Kn(U.uid)+'"></span> <b>'+W(wn(U.uid))+"</b> \xB7 ")+W(_.name(U.k))+' <span class="note">('+W(_.pay(U.k))+')</span></span><span class="num">'+j(U.a)+" fichas</span>"+(m&&l.open?'<span class="ractions"><button class="btn sm warn" data-act="unbet" data-k="'+U.k+'">Retirar</button></span>':"")+"</li>").join(""))}function Mr(l,f){let m=l.lastResult,_=S(l);if(D("resultSec").hidden=!m,!m)return;let w=m.res||m.dice||[];D("resHead").innerHTML="Ronda "+m.round+" \xB7 "+_.resSmall(w)+" \xB7 "+W(m.desc)+(m.virtual&&_.physical?' \xB7 <span class="note">dados virtuais</span>':"");let I=f?m.per.filter(N=>N.uid===f):m.per;K(D("res"),I.length?I.map(N=>{let U=N.ret-N.st;return'<div class="rcard"><div class="rhead"><span class="dot" style="background:'+N.color+'"></span>'+W(N.name)+'<span class="net num '+(U>=0?"pos":"neg")+'">'+(U>0?"+":"")+j(U)+'</span></div><ul class="rlines">'+N.lines.map(L=>"<li><span>"+W(L.n)+" \xB7 "+j(L.a)+'</span><span class="num '+(L.v?"":L.pay>0?"pos":"neg")+'">'+(L.v?"anulada: "+W(L.v):L.pay>0?"recebe "+j(L.pay):"perde")+"</span></li>").join("")+"</ul></div>"}).join(""):'<p class="note">'+(f?"N\xE3o apostou nesta ronda.":"Ningu\xE9m apostou nesta ronda.")+"</p>")}function Fr(l){let f=l.history||[],m=S(l);K(D("hist"),f.length?f.map(_=>{let w=_.res||_.dice||[];return'<li><span class="hr">Ronda '+_.round+'</span><span class="hd">'+m.resSmall(w)+'</span><span class="note">'+W(_.desc||(_.sum?"Soma "+_.sum:""))+'</span><span class="hn">'+_.per.map(I=>'<span class="num '+(I.net>=0?"pos":"neg")+'">'+W(I.name)+" "+(I.net>0?"+":"")+j(I.net)+"</span>").join("")+"</span></li>"}).join(""):'<li class="note">As rondas liquidadas aparecem aqui.</li>'),D("lastNums")&&K(D("lastNums"),f.length?'<span class="note">\xDAltimos n\xFAmeros</span>'+f.slice(0,15).map(_=>m.resSmall(_.res||[])).join(""):"")}function Hi(l,f,m){return l.map(_=>{let w=Wd(_.legs);return'<div class="mcard"><div class="mh">'+(f?'<span class="dot" style="background:'+Kn(_.uid)+'"></span>'+W(wn(_.uid)):"M\xFAltipla")+'<span class="num">'+j(_.a)+' fichas</span></div><div class="ml">'+_.legs.map(I=>Ye[I]?W(Cs(Ye[I]))+" ("+W(Ye[I].p)+")":"?").join(" + ")+'</div><div class="mf"><span>Recebe at\xE9 <b class="num gold">'+j(Math.floor(_.a*w.max+1e-9))+"</b></span>"+(m?'<button class="btn sm warn" data-act="cancelMulti" data-id="'+_.id+'">Cancelar</button>':"")+"</div></div>"}).join("")}function bn(l,f){let m=S(l),_=R(l.id),w=b()&&b().table===l.id,N=C(l.id).reduce((G,pe)=>G+pe.a,0),U=l.lastResult?m.resSmall(l.lastResult.res||l.lastResult.dice||[]):'<span class="note">Ainda sem jogadas</span>',L;return f?L='<button class="btn sm primary" data-act="openTable" data-id="'+l.id+'">Gerir</button><button class="btn sm'+(Ne(l)?" on":"")+'" data-act="toggleAuto" data-id="'+l.id+'"'+(m.physical&&l.diceMode!=="virtual"?' disabled title="Ponha os dados em modo virtual"':"")+">"+(Ne(l)?"Auto ligado":"Auto desligado")+"</button>":w?L='<button class="btn sm primary" data-act="enterTable">Voltar \xE0 mesa</button>':b()?L='<button class="btn sm" data-act="sit" data-id="'+l.id+'">Mudar para esta mesa</button>':L='<button class="btn sm primary" data-act="sit" data-id="'+l.id+'">Sentar</button>','<div class="tcard'+(w?" mine":"")+'"><div class="tc-top">'+m.icon()+'<div class="tc-name"><b>'+W(l.name)+'</b><span class="note">'+W(m.label)+" \xB7 ronda "+l.round+'</span></div></div><div class="tc-state"><span class="state '+(l.open?"on":"off")+'">'+(l.open?"Apostas abertas":"A jogar")+'</span><b class="cd" data-cd="'+l.id+'"></b></div><div class="tc-meta"><span>'+_.length+" sentado"+(_.length===1?"":"s")+(_.length?": "+_.slice(0,4).map(G=>'<span class="dot" style="background:'+G.color+'" title="'+W(G.name)+'"></span>').join(""):"")+"</span>"+(f?'<span class="num">'+j(N)+" em jogo</span>":"")+'</div><div class="tc-last"><span class="note">\xDAltimo:</span> '+U+'</div><div class="tc-act">'+L+"</div></div>"}let Ur={login(){D("at-login").setAttribute("aria-selected",String(c.authTab==="login")),D("at-new").setAttribute("aria-selected",String(c.authTab==="new")),D("aPass2Wrap").hidden=c.authTab!=="new",D("aPass2").required=c.authTab==="new",D("aPass").autocomplete=c.authTab==="new"?"new-password":"current-password",D("aSubmit").textContent=c.authTab==="new"?"Criar conta":"Entrar"},lobby(){let l=le();D("meBox").innerHTML=l?'<span class="dot" style="background:'+(l.color||"#999")+'"></span>'+W(l.name)+' \xB7 <b class="num">'+j(ze(a.uid)?lt(a.uid):Ct())+"</b>":"",c.lobbyTab==="estat"&&K(D("statsAll"),Hr()),["mesas","loja","conta","estat"].forEach(m=>{D("lp-"+m).hidden=c.lobbyTab!==m,D("lt-"+m).setAttribute("aria-selected",String(c.lobbyTab===m))});let f=Object.values(a.tables).sort((m,_)=>(m.created||0)-(_.created||0));K(D("tgrid"),f.length?f.map(m=>bn(m,!1)).join(""):'<p class="note">Ainda n\xE3o h\xE1 mesas abertas. Quando a banca abrir uma, aparece aqui.</p>'),qr(),D("statsBox").innerHTML='<p class="note">Utilizador: <b>'+W(l?l.name:"")+'</b> \xB7 Saldo: <b class="num gold">'+j(lt(a.uid))+"</b></p>"+Dr(l)},table(l){let f=a.tables[l],m=b();if(!f||!m)return;let _=S(f);Fe(f);let w=f.open,I=E(a.uid);D("meBox").innerHTML='<span class="dot" style="background:'+m.color+'"></span>'+W(m.name)+' \xB7 <b class="num">'+j(Ce(a.uid))+"</b>",D("banner").className="banner "+(w?"on":"off"),D("bannerTxt").textContent=(w?Ne(f)?"Fa\xE7a as suas apostas.":"Fa\xE7a as suas apostas. A banca fecha as apostas antes de jogar.":"Apostas fechadas. A "+(_.type==="roleta"?"roleta est\xE1 a rodar.":"banca est\xE1 a lan\xE7ar os dados."))+" "+Dt(f)+".",["apostar","mesa"].forEach(G=>{D("pp-"+G).hidden=c.ptab!==G,D("pt-"+G).setAttribute("aria-selected",String(c.ptab===G))}),D("maxNoteP").textContent=Dt(f),K(D("tableView"),xs(l)),D("chip-5000")&&(D("chip-5000").hidden=!Me("f_5k")),c.chip===5e3&&!Me("f_5k")&&(c.chip=25),document.querySelectorAll(".zone,.rz").forEach(G=>G.disabled=!w),Ge(f,I,null),Wn(f,I,!0),document.querySelectorAll(".chip").forEach(G=>G.setAttribute("aria-pressed",String(+G.dataset.v===c.chip))),["take","multi","split","corner","line"].forEach(G=>{let pe=D("m"+G[0].toUpperCase()+G.slice(1));pe&&pe.setAttribute("aria-pressed",String(c.mode===G))});let N=(f.lastBets||[]).filter(G=>G.uid===a.uid);if(D("repeatBtn").disabled=!w||!N.length||I.length>0,D("tot").innerHTML='Em jogo <b class="num">'+j(nt(a.uid))+'</b> \xB7 Dispon\xEDvel <b class="num">'+j(Ce(a.uid))+"</b>",_.multi){let G=I.filter(pe=>pe.kind==="m");D("myMultiSec").hidden=!G.length,K(D("mlist"),Hi(G,!1,w))}else D("myMultiSec").hidden=!0;let U=D("rpick"),L={split:c.pick===null?"Cavalo: toque no primeiro n\xFAmero.":"Cavalo: toque num n\xFAmero ao lado do "+c.pick+".",corner:"Quadrado: toque num n\xFAmero; junta-se com os vizinhos \xE0 direita e em baixo.",line:"Linha: toque numa \u201CRua\u201D; junta essa rua com a de baixo (6 n\xFAmeros)."}[c.mode];U.hidden=!L,U.textContent=L||"",Br(f),Mr(f,a.uid),Fr(f)},bank(){c.btab==="estat"&&K(D("statsAll"),Hr()),["mesas","jogadores","loja","estat"].forEach(f=>{D("bp-"+f).hidden=c.btab!==f,D("bt-"+f).setAttribute("aria-selected",String(c.btab===f))});let l=Object.values(a.tables).sort((f,m)=>(f.created||0)-(m.created||0));K(D("tgrid"),l.length?l.map(f=>bn(f,!0)).join(""):'<p class="note">Ainda n\xE3o h\xE1 mesas. Crie a primeira em \u201CNova mesa\u201D.</p>'),D("tablesNote").textContent=l.length+" mesa"+(l.length===1?"":"s")+" \xB7 "+Object.values(a.players).filter(f=>a.tables[f.table]).length+" jogadores sentados",D("dealerNote").textContent=Gs(),Ki(),qr(),is()},bankTable(l){let f=a.tables[l];if(!f)return;let m=S(f);Fe(f),["mesa","historico","definicoes"].forEach(L=>{D("dp-"+L).hidden=c.dtab!==L,D("dt-"+L).setAttribute("aria-selected",String(c.dtab===L))});let _=f.open,w=!m.physical||f.diceMode==="virtual",I=C(l);D("openBtn").textContent=_?"Fechar apostas":"Reabrir apostas",D("openBtn").className="btn "+(_&&!w?"primary":""),D("openBtn").disabled=Ne(f),D("autoBtn").textContent=Ne(f)?"Modo autom\xE1tico: ligado ("+pt(f)+" s)":"Modo autom\xE1tico: desligado",D("autoBtn").className="btn "+(Ne(f)?"on":""),D("autoBtn").disabled=!w,m.physical&&(D("dm-fisico").setAttribute("aria-pressed",String(!w)),D("dm-virtual").setAttribute("aria-pressed",String(w)));let N=I.reduce((L,G)=>L+G.a,0);if(D("betSummary").textContent=I.length?j(N)+" fichas em "+I.length+" aposta(s)":"Sem apostas nesta ronda",D("maxNote").textContent=st(f)?"Atual: "+j(st(f)):"Atual: sem limite",K(D("tableView"),xs(l)),D("who").innerHTML=R(l).map(L=>{let G=nt(L.id),pe=G>lt(L.id),Re=rc(L.id,f);return'<span class="wchip'+(pe||Re?" over":"")+'"><span class="dot" style="background:'+L.color+'"></span>'+W(L.name)+' <b class="num">'+j(G)+"</b>"+(pe?" \xB7 excede saldo":"")+(Re?" \xB7 acima do m\xE1ximo":"")+"</span>"}).join("")||'<span class="note">Ainda n\xE3o se sentou ningu\xE9m nesta mesa.</span>',document.querySelectorAll(".zone,.rz").forEach(L=>L.disabled=!0),Ge(f,I,!w&&c.dice.length===5?c.dice:null),Wn(f,I,!1),m.multi){let L=I.filter(G=>G.kind==="m");D("allMultiSec").hidden=!L.length,K(D("mlist"),Hi(L,!0,!1))}D("physical")&&(D("physical").hidden=w),D("virtual").hidden=!w,D("diceHint").textContent=w?Ne(f)?"Modo autom\xE1tico":"Modo virtual":"Toque nas faces \xB7 toque num dado para o apagar";let U=!!c.busy[l];if(D("rollBtn").disabled=U||Ne(f),D("rollBtn").textContent=U?m.type==="roleta"?"A rodar\u2026":"A lan\xE7ar\u2026":_?"Fechar apostas e "+m.verb.toLowerCase():m.verb,D("virtNote").textContent=Ne(f)?"O piloto autom\xE1tico joga sozinho a cada "+pt(f)+" segundos. Desligue-o para jogar \xE0 m\xE3o.":"O site gera o resultado ao acaso, mostra a anima\xE7\xE3o a todos e liquida a ronda.",!w){let L="";for(let pe=0;pe<5;pe++){let Re=c.dice[pe];L+='<button class="slot" data-act="slot" data-i="'+pe+'" aria-label="'+(Re?"Dado "+(pe+1)+": "+Re:"Dado "+(pe+1)+" vazio")+'">'+Ds(Re||0)+"</button>"}D("slots").innerHTML=L;let G=c.dice.length===5?Ui(c.dice):null;D("readout").innerHTML=G?"<b>"+W(Dg(G))+"</b>"+(_?" \xB7 feche as apostas antes de liquidar":""):c.dice.length?"Faltam "+(5-c.dice.length)+" dados":"Introduza os 5 dados lan\xE7ados",D("settle").disabled=!G||_||U}Mr(f,null),D("undoBtn").hidden=!f.undo||Ne(f),Fr(f)}};function Ki(){if(!(document.activeElement&&document.activeElement.closest&&document.activeElement.closest("#plist"))){let f=Object.values(a.users).sort((m,_)=>(P(_.id)?1:0)-(P(m.id)?1:0)||(m.name||"").localeCompare(_.name||""));K(D("plist"),f.map(m=>{let _=P(m.id);return'<div class="prow"><div class="nm"><span class="dot" style="background:'+Kn(m.id)+'"></span><b>'+W(m.name)+'</b> <span class="note">'+(_?"("+W(a.tables[_.table].name)+")":"(fora das mesas)")+'</span></div><div class="bal num">'+j(lt(m.id))+(nt(m.id)?'<div class="note">'+j(nt(m.id))+" em jogo</div>":"")+'</div><div class="adj"><input class="field num" id="amt-'+m.id+'" type="number" min="1" inputmode="numeric" placeholder="Qtd." aria-label="Quantidade para '+W(m.name)+'"><button class="btn sm" data-act="give" data-id="'+m.id+'">Dar</button><button class="btn sm" data-act="takeChips" data-id="'+m.id+'">Tirar</button>'+(_?'<button class="btn sm warn" data-act="remove" data-id="'+m.id+'">Tirar da mesa</button>':"")+"</div></div>"}).join("")||'<p class="note">Ainda ningu\xE9m criou conta.</p>')}let l=Object.values(a.users).sort((f,m)=>(f.name||"").localeCompare(m.name||""));K(D("ulist"),l.length?l.map(f=>{let m=f.stats||Mi,_=m.returned-m.staked;return'<tr><td><span class="dot" style="background:'+(f.color||"#999")+'"></span> '+W(f.name)+'</td><td class="num">'+j(m.rounds)+'</td><td class="num">'+j(m.staked)+'</td><td class="num '+(_>=0?"pos":"neg")+'">'+(_>0?"+":"")+j(_)+'</td><td class="num">'+j(m.best)+"</td><td>"+(f.id===a.uid?'<span class="note">Admin (voc\xEA)</span>':'<button class="btn sm'+(f.role==="admin"?" warn":"")+'" data-act="toggleAdmin" data-id="'+f.id+'">'+(f.role==="admin"?"Tirar admin":"Tornar admin")+"</button>")+"</td></tr>"}).join(""):'<tr><td colspan="6" class="note">Ainda ningu\xE9m criou conta.</td></tr>')}function Br(l){let f=D("slip");if(f.hidden=c.mode!=="multi",f.hidden||document.activeElement&&document.activeElement.id==="stake")return;let m=c.legs.length,_='<div class="slip-h"><span><strong>M\xFAltipla</strong> \xB7 '+(m?m+" sele\xE7"+(m>1?"\xF5es":"\xE3o"):"toque nas casas para escolher")+"</span>",w=m?Wd(c.legs):null;w&&(_+="<span>Paga at\xE9 <b>\xD7"+Ig(w.max)+"</b> \xB7 ganha em "+Ig(w.p*100)+"% das jogadas</span>"),_+="</div>",m&&(_+='<div class="legs">'+c.legs.map(I=>'<button class="leg" data-act="leg" data-k="'+I+'" aria-label="Tirar '+W(Cs(Ye[I]))+'">'+W(Cs(Ye[I]))+' <span class="num">'+W(Ye[I].p)+'</span><span class="x" aria-hidden="true">\xD7</span></button>').join("")+"</div>"),_+='<div class="slip-a"><label class="note" for="stake">Aposta</label><input class="field num" id="stake" type="number" min="1" inputmode="numeric" value="'+(c.stake||"")+'" placeholder="Fichas"><span class="note">'+(m>1&&c.stake?'Recebe at\xE9 <b class="num gold">'+j(Math.floor(c.stake*w.max+1e-9))+"</b>":"Toque nas fichas para somar")+'</span><button class="btn sm primary" data-act="placeMulti" '+(m>1&&c.stake>0&&l.open?"":"disabled")+'>Fazer m\xFAltipla</button><button class="btn sm" data-act="clearSlip">Limpar</button></div>',f.innerHTML=_}let In={},Et=null,ft=document.createElement("div");ft.className="reveal",ft.hidden=!0,ft.setAttribute("role","dialog"),ft.setAttribute("aria-modal","true"),ft.setAttribute("aria-label","Resultado"),ft.innerHTML='<div class="rv-box"><div class="rv-table note" id="rvTable"></div><div class="rv-stage" id="rvStage"></div><div class="rv-desc" id="rvDesc" aria-live="polite"></div><div class="rv-label" id="rvLabel"></div><div class="rv-amt num" id="rvAmt"></div><div class="rv-sub" id="rvSub"></div><button class="btn" data-act="closeReveal" id="rvClose">Continuar</button></div>',document.body.appendChild(ft);let Qn=null,Ls=l=>te()==="bank"?c.bsel===l:!!(b()&&b().table===l);function Jn(){Object.values(a.tables).forEach(l=>{let f=In[l.id];if(!f){In[l.id]={round:l.lastResult?l.lastResult.round:0,roll:l.roll?l.roll.id:null};return}l.roll&&l.roll.id!==f.roll&&(f.roll=l.roll.id,Ls(l.id)&&Yn(l,l.roll.res||l.roll.dice,l.roll.round,S(l).animMs));let m=l.lastResult;if(m&&m.round>f.round){if(f.round=m.round,!Ls(l.id)||((!Et||Et.tid!==l.id||Et.round!==m.round)&&Yn(l,m.res||m.dice,m.round,S(l).type==="roleta"?2600:1100),!Et))return;Et.result=m,Bt()}else m&&m.round<f.round?f.round=m.round:m||(f.round=0)})}function Yn(l,f,m,_){if(!f)return;let w=S(l);clearTimeout(Qn),Et={tid:l.id,round:m,result:null,shown:!1},$d()&&(_=0),D("rvTable").textContent=l.name+" \xB7 ronda "+m;let I=D("rvStage");I.innerHTML=w.revealInit(f),D("rvDesc").textContent=_?w.type==="roleta"?"A roleta est\xE1 a rodar\u2026":"A lan\xE7ar os dados\u2026":"",D("rvLabel").textContent="",D("rvAmt").textContent="",D("rvSub").textContent="",D("rvAmt").className="rv-amt num",D("rvClose").hidden=!0,ft.hidden=!1;let N=Et;N.tumble=w.revealRun(I,f,_).then(()=>{D("rvDesc").textContent=w.desc(f),N.tumbled=!0,Bt()})}function Xn(l,f,m,_){return _=_||"",$d()||m<=0?(l.textContent=_+j(f),Promise.resolve()):new Promise(w=>{let I=performance.now(),N=U=>{let L=Math.min(1,(U-I)/m),G=1-Math.pow(1-L,3);l.textContent=_+j(Math.round(f*G)),L<1?requestAnimationFrame(N):w()};requestAnimationFrame(N)})}async function Bt(){let l=Et;if(!l||!l.tumbled||!l.result||l.shown)return;l.shown=!0;let f=l.result,m=D("rvLabel"),_=D("rvAmt"),w=D("rvSub"),I=3500;if(te()==="bank"){let N=f.per.reduce((G,pe)=>G+pe.st,0),U=f.per.reduce((G,pe)=>G+pe.ret,0),L=N-U;m.textContent=L>=0?"A banca ganha":"A banca paga",_.className="rv-amt num "+(L>0?"pos":L<0?"neg":""),await Xn(_,Math.abs(L),1200,L>0?"+":L<0?"\u2212":""),w.textContent=f.per.length?f.per.map(G=>G.name+" "+(G.ret-G.st>0?"+":"")+j(G.ret-G.st)).join(" \xB7 "):"Ningu\xE9m apostou nesta ronda.",I=Ne(a.tables[l.tid])?2500:3500}else{let N=f.per.find(U=>U.uid===a.uid);if(!N)m.textContent="N\xE3o apostou nesta ronda",I=2500;else{let U=N.ret-N.st;U>0?(m.textContent="Ganhou",_.className="rv-amt num pos win",await Xn(_,U,Math.min(2600,900+N.ret/N.st*120),"+"),_.classList.add("pop"),w.textContent="Apostou "+j(N.st)+" \xB7 recebeu "+j(N.ret),I=5e3):U===0?(m.textContent="Ficou igual",_.className="rv-amt num",_.textContent="0",w.textContent="Recebeu de volta o que apostou ("+j(N.st)+")."):(m.textContent="Perdeu",_.className="rv-amt num neg",await Xn(_,-U,900,"\u2212"),w.textContent=N.ret>0?"Ganhou "+j(N.ret)+" em pr\xE9mios, mas tinha apostado "+j(N.st)+".":"Boa sorte na pr\xF3xima ronda.",I=4e3)}}D("rvClose").hidden=!1,clearTimeout(Qn),Qn=setTimeout(Ms,I)}function Ms(){clearTimeout(Qn),ft.hidden=!0,Et=null}let jt={iscte:{name:"ISCTE",sub:"Bar e refeit\xF3rio da faculdade",emb:"ISCTE"},especial:{name:"Especial",sub:"Ofertas que v\xE3o mudando",emb:"\u2605"}},Zn=l=>"#"+String(l).slice(-6).toUpperCase(),on=l=>new Date(l).toLocaleString("pt-PT",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}),jr=l=>l.stock<0?"Sem limite":l.stock===0?"Esgotado":l.stock===1?"Resta 1":"Restam "+j(l.stock),$e={pendente:"Por entregar",entregue:"Entregue",cancelado:"Cancelado"};function Wi(l,f){return Object.values(a.rewards).filter(m=>m.section===l&&(f||m.active)).sort((m,_)=>m.price-_.price||(m.title||"").localeCompare(_.title||""))}function es(){let l=F(),f=Ce(a.uid),m=w=>{let I;return l?I='<span class="note">'+(w.active?"Vis\xEDvel":"Escondido")+" \xB7 gerido pela banca</span>":w.stock===0?I='<span class="owned neg">Esgotado</span>':I='<button class="btn sm primary" data-act="redeem" data-id="'+w.id+'" data-label="Trocar \xB7 '+j(w.price)+'"'+(f>=w.price?"":" disabled")+">Trocar \xB7 "+j(w.price)+"</button>"+(f<w.price?'<span class="note">Faltam '+j(w.price-f)+"</span>":""),'<div class="sitem reward'+(w.stock===0?" locked":"")+'"><div class="remb '+w.section+'" aria-hidden="true">'+W(jt[w.section].emb)+'</div><div class="sinfo"><b>'+W(w.title)+"</b>"+(w.desc?'<span class="note">'+W(w.desc)+"</span>":"")+'<span class="stock num">'+jr(w)+'</span></div><div class="sbuy">'+I+"</div></div>"},_="";if(["iscte","especial"].forEach(w=>{let I=Wi(w,l);_+='<h3 class="shop-sec">'+jt[w].name+' <span class="shop-sub">'+jt[w].sub+"</span></h3>"+(I.length?'<div class="sgrid">'+I.map(m).join("")+"</div>":'<p class="note">'+(l?"Ainda n\xE3o h\xE1 pr\xE9mios nesta sec\xE7\xE3o. Crie um no formul\xE1rio acima.":"Ainda n\xE3o h\xE1 pr\xE9mios nesta sec\xE7\xE3o. Volte mais tarde.")+"</p>")}),!l){let w=a.redemptions.filter(I=>I.uid===a.uid).slice(0,20);_+='<h3 class="shop-sec">As minhas trocas</h3>'+(w.length?'<ul class="rdlist">'+w.map(I=>'<li><span class="rcode num">'+Zn(I.id)+'</span><span class="rtitle">'+W(I.title)+'</span><span class="note num">'+j(I.price)+" fichas \xB7 "+on(I.ts)+'</span><span class="rstat '+I.status+'">'+$e[I.status]+"</span></li>").join("")+'</ul><p class="note">Mostre o c\xF3digo ao Mateus para receber o pr\xE9mio.</p>':'<p class="note">Ainda n\xE3o trocou fichas por pr\xE9mios.</p>')}return _}async function ts(l){let f=a.rewards[l],m=le();if(!f||!m||F())return;if(!ze(a.uid)){X("Sente-se numa mesa primeiro para receber as fichas de boas-vindas.");return}if(!f.active||f.stock===0){X("Este pr\xE9mio j\xE1 n\xE3o est\xE1 dispon\xEDvel.");return}if(Ce(a.uid)<f.price){X("Faltam "+j(f.price-Ce(a.uid))+" fichas.");return}let _="x"+Date.now().toString(36)+Math.random().toString(36).slice(2,8),w=n.writeBatch(r);w.set(n.doc(r,"redemptions",_),{uid:a.uid,name:m.name,rewardId:l,title:f.title,section:f.section,price:f.price,ts:Date.now(),status:"pendente"}),w.update(n.doc(r,"users",a.uid),{balance:lt(a.uid)-f.price,lastRedemption:_}),f.stock>0&&w.update(n.doc(r,"rewards",l),{stock:f.stock-1,lastRedemption:_});try{await w.commit(),X("Pedido feito: "+f.title+" ("+Zn(_)+"). Mostre o c\xF3digo ao Mateus.")}catch(I){v(I)}}let ns=null;function ac(){if(!D("rwPending"))return;let l=a.redemptions.filter(_=>_.status==="pendente");K(D("rwPending"),l.length?'<ul class="rdlist">'+l.map(_=>'<li><span class="rcode num">'+Zn(_.id)+'</span><span class="rtitle"><b>'+W(_.name)+"</b> \xB7 "+W(_.title)+'</span><span class="note num">'+j(_.price)+" fichas \xB7 "+on(_.ts)+'</span><span class="ractions"><button class="btn sm primary" data-act="rdDeliver" data-id="'+_.id+'">Entregue</button><button class="btn sm warn" data-act="rdCancel" data-id="'+_.id+'">Cancelar e devolver</button></span></li>').join("")+"</ul>":'<p class="note">N\xE3o h\xE1 pedidos por entregar.</p>');let f=Object.values(a.rewards).sort((_,w)=>(_.section+_.price).localeCompare(w.section+w.price)||_.price-w.price);K(D("rwList"),f.length?'<ul class="rdlist">'+f.map(_=>'<li><span class="rcode">'+W(jt[_.section]?jt[_.section].name:_.section)+'</span><span class="rtitle"><b>'+W(_.title)+"</b>"+(_.active?"":' <span class="note">(escondido)</span>')+'</span><span class="note num">'+j(_.price)+" fichas \xB7 "+jr(_)+'</span><span class="ractions"><button class="btn sm" data-act="rwEdit" data-id="'+_.id+'">Editar</button><button class="btn sm" data-act="rwToggle" data-id="'+_.id+'">'+(_.active?"Esconder":"Mostrar")+'</button><button class="btn sm warn" data-act="rwDelete" data-id="'+_.id+'">Apagar</button></span></li>').join("")+"</ul>":'<p class="note">Ainda n\xE3o criou pr\xE9mios.</p>');let m=a.redemptions.filter(_=>_.status!=="pendente").slice(0,20);K(D("rwDone"),m.length?'<ul class="rdlist">'+m.map(_=>'<li><span class="rcode num">'+Zn(_.id)+'</span><span class="rtitle"><b>'+W(_.name)+"</b> \xB7 "+W(_.title)+'</span><span class="note num">'+j(_.price)+" fichas \xB7 "+on(_.ts)+'</span><span class="rstat '+_.status+'">'+$e[_.status]+"</span></li>").join("")+"</ul>":'<p class="note">Ainda n\xE3o h\xE1 trocas tratadas.</p>')}function Nt(l){ns=l?l.id:null,D("rwFormTitle").textContent=l?"Editar pr\xE9mio":"Novo pr\xE9mio",D("rwSave").textContent=l?"Guardar altera\xE7\xF5es":"Criar pr\xE9mio",D("rwCancelEdit").hidden=!l,D("rwSection").value=l?l.section:"iscte",D("rwTitle").value=l?l.title:"",D("rwDesc").value=l&&l.desc||"",D("rwPrice").value=l?l.price:"",D("rwStock").value=l&&l.stock>=0?l.stock:"",D("rwActive").checked=l?!!l.active:!0}async function cc(l){l.preventDefault();let f=D("rwTitle").value.trim(),m=Math.floor(+D("rwPrice").value);if(!f||!(m>0)){X("Escreva o t\xEDtulo e um pre\xE7o maior que 0.");return}let _=D("rwStock").value.trim(),w=_===""?-1:Math.max(0,Math.floor(+_)),I={section:D("rwSection").value,title:f,desc:D("rwDesc").value.trim(),price:m,stock:w,active:D("rwActive").checked,updated:Date.now()},N=ns||"w"+Date.now().toString(36)+Math.random().toString(36).slice(2,6);try{ns?await n.updateDoc(n.doc(r,"rewards",N),I):await n.setDoc(n.doc(r,"rewards",N),{...I,created:Date.now()}),X(ns?"Pr\xE9mio atualizado":"Pr\xE9mio criado"),Nt(null)}catch(U){v(U)}}async function uc(l){try{await n.updateDoc(n.doc(r,"redemptions",l),{status:"entregue",doneAt:Date.now()}),X("Marcado como entregue")}catch(f){v(f)}}async function Fs(l){let f=a.redemptions.find(w=>w.id===l);if(!f)return;let m=n.writeBatch(r);m.update(n.doc(r,"redemptions",l),{status:"cancelado",doneAt:Date.now()}),a.users[f.uid]&&m.update(n.doc(r,"users",f.uid),{balance:i(f.price)});let _=a.rewards[f.rewardId];_&&_.stock>=0&&m.update(n.doc(r,"rewards",_.id),{stock:i(1)});try{await m.commit(),X("Cancelado: devolvidas "+j(f.price)+" fichas a "+f.name)}catch(w){v(w)}}function qr(){D("shopBody")&&(D("shopBal").innerHTML=F()?"<b>Conta admin:</b> tem todos os itens desbloqueados.":ze(a.uid)?'Dispon\xEDvel: <b class="num">'+j(Ce(a.uid))+"</b> fichas":"Sente-se numa mesa para receber as "+j(Ct())+" fichas de boas-vindas.",K(D("shopBody"),zr()),F()&&ac())}function zr(){let l=le()||{},f=Ce(a.uid),m=l.theme&&Me(l.theme)?l.theme:"classico",_=(re,He,rt)=>{if(Me(re.id))return rt?He?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="'+re.id+'">Usar</button>':'<span class="owned">J\xE1 \xE9 seu</span>';let zt=ze(a.uid)&&f>=re.price;return'<button class="btn sm primary" data-act="buy" data-id="'+re.id+'" data-label="Comprar \xB7 '+j(re.price)+'"'+(zt?"":" disabled")+">Comprar \xB7 "+j(re.price)+"</button>"+(ze(a.uid)&&f<re.price?'<span class="note">Faltam '+j(re.price-f)+"</span>":"")},w=re=>'<div class="swatch" aria-hidden="true" style="background:'+re[0]+";border-color:"+re[1]+'"><span style="background:'+re[1]+'"></span><span style="background:'+re[2]+'"></span><span class="mini-chip" style="background:'+re[1]+'"></span></div>',I=re=>'<div class="sitem'+(m===re.id?" on":"")+'">'+w(re.sw)+'<div class="sinfo"><b>'+W(re.name)+'</b><span class="note">'+W(re.desc)+'</span></div><div class="sbuy">'+_(re,m===re.id,!0)+"</div></div>",N='<div class="sitem'+(m==="classico"?" on":"")+'">'+w(["#145236","#E8C46A","#F4ECD2"])+'<div class="sinfo"><b>Cl\xE1ssico</b><span class="note">O feltro verde original. Gr\xE1tis.</span></div><div class="sbuy">'+(m==="classico"?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="classico">Usar</button>')+"</div></div>",U=l.color,L=(re,He)=>{let rt=!Me(re.id)&&re.prev&&!Me(re.prev);return'<div class="sitem rank'+(U===re.hex?" on":"")+(rt?" locked":"")+'"><div class="medal" aria-hidden="true" style="background:'+re.grad+'"><span>'+(He+1)+'</span></div><div class="sinfo"><b>'+W(re.name)+'</b><span class="note">'+(rt?"Precisa de "+W(vn[re.prev].name)+" primeiro.":"Ranking "+(He+1)+" de "+tc.length+". A sua cor e ins\xEDgnia na mesa.")+'</span></div><div class="sbuy">'+(rt?'<span class="note">Bloqueado \xB7 '+j(re.price)+"</span>":_(re,U===re.hex,!0))+"</div></div>"},pe=!tc.map(re=>re.hex).includes(U),Re='<div class="sitem'+(pe?" on":"")+'"><div class="cdot" aria-hidden="true" style="background:'+(pe&&U?U:Rr[0])+'"></div><div class="sinfo"><b>Cor da casa</b><span class="note">Uma das cores normais da mesa. Gr\xE1tis.</span></div><div class="sbuy">'+(pe?'<span class="owned">Em uso</span>':'<button class="btn sm" data-act="equip" data-id="normal">Usar</button>')+"</div></div>",Ue=vn.f_5k,At='<div class="sitem'+(Me("f_5k")?" on":"")+'"><div class="bigchip" aria-hidden="true" style="background:'+Xa.bg+";color:"+Xa.fg+'">5k</div><div class="sinfo"><b>'+W(Ue.name)+'</b><span class="note">'+W(Ue.desc)+'</span></div><div class="sbuy">'+_(Ue,!1,!1)+"</div></div>";return es()+'<h3 class="shop-sec">Temas da mesa</h3><div class="sgrid">'+N+Yd.filter(re=>re.kind==="theme").map(I).join("")+'</div><h3 class="shop-sec">Rankings de jogador</h3><p class="note">Cada ranking d\xE1-lhe uma cor e uma ins\xEDgnia na mesa. Sobe-se por ordem: Bronze, Prata, Ouro, Platina, Diamante, Rubi e Esmeralda.</p><div class="sgrid">'+Re+tc.map(L).join("")+'</div><h3 class="shop-sec">Fichas</h3><div class="sgrid">'+At+'</div><p class="note soon">Brevemente: mais novidades no balc\xE3o d\u2019O Mateus Banca.</p>'}async function Us(l){let f=vn[l],m=le();if(!(!f||!m||Me(l))){if(!ze(a.uid)){X("Sente-se numa mesa primeiro para receber as fichas de boas-vindas.");return}if(f.prev&&!Me(f.prev)){X("Precisa de "+vn[f.prev].name+" primeiro.");return}if(Ce(a.uid)<f.price){X("Faltam "+j(f.price-Ce(a.uid))+" fichas.");return}try{await n.updateDoc(n.doc(r,"users",a.uid),{owned:De(a.uid).concat(l),balance:lt(a.uid)-f.price}),X("Comprou "+f.name+"!"),f.kind!=="chip"&&(a.users[a.uid]={...a.users[a.uid],owned:De(a.uid).concat(l)},Ot(l))}catch(_){v(_)}}}async function Ot(l){if(!le())return;if(l==="classico"||vn[l]&&vn[l].kind==="theme"){if(l!=="classico"&&!Me(l))return;try{await n.updateDoc(n.doc(r,"users",a.uid),{theme:l})}catch(w){v(w)}return}let m;if(l==="normal"){let w=Object.values(a.players).filter(I=>I.id!==a.uid).map(I=>I.color);m=Rr.find(I=>!w.includes(I))||Rr[0]}else vn[l]&&vn[l].kind==="rank"&&Me(l)&&(m=vn[l].hex);if(!m)return;let _=n.writeBatch(r);_.update(n.doc(r,"users",a.uid),{color:m}),a.players[a.uid]&&_.update(n.doc(r,"players",a.uid),{color:m});try{await _.commit()}catch(w){v(w)}}async function Qi(l){let f=le(),m=a.tables[l];if(!f||!m)return;let _=b();if(_&&_.table===l){c.inTable=!0,se();return}if(_&&E(a.uid).length){X("Retire as suas apostas na mesa atual antes de mudar de mesa.");return}let w=R(l).map(U=>U.color),I=w.includes(f.color)&&Rr.find(U=>!w.includes(U))||f.color,N=n.writeBatch(r);a.players[a.uid]?N.update(n.doc(r,"players",a.uid),{table:l,joined:Date.now()}):N.set(n.doc(r,"players",a.uid),{name:f.name,color:I,joined:Date.now(),table:l}),ze(a.uid)||N.update(n.doc(r,"users",a.uid),{balance:Ct()});try{await N.commit(),c.inTable=!0,c.ptab="apostar",window.scrollTo(0,0)}catch(U){v(U)}}async function Ji(){if(b()){if(E(a.uid).length){X("Retire as suas apostas desta ronda antes de sair da mesa.");return}try{await n.deleteDoc(n.doc(r,"players",a.uid)),c.inTable=!1,X("Saiu da mesa. O seu saldo fica na conta.")}catch(l){v(l)}}}async function ss(l,f){try{return await n.addDoc(d.bets,{uid:a.uid,table:l.id,round:l.round,ts:Date.now(),...f}),!0}catch(m){return v(m),!1}}async function En(l,f){let m=S(l);if(!m.valid(f))return;if(Ce(a.uid)<c.chip){X("N\xE3o tem fichas suficientes (dispon\xEDvel: "+j(Ce(a.uid))+")");return}let _=st(l),w=qi(a.uid,f);if(_&&w+c.chip>_){X("M\xE1ximo por aposta: "+j(_)+". Em "+m.name(f)+" j\xE1 tem "+j(w)+".");return}await ss(l,{kind:"s",k:f,a:c.chip})}async function Gr(l){let f=E(a.uid).filter(m=>m.kind==="s"&&m.k===l);if(!f.length){X("N\xE3o tem fichas nesta casa");return}try{await n.deleteDoc(n.doc(r,"bets",f[f.length-1].id))}catch(m){v(m)}}async function Yi(l){let f=T();if(te()!=="player"||!f||!f.open)return;let m=S(f);if(c.mode==="multi"){let _=c.legs.indexOf(l);if(_>=0){c.legs.splice(_,1),se();return}if(c.legs.length>=6){X("M\xE1ximo de 6 sele\xE7\xF5es por m\xFAltipla");return}let w=c.legs.concat(l);if(w.length>1){let I=zd(w);if(I){X(Cs(Ye[l])+": "+I.charAt(0).toLowerCase()+I.slice(1));return}}c.legs=w,se();return}if(c.mode==="take"){Gr(l);return}if(m.type==="roleta"){let _=/^n(\d+)$/.exec(l),w=/^t(\d+)$/.exec(l);if(c.mode==="split"){if(!_){X("No modo Cavalo toque em dois n\xFAmeros vizinhos.");return}let I=+_[1];if(c.pick===null){c.pick=I,se();return}if(c.pick===I){c.pick=null,se();return}let N=Math.min(c.pick,I),U=Math.max(c.pick,I),L="s"+N+"_"+U;if(!kr(L)){c.pick=I,se(),X("Esses n\xFAmeros n\xE3o s\xE3o vizinhos. Escolha um n\xFAmero ao lado do "+I+".");return}c.pick=null,se(),await En(f,L);return}if(c.mode==="corner"){if(!_||+_[1]==0){X("No modo Quadrado toque num n\xFAmero de 1 a 36.");return}let I=+_[1],N=(I-1)%3,U=Math.floor((I-1)/3),L=(U===11?10:U)*3+(N===2?1:N)+1;await En(f,"q"+L);return}if(c.mode==="line"){let I=w?+w[1]:_&&+_[1]>0?Math.ceil(+_[1]/3):0;if(!I){X("No modo Linha toque numa \u201CRua\u201D.");return}I===12&&(I=11),await En(f,"l"+I);return}}await En(f,l)}async function lc(){let l=T();if(!l)return;let f=Math.floor(c.stake||0),m=zd(c.legs);if(m){X(m);return}if(f>0){if(Ce(a.uid)<f){X("S\xF3 tem "+j(Ce(a.uid))+" fichas dispon\xEDveis");return}if(st(l)&&f>st(l)){X("M\xE1ximo por aposta: "+j(st(l))+" fichas");return}await ss(l,{kind:"m",legs:c.legs.slice(),a:f})&&(c.legs=[],c.stake=0,X("M\xFAltipla de "+j(f)+" fichas registada"),se())}}async function Bs(){let l=T();if(!l)return;let f=(l.lastBets||[]).filter(N=>N.uid===a.uid),m=Ce(a.uid),_=0,w=st(l),I={};for(let N of f){if(N.a>m){_++;continue}if(w&&(N.kind==="m"?N.a>w:(I[N.k]||0)+N.a>w)){_++;continue}N.kind!=="m"&&(I[N.k]=(I[N.k]||0)+N.a),m-=N.a,await ss(l,N.kind==="m"?{kind:"m",legs:N.legs,a:N.a}:{kind:"s",k:N.k,a:N.a})}_&&X(_+" aposta(s) ficaram de fora (fichas insuficientes ou acima do m\xE1ximo)")}let $r={big:"Grande",small:"Pequeno",penta:"Penta",red:"Vermelho",black:"Preto",zero:"Zero"};function js(l,f,m){let _={},w=(L,G)=>_[L]=(_[L]||0)+(G||1),I;if(l.type==="roleta"){let L=f[0],G=Jd(L);w("n"+L),w("total"),I=G==="g"?"zero":G==="r"?"red":"black",w(I),L&&(w(L%2?"odd":"even"),w(L<=18?"low":"high"))}else{let L=Ui(f);f.forEach(G=>w("f"+G)),w("total"),w("s"+L.sum),I=L.penta?"penta":L.sum>=18?"big":"small",w(I)}let N=m&&m.k===I?m.len+1:1,U=m&&m.max>=N?{max:m.max,maxK:m.maxK}:{max:N,maxK:I};return{distInc:_,streak:{k:I,len:N,...U}}}function rs(l){let f={},m=null;return(l.history||[]).slice().reverse().forEach(_=>{let w=_.res||_.dice;if(!w||!w.length)return;let I=js(l,w,m);m=I.streak,Object.entries(I.distInc).forEach(([N,U])=>f[N]=(f[N]||0)+U)}),{dist:f,streak:m}}let Se=l=>(isFinite(l)?l.toLocaleString("pt-PT",{maximumFractionDigits:1}):"0")+" %",Ze=(l,f)=>f?l/f*100:0;function mt(l,f,m,_,w){let I=Ze(f,m);return'<div class="pbar"><div class="pb-h"><span>'+l+'</span><span class="num">'+Se(I)+' <span class="note">('+j(f)+")</span>"+(_!=null?' <span class="note">\xB7 te\xF3rico '+Se(_)+"</span>":"")+'</span></div><div class="pb-track" title="'+W(String(l).replace(/<[^>]+>/g,""))+": "+j(f)+" de "+j(m)+" ("+Se(I)+')"><span class="pb-fill" style="width:'+Math.min(100,I).toFixed(2)+"%"+(w?";background:"+w:"")+'"></span>'+(_!=null?'<span class="pb-theo" style="left:'+_.toFixed(2)+'%" aria-hidden="true"></span>':"")+"</div></div>"}let xt=(l,f,m,_)=>'<div class="stile"><span class="st-l">'+l+'</span><span class="st-v num '+(m||"")+'">'+f+"</span>"+(_?'<span class="note">'+_+"</span>":"")+"</div>",qs=l=>(l>0?"+":l<0?"\u2212":"")+j(Math.abs(l));function Hr(){let l=Object.values(a.users),f=(Q,ie)=>Q.reduce((ye,Pe)=>ye+(ie(Pe)||0),0),m=Q=>Q.stats||Mi,_=f(l,Q=>m(Q).staked),w=f(l,Q=>m(Q).returned),I=f(l,Q=>m(Q).wins),N=f(l,Q=>m(Q).losses),U=f(l,Q=>m(Q).evens),L=_-w,G=Object.values(a.tables),pe=G.reduce((Q,ie)=>Q+Math.max(0,(ie.round||1)-1),0),Re='<section class="sec"><div class="sec-h"><h2>Banca</h2><span class="note">Todo o hist\xF3rico das contas \xB7 atualiza a cada ronda</span></div><div class="hero"><span class="st-l">Resultado da banca</span><span class="hero-v num '+(L>=0?"pos":"neg")+'">'+qs(L)+'</span><span class="note">'+(L>=0?"A banca est\xE1 a ganhar":"A banca est\xE1 a perder")+" \xB7 margem "+Se(Ze(L,_))+' do que foi apostado</span></div><div class="stiles">'+xt("Apostado pelos jogadores",j(_))+xt("Pago aos jogadores",j(w))+xt("Margem da banca",Se(Ze(L,_)),L>=0?"pos":"neg")+xt("Rondas nas mesas",j(pe))+"</div>";if(_>0){let Q=Math.min(100,Ze(w,_));Re+='<div class="split" role="img" aria-label="Por cada 100 fichas apostadas, '+Se(Ze(w,_))+' voltaram aos jogadores"><span class="sp-a" style="width:'+Q.toFixed(2)+'%"></span><span class="sp-b" style="width:'+(100-Q).toFixed(2)+'%"></span></div><div class="split-l"><span><i class="sw a"></i>Voltou aos jogadores '+Se(Ze(w,_))+'</span><span><i class="sw b"></i>Ficou na banca '+Se(Math.max(0,Ze(L,_)))+"</span></div>"}let Ue=Object.keys(Ps).map(Q=>{let ie=l.reduce((ye,Pe)=>{let q=(Pe.statsBy||{})[Q]||{};return ye.st+=q.staked||0,ye.ret+=q.returned||0,ye.r+=q.rounds||0,ye},{st:0,ret:0,r:0});return{g:Q,...ie}}).filter(Q=>Q.st>0);Ue.length&&(Re+='<div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Jogo</th><th scope="col">Apostado</th><th scope="col">Pago</th><th scope="col">Banca</th><th scope="col">Margem</th></tr></thead><tbody>'+Ue.map(Q=>"<tr><td>"+W(Ps[Q.g].label)+'</td><td class="num">'+j(Q.st)+'</td><td class="num">'+j(Q.ret)+'</td><td class="num '+(Q.st-Q.ret>=0?"pos":"neg")+'">'+qs(Q.st-Q.ret)+'</td><td class="num">'+Se(Ze(Q.st-Q.ret,Q.st))+"</td></tr>").join("")+'</tbody></table></div><p class="note">Por jogo conta a partir da vers\xE3o com v\xE1rias mesas.</p>'),Re+="</section>";let At=l.filter(Q=>m(Q).rounds>0),re=At.filter(Q=>m(Q).returned>m(Q).staked).length,He=I+N+U;Re+='<section class="sec"><h2>Jogadores em geral</h2><div class="stiles">'+xt("Jogadores que j\xE1 jogaram",j(At.length))+xt("Em lucro",j(re)+" de "+j(At.length),"",Se(Ze(re,At.length))+" dos jogadores")+xt("Retorno m\xE9dio",Se(Ze(w,_)),"","por cada 100 apostadas")+xt("Rondas ganhas",He?Se(Ze(I,He)):"\u2014","",He?j(I)+" de "+j(He)+" rondas":"conta a partir desta vers\xE3o")+"</div></section>";let rt=At.slice().sort((Q,ie)=>m(ie).returned-m(ie).staked-(m(Q).returned-m(Q).staked));Re+='<section class="sec"><h2>Por jogador</h2>'+(rt.length?'<div class="table-wrap"><table class="ustats"><thead><tr><th scope="col">Jogador</th><th scope="col">Rondas</th><th scope="col">Apostado</th><th scope="col">Resultado</th><th scope="col">Retorno</th><th scope="col">Ganhas</th></tr></thead><tbody>'+rt.map(Q=>{let ie=m(Q),ye=ie.returned-ie.staked,Pe=(ie.wins||0)+(ie.losses||0)+(ie.evens||0);return"<tr"+(Q.id===a.uid?' class="me-row"':"")+'><td><span class="dot" style="background:'+Kn(Q.id)+'"></span> '+W(Q.name)+(Q.id===a.uid?' <span class="note">(voc\xEA)</span>':"")+'</td><td class="num">'+j(ie.rounds)+'</td><td class="num">'+j(ie.staked)+'</td><td class="num '+(ye>=0?"pos":"neg")+'">'+qs(ye)+'</td><td class="num">'+Se(Ze(ie.returned,ie.staked))+'</td><td class="num">'+(Pe?Se(Ze(ie.wins||0,Pe)):"\u2014")+"</td></tr>"}).join("")+'</tbody></table></div><p class="note">Retorno: quanto voltou por cada 100 fichas apostadas. Ganhas: rondas em que recebeu mais do que apostou (conta a partir desta vers\xE3o).</p>':'<p class="note">Ainda ningu\xE9m jogou.</p>')+"</section>";let zt=G.sort((Q,ie)=>(Q.created||0)-(ie.created||0)).map(Q=>{let ie=Q.dist||{},ye=ie.total||0,Pe=Q.streak,q="";if(!ye)q='<p class="note">Ainda sem rondas registadas.</p>';else if(Q.type==="roleta"){let ve=[];for(let me=0;me<=36;me++)ve.push({i:me,c:ie["n"+me]||0});let Be=ve.slice().sort((me,et)=>et.c-me.c||me.i-et.i).slice(0,3),gt=ve.slice().sort((me,et)=>me.c-et.c||me.i-et.i).slice(0,3);q=mt("Vermelho",ie.red||0,ye,18/37*100,"#C62828")+mt("Preto",ie.black||0,ye,18/37*100,"#5A5A5A")+mt("Zero",ie.zero||0,ye,1/37*100,"#1E8E4E")+mt("Par",ie.even||0,ye,18/37*100)+mt("\xCDmpar",ie.odd||0,ye,18/37*100)+mt("1\u201318",ie.low||0,ye,18/37*100)+mt("19\u201336",ie.high||0,ye,18/37*100)+'<div class="hotcold"><span class="note">Mais sa\xEDdos</span>'+Be.map(me=>sc(me.i,"sm")+'<span class="note num">\xD7'+me.c+"</span>").join("")+'</div><div class="hotcold"><span class="note">Menos sa\xEDdos</span>'+gt.map(me=>sc(me.i,"sm")+'<span class="note num">\xD7'+me.c+"</span>").join("")+"</div>"}else{let ve=49.961419753086425,Be=6/7776*100;q=mt("Grande (18\u201330)",ie.big||0,ye,ve)+mt("Pequeno (5\u201317)",ie.small||0,ye,ve)+mt("Penta",ie.penta||0,ye,Be)+'<h3 class="mini-h">Faces dos dados</h3>'+[1,2,3,4,5,6].map(gt=>mt(Ds(gt,"sm"),ie["f"+gt]||0,ye*5,100/6)).join("")}let de=Pe?'<div class="streaks"><span>Agora: <b>'+Pe.len+"\xD7 "+W($r[Pe.k]||Pe.k)+"</b> seguido"+(Pe.len>1?"s":"")+"</span><span>Maior sequ\xEAncia: <b>"+Pe.max+"\xD7 "+W($r[Pe.maxK]||Pe.maxK)+"</b></span></div>":"";return'<div class="scard"><div class="sc-h">'+S(Q).icon()+'<div class="tc-name"><b>'+W(Q.name)+'</b><span class="note">'+W(S(Q).label)+" \xB7 baseado em "+j(ye)+" ronda"+(ye===1?"":"s")+"</span></div></div>"+de+q+"</div>"});return Re+='<section class="sec"><div class="sec-h"><h2>Resultados por mesa</h2><span class="note">A linha fina em cada barra \xE9 o valor te\xF3rico</span></div>'+(zt.length?'<div class="sgrid stgrid">'+zt.join("")+"</div>":'<p class="note">Ainda n\xE3o h\xE1 mesas.</p>')+"</section>",Re}let zs=(l,f,m)=>({type:l,name:f,round:1,open:!0,maxBet:0,diceMode:l==="sicbo"?"virtual":null,roll:null,lastResult:null,history:[],lastBets:[],undo:null,auto:{on:!1,secs:Fi},nextAt:0,dist:{},streak:null,created:Date.now(),...m||{}});async function Kr(l){l.preventDefault();let f=D("ntType").value,m=D("ntName").value.trim()||Ps[f].label,_=f+"-"+Date.now().toString(36),w=D("ntAuto").checked;try{await n.setDoc(p(_),Li(zs(f,m,w?{auto:{on:!0,secs:Fi},nextAt:Date.now()+Fi*1e3}:{}))),a.config||await n.setDoc(d.config,{initial:1e3}),D("ntName").value="",D("ntAuto").checked=!1,X("Mesa \u201C"+m+"\u201D aberta")}catch(I){v(I)}}async function Wr(l,f,m){let _=a.tables[l];if(!_||_.open)return!1;let w=S(_),I=w.info(f),N=C(l),U={},L={},G={};R(l).forEach(q=>{G[q.id]=lt(q.id),L[q.id]=0});let pe=[],Re=st(_),Ue={};N.forEach(q=>{let de=a.players[q.uid];if(!de||de.table!==l||!(q.uid in G))return;let ve=U[de.id]||(U[de.id]={uid:de.id,name:de.name,color:de.color,st:0,ret:0,best:0,lines:[]}),Be=q.kind==="m",gt=Be?"M\xFAltipla: "+(q.legs||[]).map(St=>Ye[St]?Cs(Ye[St]):"?").join(" + "):w.name(q.k),me=Math.floor(q.a),et=null;if(me>0?(Be?!w.multi||zd(q.legs):!w.valid(q.k))?et="aposta inv\xE1lida":Re&&(Be?me>Re:(Ue[de.id+"|"+q.k]||0)+me>Re)?et="acima do m\xE1ximo":me>G[de.id]&&(et="sem saldo"):et="valor inv\xE1lido",et){ve.lines.push({n:gt,a:q.a,pay:0,v:et});return}G[de.id]-=me,Be||(Ue[de.id+"|"+q.k]=(Ue[de.id+"|"+q.k]||0)+me);let Pn=Be?Math.floor(me*Ng(q.legs,I)+1e-9):Qb(me,w.mult(q.k,I));ve.st+=me,ve.ret+=Pn,L[de.id]+=Pn-me,Pn>ve.best&&(ve.best=Pn),ve.lines.push({n:gt,a:me,pay:Pn}),pe.push(Be?{uid:q.uid,kind:"m",legs:q.legs,a:me}:{uid:q.uid,kind:"s",k:q.k,a:me})});let At=Object.values(U).map(({best:q,...de})=>de),re=n.writeBatch(r),He={},rt={},{distInc:zt,streak:Q}=js(_,f,_.streak||null);Object.keys(L).forEach(q=>{if(!a.users[q])return;let de={},ve=U[q];if(ze(q)?L[q]!==0&&(de.balance=i(L[q])):de.balance=lt(q)+L[q],(L[q]!==0||!ze(q))&&(rt[q]=L[q]),ve&&ve.st>0){let Be=a.users[q];He[q]={stats:{...Mi,...Be.stats||{}},by:Be.statsBy&&Be.statsBy[_.type]||null},de["stats.rounds"]=i(1),de["stats.staked"]=i(ve.st),de["stats.returned"]=i(ve.ret),ve.best>(Be.stats&&Be.stats.best||0)&&(de["stats.best"]=ve.best),de["statsBy."+_.type+".rounds"]=i(1),de["statsBy."+_.type+".staked"]=i(ve.st),de["statsBy."+_.type+".returned"]=i(ve.ret);let gt=ve.ret>ve.st?"wins":ve.ret<ve.st?"losses":"evens";de["stats."+gt]=i(1),de["statsBy."+_.type+"."+gt]=i(1)}Object.keys(de).length&&re.update(n.doc(r,"users",q),de)});let ie=a.bets.filter(q=>q.table===l);ie.forEach(q=>re.delete(n.doc(r,"bets",q.id)));let ye=w.desc(f),Pe=Li({round:_.round+1,open:!0,streak:Q,nextAt:Ne(_)?Date.now()+pt(_)*1e3:0,lastResult:{round:_.round,res:f.slice(),desc:ye,per:At,virtual:!!m},history:[{round:_.round,res:f.slice(),desc:ye,per:At.map(q=>({name:q.name,net:q.ret-q.st}))}].concat(_.history||[]).slice(0,30),lastBets:pe,undo:{round:_.round,res:f.slice(),virtual:!!m,delta:rt,stats:He,distInc:zt,streak:_.streak||null,bets:ie.map(q=>{let{id:de,...ve}=q;return{id:de,d:ve}}),lastResult:_.lastResult||null,lastBets:_.lastBets||[]}});Object.entries(zt).forEach(([q,de])=>Pe["dist."+q]=i(de)),re.update(p(l),Pe);try{return await re.commit(),!0}catch(q){return v(q),!1}}async function Xi(l){c.busy[l]||(c.busy[l]=!0,se(),await Wr(l,c.dice.slice(),!1)&&(c.dice=[]),c.busy[l]=!1,se())}async function Zi(l){let f=a.tables[l];if(!(!f||c.busy[l])){c.busy[l]=!0,se();try{let m=S(f);f.open&&(await n.updateDoc(p(l),{open:!1}),await nc(1200));let _=a.tables[l],w=m.roll(),I=Date.now().toString(36)+Math.random().toString(36).slice(2,6);In[l]&&(In[l].roll=I),await n.updateDoc(p(l),{open:!1,roll:{id:I,round:_.round,res:w}}),Ls(l)?(Yn(_,w,_.round,m.animMs),await Et.tumble):await nc($d()?0:m.animMs),await Wr(l,w,!0)}catch(m){v(m)}c.busy[l]=!1,se()}}async function dc(l){let f=a.tables[l],m=f&&f.undo;if(!m)return;let _=n.writeBatch(r);Object.keys(a.users).forEach(I=>{let N={};m.delta&&I in m.delta&&m.delta[I]!==0&&(N.balance=i(-m.delta[I])),m.stats&&m.stats[I]&&(N.stats=m.stats[I].stats,m.stats[I].by?N["statsBy."+f.type]=m.stats[I].by:N["statsBy."+f.type]={rounds:0,staked:0,returned:0}),Object.keys(N).length&&_.update(n.doc(r,"users",I),N)}),a.bets.filter(I=>I.table===l).forEach(I=>_.delete(n.doc(r,"bets",I.id))),m.bets.forEach(I=>_.set(n.doc(r,"bets",I.id),I.d));let w=Li({round:m.round,open:!1,roll:null,lastResult:m.lastResult,lastBets:m.lastBets,history:(f.history||[]).slice(1),undo:null,streak:m.streak||null});Object.entries(m.distInc||{}).forEach(([I,N])=>w["dist."+I]=i(-N)),_.update(p(l),w);try{await _.commit(),m.virtual||(c.dice=(m.res||m.dice||[]).slice()),X(m.virtual?"Ronda anulada. As apostas voltaram; pode jogar de novo.":"Ronda anulada. Corrija os dados e liquide de novo."),se()}catch(I){v(I)}}async function eo(l){let f=a.tables[l];if(!f)return;if(S(f).physical&&f.diceMode!=="virtual"){X("Ponha a mesa em dados virtuais para usar o modo autom\xE1tico.");return}let m=!Ne(f);try{await n.updateDoc(p(l),{auto:{on:m,secs:pt(f)},nextAt:m?Date.now()+pt(f)*1e3:0,open:m?!0:f.open}),X(f.name+": modo autom\xE1tico "+(m?"ligado":"desligado"))}catch(_){v(_)}}async function to(l){let f=a.tables[l];if(!f)return;let m=n.writeBatch(r);R(l).forEach(_=>m.delete(n.doc(r,"players",_.id))),a.bets.filter(_=>_.table===l).forEach(_=>m.delete(n.doc(r,"bets",_.id))),m.update(p(l),{round:1,open:!0,roll:null,lastResult:null,history:[],lastBets:[],undo:null,nextAt:Ne(f)?Date.now()+pt(f)*1e3:0});try{await m.commit(),c.dice=[],X("Mesa esvaziada. Os saldos ficaram nas contas.")}catch(_){v(_)}}async function hc(l){if(R(l).length){X("Ainda h\xE1 jogadores sentados. Esvazie a mesa primeiro.");return}let f=n.writeBatch(r);a.bets.filter(m=>m.table===l).forEach(m=>f.delete(n.doc(r,"bets",m.id))),f.delete(p(l));try{await f.commit(),c.bsel=null,X("Mesa fechada")}catch(m){v(m)}}async function an(){if(a.bets.length){X("Liquide ou limpe as apostas em jogo antes de repor os saldos.");return}let l=n.writeBatch(r),f=Ct();Object.keys(a.users).forEach(m=>l.update(n.doc(r,"users",m),{balance:f}));try{await l.commit(),X("Todas as contas ficaram com "+j(f)+" fichas.")}catch(m){v(m)}}let Tt=2e4;function Gs(){let l=Object.values(a.tables).filter(Ne);if(!l.length)return"Nenhuma mesa em modo autom\xE1tico.";let f=a.dealer,m=Date.now();return f&&f.device===Kd&&f.until>m?"A conduzir "+l.length+" mesa(s) a partir deste aparelho.":f&&f.until>m?"Conduzido noutro aparelho ("+(f.name||"admin")+").":"A assumir a condu\xE7\xE3o\u2026"}let Tn=!1;async function no(){let l=a.dealer,f=Date.now(),m=l&&l.device===Kd&&l.until>f;if(Tn)return m;if(m&&l.until-f>Tt/2)return!0;if(!m&&l&&l.until>f)return!1;Tn=!0;try{await n.setDoc(d.dealer,{device:Kd,uid:a.uid,name:(le()||{}).name||"admin",until:f+Tt})}catch(_){console.error(_)}return Tn=!1,!1}async function be(){if(!F()||te()!=="bank"||!a.tablesLoaded)return;let l=Object.values(a.tables).filter(Ne);if(!l.length||!await no())return;let f=Date.now();for(let m of l)if(!c.busy[m.id]){if(!m.open){if(f>(m.nextAt||0)+45e3)try{await n.updateDoc(p(m.id),{open:!0,nextAt:f+pt(m)*1e3})}catch(_){console.error(_)}continue}if(!m.nextAt){try{await n.updateDoc(p(m.id),{nextAt:f+pt(m)*1e3})}catch(_){console.error(_)}continue}if(!(f<m.nextAt)){if(!R(m.id).length){try{await n.updateDoc(p(m.id),{nextAt:f+pt(m)*1e3})}catch(_){console.error(_)}continue}Zi(m.id)}}}setInterval(()=>{be()},1e3);let An=!1,Sn=!1;async function is(){if(An||!F()||!a.usersLoaded||!a.tablesLoaded)return;let l=Object.values(a.players).filter(I=>typeof I.chips=="number"&&a.users[I.id]&&!ze(I.id));if(!Object.keys(a.tables).length&&!Sn){Sn=!0;try{let I=await n.getDoc(d.legacy);a.legacy=I.exists()?I.data():null}catch{a.legacy=null}}let f=!Object.keys(a.tables).length&&a.legacy,m=Object.values(a.players).filter(I=>!I.table),_=Object.values(a.tables).filter(I=>I.dist===void 0);if(!l.length&&!f&&!_.length&&!(m.length&&(f||a.tables["sicbo-1"])))return;An=!0;let w=n.writeBatch(r);if(l.forEach(I=>w.update(n.doc(r,"users",I.id),{balance:I.chips})),f){let I=a.legacy;w.set(p("sicbo-1"),Li(zs("sicbo","Sic Bo",{round:I.round||1,maxBet:I.maxBet||0,diceMode:I.diceMode||"fisico",history:(I.history||[]).map(N=>({round:N.round,res:N.dice||[],desc:N.sum?"Soma "+N.sum:"",per:N.per||[]})),created:I.created||Date.now()}))),a.config||w.set(d.config,{initial:typeof I.initial=="number"?I.initial:1e3}),a.bets.forEach(N=>w.delete(n.doc(r,"bets",N.id)))}(f||a.tables["sicbo-1"])&&m.forEach(I=>w.update(n.doc(r,"players",I.id),{table:"sicbo-1"})),_.forEach(I=>{let N=rs(I);w.update(p(I.id),Li({dist:N.dist,streak:N.streak}))});try{await w.commit(),f&&X("A mesa antiga passou para o Sal\xE3o como \u201CSic Bo\u201D.")}catch(I){v(I)}An=!1}let qt=null;function Rn(l,f){return qt===l?!1:(qt&&(qt.textContent=qt.dataset.label),qt=l,l.dataset.label=l.dataset.label||l.textContent,l.textContent=f||"Confirmar",setTimeout(()=>{qt===l&&(l.textContent=l.dataset.label,qt=null)},4e3),!0)}function os(l){qt=null,l.textContent=l.dataset.label,["shopBody","rwPending","rwList","plist","ulist"].forEach(f=>{D(f)&&(D(f)._last=null)})}document.addEventListener("click",async l=>{let f=l.target.closest("[data-act]");if(!f)return;let m=f.dataset.act,_=c.bsel;switch(m){case"role":a.role=f.dataset.v,Tg.set("sicbo5-role",a.role),c.bsel=null,rn="",se(),window.scrollTo(0,0);break;case"authTab":c.authTab=f.dataset.v,D("authNote").textContent="",se();break;case"logout":try{await n.signOut(s)}catch(w){v(w)}break;case"ltab":c.lobbyTab=f.dataset.v,se();break;case"ptab":c.ptab=f.dataset.v,c.mode="bet",c.legs=[],c.pick=null,se(),window.scrollTo(0,0);break;case"btab":c.btab=f.dataset.v,se();break;case"dtab":c.dtab=f.dataset.v,se();break;case"toLobby":c.inTable=!1,se(),window.scrollTo(0,0);break;case"enterTable":c.inTable=!0,se(),window.scrollTo(0,0);break;case"sit":Qi(f.dataset.id);break;case"leave":Ji();break;case"zone":Yi(f.dataset.k);break;case"unbet":Gr(f.dataset.k);break;case"chip":c.chip=+f.dataset.v,c.mode==="multi"&&(c.stake=(c.stake||0)+c.chip),se();break;case"mode":c.mode=c.mode===f.dataset.v?"bet":f.dataset.v,c.pick=null,se();break;case"leg":c.legs=c.legs.filter(w=>w!==f.dataset.k),se();break;case"clearSlip":c.legs=[],c.stake=0,se();break;case"placeMulti":lc();break;case"repeat":Bs();break;case"cancelMulti":try{await n.deleteDoc(n.doc(r,"bets",f.dataset.id)),X("M\xFAltipla cancelada")}catch(w){v(w)}break;case"closeReveal":Ms();break;case"openTable":c.bsel=f.dataset.id,c.dtab="mesa",c.dice=[],se(),window.scrollTo(0,0);break;case"bankBack":c.bsel=null,se(),window.scrollTo(0,0);break;case"toggleAuto":eo(f.dataset.id||_);break;case"toggleOpen":try{await n.updateDoc(p(_),{open:!a.tables[_].open})}catch(w){v(w)}break;case"diceMode":{let w=a.tables[_];if(w&&w.diceMode!==f.dataset.v)try{await n.updateDoc(p(_),{diceMode:f.dataset.v,...f.dataset.v==="fisico"?{auto:{on:!1,secs:pt(w)}}:{}})}catch(I){v(I)}break}case"roll":Zi(_);break;case"face":c.dice.length<5&&(c.dice.push(+f.dataset.v),se());break;case"slot":{let w=+f.dataset.i;c.dice[w]&&(c.dice.splice(w,1),se());break}case"clearDice":c.dice=[],se();break;case"settle":Xi(_);break;case"undo":dc(_);break;case"saveName":{let w=D("tName").value.trim();if(!w)return;try{await n.updateDoc(p(_),{name:w.slice(0,24)}),X("Nome guardado"),rn="",se()}catch(I){v(I)}break}case"saveMax":{let w=Math.max(0,Math.floor(+D("maxBet").value||0));try{await n.updateDoc(p(_),{maxBet:w}),X(w?"M\xE1ximo por aposta: "+j(w)+" fichas":"Sem m\xE1ximo por aposta")}catch(I){v(I)}break}case"saveSecs":{let w=a.tables[_],I=Math.max(10,Math.min(600,Math.floor(+D("autoSecs").value||Fi)));try{await n.updateDoc(p(_),{auto:{on:Ne(w),secs:I}}),X("Tempo de apostas: "+I+" segundos")}catch(N){v(N)}break}case"clearTable":case"deleteTable":if(Rn(f))return;os(f),m==="clearTable"?to(_):hc(_);break;case"copy":{let w=D("shareUrl");try{await navigator.clipboard.writeText(w.value),X("Link copiado")}catch{w.select(),X("Selecionei o link: copie-o")}break}case"saveInit":{let w=Math.max(0,Math.floor(+D("initChips").value||0));try{await n.setDoc(d.config,{initial:w},{merge:!0}),X("Quem se sentar pela primeira vez recebe "+j(w)+" fichas")}catch(I){v(I)}break}case"give":case"takeChips":{let w=a.users[f.dataset.id];if(!w)return;let I=D("amt-"+w.id),N=Math.floor(+I.value);if(!(N>0)){X("Escreva a quantidade de fichas"),I.focus();return}if(m==="takeChips"&&N>lt(w.id)){X(w.name+" s\xF3 tem "+j(lt(w.id))+" fichas");return}try{await n.updateDoc(n.doc(r,"users",w.id),{balance:ze(w.id)?i(m==="give"?N:-N):lt(w.id)+(m==="give"?N:-N)}),I.value="",I.blur(),X((m==="give"?"Dadas ":"Tiradas ")+j(N)+" fichas a "+w.name)}catch(U){v(U)}break}case"toggleAdmin":{let w=a.users[f.dataset.id];if(!w||w.id===a.uid||Rn(f))return;os(f);let I=w.role!=="admin";try{await n.updateDoc(n.doc(r,"users",w.id),{role:I?"admin":"player"}),X(w.name+(I?" passou a ter acesso \xE0 banca":" deixou de ter acesso \xE0 banca"))}catch(N){v(N)}break}case"remove":case"resetBal":if(Rn(f))return;if(os(f),m==="resetBal")an();else{let w=f.dataset.id,I=n.writeBatch(r);I.delete(n.doc(r,"players",w)),a.bets.filter(N=>N.uid===w).forEach(N=>I.delete(n.doc(r,"bets",N.id)));try{await I.commit(),X("Saiu da mesa. O saldo fica na conta.")}catch(N){v(N)}}break;case"buy":if(Rn(f,"Confirmar compra"))return;os(f),Us(f.dataset.id);break;case"equip":Ot(f.dataset.id);break;case"redeem":case"rdCancel":case"rwDelete":if(Rn(f,m==="redeem"?"Confirmar troca":"Confirmar"))return;if(os(f),m==="redeem")ts(f.dataset.id);else if(m==="rdCancel")Fs(f.dataset.id);else try{await n.deleteDoc(n.doc(r,"rewards",f.dataset.id)),X("Pr\xE9mio apagado"),ns===f.dataset.id&&Nt(null)}catch(w){v(w)}break;case"rdDeliver":uc(f.dataset.id);break;case"rwEdit":Nt(a.rewards[f.dataset.id]),D("rwForm").scrollIntoView({behavior:"smooth",block:"start"});break;case"rwCancelEdit":Nt(null);break;case"rwToggle":{let w=a.rewards[f.dataset.id];if(w)try{await n.updateDoc(n.doc(r,"rewards",w.id),{active:!w.active})}catch(I){v(I)}break}}}),document.addEventListener("keydown",l=>{l.key==="Escape"&&!ft.hidden&&Ms()}),document.addEventListener("input",l=>{l.target.id==="stake"&&(c.stake=Math.max(0,Math.floor(+l.target.value||0)))}),document.addEventListener("change",l=>{l.target.id==="stake"&&(l.target.blur(),se())}),se()}Vg(jd);
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
