(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="./";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"054a":function(t,e,o){"use strict";var n=o("4047"),a=o.n(n);a.a},1002:function(t,e,o){t.exports=o.p+"img/ANDY.svg"},"21bb":function(t,e,o){"use strict";var n=o("bcc9"),a=o.n(n);a.a},"2d28":function(t,e,o){t.exports=o.p+"img/logo2.svg"},"35f8":function(t,e,o){t.exports=o.p+"img/hex.svg"},"3ce7":function(t,e,o){t.exports=o.p+"img/fab.svg"},4047:function(t,e,o){},5331:function(t,e,o){},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),a=o.n(n);a.a},"5e27":function(t,e,o){},"9b19":function(t,e,o){t.exports=o.p+"img/logo.svg"},"9dab":function(t,e,o){"use strict";var n=o("b493"),a=o.n(n);a.a},b445:function(t){t.exports={Portfolio:{name:"Portfolio",type:"Personal Website",desc:"A website that I created to showcase myself and some of the awesome projects that I have worked on. Personally designed by myself in Sketch, and built using HTML, CSS, and JavaScript with Bootstrap and Vue.js frameworks.",github:"https://github.com/AndyWang99/personal-website",imagePath:"/projects/personal-website.png"},"YIKES!":{name:"YIKES!",type:"2D Arcade Game",desc:"An endless vertical runner where, you, the player, guides a ball through a maze of platforms by tilting and tapping on your phone. This game is also available in multiplayer! Created in Java using the LibGDX framework with the Box2D physics engine. Multiplayer support added using a Node.js server with Express.js and Socket.io.",github:"https://github.com/AndyWang99/YIKES",gplay:"https://play.google.com/store/apps/details?id=com.sodirea.yikes&hl=en_SG",imagePath:"/projects/yikes.webp"}}},b493:function(t,e,o){},babd:function(t,e,o){t.exports=o.p+"img/WANG.svg"},bcc9:function(t,e,o){},c496:function(t,e,o){t.exports=o.p+"img/portrait.jpg"},cd49:function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],s=o("b445"),i=n["a"].extend({name:"home",components:{},data:function(){return{json:{}}},mounted:function(){this.json=s,console.log(s)}}),c=i,l=(o("5c0b"),o("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null),p=u.exports,d=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("home"),o("about"),o("projects")],1)},b=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("b-container",{staticClass:"p-4",attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"mb-4 text-left",attrs:{md:"8"}},[n("b-row",[n("b-col",{attrs:{cols:"4",sm:"2",md:"2"}},[n("img",{staticClass:"img-fluid",attrs:{src:o("9b19")}})]),n("b-col",{staticClass:"d-flex align-items-center",attrs:{cols:"8",sm:"10",md:"10"}},[n("img",{staticClass:"img-fluid",attrs:{src:o("2d28")}})])],1)],1),n("b-col",{staticClass:"mb-4 d-flex align-items-center",attrs:{md:"4"}},[n("div",{staticClass:"position-fixed fab"},[n("img",{staticClass:"img-fluid",attrs:{src:o("3ce7")}})])])],1),n("b-row",{staticClass:"home-graphic"},[n("b-col",{staticClass:"text-left andy-container",attrs:{md:"4"}},[n("transition",{attrs:{name:"slide-right-fade",appear:""}},[n("img",{staticClass:"img-fluid",attrs:{src:o("1002")}})])],1),n("b-col",{staticClass:"my-5 hex",attrs:{md:"4"}},[n("transition",{attrs:{name:"rotate-fade",appear:""}},[n("img",{staticClass:"img-fluid",attrs:{src:o("35f8")}})])],1),n("b-col",{staticClass:"text-right wang-container",attrs:{md:"4"}},[n("transition",{attrs:{name:"slide-left-fade",appear:""}},[n("img",{staticClass:"img-fluid",attrs:{src:o("babd")}})])],1)],1)],1)],1)},g=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v(t._s(t.msg))]),o("b-btn",{attrs:{variant:"primary"}},[t._v("Super cool hover button")])],1)},v=[],j=o("b445"),w=n["a"].extend({name:"HelloWorld",props:{msg:String},data:function(){return{json:{}}},mounted:function(){this.json=j,console.log(j)}}),y=w,x=(o("f9af"),Object(l["a"])(y,h,v,!1,null,"2fdc3acd",null)),C=x.exports,_=o("b445"),k=n["a"].extend({name:"home",components:{HelloWorld:C},data:function(){return{json:{}}},mounted:function(){this.json=_,console.log(_)}}),S=k,O=(o("21bb"),Object(l["a"])(S,m,g,!1,null,null,null)),P=O.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{staticClass:"mb-4 text-left"},[n("b-row",{staticClass:"mb-4"},[n("b-col",[n("h2",[t._v("ABOUT ME")])])],1),n("b-row",{staticClass:"mb-3"},[n("b-col",[n("h3",[t._v("Developer. Wanderer.")])])],1),n("b-row",[n("b-col",[n("p",[t._v("Hi there! I'm a second year student studying Computer Science at the University of Waterloo. I have a keen interest in bringing responsive web applications to life in the browser with HTML, CSS, and JavaScript.")])])],1),n("b-row",[n("b-col",[n("p",[t._v("On my spare time, I love to take long walks and jogs around my neighbourhood as well as on community trails. I am also just beginning to dip my feet into learning visual art.")])])],1)],1),n("b-col",{staticClass:"text-right"},[n("img",{staticClass:"img-fluid portrait",attrs:{src:o("c496")}})])],1)],1)],1)},A=[],M=n["a"].extend({name:"about"}),$=M,I=(o("f26d"),Object(l["a"])($,E,A,!1,null,null,null)),T=I.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projects"},[o("b-container",{attrs:{fluid:""}},[o("b-row",[o("b-col",{staticClass:"mb-4 text-left"},[o("b-row",{staticClass:"mb-4"},[o("b-col",[o("h2",[t._v("PROJECTS")])])],1)],1)],1),o("b-row",t._l(t.json,function(e){return o("b-col",{key:e.name,staticClass:"mb-5 text-left project-pic-container",attrs:{md:"6"}},[o("div",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"project-modal"+e.name,expression:"'project-modal' + project.name"}]},[o("img",{staticClass:"px-5 img-fluid project-pic",attrs:{src:e.imagePath}}),o("div",{staticClass:"project-caption"},[o("h3",[t._v(t._s(e.name))]),o("p",[t._v(t._s(e.type))])])]),o("b-modal",{attrs:{id:"project-modal"+e.name,size:"lg","hide-header":"true","hide-footer":"true"}},[o("project-clicked",{attrs:{project:e}}),o("div",{staticClass:"px-5 mb-3"},[o("b-button",{attrs:{variant:"primary"},on:{click:function(o){t.hideModal("project-modal"+e.name)}}},[t._v("Close")])],1)],1)],1)}),1)],1)],1)},H=[],N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-clicked"},[o("b-container",{staticClass:"p-4",attrs:{fluid:""}},[o("b-row",[o("b-col",{staticClass:"mb-4 text-left"},[o("b-row",[o("b-col",[o("h2",[t._v(t._s(t.project.name))])])],1),o("b-row",{staticClass:"mb-3"},[o("b-col",[o("h3",[t._v(t._s(t.project.type))])])],1),o("b-row",[o("b-col",[o("p",[t._v(t._s(t.project.desc))])])],1),o("b-row",[o("b-col",[o("a",{attrs:{href:t.project.github,target:"_blank"}},[o("p",[t._v("Checkout the GitHub repo here!")])])])],1),null!=t.project.gplay?o("b-row",[o("b-col",[o("a",{attrs:{href:t.project.gplay,target:"_blank"}},[o("p",[t._v("Checkout the app on Google Play here!")])])])],1):t._e()],1),o("b-col",{staticClass:"text-right"},[o("img",{staticClass:"img-fluid project-image",attrs:{src:t.project.imagePath}})])],1)],1)],1)},G=[],J=n["a"].extend({name:"project-clicked",props:{project:{type:Object,required:!0}}}),D=J,B=(o("9dab"),Object(l["a"])(D,N,G,!1,null,null,null)),Y=B.exports,K=o("b445"),L=n["a"].extend({name:"projects",components:{ProjectClicked:Y},data:function(){return{json:{}}},mounted:function(){this.json=K,console.log(K)},methods:{hideModal:function(t){this.$root.$emit("bv::hide::modal",t)}}}),q=L,z=(o("054a"),Object(l["a"])(q,W,H,!1,null,null,null)),F=z.exports,U=n["a"].extend({components:{Home:P,About:T,Projects:F}}),R=U,V=Object(l["a"])(R,f,b,!1,null,null,null),X=V.exports;n["a"].use(d["a"]);var Q=new d["a"]({mode:"history",base:"./",routes:[{path:"/",name:"main",component:X}]}),Z=o("9483");Object(Z["a"])("".concat("./","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("21b6");var tt=o("9f7b");n["a"].use(tt["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Q,render:function(t){return t(p)}}).$mount("#app")},f198:function(t,e,o){},f26d:function(t,e,o){"use strict";var n=o("5331"),a=o.n(n);a.a},f9af:function(t,e,o){"use strict";var n=o("f198"),a=o.n(n);a.a}});
//# sourceMappingURL=app.js.map