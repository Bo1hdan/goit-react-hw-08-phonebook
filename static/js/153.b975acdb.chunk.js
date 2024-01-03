"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{153:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r=t(942),u=t(413),a=t(439),i=t(791),o=t(634),c="NOT_FOUND";var l=function(n,e){return n===e};function s(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,u=void 0===r?l:r,a=t.maxSize,i=void 0===a?1:a,o=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(u),f=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:c},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var u=t[r];return r>0&&(t.splice(r,1),t.unshift(u)),u.value}return c}return{get:r,put:function(e,u){r(e)===c&&(t.unshift({key:e,value:u}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,s);function p(){var e=f.get(arguments);if(e===c){if(e=n.apply(null,arguments),o){var t=f.getEntries(),r=t.find((function(n){return o(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function f(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function p(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var a,i=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=o,s=l.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],m=f(r),h=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],e=m.length,t=0;t<e;t++)n.push(m[t].apply(null,arguments));return a=h.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:m,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return u}var d=p(s),m=function(n){return n.filter.filter},h=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},y=d([h,m],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),x=t(434),j=t(184),b=function(){var n=(0,x.v9)(h),e=(0,i.useState)({name:"",number:""}),t=(0,a.Z)(e,2),c=t[0],l=t[1],s=(0,x.I0)(),f=function(n){var e=n.target,t=e.name,a=e.value;l((function(n){return(0,u.Z)((0,u.Z)({},n),{},(0,r.Z)({},t,a))}))};return(0,j.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),function(e){var t=n.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}));if(t)return alert("".concat(t.name," is already in your contacts"));s((0,o.uK)(e))}(c),l({name:"",number:""})},children:[(0,j.jsxs)("label",{htmlFor:"name",children:["Name",(0,j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:f,value:c.name})]}),(0,j.jsxs)("label",{htmlFor:"number",children:["Number",(0,j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:f,value:c.number})]}),(0,j.jsx)("button",{type:"submit",children:"Add to contacts"})]})},g={formWrap:"ContactForm_formWrap__LBMtj",wrapper:"ContactForm_wrapper__-Umw-"},w=function(n){var e=n.children;return(0,j.jsx)("h2",{className:g.title,children:e})},C=function(n){var e=n.children;return(0,x.v9)(v)?(0,j.jsx)("div",{children:" Loading... "}):(0,j.jsx)("ul",{children:e})},k=t(825),A=function(){var n=(0,x.v9)(m).filter,e=(0,x.I0)();return(0,j.jsx)("label",{htmlFor:"filter",children:(0,j.jsx)("input",{type:"text",name:"filter",required:!0,onChange:function(n){return e((0,k.z)(n.target.value))},value:n})})},F=function(){var n=(0,x.v9)(y),e=(0,x.I0)();return n.map((function(n){return(0,j.jsxs)("li",{children:[n.name," : ",n.number,(0,j.jsx)("button",{onClick:function(){return t=n.id,e((0,o.GK)(t));var t},children:"Delete"})]},n.id)}))},_=function(){var n=(0,x.I0)(),e=(0,x.v9)(o.yF),t=e.isLoading,r=e.error;return(0,i.useEffect)((function(){n((0,o.yF)())}),[n]),(0,j.jsxs)("div",{className:g.wrapper,children:[(0,j.jsx)(w,{children:"Phonebook"}),(0,j.jsx)(b,{}),(0,j.jsx)(w,{children:"Contacts"}),t&&(0,j.jsx)("p",{children:"Loading contacts..."}),r&&(0,j.jsx)("p",{children:r}),(0,j.jsx)(A,{}),(0,j.jsx)(C,{children:(0,j.jsx)(F,{})})]})}}}]);
//# sourceMappingURL=153.b975acdb.chunk.js.map