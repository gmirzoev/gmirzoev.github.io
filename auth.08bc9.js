(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{170:
/*!************************************!*\
  !*** ./utils/index.ts + 2 modules ***!
  \************************************/
/*! exports provided: Utils, Logger */
/*! exports used: Utils */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-redux-toastr/lib/index.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";var a=r(16);class n{static getConfig(){return{stand:{API_HOST:"https://api.themoviedb.org",API_VERSION:"3",API_KEY:"0a18b273ecf791e0a3e826bc4ccdb607"},tmdb:window.__TMDB_CONFIG__}}static handleError(e="Unknown error occured",t=""){throw a.toastr.error(t,e),new Error(e)}static createTmdbUrl(e){const{API_HOST:t,API_VERSION:r,API_KEY:a}=n.getConfig().stand;let s=`${t}/${r}${"/"===e[0]?"":"/"}${e}`;return e.includes("?")?s+=`&api_key=${a}`:s+=`?api_key=${a}`,s}static debounce(e,t=100,r=null){let a;return function(...n){clearTimeout(a),a=window.setTimeout(()=>e.apply(r,n),t)}}static wait(e=0){return new Promise(t=>setTimeout(t,e))}}r.d(t,"a",function(){return n})},172:
/*!********************************!*\
  !*** ./actions/authActions.ts ***!
  \********************************/
/*! exports provided: login, logout */
/*! exports used: login, logout */function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return o});var a=r(/*! constants/actionTypes */2),n=r(/*! utils */170);function s(e,t){return{type:a.a.LOGIN,payload:async()=>{await n.a.wait(500);const r=JSON.parse(localStorage.getItem("users")||"[]").find(r=>r.login===e.toLowerCase()&&r.password===t);return r?(sessionStorage.setItem("user",JSON.stringify(r)),{user:r}):n.a.handleError("User not found")}}}function o(){return{type:a.a.LOGOUT,payload:async()=>(await n.a.wait(200),sessionStorage.removeItem("user"),!0)}}},173:
/*!***************************************!*\
  !*** ./components/Footer/Footer.scss ***!
  \***************************************/
/*! no static exports found */
/*! exports used: footer, poweredByLogo, poweredByText */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){e.exports={footer:"_1BHfS","powered-by-text":"_2yu9A",poweredByText:"_2yu9A","powered-by-logo":"_3BLsl",poweredByLogo:"_3BLsl"}},177:
/*!************************************************!*\
  !*** ./components/Footer/index.ts + 1 modules ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Footer/Footer.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";var a=r(0),n=r(173);class s extends a.Component{render(){return a.createElement("footer",{className:n.footer},a.createElement("span",{className:n.poweredByText},"This product uses the TMDb API but is not endorsed or certified by TMDb."),a.createElement("div",{className:n.poweredByLogo}))}}r.d(t,"a",function(){return s})},195:
/*!***************************************!*\
  !*** ./components/Auth/AuthForm.scss ***!
  \***************************************/
/*! no static exports found */
/*! exports used: authForm, authFormField, authFormFieldErrorMsg, authFormFieldInput, authFormFieldInputError, authFormSingInBtn */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){e.exports={"auth-form":"_27bNL",authForm:"_27bNL","auth-form-field":"_3uESX",authFormField:"_3uESX","auth-form-field-error-msg":"_2F4e4",authFormFieldErrorMsg:"_2F4e4","auth-form-field-input":"_4lagQ",authFormFieldInput:"_4lagQ","auth-form-field-input-error":"_3V69r",authFormFieldInputError:"_3V69r","auth-form-sing-in-btn":"_3CKs7",authFormSingInBtn:"_3CKs7"}},260:
/*!***********************************!*\
  !*** ./components/Auth/Auth.scss ***!
  \***********************************/
/*! no static exports found */
/*! exports used: auth, authAvailableUsers, authAvailableUsersItem, authAvailableUsersTitle, authInnerWrapper */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){e.exports={auth:"_3LKQQ","auth-inner-wrapper":"pNqZh",authInnerWrapper:"pNqZh","auth-available-users":"_1jKDR",authAvailableUsers:"_1jKDR","auth-available-users-title":"HVlGi",authAvailableUsersTitle:"HVlGi","auth-available-users-item":"_8fUxx",authAvailableUsersItem:"_8fUxx"}},273:
/*!**********************************************!*\
  !*** ./components/Auth/index.ts + 2 modules ***!
  \**********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./actions/authActions.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Footer/index.ts */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Auth/Auth.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./components/Auth/AuthForm.scss (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react-redux/es/index.js (<- Module is referenced from these modules with unsupported syntax: ../node_modules/react-redux-toastr/lib/ReduxToastr.js (referenced with cjs require), ../node_modules/redux-form/lib/ConnectedField.js (referenced with cjs require), ../node_modules/redux-form/lib/createReduxForm.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/react/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/redux-form/lib/Field.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/redux-form/lib/reduxForm.js (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(12),s=r(172),o=r(177),i=r(27),l=r(183),u=r.n(l),c=r(178),d=r.n(c),m=r(195);class p extends a.Component{render(){const{type:e,placeholder:t,input:r,meta:n}=this.props;return a.createElement("div",{className:m.authFormField},a.createElement("input",Object.assign({},r,{className:i(m.authFormFieldInput,{[m.authFormFieldInputError]:n.touched&&n.error}),placeholder:t,type:e})),n.touched&&n.error&&a.createElement("span",{className:m.authFormFieldErrorMsg},n.error))}}var h=u()({form:"authentication",validate:e=>{const t={};return e.login||(t.login="Enter your login"),e.password||(t.password="Enter your password"),t}})(class extends a.Component{render(){const{handleSubmit:e,submitting:t}=this.props;return a.createElement("form",{className:m.authForm,onSubmit:e},a.createElement(d.a,{name:"login",type:"text",placeholder:"Login...",component:p}),a.createElement(d.a,{name:"password",type:"password",placeholder:"Password...",component:p}),a.createElement("button",{type:"submit",className:m.authFormSingInBtn,disabled:t},"Sing in"))}}),f=r(260);const b={login:s.a};var g=Object(n.connect)(void 0,b)(class extends a.Component{constructor(){super(...arguments),this.state={users:JSON.parse(localStorage.getItem("users")||"[]")},this.handleAuthSubmit=(e=>{this.props.login(e.login,e.password)})}render(){return a.createElement("div",{className:f.auth},a.createElement("div",{className:f.authAvailableUsers},a.createElement("div",{className:f.authAvailableUsersTitle},"Available users list"),a.createElement("div",null,this.state.users&&this.state.users.map(e=>a.createElement("div",{key:e.login,className:f.authAvailableUsersItem},`{ login: ${e.login}, password: ${e.password} }`)))),a.createElement("div",{className:f.authInnerWrapper},a.createElement(h,{onSubmit:this.handleAuthSubmit})),a.createElement(o.a,null))}});r.d(t,"default",function(){return g})}}]);