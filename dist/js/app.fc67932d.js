(function(e){function t(t){for(var o,a,u=t[0],i=t[1],l=t[2],d=0,b=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19a0":function(e,t,n){e.exports=n.p+"media/easter-egg.8176d09e.wav"},"3c25":function(e,t,n){},"4f7c":function(e,t,n){"use strict";n("6ae3")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t){var n=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(n)}n("8779");const c={};c.render=r;var a=c,u=n("6c02"),i=Object(o["C"])("data-v-3ac88d10");Object(o["s"])("data-v-3ac88d10");var l={class:"main-panel"};Object(o["q"])();var s=i((function(e,t,n,r,c,a){var u=Object(o["w"])("UserHamburgerMenu"),i=Object(o["w"])("Header"),s=Object(o["w"])("GamesTable");return Object(o["p"])(),Object(o["d"])("div",l,[Object(o["g"])(u),Object(o["g"])(i),Object(o["g"])(s)])})),d=n("f773"),b=n.n(d),p=Object(o["C"])("data-v-87e0159a");Object(o["s"])("data-v-87e0159a");var f={class:"header__main-panel"},g=Object(o["g"])("img",{src:b.a},null,-1);Object(o["q"])();var O=p((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",f,[g])})),j={name:"Header"};n("b01c");j.render=O,j.__scopeId="data-v-87e0159a";var m=j,v=Object(o["C"])("data-v-7bd971b2");Object(o["s"])("data-v-7bd971b2");var h={class:"games-table__main-table"},y={class:"games-table__games-container"};Object(o["q"])();var w=v((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",h,[Object(o["g"])("div",y,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(c.games,(function(e,t){return Object(o["p"])(),Object(o["d"])("div",{key:t,onClick:function(t){return a.redirect(e.url)}},[Object(o["g"])("img",{src:e.img},null,8,["src"])],8,["onClick"])})),128))])])})),_=[{name:"Unseen",url:"/unseen",img:n("ce84")}],k={name:"GamesTable",data:function(){return{games:_}},methods:{redirect:function(e){window.location.pathname=e}}};n("7db1");k.render=w,k.__scopeId="data-v-7bd971b2";var C=k,P=n("cf05"),x=n.n(P),T=n("a405"),G=n.n(T),H=Object(o["C"])("data-v-bfdfc0f0");Object(o["s"])("data-v-bfdfc0f0");var q={class:"user-hamburger-menu__menu"},I={key:0,class:"logged-menu"},M=Object(o["f"])("Username: "),S={key:1,class:"not-logged-menu"},A=Object(o["g"])("p",null,"You are currently not logged in",-1),U=Object(o["g"])("img",{src:G.a},null,-1);Object(o["q"])();var E=H((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!c.show}],onClick:t[6]||(t[6]=Object(o["B"])((function(){}),["stop"]))},[Object(o["g"])("div",q,[Object(o["g"])("img",{class:"home-button",src:x.a,onClick:t[1]||(t[1]=function(){return a.playAudio&&a.playAudio.apply(a,arguments)})}),c.username?(Object(o["p"])(),Object(o["d"])("div",I,[Object(o["g"])("div",null,[Object(o["g"])("p",null,[M,Object(o["g"])("strong",null,Object(o["y"])(decodeURIComponent(c.username)),1)]),Object(o["g"])("button",{onClick:t[2]||(t[2]=function(){return a.logout&&a.logout.apply(a,arguments)})},"Logout")]),c.logged?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("button",{key:0,class:"proceed-with-google",onClick:t[3]||(t[3]=function(){return a.redirectToGoogle&&a.redirectToGoogle.apply(a,arguments)})},"Activate sync with google"))])):(Object(o["p"])(),Object(o["d"])("div",S,[A,Object(o["g"])("button",{class:"proceed-with-google",onClick:t[4]||(t[4]=function(){return a.redirectToGoogle&&a.redirectToGoogle.apply(a,arguments)})},"Sign in now with google")]))]),Object(o["g"])("div",{class:["user-hamburger-menu__icon",{rotated:c.show}],onClick:t[5]||(t[5]=function(e){return c.show=!c.show})},[U],2)],2)})),J="https://papero.tk/user/get_info",$="https://papero.tk/auth/logout",L=n("bc3a"),R=n.n(L),B={name:"UserHamburgerMenu",data:function(){return{show:!1,username:null,logged:!1}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.show=!1})),R.a.get(J).then((function(t){t.data&&(e.username=t.data.username,e.logged=t.data.google_signed_in)}))},methods:{redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e},logout:function(){R.a.get($),this.username=null,this.logged=!1},playAudio:function(){var e=document.createElement("audio");e.src=n("19a0"),e.setAttribute("preload","auto"),e.setAttribute("controls","none"),e.style.display="none",document.body.appendChild(e),e.play()}}};n("c269");B.render=E,B.__scopeId="data-v-bfdfc0f0";var N=B,W={name:"Home",components:{UserHamburgerMenu:N,GamesTable:C,Header:m}};n("7417");W.render=s,W.__scopeId="data-v-3ac88d10";var Y=W,z=Object(o["C"])("data-v-49ab9d58");Object(o["s"])("data-v-49ab9d58");var D={class:"error__main-panel"},F={class:"wrapper"},K=Object(o["g"])("h1",null,"Oops, looks like there was an error",-1),Q={key:0},V=Object(o["f"])("We were not able to redirect you to "),X=Object(o["f"])(" Try: "),Z={key:0},ee={key:1},te=Object(o["f"])("Go to our "),ne=Object(o["g"])("a",{href:"/"},"Home",-1),oe=Object(o["f"])(", maybe you shouldn't be here"),re=Object(o["g"])("li",null,"Checking your internet connection",-1),ce=Object(o["g"])("li",null,"Restarting your browser",-1),ae=Object(o["g"])("li",null,[Object(o["f"])("If the problem persists send an email at "),Object(o["g"])("a",null,"info@papero.tk")],-1);Object(o["q"])();var ue=z((function(e,t,n,r,c,a){return Object(o["p"])(),Object(o["d"])("div",D,[Object(o["g"])("div",F,[K,a.fromPath?(Object(o["p"])(),Object(o["d"])("p",Q,[V,Object(o["g"])("a",{href:a.fromPath},Object(o["y"])(a.fromPath),9,["href"])])):Object(o["e"])("",!0),X,Object(o["g"])("div",null,[Object(o["g"])("ul",null,[a.fromPath?(Object(o["p"])(),Object(o["d"])("li",Z,"Going again to the link above")):(Object(o["p"])(),Object(o["d"])("li",ee,[te,ne,oe])),re,ce,ae])])])])})),ie={name:"Error",computed:{fromPath:function(){return console.log(this.$route.query),"{}"!==JSON.stringify(this.$route.query)?location.origin+this.$route.query.from:null}}};n("4f7c");ie.render=ue,ie.__scopeId="data-v-49ab9d58";var le=ie,se=[{path:"/",name:"Home",component:Y},{path:"/error",name:"Error",component:le}],de=Object(u["a"])({history:Object(u["b"])(),routes:se}),be=de;Object(o["c"])(a).use(be).mount("#app")},5908:function(e,t,n){},"6ae3":function(e,t,n){},7417:function(e,t,n){"use strict";n("8a24")},"7db1":function(e,t,n){"use strict";n("afa5")},8779:function(e,t,n){"use strict";n("5908")},"8a24":function(e,t,n){},a405:function(e,t,n){e.exports=n.p+"img/hamburger_icon.8e3bdb1d.png"},afa5:function(e,t,n){},b01c:function(e,t,n){"use strict";n("3c25")},c269:function(e,t,n){"use strict";n("ed86")},ce84:function(e,t,n){e.exports=n.p+"img/unseen_icon.69302845.jpg"},cf05:function(e,t,n){e.exports=n.p+"img/logo.d2ad68a3.png"},ed86:function(e,t,n){},f773:function(e,t,n){e.exports=n.p+"img/title.1bcdc80f.png"}});
//# sourceMappingURL=app.fc67932d.js.map