function A(){}function Y(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function F(){return Object.create(null)}function v(t){t.forEach(G)}function J(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t,e,n){t.$$.on_destroy.push(tt(e,n))}function gt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?Y(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function bt(t,e,n,i,r,u){if(r){const c=K(e,n,i,u);t.p(c,r)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let M=!1;function et(){M=!0}function nt(){M=!1}function it(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const s=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=s?r+1:it(1,r,d=>e[n[d]].claim_order,s))-1;i[l]=n[a]+1;const _=a+1;n[_]=l,r=Math.max(_,r)}const u=[],c=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(u.push(e[l-1]);o>=l;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<u.length&&c[l].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(c[l],a)}}function ct(t,e){if(M){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){M&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function Et(){return q(" ")}function Nt(){return q("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,r=!1){ut(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const l=n(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ft(t,e,n,i){return W(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function At(t,e,n){return ft(t,e,n,st)}function at(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Mt(t){return at(t," ")}function jt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Tt(t,e){return new t(e)}let $;function w(t){$=t}function Q(){if(!$)throw new Error("Function called outside component initialization");return $}function Bt(t){Q().$$.on_mount.push(t)}function Lt(t){Q().$$.after_update.push(t)}const b=[],H=[],S=[],I=[],R=Promise.resolve();let O=!1;function U(){O||(O=!0,R.then(V))}function Ot(){return U(),R}function P(t){S.push(t)}const L=new Set;let x=0;function V(){if(x!==0)return;const t=$;do{try{for(;x<b.length;){const e=b[x];x++,w(e),dt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(w(null),b.length=0,x=0;H.length;)H.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];L.has(n)||(L.add(n),n())}S.length=0}while(b.length);for(;I.length;)I.pop()();O=!1,L.clear(),w(t)}function dt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const k=new Set;let g;function Pt(){g={r:0,c:[],p:g}}function qt(){g.r||v(g.c),g=g.p}function X(t,e){t&&t.i&&(k.delete(t),t.i(e))}function zt(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),g.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Dt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ft(t,e){t.d(1),e.delete(t.key)}function Ht(t,e,n,i,r,u,c,o,l,s,a,_){let d=t.length,m=u.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const E=[],C=new Map,T=new Map;for(h=m;h--;){const f=_(r,u,h),p=n(f);let y=c.get(p);y?i&&y.p(f,e):(y=s(p,f),y.c()),C.set(p,E[h]=y),p in j&&T.set(p,Math.abs(h-j[p]))}const z=new Set,D=new Set;function B(f){X(f,1),f.m(o,a),c.set(f.key,f),a=f.first,m--}for(;d&&m;){const f=E[m-1],p=t[d-1],y=f.key,N=p.key;f===p?(a=f.first,d--,m--):C.has(N)?!c.has(y)||z.has(y)?B(f):D.has(N)?d--:T.get(y)>T.get(N)?(D.add(y),B(f)):(z.add(N),d--):(l(p,c),d--)}for(;d--;){const f=t[d];C.has(f.key)||l(f,c)}for(;m;)B(E[m-1]);return E}function It(t){t&&t.c()}function Gt(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||P(()=>{const c=t.$$.on_mount.map(G).filter(J);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),u.forEach(P)}function ht(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(b.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,i,r,u,c,o=[-1]){const l=$;w(t);const s=t.$$={fragment:null,ctx:[],props:u,update:A,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:F(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return s.ctx&&r(s.ctx[_],s.ctx[_]=h)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](h),a&&mt(t,_)),d}):[],s.update(),a=!0,v(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){et();const _=ot(e.target);s.fragment&&s.fragment.l(_),_.forEach(lt)}else s.fragment&&s.fragment.c();e.intro&&X(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),nt(),V()}w(l)}class Kt{$destroy(){ht(this,1),this.$destroy=A}$on(e,n){if(!J(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ot as A,A as B,gt as C,bt as D,wt as E,xt as F,ct as G,yt as H,St as I,vt as J,Ht as K,Dt as L,Ft as M,Kt as S,Et as a,$t as b,Mt as c,qt as d,Nt as e,X as f,Pt as g,lt as h,Jt as i,Lt as j,st as k,At as l,ot as m,kt as n,Bt as o,Ct as p,q,at as r,pt as s,zt as t,jt as u,Tt as v,It as w,Gt as x,_t as y,ht as z};