(this.webpackJsonptestapp=this.webpackJsonptestapp||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=a(40),s=a(166),l=a(11),d={Home:"/",Detail:"/:id"},u=a(25),j=a(158),_=a(57),m=a.n(_),b=a(2),v=function(){return Object(b.jsx)("footer",{className:m.a.footer,style:{backgroundImage:"url(./footer.webp)"},children:Object(b.jsxs)(j.a,{container:!0,className:m.a.content,children:[Object(b.jsx)(j.a,{item:!0,xs:12,lg:1,children:"Nusflix.com"}),Object(b.jsxs)(j.a,{item:!0,xs:12,lg:11,children:[Object(b.jsx)("div",{children:"Proyecto desarrollado con ReactJS, SASS, TypeScript."}),Object(b.jsx)("div",{children:"Desarrollado por Rodrigo L\xf3pez"})]})]})})},g=a(83),x=a(167),h=a(80),f=a.n(h),p=a(162),O=a(79),w=a.n(O),N=function(e){var t=e.onChange,a=e.lastValue,r=Object(n.useState)(""),o=Object(u.a)(r,2),i=o[0],c=o[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==i.trim()&&i!==a&&t(i)},className:w.a.form,children:[Object(b.jsx)(x.a,{id:"input-search",autoFocus:!0,variant:"outlined",value:i,onChange:function(e){c(e.target.value)}}),Object(b.jsxs)(p.a,{id:"btnSearch",variant:"contained",color:"primary",type:"submit",children:[Object(b.jsx)(f.a,{})," Buscar"]})]})},S=a(44),M=a.n(S),P=function(e){return Object(b.jsxs)("div",{className:M.a.header,style:{backgroundImage:"url(./background.png)"},children:[Object(b.jsx)("div",{className:M.a.shadow}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:M.a.title,children:"Nusflix"}),Object(b.jsx)("div",{className:M.a.subtitle,children:"El mejor cat\xe1logo de peliculas."})]}),Object(b.jsx)(N,Object(g.a)({},e))]})},C=a(27),k=a.n(C),y=a(43),E=a(4),I=a(168),L=a(163),D=a(81),F=a.n(D),H=a(52),A=a.n(H),R=function(e){var t,a=e.movie,n=e.className,r=void 0===n?"":n;return Object(b.jsxs)("div",{className:Object(E.a)(A.a.info,r),children:[a.release_date,Object(b.jsxs)("div",{className:A.a.votes,children:[Object(b.jsx)(F.a,{}),a.vote_average]}),Object(b.jsx)("div",{className:A.a.lang,children:Object(b.jsx)("strong",{children:null===(t=a.original_language)||void 0===t?void 0:t.toUpperCase()})})]})},T=a(28),B=a.n(T),V=function(e){var t,a=e.movie,n=d.Detail.replace(":id",String(a.id));return Object(b.jsx)(j.a,{item:!0,xs:12,sm:12,md:6,lg:4,children:Object(b.jsx)(c.b,{to:n,style:{textDecoration:"none"},className:"link-item",children:Object(b.jsxs)(L.a,{className:B.a.card,children:[Object(b.jsx)("img",{src:a.poster_path?"https://image.tmdb.org/t/p/w500".concat(a.poster_path):"./images.png",alt:a.title,className:B.a.img,onError:console.log}),Object(b.jsx)("div",{className:B.a.shadow}),Object(b.jsxs)("div",{className:B.a.info_movie,children:[Object(b.jsx)("h3",{className:B.a.title,children:a.title}),Object(b.jsx)(R,{movie:a}),Object(b.jsxs)("div",{className:B.a.desc,children:[null===(t=a.overview)||void 0===t?void 0:t.substr(0,200),(a.overview||"").length>200?"...":""]})]}),Object(b.jsx)("div",{className:B.a.shadowHover})]})})})},J=a(32),z=a.n(J),Q=function(e){var t=e.paginationData,a=e.onChangePage,r=Object(n.useState)(!0),o=Object(u.a)(r,2),i=o[0],c=o[1],s=function(){var e=document.body.offsetHeight,t=window,a=t.scrollY,n=t.screen.height;c(e-(a+n)>-4)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[]),Object(b.jsxs)(j.a,{container:!0,className:z.a.container,children:[Object(b.jsxs)("div",{className:z.a.infoResult,children:["Se encontraron ",Object(b.jsx)("strong",{children:t.total_results})," ","resultados. P\xe1gina ",t.page]}),Object(b.jsx)(j.a,{container:!0,className:z.a.containerMovies,children:t.results.map((function(e,t){return Object(b.jsx)(V,{movie:e},e.id)}))}),t.total_pages>1?Object(b.jsx)("div",{id:"pagination-zone",className:Object(E.a)(z.a.pagination,i?z.a.fixed:""),children:Object(b.jsx)("div",{className:z.a.paginationContent,children:Object(b.jsx)(I.a,{count:t.total_pages,page:t.page,hidePrevButton:!0,hideNextButton:!0,onChange:function(e,t){return a(t)}})})}):null]})},W=a(60),X=a.n(W),q=a(164),K=function(){return Object(b.jsxs)(j.a,{item:!0,xs:12,className:X.a.loading,children:[Object(b.jsx)(q.a,{className:X.a.circularProgress}),Object(b.jsx)("div",{children:"Cargando resultados"})]})},Y=a(82),G=a.n(Y),U=function(){return Object(b.jsx)(j.a,{item:!0,xs:12,className:G.a.container,children:"Ingresa un texto para buscar algo"})},Z=a(165),$=a(61),ee=a.n($),te=function(){var e=Object(y.a)(k.a.mark((function e(t,a){var n,r,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"e359e1ad0420182dea68eadd2515248c",e.next=3,ee.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("e359e1ad0420182dea68eadd2515248c","&query=").concat(t,"&page=").concat(a));case 3:if(200===(n=e.sent).status&&n&&n.data&&n.data.results){e.next=6;break}throw new Error("El formato de respuesta no es el esperado");case 6:return r=n.data.results.map((function(e){return{id:e.id,title:e.title,overview:e.overview,release_date:e.release_date,poster_path:e.poster_path,backdrop_path:e.backdrop_path,video:e.video,vote_average:e.vote_average,vote_count:e.vote_count,original_language:e.original_language}})),o={results:r,page:n.data.page,total_pages:n.data.total_pages,total_results:n.data.total_results},e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ae=function(e){var t=e.querySearch,a=Object(n.useState)(1),r=Object(u.a)(a,2),o=r[0],i=r[1],c=Object(n.useState)({data:null,loading:!0,error:!1}),s=Object(u.a)(c,2),l=s[0],d=s[1];if(Object(n.useEffect)((function(){i(1)}),[t]),Object(n.useEffect)((function(){Object(y.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.trim()){e.next=2;break}return e.abrupt("return");case 2:return d({data:null,loading:!0,error:!1}),e.prev=3,e.next=6,te(t,o);case 6:a=e.sent,setTimeout((function(){d({data:a,loading:!1,error:!1})}),500),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),d({data:null,loading:!1,error:!0,errorMessage:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))()}),[o,t]),""===t.trim())return Object(b.jsx)(U,{});return Object(b.jsx)(Z.a,{children:l.error?Object(b.jsx)("div",{children:"Error"}):l.loading?Object(b.jsx)(K,{}):Object(b.jsx)(Q,{paginationData:l.data,onChangePage:function(e){return i(e)}})})},ne=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(P,{lastValue:a,onChange:r}),Object(b.jsx)(ae,{querySearch:a}),Object(b.jsx)(v,{})]})},re=function(){return Object(b.jsx)("div",{children:"Pagina detalle pelicula"})},oe=function(){return Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:d.Home,exact:!0,children:Object(b.jsx)(ne,{})}),Object(b.jsx)(l.b,{path:d.Detail,exact:!0,children:Object(b.jsx)(re,{})}),Object(b.jsx)(l.a,{to:d.Home})]})},ie=(a(123),function(){return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(s.a,{}),Object(b.jsx)(c.a,{basename:"VideoPlatform/",children:Object(b.jsx)(oe,{})})]})}),ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,169)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),ce()},28:function(e,t,a){e.exports={card:"ItemMovie_card__DCgdQ",img:"ItemMovie_img__3jgWo",shadow:"ItemMovie_shadow__2MPVv",shadowHover:"ItemMovie_shadowHover__3mlw0",info_movie:"ItemMovie_info_movie__7HYzz",title:"ItemMovie_title__3KI8S",desc:"ItemMovie_desc___XFhP"}},32:function(e,t,a){e.exports={container:"MovieListPaginator_container__2sXLH",infoResult:"MovieListPaginator_infoResult__3V1Jv",containerMovies:"MovieListPaginator_containerMovies__C5fR8",pagination:"MovieListPaginator_pagination__2tkTx",fixed:"MovieListPaginator_fixed__1LTWE",paginationContent:"MovieListPaginator_paginationContent__32Nfr"}},44:function(e,t,a){e.exports={header:"Header_header__2cvNS",shadow:"Header_shadow__2cIvp",title:"Header_title__1Guff",subtitle:"Header_subtitle__1_wg1"}},52:function(e,t,a){e.exports={info:"DataMovie_info__QKDfE",votes:"DataMovie_votes__1HMle",lang:"DataMovie_lang__1HAEW"}},57:function(e,t,a){e.exports={footer:"Footer_footer__2J7Pl",content:"Footer_content__3xyQ1"}},60:function(e,t,a){e.exports={loading:"LoadingComponent_loading__12wPX",circularProgress:"LoadingComponent_circularProgress__1LyMD"}},79:function(e,t,a){e.exports={form:"SearchForm_form__RiZS5","formAnimation-enter":"SearchForm_formAnimation-enter__2EdIv","formAnimation-enter-active":"SearchForm_formAnimation-enter-active__cVTQi","formAnimation-exit":"SearchForm_formAnimation-exit__Xw5ku","formAnimation-exit-active":"SearchForm_formAnimation-exit-active__3EN0B"}},82:function(e,t,a){e.exports={container:"WelcomeComponent_container__StIox"}}},[[124,1,2]]]);
//# sourceMappingURL=main.2e5ae934.chunk.js.map