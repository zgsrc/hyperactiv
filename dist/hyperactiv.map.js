!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.hyperactiv=t()}(this,function(){"use strict";const e=[],t=new WeakMap,n=function(e){return e&&"object"==typeof e&&!(e instanceof Date)},o=Array.isArray,r=function(e,t,o,u){Object.defineProperty(e,"__key",{value:t,enumerable:!1,configurable:!0}),Object.defineProperty(e,"__parent",{value:o,enumerable:!1,configurable:!0}),u&&Object.entries(e).forEach(function([t,o]){!n(o)||o.__key&&o.__parent||r(e[t],t,e)})},u={timeout:null,queue:new Set,process(){for(const e of u.queue)e();u.queue.clear(),u.timeout=null},enqueue(e){null===u.timeout&&(u.timeout=setTimeout(u.process,0)),u.queue.add(e)}},c=function(i,s={}){const{props:f=null,ignore:l=null,batch:a=!1,deep:p=!1,handler:d=null,bind:b=!1}=s;if(i.__observed)return i;t.set(i,new Map),p&&Object.entries(i).forEach(function([e,t]){n(t)&&(i[e]=c(t,s),d&&r(i[e],e,i))});const y=new Proxy(i,{get(n,o){if("__observed"===o)return!0;if((!f||f.includes(o))&&(!l||!l.includes(o))&&e.length){const n=t.get(i);n.has(o)||n.set(o,new Set),n.get(o).add(e[0])}return i[o]},set(b,_,g){const m=t.get(i);if((!o(i)||"length"!==_)&&i[_]===g)return!0;const O=i[_];if(i[_]=p&&n(g)?c(g,s):g,d&&p&&n(g)&&r(i[_],_,i,p),d){const e=[_];let t=i;for(;t.__key&&t.__parent;)e.unshift(t.__key),t=t.__parent;d(e,g,O,y)}if((!f||f.includes(_))&&(!l||!l.includes(_))&&m.has(_)){const t=m.get(_);for(const n of t)n.__disposed?t.delete(n):n!==e[0]&&(a?u.enqueue(n):n())}return!0}});if(b){[...Object.getOwnPropertyNames(i),...Object.getPrototypeOf(i)&&["String","Number","Object","Array","Boolean","Date"].indexOf(Object.getPrototypeOf(i).constructor.name)<0?Object.getOwnPropertyNames(Object.getPrototypeOf(i)):[]].filter(e=>"constructor"!=e&&"function"==typeof i[e]).forEach(e=>i[e]=i[e].bind(y))}return y};return{observe:c,computed:function(t,{autoRun:n=!0,callback:o=null,bind:r=null}={}){const u=new Proxy(t,{apply(t,n,c){const i=function(i=null){e.unshift(o||u);const s=i?i():t.apply(r||n,c);return e.shift(),s};return c.push({computeAsync:function(e){return i(e)}}),i()}});return n&&u(),u},dispose:function(e){return e.__disposed=!0}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZXJhY3Rpdi5tYXAuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21wdXRlZFN0YWNrID0gW11cbmNvbnN0IG9ic2VydmVyc01hcCA9IG5ldyBXZWFrTWFwKClcblxuLyogVG9vbHMgKi9cblxuY29uc3QgaXNPYmogPSBmdW5jdGlvbihvKSB7IHJldHVybiBvICYmIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiAhKG8gaW5zdGFuY2VvZiBEYXRlKSB9XG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheVxuY29uc3QgZGVmaW5lQnViYmxpbmdQcm9wZXJ0aWVzID0gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHBhcmVudCwgZGVlcCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsICdfX2tleScsIHsgdmFsdWU6IGtleSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmplY3QsICdfX3BhcmVudCcsIHsgdmFsdWU6IHBhcmVudCwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KVxuICAgIGRlZXAgJiYgT2JqZWN0LmVudHJpZXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uKFtrZXksIHZhbF0pIHtcbiAgICAgICAgaWYoaXNPYmoodmFsKSAmJiAoIXZhbC5fX2tleSB8fCAhdmFsLl9fcGFyZW50KSkgZGVmaW5lQnViYmxpbmdQcm9wZXJ0aWVzKG9iamVjdFtrZXldLCBrZXksIG9iamVjdClcbiAgICB9KVxufVxuXG5jb25zdCBiYXRjaGVyID0ge1xuICAgIHRpbWVvdXQ6IG51bGwsXG4gICAgcXVldWU6IG5ldyBTZXQoKSxcbiAgICBwcm9jZXNzKCkge1xuICAgICAgICBmb3IoY29uc3QgdGFzayBvZiBiYXRjaGVyLnF1ZXVlKSB0YXNrKClcbiAgICAgICAgYmF0Y2hlci5xdWV1ZS5jbGVhcigpXG4gICAgICAgIGJhdGNoZXIudGltZW91dCA9IG51bGxcbiAgICB9LFxuICAgIGVucXVldWUodGFzaykge1xuICAgICAgICBpZihiYXRjaGVyLnRpbWVvdXQgPT09IG51bGwpXG4gICAgICAgICAgICBiYXRjaGVyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGJhdGNoZXIucHJvY2VzcywgMClcbiAgICAgICAgYmF0Y2hlci5xdWV1ZS5hZGQodGFzaylcbiAgICB9XG59XG5cbi8qIENvbXB1dGVkICovXG5cbmNvbnN0IGNvbXB1dGVkID0gZnVuY3Rpb24oZnVuLCB7IGF1dG9SdW4gPSB0cnVlLCBjYWxsYmFjayA9IG51bGwsIGJpbmQgPSBudWxsIH0gPSB7fSkge1xuICAgIC8vIFByb3hpZnkgdGhlIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGludGVyY2VwdCB0aGUgY2FsbHNcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShmdW4sIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdzTGlzdCkge1xuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGZ1bmN0aW9uIHdoaWNoIGlzIGJlaW5nIGNvbXB1dGVkIGluc2lkZSBhIHN0YWNrXG4gICAgICAgICAgICBjb25zdCBwZXJmb3JtQ29tcHV0YXRpb24gPSBmdW5jdGlvbihmdW4gPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZWRTdGFjay51bnNoaWZ0KGNhbGxiYWNrIHx8IHByb3h5KVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1biA/IGZ1bigpIDogdGFyZ2V0LmFwcGx5KGJpbmQgfHwgdGhpc0FyZywgYXJnc0xpc3QpXG4gICAgICAgICAgICAgICAgY29tcHV0ZWRTdGFjay5zaGlmdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbmplY3QgdGhlIGNvbXB1dGVBc3luYyBhcmd1bWVudCB3aGljaCBpcyB1c2VkIHRvIG1hbnVhbGx5IGRlY2xhcmUgd2hlbiB0aGUgY29tcHV0YXRpb24gdGFrZXMgcGFydFxuICAgICAgICAgICAgYXJnc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgY29tcHV0ZUFzeW5jOiBmdW5jdGlvbih0YXJnZXQpIHsgcmV0dXJuIHBlcmZvcm1Db21wdXRhdGlvbih0YXJnZXQpIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHJldHVybiBwZXJmb3JtQ29tcHV0YXRpb24oKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyBJZiBhdXRvUnVuLCB0aGVuIGNhbGwgdGhlIGZ1bmN0aW9uIGF0IG9uY2VcbiAgICBpZihhdXRvUnVuKSBwcm94eSgpXG4gICAgcmV0dXJuIHByb3h5XG59XG5cbi8qIERpc3Bvc2UgKi9cblxuLy8gVGhlIGRpc3Bvc2VkIGZsYWcgd2hpY2ggaXMgdXNlZCB0byByZW1vdmUgYSBjb21wdXRlZCBmdW5jdGlvbiByZWZlcmVuY2UgcG9pbnRlclxuY29uc3QgZGlzcG9zZSA9IGZ1bmN0aW9uKF8pIHsgcmV0dXJuIF8uX19kaXNwb3NlZCA9IHRydWUgfVxuXG4vKiBPYnNlcnZlICovXG5cbmNvbnN0IG9ic2VydmUgPSBmdW5jdGlvbihvYmosIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgcHJvcHMgPSBudWxsLCBpZ25vcmUgPSBudWxsLCBiYXRjaCA9IGZhbHNlLCBkZWVwID0gZmFsc2UsIGhhbmRsZXIgPSBudWxsLCBiaW5kID0gZmFsc2VcbiAgICB9ID0gb3B0aW9uc1xuXG4gICAgLy8gSWdub3JlIGlmIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBvYnNlcnZlZFxuICAgIGlmKG9iai5fX29ic2VydmVkKSByZXR1cm4gb2JqXG5cbiAgICAvLyBBZGQgdGhlIG9iamVjdCB0byB0aGUgb2JzZXJ2ZXJzIG1hcC5cbiAgICAvLyBvYnNlcnZlcnNNYXAgc2lnbmF0dXJlIDogTWFwPE9iamVjdCwgTWFwPFByb3BlcnR5LCBTZXQ8Q29tcHV0ZWQgZnVuY3Rpb24+Pj5cbiAgICAvLyBJbiBlbmdsaXNoIDpcbiAgICAvLyBvYnNlcnZlcnNNYXAgaXMgYSBtYXAgb2Ygb2JzZXJ2ZWQgb2JqZWN0cy5cbiAgICAvLyBGb3IgZWFjaCBvYnNlcnZlZCBvYmplY3QsIGVhY2ggcHJvcGVydHkgaXMgbWFwcGVkIHdpdGggYSBzZXQgb2YgY29tcHV0ZWQgZnVuY3Rpb25zIGRlcGVuZGluZyBvbiB0aGlzIHByb3BlcnR5LlxuICAgIC8vIFdoZW5ldmVyIGEgcHJvcGVydHkgaXMgc2V0LCB3ZSByZS1ydW4gZWFjaCBvbmUgb2YgdGhlIGZ1bmN0aW9ucyBzdG9yZWQgaW5zaWRlIHRoZSBtYXRjaGluZyBTZXQuXG4gICAgb2JzZXJ2ZXJzTWFwLnNldChvYmosIG5ldyBNYXAoKSlcblxuICAgIC8vIElmIHRoZSBkZWVwIGZsYWcgaXMgc2V0LCBvYnNlcnZlIG5lc3RlZCBvYmplY3RzL2FycmF5c1xuICAgIGRlZXAgJiYgT2JqZWN0LmVudHJpZXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uKFtrZXksIHZhbF0pIHtcbiAgICAgICAgaWYoaXNPYmoodmFsKSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBvYnNlcnZlKHZhbCwgb3B0aW9ucylcbiAgICAgICAgICAgIC8vIElmIGEgaGFuZGxlciBpcyBzZXQsIHdlIGFkZCBrZXlzIHRvIHRoZSBvYmplY3QgdXNlZCB0byBidWJibGUgdXAgdGhlIG11dGF0aW9uXG4gICAgICAgICAgICBpZihoYW5kbGVyKVxuICAgICAgICAgICAgICAgIGRlZmluZUJ1YmJsaW5nUHJvcGVydGllcyhvYmpba2V5XSwga2V5LCBvYmopXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gUHJveGlmeSB0aGUgb2JqZWN0IGluIG9yZGVyIHRvIGludGVyY2VwdCBnZXQvc2V0IG9uIHByb3BzXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkob2JqLCB7XG4gICAgICAgIGdldChfLCBwcm9wKSB7XG4gICAgICAgICAgICBpZihwcm9wID09PSAnX19vYnNlcnZlZCcpIHJldHVybiB0cnVlXG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBwcm9wIGlzIHdhdGNoZWRcbiAgICAgICAgICAgIGlmKCghcHJvcHMgfHwgcHJvcHMuaW5jbHVkZXMocHJvcCkpICYmICghaWdub3JlIHx8ICFpZ25vcmUuaW5jbHVkZXMocHJvcCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBjb21wdXRlZCBmdW5jdGlvbiBpcyBiZWluZyBydW5cbiAgICAgICAgICAgICAgICBpZihjb21wdXRlZFN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzTWFwID0gb2JzZXJ2ZXJzTWFwLmdldChvYmopXG4gICAgICAgICAgICAgICAgICAgIGlmKCFwcm9wZXJ0aWVzTWFwLmhhcyhwcm9wKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNNYXAuc2V0KHByb3AsIG5ldyBTZXQoKSlcbiAgICAgICAgICAgICAgICAgICAgLy8gTGluayB0aGUgY29tcHV0ZWQgZnVuY3Rpb24gYW5kIHRoZSBwcm9wZXJ0eSBiZWluZyBhY2Nlc3NlZFxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzTWFwLmdldChwcm9wKS5hZGQoY29tcHV0ZWRTdGFja1swXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0KF8sIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzTWFwID0gb2JzZXJ2ZXJzTWFwLmdldChvYmopXG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBuZXcvb2xkIHZhbHVlIGFyZSBlcXVhbCwgcmV0dXJuXG4gICAgICAgICAgICBpZigoIWlzQXJyYXkob2JqKSB8fCBwcm9wICE9PSAnbGVuZ3RoJykgJiYgb2JqW3Byb3BdID09PSB2YWx1ZSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIC8vIFJlbWVtYmVyIG9sZCB2YWx1ZSBmb3IgaGFuZGxlclxuICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvYmpbcHJvcF1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWVwIGZsYWcgaXMgc2V0IHdlIG9ic2VydmUgdGhlIG5ld2x5IHNldCB2YWx1ZVxuICAgICAgICAgICAgb2JqW3Byb3BdID0gZGVlcCAmJiBpc09iaih2YWx1ZSkgPyBvYnNlcnZlKHZhbHVlLCBvcHRpb25zKSA6IHZhbHVlXG4gICAgICAgICAgICAvLyBJZiB3ZSBkZWZpbmVkIGEgaGFuZGxlciwgd2UgZGVmaW5lIHRoZSBidWJibGluZyBrZXlzIHJlY3Vyc2l2ZWx5IG9uIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgICAgIGhhbmRsZXIgJiYgZGVlcCAmJiBpc09iaih2YWx1ZSkgJiYgZGVmaW5lQnViYmxpbmdQcm9wZXJ0aWVzKG9ialtwcm9wXSwgcHJvcCwgb2JqLCBkZWVwKVxuXG4gICAgICAgICAgICBpZihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gUmV0cmlldmUgdGhlIG11dGF0ZWQgcHJvcGVydGllcyBjaGFpbiAmIGNhbGwgdGhlIGhhbmRsZXJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNlc3RyeSA9IFsgcHJvcCBdXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG9ialxuICAgICAgICAgICAgICAgIHdoaWxlKHBhcmVudC5fX2tleSAmJiBwYXJlbnQuX19wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5jZXN0cnkudW5zaGlmdChwYXJlbnQuX19rZXkpXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5fX3BhcmVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGVyKGFuY2VzdHJ5LCB2YWx1ZSwgb2xkVmFsdWUsIHByb3h5KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgcHJvcCBpcyB3YXRjaGVkXG4gICAgICAgICAgICBpZigoIXByb3BzIHx8IHByb3BzLmluY2x1ZGVzKHByb3ApKSAmJiAoIWlnbm9yZSB8fCAhaWdub3JlLmluY2x1ZGVzKHByb3ApKSkge1xuICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZXNNYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBjb21wdXRlZCBmdW5jdGlvbnMgZGVwZW5kaW5nIG9uIHRoZSBwcm9wXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVudHMgPSBwcm9wZXJ0aWVzTWFwLmdldChwcm9wKVxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGRpc3Bvc2VkLCBkZWxldGUgdGhlIGZ1bmN0aW9uIHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGVwZW5kZW50Ll9fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbnRzLmRlbGV0ZShkZXBlbmRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZGVwZW5kZW50ICE9PSBjb21wdXRlZFN0YWNrWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUnVuIHRoZSBjb21wdXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJhdGNoKSBiYXRjaGVyLmVucXVldWUoZGVwZW5kZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZGVwZW5kZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYoYmluZCkge1xuICAgICAgICAvLyBOZWVkIHRoaXMgZm9yIGJpbmRpbmcgZXM2IGNsYXNzZXMgbWV0aG9kcyB3aGljaCBhcmUgc3RvcmVkIGluIHRoZSBvYmplY3QgcHJvdG90eXBlXG4gICAgICAgIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLFxuICAgICAgICAgICAgLi4uT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgJiYgWydTdHJpbmcnLCAnTnVtYmVyJywgJ09iamVjdCcsICdBcnJheScsICdCb29sZWFuJywgJ0RhdGUnXS5pbmRleE9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopLmNvbnN0cnVjdG9yLm5hbWUpIDwgMCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IFtdXG4gICAgICAgIF0uZmlsdGVyKHByb3AgPT4gcHJvcCAhPSAnY29uc3RydWN0b3InICYmIHR5cGVvZiBvYmpbcHJvcF0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgIG1ldGhvZHMuZm9yRWFjaChrZXkgPT4gb2JqW2tleV0gPSBvYmpba2V5XS5iaW5kKHByb3h5KSlcbiAgICB9XG5cbiAgICByZXR1cm4gcHJveHlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG9ic2VydmUsXG4gICAgY29tcHV0ZWQsXG4gICAgZGlzcG9zZVxufSJdLCJuYW1lcyI6WyJjb21wdXRlZFN0YWNrIiwib2JzZXJ2ZXJzTWFwIiwiV2Vha01hcCIsImlzT2JqIiwibyIsIkRhdGUiLCJpc0FycmF5IiwiQXJyYXkiLCJkZWZpbmVCdWJibGluZ1Byb3BlcnRpZXMiLCJvYmplY3QiLCJrZXkiLCJwYXJlbnQiLCJkZWVwIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInZhbCIsIl9fa2V5IiwiX19wYXJlbnQiLCJiYXRjaGVyIiwidGltZW91dCIsInF1ZXVlIiwiU2V0IiwiW29iamVjdCBPYmplY3RdIiwidGFzayIsImNsZWFyIiwic2V0VGltZW91dCIsInByb2Nlc3MiLCJhZGQiLCJvYnNlcnZlIiwib2JqIiwib3B0aW9ucyIsInByb3BzIiwiaWdub3JlIiwiYmF0Y2giLCJoYW5kbGVyIiwiYmluZCIsIl9fb2JzZXJ2ZWQiLCJzZXQiLCJNYXAiLCJwcm94eSIsIlByb3h5IiwiXyIsInByb3AiLCJpbmNsdWRlcyIsImxlbmd0aCIsInByb3BlcnRpZXNNYXAiLCJnZXQiLCJoYXMiLCJvbGRWYWx1ZSIsImFuY2VzdHJ5IiwidW5zaGlmdCIsImRlcGVuZGVudHMiLCJkZXBlbmRlbnQiLCJfX2Rpc3Bvc2VkIiwiZGVsZXRlIiwiZW5xdWV1ZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRQcm90b3R5cGVPZiIsImluZGV4T2YiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmaWx0ZXIiLCJjb21wdXRlZCIsImZ1biIsImF1dG9SdW4iLCJjYWxsYmFjayIsInRhcmdldCIsInRoaXNBcmciLCJhcmdzTGlzdCIsInBlcmZvcm1Db21wdXRhdGlvbiIsInJlc3VsdCIsImFwcGx5Iiwic2hpZnQiLCJwdXNoIiwiY29tcHV0ZUFzeW5jIiwiZGlzcG9zZSJdLCJtYXBwaW5ncyI6InNMQUFBLE1BQU1BLEtBQ0FDLEVBQWUsSUFBSUMsUUFJbkJDLEVBQVEsU0FBU0MsR0FBSyxPQUFPQSxHQUFrQixpQkFBTkEsS0FBb0JBLGFBQWFDLE9BQzFFQyxFQUFVQyxNQUFNRCxRQUNoQkUsRUFBMkIsU0FBU0MsRUFBUUMsRUFBS0MsRUFBUUMsR0FDM0RDLE9BQU9DLGVBQWVMLEVBQVEsU0FBV00sTUFBT0wsRUFBS00sWUFBWSxFQUFPQyxjQUFjLElBQ3RGSixPQUFPQyxlQUFlTCxFQUFRLFlBQWNNLE1BQU9KLEVBQVFLLFlBQVksRUFBT0MsY0FBYyxJQUM1RkwsR0FBUUMsT0FBT0ssUUFBUVQsR0FBUVUsUUFBUSxVQUFVVCxFQUFLVSxLQUMvQ2pC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
