(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,a){e.exports=a(504)},504:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),l=a.n(i),c=a(86),u=a(21),o=a(34),s=a(207),m=a(31),p={cheap:{flight:[],error:null,loading:!1},business:{flight:[],error:null,loading:!1}},d="GET_CHEAP",h="GET_BUSINESS",g=a(22),f=a(191),b=function(e){return Object(f.format)(new Date(e),"YYYY-MM-DD HH:mm:SS")},v=Object(o.c)({cheap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.cheap,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHEAP_LOADING":return Object(u.a)({},e,{loading:t.loading});case"GET_CHEAP_SUCCESS":return Object(u.a)({},e,{flight:t.payload.map(function(e){return function(e){var t=e.departureTime,a=e.arrivalTime;return Object(u.a)({},e,{departureTime:b(t),arrivalTime:b(a),tag:"cheap"})}(e)})});case"GET_CHEAP_ERROR":return Object(u.a)({},e,{error:t.error});case"ADD_CHEAP_FLIGHT":return Object(u.a)({},e,{flight:[t.flight].concat(Object(m.a)(e.flight))});default:return e}},business:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.business,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BUSINESS_LOADING":return Object(u.a)({},e,{loading:t.loading});case"GET_BUSINESS_SUCCESS":return Object(u.a)({},e,{flight:t.payload.map(function(e){return function(e){var t=e.uuid,a=e.flight,n=e.departure,r=e.arrival,i=a.split("->"),l=Object(g.a)(i,2);return{id:t,departure:l[0],arrival:l[1],departureTime:b(n),arrivalTime:b(r),tag:"business"}}(e)})});case"GET_BUSINESS_ERROR":return Object(u.a)({},e,{error:t.error});case"ADD_BUSINESS_FLIGHT":return Object(u.a)({},e,{flight:[t.flight].concat(Object(m.a)(e.flight))});default:return e}}}),E=a(26),O=a.n(E),j=a(20),C=a(192),S=a.n(C),T=function(e){return S.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat(e))},y=function(){return T("https://obscure-caverns-79008.herokuapp.com/cheap")},w=function(){return T("https://obscure-caverns-79008.herokuapp.com/business")},x=function(e){return{type:"GET_CHEAP_LOADING",loading:e}},k=function(e){return{type:"GET_CHEAP_SUCCESS",payload:e}},P=function(e){return{type:"GET_CHEAP_ERROR",error:e}},N=O.a.mark(_);function _(e){var t,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.d)(x(!0));case 3:return e.next=5,Object(j.b)(y);case 5:return t=e.sent,a=t.data,e.next=9,Object(j.d)(k(a));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Object(j.d)(P(e.t0.message));case 15:return e.prev=15,e.next=18,Object(j.d)(x(!1));case 18:return e.finish(15);case 19:case"end":return e.stop()}},N,null,[[0,11,15,19]])}var A=function(e){return{type:"GET_BUSINESS_LOADING",loading:e}},F=function(e){return{type:"GET_BUSINESS_SUCCESS",payload:e}},B=function(e){return{type:"GET_BUSINESS_ERROR",error:e}},G=O.a.mark(L);function L(e){var t,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.d)(A(!0));case 3:return e.next=5,Object(j.b)(w);case 5:return t=e.sent,a=t.data,e.next=9,Object(j.d)(F(a));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Object(j.d)(B(e.t0.message));case 15:return e.prev=15,e.next=18,Object(j.d)(A(!1));case 18:return e.finish(15);case 19:case"end":return e.stop()}},G,null,[[0,11,15,19]])}var I=O.a.mark(R),D=O.a.mark(H);function R(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(d,_);case 2:case"end":return e.stop()}},I)}function H(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)(h,L);case 2:case"end":return e.stop()}},D)}var U=O.a.mark(W);function W(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([Object(j.c)(R)]);case 2:return e.next=4,Object(j.a)([Object(j.c)(H)]);case 4:case"end":return e.stop()}},U)}var M=a(65),z=a(42),V=a(24),Y=a(200),J=a.n(Y),$=a(201),q=a.n($),K=a(38),Q=a.n(K),X=a(196),Z=a.n(X),ee=a(87),te=a.n(ee),ae=a(198),ne=a.n(ae),re=a(199),ie=a.n(re),le=a(197),ce=a.n(le),ue=a(64),oe=a.n(ue),se=a(193),me=a(194),pe=a(209),de=a(195),he=a(208),ge=a(51),fe=a.n(ge),be=a(109),ve=a.n(be),Ee=a(111),Oe=a.n(Ee),je=a(110),Ce=a.n(je),Se=a(108),Te=a.n(Se),ye=function(e){function t(){var e,a;Object(se.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(pe.a)(this,(e=Object(de.a)(t)).call.apply(e,[this].concat(r)))).handleFirstPageButtonClick=function(e){a.props.onChangePage(e,0)},a.handleBackButtonClick=function(e){a.props.onChangePage(e,a.props.page-1)},a.handleNextButtonClick=function(e){a.props.onChangePage(e,a.props.page+1)},a.handleLastPageButtonClick=function(e){a.props.onChangePage(e,Math.max(0,Math.ceil(a.props.count/a.props.rowsPerPage)-1))},a}return Object(he.a)(t,e),Object(me.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.count,n=e.page,i=e.rowsPerPage,l=e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement(fe.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===l.direction?r.a.createElement(Te.a,null):r.a.createElement(ve.a,null)),r.a.createElement(fe.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===l.direction?r.a.createElement(Ce.a,null):r.a.createElement(Oe.a,null)),r.a.createElement(fe.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(a/i)-1,"aria-label":"Next Page"},"rtl"===l.direction?r.a.createElement(Oe.a,null):r.a.createElement(Ce.a,null)),r.a.createElement(fe.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(a/i)-1,"aria-label":"Last Page"},"rtl"===l.direction?r.a.createElement(ve.a,null):r.a.createElement(Te.a,null)))}}]),t}(r.a.Component),we=Object(V.withStyles)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(ye),xe=a(37),ke=a.n(xe),Pe=a(50),Ne=a.n(Pe),_e=Object(V.withStyles)(function(e){return{button:{margin:e.spacing.unit/2},input:{margin:2*e.spacing.unit}}})(function(e){var t=Object(n.useState)("all"),a=Object(g.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)(""),u=Object(g.a)(c,2),o=u[0],s=u[1],p=Object(n.useState)(""),d=Object(g.a)(p,2),h=d[0],f=d[1],b=e.classes,v=e.cheap,E=e.business,O=e.setFilteredSource,j=e.setPage,C=[].concat(Object(m.a)(v.flight),Object(m.a)(E.flight)),S=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return"all"===t&&(e=C),"cheap"===t&&(e=Object(m.a)(v.flight)),"business"===t&&(e=Object(m.a)(E.flight)),e},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return""!==t?e.filter(function(e){return new RegExp(t).test(e.departure.toLowerCase())}):e},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return""!==t?e.filter(function(e){return new RegExp(t).test(e.arrival.toLowerCase())}):e},w={tag:{name:"tag",preValue:i,setter:l},departure:{name:"departure",preValue:o,setter:s},arrival:{name:"arrival",preValue:h,setter:f}},x=function(e,t){e.setter(t),function(e,t){var a;t=t.toLowerCase(),a="tag"===e?S(t):S(),a="departure"===e?T(a,t):T(a),a="arrival"===e?y(a,t):y(a),O(a),j(0)}(e.name,t)};return r.a.createElement("div",null,r.a.createElement(ke.a,{size:"small",variant:"all"===i?"contained":"outlined",color:"primary",className:b.button,onClick:function(){return x(w.tag,"all")}},"All"),r.a.createElement(ke.a,{size:"small",variant:"cheap"===i?"contained":"outlined",color:"primary",className:b.button,onClick:function(){return x(w.tag,"cheap")}},"only Cheap"),r.a.createElement(ke.a,{size:"small",variant:"business"===i?"contained":"outlined",color:"primary",className:b.button,onClick:function(){return x(w.tag,"business")}},"only Business"),r.a.createElement(Ne.a,{placeholder:"Departure",className:b.input,inputProps:{"aria-label":"Departure"},value:o,onChange:function(e){return x(w.departure,e.target.value)}}),r.a.createElement(Ne.a,{placeholder:"Arrival",className:b.input,inputProps:{"aria-label":"Arrival"},value:h,onChange:function(e){return x(w.arrival,e.target.value)}}),r.a.createElement(ke.a,{size:"small",variant:"outlined",className:b.button,onClick:function(){return l("all"),s(""),f(""),void O(C)}},"CLEAR FILTER"))}),Ae=Object(V.withStyles)(function(e){return{heading:{paddingTop:e.spacing.unit},table:{minWidth:700},sortHeader:{cursor:"pointer",fontSize:12},icon:{fontSize:12},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(function(e){var t=e.classes,a=e.cheap,i=e.business,l=[].concat(Object(m.a)(a.flight),Object(m.a)(i.flight)),c=Object(n.useState)(l),u=Object(g.a)(c,2),o=u[0],s=u[1],p=Object(n.useState)(!1),d=Object(g.a)(p,2),h=d[0],f=d[1],b=Object(n.useState)(!1),v=Object(g.a)(b,2),E=v[0],O=v[1],j=Object(n.useState)(!1),C=Object(g.a)(j,2),S=C[0],T=C[1],y=Object(n.useState)(!1),w=Object(g.a)(y,2),x=w[0],k=w[1],P=Object(n.useState)(0),N=Object(g.a)(P,2),_=N[0],A=N[1],F=Object(n.useState)(5),B=Object(g.a)(F,2),G=B[0],L=B[1],I={tag:{name:"class"},departure:{name:"departure",value:h,setter:f},arrival:{name:"arrival",value:E,setter:O},dTime:{name:"departureTime",value:S,setter:T},aTime:{name:"arrivalTime",value:x,setter:k}},D=r.a.createElement(Z.a,null,r.a.createElement(te.a,null,Object.keys(I).map(function(e){return r.a.createElement(Q.a,{key:I[e].name,className:t.sortHeader,padding:"default"},I[e].name===I.tag.name?I.tag.name:r.a.createElement(ce.a,{active:!0,direction:I[e].value?"desc":"asc",onClick:function(){return function(e){var t=e.name,a=e.value;(0,e.setter)(!e.value);var n=o;n=a?n.sort(function(e,a){return e[t].localeCompare(a[t])}):n.sort(function(e,a){return a[t].localeCompare(e[t])}),s(n),A(0)}(I[e])}},I[e].name))}))),R=r.a.createElement(ne.a,null,r.a.createElement(te.a,null,r.a.createElement(ie.a,{rowsPerPageOptions:[5,10,15],count:o.length,rowsPerPage:G,page:_,SelectProps:{native:!0},onChangePage:function(e,t){return function(e,t){A(parseInt(t,10))}(0,t)},onChangeRowsPerPage:function(e){return function(e){A(0),L(parseInt(e.target.value))}(e)},ActionsComponent:we})));return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0,className:t.heading},"Flight"),a.loading&&r.a.createElement("div",null,"Loading Cheap flight..."),a.error&&r.a.createElement("div",null,a.error),i.loading&&r.a.createElement("div",null,"Loading Business flight..."),i.error&&r.a.createElement("div",null,i.error),(a.flight.length>0||i.flight.length>0)&&r.a.createElement(_e,{cheap:a,business:i,setFilteredSource:s,setPage:A}),o.length>0&&r.a.createElement(J.a,{className:t.table},D,r.a.createElement(q.a,null,o.slice(_*G,_*G+G).map(function(e){return r.a.createElement(te.a,{key:e.id,className:t.row,hover:!0},r.a.createElement(Q.a,null,e.tag),r.a.createElement(Q.a,null,e.departure),r.a.createElement(Q.a,null," ",e.arrival),r.a.createElement(Q.a,null,e.departureTime),r.a.createElement(Q.a,null,e.arrivalTime))})),R))}),Fe=a(85),Be=a(53),Ge=a.n(Be),Le=a(28),Ie=a.n(Le),De=a(202),Re=a.n(De),He={tag:"cheap",departure:"",arrival:"",departureTime:"",arrivalTime:""},Ue=Object(V.withStyles)(function(e){return{heading:{paddingTop:e.spacing.unit},form:{maxWidth:"80vw"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dateTimeField:{marginTop:2*e.spacing.unit,marginLeft:e.spacing.unit,marginRight:e.spacing.unit},buttonGroup:{marginTop:2*e.spacing.unit},button:{padding:e.spacing.unit}}})(function(e){var t=Object(n.useState)(He),a=Object(g.a)(t,2),i=a[0],l=a[1],c=function(){l(He)},o=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;l(Object(u.a)({},i,Object(Fe.a)({},a,n)))},s=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{variant:"h4",gutterBottom:!0,className:s.heading},"Add Flight"),r.a.createElement(Ie.a,{container:!0,justify:"center"},r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){return function(t){t.preventDefault();var a=i.tag,n=i.departure,r=i.arrival,l=i.departureTime,u=i.arrivalTime,o={id:Re()(),tag:a,departure:n,arrival:r,departureTime:b(l),arrivalTime:b(u)};"cheap"===a?e.handleAddCheapFlight(o):e.handleAddBusinessFlight(o),c()}(t)}},r.a.createElement(Ie.a,{container:!0,spacing:24,className:s.form},r.a.createElement(Ie.a,{item:!0,xs:12,sm:12},r.a.createElement(Ge.a,{fullWidth:!0,id:"tag",name:"tag",onChange:function(e){return o(e)},select:!0,className:s.textField,label:"Flight Class",margin:"normal",SelectProps:{native:!0,MenuProps:{className:s.menu}}},r.a.createElement("option",{key:"cheap",value:"cheap",defaultValue:!0},"Cheap"),r.a.createElement("option",{key:"business",value:"business"},"Business"))),r.a.createElement(Ie.a,{item:!0,xs:12,sm:6},r.a.createElement(Ge.a,{fullWidth:!0,id:"departure",name:"departure",label:"Departure",margin:"normal",value:i.departure,onChange:function(e){return o(e)},className:s.textField})),r.a.createElement(Ie.a,{item:!0,xs:12,sm:6},r.a.createElement(Ge.a,{fullWidth:!0,id:"departureTime",name:"departureTime",label:"Departure Time",type:"datetime-local",value:i.departureTime,onChange:function(e){return o(e)},className:s.dateTimeField,InputLabelProps:{shrink:!0}})),r.a.createElement(Ie.a,{item:!0,xs:12,sm:6},r.a.createElement(Ge.a,{fullWidth:!0,id:"arrival",name:"arrival",label:"Arrival",margin:"normal",value:i.arrival,onChange:function(e){return o(e)},className:s.textField})),r.a.createElement(Ie.a,{item:!0,xs:12,sm:6},r.a.createElement(Ge.a,{fullWidth:!0,id:"arrivalTime",name:"arrivalTime",label:"arrival Time",type:"datetime-local",value:i.arrivalTime,onChange:function(e){return o(e)},className:s.dateTimeField,InputLabelProps:{shrink:!0}})),r.a.createElement(Ie.a,{item:!0,xs:12,sm:6},r.a.createElement(ke.a,{fullWidth:!0,type:"button",variant:"outlined",className:s.button,onClick:function(){return c()}},"Clear")),r.a.createElement(Ie.a,{item:!0,xs:12,sm:6},r.a.createElement(ke.a,{fullWidth:!0,type:"submit",variant:"outlined",className:s.button,disabled:function(){var e=i.departure,t=i.arrival,a=i.departureTime,n=i.arrivalTime;return""===e||""===t||""===a||""===n}()},"Submit"))))))});function We(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 not found"))}var Me=a(204),ze=a.n(Me),Ve=a(205),Ye=a.n(Ve),Je=a(112),$e=a.n(Je),qe=a(82),Ke=a.n(qe),Qe=a(203),Xe=a.n(Qe),Ze=Object(V.createMuiTheme)({palette:{primary:{main:Xe.a[300]},secondary:{main:"#11cb5f"}},typography:{fontFamily:["Lato","sans-serif"],useNextVariants:!0}}),et=["/","flight"].includes(window.location.pathname)?0:1,tt=Object(V.withStyles)(function(e){return{root:Object(u.a)({},e.mixins.gutters(),{marginTop:2*e.spacing.unit,minHeight:"80vh"})}})(function(e){var t=Object(n.useState)(et),a=Object(g.a)(t,2),i=a[0],l=a[1];Object(n.useEffect)(function(){e.handleGetCheap(),e.handleGetBusiness()},[]);var c=e.classes,u=e.cheap,o=e.business,s=e.handleAddCheapFlight,m=e.handleAddBusinessFlight,p=r.a.createElement(Ae,{cheap:u,business:o}),d=r.a.createElement(Ue,{handleAddCheapFlight:s,handleAddBusinessFlight:m});return r.a.createElement(V.MuiThemeProvider,{theme:Ze},r.a.createElement(Ie.a,{container:!0},r.a.createElement(ze.a,{position:"sticky",color:"default"},r.a.createElement(Ye.a,{value:i,onChange:function(e,t){return function(e,t){l(t)}(0,t)},variant:"fullWidth"},r.a.createElement($e.a,{label:"Flight List",component:M.b,to:"/"}),r.a.createElement($e.a,{label:"Add Flight",component:M.b,to:"/flight_form"}))),r.a.createElement(Ie.a,{item:!0,xs:12},r.a.createElement(Ke.a,{className:c.root},r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/",exact:!0,component:function(){return p}}),r.a.createElement(z.a,{path:"/flight",exact:!0,component:function(){return p}}),r.a.createElement(z.a,{path:"/flight_form",component:function(){return d}}),r.a.createElement(z.a,{component:We}))))))}),at=Object(c.b)(function(e){return{cheap:e.cheap,business:e.business}},function(e){return{handleGetCheap:function(){e({type:d})},handleGetBusiness:function(){e({type:h})},handleAddCheapFlight:function(t){e({type:"ADD_CHEAP_FLIGHT",flight:t})},handleAddBusinessFlight:function(t){e({type:"ADD_BUSINESS_FLIGHT",flight:t})}}})(tt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.d(t,"store",function(){return nt});var nt=function(){var e=Object(s.a)();return Object(u.a)({},Object(o.e)(v,Object(o.a)(e)),{runSaga:e.run(W)})}();l.a.render(r.a.createElement(c.a,{store:nt},r.a.createElement(function(){return r.a.createElement(M.a,null,r.a.createElement(at,null))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[210,1,2]]]);
//# sourceMappingURL=main.c910c295.chunk.js.map