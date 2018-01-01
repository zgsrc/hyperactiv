!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.hyperactiv=t()}(this,function(){"use strict";const e=[],t=new WeakMap,n={timeout:null,queue:new Set,process:()=>{for(let e of n.queue)e();n.queue.clear(),n.timeout=null},enqueue:e=>{null===n.timeout&&(n.timeout=setTimeout(n.process,0)),n.queue.add(e)}};return{observe:function(u,{props:o=null,ignore:s=null,batch:r=!1}={}){return t.set(u,new Map),new Proxy(u,{get(n,r){const i=t.get(u);if(o&&!o.includes(r)||s&&s.includes(r))return u[r];i.has(r)||i.set(r,new Set);const c=i.get(r);return e.length>0&&c.add(e[0]),i.set(r,c),u[r]},set(e,i,c){const l=t.get(u);if(u[i]===c)return!1;if(u[i]=c,o&&!o.includes(i)||s&&s.includes(i))return!0;if(l.has(i)){const e=l.get(i);for(let t of e)t.__disposed?e.delete(t):r?n.enqueue(t):t()}return!0}})},computed:function(t,{autoRun:n=!0}={}){const u=new Proxy(t,{apply:function(t,n,o){const s=(s=null)=>{e.unshift(u);const r=s?s():t.apply(n,o);return e.shift(),r};return o.push({computeAsync:e=>s(e)}),s()}});return n&&u(),u},dispose:e=>e.__disposed=!0}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlwZXJhY3Rpdi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbXB1dGVkU3RhY2sgPSBbXVxuY29uc3Qgb2JzZXJ2ZXJzTWFwID0gbmV3IFdlYWtNYXAoKVxuXG5jb25zdCBjb21wdXRlZCA9IGZ1bmN0aW9uKGZ1biwge8KgYXV0b1J1biA9IHRydWUgfSA9IHt9KSB7XG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoZnVuLCB7XG4gICAgICAgIGFwcGx5OiBmdW5jdGlvbih0YXJnZXQsIHRoaXNBcmcsIGFyZ3NMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCBwZXJmb3JtQ29tcHV0YXRpb24gPSAoZnVuID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVkU3RhY2sudW5zaGlmdChwcm94eSlcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmdW4gPyBmdW4oKSA6IHRhcmdldC5hcHBseSh0aGlzQXJnLCBhcmdzTGlzdClcbiAgICAgICAgICAgICAgICBjb21wdXRlZFN0YWNrLnNoaWZ0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFyZ3NMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGNvbXB1dGVBc3luYzogdGFyZ2V0ID0+IHBlcmZvcm1Db21wdXRhdGlvbih0YXJnZXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gcGVyZm9ybUNvbXB1dGF0aW9uKClcbiAgICAgICAgfVxuICAgIH0pXG4gICAgaWYoYXV0b1J1bikgeyBwcm94eSgpIH1cbiAgICByZXR1cm4gcHJveHlcbn1cblxuY29uc3QgZGlzcG9zZSA9IF8gPT4gXy5fX2Rpc3Bvc2VkID0gdHJ1ZVxuXG5jb25zdCBiYXRjaGVyID3CoHtcbiAgICB0aW1lb3V0OiBudWxsLFxuICAgIHF1ZXVlOiBuZXcgU2V0KCksXG4gICAgcHJvY2VzczogKCkgPT4ge1xuICAgICAgICBmb3IobGV0IHRhc2sgb2YgYmF0Y2hlci5xdWV1ZSlcbiAgICAgICAgICAgIHRhc2soKVxuICAgICAgICBiYXRjaGVyLnF1ZXVlLmNsZWFyKClcbiAgICAgICAgYmF0Y2hlci50aW1lb3V0ID0gbnVsbFxuICAgIH0sXG4gICAgZW5xdWV1ZTogdGFzayA9PiB7XG4gICAgICAgIGlmKGJhdGNoZXIudGltZW91dCA9PT0gbnVsbClcbiAgICAgICAgICAgIGJhdGNoZXIudGltZW91dCA9IHNldFRpbWVvdXQoYmF0Y2hlci5wcm9jZXNzLCAwKVxuICAgICAgICBiYXRjaGVyLnF1ZXVlLmFkZCh0YXNrKVxuICAgIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iaiwgeyBwcm9wcyA9IG51bGwsIGlnbm9yZSA9IG51bGwsIGJhdGNoID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgb2JzZXJ2ZXJzTWFwLnNldChvYmosIG5ldyBNYXApXG5cbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgICBnZXQoXywgcHJvcCkge1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXJNYXAgPSBvYnNlcnZlcnNNYXAuZ2V0KG9iailcblxuICAgICAgICAgICAgaWYoKHByb3BzICYmICFwcm9wcy5pbmNsdWRlcyhwcm9wKSkgfHwgKGlnbm9yZSAmJiBpZ25vcmUuaW5jbHVkZXMocHJvcCkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF1cblxuICAgICAgICAgICAgaWYoIW9ic2VydmVyTWFwLmhhcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyTWFwLnNldChwcm9wLCBuZXcgU2V0KCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNldCA9IG9ic2VydmVyTWFwLmdldChwcm9wKVxuICAgICAgICAgICAgaWYoY29tcHV0ZWRTdGFjay5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHNldC5hZGQoY29tcHV0ZWRTdGFja1swXSlcbiAgICAgICAgICAgIG9ic2VydmVyTWFwLnNldChwcm9wLCBzZXQpXG5cbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0KF8sIHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlck1hcCA9IG9ic2VydmVyc01hcC5nZXQob2JqKVxuXG4gICAgICAgICAgICBpZihvYmpbcHJvcF0gPT09IHZhbHVlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZVxuXG4gICAgICAgICAgICBpZigocHJvcHMgJiYgIXByb3BzLmluY2x1ZGVzKHByb3ApKSB8fCAoaWdub3JlICYmIGlnbm9yZS5pbmNsdWRlcyhwcm9wKSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcblxuICAgICAgICAgICAgaWYob2JzZXJ2ZXJNYXAuaGFzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwZW5kZW50cyA9IG9ic2VydmVyTWFwLmdldChwcm9wKVxuICAgICAgICAgICAgICAgIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVwZW5kZW50Ll9fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudHMuZGVsZXRlKGRlcGVuZGVudClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJhdGNoKSBiYXRjaGVyLmVucXVldWUoZGVwZW5kZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBkZXBlbmRlbnQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBvYnNlcnZlLFxuICAgIGNvbXB1dGVkLFxuICAgIGRpc3Bvc2Vcbn0iXSwibmFtZXMiOlsiY29tcHV0ZWRTdGFjayIsIm9ic2VydmVyc01hcCIsIldlYWtNYXAiLCJiYXRjaGVyIiwidGltZW91dCIsInF1ZXVlIiwiU2V0IiwicHJvY2VzcyIsInRhc2siLCJjbGVhciIsImVucXVldWUiLCJzZXRUaW1lb3V0IiwiYWRkIiwib2JzZXJ2ZSIsIm9iaiIsInByb3BzIiwiaWdub3JlIiwiYmF0Y2giLCJzZXQiLCJNYXAiLCJQcm94eSIsIltvYmplY3QgT2JqZWN0XSIsIl8iLCJwcm9wIiwib2JzZXJ2ZXJNYXAiLCJnZXQiLCJpbmNsdWRlcyIsImhhcyIsImxlbmd0aCIsInZhbHVlIiwiZGVwZW5kZW50cyIsImRlcGVuZGVudCIsIl9fZGlzcG9zZWQiLCJkZWxldGUiLCJjb21wdXRlZCIsImZ1biIsImF1dG9SdW4iLCJwcm94eSIsImFwcGx5IiwidGFyZ2V0IiwidGhpc0FyZyIsImFyZ3NMaXN0IiwicGVyZm9ybUNvbXB1dGF0aW9uIiwidW5zaGlmdCIsInJlc3VsdCIsInNoaWZ0IiwicHVzaCIsImNvbXB1dGVBc3luYyIsImRpc3Bvc2UiXSwibWFwcGluZ3MiOiJzTEFBQSxNQUFNQSxLQUNBQyxFQUFlLElBQUlDLFFBeUJuQkMsR0FDRkMsUUFBUyxLQUNUQyxNQUFPLElBQUlDLElBQ1hDLFFBQVMsS0FDTCxJQUFJLElBQUlDLEtBQVFMLEVBQVFFLE1BQ3BCRyxJQUNKTCxFQUFRRSxNQUFNSSxRQUNkTixFQUFRQyxRQUFVLE1BRXRCTSxRQUFTRixJQUNrQixPQUFwQkwsRUFBUUMsVUFDUEQsRUFBUUMsUUFBVU8sV0FBV1IsRUFBUUksUUFBUyxJQUNsREosRUFBUUUsTUFBTU8sSUFBSUosWUFxRHRCSyxRQWpEWSxTQUFTQyxHQUFLQyxNQUFFQSxFQUFRLEtBQUlDLE9BQUVBLEVBQVMsS0FBSUMsTUFBRUEsR0FBUSxPQUdqRSxPQUZBaEIsRUFBYWlCLElBQUlKLEVBQUssSUFBSUssS0FFbkIsSUFBSUMsTUFBTU4sR0FDYk8sSUFBSUMsRUFBR0MsR0FDSCxNQUFNQyxFQUFjdkIsRUFBYXdCLElBQUlYLEdBRXJDLEdBQUlDLElBQVVBLEVBQU1XLFNBQVNILElBQVdQLEdBQVVBLEVBQU9VLFNBQVNILEdBQzlELE9BQU9ULEVBQUlTLEdBRVhDLEVBQVlHLElBQUlKLElBQ2hCQyxFQUFZTixJQUFJSyxFQUFNLElBQUlqQixLQUc5QixNQUFNWSxFQUFNTSxFQUFZQyxJQUFJRixHQUs1QixPQUpHdkIsRUFBYzRCLE9BQVMsR0FDdEJWLEVBQUlOLElBQUlaLEVBQWMsSUFDMUJ3QixFQUFZTixJQUFJSyxFQUFNTCxHQUVmSixFQUFJUyxJQUVmRixJQUFJQyxFQUFHQyxFQUFNTSxHQUNULE1BQU1MLEVBQWN2QixFQUFhd0IsSUFBSVgsR0FFckMsR0FBR0EsRUFBSVMsS0FBVU0sRUFDYixPQUFPLEVBSVgsR0FGQWYsRUFBSVMsR0FBUU0sRUFFUmQsSUFBVUEsRUFBTVcsU0FBU0gsSUFBV1AsR0FBVUEsRUFBT1UsU0FBU0gsR0FDOUQsT0FBTyxFQUVYLEdBQUdDLEVBQVlHLElBQUlKLEdBQU8sQ0FDdEIsTUFBTU8sRUFBYU4sRUFBWUMsSUFBSUYsR0FDbkMsSUFBSSxJQUFJUSxLQUFhRCxFQUNkQyxFQUFVQyxXQUNURixFQUFXRyxPQUFPRixHQUVmZCxFQUFPZCxFQUFRTyxRQUFRcUIsR0FDckJBLElBSWpCLE9BQU8sTUFPZkcsU0F6RmEsU0FBU0MsR0FBS0MsUUFBRUEsR0FBVSxPQUN2QyxNQUFNQyxFQUFRLElBQUlqQixNQUFNZSxHQUNwQkcsTUFBTyxTQUFTQyxFQUFRQyxFQUFTQyxHQUM3QixNQUFNQyxFQUFxQixDQUFDUCxFQUFNLFFBQzlCbkMsRUFBYzJDLFFBQVFOLEdBQ3RCLE1BQU1PLEVBQVNULEVBQU1BLElBQVFJLEVBQU9ELE1BQU1FLEVBQVNDLEdBRW5ELE9BREF6QyxFQUFjNkMsUUFDUEQsR0FPWCxPQUpBSCxFQUFTSyxNQUNMQyxhQUFjUixHQUFVRyxFQUFtQkgsS0FHeENHLE9BSWYsT0FER04sR0FBV0MsSUFDUEEsR0F3RVBXLFFBckVZMUIsR0FBS0EsRUFBRVUsWUFBYSJ9