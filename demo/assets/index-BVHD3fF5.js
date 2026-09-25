const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/php-wasm-not-bundled-B_lfuRhw.js","assets/rolldown-runtime-D2aABDIb.js","assets/web-8-3-DGueU1qR.js"])))=>i.map(i=>d[i]);
import{n as __esmMin,r as __toESM,t as __commonJSMin}from"./rolldown-runtime-D2aABDIb.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))r(e);new MutationObserver(e=>{for(let n of e)if(n.type===`childList`)for(let e of n.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&r(e)}).observe(document,{childList:!0,subtree:!0});function n(e){let n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),n.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,n}function r(e){if(e.ep)return;e.ep=!0;let r=n(e);fetch(e.href,r)}})();var E$3,f,w$3,L$1,d,m$1,c$3,t,a,P$2,T$2,M$1,g$1,S$2,init_logger=__esmMin((()=>{E$3=`playground-log`,f=(e,...n)=>{M$1.dispatchEvent(new CustomEvent(E$3,{detail:{log:e,args:n}}))},w$3=(e,...n)=>{switch(typeof e.message==`string`?Reflect.set(e,`message`,g$1(e.message)):e.message.message&&typeof e.message.message==`string`&&Reflect.set(e.message,`message`,g$1(e.message.message)),e.severity){case t.Debug:console.debug(e.message,...n);break;case t.Info:console.info(e.message,...n);break;case t.Warn:console.warn(e.message,...n);break;case t.Error:console.error(e.message,...n);break;case t.Fatal:console.error(e.message,...n);break;default:console.log(e.message,...n)}},L$1=e=>e instanceof Error?[e.message,e.stack].join(`
`):JSON.stringify(e,null,2),d=[],m$1=e=>{d.push(e)},c$3=e=>{if(e.raw===!0)m$1(e.message);else{let n=S$2(typeof e.message==`object`?L$1(e.message):e.message,e.severity,e.prefix??a.JS);m$1(n)}},t={Fatal:{name:`fatal`,level:0},Error:{name:`error`,level:1},Warn:{name:`warn`,level:2},Log:{name:`log`,level:3},Info:{name:`info`,level:4},Debug:{name:`debug`,level:5}},a={WASM:`Wasm Crash`,PHP:`PHP`,JS:`JavaScript`},P$2=class extends EventTarget{constructor(e=[]){super(),this.fatalErrorEvent=`playground-fatal-error`,this.severity=t.Info,this.handlers=e}getLogs(){return this.handlers.includes(c$3)?[...d]:(this.error(`Logs aren't stored because the logToMemory handler isn't registered.
				If you're using a custom logger instance, make sure to register logToMemory handler.
			`),[])}logMessage(e,...n){let r={...e,severity:e.severity??t.Log};for(let e of this.handlers)r.severity.level<=this.severity.level&&e(r,...n)}setSeverityFilterLevel(e){this.severity=e}log(e,...n){this.logMessage({message:e,severity:t.Log,prefix:a.JS,raw:!1},...n)}debug(e,...n){this.logMessage({message:e,severity:t.Debug,prefix:a.JS,raw:!1},...n)}info(e,...n){this.logMessage({message:e,severity:t.Info,prefix:a.JS,raw:!1},...n)}warn(e,...n){this.logMessage({message:e,severity:t.Warn,prefix:a.JS,raw:!1},...n)}error(e,...n){this.logMessage({message:e,severity:t.Error,prefix:a.JS,raw:!1},...n)}},T$2=()=>[c$3,w$3,f],M$1=new P$2(T$2()),g$1=e=>e.replace(/\t/g,``),S$2=(e,n,r)=>{let i=new Date,o=new Intl.DateTimeFormat(`en-GB`,{year:`numeric`,month:`short`,day:`2-digit`,timeZone:`UTC`}).format(i).replace(/ /g,`-`),s=new Intl.DateTimeFormat(`en-GB`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hour12:!1,timeZone:`UTC`,timeZoneName:`short`}).format(i),l=o+` `+s;return e=g$1(e),`[${l}] ${r} ${n.name}: ${e}`}}));function p$1(e){return new Promise(n=>{setTimeout(()=>n(w$2),e)})}function m(...e){function n(e){return e.substring(e.length-1)===`/`}let r=e.join(`/`),i=r[0]===`/`,o=n(r);return r=c$2(r),!r&&!i&&(r=`.`),r&&o&&!n(r)&&(r+=`/`),r}function I$3(e,n){if(e.includes(`\0`)||n.includes(`\0`))return;let r=c$2(n);if(!r)return;let i=c$2(e.startsWith(`/`)?e:m(r,e));if(i!==r&&P$1(r,i))return i}function W$1(e){if(e===`/`)return`/`;e=c$2(e);let n=e.lastIndexOf(`/`);return n===-1?``:n===0?`/`:e.substr(0,n)}function j$1(e){if(e===`/`)return`/`;e=c$2(e);let n=e.lastIndexOf(`/`);return n===-1?e:e.substr(n+1)}function c$2(e){let n=e[0]===`/`;return e=E$2(e.split(`/`).filter(e=>!!e),!n).join(`/`),(n?`/`:``)+e.replace(/\/$/,``)}function E$2(e,n){let r=0;for(let n=e.length-1;n>=0;n--){let i=e[n];i===`.`?e.splice(n,1):i===`..`?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(n)for(;r;r--)e.unshift(`..`);return e}function P$1(e,n){return e===`/`||(e=c$2(e),n=c$2(n),n.startsWith(e+`/`)||n===e)}function x$2(e){let n=0,r=``,i=[],o=``;for(let s=0;s<e.length;s++){let l=e[s];l===`\\`?((e[s+1]===`"`||e[s+1]===`'`)&&s++,o+=e[s]):n===0?l===`"`||l===`'`?(n=1,r=l):l.match(/\s/)?(o.trim().length&&i.push(o.trim()),o=l):i.length&&!o?o=i.pop()+l:o+=l:n===1&&(l===r?(n=0,r=``):o+=l)}return o&&i.push(o.trim()),i}function S$1(e){return function(n,r=[],i={}){let o=new T$1,s=new _$1(o);return setTimeout(async()=>{let l=[];if(r.length)l=[n,...r];else if(typeof n==`string`)l=x$2(n);else if(Array.isArray(n))l=n;else throw Error(`Invalid command `,n);try{let n=e(l,s,i);if(typeof n!=`object`||!n||!(`then`in n))throw Error(`The program callback passed to createSpawnHandler() did not return a promise. It indicates there's a bug in your code. The callback must return a promise. PHP cannot interact with program that synchronously exists at the end of the proc_open() call. All the streams would be closed already. Make sure to put an "await new Promise(resolve => setTimeout(resolve, 1))before calling processApi.exit(0) in your callback to let PHP catch up with the stdout data.`);if(s.exited)throw Error(`The program callback passed to createSpawnHandler() exited synchronously. It indicates there's a bug in your code. The callback must return a promise. PHP cannot interact with program that synchronously exists at the end of the proc_open() call. All the streams would be closed already. Make sure to put an "await new Promise(resolve => setTimeout(resolve, 1))before calling processApi.exit(0) in your callback to let PHP catch up with the stdout data.`);o.emit(`spawn`,!0),await n}catch(e){o.emit(`error`,e),typeof e==`object`&&e&&`message`in e&&typeof e.message==`string`&&s.stderr(e.message),s.exit(1)}}),o}}function D$2(e){let n=0;e.forEach(e=>n+=e.length);let r=new Uint8Array(n),i=0;return e.forEach(e=>{r.set(e,i),i+=e.length}),r}function R$3(e){return D$2(e.map(e=>new Uint8Array(e))).buffer}var w$2,b$2,v$1,g,h,_$1,M,T$1,A$3,init_util=__esmMin((()=>{w$2=Symbol(`SleepFinished`),b$2=class extends Error{constructor(){super(`Acquiring lock timed out`)}},v$1=class{constructor({concurrency:e,timeout:n}){this._running=0,this.concurrency=e,this.timeout=n,this.queue=[]}get remaining(){return this.concurrency-this.running}get running(){return this._running}async acquire(){if(this._running>=this.concurrency){let e=new Promise(e=>{this.queue.push(e)});if(this.timeout!==void 0){let n=this.queue.at(-1);if(await Promise.race([e,p$1(this.timeout)])===w$2)throw this.queue.splice(this.queue.indexOf(n),1),new b$2}else await e}this._running++;let e=!1;return()=>{e||(e=!0,this._running--,this.queue.length>0&&this.queue.shift()())}}async run(e){let n=await this.acquire();try{return await e()}finally{n()}}},g=class{constructor(){this.listeners={}}emit(e,n){this.listeners[e]&&this.listeners[e].forEach(function(e){e(n)})}on(e,n){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n)}once(e,n){let r=(...i)=>{this.off(e,r),n(...i)};this.on(e,r)}off(e,n){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(e=>e!==n))}},h=class extends g{constructor(e){if(super(),this.buffer=[],this.writing=!1,this.ended=!1,this.length=0,!e.write)throw Error(`WritablePolyfill requires write option`);this._write=e.write,this.highWaterMark=e.highWaterMark??16384,this.decodeStrings=e.decodeStrings??!0,this.defaultEncoding=e.defaultEncoding??`utf8`,this.defer=typeof queueMicrotask==`function`?queueMicrotask:e=>setTimeout(e,0)}write(e,n=this.defaultEncoding,r=()=>{}){if(typeof n==`function`&&(r=n,n=this.defaultEncoding),this.ended){let e=Error(`write after end`),n=this.defer;return n(()=>r(e)),this.emit(`error`,e),!1}if(this.decodeStrings&&typeof e==`string`){if(typeof Buffer<`u`&&typeof Buffer.from==`function`)e=Buffer.from(e,n);else if(typeof TextEncoder<`u`)e=new TextEncoder().encode(e);else throw Error(`String chunks are not supported in this environment: Buffer and TextEncoder are unavailable.`);n=`buffer`}this.length+=e.length??1;let i=this.length>=this.highWaterMark;return this.buffer.push({chunk:e,encoding:n,cb:r}),this.writing||this._clearBuffer(),!i}end(e,n,r){typeof e==`function`?(r=e,e=void 0):typeof n==`function`&&(r=n,n=void 0),e!==void 0&&this.write(e,n,()=>{}),this.ended=!0,this.writing||this._clearBuffer(),r&&this.defer(r)}cork(){}uncork(){}setDefaultEncoding(e){return this.defaultEncoding=e,this}_clearBuffer(){let e=this.buffer.shift();if(!e){this.ended&&this.emit(`finish`);return}this.writing=!0,this._write(e.chunk,e.encoding,n=>{this.writing=!1,this.length-=e.chunk.length??1,n&&this.emit(`error`,n),e.cb(n),this.buffer.length?this._clearBuffer():(this.length<this.highWaterMark&&this.emit(`drain`),this.ended&&this.emit(`finish`))})}},_$1=class extends g{constructor(e){super(),this.exited=!1,this.stdinBuffer=[],this.childProcess=e,e.on(`stdin`,e=>{this.stdinBuffer?this.stdinBuffer.push(e.slice()):this.emit(`stdin`,e)})}stdinEnd(){this.childProcess.stdin.ended||this.childProcess.stdin.end()}stdout(e){this.childProcess.stdout.write(e)}stdoutEnd(){this.childProcess.stdout.ended||this.childProcess.stdout.end()}stderr(e){this.childProcess.stderr.write(e)}stderrEnd(){this.childProcess.stderr.ended||this.childProcess.stderr.end()}notifySpawn(){this.childProcess.emit(`spawn`,!0)}exit(e){this.exited||(this.exited=!0,this.stdinEnd(),this.stdoutEnd(),this.stderrEnd(),this.childProcess.emit(`exit`,e))}on(e,n){if(super.on(e,n),e===`stdin`&&this.stdinBuffer){for(let e=0;e<this.stdinBuffer.length;e++)this.emit(`stdin`,this.stdinBuffer[e]);this.stdinBuffer=null}}},M=9743,T$1=class extends g{constructor(e=M++){super(),this.pid=e;let n=this;this.stdout=new h({write(e,r,i){n.stdout.emit(`data`,e),i()}}),this.stderr=new h({write:(e,r,i)=>{n.stderr.emit(`data`,e),i()}}),this.stdin=new h({write:(e,r,i)=>{n.emit(`stdin`,e),i()}})}},A$3=Symbol.for(`@php-wasm/php-event-stdin-transfer`)})),require_ini=__commonJSMin(((e,n)=>{var{hasOwnProperty:r}=Object.prototype,i=(e,n={})=>{typeof n==`string`&&(n={section:n}),n.align=n.align===!0,n.newline=n.newline===!0,n.sort=n.sort===!0,n.whitespace=n.whitespace===!0||n.align===!0,n.platform=n.platform||typeof process<`u`&&process.platform,n.bracketedArray=n.bracketedArray!==!1;let r=n.platform===`win32`?`\r
`:`
`,s=n.whitespace?` = `:`=`,l=[],ae=n.sort?Object.keys(e).sort():Object.keys(e),ce=0;n.align&&(ce=N(ae.filter(n=>e[n]===null||Array.isArray(e[n])||typeof e[n]!=`object`).map(n=>Array.isArray(e[n])?`${n}[]`:n).concat([``]).reduce((e,n)=>N(e).length>=N(n).length?e:n)).length);let ue=``,he=n.bracketedArray?`[]`:``;for(let n of ae){let i=e[n];if(i&&Array.isArray(i))for(let e of i)ue+=N(`${n}${he}`).padEnd(ce,` `)+s+N(e)+r;else i&&typeof i==`object`?l.push(n):ue+=N(n).padEnd(ce,` `)+s+N(i)+r}n.section&&ue.length&&(ue=`[`+N(n.section)+`]`+(n.newline?r+r:r)+ue);for(let s of l){let l=o(s,`.`).join(`\\.`),N=(n.section?n.section+`.`:``)+l,ae=i(e[s],{...n,section:N});ue.length&&ae.length&&(ue+=r),ue+=ae}return ue};function o(e,n){var r=0,i=0,o=0,s=[];do if(o=e.indexOf(n,r),o!==-1){if(r=o+n.length,o>0&&e[o-1]===`\\`)continue;s.push(e.slice(i,o)),i=o+n.length}while(o!==-1);return s.push(e.slice(i)),s}var s=(e,n={})=>{n.bracketedArray=n.bracketedArray!==!1;let i=Object.create(null),s=i,l=null,N=/^\[([^\]]*)\]\s*$|^([^=]+)(=(.*))?$/i,ce=e.split(/[\r\n]+/g),ue={};for(let e of ce){if(!e||e.match(/^\s*[;#]/)||e.match(/^\s*$/))continue;let o=e.match(N);if(!o)continue;if(o[1]!==void 0){if(l=ae(o[1]),l===`__proto__`){s=Object.create(null);continue}s=i[l]=i[l]||Object.create(null);continue}let ce=ae(o[2]),he;n.bracketedArray?he=ce.length>2&&ce.slice(-2)===`[]`:(ue[ce]=(ue?.[ce]||0)+1,he=ue[ce]>1);let Ce=he?ce.slice(0,-2):ce;if(Ce===`__proto__`)continue;let De=!o[3]||ae(o[4]),Oe=De===`true`||De===`false`||De===`null`?JSON.parse(De):De;he&&(r.call(s,Ce)?Array.isArray(s[Ce])||(s[Ce]=[s[Ce]]):s[Ce]=[]),Array.isArray(s[Ce])?s[Ce].push(Oe):s[Ce]=Oe}let he=[];for(let e of Object.keys(i)){if(!r.call(i,e)||typeof i[e]!=`object`||Array.isArray(i[e]))continue;let n=o(e,`.`);s=i;let l=n.pop(),N=l.replace(/\\\./g,`.`);for(let e of n)e!==`__proto__`&&((!r.call(s,e)||typeof s[e]!=`object`)&&(s[e]=Object.create(null)),s=s[e]);(s!==i||N!==l)&&(s[N]=i[e],he.push(e))}for(let e of he)delete i[e];return i},l=e=>e.startsWith(`"`)&&e.endsWith(`"`)||e.startsWith(`'`)&&e.endsWith(`'`),N=e=>typeof e!=`string`||e.match(/[=\r\n]/)||e.match(/^\[/)||e.length>1&&l(e)||e!==e.trim()?JSON.stringify(e):e.split(`;`).join(`\\;`).split(`#`).join(`\\#`),ae=e=>{if(e=(e||``).trim(),l(e)){e.charAt(0)===`'`&&(e=e.slice(1,-1));try{e=JSON.parse(e)}catch{}}else{let n=!1,r=``;for(let i=0,o=e.length;i<o;i++){let o=e.charAt(i);if(n)`\\;#`.indexOf(o)===-1?r+=`\\`+o:r+=o,n=!1;else if(`;#`.indexOf(o)!==-1)break;else o===`\\`?n=!0:r+=o}return n&&(r+=`\\`),r.trim()}return e};n.exports={parse:s,decode:s,stringify:i,encode:i,safe:N,unsafe:ae}}));function U(...e){let n=new Uint8Array(e.reduce((e,n)=>e+n.length,0)),r=0;for(let i of e)n.set(i,r),r+=i.length;return n}function S(e){if(e===void 0){let e=new Uint8Array;return new TransformStream({transform(n){e=U(e,n)},flush(n){n.enqueue(e)}})}{let n=new ArrayBuffer(e||0),r=0;return new TransformStream({transform(e){new Uint8Array(n).set(e,r),r+=e.byteLength},flush(e){e.enqueue(new Uint8Array(n))}})}}function A$2(e,n){if(n===0)return new ReadableStream({start(e){e.close()}});let r=e.getReader({mode:`byob`}),i=0;return new ReadableStream({async pull(e){let{value:o,done:s}=await r.read(new Uint8Array(n-i));if(s){r.releaseLock(),e.close();return}i+=o.length,e.enqueue(o),i>=n&&(r.releaseLock(),e.close())},cancel(){r.cancel()}})}async function c$1(e,n){return n!==void 0&&(e=A$2(e,n)),await e.pipeThrough(S(n)).getReader().read().then(({value:e})=>e)}var E$1,H,init_stream_compression=__esmMin((()=>{init_util(),E$1=class e extends File{static fromArrayBuffer(n,r,i){return new e(new ReadableStream({start(e){e.enqueue(new Uint8Array(n)),e.close()}}),r,i)}constructor(e,n,r){super([],n,{type:r?.type}),this.readableStream=e,this.filesize=r?.filesize}slice(){throw Error(`slice() is not possible on a StreamedFile`)}stream(){return this.readableStream}async text(){return new TextDecoder().decode(await this.arrayBuffer())}async arrayBuffer(){return await c$1(this.stream())}},ReadableStream.prototype[Symbol.asyncIterator]||(ReadableStream.prototype[Symbol.asyncIterator]=async function*(){let e=this.getReader();try{for(;;){let{done:n,value:r}=await e.read();if(n)return;yield r}}finally{e.releaseLock()}},ReadableStream.prototype.iterate=ReadableStream.prototype[Symbol.asyncIterator]),new v$1({concurrency:10})})),scriptRel,assetsURL,seen,__vitePreload,init_preload_helper=__esmMin((()=>{scriptRel=`modulepreload`,assetsURL=function(e){return`/demo/`+e},seen={},__vitePreload=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){let e=document.getElementsByTagName(`link`),o=document.querySelector(`meta[property=csp-nonce]`),s=o?.nonce||o?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function N(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}i=l(n.map(n=>{if(n=assetsURL(n,r),n=N(n),n in seen)return;seen[n]=!0;let i=n.endsWith(`.css`);for(let r=e.length-1;r>=0;r--){let o=e[r];if(o.href===n&&(!i||o.rel===`stylesheet`))return}let o=document.createElement(`link`);if(o.rel=i?`stylesheet`:scriptRel,i||(o.as=`script`),o.crossOrigin=``,o.href=n,s&&o.setAttribute(`nonce`,s),document.head.appendChild(o),i)return new Promise((e,r)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>r(Error(`Unable to preload CSS for ${n}`)))})}).filter(e=>e!==void 0))}function o(e){let n=new Event(`vite:preloadError`,{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e}return i.then(n=>{for(let e of n||[])e.status===`rejected`&&o(e.reason);return e().catch(o)})}})),require___vite_browser_external=__commonJSMin(((e,n)=>{n.exports={}}));function getEmscriptenFsError(e){let n=typeof e==`object`?e?.errno:null;if(n in FileErrorCodes)return FileErrorCodes[n]}function rethrowFileSystemError(e=``){return function(n){return function(...r){try{return n.apply(this,r)}catch(n){let i=typeof n==`object`?n?.errno:null;if(i in FileErrorCodes){let o=FileErrorCodes[i],s=typeof r[1]==`string`?r[1]:null,l=s===null?e:e.replaceAll(`{path}`,s);throw new ErrnoError(i,`${l}: ${o}`,{cause:n})}throw n}}}}function isExitCode(e){return e instanceof Error&&e?.name===`ExitStatus`&&`status`in e}async function loadPHPRuntime(e,...n){let r=Object.assign({},...n),[i,o,s]=makePromise(),l=e.init(currentJsRuntime,{onAbort(e){s(e),M$1.error(e)},ENV:{},locateFile:e=>e,...r,noInitialRun:!0,onRuntimeInitialized(){r.onRuntimeInitialized&&r.onRuntimeInitialized(l),o()}});await i;let N=r.phpWasmAsyncMode??e.phpWasmAsyncMode;N&&(l.phpWasmAsyncMode=N);let ae=++lastRuntimeId;return l.FS,l.id=ae,l.originalExit=l._exit,l._exit=function(e){return l.outboundNetworkProxyServer&&(l.outboundNetworkProxyServer.close(),l.outboundNetworkProxyServer.closeAllConnections()),loadedRuntimes.delete(ae),l.originalExit(e)},l[RuntimeId]=ae,loadedRuntimes.set(ae,l),ae}function popLoadedRuntime(e,{dangerouslyKeepTheRuntimeInTheMap:n=!1}={}){var r;let i=loadedRuntimes.get(e);if(!i)throw Error(`Runtime with id ${e} not found`);if(n){if(!((r=process==null?void 0:{})!=null&&r.TEST))throw Error(`Cannot pop runtime in non-test environment`);return i}return loadedRuntimes.delete(e),i}async function parseHeadersStream(e){let n=await streamToText(e),r;try{r=JSON.parse(n)}catch{return{headers:{},httpStatusCode:200}}let i={};for(let e of r.headers){if(!e.includes(`: `))continue;let n=e.indexOf(`: `),r=e.substring(0,n).toLowerCase(),o=e.substring(n+2);r in i||(i[r]=[]),i[r].push(o)}return{headers:i,httpStatusCode:r.status}}async function streamToText(e){let n=e.pipeThrough(new TextDecoderStream).getReader(),r=[];for(;;){let{done:e,value:i}=await n.read();if(e)return r.join(``);i&&r.push(i)}}async function streamToBytes(e){let n=e.getReader(),r=[];for(;;){let{done:e,value:i}=await n.read();if(e){let e=r.reduce((e,n)=>e+n.byteLength,0),n=new Uint8Array(e),i=0;for(let e of r)n.set(e,i),i+=e.byteLength;return n}i&&r.push(i)}}function improveWASMErrorReporting(e){let n=new UnhandledRejectionsTarget;for(let r in e.wasmExports)if(typeof e.wasmExports[r]==`function`){let i=e.wasmExports[r];e.wasmExports[r]=function(...r){var o;try{return i(...r)}catch(r){if(!(r instanceof Error))throw r;e.lastAsyncifyStackSource&&(r.cause=e.lastAsyncifyStackSource);let i=clarifyErrorMessage(r,e.lastAsyncifyStackSource?.stack);if(n.hasListeners()){r.message=i;let e=new ErrorEvent(`error`,{error:r});throw n.dispatchEvent(e),r}throw(!isExitCode(r)||r.status!==0)&&showCriticalErrorBox(i),r}}}return n}function getFunctionsMaybeMissingFromAsyncify(){return functionsMaybeMissingFromAsyncify}function clarifyErrorMessage(e,n){if(e.message===`unreachable`){let r=UNREACHABLE_ERROR;n||(r+=`

This stack trace is lacking. For a better one initialize 
the PHP runtime with debug: true, e.g. loadNodeRuntime('8.1', { emscriptenOptions: { debug: true } }).

`);let i=new Set(extractPHPFunctionsFromStack(n||``)),o=e;do{for(let e of extractPHPFunctionsFromStack(o.stack||``))i.add(e);o=o.cause}while(o);functionsMaybeMissingFromAsyncify=Array.from(i);for(let e of i)r+=`    * ${e}
`;return r+=`Original error message: ${e.message}
`,r}return e.message}function showCriticalErrorBox(e){if(!logged&&(logged=!0,!(e!=null&&e.trim().startsWith(`Program terminated with exit`)))){M$1.log(`${redBg}
${eol}
${bold}  WASM ERROR${reset}${redBg}`);for(let n of e.split(`
`))M$1.log(`${eol}  ${n} `);M$1.log(`${reset}`)}}function extractPHPFunctionsFromStack(e){try{let n=e.split(`
`).slice(1).map(e=>{let n=e.trim().substring(3).split(` `);return{fn:n.length>=2?n[0]:`<unknown>`,isWasm:e.includes(`wasm:/`)}}).filter(({fn:e,isWasm:n})=>n&&!e.startsWith(`dynCall_`)&&!e.startsWith(`invoke_`)).map(({fn:e})=>e);return Array.from(new Set(n))}catch{return[]}}function normalizeHeaders(e){let n={};for(let r in e)n[r.toLowerCase()]=e[r];return n}function copyMEMFSNodes(e,n,r){if(getNodeType(e,r)!==`memfs`||![`memfs`,`missing`].includes(getNodeType(n,r)))return;let i=e.lookupPath(r,{follow:!1});if(e.isLink(i.node.mode)){let i=e.readlink(r);n.symlink(i,r);return}if(!e.isDir(i.node.mode)){n.writeFile(r,e.readFile(r));return}n.mkdirTree(r);let o=e.readdir(r).filter(e=>e!==`.`&&e!==`..`);for(let i of o)copyMEMFSNodes(e,n,m(r,i))}function snapshotMountPoint(e,n){try{let r=e.lookupPath(n,{follow:!1});return e.isLink(r.node.mode)?{kind:`symlink`,target:e.readlink(n)}:e.isDir(r.node.mode)?{kind:`directory`}:{kind:`file`}}catch{return}}function restoreMountPointSnapshot(e,n,r){if(r&&getNodeType(e,n)===`missing`){if(r.kind===`directory`){e.mkdirTree(n);return}e.mkdirTree(W$1(n)),r.kind===`symlink`?e.symlink(r.target,n):e.writeFile(n,new Uint8Array)}}function isMissingMountSourceError(e){return e.phpWasmMountSourceMissing===!0}function isMissingMountTargetPathError(e){return e.errno===44}async function createInvertedReadableStream(e={}){let n,r=new Promise(e=>{n=e});return{stream:new ReadableStream({...e,start(r){if(n(r),e.start)return e.start(r)}}),controller:await r}}function safeStreamError$1(e,n){try{e.error(n)}catch{}}function safeStreamClose$1(e){try{e.close()}catch{}}async function getPhpIniEntries(e,n){let r=(0,import_ini.parse)(await e.readFileAsText(PHP_INI_PATH));if(n===void 0)return r;let i={};for(let e of n)i[e]=r[e];return i}async function setPhpIniEntries(e,n){let r=(0,import_ini.parse)(await e.readFileAsText(PHP_INI_PATH));for(let[e,i]of Object.entries(n))i==null?delete r[e]:r[e]=i;await e.writeFile(PHP_INI_PATH,(0,import_ini.stringify)(r))}async function withPHPIniValues(e,n,r){let i=await e.readFileAsText(PHP_INI_PATH);try{return await setPhpIniEntries(e,n),await r()}finally{await e.writeFile(PHP_INI_PATH,i)}}async function printDebugDetails(e,n){n&&printResponseDebugDetails(await PHPResponse.fromStreamedResponse(n)),await prettyPrintFullStackTrace(e)}async function prettyPrintFullStackTrace(e){let n=e,r=!0;for(;n;)r||process.stderr.write(`
Caused by:

`),process.stderr.write(n.originalErrorClassName??n.name),process.stderr.write(`: `+n.message+`
`),process.stderr.write((n.stack+``).split(`
`).slice(1).join(`
`)),process.stderr.write(`
`),n.response&&printResponseDebugDetails(n.response),n.phpLogs&&(process.stderr.write(`

==== PHP error log ====

`),process.stderr.write(n.phpLogs)),n=n.cause,r=!1;process.stderr.write(`
`)}function describeError(e,n=new WeakSet,r=0,i={}){return r>10?`[Max error cause depth exceeded]`:e instanceof Error?e.message?e.message:describeErrorObject(e,n,r,{...i,suppressGenericErrorName:!0}):e&&typeof e==`object`?describeErrorObject(e,n,r,i):String(e)}function describeErrorObject(e,n,r,i={}){if(n.has(e))return`[Circular error cause]`;n.add(e);let o=[];if(e.name&&!(i.suppressGenericErrorName&&e.name===`Error`)&&o.push(String(e.name)),e.message&&o.push(String(e.message)),e.errno!==void 0&&o.push(`errno: ${e.errno}`),e.code!==void 0&&o.push(`code: ${e.code}`),e.cause&&o.push(`caused by: ${describeError(e.cause,n,r+1,i)}`),o.length>0)return o.join(` — `);if(typeof e.stack==`string`)return e.stack;try{return JSON.stringify(e)}catch{return String(e)}}function printResponseDebugDetails(e){process.stderr.write(`
    exitCode=${e.exitCode} httpStatusCode=${e.httpStatusCode} `);let n=e.headers&&Object.keys(e.headers).length>0;n||process.stderr.write(`responseHeaders=(empty) `),e.text||process.stderr.write(`stdout=(empty) `),e.errors||process.stderr.write(`stderr=(empty) `),process.stderr.write(`
`),n&&process.stderr.write(`
==== PHP response headers ====

${JSON.stringify(e.headers,null,2)}

`),e.text&&(process.stderr.write(`
==== PHP stdout ====

`),process.stderr.write(e.text)),e.errors&&(process.stderr.write(`
==== PHP stderr ====

`),process.stderr.write(e.errors)),process.stderr.write(`
`)}function streamReadFileFromPHP(e,n){return new ReadableStream({async pull(r){let i=await e.readFileAsBuffer(n);r.enqueue(i),r.close()}})}async function*iteratePhpFiles(e,n,{relativePaths:r=!0,pathPrefix:i,exceptPaths:o=[]}={}){n=c$2(n);let s=[n];for(;s.length;){let l=s.pop();if(!l)return;let N=await e.listFiles(l);for(let ae of N){let N=`${l}/${ae}`;o.includes(N.substring(n.length+1))||(await e.isDir(N)?s.push(N):yield new E$1(streamReadFileFromPHP(e,N),r?m(i||``,N.substring(n.length+1)):N))}}}function writeFilesStreamToPhp(e,n){return new WritableStream({async write(r){let i=m(n,r.name);r.type===`directory`?await e.mkdir(i):(await e.mkdir(W$1(i)),await e.writeFile(i,new Uint8Array(await r.arrayBuffer())))}})}function isPHPNextVersion(e){return e===PHPNextVersion}function isLegacyPHPVersion(e){return LegacyPHPVersions.includes(e??``)}function createLegacyPhpIniPreRunStep(){return e=>{e.FS.mkdirTree(`/internal/shared`),e.FS.writeFile(LEGACY_PHP_INI_PATH,LEGACY_PHP_INI_CONTENT)}}function toRelativeUrl(e){return e.origin===`null`?e.toString():e.toString().substring(e.origin.length)}function removePathPrefix(e,n){return!n||!e.startsWith(n)?e:e.substring(n.length)}function ensurePathPrefix(e,n){return!n||e.startsWith(n)?e:n+e}async function encodeAsMultipart(e){let n=`----${Math.random().toString(36).slice(2)}`,r=`multipart/form-data; boundary=${n}`,i=new TextEncoder,o=[];for(let[r,i]of Object.entries(e))o.push(`--${n}\r
`),o.push(`Content-Disposition: form-data; name="${r}"`),i instanceof File&&o.push(`; filename="${i.name}"`),o.push(`\r
`),i instanceof File&&(o.push(`Content-Type: application/octet-stream`),o.push(`\r
`)),o.push(`\r
`),i instanceof File?o.push(await fileToUint8Array(i)):o.push(i),o.push(`\r
`);o.push(`--${n}--\r
`);let s=o.reduce((e,n)=>e+n.length,0),l=new Uint8Array(s),N=0;for(let e of o)l.set(typeof e==`string`?i.encode(e):e,N),N+=e.length;return{bytes:l,contentType:r}}function fileToUint8Array(e){return e.arrayBuffer().then(e=>new Uint8Array(e))}function inferMimeType(e){let n=e.split(`.`).pop();return mimeTypes[n]||mimeTypes._default}function applyRewriteRules(e,n){for(let r of n)if(new RegExp(r.match).test(e)){e=e.replace(r.match,r.replacement);break}return e}function looksLikeAbsoluteUrl(e){try{return new URL(e),!0}catch{return!1}}function rotatePHPRuntime({php:e,recreateRuntime:n,maxRequests:r=400}){return e.enableRuntimeRotation({recreateRuntime:n,maxRequests:r})}async function writeFiles(e,n,r,{rmRoot:i=!1}={}){let o=resolveFileTree(n,r);i&&await e.isDir(n)&&await e.rmdir(n,{recursive:!0});for(let[n,r]of o)await e.fileExists(W$1(n))||await e.mkdir(W$1(n)),await e.writeFile(n,r)}function resolveFileTree(e,n){return Object.entries(n).flatMap(([n,r])=>{let i=I$3(n,e);if(!i)throw Error(`Invalid file tree path ${JSON.stringify(n)}: it must resolve inside ${JSON.stringify(e)}.`);return r instanceof Uint8Array||typeof r==`string`?[[i,r]]:resolveFileTree(i,r)})}function validate12(e,{instancePath:n=``,parentData:r,parentDataProperty:i,rootData:o=e}={}){let s=null,l=0,N=l,ae=!1,ce=l;if(typeof e!=`string`){let e={instancePath:n,schemaPath:`#/definitions/PHPExtensionIniDirective/type`,keyword:`type`,params:{type:`string`},message:`must be string`};s===null?s=[e]:s.push(e),l++}if(e!==`extension`&&e!==`zend_extension`){let e={instancePath:n,schemaPath:`#/definitions/PHPExtensionIniDirective/enum`,keyword:`enum`,params:{allowedValues:schema14.enum},message:`must be equal to one of the allowed values`};s===null?s=[e]:s.push(e),l++}var ue=ce===l;if(ae||=ue,!ae){let r=l;if(typeof e!=`boolean`){let e={instancePath:n,schemaPath:`#/anyOf/1/type`,keyword:`type`,params:{type:`boolean`},message:`must be boolean`};s===null?s=[e]:s.push(e),l++}if(e!==!1){let e={instancePath:n,schemaPath:`#/anyOf/1/const`,keyword:`const`,params:{allowedValue:!1},message:`must be equal to constant`};s===null?s=[e]:s.push(e),l++}var ue=r===l;ae||=ue}if(ae)l=N,s!==null&&(N?s.length=N:s=null);else{let e={instancePath:n,schemaPath:`#/anyOf`,keyword:`anyOf`,params:{},message:`must match a schema in anyOf`};return s===null?s=[e]:s.push(e),l++,validate12.errors=s,!1}return validate12.errors=s,l===0}function validate11(e,{instancePath:n=``,parentData:r,parentDataProperty:i,rootData:o=e}={}){let s=null,l=0;if(l===0){if(e&&typeof e==`object`&&!Array.isArray(e)){let r;if(e.name===void 0&&(r=`name`)||e.artifacts===void 0&&(r=`artifacts`))return validate11.errors=[{instancePath:n,schemaPath:`#/required`,keyword:`required`,params:{missingProperty:r},message:`must have required property '`+r+`'`}],!1;{let r=l;for(let r in e)if(!func2.call(schema12.properties,r))return validate11.errors=[{instancePath:n,schemaPath:`#/additionalProperties`,keyword:`additionalProperties`,params:{additionalProperty:r},message:`must NOT have additional properties`}],!1;if(r===l){if(e.name!==void 0){let r=l;if(typeof e.name!=`string`)return validate11.errors=[{instancePath:n+`/name`,schemaPath:`#/properties/name/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var N=r===l}else var N=!0;if(N){if(e.version!==void 0){let r=l;if(typeof e.version!=`string`)return validate11.errors=[{instancePath:n+`/version`,schemaPath:`#/properties/version/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var N=r===l}else var N=!0;if(N){if(e.mode!==void 0){let r=e.mode,i=l;if(typeof r!=`string`)return validate11.errors=[{instancePath:n+`/mode`,schemaPath:`#/properties/mode/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;if(r!==`php-extension`)return validate11.errors=[{instancePath:n+`/mode`,schemaPath:`#/properties/mode/const`,keyword:`const`,params:{allowedValue:`php-extension`},message:`must be equal to constant`}],!1;var N=i===l}else var N=!0;if(N){if(e.loadWithIniDirective!==void 0){let r=l;validate12(e.loadWithIniDirective,{instancePath:n+`/loadWithIniDirective`,parentData:e,parentDataProperty:`loadWithIniDirective`,rootData:o})||(s=s===null?validate12.errors:s.concat(validate12.errors),l=s.length);var N=r===l}else var N=!0;if(N){if(e.iniEntries!==void 0){let r=e.iniEntries,i=l;if(l===i){if(r&&typeof r==`object`&&!Array.isArray(r))for(let e in r){let i=l;if(typeof r[e]!=`string`)return validate11.errors=[{instancePath:n+`/iniEntries/`+e.replace(/~/g,`~0`).replace(/\//g,`~1`),schemaPath:`#/properties/iniEntries/additionalProperties/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;if(i!==l)break}else return validate11.errors=[{instancePath:n+`/iniEntries`,schemaPath:`#/properties/iniEntries/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}var N=i===l}else var N=!0;if(N){if(e.env!==void 0){let r=e.env,i=l;if(l===i){if(r&&typeof r==`object`&&!Array.isArray(r))for(let e in r){let i=l;if(typeof r[e]!=`string`)return validate11.errors=[{instancePath:n+`/env/`+e.replace(/~/g,`~0`).replace(/\//g,`~1`),schemaPath:`#/properties/env/additionalProperties/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;if(i!==l)break}else return validate11.errors=[{instancePath:n+`/env`,schemaPath:`#/properties/env/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}var N=i===l}else var N=!0;if(N){if(e.extensionDir!==void 0){let r=l;if(typeof e.extensionDir!=`string`)return validate11.errors=[{instancePath:n+`/extensionDir`,schemaPath:`#/properties/extensionDir/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var N=r===l}else var N=!0;if(N){if(e.artifacts!==void 0){let r=e.artifacts,i=l;if(l===i){if(Array.isArray(r)){var ae=!0;let e=r.length;for(let i=0;i<e;i++){let e=r[i],o=l;if(l===o){if(e&&typeof e==`object`&&!Array.isArray(e)){let r;if(e.phpVersion===void 0&&(r=`phpVersion`)||e.sourcePath===void 0&&(r=`sourcePath`))return validate11.errors=[{instancePath:n+`/artifacts/`+i,schemaPath:`#/properties/artifacts/items/required`,keyword:`required`,params:{missingProperty:r},message:`must have required property '`+r+`'`}],!1;{let r=l;for(let r in e)if(r!==`phpVersion`&&r!==`sourcePath`&&r!==`extraFiles`)return validate11.errors=[{instancePath:n+`/artifacts/`+i,schemaPath:`#/properties/artifacts/items/additionalProperties`,keyword:`additionalProperties`,params:{additionalProperty:r},message:`must NOT have additional properties`}],!1;if(r===l){if(e.phpVersion!==void 0){let r=l;if(typeof e.phpVersion!=`string`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/phpVersion`,schemaPath:`#/properties/artifacts/items/properties/phpVersion/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var ce=r===l}else var ce=!0;if(ce){if(e.sourcePath!==void 0){let r=l;if(typeof e.sourcePath!=`string`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/sourcePath`,schemaPath:`#/properties/artifacts/items/properties/sourcePath/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var ce=r===l}else var ce=!0;if(ce){if(e.extraFiles!==void 0){let r=e.extraFiles,o=l;if(l===l){if(r&&typeof r==`object`&&!Array.isArray(r)){let e=l;for(let e in r)if(e!==`vfsRoot`&&e!==`nodes`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/additionalProperties`,keyword:`additionalProperties`,params:{additionalProperty:e},message:`must NOT have additional properties`}],!1;if(e===l){if(r.vfsRoot!==void 0){let e=l;if(typeof r.vfsRoot!=`string`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/vfsRoot`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/vfsRoot/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var ue=e===l}else var ue=!0;if(ue){if(r.nodes!==void 0){let e=r.nodes,o=l;if(l===o){if(Array.isArray(e)){var he=!0;let r=e.length;for(let o=0;o<r;o++){let r=e[o],s=l;if(l===s){if(r&&typeof r==`object`&&!Array.isArray(r)){let e;if(r.vfsPath===void 0&&(e=`vfsPath`))return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes/`+o,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/required`,keyword:`required`,params:{missingProperty:e},message:`must have required property '`+e+`'`}],!1;{let e=l;for(let e in r)if(e!==`vfsPath`&&e!==`type`&&e!==`sourcePath`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes/`+o,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/additionalProperties`,keyword:`additionalProperties`,params:{additionalProperty:e},message:`must NOT have additional properties`}],!1;if(e===l){if(r.vfsPath!==void 0){let e=l;if(typeof r.vfsPath!=`string`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes/`+o+`/vfsPath`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/vfsPath/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var Ce=e===l}else var Ce=!0;if(Ce){if(r.type!==void 0){let e=r.type,s=l;if(typeof e!=`string`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes/`+o+`/type`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/type/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;if(e!==`file`&&e!==`directory`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes/`+o+`/type`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/type/enum`,keyword:`enum`,params:{allowedValues:schema15.properties.nodes.items.properties.type.enum},message:`must be equal to one of the allowed values`}],!1;var Ce=s===l}else var Ce=!0;if(Ce){if(r.sourcePath!==void 0){let e=l;if(typeof r.sourcePath!=`string`)return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes/`+o+`/sourcePath`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/sourcePath/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var Ce=e===l}else var Ce=!0}}}}}else return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes/`+o,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}if(s!==l)break}}else return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles/nodes`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/type`,keyword:`type`,params:{type:`array`},message:`must be array`}],!1}var ue=o===l}else var ue=!0}}}else return validate11.errors=[{instancePath:n+`/artifacts/`+i+`/extraFiles`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}var ce=o===l}else var ce=!0}}}}}else return validate11.errors=[{instancePath:n+`/artifacts/`+i,schemaPath:`#/properties/artifacts/items/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}if(o!==l)break}}else return validate11.errors=[{instancePath:n+`/artifacts`,schemaPath:`#/properties/artifacts/type`,keyword:`type`,params:{type:`array`},message:`must be array`}],!1}var N=i===l}else var N=!0;if(N){if(e.extraFiles!==void 0){let r=e.extraFiles,i=l;if(l===l){if(r&&typeof r==`object`&&!Array.isArray(r)){let e=l;for(let e in r)if(e!==`vfsRoot`&&e!==`nodes`)return validate11.errors=[{instancePath:n+`/extraFiles`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/additionalProperties`,keyword:`additionalProperties`,params:{additionalProperty:e},message:`must NOT have additional properties`}],!1;if(e===l){if(r.vfsRoot!==void 0){let e=l;if(typeof r.vfsRoot!=`string`)return validate11.errors=[{instancePath:n+`/extraFiles/vfsRoot`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/vfsRoot/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var De=e===l}else var De=!0;if(De){if(r.nodes!==void 0){let e=r.nodes,i=l;if(l===i){if(Array.isArray(e)){var Oe=!0;let r=e.length;for(let i=0;i<r;i++){let r=e[i],o=l;if(l===o){if(r&&typeof r==`object`&&!Array.isArray(r)){let e;if(r.vfsPath===void 0&&(e=`vfsPath`))return validate11.errors=[{instancePath:n+`/extraFiles/nodes/`+i,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/required`,keyword:`required`,params:{missingProperty:e},message:`must have required property '`+e+`'`}],!1;{let e=l;for(let e in r)if(e!==`vfsPath`&&e!==`type`&&e!==`sourcePath`)return validate11.errors=[{instancePath:n+`/extraFiles/nodes/`+i,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/additionalProperties`,keyword:`additionalProperties`,params:{additionalProperty:e},message:`must NOT have additional properties`}],!1;if(e===l){if(r.vfsPath!==void 0){let e=l;if(typeof r.vfsPath!=`string`)return validate11.errors=[{instancePath:n+`/extraFiles/nodes/`+i+`/vfsPath`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/vfsPath/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var Ne=e===l}else var Ne=!0;if(Ne){if(r.type!==void 0){let e=r.type,o=l;if(typeof e!=`string`)return validate11.errors=[{instancePath:n+`/extraFiles/nodes/`+i+`/type`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/type/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;if(e!==`file`&&e!==`directory`)return validate11.errors=[{instancePath:n+`/extraFiles/nodes/`+i+`/type`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/type/enum`,keyword:`enum`,params:{allowedValues:schema15.properties.nodes.items.properties.type.enum},message:`must be equal to one of the allowed values`}],!1;var Ne=o===l}else var Ne=!0;if(Ne){if(r.sourcePath!==void 0){let e=l;if(typeof r.sourcePath!=`string`)return validate11.errors=[{instancePath:n+`/extraFiles/nodes/`+i+`/sourcePath`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/properties/sourcePath/type`,keyword:`type`,params:{type:`string`},message:`must be string`}],!1;var Ne=e===l}else var Ne=!0}}}}}else return validate11.errors=[{instancePath:n+`/extraFiles/nodes/`+i,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/items/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}if(o!==l)break}}else return validate11.errors=[{instancePath:n+`/extraFiles/nodes`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/properties/nodes/type`,keyword:`type`,params:{type:`array`},message:`must be array`}],!1}var De=i===l}else var De=!0}}}else return validate11.errors=[{instancePath:n+`/extraFiles`,schemaPath:`#/definitions/PHPExtensionManifestExtraFiles/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}var N=i===l}else var N=!0}}}}}}}}}}}else return validate11.errors=[{instancePath:n,schemaPath:`#/type`,keyword:`type`,params:{type:`object`},message:`must be object`}],!1}return validate11.errors=s,l===0}function validate10(e,{instancePath:n=``,parentData:r,parentDataProperty:i,rootData:o=e}={}){let s=null,l=0;return validate11(e,{instancePath:n,parentData:r,parentDataProperty:i,rootData:o})||(s=s===null?validate11.errors:s.concat(validate11.errors),l=s.length),validate10.errors=s,l===0}async function resolvePHPExtension(e){let n=e.fetch??globalThis.fetch,r=e.source,i=e.name,o,s={},l=[],N,ae,ce,ue;if(r.format===`so`){if(i||=r.name,!i)throw Error(`name is required when loading an extension from direct bytes.`);o=toUint8Array(r.bytes)}else if(r.format===`url`){let e;try{e=new URL(String(r.url))}catch{throw Error(`source.url must be an absolute URL when loading a PHP extension from a direct URL. Received: ${String(r.url)}`)}if(i||=r.name,!i&&e.pathname.endsWith(`.so`)&&(i=j$1(e.pathname).slice(0,-3)),!i)throw Error(`name is required when loading an extension from a direct URL.`);o=await fetchBytes(n,e)}else{let he,Ce;if(`manifest`in r?(he=r.manifest,r.baseUrl&&(Ce=new URL(String(r.baseUrl)))):(Ce=new URL(String(r.manifestUrl)),he=await(await n(Ce)).json()),!validate10(he))throw Error(`Invalid PHP extension manifest: ${JSON.stringify(validate10.errors)}`);let De=he;if(!Ce)throw Error(`Manifest artifacts require a manifest URL or baseUrl so relative files can be resolved.`);let Oe=De.artifacts.find(n=>n.phpVersion===e.phpVersion);if(!Oe)throw Error(`No extension artifact found for PHP ${e.phpVersion}.`);i??=De.name,N=De.loadWithIniDirective,ae=De.iniEntries,ce=De.env,ue=De.extensionDir;let Ne=new v$1({concurrency:MAX_EXTENSION_SIDECAR_FILE_REQUESTS}),Be=[];for(let e of[De.extraFiles,Oe.extraFiles])for(let r of e?.nodes??[]){let i=m(e.vfsRoot??``,r.vfsPath);if(r.type===`directory`){l.push(i);continue}if(!r.sourcePath)continue;let o=new URL(r.sourcePath,Ce);Be.push(Ne.run(()=>fetchBytes(n,o)).then(e=>{s[i]=e}))}let[Ue]=await Promise.all([fetchBytes(n,new URL(Oe.sourcePath,Ce)),...Be]);o=Ue}let he=c$2(e.extensionDir??ue??`/internal/shared/extensions`);e.extraFiles&&(Object.assign(s,e.extraFiles.files),l.push(...e.extraFiles.directories??[]));let Ce=e.loadWithIniDirective??N??`extension`,De={...ae,...e.iniEntries},Oe=m(he,`${i}.so`),Ne=createPHPExtensionIniFile({directive:Ce,extensionDir:he,name:i,soPath:Oe,iniEntries:De}),Be={...ce,...e.env};return{soPath:Oe,soBytes:o,...Ne,extraFiles:{files:s,directories:l},env:Object.keys(Be).length?Be:void 0,extensionDir:he}}function withResolvedPHPExtensions(e,n){var r;if(!n.length)return e;let i={...e.ENV};for(let e of n){if(Object.assign(i,e.env),!e.iniPath)continue;let n=i.PHP_INI_SCAN_DIR?.split(`:`)??[];n.includes(e.extensionDir)||(n.push(e.extensionDir),i.PHP_INI_SCAN_DIR=n.join(`:`))}let o=e.preRun??[];return{...e,ENV:i,preRun:[...o,e=>{for(let r of n)installPHPExtensionFilesSync(e.FS,r)}]}}function installPHPExtensionFilesSync(e,n){let r;if(`soPath`in n)r=n;else{let e=n.extensionDir??`/internal/shared/extensions`,i=n.loadWithIniDirective??`extension`,o=m(e,`${n.name}.so`),s=createPHPExtensionIniFile({directive:i,extensionDir:e,name:n.name,soPath:o,iniEntries:n.iniEntries});r={soPath:o,soBytes:toUint8Array(n.soBytes),...s,extraFiles:n.extraFiles,env:n.env,extensionDir:e}}if(mkdirIfMissing(e,r.extensionDir),e.writeFile(r.soPath,r.soBytes),r.iniPath&&r.iniContent!==void 0&&e.writeFile(r.iniPath,r.iniContent),r.extraFiles){let{directories:n=[],files:i}=r.extraFiles;for(let r of n)mkdirIfMissing(e,r);for(let[n,r]of Object.entries(i))mkdirIfMissing(e,W$1(n)),e.writeFile(n,r)}return r}function createPHPExtensionIniFile(e){if(e.directive===!1)return{};let n=[`${e.directive}=${e.soPath}`,...Object.entries(e.iniEntries??{}).map(([e,n])=>`${e}=${n}`)];return{iniPath:m(e.extensionDir,`${e.name}.ini`),iniContent:n.join(`
`)}}function mkdirIfMissing(e,n){FSHelpers.fileExists(e,n)||e.mkdirTree(n)}async function fetchBytes(e,n){let r=await e(n);if(!r.ok)throw Error(`Failed to fetch ${String(n)}: ${r.status}`);return new Uint8Array(await r.arrayBuffer())}function toUint8Array(e){return e instanceof Uint8Array?e:new Uint8Array(e)}function isLegacyPhpInstance(e){var n;let r=e[Object.getOwnPropertySymbols(e)[0]]?.phpVersion?.major;return typeof r==`number`&&r<7}function ensureProxyFSHasMmapSupport(e){let n=e[Object.getOwnPropertySymbols(e)[0]],r=n.PROXYFS,i=n.FS;r.stream_ops.mmap||(r.stream_ops.mmap=function(e,r,o,s,l){if(!i.isFile(e.node.mode))throw new i.ErrnoError(19);if(o!==0)throw new i.ErrnoError(22);let N=n.malloc(r);if(!N)throw new i.ErrnoError(48);let ae=n.HEAPU8.subarray(N,N+r),ce=0;for(;ce<r;){let n=e.stream_ops.read(e,ae,ce,r-ce,ce);if(n<=0)break;ce+=n}if(ce!==r)throw n.free(N),new i.ErrnoError(5);return{ptr:N,allocated:!0}},r.stream_ops.msync=function(e,n,r,i,o){return o&2||e.stream_ops.write(e,n,r,i,r,!1),0})}async function proxyFileSystem(e,n,r){let i=isLegacyPhpInstance(n),o=Object.getOwnPropertySymbols(e)[0];for(let s of r)e.fileExists(s)||e.mkdir(s),n.mkdir(s),await n.mount(s,n=>{i||ensureProxyFSHasMmapSupport(n);let r=Object.getOwnPropertySymbols(n)[0];return n[r].FS.mount(n[r].PROXYFS,{root:s,fs:e[o].FS},s),()=>{try{n[r].FS.unmount(s)}catch{}}});n.addEventListener(`request.end`,()=>{e.dispatchEvent({type:`proxyfs.request.end`})})}function isPathToSharedFS(e,n){var r;return e[Object.getOwnPropertySymbols(e)[0]].FS.lookupPath(n,{noent_okay:!0})?.node?.isSharedFS??!1}function sandboxedSpawnHandlerFactory(e){return S$1(async function(n,r,i){r.notifySpawn(),n?.[0]===`/bin/sh`&&n?.[1]===`-c`&&typeof n[2]==`string`&&(n=x$2(n[2])),n[0]===`exec`&&n.shift(),(n[0].endsWith(`.php`)||n[0].endsWith(`.phar`))&&n.unshift(`php`);let o=n[0].split(`/`).pop();if(n[0]===`/usr/bin/env`&&n[1]===`stty`&&n[2]===`size`)r.stdout(`18 140`),r.exit(0);else if(o===`tput`&&n[1]===`cols`)r.stdout(`140`),r.exit(0);else if(o===`less`){r.on(`stdin`,e=>{r.stdout(e)}),await new Promise(e=>{r.childProcess.stdin.on(`finish`,()=>{e(!0)})}),r.exit(0);return}if(![`php`,`ls`,`pwd`].includes(o??``)){r.exit(127);return}if(!e){M$1.warn(`Tried to spawn a PHP subprocess, but the sandboxed spawn handler was created without a getPHPInstance function.`),r.exit(127);return}let{php:s,reap:l}=await e();try{i.cwd&&await s.chdir(i.cwd);let e=await s.cwd();switch(o){case`php`:{let e=await s.cli(n,{env:{...i.env,SCRIPT_PATH:n[1],SHELL_PIPE:`0`}});e.stdout.pipeTo(new WritableStream({write(e){r.stdout(e)}})),e.stderr.pipeTo(new WritableStream({write(e){r.stderr(e)}})),r.exit(await e.exitCode);break}case`ls`:{let i=await s.listFiles(n[1]??e);for(let e of i)r.stdout(e+`
`);await new Promise(e=>setTimeout(e,10)),r.exit(0);break}case`pwd`:r.stdout(e+`
`),await new Promise(e=>setTimeout(e,10)),r.exit(0)}}catch(e){let n=e instanceof Error?e.message+`
`+e.stack:typeof e==`object`&&e?JSON.stringify(e,Object.getOwnPropertyNames(e)):String(e);throw r.stderr(`[spawn error] ${n}`),r.exit(1),e}finally{l()}})}function exposeSync(e,n,r,i=[`*`]){return expose(e,n,i,r.afterResponseSent)}function createSyncProxy(e,n=[],r){return new Proxy(()=>{},{get(i,o){return o===`then`&&!n.length?{then:(n,i)=>i(createSyncProxy(e,[],r))}:createSyncProxy(e,[...n,o],r)},set(i,o,s){let[l,N]=toWireValue(s);return r.send(e,{type:MessageType.SET,path:[...n,o].map(String),value:l},N),!0},apply(i,o,s){if(n.at(-1)===`bind`)return createSyncProxy(e,n.slice(0,-1),r);let[l,N]=processArguments(s);return fromWireValue(r.send(e,{type:MessageType.APPLY,path:n.map(String),argumentList:l},N))},construct(i,o){let[s,l]=processArguments(o);return fromWireValue(r.send(e,{type:MessageType.CONSTRUCT,path:n.map(String),argumentList:s},l))}})}function wrapSync(e,n){return createSyncProxy(e,[],n)}function isAllowedOrigin(e,n){for(let r of e)if(n===r||r===`*`||r instanceof RegExp&&r.test(n))return!0;return!1}function expose(e,n=globalThis,r=[`*`],i){n.addEventListener(`message`,function o(s){if(!s||!s.data)return;if(!isAllowedOrigin(r,s.origin)){console.warn(`Invalid origin '${s.origin}' for comlink proxy`);return}let{id:l,type:N,path:ae}={path:[],...s.data},ce=(s.data.argumentList||[]).map(fromWireValue),ue;try{let n=ae.slice(0,-1).reduce((e,n)=>e[n],e),r=ae.reduce((e,n)=>e[n],e);switch(N){case MessageType.GET:ue=r;break;case MessageType.SET:n[ae.slice(-1)[0]]=fromWireValue(s.data.value),ue=!0;break;case MessageType.APPLY:ue=r.apply(n,ce);break;case MessageType.CONSTRUCT:ue=proxy(new r(...ce));break;case MessageType.ENDPOINT:{let{port1:n,port2:r}=new MessageChannel;expose(e,r),ue=transfer(n,[n])}break;case MessageType.RELEASE:ue=void 0;break;default:return}}catch(e){ue={value:e,[throwMarker]:0}}Promise.resolve(ue).catch(e=>({value:e,[throwMarker]:0})).then(r=>{let[i,s]=toWireValue(r);n.postMessage({...i,id:l},s),N===MessageType.RELEASE&&(n.removeEventListener(`message`,o),closeEndPoint(n),finalizer in e&&typeof e[finalizer]==`function`&&e[finalizer]())}).catch(()=>{let[e,r]=toWireValue({value:TypeError(`Unserializable return value`),[throwMarker]:0});n.postMessage({...e,id:l},r)}).finally(()=>{i?.(s)})}),n.start&&n.start()}function isMessagePort(e){return e.constructor.name===`MessagePort`}function closeEndPoint(e){isMessagePort(e)&&e.close()}function wrap(e,n){let r=new Map;return e.addEventListener(`message`,function(e){let{data:n}=e;if(!n||!n.id)return;let i=r.get(n.id);if(i)try{i(n)}finally{r.delete(n.id)}}),createProxy(e,r,[],n)}function throwIfProxyReleased(e){if(e)throw Error(`Proxy has been released and is not useable`)}function releaseEndpoint(e){return requestResponseMessage(e,new Map,{type:MessageType.RELEASE}).then(()=>{closeEndPoint(e)})}function registerProxy(e,n){let r=(proxyCounter.get(n)||0)+1;proxyCounter.set(n,r),proxyFinalizers&&proxyFinalizers.register(e,n,e)}function unregisterProxy(e){proxyFinalizers&&proxyFinalizers.unregister(e)}function createProxy(e,n,r=[],i=function(){}){let o=!1,s=new Proxy(i,{get(i,l){if(throwIfProxyReleased(o),l===releaseProxy)return()=>{unregisterProxy(s),releaseEndpoint(e),n.clear(),o=!0};if(l===`then`){if(r.length===0)return{then:()=>s};let i=requestResponseMessage(e,n,{type:MessageType.GET,path:r.map(e=>e.toString())}).then(fromWireValue);return i.then.bind(i)}return createProxy(e,n,[...r,l])},set(i,s,l){throwIfProxyReleased(o);let[N,ae]=toWireValue(l);return requestResponseMessage(e,n,{type:MessageType.SET,path:[...r,s].map(e=>e.toString()),value:N},ae).then(fromWireValue)},apply(i,s,l){throwIfProxyReleased(o);let N=r[r.length-1];if(N===createEndpoint)return requestResponseMessage(e,n,{type:MessageType.ENDPOINT}).then(fromWireValue);if(N===`bind`)return createProxy(e,n,r.slice(0,-1));let[ae,ce]=processArguments(l);return requestResponseMessage(e,n,{type:MessageType.APPLY,path:r.map(e=>e.toString()),argumentList:ae},ce).then(fromWireValue)},construct(i,s){throwIfProxyReleased(o);let[l,N]=processArguments(s);return requestResponseMessage(e,n,{type:MessageType.CONSTRUCT,path:r.map(e=>e.toString()),argumentList:l},N).then(fromWireValue)}});return registerProxy(s,e),s}function myFlat(e){return Array.prototype.concat.apply([],e)}function processArguments(e){let n=e.map(toWireValue);return[n.map(e=>e[0]),myFlat(n.map(e=>e[1]))]}function transfer(e,n){return transferCache.set(e,n),e}function proxy(e){return Object.assign(e,{[proxyMarker]:!0})}function windowEndpoint(e,n=globalThis,r=`*`){return{postMessage:(n,i)=>e.postMessage(n,r,i),addEventListener:n.addEventListener.bind(n),removeEventListener:n.removeEventListener.bind(n)}}function toWireValue(e){for(let[n,r]of transferHandlers)if(r.canHandle(e)){let[i,o]=r.serialize(e);return[{type:WireValueType.HANDLER,name:n,value:i},o]}return[{type:WireValueType.RAW,value:e},transferCache.get(e)||[]]}function fromWireValue(e){switch(e.type){case WireValueType.HANDLER:return transferHandlers.get(e.name).deserialize(e.value);case WireValueType.RAW:return e.value}}function requestResponseMessage(e,n,r,i){return new Promise(o=>{let s=generateUUID();n.set(s,o),e.start&&e.start(),e.postMessage({id:s,...r},i)})}function generateUUID(){return[,,,,].fill(0).map(()=>Math.floor(Math.random()*(2**53-1)).toString(16)).join(`-`)}function nodeEndpoint(e){let n=new WeakMap;return{postMessage:e.postMessage.bind(e),addEventListener:(r,i)=>{let o=e=>{`handleEvent`in i?i.handleEvent({data:e}):i({data:e})};e.on(`message`,o),n.set(i,o)},removeEventListener:(r,i)=>{let o=n.get(i);o&&(e.off(`message`,o),n.delete(i))},start:e.start&&e.start.bind(e)}}function nodeProcessEndpoint(e){let n=e||process;if(typeof n.send!=`function`)throw Error(`IPC channel is not available. Did you forget to fork the process?`);let r=n;return{postMessage(e,n){var i;if(n&&n.length>0)throw Error(`Transferable objects are not supported for nodeProcessEndpoint`);(i=r.send)==null||i.call(r,e)},addEventListener(e,n){let i=typeof n==`function`?e=>n({data:e}):e=>n.handleEvent({data:e});proxyByListener.set(n,i),r.addListener(e,i)},removeEventListener(e,n){let i=proxyByListener.get(n);i&&(proxyByListener.delete(n),r.removeListener(e,i))},start(){}}}function serializeError(e,n={}){let{maxDepth:r=1/0,useToJSON:i=!0}=n;return typeof e==`object`&&e?destroyCircular({from:e,seen:[],forceEnumerable:!0,maxDepth:r,depth:0,useToJSON:i,serialize:!0}):typeof e==`function`?`[Function: ${e.name||`anonymous`}]`:e}function deserializeError(e,n={}){let{maxDepth:r=1/0}=n;return e instanceof Error?e:isMinimumViableSerializedError(e)?destroyCircular({from:e,seen:[],to:newError(e.name),maxDepth:r,depth:0,serialize:!1}):new NonError(e)}function isErrorLike(e){return!!e&&typeof e==`object`&&typeof e.name==`string`&&typeof e.message==`string`&&typeof e.stack==`string`}function isMinimumViableSerializedError(e){return!!e&&typeof e==`object`&&typeof e.message==`string`&&!Array.isArray(e)}async function consumeAPISync(e){return setupTransferHandlers(),wrapSync(e,await NodeSABSyncReceiveMessageTransport.create())}function consumeAPI(e,n=void 0){setupTransferHandlers();let r;if(typeof process<`u`&&typeof process.versions<`u`&&typeof process.versions.node<`u`){if(`postMessage`in e)r=nodeEndpoint(e);else if(`send`in e&&`addListener`in e)r=nodeProcessEndpoint(e);else throw Error(`consumeAPI: remote does not look like a Worker, MessagePort, or Process`)}else r=e instanceof Worker?e:deferredEndpoint(connectWindowApiThroughMessagePort(wrap(windowEndpoint(e,n))));let i=wrap(r),o=proxyClone(i);return new Proxy(o,{get:(e,n)=>n===`isConnected`?async()=>{for(;;)try{await runWithTimeout(i.isConnected(),200);break}catch{}}:i[n]})}async function connectWindowApiThroughMessagePort(e){for(;;)try{return await runWithTimeout(e.isConnected(),200),await e[createEndpoint]()}catch{}}function deferredEndpoint(e){let n,r=!1,i=[],o=[];return e.then(e=>{n=e;for(let{type:e,listener:r,options:o}of i)n.addEventListener(e,r,o);r&&n.start();for(let{message:e,transfer:r}of o)r?n.postMessage(e,r):n.postMessage(e);o.length=0}),{postMessage(e,r){n?r?n.postMessage(e,r):n.postMessage(e):o.push({message:e,transfer:r})},addEventListener(e,r,o){n?n.addEventListener(e,r,o):i.push({type:e,listener:r,options:o})},removeEventListener(e,r,o){if(n){n.removeEventListener(e,r,o);return}let s=i.findIndex(n=>n.type===e&&n.listener===r&&n.options===o);s!==-1&&i.splice(s,1)},start(){n?n.start():r=!0}}}async function runWithTimeout(e,n){return new Promise((r,i)=>{let o=setTimeout(i,n);e.then(e=>{clearTimeout(o),r(e)},e=>{clearTimeout(o),i(e)})})}function exposeAPI(e,n,r){let{setReady:i,setFailed:o,exposedApi:s}=prepareForExpose(e,n),l;if(r){if(`addEventListener`in r)l=r;else if(`postMessage`in r)l=nodeEndpoint(r);else if(`send`in r&&`addListener`in r)l=nodeProcessEndpoint(r);else throw Error(`exposeAPI: targetWorker does not look like a Worker, MessagePort, or Process`)}else l=typeof window<`u`?windowEndpoint(self.parent):void 0;return expose(s,l),[i,o,s]}async function exposeSyncAPI(e,n){let{setReady:r,setFailed:i,exposedApi:o}=prepareForExpose(e),s=await NodeSABSyncReceiveMessageTransport.create();return exposeSync(o,nodeEndpoint(n),s),[r,i,o]}function prepareForExpose(e,n){setupTransferHandlers();let r=Promise.resolve(),i,o,s=new Promise((e,n)=>{i=e,o=n}),l=proxyClone(e),N=new Proxy(l,{get:(e,i)=>i===`isConnected`?()=>r:i===`isReady`?()=>s:i in e?e[i]:n?.[i]});return{setReady:i,setFailed:o,exposedApi:N}}function setupTransferHandlers(){if(isTransferHandlersSetup)return;isTransferHandlersSetup=!0,transferHandlers.set(`EVENT`,{canHandle:e=>e instanceof CustomEvent,serialize:e=>[{detail:e.detail},[]],deserialize:e=>e}),transferHandlers.set(`FUNCTION`,{canHandle:e=>typeof e==`function`,serialize(e){let{port1:n,port2:r}=new MessageChannel;return expose(e,n),[r,[r]]},deserialize(e){return e.start(),wrap(e)}}),transferHandlers.set(`MESSAGE_PORT`,{canHandle:e=>e instanceof MessagePort,serialize(e){return[e,[e]]},deserialize(e){return e}});let e={canHandle:e=>typeof ReadableStream<`u`&&e instanceof ReadableStream,serialize(e){if(supportsTransferableStreams())return[{stream:e},[e]];let n=streamToPort(e);return[{port:n},[n]]},deserialize(e){return e.stream||portToStream(e.port)}};transferHandlers.set(`READABLE_STREAM`,e),transferHandlers.set(`EVENT_WITH_READABLE_STDIN`,{canHandle:n=>typeof n==`object`&&!!n&&A$3 in n&&n[A$3]===!0&&`type`in n&&typeof n.type==`string`&&`stdin`in n&&e.canHandle(n.stdin),serialize(n){let[r,i]=e.serialize(n.stdin);return[{...n,stdin:r},i]},deserialize(n){return{...n,stdin:e.deserialize(n.stdin),[A$3]:!0}}}),transferHandlers.set(`PHPResponse`,{canHandle:e=>typeof e==`object`&&!!e&&`headers`in e&&`bytes`in e&&`errors`in e&&`exitCode`in e&&`httpStatusCode`in e,serialize(e){let n=e.toRawData(),r=[];return n.bytes.buffer.byteLength>0&&r.push(n.bytes.buffer),[n,r]},deserialize(e){return PHPResponse.fromRawData(e)}});let n=transferHandlers.get(`throw`),r=n?.serialize;n.serialize=({value:e})=>{let n=r({value:e});return e.response&&(n[0].value.response=e.response),e.source&&(n[0].value.source=e.source),n},transferHandlers.set(`StreamedPHPResponse`,{canHandle:e=>e instanceof StreamedPHPResponse,serialize(e){let n=supportsTransferableStreams(),r=promiseToPort(e.exitCode),i=e.getHeadersStream();if(n)return[{__type:`StreamedPHPResponse`,headers:i,stdout:e.stdout,stderr:e.stderr,exitCodePort:r},[i,e.stdout,e.stderr,r]];let o=streamToPort(i),s=streamToPort(e.stdout),l=streamToPort(e.stderr);return[{__type:`StreamedPHPResponse`,headersPort:o,stdoutPort:s,stderrPort:l,exitCodePort:r},[o,s,l,r]]},deserialize(e){if(e.headers&&e.stdout&&e.stderr){let n=portToPromise(e.exitCodePort);return new StreamedPHPResponse(e.headers,e.stdout,e.stderr,n)}let n=portToStream(e.headersPort),r=portToStream(e.stdoutPort),i=portToStream(e.stderrPort),o=portToPromise(e.exitCodePort);return new StreamedPHPResponse(n,r,i,o)}})}function supportsTransferableStreams(){if(typeof ReadableStream>`u`&&(_cachedSupportsTransferableStreams=!1),_cachedSupportsTransferableStreams===void 0)try{let{port1:e}=new MessageChannel,n=new ReadableStream;e.postMessage(n,[n]);try{e.close()}catch{}_cachedSupportsTransferableStreams=!0}catch{_cachedSupportsTransferableStreams=!1}return _cachedSupportsTransferableStreams}function streamToPort(e){let{port1:n,port2:r}=new MessageChannel,i=e.getReader(),o=e=>{var n;e.data?.t===`cancel`&&i.cancel().catch(()=>{})};return n.addEventListener(`message`,o),n.start(),(async()=>{try{for(;;){let{done:e,value:r}=await i.read();if(e){try{n.postMessage({t:`close`})}catch{}try{n.close()}catch{}break}if(r){let e=r.slice(),i=e.buffer;try{n.postMessage({t:`chunk`,b:i},[i])}catch{n.postMessage({t:`chunk`,b:e.buffer.slice(0)})}}}}catch(e){try{n.postMessage({t:`error`,m:e?.message||String(e)})}catch{}}finally{n.removeEventListener(`message`,o);try{n.close()}catch{}}})(),r}function portToStream(e){return new ReadableStream({start(n){let r=e=>{let r=e.data;if(r)switch(r.t){case`chunk`:try{n.enqueue(new Uint8Array(r.b))}catch{i()}break;case`close`:safeStreamClose(n),i();break;case`error`:safeStreamError(n,Error(r.m||`Stream error`)),i()}},i=()=>{var n;try{(n=e.removeEventListener)==null||n.call(e,`message`,r)}catch{}try{e.onmessage=null}catch{}try{e.close()}catch{}};e.addEventListener?e.addEventListener(`message`,r):e.on?e.on(`message`,e=>r({data:e})):e.onmessage=r,typeof e.start==`function`&&e.start()},cancel(){try{e.postMessage({t:`cancel`})}catch{}try{e.close()}catch{}}})}function promiseToPort(e){let{port1:n,port2:r}=new MessageChannel;return e.then(e=>{try{n.postMessage({t:`resolve`,v:e})}catch{}}).catch(e=>{try{n.postMessage({t:`reject`,m:e?.message||String(e)})}catch{}}).finally(()=>{try{n.close()}catch{}}),r}function portToPromise(e){return new Promise((n,r)=>{let i=e=>{let i=e.data;i&&(i.t===`resolve`?(o(),n(i.v)):i.t===`reject`&&(o(),r(Error(i.m||``))))},o=()=>{var n;try{(n=e.removeEventListener)==null||n.call(e,`message`,i)}catch{}try{e.onmessage=null}catch{}try{e.close()}catch{}};e.addEventListener?e.addEventListener(`message`,i):e.on?e.on(`message`,e=>i({data:e})):e.onmessage=i,typeof e.start==`function`&&e.start()})}function proxyClone(e){return new Proxy(e,{get(e,n){switch(typeof e[n]){case`function`:return(...r)=>e[n](...r);case`object`:return e[n]===null?e[n]:proxyClone(e[n]);case`undefined`:case`number`:case`string`:return e[n];default:return proxy(e[n])}}})}function safeStreamError(e,n){try{e.error(n)}catch{}}function safeStreamClose(e){try{e.close()}catch{}}function createObjectPoolProxy(e){if(e.length===0)throw Error(`At least one instance is required`);let n=[...e],r=[];function i(){let e=n.shift();return e===void 0?new Promise(e=>{r.push(e)}):Promise.resolve(e)}function o(e){let i=r.shift();i?i(e):n.push(e)}function s(e){return i().then(n=>{let r=e=>{let r=e?.finished;return r&&typeof r.then==`function`?Promise.resolve(r).then(()=>o(n),()=>o(n)):o(n),e},i;try{i=e(n)}catch(e){throw o(n),e}return i!=null&&typeof i.then==`function`?i.then(e=>r(e),e=>{throw o(n),e}):r(i)})}return new Proxy({},{get(e,n){if(n in e)return e[n];if(n!==`then`)return new Proxy(function(){},{apply(e,r,i){return s(e=>e[n](...i))},get(e,r){if(r===`then`)return(e,r)=>s(e=>e[n]).then(e,r)}})}})}var import_ini,ve,me$1,u$1,_,x$1,v,ErrnoError,FileErrorCodes,FSHelpers,_private,D$1,Y$1,PHPWorker,RuntimeId,loadedRuntimes,lastRuntimeId,currentJsRuntime,makePromise,responseTexts,re$1,se$1,de$1,StreamedPHPResponse,PHPResponse,_a,kError,kMessage,ErrorEvent2,ErrorEvent,UnhandledRejectionsTarget,functionsMaybeMissingFromAsyncify,UNREACHABLE_ERROR,redBg,bold,reset,eol,logged,STRING,NUMBER,__private__dont__use,PHPExecutionFailureError,MountStillActiveError,PHP_INI_PATH,AUTO_PREPEND_SCRIPT,OPCACHE_FILE_FOLDER,Q$1,z,G$1,j,J,$,K$1,ne$1,k$1,y$1,ye$1,Ee$1,xe,Se,ke,Fe,be,Re,He$1,ge$1,Te$1,Pe,we$1,PHP,getNodeType,HttpCookieStore,SinglePHPInstanceManager,MaxPhpInstancesError,PHPProcessManager,PHPNextVersion,SupportedPHPVersions,LatestSupportedPHPVersion,SupportedPHPVersionsList,LegacyPHPVersions,AllPHPVersions,LEGACY_PHP_INI_PATH,LEGACY_PHP_INI_CONTENT,DEFAULT_BASE_URL,_default,asx,atom,avi,avif,bin,bmp,cco,cjs,css,data,deb,der,dmg,doc,docx,eot,flv,gif,gz,hqx,htc,html,ico,iso,jad,jar,jardiff,jng,jnlp,jpg,jpeg,js,json,kml,kmz,m3u8,m4a,m4v,md,mid,mjs,mml,mng,mov,mp3,mp4,mpeg,msi,odg,odp,ods,odt,ogg,otf,pdf,pl,png,ppt,pptx,prc,ps,ra,rar,rpm,rss,rtf,run,sea,sit,svg,swf,tcl,tar,tif,ts,ttf,txt,wasm,wbmp,webm,webp,wml,wmlc,wmv,woff,woff2,xhtml,xls,xlsx,xml,xpi,xspf,zip,mimeTypes,C$1,Z$1,ie$1,X$1,ee$1,I$2,te$1,V$1,oe,R$2,Me,le,Le$1,Ie,Ae,PHPRequestHandler,schema12,schema15,func2,schema14,PHP_EXTENSIONS_DIR,MAX_EXTENSION_SIDECAR_FILE_REQUESTS,NodeSABSyncReceiveMessageTransport,proxyMarker,createEndpoint,releaseProxy,finalizer,throwMarker,WireValueType,MessageType,isObject,proxyTransferHandler,throwTransferHandler$1,transferHandlers,proxyCounter,proxyFinalizers,transferCache,proxyByListener,list,errorConstructors,NonError,errorProperties,toJsonWasCalled,toJSON,newError,destroyCircular,releaseApiProxy,isTransferHandlersSetup,_cachedSupportsTransferableStreams,throwTransferHandler,throwTransferHandlerCustom,MAX_ADDRESSABLE_FILE_OFFSET,IntervalNode,FileLockIntervalTree,FileLockManagerInMemory,FileLock,FileLockManagerComposite,maxValueForSigned32BitInteger,ProcessIdAllocator,init_universal=__esmMin((()=>{init_logger(),init_util(),import_ini=require_ini(),init_stream_compression(),init_preload_helper(),ve=e=>{throw TypeError(e)},me$1=(e,n,r)=>n.has(e)||ve(`Cannot `+r),u$1=(e,n,r)=>(me$1(e,n,`read from private field`),r?r.call(e):n.get(e)),_=(e,n,r)=>n.has(e)?ve(`Cannot add the same private member more than once`):n instanceof WeakSet?n.add(e):n.set(e,r),x$1=(e,n,r,i)=>(me$1(e,n,`write to private field`),i?i.call(e,r):n.set(e,r),r),v=(e,n,r)=>(me$1(e,n,`access private method`),r),ErrnoError=class extends Error{constructor(e,n,r){super(n,r),this.name=`ErrnoError`,this.errno=e}},FileErrorCodes={0:`No error occurred. System call completed successfully.`,1:`Argument list too long.`,2:`Permission denied.`,3:`Address in use.`,4:`Address not available.`,5:`Address family not supported.`,6:`Resource unavailable, or operation would block.`,7:`Connection already in progress.`,8:`Bad file descriptor.`,9:`Bad message.`,10:`Device or resource busy.`,11:`Operation canceled.`,12:`No child processes.`,13:`Connection aborted.`,14:`Connection refused.`,15:`Connection reset.`,16:`Resource deadlock would occur.`,17:`Destination address required.`,18:`Mathematics argument out of domain of function.`,19:`Reserved.`,20:`File exists.`,21:`Bad address.`,22:`File too large.`,23:`Host is unreachable.`,24:`Identifier removed.`,25:`Illegal byte sequence.`,26:`Operation in progress.`,27:`Interrupted function.`,28:`Invalid argument.`,29:`I/O error.`,30:`Socket is connected.`,31:`There is a directory under that path.`,32:`Too many levels of symbolic links.`,33:`File descriptor value too large.`,34:`Too many links.`,35:`Message too large.`,36:`Reserved.`,37:`Filename too long.`,38:`Network is down.`,39:`Connection aborted by network.`,40:`Network unreachable.`,41:`Too many files open in system.`,42:`No buffer space available.`,43:`No such device.`,44:`There is no such file or directory OR the parent directory does not exist.`,45:`Executable file format error.`,46:`No locks available.`,47:`Reserved.`,48:`Not enough space.`,49:`No message of the desired type.`,50:`Protocol not available.`,51:`No space left on device.`,52:`Function not supported.`,53:`The socket is not connected.`,54:`Not a directory or a symbolic link to a directory.`,55:`Directory not empty.`,56:`State not recoverable.`,57:`Not a socket.`,58:`Not supported, or operation not supported on socket.`,59:`Inappropriate I/O control operation.`,60:`No such device or address.`,61:`Value too large to be stored in data type.`,62:`Previous owner died.`,63:`Operation not permitted.`,64:`Broken pipe.`,65:`Protocol error.`,66:`Protocol not supported.`,67:`Protocol wrong type for socket.`,68:`Result too large.`,69:`Read-only file system.`,70:`Invalid seek.`,71:`No such process.`,72:`Reserved.`,73:`Connection timed out.`,74:`Text file busy.`,75:`Cross-device link.`,76:`Extension: Capabilities insufficient.`},FSHelpers=class e{static readFileAsText(n,r){return new TextDecoder().decode(e.readFileAsBuffer(n,r))}static readFileAsBuffer(e,n){return e.readFile(n)}static writeFile(e,n,r){e.writeFile(n,r)}static unlink(e,n){e.unlink(n)}static mv(n,r,i){try{let o=n.lookupPath(r).node.mount,s=e.fileExists(n,i)?n.lookupPath(i).node.mount:n.lookupPath(W$1(i)).node.mount;o.mountpoint===s.mountpoint?n.rename(r,i):(e.copyRecursive(n,r,i),e.isDir(n,r)?e.rmdir(n,r,{recursive:!0}):n.unlink(r))}catch(e){let n=getEmscriptenFsError(e);throw n?Error(`Could not move ${r} to ${i}: ${n}`,{cause:e}):e}}static rmdir(n,r,i={recursive:!0}){if(n.lookupPath(r,{follow:!1})?.node.mount.mountpoint===r)throw new ErrnoError(10);i!=null&&i.recursive&&e.listFiles(n,r).forEach(o=>{let s=`${r}/${o}`;e.isDir(n,s)?e.rmdir(n,s,i):e.unlink(n,s)}),n.getPath(n.lookupPath(r).node)===n.cwd()&&n.chdir(m(n.cwd(),`..`)),n.rmdir(r)}static listFiles(n,r,i={prependPath:!1}){if(!e.fileExists(n,r))return[];try{let e=n.readdir(r).filter(e=>e!==`.`&&e!==`..`);if(i.prependPath){let n=r.replace(/\/$/,``);return e.map(e=>`${n}/${e}`)}return e}catch(e){return M$1.error(e,{path:r}),[]}}static isDir(n,r){return e.fileExists(n,r)?n.isDir(n.lookupPath(r,{follow:!0}).node.mode):!1}static isFile(n,r){return e.fileExists(n,r)?n.isFile(n.lookupPath(r,{follow:!0}).node.mode):!1}static symlink(e,n,r){return e.symlink(n,r)}static isSymlink(n,r){return e.fileExists(n,r)?n.isLink(n.lookupPath(r).node.mode):!1}static readlink(e,n){return e.readlink(n)}static realpath(e,n){return e.lookupPath(n,{follow:!0}).path}static fileExists(e,n){try{return e.lookupPath(n),!0}catch{return!1}}static mkdir(e,n){e.mkdirTree(n)}static copyRecursive(n,r,i){try{let o=n.lookupPath(r).node;if(n.isDir(o.mode)){if(r===i||i.startsWith(`${r}/`))throw new ErrnoError(28);n.mkdirTree(i);let o=n.readdir(r).filter(e=>e!==`.`&&e!==`..`);for(let s of o)e.copyRecursive(n,m(r,s),m(i,s))}else n.isLink(o.mode)?n.symlink(n.readlink(r),i):n.writeFile(i,n.readFile(r))}catch(e){let n=getEmscriptenFsError(e);throw n?Error(`Could not copy ${r} to ${i}: ${n}`,{cause:e}):e}}},FSHelpers.readFileAsText=rethrowFileSystemError(`Could not read "{path}"`)(FSHelpers.readFileAsText),FSHelpers.readFileAsBuffer=rethrowFileSystemError(`Could not read "{path}"`)(FSHelpers.readFileAsBuffer),FSHelpers.writeFile=rethrowFileSystemError(`Could not write to "{path}"`)(FSHelpers.writeFile),FSHelpers.unlink=rethrowFileSystemError(`Could not unlink "{path}"`)(FSHelpers.unlink),FSHelpers.rmdir=rethrowFileSystemError(`Could not remove directory "{path}"`)(FSHelpers.rmdir),FSHelpers.listFiles=rethrowFileSystemError(`Could not list files in "{path}"`)(FSHelpers.listFiles),FSHelpers.isDir=rethrowFileSystemError(`Could not stat "{path}"`)(FSHelpers.isDir),FSHelpers.isFile=rethrowFileSystemError(`Could not stat "{path}"`)(FSHelpers.isFile),FSHelpers.realpath=rethrowFileSystemError(`Could not stat "{path}"`)(FSHelpers.realpath),FSHelpers.fileExists=rethrowFileSystemError(`Could not stat "{path}"`)(FSHelpers.fileExists),FSHelpers.mkdir=rethrowFileSystemError(`Could not create directory "{path}"`)(FSHelpers.mkdir),_private=new WeakMap,PHPWorker=class{constructor(e,n){_(this,D$1),_(this,Y$1),this.absoluteUrl=``,this.documentRoot=``,this.chroot=null,x$1(this,D$1,new Map),x$1(this,Y$1,new WeakSet),this.onMessageListeners=[],_private.set(this,{monitor:n}),e&&this.__internal_setRequestHandler(e)}__internal_setRequestHandler(e){this.absoluteUrl=e.absoluteUrl,this.documentRoot=e.documentRoot,this.chroot=this.documentRoot,_private.set(this,{..._private.get(this),requestHandler:e})}__internal_getPHP(){return _private.get(this).php}__internal_getRequestHandler(){return this.getRequestHandler()}async setPrimaryPHP(e){_private.set(this,{..._private.get(this),php:e})}pathToInternalUrl(e){return this.getRequestHandler().pathToInternalUrl(e)}internalUrlToPath(e){return this.getRequestHandler().internalUrlToPath(e)}async onDownloadProgress(e){var n;return _private.get(this).monitor?.addEventListener(`progress`,e)}async mv(e,n){return _private.get(this).php.mv(e,n)}async cp(e,n){return _private.get(this).php.cp(e,n)}async rmdir(e,n){return _private.get(this).php.rmdir(e,n)}async request(e){return await this.getRequestHandler().request(e)}async requestStreamed(e){return await this.getRequestHandler().requestStreamed(e)}async run(e){let n=_private.get(this),r=n.php;if(!n.requestHandler&&!(r!=null&&r.requestHandler)&&r)return await r.run(e);let{php:i,reap:o}=await this.acquirePHPInstance();try{return await i.run(e)}finally{o()}}async runStream(e){let n=_private.get(this),r=n.php;if(!n.requestHandler&&!(r!=null&&r.requestHandler)&&r)return await r.runStream(e);let{php:i,reap:o}=await this.acquirePHPInstance(),s;try{s=await i.runStream(e)}catch(e){throw o(),e}return s.finished.finally(o),s}async cli(e,n){let r=_private.get(this),i=r.php;if(!r.requestHandler&&!(i!=null&&i.requestHandler)&&i)return await i.cli(e,n);let{php:o,reap:s}=await this.acquirePHPInstance(),l;try{l=await o.cli(e,n)}catch(e){throw s(),e}return l.finished.finally(s),l}chdir(e){return this.chroot=e,_private.get(this).php.chdir(e)}cwd(){return _private.get(this).php.cwd()}async acquirePHPInstance(){let{php:e,reap:n}=await this.getRequestHandler().instanceManager.acquirePHPInstance();return this.chroot!==null&&e.chdir(this.chroot),this.registerWorkerListeners(e),{php:e,reap:n}}setSapiName(e){_private.get(this).php.setSapiName(e)}mkdir(e){return _private.get(this).php.mkdir(e)}mkdirTree(e){return _private.get(this).php.mkdirTree(e)}readFileAsText(e){return _private.get(this).php.readFileAsText(e)}readFileAsBuffer(e){return _private.get(this).php.readFileAsBuffer(e)}writeFile(e,n){return _private.get(this).php.writeFile(e,n)}unlink(e){return _private.get(this).php.unlink(e)}listFiles(e,n){return _private.get(this).php.listFiles(e,n)}isDir(e){return _private.get(this).php.isDir(e)}isFile(e){return _private.get(this).php.isFile(e)}fileExists(e){return _private.get(this).php.fileExists(e)}onMessage(e){return this.onMessageListeners.push(e),async()=>{this.onMessageListeners=this.onMessageListeners.filter(n=>n!==e)}}defineConstant(e,n){_private.get(this).php.defineConstant(e,n)}addEventListener(e,n){u$1(this,D$1).has(e)||u$1(this,D$1).set(e,new Set),u$1(this,D$1).get(e).add(n)}removeEventListener(e,n){var r;(r=u$1(this,D$1).get(e))==null||r.delete(n)}dispatchEvent(e){let n=u$1(this,D$1).get(e.type);if(!n)return;let r=[...n],i=A$3 in e&&e[A$3]===!0&&`stdin`in e&&typeof ReadableStream<`u`&&e.stdin instanceof ReadableStream;if(r.length>1&&i){let n=e.stdin;for(let i=0;i<r.length-1;i++){let[o,s]=n.tee();n=s,r[i]({...e,stdin:o})}r[r.length-1]({...e,stdin:n});return}for(let n of r)n(e)}registerWorkerListeners(e){u$1(this,Y$1).has(e)||(u$1(this,Y$1).add(e),e.addEventListener(`*`,async e=>{this.dispatchEvent(e)}),e.onMessage(async e=>{for(let n of this.onMessageListeners){let r=await n(e);if(r)return r}return``}))}async[Symbol.asyncDispose](){var e;await this.getRequestHandler(!1)?.[Symbol.asyncDispose]()}getRequestHandler(e=!0){var n;let r=_private.get(this);if(r.requestHandler)return r.requestHandler;if((n=r.php)!=null&&n.requestHandler)return this.__internal_setRequestHandler(r.php.requestHandler),r.php.requestHandler;if(e)throw Error(`PHPWorker is not connected to a request handler.`)}},D$1=new WeakMap,Y$1=new WeakMap,RuntimeId=Symbol(`RuntimeId`),loadedRuntimes=new Map,lastRuntimeId=0,currentJsRuntime=function(){var e;return typeof process<`u`&&process.release?.name===`node`?`NODE`:typeof window<`u`?`WEB`:typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope?`WORKER`:`NODE`}(),makePromise=()=>{let e=[],n=new Promise((n,r)=>{e.push(n,r)});return e.unshift(n),e},responseTexts={500:`Internal Server Error`,502:`Bad Gateway`,404:`Not Found`,403:`Forbidden`,401:`Unauthorized`,400:`Bad Request`,301:`Moved Permanently`,302:`Found`,307:`Temporary Redirect`,308:`Permanent Redirect`,204:`No Content`,201:`Created`,200:`OK`},de$1=class e{constructor(e,n,r,i){_(this,re$1),_(this,se$1),this.cachedParsedHeaders=null,this.cachedStdoutBytes=null,this.cachedStderrText=null;let[o,s]=e.tee();x$1(this,re$1,o),x$1(this,se$1,s),this.stdout=n,this.stderr=r,this.exitCode=i}static fromPHPResponse(n){let r=new ReadableStream({start(e){e.enqueue(n.bytes),e.close()}}),i=[];for(let[e,r]of Object.entries(n.headers))for(let n of r)i.push(`${e}: ${n}`);let o=JSON.stringify({status:n.httpStatusCode,headers:i}),s=new ReadableStream({start(e){e.enqueue(new TextEncoder().encode(o)),e.close()}}),l=new ReadableStream({start(e){n.errors.length>0&&e.enqueue(new TextEncoder().encode(n.errors)),e.close()}});return new e(s,r,l,Promise.resolve(n.exitCode))}static forHttpCode(n,r=``){return e.fromPHPResponse(PHPResponse.forHttpCode(n,r))}getHeadersStream(){return u$1(this,re$1)}async ok(){try{let e=await this.httpStatusCode;return e>=200&&e<400}catch{return!1}}get finished(){return Promise.allSettled([this.exitCode.finally(()=>{})]).then(()=>{})}get headers(){return this.getParsedHeaders().then(e=>e.headers)}get httpStatusCode(){return this.getParsedHeaders().then(e=>e.httpStatusCode).then(e=>e===void 0?this.getParsedHeaders().then(e=>e.httpStatusCode,()=>200):e).catch(()=>500)}get stdoutText(){return this.stdoutBytes.then(e=>new TextDecoder().decode(e))}get stdoutBytes(){return this.cachedStdoutBytes||=streamToBytes(this.stdout),this.cachedStdoutBytes}get stderrText(){return this.cachedStderrText||=streamToText(this.stderr),this.cachedStderrText}async getParsedHeaders(){return this.cachedParsedHeaders||=parseHeadersStream(u$1(this,se$1)),await this.cachedParsedHeaders}},re$1=new WeakMap,se$1=new WeakMap,StreamedPHPResponse=de$1,PHPResponse=class e{constructor(e,n,r,i=``,o=0){this.httpStatusCode=e,this.headers=n,this.bytes=r,this.exitCode=o,this.errors=i}static forHttpCode(n,r=``){return new e(n,{},new TextEncoder().encode(r||responseTexts[n]||``))}static fromRawData(n){return new e(n.httpStatusCode,n.headers,n.bytes,n.errors,n.exitCode)}static async fromStreamedResponse(n){return await n.finished,new e(await n.httpStatusCode,await n.headers,await n.stdoutBytes,await n.stderrText,await n.exitCode)}ok(){return this.httpStatusCode>=200&&this.httpStatusCode<400}toRawData(){return{headers:this.headers,bytes:this.bytes,errors:this.errors,exitCode:this.exitCode,httpStatusCode:this.httpStatusCode}}get json(){return JSON.parse(this.text)}get text(){return new TextDecoder().decode(this.bytes)}},kError=Symbol(`error`),kMessage=Symbol(`message`),ErrorEvent2=class extends (_a=Event,_a){constructor(e,n={}){super(e),this[kError]=n.error===void 0?null:n.error,this[kMessage]=n.message===void 0?``:n.message}get error(){return this[kError]}get message(){return this[kMessage]}},Object.defineProperty(ErrorEvent2.prototype,"error",{enumerable:!0}),Object.defineProperty(ErrorEvent2.prototype,"message",{enumerable:!0}),ErrorEvent=typeof globalThis.ErrorEvent==`function`?globalThis.ErrorEvent:ErrorEvent2,UnhandledRejectionsTarget=class extends EventTarget{constructor(){super(...arguments),this.listenersCount=0}addEventListener(e,n,r){++this.listenersCount,super.addEventListener(e,n,r)}removeEventListener(e,n,r){--this.listenersCount,super.removeEventListener(e,n,r)}hasListeners(){return this.listenersCount>0}},functionsMaybeMissingFromAsyncify=[],UNREACHABLE_ERROR=`
"unreachable" WASM instruction executed.

The typical reason is a PHP function missing from the ASYNCIFY_ONLY
list when building PHP.wasm.

You will need to file a new issue in the WordPress Playground repository
and paste this error message there:

https://github.com/WordPress/wordpress-playground/issues/new

If you're a core developer, the typical fix is to:

* Isolate a minimal reproduction of the error
* Add a reproduction of the error to php-asyncify.spec.ts in the WordPress Playground repository
* Run 'npm run fix-asyncify'
* Commit the changes, push to the repo, release updated NPM packages

Below is a list of all the PHP functions found in the stack trace to
help with the minimal reproduction. If they're all already listed in
the Dockerfile, you'll need to trigger this error again with long stack
traces enabled. In node.js, you can do it using the --stack-trace-limit=100
CLI option: 

`,redBg=`\x1B[41m`,bold=`\x1B[1m`,reset=`\x1B[0m`,eol=`\x1B[K`,logged=!1,STRING=`string`,NUMBER=`number`,__private__dont__use=Symbol(`__private__dont__use`),PHPExecutionFailureError=class extends Error{constructor(e,n,r){super(e),this.response=n,this.source=r}},MountStillActiveError=class extends Error{constructor(e){super(`The filesystem could not be flushed and remains mounted.`,{cause:e}),this.name=`MountStillActiveError`}},PHP_INI_PATH=`/internal/shared/php.ini`,AUTO_PREPEND_SCRIPT=`/internal/shared/auto_prepend_file.php`,OPCACHE_FILE_FOLDER=`/internal/shared/opcache`,PHP=class{constructor(e){_(this,y$1),_(this,Q$1),_(this,z,!1),_(this,G$1,null),_(this,j,new Map([[`*`,new Set]])),_(this,J,[]),_(this,$,{}),_(this,K$1),_(this,ne$1,new Map),_(this,k$1,{enabled:!1,recreateRuntime:()=>0,needsRotating:!1,maxRequests:400,requestsMade:0}),this.semaphore=new v$1({concurrency:1}),e!==void 0&&this.initializeRuntime(e),this.addEventListener(`request.error`,e=>{e.source===`php-wasm`&&(u$1(this,k$1).needsRotating=!0)})}addEventListener(e,n){u$1(this,j).has(e)||u$1(this,j).set(e,new Set),u$1(this,j).get(e).add(n)}removeEventListener(e,n){var r;(r=u$1(this,j).get(e))==null||r.delete(n)}dispatchEvent(e){let n=[...u$1(this,j).get(e.type)||[],...u$1(this,j).get(`*`)||[]];if(n.length===0)return;let r=A$3 in e&&e[A$3]===!0&&`stdin`in e&&typeof ReadableStream<`u`&&e.stdin instanceof ReadableStream;if(n.length>1&&r){let r=e.stdin;for(let i=0;i<n.length-1;i++){let[o,s]=r.tee();r=s,n[i]({...e,stdin:o})}n[n.length-1]({...e,stdin:r});return}for(let r of n)r(e)}onMessage(e){return u$1(this,J).push(e),async()=>{x$1(this,J,u$1(this,J).filter(n=>n!==e))}}async setSpawnHandler(handler){typeof handler==`string`&&(handler=S$1(eval(handler))),x$1(this,K$1,handler)}setCommandSpawnHandler(e,n){u$1(this,ne$1).set(e,n)}get absoluteUrl(){return this.requestHandler.absoluteUrl}get documentRoot(){return this.requestHandler.documentRoot}pathToInternalUrl(e){return this.requestHandler.pathToInternalUrl(e)}internalUrlToPath(e){return this.requestHandler.internalUrlToPath(e)}initializeRuntime(e){if(this[__private__dont__use])throw Error(`PHP runtime already initialized.`);let n=popLoadedRuntime(e);if(!n)throw Error(`Invalid PHP runtime id.`);if(this[__private__dont__use]=n,n.spawnProcess=(e,n,r)=>v(this,y$1,ye$1).call(this,e,n,r),this[__private__dont__use].ccall(`wasm_set_phpini_path`,null,[`string`],[PHP_INI_PATH]),!this.fileExists(PHP_INI_PATH)){let e=[`opcache.enable = 1`,`opcache.enable_cli = 1`,`opcache.jit = 0`,`opcache.interned_strings_buffer = 8`,`opcache.max_accelerated_files = 1000`,`opcache.memory_consumption = 64`,`opcache.max_wasted_percentage = 5`,`opcache.file_cache = `+OPCACHE_FILE_FOLDER,`opcache.file_cache_only = 1`,`opcache.file_cache_consistency_checks = 1`];this.fileExists(OPCACHE_FILE_FOLDER)||this.mkdir(OPCACHE_FILE_FOLDER),this.writeFile(PHP_INI_PATH,[`auto_prepend_file=`+AUTO_PREPEND_SCRIPT,`memory_limit=256M`,`ignore_repeated_errors = 1`,`error_reporting = E_ALL`,`display_errors = 1`,`html_errors = 1`,`display_startup_errors = On`,`log_errors = 1`,`always_populate_raw_post_data = -1`,`upload_max_filesize = 2000M`,`post_max_size = 2000M`,`allow_url_fopen = On`,`allow_url_include = Off`,`session.save_path = /home/web_user`,`implicit_flush = 1`,`output_buffering = 0`,`max_execution_time = 0`,`max_input_time = -1`,...e].join(`
`))}this.fileExists(AUTO_PREPEND_SCRIPT)||this.writeFile(AUTO_PREPEND_SCRIPT,`<?php
				// Define constants set via defineConstant() calls
				if(file_exists('/internal/shared/consts.json')) {
					$consts = json_decode(file_get_contents('/internal/shared/consts.json'), true);
					foreach ($consts as $const => $value) {
						if (!defined($const) && is_scalar($value)) {
							define($const, $value);
						}
					}
				}
				// Preload all the files from /internal/shared/preload
				foreach (glob('/internal/shared/preload/*.php') as $file) {
					require_once $file;
				}
				`),n.onMessage=async e=>{for(let n of u$1(this,J)){let r=await n(e);if(r)return r}return``},x$1(this,G$1,improveWASMErrorReporting(n)),this.dispatchEvent({type:`runtime.initialized`})}async setSapiName(e){if(this[__private__dont__use].ccall(`wasm_set_sapi_name`,NUMBER,[STRING],[e])!==0)throw Error(`Could not set SAPI name. This can only be done before the PHP WASM module is initialized.Did you already dispatch any requests?`);x$1(this,Q$1,e)}chdir(e){this[__private__dont__use].FS.chdir(e)}cwd(){return this[__private__dont__use].FS.cwd()}chmod(e,n){this[__private__dont__use].FS.chmod(e,n)}async request(e){if(M$1.debug(`PHP.request() is deprecated. Please use new PHPRequestHandler() instead.`),!this.requestHandler)throw Error(`No request handler available.`);return this.requestHandler.request(e)}async run(e){let n=await this.runStream(e),r=await PHPResponse.fromStreamedResponse(n);if(r.exitCode!==0)throw new PHPExecutionFailureError(`PHP.run() failed with exit code ${r.exitCode}. 

=== Stdout ===
 ${r.text}

=== Stderr ===
 ${r.errors}`,r,`request`);return r}async runStream(e){let n=await this.semaphore.acquire(),r,i=v(this,y$1,we$1).call(this,async()=>{if(u$1(this,z)||(await this[__private__dont__use].ccall(`php_wasm_init`,null,[],[],{isAsync:!0}),x$1(this,z,!0)),e.scriptPath&&!this.fileExists(e.scriptPath))throw Error(`The script path "${e.scriptPath}" does not exist.`);v(this,y$1,xe).call(this,e.relativeUri||``),v(this,y$1,be).call(this,e.method||`GET`);let n=normalizeHeaders(e.headers||{}),i=n.host||`example.com:443`,o=v(this,y$1,Fe).call(this,i,e.protocol||`http`);if(v(this,y$1,Se).call(this,i),v(this,y$1,ke).call(this,o),v(this,y$1,Re).call(this,n),e.body&&(r=v(this,y$1,He$1).call(this,e.body)),typeof e.code==`string`)this.writeFile(`/internal/eval.php`,e.code),v(this,y$1,ge$1).call(this,`/internal/eval.php`);else if(typeof e.scriptPath==`string`)v(this,y$1,ge$1).call(this,e.scriptPath||``);else throw TypeError("The request object must have either a `code` or a `scriptPath` property.");let s=v(this,y$1,Ee$1).call(this,e.$_SERVER,n,o);for(let e in s)v(this,y$1,Te$1).call(this,e,s[e]);let l=e.env||{};for(let e in l)v(this,y$1,Pe).call(this,e,l[e]);return await this[__private__dont__use].ccall(`wasm_sapi_handle_request`,NUMBER,[],[],{async:!0})}),o=()=>{if(r)try{this[__private__dont__use].free(r)}catch(e){M$1.error(e)}n(),this.dispatchEvent({type:`request.end`})};return i.then(e=>(e.finished.finally(o),e),e=>{try{o()}catch{}finally{throw e}})}defineConstant(e,n){let r={};try{r=JSON.parse(this.fileExists(`/internal/shared/consts.json`)&&this.readFileAsText(`/internal/shared/consts.json`)||`{}`)}catch{}this.writeFile(`/internal/shared/consts.json`,JSON.stringify({...r,[e]:n}))}mkdir(e){let n=FSHelpers.mkdir(this[__private__dont__use].FS,e);return this.dispatchEvent({type:`filesystem.write`}),n}mkdirTree(e){return FSHelpers.mkdir(this[__private__dont__use].FS,e)}readFileAsText(e){return FSHelpers.readFileAsText(this[__private__dont__use].FS,e)}readFileAsBuffer(e){return FSHelpers.readFileAsBuffer(this[__private__dont__use].FS,e)}writeFile(e,n){let r=FSHelpers.writeFile(this[__private__dont__use].FS,e,n);return this.dispatchEvent({type:`filesystem.write`}),r}unlink(e){let n=FSHelpers.unlink(this[__private__dont__use].FS,e);return this.dispatchEvent({type:`filesystem.write`}),n}mv(e,n){let r=FSHelpers.mv(this[__private__dont__use].FS,e,n);return this.dispatchEvent({type:`filesystem.write`}),r}cp(e,n){let r=FSHelpers.copyRecursive(this[__private__dont__use].FS,e,n);return this.dispatchEvent({type:`filesystem.write`}),r}rmdir(e,n={recursive:!0}){let r=FSHelpers.rmdir(this[__private__dont__use].FS,e,n);return this.dispatchEvent({type:`filesystem.write`}),r}listFiles(e,n={prependPath:!1}){return FSHelpers.listFiles(this[__private__dont__use].FS,e,n)}isDir(e){return FSHelpers.isDir(this[__private__dont__use].FS,e)}isFile(e){return FSHelpers.isFile(this[__private__dont__use].FS,e)}symlink(e,n){return FSHelpers.symlink(this[__private__dont__use].FS,e,n)}isSymlink(e){return FSHelpers.isSymlink(this[__private__dont__use].FS,e)}readlink(e){return FSHelpers.readlink(this[__private__dont__use].FS,e)}realpath(e){return FSHelpers.realpath(this[__private__dont__use].FS,e)}fileExists(e){return FSHelpers.fileExists(this[__private__dont__use].FS,e)}enableRuntimeRotation(e){x$1(this,k$1,{...u$1(this,k$1),enabled:!0,recreateRuntime:e.recreateRuntime,maxRequests:e.maxRequests??400})}async rotateRuntime(){if(!u$1(this,k$1).enabled)throw Error(`Runtime rotation is not enabled. Call enableRuntimeRotation() first.`);await this.hotSwapPHPRuntime(await u$1(this,k$1).recreateRuntime()),u$1(this,k$1).requestsMade=0,u$1(this,k$1).needsRotating=!1}async hotSwapPHPRuntime(e){let n=this[__private__dont__use].FS,r=this.listFiles(`/`).map(e=>`/${e}`),i=n.cwd();n.chdir(`/`);let o=Object.entries(u$1(this,$)).map(([e,r])=>({mountHandler:r.mountHandler,mountPointSnapshot:snapshotMountPoint(n,e),vfsPath:e})),s=Object.values(u$1(this,$)).reverse();for(let e of s)await e.unmount();try{this.exit()}catch{}this.initializeRuntime(e),u$1(this,Q$1)&&this.setSapiName(u$1(this,Q$1));let l=this[__private__dont__use].FS;for(let e of r)e&&e!==`/request`&&copyMEMFSNodes(n,l,e);for(let{mountHandler:e,mountPointSnapshot:n,vfsPath:r}of o)try{await this.mount(r,e)}catch(i){if(isMissingMountSourceError(i)){restoreMountPointSnapshot(l,r,n);continue}if(!isMissingMountTargetPathError(i))throw i;this.mkdir(r),await this.mount(r,e)}try{l.chdir(i)}catch(e){throw Error(`Failed to restore CWD to ${i} after PHP runtime rotation.`,{cause:e})}}async mount(e,n){let r=await n(this,this[__private__dont__use].FS,e),i={mountHandler:n,unmount:async()=>{try{await r()}catch(n){throw n instanceof MountStillActiveError||delete u$1(this,$)[e],n}delete u$1(this,$)[e]}};return u$1(this,$)[e]=i,()=>i.unmount()}async cli(e,n={}){if(j$1(e[0]??``)!==`php`)return this.subProcess(e,n);u$1(this,z)&&(u$1(this,k$1).needsRotating=!0);let r=await this.semaphore.acquire();return await v(this,y$1,we$1).call(this,()=>{let r=n.env||{};for(let[e,n]of Object.entries(r))v(this,y$1,Pe).call(this,e,n);e=[e[0],`-c`,PHP_INI_PATH,...e.slice(1)];for(let n of e)this[__private__dont__use].ccall(`wasm_add_cli_arg`,null,[STRING],[n]);return this[__private__dont__use].ccall(`run_cli`,null,[],[],{async:!0})}).then(e=>(e.exitCode.finally(r),e)).finally(()=>{u$1(this,k$1).needsRotating=!0})}async subProcess(e,n={}){let r=v(this,y$1,ye$1).call(this,e[0],e.slice(1),{env:n.env,cwd:n.cwd??this.cwd()}),i=await createInvertedReadableStream();r.on(`error`,e=>{safeStreamError$1(i.controller,e)});let o=e=>{try{i.controller.enqueue(e)}catch{r.stderr.off(`data`,o)}};r.stderr.on(`data`,o);let s=await createInvertedReadableStream(),l=e=>{try{s.controller.enqueue(e)}catch{r.stdout.off(`data`,l)}};return r.stdout.on(`data`,l),r.on(`exit`,()=>{setTimeout(()=>{try{i.controller.close()}catch{}try{s.controller.close()}catch{}},0)}),new StreamedPHPResponse(new ReadableStream({start(e){e.close()}}),s.stream,i.stream,new Promise(e=>{r.on(`exit`,n=>{e(n)})}))}setSkipShebang(e){this[__private__dont__use].ccall(`wasm_set_skip_shebang`,null,[NUMBER],[+!!e])}exit(e=0){this.dispatchEvent({type:`runtime.beforeExit`});try{this[__private__dont__use]._exit(e)}catch{}x$1(this,z,!1),x$1(this,G$1,null),this[__private__dont__use]&&(delete this[__private__dont__use].onMessage,delete this[__private__dont__use])}[Symbol.dispose](){this.exit(0)}},Q$1=new WeakMap,z=new WeakMap,G$1=new WeakMap,j=new WeakMap,J=new WeakMap,$=new WeakMap,K$1=new WeakMap,ne$1=new WeakMap,k$1=new WeakMap,y$1=new WeakSet,ye$1=function(e,n=[],r={}){let i=Array.isArray(e)?e:n.length?[e,...n]:x$2(e),o=i[0]&&u$1(this,ne$1).get(j$1(i[0]));if(o)return o(i[0],i.slice(1),r);if(u$1(this,K$1))return u$1(this,K$1).call(this,e,n,r);let s=Error(`popen(), proc_open() are unsupported on this PHP instance. Call php.setSpawnHandler()
			and provide a callback to handle spawning processes, or disable popen(), proc_open() via php.ini.`);throw s.code=`SPAWN_UNSUPPORTED`,s},Ee$1=function(e,n,r){let i={...e||{}};i.HTTPS=i.HTTPS||r===443?`on`:`off`;for(let e in n){let r=`HTTP_`;[`content-type`,`content-length`].includes(e.toLowerCase())&&(r=``),i[`${r}${e.toUpperCase().replace(/-/g,`_`)}`]=n[e]}return i},xe=function(e){this[__private__dont__use].ccall(`wasm_set_request_uri`,null,[STRING],[e]);let n=``;e.includes(`?`)&&(n=e.substring(e.indexOf(`?`)+1)),this[__private__dont__use].ccall(`wasm_set_query_string`,null,[STRING],[n])},Se=function(e){this[__private__dont__use].ccall(`wasm_set_request_host`,null,[STRING],[e])},ke=function(e){this[__private__dont__use].ccall(`wasm_set_request_port`,null,[NUMBER],[e])},Fe=function(e,n){let r;try{r=parseInt(new URL(e).port,10)}catch{}return(!r||isNaN(r)||r===80)&&(r=n===`https`?443:80),r},be=function(e){this[__private__dont__use].ccall(`wasm_set_request_method`,null,[STRING],[e])},Re=function(e){e.cookie&&this[__private__dont__use].ccall(`wasm_set_cookies`,null,[STRING],[e.cookie]),e[`content-type`]&&this[__private__dont__use].ccall(`wasm_set_content_type`,null,[STRING],[e[`content-type`]]),e[`content-length`]&&this[__private__dont__use].ccall(`wasm_set_content_length`,null,[NUMBER],[parseInt(e[`content-length`],10)])},He$1=function(e){let n,r;typeof e==`string`?(M$1.warn(`Passing a string as the request body is deprecated. Please use a Uint8Array instead. See https://github.com/WordPress/wordpress-playground/issues/997 for more details`),r=this[__private__dont__use].lengthBytesUTF8(e),n=r+1):(r=e.byteLength,n=e.byteLength);let i=this[__private__dont__use].malloc(n);if(!i)throw Error(`Could not allocate memory for the request body.`);return typeof e==`string`?this[__private__dont__use].stringToUTF8(e,i,n+1):this[__private__dont__use].HEAPU8.set(e,i),this[__private__dont__use].ccall(`wasm_set_request_body`,null,[NUMBER],[i]),this[__private__dont__use].ccall(`wasm_set_content_length`,null,[NUMBER],[r]),i},ge$1=function(e){this[__private__dont__use].ccall(`wasm_set_path_translated`,null,[STRING],[e])},Te$1=function(e,n){this[__private__dont__use].ccall(`wasm_add_SERVER_entry`,null,[STRING,STRING],[e,n])},Pe=function(e,n){this[__private__dont__use].ccall(`wasm_add_ENV_entry`,null,[STRING,STRING],[e,n])},we$1=async function(e){u$1(this,k$1).enabled&&u$1(this,k$1).needsRotating&&await this.rotateRuntime(),++u$1(this,k$1).requestsMade,u$1(this,k$1).requestsMade>=u$1(this,k$1).maxRequests&&(u$1(this,k$1).needsRotating=!0);let n=this[__private__dont__use],r=await createInvertedReadableStream();n.onHeaders=e=>{N||i||r.controller.enqueue(e.slice())};let i=!1,o=()=>{i||(i=!0,r.controller.close())},s=await createInvertedReadableStream();n.onStdout=e=>{o(),!N&&s.controller.enqueue(e.slice())};let l=await createInvertedReadableStream();n.onStderr=e=>{N||l.controller.enqueue(e.slice())};let N=!1,ae,ce=(async()=>{var n;try{return await Promise.race([e(),new Promise((e,n)=>{var r;ae=e=>{isExitCode(e.error)||n(e.error)},(r=u$1(this,G$1))==null||r.addEventListener(`error`,ae,{once:!0})})])}catch(e){if(isExitCode(e))return e.status;safeStreamError$1(s.controller,e),safeStreamError$1(l.controller,e),safeStreamError$1(r.controller,e),N=!0;for(let e in this)typeof this[e]==`function`&&(this[e]=()=>{throw Error(`PHP runtime has crashed – see the earlier error for details.`)});throw this.functionsMaybeMissingFromAsyncify=getFunctionsMaybeMissingFromAsyncify(),e}finally{N||=(safeStreamClose$1(s.controller),safeStreamClose$1(l.controller),o(),!0),(n=u$1(this,G$1))==null||n.removeEventListener(`error`,ae)}})().then(e=>(e!==0&&this.dispatchEvent({type:`request.error`,error:Error(`PHP.run() failed with exit code ${e}.`),source:`php-wasm`}),e),e=>{let n=e.source??`php-wasm`;throw this.dispatchEvent({type:`request.error`,error:e,source:n}),e});return new StreamedPHPResponse(r.stream,s.stream,l.stream,ce)},getNodeType=(e,n)=>{try{return`contents`in e.lookupPath(n,{follow:!0}).node?`memfs`:`not-memfs`}catch{return`missing`}},HttpCookieStore=class{constructor(){this.cookies={}}rememberCookiesFromResponseHeaders(e){if(e!=null&&e[`set-cookie`])for(let n of e[`set-cookie`])try{if(!n.includes(`=`))continue;let e=n.indexOf(`=`),r=n.substring(0,e),i=n.substring(e+1).split(`;`)[0];this.cookies[r]=i}catch(e){M$1.error(e)}}getCookieRequestHeader(){let e=[];for(let n in this.cookies)e.push(`${n}=${this.cookies[n]}`);return e.join(`; `)}},SinglePHPInstanceManager=class{constructor(e){if(this.isAcquired=!1,!e.php&&!e.phpFactory)throw Error(`SinglePHPInstanceManager requires either php or phpFactory`);this.php=e.php,this.phpFactory=e.phpFactory}async getPrimaryPhp(){return this.php?this.php:(this.phpPromise||=this.phpFactory().then(e=>(this.php=e,this.phpPromise=void 0,e)),this.phpPromise)}async acquirePHPInstance(){if(this.isAcquired)throw Error(`The PHP instance already acquired. SinglePHPInstanceManager cannot spawn another PHP instance since, by definition, it only manages a single PHP instance.`);let e=await this.getPrimaryPhp();return this.isAcquired=!0,{php:e,reap:()=>{this.isAcquired=!1}}}async[Symbol.asyncDispose](){this.php&&this.php.exit()}},MaxPhpInstancesError=class extends Error{constructor(e){super(`Requested more concurrent PHP instances than the limit (${e}).`),this.name=this.constructor.name}},PHPProcessManager=class{constructor(e){this.instances=[],this.idleInstances=[],this.maxPhpInstances=e?.maxPhpInstances??2,this.phpFactory=e?.phpFactory,this.semaphore=new v$1({concurrency:this.maxPhpInstances,timeout:e?.timeout||3e4})}async getPrimaryPhp(){if(this.instances.length>0)return this.instances[0];this.primaryPhpPromise||=this.spawnInstance(!0);try{return await this.primaryPhpPromise}finally{this.primaryPhpPromise=void 0}}async acquirePHPInstance(){let e;try{e=await this.semaphore.acquire()}catch(e){throw e instanceof b$2?new MaxPhpInstancesError(this.maxPhpInstances):e}let n=await this.getOrSpawnInstance();return{php:n,reap:()=>{this.idleInstances.push(n),e()}}}async getOrSpawnInstance(){return this.instances.length===0&&await this.getPrimaryPhp(),this.idleInstances.length===0&&await this.spawnInstance(!1),this.idleInstances.pop()}async spawnInstance(e){if(!this.phpFactory)throw Error(`phpFactory must be set before spawning instances.`);let n=await this.phpFactory({isPrimary:e});return this.instances.push(n),this.idleInstances.push(n),n}async[Symbol.asyncDispose](){for(let e of this.instances)e.exit();this.instances=[],this.idleInstances=[]}},PHPNextVersion=`next`,SupportedPHPVersions=[`8.5`,`8.4`,`8.3`,`8.2`,`8.1`,`8.0`,`7.4`],LatestSupportedPHPVersion=SupportedPHPVersions[0],SupportedPHPVersionsList=SupportedPHPVersions,LegacyPHPVersions=[`5.2`],AllPHPVersions=[PHPNextVersion,...SupportedPHPVersions,...LegacyPHPVersions],LEGACY_PHP_INI_PATH=`/internal/shared/php.ini`,LEGACY_PHP_INI_CONTENT=[`auto_prepend_file=/internal/shared/auto_prepend_file.php`,`memory_limit=256M`,`ignore_repeated_errors = 1`,`error_reporting = E_ALL`,`display_errors = 1`,`html_errors = 1`,`display_startup_errors = On`,`log_errors = 1`,`always_populate_raw_post_data = -1`,`upload_max_filesize = 2000M`,`post_max_size = 2000M`,`allow_url_fopen = On`,`allow_url_include = Off`,`session.save_path = /home/web_user`,`implicit_flush = 1`,`output_buffering = 0`,`max_execution_time = 0`,`max_input_time = -1`,`disable_functions = ini_get_all`,`opcache.enable = 0`,`opcache.enable_cli = 0`].join(`
`),DEFAULT_BASE_URL=`http://example.com`,_default=`application/octet-stream`,asx=`video/x-ms-asf`,atom=`application/atom+xml`,avi=`video/x-msvideo`,avif=`image/avif`,bin=`application/octet-stream`,bmp=`image/x-ms-bmp`,cco=`application/x-cocoa`,cjs=`application/javascript`,css=`text/css`,data=`application/octet-stream`,deb=`application/octet-stream`,der=`application/x-x509-ca-cert`,dmg=`application/octet-stream`,doc=`application/msword`,docx=`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,eot=`application/vnd.ms-fontobject`,flv=`video/x-flv`,gif=`image/gif`,gz=`application/gzip`,hqx=`application/mac-binhex40`,htc=`text/x-component`,html=`text/html`,ico=`image/x-icon`,iso=`application/octet-stream`,jad=`text/vnd.sun.j2me.app-descriptor`,jar=`application/java-archive`,jardiff=`application/x-java-archive-diff`,jng=`image/x-jng`,jnlp=`application/x-java-jnlp-file`,jpg=`image/jpeg`,jpeg=`image/jpeg`,js=`application/javascript`,json=`application/json`,kml=`application/vnd.google-earth.kml+xml`,kmz=`application/vnd.google-earth.kmz`,m3u8=`application/vnd.apple.mpegurl`,m4a=`audio/x-m4a`,m4v=`video/x-m4v`,md=`text/plain`,mid=`audio/midi`,mjs=`application/javascript`,mml=`text/mathml`,mng=`video/x-mng`,mov=`video/quicktime`,mp3=`audio/mpeg`,mp4=`video/mp4`,mpeg=`video/mpeg`,msi=`application/octet-stream`,odg=`application/vnd.oasis.opendocument.graphics`,odp=`application/vnd.oasis.opendocument.presentation`,ods=`application/vnd.oasis.opendocument.spreadsheet`,odt=`application/vnd.oasis.opendocument.text`,ogg=`audio/ogg`,otf=`font/otf`,pdf=`application/pdf`,pl=`application/x-perl`,png=`image/png`,ppt=`application/vnd.ms-powerpoint`,pptx=`application/vnd.openxmlformats-officedocument.presentationml.presentation`,prc=`application/x-pilot`,ps=`application/postscript`,ra=`audio/x-realaudio`,rar=`application/x-rar-compressed`,rpm=`application/x-redhat-package-manager`,rss=`application/rss+xml`,rtf=`application/rtf`,run=`application/x-makeself`,sea=`application/x-sea`,sit=`application/x-stuffit`,svg=`image/svg+xml`,swf=`application/x-shockwave-flash`,tcl=`application/x-tcl`,tar=`application/x-tar`,tif=`image/tiff`,ts=`video/mp2t`,ttf=`font/ttf`,txt=`text/plain`,wasm=`application/wasm`,wbmp=`image/vnd.wap.wbmp`,webm=`video/webm`,webp=`image/webp`,wml=`text/vnd.wap.wml`,wmlc=`application/vnd.wap.wmlc`,wmv=`video/x-ms-wmv`,woff=`font/woff`,woff2=`font/woff2`,xhtml=`application/xhtml+xml`,xls=`application/vnd.ms-excel`,xlsx=`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,xml=`text/xml`,xpi=`application/x-xpinstall`,xspf=`application/xspf+xml`,zip=`application/zip`,mimeTypes={_default,"3gpp":`video/3gpp`,"7z":`application/x-7z-compressed`,asx,atom,avi,avif,bin,bmp,cco,cjs,css,data,deb,der,dmg,doc,docx,eot,flv,gif,gz,hqx,htc,html,ico,iso,jad,jar,jardiff,jng,jnlp,jpg,jpeg,js,json,kml,kmz,m3u8,m4a,m4v,md,mid,mjs,mml,mng,mov,mp3,mp4,mpeg,msi,odg,odp,ods,odt,ogg,otf,pdf,pl,png,ppt,pptx,prc,ps,ra,rar,rpm,rss,rtf,run,sea,sit,svg,swf,tcl,tar,tif,ts,ttf,txt,wasm,wbmp,webm,webp,wml,wmlc,wmv,woff,woff2,xhtml,xls,xlsx,xml,xpi,xspf,zip},PHPRequestHandler=class{constructor(e){_(this,R$2),_(this,C$1),_(this,Z$1),_(this,ie$1),_(this,X$1),_(this,ee$1),_(this,I$2),_(this,te$1),_(this,V$1),_(this,oe);let{documentRoot:n=`/www/`,absoluteUrl:r=typeof location==`object`?location.href:DEFAULT_BASE_URL,rewriteRules:i=[],pathAliases:o=[],getFileNotFoundAction:s=()=>({type:`404`})}=e,l=e=>{e.isDir(n)||e.mkdir(n),e.chdir(n),e.requestHandler=this};if(e.php)l(e.php),this.instanceManager=new SinglePHPInstanceManager({php:e.php});else if(e.phpFactory)this.instanceManager=new PHPProcessManager({phpFactory:async n=>{let r=await e.phpFactory({...n,requestHandler:this});return l(r),r},maxPhpInstances:e.maxPhpInstances});else throw Error(`Either php or phpFactory must be provided in the configuration.`);x$1(this,V$1,e.cookieStore===void 0?new HttpCookieStore:e.cookieStore),x$1(this,C$1,n);let N=new URL(r);x$1(this,ie$1,N.hostname),x$1(this,X$1,N.port?Number(N.port):N.protocol===`https:`?443:80),x$1(this,Z$1,(N.protocol||``).replace(`:`,``));let ae=u$1(this,X$1)!==443&&u$1(this,X$1)!==80;x$1(this,ee$1,[u$1(this,ie$1),ae?`:${u$1(this,X$1)}`:``].join(``)),x$1(this,I$2,N.pathname.replace(/\/+$/,``)),x$1(this,te$1,[`${u$1(this,Z$1)}://`,u$1(this,ee$1),u$1(this,I$2)].join(``)),this.rewriteRules=i,x$1(this,oe,o),this.getFileNotFoundAction=s}async getPrimaryPhp(){return await this.instanceManager.getPrimaryPhp()}pathToInternalUrl(e){return e.startsWith(`/`)||(e=`/${e}`),`${this.absoluteUrl}${e}`}internalUrlToPath(e){let n=new URL(e,`https://playground.internal`);return n.pathname.startsWith(u$1(this,I$2))&&(n.pathname=n.pathname.slice(u$1(this,I$2).length)),toRelativeUrl(n)}get absoluteUrl(){return u$1(this,te$1)}get documentRoot(){return u$1(this,C$1)}async request(e){let n=await this.requestStreamed(e),r=await PHPResponse.fromStreamedResponse(n);return r.ok()&&r.exitCode!==0?new PHPResponse(500,r.headers,r.bytes,r.errors,r.exitCode):r}async requestStreamed(e){let n=looksLikeAbsoluteUrl(e.url),r=new URL(e.url.split(`#`)[0],n?void 0:DEFAULT_BASE_URL),i=v(this,R$2,Me).call(this,r),o=await this.getPrimaryPhp(),s=removePathPrefix(decodeURIComponent(i.pathname),u$1(this,I$2)),l=v(this,R$2,le).call(this,s);if(o.isDir(l)){if(!s.endsWith(`/`))return StreamedPHPResponse.fromPHPResponse(new PHPResponse(301,{location:[`${i.pathname}/`]},new Uint8Array));for(let e of[`index.php`,`index.html`]){let n=m(l,e);if(o.isFile(n)){l=n,i.pathname=m(i.pathname,e);break}}}if(!o.isFile(l)){let e=s;for(;e.startsWith(`/`)&&e!==W$1(e);){e=W$1(e);let n=v(this,R$2,le).call(this,e);if(o.isFile(n)&&n.endsWith(`.php`)){l=v(this,R$2,le).call(this,e);break}}}if(!o.isFile(l)){let e=this.getFileNotFoundAction(i.pathname);switch(e.type){case`response`:return StreamedPHPResponse.fromPHPResponse(e.response);case`internal-redirect`:l=m(u$1(this,C$1),e.uri);break;case`404`:return StreamedPHPResponse.forHttpCode(404);default:throw Error(`Unsupported file-not-found action type: '${e.type}'`)}}return o.isFile(l)?l.endsWith(`.php`)?await v(this,R$2,Ie).call(this,e,r,i,l):StreamedPHPResponse.fromPHPResponse(v(this,R$2,Le$1).call(this,o,l)):StreamedPHPResponse.forHttpCode(404)}prepare_$_SERVER_superglobal(e,n,r){let i={REMOTE_ADDR:`127.0.0.1`,DOCUMENT_ROOT:u$1(this,C$1),HTTPS:u$1(this,te$1).startsWith(`https://`)?`on`:``};return i.REQUEST_URI=e.pathname+e.search,r.startsWith(u$1(this,C$1))&&(i.SCRIPT_NAME=r.substring(u$1(this,C$1).length),i.PHP_SELF=n.pathname,i.REQUEST_URI.startsWith(i.SCRIPT_NAME)&&(i.PATH_INFO=i.REQUEST_URI.substring(i.SCRIPT_NAME.length),i.PATH_INFO.includes(`?`)&&(i.PATH_INFO=i.PATH_INFO.substring(0,i.PATH_INFO.indexOf(`?`))))),i.QUERY_STRING=n.search.substring(1),i}async[Symbol.asyncDispose](){await this.instanceManager[Symbol.asyncDispose]()}},C$1=new WeakMap,Z$1=new WeakMap,ie$1=new WeakMap,X$1=new WeakMap,ee$1=new WeakMap,I$2=new WeakMap,te$1=new WeakMap,V$1=new WeakMap,oe=new WeakMap,R$2=new WeakSet,Me=function(e){let n=applyRewriteRules(removePathPrefix(decodeURIComponent(e.pathname),u$1(this,I$2)),this.rewriteRules),r=new URL(m(u$1(this,I$2),n),e.toString());for(let[n,i]of e.searchParams.entries())r.searchParams.append(n,i);return r},le=function(e){for(let n of u$1(this,oe))if(e===n.urlPrefix||e.startsWith(n.urlPrefix+`/`)){let r=e.slice(n.urlPrefix.length);return m(n.fsPath,r)}return m(u$1(this,C$1),e)},Le$1=function(e,n){let r=e.readFileAsBuffer(n);return new PHPResponse(200,{"content-length":[`${r.byteLength}`],"content-type":[inferMimeType(n)],"accept-ranges":[`bytes`],"cache-control":[`public, max-age=0`]},r)},Ie=async function(e,n,r,i){let o;try{o=await this.instanceManager.acquirePHPInstance()}catch(e){return e instanceof MaxPhpInstancesError?StreamedPHPResponse.forHttpCode(502):StreamedPHPResponse.forHttpCode(500)}let s;try{s=await v(this,R$2,Ae).call(this,o.php,e,n,r,i)}catch(e){throw o.reap(),e}return s.finished.finally(()=>{o?.reap()}),s},Ae=async function(e,n,r,i,o){let s=`GET`,l={host:u$1(this,ee$1),...normalizeHeaders(n.headers||{})};u$1(this,V$1)&&(l.cookie=u$1(this,V$1).getCookieRequestHeader());let N=n.body;if(typeof N==`object`&&!(N instanceof Uint8Array)){s=`POST`;let{bytes:e,contentType:n}=await encodeAsMultipart(N);N=e,l[`content-type`]=n}let ae=await e.runStream({relativeUri:ensurePathPrefix(toRelativeUrl(new URL(i.toString())),u$1(this,I$2)),protocol:u$1(this,Z$1),method:n.method||s,$_SERVER:this.prepare_$_SERVER_superglobal(r,i,o),body:N,scriptPath:o,headers:l});if(u$1(this,V$1)){let e=await ae.headers;u$1(this,V$1).rememberCookiesFromResponseHeaders(e)}return ae},schema12={properties:{name:{type:`string`},version:{type:`string`},mode:{type:`string`,const:`php-extension`},loadWithIniDirective:{$ref:`#/definitions/PHPExtensionLoadDirective`,description:"The first directive of the generated startup `.ini` file. Defaults to `extension`; use `zend_extension` for Zend extensions like Xdebug. Use `false` to stage the `.so` without registering it in php.ini."},iniEntries:{type:`object`,additionalProperties:{type:`string`},description:"Additional `key=value` lines for the generated startup `.ini` file."},env:{type:`object`,additionalProperties:{type:`string`},description:`Environment variables added before the extension is loaded.`},extensionDir:{type:`string`,description:"VFS directory where PHP.wasm writes the extension `.so` file and its per-extension ini file. Defaults to `PHP_EXTENSIONS_DIR`."},artifacts:{type:`array`,items:{type:`object`,properties:{phpVersion:{type:`string`,description:"PHP major/minor version, e.g. `8.4`."},sourcePath:{type:`string`,description:`Relative to the manifest URL/base URL, or an absolute URL.`},extraFiles:{$ref:`#/definitions/PHPExtensionManifestExtraFiles`,description:`URL-backed files needed only by this artifact.`}},required:[`phpVersion`,`sourcePath`],additionalProperties:!1}},extraFiles:{$ref:`#/definitions/PHPExtensionManifestExtraFiles`,description:`URL-backed files shared by every artifact in this manifest.`}}},schema15={properties:{nodes:{items:{properties:{type:{enum:[`file`,`directory`]}}}}}},func2=Object.prototype.hasOwnProperty,schema14={enum:[`extension`,`zend_extension`]},PHP_EXTENSIONS_DIR=`/internal/shared/extensions`,MAX_EXTENSION_SIDECAR_FILE_REQUESTS=5,NodeSABSyncReceiveMessageTransport=class e{static async create(){if(!e.receiveMessageOnPort)try{e.receiveMessageOnPort=require___vite_browser_external().receiveMessageOnPort}catch{e.receiveMessageOnPort=await __vitePreload(()=>Promise.resolve().then(()=>__toESM(require___vite_browser_external(),1)).then(e=>e.receiveMessageOnPort),void 0)}return new e}constructor(){}afterResponseSent(e){let{notifyBuffer:n}=e.data;if(n){let e=new Int32Array(n);e[0]=1,Atomics.notify(e,0)}}send(n,r,i){var o;let s=new SharedArrayBuffer(4),l=new Int32Array(s);l[0]=0;let N=generateUUID();if(n.postMessage({...r,id:N,notifyBuffer:s},i),Atomics.wait(l,0,0,5e3)===`timed-out`)throw Error(`Timeout waiting for response`);for(;;){let r=e.receiveMessageOnPort(n);if(r.message?.id===N)return r.message;if(!r)throw Error(`No response received`)}}},proxyMarker=Symbol(`Comlink.proxy`),createEndpoint=Symbol(`Comlink.endpoint`),releaseProxy=Symbol(`Comlink.releaseProxy`),finalizer=Symbol(`Comlink.finalizer`),throwMarker=Symbol(`Comlink.thrown`),WireValueType={RAW:`RAW`,HANDLER:`HANDLER`},MessageType={GET:`GET`,SET:`SET`,APPLY:`APPLY`,CONSTRUCT:`CONSTRUCT`,ENDPOINT:`ENDPOINT`,RELEASE:`RELEASE`},isObject=e=>typeof e==`object`&&!!e||typeof e==`function`,proxyTransferHandler={canHandle:e=>isObject(e)&&e[proxyMarker],serialize(e){let{port1:n,port2:r}=new MessageChannel;return expose(e,n),[r,[r]]},deserialize(e){return e.start(),wrap(e)}},throwTransferHandler$1={canHandle:e=>isObject(e)&&throwMarker in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){throw e.isError?Object.assign(Error(e.value.message),e.value):e.value}},transferHandlers=new Map([[`proxy`,proxyTransferHandler],[`throw`,throwTransferHandler$1]]),proxyCounter=new WeakMap,proxyFinalizers=`FinalizationRegistry`in globalThis&&new FinalizationRegistry(e=>{let n=(proxyCounter.get(e)||0)-1;proxyCounter.set(e,n),n===0&&releaseEndpoint(e)}),transferCache=new WeakMap,proxyByListener=new WeakMap,list=[Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError,globalThis.DOMException,globalThis.AssertionError,globalThis.SystemError].filter(Boolean).map(e=>[e.name,e]),errorConstructors=new Map(list),NonError=class e extends Error{constructor(n){super(e._prepareSuperMessage(n)),this.name=`NonError`}static _prepareSuperMessage(e){try{return JSON.stringify(e)}catch{return String(e)}}},errorProperties=[{property:`name`,enumerable:!1},{property:`message`,enumerable:!1},{property:`stack`,enumerable:!1},{property:`code`,enumerable:!0},{property:`cause`,enumerable:!1},{property:`errors`,enumerable:!1}],toJsonWasCalled=new WeakSet,toJSON=e=>{toJsonWasCalled.add(e);let n=e.toJSON();return toJsonWasCalled.delete(e),n},newError=e=>{let n=errorConstructors.get(e)??Error;return n===AggregateError?new n([]):new n},destroyCircular=({from:e,seen:n,to:r,forceEnumerable:i,maxDepth:o,depth:s,useToJSON:l,serialize:N})=>{if(r||=Array.isArray(e)?[]:!N&&isErrorLike(e)?newError(e.name):{},n.push(e),s>=o)return r;if(l&&typeof e.toJSON==`function`&&!toJsonWasCalled.has(e))return toJSON(e);let ae=e=>destroyCircular({from:e,seen:[...n],forceEnumerable:i,maxDepth:o,depth:s,useToJSON:l,serialize:N});for(let[i,o]of Object.entries(e)){if(o&&o instanceof Uint8Array&&o.constructor.name===`Buffer`){r[i]=`[object Buffer]`;continue}if(typeof o==`object`&&o&&typeof o.pipe==`function`){r[i]=`[object Stream]`;continue}if(typeof o!=`function`){if(!o||typeof o!=`object`){try{r[i]=o}catch{}continue}if(!n.includes(e[i])){s++,r[i]=ae(e[i]);continue}r[i]=`[Circular]`}}if(N||r instanceof Error)for(let{property:n,enumerable:o}of errorProperties)e[n]!==void 0&&e[n]!==null&&Object.defineProperty(r,n,{value:isErrorLike(e[n])||Array.isArray(e[n])?ae(e[n]):e[n],enumerable:i?!0:o,configurable:!0,writable:!0});return r},releaseApiProxy=releaseProxy,isTransferHandlersSetup=!1,throwTransferHandler=transferHandlers.get(`throw`),throwTransferHandlerCustom={canHandle:throwTransferHandler.canHandle,serialize:({value:e})=>{let n;return e instanceof Error?(n={isError:!0,value:serializeError(e)},n.value.originalErrorClassName=e.constructor.name):n={isError:!1,value:e},[n,[]]},deserialize:e=>{if(e.isError){let n=deserializeError(e.value),r=Error(`Comlink method call failed`),i=n;for(;i.cause;)i=i.cause;throw i.cause=r,n}throw e.value}},transferHandlers.set(`throw`,throwTransferHandlerCustom),MAX_ADDRESSABLE_FILE_OFFSET=BigInt(2**53-1),IntervalNode=class{constructor(e){this.left=null,this.right=null,this.range=e,this.max=e.end}},FileLockIntervalTree=class{constructor(){this.root=null}isEmpty(){return this.root===null}insert(e){this.root=this.insertNode(this.root,e)}findOverlapping(e){let n=[];return this.findOverlappingRanges(this.root,e,n),n}remove(e){this.root=this.removeNode(this.root,e)}findLocksForProcess(e){let n=[];return this.findLocksForProcessInNode(this.root,e,n),n}findStrictestExistingLockType(){let e=`unlocked`,n=r=>{if(r){if(r.range.type===`exclusive`){e=`exclusive`;return}r.range.type===`shared`&&(e=`shared`),n(r.left),n(r.right)}};return n(this.root),e}insertNode(e,n){return e?(n.start<e.range.start?e.left=this.insertNode(e.left,n):e.right=this.insertNode(e.right,n),e.max=this.bigintMax(e.max,n.end),e):new IntervalNode(n)}bigintMax(...e){return e.reduce((e,n)=>n>e?n:e,e[0])}findOverlappingRanges(e,n,r){e&&(this.doRangesOverlap(e.range,n)&&r.push(e.range),e.left&&e.left.max>=n.start&&this.findOverlappingRanges(e.left,n,r),e.right&&e.range.start<=n.end&&this.findOverlappingRanges(e.right,n,r))}doRangesOverlap(e,n){return e.start<n.end&&n.start<e.end}removeNode(e,n){if(!e)return null;if(this.areRangesEqual(e.range,n)){if(!e.left)return e.right;if(!e.right)return e.left;let n=this.findMin(e.right);e.range=n.range,e.right=this.removeNode(e.right,n.range)}else n.start<e.range.start?e.left=this.removeNode(e.left,n):e.right=this.removeNode(e.right,n);return e.max=e.range.end,e.left&&(e.max=this.bigintMax(e.max,e.left.max)),e.right&&(e.max=this.bigintMax(e.max,e.right.max)),e}findMin(e){let n=e;for(;n.left;)n=n.left;return n}areRangesEqual(e,n){return e.start===n.start&&e.end===n.end&&e.pid===n.pid&&e.fd===n.fd}findLocksForProcessInNode(e,n,r){e&&(e.range.pid===n&&r.push(e.range),this.findLocksForProcessInNode(e.left,n,r),this.findLocksForProcessInNode(e.right,n,r))}},FileLockManagerInMemory=class{constructor(){this.locks=new Map}lockWholeFile(e,n){if(this.locks.get(e)===void 0){if(n.type===`unlock`)return!0;this.locks.set(e,new FileLock)}let r=this.locks.get(e).lockWholeFile(n);return this.forgetPathIfUnlocked(e),r}lockFileByteRange(e,n){if(!this.locks.has(e)){if(n.type===`unlocked`)return!0;this.locks.set(e,new FileLock)}return this.locks.get(e).lockFileByteRange(n)}findFirstConflictingByteRangeLock(e,n){let r=this.locks.get(e);if(r!==void 0)return r.findFirstConflictingByteRangeLock(n)}releaseLocksForProcess(e){for(let[n,r]of this.locks.entries())r.releaseLocksForProcess(e),this.forgetPathIfUnlocked(n)}releaseLocksOnFdClose(e,n,r){let i=this.locks.get(r);i&&(i.releaseLocksOnFdClose(e,n),this.forgetPathIfUnlocked(r))}forgetPathIfUnlocked(e){let n=this.locks.get(e);n&&n.isUnlocked()&&this.locks.delete(e)}},FileLock=class{constructor(){this.rangeLocks=new FileLockIntervalTree,this.wholeFileLock={type:`unlocked`}}lockWholeFile(e){if(e.type===`unlock`)return this.wholeFileLock.type===`unlocked`||(this.wholeFileLock.type===`exclusive`&&this.wholeFileLock.pid===e.pid&&this.wholeFileLock.fd===e.fd?this.wholeFileLock={type:`unlocked`}:this.wholeFileLock.type===`shared`&&this.wholeFileLock.pidFds.has(e.pid)&&this.wholeFileLock.pidFds.get(e.pid).has(e.fd)&&(this.wholeFileLock.pidFds.get(e.pid).delete(e.fd),this.wholeFileLock.pidFds.get(e.pid).size===0&&this.wholeFileLock.pidFds.delete(e.pid),this.wholeFileLock.pidFds.size===0&&(this.wholeFileLock={type:`unlocked`}))),!0;if(this.isThereAConflictWithRequestedWholeFileLock(e))return!1;if(e.type===`exclusive`)return this.wholeFileLock={type:`exclusive`,pid:e.pid,fd:e.fd},!0;if(e.type===`shared`){this.wholeFileLock.type!==`shared`&&(this.wholeFileLock={type:`shared`,pidFds:new Map});let n=this.wholeFileLock;return n.pidFds.has(e.pid)||n.pidFds.set(e.pid,new Set),n.pidFds.get(e.pid).add(e.fd),!0}throw Error(`Unexpected wholeFileLock() op: '${e.type}'`)}lockFileByteRange(e){if(e.start===e.end&&(e={...e,end:MAX_ADDRESSABLE_FILE_OFFSET}),e.type===`unlocked`){let n=this.rangeLocks.findOverlapping(e).filter(n=>n.pid===e.pid);for(let r of n)this.rangeLocks.remove(r),r.start<e.start&&this.rangeLocks.insert({...r,end:e.start}),r.end>e.end&&this.rangeLocks.insert({...r,start:e.end});return!0}if(this.isThereAConflictWithRequestedRangeLock(e))return!1;let n=this.rangeLocks.findOverlapping(e).filter(n=>n.pid===e.pid),r=e.start,i=e.end;for(let e of n)this.rangeLocks.remove(e),e.start<r&&(r=e.start),e.end>i&&(i=e.end);let o={...e,start:r,end:i};return this.rangeLocks.insert(o),!0}findFirstConflictingByteRangeLock(e){e.start===e.end&&(e={...e,end:MAX_ADDRESSABLE_FILE_OFFSET});let n=this.rangeLocks.findOverlapping(e).find(n=>n.pid!==e.pid&&(e.type===`exclusive`||n.type===`exclusive`));if(n)return n;if(this.wholeFileLock.type!==`unlocked`&&(this.wholeFileLock.type===`exclusive`||e.type===`exclusive`))return{type:this.wholeFileLock.type,start:0n,end:0n,pid:-1}}releaseLocksForProcess(e){for(let n of this.rangeLocks.findLocksForProcess(e))this.lockFileByteRange({...n,type:`unlocked`});if(this.wholeFileLock.type===`exclusive`&&this.wholeFileLock.pid===e)this.lockWholeFile({pid:e,fd:this.wholeFileLock.fd,type:`unlock`});else if(this.wholeFileLock.type===`shared`&&this.wholeFileLock.pidFds.has(e))for(let n of this.wholeFileLock.pidFds.get(e))this.lockWholeFile({pid:e,fd:n,type:`unlock`})}releaseLocksOnFdClose(e,n){for(let n of this.rangeLocks.findLocksForProcess(e))this.lockFileByteRange({...n,type:`unlocked`});this.lockWholeFile({pid:e,fd:n,type:`unlock`})}isUnlocked(){return this.wholeFileLock.type===`unlocked`&&this.rangeLocks.isEmpty()}isThereAConflictWithRequestedRangeLock(e){return this.findFirstConflictingByteRangeLock(e)!==void 0}isThereAConflictWithRequestedWholeFileLock(e){return e.type===`exclusive`?!!(this.wholeFileLock.type===`exclusive`&&(this.wholeFileLock.fd!==e.fd||this.wholeFileLock.pid!==e.pid)||this.wholeFileLock.type===`shared`&&Array.from(this.wholeFileLock.pidFds).some(([n])=>n!==e.pid)||this.rangeLocks.findOverlapping({start:0n,end:MAX_ADDRESSABLE_FILE_OFFSET}).length>0):e.type===`shared`?this.wholeFileLock.type===`exclusive`&&this.wholeFileLock.pid!==e.pid||this.rangeLocks.findOverlapping({start:0n,end:MAX_ADDRESSABLE_FILE_OFFSET}).filter(e=>e.type===`exclusive`).length>0:!1}},FileLockManagerComposite=class{constructor({nativeLockManager:e,wasmLockManager:n}){this.nativeLockManager=e,this.wasmLockManager=n}lockWholeFile(e,n){if(n.type!==`unlock`){let r,i;try{if(r=this.nativeLockManager.lockWholeFile(e,n),!r)return!1;i=this.wasmLockManager.lockWholeFile(e,n)}catch(e){M$1.error(`Unexpected error in lockWholeFile()`,e)}finally{r&&!i&&this.nativeLockManager.lockWholeFile(e,{...n,type:`unlock`})}return!!r&&!!i}try{this.wasmLockManager.lockWholeFile(e,n)}catch(e){M$1.error(`Unexpected error unlocking whole file with in-memory lock manager`,e)}try{this.nativeLockManager.lockWholeFile(e,n)}catch(e){M$1.error(`Unexpected error unlocking whole file with native lock manager`,e)}return!0}lockFileByteRange(e,n,r){if(n.type!==`unlocked`){let i,o;try{if(i=this.nativeLockManager.lockFileByteRange(e,n,r),!i)return!1;o=this.wasmLockManager.lockFileByteRange(e,n,r)}catch(e){M$1.error(`Unexpected error in lockFileByteRange()`,e)}finally{i&&!o&&this.nativeLockManager.lockFileByteRange(e,{...n,type:`unlocked`},!1)}return!!i&&!!o}try{this.wasmLockManager.lockFileByteRange(e,n,r)}catch(e){M$1.error(`Unexpected error unlocking byte range with in-memory lock manager`,e)}try{this.nativeLockManager.lockFileByteRange(e,n,r)}catch(e){M$1.error(`Unexpected error unlocking byte range with native lock manager`,e)}return!0}findFirstConflictingByteRangeLock(e,n){try{return this.nativeLockManager.findFirstConflictingByteRangeLock(e,n)||this.wasmLockManager.findFirstConflictingByteRangeLock(e,n)}catch(e){M$1.error(`Unexpected error in findFirstConflictingByteRangeLock()`,e);return}}releaseLocksForProcess(e){try{this.wasmLockManager.releaseLocksForProcess(e)}catch(e){M$1.error(`Unexpected error in wasmLockManager.releaseLocksForProcess()`,e)}try{this.nativeLockManager.releaseLocksForProcess(e)}catch(e){M$1.error(`Unexpected error in nativeLockManager.releaseLocksForProcess()`,e)}}releaseLocksOnFdClose(e,n,r){try{this.wasmLockManager.releaseLocksOnFdClose(e,n,r)}catch(e){M$1.error(`Unexpected error in wasmLockManager.releaseLocksOnFdClose()`,e)}try{this.nativeLockManager.releaseLocksOnFdClose(e,n,r)}catch(e){M$1.error(`Unexpected error in nativeLockManager.releaseLocksOnFdClose()`,e)}}},maxValueForSigned32BitInteger=2**31-1,ProcessIdAllocator=class{constructor(e=1,n=maxValueForSigned32BitInteger){this.claimed=new Set,this.initialId=e,this.maxId=n,this.nextId=e}claim(){let e=this.maxId-this.initialId+1;for(let n=0;n<e;n++)if(this.claimed.has(this.nextId))this.nextId++,this.nextId>this.maxId&&(this.nextId=this.initialId);else return this.claimed.add(this.nextId),this.nextId;throw Error(`Unable to find free process ID after ${e} tries.`)}release(e){return this.claimed.has(e)?(this.claimed.delete(e),!0):!1}}}));async function w$1(e,n){let r;return r=[`GET`,`HEAD`].includes(e.method)?void 0:`body`in n?n.body:!e.bodyUsed&&e.body?e.body:await e.arrayBuffer(),new Request(n.url||e.url,{body:r,method:e.method,headers:e.headers,referrer:e.referrer,referrerPolicy:e.referrerPolicy,mode:e.mode===`navigate`?`same-origin`:e.mode,credentials:e.credentials,cache:e.cache,redirect:e.redirect,integrity:e.integrity,...r instanceof ReadableStream&&{duplex:`half`},...n})}async function A$1(){if(u!==void 0)return u;try{let e=new ReadableStream({start(e){e.close()}});await fetch(`data:,`,{method:`POST`,body:e,duplex:`half`}),u=!0}catch{u=!1}return u}async function W(e,n,r,i){var o;let s=typeof e==`string`?new Request(e,n):e,l=i?new URL(i):null,N=l?new URL(s.url,l):new URL(s.url);if(B(N))return await fetch(s);if(D(N))return s=await I$1(s,N),await fetch(s);if(N.protocol===`http:`){N.protocol=`https:`;let e=N.toString();s=await w$1(s,{url:e}),N=new URL(e)}if(!r||l&&N.protocol===l.protocol&&N.hostname===l.hostname&&N.port===l.port&&N.pathname.startsWith(l.pathname))return await fetch(s);let ae=s.clone();try{return await fetch(s)}catch{let e=new Headers(s.headers),n=e.get(`x-cors-proxy-allowed-request-headers`)?.split(`,`)||[],i=n.includes(`authorization`)||n.includes(`cookie`),o=e.get(`content-type`);o&&o.toLowerCase().includes(`multipart/form-data`)&&(e.set(`x-cors-proxy-content-type`,o),e.set(`content-type`,`application/octet-stream`));let l=null,N=s.method.toUpperCase();N!==`GET`&&N!==`HEAD`&&(l=await A$1()?ae.body:await ae.arrayBuffer()),l instanceof ReadableStream&&new URL(r,import.meta.url).protocol===`http:`&&(l=await new Response(l).arrayBuffer());let ce=await w$1(s,{url:`${r}${s.url}`,headers:e,body:l,...i&&{credentials:`include`}}),ue=await fetch(ce);if(!ue.headers.has(q))throw new O(s.url,ue.status,ue.statusText);return ue}}function B(e){return e.hostname===`localhost`||e.hostname===`127.0.0.1`||e.hostname===`[::1]`||e.hostname===`::1`}function D(e){return e.protocol===`https:`&&b$1.has(e.hostname)}async function I$1(e,n){let r=b$1.get(n.hostname);if(!r)return e;let i=new Headers(e.headers);for(let[e,n]of Object.entries(r))i.has(e)||i.set(e,n);return await w$1(e,{headers:i})}var u,O,q,b$1,init_web_service_worker=__esmMin((()=>{init_universal(),O=class extends Error{constructor(e,n,r){super(`Could not fetch ${e} – your network appears to be blocking this request (HTTP ${n}). This often happens on school, university, or corporate networks. Try switching to a different network or using a VPN.`),this.name=`FirewallInterferenceError`,this.url=e,this.status=n,this.statusText=r}},q=`X-Playground-Cors-Proxy`,b$1=new Map([[`api.anthropic.com`,{"anthropic-dangerous-direct-browser-access":`true`}],[`api.openai.com`,{}],[`generativelanguage.googleapis.com`,{}]])}));function R$1(e=fetch){let n={};return async function(r,i){if(!n[r]){n[r]={responsePromise:e(r,i),async nextResponse(){let e=await n[r].responsePromise,[i,o]=n[r].unlockedBodyStream.tee();return n[r].unlockedBodyStream=i,new Response(o,{status:e.status,statusText:e.statusText,headers:e.headers})}};let o=await n[r].responsePromise;n[r].unlockedBodyStream=o.body}return n[r].nextResponse()}}var init_common=__esmMin((()=>{})),jspi,init_esm=__esmMin((()=>{jspi=()=>(async()=>`Suspending`in WebAssembly)()})),A,init_fs_journal=__esmMin((()=>{init_universal(),init_util(),init_logger(),new v$1({concurrency:15})}));async function je(){let e=$e(),n;for(let r of e)try{return await __vitePreload(()=>import(r),[])}catch(e){n=e}throw Error("PHP next assets are missing. Run `npm run sync:php-next` before using PHP next locally.",{cause:n})}function $e(){var e,n;let r=globalThis.location?.origin||``,i=(globalThis.location?.pathname||`/`).startsWith(`/website-server/`)?`/website-server/`:`/`;return Array.from(new Set([`${r}${i}php-next/index.js`,`${r}/website-server/php-next/index.js`,`${r}/php-next/index.js`]))}async function Ge(e=LatestSupportedPHPVersion,n=`asyncify`){switch(e){case`next`:return(await je()).getPHPLoaderModule(n);case`8.5`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([0,1]))).getPHPLoaderModule();case`8.4`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([0,1]))).getPHPLoaderModule();case`8.3`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./web-8-3-DGueU1qR.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([2,1]))).getPHPLoaderModule();case`8.2`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([0,1]))).getPHPLoaderModule();case`8.1`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([0,1]))).getPHPLoaderModule();case`8.0`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([0,1]))).getPHPLoaderModule();case`7.4`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([0,1]))).getPHPLoaderModule();case`5.2`:return(await __vitePreload(async()=>{let{getPHPLoaderModule:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getPHPLoaderModule:e}},__vite__mapDeps([0,1]))).getPHPLoaderModule()}throw Error(`Unsupported PHP version ${e}`)}function y(e){return Object.fromEntries(Object.entries(e).map(([e,n])=>[n,e]))}function b(e){return new Uint8Array([e>>8&255,e&255])}function I(e){return new Uint8Array([e>>16&255,e>>8&255,e&255])}function X(e){let n=new ArrayBuffer(8);return new DataView(n).setBigUint64(0,BigInt(e),!1),new Uint8Array(n)}function Je(e){let n=new K(e.buffer),r=[];for(;!n.isFinished();){let i=n.offset,o=n.readUint16(),s=Ve[o],l=n.readUint16(),N=n.readUint8Array(l);if(!(s in se))continue;let ae=se[s];r.push({type:s,data:ae.decodeFromClient(N),raw:e.slice(i,i+4+l)})}return r}async function V(e,n,r,i){let o=R$3([n,r]),s=await crypto.subtle.importKey(`raw`,e,{name:`HMAC`,hash:{name:`SHA-256`}},!1,[`sign`]),l=o,N=[];for(;R$3(N).byteLength<i;){l=await ie(s,l);let e=await ie(s,R$3([l,o]));N.push(e)}return R$3(N).slice(0,i)}async function ie(e,n){return await crypto.subtle.sign({name:`HMAC`,hash:`SHA-256`},e,n)}function rt(e){return new TransformStream({transform(n,r){for(;n.length>0;)r.enqueue(n.slice(0,e)),n=n.slice(e)}})}function st(e,n){return it.generateCertificate(e,n)}function L(e){for(let[n,r]of Object.entries(at))if(r===e)return n;throw Error(`OID not found for name: ${e}`)}function _e(e){return`${e.getUTCFullYear().toString().substr(2)}${x(e.getUTCMonth()+1)}${x(e.getUTCDate())}${x(e.getUTCHours())}${x(e.getUTCMinutes())}${x(e.getUTCSeconds())}Z`}function x(e){return e.toString().padStart(2,`0`)}function _t(e,n){let r=new Date(e);return r.setUTCFullYear(r.getUTCFullYear()+n),r}function ht(e,n){if(n.length<8)return!1;if(e===443&&n[0]===C.Handshake&&n[1]===3&&n[2]>=1&&n[2]<=3)return`tls`;let r=new TextDecoder(`latin1`,{fatal:!0}).decode(n);return lt.some(e=>r.startsWith(e+` `))?`http`:`other`}function Ct(e,n){let r=e.length,i=n.length,o=r-i;for(let r=0;r<=o;r++){let o=!0;for(let s=0;s<i;s++)if(e[r+s]!==n[s]){o=!1;break}if(o)return r}return-1}async function ut(e=LatestSupportedPHPVersion){switch(e){case`8.5`:return(await __vitePreload(async()=>{let{getIntlExtensionPath:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getIntlExtensionPath:e}},__vite__mapDeps([0,1]))).getIntlExtensionPath();case`8.4`:return(await __vitePreload(async()=>{let{getIntlExtensionPath:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getIntlExtensionPath:e}},__vite__mapDeps([0,1]))).getIntlExtensionPath();case`8.3`:return(await __vitePreload(async()=>{let{getIntlExtensionPath:e}=await import(`./web-8-3-DGueU1qR.js`);return{getIntlExtensionPath:e}},__vite__mapDeps([2,1]))).getIntlExtensionPath();case`8.2`:return(await __vitePreload(async()=>{let{getIntlExtensionPath:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getIntlExtensionPath:e}},__vite__mapDeps([0,1]))).getIntlExtensionPath();case`8.1`:return(await __vitePreload(async()=>{let{getIntlExtensionPath:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getIntlExtensionPath:e}},__vite__mapDeps([0,1]))).getIntlExtensionPath();case`8.0`:return(await __vitePreload(async()=>{let{getIntlExtensionPath:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getIntlExtensionPath:e}},__vite__mapDeps([0,1]))).getIntlExtensionPath();case`7.4`:return(await __vitePreload(async()=>{let{getIntlExtensionPath:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{getIntlExtensionPath:e}},__vite__mapDeps([0,1]))).getIntlExtensionPath()}throw Error(`Unsupported PHP version ${e}`)}async function At(e,n,r,i=[]){return i.length?withResolvedPHPExtensions(r,await Promise.all(i.map(r=>Ht(e,n,r)))):r}async function Ht(e,n,r){if(isLegacyPHPVersion(e))throw Error(`Extensions are not available for legacy PHP ${e}.`);if(isPHPNextVersion(e))throw Error(`Extensions are not available for PHP next.`);if(typeof r==`object`&&`source`in r){if(n===`asyncify`)throw Error(`External PHP extensions require JSPI. Asyncify is only supported for PHP.wasm bundled extensions.`);return await resolvePHPExtension({...r,phpVersion:e})}let i=typeof r==`string`?r:r.name;if(i!==`intl`)throw Error(`Unknown bundled PHP web extension: ${String(i)}.`);let o=R$1(fetch),s=await ut(e),l=(await __vitePreload(async()=>{let{default:e}=await import(`./php-wasm-not-bundled-B_lfuRhw.js`);return{default:e}},__vite__mapDeps([0,1]))).default,[N,ae]=await Promise.all([s,l].map(async e=>{let n=await o(e);if(!n.ok)throw Error(`Failed to fetch bundled PHP web extension asset: ${n.url||e} (${n.status} ${n.statusText}).`);return await n.arrayBuffer()}));return await resolvePHPExtension({source:{format:`so`,name:`intl`,bytes:new Uint8Array(N)},phpVersion:e,env:{ICU_DATA:`/internal/shared`},extraFiles:{files:{"/internal/shared/icudt74l.dat":new Uint8Array(ae)}}})}async function xt(e,n={}){var r;`setImmediate`in globalThis||(globalThis.setImmediate=e=>setTimeout(e,0));let i=await jspi()?`jspi`:`asyncify`,o={...dt(),...n.emscriptenOptions||{},phpWasmAsyncMode:i};n.tcpOverFetch&&(o=ct(o,n.tcpOverFetch));let s=isLegacyPHPVersion(e),l=[...n.extensions??[]];if(n.withIntl&&!ft(l,`intl`)&&l.push(`intl`),s){let e=await o,n=e.preRun||[];o={...e,preRun:[...n,createLegacyPhpIniPreRunStep()]}}if(s&&l.length)throw Error(`Extensions are not available for legacy PHP ${e}.`);s||(o=At(e,i,await o,l));let[N,ae]=await Promise.all([Ge(e,i),o]);return(r=n.onPhpLoaderModuleLoaded)==null||r.call(n,N),await loadPHPRuntime(N,ae)}function ft(e,n){return e.some(e=>typeof e==`string`?e===n:!(`source`in e)&&e.name===n)}var K,F,R,Ve,He,ze,de,fe,Q,Ee,Te,pe,ee,we,te,Ye,Y,ne,Z,re,Ze,se,Xe,ye,me,Le,ge,C,T,Qe,et,G,k,tt,nt,p,P,it,at,E,c,ot,ct,St,lt,w,dt,init_web=__esmMin((()=>{init_universal(),init_util(),init_logger(),init_web_service_worker(),init_common(),init_esm(),init_fs_journal(),init_preload_helper(),K=class{constructor(e){this.offset=0,this.buffer=e,this.view=new DataView(e)}readUint8(){let e=this.view.getUint8(this.offset);return this.offset+=1,e}readUint16(){let e=this.view.getUint16(this.offset);return this.offset+=2,e}readUint32(){let e=this.view.getUint32(this.offset);return this.offset+=4,e}readUint8Array(e){let n=this.buffer.slice(this.offset,this.offset+e);return this.offset+=e,new Uint8Array(n)}isFinished(){return this.offset>=this.buffer.byteLength}},F=class{constructor(e){this.offset=0,this.buffer=new ArrayBuffer(e),this.uint8Array=new Uint8Array(this.buffer),this.view=new DataView(this.buffer)}writeUint8(e){this.view.setUint8(this.offset,e),this.offset+=1}writeUint16(e){this.view.setUint16(this.offset,e),this.offset+=2}writeUint32(e){this.view.setUint32(this.offset,e),this.offset+=4}writeUint8Array(e){this.uint8Array.set(e,this.offset),this.offset+=e.length}},R={server_name:0,max_fragment_length:1,client_certificate_url:2,trusted_ca_keys:3,truncated_hmac:4,status_request:5,user_mapping:6,client_authz:7,server_authz:8,cert_type:9,supported_groups:10,ec_point_formats:11,srp:12,signature_algorithms:13,use_srtp:14,heartbeat:15,application_layer_protocol_negotiation:16,status_request_v2:17,signed_certificate_timestamp:18,client_certificate_type:19,server_certificate_type:20,padding:21,encrypt_then_mac:22,extended_master_secret:23,token_binding:24,cached_info:25,tls_its:26,compress_certificate:27,record_size_limit:28,pwd_protect:29,pwo_clear:30,password_salt:31,ticket_pinning:32,tls_cert_with_extern_psk:33,delegated_credential:34,session_ticket:35,TLMSP:36,TLMSP_proxying:37,TLMSP_delegate:38,supported_ekt_ciphers:39,pre_shared_key:41,early_data:42,supported_versions:43,cookie:44,psk_key_exchange_modes:45,reserved:46,certificate_authorities:47,oid_filters:48,post_handshake_auth:49,signature_algorithms_cert:50,key_share:51,transparency_info:52,connection_id:54,renegotiation_info:65281},Ve=y(R),He={host_name:0},ze=y(He),de=class{static decodeFromClient(e){let n=new DataView(e.buffer),r=0,i=n.getUint16(r);r+=2;let o=[];for(;r<i+2;){let i=e[r];r+=1;let s=n.getUint16(r);r+=2;let l=e.slice(r,r+s);switch(r+=s,i){case He.host_name:o.push({name_type:ze[i],name:{host_name:new TextDecoder().decode(l)}});break;default:throw Error(`Unsupported name type ${i}`)}}return{server_name_list:o}}static encodeForClient(e){if(e!=null&&e.server_name_list.length)throw Error(`Encoding non-empty lists for ClientHello is not supported yet. Only empty lists meant for ServerHello are supported today.`);let n=new F(4);return n.writeUint16(R.server_name),n.writeUint16(0),n.uint8Array}},fe={uncompressed:0,ansiX962_compressed_prime:1,ansiX962_compressed_char2:2},Q=y(fe),Ee=class{static decodeFromClient(e){let n=new K(e.buffer),r=n.readUint8(),i=[];for(let e=0;e<r;e++){let e=n.readUint8();e in Q&&i.push(Q[e])}return i}static encodeForClient(e){let n=new F(6);return n.writeUint16(R.ec_point_formats),n.writeUint16(2),n.writeUint8(1),n.writeUint8(fe[e]),n.uint8Array}},Te={decodeFromClient(e){let n=e[0]??0;return{renegotiatedConnection:e.slice(1,1+n)}},encodeForClient(){let e=R.renegotiation_info,n=new Uint8Array([0]);return new Uint8Array([e>>8&255,e&255,0,n.length,...n])}},pe={TLS1_CK_PSK_WITH_RC4_128_SHA:138,TLS1_CK_PSK_WITH_3DES_EDE_CBC_SHA:139,TLS1_CK_PSK_WITH_AES_128_CBC_SHA:140,TLS1_CK_PSK_WITH_AES_256_CBC_SHA:141,TLS1_CK_DHE_PSK_WITH_RC4_128_SHA:142,TLS1_CK_DHE_PSK_WITH_3DES_EDE_CBC_SHA:143,TLS1_CK_DHE_PSK_WITH_AES_128_CBC_SHA:144,TLS1_CK_DHE_PSK_WITH_AES_256_CBC_SHA:145,TLS1_CK_RSA_PSK_WITH_RC4_128_SHA:146,TLS1_CK_RSA_PSK_WITH_3DES_EDE_CBC_SHA:147,TLS1_CK_RSA_PSK_WITH_AES_128_CBC_SHA:148,TLS1_CK_RSA_PSK_WITH_AES_256_CBC_SHA:149,TLS1_CK_PSK_WITH_AES_128_GCM_SHA256:168,TLS1_CK_PSK_WITH_AES_256_GCM_SHA384:169,TLS1_CK_DHE_PSK_WITH_AES_128_GCM_SHA256:170,TLS1_CK_DHE_PSK_WITH_AES_256_GCM_SHA384:171,TLS1_CK_RSA_PSK_WITH_AES_128_GCM_SHA256:172,TLS1_CK_RSA_PSK_WITH_AES_256_GCM_SHA384:173,TLS1_CK_PSK_WITH_AES_128_CBC_SHA256:174,TLS1_CK_PSK_WITH_AES_256_CBC_SHA384:175,TLS1_CK_PSK_WITH_NULL_SHA256:176,TLS1_CK_PSK_WITH_NULL_SHA384:177,TLS1_CK_DHE_PSK_WITH_AES_128_CBC_SHA256:178,TLS1_CK_DHE_PSK_WITH_AES_256_CBC_SHA384:179,TLS1_CK_DHE_PSK_WITH_NULL_SHA256:180,TLS1_CK_DHE_PSK_WITH_NULL_SHA384:181,TLS1_CK_RSA_PSK_WITH_AES_128_CBC_SHA256:182,TLS1_CK_RSA_PSK_WITH_AES_256_CBC_SHA384:183,TLS1_CK_RSA_PSK_WITH_NULL_SHA256:184,TLS1_CK_RSA_PSK_WITH_NULL_SHA384:185,TLS1_CK_PSK_WITH_NULL_SHA:44,TLS1_CK_DHE_PSK_WITH_NULL_SHA:45,TLS1_CK_RSA_PSK_WITH_NULL_SHA:46,TLS1_CK_RSA_WITH_AES_128_SHA:47,TLS1_CK_DH_DSS_WITH_AES_128_SHA:48,TLS1_CK_DH_RSA_WITH_AES_128_SHA:49,TLS1_CK_DHE_DSS_WITH_AES_128_SHA:50,TLS1_CK_DHE_RSA_WITH_AES_128_SHA:51,TLS1_CK_ADH_WITH_AES_128_SHA:52,TLS1_CK_RSA_WITH_AES_256_SHA:53,TLS1_CK_DH_DSS_WITH_AES_256_SHA:54,TLS1_CK_DH_RSA_WITH_AES_256_SHA:55,TLS1_CK_DHE_DSS_WITH_AES_256_SHA:56,TLS1_CK_DHE_RSA_WITH_AES_256_SHA:57,TLS1_CK_ADH_WITH_AES_256_SHA:58,TLS1_CK_RSA_WITH_NULL_SHA256:59,TLS1_CK_RSA_WITH_AES_128_SHA256:60,TLS1_CK_RSA_WITH_AES_256_SHA256:61,TLS1_CK_DH_DSS_WITH_AES_128_SHA256:62,TLS1_CK_DH_RSA_WITH_AES_128_SHA256:63,TLS1_CK_DHE_DSS_WITH_AES_128_SHA256:64,TLS1_CK_RSA_WITH_CAMELLIA_128_CBC_SHA:65,TLS1_CK_DH_DSS_WITH_CAMELLIA_128_CBC_SHA:66,TLS1_CK_DH_RSA_WITH_CAMELLIA_128_CBC_SHA:67,TLS1_CK_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA:68,TLS1_CK_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA:69,TLS1_CK_ADH_WITH_CAMELLIA_128_CBC_SHA:70,TLS1_CK_DHE_RSA_WITH_AES_128_SHA256:103,TLS1_CK_DH_DSS_WITH_AES_256_SHA256:104,TLS1_CK_DH_RSA_WITH_AES_256_SHA256:105,TLS1_CK_DHE_DSS_WITH_AES_256_SHA256:106,TLS1_CK_DHE_RSA_WITH_AES_256_SHA256:107,TLS1_CK_ADH_WITH_AES_128_SHA256:108,TLS1_CK_ADH_WITH_AES_256_SHA256:109,TLS1_CK_RSA_WITH_CAMELLIA_256_CBC_SHA:132,TLS1_CK_DH_DSS_WITH_CAMELLIA_256_CBC_SHA:133,TLS1_CK_DH_RSA_WITH_CAMELLIA_256_CBC_SHA:134,TLS1_CK_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA:135,TLS1_CK_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA:136,TLS1_CK_ADH_WITH_CAMELLIA_256_CBC_SHA:137,TLS1_CK_RSA_WITH_SEED_SHA:150,TLS1_CK_DH_DSS_WITH_SEED_SHA:151,TLS1_CK_DH_RSA_WITH_SEED_SHA:152,TLS1_CK_DHE_DSS_WITH_SEED_SHA:153,TLS1_CK_DHE_RSA_WITH_SEED_SHA:154,TLS1_CK_ADH_WITH_SEED_SHA:155,TLS1_CK_RSA_WITH_AES_128_GCM_SHA256:156,TLS1_CK_RSA_WITH_AES_256_GCM_SHA384:157,TLS1_CK_DHE_RSA_WITH_AES_128_GCM_SHA256:158,TLS1_CK_DHE_RSA_WITH_AES_256_GCM_SHA384:159,TLS1_CK_DH_RSA_WITH_AES_128_GCM_SHA256:160,TLS1_CK_DH_RSA_WITH_AES_256_GCM_SHA384:161,TLS1_CK_DHE_DSS_WITH_AES_128_GCM_SHA256:162,TLS1_CK_DHE_DSS_WITH_AES_256_GCM_SHA384:163,TLS1_CK_DH_DSS_WITH_AES_128_GCM_SHA256:164,TLS1_CK_DH_DSS_WITH_AES_256_GCM_SHA384:165,TLS1_CK_ADH_WITH_AES_128_GCM_SHA256:166,TLS1_CK_ADH_WITH_AES_256_GCM_SHA384:167,TLS1_CK_RSA_WITH_AES_128_CCM:49308,TLS1_CK_RSA_WITH_AES_256_CCM:49309,TLS1_CK_DHE_RSA_WITH_AES_128_CCM:49310,TLS1_CK_DHE_RSA_WITH_AES_256_CCM:49311,TLS1_CK_RSA_WITH_AES_128_CCM_8:49312,TLS1_CK_RSA_WITH_AES_256_CCM_8:49313,TLS1_CK_DHE_RSA_WITH_AES_128_CCM_8:49314,TLS1_CK_DHE_RSA_WITH_AES_256_CCM_8:49315,TLS1_CK_PSK_WITH_AES_128_CCM:49316,TLS1_CK_PSK_WITH_AES_256_CCM:49317,TLS1_CK_DHE_PSK_WITH_AES_128_CCM:49318,TLS1_CK_DHE_PSK_WITH_AES_256_CCM:49319,TLS1_CK_PSK_WITH_AES_128_CCM_8:49320,TLS1_CK_PSK_WITH_AES_256_CCM_8:49321,TLS1_CK_DHE_PSK_WITH_AES_128_CCM_8:49322,TLS1_CK_DHE_PSK_WITH_AES_256_CCM_8:49323,TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CCM:49324,TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CCM:49325,TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CCM_8:49326,TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CCM_8:49327,TLS1_CK_RSA_WITH_CAMELLIA_128_CBC_SHA256:186,TLS1_CK_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256:187,TLS1_CK_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256:188,TLS1_CK_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256:189,TLS1_CK_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256:190,TLS1_CK_ADH_WITH_CAMELLIA_128_CBC_SHA256:191,TLS1_CK_RSA_WITH_CAMELLIA_256_CBC_SHA256:192,TLS1_CK_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256:193,TLS1_CK_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256:194,TLS1_CK_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256:195,TLS1_CK_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256:196,TLS1_CK_ADH_WITH_CAMELLIA_256_CBC_SHA256:197,TLS1_CK_ECDH_ECDSA_WITH_NULL_SHA:49153,TLS1_CK_ECDH_ECDSA_WITH_RC4_128_SHA:49154,TLS1_CK_ECDH_ECDSA_WITH_DES_192_CBC3_SHA:49155,TLS1_CK_ECDH_ECDSA_WITH_AES_128_CBC_SHA:49156,TLS1_CK_ECDH_ECDSA_WITH_AES_256_CBC_SHA:49157,TLS1_CK_ECDHE_ECDSA_WITH_NULL_SHA:49158,TLS1_CK_ECDHE_ECDSA_WITH_RC4_128_SHA:49159,TLS1_CK_ECDHE_ECDSA_WITH_DES_192_CBC3_SHA:49160,TLS1_CK_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:49161,TLS1_CK_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:49162,TLS1_CK_ECDH_RSA_WITH_NULL_SHA:49163,TLS1_CK_ECDH_RSA_WITH_RC4_128_SHA:49164,TLS1_CK_ECDH_RSA_WITH_DES_192_CBC3_SHA:49165,TLS1_CK_ECDH_RSA_WITH_AES_128_CBC_SHA:49166,TLS1_CK_ECDH_RSA_WITH_AES_256_CBC_SHA:49167,TLS1_CK_ECDHE_RSA_WITH_NULL_SHA:49168,TLS1_CK_ECDHE_RSA_WITH_RC4_128_SHA:49169,TLS1_CK_ECDHE_RSA_WITH_DES_192_CBC3_SHA:49170,TLS1_CK_ECDHE_RSA_WITH_AES_128_CBC_SHA:49171,TLS1_CK_ECDHE_RSA_WITH_AES_256_CBC_SHA:49172,TLS1_CK_ECDH_anon_WITH_NULL_SHA:49173,TLS1_CK_ECDH_anon_WITH_RC4_128_SHA:49174,TLS1_CK_ECDH_anon_WITH_DES_192_CBC3_SHA:49175,TLS1_CK_ECDH_anon_WITH_AES_128_CBC_SHA:49176,TLS1_CK_ECDH_anon_WITH_AES_256_CBC_SHA:49177,TLS1_CK_SRP_SHA_WITH_3DES_EDE_CBC_SHA:49178,TLS1_CK_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA:49179,TLS1_CK_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA:49180,TLS1_CK_SRP_SHA_WITH_AES_128_CBC_SHA:49181,TLS1_CK_SRP_SHA_RSA_WITH_AES_128_CBC_SHA:49182,TLS1_CK_SRP_SHA_DSS_WITH_AES_128_CBC_SHA:49183,TLS1_CK_SRP_SHA_WITH_AES_256_CBC_SHA:49184,TLS1_CK_SRP_SHA_RSA_WITH_AES_256_CBC_SHA:49185,TLS1_CK_SRP_SHA_DSS_WITH_AES_256_CBC_SHA:49186,TLS1_CK_ECDHE_ECDSA_WITH_AES_128_SHA256:49187,TLS1_CK_ECDHE_ECDSA_WITH_AES_256_SHA384:49188,TLS1_CK_ECDH_ECDSA_WITH_AES_128_SHA256:49189,TLS1_CK_ECDH_ECDSA_WITH_AES_256_SHA384:49190,TLS1_CK_ECDHE_RSA_WITH_AES_128_SHA256:49191,TLS1_CK_ECDHE_RSA_WITH_AES_256_SHA384:49192,TLS1_CK_ECDH_RSA_WITH_AES_128_SHA256:49193,TLS1_CK_ECDH_RSA_WITH_AES_256_SHA384:49194,TLS1_CK_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:49195,TLS1_CK_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:49196,TLS1_CK_ECDH_ECDSA_WITH_AES_128_GCM_SHA256:49197,TLS1_CK_ECDH_ECDSA_WITH_AES_256_GCM_SHA384:49198,TLS1_CK_ECDHE_RSA_WITH_AES_128_GCM_SHA256:49199,TLS1_CK_ECDHE_RSA_WITH_AES_256_GCM_SHA384:49200,TLS1_CK_ECDH_RSA_WITH_AES_128_GCM_SHA256:49201,TLS1_CK_ECDH_RSA_WITH_AES_256_GCM_SHA384:49202,TLS1_CK_ECDHE_PSK_WITH_RC4_128_SHA:49203,TLS1_CK_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA:49204,TLS1_CK_ECDHE_PSK_WITH_AES_128_CBC_SHA:49205,TLS1_CK_ECDHE_PSK_WITH_AES_256_CBC_SHA:49206,TLS1_CK_ECDHE_PSK_WITH_AES_128_CBC_SHA256:49207,TLS1_CK_ECDHE_PSK_WITH_AES_256_CBC_SHA384:49208,TLS1_CK_ECDHE_PSK_WITH_NULL_SHA:49209,TLS1_CK_ECDHE_PSK_WITH_NULL_SHA256:49210,TLS1_CK_ECDHE_PSK_WITH_NULL_SHA384:49211,TLS1_CK_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256:49266,TLS1_CK_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384:49267,TLS1_CK_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256:49268,TLS1_CK_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384:49269,TLS1_CK_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256:49270,TLS1_CK_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384:49271,TLS1_CK_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256:49272,TLS1_CK_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384:49273,TLS1_CK_PSK_WITH_CAMELLIA_128_CBC_SHA256:49300,TLS1_CK_PSK_WITH_CAMELLIA_256_CBC_SHA384:49301,TLS1_CK_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256:49302,TLS1_CK_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384:49303,TLS1_CK_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256:49304,TLS1_CK_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384:49305,TLS1_CK_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256:49306,TLS1_CK_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384:49307,TLS1_CK_ECDHE_RSA_WITH_CHACHA20_POLY1305:52392,TLS1_CK_ECDHE_ECDSA_WITH_CHACHA20_POLY1305:52393,TLS1_CK_DHE_RSA_WITH_CHACHA20_POLY1305:52394,TLS1_CK_PSK_WITH_CHACHA20_POLY1305:52395,TLS1_CK_ECDHE_PSK_WITH_CHACHA20_POLY1305:52396,TLS1_CK_DHE_PSK_WITH_CHACHA20_POLY1305:52397,TLS1_CK_RSA_PSK_WITH_CHACHA20_POLY1305:52398},ee=y(pe),we={secp256r1:23,secp384r1:24,secp521r1:25,x25519:29,x448:30},te=y(we),Ye=class{static decodeFromClient(e){let n=new K(e.buffer);n.readUint16();let r=[];for(;!n.isFinished();){let e=n.readUint16();e in te&&r.push(te[e])}return r}static encodeForClient(e){let n=new F(6);return n.writeUint16(R.supported_groups),n.writeUint16(2),n.writeUint16(we[e]),n.uint8Array}},Y={anonymous:0,rsa:1,dsa:2,ecdsa:3},ne=y(Y),Z={none:0,md5:1,sha1:2,sha224:3,sha256:4,sha384:5,sha512:6},re=y(Z),Ze=class{static decodeFromClient(e){let n=new K(e.buffer);n.readUint16();let r=[];for(;!n.isFinished();){let e=n.readUint8(),i=n.readUint8();if(ne[i]){if(!re[e]){M$1.warn(`Unknown hash algorithm: ${e}`);continue}r.push({algorithm:ne[i],hash:re[e]})}}return r}static encodeforClient(e,n){let r=new F(6);return r.writeUint16(R.signature_algorithms),r.writeUint16(2),r.writeUint8(Z[e]),r.writeUint8(Y[n]),r.uint8Array}},se={server_name:de,signature_algorithms:Ze,supported_groups:Ye,ec_point_formats:Ee,renegotiation_info:Te},Xe={Null:0},ye={Warning:1,Fatal:2},me=y(ye),Le={CloseNotify:0,UnexpectedMessage:10,BadRecordMac:20,DecryptionFailed:21,RecordOverflow:22,DecompressionFailure:30,HandshakeFailure:40,NoCertificate:41,BadCertificate:42,UnsupportedCertificate:43,CertificateRevoked:44,CertificateExpired:45,CertificateUnknown:46,IllegalParameter:47,UnknownCa:48,AccessDenied:49,DecodeError:50,DecryptError:51,ExportRestriction:60,ProtocolVersion:70,InsufficientSecurity:71,InternalError:80,UserCanceled:90,NoRenegotiation:100,UnsupportedExtension:110},ge=y(Le),C={ChangeCipherSpec:20,Alert:21,Handshake:22,ApplicationData:23},T={HelloRequest:0,ClientHello:1,ServerHello:2,Certificate:11,ServerKeyExchange:12,ServerHelloDone:14,ClientKeyExchange:16,Finished:20},Qe={NamedCurve:3},et={secp256r1:23},G=class extends Error{},k=new Uint8Array([3,3]),tt=crypto.subtle.generateKey({name:`ECDH`,namedCurve:`P-256`},!0,[`deriveKey`,`deriveBits`]),nt=class{constructor(){this.receivedRecordSequenceNumber=0,this.sentRecordSequenceNumber=0,this.closed=!1,this.receivedBytesBuffer=new Uint8Array,this.receivedTLSRecords=[],this.partialTLSMessages={},this.handshakeMessages=[],this.MAX_CHUNK_SIZE=16384,this.clientEnd={upstream:new TransformStream,downstream:new TransformStream},this.clientDownstreamWriter=this.clientEnd.downstream.writable.getWriter(),this.clientUpstreamReader=this.clientEnd.upstream.readable.getReader(),this.serverEnd={upstream:new TransformStream,downstream:rt(this.MAX_CHUNK_SIZE)},this.serverUpstreamWriter=this.serverEnd.upstream.writable.getWriter();let e=this;this.serverEnd.downstream.readable.pipeTo(new WritableStream({async write(n){await e.writeTLSRecord(C.ApplicationData,n)},async abort(n){e.clientDownstreamWriter.releaseLock(),e.clientEnd.downstream.writable.abort(n),e.close()},close(){e.close()}})).catch(()=>{})}async close(){if(!this.closed){this.closed=!0;try{await this.clientDownstreamWriter.close()}catch{}try{await this.clientUpstreamReader.cancel()}catch{}try{await this.serverUpstreamWriter.close()}catch{}try{await this.clientEnd.upstream.readable.cancel()}catch{}try{await this.clientEnd.downstream.writable.close()}catch{}}}async TLSHandshake(e,n){let r=await this.readNextHandshakeMessage(T.ClientHello);if(!r.body.cipher_suites.length)throw Error(`Client did not propose any supported cipher suites.`);let i=crypto.getRandomValues(new Uint8Array(32));await this.writeTLSRecord(C.Handshake,P.serverHello(r.body,i,Xe.Null)),await this.writeTLSRecord(C.Handshake,P.certificate(n));let o=await tt,s=r.body.random,l=await P.ECDHEServerKeyExchange(s,i,o,e);await this.writeTLSRecord(C.Handshake,l),await this.writeTLSRecord(C.Handshake,P.serverHelloDone());let N=await this.readNextHandshakeMessage(T.ClientKeyExchange);await this.readNextMessage(C.ChangeCipherSpec),this.sessionKeys=await this.deriveSessionKeys({clientRandom:s,serverRandom:i,serverPrivateKey:o.privateKey,clientPublicKey:await crypto.subtle.importKey(`raw`,N.body.exchange_keys,{name:`ECDH`,namedCurve:`P-256`},!1,[])}),await this.readNextHandshakeMessage(T.Finished),await this.writeTLSRecord(C.ChangeCipherSpec,P.changeCipherSpec()),await this.writeTLSRecord(C.Handshake,await P.createFinishedMessage(this.handshakeMessages,this.sessionKeys.masterSecret)),this.handshakeMessages=[],this.pollForClientMessages()}async deriveSessionKeys({clientRandom:e,serverRandom:n,serverPrivateKey:r,clientPublicKey:i}){let o=await crypto.subtle.deriveBits({name:`ECDH`,public:i},r,256),s=new Uint8Array(await V(o,new TextEncoder().encode(`master secret`),D$2([e,n]),48)),l=await V(s,new TextEncoder().encode(`key expansion`),D$2([n,e]),40),N=new K(l),ae=N.readUint8Array(16),ce=N.readUint8Array(16),ue=N.readUint8Array(4),he=N.readUint8Array(4);return{masterSecret:s,clientWriteKey:await crypto.subtle.importKey(`raw`,ae,{name:`AES-GCM`},!1,[`encrypt`,`decrypt`]),serverWriteKey:await crypto.subtle.importKey(`raw`,ce,{name:`AES-GCM`},!1,[`encrypt`,`decrypt`]),clientIV:ue,serverIV:he}}async readNextHandshakeMessage(e){let n=await this.readNextMessage(C.Handshake);if(n.msg_type!==e)throw Error(`Expected ${e} message`);return n}async readNextMessage(e){let n,r=!1;do n=await this.readNextTLSRecord(e),r=await this.accumulateUntilMessageIsComplete(n);while(r===!1);let i=p.TLSMessage(n.type,r);return n.type===C.Handshake&&this.handshakeMessages.push(n.fragment),i}async readNextTLSRecord(e){for(;;){for(let n=0;n<this.receivedTLSRecords.length;n++){let r=this.receivedTLSRecords[n];if(r.type===e)return this.receivedTLSRecords.splice(n,1),r}let n=await this.pollBytes(5),r=n[3]<<8|n[4],i=n[0],o=await this.pollBytes(r),s={type:i,version:{major:n[1],minor:n[2]},length:r,fragment:this.sessionKeys&&i!==C.ChangeCipherSpec?await this.decryptData(i,o):o};if(s.type===C.Alert){let e=s.fragment[0],n=s.fragment[1],r=me[e],i=ge[n];throw e===ye.Warning&&n===Le.CloseNotify?new G(`TLS connection closed by peer (CloseNotify)`):Error(`TLS alert received: ${r} ${i}`)}this.receivedTLSRecords.push(s)}}async pollBytes(e){for(;this.receivedBytesBuffer.length<e;){let{value:n,done:r}=await this.clientUpstreamReader.read();if(r)throw await this.close(),new G(`TLS connection closed`);if(this.receivedBytesBuffer=D$2([this.receivedBytesBuffer,n]),this.receivedBytesBuffer.length>=e)break;await new Promise(e=>setTimeout(e,100))}let n=this.receivedBytesBuffer.slice(0,e);return this.receivedBytesBuffer=this.receivedBytesBuffer.slice(e),n}async pollForClientMessages(){try{for(;;){let e=await this.readNextMessage(C.ApplicationData);this.serverUpstreamWriter.write(e.body)}}catch(e){if(e instanceof G)return;throw e}}async decryptData(e,n){let r=this.sessionKeys.clientIV,i=n.slice(0,8),o=new Uint8Array([...r,...i]),s=await crypto.subtle.decrypt({name:`AES-GCM`,iv:o,additionalData:new Uint8Array([...X(this.receivedRecordSequenceNumber),e,...k,...b(n.length-8-16)]),tagLength:128},this.sessionKeys.clientWriteKey,n.slice(8));return++this.receivedRecordSequenceNumber,new Uint8Array(s)}async accumulateUntilMessageIsComplete(e){this.partialTLSMessages[e.type]=D$2([this.partialTLSMessages[e.type]||new Uint8Array,e.fragment]);let n=this.partialTLSMessages[e.type];switch(e.type){case C.Handshake:{if(n.length<4)return!1;let e=n[1]<<8|n[2];if(n.length<3+e)return!1;break}case C.Alert:if(n.length<2)return!1;break;case C.ChangeCipherSpec:case C.ApplicationData:break;default:throw Error(`TLS: Unsupported record type ${e.type}`)}return delete this.partialTLSMessages[e.type],n}async writeTLSRecord(e,n){e===C.Handshake&&this.handshakeMessages.push(n),this.sessionKeys&&e!==C.ChangeCipherSpec&&(n=await this.encryptData(e,n));let r=k,i=n.length,o=new Uint8Array(5);o[0]=e,o[1]=r[0],o[2]=r[1],o[3]=i>>8&255,o[4]=i&255;let s=D$2([o,n]);this.clientDownstreamWriter.write(s)}async encryptData(e,n){let r=this.sessionKeys.serverIV,i=crypto.getRandomValues(new Uint8Array(8)),o=new Uint8Array([...r,...i]),s=new Uint8Array([...X(this.sentRecordSequenceNumber),e,...k,...b(n.length)]),l=await crypto.subtle.encrypt({name:`AES-GCM`,iv:o,additionalData:s,tagLength:128},this.sessionKeys.serverWriteKey,n);return++this.sentRecordSequenceNumber,D$2([i,new Uint8Array(l)])}},p=class e{static TLSMessage(n,r){switch(n){case C.Handshake:return e.clientHandshake(r);case C.Alert:return e.alert(r);case C.ChangeCipherSpec:return e.changeCipherSpec();case C.ApplicationData:return e.applicationData(r);default:throw Error(`TLS: Unsupported TLS record type ${n}`)}}static parseCipherSuites(e){let n=new K(e);n.readUint16();let r=[];for(;!n.isFinished();){let e=n.readUint16();e in ee&&r.push(ee[e])}return r}static applicationData(e){return{type:C.ApplicationData,body:e}}static changeCipherSpec(){return{type:C.ChangeCipherSpec,body:new Uint8Array}}static alert(e){return{type:C.Alert,level:me[e[0]],description:ge[e[1]]}}static clientHandshake(n){let r=n[0],i=n[1]<<16|n[2]<<8|n[3],o=n.slice(4),s;switch(r){case T.HelloRequest:s=e.clientHelloRequestPayload();break;case T.ClientHello:s=e.clientHelloPayload(o);break;case T.ClientKeyExchange:s=e.clientKeyExchangePayload(o);break;case T.Finished:s=e.clientFinishedPayload(o);break;default:throw Error(`Invalid handshake type ${r}`)}return{type:C.Handshake,msg_type:r,length:i,body:s}}static clientHelloRequestPayload(){return{}}static clientHelloPayload(n){let r=new K(n.buffer),i={client_version:r.readUint8Array(2),random:r.readUint8Array(32)},o=r.readUint8();i.session_id=r.readUint8Array(o);let s=r.readUint16();i.cipher_suites=e.parseCipherSuites(r.readUint8Array(s).buffer);let l=r.readUint8();i.compression_methods=r.readUint8Array(l);let N=r.readUint16();return i.extensions=Je(r.readUint8Array(N)),i}static clientKeyExchangePayload(e){return{exchange_keys:e.slice(1,e.length)}}static clientFinishedPayload(e){return{verify_data:e}}},P=class{static certificate(e){let n=[];for(let r of e)n.push(I(r.byteLength)),n.push(new Uint8Array(r));let r=D$2(n),i=new Uint8Array([...I(r.byteLength),...r]);return new Uint8Array([T.Certificate,...I(i.length),...i])}static async ECDHEServerKeyExchange(e,n,r,i){let o=new Uint8Array(await crypto.subtle.exportKey(`raw`,r.publicKey)),s=new Uint8Array([Qe.NamedCurve,...b(et.secp256r1),o.byteLength,...o]),l=await crypto.subtle.sign({name:`RSASSA-PKCS1-v1_5`,hash:`SHA-256`},i,new Uint8Array([...e,...n,...s])),N=new Uint8Array(l),ae=new Uint8Array([Z.sha256,Y.rsa]),ce=new Uint8Array([...s,...ae,...b(N.length),...N]);return new Uint8Array([T.ServerKeyExchange,...I(ce.length),...ce])}static serverHello(e,n,r){let i=D$2(e.extensions.map(e=>{switch(e.type){case`server_name`:return de.encodeForClient();case`ec_point_formats`:return Ee.encodeForClient(`uncompressed`);case`renegotiation_info`:return Te.encodeForClient()}}).filter(e=>e!==void 0)),o=new Uint8Array,s=new Uint8Array([...k,...n,o.length,...o,...b(pe.TLS1_CK_ECDHE_RSA_WITH_AES_128_GCM_SHA256),r,...b(i.length),...i]);return new Uint8Array([T.ServerHello,...I(s.length),...s])}static serverHelloDone(){return new Uint8Array([T.ServerHelloDone,...I(0)])}static async createFinishedMessage(e,n){let r=await crypto.subtle.digest(`SHA-256`,D$2(e)),i=new Uint8Array(await V(n,new TextEncoder().encode(`server finished`),r,12));return new Uint8Array([T.Finished,...I(i.length),...i])}static changeCipherSpec(){return new Uint8Array([1])}},it=class{static async generateCertificate(e,n){let r=await crypto.subtle.generateKey({name:`RSASSA-PKCS1-v1_5`,hash:`SHA-256`,modulusLength:2048,publicExponent:new Uint8Array([1,0,1])},!0,[`sign`,`verify`]),i=await this.signingRequest(e,r.publicKey);return{keyPair:r,certificate:await this.sign(i,n?.privateKey??r.privateKey),tbsCertificate:i,tbsDescription:e}}static async sign(e,n){let r=await crypto.subtle.sign({name:`RSASSA-PKCS1-v1_5`,hash:`SHA-256`},n,e.buffer);return c.sequence([new Uint8Array(e.buffer),this.signatureAlgorithm(`sha256WithRSAEncryption`),c.bitString(new Uint8Array(r))])}static async signingRequest(e,n){let r=[];return e.keyUsage&&r.push(this.keyUsage(e.keyUsage)),e.extKeyUsage&&r.push(this.extKeyUsage(e.extKeyUsage)),e.subjectAltNames&&r.push(this.subjectAltName(e.subjectAltNames)),e.nsCertType&&r.push(this.nsCertType(e.nsCertType)),e.basicConstraints&&r.push(this.basicConstraints(e.basicConstraints)),c.sequence([this.version(e.version),this.serialNumber(e.serialNumber),this.signatureAlgorithm(e.signatureAlgorithm),this.distinguishedName(e.issuer??e.subject),this.validity(e.validity),this.distinguishedName(e.subject),await this.subjectPublicKeyInfo(n),this.extensions(r)])}static version(e=2){return c.ASN1(160,c.integer(new Uint8Array([e])))}static serialNumber(e=crypto.getRandomValues(new Uint8Array(4))){return c.integer(e)}static signatureAlgorithm(e=`sha256WithRSAEncryption`){return c.sequence([c.objectIdentifier(L(e)),c.null()])}static async subjectPublicKeyInfo(e){return new Uint8Array(await crypto.subtle.exportKey(`spki`,e))}static extensions(e){return c.ASN1(163,c.sequence(e))}static distinguishedName(e){let n=[];for(let[r,i]of Object.entries(e)){let e=[c.objectIdentifier(L(r))];switch(r){case`countryName`:e.push(c.printableString(i));break;default:e.push(c.utf8String(i))}n.push(c.set([c.sequence(e)]))}return c.sequence(n)}static validity(e){return c.sequence([c.ASN1(E.UTCTime,new TextEncoder().encode(_e(e?.notBefore??new Date))),c.ASN1(E.UTCTime,new TextEncoder().encode(_e(e?.notAfter??_t(new Date,10))))])}static basicConstraints({ca:e=!0,pathLenConstraint:n=void 0}){let r=[c.boolean(e)];return n!==void 0&&r.push(c.integer(new Uint8Array([n]))),c.sequence([c.objectIdentifier(L(`basicConstraints`)),c.octetString(c.sequence(r))])}static keyUsage(e){let n=new Uint8Array([0]);return e!=null&&e.digitalSignature&&(n[0]|=1),e!=null&&e.nonRepudiation&&(n[0]|=2),e!=null&&e.keyEncipherment&&(n[0]|=4),e!=null&&e.dataEncipherment&&(n[0]|=8),e!=null&&e.keyAgreement&&(n[0]|=16),e!=null&&e.keyCertSign&&(n[0]|=32),e!=null&&e.cRLSign&&(n[0]|=64),e!=null&&e.encipherOnly&&(n[0]|=128),e!=null&&e.decipherOnly&&(n[0]|=64),c.sequence([c.objectIdentifier(L(`keyUsage`)),c.boolean(!0),c.octetString(c.bitString(n))])}static extKeyUsage(e={}){return c.sequence([c.objectIdentifier(L(`extKeyUsage`)),c.boolean(!0),c.octetString(c.sequence(Object.entries(e).map(([e,n])=>n?c.objectIdentifier(L(e)):c.null())))])}static nsCertType(e){let n=new Uint8Array([0]);return e.client&&(n[0]|=1),e.server&&(n[0]|=2),e.email&&(n[0]|=4),e.objsign&&(n[0]|=8),e.sslCA&&(n[0]|=16),e.emailCA&&(n[0]|=32),e.objCA&&(n[0]|=64),c.sequence([c.objectIdentifier(L(`nsCertType`)),c.octetString(n)])}static subjectAltName(e){var n,r;let i=e.dnsNames?.map(e=>{let n=c.ia5String(e);return c.contextSpecific(2,n)})||[],o=e.ipAddresses?.map(e=>{let n=c.ia5String(e);return c.contextSpecific(7,n)})||[],s=c.octetString(c.sequence([...i,...o]));return c.sequence([c.objectIdentifier(L(`subjectAltName`)),c.boolean(!0),s])}},at={"1.2.840.113549.1.1.1":`rsaEncryption`,"1.2.840.113549.1.1.4":`md5WithRSAEncryption`,"1.2.840.113549.1.1.5":`sha1WithRSAEncryption`,"1.2.840.113549.1.1.7":`RSAES-OAEP`,"1.2.840.113549.1.1.8":`mgf1`,"1.2.840.113549.1.1.9":`pSpecified`,"1.2.840.113549.1.1.10":`RSASSA-PSS`,"1.2.840.113549.1.1.11":`sha256WithRSAEncryption`,"1.2.840.113549.1.1.12":`sha384WithRSAEncryption`,"1.2.840.113549.1.1.13":`sha512WithRSAEncryption`,"1.3.101.112":`EdDSA25519`,"1.2.840.10040.4.3":`dsa-with-sha1`,"1.3.14.3.2.7":`desCBC`,"1.3.14.3.2.26":`sha1`,"1.3.14.3.2.29":`sha1WithRSASignature`,"2.16.840.1.101.3.4.2.1":`sha256`,"2.16.840.1.101.3.4.2.2":`sha384`,"2.16.840.1.101.3.4.2.3":`sha512`,"2.16.840.1.101.3.4.2.4":`sha224`,"2.16.840.1.101.3.4.2.5":`sha512-224`,"2.16.840.1.101.3.4.2.6":`sha512-256`,"1.2.840.113549.2.2":`md2`,"1.2.840.113549.2.5":`md5`,"1.2.840.113549.1.7.1":`data`,"1.2.840.113549.1.7.2":`signedData`,"1.2.840.113549.1.7.3":`envelopedData`,"1.2.840.113549.1.7.4":`signedAndEnvelopedData`,"1.2.840.113549.1.7.5":`digestedData`,"1.2.840.113549.1.7.6":`encryptedData`,"1.2.840.113549.1.9.1":`emailAddress`,"1.2.840.113549.1.9.2":`unstructuredName`,"1.2.840.113549.1.9.3":`contentType`,"1.2.840.113549.1.9.4":`messageDigest`,"1.2.840.113549.1.9.5":`signingTime`,"1.2.840.113549.1.9.6":`counterSignature`,"1.2.840.113549.1.9.7":`challengePassword`,"1.2.840.113549.1.9.8":`unstructuredAddress`,"1.2.840.113549.1.9.14":`extensionRequest`,"1.2.840.113549.1.9.20":`friendlyName`,"1.2.840.113549.1.9.21":`localKeyId`,"1.2.840.113549.1.9.22.1":`x509Certificate`,"1.2.840.113549.1.12.10.1.1":`keyBag`,"1.2.840.113549.1.12.10.1.2":`pkcs8ShroudedKeyBag`,"1.2.840.113549.1.12.10.1.3":`certBag`,"1.2.840.113549.1.12.10.1.4":`crlBag`,"1.2.840.113549.1.12.10.1.5":`secretBag`,"1.2.840.113549.1.12.10.1.6":`safeContentsBag`,"1.2.840.113549.1.5.13":`pkcs5PBES2`,"1.2.840.113549.1.5.12":`pkcs5PBKDF2`,"1.2.840.113549.1.12.1.1":`pbeWithSHAAnd128BitRC4`,"1.2.840.113549.1.12.1.2":`pbeWithSHAAnd40BitRC4`,"1.2.840.113549.1.12.1.3":`pbeWithSHAAnd3-KeyTripleDES-CBC`,"1.2.840.113549.1.12.1.4":`pbeWithSHAAnd2-KeyTripleDES-CBC`,"1.2.840.113549.1.12.1.5":`pbeWithSHAAnd128BitRC2-CBC`,"1.2.840.113549.1.12.1.6":`pbewithSHAAnd40BitRC2-CBC`,"1.2.840.113549.2.7":`hmacWithSHA1`,"1.2.840.113549.2.8":`hmacWithSHA224`,"1.2.840.113549.2.9":`hmacWithSHA256`,"1.2.840.113549.2.10":`hmacWithSHA384`,"1.2.840.113549.2.11":`hmacWithSHA512`,"1.2.840.113549.3.7":`des-EDE3-CBC`,"2.16.840.1.101.3.4.1.2":`aes128-CBC`,"2.16.840.1.101.3.4.1.22":`aes192-CBC`,"2.16.840.1.101.3.4.1.42":`aes256-CBC`,"2.5.4.3":`commonName`,"2.5.4.4":`surname`,"2.5.4.5":`serialNumber`,"2.5.4.6":`countryName`,"2.5.4.7":`localityName`,"2.5.4.8":`stateOrProvinceName`,"2.5.4.9":`streetAddress`,"2.5.4.10":`organizationName`,"2.5.4.11":`organizationalUnitName`,"2.5.4.12":`title`,"2.5.4.13":`description`,"2.5.4.15":`businessCategory`,"2.5.4.17":`postalCode`,"2.5.4.42":`givenName`,"1.3.6.1.4.1.311.60.2.1.2":`jurisdictionOfIncorporationStateOrProvinceName`,"1.3.6.1.4.1.311.60.2.1.3":`jurisdictionOfIncorporationCountryName`,"2.16.840.1.113730.1.1":`nsCertType`,"2.16.840.1.113730.1.13":`nsComment`,"2.5.29.14":`subjectKeyIdentifier`,"2.5.29.15":`keyUsage`,"2.5.29.17":`subjectAltName`,"2.5.29.18":`issuerAltName`,"2.5.29.19":`basicConstraints`,"2.5.29.31":`cRLDistributionPoints`,"2.5.29.32":`certificatePolicies`,"2.5.29.35":`authorityKeyIdentifier`,"2.5.29.37":`extKeyUsage`,"1.3.6.1.4.1.11129.2.4.2":`timestampList`,"1.3.6.1.5.5.7.1.1":`authorityInfoAccess`,"1.3.6.1.5.5.7.3.1":`serverAuth`,"1.3.6.1.5.5.7.3.2":`clientAuth`,"1.3.6.1.5.5.7.3.3":`codeSigning`,"1.3.6.1.5.5.7.3.4":`emailProtection`,"1.3.6.1.5.5.7.3.8":`timeStamping`},E={Boolean:1,Integer:2,BitString:3,OctetString:4,Null:5,OID:6,Utf8String:12,Sequence:48,Set:49,PrintableString:19,IA5String:22,UTCTime:23},c=class e{static length_(e){if(e<128)return new Uint8Array([e]);{let n=e,r=[];for(;n>0;)r.unshift(n&255),n>>=8;let i=r.length,o=new Uint8Array(1+i);o[0]=128|i;for(let e=0;e<i;e++)o[e+1]=r[e];return o}}static ASN1(n,r){let i=e.length_(r.length),o=new Uint8Array(1+i.length+r.length);return o[0]=n,o.set(i,1),o.set(r,1+i.length),o}static integer(n){let r=0;for(;r<n.length-1&&n[r]===0&&n[r+1]<128;)r++;if(r>0&&(n=n.subarray(r)),n[0]>127){let e=new Uint8Array(n.length+1);e[0]=0,e.set(n,1),n=e}return e.ASN1(E.Integer,n)}static bitString(n){let r=new Uint8Array([0]),i=new Uint8Array(r.length+n.length);return i.set(r),i.set(n,r.length),e.ASN1(E.BitString,i)}static octetString(n){return e.ASN1(E.OctetString,n)}static null(){return e.ASN1(E.Null,new Uint8Array)}static objectIdentifier(n){let r=n.split(`.`).map(Number),i=[r[0]*40+r[1]];for(let e=2;e<r.length;e++){let n=r[e],o=[];do o.unshift(n&127),n>>=7;while(n>0);for(let e=0;e<o.length-1;e++)o[e]|=128;i.push(...o)}return e.ASN1(E.OID,new Uint8Array(i))}static utf8String(n){let r=new TextEncoder().encode(n);return e.ASN1(E.Utf8String,r)}static printableString(n){let r=new TextEncoder().encode(n);return e.ASN1(E.PrintableString,r)}static sequence(n){return e.ASN1(E.Sequence,D$2(n))}static set(n){return e.ASN1(E.Set,D$2(n))}static ia5String(n){let r=new TextEncoder().encode(n);return e.ASN1(E.IA5String,r)}static contextSpecific(n,r,i=!1){let o=(i?160:128)|n;return e.ASN1(o,r)}static boolean(n){return e.ASN1(E.Boolean,new Uint8Array([n?255:0]))}},ot=class extends TransformStream{constructor(){let e=new Uint8Array,n=`SCAN_CHUNK_SIZE`,r=0;super({transform(i,o){for(e=D$2([e,i]);e.length>0;)if(n===`SCAN_CHUNK_SIZE`){if(e.length<3)return;let i=0;for(;i<e.length;){let n=e[i];if(!(n>=48&&n<=57||n>=97&&n<=102||n>=65&&n<=70))break;i++}if(i===0)throw Error(`Invalid chunk size format`);if(e.length<i+2)return;if(e[i]!==13||e[i+1]!==10)throw Error(`Invalid chunk size format. Expected CRLF after chunk size`);let s=new TextDecoder().decode(e.slice(0,i)),l=parseInt(s,16);if(e=e.slice(i+2),l===0){n=`SCAN_FINAL_CHUNK`,o.terminate();return}r=l,n=`SCAN_CHUNK_DATA`}else if(n===`SCAN_CHUNK_DATA`){let i=Math.min(r,e.length),s=e.slice(0,i);e=e.slice(i),r-=i,o.enqueue(s),r===0&&(n=`SCAN_CHUNK_TRAILER`)}else if(n===`SCAN_CHUNK_TRAILER`){if(e.length<2)return;if(e[0]!==13||e[1]!==10)throw Error(`Invalid chunk trailer format. Expected CRLF after chunk data`);e=e.slice(2),n=`SCAN_CHUNK_SIZE`}}})}},ct=(e,n)=>({...e,websocket:{url:(e,n,r)=>`ws://playground.internal/?${new URLSearchParams({host:n,port:r}).toString()}`,subprotocol:`binary`,decorator:()=>class extends St{constructor(e,r){super(e,r,{CAroot:n.CAroot,corsProxyUrl:n.corsProxyUrl})}}}}),St=class{constructor(e,n,{CAroot:r,corsProxyUrl:i,outputType:o=`messages`}={}){this.CONNECTING=0,this.OPEN=1,this.CLOSING=2,this.CLOSED=3,this.readyState=this.CONNECTING,this.binaryType=`blob`,this.bufferedAmount=0,this.extensions=``,this.protocol=`ws`,this.host=``,this.port=0,this.listeners=new Map,this.clientUpstream=new TransformStream,this.clientUpstreamWriter=this.clientUpstream.writable.getWriter(),this.clientDownstream=new TransformStream,this.fetchInitiated=!1,this.bufferedBytesFromClient=new Uint8Array,this.url=e,this.options=n;let s=new URL(e);this.host=s.searchParams.get(`host`),this.port=parseInt(s.searchParams.get(`port`),10),this.binaryType=`arraybuffer`,this.corsProxyUrl=i,this.CAroot=r,o===`messages`&&this.clientDownstream.readable.pipeTo(new WritableStream({write:e=>{this.emit(`message`,{data:e})},abort:()=>{this.emit(`error`,Error(`ECONNREFUSED`)),this.close()},close:()=>{this.close()}})).catch(()=>{}),this.readyState=this.OPEN,this.emit(`open`)}on(e,n){this.addEventListener(e,n)}once(e,n){let r=i=>{n(i),this.removeEventListener(e,r)};this.addEventListener(e,r)}addEventListener(e,n){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(n)}removeListener(e,n){this.removeEventListener(e,n)}removeEventListener(e,n){let r=this.listeners.get(e);r&&r.delete(n)}emit(e,n={}){e===`message`?this.onmessage(n):e===`close`?this.onclose(n):e===`error`?this.onerror(n):e===`open`&&this.onopen(n);let r=this.listeners.get(e);if(r)for(let e of r)e(n)}onclose(e){}onerror(e){}onmessage(e){}onopen(e){}send(e){if(this.readyState!==this.CLOSING&&this.readyState!==this.CLOSED&&(this.clientUpstreamWriter.write(new Uint8Array(e)),!this.fetchInitiated))switch(this.bufferedBytesFromClient=D$2([this.bufferedBytesFromClient,new Uint8Array(e)]),ht(this.port,this.bufferedBytesFromClient)){case!1:return;case`other`:this.emit(`error`,Error(`Unsupported protocol`)),this.close();break;case`tls`:this.fetchOverTLS(),this.fetchInitiated=!0;break;case`http`:this.fetchOverHTTP(),this.fetchInitiated=!0}}async fetchOverTLS(){if(!this.CAroot)throw Error(`TLS protocol is only supported when the TCPOverFetchWebsocket is instantiated with a CAroot`);let e=await st({subject:{commonName:this.host,organizationName:this.host,countryName:`US`},issuer:this.CAroot.tbsDescription.subject},this.CAroot.keyPair),n=new nt;this.clientUpstream.readable.pipeTo(n.clientEnd.upstream.writable).catch(()=>{}),n.clientEnd.downstream.readable.pipeTo(this.clientDownstream.writable).catch(()=>{}),await n.TLSHandshake(e.keyPair.privateKey,[e.certificate,this.CAroot.certificate]);let{request:r,expectsContinue:i}=await w.parseHttpRequest(n.serverEnd.upstream.readable,this.host,`https`);if(i){let e=n.serverEnd.downstream.writable.getWriter();await e.write(new TextEncoder().encode(`HTTP/1.1 100 Continue\r
\r
`)),e.releaseLock()}try{await w.fetchRawResponseBytes(r,this.corsProxyUrl).pipeTo(n.serverEnd.downstream.writable)}catch{}}async fetchOverHTTP(){let{request:e,expectsContinue:n}=await w.parseHttpRequest(this.clientUpstream.readable,this.host,`http`);if(n){let e=this.clientDownstream.writable.getWriter();await e.write(new TextEncoder().encode(`HTTP/1.1 100 Continue\r
\r
`)),e.releaseLock()}try{await w.fetchRawResponseBytes(e,this.corsProxyUrl).pipeTo(this.clientDownstream.writable)}catch{}}close(){this.emit(`message`,{data:new Uint8Array}),this.readyState=this.CLOSING,this.emit(`close`),this.readyState=this.CLOSED}},lt=[`GET`,`POST`,`HEAD`,`PATCH`,`OPTIONS`,`DELETE`,`PUT`,`TRACE`],w=class e{static fetchRawResponseBytes(n,r){return new ReadableStream({async start(i){var o;let s;try{s=await W(n,void 0,r)}catch(e){i.enqueue(new TextEncoder().encode(`HTTP/1.1 400 Bad Request\r
Content-Length: 0\r
\r
`)),i.error(e);return}i.enqueue(e.headersAsBytes(s));let l=s.body?.getReader();if(!l){i.close();return}let N=new TextEncoder;for(;;){let{done:e,value:n}=await l.read();if(n&&(i.enqueue(N.encode(`${n.length.toString(16)}\r
`)),i.enqueue(n),i.enqueue(N.encode(`\r
`))),e){i.enqueue(N.encode(`0\r
\r
`)),i.close();return}}}})}static headersAsBytes(e){let n=`HTTP/1.1 ${e.status} ${e.statusText}`,r={};e.headers.forEach((e,n)=>{r[n.toLowerCase()]=e}),delete r[`content-length`],delete r[`content-encoding`],r[`transfer-encoding`]=`chunked`;let i=[];for(let[e,n]of Object.entries(r))i.push(`${e}: ${n}`);let o=[n,...i].join(`\r
`)+`\r
\r
`;return new TextEncoder().encode(o)}static async parseHttpRequest(n,r,i){let o=new Uint8Array,s=!1,l=-1,N=n.getReader();for(;l===-1;){let{done:e,value:n}=await N.read();if(e){s=!0;break}o=D$2([o,n]),l=Ct(o,new Uint8Array([13,10,13,10]))}N.releaseLock();let ae=o.slice(0,l),ce=e.parseRequestHeaders(ae),ue=e.expectsContinue(ce.headers),he=ce.headers.get(`Transfer-Encoding`)===null?`content-length`:`chunked`,Ce=ce.headers.get(`Content-Length`)===null?void 0:parseInt(ce.headers.get(`Content-Length`),10),De=o.slice(l+4),Oe;if(ce.method!==`GET`&&ce.method!==`HEAD`){let e=n.getReader(),r=De.length,i=De.slice(-6),o=new TextEncoder().encode(`0\r
\r
`);Oe=new ReadableStream({async start(e){De.length>0&&e.enqueue(De),(s||he===`content-length`&&Ce!==void 0&&r>=Ce)&&e.close()},async pull(n){let{done:s,value:l}=await e.read();if(r+=l?.length||0,l&&(n.enqueue(l),i=D$2([i,l||new Uint8Array]).slice(-5)),s||he===`content-length`&&Ce!==void 0&&r>=Ce||he===`chunked`&&i.every((e,n)=>e===o[n])){n.close();return}}}),he===`chunked`&&(Oe=Oe.pipeThrough(new ot))}let Ne=ce.headers.get(`Host`)??r,Be=new URL(ce.path,i+`://`+Ne),Ue=e.normalizeRequestHeadersForFetch(ce.headers);return{request:new Request(Be.toString(),{method:ce.method,headers:Ue,body:Oe,duplex:Oe?`half`:void 0}),expectsContinue:ue}}static parseRequestHeaders(e){let n=new TextDecoder().decode(e),[r,i]=n.split(`
`)[0].split(` `),o=new Headers;for(let e of n.split(`\r
`).slice(1)){if(e===``)break;let n=e.indexOf(`:`);if(n===-1)continue;let r=e.slice(0,n).trim(),i=e.slice(n+1).trimStart();r!==``&&o.set(r,i)}return{method:r,path:i,headers:o}}static expectsContinue(e){var n;return e.get(`Expect`)?.toLowerCase()===`100-continue`}static normalizeRequestHeadersForFetch(e){let n=new Headers(e);for(let e of[`Connection`,`Content-Length`,`Expect`,`Host`,`Keep-Alive`,`Proxy-Authenticate`,`Proxy-Authorization`,`TE`,`Trailer`,`Transfer-Encoding`,`Upgrade`])n.delete(e);return n}},dt=()=>({websocket:{decorator:e=>class extends e{constructor(){try{super()}catch{}}send(){return null}}}})})),lib_files_default,init_lib_files=__esmMin((()=>{lib_files_default={"src/Asn1/Asn1Exception.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Asn1;

/**
 * Thrown for everything the DER reader does not read (SPEC-016 AC2): a
 * length past the end, an indefinite or non-minimal length, a tag outside
 * the ten, a value that is not what its tag says (a time that is not a
 * date), and the limits. Every message names a byte offset within the
 * input. There is never a partial element.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class Asn1Exception extends \\RuntimeException {}
`,"src/Asn1/Der.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Asn1;

use Provemark\\C2paVerifier\\Support\\Bytes;

/**
 * One DER element as the reader found it (SPEC-016): identifier, offset,
 * header length, content octets and — when constructed — its children.
 * The typed accessors turn the content octets into a value and refuse the
 * wrong tag, so that a structure reads \`$der->child(2)->oid()\` and gets
 * either the OID or an Asn1Exception naming the offset and both tags.
 * Values are the reader's: an INTEGER is a decimal string, a time a UTC
 * epoch, an OID dotted decimal. Nothing here encodes.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class Der
{
    public const BOOLEAN = 1;

    public const INTEGER = 2;

    public const OCTET_STRING = 4;

    public const NULL = 5;

    public const OBJECT_IDENTIFIER = 6;

    public const UTF8_STRING = 12;

    public const SEQUENCE = 16;

    public const SET = 17;

    public const UTC_TIME = 23;

    public const GENERALIZED_TIME = 24;

    /** @var array<int, string> */
    public const UNIVERSAL_NAMES = [
        self::BOOLEAN => 'BOOLEAN',
        self::INTEGER => 'INTEGER',
        3 => 'BIT STRING',
        self::OCTET_STRING => 'OCTET STRING',
        self::NULL => 'NULL',
        self::OBJECT_IDENTIFIER => 'OBJECT IDENTIFIER',
        self::UTF8_STRING => 'UTF8String',
        self::SEQUENCE => 'SEQUENCE',
        self::SET => 'SET',
        19 => 'PrintableString',
        22 => 'IA5String',
        self::UTC_TIME => 'UTCTime',
        self::GENERALIZED_TIME => 'GeneralizedTime',
    ];

    /**
     * @param  int  $offset  of the identifier octet in the input
     * @param  int  $headerLength  identifier + length octets
     * @param  string  $contents  the content octets (for a constructed element: the same bytes its children were read from)
     * @param  list<Der>|null  $children  constructed only
     */
    public function __construct(
        public TagClass $class,
        public bool $constructed,
        public int $tag,
        public int $offset,
        public int $headerLength,
        public string $contents,
        public ?array $children,
    ) {}

    /** The whole element as it stood in the input: header + contents. */
    public function encoded(): string
    {
        return $this->header().$this->contents;
    }

    /** The whole element's length: header + contents. */
    public function length(): int
    {
        return $this->headerLength + strlen($this->contents);
    }

    public function is(TagClass $class, int $tag): bool
    {
        return $this->class === $class && $this->tag === $tag;
    }

    /** \`INTEGER\`, \`[0]\`, … — how messages name this element. */
    public function describe(): string
    {
        return $this->class->describe($this->tag);
    }

    /** @return list<Der> */
    public function sequence(): array
    {
        return $this->childrenOf(self::SEQUENCE);
    }

    /**
     * The i-th element of a SEQUENCE, read by position: a field the parser needs must exist, or it is
     * an Asn1Exception rather than a PHP error on a missing index (SPEC-016 amendment 4).
     */
    public function element(int $i): self
    {
        $children = $this->sequence();
        if (! isset($children[$i])) {
            throw new Asn1Exception(sprintf('SEQUENCE at offset %d has %d element(s), no element %d', $this->offset, count($children), $i));
        }

        return $children[$i];
    }

    /** @return list<Der> */
    public function set(): array
    {
        return $this->childrenOf(self::SET);
    }

    /**
     * An INTEGER as a decimal string. Non-negative unless $signed: serials,
     * versions and counts are never negative, but an RFC 3161 nonce is a
     * random value TSA clients encode as they draw it, high bit and all
     * (SPEC-016 amendment 3) — read as two's complement, with a minus sign.
     */
    public function integer(bool $signed = false): string
    {
        $bytes = $this->integerBytes();
        if (strlen(ltrim($bytes, "\\0")) > Bytes::MAX_DECIMAL_OCTETS) {
            throw new Asn1Exception(sprintf('INTEGER at offset %d has %d octets; at most %d are read as a number (SPEC-016 amendment 5)', $this->offset, strlen($bytes), Bytes::MAX_DECIMAL_OCTETS));
        }
        if (ord($bytes[0]) < 0x80) {
            return Bytes::hexToDecimal(bin2hex($bytes));
        }
        if (! $signed) {
            throw new Asn1Exception(sprintf('INTEGER at offset %d is negative (%s)', $this->offset, Bytes::hex(substr($bytes, 0, 4))));
        }
        // −x = ~(x − 1): invert the octets and add one, from the least significant end
        $magnitude = ~$bytes;
        for ($i = strlen($magnitude) - 1; $i >= 0; $i--) {
            $sum = ord($magnitude[$i]) + 1;
            $magnitude[$i] = chr($sum & 0xFF);
            if ($sum < 0x100) {
                break;
            }
        }

        return '-'.Bytes::hexToDecimal(bin2hex($magnitude));
    }

    /** The content octets of an INTEGER, checked for the minimal two's-complement encoding DER requires (X.690 §8.3.2). */
    public function integerBytes(): string
    {
        $bytes = $this->primitive(self::INTEGER);
        $n = strlen($bytes);
        if ($n === 0) {
            throw new Asn1Exception(sprintf('INTEGER at offset %d is empty', $this->offset));
        }
        if ($n > 1) {
            $first = ord($bytes[0]);
            $second = ord($bytes[1]);
            if (($first === 0x00 && $second < 0x80) || ($first === 0xFF && $second >= 0x80)) {
                throw new Asn1Exception(sprintf('INTEGER at offset %d is not minimally encoded (leading %02X %02X)', $this->offset, $first, $second));
            }
        }

        return $bytes;
    }

    /** Dotted decimal (X.690 §8.19). */
    public function oid(): string
    {
        $bytes = $this->primitive(self::OBJECT_IDENTIFIER);
        $n = strlen($bytes);
        if ($n === 0) {
            throw new Asn1Exception(sprintf('OBJECT IDENTIFIER at offset %d is empty', $this->offset));
        }
        $arcs = [];
        $value = 0;
        $open = false;
        for ($i = 0; $i < $n; $i++) {
            $byte = ord($bytes[$i]);
            if (! $open && $byte === 0x80) {
                throw new Asn1Exception(sprintf('OBJECT IDENTIFIER at offset %d: subidentifier %d has a leading 80 byte (not minimal)', $this->offset, count($arcs)));
            }
            if ($value > (PHP_INT_MAX >> 7)) {
                throw new Asn1Exception(sprintf('OBJECT IDENTIFIER at offset %d: subidentifier %d is too large', $this->offset, count($arcs)));
            }
            $value = ($value << 7) | ($byte & 0x7F);
            $open = ($byte & 0x80) !== 0;
            if (! $open) {
                if ($arcs === []) {
                    // the first subidentifier folds the first two arcs: X*40 + Y, with X in 0..2 (X.690 §8.19.4)
                    $x = $value < 80 ? intdiv($value, 40) : 2;
                    $arcs[] = $x;
                    $arcs[] = $value - $x * 40;
                } else {
                    $arcs[] = $value;
                }
                $value = 0;
            }
        }
        if ($open) {
            throw new Asn1Exception(sprintf('OBJECT IDENTIFIER at offset %d: the last subidentifier is unterminated', $this->offset));
        }

        return implode('.', $arcs);
    }

    public function octets(): string
    {
        return $this->primitive(self::OCTET_STRING);
    }

    public function boolean(): bool
    {
        $bytes = $this->primitive(self::BOOLEAN);
        if (strlen($bytes) !== 1) {
            throw new Asn1Exception(sprintf('BOOLEAN at offset %d must be one byte, found %d', $this->offset, strlen($bytes)));
        }
        $byte = ord($bytes[0]);
        if ($byte !== 0x00 && $byte !== 0xFF) {
            throw new Asn1Exception(sprintf('BOOLEAN at offset %d must be 00 or FF, found %02X (not DER)', $this->offset, $byte));
        }

        return $byte === 0xFF;
    }

    public function null(): void
    {
        $bytes = $this->primitive(self::NULL);
        if ($bytes !== '') {
            throw new Asn1Exception(sprintf('NULL at offset %d must be empty, found %d byte(s)', $this->offset, strlen($bytes)));
        }
    }

    /**
     * UTCTime (\`YYMMDDHHMMSSZ\`, RFC 5280 §4.1.2.5.1: 50–99 → 19xx, 00–49 → 20xx)
     * or GeneralizedTime (\`YYYYMMDDHHMMSS[.f…]Z\`, RFC 3161 allows fractions —
     * dropped), as a UTC epoch. Validated as a real date: minute 63 or
     * 31 February is an error, not a time.
     */
    public function time(): int
    {
        if (! $this->is(TagClass::Universal, self::UTC_TIME) && ! $this->is(TagClass::Universal, self::GENERALIZED_TIME)) {
            throw $this->wrongTag('UTCTime or GeneralizedTime');
        }
        $name = $this->describe();
        $text = $this->contents;
        if ($this->constructed) {
            throw new Asn1Exception(sprintf('%s at offset %d is constructed; DER requires primitive', $name, $this->offset));
        }
        if (! str_ends_with($text, 'Z')) {
            throw new Asn1Exception(sprintf('%s at offset %d (%s) must end in Z (UTC)', $name, $this->offset, Bytes::printableText($text)));
        }
        $pattern = $this->tag === self::UTC_TIME
            ? '/\\A(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})Z\\z/'
            : '/\\A(\\d{4})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})(?:\\.\\d+)?Z\\z/';
        if (preg_match($pattern, $text, $m) !== 1) {
            throw new Asn1Exception(sprintf('%s at offset %d (%s) is not %s', $name, $this->offset, Bytes::printableText($text), $this->tag === self::UTC_TIME ? 'YYMMDDHHMMSSZ' : 'YYYYMMDDHHMMSSZ'));
        }
        $year = (int) $m[1];
        if ($this->tag === self::UTC_TIME) {
            $year += $year >= 50 ? 1900 : 2000;
        }
        [$month, $day, $hour, $minute, $second] = [(int) $m[2], (int) $m[3], (int) $m[4], (int) $m[5], (int) $m[6]];
        foreach (['month' => [$month, 1, 12], 'hour' => [$hour, 0, 23], 'minute' => [$minute, 0, 59], 'second' => [$second, 0, 59]] as $what => [$value, $min, $max]) {
            if ($value < $min || $value > $max) {
                throw new Asn1Exception(sprintf('%s at offset %d: %s is not a date (%s %d)', $name, $this->offset, $text, $what, $value));
            }
        }
        if (! checkdate($month, $day, $year)) {
            throw new Asn1Exception(sprintf('%s at offset %d: %s is not a date (day %d)', $name, $this->offset, $text, $day));
        }

        $epoch = gmmktime($hour, $minute, $second, $month, $day, $year);
        if ($epoch === false) {
            throw new Asn1Exception(sprintf('%s at offset %d: %s is out of range', $name, $this->offset, $text));
        }

        return $epoch;
    }

    /**
     * The digits after the point of a GeneralizedTime with fractional seconds
     * (RFC 3161 allows them; c2patool keeps them in \`signature_info.time\`),
     * as written; null when there are none or for a UTCTime.
     */
    public function timeFraction(): ?string
    {
        $this->time();   // the same validation, the same refusals
        if ($this->tag !== self::GENERALIZED_TIME) {
            return null;
        }

        return preg_match('/\\.(\\d+)Z\\z/', $this->contents, $m) === 1 ? $m[1] : null;
    }

    /** This element, asserted context-specific [n]. */
    public function tagged(int $n): self
    {
        if (! $this->is(TagClass::ContextSpecific, $n)) {
            throw $this->wrongTag(sprintf('[%d]', $n));
        }

        return $this;
    }

    /** The i-th child of a constructed element. */
    public function child(int $i): self
    {
        if ($this->children === null) {
            throw new Asn1Exception(sprintf('%s at offset %d is primitive and has no children', $this->describe(), $this->offset));
        }
        if (! isset($this->children[$i])) {
            throw new Asn1Exception(sprintf('%s at offset %d has %d child(ren), no child %d', $this->describe(), $this->offset, count($this->children), $i));
        }

        return $this->children[$i];
    }

    /** The i-th child when it exists, else null (OPTIONAL fields). */
    public function optional(int $i): ?self
    {
        return $this->children[$i] ?? null;
    }

    public function childCount(): int
    {
        return $this->children === null ? 0 : count($this->children);
    }

    /** @return list<Der> */
    private function childrenOf(int $tag): array
    {
        if (! $this->is(TagClass::Universal, $tag) || $this->children === null) {
            throw $this->wrongTag(self::UNIVERSAL_NAMES[$tag]);
        }

        return $this->children;
    }

    private function primitive(int $tag): string
    {
        if (! $this->is(TagClass::Universal, $tag)) {
            throw $this->wrongTag(self::UNIVERSAL_NAMES[$tag]);
        }
        if ($this->constructed) {
            throw new Asn1Exception(sprintf('%s at offset %d is constructed; DER requires primitive', $this->describe(), $this->offset));
        }

        return $this->contents;
    }

    private function wrongTag(string $expected): Asn1Exception
    {
        return new Asn1Exception(sprintf('expected %s at offset %d, found %s', $expected, $this->offset, $this->describe()));
    }

    private function header(): string
    {
        $identifier = ($this->class->value << 6) | ($this->constructed ? 0x20 : 0) | $this->tag;
        $length = strlen($this->contents);
        if ($length < 0x80) {
            return pack('CC', $identifier, $length);
        }
        $bytes = ltrim(pack('N', $length), "\\0");

        return pack('CC', $identifier, 0x80 | strlen($bytes)).$bytes;
    }
}
`,"src/Asn1/DerReader.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Asn1;

/**
 * DER (X.690 §8, §10), the small closed subset a timestamp token needs
 * (SPEC-016, ADR-0004): identifier octets with tag numbers up to 30,
 * definite lengths in the short form or a minimal long form of at most
 * four bytes, content octets, and children for constructed elements.
 * Indefinite lengths, non-minimal lengths and high tag numbers are
 * refused — they are BER, and DER forbids them. Bounded: depth, element
 * count and input size, each checked before anything is allocated. Every
 * fault is an Asn1Exception naming the offset. Reads only.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class DerReader
{
    public const DEFAULT_MAX_DEPTH = 32;

    public const DEFAULT_MAX_ELEMENTS = 65536;

    public const DEFAULT_MAX_BYTES = 1048576;

    public function __construct(
        public int $maxDepth = self::DEFAULT_MAX_DEPTH,
        public int $maxElements = self::DEFAULT_MAX_ELEMENTS,
        public int $maxBytes = self::DEFAULT_MAX_BYTES,
    ) {}

    /**
     * The one element that fills $bytes exactly; trailing bytes are an error.
     *
     * @throws Asn1Exception
     */
    public function read(string $bytes): Der
    {
        $der = $this->readAt($bytes, 0);
        $end = $der->length();
        if ($end !== strlen($bytes)) {
            throw new Asn1Exception(sprintf(
                '%d trailing byte(s) after the element at offset 0, which ended at offset %d',
                strlen($bytes) - $end,
                $end,
            ));
        }

        return $der;
    }

    /**
     * One element at $offset; \`$der->length()\` says where the next begins.
     *
     * @throws Asn1Exception
     */
    public function readAt(string $bytes, int $offset, int $depth = 0): Der
    {
        if (strlen($bytes) > $this->maxBytes) {
            throw new Asn1Exception(sprintf('the input of %d bytes exceeds the limit of %d bytes', strlen($bytes), $this->maxBytes));
        }
        $elements = 0;

        return $this->element($bytes, $offset, strlen($bytes), $depth, $elements);
    }

    /**
     * @param  int  $end  the first offset this element may not reach
     * @param  int  $elements  counted across the whole read, against maxElements
     */
    private function element(string $bytes, int $offset, int $end, int $depth, int &$elements): Der
    {
        if ($depth > $this->maxDepth) {
            throw new Asn1Exception(sprintf('the element at offset %d nests deeper than the limit of %d (depth)', $offset, $this->maxDepth));
        }
        if (++$elements > $this->maxElements) {
            throw new Asn1Exception(sprintf('the element at offset %d is beyond the limit of %d elements', $offset, $this->maxElements));
        }
        if ($offset >= $end) {
            throw new Asn1Exception(sprintf('an element is expected at offset %d but the input ends there', $offset));
        }

        // the identifier octet (X.690 §8.1.2)
        $identifier = ord($bytes[$offset]);
        $class = TagClass::from($identifier >> 6);
        $constructed = ($identifier & 0x20) !== 0;
        $tag = $identifier & 0x1F;
        if ($tag === 0x1F) {
            throw new Asn1Exception(sprintf('the element at offset %d uses the high tag number form (tag 31 or above), which is not supported', $offset));
        }

        // the length octets (X.690 §8.1.3, §10.1: definite, minimal)
        $cursor = $offset + 1;
        if ($cursor >= $end) {
            throw new Asn1Exception(sprintf('the length of the element at offset %d is missing (the input ends at %d)', $offset, $end));
        }
        $first = ord($bytes[$cursor]);
        $cursor++;
        if ($first < 0x80) {
            $length = $first;
        } elseif ($first === 0x80) {
            throw new Asn1Exception(sprintf('the element at offset %d has an indefinite length (offset %d); DER requires definite lengths', $offset, $cursor - 1));
        } elseif ($first === 0xFF) {
            throw new Asn1Exception(sprintf('the reserved length octet FF at offset %d', $cursor - 1));
        } else {
            $count = $first & 0x7F;
            if ($count > 4) {
                throw new Asn1Exception(sprintf('a length of %d bytes at offset %d is not supported (at most 4)', $count, $cursor - 1));
            }
            if ($cursor + $count > $end) {
                throw new Asn1Exception(sprintf('the length of the element at offset %d is truncated (offset %d)', $offset, $cursor - 1));
            }
            $length = 0;
            for ($i = 0; $i < $count; $i++) {
                $length = ($length << 8) | ord($bytes[$cursor + $i]);
            }
            $minimal = $length >= 0x80 && ord($bytes[$cursor]) !== 0x00 && $count === strlen(ltrim(pack('N', $length), "\\0"));
            if (! $minimal) {
                throw new Asn1Exception(sprintf('the length at offset %d is not minimal (BER, not DER)', $cursor - 1));
            }
            $cursor += $count;
        }
        $headerLength = $cursor - $offset;
        if ($cursor + $length > $end) {
            throw new Asn1Exception(sprintf('length %d at offset %d runs past the end (%d bytes)', $length, $offset + 1, $end));
        }
        $contents = substr($bytes, $cursor, $length);

        $children = null;
        if ($constructed) {
            $children = [];
            $child = $cursor;
            $contentsEnd = $cursor + $length;
            while ($child < $contentsEnd) {
                $element = $this->element($bytes, $child, $contentsEnd, $depth + 1, $elements);
                $children[] = $element;
                $child += $element->length();
            }
        }

        return new Der($class, $constructed, $tag, $offset, $headerLength, $contents, $children);
    }
}
`,"src/Asn1/TagClass.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Asn1;

/** The two class bits of a DER identifier octet (X.690 §8.1.2.2).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
enum TagClass: int
{
    case Universal = 0;
    case Application = 1;
    case ContextSpecific = 2;
    case Private = 3;

    /** How a message names a tag of this class: \`INTEGER\`, \`[0]\`, \`APPLICATION 3\`, \`PRIVATE 3\`. */
    public function describe(int $tag): string
    {
        return match ($this) {
            self::Universal => Der::UNIVERSAL_NAMES[$tag] ?? sprintf('UNIVERSAL %d', $tag),
            self::ContextSpecific => sprintf('[%d]', $tag),
            self::Application => sprintf('APPLICATION %d', $tag),
            self::Private => sprintf('PRIVATE %d', $tag),
        };
    }
}
`,"src/Cbor/CborBudget.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cbor;

/**
 * How many CBOR data items may still be decoded (SPEC-043 AC1). Mutable on purpose: one budget is
 * shared by every claim and assertion of a manifest store, because those stay decoded in memory, and
 * a limit per container or per decode lets many of them add up. The largest total measured in any
 * real file or fixture is 5,285 items; the default is twelve times that, as the per-container limit.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class CborBudget
{
    public const DEFAULT_ITEMS = 65536;

    private int $remaining;

    public function __construct(public readonly int $items = self::DEFAULT_ITEMS)
    {
        $this->remaining = $items;
    }

    /** @throws CborException when the budget is spent */
    public function take(int $offset): void
    {
        if (--$this->remaining < 0) {
            throw new CborException(sprintf('the item at offset %d is beyond the limit of %d CBOR items for this manifest store (SPEC-043)', $offset, $this->items));
        }
    }
}
`,"src/Cbor/CborBytes.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cbor;

/**
 * A CBOR byte string (major type 2), kept apart from text so that a hash can
 * never be mistaken for a label and a JSON view knows what to base64
 * (SPEC-006 AC3).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class CborBytes
{
    public function __construct(public string $bytes) {}
}
`,"src/Cbor/CborDecoder.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cbor;

use Provemark\\C2paVerifier\\Support\\Bytes;

/**
 * CBOR (RFC 8949), the measured subset decoded and the rest refused
 * (SPEC-006). Major types 0–7 with definite lengths; integers within PHP's
 * int; byte strings as CborBytes, text as string (valid UTF-8), arrays as
 * lists, maps as arrays with int|string keys, tags as CborTag, and of major
 * type 7 false, true, null and floats (amendment 2); indefinite lengths
 * (amendment 3), bounded like the definite ones. Other simple
 * values, reserved additional information, duplicate keys, truncation and
 * trailing bytes are errors naming the offset. Limits are checked before
 * anything is allocated. Decodes only; nothing here encodes.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class CborDecoder
{
    public const DEFAULT_MAX_DEPTH = 32;

    public const DEFAULT_MAX_ITEMS = 65536;

    public function __construct(
        public int $maxDepth = self::DEFAULT_MAX_DEPTH,
        public int $maxItems = self::DEFAULT_MAX_ITEMS,
    ) {}

    /**
     * Exactly one data item; bytes left over are an error. The value is an
     * int, a string (text), a CborBytes, a list, an array with int|string
     * keys (a map), a CborTag, a bool or null — nested the same way.
     *
     * @throws CborException
     */
    public function decode(string $bytes, ?CborBudget $budget = null): mixed
    {
        $offset = 0;
        $value = $this->item($bytes, $offset, 0, $budget ?? new CborBudget);
        if ($offset !== strlen($bytes)) {
            throw new CborException(sprintf(
                '%d byte(s) remain after the value, which ended at offset %d',
                strlen($bytes) - $offset,
                $offset,
            ));
        }

        return $value;
    }

    /** One data item at $offset; $offset is left after it. */
    private function item(string $bytes, int &$offset, int $depth, CborBudget $budget): mixed
    {
        $head = $offset;
        $budget->take($head);
        $initial = ord($this->take($bytes, $offset, 1, sprintf('the initial byte of the item at offset %d', $head)));
        $majorType = $initial >> 5;
        $additional = $initial & 0x1F;

        if ($additional >= 28 && $additional <= 30) {
            throw new CborException(sprintf('additional information %d at offset %d is reserved', $additional, $head));
        }
        if ($additional === 31) {
            return match ($majorType) {
                2 => new CborBytes($this->chunks($bytes, $offset, $head, 2, 'byte string')),
                3 => $this->text($this->chunks($bytes, $offset, $head, 3, 'text string'), $head),
                4 => $this->array($bytes, $offset, $head, null, $depth, $budget),
                5 => $this->map($bytes, $offset, $head, null, $depth, $budget),
                7 => throw new CborException(sprintf('break at offset %d outside an indefinite-length item', $head)),
                default => throw new CborException(sprintf('major type %d at offset %d cannot have an indefinite length', $majorType, $head)),
            };
        }
        if ($majorType === 7) {
            return $this->simple($bytes, $offset, $head, $additional);
        }

        $argument = $this->argument($bytes, $offset, $head, $additional);

        switch ($majorType) {
            case 0:
                return $this->fits($argument, $head);
            case 1:
                return -1 - $this->fits($argument, $head);
            case 2:
                return new CborBytes($this->string($bytes, $offset, $head, $argument, 'byte string'));
            case 3:
                return $this->text($this->string($bytes, $offset, $head, $argument, 'text string'), $head);
            case 4:
                return $this->array($bytes, $offset, $head, $argument, $depth, $budget);
            case 5:
                return $this->map($bytes, $offset, $head, $argument, $depth, $budget);
            default:
                $this->enter($depth, $head);

                return new CborTag($this->fits($argument, $head), $this->item($bytes, $offset, $depth + 1, $budget));
        }
    }

    /** The argument that follows the initial byte: the value itself, or 1/2/4/8 bytes of it. As int|float; floats are for major type 7. */
    private function argument(string $bytes, int &$offset, int $head, int $additional): int
    {
        if ($additional <= 23) {
            return $additional;
        }
        $width = match ($additional) {
            24 => 1, 25 => 2, 26 => 4, default => 8
        };
        $raw = $this->take($bytes, $offset, $width, sprintf('the argument of the item at offset %d', $head));
        /** @var array{1: int} $u */
        $u = unpack(match ($width) {
            1 => 'C', 2 => 'n', 4 => 'N', default => 'J'
        }, $raw);

        return $u[1];
    }

    /** An unsigned 64-bit argument that PHP's signed int cannot hold reads back negative. */
    private function fits(int $argument, int $head): int
    {
        if ($argument < 0) {
            throw new CborException(sprintf('integer at offset %d does not fit a 64-bit signed integer', $head));
        }

        return $argument;
    }

    /** Major type 7: false, true, null, and the three float widths (SPEC-006 amendment 2); everything else is refused before its bytes are read. */
    private function simple(string $bytes, int &$offset, int $head, int $additional): mixed
    {
        if ($additional >= 25) {   // 28–31 were refused before this point
            return $this->float($bytes, $offset, $head, $additional);
        }
        if ($additional === 24) {
            $value = ord($this->take($bytes, $offset, 1, sprintf('the simple value at offset %d', $head)));
            throw new CborException($value < 32
                ? sprintf('simple value %d at offset %d in the two-byte form is not well-formed', $value, $head)
                : sprintf('simple value %d at offset %d is not supported', $value, $head));
        }

        return match ($additional) {
            20 => false,
            21 => true,
            22 => null,
            23 => throw new CborException(sprintf('simple value 23 (undefined) at offset %d is not supported', $head)),
            default => throw new CborException(sprintf('simple value %d at offset %d is not supported', $additional, $head)),
        };
    }

    /**
     * An IEEE 754 float of 16, 32 or 64 bits (RFC 8949 §3.3), as a PHP
     * float. Single and double are unpack()'s 'G' and 'E'; half precision
     * PHP does not know, so its 1 + 5 + 10 bits are converted by hand —
     * subnormals, the infinities and NaN included. Decoding a float touches
     * no verification: every hash this verifier checks is over bytes.
     */
    private function float(string $bytes, int &$offset, int $head, int $additional): float
    {
        $width = match ($additional) {
            25 => 2, 26 => 4, default => 8
        };
        $raw = $this->take($bytes, $offset, $width, sprintf('the float at offset %d', $head));
        if ($width === 4) {
            /** @var array{1: float} $u */
            $u = unpack('G', $raw);

            return $u[1];
        }
        if ($width === 8) {
            /** @var array{1: float} $u */
            $u = unpack('E', $raw);

            return $u[1];
        }

        /** @var array{1: int} $u */
        $u = unpack('n', $raw);
        $half = $u[1];
        $sign = ($half & 0x8000) !== 0 ? -1.0 : 1.0;
        $exponent = ($half >> 10) & 0x1F;
        $mantissa = $half & 0x03FF;
        if ($exponent === 0x1F) {
            return $mantissa === 0 ? $sign * INF : NAN;
        }
        if ($exponent === 0) {
            return $sign * $mantissa * 2 ** -24;   // subnormal: no implicit leading 1
        }

        return $sign * (1 + $mantissa / 1024) * 2 ** ($exponent - 15);
    }

    /** The bytes of a definite-length string, after checking they are all there. */
    private function string(string $bytes, int &$offset, int $head, int $length, string $what): string
    {
        $available = strlen($bytes) - $offset;
        if ($length < 0 || $length > $available) {
            throw new CborException(sprintf(
                'unexpected end of input at offset %d: %s at offset %d needs %s bytes, %d available',
                $offset,
                $what,
                $head,
                $length < 0 ? 'more than 9223372036854775807' : (string) $length,
                $available,
            ));
        }
        $string = substr($bytes, $offset, $length);
        $offset += $length;

        return $string;
    }

    private function text(string $text, int $head): string
    {
        if (! mb_check_encoding($text, 'UTF-8')) {
            throw new CborException(sprintf('text string at offset %d is not valid UTF-8: %s', $head, Bytes::hex(substr($text, 0, 32))));
        }

        return $text;
    }

    /**
     * The chunks of an indefinite-length string (RFC 8949 §3.2.3): definite
     * strings of the same major type until a break; a chunk of another type
     * or an indefinite chunk is an error. The total is bounded by the input.
     */
    private function chunks(string $bytes, int &$offset, int $head, int $majorType, string $what): string
    {
        $joined = '';
        while (true) {
            $chunkHead = $offset;
            $initial = ord($this->take($bytes, $offset, 1, sprintf('the next chunk of the indefinite-length %s at offset %d', $what, $head)));
            if ($initial === 0xFF) {
                return $joined;
            }
            if ($initial >> 5 !== $majorType) {
                throw new CborException(sprintf('chunk at offset %d of the indefinite-length %s at offset %d is of major type %d', $chunkHead, $what, $head, $initial >> 5));
            }
            $additional = $initial & 0x1F;
            if ($additional === 31) {
                throw new CborException(sprintf('chunk at offset %d of the indefinite-length %s at offset %d is itself indefinite (RFC 8949 §3.2.3)', $chunkHead, $what, $head));
            }
            if ($additional >= 28) {
                throw new CborException(sprintf('additional information %d at offset %d is reserved', $additional, $chunkHead));
            }
            $joined .= $this->string($bytes, $offset, $chunkHead, $this->argument($bytes, $offset, $chunkHead, $additional), $what.' chunk');
        }
    }

    /** Is the next byte a break? Consumed when it is. */
    private function atBreak(string $bytes, int &$offset, int $head, string $what): bool
    {
        if ($offset >= strlen($bytes)) {
            throw new CborException(sprintf('unexpected end of input at offset %d: the indefinite-length %s at offset %d has no break', $offset, $what, $head));
        }
        if ($bytes[$offset] === "\\xff") {
            $offset++;

            return true;
        }

        return false;
    }

    /**
     * @param  int|null  $count  null: indefinite, items until a break, counted against the same limit
     * @return list<mixed>
     */
    private function array(string $bytes, int &$offset, int $head, ?int $count, int $depth, CborBudget $budget): array
    {
        $this->countable('array', $head, $count ?? 0);
        $this->enter($depth, $head);
        $items = [];
        for ($i = 0; $count === null ? ! $this->atBreak($bytes, $offset, $head, 'array') : $i < $count; $i++) {
            if ($count === null) {
                $this->countable('array', $head, $i + 1);
            }
            $items[] = $this->item($bytes, $offset, $depth + 1, $budget);
        }

        return $items;
    }

    /**
     * @param  int|null  $count  null: indefinite, pairs until a break, counted against the same limit
     * @return array<int|string, mixed>
     */
    private function map(string $bytes, int &$offset, int $head, ?int $count, int $depth, CborBudget $budget): array
    {
        $this->countable('map', $head, $count ?? 0);
        $this->enter($depth, $head);
        $map = [];
        for ($i = 0; $count === null ? ! $this->atBreak($bytes, $offset, $head, 'map') : $i < $count; $i++) {
            if ($count === null) {
                $this->countable('map', $head, $i + 1);
            }
            $keyOffset = $offset;
            $key = $this->item($bytes, $offset, $depth + 1, $budget);
            if (! is_int($key) && ! is_string($key)) {
                throw new CborException(sprintf('map key at offset %d is %s; keys must be integers or text', $keyOffset, self::kind($key)));
            }
            if (is_string($key) && (string) (int) $key === $key) {
                // "1" and 1 are different CBOR keys but the same PHP array offset.
                throw new CborException(sprintf('map key %s at offset %d would collide with an integer key', self::show($key), $keyOffset));
            }
            // The value first, so a truncated map is reported as truncation
            // (RFC 8949 Appendix F lists "a2 00 00 00" that way), then the key.
            $value = $this->item($bytes, $offset, $depth + 1, $budget);
            if (array_key_exists($key, $map)) {
                throw new CborException(sprintf('duplicate map key %s at offset %d', self::show($key), $keyOffset));
            }
            $map[$key] = $value;
        }

        return $map;
    }

    private function countable(string $what, int $head, int $count): void
    {
        if ($count < 0 || $count > $this->maxItems) {
            throw new CborException(sprintf('%s at offset %d declares %s items, above the limit of %d', $what, $head, $count < 0 ? 'more than 9223372036854775807' : (string) $count, $this->maxItems));
        }
    }

    private function enter(int $depth, int $head): void
    {
        if ($depth + 1 > $this->maxDepth) {
            throw new CborException(sprintf('depth %d exceeds the limit of %d (item at offset %d)', $depth + 1, $this->maxDepth, $head));
        }
    }

    /** Exactly $length bytes at $offset, or the end-of-input error. */
    private function take(string $bytes, int &$offset, int $length, string $what): string
    {
        if ($offset + $length > strlen($bytes)) {
            throw new CborException(sprintf(
                'unexpected end of input at offset %d: wanted %d byte(s) for %s, %d available',
                $offset,
                $length,
                $what,
                strlen($bytes) - $offset,
            ));
        }
        $taken = substr($bytes, $offset, $length);
        $offset += $length;

        return $taken;
    }

    private static function kind(mixed $value): string
    {
        return match (true) {
            $value instanceof CborBytes => 'a byte string',
            $value instanceof CborTag => 'a tag',
            is_array($value) => array_is_list($value) ? 'an array' : 'a map',
            is_bool($value) => 'a boolean',
            $value === null => 'null',
            default => gettype($value),
        };
    }

    /** A key for a message: ints as they are, text quoted when printable ASCII, otherwise hex — never raw. */
    private static function show(int|string $key): string
    {
        if (is_int($key)) {
            return (string) $key;
        }

        return preg_match('/\\A[\\x20-\\x7E]*\\z/', $key) === 1 ? '"'.$key.'"' : Bytes::hex($key);
    }
}
`,"src/Cbor/CborException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cbor;

/**
 * Thrown for everything the decoder does not decode (SPEC-006 AC5–AC14):
 * malformed input, the parts of CBOR outside the measured subset, and the
 * limits. Every message names a byte offset. There is never a partial value.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class CborException extends \\RuntimeException {}
`,"src/Cbor/CborTag.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cbor;

/**
 * A CBOR tag (major type 6) over its content, passed through with its number
 * — a tag is annotation; the layer that needs one (tag 18, COSE_Sign1, in
 * M3) decides what it means (SPEC-006).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class CborTag
{
    public function __construct(
        public int $number,
        public mixed $value,
    ) {}
}
`,"src/Cli/Command.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cli;

use Provemark\\C2paVerifier\\Report\\ValidationState;
use Provemark\\C2paVerifier\\Trust\\TrustException;
use Provemark\\C2paVerifier\\Trust\\TrustSettings;
use Provemark\\C2paVerifier\\Verifier\\Verifier;

/**
 * The command line (SPEC-019): \`c2pa-verify [--settings <path>] [--] <file>\`.
 *
 * A thin shell around the public API. Standard output carries exactly
 * \`VerificationReport::toJson()\` plus one newline and nothing else, ever;
 * diagnostics go to standard error as one \`Error: …\` line. The exit status
 * carries the verdict: 0 for \`Trusted\` or \`Valid\`, 1 for \`Invalid\` (the
 * report is still printed), 2 when no report could be made — a usage
 * fault, a file that cannot be opened, settings that cannot be read or are
 * not trust settings. c2patool exits 0 on an \`Invalid\` report and ignores
 * a settings file it cannot find; both are fail-open and are not copied
 * (SPEC-019, Problem).
 *
 * No network, no \`exec\`, no temporary file, no environment variable: the
 * command reads the file and, when asked, the one settings file it is
 * given, and hands both to the verifier unchanged.
 */
final readonly class Command
{
    public const string USAGE = "Usage: c2pa-verify [--settings <path>] [--] <file>\\n"
        ."  Prints the verification report as JSON on standard output.\\n"
        ."  --settings <path>  trust settings in c2patool's JSON shape (anchors, EKUs, allowed list)\\n"
        ."  --help             this text\\n"
        ."  Exit status: 0 Trusted or Valid, 1 Invalid, 2 no report (usage, unreadable file or settings).\\n";

    public function __construct(private Verifier $verifier) {}

    /**
     * @param  list<string>  $arguments  argv without the program name
     * @param  resource  $stdout
     * @param  resource  $stderr
     * @return int 0, 1 or 2 — never anything else
     */
    public function run(array $arguments, $stdout, $stderr): int
    {
        // 1. the arguments: four cases, no short options, no repeats
        $file = null;
        $settingsPath = null;
        $optionsEnded = false;
        for ($i = 0, $n = count($arguments); $i < $n; $i++) {
            $argument = $arguments[$i];
            if (! $optionsEnded && $argument === '--help') {
                fwrite($stdout, self::USAGE);

                return 0;
            }
            if (! $optionsEnded && $argument === '--') {
                $optionsEnded = true;

                continue;
            }
            if (! $optionsEnded && ($argument === '--settings' || str_starts_with($argument, '--settings='))) {
                if ($settingsPath !== null) {
                    return $this->usage($stderr, '--settings given twice');
                }
                if ($argument === '--settings') {
                    if ($i + 1 >= $n) {
                        return $this->usage($stderr, '--settings needs a path');
                    }
                    $settingsPath = $arguments[++$i];
                } else {
                    $settingsPath = substr($argument, strlen('--settings='));
                }

                continue;
            }
            if (! $optionsEnded && str_starts_with($argument, '-') && $argument !== '-') {
                return $this->usage($stderr, sprintf('unknown option %s', $argument));
            }
            if ($file !== null) {
                return $this->usage($stderr, 'more than one file given; the command verifies one file');
            }
            $file = $argument;
        }
        if ($file === null) {
            return $this->usage($stderr, 'no file given');
        }

        // 2. the settings, before the file: the caller asked for trust and gets it or a refusal
        $settings = null;
        if ($settingsPath !== null) {
            $json = $this->read($settingsPath);
            if (is_array($json)) {
                fwrite($stderr, sprintf("Error: cannot read settings %s: %s\\n", $settingsPath, $json['reason']));

                return 2;
            }
            try {
                $settings = TrustSettings::fromJson($json);
            } catch (TrustException $e) {
                fwrite($stderr, sprintf("Error: settings %s: %s\\n", $settingsPath, $e->getMessage()));

                return 2;
            }
        }

        // 3. the file as a stream; a directory opens without complaint on macOS and Linux
        //    and then fails on every read, so it is refused here, before the verifier
        if (is_dir($file)) {
            fwrite($stderr, sprintf("Error: cannot open %s: Is a directory\\n", $file));

            return 2;
        }
        $stream = $this->open($file);
        if (is_array($stream)) {
            fwrite($stderr, sprintf("Error: cannot open %s: %s\\n", $file, $stream['reason']));

            return 2;
        }

        // 4. the report, and the verdict as the exit status
        try {
            $report = $this->verifier->verify($stream, $settings);
        } finally {
            fclose($stream);
        }
        fwrite($stdout, $report->toJson()."\\n");

        return $report->result->state === ValidationState::Invalid ? 1 : 0;
    }

    /** @param  resource  $stderr */
    private function usage($stderr, string $fault): int
    {
        fwrite($stderr, sprintf("Error: %s\\n%s", $fault, self::USAGE));

        return 2;
    }

    /**
     * Open the file read-only as a stream; on failure, PHP's own reason instead of a warning.
     *
     * @return resource|array{reason: string}
     */
    private function open(string $path)
    {
        $local = self::local($path);
        if ($local === null) {
            return ['reason' => 'No such file or directory'];
        }
        $reason = 'unknown reason';
        set_error_handler(static function (int $severity, string $message) use (&$reason): bool {
            $reason = self::reason($message);

            return true;
        });
        try {
            $stream = fopen($local, 'rb');
        } finally {
            restore_error_handler();
        }
        if ($stream === false) {
            return ['reason' => $reason];
        }
        // SPEC-043 AC5: the verifier reads a file twice (the store, then the hashed bytes); a pipe or a
        // FIFO cannot be read twice, and copying one would need a bound of its own on disk
        if (stream_get_meta_data($stream)['seekable'] !== true) {
            fclose($stream);

            return ['reason' => 'the input cannot seek (a pipe, a FIFO or a terminal); save it to a file and verify that'];
        }

        return $stream;
    }

    /**
     * The path as a local file, or null (SPEC-043 AC6). fopen() on the argument itself would honour
     * PHP's wrappers — data:, php://, phar://, and http:// with allow_url_fopen, a network request
     * in the verification path — and would read a file named "data:,x" as the text "x". The path is
     * made absolute against the working directory and opened with "file://" in front, which leaves no
     * wrapper to choose. Whether it exists is left to fopen() itself: on Linux /dev/stdin leads to
     * "pipe:[…]", which realpath() and PHP's stat cannot resolve though open() can, and the refusal
     * must then say that the input cannot seek, not that it is missing.
     */
    private static function local(string $path): ?string
    {
        if ($path === '') {
            return null;
        }
        $cwd = getcwd();
        $absolute = str_starts_with($path, '/') || $cwd === false ? $path : $cwd.'/'.$path;

        // longer than any path the system accepts, so no file (a data: URL of an image is kilobytes)
        return strlen($absolute) > PHP_MAXPATHLEN ? null : 'file://'.$absolute;
    }

    /**
     * Read the settings file whole (a small JSON document, SPEC-014 bounds the certificates).
     *
     * @return string|array{reason: string}
     */
    private function read(string $path): string|array
    {
        $local = self::local($path);
        if ($local === null) {
            return ['reason' => 'No such file or directory'];
        }
        if (is_dir($local)) {
            return ['reason' => 'Is a directory'];
        }
        $reason = 'unknown reason';
        set_error_handler(static function (int $severity, string $message) use (&$reason): bool {
            $reason = self::reason($message);

            return true;
        });
        try {
            $json = file_get_contents($local);
        } finally {
            restore_error_handler();
        }

        return $json === false ? ['reason' => $reason] : $json;
    }

    /** "fopen(x): Failed to open stream: No such file or directory" → "No such file or directory". */
    private static function reason(string $message): string
    {
        $marker = 'Failed to open stream: ';
        $at = strpos($message, $marker);

        return $at === false ? $message : substr($message, $at + strlen($marker));
    }
}
`,"src/Container/ContainerException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

/**
 * Thrown for every malformed or out-of-order container case (SPEC-001
 * AC3, AC5–AC7, AC9–AC11). There is never a partial result: an extractor
 * either returns the whole store, null, or throws.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class ContainerException extends \\RuntimeException {}
`,"src/Container/FormatDetector.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

/**
 * The container format from the first twelve bytes, nothing else read
 * (SPEC-013): JPEG's SOI, PNG's signature, RIFF's header with the WEBP form
 * type. Anything else is null — an unknown format is an error for the
 * caller, never a guess. The stream is rewound afterwards.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class FormatDetector
{
    public const PROBE_LENGTH = 12;

    /**
     * @param  resource  $stream  readable and seekable
     * @return 'jpeg'|'png'|'webp'|'isobmff'|null
     */
    public function detect($stream): ?string
    {
        $head = $this->head($stream);
        if (str_starts_with($head, "\\xFF\\xD8")) {
            return 'jpeg';
        }
        if (str_starts_with($head, "\\x89PNG\\x0D\\x0A\\x1A\\x0A")) {
            return 'png';
        }
        if (strlen($head) === self::PROBE_LENGTH && str_starts_with($head, 'RIFF') && substr($head, 8, 4) === 'WEBP') {
            return 'webp';
        }
        // ISOBMFF (SPEC-026): MP4, MOV, AVIF and HEIC all open with a \`ftyp\` box, and
        // the brand that follows is not read — a file that declares \`ftyp\` and carries
        // a C2PA \`uuid\` box is one this verifier can read whatever its brand says.
        if (strlen($head) === self::PROBE_LENGTH && substr($head, 4, 4) === 'ftyp') {
            return 'isobmff';
        }

        return null;
    }

    /**
     * The first bytes, for the detection and for the message when it fails.
     *
     * @param  resource  $stream
     */
    public function head($stream): string
    {
        if (! is_resource($stream) || ! rewind($stream)) {
            throw new \\InvalidArgumentException('FormatDetector needs a seekable stream resource');
        }
        $head = fread($stream, self::PROBE_LENGTH);
        rewind($stream);

        return $head === false ? '' : $head;
    }
}
`,"src/Container/IsobmffManifestStoreExtractor.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

use Provemark\\C2paVerifier\\Support\\Bytes;
use Provemark\\C2paVerifier\\Support\\MemoryBudget;

/**
 * ISOBMFF \`uuid\` box → manifest store bytes (SPEC-026; C2PA 2.4 §11.3, ISO/IEC 14496-12).
 *
 * Walks the top-level boxes and looks for the one \`uuid\` box whose first sixteen
 * content bytes are the C2PA UUID. Inside it, twenty-one bytes stand between that
 * UUID and the JUMBF superbox — four of version and flags, a null-terminated
 * purpose, and an eight-byte merkle offset — and those are read rather than
 * assumed (step 73 measured them on a signed MP4 and an AVIF alike). The walk
 * continues past the box so that a second one is seen and refused.
 *
 * A purpose this verifier does not read is an error, never silence. \`merkle\` is
 * the case that matters: treating a fragmented file's merkle data as a store, or
 * reporting it as a file with no credentials, would both be worse than saying so.
 *
 * Nothing here interprets the store, and nothing here checks the hash: the BMFF
 * hard binding (\`c2pa.hash.bmff.v3\`) is a different algorithm from SPEC-012's
 * byte ranges and is its own spec. Until it exists an ISOBMFF file reaches the
 * verifier with no hard binding it recognises, which SPEC-013 AC15 turns into
 * \`claim.hardBindings.missing\` and \`Invalid\` — the honest answer, not a silent one.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class IsobmffManifestStoreExtractor
{
    /** C2PA 2.4 §11.3.2: the UUID that marks a C2PA box in an ISOBMFF file. */
    public const C2PA_UUID = "\\xd8\\xfe\\xc3\\xd6\\x1b\\x0e\\x48\\x3c\\x92\\x97\\x58\\x28\\x87\\x7e\\xc4\\x81";

    /** The only purpose this spec reads. \`merkle\` belongs to fragmented files. */
    public const PURPOSE_MANIFEST = 'manifest';

    /**
     * The longest purpose string read, NUL excluded (SPEC-043 AC2). The purposes C2PA defines are
     * \`manifest\`, \`original\` and \`merkle\`; without a bound, a box with no NUL was read a byte at a time
     * to its end.
     */
    public const MAX_PURPOSE_LENGTH = 64;

    /** SPEC-024: the same 16 MiB bound the other three containers carry. */
    public const DEFAULT_MAX_BOX_LENGTH = 16 * 1024 * 1024;

    /** As SPEC-001's piece limit: a file is not allowed to cost an unbounded walk. */
    public const DEFAULT_MAX_BOXES = 4096;

    /**
     * How deep \`boxTree()\` descends before refusing (SPEC-029).
     *
     * \`/moov/trak/mdia/minf/stbl/stco\` is six segments — the deepest path any
     * measured exclusion uses — and eight leaves room for a container this project
     * has not met. A file nested deeper is refused by name rather than read short:
     * a walk that stops early and reports what it found would leave bytes the
     * signer excluded inside the digest and call the result a match.
     */
    public const DEFAULT_MAX_BOX_DEPTH = 8;

    /**
     * The box types this walk descends into, and how many bytes of their own come
     * first. ISO/IEC 14496-12 gives \`meta\` a version and flags before its children;
     * the rest begin immediately.
     */
    private const CONTAINERS = [
        'moov' => 0, 'trak' => 0, 'mdia' => 0, 'minf' => 0, 'stbl' => 0,
        'moof' => 0, 'traf' => 0, 'mfra' => 0, 'edts' => 0, 'dinf' => 0,
        'udta' => 0, 'mvex' => 0, 'meta' => 4,
    ];

    private const TYPE_UUID = 'uuid';

    /** size (4) + type (4). */
    private const BOX_HEADER_LENGTH = 8;

    /** size (4) + type (4) + largesize (8), when size == 1. */
    private const LARGE_BOX_HEADER_LENGTH = 16;

    /** version and flags (4) + the shortest purpose ("\\0") + merkle_offset (8). */
    private const MIN_PREAMBLE_LENGTH = 13;

    public function __construct(
        public int $maxBoxLength = self::DEFAULT_MAX_BOX_LENGTH,
        public int $maxBoxes = self::DEFAULT_MAX_BOXES,
        private MemoryBudget $budget = new MemoryBudget,
    ) {}

    /**
     * Every box to the configured depth, in file order, each with the path an
     * exclusion's \`xpath\` is matched against (SPEC-029).
     *
     * The path is built as the walk descends — \`/moov/trak/mdia/minf/stbl/stco\` —
     * so resolving an exclusion is a comparison rather than a second parse. This
     * lives here rather than in the hash check because nothing may parse a box in
     * two places (the maintainer's decision, 2026-09-22).
     *
     * @param  resource  $stream  a readable, seekable stream positioned at 0
     * @return list<array{offset: int, length: int, type: string, path: string}>
     *
     * @throws ContainerException on every malformed case, and when a box nests
     *                            deeper than DEFAULT_MAX_BOX_DEPTH
     */
    public function boxTree($stream): array
    {
        $reader = new StreamReader($stream, 'box');
        $end = $reader->end();
        rewind($stream);

        $boxes = [];
        $this->descend($reader, 0, $end, '', 1, $boxes);

        return $boxes;
    }

    /**
     * @param  list<array{offset: int, length: int, type: string, path: string}>  $boxes
     *
     * @throws ContainerException
     */
    private function descend(StreamReader $reader, int $from, int $to, string $parent, int $depth, array &$boxes): void
    {
        if ($depth > self::DEFAULT_MAX_BOX_DEPTH) {
            throw new ContainerException(sprintf(
                'boxes nest deeper than %d at offset %d; this verifier refuses rather than reading a file short',
                self::DEFAULT_MAX_BOX_DEPTH,
                $from,
            ));
        }

        $offset = $from;
        while ($offset + self::BOX_HEADER_LENGTH <= $to) {
            if (count($boxes) >= $this->maxBoxes) {
                throw new ContainerException(sprintf('more than %d boxes (offset %d)', $this->maxBoxes, $offset));
            }
            [$size, $header, $type] = $this->boxHeader($reader, $offset, $to);
            $path = $parent.'/'.$type;
            $boxes[] = ['offset' => $offset, 'length' => $size, 'type' => $type, 'path' => $path];

            $skip = array_key_exists($type, self::CONTAINERS) ? self::CONTAINERS[$type] : null;
            if ($skip !== null && $size > $header + $skip) {
                $reader->skip($skip, $offset);
                $this->descend($reader, $offset + $header + $skip, $offset + $size, $path, $depth + 1, $boxes);
            } else {
                $reader->skip($size - $header, $offset);
            }
            $offset += $size;
        }
    }

    /**
     * The CBOR of this file's C2PA box when its purpose is \`merkle\`, or null when it
     * has no C2PA box or one with another purpose (SPEC-028).
     *
     * A fragment of a fragmented stream carries a box of its own holding its leaf
     * index and the sibling hashes up to the root. \`extract()\` refuses that purpose,
     * and rightly: it is not a manifest store. This reads it for what it is.
     *
     * @param  resource  $stream  a readable, seekable stream positioned at 0
     *
     * @throws ContainerException on every malformed case
     */
    public function merklePayload($stream): ?string
    {
        $reader = new StreamReader($stream, 'box');
        $end = $reader->end();
        $offset = 0;
        while ($offset + self::BOX_HEADER_LENGTH <= $end) {
            [$size, $header, $type] = $this->boxHeader($reader, $offset, $end);
            $read = $header;
            if ($type === self::TYPE_UUID && $size >= $header + 16) {
                $isC2pa = $reader->readExactly(16, $offset, 'the UUID') === self::C2PA_UUID;
                $read += 16;
                if ($isC2pa) {
                    $available = $size - $read;
                    if ($available < 5) {
                        throw new ContainerException(sprintf('C2PA box at offset %d holds %d bytes after its UUID', $offset, $available));
                    }
                    $reader->readExactly(4, $offset, 'version and flags');
                    $remaining = $available - 4;
                    $purpose = '';
                    while ($remaining > 0) {
                        if (strlen($purpose) >= self::MAX_PURPOSE_LENGTH) {
                            throw new ContainerException(sprintf('C2PA box at offset %d: the purpose string runs past %d bytes without a terminating NUL', $offset, self::MAX_PURPOSE_LENGTH));
                        }
                        $byte = $reader->readExactly(1, $offset, 'the purpose');
                        $remaining--;
                        if ($byte === "\\x00") {
                            break;
                        }
                        $purpose .= $byte;
                    }

                    if ($purpose !== 'merkle' || $remaining <= 0) {
                        return null;
                    }
                    // SPEC-043 AC2: the store's bounds, before a byte of it is read
                    if ($remaining > $this->maxBoxLength) {
                        throw new ContainerException(sprintf('C2PA merkle box at offset %d holds %d bytes, over the limit of %d', $offset, $remaining, $this->maxBoxLength));
                    }
                    if (! $this->budget->allows($remaining)) {
                        throw new ContainerException(sprintf('C2PA merkle box at offset %d holds %d bytes, which does not fit this host: %d bytes of memory remain', $offset, $remaining, $this->budget->remainingBytes() ?? 0));
                    }

                    return $reader->readExactly($remaining, $offset, 'the merkle data');
                }
            }
            $reader->skip($size - $read, $offset);
            $offset += $size;
        }

        return null;
    }

    /**
     * The top-level boxes, in file order (SPEC-027 needs the same walk this class
     * already does, and duplicating it would be a second truth).
     *
     * @param  resource  $stream  a readable, seekable stream positioned at 0
     * @return list<array{offset: int, length: int, type: string}>
     *
     * @throws ContainerException on every malformed case
     */
    public function topLevelBoxes($stream): array
    {
        $reader = new StreamReader($stream, 'box');
        $end = $reader->end();

        $boxes = [];
        $offset = 0;
        while ($offset + self::BOX_HEADER_LENGTH <= $end) {
            if (count($boxes) >= $this->maxBoxes) {
                throw new ContainerException(sprintf('more than %d top-level boxes (offset %d)', $this->maxBoxes, $offset));
            }
            [$size, $header, $type] = $this->boxHeader($reader, $offset, $end);
            $boxes[] = ['offset' => $offset, 'length' => $size, 'type' => $type];
            $reader->skip($size - $header, $offset);
            $offset += $size;
        }

        return $boxes;
    }

    /**
     * @param  resource  $stream  a readable, seekable stream positioned at 0
     * @return ManifestStoreBytes|null null when the file carries no C2PA box (AC2)
     *
     * @throws ContainerException on every malformed case
     */
    public function extract($stream): ?ManifestStoreBytes
    {
        $reader = new StreamReader($stream, 'box');
        $end = $reader->end();

        $store = null;
        $storeOffset = null;
        $storeLength = 0;
        $offset = 0;
        $boxes = 0;
        // The reader is sequential: $offset is where we are, and every read moves it.
        while ($offset + self::BOX_HEADER_LENGTH <= $end) {
            if (++$boxes > $this->maxBoxes) {
                throw new ContainerException(sprintf(
                    'more than %d top-level boxes (offset %d)',
                    $this->maxBoxes,
                    $offset,
                ));
            }
            [$size, $header, $type] = $this->boxHeader($reader, $offset, $end);
            $read = $header;   // bytes of this box already consumed

            $isC2pa = false;
            if ($type === self::TYPE_UUID) {
                if ($size < $header + 16) {
                    throw new ContainerException(sprintf(
                        'uuid box at offset %d declares %d bytes, too few for its 16-byte UUID',
                        $offset,
                        $size,
                    ));
                }
                $isC2pa = $reader->readExactly(16, $offset, 'the UUID') === self::C2PA_UUID;
                $read += 16;
            }

            if ($isC2pa) {
                if ($storeOffset !== null) {
                    throw new ContainerException(sprintf(
                        'two C2PA uuid boxes at offsets %d and %d; a file carries at most one manifest store',
                        $storeOffset,
                        $offset,
                    ));
                }
                $store = $this->readStore($reader, $offset, $size - $read);
                $storeOffset = $offset;
                $storeLength = $size;
                $read = $size;
            }

            $reader->skip($size - $read, $offset);
            $offset += $size;
        }

        if ($store === null || $storeOffset === null) {
            return null;
        }

        return new ManifestStoreBytes($store, [['start' => $storeOffset, 'length' => $storeLength]]);
    }

    /**
     * The declared size of the box at this offset, and the length of its header.
     *
     * \`size == 1\` means a 64-bit length follows the type; \`size == 0\` means the box
     * runs to the end of the file, which only the last box can honestly say
     * (ISO/IEC 14496-12 §4.2). \`c2patool\` reads a non-last one anyway; this refuses
     * it, because a box claiming everything after it while something follows is a
     * contradiction, and resolving it quietly would be choosing for the file.
     *
     * @return array{int, int, string} the size, the header length and the type
     */
    private function boxHeader(StreamReader $reader, int $offset, int $end): array
    {
        /** @var array{1: int} $sizeField */
        $sizeField = unpack('N', $reader->readExactly(4, $offset, 'the box size'));
        $size = $sizeField[1];
        $type = $reader->readExactly(4, $offset, 'the box type');
        $header = self::BOX_HEADER_LENGTH;

        if ($size === 1) {
            /** @var array{1: int} $large */
            $large = unpack('J', $reader->readExactly(8, $offset, 'the 64-bit box size'));
            $size = $large[1];
            $header = self::LARGE_BOX_HEADER_LENGTH;
        } elseif ($size === 0) {
            // SPEC-026 amendment 1: this declaration is what makes a box the last one,
            // so there is no "not last" case to refuse. A box that swallows what followed
            // it is caught by the hard binding, not here.
            $size = $end - $offset;
        }

        if ($size < $header) {
            throw new ContainerException(sprintf(
                'box %s at offset %d declares %d bytes, less than its %d-byte header',
                Bytes::printable($type),
                $offset,
                $size,
                $header,
            ));
        }
        if ($offset + $size > $end) {
            throw new ContainerException(sprintf(
                'box %s at offset %d declares %d bytes and runs past the end of the file at %d',
                Bytes::printable($type),
                $offset,
                $size,
                $end,
            ));
        }

        return [$size, $header, $type];
    }

    /** The JUMBF bytes of a C2PA box, after its twenty-one bytes of preamble. */
    private function readStore(StreamReader $reader, int $offset, int $available): string
    {
        if ($available < self::MIN_PREAMBLE_LENGTH) {
            throw new ContainerException(sprintf(
                'C2PA box at offset %d holds %d bytes after its UUID, too few for version, purpose and merkle offset',
                $offset,
                $available,
            ));
        }

        // version (1) and flags (3) are read and not interpreted: no version is defined
        // beyond 0, and refusing an unknown one would refuse files this reads correctly.
        $reader->readExactly(4, $offset, 'version and flags');
        $remaining = $available - 4;

        $purpose = '';
        while (true) {
            if ($remaining <= 0) {
                throw new ContainerException(sprintf(
                    'C2PA box at offset %d: the purpose string is not terminated inside the box',
                    $offset,
                ));
            }
            if (strlen($purpose) >= self::MAX_PURPOSE_LENGTH) {
                throw new ContainerException(sprintf(
                    'C2PA box at offset %d: the purpose string runs past %d bytes without a terminating NUL',
                    $offset,
                    self::MAX_PURPOSE_LENGTH,
                ));
            }
            $byte = $reader->readExactly(1, $offset, 'the purpose');
            $remaining--;
            if ($byte === "\\x00") {
                break;
            }
            $purpose .= $byte;
        }

        if ($purpose !== self::PURPOSE_MANIFEST) {
            throw new ContainerException(sprintf(
                'C2PA box at offset %d has purpose %s; this verifier reads only %s, and a box it cannot read is not a file without credentials',
                $offset,
                Bytes::printableText($purpose),
                self::PURPOSE_MANIFEST,
            ));
        }

        if ($remaining < 8) {
            throw new ContainerException(sprintf(
                'C2PA box at offset %d: %d bytes left where the 8-byte merkle offset belongs',
                $offset,
                $remaining,
            ));
        }
        $reader->readExactly(8, $offset, 'the merkle offset');
        $remaining -= 8;

        if ($remaining > $this->maxBoxLength) {
            throw new ContainerException(sprintf(
                'C2PA box at offset %d holds a store of %d bytes, over the limit of %d',
                $offset,
                $remaining,
                $this->maxBoxLength,
            ));
        }
        if (! $this->budget->allows($remaining)) {
            throw new ContainerException(sprintf(
                'C2PA box at offset %d holds a store of %d bytes, which does not fit this host: %d bytes of memory remain. '
                .'The file was not examined, so this is not a judgement about it',
                $offset,
                $remaining,
                $this->budget->remainingBytes() ?? 0,
            ));
        }

        return $reader->readExactly($remaining, $offset, 'the manifest store');
    }
}
`,"src/Container/JpegManifestStoreExtractor.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

use Provemark\\C2paVerifier\\Support\\Bytes;
use Provemark\\C2paVerifier\\Support\\MemoryBudget;

/**
 * JPEG APP11 → manifest store bytes (SPEC-001; C2PA 2.4 §A.3.1).
 *
 * Walks the marker segments from SOI to SOS, collects every APP11 segment
 * whose payload starts with \`JP\`, checks the 16-byte piece header (CI, En,
 * Z, LBox, TBox — measured in notes/step-02-jpeg-fixture.md) and reassembles
 * the box: LBox and TBox once, then the data of every piece in order.
 * Segment bodies that are not needed are skipped unread; piece data is
 * read only after the header checks and the limits pass.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class JpegManifestStoreExtractor
{
    public const DEFAULT_MAX_PIECES = 2048;         // 2048 × 64 KiB ≈ 128 MiB, above MAX_LBOX

    // SPEC-024: 16 MiB, not 64. Measured in step 66 over 212 corpus stores: median
    // 45 kB, p90 241 kB, largest ever met 3.36 MB. A store at this bound peaks at
    // 38 MB (step 67b), which a 64 MB host survives; the old 64 MiB needed 132 MB and
    // ended a 128 MB host with a fatal error. Same figure in SPEC-002 and SPEC-003.
    public const DEFAULT_MAX_LBOX = 16 * 1024 * 1024;

    private const MARKER_SOS = 0xDA;

    private const MARKER_APP11 = 0xEB;

    /** CI (2) + En (2) + Z (4) + LBox (4) + TBox (4). */
    private const PIECE_HEADER_LENGTH = 16;

    public function __construct(
        public int $maxPieces = self::DEFAULT_MAX_PIECES,
        public int $maxLBox = self::DEFAULT_MAX_LBOX,
        private MemoryBudget $budget = new MemoryBudget,
    ) {}

    /**
     * @param  resource  $stream  a readable, seekable stream positioned at 0
     * @return ManifestStoreBytes|null null when the JPEG has no APP11 JUMBF pieces (AC2, AC13)
     *
     * @throws ContainerException on every malformed or out-of-order case
     */
    public function extract($stream): ?ManifestStoreBytes
    {
        $reader = new StreamReader($stream, 'segment');
        $soi = $reader->readExactly(2, 0, 'SOI');
        if ($soi !== "\\xFF\\xD8") {
            throw new ContainerException(sprintf(
                'not a JPEG: expected FF D8 at offset 0, found %s',
                Bytes::hex($soi),
            ));
        }

        $pieces = 0;
        $instanceNumber = null;
        $lBox = null;
        $tBox = null;
        $collected = '';
        $ranges = [];

        while (true) {
            $offset = $reader->tell();
            $marker = $this->readMarker($reader, $offset);

            if ($marker === self::MARKER_SOS) {
                break;
            }
            if (! self::hasLengthField($marker)) {
                // Reading a length where there is none would skip an arbitrary
                // number of bytes and could land the scan past the store (AC15).
                throw new ContainerException(sprintf(
                    'unexpected marker FF %02X at offset %d before SOS',
                    $marker,
                    $offset,
                ));
            }

            // The length field counts itself; a segment body is length − 2.
            $length = $this->readUint16($reader, $offset, 'segment length');
            if ($length < 2) {
                throw new ContainerException(sprintf('segment length %d at offset %d is shorter than its own field', $length, $offset));
            }
            $bodyLength = $length - 2;

            if ($marker !== self::MARKER_APP11 || $bodyLength < self::PIECE_HEADER_LENGTH) {
                $reader->skip($bodyLength, $offset);

                continue;
            }

            $header = $reader->readExactly(self::PIECE_HEADER_LENGTH, $offset, 'APP11 header');
            if (! str_starts_with($header, 'JP')) {
                // Another user of APP11 (AC8): skipped like any unknown APPn segment.
                $reader->skip($bodyLength - self::PIECE_HEADER_LENGTH, $offset);

                continue;
            }

            /** @var array{en: int, z: int, lbox: int} $fields */
            $fields = unpack('nen/Nz/Nlbox', $header, 2);
            $pieceTBox = substr($header, 12, 4);
            $pieceNumber = $pieces + 1;

            if ($pieceNumber > $this->maxPieces) {
                throw new ContainerException(sprintf(
                    'piece %d exceeds the limit of %d piece(s) (offset %d)',
                    $pieceNumber,
                    $this->maxPieces,
                    $offset,
                ));
            }
            if ($fields['lbox'] <= $this->maxLBox && ! $this->budget->allows($fields['lbox'])) {
                throw new ContainerException(sprintf(
                    'LBox %d does not fit this host: %d bytes of memory remain. '
                    .'The file was not examined, so this is not a judgement about it (piece %d, offset %d)',
                    $fields['lbox'],
                    $this->budget->remainingBytes() ?? 0,
                    $pieceNumber,
                    $offset,
                ));
            }
            if ($fields['lbox'] > $this->maxLBox) {
                throw new ContainerException(sprintf(
                    'LBox %d exceeds the limit of %d bytes (piece %d, offset %d)',
                    $fields['lbox'],
                    $this->maxLBox,
                    $pieceNumber,
                    $offset,
                ));
            }
            // LBox 0 (to end of file) and 1 (64-bit XLBox follows) exist in ISO
            // BMFF; neither can be reassembled from fixed-size pieces here.
            if ($fields['lbox'] < 8) {
                throw new ContainerException(sprintf('LBox %d in piece %d is not a supported box length', $fields['lbox'], $pieceNumber));
            }
            // SPEC-041: Bing Image Creator numbers its first (and only) piece 0, which c2pa-rs
            // reads; every later piece still carries its own number.
            $firstPieceZero = $pieceNumber === 1 && $fields['z'] === 0;
            if ($fields['z'] !== $pieceNumber && ! $firstPieceZero) {
                throw new ContainerException(sprintf(
                    'piece out of order at offset %d: packet sequence number expected %d, found %d',
                    $offset,
                    $pieceNumber,
                    $fields['z'],
                ));
            }
            if ($instanceNumber === null || $lBox === null || $tBox === null) {
                $instanceNumber = $fields['en'];
                $lBox = $fields['lbox'];
                $tBox = $pieceTBox;
                $collected = substr($header, 8, 8); // LBox and TBox, once
            } else {
                if ($fields['en'] !== $instanceNumber) {
                    throw new ContainerException(sprintf(
                        'box instance number %d in piece %d differs from %d',
                        $fields['en'],
                        $pieceNumber,
                        $instanceNumber,
                    ));
                }
                if ($fields['lbox'] !== $lBox) {
                    throw new ContainerException(sprintf('LBox %d in piece %d differs from %d', $fields['lbox'], $pieceNumber, $lBox));
                }
                if ($pieceTBox !== $tBox) {
                    throw new ContainerException(sprintf('TBox %s in piece %d differs from %s', Bytes::hex($pieceTBox), $pieceNumber, Bytes::hex($tBox)));
                }
            }

            $dataLength = $bodyLength - self::PIECE_HEADER_LENGTH;
            if (strlen($collected) + $dataLength > $lBox) {
                throw new ContainerException(sprintf(
                    'piece %d carries the box past its LBox %d (%d bytes collected, %d more in the piece)',
                    $pieceNumber,
                    $lBox,
                    strlen($collected),
                    $dataLength,
                ));
            }

            $collected .= $reader->readExactly($dataLength, $offset, sprintf('piece %d data', $pieceNumber));
            $ranges[] = ['start' => $offset, 'length' => 2 + $length];   // marker, length field, piece header, data
            $pieces++;
        }

        if ($pieces === 0 || $lBox === null) {
            return null;
        }
        if (strlen($collected) !== $lBox) {
            throw new ContainerException(sprintf(
                'incomplete box: LBox %d but %d bytes collected in %d piece(s)',
                $lBox,
                strlen($collected),
                $pieces,
            ));
        }

        return new ManifestStoreBytes($collected, $ranges);
    }

    /**
     * Whether a marker code is followed by a two-byte length field
     * (ITU-T T.81, Table B.1). TEM (01) and RST0–7 (D0–D7) stand alone, as
     * do SOI (D8) and EOI (D9); 02–BF are reserved. Everything else — SOFn,
     * DHT, DAC, SOS, DQT, DNL, DRI, DHP, EXP, APPn, JPGn, COM — has one.
     */
    private static function hasLengthField(int $marker): bool
    {
        if ($marker < 0xC0) {
            return false;
        }

        return $marker < 0xD0 || $marker > 0xD9;
    }

    /**
     * Reads the marker at the current position: one or more fill bytes
     * FF, then the marker code. Returns the code.
     */
    private function readMarker(StreamReader $reader, int $offset): int
    {
        $byte = $reader->readExactly(1, $offset, 'marker');
        if ($byte !== "\\xFF") {
            throw new ContainerException(sprintf('expected a marker at offset %d, found %02X', $offset, ord($byte)));
        }
        do {
            $byte = $reader->readExactly(1, $offset, 'marker');
        } while ($byte === "\\xFF");

        return ord($byte);
    }

    private function readUint16(StreamReader $reader, int $offset, string $what): int
    {
        /** @var array{1: int} $value */
        $value = unpack('n', $reader->readExactly(2, $offset, $what));

        return $value[1];
    }
}
`,"src/Container/ManifestStoreBytes.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

/**
 * The manifest store exactly as it was embedded in the container, one JUMBF
 * box from LBox to its last data byte, reassembled but not interpreted.
 * What the bytes mean is M2's concern (SPEC-001, Scope). With it, the byte
 * ranges of the *file* the store and its container framing occupy
 * (SPEC-001/002/003 amendment, for SPEC-012): one per piece, in file
 * order, contiguous pieces merged — what the data hash's exclusion for
 * the store must equal.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class ManifestStoreBytes
{
    /** @var list<array{start: int, length: int}> */
    public array $ranges;

    /**
     * @param  list<array{start: int, length: int}>  $ranges  in file order; adjacent ranges are merged here
     */
    public function __construct(public string $bytes, array $ranges)
    {
        $merged = [];
        foreach ($ranges as $range) {
            $last = count($merged) - 1;
            if ($last >= 0 && $merged[$last]['start'] + $merged[$last]['length'] === $range['start']) {
                $merged[$last] = ['start' => $merged[$last]['start'], 'length' => $merged[$last]['length'] + $range['length']];
            } else {
                $merged[] = $range;
            }
        }
        $this->ranges = $merged;
    }
}
`,"src/Container/PngManifestStoreExtractor.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

use Provemark\\C2paVerifier\\Support\\Bytes;
use Provemark\\C2paVerifier\\Support\\MemoryBudget;

/**
 * PNG \`caBX\` → manifest store bytes (SPEC-002; C2PA 2.4 §A.3).
 *
 * Walks the chunks from the eight-byte signature to IEND. Every chunk that
 * is not \`caBX\` is skipped unread, CRC included. The one \`caBX\` chunk
 * is checked before its data is read (limit, minimum length), then its LBox
 * against the chunk length, then its CRC-32 against the stored one. The
 * walk continues past it so that a second \`caBX\` is seen and refused, as
 * c2patool does. The chunk data is the JUMBF box, whole; nothing is
 * interpreted.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class PngManifestStoreExtractor
{
    // SPEC-024: 16 MiB, not 64. Measured in step 66 over 212 corpus stores: median
    // 45 kB, p90 241 kB, largest ever met 3.36 MB. A store at this bound peaks at
    // 38 MB (step 67b), which a 64 MB host survives; the old 64 MiB needed 132 MB and
    // ended a 128 MB host with a fatal error. Same figure in SPEC-001 and SPEC-003.
    public const DEFAULT_MAX_CHUNK_LENGTH = 16 * 1024 * 1024;

    private const SIGNATURE = "\\x89PNG\\r\\n\\x1a\\n";

    private const TYPE_CABX = 'caBX';

    private const TYPE_IEND = 'IEND';

    /** LBox (4) + TBox (4): the least a JUMBF box can be. */
    private const BOX_HEADER_LENGTH = 8;

    public function __construct(
        public int $maxChunkLength = self::DEFAULT_MAX_CHUNK_LENGTH,
        private MemoryBudget $budget = new MemoryBudget,
    ) {}

    /**
     * @param  resource  $stream  a readable, seekable stream positioned at 0
     * @return ManifestStoreBytes|null null when the PNG has no caBX chunk (AC2)
     *
     * @throws ContainerException on every malformed case
     */
    public function extract($stream): ?ManifestStoreBytes
    {
        $reader = new StreamReader($stream, 'chunk');
        $signature = $reader->readExactly(8, 0, 'the signature');
        if ($signature !== self::SIGNATURE) {
            throw new ContainerException(sprintf(
                'not a PNG: expected %s at offset 0, found %s',
                Bytes::hex(self::SIGNATURE),
                Bytes::hex($signature),
            ));
        }

        $store = null;
        $storeOffset = null;

        while (true) {
            $offset = $reader->tell();
            $header = $reader->readUpTo(8);
            if (strlen($header) !== 8) {
                throw new ContainerException(sprintf(
                    'unexpected end of file: a chunk header was expected at offset %d, got %d byte(s)',
                    $offset,
                    strlen($header),
                ));
            }
            /** @var array{length: int, type: string} $chunk */
            $chunk = unpack('Nlength/a4type', $header);

            if ($chunk['type'] === self::TYPE_IEND) {
                break;
            }
            if ($chunk['type'] !== self::TYPE_CABX) {
                // Data and CRC of a chunk we do not need: never read (AC8, AC9 —
                // where the chunk sits is not this layer's concern).
                $reader->skip($chunk['length'] + 4, $offset);

                continue;
            }

            if ($storeOffset !== null) {
                throw new ContainerException(sprintf(
                    'two caBX chunks at offsets %d and %d; a PNG carries at most one manifest store',
                    $storeOffset,
                    $offset,
                ));
            }
            if ($chunk['length'] > $this->maxChunkLength) {
                throw new ContainerException(sprintf(
                    'caBX chunk length %d exceeds the limit of %d bytes (offset %d)',
                    $chunk['length'],
                    $this->maxChunkLength,
                    $offset,
                ));
            }
            if (! $this->budget->allows($chunk['length'])) {
                throw new ContainerException(sprintf(
                    'caBX chunk length %d does not fit this host: %d bytes of memory remain. '
                    .'The file was not examined, so this is not a judgement about it (offset %d)',
                    $chunk['length'],
                    $this->budget->remainingBytes() ?? 0,
                    $offset,
                ));
            }
            if ($chunk['length'] < self::BOX_HEADER_LENGTH) {
                throw new ContainerException(sprintf(
                    'caBX chunk length %d is shorter than the %d-byte box header (offset %d)',
                    $chunk['length'],
                    self::BOX_HEADER_LENGTH,
                    $offset,
                ));
            }

            // LBox first, on its own: it is the first four bytes of the data and
            // must equal the chunk length before the rest is worth reading (AC7,
            // AC10) — and before the CRC, which a wrong length field also breaks.
            $lBoxBytes = $reader->readExactly(4, $offset, 'LBox');
            /** @var array{1: int} $lBox */
            $lBox = unpack('N', $lBoxBytes);
            if ($lBox[1] !== $chunk['length']) {
                throw new ContainerException(sprintf(
                    'LBox %d differs from the chunk length %d (caBX chunk at offset %d)',
                    $lBox[1],
                    $chunk['length'],
                    $offset,
                ));
            }

            $data = $lBoxBytes.$reader->readExactly($chunk['length'] - 4, $offset, 'the data');
            /** @var array{1: int} $stored */
            $stored = unpack('N', $reader->readExactly(4, $offset, 'the CRC'));
            $computed = crc32(self::TYPE_CABX.$data);
            if ($stored[1] !== $computed) {
                throw new ContainerException(sprintf(
                    'caBX chunk at offset %d: stored CRC %08X, computed %08X',
                    $offset,
                    $stored[1],
                    $computed,
                ));
            }

            $store = $data;
            $storeOffset = $offset;
        }

        if ($store === null || $storeOffset === null) {
            return null;
        }

        return new ManifestStoreBytes($store, [['start' => $storeOffset, 'length' => 12 + strlen($store)]]);   // length, type, data, CRC
    }
}
`,"src/Container/RemoteManifestDetector.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

/**
 * A file with no embedded manifest store may still declare one by URL:
 * XMP \`dcterms:provenance\` (C2PA 2.4 §11.4, remote manifests). This
 * verifier never fetches it — no network in the verification path — but
 * says that it is there (SPEC-013 amendment 9): the caller must be able to
 * tell "no Content Credentials" from "Content Credentials elsewhere".
 * A note, not a verdict: the first \`maxScan\` bytes are searched for the
 * attribute, and only an http(s) URL of printable ASCII is reported;
 * anything else is left unreported rather than guessed at.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class RemoteManifestDetector
{
    public const DEFAULT_MAX_SCAN = 8388608;   // 8 MiB: XMP sits in the head of a JPEG and a PNG, and inside a RIFF chunk of a WebP

    public const MAX_URL_LENGTH = 2048;

    public function __construct(private int $maxScan = self::DEFAULT_MAX_SCAN) {}

    /**
     * @param  resource  $stream
     * @return string|null the declared URL, or null when none is declared (or none this verifier would repeat)
     */
    public function detect($stream): ?string
    {
        rewind($stream);
        $head = stream_get_contents($stream, $this->maxScan);
        if ($head === false || preg_match('/dcterms:provenance\\s*=\\s*"([^"]{1,'.self::MAX_URL_LENGTH.'})"/', $head, $m) !== 1) {
            return null;
        }
        $url = $m[1];
        if (preg_match('#\\Ahttps?://[\\x21-\\x7E]+\\z#', $url) !== 1) {
            return null;   // not a URL this verifier would print: unreported, never guessed at
        }

        return $url;
    }
}
`,"src/Container/StreamReader.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

/**
 * The one way the Container layer touches a stream (SPEC-004). Reads
 * exactly what is asked or fails naming the segment or chunk it was inside
 * of; skips without reading; never returns a partial result. Truncation is
 * decided by the file's end, not by probing: a file that ends inside the
 * skipped bytes is this reader's error, one that ends exactly after them
 * is the caller's next read to report.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class StreamReader
{
    /**
     * @param  resource  $stream  a readable, seekable stream
     * @param  string  $noun  what the containers call their unit: "segment", "chunk"
     */
    public function __construct(private mixed $stream, private string $noun)
    {
        if (! is_resource($stream)) {
            throw new \\InvalidArgumentException('StreamReader needs a stream resource');
        }
    }

    /**
     * Exactly $length bytes, or a ContainerException naming $what and the
     * segment or chunk at $offset. Zero bytes is '' without a read (fread
     * with a length of 0 throws in PHP 8).
     */
    public function readExactly(int $length, int $offset, string $what): string
    {
        if ($length === 0) {
            return '';
        }
        if ($length < 0) {
            throw new \\LogicException(sprintf('negative read length %d', $length));
        }
        $bytes = fread($this->stream, $length);
        if ($bytes === false || strlen($bytes) !== $length) {
            throw new ContainerException(sprintf(
                'unexpected end of file while reading %s of the %s at offset %d: wanted %d bytes, got %d',
                $what,
                $this->noun,
                $offset,
                $length,
                $bytes === false ? 0 : strlen($bytes),
            ));
        }

        return $bytes;
    }

    /**
     * Up to $length bytes — fewer at the end of the file, '' when nothing is
     * left. For callers that want to see a short read and name the fault
     * themselves (a header that is not there, a pad byte that is missing).
     */
    public function readUpTo(int $length): string
    {
        if ($length <= 0) {
            throw new \\LogicException(sprintf('readUpTo needs a positive length, got %d', $length));
        }
        $bytes = fread($this->stream, $length);

        return $bytes === false ? '' : $bytes;
    }

    /**
     * Forward $length bytes without reading them. A seek past the end of a
     * file succeeds, so the end is looked up: inside the skipped bytes is an
     * error naming the segment or chunk at $offset; exactly at their end is
     * not — the caller's next read reports what is missing.
     */
    public function skip(int $length, int $offset): void
    {
        if ($length === 0) {
            return;
        }
        if ($length < 0) {
            throw new \\LogicException(sprintf('negative skip length %d', $length));
        }
        $target = $this->tell() + $length;
        $end = $this->end();
        if ($end < $target) {
            throw new ContainerException(sprintf(
                'unexpected end of file inside the %s at offset %d: it ends at %d, the file at %d',
                $this->noun,
                $offset,
                $target,
                $end,
            ));
        }
        if (fseek($this->stream, $target, SEEK_SET) !== 0) {
            throw new ContainerException(sprintf('cannot skip %d bytes of the %s at offset %d', $length, $this->noun, $offset));
        }
    }

    public function tell(): int
    {
        $position = ftell($this->stream);
        if ($position === false) {
            throw new ContainerException('the stream is not seekable');
        }

        return $position;
    }

    /** The file's length; the position is unchanged afterwards. */
    public function end(): int
    {
        $position = $this->tell();
        if (fseek($this->stream, 0, SEEK_END) !== 0) {
            throw new ContainerException('cannot seek to the end of the stream');
        }
        $end = $this->tell();
        if (fseek($this->stream, $position, SEEK_SET) !== 0) {
            throw new ContainerException('cannot seek back after measuring the stream');
        }

        return $end;
    }
}
`,"src/Container/WebpManifestStoreExtractor.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Container;

use Provemark\\C2paVerifier\\Support\\Bytes;
use Provemark\\C2paVerifier\\Support\\MemoryBudget;

/**
 * WebP RIFF \`C2PA\` → manifest store bytes (SPEC-003; C2PA 2.4 §A.3).
 *
 * Reads the twelve-byte header, checks the RIFF size against the file
 * length before anything else, then walks the chunks to that end. Every
 * chunk but \`C2PA\` is skipped unread; after an odd-length chunk the pad
 * byte is read and must be zero. The one \`C2PA\` chunk is checked before its
 * data is read (limit, minimum, overrun), then its LBox against the chunk
 * length; the pad byte is not part of the store. The walk continues past
 * it so that a second \`C2PA\` is seen and refused — c2patool takes the
 * first silently; this verifier does not choose.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class WebpManifestStoreExtractor
{
    // SPEC-024: 16 MiB, not 64. Measured in step 66 over 212 corpus stores: median
    // 45 kB, p90 241 kB, largest ever met 3.36 MB. A store at this bound peaks at
    // 38 MB (step 67b), which a 64 MB host survives; the old 64 MiB needed 132 MB and
    // ended a 128 MB host with a fatal error. Same figure in SPEC-001 and SPEC-002.
    public const DEFAULT_MAX_CHUNK_LENGTH = 16 * 1024 * 1024;

    private const RIFF = 'RIFF';

    private const FORM_WEBP = 'WEBP';

    private const TYPE_C2PA = 'C2PA';

    /** RIFF (4) + size (4) + form type (4). */
    private const HEADER_LENGTH = 12;

    /** LBox (4) + TBox (4): the least a JUMBF box can be. */
    private const BOX_HEADER_LENGTH = 8;

    public function __construct(
        public int $maxChunkLength = self::DEFAULT_MAX_CHUNK_LENGTH,
        private MemoryBudget $budget = new MemoryBudget,
    ) {}

    /**
     * @param  resource  $stream  a readable, seekable stream positioned at 0
     * @return ManifestStoreBytes|null null when the WebP has no C2PA chunk (AC2)
     *
     * @throws ContainerException on every malformed case
     */
    public function extract($stream): ?ManifestStoreBytes
    {
        $reader = new StreamReader($stream, 'chunk');
        $header = $reader->readUpTo(self::HEADER_LENGTH);
        if (strlen($header) < 4 || substr($header, 0, 4) !== self::RIFF) {
            throw new ContainerException(sprintf(
                'not a RIFF file: expected RIFF at offset 0, found %s',
                Bytes::hex(substr($header, 0, 4)),
            ));
        }
        if (strlen($header) !== self::HEADER_LENGTH) {
            throw new ContainerException(sprintf('unexpected end of file inside the %d-byte RIFF header', self::HEADER_LENGTH));
        }
        $form = substr($header, 8, 4);
        if ($form !== self::FORM_WEBP) {
            throw new ContainerException(sprintf(
                'not a WebP: expected form type WEBP at offset 8, found %s',
                Bytes::printable($form),
            ));
        }

        // The size field promises the file length minus 8: check it first, so
        // a truncated or padded file is one error naming both numbers (AC5,
        // AC16). The length comes from a seek, not a read.
        /** @var array{1: int} $size */
        $size = unpack('V', $header, 4);
        $end = $reader->end();
        if ($size[1] !== $end - 8) {
            throw new ContainerException(sprintf(
                'RIFF size %d in the header, %d bytes in the file after it',
                $size[1],
                $end - 8,
            ));
        }

        $store = null;
        $storeOffset = null;

        while ($reader->tell() < $end) {
            $offset = $reader->tell();
            $chunkHeader = $reader->readExactly(8, $offset, 'the chunk header');
            /** @var array{type: string, length: int} $chunk */
            $chunk = unpack('a4type/Vlength', $chunkHeader);
            $padded = $chunk['length'] & 1;

            if ($offset + 8 + $chunk['length'] > $end) {
                throw new ContainerException(sprintf(
                    '%s chunk at offset %d declares %d bytes, past the end of the file at %d',
                    Bytes::printable($chunk['type']),
                    $offset,
                    $chunk['length'],
                    $end,
                ));
            }

            if ($chunk['type'] !== self::TYPE_C2PA) {
                // Where the chunk sits is not this layer's concern (AC8).
                $reader->skip($chunk['length'], $offset);
            } else {
                if ($storeOffset !== null) {
                    throw new ContainerException(sprintf(
                        'two C2PA chunks at offsets %d and %d; a WebP carries at most one manifest store',
                        $storeOffset,
                        $offset,
                    ));
                }
                if ($chunk['length'] <= $this->maxChunkLength && ! $this->budget->allows($chunk['length'])) {
                    throw new ContainerException(sprintf(
                        'C2PA chunk length %d does not fit this host: %d bytes of memory remain. '
                        .'The file was not examined, so this is not a judgement about it (offset %d)',
                        $chunk['length'],
                        $this->budget->remainingBytes() ?? 0,
                        $offset,
                    ));
                }
                if ($chunk['length'] > $this->maxChunkLength) {
                    throw new ContainerException(sprintf(
                        'C2PA chunk length %d exceeds the limit of %d bytes (offset %d)',
                        $chunk['length'],
                        $this->maxChunkLength,
                        $offset,
                    ));
                }
                if ($chunk['length'] < self::BOX_HEADER_LENGTH) {
                    throw new ContainerException(sprintf(
                        'C2PA chunk length %d is shorter than the %d-byte box header (offset %d)',
                        $chunk['length'],
                        self::BOX_HEADER_LENGTH,
                        $offset,
                    ));
                }

                // LBox first, on its own: the first four bytes of the data, big-endian
                // inside the box although RIFF is little-endian around it (AC9, AC10).
                $lBoxBytes = $reader->readExactly(4, $offset, 'LBox');
                /** @var array{1: int} $lBox */
                $lBox = unpack('N', $lBoxBytes);
                if ($lBox[1] !== $chunk['length']) {
                    throw new ContainerException(sprintf(
                        'LBox %d differs from the chunk length %d (C2PA chunk at offset %d)',
                        $lBox[1],
                        $chunk['length'],
                        $offset,
                    ));
                }

                $store = $lBoxBytes.$reader->readExactly($chunk['length'] - 4, $offset, 'the data');
                $storeOffset = $offset;
            }

            if ($padded === 1) {
                $this->readPad($reader, $offset + 8 + $chunk['length']);
            }
        }

        if ($store === null || $storeOffset === null) {
            return null;
        }

        return new ManifestStoreBytes($store, [['start' => $storeOffset, 'length' => 8 + strlen($store)]]);   // FourCC, size, data; the pad byte is hashed (step 23)
    }

    /**
     * The pad byte after an odd-length chunk: present and zero, as RIFF
     * requires (AC12). Not part of any chunk's data.
     */
    private function readPad(StreamReader $reader, int $offset): void
    {
        $pad = $reader->readUpTo(1);
        if ($pad === '') {
            throw new ContainerException(sprintf('pad byte expected at offset %d, but the file ends there', $offset));
        }
        if ($pad !== "\\0") {
            throw new ContainerException(sprintf('pad byte at offset %d is %s, not 00', $offset, Bytes::hex($pad)));
        }
    }
}
`,"src/Cose/ClaimSignatureCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The claim-signature check as a list of statuses (SPEC-010; C2PA 2.4
 * §15.7): the signature box parsed (SPEC-008), the signature verified
 * (SPEC-009), and one of claimSignature.validated, claimSignature.mismatch,
 * or the code the CoseException carries — always with the signature box's
 * absolute JUMBF URI and the reason.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class ClaimSignatureCheck
{
    public function __construct(
        private SignatureVerifier $verifier = new SignatureVerifier,
    ) {}

    /** @return list<ValidationStatus> */
    public function check(Manifest $manifest): array
    {
        return $this->checkBytes(
            $manifest->signatureBytes(),
            $manifest->claimBytes(),
            sprintf('self#jumbf=/c2pa/%s/c2pa.signature', $manifest->label),
        );
    }

    /**
     * The same check on bare bytes, for signatures that come without a
     * manifest (test vectors, a detached store).
     *
     * @return list<ValidationStatus>
     */
    public function checkBytes(string $signatureBytes, string $claimBytes, string $url): array
    {
        try {
            $cose = CoseSign1::fromBytes($signatureBytes);
            $verifies = $this->verifier->verify($cose, $claimBytes);
        } catch (CoseException $e) {
            return [new ValidationStatus($e->status, $url, $e->getMessage())];
        }

        if (! $verifies) {
            return [new ValidationStatus(StatusCode::ClaimSignatureMismatch, $url, sprintf('the claim signature does not verify under the leaf certificate (alg %d)', $cose->alg))];
        }

        // SPEC-039: c2patool reports insideValidity wherever the signature verifies, directly before
        // claimSignature.validated — an expired signer included (open question 1); the certificate's
        // own period is judged elsewhere, as signingCredential.expired
        return [
            new ValidationStatus(StatusCode::ClaimSignatureInsideValidity, $url, 'claim signature valid'),
            new ValidationStatus(StatusCode::ClaimSignatureValidated, $url, sprintf('the claim signature verifies under the leaf certificate (alg %d, %d certificates in x5chain)', $cose->alg, count($cose->chain))),
        ];
    }
}
`,"src/Cose/CoseException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * Thrown when the signature box is not the COSE_Sign1_Tagged structure C2PA
 * 2.4 §13.2 requires (SPEC-008), or when the signature cannot be verified
 * (SPEC-009), carrying the §15 code (SPEC-008/009 amendment 1, defined in
 * SPEC-010): algorithm.unsupported for an alg this installation cannot
 * verify, signingCredential.invalid for a key or chain that is not
 * acceptable, general.error for a structural fault. A named fault — never
 * "the signature does not verify".
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class CoseException extends \\RuntimeException
{
    public function __construct(
        string $message,
        public readonly StatusCode $status = StatusCode::GeneralError,
        ?\\Throwable $previous = null,
    ) {
        parent::__construct($message, 0, $previous);
    }
}
`,"src/Cose/CoseSign1.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Cbor\\CborDecoder;
use Provemark\\C2paVerifier\\Cbor\\CborException;
use Provemark\\C2paVerifier\\Cbor\\CborTag;
use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * A claim signature as a structure (SPEC-008; RFC 8152 §4.2, C2PA 2.4
 * §13.2): tag 18 over [protected, unprotected, nil, signature]. Reads the
 * headers — alg under the integer label 1 in the protected bucket, the
 * certificate chain under 33 (or the deprecated "x5chain") in either
 * bucket, the timestamp for M6 — and builds the Sig_structure, the bytes
 * that were signed. No cryptography here: that is SPEC-009.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class CoseSign1
{
    public const TAG = 18;

    public const LABEL_ALG = 1;

    public const LABEL_X5CHAIN = 33;

    public const LABEL_X5CHAIN_DEPRECATED = 'x5chain';

    public const DEFAULT_MAX_CHAIN = 16;

    public const DEFAULT_MAX_CERTIFICATE_BYTES = 16384;

    public const DEFAULT_MAX_PROTECTED_BYTES = 65536;

    /** What the Sig_structure's context string is for a COSE_Sign1 (RFC 8152 §4.4; C2PA §13.2.3). */
    private const CONTEXT = 'Signature1';

    /**
     * @param  string  $protectedBytes  the protected header as stored — what the Sig_structure carries
     * @param  array<int|string, mixed>  $protected
     * @param  array<int|string, mixed>  $unprotected
     * @param  list<CborBytes>  $chain  DER certificates, leaf first
     * @param  mixed  $timestamp  the sigTst / sigTst2 value as decoded, or null (M6)
     * @param  array<int|string, mixed>  $otherHeaders  every header but alg and the chain's label, both buckets
     */
    public function __construct(
        public string $protectedBytes,
        public array $protected,
        public array $unprotected,
        public string $signature,
        public int $alg,
        public array $chain,
        public bool $chainProtected,
        public mixed $timestamp,
        public array $otherHeaders,
    ) {}

    /**
     * @param  string  $bytes  the signature box's cbor data (Manifest::signatureBytes())
     *
     * @throws CoseException
     */
    public static function fromBytes(
        string $bytes,
        int $maxChain = self::DEFAULT_MAX_CHAIN,
        int $maxCertificateBytes = self::DEFAULT_MAX_CERTIFICATE_BYTES,
        int $maxProtectedBytes = self::DEFAULT_MAX_PROTECTED_BYTES,
    ): self {
        $decoded = self::decode($bytes, 'the signature box');
        if (! $decoded instanceof CborTag) {
            throw new CoseException(sprintf('expected tag %d (COSE_Sign1_Tagged), found %s', self::TAG, is_array($decoded) ? 'an untagged array' : self::kind($decoded)));
        }
        if ($decoded->number !== self::TAG) {
            throw new CoseException(sprintf('expected tag %d (COSE_Sign1_Tagged), found tag %d', self::TAG, $decoded->number));
        }
        $items = $decoded->value;
        if (! is_array($items) || ! array_is_list($items)) {
            throw new CoseException(sprintf('expected an array of four items under tag %d, found %s', self::TAG, self::kind($items)));
        }
        if (count($items) !== 4) {
            throw new CoseException(sprintf('expected four items, found %d', count($items)));
        }
        [$protectedItem, $unprotected, $payload, $signatureItem] = $items;

        if (! $protectedItem instanceof CborBytes) {
            throw new CoseException(sprintf('the protected header is not a byte string but %s', self::kind($protectedItem)));
        }
        if (strlen($protectedItem->bytes) > $maxProtectedBytes) {
            throw new CoseException(sprintf('protected header of %d bytes exceeds the limit of %d', strlen($protectedItem->bytes), $maxProtectedBytes));
        }
        if (! is_array($unprotected) || array_is_list($unprotected) && $unprotected !== []) {
            throw new CoseException(sprintf('the unprotected header is not a map but %s', self::kind($unprotected)));
        }
        if ($payload !== null) {
            throw new CoseException(sprintf(
                'the payload must be detached (nil); an empty byte string does not count (C2PA 2.4 §13.2.3) — found %s',
                self::kind($payload),
            ));
        }
        if (! $signatureItem instanceof CborBytes) {
            throw new CoseException(sprintf('the signature is not a byte string but %s', self::kind($signatureItem)));
        }

        // An empty protected byte string is an empty map (RFC 8152 §3).
        $protected = $protectedItem->bytes === '' ? [] : self::decode($protectedItem->bytes, 'the protected header');
        if (! is_array($protected) || array_is_list($protected) && $protected !== []) {
            throw new CoseException(sprintf('the protected header is not a map but %s', self::kind($protected)));
        }

        if (array_key_exists('alg', $protected) && ! array_key_exists(self::LABEL_ALG, $protected)) {
            throw new CoseException('alg under the string label "alg" is not allowed; C2PA 2.4 §13.2.3 requires the integer label 1');
        }
        if (! array_key_exists(self::LABEL_ALG, $protected)) {
            throw new CoseException('the protected header has no alg (label 1)');
        }
        $alg = $protected[self::LABEL_ALG];
        if (! is_int($alg)) {
            throw new CoseException(sprintf('alg is not an integer but %s', self::kind($alg)));
        }

        [$chainValue, $chainProtected] = self::findChain($protected, $unprotected);
        $chain = self::chain($chainValue, $maxChain, $maxCertificateBytes);

        $timestamp = $unprotected['sigTst2'] ?? $unprotected['sigTst'] ?? null;

        // Everything but alg (1) and the canonical chain label (33), both
        // buckets; a deprecated "x5chain" stays visible here, used or not.
        $otherHeaders = [];
        foreach ([$protected, $unprotected] as $bucket) {
            foreach ($bucket as $label => $value) {
                if ($label !== self::LABEL_ALG && $label !== self::LABEL_X5CHAIN) {
                    $otherHeaders[$label] = $value;
                }
            }
        }

        return new self($protectedItem->bytes, $protected, $unprotected, $signatureItem->bytes, $alg, $chain, $chainProtected, $timestamp, $otherHeaders);
    }

    /**
     * The bytes that were signed (RFC 8152 §4.4; C2PA 2.4 §13.2.3, §13.2.6):
     * ["Signature1", the protected header as stored, an empty external_aad,
     * the claim box's contents]. The only CBOR this verifier encodes:
     * definite, shortest-form lengths (RFC 8949 §4.2.1).
     */
    public function sigStructure(string $claimBytes): string
    {
        return "\\x84"
            .self::head(3, strlen(self::CONTEXT)).self::CONTEXT
            .self::head(2, strlen($this->protectedBytes)).$this->protectedBytes
            .self::head(2, 0)
            .self::head(2, strlen($claimBytes)).$claimBytes;
    }

    /**
     * Where the chain is: protected 33, protected "x5chain", unprotected 33,
     * unprotected "x5chain" — 33 wins within a bucket (C2PA 2.4 §14.5).
     *
     * @param  array<int|string, mixed>  $protected
     * @param  array<int|string, mixed>  $unprotected
     * @return array{0: mixed, 1: bool}
     */
    private static function findChain(array $protected, array $unprotected): array
    {
        foreach ([[true, $protected], [false, $unprotected]] as [$isProtected, $bucket]) {
            foreach ([self::LABEL_X5CHAIN, self::LABEL_X5CHAIN_DEPRECATED] as $label) {
                if (array_key_exists($label, $bucket)) {
                    return [$bucket[$label], $isProtected];
                }
            }
        }
        throw new CoseException('no x5chain in either header bucket (label 33 or "x5chain")', StatusCode::SigningCredentialInvalid);
    }

    /**
     * The chain as a list of DER certificates, the leaf checked to parse as
     * X.509; the limits before anything is looked at. One certificate may
     * come as a bare byte string instead of an array of one: RFC 9360, *"If
     * a single certificate is conveyed, it is placed in a CBOR byte
     * string"*, which c2pa-rs writes for a signer directly under a root
     * (SPEC-008 amendment 2). It is held to the same rules as an element.
     *
     * @return list<CborBytes>
     */
    private static function chain(mixed $value, int $maxChain, int $maxCertificateBytes): array
    {
        if ($value instanceof CborBytes) {
            if ($value->bytes === '') {
                throw new CoseException('x5chain is empty', StatusCode::SigningCredentialInvalid);
            }
            $value = [$value];
        }
        if (! is_array($value) || ! array_is_list($value)) {
            throw new CoseException(sprintf('x5chain is neither a byte string nor an array but %s', self::kind($value)), StatusCode::SigningCredentialInvalid);
        }
        if ($value === []) {
            throw new CoseException('x5chain is empty', StatusCode::SigningCredentialInvalid);
        }
        if (count($value) > $maxChain) {
            throw new CoseException(sprintf('chain of %d certificates exceeds the limit of %d', count($value), $maxChain), StatusCode::SigningCredentialInvalid);
        }
        $chain = [];
        foreach ($value as $i => $certificate) {
            if (! $certificate instanceof CborBytes) {
                throw new CoseException(sprintf('x5chain[%d] is not a byte string but %s', $i, self::kind($certificate)), StatusCode::SigningCredentialInvalid);
            }
            if ($certificate->bytes === '') {
                throw new CoseException(sprintf('x5chain[%d] is empty', $i), StatusCode::SigningCredentialInvalid);
            }
            if (strlen($certificate->bytes) > $maxCertificateBytes) {
                throw new CoseException(sprintf('certificate of %d bytes exceeds the limit of %d', strlen($certificate->bytes), $maxCertificateBytes), StatusCode::SigningCredentialInvalid);
            }
            $chain[] = $certificate;
        }
        if (! self::isX509($chain[0]->bytes)) {
            throw new CoseException('the leaf certificate is not an X.509 certificate', StatusCode::SigningCredentialInvalid);
        }

        return $chain;
    }

    /** Whether DER bytes parse as a certificate; OpenSSL's warning on failure is the answer, not noise. */
    private static function isX509(string $der): bool
    {
        set_error_handler(static fn (): bool => true);
        try {
            $certificate = openssl_x509_read(self::pem($der));
        } finally {
            restore_error_handler();
            while (openssl_error_string() !== false) {
                // drain OpenSSL's error queue so a later call does not report this failure
            }
        }

        return $certificate !== false;
    }

    private static function decode(string $bytes, string $what): mixed
    {
        try {
            return (new CborDecoder)->decode($bytes);
        } catch (CborException $e) {
            throw new CoseException(sprintf('%s is not valid CBOR: %s', $what, $e->getMessage()), StatusCode::GeneralError, $e);
        }
    }

    /** A CBOR head for major type $majorType (2, 3 or 4) with argument $n ≥ 0, shortest form. */
    private static function head(int $majorType, int $n): string
    {
        if ($n < 0) {
            throw new \\LogicException(sprintf('negative CBOR argument %d', $n));
        }
        $mt = $majorType << 5;

        return match (true) {
            $n < 24 => pack('C', $mt | $n),
            $n < 256 => pack('CC', $mt | 24, $n),
            $n < 65536 => pack('Cn', $mt | 25, $n),
            $n < 4294967296 => pack('CN', $mt | 26, $n),
            default => pack('CJ', $mt | 27, $n),
        };
    }

    private static function pem(string $der): string
    {
        return "-----BEGIN CERTIFICATE-----\\n".chunk_split(base64_encode($der), 64, "\\n")."-----END CERTIFICATE-----\\n";
    }

    private static function kind(mixed $value): string
    {
        return match (true) {
            $value instanceof CborBytes => 'a byte string',
            $value instanceof CborTag => sprintf('tag %d', $value->number),
            is_array($value) => array_is_list($value) ? 'an array' : 'a map',
            is_string($value) => 'text',
            is_int($value) => 'an integer',
            is_bool($value) => 'a boolean',
            $value === null => 'null',
            default => gettype($value),
        };
    }
}
`,"src/Cose/EcdsaSignature.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

/**
 * COSE carries an ECDSA signature as R‖S (RFC 8152 §8.1); OpenSSL wants
 * DER \`SEQUENCE { INTEGER r, INTEGER s }\` (RFC 3279 §2.2.3). The
 * conversion, with the two places it goes wrong: an INTEGER is minimal —
 * leading zeros stripped, one added back when the high bit is set — and a
 * SEQUENCE above 127 bytes needs the long-form length (P-521; SPEC-009
 * step 19).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class EcdsaSignature
{
    /** DER for an R‖S of exactly 2 × $curveBytes; null for any other length. */
    public static function toDer(string $rs, int $curveBytes): ?string
    {
        if (strlen($rs) !== 2 * $curveBytes) {
            return null;
        }
        $body = self::integer(substr($rs, 0, $curveBytes)).self::integer(substr($rs, $curveBytes));

        return "\\x30".self::length(strlen($body)).$body;
    }

    private static function integer(string $bytes): string
    {
        $minimal = ltrim($bytes, "\\0");
        if ($minimal === '') {
            $minimal = "\\0";
        }
        if ((ord($minimal[0]) & 0x80) !== 0) {
            $minimal = "\\0".$minimal;
        }

        return "\\x02".self::length(strlen($minimal)).$minimal;
    }

    /** A DER length: one byte up to 127, else 0x80 | n followed by n big-endian bytes. */
    private static function length(int $n): string
    {
        if ($n < 128) {
            return pack('C', $n);
        }
        $bytes = ltrim(pack('N', $n), "\\0");

        return pack('C', 0x80 | strlen($bytes)).$bytes;
    }
}
`,"src/Cose/OpenSsl.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

/**
 * OpenSSL reports failures twice: a PHP warning and an entry in its own
 * error queue. Here a failure is an answer, not noise: the warning is
 * swallowed for the duration of one call and the queue drained afterwards
 * so that no stale entry surfaces on a later, unrelated call.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class OpenSsl
{
    /**
     * @template T
     *
     * @param  callable(): T  $call
     * @return T
     */
    public static function quiet(callable $call): mixed
    {
        set_error_handler(static fn (): bool => true);
        try {
            return $call();
        } finally {
            restore_error_handler();
            self::drain();
        }
    }

    /** The queued OpenSSL errors, oldest first, and the queue emptied. */
    public static function drain(): string
    {
        $messages = [];
        while (($message = openssl_error_string()) !== false) {
            $messages[] = $message;
        }

        return implode('; ', $messages);
    }
}
`,"src/Cose/PublicKey.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * The public key of a DER certificate, classified by the algorithm
 * identifier of its SubjectPublicKeyInfo — not by PHP's key-type constants,
 * which do not name RSA-PSS and, before PHP 8.4, not Ed25519 either
 * (SPEC-009).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class PublicKey
{
    public const KIND_EC = 'ec';

    public const KIND_RSA = 'rsa';

    public const KIND_RSA_PSS = 'rsa-pss';

    public const KIND_ED25519 = 'ed25519';

    private const OID_EC = "\\x06\\x07\\x2a\\x86\\x48\\xce\\x3d\\x02\\x01";           // 1.2.840.10045.2.1

    private const OID_RSA = "\\x06\\x09\\x2a\\x86\\x48\\x86\\xf7\\x0d\\x01\\x01\\x01";  // 1.2.840.113549.1.1.1

    private const OID_RSA_PSS = "\\x06\\x09\\x2a\\x86\\x48\\x86\\xf7\\x0d\\x01\\x01\\x0a";  // 1.2.840.113549.1.1.10

    private const OID_ED25519 = "\\x06\\x03\\x2b\\x65\\x70";                       // 1.3.101.112

    private function __construct(
        public string $kind,
        public ?string $curve,
        public int $bits,
        public \\OpenSSLAsymmetricKey $key,
        public string $spki,
    ) {}

    /** @throws CoseException when the certificate or its key cannot be read, or the key is of no known kind */
    public static function fromCertificateDer(string $der): self
    {
        $pem = "-----BEGIN CERTIFICATE-----\\n".chunk_split(base64_encode($der), 64, "\\n")."-----END CERTIFICATE-----\\n";
        $key = OpenSsl::quiet(static fn () => openssl_pkey_get_public($pem));
        if ($key === false) {
            throw new CoseException('the leaf certificate\\'s public key cannot be read', StatusCode::SigningCredentialInvalid);
        }
        $details = OpenSsl::quiet(static fn () => openssl_pkey_get_details($key));
        if ($details === false || ! is_string($details['key']) || ! is_int($details['bits'])) {
            throw new CoseException('the leaf certificate\\'s public key has no readable details', StatusCode::SigningCredentialInvalid);
        }
        $spki = base64_decode((string) preg_replace('/-----[^-]+-----|\\s/', '', $details['key']), true);
        if ($spki === false) {
            throw new CoseException('the leaf certificate\\'s public key is not DER', StatusCode::SigningCredentialInvalid);
        }
        // The algorithm identifier sits at the start of the SPKI, inside its first 32 bytes.
        $head = substr($spki, 0, 32);
        if (str_contains($head, self::OID_RSA_PSS)) {
            return new self(self::KIND_RSA_PSS, null, $details['bits'], $key, $spki);
        }
        if (str_contains($head, self::OID_RSA)) {
            return new self(self::KIND_RSA, null, $details['bits'], $key, $spki);
        }
        if (str_contains($head, self::OID_ED25519)) {
            return new self(self::KIND_ED25519, null, $details['bits'], $key, $spki);
        }
        if (str_contains($head, self::OID_EC)) {
            $ec = $details['ec'] ?? null;
            $curve = is_array($ec) ? ($ec['curve_name'] ?? null) : null;
            if (! is_string($curve)) {
                throw new CoseException('the leaf certificate\\'s EC key names no curve', StatusCode::SigningCredentialInvalid);
            }

            return new self(self::KIND_EC, $curve, $details['bits'], $key, $spki);
        }
        throw new CoseException('the leaf certificate\\'s public key is of no kind this verifier knows (not EC, RSA, RSA-PSS or Ed25519)', StatusCode::SigningCredentialInvalid);
    }

    /**
     * The raw 32-byte Ed25519 key: the last 32 bytes of the 44-byte SPKI (RFC 8410).
     *
     * @return non-empty-string
     */
    public function rawEd25519(): string
    {
        $raw = substr($this->spki, -32);
        if (strlen($raw) !== 32) {
            throw new CoseException(sprintf('the Ed25519 SubjectPublicKeyInfo is %d bytes, expected 44', strlen($this->spki)), StatusCode::SigningCredentialInvalid);
        }

        return $raw;
    }

    public function describe(): string
    {
        return match ($this->kind) {
            self::KIND_EC => sprintf('EC key on %s', (string) $this->curve),
            self::KIND_RSA => sprintf('RSA key of %d bits', $this->bits),
            self::KIND_RSA_PSS => sprintf('RSA-PSS key of %d bits', $this->bits),
            default => 'Ed25519 key',
        };
    }
}
`,"src/Cose/RsaPss.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

/**
 * RSASSA-PSS verification for an ordinary rsaEncryption key (SPEC-009):
 * \`openssl_verify\` would do PKCS#1 v1.5 for such a key, so the signature
 * is undone with a raw RSA operation and the encoded message checked with
 * EMSA-PSS-VERIFY (RFC 8017 §9.1.2), MGF1 over the same hash, salt length
 * = hash length (RFC 8230 §2). Read against cose-lib's PSSRSA.php.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class RsaPss
{
    public static function verify(string $message, string $signature, \\OpenSSLAsymmetricKey $key, string $hash, int $modBits): bool
    {
        $k = intdiv($modBits + 7, 8);
        if (strlen($signature) !== $k) {
            return false;
        }
        $em = '';
        $ok = OpenSsl::quiet(static function () use ($signature, &$em, $key): bool {
            return openssl_public_decrypt($signature, $em, $key, OPENSSL_NO_PADDING);
        });
        if (! $ok || ! is_string($em)) {
            return false;
        }
        // RFC 8017 §8.1.2 step 2.c: emLen = ceil((modBits − 1) / 8); OpenSSL returns k octets.
        $emLen = intdiv($modBits - 1 + 7, 8);
        if ($emLen < strlen($em)) {
            if (ltrim(substr($em, 0, strlen($em) - $emLen), "\\0") !== '') {
                return false;
            }
            $em = substr($em, -$emLen);
        }

        return self::emsaPssVerify($message, $em, $modBits - 1, $hash);
    }

    /** RFC 8017 §9.1.2 with sLen = hLen. */
    private static function emsaPssVerify(string $message, string $em, int $emBits, string $hash): bool
    {
        $mHash = hash($hash, $message, true);
        $hLen = strlen($mHash);
        $sLen = $hLen;
        $emLen = intdiv($emBits + 7, 8);
        if (strlen($em) !== $emLen || $emLen < $hLen + $sLen + 2) {
            return false;
        }
        if ($em[$emLen - 1] !== "\\xbc") {
            return false;
        }
        $maskedDb = substr($em, 0, $emLen - $hLen - 1);
        $h = substr($em, $emLen - $hLen - 1, $hLen);
        $topBits = 8 * $emLen - $emBits;
        if ($topBits > 0 && (ord($maskedDb[0]) >> (8 - $topBits)) !== 0) {
            return false;
        }
        $db = $maskedDb ^ self::mgf1($h, $emLen - $hLen - 1, $hash);
        if ($topBits > 0) {
            $db[0] = chr(ord($db[0]) & (0xFF >> $topBits));
        }
        $psLen = $emLen - $hLen - $sLen - 2;
        if (substr($db, 0, $psLen) !== str_repeat("\\0", $psLen) || $db[$psLen] !== "\\x01") {
            return false;
        }
        $salt = substr($db, $psLen + 1, $sLen);
        $h2 = hash($hash, str_repeat("\\0", 8).$mHash.$salt, true);

        return hash_equals($h, $h2);
    }

    private static function mgf1(string $seed, int $length, string $hash): string
    {
        $out = '';
        for ($counter = 0; strlen($out) < $length; $counter++) {
            $out .= hash($hash, $seed.pack('N', $counter), true);
        }

        return substr($out, 0, $length);
    }
}
`,"src/Cose/SignatureVerifier.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Cose;

use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * Does the claim signature verify under the leaf's public key? (SPEC-009;
 * C2PA 2.4 §13.2.1, §13.2.6.) Three outcomes: true; false — a mismatch, a
 * signature of the wrong shape, an OpenSSL refusal; CoseException — it
 * cannot be verified: an unsupported alg, a key that does not fit the
 * algorithm, a missing extension. The key is checked against the
 * algorithm before any arithmetic: a secp256k1 or 1024-bit key verifies
 * mathematically and must be refused first. Nothing here signs.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class SignatureVerifier
{
    public const ES256 = -7;

    public const ES384 = -35;

    public const ES512 = -36;

    public const PS256 = -37;

    public const PS384 = -38;

    public const PS512 = -39;

    public const EDDSA = -8;

    private const NAMES = [self::ES256 => 'ES256', self::ES384 => 'ES384', self::ES512 => 'ES512', self::PS256 => 'PS256', self::PS384 => 'PS384', self::PS512 => 'PS512', self::EDDSA => 'EdDSA'];

    private const HASHES = [self::ES256 => 'sha256', self::ES384 => 'sha384', self::ES512 => 'sha512', self::PS256 => 'sha256', self::PS384 => 'sha384', self::PS512 => 'sha512'];

    private const OPENSSL_ALGOS = ['sha256' => OPENSSL_ALGO_SHA256, 'sha384' => OPENSSL_ALGO_SHA384, 'sha512' => OPENSSL_ALGO_SHA512];

    /** The curves §13.2.1 allows for any ECDSA algorithm, with their coordinate size. */
    private const CURVES = ['prime256v1' => 32, 'secp384r1' => 48, 'secp521r1' => 66];

    private const RSA_MIN_BITS = 2048;

    private const RSA_MAX_BITS = 16384;

    public function __construct(
        public bool $useSodium = true,
        public bool $useOpensslEd25519 = true,
    ) {}

    /**
     * @throws CoseException
     */
    public function verify(CoseSign1 $cose, string $claimBytes): bool
    {
        $alg = $cose->alg;
        if (! isset(self::NAMES[$alg])) {
            throw new CoseException(sprintf('alg %d is not supported (C2PA 2.4 §13.2.1 allows ES256/384/512, PS256/384/512, EdDSA)', $alg), StatusCode::AlgorithmUnsupported);
        }
        $key = PublicKey::fromCertificateDer($cose->chain[0]->bytes);
        $this->requireFit($alg, $key);
        $message = $cose->sigStructure($claimBytes);

        return match ($alg) {
            self::ES256, self::ES384, self::ES512 => $this->ecdsa($message, $cose->signature, $key, self::HASHES[$alg]),
            self::PS256, self::PS384, self::PS512 => $this->rsaPss($message, $cose->signature, $key, self::HASHES[$alg]),
            default => $this->ed25519($message, $cose->signature, $key),
        };
    }

    /** C2PA 2.4 §13.2.1: refuse before verifying when the key is not right for the algorithm. */
    private function requireFit(int $alg, PublicKey $key): void
    {
        $name = self::NAMES[$alg];
        $fits = match ($alg) {
            self::ES256, self::ES384, self::ES512 => $key->kind === PublicKey::KIND_EC && isset(self::CURVES[(string) $key->curve]),
            self::PS256, self::PS384, self::PS512 => in_array($key->kind, [PublicKey::KIND_RSA, PublicKey::KIND_RSA_PSS], true)
                && $key->bits >= self::RSA_MIN_BITS && $key->bits <= self::RSA_MAX_BITS,
            default => $key->kind === PublicKey::KIND_ED25519,
        };
        if ($fits) {
            return;
        }
        $requires = match ($alg) {
            self::ES256, self::ES384, self::ES512 => 'an EC key on P-256, P-384 or P-521',
            self::PS256, self::PS384, self::PS512 => sprintf('an RSA key of %d to %d bits', self::RSA_MIN_BITS, self::RSA_MAX_BITS),
            default => 'an Ed25519 key',
        };
        throw new CoseException(sprintf('key does not fit %s (alg %d): %s; C2PA 2.4 §13.2.1 requires %s', $name, $alg, $key->describe(), $requires), StatusCode::SigningCredentialInvalid);
    }

    private function ecdsa(string $message, string $signature, PublicKey $key, string $hash): bool
    {
        $der = EcdsaSignature::toDer($signature, self::CURVES[(string) $key->curve]);
        if ($der === null) {
            return false;
        }

        return $this->opensslVerify($message, $der, $key, self::OPENSSL_ALGOS[$hash]);
    }

    private function rsaPss(string $message, string $signature, PublicKey $key, string $hash): bool
    {
        if ($key->kind === PublicKey::KIND_RSA_PSS) {
            // OpenSSL performs PSS itself for this key type, with the key's own
            // parameters, and answers −1 when they do not match the hash asked.
            return $this->opensslVerify($message, $signature, $key, self::OPENSSL_ALGOS[$hash]);
        }

        // An ordinary RSA key: openssl_verify would do PKCS#1 v1.5. Never that.
        return RsaPss::verify($message, $signature, $key->key, $hash, $key->bits);
    }

    private function ed25519(string $message, string $signature, PublicKey $key): bool
    {
        if ($this->useSodium && function_exists('sodium_crypto_sign_verify_detached')) {
            if (strlen($signature) !== SODIUM_CRYPTO_SIGN_BYTES) {
                return false;
            }

            return sodium_crypto_sign_verify_detached($signature, $message, $key->rawEd25519());
        }
        if ($this->useOpensslEd25519) {
            try {
                $result = OpenSsl::quiet(static fn (): int|false => openssl_verify($message, $signature, $key->key, 0));
            } catch (\\Throwable) {
                $result = -1;
            }
            if ($result === 1) {
                return true;
            }
            if ($result === 0) {
                return false;
            }
        }
        throw new CoseException('EdDSA cannot be verified: neither ext-sodium nor OpenSSL Ed25519 support is available on this PHP', StatusCode::AlgorithmUnsupported);
    }

    /** 1 is the only true; 0 a mismatch; −1 an OpenSSL refusal — false, never true. */
    private function opensslVerify(string $message, string $signature, PublicKey $key, int $algo): bool
    {
        $result = OpenSsl::quiet(static fn (): int|false => openssl_verify($message, $signature, $key->key, $algo));

        return $result === 1;
    }
}
`,"src/Hash/BmffHashCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Hash;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Cbor\\CborDecoder;
use Provemark\\C2paVerifier\\Cbor\\CborException;
use Provemark\\C2paVerifier\\Container\\ContainerException;
use Provemark\\C2paVerifier\\Container\\IsobmffManifestStoreExtractor;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * \`c2pa.hash.bmff.v3\` — the hard binding for ISOBMFF (SPEC-027; C2PA 2.4 §11.3).
 *
 * The rule was measured in step 77, not reconstructed: c2pa-rs was instrumented
 * with two \`eprintln!\` lines and run against this repository's own fixtures, and
 * what it prints is
 *
 *     for each top-level box that no exclusion matches, in file order:
 *     hash the box's own offset as a big-endian uint64, then the box's bytes.
 *
 * Recomputing that by hand reproduces both stored digests exactly. The offsets
 * are the point: without them a box whose bytes are untouched could be moved
 * freely, and with them every included box is bound to where it sits as well as
 * to what it holds — which is what makes excluding the C2PA box safe.
 *
 * The exclusions are box paths, not byte ranges. The \`data\` form is how the
 * manifest excludes itself without naming an offset that would move: *the \`uuid\`
 * box whose bytes at offset 8 are the C2PA UUID*. Every other filter c2pa-rs
 * supports — \`length\`, \`version\` and \`flags\` — is refused by name, because no
 * file this project holds exercises them and ignoring one would hash the wrong
 * bytes and call it a match. Nested paths and \`subset\` are read (SPEC-029), and
 * SPEC-038 added the shape c2pa-rs refuses before hashing and its offset-marker
 * rule for boxes a \`subset\` touches.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class BmffHashCheck
{
    public const LABEL = 'c2pa.hash.bmff.v3';

    /**
     * The hard bindings this check answers to (SPEC-029).
     *
     * v2 and v3 share the digest exactly; what differs is the exclusion list, and
     * v2's is the precise one — nested paths and \`subset\` where v3 names whole
     * top-level boxes. Measured in step 86 by instrumenting c2pa-rs.
     */
    public const LABELS = [self::LABEL, 'c2pa.hash.bmff.v2'];

    /** Read in 64 KiB pieces, as SPEC-012 does: a video is not held in memory. */
    public const DEFAULT_CHUNK_SIZE = 64 * 1024;

    /** The filters c2pa-rs honours and no fixture here carries (SPEC-027 AC5). */
    /** \`subset\` was here until SPEC-029 implemented it; the rest await a file that uses them. */
    private const UNSUPPORTED_FILTERS = ['length', 'version', 'flags', 'exact'];

    /**
     * @param  iterable<string, resource>  $fragments  a name and an open stream, one at
     *                                                 a time (SPEC-028). Empty for a whole file, which is every caller but
     *                                                 FragmentedVerifier; a merkle assertion with no fragments offered is
     *                                                 refused rather than passed.
     */
    public function __construct(
        private int $chunkSize = self::DEFAULT_CHUNK_SIZE,
        private IsobmffManifestStoreExtractor $boxes = new IsobmffManifestStoreExtractor,
        private iterable $fragments = [],
    ) {}

    /**
     * @param  resource  $stream  the asset, readable and seekable
     * @return list<ValidationStatus>
     */
    public function check(Manifest $manifest, $stream): array
    {
        $label = self::labelOf($manifest) ?? self::LABEL;
        $url = sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $manifest->label, $label);

        $data = $manifest->assertions[$label]->data ?? null;
        $shape = self::shapeFault($data);
        if ($shape !== null) {
            return [new ValidationStatus(StatusCode::AssertionBmffHashMalformed, $url, $shape)];
        }
        try {
            $assertion = $this->assertionOf($data);
            // the checks before this one have read the stream to its end; the box walk
            // reads forward from wherever it is told to start
            rewind($stream);
            $boxes = $this->boxes->boxTree($stream);
            $included = self::plan($boxes, $assertion['exclusions'], function (int $at, int $length) use ($stream): string {
                if ($length < 1) {
                    return '';
                }
                if (fseek($stream, $at) !== 0) {
                    throw new HashException(sprintf('cannot seek to %d while matching an exclusion', $at));
                }
                $bytes = fread($stream, $length);

                return $bytes === false ? '' : $bytes;
            });
            $included = self::withTail($included, array_values(array_filter($boxes, static fn (array $box): bool => substr_count($box['path'], '/') === 1)), $stream);
        } catch (HashException|ContainerException $e) {
            return [new ValidationStatus(StatusCode::AssertionBmffHashMismatch, $url, $e->getMessage())];
        }

        // SPEC-038: informational, beside whatever the hash says, as c2patool 0.28.0 reports it
        $notes = self::hasAdditionalExclusions($assertion['exclusions'])
            ? [new ValidationStatus(StatusCode::AssertionBmffHashAdditionalExclusionsPresent, $url, 'extra BMFF hash exclusion(s) found: beyond the C2PA uuid box, ftyp and mfra')]
            : [];
        if ($assertion['merkle'] !== null) {
            return [...$notes, ...$this->checkMerkle($url, $stream, $included, $assertion)];
        }

        $expected = $assertion['hash'];
        $computed = $this->digest($stream, $included, $assertion['alg']);
        if ($expected === null || ! hash_equals($expected, $computed)) {
            return [...$notes, new ValidationStatus(
                StatusCode::AssertionBmffHashMismatch,
                $url,
                sprintf(
                    'the %s digest over %d top-level box(es) is %s, the assertion says %s',
                    $assertion['alg'],
                    count($included),
                    substr(bin2hex($computed), 0, 16),
                    $expected === null ? 'nothing' : substr(bin2hex($expected), 0, 16),
                ),
            )];
        }

        return [...$notes, new ValidationStatus(
            StatusCode::AssertionBmffHashMatch,
            $url,
            sprintf('the %s hash of %d top-level box(es) matches, each bound to its own offset', $assertion['alg'], count($included)),
        )];
    }

    /**
     * A fragmented stream: the init segment bound by \`initHash\`, and every fragment
     * bound by a Merkle proof up to the root (SPEC-028).
     *
     * Measured in step 82: \`initHash\` and each leaf are this same digest applied to
     * another file, and the tree puts the largest power of two smaller than the leaf
     * count on the left, with sha256(left ‖ right). Two streams were needed to pin
     * that: the obvious reading of \`location\` is right four times out of five.
     *
     * @param  resource  $stream  the init segment
     * @param  list<array{offset: int, length: int}>  $included
     * @param  array{alg: string, hash: string|null, merkle: mixed, exclusions: list<array<string, mixed>>}  $assertion
     * @return list<ValidationStatus>
     */
    private function checkMerkle(string $url, $stream, array $included, array $assertion): array
    {
        try {
            $map = self::merkleMapOf($assertion['merkle']);
        } catch (HashException $e) {
            return [new ValidationStatus(StatusCode::AssertionBmffHashMismatch, $url, $e->getMessage())];
        }
        $alg = is_string($map['alg'] ?? null) ? $map['alg'] : $assertion['alg'];

        $initHash = $map['initHash'] ?? null;
        if (! $initHash instanceof CborBytes) {
            return [new ValidationStatus(StatusCode::AssertionBmffHashMismatch, $url, self::LABEL.': the merkle map has no initHash')];
        }
        $computed = $this->digest($stream, $included, $alg);
        if (! hash_equals($initHash->bytes, $computed)) {
            return [new ValidationStatus(StatusCode::AssertionBmffHashMismatch, $url, sprintf(
                'the init segment does not match its initHash: computed %s, the assertion says %s',
                substr(bin2hex($computed), 0, 16),
                substr(bin2hex($initHash->bytes), 0, 16),
            ))];
        }

        $hashes = $map['hashes'] ?? null;
        $root = is_array($hashes) ? ($hashes[0] ?? null) : null;
        if (! $root instanceof CborBytes) {
            return [new ValidationStatus(StatusCode::AssertionBmffHashMismatch, $url, self::LABEL.': the merkle map has no root hash')];
        }
        $count = is_int($map['count'] ?? null) ? $map['count'] : 0;

        $seen = [];
        foreach ($this->fragments as $name => $fragment) {
            $fault = $this->checkFragment($name, $fragment, $assertion['exclusions'], $alg, $root->bytes, $count, $seen);
            if ($fault !== null) {
                return [new ValidationStatus(StatusCode::AssertionBmffHashMismatch, $url, $fault)];
            }
        }

        if (count($seen) !== $count) {
            return [new ValidationStatus(StatusCode::AssertionBmffHashMismatch, $url, sprintf(
                'the assertion declares %d fragment(s) and %d were offered; a tree whose leaves are not all present has not been verified',
                $count,
                count($seen),
            ))];
        }

        return [new ValidationStatus(StatusCode::AssertionBmffHashMatch, $url, sprintf(
            'the init segment matches its initHash and all %d fragment(s) reach the merkle root (%s)',
            $count,
            $alg,
        ))];
    }

    /**
     * The ranges to hash, with whatever follows the last top-level box appended (SPEC-027 amendment 4).
     * Fewer than eight bytes make no box header, so the walk never lists them. Measured against the
     * hash c2pa-rs writes: they come last, after every included range, with no offset marker of their
     * own, and they count even when the last box is excluded.
     *
     * @param  list<array{offset: int, length: int, marker?: bool}>  $included
     * @param  list<array{offset: int, length: int, type: string, path?: string}>  $topLevel
     * @param  resource  $stream
     * @return list<array{offset: int, length: int, marker?: bool}>
     *
     * @throws HashException when the stream's size cannot be read
     */
    private static function withTail(array $included, array $topLevel, $stream): array
    {
        $end = 0;
        foreach ($topLevel as $box) {
            $end = max($end, $box['offset'] + $box['length']);
        }
        $stat = fstat($stream);
        if ($stat === false) {
            throw new HashException('cannot read the size of the stream to find the bytes after its last box');
        }
        $tail = $stat['size'] - $end;

        return $tail > 0 ? [...$included, ['offset' => $end, 'length' => $tail, 'marker' => false]] : $included;
    }

    /**
     * One fragment against the root, or a sentence saying why not.
     *
     * @param  resource  $fragment
     * @param  list<array<string, mixed>>  $exclusions
     * @param  array<int, true>  $seen
     */
    private function checkFragment(string $name, $fragment, array $exclusions, string $alg, string $root, int $count, array &$seen): ?string
    {
        try {
            $payload = $this->boxes->merklePayload($fragment);
            if ($payload === null) {
                return sprintf('%s carries no C2PA box with purpose merkle, so it cannot be placed in the tree', $name);
            }
            $proof = (new CborDecoder)->decode($payload);
            rewind($fragment);
            $top = $this->boxes->topLevelBoxes($fragment);
            $leaf = $this->digest($fragment, self::withTail(self::included($top, $exclusions, function (int $at, int $length) use ($fragment): string {
                if ($length < 1 || fseek($fragment, $at) !== 0) {
                    return '';
                }
                $bytes = fread($fragment, $length);

                return $bytes === false ? '' : $bytes;
            }), $top, $fragment), $alg);
        } catch (HashException|CborException|ContainerException $e) {
            return sprintf('%s: %s', $name, $e->getMessage());
        }

        if (! is_array($proof) || ! is_int($proof['location'] ?? null)) {
            return sprintf('%s: its merkle box has no location', $name);
        }
        $location = $proof['location'];
        // SPEC-028 amendment 1: a leaf's place in a tree of $count leaves. path() does not check it, and
        // the merkle box is not in the leaf hash, so a copy with another number would climb as a real leaf
        if ($location < 0 || $location >= $count) {
            return sprintf('%s claims location %d, outside the tree of %d fragment(s) the assertion declares', $name, $location, $count);
        }
        if (array_key_exists($location, $seen)) {
            return sprintf('%s claims location %d, which another fragment already filled', $name, $location);
        }
        $seen[$location] = true;

        $siblings = $proof['hashes'] ?? [];
        if (! is_array($siblings)) {
            return sprintf('%s: its merkle box has no hashes', $name);
        }

        $climbed = $leaf;
        foreach (self::path($location, $count) as $depth => $left) {
            $sibling = $siblings[$depth] ?? null;
            if (! $sibling instanceof CborBytes) {
                return sprintf('%s: its proof is %d hash(es) long, the tree needs more', $name, count($siblings));
            }
            $climbed = $left
                ? hash($alg, $sibling->bytes.$climbed, true)
                : hash($alg, $climbed.$sibling->bytes, true);
        }

        return hash_equals($root, $climbed)
            ? null
            : sprintf('%s does not reach the merkle root: climbed to %s from location %d', $name, substr(bin2hex($climbed), 0, 16), $location);
    }

    /**
     * Exactly one merkle map, or a refusal by name.
     *
     * The field is a list because a stream can carry several renditions. What
     * \`uniqueId\` and \`localId\` select among them is unmeasured (step 82), and a
     * guess would pick a tree and call the result a match.
     *
     * @return array<string, mixed>
     *
     * @throws HashException
     */
    public static function merkleMapOf(mixed $merkle): array
    {
        if (! is_array($merkle) || ! array_is_list($merkle) || $merkle === []) {
            throw new HashException(self::LABEL.': merkle is not a non-empty list of maps');
        }
        if (count($merkle) > 1) {
            throw new HashException(sprintf(
                '%s carries %d merkle maps; this verifier reads one, and what uniqueId and localId select among several is unmeasured',
                self::LABEL,
                count($merkle),
            ));
        }
        $map = $merkle[0];
        if (! is_array($map) || array_is_list($map)) {
            throw new HashException(self::LABEL.': the merkle map is not a CBOR map');
        }

        /** @var array<string, mixed> */
        return $map;
    }

    /**
     * Which side the sibling is on at each level, from leaf to root.
     *
     * The tree is unbalanced in one specific way (measured, step 82): the left
     * subtree holds the largest power of two smaller than the leaf count, the right
     * holds the rest. Reading the bits of \`location\` from the least significant end
     * is right four times out of five and wrong on the lone leaf one level up.
     *
     * @return list<bool> true where the sibling is on the left
     */
    public static function path(int $location, int $count): array
    {
        $low = 0;
        $high = $count;
        $out = [];
        while ($high - $low > 1) {
            $left = 1;
            while ($left * 2 < $high - $low) {
                $left *= 2;
            }
            $middle = $low + $left;
            if ($location < $middle) {
                $out[] = false;
                $high = $middle;
            } else {
                $out[] = true;
                $low = $middle;
            }
        }

        return array_reverse($out);
    }

    /**
     * SPEC-038: the shape c2pa-rs refuses before it hashes, as \`assertion.bmffHash.malformed\` —
     * \`exclusions\` present and not empty, and every \`subset\` list ordered by offset without overlap
     * (C2PA 2.4: *"shall be ordered by increasing offset value and shall not overlap"*). A length of 0
     * runs to the end of the box, so only the last entry may carry it (open question 3). Anything
     * else about the assertion is assertionOf()'s to judge.
     */
    public static function shapeFault(mixed $data): ?string
    {
        if (! is_array($data) || array_is_list($data)) {
            return null;
        }
        $exclusions = $data['exclusions'] ?? null;
        if ($exclusions === null) {
            return self::LABEL.': the assertion has no exclusions; a BMFF hash must exclude at least the C2PA box';
        }
        if ($exclusions === []) {
            return self::LABEL.': the exclusions list is empty; a BMFF hash must exclude at least the C2PA box';
        }
        foreach (is_array($exclusions) ? $exclusions : [] as $i => $exclusion) {
            $subsets = is_array($exclusion) ? ($exclusion['subset'] ?? null) : null;
            if (! is_array($subsets) || ! array_is_list($subsets)) {
                continue;
            }
            $end = null;
            foreach ($subsets as $k => $subset) {
                $offset = is_array($subset) ? ($subset['offset'] ?? null) : null;
                $length = is_array($subset) ? ($subset['length'] ?? null) : null;
                if (! is_int($offset) || ! is_int($length) || $offset < 0 || $length < 0) {
                    continue;   // not a range at all: ranges() refuses it
                }
                if ($end !== null && $offset < $end) {
                    return sprintf('%s: exclusion %s: subset %d starts at %d, before the previous one ends at %d; subsets must be ordered by offset and must not overlap', self::LABEL, (string) $i, $k, $offset, $end);
                }
                $end = $length === 0 ? PHP_INT_MAX : $offset + $length;
            }
        }

        return null;
    }

    /**
     * SPEC-038: whether an exclusion goes beyond the ones every writer needs — the C2PA \`uuid\` box
     * (one data map, the C2PA UUID at offset 8), \`ftyp\` and \`mfra\` — as c2pa-rs's \`verify_internal\`
     * decides it. \`c2pa-rs\`'s own writer adds \`/free\` and \`/skip\`, so nearly every file carries one.
     *
     * @param  list<array<string, mixed>>  $exclusions
     */
    public static function hasAdditionalExclusions(array $exclusions): bool
    {
        foreach ($exclusions as $exclusion) {
            $xpath = $exclusion['xpath'] ?? null;
            if ($xpath === '/ftyp' || $xpath === '/mfra') {
                continue;
            }
            $data = $exclusion['data'] ?? null;
            $map = is_array($data) && count($data) === 1 ? ($data[0] ?? null) : null;
            $value = is_array($map) ? ($map['value'] ?? null) : null;
            if ($xpath === '/uuid' && is_array($map) && ($map['offset'] ?? null) === 8 && $value instanceof CborBytes && $value->bytes === IsobmffManifestStoreExtractor::C2PA_UUID) {
                continue;
            }

            return true;
        }

        return false;
    }

    /**
     * The assertion, read whole before a byte of the asset is touched.
     *
     * @return array{alg: string, hash: string|null, merkle: mixed, exclusions: list<array<string, mixed>>}
     *
     * @throws HashException
     */
    public function assertionOf(mixed $data): array
    {
        if (! is_array($data) || array_is_list($data)) {
            throw new HashException(self::LABEL.' is not a CBOR map');
        }
        $alg = $data['alg'] ?? 'sha256';
        if (! is_string($alg) || ! in_array($alg, ['sha256', 'sha384', 'sha512'], true)) {
            throw new HashException(sprintf('%s: hash algorithm %s is not one this verifier implements', self::LABEL, is_string($alg) ? $alg : gettype($alg)));
        }

        $merkle = $data['merkle'] ?? null;
        $hash = $data['hash'] ?? null;
        if ($merkle === null && ! $hash instanceof CborBytes) {
            throw new HashException(self::LABEL.' has no hash and no merkle, or a hash that is not a byte string');
        }
        if ($merkle !== null && $hash instanceof CborBytes) {
            throw new HashException(self::LABEL.' carries both a hash and a merkle list; a binding is one or the other');
        }

        $exclusions = $data['exclusions'] ?? [];
        if (! is_array($exclusions) || ! array_is_list($exclusions)) {
            throw new HashException(self::LABEL.': exclusions is not a list');
        }
        $checked = [];
        foreach ($exclusions as $exclusion) {
            if (! is_array($exclusion) || array_is_list($exclusion)) {
                throw new HashException(self::LABEL.': an exclusion is not a map');
            }
            /** @var array<string, mixed> $exclusion */
            $checked[] = $exclusion;
        }

        return [
            'alg' => $alg,
            'hash' => $hash instanceof CborBytes ? $hash->bytes : null,
            'merkle' => $merkle,
            'exclusions' => $checked,
        ];
    }

    /** Which BMFF binding this manifest carries, newest first, or null for none. */
    public static function labelOf(Manifest $manifest): ?string
    {
        foreach (self::LABELS as $label) {
            if (array_key_exists($label, $manifest->assertions)) {
                return $label;
            }
        }

        return null;
    }

    /**
     * The ranges the digest covers, in file order, each saying whether an offset
     * marker precedes it (SPEC-029).
     *
     * A marker belongs to a top-level box, not to a range: a nested exclusion
     * punches a hole inside a box and the pieces on either side share the one
     * marker. Measured, step 86 — \`moov\` comes back as three ranges and one
     * marker, because two \`stco\` boxes are excluded from their offset 16 onward.
     *
     * @param  list<array{offset: int, length: int, type: string, path: string}>  $tree  as the extractor gives it
     * @param  list<array<string, mixed>>  $exclusions
     * @param  callable(int, int): string  $readAt
     * @return list<array{offset: int, length: int, marker: bool}>
     *
     * @throws HashException on a filter this verifier does not implement
     */
    public static function plan(array $tree, array $exclusions, callable $readAt): array
    {
        $excluded = [];
        foreach ($tree as $box) {
            foreach ($exclusions as $exclusion) {
                if (! self::matches($box, $exclusion, $readAt)) {
                    continue;
                }
                foreach (self::ranges($box, $exclusion) as $range) {
                    $excluded[] = $range;
                }
            }
        }

        // SPEC-038: markers as c2pa-rs places them. Every top-level box keeps one, holding its own
        // start offset, unless an exclusion without \`subset\` takes the box out — a box with a subset
        // is not excluded "in its entirety", even when the subsets cover every byte. The marker comes
        // first; where the box's head is included it rides on the first range, as SPEC-029 had it.
        // Where the head is not, it stands alone, and c2pa-rs keeps it only strictly between the
        // first and the last included byte of the file (hash_utils.rs, hash_stream_by_alg).
        $boxes = [];
        foreach ($tree as $box) {
            if ($box['path'] !== '/'.$box['type']) {
                continue;   // markers and ranges are per top-level box
            }
            $whole = false;
            foreach ($exclusions as $exclusion) {
                $whole = $whole || (! array_key_exists('subset', $exclusion) && self::matches($box, $exclusion, $readAt));
            }
            $boxes[] = [$box, $whole, self::remaining($box, $excluded)];
        }
        $first = null;
        $last = null;
        foreach ($boxes as [, , $spans]) {
            foreach ($spans as $span) {
                $first = $first === null ? $span['offset'] : min($first, $span['offset']);
                $last = $last === null ? $span['offset'] + $span['length'] - 1 : max($last, $span['offset'] + $span['length'] - 1);
            }
        }

        $plan = [];
        foreach ($boxes as [$box, $whole, $spans]) {
            if ($whole) {
                continue;
            }
            $headIncluded = $spans !== [] && $spans[0]['offset'] === $box['offset'];
            if (! $headIncluded && $first !== null && $last !== null && $box['offset'] > $first && $box['offset'] < $last) {
                $plan[] = ['offset' => $box['offset'], 'length' => 0, 'marker' => true];
            }
            foreach ($spans as $k => $span) {
                $plan[] = ['offset' => $span['offset'], 'length' => $span['length'], 'marker' => $headIncluded && $k === 0];
            }
        }

        return $plan;
    }

    /**
     * What an exclusion takes out of a box: the whole of it, or the subsets it names.
     *
     * \`length: 0\` means to the end of the box, and an explicit length is clipped to
     * it — measured on this file's two 40-byte \`stco\` boxes, excluded from offset
     * 16 (step 86).
     *
     * @param  array{offset: int, length: int, type: string, path: string}  $box
     * @param  array<string, mixed>  $exclusion
     * @return list<array{offset: int, length: int}>
     */
    private static function ranges(array $box, array $exclusion): array
    {
        $subsets = $exclusion['subset'] ?? null;
        if ($subsets === null) {
            return [['offset' => $box['offset'], 'length' => $box['length']]];
        }
        if (! is_array($subsets) || ! array_is_list($subsets)) {
            throw new HashException(self::LABEL.': an exclusion subset is not a list');
        }

        $out = [];
        foreach ($subsets as $subset) {
            if (! is_array($subset) || ! is_int($subset['offset'] ?? null) || ! is_int($subset['length'] ?? null)) {
                throw new HashException(self::LABEL.': a subset has no integer offset and length');
            }
            if ($subset['offset'] > $box['length']) {
                continue;
            }
            $length = $subset['length'] === 0
                ? $box['length'] - $subset['offset']
                : min($subset['length'], $box['length'] - $subset['offset']);
            $out[] = ['offset' => $box['offset'] + $subset['offset'], 'length' => $length];
        }

        return $out;
    }

    /**
     * A box minus everything excluded inside it, in file order.
     *
     * @param  array{offset: int, length: int, type: string, path: string}  $box
     * @param  list<array{offset: int, length: int}>  $excluded
     * @return list<array{offset: int, length: int}>
     */
    private static function remaining(array $box, array $excluded): array
    {
        $inside = [];
        foreach ($excluded as $range) {
            $start = max($range['offset'], $box['offset']);
            $stop = min($range['offset'] + $range['length'], $box['offset'] + $box['length']);
            if ($stop > $start) {
                $inside[] = ['offset' => $start, 'length' => $stop - $start];
            }
        }
        usort($inside, static fn (array $a, array $b): int => $a['offset'] <=> $b['offset']);

        $out = [];
        $at = $box['offset'];
        $end = $box['offset'] + $box['length'];
        foreach ($inside as $range) {
            if ($range['offset'] > $at) {
                $out[] = ['offset' => $at, 'length' => $range['offset'] - $at];
            }
            $at = max($at, $range['offset'] + $range['length']);
        }
        if ($at < $end) {
            $out[] = ['offset' => $at, 'length' => $end - $at];
        }

        return $out;
    }

    /**
     * The top-level boxes no exclusion matches, in file order.
     *
     * @param  list<array{offset: int, length: int, type: string, path?: string}>  $boxes
     * @param  list<array<string, mixed>>  $exclusions
     * @param  callable(int, int): string  $readAt  the asset's bytes at an offset, for the data filter
     * @return list<array{offset: int, length: int}>
     *
     * @throws HashException on a filter this verifier does not implement
     */
    public static function included(array $boxes, array $exclusions, callable $readAt): array
    {
        $included = [];
        foreach ($boxes as $box) {
            $excluded = false;
            foreach ($exclusions as $exclusion) {
                if (self::matches($box, $exclusion, $readAt)) {
                    $excluded = true;
                    break;
                }
            }
            if (! $excluded) {
                $included[] = ['offset' => $box['offset'], 'length' => $box['length']];
            }
        }

        return $included;
    }

    /**
     * @param  array{offset: int, length: int, type: string, path?: string}  $box
     * @param  array<string, mixed>  $exclusion
     * @param  callable(int, int): string  $readAt
     *
     * @throws HashException
     */
    private static function matches(array $box, array $exclusion, callable $readAt): bool
    {
        $xpath = $exclusion['xpath'] ?? null;
        if (! is_string($xpath) || $xpath === '' || $xpath[0] !== '/') {
            throw new HashException(self::LABEL.': an exclusion has no usable xpath');
        }

        // The path first, and a refusal only after it resolves. video1.mp4 carries
        // two \`flags\` exclusions on /moof paths and has no moof at all; refusing
        // while reading the list would make a file fail on exclusions that touch
        // nothing (SPEC-029 AC6).
        // SPEC-027's callers hand over top-level boxes without a path; a box that
        // has none is at the top level and its path is its type.
        $path = $box['path'] ?? '/'.$box['type'];
        if ($path !== $xpath) {
            return false;
        }

        foreach (self::UNSUPPORTED_FILTERS as $filter) {
            if (($exclusion[$filter] ?? null) !== null) {
                throw new HashException(sprintf(
                    '%s: the exclusion %s carries a %s filter, which this verifier does not implement; ignoring it would hash the wrong bytes',
                    self::LABEL,
                    $xpath,
                    $filter,
                ));
            }
        }

        // The data filter: this is how the manifest excludes itself without naming an
        // offset that would move — the uuid box whose bytes at offset 8 are the C2PA
        // UUID. video1.mp4 proves it does real work: it holds a second uuid box that
        // is hashed (SPEC-029 AC5).
        $data = $exclusion['data'] ?? null;
        if ($data === null) {
            return true;
        }
        if (! is_array($data) || ! array_is_list($data)) {
            throw new HashException(self::LABEL.': an exclusion data filter is not a list');
        }
        foreach ($data as $match) {
            if (! is_array($match) || ! is_int($match['offset'] ?? null)) {
                throw new HashException(self::LABEL.': an exclusion data filter has no offset');
            }
            $value = $match['value'] ?? null;
            $wanted = $value instanceof CborBytes ? $value->bytes : $value;
            if (! is_string($wanted)) {
                throw new HashException(self::LABEL.': an exclusion data filter has no byte-string value');
            }
            if ($readAt($box['offset'] + $match['offset'], strlen($wanted)) !== $wanted) {
                return false;
            }
        }

        return true;
    }

    /**
     * @param  resource  $stream
     * @param  list<array{offset: int, length: int, marker?: bool}>  $included
     */
    private function digest($stream, array $included, string $alg): string
    {
        $context = hash_init($alg);
        foreach ($included as $range) {
            // the offset first, as a big-endian uint64: this is what binds position.
            // One marker per top-level box, not per range — a nested exclusion splits
            // a box and the pieces share its marker (SPEC-029).
            if ($range['marker'] ?? true) {
                hash_update($context, pack('J', $range['offset']));
            }
            if (fseek($stream, $range['offset']) !== 0) {
                return '';
            }
            $left = $range['length'];
            while ($left > 0) {
                $want = min($left, $this->chunkSize);
                if ($want < 1) {
                    return '';
                }
                $chunk = fread($stream, $want);
                if ($chunk === false || $chunk === '') {
                    return '';
                }
                hash_update($context, $chunk);
                $left -= strlen($chunk);
            }
        }

        return hash_final($context, true);
    }
}
`,"src/Hash/DataHashCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Hash;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Container\\ContainerException;
use Provemark\\C2paVerifier\\Container\\ManifestStoreBytes;
use Provemark\\C2paVerifier\\Container\\StreamReader;
use Provemark\\C2paVerifier\\Jumbf\\Superbox;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The data-hash check as a list of statuses (SPEC-012; C2PA 2.4 §15.12.1,
 * §18.5): exactly one c2pa.hash.data, its shape read fail-closed, its
 * exclusions sorted and checked, every piece of the manifest store (what
 * the container layer measured, ManifestStoreBytes::$ranges) required to
 * lie inside an exclusion, then the asset hashed in chunks
 * with the exclusions skipped — never the whole file in memory — and
 * compared. The first check that reads the asset rather than the store.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class DataHashCheck
{
    public const DEFAULT_MAX_EXCLUSIONS = 1024;

    public const DEFAULT_CHUNK_SIZE = 64 * 1024;

    public const LABEL = 'c2pa.hash.data';

    /** The algorithms C2PA 2.4 §13.1 allows, as PHP's hash() knows them, with their digest lengths. */
    private const ALGORITHMS = ['sha256' => 32, 'sha384' => 48, 'sha512' => 64];

    /** Hard-binding labels this verifier knows of but does not implement (M8 and later). */
    private const OTHER_HARD_BINDINGS = ['c2pa.hash.bmff', 'c2pa.hash.boxes', 'c2pa.hash.collection.data'];

    public function __construct(
        private int $maxExclusions = self::DEFAULT_MAX_EXCLUSIONS,
        private int $chunkSize = self::DEFAULT_CHUNK_SIZE,
    ) {}

    /**
     * @param  resource  $stream  the asset, readable and seekable
     * @return list<ValidationStatus>
     */
    public function check(Manifest $manifest, $stream, ManifestStoreBytes $store, bool $adjustForUpdate = false): array
    {
        $manifestUrl = sprintf('self#jumbf=/c2pa/%s', $manifest->label);

        $bindings = [];
        foreach ($manifest->assertionStore->superboxes() as $box) {
            $label = $box->description->label;
            if ($label === self::LABEL) {
                $bindings[] = $box;
            } elseif (in_array($label, BmffHashCheck::LABELS, true)) {
                // SPEC-027/029: these two are verified, by BmffHashCheck, and the Verifier
                // routes a manifest that carries one there rather than here. Reaching this
                // line means someone called this check directly with a BMFF binding, and
                // saying "not supported" would be untrue since M8.
                return [new ValidationStatus(StatusCode::GeneralError, sprintf('%s/c2pa.assertions/%s', $manifestUrl, $label), sprintf('the hard binding %s is verified by BmffHashCheck, not here; this check answers for %s alone', $label, self::LABEL))];
            } elseif (self::isOtherHardBinding($label)) {
                return [new ValidationStatus(StatusCode::GeneralError, sprintf('%s/c2pa.assertions/%s', $manifestUrl, $label), sprintf('the hard binding %s is not supported yet: BMFF, box and collection hashes are M8 and later; only %s is verified today', $label, self::LABEL))];
            }
        }
        if ($bindings === []) {
            return [new ValidationStatus(StatusCode::ClaimHardBindingsMissing, $manifestUrl, sprintf('the manifest has no hard binding: no %s assertion in its store (C2PA 2.4 §15.10.1.2)', self::LABEL))];
        }
        if (count($bindings) > 1) {
            return [new ValidationStatus(StatusCode::AssertionMultipleHardBindings, $manifestUrl, sprintf('the manifest has %d %s assertions (at offsets %s); a standard manifest has exactly one (C2PA 2.4 §15.10.1.2)', count($bindings), self::LABEL, implode(', ', array_map(static fn (Superbox $b): int => $b->offset, $bindings))))];
        }

        $url = sprintf('%s/c2pa.assertions/%s', $manifestUrl, self::LABEL);
        $data = $manifest->assertions[self::LABEL]->data;
        if (! is_array($data) || array_is_list($data)) {
            return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s is not a CBOR map', self::LABEL))];
        }

        // ---- shape (§18.5), fail-closed ----
        if (array_key_exists('alg', $data) && ! is_string($data['alg'])) {
            return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: alg is %s, not text', self::LABEL, get_debug_type($data['alg'])))];
        }
        $exclusions = [];
        if (array_key_exists('exclusions', $data)) {
            if (! is_array($data['exclusions']) || ! array_is_list($data['exclusions'])) {
                return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: exclusions is %s, not a list', self::LABEL, is_array($data['exclusions']) ? 'a map' : get_debug_type($data['exclusions'])))];
            }
            if (count($data['exclusions']) > $this->maxExclusions) {
                return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: %d exclusions exceed the limit of %d', self::LABEL, count($data['exclusions']), $this->maxExclusions))];
            }
            foreach ($data['exclusions'] as $i => $range) {
                if (! is_array($range) || array_is_list($range)) {
                    return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: exclusions[%d] is not a map', self::LABEL, $i))];
                }
                foreach (['start', 'length'] as $field) {
                    if (! array_key_exists($field, $range)) {
                        return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: exclusions[%d] has no %s', self::LABEL, $i, $field))];
                    }
                }
                $start = $range['start'];
                $length = $range['length'];
                if (! is_int($start)) {
                    return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: exclusions[%d].start is %s, not an integer', self::LABEL, $i, is_string($start) ? 'text' : get_debug_type($start)))];
                }
                if (! is_int($length)) {
                    return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: exclusions[%d].length is %s, not an integer', self::LABEL, $i, is_string($length) ? 'text' : get_debug_type($length)))];
                }
                if ($start < 0 || $length < 0) {
                    return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: exclusions[%d] is [%d, %d] (start, length), negative', self::LABEL, $i, $start, $length))];
                }
                $exclusions[] = ['start' => $start, 'length' => $length];
            }
        }
        if (! array_key_exists('hash', $data)) {
            return [new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, sprintf('%s carries no hash; nothing to compare the asset with (C2PA 2.4 §15.12.1)', self::LABEL))];
        }
        if (! $data['hash'] instanceof CborBytes) {
            return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('%s: hash is %s, not a byte string', self::LABEL, is_string($data['hash']) ? 'text' : get_debug_type($data['hash'])))];
        }
        $expected = $data['hash']->bytes;

        // ---- algorithm (§15.4.2, §13.1) ----
        $alg = $data['alg'] ?? $manifest->claim->alg;
        if ($alg === null) {
            return [new ValidationStatus(StatusCode::AlgorithmUnsupported, $url, sprintf('no algorithm is specified for %s: neither the assertion nor the claim carries an alg (C2PA 2.4 §15.4.2)', self::LABEL))];
        }
        if (! array_key_exists($alg, self::ALGORITHMS)) {
            return [new ValidationStatus(StatusCode::AlgorithmUnsupported, $url, sprintf('the hash algorithm %s is not one of sha256, sha384, sha512 (C2PA 2.4 §13.1)', $alg))];
        }
        if (strlen($expected) !== self::ALGORITHMS[$alg]) {
            return [new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, sprintf('%s carries a %d-byte hash, but %s produces %d bytes', self::LABEL, strlen($expected), $alg, self::ALGORITHMS[$alg]))];
        }

        // ---- the store grew under an update manifest (§15.12.1.1) ----
        // The binding was written before the update manifest was appended, so the exclusion that starts
        // where the store starts is short by exactly what was added. The specification says to treat it
        // as the store's *current* length and to move every later exclusion by the difference. The
        // adjustment is never trusted on its own: the cover rule below still has to hold afterwards, so
        // it can widen an exclusion to the store and never past it.
        if ($adjustForUpdate && $store->ranges !== []) {
            $first = $store->ranges[0];
            $adjust = 0;
            foreach ($exclusions as $i => $range) {
                if ($range['start'] === $first['start']) {
                    $adjust = $first['length'] - $range['length'];
                    $exclusions[$i] = $first;
                }
            }
            if ($adjust !== 0) {
                foreach ($exclusions as $i => $range) {
                    if ($range['start'] > $first['start']) {
                        $exclusions[$i] = ['start' => $range['start'] + $adjust, 'length' => $range['length']];
                    }
                }
            }
        }

        // ---- exclusions in order (§15.12.1) ----
        if (! is_resource($stream) || ! rewind($stream)) {
            return [new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, 'the asset stream cannot be rewound; the data hash needs a seekable stream')];
        }
        $reader = new StreamReader($stream, 'asset');
        $end = $reader->end();
        usort($exclusions, static fn (array $a, array $b): int => $a['start'] <=> $b['start']);
        $previous = null;
        foreach ($exclusions as $range) {
            if ($previous !== null && $range['start'] < $previous['start'] + $previous['length']) {
                return [new ValidationStatus(StatusCode::AssertionDataHashMalformed, $url, sprintf('exclusions overlap: [%d, %d] and [%d, %d] (start, length)', $previous['start'], $previous['length'], $range['start'], $range['length']))];
            }
            if ($end < $range['start'] + $range['length']) {
                return [new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, sprintf('exclusion [%d, %d] ends at %d, past the end of the file at %d', $range['start'], $range['length'], $range['start'] + $range['length'], $end))];
            }
            $previous = $range;
        }

        // ---- every piece of the store must lie inside an exclusion (§15.12.1; SPEC-012 amendment 5: cover, not equal) ----
        $covering = [];
        foreach ($store->ranges as $piece) {
            $pieceEnd = $piece['start'] + $piece['length'];
            $covered = null;
            foreach ($exclusions as $i => $range) {
                if ($range['start'] <= $piece['start'] && $pieceEnd <= $range['start'] + $range['length']) {
                    $covered = $i;
                    break;
                }
            }
            if ($covered === null) {
                $nearest = null;
                foreach ($exclusions as $range) {
                    if ($nearest === null || abs($range['start'] - $piece['start']) < abs($nearest['start'] - $piece['start'])) {
                        $nearest = $range;
                    }
                }

                return [new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, sprintf('no exclusion covers the manifest store%s at [%d, %d] of the file (start, length; ends at %d); %s', count($store->ranges) > 1 ? sprintf('\\'s piece %s', implode(', ', array_map(static fn (array $r): string => sprintf('[%d, %d]', $r['start'], $r['length']), $store->ranges))) : '', $piece['start'], $piece['length'], $pieceEnd, $nearest === null ? 'the assertion has no exclusions' : sprintf('the nearest exclusion is [%d, %d], ending at %d', $nearest['start'], $nearest['length'], $nearest['start'] + $nearest['length'])))];
            }
            $covering[$covered][] = $piece;
        }

        // ---- an exclusion holding part of the store holds nothing else (C2PA 2.4 §15.12.1.1, and §15.12.1.2 for JPEG; SPEC-012 amendment 7) ----
        // In JPEG, PNG and WebP the padding lives inside the store, so the range must be exactly the pieces it holds.
        foreach ($covering as $i => $pieces) {
            $range = $exclusions[$i];
            $held = array_sum(array_column($pieces, 'length'));
            if ($range['length'] !== $held) {
                $last = $pieces[count($pieces) - 1];
                $before = $pieces[0]['start'] - $range['start'];
                $after = $range['start'] + $range['length'] - ($last['start'] + $last['length']);

                return [new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, sprintf('the exclusion [%d, %d] (start, length) holds the manifest store and %d bytes that are not: %d before it, %d after it, %d between its pieces; the range holding the store may hold only the store and padding (C2PA 2.4 §15.12.1.1)', $range['start'], $range['length'], $range['length'] - $held, $before, $after, $range['length'] - $held - $before - $after))];
            }
        }
        $others = [];
        foreach ($exclusions as $i => $range) {
            if (! isset($covering[$i])) {
                $others[] = $range;
            }
        }

        // ---- the hash, streamed ----
        try {
            $actual = $this->hashExcept($reader, $alg, $exclusions, $end);
        } catch (ContainerException $e) {
            return [new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, sprintf('the asset could not be read: %s', $e->getMessage()))];
        }
        $statuses = [hash_equals($expected, $actual)
            ? new ValidationStatus(StatusCode::AssertionDataHashMatch, $url, sprintf('data hash valid: %s over %d of %d bytes, %d exclusion(s)', $alg, $end - array_sum(array_column($exclusions, 'length')), $end, count($exclusions)))
            : new ValidationStatus(StatusCode::AssertionDataHashMismatch, $url, sprintf('data hash does not match: %s over %d of %d bytes gives %s, the assertion carries %s', $alg, $end - array_sum(array_column($exclusions, 'length')), $end, bin2hex($actual), bin2hex($expected))),
        ];
        if ($others !== []) {
            $statuses[] = new ValidationStatus(StatusCode::AssertionDataHashAdditionalExclusionsPresent, $url, sprintf('%d exclusion(s) beyond the manifest store, honoured as signed: %s', count($others), implode(', ', array_map(static fn (array $r): string => sprintf('[%d, %d]', $r['start'], $r['length']), $others))));
        }

        return $statuses;
    }

    /**
     * The hash of the file with the (sorted, non-overlapping, in-bounds)
     * ranges skipped, read in chunks; never the whole file at once.
     *
     * @param  list<array{start: int, length: int}>  $exclusions
     */
    private function hashExcept(StreamReader $reader, string $alg, array $exclusions, int $end): string
    {
        $context = hash_init($alg);
        $position = 0;
        foreach ([...$exclusions, ['start' => $end, 'length' => 0]] as $range) {
            $remaining = $range['start'] - $position;
            while ($remaining > 0) {
                $chunk = $reader->readExactly(min($remaining, $this->chunkSize), $position, 'asset data');
                hash_update($context, $chunk);
                $remaining -= strlen($chunk);
                $position += strlen($chunk);
            }
            $reader->skip($range['length'], $range['start']);
            $position = $range['start'] + $range['length'];
        }

        return hash_final($context, true);
    }

    private static function isOtherHardBinding(string $label): bool
    {
        foreach (self::OTHER_HARD_BINDINGS as $prefix) {
            if ($label === $prefix || str_starts_with($label, $prefix.'.')) {
                return true;
            }
        }

        return false;
    }
}
`,"src/Hash/HashException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Hash;

use RuntimeException;

/**
 * A hash assertion this verifier cannot read (SPEC-027).
 *
 * Every other layer has an exception of its own — Asn1, Cbor, Container, Cose,
 * Jumbf, Manifest, Timestamp and Trust — and SPEC-013 turns each into a status
 * before the public boundary. Hash had none, because its checks answer with
 * statuses rather than throwing: a hash that does not match is a verdict, not a
 * fault. Reading an assertion whose filters this verifier does not implement is
 * the other thing, and it must never be silently skipped: ignoring a filter
 * would compute a digest over the wrong bytes and call the result a match.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class HashException extends RuntimeException {}
`,"src/Hash/HashedUriCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Hash;

use Provemark\\C2paVerifier\\Jumbf\\ContentBox;
use Provemark\\C2paVerifier\\Jumbf\\Superbox;
use Provemark\\C2paVerifier\\Jumbf\\UnknownBox;
use Provemark\\C2paVerifier\\Manifest\\HashedUri;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Manifest\\ManifestException;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The hashed-URI check as a list of statuses (SPEC-011; C2PA 2.4 §15.10.3):
 * every assertion the claim names is resolved, its box payload hashed with
 * the entry's algorithm — else the claim's (§15.4.2) — and compared with
 * the hash the claim carries. Then every box in the assertion store that
 * no entry resolved to is reported undeclared, unknown boxes included.
 * Then the redactions (SPEC-035): an entry the store declares redacted
 * whose box is gone is skipped, a redacted box still holding content is
 * \`assertion.notRedacted\`, and the claim's own list is read for
 * self-redaction, redacted actions and a redacted hard binding (SPEC-036).
 * Every entry is reported; nothing
 * stops at the first mismatch.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class HashedUriCheck
{
    /** The algorithms C2PA 2.4 §13.1 allows, as PHP's hash() knows them, with their digest lengths. */
    private const ALGORITHMS = ['sha256' => 32, 'sha384' => 48, 'sha512' => 64];

    /** The hard-binding labels c2pa-rs will not see redacted (its HASH_LABELS). */
    private const HARD_BINDINGS = ['c2pa.hash.data', 'c2pa.hash.boxes', 'c2pa.hash.bmff', 'c2pa.hash.collection.data'];

    /** @return list<ValidationStatus> */
    public function check(Manifest $manifest): array
    {
        $statuses = [];
        $resolved = [];
        foreach ([...$manifest->claim->createdAssertions, ...$manifest->claim->gatheredAssertions] as $entry) {
            if ($manifest->isRedacted($entry->url) && ! $this->resolves($manifest, $entry->url)) {
                continue;   // redacted and removed: nothing left to hash (SPEC-035; §15.11.3.3.1)
            }
            [$status, $box] = $this->entry($manifest, $entry);
            $statuses[] = $status;
            if ($box !== null) {
                $resolved[] = $box;
            }
        }

        $storeUrl = sprintf('self#jumbf=/c2pa/%s/c2pa.assertions', $manifest->label);
        foreach ($manifest->assertionStore->children as $child) {
            if ($child instanceof Superbox && ! in_array($child, $resolved, true)) {
                $statuses[] = new ValidationStatus(
                    StatusCode::AssertionUndeclared,
                    sprintf('%s/%s', $storeUrl, $child->description->label),
                    sprintf('the assertion store holds a box %s at offset %d (%d bytes) that no entry of the claim names', $child->description->label, $child->offset, $child->length),
                );
            } elseif ($child instanceof UnknownBox) {
                $statuses[] = new ValidationStatus(
                    StatusCode::AssertionUndeclared,
                    $storeUrl,
                    sprintf('the assertion store holds an unknown box (type %s, UUID %s, label %s) at offset %d (%d bytes) that no entry of the claim names', $child->type, $child->uuid ?? '-', $child->label ?? '-', $child->offset, $child->length),
                );
            }
        }

        return [...$statuses, ...$this->notRedacted($manifest), ...$this->redactions($manifest)];
    }

    /**
     * A box the store declares redacted that is still here must hold nothing but zero bytes
     * (C2PA 2.4 §15.11.3.3.1; c2pa-rs \`verify_store\`): otherwise its content would stand unverified.
     *
     * @return list<ValidationStatus>
     */
    private function notRedacted(Manifest $manifest): array
    {
        $statuses = [];
        foreach ($manifest->redacted as $uri) {
            if (! $this->resolves($manifest, $uri)) {
                continue;   // removed: a valid form of redaction
            }
            $content = implode('', array_map(static fn (ContentBox $box): string => $box->data, $manifest->resolve($uri)->contentBoxes()));
            if (trim($content, "\\0") !== '') {
                $statuses[] = new ValidationStatus(StatusCode::AssertionNotRedacted, $uri, sprintf('redacted assertion data must be zeros or empty: %s still holds %d bytes of content', $uri, strlen($content)));
            }
        }

        return $statuses;
    }

    /**
     * The claim's own \`redacted_assertions\`, entry by entry, as c2pa-rs reads them: the entry verbatim
     * as the url, the claim's own label inside it a self-redaction, \`c2pa.actions\` inside it a
     * redacted actions assertion (§15.10.3.1), a hard-binding label inside it a redacted hard binding
     * (§6.8; SPEC-036, any claim, as c2pa-rs). An entry that is not a string is refused.
     *
     * @return list<ValidationStatus>
     */
    private function redactions(Manifest $manifest): array
    {
        $entries = $manifest->claim->other['redacted_assertions'] ?? [];
        $claimUrl = sprintf('self#jumbf=/c2pa/%s/%s', $manifest->label, $manifest->claim->version === 2 ? 'c2pa.claim.v2' : 'c2pa.claim');
        if (! is_array($entries) || ! array_is_list($entries)) {
            return [new ValidationStatus(StatusCode::GeneralError, $claimUrl, 'the claim\\'s redacted_assertions is not a list; refused rather than read')];
        }
        $statuses = [];
        foreach ($entries as $entry) {
            if (! is_string($entry)) {
                $statuses[] = new ValidationStatus(StatusCode::GeneralError, $claimUrl, 'an entry of the claim\\'s redacted_assertions is not a URI; refused rather than read');

                continue;
            }
            if (str_contains($entry, $manifest->label)) {
                $statuses[] = new ValidationStatus(StatusCode::AssertionSelfRedacted, $entry, 'claim contains self redaction');
            }
            if (str_contains($entry, 'c2pa.actions')) {
                $statuses[] = new ValidationStatus(StatusCode::AssertionActionRedacted, $entry, 'redaction of action assertions disallowed');
            }
            foreach (self::HARD_BINDINGS as $label) {
                if (str_contains($entry, $label)) {
                    $statuses[] = new ValidationStatus(StatusCode::AssertionHardBindingRedacted, $entry, sprintf('redaction of disallowed hash assertion %s (C2PA 2.4 §6.8)', $label));

                    break;
                }
            }
        }

        return $statuses;
    }

    private function resolves(Manifest $manifest, string $uri): bool
    {
        try {
            $manifest->resolve($uri);
        } catch (ManifestException) {
            return false;
        }

        return true;
    }

    /**
     * One entry of the claim against its box: the seam for an entry the
     * manifest could not have been built with (SPEC-011 AC10).
     */
    public function checkEntry(Manifest $manifest, HashedUri $entry): ValidationStatus
    {
        return $this->entry($manifest, $entry)[0];
    }

    /**
     * The entry's status and, when the url resolved, its box — so that
     * check() knows which boxes are spoken for.
     *
     * @return array{0: ValidationStatus, 1: ?Superbox}
     */
    private function entry(Manifest $manifest, HashedUri $entry): array
    {
        try {
            $box = $manifest->resolve($entry->url);
        } catch (ManifestException $e) {
            return [new ValidationStatus($e->status, $entry->url, $e->getMessage()), null];
        }
        $url = sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $manifest->label, $box->description->label);

        $alg = $entry->alg ?? $manifest->claim->alg;
        if ($alg === null) {
            return [new ValidationStatus(StatusCode::AlgorithmUnsupported, $url, 'no algorithm is specified for this hashed URI: neither the entry nor the claim carries an alg (C2PA 2.4 §15.4.2)'), $box];
        }
        if (! array_key_exists($alg, self::ALGORITHMS)) {
            return [new ValidationStatus(StatusCode::AlgorithmUnsupported, $url, sprintf('the hash algorithm %s is not one of sha256, sha384, sha512 (C2PA 2.4 §13.1)', $alg)), $box];
        }

        $expected = $entry->hash->bytes;
        $length = strlen($expected);
        if ($length !== self::ALGORITHMS[$alg]) {
            return [new ValidationStatus(StatusCode::AssertionHashedUriMismatch, $url, sprintf('the claim carries a %d-byte hash for this assertion, but %s produces %d bytes', $length, $alg, self::ALGORITHMS[$alg])), $box];
        }
        $actual = hash($alg, $box->payload(), true);

        $status = hash_equals($expected, $actual)
            ? new ValidationStatus(StatusCode::AssertionHashedUriMatch, $url, sprintf('hashed uri matched: %s (%s over %d bytes)', $entry->url, $alg, $box->length - 8))
            : new ValidationStatus(StatusCode::AssertionHashedUriMismatch, $url, sprintf('hash does not match assertion data: %s (%s over %d bytes gives %s, the claim carries %s)', $entry->url, $alg, $box->length - 8, bin2hex($actual), bin2hex($expected)));

        return [$status, $box];
    }
}
`,"src/Jumbf/ContentBox.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Jumbf;

/**
 * A JUMBF content box (SPEC-005): \`cbor\`, \`json\`, \`bfdb\`, \`bidb\` or
 * \`uuid\`, with its data uninterpreted. $offset and $length are the box's,
 * header included; the data starts eight bytes on.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class ContentBox
{
    public function __construct(
        public int $offset,
        public int $length,
        public string $type,
        public string $data,
    ) {}
}
`,"src/Jumbf/DescriptionBox.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Jumbf;

/**
 * A JUMBF description box, \`jumd\` (ISO 19566-5 A.3 as C2PA 2.4 §11.1.4.1
 * restates it): the superbox's type UUID, a toggles byte, and the fields
 * the toggles announce — a label, an id, a signature, a private box. In a
 * C2PA store the private box is the \`c2sh\` salt (§8.4.2.3).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class DescriptionBox
{
    public const TOGGLE_REQUESTABLE = 0x01;

    public const TOGGLE_LABEL = 0x02;

    public const TOGGLE_ID = 0x04;

    public const TOGGLE_SIGNATURE = 0x08;

    public const TOGGLE_PRIVATE = 0x10;

    public function __construct(
        public int $offset,
        public int $length,
        /** Lower-case, hyphenated: 63327061-0011-0010-8000-00aa00389b71 */
        public string $uuid,
        public int $toggles,
        public string $label,
        public ?int $id,
        /** 32 bytes, or null */
        public ?string $signature,
        /** 16 or 32 bytes of \`c2sh\` salt, or null */
        public ?string $salt,
    ) {}

    public function requestable(): bool
    {
        return ($this->toggles & self::TOGGLE_REQUESTABLE) !== 0;
    }
}
`,"src/Jumbf/JumbfException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Jumbf;

/**
 * Thrown for every malformed box, description box or tree (SPEC-005
 * AC8–AC16). There is never a partial tree: the parser returns the whole
 * store as boxes, or throws.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class JumbfException extends \\RuntimeException {}
`,"src/Jumbf/JumbfParser.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Jumbf;

use Provemark\\C2paVerifier\\Support\\Bytes;

/**
 * The manifest store as a tree of JUMBF boxes (SPEC-005; C2PA 2.4 §11.1).
 *
 * Walks the bytes recursively: every box is validated — LBox, fit inside
 * its parent, the description box's fields — before its children are
 * visited, and the depth and box counters are checked before a child is
 * created. Superboxes with a type UUID this parser does not know, and
 * content boxes of a type it does not know, are kept as UnknownBox and not
 * walked (§11.1.2). Compressed and update manifests are errors: a verifier
 * must not say anything about a manifest it cannot read. Nothing inside a
 * content box is interpreted.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class JumbfParser
{
    public const DEFAULT_MAX_DEPTH = 16;

    public const DEFAULT_MAX_BOXES = 4096;

    public const UUID_MANIFEST_STORE = '63327061-0011-0010-8000-00aa00389b71';   // c2pa

    public const UUID_MANIFEST = '63326d61-0011-0010-8000-00aa00389b71';         // c2ma

    public const UUID_COMPRESSED_MANIFEST = '6332636d-0011-0010-8000-00aa00389b71'; // c2cm

    public const UUID_UPDATE_MANIFEST = '6332756d-0011-0010-8000-00aa00389b71';  // c2um

    public const UUID_TIMESTAMP_MANIFEST = '6332746d-0011-0010-8000-00aa00389b71'; // c2tm (deprecated, §11.2.5)

    public const UUID_ASSERTION_STORE = '63326173-0011-0010-8000-00aa00389b71';  // c2as

    public const UUID_CLAIM = '6332636c-0011-0010-8000-00aa00389b71';            // c2cl

    public const UUID_CLAIM_SIGNATURE = '63326373-0011-0010-8000-00aa00389b71';  // c2cs

    public const UUID_CBOR_ASSERTION = '63626f72-0011-0010-8000-00aa00389b71';   // cbor

    public const UUID_JSON_ASSERTION = '6a736f6e-0011-0010-8000-00aa00389b71';   // json

    public const UUID_EMBEDDED_FILE = '40cb0c32-bb8a-489d-a70b-2ad6f47f4369';

    public const UUID_UUID_ASSERTION = '75756964-0011-0010-8000-00aa00389b71';   // uuid

    /** The superbox types this parser walks into. */
    private const KNOWN_SUPERBOXES = [
        self::UUID_MANIFEST_STORE, self::UUID_MANIFEST, self::UUID_UPDATE_MANIFEST, self::UUID_ASSERTION_STORE,
        self::UUID_CLAIM, self::UUID_CLAIM_SIGNATURE,
        self::UUID_CBOR_ASSERTION, self::UUID_JSON_ASSERTION, self::UUID_EMBEDDED_FILE, self::UUID_UUID_ASSERTION,
    ];

    private const CONTENT_TYPES = ['cbor', 'json', 'bfdb', 'bidb', 'uuid'];

    private const ROOT_LABEL = 'c2pa';

    private const SALT_TYPE = 'c2sh';

    private const LABEL_FORBIDDEN = '/[\\x00-\\x1F\\x7F-\\x9F\\/;?#\\x{FEFF}\\x{FFFF}]/u';

    public function __construct(
        public int $maxDepth = self::DEFAULT_MAX_DEPTH,
        public int $maxBoxes = self::DEFAULT_MAX_BOXES,
    ) {}

    /**
     * @param  string  $bytes  the manifest store, as a Container extractor yields it
     *
     * @throws JumbfException on every malformed case
     */
    public function parse(string $bytes): Superbox
    {
        $walk = new JumbfWalk($bytes, $this->maxBoxes);
        $end = strlen($bytes);

        // No parent bounds the root, so its header is read unbounded; the walk
        // below is what notices a root claiming more than the store holds.
        [$lBox, $tBox] = $walk->header(0, PHP_INT_MAX);
        if ($tBox !== 'jumb') {
            throw new JumbfException(sprintf('expected a jumb superbox at offset 0, found %s', Bytes::printable($tBox)));
        }
        // The root has no parent to bound it: its LBox is checked against the
        // store after the walk, so that a root that claims more than the store
        // holds is reported as "its children end before its LBox" (AC10).
        $root = $this->superbox($walk, 0, $lBox, 1, true);
        if ($lBox < $end) {
            throw new JumbfException(sprintf('the root superbox ends at %d but the store holds %d bytes', $lBox, $end));
        }
        if ($root->description->uuid !== self::UUID_MANIFEST_STORE) {
            throw new JumbfException(sprintf(
                'expected the manifest store UUID %s at the root, found %s',
                self::UUID_MANIFEST_STORE,
                $root->description->uuid,
            ));
        }
        if ($root->description->label !== self::ROOT_LABEL) {
            throw new JumbfException(sprintf(
                'expected the root label %s, found %s',
                self::ROOT_LABEL,
                Bytes::printable($root->description->label) === $root->description->label ? $root->description->label : Bytes::hex($root->description->label),
            ));
        }

        return $root;
    }

    /**
     * A superbox whose header has been read and counted. $isRoot lets the
     * root be bounded by the store instead of a parent.
     */
    private function superbox(JumbfWalk $walk, int $offset, int $lBox, int $depth, bool $isRoot = false): Superbox
    {
        if ($depth > $this->maxDepth) {
            throw new JumbfException(sprintf('superbox at offset %d: depth %d exceeds the limit of %d', $offset, $depth, $this->maxDepth));
        }
        $end = $offset + $lBox;
        $readable = $isRoot ? min($end, $walk->size()) : $end;

        // The first child must be the description box.
        [$childLBox, $childTBox] = $walk->header($offset + 8, $readable);
        if ($childTBox !== 'jumd') {
            throw new JumbfException(sprintf(
                'superbox at offset %d: first child is %s, not a description box',
                $offset,
                Bytes::printable($childTBox),
            ));
        }
        $description = $this->description($walk, $offset + 8, $childLBox);
        $this->refuseUnreadable($description, $offset);

        $children = [];
        $p = $offset + 8 + $childLBox;
        while ($p < $end) {
            if ($p + 8 > $readable) {
                throw new JumbfException(sprintf(
                    'superbox at offset %d: its children end at %d but its LBox ends it at %d',
                    $offset,
                    $p,
                    $end,
                ));
            }
            [$childLBox, $childTBox] = $walk->header($p, $readable);
            $children[] = $this->child($walk, $p, $childLBox, $childTBox, $depth);
            $p += $childLBox;
        }
        if ($p !== $end) {
            throw new JumbfException(sprintf('superbox at offset %d: its children end at %d but its LBox ends it at %d', $offset, $p, $end));
        }
        $this->requireBidbAfterBfdb($children);

        return new Superbox($offset, $lBox, $description, $children, $walk->bytes());
    }

    /** A child whose header has been read: a superbox, a content box, or an unknown box. */
    private function child(JumbfWalk $walk, int $offset, int $lBox, string $tBox, int $depth): Superbox|ContentBox|UnknownBox
    {
        if ($tBox === 'jumb') {
            [$descLBox, $descTBox] = $walk->header($offset + 8, $offset + $lBox, false);
            if ($descTBox !== 'jumd') {
                throw new JumbfException(sprintf(
                    'superbox at offset %d: first child is %s, not a description box',
                    $offset,
                    Bytes::printable($descTBox),
                ));
            }
            $description = $this->description($walk, $offset + 8, $descLBox);
            $this->refuseUnreadable($description, $offset);
            if (! in_array($description->uuid, self::KNOWN_SUPERBOXES, true)) {
                return new UnknownBox($offset, $lBox, 'jumb', $description->uuid, $description->label, $walk->slice($offset, $lBox));
            }

            return $this->superbox($walk, $offset, $lBox, $depth + 1);
        }
        if ($tBox === 'jumd') {
            throw new JumbfException(sprintf('box at offset %d: a second description box in one superbox', $offset));
        }
        if ($tBox === 'brob') {
            throw new JumbfException(sprintf('box at offset %d: compressed boxes (brob) are not supported', $offset));
        }
        if (in_array($tBox, self::CONTENT_TYPES, true)) {
            return new ContentBox($offset, $lBox, $tBox, $walk->slice($offset + 8, $lBox - 8));
        }

        return new UnknownBox($offset, $lBox, Bytes::printable($tBox), null, null, $walk->slice($offset, $lBox));
    }

    /**
     * Compressed and time-stamp manifests: an error, never a silent skip (AC13). Update manifests
     * (\`c2um\`) are read since SPEC-022; \`c2cm\` needs Brotli, and \`c2tm\` is deprecated and "not to be
     * … read by manifest consumers" (C2PA 2.4 §11.2.5).
     */
    private function refuseUnreadable(DescriptionBox $description, int $superboxOffset): void
    {
        if ($description->uuid === self::UUID_COMPRESSED_MANIFEST) {
            throw new JumbfException(sprintf('superbox at offset %d: compressed manifests (c2cm) are not supported', $superboxOffset));
        }
        if ($description->uuid === self::UUID_TIMESTAMP_MANIFEST) {
            throw new JumbfException(sprintf('superbox at offset %d: time-stamp manifests (c2tm) are deprecated and not supported (C2PA 2.4 §11.2.5)', $superboxOffset));
        }
    }

    /** A description box whose header has been read (C2PA 2.4 §11.1.4.1; the salt §8.4.2.3). */
    private function description(JumbfWalk $walk, int $offset, int $lBox): DescriptionBox
    {
        $end = $offset + $lBox;
        if ($lBox < 8 + 16 + 1) {
            throw new JumbfException(sprintf('description box at offset %d: LBox %d cannot hold a UUID and a toggles byte', $offset, $lBox));
        }
        $uuid = self::uuid($walk->slice($offset + 8, 16));
        $toggles = ord($walk->slice($offset + 24, 1));
        $p = $offset + 25;

        if (($toggles & ~0x1F) !== 0) {
            throw new JumbfException(sprintf('description box at offset %d: toggles %d set unknown bits', $offset, $toggles));
        }
        if (($toggles & DescriptionBox::TOGGLE_LABEL) === 0) {
            throw new JumbfException(sprintf('description box at offset %d: Label Present is not set', $offset));
        }
        $nul = strpos($walk->bytes(), "\\0", $p);
        if ($nul === false || $nul >= $end) {
            throw new JumbfException(sprintf('description box at offset %d: label is not NUL-terminated', $offset));
        }
        $label = $walk->slice($p, $nul - $p);
        if (! mb_check_encoding($label, 'UTF-8') || preg_match(self::LABEL_FORBIDDEN, $label) === 1) {
            throw new JumbfException(sprintf(
                'description box at offset %d: label %s contains a character that is not permitted',
                $offset,
                Bytes::hex($label),
            ));
        }
        $p = $nul + 1;

        $id = null;
        if (($toggles & DescriptionBox::TOGGLE_ID) !== 0) {
            $id = self::u32($walk->slice($p, 4), $offset, $end, $p + 4);
            $p += 4;
        }
        $signature = null;
        if (($toggles & DescriptionBox::TOGGLE_SIGNATURE) !== 0) {
            if ($p + 32 > $end) {
                throw new JumbfException(sprintf('description box at offset %d: the 32-byte signature does not fit', $offset));
            }
            $signature = $walk->slice($p, 32);
            $p += 32;
        }
        $salt = null;
        if (($toggles & DescriptionBox::TOGGLE_PRIVATE) !== 0) {
            [$privateLBox, $privateTBox] = $walk->header($p, $end, false);
            if ($privateTBox !== self::SALT_TYPE) {
                throw new JumbfException(sprintf('description box at offset %d: private box %s is not %s', $offset, Bytes::printable($privateTBox), self::SALT_TYPE));
            }
            $saltLength = $privateLBox - 8;
            if ($saltLength !== 16 && $saltLength !== 32) {
                throw new JumbfException(sprintf('description box at offset %d: salt of %d bytes, expected 16 or 32', $offset, $saltLength));
            }
            $salt = $walk->slice($p + 8, $saltLength);
            $p += $privateLBox;
        }
        if ($p !== $end) {
            throw new JumbfException(sprintf('description box at offset %d: %d bytes after its last field', $offset, $end - $p));
        }

        return new DescriptionBox($offset, $lBox, $uuid, $toggles, $label, $id, $signature, $salt);
    }

    /** @param list<Superbox|ContentBox|UnknownBox> $children */
    private function requireBidbAfterBfdb(array $children): void
    {
        foreach ($children as $i => $child) {
            if ($child instanceof ContentBox && $child->type === 'bfdb') {
                $next = $children[$i + 1] ?? null;
                if (! $next instanceof ContentBox || $next->type !== 'bidb') {
                    throw new JumbfException(sprintf('bfdb at offset %d is not followed by bidb', $child->offset));
                }
            }
        }
    }

    private static function uuid(string $bytes): string
    {
        $hex = bin2hex($bytes);

        return sprintf('%s-%s-%s-%s-%s', substr($hex, 0, 8), substr($hex, 8, 4), substr($hex, 12, 4), substr($hex, 16, 4), substr($hex, 20, 12));
    }

    private static function u32(string $bytes, int $offset, int $end, int $needed): int
    {
        if ($needed > $end || strlen($bytes) !== 4) {
            throw new JumbfException(sprintf('description box at offset %d: the 4-byte id does not fit', $offset));
        }
        /** @var array{1: int} $u */
        $u = unpack('N', $bytes);

        return $u[1];
    }
}
`,"src/Jumbf/JumbfWalk.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Jumbf;

/**
 * One parse's state: the bytes, the box counter, and the two checks every
 * box header goes through — that it fits inside its parent and that its
 * LBox is usable (SPEC-005 AC8, AC9, AC16). Internal to JumbfParser.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class JumbfWalk
{
    private int $boxes = 0;

    public function __construct(
        private readonly string $bytes,
        private readonly int $maxBoxes,
    ) {}

    public function bytes(): string
    {
        return $this->bytes;
    }

    public function size(): int
    {
        return strlen($this->bytes);
    }

    public function slice(int $offset, int $length): string
    {
        return substr($this->bytes, $offset, $length);
    }

    /**
     * Reads and validates a box header at $offset inside a parent that ends
     * at $parentEnd; counts the box unless $count is false (a description
     * box peeked at ahead of its superbox, or a private box, is counted
     * where it is walked).
     *
     * @return array{0: int, 1: string} LBox, TBox
     */
    public function header(int $offset, int $parentEnd, bool $count = true): array
    {
        if ($offset + 8 > $parentEnd || $offset + 8 > $this->size()) {
            throw new JumbfException(sprintf('box at offset %d: no room for an 8-byte box header before %d', $offset, min($parentEnd, $this->size())));
        }
        /** @var array{lbox: int, tbox: string} $h */
        $h = unpack('Nlbox/a4tbox', $this->bytes, $offset);
        if ($h['lbox'] === 0 || $h['lbox'] === 1) {
            throw new JumbfException(sprintf('box at offset %d: LBox %d is not supported (0 = to the end, 1 = a 64-bit length)', $offset, $h['lbox']));
        }
        if ($h['lbox'] < 8) {
            throw new JumbfException(sprintf('box at offset %d: LBox %d is shorter than the 8-byte box header', $offset, $h['lbox']));
        }
        if ($offset + $h['lbox'] > $parentEnd) {
            throw new JumbfException(sprintf(
                'box at offset %d ends at %d, past its parent, which ends at %d',
                $offset,
                $offset + $h['lbox'],
                $parentEnd,
            ));
        }
        if ($count) {
            $this->boxes++;
            if ($this->boxes > $this->maxBoxes) {
                throw new JumbfException(sprintf('box at offset %d: box %d exceeds the limit of %d boxes', $offset, $this->boxes, $this->maxBoxes));
            }
        }

        return [$h['lbox'], $h['tbox']];
    }
}
`,"src/Jumbf/Superbox.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Jumbf;

/**
 * A JUMBF superbox, \`jumb\`: a description box followed by content boxes,
 * superboxes or unknown boxes, in file order (SPEC-005). It keeps the whole
 * store (one shared, copy-on-write string) and its own byte range, so that
 * payload() — what C2PA 2.4 §8.4.2.3 hashes — is exact.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class Superbox
{
    /**
     * @param  list<Superbox|ContentBox|UnknownBox>  $children
     * @param  string  $store  the whole manifest store this box lies in
     */
    public function __construct(
        public int $offset,
        public int $length,
        public DescriptionBox $description,
        public array $children,
        private string $store,
    ) {}

    /** The child superbox with this label, or null; the caller decides whether absence is an error. */
    public function child(string $label): ?self
    {
        foreach ($this->children as $child) {
            if ($child instanceof self && $child->description->label === $label) {
                return $child;
            }
        }

        return null;
    }

    /** @return list<Superbox> */
    public function superboxes(): array
    {
        return array_values(array_filter($this->children, static fn ($child): bool => $child instanceof self));
    }

    /** @return list<ContentBox> */
    public function contentBoxes(): array
    {
        return array_values(array_filter($this->children, static fn ($child): bool => $child instanceof ContentBox));
    }

    /** The contents without the 8-byte superbox header: the bytes a hashed URI to this box covers (§8.4.2.3). */
    public function payload(): string
    {
        return substr($this->store, $this->offset + 8, $this->length - 8);
    }
}
`,"src/Jumbf/UnknownBox.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Jumbf;

/**
 * A box this verifier does not recognise — a superbox with an unknown type
 * UUID, or a content box of an unknown type — kept in the tree, its
 * contents not walked (C2PA 2.4 §11.1.2: "skip over and ignore"; SPEC-005
 * AC7). Skipping is not forgetting: the box keeps its place and its bytes
 * so that a later layer can hash or refuse it.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class UnknownBox
{
    public function __construct(
        public int $offset,
        public int $length,
        public string $type,
        public ?string $uuid,
        public ?string $label,
        public string $bytes,
    ) {}
}
`,"src/Manifest/ActionsCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The actions assertion (SPEC-018, C2PA 2.4 §18.x): a 2.x manifest opens
 * with \`c2pa.created\` or \`c2pa.opened\`, or it is not valid. Three rules
 * and no more — for a claim v2 the first actions assertion (created list
 * first, then gathered) must exist with a non-empty \`actions\` list whose
 * first action opens; every actions assertion of a v2 claim must be
 * well-formed; a v1 claim carries at most one — each fault
 * \`assertion.action.malformed\` on the manifest's url (the opening) or the
 * assertion's (its shape), as c2pa-rs's \`verify_actions\`. The content
 * family (ingredient parameters, icons, templates) is not read here.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class ActionsCheck
{
    public const LABEL_V2 = 'c2pa.actions.v2';

    public const LABEL_V1 = 'c2pa.actions';

    public const OPENING_ACTIONS = ['c2pa.created', 'c2pa.opened'];

    public const DEFAULT_MAX_ACTIONS = 10000;

    public function __construct(private int $maxActions = self::DEFAULT_MAX_ACTIONS) {}

    /**
     * The manifest's actions assertions in the order the claim lists them —
     * created first, then gathered — judged; those in $unreadable (hashed
     * URIs that did not match) are left unread.
     *
     * @param  list<string>  $unreadable  assertion urls whose hashed URI failed
     * @param  array<string, list<string>>  $storeLabels  every manifest in the store => the assertion labels its claim lists (SPEC-037, claimLabels())
     * @return list<ValidationStatus>
     */
    public function check(Manifest $manifest, array $unreadable = [], array $storeLabels = []): array
    {
        $manifestUrl = sprintf('self#jumbf=/c2pa/%s', $manifest->label);
        $actions = [];
        foreach ([...$manifest->claim->createdAssertions, ...$manifest->claim->gatheredAssertions] as $entry) {
            $label = substr($entry->url, strrpos($entry->url, '/') + 1);
            if (! self::isActionsLabel($label)) {
                continue;
            }
            $url = $manifestUrl.'/c2pa.assertions/'.$label;
            if (in_array($url, $unreadable, true) || ! isset($manifest->assertions[$label])) {
                continue;   // not vouched for by the claim, or not in the store: the hashed-URI check has refused the file
            }
            $actions[] = ['url' => $url, 'data' => $manifest->assertions[$label]->data];
        }

        // the claim's own assertions, for SPEC-033's references: every label it lists, and each ingredient's relationship
        $labels = [];
        $ingredients = [];
        foreach ([...$manifest->claim->createdAssertions, ...$manifest->claim->gatheredAssertions] as $entry) {
            $label = substr($entry->url, strrpos($entry->url, '/') + 1);
            $labels[] = $label;
            $data = $manifest->assertions[$label]->data ?? null;
            if (self::base($label) === 'c2pa.ingredient' && is_array($data) && is_string($data['relationship'] ?? null)) {
                $ingredients[$label] = $data['relationship'];
            }
        }

        // c2patool's url for the manifest-level faults of this rule is the bare manifest label (measured, SPEC-018 amendment 2)
        return $this->checkAssertions($manifest->label, $manifest->claim->version, $actions, $manifest->isUpdateManifest, $labels, $ingredients, $storeLabels);
    }

    /**
     * The seam: the ordered actions assertions as check() collects them. The
     * manifest-level faults carry the bare manifest label as their url — what
     * c2patool prints for this rule (its hard-binding faults carry the JUMBF
     * form; measured in step 49b).
     *
     * @param  list<array{url: string, data: mixed}>  $actions
     * @param  list<string>  $labels  the labels of every assertion the claim lists (SPEC-033: relatedAssertions)
     * @param  array<string, string>  $ingredients  ingredient assertion label => its relationship (SPEC-033: references)
     * @param  array<string, list<string>>  $storeLabels  every manifest in the store => the assertion labels its claim lists (SPEC-037)
     * @return list<ValidationStatus>
     */
    public function checkAssertions(string $manifestLabel, int $version, array $actions, bool $isUpdateManifest = false, array $labels = [], array $ingredients = [], array $storeLabels = []): array
    {
        $malformed = static fn (string $url, string $why): ValidationStatus => new ValidationStatus(StatusCode::AssertionActionMalformed, $url, $why);
        if ($version < 2) {
            // rule 3: a v1 claim carries at most one actions assertion; nothing else without strict_v1_validation (c2pa-rs)
            return count($actions) > 1
                ? [$malformed($manifestLabel, sprintf('a v1 claim carries at most one actions assertion, this one %d (%s)', count($actions), implode(', ', array_map(static fn (array $a): string => $a['url'], $actions))))]
                : [];
        }

        // rule 2: every actions assertion of a v2 claim is well-formed
        $statuses = [];
        foreach ($actions as $assertion) {
            foreach ($this->checkData($assertion['data'], $version) as $fault) {
                $statuses[] = $malformed($assertion['url'], 'actions assertion malformed: '.$fault);
            }
        }
        // SPEC-032 rule A: every c2pa.created carries a digitalSourceType. c2patool's rule (c2pa-rs 2.b.v);
        // C2PA 2.4 states it as the claim generator's duty (§18.15.2), and §15's validation steps are silent.
        foreach ($actions as $assertion) {
            if ($this->checkData($assertion['data'], $version) !== [] || ! is_array($assertion['data']) || ! is_array($assertion['data']['actions'] ?? null)) {
                continue;   // its shape was reported above
            }
            foreach ($assertion['data']['actions'] as $i => $action) {
                if (is_array($action) && ($action['action'] ?? null) === 'c2pa.created' && ! is_string($action['digitalSourceType'] ?? null)) {
                    $statuses[] = $malformed($assertion['url'], sprintf('c2pa.created action must have a digitalSourceType: actions[%d] has none (c2patool\\'s rule; C2PA 2.4 §18.15.2 states it for the claim generator)', $i));
                }
            }
        }
        // rule 1: the first one opens with c2pa.created or c2pa.opened — an update manifest is exempt
        // (C2PA 2.4 §11.2.3 gives it four actions of its own, none of them an opening; measured on
        // update_manifest.jpg's variant, where c2patool reports only the update rule — SPEC-022)
        if ($isUpdateManifest) {
            return [...$statuses, ...$this->contentRules($manifestLabel, $actions, $labels, $ingredients, $storeLabels)];
        }
        $before = count($statuses);
        if ($actions === []) {
            $statuses[] = $malformed($manifestLabel, 'first action must be created or opened: the manifest has no actions assertion (C2PA 2.4 §18, a 2.x manifest opens with c2pa.created or c2pa.opened)');
        } else {
            $first = self::firstAction($actions[0]['data']);
            if ($first === null) {
                // its shape was reported above; the opening cannot be judged
                if ($statuses === []) {
                    $statuses[] = $malformed($manifestLabel, 'first action must be created or opened: the first actions assertion has none');
                }
            } elseif (! in_array($first, self::OPENING_ACTIONS, true)) {
                $statuses[] = $malformed($manifestLabel, sprintf('first action must be created or opened: the first action is %s (%s)', $first, $actions[0]['url']));
            }
        }
        // SPEC-033 amendment 1: once the opening rule has refused the manifest, c2pa-rs reads no further
        if (count($statuses) > $before) {
            return $statuses;
        }

        return [...$statuses, ...$this->contentRules($manifestLabel, $actions, $labels, $ingredients, $storeLabels)];
    }

    /**
     * SPEC-033: the actions content rules of C2PA 2.4 §15.10.3.2.3 and
     * §18.15.4.7, as c2pa 0.91.0's verify_actions() applies them — one
     * opening; ingredient references for opened, placed, removed,
     * transcoded and repackaged, resolved by label in this claim (open
     * question 2); c2pa.translated's languages; relatedAssertions; a
     * watermark's soft binding. Only well-formed assertions are read; rule
     * 2 has reported the others.
     *
     * @param  list<array{url: string, data: mixed}>  $actions
     * @param  list<string>  $labels
     * @param  array<string, string>  $ingredients
     * @param  array<string, list<string>>  $storeLabels
     * @return list<ValidationStatus>
     */
    private function contentRules(string $manifestLabel, array $actions, array $labels, array $ingredients, array $storeLabels): array
    {
        $statuses = [];
        $malformed = static fn (string $url, string $why): ValidationStatus => new ValidationStatus(StatusCode::AssertionActionMalformed, $url, $why);
        $mismatch = static fn (string $url, string $why): ValidationStatus => new ValidationStatus(StatusCode::AssertionActionIngredientMismatch, $url, $why);
        $readable = [];
        foreach ($actions as $assertion) {
            if ($this->checkData($assertion['data'], 2) === [] && is_array($assertion['data']) && is_array($assertion['data']['actions'] ?? null)) {
                $readable[] = ['url' => $assertion['url'], 'actions' => $assertion['data']['actions']];
            }
        }

        // one opening across all actions assertions (c2pa-rs: the inception count), on the claim's bare label
        $openings = 0;
        foreach ($readable as $assertion) {
            foreach ($assertion['actions'] as $action) {
                $openings += is_array($action) && in_array($action['action'] ?? null, self::OPENING_ACTIONS, true) ? 1 : 0;
            }
        }
        if ($openings > 1) {
            $statuses[] = $malformed($manifestLabel, sprintf('cannot have more than one c2pa.created or c2pa.opened action: the claim has %d', $openings));
        }

        $softBinding = array_filter($labels, static fn (string $label): bool => self::base($label) === 'c2pa.soft-binding') !== [];
        $resolves = static function (mixed $reference, string $relationship) use ($ingredients): bool {
            $url = is_array($reference) && is_string($reference['url'] ?? null) ? $reference['url'] : null;
            if ($url === null) {
                return false;
            }
            $label = substr($url, strrpos($url, '/') + 1);

            return ($ingredients[$label] ?? null) === $relationship;
        };
        foreach ($readable as $assertion) {
            $url = $assertion['url'];
            foreach ($assertion['actions'] as $i => $action) {
                if (! is_array($action)) {
                    continue;
                }
                $name = $action['action'] ?? '';
                $parameters = $action['parameters'] ?? null;
                $parameters = is_array($parameters) && ! array_is_list($parameters) ? $parameters : null;

                // opened, placed, removed: references of the right relationship (§15.10.3.2.3; c2pa-rs 2.b)
                if (in_array($name, ['c2pa.opened', 'c2pa.placed', 'c2pa.removed'], true)) {
                    if ($parameters === null || (! array_key_exists('ingredients', $parameters) && ! array_key_exists('ingredient', $parameters))) {
                        $statuses[] = $mismatch($url, 'opened, placed and removed items must have ingredient(s) parameters');

                        continue;
                    }
                    $references = array_key_exists('ingredient', $parameters) ? [$parameters['ingredient']] : $parameters['ingredients'];
                    if (! is_array($references) || ! array_is_list($references) || $references === []) {
                        $statuses[] = $mismatch($url, 'opened, placed and removed items must have ingredients parameter must be non empty array');
                        $references = [];
                    }
                    $relationship = $name === 'c2pa.opened' ? 'parentOf' : 'componentOf';
                    $good = count(array_filter($references, static fn (mixed $r): bool => $resolves($r, $relationship)));
                    if ($name === 'c2pa.opened' ? $good !== 1 : $good === 0) {
                        $statuses[] = $mismatch($url, sprintf("action[%d] ('%s') must have valid ingredient with %s relationship", $i, $name, $relationship));
                    }
                }

                // transcoded, repackaged: a reference, if given, is a parentOf (§15.10.3.2.3; c2pa-rs 2.c)
                if (in_array($name, ['c2pa.transcoded', 'c2pa.repackaged'], true) && $parameters !== null) {
                    $references = array_key_exists('ingredient', $parameters) ? [$parameters['ingredient']] : (is_array($parameters['ingredients'] ?? null) ? $parameters['ingredients'] : []);
                    if ($references !== [] && array_filter($references, static fn (mixed $r): bool => $resolves($r, 'parentOf')) === []) {
                        $statuses[] = $mismatch($url, sprintf("action[%d] ('%s') must have valid ingredient with parentOf relationship", $i, $name));
                    }
                }

                // c2pa.translated: both languages (§18.15.4.7, as c2pa-rs reads it)
                if ($name === 'c2pa.translated') {
                    $source = $parameters['sourceLanguage'] ?? null;
                    $target = $parameters['targetLanguage'] ?? null;
                    if (! is_string($source) || $source === '' || ! is_string($target) || $target === '') {
                        $statuses[] = $malformed($url, 'c2pa.translated action must have sourceLanguage and targetLanguage parameters');
                    }
                }

                // relatedAssertions (§15.10.3.2.3; c2pa-rs 2.f): non-empty, resolvable here, never actions or ingredients
                if ($parameters !== null && array_key_exists('relatedAssertions', $parameters)) {
                    $related = $parameters['relatedAssertions'];
                    if (! is_array($related) || ! array_is_list($related) || $related === []) {
                        $statuses[] = $malformed($url, 'relatedAssertions must contain at least one entry');
                        $related = [];
                    }
                    foreach ($related as $reference) {
                        $target = is_array($reference) && is_string($reference['url'] ?? null) ? $reference['url'] : '';
                        $label = substr($target, strrpos($target, '/') + 1);
                        $elsewhere = str_starts_with($target, 'self#jumbf=/c2pa/') && ! str_starts_with($target, "self#jumbf=/c2pa/{$manifestLabel}/");
                        if ($target === '' || $elsewhere || ! in_array($label, $labels, true)) {
                            $statuses[] = $malformed($target === '' ? $url : $target, sprintf('relatedAssertions reference could not be resolved within the current manifest: %s', $target));
                        }
                        if (in_array(self::base($label), ['c2pa.actions', 'c2pa.ingredient'], true)) {
                            $statuses[] = $malformed($target, sprintf('relatedAssertions must not reference an actions or ingredient assertion: %s', $target));
                        }
                    }
                }

                // c2pa.redacted: its reference names an assertion the named manifest's claim lists (§15.10.3.2.3;
                // c2pa-rs 2.d, SPEC-037). As c2patool, only an action that has parameters is read: a bare one passes.
                if ($name === 'c2pa.redacted' && array_key_exists('parameters', $action)) {
                    $fault = self::redactionFault($parameters['redacted'] ?? null, $storeLabels);
                    if ($fault !== null) {
                        $statuses[] = new ValidationStatus($fault, $url, $fault === StatusCode::AssertionNotRedacted ? 'The assertion was not redacted' : 'redaction uri must be a valid reference');
                    }
                }

                // a watermark needs a soft binding in the claim (§15.10.3.2.3)
                if (in_array($name, ['c2pa.watermarked', 'c2pa.watermarked.bound'], true) && ! $softBinding) {
                    $statuses[] = new ValidationStatus(StatusCode::AssertionActionSoftBindingMissing, $url, 'watermark action missing soft binding assertion');
                }
            }
        }

        return $statuses;
    }

    /**
     * SPEC-037: what is wrong with a c2pa.redacted action's \`redacted\`, as c2pa-rs's rule 2.d reads it.
     * Not an absolute URI into a manifest of this store: \`assertion.action.redactionMismatch\`. A manifest
     * whose claim lists no assertion with that label, or a URI naming no assertion (a data box
     * included, open question 3): \`assertion.notRedacted\`. The label is matched by substring against
     * the listed urls, as c2pa-rs matches it.
     *
     * @param  array<string, list<string>>  $storeLabels
     */
    private static function redactionFault(mixed $redacted, array $storeLabels): ?StatusCode
    {
        if (! is_string($redacted) || preg_match('#\\Aself\\#jumbf=/c2pa/([^/]+)#', $redacted, $m) !== 1 || ! array_key_exists($m[1], $storeLabels)) {
            return StatusCode::AssertionActionRedactionMismatch;
        }
        $at = strpos($redacted, '/c2pa.assertions/');
        $label = $at === false ? '' : substr($redacted, $at + strlen('/c2pa.assertions/'));
        foreach ($storeLabels[$m[1]] as $listed) {
            if ($label !== '' && str_contains("self#jumbf=c2pa.assertions/{$listed}", $label)) {
                return null;
            }
        }

        return StatusCode::AssertionNotRedacted;
    }

    /**
     * Every manifest of the store with the assertion labels its claim lists, created and gathered: what
     * rule 2.d resolves a c2pa.redacted reference against (SPEC-037).
     *
     * @param  array<string, Manifest>  $manifests
     * @return array<string, list<string>>
     */
    public static function claimLabels(array $manifests): array
    {
        $labels = [];
        foreach ($manifests as $label => $manifest) {
            $labels[$label] = array_map(static fn (HashedUri $entry): string => substr($entry->url, strrpos($entry->url, '/') + 1), [...$manifest->claim->createdAssertions, ...$manifest->claim->gatheredAssertions]);
        }

        return $labels;
    }

    /** A label without its \`__n\` instance and its \`.vN\` version: c2pa.actions.v2__1 → c2pa.actions. */
    private static function base(string $label): string
    {
        $label = preg_replace('/__\\d+\\z/', '', $label) ?? $label;

        return preg_replace('/\\.v\\d+\\z/', '', $label) ?? $label;
    }

    /**
     * The seam: one decoded actions assertion, as claim $version — the faults
     * of rule 2, named by field. A v1 claim's assertion is not judged.
     *
     * @return list<string>
     */
    public function checkData(mixed $data, int $version): array
    {
        if ($version < 2) {
            return [];
        }
        if (! is_array($data) || array_is_list($data)) {
            return ['the assertion is not a map'];
        }
        if (! array_key_exists('actions', $data)) {
            return ['actions is missing'];
        }
        $list = $data['actions'];
        if (! is_array($list) || ! array_is_list($list)) {
            return ['actions is not a list'];
        }
        if ($list === []) {
            return ['actions is empty'];
        }
        if (count($list) > $this->maxActions) {
            return [sprintf('actions holds %d entries, above the limit of %d', count($list), $this->maxActions)];
        }
        foreach ($list as $i => $entry) {
            if (! is_array($entry) || array_is_list($entry)) {
                return [sprintf('actions[%d] is not a map', $i)];
            }
            $action = $entry['action'] ?? null;
            if (! is_string($action) || $action === '') {
                return [sprintf('actions[%d]: action is %s', $i, $action === null ? 'missing' : (is_string($action) ? 'empty' : 'not text'))];
            }
        }

        return [];
    }

    public static function isActionsLabel(string $label): bool
    {
        // c2pa.actions.v2, c2pa.actions, and their __n duplicates (C2PA 2.4 §7.2.2)
        $base = preg_replace('/__\\d+\\z/', '', $label) ?? $label;

        return $base === self::LABEL_V2 || $base === self::LABEL_V1;
    }

    /** The first action's \`action\` of a well-formed assertion, else null. */
    private static function firstAction(mixed $data): ?string
    {
        if (! is_array($data) || ! is_array($data['actions'] ?? null) || ! is_array($data['actions'][0] ?? null)) {
            return null;
        }
        $action = $data['actions'][0]['action'] ?? null;

        return is_string($action) && $action !== '' ? $action : null;
    }
}
`,"src/Manifest/Assertion.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Jumbf\\Superbox;

/**
 * One assertion of the assertion store: its label, its superbox (what M4
 * hashes), and its data decoded by content type — a CBOR value, a JSON
 * value, an EmbeddedFile, or the raw bytes of a \`uuid\` box (SPEC-007).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class Assertion
{
    public function __construct(
        public string $label,
        public Superbox $box,
        public mixed $data,
    ) {}
}
`,"src/Manifest/Claim.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * The claim, version 1 (\`c2pa.claim\`) or 2 (\`c2pa.claim.v2\`), typed from
 * its CBOR map per the CDDL of C2PA 2.4 §10.2.1 (SPEC-007). The version
 * comes from the box label; it is not in the CBOR.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class Claim
{
    /**
     * @param  list<array<string, mixed>>|null  $claimGeneratorInfo  always a list, as c2patool renders it
     * @param  list<HashedUri>  $createdAssertions  v1: its one \`assertions\` list
     * @param  list<HashedUri>  $gatheredAssertions  v1: empty
     * @param  array<string, mixed>  $other  every field not modelled, as decoded
     */
    public function __construct(
        public int $version,
        public string $instanceId,
        public ?string $claimGenerator,
        public ?array $claimGeneratorInfo,
        public string $signatureUri,
        public array $createdAssertions,
        public array $gatheredAssertions,
        public ?string $title,
        public ?string $format,
        public ?string $alg,
        public array $other,
    ) {}

    /**
     * @param  array<int|string, mixed>  $map  the decoded claim
     */
    public static function fromMap(int $version, array $map): self
    {
        $required = $version === 2
            ? ['instanceID', 'claim_generator_info', 'signature', 'created_assertions']
            : ['claim_generator', 'signature', 'assertions', 'dc:format', 'instanceID'];
        foreach ($required as $field) {
            if (($map[$field] ?? null) === null) {   // absent or null: a required field that is null is not there (amendment 4)
                throw new ManifestException(sprintf('claim (version %d) is missing the required field %s', $version, $field), StatusCode::ClaimMalformed);
            }
        }

        $text = static function (string $field, mixed $value) use ($version): string {
            if (! is_string($value)) {
                throw new ManifestException(sprintf('claim (version %d): %s is not text', $version, $field), StatusCode::ClaimMalformed);
            }

            return $value;
        };
        $optionalText = static fn (string $field): ?string => array_key_exists($field, $map) ? $text($field, $map[$field]) : null;

        $info = null;
        // a null claim_generator_info is one that is not there (c2pa-rs writes it so in some v1 claims —
        // ocsp.jpg); an *empty list* is one that is there and says nothing, and c2patool renders it as
        // such (update_manifest.jpg's parent). Neither is malformed (SPEC-007 amendment 4, SPEC-022)
        if (($map['claim_generator_info'] ?? null) !== null && $map['claim_generator_info'] !== []) {
            $info = self::generatorInfo($map['claim_generator_info'], $version);
        } elseif (($map['claim_generator_info'] ?? null) === []) {
            $info = [];
        }

        $modelled = $version === 2
            ? ['instanceID', 'claim_generator_info', 'signature', 'created_assertions', 'gathered_assertions', 'dc:title', 'alg']
            : ['instanceID', 'claim_generator', 'claim_generator_info', 'signature', 'assertions', 'dc:format', 'dc:title', 'alg'];
        $other = [];
        foreach ($map as $key => $value) {
            if (! in_array($key, $modelled, true)) {
                $other[(string) $key] = $value;
            }
        }

        return new self(
            $version,
            $text('instanceID', $map['instanceID']),
            $version === 1 ? $text('claim_generator', $map['claim_generator']) : null,
            $info,
            $text('signature', $map['signature']),
            self::hashedUris($version === 2 ? $map['created_assertions'] : $map['assertions'], $version === 2 ? 'created_assertions' : 'assertions'),
            array_key_exists('gathered_assertions', $map) ? self::hashedUris($map['gathered_assertions'], 'gathered_assertions') : [],
            $optionalText('dc:title'),
            $version === 1 ? $text('dc:format', $map['dc:format']) : null,
            $optionalText('alg'),
            $other,
        );
    }

    /**
     * v2: one generator-info-map; v1: a list of them. Always a list here,
     * each with a \`name\` (C2PA 2.4 §10.2.3.2).
     *
     * @return list<array<string, mixed>>
     */
    private static function generatorInfo(mixed $value, int $version): array
    {
        $expected = $version === 2 ? 'a map' : 'a non-empty list of maps';
        $entries = $version === 2 ? [$value] : $value;
        if (! is_array($entries) || ! array_is_list($entries) || $entries === []) {
            throw new ManifestException(sprintf('claim (version %d): claim_generator_info is not %s', $version, $expected), StatusCode::ClaimMalformed);
        }
        $list = [];
        foreach ($entries as $entry) {
            if (! is_array($entry)) {
                throw new ManifestException(sprintf('claim (version %d): claim_generator_info entry is not a map', $version), StatusCode::ClaimMalformed);
            }
            if (! isset($entry['name']) || ! is_string($entry['name'])) {
                throw new ManifestException('claim_generator_info is missing the required field name', StatusCode::ClaimMalformed);
            }
            $map = [];
            foreach ($entry as $key => $item) {
                $map[(string) $key] = $item;
            }
            $list[] = $map;
        }

        return $list;
    }

    /** @return list<HashedUri> */
    private static function hashedUris(mixed $value, string $field): array
    {
        if (! is_array($value) || ! array_is_list($value) || $value === []) {
            throw new ManifestException(sprintf('claim: %s is not a non-empty list', $field), StatusCode::ClaimMalformed);
        }
        $uris = [];
        foreach ($value as $i => $entry) {
            if (! is_array($entry) || ! isset($entry['url']) || ! is_string($entry['url'])) {
                throw new ManifestException(sprintf('claim: %s[%d] is not a hashed URI with a url', $field, $i), StatusCode::ClaimMalformed);
            }
            if (! array_key_exists('hash', $entry)) {
                throw new ManifestException(sprintf('hashed URI %s: hash is missing', $entry['url']), StatusCode::ClaimMalformed);
            }
            if (! $entry['hash'] instanceof CborBytes) {
                throw new ManifestException(sprintf('hashed URI %s: hash is %s, not a byte string', $entry['url'], is_string($entry['hash']) ? 'text' : gettype($entry['hash'])), StatusCode::ClaimMalformed);
            }
            $alg = $entry['alg'] ?? null;
            if ($alg !== null && ! is_string($alg)) {
                throw new ManifestException(sprintf('hashed URI %s: alg is not text', $entry['url']), StatusCode::ClaimMalformed);
            }
            $uris[] = new HashedUri($entry['url'], $entry['hash'], $alg);
        }

        return $uris;
    }
}
`,"src/Manifest/EmbeddedFile.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

/**
 * The data of an embedded-file assertion (JUMBF \`bfdb\` + \`bidb\`): the media
 * type from the description box, the bytes from the data box — a thumbnail,
 * typically.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class EmbeddedFile
{
    public function __construct(
        public string $format,
        public string $bytes,
    ) {}
}
`,"src/Manifest/ExternalReferenceCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The external-reference assertion's structure (SPEC-032 rule B; C2PA 2.4
 * §15.10.3.2.2): a \`location\` with a non-empty \`url\`, \`alg\` and \`hash\`
 * together or not at all, and no \`label\` naming an assertion an external
 * reference may not stand for. The referenced data is never retrieved:
 * the \`url\` is data here, never a destination.
 *
 * @internal SPEC-025: not part of the public API.
 */
final readonly class ExternalReferenceCheck
{
    public const LABEL = 'c2pa.external-reference';

    /**
     * §15.10.3.2.2's thirteen, plus \`c2pa.action\`, which \`c2pa\` 0.91.0 also
     * refuses (SPEC-032 open question 1): a label that does not exist, so
     * refusing it costs no real file.
     */
    public const FORBIDDEN_LABELS = [
        'c2pa.action', 'c2pa.actions', 'c2pa.actions.v2', 'c2pa.cloud-data', 'c2pa.external-reference',
        'c2pa.hash.bmff.v2', 'c2pa.hash.bmff.v3', 'c2pa.hash.boxes', 'c2pa.hash.collection.data', 'c2pa.hash.data',
        'c2pa.hash.multi-asset', 'c2pa.ingredient', 'c2pa.ingredient.v2', 'c2pa.ingredient.v3',
    ];

    /**
     * One status per malformed external-reference assertion the claim lists;
     * those in $unreadable (hashed URIs that did not match) are left unread.
     *
     * @param  list<string>  $unreadable
     * @return list<ValidationStatus>
     */
    public function check(Manifest $manifest, array $unreadable = []): array
    {
        $statuses = [];
        foreach (self::references($manifest) as $label => $data) {
            $url = sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $manifest->label, $label);
            if (in_array($url, $unreadable, true)) {
                continue;
            }
            $fault = self::fault($data);
            if ($fault !== null) {
                $statuses[] = new ValidationStatus(StatusCode::AssertionExternalReferenceMalformed, $url, sprintf('external reference malformed: %s (C2PA 2.4 §15.10.3.2.2); the referenced data is never retrieved', $fault));
            }
        }

        return $statuses;
    }

    /** Whether the claim lists any external-reference assertion — the report names the check only then (SPEC-032 open question 4). */
    public static function present(Manifest $manifest): bool
    {
        return self::references($manifest) !== [];
    }

    /**
     * The fault of one decoded assertion, or null.
     */
    public static function fault(mixed $data): ?string
    {
        if (! is_array($data) || array_is_list($data)) {
            return 'the assertion is not a map';
        }
        $location = $data['location'] ?? null;
        if (! is_array($location) || (array_is_list($location) && $location !== [])) {
            return $location === null ? 'location is missing' : 'location is not a map';
        }
        $url = $location['url'] ?? null;
        if (! is_string($url)) {
            return $url === null ? 'location.url is missing' : 'location.url is not text';
        }
        if (trim($url) === '') {
            return 'location.url is empty';
        }
        $hasAlg = array_key_exists('alg', $location);
        $hasHash = array_key_exists('hash', $location);
        if ($hasAlg !== $hasHash) {
            return $hasAlg ? 'location carries alg without hash' : 'location carries hash without alg';
        }
        if ($hasAlg && (! is_string($location['alg']) || trim($location['alg']) === '' || in_array($location['hash'], ['', null], true))) {
            return 'location carries an empty alg or hash';
        }
        if (array_key_exists('label', $data)) {
            if (! is_string($data['label'])) {
                return 'label is not text';
            }
            if (in_array($data['label'], self::FORBIDDEN_LABELS, true)) {
                return sprintf('label %s names an assertion an external reference shall not reference', $data['label']);
            }
        }

        return null;
    }

    /**
     * The external-reference assertions the claim lists, created and gathered, any instance.
     *
     * @return array<string, mixed> assertion label => decoded data
     */
    private static function references(Manifest $manifest): array
    {
        $found = [];
        foreach ([...$manifest->claim->createdAssertions, ...$manifest->claim->gatheredAssertions] as $entry) {
            $label = substr($entry->url, strrpos($entry->url, '/') + 1);
            if ((preg_replace('/__\\d+\\z/', '', $label) ?? $label) === self::LABEL && isset($manifest->assertions[$label])) {
                $found[$label] = $manifest->assertions[$label]->data;
            }
        }

        return $found;
    }
}
`,"src/Manifest/HashedUri.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;

/**
 * A hashed URI (C2PA 2.4 hashed-uri-map): a JUMBF URI, the hash of the
 * box it names, and optionally the algorithm; without \`alg\` the claim's
 * applies. Comparing the hash with the box is M4.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class HashedUri
{
    public function __construct(
        public string $url,
        public CborBytes $hash,
        public ?string $alg,
    ) {}
}
`,"src/Manifest/IconReferenceCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * Icon references (SPEC-034; C2PA 2.4 §10.2.3.2, §15.6.2, §15.10.3.2.3,
 * §15.10.3.3), as c2pa 0.91.0's verify_icons() checks them: every icon that
 * is a hashed URI — in claim_generator_info (any claim version), and in a
 * v2 actions assertion's softwareAgents, templates and an action's
 * softwareAgent — must name an assertion the claim lists, with the hash the
 * claim records for it. A url that names nothing the claim lists (an
 * external url, a data box of earlier versions) is assertion.missing. An
 * icon map without a url is a resource reference, not a hashed URI, and is
 * not checked (amendment 2). Nothing is ever fetched.
 *
 * @internal SPEC-025: not part of the public API.
 */
final readonly class IconReferenceCheck
{
    /** @return list<ValidationStatus> */
    public function check(Manifest $manifest): array
    {
        $recorded = [];
        foreach ([...$manifest->claim->createdAssertions, ...$manifest->claim->gatheredAssertions] as $entry) {
            $recorded[substr($entry->url, strrpos($entry->url, '/') + 1)] = $entry->hash->bytes;
        }
        $statuses = [];
        foreach (self::icons($manifest) as $icon) {
            if (! is_array($icon) || ! is_string($icon['url'] ?? null)) {
                continue;   // a resource reference, or not an icon map: not a hashed URI (amendment 2)
            }
            $url = $icon['url'];
            $label = substr($url, strrpos($url, '/') + 1);
            if (! str_starts_with($url, 'self#jumbf=') || ! array_key_exists($label, $recorded)) {
                $statuses[] = new ValidationStatus(StatusCode::AssertionMissing, $url, sprintf('could not resolve icon address: %s names no assertion this claim lists; an icon shall be a hashed URI to an embedded c2pa.icon (C2PA 2.4 §10.2.3.2), and data boxes of earlier versions are not read', $url));

                continue;
            }
            $hash = $icon['hash'] ?? null;
            if (! $hash instanceof CborBytes || ! hash_equals($recorded[$label], $hash->bytes)) {
                $statuses[] = new ValidationStatus(StatusCode::AssertionHashedUriMismatch, $url, sprintf('icon hash does not match the hash the claim records for %s (C2PA 2.4 §15.10.3.3)', $label));
            }
        }

        return $statuses;
    }

    /** Whether the manifest carries any icon — the report names the check only then. */
    public static function present(Manifest $manifest): bool
    {
        return self::icons($manifest) !== [];
    }

    /**
     * The seam for one actions assertion's icons: softwareAgents, templates, and each action's softwareAgent.
     * A v1 claim's actions are not read (c2pa-rs leaves verify_actions early for v1).
     *
     * @return list<mixed>
     */
    public static function actionsIcons(mixed $data, int $version): array
    {
        if ($version < 2 || ! is_array($data)) {
            return [];
        }
        $icons = [];
        foreach (['softwareAgents', 'templates'] as $field) {
            foreach (is_array($data[$field] ?? null) ? $data[$field] : [] as $item) {
                if (is_array($item) && array_key_exists('icon', $item)) {
                    $icons[] = $item['icon'];
                }
            }
        }
        foreach (is_array($data['actions'] ?? null) ? $data['actions'] : [] as $action) {
            $agent = is_array($action) ? ($action['softwareAgent'] ?? null) : null;
            if (is_array($agent) && array_key_exists('icon', $agent)) {
                $icons[] = $agent['icon'];
            }
        }

        return $icons;
    }

    /** @return list<mixed> */
    private static function icons(Manifest $manifest): array
    {
        $icons = [];
        foreach ($manifest->claim->claimGeneratorInfo ?? [] as $info) {
            if (array_key_exists('icon', $info)) {
                $icons[] = $info['icon'];
            }
        }
        foreach ($manifest->assertions as $label => $assertion) {
            if (ActionsCheck::isActionsLabel($label)) {
                $icons = [...$icons, ...self::actionsIcons($assertion->data, $manifest->claim->version)];
            }
        }

        return $icons;
    }
}
`,"src/Manifest/IngredientAssertion.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * An ingredient assertion (SPEC-020; C2PA 2.4 §18.16): the asset this one
 * was made from, and — when that asset had Content Credentials — the
 * hashed URI of the manifest carried along with it (\`c2pa_manifest\` in v1
 * and v2, \`activeManifest\` in v3) plus, in v3, one to its signature box.
 * \`validationStatus\` (v1/v2) and \`validationResults\` (v3) are what the
 * claim generator recorded when it used the ingredient (§18.16.12.4);
 * they are carried as data here and read in SPEC-021.
 *
 * Every rule that makes an assertion malformed is in \`fromAssertion()\`:
 * the specification's (§15.11.3.2, §18.16.12.3, §15.11.3.3) and the
 * fields c2pa-rs requires per version. Unknown input is an error.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class IngredientAssertion
{
    /**
     * @param  list<mixed>|null  $validationStatus  v1/v2, as recorded
     * @param  array<string, mixed>|null  $validationResults  v3, as recorded
     * @param  array<string, mixed>  $data  the whole decoded map
     */
    public function __construct(
        public string $label,
        public string $url,
        public int $version,
        public Relationship $relationship,
        public ?string $title,
        public ?string $format,
        public ?string $documentId,
        public ?string $instanceId,
        public ?HashedUri $manifest,
        public ?HashedUri $claimSignature,
        public ?HashedUri $thumbnail,
        public ?array $validationStatus,
        public ?array $validationResults,
        public ?string $digitalSourceType,
        public array $data,
    ) {}

    /** Whether the label names an ingredient assertion, with or without a \`__N\` suffix (C2PA 2.4 §18.16.1). */
    public static function isIngredientLabel(string $label): bool
    {
        return self::labelVersion($label) !== null;
    }

    /**
     * The version an ingredient label names — 1 for \`c2pa.ingredient\`, N for \`c2pa.ingredient.vN\` — or null
     * when the label is not an ingredient's at all.
     */
    private static function labelVersion(string $label): ?int
    {
        $base = explode('__', $label, 2)[0];
        if ($base === 'c2pa.ingredient') {
            return 1;
        }
        if (preg_match('/^c2pa\\.ingredient\\.v([1-9][0-9]*)$/', $base, $m) === 1) {
            return (int) $m[1];
        }

        return null;
    }

    /** @throws ManifestException assertion.ingredient.malformed, with the assertion's absolute url */
    public static function fromAssertion(string $manifestLabel, Assertion $assertion): self
    {
        $url = sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $manifestLabel, $assertion->label);
        $version = self::labelVersion($assertion->label);
        $fail = static function (string $message) use ($url): never {
            throw new ManifestException($message, StatusCode::AssertionIngredientMalformed, null, $url);
        };
        if ($version === null) {
            $fail(sprintf('%s is not an ingredient assertion', $assertion->label));
        }
        if ($version > 3) {
            // c2pa-rs: "Ingredient version to new" (exit 1); the reader of a v4 assertion cannot know its rules
            $fail(sprintf('ingredient assertion %s: version %d is not one this verifier reads (1, 2 or 3)', $assertion->label, $version));
        }
        $data = $assertion->data;
        if (! is_array($data) || array_is_list($data)) {
            $fail(sprintf('ingredient assertion %s: the content is not a CBOR map', $assertion->label));
        }
        /** @var array<string, mixed> $data */
        $text = static function (string $field) use ($data, $fail, $assertion): ?string {
            $value = $data[$field] ?? null;
            if ($value === null) {
                return null;
            }
            if (! is_string($value)) {
                $fail(sprintf('ingredient assertion %s: %s is %s, not text', $assertion->label, $field, get_debug_type($value)));
            }

            return $value;
        };
        $hashedUri = static function (string $field) use ($data, $fail, $assertion): ?HashedUri {
            $value = $data[$field] ?? null;
            if ($value === null) {
                return null;
            }
            if (! is_array($value) || ! isset($value['url']) || ! is_string($value['url'])) {
                $fail(sprintf('ingredient assertion %s: %s is not a hashed URI with a url', $assertion->label, $field));
            }
            /** @var array<string, mixed> $value */
            if (! ($value['hash'] ?? null) instanceof CborBytes) {
                $fail(sprintf('ingredient assertion %s: %s: hash is %s, not a byte string', $assertion->label, $field, get_debug_type($value['hash'] ?? null)));
            }
            $alg = $value['alg'] ?? null;
            if ($alg !== null && ! is_string($alg)) {
                $fail(sprintf('ingredient assertion %s: %s: alg is not text', $assertion->label, $field));
            }
            /** @var CborBytes $hash */
            $hash = $value['hash'];
            /** @var string $uri */
            $uri = $value['url'];

            return new HashedUri($uri, $hash, $alg);
        };

        // the relationship: required in every version, one of the three (C2PA 2.4 §15.11.3.2)
        if (! array_key_exists('relationship', $data)) {
            $fail(sprintf('ingredient assertion %s: relationship is missing', $assertion->label));
        }
        $relationshipValue = $data['relationship'];
        if (! is_string($relationshipValue)) {
            $fail(sprintf('ingredient assertion %s: relationship is %s, not text', $assertion->label, get_debug_type($relationshipValue)));
        }
        /** @var string $relationshipValue */
        $relationship = Relationship::tryFrom($relationshipValue);
        if ($relationship === null) {
            $fail(sprintf('ingredient assertion %s: relationship %s is not parentOf, componentOf or inputTo', $assertion->label, $relationshipValue));
        }

        // the fields the CDDL requires per version (c2pa-rs Ingredient::from_assertion)
        $title = $text('dc:title');
        $format = $text('dc:format');
        $instanceId = $text('instanceID');
        foreach ($version === 1 ? ['dc:title' => $title, 'dc:format' => $format, 'instanceID' => $instanceId] : ($version === 2 ? ['dc:title' => $title, 'dc:format' => $format] : []) as $field => $value) {
            if ($value === null) {
                $fail(sprintf('ingredient assertion %s (version %d): %s is missing', $assertion->label, $version, $field));
            }
        }

        $manifest = $hashedUri($version === 3 ? 'activeManifest' : 'c2pa_manifest');
        $claimSignature = $version === 3 ? $hashedUri('claimSignature') : null;
        $digitalSourceType = $text('digitalSourceType');
        if ($manifest !== null && $digitalSourceType !== null) {
            // §18.16.12.3: "An ingredient assertion shall not contain both an activeManifest and a
            // digitalSourceType key" — the signer would be saying two different things about the source.
            // c2pa-rs has no rule for the pair; this verifier follows the specification (docs/comparison.md)
            $fail(sprintf('ingredient assertion %s: a manifest reference and a digitalSourceType together', $assertion->label));
        }

        $validationStatus = null;
        $validationResults = null;
        if ($version === 3) {
            $recorded = $data['validationResults'] ?? null;
            if ($recorded !== null && (! is_array($recorded) || array_is_list($recorded))) {
                $fail(sprintf('ingredient assertion %s: validationResults is not a map', $assertion->label));
            }
            if ($recorded !== null) {
                /** @var array<string, mixed> $map */
                $map = $recorded;
                $validationResults = $map;
            }
            if ($manifest !== null && $validationResults === null) {
                // §15.11.3.3 and c2pa-rs: "ingredient V3 must have validation results"
                $fail(sprintf('ingredient assertion %s: a v3 assertion with an activeManifest must record validationResults', $assertion->label));
            }
        } else {
            $recorded = $data['validationStatus'] ?? null;
            if ($recorded !== null && (! is_array($recorded) || ! array_is_list($recorded))) {
                $fail(sprintf('ingredient assertion %s: validationStatus is not a list', $assertion->label));
            }
            /** @var list<mixed>|null $recorded */
            $validationStatus = $recorded;
        }

        return new self(
            $assertion->label,
            $url,
            $version,
            $relationship,
            $title,
            $format,
            $text('documentID'),
            $instanceId,
            $manifest,
            $claimSignature,
            $hashedUri('thumbnail'),
            $validationStatus,
            $validationResults,
            $digitalSourceType,
            $data,
        );
    }

    /** The label of the manifest this ingredient names, or null when it names none. */
    public function manifestLabel(): ?string
    {
        if ($this->manifest === null) {
            return null;
        }
        $path = preg_replace('~^self#jumbf=/c2pa/~', '', $this->manifest->url) ?? '';

        return explode('/', $path)[0];
    }
}
`,"src/Manifest/Manifest.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Cbor\\CborBudget;
use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Cbor\\CborDecoder;
use Provemark\\C2paVerifier\\Cbor\\CborException;
use Provemark\\C2paVerifier\\Jumbf\\ContentBox;
use Provemark\\C2paVerifier\\Jumbf\\JumbfParser;
use Provemark\\C2paVerifier\\Jumbf\\Superbox;
use Provemark\\C2paVerifier\\Jumbf\\UnknownBox;
use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * One C2PA manifest (SPEC-007): its claim, its assertions decoded by
 * content type, and the boxes M3 and M4 will work on. Built from the
 * manifest superbox; every reference the claim makes is resolved here and
 * refused if it points nowhere, outside the assertion store, or at an
 * unknown box.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class Manifest
{
    private const URI_PREFIX = 'self#jumbf=';

    /**
     * @param  array<string, Assertion>  $assertions  by label, in store order; $assertionStore is the superbox itself, unknown boxes included (SPEC-007 amendment 2, for SPEC-011)
     */
    private function __construct(
        public string $label,
        public Claim $claim,
        public array $assertions,
        public Superbox $box,
        public Superbox $assertionStore,
        private Superbox $claimBox,
        private Superbox $signatureBox,
        /** A c2um box: it adds assertions without touching the content, and its rules differ (SPEC-022, C2PA 2.4 §11.2.3). */
        public bool $isUpdateManifest = false,
        /**
         * The absolute URIs of this manifest's assertions that a claim in the store declares redacted
         * (SPEC-035; C2PA 2.4 §6.8). A reference among them may name a box that is gone.
         *
         * @var list<string>
         */
        public array $redacted = [],
    ) {}

    /** One manifest on its own: the redactions its own claim declares are the only ones it knows. */
    public static function fromBox(Superbox $box): self
    {
        $manifest = self::read($box);

        return $manifest->withRedactions(self::redactionsOf([$manifest]));
    }

    /**
     * Every absolute entry of the claims' \`redacted_assertions\`, in order and once each. A relative
     * entry names no manifest; c2pa-rs neither resolves it nor lets it excuse a missing box
     * (SPEC-035 amendment 2), and neither does this reader.
     *
     * @param  list<self>  $manifests
     * @return list<string>
     */
    public static function redactionsOf(array $manifests): array
    {
        $redactions = [];
        foreach ($manifests as $manifest) {
            $entries = $manifest->claim->other['redacted_assertions'] ?? [];
            foreach (is_array($entries) ? $entries : [] as $entry) {
                if (is_string($entry) && str_starts_with($entry, self::URI_PREFIX.'/c2pa/')) {
                    $redactions[] = $entry;
                }
            }
        }

        return array_values(array_unique($redactions));
    }

    /**
     * This manifest with the store's redactions that name it, its references checked against them.
     *
     * @param  list<string>  $redactions  every absolute entry in the store (redactionsOf())
     */
    public function withRedactions(array $redactions): self
    {
        $prefix = sprintf('%s/c2pa/%s/', self::URI_PREFIX, $this->label);
        $mine = array_values(array_filter($redactions, static fn (string $uri): bool => str_starts_with($uri, $prefix)));
        $manifest = new self($this->label, $this->claim, $this->assertions, $this->box, $this->assertionStore, $this->claimBox, $this->signatureBox, $this->isUpdateManifest, $mine);
        $manifest->checkReferences();

        return $manifest;
    }

    /** A URI of this manifest in its absolute form: a relative one is read against this manifest (§14.2). */
    public function absoluteUri(string $uri): string
    {
        if (! str_starts_with($uri, self::URI_PREFIX) || str_starts_with($uri, self::URI_PREFIX.'/')) {
            return $uri;
        }

        return sprintf('%s/c2pa/%s/%s', self::URI_PREFIX, $this->label, substr($uri, strlen(self::URI_PREFIX)));
    }

    /** Whether a reference names an assertion the store declares redacted. */
    public function isRedacted(string $uri): bool
    {
        return in_array($this->absoluteUri($uri), $this->redacted, true);
    }

    /** The manifest as read, its references not yet checked: ManifestStore needs every claim before it can check any. */
    public static function read(Superbox $box, ?CborBudget $budget = null): self
    {
        $budget ??= new CborBudget;
        $label = $box->description->label;
        $manifestUrl = sprintf('self#jumbf=/c2pa/%s', $label);
        $assertionStore = self::theOne($box, JumbfParser::UUID_ASSERTION_STORE, 'c2pa.assertions', 'assertion store', $label, StatusCode::ClaimMalformed, $manifestUrl);
        $claims = array_values(array_filter($box->superboxes(), static fn (Superbox $child): bool => $child->description->uuid === JumbfParser::UUID_CLAIM));
        if (count($claims) !== 1) {
            throw new ManifestException(
                sprintf('manifest %s: %d claim boxes, expected one', $label, count($claims)),
                count($claims) === 0 ? StatusCode::ClaimMissing : StatusCode::ClaimMultiple,
                null,
                count($claims) === 0 ? $manifestUrl : sprintf('%s/%s', $manifestUrl, $claims[0]->description->label),
            );
        }
        $claimBox = $claims[0];
        $claimUrl = sprintf('%s/%s', $manifestUrl, $claimBox->description->label);
        $signatureUrl = sprintf('%s/c2pa.signature', $manifestUrl);
        $signatureBox = self::theOne($box, JumbfParser::UUID_CLAIM_SIGNATURE, 'c2pa.signature', 'signature box', $label, StatusCode::ClaimSignatureMissing, $signatureUrl);

        $claim = self::at($claimUrl, static function () use ($claimBox, $label, $budget): Claim {
            $version = match ($claimBox->description->label) {
                'c2pa.claim' => 1,
                'c2pa.claim.v2' => 2,
                default => throw new ManifestException(sprintf(
                    'claim label %s at offset %d is neither c2pa.claim nor c2pa.claim.v2',
                    $claimBox->description->label,
                    $claimBox->description->offset,
                ), StatusCode::ClaimMalformed),
            };
            $claimData = self::singleCbor($claimBox, 'claim box', $label, StatusCode::ClaimMalformed);
            $claimMap = self::decodeCbor($claimData, sprintf('manifest %s: the claim', $label), $budget, StatusCode::ClaimCborInvalid);
            if (! is_array($claimMap) || array_is_list($claimMap)) {
                throw new ManifestException(sprintf('manifest %s: the claim is not a CBOR map', $label), StatusCode::ClaimCborInvalid);
            }

            return Claim::fromMap($version, $claimMap);
        });
        self::at($signatureUrl, static fn (): string => self::singleCbor($signatureBox, 'signature box', $label, StatusCode::ClaimSignatureMissing));

        $assertions = [];
        foreach ($assertionStore->superboxes() as $assertionBox) {
            $assertionLabel = $assertionBox->description->label;
            $data = self::at(sprintf('%s/c2pa.assertions/%s', $manifestUrl, $assertionLabel), static fn (): mixed => self::assertionData($assertionBox, $budget));
            $assertions[$assertionLabel] = new Assertion($assertionLabel, $assertionBox, $data);
        }

        return new self($label, $claim, $assertions, $box, $assertionStore, $claimBox, $signatureBox, $box->description->uuid === JumbfParser::UUID_UPDATE_MANIFEST);
    }

    /** The bytes of the claim's cbor box: what the signature covers (M3). */
    public function claimBytes(): string
    {
        return $this->claimBox->contentBoxes()[0]->data;
    }

    /** The bytes of the signature's cbor box: the COSE_Sign1 (M3). */
    public function signatureBytes(): string
    {
        return $this->signatureBox->contentBoxes()[0]->data;
    }

    /**
     * The superbox a JUMBF URI names: \`self#jumbf=/c2pa/<manifest>/…\` from
     * the store's root, anything else relative to this manifest; each
     * segment a superbox label.
     */
    public function resolve(string $uri): Superbox
    {
        if (! str_starts_with($uri, self::URI_PREFIX)) {
            throw new ManifestException(sprintf('URI %s does not start with %s', $uri, self::URI_PREFIX), StatusCode::AssertionMissing);
        }
        $path = substr($uri, strlen(self::URI_PREFIX));
        if (str_starts_with($path, '/c2pa/')) {
            $segments = explode('/', substr($path, strlen('/c2pa/')));
            $first = array_shift($segments);
            if ($first !== $this->label) {
                throw new ManifestException(sprintf('URI %s refers to another manifest (%s); cross-manifest references are not supported yet', $uri, (string) $first), StatusCode::AssertionMissing);
            }
        } else {
            $segments = explode('/', $path);
        }

        $box = $this->box;
        foreach ($segments as $segment) {
            $next = $box->child($segment);
            if ($next === null) {
                foreach ($box->children as $child) {
                    if ($child instanceof UnknownBox && $child->label === $segment) {
                        throw new ManifestException(sprintf('URI %s resolves to an unknown box (UUID %s)', $uri, (string) $child->uuid), StatusCode::AssertionMissing);
                    }
                }
                throw new ManifestException(sprintf('URI %s does not resolve to a box (no %s)', $uri, $segment), StatusCode::AssertionMissing);
            }
            $box = $next;
        }

        return $box;
    }

    /** Every reference in the claim must land where the spec says (SPEC-007 AC4, AC10). */
    private function checkReferences(): void
    {
        try {
            $signatureTarget = $this->resolve($this->claim->signatureUri);
        } catch (ManifestException $e) {
            throw new ManifestException($e->getMessage(), StatusCode::ClaimSignatureMissing, $e);
        }
        if ($signatureTarget !== $this->signatureBox) {
            throw new ManifestException(sprintf('manifest %s: signature URI %s does not name the signature box', $this->label, $this->claim->signatureUri), StatusCode::ClaimSignatureMissing);
        }
        foreach ([...$this->claim->createdAssertions, ...$this->claim->gatheredAssertions] as $reference) {
            // SPEC-040: an entry naming another manifest's assertion store (C2PA 2.4 §15.10.3.1), whether
            // or not that manifest is in the store, on the entry as written — as c2pa-rs's assertion loop
            if (preg_match('#\\A'.preg_quote(self::URI_PREFIX, '#').'/c2pa/([^/]+)/#', $reference->url, $m) === 1 && $m[1] !== $this->label) {
                throw new ManifestException(sprintf('assertion reference to external assertion store: %s', $reference->url), StatusCode::AssertionOutsideManifest, null, $reference->url);
            }
            try {
                $target = $this->resolve($reference->url);
            } catch (ManifestException $e) {
                if ($this->isRedacted($reference->url)) {
                    continue;   // redacted and removed: a valid form of redaction (SPEC-035; §15.11.3.3.1)
                }
                throw $e;
            }
            if (! in_array($target, $this->assertionStore->superboxes(), true)) {
                throw new ManifestException(sprintf('URI %s is not in the assertion store', $reference->url), StatusCode::AssertionMissing);
            }
        }
    }

    /**
     * Runs $build; a ManifestException thrown inside leaves with the URI of the
     * box being read, unless it already names one (SPEC-007 amendment 3).
     *
     * @template T
     *
     * @param  callable(): T  $build
     * @return T
     */
    private static function at(string $url, callable $build): mixed
    {
        try {
            return $build();
        } catch (ManifestException $e) {
            throw $e->at($url);
        }
    }

    /** The one child superbox with this UUID and label. */
    private static function theOne(Superbox $box, string $uuid, string $label, string $what, string $manifestLabel, StatusCode $status, string $url): Superbox
    {
        $matches = array_values(array_filter(
            $box->superboxes(),
            static fn (Superbox $child): bool => $child->description->uuid === $uuid && $child->description->label === $label,
        ));
        if (count($matches) === 0) {
            throw new ManifestException(sprintf('manifest %s: no %s (%s)', $manifestLabel, $what, $label), $status, null, $url);
        }
        if (count($matches) > 1) {
            throw new ManifestException(sprintf('manifest %s: %d %ses (%s), expected one', $manifestLabel, count($matches), $what, $label), $status, null, $url);
        }

        return $matches[0];
    }

    /** The data of a superbox that must hold exactly one cbor content box (C2PA 2.4 §11.1.4.4). */
    private static function singleCbor(Superbox $box, string $what, string $manifestLabel, StatusCode $status): string
    {
        $content = $box->contentBoxes();
        if (count($content) !== 1 || $content[0]->type !== 'cbor') {
            throw new ManifestException(sprintf(
                'manifest %s: the %s holds %d content boxes, expected one cbor box',
                $manifestLabel,
                $what,
                count($content),
            ), $status);
        }

        return $content[0]->data;
    }

    private static function decodeCbor(string $data, string $what, CborBudget $budget, StatusCode $status = StatusCode::GeneralError): mixed
    {
        try {
            return (new CborDecoder)->decode($data, $budget);
        } catch (CborException $e) {
            throw new ManifestException(sprintf('%s: invalid CBOR: %s', $what, $e->getMessage()), $status, $e);
        }
    }

    /** An assertion's data by the kind of content box it holds: one kind, one box. */
    private static function assertionData(Superbox $box, CborBudget $budget): mixed
    {
        $label = $box->description->label;
        $byType = [];
        foreach ($box->contentBoxes() as $content) {
            $byType[$content->type][] = $content;
        }
        $kinds = array_keys($byType);
        if ($kinds === ['cbor']) {
            return self::decodeCbor(self::only($byType['cbor'], $label), sprintf('assertion %s', $label), $budget);
        }
        if ($kinds === ['json']) {
            try {
                return json_decode(self::only($byType['json'], $label), true, 64, JSON_THROW_ON_ERROR);
            } catch (\\JsonException $e) {
                throw new ManifestException(sprintf('assertion %s: invalid JSON: %s', $label, $e->getMessage()), StatusCode::AssertionJsonInvalid, $e);
            }
        }
        if ($kinds === ['bfdb', 'bidb']) {
            return new EmbeddedFile(self::mediaType(self::only($byType['bfdb'], $label), $label), self::only($byType['bidb'], $label));
        }
        if ($kinds === ['uuid']) {
            return new CborBytes(self::only($byType['uuid'], $label));
        }
        throw new ManifestException(sprintf('assertion %s: content boxes of kind %s are not a known assertion shape', $label, $kinds === [] ? '(none)' : implode('+', $kinds)));
    }

    /** @param list<ContentBox> $boxes */
    private static function only(array $boxes, string $label): string
    {
        if (count($boxes) !== 1) {
            throw new ManifestException(sprintf('assertion %s: %d %s boxes, expected one', $label, count($boxes), $boxes[0]->type));
        }

        return $boxes[0]->data;
    }

    /** The media type of an embedded-file description box: a toggles byte, then the type, NUL-terminated. */
    private static function mediaType(string $bfdb, string $label): string
    {
        $end = strpos($bfdb, "\\0", 1);
        if (strlen($bfdb) < 2 || $end === false) {
            throw new ManifestException(sprintf('assertion %s: the embedded-file description has no media type', $label));
        }

        $type = substr($bfdb, 1, $end - 1);

        // SPEC-043 AC3: a media type that is not UTF-8 reads as empty, as c2patool renders it; it goes
        // into the report, which is JSON, and it binds nothing (the assertion's hash covers the box)
        return mb_check_encoding($type, 'UTF-8') ? $type : '';
    }
}
`,"src/Manifest/ManifestException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * Thrown when the boxes and CBOR do not add up to a manifest (SPEC-007
 * AC8–AC14), carrying the C2PA 2.4 §15 code for the fault where it is
 * found (SPEC-007 amendment 1, defined in SPEC-010): claim.missing,
 * claim.multiple, claim.cbor.invalid, claim.malformed,
 * claimSignature.missing, assertion.missing, assertion.json.invalid — and
 * general.error where §15 has no word. Never a partial store. Where the
 * box is known the exception also carries its absolute JUMBF URI
 * (SPEC-007 amendment 3, defined in SPEC-013), so that the Verifier can
 * report the fault where c2patool would.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class ManifestException extends \\RuntimeException
{
    public function __construct(
        string $message,
        public readonly StatusCode $status = StatusCode::GeneralError,
        ?\\Throwable $previous = null,
        public readonly ?string $url = null,
    ) {
        parent::__construct($message, 0, $previous);
    }

    /** The same fault, now with the URI of the box it was found in (kept if it already had one). */
    public function at(string $url): self
    {
        return $this->url === null ? new self($this->getMessage(), $this->status, $this->getPrevious(), $url) : $this;
    }
}
`,"src/Manifest/ManifestGraph.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The graph the ingredient assertions draw over a manifest store
 * (SPEC-020; C2PA 2.4 §15.11.3.3): from the active manifest, depth-first,
 * each manifest entered once, every ingredient assertion visited in claim
 * order — the order c2patool's \`ingredientDeltas\` follow.
 *
 * What the graph alone can say, without a single hash: an ingredient
 * without a manifest reference is \`ingredient.unknownProvenance\` unless
 * it was \`inputTo\`; a reference to a manifest that is not in the store is
 * \`ingredient.manifest.missing\`; an assertion this verifier cannot read
 * is \`assertion.ingredient.malformed\`; a reference that leads back to a
 * manifest on the path is a cycle, and malformed too. Each status carries
 * the URI of the assertion it was found under.
 *
 * Validating the manifests it found — their box hash, signature, chain,
 * timestamp and assertions — is SPEC-021; until then the Verifier still
 * refuses a store with more than one manifest (SPEC-013 amendment 5).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class ManifestGraph
{
    /** The deepest chain of ingredient manifests this verifier walks (c2pa-rs allows 200). */
    public const int MAX_DEPTH = 32;

    /** The most ingredient assertions a store may hold in all (c2pa-rs has no count). */
    public const int MAX_ASSERTIONS = 256;

    /**
     * @param  array<string, list<IngredientAssertion>>  $ingredients  per manifest label, claim order
     * @param  array<string, list<string>>  $referenced  referenced manifest label => the assertion urls naming it
     * @param  list<array{label: string, by: string}>  $missing  references to labels not in the store
     * @param  list<string>  $unreferenced  manifests the walk never reaches ("should be ignored", §15.11.3.3)
     * @param  list<string>  $redactedAssertions  every claim's redacted_assertions, collected (SPEC-021)
     * @param  list<ValidationStatus>  $statuses  each scoped to its ingredient assertion
     * @param  list<string>  $walk  the assertion urls in walk order
     */
    public function __construct(
        public string $active,
        public array $ingredients,
        public array $referenced,
        public array $missing,
        public array $unreferenced,
        public array $redactedAssertions,
        public array $statuses,
        public array $walk,
    ) {}

    /**
     * The graph of a store: every manifest's ingredient assertions decoded, then the walk.
     *
     * An assertion this verifier cannot read becomes a malformed status rather than an exception —
     * the report says what is wrong with which assertion, and the walk does not follow a reference
     * it could not read.
     *
     * @throws ManifestException general.error when a bound is exceeded
     */
    public static function fromStore(ManifestStore $store): self
    {
        $ingredients = [];
        $malformed = [];
        foreach ($store->manifests as $label => $manifest) {
            $ingredients[$label] = [];
            foreach (self::assertionLabels($manifest) as $assertionLabel) {
                if (! IngredientAssertion::isIngredientLabel($assertionLabel)) {
                    continue;
                }
                try {
                    $ingredients[$label][] = IngredientAssertion::fromAssertion($label, $manifest->assertions[$assertionLabel]);
                } catch (ManifestException $e) {
                    $url = $e->url ?? sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $label, $assertionLabel);
                    $malformed[$label][] = new ValidationStatus($e->status, $url, $e->getMessage(), $url);
                }
            }
        }

        return self::fromIngredients($store->active->label, $ingredients, self::redactions($store), $malformed);
    }

    /**
     * The walk itself, over ingredient assertions already decoded — the seam the bounds and cycle
     * criteria are tested through (SPEC-020 AC7).
     *
     * @param  array<string, list<IngredientAssertion>>  $ingredients  per manifest label
     * @param  list<string>  $redactedAssertions
     * @param  array<string, list<ValidationStatus>>  $malformed  per manifest label, in assertion order
     *
     * @throws ManifestException general.error when a bound is exceeded
     */
    public static function fromIngredients(string $active, array $ingredients, array $redactedAssertions, array $malformed = []): self
    {
        $total = array_sum(array_map('count', $ingredients)) + array_sum(array_map('count', $malformed));
        if ($total > self::MAX_ASSERTIONS) {
            throw new ManifestException(sprintf('the store holds %d ingredient assertions; this verifier reads at most %d', $total, self::MAX_ASSERTIONS), StatusCode::GeneralError);
        }

        $referenced = [];
        $missing = [];
        $statuses = [];
        $walk = [];
        $visited = [];

        self::descend($active, 0, [], $ingredients, $malformed, $referenced, $missing, $statuses, $walk, $visited);

        $unreferenced = [];
        foreach (array_keys($ingredients) as $label) {
            if (! array_key_exists($label, $visited)) {
                $unreferenced[] = $label;
            }
        }

        return new self($active, $ingredients, $referenced, $missing, $unreferenced, $redactedAssertions, $statuses, $walk);
    }

    /**
     * One manifest of the walk: its malformed assertions, then its ingredients in claim order, each
     * followed at once into the manifest it names — the order c2pa-rs logs and c2patool prints.
     *
     * @param  list<string>  $path  the manifest labels on the way here, for the cycle rule
     * @param  array<string, list<IngredientAssertion>>  $ingredients
     * @param  array<string, list<ValidationStatus>>  $malformed
     * @param  array<string, list<string>>  $referenced
     * @param  list<array{label: string, by: string}>  $missing
     * @param  list<ValidationStatus>  $statuses
     * @param  list<string>  $walk
     * @param  array<string, true>  $visited
     *
     * @throws ManifestException general.error when the depth bound is exceeded
     */
    private static function descend(string $label, int $depth, array $path, array $ingredients, array $malformed, array &$referenced, array &$missing, array &$statuses, array &$walk, array &$visited): void
    {
        if ($depth > self::MAX_DEPTH) {
            throw new ManifestException(sprintf('the chain of ingredient manifests is deeper than %d', self::MAX_DEPTH), StatusCode::GeneralError);
        }
        $visited[$label] = true;
        $path[] = $label;
        foreach ($malformed[$label] ?? [] as $status) {
            $walk[] = $status->url;
            $statuses[] = $status;
        }
        foreach ($ingredients[$label] ?? [] as $ingredient) {
            $walk[] = $ingredient->url;
            $target = $ingredient->manifestLabel();
            if ($target === null) {
                // no manifest reference: unknown provenance, unless the ingredient was only an input (§15.11.3.3)
                if ($ingredient->relationship !== Relationship::InputTo) {
                    $statuses[] = new ValidationStatus(
                        StatusCode::IngredientUnknownProvenance,
                        $ingredient->url,
                        sprintf('%s: ingredient does not have provenance', $ingredient->title ?? 'no title'),
                        $ingredient->url,
                    );
                }

                continue;
            }
            if (in_array($target, $path, true)) {
                // a reference back into the path: the tree is not a tree (c2pa-rs: "ingredient cannot be cyclic")
                $statuses[] = new ValidationStatus(
                    StatusCode::AssertionIngredientMalformed,
                    $ingredient->url,
                    sprintf('ingredient assertion %s: the reference to %s is cyclic', $ingredient->label, $target),
                    $ingredient->url,
                );

                continue;
            }
            if (! array_key_exists($target, $ingredients)) {
                $missing[] = ['label' => $target, 'by' => $ingredient->url];
                $statuses[] = new ValidationStatus(StatusCode::IngredientManifestMissing, $target, 'ingredient not found', $ingredient->url);

                continue;
            }
            $referenced[$target][] = $ingredient->url;
            if (! array_key_exists($target, $visited)) {
                self::descend($target, $depth + 1, $path, $ingredients, $malformed, $referenced, $missing, $statuses, $walk, $visited);
            }
        }
    }

    /**
     * The labels of a manifest's assertions in claim order — created first, then gathered, then any the
     * claim does not name (SPEC-011 refuses those; the graph still sees them).
     *
     * @return list<string>
     */
    public static function assertionLabels(Manifest $manifest): array
    {
        $labels = [];
        foreach ([...$manifest->claim->createdAssertions, ...$manifest->claim->gatheredAssertions] as $uri) {
            $label = substr($uri->url, (int) strrpos($uri->url, '/') + 1);
            if (array_key_exists($label, $manifest->assertions) && ! in_array($label, $labels, true)) {
                $labels[] = $label;
            }
        }
        foreach (array_keys($manifest->assertions) as $label) {
            if (! in_array($label, $labels, true)) {
                $labels[] = $label;
            }
        }

        return $labels;
    }

    /** @return list<string> every claim's redacted_assertions, in store order */
    private static function redactions(ManifestStore $store): array
    {
        $redactions = [];
        foreach ($store->manifests as $manifest) {
            foreach ((array) ($manifest->claim->other['redacted_assertions'] ?? []) as $uri) {
                if (is_string($uri)) {
                    $redactions[] = $uri;
                }
            }
        }

        return $redactions;
    }
}
`,"src/Manifest/ManifestStore.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Cbor\\CborBudget;
use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Cbor\\CborException;
use Provemark\\C2paVerifier\\Cbor\\CborTag;
use Provemark\\C2paVerifier\\Jumbf\\JumbfParser;
use Provemark\\C2paVerifier\\Jumbf\\Superbox;
use Provemark\\C2paVerifier\\Report\\StatusCode;

/**
 * The manifest store as meaning (SPEC-007): its manifests by label, the
 * active one — the last in the store (C2PA 2.4 §11.1.4.2) — and a JSON
 * view in the shape c2patool prints, restricted to what M2 knows, so that
 * the sister library's ManifestStoreParser reads it.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class ManifestStore
{
    /**
     * @param  array<string, Manifest>  $manifests  by label, in store order
     */
    private function __construct(
        public array $manifests,
        public Manifest $active,
    ) {}

    public static function fromTree(Superbox $root): self
    {
        // every manifest read first, because a claim may redact an assertion of any other (SPEC-035
        // open question 1: the union of every claim's list); a manifest that cannot be read is
        // reported where it stands in the store, after the references of the ones before it
        // one CBOR budget for the whole store: what is decoded here stays in memory (SPEC-043 AC1)
        $budget = new CborBudget;
        $read = [];
        foreach ($root->superboxes() as $child) {
            if (in_array($child->description->uuid, [JumbfParser::UUID_MANIFEST, JumbfParser::UUID_UPDATE_MANIFEST], true)) {
                try {
                    $read[] = Manifest::read($child, $budget);
                } catch (ManifestException|CborException $e) {
                    $read[] = $e;
                    break;
                }
            }
        }
        $redactions = Manifest::redactionsOf(array_values(array_filter($read, static fn (Manifest|ManifestException|CborException $m): bool => $m instanceof Manifest)));
        $manifests = [];
        foreach ($read as $manifest) {
            if (! $manifest instanceof Manifest) {
                throw $manifest;
            }
            $manifest = $manifest->withRedactions($redactions);
            $manifests[$manifest->label] = $manifest;
        }
        if ($manifests === []) {
            throw new ManifestException('the store holds no manifest', StatusCode::ClaimMissing);
        }

        return new self($manifests, $manifests[array_key_last($manifests)]);
    }

    /**
     * c2patool's shape, without the fields the crypto layers fill
     * (\`signature_info\`, \`validation_*\`): \`active_manifest\` and, per
     * manifest, the claim's generator, title, instance id, the thumbnail
     * and the assertions — hard binding and thumbnail left out of the list,
     * as c2patool leaves them; labels as stored.
     *
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        $manifests = [];
        foreach ($this->manifests as $label => $manifest) {
            $manifests[$label] = self::manifestArray($manifest, $this->manifests);
        }

        return ['active_manifest' => $this->active->label, 'manifests' => $manifests];
    }

    public function toJson(): string
    {
        return json_encode($this->toArray(), JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR);
    }

    /**
     * @param  array<string, Manifest>  $all  every manifest in the store, for the ingredients' references
     * @return array<string, mixed>
     */
    private static function manifestArray(Manifest $manifest, array $all = []): array
    {
        $claim = $manifest->claim;
        $out = [];
        // rendered through plain() like every value: a generator's icon is a hashed URI whose
        // hash is a byte string (OpenAI), and raw bytes would make toJson() throw (amendment 5)
        if ($claim->version === 1) {
            $out['claim_generator'] = $claim->claimGenerator;
            if ($claim->claimGeneratorInfo !== null) {
                $out['claim_generator_info'] = self::plain($claim->claimGeneratorInfo);
            }
        } else {
            $out['claim_generator_info'] = self::plain($claim->claimGeneratorInfo);
        }
        if ($claim->title !== null) {
            $out['title'] = $claim->title;
        }
        if ($claim->format !== null) {
            $out['format'] = $claim->format;
        }
        $out['instance_id'] = $claim->instanceId;

        $ingredients = self::ingredientsArray($manifest, $all);
        if ($ingredients !== []) {
            $out['ingredients'] = $ingredients;
        }

        $assertions = [];
        foreach ($manifest->assertions as $label => $assertion) {
            // the ingredients and their thumbnails are rendered above, as c2patool does, and left out here
            if (IngredientAssertion::isIngredientLabel($label) || str_starts_with($label, 'c2pa.thumbnail.ingredient')) {
                continue;
            }
            if ($assertion->data instanceof EmbeddedFile && str_starts_with($label, 'c2pa.thumbnail.claim')) {
                $out['thumbnail'] = [
                    'format' => $assertion->data->format,
                    'identifier' => sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $manifest->label, $label),
                ];

                continue;
            }
            if (str_starts_with($label, 'c2pa.hash.')) {
                continue;
            }
            $assertions[] = ['label' => $label, 'data' => self::plain($assertion->data)];
        }
        $out['assertions'] = $assertions;
        $out['label'] = $manifest->label;
        $out['claim_version'] = $claim->version;

        return $out;
    }

    /**
     * The manifest's ingredients as c2patool prints them (SPEC-020): in claim order, each with the
     * fields it carries and, where it names one, the manifest it brought along. An assertion this
     * verifier cannot read is left out of the rendering — the report says so as a failure instead.
     *
     * @param  array<string, Manifest>  $all  every manifest in the store
     * @return list<array<string, mixed>>
     */
    private static function ingredientsArray(Manifest $manifest, array $all = []): array
    {
        $out = [];
        foreach (ManifestGraph::assertionLabels($manifest) as $label) {
            if (! IngredientAssertion::isIngredientLabel($label)) {
                continue;
            }
            try {
                $ingredient = IngredientAssertion::fromAssertion($manifest->label, $manifest->assertions[$label]);
            } catch (ManifestException) {
                continue;
            }
            $entry = [];
            foreach (['title' => $ingredient->title, 'format' => $ingredient->format, 'document_id' => $ingredient->documentId, 'instance_id' => $ingredient->instanceId] as $key => $value) {
                if ($value !== null) {
                    $entry[$key] = $value;
                }
            }
            if ($ingredient->thumbnail !== null) {
                // the thumbnail may live in this manifest (a relative URI) or in the ingredient's own
                // (an absolute one, as c2pa-rs writes since 2023) — c2patool prints it where it is
                $identifier = str_starts_with($ingredient->thumbnail->url, 'self#jumbf=/')
                    ? $ingredient->thumbnail->url
                    : sprintf('self#jumbf=/c2pa/%s/%s', $manifest->label, substr($ingredient->thumbnail->url, strlen('self#jumbf=')));
                $path = explode('/c2pa.assertions/', substr($identifier, strlen('self#jumbf=/c2pa/')), 2);
                $owner = $all[$path[0]] ?? $manifest;
                $data = $owner->assertions[$path[1] ?? '']->data ?? null;
                $entry['thumbnail'] = [
                    'format' => $data instanceof EmbeddedFile ? $data->format : 'application/octet-stream',
                    'identifier' => $identifier,
                ];
            }
            $entry['relationship'] = $ingredient->relationship->value;
            $referenced = $ingredient->manifestLabel();
            if ($referenced !== null) {
                $entry['active_manifest'] = $referenced;
            }
            if ($ingredient->validationStatus !== null && $ingredient->validationStatus !== []) {
                $entry['validation_status'] = self::plain($ingredient->validationStatus);
            }
            if ($ingredient->validationResults !== null) {
                $entry['validation_results'] = self::plain($ingredient->validationResults);
            }
            if (isset($ingredient->data['metadata'])) {
                $entry['metadata'] = self::plain($ingredient->data['metadata']);
            }
            // manifest_data names the manifest carried along; c2patool leaves it out when the label
            // is not in the store at all (adobe-20220124-E-clm-CAICAI points at a manifest that is not)
            if ($referenced !== null && array_key_exists($referenced, $all)) {
                $entry['manifest_data'] = ['format' => 'application/c2pa', 'identifier' => $referenced];
            }
            $entry['label'] = $ingredient->label;
            $out[] = $entry;
        }

        return $out;
    }

    /** Decoded data as JSON-able PHP: bytes as base64 (as c2patool prints them), tags as their content. */
    private static function plain(mixed $value): mixed
    {
        if ($value instanceof CborBytes) {
            return base64_encode($value->bytes);
        }
        if ($value instanceof CborTag) {
            return self::plain($value->value);
        }
        if ($value instanceof EmbeddedFile) {
            return ['format' => $value->format, 'bytes' => base64_encode($value->bytes)];
        }
        if (is_array($value)) {
            return array_map(self::plain(...), $value);
        }

        return $value;
    }
}
`,"src/Manifest/Relationship.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

/**
 * How an ingredient stands to the asset that used it (C2PA 2.4 §18.16.3):
 * \`parentOf\` — the asset is derived from it (also the update manifest's
 * link); \`componentOf\` — the asset is composed of it; \`inputTo\` — it was
 * fed to a process. Any other value is \`assertion.ingredient.malformed\`
 * (§15.11.3.2).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
enum Relationship: string
{
    case ParentOf = 'parentOf';
    case ComponentOf = 'componentOf';
    case InputTo = 'inputTo';
}
`,"src/Manifest/UpdateManifestCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Manifest;

use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The rules an update manifest lives under (SPEC-022; C2PA 2.4 §11.2.3),
 * and the one rule §15.11 puts on a standard manifest's parents.
 *
 * An update manifest adds assertions without touching the content: it
 * therefore carries no hard binding and no thumbnail, its actions may
 * only be \`c2pa.edited.metadata\`, \`c2pa.opened\`, \`c2pa.published\` or
 * \`c2pa.redacted\`, and it names exactly one ingredient, \`parentOf\`, the
 * manifest it updates. A standard manifest may have at most one
 * \`parentOf\` ingredient — an asset is derived from one thing.
 *
 * Where the asset's own bytes are bound is a question of the same shape:
 * \`bindingManifest()\` answers it by walking the \`parentOf\` chain (§15.12).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class UpdateManifestCheck
{
    /** @var list<string> */
    public const array ALLOWED_ACTIONS = ['c2pa.edited.metadata', 'c2pa.opened', 'c2pa.published', 'c2pa.redacted'];

    /**
     * Every manifest in the store, each rule of §11.2.3 with c2pa-rs's code. A status for a manifest
     * that is not the active one is scoped to the ingredient assertion that named it (SPEC-021).
     *
     * @param  array<string, list<IngredientAssertion>>  $ingredients  per manifest label, from the graph
     * @param  array<string, string>  $scopes  manifest label => the assertion url that named it
     * @return list<ValidationStatus>
     */
    public function check(ManifestStore $store, array $ingredients, array $scopes = []): array
    {
        $statuses = [];
        foreach ($store->manifests as $label => $manifest) {
            $list = $ingredients[$label] ?? [];
            $parents = 0;
            foreach ($list as $ingredient) {
                $parents += $ingredient->relationship === Relationship::ParentOf ? 1 : 0;
            }
            $actions = [];
            $labels = [];
            foreach ($manifest->assertions as $assertionLabel => $assertion) {
                $labels[] = $assertionLabel;
                if (! ActionsCheck::isActionsLabel($assertionLabel) || ! is_array($assertion->data)) {
                    continue;
                }
                foreach ((array) ($assertion->data['actions'] ?? []) as $action) {
                    if (is_array($action) && isset($action['action']) && is_string($action['action'])) {
                        $actions[] = $action['action'];
                    }
                }
            }
            $url = sprintf('self#jumbf=/c2pa/%s/%s', $label, $manifest->claim->version === 2 ? 'c2pa.claim.v2' : 'c2pa.claim');
            foreach (self::rules($manifest->isUpdateManifest, $labels, $actions, count($list), $parents) as $status) {
                $statuses[] = new ValidationStatus($status->code, $url, $status->explanation, $label === $store->active->label ? null : ($scopes[$label] ?? null));
            }
        }

        return $statuses;
    }

    /**
     * The rules themselves, on what they need and nothing more — the seam a criterion with no fixture
     * is tested through (SPEC-022 AC4d). The returned statuses carry the explanation; \`check()\` puts
     * the url and the scope on them.
     *
     * @param  list<string>  $assertionLabels  every assertion label of the manifest
     * @param  list<string>  $actions  every action of every actions assertion, in order
     * @param  int  $ingredients  how many ingredient assertions the manifest has
     * @param  int  $parents  how many of them are parentOf
     * @return list<ValidationStatus>
     */
    public static function rules(bool $isUpdateManifest, array $assertionLabels, array $actions, int $ingredients, int $parents): array
    {
        $statuses = [];
        $say = static function (StatusCode $code, string $explanation) use (&$statuses): void {
            $statuses[] = new ValidationStatus($code, '', $explanation);
        };
        if (! $isUpdateManifest) {
            // §15.11: an asset is derived from one thing
            if ($parents > 1) {
                $say(StatusCode::ManifestMultipleParents, sprintf('the manifest names %d ingredients with the relationship parentOf; a manifest has at most one parent (C2PA 2.4 §15.11)', $parents));
            }

            return $statuses;
        }
        foreach ($assertionLabels as $label) {
            if (str_starts_with($label, 'c2pa.hash.')) {
                $say(StatusCode::ManifestUpdateInvalid, sprintf('an update manifest carries the hard binding %s; its content did not change, so the binding of the manifest it updates still holds (C2PA 2.4 §11.2.3)', $label));
            }
            if (str_starts_with($label, 'c2pa.thumbnail.claim')) {
                $say(StatusCode::ManifestUpdateInvalid, sprintf('an update manifest carries the thumbnail %s; a thumbnail implies the content changed (C2PA 2.4 §11.2.3)', $label));
            }
        }
        foreach ($actions as $action) {
            if (! in_array($action, self::ALLOWED_ACTIONS, true)) {
                $say(StatusCode::ManifestUpdateInvalid, sprintf('an update manifest records the action %s; only %s may appear in one (C2PA 2.4 §11.2.3)', $action, implode(', ', self::ALLOWED_ACTIONS)));
            }
        }
        if ($parents === 0) {
            $say(StatusCode::ManifestUpdateWrongParents, 'an update manifest must name exactly one ingredient with the relationship parentOf: the manifest it updates (C2PA 2.4 §11.2.3)');
        } elseif ($ingredients > 1) {
            $say(StatusCode::ManifestUpdateInvalid, sprintf('an update manifest names %d ingredients; it may name exactly one, its parent (C2PA 2.4 §11.2.3)', $ingredients));
        }

        return $statuses;
    }

    /**
     * The manifest whose hard binding covers the asset (C2PA 2.4 §15.12): the active manifest when it
     * is a standard manifest with a \`c2pa.hash.data\`, otherwise the first such manifest up the chain
     * of \`parentOf\` references. Null when the chain reaches none — the caller then says
     * \`claim.hardBindings.missing\`.
     *
     * @param  array<string, list<IngredientAssertion>>  $ingredients  per manifest label, from the graph
     */
    public static function bindingManifest(ManifestStore $store, array $ingredients): ?Manifest
    {
        $label = $store->active->label;
        $seen = [];
        while (! array_key_exists($label, $seen)) {
            $seen[$label] = true;
            $manifest = $store->manifests[$label] ?? null;
            if ($manifest === null) {
                return null;
            }
            // 'c2pa.hash.data' spelled out: the Manifest layer may not depend on Hash (Deptrac)
            if (! $manifest->isUpdateManifest && array_key_exists('c2pa.hash.data', $manifest->assertions)) {
                return $manifest;
            }
            $next = null;
            foreach ($ingredients[$label] ?? [] as $ingredient) {
                if ($ingredient->relationship === Relationship::ParentOf && $ingredient->manifestLabel() !== null) {
                    $next = $ingredient->manifestLabel();
                }
            }
            if ($next === null) {
                return null;
            }
            $label = $next;
        }

        return null;
    }
}
`,"src/Report/StatusCode.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Report;

/**
 * The status codes of C2PA 2.4 §15.2.2 this verifier can emit, verbatim
 * (SPEC-010; SPEC-011 adds the three assertion.hashedURI / undeclared
 * codes, SPEC-012 the six of the data hash, SPEC-014 the two of the
 * signing credential's trust, SPEC-015 signingCredential.expired, SPEC-017 the six of the timestamp, SPEC-018 assertion.action.malformed). No word of our own: a case enters here only
 * through the spec that emits it. Success, informational and failure are
 * the table's three kinds: the successes are claimSignature.validated,
 * assertion.hashedURI.match, assertion.dataHash.match and
 * signingCredential.trusted; the one informational so far is
 * assertion.dataHash.additionalExclusionsPresent.
 */
enum StatusCode: string
{
    case ClaimSignatureValidated = 'claimSignature.validated';
    // SPEC-039: a success, beside every verified signature, as c2patool reports it (C2PA 2.4 §15.8 names it)
    case ClaimSignatureInsideValidity = 'claimSignature.insideValidity';
    case ClaimSignatureMismatch = 'claimSignature.mismatch';
    case ClaimSignatureMissing = 'claimSignature.missing';
    case AlgorithmUnsupported = 'algorithm.unsupported';
    case SigningCredentialInvalid = 'signingCredential.invalid';
    case ClaimMissing = 'claim.missing';
    case ClaimMultiple = 'claim.multiple';
    case ClaimCborInvalid = 'claim.cbor.invalid';
    case ClaimMalformed = 'claim.malformed';
    case AssertionJsonInvalid = 'assertion.json.invalid';
    case AssertionMissing = 'assertion.missing';
    // SPEC-040: a claim entry naming another manifest (§15.10.3.1)
    case AssertionOutsideManifest = 'assertion.outsideManifest';
    case AssertionHashedUriMatch = 'assertion.hashedURI.match';
    case AssertionHashedUriMismatch = 'assertion.hashedURI.mismatch';
    case AssertionUndeclared = 'assertion.undeclared';
    case AssertionActionMalformed = 'assertion.action.malformed';
    case AssertionActionIngredientMismatch = 'assertion.action.ingredientMismatch';   // SPEC-033
    case AssertionActionSoftBindingMissing = 'assertion.action.softBindingMissing';   // SPEC-033
    case AssertionExternalReferenceMalformed = 'assertion.external-reference.malformed';   // SPEC-032
    case AssertionDataHashMatch = 'assertion.dataHash.match';
    case AssertionDataHashMismatch = 'assertion.dataHash.mismatch';
    case AssertionBmffHashMatch = 'assertion.bmffHash.match';
    case AssertionBmffHashMismatch = 'assertion.bmffHash.mismatch';
    case AssertionDataHashMalformed = 'assertion.dataHash.malformed';
    case AssertionDataHashAdditionalExclusionsPresent = 'assertion.dataHash.additionalExclusionsPresent';
    case ClaimHardBindingsMissing = 'claim.hardBindings.missing';
    case AssertionMultipleHardBindings = 'assertion.multipleHardBindings';
    case SigningCredentialTrusted = 'signingCredential.trusted';
    case SigningCredentialUntrusted = 'signingCredential.untrusted';
    case SigningCredentialExpired = 'signingCredential.expired';
    case TimeStampValidated = 'timeStamp.validated';
    case TimeStampTrusted = 'timeStamp.trusted';
    case TimeStampMalformed = 'timeStamp.malformed';
    case TimeStampMismatch = 'timeStamp.mismatch';
    case TimeStampOutsideValidity = 'timeStamp.outsideValidity';
    case TimeStampUntrusted = 'timeStamp.untrusted';
    case IngredientManifestValidated = 'ingredient.manifest.validated';
    case IngredientManifestMismatch = 'ingredient.manifest.mismatch';
    case IngredientManifestMissing = 'ingredient.manifest.missing';
    case IngredientUnknownProvenance = 'ingredient.unknownProvenance';
    case AssertionIngredientMalformed = 'assertion.ingredient.malformed';
    case ManifestUpdateInvalid = 'manifest.update.invalid';
    case ManifestUpdateWrongParents = 'manifest.update.wrongParents';
    case ManifestMultipleParents = 'manifest.multipleParents';
    // SPEC-030: revocation as far as it can be known without a network — the OCSP
    // responses a signer staples into its own signature. The header carrying them is
    // unprotected, so a stapled response may lower trust and never raise it.
    case SigningCredentialOcspRevoked = 'signingCredential.ocsp.revoked';
    case SigningCredentialOcspNotRevoked = 'signingCredential.ocsp.notRevoked';
    case SigningCredentialOcspUnknown = 'signingCredential.ocsp.unknown';
    case SigningCredentialOcspSkipped = 'signingCredential.ocsp.skipped';
    // SPEC-035: redactions (C2PA 2.4 §6.8, §15.10.3.1) and the claim-signature method an ingredient
    // whose manifest lost a redacted assertion is checked by instead of its box hash (§15.11.3.3.1)
    case AssertionActionRedacted = 'assertion.action.redacted';
    case AssertionNotRedacted = 'assertion.notRedacted';
    case AssertionSelfRedacted = 'assertion.selfRedacted';
    case IngredientClaimSignatureValidated = 'ingredient.claimSignature.validated';
    case IngredientClaimSignatureMismatch = 'ingredient.claimSignature.mismatch';
    case IngredientClaimSignatureMissing = 'ingredient.claimSignature.missing';
    // SPEC-036: a redacted hard binding (§6.8; the §15 table, which deprecates assertion.dataHash.redacted for it)
    case AssertionHardBindingRedacted = 'assertion.hardBinding.redacted';
    // SPEC-037: a c2pa.redacted action whose reference resolves to nothing (§15.10.3.2.3)
    case AssertionActionRedactionMismatch = 'assertion.action.redactionMismatch';
    // SPEC-038 (amendment 1): the shape c2pa-rs refuses before it hashes (§15 table)
    case AssertionBmffHashMalformed = 'assertion.bmffHash.malformed';
    // SPEC-038: informational — exclusions beyond the C2PA box, ftyp and mfra (as c2patool 0.28.0 reports it)
    case AssertionBmffHashAdditionalExclusionsPresent = 'assertion.bmffHash.additionalExclusionsPresent';
    case GeneralError = 'general.error';

    public function isSuccess(): bool
    {
        return $this === self::ClaimSignatureValidated || $this === self::ClaimSignatureInsideValidity || $this === self::AssertionHashedUriMatch || $this === self::AssertionDataHashMatch || $this === self::AssertionBmffHashMatch || $this === self::SigningCredentialTrusted
            || $this === self::TimeStampValidated || $this === self::TimeStampTrusted
            || $this === self::IngredientManifestValidated   // SPEC-021: the ingredient's manifest box hashed as recorded
            || $this === self::SigningCredentialOcspNotRevoked;   // SPEC-030 — and its explanation says how little that proves
    }

    public function isInformational(): bool
    {
        // every timeStamp failure is informational: a broken timestamp costs the time, never the verdict (C2PA 2.4 §15; c2pa-rs; SPEC-017)
        return $this === self::AssertionDataHashAdditionalExclusionsPresent
            || $this === self::IngredientUnknownProvenance                 // SPEC-020: an ingredient without a manifest (§15.11.3.3)
            || $this === self::IngredientClaimSignatureValidated           // SPEC-035: as c2patool 0.28.0 records it
            || $this === self::AssertionBmffHashAdditionalExclusionsPresent   // SPEC-038, as its data-hash twin
            || $this === self::TimeStampMalformed || $this === self::TimeStampMismatch || $this === self::TimeStampOutsideValidity || $this === self::TimeStampUntrusted
            // SPEC-030: a response this verifier could not use costs nothing. The header is
            // unsigned, so failing a file over one would let an attacker deny any valid asset
            // by editing a byte no signature covers.
            || $this === self::SigningCredentialOcspSkipped || $this === self::SigningCredentialOcspUnknown;
    }

    public function isFailure(): bool
    {
        return ! $this->isSuccess() && ! $this->isInformational();
    }
}
`,"src/Report/ValidationResult.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Report;

/**
 * The statuses a run of checks produced, the state they add up to, and the
 * names of the checks that ran (SPEC-010). \`toArray()\` is c2patool's shape
 * — \`validation_status\` with the failures and informational statuses (what
 * the sister library reads), \`validation_results.activeManifest\` with all
 * three kinds, \`validation_state\` — plus \`checks_performed\`, the one key
 * c2patool lacks, so that a partial report can never pass for a verdict.
 * An empty report is Invalid: nothing checked is nothing proven.
 */
final readonly class ValidationResult
{
    /**
     * @param  list<ValidationStatus>  $statuses
     * @param  list<string>  $checksPerformed
     */
    private function __construct(
        public array $statuses,
        public ValidationState $state,
        public array $checksPerformed,
    ) {}

    /**
     * @param  list<ValidationStatus>  $statuses
     * @param  list<string>  $checksPerformed
     */
    public static function fromStatuses(array $statuses, array $checksPerformed): self
    {
        // The three states, as c2patool's JSON shows them (SPEC-014, measured in
        // steps 14 and 30): Trusted = a signingCredential.trusted success and no
        // failure; Valid = at least one success and no failure other than
        // signingCredential.untrusted; Invalid otherwise — an empty report and
        // one of informational statuses alone included (SPEC-010/012 AC10).
        // A status scoped to an ingredient counts here like any other, which is
        // c2pa-rs's rule: Valid tolerates an untrusted ingredient signer, Trusted
        // tolerates no failure in any delta (validation_results.rs validation_state).
        $succeeded = false;
        $trusted = false;
        $failed = false;
        foreach ($statuses as $status) {
            $succeeded = $succeeded || $status->code->isSuccess();
            $trusted = $trusted || $status->code === StatusCode::SigningCredentialTrusted;
            $failed = $failed || ($status->code->isFailure() && $status->code !== StatusCode::SigningCredentialUntrusted);
        }
        $untrusted = false;
        foreach ($statuses as $status) {
            $untrusted = $untrusted || $status->code === StatusCode::SigningCredentialUntrusted;
        }

        return new self($statuses, match (true) {
            ! $succeeded || $failed => ValidationState::Invalid,
            $trusted && ! $untrusted => ValidationState::Trusted,
            default => ValidationState::Valid,
        }, $checksPerformed);
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        // a status found while walking an ingredient is grouped under that ingredient assertion's
        // URI in \`ingredientDeltas\`, as c2patool does; the rest is the active manifest's (SPEC-020)
        $active = ['success' => [], 'informational' => [], 'failure' => []];
        /** @var array<string, array{success: list<array<string, mixed>>, informational: list<array<string, mixed>>, failure: list<array<string, mixed>>}> $deltas */
        $deltas = [];
        foreach ($this->statuses as $status) {
            $kind = match (true) {
                $status->code->isSuccess() => 'success',
                $status->code->isInformational() => 'informational',
                default => 'failure',
            };
            if ($status->ingredientUri === null) {
                $active[$kind][] = $status->toArray();

                continue;
            }
            $deltas[$status->ingredientUri] ??= ['success' => [], 'informational' => [], 'failure' => []];
            $deltas[$status->ingredientUri][$kind][] = $status->toArray();
        }
        // the flat list: the active manifest's failures first, then every delta's, in order (c2pa-rs validation_errors)
        $failures = $active['failure'];
        $ingredientDeltas = [];
        foreach ($deltas as $uri => $kinds) {
            $ingredientDeltas[] = ['ingredientAssertionURI' => $uri, 'validationDeltas' => $kinds];
            $failures = [...$failures, ...$kinds['failure']];
        }

        // validation_status holds failures only and is absent when there are
        // none, as c2patool 0.27.22 (SPEC-010 amendment 2, SPEC-013 amendment 3)
        return ($failures === [] ? [] : ['validation_status' => $failures]) + [
            'validation_results' => ['activeManifest' => $active]
                + ($ingredientDeltas === [] ? [] : ['ingredientDeltas' => $ingredientDeltas]),
            'validation_state' => $this->state->value,
            'checks_performed' => $this->checksPerformed,
        ];
    }
}
`,"src/Report/ValidationState.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Report;

/**
 * c2patool's validation_state (SPEC-010). Trusted arrives with M5. Valid
 * means "no failure among the statuses" — and the statuses say which checks
 * produced them; a report is not a verdict until every check is in it.
 */
enum ValidationState: string
{
    case Trusted = 'Trusted';
    case Valid = 'Valid';
    case Invalid = 'Invalid';
}
`,"src/Report/ValidationStatus.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Report;

/**
 * One line of the report (SPEC-010): a code from C2PA 2.4 §15, the JUMBF
 * URI of the box it is about, and our own explanation — offsets, hex, the
 * clause — which is not a second vocabulary: the code is the word, the
 * explanation the reason.
 */
final readonly class ValidationStatus
{
    public function __construct(
        public StatusCode $code,
        public string $url,
        public string $explanation,
        /**
         * The URI of the ingredient assertion this status was found under, when it was
         * found while walking an ingredient (SPEC-020): the report groups such statuses
         * under \`validation_results.ingredientDeltas\`, as c2patool does. Null for the
         * active manifest's own statuses. It is the scope, not part of the status: the
         * rendering below is unchanged.
         */
        public ?string $ingredientUri = null,
    ) {}

    /** @return array{code: string, url: string, explanation: string} */
    public function toArray(): array
    {
        return ['code' => $this->code->value, 'url' => $this->url, 'explanation' => $this->explanation];
    }
}
`,"src/Support/Bytes.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Support;

/**
 * How bytes from a file reach a message: never raw. File contents are
 * untrusted terminal output until proven otherwise (SPEC-004 AC5, SPEC-005
 * AC12). A leaf layer every other layer may use.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class Bytes
{
    /** Upper-case hex pairs separated by single spaces; '(nothing)' for ''. */
    public static function hex(string $bytes): string
    {
        return $bytes === '' ? '(nothing)' : trim(strtoupper(chunk_split(bin2hex($bytes), 2, ' ')));
    }

    /**
     * The longest INTEGER, in octets of magnitude, that is converted to decimal (SPEC-016 amendment 5,
     * SPEC-015 amendment 6). Real files carry at most 20 (RFC 5280); c2patool accepts a 200-octet
     * certificate serial. The conversion is quadratic, so a longer value is refused, not converted.
     */
    public const MAX_DECIMAL_OCTETS = 256;

    /** The octets of magnitude a hex string holds, leading zeros ignored. */
    public static function decimalOctets(string $hex): int
    {
        return intdiv(strlen(ltrim($hex, '0')) + 1, 2);
    }

    /**
     * Base 16 → base 10 on strings: no gmp, no bcmath. Seven hex digits at a time over limbs of 10^9
     * (16^7 · 10^9 stays inside a 64-bit integer); the callers check MAX_DECIMAL_OCTETS first, with
     * their own exception, and this guard only keeps an unchecked caller from hanging.
     *
     * @throws \\LengthException past MAX_DECIMAL_OCTETS
     */
    public static function hexToDecimal(string $hex): string
    {
        $hex = ltrim(strtolower($hex), '0');
        if ($hex === '') {
            return '0';
        }
        if (self::decimalOctets($hex) > self::MAX_DECIMAL_OCTETS) {
            throw new \\LengthException(sprintf('an integer of %d octets; at most %d are converted to decimal', self::decimalOctets($hex), self::MAX_DECIMAL_OCTETS));
        }
        $head = strlen($hex) % 7;
        $chunks = $head > 0 ? [substr($hex, 0, $head), ...str_split(substr($hex, $head), 7)] : str_split($hex, 7);
        $limbs = [0];   // little-endian, base 10^9
        foreach ($chunks as $chunk) {
            $multiplier = 16 ** strlen($chunk);
            $carry = (int) hexdec($chunk);
            foreach ($limbs as $i => $limb) {
                $value = $limb * $multiplier + $carry;
                $limbs[$i] = $value % 1_000_000_000;
                $carry = intdiv($value, 1_000_000_000);
            }
            while ($carry > 0) {
                $limbs[] = $carry % 1_000_000_000;
                $carry = intdiv($carry, 1_000_000_000);
            }
        }
        $decimal = (string) array_pop($limbs);
        foreach (array_reverse($limbs) as $limb) {
            $decimal .= str_pad((string) $limb, 9, '0', STR_PAD_LEFT);
        }

        return $decimal;
    }

    /** Short text (a time string, an OID) as itself when every byte is printable ASCII and it is short, otherwise as hex. */
    public static function printableText(string $bytes): string
    {
        return preg_match('/\\A[\\x20-\\x7E]{0,64}\\z/', $bytes) === 1 ? $bytes : self::hex($bytes);
    }

    /** A four-byte type as text when every byte is printable ASCII, otherwise as hex. */
    public static function printable(string $bytes): string
    {
        return preg_match('/\\A[\\x20-\\x7E]{4}\\z/', $bytes) === 1 ? $bytes : self::hex($bytes);
    }
}
`,"src/Support/MemoryBudget.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Support;

/**
 * What this process may still hold (SPEC-024).
 *
 * A manifest store cannot stream: it is parsed, so it is held whole. The
 * containers declare its length in their own headers, before a byte of it is
 * read, which means a store too large for this host can be refused for the
 * price of reading a length field — and must be. Step 66 measured what happens
 * otherwise: a 63 MiB store on a 128 MB host ends the process with
 *
 *     PHP Fatal error: Allowed memory size of 134217728 bytes exhausted
 *
 * which cannot be caught, so the caller gets no report, no \`validation_state\`
 * and no status code. A verifier that fails closed owes better than a blank 500.
 *
 * Reading \`memory_limit\` makes behaviour depend on the host, which no other rule
 * in this verifier does: the same file can be refused on a small host and read on
 * a large one. That cost was weighed and accepted by the maintainer on
 * 2026-09-22, on the condition that a refusal never reads as a judgement about
 * the file — hence the wording the extractors use, which says the file was not
 * examined.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class MemoryBudget
{
    /**
     * The share of what is still allocatable that a store may claim.
     *
     * Measured (step 67b, PNG, peak = memory_get_peak_usage(true)): a store of
     * 4 MiB peaks at 14 MB, 8 MiB at 22 MB, 16 MiB at 38 MB — about **twice the
     * store plus six megabytes**, because the store is held once as bytes and
     * again as the box tree that quotes it. A quarter therefore leaves roughly
     * half the limit unused at the worst permitted size: on a 64 MB host the
     * largest store allowed is 16 MiB, which peaks at 38 MB; on 32 MB it is
     * 8 MiB, peaking at 22 MB; on 16 MB it is 4 MiB, peaking at 14 MB. The
     * headroom is for everything that comes after the store — the claim, the
     * certificates, the timestamp — which the corpus puts at single megabytes.
     */
    public const DEFAULT_SHARE = 0.25;

    public function __construct(
        private float $share = self::DEFAULT_SHARE,
    ) {}

    /**
     * Bytes this process may still allocate, or null when PHP reports no limit
     * or one in a form this code does not understand.
     *
     * Null is never "nothing": SPEC-024 AC3 requires that an absent or
     * unreadable limit leave only the absolute bound in force. A configuration
     * we failed to parse may not become a reason to refuse a valid file.
     */
    public function remainingBytes(): ?int
    {
        $limit = self::parseLimit(ini_get('memory_limit'));
        if ($limit === null) {
            return null;
        }
        $used = memory_get_usage(true);

        return $limit > $used ? $limit - $used : 0;
    }

    /** Whether a buffer of this many bytes may be allocated without risking the limit. */
    public function allows(int $bytes): bool
    {
        $remaining = $this->remainingBytes();
        if ($remaining === null) {
            return true;
        }

        return (float) $bytes <= $remaining * $this->share;
    }

    /**
     * \`memory_limit\` as bytes: an integer with an optional K, M or G suffix, as
     * PHP's own shorthand notation defines it. -1 is no limit; anything else
     * unrecognised is null, which means the same here.
     */
    public static function parseLimit(string|false $value): ?int
    {
        if ($value === false) {
            return null;
        }
        $value = trim($value);
        if ($value === '' || $value === '-1') {
            return null;
        }
        if (preg_match('/^(\\d+)([KMG])?$/i', $value, $matches) !== 1) {
            return null;
        }
        $number = (int) $matches[1];
        $factor = match (strtoupper($matches[2] ?? '')) {
            'K' => 1024,
            'M' => 1024 * 1024,
            'G' => 1024 * 1024 * 1024,
            default => 1,
        };

        return $number * $factor;
    }
}
`,"src/Timestamp/SignedData.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

use Provemark\\C2paVerifier\\Asn1\\Asn1Exception;
use Provemark\\C2paVerifier\\Asn1\\Der;
use Provemark\\C2paVerifier\\Asn1\\DerReader;
use Provemark\\C2paVerifier\\Asn1\\TagClass;

/**
 * RFC 5652 §5.1 \`SignedData\` as a timestamp token carries it (SPEC-016
 * AC4): the digest algorithms, the encapsulated \`TSTInfo\` (its type must be
 * id-ct-TSTInfo and its content present), the certificates (the
 * \`certificate\` choice only), and exactly one \`SignerInfo\` (RFC 3161
 * §2.4.2). CRLs are ignored.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class SignedData
{
    public const OID_TSTINFO = '1.2.840.113549.1.9.16.1.4';

    public const OID_SUBJECT_KEY_IDENTIFIER = '2.5.29.14';

    /**
     * @param  list<string>  $digestAlgorithms  OIDs
     * @param  string  $eContent  the TSTInfo's DER
     * @param  list<string>  $certificates  DER, in the token's order
     */
    public function __construct(
        public int $version,
        public array $digestAlgorithms,
        public string $eContentType,
        public string $eContent,
        public array $certificates,
        public SignerInfo $signerInfo,
    ) {}

    /**
     * The certificate the SignerInfo's sid names — by issuer Name and serial,
     * or by subjectKeyIdentifier — or null when none matches. The token's
     * order says nothing: DigiCert puts the signer first, Truepic its root.
     */
    public function signerCertificate(?DerReader $reader = null): ?string
    {
        $reader ??= new DerReader;
        $sid = $this->signerInfo;
        foreach ($this->certificates as $der) {
            try {
                $identity = self::identity($reader->read($der));
            } catch (Asn1Exception $e) {
                throw new TimestampException('a certificate in the token: '.$e->getMessage(), 0, $e);
            }
            if ($sid->sidSubjectKeyId !== null) {
                if ($identity['subjectKeyId'] !== null && hash_equals($identity['subjectKeyId'], $sid->sidSubjectKeyId)) {
                    return $der;
                }
            } elseif ($sid->sidIssuer !== null && hash_equals($identity['issuer'], $sid->sidIssuer) && $identity['serial'] === $sid->sidSerial) {
                return $der;
            }
        }

        return null;
    }

    /**
     * What a TBSCertificate says about itself (RFC 5280 §4.1): issuer Name
     * (as DER), serial (decimal) and, for v3, the subjectKeyIdentifier.
     *
     * @return array{issuer: string, serial: string, subjectKeyId: ?string}
     */
    private static function identity(Der $certificate): array
    {
        $tbs = $certificate->child(0)->sequence();
        $i = 0;
        if (isset($tbs[0]) && $tbs[0]->is(TagClass::ContextSpecific, 0)) {
            $i = 1;   // [0] EXPLICIT version, absent on v1
        }
        $serial = $certificate->child(0)->child($i)->integer();
        $issuer = $certificate->child(0)->child($i + 2)->encoded();
        $subjectKeyId = null;
        foreach ($tbs as $field) {
            if (! $field->is(TagClass::ContextSpecific, 3)) {
                continue;
            }
            foreach ($field->child(0)->sequence() as $extension) {
                $parts = $extension->sequence();
                if ($extension->element(0)->oid() === self::OID_SUBJECT_KEY_IDENTIFIER) {
                    $value = $parts[count($parts) - 1];
                    // extnValue is an OCTET STRING wrapping the DER of the extension's type: for SKI, an OCTET STRING
                    $subjectKeyId = (new DerReader)->read($value->octets())->octets();
                }
            }
        }

        return ['issuer' => $issuer, 'serial' => $serial, 'subjectKeyId' => $subjectKeyId];
    }

    /**
     * @param  Der  $der  the SignedData SEQUENCE (the content of the ContentInfo's [0])
     *
     * @throws TimestampException
     */
    public static function fromDer(Der $der): self
    {
        $fields = $der->sequence();
        if (count($fields) < 4) {
            throw new TimestampException(sprintf('SignedData at offset %d has %d fields; version, digestAlgorithms, encapContentInfo and signerInfos are required', $der->offset, count($fields)));
        }
        $version = (int) $fields[0]->integer();
        $digestAlgorithms = [];
        foreach ($fields[1]->set() as $algorithm) {
            $digestAlgorithms[] = $algorithm->element(0)->oid();
        }

        $encap = $fields[2]->sequence();
        $eContentType = $fields[2]->element(0)->oid();
        if ($eContentType !== self::OID_TSTINFO) {
            throw new TimestampException(sprintf('eContentType is %s, not id-ct-TSTInfo (%s)', $eContentType, self::OID_TSTINFO));
        }
        if (! isset($encap[1])) {
            throw new TimestampException('encapContentInfo has no eContent; a timestamp token carries its TSTInfo');
        }
        $eContent = $encap[1]->tagged(0)->child(0)->octets();

        $i = 3;
        $certificates = [];
        if ($fields[$i]->is(TagClass::ContextSpecific, 0)) {   // the fourth field exists: checked above
            foreach ($fields[$i]->children ?? [] as $choice) {
                if (! $choice->is(TagClass::Universal, Der::SEQUENCE)) {
                    throw new TimestampException(sprintf('certificates holds a %s choice at offset %d; only certificate (a SEQUENCE) is accepted', $choice->describe(), $choice->offset));
                }
                $certificates[] = $choice->encoded();
            }
            $i++;
        }
        if ($certificates === []) {
            throw new TimestampException('SignedData carries no certificates; the TSA certificate must be in the token');
        }
        if (count($fields) > $i && $fields[$i]->is(TagClass::ContextSpecific, 1)) {
            $i++;   // crls, ignored
        }
        if (count($fields) <= $i) {
            throw new TimestampException('SignedData has no signerInfos');
        }
        $signerInfos = $fields[$i]->set();
        if (count($signerInfos) !== 1) {
            throw new TimestampException(sprintf('SignedData must hold exactly one SignerInfo, found %d (RFC 3161 §2.4.2)', count($signerInfos)));
        }
        if (count($fields) > $i + 1) {
            throw new TimestampException(sprintf('SignedData has an unexpected %s at offset %d after signerInfos', $fields[$i + 1]->describe(), $fields[$i + 1]->offset));
        }

        return new self($version, $digestAlgorithms, $eContentType, $eContent, $certificates, SignerInfo::fromDer($signerInfos[0], $eContentType));
    }
}
`,"src/Timestamp/SignerInfo.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

use Provemark\\C2paVerifier\\Asn1\\Der;
use Provemark\\C2paVerifier\\Asn1\\TagClass;

/**
 * RFC 5652 §5.3 \`SignerInfo\`, the one signer of a timestamp token
 * (SPEC-016 AC4): who signed (\`sid\`), with which digest and signature
 * algorithm, over which signed attributes, and the signature itself.
 * \`signedAttributesForVerification()\` gives the bytes the signature was
 * made over — the same attributes with the \`[0]\` tag replaced by \`SET\`
 * (§5.4). \`messageDigest\` and \`contentType\` are required (§11.1, §11.2);
 * every other attribute is kept by OID and never refused.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class SignerInfo
{
    public const OID_CONTENT_TYPE = '1.2.840.113549.1.9.3';

    public const OID_MESSAGE_DIGEST = '1.2.840.113549.1.9.4';

    public const OID_SIGNING_TIME = '1.2.840.113549.1.9.5';

    public const OID_RSA_PSS = '1.2.840.113549.1.1.10';

    /**
     * @param  string|null  $sidIssuer  issuerAndSerialNumber: the issuer Name's DER
     * @param  string|null  $sidSerial  issuerAndSerialNumber: decimal
     * @param  string|null  $sidSubjectKeyId  the other choice
     * @param  string  $digestAlgorithm  OID
     * @param  string  $signedAttributes  the [0] element, as encoded
     * @param  array<string, string>  $otherAttributes  OID => the Attribute's DER
     * @param  string  $signatureAlgorithm  OID
     * @param  string|null  $signatureParameters  RSA-PSS: the parameters' DER
     * @param  list<string>  $attributeEncodings  every signed Attribute's DER in the order written (for the DER-canonical SET)
     */
    public function __construct(
        public int $version,
        public ?string $sidIssuer,
        public ?string $sidSerial,
        public ?string $sidSubjectKeyId,
        public string $digestAlgorithm,
        public string $signedAttributes,
        public string $messageDigest,
        public ?int $signingTime,
        public string $contentTypeAttribute,
        public array $otherAttributes,
        public string $signatureAlgorithm,
        public ?string $signatureParameters,
        public string $signature,
        public array $attributeEncodings = [],
    ) {}

    /**
     * What the signature covers (RFC 5652 §5.4): the *DER* encoding of the
     * SET OF Attribute — the \`[0]\` tag replaced by \`SET\`, and the attributes
     * in DER's SET OF order (X.690 §11.6: ascending by encoded octets, the
     * shorter padded with zeros). Every TSA measured until step 43 wrote
     * them sorted, so this equalled the re-tag; \`c2pa-ts\` writes them
     * unsorted and signs the sorted form (SPEC-017 amendment 3).
     */
    public function signedAttributesForVerification(): string
    {
        $encodings = $this->attributeEncodings;
        usort($encodings, static function (string $a, string $b): int {
            $n = max(strlen($a), strlen($b));

            return strcmp(str_pad($a, $n, "\\0"), str_pad($b, $n, "\\0"));
        });
        $body = implode('', $encodings);

        return "\\x31".self::length(strlen($body)).$body;
    }

    private static function length(int $n): string
    {
        if ($n < 128) {
            return pack('C', $n);
        }
        $bytes = ltrim(pack('N', $n), "\\0");

        return pack('C', 0x80 | strlen($bytes)).$bytes;
    }

    /**
     * @param  string  $eContentType  the SignedData's, which the contentType attribute must repeat
     *
     * @throws TimestampException
     */
    public static function fromDer(Der $der, string $eContentType): self
    {
        $fields = $der->sequence();
        if (count($fields) < 5) {
            throw new TimestampException(sprintf('SignerInfo at offset %d has %d fields; five are required', $der->offset, count($fields)));
        }
        $version = (int) $fields[0]->integer();

        // sid: IssuerAndSerialNumber (a SEQUENCE) or [0] SubjectKeyIdentifier
        $sid = $fields[1];
        $sidIssuer = $sidSerial = $sidSubjectKeyId = null;
        if ($sid->is(TagClass::Universal, Der::SEQUENCE)) {
            $sidIssuer = $sid->child(0)->encoded();
            $sidSerial = $sid->child(1)->integer();
        } elseif ($sid->is(TagClass::ContextSpecific, 0)) {
            $sidSubjectKeyId = $sid->contents;
        } else {
            throw new TimestampException(sprintf('SignerInfo sid at offset %d is %s, neither issuerAndSerialNumber nor [0] subjectKeyIdentifier', $sid->offset, $sid->describe()));
        }

        $digestAlgorithm = $fields[2]->element(0)->oid();

        $i = 3;
        if (! $fields[$i]->is(TagClass::ContextSpecific, 0)) {   // the fourth field exists: five are checked above
            throw new TimestampException('SignerInfo has no signedAttrs; a timestamp token signs its TSTInfo through the messageDigest attribute (RFC 3161 §2.4.2)');
        }
        $signedAttrs = $fields[$i];
        $i++;
        $messageDigest = null;
        $signingTime = null;
        $contentType = null;
        $other = [];
        $encodings = [];
        foreach ($signedAttrs->children ?? [] as $attribute) {
            $encodings[] = $attribute->encoded();
            $parts = $attribute->sequence();
            if (count($parts) !== 2) {
                throw new TimestampException(sprintf('Attribute at offset %d has %d fields, not type and values', $attribute->offset, count($parts)));
            }
            $oid = $parts[0]->oid();
            $values = $parts[1]->set();
            switch ($oid) {
                case self::OID_MESSAGE_DIGEST:
                    $messageDigest = self::single($values, $attribute, 'messageDigest')->octets();
                    break;
                case self::OID_SIGNING_TIME:
                    $signingTime = self::single($values, $attribute, 'signingTime')->time();
                    break;
                case self::OID_CONTENT_TYPE:
                    $contentType = self::single($values, $attribute, 'contentType')->oid();
                    break;
                default:
                    $other[$oid] = $attribute->encoded();
            }
        }
        if ($messageDigest === null) {
            throw new TimestampException('signedAttrs has no messageDigest attribute (RFC 5652 §11.2 requires it)');
        }
        if ($contentType === null) {
            throw new TimestampException('signedAttrs has no contentType attribute (RFC 5652 §11.1 requires it)');
        }
        if ($contentType !== $eContentType) {
            throw new TimestampException(sprintf('the contentType attribute (%s) is not the eContentType (%s)', $contentType, $eContentType));
        }

        if (count($fields) <= $i + 1) {
            throw new TimestampException(sprintf('SignerInfo at offset %d ends before signatureAlgorithm and signature', $der->offset));
        }
        $signatureAlgorithmParts = $fields[$i]->sequence();
        $signatureAlgorithm = $fields[$i]->element(0)->oid();
        $signatureParameters = $signatureAlgorithm === self::OID_RSA_PSS && isset($signatureAlgorithmParts[1]) ? $signatureAlgorithmParts[1]->encoded() : null;
        $signature = $fields[$i + 1]->octets();

        return new self($version, $sidIssuer, $sidSerial, $sidSubjectKeyId, $digestAlgorithm, $signedAttrs->encoded(), $messageDigest, $signingTime, $contentType, $other, $signatureAlgorithm, $signatureParameters, $signature, $encodings);
    }

    /** @param list<Der> $values */
    private static function single(array $values, Der $attribute, string $name): Der
    {
        if (count($values) !== 1) {
            throw new TimestampException(sprintf('the %s attribute at offset %d has %d values; exactly one is allowed', $name, $attribute->offset, count($values)));
        }

        return $values[0];
    }
}
`,"src/Timestamp/TimeStampToken.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

use Provemark\\C2paVerifier\\Asn1\\Asn1Exception;
use Provemark\\C2paVerifier\\Asn1\\Der;
use Provemark\\C2paVerifier\\Asn1\\DerReader;
use Provemark\\C2paVerifier\\Asn1\\TagClass;

/**
 * A timestamp token as data (SPEC-016): the value of a \`sigTst\` header (a
 * \`TimeStampResp\`, RFC 3161 §2.4.2) or of a \`sigTst2\` header (the
 * \`TimeStampToken\` itself, a CMS \`ContentInfo\`), read either way from
 * either header — the first child tells them apart. The response must be
 * granted; the ContentInfo must be signedData; then SignedData and its
 * TSTInfo follow. Reads only: SPEC-017 verifies.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class TimeStampToken
{
    public const OID_SIGNED_DATA = '1.2.840.113549.1.7.2';

    /** @var array<int, string> RFC 3161 §2.4.2 PKIStatus */
    public const STATUS_NAMES = [
        0 => 'granted',
        1 => 'grantedWithMods',
        2 => 'rejection',
        3 => 'waiting',
        4 => 'revocationWarning',
        5 => 'revocationNotification',
    ];

    /**
     * @param  int|null  $responseStatus  the PKIStatus when the value was a TimeStampResp, else null
     */
    public function __construct(
        public SignedData $signedData,
        public TstInfo $tstInfo,
        public ?int $responseStatus,
    ) {}

    /**
     * @throws TimestampException
     */
    public static function fromHeaderValue(string $bytes, ?DerReader $reader = null): self
    {
        $reader ??= new DerReader;
        try {
            $root = $reader->read($bytes);
        } catch (Asn1Exception $e) {
            throw new TimestampException('timestamp token: '.$e->getMessage(), 0, $e);
        }
        try {
            $children = $root->sequence();
            if ($children === []) {
                throw new TimestampException('timestamp token: the outer SEQUENCE is empty');
            }
            $status = null;
            $contentInfo = $root;
            if ($children[0]->is(TagClass::Universal, Der::SEQUENCE)) {
                // TimeStampResp { status PKIStatusInfo, timeStampToken TimeStampToken OPTIONAL }
                $status = self::status($children[0]);
                if (! isset($children[1])) {
                    throw new TimestampException(sprintf('TimeStampResp with status %d (%s) carries no token', $status, self::STATUS_NAMES[$status] ?? '?'));
                }
                $contentInfo = $children[1];
                $children = $contentInfo->sequence();
            }
            // ContentInfo { contentType OID, content [0] EXPLICIT }
            $contentType = ($children[0] ?? null)?->oid();
            if ($contentType !== self::OID_SIGNED_DATA) {
                throw new TimestampException(sprintf('ContentInfo is %s, not signedData (%s)', $contentType ?? 'empty', self::OID_SIGNED_DATA));
            }
            if (! isset($children[1])) {
                throw new TimestampException('ContentInfo has no content');
            }
            $signedData = SignedData::fromDer($children[1]->tagged(0)->child(0));
        } catch (Asn1Exception $e) {
            throw new TimestampException('timestamp token: '.$e->getMessage(), 0, $e);
        }
        $tstInfo = TstInfo::fromDer($signedData->eContent, $reader);

        return new self($signedData, $tstInfo, $status);
    }

    /** PKIStatusInfo { status INTEGER, statusString PKIFreeText OPTIONAL, failInfo BIT STRING OPTIONAL }: 0 and 1 pass, anything else is a refusal naming the reason. */
    private static function status(Der $statusInfo): int
    {
        $parts = $statusInfo->sequence();
        if ($parts === []) {
            throw new TimestampException('PKIStatusInfo is empty');
        }
        $status = (int) $parts[0]->integer();
        if ($status === 0 || $status === 1) {
            return $status;
        }
        $texts = [];
        if (isset($parts[1]) && $parts[1]->is(TagClass::Universal, Der::SEQUENCE)) {
            foreach ($parts[1]->sequence() as $text) {
                $texts[] = $text->is(TagClass::Universal, Der::UTF8_STRING) ? $text->contents : $text->describe();
            }
        }
        throw new TimestampException(sprintf(
            'TimeStampResp status %d (%s) is not granted%s',
            $status,
            self::STATUS_NAMES[$status] ?? 'unknown',
            $texts === [] ? '' : ': '.implode('; ', $texts),
        ));
    }
}
`,"src/Timestamp/TimestampCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

use Provemark\\C2paVerifier\\Asn1\\Asn1Exception;
use Provemark\\C2paVerifier\\Asn1\\DerReader;
use Provemark\\C2paVerifier\\Cose\\CoseException;
use Provemark\\C2paVerifier\\Cose\\CoseSign1;
use Provemark\\C2paVerifier\\Cose\\EcdsaSignature;
use Provemark\\C2paVerifier\\Cose\\OpenSsl;
use Provemark\\C2paVerifier\\Cose\\PublicKey;
use Provemark\\C2paVerifier\\Cose\\RsaPss;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;
use Provemark\\C2paVerifier\\Trust\\Certificate;
use Provemark\\C2paVerifier\\Trust\\CertificateProfileCheck;
use Provemark\\C2paVerifier\\Trust\\ChainCheck;
use Provemark\\C2paVerifier\\Trust\\TrustAnchorSet;
use Provemark\\C2paVerifier\\Trust\\TrustException;
use Provemark\\C2paVerifier\\Trust\\TrustSettings;

/**
 * The timestamp check (SPEC-017, C2PA 2.4 §14.6, RFC 3161): is the token in
 * the sigTst / sigTst2 header a valid time-stamp over *this* signature, and
 * is its TSA trusted? Seven steps in c2pa-rs's order — parse, the signer by
 * sid, messageDigest, the CMS signature, the TSA certificate's validity at
 * the token's time, the imprint against the countersigned bytes, the TSA's
 * profile and chain — each with §15's code. Every timeStamp.* code is
 * informational; what a timestamp changes is the *time* SPEC-015 judges
 * the signer's validity at, and only a validated, trusted one does that.
 * Never throws: a fault in the token is a status, not an exception.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class TimestampCheck
{
    public const OID_EKU_TIME_STAMPING = '1.3.6.1.5.5.7.3.8';

    /** @var array<string, array{kind: 'rsa'|'rsa-pss'|'ecdsa', hash: ?string, name: string}> signatureAlgorithm OID => how to verify; hash null = from digestAlgorithm */
    public const SIGNATURE_ALGORITHMS = [
        '1.2.840.113549.1.1.1' => ['kind' => 'rsa', 'hash' => null, 'name' => 'rsaEncryption'],
        '1.2.840.113549.1.1.11' => ['kind' => 'rsa', 'hash' => 'sha256', 'name' => 'sha256WithRSAEncryption'],
        '1.2.840.113549.1.1.12' => ['kind' => 'rsa', 'hash' => 'sha384', 'name' => 'sha384WithRSAEncryption'],
        '1.2.840.113549.1.1.13' => ['kind' => 'rsa', 'hash' => 'sha512', 'name' => 'sha512WithRSAEncryption'],
        '1.2.840.113549.1.1.10' => ['kind' => 'rsa-pss', 'hash' => null, 'name' => 'RSASSA-PSS'],
        '1.2.840.10045.4.3.2' => ['kind' => 'ecdsa', 'hash' => 'sha256', 'name' => 'ecdsa-with-SHA256'],
        '1.2.840.10045.4.3.3' => ['kind' => 'ecdsa', 'hash' => 'sha384', 'name' => 'ecdsa-with-SHA384'],
        '1.2.840.10045.4.3.4' => ['kind' => 'ecdsa', 'hash' => 'sha512', 'name' => 'ecdsa-with-SHA512'],
    ];

    private const OPENSSL_ALGOS = ['sha256' => OPENSSL_ALGO_SHA256, 'sha384' => OPENSSL_ALGO_SHA384, 'sha512' => OPENSSL_ALGO_SHA512];

    public function __construct(
        private DerReader $reader = new DerReader,
        private CertificateProfileCheck $profile = new CertificateProfileCheck,
        private ChainCheck $chain = new ChainCheck,
    ) {}

    /** The active manifest's timestamp, judged. No header → \`TimestampResult::none()\`. */
    public function check(Manifest $manifest, ?TrustSettings $settings): TimestampResult
    {
        $url = sprintf('self#jumbf=/c2pa/%s/c2pa.signature', $manifest->label);
        try {
            $cose = CoseSign1::fromBytes($manifest->signatureBytes());
            $header = TimestampHeader::fromUnprotected($cose->unprotected);
        } catch (CoseException $e) {
            return TimestampResult::none();   // the signature check reports this; no header to judge
        } catch (TimestampException $e) {
            return new TimestampResult(true, [$this->status(StatusCode::TimeStampMalformed, $url, 'timestamp header: '.$e->getMessage())], null, false);
        }
        if ($header === null) {
            return TimestampResult::none();
        }

        return $this->checkHeader($header, $cose, $manifest->claimBytes(), $settings, $url);
    }

    /**
     * A header's first token judged against the manifest's countersigned
     * bytes; further tokens are counted, not judged (c2pa-rs: "we only pay
     * attention to the first time stamp header").
     */
    public function checkHeader(TimestampHeader $header, CoseSign1 $cose, string $claimBytes, ?TrustSettings $settings, string $url): TimestampResult
    {
        try {
            $token = TimeStampToken::fromHeaderValue($header->tokens[0], $this->reader);
        } catch (TimestampException $e) {
            return new TimestampResult(true, [$this->status(StatusCode::TimeStampMalformed, $url, $e->getMessage())], null, false);
        }
        $tbs = self::countersignedBytes($cose, $header->header, $claimBytes);
        $result = $this->judge($token, $tbs, $settings, $url);
        if (count($header->tokens) > 1) {
            $result = new TimestampResult($result->present, array_map(
                static fn (ValidationStatus $s): ValidationStatus => $s->code === StatusCode::TimeStampValidated
                    ? new ValidationStatus($s->code, $s->url, sprintf('%s (1 of %d tokens judged)', $s->explanation, count($header->tokens)))
                    : $s,
                $result->statuses,
            ), $result->time, $result->trusted, $result->timeFraction);
        }

        return $result;
    }

    /**
     * Steps 2–7 on a parsed token — the seam for the cases a real token
     * cannot show without breaking an earlier step (outsideValidity).
     *
     * @param  string  $tbs  the countersigned bytes the imprint must match
     */
    public function judge(TimeStampToken $token, string $tbs, ?TrustSettings $settings, string $url): TimestampResult
    {
        $sd = $token->signedData;
        $si = $sd->signerInfo;
        $tst = $token->tstInfo;
        $malformed = fn (string $why): TimestampResult => new TimestampResult(true, [$this->status(StatusCode::TimeStampMalformed, $url, $why)], null, false);

        // 2. the signer certificate the sid names
        try {
            $signerDer = $sd->signerCertificate($this->reader);
        } catch (TimestampException $e) {
            return $malformed($e->getMessage());
        }
        if ($signerDer === null) {
            return $malformed(sprintf(
                'no certificate in the token matches the SignerInfo sid (%s) among its %d certificate(s)',
                $si->sidSubjectKeyId !== null ? 'subjectKeyIdentifier '.bin2hex($si->sidSubjectKeyId) : 'serial '.($si->sidSerial ?? '?'),
                count($sd->certificates),
            ));
        }
        try {
            $signer = Certificate::fromDer($signerDer);
            $key = PublicKey::fromCertificateDer($signerDer);
        } catch (TrustException|CoseException $e) {
            return $malformed('the TSA certificate could not be read: '.$e->getMessage());
        }
        $tsaName = $signer->subjectCn();

        // 3. the signed messageDigest is the digest of the TSTInfo
        $digestName = TstInfo::digestName($si->digestAlgorithm);
        if (! isset(self::OPENSSL_ALGOS[$digestName])) {
            return new TimestampResult(true, [$this->status(StatusCode::TimeStampUntrusted, $url, sprintf('timestamp signature not verified: digest algorithm %s is not supported (%s)', $si->digestAlgorithm, $tsaName))], null, false);
        }
        $digest = hash($digestName, $sd->eContent, true);
        if (! hash_equals($digest, $si->messageDigest)) {
            return new TimestampResult(true, [$this->status(StatusCode::TimeStampMismatch, $url, sprintf('timestamp messageDigest does not match its TSTInfo: signed %s…, computed %s… (%s, %s)', bin2hex(substr($si->messageDigest, 0, 4)), bin2hex(substr($digest, 0, 4)), $digestName, $tsaName))], null, false);
        }

        // 4. the CMS signature over the signed attributes
        $verified = $this->verifySignature($si, $key, $digestName, $why);
        if (! $verified) {
            return new TimestampResult(true, [$this->status(StatusCode::TimeStampUntrusted, $url, sprintf('timestamp signature did not verify: %s (%s)', $why, $tsaName))], null, false);
        }

        // 5. the TSA certificate is valid at the token's time
        if ($tst->genTime < $signer->validFrom || $tst->genTime > $signer->validTo) {
            return new TimestampResult(true, [$this->status(StatusCode::TimeStampOutsideValidity, $url, sprintf(
                'timestamp time %s lies outside the TSA certificate\\'s validity, %s to %s (%s)',
                gmdate('Y-m-d\\TH:i:s\\Z', $tst->genTime),
                gmdate('Y-m-d\\TH:i:s\\Z', $signer->validFrom),
                gmdate('Y-m-d\\TH:i:s\\Z', $signer->validTo),
                $tsaName,
            ))], null, false);
        }

        // 6. the imprint is the digest of the countersigned bytes
        $imprintName = TstInfo::digestName($tst->hashAlgorithm);
        $expected = hash($imprintName, $tbs, true);
        if (! hash_equals($expected, $tst->hashedMessage)) {
            return new TimestampResult(true, [$this->status(StatusCode::TimeStampMismatch, $url, sprintf('timestamp imprint does not match the signature: token %s…, computed %s… (%s over %d bytes, %s)', bin2hex(substr($tst->hashedMessage, 0, 4)), bin2hex(substr($expected, 0, 4)), $imprintName, strlen($tbs), $tsaName))], null, false);
        }
        $statuses = [$this->status(StatusCode::TimeStampValidated, $url, sprintf('timestamp message digest matched: %s (%s)', $tsaName, gmdate('c', $tst->genTime)))];

        // 7. the TSA's trust: the profile with timeStamping alone, then the chain to a configured anchor
        $tsaSettings = self::tsaSettings($settings);
        if (! $tsaSettings->verifyTrust) {
            return new TimestampResult(true, $statuses, $tst->genTime, false, $tst->genTimeFraction);
        }
        $trusted = false;
        $faults = $this->profile->checkLeaf($signer, $tsaSettings, $tst->genTime, $url, ekus: [self::OID_EKU_TIME_STAMPING]);
        if ($faults !== []) {
            $statuses[] = $this->status(StatusCode::TimeStampUntrusted, $url, sprintf('timestamp cert untrusted: %s — %s', $tsaName, implode('; ', array_map(static fn (ValidationStatus $s): string => $s->explanation, $faults))));
        } else {
            try {
                $ordered = $this->orderedChain($signerDer, $sd->certificates);
            } catch (TrustException $e) {
                return new TimestampResult(true, [...$statuses, $this->status(StatusCode::TimeStampUntrusted, $url, sprintf('timestamp cert untrusted: %s — a certificate in the token could not be read: %s', $tsaName, $e->getMessage()))], $tst->genTime, false, $tst->genTimeFraction);
            }
            foreach ($this->chain->checkCertificates($ordered, $tsaSettings, $url, $tst->genTime) as $outcome) {
                $trusted = $outcome->code === StatusCode::SigningCredentialTrusted;
                $statuses[] = $this->status(
                    $trusted ? StatusCode::TimeStampTrusted : StatusCode::TimeStampUntrusted,
                    $url,
                    sprintf('timestamp cert %s: %s — %s', $trusted ? 'trusted' : 'untrusted', $tsaName, preg_replace('/^signing certificate (un)?trusted: /', '', $outcome->explanation) ?? $outcome->explanation)
                        .($trusted || $settings === null ? '' : ChainCheck::kindNote($settings, TrustAnchorSet::TSA, $ordered)),
                );
            }
        }

        return new TimestampResult(true, $statuses, $tst->genTime, $trusted, $tst->genTimeFraction);
    }

    /**
     * ["CounterSignature", protected, h'', payload] (RFC 9052 §4.4; c2pa-rs
     * \`cose_countersign_data\`): the payload is the claim bytes for \`sigTst\`
     * and the signature as a CBOR byte string for \`sigTst2\` (C2PA 2.4 §14.6).
     */
    public static function countersignedBytes(CoseSign1 $cose, string $header, string $claimBytes): string
    {
        $payload = $header === 'sigTst2' ? self::bstr($cose->signature) : $claimBytes;

        return "\\x84"."\\x70CounterSignature".self::bstr($cose->protectedBytes)."\\x40".self::bstr($payload);
    }

    /**
     * The operator's TSA anchors — the legacy list and every "tsa" entry,
     * never a "manifest" one (C2PA 2.4 §14.4.2; SPEC-031 AC6) — with
     * \`trust_config\` replaced by timeStamping alone; \`verify_trust\` kept.
     * **No allowed list**, neither an entry's nor the one a caller passes to
     * the constructor: the private credential store *"shall not apply to
     * validating time-stamps"* (§14.4.3, §14.5.1.2; SPEC-017 amendment 5).
     */
    public static function tsaSettings(?TrustSettings $operator): TrustSettings
    {
        if ($operator === null) {
            return new TrustSettings([], [], [self::OID_EKU_TIME_STAMPING], true);
        }

        return new TrustSettings(ChainCheck::tsaAnchorsOf($operator), [], [self::OID_EKU_TIME_STAMPING], $operator->verifyTrust);
    }

    /**
     * Step 4: the signature over the re-tagged signed attributes with the
     * signer's key, by the SignerInfo's algorithm. $why says what failed.
     *
     * @param-out string $why
     */
    private function verifySignature(SignerInfo $si, PublicKey $key, string $digestName, ?string &$why): bool
    {
        $why = '';
        $spec = self::SIGNATURE_ALGORITHMS[$si->signatureAlgorithm] ?? null;
        if ($spec === null) {
            $why = sprintf('signature algorithm %s is not supported', $si->signatureAlgorithm);

            return false;
        }
        $hash = $spec['hash'] ?? $digestName;
        if ($spec['hash'] !== null && $spec['hash'] !== $digestName) {
            $why = sprintf('%s signs with %s but the digestAlgorithm is %s', $spec['name'], $spec['hash'], $digestName);

            return false;
        }
        $tbs = $si->signedAttributesForVerification();
        $why = sprintf('%s signature over %d bytes of signed attributes with a %d-bit %s key', $spec['name'], strlen($tbs), $key->bits, $key->kind);
        switch ($spec['kind']) {
            case 'rsa':
                if ($key->kind !== PublicKey::KIND_RSA) {
                    $why .= ' — the key is not an RSA key';

                    return false;
                }

                return $this->opensslVerify($tbs, $si->signature, $key, self::OPENSSL_ALGOS[$hash]);
            case 'ecdsa':
                if ($key->kind !== PublicKey::KIND_EC) {
                    $why .= ' — the key is not an EC key';

                    return false;
                }

                return $this->opensslVerify($tbs, self::ecdsaDer($si->signature, $key), $key, self::OPENSSL_ALGOS[$hash]);
            default:   // rsa-pss: MGF1 with the same hash, salt = hash length (RFC 8017; as SPEC-009)
                if ($key->kind === PublicKey::KIND_RSA_PSS) {
                    return $this->opensslVerify($tbs, $si->signature, $key, self::OPENSSL_ALGOS[$hash]);
                }
                if ($key->kind !== PublicKey::KIND_RSA) {
                    $why .= ' — the key is not an RSA key';

                    return false;
                }

                return RsaPss::verify($tbs, $si->signature, $key->key, $hash, $key->bits);
        }
    }

    /**
     * A CMS ECDSA signature is DER \`ECDSA-Sig-Value\` (RFC 3279 §2.2.3), and
     * \`c2pa-ts\` writes it as raw R‖S (SPEC-017 amendment 3; c2patool accepts
     * it). Raw is taken only when the bytes are not a well-formed DER
     * SEQUENCE of two INTEGERs and are exactly two coordinates long; DER
     * passes through unchanged.
     */
    private static function ecdsaDer(string $signature, PublicKey $key): string
    {
        if (self::isDerEcdsaSignature($signature)) {
            return $signature;
        }
        $curveBytes = intdiv($key->bits + 7, 8);

        return EcdsaSignature::toDer($signature, $curveBytes) ?? $signature;
    }

    private static function isDerEcdsaSignature(string $bytes): bool
    {
        try {
            $seq = (new DerReader(maxDepth: 2, maxElements: 3, maxBytes: 256))->read($bytes);
            $parts = $seq->sequence();

            return count($parts) === 2 && $parts[0]->integerBytes() !== '' && $parts[1]->integerBytes() !== '';
        } catch (Asn1Exception) {
            return false;
        }
    }

    private function opensslVerify(string $message, string $signature, PublicKey $key, int $algo): bool
    {
        $result = OpenSsl::quiet(static fn (): int|false => openssl_verify($message, $signature, $key->key, $algo));

        return $result === 1;
    }

    /**
     * The token's certificates from the signer towards the root, each the
     * issuer of the one before (c2pa-rs \`order_certificates_leaf_to_root\`);
     * a certificate no link reaches is left out.
     *
     * @param  list<string>  $ders
     * @return non-empty-list<Certificate>
     */
    private function orderedChain(string $signerDer, array $ders): array
    {
        $pool = [];
        foreach ($ders as $der) {
            if ($der !== $signerDer) {
                $pool[] = Certificate::fromDer($der);
            }
        }
        $chain = [Certificate::fromDer($signerDer)];
        $current = $chain[0];
        while ($pool !== []) {
            $next = null;
            foreach ($pool as $i => $candidate) {
                if ($candidate->subject === $current->issuer && ! $candidate->sameAs($current)) {
                    $next = $i;
                    break;
                }
            }
            if ($next === null) {
                break;
            }
            $current = $pool[$next];
            $chain[] = $current;
            unset($pool[$next]);
        }

        return $chain;
    }

    private function status(StatusCode $code, string $url, string $explanation): ValidationStatus
    {
        return new ValidationStatus($code, $url, $explanation);
    }

    private static function bstr(string $bytes): string
    {
        $n = strlen($bytes);
        if ($n < 24) {
            return chr(0x40 + $n).$bytes;
        }
        if ($n < 256) {
            return "\\x58".chr($n).$bytes;
        }
        if ($n < 65536) {
            return "\\x59".pack('n', $n).$bytes;
        }

        return "\\x5a".pack('N', $n).$bytes;
    }
}
`,"src/Timestamp/TimestampException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

/**
 * Thrown for a timestamp header or token this layer does not read
 * (SPEC-016 AC6–AC9): a header of the wrong shape, a response that was
 * not granted, a token that breaks RFC 3161 / RFC 5652's own rules, and
 * every DER fault underneath, wrapped with what was being read. SPEC-017
 * maps it to \`timeStamp.malformed\`.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final class TimestampException extends \\RuntimeException {}
`,"src/Timestamp/TimestampHeader.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;

/**
 * The \`sigTst\` / \`sigTst2\` header of a COSE_Sign1 as C2PA 2.4 §14.6 shapes
 * it — \`{tstTokens: [{val: bstr}, …]}\` — read out of the decoded unprotected
 * header (SPEC-016 AC8). Which name a claim version may carry is SPEC-017's
 * rule; here both are read, and a header carrying both is refused.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class TimestampHeader
{
    public const DEFAULT_MAX_TOKENS = 8;

    /**
     * @param  'sigTst'|'sigTst2'  $header
     * @param  list<string>  $tokens  the raw values, in header order
     */
    public function __construct(
        public string $header,
        public array $tokens,
    ) {}

    /**
     * @param  array<int|string, mixed>  $unprotected  the decoded unprotected header
     * @return self|null null when neither header is present (no timestamp)
     *
     * @throws TimestampException
     */
    public static function fromUnprotected(array $unprotected, int $maxTokens = self::DEFAULT_MAX_TOKENS): ?self
    {
        $present = array_values(array_filter(['sigTst', 'sigTst2'], static fn (string $name): bool => array_key_exists($name, $unprotected)));
        if ($present === []) {
            return null;
        }
        if (count($present) === 2) {
            throw new TimestampException('the unprotected header carries both sigTst and sigTst2; a signature has one timestamp header');
        }
        $name = $present[0];
        $header = $unprotected[$name];
        if (! is_array($header) || array_is_list($header)) {
            throw new TimestampException(sprintf('%s is not a map', $name));
        }
        $list = $header['tstTokens'] ?? null;
        if (! is_array($list) || ! array_is_list($list)) {
            throw new TimestampException(sprintf('%s: tstTokens is missing or not a list', $name));
        }
        if ($list === []) {
            throw new TimestampException(sprintf('%s: tstTokens is empty', $name));
        }
        if (count($list) > $maxTokens) {
            throw new TimestampException(sprintf('%s holds %d tokens, above the limit of %d', $name, count($list), $maxTokens));
        }
        $tokens = [];
        foreach ($list as $i => $entry) {
            if (! is_array($entry) || ! isset($entry['val']) || ! $entry['val'] instanceof CborBytes) {
                throw new TimestampException(sprintf('%s: tstTokens[%d] has no byte-string val', $name, $i));
            }
            $tokens[] = $entry['val']->bytes;
        }

        return new self($name, $tokens);
    }
}
`,"src/Timestamp/TimestampResult.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * What the timestamp check found (SPEC-017): whether a header was there,
 * its timeStamp.* statuses in the order judged, the token's time when the
 * imprint matched (for signature_info.time), and whether the TSA was
 * trusted. \`trustedTime()\` is the one thing that reaches the verdict: the
 * epoch SPEC-015 judges the signer's validity at — only a validated
 * *and* trusted timestamp supplies it (C2PA 2.4 §14.6.1).
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class TimestampResult
{
    /**
     * @param  list<ValidationStatus>  $statuses
     * @param  int|null  $time  genTime when validated, else null
     * @param  string|null  $timeFraction  genTime's fractional-second digits, for signature_info.time (SPEC-017 amendment 2)
     */
    public function __construct(
        public bool $present,
        public array $statuses,
        public ?int $time,
        public bool $trusted,
        public ?string $timeFraction = null,
    ) {}

    /** The time as c2patool prints it: ISO 8601, UTC, the token's own fraction digits. */
    public function timeIso(): ?string
    {
        if ($this->time === null) {
            return null;
        }

        return gmdate('Y-m-d\\TH:i:s', $this->time).($this->timeFraction === null ? '' : '.'.$this->timeFraction).'+00:00';
    }

    /** No sigTst / sigTst2 header at all. */
    public static function none(): self
    {
        return new self(false, [], null, false);
    }

    /** The epoch the signer's certificate validity is judged at: the timestamp's when validated and trusted, else null (= now). */
    public function trustedTime(): ?int
    {
        return $this->trusted ? $this->time : null;
    }
}
`,"src/Timestamp/TstAccuracy.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

/** RFC 3161 §2.4.2 \`Accuracy\`: seconds, millis [0], micros [1] — each optional.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class TstAccuracy
{
    public function __construct(
        public ?int $seconds,
        public ?int $millis,
        public ?int $micros,
    ) {}
}
`,"src/Timestamp/TstInfo.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Timestamp;

use Provemark\\C2paVerifier\\Asn1\\Asn1Exception;
use Provemark\\C2paVerifier\\Asn1\\Der;
use Provemark\\C2paVerifier\\Asn1\\DerReader;
use Provemark\\C2paVerifier\\Asn1\\TagClass;

/**
 * RFC 3161 §2.4.2 \`TSTInfo\`, the signed content of a timestamp token
 * (SPEC-016 AC3): what was stamped (the imprint), when (\`genTime\`), by
 * which policy, with which serial. Version must be 1; the imprint's digest
 * must fit its algorithm; a critical extension is a refusal; an element
 * the grammar does not name is a refusal.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class TstInfo
{
    /** @var array<string, int> hash OID => digest length in bytes */
    public const DIGEST_LENGTHS = [
        '2.16.840.1.101.3.4.2.1' => 32,   // sha256
        '2.16.840.1.101.3.4.2.2' => 48,   // sha384
        '2.16.840.1.101.3.4.2.3' => 64,   // sha512
    ];

    /**
     * @param  string  $hashAlgorithm  OID
     * @param  string  $serialNumber  decimal
     * @param  int  $genTime  UTC epoch, fractions dropped
     * @param  string|null  $nonce  decimal
     * @param  string|null  $tsa  the GeneralName's DER
     * @param  string|null  $extensions  the Extensions' DER (none critical)
     * @param  string|null  $genTimeFraction  the fractional-second digits of genTime as written, or null (amendment 3)
     */
    public function __construct(
        public int $version,
        public string $policy,
        public string $hashAlgorithm,
        public string $hashedMessage,
        public string $serialNumber,
        public int $genTime,
        public ?TstAccuracy $accuracy,
        public bool $ordering,
        public ?string $nonce,
        public ?string $tsa,
        public ?string $extensions,
        public ?string $genTimeFraction = null,
    ) {}

    /**
     * @param  string  $der  the eContent octets
     *
     * @throws TimestampException
     */
    public static function fromDer(string $der, DerReader $reader): self
    {
        try {
            return self::read($reader->read($der));
        } catch (Asn1Exception $e) {
            throw new TimestampException('TSTInfo: '.$e->getMessage(), 0, $e);
        }
    }

    private static function read(Der $root): self
    {
        $fields = $root->sequence();
        $count = count($fields);
        if ($count < 5) {
            throw new TimestampException(sprintf('TSTInfo has %d fields; version, policy, messageImprint, serialNumber and genTime are required', $count));
        }
        $version = (int) $fields[0]->integer();
        if ($version !== 1) {
            throw new TimestampException(sprintf('TSTInfo version %d is not supported (version 1 only)', $version));
        }
        $policy = $fields[1]->oid();

        $imprint = $fields[2]->sequence();
        if (count($imprint) !== 2) {
            throw new TimestampException(sprintf('messageImprint has %d fields, not hashAlgorithm and hashedMessage', count($imprint)));
        }
        $hashAlgorithm = $imprint[0]->element(0)->oid();
        $hashedMessage = $imprint[1]->octets();
        $expected = self::DIGEST_LENGTHS[$hashAlgorithm] ?? null;
        if ($expected === null) {
            throw new TimestampException(sprintf('messageImprint: hash algorithm %s is not supported', $hashAlgorithm));
        }
        if (strlen($hashedMessage) !== $expected) {
            throw new TimestampException(sprintf('messageImprint: %d bytes is not a %s digest (%d bytes)', strlen($hashedMessage), self::digestName($hashAlgorithm), $expected));
        }

        $serialNumber = $fields[3]->integer();
        try {
            $genTime = $fields[4]->time();
            $genTimeFraction = $fields[4]->timeFraction();
        } catch (Asn1Exception $e) {
            throw new TimestampException('TSTInfo genTime: '.$e->getMessage(), 0, $e);
        }
        if (! $fields[4]->is(TagClass::Universal, Der::GENERALIZED_TIME)) {
            throw new TimestampException(sprintf('TSTInfo genTime at offset %d is %s, not GeneralizedTime', $fields[4]->offset, $fields[4]->describe()));
        }

        // the optional tail, in order: accuracy, ordering, nonce, tsa [0], extensions [1]
        $accuracy = null;
        $ordering = false;
        $nonce = null;
        $tsa = null;
        $extensions = null;
        $i = 5;
        if ($i < $count && $fields[$i]->is(TagClass::Universal, Der::SEQUENCE)) {
            $accuracy = self::accuracy($fields[$i]);
            $i++;
        }
        if ($i < $count && $fields[$i]->is(TagClass::Universal, Der::BOOLEAN)) {
            $ordering = $fields[$i]->boolean();
            $i++;
        }
        if ($i < $count && $fields[$i]->is(TagClass::Universal, Der::INTEGER)) {
            $nonce = $fields[$i]->integer(signed: true);   // a random value, either sign (amendment 3)
            $i++;
        }
        if ($i < $count && $fields[$i]->is(TagClass::ContextSpecific, 0)) {
            $tsa = $fields[$i]->encoded();
            $i++;
        }
        if ($i < $count && $fields[$i]->is(TagClass::ContextSpecific, 1)) {
            $extensions = self::extensions($fields[$i]);
            $i++;
        }
        if ($i < $count) {
            throw new TimestampException(sprintf('TSTInfo has an unexpected %s at offset %d after its known fields', $fields[$i]->describe(), $fields[$i]->offset));
        }

        return new self($version, $policy, $hashAlgorithm, $hashedMessage, $serialNumber, $genTime, $accuracy, $ordering, $nonce, $tsa, $extensions, $genTimeFraction);
    }

    private static function accuracy(Der $der): TstAccuracy
    {
        $seconds = null;
        $millis = null;
        $micros = null;
        foreach ($der->sequence() as $field) {
            if ($field->is(TagClass::Universal, Der::INTEGER)) {
                $seconds = (int) $field->integer();
            } elseif ($field->is(TagClass::ContextSpecific, 0)) {
                $millis = self::smallInteger($field, 'accuracy millis');
            } elseif ($field->is(TagClass::ContextSpecific, 1)) {
                $micros = self::smallInteger($field, 'accuracy micros');
            } else {
                throw new TimestampException(sprintf('accuracy has an unexpected %s at offset %d', $field->describe(), $field->offset));
            }
        }

        return new TstAccuracy($seconds, $millis, $micros);
    }

    /** An IMPLICIT-tagged INTEGER of at most three bytes (millis and micros are 1..999). */
    private static function smallInteger(Der $der, string $what): int
    {
        $bytes = $der->contents;
        if ($der->constructed || $bytes === '' || strlen($bytes) > 3) {
            throw new TimestampException(sprintf('%s at offset %d is not a small INTEGER', $what, $der->offset));
        }

        return (int) hexdec(bin2hex($bytes));
    }

    /** The Extensions' DER, provided none is critical (RFC 3161 §2.4.2: a critical extension the validator does not know is a rejection). */
    private static function extensions(Der $der): string
    {
        if (! $der->constructed) {
            throw new TimestampException(sprintf('TSTInfo extensions at offset %d is not constructed', $der->offset));
        }
        foreach ($der->children ?? [] as $extension) {
            $parts = $extension->sequence();
            $oid = $parts[0]->oid();
            $critical = isset($parts[1]) && $parts[1]->is(TagClass::Universal, Der::BOOLEAN) && $parts[1]->boolean();
            if ($critical) {
                throw new TimestampException(sprintf('TSTInfo carries the critical extension %s, which this verifier does not know', $oid));
            }
        }

        return $der->encoded();
    }

    public static function digestName(string $oid): string
    {
        return match ($oid) {
            '2.16.840.1.101.3.4.2.1' => 'sha256',
            '2.16.840.1.101.3.4.2.2' => 'sha384',
            '2.16.840.1.101.3.4.2.3' => 'sha512',
            default => $oid,
        };
    }
}
`,"src/Trust/Certificate.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Trust;

use Provemark\\C2paVerifier\\Asn1\\Asn1Exception;
use Provemark\\C2paVerifier\\Asn1\\DerReader;
use Provemark\\C2paVerifier\\Asn1\\TagClass;
use Provemark\\C2paVerifier\\Support\\Bytes;

/**
 * One X.509 certificate, DER, with what the chain walk (SPEC-014) and the
 * profile check (SPEC-015) need — everything as OpenSSL reports it through
 * openssl_x509_parse() and openssl_pkey_get_details(), nothing parsed by
 * hand: subject and issuer (compared whole), the SHA-256 for the allowed
 * list, version, validity, signature algorithm, key type/size/curve, KU,
 * EKU as OIDs, the two key identifiers, the O and CN, the serial in
 * decimal. One exception: the validity is read from the DER by Der::time()
 * (SPEC-044), because PHP's epoch for it shifts with the host's timezone
 * under php-wasm and misreads a fraction everywhere. signedBy() is
 * openssl_x509_verify() on the issuer's key. What OpenSSL refuses is a
 * TrustException. fromParsed() takes the parse data as given — the seam
 * the SPEC-015 tests use for rules no re-signed file can show.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class Certificate
{
    /** OpenSSL's long names for the EKUs it knows, to the OIDs C2PA 2.4 §14.4.1 talks about. */
    private const EKU_NAMES = [
        'E-mail Protection' => '1.3.6.1.5.5.7.3.4',
        'Time Stamping' => '1.3.6.1.5.5.7.3.8',
        'OCSP Signing' => '1.3.6.1.5.5.7.3.9',
        'Code Signing' => '1.3.6.1.5.5.7.3.3',
        'TLS Web Server Authentication' => '1.3.6.1.5.5.7.3.1',
        'TLS Web Client Authentication' => '1.3.6.1.5.5.7.3.2',
        'Any Extended Key Usage' => '2.5.29.37.0',
        'Document Signing' => '1.3.6.1.5.5.7.3.36',
    ];

    public const EKU_ANY = '2.5.29.37.0';

    public string $sha256;

    /** @var array<string, mixed> */
    public array $subject;

    /** @var array<string, mixed> */
    public array $issuer;

    public bool $isCa;

    /** basicConstraints pathLenConstraint: how many intermediate CAs may follow this one; null when absent (SPEC-014 amendment 4). */
    public ?int $pathLen;

    /** X.509 version, 1-based (OpenSSL reports 0-based). */
    public int $version;

    public int $validFrom;

    public int $validTo;

    /** OpenSSL's long name: ecdsa-with-SHA256, rsassaPss, sha256WithRSAEncryption, ED25519, … */
    public string $signatureAlgorithm;

    /** EC | RSA | Ed25519 | other */
    public string $keyType;

    public int $keyBits;

    public ?string $curve;

    /** @var list<string>|null OIDs (an OpenSSL name it knows mapped; an unknown one kept as given) — null when the extension is absent */
    public ?array $extendedKeyUsage;

    /** @var list<string>|null OpenSSL's names — null when the extension is absent */
    public ?array $keyUsage;

    public bool $hasAuthorityKeyIdentifier;

    public bool $hasSubjectKeyIdentifier;

    public ?string $organization;

    public string $serialDecimal;

    private \\OpenSSLCertificate $handle;

    /**
     * @param  array<string, mixed>|null  $parsed  openssl_x509_parse()'s array, or null to parse the DER
     * @param  array<string, mixed>|null  $key  openssl_pkey_get_details()'s array, or null to read the DER's key
     */
    private function __construct(public string $der, ?array $parsed = null, ?array $key = null)
    {
        // OpenSSL reports a malformed certificate as a warning as well as a false
        // return; the return is the answer, the warning is noise here
        set_error_handler(static fn (): bool => true);
        try {
            $handle = openssl_x509_read(self::pem($der));
        } finally {
            restore_error_handler();
        }
        if ($handle === false) {
            throw new TrustException(sprintf('a certificate of %d bytes could not be read: %s', strlen($der), self::opensslError()));
        }
        $this->handle = $handle;
        $this->sha256 = hash('sha256', $der, true);

        if ($parsed === null) {
            // SPEC-043 AC4: a warning here means a field was not read as DER defines it (a NUL inside a
            // UTCTime: "Illegal length in timestamp"); c2patool refuses such a certificate, so does this
            $parsed = self::withoutWarnings(static fn (): array|false => openssl_x509_parse($handle), $warning);
            if ($warning !== null) {
                throw new TrustException(sprintf('a certificate of %d bytes could not be parsed: %s', strlen($der), $warning));
            }
        }
        if ($parsed === false || ! is_array($parsed['subject'] ?? null) || ! is_array($parsed['issuer'] ?? null)) {
            throw new TrustException(sprintf('a certificate of %d bytes could not be parsed', strlen($der)));
        }
        if ($key === null) {
            $details = self::withoutWarnings(static function () use ($handle): array|false {
                $public = openssl_pkey_get_public($handle);

                return $public === false ? false : openssl_pkey_get_details($public);
            }, $warning);
            if ($details === false || $warning !== null) {
                throw new TrustException(sprintf('the public key of a certificate of %d bytes could not be read', strlen($der)));
            }
            $key = [];
            foreach ($details as $field => $value) {
                $key[(string) $field] = $value;
            }
        }

        $this->subject = self::name($parsed['subject']);
        $this->issuer = self::name($parsed['issuer']);
        $extensions = is_array($parsed['extensions'] ?? null) ? $parsed['extensions'] : [];
        $this->isCa = is_string($extensions['basicConstraints'] ?? null) && str_contains($extensions['basicConstraints'], 'CA:TRUE');
        $this->pathLen = $this->isCa && is_string($extensions['basicConstraints'] ?? null) && preg_match('/pathlen:(\\d+)/', $extensions['basicConstraints'], $m) === 1 ? (int) $m[1] : null;
        $this->version = (is_int($parsed['version'] ?? null) ? $parsed['version'] : 0) + 1;
        [$this->validFrom, $this->validTo] = self::validity($der);
        $this->signatureAlgorithm = is_string($parsed['signatureTypeLN'] ?? null) ? $parsed['signatureTypeLN'] : '(unknown)';
        [$this->keyType, $this->keyBits, $this->curve] = self::keyFacts($key);
        $this->extendedKeyUsage = is_string($extensions['extendedKeyUsage'] ?? null) ? self::ekuOids($extensions['extendedKeyUsage']) : null;
        $this->keyUsage = is_string($extensions['keyUsage'] ?? null) ? self::names($extensions['keyUsage']) : null;
        $this->hasAuthorityKeyIdentifier = array_key_exists('authorityKeyIdentifier', $extensions);
        $this->hasSubjectKeyIdentifier = array_key_exists('subjectKeyIdentifier', $extensions);
        $o = $this->subject['O'] ?? null;
        $this->organization = is_string($o) ? $o : null;
        $serialHex = is_string($parsed['serialNumberHex'] ?? null) ? $parsed['serialNumberHex'] : '0';
        if (Bytes::decimalOctets($serialHex) > Bytes::MAX_DECIMAL_OCTETS) {
            // SPEC-015 amendment 6: a resource bound, not a profile rule — c2patool reads longer serials
            throw new TrustException(sprintf('a certificate serial number of %d octets; this verifier reads at most %d (RFC 5280 allows 20)', Bytes::decimalOctets($serialHex), Bytes::MAX_DECIMAL_OCTETS));
        }
        $this->serialDecimal = self::hexToDecimal($serialHex);
    }

    /**
     * tbsCertificate.validity (RFC 5280 §4.1.2.5) as UTC epochs, by Der::time(), not by
     * openssl_x509_parse()'s *_time_t (SPEC-044): a fraction is dropped, a time that is not DER
     * is a TrustException.
     *
     * @return array{int, int}
     */
    private static function validity(string $der): array
    {
        try {
            // TBSCertificate ::= SEQUENCE { [0] version OPTIONAL, serialNumber, signature, issuer, validity, … }
            $tbs = (new DerReader)->read($der)->element(0);
            $validity = $tbs->element($tbs->element(0)->is(TagClass::ContextSpecific, 0) ? 4 : 3);

            return [$validity->element(0)->time(), $validity->element(1)->time()];
        } catch (Asn1Exception $e) {
            throw new TrustException(sprintf('the validity of a certificate of %d bytes could not be read: %s', strlen($der), $e->getMessage()));
        }
    }

    public static function fromDer(string $der): self
    {
        return new self($der);
    }

    /**
     * The seam for tests: the DER (for signedBy) with parse data as given.
     *
     * @param  array<string, mixed>  $parsed
     * @param  array<string, mixed>  $key
     */
    public static function fromParsed(string $der, array $parsed, array $key): self
    {
        return new self($der, $parsed, $key);
    }

    /** Is this certificate's signature made by $issuer's key? openssl_x509_verify(): 1 yes, 0 no, -1 error — only 1 counts. */
    public function signedBy(self $issuer): bool
    {
        return self::withoutWarnings(function () use ($issuer): bool {
            $key = openssl_pkey_get_public($issuer->handle);

            return $key !== false && openssl_x509_verify($this->handle, $key) === 1;
        }, $warning);
    }

    /**
     * $call with PHP's warnings caught rather than printed (SPEC-043 AC4: a warning on standard output
     * breaks the JSON report); the first one is handed back in $warning, OpenSSL's queue is left as is.
     *
     * @template T
     *
     * @param  callable(): T  $call
     *
     * @param-out  string|null  $warning
     *
     * @return T
     */
    private static function withoutWarnings(callable $call, ?string &$warning = null): mixed
    {
        $warning = null;
        set_error_handler(static function (int $severity, string $message) use (&$warning): bool {
            $warning ??= preg_replace('/^openssl_[a-z0-9_]+\\(\\): /', '', $message);

            return true;
        });
        try {
            return $call();
        } finally {
            restore_error_handler();
        }
    }

    public function sameAs(self $other): bool
    {
        return hash_equals($this->der, $other->der);
    }

    /**
     * The EKUs as OpenSSL named them, for messages.
     *
     * @return list<string>
     */
    public function extendedKeyUsageNames(): array
    {
        $names = array_flip(self::EKU_NAMES);

        return array_map(static fn (string $oid): string => $names[$oid] ?? $oid, $this->extendedKeyUsage ?? []);
    }

    public function subjectCn(): string
    {
        $cn = $this->subject['CN'] ?? null;

        return is_string($cn) ? $cn : '(no CN)';
    }

    public function issuerCn(): string
    {
        $cn = $this->issuer['CN'] ?? null;

        return is_string($cn) ? $cn : '(no CN)';
    }

    public static function pem(string $der): string
    {
        return "-----BEGIN CERTIFICATE-----\\n".chunk_split(base64_encode($der), 64, "\\n")."-----END CERTIFICATE-----\\n";
    }

    /**
     * A distinguished name as OpenSSL renders it, its keys as strings.
     *
     * @param  array<mixed, mixed>  $name
     * @return array<string, mixed>
     */
    private static function name(array $name): array
    {
        $typed = [];
        foreach ($name as $attribute => $value) {
            $typed[(string) $attribute] = $value;
        }

        return $typed;
    }

    /**
     * @param  array<string, mixed>  $key
     * @return array{0: string, 1: int, 2: ?string}
     */
    private static function keyFacts(array $key): array
    {
        $bits = is_int($key['bits'] ?? null) ? $key['bits'] : 0;
        if (($key['type'] ?? null) === OPENSSL_KEYTYPE_EC || is_array($key['ec'] ?? null)) {
            $ec = is_array($key['ec'] ?? null) ? $key['ec'] : [];
            $curve = $ec['curve_name'] ?? null;

            return ['EC', $bits, is_string($curve) ? $curve : null];
        }
        if (($key['type'] ?? null) === OPENSSL_KEYTYPE_RSA || is_array($key['rsa'] ?? null)) {
            return ['RSA', $bits, null];
        }
        // The algorithm OID in the public key's DER says what the key is where PHP's own type does
        // not: an RSASSA-PSS key (1.2.840.113549.1.1.10) is type -1 on every version, and an Ed25519
        // key (1.3.101.112) has no \`ed25519\` details before PHP 8.4 — measured on 8.3, where every
        // Ed25519-signed file was \`signingCredential.invalid\` ("key of type other") until this read
        // it from the DER instead (SPEC-015 amendment 5). PHP 8.4 and later do report \`ed25519\`
        // details, and the branch that read them is gone (step 65b): mutation testing showed no test
        // can tell the two apart, because this OID read answers identically on every version. One
        // path for one question; CI on 8.4 is what proves it, since that is where the details exist.
        if (is_string($key['key'] ?? null)) {
            $spki = base64_decode(preg_replace('/-----[^-]+-----|\\s/', '', $key['key']) ?? '', true);
            if ($spki !== false && str_contains(substr($spki, 0, 32), "\\x06\\x03\\x2b\\x65\\x70")) {
                return ['Ed25519', $bits === 0 ? 256 : $bits, null];
            }
            if ($spki !== false && (str_contains($spki, "\\x06\\x09\\x2a\\x86\\x48\\x86\\xf7\\x0d\\x01\\x01\\x0a") || str_contains($spki, "\\x06\\x09\\x2a\\x86\\x48\\x86\\xf7\\x0d\\x01\\x01\\x01"))) {
                return ['RSA', $bits, null];
            }
        }

        return ['other', $bits, null];
    }

    /** @return list<string> */
    private static function names(string $list): array
    {
        return array_values(array_filter(array_map(trim(...), explode(',', $list)), static fn (string $n): bool => $n !== ''));
    }

    /** @return list<string> */
    private static function ekuOids(string $list): array
    {
        return array_map(static fn (string $name): string => self::EKU_NAMES[$name] ?? $name, self::names($list));
    }

    /** Base 16 → base 10 on strings (SPEC-015); the routine lives in Support\\Bytes since SPEC-016 shares it. */
    public static function hexToDecimal(string $hex): string
    {
        return Bytes::hexToDecimal($hex);
    }

    private static function opensslError(): string
    {
        $last = '';
        while (($message = openssl_error_string()) !== false) {
            $last = $message;
        }

        return $last === '' ? 'OpenSSL gave no reason' : $last;
    }
}
`,"src/Trust/CertificateProfileCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Trust;

use Provemark\\C2paVerifier\\Cose\\CoseException;
use Provemark\\C2paVerifier\\Cose\\CoseSign1;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The certificate profile as a list of statuses (SPEC-015; C2PA 2.4 §14.5):
 * is the leaf of the x5chain a C2PA signing certificate? End-entity, v3,
 * within its validity at the signing time (now, until M6 hands over the
 * timestamp), an allowed signature algorithm and key, a KeyUsage that
 * permits signing, an ExtendedKeyUsage from the accepted list — the
 * built-in six plus what the settings add, never fewer (ADR-0003) — and an
 * AuthorityKeyIdentifier. Every fault is its own signingCredential.invalid;
 * validity is signingCredential.expired. The rules are c2pa-rs's
 * certificate_profile.rs, read to the end in step 33, on what ext-openssl
 * reports; unknown critical extensions are the one rule it cannot see.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class CertificateProfileCheck
{
    /** c2pa-rs's valid_eku_oids.cfg: emailProtection, documentSigning, timeStamping, OCSPSigning, MS C2PA Signing, C2PA Signing. */
    public const BUILT_IN_EKUS = ['1.3.6.1.5.5.7.3.4', '1.3.6.1.5.5.7.3.36', '1.3.6.1.5.5.7.3.8', '1.3.6.1.5.5.7.3.9', '1.3.6.1.4.1.311.76.59.1.9', '1.3.6.1.4.1.62558.2.1'];

    private const SIGNATURE_ALGORITHMS = ['sha256WithRSAEncryption', 'sha384WithRSAEncryption', 'sha512WithRSAEncryption', 'ecdsa-with-SHA256', 'ecdsa-with-SHA384', 'ecdsa-with-SHA512', 'ED25519', 'rsassaPss'];

    private const CURVES = ['prime256v1', 'secp384r1', 'secp521r1'];

    private const EKU_TIME_STAMPING = '1.3.6.1.5.5.7.3.8';

    private const EKU_OCSP_SIGNING = '1.3.6.1.5.5.7.3.9';

    /**
     * @param  int|null  $at  the epoch to judge validity at — a trusted timestamp's time (SPEC-017); null = now
     * @param  string|null  $reason  why $at is what it is, for the \`.expired\` message ("no timestamp", "the timestamp's TSA is not trusted", …)
     * @return list<ValidationStatus>
     */
    public function check(Manifest $manifest, ?TrustSettings $settings = null, ?int $at = null, ?string $reason = null): array
    {
        $url = sprintf('self#jumbf=/c2pa/%s/c2pa.signature', $manifest->label);
        try {
            $chain = CoseSign1::fromBytes($manifest->signatureBytes())->chain;
            if ($chain === []) {
                return [new ValidationStatus(StatusCode::SigningCredentialInvalid, $url, 'x5chain holds no certificate')];
            }
            $certificates = array_map(static fn ($c): Certificate => Certificate::fromDer($c->bytes), $chain);
            $leaf = $certificates[0];
        } catch (CoseException $e) {
            return [new ValidationStatus($e->status, $url, $e->getMessage())];
        } catch (TrustException $e) {
            return [new ValidationStatus(StatusCode::SigningCredentialInvalid, $url, sprintf('the signing certificate could not be read: %s', $e->getMessage()))];
        }

        return $this->checkLeaf($leaf, $settings, $at, $url, $this->acceptedEkus($certificates, $settings), $reason);
    }

    /**
     * The EKUs accepted for this chain: the built-in list, the top-level
     * \`trust_config\`, and the \`trust_config\` of every "manifest" entry the
     * chain reaches — never another entry's (C2PA 2.4 §14.4.1; SPEC-031 AC8).
     *
     * @param  non-empty-list<Certificate>  $chain
     * @return list<string>
     */
    private function acceptedEkus(array $chain, ?TrustSettings $settings): array
    {
        $accepted = [...self::BUILT_IN_EKUS, ...($settings === null ? [] : $settings->trustConfig)];
        foreach ($settings === null ? [] : $settings->anchorSets as $set) {
            if ($set->kind !== TrustAnchorSet::MANIFEST || $set->trustConfig === []) {
                continue;
            }
            $reached = (new ChainCheck)->checkCertificates($chain, new TrustSettings($set->anchors, $set->allowedList), '');
            if (($reached[0] ?? null)?->code === StatusCode::SigningCredentialTrusted) {
                $accepted = [...$accepted, ...$set->trustConfig];
            }
        }

        return array_values(array_unique($accepted));
    }

    /**
     * The profile on one certificate — the seam for the rules no re-signed file can show (SPEC-015 AC4, AC6).
     *
     * @param  list<string>|null  $ekus  non-null replaces the accepted EKU list (built-in + trust_config) — SPEC-017: a TSA needs timeStamping alone
     * @param  string|null  $reason  why $at is what it is, for the \`.expired\` message
     * @return list<ValidationStatus>
     */
    public function checkLeaf(Certificate $leaf, ?TrustSettings $settings, ?int $at, string $url, ?array $ekus = null, ?string $reason = null): array
    {
        $faults = [];
        $invalid = static fn (string $reason): ValidationStatus => new ValidationStatus(StatusCode::SigningCredentialInvalid, $url, 'signing certificate invalid: '.$reason);

        // 1. an end-entity
        if ($leaf->isCa) {
            $faults[] = $invalid(sprintf('%s is a CA certificate (basicConstraints CA:TRUE); a C2PA signing certificate is an end-entity', $leaf->subjectCn()));
        }
        // 2. X.509 v3
        if ($leaf->version !== 3) {
            $faults[] = $invalid(sprintf('X.509 version %d; a C2PA signing certificate is version 3', $leaf->version));
        }
        // 3. validity at the signing time: a trusted timestamp's time, else now (C2PA 2.4 §14.6.1; SPEC-017)
        $time = $at ?? time();
        if ($time < $leaf->validFrom || $time > $leaf->validTo) {
            $faults[] = new ValidationStatus(StatusCode::SigningCredentialExpired, $url, sprintf(
                'signing certificate %s at %s: valid from %s to %s, checked at %s (%s)',
                $time < $leaf->validFrom ? 'not yet valid' : 'expired',
                gmdate('Y-m-d\\TH:i:s\\Z', $time),
                gmdate('Y-m-d\\TH:i:s\\Z', $leaf->validFrom),
                gmdate('Y-m-d\\TH:i:s\\Z', $leaf->validTo),
                $at === null ? 'now' : "the timestamp's time",
                $reason ?? ($at === null ? 'no timestamp' : 'from a trusted timestamp'),
            ));
        }
        // 4. the signature algorithm
        if (! in_array($leaf->signatureAlgorithm, self::SIGNATURE_ALGORITHMS, true)) {
            $faults[] = $invalid(sprintf('signature algorithm %s is not one of %s (C2PA 2.4 §14.5)', $leaf->signatureAlgorithm, implode(', ', self::SIGNATURE_ALGORITHMS)));
        }
        // 5. the key
        $faults = [...$faults, ...array_map($invalid, $this->keyFaults($leaf))];
        // 6. KeyUsage, as c2pa-rs keeps it
        if ($leaf->keyUsage === null) {
            $faults[] = $invalid('no KeyUsage extension; a C2PA signing certificate carries one with digitalSignature');
        } else {
            $digital = in_array('Digital Signature', $leaf->keyUsage, true);
            $certSign = in_array('Certificate Sign', $leaf->keyUsage, true);
            $nonRepudiation = in_array('Non Repudiation', $leaf->keyUsage, true);
            if ($digital && $certSign && ! $leaf->isCa) {
                $faults[] = $invalid('KeyUsage carries Digital Signature together with Certificate Sign on an end-entity certificate');
            } elseif (! $digital && ! $certSign && ! $nonRepudiation) {
                $faults[] = $invalid(sprintf('KeyUsage (%s) permits no signing: neither Digital Signature nor Non Repudiation', implode(', ', $leaf->keyUsage)));
            }
        }
        // 7. ExtendedKeyUsage
        $faults = [...$faults, ...array_map($invalid, $this->ekuFaults($leaf, $settings, $ekus))];
        // 8. AuthorityKeyIdentifier
        if (! $leaf->hasAuthorityKeyIdentifier) {
            $faults[] = $invalid('no AuthorityKeyIdentifier extension');
        }

        return $faults;
    }

    /** @return list<string> */
    private function keyFaults(Certificate $leaf): array
    {
        return match ($leaf->keyType) {
            'EC' => in_array($leaf->curve, self::CURVES, true) ? [] : [sprintf('EC key on %s; C2PA 2.4 §14.5 allows %s', $leaf->curve ?? '(unknown curve)', implode(', ', self::CURVES))],
            'RSA' => $leaf->keyBits >= 2048 ? [] : [sprintf('RSA key of %d bits; C2PA 2.4 §14.5 requires at least 2048', $leaf->keyBits)],
            'Ed25519' => [],
            default => [sprintf('key of type %s (%d bits); C2PA 2.4 §14.5 allows EC on P-256/384/521, RSA of 2048 bits or more, Ed25519', $leaf->keyType, $leaf->keyBits)],
        };
    }

    /**
     * @param  list<string>|null  $override  the accepted list when given (SPEC-017: the TSA's)
     * @return list<string>
     */
    private function ekuFaults(Certificate $leaf, ?TrustSettings $settings, ?array $override = null): array
    {
        $ekus = $leaf->extendedKeyUsage;
        if ($ekus === null) {
            return $leaf->isCa ? [] : ['no ExtendedKeyUsage extension on an end-entity certificate'];
        }
        if (in_array(Certificate::EKU_ANY, $ekus, true)) {
            return ['ExtendedKeyUsage carries anyExtendedKeyUsage, which C2PA 2.4 §14.5 forbids'];
        }
        $accepted = $override ?? [...self::BUILT_IN_EKUS, ...($settings === null ? [] : $settings->trustConfig)];
        if (array_intersect($ekus, $accepted) === []) {
            return [sprintf('ExtendedKeyUsage (%s) holds none of the accepted values (%s)', implode(', ', $leaf->extendedKeyUsageNames()), implode(', ', $accepted))];
        }
        $timeStamping = in_array(self::EKU_TIME_STAMPING, $ekus, true);
        $ocsp = in_array(self::EKU_OCSP_SIGNING, $ekus, true);
        if ($timeStamping && $ocsp) {
            return ['ExtendedKeyUsage carries both OCSP Signing and Time Stamping'];
        }
        if ($timeStamping || $ocsp) {
            $others = array_values(array_filter($ekus, static fn (string $oid): bool => $oid !== self::EKU_TIME_STAMPING && $oid !== self::EKU_OCSP_SIGNING));
            if ($others !== []) {
                return [sprintf('ExtendedKeyUsage combines %s with %s; a time-stamping or OCSP certificate carries nothing else', $timeStamping ? 'Time Stamping' : 'OCSP Signing', implode(', ', $leaf->extendedKeyUsageNames()))];
            }
        }

        return [];
    }
}
`,"src/Trust/ChainCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Trust;

use Provemark\\C2paVerifier\\Cose\\CoseException;
use Provemark\\C2paVerifier\\Cose\\CoseSign1;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * The trust check as a list of statuses (SPEC-014; C2PA 2.4 §14.4.1,
 * §15.7): the leaf certificate of the COSE x5chain is trusted when its
 * SHA-256 is on the allowed list, or when the chain walks — issuer name
 * matching and openssl_x509_verify() on every link — to a certificate that
 * is an anchor or is signed by one (c2pa-rs's PARTIAL_CHAIN). Everything
 * else is signingCredential.untrusted with the step that failed. Never by
 * name alone: two of the test roots share one subject and differ in key.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class ChainCheck
{
    /** @return list<ValidationStatus> */
    public function check(Manifest $manifest, TrustSettings $settings, ?int $at = null): array
    {
        if (! $settings->verifyTrust) {
            return [];
        }
        $url = sprintf('self#jumbf=/c2pa/%s/c2pa.signature', $manifest->label);

        try {
            $cose = CoseSign1::fromBytes($manifest->signatureBytes());
            $chain = array_map(static fn ($c): Certificate => Certificate::fromDer($c->bytes), $cose->chain);
        } catch (CoseException $e) {
            return [new ValidationStatus($e->status, $url, $e->getMessage())];
        } catch (TrustException $e) {
            return [new ValidationStatus(StatusCode::SigningCredentialInvalid, $url, sprintf('a certificate in x5chain could not be read: %s', $e->getMessage()))];
        }
        if ($chain === []) {
            return [new ValidationStatus(StatusCode::SigningCredentialInvalid, $url, 'x5chain holds no certificate')];
        }

        $statuses = $this->checkCertificates($chain, $settings, $url, $at);
        $note = self::kindNote($settings, TrustAnchorSet::MANIFEST, $chain);
        if ($note === '') {
            return $statuses;
        }

        // an untrusted signer, with entries of another kind configured: say they were not used, and why (SPEC-031 AC6)
        return array_map(static fn (ValidationStatus $s): ValidationStatus => $s->code === StatusCode::SigningCredentialUntrusted
            ? new ValidationStatus($s->code, $s->url, $s->explanation.$note)
            : $s, $statuses);
    }

    /**
     * The allowed list, then the walk, on a chain given as certificates, leaf
     * first — the seam SPEC-017 uses for a TSA's certificates (SPEC-014
     * amendment 2). \`verify_trust\` is the caller's to honour.
     *
     * Every certificate that issues another in the walk must be allowed to
     * (SPEC-014 amendment 4): an x5chain intermediate and an anchor alike.
     * $at is the time the leaf is judged at (a trusted timestamp's genTime),
     * or null for now.
     *
     * @param  non-empty-list<Certificate>  $chain
     * @return list<ValidationStatus>
     */
    public function checkCertificates(array $chain, TrustSettings $settings, string $url, ?int $at = null): array
    {
        $leaf = $chain[0];

        // the allowed list first: a listed end-entity certificate needs no chain (c2pa-rs: EndEntity)
        $anchors = self::anchorsOf($settings);
        foreach (self::allowedListOf($settings) as $allowed) {
            if (hash_equals($allowed->sha256, $leaf->sha256)) {
                return [new ValidationStatus(StatusCode::SigningCredentialTrusted, $url, sprintf('signing certificate trusted: %s is on the allowed list (sha256 %s)', $leaf->subjectCn(), bin2hex($leaf->sha256)))];
            }
        }
        if ($anchors === []) {
            return [new ValidationStatus(StatusCode::SigningCredentialUntrusted, $url, sprintf('signing certificate untrusted: %s is not on the allowed list and no trust anchors are configured', $leaf->subjectCn()))];
        }

        // the walk, from the leaf, through the chain the signer supplied
        $current = $leaf;
        $anchorFault = null;
        foreach ($chain as $depth => $_) {
            foreach ($anchors as $anchor) {
                // depth = links walked from the leaf to the anchor: the leaf itself an anchor is 0, the leaf signed by one is 1
                if ($current->sameAs($anchor)) {
                    return [new ValidationStatus(StatusCode::SigningCredentialTrusted, $url, sprintf('signing certificate trusted: %s is itself a trust anchor (depth %d)', $current->subjectCn(), $depth))];
                }
                if ($current->issuer === $anchor->subject && $current->signedBy($anchor)) {
                    // the anchor issued $current: $depth intermediates lie between it and the leaf
                    $fault = self::issuerFault($anchor, $current, $depth, null);
                    if ($fault !== null) {
                        $anchorFault ??= $fault;

                        continue;
                    }

                    return [new ValidationStatus(StatusCode::SigningCredentialTrusted, $url, sprintf('signing certificate trusted: the chain reaches the trust anchor %s at depth %d (%s)', $anchor->subjectCn(), $depth + 1, implode(' → ', [...array_map(static fn (Certificate $c): string => $c->subjectCn(), array_slice($chain, 0, $depth + 1)), $anchor->subjectCn()])))];
                }
            }
            $next = $chain[$depth + 1] ?? null;
            if ($next === null) {
                if ($anchorFault !== null) {
                    return [new ValidationStatus(StatusCode::SigningCredentialUntrusted, $url, sprintf('signing certificate untrusted: %s', $anchorFault))];
                }
                $nameMatch = $this->anchorWithSubject($settings, $current->issuer);

                return [new ValidationStatus(StatusCode::SigningCredentialUntrusted, $url, $nameMatch === null
                    ? sprintf('signing certificate untrusted: the chain ends at %s (depth %d), issued by %s, which the chain does not carry and no trust anchor signs', $current->subjectCn(), $depth, $current->issuerCn())
                    : sprintf('signing certificate untrusted: the chain ends at %s (depth %d); a trust anchor carries the issuer name %s but its key did not make the signature — a name is not a proof', $current->subjectCn(), $depth, $current->issuerCn()),
                )];
            }
            if ($current->issuer !== $next->subject) {
                return [new ValidationStatus(StatusCode::SigningCredentialUntrusted, $url, sprintf('signing certificate untrusted: %s (depth %d) is issued by %s, but the next certificate in x5chain is %s', $current->subjectCn(), $depth, $current->issuerCn(), $next->subjectCn()))];
            }
            if (! $current->signedBy($next)) {
                return [new ValidationStatus(StatusCode::SigningCredentialUntrusted, $url, sprintf('signing certificate untrusted: the signature of %s (depth %d) does not verify under %s', $current->subjectCn(), $depth, $next->subjectCn()))];
            }
            $fault = self::issuerFault($next, $current, $depth, $at ?? time());
            if ($fault !== null) {
                return [new ValidationStatus(StatusCode::SigningCredentialUntrusted, $url, sprintf('signing certificate untrusted: %s', $fault))];
            }
            $current = $next;
        }

        return [new ValidationStatus(StatusCode::SigningCredentialUntrusted, $url, sprintf('signing certificate untrusted: %d certificates walked, none an anchor or signed by one', count($chain)))];
    }

    /**
     * The anchors a signer's chain may reach: the legacy list and every
     * "manifest" entry's (SPEC-031 AC6).
     *
     * @return list<Certificate>
     */
    public static function anchorsOf(TrustSettings $settings): array
    {
        return [...$settings->trustAnchors, ...array_merge(...array_map(static fn (TrustAnchorSet $set): array => $set->kind === TrustAnchorSet::MANIFEST ? $set->anchors : [], $settings->anchorSets))];
    }

    /**
     * The end-entity certificates trusted without a chain: the legacy list
     * (reachable only through the constructor since SPEC-031) and every
     * "manifest" entry's.
     *
     * @return list<Certificate>
     */
    public static function allowedListOf(TrustSettings $settings): array
    {
        return [...$settings->allowedList, ...array_merge(...array_map(static fn (TrustAnchorSet $set): array => $set->allowedList, $settings->anchorSets))];
    }

    /**
     * The anchors a time-stamping authority's chain may reach: the legacy
     * list and every "tsa" entry's (C2PA 2.4 §14.4.2; SPEC-031 AC6).
     *
     * @return list<Certificate>
     */
    public static function tsaAnchorsOf(TrustSettings $settings): array
    {
        return [...$settings->trustAnchors, ...array_merge(...array_map(static fn (TrustAnchorSet $set): array => $set->kind === TrustAnchorSet::TSA ? $set->anchors : [], $settings->anchorSets))];
    }

    /**
     * For an untrusted outcome: a sentence naming the entries of another
     * kind that this chain *would* have reached, which were deliberately not
     * used — or '' when no such entry exists (SPEC-031 AC6).
     *
     * @param  non-empty-list<Certificate>  $chain  leaf first
     */
    public static function kindNote(TrustSettings $settings, string $kind, array $chain): string
    {
        $reached = [];
        foreach ($settings->anchorSets as $i => $set) {
            if ($set->kind === $kind) {
                continue;
            }
            $outcome = (new ChainCheck)->checkCertificates($chain, new TrustSettings($set->anchors, $set->allowedList), '');
            if (($outcome[0] ?? null)?->code === StatusCode::SigningCredentialTrusted) {
                $reached[] = sprintf('trust.anchors[%d] ("%s")', $i, $set->kind);
            }
        }
        if ($reached === []) {
            return '';
        }

        return sprintf(
            '; the chain reaches an anchor in %s, which is not used here: every entry counts only for its own trust_kind (C2PA 2.4 §14.4.2)',
            implode(', ', $reached),
        );
    }

    /**
     * Why $issuer may not have issued $issued, or null when it may (SPEC-014
     * amendment 4; RFC 5280 §4.2.1.9, §4.2.1.3, §6.1.4): it must be a CA, carry
     * keyCertSign when keyUsage is present, allow $below intermediates under it,
     * and, when $at is given (an x5chain intermediate, not an anchor), be valid then.
     */
    private static function issuerFault(Certificate $issuer, Certificate $issued, int $below, ?int $at): ?string
    {
        if (! $issuer->isCa) {
            return sprintf('%s issued %s but is not a certificate authority (basicConstraints lacks CA:TRUE)', $issuer->subjectCn(), $issued->subjectCn());
        }
        if ($issuer->keyUsage !== null && ! in_array('Certificate Sign', $issuer->keyUsage, true)) {
            return sprintf('%s issued %s but its keyUsage lacks keyCertSign', $issuer->subjectCn(), $issued->subjectCn());
        }
        if ($issuer->pathLen !== null && $below > $issuer->pathLen) {
            return sprintf('%s allows a path length of %d, but %d intermediate certificate(s) follow it', $issuer->subjectCn(), $issuer->pathLen, $below);
        }
        if ($at !== null && ($at < $issuer->validFrom || $at > $issuer->validTo)) {
            return sprintf('the intermediate %s is not valid at %s (valid from %s to %s)', $issuer->subjectCn(), gmdate('Y-m-d\\TH:i:s\\Z', $at), gmdate('Y-m-d\\TH:i:s\\Z', $issuer->validFrom), gmdate('Y-m-d\\TH:i:s\\Z', $issuer->validTo));
        }

        return null;
    }

    /** @param  array<string, mixed>  $subject */
    private function anchorWithSubject(TrustSettings $settings, array $subject): ?Certificate
    {
        foreach (self::anchorsOf($settings) as $anchor) {
            if ($anchor->subject === $subject) {
                return $anchor;
            }
        }

        return null;
    }
}
`,"src/Trust/OcspCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Trust;

use Provemark\\C2paVerifier\\Asn1\\Asn1Exception;
use Provemark\\C2paVerifier\\Asn1\\Der;
use Provemark\\C2paVerifier\\Asn1\\DerReader;
use Provemark\\C2paVerifier\\Asn1\\TagClass;
use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Cose\\CoseException;
use Provemark\\C2paVerifier\\Cose\\OpenSsl;
use Provemark\\C2paVerifier\\Cose\\PublicKey;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;

/**
 * Revocation as far as it can be known without a network: the OCSP responses a
 * signer staples into its own signature (SPEC-030; RFC 6960, RFC 5019 §3.2).
 *
 * The header carrying them, \`rVals\`, sits in the COSE **unprotected** bucket —
 * measured, step 91 — so it is not covered by the signature and anyone holding
 * the file can add one, alter it or strip it out. Four rules follow, and they
 * are why this class is shaped the way it is:
 *
 * 1. A stapled response may never raise trust. \`notRevoked\` is recorded as a
 *    fact about what was found, and its explanation says where it came from.
 * 2. A response that cannot be verified may never fail the file: otherwise
 *    editing one unsigned byte would deny any valid asset. Everything
 *    unreadable, unverifiable or about another certificate is *skipped*.
 * 3. Only a response that verifies under a responder tied to the signer's own
 *    issuer may lower trust. Then it is evidence no attacker could forge.
 * 4. Absence proves nothing, so absence is said out loud — every file without
 *    an \`rVals\` gets one \`signingCredential.ocsp.skipped\`.
 *
 * Online OCSP, AIA and CRLs stay out: there is no network in this verifier's
 * verification path, and that is a rule of the project rather than a milestone.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the ten classes named in the README.
 */
final readonly class OcspCheck
{
    public const DEFAULT_MAX_RESPONSES = 4;

    public const DEFAULT_MAX_RESPONSE_BYTES = 65536;

    /**
     * id-pkix-ocsp-basic, the only response type RFC 6960 defines. Note the last
     * arc: \`1.3.6.1.5.5.7.48.1\` is id-pkix-ocsp, the access method in an AIA
     * extension, and \`…48.1.1\` is the response type. SPEC-030 amendment 2.
     */
    private const OID_BASIC = '1.3.6.1.5.5.7.48.1.1';

    private const OID_EKU_OCSP_SIGNING = '1.3.6.1.5.5.7.3.9';

    /** CertID hash algorithms. sha1 is here because responders still use it for the *name* hash, which is not a signature. */
    private const HASHES = [
        '1.3.14.3.2.26' => 'sha1',
        '2.16.840.1.101.3.4.2.1' => 'sha256',
        '2.16.840.1.101.3.4.2.2' => 'sha384',
        '2.16.840.1.101.3.4.2.3' => 'sha512',
    ];

    /**
     * signatureAlgorithm OID => the hash openssl_verify needs. A second, smaller
     * copy of TimestampCheck's table on purpose: the trust layer may not depend on
     * the timestamp layer, and sharing it would invert that.
     */
    private const SIGNATURE_HASHES = [
        '1.2.840.113549.1.1.11' => 'sha256',
        '1.2.840.113549.1.1.12' => 'sha384',
        '1.2.840.113549.1.1.13' => 'sha512',
        '1.2.840.10045.4.3.2' => 'sha256',
        '1.2.840.10045.4.3.3' => 'sha384',
        '1.2.840.10045.4.3.4' => 'sha512',
    ];

    private const OPENSSL_ALGOS = ['sha256' => OPENSSL_ALGO_SHA256, 'sha384' => OPENSSL_ALGO_SHA384, 'sha512' => OPENSSL_ALGO_SHA512];

    /** RFC 5280 §5.3.1. 8 is removeFromCRL, which un-revokes rather than revokes. */
    private const REASONS = [
        0 => 'unspecified', 1 => 'keyCompromise', 2 => 'cACompromise', 3 => 'affiliationChanged',
        4 => 'superseded', 5 => 'cessationOfOperation', 6 => 'certificateHold', 8 => 'removeFromCRL',
        9 => 'privilegeWithdrawn', 10 => 'aACompromise',
    ];

    private const REASON_REMOVE_FROM_CRL = 8;

    public function __construct(
        private DerReader $reader = new DerReader,
        private int $maxResponses = self::DEFAULT_MAX_RESPONSES,
        private int $maxResponseBytes = self::DEFAULT_MAX_RESPONSE_BYTES,
    ) {}

    /**
     * Exactly one status, always: what this verifier knows about the signer's
     * revocation, or why it knows nothing.
     *
     * @param  array<int|string, mixed>  $unprotected  the COSE unprotected header
     * @param  list<Certificate>  $chain  the signer's chain, leaf first
     * @param  int|null  $at  the judged time — a trusted timestamp's, else null for now
     * @return list<ValidationStatus>
     */
    public function check(array $unprotected, array $chain, ?int $at, string $url): array
    {
        $time = $at ?? time();
        $skipped = fn (string $why): array => [new ValidationStatus(StatusCode::SigningCredentialOcspSkipped, $url, 'revocation not checked: '.$why)];

        $ders = $this->responseBytes($unprotected);
        if (is_string($ders)) {
            return $skipped($ders);
        }
        if ($ders === []) {
            return $skipped('the signature staples no OCSP response, and this verifier makes no network request (SPEC-014); absence is not evidence that the certificate was never revoked');
        }
        if (count($chain) < 2) {
            return $skipped(sprintf('the signer\\'s issuer is not in the x5chain (%d certificate(s)), so no response can be matched to it', count($chain)));
        }
        $leaf = $chain[0];
        $issuer = $chain[1];

        $reasons = [];
        $best = null;
        foreach ($ders as $i => $der) {
            $single = $this->usable($der, $leaf, $issuer, $i);
            if (is_string($single)) {
                $reasons[] = $single;

                continue;
            }
            // a revoked answer wins over any other, whichever order they were stapled in
            if ($single['status'] === 'revoked') {
                $best = $single;
                break;
            }
            $best ??= $single;
        }

        if ($best === null) {
            return $skipped(implode('; ', $reasons));
        }

        return [$this->statusOf($best, $leaf, $time, $url, $skipped)];
    }

    /**
     * \`rVals.ocspVals\` as a list of DER strings, or the reason there is none.
     *
     * Everything here answers with a reason rather than an exception: the header is
     * unsigned, so a malformed one says nothing about the asset.
     *
     * @param  array<int|string, mixed>  $unprotected
     * @return list<string>|string
     */
    private function responseBytes(array $unprotected): array|string
    {
        $rVals = $unprotected['rVals'] ?? null;
        if ($rVals === null) {
            return [];
        }
        if (! is_array($rVals)) {
            return sprintf('the rVals header is %s, not a map (RFC 6960; C2PA 2.4 §14)', get_debug_type($rVals));
        }
        // an empty CBOR map decodes to the same PHP value as an empty list, so it is
        // read as a header that carries nothing rather than as one of the wrong type
        if ($rVals === []) {
            return 'the rVals header is empty';
        }
        if (array_is_list($rVals)) {
            return 'the rVals header is a list, not a map (RFC 6960; C2PA 2.4 §14)';
        }
        $vals = $rVals['ocspVals'] ?? null;
        if ($vals === null) {
            // crlVals and anything else: named, not refused — the header is unsigned
            return sprintf('the rVals header carries no ocspVals (it has: %s)', implode(', ', array_map('strval', array_keys($rVals))));
        }
        if (! is_array($vals)) {
            return sprintf('ocspVals is %s, not a list', get_debug_type($vals));
        }
        if (! array_is_list($vals)) {
            return 'ocspVals is a map, not a list';
        }
        if (count($vals) > $this->maxResponses) {
            return sprintf('%d stapled responses exceed the limit of %d', count($vals), $this->maxResponses);
        }
        $ders = [];
        foreach ($vals as $i => $value) {
            if (! $value instanceof CborBytes) {
                return sprintf('ocspVals[%d] is %s, not a byte string', $i, get_debug_type($value));
            }
            if (strlen($value->bytes) > $this->maxResponseBytes) {
                return sprintf('ocspVals[%d] is %d bytes, over the limit of %d', $i, strlen($value->bytes), $this->maxResponseBytes);
            }
            $ders[] = $value->bytes;
        }

        return $ders;
    }

    /**
     * One response, parsed, matched to this certificate and verified — or the reason it cannot be used.
     *
     * @return array{status: string, revokedAt: int|null, reason: int|null, thisUpdate: int, nextUpdate: int|null, responder: string, producedAt: int}|string
     */
    private function usable(string $der, Certificate $leaf, Certificate $issuer, int $i): array|string
    {
        try {
            $response = $this->reader->read($der);
            $parts = $response->sequence();
            $statusByte = $parts[0] ?? null;
            if ($statusByte === null || ! $statusByte->is(TagClass::Universal, 10) || $statusByte->contents === '') {
                return sprintf('response %d has no OCSPResponseStatus', $i);
            }
            $responseStatus = ord($statusByte->contents[0]);
            if ($responseStatus !== 0) {
                return sprintf('response %d is not successful: OCSPResponseStatus %d', $i, $responseStatus);
            }
            $bytes = $parts[1] ?? null;
            if ($bytes === null) {
                return sprintf('response %d carries no responseBytes', $i);
            }
            $inner = $bytes->tagged(0)->child(0)->sequence();
            $type = ($inner[0] ?? null)?->oid();
            if ($type !== self::OID_BASIC) {
                return sprintf('response %d is of type %s, not id-pkix-ocsp-basic', $i, $type ?? 'nothing');
            }
            $basic = $this->reader->read(($inner[1] ?? null)?->octets() ?? '')->sequence();
            $tbs = $basic[0] ?? null;
            $algorithm = $basic[1] ?? null;
            $signature = $basic[2] ?? null;
            if ($tbs === null || $algorithm === null || $signature === null) {
                return sprintf('response %d is not a BasicOCSPResponse', $i);
            }

            $data = $tbs->sequence();
            // ResponseData's version is [0] EXPLICIT and DEFAULT v1, so it is usually absent
            $first = $tbs->element(0);
            $offset = $first->class === TagClass::ContextSpecific && $first->tag === 0 ? 1 : 0;
            $responderId = $data[$offset] ?? null;
            $producedAt = ($data[$offset + 1] ?? null)?->time();
            $responses = $data[$offset + 2] ?? null;
            if ($producedAt === null || $responses === null) {
                return sprintf('response %d has no producedAt or no responses', $i);
            }
            $single = $this->matching($responses->sequence(), $leaf, $issuer);
            if ($single === null) {
                return sprintf('response %d answers about no certificate in this chain', $i);
            }

            $responder = $this->responder($basic[3] ?? null, $issuer);
            if (is_string($responder)) {
                return sprintf('response %d: %s', $i, $responder);
            }
            $verified = $this->verify($tbs->encoded(), $signature, $algorithm, $responder);
            if ($verified !== null) {
                return sprintf('response %d: %s', $i, $verified);
            }

            return $single + ['responder' => $responder->subjectCn(), 'producedAt' => $producedAt];
        } catch (Asn1Exception|TrustException|CoseException $e) {
            return sprintf('response %d could not be read: %s', $i, $e->getMessage());
        }
    }

    /**
     * The SingleResponse whose CertID names this certificate, or null.
     *
     * @param  list<Der>  $singles
     * @return array{status: string, revokedAt: int|null, reason: int|null, thisUpdate: int, nextUpdate: int|null}|null
     *
     * @throws Asn1Exception
     */
    private function matching(array $singles, Certificate $leaf, Certificate $issuer): ?array
    {
        foreach ($singles as $single) {
            $fields = $single->sequence();
            $certId = ($fields[0] ?? null)?->sequence();
            $status = $fields[1] ?? null;
            if ($certId === null || $status === null || count($certId) < 4) {
                continue;
            }
            $algorithm = self::HASHES[$certId[0]->child(0)->oid()] ?? null;
            if ($algorithm === null) {
                continue;
            }
            if ($certId[3]->integer() !== $leaf->serialDecimal) {
                continue;
            }
            $nameHash = self::issuerName($issuer);
            $keyHash = self::issuerKey($issuer);
            if ($nameHash === null || $keyHash === null) {
                continue;
            }
            if (! hash_equals(hash($algorithm, $nameHash, true), $certId[1]->octets())
                || ! hash_equals(hash($algorithm, $keyHash, true), $certId[2]->octets())) {
                continue;
            }

            $thisUpdate = ($fields[2] ?? null)?->time();
            if ($thisUpdate === null) {
                continue;
            }
            $nextUpdate = null;
            foreach (array_slice($fields, 3) as $extra) {
                if ($extra->class === TagClass::ContextSpecific && $extra->tag === 0) {
                    $nextUpdate = $extra->child(0)->time();
                }
            }

            return self::certStatus($status) + ['thisUpdate' => $thisUpdate, 'nextUpdate' => $nextUpdate];
        }

        return null;
    }

    /**
     * \`good\` / \`revoked\` / \`unknown\`, with the revocation's time and reason.
     *
     * @return array{status: string, revokedAt: int|null, reason: int|null}
     *
     * @throws Asn1Exception
     */
    private static function certStatus(Der $status): array
    {
        if ($status->class !== TagClass::ContextSpecific) {
            return ['status' => 'unknown', 'revokedAt' => null, 'reason' => null];
        }
        if ($status->tag === 0) {
            return ['status' => 'good', 'revokedAt' => null, 'reason' => null];
        }
        if ($status->tag !== 1) {
            return ['status' => 'unknown', 'revokedAt' => null, 'reason' => null];
        }
        // [1] RevokedInfo, IMPLICIT: its children are revocationTime and [0] CRLReason
        $revokedAt = $status->childCount() > 0 ? $status->child(0)->time() : null;
        $reason = null;
        for ($i = 1; $i < $status->childCount(); $i++) {
            $child = $status->child($i);
            if ($child->class === TagClass::ContextSpecific && $child->tag === 0) {
                $enumerated = $child->childCount() > 0 ? $child->child(0)->contents : $child->contents;
                $reason = $enumerated === '' ? null : ord($enumerated[strlen($enumerated) - 1]);
            }
        }

        return ['status' => 'revoked', 'revokedAt' => $revokedAt, 'reason' => $reason];
    }

    /**
     * Whoever signed this response: the issuer itself, or a delegated responder it issued.
     *
     * RFC 6960 §4.2.2.2 allows exactly these two. A certificate in \`certs\` that the
     * issuer did not sign, or that lacks id-kp-OCSPSigning, is not a responder —
     * believing one would let anybody answer for anybody.
     *
     *
     * @throws Asn1Exception
     */
    private function responder(?Der $certs, Certificate $issuer): Certificate|string
    {
        if ($certs === null) {
            return $issuer;
        }
        foreach ($certs->tagged(0)->child(0)->sequence() as $element) {
            try {
                $candidate = Certificate::fromDer($element->encoded());
            } catch (TrustException) {
                continue;
            }
            if ($candidate->sameAs($issuer)) {
                return $issuer;
            }
            if (! $candidate->signedBy($issuer)) {
                continue;
            }
            if (! in_array(self::OID_EKU_OCSP_SIGNING, $candidate->extendedKeyUsage ?? [], true)) {
                return sprintf('the responder %s has no id-kp-OCSPSigning (RFC 6960 §4.2.2.2)', $candidate->subjectCn());
            }

            return $candidate;
        }

        return $issuer;
    }

    /** null when the signature verifies, else why it does not. */
    private function verify(string $message, Der $signature, Der $algorithm, Certificate $responder): ?string
    {
        $oid = $algorithm->child(0)->oid();
        $hash = self::SIGNATURE_HASHES[$oid] ?? null;
        if ($hash === null) {
            return sprintf('the response is signed with %s, which this verifier does not implement', $oid);
        }
        // BIT STRING is universal tag 3; Der names the ten tags it reads and this is not one of them
        if (! $signature->is(TagClass::Universal, 3) || strlen($signature->contents) < 2) {
            return 'the response carries no signature';
        }
        try {
            $key = PublicKey::fromCertificateDer($responder->der);
        } catch (CoseException $e) {
            return sprintf('the responder\\'s key cannot be read: %s', $e->getMessage());
        }
        $bits = substr($signature->contents, 1);
        $algo = self::OPENSSL_ALGOS[$hash];
        $ok = OpenSsl::quiet(static fn (): int|false => openssl_verify($message, $bits, $key->key, $algo));

        return $ok === 1 ? null : sprintf('the response\\'s signature does not verify under %s', $responder->subjectCn());
    }

    /**
     * The one status a usable response yields, freshness included.
     *
     * The asymmetry decided on approval: a stale \`good\` is no evidence, because an
     * assurance ages; a stale \`revoked\` still counts, because a revocation does not.
     *
     * @param  array{status: string, revokedAt: int|null, reason: int|null, thisUpdate: int, nextUpdate: int|null, responder: string, producedAt: int}  $single
     * @param  callable(string): list<ValidationStatus>  $skipped
     */
    private function statusOf(array $single, Certificate $leaf, int $time, string $url, callable $skipped): ValidationStatus
    {
        $when = static fn (?int $t): string => $t === null ? 'never' : gmdate('Y-m-d\\TH:i:s\\Z', $t);
        $source = 'the response comes from the unsigned rVals header, so it is not evidence the certificate was never revoked';

        if ($single['status'] === 'revoked' && $single['reason'] !== self::REASON_REMOVE_FROM_CRL
            && ($single['revokedAt'] === null || $single['revokedAt'] <= $time)) {
            return new ValidationStatus(StatusCode::SigningCredentialOcspRevoked, $url, sprintf(
                'the signing certificate %s (serial %s) was revoked at %s (%s), as %s answered on %s',
                $leaf->subjectCn(),
                $leaf->serialDecimal,
                $when($single['revokedAt']),
                self::reasonName($single['reason'], 'unspecified'),
                $single['responder'],
                $when($single['producedAt']),
            ));
        }
        if ($single['status'] === 'revoked') {
            // removeFromCRL is a re-instatement (RFC 6960 §4.2.1), and a revocation after
            // the signing time says nothing about a signature made before it
            return $skipped(sprintf(
                'the stapled response reports %s at %s for %s, which is not a revocation at the judged time %s',
                self::reasonName($single['reason'], 'a revocation'), $when($single['revokedAt']), $leaf->subjectCn(), $when($time),
            ))[0];
        }
        if ($single['status'] !== 'good') {
            return new ValidationStatus(StatusCode::SigningCredentialOcspUnknown, $url, sprintf(
                '%s does not know the status of %s (serial %s); %s',
                $single['responder'], $leaf->subjectCn(), $leaf->serialDecimal, $source,
            ));
        }
        if ($single['thisUpdate'] > $time || ($single['nextUpdate'] !== null && $single['nextUpdate'] < $time)) {
            return $skipped(sprintf(
                'the stapled response was valid from %s to %s and the judged time is %s, so it is not current (RFC 5019 §3.2); this verifier makes no online query to refresh it',
                $when($single['thisUpdate']), $when($single['nextUpdate']), $when($time),
            ))[0];
        }

        return new ValidationStatus(StatusCode::SigningCredentialOcspNotRevoked, $url, sprintf(
            '%s answered good for %s on %s, valid from %s to %s; %s',
            $single['responder'],
            $leaf->subjectCn(),
            $when($single['producedAt']),
            $when($single['thisUpdate']),
            $when($single['nextUpdate']),
            $source,
        ));
    }

    /** A CRLReason by name; a response need not give one, and one this verifier does not know is not invented. */
    private static function reasonName(?int $reason, string $fallback): string
    {
        return $reason === null ? $fallback : (self::REASONS[$reason] ?? sprintf('reason %d', $reason));
    }

    /** The issuer's subject Name, exactly as encoded — what issuerNameHash hashes. */
    private static function issuerName(Certificate $issuer): ?string
    {
        try {
            $tbs = (new DerReader)->read($issuer->der)->child(0)->sequence();
            $offset = ($tbs[0] ?? null)?->class === TagClass::ContextSpecific ? 1 : 0;

            return ($tbs[$offset + 4] ?? null)?->encoded();
        } catch (Asn1Exception) {
            return null;
        }
    }

    /** The issuer's subjectPublicKey BIT STRING contents — what issuerKeyHash hashes. */
    private static function issuerKey(Certificate $issuer): ?string
    {
        try {
            $key = PublicKey::fromCertificateDer($issuer->der);
            $bits = (new DerReader)->read($key->spki)->child(1);

            return substr($bits->contents, 1);
        } catch (Asn1Exception|CoseException) {
            return null;
        }
    }
}
`,"src/Trust/TrustAnchorSet.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Trust;

/**
 * One entry of \`trust.anchors\` (SPEC-031), the shape \`c2pa\` 0.91.0 reads:
 * a kind, the anchors as certificates, the entry's own allowed list and its
 * own EKUs. Every anchor counts only for its own kind (C2PA 2.4 §14.4.1,
 * §14.4.2): a "manifest" entry anchors signers, a "tsa" entry anchors
 * time-stamping authorities, a "cawg" entry anchors nothing here. An
 * entry's \`trust_config\` widens the accepted EKUs only for a chain that
 * reaches that entry (§14.4.1: anchor configurations per EKU).
 */
final readonly class TrustAnchorSet
{
    public const MANIFEST = 'manifest';

    public const TSA = 'tsa';

    public const CAWG = 'cawg';

    public const KINDS = [self::MANIFEST, self::TSA, self::CAWG];

    /**
     * @param  string  $kind  one of KINDS
     * @param  list<Certificate>  $anchors
     * @param  list<Certificate>  $allowedList  only ever non-empty for a "manifest" entry (§14.4.3)
     * @param  list<string>  $trustConfig  EKU OIDs for chains that reach this entry
     */
    public function __construct(
        public string $kind,
        public array $anchors,
        public array $allowedList = [],
        public array $trustConfig = [],
        public ?string $uri = null,
    ) {
        if (! in_array($kind, self::KINDS, true)) {
            throw new TrustException(sprintf('trust_kind %s is not one of %s', $kind, implode(', ', self::KINDS)));
        }
        if ($kind !== self::MANIFEST && $allowedList !== []) {
            throw new TrustException(sprintf('a "%s" entry cannot carry an allowed_list: the private credential store applies to signers only, never to time-stamps (C2PA 2.4 §14.4.3)', $kind));
        }
    }
}
`,"src/Trust/TrustException.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Trust;

/**
 * Thrown when trust settings cannot be read whole (SPEC-014 AC7) or a
 * certificate cannot be parsed: a settings object is either complete or
 * absent, never partial. The message names the field and the fault and
 * never echoes key material.
 */
final class TrustException extends \\RuntimeException {}
`,"src/Trust/TrustSettings.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Trust;

/**
 * The trust settings in the format c2patool, the sister library and this
 * verifier share (SPEC-014, SPEC-031): \`trust.trust_anchors\` (the legacy
 * string, which anchors signers and time-stamping authorities both),
 * \`trust.anchors\` (a list of entries, each counting only for its own kind),
 * \`trust.trust_config\`, \`verify.verify_trust\` — every value the *contents*
 * of a file, never a path. A top-level \`trust.allowed_list\` is refused: it
 * lives inside a "manifest" entry now, and c2pa 0.91.0 drops a loose one
 * without a word. Read whole or not at all: any field of the wrong type,
 * any unknown key, any PEM block OpenSSL refuses, any block that is not a
 * certificate, is a TrustException, and no partial object exists.
 */
final readonly class TrustSettings
{
    public const DEFAULT_MAX_CERTIFICATES = 256;

    public const MAX_ANCHOR_ENTRIES = 32;

    private const ENTRY_KEYS = ['trust_anchors', 'trust_kind', 'trust_uri', 'trust_config', 'allowed_list', 'trusted_ica_issuers'];

    /**
     * @param  list<Certificate>  $trustAnchors
     * @param  list<Certificate>  $allowedList
     * @param  list<string>  $trustConfig  EKU OIDs, in addition to the built-in list (ADR-0003 item 4; used by SPEC-015)
     * @param  list<TrustAnchorSet>  $anchorSets  the \`trust.anchors\` entries (SPEC-031)
     */
    public function __construct(
        public array $trustAnchors,
        public array $allowedList,
        public array $trustConfig = [],
        public bool $verifyTrust = true,
        public array $anchorSets = [],
    ) {}

    public static function fromJson(string $json, int $maxCertificates = self::DEFAULT_MAX_CERTIFICATES): self
    {
        try {
            $decoded = json_decode($json, true, 8, JSON_THROW_ON_ERROR);
        } catch (\\JsonException $e) {
            throw new TrustException(sprintf('the trust settings are not valid JSON: %s', $e->getMessage()), 0, $e);
        }
        if (! is_array($decoded) || array_is_list($decoded)) {
            throw new TrustException('the trust settings must be a JSON object');
        }

        /** @var array<string, mixed> $decoded */
        return self::fromArray($decoded, $maxCertificates);
    }

    /**
     * @param  array<string, mixed>  $settings
     */
    public static function fromArray(array $settings, int $maxCertificates = self::DEFAULT_MAX_CERTIFICATES): self
    {
        foreach (array_keys($settings) as $key) {
            if (! in_array($key, ['trust', 'verify'], true)) {
                throw new TrustException(sprintf('unknown top-level key %s in the trust settings (known: trust, verify)', $key));
            }
        }
        $trustSection = $settings['trust'] ?? [];
        if (is_array($trustSection) && array_key_exists('allowed_list', $trustSection)) {
            throw new TrustException('trust.allowed_list is not read at the top level: it belongs inside an entry, trust.anchors[].allowed_list, of kind "manifest" (c2pa 0.91.0 moved it there and drops a loose one without a word; this verifier refuses it instead — SPEC-031)');
        }
        $trust = self::section($settings, 'trust', ['trust_anchors', 'trust_config', 'anchors']);
        $verify = self::section($settings, 'verify', ['verify_trust']);

        $verifyTrust = $verify['verify_trust'] ?? true;
        if (! is_bool($verifyTrust)) {
            throw new TrustException(sprintf('verify.verify_trust is %s, not a boolean', get_debug_type($verifyTrust)));
        }

        $anchors = self::certificatesFromPem(self::text($trust, 'trust_anchors'), 'trust.trust_anchors', $maxCertificates);
        $sets = self::anchorSets($trust['anchors'] ?? [], $maxCertificates);
        $total = count($anchors) + array_sum(array_map(static fn (TrustAnchorSet $set): int => count($set->anchors) + count($set->allowedList), $sets));
        if ($total > $maxCertificates) {
            throw new TrustException(sprintf('the trust settings hold more than %d certificates in all (%d)', $maxCertificates, $total));
        }

        return new self($anchors, [], self::ekusFromConfig(self::text($trust, 'trust_config')), $verifyTrust, $sets);
    }

    /**
     * \`trust.anchors\`, entry by entry (SPEC-031 AC5): a list of at most
     * MAX_ANCHOR_ENTRIES objects, each with \`trust_anchors\` and \`trust_kind\`
     * and nothing but the keys c2pa 0.91.0 defines.
     *
     * @return list<TrustAnchorSet>
     */
    private static function anchorSets(mixed $anchors, int $maxCertificates): array
    {
        if (! is_array($anchors) || ! array_is_list($anchors)) {
            throw new TrustException(sprintf('trust.anchors is %s, not a list', is_array($anchors) ? 'an object' : get_debug_type($anchors)));
        }
        if (count($anchors) > self::MAX_ANCHOR_ENTRIES) {
            throw new TrustException(sprintf('trust.anchors holds more than %d entries (%d)', self::MAX_ANCHOR_ENTRIES, count($anchors)));
        }
        $sets = [];
        foreach ($anchors as $i => $entry) {
            $at = sprintf('trust.anchors[%d]', $i);
            if (! is_array($entry) || (array_is_list($entry) && $entry !== [])) {
                throw new TrustException(sprintf('%s is %s, not an object', $at, get_debug_type($entry)));
            }
            foreach (array_keys($entry) as $key) {
                if (! in_array($key, self::ENTRY_KEYS, true)) {
                    throw new TrustException(sprintf('%s: unknown key %s (known: %s)', $at, $key, implode(', ', self::ENTRY_KEYS)));
                }
            }
            foreach (['trust_anchors', 'trust_kind'] as $required) {
                if (! array_key_exists($required, $entry)) {
                    throw new TrustException(sprintf('%s.%s is missing', $at, $required));
                }
            }
            $text = static function (string $key) use ($entry, $at): string {
                $value = $entry[$key] ?? '';
                if (! is_string($value)) {
                    throw new TrustException(sprintf('%s.%s is %s, not a string', $at, $key, get_debug_type($value)));
                }

                return $value;
            };
            $kind = $text('trust_kind');
            if (! in_array($kind, TrustAnchorSet::KINDS, true)) {
                throw new TrustException(sprintf('%s.trust_kind %s is not one of %s', $at, preg_replace('/[^\\x20-\\x7E]/', '?', $kind) ?? '', implode(', ', TrustAnchorSet::KINDS)));
            }
            $issuers = $entry['trusted_ica_issuers'] ?? [];
            if (! is_array($issuers) || ! array_is_list($issuers) || array_filter($issuers, static fn (mixed $v): bool => ! is_string($v)) !== []) {
                throw new TrustException(sprintf('%s.trusted_ica_issuers is not a list of strings', $at));
            }
            $uri = array_key_exists('trust_uri', $entry) ? $text('trust_uri') : null;
            try {
                $sets[] = new TrustAnchorSet(
                    $kind,
                    self::certificatesFromPem($text('trust_anchors'), "{$at}.trust_anchors", $maxCertificates),
                    self::certificatesFromPem($text('allowed_list'), "{$at}.allowed_list", $maxCertificates),
                    self::ekusFromConfig($text('trust_config'), "{$at}.trust_config"),
                    $uri,
                );
            } catch (TrustException $e) {
                throw str_starts_with($e->getMessage(), $at) ? $e : new TrustException(sprintf('%s: %s', $at, $e->getMessage()), 0, $e);
            }
        }

        return $sets;
    }

    /**
     * Every \`CERTIFICATE\` block of a PEM string as a Certificate, in order.
     * A block of any other kind (a key, a request) is refused without
     * echoing its contents; a block OpenSSL refuses names its position.
     *
     * @return list<Certificate>
     */
    public static function certificatesFromPem(string $pem, string $what, int $max): array
    {
        if (trim($pem) === '') {
            return [];
        }
        if (preg_match_all('/-----BEGIN ([A-Z0-9 ]+)-----\\s*(.*?)\\s*-----END ([A-Z0-9 ]+)-----/s', $pem, $blocks, PREG_SET_ORDER) === 0) {
            throw new TrustException(sprintf('%s holds no PEM block', $what));
        }
        $certificates = [];
        foreach ($blocks as $i => [, $begin, $body, $end]) {
            if ($begin !== 'CERTIFICATE' || $end !== 'CERTIFICATE') {
                throw new TrustException(sprintf('%s: block %d is a %s, not a CERTIFICATE', $what, $i + 1, $begin === $end ? $begin : "{$begin}/{$end}"));
            }
            if (count($certificates) >= $max) {
                throw new TrustException(sprintf('%s holds more than %d certificates', $what, $max));
            }
            $der = base64_decode(preg_replace('/\\s+/', '', $body) ?? '', true);
            if ($der === false || $der === '') {
                throw new TrustException(sprintf('%s: block %d is not valid base64', $what, $i + 1));
            }
            try {
                $certificates[] = Certificate::fromDer($der);
            } catch (TrustException $e) {
                throw new TrustException(sprintf('%s: block %d: %s', $what, $i + 1, $e->getMessage()), 0, $e);
            }
        }

        return $certificates;
    }

    /**
     * The OIDs of a \`store.cfg\`-style config: one per line, \`//\` comments
     * and blank lines dropped; anything else on a line is refused.
     *
     * @return list<string>
     */
    public static function ekusFromConfig(string $config, string $what = 'trust.trust_config'): array
    {
        $oids = [];
        foreach (preg_split('/\\R/', $config) ?: [] as $n => $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '//')) {
                continue;
            }
            if (preg_match('/\\A[0-2](\\.\\d+)+\\z/', $line) !== 1) {
                throw new TrustException(sprintf('%s line %d is not an OID: %s', $what, $n + 1, preg_replace('/[^\\x20-\\x7E]/', '?', $line) ?? ''));
            }
            $oids[] = $line;
        }

        return $oids;
    }

    /**
     * @param  array<string, mixed>  $settings
     * @param  list<string>  $known
     * @return array<string, mixed>
     */
    private static function section(array $settings, string $name, array $known): array
    {
        $section = $settings[$name] ?? [];
        if (! is_array($section) || array_is_list($section) && $section !== []) {
            throw new TrustException(sprintf('%s is %s, not an object', $name, get_debug_type($section)));
        }
        foreach (array_keys($section) as $key) {
            if (! in_array($key, $known, true)) {
                throw new TrustException(sprintf('unknown key %s.%s in the trust settings (known: %s)', $name, $key, implode(', ', $known)));
            }
        }

        /** @var array<string, mixed> */
        return $section;
    }

    /** @param  array<string, mixed>  $section */
    private static function text(array $section, string $key): string
    {
        $value = $section[$key] ?? '';
        if (! is_string($value)) {
            throw new TrustException(sprintf('trust.%s is %s, not a string of file contents', $key, get_debug_type($value)));
        }

        return $value;
    }
}
`,"src/Verifier/FragmentedVerifier.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Verifier;

use Provemark\\C2paVerifier\\Hash\\BmffHashCheck;
use Provemark\\C2paVerifier\\Hash\\HashException;
use Provemark\\C2paVerifier\\Trust\\TrustSettings;

/**
 * A fragmented ISOBMFF stream — a DASH init segment and its fragments — as one
 * verdict (SPEC-028).
 *
 * The init segment carries the manifest. Its \`c2pa.hash.bmff.v3\` assertion has no
 * \`hash\` at all: a \`merkle\` map instead, holding the hash of the init segment and
 * the root of a tree whose leaves are the fragments. Each fragment carries a C2PA
 * box of its own with the leaf's position and the sibling hashes up to that root.
 *
 * Why this is a class of its own rather than a method on \`Verifier\` (decided by
 * the maintainer, 2026-09-22): almost every caller verifies one file, and it is
 * worth more that \`verify()\` does one thing with one signature than that they see
 * a method they will never call. What this does will grow — the \`merkle\` field is
 * already a list, for renditions — and it grows where nothing else depends on it.
 *
 * The fragments arrive **one open stream at a time**, because fifty fragments must
 * not mean fifty open handles. Each is read to its end before the next is asked
 * for, and nothing here closes a stream it did not open.
 */
final readonly class FragmentedVerifier
{
    /**
     * An init segment and its fragments, as one report.
     *
     * The report is the same \`VerificationReport\` a whole file yields, so anything
     * downstream of it is unchanged. What differs is inside the statuses: a stream
     * is many files, and a status that fails says which one.
     *
     * @param  resource  $init  the init segment, readable and seekable
     * @param  iterable<string, resource>  $fragments  a name and an open stream, one
     *                                                 at a time. The name is what a status says when that fragment is the
     *                                                 one that failed, so it should be something a caller recognises.
     */
    public function verify($init, iterable $fragments, ?TrustSettings $settings = null): VerificationReport
    {
        // Verifier already routes an ISOBMFF file to the BMFF hard binding; what it
        // does not know is that there are more files. Handing it a check that does
        // keeps the dispatch, the report and every other rule exactly as they are.
        //
        // The Verifier is built here rather than injected: it has to carry a check
        // that knows this call's fragments, so one handed in at construction time
        // could not be used. An earlier draft took one and quietly ignored it, which
        // PHPStan caught and which would have read as a seam that was not one.
        return (new Verifier(bmffHash: new BmffHashCheck(fragments: $fragments)))
            ->verify($init, $settings);
    }

    /**
     * Exactly one merkle map, or a refusal by name.
     *
     * Here as well as on \`BmffHashCheck\` because this is the class a caller holds,
     * and the rule — one rendition, because what selects among several is
     * unmeasured — is one they may want to ask about.
     *
     * @param  array<string, mixed>  $assertion  a decoded \`c2pa.hash.bmff.v3\`
     * @return array<string, mixed>
     *
     * @throws HashException when the assertion carries more than one
     */
    public static function merkleMapOf(array $assertion): array
    {
        return BmffHashCheck::merkleMapOf($assertion['merkle'] ?? null);
    }
}
`,"src/Verifier/IngredientManifestCheck.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Verifier;

use Provemark\\C2paVerifier\\Cose\\ClaimSignatureCheck;
use Provemark\\C2paVerifier\\Hash\\HashedUriCheck;
use Provemark\\C2paVerifier\\Manifest\\ActionsCheck;
use Provemark\\C2paVerifier\\Manifest\\ExternalReferenceCheck;
use Provemark\\C2paVerifier\\Manifest\\IconReferenceCheck;
use Provemark\\C2paVerifier\\Manifest\\IngredientAssertion;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Manifest\\ManifestGraph;
use Provemark\\C2paVerifier\\Manifest\\ManifestStore;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;
use Provemark\\C2paVerifier\\Timestamp\\TimestampCheck;
use Provemark\\C2paVerifier\\Trust\\CertificateProfileCheck;
use Provemark\\C2paVerifier\\Trust\\ChainCheck;
use Provemark\\C2paVerifier\\Trust\\TrustSettings;

/**
 * The manifests the graph found, validated (SPEC-021; C2PA 2.4 §15.11).
 *
 * For each manifest an ingredient assertion names: the hash that assertion
 * recorded over its box (§15.11.3.3.2 — a match is
 * \`ingredient.manifest.validated\`; the pre-1.3 hash over the claim's CBOR
 * bytes is accepted silently, as c2pa-rs; neither is
 * \`ingredient.manifest.mismatch\`), and then the manifest itself: its
 * timestamp, signature, certificate profile, chain and trust, hashed URIs
 * and actions. Never the data hash — an ingredient's hard binding covers
 * *its* asset, which is not the file being verified (§15.11.3.3.1).
 *
 * Every status carries the URI of the ingredient assertion that named the
 * manifest, so the report groups it under \`ingredientDeltas\`. A status the
 * assertion itself already recorded is dropped (§18.16.12.4: the writer
 * acknowledged it and went on) — except when its url names the active
 * manifest, which no ingredient assertion may speak for (CAI-12751).
 *
 * This lives in the Verifier layer, not in Manifest: it needs Cose, Trust,
 * Hash and Timestamp, and the parsers know nothing of cryptography.
 *
 * @internal SPEC-025: not part of the public API. It may change, move or be
 * removed in any release; the contract is the nine classes named in the README.
 */
final readonly class IngredientManifestCheck
{
    public function __construct(
        private ClaimSignatureCheck $signature = new ClaimSignatureCheck,
        private HashedUriCheck $hashedUris = new HashedUriCheck,
        private ChainCheck $trust = new ChainCheck,
        private CertificateProfileCheck $certificate = new CertificateProfileCheck,
        private TimestampCheck $timestamp = new TimestampCheck,
        private ActionsCheck $actions = new ActionsCheck,
    ) {}

    /**
     * Every manifest the graph reached, in walk order, each scoped to the assertion that named it first.
     *
     * @return list<ValidationStatus>
     */
    public function check(ManifestStore $store, ManifestGraph $graph, ?TrustSettings $settings): array
    {
        $byUrl = [];
        foreach ($graph->ingredients as $list) {
            foreach ($list as $ingredient) {
                $byUrl[$ingredient->url] = $ingredient;
            }
        }
        $statuses = [];
        foreach ($graph->referenced as $label => $urls) {
            $ingredient = $byUrl[$urls[0]] ?? null;
            if ($ingredient === null || ! array_key_exists($label, $store->manifests)) {
                continue;
            }
            $manifest = $store->manifests[$label];
            $mine = $this->hash($manifest, $ingredient);
            $mine = [...$mine, ...$this->manifest($manifest, $ingredient->url, $settings, ActionsCheck::claimLabels($store->manifests))];
            $statuses = [...$statuses, ...$mine];
        }

        return $statuses;
    }

    /**
     * The box hash one reference states (C2PA 2.4 §8.4.2.3): the manifest superbox's payload under the
     * reference's algorithm, or the claim's, or SHA-256. The pre-1.3 form — the same hash over the
     * claim's CBOR bytes — is accepted without a word, exactly as c2pa-rs does.
     *
     * @return list<ValidationStatus>
     */
    public function hash(Manifest $manifest, IngredientAssertion $ingredient): array
    {
        $reference = $ingredient->manifest;
        if ($reference === null) {
            return [];
        }
        $alg = $reference->alg ?? $manifest->claim->alg ?? 'sha256';
        if (! in_array($alg, hash_algos(), true)) {
            return [new ValidationStatus(
                StatusCode::AlgorithmUnsupported,
                $reference->url,
                sprintf('the ingredient reference names the hash algorithm %s, which this verifier cannot compute', $alg),
                $ingredient->url,
            )];
        }
        if ($manifest->redacted !== [] && $manifest->claim->version >= 2) {
            return $this->claimSignature($manifest, $ingredient, $reference->url);
        }
        $expected = $reference->hash->bytes;
        if (hash_equals(hash($alg, $manifest->box->payload(), true), $expected)) {
            return [new ValidationStatus(StatusCode::IngredientManifestValidated, $reference->url, 'ingredient hash matched', $ingredient->url)];
        }
        if (hash_equals(hash($alg, $manifest->claimBytes(), true), $expected)) {
            // the pre-1.3 hash: the ingredient is not refused, but nothing is claimed for it either —
            // the manifest below decides, as it does at c2patool (eleven corpus files, step 55)
            return [];
        }

        return [new ValidationStatus(
            StatusCode::IngredientManifestMismatch,
            $reference->url,
            sprintf('the ingredient manifest %s hashes to neither the value the assertion recorded over its box nor the one over its claim', $manifest->label),
            $ingredient->url,
        )];
    }

    /**
     * A manifest the store has redacted from no longer hashes to what its ingredient recorded, and
     * cannot: the box hash is not tried. A v2 claim is checked instead by the hash the ingredient
     * recorded over its signature box (C2PA 2.4 §15.11.3.3.1; c2pa-rs \`ingredient_checks\`), which the
     * signature binds to the claim and the claim to every assertion that is left. A v1 claim has no
     * such route and stays with the box hash, which then fails (SPEC-035 amendment 3).
     *
     * @return list<ValidationStatus>
     */
    private function claimSignature(Manifest $manifest, IngredientAssertion $ingredient, string $url): array
    {
        $recorded = $ingredient->claimSignature;
        if ($recorded === null) {
            return [new ValidationStatus(StatusCode::IngredientClaimSignatureMissing, $url, sprintf('ingredient claimSignature missing: the manifest %s has redacted assertions, so only the claim-signature hash can bind it, and the ingredient assertion records none', $manifest->label), $ingredient->url)];
        }
        $alg = $manifest->claim->alg ?? 'sha256';
        if (! in_array($alg, hash_algos(), true)) {
            return [new ValidationStatus(StatusCode::AlgorithmUnsupported, $url, sprintf('the ingredient claim names the hash algorithm %s, which this verifier cannot compute', $alg), $ingredient->url)];
        }
        $actual = hash($alg, $manifest->resolve($manifest->claim->signatureUri)->payload(), true);

        return hash_equals($recorded->hash->bytes, $actual)
            ? [new ValidationStatus(StatusCode::IngredientClaimSignatureValidated, $url, 'ingredient claimSignature validated', $ingredient->url)]
            : [new ValidationStatus(StatusCode::IngredientClaimSignatureMismatch, $url, sprintf('ingredient claimSignature mismatch: the signature box of %s hashes (%s) to %s, the ingredient recorded %s', $manifest->label, $alg, bin2hex($actual), bin2hex($recorded->hash->bytes)), $ingredient->url)];
    }

    /**
     * The ingredient manifest itself: everything the active manifest gets except the data hash.
     *
     * @param  array<string, list<string>>  $storeLabels  the store's claims, for SPEC-037's c2pa.redacted rule
     * @return list<ValidationStatus>
     */
    private function manifest(Manifest $manifest, string $scope, ?TrustSettings $settings, array $storeLabels): array
    {
        $timestamp = $this->timestamp->check($manifest, $settings);
        $statuses = $timestamp->present ? $timestamp->statuses : [];
        $statuses = [...$statuses, ...$this->signature->check($manifest)];

        $at = $timestamp->trustedTime();
        $reason = match (true) {
            $at !== null => 'from the trusted timestamp',
            ! $timestamp->present => 'no timestamp',
            $timestamp->time === null => 'the timestamp did not validate',
            default => "the timestamp's TSA is not trusted",
        };
        $statuses = [...$statuses, ...$this->certificate->check($manifest, $settings, $at, $reason)];

        $trustSettings = $settings ?? new TrustSettings([], []);
        if ($trustSettings->verifyTrust) {
            $statuses = [...$statuses, ...$this->trust->check($manifest, $trustSettings, $at)];
        }

        $hashedUris = $this->hashedUris->check($manifest);
        $statuses = [...$statuses, ...$hashedUris];
        $unreadable = [];
        foreach ($hashedUris as $status) {
            if ($status->code === StatusCode::AssertionHashedUriMismatch) {
                $unreadable[] = $status->url;
            }
        }
        $statuses = [...$statuses, ...$this->actions->check($manifest, $unreadable, $storeLabels)];
        $statuses = [...$statuses, ...(new ExternalReferenceCheck)->check($manifest, $unreadable)];   // SPEC-032 rule B
        $statuses = [...$statuses, ...(new IconReferenceCheck)->check($manifest)];   // SPEC-034

        // the hard binding is not checked: it covers the ingredient's own asset, not this file (§15.11.3.3.1)
        return array_map(
            static fn (ValidationStatus $status): ValidationStatus => new ValidationStatus($status->code, $status->url, $status->explanation, $scope),
            $statuses,
        );
    }

    /**
     * Everything the validated manifests' ingredient assertions recorded, as one set of keys: c2pa-rs
     * compares a scoped status against all of them, not only against the assertion it was found under,
     * because a v3 assertion records the whole tree it validated (\`update_manifest.jpg\`: the active
     * assertion's \`validationResults\` carries the parent's two \`ingredient.unknownProvenance\` entries,
     * and c2patool drops both). Only the active manifest and the manifests the graph reaches count
     * (amendment 6): a manifest nothing names is never validated, so what it recorded vouches for
     * nothing.
     *
     * @return list<string>
     */
    public static function recordedInStore(ManifestGraph $graph): array
    {
        $keys = [];
        foreach ([$graph->active, ...array_map('strval', array_keys($graph->referenced))] as $label) {
            foreach ($graph->ingredients[$label] ?? [] as $ingredient) {
                $keys = [...$keys, ...self::recorded($ingredient)];
            }
        }

        return array_values(array_unique($keys));
    }

    /**
     * What the ingredient assertion recorded, as "code url" keys: v1 and v2 read \`validationStatus\`,
     * v3 the whole \`validationResults\` map (its active manifest and every ingredient delta). A
     * recorded url that is relative is made absolute against the manifest the assertion references,
     * as c2pa-rs does before comparing.
     *
     * @return list<string>
     */
    public static function recorded(IngredientAssertion $ingredient): array
    {
        $label = $ingredient->manifestLabel();
        $keys = [];
        $add = static function (mixed $entry) use (&$keys, $label): void {
            if (! is_array($entry) || ! isset($entry['code'], $entry['url']) || ! is_string($entry['code']) || ! is_string($entry['url'])) {
                return;
            }
            $url = $entry['url'];
            if ($label !== null && str_starts_with($url, 'self#jumbf=') && ! str_starts_with($url, 'self#jumbf=/')) {
                $url = sprintf('self#jumbf=/c2pa/%s/%s', $label, substr($url, strlen('self#jumbf=')));
            }
            $keys[] = $entry['code'].' '.$url;
        };
        foreach ((array) ($ingredient->validationStatus ?? []) as $entry) {
            $add($entry);
        }
        foreach (self::kinds($ingredient->validationResults['activeManifest'] ?? null) as $entry) {
            $add($entry);
        }
        foreach ((array) ($ingredient->validationResults['ingredientDeltas'] ?? []) as $delta) {
            if (is_array($delta)) {
                foreach (self::kinds($delta['validationDeltas'] ?? null) as $entry) {
                    $add($entry);
                }
            }
        }

        return $keys;
    }

    /**
     * The statuses a \`{success, informational, failure}\` map holds, in that order.
     *
     * @return list<mixed>
     */
    private static function kinds(mixed $map): array
    {
        if (! is_array($map)) {
            return [];
        }
        $out = [];
        foreach (['success', 'informational', 'failure'] as $kind) {
            foreach ((array) ($map[$kind] ?? []) as $entry) {
                $out[] = $entry;
            }
        }

        return $out;
    }

    /**
     * Statuses minus the ones the assertion recorded — never one whose url names the active manifest,
     * and never a failure of the manifest whose hard binding an update manifest borrows (amendment 6):
     * that binding is what ties the asset to the credential, so no record may excuse its fault.
     *
     * @param  list<ValidationStatus>  $statuses
     * @param  list<string>  $recorded  the keys of self::recorded()
     * @param  string|null  $bindingLabel  the binding manifest of an update manifest, null without one
     * @return list<ValidationStatus>
     */
    public function drop(array $statuses, array $recorded, string $activeLabel, ?string $bindingLabel): array
    {
        $active = sprintf('self#jumbf=/c2pa/%s', $activeLabel);
        $binding = $bindingLabel === null ? null : sprintf('self#jumbf=/c2pa/%s', $bindingLabel);

        return array_values(array_filter($statuses, static function (ValidationStatus $status) use ($recorded, $active, $binding): bool {
            if ($status->ingredientUri === null) {
                return true;   // the active manifest's own line, never dropped
            }
            if ($status->url === $active || str_starts_with($status->url, $active.'/')) {
                return true;   // the guard: no ingredient assertion speaks for the manifest being verified
            }
            if ($binding !== null && $status->code->isFailure() && ($status->url === $binding || str_starts_with($status->url, $binding.'/'))) {
                return true;   // nor for the manifest that binds the asset in its stead
            }

            return ! in_array($status->code->value.' '.$status->url, $recorded, true);
        }));
    }
}
`,"src/Verifier/VerificationReport.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Verifier;

use Provemark\\C2paVerifier\\Manifest\\ManifestStore;
use Provemark\\C2paVerifier\\Report\\ValidationResult;

/**
 * What Verifier::verify() answers (SPEC-013): the container format, whether
 * a manifest store was found, the store as parsed (null when there was
 * none, or it could not be read), the validation result, and the active
 * manifest's signature_info (SPEC-015). toArray() is c2patool's shape — active_manifest, manifests, validation_results,
 * validation_state, validation_status — plus format, has_manifest and
 * checks_performed, so that a consumer can tell a partial verdict from a
 * complete one and an unsigned file from a broken one.
 */
final readonly class VerificationReport
{
    /**
     * @param  array{alg: string, issuer: ?string, common_name: string, cert_serial_number: string, time?: string}|null  $signatureInfo  the active manifest's signer as c2patool prints it (SPEC-015), with \`time\` when the timestamp validated (SPEC-017); null when the chain could not be read
     * @param  string|null  $remoteManifestUrl  a manifest declared by URL in the file's XMP, never fetched (SPEC-013 amendment 9)
     */
    public function __construct(
        public string $format,
        public bool $hasManifest,
        /**
         * The parsed manifest store, or null when the file carries none.
         *
         * @internal SPEC-025: an escape hatch, not part of the public API. Reading it
         * reaches the whole parse model — the manifests, their claims, their
         * assertions — which may change, move or be removed in any release, and will,
         * as this verifier gains formats. It stays public and it works; what it does
         * not carry is a promise. The supported report is $result, $format,
         * $hasManifest, $remoteManifestUrl, $signatureInfo, toArray() and toJson().
         */
        public ?ManifestStore $store,
        public ValidationResult $result,
        public ?array $signatureInfo = null,
        public ?string $remoteManifestUrl = null,
    ) {}

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        $store = $this->store?->toArray() ?? ['active_manifest' => null, 'manifests' => []];
        if ($this->signatureInfo !== null && $this->store !== null && is_array($store['manifests']) && is_array($store['manifests'][$this->store->active->label] ?? null)) {
            $store['manifests'][$this->store->active->label]['signature_info'] = $this->signatureInfo;
        }
        $result = $this->result->toArray();

        return [
            'active_manifest' => $store['active_manifest'],
            'manifests' => $store['manifests'],
            'validation_results' => $result['validation_results'],
            'validation_state' => $result['validation_state'],
        ] + (array_key_exists('validation_status', $result) ? ['validation_status' => $result['validation_status']] : []) + [
            'format' => $this->format,
            'has_manifest' => $this->hasManifest,
        ] + ($this->remoteManifestUrl === null ? [] : ['remote_manifest' => $this->remoteManifestUrl]) + [
            'checks_performed' => $result['checks_performed'],
        ];
    }

    public function toJson(): string
    {
        return json_encode($this->toArray(), JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    }
}
`,"src/Verifier/Verifier.php":`<?php

declare(strict_types=1);

namespace Provemark\\C2paVerifier\\Verifier;

use Provemark\\C2paVerifier\\Cbor\\CborBytes;
use Provemark\\C2paVerifier\\Cbor\\CborException;
use Provemark\\C2paVerifier\\Container\\ContainerException;
use Provemark\\C2paVerifier\\Container\\FormatDetector;
use Provemark\\C2paVerifier\\Container\\IsobmffManifestStoreExtractor;
use Provemark\\C2paVerifier\\Container\\JpegManifestStoreExtractor;
use Provemark\\C2paVerifier\\Container\\ManifestStoreBytes;
use Provemark\\C2paVerifier\\Container\\PngManifestStoreExtractor;
use Provemark\\C2paVerifier\\Container\\RemoteManifestDetector;
use Provemark\\C2paVerifier\\Container\\WebpManifestStoreExtractor;
use Provemark\\C2paVerifier\\Cose\\ClaimSignatureCheck;
use Provemark\\C2paVerifier\\Cose\\CoseException;
use Provemark\\C2paVerifier\\Cose\\CoseSign1;
use Provemark\\C2paVerifier\\Hash\\BmffHashCheck;
use Provemark\\C2paVerifier\\Hash\\DataHashCheck;
use Provemark\\C2paVerifier\\Hash\\HashedUriCheck;
use Provemark\\C2paVerifier\\Jumbf\\JumbfException;
use Provemark\\C2paVerifier\\Jumbf\\JumbfParser;
use Provemark\\C2paVerifier\\Manifest\\ActionsCheck;
use Provemark\\C2paVerifier\\Manifest\\ExternalReferenceCheck;
use Provemark\\C2paVerifier\\Manifest\\HashedUri;
use Provemark\\C2paVerifier\\Manifest\\IconReferenceCheck;
use Provemark\\C2paVerifier\\Manifest\\Manifest;
use Provemark\\C2paVerifier\\Manifest\\ManifestException;
use Provemark\\C2paVerifier\\Manifest\\ManifestGraph;
use Provemark\\C2paVerifier\\Manifest\\ManifestStore;
use Provemark\\C2paVerifier\\Manifest\\UpdateManifestCheck;
use Provemark\\C2paVerifier\\Report\\StatusCode;
use Provemark\\C2paVerifier\\Report\\ValidationResult;
use Provemark\\C2paVerifier\\Report\\ValidationStatus;
use Provemark\\C2paVerifier\\Support\\Bytes;
use Provemark\\C2paVerifier\\Timestamp\\TimestampCheck;
use Provemark\\C2paVerifier\\Timestamp\\TimestampResult;
use Provemark\\C2paVerifier\\Trust\\Certificate;
use Provemark\\C2paVerifier\\Trust\\CertificateProfileCheck;
use Provemark\\C2paVerifier\\Trust\\ChainCheck;
use Provemark\\C2paVerifier\\Trust\\OcspCheck;
use Provemark\\C2paVerifier\\Trust\\TrustException;
use Provemark\\C2paVerifier\\Trust\\TrustSettings;

/**
 * One call from file to verdict (SPEC-013), in the order C2PA 2.4 §15.3
 * prescribes: the format from the magic bytes, the store from the
 * container, the manifest from the boxes, then the claim signature, its
 * certificate's profile (SPEC-015), the trust of its chain (SPEC-014 —
 * untrusted without settings, as c2patool), the hashed URIs, and the data
 * hash — the last only when the claim's hashed
 * URI for c2pa.hash.data matched (SPEC-011 decision 1): a hash read from
 * an assertion the claim does not vouch for proves nothing. Every fault a
 * layer throws becomes a status with its code; nothing escapes, nothing
 * is guessed. checks_performed says what was done; the absence of a check
 * is the statement that it was not.
 */
final readonly class Verifier
{
    public const STORE_URL = 'self#jumbf=/c2pa';

    public function __construct(
        private FormatDetector $formats = new FormatDetector,
        private JpegManifestStoreExtractor $jpeg = new JpegManifestStoreExtractor,
        private PngManifestStoreExtractor $png = new PngManifestStoreExtractor,
        private WebpManifestStoreExtractor $webp = new WebpManifestStoreExtractor,
        private IsobmffManifestStoreExtractor $isobmff = new IsobmffManifestStoreExtractor,
        private BmffHashCheck $bmffHash = new BmffHashCheck,
        private JumbfParser $jumbf = new JumbfParser,
        private ClaimSignatureCheck $signature = new ClaimSignatureCheck,
        private HashedUriCheck $hashedUris = new HashedUriCheck,
        private DataHashCheck $dataHash = new DataHashCheck,
        private ChainCheck $trust = new ChainCheck,
        private CertificateProfileCheck $certificate = new CertificateProfileCheck,
        private TimestampCheck $timestamp = new TimestampCheck,
        private OcspCheck $revocation = new OcspCheck,
        private RemoteManifestDetector $remote = new RemoteManifestDetector,
        private ActionsCheck $actions = new ActionsCheck,
        private IngredientManifestCheck $ingredients = new IngredientManifestCheck,
        private UpdateManifestCheck $updateManifests = new UpdateManifestCheck,
    ) {}

    /**
     * @param  resource  $stream  the asset, readable and seekable
     * @param  TrustSettings|null  $settings  with settings the trust check runs (SPEC-014); without, the report says so in checks_performed
     */
    public function verify($stream, ?TrustSettings $settings = null): VerificationReport
    {
        // 1. the format
        $format = $this->formats->detect($stream);
        if ($format === null) {
            $head = $this->formats->head($stream);

            return new VerificationReport('unknown', false, null, ValidationResult::fromStatuses([
                new ValidationStatus(StatusCode::GeneralError, self::STORE_URL, sprintf('unsupported file type: the file starts with %s, not a JPEG, PNG, WebP or ISOBMFF signature', Bytes::hex($head))),
            ], []));
        }

        // 2. the store
        try {
            $store = match ($format) {
                'jpeg' => $this->jpeg->extract($stream),
                'png' => $this->png->extract($stream),
                'webp' => $this->webp->extract($stream),
                // SPEC-026: the container only. There is no BMFF hard-binding check yet,
                // so the data hash finds no \`c2pa.hash.data\` and says
                // claim.hardBindings.missing — Invalid, named, and never a silent Valid.
                'isobmff' => $this->isobmff->extract($stream),
            };
        } catch (ContainerException $e) {
            return new VerificationReport($format, true, null, ValidationResult::fromStatuses([
                new ValidationStatus(StatusCode::GeneralError, self::STORE_URL, $e->getMessage()),
            ], []));
        }
        if ($store === null) {
            // no store in the file: say whether one is declared by URL (never fetched; SPEC-013 amendment 9)
            return new VerificationReport($format, false, null, ValidationResult::fromStatuses([], []), null, $this->remote->detect($stream));
        }

        // 3. the manifest
        try {
            $manifestStore = ManifestStore::fromTree($this->jumbf->parse($store->bytes));
        } catch (JumbfException|CborException $e) {
            return new VerificationReport($format, true, null, ValidationResult::fromStatuses([
                new ValidationStatus(StatusCode::GeneralError, self::STORE_URL, $e->getMessage()),
            ], []));
        } catch (ManifestException $e) {
            return new VerificationReport($format, true, null, ValidationResult::fromStatuses([
                new ValidationStatus($e->status, $e->url ?? self::STORE_URL, $e->getMessage()),
            ], []));
        }

        // the ingredient graph: what the assertions say about the other manifests in the store, and
        // what needs no cryptography to judge — unknown provenance, a malformed assertion, a
        // reference to a manifest that is not here (SPEC-020). Validating those manifests is SPEC-021.
        try {
            $graph = ManifestGraph::fromStore($manifestStore);
            $graphStatuses = $graph->statuses;
        } catch (ManifestException $e) {
            $graph = null;
            $graphStatuses = [new ValidationStatus($e->status, $e->url ?? self::STORE_URL, $e->getMessage())];
        }

        $timestamp = $this->timestamp->check($manifestStore->active, $settings);
        $result = $this->check($manifestStore, $stream, $store, $settings, $timestamp, $graphStatuses, $graph);
        $refusals = [];
        // a CAWG identity assertion carries a credential of its own that c2pa-rs validates; this verifier
        // does not yet, and will not call Trusted what it has not looked at (SPEC-013 amendment 7)
        foreach (array_keys($manifestStore->active->assertions) as $label) {
            if ($label === 'cawg.identity' || str_starts_with($label, 'cawg.identity.')) {
                $refusals[] = new ValidationStatus(StatusCode::GeneralError, sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $manifestStore->active->label, $label), sprintf('the assertion %s carries an identity credential of its own that this verifier does not validate yet; refused rather than trusted unseen', $label));
            }
        }
        if ($refusals !== []) {
            $result = ValidationResult::fromStatuses([...$result->statuses, ...$refusals], $result->checksPerformed);
        }

        return new VerificationReport($format, true, $manifestStore, $result, $this->signatureInfo($manifestStore, $timestamp));
    }

    /**
     * The active manifest's signer as c2patool prints it: the COSE alg's
     * name, the leaf's O as "issuer", its CN, its serial in decimal
     * (SPEC-015). Null when the chain cannot be read — the checks say why.
     *
     * With \`time\` — the timestamp's genTime as c2patool renders it — when the
     * token validated (SPEC-017).
     *
     * @return array{alg: string, issuer: ?string, common_name: string, cert_serial_number: string, time?: string}|null
     */
    private function signatureInfo(ManifestStore $manifestStore, TimestampResult $timestamp): ?array
    {
        try {
            $cose = CoseSign1::fromBytes($manifestStore->active->signatureBytes());
            if ($cose->chain === []) {
                return null;
            }
            $leaf = Certificate::fromDer($cose->chain[0]->bytes);
        } catch (CoseException|TrustException) {
            return null;
        }
        $alg = match ($cose->alg) {
            -7 => 'Es256', -35 => 'Es384', -36 => 'Es512',
            -37 => 'Ps256', -38 => 'Ps384', -39 => 'Ps512',
            -8 => 'Ed25519',
            default => sprintf('alg %d', $cose->alg),
        };

        $info = ['alg' => $alg, 'issuer' => $leaf->organization, 'common_name' => $leaf->subjectCn(), 'cert_serial_number' => $leaf->serialDecimal];
        $time = $timestamp->timeIso();
        if ($time !== null) {
            $info['time'] = $time;
        }

        return $info;
    }

    /**
     * Steps 4–6 on the active manifest: the signature, the hashed URIs, and
     * the data hash — always, unless its assertion is declared and its hashed
     * URI failed (SPEC-013 amendment 10).
     *
     * @param  resource  $stream
     * @param  list<ValidationStatus>  $graphStatuses  the ingredient graph's, each scoped (SPEC-020)
     * @param  ManifestGraph|null  $graph  null when the graph could not be built (a bound was exceeded)
     */
    private function check(ManifestStore $manifestStore, $stream, ManifestStoreBytes $store, ?TrustSettings $settings, TimestampResult $timestamp, array $graphStatuses, ?ManifestGraph $graph): ValidationResult
    {
        $manifest = $manifestStore->active;
        // the timestamp first, as c2patool lists it; informational only, but it supplies the time below (SPEC-017)
        $statuses = [];
        $checks = [];
        if ($timestamp->present) {
            $statuses = $timestamp->statuses;
            $checks[] = 'timestamp';
        }
        $statuses = [...$statuses, ...$this->signature->check($manifest)];
        $checks[] = 'signature';

        // the certificate's profile, always: it is the signature's, not the operator's (SPEC-015);
        // validity at a validated, trusted timestamp's time, else at now (C2PA 2.4 §14.6.1)
        $at = $timestamp->trustedTime();
        $reason = match (true) {
            $at !== null => 'from the trusted timestamp',
            ! $timestamp->present => 'no timestamp',
            $timestamp->time === null => 'the timestamp did not validate',
            default => "the timestamp's TSA is not trusted",
        };
        $statuses = [...$statuses, ...$this->certificate->check($manifest, $settings, $at, $reason)];
        $checks[] = 'certificate';

        // trust: without settings there are no anchors and the answer is untrusted, as c2patool's;
        // only verify_trust false keeps quiet (SPEC-014 amendment 1)
        $trustSettings = $settings ?? new TrustSettings([], []);
        if ($trustSettings->verifyTrust) {
            $statuses = [...$statuses, ...$this->trust->check($manifest, $trustSettings, $at)];
            $checks[] = 'trust';
        }

        // revocation, as far as it can be known without a network: the OCSP responses the
        // signer stapled into its own signature (SPEC-030). It runs after the chain, which
        // supplies the issuer, and after the timestamp, which supplies the judged time. It
        // speaks on every file, including those with nothing stapled: what was not checked
        // has to be visible, or a caller cannot tell silence from a clean answer.
        $statuses = [...$statuses, ...$this->revocation->check(
            $this->unprotectedHeader($manifest),
            $this->chainOf($manifest),
            $at,
            sprintf('self#jumbf=/c2pa/%s/c2pa.signature', $manifest->label),
        )];
        $checks[] = 'revocation';

        $hashedUris = $this->hashedUris->check($manifest);
        $statuses = [...$statuses, ...$hashedUris];
        $checks[] = 'hashedUris';

        // the actions assertion (SPEC-018): read only where the claim vouched for it — an assertion whose
        // hashed URI mismatched is not what the signer saw, and the file is already refused
        $unreadable = [];
        foreach ($hashedUris as $status) {
            if ($status->code === StatusCode::AssertionHashedUriMismatch) {
                $unreadable[] = $status->url;
            }
        }
        $statuses = [...$statuses, ...$this->actions->check($manifest, $unreadable, ActionsCheck::claimLabels($manifestStore->manifests))];
        $checks[] = 'actions';
        // SPEC-032 rule B: named only where the claim carries an external reference
        if (ExternalReferenceCheck::present($manifest)) {
            $statuses = [...$statuses, ...(new ExternalReferenceCheck)->check($manifest, $unreadable)];
            $checks[] = 'externalReferences';
        }
        // SPEC-034: icon references, named only where the manifest carries an icon
        if (IconReferenceCheck::present($manifest)) {
            $statuses = [...$statuses, ...(new IconReferenceCheck)->check($manifest)];
            $checks[] = 'icons';
        }

        // an update manifest lives under §11.2.3's rules, and a standard manifest under §15.11's
        // one-parent rule — both need the graph's ingredients (SPEC-022)
        if ($graph !== null) {
            $scopes = [];
            foreach ($graph->referenced as $referenced => $urls) {
                $scopes[$referenced] = $urls[0];
            }
            $statuses = [...$statuses, ...$this->updateManifests->check($manifestStore, $graph->ingredients, $scopes)];
        }

        // the manifests the graph found: their box hash and everything the active manifest gets
        // except the data hash, scoped to the assertion that named them (SPEC-021)
        if ($graph !== null && $graph->referenced !== []) {
            $statuses = [...$statuses, ...$this->ingredients->check($manifestStore, $graph, $settings)];
            $checks[] = 'ingredients';
        }

        // the data hash runs unless the claim declares a c2pa.hash.data whose hashed URI failed — then the
        // assertion is not what the signer saw and hashedURI.mismatch already refuses the file. With no
        // c2pa.hash.data at all it runs and says claim.hardBindings.missing: a signed manifest without a
        // hard binding was Valid here until step 47 (SPEC-013 amendment 10)
        $dataHashUrl = sprintf('self#jumbf=/c2pa/%s/c2pa.assertions/%s', $manifest->label, DataHashCheck::LABEL);
        $declaredAndFailed = false;
        foreach ($hashedUris as $status) {
            if ($status->url === $dataHashUrl && $status->code === StatusCode::AssertionHashedUriMismatch) {
                $declaredAndFailed = true;
            }
        }
        if (! $declaredAndFailed) {
            // the binding covers the asset's bytes, and it lives in the active manifest unless that is an
            // update manifest — then it is found up the parentOf chain (§15.12). The exclusion it carries
            // was written before the update manifest was appended, so it is adjusted to the store's
            // current range (§15.12.1.1) — see DataHashCheck.
            //
            // SPEC-022 amendment 6: a standard manifest without a hard binding of its own is also followed up
            // parentOf, as c2pa-rs does, but its exclusion is adjusted only for an active update manifest.
            // A stale exclusion then fails the cover rule, so the borrowed binding cannot make it Valid;
            // with no binding up the chain, the manifest's own missing binding is reported as before.
            $binding = self::bindingOf($manifest, $manifestStore, $graph);
            $gatheredOnly = $binding === null ? null : self::hardBindingGatheredOnly($binding);
            if ($binding === null) {
                $statuses[] = new ValidationStatus(StatusCode::ClaimHardBindingsMissing, sprintf('self#jumbf=/c2pa/%s/%s', $manifest->label, $manifest->claim->version === 2 ? 'c2pa.claim.v2' : 'c2pa.claim'), 'the active manifest is an update manifest and no manifest up its parentOf chain carries a hard binding (C2PA 2.4 §15.12)');
            } elseif ($gatheredOnly !== null) {
                // SPEC-013 amendment 13: a hard binding the signer lists only among gathered assertions is not
                // one the claim makes (§10.2.2); c2pa 0.91.0 refuses such a file outright. It is not read.
                $statuses[] = new ValidationStatus(StatusCode::ClaimHardBindingsMissing, sprintf('self#jumbf=/c2pa/%s', $binding->label), sprintf('the hard binding %s is listed only in gathered_assertions; created_assertions "shall contain, at minimum, a reference to an assertion that represents a hard binding" (C2PA 2.4 §10.2.2), so the manifest has none of its own', $gatheredOnly));
            } else {
                // SPEC-027: ISOBMFF binds through c2pa.hash.bmff.v3, whose exclusions are
                // box paths rather than byte ranges. Which check runs follows the assertion
                // the manifest actually carries, not the container it arrived in.
                $statuses = [...$statuses, ...(BmffHashCheck::labelOf($binding) !== null
                    ? $this->bmffHash->check($binding, $stream)
                    : $this->dataHash->check($binding, $stream, $store, $manifest->isUpdateManifest))];
            }
            // SPEC-027 amendment 1: \`checks_performed\` says which hard binding ran, so
            // that a caller reading it cannot mistake a BMFF file for one whose data hash
            // was verified. Naming both \`dataHash\` would be shorter and untrue. With no
            // binding manifest at all, nothing ran and the name stays the older one.
            $checks[] = $binding !== null && BmffHashCheck::labelOf($binding) !== null
                ? 'bmffHash'
                : 'dataHash';
        }

        // the graph's statuses last: they are scoped to their ingredient assertions and render
        // under \`ingredientDeltas\`, so their place in this list does not change the report.
        // Every scoped status — the graph's and the ingredient manifests' — is then weighed against
        // what the store's ingredient assertions recorded: a fault a writer acknowledged is not
        // re-reported, unless it names the active manifest (SPEC-021, CAI-12751)
        $statuses = [...$statuses, ...$graphStatuses];
        // what the active manifest and the manifests the graph reaches recorded, never an unreached
        // manifest, and never a failure of the manifest that binds an update manifest's asset
        // (SPEC-021 amendment 6)
        if ($graph !== null) {
            $borrowed = self::bindingOf($manifest, $manifestStore, $graph);
            $bindingLabel = $borrowed === null || $borrowed === $manifest ? null : $borrowed->label;
            $statuses = $this->ingredients->drop($statuses, IngredientManifestCheck::recordedInStore($graph), $manifestStore->active->label, $bindingLabel);
        }

        return ValidationResult::fromStatuses($statuses, $checks);
    }

    /**
     * The manifest whose hard binding covers the asset (C2PA 2.4 §15.12): the active manifest when it
     * is a standard manifest with a hard binding of its own, else the first manifest up its parentOf
     * chain that has one. A standard manifest with nothing up the chain answers for itself, so that its
     * missing binding is reported as it always was; an update manifest with nothing answers null.
     */
    private static function bindingOf(Manifest $manifest, ManifestStore $manifestStore, ?ManifestGraph $graph): ?Manifest
    {
        if ($graph === null || (! $manifest->isUpdateManifest && self::hasOwnHardBinding($manifest))) {
            return $manifest;
        }
        $found = UpdateManifestCheck::bindingManifest($manifestStore, $graph->ingredients);

        return $found ?? ($manifest->isUpdateManifest ? null : $manifest);
    }

    /**
     * Whether the manifest carries any hard-binding assertion, supported or not: one that is not
     * supported is then refused on this manifest rather than replaced by a parent's.
     */
    private static function hasOwnHardBinding(Manifest $manifest): bool
    {
        foreach (array_keys($manifest->assertions) as $label) {
            foreach (['c2pa.hash.data', 'c2pa.hash.bmff', 'c2pa.hash.boxes', 'c2pa.hash.collection.data'] as $prefix) {
                if (str_starts_with((string) $label, $prefix)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * The label of the manifest's hard binding when the claim references it
     * only from \`gathered_assertions\` and never from \`created_assertions\`,
     * else null (SPEC-013 amendment 13; C2PA 2.4 §10.2.2). A v1 claim has one
     * list, read as created, so it never answers here.
     */
    private static function hardBindingGatheredOnly(Manifest $manifest): ?string
    {
        $isBinding = static fn (string $label): bool => $label === DataHashCheck::LABEL || in_array($label, BmffHashCheck::LABELS, true);
        $labelOf = static function (HashedUri $reference) use ($manifest): ?string {
            try {
                return $manifest->resolve($reference->url)->description->label;
            } catch (ManifestException) {
                return null;   // an unresolvable reference has already failed as assertion.missing
            }
        };
        foreach ($manifest->claim->createdAssertions as $reference) {
            $label = $labelOf($reference);
            if ($label !== null && $isBinding($label)) {
                return null;
            }
        }
        foreach ($manifest->claim->gatheredAssertions as $reference) {
            $label = $labelOf($reference);
            if ($label !== null && $isBinding($label)) {
                return $label;
            }
        }

        return null;
    }

    /**
     * The signature's unprotected header, or an empty one when it cannot be read.
     *
     * A signature this verifier cannot parse has already failed elsewhere, with its
     * own status; there is nothing for revocation to add to that (SPEC-030).
     *
     * @return array<int|string, mixed>
     */
    private function unprotectedHeader(Manifest $manifest): array
    {
        try {
            return CoseSign1::fromBytes($manifest->signatureBytes())->unprotected;
        } catch (CoseException|ManifestException) {
            return [];
        }
    }

    /** @return list<Certificate> the signer's chain, leaf first; empty when it cannot be read */
    private function chainOf(Manifest $manifest): array
    {
        try {
            return array_map(
                static fn (CborBytes $c): Certificate => Certificate::fromDer($c->bytes),
                CoseSign1::fromBytes($manifest->signatureBytes())->chain,
            );
        } catch (CoseException|ManifestException|TrustException) {
            return [];
        }
    }
}
`}}));function startPhp(){return phpPromise??=(async()=>{let e=new PHP(await xt(`8.3`));e.mkdirTree(`/lib`),e.mkdirTree(`/work`);for(let[n,r]of Object.entries(lib_files_default))e.mkdirTree(`/lib/`+n.split(`/`).slice(0,-1).join(`/`)),e.writeFile(`/lib/`+n,r);return e.writeFile(`/lib/autoload.php`,AUTOLOAD),{php:e,about:(await e.run({code:`<?php echo PHP_VERSION, " ", extension_loaded("openssl") ? OPENSSL_VERSION_TEXT : "no openssl";`})).text}})(),phpPromise}async function verify(e,n){let{php:r}=await startPhp();r.writeFile(`/work/input`,e),n?r.writeFile(`/work/trust.json`,n):r.fileExists(`/work/trust.json`)&&r.unlink(`/work/trust.json`);let i=performance.now(),o=await r.run({code:VERIFY}),s=Math.round(performance.now()-i);return r.unlink(`/work/input`),{report:JSON.parse(o.text),ms:s}}var PHP_VERSION,AUTOLOAD,VERIFY,phpPromise,init_verifier=__esmMin((()=>{init_web(),init_universal(),init_lib_files(),AUTOLOAD=`<?php
spl_autoload_register(static function (string $class): void {
    $prefix = 'Provemark\\\\C2paVerifier\\\\';
    if (str_starts_with($class, $prefix)) {
        require '/lib/src/'.str_replace('\\\\', '/', substr($class, strlen($prefix))).'.php';
    }
});
`,VERIFY=`<?php
require '/lib/autoload.php';
use Provemark\\C2paVerifier\\Trust\\TrustSettings;
use Provemark\\C2paVerifier\\Verifier\\Verifier;
try {
    $trust = is_file('/work/trust.json') ? TrustSettings::fromJson((string) file_get_contents('/work/trust.json')) : null;
    $input = fopen('/work/input', 'rb');
    echo (new Verifier)->verify($input, $trust)->toJson();
} catch (Throwable $e) {
    echo json_encode(['error' => $e->getMessage(), 'type' => get_class($e)]);
}
`,phpPromise=null})),require_main=__commonJSMin((()=>{init_verifier();var e=[{key:`signed`,file:`fixture-signed.jpg`,name:`Signed image`,sub:`Made with a test certificate, 94.7 KB JPEG`},{key:`tampered`,file:`pixel-changed.jpg`,name:`Same image, one pixel changed`,sub:`Edited after signing`},{key:`pixel`,file:`google-20250919-pixel10-npld-picnic-table.jpg`,name:`Photo from a Google Pixel 10`,sub:`Public domain, US Bureau of Land Management, 5.6 MB JPEG. Trusted only with Google’s Pixel CAs`},{key:`none`,file:`fixture-unsigned.jpg`,name:`No credentials`,sub:`A plain JPEG`}],n={"claimSignature.validated":`The signature matches the manifest`,"claimSignature.insideValidity":`Signed while the certificate was valid`,"assertion.hashedURI.match":`An assertion is unchanged`,"assertion.dataHash.match":`The image bytes are unchanged since signing`,"assertion.dataHash.mismatch":`The image bytes changed after signing`,"signingCredential.trusted":`The signer chains to your trust list`,"signingCredential.untrusted":`The signer is not on the trust list in use`,"signingCredential.ocsp.skipped":`Revocation was not checked`,"timeStamp.validated":`The timestamp is valid`,"timeStamp.untrusted":`The timestamp authority is not on the trust list in use`,"timeStamp.trusted":`The timestamp authority chains to your trust list`,"timeStamp.mismatch":`The timestamp does not match the signature`,"timeStamp.malformed":`The timestamp could not be read`,"timeStamp.outsideValidity":`The timestamp authority’s certificate was not valid at that time`,"signingCredential.expired":`The signer’s certificate was not valid at the time checked`,"signingCredential.invalid":`The signer’s certificate is not acceptable for signing`,"signingCredential.ocsp.notRevoked":`The certificate was not revoked when the stapled response was made`,"signingCredential.ocsp.revoked":`The certificate has been revoked`,"claimSignature.mismatch":`The signature does not match the manifest`,"claimSignature.missing":`The signature is missing`,"assertion.hashedURI.mismatch":`An assertion changed after signing`,"assertion.missing":`An assertion the manifest refers to is missing`,"assertion.dataHash.additionalExclusionsPresent":`Parts of the file are excluded from the hash beyond the manifest itself`,"assertion.bmffHash.match":`The video bytes are unchanged since signing`,"assertion.bmffHash.mismatch":`The video bytes changed after signing`,"algorithm.unsupported":`The signature algorithm is not supported here`,"claim.hardBindings.missing":`The manifest does not bind to the file’s bytes`,"general.error":`The file could not be read as expected`},r={Trusted:`The file is unchanged since it was signed, and the signer’s certificate chains to the trust list you chose.`,Valid:`The file is unchanged since it was signed and the signature is correct. Who signed it is not established: the signer is not on the trust list in use.`,Invalid:`Something does not hold. The checks below say what.`,None:`This file carries no Content Credentials. That says nothing about where it came from.`},i={ok:`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9"/></svg>`,bad:`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg>`,info:`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10" cy="10" r="7.5"/><path d="M10 9v5M10 6.2v.1"/></svg>`,shield:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>`,alert:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"/><path d="M12 8v5M12 16v.1"/></svg>`,cross:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z"/><path d="M9.5 9.5l5 5M14.5 9.5l-5 5"/></svg>`,empty:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" stroke-dasharray="3 3"/></svg>`},o=(e,n,r)=>{let i=document.createElement(e);return n&&(i.className=n),r!=null&&(i.textContent=r),i},s=e=>e/1024<1024?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`,l=e=>(e||``).split(`/`).pop(),N=52428800,ae=document.getElementById(`status`),ce=(e,n=!1)=>{ae.textContent=e,ae.classList.toggle(`err`,n)},ue=`/demo/`,he={test:ue+`trust/test-roots.settings.json`,google:ue+`trust/google-pixel.settings.json`},Ce={},De=null,Oe=!1;function Ne(e,n,r){let i=(e.manifests||{})[e.active_manifest]||{},o=[];for(let e of i.assertions||[])if(String(e.label||``).startsWith(`c2pa.actions`))for(let n of e.data&&e.data.actions||[])o.push({action:n.action,dst:n.digitalSourceType,agent:n.softwareAgent&&n.softwareAgent.name});let s=e.validation_results&&e.validation_results.activeManifest||{},l=[];for(let e of[`success`,`informational`,`failure`])for(let n of s[e]||[])l.push([e,n.code,n.explanation||``]);let N=(i.claim_generator_info||[])[0];return{file:n,bytes:r,state:e.validation_state,has:e.has_manifest!==!1&&!!e.active_manifest,format:e.format||`?`,generator:N&&N.name||i.claim_generator||null,sig:i.signature_info||{},actions:o,statuses:l,full:e}}async function Be(e,n){if(!Oe){if(e.length>N){ce(`${n} is ${s(e.length)}; this demo reads files up to 50 MB.`,!0);return}Oe=!0,De={bytes:e,name:n},ce(`Verifying ${n}…`);try{let r=document.querySelector(`input[name="trust"]:checked`).value;r!==`off`&&!Ce[r]&&(Ce[r]=await(await fetch(he[r])).text());let{report:i,ms:o}=await verify(e,r===`off`?null:Ce[r]);if(i.error){ce(`Could not verify ${n}: ${i.error}`,!0);return}qe(Ne(i,n,e.length)),ce(`Verified in the browser in ${o} ms.`)}catch(e){ce(`Could not verify ${n}: ${e.message}`,!0)}finally{Oe=!1}}}function Ue(){let n=document.getElementById(`samples`);for(let r of e){let e=o(`button`,`sample`);e.type=`button`,e.id=`sample-`+r.key,e.setAttribute(`aria-pressed`,`false`),e.append(o(`span`,`name`,r.name),o(`span`,`sub`,r.sub)),e.addEventListener(`click`,async()=>{document.querySelectorAll(`.sample`).forEach(n=>n.setAttribute(`aria-pressed`,String(n===e))),Be(new Uint8Array(await(await fetch(ue+`samples/`+r.file)).arrayBuffer()),r.file)}),n.append(e)}}async function We(e){e&&(document.querySelectorAll(`.sample`).forEach(e=>e.setAttribute(`aria-pressed`,`false`)),Be(new Uint8Array(await e.arrayBuffer()),e.name))}var Ke=document.getElementById(`drop`);document.getElementById(`file`).addEventListener(`change`,e=>We(e.target.files[0])),[`dragenter`,`dragover`].forEach(e=>Ke.addEventListener(e,e=>{e.preventDefault(),Ke.classList.add(`over`)})),[`dragleave`,`drop`].forEach(e=>Ke.addEventListener(e,()=>Ke.classList.remove(`over`))),Ke.addEventListener(`drop`,e=>{e.preventDefault(),We(e.dataTransfer.files[0])}),document.querySelectorAll(`input[name="trust"]`).forEach(e=>e.addEventListener(`change`,()=>{De&&Be(De.bytes,De.name)})),Ue(),startPhp().then(({about:e})=>ce(`Ready: PHP ${e} in WebAssembly.`)).catch(e=>ce(`PHP could not start: `+e.message,!0));function qe(e){let N=document.getElementById(`report`);N.replaceChildren();let ae=e.has?e.state:`None`,ce=o(`div`,`verdict`);ce.dataset.state=ae;let ue=o(`div`,`state-line`),he=o(`span`,`pill`);he.innerHTML={Trusted:i.shield,Valid:i.alert,Invalid:i.cross,None:i.empty}[ae],he.append(document.createTextNode(ae===`None`?`No Content Credentials`:ae)),ue.append(he,o(`span`,`filemeta`,`${e.file} · ${String(e.format).toUpperCase()} · ${s(e.bytes)}`)),ce.append(ue,o(`p`,null,r[ae])),N.append(ce);let Ce=o(`div`,`sections`);if(e.has){let r=o(`section`);r.append(o(`h3`,`panel-title`,`Signed by`));let s=o(`dl`,`kv`),N=(e,n,r)=>{if(n==null||n===``)return;let i=o(`dd`,null,n);r&&i.append(r),s.append(o(`dt`,null,e),i)};N(`Signer`,e.sig.common_name),N(`Issuer`,e.sig.issuer),N(`Algorithm`,e.sig.alg&&String(e.sig.alg).toUpperCase()),e.sig.time&&N(`Timestamp`,String(e.sig.time).replace(`T`,` `).replace(/\.\d+/,``).replace(`+00:00`,` UTC`)),N(`Made with`,e.generator);for(let n of e.actions){let e=null;n.dst&&(e=o(`span`,null,` · `+l(n.dst)),l(n.dst)===`trainedAlgorithmicMedia`&&e.append(o(`span`,`ai-tag`,`AI-generated`))),N(`Action`,n.action+(n.agent?` by `+n.agent:``),e)}r.append(s),Ce.append(r);let ae=o(`section`);ae.append(o(`h3`,`panel-title`,`What was checked`));let ce=o(`ul`,`checks`),ue={failure:0,success:1,informational:2};[...e.statuses].sort((e,n)=>ue[e[0]]-ue[n[0]]).forEach(([e,r,s])=>{let l=o(`li`,`k-`+e),N=o(`span`,`ico`);N.innerHTML=e===`success`?i.ok:e===`failure`?i.bad:i.info,l.append(N,o(`span`,`label`,n[r]||r),o(`span`,`code`,r),o(`span`,`expl`,s)),ce.append(l)}),ae.append(ce),Ce.append(ae)}let De=o(`details`);De.append(o(`summary`,null,`The full report (c2patool’s JSON shape)`)),De.append(o(`pre`,null,JSON.stringify(e.full,null,2))),Ce.append(De),N.append(Ce)}})),import_main=require_main();export{init_preload_helper as i,jspi as n,__vitePreload as r,init_esm as t};