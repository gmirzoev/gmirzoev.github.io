webpackJsonp([1],{"4CWJ":function(e,t,r){"use strict";var n=r("CwoH"),a=r.n(n),o=r("DHc/"),u=(r.n(o),function(){return a.a.createElement("footer",{className:o.footer},a.a.createElement("span",{className:o.poweredByText},"This product uses the TMDb API but is not endorsed or certified by TMDb."),a.a.createElement("div",{className:o.poweredByLogo}))});t.a=u},"90Ip":function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var u=t[a](o),i=u.value}catch(e){return void r(e)}if(!u.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}r.d(t,"a",function(){return i}),r.d(t,"b",function(){return s});var a=r("0r3q"),o=r("s/GO"),u=this,i=function(e,t){var r=localStorage.getItem("users")||"[]",i=JSON.parse(r).filter(function(r){return r.login===e.toLowerCase()&&r.password===Number.parseInt(t,10)})[0];return{type:a.j,payload:n(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)(1e3);case 2:return i||(t="User not found",Object(o.d)(t)),localStorage.setItem("user",JSON.stringify(i)),e.abrupt("return",{user:i});case 5:case"end":return e.stop()}},e,u)}))()}},s=function(){return{type:a.n,payload:n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)(100);case 2:return localStorage.removeItem("user"),e.abrupt("return",!0);case 4:case"end":return e.stop()}},e,u)}))()}}},"DHc/":function(e,t){e.exports={footer:"Footer-2q4lH__footer","powered-by-text":"Footer-24kEF__powered-by-text",poweredByText:"Footer-24kEF__powered-by-text","powered-by-logo":"Footer-I8-pg__powered-by-logo",poweredByLogo:"Footer-I8-pg__powered-by-logo"}},LA7p:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=r("CwoH"),i=r.n(u),s=r("jYI/"),l=r("90Ip"),c=r("Rxy+"),f=r("4CWJ"),p=r("ykpU"),h=(r.n(p),function(e){function t(){var r,o,u;n(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return r=o=a(this,e.call.apply(e,[this].concat(s))),o.state={users:JSON.parse(localStorage.getItem("users")||"")},o.handleAuthSubmit=function(e){o.props.authHandler(e.login,e.password)},u=r,a(o,u)}return o(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:p.authPage},i.a.createElement("div",{className:p.authPageAvailableUsers},i.a.createElement("div",{className:p.authPageAvailableUsersTitle},"Available users list"),i.a.createElement("div",null,this.state.users&&this.state.users.map(function(e){return i.a.createElement("div",{key:e.login,className:p.authPageAvailableUsersItem},"{ login: "+e.login+", password: "+e.password+" }")}))),i.a.createElement("div",{className:p.authPageInnerWrapper},i.a.createElement(c.a,{onSubmit:this.handleAuthSubmit})),i.a.createElement(f.a,null))},t}(u.Component)),m=function(e){return{authHandler:function(t,r){return e(Object(l.a)(t,r))}}};t.default=Object(s.connect)(void 0,m)(h)},"Rxy+":function(e,t,r){"use strict";var n=r("CwoH"),a=r.n(n),o=r("BQ2S"),u=r("s/GO"),i=r("nB6W"),s=(r.n(i),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}),l=function(e){var t={};return e.login||(t.login="Enter your login"),e.password||(t.password="Enter your password"),t},c=function(e){var t=e.input,r=e.type,n=e.placeholder,o=e.meta,l=o.touched,c=o.error;return a.a.createElement("div",{className:i.authFormField},a.a.createElement("input",s({},t,{className:Object(u.e)(i.authFormFieldInput,{clsName:i.authFormFieldInputError,isActive:l&&c}),placeholder:n,type:r})),l&&c&&a.a.createElement("span",{className:i.authFormFieldErrorMsg},c))},f=function(e){var t=e.handleSubmit,r=e.submitting;return a.a.createElement("form",{className:i.authForm,onSubmit:t},a.a.createElement(o.Field,{name:"login",type:"text",placeholder:"Login...",component:c}),a.a.createElement(o.Field,{name:"password",type:"password",placeholder:"Password...",component:c}),a.a.createElement("button",{type:"submit",className:i.authFormSingInBtn,disabled:r},"Sing in"))};t.a=Object(o.reduxForm)({form:"authentication",validate:l})(f)},nB6W:function(e,t){e.exports={"auth-form":"AuthForm-3H1Ld__auth-form",authForm:"AuthForm-3H1Ld__auth-form","auth-form-field":"AuthForm-148GU__auth-form-field",authFormField:"AuthForm-148GU__auth-form-field","auth-form-field-error-msg":"AuthForm-1m4cr__auth-form-field-error-msg",authFormFieldErrorMsg:"AuthForm-1m4cr__auth-form-field-error-msg","auth-form-field-input":"AuthForm-1Sb81__auth-form-field-input",authFormFieldInput:"AuthForm-1Sb81__auth-form-field-input","auth-form-field-input-error":"AuthForm-2OJOX__auth-form-field-input-error",authFormFieldInputError:"AuthForm-2OJOX__auth-form-field-input-error","auth-form-sing-in-btn":"AuthForm-3iEW1__auth-form-sing-in-btn",authFormSingInBtn:"AuthForm-3iEW1__auth-form-sing-in-btn"}},"s/GO":function(e,t,r){"use strict";r.d(t,"d",function(){return u}),r.d(t,"a",function(){return i}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return l}),r.d(t,"e",function(){return c}),r.d(t,"f",function(){return f});var n=r("cRAQ"),a=(r.n(n),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),o=this,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unknown error",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error";throw n.toastr.error(t,e),new Error(e)},i=function(e){var t={API_HOST:"https://api.themoviedb.org",API_VERSION:"3",API_KEY:"0a18b273ecf791e0a3e826bc4ccdb607"},r=t.API_HOST,n=t.API_VERSION,a=t.API_KEY,o=r+"/"+n+("/"===e[0]?"":"/")+e;return e.includes("?")?o+="&api_key="+a:o+="?api_key="+a,o},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,n=null;return function(){for(var a=arguments.length,o=Array(a),u=0;u<a;u++)o[u]=arguments[u];clearTimeout(n),n=setTimeout(function(){return e.apply(r,o)},t)}},l=function(e){return fetch(e).then(function(e){return 401===e.status||403===e.status?e.json().then(function(e){throw e}):e.ok?e.json():e.json().then(function(e){throw e})})},c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(function(e){if("string"==typeof e)return e;if("object"===(void 0===e?"undefined":a(e))){var t=e.clsName;if(e.isActive)return t}return""}).join(" ")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise(function(t){return setTimeout(t,e)})}},ykpU:function(e,t){e.exports={"auth-page":"AuthPage-9M23j__auth-page",authPage:"AuthPage-9M23j__auth-page","auth-page-inner-wrapper":"AuthPage-1wr3n__auth-page-inner-wrapper",authPageInnerWrapper:"AuthPage-1wr3n__auth-page-inner-wrapper","auth-page-available-users":"AuthPage-3CaMY__auth-page-available-users",authPageAvailableUsers:"AuthPage-3CaMY__auth-page-available-users","auth-page-available-users-title":"AuthPage-3zsoq__auth-page-available-users-title",authPageAvailableUsersTitle:"AuthPage-3zsoq__auth-page-available-users-title","auth-page-available-users-item":"AuthPage-11YIW__auth-page-available-users-item",authPageAvailableUsersItem:"AuthPage-11YIW__auth-page-available-users-item"}}});
//# sourceMappingURL=auth.06b45.js.map