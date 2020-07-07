(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(8),r=n.n(l),c=(n(14),n(15),n(6)),i=n(5),d=n(1),u=n(2),s=n(4),m=n(3);function f(e){var t=e.id,n=e.todo,o=e.onDeleted,l=e.onToggle,r=e.completed,c=r?"completed":"";return a.a.createElement("li",{className:c,key:t},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",checked:r,onClick:l,className:"toggle",id:"todo-".concat(t)}),a.a.createElement("label",{htmlFor:"todo-".concat(t)},n),a.a.createElement("button",{type:"button",className:"destroy",onClick:o})))}function p(e){var t=e.todos,n=e.onDeleted,o=e.onToggle;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement(f,{todo:e.todo,completed:e.completed,id:e.id,key:e.id,onDeleted:function(){return n(e.id)},onToggle:function(){return o(e.id)}})})))}function g(e){var t=e.todos,n=e.onToggleDoneAll;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:function(){return n(t)}}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))}var h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={todoText:""},e.onInputChange=function(t){e.setState({todoText:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.addNewTodo(e.state.todoText),e.setState({todoText:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("header",{className:"header"},a.a.createElement("form",{className:"item-add-form",onSubmit:this.onSubmit},a.a.createElement("h1",null,"todos"),a.a.createElement(g,{onToggleDoneAll:this.props.onToggleDoneAll,todos:this.props.todos}),a.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:this.onInputChange,value:this.state.todoText})))}}]),n}(a.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).links=[{name:"all",label:"All",url:"#/"},{name:"active",label:"Active",url:"#/active"},{name:"completed",label:"Complete",url:"#/completed"}],e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,o=this.links.map((function(e){var o=e.name,l=e.label,r=e.url,c=t===o?"selected":"";return a.a.createElement("a",{href:r,className:c,key:o,onClick:function(){return n(o)}},l)}));return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,o))}}]),n}(o.Component);var b=function(e){var t=e.clearHandler,n=e.completedTodos;return a.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return t(n)}},"Clear completed")};var E=function(e){var t=e.todo,n=e.done;return a.a.createElement("span",{className:"todo-count"},"".concat(t," items left, ").concat(n," completed"))};var T=function(e){var t=e.todosCount,n=e.doneCount,o=e.filter,l=e.onFilterChange,r=e.clearHandler,c=e.completedTodos;return a.a.createElement("footer",{className:"footer"},a.a.createElement(E,{todo:t,done:n}),a.a.createElement("ul",{className:"filters"},a.a.createElement(v,{filter:o,onFilterChange:l})),a.a.createElement(b,{clearHandler:r,completedTodos:c}))},C=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],filter:"all"},e.deleteTodo=function(t){e.setState((function(e){var n=e.todos,o=n.findIndex((function(e){return e.id===t}));return{todos:[].concat(Object(i.a)(n.slice(0,o)),Object(i.a)(n.slice(o+1)))}}))},e.addNewTodo=function(t){t.trim().length>0&&e.setState((function(e){return{todos:[].concat(Object(i.a)(e.todos),[{id:e.todos.length+1,todo:t,completed:!1}])}}))},e.toggleProperty=function(e,t){var n=e.findIndex((function(e){return e.id===t}));return[].concat(Object(i.a)(e.slice(0,n)),[Object(c.a)(Object(c.a)({},e[n]),{},{completed:!e[n].completed})],Object(i.a)(e.slice(n+1)))},e.onToggle=function(t){e.setState((function(n){var o=n.todos;return{todos:e.toggleProperty(o,t)}}))},e.onToggleDoneAll=function(t){t.map((function(t){return e.onToggle(t.id)}))},e.onFilterChange=function(t){e.setState({filter:t})},e.filterAll=function(t){e.setState((function(e){return{todos:e.todos}}))},e.filterTodo=function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}));default:return e}},e.clearHandler=function(t){t.map((function(t){return e.deleteTodo(t.id)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,o=this.filterTodo(t,n),l=t.filter((function(e){return!e.completed})),r=l.length,c=t.filter((function(e){return e.completed})),i=c.length;return a.a.createElement("section",{className:"todoapp"},a.a.createElement(h,{addNewTodo:this.addNewTodo,todos:l,onToggleDoneAll:this.onToggleDoneAll}),a.a.createElement("section",{className:"main"},a.a.createElement(p,{todos:o,onDeleted:this.deleteTodo,onToggle:this.onToggle})),t.length>0&&a.a.createElement(T,{todosCount:r,doneCount:i,filter:n,onFilterChange:this.onFilterChange,clearHandler:this.clearHandler,completedTodos:c}))}}]),n}(a.a.Component);r.a.render(a.a.createElement(C,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c39eff6a.chunk.js.map