import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f,F as p,h as l,k as d,l as i,n as m,G as h}from"./chunks/vendor-fad870fa.js";function k(s){let r,a,d=s[1].stack+"";return{c(){r=t("pre"),a=e(d)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,d),t.forEach(u)},m(s,t){f(s,r,t),p(r,a)},p(s,r){2&r&&d!==(d=s[1].stack+"")&&l(a,d)},d(s){s&&u(r)}}}function v(s){let r,a,v,E,g,x,P,$=s[1].message+"",j=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),v=d(),E=t("p"),g=e($),x=d(),j&&j.c(),P=i()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),v=m(t),E=o(t,"P",{});var f=n(E);g=c(f,$),f.forEach(u),x=m(t),j&&j.l(t),P=i()},m(s,t){f(s,r,t),p(r,a),f(s,v,t),f(s,E,t),p(E,g),f(s,x,t),j&&j.m(s,t),f(s,P,t)},p(s,[r]){1&r&&l(a,s[0]),2&r&&$!==($=s[1].message+"")&&l(g,$),s[1].stack?j?j.p(s,r):(j=k(s),j.c(),j.m(P.parentNode,P)):j&&(j.d(1),j=null)},i:h,o:h,d(s){s&&u(r),s&&u(v),s&&u(E),s&&u(x),j&&j.d(s),s&&u(P)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,v,a,{status:0,error:1})}}export{E as load};
