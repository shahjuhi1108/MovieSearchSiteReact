(this["webpackJsonphooked-movie-search"]=this["webpackJsonphooked-movie-search"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),a=c(4),r=c.n(a),o=(c(10),c(2)),j=(c(11),function(e){return Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("h2",{children:e.text})})}),u=function(e){var t=e.movie,c="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("h2",{children:t.Title}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{width:"200",alt:"The movie titled: + ".concat(t.Title),src:c})}),Object(n.jsxs)("p",{children:["(",t.Year,")"]})]})},h=function(e){var t=Object(s.useState)(""),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(n.jsxs)("form",{className:"search",children:[Object(n.jsx)("input",{value:i,onChange:function(e){a(e.target.value)},type:"text"}),Object(n.jsx)("input",{onClick:function(t){t.preventDefault(),e.search(i),a("")},type:"submit",value:"SEARCH"})]})},l=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)([]),r=Object(o.a)(a,2),l=r[0],b=r[1],d=Object(s.useState)(null),O=Object(o.a)(d,2),m=O[0],p=O[1];Object(s.useEffect)((function(){fetch("http://www.omdbapi.com/?s=man&apikey=424d521e").then((function(e){return e.json()})).then((function(e){b(e.Search),i(!1)}))}),[]);return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{text:"HOOKED"}),Object(n.jsx)(h,{search:function(e){i(!0),p(null),fetch("http://www.omdbapi.com/?s=".concat(e,"&apikey=424d521e")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?(b(e.Search),i(!1)):(p(e.Error),i(!1))}))}}),Object(n.jsx)("p",{className:"App-intro",children:"Sharing a few of our favourite movies."}),Object(n.jsx)("div",{className:"movies",children:c&&!m?Object(n.jsx)("span",{children:"Loading..."}):m?Object(n.jsx)("div",{className:"errorMessage",children:m}):l.map((function(e,t){return Object(n.jsx)(u,{movie:e},"".concat(t,"-").concat(e.Title))}))})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(l,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.2d9d14cc.chunk.js.map