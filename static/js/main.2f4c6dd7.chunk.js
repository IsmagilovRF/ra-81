(this["webpackJsonphw81-use_effect"]=this["webpackJsonphw81-use_effect"]||[]).push([[0],{21:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(16),i=c.n(s),r=(c(21),c(3)),o=c(5),u=c.n(o),d=c(6),l=c.n(d),j=c(0),h=function(e){var t=e.handleProfile,c=Object(n.useState)([]),a=Object(r.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)([]),d=Object(r.a)(o,2),h=d[0],b=d[1];Object(n.useEffect)((function(){u.a.get("".concat("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/","users.json")).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(j.jsx)("div",{className:"ui basic",children:Object(j.jsx)("div",{className:"ui vertical menu button primary",children:s.map((function(e){var c=e.id,n=e.name;return Object(j.jsx)("div",{className:"link red item ".concat(c===h?"active":""),onClick:function(){return function(e,c){b(e),t(e,c)}(c,n)},children:Object(j.jsx)("div",{className:"header",children:n})},l.a.generate())}))})})},b=function(e){var t=e.info,c=Object(n.useState)(null),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){t.id&&u.a.get("".concat("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/").concat(t.id,".json")).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[t.id,s]),s?Object(j.jsxs)("div",{className:"ui red card",children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:s.avatar,alt:"avatar"})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("p",{className:"header",children:s.name}),Object.keys(s.details).map((function(e){return Object(j.jsxs)("div",{className:"description",children:[Object(j.jsx)("b",{children:e}),": ",s.details[e]]},l.a.generate())}))]})]}):null};var f=function(){var e=Object(n.useState)({id:null,name:""}),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"ui raised very text container",children:Object(j.jsxs)("div",{className:"ui grid",children:[Object(j.jsx)("div",{className:"eight wide column",children:Object(j.jsx)(h,{handleProfile:function(e,t){a({id:e,name:t})}})}),Object(j.jsx)("div",{className:"eight wide column",children:c?Object(j.jsx)(b,{info:c}):null})]})})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),m()}},[[49,1,2]]]);
//# sourceMappingURL=main.2f4c6dd7.chunk.js.map