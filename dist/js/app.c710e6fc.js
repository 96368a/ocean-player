(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09cc9ace":"9ae05a2c","chunk-2353dbf3":"db8917d0","chunk-c523239a":"6ff0eefd"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09cc9ace":1,"chunk-2353dbf3":1,"chunk-c523239a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-09cc9ace":"cab566b4","chunk-2353dbf3":"1888c0f6","chunk-c523239a":"d028a4f9"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";n("a434"),n("d3b7");var r=n("5502"),o=n("b775");t["a"]=Object(r["a"])({state:{user:{username:null},tagsList:[],collapse:!1},mutations:{delTagsItem:function(e,t){e.tagsList.splice(t.index,1)},setTagsItem:function(e,t){e.tagsList.push(t)},clearTags:function(e){e.tagsList=[]},closeTagsOther:function(e,t){e.tagsList=t},closeCurrentTag:function(e,t){for(var n=0,r=e.tagsList.length;n<r;n++){var o=e.tagsList[n];if(o.path===t.$route.fullPath){n<r-1?t.$router.push(e.tagsList[n+1].path):n>0?t.$router.push(e.tagsList[n-1].path):t.$router.push("/"),e.tagsList.splice(n,1);break}}},handleCollapse:function(e,t){e.collapse=t},set_user:function(e,t){e.user.username=t.username,e.user.id=t.id}},getters:{user:function(e){return e.user}},actions:{getInfo:function(e){var t=e.commit;e.state;return new Promise((function(e,n){o["a"].get("/api/info").then((function(n){t("set_user",n.data),e()})).catch((function(e){n(e)}))}))}}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var r=n("7a23");function o(e,t,n,o,c,a){var u=Object(r["O"])("HeaderNav"),i=Object(r["O"])("router-view");return Object(r["F"])(),Object(r["k"])("div",null,[o.state.isShowNav?(Object(r["F"])(),Object(r["k"])(u,{key:0})):Object(r["l"])("",!0),Object(r["o"])(i,{style:{"padding-top":"50px"}})])}n("caad");var c=n("9b19"),a=n.n(c),u=Object(r["hb"])("data-v-e519b758");Object(r["I"])("data-v-e519b758");var i={class:"nav"},s={class:"nav-content"},l=Object(r["o"])("img",{class:"logo",src:a.a,alt:"BiaoChenXuYing"},null,-1),d=Object(r["o"])("span",{class:"logo-title"},"Ocean",-1),f={class:"menu-txt"},m={class:"nav-right"},p={class:"drop-title-box"},b={class:"el-dropdown-link drop-title"},h=Object(r["n"])("个人中心"),O=Object(r["n"])("登出"),g={class:"nav-right"},j=Object(r["n"])("登录"),v=Object(r["n"])("注册");Object(r["G"])();var k=u((function(e,t,n,o,c,a){var k=Object(r["O"])("router-link"),y=Object(r["O"])("el-col"),w=Object(r["O"])("el-menuItem"),_=Object(r["O"])("el-menu"),x=Object(r["O"])("el-dropdown-item"),E=Object(r["O"])("el-dropdown-menu"),S=Object(r["O"])("el-dropdown"),C=Object(r["O"])("el-button"),L=Object(r["O"])("el-row");return Object(r["F"])(),Object(r["k"])("div",i,[Object(r["o"])("div",s,[Object(r["o"])(L,{gutter:20},{default:u((function(){return[Object(r["o"])(y,{span:3},{default:u((function(){return[Object(r["o"])(k,{to:"/",class:"logo-menu"},{default:u((function(){return[l,d]})),_:1})]})),_:1}),Object(r["o"])(y,{span:16},{default:u((function(){return[Object(r["o"])(_,{router:!0,"active-text-color":"#409eff","text-color":"#c7c7c7","background-color":"#0E1F3E",class:"el-menu-demo",mode:"horizontal",onSelect:a.handleSelect},{default:u((function(){return[(Object(r["F"])(!0),Object(r["k"])(r["b"],null,Object(r["M"])(o.menuList,(function(e){return Object(r["F"])(),Object(r["k"])(w,{route:e.path,index:e.index,key:e.index,class:"menu-item"},{default:u((function(){return[Object(r["o"])("a",f,Object(r["S"])(e.name),1)]})),_:2},1032,["route","index"])})),128))]})),_:1},8,["onSelect"])]})),_:1}),o.userInfo.id?(Object(r["F"])(),Object(r["k"])(y,{key:0,span:5},{default:u((function(){return[Object(r["o"])("div",m,[Object(r["o"])(S,{onCommand:a.handleCommand,class:"drop-demo"},{dropdown:u((function(){return[Object(r["o"])(E,{class:"dropdown-menu-demo"},{default:u((function(){return[Object(r["o"])(x,{command:"profile"},{default:u((function(){return[h]})),_:1}),Object(r["o"])(x,{command:"logout"},{default:u((function(){return[O]})),_:1})]})),_:1})]})),default:u((function(){return[Object(r["o"])("div",p,[Object(r["o"])("span",b,Object(r["S"])(o.userInfo.username),1)])]})),_:1},8,["onCommand"])])]})),_:1})):(Object(r["F"])(),Object(r["k"])(y,{key:1,span:4},{default:u((function(){return[Object(r["o"])("div",g,[Object(r["o"])("div",null,[Object(r["o"])(C,{size:"small",type:"primary",onClick:t[1]||(t[1]=function(e){return a.handleClick("login")})},{default:u((function(){return[j]})),_:1}),Object(r["o"])(C,{size:"small",type:"danger",onClick:t[2]||(t[2]=function(e){return a.handleClick("register")})},{default:u((function(){return[v]})),_:1})])])]})),_:1}))]})),_:1})])])})),y=n("5502"),w=n("b775"),_=n("4360"),x={name:"Nav",setup:function(){var e=Object(y["b"])(),t=e.getters.user,n=[{index:"1",path:"/",name:"赛事中心"},{index:"2",path:"/notice",name:"公告"},{index:"3",path:"/rank",name:"榜单"}];return{menuList:n,userInfo:t}},methods:{handleCommand:function(e){"logout"===e&&this.handleLogout()},handleLogout:function(){w["a"].post("/api/logout").then((function(e){_["a"].commit("set_user",{})}))},handleSelect:function(){},handleClick:function(e){this.$router.push(e)}}};n("e328");x.render=k,x.__scopeId="data-v-e519b758";var E=x,S=n("a1e9"),C=n("6c02"),L=n("5c40"),P={name:"App",components:{HeaderNav:E},watch:{$route:function(e,t){this.routeChange(e,t)}},setup:function(){var e=Object(S["j"])({isShowNav:!1,isShowSlider:!1}),t=Object(C["c"])(),n=function(t,n){e.isShowNav="/"!==t.path;var r=["/login"];e.isShowNav=!r.includes(t.path)};return Object(L["H"])((function(){n(t,t)})),{state:e,routeChange:n}}};n("f872");P.render=o;var N=P,I=(n("d3b7"),n("3ca3"),n("ddb0"),[{path:"/login",name:"login",component:function(){return n.e("chunk-09cc9ace").then(n.bind(null,"d9c9"))},meta:{auth:!1}},{path:"/register",name:"register",component:function(){return n.e("chunk-c523239a").then(n.bind(null,"c5cb"))},meta:{auth:!1}},{path:"/",name:"center",component:function(){return n.e("chunk-2353dbf3").then(n.bind(null,"9f50"))},meta:{auth:!1}}]),T=Object(C["a"])({history:Object(C["b"])(),routes:I}),A=T,F=n("1da1"),B=(n("96cf"),n("323e")),$=n.n(B),q=(n("a5d8"),n("f3e4"));A.beforeEach(function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if($.a.start(),o=Object(q["a"])(),c=_["a"].getters.user,!o||c.id){e.next=6;break}return e.next=6,_["a"].dispatch("getInfo");case 6:t.meta.auth?o?(r(),$.a.done()):(r("/login?redirect=".concat(t.path)),$.a.done()):(r(),$.a.done());case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),A.afterEach((function(){$.a.done()}));n("7dd6");var M=n("7864"),z=Object(r["j"])(N);z.component(M["a"].name,M["a"]),z.component(M["e"].name,M["e"]),z.component(M["i"].name,M["i"]),z.component(M["j"].name,M["j"]),z.component(M["l"].name,M["l"]),z.component(M["o"].name,M["o"]),z.component(M["m"].name,M["m"]),z.component(M["n"].name,M["n"]),z.component(M["p"].name,M["p"]),z.component(M["c"].name,M["c"]),z.component(M["h"].name,M["h"]),z.component(M["r"].name,M["r"]),z.component(M["s"].name,M["s"]),z.component(M["g"].name,M["g"]),z.component(M["f"].name,M["f"]),z.component(M["b"].name,M["b"]),z.component(M["q"].name,M["q"]),z.component(M["k"].name,M["k"]),z.component(M["d"].name,M["d"]),z.use(A),z.use(_["a"]),z.mount("#app")},"96a5":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.73053057.svg"},b775:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),o=n.n(r),c=(n("4360"),n("f3e4")),a=n("7864"),u=o.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_API,timeout:5e3});u.interceptors.request.use((function(e){var t=Object(c["a"])();return t&&(e.headers["authorization"]=t),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 0===t.code?t:4003===t.code?(Object(c["b"])(),Promise.reject(new Error(t.msg||"Error"))):(Object(a["o"])({message:t.msg||"Error",type:"error",duration:5e3}),Promise.reject(new Error(t.msg||"Error")))}),(function(e){return Object(a["o"])({message:"服务器繁忙、请稍后再试！",type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=u},cd2d:function(e,t,n){},e328:function(e,t,n){"use strict";n("cd2d")},f3e4:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n("852e"),o=n.n(r),c="token";function a(){return o.a.get(c)}function u(e){return o.a.set(c,e)}function i(){return o.a.remove(c)}},f872:function(e,t,n){"use strict";n("96a5")}});
//# sourceMappingURL=app.c710e6fc.js.map