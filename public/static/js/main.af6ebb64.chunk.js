(this["webpackJsonpvideojuegos-front"]=this["webpackJsonpvideojuegos-front"]||[]).push([[0],{12:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},37:function(e,t,c){},45:function(e,t,c){},64:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(38),o=c.n(s),i=(c(45),c(16)),l=c(17),j=c(19),b=c(18),d=(c(12),Object(n.createContext)()),m=c(24),u=c.n(m);u.a.defaults.withCredentials=!0;var h=u.a.create({baseURL:"https://wegam3rs.herokuapp.com/api",timeout:1e4}),O=function(e){return h.post("/user/signup",e)},x=function(){return h.post("/user/logout")},p=c(4),f=c(3),v=(c(64),["btn--primary","btn--outline"]),g=["btn--medium","btn--large"],y=function(e){var t=e.children,c=e.type,n=e.onClick,r=e.buttonStyle,s=e.buttonSize,o=v.includes(r)?r:v[0],i=g.includes(s)?s:g[0];return Object(a.jsx)(f.b,{to:"/login",className:"btn-mobile",children:Object(a.jsx)("button",{className:"btn ".concat(o," ").concat(i),onClick:n,type:c,children:t})})},N=(c(70),function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))}),w=function(e,t,c){return fetch("http://localhost:3000/api/torneovideogame/torneocreate/",{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:c}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},T=function(e){var t=e.history,c=Object(n.useState)(!1),r=Object(p.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)(!0),l=Object(p.a)(i,2),j=l[0],b=l[1],d=function(){return o(!1)},m=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(n.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(a.jsx)("div",{children:Object(a.jsxs)("nav",{className:"navbar",children:[N()&&Object(a.jsxs)("div",{className:"navbar-container",children:[Object(a.jsxs)(f.b,{to:"/",className:"navbar-logo",onClick:d,children:["WeGamers  ",Object(a.jsx)("i",{className:"fab fa-typo3"})]}),Object(a.jsx)(f.b,{to:"/",className:"nav-links",onClick:d,children:"Home"}),Object(a.jsx)(f.b,{to:"/addvideogame",className:"nav-links",onClick:d,children:"Create Tournament"}),Object(a.jsx)(f.b,{to:"/tournaments",className:"nav-links",onClick:d,children:"Available Tournaments"}),Object(a.jsx)(f.b,{to:"/deleteproducts",className:"nav-links",onClick:d,children:"Delete Tournaments"}),Object(a.jsx)(f.b,{to:"/",onClick:function(){return function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("http://localhost:3000/api/authCM/signout",{method:"GET"}).then((function(e){console.log("signout",e)})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))},className:"nav-link",children:"Logout"})]}),!N()&&Object(a.jsxs)("div",{className:"navbar-container",children:[Object(a.jsx)("div",{children:Object(a.jsxs)(f.b,{to:"/",className:"navbar-logo",onClick:d,children:["WeGamers  ",Object(a.jsx)("i",{className:"fab fa-typo3"})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(f.b,{to:"/",className:"nav-links",onClick:d,children:"Home"})}),Object(a.jsx)("div",{children:j&&Object(a.jsx)(y,{buttonStyle:"btn--outline",children:"LOGIN"})})]}),Object(a.jsx)("div",{className:"menu-icon",onClick:function(){return o(!s)},children:Object(a.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})})]})})},C=c(5);var S=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("li",{className:"cards-item",children:Object(a.jsxs)(f.b,{className:"cards__item__link",to:e.path,children:[Object(a.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(a.jsx)("img",{src:e.src,alt:"Travel Image",className:"cards__item__img"})}),Object(a.jsx)("div",{className:"cards__item__info",children:Object(a.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};c(37);var k=function(){return Object(a.jsxs)("div",{className:"cards",children:[Object(a.jsx)("h1",{children:"Check out these EPIC Oportunities!"}),Object(a.jsx)("div",{className:"cards_container",children:Object(a.jsx)("div",{className:"cards__wrapper",children:Object(a.jsxs)("ul",{className:"cards__items",children:[Object(a.jsx)(S,{src:"assets/torneos.jpg",text:"Explore the availible tournaments to play with friends or alone!!!",label:"Tournaments",path:"/tournaments"}),Object(a.jsx)(S,{src:"assets/eshop.png",text:"Buy amazing products and accesories to play like a real PRO player",label:"eShop",path:"/products"})]})})})]})};c(71);var D=function(){return Object(a.jsxs)("div",{className:"footer-container",children:[Object(a.jsxs)("section",{className:"footer-subscription",children:[Object(a.jsx)("p",{className:"footer-subscription-heading",children:"Join the WeGamers newsletter to receive our best tournaments availables"}),Object(a.jsx)("p",{className:"footer-subscription-text",children:"You can unsubscribe at any time."}),Object(a.jsx)("div",{className:"input-areas",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(a.jsx)(y,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(a.jsxs)("div",{class:"footer-links",children:[Object(a.jsxs)("div",{className:"footer-link-wrapper",children:[Object(a.jsxs)("div",{class:"footer-link-items",children:[Object(a.jsx)("h2",{children:"About Us"}),Object(a.jsx)(f.b,{to:"/sign-up",children:"How it works"}),Object(a.jsx)(f.b,{to:"/",children:"Testimonials"}),Object(a.jsx)(f.b,{to:"/",children:"Careers"}),Object(a.jsx)(f.b,{to:"/",children:"Investors"}),Object(a.jsx)(f.b,{to:"/",children:"Terms of Service"})]}),Object(a.jsxs)("div",{class:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Contact Us"}),Object(a.jsx)(f.b,{to:"/",children:"Contact"}),Object(a.jsx)(f.b,{to:"/",children:"Support"}),Object(a.jsx)(f.b,{to:"/",children:"Destinations"}),Object(a.jsx)(f.b,{to:"/",children:"Sponsorships"})]})]}),Object(a.jsxs)("div",{className:"footer-link-wrapper",children:[Object(a.jsxs)("div",{class:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Videos"}),Object(a.jsx)(f.b,{to:"/",children:"Submit Video"}),Object(a.jsx)(f.b,{to:"/",children:"Ambassadors"}),Object(a.jsx)(f.b,{to:"/",children:"Agency"}),Object(a.jsx)(f.b,{to:"/",children:"Influencer"})]}),Object(a.jsxs)("div",{class:"footer-link-items",children:[Object(a.jsx)("h2",{children:"Social Media"}),Object(a.jsx)(f.b,{to:"/",children:"Instagram"}),Object(a.jsx)(f.b,{to:"/",children:"Facebook"}),Object(a.jsx)(f.b,{to:"/",children:"Youtube"}),Object(a.jsx)(f.b,{to:"/",children:"Twitter"})]})]})]}),Object(a.jsx)("section",{class:"social-media",children:Object(a.jsxs)("div",{class:"social-media-wrap",children:[Object(a.jsx)("div",{class:"footer-logo",children:Object(a.jsxs)(f.b,{to:"/",className:"social-logo",children:["WeGamers",Object(a.jsx)("i",{class:"fab fa-typo3"})]})}),Object(a.jsx)("small",{class:"website-rights",children:"WeGamers \xa9 2021 - Made with \u2665 - IronHack  "}),Object(a.jsxs)("div",{class:"social-icons",children:[Object(a.jsx)(f.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(a.jsx)("i",{class:"fab fa-facebook-f"})}),Object(a.jsx)(f.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(a.jsx)("i",{class:"fab fa-instagram"})}),Object(a.jsx)(f.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(a.jsx)("i",{class:"fab fa-youtube"})}),Object(a.jsx)(f.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(a.jsx)("i",{class:"fab fa-twitter"})}),Object(a.jsx)(f.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(a.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};c(72);function _(){return Object(a.jsxs)("div",{className:"hero-container",children:[Object(a.jsx)("video",{src:"/videos/video-2.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(a.jsx)("h1",{children:"COMPETITIONS AWAITS"}),Object(a.jsx)("p",{children:"What are you waiting for?"}),Object(a.jsxs)("div",{className:"hero-btns",children:[Object(a.jsx)(y,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(a.jsxs)(y,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["WATCH TRAILER ",Object(a.jsx)("i",{className:"far fa-play-circle"})]})]})]})}var I=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(_,{}),Object(a.jsx)(k,{}),Object(a.jsx)(D,{})]})};n.Component,c(22);var P=c(7),A=c(2),E=(c(73),function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(p.a)(e,2),c=t[0],r=t[1],s=c.name,o=c.email,i=c.password,l=c.success,j=c.error,b=function(e){return function(t){r(Object(A.a)(Object(A.a)({},c),{},Object(P.a)({error:!1},e,t.target.value)))}},d=function(e){var t;e.preventDefault(),r(Object(A.a)(Object(A.a)({},c),{},{error:!1})),(t={name:s,email:o,password:i},fetch("http://localhost:3000/api/authCM/signup",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?r(Object(A.a)(Object(A.a)({},c),{},{error:e.error,success:!1})):r(Object(A.a)(Object(A.a)({},c),{},{name:"",email:"",password:"",error:"",success:!0}))}))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h4",{className:"text-center mb-5",children:"Get started with us today! Create your account by filling out the information below."}),Object(a.jsx)("div",{className:"alert alert-danger",style:{display:j?"":"none"},children:j}),Object(a.jsxs)("div",{className:"alert alert-info",style:{display:l?"":"none"},children:["  New Account Successfully Created You can now",Object(a.jsx)(f.b,{to:"/login",children:" Login"})]}),Object(a.jsxs)("form",{className:"sign-box",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Enter your Name"}),Object(a.jsx)("input",{onChange:b("name"),value:s,type:"text",className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Enter your Email"}),Object(a.jsx)("input",{onChange:b("email"),type:"email",value:o,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Enter your Password"}),Object(a.jsx)("input",{onChange:b("password"),value:i,type:"password",className:"form-control"}),Object(a.jsxs)("span",{className:"form-input-login adjust-text",children:["Already have an account? Login ",Object(a.jsx)("a",{href:"/login",children:"here"})]})]}),Object(a.jsx)("button",{onClick:d,className:"btn btn-primary",children:"Sign Up"})]}),Object(a.jsx)(D,{})]})})});c(23);function F(e){var t={};return e.teamName.trim()||(t.teamName="Team`s name is required"),e.playerOne.trim()||(t.playerOne="ID for the Player One is required"),e.playerTwo.trim()||(t.playerTwo="ID for the Player Two is required"),e.playerThree.trim()||(t.playerThree="ID for the Player Three is required"),e.playerFour.trim()||(t.playerFour="ID for the Player Four is required"),t}var L=function(e,t){var c=Object(n.useState)({teamName:"",playerOne:"",playerTwo:"",playerThree:"",playerFour:""}),a=Object(p.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)({}),i=Object(p.a)(o,2),l=i[0],j=i[1],b=Object(n.useState)(!1),d=Object(p.a)(b,2),m=d[0],u=d[1];return Object(n.useEffect)((function(){0===Object.keys(l).length&&m&&e()}),[l]),{handleChange:function(e){var t=e.target,c=t.name,a=t.value;s(Object(A.a)(Object(A.a)({},r),{},Object(P.a)({},c,a)))},handleSubmit:function(e){e.preventDefault(),j(t(r)),u(!0)},values:r,errors:l}},G=function(e){var t=e.submitForm,c=L(t,F),n=c.handleChange,r=c.handleSubmit,s=c.values,o=c.errors;return Object(a.jsx)("div",{className:"form-content-right",children:Object(a.jsxs)("form",{onSubmit:r,className:"form",noValidate:!0,children:[Object(a.jsx)("h1",{children:"\xbfAre you ready to rock? - Create your team and add your teammates by filling out the information below."}),Object(a.jsxs)("div",{className:"form-inputs",children:[Object(a.jsx)("label",{className:"form-label",children:"Team`s Name"}),Object(a.jsx)("input",{className:"form-input",type:"text",name:"teamName",placeholder:"Enter the name of the Team",value:s.teamName,onChange:n}),o.teamName&&Object(a.jsx)("p",{children:o.teamName})]}),Object(a.jsxs)("div",{className:"form-inputs",children:[Object(a.jsx)("label",{className:"form-label",children:"Activision ID Player One"}),Object(a.jsx)("input",{className:"form-input",type:"text",name:"playerOne",placeholder:"Enter the Activision ID for Player One",value:s.playerOne,onChange:n}),o.playerOne&&Object(a.jsx)("p",{children:o.playerOne})]}),Object(a.jsxs)("div",{className:"form-inputs",children:[Object(a.jsx)("label",{className:"form-label",children:"Activision ID Player Two"}),Object(a.jsx)("input",{className:"form-input",type:"text",name:"playerTwo",placeholder:"Enter the Activision ID for Player Two",value:s.playerTwo,onChange:n}),o.playerTwo&&Object(a.jsx)("p",{children:o.playerTwo})]}),Object(a.jsxs)("div",{className:"form-inputs",children:[Object(a.jsx)("label",{className:"form-label",children:"Activision ID Player Three"}),Object(a.jsx)("input",{className:"form-input",type:"text",name:"playerThree",placeholder:"Enter the Activision ID for Player Three",value:s.playerThree,onChange:n}),o.playerThree&&Object(a.jsx)("p",{children:o.playerThree})]}),Object(a.jsxs)("div",{className:"form-inputs",children:[Object(a.jsx)("label",{className:"form-label",children:"Activision ID Player Four"}),Object(a.jsx)("input",{className:"form-input",type:"text",name:"playerFour",placeholder:"Enter the Activision ID for Player Four",value:s.playerFour,onChange:n}),o.playerFour&&Object(a.jsx)("p",{children:o.playerFour})]}),Object(a.jsx)("button",{className:"form-input-btn",type:"submit",children:"Register Team"})]})})},q=function(){return Object(a.jsx)("div",{className:"form-content-right",children:Object(a.jsx)("h1",{className:"form-success",children:"We have received your registration!"})})},R=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),c=t[0],r=t[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsx)("span",{className:"close-btn",children:"\xd7"}),Object(a.jsx)("div",{className:"form-content-left"}),c?Object(a.jsx)(q,{}):Object(a.jsx)(G,{submitForm:function(){r(!0)}})]})})};function W(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register your Team"}),Object(a.jsx)(R,{})]})}c(74),c(75);var M=function(e){var t=e.item;e.url;return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"http://localhost:3000/api/torneovideogame/photo/".concat(t._id),alt:t.name,className:"card-img-top",style:{maxHeight:"200px",maxWidth:"300px"}})})},V=function(e){var t=e.videogame,c=Object(n.useState)(t.count),r=Object(p.a)(c,2);r[0],r[1];return Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-4-lg",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(M,{item:t,url:"videogame"}),Object(a.jsxs)("div",{class:"card-body",children:[Object(a.jsx)("p",{className:"card-title",children:t.name}),Object(a.jsxs)("p",{className:"card-text",children:["$",t.price]}),Object(a.jsx)("p",{className:"card-text",children:t.description}),Object(a.jsx)("a",{href:"/register",className:"btn btn-primary",children:"Register"})]})]})})})})})},J=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(p.a)(s,2),i=o[0],l=o[1],j=function(){fetch("http://localhost:3000/api/torneovideogame/torneovideogames",{method:"GET"}).then((function(e){return console.log(e),e.json()})).catch((function(e){return console.log("este es el error",e)})).then((function(e){i?l(i):(r(e),console.log(e))})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){j()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"\xa1Choose a tournament to win rewards and cash prizes!"}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(a.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 col-sm-6",children:Object(a.jsx)(V,{videogame:e})},t)}))})})})]})};c(15),c(27);function U(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(J,{}),Object(a.jsx)(D,{})]})}c(77);var z=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,redirectToReferrer:!1}),t=Object(p.a)(e,2),c=t[0],r=t[1],s=c.email,o=c.password,i=c.loading,l=c.error,j=c.redirectToReferrer,b=N().user,d=function(e){return function(t){r(Object(A.a)(Object(A.a)({},c),{},Object(P.a)({error:!1},e,t.target.value)))}},m=function(e){e.preventDefault(),r(Object(A.a)(Object(A.a)({},c),{},{error:!1,loading:!0})),function(e){return fetch("http://localhost:3000/api/authCM/loginya",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({email:s,password:o}).then((function(e){e.error?r(Object(A.a)(Object(A.a)({},c),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(A.a)(Object(A.a)({},c),{},{redirectToReferrer:!0}))}))}))};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h4",{className:"text-center mb-5"}),Object(a.jsx)("div",{className:"alert alert-danget",style:{display:l?"":"none"},children:l}),i&&Object(a.jsx)("div",{className:"alert alert-info",children:Object(a.jsx)("h2",{children:"Loading..."})}),Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"sign-box",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Email"}),Object(a.jsx)("input",{onChange:d("email"),type:"email",className:"form-control",value:s})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Password"}),Object(a.jsx)("input",{onChange:d("password"),type:"password",className:"form-control",value:o})]}),Object(a.jsx)("button",{onClick:m,className:"s-btn btn btn-primary",children:"Sign In"}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"form-input-login adjust-text",children:["No account? Create one! ",Object(a.jsx)("a",{href:"/signup",children:"here"})]})]})}),j?b&&1===b.role?Object(a.jsx)(C.a,{to:"/admin/dashboard"}):Object(a.jsx)(C.a,{to:"/"}):N()?Object(a.jsx)(C.a,{to:"/"}):void 0]})})};function H(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Enter your information to Login"}),Object(a.jsx)(z,{}),Object(a.jsx)(D,{})]})}function Y(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:!0,children:"Update Products"}),";",Object(a.jsx)(D,{})]})}var B=function(){var e=Object(n.useState)({name:"",description:"",price:"",categories:[],category:"",quantity:"",photo:"",loading:!1,error:"",createdVideogame:"",redirectToProfile:!1,formData:""}),t=Object(p.a)(e,2),c=t[0],r=t[1],s=N(),o=s.user,i=s.token,l=(c.name,c.description,c.price,c.categories),j=(c.category,c.quantity,c.photo,c.loading),b=c.error,d=c.createdVideogame,m=(c.redirectToProfile,c.formData),u=function(){fetch("http://localhost:3000/api/torneovideogame/torneovideogames",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(e){e.error?r(Object(A.a)(Object(A.a)({},c),{},{error:e.error})):r(Object(A.a)(Object(A.a)({},c),{},{categories:e,formData:new FormData}))}))};Object(n.useEffect)((function(){r(Object(A.a)(Object(A.a)({},c),{},{formData:new FormData})),u()}),[]);var h=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;m.set(e,a),r(Object(A.a)(Object(A.a)({},c),{},Object(P.a)({},e,a)))}},O=function(e){e.preventDefault(),r(Object(A.a)(Object(A.a)({},c),{},{error:"",loading:!0})),w(o._id,i,m).then((function(e){e.error?r(Object(A.a)(Object(A.a)({},c),{},{error:e.error})):r(Object(A.a)(Object(A.a)({},c),{},{name:"",description:"",photo:"",price:"",quantity:"",loading:!1,createdVideogame:e.name}))}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"conatiner mt-5",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(a.jsx)("h2",{children:"With this option, you can delete a Tournament you had created before"}),j&&Object(a.jsx)("div",{className:"alert alert-success",children:Object(a.jsx)("h2",{children:"Loading ..."})}),Object(a.jsx)("div",{className:"alert alert-info",style:{display:d?"":"none"},children:Object(a.jsx)("h2",{children:"".concat(d," was succesfully deleted")})}),Object(a.jsx)("div",{className:"alert alert-danger",style:{display:b?"":"none"},children:b}),Object(a.jsxs)("form",{className:"mb-3",onSubmit:O,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Category"}),Object(a.jsxs)("select",{onChange:h("category"),type:"text",className:"form-control",children:[Object(a.jsx)("option",{children:"Select a Tournament"}),l&&l.map((function(e,t){return Object(a.jsx)("option",{value:e._id,children:e.name},t)}))]})]}),Object(a.jsx)("button",{className:"btn btn-outline-primary",children:"Delete Tournament Confirmation"})]})]})})}),Object(a.jsx)(D,{})]})};function $(){return Object(a.jsx)("div",{children:Object(a.jsx)(B,{})})}var K=function(){var e=Object(n.useState)({name:"",description:"",price:"",categories:[],category:"",quantity:"",photo:"",loading:!1,error:"",createdVideogame:"",redirectToProfile:!1,formData:""}),t=Object(p.a)(e,2),c=t[0],r=t[1],s=N(),o=s.user,i=s.token,l=c.name,j=c.description,b=c.price,d=c.categories,m=(c.category,c.quantity),u=(c.photo,c.loading),h=c.error,O=c.createdVideogame,x=(c.redirectToProfile,c.formData),f=function(){fetch("http://localhost:3000/api/category/categories",{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)})).then((function(e){e.error?r(Object(A.a)(Object(A.a)({},c),{},{error:e.error})):r(Object(A.a)(Object(A.a)({},c),{},{categories:e,formData:new FormData}))}))};Object(n.useEffect)((function(){r(Object(A.a)(Object(A.a)({},c),{},{formData:new FormData})),f()}),[]);var v=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;x.set(e,a),r(Object(A.a)(Object(A.a)({},c),{},Object(P.a)({},e,a)))}},g=function(e){e.preventDefault(),r(Object(A.a)(Object(A.a)({},c),{},{error:"",loading:!0})),w(o._id,i,x).then((function(e){e.error?r(Object(A.a)(Object(A.a)({},c),{},{error:e.error})):r(Object(A.a)(Object(A.a)({},c),{},{name:"",description:"",photo:"",price:"",quantity:"",loading:!1,createdVideogame:e.name}))}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"conatiner mt-5",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-md-8 offset-md-2",children:[Object(a.jsx)("h2",{children:"Create a tournament to play with other players around the world"}),u&&Object(a.jsx)("div",{className:"alert alert-success",children:Object(a.jsx)("h2",{children:"Loading ..."})}),Object(a.jsx)("div",{className:"alert alert-info",style:{display:O?"":"none"},children:Object(a.jsx)("h2",{children:"".concat(O," was succesfully created")})}),Object(a.jsx)("div",{className:"alert alert-danger",style:{display:h?"":"none"},children:h}),Object(a.jsxs)("form",{className:"mb-3",onSubmit:g,children:[Object(a.jsx)("h4",{children:"Select a Photo"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("label",{className:"btn btn-secondary",children:Object(a.jsx)("input",{onChange:v("photo"),type:"file",name:"photo",accept:"image/*"})})}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Name of The Tournament"}),Object(a.jsx)("input",{onChange:v("name"),type:"text",className:"form-control",value:l})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Register Fee:"}),Object(a.jsx)("input",{onChange:v("description"),type:"text",className:"form-control",value:j})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Date MM-DD-AAAA Time GMT"}),Object(a.jsx)("input",{onChange:v("price"),type:"text",className:"form-control",value:b})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Category"}),Object(a.jsxs)("select",{onChange:v("category"),type:"text",className:"form-control",children:[Object(a.jsx)("option",{children:"Select Category"}),d&&d.map((function(e,t){return Object(a.jsx)("option",{value:e._id,children:e.name},t)}))]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Select Number of Participants"}),Object(a.jsx)("input",{onChange:v("quantity"),type:"number",className:"form-control",value:m})]}),Object(a.jsx)("button",{className:"btn btn-outline-primary",children:"Create Tournament"})]})]})})}),Object(a.jsx)(D,{})]})},Q=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(i.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={user:JSON.parse(localStorage.getItem("user"))||{}},e.logout=function(){var t=e.props.history;x().then((function(){localStorage.removeItem("user"),e.setState({user:{}}),t.push("/")}))},e.setUser=function(t){e.setState({user:t})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.setUser,t=this.state;return Object(a.jsx)("div",{children:Object(a.jsx)(d.Provider,{value:{setUser:e},children:Object(a.jsx)("div",{children:Object(a.jsxs)(f.a,{children:[Object(a.jsx)(T,{user:t.user}),Object(a.jsxs)(C.d,{children:[Object(a.jsx)(C.b,{path:"/",exact:!0,component:I}),Object(a.jsx)(C.b,{path:"/tournaments",component:U}),Object(a.jsx)(C.b,{path:"/register",component:W}),Object(a.jsx)(C.b,{path:"/login",component:H}),Object(a.jsx)(C.b,{path:"/signup",component:E}),Object(a.jsx)(C.b,{path:"/addvideogame",component:K}),Object(a.jsx)(C.b,{path:"/tournaments",component:U}),Object(a.jsx)(C.b,{path:"/updateproducts",component:Y}),Object(a.jsx)(C.b,{path:"/deleteproducts",component:$})]})]})})})})}}]),c}(n.Component),X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f.a,{children:Object(a.jsx)(Q,{})})}),document.getElementById("root")),X()}},[[78,1,2]]]);
//# sourceMappingURL=main.af6ebb64.chunk.js.map