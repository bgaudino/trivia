import{S as e,i as t,s as l,e as n,k as r,t as s,H as o,c as a,d as c,n as u,a as i,g as h,b as f,F as v,f as d,G as m,I as g,J as p,K as y,L as b,M as E,l as Q,h as k,N as _,O,P as T,Q as w}from"../chunks/vendor-fad870fa.js";const{document:H}=g;function N(e,t,l){const n=e.slice();return n[22]=t[l],n}function j(e,t,l){const n=e.slice();return n[12]=t[l],n}function x(e,t,l){const n=e.slice();return n[15]=t[l],n}function q(e,t,l){const n=e.slice();return n[18]=t[l],n}function C(e){let t,l,o,m,g,p,b,E,O,T,w,H,N,j=e[0].correct+"",x=e[0].problems+"",q=e[0].feedback+"",C={ctx:e,current:null,token:null,hasCatch:!1,pending:P,then:M,catch:L,value:21};y(E=e[0].questions,C);let I=e[0].nextQuestion&&S(e),D=e[0].gameOver&&V(e);return{c(){t=n("h2"),l=s("Score: "),o=s(j),m=s(" / "),g=s(x),p=r(),b=n("div"),C.block.c(),O=r(),T=n("h3"),w=r(),I&&I.c(),H=r(),D&&D.c(),N=Q(),this.h()},l(e){t=a(e,"H2",{});var n=i(t);l=h(n,"Score: "),o=h(n,j),m=h(n," / "),g=h(n,x),n.forEach(c),p=u(e),b=a(e,"DIV",{id:!0,class:!0});var r=i(b);C.block.l(r),r.forEach(c),O=u(e),T=a(e,"H3",{}),i(T).forEach(c),w=u(e),I&&I.l(e),H=u(e),D&&D.l(e),N=Q(),this.h()},h(){f(b,"id","game"),f(b,"class","svelte-1ju6hvo")},m(e,n){d(e,t,n),v(t,l),v(t,o),v(t,m),v(t,g),d(e,p,n),d(e,b,n),C.block.m(b,C.anchor=null),C.mount=()=>b,C.anchor=null,d(e,O,n),d(e,T,n),T.innerHTML=q,d(e,w,n),I&&I.m(e,n),d(e,H,n),D&&D.m(e,n),d(e,N,n)},p(t,l){e=t,1&l&&j!==(j=e[0].correct+"")&&k(o,j),1&l&&x!==(x=e[0].problems+"")&&k(g,x),C.ctx=e,1&l&&E!==(E=e[0].questions)&&y(E,C)||_(C,e,l),1&l&&q!==(q=e[0].feedback+"")&&(T.innerHTML=q),e[0].nextQuestion?I?I.p(e,l):(I=S(e),I.c(),I.m(H.parentNode,H)):I&&(I.d(1),I=null),e[0].gameOver?D?D.p(e,l):(D=V(e),D.c(),D.m(N.parentNode,N)):D&&(D.d(1),D=null)},d(e){e&&c(t),e&&c(p),e&&c(b),C.block.d(),C.token=null,C=null,e&&c(O),e&&c(T),e&&c(w),I&&I.d(e),e&&c(H),D&&D.d(e),e&&c(N)}}}function I(e){let t,l,o,m,g,p,y,Q,k,_,H,N,C,I,L,M,D,P,S,V,A,B,$=e[1].categories,U=[];for(let n=0;n<$.length;n+=1)U[n]=G(q(e,$,n));let R=e[1].difficulty,F=[];for(let n=0;n<R.length;n+=1)F[n]=W(x(e,R,n));let J=e[1].nums,z=[];for(let n=0;n<J.length;n+=1)z[n]=K(j(e,J,n));return{c(){t=n("div"),l=s("Options"),o=r(),m=n("div"),g=s("Category"),p=r(),y=n("select");for(let e=0;e<U.length;e+=1)U[e].c();Q=r(),k=n("div"),_=s("Difficulty"),H=r(),N=n("select");for(let e=0;e<F.length;e+=1)F[e].c();C=r(),I=n("div"),L=s("Questions"),M=r(),D=n("select");for(let e=0;e<z.length;e+=1)z[e].c();P=r(),S=n("button"),V=s("Play"),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=i(t);l=h(n,"Options"),n.forEach(c),o=u(e),m=a(e,"DIV",{class:!0});var r=i(m);g=h(r,"Category"),r.forEach(c),p=u(e),y=a(e,"SELECT",{class:!0});var s=i(y);for(let t=0;t<U.length;t+=1)U[t].l(s);s.forEach(c),Q=u(e),k=a(e,"DIV",{class:!0});var f=i(k);_=h(f,"Difficulty"),f.forEach(c),H=u(e),N=a(e,"SELECT",{class:!0});var v=i(N);for(let t=0;t<F.length;t+=1)F[t].l(v);v.forEach(c),C=u(e),I=a(e,"DIV",{class:!0});var d=i(I);L=h(d,"Questions"),d.forEach(c),M=u(e),D=a(e,"SELECT",{class:!0});var b=i(D);for(let t=0;t<z.length;t+=1)z[t].l(b);b.forEach(c),P=u(e),S=a(e,"BUTTON",{id:!0,class:!0});var E=i(S);V=h(E,"Play"),E.forEach(c),this.h()},h(){f(t,"class","label svelte-1ju6hvo"),f(m,"class","label svelte-1ju6hvo"),f(y,"class","svelte-1ju6hvo"),void 0===e[0].category&&O((()=>e[8].call(y))),f(k,"class","label svelte-1ju6hvo"),f(N,"class","svelte-1ju6hvo"),void 0===e[0].difficulty&&O((()=>e[9].call(N))),f(I,"class","label svelte-1ju6hvo"),f(D,"class","svelte-1ju6hvo"),void 0===e[1].numQuestions&&O((()=>e[10].call(D))),f(S,"id","play"),f(S,"class","svelte-1ju6hvo")},m(n,r){d(n,t,r),v(t,l),d(n,o,r),d(n,m,r),v(m,g),d(n,p,r),d(n,y,r);for(let e=0;e<U.length;e+=1)U[e].m(y,null);T(y,e[0].category),d(n,Q,r),d(n,k,r),v(k,_),d(n,H,r),d(n,N,r);for(let e=0;e<F.length;e+=1)F[e].m(N,null);T(N,e[0].difficulty),d(n,C,r),d(n,I,r),v(I,L),d(n,M,r),d(n,D,r);for(let e=0;e<z.length;e+=1)z[e].m(D,null);T(D,e[1].numQuestions),d(n,P,r),d(n,S,r),v(S,V),A||(B=[b(y,"change",e[8]),b(N,"change",e[9]),b(D,"change",e[10]),b(S,"click",e[7])],A=!0)},p(e,t){if(2&t){let l;for($=e[1].categories,l=0;l<$.length;l+=1){const n=q(e,$,l);U[l]?U[l].p(n,t):(U[l]=G(n),U[l].c(),U[l].m(y,null))}for(;l<U.length;l+=1)U[l].d(1);U.length=$.length}if(3&t&&T(y,e[0].category),2&t){let l;for(R=e[1].difficulty,l=0;l<R.length;l+=1){const n=x(e,R,l);F[l]?F[l].p(n,t):(F[l]=W(n),F[l].c(),F[l].m(N,null))}for(;l<F.length;l+=1)F[l].d(1);F.length=R.length}if(3&t&&T(N,e[0].difficulty),2&t){let l;for(J=e[1].nums,l=0;l<J.length;l+=1){const n=j(e,J,l);z[l]?z[l].p(n,t):(z[l]=K(n),z[l].c(),z[l].m(D,null))}for(;l<z.length;l+=1)z[l].d(1);z.length=J.length}2&t&&T(D,e[1].numQuestions)},d(e){e&&c(t),e&&c(o),e&&c(m),e&&c(p),e&&c(y),w(U,e),e&&c(Q),e&&c(k),e&&c(H),e&&c(N),w(F,e),e&&c(C),e&&c(I),e&&c(M),e&&c(D),w(z,e),e&&c(P),e&&c(S),A=!1,E(B)}}}function L(e){return{c:m,l:m,m:m,p:m,d:m}}function M(e){let t,l,s,o=e[21][e[0].currentQuestion].question+"",h=e[21][e[0].currentQuestion].answers,f=[];for(let n=0;n<h.length;n+=1)f[n]=D(N(e,h,n));return{c(){t=n("h3"),l=r();for(let e=0;e<f.length;e+=1)f[e].c();s=Q()},l(e){t=a(e,"H3",{}),i(t).forEach(c),l=u(e);for(let t=0;t<f.length;t+=1)f[t].l(e);s=Q()},m(e,n){d(e,t,n),t.innerHTML=o,d(e,l,n);for(let t=0;t<f.length;t+=1)f[t].m(e,n);d(e,s,n)},p(e,l){if(1&l&&o!==(o=e[21][e[0].currentQuestion].question+"")&&(t.innerHTML=o),9&l){let t;for(h=e[21][e[0].currentQuestion].answers,t=0;t<h.length;t+=1){const n=N(e,h,t);f[t]?f[t].p(n,l):(f[t]=D(n),f[t].c(),f[t].m(s.parentNode,s))}for(;t<f.length;t+=1)f[t].d(1);f.length=h.length}},d(e){e&&c(t),e&&c(l),w(f,e),e&&c(s)}}}function D(e){let t,l,s,o,h,m,g,p=e[22]+"";return{c(){t=n("div"),l=n("button"),h=r(),this.h()},l(e){t=a(e,"DIV",{});var n=i(t);l=a(n,"BUTTON",{disabled:!0,class:!0,value:!0}),i(l).forEach(c),h=u(n),n.forEach(c),this.h()},h(){l.disabled=s=e[0].readonly,f(l,"class","answer svelte-1ju6hvo"),l.value=o=e[22]},m(n,r){d(n,t,r),v(t,l),l.innerHTML=p,v(t,h),m||(g=b(l,"click",e[3]),m=!0)},p(e,t){1&t&&p!==(p=e[22]+"")&&(l.innerHTML=p),3&t&&s!==(s=e[0].readonly)&&(l.disabled=s),3&t&&o!==(o=e[22])&&(l.value=o)},d(e){e&&c(t),m=!1,g()}}}function P(e){return{c:m,l:m,m:m,p:m,d:m}}function S(e){let t,l,r,o;return{c(){t=n("button"),l=s("Next Question"),this.h()},l(e){t=a(e,"BUTTON",{class:!0});var n=i(t);l=h(n,"Next Question"),n.forEach(c),this.h()},h(){f(t,"class","svelte-1ju6hvo")},m(n,s){d(n,t,s),v(t,l),r||(o=b(t,"click",e[4]),r=!0)},p:m,d(e){e&&c(t),r=!1,o()}}}function V(e){let t,l,o,m,g,p,y,Q,k,_,O;function T(e,t){return e[2]>=80?U:e[2]>=60?$:e[2]>=40?B:A}let w=T(e),H=w(e);return{c(){t=n("h1"),l=s("Game Over"),o=r(),H.c(),m=r(),g=n("button"),p=s("Play again"),y=r(),Q=n("button"),k=s("Options"),this.h()},l(e){t=a(e,"H1",{});var n=i(t);l=h(n,"Game Over"),n.forEach(c),o=u(e),H.l(e),m=u(e),g=a(e,"BUTTON",{class:!0});var r=i(g);p=h(r,"Play again"),r.forEach(c),y=u(e),Q=a(e,"BUTTON",{class:!0});var s=i(Q);k=h(s,"Options"),s.forEach(c),this.h()},h(){f(g,"class","svelte-1ju6hvo"),f(Q,"class","svelte-1ju6hvo")},m(n,r){d(n,t,r),v(t,l),d(n,o,r),H.m(n,r),d(n,m,r),d(n,g,r),v(g,p),d(n,y,r),d(n,Q,r),v(Q,k),_||(O=[b(g,"click",e[5]),b(Q,"click",e[6])],_=!0)},p(e,t){w!==(w=T(e))&&(H.d(1),H=w(e),H&&(H.c(),H.m(m.parentNode,m)))},d(e){e&&c(t),e&&c(o),H.d(e),e&&c(m),e&&c(g),e&&c(y),e&&c(Q),_=!1,E(O)}}}function A(e){let t,l;return{c(){t=n("h2"),l=s("Wow, how are you still alive?")},l(e){t=a(e,"H2",{});var n=i(t);l=h(n,"Wow, how are you still alive?"),n.forEach(c)},m(e,n){d(e,t,n),v(t,l)},d(e){e&&c(t)}}}function B(e){let t,l;return{c(){t=n("h2"),l=s("At least you're pretty!")},l(e){t=a(e,"H2",{});var n=i(t);l=h(n,"At least you're pretty!"),n.forEach(c)},m(e,n){d(e,t,n),v(t,l)},d(e){e&&c(t)}}}function $(e){let t,l;return{c(){t=n("h2"),l=s("Better study more for next time!")},l(e){t=a(e,"H2",{});var n=i(t);l=h(n,"Better study more for next time!"),n.forEach(c)},m(e,n){d(e,t,n),v(t,l)},d(e){e&&c(t)}}}function U(e){let t,l;return{c(){t=n("h2"),l=s("Wow, you're smart!")},l(e){t=a(e,"H2",{});var n=i(t);l=h(n,"Wow, you're smart!"),n.forEach(c)},m(e,n){d(e,t,n),v(t,l)},d(e){e&&c(t)}}}function G(e){let t,l,r,o=e[18].name+"";return{c(){t=n("option"),l=s(o),this.h()},l(e){t=a(e,"OPTION",{value:!0});var n=i(t);l=h(n,o),n.forEach(c),this.h()},h(){t.__value=r=e[18].value,t.value=t.__value},m(e,n){d(e,t,n),v(t,l)},p(e,n){2&n&&o!==(o=e[18].name+"")&&k(l,o),2&n&&r!==(r=e[18].value)&&(t.__value=r,t.value=t.__value)},d(e){e&&c(t)}}}function W(e){let t,l,r,o=e[15].charAt(0).toUpperCase()+e[15].slice(1)+"";return{c(){t=n("option"),l=s(o),this.h()},l(e){t=a(e,"OPTION",{value:!0});var n=i(t);l=h(n,o),n.forEach(c),this.h()},h(){t.__value=r=e[15],t.value=t.__value},m(e,n){d(e,t,n),v(t,l)},p(e,n){2&n&&o!==(o=e[15].charAt(0).toUpperCase()+e[15].slice(1)+"")&&k(l,o),2&n&&r!==(r=e[15])&&(t.__value=r,t.value=t.__value)},d(e){e&&c(t)}}}function K(e){let t,l,r,o=e[12]+"";return{c(){t=n("option"),l=s(o),this.h()},l(e){t=a(e,"OPTION",{value:!0});var n=i(t);l=h(n,o),n.forEach(c),this.h()},h(){t.__value=r=e[12],t.value=t.__value},m(e,n){d(e,t,n),v(t,l)},p(e,n){2&n&&o!==(o=e[12]+"")&&k(l,o),2&n&&r!==(r=e[12])&&(t.__value=r,t.value=t.__value)},d(e){e&&c(t)}}}function R(e){let t,l,g,p,y,b,E;function Q(e,t){return e[0].started?C:I}let k=Q(e),_=k(e);return{c(){t=n("link"),l=n("link"),g=r(),p=n("div"),y=n("h1"),b=s("Trivia"),E=r(),_.c(),this.h()},l(e){const n=o('[data-svelte="svelte-1w6vmvc"]',H.head);t=a(n,"LINK",{rel:!0,href:!0}),l=a(n,"LINK",{href:!0,rel:!0}),n.forEach(c),g=u(e),p=a(e,"DIV",{id:!0,class:!0});var r=i(p);y=a(r,"H1",{});var s=i(y);b=h(s,"Trivia"),s.forEach(c),E=u(r),_.l(r),r.forEach(c),this.h()},h(){f(t,"rel","preconnect"),f(t,"href","https://fonts.gstatic.com"),f(l,"href","https://fonts.googleapis.com/css2?family=Lexend&family=RocknRoll+One&display=swap"),f(l,"rel","stylesheet"),f(p,"id","main"),f(p,"class","svelte-1ju6hvo")},m(e,n){v(H.head,t),v(H.head,l),d(e,g,n),d(e,p,n),v(p,y),v(y,b),v(p,E),_.m(p,null)},p(e,[t]){k===(k=Q(e))&&_?_.p(e,t):(_.d(1),_=k(e),_&&(_.c(),_.m(p,null)))},i:m,o:m,d(e){c(t),c(l),e&&c(g),e&&c(p),_.d()}}}function F(e,t,l){let n;const r={categories:[{name:"Books",value:10},{name:"Movies",value:11},{name:"Music",value:12},{name:"TV",value:14},{name:"Video Games",value:15},{name:"Computers",value:18},{name:"Sports",value:21},{name:"History",value:23},{name:"Politics",value:24},{name:"Art",value:25},{name:"Animals",value:27}],difficulty:["easy","medium","hard"],numQuestions:10,nums:[]};for(let a=1;a<=20;a++)r.nums.push(a);const s={category:10,answer:null,difficulty:"easy",correct:0,problems:0,feedback:"",nextQuestion:!1,questions:[],currentQuestion:0,nextQuestion:!1,readonly:!1,gameOver:!1,started:!1};async function o(){const e=`https://opentdb.com/api.php?amount=${r.numQuestions}&category=${s.category}&difficulty=${s.difficulty}`,t=await fetch(e),n=await t.json();if(n.results,n.results.forEach((e=>{e.answers=[...e.incorrect_answers,e.correct_answer],function(e){for(let t=e.length-1;t>0;t--){const l=Math.floor(Math.random()*(t+1));[e[t],e[l]]=[e[l],e[t]]}}(e.answers)})),l(0,s.feedback="",s),l(0,s.nextQuestion=!1,s),l(0,s.currentQuestion=0,s),l(0,s.questions=n.results,s),n.results.length)return console.log(n.results),s.questions;l(1,r.numQuestions--,r),l(0,s.questions=o(),s)}return e.$$.update=()=>{1&e.$$.dirty&&l(2,n=Math.round(s.correct/s.problems*100))},[s,r,n,function(e){const t=e.target,n=s.questions[s.currentQuestion].correct_answer;if(t.style.color="white",n===t.value?(t.style.backgroundColor="green",l(0,s.feedback="Correct!",s),l(0,s.correct++,s)):(t.style.backgroundColor="red",l(0,s.feedback=`Oops! The correct answer was ${n}`,s)),document.querySelectorAll("button").forEach((e=>{e.value===n&&(e.style.color="white",e.style.backgroundColor="green")})),l(0,s.readonly=!0,s),l(0,s.problems++,s),s.currentQuestion===s.questions.length-1)return l(0,s.gameOver=!0,s),!1;l(0,s.nextQuestion=!0,s)},function(){l(0,s.currentQuestion=s.currentQuestion+1,s),l(0,s.nextQuestion=!1,s),l(0,s.feedback="",s),l(0,s.readonly=!1,s),document.querySelectorAll("button").forEach((e=>{e.style.backgroundColor="#f5f6f7",e.style.color="#0a0a23"}))},function(){l(0,s.readonly=!1,s),l(0,s.gameOver=!1,s),l(0,s.questions=o(),s),l(0,s.problems=0,s),l(0,s.correct=0,s)},function(){l(0,s.started=!1,s),l(0,s.readonly=!1,s),l(0,s.problems=0,s),l(0,s.correct=0,s),l(0,s.gameOver=!1,s)},function(){l(0,s.questions=o(),s),l(0,s.started=!0,s)},function(){s.category=p(this),l(0,s),l(1,r)},function(){s.difficulty=p(this),l(0,s),l(1,r)},function(){r.numQuestions=p(this),l(1,r)}]}export default class extends e{constructor(e){super(),t(this,e,F,R,l,{})}}
