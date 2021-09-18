(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{88:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),c=t(32),r=t.n(c),l=t(7),i=t(8),o=t(10),b=t(9),d=t(13),h=t(2),m=(t(39),t(40),t(0)),j=function(e){Object(o.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(m.jsx)("nav",{className:"navbar shadow-sm navbar-expand-lg navbar-dark bg-dark",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Navbar"}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(m.jsxs)("div",{className:"navbar-nav",children:[Object(m.jsx)(d.b,{className:"nav-link active",to:"/",children:"Show User"}),Object(m.jsx)(d.b,{className:"nav-link",to:"/add",children:"Add User"})]})})]})})}}]),t}(n.Component),u=t(12),p=t.n(u),O=function(e){Object(o.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).getDataApi=function(){p.a.get("https://dan-reactbasic-api.herokuapp.com/user").then((function(e){n.setState({users:e.data})}))},n.deleteUser=function(e){p.a.delete("https://dan-reactbasic-api.herokuapp.com/user/".concat(e)).then((function(e){console.log(e.data),alert("Data berhasil di hapus."),n.getDataApi()}))},n.componentDidMount=function(){n.getDataApi()},n.state={users:[]},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("table",{className:"table table-dark table-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"No"}),Object(m.jsx)("th",{scope:"col",children:"Username"}),Object(m.jsx)("th",{scope:"col",children:"Email"}),Object(m.jsx)("th",{scope:"col",children:"Password"}),Object(m.jsx)("th",{scope:"col",children:"Action"})]})}),Object(m.jsx)("tbody",{children:this.state.users.map((function(a,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"row",children:t+1}),Object(m.jsx)("td",{children:a.username}),Object(m.jsx)("td",{children:a.email}),Object(m.jsx)("td",{children:a.password}),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{className:"btn btn-sm btn-danger me-2",onClick:function(){return e.deleteUser(a._id)},children:"Delete"}),Object(m.jsx)("button",{className:"btn btn-sm btn-primary",onClick:function(){return window.location.href="/update/".concat(a._id)},children:"Update"})]})]},a._id)}))})]})}}]),t}(n.Component),x=t(15),f=function(e){Object(o.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=Object(x.a)({},n.state.data);a[e.target.name]=e.target.value,n.setState({data:a})},n.handleSubmit=function(e){e.preventDefault(),p.a.post("https://dan-reactbasic-api.herokuapp.com/user/add",n.state.data).then((function(e){alert("Data berhasil di tambah.")})).catch((function(e){console.log(e),alert("Data gagal di tambah.")}))},n.state={data:{username:"",email:"",password:""}},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"mb-3 form-check",children:[Object(m.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Remember me"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).getUser=function(){var e=window.location.href.split("/")[4];p.a.get("https://dan-reactbasic-api.herokuapp.com/user/".concat(e)).then((function(e){e.data._id&&n.setState({user:e.data})}))},n.handleChange=function(e){var a=Object(x.a)({},n.state.user);a[e.target.name]=e.target.value,n.setState({user:a})},n.handleSubmit=function(e){e.preventDefault(),p.a.put("https://dan-reactbasic-api.herokuapp.com/user",n.state.user).then((function(e){alert("Data berhasil di update.")})).catch((function(e){console.log(e),alert("Data gagal di update.")}))},n.componentDidMount=function(){n.getUser()},n.state={user:{username:"",email:"",password:""}},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.user.username,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(m.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.user.email,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(m.jsx)("input",{type:"password",className:"form-control",id:"password",name:"password",value:this.state.user.password,onChange:this.handleChange})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})]})}}]),t}(n.Component),g=function(e){Object(o.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(m.jsxs)(d.a,{children:[Object(m.jsx)(j,{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h.a,{path:"/",exact:!0,component:O}),Object(m.jsx)(h.a,{path:"/add",component:f}),Object(m.jsx)(h.a,{path:"/update",component:v})]})]})}}]),t}(n.Component);r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c962d711.chunk.js.map