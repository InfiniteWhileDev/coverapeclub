(this.webpackJsonpCovertApeClub=this.webpackJsonpCovertApeClub||[]).push([[0],{249:function(e,t){},258:function(e,t){},276:function(e,t){},278:function(e,t){},297:function(e,t){},298:function(e,t){},361:function(e,t){},363:function(e,t){},396:function(e,t){},398:function(e,t){},399:function(e,t){},404:function(e,t){},406:function(e,t){},412:function(e,t){},414:function(e,t){},427:function(e,t){},439:function(e,t){},442:function(e,t){},447:function(e,t){},455:function(e,t){},464:function(e,t){},466:function(e,t){},538:function(e,t,n){},541:function(e,t,n){"use strict";n.r(t);var a,i,c,s,r,o,l,d,j,h,b,x,m,p,O,g,f=n(1),u=n(87),v=n.n(u),_=n(18),C=n.n(_),w=n(46),y=n(71),N=n(16),I=n(26),S=(n(70),n(224),n(72)),A=n(225),T=n(21),E={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(T.a)(Object(T.a)({},E),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(T.a)(Object(T.a)({},E),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(T.a)(Object(T.a)({},e),{},{account:t.payload.account});default:return e}},L={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(T.a)(Object(T.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(T.a)(Object(T.a)({},L),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},B=Object(S.b)({blockchain:k,data:M}),D=[A.a],F=Object(S.c)(S.a.apply(void 0,D)),U=Object(S.d)(B,F),H=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},R=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,U.getState().blockchain.smartContract.methods.totalSupply().call();case 4:return n=e.sent,e.next=7,U.getState().blockchain.smartContract.methods.cost().call();case 7:a=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n,cost:a}}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),t(H("Could not load data from contract."));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},Z=n(14),G=Z.a.div(a||(a=Object(N.a)(["\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),z=(Z.a.div(i||(i=Object(N.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Z.a.div(c||(c=Object(N.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z.a.div(s||(s=Object(N.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z.a.div(r||(r=Object(N.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z.a.div(o||(o=Object(N.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),P=(Z.a.p(l||(l=Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),Z.a.p(d||(d=Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Z.a.p(j||(j=Object(N.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))),Z.a.div(h||(h=Object(N.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(10)),K=n.n(P),V=n(0),W=(Z.a.button(b||(b=Object(N.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 15px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100%;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Z.a.button(x||(x=Object(N.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),Z.a.div(m||(m=Object(N.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))));Z.a.img(p||(p=Object(N.a)(["\n  width: 400px;\n  @media (min-width: 767px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Z.a.img(O||(O=Object(N.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  background-color: var(--accent);\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),Z.a.a(g||(g=Object(N.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var J=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return e.blockchain})),n=(Object(I.c)((function(e){return e.data})),Object(f.useState)(!1)),a=Object(y.a)(n,2),i=(a[0],a[1],Object(f.useState)("Minting starts on JAN 14th 3pm EST, any mints before this time will fail")),c=Object(y.a)(i,2),s=(c[0],c[1],Object(f.useState)(1)),r=Object(y.a)(s,2),o=(r[0],r[1],Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1})),l=Object(y.a)(o,2),d=(l[0],l[1]),j=function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){j()})),Object(f.useEffect)((function(){""!==t.account&&null!==t.smartContract&&e(R(t.account))}),[t.account]),Object(V.jsx)(G,{children:Object(V.jsxs)(z,{className:"apeBg",children:[Object(V.jsx)("div",{className:"nav container",children:Object(V.jsx)(K.a,{animateIn:"animate__slideInDown",animateOnce:!0,children:Object(V.jsxs)("ul",{className:"nav-list",children:[Object(V.jsxs)("li",{className:"navflexlogo",children:[" ",Object(V.jsx)("a",{children:" LOGO"})," "]}),Object(V.jsxs)("div",{className:"navflexlogo",children:[Object(V.jsxs)("li",{children:["   ",Object(V.jsx)("a",{className:"",href:"https://twitter.com/thephoodles",target:"_new",children:" TWITTER"})]}),Object(V.jsxs)("li",{children:["  ",Object(V.jsx)("a",{href:" https://discord.gg/zpHtFZqyfV",target:"_new",children:"  DISCORD"})]})]})]})})}),Object(V.jsx)("div",{className:"centerPos",children:Object(V.jsxs)(K.a,{animateIn:"animate__bounceInDown",animateOnce:!0,children:[Object(V.jsxs)("div",{className:"title-svg desktop_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/title.svg"})]}),Object(V.jsxs)("div",{className:"title-svg mobile_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/logotxt_mobile.svg"})]})]})}),Object(V.jsx)("div",{className:"apeslide",children:Object(V.jsx)(K.a,{animateIn:"animate__slideInRight",animateOnce:!0,children:Object(V.jsx)("img",{src:"config/images/apehome.png"})})}),Object(V.jsx)("div",{className:"apeslide-left",children:Object(V.jsx)(K.a,{animateIn:"animate__slideInLeft",animateOnce:!0,children:Object(V.jsx)("img",{src:"config/images/monkey_left.png"})})}),Object(V.jsx)("div",{className:"apeslide-left-mobile",children:Object(V.jsx)(K.a,{animateIn:"animate__slideInLeft",animateOnce:!0,children:Object(V.jsx)("img",{src:"config/images/monkey_left-mobile.png"})})}),Object(V.jsx)("div",{className:"centerPos",children:Object(V.jsx)(K.a,{animateIn:"animate__zoomIn",animateOnce:!0,children:Object(V.jsxs)("div",{className:"homeBtn",children:[Object(V.jsx)("a",{href:"#",children:" Mint"}),Object(V.jsxs)("a",{href:"#",children:["  ",Object(V.jsxs)("span",{children:[" ",Object(V.jsxs)("svg",{width:"45",height:"45",viewBox:"0 0 45 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(V.jsx)("path",{d:"M43.6648 22.0824C43.6648 34.0013 34.0013 43.6648 22.0824 43.6648C10.1634 43.6648 0.5 34.0013 0.5 22.0824C0.5 10.1634 10.1634 0.5 22.0824 0.5C34.0039 0.5 43.6648 10.1634 43.6648 22.0824Z",fill:"#2081E2",stroke:"url(#paint0_linear_120_65)"}),Object(V.jsx)("path",{d:"M10.8946 22.8245L10.9899 22.6747L16.7344 13.6881C16.8183 13.5566 17.0157 13.5702 17.0792 13.7131C18.0389 15.8639 18.867 18.5387 18.4791 20.204C18.3134 20.8892 17.8597 21.8171 17.3492 22.6747C17.2834 22.7995 17.2108 22.922 17.1337 23.04C17.0974 23.0944 17.0361 23.1262 16.9703 23.1262H11.0625C10.9036 23.1262 10.8106 22.9538 10.8946 22.8245Z",fill:"white"}),Object(V.jsx)("path",{d:"M36.4998 24.4942V25.9167C36.4998 25.9983 36.4499 26.0709 36.3773 26.1027C35.9326 26.2932 34.4102 26.992 33.7773 27.8723C32.1619 30.1207 30.9277 33.3355 28.1689 33.3355H16.6594C12.5803 33.3355 9.27466 30.0186 9.27466 25.9257V25.7941C9.27466 25.6852 9.36312 25.5968 9.47203 25.5968H15.8881C16.0151 25.5968 16.1081 25.7147 16.0968 25.8395C16.0514 26.2569 16.1286 26.6835 16.326 27.0714C16.7071 27.8451 17.4966 28.3284 18.3497 28.3284H21.526V25.8486H18.386C18.2249 25.8486 18.1297 25.6625 18.2227 25.531C18.2567 25.4788 18.2953 25.4244 18.3361 25.3631C18.6333 24.9411 19.0576 24.2854 19.4795 23.539C19.7677 23.0353 20.0467 22.4976 20.2713 21.9577C20.3167 21.8601 20.353 21.7603 20.3893 21.6627C20.4506 21.4903 20.5141 21.3292 20.5595 21.1681C20.6049 21.032 20.6411 20.8891 20.6774 20.7552C20.7841 20.2969 20.8294 19.8114 20.8294 19.3078C20.8294 19.1104 20.8204 18.9039 20.8022 18.7065C20.7931 18.491 20.7659 18.2754 20.7387 18.0599C20.7205 17.8694 20.6865 17.681 20.6502 17.4837C20.6049 17.1955 20.5413 16.9097 20.4687 16.6215L20.4438 16.5127C20.3893 16.3152 20.3439 16.127 20.2804 15.9296C20.1012 15.3102 19.8947 14.7067 19.6769 14.1418C19.5975 13.9172 19.5068 13.7017 19.416 13.4861C19.2822 13.1617 19.146 12.8668 19.0212 12.5877C18.9577 12.4606 18.9033 12.3449 18.8488 12.2269C18.7876 12.0931 18.7241 11.9592 18.6605 11.8322C18.6152 11.7346 18.563 11.6439 18.5266 11.5531L18.1387 10.8362C18.0842 10.7386 18.175 10.6229 18.2816 10.6524L20.7092 11.3104H20.716C20.7205 11.3104 20.7228 11.3126 20.7251 11.3126L21.045 11.4011L21.3967 11.501L21.526 11.5372V10.0943C21.526 9.3978 22.0841 8.83289 22.7738 8.83289C23.1186 8.83289 23.4317 8.97355 23.6563 9.20268C23.8809 9.43185 24.0216 9.74493 24.0216 10.0943V12.236L24.2803 12.3086C24.3007 12.3155 24.3211 12.3245 24.3392 12.3381C24.4028 12.3858 24.4935 12.4561 24.6092 12.5423C24.7 12.6149 24.7975 12.7034 24.9155 12.7942C25.1492 12.9824 25.4282 13.2252 25.7345 13.5043C25.8162 13.5746 25.8956 13.6472 25.9682 13.7198C26.363 14.0873 26.8054 14.5184 27.2274 14.9948C27.3453 15.1287 27.461 15.2648 27.579 15.4077C27.697 15.553 27.8218 15.6959 27.9307 15.8388C28.0736 16.0294 28.2279 16.2268 28.3617 16.4332C28.4253 16.5308 28.4979 16.6306 28.5591 16.7282C28.7315 16.9891 28.8836 17.2591 29.0288 17.5291C29.09 17.6538 29.1535 17.7899 29.208 17.9238C29.3691 18.2845 29.4961 18.6521 29.5778 19.0196C29.6027 19.099 29.6209 19.1852 29.63 19.2624V19.2805C29.6572 19.3894 29.6663 19.5051 29.6753 19.6231C29.7116 19.9997 29.6935 20.3763 29.6118 20.7552C29.5778 20.9163 29.5324 21.0683 29.478 21.2294C29.4235 21.3837 29.3691 21.5447 29.2987 21.6968C29.1626 22.0121 29.0015 22.3275 28.8109 22.6224C28.7497 22.7313 28.6771 22.847 28.6045 22.9559C28.5251 23.0716 28.4434 23.1805 28.3708 23.2872C28.271 23.4233 28.1644 23.5662 28.0555 23.6933C27.9579 23.8271 27.8581 23.961 27.7492 24.079C27.5972 24.2582 27.452 24.4283 27.2999 24.5917C27.2092 24.6983 27.1117 24.8072 27.0118 24.9048C26.9143 25.0137 26.8144 25.1112 26.7237 25.202C26.5717 25.354 26.4446 25.472 26.338 25.5695L26.0884 25.7987C26.0521 25.8304 26.0045 25.8486 25.9546 25.8486H24.0216V28.3284H26.4537C26.9982 28.3284 27.5155 28.1355 27.9329 27.7816C28.0759 27.6568 28.6998 27.1168 29.4371 26.3023C29.4621 26.2751 29.4939 26.2547 29.5302 26.2456L36.2479 24.3036C36.3727 24.2673 36.4998 24.3625 36.4998 24.4942Z",fill:"white"}),Object(V.jsx)("defs",{children:Object(V.jsxs)("linearGradient",{id:"paint0_linear_120_65",x1:"22",y1:"-9.5",x2:"22.0824",y2:"44.1648",gradientUnits:"userSpaceOnUse",children:[Object(V.jsx)("stop",{"stop-color":"white"}),Object(V.jsx)("stop",{offset:"0.755099","stop-color":"white","stop-opacity":"0"})]})})]})]})," OpenSea"]})]})})}),Object(V.jsx)(W,{flex:1,style:{padding:24},className:"mister"})]})})};n(219);var Y=function(){return Object(V.jsx)("div",{className:"section-about",children:Object(V.jsxs)("div",{className:"",children:[Object(V.jsx)("div",{className:"centerPos",children:Object(V.jsxs)(K.a,{animateIn:"animate__slideInRight",animateOnce:!0,children:[Object(V.jsxs)("div",{className:"title-svg desktop_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/abouttxt.svg"})," "]}),Object(V.jsxs)("div",{className:"title-svg mobile_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/abouttxt_mobile.svg"})," "]})]})}),Object(V.jsxs)("div",{className:"features",children:[Object(V.jsxs)("div",{className:" half-half vert desktop-pam",children:[Object(V.jsx)("img",{class:"palm-img",src:"/config/images/palm_tree.png"}),Object(V.jsx)("img",{class:"palm-grass",src:"/config/images/tree_grass.png"}),Object(V.jsx)("img",{className:"banana bone",src:"/config/images/banana1.png"}),Object(V.jsx)("img",{className:"banana btwo",src:"/config/images/banana2.png"}),Object(V.jsx)("img",{className:"banana bthree",src:"/config/images/banana3.png"})]}),Object(V.jsx)("div",{className:" half-half vert mobile-pam",children:Object(V.jsx)("img",{src:"/config/images/palm-mobile.png"})}),Object(V.jsxs)("div",{className:" half-half vert marginL",children:[Object(V.jsx)("h2",{children:" COCO Island"}),Object(V.jsx)("p",{children:" Are you ready to be a part of our secret covert operation?"}),Object(V.jsx)("h2",{children:" The Story"}),Object(V.jsxs)("p",{children:[" Covert Chimp Ops is a limited collection of 1,555 uniquely designed genesis chimps, united together on the Ethereum Blockchain. The objective of our project is very community driven, as the main idea behind it is to create a place where our spies are able to hangout and come together.",Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),"You will not only be receiving an NFT for the price of 0.055 ETH, but also membership access to our secret lair coming soon."]})]}),Object(V.jsxs)("div",{className:" half-half vert coconut-png",children:[Object(V.jsx)("img",{className:"coconut nut1",src:"/config/images/coconut1.png"}),Object(V.jsx)("img",{className:"coconut nut2",src:"/config/images/coconut.png"}),Object(V.jsx)("img",{className:"coconut nut3",src:"/config/images/coconut.png"}),Object(V.jsx)("img",{className:"coconut nut4",src:"/config/images/coconut.png"}),Object(V.jsx)("img",{className:"coconut nut5",src:"/config/images/coconut.png"})]})]}),Object(V.jsx)("div",{className:"centerPos",children:Object(V.jsxs)(K.a,{animateIn:"animate__slideInLeft",animateOnce:!0,children:[Object(V.jsxs)("div",{className:"title-svg desktop_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/meettxt.svg"})," "]}),Object(V.jsxs)("div",{className:"title-svg mobile_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/meettext_mobile.svg"})," "]})]})}),Object(V.jsxs)("div",{className:"team_container",children:[Object(V.jsx)("div",{children:Object(V.jsx)(K.a,{animateIn:"animate__fadeIn animate__delay-2s",animateOnce:!0,delay:500,children:Object(V.jsx)("img",{alt:"Theif man",src:"/config/images/ape1.png"})})}),Object(V.jsx)("div",{children:Object(V.jsx)(K.a,{animateIn:"animate__fadeIn animate__delay-3s",animateOnce:!0,delay:600,children:Object(V.jsx)("img",{alt:"Theif man",src:"/config/images/ape3.png",className:"paddingT"})})}),Object(V.jsx)("div",{children:Object(V.jsx)(K.a,{animateIn:"animate__fadeIn animate__delay-4s",animateOnce:!0,delay:700,children:Object(V.jsx)("img",{alt:"Theif man",src:"/config/images/ape2.png"})})})]})]})})};var q=n(17);n(537);function Q(){return Object(V.jsx)("div",{className:"section-faq",children:Object(V.jsxs)("div",{className:"container",children:[Object(V.jsx)("div",{className:"centerPos",children:Object(V.jsxs)(K.a,{animateIn:"animate__slideInRight",animateOnce:!0,children:[Object(V.jsxs)("div",{className:"title-svg desktop_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/teamtxt.svg"})," "]}),Object(V.jsxs)("div",{className:"title-svg mobile_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/teamtxt_mobile.svg"})," "]})]})}),Object(V.jsxs)("div",{className:"team_container",children:[Object(V.jsx)("div",{children:Object(V.jsxs)(K.a,{animateIn:"animate__fadeIn animate__delay-2s",animateOnce:!0,children:[Object(V.jsx)("img",{alt:"Theif man",src:"/config/images/ape1.png"}),Object(V.jsx)(K.a,{animateIn:"animate__fadeInDown",animateOnce:!0,children:Object(V.jsx)("h3",{children:" John Smith "})}),Object(V.jsxs)(K.a,{animateIn:"animate__fadeInDown",animateOnce:!0,children:[Object(V.jsx)("h4",{children:" The artist "}),Object(V.jsxs)("div",{className:"teamA",children:["  ",Object(V.jsx)("a",{href:"#",children:" Twitter"})," "]})]})]})}),Object(V.jsx)("div",{children:Object(V.jsxs)(K.a,{animateIn:"animate__fadeIn animate__delay-2s",animateOnce:!0,children:[Object(V.jsx)("img",{alt:"Theif man",src:"/config/images/ape3.png"}),Object(V.jsx)(K.a,{animateIn:"animate__fadeInDown",animateOnce:!0,children:Object(V.jsx)("h3",{children:" John Smith "})}),Object(V.jsxs)(K.a,{animateIn:"animate__fadeInDown",animateOnce:!0,children:[Object(V.jsx)("h4",{children:" The artist "}),Object(V.jsxs)("div",{className:"teamA",children:["  ",Object(V.jsx)("a",{href:"#",children:" Twitter"})," "]})]})]})}),Object(V.jsx)("div",{children:Object(V.jsxs)(K.a,{animateIn:"animate__fadeIn animate__delay-2s",animateOnce:!0,children:[Object(V.jsx)("img",{alt:"Theif man",src:"/config/images/ape2.png"}),Object(V.jsx)(K.a,{animateIn:"animate__fadeInDown",animateOnce:!0,children:Object(V.jsx)("h3",{children:" John Smith "})}),Object(V.jsxs)(K.a,{animateIn:"animate__fadeInDown",animateOnce:!0,children:[Object(V.jsx)("h4",{children:" The artist "}),Object(V.jsxs)("div",{className:"teamA",children:["  ",Object(V.jsx)("a",{href:"#",children:" Twitter"})," "]})]})]})}),Object(V.jsxs)("div",{className:"title-svg ",children:[" ",Object(V.jsx)("img",{src:"config/images/faqtxt.svg"})," "]}),Object(V.jsxs)(q.a,{allowZeroExpanded:!0,children:[Object(V.jsx)("div",{className:"board-bg boardA",children:Object(V.jsxs)(q.b,{children:[Object(V.jsx)(q.d,{className:"acc-heading",children:Object(V.jsx)(q.c,{children:"When is the launch?"})}),Object(V.jsx)(q.e,{children:Object(V.jsx)("p",{children:"February 2022, exact date TBA."})})]})}),Object(V.jsx)("div",{className:"board-bg boardB",children:Object(V.jsxs)(q.b,{children:[Object(V.jsx)(q.d,{className:"acc-heading",children:Object(V.jsx)(q.c,{children:"How many NFTs can I mint?"})}),Object(V.jsx)(q.e,{children:Object(V.jsx)("p",{children:"Each wallet will be able to mint 1 NFT during presale and up to 10 NFTs during public sale."})})]})}),Object(V.jsx)("div",{className:"board-bg boardC",children:Object(V.jsxs)(q.b,{children:[Object(V.jsx)(q.d,{className:"acc-heading",children:Object(V.jsx)(q.c,{children:"How much does it cost?"})}),Object(V.jsx)(q.e,{children:Object(V.jsx)("p",{children:"0.055 Eth on the Ethereum Blockchain."})})]})}),Object(V.jsx)("div",{className:"board-bg boardD",children:Object(V.jsxs)(q.b,{children:[Object(V.jsx)(q.d,{className:"acc-heading",children:Object(V.jsx)(q.c,{children:"Will there be a pre-sale?"})}),Object(V.jsx)(q.e,{children:Object(V.jsx)("p",{children:"Yes, turn on notifications to our twitter to be alerted of whitelist opportunities and join our discord below to participate in games for whitelist!"})})]})})]})]})]})})}var $=function(){return Object(V.jsx)("div",{className:"section-Scene "})};var X=function(){return Object(V.jsx)("div",{className:"footer-bg",children:Object(V.jsxs)("div",{className:"section-footer",children:[Object(V.jsx)("div",{className:"centerPos",children:Object(V.jsxs)(K.a,{animateIn:"animate__slideInRight",animateOnce:!0,children:[Object(V.jsxs)("div",{className:"title-svg desktop_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/joinour.svg"})," "]}),Object(V.jsxs)("div",{className:"title-svg mobile_headings",children:[" ",Object(V.jsx)("img",{src:"config/images/joinour_mobile.svg"})," "]})]})}),Object(V.jsxs)("div",{className:"container",children:[Object(V.jsxs)("div",{className:"social-icons display--flex",children:[Object(V.jsx)(K.a,{animateIn:"animate__fadeIn",animateOnce:!0,delay:100,children:Object(V.jsx)("a",{href:"#",children:" Discord "})}),Object(V.jsx)(K.a,{animateIn:"animate__fadeIn",animateOnce:!0,delay:100,children:Object(V.jsx)("a",{href:"#",children:" Twitter "})})]}),Object(V.jsx)(K.a,{animateIn:"animate__fadeIn",animateOnce:!0,delay:300,children:Object(V.jsx)("p",{children:" \xa9 2022  Covert Chimp Ops. All rights reserved. "})})]})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,545)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};n(538),n(539),n(540);var te=function(){return Object(V.jsx)("div",{className:"bg-road",children:Object(V.jsxs)("div",{className:"section-roadmap container",children:[Object(V.jsxs)("div",{className:"title-svg desktop_headings",children:["   ",Object(V.jsxs)(K.a,{animateIn:"animate__slideInRight",animateOnce:!0,children:[Object(V.jsx)("img",{src:"config/images/roadmaptxt.svg"}),"  "]})," "]}),Object(V.jsxs)("div",{className:"title-svg mobile_headings",children:["   ",Object(V.jsxs)(K.a,{animateIn:"animate__slideInRight",animateOnce:!0,children:[" ",Object(V.jsx)("img",{src:"config/images/roadmaptxt_mobile.svg"})]})," "]}),Object(V.jsxs)("div",{className:"roadmap-container",children:[Object(V.jsxs)("div",{className:"roadmap-container_section banana1",children:[Object(V.jsxs)("svg",{width:"320",height:"366",viewBox:"0 0 230 266",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(V.jsxs)("g",{filter:"url(#filter0_d_95_130)",children:[Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M115.602 51.2889C106.032 49.771 118.655 35.2043 121.936 35.8412C126.095 35.2874 121.157 40.455 123.448 42.942C125.74 45.4289 135.437 60.2452 139.052 58.9049C142.666 57.5646 148.411 57.6588 151.136 61.5913C177.622 79.3269 186.341 172.235 74.1615 200.485C71.8093 200.368 56.5559 196.386 53.3862 195.09C50.7115 192.869 44.9282 186.981 47.8977 181.431C80.0616 143.43 140.162 132.637 127.912 70.6958C125.644 60.0447 115.601 51.2877 115.601 51.2877L115.602 51.2889Z",fill:"#FFE200"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M52.4811 186.407L50.5238 181.942C71.2883 151.258 139.932 138.037 130.651 70.5459C142.512 114.713 135.243 151.761 52.4804 186.405L52.4811 186.407Z",fill:"url(#paint0_linear_95_130)"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M113.798 50.3875C110.856 44.2304 118.794 38.5098 120.855 36.676C124.875 34.6196 120.776 46.7165 113.798 50.3875Z",fill:"#442400"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M52.3317 193.559C48.0411 187.978 46.4342 186.27 48.3702 182.108C51.2969 183.304 55.7053 190.235 52.3317 193.559Z",fill:"#442400"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M96.7263 191.254C175.862 162.033 168.544 102.788 165.391 89.546C163.578 72.1761 149.548 60.9433 149.548 60.9433C178.591 103.68 158.938 167.936 96.7237 191.253L96.7263 191.254Z",fill:"url(#paint1_linear_95_130)"})]}),Object(V.jsxs)("defs",{children:[Object(V.jsxs)("filter",{id:"filter0_d_95_130",x:"8.07108",y:"0.799805",width:"220.952",height:"264.685",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(V.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(V.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(V.jsx)("feOffset",{dx:"11",dy:"15"}),Object(V.jsx)("feGaussianBlur",{stdDeviation:"25"}),Object(V.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(V.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}),Object(V.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_95_130"}),Object(V.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_95_130",result:"shape"})]}),Object(V.jsxs)("linearGradient",{id:"paint0_linear_95_130",x1:"53.7161",y1:"153.718",x2:"56.8909",y2:"39.1275",gradientUnits:"userSpaceOnUse",children:[Object(V.jsx)("stop",{"stop-color":"white","stop-opacity":"0.525"}),Object(V.jsx)("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})]}),Object(V.jsxs)("linearGradient",{id:"paint1_linear_95_130",x1:"76.1846",y1:"161.61",x2:"174.154",y2:"93.729",gradientUnits:"userSpaceOnUse",children:[Object(V.jsx)("stop",{"stop-color":"white","stop-opacity":"0"}),Object(V.jsx)("stop",{offset:"1","stop-color":"#5F0E00","stop-opacity":"0.417"})]})]})]}),Object(V.jsxs)("div",{children:[Object(V.jsxs)(K.a,{animateIn:"animate__zoomIn",animateOnce:!0,children:[" ",Object(V.jsx)("h3",{className:"road-title",children:" Assemble in the Headquarters"})," "]}),Object(V.jsx)(K.a,{animateIn:"animate__zoomIn",animateOnce:!0,delay:300,children:Object(V.jsx)("p",{children:"As an honorary supporter, you are able to relax in the lounge and mingle with the rest of the spies. HQ will slowly provide sneak peeks and many surprises. As you line up and wait your turn to receive your very own Covert Chimp, we will also be providing you with a banana laser gun for a top-secret mission."})})]})]}),Object(V.jsxs)("div",{className:"roadmap-container_section banana2",children:[Object(V.jsxs)("svg",{width:"320",height:"366",viewBox:"0 0 230 266",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(V.jsxs)("g",{filter:"url(#filter0_d_95_130)",children:[Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M115.602 51.2889C106.032 49.771 118.655 35.2043 121.936 35.8412C126.095 35.2874 121.157 40.455 123.448 42.942C125.74 45.4289 135.437 60.2452 139.052 58.9049C142.666 57.5646 148.411 57.6588 151.136 61.5913C177.622 79.3269 186.341 172.235 74.1615 200.485C71.8093 200.368 56.5559 196.386 53.3862 195.09C50.7115 192.869 44.9282 186.981 47.8977 181.431C80.0616 143.43 140.162 132.637 127.912 70.6958C125.644 60.0447 115.601 51.2877 115.601 51.2877L115.602 51.2889Z",fill:"#FFE200"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M52.4811 186.407L50.5238 181.942C71.2883 151.258 139.932 138.037 130.651 70.5459C142.512 114.713 135.243 151.761 52.4804 186.405L52.4811 186.407Z",fill:"url(#paint0_linear_95_130)"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M113.798 50.3875C110.856 44.2304 118.794 38.5098 120.855 36.676C124.875 34.6196 120.776 46.7165 113.798 50.3875Z",fill:"#442400"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M52.3317 193.559C48.0411 187.978 46.4342 186.27 48.3702 182.108C51.2969 183.304 55.7053 190.235 52.3317 193.559Z",fill:"#442400"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M96.7263 191.254C175.862 162.033 168.544 102.788 165.391 89.546C163.578 72.1761 149.548 60.9433 149.548 60.9433C178.591 103.68 158.938 167.936 96.7237 191.253L96.7263 191.254Z",fill:"url(#paint1_linear_95_130)"})]}),Object(V.jsxs)("defs",{children:[Object(V.jsxs)("filter",{id:"filter0_d_95_130",x:"8.07108",y:"0.799805",width:"220.952",height:"264.685",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(V.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(V.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(V.jsx)("feOffset",{dx:"11",dy:"15"}),Object(V.jsx)("feGaussianBlur",{stdDeviation:"25"}),Object(V.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(V.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}),Object(V.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_95_130"}),Object(V.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_95_130",result:"shape"})]}),Object(V.jsxs)("linearGradient",{id:"paint0_linear_95_130",x1:"53.7161",y1:"153.718",x2:"56.8909",y2:"39.1275",gradientUnits:"userSpaceOnUse",children:[Object(V.jsx)("stop",{"stop-color":"white","stop-opacity":"0.525"}),Object(V.jsx)("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})]}),Object(V.jsxs)("linearGradient",{id:"paint1_linear_95_130",x1:"76.1846",y1:"161.61",x2:"174.154",y2:"93.729",gradientUnits:"userSpaceOnUse",children:[Object(V.jsx)("stop",{"stop-color":"white","stop-opacity":"0"}),Object(V.jsx)("stop",{offset:"1","stop-color":"#5F0E00","stop-opacity":"0.417"})]})]})]}),Object(V.jsxs)("div",{children:[Object(V.jsxs)(K.a,{animateIn:"animate__zoomIn",animateOnce:!0,children:[" ",Object(V.jsx)("h3",{className:"road-title",children:" Staking Phase"})," "]}),Object(V.jsx)(K.a,{animateIn:"animate__zoomIn",animateOnce:!0,delay:300,children:Object(V.jsx)("p",{children:"Stake your very own Covert Chimp to yield $COCO, the most valuable resource in our ecosystem. Not enough? Enter top secret missions to increase the yield of $COCO in order to purchase [REDACTED] coming soon."})})]})]}),Object(V.jsxs)("div",{className:"roadmap-container_section banana3",children:[Object(V.jsxs)("svg",{width:"320",height:"334",viewBox:"0 0 264 234",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(V.jsxs)("g",{filter:"url(#filter0_d_95_146)",children:[Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M187.114 118.411C188.991 108.905 203.072 122.069 202.312 125.323C202.708 129.501 197.731 124.371 195.159 126.567C192.587 128.763 177.416 137.895 178.619 141.557C179.822 145.22 179.512 150.957 175.479 153.531C156.758 179.33 63.587 184.54 39.5863 71.3755C39.7912 69.0293 44.3462 53.9369 45.7606 50.8183C48.081 48.2292 54.1826 42.6721 59.6167 45.8486C96.3779 79.4224 104.898 139.887 167.257 129.981C177.986 128.116 187.115 118.41 187.115 118.41L187.114 118.411Z",fill:"#FFE200"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M54.473 50.2414L59.0078 48.4538C88.888 70.3604 99.5112 139.454 167.305 132.723C122.722 142.911 85.9738 134.25 54.4743 50.2407L54.473 50.2414Z",fill:"url(#paint0_linear_95_146)"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M188.084 116.646C194.347 113.938 199.765 122.086 201.519 124.215C203.423 128.31 191.489 123.758 188.084 116.646Z",fill:"#442400"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.33 49.8225C53.0687 45.7454 54.8357 44.204 58.9223 46.2956C57.616 49.1751 50.5239 53.319 47.33 49.8225Z",fill:"#442400"}),Object(V.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.9591 94.2739C74.1762 174.455 133.655 169.376 147.006 166.724C164.432 165.567 176.186 151.971 176.186 151.971C132.385 179.382 68.915 157.321 47.9605 94.2713L47.9591 94.2739Z",fill:"url(#paint1_linear_95_146)"})]}),Object(V.jsxs)("defs",{children:[Object(V.jsxs)("filter",{id:"filter0_d_95_146",x:"0.586304",y:"9.89453",width:"262.755",height:"223.971",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(V.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(V.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(V.jsx)("feOffset",{dx:"11",dy:"15"}),Object(V.jsx)("feGaussianBlur",{stdDeviation:"25"}),Object(V.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(V.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}),Object(V.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_95_146"}),Object(V.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_95_146",result:"shape"})]}),Object(V.jsxs)("linearGradient",{id:"paint0_linear_95_146",x1:"87.092",y1:"52.7079",x2:"201.481",y2:"60.2006",gradientUnits:"userSpaceOnUse",children:[Object(V.jsx)("stop",{"stop-color":"white","stop-opacity":"0.525"}),Object(V.jsx)("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})]}),Object(V.jsxs)("linearGradient",{id:"paint1_linear_95_146",x1:"78.3571",y1:"74.8644",x2:"142.496",y2:"175.324",gradientUnits:"userSpaceOnUse",children:[Object(V.jsx)("stop",{"stop-color":"white","stop-opacity":"0"}),Object(V.jsx)("stop",{offset:"1","stop-color":"#5F0E00","stop-opacity":"0.417"})]})]})]}),Object(V.jsxs)("div",{children:[Object(V.jsxs)(K.a,{animateIn:"animate__zoomIn",animateOnce:!0,children:[" ",Object(V.jsx)("h3",{className:"road-title",children:" Aid the Apes"})," "]}),Object(V.jsx)(K.a,{animateIn:"animate__zoomIn",animateOnce:!0,delay:300,children:Object(V.jsx)("p",{children:"We will be donating a portion of proceeds to a charity for our endangered comrades that are in the wild. The team understands that their lives are threatened, so we will do our best to help our brothers."})})]})]})]})]})})};v.a.render(Object(V.jsxs)(I.a,{store:U,children:[Object(V.jsx)(J,{}),Object(V.jsx)(Y,{}),Object(V.jsx)(te,{}),Object(V.jsx)($,{}),Object(V.jsx)(Q,{}),Object(V.jsx)(X,{})]}),document.getElementById("root")),ee()}},[[541,1,2]]]);
//# sourceMappingURL=main.f3a87e8a.chunk.js.map