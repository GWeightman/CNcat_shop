(this.webpackJsonpproto_test=this.webpackJsonpproto_test||[]).push([[0],{11:function(e,t,c){},1523:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(25),r=c.n(s),a=(c(31),c(10)),i=c.n(a),j=c(26),o=c(4),u=(c(11),c(7)),b=c(1),l=function(e){var t=e.catData,c=e.to_buy,n=e.setTo_buy;return Object(b.jsxs)("div",{className:"display",children:[Object(b.jsx)("h1",{children:"Cat4Life"}),t.map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:e.url,alt:"no pic"}),Object(b.jsxs)("div",{className:"para",children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsxs)("p",{children:["\xa3",e.price]})]}),Object(b.jsx)("button",{onClick:function(){return function(e){var t=Object(u.a)(c),s={pic:e.url,name:e.name,price:e.price};t.push(s),n(t)}(e)},"data-testid":"button",children:"Add"})]})}))]})},d=function(e){var t=e.to_buy,c=e.setTo_buy,n=e.total,s=e.setTotal;return s((function(){for(var e=0,c=0;c<t.length;c++)e+=parseFloat(t[c].price);return e})),Object(b.jsxs)("div",{className:"display",children:[t.map((function(e,n){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:e.pic,alt:"no pic"}),Object(b.jsxs)("div",{className:"para",children:[Object(b.jsx)("p",{children:e.name}),Object(b.jsxs)("p",{children:["\xa3",e.price]})]}),Object(b.jsx)("button",{onClick:function(){return function(e){var n=Object(u.a)(t);n.splice(e,1),c(n)}(n)},children:"remove"})]})})),Object(b.jsxs)("h5",{children:["Total to pay = \xa3",n]})]})},p=c(8),O=c(2);var h=function(){var e=c(34),t=Object(n.useState)(0),s=Object(o.a)(t,2),r=s[0],a=s[1],u=Object(n.useState)([""]),h=Object(o.a)(u,2),x=h[0],m=h[1],f=Object(n.useState)([]),v=Object(o.a)(f,2),g=v[0],y=v[1],k=Object(n.useState)(!1),_=Object(o.a)(k,2),T=(_[0],_[1]),N=Object(n.useState)({error:!1,message:""}),w=Object(o.a)(N,2),C=(w[0],w[1]),S=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,fetch("https://api.thecatapi.com/v1/images/search?limit=10");case 4:if(200===(t=e.sent).status){e.next=7;break}throw new Error("Not Working");case 7:return e.next=9,t.json();case 9:return c=e.sent,e.next=12,F(c);case 12:n=e.sent,m(n),T(!1),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),C({error:!0,message:e.t0.message});case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),F=function(t){return t.map((function(t){t.name=e.name.firstName(),t.price=e.commerce.price()})),t};return Object(n.useEffect)((function(){S()}),[]),x?Object(b.jsxs)(p.a,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(p.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(p.b,{to:"/basket",children:"Basket"})})]})})}),Object(b.jsx)("div",{children:Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/basket",element:Object(b.jsx)(d,{to_buy:g,setTo_buy:y,total:r,setTotal:a})}),Object(b.jsx)(O.a,{path:"/",element:Object(b.jsx)(l,{catData:x,to_buy:g,setTo_buy:y})})]})})]}):null},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,1524)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};r.a.render(Object(b.jsx)(h,{}),document.getElementById("root")),x()},31:function(e,t,c){}},[[1523,1,2]]]);
//# sourceMappingURL=main.1ddd7f69.chunk.js.map