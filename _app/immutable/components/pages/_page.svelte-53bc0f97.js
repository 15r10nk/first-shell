import{S as te,i as ne,s as le,k as _,q as Q,l as m,m as k,r as J,h as g,n as b,b as H,F as h,L as se,u as ye,B as ie,e as ce,f as I,g as pe,d as _e,t as j,M as me,w as K,x as M,y as N,z,a as V,c as D,N as ke,o as ve,O as we,P as be,A as $e,Q as Ee}from"../../chunks/index-be69c97d.js";function Se(i){let e,t=i[1].display.toUpperCase()+"",l,n,o;return{c(){e=_("button"),l=Q(t),this.h()},l(s){e=m(s,"BUTTON",{class:!0});var a=k(e);l=J(a,t),a.forEach(g),this.h()},h(){b(e,"class","text-[4vh] border h-[7vw] w-[7vw] rounded font-mono active:bg-green-500 m-1 drop-shadow-md border-green-500")},m(s,a){H(s,e,a),h(e,l),n||(o=se(e,"click",i[3]),n=!0)},p(s,[a]){a&2&&t!==(t=s[1].display.toUpperCase()+"")&&ye(l,t)},i:ie,o:ie,d(s){s&&g(e),n=!1,o()}}}function Ve(i,e,t){let l,{keyhandler:n=a=>{}}=e,{key:o=""}=e;const s=()=>n(l.key);return i.$$set=a=>{"keyhandler"in a&&t(0,n=a.keyhandler),"key"in a&&t(2,o=a.key)},i.$$.update=()=>{i.$$.dirty&4&&t(1,l=typeof o=="string"?{key:o,display:o}:o)},[n,l,o,s]}class De extends te{constructor(e){super(),ne(this,e,Ve,Se,le,{keyhandler:0,key:2})}}function fe(i,e,t){const l=i.slice();return l[2]=e[t],l}function he(i){let e,t;return e=new De({props:{keyhandler:i[1],key:i[2]}}),{c(){K(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,n){N(e,l,n),t=!0},p(l,n){const o={};n&2&&(o.keyhandler=l[1]),n&1&&(o.key=l[2]),e.$set(o)},i(l){t||(I(e.$$.fragment,l),t=!0)},o(l){j(e.$$.fragment,l),t=!1},d(l){z(e,l)}}}function Ie(i){let e,t,l=i[0],n=[];for(let s=0;s<l.length;s+=1)n[s]=he(fe(i,l,s));const o=s=>j(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=ce()},l(s){for(let a=0;a<n.length;a+=1)n[a].l(s);e=ce()},m(s,a){for(let c=0;c<n.length;c+=1)n[c].m(s,a);H(s,e,a),t=!0},p(s,[a]){if(a&3){l=s[0];let c;for(c=0;c<l.length;c+=1){const u=fe(s,l,c);n[c]?(n[c].p(u,a),I(n[c],1)):(n[c]=he(u),n[c].c(),I(n[c],1),n[c].m(e.parentNode,e))}for(pe(),c=l.length;c<n.length;c+=1)o(c);_e()}},i(s){if(!t){for(let a=0;a<l.length;a+=1)I(n[a]);t=!0}},o(s){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)j(n[a]);t=!1},d(s){me(n,s),s&&g(e)}}}function xe(i,e,t){let{keys:l}=e,{keyhandler:n=o=>{}}=e;return i.$$set=o=>{"keys"in o&&t(0,l=o.keys),"keyhandler"in o&&t(1,n=o.keyhandler)},[l,n]}class L extends te{constructor(e){super(),ne(this,e,xe,Ie,le,{keys:0,keyhandler:1})}}const{window:Ue}=we;function de(i,e,t){const l=i.slice();return l[9]=e[t],l[11]=t,l}function ue(i){let e;return{c(){e=_("div"),this.h()},l(t){e=m(t,"DIV",{class:!0}),k(e).forEach(g),this.h()},h(){b(e,"class","border-2 border-green-500 px-[4px] animate-pulse inline")},m(t,l){H(t,e,l)},d(t){t&&g(e)}}}function ge(i,e){let t,l,n,o=e[9].toUpperCase()+"",s,a,c,u,v,r=e[11]==e[0].length-1&&ue();function w(){return e[5](e[9])}return{key:i,first:null,c(){t=_("div"),l=_("div"),n=Q("> "),s=Q(o),a=V(),r&&r.c(),c=V(),this.h()},l(d){t=m(d,"DIV",{class:!0});var p=k(t);l=m(p,"DIV",{class:!0});var $=k(l);n=J($,"> "),s=J($,o),$.forEach(g),a=D(p),r&&r.l(p),c=D(p),p.forEach(g),this.h()},h(){b(l,"class","whitespace-pre-wrap inline"),b(t,"class",""),this.first=t},m(d,p){H(d,t,p),h(t,l),h(l,n),h(l,s),h(t,a),r&&r.m(t,null),h(t,c),u||(v=se(t,"click",w),u=!0)},p(d,p){e=d,p&1&&o!==(o=e[9].toUpperCase()+"")&&ye(s,o),e[11]==e[0].length-1?r||(r=ue(),r.c(),r.m(t,c)):r&&(r.d(1),r=null)},d(d){d&&g(t),r&&r.d(),u=!1,v()}}}function Ce(i){let e,t,l,n,o,s=[],a=new Map,c,u,v,r,w,d,p,$,B,R,x,W,S,U,X,F,Y,C,O,Z,re,P=i[0];const ae=f=>f[11];for(let f=0;f<P.length;f+=1){let y=de(i,P,f),E=ae(y);a.set(E,s[f]=ge(E,y))}return r=new L({props:{keys:[..."qwertzuiopü"],keyhandler:i[3]}}),x=new L({props:{keys:[..."asdfghjklöä"],keyhandler:i[3]}}),U=new L({props:{keys:[..."yxcvbnm"],keyhandler:i[3]}}),C=new L({props:{keys:[" ",{key:"Enter",display:"⏎"}],keyhandler:i[3]}}),{c(){e=_("div"),t=_("div"),l=_("h1"),n=Q("First Shell"),o=V();for(let f=0;f<s.length;f+=1)s[f].c();c=V(),u=_("div"),v=_("div"),K(r.$$.fragment),w=V(),d=_("div"),p=V(),$=_("div"),B=_("div"),R=V(),K(x.$$.fragment),W=V(),S=_("div"),K(U.$$.fragment),X=V(),F=_("div"),Y=V(),K(C.$$.fragment),this.h()},l(f){e=m(f,"DIV",{class:!0});var y=k(e);t=m(y,"DIV",{class:!0});var E=k(t);l=m(E,"H1",{});var oe=k(l);n=J(oe,"First Shell"),oe.forEach(g),o=D(E);for(let ee=0;ee<s.length;ee+=1)s[ee].l(E);E.forEach(g),c=D(y),u=m(y,"DIV",{class:!0});var T=k(u);v=m(T,"DIV",{class:!0});var A=k(v);M(r.$$.fragment,A),w=D(A),d=m(A,"DIV",{class:!0}),k(d).forEach(g),A.forEach(g),p=D(T),$=m(T,"DIV",{class:!0});var G=k($);B=m(G,"DIV",{class:!0}),k(B).forEach(g),R=D(G),M(x.$$.fragment,G),G.forEach(g),W=D(T),S=m(T,"DIV",{class:!0});var q=k(S);M(U.$$.fragment,q),X=D(q),F=m(q,"DIV",{class:!0}),k(F).forEach(g),Y=D(q),M(C.$$.fragment,q),q.forEach(g),T.forEach(g),y.forEach(g),this.h()},h(){b(t,"class","grow text-2xl overflow-y-auto pb-2"),b(d,"class","w-[2vw]"),b(v,"class","flex flex-row gap-2 mb-2 justify-center"),b(B,"class","w-[2vw]"),b($,"class","flex flex-row gap-2 mb-2 justify-center"),b(F,"class","w-[8vw]"),b(S,"class","flex flex-row gap-2 mb-2 justify-center"),b(u,"class","flex flex-col border-t-2 border-green-500 py-5"),b(e,"class","bg-black text-green-500 font-mono text-xl h-screen flex flex-col")},m(f,y){H(f,e,y),h(e,t),h(t,l),h(l,n),h(t,o);for(let E=0;E<s.length;E+=1)s[E].m(t,null);i[6](t),h(e,c),h(e,u),h(u,v),N(r,v,null),h(v,w),h(v,d),h(u,p),h(u,$),h($,B),h($,R),N(x,$,null),h(u,W),h(u,S),N(U,S,null),h(S,X),h(S,F),h(S,Y),N(C,S,null),O=!0,Z||(re=se(Ue,"keydown",i[2]),Z=!0)},p(f,[y]){y&17&&(P=f[0],s=ke(s,y,ae,1,f,P,a,t,be,ge,null,de))},i(f){O||(I(r.$$.fragment,f),I(x.$$.fragment,f),I(U.$$.fragment,f),I(C.$$.fragment,f),O=!0)},o(f){j(r.$$.fragment,f),j(x.$$.fragment,f),j(U.$$.fragment,f),j(C.$$.fragment,f),O=!1},d(f){f&&g(e);for(let y=0;y<s.length;y+=1)s[y].d();i[6](null),z(r),z(x),z(U),z(C),Z=!1,re()}}}let je=1,Te=1;function qe(i,e,t){let l,n=["hallo"],o;function s(r){console.log(r),a(r.key)}async function a(r){if(r==" "){c(n.slice(-1)[0].split(/\s+/).slice(-1)[0]);let w=n.pop();t(0,n=[...n,w+r])}else if(r=="Enter")c(n.slice(-1)[0]),t(0,n=[...n,""]);else if(r.length==1){let w=n.pop();t(0,n=[...n,w+r]),c(r)}console.log(n),await $e(),o.scrollTo(0,o.scrollHeight)}ve(()=>{speechSynthesis.getVoices().filter(r=>r.name.includes("German")),speechSynthesis.onvoiceschanged=()=>{console.log(speechSynthesis.getVoices())}});function c(r){console.log("say",r);const w=window.speechSynthesis;if(w.speaking&&w.cancel(),r!==""){const d=new SpeechSynthesisUtterance(r);d.onend=function(p){console.log("SpeechSynthesisUtterance.onend")},d.onerror=function(p){console.error("SpeechSynthesisUtterance.onerror")},d.voice=l,d.pitch=je,d.rate=Te,w.speak(d)}}const u=r=>c(r);function v(r){Ee[r?"unshift":"push"](()=>{o=r,t(1,o)})}return[n,o,s,a,c,u,v]}class Fe extends te{constructor(e){super(),ne(this,e,qe,Ce,le,{})}}export{Fe as default};
