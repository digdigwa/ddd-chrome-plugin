(function(e){function t(t){for(var n,s,i=t[0],u=t[1],c=t[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},7706:function(e,t,r){"use strict";var n=r("96b5"),a=r.n(n);a.a},"85ec":function(e,t,r){},"96b5":function(e,t,r){},b91e:function(e,t,r){"use strict";var n=r("c520"),a=r.n(n);a.a},c520:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("0fb7"),r("450d");var n=r("f529"),a=r.n(n),o=(r("06f1"),r("6ac9")),s=r.n(o),i=(r("6611"),r("e772")),u=r.n(i),c=(r("1f1a"),r("4e4b")),l=r.n(c),f=(r("e612"),r("dd87")),p=r.n(f),m=(r("075a"),r("72aa")),d=r.n(m),g=(r("b8e0"),r("a4c4")),h=r.n(g),v=(r("10cb"),r("f3ad")),b=r.n(v),w=(r("eca7"),r("3787")),y=r.n(w),x=(r("425f"),r("4105")),k=r.n(x),O=(r("1951"),r("eedf")),j=r.n(O),S=(r("a7cc"),r("df33")),R=r.n(S),C=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},$=[],I=(r("034f"),r("2877")),N={},P=Object(I["a"])(N,_,$,!1,null,null,null),U=P.exports,T=r("8c4f"),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isLogin?r("Recommend"):r("SignIn",{on:{onLoginSuccess:e.onLoginSuccess}})],1)},L=[],q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"title"},[e._v("请登录")]),r("el-form",{ref:"loginForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{prop:"userName"}},[r("el-input",{attrs:{maxlength:"12","show-word-limit":"","prefix-icon":"el-icon-user",placeholder:"用户名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",maxlength:"12","show-word-limit":"","prefix-icon":"el-icon-unlock",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",[r("el-button",{staticClass:"btn",attrs:{type:"primary",round:""},on:{click:e.onSubmit}},[e._v("登录")])],1)],1)],1)},M=[],A=(r("96cf"),r("1da1")),F=(r("a15b"),r("fb6a"),r("ac1f"),r("5319"),r("1276"),{});function J(e,t,r){var n,a=Object.assign({},F,r);if("number"===typeof a.expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*a.expires),a.expires=o}a.expires=a.expires?a.expires.toUTCString():"";try{n=JSON.stringify(t),/^[{[]/.test(n)&&(t=n),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}catch(u){}e=encodeURIComponent(String(e)),e=e.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),e=e.replace(/[()]/g,escape);var s="";for(var i in a)a[i]&&(s+="; "+i,!0!==a[i]&&(s+="="+a[i]));return document.cookie=e+"="+t+s}function D(e,t){var r;e||(r={});for(var n=document.cookie?document.cookie.split("; "):[],a=/(%[0-9A-Z]{2})+/g,o=0;o<n.length;o++){var s=n[o].split("="),i=s.slice(1).join("=");'"'===i.charAt(0)&&(i=i.slice(1,-1));try{var u=s[0].replace(a,decodeURIComponent);if(i=i.replace(a,decodeURIComponent),t)try{i=JSON.parse(i)}catch(c){}if(e===u){r=i;break}e||(r[u]=i)}catch(c){}}return r}function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};J(e,"",Object.assign(t,{expires:-1}))}var B={get:D,set:J,remove:K},H="dToken",z="dId",G="dAvatar",V=function(){B.set(H,""),B.set(z,""),B.set(G,""),window.location.href=location.origin},W=function(){return{token:B.get(H)||"",id:B.get(z)||"",avatar:B.get(G)||0}},Z=function(e){var t=e.token,r=e.id,n=e.avatar;B.set(H,t),B.set(z,r),B.set(G,n)},Q=function(e){var t=e.status,r=e.data,n=e.message,a=e.tip,o=void 0===a||a;return 0!==t&&n&&o&&C["default"].prototype.$message({type:"error",message:n,onClose:function(){401===t&&(V(),window.location.reload())}}),r},X=(r("caad"),r("c975"),r("a434"),r("d3b7"),r("bc3a")),Y=r.n(X),ee=Y.a.create(),te=[],re=Y.a.CancelToken,ne=function(e){var t=te.indexOf(e);t>-1&&te.splice(t,1)};function ae(e){return oe.apply(this,arguments)}function oe(){return oe=Object(A["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,s,i,u,c,l,f,p,m,d,g,h,v,b,w,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.url,n=t.param,a=t.method,o=void 0===a?"POST":a,s=t.isCodeAutoHandle,i=void 0!==s&&s,u=t.contentType,c=t.connectTimeout,l=void 0===c?5e3:c,f=t.customHeaders,p=t.withCredentials,m=void 0===p||p,d=t.originalOptions,g=void 0===d?{}:d,h=function(e){var t=e.data;return i&&(parseInt(t.code)||isNaN(parseInt(t.code)))?Promise.reject(t):Promise.resolve(t)},v=function(e){return Promise.reject(e)},b=W(),w=f||{"Content-Type":u||"application/json","d-token":b.token,"d-id":b.id},y=Object.assign({headers:w,withCredentials:m,timeout:l},g),"POST"!==o.toLocaleUpperCase()){e.next=10;break}return e.abrupt("return",ee.post(r,n,y).then(h).catch(v));case 10:return e.abrupt("return",ee.get(r,Object.assign({},{params:n},y)).then(h).catch(v));case 11:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}ee.interceptors.request.use((function(e){e.fetchKey=JSON.stringify(e);var t=re.source();return e.cancelToken=t.token,te.includes(e.fetchKey)?t.cancel("stop repeated request url: ".concat(e.url)):te.push(e.fetchKey),e}),(function(e){return Promise.reject(e)})),ee.interceptors.response.use((function(e){var t=e.config,r=t.fetchKey;return ne(r),e}),(function(e){var t=e.config;if(t){var r=t.fetchKey;ne(r)}return Promise.reject(e)}));var se=ae,ie="https://zhuhao.ink/node/i";var ue=ie+"/login",ce=ie+"/getMyJoinTeams",le=ie+"/getAllTags",fe=ie+"/createDoc";function pe(e){return me.apply(this,arguments)}function me(){return me=Object(A["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se({url:ue,param:t,method:"post"});case 2:return r=e.sent,n=r.status,a=r.data,o=r.message,e.abrupt("return",Q({status:n,data:a,message:o}));case 7:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}var de={data:function(){return{dialogVisible:!0,form:{userName:"",password:""},rules:{userName:[{required:!0,message:"请输用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:"blur"}]}}},methods:{onSubmit:function(){var e=this;this.$refs.loginForm.validate(function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,pe(e.form);case 3:n=t.sent,n&&(Z({token:n.token,id:n.id,avatar:n.avatar}),e.$refs.loginForm.resetFields(),e.$emit("onLoginSuccess"));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},ge=de,he=(r("7706"),Object(I["a"])(ge,q,M,!1,null,"7b4c1ff5",null)),ve=he.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px",size:"small",rules:e.rules}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{maxlength:"100","show-word-limit":"",placeholder:"请填写标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"链接地址",prop:"sourceUrl"}},[r("el-input",{attrs:{maxlength:"500","show-word-limit":"",placeholder:"请填写链接地址"},model:{value:e.form.sourceUrl,callback:function(t){e.$set(e.form,"sourceUrl",t)},expression:"form.sourceUrl"}})],1),r("el-form-item",{attrs:{label:"标签选择"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择文章标签"},model:{value:e.form.tags,callback:function(t){e.$set(e.form,"tags",t)},expression:"form.tags"}},e._l(e.tags,(function(e){return r("el-option",{key:e.tagName,attrs:{label:e.tagName,value:e.tagName}})})),1)],1),r("el-form-item",{attrs:{label:"推荐团队"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",placeholder:"未关联团队则直接发布到首页"},model:{value:e.form.teamId,callback:function(t){e.$set(e.form,"teamId",t)},expression:"form.teamId"}},e._l(e.teams,(function(e){return r("el-option",{key:e.teamId,attrs:{label:e.teamName,value:e.teamId}})})),1)],1),r("el-form-item",{attrs:{label:"推荐理由",prop:"reason"}},[r("el-input",{attrs:{type:"textarea",rows:"10",placeholder:"请填写推荐理由"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("推荐")])],1)],1)],1)},we=[];r("a4d3"),r("e01a");function ye(){return xe.apply(this,arguments)}function xe(){return xe=Object(A["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se({url:ce,method:"get"});case 2:return t=e.sent,r=t.status,n=t.data,a=t.message,e.abrupt("return",Q({status:r,data:n,message:a}));case 7:case"end":return e.stop()}}),e)}))),xe.apply(this,arguments)}function ke(){return Oe.apply(this,arguments)}function Oe(){return Oe=Object(A["a"])(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se({url:le,method:"get"});case 2:return t=e.sent,r=t.status,n=t.data,a=t.message,e.abrupt("return",Q({status:r,data:n,message:a}));case 7:case"end":return e.stop()}}),e)}))),Oe.apply(this,arguments)}function je(e){return Se.apply(this,arguments)}function Se(){return Se=Object(A["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,se({url:fe,param:t,method:"post"});case 2:return r=e.sent,n=r.status,a=r.data,o=r.message,e.abrupt("return",Q({status:n,data:a,message:o}));case 7:case"end":return e.stop()}}),e)}))),Se.apply(this,arguments)}var Re=function(){return new Promise((function(e,t){try{chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{action:"GET_CUR_PAGE_INFO"},(function(t){e(t)}))}))}catch(r){t(r)}}))},Ce="onClose",_e={data:function(){return{dialogVisible:!0,teams:[],tags:[],form:{title:"",sourceUrl:"",tags:[],teamId:"",reason:""},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}],sourceUrl:[{required:!0,message:"链接地址不能为空",trigger:"blur"}],reason:[{required:!0,message:"推荐理由不能为空",trigger:"blur"}]}}},created:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ye();case 2:return e.teams=t.sent,t.next=5,ke();case 5:return e.tags=t.sent,t.next=8,Re();case 8:r=t.sent,e.form.title=r.title,e.form.sourceUrl=r.href,e.form.reason=r.description;case 12:case"end":return t.stop()}}),t)})))()},methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,je(e.form);case 3:n=t.sent,n&&(e.$message.success("推荐成功"),e.$emit(Ce));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},$e=_e,Ie=(r("b91e"),Object(I["a"])($e,be,we,!1,null,null,null)),Ne=Ie.exports,Pe={data:function(){return{isLogin:!1}},components:{SignIn:ve,Recommend:Ne},created:function(){var e=W();e.token&&e.id?this.isLogin=!0:this.isLogin=!1},methods:{onLoginSuccess:function(){this.isLogin=!0}}},Ue=Pe,Te=Object(I["a"])(Ue,E,L,!1,null,"857ee53e",null),Ee=Te.exports;C["default"].use(T["a"]);var Le=[{path:"/",name:"Home",component:Ee}],qe=new T["a"]({routes:Le}),Me=qe,Ae=r("2f62");C["default"].use(Ae["a"]);var Fe=new Ae["a"].Store({state:{},mutations:{},actions:{},modules:{}});C["default"].use(R.a),C["default"].use(j.a),C["default"].use(k.a),C["default"].use(y.a),C["default"].use(b.a),C["default"].use(h.a),C["default"].use(d.a),C["default"].use(p.a),C["default"].use(l.a),C["default"].use(u.a),C["default"].use(s.a),C["default"].prototype.$message=a.a,C["default"].config.productionTip=!1,new C["default"]({router:Me,store:Fe,render:function(e){return e(U)}}).$mount("#app")}});
//# sourceMappingURL=app.cdb720f9.js.map