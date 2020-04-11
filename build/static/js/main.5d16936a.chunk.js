(this.webpackJsonpexpensify=this.webpackJsonpexpensify||[]).push([[0],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=n(13),u=n(12),s=n(20),l=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Expensify"),r.a.createElement(u.c,{to:"/",activeClassName:"is-active",exact:!0},"Home"),r.a.createElement(u.c,{to:"/dashboard",activeClassName:"is-active"},"Dashboard"),r.a.createElement(u.c,{to:"/create",activeClassName:"is-active"},"Add an expense"),r.a.createElement(u.c,{to:"/help",activeClassName:"is-active"},"Help"))};n(103);var p=function(){return r.a.createElement("div",null)},d=function(e){e.dispatch;var t=e.id,n=e.description,a=e.amount,o=e.createdAt,c=e.note;return r.a.createElement("div",null,r.a.createElement(u.b,{to:"/edit/".concat(t)},r.a.createElement("h3",null,n)),r.a.createElement("p",null,a," - ",o),r.a.createElement("p",null,c))},m=n(1),h=n.n(m),E=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter((function(e){var t=h()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),c=!o||o.isSameOrAfter(t,"day"),i=e.description.toLowerCase().includes(n.toLowerCase());return a&&c&&i})).sort((function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:void 0}))},f=Object(i.b)((function(e){return{expenses:E(e.expenses,e.filters)}}))((function(e){return r.a.createElement("div",null,0!==e.expenses.length?e.expenses.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))})):r.a.createElement("p",null,"No expenses..."))})),v=n(16),b=n(17),g=n(18),D=n(19),O=n(45),x=function(e){Object(D.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={calendarFocused:null},e.onDatesChange=function(t){var n=t.startDate,a=t.endDate;e.props.setStartDate(n),e.props.setEndDate(a)},e.onFocusChange=function(t){e.setState((function(){return{calendarFocused:t}}))},e.onTextChange=function(t){e.props.setTextFilter(t.target.value),console.log(t.target.value)},e.onSortChange=function(t){"date"===t.target.value?e.props.sortByDate():"amount"===t.target.value&&e.props.sortByAmount()},e}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Search: "),r.a.createElement("input",{type:"text",value:this.props.filters.text,onChange:this.onTextChange}),r.a.createElement("label",null,"Sort by:"),r.a.createElement("select",{value:this.props.filters.sortBy,onChange:this.onSortChange},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount")),r.a.createElement(O.DateRangePicker,{startDate:this.props.filters.startDate,endDate:this.props.filters.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calendarFocused,onFocusChange:this.onFocusChange,showClearDates:!0,numberOfMonths:1,isOutsideRange:function(){return!1}}))}}]),n}(r.a.Component),S=Object(i.b)((function(e){return{filters:e.filters}}),(function(e){return{setTextFilter:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_TEXT_FILTER",text:e}}(t))},sortByAmount:function(){return e({type:"SORT_BY_AMOUNT"})},sortByDate:function(){return e({type:"SORT_BY_DATE"})},setStartDate:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return{type:"SET_START_DATE",startDate:e}}(t))},setEndDate:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return{type:"SET_END_DATE",endDate:e}}(t))}}}))(x),y=function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(f,null))},C=h()();console.log(C.format("MMM Do, YYYY"));var A=function(e){Object(D.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).onDescriptionChange=function(e){var t=e.target.value;a.setState((function(){return{description:t}}))},a.onNoteChange=function(e){var t=e.target.value;a.setState((function(){return{note:t}}))},a.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||a.setState((function(){return{amount:t}}))},a.onDateChange=function(e){e&&a.setState((function(){return{createdAt:e}}))},a.onFocusChange=function(e){var t=e.focused;a.setState((function(){return{calendarFocused:t}}))},a.onSubmit=function(e){e.preventDefault(),a.state.description&&a.state.amount?(a.props.onSubmit({description:a.state.description,amount:parseFloat(a.state.amount,10),createdAt:a.state.createdAt.valueOf(),note:a.state.note}),a.setState((function(){return{error:""}})),console.log("Submitted!")):(a.setState((function(){return{error:"Please provide a description and an amount."}})),console.log(a.state.error))},a.state={description:e.expense?e.expense.description:"",amount:e.expense?e.expense.amount.toString():"",note:e.expense?e.expense.note:"",createdAt:e.expense?h()(e.expense.createdAt):h()(),calendarFocused:!1,error:""},a}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.onDescriptionChange,autoFocus:!0}),r.a.createElement("label",null,"Amount"),r.a.createElement("input",{type:"text",name:"amount",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement(O.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"Note for your expense",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("button",null,"Ajouter")))}}]),n}(r.a.Component),T=n(91),_=n.n(T),j=function(e){Object(D.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.addExpense(t),e.props.history.push("/dashboard")},e}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Add an expense"),r.a.createElement(A,{onSubmit:this.onSubmit}))}}]),n}(r.a.Component),N=Object(i.b)(void 0,(function(e){return{addExpense:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,a=e.note,r=void 0===a?"":a,o=e.amount,c=void 0===o?0:o,i=e.createdAt,u=void 0===i?0:i;return{type:"ADD_EXPENSE",expenses:{id:_()(),description:n,note:r,amount:c,createdAt:u}}}(t))}}}))(j),w=function(e){Object(D.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.editExpense(e.props.expense.id,t),e.props.history.push("/dashboard")},e.onClick=function(){e.props.removeExpense({id:e.props.expense.id}),e.props.history.push("/dashboard")},e}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,{expense:this.props.expense,onSubmit:this.onSubmit}),r.a.createElement("button",{onClick:this.onClick},"Remove"))}}]),n}(r.a.Component),F=Object(i.b)((function(e,t){return{expense:e.expenses.find((function(e){return e.id===t.match.params.id}))}}),(function(e,t){return{editExpense:function(t,n){return e(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(t,n))},removeExpense:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return{type:"REMOVE_EXPENSE",id:t}}(t))}}}))(w),B=function(){return r.a.createElement("div",null,"Help")},R=function(){return r.a.createElement("div",null,"404 Not found",r.a.createElement("br",null),r.a.createElement(u.b,{to:"/"},"Back to home"))},k=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:p,exact:!0}),r.a.createElement(s.a,{path:"/dashboard",component:y}),r.a.createElement(s.a,{path:"/create",component:N}),r.a.createElement(s.a,{path:"/edit",component:F,exact:!0}),r.a.createElement(s.a,{path:"/edit/:id",component:F}),r.a.createElement(s.a,{path:"/help",component:B}),r.a.createElement(s.a,{component:R}))))},X=n(36),M=n(21),P=n(92),I=[],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(P.a)(e),[t.expenses]);case"EDIT_EXPENSE":return e.map((function(e){return e.id===t.id?Object(M.a)({},e,{},t.updates):e}));case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==t.id}));default:return e}},L={text:"",sortBy:"date",startDate:h()().startOf("month"),endDate:h()().endOf("month")},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(M.a)({},e,{text:t.text});case"SORT_BY_DATE":return Object(M.a)({},e,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(M.a)({},e,{sortBy:"amount"});case"SET_START_DATE":return Object(M.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(M.a)({},e,{endDate:t.endDate});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=Object(X.c)(Object(X.b)({expenses:Y,filters:U}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),H=r.a.createElement(i.a,{store:V},r.a.createElement(k,null));c.a.render(H,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,n){e.exports=n(144)}},[[93,1,2]]]);
//# sourceMappingURL=main.5d16936a.chunk.js.map