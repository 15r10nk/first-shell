import{S as A,i as R,s as W,k as b,q as T,l as w,m as S,r as O,h as d,n as j,b as g,G as v,I as Q,u as X,B as ee,f as U,g as fe,d as he,t as K,J as ce,w as P,x as z,y as F,z as G,a as $,c as E,K as ue,L as te,M as _e,N as de,o as pe,O as me,P as ke,Q as ge}from"../../chunks/index-5da75fe0.js";function ye(i){let e,l=i[1].toUpperCase()+"",n,s,o;return{c(){e=b("button"),n=T(l),this.h()},l(r){e=w(r,"BUTTON",{class:!0});var c=S(e);n=O(c,l),c.forEach(d),this.h()},h(){j(e,"class","border rounded font-mono active:bg-green-500 px-3 h-8 m-1 bg-gray-200 drop-shadow-md border-gray-500")},m(r,c){g(r,e,c),v(e,n),s||(o=Q(e,"click",i[2]),s=!0)},p(r,[c]){c&2&&l!==(l=r[1].toUpperCase()+"")&&X(n,l)},i:ee,o:ee,d(r){r&&d(e),s=!1,o()}}}function ve(i,e,l){let{keyhandler:n=r=>{}}=e,{key:s=""}=e;const o=()=>n(s);return i.$$set=r=>{"keyhandler"in r&&l(0,n=r.keyhandler),"key"in r&&l(1,s=r.key)},[n,s,o]}class be extends A{constructor(e){super(),R(this,e,ve,ye,W,{keyhandler:0,key:1})}}function le(i,e,l){const n=i.slice();return n[2]=e[l],n}function ne(i){let e,l;return e=new be({props:{keyhandler:i[1],key:i[2]}}),{c(){P(e.$$.fragment)},l(n){z(e.$$.fragment,n)},m(n,s){F(e,n,s),l=!0},p(n,s){const o={};s&2&&(o.keyhandler=n[1]),s&1&&(o.key=n[2]),e.$set(o)},i(n){l||(U(e.$$.fragment,n),l=!0)},o(n){K(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function we(i){let e,l,n=i[0],s=[];for(let r=0;r<n.length;r+=1)s[r]=ne(le(i,n,r));const o=r=>K(s[r],1,1,()=>{s[r]=null});return{c(){e=b("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=w(r,"DIV",{class:!0});var c=S(e);for(let a=0;a<s.length;a+=1)s[a].l(c);c.forEach(d),this.h()},h(){j(e,"class","flex flex-row gap-2 mb-2")},m(r,c){g(r,e,c);for(let a=0;a<s.length;a+=1)s[a].m(e,null);l=!0},p(r,[c]){if(c&3){n=r[0];let a;for(a=0;a<n.length;a+=1){const _=le(r,n,a);s[a]?(s[a].p(_,c),U(s[a],1)):(s[a]=ne(_),s[a].c(),U(s[a],1),s[a].m(e,null))}for(fe(),a=n.length;a<s.length;a+=1)o(a);he()}},i(r){if(!l){for(let c=0;c<n.length;c+=1)U(s[c]);l=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)K(s[c]);l=!1},d(r){r&&d(e),ce(s,r)}}}function Se(i,e,l){let{keys:n}=e,{keyhandler:s=o=>{}}=e;return i.$$set=o=>{"keys"in o&&l(0,n=o.keys),"keyhandler"in o&&l(1,s=o.keyhandler)},[n,s]}class J extends A{constructor(e){super(),R(this,e,Se,we,W,{keys:0,keyhandler:1})}}const{window:$e}=me;function se(i,e,l){const n=i.slice();return n[7]=e[l],n}function oe(i,e,l){const n=i.slice();return n[10]=e[l],n[12]=l,n}function re(i){let e;return{c(){e=b("div"),this.h()},l(l){e=w(l,"DIV",{class:!0}),S(e).forEach(d),this.h()},h(){j(e,"class","border-2 border-green-500 px-[4px] animate-pulse inline")},m(l,n){g(l,e,n)},d(l){l&&d(e)}}}function ie(i,e){let l,n,s,o=e[10].toUpperCase()+"",r,c,a,_=e[12]==e[1].length-1&&re();return{key:i,first:null,c(){l=b("div"),n=b("div"),s=T("> "),r=T(o),c=$(),_&&_.c(),a=$(),this.h()},l(f){l=w(f,"DIV",{class:!0});var p=S(l);n=w(p,"DIV",{class:!0});var m=S(n);s=O(m,"> "),r=O(m,o),m.forEach(d),c=E(p),_&&_.l(p),a=E(p),p.forEach(d),this.h()},h(){j(n,"class","whitespace-pre-wrap inline"),j(l,"class",""),this.first=l},m(f,p){g(f,l,p),v(l,n),v(n,s),v(n,r),v(l,c),_&&_.m(l,null),v(l,a)},p(f,p){e=f,p&2&&o!==(o=e[10].toUpperCase()+"")&&X(r,o),e[12]==e[1].length-1?_||(_=re(),_.c(),_.m(l,a)):_&&(_.d(1),_=null)},d(f){f&&d(l),_&&_.d()}}}function ae(i){let e,l=i[7].name+"",n,s;return{c(){e=b("option"),n=T(l),this.h()},l(o){e=w(o,"OPTION",{});var r=S(e);n=O(r,l),r.forEach(d),this.h()},h(){e.__value=s=i[7],e.value=e.__value},m(o,r){g(o,e,r),v(e,n)},p(o,r){r&4&&l!==(l=o[7].name+"")&&X(n,l),r&4&&s!==(s=o[7])&&(e.__value=s,e.value=e.__value)},d(o){o&&d(e)}}}function Ee(i){let e,l,n,s,o=[],r=new Map,c,a,_,f,p,m,V,C,L,B,y,M,H,Y,N=i[1];const Z=t=>t[12];for(let t=0;t<N.length;t+=1){let h=oe(i,N,t),u=Z(h);r.set(u,o[t]=ie(u,h))}a=new J({props:{keys:[..."qwertzuiopü"],keyhandler:i[4]}}),f=new J({props:{keys:[..."asdfghjklöä"],keyhandler:i[4]}}),m=new J({props:{keys:[" ",..."yxcvbnm","Enter"],keyhandler:i[4]}});let D=i[2],k=[];for(let t=0;t<D.length;t+=1)k[t]=ae(se(i,D,t));return{c(){e=b("div"),l=b("h1"),n=T("First Shell"),s=$();for(let t=0;t<o.length;t+=1)o[t].c();c=$(),P(a.$$.fragment),_=$(),P(f.$$.fragment),p=$(),P(m.$$.fragment),V=$(),C=b("div"),L=T("voices:"),B=$(),y=b("select");for(let t=0;t<k.length;t+=1)k[t].c();this.h()},l(t){e=w(t,"DIV",{class:!0});var h=S(e);l=w(h,"H1",{});var u=S(l);n=O(u,"First Shell"),u.forEach(d),s=E(h);for(let I=0;I<o.length;I+=1)o[I].l(h);h.forEach(d),c=E(t),z(a.$$.fragment,t),_=E(t),z(f.$$.fragment,t),p=E(t),z(m.$$.fragment,t),V=E(t),C=w(t,"DIV",{});var q=S(C);L=O(q,"voices:"),q.forEach(d),B=E(t),y=w(t,"SELECT",{});var x=S(y);for(let I=0;I<k.length;I+=1)k[I].l(x);x.forEach(d),this.h()},h(){j(e,"class","bg-black text-green-500 font-mono text-xl"),i[0]===void 0&&ue(()=>i[5].call(y))},m(t,h){g(t,e,h),v(e,l),v(l,n),v(e,s);for(let u=0;u<o.length;u+=1)o[u].m(e,null);g(t,c,h),F(a,t,h),g(t,_,h),F(f,t,h),g(t,p,h),F(m,t,h),g(t,V,h),g(t,C,h),v(C,L),g(t,B,h),g(t,y,h);for(let u=0;u<k.length;u+=1)k[u].m(y,null);te(y,i[0]),M=!0,H||(Y=[Q($e,"keydown",i[3]),Q(y,"change",i[5])],H=!0)},p(t,[h]){if(h&2&&(N=t[1],o=_e(o,h,Z,1,t,N,r,e,ke,ie,null,oe)),h&4){D=t[2];let u;for(u=0;u<D.length;u+=1){const q=se(t,D,u);k[u]?k[u].p(q,h):(k[u]=ae(q),k[u].c(),k[u].m(y,null))}for(;u<k.length;u+=1)k[u].d(1);k.length=D.length}h&5&&te(y,t[0])},i(t){M||(U(a.$$.fragment,t),U(f.$$.fragment,t),U(m.$$.fragment,t),M=!0)},o(t){K(a.$$.fragment,t),K(f.$$.fragment,t),K(m.$$.fragment,t),M=!1},d(t){t&&d(e);for(let h=0;h<o.length;h+=1)o[h].d();t&&d(c),G(a,t),t&&d(_),G(f,t),t&&d(p),G(m,t),t&&d(V),t&&d(C),t&&d(B),t&&d(y),ce(k,t),H=!1,de(Y)}}}let Ie=1,Ue=1;function Ve(i,e,l){let n,s,o=["hallo   ronja123","hallo   ronja"];function r(f){console.log(f),c(f.key)}function c(f){if(f==" "){a(o.slice(-1)[0].split(/\s+/).slice(-1)[0]);let p=o.pop();l(1,o=[...o,p+f])}else if(f=="Enter")a(o.slice(-1)[0]),l(1,o=[...o,""]);else if(f.length==1){let p=o.pop();l(1,o=[...o,p+f]),a(f)}console.log(o)}pe(()=>{l(2,n=speechSynthesis.getVoices().filter(f=>f.name.includes("German"))),speechSynthesis.onvoiceschanged=()=>{console.log(speechSynthesis.getVoices())}});function a(f){console.log("say",f);const p=window.speechSynthesis;if(p.speaking&&p.cancel(),f!==""){const m=new SpeechSynthesisUtterance(f);m.onend=function(V){console.log("SpeechSynthesisUtterance.onend")},m.onerror=function(V){console.error("SpeechSynthesisUtterance.onerror")},m.voice=s,m.pitch=Ie,m.rate=Ue,p.speak(m)}}function _(){s=ge(this),l(0,s),l(2,n)}return l(2,n=[]),[s,o,n,r,c,_]}class De extends A{constructor(e){super(),R(this,e,Ve,Ee,W,{})}}export{De as default};
