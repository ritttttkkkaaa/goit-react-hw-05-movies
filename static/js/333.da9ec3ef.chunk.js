"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[333],{255:function(n,t,e){e.d(t,{Z:function(){return x}});var r,a,u,o=e(689),c=e(87),i=e(168),s=e(686),p=s.Z.ul(r||(r=(0,i.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: auto;\n    margin-right: auto;\n    gap: 75px\n"]))),f=s.Z.li(a||(a=(0,i.Z)(["\nposition: relative;\n\n\n\n\ndiv {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: #000000;\n    opacity: 0.7;\n    width: 269px;\n    height: 61px;\n    position: absolute;\n    top: 343px;\n}\n\nh3 {\n    position:absolute;\n    padding: 18px;\n    font-size: 16px;\n}\n"]))),l=s.Z.img(u||(u=(0,i.Z)(["\n  width:269px\n\n\n"]))),d=e(184),x=function(n){var t=n.movies,e=(0,o.TH)();return console.log(e),(0,d.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.original_title,a=n.poster_path;return(0,d.jsx)(f,{children:(0,d.jsxs)(c.rU,{state:{from:e},to:"/movies/".concat(t),children:[(0,d.jsx)(l,{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:r}),(0,d.jsx)("div",{children:(0,d.jsx)("h3",{children:r})})]})},t)}))})}},333:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,u=e(861),o=e(439),c=e(687),i=e.n(c),s=e(791),p=e(87),f=e(255),l=e(243),d=e(168),x=e(686),h=x.Z.input(r||(r=(0,d.Z)(["\nwidth: 250px;\n    height: 35px;\n    border-radius: 10px;\n    border: none;\n    /* background: #53525d5c; *\n    background-color: #ffffff;\n    opacity: 0.3;\n    box-shadow: 0 4px 12px rgb(173 162 162 / 0%), 0 16px 20px rgba(0,0,0,0.2);\n    margin-bottom: 30px;\n"]))),v=x.Z.button(a||(a=(0,d.Z)(["\n    margin-left: 5px;\n    width: 81px;\n    height: 37px;\n    border-radius: 10px;\n    border: none;\n    font-size: 15px;\n    font-weight: 15px;\n    background-color: #00000040;\n    color: white;\n\n    button:hover {\n\n    }\n\n"]))),g=e(184),b=function(){var n=(0,s.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)(""),c=(0,o.Z)(a,2),d=c[0],x=c[1],b=(0,p.lr)(),m=(0,o.Z)(b,2),w=m[0],Z=m[1];(0,s.useEffect)((function(){var n=w.get("query");if(n){var t=function(){var t=(0,u.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.Pt)(n);case 3:e=t.sent,r(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[w]);return(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),Z({query:d})},children:[(0,g.jsx)(h,{type:"text",value:d,onChange:function(n){var t=n.target.value;x(t)}}),(0,g.jsx)(v,{type:"submit",children:"Search"}),e.length>0&&(0,g.jsx)(f.Z,{movies:e})]})}},243:function(n,t,e){e.d(t,{M1:function(){return f},Pg:function(){return p},Pt:function(){return s},jC:function(){return i},tx:function(){return l}});var r=e(861),a=e(687),u=e.n(a),o=e(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="8aba4e3419a44727b7eb66f35fce4fa2",i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/week?api_key=".concat(c));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=333.da9ec3ef.chunk.js.map