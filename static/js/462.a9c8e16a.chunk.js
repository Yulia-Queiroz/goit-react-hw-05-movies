/*! For license information please see 462.a9c8e16a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[462],{931:function(t,r,e){e.r(r),e.d(r,{default:function(){return k}});var n=e(433),o=e(439),i=e(791),a=e(689),c=e(861),u=e(243);function s(){s=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(O){u=function(t,r,e){return t[r]=e}}function h(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:Z(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=h;var f={};function p(){}function d(){}function v(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==r&&e.call(m,i)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function Z(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:N(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var h,l,f,p,d,v,y,g={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmU5MTY4YmE3NmI2ZGE5OTVmMzNhZGQ4ZWZmN2ZiZiIsInN1YiI6IjY0ODJmZTg3ZDJiMjA5MDBjYTFlNDY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NihzaXrY9zZXZSNtZ-ZwpMbUiWYKxCxfvY0RzSPq49E"}},m=function(){var t=(0,c.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits"),g);case 2:if(200===(e=t.sent).status){t.next=5;break}throw new Error(e.status);case 5:if(0!==e.data.cast.length){t.next=7;break}throw new Error("No cast found");case 7:return t.abrupt("return",e.data);case 8:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),w=e(168),x=e(867),b=x.ZP.section(h||(h=(0,w.Z)(["\n  margin: 20px;\n"]))),Z=x.ZP.div(l||(l=(0,w.Z)(["\n  text-align: center;\n  font-size: 25px;\n"]))),E=x.ZP.ul(f||(f=(0,w.Z)(["\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n"]))),L=x.ZP.li(p||(p=(0,w.Z)(["\n  padding: 5px;\n  margin: 5px;\n  width: calc(14.28% - 10px);\n  text-align: center;\n  margin: 10px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  border-radius: 5px;\n"]))),j=x.ZP.img(d||(d=(0,w.Z)(["\n  max-width: 100%;\n  border-radius: 5%;\n"]))),_=x.ZP.p(v||(v=(0,w.Z)(["\n  margin-top: 5px;\n"]))),N=x.ZP.p(y||(y=(0,w.Z)(["\n  margin-top: 5px;\n  color: gray;\n"]))),O=e(184),k=function(){var t=(0,i.useState)([]),r=(0,o.Z)(t,2),e=r[0],c=r[1],u=(0,i.useState)(null),s=(0,o.Z)(u,2),h=s[0],l=s[1],f=(0,a.UO)().movieId;return(0,i.useEffect)((function(){m(f).then((function(t){return c((0,n.Z)(t.cast))})).catch((function(t){return l(t)}))}),[f]),(0,O.jsxs)(b,{children:[h&&(0,O.jsx)(Z,{children:"No cast found."}),!h&&(0,O.jsx)(E,{children:e.map((function(t){return(0,O.jsxs)(L,{children:[(0,O.jsx)(j,{src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t.name}),(0,O.jsx)(_,{children:t.name}),(0,O.jsx)(N,{children:t.character})]},t.cast_id)}))})]})}}}]);
//# sourceMappingURL=462.a9c8e16a.chunk.js.map