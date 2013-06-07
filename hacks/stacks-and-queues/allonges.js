/*! http://github.com/raganwald/allong.es v0.14.0 2013-05-06 (c) 2012-2013 Reg Braithwaite MIT Licensed */
(function(n){function t(n){var t,r,u,e,i,o,c,l,a;if(u=[],t=n,i=t.split(/\s*->\s*/m),i.length>1)for(;i.length;)t=i.pop(),u=i.pop().split(/\s*,\s*|\s+/m),i.length&&i.push("(function("+u+"){return ("+t+")})");else if(t.match(/\b_\b/))u="_";else if(r=t.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),e=t.match(/[+\-*\/%&|\^\.=<>!]\s*$/m),r||e)r&&(u.push("$1"),t="$1"+t),e&&(u.push("$2"),t+="$2");else for(c=n.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*\s*:|this|arguments|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g,"").match(/([a-z_$][a-z_$\d]*)/gi)||[],l=0,a=c.length;a>l;l++)o=c[l],u.indexOf(o)>=0||u.push(o);return Function(u,"return ("+t+")")}function r(n){return"function"==typeof n?n:"string"==typeof n&&/^[_a-zA-Z]\w*$/.test(n)?function(){var t,r,u;return r=arguments[0],t=arguments.length>=2?z.call(arguments,1):[],(u=r[n]).call.apply(u,[r].concat(z.call(t)))}:"string"==typeof n?t(n):"function"==typeof n.lambda?n.lambda():"function"==typeof n.toFunction?n.toFunction():void 0}function u(){var n,t,r,u,e=arguments[0],i=z.call(arguments,1);for(t=0;i.length>t;++t){r=i[t],u=r.except||[],u.push("except");for(n in r)0>u.indexOf(n)&&r.hasOwnProperty(n)&&(e[n]=r[n])}return e}function e(n){return n.reduce(function(n,t){return n.unshift(t),n},[])}function i(n){function t(n){n.forEach(function(n){q(n)?t(n):r.push(n)})}var r=[];return t(n),r}function o(n){return n()}function c(n){return function t(r){return null==r?t:n(r)}}function l(n){return function t(r,u){return null==r?t:null==u?c(function(t){return n(r,t)}):n(r,u)}}function a(n){return function t(r,u,e){return null==r?t:null==u?l(function(t,u){return n(r,t,u)}):null==e?c(function(t){return n(r,u,t)}):n(r,u,e)}}function f(n){return function t(r,u,e,i){return null==r?t:null==u?a(function(t,u,e){return n(r,t,u,e)}):null==e?l(function(t,e){return n(r,u,t,e)}):null==i?c(function(t){return n(r,u,e,t)}):n(r,u,e,i)}}function s(n,t,r){function u(){var u=z.call(arguments,0,arguments.length),i=u.indexOf(void 0)>=0?u.indexOf(void 0):u.length,o=t.concat(u.slice(0,i)),c=o.concat(r),l=c.length,a=e-l;return 0>=a?n.apply(this,c):s(n,o,r)}t||(t=[]),r||(r=[]);var e=n.length,i=e-t.length-r.length;return D>i?P[i](u):E(i,u)}function p(n,t){return n.apply(this,t)}function h(n,t){var r=n.length-t.length;return n.length>0&&r>0?S(r,function(r){return n.apply(this,t.concat(r))}):n.apply(this,t)}function g(n,t){var r=n.length-t.length;return n.length>0&&r>0?S(r,function(r){return n.apply(this,r.concat(t))}):n.apply(this,t)}function v(n){return 1===n?function(n){return[n]}:2===n?function(n,t){return[n,t]}:3===n?function(n,t,r){return[n,t,r]}:S(function(n){return n})}function y(n){return n=r(n),S(function(t){return 1!==t.length||q(t[0])?mt(t,n):n.call(this,t[0])})}function m(n,t){function u(t){return"function"==typeof t&&t(n),n}return t=r(t),void 0===t?u:u(t)}function d(n){return n=r(n),function(){return n.apply(this,arguments),this}}function _(n){return n=r(n),function(t){return t=r(t),J(bt(n),t)}}function b(n){n=r(n);var t,u=!1;return t=n.name?function(){return this.__once__||(this.__once__={}),this.__once__[n.name]?!0:(this.__once__[n.name]=!0,!1)}:function(){return u?!0:(u=!0,!1)},function(){return t.call(this)?void 0:n.apply(this,arguments)}}function w(n,t){n=r(n);var u={};return t||(t=function(n){return JSON.stringify(n)}),function(){var r=t.call(this,arguments);return u[r]||(u[r]=n.apply(this,arguments))}}function A(n){return function t(){return void 0!==arguments[0]?t.call(arguments[0]):(u(this,n),this)}}function x(n){return function(t){function r(){var n=this instanceof r?this:new r;return t.apply(n,arguments)}return r.prototype=u(new t,n),r}}function W(n,t,u){n=r(n);var e;return u&&(n=wt(n)),e=function(){return n.apply(t,arguments)},e.unbound=function(){return n},e}function F(n){n=r(n);var t=z.call(arguments,1);return function(r){return n.apply(r,t)}}function $(n,t){return null==t?function(t){return n[t]}:n[t]}function L(n,t){return null==t?function(t){return t[n]}:t[n]}function O(n){return this instanceof O?(this.closure=n,void 0):new O(n)}function j(n){var t=S(function(t){for(var r=n.apply(this,t);r instanceof O;)r=r.force();return r});return t.__trampolined_fn=n,t}var n=this,z=Array.prototype.slice,N=Array.prototype.map,R=(Array.prototype.hasOwnProperty,Array.prototype.filter),M=Array.isArray,Z=Object.prototype.toString,q=M||function(n){return"[object Array]"==Z.call(n)},C=function(n){return"[object String]"==Z.call(n)},T=function(n){return"[object Function]"==Z.call(n)};T=function(n){return"function"==typeof n};var I={es:{}};2>"ab".split(/a*/).length&&"undefined"!=typeof console&&null!==console&&console.log("Warning: IE6 split is not ECMAScript-compliant.  This breaks '->1'"),u(I.es,{flatten:i});var S=function(){function n(n){var t=n.length;return 1>t?n:1===t?function(){return n.call(this,z.call(arguments,0))}:function(){var r=arguments.length,u=z.call(arguments,0,t-1),e=Math.max(t-r-1,0),i=Array(e),o=z.call(arguments,n.length-1);return n.apply(this,u.concat(i).concat([o]))}}var t={};return function(u,e){null==e?(e=r(u),u=0):e=r(e);var i=e.length;if(0===u)return n(e);if(u>=i){var o,c=i-1,l=""+u+"-"+c;if(null==t[l]){for(var a=Array(u),f=0;u>f;++f)a[f]="__"+f;var s=a.join();if(i>1){var p=a.slice(0,i-1).join();o="return function ("+s+") { return fn.call("+p+", [].slice.call(arguments,"+(i-1)+")); };"}else o="return function ("+s+") { return fn.call(this, [].slice.call(arguments, 0)); };";t[l]=Function(["fn"],o)}return t[l](e)}throw"not supported yet"}}(),E=function(){var n={};return function t(u,e){if(null==n[u]){for(var i=Array(u),o=0;u>o;++o)i[o]="__"+o;var c=i.join(),l="return function ("+c+") { return fn.apply(this, arguments); };";n[u]=Function(["fn"],l)}return null==e?function(n){return t(u,n)}:n[u](r(e))}}(),P=[o,c,l,a,f],D=P.length;u(I.es,{curryWithLeftAndRight:s}),u(I.es,{variadic:S,unvariadic:E,unary:c,binary:l,ternary:a,quaternary:f});var J=S(function J(n){n=n.map(r);var t,u,e,i;return 0===n.length?function(){}:1===n.length?n[0]:2===n.length?(t=n[0],u=t.length,e=n[1],1===u?function(n){return t(e(n))}:2===u?function(n,r){return t(e(n),r)}:3===u?function(n,r,u){return t(e(n),r,u)}:S(function(n,r){t.apply(this,[e(n)].concat(r))})):(t=n[0],u=t.length,function(t){for(i=n.length-1;i>=0;--i)t=n[i](t);return t})});u(I.es,{compose:J});var K=function(){function n(n){return S(function(t){return n.apply(this,e(t))})}function t(n){return function t(r){return null==r?t:n(r)}}function i(n){return function r(u,e){return null==u?r:null==e?t(function(t){return n(t,u)}):n(e,u)}}function o(n){return function r(u,e,o){return null==u?r:null==e?i(function(t,r){return n(t,r,u)}):null==o?t(function(t){return n(t,e,u)}):n(o,e,u)}}function c(n){return function r(u,e,c,l){return null==u?r:null==e?o(function(t,r,e){return n(t,r,e,u)}):null==c?i(function(t,r){return n(t,r,e,u)}):null==l?t(function(t){return n(t,c,e,u)}):n(l,c,e,u)}}function l(n,t){function r(){var r=z.call(arguments,0,arguments.length),o=r.indexOf(void 0)>=0?r.indexOf(void 0):r.length;return v=t.concat(r.slice(0,o)),argsLength=v.length,i=u-argsLength,0>=i?n.apply(this,e(v)):l(n,v)}t||(t=[]);var u=n.length,i=u-t.length;return f>i?a[i](r):E(i,r)}var a=[n,t,i,o,c],f=a.length;return u(S(function(n,t){n=r(n);var u=n.length,e=f>u?a[u](n):l(n);return 0===t.length?e:e.apply(this,t)}),{unary:t,binary:i,ternary:o,quaternary:c,callWithLeftFlipped:l})}(),B=c(K);u(I.es,{callFlipped:K,flip:B});var G=l(function(n,t){return s(n,t,[])}),H=S(function(n,t){return s(n,t,[])}),Q=c(H),U=H(p),V=u(S(U),{unary:c,binary:l,ternary:a,quaternary:f}),X=B(p),Y=H(h),nt=S(h),tt=B(h),rt=B(g),ut=H(g),et=S(g),it=S(function(n,t){return s(n,[],t)}),ot=l(H),ct=B(ot),lt=l(it),at=B(lt),ft=S(function(n,t){return t===[]?function(t){return t[n].bind(t)}:function(r){return Function.prototype.bind.apply(r[n],[r].concat(t))}}),st=S(function(n,t){var r=n.length,u=t.length;return S(function(e){var i=e.length,o=Math.max(r-i,0);return e=e.concat(t.slice(u-o)),n.apply(this,e)})});u(I.es,{applyNow:U,apply:G,callNow:V,call:H,callLeft:H,callRight:it,applyNowFlipped:X,applyLeftNow:Y,callLeftNow:nt,applyLeftNowWith:tt,applyRightNow:ut,callRightNow:et,applyRightNowWith:rt,callFirst:ot,callLast:lt,callFirstWith:ct,callLastWith:at,bound:ft,defaults:st,args:v,curry:Q});var pt=l(function pt(n,t){return t=r(t),R.call(n,t)}),ht=B(pt),gt=l(function gt(n,t){t=r(t);var u=t.length;return 1!==u&&(t=c(t)),N.call(n,t)}),vt=B(gt),yt=l(function(n,t){return S(t.length,function(r){return U(t,gt(r,n))})}),mt=l(function(n,t){return t=r(t),N.call(n,function(n){return Array.isArray(n)?mt(n,t):t(n)})}),dt=B(mt);u(I.es,{map:gt,mapWith:vt,mapArgumentsWith:yt,filter:pt,filterWith:ht,deepMap:mt,deepMapWith:dt});var _t=y(function _t(n){return n=r(n),function(){var t;if(0!==arguments.length){for(t=0;arguments.length>t;++t)if(null==arguments[t])return arguments[t];return n.apply(this,arguments)}}}),bt=function(n){return n=r(n),function(){return n.apply(this,arguments),arguments[0]}};u(I.es,{maybe:_t,tap:m,fluent:d,returnFirst:bt,tee:_,once:b,memoized:w}),u(I.es,{mixin:A,classDecorator:x});var wt=function wt(n){return n=r(n),n.unbound?wt(n.unbound()):n},At=J(vt,L),xt=B(At),Wt=S(function(n,t){return S(function(r,u){var e=r[n];return e.apply(r,t.concat(u))})});u(I.es,{bind:W,unbind:wt,invoke:F,get:$,getWith:L,send:Wt,pluckWith:At,pluck:xt}),O.prototype.force=function(){return this.closure()};var Ft=S(function(n,t){var r=this;return n.__trampolined_fn instanceof Function?new O(function(){return n.__trampolined_fn.apply(r,t)}):new O(function(){return n.apply(r,t)})});u(I.es,{trampoline:j,tailCall:Ft,Thunk:O}),function(n){function t(n,t,u){var e,i;for(t=r(t),e=void 0!==u?u:n(),i=n();null!=i;)e=t.call(i,e,i),i=n();return e}function e(n,t){var u=A;return t=r(t),function(){return u===A?u=n:null!=u?u=t.call(u,u):u}}function i(n,t){var u,e,i=n;return t=r(t),function(){return null!=i?(u=t.call(i,i),e=u[1],i=null!=e?u[0]:void 0,e):void 0}}function o(n,t,u){var e=u;return t=r(t),function(){return element=n(),null==element?element:e=void 0===e?element:t.call(element,e,element)}}function a(n,t,u){var e,i=u;return t=r(t),function(){return element=n(),null==element?element:void 0===i?i=element:(e=t.call(element,i,element),i=e[0],e[1])}}function f(n,t){return t=r(t),function(){var r;return r=n(),null!=r?t.call(r,r):void 0}}function s(n,t){return t=r(t),function(){var r;for(r=n();null!=r;){if(t.call(r,r))return r;r=n()}return void 0}}function p(n,t){return t=r(t),s(n,function(n){return!t(n)})}function h(n,t){return t=r(t),s(n,t)()}function g(n,t,r){for(var u=0;t-->0;)n();return null!=r?function(){return r>=++u?n():void 0}:n}function v(n,t){return g(n,0,null==t?1:t)}function y(n){var t=0;return function(){return n[t++]}}function m(n){var t,r,u;return t=0,u=[],r=function(){var e,i;return e=n[t++],e instanceof Array?(u.push({array:n,index:t}),n=e,t=0,r()):void 0===e?u.length>0?(i=u.pop(),n=i.array,t=i.index,r()):void 0:e}}function d(n){return function(){return n}}function _(n,t,r){return function(){var u;return n>t?void 0:(u=n,n+=r,u)}}function b(n,t,r){return function(){var u;return t>n?void 0:(u=n,n-=r,u)}}function w(n,t,r){return null==n?_(1,1/0,1):null==t?_(n,1/0,1):null==r?t>=n?_(n,t,1):b(n,t,1):r>0?_(n,t,r):0>r?b(n,t,Math.abs(r)):k(n)}var A={},x=st(l(g),1),W=c(w);u(n.es,{iterators:{accumulate:o,accumulateWithReturn:a,fold:t,unfold:e,unfoldWithReturn:i,map:f,select:s,reject:p,filter:s,find:h,slice:g,drop:x,take:v,FlatArrayIterator:y,RecursiveArrayIterator:m,constant:d,K:d,numbers:W,range:w}})}(I);var $t=require("promise"),kt=function(n){var t;if(n)for(t in n)n.hasOwnProperty(t)&&(this[t]=n[t])};kt.prototype={of:function(n){return n},map:function(n){return n},chain:function(n,t){return this.map(t)(n)}};var Lt=new kt,Ot=new kt({map:_t}),jt=new kt({of:function(n){return[n,""]},map:function(n){return function(t){var r,u,e,i,o;return e=t[0],i=t[1],o=n(e),u=o[0],r=o[1],[u,i+r]}}});new kt({of:function(n){return[n,[]]},chain:function(n,t){var r=n[0],u=n[1],e=t(r),o=e[0],c=i(u.concat(e[1]));return[o,c]}});var zt=new kt({of:function(n){return[n]},join:function(n){return n.reduce(this.concat,this.zero())},map:function(n){return function(t){return t.map(n)}},zero:function(){return[]},concat:function(n,t){return n.concat(t)},chain:function(n,t){return this.join(this.map(t)(n))}}),Nt=new kt({of:function(n){return new $t(function(t){return t(n)})},map:function(n){return function(t){return new $t(function(r,u){return t.then(n,u).then(r,u)})}}}),Rt={chain:function(n,t){return 1===n.length?function(r,u){return n(r,S(function(n){return t.apply(null,n.concat([u]))}))}:S(function(r){var u=r[r.length-1],e=z.call(r,0,r.length-1);return n.apply(this,e.concat([S(function(n){return t.apply(null,n.concat([u]))})]))})}},Mt=B(J),Zt=S(function(n){var t,r,u,e,o,c;return 0===n.length?function(n){return n}:(n=i(n),T(n[0])?Mt.apply(this,n):(r=C(n[0])?Zt[n[0]]:n[0],o=r.map&&r.map.bind(r),c=r.chain&&r.chain.bind(r),e=r.of&&r.of.bind(r),null==c&&(c=null==o?function(n,t){return t(n)}:function(n,t){return o(t)(n)}),t=n.length>=2?z.call(n,1):[],u=t.length>0?t[0].length:0,T(e)?S(u,function(n){return t.reduce(c,e.apply(this,n))}):(chained=t.slice(1).reduce(c,t[0]),E(u,chained))))});u(Zt,{Identity:Lt,Maybe:Ot,List:zt,Writer:jt,Then:Nt,Callback:Rt}),u(I.es,{pipeline:Mt,sequence:Zt});var qt=y(function qt(n){return S(n.length,function(t){if(t.length>0){var r=t.reduce(function(n,t){return n&&t});return r&&n.apply(this,t)}})}),Ct=y(function Ct(n){return S(n.length,function(t){if(t.length>0){var r=t.reduce(function(n,t){return n||t});return r||n.apply(this,t)}})});u(I.es,{andand:qt,oror:Ct});var Tt=y(function Tt(n){return function(t){return new $t(function(r){return r(n(t))})}}),It=y(function It(n){return 1===n.length?function(){return new $t(function(t){return n(function(n){return t(n)})})}:S(n.length-1,function(t){return new $t(function(r){return n.apply(this,t.concat([function(n){return r(n)}]))})})}),St=y(function St(n){return function(t,r){return r(n(t))}}),Et=y(function St(n){return function(t,r){var u=n(t);u.then(r,function(n){throw n})}});u(Zt,{fn2Then:Tt,fn2Callback:St,callback2Then:It,then2Callback:Et}),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=I),exports.allong=I):n.allong=I}).call(this);
