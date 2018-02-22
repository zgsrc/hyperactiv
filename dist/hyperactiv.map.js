!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.hyperactiv=t()}(this,function(){"use strict";const e=[],t=new WeakMap,n=e=>e&&"object"==typeof e,r=Array.isArray,u={timeout:null,queue:new Set,process(){for(const e of u.queue)e();u.queue.clear(),u.timeout=null},enqueue(e){null===u.timeout&&(u.timeout=setTimeout(u.process,0)),u.queue.add(e)}};const o=function(i,l={}){const{props:s=null,ignore:c=null,batch:f=!1,deep:a=!1,bind:d=!0,handler:p=null}=l;if(p&&a&&n(i)&&function e(t,r){Object.entries(t).forEach(([u,o])=>{["__observed","__key","__parent"].indexOf(u)<0&&o&&n(o)&&(Object.defineProperty(o,"__key",{value:u,enumerable:!1,configurable:!0}),Object.defineProperty(o,"__parent",{value:t,enumerable:!1,configurable:!0}),r&&e(o,r))})}(i,a),i.__observed)return i;t.set(i,new Map),a&&Object.entries(i).forEach(([e,t])=>{n(t)&&(i[e]=o(t,l))});const _=new Proxy(i,{get(n,r){if("__observed"===r)return!0;if((!s||s.includes(r))&&(!c||!c.includes(r))&&e.length){const n=t.get(i);n.has(r)||n.set(r,new Set),n.get(r).add(e[0])}return i[r]},set(d,_,b){if("__key"===_||"__parent"===_)d[_]=b;else{const d=t.get(i);if((!r(i)||"length"!==_)&&i[_]===b)return!0;if(i[_]=a&&n(b)?o(b,l):b,p){a&&n(i[_])&&(Object.defineProperty(i[_],"__key",{value:_,enumerable:!1,configurable:!0}),Object.defineProperty(i[_],"__parent",{value:i,enumerable:!1,configurable:!0}));const e=[_];let t=i;for(;t.__key&&t.__parent;)e.unshift(t.__key),t=t.__parent;p(e,b)}if((!s||s.includes(_))&&(!c||!c.includes(_))&&d.has(_)){const t=d.get(_);for(const n of t)n.__disposed?t.delete(n):n!==e[0]&&(f?u.enqueue(n):n())}}return!0},deleteProperty:(e,t)=>(e[t]&&p&&(delete e[t].__key,delete e[t].__parent),delete e[t],!0)});return d&&n(i)&&Object.getOwnPropertyNames(i).forEach(e=>{"function"==typeof i[e]&&(i[e]=i[e].bind(_))}),_};return{observe:o,computed:function(t,{autoRun:n=!0,callback:r=null}={}){const u=new Proxy(t,{apply(t,n,o){const i=(i=null)=>{e.unshift(r||u);const l=i?i():t.apply(n,o);return e.shift(),l};return o.push({computeAsync:e=>i(e)}),i()}});return n&&u(),u},dispose:e=>e.__disposed=!0,write:function(e){return function(t,n){if(n=JSON.parse(JSON.stringify(n)),!t||t.length<1)return;let r=e||(Number.isInteger(t[0])?[]:{}),u=null;for(let e=0;e<t.length-1;e++)null==r[u=t[e]]&&(r[u]=Number.isInteger(t[e+1])?[]:{}),r=r[u];r[t[t.length-1]]=n}}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZXJhY3Rpdi5tYXAuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21wdXRlZFN0YWNrID0gW11cbmNvbnN0IG9ic2VydmVyc01hcCA9IG5ldyBXZWFrTWFwKClcblxuY29uc3QgaXNPYmogPSBvID0+IG8gJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheVxuXG5jb25zdCBjb21wdXRlZCA9IGZ1bmN0aW9uKGZ1biwgeyBhdXRvUnVuID0gdHJ1ZSwgY2FsbGJhY2sgPSBudWxsIH0gPSB7fSkge1xuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KGZ1biwge1xuICAgICAgICBhcHBseSh0YXJnZXQsIHRoaXNBcmcsIGFyZ3NMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBwZXJmb3JtQ29tcHV0YXRpb24gPSAoZnVuID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkU3RhY2sudW5zaGlmdChjYWxsYmFjayB8fCBwcm94eSlcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmdW4gPyBmdW4oKSA6IHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdzTGlzdClcbiAgICAgICAgICAgICAgICBjb21wdXRlZFN0YWNrLnNoaWZ0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyZ3NMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbXB1dGVBc3luYzogdGFyZ2V0ID0+IHBlcmZvcm1Db21wdXRhdGlvbih0YXJnZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gcGVyZm9ybUNvbXB1dGF0aW9uKClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYoYXV0b1J1bikgcHJveHkoKVxuICAgIHJldHVybiBwcm94eVxufVxuXG5jb25zdCBkaXNwb3NlID0gXyA9PiBfLl9fZGlzcG9zZWQgPSB0cnVlXG5cbmNvbnN0IGJhdGNoZXIgPSB7XG4gICAgdGltZW91dDogbnVsbCxcbiAgICBxdWV1ZTogbmV3IFNldCgpLFxuICAgIHByb2Nlc3MoKSB7XG4gICAgICAgIGZvcihjb25zdCB0YXNrIG9mIGJhdGNoZXIucXVldWUpIHRhc2soKVxuICAgICAgICBiYXRjaGVyLnF1ZXVlLmNsZWFyKClcbiAgICAgICAgYmF0Y2hlci50aW1lb3V0ID0gbnVsbFxuICAgIH0sXG4gICAgZW5xdWV1ZSh0YXNrKSB7XG4gICAgICAgIGlmKGJhdGNoZXIudGltZW91dCA9PT0gbnVsbClcbiAgICAgICAgICAgIGJhdGNoZXIudGltZW91dCA9IHNldFRpbWVvdXQoYmF0Y2hlci5wcm9jZXNzLCAwKVxuICAgICAgICBiYXRjaGVyLnF1ZXVlLmFkZCh0YXNrKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnViYmxlKG9iaiwgZGVlcCkge1xuICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICBpZihbJ19fb2JzZXJ2ZWQnLCAnX19rZXknLCAnX19wYXJlbnQnXS5pbmRleE9mKGtleSkgPCAwICYmIHZhbCAmJiBpc09iaih2YWwpKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnX19rZXknLCB7IHZhbHVlOiBrZXksIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWUgfSlcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdfX3BhcmVudCcsIHsgdmFsdWU6IG9iaiwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KVxuICAgICAgICAgICAgaWYoZGVlcCkgYnViYmxlKHZhbCwgZGVlcClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IG9ic2VydmUgPSBmdW5jdGlvbihvYmosIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcHJvcHMgPSBudWxsLCBpZ25vcmUgPSBudWxsLCBiYXRjaCA9IGZhbHNlLCBkZWVwID0gZmFsc2UsIGJpbmQgPSB0cnVlLCBoYW5kbGVyID0gbnVsbFxuICAgIH0gPSBvcHRpb25zXG5cbiAgICBpZihoYW5kbGVyICYmIGRlZXAgJiYgaXNPYmoob2JqKSkge1xuICAgICAgICBidWJibGUob2JqLCBkZWVwKVxuICAgIH1cblxuICAgIGlmKG9iai5fX29ic2VydmVkKSByZXR1cm4gb2JqXG5cbiAgICBvYnNlcnZlcnNNYXAuc2V0KG9iaiwgbmV3IE1hcCgpKVxuICAgIGRlZXAgJiYgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgIGlmKGlzT2JqKHZhbCkpIG9ialtrZXldID0gb2JzZXJ2ZSh2YWwsIG9wdGlvbnMpXG4gICAgfSlcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KG9iaiwge1xuICAgICAgICBnZXQoXywgcHJvcCkge1xuICAgICAgICAgICAgaWYocHJvcCA9PT0gJ19fb2JzZXJ2ZWQnKSByZXR1cm4gdHJ1ZVxuXG4gICAgICAgICAgICBpZigoIXByb3BzIHx8IHByb3BzLmluY2x1ZGVzKHByb3ApKSAmJiAoIWlnbm9yZSB8fCAhaWdub3JlLmluY2x1ZGVzKHByb3ApKSkge1xuICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVkU3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyTWFwID0gb2JzZXJ2ZXJzTWFwLmdldChvYmopXG4gICAgICAgICAgICAgICAgICAgIGlmKCFvYnNlcnZlck1hcC5oYXMocHJvcCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlck1hcC5zZXQocHJvcCwgbmV3IFNldCgpKVxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlck1hcC5nZXQocHJvcCkuYWRkKGNvbXB1dGVkU3RhY2tbMF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdXG4gICAgICAgIH0sXG4gICAgICAgIHNldChfLCBwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYocHJvcCA9PT0gJ19fa2V5JyB8fCBwcm9wID09PSAnX19wYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgX1twcm9wXSA9IHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyTWFwID0gb2JzZXJ2ZXJzTWFwLmdldChvYmopXG5cbiAgICAgICAgICAgICAgICBpZigoIWlzQXJyYXkob2JqKSB8fCBwcm9wICE9PSAnbGVuZ3RoJykgJiYgb2JqW3Byb3BdID09PSB2YWx1ZSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBkZWVwICYmIGlzT2JqKHZhbHVlKSA/IG9ic2VydmUodmFsdWUsIG9wdGlvbnMpIDogdmFsdWVcblxuICAgICAgICAgICAgICAgIGlmKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVlcCAmJiBpc09iaihvYmpbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqW3Byb3BdLCAnX19rZXknLCB7IHZhbHVlOiBwcm9wLCBlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqW3Byb3BdLCAnX19wYXJlbnQnLCB7IHZhbHVlOiBvYmosIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuY2VzdHJ5ID0gWyBwcm9wIF1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG9ialxuICAgICAgICAgICAgICAgICAgICB3aGlsZShwYXJlbnQuX19rZXkgJiYgcGFyZW50Ll9fcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNlc3RyeS51bnNoaWZ0KHBhcmVudC5fX2tleSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5fX3BhcmVudFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYW5jZXN0cnksIHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCghcHJvcHMgfHwgcHJvcHMuaW5jbHVkZXMocHJvcCkpICYmICghaWdub3JlIHx8ICFpZ25vcmUuaW5jbHVkZXMocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKG9ic2VydmVyTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW50cyA9IG9ic2VydmVyTWFwLmdldChwcm9wKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGVwZW5kZW50Ll9fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50cy5kZWxldGUoZGVwZW5kZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkZXBlbmRlbnQgIT09IGNvbXB1dGVkU3RhY2tbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmF0Y2gpIGJhdGNoZXIuZW5xdWV1ZShkZXBlbmRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZGVwZW5kZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVQcm9wZXJ0eShfLCBwcm9wKSB7XG4gICAgICAgICAgICBpZihfW3Byb3BdICYmIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX1twcm9wXS5fX2tleVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBfW3Byb3BdLl9fcGFyZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgX1twcm9wXVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBiaW5kICYmIGlzT2JqKG9iaikgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZiBvYmpba2V5XSA9PT0gJ2Z1bmN0aW9uJykgb2JqW2tleV0gPSBvYmpba2V5XS5iaW5kKHByb3h5KVxuICAgIH0pXG5cbiAgICByZXR1cm4gcHJveHlcbn1cblxuY29uc3Qgd3JpdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocHJvcHMsIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIGlmKCFwcm9wcyB8fCBwcm9wcy5sZW5ndGggPCAxKSByZXR1cm5cbiAgICAgICAgbGV0IGN4dCA9IG9iaiB8fCAoTnVtYmVyLmlzSW50ZWdlcihwcm9wc1swXSkgPyBbIF0gOiB7IH0pLCBwcm9wID0gbnVsbFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwcm9wID0gcHJvcHNbaV1cbiAgICAgICAgICAgIGlmKGN4dFtwcm9wXSA9PSBudWxsKSBjeHRbcHJvcF0gPSBOdW1iZXIuaXNJbnRlZ2VyKHByb3BzW2kgKyAxXSkgPyBbIF0gOiB7IH1cbiAgICAgICAgICAgIGN4dCA9IGN4dFtwcm9wXVxuICAgICAgICB9XG4gICAgICAgIGN4dFtwcm9wc1twcm9wcy5sZW5ndGggLSAxXV0gPSB2YWx1ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG9ic2VydmUsXG4gICAgY29tcHV0ZWQsXG4gICAgZGlzcG9zZSxcbiAgICB3cml0ZVxufSJdLCJuYW1lcyI6WyJjb21wdXRlZFN0YWNrIiwib2JzZXJ2ZXJzTWFwIiwiV2Vha01hcCIsImlzT2JqIiwibyIsImlzQXJyYXkiLCJBcnJheSIsImJhdGNoZXIiLCJ0aW1lb3V0IiwicXVldWUiLCJTZXQiLCJbb2JqZWN0IE9iamVjdF0iLCJ0YXNrIiwiY2xlYXIiLCJzZXRUaW1lb3V0IiwicHJvY2VzcyIsImFkZCIsIm9ic2VydmUiLCJvYmoiLCJvcHRpb25zIiwicHJvcHMiLCJpZ25vcmUiLCJiYXRjaCIsImRlZXAiLCJiaW5kIiwiaGFuZGxlciIsImJ1YmJsZSIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwia2V5IiwidmFsIiwiaW5kZXhPZiIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiX19vYnNlcnZlZCIsInNldCIsIk1hcCIsInByb3h5IiwiUHJveHkiLCJfIiwicHJvcCIsImluY2x1ZGVzIiwibGVuZ3RoIiwib2JzZXJ2ZXJNYXAiLCJnZXQiLCJoYXMiLCJhbmNlc3RyeSIsInBhcmVudCIsIl9fa2V5IiwiX19wYXJlbnQiLCJ1bnNoaWZ0IiwiZGVwZW5kZW50cyIsImRlcGVuZGVudCIsIl9fZGlzcG9zZWQiLCJkZWxldGUiLCJlbnF1ZXVlIiwiZGVsZXRlUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiY29tcHV0ZWQiLCJmdW4iLCJhdXRvUnVuIiwiY2FsbGJhY2siLCJ0YXJnZXQiLCJ0aGlzQXJnIiwiYXJnc0xpc3QiLCJwZXJmb3JtQ29tcHV0YXRpb24iLCJyZXN1bHQiLCJhcHBseSIsInNoaWZ0IiwicHVzaCIsImNvbXB1dGVBc3luYyIsImRpc3Bvc2UiLCJ3cml0ZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImN4dCIsIk51bWJlciIsImlzSW50ZWdlciIsImkiXSwibWFwcGluZ3MiOiJzTEFBQSxNQUFNQSxLQUNBQyxFQUFlLElBQUlDLFFBRW5CQyxFQUFRQyxHQUFLQSxHQUFrQixpQkFBTkEsRUFDekJDLEVBQVVDLE1BQU1ELFFBeUJoQkUsR0FDRkMsUUFBUyxLQUNUQyxNQUFPLElBQUlDLElBQ1hDLFVBQ0ksSUFBSSxNQUFNQyxLQUFRTCxFQUFRRSxNQUFPRyxJQUNqQ0wsRUFBUUUsTUFBTUksUUFDZE4sRUFBUUMsUUFBVSxNQUV0QkcsUUFBUUMsR0FDbUIsT0FBcEJMLEVBQVFDLFVBQ1BELEVBQVFDLFFBQVVNLFdBQVdQLEVBQVFRLFFBQVMsSUFDbERSLEVBQVFFLE1BQU1PLElBQUlKLEtBYzFCLE1BQU1LLEVBQVUsU0FBU0MsRUFBS0MsTUFDMUIsTUFBTUMsTUFDRkEsRUFBUSxLQUFJQyxPQUFFQSxFQUFTLEtBQUlDLE1BQUVBLEdBQVEsRUFBS0MsS0FBRUEsR0FBTyxFQUFLQyxLQUFFQSxHQUFPLEVBQUlDLFFBQUVBLEVBQVUsTUFDakZOLEVBTUosR0FKR00sR0FBV0YsR0FBUXBCLEVBQU1lLElBZmhDLFNBQVNRLEVBQU9SLEVBQUtLLEdBQ2pCSSxPQUFPQyxRQUFRVixHQUFLVyxRQUFRLEVBQUVDLEVBQUtDLE9BQzNCLGFBQWMsUUFBUyxZQUFZQyxRQUFRRixHQUFPLEdBQUtDLEdBQU81QixFQUFNNEIsS0FDcEVKLE9BQU9NLGVBQWVGLEVBQUssU0FBV0csTUFBT0osRUFBS0ssWUFBWSxFQUFPQyxjQUFjLElBQ25GVCxPQUFPTSxlQUFlRixFQUFLLFlBQWNHLE1BQU9oQixFQUFLaUIsWUFBWSxFQUFPQyxjQUFjLElBQ25GYixHQUFNRyxFQUFPSyxFQUFLUixNQVd6QkcsQ0FBT1IsRUFBS0ssR0FHYkwsRUFBSW1CLFdBQVksT0FBT25CLEVBRTFCakIs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
