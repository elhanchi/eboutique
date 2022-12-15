import{A as Bi}from"./AddArticleUI.19fa33d6.js";import{d as Mi,c as xi,a as ji,b as Ui,o as $i}from"./index.c72122e9.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fi=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],h=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,h=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,g=r>>2,_=(r&3)<<4|h>>4;let N=(h&15)<<2|u>>6,R=u&63;c||(R=64,o||(N=64)),i.push(n[g],n[_],n[N],n[R])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(In(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],h=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||h==null||u==null||_==null)throw Error();const N=r<<2|h>>4;if(i.push(N),u!==64){const R=h<<4&240|u>>2;if(i.push(R),_!==64){const V=u<<6&192|_;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hi=function(t){const e=In(t);return Tn.encodeByteArray(e,!0)},Tt=function(t){return Hi(t).replace(/\./g,"")},Vi=function(t){try{return Tn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function zi(){return typeof indexedDB=="object"}function Xi(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function Gi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ki=()=>Gi().__FIREBASE_DEFAULTS__,Wi=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vi(t[1]);return e&&JSON.parse(e)},An=()=>{try{return Ki()||Wi()||qi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yi=t=>{var e,n;return(n=(e=An())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ji=t=>{const e=Yi(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Qi=()=>{var t;return(t=An())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function ts(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),h="";return[Tt(JSON.stringify(n)),Tt(JSON.stringify(o)),h].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirebaseError";class W extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=es,Object.setPrototypeOf(this,W.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ns(r,i):"Error",h=`${this.serviceName}: ${o} (${s}).`;return new W(s,h,i)}}function ns(t,e){return t.replace(is,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const is=/\{\$([^}]+)}/g;function oe(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Je(r)&&Je(o)){if(!oe(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Je(t){return t!==null&&typeof t=="object"}class nt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const j="[DEFAULT]";/**
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
 */class ss{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Zi;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(os(e))try{this.getOrInitializeService({instanceIdentifier:j})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=j){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=j){return this.instances.has(e)}getOptions(e=j){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(r);i===h&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rs(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=j){return this.component?this.component.multipleInstances?e:j:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rs(t){return t===j?void 0:t}function os(t){return t.instantiationMode==="EAGER"}/**
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
 */class hs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ss(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const as={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},cs=d.INFO,ls={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},us=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ls[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bn{constructor(e){this.name=e,this._logLevel=cs,this._logHandler=us,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?as[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}const fs=(t,e)=>e.some(n=>t instanceof n);let Qe,Ze;function ds(){return Qe||(Qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ps(){return Ze||(Ze=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dn=new WeakMap,he=new WeakMap,Cn=new WeakMap,Wt=new WeakMap,Ae=new WeakMap;function gs(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(P(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dn.set(n,t)}).catch(()=>{}),Ae.set(e,t),e}function ms(t){if(he.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});he.set(t,e)}let ae={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return he.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return P(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ys(t){ae=t(ae)}function vs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(qt(this),e,...n);return Cn.set(i,e.sort?e.sort():[e]),P(i)}:ps().includes(t)?function(...e){return t.apply(qt(this),e),P(Dn.get(this))}:function(...e){return P(t.apply(qt(this),e))}}function Es(t){return typeof t=="function"?vs(t):(t instanceof IDBTransaction&&ms(t),fs(t,ds())?new Proxy(t,ae):t)}function P(t){if(t instanceof IDBRequest)return gs(t);if(Wt.has(t))return Wt.get(t);const e=Es(t);return e!==t&&(Wt.set(t,e),Ae.set(e,t)),e}const qt=t=>Ae.get(t);function ws(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),h=P(o);return i&&o.addEventListener("upgradeneeded",c=>{i(P(o.result),c.oldVersion,c.newVersion,P(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),h.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),h}const Is=["get","getKey","getAll","getAllKeys","count"],Ts=["put","add","delete","clear"],Yt=new Map;function tn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yt.get(e))return Yt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ts.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Is.includes(n)))return;const r=async function(o,...h){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(h.shift())),(await Promise.all([u[n](...h),s&&c.done]))[0]};return Yt.set(e,r),r}ys(t=>({...t,get:(e,n,i)=>tn(e,n)||t.get(e,n,i),has:(e,n)=>!!tn(e,n)||t.has(e,n)}));/**
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
 */class As{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_s(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function _s(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ce="@firebase/app",en="0.8.3";/**
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
 */const H=new bn("@firebase/app"),bs="@firebase/app-compat",Ds="@firebase/analytics-compat",Cs="@firebase/analytics",Ss="@firebase/app-check-compat",Rs="@firebase/app-check",Os="@firebase/auth",Ns="@firebase/auth-compat",Ls="@firebase/database",ks="@firebase/database-compat",Ps="@firebase/functions",Bs="@firebase/functions-compat",Ms="@firebase/installations",xs="@firebase/installations-compat",js="@firebase/messaging",Us="@firebase/messaging-compat",$s="@firebase/performance",Fs="@firebase/performance-compat",Hs="@firebase/remote-config",Vs="@firebase/remote-config-compat",zs="@firebase/storage",Xs="@firebase/storage-compat",Gs="@firebase/firestore",Ks="@firebase/firestore-compat",Ws="firebase",qs="9.13.0";/**
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
 */const le="[DEFAULT]",Ys={[ce]:"fire-core",[bs]:"fire-core-compat",[Cs]:"fire-analytics",[Ds]:"fire-analytics-compat",[Rs]:"fire-app-check",[Ss]:"fire-app-check-compat",[Os]:"fire-auth",[Ns]:"fire-auth-compat",[Ls]:"fire-rtdb",[ks]:"fire-rtdb-compat",[Ps]:"fire-fn",[Bs]:"fire-fn-compat",[Ms]:"fire-iid",[xs]:"fire-iid-compat",[js]:"fire-fcm",[Us]:"fire-fcm-compat",[$s]:"fire-perf",[Fs]:"fire-perf-compat",[Hs]:"fire-rc",[Vs]:"fire-rc-compat",[zs]:"fire-gcs",[Xs]:"fire-gcs-compat",[Gs]:"fire-fst",[Ks]:"fire-fst-compat","fire-js":"fire-js",[Ws]:"fire-js-all"};/**
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
 */const At=new Map,ue=new Map;function Js(t,e){try{t.container.addComponent(e)}catch(n){H.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _t(t){const e=t.name;if(ue.has(e))return H.debug(`There were multiple attempts to register component ${e}.`),!1;ue.set(e,t);for(const n of At.values())Js(n,t);return!0}function Qs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Zs={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},B=new _n("app","Firebase",Zs);/**
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
 */class tr{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}/**
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
 */const er=qs;function Sn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:le,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw B.create("bad-app-name",{appName:String(s)});if(n||(n=Qi()),!n)throw B.create("no-options");const r=At.get(s);if(r){if(oe(n,r.options)&&oe(i,r.config))return r;throw B.create("duplicate-app",{appName:s})}const o=new hs(s);for(const c of ue.values())o.addComponent(c);const h=new tr(n,i,o);return At.set(s,h),h}function nr(t=le){const e=At.get(t);if(!e&&t===le)return Sn();if(!e)throw B.create("no-app",{appName:t});return e}function X(t,e,n){var i;let s=(i=Ys[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const h=[`Unable to register library "${s}" with version "${e}":`];r&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&h.push("and"),o&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),H.warn(h.join(" "));return}_t(new nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ir="firebase-heartbeat-database",sr=1,it="firebase-heartbeat-store";let Jt=null;function Rn(){return Jt||(Jt=ws(ir,sr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(it)}}}).catch(t=>{throw B.create("idb-open",{originalErrorMessage:t.message})})),Jt}async function rr(t){var e;try{return(await Rn()).transaction(it).objectStore(it).get(On(t))}catch(n){if(n instanceof W)H.warn(n.message);else{const i=B.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});H.warn(i.message)}}}async function nn(t,e){var n;try{const s=(await Rn()).transaction(it,"readwrite");return await s.objectStore(it).put(e,On(t)),s.done}catch(i){if(i instanceof W)H.warn(i.message);else{const s=B.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});H.warn(s.message)}}}function On(t){return`${t.name}!${t.options.appId}`}/**
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
 */const or=1024,hr=30*24*60*60*1e3;class ar{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lr(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=hr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sn(),{heartbeatsToSend:n,unsentEntries:i}=cr(this._heartbeatsCache.heartbeats),s=Tt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sn(){return new Date().toISOString().substring(0,10)}function cr(t,e=or){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),rn(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class lr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zi()?Xi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return nn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return nn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rn(t){return Tt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ur(t){_t(new nt("platform-logger",e=>new As(e),"PRIVATE")),_t(new nt("heartbeat",e=>new ar(e),"PRIVATE")),X(ce,en,t),X(ce,en,"esm2017"),X("fire-js","")}ur("");var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a,_e=_e||{},l=fr||self;function bt(){}function kt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dr(t){return Object.prototype.hasOwnProperty.call(t,Qt)&&t[Qt]||(t[Qt]=++pr)}var Qt="closure_uid_"+(1e9*Math.random()>>>0),pr=0;function gr(t,e,n){return t.call.apply(t.bind,arguments)}function mr(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function I(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I=gr:I=mr,I.apply(null,arguments)}function Et(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),h=2;h<arguments.length;h++)o[h-2]=arguments[h];return e.prototype[s].apply(i,o)}}function M(){this.s=this.s,this.o=this.o}var yr=0;M.prototype.s=!1;M.prototype.na=function(){!this.s&&(this.s=!0,this.M(),yr!=0)&&dr(this)};M.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function be(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function on(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(kt(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function T(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var vr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{l.addEventListener("test",bt,e),l.removeEventListener("test",bt,e)}catch{}return t}();function Dt(t){return/^[\s\xa0]*$/.test(t)}var hn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Zt(t,e){return t<e?-1:t>e?1:0}function Pt(){var t=l.navigator;return t&&(t=t.userAgent)?t:""}function O(t){return Pt().indexOf(t)!=-1}function De(t){return De[" "](t),t}De[" "]=bt;function Er(t){var e=Tr;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var wr=O("Opera"),st=O("Trident")||O("MSIE"),Ln=O("Edge"),fe=Ln||st,kn=O("Gecko")&&!(Pt().toLowerCase().indexOf("webkit")!=-1&&!O("Edge"))&&!(O("Trident")||O("MSIE"))&&!O("Edge"),Ir=Pt().toLowerCase().indexOf("webkit")!=-1&&!O("Edge");function Pn(){var t=l.document;return t?t.documentMode:void 0}var de;t:{var te="",ee=function(){var t=Pt();if(kn)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ln)return/Edge\/([\d\.]+)/.exec(t);if(st)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ir)return/WebKit\/(\S+)/.exec(t);if(wr)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ee&&(te=ee?ee[1]:""),st){var ne=Pn();if(ne!=null&&ne>parseFloat(te)){de=String(ne);break t}}de=te}var Tr={};function Ar(){return Er(function(){let t=0;const e=hn(String(de)).split("."),n=hn("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Zt(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Zt(s[2].length==0,r[2].length==0)||Zt(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}l.document&&st&&Pn();function rt(t,e){if(T.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kn){t:{try{De(e.nodeName);var s=!0;break t}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_r[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.X.h.call(this)}}E(rt,T);var _r={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),br=0;function Dr(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++br,this.ba=this.ea=!1}function Bt(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ce(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Bn(t){const e={};for(const n in t)e[n]=t[n];return e}const an="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<an.length;r++)n=an[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Mt(t){this.src=t,this.g={},this.h=0}Mt.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ge(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Dr(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function pe(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Nn(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Bt(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ge(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Se="closure_lm_"+(1e6*Math.random()|0),ie={};function xn(t,e,n,i,s){if(i&&i.once)return Un(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)xn(t,e[r],n,i,s);return null}return n=Ne(n),t&&t[ut]?t.N(e,n,lt(i)?!!i.capture:!!i,s):jn(t,e,n,!1,i,s)}function jn(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=lt(s)?!!s.capture:!!s,h=Oe(t);if(h||(t[Se]=h=new Mt(t)),n=h.add(e,n,i,o,r),n.proxy)return n;if(i=Cr(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)vr||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Fn(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Cr(){function t(n){return e.call(t.src,t.listener,n)}const e=Sr;return t}function Un(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Un(t,e[r],n,i,s);return null}return n=Ne(n),t&&t[ut]?t.O(e,n,lt(i)?!!i.capture:!!i,s):jn(t,e,n,!0,i,s)}function $n(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)$n(t,e[r],n,i,s);else i=lt(i)?!!i.capture:!!i,n=Ne(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ge(r,n,i,s),-1<n&&(Bt(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Oe(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ge(e,n,i,s)),(n=-1<t?e[t]:null)&&Re(n))}function Re(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ut])pe(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Fn(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Oe(e))?(pe(n,t),n.h==0&&(n.src=null,e[Se]=null)):Bt(t)}}}function Fn(t){return t in ie?ie[t]:ie[t]="on"+t}function Sr(t,e){if(t.ba)t=!0;else{e=new rt(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Re(t),t=n.call(i,e)}return t}function Oe(t){return t=t[Se],t instanceof Mt?t:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ne(t){return typeof t=="function"?t:(t[se]||(t[se]=function(e){return t.handleEvent(e)}),t[se])}function y(){M.call(this),this.i=new Mt(this),this.P=this,this.I=null}E(y,M);y.prototype[ut]=!0;y.prototype.removeEventListener=function(t,e,n,i){$n(this,t,e,n,i)};function v(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new T(e,t);else if(e instanceof T)e.target=e.target||t;else{var s=e;e=new T(i,t),Mn(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=wt(o,i,!0,e)&&s}if(o=e.g=t,s=wt(o,i,!0,e)&&s,s=wt(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=wt(o,i,!1,e)&&s}y.prototype.M=function(){if(y.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Bt(n[i]);delete t.g[e],t.h--}}this.I=null};y.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};y.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function wt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var h=o.listener,c=o.ha||o.src;o.ea&&pe(t.i,o),s=h.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var Le=l.JSON.stringify;function Rr(){var t=zn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Or{constructor(){this.h=this.g=null}add(e,n){const i=Hn.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Hn=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Nr,t=>t.reset());class Nr{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Lr(t){l.setTimeout(()=>{throw t},0)}function Vn(t,e){me||kr(),ye||(me(),ye=!0),zn.add(t,e)}var me;function kr(){var t=l.Promise.resolve(void 0);me=function(){t.then(Pr)}}var ye=!1,zn=new Or;function Pr(){for(var t;t=Rr();){try{t.h.call(t.g)}catch(n){Lr(n)}var e=Hn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ye=!1}function xt(t,e){y.call(this),this.h=t||1,this.g=e||l,this.j=I(this.lb,this),this.l=Date.now()}E(xt,y);a=xt.prototype;a.ca=!1;a.R=null;a.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),v(this,"tick"),this.ca&&(ke(this),this.start()))}};a.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ke(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}a.M=function(){xt.X.M.call(this),ke(this),delete this.g};function Pe(t,e,n){if(typeof t=="function")n&&(t=I(t,n));else if(t&&typeof t.handleEvent=="function")t=I(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:l.setTimeout(t,e||0)}function Xn(t){t.g=Pe(()=>{t.g=null,t.i&&(t.i=!1,Xn(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Br extends M{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xn(this)}M(){super.M(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){M.call(this),this.h=t,this.g={}}E(ot,M);var cn=[];function Gn(t,e,n,i){Array.isArray(n)||(n&&(cn[0]=n.toString()),n=cn);for(var s=0;s<n.length;s++){var r=xn(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Kn(t){Ce(t.g,function(e,n){this.g.hasOwnProperty(n)&&Re(e)},t),t.g={}}ot.prototype.M=function(){ot.X.M.call(this),Kn(this)};ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jt(){this.g=!0}jt.prototype.Aa=function(){this.g=!1};function Mr(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",h=r.split("&"),c=0;c<h.length;c++){var u=h[c].split("=");if(1<u.length){var g=u[0];u=u[1];var _=g.split("_");o=2<=_.length&&_[1]=="type"?o+(g+"="+u+"&"):o+(g+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function xr(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function z(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ur(t,n)+(i?" "+i:"")})}function jr(t,e){t.info(function(){return"TIMEOUT: "+e})}jt.prototype.info=function(){};function Ur(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Le(n)}catch{return e}}var q={},ln=null;function Be(){return ln=ln||new y}q.Pa="serverreachability";function Wn(t){T.call(this,q.Pa,t)}E(Wn,T);function ht(t){const e=Be();v(e,new Wn(e))}q.STAT_EVENT="statevent";function qn(t,e){T.call(this,q.STAT_EVENT,t),this.stat=e}E(qn,T);function A(t){const e=Be();v(e,new qn(e,t))}q.Qa="timingevent";function Yn(t,e){T.call(this,q.Qa,t),this.size=e}E(Yn,T);function ft(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){t()},e)}var Me={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},$r={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xe(){}xe.prototype.h=null;function un(t){return t.h||(t.h=t.i())}function Fr(){}var dt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function je(){T.call(this,"d")}E(je,T);function Ue(){T.call(this,"c")}E(Ue,T);var ve;function Ut(){}E(Ut,xe);Ut.prototype.g=function(){return new XMLHttpRequest};Ut.prototype.i=function(){return{}};ve=new Ut;function pt(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new ot(this),this.O=Hr,t=fe?125:void 0,this.T=new xt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Jn}function Jn(){this.i=null,this.g="",this.h=!1}var Hr=45e3,Ee={},Ct={};a=pt.prototype;a.setTimeout=function(t){this.O=t};function we(t,e,n){t.K=1,t.v=Ft(k(e)),t.s=n,t.P=!0,Qn(t,null)}function Qn(t,e){t.F=Date.now(),gt(t),t.A=k(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),oi(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Jn,t.g=Ci(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Br(I(t.La,t,t.g),t.N)),Gn(t.S,t.g,"readystatechange",t.ib),e=t.H?Bn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ht(),Mr(t.j,t.u,t.A,t.m,t.U,t.s)}a.ib=function(t){t=t.target;const e=this.L;e&&L(t)==3?e.l():this.La(t)};a.La=function(t){try{if(t==this.g)t:{const g=L(this.g);var e=this.g.Ea();const _=this.g.aa();if(!(3>g)&&(g!=3||fe||this.g&&(this.h.h||this.g.fa()||gn(this.g)))){this.I||g!=4||e==7||(e==8||0>=_?ht(3):ht(2)),$t(this);var n=this.g.aa();this.Y=n;e:if(Zn(this)){var i=gn(this.g);t="";var s=i.length,r=L(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){U(this),et(this);var o="";break e}this.h.i=new l.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,xr(this.j,this.u,this.A,this.m,this.U,g,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var h,c=this.g;if((h=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dt(h)){var u=h;break e}}u=null}if(n=u)z(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ie(this,n);else{this.i=!1,this.o=3,A(12),U(this),et(this);break t}}this.P?(ti(this,g,o),fe&&this.i&&g==3&&(Gn(this.S,this.T,"tick",this.hb),this.T.start())):(z(this.j,this.m,o,null),Ie(this,o)),g==4&&U(this),this.i&&!this.I&&(g==4?Ai(this.l,this):(this.i=!1,gt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,A(12)):(this.o=0,A(13)),U(this),et(this)}}}catch{}finally{}};function Zn(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ti(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=Vr(t,n),s==Ct){e==4&&(t.o=4,A(14),i=!1),z(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Ee){t.o=4,A(15),z(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else z(t.j,t.m,s,null),Ie(t,s);Zn(t)&&s!=Ct&&s!=Ee&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,A(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ge(e),e.K=!0,A(11))):(z(t.j,t.m,n,"[Invalid Chunked Response]"),U(t),et(t))}a.hb=function(){if(this.g){var t=L(this.g),e=this.g.fa();this.C<e.length&&($t(this),ti(this,t,e),this.i&&t!=4&&gt(this))}};function Vr(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Ct:(n=Number(e.substring(n,i)),isNaN(n)?Ee:(i+=1,i+n>e.length?Ct:(e=e.substr(i,n),t.C=i+n,e)))}a.cancel=function(){this.I=!0,U(this)};function gt(t){t.V=Date.now()+t.O,ei(t,t.O)}function ei(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ft(I(t.gb,t),e)}function $t(t){t.B&&(l.clearTimeout(t.B),t.B=null)}a.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(jr(this.j,this.A),this.K!=2&&(ht(),A(17)),U(this),this.o=2,et(this)):ei(this,this.V-t)};function et(t){t.l.G==0||t.I||Ai(t.l,t)}function U(t){$t(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ke(t.T),Kn(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ie(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Te(n.h,t))){if(!t.J&&Te(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ot(n),Xt(n);else break t;Xe(n),A(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=ft(I(n.cb,n),6e3));if(1>=ci(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else $(n,11)}else if((t.J||n.g==t)&&Ot(n),!Dt(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const g=u[3];g!=null&&(n.ma=g,n.j.info("VER="+n.ma));const _=u[4];_!=null&&(n.Ca=_,n.j.info("SVER="+n.Ca));const N=u[5];N!=null&&typeof N=="number"&&0<N&&(i=1.5*N,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const R=t.g;if(R){const V=R.g?R.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(V){var r=i.h;r.g||V.indexOf("spdy")==-1&&V.indexOf("quic")==-1&&V.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&($e(r,r.h),r.h=null))}if(i.D){const Kt=R.g?R.g.getResponseHeader("X-HTTP-Session-Id"):null;Kt&&(i.za=Kt,p(i.F,i.D,Kt))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Di(i,i.H?i.ka:null,i.V),o.J){li(i.h,o);var h=o,c=i.J;c&&h.setTimeout(c),h.B&&($t(h),gt(h)),i.g=o}else Ii(i);0<n.i.length&&Gt(n)}else u[0]!="stop"&&u[0]!="close"||$(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?$(n,7):ze(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ht(4)}catch{}}function zr(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(kt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Xr(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(kt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function ni(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(kt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Xr(t),i=zr(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gr(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function F(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof F){this.h=e!==void 0?e:t.h,St(this,t.j),this.s=t.s,this.g=t.g,Rt(this,t.m),this.l=t.l,e=t.i;var n=new at;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fn(this,n),this.o=t.o}else t&&(n=String(t).match(ii))?(this.h=!!e,St(this,n[1]||"",!0),this.s=Z(n[2]||""),this.g=Z(n[3]||"",!0),Rt(this,n[4]),this.l=Z(n[5]||"",!0),fn(this,n[6]||"",!0),this.o=Z(n[7]||"")):(this.h=!!e,this.i=new at(null,this.h))}F.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tt(e,dn,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tt(e,dn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(tt(n,n.charAt(0)=="/"?qr:Wr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tt(n,Jr)),t.join("")};function k(t){return new F(t)}function St(t,e,n){t.j=n?Z(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Rt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fn(t,e,n){e instanceof at?(t.i=e,Qr(t.i,t.h)):(n||(e=tt(e,Yr)),t.i=new at(e,t.h))}function p(t,e,n){t.i.set(e,n)}function Ft(t){return p(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Z(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Kr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Kr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dn=/[#\/\?@]/g,Wr=/[#\?:]/g,qr=/[#\?]/g,Yr=/[#\?@]/g,Jr=/#/g;function at(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function x(t){t.g||(t.g=new Map,t.h=0,t.i&&Gr(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}a=at.prototype;a.add=function(t,e){x(this),this.i=null,t=Y(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function si(t,e){x(t),e=Y(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ri(t,e){return x(t),e=Y(t,e),t.g.has(e)}a.forEach=function(t,e){x(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};a.oa=function(){x(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};a.W=function(t){x(this);let e=[];if(typeof t=="string")ri(this,t)&&(e=e.concat(this.g.get(Y(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};a.set=function(t,e){return x(this),this.i=null,t=Y(this,t),ri(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};a.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function oi(t,e,n){si(t,e),0<n.length&&(t.i=null,t.g.set(Y(t,e),be(n)),t.h+=n.length)}a.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Y(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Qr(t,e){e&&!t.j&&(x(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(si(this,i),oi(this,s,n))},t)),t.j=e}var Zr=class{constructor(t,e){this.h=t,this.g=e}};function hi(t){this.l=t||to,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(l.g&&l.g.Ga&&l.g.Ga()&&l.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var to=10;function ai(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ci(t){return t.h?1:t.g?t.g.size:0}function Te(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $e(t,e){t.g?t.g.add(e):t.h=e}function li(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hi.prototype.cancel=function(){if(this.i=ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ui(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return be(t.i)}function Fe(){}Fe.prototype.stringify=function(t){return l.JSON.stringify(t,void 0)};Fe.prototype.parse=function(t){return l.JSON.parse(t,void 0)};function eo(){this.g=new Fe}function no(t,e,n){const i=n||"";try{ni(t,function(s,r){let o=s;lt(s)&&(o=Le(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function io(t,e){const n=new jt;if(l.Image){const i=new Image;i.onload=Et(It,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Et(It,n,i,"TestLoadImage: error",!1,e),i.onabort=Et(It,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Et(It,n,i,"TestLoadImage: timeout",!1,e),l.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function It(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Ht(t){this.l=t.ac||null,this.j=t.jb||!1}E(Ht,xe);Ht.prototype.g=function(){return new Vt(this.l,this.j)};Ht.prototype.i=function(t){return function(){return t}}({});function Vt(t,e){y.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=He,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}E(Vt,y);var He=0;a=Vt.prototype;a.open=function(t,e){if(this.readyState!=He)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ct(this)};a.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||l).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mt(this)),this.readyState=He};a.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ct(this)),this.g&&(this.readyState=3,ct(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fi(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function fi(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}a.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mt(this):ct(this),this.readyState==3&&fi(this)}};a.Va=function(t){this.g&&(this.response=this.responseText=t,mt(this))};a.Ua=function(t){this.g&&(this.response=t,mt(this))};a.ga=function(){this.g&&mt(this)};function mt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ct(t)}a.setRequestHeader=function(t,e){this.v.append(t,e)};a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};a.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ct(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var so=l.JSON.parse;function m(t){y.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=di,this.K=this.L=!1}E(m,y);var di="",ro=/^https?$/i,oo=["POST","PUT"];a=m.prototype;a.Ka=function(t){this.L=t};a.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ve.g(),this.C=this.u?un(this.u):un(ve),this.g.onreadystatechange=I(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){pn(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=l.FormData&&t instanceof l.FormData,!(0<=Nn(oo,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{mi(this),0<this.B&&((this.K=ho(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.qa,this)):this.A=Pe(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){pn(this,r)}};function ho(t){return st&&Ar()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}a.qa=function(){typeof _e<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,v(this,"timeout"),this.abort(8))};function pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pi(t),zt(t)}function pi(t){t.D||(t.D=!0,v(t,"complete"),v(t,"error"))}a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,v(this,"complete"),v(this,"abort"),zt(this))};a.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zt(this,!0)),m.X.M.call(this)};a.Ha=function(){this.s||(this.F||this.v||this.l?gi(this):this.fb())};a.fb=function(){gi(this)};function gi(t){if(t.h&&typeof _e<"u"&&(!t.C[1]||L(t)!=4||t.aa()!=2)){if(t.v&&L(t)==4)Pe(t.Ha,0,t);else if(v(t,"readystatechange"),L(t)==4){t.h=!1;try{const h=t.aa();t:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=h===0){var s=String(t.H).match(ii)[1]||null;if(!s&&l.self&&l.self.location){var r=l.self.location.protocol;s=r.substr(0,r.length-1)}i=!ro.test(s?s.toLowerCase():"")}n=i}if(n)v(t,"complete"),v(t,"success");else{t.m=6;try{var o=2<L(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",pi(t)}}finally{zt(t)}}}}function zt(t,e){if(t.g){mi(t);const n=t.g,i=t.C[0]?bt:null;t.g=null,t.C=null,e||v(t,"ready");try{n.onreadystatechange=i}catch{}}}function mi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(l.clearTimeout(t.A),t.A=null)}function L(t){return t.g?t.g.readyState:0}a.aa=function(){try{return 2<L(this)?this.g.status:-1}catch{return-1}};a.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};a.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),so(e)}};function gn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case di:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}a.Ea=function(){return this.m};a.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function yi(t){let e="";return Ce(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Ve(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=yi(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):p(t,e,n))}function Q(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vi(t){this.Ca=0,this.i=[],this.j=new jt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Q("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Q("baseRetryDelayMs",5e3,t),this.bb=Q("retryDelaySeedMs",1e4,t),this.$a=Q("forwardChannelMaxRetries",2,t),this.ta=Q("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hi(t&&t.concurrentRequestLimit),this.Fa=new eo,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}a=vi.prototype;a.ma=8;a.G=1;function ze(t){if(Ei(t),t.G==3){var e=t.U++,n=k(t.F);p(n,"SID",t.I),p(n,"RID",e),p(n,"TYPE","terminate"),yt(t,n),e=new pt(t,t.j,e,void 0),e.K=2,e.v=Ft(k(n)),n=!1,l.navigator&&l.navigator.sendBeacon&&(n=l.navigator.sendBeacon(e.v.toString(),"")),!n&&l.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ci(e.l,null),e.g.da(e.v)),e.F=Date.now(),gt(e)}bi(t)}function Xt(t){t.g&&(Ge(t),t.g.cancel(),t.g=null)}function Ei(t){Xt(t),t.u&&(l.clearTimeout(t.u),t.u=null),Ot(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&l.clearTimeout(t.m),t.m=null)}function Gt(t){ai(t.h)||t.m||(t.m=!0,Vn(t.Ja,t),t.C=0)}function ao(t,e){return ci(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ft(I(t.Ja,t,e),_i(t,t.C)),t.C++,!0)}a.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new pt(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Bn(r),Mn(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){e:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break e}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break t}if(e===4096||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=wi(this,s,e),n=k(this.F),p(n,"RID",t),p(n,"CVER",22),this.D&&p(n,"X-HTTP-Session-Id",this.D),yt(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(yi(r)))+"&"+e:this.o&&Ve(n,this.o,r)),$e(this.h,s),this.Ya&&p(n,"TYPE","init"),this.O?(p(n,"$req",e),p(n,"SID","null"),s.Z=!0,we(s,n,null)):we(s,n,e),this.G=2}}else this.G==3&&(t?mn(this,t):this.i.length==0||ai(this.h)||mn(this))};function mn(t,e){var n;e?n=e.m:n=t.U++;const i=k(t.F);p(i,"SID",t.I),p(i,"RID",n),p(i,"AID",t.T),yt(t,i),t.o&&t.s&&Ve(i,t.o,t.s),n=new pt(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=wi(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),$e(t.h,n),we(n,i,e)}function yt(t,e){t.ia&&Ce(t.ia,function(n,i){p(e,i,n)}),t.l&&ni({},function(n,i){p(e,i,n)})}function wi(t,e,n){n=Math.min(t.i.length,n);var i=t.l?I(t.l.Ra,t.l,t):null;t:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let h=!0;for(let c=0;c<n;c++){let u=s[c].h;const g=s[c].g;if(u-=r,0>u)r=Math.max(0,s[c].h-100),h=!1;else try{no(g,o,"req"+u+"_")}catch{i&&i(g)}}if(h){i=o.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Ii(t){t.g||t.u||(t.Z=1,Vn(t.Ia,t),t.A=0)}function Xe(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ft(I(t.Ia,t),_i(t,t.A)),t.A++,!0)}a.Ia=function(){if(this.u=null,Ti(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ft(I(this.eb,this),t)}};a.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,A(10),Xt(this),Ti(this))};function Ge(t){t.B!=null&&(l.clearTimeout(t.B),t.B=null)}function Ti(t){t.g=new pt(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=k(t.sa);p(e,"RID","rpc"),p(e,"SID",t.I),p(e,"CI",t.L?"0":"1"),p(e,"AID",t.T),p(e,"TYPE","xmlhttp"),yt(t,e),t.o&&t.s&&Ve(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ft(k(e)),n.s=null,n.P=!0,Qn(n,t)}a.cb=function(){this.v!=null&&(this.v=null,Xt(this),Xe(this),A(19))};function Ot(t){t.v!=null&&(l.clearTimeout(t.v),t.v=null)}function Ai(t,e){var n=null;if(t.g==e){Ot(t),Ge(t),t.g=null;var i=2}else if(Te(t.h,e))n=e.D,li(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=Be(),v(i,new Yn(i,n)),Gt(t)}else Ii(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&ao(t,e)||i==2&&Xe(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:$(t,5);break;case 4:$(t,10);break;case 3:$(t,6);break;default:$(t,2)}}}function _i(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function $(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=I(t.kb,t);n||(n=new F("//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||St(n,"https"),Ft(n)),io(n.toString(),i)}else A(2);t.G=0,t.l&&t.l.va(e),bi(t),Ei(t)}a.kb=function(t){t?(this.j.info("Successfully pinged google.com"),A(2)):(this.j.info("Failed to ping google.com"),A(1))};function bi(t){if(t.G=0,t.la=[],t.l){const e=ui(t.h);(e.length!=0||t.i.length!=0)&&(on(t.la,e),on(t.la,t.i),t.h.i.length=0,be(t.i),t.i.length=0),t.l.ua()}}function Di(t,e,n){var i=n instanceof F?k(n):new F(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Rt(i,i.m);else{var s=l.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new F(null,void 0);i&&St(r,i),e&&(r.g=e),s&&Rt(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&p(i,n,e),p(i,"VER",t.ma),yt(t,i),i}function Ci(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new m(new Ht({jb:!0})):new m(t.ra),e.Ka(t.H),e}function Si(){}a=Si.prototype;a.xa=function(){};a.wa=function(){};a.va=function(){};a.ua=function(){};a.Ra=function(){};function S(t,e){y.call(this),this.g=new vi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Dt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dt(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new J(this)}E(S,y);S.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;A(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Di(t,null,t.V),Gt(t)};S.prototype.close=function(){ze(this.g)};S.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Le(t),t=n);e.i.push(new Zr(e.ab++,t)),e.G==3&&Gt(e)};S.prototype.M=function(){this.g.l=null,delete this.j,ze(this.g),delete this.g,S.X.M.call(this)};function Ri(t){je.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}E(Ri,je);function Oi(){Ue.call(this),this.status=1}E(Oi,Ue);function J(t){this.g=t}E(J,Si);J.prototype.xa=function(){v(this.g,"a")};J.prototype.wa=function(t){v(this.g,new Ri(t))};J.prototype.va=function(t){v(this.g,new Oi)};J.prototype.ua=function(){v(this.g,"b")};S.prototype.send=S.prototype.u;S.prototype.open=S.prototype.m;S.prototype.close=S.prototype.close;Me.NO_ERROR=0;Me.TIMEOUT=8;Me.HTTP_ERROR=6;$r.COMPLETE="complete";Fr.EventType=dt;dt.OPEN="a";dt.CLOSE="b";dt.ERROR="c";dt.MESSAGE="d";y.prototype.listen=y.prototype.N;m.prototype.listenOnce=m.prototype.O;m.prototype.getLastError=m.prototype.Oa;m.prototype.getLastErrorCode=m.prototype.Ea;m.prototype.getStatus=m.prototype.aa;m.prototype.getResponseJson=m.prototype.Sa;m.prototype.getResponseText=m.prototype.fa;m.prototype.send=m.prototype.da;m.prototype.setWithCredentials=m.prototype.Ka;const yn="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}w.UNAUTHENTICATED=new w(null),w.GOOGLE_CREDENTIALS=new w("google-credentials-uid"),w.FIRST_PARTY=new w("first-party-uid"),w.MOCK_USER=new w("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vt="9.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=new bn("@firebase/firestore");function b(t,...e){if(K.logLevel<=d.DEBUG){const n=e.map(We);K.debug(`Firestore (${vt}): ${t}`,...n)}}function Ke(t,...e){if(K.logLevel<=d.ERROR){const n=e.map(We);K.error(`Firestore (${vt}): ${t}`,...n)}}function co(t,...e){if(K.logLevel<=d.WARN){const n=e.map(We);K.warn(`Firestore (${vt}): ${t}`,...n)}}function We(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t="Unexpected state"){const e=`FIRESTORE (${vt}) INTERNAL ASSERTION FAILED: `+t;throw Ke(e),new Error(e)}function Nt(t,e){t||qe()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends W{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(w.UNAUTHENTICATED))}shutdown(){}}class uo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fo{constructor(e){this.t=e,this.currentUser=w.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new G;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new G,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},h=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>h(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?h(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new G)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Nt(typeof i.accessToken=="string"),new Ni(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Nt(e===null||typeof e=="string"),new w(e)}}class po{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=w.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Nt(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class go{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new po(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(w.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yo{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Nt(typeof n.token=="string"),this.A=n.token,new mo(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=vo(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function Li(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,i,s,r,o,h,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=h,this.useFetchStreams=c}}class Lt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Lt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lt&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vn,f;(f=vn||(vn={}))[f.OK=0]="OK",f[f.CANCELLED=1]="CANCELLED",f[f.UNKNOWN=2]="UNKNOWN",f[f.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",f[f.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",f[f.NOT_FOUND=5]="NOT_FOUND",f[f.ALREADY_EXISTS=6]="ALREADY_EXISTS",f[f.PERMISSION_DENIED=7]="PERMISSION_DENIED",f[f.UNAUTHENTICATED=16]="UNAUTHENTICATED",f[f.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",f[f.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",f[f.ABORTED=10]="ABORTED",f[f.OUT_OF_RANGE=11]="OUT_OF_RANGE",f[f.UNIMPLEMENTED=12]="UNIMPLEMENTED",f[f.INTERNAL=13]="INTERNAL",f[f.UNAVAILABLE=14]="UNAVAILABLE",f[f.DATA_LOSS=15]="DATA_LOSS";function re(){return typeof document<"u"?document:null}class Io{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-i);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new G,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,h=new Ye(e,n,o,s,r);return h.start(i),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function To(t,e){if(Ke("AsyncQueue",`${e}: ${t}`),Li(t))return new C(D.UNAVAILABLE,`${e}: ${t}`);throw t}function Ao(t,e,n,i){if(e===!0&&i===!0)throw new C(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _o(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":qe()}function bo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_o(t);throw new C(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Map;class wn{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Ao("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wn({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wn(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lo;switch(n.type){case"gapi":const i=n.client;return new go(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=En.get(e);n&&(b("ComponentProvider","Removing Datastore"),En.delete(e),n.terminate())}(this),Promise.resolve()}}function Pi(t,e,n,i={}){var s;const r=(t=bo(t,ki))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&co("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,h;if(typeof i.mockUserToken=="string")o=i.mockUserToken,h=w.MOCK_USER;else{o=ts(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new C(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new w(c)}t._authCredentials=new uo(new Ni(o,h))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=w.UNAUTHENTICATED,this.clientId=Eo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{b("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(b("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new G;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=To(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}class Co{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Io(this,"async_queue_retry"),this.Wc=()=>{const n=re();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=re();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=re();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new G;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Li(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ke("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(e,n,i){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Ye.createAndSchedule(this,e,n,i,r=>this.Yc(r));return this.qc.push(s),s}zc(){this.Kc&&qe()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}class So extends ki{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Co,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Oo(this),this._firestoreClient.terminate()}}function Ro(t,e){const n=typeof t=="object"?t:nr(),i=typeof t=="string"?t:e||"(default)",s=Qs(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Ji("firestore");r&&Pi(s,...r)}return s}function Oo(t){var e;const n=t._freezeSettings(),i=function(s,r,o,h){return new wo(s,r,o,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Do(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){vt=n})(er),_t(new nt("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new So(new fo(n.getProvider("auth-internal")),new yo(n.getProvider("app-check-internal")),function(h,c){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new C(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lt(h.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),X(yn,"3.7.2",t),X(yn,"3.7.2","esm2017")})();var No="firebase",Lo="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X(No,Lo,"app");const ko={apiKey:"AIzaSyBy5EzStSr7xNNYSv2Kpi08i8UwlX46FRQ",authDomain:"ely1test1.firebaseapp.com",databaseURL:"http://localhost:8080",projectId:"ely1test1",storageBucket:"ely1test1.appspot.com",messagingSenderId:"843615904795",appId:"1:843615904795:web:079b480f7335939167c4be"},Po=Sn(ko),Bo=Ro(Po);Pi(Bo,"localhost",8080);const Mo=Ui("h1",null,"ajouter un article :",-1),Uo=Mi({__name:"AddArticle",setup(t){return(e,n)=>($i(),xi("div",null,[Mo,ji(Bi)]))}});export{Uo as default};
