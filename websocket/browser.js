!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e["hyperactiv-websocket"]=t()}(this,function(){"use strict";return(e,t,n,s)=>{const r={},o=new WebSocket(e||"ws://localhost:8080"),a=function(e){if(!e)throw new Error("writeHandler needs a proper target !");return function(t,n){n=(s=n)&&"object"==typeof s?JSON.parse(JSON.stringify(n)):n;var s;for(let n=0;n<t.length-1;n++){const s=t[n],o=t[n+1];void 0===e[s]&&(e[s]=(r=o,Number.isInteger(Number.parseInt(r))?[]:{})),e=e[s]}var r;e[t[t.length-1]]=n}}(t);let i=0;o.addEventListener("message",e=>{e=JSON.parse(e.data),n&&console.debug(e),"sync"==e.type?("function"==typeof t?t=t(e.state):Object.assign(t,e.state),Array.isArray(e.methods)&&e.methods.forEach(e=>a(e,async(...t)=>(o.send(JSON.stringify({type:"call",keys:e,args:t,request:++i})),new Promise((t,n)=>{r[i]=t,setTimeout(()=>{delete r[i],n(new Error("Timeout on call to "+e))},s||15e3)}))))):"update"==e.type?a(e.keys,e.value):"response"==e.type?(r[e.request](e.result),delete r[e.request]):console.warn("Unrecognized message "+(e.type||e))}),o.addEventListener("open",()=>o.send("sync"))}});
