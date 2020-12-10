(this["webpackJsonpfaculty-scraper"]=this["webpackJsonpfaculty-scraper"]||[]).push([[0],{16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a(0),s=a.n(i),r=a(4),l=a.n(r),c=(a(16),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),i(t),s(t),r(t)}))}),u=a(5),o=a(6),h=a(2),d=a(9),p=a(8),b=(a(17),a(7)),g=a(10),m=function(t){Object(d.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={url:"",loading:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(t){this.setState({url:t.target.value});var e=String(t.target.value).replace(/\/$/,"");this.validateUrl(e)?document.getElementById("input").setCustomValidity("Invalid URL: Make sure you are providing a valid university URL (starts with http(s):// and ends with .edu)."):document.getElementById("input").setCustomValidity("")}},{key:"handleSubmit",value:function(t){var e=this;if(t.preventDefault(),!this.state.loading){var a=String(this.state.url).replace(/\/$/,"");if(this.validateUrl(a))console.log("Invalid URL.");else{this.setState({loading:!0});var n={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:a})};fetch("https://facultyscraper-heroku.herokuapp.com/",n).then((function(t){if(t.ok)return t.json();throw new Error("Bad response!")})).then((function(t){e.setState({loading:!1,url:""}),console.log(t)})).catch((function(t){e.setState({loading:!1}),document.getElementById("input").setCustomValidity("Invalid URL! Try another variation of this URL and make sure it is accessible!")}))}}}},{key:"validateUrl",value:function(t){return!t.endsWith(".edu")||!/^[a-zA-Z:\/\.]+$/.test(t)||!t.startsWith("http://www.")&&!t.startsWith("https://www.")}},{key:"render",value:function(){return[Object(n.jsx)("h1",{className:"title",children:"Faculty Scraper"}),Object(n.jsx)("form",{onSubmit:this.handleSubmit,className:"wrap",children:Object(n.jsxs)("label",{className:"scrape",children:[Object(n.jsx)("input",{autoFocus:!0,type:"text",id:"input",value:this.state.url,onChange:this.handleChange,placeholder:"Input a university URL (e.g. https://www.illinois.edu)",className:"scrapeBar"}),Object(n.jsx)("button",{type:"submit",className:"scrapeButton",children:this.state.loading?Object(n.jsx)(g.a,{}):Object(n.jsx)(b.a,{})})]})})]}}]),a}(s.a.Component);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),c()}},[[18,1,2]]]);
//# sourceMappingURL=main.760062ca.chunk.js.map